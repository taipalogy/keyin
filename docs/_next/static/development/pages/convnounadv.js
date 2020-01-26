(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/convnounadv.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fconvnounadv&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fconvnounadv.tsx!./":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fconvnounadv&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fconvnounadv.tsx ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/convnounadv", function() {
      var mod = __webpack_require__(/*! ./pages/convnounadv.tsx */ "./pages/convnounadv.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/convnounadv.tsx */ "./pages/convnounadv.tsx", function() {
          if(!next.router.components["/convnounadv"]) return
          var updatedPage = __webpack_require__(/*! ./pages/convnounadv.tsx */ "./pages/convnounadv.tsx")
          next.router.update("/convnounadv", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/taipa/lib/analyzer.js":
/*!********************************************!*\
  !*** ./node_modules/taipa/lib/analyzer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Analyzer {
}
exports.Analyzer = Analyzer;
//# sourceMappingURL=analyzer.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/character.js":
/*!*********************************************!*\
  !*** ./node_modules/taipa/lib/character.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(s) {
        this.character = s;
    }
}
exports.Character = Character;
class Characters {
    constructor() {
        this.carr = [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
        ];
        this.o = new Map();
        for (let e of this.carr) {
            this.assign(e);
        }
    }
    assign(e) {
        this.o.set(e, new Character(e));
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return new Character('');
    }
    get size() {
        return this.o.size;
    }
}
exports.characters = new Characters();
//# sourceMappingURL=character.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/client.js":
/*!******************************************!*\
  !*** ./node_modules/taipa/lib/client.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = __webpack_require__(/*! ./tonal/init */ "./node_modules/taipa/lib/tonal/init.js");
const analyzer_1 = __webpack_require__(/*! ./tonal/analyzer */ "./node_modules/taipa/lib/tonal/analyzer.js");
const init_2 = __webpack_require__(/*! ./kana/init */ "./node_modules/taipa/lib/kana/init.js");
const analyzer_2 = __webpack_require__(/*! ./kana/analyzer */ "./node_modules/taipa/lib/kana/analyzer.js");
const parser_1 = __webpack_require__(/*! ./dparser/parser */ "./node_modules/taipa/lib/dparser/parser.js");
const tagger_1 = __webpack_require__(/*! ./dparser/tagger */ "./node_modules/taipa/lib/dparser/tagger.js");
const document_1 = __webpack_require__(/*! ./document */ "./node_modules/taipa/lib/document.js");
const token_1 = __webpack_require__(/*! ./token */ "./node_modules/taipa/lib/token.js");
const lemmatizer_1 = __webpack_require__(/*! ./lemmatizer */ "./node_modules/taipa/lib/lemmatizer.js");
class Client {
    processKana(str) {
        init_2.checkLetterSizeKana();
        // kana
        let ta = new token_1.TokenAnalysis();
        if (str) {
            const ka = new analyzer_2.KanaAnalyzer();
            const morphemes = ka.morphAnalyze(str);
            ta.blockSequences = init_2.getKanaBlocks(morphemes);
            for (let m of morphemes) {
                ta.soundSequences.push(m.sounds);
            }
        }
        return ta;
    }
    processTonal(str) {
        init_1.checkLetterSizeTonal();
        // tonal lurzmafjiz
        let ta = new token_1.TokenAnalysis();
        if (str) {
            const tla = new analyzer_1.TonalLemmatizationAnalyzer();
            const morphemes = tla.morphAnalyze(str);
            const lexeme = tla.lexAnalyze(morphemes);
            ta.word = lexeme.word;
            ta.lemmata = lexeme.getLemmata();
            ta.inflectionalEnding = lexeme.getInflectionalEnding();
            for (let m of morphemes) {
                ta.soundSequences.push(m.sounds);
            }
        }
        return ta;
    }
    process(str) {
        let doc = new document_1.Document();
        // tokenization
        if (str) {
            const tokens = str.match(/\w+/g);
            if (tokens)
                for (let i = 0; i < tokens.length; i++) {
                    if (tokens[i].length)
                        doc.tokens.push(new token_1.Token(tokens[i]));
                }
            // tagging
            const tggr = new tagger_1.RuleBasedTagger();
            doc = tggr.tag(doc);
            // lemmatization
            const lmtzr = new lemmatizer_1.Lemmatizer();
            doc = lmtzr.getTonalLemmas(doc);
            // dependency parsing
            const dpsr = new parser_1.DependencyParser();
            doc = dpsr.parse(doc);
        }
        return doc;
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/document.js":
/*!********************************************!*\
  !*** ./node_modules/taipa/lib/document.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Document {
    constructor() {
        this.relations = new Array(); // dependency
        this.speeches = new Array();
        this.tokens = new Array();
    }
}
exports.Document = Document;
//# sourceMappingURL=document.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/analyzer.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/analyzer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
const analyzer_1 = __webpack_require__(/*! ../analyzer */ "./node_modules/taipa/lib/analyzer.js");
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/dparser/morpheme.js");
const version2_1 = __webpack_require__(/*! ../tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const lexeme_1 = __webpack_require__(/*! ./lexeme */ "./node_modules/taipa/lib/dparser/lexeme.js");
const keywords_1 = __webpack_require__(/*! ./keywords */ "./node_modules/taipa/lib/dparser/keywords.js");
const phraseme_1 = __webpack_require__(/*! ./phraseme */ "./node_modules/taipa/lib/dparser/phraseme.js");
//------------------------------------------------------------------------------
class TonalInflectionAnalyzer extends analyzer_1.Analyzer {
    graphAnalyze(str) {
        // graphemic analysis
        const gm = new grapheme_1.GraphemeMaker(version2_1.lowerLettersOfTonal);
        return gm.makeGraphemes(str);
    }
    morphAnalyze(x, tcm) {
        // morphological analysis
        let graphemes = [];
        if (typeof x == 'object') {
            graphemes = x;
        }
        else if (typeof x == 'string') {
            graphemes = this.graphAnalyze(x);
        }
        const mm = new morpheme_1.TonalCombiningMorphemeMaker(tcm);
        return mm.makeMorphemes(graphemes);
    }
    lexAnalyze(ms, tim) {
        // lexical analysis
        let morphemes = ms;
        const lm = new lexeme_1.TonalInflectionLexemeMaker(tim);
        return lm.makeLexemes(morphemes);
    }
    analyze(str, tcm, tim) {
        const lm = new lexeme_1.TonalInflectionLexemeMaker(tim);
        return lm.makeLexemes(this.morphAnalyze(str, tcm));
    }
}
exports.TonalInflectionAnalyzer = TonalInflectionAnalyzer;
class PhrasalInflectionAnalyzer {
    constructor() {
        this.tia = new TonalInflectionAnalyzer();
        this.p = new phraseme_1.TonalInflexionPhrasemeMaker();
    }
    analyzeTransitive(verb, particle) {
        const lexemeVerb = this.tia.analyze(verb, new morpheme_1.TonalCombiningForms(), new lexeme_1.TonalDesinenceInflection());
        const lexemeParticle = this.tia.analyze(particle, new keywords_1.TonalZeroCombining(), new lexeme_1.TonalDesinenceInflection());
        return this.p.makeTransitivePhrasemes(lexemeVerb, lexemeParticle);
    }
    analyzeIntransitive(verb, particle) {
        const lexemeVerb = this.tia.analyze(verb, new keywords_1.TonalZeroCombining(), new lexeme_1.TonalDesinenceInflection());
        const lexemeParticle = this.tia.analyze(particle, new keywords_1.TonalZeroCombining(), new lexeme_1.TonalDesinenceInflection());
        return this.p.makeIntransitivePhrasemes(lexemeVerb, lexemeParticle);
    }
    analyzeAdjective(adjectivalNoun, e, metaplasm) {
        const lexemeAdjective = this.tia.analyze(adjectivalNoun, new keywords_1.TonalZeroCombining(), new lexeme_1.TonalDesinenceInflection());
        const lexemeE = this.tia.analyze(e, new morpheme_1.TonalCombiningForms(), new lexeme_1.TonalDesinenceInflection());
        return this.p.makeAdjectivePhrasemes(lexemeAdjective, lexemeE, metaplasm);
    }
}
exports.PhrasalInflectionAnalyzer = PhrasalInflectionAnalyzer;
//# sourceMappingURL=analyzer.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/configuration.js":
/*!*********************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/configuration.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Transition {
}
exports.Transition = Transition;
class Shift extends Transition {
    do(c) {
        let s = c.queue.shift();
        if (s != undefined) {
            c.stack.push(s);
        }
        return c;
    }
}
exports.Shift = Shift;
class RightArc extends Transition {
    do(c) {
        c.stack.pop();
        return c;
    }
}
exports.RightArc = RightArc;
class LeftArc extends Transition {
    do(c) {
        const top = c.stack.pop();
        c.stack.pop();
        if (top)
            c.stack.push(top);
        return c;
    }
}
exports.LeftArc = LeftArc;
class Configuration {
    constructor() {
        this.queue = new Array();
        this.stack = new Array();
        this.relations = new Array();
    }
    getGraph() {
        return this.relations;
    }
    isTerminalConfiguration() {
        if (this.queue.length > 0) {
            return false;
        }
        if (this.stack.length == 1 && this.queue.length == 0) {
            return true;
        }
        return false;
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/dictionary.js":
/*!******************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/dictionary.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// prettier-ignore
exports.dict_of_verbs = [
    'koannw',
    'pah',
];
// prettier-ignore
exports.dict_of_phrasal_verbs = [
    ['koannw', 'diurh'],
    ['longw', 'diurh'],
];
// prettier-ignore
exports.dict_of_seperate_vv_compounds = {
    siam: ['qoew'],
};
//# sourceMappingURL=dictionary.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/guide.js":
/*!*************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/guide.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(/*! ./configuration */ "./node_modules/taipa/lib/dparser/configuration.js");
const symbols_1 = __webpack_require__(/*! ./symbols */ "./node_modules/taipa/lib/dparser/symbols.js");
const token_1 = __webpack_require__(/*! ../token */ "./node_modules/taipa/lib/token.js");
class Guide {
    constructor() {
        this.transitions = new Array();
        this.s1 = new token_1.Token('');
        this.s2 = new token_1.Token('');
        this.b1 = new token_1.Token('');
        this.s1_b1_map = new Map()
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.PPV, new configuration_1.Shift())
            .set(symbols_1.Tagset.NPR + symbols_1.Tagset.VB, new configuration_1.Shift())
            .set(symbols_1.Tagset.NPR + symbols_1.Tagset.NPR, new configuration_1.Shift())
            .set(symbols_1.Tagset.APPR + symbols_1.Tagset.NPR, new configuration_1.Shift())
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.NPR, new configuration_1.Shift())
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.AUXN, new configuration_1.Shift())
            .set(symbols_1.Tagset.AUX + symbols_1.Tagset.VB, new configuration_1.Shift())
            .set(symbols_1.Tagset.PADV + symbols_1.Tagset.VB, new configuration_1.Shift())
            .set(symbols_1.Tagset.NPR + symbols_1.Tagset.PADV, new configuration_1.Shift())
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.APPR, new configuration_1.Shift())
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.PADV, new configuration_1.Shift())
            .set(symbols_1.Tagset.NPR + symbols_1.Tagset.AUX, new configuration_1.Shift())
            .set(symbols_1.Tagset.PPV + symbols_1.Tagset.AUXN, new configuration_1.RightArc())
            .set(symbols_1.Tagset.PPV + symbols_1.Tagset.NPR, new configuration_1.RightArc());
        this.s2_s1_map = new Map()
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.PPV, new configuration_1.RightArc())
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.AUXN, new configuration_1.RightArc())
            .set(symbols_1.Tagset.AUX + symbols_1.Tagset.VB, new configuration_1.LeftArc())
            .set(symbols_1.Tagset.PADV + symbols_1.Tagset.VB, new configuration_1.LeftArc())
            .set(symbols_1.Tagset.APPR + symbols_1.Tagset.NPR, new configuration_1.LeftArc())
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.VB, new configuration_1.RightArc())
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.NPR, new configuration_1.RightArc())
            .set(symbols_1.Tagset.NPR + symbols_1.Tagset.VB, new configuration_1.LeftArc());
    }
    isQueueEmpty(c) {
        if (c.queue.length === 0)
            return true;
        return false;
    }
    isStackEmpty(c) {
        if (c.stack.length === 2)
            return true;
        return false;
    }
    getNextTransition(c) {
        this.s1 = new token_1.Token('');
        if (c.stack.length > 0)
            this.s1 = c.stack[c.stack.length - 1];
        this.s2 = new token_1.Token('');
        if (c.stack.length > 1)
            this.s2 = c.stack[c.stack.length - 2];
        this.b1 = new token_1.Token('');
        if (c.queue.length > 0)
            this.b1 = c.queue[0];
        if (this.s1.tag != '' && this.b1.tag != '') {
            if (this.s1_b1_map.has(this.s1.tag + this.b1.tag)) {
                const tran = this.s1_b1_map.get(this.s1.tag + this.b1.tag);
                if (tran) {
                    this.transitions.push(tran);
                }
            }
        }
        else if (this.isQueueEmpty(c)) {
            if (this.s2_s1_map.has(this.s2.tag + this.s1.tag)) {
                const tran = this.s2_s1_map.get(this.s2.tag + this.s1.tag);
                if (tran) {
                    this.transitions.push(tran);
                }
            }
            else if (this.isStackEmpty(c)) {
                this.transitions.push(new configuration_1.RightArc());
            }
        }
        if (this.transitions.length == 0)
            return undefined;
        return this.transitions.shift();
    }
}
exports.Guide = Guide;
//# sourceMappingURL=guide.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/keywords.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/keywords.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = __webpack_require__(/*! ./symbols */ "./node_modules/taipa/lib/dparser/symbols.js");
const lexeme_1 = __webpack_require__(/*! ../lexeme */ "./node_modules/taipa/lib/lexeme.js");
const morpheme_1 = __webpack_require__(/*! ../morpheme */ "./node_modules/taipa/lib/morpheme.js");
class ConstructionElement {
    constructor() {
        this.surface = '';
        this.pos = '';
        this.tag = '';
    }
}
exports.ConstructionElement = ConstructionElement;
class TonalAdverbInflexion extends lexeme_1.TonalInflectingMetaplasm {
}
exports.TonalAdverbInflexion = TonalAdverbInflexion;
class TonalZeroInflexion extends lexeme_1.TonalInflectingMetaplasm {
}
exports.TonalZeroInflexion = TonalZeroInflexion;
class TonalZeroCombining extends morpheme_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        return [];
    }
}
exports.TonalZeroCombining = TonalZeroCombining;
/*
export class PhrasalVerbParticleDiurh extends TonalCombiningMetaplasm {
    apply(syllable: TonalSyllable, allomorph: Allomorph): Array<TonalSyllable> {
        if (allomorph) {
            if (allomorph instanceof AllomorphH) {
                let rets = [];
                let s: TonalSyllable = new TonalSyllable(syllable.letters);
                s.popLetter();
                s.pushLetter(lowerLettersOfTonal.get(TonalLetterTags.hh));
                s.pushLetter(lowerLettersOfTonal.get(TonalLetterTags.w));
                rets.push(new TonalSyllable(s.letters));
                return rets;
            }
        }
        return [];
    }
}
*/
class PersonalPronounSurface extends ConstructionElement {
    constructor(str) {
        super();
        this.surface = str;
        this.pos = symbols_1.POSTags.pronoun;
    }
}
exports.PersonalPronounSurface = PersonalPronounSurface;
class VerbSurface extends ConstructionElement {
    constructor(str) {
        super();
        this.surface = str;
        this.pos = symbols_1.POSTags.verb;
    }
}
exports.VerbSurface = VerbSurface;
class EncliticSurface extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.auxiliary;
        this.surface = str;
    }
}
exports.EncliticSurface = EncliticSurface;
class PronounSurface extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.pronoun;
        this.surface = str;
    }
}
exports.PronounSurface = PronounSurface;
class NounSurface extends ConstructionElement {
    constructor() {
        super();
        this.pos = symbols_1.POSTags.noun;
    }
}
class ParticleSurface extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.particle;
        this.surface = str;
    }
}
exports.ParticleSurface = ParticleSurface;
class PrepositionSurface extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.adposition;
        this.surface = str;
    }
}
exports.PrepositionSurface = PrepositionSurface;
class CaseMarker {
}
class AuxiliarySurface extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.auxiliary;
        this.surface = str;
    }
}
exports.AuxiliarySurface = AuxiliarySurface;
const objectFactory = function (name, str) {
    const set = new Set()
        .add(PronounSurface)
        .add(ParticleSurface)
        .add(AuxiliarySurface)
        .add(PersonalPronounSurface);
    const createInstance = function (c, str) {
        return new c(str);
    };
    if (set.has(name)) {
        return createInstance(name, str);
    }
};
class KeyWords {
    constructor() {
        this.keyElems = new Array();
        this.populateKeyElems();
    }
    getSurface(str) {
        for (let i in this.keyElems)
            if (this.keyElems[i].surface === str)
                return this.keyElems[i];
    }
    populateKeyElems() {
        this.keyElems = [
            objectFactory(PronounSurface, 'che'),
            objectFactory(PersonalPronounSurface, 'goa'),
            objectFactory(AuxiliarySurface, 'qaz'),
            objectFactory(ParticleSurface, 'long'),
            objectFactory(ParticleSurface, 'bew'),
        ];
    }
}
exports.KeyWords = KeyWords;
//# sourceMappingURL=keywords.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/lexeme.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/lexeme.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lexeme_1 = __webpack_require__(/*! ../lexeme */ "./node_modules/taipa/lib/lexeme.js");
const lexeme_2 = __webpack_require__(/*! ../tonal/lexeme */ "./node_modules/taipa/lib/tonal/lexeme.js");
const version2_1 = __webpack_require__(/*! ../tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const morpheme_1 = __webpack_require__(/*! ../tonal/morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
//------------------------------------------------------------------------------
class TonalDesinenceInflection extends lexeme_1.TonalInflectingMetaplasm {
    apply(ms) {
        if (ms.length > 0 && ms[ms.length - 1]) {
            const last = ms[ms.length - 1];
            const syls = last.getForms();
            let rets = [];
            if (syls) {
                for (let i in syls) {
                    let wd = new lexeme_2.TonalWord(ms.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
                    wd.popSyllable();
                    wd.pushSyllable(syls[i]);
                    rets.push(wd);
                }
            }
            return rets;
        }
        return [];
    }
}
exports.TonalDesinenceInflection = TonalDesinenceInflection;
//------------------------------------------------------------------------------
class TransfixInflection extends lexeme_1.TonalInflectingMetaplasm {
    apply(ms) {
        const rets = [];
        if (ms.length > 0) {
            const tw = new lexeme_2.TonalWord(ms.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
            for (let i = 0; i < ms.length; i++) {
                const form = ms[i].getForms()[0];
                if (form)
                    tw.replaceSyllable(i, form);
            }
            rets.push(tw);
        }
        return rets;
    }
}
exports.TransfixInflection = TransfixInflection;
//------------------------------------------------------------------------------
class RegressiveAssimilation extends lexeme_1.TonalInflectingMetaplasm {
    apply(ms) {
        let rets = [];
        let tw = new lexeme_2.TonalWord(ms.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
        if (ms.length > 1) {
            for (let i = 1; i < ms.length; i++) {
                if (ms[i].sounds[0].name === version2_1.TonalSoundTags.initial &&
                    (ms[i - 1].sounds[ms[i - 1].sounds.length - 2].toString() === version2_1.TonalLetterTags.t ||
                        ms[i - 1].sounds[ms[i - 1].sounds.length - 2].toString() === version2_1.TonalLetterTags.tt)) {
                    tw.replaceSyllable(i - 1, ms[i - 1].getSoundChangeForm(ms[i].sounds[0])[0]);
                }
                else {
                    const syls = ms[i - 1].getSoundChangeForm(ms[i].sounds[0]);
                    if (syls.length)
                        tw.replaceSyllable(i - 1, syls[0]);
                }
            }
        }
        rets.push(tw);
        return rets;
    }
}
exports.RegressiveAssimilation = RegressiveAssimilation;
//------------------------------------------------------------------------------
class TonalInflectionLexeme extends lexeme_1.Lexeme {
    constructor(ms, tim) {
        super();
        this.ms = ms;
        this.otherForms = new Array(); // inflected or assimilated forms
        this.word = new lexeme_2.TonalWord(ms.map(x => x.syllable));
        if (ms.length > 0) {
            if (ms[ms.length - 1].allomorph) {
                // tonal ending needs to be assigned to sandhi lexeme
                this.tonalSymbleEnding = this.assignTonalEnding(ms[ms.length - 1].allomorph);
            }
            else {
                this.tonalSymbleEnding = new lexeme_2.TonalSymbolEnding();
            }
        }
        else {
            this.tonalSymbleEnding = new lexeme_2.TonalSymbolEnding();
        }
        this.otherForms = this.assignWordForms(ms, tim);
    }
    assignTonalEnding(allomorph) {
        let tse = new lexeme_2.TonalSymbolEnding();
        if (allomorph instanceof version2_1.FreeAllomorph) {
            // replace the tonal ending
            let fte = new lexeme_2.FreeTonalEnding();
            fte.allomorph = allomorph;
            tse = fte;
        }
        else if (allomorph instanceof version2_1.CheckedAllomorph) {
            // append the tonal of the tonal ending
            let cte = new lexeme_2.CheckedTonalEnding();
            cte.allomorph = allomorph;
            tse = cte;
        }
        return tse;
    }
    getInflectionalEnding() {
        if (this.tonalSymbleEnding)
            return this.tonalSymbleEnding.allomorph.tonal.toString();
        return '';
    }
    assignWordForms(ms, ti) {
        return ti.apply(ms);
    }
    getMorphemes() {
        // when external sandhi is required, member variable morphemes has to be exposed
        return this.ms;
    }
    assimilate(til) {
        const ms = til.getMorphemes();
        if (ms.length > 0) {
            const other_snds = ms[ms.length - 1].sounds;
            if (other_snds[other_snds.length - 1].name === version2_1.TonalSoundTags.nasalFinal) {
                let wrd = new lexeme_2.TonalWord(this.ms.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
                const s = other_snds[other_snds.length - 1];
                const syls = this.ms[this.ms.length - 1].getSoundChangeForm(s);
                wrd.popSyllable();
                wrd.pushSyllable(syls[0]);
                return wrd;
            }
        }
    }
}
exports.TonalInflectionLexeme = TonalInflectionLexeme;
//------------------------------------------------------------------------------
class TonalInflectionLexemeMaker extends lexeme_1.LexemeMaker {
    constructor(tim) {
        super();
        this.tim = tim;
    }
    makeLexemes(ms) {
        return this.make(ms);
    }
    make(ms) {
        return new TonalInflectionLexeme(ms, this.tim);
    }
}
exports.TonalInflectionLexemeMaker = TonalInflectionLexemeMaker;
//# sourceMappingURL=lexeme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/morpheme.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/morpheme.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const morpheme_1 = __webpack_require__(/*! ../morpheme */ "./node_modules/taipa/lib/morpheme.js");
const morpheme_2 = __webpack_require__(/*! ../tonal/morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
const version2_1 = __webpack_require__(/*! ../tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
//------------------------------------------------------------------------------
class TonalCombiningForms extends morpheme_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph) {
            let s = new morpheme_2.TonalSyllable(sounds.map(x => new grapheme_1.AlphabeticLetter(x.characters)));
            if (allomorph instanceof version2_1.FreeAllomorph) {
                if (allomorph instanceof version2_1.ZeroAllomorph) {
                    const cfs = version2_1.combiningRules.get(version2_1.TonalLetterTags.zero);
                    for (let k in cfs) {
                        // it should loop only once
                        s.pushLetter(new grapheme_1.AlphabeticLetter(cfs[k].characters));
                    }
                    return [s];
                }
                else if (allomorph instanceof version2_1.AllomorphY) {
                    s.popLetter();
                    return [s];
                }
                else {
                    s.popLetter();
                    const crs = version2_1.combiningRules.get(allomorph.tonal.toString());
                    const rets = [];
                    for (let k in crs) {
                        s.pushLetter(new grapheme_1.AlphabeticLetter(crs[k].characters));
                        rets.push(new morpheme_2.TonalSyllable(s.letters));
                        s.popLetter();
                    }
                    return rets;
                }
            }
            else if (allomorph instanceof version2_1.CheckedAllomorph) {
                // nothing to pop here
                if (allomorph.tonal.toString().length > 0)
                    return [];
                const cfs = version2_1.combiningRules.get(allomorph.final.toString());
                const rets = [];
                for (let k in cfs) {
                    s.pushLetter(new grapheme_1.AlphabeticLetter(cfs[k].characters));
                    rets.push(new morpheme_2.TonalSyllable(s.letters));
                    s.popLetter();
                }
                return rets;
            }
        }
        return [];
    }
}
exports.TonalCombiningForms = TonalCombiningForms;
//------------------------------------------------------------------------------
class ThirdCombiningForm extends morpheme_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph) {
            let s = new morpheme_2.TonalSyllable(sounds.map(x => new grapheme_1.AlphabeticLetter(x.characters)));
            const ps = version2_1.tonalPositionalSound.get(version2_1.TonalLetterTags.w);
            let snd = new grapheme_1.Sound();
            if (allomorph instanceof version2_1.FreeAllomorph) {
                if (ps)
                    snd = ps(version2_1.TonalSoundTags.freeTonal);
                if (allomorph instanceof version2_1.ZeroAllomorph) {
                    s.pushLetter(new grapheme_1.AlphabeticLetter(snd.characters));
                }
                else {
                    s.popLetter();
                    s.pushLetter(new grapheme_1.AlphabeticLetter(snd.characters));
                }
            }
            else if (allomorph instanceof version2_1.CheckedAllomorph) {
                if (ps)
                    snd = ps(version2_1.TonalSoundTags.checkedTonal);
                if (allomorph.tonal.toString()) {
                    s.popLetter();
                    s.pushLetter(new grapheme_1.AlphabeticLetter(snd.characters));
                }
                else {
                    s.pushLetter(new grapheme_1.AlphabeticLetter(snd.characters));
                }
            }
            return [s];
        }
        return [];
    }
}
exports.ThirdCombiningForm = ThirdCombiningForm;
//------------------------------------------------------------------------------
class AssimilatedFinalForm extends morpheme_1.TonalCombiningMetaplasm {
    voicedFinal(sounds) {
        const fnl = version2_1.voiceless_voiced_finals.get(sounds[sounds.length - 2].toString());
        if (fnl) {
            let s = new morpheme_2.TonalSyllable(sounds.map(x => new grapheme_1.AlphabeticLetter(x.characters)));
            let snd = new grapheme_1.Sound();
            const ps = version2_1.tonalPositionalSound.get(fnl);
            if (ps)
                snd = ps(version2_1.TonalSoundTags.stopFinal);
            s.replaceLetter(s.letters.length - 2, new grapheme_1.AlphabeticLetter(snd.characters));
            return [s];
        }
    }
    applyAssimilation(sounds, initialNextSyllable) {
        if (initialNextSyllable.name != version2_1.TonalSoundTags.initial) {
            const tss = this.voicedFinal(sounds);
            if (tss)
                return tss;
            return [];
        }
        if (sounds[sounds.length - 2].name != version2_1.TonalSoundTags.stopFinal)
            return [];
        if ((sounds[sounds.length - 2].toString() === version2_1.TonalLetterTags.tt ||
            sounds[sounds.length - 2].toString() === version2_1.TonalLetterTags.t) &&
            new version2_1.InitialsForAssimilation().beginWith(initialNextSyllable.toString())) {
            let s = new morpheme_2.TonalSyllable(sounds.map(x => new grapheme_1.AlphabeticLetter(x.characters)));
            let snd = new grapheme_1.Sound();
            const af = version2_1.assimilatedFinals.get(sounds[sounds.length - 2].toString() + initialNextSyllable.toString());
            if (af) {
                const ps = version2_1.tonalPositionalSound.get(af);
                if (ps)
                    snd = ps(version2_1.TonalSoundTags.stopFinal);
                s.replaceLetter(s.letters.length - 2, new grapheme_1.AlphabeticLetter(snd.characters));
                return [s];
            }
        }
        else {
            const tss = this.voicedFinal(sounds);
            if (tss)
                return tss;
        }
        return [];
    }
}
exports.AssimilatedFinalForm = AssimilatedFinalForm;
//------------------------------------------------------------------------------
class TonalCombiningMorpheme extends morpheme_1.Morpheme {
    constructor(syllable, tcf) {
        super();
        this.syllable = syllable;
        this.metaplasm = tcf;
        // assign allomorph for each syllable
        this.allomorph = this.assignAllomorph(this.syllable);
        this.sounds = new Array();
    }
    getForms() {
        return this.metaplasm.apply(this.sounds, this.allomorph);
    }
    getSoundChangeForm(sound) {
        if (sound) {
            if (sound.name == version2_1.TonalSoundTags.nasalFinal) {
                // external sandhi
                const snds = this.sounds;
                snds.splice(0, 0, sound);
                return [new morpheme_2.TonalSyllable(snds.map(x => new grapheme_1.AlphabeticLetter(x.characters)))];
            }
            // internal sandhi
            return this.metaplasm.applyAssimilation(this.sounds, sound);
        }
        return [];
    }
    assignAllomorph(syllable) {
        if (version2_1.uncombinedCheckedAllomorphs.has(syllable.lastLetter.literal)) {
            return version2_1.uncombinedCheckedAllomorphs.get(syllable.lastLetter.literal);
        }
        if (new version2_1.SetOfCheckedTonals().beginWith(syllable.lastLetter.literal) &&
            version2_1.uncombinedCheckedAllomorphs.has(syllable.lastSecondLetter.literal)) {
            // in case of final followed by tonal
            const alms = version2_1.combinedCheckedAllomorphs.get(syllable.lastSecondLetter.literal);
            if (alms.length > 1) {
                const it = alms.filter(x => x.tonal.toString() === syllable.lastLetter.literal);
                return it[0];
            }
            return alms[0];
        }
        if (version2_1.uncombinedFreeAllomorphs.has(syllable.lastLetter.literal)) {
            return version2_1.uncombinedFreeAllomorphs.get(syllable.lastLetter.literal);
        }
        return new version2_1.ZeroAllomorph();
    }
}
exports.TonalCombiningMorpheme = TonalCombiningMorpheme;
class TonalCombiningMorphemeMaker extends morpheme_1.MorphemeMaker {
    constructor(tsm) {
        super();
        this.metaplasm = tsm;
    }
    createMorphemes() {
        return new Array();
    }
    createMorpheme(msp) {
        const tcm = new TonalCombiningMorpheme(new morpheme_2.TonalSyllable(msp.letters), this.metaplasm);
        tcm.sounds = msp.pattern;
        return tcm;
    }
    postprocess(patterns) {
        let morphemes = this.createMorphemes();
        for (let i in patterns) {
            morphemes.push(this.createMorpheme(patterns[i]));
        }
        return morphemes;
    }
    makeMorphemes(gs) {
        const ltrs = gs.map(it => it.letter);
        const ptrns = this.make(ltrs, morpheme_2.syllabifyTonal);
        const ms = this.postprocess(ptrns);
        return ms;
    }
}
exports.TonalCombiningMorphemeMaker = TonalCombiningMorphemeMaker;
//# sourceMappingURL=morpheme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/parser.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/parser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __webpack_require__(/*! ./configuration */ "./node_modules/taipa/lib/dparser/configuration.js");
const guide_1 = __webpack_require__(/*! ./guide */ "./node_modules/taipa/lib/dparser/guide.js");
const token_1 = __webpack_require__(/*! ../token */ "./node_modules/taipa/lib/token.js");
const symbols_1 = __webpack_require__(/*! ./symbols */ "./node_modules/taipa/lib/dparser/symbols.js");
const relation_1 = __webpack_require__(/*! ./relation */ "./node_modules/taipa/lib/dparser/relation.js");
//import { FeatureLabel, Feature } from './feature';
class DependencyParser {
    constructor() {
        this.c = this.getInitialConfiguration();
        this.triggered = false;
        this.s1 = new token_1.Token('');
        this.s2 = new token_1.Token('');
        this.b1 = new token_1.Token('');
        this.s1_b1_right_relations = new Map()
            .set(symbols_1.Tagset.PPV + symbols_1.Tagset.AUXN, symbols_1.DependencyLabels.compound_prt)
            .set(symbols_1.Tagset.PPV + symbols_1.Tagset.NPR, symbols_1.DependencyLabels.compound_prt);
        this.s1_b1_left_relations = new Map();
        this.s2_s1_right_relations = new Map()
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.PPV, symbols_1.DependencyLabels.compound_prt)
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.AUXN, symbols_1.DependencyLabels.aux)
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.VB, symbols_1.DependencyLabels.compound)
            .set(symbols_1.Tagset.VB + symbols_1.Tagset.NPR, symbols_1.DependencyLabels.obj);
        this.s2_s1_left_relations = new Map()
            .set(symbols_1.Tagset.AUX + symbols_1.Tagset.VB, symbols_1.DependencyLabels.aux)
            .set(symbols_1.Tagset.PADV + symbols_1.Tagset.VB, symbols_1.DependencyLabels.advmod)
            .set(symbols_1.Tagset.APPR + symbols_1.Tagset.NPR, symbols_1.DependencyLabels.case);
        this.s2_s1_left_features = new Map().set(symbols_1.Tagset.NPR + symbols_1.Tagset.VB, [
            symbols_1.DependencyLabels.nsubj,
            symbols_1.DependencyLabels.dislocated,
        ]);
    }
    getInitialConfiguration() {
        return new configuration_1.Configuration();
    }
    apply(t, c) {
        return t.do(c);
    }
    isQueueEmpty() {
        if (this.c.queue.length === 0)
            return true;
        return false;
    }
    isStackEmpty() {
        if (this.c.stack.length === 2)
            return true;
        return false;
    }
    rightRelation(label) {
        this.s1.dep = label;
        this.s1.head = this.s2;
        return new relation_1.Relation(label, this.s2, this.s1);
    }
    leftRelation(label) {
        this.s2.dep = label;
        this.s2.head = this.s1;
        return new relation_1.Relation(label, this.s1, this.s2);
    }
    set_s1_s2_b1() {
        this.s1 = new token_1.Token('');
        if (this.c.stack.length > 0)
            this.s1 = this.c.stack[this.c.stack.length - 1];
        this.s2 = new token_1.Token('');
        if (this.c.stack.length > 1)
            this.s2 = this.c.stack[this.c.stack.length - 2];
        this.b1 = new token_1.Token('');
        if (this.c.queue.length > 0)
            this.b1 = this.c.queue[0];
    }
    set_s1_b1_relation(t) {
        if (t instanceof configuration_1.RightArc) {
            if (this.s1_b1_right_relations.has(this.s1.tag + this.b1.tag)) {
                const rel = this.s1_b1_right_relations.get(this.s1.tag + this.b1.tag);
                if (rel) {
                    this.c.relations.push(this.rightRelation(rel));
                }
            }
        }
        else if (t instanceof configuration_1.LeftArc) {
            if (this.s1_b1_left_relations.has(this.s1.tag + this.b1.tag)) {
                const rel = this.s1_b1_left_relations.get(this.s1.tag + this.b1.tag);
                if (rel) {
                    this.c.relations.push(this.leftRelation(rel));
                }
            }
        }
    }
    set_s2_s1_relation(t) {
        if (t instanceof configuration_1.RightArc) {
            if (this.s2_s1_right_relations.has(this.s2.tag + this.s1.tag)) {
                const rel = this.s2_s1_right_relations.get(this.s2.tag + this.s1.tag);
                if (rel) {
                    this.c.relations.push(this.rightRelation(rel));
                }
            }
            else if (this.isStackEmpty()) {
                this.c.relations.push(this.rightRelation(symbols_1.DependencyLabels.root));
            }
        }
        else if (t instanceof configuration_1.LeftArc) {
            if (this.s2_s1_left_relations.has(this.s2.tag + this.s1.tag)) {
                const rel = this.s2_s1_left_relations.get(this.s2.tag + this.s1.tag);
                if (rel) {
                    this.c.relations.push(this.leftRelation(rel));
                }
            }
            else if (this.s2_s1_left_features.has(this.s2.tag + this.s1.tag)) {
                const labels = this.s2_s1_left_features.get(this.s2.tag + this.s1.tag);
                if (labels) {
                    if (this.triggered == false) {
                        this.c.relations.push(this.leftRelation(labels[0]));
                        this.triggered = true;
                    }
                    else {
                        this.c.relations.push(this.leftRelation(labels[1]));
                    }
                }
            }
        }
    }
    parse(doc) {
        for (let t of doc.tokens) {
            this.c.queue.push(t);
        }
        let guide = new guide_1.Guide();
        let rt = new token_1.Token('ROOT');
        this.c.stack.push(rt);
        if (this.c.stack.length == 1 && this.c.queue.length > 0) {
            // initial configuration
            // shift the first lexeme from queue to stack
            guide.transitions.push(new configuration_1.Shift());
        }
        while (!this.c.isTerminalConfiguration()) {
            let t = guide.getNextTransition(this.c);
            if (t == null || t == undefined)
                break;
            this.set_s1_s2_b1();
            if (this.s1.tag != '' && this.b1.tag != '') {
                this.set_s1_b1_relation(t);
            }
            else if (this.isQueueEmpty()) {
                this.set_s2_s1_relation(t);
            }
            this.c = this.apply(t, this.c);
        }
        doc.relations = this.c.relations;
        return doc;
    }
}
exports.DependencyParser = DependencyParser;
//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/phraseme.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/phraseme.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const phraseme_1 = __webpack_require__(/*! ../phraseme */ "./node_modules/taipa/lib/phraseme.js");
class Transitive extends phraseme_1.TonalPhrasalInflectingMetaplasm {
    apply(lexemeVerb, lexemeParticle) {
        if (lexemeVerb.word.literal === '' || lexemeParticle.word.literal === '')
            return [];
        if (lexemeParticle.otherForms.length > 0) {
            return [new phraseme_1.TonalPhrase([lexemeVerb.otherForms[0], lexemeParticle.otherForms[0]])];
        }
        else {
            return [new phraseme_1.TonalPhrase([lexemeVerb.otherForms[0], lexemeParticle.word])];
        }
    }
}
class Adnominal extends phraseme_1.TonalPhrasalInflectingMetaplasm {
    apply(lexemeAdjectivalNoun, lexemeE) {
        if (lexemeAdjectivalNoun.word.literal === '' || lexemeE.word.literal === '')
            return [];
        if (lexemeE.otherForms.length > 0) {
            return [new phraseme_1.TonalPhrase([lexemeAdjectivalNoun.word, lexemeE.otherForms[0]])];
        }
        else {
            return [new phraseme_1.TonalPhrase([lexemeAdjectivalNoun.word, lexemeE.word])];
        }
    }
}
exports.Adnominal = Adnominal;
class Assimilation extends phraseme_1.TonalPhrasalInflectingMetaplasm {
    apply(lexemeAdjectivalNoun, lexemeE) {
        const wrd = lexemeE.assimilate(lexemeAdjectivalNoun);
        if (wrd) {
            const frs = new phraseme_1.TonalPhrase([lexemeAdjectivalNoun.word, wrd]);
            return [frs];
        }
        return [];
    }
}
exports.Assimilation = Assimilation;
class TonalTransitivePhraseme extends phraseme_1.Phraseme {
    constructor(lexemeVerb, lexemeParticle, metaplasm) {
        super();
        this.lexemeVerb = lexemeVerb;
        this.lexemeParticle = lexemeParticle;
        this.metaplasm = metaplasm;
        this.proceedingForms = new Array();
        this.phrase = new phraseme_1.TonalPhrase([lexemeVerb.word, lexemeParticle.word]);
        this.proceedingForms = this.assignPhraseForms();
    }
    assignPhraseForms() {
        return this.metaplasm.apply(this.lexemeVerb, this.lexemeParticle);
    }
}
exports.TonalTransitivePhraseme = TonalTransitivePhraseme;
class TonalIntransitivePhraseme extends phraseme_1.Phraseme {
    constructor(lexemeAdjective, lexemeE) {
        super();
        this.phrase = new phraseme_1.TonalPhrase([lexemeAdjective.word, lexemeE.word]);
    }
}
exports.TonalIntransitivePhraseme = TonalIntransitivePhraseme;
class TonalAdjectivePhraseme extends phraseme_1.Phraseme {
    constructor(lexemeAdjectivalNoun, lexemeE, metaplasm) {
        super();
        this.lexemeAdjectivalNoun = lexemeAdjectivalNoun;
        this.lexemeE = lexemeE;
        this.metaplasm = metaplasm;
        this.otherForms = new Array();
        this.phrase = new phraseme_1.TonalPhrase([lexemeAdjectivalNoun.word, lexemeE.word]);
        this.otherForms = this.assignPhraseForm();
    }
    assignPhraseForm() {
        return this.metaplasm.apply(this.lexemeAdjectivalNoun, this.lexemeE);
    }
}
exports.TonalAdjectivePhraseme = TonalAdjectivePhraseme;
class TonalInflexionPhrasemeMaker {
    makeTransitivePhrasemes(lexemeVerb, lexemeParticle) {
        return new TonalTransitivePhraseme(lexemeVerb, lexemeParticle, new Transitive());
    }
    makeIntransitivePhrasemes(lexemeVerb, lexemeParticle) {
        return new TonalIntransitivePhraseme(lexemeVerb, lexemeParticle);
    }
    makeAdjectivePhrasemes(lexemeAdjectivalNoun, lexemeE, metaplasm) {
        return new TonalAdjectivePhraseme(lexemeAdjectivalNoun, lexemeE, metaplasm);
    }
}
exports.TonalInflexionPhrasemeMaker = TonalInflexionPhrasemeMaker;
//# sourceMappingURL=phraseme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/relation.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/relation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Relation {
    constructor(dep, head, dependent) {
        this.dependency = dep;
        this.head = head;
        this.dependent = dependent;
    }
}
exports.Relation = Relation;
//# sourceMappingURL=relation.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/rules.js":
/*!*************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/rules.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __webpack_require__(/*! ./keywords */ "./node_modules/taipa/lib/dparser/keywords.js");
const symbols_1 = __webpack_require__(/*! ./symbols */ "./node_modules/taipa/lib/dparser/symbols.js");
const analyzer_1 = __webpack_require__(/*! ./analyzer */ "./node_modules/taipa/lib/dparser/analyzer.js");
const dictionary_1 = __webpack_require__(/*! ./dictionary */ "./node_modules/taipa/lib/dparser/dictionary.js");
class ConstructionOfSpeech {
    constructor() {
        this.pos = '';
        this.elements = new Array();
    }
}
exports.ConstructionOfSpeech = ConstructionOfSpeech;
class ConstructionOfPhrase extends ConstructionOfSpeech {
    constructor(arr) {
        super();
        for (let key in arr) {
            this.elements.push(arr[key]);
        }
    }
}
exports.ConstructionOfPhrase = ConstructionOfPhrase;
class NounPhrase extends ConstructionOfPhrase {
}
class VerbPhrase extends ConstructionOfPhrase {
}
class PhrasalVerb extends VerbPhrase {
    constructor(arr) {
        super(arr);
        this.pos = symbols_1.POSTags.verb;
    }
}
exports.PhrasalVerb = PhrasalVerb;
class VerbPhraseSurface extends ConstructionOfSpeech {
    constructor() {
        super();
        this.pos = symbols_1.POSTags.verb;
    }
}
class PhrasalVerbWithEnclitic extends VerbPhraseSurface {
    constructor(verb, particle, enclitic) {
        super();
        verb.tag = symbols_1.Tagset.VB;
        this.elements.push(verb);
        particle.tag = symbols_1.Tagset.PPV;
        this.elements.push(particle);
        enclitic.tag = symbols_1.Tagset.AUXN;
        this.elements.push(enclitic);
    }
}
exports.PhrasalVerbWithEnclitic = PhrasalVerbWithEnclitic;
class VerbWithEnclitic extends VerbPhraseSurface {
    constructor(verb, enclitic) {
        super();
        verb.tag = symbols_1.Tagset.VB;
        this.elements.push(verb);
        enclitic.tag = symbols_1.Tagset.AUXN;
        this.elements.push(enclitic);
    }
}
exports.VerbWithEnclitic = VerbWithEnclitic;
class SetOfPhrasalVerbs {
    constructor() {
        this.phrms = new Array();
        this.phvs = new Array();
        this.populatePhrasemes();
        this.populatePhrasalVerbs();
    }
    populatePhrasalVerbs() {
        for (let i in this.phrms) {
            this.phvs.push(new PhrasalVerb([
                new keywords_1.VerbSurface(this.phrms[i].phrase.words[0].literal),
                new keywords_1.ParticleSurface(this.phrms[i].phrase.words[1].literal),
            ]));
            this.phvs.push(new PhrasalVerb([
                new keywords_1.VerbSurface(this.phrms[i].proceedingForms[0].words[0].literal),
                new keywords_1.ParticleSurface(this.phrms[i].proceedingForms[0].words[1].literal),
            ]));
        }
    }
    populatePhrasemes() {
        const pva = new analyzer_1.PhrasalInflectionAnalyzer();
        for (let i in dictionary_1.dict_of_phrasal_verbs) {
            this.phrms.push(pva.analyzeTransitive(dictionary_1.dict_of_phrasal_verbs[i][0], dictionary_1.dict_of_phrasal_verbs[i][1]));
        }
    }
}
exports.SetOfPhrasalVerbs = SetOfPhrasalVerbs;
class PhrasalTransitive extends VerbPhraseSurface {
    constructor(verb, preposition, pronoun) {
        super();
        verb.tag = symbols_1.Tagset.VB;
        this.elements.push(verb);
        preposition.tag = symbols_1.Tagset.PADV;
        this.elements.push(preposition);
        pronoun.tag = symbols_1.Tagset.NPR; // TODO: pronType
        this.elements.push(pronoun);
    }
}
class SmallClause extends VerbPhraseSurface {
    constructor(verb1, pronoun, verb2) {
        super();
        verb1.tag = symbols_1.Tagset.VB;
        this.elements.push(verb1);
        pronoun.tag = symbols_1.Tagset.NPR;
        this.elements.push(pronoun);
        verb2.tag = symbols_1.Tagset.VB;
        this.elements.push(verb2);
    }
}
class SetOfSmallClauses {
    constructor() {
        this.constructions = [];
        // obj. xcomp.
        const sc = new SmallClause(new keywords_1.VerbSurface('oannw'), new keywords_1.PersonalPronounSurface('goa'), new keywords_1.VerbSurface('churw'));
        this.constructions.push(sc);
    }
}
exports.SetOfSmallClauses = SetOfSmallClauses;
class Rules {
    constructor() {
        this.phrases = new Array();
        this.keyWords = new keywords_1.KeyWords();
        this.populatePatterns();
        this.populatePhrasalVerbs();
    }
    lookupDictionary(str) {
        let phr;
        if (dictionary_1.dict_of_verbs.includes(str)) {
            let vs = new keywords_1.VerbSurface(str);
            if (vs.pos === symbols_1.POSTags.verb)
                vs.tag = symbols_1.Tagset.VB;
            phr = [new ConstructionOfSpeech()];
            phr[0].elements.push(vs);
            phr[0].pos = symbols_1.POSTags.verb;
            return phr;
        }
        return undefined;
    }
    lookupRules(sequence) {
        let elems = [];
        for (let pat of this.phrases) {
            for (let j = 0; j < pat.length; j++) {
                //console.log(pat[j].elements)
                for (let e of pat[j].elements) {
                    elems.push(e);
                }
            }
            for (let i = 0; i < elems.length; i++) {
                if (i === 1 && i + 1 === elems.length) {
                    if (elems[0].surface === sequence[0] && elems[1].surface === sequence[1]) {
                        return pat;
                    }
                }
            }
            elems = [];
        }
    }
    matchKeyWords(str) {
        return this.keyWords.getSurface(str);
    }
    seperateMatches(str) {
        const ptcls = dictionary_1.dict_of_seperate_vv_compounds[str];
        if (ptcls) {
            return ptcls[0];
        }
    }
    matches(sequence) {
        const phrD = this.lookupDictionary(sequence[0]);
        const phrR = this.lookupRules(sequence);
        if (phrR)
            return phrR;
        else if (phrD)
            return phrD;
        return undefined;
    }
    populatePhrasalVerbs() {
        const s = new SetOfPhrasalVerbs();
        for (let i = 0; i < s.phvs.length; i++) {
            this.phrases.push([s.phvs[i]]);
        }
    }
    populatePatterns() {
        this.phrases.push([new SetOfSmallClauses().constructions[0]]);
    }
}
exports.Rules = Rules;
//# sourceMappingURL=rules.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/symbols.js":
/*!***************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/symbols.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var POSTags;
(function (POSTags) {
    /*
      Universal POS tags
      https://universaldependencies.org/u/pos/
    */
    POSTags["adjective"] = "ADJ";
    POSTags["adposition"] = "ADP";
    POSTags["adverb"] = "ADV";
    POSTags["auxiliary"] = "AUX";
    POSTags["conjunction"] = "CONJ";
    POSTags["coordinating_conjunction"] = "CCONJ";
    POSTags["determiner"] = "DET";
    POSTags["interjection"] = "INTJ";
    POSTags["noun"] = "NOUN";
    POSTags["number"] = "NUM";
    POSTags["particle"] = "PART";
    POSTags["pronoun"] = "PRON";
    POSTags["proper_noun"] = "PROPN";
    POSTags["punctuation"] = "PUNCT";
    POSTags["subordinating_conjunction"] = "SCONJ";
    POSTags["symbol"] = "SYM";
    POSTags["verb"] = "VERB";
    POSTags["other"] = "X";
})(POSTags = exports.POSTags || (exports.POSTags = {}));
var DependencyLabels;
(function (DependencyLabels) {
    /*
      Universal Dependencies
      https://universaldependencies.org/u/dep/all.html
    */
    DependencyLabels["acl"] = "acl";
    DependencyLabels["advcl"] = "advcl";
    DependencyLabels["amod"] = "amod";
    DependencyLabels["advmod"] = "advmod";
    DependencyLabels["aux"] = "aux";
    DependencyLabels["aux_caus"] = "aux:caus";
    DependencyLabels["case"] = "case";
    DependencyLabels["ccomp"] = "ccomp";
    DependencyLabels["compound"] = "compound";
    DependencyLabels["compound_prt"] = "compound:prt";
    DependencyLabels["cop"] = "cop";
    DependencyLabels["csubj"] = "csubj";
    DependencyLabels["det"] = "det";
    DependencyLabels["dislocated"] = "dislocated";
    DependencyLabels["fix"] = "fix";
    DependencyLabels["flat"] = "flat";
    DependencyLabels["obj"] = "obj";
    DependencyLabels["iobj"] = "iobj";
    DependencyLabels["iobj_agent"] = "iobj:agent";
    DependencyLabels["mark"] = "mark";
    DependencyLabels["nmod"] = "nmod";
    DependencyLabels["nobj"] = "nobj";
    DependencyLabels["nsubj"] = "nsubj";
    DependencyLabels["nsubj_caus"] = "nsubj:caus";
    DependencyLabels["obl"] = "obl";
    DependencyLabels["prt"] = "prt";
    DependencyLabels["root"] = "root";
    DependencyLabels["xcomp"] = "xcomp";
})(DependencyLabels = exports.DependencyLabels || (exports.DependencyLabels = {}));
var Tagset;
(function (Tagset) {
    Tagset["AUX"] = "AUX";
    Tagset["AUXN"] = "AUXN";
    Tagset["ADJ"] = "ADJ";
    Tagset["ADNOM"] = "ADNOM";
    Tagset["ADV"] = "ADV";
    Tagset["APPR"] = "APPR";
    Tagset["CL"] = "CL";
    Tagset["CONJ"] = "CONJ";
    Tagset["FIL"] = "FIL";
    Tagset["INTJ"] = "INTJ";
    Tagset["NN"] = "NN";
    Tagset["NNP"] = "NNP";
    Tagset["NPR"] = "NPR";
    Tagset["NUM"] = "NUM";
    Tagset["NV"] = "NV";
    Tagset["NADJ"] = "NADJ";
    Tagset["NADV"] = "NADV";
    Tagset["PAR"] = "PAR";
    Tagset["PCS"] = "PCS";
    Tagset["PCO"] = "PCO";
    Tagset["PCJ"] = "PCJ";
    Tagset["PEND"] = "PEND";
    Tagset["PADV"] = "PADV";
    Tagset["PPV"] = "PPV";
    Tagset["PSUB"] = "PSUB";
    Tagset["PNC"] = "PNC";
    Tagset["PX"] = "PX";
    Tagset["SX"] = "SX";
    Tagset["SYM"] = "SYM";
    Tagset["VB"] = "VB";
})(Tagset = exports.Tagset || (exports.Tagset = {}));
var PronType;
(function (PronType) {
    /*
      pronominal types
      https://universaldependencies.org/u/feat/PronType.html
    */
    PronType["DEM"] = "Dem";
    PronType["PRS"] = "Prs";
    PronType["REL"] = "Rel";
})(PronType = exports.PronType || (exports.PronType = {}));
//# sourceMappingURL=symbols.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/tagger.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/tagger.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const rules_1 = __webpack_require__(/*! ./rules */ "./node_modules/taipa/lib/dparser/rules.js");
const symbols_1 = __webpack_require__(/*! ./symbols */ "./node_modules/taipa/lib/dparser/symbols.js");
const keywords_1 = __webpack_require__(/*! ./keywords */ "./node_modules/taipa/lib/dparser/keywords.js");
class RuleBasedTagger {
    constructor() {
        this.speeches = new Array();
        this.rules = new rules_1.Rules();
    }
    generate(sequence, phrases) {
        let cps = new Array();
        if (phrases.length > 0) {
            for (let ph of phrases) {
                cps.push(ph);
                //console.log(pat.elements)
                if (ph instanceof rules_1.PhrasalVerb) {
                    const pvwe = new rules_1.PhrasalVerbWithEnclitic(new keywords_1.VerbSurface(ph.elements[0].surface), new keywords_1.ParticleSurface(ph.elements[1].surface), new keywords_1.EncliticSurface('aw'));
                    cps.push(pvwe);
                }
                else if (ph.pos === symbols_1.POSTags.verb) {
                    const vwe = new rules_1.VerbWithEnclitic(new keywords_1.VerbSurface(sequence[0]), new keywords_1.EncliticSurface('aw'));
                    cps.push(vwe);
                }
            }
        }
        else {
            //console.log(sequence)
            const vwe = new rules_1.VerbWithEnclitic(new keywords_1.VerbSurface(sequence[0]), new keywords_1.EncliticSurface('aw'));
            cps.push(vwe);
        }
        //console.log(cps)
        return cps;
    }
    tagKeyWord(kw) {
        if (kw.pos === symbols_1.POSTags.pronoun) {
            kw.tag = symbols_1.Tagset.NPR;
        }
        else if (kw.pos === symbols_1.POSTags.auxiliary)
            kw.tag = symbols_1.Tagset.AUX;
        else if (kw.pos === symbols_1.POSTags.particle)
            kw.tag = symbols_1.Tagset.PADV;
    }
    matchSeperates(sequence, particle) {
        let phrase = new rules_1.ConstructionOfSpeech();
        let vs = new keywords_1.VerbSurface(sequence[0]);
        vs.tag = symbols_1.Tagset.VB;
        phrase.elements.push(vs);
        phrase.pos = symbols_1.POSTags.verb;
        if (sequence.length > 1) {
            for (let i = 1; i < sequence.length; i++) {
                // skip the first array element
                let kw = this.rules.matchKeyWords(sequence[i]);
                if (kw) {
                    this.tagKeyWord(kw);
                    phrase.elements.push(kw);
                }
                if (sequence[i] === particle) {
                    let ps = new keywords_1.VerbSurface(sequence[i]);
                    ps.tag = symbols_1.Tagset.VB;
                    phrase.elements.push(ps);
                    return phrase;
                }
            }
        }
    }
    tagPhrases(phrases) {
        if (phrases.length > 0) {
            for (let ph of phrases) {
                if (ph.pos === symbols_1.POSTags.verb && ph.elements[ph.elements.length - 1].pos === symbols_1.POSTags.particle) {
                    ph.elements[0].tag = symbols_1.Tagset.VB;
                    ph.elements[ph.elements.length - 1].tag = symbols_1.Tagset.PPV;
                }
                else if (ph.pos === symbols_1.POSTags.verb && ph.elements[ph.elements.length - 1].pos === symbols_1.POSTags.auxiliary) {
                    //console.log('something else hit')
                }
                else if (ph.pos === symbols_1.POSTags.verb && ph.elements[ph.elements.length - 1].pos === symbols_1.POSTags.adposition) {
                    ph.elements[0].tag = symbols_1.Tagset.VB;
                    ph.elements[ph.elements.length - 1].tag = symbols_1.Tagset.APPR;
                }
            }
        }
        return phrases;
    }
    phrase(strs, beginOfPhrase) {
        let sequence = [];
        let phrss;
        for (let i = beginOfPhrase; i < strs.length; i++) {
            sequence.push(strs[i]);
        }
        phrss = this.rules.matches(sequence);
        const ptcl = this.rules.seperateMatches(sequence[0]);
        if (ptcl) {
            const sep = this.matchSeperates(sequence, ptcl);
            if (sep) {
                phrss = [];
                phrss = [sep];
            }
        }
        if (!phrss) {
            //console.log(sequence)
            let kw = this.rules.matchKeyWords(sequence[0]);
            if (kw) {
                //console.log(kw)
                this.tagKeyWord(kw);
                phrss = [new rules_1.ConstructionOfSpeech()];
                phrss[0].elements.push(kw);
            }
        }
        //if(pats) console.log(pats[0].elements)
        if (phrss)
            phrss = this.tagPhrases(phrss);
        let listCP = new Array();
        if (phrss)
            listCP = this.generate(sequence, phrss);
        else
            listCP = this.generate(sequence, []);
        //console.log(listCP);
        let matchedLen = 0;
        let mp = new rules_1.ConstructionOfSpeech();
        for (let m in listCP) {
            const min = Math.min(strs.length - beginOfPhrase, listCP[m].elements.length);
            if (listCP[m].elements.length == min) {
                for (let n = 0; n < min; n++) {
                    if (listCP[m].elements[n] != undefined) {
                        if (strs[beginOfPhrase + n] === listCP[m].elements[n].surface) {
                            if (n + 1 == min && min > matchedLen) {
                                matchedLen = min;
                                for (let q = 0; q < matchedLen; q++) {
                                    mp.elements[q] = listCP[m].elements[q];
                                    if (listCP[m].elements[q].surface === '') {
                                        mp.elements[q].surface = strs[beginOfPhrase + q];
                                    }
                                }
                                mp.pos = listCP[m].pos;
                            }
                        }
                    }
                }
            }
        }
        return mp;
    }
    tagSpeeches() {
        for (let s of this.speeches) {
            if (s.elements.length == 1 && s.elements[0].pos == symbols_1.POSTags.pronoun)
                s.pos = symbols_1.POSTags.pronoun;
            //console.log(s)
            //console.log(s.elements)
        }
    }
    match(tokens) {
        let strs = [];
        for (let i in tokens)
            strs.push(tokens[i].text);
        let beginOfPhrase = 0;
        let matched = new rules_1.ConstructionOfSpeech();
        for (let i = 0; i < strs.length; i++) {
            if (i - beginOfPhrase == 0) {
                matched = this.phrase(strs, beginOfPhrase);
                //console.log(matched)
                if (matched.elements.length) {
                    beginOfPhrase += matched.elements.length;
                    this.speeches.push(matched);
                    this.tagSpeeches();
                }
            }
        }
    }
    tag(doc) {
        this.match(doc.tokens);
        let ces = new Array();
        for (let i in this.speeches) {
            doc.speeches.push(this.speeches[i]);
            for (let j in this.speeches[i].elements) {
                ces.push(this.speeches[i].elements[j]);
            }
        }
        for (let i = 0; i < ces.length; i++) {
            if (doc.tokens[i].text === ces[i].surface) {
                doc.tokens[i].pos = ces[i].pos;
                doc.tokens[i].tag = ces[i].tag;
            }
        }
        return doc;
    }
}
exports.RuleBasedTagger = RuleBasedTagger;
//# sourceMappingURL=tagger.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/grapheme.js":
/*!********************************************!*\
  !*** ./node_modules/taipa/lib/grapheme.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = __webpack_require__(/*! ./character */ "./node_modules/taipa/lib/character.js");
