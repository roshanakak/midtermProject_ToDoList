
module.exports = (taskName) => {
  let state = 'Not sure';
  
  // search in the books
  // let books = require('google-books-search');
  // let options = {
  //   field: 'title',
  //   type: 'books',
  //   order: 'relevance',
  // };
  // books
  //   .search(taskName, options, function(error, results) {
  //     if (!error) {
  //       if (results.length === 0) {
  //         state = 'Not Matched';
  //       } else {
  //         results.forEach(element => {
  //           if (element.title.includes(taskName)) {
  //             state = 'Matched';
  //             return;
  //           }
  //         });
  //       }
  //     } else {
  //       state = 'Error';
  //     }
  //     console.log(state);
  //   });


  // search in movies
  let imdb = require('imdb');
  imdb('tt3659388', function(err, data) {
    if (err) {
      console.log(err.stack);
    }
    if (data) {
      console.log(data);
    }
  });

};
