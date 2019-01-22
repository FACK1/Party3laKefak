const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { serviceDetails, user } = require('../../database/models');

const { SECRET } = process.env;

exports.get = (req, res) => {
  if (req.headers.cookie) {
    const token = cookie.parse(req.headers.cookie).logged_in;
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) { throw new Error(err); }
      const user_id = decoded.id;
      serviceDetails.findAll({
        where: { userId: user_id },
        attributes: ['id', 'name', 'location', 'price', 'image_url'],
        raw: true,
        include: [{
          model: user,
        }],
      })
        .then((result) => {
          res.render('profile', { result });
        })
        .catch(() => {
          res.render('serverError');
        });
    });
  }
};
