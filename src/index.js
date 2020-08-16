if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
} 

const { format } = require('timeago.js');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
require('./database');



//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');



// middlewares
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
 
}));
app.use(flash());


// Global Variables
app.use((req, res, next) => {
  app.locals.format = format;
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// routes
app.use(require('./routes'));

app.use(require('./routes/produno'));
app.use(require('./routes/proddos'));



// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});