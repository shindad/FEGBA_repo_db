const navigationItems = require("./navigation-items")

/**
 * single page app, rendered with handlebars
 * loads view.html via handlebars; configured in server.js
 * 
 * @param {*} app express app
 */
module.exports = function (app) {
	app.get("/", function (req, res, next) {
		const allFeClasses = navigationItems.map(category => category.feClasses)
		allFeClasses.sort();
		res.render("index", {
			navigationItems,
			allFeClasses
		})
	})
}