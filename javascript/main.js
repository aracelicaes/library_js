let myLibrary = [];
window.myLibrary = myLibrary;

function Book(title, author, pages, status) {
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
}

const book = new Book('Harry Potter', 'JK Rowling', 400, 'Read')
console.log(book)
myLibrary.push(book);

const book2 = new Book('Lolita', 'Samba', 600, 'Not Read')
console.log(book2)
myLibrary.push(book2);

console.log(myLibrary);

function createBook() {
  let titleInput = document.getElementById('title').value;
  let authorInput = document.getElementById('author').value;
  let pagesInput = document.getElementById('pages').value;
  let statusInput = document.getElementById('status').value;
  console.log(statusInput)
  let newBook = new Book(titleInput, authorInput, pagesInput, statusInput);
  if (titleInput.length > 1 && authorInput.length > 1 && pagesInput > 0) {
  myLibrary.push(newBook);
  }
}


function displayBook() {
  let container = document.getElementById('library'); //Toreset the container everytime we display a new book 
  container.innerHTML = ''
  myLibrary.forEach((book, index) => {
    let bookDiv = document.createElement('div');
    bookDiv.setAttribute('id', index); // add an atribute of its corresponded index
    let titleDisplay = document.createElement('p');
    let authorDisplay = document.createElement('p');
    let pagesDisplay = document.createElement('p');
    let statusDisplay = document.createElement('p');
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove Book';
    removeButton.setAttribute('class', 'removeBtn');
    
    titleDisplay.innerText = book.title
    authorDisplay.innerText = book.author
    pagesDisplay.innerText = book.pages
    console.log(book.status)
    if (book.status === "read") {
      statusDisplay.innerText = 'Read';
    } else {
      statusDisplay.innerText = 'Unread';
    }

    container.appendChild(bookDiv);
    bookDiv.appendChild(titleDisplay);
    bookDiv.appendChild(authorDisplay);
    bookDiv.appendChild(pagesDisplay);
    bookDiv.appendChild(statusDisplay);
    bookDiv.appendChild(removeButton);
  })

  let removeBtn = document.querySelectorAll('.removeBtn'); // to return all of the removeBtn elements in a page
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    const book = e.target.parentNode
    book.remove()
    })
  })
}


const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  e.preventDefault()
  createBook();
  displayBook();
});
