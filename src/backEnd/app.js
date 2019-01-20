const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const helpers = require('../views/helpers/helper');
const routes = require('./controllers')
const bp = require('body-parser');

const app = express()
app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'hbs')

app.engine(
'hbs',
exphbs({
extname: 'hbs',
layoutsDir: path.join(__dirname, '..', 'views', 'layouts'),
partialsDir: path.join(__dirname, '..', 'views', 'partials'),
defaultLayout: 'main',
helpers
})
)
app.use(routes)

app.set('port', process.env.PORT || 8000)
module.exports = app
