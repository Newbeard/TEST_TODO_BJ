module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tasks', [{
      name: 'John',
      email: 'john@com.ru',
      title: 'Покормить кота',
      status: 'В процессе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Liza',
      email: 'liza@com.ru',
      title: 'Полить цветы',
      status: 'В процессе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Alex',
      email: 'alex@com.ru',
      title: 'Сделать ТЗ',
      status: 'В процессе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Petya',
      email: 'petya@com.ru',
      title: 'Выполнить ДЗ',
      status: 'В процессе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sasha',
      email: 'sasha@com.ru',
      title: 'Пройти собеседоание',
      status: 'В процессе',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Katya',
      email: 'katya@com.ru',
      title: 'Создать БД',
      status: 'В процессе',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
