"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			firstName: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
			},
			lastName: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
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
    const followMapping = {
      through: "Follow",
      otherKey: "id",
      foreignKey: "followingId"
    }
    const followerMapping = {
      through: "Follow",
      otherKey: "id",
      foreignKey: "followerId"
    }
		User.hasMany(models.Follow, { as: "follower", followerMapping });
    User.hasMany(models.Follow, { as: "following", followMapping });
    User.hasMany(models.Story, {foreignKey: "authorId"})
    User.hasMany(models.Like, {foreignKey: "userId"})
    User.hasMany(models.Comment, {foreignKey: "userId"})
	};
	return User;
};
