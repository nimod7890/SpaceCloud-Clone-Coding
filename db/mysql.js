var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : 'localhost', //실제로 연결할 데이터베이스의 위치
    user     : 'root',
    password : 'bomin0217',
    database : 'spacecloud' //데이터베이스 이름
  });
  
connection.connect(function(err){
  if(err) console.log('________________________');
});

module.exports = connection;