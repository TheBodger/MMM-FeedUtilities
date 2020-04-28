# MMM-FeedUtilities Module

This module provides the location for a number of common helper modules, structures and scripts. 

### Dependencies
The following node modules are required:

```
    axios 
    winston
    htmlparser2
```

## Installation
To install the module, use your terminal to:
1. Navigate to your MagicMirror's modules folder. If you are using the default installation directory, use the command:<br />`cd ~/MagicMirror/modules`
2. Clone the module:<br />`git clone https://github.com/TheBodger/MMM-FeedUtilities`
3. To install all the other MMM-Feed.... modules, and their nodejs dependencies into the root of magicmirror (reduces disk usage) <BR />`cd MMM-FeedUtilities`<BR />(if on a unix device) `sudo chmod +x install.sh`<BR />`./install.sh`

## Using the utilities

`LOG.js` - is used to log to a file from any node_helper or other server side code. It will not log to files from client side modules. 

example:

```

var LOG = require('../MMM-FeedUtilities/LOG');  // add LOG to module
this.logger = {}
if (this.logger[a_log_instance] == null) { //create a log instance if not already created
	this.logger[a_log_instance] = LOG.createLogger("alogfile_" + a_log_instance + ".log", a_log_instance);
};

if (this.debug) { // log output to the log file, currently only info has been tested
	this.logger[a_log_instance].info(this.name + " NODE HELPER Received notification: " + notification);
	this.logger[a_log_instance].info(JSON.stringify(some_json_object));
}
```

### Variables/methods 

| Option                  | Details
|------------------------ |--------------
| `createLogger`          | *Mthod* - The name of the logfile to create on disk
| `filename`              | *Required* - The name of the logfile to create on disk
| `loggerid`              | *Required* - A unique ID for wach logger created.
| `info`				  | *Method* - logs the information to the file

## MagicMirror² Configuration

no configuration is required

`queueidea.js` - is used to create a queue onto which work in the form of functions can be added. The goal is to provide a pseudo synchrinos solution in a asynchronous environement. The queue will run each item in turn, waiting for notification that the item has been fully processed before starting the next item. 

For usage, variables etc, look at any of the MMM-FeedProvider-xxx modules

## MagicMirror² Configuration

No configuration is required for this module, but it will use settings from the config for managing the queues See the MMM-FeedProvider-xx modules for examples

`RSS.js` - contains the standard format structure for the items and item sources used in all the MMM-FeedProvider-xxx modules. These ensure that the correct data format is provided to the MMM-FeedDisplay module

For examples of usage, see any of the MMM-FeedProvider-xxx modules

`utilities.js` - contains common routines that are used across the MMM-Feedxxxx modules.

### Configuration Options

| Option                  | Details
|------------------------ |--------------
| `listID`                | *Required* - List ID printed from authenticate.js (see installation)
| `maxResults`            | *Optional* - Max number of list items to retrieve. <br><br> **Possible values:** `0` - `100` <br> **Default value:** `10`
| `showCompleted`         | *Optional* - Show completed task items <br><br> **Possible values:** `true`  `false` <br> **Default value:** `false`
| `dateFormat`            | *Optional* - Format to use for due date <br><br> **Possible values:** See [Moment.js formats](http://momentjs.com/docs/#/parsing/string-format/) <br> **Default value:** `MMM Do` (e.g. Jan 18th)
| `updateInterval`        | *Optional* - Interval at which content updates (Milliseconds) <br><br> **Possible values:** `2000` - `86400000` (Tasks API has default maximum of 50,000 calls per day.) <br> **Default value:** `10000` (10 seconds)
| `animationSpeed`        | Speed of the update animation. (Milliseconds) <br><br> **Possible values:** `0` - `5000` <br> **Default value:** `2000` (2 seconds)
| `tableClass`            | Name of the classes issued from `main.css`. <br><br> **Possible values:** xsmall, small, medium, large, xlarge. <br> **Default value:** _small_

