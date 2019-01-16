const express = require('express')
const services = require('./services')
const halls = require('./halls')

const router = express.Router()

router.get('/', services.get)
router.get('/halls/:id', halls.get)



module.exports = router
