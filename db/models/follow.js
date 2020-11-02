"use strict";
module.exports = (sequelize, DataTypes) => {
	const Follow = sequelize.define(
		"Follow",
		{
			followingId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			followerId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{}
	);
	Follow.associate = function (models) {
		Follow.belongsTo(models.User, { foreignKey: "followerId" });
		Follow.belongsTo(models.User, { foreignKey: "followingId" });
	};
	return Follow;
};
