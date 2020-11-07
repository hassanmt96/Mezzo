"use strict";
const bcrypt = require('bcryptjs');

module.exports = {
	up: async(queryInterface, Sequelize) => {
		const hash = await bcrypt.hash('Password123!', 10);
		const hashTwo = await bcrypt.hash('Password456!', 10);
		return queryInterface.bulkInsert("Users", [
			{
				firstName: "Demo",
				lastName: "User",
				email: "demo@user.com",
				password: hash,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				firstName: "Jane",
				lastName: "Doe",
				email: "jane@doe.com",
				password: hashTwo,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};
