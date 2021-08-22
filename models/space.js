const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('space', {
    space_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    space_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    space_description: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    space_intro: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pay_standard: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    space_image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    work_start: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    work_end: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 24
    },
    facility_intro: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    notice: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    host_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    closed_space_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'space',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "space_id" },
        ]
      },
    ]
  });
};
