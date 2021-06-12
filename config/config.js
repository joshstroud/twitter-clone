require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE_URL } = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: "twitter_clone_dev",
        host: DB_HOST,
        dialect: "postgres",
        logging: false
    },
    production: DATABASE_URL
}