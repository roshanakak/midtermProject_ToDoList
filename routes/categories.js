const express = require('express');
const router = express.Router();
const categoriesHelper = require('./categoriesHelper');


module.exports = (db) => {

  const { categorizeTasks, getCategoryByTitle  } = categoriesHelper(db);

  router.get('/find/:taskTitle', async(req,res) => {
    const result =  await categorizeTasks(req.params.taskTitle);
    res.json({ result  });
  });


  return router;
};
