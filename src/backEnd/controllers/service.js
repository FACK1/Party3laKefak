
const { serviceDetails } = require('../../database/models');

exports.get = (req, res) => {
const { params: { id } } = req;
serviceDetails.findAll({ where : {serviceId : id },
attributes: ['id', 'name', 'image_url'],
raw: true })
.then((result) => {
res.render('service', { result });
})
.catch(() => {
return res.status(500).json({ err: 'error in query' });
});
}
