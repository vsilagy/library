const form = document.getElementById('book-form');
const newBookBtn = document.getElementById('new-book');
const libraryGrid = document.getElementById('library-grid');
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('.close-modal');

let myLibrary = [];
myLibrary.push(
  new Book("Heart of Darkness", "Joseph Conrad", "188", true),
  new Book("1984", "George Orwell", "304", true),
  new Book("Blood Meridian", "Cormac McCarthy", "351", true)
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

function createBookCard(book) {
    const card = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button')

    // add classes
    card.classList.add("book-card");
    title.classList.add("book-title");
    author.classList.add("book-author");
    pages.classList.add("book-pages");
    readBtn.classList.add("book-status");
    removeBtn.classList.add("book-remove")

    // update content
    title.textContent = `${book.title}`;
    author.textContent = `By ${book.author}`;
    pages.textContent = `No Pages: ${book.pages}`;
    removeBtn.textContent = `Remove`
    
    if (book.status) {
      readBtn.textContent = `Read`
      card.classList.add("status-read")
    } else {
      readBtn.textContent = `Not Read`
      card.classList.add("status-not-read")
    }

    // append
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readBtn);
    card.appendChild(removeBtn)
    libraryGrid.appendChild(card);
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
  libraryGrid.textContent = "";
  myLibrary.map((book) => {
    createBookCard(book)
  });
}