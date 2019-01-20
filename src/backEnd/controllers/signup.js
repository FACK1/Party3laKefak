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
    if (!result) {
      if (password === repassword) {
        bcrypt.hash(password, 8, (hashErr, hashedPassword) => {
          if (hashErr) {
            res.send(hashErr);
          }
          user.create({
            name, email, password: hashedPassword, phone_number, facebook //eslint-disable-line
          })
            .then((created) => {
              res.send(created);
            }).catch((err) => {
              res.send(err);
            });
        });
      }
    }
  }).catch(() => res.status(500).json({ err: 'error in query' }));
};
