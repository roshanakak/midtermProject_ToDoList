const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const helpers = require('../helpers/helperFunctions');


module.exports = (db) => {
  const { getUserByEmail, saveUser } = helpers(db);

  console.log(getUserByEmail);
  // handles GET for registeration
  router.get('', (req, res) => {
    res.redirect('/');
  });


  // handles POST for registeration
  router.post('/', (req, res) => {

    res.clearCookie('error');
    if (!req.body.password || !req.body.email) {
      res.cookie('error', 'The email or password has not been provided!');
      res.redirect('/register');
    } else if (getUserByEmail(req.body.email)) {
      res.cookie('error', 'The email already exists!');
      res.redirect('/register');
    } else {
      const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      };
  
      const userId = saveUser(user, req, res);
      console.log(userId);
    }
  });

  return router;
};
