var express = require('express');
var mysql = require('mysql');		
var db = require("./db/mysql.js");
var sequelize = require('./models').sequelize;   // mysql 시퀄라이저 모델
sequelize.sync();    //서버가 실행될때 시퀄라이저의 스키마를 DB에 적용시킨다.

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/',(req,res)=>{
  res.send('spacecloud');
});

//main - category, reviews, exhibition
app.get('/main',(req,res)=>{
  var sql1 = 'SELECT category_name FROM category';
  var sql2 = 'SELECT r.content, r.rate, r.image, s.space_name, s.tag, d.Price, d.detailed_price_std FROM review r LEFT JOIN space s ON(r.space_id=s.space_id) LEFT JOIN detailedspace d ON(d.space_id=s.space_id) WHERE NOT r.image is NULL';
  var sql3 = 'SELECT exh_name, exh_description, banner_image FROM exhibition';
  
  db.query(sql1, function(err1, category,field1){
    if (err1) console.log(err1);
    else {
      db.query(sql2, (err2, reviews,field2) => {
        if (err2) console.log(err2);
        else {
          db.query(sql3, (err3,exhibition,field3) => {
            if (err3) console.log(err3);
            else {res.send({
              category:category,
              reviews:reviews,
              exhibition:exhibition
              });
            }
          });
        }
      });
    }
  });
});





app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});