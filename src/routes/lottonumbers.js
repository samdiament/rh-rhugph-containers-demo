const express = require('express');
const router = express.Router();
const logger = require('../middleware/logger.js');

router.get('/', async(req,res) => {
    try {
        const max = 99;
        //console.log(Math.floor(Math.random() * max).toString());

        const output = {
            "firstNumber" : Math.floor(Math.random() * max),
            "secondNumber" : Math.floor(Math.random() * max).toString(),
            "thirdNumber" : Math.floor(Math.random() * max).toString(),
            "fourthNumber" : Math.floor(Math.random() * max).toString(),
            "fifthNumber" : Math.floor(Math.random() * max).toString(),
            "sixthNumber" : Math.floor(Math.random() * max).toString(),
        };

        res.body.data = output;
        res.json(res.body);
        //logger.info(res.body);
        return;
    }
    catch (err) {
        //console.log(err);
        logger.error(err);
        res.status(400).json(err);
        return;
    }
});

module.exports = router;