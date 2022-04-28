const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashPassword = await bcrypt.hash('Admin123', 10);
    await queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email: 'admin@admin.ru',
      password: hashPassword,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
