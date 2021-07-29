const express = require('express');
const categoriesHelper = require('./categoriesHelper');
const tasksHelper = require('../helpers/tasksHelper');
const userssHelper = require('../helpers/usersHelper');
const router  = express.Router();

module.exports = (db) => {

  const { categorizeTasks, getCategoryByTitle } = categoriesHelper(db);
  const { getAllTasks, saveTask, getTasksByCategory, editTask, deleteTask } = tasksHelper(db);
  const { getUserByEmail, getUserByUsername, getUserByID, saveUser } = userssHelper(db);


  //retrieves all tasks
  router.get("/", (req, res) => {
    const templateVars = {
      username: req.session.username
    };

    if (req.session.userID) {
      res.render("homepage-user", templateVars);
    } else {
      res.render("homepage-no-user");
    }
  });

  //retrieves specific task, to show task details and content on click
  router.get("/:id", (req, res) => {
    
    const templateVars = {
      username: req.session.username
    };

    res.render("homepage-user", templateVars);
  });

  

  //retrieves all tasks in a specific category
  router.get("/cats/:category", async(req, res) => {
    let taskList = '';
    if (req.cookies.category === "all") {
      taskList = await getAllTasks(req.session.userID, req.cookies.category);
    } else {
      taskList = await getTasksByCategory(req.session.userID, req.cookies.category);
    }
    res.json({ taskList });

  });

  //saves a new task
  router.post("/", async(req, res) => {
    if (req.body.taskTitle) {
      let category = '';

      // req.cookies.cat === '1': category assigned by user manually and it is in req.body.hiddenInput
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
    
    const templateVars = {
      username: req.session.username
    };
    res.render('homepage-user', templateVars);

  });
  
  //edit a task
  router.post("/edit:id", async(req, res) => {
    if (req.body.taskTitleEdit) {

      let owner = await getUserByID(req.session.userID);
      let cat = await getCategoryByTitle(req.body.hiddenInputEdit);
      
      const Task = {
        id: req.cookies.taskid,
        title: req.body.taskTitleEdit,
        'owner_id':  owner.id,
        'category_id': cat.id
      };
      
      await editTask(Task);
     
    }
    
    // const templateVars = {
    //   username: req.session.username
    // };
    // res.render('homepage-user', templateVars);
    res.redirect('/');

  });


  return router;
};
