const express = require('express');
const services = require('./services');
const service = require('./service');
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const hall = require('./hall');
const profile = require('./profile.js');
const deleteitem = require('./deleteitem');

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
// router.delete('/profile', profile.get);
router.get('/logout', logout.get);

router.delete('/service/:id', deleteitem.delete);

module.exports = router;
