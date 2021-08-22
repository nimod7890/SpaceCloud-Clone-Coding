var DataTypes = require("sequelize").DataTypes;
var _allocatedcoupon = require("./allocatedcoupon");
var _answer = require("./answer");
var _category = require("./category");
var _categoryspace = require("./categoryspace");
var _closedday = require("./closedday");
var _closeddayspace = require("./closeddayspace");
var _coupon = require("./coupon");
var _detailedspace = require("./detailedspace");
var _detailedspaceutility = require("./detailedspaceutility");
var _exhibition = require("./exhibition");
var _exhibitionspace = require("./exhibitionspace");
var _help = require("./help");
var _host = require("./host");
var _notice = require("./notice");
var _question = require("./question");
var _refund = require("./refund");
var _reply = require("./reply");
var _reservation = require("./reservation");
var _review = require("./review");
var _space = require("./space");
var _user = require("./user");
var _utility = require("./utility");
var _zzim = require("./zzim");

function initModels(sequelize) {
  var allocatedcoupon = _allocatedcoupon(sequelize, DataTypes);
  var answer = _answer(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var categoryspace = _categoryspace(sequelize, DataTypes);
  var closedday = _closedday(sequelize, DataTypes);
  var closeddayspace = _closeddayspace(sequelize, DataTypes);
  var coupon = _coupon(sequelize, DataTypes);
  var detailedspace = _detailedspace(sequelize, DataTypes);
  var detailedspaceutility = _detailedspaceutility(sequelize, DataTypes);
  var exhibition = _exhibition(sequelize, DataTypes);
  var exhibitionspace = _exhibitionspace(sequelize, DataTypes);
  var help = _help(sequelize, DataTypes);
  var host = _host(sequelize, DataTypes);
  var notice = _notice(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var refund = _refund(sequelize, DataTypes);
  var reply = _reply(sequelize, DataTypes);
  var reservation = _reservation(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var space = _space(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var utility = _utility(sequelize, DataTypes);
  var zzim = _zzim(sequelize, DataTypes);


  return {
    allocatedcoupon,
    answer,
    category,
    categoryspace,
    closedday,
    closeddayspace,
    coupon,
    detailedspace,
    detailedspaceutility,
    exhibition,
    exhibitionspace,
    help,
    host,
    notice,
    question,
    refund,
    reply,
    reservation,
    review,
    space,
    user,
    utility,
    zzim,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
