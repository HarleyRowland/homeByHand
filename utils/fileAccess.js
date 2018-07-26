var fs = require('fs')

module.exports = {
	getAllFilesInJsonDirectory: function(directoryRoute) {
		var jsonFileNames = getFilenamesInDirectory(directoryRoute);
		return getJsonFromFilenames(directoryRoute, 
			jsonFileNames)
	},
	getRandomJsonFiles: function(arrayLength, directoryRoute) {
		var fileNames = getFilenamesInDirectory(directoryRoute);
		if(fileNames.length < arrayLength) arrayLength = fileNames.length;

		var randomFileNames = getRandomSubArray(arrayLength, fileNames);
		var randomJsonFiles = getJsonFromFilenames(directoryRoute, randomFileNames)

		return randomJsonFiles;
	},
	getSingleFile: function(filenameWithPath) {
		return getSingleFile(filenameWithPath)
	}
}

var getSingleFile = function(filenameWithPath) {
	return fs.readFileSync(filenameWithPath);
}

var getFilenamesInDirectory = function(directoryRoute){
	return fs.readdirSync(directoryRoute);
}

var getFile = function(filenameWithPath) {
	return fs.readFileSync(filenameWithPath);
}

var getJsonFromFilenames = function(directoryRoute, filenameArray) {
	return filenameArray.map(function(filename){
		return JSON.parse(getSingleFile(directoryRoute + filename));
	});
}

var getRandomSubArray = function(length, array) {
	var randomArray = [];

	while(length > 0){
		var randomNumber = Math.floor(Math.random() * (array.length + 0)) + 0;
		var randomItem = array.splice(randomNumber, 1);
		randomArray.push(randomItem);
		length--; 
	}

	return randomArray;
}