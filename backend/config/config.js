module.exports = {

  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": "my_db_name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.CI_DB_USERNAME,
    "password": process.env.CI_DB_PASSWORD,
    "database": process.env.CI_DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.PROD_DB_USERNAME,
    "password": process.env.PROD_DB_PASSWORD,
    "database": process.env.PROD_DB_NAME,
    "host": process.env.PROD_DB_HOSTNAME,
    "dialect": "mysql"
  }

}