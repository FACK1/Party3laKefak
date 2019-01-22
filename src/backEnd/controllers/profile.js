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
<<<<<<< HEAD
        .catch((error) => {
=======
        .catch(() => {
>>>>>>> d6533d3ae16f2964aec547916b3bc77a920a0e41
          res.render('serverError');
        });
    });
  }
};
