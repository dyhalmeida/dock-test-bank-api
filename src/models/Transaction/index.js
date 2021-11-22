const { Model, DataTypes } = require('sequelize');

class Transaction extends Model {
  static init(sequelize) {
    super.init({
      amount: DataTypes.FLOAT,
    }, { sequelize, tableName: 'transactions' });
  }

  static associate(models) {
    this.belongsTo(models.Account, { foreignKey: 'id_transaction', as: 'account' });
  }
}

module.exports = Transaction;
