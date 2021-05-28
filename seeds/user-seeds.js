const { USE } = require('sequelize/types/lib/index-hints');
const { Users } = require('../models');

const usersData = [
  {
    first_name: 'Stephan',
    last_name: 'du Plooy',
    email: 'hello@gmail.com',
    password: 'hello123'

  }
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
