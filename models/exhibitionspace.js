const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exhibitionspace', {
    exh_space_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exh_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    space_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'exhibitionspace',
    timestamps: false
  });
};
