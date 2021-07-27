
const express = require('express');
const router = express.Router();

// Clear session cookie and redirect to login page
module.exports = () => {
  router.post('/', (req, res) => {

    req.session = null;
    res.redirect('/login');

  });

  return router;
}
