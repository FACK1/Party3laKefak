const Sequelize = require('sequelize');
const seq = require('../config/dbConnection');

const serviceDetails = seq.define('serviceDetails',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mapLoc: {
    type: Sequelize.STRING,
    allowNull: true
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

module.exports = serviceDetails
