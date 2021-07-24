-- Drop and recreate categories table 

DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL
);
