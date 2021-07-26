var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'game of thr'},
  headers: {
    'x-rapidapi-key': 'cef9ba97ffmsh7e53821b7286703p1d76aajsna74e679ab5b2',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});