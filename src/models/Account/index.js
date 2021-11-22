const { Model, DataTypes } = require('sequelize');

class Account extends Model {
  static init(sequelize) {
    super.init({
      balance: DataTypes.FLOAT,
      daily_withdrawal_limit: DataTypes.FLOAT,
      active: DataTypes.BOOLEAN,
      type_account: DataTypes.INTEGER,
    }, { sequelize, tableName: 'accounts' });
  }

  static associate(models) {
    this.belongsTo(models.People, { foreignKey: 'id_people', as: 'people' });
    this.hasMany(models.Transaction, { foreignKey: 'id_transaction', as: 'transactions' });
  }
}

module.exports = Account;
