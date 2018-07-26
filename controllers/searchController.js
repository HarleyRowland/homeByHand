var searchService = require('../services/searchService.js')

module.exports = {
	search: function(req, res, template, callback) {
		if(req.query.searchFilters == undefined){
			return searchService.noFilterSearch(res, template, callback);
		} else {
			return searchService.filteredSearch(req, res, template, callback);
		}
	}
}