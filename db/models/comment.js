'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
		"Comment",
		{
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			storyId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			comment: {
				type: DataTypes.STRING(500),
				allowNull: false,
			},
		},
		{}
	);
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {foreignKey: "userId"})
    Comment.belongsTo(models.User, {foreignKey: "storyId"})
  };
  return Comment;
};
