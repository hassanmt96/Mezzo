"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Stories",
			[
				{
					title: "Is piano a percussion instrument?",
					subtitle: "The answer is yes ... maybe",
					content:
						"This question has been nagging ever since my elementary music teacher introduced instrument families to me. People love to put the piano in a class of their own, but let's be real. It's a percussion instrument. You hit it! You're using your fingers in a percussive way to play the instrument. Think about kalimbas or hand drums (especially a hang drum). Some people may want to argue it's a string instrument, but that one is easy to dispute. The (conventional) player doesn't touch the strings. Any other string player (guitarist, violinist, harpist) is actively manipulating the strings on their instrument. That's all I had to say. The piano is a percussion instrument. Don't fight in the comments.",
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
				{
					title: "How would you use 'On Green Dolphin Street' for high school jazz band?",
					subtitle: "My thoughts on Bill Evans' recording, and what I would point out to students",
					content:
					"Bill Evans is one of my favorite jazz musicians. His recording of “On Green Dolphin Street” is intimate and beautiful, much like his other recordings. He states the melody then adds rhythmic variation. It’s done in such a lovely way that isn’t uncomfortable or hard to hear. Of course, I enjoy other recordings of this tune, but it’s very to easy to become too busy. He masterfully explores the tune while staying within the feel he has established. It would be interesting to use this recording to discuss voicing with a student. On chordal instruments it in imperative to intentionally bring out the notes that you think are important. In a jazz context, this may not be the melody. I would ask students what notes they are more drawn to. Is it more interesting to hear the head then hear the melody restated with the stress on a blue note? Is it more enjoyable to keep the emphasis on the melody, while keeping interesting harmonies underneath? There’s no right answer, but intention is important. This recording also has a great example of sensitive drumming. Young drummers do tend to be aggressive. Students can work on brush technique, and listen to the melodic solo. The drum solo is planted in rhythmic motives and the use of color created by the brushes, different strokes, and the contrast of textures (brushes on snare, cymbal, bass drum). Space is really important in this solo, and music in general. Other recordings of 'Green Dolpin Street' to check out are by: Miles Davis, Milt Jackson,  ",
					authorId: 2,
					image:
						"https://lh3.googleusercontent.com/proxy/WOJ1C0cBW0xV7UKkLABgLKSnbDeNfe54J2ggQyQo4FlUpvpSzPhjoSLXY9JQgeg87mXoOVu1J86ic5xm3UzUYRl1brGVZAW0lCwOobkgfvIiaXkc4-Cqb6xS_tAeMyLCSzGywVo",
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
						`In this article, I will discuss the benefits that listening to music has for managing mental health. Research shows that listening
						to music decreases cortisol levels in the blood. Cortisol is the most well known stress hormone in the body. High levels of cortisol in
						the blood stream have been known to affect every system within the body supplying an additional risk factor for chronic disease. Along with decreasing
						 cortisol levels, listening to music has also been known to help increase serotonin levels. Serotonin is a well-known mood regulator hormone that is believed
						to contribute to the feeling of happiness and decreased episodes of depression. Music is not a treatment for mental health nor a substitute for prescribed medication for any
						health or mental health diagnosis, however listening to music does help in maintaining mental health balance.`,
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
