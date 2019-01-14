const Sequelize = require('sequelize');
const seq = require('../config/dbConnection');

const services = seq.define('services',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt : {
    type: Sequelize.DATE(3),
    defaultValue: Sequelize.literal('NOW()'),
  },
  updatedAt : {
    type: Sequelize.DATE(3),
    defaultValue: Sequelize.literal('NOW()'),
  }

});

module.exports = services
