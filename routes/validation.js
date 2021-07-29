const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const helpers = require('../helpers/usersHelper');


module.exports = (db) => {
  const { getUserByEmail, getUserByUsername, saveUser } = helpers(db);

  router.get('/email/:email', async(req,res) => {
    const emailExists =  await getUserByEmail(req.params.email);
    res.json({ emailExists  });
  });

  router.get('/username/:email', async(req,res) => {
    const user =  await getUserByUsername(req.params.email);
    res.json({ user  });
  });

  return router;
};
