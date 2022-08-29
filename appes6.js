class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages
    }
}

class UI {
    //method => cleaner, do not need to do prototype
    addBookToList(book) {
        const list = document.getElementById('book-list');

        //Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><a href='#' class='delete'>X<a></td>
        `;
        list.appendChild(row)
    };
    
    showAlert(message, className) {
        //create div
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 secs
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
    }

    deleteBook(e) {
        if(e.target.className === 'delete') {
            e.target.parentElement.parentElement.remove()
        }
    }

    clearFields() {
        document.getElementById('title').value ='';
        document.getElementById('author').value ='';
        document.getElementById('pages').value ='';
    }
}


// Global event Listener
document.getElementById('book-form').addEventListener('submit', function(e) {
    //get form value
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    // Instantiate book
    const book = new Book(title, author, pages);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '') {
        // Error alert
        ui.showAlert('Please fill in all the required fields', 'error')
    } else {
    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields()

    ui.showAlert('Book Added', 'success')
    }

    e.preventDefault()
})

const book = new Book;

// Event Listener for delete
document.querySelector('#book-list').addEventListener('click', function(e) {
    const ui = new UI;

    //delete book

    ui.deleteBook(e)

    ui.showAlert('Book Removed!', 'success')
})