const express = require('express');

const errorHandler = require('./errors');

const router = express.Router();


router.all('/lost-items', async (req, res) => {
    res.send('Hello world');
});

module.exports = {
    itemRouter: app => app.use('/', router).use(errorHandler.default),
};