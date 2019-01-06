/// DEPENDENCIES ///

const bodyParser = require("body-parser");

// Requiring the models folder for access to mysql methods via db.Method calls
const db = require("./models");

// EXPRESS APP REQUIREMENTS
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing - parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars as the default templating engine.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Static directory
app.use(express.static("public"));

// Server routes
require("./controllers/routes/html-routes.js")(app);
require("./controllers/routes/api-routes.js")(app);

/// END DEPENDENCIES ///

// Sync sequelize models and then start the Express app
// db.sequelize.sync({ force: true }).then(function () { //add force true for restarting db
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

    //Seeds to DB
    //require("./scripts/repoSeeder");

  });
});

/// END ///