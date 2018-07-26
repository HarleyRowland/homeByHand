var fs = require('fs');

var fileAccess = require('../utils/fileAccess.js');
var moneyTransformer = require('../utils/moneyTransformer.js');

module.exports = {
	getProduct: function(req, res, template, callback) {
		var data = {}
		console.log(req.query)
		data.product = JSON.parse(fileAccess.getSingleFile("public/products/" + req.query.productId + ".json"));
		data.product.displayPrice = moneyTransformer.getDisplayPrice(data.product.price);
	  	
	  	return callback(null, res, template, data);
	}
}