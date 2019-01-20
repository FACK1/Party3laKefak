const { user } = require('../../database/models');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
exports.get = (req, res) => {
   res.render('signup');}

exports.post = (req, res) => {
  const{name,email,password,phone_number,facebook,repassword}= req.body
  user.findOne({
		where: {email},
		attributes: ['email'],
	}).then((result) => {
    if (!result) {
      if (password===repassword) {
        bcrypt.hash(password, 8, (hashErr, hashedPassword) => {
    if (hashErr) {
    console.log(hashErr);
      }
      console.log("hashedPassword",hashedPassword);
      var password=hashedPassword;
      user.create({name,email,password,phone_number,facebook})
      .then((created) =>{
        res.send(created)
      }).catch((err)=>{console.log(err);})
    })
      }
    }
	}).catch(() => res.status(500).json({ err: 'error in query' }));
};
