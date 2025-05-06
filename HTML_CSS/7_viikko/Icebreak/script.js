const players = [];
let currentPlayer = 1;
let quizIndex = 0;
let score = 0;

function savePlayer() {
  const name = document.getElementById("player-name").value.trim();
  const claim1 = document.getElementById("claim1").value.trim();
  const claim2 = document.getElementById("claim2").value.trim();
  const claim3 = document.getElementById("claim3").value.trim();
  const truth1 = document.getElementById("truth1").checked;
  const truth2 = document.getElementById("truth2").checked;
  const truth3 = document.getElementById("truth3").checked;

  const truthsCount = [truth1, truth2, truth3].filter(Boolean).length;
  if (!name || !claim1 || !claim2 || !claim3 || truthsCount !== 2) {
    alert("Täytä kaikki kentät ja merkitse täsmälleen 2 totuutta.");
    return;
  }

  players.push({
    name,
    claims: [
      { text: claim1, isTrue: truth1 },
      { text: claim2, isTrue: truth2 },
      { text: claim3, isTrue: truth3 },
    ],
  });

  if (players.length === 3) {
    document.getElementById("player-form").classList.add("hidden");
    document.getElementById("quiz-start").classList.remove("hidden");
  } else {
    currentPlayer++;
    document.getElementById("player-number").innerText = currentPlayer;
    document.getElementById("player-name").value = "";
    document.getElementById("claim1").value = "";
    document.getElementById("claim2").value = "";
    document.getElementById("claim3").value = "";
    document.getElementById("truth1").checked = false;
    document.getElementById("truth2").checked = false;
    document.getElementById("truth3").checked = false;
  }
}

function startQuiz() {
  document.getElementById("quiz-start").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  quizIndex = 0;
  score = 0;
  showQuizPlayer();
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function showQuizPlayer() {
  const player = players[quizIndex];
  document.getElementById(
    "quiz-player-name"
  ).innerText = `Osallistuja: ${player.name}`;

  const claimsDiv = document.getElementById("quiz-claims");
  claimsDiv.innerHTML = "";

  const shuffled = shuffleArray(player.claims);

  shuffled.forEach((claim) => {
    const btn = document.createElement("button");
    btn.className = "claim-button";
    btn.textContent = claim.text;
    btn.onclick = () => handleGuess(claim.isTrue, btn);
    claimsDiv.appendChild(btn);
  });

  document.getElementById("quiz-feedback").innerText = "";
  document.getElementById("next-button").classList.add("hidden");
}

function handleGuess(isTrue, button) {
  const feedback = document.getElementById("quiz-feedback");
  const buttons = document.querySelectorAll(".claim-button");

  buttons.forEach((btn) => (btn.disabled = true));

  if (!isTrue) {
    button.classList.add("correct");
    feedback.innerText = "Oikein! Tämä oli valhe.";
    feedback.style.color = "#28a745";
    score++;
  } else {
    button.classList.add("wrong");
    feedback.innerText = "Väärin! Tämä oli totta.";
    feedback.style.color = "#dc3545";
  }

  document.getElementById("next-button").classList.remove("hidden");
}

function nextQuiz() {
  quizIndex++;
  if (quizIndex < players.length) {
    showQuizPlayer();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-container").innerHTML = `
        <h2>Peli ohi!</h2>
        <p>Sait <strong>${score} / ${players.length}</strong> oikein!</p>
        <button onclick="location.reload()">Pelaa uudelleen</button>
      `;
}
