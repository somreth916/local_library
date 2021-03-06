// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
  
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
  
}

function partitionBooksByBorrowedStatus(books) {
  // Create empty arrays to hold returned and checked out books
  let rentedBooks = [];
  let returnBooks = [];
  // Loop through books
  for (let idx in books) {
    let book = books[idx];
    //  Check if book is returned, seperate and push into arrays
    book.borrows[0].returned ? returnBooks.push(book) : rentedBooks.push(book);
  }
  return [rentedBooks, returnBooks];
}

function getBorrowersForBook(book, accounts) {
  // Map the book borrows individually
  const result = book.borrows.map(borrow => {
    // Checks if account id matches borrow id
    const accountId = accounts.find(account => account.id === borrow.id);
    return {...borrow, ...accountId};
  }).slice(0, 10)
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
