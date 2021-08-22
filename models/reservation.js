const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservation', {
    reserv_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ap_date: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    booker_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    requests: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'reservation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reserv_no" },
        ]
      },
      {
        name: "FK_User_TO_Reservation_1",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
