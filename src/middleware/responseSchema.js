const express = require('express');
const router = express.Router();
const logger = require('./logger.js');

router.use('/', async (req, res, next) => {
    try {
        now = new Date();
        res.body = {
            data: '',
            currentTime: now,
            error: ''
        }
        next()
    }
    catch (erro) {
        logger.error(err);
        res.status(500).json(err);
        return;
    }
});

module.exports = router;