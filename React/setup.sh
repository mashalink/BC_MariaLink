#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./setup.sh <project-folder>            # create/setup project
#   ./setup.sh <project-folder> --start    # create/setup + immediately run npm run dev:all
#   ./setup.sh <project-folder> --reset    # clean inside project (node_modules, build artifacts, db.json, etc.)
#   ./setup.sh <project-folder> --nuke     # remove project folder (asks confirmation)
#   ./setup.sh <project-folder> --nuke --force  # remove without asking
#
# Example:
#   ./setup.sh my-app --start

PROJ="${1:-my-app}"
shift || true

ACTION=""
FORCE="no"

# parse flags simply
while (( "$#" )); do
  case "$1" in
    --start) ACTION="start"; shift ;;
    --reset) ACTION="reset"; shift ;;
    --nuke)  ACTION="nuke";  shift ;;
    --force) FORCE="yes";    shift ;;
    *) echo "Неизвестный аргумент: $1"; exit 1 ;;
  esac
done

confirm() {
  # ask yes/no, return 0 if yes
  read -r -p "$1 [y/N]: " ans || true
  case "${ans:-}" in y|Y|yes|YES) return 0 ;; *) return 1 ;; esac
}

rewrite_index_html() {
  local title="$1"
  cat > index.html <<HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
HTML
}

# try lsof; if missing, use node to probe ports
detect_port_with_lsof() {
  local p=3001
  while lsof -i :"$p" >/dev/null 2>&1; do p=$((p+1)); done
  echo "$p"
}

detect_port_with_node() {
  node -e '
    const net = require("net");
    const isFree = p => new Promise(r=>{
      const s = net.createServer()
        .once("error", ()=>r(false))
        .once("listening", ()=>s.close(()=>r(true)))
        .listen(p,"127.0.0.1");
    });
    (async()=>{
      let p=3001;
      while(!(await isFree(p))) p++;
      console.log(p);
    })();
  '
}

sed_inplace() {
  # usage: sed_inplace "s/from/to/" file
  if sed --version >/dev/null 2>&1; then
    sed -i "$@"
  else
    sed -i '' "$@"
  fi
}

# ------------------------------
# Nuke mode: remove project folder
# ------------------------------
if [[ "$ACTION" == "nuke" ]]; then
  if [[ -d "$PROJ" ]]; then
    if [[ "$FORCE" == "yes" ]] || confirm "Удалить папку '$PROJ' целиком и безвозвратно?"; then
      rm -rf "$PROJ"
      echo "💣 Папка '$PROJ' удалена."
    else
      echo "Отменено."
    fi
  else
    echo "Папка '$PROJ' не найдена."
  fi
  exit 0
fi

# ------------------------------
# Reset mode: clean inside project
# ------------------------------
if [[ "$ACTION" == "reset" ]]; then
  if [[ ! -d "$PROJ" ]]; then
    echo "Папка '$PROJ' не найдена. Нечего ресетить."; exit 1
  fi
  echo "🧹 Выполняю soft reset внутри '$PROJ'..."
  pushd "$PROJ" >/dev/null

  rm -rf node_modules dist .vite .cache 2>/dev/null || true
  rm -f db.json vite.config.js src/services/api.js 2>/dev/null || true
  mkdir -p public src/services src/assets
  find public -mindepth 1 -delete 2>/dev/null || true
  rm -f src/assets/react.svg src/assets/vite.svg 2>/dev/null || true
  rewrite_index_html "$PROJ"

  if [[ -f package.json ]]; then
    node -e '
      const fs = require("fs");
      const pkg = JSON.parse(fs.readFileSync("package.json","utf8"));
      pkg.scripts = { ...pkg.scripts, dev:"vite --open", build:"vite build", preview:"vite preview" };
      delete pkg.scripts.server;
      delete pkg.scripts["dev:all"];
      fs.writeFileSync("package.json", JSON.stringify(pkg,null,2));
      console.log("scripts reset");
    '
  fi

  popd >/dev/null
  echo "✅ Reset done."
  exit 0
fi

# ------------------------------
# Normal flow: create/setup project
# ------------------------------
echo "▶ Создаю/настраиваю Vite React проект: $PROJ"

