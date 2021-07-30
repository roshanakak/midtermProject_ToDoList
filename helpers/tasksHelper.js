
module.exports = (db) => {

  const getAllTasks = async function(userId) {
    const queryString = `
        SELECT tasks.*, categories.title as catTitle
        FROM tasks
        join categories on categories.id = category_id
        WHERE owner_id = $1
        ORDER BY tasks.id DESC
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
        SELECT tasks.*, categories.title as catTitle
        FROM tasks
        join categories on categories.id = category_id
        WHERE owner_id = $1 and categories.title = $2
        ORDER BY tasks.id DESC
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
        return result.rows[0];
      })
      .catch((err) => {
        return -1;
      });
  };

  const editTask = async(Task) => {
    const queryString = `
        UPDATE tasks SET title = $2, category_id = $3 
        WHERE id = $1
      `;
    const queryParams = [Task.id, Task.title, Task.category_id];
    
    return db.query(queryString, queryParams)
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err);
        return -1;
      });
  };

  const deleteTask = async(id) => {
    const queryString = `
        DELETE FROM tasks WHERE id = $1
      `;
    const queryParams = [id];
    
    return db.query(queryString, queryParams)
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err);
        return -1;
      });
  };

  

  const completeTask = async(id, status) => {
    const queryString = `
        UPDATE tasks SET status_id = $2 
        WHERE id = $1
      `;
    const queryParams = [id, status];
    
    console.log(queryString)
    console.log(queryParams)

    return db.query(queryString, queryParams)
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err);
        return -1;
      });
  };

  return { getAllTasks, saveTask, getTasksByCategory, editTask, deleteTask, completeTask };
};





