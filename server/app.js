const app = require('./express');
const logger = require('./logger');
const initData = require('./initData');

const { itemRouter } = require('./routers/items');

initData.default();

itemRouter(app);

module.exports = app;
