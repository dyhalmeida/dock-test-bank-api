const { Model, DataTypes } = require('sequelize');

class People extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      birth_date: DataTypes.DATE,
    }, { sequelize, tableName: 'peoples' });
  }

  static associate(models) {
    this.hasMany(models.Account, { foreignKey: 'id_people', as: 'accounts' });
  }
}

module.exports = People;
