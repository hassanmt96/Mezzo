const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const { sessionSecret } = require("./config/index");
const { loginUser, restoreUser } = require("./auth");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { sequelize }  = require('./db/models');
const store = new SequelizeStore({
	db: sequelize,
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const storyRouter = require('./routes/stories')
const searchRouter = require('./routes/search');

const app = express();

// view engine setup
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
// console.log(sessionSecret)
app.use(
	session({
		name: "mezzo.sid",
    secret: sessionSecret,
    // TELL IT where to store it
	store,
	// cookie: {maxAge: 9000 },
		// secret: 'sessionSecret',
		resave: false,
		saveUninitialized: false,
	})
);
store.sync();
app.use(restoreUser);
// app.use(loginUser);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/stories", storyRouter);
app.use("/", searchRouter);
// app.use("/stories/likes", likesRouter)

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
	const err = new Error("The requested page couldn't be found.");
	err.status = 404;
	next(err);
  });

// Error handler to log errors.
app.use((err, req, res, next) => {
	if (process.env.NODE_ENV === "production") {
	  // TODO Log the error to the database.
	} else {
	  console.error(err);
	}
	next(err);
  });


// Error handler for 404 errors.
app.use((err, req, res, next) => {
	if (err.status === 404) {
	  res.status(404);
	  res.render("notfound", {
		title: "Page Not Found",
	  });
	} else {
	  next(err);
	}
  });



// BASIC ERROR HANDLER
app.use((err, req, res, next) => {
	res.status(err.status || 500);
	const isProduction = process.env.NODE_ENV === "production";
	res.render("error", {
	  title: "Server Error",
	  message: isProduction ? null : err.message,
	  stack: isProduction ? null : err.stack,
	});
  });
module.exports = app;
