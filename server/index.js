require('babel-polyfill');

const logger = require('./logger');

const app = require('./app');

const port = process.env.PORT || 8081;

app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
});
