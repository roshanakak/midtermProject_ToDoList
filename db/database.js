// const loginUser = function(username, db) {
//   return db

//     .query('SELECT * FROM users WHERE username = LOWER($1);', [username.trim()])
//     .then( (result) => {
//       if (result.rows[0]) {
//         return result.rows[0]
//       }

//       throw {error: new Error (`User with ${username} does not exist`), responseCode: 404};
//     })

//     .catch((err) => {
//       console.log(err)
//       throw err;
//     })
// }

// exports.loginUser = loginUser;
