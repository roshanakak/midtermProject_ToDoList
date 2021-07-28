// load .env data into process.env
require('dotenv').config();

//method override for put & delete
const methodOverride = require('method-override');

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require('morgan');

const path = require('path');
const cookieSession = require("cookie-session");

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

const database = require('./db/database');


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// override
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(express.static("db"));


// Setting cookies for 24 hours
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 1000
}));

// router files
const loginRoutes = require("./routes/login");
const logoutRoutes = require("./routes/logout");
const registerRoutes = require("./routes/register");
const usersRoutes = require("./routes/users");
const mainRoutes = require("./routes/main");

app.use('/login', loginRoutes(db));
app.use('/logout', logoutRoutes(db));
app.use('/register', registerRoutes(db));
app.use("/api/users", usersRoutes(db));
// app.use("/", mainRoutes(db));


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("homepage-no-user");
});



app.get("/tasks", (req, res) => {
  if (req.session.userID) {
    res.render("homepage-user");

  }
  // else {
  //   res.redirect('/')
  // }
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
