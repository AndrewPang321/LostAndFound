const app = require('./express');
const logger = require('./logger');
const initData = require('./initData');

const helloRouter = require('./routers/hello');
const { itemRouter } = require('./routers/items');

initData.default();

helloRouter(app);
itemRouter(app);

module.exports = app;
