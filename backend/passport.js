module.exports=function(app){
    var userModel = require('../models').user;

    var passport=require('passport'),
        LocalStrategy=require('passport-local').Strategy;
    var KaKaoStrategy = require('passport-kakao').Strategy;

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
    ));

    passport.use(new KaKaoStrategy({
        clientID: 'c9025abd0eed1b4505a123953065ed56',
        clientSecret: "", // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
        callbackURL: "http://localhost:3000/users/Api/Member/Oauth2ClientCallback/kakao",
     },async (accessToken,refreshToken, profile, done) => {
        try {
          console.log('profile',profile._json.kakao_account.email)
          console.log('accessToken',accessToken);
          console.log('refreshToken',refreshToken);  
          const user = await userModel.findOne({ where:{user_email:profile._json.kakao_account.email }});
            if (user) {
            user.save();
            return done(null, user);
            } else {
            const newUser = await userModel.create({
                user_email:profile._json.kakao_account.email,
                nickname:profile.displayName,
                marketing_aggree : false,
                profile_pic: profile._json.profile_image,
                SNS_register:'KKO',
                user_pwd : profile.username+profile.id
            });
            return done(null, newUser);
            }
        } catch (error) {console.log(error);return done(error);}
    }));

    return passport;
}