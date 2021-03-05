let myLibrary = [];
window.myLibrary = myLibrary;
let counter = 0

function Book(title, author, pages, status) {
  if (status === 'read') {
    status = true;
  } else {
    status = false;
  }

  this.id = counter++
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

function createBook(item) {
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
 
function Render() {
  for (let i=0; i<myLibrary.length; i++) {
    dispplayBook(myLibrary[i]);
  }
}

function displayBook(item) {
  let container = document.getElementById('library'); //To reset the container everytime we display a new book 
  container.innerHTML = ''
  myLibrary.forEach((book, index) => {
    let bookDiv = document.createElement('div');
    bookDiv.setAttribute('id', myLibrary.indexOf(item)); // add an atribute of its corresponded index
    let titleDisplay = document.createElement('p');
    let authorDisplay = document.createElement('p');
    let pagesDisplay = document.createElement('p');
    let statusDisplay = document.createElement('button');
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Delete';
    removeButton.setAttribute('class', 'removeBtn');
    
    titleDisplay.innerText = book.title
    authorDisplay.innerText = book.author
    pagesDisplay.innerText = book.pages
    
    if (book.status === true) {
      statusDisplay.innerText = 'Read';
    } else {
      statusDisplay.innerText = 'Unread';
    }

    container.appendChild(bookDiv);
    bookDiv.appendChild(titleDisplay);
    bookDiv.appendChild(authorDisplay);
    bookDiv.appendChild(pagesDisplay);

    bookDiv.appendChild(statusDisplay);
    

    /* if(item.status===false) {
      statusDisplay.textContent = 'Not Read';
    } else {
      statusDisplay.textContent = 'Read';
    } */

    bookDiv.appendChild(removeButton);
    })

    
    

    let removeBtn = document.querySelectorAll('.removeBtn'); // to return all of the removeBtn elements in a page
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
      
      myLibrary.splice(myLibrary.indexOf(e), 1);

      })
    }) 
    

    /* statusDisplay.addEventListener('click', () => { 
      item.status = !item.status; 

      render();
    });  */

  /* let x = document.querySelectorAll('p');
  const box = document.getElementById('status');
  checkbox.addEventListener('change', () => {
  box.classList.toggle('red-background');
  }); */
  
/*   function myFunction(status) {
    var x = document.getElementById("status");
    if (x.innerHTML === "read") {
      x.innerHTML = "Read";
    } else {
      x.innerHTML = "Unread";
    }
  }

  console.log(myFunction); */
  

}
/* function changeReadStatus(e) {
  myLibrary[e.getElementById('status')].toggleReadStatus();
  displayBooks();
}
*/
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  e.preventDefault()
  createBook();
  displayBook();
}); 

function findBook(id) {
  let theBook = null;
  myLibrary.forEach((book) => {
    if (book.id === id) {
      theBook = book
    }
  })
  return theBook;
}