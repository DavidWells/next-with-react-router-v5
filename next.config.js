module.exports = {
  target: 'serverless',
  poweredByHeader: false,
  env: {
    SITE_NAME: 'foo',
  },
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};
