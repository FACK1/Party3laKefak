
const { serviceDetails, media, user } = require('../../database/models');

exports.get = (req, res) => {
	const { params: { id } } = req;
	media.findAll({
		where: { serviceDetailId: id },
		attributes: ['image_url'],
		include: [{
			model: serviceDetails,
			 attributes: ['id', 'name', 'location', 'description', 'price', 'map_loc', 'userId'],
			 // include user info
			 include: [{
				 model: user,
				 attributes: ['name', 'email', 'phone_number', 'facebook'],
			 }],
		  }],
	}).then((result) => {
		 // res.send(result);
		 res.render('hall', { result });
	})
		.catch(() => res.status(500).json({ err: 'error in query' }));


// serviceDetails.findAll({ where : {id : id },
// attributes: ['name', 'image_url','location','description','price','map_loc'],
// raw: true })
// .then((result) => {
// })
};
