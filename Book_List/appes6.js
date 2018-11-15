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

  e.preventDefault();
})