# create project (if folder exists, npm create will error; allow existing by cd)
if [[ -d "$PROJ" && -f "$PROJ/package.json" ]]; then
  echo "Похоже проект уже существует — пропускаю create и перейду внутрь."
else
  npm create vite@latest "$PROJ" -- --template react
fi

cd "$PROJ"

# clean public safely
mkdir -p public src/assets
find public -mindepth 1 -delete 2>/dev/null || true
rm -f public/vite.svg src/assets/react.svg src/assets/vite.svg 2>/dev/null || true

# rewrite index.html to a minimal predictable template
echo "▶ Перезаписываю index.html"
rewrite_index_html "$PROJ"

# install deps
echo "▶ Устанавливаю зависимости (это может занять минуту)"
npm install
npm i -D json-server concurrently >/dev/null 2>&1 || npm i -D json-server concurrently

# find free port for json-server
echo "▶ Ищу свободный порт для json-server (стартую с 3001)..."
if command -v lsof >/dev/null 2>&1; then
  API_PORT="$(detect_port_with_lsof)"
else
  API_PORT="$(detect_port_with_node)"
fi
echo "   → выбран порт: $API_PORT"

# create db.json
cat > db.json <<'JSON'
{
  "todos": [
    { "id": 1, "title": "Learn Vite", "done": false },
    { "id": 2, "title": "Build React app", "done": true }
  ]
}
JSON

# write vite.config.js with proxy
cat > vite.config.js <<JS
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:$API_PORT',
        changeOrigin: true,
        rewrite: p => p.replace(/^\\/api/, '')
      }
    }
  }
})
JS

# add example api client and App.jsx
mkdir -p src/services
cat > src/services/api.js <<'JS'
export async function getTodos() {
  const res = await fetch('/api/todos')
  if (!res.ok) throw new Error('Failed to load todos')
  return res.json()
}
JS

cat > src/App.jsx <<'JSX'
import { useEffect, useState } from 'react'
import './App.css'
import { getTodos } from './services/api'

export default function App() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTodos().then(setTodos).catch(e => setError(e.message)).finally(() => setLoading(false))
  }, [])

  return (
    <div style={{ maxWidth: 640, margin: '40px auto', fontFamily: 'system-ui' }}>
      <h1>Vite + React + json-server</h1>
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.done} readOnly /> {t.title}
          </li>
        ))}
      </ul>
      <p style={{opacity:.7}}>API: <code>/api/todos</code> → <code>http://localhost:API_PORT_PLACEHOLDER/todos</code></p>
    </div>
  )
}
JSX

# replace placeholder in App.jsx with actual port (safe for GNU/BSD sed)
set +e
sed_inplace "s/API_PORT_PLACEHOLDER/$API_PORT/g" src/App.jsx 2>/dev/null
set -e

# update package.json scripts and bake server port
node -e '
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync("package.json","utf8"));
const port = process.argv[1];
pkg.scripts = {
  ...pkg.scripts,
  dev: "vite --open",
  build: "vite build",
  preview: "vite preview",
  server: "json-server --watch db.json --port " + port,
  "dev:all": "concurrently -n web,api -c auto \"npm:dev\" \"npm:server\""
};
fs.writeFileSync("package.json", JSON.stringify(pkg,null,2));
console.log("updated scripts");
' "$API_PORT"

cat <<TXT

✅ Setup finished.

Run both (front + api):
  npm run dev:all

Notes:
- Frontend (Vite) will try 5173 by default; if busy it will pick another port (e.g. 5174). Это нормально.
- Backend (json-server) is on http://localhost:$API_PORT
- Frontend fetch('/api/...') is proxied to the backend automatically.

Utilities:
  ./setup.sh $PROJ --reset         # clean inside project
  ./setup.sh $PROJ --nuke         # remove project folder (asks)
  ./setup.sh $PROJ --nuke --force # remove without asking

If npm run dev:all shows only Vite logs and no "[api]" output, run `npm run server` in another terminal to see json-server logs.

TXT

# auto-start if requested
if [[ "$ACTION" == "start" ]]; then
  echo "▶ Стартую web + api (npm run dev:all)"
  npm run dev:all
fi
