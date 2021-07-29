const express = require('express');
const categoriesHelper = require('./categoriesHelper');
const router  = express.Router();

module.exports = (db) => {

  //retrieves all tasks
  router.get("/", (req, res) => {
    const templateVars = {
      id: 0
    };

    res.render("homepage-user", templateVars);
  });

  //retrieves specific task, to show task details and content on click
  router.get("/:id", (req, res) => {
    const templateVars = {};

    res.render("homepage-user", templateVars);
  });

  //retrieves all tasks in a specific category
  router.get("/cat?:cat_id", (req, res) => {
    const templateVars = {
      cat_id: 0
    };

    res.render("homepage-user", templateVars);
  });

  //saves a new task
  router.post("/", (req, res) => {
    const templateVars = {
      id: 0
    };

    categoriesHelper(req.body.taskTitle);

    res.render("homepage-user", templateVars);

  });


  return router;
};
