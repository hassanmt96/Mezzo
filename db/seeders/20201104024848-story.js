"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Stories",
			[
				{
					title: "",
					subtitle: "",
					content:
						"",
					authorId: 2,
					image:
						"https://cdn11.bigcommerce.com/s-8wy6p2/images/stencil/1500x1000/uploaded_images/article.png?t=1575561837",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Why the Trumpet is the World's Greatest Instrument",
					subtitle: "The answer may suprise you!",
					content:
					"The trumpet has made it's mark on culture for thousands of years. It has been used to send signals and warnings in early civilization, to herald Royalty in medieval times, and it even features heavily in the Book of Revelations. Like all genius ideas, it has endured the test of time. It has taken many forms over the years, from ancient animal horns used by vikings, to the Buisine, to the addition valves, to it's modern day look pictured above. It takes a high level of skill and breath control to utilize properly. Each potential fingering combination can produce 9 different notes! Only the musician's breath control and embouchure can ensure that the proper tone is played; and that it sounds crisp, clear, and at the appropriate volume. As a result, only the most disciplined students can claim that they have truly mastered the art of playing it. Some say that this causes trumpet players to develop a bit of an 'Ego'. This author disagrees.",
					authorId: 2,
					image:
						"https://abeautifultrenchitwas.com/wp-content/uploads/trumpet-perspective.jpg",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Stories", null, {});
	},
};
