const myLibrary = [];
window.myLibrary = myLibrary;
let counter = 0;

const setLocalStorage = () => {
  window.localStorage.setItem('library', JSON.stringify(myLibrary));
};

// check this one *****
const getLocalStorage = () => {
  const collection = JSON.parse(window.localStorage.getItem('library'));
  if (collection || collection == null) {
    collection.forEach(el => {
      myLibrary.push(el);
    });
    const last = myLibrary.length - 1;
    counter = myLibrary[last].id + 1;
  }
};


function Book(title, author, pages, status) {
  this.id = counter;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  counter += 1;
}

function createBook() {
  const titleInput = document.getElementById('title').value;
  const authorInput = document.getElementById('author').value;
  const pagesInput = document.getElementById('pages').value;
  const statusInput = document.getElementById('status').value;
  document.querySelector('form').reset();
  const newBook = new Book(titleInput, authorInput, pagesInput, statusInput);
  if (titleInput.length > 1 && authorInput.length > 1 && pagesInput > 0) {
    myLibrary.push(newBook);
  }
  setLocalStorage();
}


const getStatusValue = (e) => {
  if (e.target.innerHTML.toUpperCase() === 'READ') {
    e.target.innerHTML = 'Unread';
  } else {
    e.target.innerHTML = 'Read';
  }
};

const changeStatus = () => {
  const statusBtn = document.querySelectorAll('.status-btn');
  statusBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      getStatusValue(e);
    });
    setLocalStorage();
  });
};

function displayBook() {
  const container = document.getElementById('library'); // To reset the container everytime we display a new book
  container.innerHTML = '';
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('id', book.id); // the id is the lenght of the library and -1 becuase i want to start from index 0
    const titleDisplay = document.createElement('p');
    const titleName = document.createElement('p');
    const authorDisplay = document.createElement('p');
    const authorName = document.createElement('p');
    const pagesDisplay = document.createElement('p');
    const pagesNumber = document.createElement('p');
    const buttonsDiv = document.createElement('div');
    const statusDisplay = document.createElement('button');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Delete';
    buttonsDiv.setAttribute('class', 'buttons-div');
    removeButton.setAttribute('class', 'removeBtn');
    statusDisplay.setAttribute('class', 'status-btn');
    removeButton.setAttribute('data-id', book.id);
    titleDisplay.innerText = book.title;
    authorDisplay.innerText = book.author;
    pagesDisplay.innerText = book.pages;
    titleName.innerText = 'Title:';
    authorName.innerText = 'Author:';
    pagesNumber.innerText = 'Pages:';
    if (book.status === 'read') {
      statusDisplay.innerText = 'Read';
    } else {
      statusDisplay.innerText = 'Unread';
    }
    container.appendChild(bookDiv);
    bookDiv.appendChild(titleName);
    bookDiv.appendChild(titleDisplay);
    bookDiv.appendChild(authorName);
    bookDiv.appendChild(authorDisplay);
    bookDiv.appendChild(pagesNumber);
    bookDiv.appendChild(pagesDisplay);
    bookDiv.appendChild(buttonsDiv);
    buttonsDiv.appendChild(statusDisplay);
    buttonsDiv.appendChild(removeButton);
  });
  // eslint-disable-next-line no-use-before-define
  deleteBtn();
  changeStatus();
}

const deleteBtn = () => {
  const removeBtn = document.querySelectorAll('.removeBtn'); // to return all of the removeBtn elements in a page
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      myLibrary.splice(e.target.id - 1, 1);
      setLocalStorage();
      displayBook();
    });
  });
};

const bookForm = () => {
  const theForm = document.getElementById('theForm');
  if (theForm.style.display === 'none' || theForm.style.display === '') {
    theForm.style.display = 'block';
  } else {
    theForm.style.display = 'none';
  }
};

bookForm();

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  createBook();
  displayBook();
});

window.addEventListener('DOMContentLoaded', () => {
  getLocalStorage();
  displayBook();
});
