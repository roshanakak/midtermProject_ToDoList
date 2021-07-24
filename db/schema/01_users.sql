-- Drop and recreate Users table

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS widgets CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) 
);
