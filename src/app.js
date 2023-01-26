const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
//const morganMiddleware = require('./middleware/morganHttpLogging.js');

loggerStream = {
    write: function (message, encoding) {
      logger.info(message);
    }
};

//app.use(morganMiddleware);
app.use(require("morgan")("combined", { "stream": loggerStream }));

app.use(express.json()); // > req.body


//MIDDLEWARE
app.use('/', require('./middleware/responseSchema.js'));

//ROUTES
app.use('/lottonumbers', require('./routes/lottonumbers.js'));

app.listen(8080,"0.0.0.0",function(){
    console.log("Lottery Ticket Number Generator is listening on port 8080");
    logger.info("Lottery Ticket Number Generator is listening on port 8080");
})