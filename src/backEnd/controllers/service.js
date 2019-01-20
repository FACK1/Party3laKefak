
const { serviceDetails } = require('../../database/models');

exports.get = (req, res) => {
  const { params: { id } } = req;
  serviceDetails.findAll({
    where: { serviceId: id },
    attributes: ['id', 'name', 'image_url', 'userId'],
    raw: true,
  })
    .then((result) => {
      res.render('service', { result });
    })
    .catch(() => {
      res.render('serverError');
    });
};
