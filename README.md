# MMM-FeedUtilities Module

This module contains a number of common helper modules, structures and scripts which are used by most of the MMM Chart and MMM Feed modules 

### Dependencies
The following node modules are required:

```
npm install axios
npm install winston
npm install feedparser
npm install request
npm install twitter
npm install htmlparser2
npm install leo-profanity
```

### Installation
To install the module, use your terminal to:
1. Navigate to your MagicMirror's modules folder. If you are using the default installation directory, use the command:<br />`cd ~/MagicMirror/modules`
2. Clone the module:<br />`git clone https://github.com/TheBodger/MMM-FeedUtilities`
3. To install all the other MMM-Feed.... modules, and their nodejs dependencies into the root of magicmirror (reduces disk usage) <BR />`cd MMM-FeedUtilities`<BR />(if on a unix device) `sudo chmod +x install.sh`<BR />`./install.sh`

### Update

to update this module and its dependecies, including the fix for docker compatibility, use your terminal to:
1. Navigate to the MagicMirror folder where it was installed. If you are using the default installation directory, use the command:<br />`cd ~/MagicMirror/modules/MMM-FeedUtilities`
2. Update the module:<br />`git pull`
3. To update the nodejs dependencies (if on a unix device) `sudo chmod +x install.sh`<BR />`./install.sh`
4. This may report a number of fatal messages indicating directories are not empty, ignore these

### Using the utilities

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

| Option                  | Details
|------------------------ |--------------
| `createLogger`          | *Method* - The name of the logfile to create on disk
| `filename`              | *Required* - The name of the logfile to create on disk
| `loggerid`              | *Required* - A unique ID for wach logger created.
| `info`				  | *Method* - logs the information to the file


`queueidea.js` - is used to create a queue onto which work in the form of functions can be added. The goal is to provide a pseudo synchronous solution in a asynchronous environment. The queue will run each item in turn, waiting for notification that the item has been fully processed before starting the next item. 

For usage, variables etc, look at any of the MMM-FeedProvider-xxx modules

`RSS.js` - contains the standard format structure for the items and item sources used in all the MMM-FeedProvider-xxx modules. These ensure that the correct data format is provided to the MMM-FeedDisplay module

For examples of usage, see any of the MMM-FeedProvider-xxx modules

`utilities.js` - contains common routines that are used across the MMM-Feedxxxx modules.

#### MagicMirror² Configuration

no configuration is required
