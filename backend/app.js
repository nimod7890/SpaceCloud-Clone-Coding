var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

var mysql = require("mysql");
var session = require('express-session')
var MySQLStore = require('express-mysql-session')(session)

var app = express()

var options={
    host:'localhost',
    user:'root',
    password:'bomin0217',
    database:'clonecoding'
}
app.use(session({
    key:'cookie',
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: false,
    store:new MySQLStore({}, mysql.createConnection(options))
}));

var passport = require('./passport')(app);


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users')(passport);
var homeRouter = require('./routes/home');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;