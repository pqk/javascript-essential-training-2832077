//object constructor
function Book(bookTitle, bookAuthor, bookPubYear, bookISBN) {
  // properties of the Book object
  this.title = bookTitle;
  this.author = bookAuthor;
  this.publicationYear = bookPubYear;
  this.isbn = bookISBN;
}

//create objects using the Book constructor
const book1 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "9780743273565",
);

const book2 = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960,
  "9780061120084",
);

const book3 = new Book(
  "Alice's Adventures in Wonderland",
  "Lewis Carroll",
  1865,
  "9781503222687",
);
