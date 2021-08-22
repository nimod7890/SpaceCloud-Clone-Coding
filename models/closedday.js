const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('closedday', {
    closedDay_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    closedDay: {
      type: DataTypes.STRING(5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'closedday',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "closedDay_id" },
        ]
      },
    ]
  });
};
