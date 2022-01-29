module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  security: {
    secret: process.env.JWT || 'my-secret-example-gustavo',
    salt: process.env.SALT | 5
  }
}
