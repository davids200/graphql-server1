require('dotenv').config();

module.exports = {
  development: {
    username: 'elitetools_nextjs',
    password: 'i#fv0P5CC%kY',
    database: 'elitetools_nextjs',
    host: 'elitetools.org',
    dialect: 'mysql',
   // use_env_variable: 'DEV_DATABASE_URL',
  },
  test: {
    username: 'elitetools_nextjs',
    password: 'i#fv0P5CC%kY',
    database: 'elitetools_nextjs',
    host: 'elitetools.org',
    dialect: 'mysql',
   // use_env_variable: 'TEST_DATABASE_URL',
  },
  production: {
    username: 'elitetools_nextjs',
    password: 'i#fv0P5CC%kY',
    database: 'elitetools_nextjs',
    host: 'elitetools.org',
    dialect: 'mysql',
  //  use_env_variable: 'DATABASE_URL',
  },
};

