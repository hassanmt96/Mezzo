'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Story', [{
      title: 'A Story About Music',
      subtitle: 'This writing is, indeed, about music, somehow.',
      content: 'words words words words words words words words words words words words words',
      authorId: 1,
      image: 'filler text',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Story', null, {});
  }
};
