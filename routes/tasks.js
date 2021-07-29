const express = require('express');
const categoriesHelper = require('./categoriesHelper');
const tasksHelper = require('../helpers/tasksHelper');
const userssHelper = require('../helpers/usersHelper');
const router  = express.Router();

module.exports = (db) => {

  const { categorizeTasks, getCategoryByTitle } = categoriesHelper(db);
  const { getTasks, saveTask } = tasksHelper(db);
  const { getUserByEmail, getUserByUsername, getUserByID, saveUser } = userssHelper(db);


  //retrieves all tasks
  router.get("/", (req, res) => {
    const templateVars = {
      id: 0
    };

    //res.render("homepage-user", templateVars);
    if (req.session.userID) {
      res.render("homepage-user");
    } else {
      res.render("homepage-no-user");
    }
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
  router.post("/", async(req, res) => {

    if (req.body.taskTitle) {
      let category = '';

      if (req.cookies.cat === '1' && req.body.hiddenInput)  {
        category = req.body.hiddenInput;
      } else {
        category = await categorizeTasks(req.body.taskTitle);
      }

      let owner = await getUserByID(req.session.userID);
      let cat = await getCategoryByTitle(category);

      const Task = {
        title: req.body.taskTitle,
        'owner_id':  owner.id,
        'category_id': cat.id
      };
      
      await saveTask(Task);
     

    }
    res.redirect("/");

  });


  return router;
};
