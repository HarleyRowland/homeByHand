var fs = require('fs');
var moment = require('moment');

var fileAccess = require('../utils/fileAccess.js');
var moneyTransformer = require('../utils/moneyTransformer.js');

module.exports = {
	noFilterSearch: function(res, template, callback) {
		var data = {}
		data.products = fileAccess.getAllFilesInJsonDirectory("public/products/");
		data.products.map(product => {
			product.displayPrice = moneyTransformer.getDisplayPrice(product.price);
			return product;
		});
		data.filters = fileAccess.getAllFilesInJsonDirectory("public/data/searchFilters/");

	  	return callback(null, res, template, data);
	},
	filteredSearch:  function(req, res, template, callback) {
		var data = {}
		data.products = fileAccess.getAllFilesInJsonDirectory("public/products/");
		data.products.map(product => {
			product.displayPrice = moneyTransformer.getDisplayPrice(product.price);
			return product;
		});

		data.filters = fileAccess.getAllFilesInJsonDirectory("public/data/searchFilters/");

		console.log(req.query)
		data.products = filterByPrice(data.products, req.query.Price_Ranges);
		data.products = filterByProductType(data.products, req.query.Product_Types);
		data.products = filterByDeliveryTime(data.products, req.query.Delivery_Times);
		data.products = filterByNewArrivals(data.products, req.query.New_Arrivals);

	  	return callback(null, res, template, data);
	}
}


var filterByPrice = function(products, priceRange){
	if(priceRange == undefined) return products;
	var min = 0;
	var max = 100000000;
	if(priceRange == "£1 - £100") {
		min = 0;
		max = 10000;
	} else if(priceRange == "£100 - £250"){
		min = 10000;
		max = 25000;
	} else if(priceRange == "£250 - £500"){
		min = 25000;
		max = 50000;
	} else if(priceRange == "£500+"){
		min = 50000;
		max = 100000000;
	}

	return products.filter(product => product.price >= min && product.price <= max);
}

var filterByProductType = function(products, productType){
	if(productType == undefined) return products;

	return products.filter(product => {
		if(productType.toLowerCase() == "all furniture") {
			return ["tables", "chairs", "sofas"].includes(product.type.toLowerCase());
		} else {
			return product.type.toLowerCase() == productType.toLowerCase();
		}
	});
}

var filterByNewArrivals = function(products, newArrivals){
	if(newArrivals == undefined) return products;

	return products.filter(product => {
		var date = moment(product.dateAdded, "DD/MM/YYYY");
		return moment().diff(date, 'days') < 31
	});
}

var filterByDeliveryTime = function(products, deliveryTime){
	if(deliveryTime == undefined) return products;
	var min = 0;
	var max = 100000000;
	if(deliveryTime.toLowerCase() == "less than a week") {
		min = 0;
		max = 7;
	} else if(deliveryTime.toLowerCase() == "less than a month"){
		min = 0;
		max = 31;
	} else if(deliveryTime.toLowerCase() == "more than a month"){
		min = 31;
		max = 100000000;
	}

	return products.filter(product => product.delivery >= min && product.delivery < max);
}