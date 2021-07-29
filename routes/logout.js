const express = require('express');
const router = express.Router();

// Clear session cookie and redirect to login page
module.exports = () => {

  router.get('/', (req, res) => {

    delete req.session.userID;
    req.session = null;
    res.redirect('/login');
    
  });

  return router;
};
