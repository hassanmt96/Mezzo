'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [{
      userId: 1,
      storyId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      storyId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      storyId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
