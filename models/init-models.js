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

  coupon.belongsToMany(user, { as: 'user_id_users', through: allocatedcoupon, foreignKey: "coupon_id", otherKey: "user_id" });
  space.belongsToMany(user, { as: 'user_id_user_zzims', through: zzim, foreignKey: "space_id", otherKey: "user_id" });
  user.belongsToMany(coupon, { as: 'coupon_id_coupons', through: allocatedcoupon, foreignKey: "user_id", otherKey: "coupon_id" });
  user.belongsToMany(space, { as: 'space_id_spaces', through: zzim, foreignKey: "user_id", otherKey: "space_id" });
  categoryspace.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(categoryspace, { as: "categoryspaces", foreignKey: "category_id"});
  closeddayspace.belongsTo(closedday, { as: "closedDay", foreignKey: "closedDay_id"});
  closedday.hasMany(closeddayspace, { as: "closeddayspaces", foreignKey: "closedDay_id"});
  space.belongsTo(closeddayspace, { as: "closed_space", foreignKey: "closed_space_id"});
  closeddayspace.hasMany(space, { as: "spaces", foreignKey: "closed_space_id"});
  allocatedcoupon.belongsTo(coupon, { as: "coupon", foreignKey: "coupon_id"});
  coupon.hasMany(allocatedcoupon, { as: "allocatedcoupons", foreignKey: "coupon_id"});
  detailedspaceutility.belongsTo(detailedspace, { as: "detailed", foreignKey: "detailed_id"});
  detailedspace.hasMany(detailedspaceutility, { as: "detailedspaceutilities", foreignKey: "detailed_id"});
  exhibitionspace.belongsTo(exhibition, { as: "exh", foreignKey: "exh_id"});
  exhibition.hasMany(exhibitionspace, { as: "exhibitionspaces", foreignKey: "exh_id"});
  answer.belongsTo(host, { as: "host", foreignKey: "host_id"});
  host.hasMany(answer, { as: "answers", foreignKey: "host_id"});
  space.belongsTo(host, { as: "host", foreignKey: "host_id"});
  host.hasMany(space, { as: "spaces", foreignKey: "host_id"});
  answer.belongsTo(question, { as: "question", foreignKey: "question_id"});
  question.hasMany(answer, { as: "answers", foreignKey: "question_id"});
  detailedspace.belongsTo(reservation, { as: "reserv_no_reservation", foreignKey: "reserv_no"});
  reservation.hasMany(detailedspace, { as: "detailedspaces", foreignKey: "reserv_no"});
  reply.belongsTo(review, { as: "review", foreignKey: "review_id"});
  review.hasMany(reply, { as: "replies", foreignKey: "review_id"});
  categoryspace.belongsTo(space, { as: "space", foreignKey: "space_id"});
  space.hasMany(categoryspace, { as: "categoryspaces", foreignKey: "space_id"});
  detailedspace.belongsTo(space, { as: "space", foreignKey: "space_id"});
  space.hasMany(detailedspace, { as: "detailedspaces", foreignKey: "space_id"});
  exhibitionspace.belongsTo(space, { as: "space", foreignKey: "space_id"});
  space.hasMany(exhibitionspace, { as: "exhibitionspaces", foreignKey: "space_id"});
  question.belongsTo(space, { as: "space", foreignKey: "space_id"});
  space.hasMany(question, { as: "questions", foreignKey: "space_id"});
  refund.belongsTo(space, { as: "space", foreignKey: "space_id"});
  space.hasOne(refund, { as: "refund", foreignKey: "space_id"});
  review.belongsTo(space, { as: "space", foreignKey: "space_id"});
  space.hasMany(review, { as: "reviews", foreignKey: "space_id"});
  zzim.belongsTo(space, { as: "space", foreignKey: "space_id"});
  space.hasMany(zzim, { as: "zzims", foreignKey: "space_id"});
  allocatedcoupon.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(allocatedcoupon, { as: "allocatedcoupons", foreignKey: "user_id"});
  question.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(question, { as: "questions", foreignKey: "user_id"});
  reservation.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(reservation, { as: "reservations", foreignKey: "user_id"});
  review.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(review, { as: "reviews", foreignKey: "user_id"});
  zzim.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(zzim, { as: "zzims", foreignKey: "user_id"});
  detailedspaceutility.belongsTo(utility, { as: "utility", foreignKey: "utility_id"});
  utility.hasMany(detailedspaceutility, { as: "detailedspaceutilities", foreignKey: "utility_id"});

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
