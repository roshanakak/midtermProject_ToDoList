/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //retrieves all tasks
  router.get("/", (req, res) => {
    const templateVars = {
      id: 0
    };

    res.render("index", templateVars);
  });

  //retrieves specific task, to show task details and content on click
  router.get("/:id", (req, res) => {
    const templateVars = {};

    res.render("index", templateVars);
  });

  //retrieves all tasks in a specific category
  router.get("/cat?:cat_id", (req, res) => {
    const templateVars = {
      cat_id: 0
    };

    res.render("index", templateVars);
  });

  //saves a new task
  router.post("/", (req, res) => {
    const templateVars = {
      id: 0
    };

    res.render("index", templateVars);
  });


  return router;
};
