const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detailedspace', {
    detailed_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    detailedDescription: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accommodation: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    detailed_price_std: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "detailed_price_standard를 의미"
    },
    additional_reserv_option: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    space_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'space',
        key: 'space_id'
      }
    },
    reserv_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "예약 번호",
      references: {
        model: 'reservation',
        key: 'reserv_no'
      }
    }
  }, {
    sequelize,
    tableName: 'detailedspace',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "detailed_id" },
        ]
      },
      {
        name: "FK_Space_TO_DetailedSpace_1",
        using: "BTREE",
        fields: [
          { name: "space_id" },
        ]
      },
      {
        name: "FK_Reservation_TO_DetailedSpace_1",
        using: "BTREE",
        fields: [
          { name: "reserv_no" },
        ]
      },
    ]
  });
};
