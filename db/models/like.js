'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
		"Like",
		{
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			storyId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{}
	);
  Like.associate = function(models) {
    Like.belongsTo(models.User, {foreignKey: "userId"})
    Like.belongsTo(models.Story, {foreignKey: "storyId"})
  };
  return Like;
};
