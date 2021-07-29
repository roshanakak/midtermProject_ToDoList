const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const helpers = require('../helpers/helperFunctions');


module.exports = (db) => {
  const { getUserByEmail } = helpers(db);
  console.log(getUserByEmail)
  // handles GET for registeration
  router.get('', (req, res) => {
    // res.redirect('/');
    templateVars = {registerModal: "visible"}

    res.render("homepage-no-user", templateVars)
  })


  // handles POST for registeration
  router.post('/', (req, res) => {
    const templateVars = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

      const user = getUserByEmail(templateVars.email);
      if (user) {
        res.redirect('/login');
      }
      else {
        res.redirect('/');
      }
  })

  return router;
}
