/* Tehtävä 14
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

const books = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const addBook = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pagesInput = document.getElementById("pages").value;
  const pages = parseFloat(pagesInput);

  if (title.trim() !== "" && author.trim() !== "" && !isNaN(pages)) {
    const newBook = new Book(title, author, pages);
    books.push(newBook);
    fullingHTML();
    titleInput.value = "Title";
    authorInput.value = "Author";
    pagesInput.value = "Pages";
  } else {
    alert("Please fill in all fields correctly.");
  }
};

function fullingHTML() {
  const list = document.getElementById("listBooks");
  list.innerHTML = "";

  books.forEach((book) => {
    const titleEl = document.createElement("p");
    titleEl.textContent = book.title;
    list.appendChild(titleEl);

    const authorEl = document.createElement("p");
    authorEl.textContent = book.author;
    list.appendChild(authorEl);

    const pagesEl = document.createElement("p");
    pagesEl.textContent = book.pages;
    list.appendChild(pagesEl);

    list.appendChild(document.createElement("hr"));
  });
}

fullingHTML();
