const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('host', {
    host_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    host_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    host_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'host',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "host_id" },
        ]
      },
    ]
  });
};
