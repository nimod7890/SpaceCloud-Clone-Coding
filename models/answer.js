const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answer', {
    answer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'question',
        key: 'question_id'
      }
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    date: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    host_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'host',
        key: 'host_id'
      }
    }
  }, {
    sequelize,
    tableName: 'answer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "answer_id" },
          { name: "question_id" },
        ]
      },
      {
        name: "FK_Question_TO_Answer_1",
        using: "BTREE",
        fields: [
          { name: "question_id" },
        ]
      },
      {
        name: "FK_Host_TO_Answer_1",
        using: "BTREE",
        fields: [
          { name: "host_id" },
        ]
      },
    ]
  });
};
