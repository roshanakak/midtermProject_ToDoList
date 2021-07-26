
module.exports = (bookName) => {
  let books = require('google-books-search');
  let options = {
    field: 'title',
    type: 'books',
    order: 'relevance',
  };
  books.search(bookName, options, function(error, results) {
    let state = 'Not sure';
    if (!error) {
      if (results.length === 0) {
        state = 'Not Matched';
      } else {
        results.forEach(element => {
          if (element.title.includes(bookName)) {
            state = 'Matched';
            return;
          }
        });
      }
    } else {
      state = 'Error';
    }
    console.log(state);
  });
};