//------------------------------------------------------------------------------
class Grapheme {
}
class AlphabeticGrapheme extends Grapheme {
    constructor(letter) {
        super();
        this.letter = letter;
    }
}
exports.AlphabeticGrapheme = AlphabeticGrapheme;
//------------------------------------------------------------------------------
class Letter {
    constructor() {
        this.literal = '';
    }
}
exports.Letter = Letter;
class AlphabeticLetter extends Letter {
    constructor(characters) {
        super();
        this.characters = new Array();
        if (characters != null) {
            let len = characters.length;
            for (var i = 0; i < len; i++) {
                this.pushCharacter(characters[i]);
            }
        }
    }
    pushCharacter(c) {
        this.characters.push(c);
        this.literal += c.character;
    }
}
exports.AlphabeticLetter = AlphabeticLetter;
class MatchedSequence {
    constructor() {
        this.characters = new Array();
    }
    get matchedLength() {
        return this.characters.length;
    }
    toString() {
        let str = '';
        for (let i in this.characters) {
            str += this.characters[i].character;
        }
        return str;
    }
}
exports.MatchedSequence = MatchedSequence;
class Letters {
    constructor(larr) {
        this.o = new Map();
        this.larr = larr;
        for (let i = 0; i < this.larr.length; i++) {
            this.assign(this.larr[i]);
        }
    }
    assign(e) {
        let carr = [];
        for (let i = 0; i < e.length; i++) {
            let c = character_1.characters.get(e[i]);
            if (c) {
                carr.push(c);
            }
        }
        this.o.set(e, new AlphabeticLetter(carr));
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return new AlphabeticLetter([]);
    }
    get size() {
        return this.o.size;
    }
    get values() {
        return this.o.values();
    }
}
exports.Letters = Letters;
//------------------------------------------------------------------------------
class GraphemeMaker {
    constructor(lowerLetters) {
        this.list = new Array();
        this.list = Array.from(lowerLetters.values);
    }
    makeGraphemes(str) {
        const characters = new Array();
        if (str) {
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) != '\0') {
                    characters.push(new character_1.Character(str.charAt(i)));
                }
            }
        }
        let graphemes = this.make(characters);
        return graphemes;
    }
    getMatchedSequence(characters, beginOfLetter, candidates) {
        let ms = new MatchedSequence();
        let matchedLen = 0;
        //console.log(characters)
        if (characters[beginOfLetter].character === 'n') {
            if (characters.length - beginOfLetter >= 'nng'.length) {
                if (characters[beginOfLetter].character === 'n' &&
                    characters[beginOfLetter + 1].character === 'n' &&
                    characters[beginOfLetter + 2].character === 'g') {
                    // at the beginning of a letter, we should always prefer 'n' to 'nn'
                    // 'nn' is not able to begin a syllable
                    // 'ng' has higher associativity than 'nn' when in 'nng'
                    // special case for 'nng'
                    // copy the matched letter
                    ms.characters[0] = new character_1.Character('n');
                    return ms;
                }
            }
        }
        for (let j in candidates) {
            let min = Math.min(characters.length - beginOfLetter, candidates[j].literal.length);
            if (candidates[j].literal.length == min) {
                for (let k = 0; k < min; k++) {
                    if (characters[beginOfLetter + k].character === candidates[j].literal[k]) {
                        if (k + 1 == min && min > matchedLen) {
                            // to make sure it is longer than previous patterns
                            // last letter matched for the pattern
                            matchedLen = min;
                            // copy the matched letters
                            for (let q = 0; q < matchedLen; q++) {
                                ms.characters[q] = characters[beginOfLetter + q];
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        return ms;
    }
    make(characters) {
        let graphemes = new Array();
        //console.log("metadata letter array length %d. ", letters.length);
        let beginOfLetter = 0;
        let letters = new Array();
        for (let i = 0; i < characters.length; i++) {
            //console.log("examining character: %s. length of characters: %d", characters[i].symbol, characters.length);
            //console.log("metadata letter array looping.");
            if (i - beginOfLetter == 0) {
                //console.log("matchedLen: %d", ms.matchedLength);
                let candidates = this.list.filter(l => l.characters[0].character === characters[i].character);
                let ms = this.getMatchedSequence(characters, beginOfLetter, candidates);
                if (ms.matchedLength > 0) {
                    for (let key in candidates) {
                        //console.log(candidates[key].literal + ' - ' + ms.toString())
                        if (candidates[key].literal === new AlphabeticLetter(ms.characters).literal) {
                            letters.push(candidates[key]);
                        }
                    }
                }
            }
            if (letters.length == 0) {
                for (let j in characters) {
                    //console.log(characters[j].character)
                }
                // 'length of letters is zero'
            }
            else if (letters.length == 1) {
                //console.log("just one matched. i:%d. ls[0].characters.length:%d. ls[0]:", i, ls[0].characters.length, ls[0])
                //console.log("just one matched. i:%d. ls[0].characters.length:%d", i, ls[0].characters.length);
                if (i + 1 - beginOfLetter == letters[0].characters.length) {
                    // when index i plus one equals the length of the matched syllable
                    let l = letters.shift();
                    if (l) {
                        beginOfLetter += l.characters.length;
                        // pack letters into sounds
                        let gr = new AlphabeticGrapheme(l);
                        graphemes.push(gr);
                    }
                }
            }
        }
        //console.log("metadata letter array length %d", letters.length);
        return graphemes;
    }
}
exports.GraphemeMaker = GraphemeMaker;
//------------------------------------------------------------------------------
class Sound {
    constructor() {
        this.name = '';
        // an array of character objects. can be used to make a word object.
        this.characters = new Array();
    }
    // we still need a method for combinning characters from each character objects.
    // this is different from an array of character objects. it is a string.
    toString() {
        let l = '';
        // there is no characters for 1st tone
        if (this.characters != null) {
            // when it is not 1st tone
            for (let k in this.characters) {
                l += this.characters[k].character;
            }
        }
        return l;
    }
    makeCharacters(str) {
        let arr = new Array();
        for (let i = 0; i < str.length; i++) {
            arr.push(new character_1.Character(str[i]));
        }
        return arr;
    }
}
exports.Sound = Sound;
class SetOfSounds {
    constructor() {
        this.sounds = new Array();
    }
    beginWith(str) {
        for (let i in this.sounds) {
            if (str.search(this.sounds[i].toString()) == 0 && str.length == this.sounds[i].toString().length)
                return true;
        }
        return false;
    }
}
exports.SetOfSounds = SetOfSounds;
//------------------------------------------------------------------------------
exports.pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
class SoundGeneration {
    constructor() {
        this.letters = [];
        this.sounds = new Array();
        this.bool = true;
    }
}
exports.SoundGeneration = SoundGeneration;
//# sourceMappingURL=grapheme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/index.js":
/*!*****************************************!*\
  !*** ./node_modules/taipa/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// client
var client_1 = __webpack_require__(/*! ./client */ "./node_modules/taipa/lib/client.js");
exports.Client = client_1.Client;
// API
var token_1 = __webpack_require__(/*! ./token */ "./node_modules/taipa/lib/token.js");
exports.TokenAnalysis = token_1.TokenAnalysis;
var analyzer_1 = __webpack_require__(/*! ./tonal/analyzer */ "./node_modules/taipa/lib/tonal/analyzer.js");
exports.TonalLemmatizationAnalyzer = analyzer_1.TonalLemmatizationAnalyzer;
var analyzer_2 = __webpack_require__(/*! ./dparser/analyzer */ "./node_modules/taipa/lib/dparser/analyzer.js");
exports.TonalInflectionAnalyzer = analyzer_2.TonalInflectionAnalyzer;
exports.PhrasalInflectionAnalyzer = analyzer_2.PhrasalInflectionAnalyzer;
var analyzer_3 = __webpack_require__(/*! ./kana/analyzer */ "./node_modules/taipa/lib/kana/analyzer.js");
exports.KanaAnalyzer = analyzer_3.KanaAnalyzer;
var lexeme_1 = __webpack_require__(/*! ./dparser/lexeme */ "./node_modules/taipa/lib/dparser/lexeme.js");
exports.TonalDesinenceInflection = lexeme_1.TonalDesinenceInflection;
exports.TransfixInflection = lexeme_1.TransfixInflection;
exports.RegressiveAssimilation = lexeme_1.RegressiveAssimilation;
var morpheme_1 = __webpack_require__(/*! ./dparser/morpheme */ "./node_modules/taipa/lib/dparser/morpheme.js");
exports.TonalCombiningForms = morpheme_1.TonalCombiningForms;
exports.ThirdCombiningForm = morpheme_1.ThirdCombiningForm;
exports.AssimilatedFinalForm = morpheme_1.AssimilatedFinalForm;
var phraseme_1 = __webpack_require__(/*! ./dparser/phraseme */ "./node_modules/taipa/lib/dparser/phraseme.js");
exports.Adnominal = phraseme_1.Adnominal;
exports.Assimilation = phraseme_1.Assimilation;
var grapheme_1 = __webpack_require__(/*! ./grapheme */ "./node_modules/taipa/lib/grapheme.js");
exports.Sound = grapheme_1.Sound;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/kana/analyzer.js":
/*!*************************************************!*\
  !*** ./node_modules/taipa/lib/kana/analyzer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/kana/morpheme.js");
const kana_1 = __webpack_require__(/*! ./kana */ "./node_modules/taipa/lib/kana/kana.js");
const analyzer_1 = __webpack_require__(/*! ../analyzer */ "./node_modules/taipa/lib/analyzer.js");
const morpheme_2 = __webpack_require__(/*! ../morpheme */ "./node_modules/taipa/lib/morpheme.js");
//------------------------------------------------------------------------------
class KanaAnalyzer extends analyzer_1.Analyzer {
    graphAnalyze(str) {
        // graphemic analysis
        const gm = new grapheme_1.GraphemeMaker(kana_1.lowerLettersOfKana);
        return gm.makeGraphemes(str);
    }
    morphAnalyze(x) {
        // morphological analysis
        let graphemes = [];
        if (typeof x == 'object') {
            graphemes = x;
        }
        else if (typeof x == 'string') {
            graphemes = this.graphAnalyze(x);
        }
        const mm = new morpheme_1.KanaUncombiningMorphemeMaker(new morpheme_2.KanaCombiningMetaplasm());
        return mm.makeInputingMorphemes(graphemes);
    }
}
exports.KanaAnalyzer = KanaAnalyzer;
//# sourceMappingURL=analyzer.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/kana/init.js":
/*!*********************************************!*\
  !*** ./node_modules/taipa/lib/kana/init.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const kana_1 = __webpack_require__(/*! ./kana */ "./node_modules/taipa/lib/kana/kana.js");
function checkLetterSizeKana() {
    if (kana_1.kanaPositionalSound.size !== kana_1.lowerLettersOfKana.size) {
        console.log('sizes unmatched');
    }
}
exports.checkLetterSizeKana = checkLetterSizeKana;
function checkChouon(previousLetter, nextLetter) {
    if (previousLetter === nextLetter)
        return true;
    if (previousLetter === 'e' && nextLetter === 'i')
        return true;
    if (previousLetter === 'o' && nextLetter === 'u')
        return true;
    return false;
}
function lookup(str) {
    let results = kana_1.hiragana_katakana.get(str);
    if (results == undefined) {
        results = kana_1.gailaigo.get(str);
    }
    return results;
}
function getKanaBlocks(ms) {
    // string one is hiragana, string two is katakana, string 3 is chouon
    let kana_compositions = ['', '', ''];
    let previous = '';
    for (let e of ms) {
        let ks = lookup(e.syllable.literal);
        if (ks != undefined && ks[0] != undefined) {
            // in case the kana is absent, we check against ks[0]
            kana_compositions[0] += ks[0];
            kana_compositions[1] += ks[1];
            if (previous.length > 0 &&
                checkChouon(previous[previous.length - 1], e.syllable.literal[e.syllable.literal.length - 1]) &&
                new kana_1.SetOfInitialConsonants().beginWith(e.syllable.literal) == false &&
                e.syllable.literal.length == 1) {
                // a vowel does not begin with a consonant and is of length 1
                // a vowel follows a previous vowel
                kana_compositions[2] += 'ー';
            }
            else {
                kana_compositions[2] += ks[1];
            }
        }
        else if (new kana_1.SetOfFinalConsonants().beginWith(e.syllable.literal[e.syllable.literal.length - 1]) == true) {
            ks = lookup(e.syllable.literal.substring(0, e.syllable.literal.length - 1));
            if (ks != undefined && ks[0] != undefined) {
                kana_compositions[0] += ks[0];
                kana_compositions[1] += ks[1];
                kana_compositions[2] += ks[1];
            }
            if (new kana_1.Hatsuon().beginWith(e.syllable.literal[e.syllable.literal.length - 1])) {
                ks = kana_1.hatsuon.get('n');
                if (ks) {
                    kana_compositions[0] += ks[0];
                    kana_compositions[1] += ks[1];
                    kana_compositions[2] += ks[1];
                }
            }
            else {
                ks = kana_1.kogakimoji.get('chu');
                if (ks) {
                    kana_compositions[0] += ks[0];
                    kana_compositions[1] += ks[1];
                    kana_compositions[2] += ks[1];
                }
            }
        }
        else {
            let first = e.syllable.literal[0];
            let second = e.syllable.literal[1];
            if (first === second && new kana_1.SetOfGerminatedConsonants().beginWith(first) == true) {
                ks = kana_1.kogakimoji.get('chu');
                if (ks) {
                    kana_compositions[0] += ks[0];
                    kana_compositions[1] += ks[1];
                    kana_compositions[2] += ks[1];
                }
                ks = kana_1.hiragana_katakana.get(e.syllable.literal.substring(1, e.syllable.literal.length));
                if (ks) {
                    kana_compositions[0] += ks[0];
                    kana_compositions[1] += ks[1];
                    kana_compositions[2] += ks[1];
                }
            }
        }
        previous = e.syllable.literal;
    }
    // remove duplicates
    if (kana_compositions[1] === kana_compositions[2])
        kana_compositions[2] = '';
    return kana_compositions;
}
exports.getKanaBlocks = getKanaBlocks;
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/kana/kana.js":
/*!*********************************************!*\
  !*** ./node_modules/taipa/lib/kana/kana.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
//------------------------------------------------------------------------------
var KanaLetterTags;
(function (KanaLetterTags) {
    KanaLetterTags["a"] = "a";
    KanaLetterTags["e"] = "e";
    KanaLetterTags["i"] = "i";
    KanaLetterTags["o"] = "o";
    KanaLetterTags["u"] = "u";
    KanaLetterTags["b"] = "b";
    KanaLetterTags["c"] = "c";
    KanaLetterTags["ch"] = "ch";
    KanaLetterTags["d"] = "d";
    KanaLetterTags["f"] = "f";
    KanaLetterTags["g"] = "g";
    KanaLetterTags["h"] = "h";
    KanaLetterTags["j"] = "j";
    KanaLetterTags["k"] = "k";
    KanaLetterTags["l"] = "l";
    KanaLetterTags["m"] = "m";
    KanaLetterTags["r"] = "r";
    KanaLetterTags["s"] = "s";
    KanaLetterTags["v"] = "v";
    KanaLetterTags["z"] = "z";
    KanaLetterTags["p"] = "p";
    KanaLetterTags["t"] = "t";
    KanaLetterTags["w"] = "w";
    KanaLetterTags["y"] = "y";
    KanaLetterTags["n"] = "n";
    KanaLetterTags["ng"] = "ng";
})(KanaLetterTags || (KanaLetterTags = {}));
class LettersOfKana extends grapheme_1.Letters {
}
exports.LettersOfKana = LettersOfKana;
exports.lowerLettersOfKana = new LettersOfKana([
    KanaLetterTags.a,
    KanaLetterTags.e,
    KanaLetterTags.i,
    KanaLetterTags.o,
    KanaLetterTags.u,
    KanaLetterTags.b,
    KanaLetterTags.c,
    KanaLetterTags.ch,
    KanaLetterTags.d,
    KanaLetterTags.f,
    KanaLetterTags.g,
    KanaLetterTags.h,
    KanaLetterTags.j,
    KanaLetterTags.k,
    KanaLetterTags.l,
    KanaLetterTags.m,
    KanaLetterTags.r,
    KanaLetterTags.s,
    KanaLetterTags.v,
    KanaLetterTags.z,
    KanaLetterTags.p,
    KanaLetterTags.t,
    KanaLetterTags.w,
    KanaLetterTags.y,
    KanaLetterTags.n,
    KanaLetterTags.ng,
]);
//------------------------------------------------------------------------------
var KanaSoundTags;
(function (KanaSoundTags) {
    KanaSoundTags["germinatedConsonant"] = "germinatedConsonant";
    KanaSoundTags["initialConsonant"] = "initialConsonant";
    KanaSoundTags["semivowel"] = "semivowel";
    KanaSoundTags["vowel"] = "vowel";
    KanaSoundTags["finalConsonant"] = "finalConsonant";
})(KanaSoundTags = exports.KanaSoundTags || (exports.KanaSoundTags = {}));
class GerminatedConsonant extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.germinatedConsonant;
    }
}
class InitialConsonant extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.initialConsonant;
    }
}
class Semivowel extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.semivowel;
    }
}
class Vowel extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.vowel;
    }
}
class FinalConsonant extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.finalConsonant;
    }
}
class InitialConsonantB extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.b);
    }
}
class InitialConsonantC extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.c);
    }
}
class InitialConsonantCH extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.ch);
    }
}
class InitialConsonantD extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.d);
    }
}
class InitialConsonantF extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.f);
    }
}
class InitialConsonantG extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.g);
    }
}
class InitialConsonantH extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.h);
    }
}
class InitialConsonantJ extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.j);
    }
}
class InitialConsonantK extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.k);
    }
}
class InitialConsonantL extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.l);
    }
}
class InitialConsonantM extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.m);
    }
}
class InitialConsonantN extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.n);
    }
}
class InitialConsonantNG extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.ng);
    }
}
class InitialConsonantP extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.p);
    }
}
class InitialConsonantR extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.r);
    }
}
class InitialConsonantS extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.s);
    }
}
class InitialConsonantT extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.t);
    }
}
class InitialConsonantV extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.v);
    }
}
class InitialConsonantW extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.w);
    }
}
class InitialConsonantY extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.y);
    }
}
class InitialConsonantZ extends InitialConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.z);
    }
}
class SemivowelW extends Semivowel {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.w);
    }
}
class SemivowelY extends Semivowel {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.y);
    }
}
class VowelA extends Vowel {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.a);
    }
}
class VowelE extends Vowel {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.e);
    }
}
class VowelI extends Vowel {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.i);
    }
}
class VowelO extends Vowel {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.o);
    }
}
class VowelU extends Vowel {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.u);
    }
}
class FinalConsonantB extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.b);
    }
}
class FinalConsonantD extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.d);
    }
}
class FinalConsonantG extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.g);
    }
}
class FinalConsonantK extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.k);
    }
}
class FinalConsonantH extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.h);
    }
}
class FinalConsonantN extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.n);
    }
}
class FinalConsonantP extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.p);
    }
}
class FinalConsonantS extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.s);
    }
}
class FinalConsonantT extends FinalConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.t);
    }
}
class GerminatedConsonantB extends GerminatedConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.b);
    }
}
class GerminatedConsonantC extends GerminatedConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.c);
    }
}
class GerminatedConsonantD extends GerminatedConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.d);
    }
}
class GerminatedConsonantG extends GerminatedConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.g);
    }
}
class GerminatedConsonantK extends GerminatedConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.k);
    }
}
class GerminatedConsonantP extends GerminatedConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.p);
    }
}
class GerminatedConsonantS extends GerminatedConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.s);
    }
}
class GerminatedConsonantT extends GerminatedConsonant {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(KanaLetterTags.t);
    }
}
class SetOfInitialConsonants extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new InitialConsonantB());
        this.sounds.push(new InitialConsonantC());
        this.sounds.push(new InitialConsonantCH());
        this.sounds.push(new InitialConsonantD());
        this.sounds.push(new InitialConsonantF());
        this.sounds.push(new InitialConsonantG());
        this.sounds.push(new InitialConsonantH());
        this.sounds.push(new InitialConsonantJ());
        this.sounds.push(new InitialConsonantK());
        this.sounds.push(new InitialConsonantL());
        this.sounds.push(new InitialConsonantM());
        this.sounds.push(new InitialConsonantN());
        this.sounds.push(new InitialConsonantNG());
        this.sounds.push(new InitialConsonantP());
        this.sounds.push(new InitialConsonantR());
        this.sounds.push(new InitialConsonantS());
        this.sounds.push(new InitialConsonantT());
        this.sounds.push(new InitialConsonantV());
        this.sounds.push(new InitialConsonantW());
        this.sounds.push(new InitialConsonantY());
        this.sounds.push(new InitialConsonantZ());
    }
}
exports.SetOfInitialConsonants = SetOfInitialConsonants;
class SetOfVowels extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new VowelA());
        this.sounds.push(new VowelI());
        this.sounds.push(new VowelU());
        this.sounds.push(new VowelE());
        this.sounds.push(new VowelO());
    }
}
exports.SetOfVowels = SetOfVowels;
class SetOfGerminatedConsonants extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new GerminatedConsonantB());
        this.sounds.push(new GerminatedConsonantC());
        this.sounds.push(new GerminatedConsonantD());
        this.sounds.push(new GerminatedConsonantG());
        this.sounds.push(new GerminatedConsonantK());
        this.sounds.push(new GerminatedConsonantP());
        this.sounds.push(new GerminatedConsonantS());
        this.sounds.push(new GerminatedConsonantT());
    }
}
exports.SetOfGerminatedConsonants = SetOfGerminatedConsonants;
class SetOfSemivowels extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new SemivowelW());
        this.sounds.push(new SemivowelY());
    }
}
exports.SetOfSemivowels = SetOfSemivowels;
class SetOfFinalConsonants extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalConsonantB());
        this.sounds.push(new FinalConsonantD());
        this.sounds.push(new FinalConsonantG());
        this.sounds.push(new FinalConsonantK());
        this.sounds.push(new FinalConsonantN());
        this.sounds.push(new FinalConsonantP());
        this.sounds.push(new FinalConsonantS());
        this.sounds.push(new FinalConsonantT());
    }
}
exports.SetOfFinalConsonants = SetOfFinalConsonants;
class Hatsuon extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalConsonantN());
    }
}
exports.Hatsuon = Hatsuon;
//------------------------------------------------------------------------------
function positionalSound(sounds) {
    return (t) => {
        for (let i in sounds) {
            if (sounds[i].name === t)
                return sounds[i];
        }
        return new grapheme_1.Sound();
    };
}
exports.positionalSound = positionalSound;
const ps_a = positionalSound([new VowelA()]);
const ps_b = positionalSound([new InitialConsonantB(), new FinalConsonantB(), new GerminatedConsonantB()]);
const ps_c = positionalSound([new InitialConsonantC(), new GerminatedConsonantC()]);
const ps_ch = positionalSound([new InitialConsonantCH()]);
const ps_d = positionalSound([new InitialConsonantD(), new FinalConsonantD(), new GerminatedConsonantD()]);
const ps_e = positionalSound([new VowelE()]);
const ps_f = positionalSound([new InitialConsonantF()]);
const ps_g = positionalSound([new InitialConsonantG(), new FinalConsonantG(), new GerminatedConsonantG()]);
const ps_h = positionalSound([new InitialConsonantH()]);
const ps_i = positionalSound([new VowelI()]);
const ps_j = positionalSound([new InitialConsonantJ()]);
const ps_k = positionalSound([new InitialConsonantK(), new FinalConsonantK(), new GerminatedConsonantK()]);
const ps_l = positionalSound([new InitialConsonantL()]);
const ps_m = positionalSound([new InitialConsonantM()]);
const ps_n = positionalSound([new InitialConsonantN(), new FinalConsonantN()]);
const ps_ng = positionalSound([new InitialConsonantNG()]);
const ps_o = positionalSound([new VowelO()]);
const ps_p = positionalSound([new InitialConsonantP(), new FinalConsonantP(), new GerminatedConsonantP()]);
const ps_r = positionalSound([new InitialConsonantR()]);
const ps_s = positionalSound([new InitialConsonantS(), new FinalConsonantS(), new GerminatedConsonantS()]);
const ps_t = positionalSound([new InitialConsonantT(), new FinalConsonantT(), new GerminatedConsonantT()]);
const ps_u = positionalSound([new VowelU()]);
const ps_v = positionalSound([new InitialConsonantV()]);
const ps_w = positionalSound([new InitialConsonantW(), new SemivowelW()]);
const ps_y = positionalSound([new InitialConsonantY(), new SemivowelY()]);
const ps_z = positionalSound([new InitialConsonantZ()]);
//------------------------------------------------------------------------------
exports.kanaPositionalSound = new Map()
    .set(KanaLetterTags.a, ps_a)
    .set(KanaLetterTags.b, ps_b)
    .set(KanaLetterTags.c, ps_c)
    .set(KanaLetterTags.ch, ps_ch)
    .set(KanaLetterTags.d, ps_d)
    .set(KanaLetterTags.e, ps_e)
    .set(KanaLetterTags.f, ps_f)
    .set(KanaLetterTags.g, ps_g)
    .set(KanaLetterTags.h, ps_h)
    .set(KanaLetterTags.i, ps_i)
    .set(KanaLetterTags.j, ps_j)
    .set(KanaLetterTags.k, ps_k)
    .set(KanaLetterTags.l, ps_l)
    .set(KanaLetterTags.m, ps_m)
    .set(KanaLetterTags.n, ps_n)
    .set(KanaLetterTags.ng, ps_ng)
    .set(KanaLetterTags.o, ps_o)
    .set(KanaLetterTags.p, ps_p)
    .set(KanaLetterTags.r, ps_r)
    .set(KanaLetterTags.s, ps_s)
    .set(KanaLetterTags.t, ps_t)
    .set(KanaLetterTags.u, ps_u)
    .set(KanaLetterTags.v, ps_v)
    .set(KanaLetterTags.w, ps_w)
    .set(KanaLetterTags.y, ps_y)
    .set(KanaLetterTags.z, ps_z);
//------------------------------------------------------------------------------
exports.kogakimoji = new Map().set(KanaLetterTags.ch + KanaLetterTags.u, ['っ', 'ッ']);
exports.hatsuon = new Map().set(KanaLetterTags.n, ['ん', 'ン']);
exports.others = new Map()
    .set(KanaLetterTags.a, ['ぁ', 'ァ'])
    .set(KanaLetterTags.i, ['ぃ', 'ィ'])
    .set(KanaLetterTags.u, ['ぅ', 'ゥ'])
    .set(KanaLetterTags.e, ['ぇ', 'ェ'])
    .set(KanaLetterTags.o, ['ぉ', 'ォ'])
    .set(KanaLetterTags.h + KanaLetterTags.a, ['', 'ㇵ'])
    .set(KanaLetterTags.h + KanaLetterTags.i, ['', 'ㇶ'])
    .set(KanaLetterTags.f + KanaLetterTags.u, ['', 'ㇷ'])
    .set(KanaLetterTags.h + KanaLetterTags.e, ['', 'ㇸ'])
    .set(KanaLetterTags.h + KanaLetterTags.o, ['', 'ㇹ'])
    .set(KanaLetterTags.k + KanaLetterTags.a, ['ゕ', 'ヵ'])
    .set(KanaLetterTags.k + KanaLetterTags.e, ['ゖ', 'ヶ'])
    .set(KanaLetterTags.k + KanaLetterTags.u, ['', 'ㇰ'])
    .set(KanaLetterTags.r + KanaLetterTags.a, ['', 'ㇻ'])
    .set(KanaLetterTags.r + KanaLetterTags.i, ['', 'ㇼ'])
    .set(KanaLetterTags.r + KanaLetterTags.u, ['', 'ㇽ'])
    .set(KanaLetterTags.r + KanaLetterTags.e, ['', 'ㇾ'])
    .set(KanaLetterTags.r + KanaLetterTags.o, ['', 'ㇿ'])
    .set(KanaLetterTags.m + KanaLetterTags.u, ['', 'ㇺ'])
    .set(KanaLetterTags.n + KanaLetterTags.u, ['', 'ㇴ'])
    .set(KanaLetterTags.p + KanaLetterTags.u, ['', 'ㇷ゚'])
    .set(KanaLetterTags.s + KanaLetterTags.i, ['', 'ㇱ'])
    .set(KanaLetterTags.s + KanaLetterTags.u, ['', 'ㇲ'])
    .set(KanaLetterTags.t + KanaLetterTags.o, ['', 'ㇳ'])
    .set(KanaLetterTags.y + KanaLetterTags.a, ['ゃ', 'ャ'])
    .set(KanaLetterTags.y + KanaLetterTags.u, ['ゅ', 'ュ'])
    .set(KanaLetterTags.y + KanaLetterTags.o, ['ょ', 'ョ'])
    .set(KanaLetterTags.w + KanaLetterTags.a, ['ゎ', 'ヮ']);
exports.hiragana_katakana = new Map()
    .set(KanaLetterTags.a, ['あ', 'ア'])
    .set(KanaLetterTags.i, ['い', 'イ'])
    .set(KanaLetterTags.u, ['う', 'ウ'])
    .set(KanaLetterTags.e, ['え', 'エ'])
    .set(KanaLetterTags.o, ['お', 'オ'])
    .set(KanaLetterTags.k + KanaLetterTags.a, ['か', 'カ'])
    .set(KanaLetterTags.k + KanaLetterTags.i, ['き', 'キ'])
    .set(KanaLetterTags.k + KanaLetterTags.u, ['く', 'ク'])
    .set(KanaLetterTags.k + KanaLetterTags.e, ['け', 'ケ'])
    .set(KanaLetterTags.k + KanaLetterTags.o, ['こ', 'コ'])
    .set(KanaLetterTags.s + KanaLetterTags.a, ['さ', 'サ'])
    .set(KanaLetterTags.s + KanaLetterTags.i, ['し', 'シ'])
    .set(KanaLetterTags.s + KanaLetterTags.u, ['す', 'ス'])
    .set(KanaLetterTags.s + KanaLetterTags.e, ['せ', 'セ'])
    .set(KanaLetterTags.s + KanaLetterTags.o, ['そ', 'ソ'])
    .set(KanaLetterTags.t + KanaLetterTags.a, ['た', 'タ'])
    .set(KanaLetterTags.c + KanaLetterTags.i, ['ち', 'チ'])
    .set(KanaLetterTags.ch + KanaLetterTags.u, ['つ', 'ツ'])
    .set(KanaLetterTags.t + KanaLetterTags.e, ['て', 'テ'])
    .set(KanaLetterTags.t + KanaLetterTags.o, ['と', 'ト'])
    .set(KanaLetterTags.n + KanaLetterTags.a, ['な', 'ナ'])
    .set(KanaLetterTags.n + KanaLetterTags.i, ['に', 'ニ'])
    .set(KanaLetterTags.n + KanaLetterTags.u, ['ぬ', 'ヌ'])
    .set(KanaLetterTags.n + KanaLetterTags.e, ['ね', 'ネ'])
    .set(KanaLetterTags.n + KanaLetterTags.o, ['の', 'ノ'])
    .set(KanaLetterTags.h + KanaLetterTags.a, ['は', 'ハ'])
    .set(KanaLetterTags.h + KanaLetterTags.i, ['ひ', 'ヒ'])
    .set(KanaLetterTags.f + KanaLetterTags.u, ['ふ', 'フ'])
    .set(KanaLetterTags.h + KanaLetterTags.e, ['へ', 'ヘ'])
    .set(KanaLetterTags.h + KanaLetterTags.o, ['ほ', 'ホ'])
    .set(KanaLetterTags.m + KanaLetterTags.a, ['ま', 'マ'])
    .set(KanaLetterTags.m + KanaLetterTags.i, ['み', 'ミ'])
    .set(KanaLetterTags.m + KanaLetterTags.u, ['む', 'ム'])
    .set(KanaLetterTags.m + KanaLetterTags.e, ['め', 'メ'])
    .set(KanaLetterTags.m + KanaLetterTags.o, ['も', 'モ'])
    .set(KanaLetterTags.y + KanaLetterTags.a, ['や', 'ヤ'])
    .set(KanaLetterTags.y + KanaLetterTags.u, ['ゆ', 'ユ'])
    .set(KanaLetterTags.y + KanaLetterTags.o, ['よ', 'ヨ'])
    .set(KanaLetterTags.r + KanaLetterTags.a, ['ら', 'ラ'])
    .set(KanaLetterTags.r + KanaLetterTags.i, ['り', 'リ'])
    .set(KanaLetterTags.r + KanaLetterTags.u, ['る', 'ル'])
    .set(KanaLetterTags.r + KanaLetterTags.e, ['れ', 'レ'])
    .set(KanaLetterTags.r + KanaLetterTags.o, ['ろ', 'ロ'])
    .set(KanaLetterTags.w + KanaLetterTags.a, ['わ', 'ワ'])
    .set(KanaLetterTags.w + KanaLetterTags.i, ['ゐ', 'ヰ'])
    .set(KanaLetterTags.w + KanaLetterTags.e, ['ゑ', 'ヱ'])
    .set(KanaLetterTags.w + KanaLetterTags.o, ['を', 'ヲ'])
    .set(KanaLetterTags.g + KanaLetterTags.a, ['が', 'ガ'])
    .set(KanaLetterTags.g + KanaLetterTags.i, ['ぎ', 'ギ'])
    .set(KanaLetterTags.g + KanaLetterTags.u, ['ぐ', 'グ'])
    .set(KanaLetterTags.g + KanaLetterTags.e, ['げ', 'ゲ'])
    .set(KanaLetterTags.g + KanaLetterTags.o, ['ご', 'ゴ'])
    .set(KanaLetterTags.z + KanaLetterTags.a, ['ざ', 'ザ'])
    .set(KanaLetterTags.j + KanaLetterTags.i, ['じ', 'ジ'])
    .set(KanaLetterTags.z + KanaLetterTags.u, ['ず', 'ズ'])
    .set(KanaLetterTags.z + KanaLetterTags.e, ['ぜ', 'ゼ'])
    .set(KanaLetterTags.z + KanaLetterTags.o, ['ぞ', 'ゾ'])
    .set(KanaLetterTags.d + KanaLetterTags.a, ['だ', 'ダ'])
    .set(KanaLetterTags.d + KanaLetterTags.e, ['で', 'デ'])
    .set(KanaLetterTags.d + KanaLetterTags.o, ['ど', 'ド'])
    .set(KanaLetterTags.b + KanaLetterTags.a, ['ば', 'バ'])
    .set(KanaLetterTags.b + KanaLetterTags.i, ['び', 'ビ'])
    .set(KanaLetterTags.b + KanaLetterTags.u, ['ぶ', 'ブ'])
    .set(KanaLetterTags.b + KanaLetterTags.e, ['べ', 'ベ'])
    .set(KanaLetterTags.b + KanaLetterTags.o, ['ぼ', 'ボ'])
    .set(KanaLetterTags.p + KanaLetterTags.a, ['ぱ', 'パ'])
    .set(KanaLetterTags.p + KanaLetterTags.i, ['ぴ', 'ピ'])
    .set(KanaLetterTags.p + KanaLetterTags.u, ['ぷ', 'プ'])
    .set(KanaLetterTags.p + KanaLetterTags.e, ['ぺ', 'ペ'])
    .set(KanaLetterTags.p + KanaLetterTags.o, ['ぽ', 'ポ'])
    .set(KanaLetterTags.k + KanaLetterTags.y + KanaLetterTags.a, ['きゃ', 'キャ'])
    .set(KanaLetterTags.k + KanaLetterTags.y + KanaLetterTags.u, ['きゅ', 'キュ'])
    .set(KanaLetterTags.k + KanaLetterTags.y + KanaLetterTags.o, ['きょ', 'キョ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.a, ['しゃ', 'シャ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.u, ['しゅ', 'シュ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.o, ['しょ', 'ショ'])
    .set(KanaLetterTags.c + KanaLetterTags.y + KanaLetterTags.a, ['ちゃ', 'チャ'])
    .set(KanaLetterTags.c + KanaLetterTags.y + KanaLetterTags.u, ['ちゅ', 'チュ'])
    .set(KanaLetterTags.c + KanaLetterTags.y + KanaLetterTags.o, ['ちょ', 'チョ'])
    .set(KanaLetterTags.n + KanaLetterTags.y + KanaLetterTags.a, ['にゃ', 'ニャ'])
    .set(KanaLetterTags.n + KanaLetterTags.y + KanaLetterTags.u, ['にゅ', 'ニュ'])
    .set(KanaLetterTags.n + KanaLetterTags.y + KanaLetterTags.o, ['にょ', 'ニョ'])
    .set(KanaLetterTags.h + KanaLetterTags.y + KanaLetterTags.a, ['ひゃ', 'ヒャ'])
    .set(KanaLetterTags.h + KanaLetterTags.y + KanaLetterTags.u, ['ひゅ', 'ヒュ'])
    .set(KanaLetterTags.h + KanaLetterTags.y + KanaLetterTags.o, ['ひょ', 'ヒョ'])
    .set(KanaLetterTags.m + KanaLetterTags.y + KanaLetterTags.a, ['みゃ', 'ミャ'])
    .set(KanaLetterTags.m + KanaLetterTags.y + KanaLetterTags.u, ['みゅ', 'みょ'])
    .set(KanaLetterTags.m + KanaLetterTags.y + KanaLetterTags.o, ['ミュ', 'ミョ'])
    .set(KanaLetterTags.r + KanaLetterTags.y + KanaLetterTags.a, ['りゃ', 'リャ'])
    .set(KanaLetterTags.r + KanaLetterTags.y + KanaLetterTags.u, ['りゅ', 'リュ'])
    .set(KanaLetterTags.r + KanaLetterTags.y + KanaLetterTags.o, ['りょ', 'リョ'])
    .set(KanaLetterTags.g + KanaLetterTags.y + KanaLetterTags.a, ['ぎゃ', 'ギャ'])
    .set(KanaLetterTags.g + KanaLetterTags.y + KanaLetterTags.u, ['ぎゅ', 'ギュ'])
    .set(KanaLetterTags.g + KanaLetterTags.y + KanaLetterTags.o, ['ぎょ', 'ギョ'])
    .set(KanaLetterTags.j + KanaLetterTags.a, ['じゃ', 'ジャ'])
    .set(KanaLetterTags.j + KanaLetterTags.u, ['じゅ', 'ジュ'])
    .set(KanaLetterTags.j + KanaLetterTags.o, ['じょ', 'ジョ'])
    .set(KanaLetterTags.j + KanaLetterTags.y + KanaLetterTags.a, ['ぢゃ', 'ヂャ'])
    .set(KanaLetterTags.j + KanaLetterTags.y + KanaLetterTags.u, ['ぢ゙ゅ', 'ヂュ'])
    .set(KanaLetterTags.j + KanaLetterTags.y + KanaLetterTags.o, ['ぢ゙ょ', 'ヂョ'])
    .set(KanaLetterTags.b + KanaLetterTags.y + KanaLetterTags.a, ['びゃ', 'ビャ'])
    .set(KanaLetterTags.b + KanaLetterTags.y + KanaLetterTags.u, ['びゅ', 'ビュ'])
    .set(KanaLetterTags.b + KanaLetterTags.y + KanaLetterTags.o, ['びょ', 'ビョ'])
    .set(KanaLetterTags.p + KanaLetterTags.y + KanaLetterTags.a, ['ぴゃ', 'ピャ'])
    .set(KanaLetterTags.p + KanaLetterTags.y + KanaLetterTags.u, ['ぴゅ', 'ピュ'])
    .set(KanaLetterTags.p + KanaLetterTags.y + KanaLetterTags.o, ['ぴょ', 'ピョ']);
exports.gailaigo = new Map()
    .set(KanaLetterTags.s + KanaLetterTags.i, ['', 'スィ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.e, ['', 'シェ'])
    .set(KanaLetterTags.z + KanaLetterTags.i, ['', 'ズィ'])
    .set(KanaLetterTags.j + KanaLetterTags.e, ['', 'ジェ'])
    .set(KanaLetterTags.j + KanaLetterTags.w + KanaLetterTags.a, ['', 'ジュァ'])
    .set(KanaLetterTags.j + KanaLetterTags.w + KanaLetterTags.i, ['', 'ジュィ'])
    .set(KanaLetterTags.j + KanaLetterTags.w + KanaLetterTags.e, ['', 'ジュェ'])
    .set(KanaLetterTags.j + KanaLetterTags.w + KanaLetterTags.o, ['', 'ジュォ'])
    .set(KanaLetterTags.t + KanaLetterTags.i, ['', 'ティ'])
    .set(KanaLetterTags.t + KanaLetterTags.u, ['', 'トゥ'])
    .set(KanaLetterTags.c + KanaLetterTags.y + KanaLetterTags.e, ['', 'チェ'])
    .set(KanaLetterTags.j + KanaLetterTags.y + KanaLetterTags.e, ['', 'ヂェ'])
    .set(KanaLetterTags.c + KanaLetterTags.w + KanaLetterTags.a, ['', 'チュァ'])
    .set(KanaLetterTags.c + KanaLetterTags.w + KanaLetterTags.i, ['', 'チュィ'])
    .set(KanaLetterTags.c + KanaLetterTags.w + KanaLetterTags.e, ['', 'チュェ'])
    .set(KanaLetterTags.c + KanaLetterTags.w + KanaLetterTags.o, ['', 'チュォ'])
    .set(KanaLetterTags.ch + KanaLetterTags.a, ['', 'ツァ'])
    .set(KanaLetterTags.ch + KanaLetterTags.i, ['', 'ツィ'])
    .set(KanaLetterTags.ch + KanaLetterTags.e, ['', 'ツェ'])
    .set(KanaLetterTags.ch + KanaLetterTags.o, ['', 'ツォ'])
    .set(KanaLetterTags.d + KanaLetterTags.i, ['', 'ディ'])
    .set(KanaLetterTags.d + KanaLetterTags.u, ['', 'ドゥ'])
    .set(KanaLetterTags.f + KanaLetterTags.a, ['', 'ファ'])
    .set(KanaLetterTags.f + KanaLetterTags.i, ['', 'フィ'])
    .set(KanaLetterTags.f + KanaLetterTags.e, ['', 'フェ'])
    .set(KanaLetterTags.f + KanaLetterTags.o, ['', 'フォ'])
    .set(KanaLetterTags.y + KanaLetterTags.i, ['', 'イィ'])
    .set(KanaLetterTags.y + KanaLetterTags.e, ['', 'イェ'])
    .set(KanaLetterTags.w + KanaLetterTags.a, ['', 'ウァ'])
    .set(KanaLetterTags.w + KanaLetterTags.a, ['', 'ウィ'])
    .set(KanaLetterTags.w + KanaLetterTags.a, ['', 'ウェ'])
    .set(KanaLetterTags.w + KanaLetterTags.a, ['', 'ウォ'])
    .set(KanaLetterTags.v + KanaLetterTags.a, ['', 'ヴァ'])
    .set(KanaLetterTags.v + KanaLetterTags.i, ['', 'ヴィ'])
    .set(KanaLetterTags.v + KanaLetterTags.u, ['', 'ヴ'])
    .set(KanaLetterTags.v + KanaLetterTags.e, ['', 'ヴェ'])
    .set(KanaLetterTags.v + KanaLetterTags.o, ['', 'ヴォ']);
exports.gailaigo_y = new Map()
    .set(KanaLetterTags.k + KanaLetterTags.y + KanaLetterTags.i, ['', 'キィ'])
    .set(KanaLetterTags.k + KanaLetterTags.y + KanaLetterTags.e, ['', 'キェ'])
    .set(KanaLetterTags.g + KanaLetterTags.y + KanaLetterTags.i, ['', 'ギィ'])
    .set(KanaLetterTags.g + KanaLetterTags.y + KanaLetterTags.e, ['', 'ギェ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.a, ['', 'スャ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.u, ['', 'スュ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.e, ['', 'スィェ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.o, ['', 'スョ'])
    .set(KanaLetterTags.z + KanaLetterTags.y + KanaLetterTags.a, ['', 'ズャ'])
    .set(KanaLetterTags.z + KanaLetterTags.y + KanaLetterTags.u, ['', 'ズュ'])
    .set(KanaLetterTags.z + KanaLetterTags.y + KanaLetterTags.e, ['', 'ズィェ'])
    .set(KanaLetterTags.z + KanaLetterTags.y + KanaLetterTags.o, ['', 'ズョ'])
    .set(KanaLetterTags.t + KanaLetterTags.y + KanaLetterTags.a, ['', 'テャ'])
    .set(KanaLetterTags.t + KanaLetterTags.y + KanaLetterTags.u, ['', 'テュ'])
    .set(KanaLetterTags.t + KanaLetterTags.y + KanaLetterTags.e, ['', 'ティェ'])
    .set(KanaLetterTags.t + KanaLetterTags.y + KanaLetterTags.o, ['', 'テョ'])
    .set(KanaLetterTags.d + KanaLetterTags.y + KanaLetterTags.a, ['', 'デャ'])
    .set(KanaLetterTags.d + KanaLetterTags.y + KanaLetterTags.u, ['', 'デュ'])
    .set(KanaLetterTags.d + KanaLetterTags.y + KanaLetterTags.e, ['', 'デェ', 'ディェ'])
    .set(KanaLetterTags.d + KanaLetterTags.y + KanaLetterTags.o, ['', 'デョ'])
    .set(KanaLetterTags.n + KanaLetterTags.y + KanaLetterTags.i, ['', 'ニィ'])
    .set(KanaLetterTags.n + KanaLetterTags.y + KanaLetterTags.e, ['', 'ニェ'])
    .set(KanaLetterTags.h + KanaLetterTags.y + KanaLetterTags.i, ['', 'ヒィ'])
    .set(KanaLetterTags.h + KanaLetterTags.y + KanaLetterTags.e, ['', 'ヒェ'])
    .set(KanaLetterTags.f + KanaLetterTags.y + KanaLetterTags.a, ['', 'フャ'])
    .set(KanaLetterTags.f + KanaLetterTags.y + KanaLetterTags.u, ['', 'フュ'])
    .set(KanaLetterTags.f + KanaLetterTags.y + KanaLetterTags.e, ['', 'フィェ'])
    .set(KanaLetterTags.f + KanaLetterTags.y + KanaLetterTags.o, ['', 'フョ'])
    .set(KanaLetterTags.b + KanaLetterTags.y + KanaLetterTags.e, ['', 'ビェ'])
    .set(KanaLetterTags.p + KanaLetterTags.y + KanaLetterTags.e, ['', 'ピェ'])
    .set(KanaLetterTags.m + KanaLetterTags.y + KanaLetterTags.i, ['', 'ミィ'])
    .set(KanaLetterTags.m + KanaLetterTags.y + KanaLetterTags.e, ['', 'ミェ'])
    .set(KanaLetterTags.r + KanaLetterTags.y + KanaLetterTags.i, ['', 'リィ'])
    .set(KanaLetterTags.r + KanaLetterTags.y + KanaLetterTags.e, ['', 'リェ'])
    .set(KanaLetterTags.w + KanaLetterTags.y + KanaLetterTags.a, ['', 'ウャ'])
    .set(KanaLetterTags.w + KanaLetterTags.y + KanaLetterTags.u, ['', 'ウュ'])
    .set(KanaLetterTags.w + KanaLetterTags.y + KanaLetterTags.o, ['', 'ウョ'])
    .set(KanaLetterTags.v + KanaLetterTags.y + KanaLetterTags.a, ['', 'ヴャ'])
    .set(KanaLetterTags.v + KanaLetterTags.y + KanaLetterTags.u, ['', 'ヴュ'])
    .set(KanaLetterTags.v + KanaLetterTags.y + KanaLetterTags.e, ['', 'ヴィェ'])
    .set(KanaLetterTags.v + KanaLetterTags.y + KanaLetterTags.o, ['', 'ヴョ']);
exports.gailaigo_w = new Map()
    .set(KanaLetterTags.k + KanaLetterTags.w + KanaLetterTags.a, ['', 'クァ'])
    .set(KanaLetterTags.k + KanaLetterTags.w + KanaLetterTags.i, ['', 'クィ'])
    .set(KanaLetterTags.k + KanaLetterTags.w + KanaLetterTags.u, ['', 'クゥ'])
    .set(KanaLetterTags.k + KanaLetterTags.w + KanaLetterTags.e, ['', 'クェ'])
    .set(KanaLetterTags.k + KanaLetterTags.w + KanaLetterTags.o, ['', 'クォ'])
    .set(KanaLetterTags.g + KanaLetterTags.w + KanaLetterTags.a, ['', 'グァ'])
    .set(KanaLetterTags.g + KanaLetterTags.w + KanaLetterTags.i, ['', 'グィ'])
    .set(KanaLetterTags.g + KanaLetterTags.w + KanaLetterTags.u, ['', 'グゥ'])
    .set(KanaLetterTags.g + KanaLetterTags.w + KanaLetterTags.e, ['', 'グェ'])
    .set(KanaLetterTags.g + KanaLetterTags.w + KanaLetterTags.o, ['', 'グォ'])
    .set(KanaLetterTags.s + KanaLetterTags.w + KanaLetterTags.a, ['', 'スァ'])
    .set(KanaLetterTags.s + KanaLetterTags.w + KanaLetterTags.i, ['', 'スゥィ'])
    .set(KanaLetterTags.s + KanaLetterTags.w + KanaLetterTags.e, ['', 'スェ'])
    .set(KanaLetterTags.s + KanaLetterTags.w + KanaLetterTags.o, ['', 'スォ'])
    .set(KanaLetterTags.z + KanaLetterTags.w + KanaLetterTags.e, ['', 'ズェ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.a, ['', 'トァ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.i, ['', 'トィ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.e, ['', 'トェ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.o, ['', 'トォ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.a, ['', 'ドァ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.i, ['', 'ドィ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.e, ['', 'ドェ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.o, ['', 'ドォ'])
    .set(KanaLetterTags.n + KanaLetterTags.w + KanaLetterTags.a, ['', 'ヌァ'])
    .set(KanaLetterTags.n + KanaLetterTags.w + KanaLetterTags.i, ['', 'ヌィ'])
    .set(KanaLetterTags.n + KanaLetterTags.w + KanaLetterTags.e, ['', 'ヌェ'])
    .set(KanaLetterTags.n + KanaLetterTags.w + KanaLetterTags.o, ['', 'ヌォ'])
    .set(KanaLetterTags.b + KanaLetterTags.w + KanaLetterTags.a, ['', 'ブァ'])
    .set(KanaLetterTags.b + KanaLetterTags.w + KanaLetterTags.i, ['', 'ブィ'])
    .set(KanaLetterTags.b + KanaLetterTags.w + KanaLetterTags.e, ['', 'ブェ'])
    .set(KanaLetterTags.b + KanaLetterTags.w + KanaLetterTags.o, ['', 'ブォ'])
    .set(KanaLetterTags.p + KanaLetterTags.w + KanaLetterTags.a, ['', 'プァ'])
    .set(KanaLetterTags.p + KanaLetterTags.w + KanaLetterTags.i, ['', 'プィ'])
    .set(KanaLetterTags.p + KanaLetterTags.w + KanaLetterTags.e, ['', 'プェ'])
    .set(KanaLetterTags.p + KanaLetterTags.w + KanaLetterTags.o, ['', 'プォ'])
    .set(KanaLetterTags.m + KanaLetterTags.w + KanaLetterTags.a, ['', 'ムァ'])
    .set(KanaLetterTags.m + KanaLetterTags.w + KanaLetterTags.i, ['', 'ムィ'])
    .set(KanaLetterTags.m + KanaLetterTags.w + KanaLetterTags.e, ['', 'ムェ'])
    .set(KanaLetterTags.m + KanaLetterTags.w + KanaLetterTags.o, ['', 'ムォ'])
    .set(KanaLetterTags.r + KanaLetterTags.w + KanaLetterTags.a, ['', 'ルァ'])
    .set(KanaLetterTags.r + KanaLetterTags.w + KanaLetterTags.i, ['', 'ルィ'])
    .set(KanaLetterTags.r + KanaLetterTags.w + KanaLetterTags.e, ['', 'ルェ'])
    .set(KanaLetterTags.r + KanaLetterTags.w + KanaLetterTags.o, ['', 'ルォ']);
exports.special = new Map()
    .set(KanaLetterTags.ng + KanaLetterTags.a, ['', 'カ゚'])
    .set(KanaLetterTags.ng + KanaLetterTags.i, ['', 'キ゚'])
    .set(KanaLetterTags.ng + KanaLetterTags.u, ['', 'ク゚'])
    .set(KanaLetterTags.ng + KanaLetterTags.e, ['', 'ケ゚'])
    .set(KanaLetterTags.ng + KanaLetterTags.o, ['', 'コ゚'])
    .set(KanaLetterTags.s + KanaLetterTags.i, ['', 'セィ'])
    .set(KanaLetterTags.z + KanaLetterTags.i, ['', 'ゼィ'])
    .set(KanaLetterTags.s + KanaLetterTags.y + KanaLetterTags.i, ['', 'シィ'])
    .set(KanaLetterTags.j + KanaLetterTags.i, ['', 'ジィ'])
    .set(KanaLetterTags.c + KanaLetterTags.y + KanaLetterTags.i, ['', 'チィ'])
    .set(KanaLetterTags.ch + KanaLetterTags.u, ['', 'ツゥ'])
    .set(KanaLetterTags.j + KanaLetterTags.y + KanaLetterTags.i, ['', 'ヂィ'])
    .set(KanaLetterTags.h + KanaLetterTags.u, ['', 'ホゥ'])
    .set(KanaLetterTags.f + KanaLetterTags.u, ['', 'フゥ'])
    .set(KanaLetterTags.y + KanaLetterTags.e, ['', 'ユェ'])
    .set(KanaLetterTags.l + KanaLetterTags.a, ['', 'ラ゚'])
    .set(KanaLetterTags.l + KanaLetterTags.i, ['', 'リ゚'])
    .set(KanaLetterTags.l + KanaLetterTags.u, ['', 'ル゚'])
    .set(KanaLetterTags.l + KanaLetterTags.e, ['', 'レ゚'])
    .set(KanaLetterTags.l + KanaLetterTags.o, ['', 'ロ゚'])
    .set(KanaLetterTags.w + KanaLetterTags.u, ['', 'ウゥ'])
    .set(KanaLetterTags.v + KanaLetterTags.a, ['', 'ヷ'])
    .set(KanaLetterTags.v + KanaLetterTags.i, ['', 'ヸ'])
    .set(KanaLetterTags.v + KanaLetterTags.e, ['', 'ヹ'])
    .set(KanaLetterTags.v + KanaLetterTags.o, ['', 'ヺ']);
exports.special_y = new Map()
    .set(KanaLetterTags.ng + KanaLetterTags.y + KanaLetterTags.a, ['', 'キ゚ャ'])
    .set(KanaLetterTags.ng + KanaLetterTags.y + KanaLetterTags.u, ['', 'キ゚ュ'])
    .set(KanaLetterTags.ng + KanaLetterTags.y + KanaLetterTags.o, ['', 'キ゚ョ'])
    .set(KanaLetterTags.t + KanaLetterTags.y + KanaLetterTags.e, ['', 'テェ'])
    .set(KanaLetterTags.ch + KanaLetterTags.y + KanaLetterTags.a, ['', 'ツャ'])
    .set(KanaLetterTags.ch + KanaLetterTags.y + KanaLetterTags.u, ['', 'ツュ'])
    .set(KanaLetterTags.ch + KanaLetterTags.y + KanaLetterTags.o, ['', 'ツョ'])
    .set(KanaLetterTags.b + KanaLetterTags.y + KanaLetterTags.i, ['', 'ビィ'])
    .set(KanaLetterTags.p + KanaLetterTags.y + KanaLetterTags.i, ['', 'ピィ'])
    .set(KanaLetterTags.l + KanaLetterTags.y + KanaLetterTags.a, ['', 'リ゚ャ'])
    .set(KanaLetterTags.l + KanaLetterTags.y + KanaLetterTags.u, ['', 'リ゚ュ'])
    .set(KanaLetterTags.l + KanaLetterTags.y + KanaLetterTags.o, ['', 'リ゚ョ'])
    .set(KanaLetterTags.w + KanaLetterTags.y + KanaLetterTags.a, ['', 'ヰャ'])
    .set(KanaLetterTags.w + KanaLetterTags.y + KanaLetterTags.u, ['', 'ヰュ'])
    .set(KanaLetterTags.w + KanaLetterTags.y + KanaLetterTags.o, ['', 'ヰョ']);
exports.special_w = new Map()
    .set(KanaLetterTags.k + KanaLetterTags.w + KanaLetterTags.a, ['', 'クヮ'])
    .set(KanaLetterTags.g + KanaLetterTags.w + KanaLetterTags.a, ['', 'グヮ'])
    .set(KanaLetterTags.s + KanaLetterTags.w + KanaLetterTags.u, ['', 'スゥ'])
    .set(KanaLetterTags.z + KanaLetterTags.w + KanaLetterTags.a, ['', 'ズァ'])
    .set(KanaLetterTags.z + KanaLetterTags.w + KanaLetterTags.i, ['', 'ズゥィ'])
    .set(KanaLetterTags.z + KanaLetterTags.w + KanaLetterTags.e, ['', 'ズゥ'])
    .set(KanaLetterTags.z + KanaLetterTags.w + KanaLetterTags.o, ['', 'ズォ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.a, ['', 'トゥァ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.i, ['', 'トゥィ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.u, ['', 'トゥゥ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.e, ['', 'トゥェ'])
    .set(KanaLetterTags.t + KanaLetterTags.w + KanaLetterTags.o, ['', 'トゥォ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.a, ['', 'ドゥァ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.i, ['', 'ドゥィ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.u, ['', 'ドゥゥ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.e, ['', 'ドゥェ'])
    .set(KanaLetterTags.d + KanaLetterTags.w + KanaLetterTags.o, ['', 'ドゥォ'])
    .set(KanaLetterTags.n + KanaLetterTags.w + KanaLetterTags.u, ['', 'ヌゥ'])
    .set(KanaLetterTags.h + KanaLetterTags.w + KanaLetterTags.a, ['', 'ホゥァ'])
    .set(KanaLetterTags.h + KanaLetterTags.w + KanaLetterTags.i, ['', 'ホゥィ'])
    .set(KanaLetterTags.h + KanaLetterTags.w + KanaLetterTags.u, ['', 'ホゥゥ'])
    .set(KanaLetterTags.h + KanaLetterTags.w + KanaLetterTags.e, ['', 'ホゥェ'])
    .set(KanaLetterTags.h + KanaLetterTags.w + KanaLetterTags.o, ['', 'ホゥォ'])
    .set(KanaLetterTags.b + KanaLetterTags.w + KanaLetterTags.u, ['', 'ブゥ'])
    .set(KanaLetterTags.p + KanaLetterTags.w + KanaLetterTags.u, ['', 'プゥ'])
    .set(KanaLetterTags.m + KanaLetterTags.w + KanaLetterTags.u, ['', 'ムゥ'])
    .set(KanaLetterTags.v + KanaLetterTags.w + KanaLetterTags.a, ['', 'ヴゥァ'])
    .set(KanaLetterTags.v + KanaLetterTags.w + KanaLetterTags.i, ['', 'ヴゥィ'])
    .set(KanaLetterTags.v + KanaLetterTags.w + KanaLetterTags.u, ['', 'ヴゥゥ'])
    .set(KanaLetterTags.v + KanaLetterTags.w + KanaLetterTags.e, ['', 'ヴゥェ'])
    .set(KanaLetterTags.v + KanaLetterTags.w + KanaLetterTags.o, ['', 'ヴゥォ']);
exports.special_h = new Map()
    .set(KanaLetterTags.t + KanaLetterTags.h + KanaLetterTags.a, ['', 'テァ'])
    .set(KanaLetterTags.t + KanaLetterTags.h + KanaLetterTags.u, ['', 'テゥ'])
    .set(KanaLetterTags.t + KanaLetterTags.h + KanaLetterTags.o, ['', 'テォ'])
    .set(KanaLetterTags.d + KanaLetterTags.h + KanaLetterTags.a, ['', 'デァ'])
    .set(KanaLetterTags.d + KanaLetterTags.h + KanaLetterTags.u, ['', 'デゥ'])
    .set(KanaLetterTags.d + KanaLetterTags.h + KanaLetterTags.o, ['', 'デォ']);
//# sourceMappingURL=kana.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/kana/morpheme.js":
/*!*************************************************!*\
  !*** ./node_modules/taipa/lib/kana/morpheme.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const morpheme_1 = __webpack_require__(/*! ../morpheme */ "./node_modules/taipa/lib/morpheme.js");
const morpheme_2 = __webpack_require__(/*! ../morpheme */ "./node_modules/taipa/lib/morpheme.js");
const kana_1 = __webpack_require__(/*! ./kana */ "./node_modules/taipa/lib/kana/kana.js");
const soundgen_1 = __webpack_require__(/*! ./soundgen */ "./node_modules/taipa/lib/kana/soundgen.js");
//------------------------------------------------------------------------------
class KanaSyllable extends morpheme_1.Syllable {
}
exports.KanaSyllable = KanaSyllable;
//------------------------------------------------------------------------------
class KanaUncombiningMorpheme extends morpheme_1.Morpheme {
    constructor(syllable, sounds, kcm) {
        super();
        this.syllable = syllable;
        this.metaplasm = kcm;
        this.sounds = new Array();
        this.sounds = sounds;
    }
}
exports.KanaUncombiningMorpheme = KanaUncombiningMorpheme;
//------------------------------------------------------------------------------
function syllabifyKana(letters, beginOfSyllable) {
    let literal = '';
    let matched = '';
    let lookahead = '';
    let ltrs = new Array();
    let matchedLtrs = new Array();
    const sov = new kana_1.SetOfVowels();
    for (let i = beginOfSyllable; i < letters.length; i++) {
        literal = literal + letters[i].literal;
        ltrs.push(letters[i].literal);
        if (kana_1.hiragana_katakana.has(literal) || kana_1.gailaigo.has(literal)) {
            matched = literal;
            Object.assign(matchedLtrs, ltrs);
            if (i + 1 < letters.length)
                lookahead = letters[i + 1].literal; // look-ahead
        }
        else {
            if (literal.length == 3 && literal[0] === literal[1] && sov.beginWith(literal[2])) {
                // for consonant germination of sokuon
                matched = literal;
                ltrs.shift(); // shift the germinated consonants
                Object.assign(matchedLtrs, ltrs);
            }
        }
    }
    let list = new Array();
    if (matched.length > 0) {
        //console.log(matchedLtrs, lookahead)
        const ksg = new soundgen_1.KanaSoundGenerator();
        list = ksg.generate(matchedLtrs, lookahead);
        // console.log(list)
    }
    let arraysOfLetters = new Array();
    let mp = new morpheme_1.MatchedPattern();
    let sounds = new Array();
    for (let m in list) {
        let min = Math.min(letters.length - beginOfSyllable, list[m].length);
        if (list[m].length == min) {
            for (let n = 0; n < min; n++) {
                if (list[m][n] != undefined) {
                    if (letters[beginOfSyllable + n].literal === list[m][n].toString()) {
                        if (n + 1 == min) {
                            // copy the matched letters
                            let arr = new Array();
                            for (let q = 0; q < min; q++) {
                                arr[q] = letters[beginOfSyllable + q];
                            }
                            arraysOfLetters.push(arr);
                            sounds = list[m];
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
    }
    if (arraysOfLetters.length == 1) {
        // only one matched
        // copy the matched letters
        for (let q = 0; q < arraysOfLetters[0].length; q++) {
            mp.letters[q] = letters[beginOfSyllable + q];
            mp.pattern[q] = sounds[q];
        }
        return mp;
    }
    if (arraysOfLetters.length > 1) {
        let longerEntry = -1; // length of the longest matched entry
        let shorterEntry = -1;
        let index = 0;
        for (let j = 0; j < arraysOfLetters.length; j++) {
            if (arraysOfLetters[j].length > arraysOfLetters[index].length) {
                index = j;
            }
        }
        if (index > 0) {
            longerEntry = index;
            shorterEntry = 0;
        }
        else {
            longerEntry = 0;
            shorterEntry = 1;
        }
        if (letters.length - beginOfSyllable == arraysOfLetters[longerEntry].length) {
            if (new kana_1.Hatsuon().beginWith(arraysOfLetters[longerEntry][arraysOfLetters[longerEntry].length - 1].literal)) {
                // return the longer one
                for (let q = 0; q < arraysOfLetters[longerEntry].length; q++) {
                    mp.letters[q] = letters[beginOfSyllable + q];
                    mp.pattern[q] = sounds[q];
                }
                return mp;
            }
            // return the shorter one
            for (let q = 0; q < arraysOfLetters[shorterEntry].length; q++) {
                mp.letters[q] = letters[beginOfSyllable + q];
                mp.pattern[q] = sounds[q];
            }
            return mp;
        }
        // look ahead for 1 letter
        if (letters.length - beginOfSyllable == arraysOfLetters[longerEntry].length + 1) {
            if (new kana_1.SetOfInitialConsonants().beginWith(letters[beginOfSyllable + arraysOfLetters[longerEntry].length].literal) == true) {
                // consonant-ending
                // return the longer one
                for (let q = 0; q < arraysOfLetters[longerEntry].length; q++) {
                    mp.letters[q] = letters[beginOfSyllable + q];
                    mp.pattern[q] = sounds[q];
                }
            }
            else {
                // vowel ending
                // return the shorter one
                for (let q = 0; q < arraysOfLetters[shorterEntry].length; q++) {
                    mp.letters[q] = letters[beginOfSyllable + q];
                    mp.pattern[q] = sounds[q];
                }
            }
            return mp;
        }
        // look ahead for 2 letters
        if (letters.length - beginOfSyllable > arraysOfLetters[longerEntry].length + 1) {
            if (new kana_1.SetOfVowels().beginWith(letters[beginOfSyllable + arraysOfLetters[longerEntry].length].literal) ==
                true ||
                new kana_1.SetOfSemivowels().beginWith(letters[beginOfSyllable + arraysOfLetters[longerEntry].length].literal) == true) {
                // return the shorter one
                for (let q = 0; q < arraysOfLetters[shorterEntry].length; q++) {
                    mp.letters[q] = letters[beginOfSyllable + q];
                    mp.pattern[q] = sounds[q];
                }
                return mp;
            }
            // return the longer one
            for (let q = 0; q < arraysOfLetters[longerEntry].length; q++) {
                mp.letters[q] = letters[beginOfSyllable + q];
                mp.pattern[q] = sounds[q];
            }
        }
    }
    return mp;
}
//------------------------------------------------------------------------------
class KanaUncombiningMorphemeMaker extends morpheme_2.MorphemeMaker {
    constructor(kcm) {
        super();
        this.metaplasm = kcm;
    }
    createMorphemes() {
        return new Array();
    }
    createMorpheme(msp) {
        return new KanaUncombiningMorpheme(new KanaSyllable(msp.letters), msp.pattern, this.metaplasm);
    }
    postprocess(patterns) {
        let morphemes = this.createMorphemes();
        for (let i in patterns) {
            morphemes.push(this.createMorpheme(patterns[i]));
        }
        return morphemes;
    }
    makeInputingMorphemes(gs) {
        const ltrs = gs.map(it => it.letter);
        const ptrns = this.make(ltrs, syllabifyKana);
        const ms = this.postprocess(ptrns);
        return ms;
    }
}
exports.KanaUncombiningMorphemeMaker = KanaUncombiningMorphemeMaker;
//# sourceMappingURL=morpheme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/kana/soundgen.js":
/*!*************************************************!*\
  !*** ./node_modules/taipa/lib/kana/soundgen.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
const kana_1 = __webpack_require__(/*! ./kana */ "./node_modules/taipa/lib/kana/kana.js");
function initialConsonant(sg) {
    const sics = new kana_1.SetOfInitialConsonants();
    if (sics.beginWith(sg.letters[sg.sounds.length])) {
        const ps = kana_1.kanaPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(kana_1.KanaSoundTags.initialConsonant);
            if (s)
                sg.sounds.push(s);
        }
    }
    else
        sg.bool = false;
    return sg;
}
function semivowel(sg) {
    const ssvs = new kana_1.SetOfSemivowels();
    if (ssvs.beginWith(sg.letters[sg.sounds.length])) {
        const ps = kana_1.kanaPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(kana_1.KanaSoundTags.semivowel);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function vowel(sg) {
    const svs = new kana_1.SetOfVowels();
    if (svs.beginWith(sg.letters[sg.sounds.length])) {
        const ps = kana_1.kanaPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(kana_1.KanaSoundTags.vowel);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function finalConsonant(sg) {
    const sfcs = new kana_1.SetOfFinalConsonants();
    if (sfcs.beginWith(sg.letters[sg.sounds.length])) {
        const ps = kana_1.kanaPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(kana_1.KanaSoundTags.finalConsonant);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function germinatedConsonant(sg) {
    const sgcs = new kana_1.SetOfGerminatedConsonants();
    if (sgcs.beginWith(sg.letters[sg.sounds.length])) {
        const ps = kana_1.kanaPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(kana_1.KanaSoundTags.germinatedConsonant);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
const sc_v = grapheme_1.pipe(vowel);
const sc_cv = grapheme_1.pipe(initialConsonant, vowel);
const sc_cvc = grapheme_1.pipe(initialConsonant, vowel, finalConsonant);
const sc_csv = grapheme_1.pipe(initialConsonant, semivowel, vowel);
const sc_ccv = grapheme_1.pipe(germinatedConsonant, initialConsonant, vowel);
class KanaSoundGenerator {
    constructor() {
        this.sylCompositions = [sc_v, sc_cv, sc_cvc, sc_csv, sc_ccv];
    }
    genSokuonAndGerminated(letters, lookahead) {
        let strs = new Array();
        strs.push(letters);
        // consonant germination
        if (new kana_1.SetOfGerminatedConsonants().beginWith(letters[0]) == true) {
            let syl = new Array();
            syl.push(letters[0].charAt(0));
            for (let e of letters) {
                syl.push(e);
            }
            strs.push(syl);
        }
        // sokuon
        let fcs = new kana_1.SetOfFinalConsonants();
        for (let e of fcs.sounds) {
            let syl = new Array();
            Object.assign(syl, letters);
            syl.push(e.toString());
            if (e.toString() === lookahead)
                strs.push(syl);
        }
        return strs;
    }
    generate(letters, lookahead) {
        let strs = new Array();
        let sequences = new Array(); // to be returned
        strs = this.genSokuonAndGerminated(letters, lookahead);
        //console.log(strs)
        for (let i in strs) {
            // generates all needed sounds to be processed
            for (let j = 0; j < this.sylCompositions.length; j++) {
                let sg = new grapheme_1.SoundGeneration();
                sg.letters = strs[i];
                //console.log(`j: ${j}`)
                sg = this.sylCompositions[j](sg);
                if (sg.letters.length == sg.sounds.length && sg.bool == true) {
                    sequences.push(sg.sounds);
                    break;
                }
            }
        }
        //console.log(sequences)
        return sequences;
    }
}
exports.KanaSoundGenerator = KanaSoundGenerator;
//# sourceMappingURL=soundgen.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/lemmatizer.js":
/*!**********************************************!*\
  !*** ./node_modules/taipa/lib/lemmatizer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const analyzer_1 = __webpack_require__(/*! ./tonal/analyzer */ "./node_modules/taipa/lib/tonal/analyzer.js");
const symbols_1 = __webpack_require__(/*! ./dparser/symbols */ "./node_modules/taipa/lib/dparser/symbols.js");
const rules_1 = __webpack_require__(/*! ./dparser/rules */ "./node_modules/taipa/lib/dparser/rules.js");
class Lemmatizer {
    getTonalLemmas(doc) {
        const tla = new analyzer_1.TonalLemmatizationAnalyzer();
        const sophv = new rules_1.SetOfPhrasalVerbs();
        let j = 0;
        let k = 0;
        let len = 0;
        for (let i = 0; i < doc.tokens.length; i++) {
            if (len == i) {
                // loop over the doc.speeches sequence
                if (j < doc.speeches.length) {
                    len += doc.speeches[j].elements.length;
                    if (j + 1 < doc.speeches.length)
                        j++;
                    k = 0;
                }
            }
            else {
                k++;
            }
            if (doc.tokens[i].text === 'che' || doc.tokens[i].text === 'he') {
                doc.tokens[i].lemma = doc.tokens[i].text;
                continue; // defective
            }
            if (doc.tokens[i].tag === symbols_1.Tagset.AUXN || doc.tokens[i].tag === symbols_1.Tagset.AUX) {
                doc.tokens[i].lemma = doc.tokens[i].text;
                continue;
            }
            if (doc.tokens[i].tag === symbols_1.Tagset.VB && i + 1 < doc.tokens.length) {
                if (doc.tokens[i + 1].tag === symbols_1.Tagset.PPV || doc.tokens[i + 1].tag === symbols_1.Tagset.APPR) {
                    for (let j in sophv.phrms) {
                        if (doc.tokens[i].text === sophv.phrms[j].phrase.words[0].literal &&
                            doc.tokens[i + 1].text === sophv.phrms[j].phrase.words[1].literal) {
                            doc.tokens[i].lemma = sophv.phrms[j].phrase.words[0].literal;
                            doc.tokens[i + 1].lemma = sophv.phrms[j].phrase.words[1].literal;
                            i++;
                            break;
                        }
                        else if (doc.tokens[i].text === sophv.phrms[j].proceedingForms[0].words[0].literal &&
                            doc.tokens[i + 1].text === sophv.phrms[j].phrase.words[1].literal) {
                            doc.tokens[i].lemma = sophv.phrms[j].phrase.words[0].literal;
                            doc.tokens[i + 1].lemma = sophv.phrms[j].phrase.words[1].literal;
                            i++;
                            break;
                        }
                    }
                    continue;
                }
            }
            if (doc.tokens[i].tag === symbols_1.Tagset.VB) {
                if (i + 1 < doc.tokens.length && doc.tokens[i + 1].tag === symbols_1.Tagset.AUXN) {
                    doc.tokens[i].lemma = doc.tokens[i].text; // copy the base form
                    continue;
                }
            }
            if (k + 1 == doc.speeches[j].elements.length) {
                // at the end of a speech
                // need to further check if the speech is a noun chunk or verb phrase
                doc.tokens[i].lemma = doc.tokens[i].text; // copy the base form
                continue;
            }
            let lemmas = [];
            lemmas = tla.analyze(doc.tokens[i].text).getLemmata();
            if (lemmas.length > 0)
                doc.tokens[i].lemma = lemmas[0].literal;
        }
        return doc;
    }
}
exports.Lemmatizer = Lemmatizer;
//# sourceMappingURL=lemmatizer.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/lexeme.js":
/*!******************************************!*\
  !*** ./node_modules/taipa/lib/lexeme.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//------------------------------------------------------------------------------
class Metaplasm {
}
exports.Metaplasm = Metaplasm;
class TonalInflectingMetaplasm extends Metaplasm {
    // apply(morphemes: Array<Morpheme>, tonalSymbolEnding: TonalSymbolEnding): TonalWord[] {
    apply(morphemes) {
        return [];
    }
}
exports.TonalInflectingMetaplasm = TonalInflectingMetaplasm;
class TonalLemmatizingMetaplasm extends Metaplasm {
    apply(morphemes, inflectionalEnding) { }
}
exports.TonalLemmatizingMetaplasm = TonalLemmatizingMetaplasm;
//------------------------------------------------------------------------------
class Lexeme {
}
exports.Lexeme = Lexeme;
//------------------------------------------------------------------------------
class Word {
    constructor(syllables) {
        this.literal = '';
        if (syllables) {
            this.syllables = syllables;
        }
        else {
            this.syllables = new Array();
        }
    }
    popSyllable() {
        this.syllables = this.syllables.slice(0, this.syllables.length - 1);
        this.concat();
    }
    pushSyllable(syl) {
        this.syllables.push(syl);
        this.concat();
    }
    replaceSyllable(i, syl) {
        if (i < this.syllables.length) {
            this.syllables.splice(i, 1, syl);
        }
        this.concat();
    }
    concat() {
        this.literal = this.syllables.map(x => (x ? x.literal : '')).join('');
    }
}
exports.Word = Word;
//------------------------------------------------------------------------------
class LexemeMaker {
}
exports.LexemeMaker = LexemeMaker;
//# sourceMappingURL=lexeme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/morpheme.js":
/*!********************************************!*\
  !*** ./node_modules/taipa/lib/morpheme.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CombiningMetaplasm {
}
exports.CombiningMetaplasm = CombiningMetaplasm;
class TonalCombiningMetaplasm extends CombiningMetaplasm {
    apply(sounds, allomorph) {
        return [];
    }
    applyAssimilation(sounds, initialNextSyllable) {
        return [];
    }
}
exports.TonalCombiningMetaplasm = TonalCombiningMetaplasm;
class RemovingEpenthesisOfAy extends TonalCombiningMetaplasm {
    applyToLetters(letters) {
        letters.shift();
        return letters;
    }
    applyToString(str) {
        return str.slice(1, 2);
    }
}
exports.RemovingEpenthesisOfAy = RemovingEpenthesisOfAy;
class RemovingNasalizationOfAy extends TonalCombiningMetaplasm {
}
exports.RemovingNasalizationOfAy = RemovingNasalizationOfAy;
class KanaCombiningMetaplasm extends CombiningMetaplasm {
}
exports.KanaCombiningMetaplasm = KanaCombiningMetaplasm;
//------------------------------------------------------------------------------
class Morpheme {
}
exports.Morpheme = Morpheme;
//------------------------------------------------------------------------------
class MatchedPattern {
    constructor() {
        this.letters = new Array();
        this.pattern = new Array();
    }
    get matchedLength() {
        return this.letters.length;
    } // length of pattern can be optionally returned
}
exports.MatchedPattern = MatchedPattern;
//------------------------------------------------------------------------------
class Syllable {
    constructor(letters) {
        this.literal = '';
        this.letters = new Array();
        if (letters != undefined) {
            let len = letters.length;
            for (let i = 0; i < len; i++) {
                this.pushLetter(letters[i]);
            }
        }
    }
    pushLetter(l) {
        this.letters.push(l);
        this.concat();
    }
    replaceLetter(i, l) {
        this.letters.splice(i, 1, l);
        this.concat();
    }
    insertLetter(i, l) {
        this.letters.splice(i, 0, l);
        this.concat();
    }
    concat() {
        this.literal = this.letters.map(x => (x ? x.literal : '')).join('');
    }
}
exports.Syllable = Syllable;
//------------------------------------------------------------------------------
class MorphemeMaker {
    make(letters, syllabify) {
        let patterns = new Array();
        let beginOfSyllable = 0;
        for (let i = 0; i < letters.length; i++) {
            let msp = new MatchedPattern();
            if (i - beginOfSyllable == 0) {
                msp = syllabify(letters, beginOfSyllable);
                if (msp.matchedLength == 0) {
                    //console.log('no matched syllables found. the syllable might need to be added')
                }
                //console.log("matchedLen: %d", msp.matchedLength);
                //console.log(msp.pattern);
                //console.log(msp.letters)
                if (msp.letters.length > 0) {
                    for (let j in msp.letters) {
                        //console.log("msp.letters: %s", msp.letters[j].literal)
                    }
                    patterns.push(msp);
                }
                beginOfSyllable += msp.matchedLength;
            }
            if (patterns.length == 0) {
                //console.log('nothing matched')
            }
            else if (patterns.length >= 1) {
                if (msp == undefined)
                    break;
                if (msp.matchedLength > 0) {
                    i += beginOfSyllable - i - 1;
                }
            }
        }
        return patterns;
    }
}
exports.MorphemeMaker = MorphemeMaker;
//# sourceMappingURL=morpheme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/phraseme.js":
/*!********************************************!*\
  !*** ./node_modules/taipa/lib/phraseme.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PhrasalMetaplasm {
}
exports.PhrasalMetaplasm = PhrasalMetaplasm;
class TonalPhrasalInflectingMetaplasm extends PhrasalMetaplasm {
    apply(lexemeOne, lexemeTwo) {
        return [];
    }
}
exports.TonalPhrasalInflectingMetaplasm = TonalPhrasalInflectingMetaplasm;
// -----------------------------------------------------------------------------
class ToneGroup {
    constructor() {
        this.inflectionalEndings = new Array();
    }
}
exports.ToneGroup = ToneGroup;
class ToneSandhiGroup extends ToneGroup {
}
// -----------------------------------------------------------------------------
class Phraseme {
}
exports.Phraseme = Phraseme;
// -----------------------------------------------------------------------------
class Phrase {
    constructor() {
        this.literal = '';
    }
}
class TonalPhrase extends Phrase {
    constructor(words) {
        super();
        this.words = new Array();
        if (words != undefined) {
            let len = words.length;
            for (var i = 0; i < len; i++) {
                if (i > 0)
                    this.literal += ' ';
                this.pushWord(words[i]);
            }
            this.concat();
        }
    }
    popWord() {
        // get rid off the last word from array
        this.words = this.words.slice(0, this.words.length - 1);
        this.concat();
    }
    pushWord(w) {
        this.words.push(w);
        this.concat();
    }
    concat() {
        if (this.words.length > 0) {
            if (this.words.filter(x => x && x.literal.length > 0).length == 0) {
                this.literal = '';
            }
            else
                this.literal = this.words.map(x => (x ? x.literal : '')).join(' ');
        }
    }
}
exports.TonalPhrase = TonalPhrase;
//# sourceMappingURL=phraseme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/token.js":
/*!*****************************************!*\
  !*** ./node_modules/taipa/lib/token.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lexeme_1 = __webpack_require__(/*! ./lexeme */ "./node_modules/taipa/lib/lexeme.js");
class Token {
    constructor(text) {
        this.text = text;
        this.pos = '';
        this.tag = '';
        this.lemma = '';
        this.dep = '';
        this.head = null;
    }
}
exports.Token = Token;
class TokenAnalysis {
    constructor() {
        this.word = new lexeme_1.Word();
        this.lemmata = new Array();
        this.inflectionalEnding = ''; // inflectinal ending
        this.soundSequences = new Array(); // sound sequences
        this.blockSequences = []; // block sequences
    }
}
exports.TokenAnalysis = TokenAnalysis;
//# sourceMappingURL=token.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/analyzer.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/analyzer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const analyzer_1 = __webpack_require__(/*! ../analyzer */ "./node_modules/taipa/lib/analyzer.js");
const lexeme_1 = __webpack_require__(/*! ./lexeme */ "./node_modules/taipa/lib/tonal/lexeme.js");
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
//------------------------------------------------------------------------------
class TonalLemmatizationAnalyzer extends analyzer_1.Analyzer {
    graphAnalyze(str) {
        // graphemic analysis
        const gm = new grapheme_1.GraphemeMaker(version2_1.lowerLettersOfTonal);
        return gm.makeGraphemes(str);
    }
    morphAnalyze(x) {
        // morphological analysis
        let graphemes = [];
        if (typeof x == 'object') {
            graphemes = x;
        }
        else if (typeof x == 'string') {
            graphemes = this.graphAnalyze(x);
        }
        const mm = new morpheme_1.TonalUncombiningMorphemeMaker(new morpheme_1.TonalUncombiningForms());
        return mm.makeMorphemes(graphemes);
    }
    lexAnalyze(x) {
        // lexical analysis
        let morphemes = [];
        if (typeof x == 'object') {
            morphemes = x;
        }
        else if (typeof x == 'string') {
            morphemes = this.morphAnalyze(x);
        }
        const lm = new lexeme_1.TonalLemmatizationLexemeMaker();
        return lm.makeLexemes(morphemes);
    }
    analyze(str) {
        const lm = new lexeme_1.TonalLemmatizationLexemeMaker();
        return lm.makeLexemes(this.morphAnalyze(str));
    }
}
exports.TonalLemmatizationAnalyzer = TonalLemmatizationAnalyzer;
//# sourceMappingURL=analyzer.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/init.js":
/*!**********************************************!*\
  !*** ./node_modules/taipa/lib/tonal/init.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
function checkLetterSizeTonal() {
    if (version2_1.tonalPositionalSound.size !== version2_1.lowerLettersOfTonal.size) {
        console.log('sizes unmatched');
    }
}
exports.checkLetterSizeTonal = checkLetterSizeTonal;
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/lexeme.js":
/*!************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/lexeme.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lexeme_1 = __webpack_require__(/*! ../lexeme */ "./node_modules/taipa/lib/lexeme.js");
// import { freeAllomorphUncombiningRules, ZeroTonal, lowerLettersOfTonal, TonalLetterTags } from './version2';
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const version2_2 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
class TonalZeroLemmatization extends lexeme_1.TonalLemmatizingMetaplasm {
}
class TonalLemmatization extends lexeme_1.TonalLemmatizingMetaplasm {
    apply(morphemes, inflectionalEnding) {
        return this.populateLemmata(morphemes, inflectionalEnding);
    }
    /*
    private replaceLastSyllable(morphemes: Array<TonalUncombiningMorpheme>) {
        let wd = new TonalWord(morphemes.map(x => x.syllable));
        wd.popSyllable();
        wd.pushSyllable(morphemes[morphemes.length - 1].getForms()[0]);
        return wd;
    }
*/
    getLemmas(morphemes, inflectionalEnding) {
        if (inflectionalEnding) {
            if (inflectionalEnding instanceof FreeInflectionalEnding) {
                const ret = [];
                const arr = morphemes[morphemes.length - 1].getForms();
                for (let key in arr) {
                    const wrd = new TonalWord(morphemes.map(x => x.syllable));
                    wrd.popSyllable();
                    wrd.pushSyllable(arr[key]);
                    ret.push(wrd);
                }
                return ret;
            }
            else if (inflectionalEnding instanceof CheckedInflectionalEnding) {
                if (morphemes[morphemes.length - 1].getForms().length == 0)
                    return [];
                const wrd = new TonalWord(morphemes.map(x => x.syllable));
                wrd.popSyllable();
                wrd.pushSyllable(morphemes[morphemes.length - 1].getForms()[0]);
                return [wrd];
                // return [this.replaceLastSyllable(morphemes)];
            }
        }
        return [];
    }
    populateLemmata(morphemes, inflectionalEnding) {
        let lemmata = new Array();
        // turn morphemes into lemmas
        let lms = this.getLemmas(morphemes, inflectionalEnding);
        if (lms.length > 0) {
            for (let key in lms) {
                lemmata.push(lms[key]);
            }
        }
        return lemmata;
    }
}
exports.TonalLemmatization = TonalLemmatization;
//------------------------------------------------------------------------------
class Ending {
}
class InflectionalEnding extends Ending {
    constructor() {
        super(...arguments);
        this.affix = new version2_2.TonalAffix(); // the affix of this word
    }
    toString() {
        return this.affix.toString();
    }
}
exports.InflectionalEnding = InflectionalEnding;
class FreeInflectionalEnding extends InflectionalEnding {
}
exports.FreeInflectionalEnding = FreeInflectionalEnding;
class CheckedInflectionalEnding extends InflectionalEnding {
}
exports.CheckedInflectionalEnding = CheckedInflectionalEnding;
class TonalSymbolEnding extends Ending {
    constructor() {
        super(...arguments);
        this.allomorph = new version2_1.Allomorph();
    }
    toString() {
        return this.allomorph.toString();
    }
}
exports.TonalSymbolEnding = TonalSymbolEnding;
class FreeTonalEnding extends TonalSymbolEnding {
}
exports.FreeTonalEnding = FreeTonalEnding;
class CheckedTonalEnding extends TonalSymbolEnding {
}
exports.CheckedTonalEnding = CheckedTonalEnding;
//------------------------------------------------------------------------------
class TonalWord extends lexeme_1.Word {
    constructor(syllables) {
        super();
        this.syllables = new Array();
        if (syllables != undefined) {
            let len = syllables.length;
            for (var i = 0; i < len; i++) {
                this.pushSyllable(syllables[i]);
            }
        }
    }
}
exports.TonalWord = TonalWord;
//------------------------------------------------------------------------------
class TonalLemmatizationLexeme extends lexeme_1.Lexeme {
    constructor(ms, tl) {
        super();
        this.lemmata = new Array(); // lexical forms. underlying forms
        this.word = new TonalWord(ms.map(it => it.syllable));
        if (ms.length > 0) {
            if (ms[ms.length - 1].allomorph) {
                this.inflectionalEnding = this.assignInflectionalEnding(ms[ms.length - 1].allomorph);
            }
            else {
                this.inflectionalEnding = new InflectionalEnding();
            }
        }
        else {
            this.inflectionalEnding = new InflectionalEnding();
        }
        this.lemmata = tl.apply(ms, this.inflectionalEnding);
    }
    getLemmata() {
        // this must be called after populateLemmata is called
        return this.lemmata;
    }
    getInflectionalEnding() {
        if (this.inflectionalEnding)
            return this.inflectionalEnding.toString();
        return '';
    }
    assignInflectionalEnding(allomorph) {
        let infe = new InflectionalEnding();
        // change allomorph to affix
        if (allomorph instanceof version2_1.FreeAllomorph) {
            let fie = new FreeInflectionalEnding();
            fie.affix.tonal = allomorph.tonal;
            infe = fie;
        }
        else if (allomorph instanceof version2_1.CheckedAllomorph) {
            let cie = new CheckedInflectionalEnding();
            cie.affix.tonal = allomorph.tonal;
            infe = cie;
        }
        // this word is already in base form, and its last syllable is checked tone
        return infe;
    }
}
exports.TonalLemmatizationLexeme = TonalLemmatizationLexeme;
//------------------------------------------------------------------------------
class TonalLemmatizationLexemeMaker extends lexeme_1.LexemeMaker {
    constructor() {
        super();
    }
    makeLexemes(ms) {
        return this.make(ms);
    }
    make(ms) {
        return new TonalLemmatizationLexeme(ms, new TonalLemmatization());
    }
}
exports.TonalLemmatizationLexemeMaker = TonalLemmatizationLexemeMaker;
//# sourceMappingURL=lexeme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/lexicalroots2.js":
/*!*******************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/lexicalroots2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// prettier-ignore
const to_be_verified = [
    'hioh',
    'jih', 'jirnx', 'jirtt',
    'na',
    'pangh',
];
// prettier-ignore
const list_of_new_lexical_roots = [
    'coaih',
    'choa',
    'dngh', 'dom',
    'gehh',
    'hoang', 'homz',
    'jex', 'jek', 'jeng', 'jip',
    'kiaih', 'kuih',
    'laih', 'langh', 'lirey', 'lih', 'lit', 'loaih', 'loaiz', 'loeh', 'loeih', 'lurih',
    'mah', 'mnghh',
    'n',
    'qanh', 'qngh',
    'oehh',
    'sangh', 'sennh', 'sienh', 'simh', 'sinnh',
    'tom', 'tomz',
    'virt',
];
// prettier-ignore
const list_of_addon_lexical_roots = [
    'ainn', 'ainny', 'ainnx', 'anny', 'aunn', 'aunny', 'aunnz',
    'borh', 'borhh', 'borx', 'bory', 'borz',
    'cainn', 'cainny', 'cainnw', 'cainnx', 'cannh', 'cennh', 'cennx', 'cennz', 'cennhh', 'cor', 'corh', 'corw', 'corx', 'cory', 'corz', 'cinnw', 'cinnh', 'cinnz', 'cir', 'cirinn', 'cirinny', 'cirw', 'ciry', 'cirx', 'coanny', 'coannw', 'coannz', 'cuinn', 'cuinny', 'cuinnw',
    'chainn', 'chainnw', 'chainnx', 'channw', 'channx', 'chennx', 'chor', 'choreh', 'chorehh', 'chorew', 'chorex', 'chorez', 'chorh', 'chorhh', 'chorw', 'chorz', 'chir', 'chirinny', 'chirinnx', 'chirm', 'chirw', 'chiry', 'chirx', 'chirz', 'chiunnx', 'chm', 'chuinn', 'chuinny', 'chuinnw', 'chuinnx', 'chuinnz',
    'dainyy', 'dainnw', 'dainnx', 'dainnz', 'dainnhh', 'denny', 'dennx', 'dorex', 'dorey', 'dorez', 'dorh', 'dorhh', 'dorw', 'dory', 'dorz', 'diann', 'diannw', 'dinnh', 'dinnw', 'dir', 'dirinnw', 'dirinnz', 'dirw', 'dirx', 'dirz', 'dirng', 'doanny', 'duinny', 'duinnw', 'duinnx', 'duinnz',
    'enny', 'ennh', 'ennz', 'ennhh', 'or', 'ore', 'orehh', 'orex', 'orey', 'orez', 'orh', 'orw', 'orx', 'orz', 'orehh',
    'goreh', 'gorehh', 'gorhh', 'gorex', 'gorez', 'gorx', 'giauh', 'girnx', 'girnz', 'girt', 'girx', 'giry', 'girz',
    'hainny', 'hainnh', 'hainnz', 'hann', 'hannhh', 'henny', 'hennz', 'hennhh', 'hor', 'horez', 'horw', 'horx', 'hory', 'horz', 'haunn', 'haunny', 'haunnw', 'haunnh', 'haunnx', 'haunnhh', 'hinnh', 'hinnx', 'hio', 'hir', 'hirinnx', 'hirinnz', 'hirny', 'hirnz', 'hirw', 'hirx', 'hiry', 'hirtt', 'hirk', 'hiunny', 'hiunnw', 'hiunnz', 'hmhh', 'hmz', 'hngw', 'hoainnh', 'hoannw', 'honnz', 'hop', 'huinn', 'huinnh', 'huinnx', 'huinnz',
    'ionn', 'innh', 'innhh', 'ir', 'irinnx', 'irn', 'irny', 'irpp', 'irw', 'irx', 'iry', 'irz',
    'jiaunny', 'jiaunnw', 'jiaunnx', 'jinny', 'jiry', 'jirx', 'jorx',
    'kannx', 'kainnh', 'kainnw', 'kaunnhh', 'kennh', 'kennx', 'kor', 'kore', 'koreh', 'korew', 'korw', 'korh', 'korx', 'kiann', 'kiannw', 'kinn', 'kir', 'kirnx', 'kirny', 'kirw', 'kngz', 'koainn', 'koainnw', 'konny', 'kuinnw',
    'lorehh', 'lorex', 'lorh', 'lorx', 'liry', 'lirx', 'lirz',
    'maix', 'mih', 'mihh', 'mng', 'moaix', 'moaiz', 'moex', 'moez', 'mui', 'muiz',
    'naih', 'naix', 'ney', 'new', 'nez', 'nehh', 'niauw', 'niauh', 'niaw', 'nirix', 'niriz', 'niu', 'nngh', 'nox', 'nui', 'nuiy', 'nuiw', 'nuix', 'nuiz',
    'ngai', 'ngaiy', 'ngauy', 'ngauh', 'ngauhh', 'ngaw', 'ngaz', 'nge', 'ngh', 'nghh', 'ngiahh', 'ngiriy', 'ngiuy', 'ngiux', 'ngiz', 'ngoeh', 'ngoehh',
    'oainn', 'oainnh', 'oainnz', 'oainnhh', 'oannx',
    'painn', 'pennw', 'por', 'porhh', 'porw', 'porx', 'porz', 'pinny', 'pinnhh', 'png', 'pngy', 'pngw', 'pngz', 'pnghh', 'poannx', 'ponn', 'puinn', 'puinnw', 'puinnx',
    'qainny', 'qainnw', 'qainnz', 'qannhh', 'qore', 'qoreh', 'qorew', 'qorex', 'qorey', 'qorez', 'qorh', 'qorw', 'qory', 'qiaunnhh', 'qinny', 'qinnh', 'qinnhh', 'qir', 'qirinn', 'qirinny', 'qirn', 'qirnw', 'qirnz', 'qirw', 'qirx', 'qiry', 'qirz', 'qiunnx', 'qiunnz', 'qnghh', 'qoainnw', 'qoainnx', 'qoainnhh', 'qoannw', 'qoenny', 'qonnz', 'quinn', 'quinny', 'quinnw',
    'sainn', 'sanny', 'sannw', 'sannx', 'sore', 'sorew', 'sorew', 'sorh', 'sorhh', 'sorx', 'sorw', 'sorz', 'sinnx', 'sinnhh', 'sir', 'sirinn', 'sirm', 'sirp', 'sirw', 'sirx', 'siry', 'sirz', 'sm', 'smw', 'smh', 'snghh', 'soainn', 'soainnh', 'soainnx', 'soainnhh', 'soenn', 'soenny', 'soennw', 'suinn', 'suinny', 'suinnw',
    'tainnw', 'tainnz', 'tannx', 'tannz', 'tenn', 'tor', 'tore', 'torehh', 'torew', 'torhh', 'torw', 'tinnw', 'tinnx', 'tirx', 'tiry', 'tiunny', 'toannx', 'tuinnw', 'tuinnx', 'tuinnz',
    'uihh', 'uinn', 'uinny', 'uinnx', 'uinnz',
    'vainny', 'vainnx', 'vainnz', 'vor', 'vory', 'vorw', 'vorx', 'vorz', 'vinnx', 'vngx', 'vuinn', 'vuinny', 'vuinnx', 'vuinnz',
];
// prettier-ignore
exports.list_of_lexical_roots = [
    'a', 'ay', 'az', 'ah', 'ahh', 'ai', 'aiy', 'aiw', 'ainnz', 'ak', 'am',
    'amy', 'amw', 'amx', 'amz', 'an', 'any', 'anw', 'anx', 'anz', 'ang',
    'angw', 'angx', 'angz', 'annw', 'annx', 'annz', 'ap', 'app', 'at', 'au',
    'auy', 'auw', 'aux', 'auz',
    'ba', 'bax', 'baz', 'bah', 'bai', 'baiy', 'baix', 'bak', 'bakk', 'ban',
    'bany', 'banx', 'banz', 'bangy', 'bangw', 'bangx', 'bangz', 'bat', 'batt',
    'bauy', 'bauz', 'bey', 'bex', 'bez', 'beh', 'behh', 'biy', 'bix', 'biz',
    'bieny', 'bienx', 'bienz', 'biett', 'biauy', 'biaux', 'biauz', 'bih',
    'bihh', 'bekk', 'biny', 'binx', 'binz', 'bengy', 'bengx', 'bengz', 'biury',
    'biurx', 'biurz', 'bitt', 'biuz', 'bury', 'burx', 'burz', 'bok', 'bokk',
    'bong', 'bongy', 'bongw', 'bongx', 'bongz', 'boy', 'box', 'boz', 'buy',
    'bux', 'buz', 'boax', 'boah', 'boahh', 'boany', 'boatt', 'boey', 'boex',
    'boez', 'boehh', 'bui', 'buny', 'bunw', 'bunx', 'bunz', 'but', 'butt',
    'ca', 'cay', 'cax', 'caz', 'cah', 'cai', 'caiy', 'caiw', 'caix', 'caiz',
    'cak', 'cakk', 'cam', 'camy', 'camw', 'camx', 'can', 'canw', 'canx',
    'cang', 'cangy', 'cangw', 'canny', 'cannz', 'cap', 'capp', 'cat', 'catt',
    'cau', 'cauy', 'cauw', 'cauhh', 'ce', 'cey', 'cew', 'cex', 'cez', 'ceh',
    'cenn', 'cenny', 'cennw', 'ci', 'ciy', 'ciw', 'cix', 'ciz', 'cia', 'ciax',
    'ciah', 'ciakk', 'ciam', 'ciamy', 'cien', 'cieny', 'cienx', 'ciangy',
    'ciangw', 'ciangx', 'ciangz', 'ciann', 'cianny', 'ciannw', 'ciannx', 'ciap',
    'ciet', 'ciau', 'ciauw', 'ciaux', 'cih', 'cihh', 'cek', 'cekk', 'cim',
    'cimy', 'cin', 'cinw', 'ceng', 'cengy', 'cengw', 'cengx', 'cengz', 'cinn',
    'cinny', 'cinnx', 'ciur', 'ciurw', 'ciurz', 'ciurh', 'ciurhh', 'ciok',
    'ciokk', 'ciong', 'ciongw', 'cip', 'cit', 'ciu', 'ciuy', 'ciux', 'ciuz',
    'ciunn', 'ciunny', 'ciunnw', 'ciunnx', 'ciunnz', 'cng', 'cngy', 'cngw',
    'cngx', 'cngh', 'cnghh', 'cur', 'cury', 'curw', 'curh', 'cok', 'cokk',
    'cong', 'congy', 'congw', 'congx', 'co', 'coy', 'cow', 'cu', 'cuy', 'cuw',
    'cuz', 'coaw', 'coaz', 'coah', 'coahh', 'coan', 'coan', 'coanw', 'coanx',
    'coangw', 'coann', 'coannw', 'coe', 'coey', 'coex', 'coez', 'cuh', 'cuhh',
    'cui', 'cuiy', 'cuiw', 'cun', 'cuny', 'cunw', 'cunx', 'cunz', 'cut',
    'cha', 'chay', 'chaw', 'chah', 'chahh', 'chai', 'chaiy', 'chaiw', 'chaix',
    'chaiz', 'chainny', 'chak', 'chakk', 'cham', 'chamy', 'chamw', 'chamz',
    'chan', 'chany', 'chanw', 'chanx', 'chanz', 'chang', 'changy', 'changw',
    'changx', 'channy', 'channz', 'chapp', 'chat', 'chatt', 'chau', 'chauy',
    'chauw', 'chaux', 'chauz', 'che', 'chey', 'chew', 'chex', 'chez', 'cheh',
    'chehh', 'chenn', 'chenny', 'chennw', 'chennz', 'chi', 'chiy', 'chiw',
    'chix', 'chiz', 'chia', 'chiay', 'chiaw', 'chiaz', 'chiah', 'chiahh',
    'chiam', 'chiamw', 'chiamx', 'chiamz', 'chien', 'chieny', 'chienw',
    'chienx', 'chienz', 'chiang', 'chiangy', 'chiangw', 'chiann', 'chianny',
    'chiannw', 'chiannx', 'chiannz', 'chiap', 'chiapp', 'chiet', 'chiett',
    'chiau', 'chiauy', 'chiauw', 'chiaux', 'chih', 'chihh', 'chek', 'chekk',
    'chim', 'chimy', 'chimw', 'chimx', 'chin', 'chiny', 'chinw', 'chinx',
    'chinz', 'cheng', 'chengy', 'chengw', 'chengx', 'chengz', 'chinn',
    'chinny', 'chinnw', 'chinnx', 'chinnz', 'chiur', 'chiury', 'chiurw',
    'chiurh', 'chiurhh', 'chiok', 'chiong', 'chiongy', 'chiongw', 'chiongx',
    'chiongz', 'chip', 'chipp', 'chit', 'chitt', 'chiu', 'chiuy', 'chiuw',
    'chiuz', 'chiunn', 'chiunny', 'chiunnw', 'chiunnz', 'chng', 'chngy',
    'chngw', 'chngx', 'chngz', 'chur', 'chury', 'churw', 'churx', 'churz',
    'churh', 'chok', 'chokk', 'chong', 'chongy', 'chongw', 'chongx', 'chongz',
    'cho', 'choy', 'choz', 'chu', 'chuy', 'chuw', 'chux', 'chuxz', 'choay',
    'choax', 'choaz', 'choah', 'choahh', 'choainnz', 'choan', 'choany',
    'choanw', 'choanx', 'choanz', 'choann', 'choanny', 'choannw', 'choannx',
    'choannz', 'chutt', 'choew', 'choez', 'chuh', 'chui', 'chuiy', 'chuiw',
    'chuix', 'chuiz', 'chun', 'chuny', 'chunw', 'chunx', 'chunz', 'chut',
    'chutt',
    'da', 'day', 'daw', 'dah', 'dahh', 'dai', 'daiy', 'daiw', 'daix', 'daiz',
    'dainn', 'dainny', 'dak', 'dakk', 'dam', 'damy', 'damw', 'damx', 'damz',
    'dan', 'dany', 'danw', 'danx', 'danz', 'dang', 'dangy', 'dangw', 'dangx',
    'dangz', 'dann', 'danny', 'dannw', 'dannx', 'dannz', 'dap', 'dapp', 'dat',
    'datt', 'dau', 'dauy', 'dauw', 'daux', 'dauz', 'dauh', 'dauhh', 'de', 'dey',
    'dew', 'dex', 'dez', 'deh', 'denn', 'dennw', 'dennz', 'di', 'diy', 'diw',
    'dix', 'diz', 'dia', 'diah', 'diahh', 'diak', 'diakk', 'diam', 'diamy',
    'diamw', 'diamx', 'diamz', 'dien', 'dieny', 'dienx', 'dienz', 'dianny',
    'diannx', 'diannz', 'diap', 'diapp', 'diet', 'diett', 'diau', 'diauw',
    'diaux', 'diauz', 'dih', 'dihh', 'dek', 'dekk', 'dimw', 'dimx', 'dimz',
    'din', 'diny', 'dinw', 'dinx', 'dinz', 'deng', 'dengy', 'dengw', 'dengx',
    'dengz', 'dinn', 'dinnx', 'dinnz', 'dinnhh', 'diurw', 'diurx', 'diurz',
    'diurh', 'diurhh', 'diok', 'diokk', 'diong', 'diongy', 'diongw', 'diongx',
    'diongz', 'dit', 'ditt', 'diu', 'diuy', 'diuw', 'diux', 'diuz', 'diuh',
    'diunn', 'diunny', 'diunnw', 'diunnx', 'diunnz', 'dng', 'dngy', 'dngw',
    'dngx', 'dngz', 'dur', 'dury', 'durw', 'durx', 'durz', 'durh', 'durhh',
    'dok', 'dokk', 'domx', 'dong', 'dongy', 'dongw', 'dongx', 'dongz', 'do',
    'doy', 'dow', 'dox', 'doz', 'du', 'duy', 'duw', 'dux', 'duz', 'doaw',
    'doaz', 'doan', 'doany', 'doanw', 'doanz', 'doann', 'doannw', 'doannx',
    'doannz', 'doat', 'doatt', 'doew', 'doex', 'doez', 'duh', 'duhh', 'dui',
    'duiw', 'duix', 'duiz', 'dun', 'duny', 'dunw', 'dunz', 'dutt',
    'e', 'ey', 'ew', 'ex', 'ez', 'eh', 'ehh', 'enn', 'ennx',
    'ek', 'ekk', 'eng', 'engy', 'engw', 'engx', 'engz',
    'gax', 'gaz', 'gaix', 'gaiz', 'gakk', 'gamy', 'gamx', 'gamz', 'gany',
    'ganw', 'ganx', 'ganz', 'gangz', 'gaux', 'gew', 'gex', 'gez', 'giy', 'gix',
    'giz', 'giax', 'giah', 'giahh', 'giamy', 'giamx', 'giamz', 'gieny', 'gienw',
    'gienx', 'gienz', 'giang', 'giangw', 'giangz', 'giap', 'giapp', 'giet',
    'giett', 'giaux', 'gekk', 'gimy', 'gimx', 'gimz', 'giny', 'ginx', 'ginz',
    'gengy', 'gengx', 'giury', 'giurx', 'giurhh', 'giok', 'giokk', 'giongy',
    'giuy', 'giux', 'gurx', 'gurz', 'gokk', 'gongx', 'gongz', 'gox', 'goz',
    'guy', 'gux', 'guz', 'goay', 'goaz', 'goany', 'goanx', 'goanz', 'goatt',
    'goez', 'goehh', 'guix', 'guiz',
    'ha', 'haw', 'hax', 'haz', 'hah', 'hahh', 'hai', 'haiy', 'haix', 'haiz',
    'hainn', 'hainnw', 'hainnx', 'hak', 'hakk', 'ham', 'hamy', 'hamw', 'hamx',
    'hamz', 'han', 'hany', 'hanw', 'hanx', 'hanz', 'hang', 'hangw', 'hangx',
    'hangz', 'hanny', 'hannx', 'hannz', 'hannh', 'hap', 'happ', 'hat', 'hatt',
    'hau', 'hauy', 'hauw', 'haux', 'hauz', 'he', 'hey', 'hew', 'hex', 'hez',
    'heh', 'hennw', 'hennx', 'hennh', 'hi', 'hiy', 'hiw', 'hix', 'hia', 'hiaz',
    'hiah', 'hiahh', 'hiam', 'hiamy', 'hiamw', 'hiamx', 'hien', 'hieny',
    'hienw', 'hienx', 'hienz', 'hiang', 'hiangy', 'hiangw', 'hiann', 'hianny',
    'hiannw', 'hiannx', 'hiannz', 'hiannh', 'hiapp', 'hiet', 'hiett', 'hiau',
    'hiauy', 'hiaux', 'hiauh', 'hek', 'hekk', 'him', 'himx', 'hin', 'hinx',
    'hinz', 'heng', 'hengw', 'hengx', 'hengz', 'hinn', 'hinnw', 'hinnz',
    'hiurx', 'hiurz', 'hiurh', 'hiurhh', 'hiok', 'hiong', 'hiongy', 'hiongw',
    'hiongx', 'hip', 'hit', 'hitt', 'hiu', 'hiuy', 'hiuw', 'hiux', 'hiunn',
    'hiunnhh', 'hmy', 'hmx', 'hmh', 'hmhh', 'hng', 'hngy', 'hngx', 'hngz',
    'hngh', 'hnghh', 'hury', 'hurx', 'hurz', 'hurhh', 'hok', 'hokk', 'hong',
    'hongy', 'hongw', 'hongx', 'hongz', 'honn', 'honny', 'honnw', 'honnh', 'ho',
    'hoy', 'how', 'hox', 'hoz', 'hu', 'huy', 'huw', 'hux', 'huz', 'hoa', 'hoaw',
    'hoax', 'hoaz', 'hoah', 'hoahh', 'hoaix', 'hoaiz', 'hoainnx', 'hoan',
    'hoany', 'hoanw', 'hoanx', 'hoanz', 'hoann', 'hoanny', 'hoannx', 'hoannz',
    'hoat', 'hoatt', 'hoe', 'hoey', 'hoew', 'hoex', 'hoez', 'hoeh', 'hui',
    'huiy', 'huiw', 'huix', 'huiz', 'hun', 'huny', 'hunw', 'hunx', 'hunz',
    'hut', 'hutt',
    'i', 'iy', 'iw', 'ix', 'iz', 'ia', 'iay', 'iaw', 'iax', 'iaz', 'iah',
    'iahh', 'iam', 'iamy', 'iamx', 'iamz', 'ien', 'ieny', 'ienw', 'ienx',
    'iang', 'iangz', 'iann', 'ianny', 'iannw', 'iannx', 'iannz', 'iap', 'iapp',
    'iet', 'iett', 'iau', 'iauy', 'iauw', 'iaux', 'iauz', 'iaunn', 'im', 'imy',
    'imw', 'imx', 'in', 'iny', 'inw', 'inx', 'inz', 'inn', 'inny', 'innw',
    'innx', 'innz', 'iur', 'iury', 'iurx', 'iurh', 'iurhh', 'iok', 'iokk',
    'iong', 'iongy', 'iongw', 'iongx', 'iongz', 'ip', 'it', 'itt', 'iu', 'iuy',
    'iuw', 'iux', 'iuz', 'iunn', 'iunny', 'iunnx', 'iunnz',
    'jiy', 'jix', 'jiz', 'jia', 'jiay', 'jiamy', 'jienx', 'jiangy', 'jiapp',
    'jiett', 'jiauy', 'jiauw', 'jiaux', 'jimy', 'jimx', 'jimz', 'jinx', 'jinz',
    'jiurz', 'jiok', 'jiokk', 'jiongy', 'jiongx', 'jiongz', 'jipp', 'jitt',
    'jiux', 'juy', 'jux', 'juz', 'joahh', 'joex', 'joez', 'junz',
    'ka', 'kay', 'kaw', 'kah', 'kahh', 'kai', 'kaiy', 'kaiw', 'kainn', 'kainny',
    'kak', 'kakk', 'kam', 'kamy', 'kamw', 'kan', 'kanw', 'kang', 'kangy',
    'kangw', 'kann', 'kap', 'kapp', 'kat', 'kau', 'kauy', 'kauw', 'ke', 'key',
    'kew', 'kex', 'keh', 'kehh', 'kenn', 'kennhh', 'ki', 'kiy', 'kiw', 'kix',
    'kiz', 'kia', 'kiax', 'kiaz', 'kiah', 'kiakk', 'kiam', 'kiamw', 'kiamx',
    'kiamz', 'kien', 'kieny', 'kienw', 'kienx', 'kiang', 'kiangw', 'kiap',
    'kiet', 'kiett', 'kiau', 'kiauy', 'kiauw', 'kiauh', 'kih', 'kek', 'kim',
    'kimy', 'kimx', 'kin', 'kiny', 'kinx', 'keng', 'kengy', 'kengw', 'kengx',
    'kengz', 'kinnx', 'kiury', 'kiurw', 'kiurh', 'kiok', 'kiong', 'kiongy',
    'kiongx', 'kip', 'kipp', 'kit', 'kitt', 'kiu', 'kiuy', 'kiux', 'kiuz',
    'kiunn', 'kiunnz', 'kng', 'kngw', 'kur', 'kury', 'kurw', 'kurx', 'kok',
    'kokk', 'kong', 'kongy', 'kongw', 'kongz', 'ko', 'koy', 'kow', 'ku', 'kux',
    'kuz', 'koa', 'koay', 'koaw', 'koah', 'koaiw', 'koan', 'koany', 'koanw',
    'koanx', 'koann', 'koanny', 'koannw', 'koat', 'koe', 'koew', 'koex', 'koeh',
    'kuh', 'kui', 'kuiy', 'kuiw', 'kun', 'kuny', 'kunw', 'kunx', 'kut', 'kutt',
    'la', 'lax', 'laz', 'lah', 'lahh', 'laix', 'laiz', 'lak', 'lakk', 'lam',
    'lamy', 'lamw', 'lamx', 'lamz', 'lan', 'lany', 'lanx', 'lanz', 'lang',
    'langy', 'langw', 'langx', 'langz', 'lap', 'lapp', 'latt', 'lauy', 'lauw',
    'laux', 'lauz', 'lauhh', 'le', 'ley', 'lew', 'lex', 'lez', 'leh', 'lehh',
    'li', 'liy', 'liw', 'lix', 'liz', 'liah', 'liahh', 'liam', 'liamy', 'liamw',
    'liamx', 'liamz', 'lien', 'lieny', 'lienx', 'lienz', 'liang', 'liangy',
    'liangx', 'liangz', 'liap', 'liapp', 'liett', 'liauy', 'liauw', 'liaux',
    'liauz', 'lihh', 'lek', 'lekk', 'lim', 'limy', 'limx', 'limz', 'lin',
    'liny', 'linw', 'linx', 'limz', 'leng', 'lengy', 'lengw', 'lengx', 'lengz',
    'liury', 'liurx', 'liurz', 'liurhh', 'liok', 'liokk', 'liongy', 'liongw',
    'liongx', 'liongz', 'lipp', 'liu', 'liuy', 'liuw', 'liux', 'liuz', 'lur',
    'lury', 'lurw', 'lurx', 'lurz', 'lurh', 'lurhh', 'lok', 'lokk', 'long',
    'longy', 'longw', 'longx', 'longz', 'loy', 'lox', 'loz', 'lu', 'luy',
    'luw', 'lux', 'luz', 'loax', 'loaz', 'loah', 'loahh', 'loany', 'loanx',
    'loanz', 'loatt', 'loex', 'loez', 'lui', 'luiy', 'luiw', 'luix', 'luiz',
    'lun', 'luny', 'lunx', 'lunz', 'lut', 'lutt',
    'my', 'mx', 'mz', 'ma', 'may', 'maw', 'max', 'maz', 'mai', 'maiy', 'maiw',
    'maiz', 'mau', 'maux', 'mauz', 'mauh', 'me', 'mey', 'mex', 'mez', 'meh',
    'mehh', 'mi', 'miy', 'mix', 'miz', 'miax', 'miaz', 'miauz', 'mih', 'mihh',
    'mngy', 'mngx', 'mngz', 'mo', 'moy', 'mox', 'moz', 'moh', 'mohh', 'moa',
    'moay', 'moax', 'moaz', 'muiy', 'muix',
    'nay', 'naw', 'nax', 'naz', 'nah', 'nai', 'naiy', 'naiz', 'nauy', 'nauz',
    'nauh', 'ne', 'nex', 'neh', 'ni', 'niy', 'nix', 'niz', 'niay', 'niax',
    'niaz', 'niau', 'niauy', 'nih', 'niuy', 'niux', 'niuz', 'nng', 'nngy',
    'nngw', 'nngx', 'nngz', 'noy', 'noz', 'noay', 'noaw', 'noax', 'noaz',
    'ng', 'ngy', 'ngw', 'ngx', 'ngz', 'ngay', 'ngaiz', 'ngaux', 'ngauz', 'ngey',
    'ngez', 'ngeh', 'ngehh', 'ngiax', 'ngiau', 'ngiauy', 'ngiauh', 'ngiauhh',
    'ngoy', 'ngox', 'ngoz',
    'o', 'oy', 'ox', 'oz', 'ok', 'om', 'omz', 'ong', 'ongy', 'ongx', 'ongz',
    'onn', 'onnw',
    'oa', 'oay', 'oax', 'oahh', 'oai', 'oainny', 'oan', 'oany', 'oanw', 'oanx',
    'oanz', 'oang', 'oann', 'oanny', 'oannw', 'oannz', 'oat', 'oatt', 'oe',
    'oey', 'oew', 'oex', 'oez', 'oeh',
    'pa', 'paw', 'paz', 'pah', 'paiw', 'painny', 'painnz', 'pak', 'pakk', 'pan',
    'pan', 'pang', 'pangy', 'pangw', 'pangx', 'pangz', 'pannw', 'pannz', 'pau',
    'pauy', 'pauw', 'pauz', 'pauhh', 'pe', 'pey', 'pew', 'pez', 'penn', 'pennx',
    'pennz', 'pi', 'piy', 'piw', 'pix', 'piz', 'piah', 'piahh', 'piak', 'piakk',
    'pien', 'pienw', 'pienx', 'piang', 'piangz', 'piann', 'pianny', 'piannx',
    'piet', 'piau', 'piauw', 'piaux', 'pih', 'pihh', 'pek', 'piny', 'pinx',
    'pinz', 'peng', 'pengw', 'pengx', 'pengz', 'pinn', 'pinnw', 'pinnx',
    'pinnz', 'piurw', 'piurx', 'pit', 'pngh', 'pur', 'pury', 'purw', 'purz',
    'purh', 'pok', 'pokk', 'pong', 'pongy', 'pongw', 'pongx', 'pongz', 'po',
    'poy', 'pow', 'pox', 'poz', 'puy', 'pux', 'puz', 'poaw', 'poah', 'poahh',
    'poan', 'poanx', 'poanz', 'poann', 'poannw', 'poannz', 'poat', 'poe',
    'poey', 'poew', 'poex', 'poez', 'poehh', 'puhh', 'puiy', 'puiw', 'pun',
    'puny', 'punw', 'punx', 'put', 'putt',
    'qa', 'qay', 'qaw', 'qaz', 'qah', 'qai', 'qaiy', 'qaiw', 'qainn', 'qainnx',
    'qak', 'qakk', 'qam', 'qamy', 'qamw', 'qamx', 'qan', 'qany', 'qanw', 'qang',
    'qangy', 'qangw', 'qangx', 'qangz', 'qann', 'qanny', 'qannw', 'qannx',
    'qap', 'qat', 'qau', 'qauy', 'qauw', 'qaux', 'qauz', 'qauh', 'qe', 'qey',
    'qew', 'qez', 'qeh', 'qehh', 'qenn', 'qenny', 'qennw', 'qi', 'qiy', 'qiw',
    'qix', 'qiz', 'qia', 'qiaw', 'qiaz', 'qiahh', 'qiam', 'qiamy', 'qiamw',
    'qiamx', 'qien', 'qieny', 'qienw', 'qienz', 'qiann', 'qianny', 'qiannw',
    'qiannx', 'qiannz', 'qiap', 'qiet', 'qiett', 'qiau', 'qiauy', 'qiaux',
    'qiauz', 'qek', 'qekk', 'qim', 'qimy', 'qimw', 'qimz', 'qin', 'qiny',
    'qinw', 'qinz', 'qeng', 'qengy', 'qengw', 'qengx', 'qengz', 'qinn', 'qinnw',
    'qinnx', 'qiurw', 'qiurx', 'qiurz', 'qiurh', 'qiok', 'qiokk', 'qiong',
    'qiongy', 'qiongx', 'qiongz', 'qip', 'qipp', 'qitt', 'qiu', 'qiuy', 'qiuw',
    'qiux', 'qiuz', 'qiunn', 'qng', 'qngy', 'qngw', 'qur', 'qury', 'qurw',
    'qurx', 'qurz', 'qurh', 'qok', 'qokk', 'qong', 'qongy', 'qongw', 'qongx',
    'qonnx', 'qo', 'qoy', 'qow', 'qox', 'qoz', 'qu', 'quy', 'quw', 'quz', 'qoa',
    'qoay', 'qoaw', 'qoaz', 'qoah', 'qoai', 'qoaiy', 'qoaiw', 'qoainn',
    'qoainny', 'qoainnz', 'qoan', 'qoany', 'qoanw', 'qoanx', 'qoanz', 'qoann',
    'qoanny', 'qoannx', 'qoannz', 'qoat', 'qoe', 'qoey', 'qoew', 'qoeh', 'qui',
    'quiy', 'quiw', 'quix', 'quiz', 'qun', 'quny', 'qunw', 'qunx', 'qunz',
    'qut', 'qutt',
    'sa', 'say', 'saw', 'sah', 'sahh', 'sai', 'saiy', 'saiw', 'saix', 'saiz',
    'sak', 'sam', 'samy', 'samw', 'samx', 'san', 'sany', 'sanw', 'sang',
    'sangy', 'sangw', 'sann', 'sannh', 'sap', 'sat', 'sau', 'sauw', 'se', 'sey',
    'sew', 'sex', 'seh', 'sehh', 'senn', 'senny', 'sennw', 'si', 'siy', 'siw',
    'six', 'siz', 'sia', 'siay', 'siaw', 'siax', 'siaz', 'siah', 'siahh',
    'siak', 'siam', 'siamy', 'siamw', 'siamx', 'sien', 'sieny', 'sienw',
    'sienx', 'sienz', 'siang', 'siangy', 'siangw', 'siangx', 'siangz', 'siann',
    'sianny', 'siannw', 'siannx', 'siannz', 'siap', 'siapp', 'siet', 'siett',
    'siau', 'siauy', 'siauw', 'siaux', 'siauz', 'sih', 'sihh', 'sek', 'sekk',
    'sim', 'simy', 'simw', 'simx', 'simz', 'sin', 'sinw', 'sinx', 'sinz',
    'seng', 'sengy', 'sengw', 'sengx', 'sengz', 'sinn', 'sinnw', 'sinnz',
    'siur', 'siury', 'siurx', 'siurh', 'siurhh', 'siok', 'siokk', 'siong',
    'siongy', 'siongw', 'siongx', 'siongz', 'sip', 'sipp', 'sit', 'sitt', 'siu',
    'siuy', 'siuw', 'siux', 'siuz', 'siunn', 'siunny', 'siunnw', 'siunnx',
    'siunnz', 'sng', 'sngy', 'sngw', 'sngx', 'sngh', 'sur', 'sury', 'surw',
    'surx', 'surz', 'surh', 'sok', 'som', 'song', 'songy', 'songw', 'songx',
    'so', 'soy', 'sow', 'su', 'suy', 'suw', 'sux', 'suz', 'soa', 'soay', 'soaw',
    'soah', 'soai', 'soainnz', 'soan', 'soany', 'soanw', 'soanx', 'soanz',
    'soann', 'soanny', 'soannw', 'soat', 'soe', 'soey', 'soew', 'soex', 'soeh',
    'suh', 'sui', 'suiy', 'suiw', 'suix', 'suiz', 'sun', 'suny', 'sunw', 'sunx',
    'sunz', 'sut', 'sutt',
    'taw', 'tah', 'tahh', 'tai', 'taiy', 'taiw', 'taix', 'taiz', 'tak', 'takk',
    'tam', 'tamw', 'tamx', 'tamz', 'tan', 'tany', 'tanw', 'tanx', 'tang',
    'tangy', 'tangw', 'tangx', 'tann', 'tanny', 'tap', 'tat', 'tau', 'tauy',
    'tauw', 'taux', 'tauz', 'te', 'tey', 'tew', 'tex', 'tez', 'teh', 'tehh',
    'tennw', 'tennx', 'ti', 'tiy', 'tiw', 'tix', 'tiz', 'tiah', 'tiam', 'tiamy',
    'tiamz', 'tien', 'tieny', 'tiann', 'tiannw', 'tiannx', 'tiannz', 'tiap',
    'tiapp', 'tiet', 'tiau', 'tiauy', 'tiauw', 'tiaux', 'tiauz', 'tih', 'tihh',
    'tek', 'tekk', 'tim', 'tin', 'tinx', 'tinz', 'teng', 'tengy', 'tengw',
    'tengx', 'tinn', 'tinnz', 'tiur', 'tiurw', 'tiurx', 'tiok', 'tiong',
    'tiongy', 'tiongw', 'tiongx', 'tiu', 'tiuy', 'tng', 'tngw', 'tngx', 'tngz',
    'tur', 'tury', 'turw', 'turx', 'turh', 'turhh', 'tok', 'tokk', 'tong',
    'tongy', 'tongw', 'tongz', 'toy', 'tow', 'tox', 'tuy', 'toa', 'toaz',
    'toah', 'toanx', 'toann', 'toanny', 'toannw', 'toat', 'tuh', 'tui', 'tuiy',
    'tuiw', 'tuix', 'tun', 'tuny', 'tunx', 'tunz', 'tut', 'tutt',
    'u', 'uy', 'uw', 'ux', 'uz', 'uh', 'ui', 'uiy', 'uiw', 'uix', 'uiz', 'un',
    'uny', 'unw', 'unx', 'unz', 'ut',
    'ur', 'urw', 'urx', 'urh', 'urhh',
    'va', 'vay', 'vaw', 'vax', 'vaz', 'vah', 'vai', 'vaiy', 'vaiw', 'vaix',
    'vaiz', 'vak', 'vakk', 'van', 'vany', 'vanx', 'vanz', 'vang', 'vangy',
    'vangw', 'vangx', 'vat', 'vatt', 'vau', 'vauy', 'vaux', 'vauz', 've', 'vey',
    'vew', 'vex', 'vez', 'veh', 'vehh', 'venn', 'vennw', 'vennx', 'vennz', 'vi',
    'viy', 'viw', 'vix', 'viz', 'viah', 'viak', 'viakk', 'vien', 'vieny',
    'vienw', 'vienz', 'viangw', 'viangz', 'viann', 'vianny', 'viannw', 'viannx',
    'viet', 'viett', 'viau', 'viauy', 'vih', 'vek', 'vekk', 'vin', 'viny',
    'vinw', 'vinx', 'veng', 'vengy', 'vengw', 'vengx', 'vengz', 'vinn', 'vinny',
    'vinnw', 'vinnz', 'viur', 'viury', 'viurz', 'vit', 'vitt', 'viu', 'vng',
    'vngy', 'vngz', 'vur', 'vury', 'vurw', 'vurx', 'vurz', 'vurh', 'vurhh',
    'vok', 'vokk', 'vongy', 'vongw', 'vongx', 'vongz', 'vo', 'voy', 'vow',
    'vox', 'voz', 'vu', 'vuw', 'vux', 'vuz', 'voaw', 'voah', 'voahh',
    'voan', 'voanw', 'voanx', 'voanz', 'voann', 'voanny', 'voannw', 'voannx',
    'voannz', 'voat', 'voatt', 'voe', 'voey', 'voew', 'voex', 'voez', 'voeh',
    'poehh', 'vuh', 'vui', 'vuix', 'vuiz', 'vun', 'vuny', 'vunw', 'vunx',
    'vunz', 'vut', 'vutt',
];
//# sourceMappingURL=lexicalroots2.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/matcher.js":
/*!*************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/matcher.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
exports.regex_mnng_h_f = /(m|ng?)hf/g;
exports.sm_mnng_h_f = function (nasalFinal, neutralFinalH, firstTonalF) {
    const snfs = new version2_1.SetOfNasalFinals();
    const nf_h = new version2_1.NeutralFinalH();
    const ft_f = new version2_1.FirstTonalF();
    if (snfs.beginWith(nasalFinal) && nf_h.beginWith(neutralFinalH) && ft_f.beginWith(firstTonalF))
        return true;
    return false;
};
exports.regex_mnng_hh_wx = /(m|ng?)hh(w|x)/g;
exports.sm_m_hh_w = function (nasalFinal, neutralFinalHH, thirdTonalW) {
    if (nasalFinal === version2_1.TonalLetterTags.m && neutralFinalHH === version2_1.TonalLetterTags.hh && thirdTonalW === version2_1.TonalLetterTags.w)
        return true;
    return false;
};
exports.sm_mnng_hh_wx = function (nasalFinal, neutralFinalHH, thirdFifthTonalWX) {
    const snfs = new version2_1.SetOfNasalFinals();
    const nf_hh = new version2_1.NeutralFinalHH();
    const fts_wx = new version2_1.ThirdFifthTonalsWX();
    if (snfs.beginWith(nasalFinal) && nf_hh.beginWith(neutralFinalHH) && fts_wx.beginWith(thirdFifthTonalWX))
        return true;
    return false;
};
exports.regex_jls_f = /(j|l|s)f/g;
exports.sm_jls_f = function (euphonicFinalJLS, firstTonalF) {
    const efs = new version2_1.EuphonicFinalsJLS();
    const ft_f = new version2_1.FirstTonalF();
    if (efs.beginWith(euphonicFinalJLS) && ft_f.beginWith(firstTonalF))
        return true;
    return false;
};
exports.sm_bgkp_f = function (euphonicFinalBGJKLPS, firstTonalF) {
    const efs = new version2_1.EuphonicFinalsBGKP();
    const ft_f = new version2_1.FirstTonalF();
    if (efs.beginWith(euphonicFinalBGJKLPS) && ft_f.beginWith(firstTonalF))
        return true;
    return false;
};
exports.regex_jjllss_wx = /(jj|ll|ss)(w|x)/g;
exports.sm_jjllss_wx = function (euphonicFinalJJLLSS, thirdFifthTonalWX) {
    const efs = new version2_1.EuphonicFinalsJJLLSS();
    const fts_wx = new version2_1.ThirdFifthTonalsWX();
    if (efs.beginWith(euphonicFinalJJLLSS) && fts_wx.beginWith(thirdFifthTonalWX))
        return true;
    return false;
};
exports.sm_bbggkkpp_wx = function (euphonicFinalBBGGJJKKLLPPSS, thirdFifthTonalWX) {
    const efs = new version2_1.EuphonicFinalsBBGGKKPP();
    const fts_wx = new version2_1.ThirdFifthTonalsWX();
    if (efs.beginWith(euphonicFinalBBGGJJKKLLPPSS) && fts_wx.beginWith(thirdFifthTonalWX))
        return true;
    return false;
};
exports.sm_bgjklps_f = function (euphonicFinalBGJKLPS, firstTonalF) {
    const efs = new version2_1.EuphonicFinalsBGJKLPS();
    const ft_f = new version2_1.FirstTonalF();
    if (efs.beginWith(euphonicFinalBGJKLPS) && ft_f.beginWith(firstTonalF))
        return true;
    return false;
};
exports.sm_bbggjjkkllppss_wx = function (euphonicFinalBBGGJJKKLLPPSS, thirdFifthTonalWX) {
    const efs = new version2_1.EuphonicFinalsBBGGJJKKLLPPSS();
    const fts_wx = new version2_1.ThirdFifthTonalsWX();
    if (efs.beginWith(euphonicFinalBBGGJJKKLLPPSS) && fts_wx.beginWith(thirdFifthTonalWX))
        return true;
    return false;
};
//# sourceMappingURL=matcher.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/morpheme.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/morpheme.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const morpheme_1 = __webpack_require__(/*! ../morpheme */ "./node_modules/taipa/lib/morpheme.js");
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const version2_2 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
const soundgen_1 = __webpack_require__(/*! ./soundgen */ "./node_modules/taipa/lib/tonal/soundgen.js");
const lexicalroots2_1 = __webpack_require__(/*! ./lexicalroots2 */ "./node_modules/taipa/lib/tonal/lexicalroots2.js");
const matcher_1 = __webpack_require__(/*! ./matcher */ "./node_modules/taipa/lib/tonal/matcher.js");
const kana_1 = __webpack_require__(/*! ../kana/kana */ "./node_modules/taipa/lib/kana/kana.js");
//------------------------------------------------------------------------------
class TonalUncombiningForms extends morpheme_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        // get base forms as strings
        if (allomorph) {
            // member variable allomorph is not null
            if (allomorph instanceof version2_2.FreeAllomorph) {
                if (allomorph instanceof version2_1.ZeroAllomorph) {
                    // no need to pop letter
                    // push letter to make tone 2
                    // the base tone of the first tone is the second tone
                    // 1 to 2
                    const s = new TonalSyllable(sounds.map(x => new grapheme_1.AlphabeticLetter(x.characters)));
                    s.pushLetter(new grapheme_1.AlphabeticLetter(version2_1.freeAllomorphUncombiningRules.get('zero')[0].characters));
                    // console.log(s)
                    return [s];
                }
                else {
                    // the 7th tone has two baseforms
                    const ret = [];
                    for (let i in version2_1.freeAllomorphUncombiningRules.get(allomorph.toString())) {
                        // pop letter
                        // push letter
                        let s = new TonalSyllable(sounds.map(x => new grapheme_1.AlphabeticLetter(x.characters)));
                        if (!(version2_1.freeAllomorphUncombiningRules.get(allomorph.toString())[i] instanceof version2_1.ZeroAllomorph)) {
                            // when there is allomorph
                            // 2 to 3. 3 to 7. 7 to 5. 3 to 5.
                            s.popLetter();
                            // there are base tonals
                            // includes ss and x, exclude zero allomorph
                            s.pushLetter(new grapheme_1.AlphabeticLetter(version2_1.freeAllomorphUncombiningRules.get(allomorph.toString())[i].characters));
                            ret.push(s);
                        }
                        else {
                            // include zero suffix. the base tone of the seventh tone.
                            // exclude ss and x.
                            // 7 to 1
                            // tone 1 has no allomorph
                            s.popLetter();
                            ret.push(s);
                        }
                    }
                    //console.log(ret)
                    return ret;
                }
            }
            else if (allomorph instanceof version2_2.CheckedAllomorph) {
                // pop the last letter
                // no need to push letter
                // 1 to 4. 3 to 8. 2 to 4. 5 to 8.
                if (allomorph.tonal.toString() === '')
                    return [];
                const s = new TonalSyllable(sounds.map(x => new grapheme_1.AlphabeticLetter(x.characters)));
                s.popLetter();
                //console.log(s.literal)
                return [s];
            }
        }
        return []; // return empty array
    }
}
exports.TonalUncombiningForms = TonalUncombiningForms;
//------------------------------------------------------------------------------
function syllabifyTonal(letters, beginOfSyllable) {
    // get the longest matched syllable pattern
    let literal = '';
    let matched = '';
    let begin = 0;
    let ltrs = new Array();
    let matchedLtrs = new Array();
    const sft = new version2_1.SetOfFreeTonals();
    const ssf = new version2_1.SetOfStopFinals();
    const faurs = version2_1.freeAllomorphUncombiningRules;
    const slicer = function (letters, beginOfSyllable, i) {
        const slicedLetters = letters.slice(beginOfSyllable, i);
        let lit = '';
        for (let i in slicedLetters) {
            lit = lit + slicedLetters[i].literal;
        }
        return lit;
    };
    for (let i = beginOfSyllable; i < letters.length; i++) {
        literal = literal + letters[i].literal;
        ltrs.push(letters[i].literal);
        //console.log(`begining of the loop: ${literal}. ${ltrs}`)
        if (lexicalroots2_1.list_of_lexical_roots.includes(literal) && sft.beginWith(letters[i].literal)) {
            //console.log(`i: ${i}, literal: ${literal}, tone: ${letters[i].literal}, letters[i+1]: ${letters[i + 1].literal}`)
            if (begin === beginOfSyllable) {
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
            }
            break;
        }
        else if (lexicalroots2_1.list_of_lexical_roots.includes(literal) && ssf.beginWith(letters[i].literal)) {
            //console.log(`i: ${i}, literal: ${literal}, stopFinal: ${letters[i].literal}`)
            //console.log(`begin: ${begin}, beginOfSyllable: ${beginOfSyllable}`)
            if (begin === beginOfSyllable) {
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
            }
            break;
        }
        else if (sft.beginWith(letters[i].literal)) {
            // console.log('i: %d', i)
            // console.log(`i: ${i}, literal: ${literal}, letters[i].literal, ${letters[i].literal}`)
            // when there are tonals
            if ((literal.length > 1 &&
                letters[i] &&
                letters[i - 1] &&
                matcher_1.sm_bgkp_f(letters[i - 1].literal, letters[i].literal)) ||
                (literal.length > 1 && matcher_1.sm_bbggkkpp_wx(letters[i - 1].literal, letters[i].literal))) {
                // this combining form is not present in the pool.
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
                break;
            }
            else if (literal.length > 2 &&
                letters[i] &&
                letters[i - 1] &&
                letters[i - 2] &&
                matcher_1.sm_m_hh_w(letters[i - 2].literal, letters[i - 1].literal, letters[i].literal)) {
                // for lexical roots end with ~mhhw.
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
                break;
            }
            const ts = faurs.get(letters[i].literal);
            //console.log(ts)
            if (ts.length > 0) {
                for (let t of ts) {
                    //console.log(lit + t.toString())
                    if (lexicalroots2_1.list_of_lexical_roots.includes(slicer(letters, beginOfSyllable, i) + t.toString())) {
                        // this combining form is not present in the pool,
                        // but its uncombining forms are. e.g. aw.
                        matched = literal;
                        //begin = beginOfSyllable;
                        Object.assign(matchedLtrs, ltrs);
                        break;
                    }
                }
                if (matched.length > 0 && matchedLtrs.length > 0)
                    break;
            }
            else {
                // no uncombining forms for this combining form. e.g. ax.
                matched = '';
                matchedLtrs = [];
            }
        }
        else if (lexicalroots2_1.list_of_lexical_roots.includes(literal)) {
            matched = literal;
            Object.assign(matchedLtrs, ltrs);
            begin = beginOfSyllable;
            //console.log(matched)
        }
        else {
            //console.log('no matched for syllabifyTonal:' + ltrs)
            // when there are no tonals
            if (letters[i].literal === version2_1.TonalLetterTags.gg) {
                // for surface form gg whose underlying form could be tt or kk.
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
            }
            else if (!sft.beginWith(letters[i].literal)) {
                // free first tone without a free tonal
                const ts = faurs.get(version2_1.TonalLetterTags.zero);
                for (let t of ts) {
                    // append second tonal letter
                    // check the uncombining forms
                    if (lexicalroots2_1.list_of_lexical_roots.includes(literal + t.toString())) {
                        // if the free first tone's lemma is included
                        matched = literal;
                        Object.assign(matchedLtrs, ltrs);
                        //break;
                    }
                }
            }
            // when there is no matched lexcial roots for this syllable, we still assign begin
            begin = beginOfSyllable;
        }
    }
    // console.log(`literal: ${literal}. matched: ${matched}`)
    // console.log(matchedLtrs)
    if (matched.length > 0 && literal.length > matched.length) {
        // when ~ay is longer than ~a by one letter y
        // for those first tone lexcial roots that are present
        matched = '';
        matchedLtrs = [];
    }
    //console.log('matched: ' + matched)
    const tsg = new soundgen_1.TonalSoundGenerator();
    //console.log('matched: ' + matched)
    let list = new Array();
    if (matched.length > 0) {
        list = tsg.generate(matchedLtrs);
    }
    else {
        if (ltrs.length == 3 && ltrs[1] === 'a' && ltrs[2] === 'y') {
            const ep = new version2_1.Epenthesis();
            const rea = new morpheme_1.RemovingEpenthesisOfAy();
            const done = rea.applyToString(literal);
            //console.log(done.toString())
            if (ep.beginWith(ltrs[0]) && lexicalroots2_1.list_of_lexical_roots.includes(done)) {
                list = tsg.generate(ltrs);
            }
        }
    }
    //console.log(list)
    let matchedLen = 0;
    let mp = new morpheme_1.MatchedPattern();
    for (let m in list) {
        const min = Math.min(letters.length - beginOfSyllable, list[m].length);
        if (list[m].length == min) {
            for (let n = 0; n < min; n++) {
                if (list[m][n] != undefined) {
                    if (letters[beginOfSyllable + n].literal === list[m][n].toString()) {
                        //console.log(syllabary[m])
                        if (n + 1 == min && min > matchedLen) {
                            // to make sure it is longer than previous patterns
                            // last letter matched for the pattern
                            matchedLen = min;
                            // copy the matched letters
                            for (let q = 0; q < matchedLen; q++) {
                                mp.letters[q] = letters[beginOfSyllable + q];
                            }
                            // copy the pattern of sounds
                            mp.pattern = list[m];
                            //console.log(syllabary.list[m])
                            //console.log(mp.letters)
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
    }
    return mp;
}
exports.syllabifyTonal = syllabifyTonal;
//------------------------------------------------------------------------------
class TonalSyllable extends morpheme_1.Syllable {
    popLetter() {
        this.letters = this.letters.slice(0, this.letters.length - 1);
        this.concat();
    }
    get lastLetter() {
        if (this.letters.length >= 1)
            return this.letters[this.letters.length - 1];
        return new grapheme_1.AlphabeticLetter();
    }
    get lastSecondLetter() {
        if (this.letters.length >= 2)
            return this.letters[this.letters.length - 2];
        return new grapheme_1.AlphabeticLetter();
    }
}
exports.TonalSyllable = TonalSyllable;
//------------------------------------------------------------------------------
class TonalUncombiningMorpheme extends morpheme_1.Morpheme {
    constructor(syllable, sounds, tcm) {
        super();
        this.syllable = syllable;
        this.metaplasm = tcm;
        // assign allomorph for each syllable
        this.allomorph = this.assignAllomorph(this.syllable);
        this.sounds = new Array();
        this.sounds = sounds;
    }
    getForms() {
        return this.metaplasm.apply(this.sounds, this.allomorph);
    }
    assignAllomorph(syllable) {
        let allomorph = new version2_1.ZeroAllomorph();
        // assign the matched allomorph for this syllable
        let aoas = []; // array of allomorphs
        let keys = Array.from(version2_1.checkedAllomorphs.keys());
        for (let k = 0; k < keys.length; k++) {
            let am = version2_1.checkedAllomorphs.get(keys[k]);
            if (am instanceof version2_2.CheckedAllomorph) {
                if (am.tonal) {
                    if (am.tonal.toString() === syllable.lastLetter.literal &&
                        am.final.toString() === syllable.lastSecondLetter.literal) {
                        aoas.push(version2_1.checkedAllomorphs.get(keys[k]));
                        break;
                    }
                    else {
                        if (am.final.toString() === syllable.lastLetter.literal) {
                            aoas.push(version2_1.checkedAllomorphs.get(keys[k]));
                            break;
                        }
                    }
                }
            }
        }
        if (aoas.length > 0) {
            // there is only one match after processing, we just assign it
            let ret = aoas.shift();
            if (ret)
                return ret;
        }
        // after matching with checked allomorphs, we go on matching free allomorphs
        aoas = [];
        if (version2_1.freeAllomorphs.has(syllable.lastLetter.literal)) {
            aoas.push(version2_1.freeAllomorphs.get(syllable.lastLetter.literal));
        }
        if (aoas.length == 0) {
            // tone 1 has no allomorph
            allomorph = new version2_1.ZeroAllomorph();
        }
        else if (aoas.length == 1) {
            // are there multiple allomorphs? there should be only one.
            for (let i = 0; i < aoas.length; i++) {
                if (aoas[i].tonal.isEqualToTonal(new version2_1.AllomorphX().tonal)) {
                    // this syllable is already in base form
                    // in order to display this inflectional ending, we have to assign
                    allomorph = aoas[i];
                }
                else {
                    allomorph = aoas[i];
                }
            }
        }
        return allomorph;
    }
}
exports.TonalUncombiningMorpheme = TonalUncombiningMorpheme;
//------------------------------------------------------------------------------
class TonalUncombiningMorphemeMaker extends morpheme_1.MorphemeMaker {
    constructor(tcm) {
        super();
        this.euphonicFinals = new Array();
        this.euphonicFinalTonals = new Array();
        this.metaplasm = tcm;
    }
    createMorphemes() {
        return new Array();
    }
    createMorpheme(msp) {
        const tum = new TonalUncombiningMorpheme(new TonalSyllable(msp.letters), msp.pattern, this.metaplasm);
        return tum;
    }
    preprocessEuphonicFinal(letters) {
        this.euphonicFinals.push(letters[letters.length - 1]);
        return letters.slice(0, letters.length - 1);
    }
    preprocessEuphonicFinalTonal(letters, literal, regex, len) {
        const arr = literal.match(regex);
        // console.log(arr)
        let indx = -1;
        if (len == 1) {
            for (let i = 0; i < letters.length - 1; i++) {
                if (matcher_1.sm_jls_f(letters[i].literal, letters[i + 1].literal) ||
                    matcher_1.sm_jjllss_wx(letters[i].literal, letters[i + 1].literal)) {
                    indx = i;
                    break;
                }
            }
        }
        else if (len == 2) {
            for (let i = 0; i < letters.length - 2; i++) {
                if (matcher_1.sm_mnng_h_f(letters[i].literal, letters[i + 1].literal, letters[i + 2].literal) ||
                    matcher_1.sm_mnng_hh_wx(letters[i].literal, letters[i + 1].literal, letters[i + 2].literal)) {
                    indx = i;
                    break;
                }
            }
        }
        if (arr) {
            for (let i in arr) {
                const idxl = literal.search(arr[i]);
                const sub1 = literal.substring(0, idxl);
                const sub2 = literal.substring(idxl + arr[i].length);
                // in case of hmhhw or hmhhwhmhhw
                // check if the previous letter is a consonant
                if (new kana_1.SetOfInitialConsonants().beginWith(sub1))
                    return letters;
                let fnl;
                if (new version2_1.FirstTonalF().beginWith(arr[i].charAt(arr[i].length - 1))) {
                    literal = sub1.concat(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.f, sub2);
                    fnl = letters.splice(indx, len, version2_1.lowerLettersOfTonal.get(version2_1.TonalLetterTags.t));
                }
                else if (new version2_1.ThirdFifthTonalsWX().beginWith(arr[i].charAt(arr[i].length - 1))) {
                    if (arr[i].charAt(arr[i].length - 1) === version2_1.TonalLetterTags.w)
                        literal = sub1.concat(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.w, sub2);
                    else if (arr[i].charAt(arr[i].length - 1) === version2_1.TonalLetterTags.x)
                        literal = sub1.concat(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.x, sub2);
                    fnl = letters.splice(indx, len, version2_1.lowerLettersOfTonal.get(version2_1.TonalLetterTags.tt));
                }
                // console.log(literal)
                if (fnl && len == 1)
                    this.euphonicFinalTonals.push({ index: indx, letters: [fnl[0]] });
                else if (fnl && len == 2)
                    this.euphonicFinalTonals.push({ index: indx, letters: [fnl[0], fnl[1]] });
            }
            // console.log(this.euphonicFinalTonals[0].letters)
        }
        return letters;
    }
    replaceEuphonicFinal(letters) {
        const slicedLetters = letters.slice(0, letters.length - 1);
        const literal = slicedLetters.map(it => it.literal).join('');
        if (letters.length > 0 &&
            letters[letters.length - 1].literal === version2_1.TonalLetterTags.gg &&
            lexicalroots2_1.list_of_lexical_roots.includes(literal + version2_1.TonalLetterTags.tt) &&
            !lexicalroots2_1.list_of_lexical_roots.includes(literal + version2_1.TonalLetterTags.kk)) {
            // for surface form gg whose underlying form is tt but not kk
            const ls = this.preprocessEuphonicFinal(letters);
            ls.push(version2_1.lowerLettersOfTonal.get(version2_1.TonalLetterTags.tt));
            return ls;
        }
        return letters;
    }
    replaceEuphonicFinalTonal(letters) {
        let literal = letters.map(x => x.literal).join('');
        if (literal.length > 1 && matcher_1.regex_jls_f.test(literal)) {
            const ls = this.preprocessEuphonicFinalTonal(letters, literal, matcher_1.regex_jls_f, 1);
            return ls;
        }
        else if (literal.length > 1 && matcher_1.regex_jjllss_wx.test(literal)) {
            const ls = this.preprocessEuphonicFinalTonal(letters, literal, matcher_1.regex_jjllss_wx, 1);
            return ls;
        }
        else if (literal.length > 2 && matcher_1.regex_mnng_h_f.test(literal)) {
            const ls = this.preprocessEuphonicFinalTonal(letters, literal, matcher_1.regex_mnng_h_f, 2);
            return ls;
        }
        else if (literal.length > 2 && matcher_1.regex_mnng_hh_wx.test(literal)) {
            const ls = this.preprocessEuphonicFinalTonal(letters, literal, matcher_1.regex_mnng_hh_wx, 2);
            return ls;
        }
        return letters;
    }
    replaceInitial() {
        return [];
    }
    replaceMedial() {
        return [];
    }
    preprocess(gs) {
        let ltrs = new Array();
        ltrs = gs.map(it => it.letter);
        ltrs = this.replaceEuphonicFinal(ltrs);
        ltrs = this.replaceEuphonicFinalTonal(ltrs);
        return ltrs;
    }
    postprocess_euphonic_t_or_tt(pattern) {
        if ((pattern.letters[pattern.letters.length - 1].literal === version2_1.TonalLetterTags.t ||
            pattern.letters[pattern.letters.length - 1].literal === version2_1.TonalLetterTags.tt) &&
            this.euphonicFinals.length > 0) {
            pattern.letters.pop();
            pattern.pattern.pop();
            const fnl = this.euphonicFinals.pop();
            if (fnl) {
                pattern.letters.push(fnl);
                const snd = version2_1.tonalPositionalSound.get(fnl.literal);
                if (snd)
                    pattern.pattern.push(snd(version2_1.TonalSoundTags.stopFinal));
            }
        }
        else if (this.euphonicFinalTonals.length > 0) {
            const fnl = this.euphonicFinalTonals.pop();
            if (fnl) {
                if (fnl.letters.length == 1) {
                    pattern.letters.splice(fnl.index, 1, fnl.letters[0]);
                    const snd = version2_1.tonalPositionalSound.get(fnl.letters[0].literal);
                    if (snd)
                        pattern.pattern.splice(fnl.index, 1, snd(version2_1.TonalSoundTags.stopFinal));
                }
                else if (fnl.letters.length == 2) {
                    // console.log(pattern)
                    pattern.letters.splice(fnl.index, 1, fnl.letters[0], fnl.letters[1]);
                    const snd1 = version2_1.tonalPositionalSound.get(fnl.letters[0].literal);
                    const snd2 = version2_1.tonalPositionalSound.get(fnl.letters[1].literal);
                    if (snd1 && snd2)
                        pattern.pattern.splice(fnl.index, 1, snd1(version2_1.TonalSoundTags.nasalFinal), snd2(version2_1.TonalSoundTags.stopFinal));
                    // console.log(pattern)
                }
            }
        }
        return pattern;
    }
    postprocess(patterns) {
        let morphemes = this.createMorphemes();
        for (let i in patterns) {
            const pat = this.postprocess_euphonic_t_or_tt(patterns[i]);
            morphemes.push(this.createMorpheme(pat));
        }
        return morphemes;
    }
    makeMorphemes(gs) {
        const ltrs = this.preprocess(gs);
        const ptrns = this.make(ltrs, syllabifyTonal);
        const ms = this.postprocess(ptrns);
        return ms;
    }
}
exports.TonalUncombiningMorphemeMaker = TonalUncombiningMorphemeMaker;
//# sourceMappingURL=morpheme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/soundgen.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/soundgen.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
function initialConsonant(sg) {
    const sis = new version2_1.SetOfInitials();
    if (sis.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.initial);
            if (s)
                sg.sounds.push(s);
        }
    }
    else
        sg.bool = false;
    return sg;
}
function stopFinalConsonant(sg) {
    if (!sg.bool)
        return sg;
    const ssfs = new version2_1.SetOfStopFinals();
    if (ssfs.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.stopFinal);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function neutralFinalConsonant(sg) {
    const snfs = new version2_1.SetOfNeutralFinals();
    if (snfs.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.stopFinal);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function nasalFinalConsonant(sg) {
    if (!sg.bool)
        return sg;
    const snfs = new version2_1.SetOfNasalFinals();
    if (snfs.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.nasalFinal);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function vowel(sg) {
    const sms = new version2_1.SetOfMedials();
    let matches = 0;
    for (let i = sg.sounds.length; i < sg.letters.length; i++) {
        if (sms.beginWith(sg.letters[i])) {
            const ps = version2_1.tonalPositionalSound.get(sg.letters[i]);
            if (ps) {
                const s = ps(version2_1.TonalSoundTags.medial);
                matches++;
                if (s)
                    sg.sounds.push(s);
            }
        }
        else {
            if (matches == 0)
                sg.bool = false;
            break;
        }
    }
    return sg;
}
function materLectionis(sg) {
    const sml = new version2_1.SetOfMaterLectionis();
    if (sml.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.medial);
            if (s)
                sg.sounds.push(s);
        }
    }
    else
        sg.bool = false;
    return sg;
}
function nasalization(sg) {
    if (!sg.bool)
        return sg;
    const sns = new version2_1.SetOfNasalizations();
    if (sns.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.nasalization);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function freeTone(sg) {
    if (!sg.bool)
        return sg;
    const sfts = new version2_1.SetOfFreeTonals();
    if (sfts.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.freeTonal);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function checkedTone(sg) {
    if (!sg.bool)
        return sg;
    const scts = new version2_1.SetOfCheckedTonals();
    if (scts.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.checkedTonal);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
function euphonicFinalConsonant(sg) {
    if (!sg.bool)
        return sg;
    const ef_bgjklps = new version2_1.EuphonicFinalsBGJKLPS();
    const ef_bbggjjkkllppss = new version2_1.EuphonicFinalsBBGGJJKKLLPPSS();
    if (ef_bgjklps.beginWith(sg.letters[sg.sounds.length]) ||
        ef_bbggjjkkllppss.beginWith(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.stopFinal);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
// common syllables
const sc_v = grapheme_1.pipe(vowel);
const sc_m = grapheme_1.pipe(materLectionis);
const sc_vt = grapheme_1.pipe(vowel, freeTone);
const sc_mt = grapheme_1.pipe(materLectionis, freeTone);
//const sc_mc = pipe(materLectionis, neutralFinalConsonant);
const sc_cv = grapheme_1.pipe(initialConsonant, vowel);
const sc_vc1 = grapheme_1.pipe(vowel, stopFinalConsonant);
const sc_vc2 = grapheme_1.pipe(vowel, nasalFinalConsonant);
const sc_vct1 = grapheme_1.pipe(vowel, stopFinalConsonant, checkedTone);
const sc_vct2 = grapheme_1.pipe(vowel, nasalFinalConsonant, freeTone);
const sc_cvt = grapheme_1.pipe(initialConsonant, vowel, freeTone);
const sc_cvc1 = grapheme_1.pipe(initialConsonant, vowel, stopFinalConsonant);
const sc_cvc2 = grapheme_1.pipe(initialConsonant, vowel, nasalFinalConsonant);
const sc_cvct1 = grapheme_1.pipe(initialConsonant, vowel, stopFinalConsonant, checkedTone);
const sc_cvct2 = grapheme_1.pipe(initialConsonant, vowel, nasalFinalConsonant, freeTone);
//const sc_cvcc = pipe(initialConsonant, vowel, nasalFinalConsonant, neutralFinalConsonant);
// consonant syllables
const sc_cc = grapheme_1.pipe(initialConsonant, nasalFinalConsonant);
const sc_cct = grapheme_1.pipe(initialConsonant, nasalFinalConsonant, freeTone);
const sc_ccc = grapheme_1.pipe(initialConsonant, nasalFinalConsonant, neutralFinalConsonant);
const sc_ccct = grapheme_1.pipe(initialConsonant, nasalFinalConsonant, neutralFinalConsonant, checkedTone);
// nasalization syllables
const sc_vn = grapheme_1.pipe(vowel, nasalization);
const sc_vnt = grapheme_1.pipe(vowel, nasalization, freeTone);
const sc_cvn = grapheme_1.pipe(initialConsonant, vowel, nasalization);
const sc_cvnt = grapheme_1.pipe(initialConsonant, vowel, nasalization, freeTone);
//const sc_vnc = pipe(vowel, nasalization, neutralFinalConsonant);
//const sc_vnct = pipe(vowel, nasalization, neutralFinalConsonant, checkedTone);
const sc_cvnc = grapheme_1.pipe(initialConsonant, vowel, nasalization, neutralFinalConsonant);
const sc_cvnct = grapheme_1.pipe(initialConsonant, vowel, nasalization, neutralFinalConsonant, checkedTone);
// euphonic syllables
const sc_vc3 = grapheme_1.pipe(vowel, euphonicFinalConsonant);
const sc_vct3 = grapheme_1.pipe(vowel, euphonicFinalConsonant, checkedTone);
const sc_cvc3 = grapheme_1.pipe(initialConsonant, vowel, euphonicFinalConsonant);
const sc_cvct3 = grapheme_1.pipe(initialConsonant, vowel, euphonicFinalConsonant, checkedTone);
const sc_cvcct = grapheme_1.pipe(initialConsonant, vowel, nasalFinalConsonant, neutralFinalConsonant, checkedTone);
class TonalSoundGenerator {
    constructor() {
        // syllable compositions
        this.sylCompositions = [
            sc_v,
            sc_m,
            sc_vt,
            sc_mt,
            sc_cv,
            sc_vc1,
            sc_vc2,
            sc_vct1,
            sc_vct2,
            sc_cvt,
            sc_cvc1,
            sc_cvc2,
            sc_cvct1,
            sc_cvct2,
            sc_cc,
            sc_cct,
            sc_ccc,
            sc_ccct,
            sc_vn,
            sc_vnt,
            sc_cvn,
            sc_cvnt,
            sc_cvnc,
            sc_cvnct,
            sc_vc3,
            sc_vct3,
            sc_cvc3,
            sc_cvct3,
            sc_cvcct,
        ];
    }
    isStopFinal(str) {
        if (new version2_1.SetOfStopFinals().beginWith(str))
            return true;
        return false;
    }
    genChecked(ltrs) {
        const to_s = version2_1.combiningRules.get(ltrs[ltrs.length - 1]);
        let strs = new Array();
        strs.push(ltrs);
        //console.debug(to_s)
        if (to_s) {
            for (let i in to_s) {
                let syl = new Array();
                Object.assign(syl, ltrs);
                syl.push(to_s[i].toString());
                strs.push(syl);
            }
        }
        return strs;
    }
    generate(letters) {
        let strs = new Array();
        let sequences = new Array(); // to be returned
        if (this.isStopFinal(letters[letters.length - 1])) {
            strs = this.genChecked(letters);
        }
        else {
            strs.push(letters);
        }
        for (let i in strs) {
            // generates all needed sounds to be processed
            for (let j = 0; j < this.sylCompositions.length; j++) {
                let sg = new grapheme_1.SoundGeneration();
                sg.letters = strs[i];
                //console.log(`j: ${j}`)
                sg = this.sylCompositions[j](sg);
                if (sg.letters.length == sg.sounds.length && sg.bool == true) {
                    sequences.push(sg.sounds);
                    break;
                }
            }
        }
        //console.log(sequences)
        return sequences;
    }
}
exports.TonalSoundGenerator = TonalSoundGenerator;
//# sourceMappingURL=soundgen.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/version2.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/version2.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grapheme_1 = __webpack_require__(/*! ../grapheme */ "./node_modules/taipa/lib/grapheme.js");
//------------------------------------------------------------------------------
class Morph {
}
exports.Morph = Morph;
//------------------------------------------------------------------------------
class Allomorph extends Morph {
    constructor() {
        super(...arguments);
        this.tonal = new Tonal();
    }
    toString() {
        if (this.tonal.toString().length == 0) {
            // return string 'zero' for first tone. member variable characters of graph is still null.
            return TonalLetterTags.zero;
        }
        else
            return this.tonal.toString();
    }
}
exports.Allomorph = Allomorph;
class FreeAllomorph extends Allomorph {
}
exports.FreeAllomorph = FreeAllomorph;
class CheckedAllomorph extends Allomorph {
    constructor() {
        super(...arguments);
        this.final = new Final();
    }
    toString() {
        if (this.tonal.toString()) {
            return this.final.toString() + this.tonal.toString();
        }
        return this.final.toString();
    }
}
exports.CheckedAllomorph = CheckedAllomorph;
class TonalAffix extends Morph {
    constructor() {
        super(...arguments);
        this.tonal = new Tonal();
    }
    toString() {
        return this.tonal.toString();
    }
}
exports.TonalAffix = TonalAffix;
class FreeAffix extends TonalAffix {
}
class CheckedAffix extends TonalAffix {
}
//------------------------------------------------------------------------------
var TonalLetterTags;
(function (TonalLetterTags) {
    TonalLetterTags["a"] = "a";
    TonalLetterTags["e"] = "e";
    TonalLetterTags["i"] = "i";
    TonalLetterTags["o"] = "o";
    TonalLetterTags["u"] = "u";
    TonalLetterTags["ur"] = "ur";
    TonalLetterTags["c"] = "c";
    TonalLetterTags["d"] = "d";
    TonalLetterTags["ch"] = "ch";
    TonalLetterTags["j"] = "j";
    TonalLetterTags["q"] = "q";
    TonalLetterTags["s"] = "s";
    TonalLetterTags["v"] = "v";
    TonalLetterTags["m"] = "m";
    TonalLetterTags["n"] = "n";
    TonalLetterTags["ng"] = "ng";
    TonalLetterTags["nn"] = "nn";
    TonalLetterTags["f"] = "f";
    TonalLetterTags["w"] = "w";
    TonalLetterTags["x"] = "x";
    TonalLetterTags["xx"] = "xx";
    TonalLetterTags["xxx"] = "xxx";
    TonalLetterTags["y"] = "y";
    TonalLetterTags["z"] = "z";
    TonalLetterTags["zx"] = "zx";
    TonalLetterTags["b"] = "b";
    TonalLetterTags["g"] = "g";
    TonalLetterTags["l"] = "l";
    TonalLetterTags["k"] = "k";
    TonalLetterTags["p"] = "p";
    TonalLetterTags["t"] = "t";
    TonalLetterTags["kk"] = "kk";
    TonalLetterTags["pp"] = "pp";
    TonalLetterTags["tt"] = "tt";
    TonalLetterTags["hh"] = "hh";
    TonalLetterTags["bb"] = "bb";
    TonalLetterTags["gg"] = "gg";
    TonalLetterTags["jj"] = "jj";
    TonalLetterTags["ll"] = "ll";
    TonalLetterTags["ss"] = "ss";
    TonalLetterTags["h"] = "h";
    TonalLetterTags["zero"] = "zero";
    TonalLetterTags["er"] = "er";
    TonalLetterTags["ir"] = "ir";
    TonalLetterTags["or"] = "or";
})(TonalLetterTags = exports.TonalLetterTags || (exports.TonalLetterTags = {}));
class LettersOfTonal extends grapheme_1.Letters {
}
exports.LettersOfTonal = LettersOfTonal;
exports.lowerLettersOfTonal = new LettersOfTonal([
    TonalLetterTags.a,
    TonalLetterTags.e,
    TonalLetterTags.i,
    TonalLetterTags.o,
    TonalLetterTags.u,
    TonalLetterTags.ur,
    TonalLetterTags.c,
    TonalLetterTags.d,
    TonalLetterTags.ch,
    TonalLetterTags.j,
    TonalLetterTags.q,
    TonalLetterTags.s,
    TonalLetterTags.v,
    TonalLetterTags.m,
    TonalLetterTags.n,
    TonalLetterTags.ng,
    TonalLetterTags.nn,
    TonalLetterTags.w,
    TonalLetterTags.xx,
    TonalLetterTags.xxx,
    TonalLetterTags.z,
    TonalLetterTags.zx,
    TonalLetterTags.x,
    TonalLetterTags.y,
    TonalLetterTags.b,
    TonalLetterTags.g,
    TonalLetterTags.l,
    TonalLetterTags.k,
    TonalLetterTags.p,
    TonalLetterTags.t,
    TonalLetterTags.kk,
    TonalLetterTags.pp,
    TonalLetterTags.tt,
    TonalLetterTags.hh,
    TonalLetterTags.bb,
    TonalLetterTags.gg,
    TonalLetterTags.jj,
    TonalLetterTags.ll,
    TonalLetterTags.ss,
    TonalLetterTags.f,
    TonalLetterTags.h,
    TonalLetterTags.er,
    TonalLetterTags.ir,
    TonalLetterTags.or,
]);
//------------------------------------------------------------------------------
var TonalSoundTags;
(function (TonalSoundTags) {
    TonalSoundTags["initial"] = "initial";
    TonalSoundTags["medial"] = "medial";
    TonalSoundTags["nasalization"] = "nasalization";
    TonalSoundTags["final"] = "final";
    TonalSoundTags["tonal"] = "tonal";
    TonalSoundTags["stopFinal"] = "stopFinal";
    TonalSoundTags["nasalFinal"] = "nasalFinal";
    TonalSoundTags["checkedTonal"] = "checkedTonal";
    TonalSoundTags["freeTonal"] = "freeTonal";
})(TonalSoundTags = exports.TonalSoundTags || (exports.TonalSoundTags = {}));
class Initial extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.initial;
    }
}
exports.Initial = Initial;
class Medial extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.medial;
    }
}
exports.Medial = Medial;
class Final extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.final;
    }
}
exports.Final = Final;
class Nasalization extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.nasalization;
    }
}
exports.Nasalization = Nasalization;
class Tonal extends grapheme_1.Sound {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.tonal;
    }
    isEqualToTonal(tonal) {
        if (this.toString() === tonal.toString()) {
            return true;
        }
        return false;
    }
}
exports.Tonal = Tonal;
class FreeTonal extends Tonal {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.freeTonal;
    }
}
exports.FreeTonal = FreeTonal;
class CheckedTonal extends Tonal {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.checkedTonal;
    }
}
exports.CheckedTonal = CheckedTonal;
class StopFinal extends Final {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.stopFinal;
    }
}
exports.StopFinal = StopFinal;
class NasalFinal extends Final {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.nasalFinal;
    }
}
exports.NasalFinal = NasalFinal;
class MedialA extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.a);
    }
}
class MedialE extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.e);
    }
}
class MedialI extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.i);
    }
}
class MedialO extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.o);
    }
}
class MedialU extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.u);
    }
}
class MedialUR extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.ur);
    }
}
class MedialER extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.er);
    }
}
class MedialIR extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.ir);
    }
}
class MedialOR extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.or);
    }
}
class MaterLectionisM extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.m);
    }
}
class MaterLectionisN extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.n);
    }
}
class MaterLectionisNG extends Medial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.ng);
    }
}
class InitialC extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.c);
    }
}
class InitialCH extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.ch);
    }
}
class InitialJ extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.j);
    }
}
class InitialL extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.l);
    }
}
class InitialQ extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.q);
    }
}
class InitialS extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.s);
    }
}
class InitialV extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.v);
    }
}
class InitialH extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.h);
    }
}
class InitialP extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.p);
    }
}
class InitialT extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.t);
    }
}
class InitialK extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.k);
    }
}
class InitialB extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.b);
    }
}
class InitialD extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.d);
    }
}
class InitialG extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.g);
    }
}
class InitialM extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.m);
    }
}
class InitialN extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.n);
    }
}
class InitialNG extends Initial {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.ng);
    }
}
class ZeroTonal extends Tonal {
    constructor() {
        super(...arguments);
        this.characters = [];
    }
}
exports.ZeroTonal = ZeroTonal;
class FreeTonalZ extends FreeTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.z);
    }
}
exports.FreeTonalZ = FreeTonalZ;
class FreeTonalW extends FreeTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.w);
    }
}
exports.FreeTonalW = FreeTonalW;
class FreeTonalF extends FreeTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.f);
    }
}
exports.FreeTonalF = FreeTonalF;
class FreeTonalXX extends FreeTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.xx);
    }
}
exports.FreeTonalXX = FreeTonalXX;
class FreeTonalXXX extends FreeTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.xxx);
    }
}
exports.FreeTonalXXX = FreeTonalXXX;
class FreeTonalZX extends FreeTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.zx);
    }
}
exports.FreeTonalZX = FreeTonalZX;
class FreeTonalX extends FreeTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.x);
    }
}
exports.FreeTonalX = FreeTonalX;
class FreeTonalY extends FreeTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.y);
    }
}
exports.FreeTonalY = FreeTonalY;
class CheckedTonalW extends CheckedTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.w);
    }
}
exports.CheckedTonalW = CheckedTonalW;
class CheckedTonalF extends CheckedTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.f);
    }
}
exports.CheckedTonalF = CheckedTonalF;
class CheckedTonalX extends CheckedTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.x);
    }
}
exports.CheckedTonalX = CheckedTonalX;
class CheckedTonalY extends CheckedTonal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.y);
    }
}
exports.CheckedTonalY = CheckedTonalY;
class FinalP extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.p);
    }
}
exports.FinalP = FinalP;
class FinalT extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.t);
    }
}
exports.FinalT = FinalT;
class FinalK extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.k);
    }
}
exports.FinalK = FinalK;
class FinalH extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.h);
    }
}
exports.FinalH = FinalH;
class FinalPP extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.pp);
    }
}
exports.FinalPP = FinalPP;
class FinalTT extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.tt);
    }
}
exports.FinalTT = FinalTT;
class FinalKK extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.kk);
    }
}
exports.FinalKK = FinalKK;
class FinalHH extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.hh);
    }
}
exports.FinalHH = FinalHH;
class FinalB extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.b);
    }
}
class FinalL extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.l);
    }
}
class FinalG extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.g);
    }
}
class FinalJ extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.j);
    }
}
class FinalS extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.s);
    }
}
class FinalBB extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.bb);
    }
}
class FinalLL extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.ll);
    }
}
class FinalGG extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.gg);
    }
}
class FinalJJ extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.jj);
    }
}
class FinalSS extends StopFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.ss);
    }
}
class FinalM extends NasalFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.m);
    }
}
class FinalN extends NasalFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.n);
    }
}
class FinalNG extends NasalFinal {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.ng);
    }
}
class NasalizationNN extends Nasalization {
    constructor() {
        super(...arguments);
        this.characters = this.makeCharacters(TonalLetterTags.nn);
    }
}
class SetOfNasalizations extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new NasalizationNN());
    }
}
exports.SetOfNasalizations = SetOfNasalizations;
class SetOfNasalFinals extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalM());
        this.sounds.push(new FinalN());
        this.sounds.push(new FinalNG());
    }
}
exports.SetOfNasalFinals = SetOfNasalFinals;
class SetOfNeutralFinals extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalH());
        this.sounds.push(new FinalHH());
    }
}
exports.SetOfNeutralFinals = SetOfNeutralFinals;
class SetOfMedials extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new MedialA());
        this.sounds.push(new MedialE());
        this.sounds.push(new MedialI());
        this.sounds.push(new MedialO());
        this.sounds.push(new MedialU());
        this.sounds.push(new MedialUR());
    }
}
exports.SetOfMedials = SetOfMedials;
class SetOfMaterLectionis extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new MaterLectionisM());
        this.sounds.push(new MaterLectionisN());
        this.sounds.push(new MaterLectionisNG());
    }
}
exports.SetOfMaterLectionis = SetOfMaterLectionis;
class SetOfInitials extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new InitialP());
        this.sounds.push(new InitialT());
        this.sounds.push(new InitialK());
        this.sounds.push(new InitialB());
        this.sounds.push(new InitialD());
        this.sounds.push(new InitialG());
        this.sounds.push(new InitialH());
        this.sounds.push(new InitialC());
        this.sounds.push(new InitialCH());
        this.sounds.push(new InitialJ());
        this.sounds.push(new InitialL());
        this.sounds.push(new InitialQ());
        this.sounds.push(new InitialS());
        this.sounds.push(new InitialV());
        this.sounds.push(new InitialM());
        this.sounds.push(new InitialN());
        this.sounds.push(new InitialNG());
    }
}
exports.SetOfInitials = SetOfInitials;
class SetOfFreeTonals extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FreeTonalZ());
        this.sounds.push(new FreeTonalW());
        this.sounds.push(new FreeTonalXX());
        this.sounds.push(new FreeTonalXXX());
        this.sounds.push(new FreeTonalF());
        this.sounds.push(new FreeTonalZX());
        this.sounds.push(new FreeTonalX());
        this.sounds.push(new FreeTonalY());
    }
}
exports.SetOfFreeTonals = SetOfFreeTonals;
class SetOfCheckedTonals extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new CheckedTonalF());
        this.sounds.push(new CheckedTonalY());
        this.sounds.push(new CheckedTonalW());
        this.sounds.push(new CheckedTonalX());
    }
}
exports.SetOfCheckedTonals = SetOfCheckedTonals;
class SetOfFinals extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalP());
        this.sounds.push(new FinalT());
        this.sounds.push(new FinalK());
        this.sounds.push(new FinalH());
        this.sounds.push(new FinalPP());
        this.sounds.push(new FinalTT());
        this.sounds.push(new FinalKK());
        this.sounds.push(new FinalHH());
        this.sounds.push(new FinalM());
        this.sounds.push(new FinalN());
        this.sounds.push(new FinalNG());
    }
}
exports.SetOfFinals = SetOfFinals;
class SetOfStopFinals extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalP());
        this.sounds.push(new FinalT());
        this.sounds.push(new FinalK());
        this.sounds.push(new FinalH());
        this.sounds.push(new FinalPP());
        this.sounds.push(new FinalTT());
        this.sounds.push(new FinalKK());
        this.sounds.push(new FinalHH());
    }
}
exports.SetOfStopFinals = SetOfStopFinals;
class Epenthesis extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new InitialB());
        this.sounds.push(new InitialL());
        this.sounds.push(new InitialG());
        this.sounds.push(new InitialM());
        this.sounds.push(new InitialN());
    }
}
exports.Epenthesis = Epenthesis;
class EuphonicFinalsJLS extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalJ());
        this.sounds.push(new FinalL());
        this.sounds.push(new FinalS());
    }
}
exports.EuphonicFinalsJLS = EuphonicFinalsJLS;
class EuphonicFinalsBGKP extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalB());
        this.sounds.push(new FinalG());
        this.sounds.push(new FinalK());
        this.sounds.push(new FinalP());
    }
}
exports.EuphonicFinalsBGKP = EuphonicFinalsBGKP;
class EuphonicFinalsBGJKLPS extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalB());
        this.sounds.push(new FinalG());
        this.sounds.push(new FinalJ());
        this.sounds.push(new FinalK());
        this.sounds.push(new FinalL());
        this.sounds.push(new FinalP());
        this.sounds.push(new FinalS());
    }
}
exports.EuphonicFinalsBGJKLPS = EuphonicFinalsBGJKLPS;
class EuphonicFinalsJJLLSS extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalJJ());
        this.sounds.push(new FinalLL());
        this.sounds.push(new FinalSS());
    }
}
exports.EuphonicFinalsJJLLSS = EuphonicFinalsJJLLSS;
class EuphonicFinalsBBGGKKPP extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalBB());
        this.sounds.push(new FinalGG());
        this.sounds.push(new FinalKK());
        this.sounds.push(new FinalPP());
    }
}
exports.EuphonicFinalsBBGGKKPP = EuphonicFinalsBBGGKKPP;
class EuphonicFinalsBBGGJJKKLLPPSS extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalBB());
        this.sounds.push(new FinalGG());
        this.sounds.push(new FinalJJ());
        this.sounds.push(new FinalKK());
        this.sounds.push(new FinalLL());
        this.sounds.push(new FinalPP());
        this.sounds.push(new FinalSS());
    }
}
exports.EuphonicFinalsBBGGJJKKLLPPSS = EuphonicFinalsBBGGJJKKLLPPSS;
class FirstTonalF extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new CheckedTonalF());
    }
}
exports.FirstTonalF = FirstTonalF;
class ThirdFifthTonalsWX extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new CheckedTonalW());
        this.sounds.push(new CheckedTonalX());
    }
}
exports.ThirdFifthTonalsWX = ThirdFifthTonalsWX;
class NeutralFinalH extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalH());
    }
}
exports.NeutralFinalH = NeutralFinalH;
class NeutralFinalHH extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalHH());
    }
}
exports.NeutralFinalHH = NeutralFinalHH;
class InitialsForAssimilation extends grapheme_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new InitialP());
        // this.sounds.push(new InitialK());
        // this.sounds.push(new InitialB());
        // this.sounds.push(new InitialG());
        // this.sounds.push(new InitialJ());
        // this.sounds.push(new InitialL());
        this.sounds.push(new InitialQ());
        // this.sounds.push(new InitialS());
        // this.sounds.push(new InitialV());
        // this.sounds.push(new InitialM());
        // this.sounds.push(new InitialN());
        // this.sounds.push(new InitialNG());
    }
}
exports.InitialsForAssimilation = InitialsForAssimilation;
//------------------------------------------------------------------------------
function positionalSound(sounds) {
    return (t) => {
        for (let i in sounds) {
            if (sounds[i].name === t)
                return sounds[i];
        }
        return new grapheme_1.Sound();
    };
}
exports.positionalSound = positionalSound;
const ps_a = positionalSound([new MedialA()]);
const ps_b = positionalSound([new InitialB(), new FinalB()]);
const ps_bb = positionalSound([new FinalBB()]);
const ps_c = positionalSound([new InitialC()]);
const ps_ch = positionalSound([new InitialCH()]);
const ps_d = positionalSound([new InitialD()]);
const ps_e = positionalSound([new MedialE()]);
const ps_er = positionalSound([new MedialER()]);
const ps_f = positionalSound([new FreeTonalF(), new CheckedTonalF()]);
const ps_g = positionalSound([new InitialG(), new FinalG()]);
const ps_gg = positionalSound([new FinalGG()]);
const ps_h = positionalSound([new InitialH(), new FinalH()]);
const ps_hh = positionalSound([new FinalHH()]);
const ps_i = positionalSound([new MedialI()]);
const ps_ir = positionalSound([new MedialIR()]);
const ps_j = positionalSound([new InitialJ(), new FinalJ()]);
const ps_jj = positionalSound([new FinalJJ()]);
const ps_k = positionalSound([new InitialK(), new FinalK()]);
const ps_kk = positionalSound([new FinalKK()]);
const ps_l = positionalSound([new InitialL(), new FinalL()]);
const ps_ll = positionalSound([new FinalLL()]);
const ps_m = positionalSound([new InitialM(), new MaterLectionisM(), new FinalM()]);
const ps_n = positionalSound([new InitialN(), new MaterLectionisN(), new FinalN()]);
const ps_nn = positionalSound([new NasalizationNN()]);
const ps_ng = positionalSound([new InitialNG(), new MaterLectionisNG(), new FinalNG()]);
const ps_o = positionalSound([new MedialO()]);
const ps_or = positionalSound([new MedialOR()]);
const ps_p = positionalSound([new InitialP(), new FinalP()]);
const ps_pp = positionalSound([new FinalPP()]);
const ps_q = positionalSound([new InitialQ()]);
const ps_s = positionalSound([new InitialS(), new FinalS()]);
const ps_ss = positionalSound([new FinalSS()]);
const ps_t = positionalSound([new InitialT(), new FinalT()]);
const ps_tt = positionalSound([new FinalTT()]);
const ps_u = positionalSound([new MedialU()]);
const ps_ur = positionalSound([new MedialUR()]);
const ps_v = positionalSound([new InitialV()]);
const ps_w = positionalSound([new FreeTonalW(), new CheckedTonalW()]);
const ps_x = positionalSound([new FreeTonalX(), new CheckedTonalX()]);
const ps_xx = positionalSound([new FreeTonalXX()]);
const ps_xxx = positionalSound([new FreeTonalXXX()]);
const ps_y = positionalSound([new FreeTonalY(), new CheckedTonalY()]);
const ps_z = positionalSound([new FreeTonalZ()]);
const ps_zx = positionalSound([new FreeTonalZX()]);
const ps_zero = positionalSound([new ZeroTonal()]);
//------------------------------------------------------------------------------
class CombiningRules {
    constructor() {
        this.o = new Map();
        this.o
            .set(TonalLetterTags.zero, { z: ps_z(TonalSoundTags.freeTonal) })
            .set(TonalLetterTags.y, {
            zero: ps_zero(TonalSoundTags.freeTonal),
            f: ps_f(TonalSoundTags.freeTonal),
        })
            .set(TonalLetterTags.w, { y: ps_y(TonalSoundTags.freeTonal) })
            .set(TonalLetterTags.x, {
            z: ps_z(TonalSoundTags.freeTonal),
            w: ps_w(TonalSoundTags.freeTonal),
        })
            .set(TonalLetterTags.z, { w: ps_w(TonalSoundTags.freeTonal) })
            .set(TonalLetterTags.p, { f: ps_f(TonalSoundTags.checkedTonal) })
            .set(TonalLetterTags.t, { f: ps_f(TonalSoundTags.checkedTonal) })
            .set(TonalLetterTags.k, { f: ps_f(TonalSoundTags.checkedTonal) })
            .set(TonalLetterTags.h, {
            f: ps_f(TonalSoundTags.checkedTonal),
            y: ps_y(TonalSoundTags.checkedTonal),
        })
            .set(TonalLetterTags.pp, {
            w: ps_w(TonalSoundTags.checkedTonal),
            x: ps_x(TonalSoundTags.checkedTonal),
        })
            .set(TonalLetterTags.tt, {
            w: ps_w(TonalSoundTags.checkedTonal),
            x: ps_x(TonalSoundTags.checkedTonal),
        })
            .set(TonalLetterTags.kk, {
            w: ps_w(TonalSoundTags.checkedTonal),
            x: ps_x(TonalSoundTags.checkedTonal),
        })
            .set(TonalLetterTags.hh, {
            w: ps_w(TonalSoundTags.checkedTonal),
            x: ps_x(TonalSoundTags.checkedTonal),
        });
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return {};
    }
}
exports.combiningRules = new CombiningRules();
exports.tonalPositionalSound = new Map()
    .set(TonalLetterTags.a, ps_a)
    .set(TonalLetterTags.b, ps_b)
    .set(TonalLetterTags.bb, ps_bb)
    .set(TonalLetterTags.c, ps_c)
    .set(TonalLetterTags.ch, ps_ch)
    .set(TonalLetterTags.d, ps_d)
    .set(TonalLetterTags.e, ps_e)
    .set(TonalLetterTags.er, ps_er)
    .set(TonalLetterTags.f, ps_f)
    .set(TonalLetterTags.g, ps_g)
    .set(TonalLetterTags.gg, ps_gg)
    .set(TonalLetterTags.h, ps_h)
    .set(TonalLetterTags.hh, ps_hh)
    .set(TonalLetterTags.i, ps_i)
    .set(TonalLetterTags.ir, ps_ir)
    .set(TonalLetterTags.j, ps_j)
    .set(TonalLetterTags.jj, ps_jj)
    .set(TonalLetterTags.k, ps_k)
    .set(TonalLetterTags.kk, ps_kk)
    .set(TonalLetterTags.l, ps_l)
    .set(TonalLetterTags.ll, ps_ll)
    .set(TonalLetterTags.m, ps_m)
    .set(TonalLetterTags.n, ps_n)
    .set(TonalLetterTags.nn, ps_nn)
    .set(TonalLetterTags.ng, ps_ng)
    .set(TonalLetterTags.o, ps_o)
    .set(TonalLetterTags.or, ps_or)
    .set(TonalLetterTags.p, ps_p)
    .set(TonalLetterTags.pp, ps_pp)
    .set(TonalLetterTags.q, ps_q)
    .set(TonalLetterTags.s, ps_s)
    .set(TonalLetterTags.ss, ps_ss)
    .set(TonalLetterTags.t, ps_t)
    .set(TonalLetterTags.tt, ps_tt)
    .set(TonalLetterTags.u, ps_u)
    .set(TonalLetterTags.ur, ps_ur)
    .set(TonalLetterTags.v, ps_v)
    .set(TonalLetterTags.w, ps_w)
    .set(TonalLetterTags.x, ps_x)
    .set(TonalLetterTags.xx, ps_xx)
    .set(TonalLetterTags.xxx, ps_xxx)
    .set(TonalLetterTags.y, ps_y)
    .set(TonalLetterTags.z, ps_z)
    .set(TonalLetterTags.zx, ps_zx);
