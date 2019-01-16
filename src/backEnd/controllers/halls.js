
const { serviceDetails } = require('../../database/models');

exports.get = (req, res) => {
// const { id } = 1;
serviceDetails.findAll({
attributes: ['id', 'name'],
raw: true
})
.then((result) => {
// media.findOne({where:service_details_id})
res.render('halls', { result });
})
.catch(() => {
return res.status(500).json({ err: 'error in query' });
});
}
