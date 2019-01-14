const Sequelize = require('sequelize');
const seq = require('../config/dbConnection');

const user = seq.define('user',{
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true,
    validate: {
      isEmail: true,            // checks for email format (foo@bar.com)
    }
  },
  facebook: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  extra_information: {
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

module.exports = user;
