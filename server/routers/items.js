const express = require('express');

const errorHandler = require('./errors');
const db = require('../utils/DbManager');

const router = express.Router();


router.get('/lost-items', async (req, res) => {
    const args = {
        key: 'status',
        value: 'lost'
    }

    const payload =  await db.selectItemRecordsWithConditions(args);
    
    res.set('Content-Type', 'application/json')
            .status(200)
            .send(payload);
});

router.get('/found-items', async (req, res) => {
    const args = {
        key: 'status',
        value: 'found'
    };

    const payload =  await db.selectItemRecordsWithConditions(args);
    
    res.set('Content-Type', 'application/json')
            .status(200)
            .send(payload);
});


module.exports = {
    itemRouter: app => app.use('/', router).use(errorHandler.default),
};