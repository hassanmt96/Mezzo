## Mezzo
<!-- Brief explanation of what the app is and does
Link to live site
Link to wiki docs -->
Discussion of technologies used
Discussion of two features that show off the team's technical abilities
Discussion of both challenges faced and the way the team solved them
Code snippets to highlight the best code

### What We Are

Mezzo is **the** destination for musicians to share their personal experiences with music and the industry. After signing up, users can create articles to share their expeiences with our easy-to-use form. Users can also comment on stories to share their thoughts, follow their favorite authors, and even show support by liking the articles! It is a clone of the popular site, Medium.

### Technologies Used

Mezzo's server is built on the popular framework, Express. We have a PostgreSQL database, which the server manages utilizing Sequelize. Our user sessions are handled using the npm package express-session, which easily allows us to authenticate users, log them out, and protect routes that we do not want guests to have access to, such as the full stories. Our front-end consists of Pug templates, hand-styled css, and javascript.

All of our HTML is generated with Pug templates. Our Pug templates are dynamic, and allow the user to tell at a glance if they have previously liked a story or followed another user. With AJAX requests, our users are able to like, follow, and even make comments, all without refreshing the webpage. These are post requests sent to specific API points that can update the database, and send back usable json for the javascript to use. This allows it to update the page in real time.


You can view details about all of this and more, on [our wiki](https://github.com/sal-wav/Mezzo/wiki)!

Last but not least, here is a link to [the live version of our app](https://mezzo-app.herokuapp.com/), hosted on Heroku.
