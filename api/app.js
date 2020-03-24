var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var path = require('path');

var creationToolRouter = require('./routes/creationtool');
var indexRouter = require('./routes/index');
var newSaleRouter = require('./routes/newSale');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var database = require('./dbQueries/dbqueries');

database('connection');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/creationtool', creationToolRouter);
app.use('/login', loginRouter);
app.use('/sales', newSaleRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;