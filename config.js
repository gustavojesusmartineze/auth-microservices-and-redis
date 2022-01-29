module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  security: {
    secret: 'my-secret-example-gustavo',
    salt: 5
  }
}
