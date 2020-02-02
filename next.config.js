const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/word': { page: '/word' },
      '/replacive': { page: '/replacive' },
      '/additive': { page: '/additive' },
      '/phrasalverb': { page: '/phrasalverb' },
      '/surfaceform': { page: '/surfaceform' },
      '/eadjective': { page: '/eadjective' },
      '/kana': { page: '/kana' },
    }
  },
  assetPrefix: !debug ? '/keyin/' : '',
}