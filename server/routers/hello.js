const express = require('express');

const errorHandler = require('./errors');

const router = express.Router();


router.all('/', async (req, res) => {
    res.send('Hello world');
});


module.exports = app => app.use('/hello', router).use(errorHandler.default);
