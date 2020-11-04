'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
		"Story",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			subtitle: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			authorId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: { model: 'Users' }
			},
			image: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
		},
		{}
	);
  Story.associate = function(models) {
    Story.belongsTo(models.User, {foreignKey: "authorId"})
    Story.hasMany(models.Like, {foreignKey: "storyId"})
    Story.hasMany(models.Comment, {foreignKey: "storyId"})
  };
  return Story;
};
