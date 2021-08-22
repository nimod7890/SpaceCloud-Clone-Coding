const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    profile_pic: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    user_phone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SNS_sync: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SNS_register: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    marketing_aggree: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    user_pwd: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
