const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reply', {
    reply_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'review',
        key: 'review_id'
      }
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reply_id" },
          { name: "review_id" },
        ]
      },
      {
        name: "FK_Review_TO_Reply_1",
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
    ]
  });
};
