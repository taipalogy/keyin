const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/word': { page: '/word' },
      '/replacive': { page: '/replacive' },
      '/additive': { page: '/additive' },
      '/phrasalverb': { page: '/phrasalverb' },
      '/surfaceform': { page: '/surfaceform' },
      '/eadjective': { page: '/eadjective' },
      '/composition': { page: '/composition' },
      '/prediction': { page: '/prediction' },
      '/tonepattern': { page: '/tonepattern' },
      '/tonepatternwords': { page: '/tonepatternwords' },
      '/kana': { page: '/kana' },
      '/hint': { page: '/hint' },
      '/taikana': { page: '/taikana' },
      '/taizjitt': { page: '/taizjitt' },
      '/jittwtaix': { page: '/jittwtaix' },
      '/kuaxay': { page: '/kuaxay' },
      '/tokenizer': { page: '/tokenizer' },
      '/inputcells': { page: '/inputcells' },
      '/entries': { page: '/entries' },
      '/rubi': { page: '/rubi' },
    };
  },
  // assetPrefix: !debug ? '/keyin/' : '',
};
