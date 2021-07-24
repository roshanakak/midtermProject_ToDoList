-- Drop and recreate shared_tasks table 

DROP TABLE IF EXISTS shared_tasks CASCADE;

CREATE TABLE shared_tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
  guest_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
