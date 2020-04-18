//add date and debug

var LOG = require('./LOG');

exports.queue = function (queuename,debug) {

    this.queue = [];
    this.meta = [];
    this.metaitem_template = {id:'',date:''};
    this.queue_started = false;
    this.queue_busy = false;
    this.queuename = queuename;
    this.debug = false;
    this.queueitemid = 0;
    this.currentactiveid = -1;
    this.currentmeta = {};

    if (this.debug) {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ new queue: " + queuename + " created at: " + new Date());
        this.logger = LOG.createLogger("logs/queueidea.log", "queueidea"); // will add logging by name if needed
        this.logger.info(`In create queue ${this.queuename}`);
    }

    this.addtoqueue = function (aprocess) {

        //if (this.debug) {this.logger.info(`In function ${this.something}`);}

        if (this.debug) { this.logger.info(`In addtoqueue ${this.queue.length}`);}
        this.queue.push(aprocess); // add to end of array
        var metaitem = { id: this.queueitemid++, date: new Date() };
        this.meta.push(metaitem);
        if (this.debug) { this.logger.info(`added queue item ${JSON.stringify(metaitem)}`); }

    }

    this.startqueue = function (interval) {

        if (this.debug) { this.logger.info(`In startqueue ${this.queue.length} queue is started:${this.queue_started} interval:${interval} `); }

        var self = this;

        if (this.queue_started) { return; } //queue already running so we ignore it
        if (this.queue.length == 0) {       //queue empty so we ignore it
            if (this.debug) { this.logger.info(`In startqueue ${this.queue.length} queue is empty`); }
            return;
        }

        this.queue_started = true;

         //run an initial item before we start waiting for each item beleo (may reduce interval to 0!!)

        self.queue_busy = true;
        self.currentmeta = self.meta.shift()
        self.currentactiveid = self.currentmeta.id
        self.currentmeta['startdate'] = new Date();
        if (self.debug) { self.logger.info(`About to run id: ${self.currentactiveid}`); }
        self.queue.shift()(); // get the start of the array (fifo)

        this.processor = setInterval(function () {
            if (self.debug) { self.logger.info(`processing queues ${self.queue.length} ${self.meta.length} queue is busy:${self.queue_busy}`); }

            if (self.queue.length > 0) {
                if (!self.queue_busy) {
                    self.queue_busy = true;
                    self.currentmeta = self.meta.shift()
                    self.currentactiveid = self.currentmeta.id
                    self.currentmeta['startdate'] = new Date();
                    if (self.debug) { self.logger.info(`About to run id: ${self.currentactiveid}`); }
                    self.queue.shift()(); // get the start of the array (fifo)
                }
            }
            else {
                if (self.debug) { self.logger.info(`In startqueue: closing  processor`); }
                self.queue_started = false;
                clearInterval(self.processor);
            }
            
        }, interval);

    }

    this.processended = function () {
        if (this.debug) {
            this.logger.info(`In processended ${this.queue.length}`);
            this.logger.info(`ended id: ${this.currentactiveid}`);
            this.logger.info(`ended age: ${new Date() - this.currentmeta.date}`);
            this.logger.info(`ended process elapsed: ${new Date() - this.currentmeta.startdate}`);
        }
        this.queue_busy = false;
    }


    this.endqueue = function () {
        if (this.debug) { this.logger.info(`In endqueue ${this.queue.length}`); }
        this.queue = [];
        this.queue_busy = false;
        this.queue_started = false;
        clearInterval(self.processor);
    }

}

