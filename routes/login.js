const express = require("express");
const { loginUser } = require("../db/database");
const router = express.Router();
const helpers = require('../helpers/usersHelper');

module.exports = (db) => {
  const { getUserByEmail, getUserByUsername, getUserByID, saveUser } = helpers(db);
  
  router.get("/", (req, res) => {
    req.session.username = 1;
    res.render("login");
  });


  router.get('/:id', (req, res) => {
    res.redirect('/');
  });


  //checks that email exists in the database and password matches
  // const login = async function(username, password) {
  // let user = await getUserByUsername(username, db);
  // if (user) {
  //   return user;
  // } else {
  //   return null;
  // }
    
  // return getUserByUsername(username, db)
  //   .then(userDetails => {

  //     if (password === userDetails.password) {
  //       return userDetails;
  //     }

  //     throw {error: new Error(`incorrect password`), responseCode: 403};
  //   })
  //   .catch(err => {
  //     throw err;
  //   });
  // };


  router.post('/', async(req, res) => {
    const {username, password} = req.body;

    if (!username) {
      res.status(400).render("login", {errorMessage: "no username was sent"});
    } else if (!password) {
      res.status(400).render("login", {errorMessage: "no password was sent"});
    }

    let user = await getUserByUsername(username, db);
    if (user) {
      const templateVars = {
        username: user.username
      };
      console.log(templateVars);

      req.session.userID = user.id;
      res.redirect('/tasks');//, templateVars);

    } else {
      res.redirect('/');
    }

    // login(username, password)
    //   .then(user => {
    //     if (user) {
    //       const templateVars = {
    //         username: user.username
    //       };
    //       console.log(templateVars);

    //       req.session.userID = user.id;
    //       res.redirect('/tasks');//, templateVars);

    //     } else {
    //       res.redirect('/');
    //     }

    //   })
    //   .catch(({error, responseCode}) => {
    //     res.status(responseCode).render("login", {errorMessage: error.message});
    //   });



  });

  return router;
};
