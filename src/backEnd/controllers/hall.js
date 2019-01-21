
const { serviceDetails, media, user } = require('../../database/models');

exports.get = (req, res) => {
  const { params: { id } } = req;
  media.findAll({
    where: { serviceDetailId: id },
    attributes: ['image_url'],
    include: [{
      model: serviceDetails,
      attributes: ['id', 'name', 'location', 'description', 'price', 'map_loc', 'userId'],
      include: [{
        model: user,
        attributes: ['name', 'email', 'phone_number', 'facebook'],
      }],
    }],
  }).then((result) => {
    if (!result || result.length === 0) {
      res.render('hall', { message: 'No Results Exists !' });
    }
    const details = result[0].service_detail.dataValues;
    const images = result.map(value => value.image_url);
    const filteredResult = [{ images, details }];
    res.render('hall', { filteredResult });
  })
    .catch(() => {
      res.render('serverError');
    });
};
