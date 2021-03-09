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
  document.querySelector('form').reset();

  let newBook = new Book(titleInput, authorInput, pagesInput, statusInput);
  if (titleInput.length > 1 && authorInput.length > 1 && pagesInput > 0) {
  myLibrary.push(newBook);
  }
  console.log(myLibrary)
}

function displayBook() {
  let container = document.getElementById('library'); //To reset the container everytime we display a new book 
  container.innerHTML = ''
  myLibrary.forEach((book, index) => {
    let bookDiv = document.createElement('div');
    bookDiv.setAttribute('id', myLibrary.length - 1); // the id is the lenght of the library and -1 becuase i want to start from index 0
    let titleDisplay = document.createElement('p');
    let authorDisplay = document.createElement('p');
    let pagesDisplay = document.createElement('p');
    let statusDisplay = document.createElement('button');
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Delete';
    removeButton.setAttribute('class', 'removeBtn');
    statusDisplay.setAttribute('class', 'status-btn'); //the id is uniwue so to be the same as the id from bookDiv we set it in data-id attribute, porque no deberia haber 2 elementos con el mismo id
    removeButton.setAttribute('data-id', myLibrary.length - 1); // my button has to hav the smae id of bookDiv and to no use id we use th data-id which is an atribute of html
    titleDisplay.innerText = book.title                         // data-es un atributo de datos.
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

const bookForm = () => {
  const theForm = document.getElementById("theForm");
  if (theForm.style.display === "none" || theForm.style.display === '') {
    theForm.style.display = "block";
  } else {
    theForm.style.display = "none";
  }
}

const deleteBtn = () => {
 const removeBtn = document.querySelectorAll('.removeBtn'); // to return all of the removeBtn elements in a page
    // console.log(removeBtn)
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {      //.e.target: returns the element that triggered the event, va al boton donde hice click y me da el valor del data-id = X con dataset.od
      myLibrary.splice(e.target.dataset.id - 1, 1) //estoy eliminando el boton con el id = x del array
      // console.log(myLibrary)
        displayBook()
      })
    })
}

const getStatusValue = (e) => {
  e.target.innerHTML.toUpperCase() === 'READ' 
                      ? e.target.innerHTML = 'Unread'
                      : e.target.innerHTML = 'Read'
}

const changeStatus = () => {
  const statusBtn = document.querySelectorAll('.status-btn');
  statusBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      getStatusValue(e)
    })
  })
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  e.preventDefault()
  createBook();
  displayBook();
}); 
