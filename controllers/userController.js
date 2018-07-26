module.exports = {
	simplePage: function(req, res, template, callback) {
		var data = {};
	  	callback(null, res, template, data);
	}
}