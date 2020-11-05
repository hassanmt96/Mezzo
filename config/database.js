const { username, password, database, host } = require("./index").db;
module.exports = {
	development: {
		username,
		password,
		database,
		host,
		dialect: "postgres",
	},
	production: {
		use_env_variable: 'DATABASE_URL',
		dialect: 'postgres',
		seederStorage: 'sequelize',
	}
};

// {
//   "development": {
//     "username": "mezzo_app",
//     "password": "86kRVBVnx92Fn5wG",
//     "database": "enrollment_development",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "seederStorage": "sequelize"
//   },
//   "test": {
//     "username": "enrollment_app",
//     "password": "86kRVBVnx92Fn5wG",
//     "database": "enrollment_test",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "seederStorage": "sequelize",
//     "logging": false
//   },
//   "production": {
//     "username": "enrollment_app",
//     "password": "86kRVBVnx92Fn5wG",
//     "database": "enrollment_production",
//     "host": "127.0.0.1",
//     "dialect": "postgres",
//     "seederStorage": "sequelize"
//   }
// }
