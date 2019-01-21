const bcrypt = require('bcryptjs');
const { user } = require('../../database/models');

exports.get = (req, res) => {
  res.render('signup');
};

exports.post = (req, res) => {
  const {
    name, email, password, phone_number, facebook, confirm_password
  } = req.body;
  user.findOne({
    where: { email },
    attributes: ['email'],
  }).then((result) => {
    if (result) {
      res.render('signup', { message: 'email is alerady taken' });
      return;
    }
    if (password !== confirm_password) {
      res.render('signup', { message: 'password & confirme password not match' });
      return;
    }
    bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
      if (hashErr) res.send(hashErr);
      user.create({
        name, email, password: hashedPassword, phone_number, facebook,
      })
        .then(() => {
          res.render('login', { message: 'Succesfuly register' });
        }).catch(() => {
          return res.render('signup', { message: 'pleas fill the form' });
        });
    });
  }).catch(() => {
    return res.render('signup', { message: 'pleas fill the form' });
});
};
