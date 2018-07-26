var homepageService = require('../services/homepageService.js')

module.exports = {
	getPageData: function(req, res, template, callback) {
		var data = {};

		data.carousel = homepageService.getRandomProducts(10)		
		data.collage = homepageService.getRandomCollageProducts(15, 4)

	  	return callback(null, res, template, data);
	}
}