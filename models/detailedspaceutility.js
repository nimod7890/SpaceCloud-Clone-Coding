const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detailedspaceutility', {
    detailed_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    utility_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "νΈμμμ€ id (COOK)"
    }
  }, {
    sequelize,
    tableName: 'detailedspaceutility',
    timestamps: false
  });
};
