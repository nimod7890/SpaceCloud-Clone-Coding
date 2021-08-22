const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('closeddayspace', {
    closed_space_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    closedDay_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'closedday',
        key: 'closedDay_id'
      }
    }
  }, {
    sequelize,
    tableName: 'closeddayspace',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "closed_space_id" },
        ]
      },
      {
        name: "FK_ClosedDay_TO_closedDaySpace_1",
        using: "BTREE",
        fields: [
          { name: "closedDay_id" },
        ]
      },
    ]
  });
};
