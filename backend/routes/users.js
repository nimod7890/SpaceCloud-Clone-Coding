var express = require('express');
var router = express.Router();
var userModel = require('../../models').user;
var session = require('express-session')
var MySQLStore = require('session-file-store')(session)

router.get('/',function(req,res,next){
  var sess=req.session;
  res.send("userPage");
});

router.post('/login',function(req,res,next){
  var reqEmail=req.body.email;
  var reqPwd=req.body.password;

  const sameEmail= userModel.findOne({where:{user_email:reqEmail}})
    .then(function(data){
      if(data==null||data==undefined){
        var msgg="login failed\nEmail:"+reqEmail;
        console.log(msgg);
        var data={success:false,msg:msgg};
        res.send(data);
        return;
      }if(data.user_pwd!=reqPwd){
        var msgg="login failed\npwd:"+reqPwd+"found"+data.password;
        console.log(msgg);
        var data={success:false,msg:msgg};
        res.send(data);
      }else{
        var msgg="login success\nEmail:"+reqEmail+"\nPwd:"+reqPwd;
        var sess=req.session;
        sess.user_email=reqEmail;
        sess.username=data.username;
        console.log('set session : '+sess);
        res.send(data);
      }
    })
  .catch(function(err){
    var msg='login failed\n'+err;
    console.log(msg);
    res.send(msg);
  })
})

router.get('/logout',function(req,res,next){
  delete req.session;
  res.send('logout');
})

router.post('/signup',async(req, res, next) =>{
  
  const { email, nickName, password} = req.body;
  if (! email || ! password || ! nickName) {
    var msg='signup failed:empty value(s)' 
    res.send(msg);
    return;
  }
  try{
    const same_email=userModel.findOne({where:{user_email:email}})
    if(same_email.user_email!=null || same_email.user_email !=undefined){
      var msgg='signup failed:same value(s) email'+same_email.user_email;
      res.send({msg:msgg});
      return;
    }
    const same_nickname=userModel.findOne({where:{nickname:nickName}})
    if(same_nickname.nickname!=null || same_nickname.nickname!=undefined) {
      var msgg='signup failed:same value(s) nickname'+same_nickname.nickname;
      res.send({msg:msgg});
      return;
    }if(same_nickname.nickname==null && same_email.user_email==null){
      const User = await userModel.create({
        nickname:nickName,
        user_email:email,
        user_pwd:password,
        marketing_aggree:false,
        SNS_register:'NVR'
      });
      res.send(User,{nickname:nickName,usre_email:email,user_pwd:password});
    }else {
      console.log("뭘까");
      res.send('뭐지모를 err 방지')
    }
  }catch(err){    
    var msg='____________________________\nsignup failed\n'+err;
    console.log(msg);
    res.send(msg);
  }
});

/* GET users listing. */


/*
router.get('/activities', authUtil.checkToken, userController.getActivity);
router.get('/search', authUtil.checkToken, userController.getIdSearch)
router.get('/search/history', authUtil.checkToken, userController.getRecentSearch);
router.delete('/search/:searchedId', authUtil.checkToken, userController.deleteRecentSearch);
router.get('/', userController.nicknameCheck);
router.post('/fb-token', authUtil.checkToken, userController.postToken);

*/ 

module.exports = router;
