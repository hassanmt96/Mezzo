"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			firstName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(100),
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
			},
		},
		{}
	);
	User.associate = function (models) {
		User.hasMany(models.Follow, {
			as: "user",
			foreignKey: "userId",
			onDelete: "cascade",
			hooks: true,
		});
		User.hasMany(models.Follow, {
			as: "followed",
			foreignKey: "isFollowingId",
			onDelete: "cascade",
			hooks: true,
		});
		User.hasMany(models.Story, {
			foreignKey: "authorId",
			onDelete: "cascade",
			hooks: true,
		});
		User.hasMany(models.Like, {
			foreignKey: "userId",
			onDelete: "cascade",
			hooks: true,
		});
		User.hasMany(models.Comment, {
			foreignKey: "userId",
			onDelete: "cascade",
			hooks: true,
		});
	};
	return User;
};
