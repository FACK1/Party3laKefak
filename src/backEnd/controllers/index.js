const express = require('express')
const services = require('./services')
const service = require('./service')

const router = express.Router()

router.get('/', services.get)
router.get('/service/:id', service.get)



module.exports = router
