module.exports = {
	getDisplayPrice: function(priceInPennies) {
		if(isNaN(priceInPennies))
			return console.warn("priceService.getDisplayPrice parsed this: " + priceInPennies + " which isNaN.");
		if(priceInPennies.toString().length < 4)
			return console.warn("priceService.getDisplayPrice parsed this: " + priceInPennies + " which is less than £1.");
		var stringPrice = priceInPennies.toString();
		return "£" + stringPrice.slice(0, stringPrice.length-2) + "." + stringPrice.slice(stringPrice.length-2)
	}
}
