const morgan = require('morgan');
const logger = require('./logger.js');


loggerStream = {
    write: function (message, encoding) {
      logger.http(message.trim());
    }
};

morgan.token(
    "newReq",
    ":method :url :status :res[content-length] - :response-time ms",
);

const morganNewReq = morgan(
    "newReq",
    {
        stream: {
            write: (message) => loggerStream,
        }
    }
);


module.exports = morganNewReq;