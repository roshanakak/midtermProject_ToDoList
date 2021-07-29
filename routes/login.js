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
      res.status(400).render("login", {errorMessage: "No username was entered"});
    } else if (!password) {
      res.status(400).render("login", {errorMessage: "No password was entered"});
    }

    let user = await getUserByUsername(username, db);

    if (!user) {
      res.status(404).render("login", {errorMessage: "User does not exist"})
    } else if (user && user.password !== password) {
      res.status(404).render("login", {errorMessage: "Incorrect password"})
    }

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
