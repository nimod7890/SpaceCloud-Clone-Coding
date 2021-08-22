const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('closeddayspace', {
    closed_space_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    closedDay_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'closeddayspace',
    timestamps: false
  });
};
