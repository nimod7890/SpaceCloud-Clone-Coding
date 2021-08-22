const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detailedspaceutility', {
    detailed_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'detailedspace',
        key: 'detailed_id'
      }
    },
    utility_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "편의시설 id (COOK)",
      references: {
        model: 'utility',
        key: 'utility_id'
      }
    }
  }, {
    sequelize,
    tableName: 'detailedspaceutility',
    timestamps: false,
    indexes: [
      {
        name: "FK_DetailedSpace_TO_DetailedSpaceUtility_1",
        using: "BTREE",
        fields: [
          { name: "detailed_id" },
        ]
      },
      {
        name: "FK_Utility_TO_DetailedSpaceUtility_1",
        using: "BTREE",
        fields: [
          { name: "utility_id" },
        ]
      },
    ]
  });
};
