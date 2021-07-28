// const bcrypt = require('bcrypt');

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
      })

  };
  return { getUserByEmail };
}

