const express = require('express');
const services = require('./services');
const service = require('./service');
const signup = require('./signup');
const login = require('./login');

const router = express.Router();

router.get('/', services.get);
router.get('/service/:id', service.get);

router.get('/signup', signup.get);
router.post('/signup', signup.post);

router.get('/login', login.get);
router.post('/login', login.post);

module.exports = router;
