module.exports = {}
module.exports = {
  async rewrites() {
    return [
      {
        source: '/abc',
        destination: '/404',
      },
      {
        source: '/invalidExtension',
        destination: '/404',
      },
    ];
  },
};
