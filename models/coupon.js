const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coupon', {
    coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    coupon_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    effect: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    discount_rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discount_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    coupon_condition: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'coupon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
        ]
      },
    ]
  });
};
