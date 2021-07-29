
module.exports = (db) => {

  const getAllTasks = async function(userId) {
    const queryString = `
        SELECT *
        FROM tasks
        WHERE owner_id = $1
      `;
    const queryParams = [userId];

    return db.query(queryString, queryParams)
      .then((res) => {
        if (res !== null) {
          return res.rows;
        } else {
          return null;
        }
      })
      .catch((err) => {
        return null;
      });

  };

  const getTasksByCategory = async function(userId, category) {
    const queryString = `
        SELECT *
        FROM tasks
        join categories on categories.id = category_id
        WHERE owner_id = $1 and categories.title = $2
      `;
    const queryParams = [userId, category];

    return db.query(queryString, queryParams)
      .then((res) => {
        if (res !== null) {
          return res.rows;
        } else {
          return null;
        }
      })
      .catch((err) => {
        return null;
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
        console.log(result);
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err);
        return -1;
      });
  };

  return { getAllTasks, saveTask, getTasksByCategory };
};





