const loginUser = function(username, db) {
  return db
    .query('SELECT * FROM users WHERE username = LOWER($1);', [username])
    .then( (result) => {
      if (result.rows[0]) {
        console.log("result.rows:", result.rows[0])
        return result.rows[0]
      }

      throw {error: new Error (`user with ${username} does not exist`), responseCode: 404};
    })

    .catch((err) => {
      console.log(err)
      throw err;
    })
}

exports.loginUser = loginUser;
