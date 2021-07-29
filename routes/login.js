const express = require("express");
const router = express.Router();
const helpers = require('../helpers/usersHelper');

module.exports = (db) => {
  const { getUserByEmail, getUserByUsername, getUserByID, saveUser } = helpers(db);
  
  router.get("/", (req, res) => {
    //req.session.username = 222;
    res.render("login");
  });


  router.get('/:id', (req, res) => {
    res.redirect('/');
  });


  router.post('/', async(req, res) => {
    const {username, password} = req.body;

    if (!username) {
      res.status(400).render("login", {errorMessage: "no username was sent"});
    } else if (!password) {
      res.status(400).render("login", {errorMessage: "no password was sent"});
    }

    let user = await getUserByUsername(username, db);
    if (user && user.password === password) {
      req.session.username = user.username;
      const templateVars = {
        username: user.username
      };

      req.session.userID = user.id;
      res.render('homepage-user', templateVars);

    } else {
      res.redirect('/');
    }


  });

  return router;
};
