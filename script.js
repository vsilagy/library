const form = document.getElementById("book-form");
const newBookBtn = document.getElementById("new-book");
const library = document.getElementById("library");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".close-modal");

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

// class Library {
//   constructor() {
//     this.books = []
//   }

// }

let myLibrary = [];

// my books
myLibrary.push(
  new Book("Heart of Darkness", "Joseph Conrad", "188", true),
  new Book("1984", "George Orwell", "304", true),
  new Book("Blood Meridian", "Cormac McCarthy", "351", true),
  new Book("Fictions", "Jorge Luis Borges", "192", false),
  new Book("The Outsider", "Albert Camus", "119", true)
);

renderLibrary();

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let status = document.getElementById("status").checked;

  let book = new Book(title, author, pages, status);
  myLibrary.push(book);
  renderLibrary();
}

function createBookCard(book, index) {
  // div card
  const card = document.createElement("div");
  card.classList.add("book-card");
  card.setAttribute("data-index", index);
  // p title
  const title = document.createElement("p");
  title.classList.add("book-title");
  title.textContent = `${book.title}`;
  // p author
  const author = document.createElement("p");
  author.classList.add("book-author");
  author.textContent = `By ${book.author}`;
  // p pages
  const pages = document.createElement("p");
  pages.classList.add("book-pages");
  pages.textContent = `${book.pages} pages`;
  // div buttons
  const buttons = document.createElement("div");
  buttons.classList.add("book-buttons");
  // toggle read btn
  const readBtn = document.createElement("button");
  readBtn.classList.add("book-status");
  if (book.status) {
    readBtn.textContent = `Read`;
    card.classList.add("status-read");
  } else {
    readBtn.textContent = `Not Read`;
    card.classList.add("status-not-read");
  }
  // remove card btn
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("book-remove");
  removeBtn.textContent = `Remove`;
  // append
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(buttons);
  buttons.appendChild(readBtn);
  buttons.appendChild(removeBtn);
  library.appendChild(card);
  // toggle read status
  readBtn.addEventListener("click", () => {
    book.status = !book.status;
    renderLibrary();
  });
  removeBtn.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    renderLibrary();
  });
}
// Event Listener
form.addEventListener("submit", (e) => {
  addBookToLibrary();
  form.reset();
  modalContainer.style.display = "none";
  e.preventDefault();
});

newBookBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

// Render Library
function renderLibrary() {
  library.textContent = "";
  // add index
  myLibrary.map((book, index) => {
    createBookCard(book, index);
  });
}
