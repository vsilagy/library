const form = document.getElementById('book-form');
const newBookBtn = document.getElementById('new-book');
const library = document.getElementById('library');
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('.close-modal');

let myLibrary = [];
myLibrary.push(
  new Book("Heart of Darkness", "Joseph Conrad", "188", true),
  new Book("1984", "George Orwell", "304", true),
  new Book("Blood Meridian", "Cormac McCarthy", "351", true),
  new Book("Fictions", "Jorge Luis Borges", "192", false)
  )
  
renderLibrary()
// book constructor
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let status = document.getElementById('status').checked;

  let book = new Book(title, author, pages, status);
  myLibrary.push(book)
  renderLibrary()
}

function createBookCard(book, index) {
  // div card
  const card = document.createElement('div');
  card.classList.add("book-card");
  card.setAttribute("data-index", index);
  // p title
  const title = document.createElement('p');
  title.classList.add("book-title");
  title.textContent = `${book.title}`;
  // p author
  const author = document.createElement('p');
  author.classList.add("book-author");
  author.textContent = `By ${book.author}`;
  // p pages
  const pages = document.createElement('p');
  pages.classList.add("book-pages");
  pages.textContent = `No Pages: ${book.pages}`;
  // toggle read btn
  const readBtn = document.createElement('button');
  readBtn.classList.add("book-status");
  if (book.status) {
    readBtn.textContent = `Read`
    card.classList.add("status-read")
  } else {
    readBtn.textContent = `Not Read`
    card.classList.add("status-not-read")
  }
  // remove card btn
  const removeBtn = document.createElement('button')
  removeBtn.classList.add("book-remove")
  removeBtn.textContent = `Remove`
  // append
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(readBtn);
  card.appendChild(removeBtn)
  library.appendChild(card);

  readBtn.addEventListener("click", () => {
    book.status = !book.status;
    renderLibrary()
  })

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(index, 1)
    renderLibrary()
  })
}

// Event Listener
form.addEventListener('submit', (e) => {
  addBookToLibrary();
  form.reset();
  modalContainer.style.display = "none";
  e.preventDefault();
})

newBookBtn.addEventListener('click', () => {
  modalContainer.style.display = "flex"
})

closeModalBtn.addEventListener('click', () => {
  modalContainer.style.display = "none"
})

// Render Library
function renderLibrary () {
  library.textContent = "";
  myLibrary.map((book, index) => {
    createBookCard(book, index)
  });
}