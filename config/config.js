require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: "twitter_clone_dev",
        host: DB_HOST,
        dialect: "postgres",
        logging: false
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: "twitter_clone_test",
        host: DB_HOST,
        dialect: "postgres",
        logging: false
    }, 
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: "twitter_clone_production",
        host: DB_HOST,
        dialect: "postgres",
        logging: false
    }
}