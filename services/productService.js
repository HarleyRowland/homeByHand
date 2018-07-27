var fs = require('fs');

var fileAccess = require('../utils/fileAccess.js');
var moneyTransformer = require('../utils/moneyTransformer.js');

module.exports = {
	getProduct: function(req, res, template, callback) {
		var data = {}
		data.product = JSON.parse(fileAccess.getSingleFile("public/products/" + req.query.productId + ".json"));
		data.product.displayPrice = moneyTransformer.getDisplayPrice(data.product.price);
		data.product.similarProducts = data.product.similarProducts.map(function(similarProduct){ 
			var product = JSON.parse(fileAccess.getSingleFile("public/products/" + similarProduct + ".json"));
			product.displayPrice = moneyTransformer.getDisplayPrice(product.price);
			return product;
		});
	  	return callback(null, res, template, data);
	}
}