// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

function homePg(cb) {
  var navItem = require("../public/js/navitem.js");
  var animRow = require("../public/js/animRow.js");
  cb(navItem, animRow);
};

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  homePg(function(navItem, animRow, animClasses) {
    app.get("/", function(req, res, next) {
      res.render("index", { 
        navItem: navItem,
        animRow: animRow
      });
    });
  });

  // Potentially expand with another page for mugs
};
