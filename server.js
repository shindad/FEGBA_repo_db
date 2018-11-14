// Server.js - Sets express server and dependencies
/// DEPENDENCIES ///

var bodyParser = require("body-parser");
// Requiring the models folder for access to mysql methods via db.Method calls
var db = require("./models");

// EXPRESS APP REQUIREMENTS
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing - parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static("public"));

/// ROUTES ///

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Sync sequelize models and then start the Express app
//db.sequelize.sync({ force: true }).then(function () { //add force true for restarting db
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

    //Seeds to DB
    require("./public/js/repoSeeder");

  });
});

/// END ///