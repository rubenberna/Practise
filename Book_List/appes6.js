class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');

    // Create tr element
    const row = document.createElement('tr');

    // Insert colls
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);  
  }

  showAlert(message, className) {
    // Create element
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text -- we need to create a text node
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector("#book-form");
    // Insert the div in the container before the alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function() {
      document.querySelector('.alert').remove()
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
  
        // Show alert
      this.showAlert('Book Removed', 'success');
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local storage class
class Store {
  // static because we're not going to instatiate the store
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books')); // we needed to be an object, because the LS has only strings
    }
    return books;
  }
  
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      const ui = new UI;
      // Add book to UI
      ui.addBookToList(book);
    })
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1)
      }
    })
    localStorage.setItem('books', JSON.stringify(books));    
  }
}

// DOM Load event to list each book stored to the book-list
document.addEventListener('DOMContentLoaded', Store.displayBooks)

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instatiate book
  const book = new Book(title, author, isbn)

  // Instatiate UI
  const ui = new UI();

  // Validate
  if (!title || !author || !isbn) {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add Book to list
    ui.addBookToList(book);
    // Add to local storage
    Store.addBook(book);
    // Show success
    ui.showAlert('Book added!', 'success')
    // Clear fields
    ui.clearFields();
  }
  
  e.preventDefault();
});

// Event listener for delete (we need to use the parent)
document.getElementById('book-list').addEventListener('click', function(e) {
  // Instatiate UI
  const ui = new UI();  

  // Delete Book
  ui.deleteBook(e.target);

  // Remove from LS -- since they don't have IDs, we need to use an identifier -- the isbn, in this case. e.target is the 'x' / parent element is the 'tr' / previousElementSibling comes from Vanila JS and it's the previous 'td' in the DOM. texContent is the value of isbn
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)  

  e.preventDefault();
})