//------------------------------------------------------------------------------
class ZeroAllomorph extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new ZeroTonal();
    }
}
exports.ZeroAllomorph = ZeroAllomorph;
class AllomorphF extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalF();
    }
}
class AllomorphZ extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalZ();
    }
}
exports.AllomorphZ = AllomorphZ;
class AllomorphY extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalY();
    }
}
exports.AllomorphY = AllomorphY;
class AllomorphW extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalW();
    }
}
exports.AllomorphW = AllomorphW;
class AllomorphX extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalX();
    }
}
exports.AllomorphX = AllomorphX;
class AllomorphXX extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalXX();
    }
}
class AllomorphXXX extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalXXX();
    }
}
class AllomorphZX extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalZX();
    }
}
class FreeAllomorphs {
    constructor() {
        this.o = new Map();
        this.o
            .set(TonalLetterTags.f, new AllomorphF())
            .set(TonalLetterTags.w, new AllomorphW())
            .set(TonalLetterTags.xx, new AllomorphXX())
            .set(TonalLetterTags.xxx, new AllomorphXXX())
            .set(TonalLetterTags.z, new AllomorphZ())
            .set(TonalLetterTags.zx, new AllomorphZX())
            .set(TonalLetterTags.y, new AllomorphY())
            .set(TonalLetterTags.x, new AllomorphX());
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return new Allomorph();
    }
    has(key) {
        return this.o.has(key);
    }
}
exports.freeAllomorphs = new FreeAllomorphs();
class AllomorphP extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalP();
    }
}
class AllomorphT extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalT();
    }
}
class AllomorphK extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalK();
    }
}
class AllomorphH extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalH();
    }
}
exports.AllomorphH = AllomorphH;
class AllomorphPP extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalPP();
    }
}
class AllomorphTT extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalTT();
    }
}
class AllomorphKK extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalKK();
    }
}
class AllomorphHH extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalHH();
    }
}
class AllomorphPF extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalP();
        this.tonal = new CheckedTonalF();
    }
}
class AllomorphTF extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalT();
        this.tonal = new CheckedTonalF();
    }
}
class AllomorphKF extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalK();
        this.tonal = new CheckedTonalF();
    }
}
class AllomorphHF extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalH();
        this.tonal = new CheckedTonalF();
    }
}
class AllomorphHY extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalH();
        this.tonal = new CheckedTonalY();
    }
}
exports.AllomorphHY = AllomorphHY;
class AllomorphPPW extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalPP();
        this.tonal = new CheckedTonalW();
    }
}
class AllomorphTTW extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalTT();
        this.tonal = new CheckedTonalW();
    }
}
class AllomorphKKW extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalKK();
        this.tonal = new CheckedTonalW();
    }
}
class AllomorphHHW extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalHH();
        this.tonal = new CheckedTonalW();
    }
}
class AllomorphPPX extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalPP();
        this.tonal = new CheckedTonalX();
    }
}
class AllomorphTTX extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalTT();
        this.tonal = new CheckedTonalX();
    }
}
class AllomorphKKX extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalKK();
        this.tonal = new CheckedTonalX();
    }
}
class AllomorphHHX extends CheckedAllomorph {
    constructor() {
        super(...arguments);
        this.final = new FinalHH();
        this.tonal = new CheckedTonalX();
    }
}
class CheckedAllomorphs {
    constructor() {
        this.o = new Map();
        this.o
            .set(ps_p(TonalSoundTags.stopFinal).toString(), new AllomorphP())
            .set(ps_t(TonalSoundTags.stopFinal).toString(), new AllomorphT())
            .set(ps_k(TonalSoundTags.stopFinal).toString(), new AllomorphK())
            .set(ps_h(TonalSoundTags.stopFinal).toString(), new AllomorphH())
            .set(ps_pp(TonalSoundTags.stopFinal).toString(), new AllomorphPP())
            .set(ps_tt(TonalSoundTags.stopFinal).toString(), new AllomorphTT())
            .set(ps_kk(TonalSoundTags.stopFinal).toString(), new AllomorphKK())
            .set(ps_hh(TonalSoundTags.stopFinal).toString(), new AllomorphHH())
            .set(ps_p(TonalSoundTags.stopFinal).toString() + ps_f(TonalSoundTags.checkedTonal).toString(), new AllomorphPF())
            .set(ps_t(TonalSoundTags.stopFinal).toString() + ps_f(TonalSoundTags.checkedTonal).toString(), new AllomorphTF())
            .set(ps_k(TonalSoundTags.stopFinal).toString() + ps_f(TonalSoundTags.checkedTonal).toString(), new AllomorphKF())
            .set(ps_h(TonalSoundTags.stopFinal).toString() + ps_f(TonalSoundTags.checkedTonal).toString(), new AllomorphHF())
            .set(ps_pp(TonalSoundTags.stopFinal).toString() + ps_w(TonalSoundTags.checkedTonal).toString(), new AllomorphPPW())
            .set(ps_tt(TonalSoundTags.stopFinal).toString() + ps_w(TonalSoundTags.checkedTonal).toString(), new AllomorphTTW())
            .set(ps_kk(TonalSoundTags.stopFinal).toString() + ps_w(TonalSoundTags.checkedTonal).toString(), new AllomorphKKW())
            .set(ps_hh(TonalSoundTags.stopFinal).toString() + ps_w(TonalSoundTags.checkedTonal).toString(), new AllomorphHHW())
            .set(ps_h(TonalSoundTags.stopFinal).toString() + ps_y(TonalSoundTags.checkedTonal).toString(), new AllomorphHY())
            .set(ps_pp(TonalSoundTags.stopFinal).toString() + ps_x(TonalSoundTags.checkedTonal).toString(), new AllomorphPPX())
            .set(ps_tt(TonalSoundTags.stopFinal).toString() + ps_x(TonalSoundTags.checkedTonal).toString(), new AllomorphTTX())
            .set(ps_kk(TonalSoundTags.stopFinal).toString() + ps_x(TonalSoundTags.checkedTonal).toString(), new AllomorphKKX())
            .set(ps_hh(TonalSoundTags.stopFinal).toString() + ps_x(TonalSoundTags.checkedTonal).toString(), new AllomorphHHX());
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return new Allomorph();
    }
    keys() {
        return this.o.keys();
    }
}
exports.checkedAllomorphs = new CheckedAllomorphs();
class UncombinedFreeAllomorphs {
    constructor() {
        this.o = new Map();
        this.o
            .set(ps_w(TonalSoundTags.freeTonal).toString(), new AllomorphW())
            .set(ps_z(TonalSoundTags.freeTonal).toString(), new AllomorphZ())
            .set(ps_x(TonalSoundTags.freeTonal).toString(), new AllomorphX())
            .set(ps_y(TonalSoundTags.freeTonal).toString(), new AllomorphY());
    }
    has(key) {
        return this.o.has(key);
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return new Allomorph();
    }
}
exports.uncombinedFreeAllomorphs = new UncombinedFreeAllomorphs();
class UncombinedCheckedAllomorphs {
    constructor() {
        this.o = new Map();
        this.o
            .set(ps_p(TonalSoundTags.stopFinal).toString(), new AllomorphP())
            .set(ps_t(TonalSoundTags.stopFinal).toString(), new AllomorphT())
            .set(ps_k(TonalSoundTags.stopFinal).toString(), new AllomorphK())
            .set(ps_h(TonalSoundTags.stopFinal).toString(), new AllomorphH())
            .set(ps_pp(TonalSoundTags.stopFinal).toString(), new AllomorphPP())
            .set(ps_tt(TonalSoundTags.stopFinal).toString(), new AllomorphTT())
            .set(ps_kk(TonalSoundTags.stopFinal).toString(), new AllomorphKK())
            .set(ps_hh(TonalSoundTags.stopFinal).toString(), new AllomorphHH());
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return new Allomorph();
    }
    has(key) {
        return this.o.has(key);
    }
}
exports.uncombinedCheckedAllomorphs = new UncombinedCheckedAllomorphs();
class CombinedCheckedAllomorphs {
    constructor() {
        this.o = new Map();
        this.o
            .set(ps_p(TonalSoundTags.stopFinal).toString(), [new AllomorphPF()])
            .set(ps_t(TonalSoundTags.stopFinal).toString(), [new AllomorphTF()])
            .set(ps_k(TonalSoundTags.stopFinal).toString(), [new AllomorphKF()])
            .set(ps_h(TonalSoundTags.stopFinal).toString(), [new AllomorphHF(), new AllomorphHY()])
            .set(ps_pp(TonalSoundTags.stopFinal).toString(), [new AllomorphPPW(), new AllomorphPPX()])
            .set(ps_tt(TonalSoundTags.stopFinal).toString(), [new AllomorphTTW(), new AllomorphTTX()])
            .set(ps_kk(TonalSoundTags.stopFinal).toString(), [new AllomorphKKW(), new AllomorphKKX()])
            .set(ps_hh(TonalSoundTags.stopFinal).toString(), [new AllomorphHHW(), new AllomorphHHX()]);
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return [];
    }
    has(key) {
        return this.o.has(key);
    }
}
exports.combinedCheckedAllomorphs = new CombinedCheckedAllomorphs();
class FreeAllomorphUncombiningRules {
    constructor() {
        this.o = new Map();
        this.o
            .set(ps_f(TonalSoundTags.freeTonal).toString(), [new FreeTonalY()])
            .set(ps_w(TonalSoundTags.freeTonal).toString(), [new FreeTonalZ(), new FreeTonalX()])
            .set(ps_xx(TonalSoundTags.freeTonal).toString(), [new FreeTonalZ(), new FreeTonalF(), new FreeTonalX()])
            .set(ps_xxx(TonalSoundTags.freeTonal).toString(), [new FreeTonalZ(), new FreeTonalF(), new FreeTonalX()])
            .set(ps_z(TonalSoundTags.freeTonal).toString(), [new FreeTonalX(), new FreeTonalF(), new ZeroTonal()])
            .set(ps_zx(TonalSoundTags.freeTonal).toString(), [])
            .set(ps_x(TonalSoundTags.freeTonal).toString(), [])
            .set(ps_y(TonalSoundTags.freeTonal).toString(), [new FreeTonalW()])
            .set(TonalLetterTags.zero, [new FreeTonalY()]);
    }
    get(key) {
        let value = this.o.get(key);
        if (value) {
            return value;
        }
        return [];
    }
}
exports.freeAllomorphUncombiningRules = new FreeAllomorphUncombiningRules();
exports.voiceless_voiced_finals = new Map()
    .set(TonalLetterTags.k, TonalLetterTags.g)
    .set(TonalLetterTags.p, TonalLetterTags.b)
    .set(TonalLetterTags.t, TonalLetterTags.l)
    .set(TonalLetterTags.kk, TonalLetterTags.gg)
    .set(TonalLetterTags.pp, TonalLetterTags.bb)
    .set(TonalLetterTags.tt, TonalLetterTags.ll)
    .set(TonalLetterTags.g, TonalLetterTags.k)
    .set(TonalLetterTags.b, TonalLetterTags.p)
    .set(TonalLetterTags.l, TonalLetterTags.t)
    .set(TonalLetterTags.gg, TonalLetterTags.kk)
    .set(TonalLetterTags.bb, TonalLetterTags.pp)
    .set(TonalLetterTags.ll, TonalLetterTags.tt);
