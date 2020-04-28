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
3. To install all the other MMM-Feed.... modules, <BR />`cd MMM-FeedUtilities`<BR />(if on a unix device) `sudo chmod +x install.sh`<BR />`./install.sh`

## Using the utilities

`LOG.js` - is used to log to a file from any node_helper or other server side code. It will not log to files from client side modules. 

example:

```

var LOG = require('../MMM-FeedUtilities/LOG');  // add LOG to module
this.logger = {}
if (this.logger[a_log_instance] == null) { //create a log instance of not already created
	this.logger[a_log_instance] = LOG.createLogger("alogfile_" + a_log_instance + ".log", a_log_instance);
};

if (this.debug) { // log output to the log file, currently only info has been tested
	this.logger[a_log_instance].info(this.name + " NODE HELPER Received notification: " + notification);
	this.logger[a_log_instance].info(JSON.stringify(some_json_object));
}
```

`LOG.js` - is used to log to a file from any node_helper or other server side code. It will not log to files from client side modules. 

By default, the log files are written to the directory: `modules/MMM-FeedUtilities/logs/`
The Logger uses winston to format the log information, and the program can be changed by the user as required to create other output formats

example:

```
var LOG = require('../MMM-FeedUtilities/LOG');  // add LOG to module
this.logger = {}
if (this.logger[a_log_instance] == null) { //create a log instance of not already created
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

### MagicMirror² Configuration

No configuration is required for this module

