"use strict";
module.exports = (sequelize, DataTypes) => {
	const Follow = sequelize.define(
		"Follow",
		{
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			isFollowingId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{}
	);
	Follow.associate = function (models) {
		Follow.belongsTo(models.User, { foreignKey: "isFollowingId" });
		Follow.belongsTo(models.User, { foreignKey: "userId" });
	};
	return Follow;
};
