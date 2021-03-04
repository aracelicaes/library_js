let myLibrary = [];

function Books(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

const book = new Books('Harry Potter', 'JK Rowling', 400)
console.log(book)