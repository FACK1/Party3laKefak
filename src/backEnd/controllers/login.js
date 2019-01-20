const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { user } = require('../../database/models');
const { SECRET } = process.env

exports.get = (req, res) => {
  res.render('login');
};

exports.post = (req, res) => {
  const {
    email, password,
  } = req.body;
  user.findOne({
    where: { email },
    attributes: ['id', 'email', 'password'],
    raw: true,
  }).then((result) => {
    bcrypt.compare(password, result.password, (err, result2) => {
      if (err) {
        res.send(err);
      }
      if (result2) {
        const token = jwt.sign({ id: result.id, email }, SECRET);
        res.cookie('logged_in', token, { maxAge: 999999999 }).render('signup');
      }
    });
  }).catch(() => console.log('err'));
};
