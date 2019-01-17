
const { serviceDetails, media, user } = require('../../database/models');

exports.get = (req, res) => {
	const { params: { id } } = req;
	// ////
	// const details= result[0].service_detail.dataValues
	// const images=    result.map((value)=>{
	//     return value.image_url
	//     })
	//     const filteredResult= {images,details}
	//         res.send(filteredResult);
	// ///
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
		const details = result[0].service_detail.dataValues;
		const images = result.map(value => value.image_url);
		const filteredResult = [{ images, details }];
		// res.send(filteredResult);
		 res.render('hall', { filteredResult });
	})
		.catch(() => res.status(500).json({ err: 'error in query' }));
// serviceDetails.findAll({ where : {id : id },
// attributes: ['name', 'image_url','location','description','price','map_loc'],
// raw: true })
// .then((result) => {
// })
};
