const Sequelize = require('sequelize');
const seq = require('../config/dbConnection');

const media = seq.define('media',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
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

module.exports = media
