const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/word': { page: '/word' },
      '/convnounadv': { page: '/convnounadv' },
      '/kana': { page: '/kana' },
    }
  },
  assetPrefix: !debug ? '/keyin/' : '',
}