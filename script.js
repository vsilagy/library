const bookForm = document.getElementById('book-form');
const books = document.getElementById('books');

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
  const read = document.createElement('p');

  // add classes
  card.classList.add("book-card");
  title.classList.add("book-title");
  author.classList.add("book-author");
  pages.classList.add("book-pages");
  read.classList.add("book-read");

  // update content
  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  console.log(book.read)
  
  if (book.read) {
    read.textContent = `Status: Read`
    card.classList.add("status-read")
  } else {
    read.textContent = `Status: Not Read`
    card.classList.add("status-not-read")
  }

  // append
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  books.appendChild(card);
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

})

