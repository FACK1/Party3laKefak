const { serviceDetails } = require('../../database/models');

exports.get = (req, res) => {
  const { params: { id } } = req;
  serviceDetails.findAll({
    where: { serviceId: id },
    attributes: ['id', 'name', 'image_url'],
    raw: true,
  })
    .then((result) => {
      if (!result || result.length === 0) {
        return res.render('service', { message: 'No Results Exists !' });
      }
      return res.render('service', { result });
    })
    .catch(() => res.render('serverError'));
};
