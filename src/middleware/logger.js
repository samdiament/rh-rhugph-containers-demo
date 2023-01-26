'use strict'
const winston = require('winston');
require('winston-daily-rotate-file');

const { combine, timestamp, json } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
    filename: '/logs/lottery-%DATE%.log',
    datePattern: 'YYYYMMDD',
    maxFiles: '14d'
});

const eventLogger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine (
        timestamp({
            format: 'YYYYMMDDHHmmssSSS',
        }),
        json()
    ),    transports: [fileRotateTransport]
});




module.exports = eventLogger;