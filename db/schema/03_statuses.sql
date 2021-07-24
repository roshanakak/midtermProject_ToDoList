-- Drop and recreate statuses table 

DROP TABLE IF EXISTS statuses CASCADE;

CREATE TABLE statuses (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL
);
