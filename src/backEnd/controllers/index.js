const express = require('express');
const services = require('./services');
const service = require('./service');
const hall = require('./hall');

const router = express.Router();

router.get('/', services.get);
router.get('/service/:id', service.get);
router.get('/hall/:id', hall.get);
router.get('/serverError');


module.exports = router;
