const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review', {
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
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
    tableName: 'review',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
      {
        name: "FK_User_TO_Review_1",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK_Space_TO_Review_1",
        using: "BTREE",
        fields: [
          { name: "space_id" },
        ]
      },
    ]
  });
};
