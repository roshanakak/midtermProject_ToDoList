const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const helpers = require('../helpers/helperFunctions');


module.exports = (db) => {
  const { getUserByEmail, saveUser } = helpers(db);

  router.get('/:email', async(req,res) => {
    const emailExists =  await getUserByEmail(req.params.email);
    res.json({ emailExists  });
  });

  return router;
};
