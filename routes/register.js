const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const helpers = require('../helpers/usersHelper');


module.exports = (db) => {
  const { getUserByEmail, getUserByUsername, getUserByID, saveUser } = helpers(db);

  // handles GET for registeration
  router.get('', (req, res) => {
    const templateVars = {registerModal: "visible"};
    res.render("homepage-no-user", templateVars);
  });



  // handles POST for registeration
  router.post('/', async(req, res) => {
    const {username, email, password} = req.body;

    console.log("username:" , username)
    console.log("email:" , email)
    console.log("password:" , password)

    const usernameExists =  await getUserByUsername(username);
    const emailExists =  await getUserByEmail(email);

    // res.clearCookie('error');

    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (!username) {
      res.render("homepage-no-user", {errorMessage: "Please enter a username"})
    } else if (!email) {
      res.render("homepage-no-user", {errorMessage: "Please enter an email"})
    } else if (!password) {
      res.render("homepage-no-user", {errorMessage: "Please enter a password"})
    } else if (password.length < 8) {
      res.render("homepage-no-user", {errorMessage: "Password must be at least 8 characters long"})
    } else if (!regex.test(email)) {
      res.render("homepage-no-user", {errorMessage: "Please enter a valid email"})
    } else if (usernameExists) {
      res.render("homepage-no-user", {errorMessage: "Username already exists!"})
    } else if (emailExists) {
      res.render("homepage-no-user", {errorMessage: "Email already exists!"})

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
