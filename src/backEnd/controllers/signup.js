const bcrypt = require('bcryptjs');
const { user } = require('../../database/models');

exports.get = (req, res) => {
  res.render('signup');
};

exports.post = (req, res) => {
  const {
    name, email, password, phone_number, facebook, repassword //eslint-disable-line
  } = req.body;
  user.findOne({
    where: { email },
    attributes: ['email'],
  }).then((result) => {
    if (result) {
      res.render('signup', { message: 'email exsit' });
      return;
    }
    if (password !== repassword) {
      res.render('signup', { message: 'password & confirme password not match' });
      return;
    }
    bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
      if (hashErr) res.send(hashErr);
      user.create({
            name, email, password: hashedPassword, phone_number, facebook //eslint-disable-line
      })
        .then(() => {
          res.render('login', { message: 'Succesfuly register' });
        }).catch((err) => {
          res.send(err);
        });
    });
  }).catch(err => res.send(err));
};
