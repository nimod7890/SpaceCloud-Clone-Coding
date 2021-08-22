const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(30),
      allowNull: false
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
    tableName: 'question',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "question_id" },
        ]
      },
      {
        name: "FK_User_TO_Question_1",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK_Space_TO_Question_1",
        using: "BTREE",
        fields: [
          { name: "space_id" },
        ]
      },
    ]
  });
};
