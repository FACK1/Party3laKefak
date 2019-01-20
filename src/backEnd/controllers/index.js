const express = require('express');
const services = require('./services');
const service = require('./service');
const hall = require('./hall');
const signup = require('./signup');
const login = require('./login');


const router = express.Router();

router.get('/', services.get);
router.get('/service/:id', service.get);
router.get('/hall/:id', hall.get);
router.get('/serverError');
router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);


module.exports = router;
