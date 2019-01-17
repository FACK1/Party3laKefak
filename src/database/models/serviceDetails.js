const Sequelize = require('sequelize');
const seq = require('../config/dbConnection');

const serviceDetails = seq.define('service_details',{
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
  map_loc: {
    type: Sequelize.STRING,
    allowNull: true
  },
  image_url: {
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

module.exports = serviceDetails
