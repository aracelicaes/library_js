let myLibrary = [];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

const book = new Book('Harry Potter', 'JK Rowling', 400)
console.log(book)
console.log(book.title)
console.log(book.author)
myLibrary.push(book);

const book2 = new Book('Lolita', 'Samba', 600)
console.log(book2)
myLibrary.push(book2);

console.log(myLibrary);

function createBook() {
  let titleInput = document.getElementById('title').value;
  let authorInput = document.getElementById('author').value;
  let pagesInput = document.getElementById('pages').value;
  let newBook = new Books(titleInput, authorInput, pagesInput);
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
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove Book';
    removeButton.setAttribute('class', 'removeBtn');
    
    titleDisplay.innerText = book.title
    authorDisplay.innerText = book.author
    pagesDisplay.innerText = book.pages

    container.appendChild(bookDiv);
    bookDiv.appendChild(titleDisplay);
    bookDiv.appendChild(authorDisplay);
    bookDiv.appendChild(pagesDisplay);
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
/* 
function removeBook() {
  // get book from HTML getElementById(#)
  // abstract action to remove book
  // array [{id:0}, {id: 1}, {id:2}]
  document.getAttribute()
  let book = document.getElementById(1);
  console.log(book); */



const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  // alert("Hello World");
  e.preventDefault()
  createBook();
  displayBook();
});


console.log(removeBtn);