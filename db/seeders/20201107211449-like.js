'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [{
      userId: 1,
      storyId: 1
    },
    {
      userId: 1,
      storyId: 4
    },
    {
      userId: 1,
      storyId: 5
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
