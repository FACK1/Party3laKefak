//res.render('home', { result: "rr"});
exports.get = (req, res) => {
    res.render('signup');
}

// const Sequelize = require('sequelize');
// const {services} = require('../../database/models');
// exports.get = (req, res) => {
//   services.findAll({
//   attributes: ['id','name'],
//    raw: true
//   })
//   .then((result)=>{
//       res.render('home', { result: result });
//   })
//    .catch(()=>{
//       return res.status(500).json({err: 'error in query'});
//     });
// }
//
//
//
// const db_connection = require('../db_connection.js');
//
// const checkUser = (email) => {
// 	return new Promise((resolve, reject) => {
// 		db_connection.query(`select * from users where email = $1`, [email], (error, result) => {
// 			try {
// 				resolve(result.rows)
// 			} catch (e) {
// 				reject(error);
// 			}
// 		});
// 	})
// }
//
//
// const addUser = (name, email, password) => {
// 	return new Promise((resolve, reject) => {
// 			db_connection.query('INSERT INTO users (name, email,password) values ($1, $2, $3)', [name, email, password], (error, result) => {
// 				if (error) {
// 					reject(error)
// 				}
// 				resolve('added')
// 			})
// 	})
// }
//
// module.exports = {
//   checkUser,
//   addUser
// }
