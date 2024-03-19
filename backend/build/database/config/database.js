"use strict";
// AMBIENTE DE DESENVOLVIMENTO
require("dotenv/config");
const config = {
    username: 'root',
    password: 'password',
    database: 'store',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
module.exports = config;
//# sourceMappingURL=database.js.map