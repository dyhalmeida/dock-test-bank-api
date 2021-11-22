module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('peoples', [
    {
      name: 'Diego Almeida',
      cpf: '72889673529',
      birth_date: new Date('1992-02-21'),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Laura Almeida',
      cpf: '35509293586',
      birth_date: new Date('2015-07-27'),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('peoples', null, {}),
};
