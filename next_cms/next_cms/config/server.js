module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b2d81f61df0cec2d6bdb2b5d8a7bd4d3'),
    },
  },
});
