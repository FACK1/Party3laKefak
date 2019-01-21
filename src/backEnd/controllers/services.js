const { services } = require('../../database/models');

exports.get = (req, res) => {
  services.findAll({
    attributes: ['id', 'name'],
    raw: true,
  })
    .then((result) => {
      res.render('home', { result });
    })
    .catch(() => {
      res.status(500).json(
        { err: 'error in query' },
      );
    });
};
