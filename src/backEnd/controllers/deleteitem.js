const { serviceDetails } = require('../../database/models');

exports.delete = (req, res) => {
  const { params: { id } } = req;
  serviceDetails.destroy({
    where: { id },
  }).then(() => res.redirect('/profile'))
    .catch(() => res.json({ error: 'server error' }));
};
