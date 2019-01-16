const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const helpers = require('../views/helpers/helper');
const routes = require('./controllers')

const app = express()
app.use(express.static(path.join(__dirname, '..', '..', 'public')))

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'hbs')

app.engine(
'hbs',
exphbs({
extname: 'hbs',
layoutsDir: path.join(__dirname, '..', 'views', 'layouts'),
defaultLayout: 'main',
helpers
})
)
app.use(routes)


app.set('port', process.env.PORT || 8000)
module.exports = app
