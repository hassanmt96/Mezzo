"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Stories",
			[
				{
					title: "A Story About Music",
					subtitle: "This writing is, indeed, about music, somehow.",
					content:
						"words words words words words words words words words words words words words words words words words words words words words words words words",
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
				{
					title: "Dance in the Refrain",
					subtitle: "How to Sing and Dance Simultaneously",
					content:
						`Have you ever wondered how broadway performers accomplish maintaining their breath while singing and dancing? Then this article is for you.
						One major difference between dance performers and vocal performers is the way they learn to breathe. Singers are trained to use their
						lower diaphragm. While, dancers, on the other hand, are trained to use their sternum. Many beginner dance performers are criticized for
						getting so caught up in learning choreography that they may forget to breathe entirely. It is a challenge for vocal coaches to train
						dancers to sing using their diaphram, as dancers tend to have very tight abdominal muscles and are often challenged to completely expand their
						diaphragm in order to sing. This can lead to a lot of tension in the dancer's voice when trying to sing. For any artist that is interested in
						accomplishing both tasks then I would recommend that artist to hire a vocal coach. `,
					authorId: 2,
					image:
						"https://media.giphy.com/media/Xxv5i52RNfnpxKim2Q/giphy.gif",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: "Get into the Groove, Elevate your Mood",
					subtitle: "Music for your Mental Health",
					content:
						`In this article, I will discuss the benefits that listening to music has for managing mental health. Research shows that when listening
						to music, cortisol levels in the blood decrease. Cortisol is the most well known stress hormone in the body. High levels of cortisol in
						the body have been know to affect every system within the body supplying an additional risk factor for chronic disease. Along with decreasing
						 cortisol levels, listening to music has also been know to help increase serotonin levels. Serotonin is a well-known mood regulator that is believed
						to contribute to the feeling of happiness. Music is not a treatment for mental health nor a substitute for prescribed medication for any
						diagnosis, however listening to music does help in maintaing mental health balance.`,
					authorId: 2,
					image:
						"https://media.giphy.com/media/H6ubTDWpYXEDJqYE4D/giphy.gif",
					createdAt: new Date(),
					updatedAt: new Date(),
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Stories", null, {});
	},
};
