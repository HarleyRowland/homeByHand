var fileAccess = require('../utils/fileAccess.js');

module.exports = {
	getRandomProducts: function(productCount) {
		return getRandomProductsFromStore(productCount)
	},
	getRandomCollageProducts: function(productCount, collageRowCount) {
		var products = getRandomProductsFromStore(productCount)
		return removeProductsSoDivisibleByCollageRowCount(products, collageRowCount)
	}
}

var getRandomProductsFromStore = function(productCount){
	return fileAccess.getRandomJsonFiles(productCount, "public/products/");
}

var removeProductsSoDivisibleByCollageRowCount = function(products, collageRowCount) {
	while(products.length % collageRowCount != 0) {
		products.pop()
	}
	return products;
}