const { services } = require('../../database/models');

exports.get = (req, res) => {
  services.findAll({
    attributes: ['id', 'name'],
    raw: true,
  })
    .then((result) => {
      if (!result || result.length === 0) {
        return res.render('home', { message: 'No Results Exists !' });
      }
      return res.render('home', { result });
    })
    .catch(() => {
      res.render('serverError');
    });
};
