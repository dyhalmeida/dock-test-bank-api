const Sequelize = require('sequelize');

/** Configuração de conexão com banco de dados */
const databaseConfig = require('../config/database');

class Database {
  constructor() {
    this.connectSQLite();
  }

  connectSQLite() {
    this.connection = new Sequelize(databaseConfig);
  }
}

module.exports = new Database();
