const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const helpers = require('../helpers/helperFunctions');


module.exports = (db) => {
  const { getUserByEmail, getUserByUsername, saveUser } = helpers(db);

  // handles GET for registeration
  router.get('', (req, res) => {
    res.redirect('/');
  });

 
  // handles POST for registeration
  router.post('/', async(req, res) => {

    const emailExists =  await getUserByEmail(req.params.email);

    res.clearCookie('error');
    if (!req.body.password || !req.body.email) {
      res.cookie('error', 'The email or password has not been provided!');
      res.redirect('/register');
    } else if (emailExists) {
      res.cookie('error', 'The email already exists!');
      res.redirect('/register');
    } else {
      const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      };

      saveUser(user, req, res);
    }

  });



  return router;
};
