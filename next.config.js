const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/kana': { page: '/kana' },
      '/lurzmafjiz': { page: '/lurzmafjiz' },
    }
  },
  assetPrefix: !debug ? '/keyin/' : '',
}