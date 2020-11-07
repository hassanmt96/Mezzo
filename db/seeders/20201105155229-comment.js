'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
    {
      userId: 2,
      storyId: 1,
      comment: 'Nice. Some stuff to think about.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 1,
      comment: 'Cool :)',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 2,
      comment: 'This was a fun read.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 2,
      comment: 'TRUMPET!!!!!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 2,
      comment: 'Part 2??',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 3,
      comment: 'Very interesting. Thanks for writing.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 3,
      comment: 'I\'m gonna send this to my mom.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 4,
      comment: 'I\'ve never thought about this before.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 4,
      comment: 'Wow.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 5,
      comment: 'great',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 5,
      comment: 'I liked the part about music.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      storyId: 5,
      comment: 'I made an account just so I could comment.',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
