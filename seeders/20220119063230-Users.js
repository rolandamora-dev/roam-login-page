'use strict';
const db = require('../models');
const User = db.User;
module.exports = {
  async up(queryInterface, Sequelize) {

    return User.bulkCreate(generateUsers(), { individualHooks: true });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

const generateUsers = () => {
  return [
    {
      firstName: 'John',
      lastName: 'Doe',
      address: 'USA',
      postcode: '123',
      phonenumber: '45678',
      email: 'john@email.com',
      username: 'john',
      password: 'john',
      role: 'admin',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      address: 'USA',
      postcode: '123',
      phonenumber: '45678',
      email: 'jane@email.com',
      username: 'Jane',
      password: 'Jane',
      role: 'admin',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      firstName: 'John',
      lastName: 'Reyes',
      address: 'Phil',
      postcode: '321',
      phonenumber: '45678',
      email: 'johnr@email.com',
      username: 'johnr',
      password: 'johnr',
      role: 'user',
      updatedAt: new Date(),
      createdAt: new Date()
    }
  ]
}
