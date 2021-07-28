// const { db } = require('../db/index');
const bcrypt = require('bcrypt');

module.exports = (db) => {

  const getUserByEmail = (email) => {
    const queryString = `
        SELECT *
        FROM users
        WHERE email = $1
      `;
    const queryParams = [email];

    db.query(queryString, queryParams)
      .then((res) => {
        return res.rows[0] || null;
      })
      .catch((err) => {
        console.error('query error', err.stack);
      });

  };
  
  const saveUser = (user, req, res) => {
    const queryString = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3) RETURNING *;
      `;
    const queryParams = [user.username, user.email, user.password];
    
    return db.query(queryString, queryParams)
      .then((result) => {
        
        req.session.user_id =  result.rows[0];
        res.render("homepage-user");
      })
      .catch((err) => {
        res.redirect('/');
      });
  };

  return { getUserByEmail, saveUser };
};

