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
        callbackURL: "https://oauth.pstmn.io/v1/browser-callback",
     },async (accessToken,refreshToken, profile, done) => {
        console.log('accessToken',accessToken);
        console.log('refreshToken',refreshToken);
        const {
            id,
            username: name,
            _json: {
            properties: { profile_image },
            kakao_account: { email },
            },
        } = profile;
        console.log("profile",profile)
        try {
            const user = await userModel.findOne({ user_email:email });
            if (user) {
            user.kakaoId = id;
            user.save();
            return done(null, user);
            } else {
            const newUser = await User.create({
                user_email:email,
                nickname:name,
                kakaoId: id,
                profile_pic: profile_image,
                SNS_register:'KKO'
            });
            return done(null, newUser);
            }
        } catch (error) {return done(error);}
    }));

    return passport;
}