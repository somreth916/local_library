// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
  
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1);
  
}

function getTotalNumberOfBorrows(account, books) {
  const user = account.id;
  const found = books.filter((book) => {
    return book.borrows.some(checkout => checkout.id === user);
  });
  return found.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const user = account.id;
  let result = books.filter(({borrows}) => (borrows[0].id === user  && !borrows[0].returned))
  .map((book) => {
    const author = authors.find((auth) => auth.id === book.authorId); 
    return {...book, author};
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
