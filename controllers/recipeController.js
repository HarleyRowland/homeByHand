var fs = require('fs')

module.exports = {
	getRecipe: function(req, res, template, callback) {
	  	callback(null, res, template, req.query)		
	}
}