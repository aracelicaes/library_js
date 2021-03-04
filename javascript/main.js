let myLibrary = [];

function Books(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

const book = new Books('Harry Potter', 'JK Rowling', 400)
console.log(book)
console.log(book.title)
console.log(book.author)
myLibrary.push(book);

const book2 = new Books('Lolita', 'Samba', 600)
console.log(book2)
myLibrary.push(book2);

console.log(myLibrary);

function createBook() {
  let titleInput = document.getElementById('title').value;
  let authorInput = document.getElementById('author').value;
  let pagesInput = document.getElementById('pages').value;

  let newBook = new Books(titleInput, authorInput, pagesInput);
  myLibrary.push(newBook);
}

function displayBook() {
  myLibrary.forEach((book) => {
    let container = document.getElementById('library');
    let bookDiv = document.createElement('div');
    let titleDisplay = document.createElement('p');
    let authorDisplay = document.createElement('p');
    let pagesDisplay = document.createElement('p');
    
    titleDisplay.innerText = book.title
    authorDisplay.innerText = book.author
    pagesDisplay.innerText = book.pages

    container.appendChild(bookDiv);
    bookDiv.appendChild(titleDisplay);
    bookDiv.appendChild(authorDisplay);
    bookDiv.appendChild(pagesDisplay);
  })
}


const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  alert("Hello World");
  e.preventDefault()
  createBook();
  displayBook();
});
