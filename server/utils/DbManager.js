const knex = require('knex');
const logger = require('../logger');

const initDb = async () => {
    logger.info('Creating DB...');

    this.db = knex({
        client: 'mysql',
        connection: {
            host : '127.0.0.1',
            user: process.env.user,
            password: process.env.password,
            database: 'lostandfound',
            timezone: 'utc',
        },
        useNullAsDefault: true,
    });

    const now = this.db.fn.now();
    const dbSchema = this.db.schema;

    const fnCreateItems = () => {
        const tableName = 'items';
        logger.info(`Creating ${tableName} table...`);
        return dbSchema.createTableIfNotExists(tableName, (table) => {
            table.increments('id').primary();
            table.string('name', 1000);
            table.string('category', 1000);
            table.string('location', 1000);
            table.string('date', 1000);
            table.string('description', 1000);
            table.string('src', 1000);
            table.string('status', 1000);
            table.timestamp('created_on').notNullable().defaultTo(now);
        });
    };

    const fnCreateUsers = () => {
        const tableName = 'users';
        logger.info(`Creating ${tableName} table...`);
        return dbSchema.createTableIfNotExists(tableName, (table) => {
            table.increments('id').primary();
            table.string('email', 1000);
        })
    };

    const fnCreateActivityLogs = () => {
        const tableName = 'activity_logs';
        logger.info(`Creating ${tableName} table...`);
        return dbSchema.createTableIfNotExists(tableName, (table) => {
            table.increments('id').primary();
            table.string('level', 1000);
            table.string('message', 1000);
            table.string('meta', 1000);
            table.timestamp('timestamp');
        })
    };

    await fnCreateItems();
    await fnCreateUsers();
    await fnCreateActivityLogs();
};

const _insertRecords = (table, args) => {
    if (!args) {
        throw new Error('invalid_arguments');
    }

    return this.db(table)
        .insert(args)
        .then((results) => {
            logger.info(`Records saved ${results[0]} on: ${table}`);
        })
        .catch((err) => {
            logger.error(err.message, args);
        });
};

const _selectRecords = (table) => {
    if (!table) {
        throw new Error('invalid_arguments');
    }

    return this.db
        .select()
        .table(table)
        .then((results) => {
            logger.info(`Records selected ${results[0]} on: ${table}`);
            return results;
        })
        .catch((err) => {
            logger.error(err.message, args);
        });
}

const _selectRecordsWithConditions = (table, args) => {
    if (!args) {
        throw new Error('invalid_arguments');
    }

    const { key, value } = args;

    console.log(key, value)

    return this.db(table)
        .where(key, value)
        .then((results) => {
            logger.info(`Records selected ${results[0]} on: ${table}`);
            return results;
        })
        .catch((err) => {
            logger.error(err.message, args);
        });
}

const insertItemRecords = args => _insertRecords('items', args);
const selectItemRecords = args => _selectRecords('items');
const selectItemRecordsWithConditions = args => _selectRecordsWithConditions('items', args);


module.exports = {
    initDb,
    insertItemRecords,
    selectItemRecords,
    selectItemRecordsWithConditions,
};

