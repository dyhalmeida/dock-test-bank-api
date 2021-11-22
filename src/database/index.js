const Sequelize = require('sequelize');

/** Configuração de conexão com banco de dados */
const databaseConfig = require('../config/database');

const People = require('../models/People');
const Account = require('../models/Account');
const Transaction = require('../models/Transaction');

const models = [People, Account, Transaction];

class Database {
  constructor() {
    this.connectSQLite();
  }

  connectSQLite() {
    this.connection = new Sequelize(databaseConfig);
    models.forEach(model => model.init(this.connection));
    models.forEach(
      model => model.associate && model.associate(this.connection.models),
    );
  }
}

module.exports = new Database();
