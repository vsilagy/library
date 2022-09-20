const bookForm = document.getElementById('book-form');
const libraryGrid = document.getElementById('library-grid');
const newBookBtn = document.getElementById('new-book')
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('.close-modal');

let myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function BookCard() {}

BookCard.prototype.createBookCard = (book) => {
  // create elements
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('button');
  const remove = document.createElement('button')

  // add classes
  card.classList.add("book-card");
  title.classList.add("book-title");
  author.classList.add("book-author");
  pages.classList.add("book-pages");
  read.classList.add("book-status");
  remove.classList.add("book-remove")

  // update content
  title.textContent = `${book.title}`;
  author.textContent = `By ${book.author}`;
  pages.textContent = `No Pages: ${book.pages}`;
  remove.textContent = `Remove`
  
  if (book.read) {
    read.textContent = `Read`
    card.classList.add("status-read")
  } else {
    read.textContent = `Not Read`
    card.classList.add("status-not-read")
  }

  // append
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(remove)
  libraryGrid.appendChild(card);
}

// Event Listener
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  // add book to library
  const book = new Book(title, author, pages, read);
  
  const bookCard = new BookCard();
  
  bookCard.createBookCard(book);
 
  // close modal
  modalContainer.style.display = "none"
})

newBookBtn.addEventListener('click', (e) => {
  modalContainer.style.display = "flex"
})

closeModalBtn.addEventListener('click', (e) => {
  modalContainer.style.display = "none"
})

