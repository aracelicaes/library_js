const myLibrary = [];
window.myLibrary = myLibrary;
let counter = 0

function Book(title, author, pages, status) {
  this.id = counter
  this.title = title
  this.author = author
  this.pages = pages
  this.status = status
  counter++
}

function createBook() {
  let titleInput = document.getElementById('title').value;
  let authorInput = document.getElementById('author').value;
  let pagesInput = document.getElementById('pages').value;
  let statusInput = document.getElementById('status').value;
  let newBook = new Book(titleInput, authorInput, pagesInput, statusInput);
  if (titleInput.length > 1 && authorInput.length > 1 && pagesInput > 0) {
  myLibrary.push(newBook);
  }
  console.log(myLibrary)
}

function displayBook(item) {
  let container = document.getElementById('library'); //To reset the container everytime we display a new book 
  container.innerHTML = ''
  myLibrary.forEach((book, index) => {
    let bookDiv = document.createElement('div');
    bookDiv.setAttribute('id', myLibrary.length - 1); // add an atribute of its corresponded index
    let titleDisplay = document.createElement('p');
    let authorDisplay = document.createElement('p');
    let pagesDisplay = document.createElement('p');
    let statusDisplay = document.createElement('button');
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Delete';
    removeButton.setAttribute('class', 'removeBtn');
    statusDisplay.setAttribute('class', 'status-btn');
    removeButton.setAttribute('data-id', myLibrary.length - 1);
    titleDisplay.innerText = book.title
    authorDisplay.innerText = book.author
    pagesDisplay.innerText = book.pages
    if (book.status === 'read') {
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
    deleteBtn()
    changeStatus()
}

const deleteBtn = () =>{
 const removeBtn = document.querySelectorAll('.removeBtn'); // to return all of the removeBtn elements in a page
    console.log(removeBtn)
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
      myLibrary.splice(e.target.dataset.id - 1, 1)
      console.log(myLibrary)
        displayBook()
      })
    }) 
}
const changeStatus = () => {
  const statusBtn = document.querySelectorAll('.status-btn');
  statusBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      getStatusValue(e)
    })
  })
}
const getStatusValue = (e) => {
  e.target.innerHTML.toUpperCase() === 'READ' 
                      ? e.target.innerHTML = 'Unread' 
                      : e.target.innerHTML = 'Read'
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  e.preventDefault()
  createBook();
  displayBook();
}); 

