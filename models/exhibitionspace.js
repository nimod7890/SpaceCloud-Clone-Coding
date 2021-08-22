const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exhibitionspace', {
    exh_space_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    exh_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'exhibition',
        key: 'exh_id'
      }
    },
    space_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'space',
        key: 'space_id'
      }
    }
  }, {
    sequelize,
    tableName: 'exhibitionspace',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "exh_space_id" },
        ]
      },
      {
        name: "FK_Exhibition_TO_exhibitionSpace_1",
        using: "BTREE",
        fields: [
          { name: "exh_id" },
        ]
      },
      {
        name: "FK_Space_TO_exhibitionSpace_1",
        using: "BTREE",
        fields: [
          { name: "space_id" },
        ]
      },
    ]
  });
};
