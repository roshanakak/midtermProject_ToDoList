const express = require("express");
const { loginUser } = require("../db/database");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    req.session.username = 1;
    res.render("login");
  });


  router.get('/:id', (req, res) => {
    res.redirect('/');
  });


  //checks that email exists in the database and password matches
  const login = function(username, password) {
    return loginUser(username, db)
    .then(userDetails => {

      if (password === userDetails.password) {
        return userDetails;
      }

      throw {error: new Error (`incorrect password`), responseCode: 403};
    })
    .catch(err => {
      throw err;
    })
  }


  router.post('/', (req, res) => {
    const {username, password} = req.body;

    if (!username) {
      res.status(400).render("login", {errorMessage: "no username was sent"})
    } else if (!password) {
      res.status(400).render("login", {errorMessage: "no password was sent"})
    }

    login(username, password)
      .then (user => {
        console.log("user:", user)
        if (user) {
          req.session.userID = user.id
          res.redirect('/tasks')
        } else {
          res.redirect('/')
        }

      })
      .catch(({error, responseCode}) => {
        res.status(responseCode).render("login", {errorMessage: error.message})
      })



  })

  return router;
};
