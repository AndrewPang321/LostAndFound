const winston = require('winston');
const winston_mysql = require('winston-mysql')

var options_default = {
  host     : '127.0.0.1',
  user     : process.env.user,
  password : process.env.password,
  database : 'lostandfound',
  table    : 'activity_logs'
};

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston_mysql(options_default),
        new (winston.transports.Console)({ colorize: true, prettyPrint: true }),
    ],
});

module.exports = logger;
