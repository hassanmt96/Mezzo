"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Stories",
			[
				{
					title: "Composing For Household Objects",
					subtitle: "Combatting classicism and erasure in western classical music",
					content:
						"As a classical percussionist I’ve noticed how accessibility is perceived as novel or juvenile in academia. I’ve decided to start composing works for solo percussion using everyday objects (instead of the large, expensive gear students can use while they’re in university. After students graduate they often don’t have access to any instruments. This is my way of addressing classicism in classical percussion.) I set the music to text by writers of marginalized voices (to combat the erasure of nonwhite+nonman narratives in classical music). \n \n Salina Kuo is a Philadelphia-based person (settler of Lenape territory) interested in accessibility for music performance + music education. She opposes accessibility's \"novel\" reputation, and seeks to create nuanced, meaningful art from simplicity. She composes theatrical works for found objects, and releases pop music as St. John's Wort. \n \n She holds a B.M. in music education from Temple University. There she studied orchestral reportoire, jazz vibraphone, latin percussion, and drumset. She teaches elementary + middle school general music, private drumset + piano lessons, and volunteers with Girls Rock Philly. She recently performed at the Oh My Ears New Music Festival, Toronto Creative Music Lab, and Steve Weiss Mallet Festival.",
					authorId: 1,
					image:
						"https://cdn11.bigcommerce.com/s-8wy6p2/images/stencil/1500x1000/uploaded_images/article.png?t=1575561837",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Why the Trumpet is the World's Greatest Instrument",
					subtitle: "The answer may suprise you!",
					content:
						"words words words words words words words words words words words words words words words words words words words words words words words words",
					authorId: 1,
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
