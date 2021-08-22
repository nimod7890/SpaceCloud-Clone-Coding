const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoryspace', {
    category_space_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'category_id'
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
    tableName: 'categoryspace',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_space_id" },
        ]
      },
      {
        name: "FK_Category_TO_categorySpace_1",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "FK_Space_TO_categorySpace_1",
        using: "BTREE",
        fields: [
          { name: "space_id" },
        ]
      },
    ]
  });
};
