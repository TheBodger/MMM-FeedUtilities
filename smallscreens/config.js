/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	//top_bar, top_left, top_center, top_right, 
	//upper_third, middle_center, lower_third, 
	//bottom_left, bottom_center, bottom_right, bottom_bar, 
    //fullscreen_above, and fullscreen_below

	//instagram MMMApp1

	modules: [
		{
			module: "alert",
		},
	//note usage of modulewidth in vw
		
				{
			module: "MMM-FeedDisplay",
			position: "top_bar",
			config: {
				id: "MMFD2",
				article: {
					mergetype: 'alternate',
					ordertype: 'date',
					cleanedtext:true,
				},
				display : {
					articlimage: false,
					refreshtime: 20000,
					articlecount: 1,
					rotationstyle: 'scroll',
					modulewidth: "90vw",
					sourcenamelength: 4,
					articleage: true,
					articledescription:true,
				},
			},
		},

		

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
