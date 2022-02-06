module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  security: {
    secret: process.env.JWT || 'my-secret-example-gustavo',
    salt: process.env.SALT | 5
  },
  db: {
    mysql : {
      host: process.env.MYSQL_HOST || '127.0.0.1',
      port: process.env.MYSQL_PORT || 6603,
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'mysqllocalnew',
      database: process.env.MYSQL_DATABASE || 'socialapp'
    }
  },
  mysqlService: {
    host: process.env.MYSQL_SERVICE_HOST || 'http://localhost',
    port: process.env.MYSQL_SERVICE_PORT || 3001,
  },
  post: {
    port: process.env.POST_SERVICE_PORT || 3002,
  },
  cacheService: {
    host: process.env.CACHE_SERVICE_HOST || 'http://localhost',
    port: process.env.CACHE_SERVICE_PORT || 3003,
  },
}
