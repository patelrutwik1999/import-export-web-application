const express = require('express')
const path = require('path')
require('dotenv').config()
var i18n = require("i18n-express");
var flash = require('connect-flash');
const bodyParser = require('body-parser')
const morgan = require('morgan')
var expressLayouts = require('express-ejs-layouts');

//importing routes
const adminLoginRoutes = require('./routers/admin-login')

const app = express()

//MiddleWares
app.use(morgan('dev'))
app.use(bodyParser.json());
var urlencodeParser = bodyParser.urlencoded({ extended: true });
app.use(flash())
app.use(expressLayouts);


//For different language translations
app.use(i18n({
    translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
    siteLangs: ["es", "en", "de", "ru", "it", "fr"],
    textsVarName: 'translation'
}));
app.use('/public', express.static('public'));

app.get('/layouts/', function (req, res) {
    res.render('view');
});

//For set layouts of html view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', adminLoginRoutes)

app.get('/form', function (req, res) {
    res.locals = { title: 'Advanced Plugins' };
    res.render('Form/form-advanced');
});

const port = process.env.PORT || 10934
app.listen(port, () => {
    console.log(`App is running on ${port}`)
})