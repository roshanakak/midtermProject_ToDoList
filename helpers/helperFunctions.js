// const { db } = require('../db/index');
const bcrypt = require('bcrypt');

module.exports = (db) => {

  const getUserByEmail = async function(email) {
    const queryString = `
        SELECT *
        FROM users
        WHERE email = $1
      `;
    const queryParams = [email];

    return db.query(queryString, queryParams)
      .then((res) => {
        if (res !== null && res.rows.length === 1) {
          console.log('truuuuuuuue')
          return true;
        } else {
          console.log('faaaaaaalse')
          return false;
        }
      })
      .catch((err) => {
        return false;
      });

  };
  
  const saveUser = (user, req, res) => {
    const queryString = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3) RETURNING *;
      `;
    const queryParams = [user.username, user.email, user.password];
    
    console.log('saveuser')

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





