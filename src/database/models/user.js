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
      isNumeric: true,          // will only allow numbers
      notEmpty: true,           // don't allow empty strings
      len: [2,60],              // only allow values with length between 2 and 10
    }
  },
  facebook: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,          // will only allow numbers
      notEmpty: true,           // don't allow empty strings
      len: [0,15],              // only allow values with length between 2 and 10
    }
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
