const express = require('express');
const services = require('./services');
const service = require('./service');
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const hall = require('./hall');
const profile = require('./profile.js');
const add = require('./add');

const router = express.Router();

router.get('/', services.get);
router.get('/service/:id', service.get);
router.get('/hall/:id', hall.get);
router.get('/serverError');

router.get('/login', login.get);
router.post('/login', login.post);

router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/profile', profile.get);

router.get('/logout', logout.get);

router.get('/add', add.get);
router.post('/add', add.post);
module.exports = router;
