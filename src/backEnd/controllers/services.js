const Sequelize = require('sequelize');
const services = require('../../database/models/services');
exports.get = (req, res) => {
  services.findAll({
  attributes: ['id','name'],
   raw: true
  })
  .then((result)=>{
      res.render('home', { result: result });
  })
   .catch(()=>{
      return res.status(500).json({err: 'error in query'});
    });
}
