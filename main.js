var express = require('express');
var path = require('path');

var indexRouter = require('./backend/routes/index');
var usersRouter = require('./backend/routes/users');
var homeRouter = require('./backend/routes/home');
const app = express();

app.set('views', path.join(__dirname, 'backend/views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter)



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});