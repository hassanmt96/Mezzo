# Mezzo

## What We Are

Mezzo is **the** destination for professional and undiscovered musicians, as well as music listeners to share their personal experiences with music and the industry. After signing up, users can create articles to share their expeiences with our easy-to-use form. Users can also comment on stories to share their thoughts, follow their favorite authors, and even show support by liking the articles! It is a clone of the popular site, Medium.

## Technologies Used

Mezzo's server is built on the popular framework, Express. We have a PostgreSQL database, which the server manages utilizing Sequelize. Our user sessions are handled using the npm package express-session, which easily allows us to authenticate users, log them out, and protect routes that we do not want guests to have access to, such as the full stories. Our front-end consists of Pug templates, hand-styled css, and javascript.

All of our HTML is generated with Pug templates. Our Pug templates are dynamic, and allow the user to tell at a glance if they have previously liked a story or followed another user. With AJAX requests, our users are able to like, follow, and even make comments, all without refreshing the webpage. These are post requests sent to specific API points that can update the database, and send back usable json for the javascript to use. This allows it to update the page in real time.

## Feature Showcase

Our team has worked very hard to craft this website. We started our coding journey just a few short months ago, and this is a culmination of all of our efforts to date.

As new programmers in our very first unguided group setting, it was a challenge to conceptualize how to build out all of these features. Working together introduced a whole new set of challenges, such as reviewing major features that we had little to no part in writing. We all learned how to properly integrate parts of each other's code, and make it work seamlessly. It was also very hard to tell how long all of these things would take, and how many features we would be able to integrate overall. This is by no means a finished product, and we are all passionate about continuing to add functionality, styling, and otherwise upgrading the app to showcase our skills.

There are quite a few code snippets that we are all very proud of working on. It was hard to narrow it down, but here are some highlights from the project.

### This code showcases our follow functionality. It is able to both create and destroy the follow instance based on whether the current user is already following the author or not.

```js
router.post(
	"/:id(\\d+)/follow",
	asyncHandler(async (req, res) => {
		const isFollowingId = req.params.id;

		// res.locals was great for getting user information,
		// and we used it extensively throughout the project.
		const userId = res.locals.user.id;

		let follow = await Follow.findOne({ where: { userId, isFollowingId } });
		// we had to parse the inputs here as the database would interpret them as strings
		if (parseInt(isFollowingId, 10) === parseInt(userId, 10))
			// check if the user is attempting to follow themselves
			res.json("same user try later");
		// If not follow exists in our database create a new one
		else if (!follow) {
			const newFollow = await Follow.create({
				isFollowingId,
				userId,
			});
			res.json("following");
		} else {
			// If the follow already exists, we need to destroy it to allow
			// the user to un-follow authors
			follow.destroy();
			res.json("unfollowed");
		}
	})
);
```
The follow functionality was particularly challenging and required a many-to-many relationship within the same table. It required a revamp of our associations, and took quite a while to get working fully.

### Here is a snippet of our likes API endpoint

```js
// Much like our follow functionality, this allows us to check if an article is already liked by a user
// We can create and destroy with this method, and the server will return a true/false value
// after taking the appropriate action. Very useful for our front-end
router.post(
	"/:id/like",
	asyncHandler(async (req, res) => {
		const story = await Story.findByPk(req.params.id, {
			include: [User, Like],
		});
		let isLiked = false;
		const storyId = req.params.id;
		const userId = res.locals.user.id;
		story.Likes.forEach((like) => {
			const { userId } = like;
			if (userId === res.locals.user.id) {
				isLiked = true;
			}
		});
		if (!isLiked) {
			await Like.create({ storyId, userId });
		} else {
			let likes = await Like.findOne({
				where: { storyId: req.params.id, userId: res.locals.user.id },
			});
			await likes.destroy();
		}
		// Simple true or false that allows the AJAX to update the button accordingly
		res.json(isLiked);
	})
);
```
This was a fun piece of code to design because once we wrapped our heads around how to implement it, we realized how easy we could make our lives by simplyfying the server response as much as possible. A challenge and a lesson, all in one!


### This is a snippet showing how we incorporated our styling into our comments AJAX

```js
const jsonRes = await res.json();
const comments = document.getElementById("comments");
let commentsHtml = [];
const returnedComments = Array.from(jsonRes);
returnedComments.forEach((comment) => {
    // By declaring our classes and id's below, we are able to programatically
    // generate these HTML elements with css styling pre-applied!
	let html = `
            <div id='comments'>
                <div class='comment'>
                    <p>${comment.comment}</p>
                    <p class='commentDate'>Posted ${comment.createdAt}</p>
                </div>
            </div>`;
	commentsHtml.push(html);
});
comments.innerHTML = "";
// This overwrites the current comment content, and replaces it with the updated, styled list.
comments.innerHTML = commentsHtml.join("");
```
The full version of the above AJAX function and the associated API endpoint took the better part of the day, and several people to even get it working! Once we figured out the syntax, it was a breeze to implement our existing styling on those created tags.


You can view details about all of this and more, on [our wiki](https://github.com/sal-wav/Mezzo/wiki)!

Last but not least, here is a link to [the live version of our app](https://mezzo-app.herokuapp.com/), hosted on Heroku.
