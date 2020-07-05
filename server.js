const bodyParser = require("body-parser");
const express = require("express");
const expressHandlebars = require("express-handlebars");

// EXPRESS APP REQUIREMENTS
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing - parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", expressHandlebars({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Server routes
require("./controllers/routes/html-routes.js")(app);

// start the Express app
app.listen(PORT, () => {
	console.log("App listening on PORT " + PORT);
})