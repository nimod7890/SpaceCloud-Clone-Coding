var express    = require('express');
var mysql      = require('mysql');
var db 		 = require("./db/mysql.js");

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Root');
});

app.get('/users', (req, res) => {
  db.connection.query('SELECT * from users', (err, results) => {
    if (err) throw error;
    console.log('User info is: ', results);
    res.send(results);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});