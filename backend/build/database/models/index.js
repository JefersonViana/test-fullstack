"use strict";
// AMBIENTE DE PRODUÇÃO
// import 'dotenv/config';
// import { Sequelize } from 'sequelize';
// import pg from 'pg';
// export default new Sequelize(process.env.POSTGRES_URL as string, {
//   dialectModule: pg,
// });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// AMBIENTE DE DESENVOLVIMENTO
require("dotenv/config");
const database_1 = __importDefault(require("../config/database"));
const sequelize_1 = require("sequelize");
exports.default = new sequelize_1.Sequelize(database_1.default);
//# sourceMappingURL=index.js.map