const Sequelize = require('sequelize');
const seq = require('../config/dbConnection');

const extraServices = seq.define('extra_services',{
  extra_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  extra_details: {
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
