module.exports=function(app){
    var userModel = require('../models').user;

    var passport=require('passport'),
        LocalStrategy=require('passport-local').Strategy;
    
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser((User,done)=>{
      console.log('serializeUser:', User);
      done(null, User.dataValues.user_email);
    })
    passport.deserializeUser((id, done)=> {
      console.log('deserializeUser', id);
      done(null, userModel.findOne({where:{user_email:id}}));
    });
    
    passport.use(new LocalStrategy({ 
        usernameField:'email',
        passwordField:'password',
        session:true
      },
      (username,password,done)=>{
        console.log('LocalStrategy',username,password);
        userModel.findOne({where:{user_email:username}})
        .then(function(User){
          //email 틀렸을 때
          if(User==null||User==undefined){ 
            var msgg="login failed\nEmail:"+username;
            return done(null,false,{ message:msgg});
          }
          //password 틀렸을 때
          if(User.user_pwd!=password){
            var msgg="login failed\npwd:"+password+"found"+User.password;
            console.log(msgg);
            return done(null,false,{ message:msgg});
          }
          //맞으면
          else{
            console.log('login success');
            return done(null,User);
          }
        })
        .catch(function(err){
          var msg='login failed\n'+err;
          console.log(msg);
          return done(null,false,{ message:msg});
        })
      }
    ))
    return passport;
}