exports.assimilatedFinals = new Map()
    .set(TonalLetterTags.tt + TonalLetterTags.p, TonalLetterTags.pp)
    .set(TonalLetterTags.tt + TonalLetterTags.v, TonalLetterTags.pp)
    .set(TonalLetterTags.tt + TonalLetterTags.k, TonalLetterTags.kk)
    .set(TonalLetterTags.tt + TonalLetterTags.q, TonalLetterTags.kk);
//# sourceMappingURL=version2.js.map

/***/ }),

/***/ "./pages/convnounadv.tsx":
/*!*******************************!*\
  !*** ./pages/convnounadv.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/process */ "./src/process.ts");
var _jsxFileName = "/Users/jslv/Projects/keyin/pages/convnounadv.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ConvNounAdvPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var nouns = ['chittwvaiy', 'chittwqoa', 'voannydang', 'dangzsixay'];
  var tia = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalInflectionAnalyzer"]();
  var lx = tia.analyze(input, new taipa__WEBPACK_IMPORTED_MODULE_1__["ThirdCombiningForm"](), new taipa__WEBPACK_IMPORTED_MODULE_1__["TransfixInflection"]());
  var items = [];
  if (lx.otherForms[0]) items = Object(_src_process__WEBPACK_IMPORTED_MODULE_2__["itemize"])(lx.otherForms[0].literal);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u62CD\u540D\u8A5E, \u8F38\u51FA\u526F\u8A5E", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    list: "phrasalverbs",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("datalist", {
    id: "phrasalverbs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, nouns.map(function (item) {
    return __jsx("option", {
      key: item,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  })), items);
}

