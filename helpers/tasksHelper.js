
const helpers = require('../helpers/usersHelper');

module.exports = (db) => {
  const { getUserByEmail, getUserByUsername, getUserByID, saveUser } = helpers(db);

  const getTasks = async function(userId) {
    const queryString = `
        SELECT *
        FROM tasks
        WHERE owner_id = $1
      `;
    const queryParams = [userId];

    return db.query(queryString, queryParams)
      .then((res) => {
        if (res !== null && res.rows.length > 0) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        return false;
      });

  };

  const saveTask = async(Task) => {
    const queryString = `
        INSERT INTO tasks (title, owner_id, category_id, status_id)
        VALUES ($1, $2, $3, $4) RETURNING *;
      `;
    const queryParams = [Task.title, Task.owner_id, Task.category_id, 1];
    
    return db.query(queryString, queryParams)
      .then((result) => {
        console.log(result)
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err)
        return -1;
      });
  };

  return { getTasks, saveTask };
};





