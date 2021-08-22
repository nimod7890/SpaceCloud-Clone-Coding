const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allocatedcoupon', {
    alloc_coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'coupon',
        key: 'coupon_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    regi_date: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dd_date: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    use_period: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Field: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'allocatedcoupon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alloc_coupon_id" },
          { name: "coupon_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "FK_Coupon_TO_AllocatedCoupon_1",
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
        ]
      },
      {
        name: "FK_User_TO_AllocatedCoupon_1",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
