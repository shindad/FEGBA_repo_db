// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");

function homePg(cb) {
  const navItem = require("../../scripts/navitem");
  cb(navItem);
};

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  homePg(function(navItem) {
    app.get("/", function(req, res, next) {
      let allClasses = [];
      navItem.forEach(category => {
        allClasses.push(...category['classes'])
      });
      allClasses.sort();
      // console.log(allClasses);
      res.render("index", { 
        navItem: navItem,
        allClasses: allClasses
      });
    });
  });

  // Potentially expand with another page for mugs
};
