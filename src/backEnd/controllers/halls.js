
const { serviceDetails } = require('../../database/models');

exports.get = (req, res) => {
const { params: { id } } = req;
serviceDetails.findAll({
attributes: ['id', 'name'],
raw: true
})
.then((result) => {
res.render('halls', { result });
})
.catch(() => {
return res.status(500).json({ err: 'error in query' });
});
}
