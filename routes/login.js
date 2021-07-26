const express = require("express");
const router = express.Router();
module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log(req.session.id);
    req.session.username = 1;
    res.redirect('/');
  });
  router.get('/:id', (req, res) => {
    res.redirect('/');
  });
  return router;
};
