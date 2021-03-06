// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  // Return book array length
  return books.length;
}

function getTotalAccountsCount(accounts) {
  // Return account array length
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  // Loop through books
  for (let idx in books) {
    // Checks if books are returned or borrowed
    const status = books[idx].borrows[0].returned;
    // Updates count if book is borrowed
    status === false ? count++ : 0;
  }
  return count;
}

function getMostCommonGenres(books) {
 
  const result = books.reduce((acc, {genre}) => {
    // Find genre by comparing acc name to books genre
    const findGenre = acc.find(({name}) => name === genre);
    if (findGenre) {
      // If genre is already included add +1 to the count
      findGenre.count += 1;
    } else {
      // Otherwise push the object with default count
      acc.push({name: genre, count: 1});
    }
    return acc;
    // Sory the count order from Ascending to Descending order
  }, []).sort((a, b) => a.count < b.count ? 1 : -1);
  return top5Entry(result);
}

function getMostPopularBooks(books) {
  // Map each book title & borrow count into array
  const result = books.map(book => {
    // Grabs book title
    const title = book.title;
    // Returns book title and borrows length
    return {name: `${title}`, count: book.borrows.length};
    // Sort the count order from Ascending to Descending order
  }).sort((a, b) => a.count < b.count ? 1 : -1);
  return top5Entry(result);
}

function getMostPopularAuthors(books, authors) {
  // Map each author name & borrow count into array
  const result = books.map(book => {
    // Checks if author id matches with book author id and grabs the name property
    const authorName = authors.find(author => author.id === book.authorId).name;
    // Returns author first, last, and borrows length
    return {name: `${authorName.first} ${authorName.last}`, count: book.borrows.length};
    // Sort the count order from Ascending to Descending order
  }).sort((a, b) => a.count < b.count ? 1 : -1);
  return top5Entry(result);
}

function top5Entry(data) {
  // Limits the array length to 5 results only
  return data.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
