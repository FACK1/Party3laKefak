const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { user } = require('../../database/models');

const { SECRET } = process.env;

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
    if (!result) {
      return res.render('login', { message: 'email not found' });
    }
    bcrypt.compare(password, result.password, (err, result2) => {
      if (err) {
        return res.render('login', { message: 'email or password not match' });
      }
      if (result2) {
        const token = jwt.sign({ id: result.id, email }, SECRET);
        return res.cookie('logged_in', token, { maxAge: 999999999 }).redirect('/profile');
      }
    });
  }).catch(() => res.render('login', { message: 'Email not found' }));
};
