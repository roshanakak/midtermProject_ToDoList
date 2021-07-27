const express = require('express');
const router = express.Router();


module.exports = (db) => {
  const queryString = `INSERT INTO tasks (
    title,
    content,
    owner_id,
    category_id,
    status_id,
    tags)
  VALUES(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7)
    RETURNING *
    `;


}
