const { serviceDetails, media } = require('../../database/models');

const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { SECRET } = process.env;

exports.get = (req, res) => {
  res.render('add');
};

exports.post = (req, res) => {
  const {
    name, location, description, price, image_url
  } = req.body;
  if (req.headers.cookie) {
    const token = cookie.parse(req.headers.cookie).logged_in;
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) { throw new Error(err); }
      const userId = decoded.id;
  serviceDetails.create({
    name, location, description, price, image_url, userId, serviceId: 2,
    raw: true,
  })
    .then((result) => {
      media.create({
        name, image_url, serviceDetailId: result.dataValues.id,
      })
        .then(() => {
          res.render('add', { message: 'addded' });
          return;
        }).catch(() => {
          res.render('serverError');
        });
    }).catch(() => {
      res.render('serverError');
    });
      });
  }
};
