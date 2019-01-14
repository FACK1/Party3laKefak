const extraServices = require('../models/extraServices');
const media = require('../models/media');
const serviceDetails = require('../models/serviceDetails');
const services = require('../models/services');
const user = require('../models/user');
const db = require('../config/dbConnection.js');

serviceDetails.belongsTo(user, {
  onDelete: 'CASCADE', forignKey: 'user_id', targetKey: 'id'
});

serviceDetails.belongsTo(services, {
  onDelete: 'CASCADE', forignKey: 'service_id', targetKey: 'id'
});

extraServices.belongsTo(serviceDetails, {
  onDelete: 'CASCADE', forignKey: 'serviceDetails_id', targetKey: 'id'
});

media.belongsTo(serviceDetails, {
  onDelete: 'CASCADE', forignKey: 'serviceDetails_id', targetKey: 'id'
});

const seq = new Promise((resolve, reject) => {
  db.sync().then(() => {
    resolve();
  }).catch((err) => {reject(err);});
});

module.exports =seq;
