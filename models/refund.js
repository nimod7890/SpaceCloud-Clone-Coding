const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('refund', {
    space_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    d_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "이용 n일 전"
    },
    percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
      comment: "몇 퍼센트 환불할지"
    }
  }, {
    sequelize,
    tableName: 'refund',
    timestamps: false
  });
};
