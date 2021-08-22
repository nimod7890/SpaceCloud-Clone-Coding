const message = require('../mode/responseMessage');
const code = require('../mode/statusCode');
const user = require('../../models').user;
const upload = require('../mode/multer');
var express = require('express');
var router = express.Router();


const isEmailNicknameExist = async (nickname) => {

  try {
      const alreadyNickname = await user.findOne({
        where : { nickname}
      });
      if (alreadyNickname) {
          return message.ALREADY_NICKNAME;
      }
      return null;
  }catch (err) {
    console.log(err);
  }
};

const getImageUrl= async (file) => {
  try {
      if (file) {
          const image = file.location;
          return image;
      }
      return null;
  } catch (err) {
      console.log(err);
  }
}


router.post('/signup', upload.single('image'), async(req, res, next) =>{
  const { email, nickname, password} = req.body;
  if (! email || ! password || ! nickname) {
      res.status(code.BAD_REQUEST).send('Failed');
  }

  try {
    const paramsExist = await isEmailNicknameExist(nickname);
    if ( paramsExist ) {
        res.send(paramsExist);
    }
    //const image = await getImageUrl(req.body.file);
      
    const User = await user.create({
        user_email:email,
        user_pwd:password,
        nickname:nickname,
        marketing_aggree:false,
        SNS_register:'NVR'
    });

    res.send(User,{id : user.id, email : user.email, nickname : user.nickname});
    
  }catch (err) {
    console.log(err);
    next(err);
  }
  
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*

router.post('/signup', upload.single('image'), userController.signup);
router.post('/signin', userController.signin);
router.get('/activities', authUtil.checkToken, userController.getActivity);
router.get('/search', authUtil.checkToken, userController.getIdSearch)
router.get('/search/history', authUtil.checkToken, userController.getRecentSearch);
router.delete('/search/:searchedId', authUtil.checkToken, userController.deleteRecentSearch);
router.get('/', userController.nicknameCheck);
router.post('/fb-token', authUtil.checkToken, userController.postToken);
// 푸시 알람 테스트 코드
router.post('/push-send', authUtil.checkToken, userController.sendPush);

*/ 

module.exports = router;
