'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const seed = [
      {
        name: 'Anime',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Science',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Movie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Book',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Technology',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Motivation',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return await queryInterface.bulkInsert('Categories', seed, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Categories', null, {});
  }
};
