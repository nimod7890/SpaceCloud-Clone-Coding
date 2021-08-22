const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exhibition', {
    exh_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    exh_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    exh_description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    banner_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'exhibition',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "exh_id" },
        ]
      },
    ]
  });
};
