
module.exports = () => {

  const superagent = require('superagent');

  const getGoogleAPIResultObj = async function(taskName) {
    let URL = `https://serpapi.com/search.json?engine=google&gl=us&hl=en`;
    try {
      const queryArguments = {
        api_key: '91d5c694c85616153d53bc1f4cad85645beec75050c9f2eaba55fc47929f49de',
        q: taskName
      };
  
      const response = await superagent.get(URL).query(queryArguments);
      if (response.status >= 200 && response.status < 400) {
        return response.body;
      } else {
        console.log('Error');
      }

    } catch (error) {
      console.log(error.response.body);
    }

  };

  const categorizeTasks = async function(taskName) {
    const result =  await getGoogleAPIResultObj(taskName);
    let res = await taskCategory(JSON.stringify(result));
    return res;
  };


  const taskCategory = async function(APIResultJSON) {
  
    const counterObj = {};
    const str = APIResultJSON.toLowerCase();
    const moviesArray = ['hulu', 'amazon prime', 'youtube tv', 'google play movies & tv', 'imdb', 'rotten tomatoes', 'fiction', 'sci-fi', 'sci_fi', 'drama', 'series', 'movies', 'film', 'thriller', 'mystery', 'fantasy', 'adventure'];
    const booksArray = ['book, periodical, comic'];
    const restaurantArray = ['restaurant'];
    const productArray = ['product'];

    let moviesCount = 0;
    let booksCount = 0;
    let restaurantsCount = 0;
    let productsCount = 0;

    moviesArray.forEach(element => {
      moviesCount += str.split(element).length - 1;
    });

    booksArray.forEach(element => {
      booksCount += str.split(element).length - 1;
    });

    restaurantArray.forEach(element => {
      restaurantsCount += str.split(element).length - 1;
    });

    productArray.forEach(element => {
      productsCount += str.split(element).length - 1;
    });

    counterObj['Films/Series'] = moviesCount;
    counterObj.Books = booksCount;
    counterObj.Restaurants = restaurantsCount;
    counterObj.Products = productsCount;

    let cat = Object.keys(counterObj).reduce((a, b) => counterObj[a] > counterObj[b] ? a : b);
    return cat;
  };

  return { categorizeTasks };

};

