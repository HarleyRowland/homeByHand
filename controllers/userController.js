var fs = require('fs')

module.exports = {
	simplePage: function(req, res, template, callback) {
	  	callback(null, res, template, req.query)		
	}
}