/* harmony default export */ __webpack_exports__["default"] = (ConvNounAdvPage);

/***/ }),

/***/ "./src/process.ts":
/*!************************!*\
  !*** ./src/process.ts ***!
  \************************/
/*! exports provided: getInflectionalSuffixes, getStems, getSoundSequences, getSurfaceForms, itemize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInflectionalSuffixes", function() { return getInflectionalSuffixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStems", function() { return getStems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSoundSequences", function() { return getSoundSequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSurfaceForms", function() { return getSurfaceForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemize", function() { return itemize; });
function getInflectionalSuffixes(ending) {
  var desinences = [];

  if (ending) {
    desinences.push(ending);
    return desinences;
  }

  return desinences;
}
function getStems(literal, ending) {
  var l = literal;
  var ie = ending;
  var stems = [];

  if (l.length - ie.length != 0) {
    stems.push(l.substr(0, l.length - ie.length));
    return stems;
  }

  return stems;
}
function getSoundSequences(soundSeqs) {
  var snds = [];

  for (var j in soundSeqs) {
    for (var k in soundSeqs[j]) {
      var snd = soundSeqs[j][k];
      snds.push([snd.toString(), snd.name]);
    }
  }

  return snds;
}
function getSurfaceForms(underlying, surface) {
  var forms = [];

  if (underlying && surface && underlying !== surface) {
    forms.push(surface);
    return forms;
  }

  return forms;
}
function itemize(str) {
  var items = [];

  if (str) {
    items.push(str);
    return items;
  }

  return items;
}

/***/ }),

/***/ 4:
/*!****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fconvnounadv&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fconvnounadv.tsx ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fconvnounadv&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fconvnounadv.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fconvnounadv&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fconvnounadv.tsx!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=convnounadv.js.map