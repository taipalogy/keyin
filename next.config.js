const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/word': { page: '/word' },
      '/replacive': { page: '/replacive' },
      '/kana': { page: '/kana' },
    }
  },
  assetPrefix: !debug ? '/keyin/' : '',
}