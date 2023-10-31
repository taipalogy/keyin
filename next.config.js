const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/word': { page: '/word' },
      '/transfixinflection': { page: '/transfixinflection' },
      '/suprafix': { page: '/suprafix' },
      '/phrasalverb': { page: '/phrasalverb' },
      '/surfaceform': { page: '/surfaceform' },
      '/eadjective': { page: '/eadjective' },
      '/chaining': { page: '/chaining' },
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
      '/orientation': { page: '/orientation' },
      '/inputmethod': { page: '/inputmethod' },
      '/multiwordinput': { page: '/multiwordinput' },
      '/rime': { page: '/rime' },
      '/alliteration': { page: '/alliteration' },
      '/toneless': { page: '/toneless' },
      '/inflection': { page: '/inflection' },
      '/candidate': { page: '/candidate' },
    };
  },
  // assetPrefix: !debug ? '/keyin/' : '',
};
