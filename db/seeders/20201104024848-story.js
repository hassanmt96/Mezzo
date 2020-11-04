'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [{
      title: 'A Story About Music',
      subtitle: 'This writing is, indeed, about music, somehow.',
      content: 'words words words words words words words words words words words words words words words words words words words words words words words words',
      authorId: 1,
      image: 'https://cdn11.bigcommerce.com/s-8wy6p2/images/stencil/1500x1000/uploaded_images/article.png?t=1575561837',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stories', null, {});
  }
};
