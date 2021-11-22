module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('accounts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_people: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'peoples', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      balance: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      daily_withdrawal_limit: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 1500,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      type_account: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1, /** 1: CC, 2: CP */
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _) => {
    await queryInterface.dropTable('accounts');
  },
};
