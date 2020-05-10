/* utility Modules, FeedUtilities */

/* Magic Mirror
 * Module: FeedUtilities
 *
 * By Neil Scott
 * Inspired by many in the MMM ecosystem
 * MIT Licensed.
 */

var moment = require('moment');

exports.calcTimestamp = function (age) {

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
	
exports.showElapsed = function() {
		endTime = new Date();
		var timeDiff = endTime - startTime; //in ms
		// strip the ms
		timeDiff /= 1000;
		// get seconds 
		var seconds = Math.round(timeDiff);
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
