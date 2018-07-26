var productService = require('../services/productService.js')

module.exports = {
	productPage: function(req, res, template, callback) {
		return productService.getProduct(req, res, template, callback)
	}
}