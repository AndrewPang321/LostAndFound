const logger = require('./logger');
const db = require('./utils/DbManager');
const fs = require('fs-extra');
const _ = require('lodash');

module.exports = {
    default: () => {
        db.initDb()
        .then(async () => {
            logger.info('Saving items ... ');
            const content = fs.readFileSync('./data/items.json');
            const itemJSON = JSON.parse(content);
            
            const items = await Promise.all(_.map(itemJSON.items, item => {
                return {
                    name: item.name,
                    category: item.category,
                    location: item.location,
                    date: item.date,
                    description: item.description,
                    src: item.src,
                    status: item.status
                }
            }));
            return db.insertItemRecords(items);
        }).then(() => {
            logger.info('Done!!');
        }).catch((err) => {
            logger.error('Error...', err);
        });
    }
};
