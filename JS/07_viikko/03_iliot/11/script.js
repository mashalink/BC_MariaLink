/* Tehtävä 11
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
    likes: 0,
  },
  {
    id: 2,
    title: "Second Post",
    content: "Here is some more content for another post.",
    likes: 0,
  },
  {
    id: 3,
    title: "Third Post",
    content: "Another interesting thought here.",
    likes: 0,
  },
];

function fullingHTML() {
  const list = document.getElementById("listPosts");
  list.innerHTML = "";

  posts.forEach((post, index) => {
    const titleEl = document.createElement("h2");
    titleEl.textContent = post.title;
    list.appendChild(titleEl);

    const contentEl = document.createElement("p");
    contentEl.textContent = post.content;
    list.appendChild(contentEl);

    const likesEl = document.createElement("span");
    likesEl.textContent = `Likes: ${post.likes}`;
    likesEl.id = `likes-${index}`;
    list.appendChild(likesEl);

    const likeBtn = document.createElement("button");
    likeBtn.textContent = "❤️";
    likeBtn.onclick = () => {
      posts[index].likes++;
      document.getElementById(
        `likes-${index}`
      ).textContent = `Likes: ${posts[index].likes}`;
    };
    list.appendChild(likeBtn);

    list.appendChild(document.createElement("hr"));
  });
}

fullingHTML();
