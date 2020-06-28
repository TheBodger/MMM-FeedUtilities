/* utility Modules, FeedUtilities */

/* Magic Mirror
 * Module: FeedUtilities
 *
 * By Neil Scott
 * Inspired by many in the MMM ecosystem
 * MIT Licensed.
 */

var moment = require('moment');
var filter = require('leo-profanity');

var words = filter.list();
var wordstoadd = [];

for (var i = 0, len = words.length; i < len; i++) {

	wordstoadd.push(words[i] + "er");
	wordstoadd.push(words[i] + "ers");

}

filter.add(wordstoadd);

//var filter = new Filter();

exports.profanitycleaner = function (theString) {

	var self = this;

	if (theString == null) { return theString };

	return filter.clean(theString, '*'); //Don't be an ******

	//isprofanity(cTextClean, function (t,words) {
	//	b = t ? 'contains' : 'does not contain';
	//	self.logger[self.currentmoduleinstance].info("In cleanString : " + '"' + cTextClean + '" ' + b + ' profanity ' + JSON.stringify(words));
	//}, 'node_modules/isprofanity/data/profanity.csv', 'node_modules/isprofanity/data/exceptions.csv', 0.8);
},

exports.cleanString = function (theString) {
	var self = this;
	if (theString == null) { return theString };

	var cTextClean = theString;
	cTextClean = cTextClean.replace(/<head>[\s\S]*?<\/head>/ig, ""); //loose the head section
	cTextClean = cTextClean.replace(/(<([^>]+)>)/ig, ""); // loose all the tags and contents
	cTextClean = cTextClean.replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''); //urls
	cTextClean = cTextClean.replace(/[^\x00-\x7F]/g, ''); //dodgy hex characters
	cTextClean = cTextClean.replace(/\n/g, ' '); //newlines
	cTextClean = cTextClean.replace(/\s+/g, ' '); // whatever this is
	cTextClean = cTextClean.replace(/:/g, ' '); // a couple of annoying characters that upset word clouds
	//cTextClean = cTextClean.replace(/[^A-Za-z0-9_]/g, ' '); //remove all the delimiters // leave this as it kills ! ? ' etc
	cTextClean = cTextClean.trim();
	if (cTextClean.endsWith(':'))
		cTextClean = cTextClean.substr(0, cTextClean.length - 1);

	return cTextClean;
},

exports.calcTimestamp = function (age) {

	//ignore nulls

	if (age == null) {return null;}

	//calculate the actual timestamp to use for filtering feeds, 
	//options are timestamp format, today for midnight + 0.0001 seconds today, or age in minutes
	//determine the format of the data in age

	var filterDate = new Date();

	if (typeof (age) == 'number') {

		filterDate = new Date(filterDate.getTime() - (age * 60 * 1000));

	}
	else { //age is hopefully a string ha ha

		if (age.toLowerCase() == 'today') {
			filterDate = new Date(filterDate.getFullYear(), filterDate.getMonth(), filterDate.getDate(), 0, 0, 0, 0)
		}

		else { //we assume the user entered a correct date - we can try some basic validation

			if (moment(age, "YYYY-MM-DD HH:mm:ss", true).isValid()) {
				filterDate = new Date(age);
			}
			else {

				console.log(this.name + " Invalid date provided for filter age of feeds:" + age.toString());
			}

		}
	}

	return filterDate;

},
	
exports.showElapsed = function (startTime) {
		endTime = new Date();
		var timeDiff = endTime - startTime; //in ms
		// strip the ms
		timeDiff /= 1000;
		// get seconds 
		var seconds = (timeDiff);
		return (" " + seconds + " seconds");
};

exports.getStringTimeDifference = function (ageinmilliseconds) {

	var diffSecs = Math.round(ageinmilliseconds / 1000);

	if (diffSecs < 60) { //seconds
		return diffSecs + "s";
	}
	if (diffSecs < (60 * 60)) {//seconds * minutes
		var diffMins = Math.ceil(diffSecs / 60);
		return diffMins + "m";
	}
	if (diffSecs < (60 * 60 * 24)) {//seconds * minutes * hours
		var diffHours = Math.ceil(diffSecs / (60 * 60));
		return diffHours + "h";
	}
	if (diffSecs < (60 * 60 * 24 * 7)) {//seconds * minutes * hours * days
		var diffDays = Math.ceil(diffSecs / (60 * 60 * 24));
		return diffDays + "d";
	}
	if (diffSecs < (60 * 60 * 24 * 30)) {//seconds * minutes * hours * days in week
		var diffWeeks = Math.ceil(diffSecs / (60 * 60 * 24 * 30));
		return diffWeeks + "w";
	}
	if (diffSecs < (60 * 60 * 24 * 365)) {//seconds * minutes * hours * days in year
		var diffMonths = Math.ceil(diffSecs / (60 * 60 * 24 * 365));
		return diffMonths + "m";
	}
	if (diffSecs >= (60 * 60 * 24 * 366)) {//seconds * minutes * hours * days in year
		var diffYears = Math.ceil(diffSecs / (60 * 60 * 24 * 365));
		return diffYears + "y";
	}
};
