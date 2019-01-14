const Sequelize = require('sequelize');
const seq = require('../config/dbConnection');

const extraServices = seq.define('extraServices',{
  extraName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  extraDetails: {
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

module.exports = extraServices
