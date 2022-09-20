const bookForm = document.getElementById('book-form');
const newBookBtn = document.getElementById('new-book');
const libraryGrid = document.getElementById('library-grid');
const modalContainer = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('.close-modal');

let myLibrary = [];
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class BookCard {
  createBookCard(book) {
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
    
    if (book.read) {
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

  deleteBook(target) {
    if(target.className === "book-remove") {
      target.parentElement.remove()
    }
  }

  clearForm() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').checked = false
  }
}

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
    
    // reset form !
    bookCard.clearForm()
    // close modal
    modalContainer.style.display = "none"
  })

  libraryGrid.addEventListener('click', (e) => {
    const bookCard = new BookCard();
    
    bookCard.deleteBook(e.target);
    
    // bookCard.updateStatus(e.target);

    e.preventDefault()
})
// Constructor
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// function BookCard() {}

// BookCard.prototype.createBookCard = (book) => {
//   // create elements
//   const card = document.createElement('div');
//   const title = document.createElement('p');
//   const author = document.createElement('p');
//   const pages = document.createElement('p');
//   const readBtn = document.createElement('button');
//   const removeBtn = document.createElement('button')

//   // add classes
//   card.classList.add("book-card");
//   title.classList.add("book-title");
//   author.classList.add("book-author");
//   pages.classList.add("book-pages");
//   readBtn.classList.add("book-status");
//   removeBtn.classList.add("book-remove")

//   // update content
//   title.textContent = `${book.title}`;
//   author.textContent = `By ${book.author}`;
//   pages.textContent = `No Pages: ${book.pages}`;
//   removeBtn.textContent = `Remove`
  
//   if (book.read) {
//     readBtn.textContent = `Read`
//     card.classList.add("status-read")
//   } else {
//     readBtn.textContent = `Not Read`
//     card.classList.add("status-not-read")
//   }

//   // append
//   card.appendChild(title);
//   card.appendChild(author);
//   card.appendChild(pages);
//   card.appendChild(readBtn);
//   card.appendChild(removeBtn)
//   libraryGrid.appendChild(card);
// }

// clear form
// BookCard.prototype.clearForm = () => {
//   document.getElementById('title').value = ''
//   document.getElementById('author').value = ''
//   document.getElementById('pages').value = ''
//   document.getElementById('read').checked = false
// }
// BookCard.prototype.updateStatus = (target) => {
// }

// BookCard.prototype.deleteBook = (target) => {
//   if(target.className === "book-remove") {
//     target.parentElement.remove()
//   }
// }


// // Event Listener
// bookForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const title = document.getElementById('title').value;
//   const author = document.getElementById('author').value;
//   const pages = document.getElementById('pages').value;
//   const read = document.getElementById('read').checked;

//   // add book to library
//   const book = new Book(title, author, pages, read);
  
//   const bookCard = new BookCard();
  
//   bookCard.createBookCard(book);
  
//   // reset form !
//   bookCard.clearForm()
//   // close modal
//   modalContainer.style.display = "none"
// })

// libraryGrid.addEventListener('click', (e) => {
//   const bookCard = new BookCard();
  
//   bookCard.deleteBook(e.target);
  
//   // bookCard.updateStatus(e.target);

//   e.preventDefault()
// })

newBookBtn.addEventListener('click', () => {
  modalContainer.style.display = "flex"
})

closeModalBtn.addEventListener('click', () => {
  modalContainer.style.display = "none"
})
