const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('allocatedcoupon', {
    alloc_coupon_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
        ]
      },
    ]
  });
};
