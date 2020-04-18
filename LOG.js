const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`;
});

const myShortFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} ${message}`;
});

//const logger = createLogger({
exports.createLogger = function (filename,loggerid) {

	return createLogger({
		level: 'info',
		format: format.combine(
			//format.timestamp({
			//	format: 'YYYY-MM-DD HH:mm:ss'
			//}),
			//format.errors({ stack: true }),
			//format.splat(),
			//format.json(),
			//format.prettyPrint(),

			label({ label: 'right meow!' }),
			format.timestamp({
				format: 'HH:mm:ss.SSSS'
			}),
			myShortFormat
		),

		defaultMeta: { service: loggerid },
		transports: [
			//
			// - Write all logs to filename
			//
			new transports.File({ filename: filename, options: { flags: 'w' } })
		]
	});

	//
	// If we're not in production then **ALSO** log to the `console`
	// with the colorized simple format.
	//
	if (process.env.NODE_ENV !== 'production') {
		logger.add(new transports.Console({
			format: format.combine(
				format.colorize(),
				format.simple()
			)
		}));
	}

};

