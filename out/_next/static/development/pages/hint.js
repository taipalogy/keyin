(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/hint.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhint&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fhint.tsx!./":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhint&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fhint.tsx ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/hint", function() {
      var mod = __webpack_require__(/*! ./pages/hint.tsx */ "./pages/hint.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/hint.tsx */ "./pages/hint.tsx", function() {
          if(!next.router.components["/hint"]) return
          var updatedPage = __webpack_require__(/*! ./pages/hint.tsx */ "./pages/hint.tsx")
          next.router.update("/hint", updatedPage)
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
const token_2 = __webpack_require__(/*! ./token */ "./node_modules/taipa/lib/token.js");
class Client {
    processKana(str) {
        init_2.checkNumberOfLettersKana();
        // kana
        let ta = new token_1.TokenAnalysis();
        if (str) {
            const ka = analyzer_2.kanaLemmatizationAnalyzer;
            const morphemes = ka.morphAnalyze(str);
            ta.blockSequences = init_2.getKanaBlocks(morphemes);
            for (let m of morphemes) {
                ta.soundSequences.push(m.sounds);
            }
        }
        return ta;
    }
    processTonal(str) {
        init_1.checkNumberOfLetterTonal();
        // tonal lurzmafjiz
        let ta = new token_1.TokenAnalysis();
        if (str) {
            const tla = analyzer_1.tonalLemmatizationAnalyzer;
            const morphemes = tla.morphAnalyze(str);
            const lexeme = tla.lexAnalyze(morphemes);
            ta.word = lexeme.word;
            ta.lemmas = lexeme.getLemmas();
            ta.inflectionalEnding = lexeme.getInflectionalEnding();
            for (let m of morphemes) {
                ta.soundSequences.push(m.sounds);
                // TODO: first free tone to fourth. first checked tone to eighth
                ta.uncombiningSequences.push(m.getForms().map(it => it.literal));
            }
        }
        return ta;
    }
}
exports.Client = Client;
class Processor {
    load(name) {
        const getPipe = function () {
            // tagging
            const tggr = new tagger_1.RuleBasedTagger();
            // lemmatization
            const lmtzr = new token_2.TokenLemmaLookup();
            // dependency parsing
            const dpsr = new parser_1.DependencyParser();
            return document_1.docPipe(tggr.tag, lmtzr.getTonalLemmas, dpsr.parse);
        };
        const pipe = function (text) {
            let doc = new document_1.Document();
            if (text) {
                // tokenization
                const tokens = text.match(/\w+/g);
                if (tokens) {
                    tokens
                        .filter(x => x != undefined)
                        .map(x => doc.tokens.push(new token_1.Token(x)));
                }
                doc = getPipe()(doc);
            }
            return doc;
        };
        return {
            add() { },
            get() { },
            p(text) {
                return pipe(text);
            }
        };
    }
}
exports.Processor = Processor;
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
exports.docPipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
/** Dependency parsing results. */
class Document {
    constructor() {
        /** Dependency relations. */
        this.relations = new Array(); // dependency
        /** Phrases. */
        this.phrases = new Array();
        /** Tokens */
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
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/dparser/morpheme.js");
const lexeme_1 = __webpack_require__(/*! ./lexeme */ "./node_modules/taipa/lib/dparser/lexeme.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
const analyzer_1 = __webpack_require__(/*! ../tonal/analyzer */ "./node_modules/taipa/lib/tonal/analyzer.js");
/** Analyzes a string into morphemes or lexeme. */
exports.tonalInflectionAnalyzer = {
    /**
     * Analyzes a string or graphemes into morphemes. Morphological analysis.
     * @param x A string or graphemes
     * @param metaplasm A combining metaplasm
     */
    morphAnalyze(x, metaplasm) {
        let gs = [];
        if (typeof x == 'object') {
            gs = x;
        }
        else if (typeof x == 'string') {
            gs = analyzer_1.graphAnalyzeTonal(x);
        }
        const mm = new morpheme_1.TonalCombiningMorphemeMaker(metaplasm);
        return mm.makeMorphemes(gs);
    },
    /**
     * Analyzes a string or morphemes into a lexeme. Lexical analysis.
     * @param x A string or combining morphemes
     * @param metaplasm An inflection metaplasm
     */
    lexAnalyze(x, metaplasm) {
        let ms = [];
        if (typeof x == 'object') {
            ms = x;
        }
        else if (typeof x == 'string') {
            ms = this.morphAnalyze(x, new metaplasm_1.TonalCombiningForms());
        }
        const lm = new lexeme_1.TonalInflectionLexemeMaker(metaplasm);
        return lm.makeLexemes(ms);
    }
};
//# sourceMappingURL=analyzer.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/assimilator.js":
/*!*******************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/assimilator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/dparser/morpheme.js");
const metaplasm_1 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
const lexeme_1 = __webpack_require__(/*! ./lexeme */ "./node_modules/taipa/lib/dparser/lexeme.js");
const phraseme_1 = __webpack_require__(/*! ./phraseme */ "./node_modules/taipa/lib/dparser/phraseme.js");
const metaplasm_2 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
const analyzer_1 = __webpack_require__(/*! ../tonal/analyzer */ "./node_modules/taipa/lib/tonal/analyzer.js");
function morphAnalyze(str) {
    const gs = analyzer_1.graphAnalyzeTonal(str);
    const tschmm = new morpheme_1.TonalSoundChangingMorphemeMaker();
    const mrphs = tschmm.makeMorphemes(gs);
    return mrphs;
}
/** Returns a `TonalAssimilationLexeme` with no assimilation. */
function getNoAssimilation(word) {
    const mrphs = morphAnalyze(word);
    const lx = new lexeme_1.TonalAssimilationLexeme(mrphs, new metaplasm_1.TonalZeroAssimilation());
    return lx;
}
exports.getNoAssimilation = getNoAssimilation;
/** Assimilates agressively inside a word. */
function assimilateAgressiveLexical(word) {
    const mrphs = morphAnalyze(word);
    const lx = new lexeme_1.TonalAssimilationLexeme(mrphs, new metaplasm_2.AgressiveInternal());
    return lx;
}
exports.assimilateAgressiveLexical = assimilateAgressiveLexical;
/** Assimilates regressively inside a word. */
function assimilateRegressiveLexical(word) {
    const mrphs = morphAnalyze(word);
    const lx = new lexeme_1.TonalAssimilationLexeme(mrphs, new metaplasm_2.RegressiveInternal());
    return lx;
}
exports.assimilateRegressiveLexical = assimilateRegressiveLexical;
/** Assimilates agressively between 2 words. */
function assimilateAgressivePhrasal(preceding, following) {
    const lxPreceding = getNoAssimilation(preceding);
    const lxFollowing = getNoAssimilation(following);
    const phmk = new phraseme_1.TonalAssimilationPhrasemeMaker();
    return phmk.makePhraseme(lxPreceding, lxFollowing, new metaplasm_2.AgressiveExternal());
}
exports.assimilateAgressivePhrasal = assimilateAgressivePhrasal;
/** Assimilates regressivels between 2 words. */
function assimilateRegressivePhrasal(preceding, following) {
    const lxPreceding = getNoAssimilation(preceding);
    const lxFollowing = getNoAssimilation(following);
    const phmk = new phraseme_1.TonalAssimilationPhrasemeMaker();
    return phmk.makePhraseme(lxPreceding, lxFollowing, new metaplasm_2.RegressiveExternal());
}
exports.assimilateRegressivePhrasal = assimilateRegressivePhrasal;
//# sourceMappingURL=assimilator.js.map

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

/***/ "./node_modules/taipa/lib/dparser/creator.js":
/*!***************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/creator.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const analyzer_1 = __webpack_require__(/*! ./analyzer */ "./node_modules/taipa/lib/dparser/analyzer.js");
const phraseme_1 = __webpack_require__(/*! ../tonal/phraseme */ "./node_modules/taipa/lib/tonal/phraseme.js");
const metaplasm_1 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
const phraseme_2 = __webpack_require__(/*! ./phraseme */ "./node_modules/taipa/lib/dparser/phraseme.js");
const metaplasm_2 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
const metaplasm_3 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
/** Creates a lexeme given a `TonalCombiningMetaplasm`. If metaplasm is not provided, `TonalZeroCombining` is defaulted. Excessive tokens are ignored. */
function createTonalInflectionLexeme(str, metaplasm) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = metaplasm
        ? tia.morphAnalyze(str, metaplasm)
        : tia.morphAnalyze(str, new metaplasm_2.TonalZeroCombining());
    const lx = tia.lexAnalyze(ms, new metaplasm_3.TonalDesinenceInflection());
    return lx;
}
exports.createTonalInflectionLexeme = createTonalInflectionLexeme;
/** Creates a phrase given a sequence of arbitrary words regardless of syntax. Tokens are analyzed one by one. */
function createTonalPhrase(str) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const strs = str.match(/\w+/g);
    const lxs = strs
        ? strs.map(it => tia.lexAnalyze(it, new metaplasm_1.TonalZeroInflection()))
        : [];
    return new phraseme_1.TonalPhrase(lxs.map(it => it.word));
}
exports.createTonalPhrase = createTonalPhrase;
/** Creates a compound of type `TonalCompoundPhraseme` in which the preceding word will be inflected and the following word will not. */
function createCompoundPhraseme(preceding, following) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const tiphm = new phraseme_2.TonalInflectionPhrasemeMaker();
    const lxPreceding = tia.lexAnalyze(preceding, new metaplasm_3.TonalDesinenceInflection());
    const lxFollowing = createTonalInflectionLexeme(following);
    return tiphm.makeCompoundPhraseme(lxPreceding, lxFollowing);
}
exports.createCompoundPhraseme = createCompoundPhraseme;
//# sourceMappingURL=creator.js.map

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
exports.dictOfVerbs = [
    'koannw',
    'pah',
];
// prettier-ignore
exports.dictOfPhrasalVerbs = [
    ['koannw', 'diurh'],
    ['longw', 'diurh'],
];
// prettier-ignore
exports.dictOfPhrasalVerbTwos = [
    ['tehh', 'cut', 'kih'],
];
// prettier-ignore
exports.dictOfSeperateVVCompounds = {
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
        this.s1B1Map = new Map()
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.ppv, new configuration_1.Shift())
            .set(symbols_1.Tagset.npr + symbols_1.Tagset.vb, new configuration_1.Shift())
            .set(symbols_1.Tagset.npr + symbols_1.Tagset.npr, new configuration_1.Shift())
            .set(symbols_1.Tagset.appr + symbols_1.Tagset.npr, new configuration_1.Shift())
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.npr, new configuration_1.Shift())
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.psub, new configuration_1.Shift())
            .set(symbols_1.Tagset.aux + symbols_1.Tagset.vb, new configuration_1.Shift())
            .set(symbols_1.Tagset.padv + symbols_1.Tagset.vb, new configuration_1.Shift())
            .set(symbols_1.Tagset.npr + symbols_1.Tagset.padv, new configuration_1.Shift())
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.appr, new configuration_1.Shift())
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.padv, new configuration_1.Shift())
            .set(symbols_1.Tagset.npr + symbols_1.Tagset.aux, new configuration_1.Shift())
            .set(symbols_1.Tagset.ppv + symbols_1.Tagset.psub, new configuration_1.RightArc())
            .set(symbols_1.Tagset.ppv + symbols_1.Tagset.npr, new configuration_1.RightArc());
        this.s2S1Map = new Map()
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.ppv, new configuration_1.RightArc())
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.psub, new configuration_1.RightArc())
            .set(symbols_1.Tagset.aux + symbols_1.Tagset.vb, new configuration_1.LeftArc())
            .set(symbols_1.Tagset.padv + symbols_1.Tagset.vb, new configuration_1.LeftArc())
            .set(symbols_1.Tagset.appr + symbols_1.Tagset.npr, new configuration_1.LeftArc())
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.vb, new configuration_1.RightArc())
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.npr, new configuration_1.RightArc())
            .set(symbols_1.Tagset.npr + symbols_1.Tagset.vb, new configuration_1.LeftArc());
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
            if (this.s1B1Map.has(this.s1.tag + this.b1.tag)) {
                const tran = this.s1B1Map.get(this.s1.tag + this.b1.tag);
                if (tran) {
                    this.transitions.push(tran);
                }
            }
        }
        else if (this.isQueueEmpty(c)) {
            if (this.s2S1Map.has(this.s2.tag + this.s1.tag)) {
                const tran = this.s2S1Map.get(this.s2.tag + this.s1.tag);
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

/***/ "./node_modules/taipa/lib/dparser/inflector.js":
/*!*****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/inflector.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const analyzer_1 = __webpack_require__(/*! ./analyzer */ "./node_modules/taipa/lib/dparser/analyzer.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
const phraseme_1 = __webpack_require__(/*! ./phraseme */ "./node_modules/taipa/lib/dparser/phraseme.js");
const creator_1 = __webpack_require__(/*! ./creator */ "./node_modules/taipa/lib/dparser/creator.js");
const version2_1 = __webpack_require__(/*! ../tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const metaplasm_2 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
/** Inflects the inflectional suffix of a word. Lexical inflector. */
function inflectDesinence(word) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.TonalCombiningForms());
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TonalDesinenceInflection());
    return lx;
}
exports.inflectDesinence = inflectDesinence;
/** Inflects the transfix of a word. All tonals other than 3rd tone will be changed to 3rd tone. Lexical inflector. */
function inflectTransfix(word) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.ThirdCombiningForm());
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TransfixInflection());
    return lx;
}
exports.inflectTransfix = inflectTransfix;
/**
 * Inflects e to ez. Lexical inflector.
 * @param word E, ew, or ez
 */
function inflectEncliticE(word) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.AdnominalECombining());
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TonalDesinenceInflection());
    return lx;
}
exports.inflectEncliticE = inflectEncliticE;
/**
 * Inflects 4th tone to 1st tone or 3rd tone accordingly. Inflects laih to laiz. Lexical inflector.
 * @param word particle
 * @param tone F, w, or z
 */
function inflectPhrasalVerbParticle(word, tone) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.PhrasalVerbParticleCombining(tone));
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TonalDesinenceInflection());
    return lx;
}
exports.inflectPhrasalVerbParticle = inflectPhrasalVerbParticle;
/**
 * Inflects lez and lew to le. Lexical inflector.
 * @param word Lew, lez, or le
 */
function inflectEncliticLe(word) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.ConjunctiveLeCombining());
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TonalDesinenceInflection());
    return lx;
}
exports.inflectEncliticLe = inflectEncliticLe;
/**
 * Inflects ex to ew. Lexical inflector.
 * @param word Ex
 */
function inflectPossesiveEx(word) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.PossesiveExCombining());
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TonalDesinenceInflection());
    return lx;
}
exports.inflectPossesiveEx = inflectPossesiveEx;
/**
 * Inflects 4th tone to either 1st free tone or 7th free tone. Lexical inflector.
 * @param word 4th checked tone
 * @param tone F or z
 */
function inflectTo(word, tone) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.FirstSeventhCombining(tone));
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TonalDesinenceInflection());
    return lx;
}
exports.inflectTo = inflectTo;
/**
 * Inflects 8th tone to 1st tone. Addon inflector.
 * @param word 8th checked tone
 */
function inflectEighthToFirst(word) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.EighthToFirstCombining());
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TonalDesinenceInflection());
    return lx;
}
exports.inflectEighthToFirst = inflectEighthToFirst;
/**
 * Inflects 8th tone to 2nd tone. Addon inflector.
 * @param word 8th neutral tone
 */
function inflectEighthToSecond(word) {
    const tia = analyzer_1.tonalInflectionAnalyzer;
    const ms = tia.morphAnalyze(word, new metaplasm_1.EighthToSecondCombining());
    const lx = tia.lexAnalyze(ms, new metaplasm_2.TonalDesinenceInflection());
    return lx;
}
exports.inflectEighthToSecond = inflectEighthToSecond;
/**
 * Inflects a phrasal verb of length 2 to proceeding form. Phrasal inflector.
 * @param verb Main word
 * @param particle Particle
 */
function inflectToProceeding(verb, particle) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lxVerb = inflectDesinence(verb);
    let lxParticle = creator_1.createTonalInflectionLexeme('');
    if (particle === 'kih') {
        lxParticle = inflectPhrasalVerbParticle(particle, version2_1.TonalLetterTags.f);
    }
    else {
        lxParticle = inflectPhrasalVerbParticle(particle, version2_1.TonalLetterTags.w);
    }
    return phm.makePhrasalVerbPhraseme(lxVerb, lxParticle);
}
exports.inflectToProceeding = inflectToProceeding;
/**
 * Inflects a phrasal verb of length 3 to proceeding form. Phrasal inflector.
 * @param verb Main word
 * @param particle Particle one
 * @param particleTwo Particle two
 */
function inflectVppToProceeding(verb, particle, particleTwo) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lxVerb = inflectDesinence(verb);
    let lxParticle = creator_1.createTonalInflectionLexeme('');
    let lxParticleTwo = creator_1.createTonalInflectionLexeme('');
    if (particle === 'cut' && particleTwo === 'kih') {
        lxParticle = inflectPhrasalVerbParticle(particle, version2_1.TonalLetterTags.f);
        lxParticleTwo = inflectPhrasalVerbParticle(particleTwo, version2_1.TonalLetterTags.f);
    }
    else if (particle === 'kih' && particleTwo === 'laih') {
        lxParticle = inflectPhrasalVerbParticle(particle, version2_1.TonalLetterTags.f);
        lxParticleTwo = inflectPhrasalVerbParticle(particleTwo, version2_1.TonalLetterTags.z);
    }
    return phm.makePhrasalVerbVppPhraseme(lxVerb, lxParticle, lxParticleTwo);
}
exports.inflectVppToProceeding = inflectVppToProceeding;
/**
 * Inflects a phrasal verb of length 3 to transitive form. Phrasal inflector.
 * @param verb Main word
 * @param particle Particle one
 * @param particleTwo Particle two
 */
function inflectVppToTransitive(verb, particle, particleTwo) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lxVerb = inflectDesinence(verb);
    const lxParticle = inflectDesinence(particle);
    const lxParticleTwo = inflectDesinence(particleTwo);
    return phm.makeTransitiveVppPhraseme(lxVerb, lxParticle, lxParticleTwo);
}
exports.inflectVppToTransitive = inflectVppToTransitive;
/**
 * Inflects e form to adnominal form. Phrasal inflector.
 * @param adjectivalNoun Main word
 * @param e E, ew, or ez
 */
function inflectEToAdnominal(adjectivalNoun, e) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lxAdjective = creator_1.createTonalInflectionLexeme(adjectivalNoun);
    const lxE = inflectEncliticE(e);
    return phm.makeAdjectivePhraseme(lxAdjective, lxE);
}
exports.inflectEToAdnominal = inflectEToAdnominal;
/**
 * Inflects le form to conjunctive form. Phrasal inflector.
 * @param verb Main word
 * @param le Le, lew, or lez
 */
function inflectLeToConjunctive(verb, le) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lxVerb = inflectDesinence(verb);
    const lxLe = inflectEncliticLe(le);
    return phm.makeConjunctivePhraseme(lxVerb, lxLe);
}
exports.inflectLeToConjunctive = inflectLeToConjunctive;
/**
 * Inflects possesive case from teriminal form to adnominal form. Phrasal inflector.
 * @param noun Main word
 * @param ex Ex
 */
function inflectPossesive(noun, ex) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lxNoun = creator_1.createTonalInflectionLexeme(noun);
    const lxEx = inflectPossesiveEx(ex);
    return phm.makePossesivePhraseme(lxNoun, lxEx);
}
exports.inflectPossesive = inflectPossesive;
/**
 * Inflects a phrasal verb of length 2 to participle form. Phrasal inflector.
 * @param verb Main word
 * @param particle Particle
 * @param tone 1st tone or 7th tone
 * */
function inflectToParticiple(verb, particle, tone) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lxVerb = inflectTo(verb, tone);
    const lxParticle = inflectTo(particle, tone);
    return phm.makeParticiplePhraseme(lxVerb, lxParticle);
}
exports.inflectToParticiple = inflectToParticiple;
/**
 * Inflects a phrasal verb of length 3 to participle form. Phrasal inflector.
 * @param verb Main word
 * @param particle Particle one
 * @param particleTwo Particle two
 * @param tone 1st tone or 7th tone
 */
function inflectVppToParticiple(verb, particle, particleTwo, tone) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lxVerb = inflectTo(verb, tone);
    const lxParticle = inflectTo(particle, tone);
    const lxParticleTwo = inflectTo(particleTwo, tone);
    return phm.makeVppParticiplePhraseme(lxVerb, lxParticle, lxParticleTwo);
}
exports.inflectVppToParticiple = inflectVppToParticiple;
/** Inflects a series of words. The forms of the last word indicates the whole phrase is in proceeding form or not. Phrasal inflector. */
function inflectSerial(...words) {
    const phm = new phraseme_1.TonalInflectionPhrasemeMaker();
    const lexemes = words.map(it => inflectDesinence(it));
    return phm.makeSerialPhraseme(lexemes);
}
exports.inflectSerial = inflectSerial;
//# sourceMappingURL=inflector.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/inserter.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/inserter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const version2_1 = __webpack_require__(/*! ../tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/dparser/morpheme.js");
const lexeme_1 = __webpack_require__(/*! ./lexeme */ "./node_modules/taipa/lib/dparser/lexeme.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
/**
 * Inserts an initial m, n, or ng to syllable ay if the preceding syllable has a final m, n, or ng.
 * @param word A word whose second syllable is ay, a, or af. The word has at least 2 syllables for the second one to be inserted an initial.
 */
function insertTo(word) {
    const tschmm = new morpheme_1.TonalSoundChangingMorphemeMaker();
    const gm = new unit_1.GraphemeMaker(version2_1.lowerLettersTonal);
    const gs = gm.makeGraphemes(word);
    const mrphs = tschmm.makeMorphemes(gs);
    // TODO: add initial g. b? l?
    const lx = new lexeme_1.TonalInsertionLexeme(mrphs, new metaplasm_1.Epenthesis());
    return lx;
}
exports.insertTo = insertTo;
// TODO: other insertion functions?
//# sourceMappingURL=inserter.js.map

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
const creator_1 = __webpack_require__(/*! ./creator */ "./node_modules/taipa/lib/dparser/creator.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
const visitor_1 = __webpack_require__(/*! ./visitor */ "./node_modules/taipa/lib/dparser/visitor.js");
/** Construction element. */
class ConstructionElement {
    constructor() {
        /** Orthographic text. */
        this.orth = '';
        /** The simple part-of-speech tag. */
        this.pos = '';
        /** The detailed part-of-speech tag. */
        this.tag = '';
    }
}
exports.ConstructionElement = ConstructionElement;
class PersonalPronounElement extends ConstructionElement {
    constructor(str) {
        super();
        this.orth = str;
        this.pos = symbols_1.POSTags.pronoun;
    }
}
exports.PersonalPronounElement = PersonalPronounElement;
class VerbElement extends ConstructionElement {
    constructor(str) {
        super();
        this.orth = str;
        this.pos = symbols_1.POSTags.verb;
    }
}
exports.VerbElement = VerbElement;
class EncliticElement extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.particle;
        this.orth = str;
    }
}
exports.EncliticElement = EncliticElement;
class PronounElement extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.pronoun;
        this.orth = str;
    }
}
exports.PronounElement = PronounElement;
class NounElement extends ConstructionElement {
    constructor() {
        super();
        this.pos = symbols_1.POSTags.noun;
    }
}
class ParticleElement extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.particle;
        this.orth = str;
    }
}
exports.ParticleElement = ParticleElement;
class PrepositionElement extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.adposition;
        this.orth = str;
    }
}
exports.PrepositionElement = PrepositionElement;
class AuxiliaryElement extends ConstructionElement {
    constructor(str) {
        super();
        this.pos = symbols_1.POSTags.auxiliary;
        this.orth = str;
    }
}
exports.AuxiliaryElement = AuxiliaryElement;
class KeyWords {
    constructor() {
        this.words = new Array();
        this.lexemes = new Array();
        this.populateWords();
        this.populateLexemes();
    }
    createWord(orth, pos) {
        const w1 = new visitor_1.OrthoWord();
        w1.form = orth;
        const ce1 = new ConstructionElement();
        ce1.orth = orth;
        ce1.pos = pos;
        this.words.push([w1, ce1]);
    }
    populateWords() {
        this.createWord('qaz', symbols_1.POSTags.auxiliary);
        this.createWord('che', symbols_1.POSTags.pronoun);
    }
    createLexeme(orth, pos) {
        const lx1 = new visitor_1.OrthoLexeme();
        lx1.form = orth;
        const ilx1 = creator_1.createTonalInflectionLexeme(lx1.form, new metaplasm_1.TonalCombiningForms());
        lx1.inflected.push(ilx1.getForms()[0].literal);
        const ce1 = new ConstructionElement();
        ce1.orth = orth;
        ce1.pos = pos;
        this.lexemes.push([lx1, ce1]);
    }
    populateLexemes() {
        this.createLexeme('goay', symbols_1.POSTags.pronoun);
        this.createLexeme('longy', symbols_1.POSTags.particle);
        this.createLexeme('bez', symbols_1.POSTags.particle);
    }
    matchLexemes(word) {
        const v = new visitor_1.VisitorMatching();
        const arr = this.lexemes.filter(it => it[0].accept(v, word));
        if (arr.length > 0) {
            const ce = new ConstructionElement();
            ce.orth = word;
            ce.pos = arr[0][1].pos;
            return ce;
        }
        return new ConstructionElement();
    }
    matchWords(word) {
        const v = new visitor_1.VisitorMatching();
        const arr = this.words.filter(it => it[0].accept(v, word));
        if (arr.length > 0) {
            return arr[0][1];
        }
        return new ConstructionElement();
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
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const lexeme_1 = __webpack_require__(/*! ../tonal/lexeme */ "./node_modules/taipa/lib/tonal/lexeme.js");
const version2_1 = __webpack_require__(/*! ../tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const morpheme_1 = __webpack_require__(/*! ../tonal/morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
const unit_2 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
/** A word and its inflected forms. */
class TonalInflectionLexeme extends unit_1.Lexeme {
    // TODO: should a member variable affixes be added and passed to metaplasm. check out member sounds in morpheme
    constructor(morphemes, metaplasm) {
        super();
        this.forms = new Array();
        if (morphemes.length == 0)
            this.word = new lexeme_1.TonalWord([]);
        else
            this.word = new lexeme_1.TonalWord(morphemes.map(x => x.syllable));
        if (morphemes.length > 0) {
            if (morphemes[morphemes.length - 1]) {
                // tonal ending needs to be assigned to sandhi lexeme
                this.allomorphicEnding = this.assignAllomorphicEnding(morphemes[morphemes.length - 1].allomorph);
            }
            else {
                this.allomorphicEnding = new lexeme_1.AllomorphicEnding();
            }
        }
        else {
            this.allomorphicEnding = new lexeme_1.AllomorphicEnding();
        }
        if (morphemes.length > 0)
            this.forms = this.assignWordForms(morphemes, metaplasm);
    }
    assignAllomorphicEnding(allomorph) {
        let tse = new lexeme_1.AllomorphicEnding();
        if (allomorph instanceof version2_1.FreeAllomorph) {
            // replace the tonal ending
            let fte = new lexeme_1.FreeAllomorphicEnding();
            fte.allomorph = allomorph;
            tse = fte;
        }
        else if (allomorph instanceof version2_1.CheckedAllomorph) {
            // append the tonal of the tonal ending
            let cte = new lexeme_1.CheckedAllomorphicEnding();
            cte.allomorph = allomorph;
            tse = cte;
        }
        return tse;
    }
    getInflectionalEnding() {
        if (this.allomorphicEnding)
            return this.allomorphicEnding.allomorph.tonal.toString();
        return '';
    }
    getAllomorphicEnding() {
        if (this.allomorphicEnding)
            return this.allomorphicEnding;
        return '';
    }
    assignWordForms(ms, ti) {
        return ti.apply(ms);
    }
    getForms() {
        return this.forms;
    }
}
exports.TonalInflectionLexeme = TonalInflectionLexeme;
/** A word and its assimilated forms. */
class TonalAssimilationLexeme {
    constructor(morphemes, metaplasm) {
        this.morphemes = morphemes;
        this.forms = new Array();
        if (morphemes.length == 0)
            this.word = new lexeme_1.TonalWord([]);
        else
            this.word = new lexeme_1.TonalWord(morphemes.map(x => x.syllable));
        if (morphemes.length > 0)
            this.forms = metaplasm.apply(morphemes);
    }
    /** Get assimilated forms for this lexeme. */
    getForms() {
        // for internal samdhi
        return this.forms;
    }
    /** Get sound-changing morphemes for external sandhi. */
    getMorphemes() {
        // when external sandhi is required, member variable morphemes has to be exposed
        return this.morphemes;
    }
    assimilateWith(til, dir) {
        const ms = til.getMorphemes();
        let wrd = new lexeme_1.TonalWord(this.morphemes.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
        if (ms.length > 0) {
            const adjacentSnds = ms[ms.length - 1].sounds;
            if (dir === metaplasm_1.AssimiDirection.agressive) {
                let s = new unit_2.Sound();
                if (adjacentSnds[adjacentSnds.length - 1].name ===
                    version2_1.TonalSoundTags.freeTonal &&
                    adjacentSnds[adjacentSnds.length - 2].name ===
                        version2_1.TonalSoundTags.nasalFinal) {
                    s = adjacentSnds[adjacentSnds.length - 2];
                }
                else if (adjacentSnds[adjacentSnds.length - 1].name ===
                    version2_1.TonalSoundTags.nasalFinal) {
                    s = adjacentSnds[adjacentSnds.length - 1];
                }
                const syls = this.morphemes[0].changeSoundWith(s, metaplasm_1.AssimiDirection.agressive);
                wrd.replaceSyllable(0, syls[0]);
                return [wrd];
            }
            else if (dir === metaplasm_1.AssimiDirection.regressive &&
                adjacentSnds[0].name === version2_1.TonalSoundTags.initial) {
                const s = adjacentSnds[0];
                const syls = this.morphemes[this.morphemes.length - 1].changeSoundWith(s, metaplasm_1.AssimiDirection.regressive);
                wrd.popSyllable();
                wrd.pushSyllable(syls[0]);
                return [wrd];
            }
        }
        return [];
    }
}
exports.TonalAssimilationLexeme = TonalAssimilationLexeme;
/** A word and its inserted forms. */
class TonalInsertionLexeme {
    constructor(morphemes, metaplasm) {
        this.forms = new Array();
        if (morphemes.length == 0)
            this.word = new lexeme_1.TonalWord([]);
        else
            this.word = new lexeme_1.TonalWord(morphemes.map(x => x.syllable));
        if (morphemes.length > 0)
            this.forms = metaplasm.apply(morphemes);
    }
    getForms() {
        // for internal samdhi
        return this.forms;
    }
}
exports.TonalInsertionLexeme = TonalInsertionLexeme;
class TonalInflectionLexemeMaker extends unit_1.LexemeMaker {
    constructor(metaplasm) {
        super();
        this.metaplasm = metaplasm;
    }
    makeLexemes(morphemes) {
        return this.make(morphemes);
    }
    make(morphemes) {
        let isInflStemWithX = false; // inflectional stem with x in the middle
        if (morphemes) {
            isInflStemWithX = this.checkFifth(morphemes);
            if (isInflStemWithX)
                return new TonalInflectionLexeme([], this.metaplasm);
        }
        return new TonalInflectionLexeme(morphemes, this.metaplasm);
    }
    checkFifth(ms) {
        for (let i = 0; i < ms.length; i++) {
            if (ms[i] && ms[i].syllable.lastLetter.literal === version2_1.TonalLetterTags.x) {
                if (i < ms.length - 1 &&
                    ms[ms.length - 1].syllable.lastLetter.literal !== version2_1.TonalLetterTags.y &&
                    ms[ms.length - 1].syllable.lastSecondLetter.literal !==
                        version2_1.TonalLetterTags.a) {
                    if (ms[ms.length - 1].syllable.lastLetter.literal === version2_1.TonalLetterTags.a) {
                        break;
                    }
                    else {
                        // tonal x can't not appear in them middle of an inflectional stem
                        // if it is not preceding an ay or a
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
exports.TonalInflectionLexemeMaker = TonalInflectionLexemeMaker;
//# sourceMappingURL=lexeme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/metaplasm.js":
/*!*****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/metaplasm.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const version2_1 = __webpack_require__(/*! ../tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const collections_1 = __webpack_require__(/*! ../tonal/collections */ "./node_modules/taipa/lib/tonal/collections.js");
const metaplasm_1 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
const morpheme_1 = __webpack_require__(/*! ../tonal/morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const lexeme_1 = __webpack_require__(/*! ../tonal/lexeme */ "./node_modules/taipa/lib/tonal/lexeme.js");
const metaplasm_2 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
const phraseme_1 = __webpack_require__(/*! ../tonal/phraseme */ "./node_modules/taipa/lib/tonal/phraseme.js");
/** Direction of assimilation. */
var AssimiDirection;
(function (AssimiDirection) {
    AssimiDirection[AssimiDirection["agressive"] = 0] = "agressive";
    AssimiDirection[AssimiDirection["regressive"] = 1] = "regressive";
})(AssimiDirection = exports.AssimiDirection || (exports.AssimiDirection = {}));
/** Returns the combining forms of a syllable. */
class TonalCombiningForms extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            if (allomorph instanceof version2_1.FreeAllomorph) {
                if (allomorph instanceof version2_1.ZeroAllomorph) {
                    const tos = collections_1.combiningRules.get(version2_1.TonalLetterTags.zero);
                    if (tos) {
                        s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(tos[0]).characters));
                    }
                    return [s];
                }
                else if (allomorph instanceof version2_1.AllomorphY) {
                    s.popLetter();
                    return [s];
                }
                else {
                    s.popLetter();
                    const tos = collections_1.combiningRules.get(allomorph.tonal.toString());
                    const rets = [];
                    if (tos) {
                        for (let k = 0; k < tos.length; k++) {
                            s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(tos[k]).characters));
                            rets.push(new morpheme_1.TonalSyllable(s.letters));
                            s.popLetter();
                        }
                    }
                    return rets;
                }
            }
            else if (allomorph instanceof version2_1.CheckedAllomorph) {
                // nothing to pop here
                if (allomorph.tonal.toString().length > 0)
                    return [];
                const tos = collections_1.combiningRules.get(allomorph.final.toString());
                const rets = [];
                if (tos) {
                    for (let k = 0; k < tos.length; k++) {
                        s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(tos[k]).characters));
                        rets.push(new morpheme_1.TonalSyllable(s.letters));
                        s.popLetter();
                    }
                }
                return rets;
            }
        }
        return [];
    }
}
exports.TonalCombiningForms = TonalCombiningForms;
/** Changes to 3rd tone. */
class ThirdCombiningForm extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            const ps = version2_1.tonalPositionalSounds.get(version2_1.TonalLetterTags.w);
            let snd = new unit_1.Sound();
            if (allomorph instanceof version2_1.FreeAllomorph) {
                if (ps)
                    snd = ps(version2_1.TonalSoundTags.freeTonal);
                if (allomorph instanceof version2_1.ZeroAllomorph) {
                    s.pushLetter(new unit_1.AlphabeticLetter(snd.characters));
                }
                else {
                    s.popLetter();
                    s.pushLetter(new unit_1.AlphabeticLetter(snd.characters));
                }
            }
            else if (allomorph instanceof version2_1.CheckedAllomorph) {
                if (ps)
                    snd = ps(version2_1.TonalSoundTags.checkedTonal);
                if (allomorph.tonal.toString()) {
                    s.popLetter();
                    s.pushLetter(new unit_1.AlphabeticLetter(snd.characters));
                }
                else {
                    s.pushLetter(new unit_1.AlphabeticLetter(snd.characters));
                }
            }
            return [s];
        }
        return [];
    }
}
exports.ThirdCombiningForm = ThirdCombiningForm;
/** Changes 4th tone to 1st tone. */
class FourthToFirstCombining extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph && allomorph instanceof version2_1.AllomorphH) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.f).characters));
            return [s];
        }
        return [];
    }
}
exports.FourthToFirstCombining = FourthToFirstCombining;
/** Changes 8th tone to 1st tone. */
class EighthToFirstCombining extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph && allomorph instanceof version2_1.CheckedAllomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            const tnl = collections_1.eighthToFirst.get(allomorph.toString());
            if (tnl) {
                s.popLetter();
                s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(tnl).characters));
                s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.f).characters));
            }
            return [s];
        }
        return [];
    }
}
exports.EighthToFirstCombining = EighthToFirstCombining;
/** Changes 8th tone to 2nd tone. */
class EighthToSecondCombining extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph && allomorph instanceof version2_1.CheckedAllomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            s.popLetter();
            s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.h).characters));
            s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.y).characters));
            return [s];
        }
        return [];
    }
}
exports.EighthToSecondCombining = EighthToSecondCombining;
/** Returns the combining form of enclitic e. */
class AdnominalECombining extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        // 1->7, 7->7, 3->3
        if (allomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            if (allomorph instanceof version2_1.FreeAllomorph) {
                if (allomorph instanceof version2_1.ZeroAllomorph) {
                    const tos = collections_1.combiningRules.get(version2_1.TonalLetterTags.zero);
                    if (tos) {
                        // it should loop only once
                        s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(tos[0]).characters));
                    }
                    return [s];
                }
            }
        }
        return [];
    }
}
exports.AdnominalECombining = AdnominalECombining;
/** Returns the combining form of a phrasal verb particle. */
class PhrasalVerbParticleCombining extends metaplasm_1.TonalCombiningMetaplasm {
    constructor(tone) {
        super();
        this.tone = tone;
    }
    toThird(syllable, final) {
        let s = new morpheme_1.TonalSyllable(syllable.letters);
        s.popLetter();
        const fnl = collections_1.finalOfPhrasalVerbParticle.get(final);
        if (fnl) {
            // h -> hh, p -> pp
            s.pushLetter(version2_1.lowerLettersTonal.get(fnl));
            s.pushLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.w));
        }
        return s;
    }
    toFirst(syllable) {
        let s = new morpheme_1.TonalSyllable(syllable.letters);
        s.pushLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.f));
        return s;
    }
    toSeventh(syllable) {
        let s = new morpheme_1.TonalSyllable(syllable.letters);
        s.popLetter();
        s.pushLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.z));
        return s;
    }
    apply(sounds, allomorph) {
        if (allomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            if (allomorph instanceof version2_1.CheckedAllomorph) {
                const ret = [];
                let syl = new morpheme_1.TonalSyllable([]);
                if (this.tone === version2_1.TonalLetterTags.f) {
                    syl = this.toFirst(s);
                }
                else if (this.tone === version2_1.TonalLetterTags.w) {
                    syl = this.toThird(s, sounds[sounds.length - 1].toString());
                }
                else if (this.tone === version2_1.TonalLetterTags.z) {
                    syl = this.toSeventh(s);
                }
                ret.push(syl);
                // free form of the syllable could be handle outside of this routine by popping f/w and h/hh
                return ret;
            }
        }
        return [];
    }
}
exports.PhrasalVerbParticleCombining = PhrasalVerbParticleCombining;
/** Returns the combining form of enclitic le. */
class ConjunctiveLeCombining extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            if (allomorph instanceof version2_1.FreeAllomorph) {
                if (allomorph.tonal.toString() === version2_1.TonalLetterTags.z ||
                    allomorph.tonal.toString() === version2_1.TonalLetterTags.w) {
                    s.popLetter();
                    return [s];
                }
            }
        }
        return [];
    }
}
exports.ConjunctiveLeCombining = ConjunctiveLeCombining;
/** Returns the combining form of possesive case marker ex. */
class PossesiveExCombining extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            s.popLetter();
            s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.w).characters));
            return [s];
        }
        return [];
    }
}
exports.PossesiveExCombining = PossesiveExCombining;
/** Changes 4th tone to either 1st or 7th tone. */
class FirstSeventhCombining extends metaplasm_1.TonalCombiningMetaplasm {
    constructor(tone) {
        super();
        this.tone = tone;
    }
    apply(sounds, allomorph) {
        // from -h to 1 or 7
        if (allomorph) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
            if (s.lastLetter.literal === version2_1.TonalLetterTags.h) {
                s.popLetter();
            }
            if (this.tone === version2_1.TonalLetterTags.z) {
                s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.z).characters));
            }
            else if (this.tone === version2_1.TonalLetterTags.zero &&
                sounds[sounds.length - 1].toString() === version2_1.TonalLetterTags.t) {
                s.pushLetter(new unit_1.AlphabeticLetter(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.f).characters));
            }
            return [s];
        }
        return [];
    }
}
exports.FirstSeventhCombining = FirstSeventhCombining;
/** Inflects an inflectional suffix. */
class TonalDesinenceInflection extends metaplasm_1.TonalInflectionMetaplasm {
    apply(morphemes) {
        if (morphemes.length > 0 && morphemes[morphemes.length - 1]) {
            const last = morphemes[morphemes.length - 1];
            const syls = last.getForms();
            let rets = [];
            if (syls) {
                for (let i in syls) {
                    let wd = new lexeme_1.TonalWord(morphemes.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
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
/** Inflects a transfix. */
class TransfixInflection extends metaplasm_1.TonalInflectionMetaplasm {
    apply(morphemes) {
        const rets = [];
        if (morphemes.length > 0) {
            const tw = new lexeme_1.TonalWord(morphemes.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
            for (let i = 0; i < morphemes.length; i++) {
                const form = morphemes[i].getForms()[0];
                if (form)
                    tw.replaceSyllable(i, form);
            }
            rets.push(tw);
        }
        return rets;
    }
}
exports.TransfixInflection = TransfixInflection;
/** Regressive assimilation inside a word. */
class RegressiveInternal extends metaplasm_1.TonalAssimilationMetaplasm {
    apply(morphemes) {
        let tw = new lexeme_1.TonalWord(morphemes.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
        if (morphemes.length > 1) {
            for (let i = 1; i < morphemes.length; i++) {
                if (morphemes[i].sounds[0].name === version2_1.TonalSoundTags.initial &&
                    (morphemes[i - 1].syllable.lastSecondLetter.literal ===
                        version2_1.TonalLetterTags.t ||
                        morphemes[i - 1].syllable.lastSecondLetter.literal ===
                            version2_1.TonalLetterTags.tt)) {
                    tw.replaceSyllable(i - 1, morphemes[i - 1].changeSoundWith(morphemes[i].sounds[0], AssimiDirection.regressive)[0]);
                }
                else {
                    const syls = morphemes[i - 1].changeSoundWith(morphemes[i].sounds[0], AssimiDirection.regressive);
                    if (syls.length)
                        tw.replaceSyllable(i - 1, syls[0]);
                }
            }
        }
        return [tw];
    }
}
exports.RegressiveInternal = RegressiveInternal;
/** Agressive assimilation inside a word. */
class AgressiveInternal extends metaplasm_1.TonalAssimilationMetaplasm {
    apply(morphemes) {
        if (morphemes.length > 1 && morphemes[morphemes.length - 2]) {
            const snds = morphemes[morphemes.length - 2].sounds;
            let wrd = new lexeme_1.TonalWord(morphemes.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
            if (snds.filter(x => x.name === version2_1.TonalSoundTags.nasalization).length == 1) {
                // nasalization of vowels
                wrd.replaceSyllable(wrd.syllables.length - 1, morphemes[morphemes.length - 1].changeSoundWith(new version2_1.NasalizationSound().sounds[0], AssimiDirection.agressive)[0]);
                return [wrd];
            }
            // duplifix. pass the preceding initial to get forms
            wrd.replaceSyllable(wrd.syllables.length - 1, morphemes[morphemes.length - 1].changeSoundWith(snds[0], AssimiDirection.agressive)[0]);
            return [wrd];
        }
        return [];
    }
}
exports.AgressiveInternal = AgressiveInternal;
/** Inserts an initial m, n, or ng to syllable ay. */
class Epenthesis extends metaplasm_1.TonalAssimilationMetaplasm {
    // adding of nasal consonants. insertion
    apply(morphemes) {
        if (morphemes.length > 1 && morphemes[morphemes.length - 2]) {
            const snds = morphemes[morphemes.length - 2].sounds;
            let wrd = new lexeme_1.TonalWord(morphemes.map(x => new morpheme_1.TonalSyllable(x.syllable.letters)));
            if (snds[snds.length - 2].name == version2_1.TonalSoundTags.nasalFinal &&
                morphemes[morphemes.length - 1].syllable.letters[0].literal ===
                    version2_1.TonalLetterTags.a) {
                // m, n, ng followed by -ay. pass the preceding nasal to get forms
                wrd.replaceSyllable(wrd.syllables.length - 1, morphemes[morphemes.length - 1].changeSoundWith(snds[snds.length - 2], AssimiDirection.agressive)[0]);
                return [wrd];
            }
        }
        return [];
    }
}
exports.Epenthesis = Epenthesis;
/** Returns the proceeding forms of a phrasal verb of length 2. */
class ConjugateToProceeding extends metaplasm_2.TonalPhrasalInflectionMetaplasm {
    apply(verb, particle) {
        if (verb.word.literal === '' || particle.word.literal === '')
            return [];
        if (particle.getForms().length > 0) {
            const forms = particle.getForms();
            const ret = [];
            forms.map(it => ret.push(new phraseme_1.TonalPhrase([verb.getForms()[0], it])));
            return ret;
        }
        else if (verb.getForms().length > 0) {
            // equivalent to compound in terms of phrasal verb
            return [new phraseme_1.TonalPhrase([verb.getForms()[0], particle.word])];
        }
        else {
            return [new phraseme_1.TonalPhrase([])];
        }
    }
}
exports.ConjugateToProceeding = ConjugateToProceeding;
/** Returns the proceeding forms of a phrasal verb of length 3. */
class ConjugateVppToProceeding extends metaplasm_2.TonalPhrasalInflectionMetaplasm {
    applyVpp(verb, particle, particleTwo) {
        if (verb.word.literal === '' ||
            particle.word.literal === '' ||
            particleTwo.word.literal === '')
            return [];
        if (particle.getForms().length > 0 || particleTwo.getForms().length > 0) {
            return [
                new phraseme_1.TonalPhrase([
                    verb.getForms()[0],
                    particle.getForms()[0],
                    particleTwo.getForms()[0]
                ])
            ];
        }
        return [new phraseme_1.TonalPhrase([])];
    }
}
exports.ConjugateVppToProceeding = ConjugateVppToProceeding;
/** Returns the transitive forms of a phrasal verb of length 3. */
class ConjugateVppToTransitive extends metaplasm_2.TonalPhrasalInflectionMetaplasm {
    applyVpp(verb, particle, particleTwo) {
        if (verb.word.literal === '' ||
            particle.word.literal === '' ||
            particleTwo.word.literal === '')
            return [];
        if (verb.getForms().length > 0) {
            return [
                new phraseme_1.TonalPhrase([verb.getForms()[0], particle.word, particleTwo.word])
            ];
        }
        return [new phraseme_1.TonalPhrase([])];
    }
}
exports.ConjugateVppToTransitive = ConjugateVppToTransitive;
/** Returns the participle forms of a phrasal verb of length 2. */
class ConjugateToParticiple extends metaplasm_2.TonalPhrasalInflectionMetaplasm {
    apply(verb, particle) {
        if (verb.word.literal === '' || particle.word.literal === '')
            return [];
        if (particle.getForms().length > 0) {
            const forms = particle.getForms();
            const ret = [];
            if (verb.getForms().length > 0) {
                forms.map(it => ret.push(new phraseme_1.TonalPhrase([verb.getForms()[0], it])));
            }
            else {
                forms.map(it => ret.push(new phraseme_1.TonalPhrase([verb.word, it])));
            }
            return ret;
        }
        return [new phraseme_1.TonalPhrase([])];
    }
}
exports.ConjugateToParticiple = ConjugateToParticiple;
/** Returns the participle forms of a phrasal verb of length 3. */
class ConjugateVppToParticiple extends metaplasm_2.TonalPhrasalInflectionMetaplasm {
    applyVpp(verb, particle, particleTwo) {
        if (verb.word.literal === '' ||
            particle.word.literal === '' ||
            particleTwo.word.literal === '')
            return [];
        if (particle.getForms().length > 0 && particleTwo.getForms().length > 0) {
            const ret = [];
            if (verb.getForms().length > 0) {
                ret.push(new phraseme_1.TonalPhrase([
                    verb.getForms()[0],
                    particle.getForms()[0],
                    particleTwo.getForms()[0]
                ]));
            }
            return ret;
        }
        return [new phraseme_1.TonalPhrase([])];
    }
}
exports.ConjugateVppToParticiple = ConjugateVppToParticiple;
/** Returns the adnominal forms of a possesive or e-adjective. */
class Adnominal extends metaplasm_2.TonalPhrasalInflectionMetaplasm {
    apply(noun, particle) {
        if (noun.word.literal === '' || particle.word.literal === '')
            return [];
        if (particle.getForms().length > 0) {
            return [new phraseme_1.TonalPhrase([noun.word, particle.getForms()[0]])];
        }
        else {
            return [new phraseme_1.TonalPhrase([])];
        }
    }
}
exports.Adnominal = Adnominal;
/** Returns the conjunctive form of le form. */
class Conjunctive extends metaplasm_2.TonalPhrasalInflectionMetaplasm {
    apply(verb, le) {
        if (verb.word.literal === '' || le.word.literal === '')
            return [];
        if (le.getForms().length > 0) {
            return [new phraseme_1.TonalPhrase([verb.getForms()[0], le.getForms()[0]])];
        }
        else if (verb.getForms().length > 0) {
            return [new phraseme_1.TonalPhrase([verb.getForms()[0], le.word])];
        }
        else {
            return [new phraseme_1.TonalPhrase([])];
        }
    }
}
exports.Conjunctive = Conjunctive;
/** Assimilates agressively between 2 words. */
class AgressiveExternal extends metaplasm_2.TonalPhrasalAssimilationMetaplasm {
    apply(preceding, following) {
        const wrds = following.assimilateWith(preceding, AssimiDirection.agressive);
        if (wrds.length > 0)
            return [new phraseme_1.TonalPhrase([preceding.word].concat(wrds))];
        return [];
    }
}
exports.AgressiveExternal = AgressiveExternal;
/** Assimilates regressively between 2 words. */
class RegressiveExternal extends metaplasm_2.TonalPhrasalAssimilationMetaplasm {
    apply(preceding, following) {
        const wrds = preceding.assimilateWith(following, AssimiDirection.regressive);
        if (wrds.length > 0)
            return [new phraseme_1.TonalPhrase([preceding.word].concat(wrds))];
        return [];
    }
}
exports.RegressiveExternal = RegressiveExternal;
//# sourceMappingURL=metaplasm.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/morpheme.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/morpheme.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const morpheme_1 = __webpack_require__(/*! ../tonal/morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
const version2_1 = __webpack_require__(/*! ../tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const unit_2 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const collections_1 = __webpack_require__(/*! ../tonal/collections */ "./node_modules/taipa/lib/tonal/collections.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
/** A syllable and its combining forms. */
class TonalCombiningMorpheme extends unit_1.Morpheme {
    constructor(syllable, sounds, metaplasm) {
        super();
        this.syllable = syllable;
        this.metaplasm = metaplasm;
        // assign allomorph for each syllable
        this.allomorph = this.assignAllomorph(this.syllable);
        this.sounds = sounds;
        this.forms = this.metaplasm.apply(this.sounds, this.allomorph);
    }
    getForms() {
        return this.forms;
    }
    assignAllomorph(syllable) {
        if (version2_1.uncombinedCheckedAllomorphs.has(syllable.lastLetter.literal)) {
            const am = version2_1.uncombinedCheckedAllomorphs.get(syllable.lastLetter.literal);
            if (am)
                return am;
            return new version2_1.Allomorph();
        }
        if (new version2_1.CheckedTonalSounds().includes(syllable.lastLetter.literal) &&
            version2_1.uncombinedCheckedAllomorphs.has(syllable.lastSecondLetter.literal)) {
            // in case of final followed by tonal
            const ams = version2_1.combinedCheckedAllomorphs.get(syllable.lastSecondLetter.literal);
            if (ams && ams.length > 1) {
                const it = ams.filter(x => x.tonal.toString() === syllable.lastLetter.literal);
                return it[0];
            }
            // return alms[0];
            return new version2_1.Allomorph();
        }
        if (version2_1.combinedFreeAllomorphs.has(syllable.lastLetter.literal)) {
            const am = version2_1.combinedFreeAllomorphs.get(syllable.lastLetter.literal);
            if (am)
                return am;
            return new version2_1.Allomorph(); // return empty allomorph
        }
        return new version2_1.ZeroAllomorph();
    }
}
exports.TonalCombiningMorpheme = TonalCombiningMorpheme;
/** A syllable and its sound changing forms. */
class TonalSoundChangingMorpheme extends unit_1.Morpheme {
    constructor(syllable, sounds) {
        super();
        this.syllable = syllable;
        this.sounds = sounds;
    }
    changeSoundWith(sound, dir) {
        if (sound) {
            if (sound.name === version2_1.TonalSoundTags.nasalFinal &&
                dir === metaplasm_1.AssimiDirection.agressive) {
                // agressive assimilation of nasals, both internal and external sandhi
                const snds = this.sounds;
                snds.splice(0, 0, sound);
                return [
                    new morpheme_1.TonalSyllable(snds.map(x => new unit_2.AlphabeticLetter(x.characters)))
                ];
            }
            else if (sound.name === version2_1.TonalSoundTags.initial &&
                dir === metaplasm_1.AssimiDirection.agressive) {
                const snds = this.sounds;
                if (snds[0].toString() === sound.toString()) {
                    let duplifix = new unit_2.Sound();
                    const ps = version2_1.tonalPositionalSounds.get(version2_1.TonalLetterTags.l);
                    if (ps)
                        duplifix = ps(version2_1.TonalSoundTags.initial);
                    snds.splice(0, 1, duplifix);
                }
                return [
                    new morpheme_1.TonalSyllable(snds.map(x => new unit_2.AlphabeticLetter(x.characters)))
                ];
            }
            else if (sound.name === version2_1.TonalSoundTags.nasalization &&
                dir === metaplasm_1.AssimiDirection.agressive) {
                const snds = this.sounds;
                if (snds[snds.length - 1].name === version2_1.TonalSoundTags.freeTonal) {
                    snds.splice(snds.length - 1, 0, sound);
                }
                else if (snds[snds.length - 1].name === version2_1.TonalSoundTags.medial) {
                    snds.push(sound);
                }
                return [
                    new morpheme_1.TonalSyllable(snds.map(x => new unit_2.AlphabeticLetter(x.characters)))
                ];
            }
            // internal sandhi. regressive assimilation
            return this.regAssimilate(this.sounds, sound);
        }
        return [];
    }
    regAssimilate(sounds, soundFollowingSyllable) {
        if (sounds[sounds.length - 2].name != version2_1.TonalSoundTags.stopFinal &&
            sounds[sounds.length - 2].name != version2_1.TonalSoundTags.nasalFinal) {
            return [];
        }
        if ((sounds[sounds.length - 2].toString() === version2_1.TonalLetterTags.tt &&
            collections_1.initialsForEuphonicTt.includes(soundFollowingSyllable.toString())) ||
            (sounds[sounds.length - 2].toString() === version2_1.TonalLetterTags.t &&
                collections_1.initialsForEuphonicT.includes(soundFollowingSyllable.toString()))) {
            // absolute assimilation. euphonic tt and t.
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_2.AlphabeticLetter(x.characters)));
            let snd = new unit_2.Sound();
            const af = collections_1.ttInitialTInitialPairs.get(sounds[sounds.length - 2].toString() + soundFollowingSyllable.toString());
            if (af) {
                const ps = version2_1.tonalPositionalSounds.get(af);
                if (ps)
                    snd = ps(version2_1.TonalSoundTags.stopFinal);
                s.replaceLetter(s.letters.length - 2, new unit_2.AlphabeticLetter(snd.characters));
                if (collections_1.nasalInitialSounds.includes(soundFollowingSyllable.toString())) {
                    s.insertLetter(s.letters.length - 2, new unit_2.AlphabeticLetter(soundFollowingSyllable.characters));
                }
                return [s];
            }
        }
        else if (soundFollowingSyllable.toString() === version2_1.TonalLetterTags.b &&
            sounds[sounds.length - 2].toString() === version2_1.TonalLetterTags.n) {
            // replace final n with final m
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_2.AlphabeticLetter(x.characters)));
            let snd = new unit_2.Sound();
            const ps = version2_1.tonalPositionalSounds.get(version2_1.TonalLetterTags.m);
            if (ps)
                snd = ps(version2_1.TonalSoundTags.nasalFinal);
            s.replaceLetter(s.letters.length - 2, new unit_2.AlphabeticLetter(snd.characters));
            return [s];
        }
        else {
            const tss = this.conditionalVoicedFinal(sounds, soundFollowingSyllable);
            if (tss)
                return tss;
        }
        // TODO: add euphonic hh and h.
        // TODO: neutrals. pp -> hh. p -> h.
        return [];
    }
    conditionalVoicedFinal(sounds, soundFollowingSyllable) {
        if (soundFollowingSyllable.name === version2_1.TonalSoundTags.initial &&
            collections_1.nasalInitialSounds.includes(soundFollowingSyllable.toString())) {
            return this.voicedFinal(sounds);
        }
        if (soundFollowingSyllable.name === version2_1.TonalSoundTags.medial &&
            new version2_1.MedialSounds().includes(soundFollowingSyllable.toString())) {
            return this.voicedFinal(sounds);
        }
        if (soundFollowingSyllable.name === version2_1.TonalSoundTags.initial &&
            collections_1.initialBghl.includes(soundFollowingSyllable.toString())) {
            return this.voicedFinal(sounds);
        }
    }
    voicedFinal(sounds) {
        const fnl = collections_1.voicelessVoicedFinals.get(sounds[sounds.length - 2].toString());
        if (fnl) {
            let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_2.AlphabeticLetter(x.characters)));
            let snd = new unit_2.Sound();
            const ps = version2_1.tonalPositionalSounds.get(fnl);
            if (ps)
                snd = ps(version2_1.TonalSoundTags.stopFinal);
            s.replaceLetter(s.letters.length - 2, new unit_2.AlphabeticLetter(snd.characters));
            return [s];
        }
    }
}
exports.TonalSoundChangingMorpheme = TonalSoundChangingMorpheme;
class TonalCombiningMorphemeMaker extends unit_1.MorphemeMaker {
    constructor(tsm) {
        super();
        this.metaplasm = tsm;
    }
    createMorphemes() {
        return new Array();
    }
    createMorpheme(msp) {
        const tcm = new TonalCombiningMorpheme(new morpheme_1.TonalSyllable(msp.letters), msp.pattern, this.metaplasm);
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
        const ptrns = this.make(ltrs, morpheme_1.syllabifyTonal);
        const ms = this.postprocess(ptrns);
        return ms;
    }
}
exports.TonalCombiningMorphemeMaker = TonalCombiningMorphemeMaker;
class TonalSoundChangingMorphemeMaker extends unit_1.MorphemeMaker {
    constructor() {
        super();
    }
    createMorphemes() {
        return new Array();
    }
    createMorpheme(match) {
        const tcm = new TonalSoundChangingMorpheme(new morpheme_1.TonalSyllable(match.letters), match.pattern);
        return tcm;
    }
    postprocess(matches) {
        let morphemes = this.createMorphemes();
        for (let i in matches) {
            morphemes.push(this.createMorpheme(matches[i]));
        }
        return morphemes;
    }
    makeMorphemes(gs) {
        const ltrs = gs.map(it => it.letter);
        const ptrns = this.make(ltrs, morpheme_1.syllabifyTonal);
        const ms = this.postprocess(ptrns);
        return ms;
    }
}
exports.TonalSoundChangingMorphemeMaker = TonalSoundChangingMorphemeMaker;
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
        this.s1B1RightRelations = new Map()
            .set(symbols_1.Tagset.ppv + symbols_1.Tagset.psub, symbols_1.DependencyLabels.compoundPrt)
            .set(symbols_1.Tagset.ppv + symbols_1.Tagset.npr, symbols_1.DependencyLabels.compoundPrt);
        this.s1B1LeftRelations = new Map();
        this.s2S1RightRelations = new Map()
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.ppv, symbols_1.DependencyLabels.compoundPrt)
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.psub, symbols_1.DependencyLabels.prt)
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.vb, symbols_1.DependencyLabels.compound)
            .set(symbols_1.Tagset.vb + symbols_1.Tagset.npr, symbols_1.DependencyLabels.obj);
        this.s2S1LeftRelations = new Map()
            .set(symbols_1.Tagset.aux + symbols_1.Tagset.vb, symbols_1.DependencyLabels.aux)
            .set(symbols_1.Tagset.padv + symbols_1.Tagset.vb, symbols_1.DependencyLabels.advmod)
            .set(symbols_1.Tagset.appr + symbols_1.Tagset.npr, symbols_1.DependencyLabels.case);
        this.s2S1LeftArgsOfVerb = new Map().set(symbols_1.Tagset.npr + symbols_1.Tagset.vb, [
            symbols_1.DependencyLabels.nsubj,
            symbols_1.DependencyLabels.dislocated
        ]);
        this.parse = (doc) => {
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
                this.setS1S2B1();
                if (this.s1.tag != '' && this.b1.tag != '') {
                    this.setS1B1Relation(t);
                }
                else if (this.isQueueEmpty()) {
                    this.setS2S1Relation(t);
                }
                this.c = this.apply(t, this.c);
            }
            doc.relations = this.c.relations;
            return doc;
        };
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
    setS1S2B1() {
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
    setS1B1Relation(t) {
        if (t instanceof configuration_1.RightArc) {
            if (this.s1B1RightRelations.has(this.s1.tag + this.b1.tag)) {
                const rel = this.s1B1RightRelations.get(this.s1.tag + this.b1.tag);
                if (rel) {
                    this.c.relations.push(this.rightRelation(rel));
                }
            }
        }
        else if (t instanceof configuration_1.LeftArc) {
            if (this.s1B1LeftRelations.has(this.s1.tag + this.b1.tag)) {
                const rel = this.s1B1LeftRelations.get(this.s1.tag + this.b1.tag);
                if (rel) {
                    this.c.relations.push(this.leftRelation(rel));
                }
            }
        }
    }
    setS2S1Relation(t) {
        if (t instanceof configuration_1.RightArc) {
            if (this.s2S1RightRelations.has(this.s2.tag + this.s1.tag)) {
                const rel = this.s2S1RightRelations.get(this.s2.tag + this.s1.tag);
                if (rel) {
                    this.c.relations.push(this.rightRelation(rel));
                }
            }
            else if (this.isStackEmpty()) {
                this.c.relations.push(this.rightRelation(symbols_1.DependencyLabels.root));
            }
        }
        else if (t instanceof configuration_1.LeftArc) {
            if (this.s2S1LeftRelations.has(this.s2.tag + this.s1.tag)) {
                const rel = this.s2S1LeftRelations.get(this.s2.tag + this.s1.tag);
                if (rel) {
                    this.c.relations.push(this.leftRelation(rel));
                }
            }
            else if (this.s2S1LeftArgsOfVerb.has(this.s2.tag + this.s1.tag)) {
                const labels = this.s2S1LeftArgsOfVerb.get(this.s2.tag + this.s1.tag);
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
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
const phraseme_1 = __webpack_require__(/*! ../tonal/phraseme */ "./node_modules/taipa/lib/tonal/phraseme.js");
/** A phrase of length 2 and its inflected forms. */
class PhrasalVerbPhraseme extends unit_1.Phraseme {
    constructor(verb, particle, metaplasm) {
        super();
        this.forms = new Array();
        this.phrase = new phraseme_1.TonalPhrase([verb.word, particle.word]);
        this.forms = metaplasm.apply(verb, particle);
    }
    /** Returns proceeding forms or participle forms */
    getForms() {
        return this.forms;
    }
}
exports.PhrasalVerbPhraseme = PhrasalVerbPhraseme;
/** A phrase of length 3 and its inflected forms. */
class PhrasalVerbVppPhraseme extends unit_1.Phraseme {
    constructor(verb, particle, particleTwo, metaplasm) {
        super();
        this.forms = new Array();
        this.phrase = new phraseme_1.TonalPhrase([verb.word, particle.word, particleTwo.word]);
        this.forms = metaplasm.applyVpp(verb, particle, particleTwo);
    }
    /** Returns proceeding forms, participle forms, or transitive form */
    getForms() {
        return this.forms;
    }
}
exports.PhrasalVerbVppPhraseme = PhrasalVerbVppPhraseme;
/** A compound. */
class TonalCompoundPhraseme extends unit_1.Phraseme {
    /** Separable phrasal verb. Separate compound verb. Separable verb. Tiappwsux gifchongwguy. Tiappwsux gifsiannzguy. Adverb + verb. Prepositional verb. */
    constructor(preceding, following) {
        super();
        this.phrase = new phraseme_1.TonalPhrase([preceding.getForms()[0], following.word]);
    }
}
exports.TonalCompoundPhraseme = TonalCompoundPhraseme;
/** A phrase and its inflected form. */
class TonalMainParticlePhraseme extends unit_1.Phraseme {
    /** E-adjective. Le form. Terminal form of possesive case. */
    constructor(main, particle, metaplasm) {
        super();
        this.forms = new Array();
        this.phrase = new phraseme_1.TonalPhrase([main.word, particle.word]);
        this.forms = metaplasm.apply(main, particle);
    }
    /** Returns adnominal form or conjunctive form. */
    getForms() {
        return this.forms;
    }
}
exports.TonalMainParticlePhraseme = TonalMainParticlePhraseme;
/** A phrase and its proceeding forms. */
class SerialPhraseme extends unit_1.Phraseme {
    /** A series of lexemes. */
    constructor(lexemes) {
        super();
        this.forms = new Array();
        // the base form is equivalent to a compound when there are only 2 words
        const words = [];
        for (let i = 0; i < lexemes.length - 1; i++) {
            if (lexemes[i].getForms().length > 0 && lexemes[i].getForms()[0]) {
                words.push(lexemes[i].getForms()[0]);
            }
        }
        if (lexemes[lexemes.length - 1] &&
            lexemes[lexemes.length - 1].word.literal.length > 0) {
            words.push(lexemes[lexemes.length - 1].word);
        }
        this.phrase = new phraseme_1.TonalPhrase(words);
        const forms = lexemes
            .filter(it => it.getForms().length > 0 && it.getForms()[0])
            .map(it => it.getForms()[0]);
        if (forms.length > 0)
            this.forms = [new phraseme_1.TonalPhrase(forms)];
        else
            this.forms = [];
    }
    /** Returna a series of inflected words. */
    getForms() {
        return this.forms;
    }
}
exports.SerialPhraseme = SerialPhraseme;
/** A phrase and its assimilated form. */
class TonalAssimilationPhraseme {
    constructor(preceding, following, metaplasm) {
        this.forms = new Array();
        this.phrase = new phraseme_1.TonalPhrase([preceding.word, following.word]);
        this.forms = metaplasm.apply(preceding, following);
    }
    /** Returns assimilated form. */
    getForms() {
        return this.forms;
    }
}
exports.TonalAssimilationPhraseme = TonalAssimilationPhraseme;
class TonalInflectionPhrasemeMaker {
    makePhrasalVerbPhraseme(verb, particle) {
        return new PhrasalVerbPhraseme(verb, particle, new metaplasm_1.ConjugateToProceeding());
    }
    makePhrasalVerbVppPhraseme(verb, particle, particleTwo) {
        return new PhrasalVerbVppPhraseme(verb, particle, particleTwo, new metaplasm_1.ConjugateVppToProceeding());
    }
    makeTransitiveVppPhraseme(verb, particle, particleTwo) {
        return new PhrasalVerbVppPhraseme(verb, particle, particleTwo, new metaplasm_1.ConjugateVppToTransitive());
    }
    makeCompoundPhraseme(preceding, following) {
        return new TonalCompoundPhraseme(preceding, following);
    }
    makeAdjectivePhraseme(adjectivalNoun, e) {
        return new TonalMainParticlePhraseme(adjectivalNoun, e, new metaplasm_1.Adnominal());
    }
    makeConjunctivePhraseme(verb, le) {
        return new TonalMainParticlePhraseme(verb, le, new metaplasm_1.Conjunctive());
    }
    makePossesivePhraseme(noun, ex) {
        return new TonalMainParticlePhraseme(noun, ex, new metaplasm_1.Adnominal());
    }
    makeParticiplePhraseme(verb, particle) {
        return new PhrasalVerbPhraseme(verb, particle, new metaplasm_1.ConjugateToParticiple());
    }
    makeVppParticiplePhraseme(verb, particle, particleTwo) {
        return new PhrasalVerbVppPhraseme(verb, particle, particleTwo, new metaplasm_1.ConjugateVppToParticiple());
    }
    makeSerialPhraseme(lexemes) {
        return new SerialPhraseme(lexemes);
    }
}
exports.TonalInflectionPhrasemeMaker = TonalInflectionPhrasemeMaker;
class TonalAssimilationPhrasemeMaker {
    makePhraseme(preceding, following, metaplasm) {
        return new TonalAssimilationPhraseme(preceding, following, metaplasm);
    }
}
exports.TonalAssimilationPhrasemeMaker = TonalAssimilationPhrasemeMaker;
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
const inflector_1 = __webpack_require__(/*! ./inflector */ "./node_modules/taipa/lib/dparser/inflector.js");
const visitor_1 = __webpack_require__(/*! ./visitor */ "./node_modules/taipa/lib/dparser/visitor.js");
const dictionary_1 = __webpack_require__(/*! ./dictionary */ "./node_modules/taipa/lib/dparser/dictionary.js");
/** Construction of a phrase. */
class ConstructionOfPhrase {
    constructor(arr) {
        /** Part-of-speech of this phrase. */
        this.pos = '';
        /** Construction elements of this phrase. */
        this.elements = new Array();
        for (let key in arr) {
            this.elements.push(arr[key]);
        }
    }
}
exports.ConstructionOfPhrase = ConstructionOfPhrase;
class PhrasalVerb extends ConstructionOfPhrase {
    constructor(arr) {
        super(arr);
        this.pos = symbols_1.POSTags.verb;
    }
}
exports.PhrasalVerb = PhrasalVerb;
class VerbPhrase extends ConstructionOfPhrase {
    constructor() {
        super([]);
        this.pos = symbols_1.POSTags.verb;
    }
}
class PrepositionPhrase extends ConstructionOfPhrase {
}
class NounPhrase extends ConstructionOfPhrase {
}
class PhrasalVerbWithEnclitic extends VerbPhrase {
    constructor(verb, particle, enclitic) {
        super();
        verb.tag = symbols_1.Tagset.vb;
        this.elements.push(verb);
        particle.tag = symbols_1.Tagset.ppv;
        this.elements.push(particle);
        enclitic.tag = symbols_1.Tagset.psub;
        this.elements.push(enclitic);
    }
}
exports.PhrasalVerbWithEnclitic = PhrasalVerbWithEnclitic;
class VerbWithEnclitic extends VerbPhrase {
    constructor(verb, enclitic) {
        super();
        verb.tag = symbols_1.Tagset.vb;
        this.elements.push(verb);
        enclitic.tag = symbols_1.Tagset.psub;
        this.elements.push(enclitic);
    }
}
exports.VerbWithEnclitic = VerbWithEnclitic;
class PhrasalVerbs {
    constructor() {
        this.phvbs = new Array();
        this.populatePhrasemes();
    }
    populatePhrasemes() {
        dictionary_1.dictOfPhrasalVerbs
            .map(it => inflector_1.inflectToProceeding(it[0], it[1]))
            .map(it => {
            const ol = new visitor_1.OrthoPhraseme();
            ol.form = it.phrase.words[0].literal + ' ' + it.phrase.words[1].literal;
            ol.inflected.push(it.getForms()[0].words[0].literal +
                ' ' +
                it.getForms()[0].words[1].literal);
            this.phvbs.push(ol);
        });
        dictionary_1.dictOfPhrasalVerbTwos
            .map(it => inflector_1.inflectVppToProceeding(it[0], it[1], it[2]))
            .map(it => {
            const ol = new visitor_1.OrthoPhraseme();
            ol.form =
                it.phrase.words[0].literal +
                    ' ' +
                    it.phrase.words[1].literal +
                    ' ' +
                    it.phrase.words[2].literal;
            ol.inflected.push(it.getForms()[0].words[0].literal +
                ' ' +
                it.getForms()[0].words[1].literal +
                ' ' +
                it.getForms()[0].words[2].literal);
            this.phvbs.push(ol);
        });
    }
    match(sequence) {
        // match any form, return the base one
        const v = new visitor_1.VisitorMatching();
        const arr = this.phvbs.filter(it => it.accept(v, sequence));
        if (arr.length > 0)
            return arr[0].form;
        return '';
    }
}
exports.PhrasalVerbs = PhrasalVerbs;
class SmallClause extends VerbPhrase {
    constructor(verb1, pronoun, verb2) {
        super();
        verb1.tag = symbols_1.Tagset.vb;
        this.elements.push(verb1);
        pronoun.tag = symbols_1.Tagset.npr;
        this.elements.push(pronoun);
        verb2.tag = symbols_1.Tagset.vb;
        this.elements.push(verb2);
    }
}
class SetOfSmallClauses {
    constructor() {
        this.constructions = [];
        // obj. xcomp.
        const sc = new SmallClause(new keywords_1.VerbElement('oannw'), new keywords_1.PersonalPronounElement('goa'), new keywords_1.VerbElement('churw'));
        this.constructions.push(sc);
    }
}
exports.SetOfSmallClauses = SetOfSmallClauses;
class Rules {
    constructor() {
        this.phrases = new Array();
        this.keyWords = new keywords_1.KeyWords();
        this.populatePatterns();
    }
    lookupDictionary(str) {
        let phr;
        if (dictionary_1.dictOfVerbs.includes(str)) {
            let vs = new keywords_1.VerbElement(str);
            if (vs.pos === symbols_1.POSTags.verb)
                vs.tag = symbols_1.Tagset.vb;
            phr = [new ConstructionOfPhrase([])];
            phr[0].elements.push(vs);
            phr[0].pos = symbols_1.POSTags.verb;
            return phr;
        }
        return undefined;
    }
    lookupRules(sequence) {
        const pvbs = new PhrasalVerbs();
        if ((sequence.length == 2 && pvbs.match(sequence) != '') ||
            pvbs.match([sequence[0], sequence[1]])) {
            return [
                new PhrasalVerb([
                    new keywords_1.VerbElement(sequence[0]),
                    new keywords_1.ParticleElement(sequence[1])
                ])
            ];
        }
        if (sequence.length == 3 && pvbs.match(sequence) != '') {
            return [
                new PhrasalVerb([
                    new keywords_1.VerbElement(sequence[0]),
                    new keywords_1.ParticleElement(sequence[1]),
                    new keywords_1.ParticleElement(sequence[2])
                ])
            ];
        }
        if (sequence.length > 3 &&
            pvbs.match([sequence[0], sequence[1], sequence[2]]) != '') {
            return [
                new PhrasalVerb([
                    new keywords_1.VerbElement(sequence[0]),
                    new keywords_1.ParticleElement(sequence[1]),
                    new keywords_1.ParticleElement(sequence[2])
                ])
            ];
        }
        return [];
    }
    matchKeyWords(str) {
        const ce1 = this.keyWords.matchWords(str);
        if (ce1.orth.length > 0) {
            return ce1;
        }
        const ce2 = this.keyWords.matchLexemes(str);
        if (ce2.orth.length > 0) {
            return ce2;
        }
    }
    seperateMatches(str) {
        const ptcls = dictionary_1.dictOfSeperateVVCompounds[str];
        if (ptcls) {
            return ptcls[0];
        }
    }
    matches(sequence) {
        const phrD = this.lookupDictionary(sequence[0]);
        const phrR = this.lookupRules(sequence);
        if (phrR && phrR.length > 0)
            return phrR;
        else if (phrD)
            return phrD;
        return undefined;
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
    POSTags["coordinatingConjunction"] = "CCONJ";
    POSTags["determiner"] = "DET";
    POSTags["interjection"] = "INTJ";
    POSTags["noun"] = "NOUN";
    POSTags["number"] = "NUM";
    POSTags["particle"] = "PART";
    POSTags["pronoun"] = "PRON";
    POSTags["properNoun"] = "PROPN";
    POSTags["punctuation"] = "PUNCT";
    POSTags["subordinatingConjunction"] = "SCONJ";
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
    DependencyLabels["auxCaus"] = "aux:caus";
    DependencyLabels["case"] = "case";
    DependencyLabels["ccomp"] = "ccomp";
    DependencyLabels["compound"] = "compound";
    DependencyLabels["compoundPrt"] = "compound:prt";
    DependencyLabels["cop"] = "cop";
    DependencyLabels["csubj"] = "csubj";
    DependencyLabels["det"] = "det";
    DependencyLabels["dislocated"] = "dislocated";
    DependencyLabels["fix"] = "fix";
    DependencyLabels["flat"] = "flat";
    DependencyLabels["obj"] = "obj";
    DependencyLabels["iobj"] = "iobj";
    DependencyLabels["iobjAgent"] = "iobj:agent";
    DependencyLabels["mark"] = "mark";
    DependencyLabels["nmod"] = "nmod";
    DependencyLabels["nobj"] = "nobj";
    DependencyLabels["nsubj"] = "nsubj";
    DependencyLabels["nsubjCaus"] = "nsubj:caus";
    DependencyLabels["obl"] = "obl";
    DependencyLabels["prt"] = "prt";
    DependencyLabels["root"] = "root";
    DependencyLabels["xcomp"] = "xcomp";
})(DependencyLabels = exports.DependencyLabels || (exports.DependencyLabels = {}));
var Tagset;
(function (Tagset) {
    Tagset["aux"] = "AUX";
    Tagset["adj"] = "ADJ";
    Tagset["adnom"] = "ADNOM";
    Tagset["adv"] = "ADV";
    Tagset["appr"] = "APPR";
    Tagset["appo"] = "APPO";
    Tagset["cl"] = "CL";
    Tagset["conj"] = "CONJ";
    Tagset["fil"] = "FIL";
    Tagset["intj"] = "INTJ";
    Tagset["nn"] = "NN";
    Tagset["nnp"] = "NNP";
    Tagset["npr"] = "NPR";
    Tagset["num"] = "NUM";
    Tagset["nv"] = "NV";
    Tagset["nadj"] = "NADJ";
    Tagset["nadv"] = "NADV";
    Tagset["par"] = "PAR";
    Tagset["pcs"] = "PCS";
    Tagset["pco"] = "PCO";
    Tagset["pcj"] = "PCJ";
    Tagset["pend"] = "PEND";
    Tagset["padv"] = "PADV";
    Tagset["ppv"] = "PPV";
    Tagset["psub"] = "PSUB";
    Tagset["pnc"] = "PNC";
    Tagset["px"] = "PX";
    Tagset["sx"] = "SX";
    Tagset["sym"] = "SYM";
    Tagset["vb"] = "VB"; // verb
})(Tagset = exports.Tagset || (exports.Tagset = {}));
var PronType;
(function (PronType) {
    /*
        pronominal types
        https://universaldependencies.org/u/feat/PronType.html
      */
    PronType["dem"] = "Dem";
    PronType["prs"] = "Prs";
    PronType["rel"] = "Rel";
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
        this.phrases = new Array();
        this.rules = new rules_1.Rules();
        this.tag = (doc) => {
            this.match(doc.tokens);
            let ces = new Array();
            for (let i in this.phrases) {
                doc.phrases.push(this.phrases[i]);
                for (let j in this.phrases[i].elements) {
                    ces.push(this.phrases[i].elements[j]);
                }
            }
            for (let i = 0; i < ces.length; i++) {
                if (doc.tokens[i].text === ces[i].orth) {
                    doc.tokens[i].pos = ces[i].pos;
                    doc.tokens[i].tag = ces[i].tag;
                }
            }
            return doc;
        };
    }
    generate(sequence, phrases) {
        let cps = new Array();
        if (phrases.length > 0) {
            for (let ph of phrases) {
                cps.push(ph);
                //console.log(pat.elements)
                if (ph instanceof rules_1.PhrasalVerb) {
                    const pvwe = new rules_1.PhrasalVerbWithEnclitic(new keywords_1.VerbElement(ph.elements[0].orth), new keywords_1.ParticleElement(ph.elements[1].orth), new keywords_1.EncliticElement('aw'));
                    cps.push(pvwe);
                }
                else if (ph.pos === symbols_1.POSTags.verb) {
                    const vwe = new rules_1.VerbWithEnclitic(new keywords_1.VerbElement(sequence[0]), new keywords_1.EncliticElement('aw'));
                    cps.push(vwe);
                }
            }
        }
        else {
            //console.log(sequence)
            const vwe = new rules_1.VerbWithEnclitic(new keywords_1.VerbElement(sequence[0]), new keywords_1.EncliticElement('aw'));
            cps.push(vwe);
        }
        //console.log(cps)
        return cps;
    }
    tagKeyWord(kw) {
        if (kw.pos === symbols_1.POSTags.pronoun) {
            kw.tag = symbols_1.Tagset.npr;
        }
        else if (kw.pos === symbols_1.POSTags.auxiliary)
            kw.tag = symbols_1.Tagset.aux;
        else if (kw.pos === symbols_1.POSTags.particle)
            kw.tag = symbols_1.Tagset.padv;
    }
    matchSeperates(sequence, particle) {
        let phrase = new rules_1.ConstructionOfPhrase([]);
        let vs = new keywords_1.VerbElement(sequence[0]);
        vs.tag = symbols_1.Tagset.vb;
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
                    let ps = new keywords_1.VerbElement(sequence[i]);
                    ps.tag = symbols_1.Tagset.vb;
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
                    ph.elements[0].tag = symbols_1.Tagset.vb;
                    if (ph.elements.length == 3 && ph.elements[1].pos === symbols_1.POSTags.particle) {
                        ph.elements[1].tag = symbols_1.Tagset.ppv;
                    }
                    ph.elements[ph.elements.length - 1].tag = symbols_1.Tagset.ppv;
                }
                else if (ph.pos === symbols_1.POSTags.verb && ph.elements[ph.elements.length - 1].pos === symbols_1.POSTags.auxiliary) {
                }
                else if (ph.pos === symbols_1.POSTags.verb && ph.elements[ph.elements.length - 1].pos === symbols_1.POSTags.adposition) {
                    ph.elements[0].tag = symbols_1.Tagset.vb;
                    ph.elements[ph.elements.length - 1].tag = symbols_1.Tagset.appr;
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
        // console.log(phrss);
        if (!phrss || phrss.length == 0) {
            // console.log(sequence);
            let kw = this.rules.matchKeyWords(sequence[0]);
            if (kw) {
                //console.log(kw)
                this.tagKeyWord(kw);
                phrss = [new rules_1.ConstructionOfPhrase([])];
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
        let mp = new rules_1.ConstructionOfPhrase([]);
        for (let m in listCP) {
            const min = Math.min(strs.length - beginOfPhrase, listCP[m].elements.length);
            if (listCP[m].elements.length == min) {
                for (let n = 0; n < min; n++) {
                    if (listCP[m].elements[n] != undefined) {
                        if (strs[beginOfPhrase + n] === listCP[m].elements[n].orth) {
                            if (n + 1 == min && min > matchedLen) {
                                matchedLen = min;
                                for (let q = 0; q < matchedLen; q++) {
                                    mp.elements[q] = listCP[m].elements[q];
                                    if (listCP[m].elements[q].orth === '') {
                                        mp.elements[q].orth = strs[beginOfPhrase + q];
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
        for (let s of this.phrases) {
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
        let matched = new rules_1.ConstructionOfPhrase([]);
        for (let i = 0; i < strs.length; i++) {
            if (i - beginOfPhrase == 0) {
                matched = this.phrase(strs, beginOfPhrase);
                //console.log(matched)
                if (matched.elements.length) {
                    beginOfPhrase += matched.elements.length;
                    this.phrases.push(matched);
                    this.tagSpeeches();
                }
            }
        }
    }
}
exports.RuleBasedTagger = RuleBasedTagger;
//# sourceMappingURL=tagger.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/dparser/visitor.js":
/*!***************************************************!*\
  !*** ./node_modules/taipa/lib/dparser/visitor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** Concrete visitor. */
class VisitorMatching {
    /**
     * Matches the phrase to the forms of a phraseme.
     * @param phraseme A container of phrase forms.
     * @param phrase The phrase to be matched.
     */
    visitPhraseme(phraseme, phrase) {
        if (phrase === phraseme.form)
            return true;
        if (phraseme.inflected.filter(it => it === phrase).length > 0)
            return true;
        if (phraseme.assimilated.filter(it => it === phrase).length > 0)
            return true;
        return false;
    }
    /**
     * Matches the word to the forms of a lexeme.
     * @param lexeme A container of word forms.
     * @param word The word to be matched.
     */
    visitLexeme(lexeme, word) {
        // match a form of a lexeme
        if (word === lexeme.form)
            return true;
        if (lexeme.inflected.filter(it => it === word).length > 0)
            return true;
        if (lexeme.assimilated.filter(it => it === word).length > 0)
            return true;
        return false;
    }
    /**
     * Matches the word to the form.
     * @param orth A container of a form.
     * @param word The word to be matched.
     */
    visitWord(orth, word) {
        if (word === orth.form)
            return true;
        return false;
    }
}
exports.VisitorMatching = VisitorMatching;
/** Orthographic phraseme. */
class OrthoPhraseme {
    constructor() {
        /** Base form. */
        this.form = '';
        this.inflected = [];
        this.assimilated = [];
    }
    accept(visitor, words) {
        return visitor.visitPhraseme(this, words.join(' '));
    }
}
exports.OrthoPhraseme = OrthoPhraseme;
/** Orthographic lexeme. */
class OrthoLexeme {
    constructor() {
        /** Base form. */
        this.form = '';
        this.inflected = [];
        this.assimilated = [];
    }
    accept(visitor, word) {
        return visitor.visitLexeme(this, word);
    }
}
exports.OrthoLexeme = OrthoLexeme;
/** Orthographic word. */
class OrthoWord {
    constructor() {
        /** A word form. */
        this.form = '';
    }
    accept(visitor, word) {
        return visitor.visitWord(this, word);
    }
}
exports.OrthoWord = OrthoWord;
//# sourceMappingURL=visitor.js.map

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
var analyzer_1 = __webpack_require__(/*! ./tonal/analyzer */ "./node_modules/taipa/lib/tonal/analyzer.js");
exports.tonalLemmatizationAnalyzer = analyzer_1.tonalLemmatizationAnalyzer;
exports.graphAnalyzeTonal = analyzer_1.graphAnalyzeTonal;
var analyzer_2 = __webpack_require__(/*! ./dparser/analyzer */ "./node_modules/taipa/lib/dparser/analyzer.js");
exports.tonalInflectionAnalyzer = analyzer_2.tonalInflectionAnalyzer;
var analyzer_3 = __webpack_require__(/*! ./kana/analyzer */ "./node_modules/taipa/lib/kana/analyzer.js");
exports.kanaLemmatizationAnalyzer = analyzer_3.kanaLemmatizationAnalyzer;
exports.graphAnalyzeKana = analyzer_3.graphAnalyzeKana;
var unit_1 = __webpack_require__(/*! ./unit */ "./node_modules/taipa/lib/unit.js");
exports.GraphemeMaker = unit_1.GraphemeMaker;
var lexicalroots2_1 = __webpack_require__(/*! ./tonal/lexicalroots2 */ "./node_modules/taipa/lib/tonal/lexicalroots2.js");
exports.lexicalRoots = lexicalroots2_1.lexicalRoots;
var version2_1 = __webpack_require__(/*! ./tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
exports.lowerLettersTonal = version2_1.lowerLettersTonal;
exports.TonalLetterTags = version2_1.TonalLetterTags;
exports.TonalSoundTags = version2_1.TonalSoundTags;
var lemmatizer_1 = __webpack_require__(/*! ./tonal/lemmatizer */ "./node_modules/taipa/lib/tonal/lemmatizer.js");
exports.lemmatize = lemmatizer_1.lemmatize;
var assimilator_1 = __webpack_require__(/*! ./dparser/assimilator */ "./node_modules/taipa/lib/dparser/assimilator.js");
exports.getNoAssimilation = assimilator_1.getNoAssimilation;
exports.assimilateAgressiveLexical = assimilator_1.assimilateAgressiveLexical;
exports.assimilateRegressiveLexical = assimilator_1.assimilateRegressiveLexical;
exports.assimilateAgressivePhrasal = assimilator_1.assimilateAgressivePhrasal;
exports.assimilateRegressivePhrasal = assimilator_1.assimilateRegressivePhrasal;
var creator_1 = __webpack_require__(/*! ./dparser/creator */ "./node_modules/taipa/lib/dparser/creator.js");
exports.createTonalPhrase = creator_1.createTonalPhrase;
exports.createTonalInflectionLexeme = creator_1.createTonalInflectionLexeme;
exports.createCompoundPhraseme = creator_1.createCompoundPhraseme;
var inflector_1 = __webpack_require__(/*! ./dparser/inflector */ "./node_modules/taipa/lib/dparser/inflector.js");
exports.inflectDesinence = inflector_1.inflectDesinence;
exports.inflectTransfix = inflector_1.inflectTransfix;
exports.inflectEncliticE = inflector_1.inflectEncliticE;
exports.inflectPhrasalVerbParticle = inflector_1.inflectPhrasalVerbParticle;
exports.inflectEncliticLe = inflector_1.inflectEncliticLe;
exports.inflectPossesiveEx = inflector_1.inflectPossesiveEx;
exports.inflectTo = inflector_1.inflectTo;
exports.inflectEighthToFirst = inflector_1.inflectEighthToFirst;
exports.inflectEighthToSecond = inflector_1.inflectEighthToSecond;
exports.inflectToProceeding = inflector_1.inflectToProceeding;
exports.inflectVppToProceeding = inflector_1.inflectVppToProceeding;
exports.inflectVppToTransitive = inflector_1.inflectVppToTransitive;
exports.inflectEToAdnominal = inflector_1.inflectEToAdnominal;
exports.inflectLeToConjunctive = inflector_1.inflectLeToConjunctive;
exports.inflectPossesive = inflector_1.inflectPossesive;
exports.inflectToParticiple = inflector_1.inflectToParticiple;
exports.inflectVppToParticiple = inflector_1.inflectVppToParticiple;
exports.inflectSerial = inflector_1.inflectSerial;
var inserter_1 = __webpack_require__(/*! ./dparser/inserter */ "./node_modules/taipa/lib/dparser/inserter.js");
exports.insertTo = inserter_1.insertTo;
var token_1 = __webpack_require__(/*! ./token */ "./node_modules/taipa/lib/token.js");
exports.TokenAnalysis = token_1.TokenAnalysis;
var unit_2 = __webpack_require__(/*! ./unit */ "./node_modules/taipa/lib/unit.js");
exports.AlphabeticGrapheme = unit_2.AlphabeticGrapheme;
var morpheme_1 = __webpack_require__(/*! ./dparser/morpheme */ "./node_modules/taipa/lib/dparser/morpheme.js");
exports.TonalCombiningMorpheme = morpheme_1.TonalCombiningMorpheme;
var morpheme_2 = __webpack_require__(/*! ./tonal/morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
exports.TonalUncombiningMorpheme = morpheme_2.TonalUncombiningMorpheme;
var lexeme_1 = __webpack_require__(/*! ./dparser/lexeme */ "./node_modules/taipa/lib/dparser/lexeme.js");
exports.TonalInflectionLexeme = lexeme_1.TonalInflectionLexeme;
exports.TonalAssimilationLexeme = lexeme_1.TonalAssimilationLexeme;
exports.TonalInsertionLexeme = lexeme_1.TonalInsertionLexeme;
var lexeme_2 = __webpack_require__(/*! ./tonal/lexeme */ "./node_modules/taipa/lib/tonal/lexeme.js");
exports.TonalLemmatizationLexeme = lexeme_2.TonalLemmatizationLexeme;
var phraseme_1 = __webpack_require__(/*! ./dparser/phraseme */ "./node_modules/taipa/lib/dparser/phraseme.js");
exports.PhrasalVerbPhraseme = phraseme_1.PhrasalVerbPhraseme;
exports.PhrasalVerbVppPhraseme = phraseme_1.PhrasalVerbVppPhraseme;
exports.TonalMainParticlePhraseme = phraseme_1.TonalMainParticlePhraseme;
exports.TonalCompoundPhraseme = phraseme_1.TonalCompoundPhraseme;
exports.SerialPhraseme = phraseme_1.SerialPhraseme;
exports.TonalAssimilationPhraseme = phraseme_1.TonalAssimilationPhraseme;
var morpheme_3 = __webpack_require__(/*! ./kana/morpheme */ "./node_modules/taipa/lib/kana/morpheme.js");
exports.KanaUncombiningMorpheme = morpheme_3.KanaUncombiningMorpheme;
var lexeme_3 = __webpack_require__(/*! ./tonal/lexeme */ "./node_modules/taipa/lib/tonal/lexeme.js");
exports.TonalWord = lexeme_3.TonalWord;
var phraseme_2 = __webpack_require__(/*! ./tonal/phraseme */ "./node_modules/taipa/lib/tonal/phraseme.js");
exports.TonalPhrase = phraseme_2.TonalPhrase;
var unit_3 = __webpack_require__(/*! ./unit */ "./node_modules/taipa/lib/unit.js");
exports.Sound = unit_3.Sound;
exports.SoundGeneration = unit_3.SoundGeneration;
var metaplasm_1 = __webpack_require__(/*! ./dparser/metaplasm */ "./node_modules/taipa/lib/dparser/metaplasm.js");
exports.TonalDesinenceInflection = metaplasm_1.TonalDesinenceInflection;
exports.TonalCombiningForms = metaplasm_1.TonalCombiningForms;
var prediction_1 = __webpack_require__(/*! ./tonal/prediction */ "./node_modules/taipa/lib/tonal/prediction.js");
exports.predict = prediction_1.predict;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/interface.js":
/*!*********************************************!*\
  !*** ./node_modules/taipa/lib/interface.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Metaplasm {
}
exports.Metaplasm = Metaplasm;
//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/kana/analyzer.js":
/*!*************************************************!*\
  !*** ./node_modules/taipa/lib/kana/analyzer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/kana/morpheme.js");
const kana_1 = __webpack_require__(/*! ./kana */ "./node_modules/taipa/lib/kana/kana.js");
const metaplasm_1 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
/**
 * Analyzes a string into graphemes. Graphemic analysis.
 * @param str A string
 */
function graphAnalyzeKana(str) {
    const gm = new unit_1.GraphemeMaker(kana_1.lowerLettersKana);
    return gm.makeGraphemes(str);
}
exports.graphAnalyzeKana = graphAnalyzeKana;
/** Analyzes a string into morphemes. */
exports.kanaLemmatizationAnalyzer = {
    /**
     * Analyzes a string or graphemes into morphemes. Morphological analysis.
     * @param x A string or graphemes
     */
    morphAnalyze(x) {
        let graphemes = [];
        if (typeof x == 'object') {
            graphemes = x;
        }
        else if (typeof x == 'string') {
            graphemes = graphAnalyzeKana(x);
        }
        const mm = new morpheme_1.KanaUncombiningMorphemeMaker(new metaplasm_1.KanaCombiningMetaplasm());
        return mm.makeInputingMorphemes(graphemes);
    }
};
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
function checkNumberOfLettersKana() {
    if (kana_1.kanaPositionalSound.size !== kana_1.lowerLettersKana.size) {
        console.log('sizes unmatched');
    }
}
exports.checkNumberOfLettersKana = checkNumberOfLettersKana;
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
    let results = kana_1.hiraganaKatakana.get(str);
    if (results == undefined) {
        results = kana_1.gailaigo.get(str);
    }
    return results;
}
function getKanaBlocks(ms) {
    // string one is hiragana, string two is katakana, string 3 is chouon
    let kanaCompositions = ['', '', ''];
    let previous = '';
    for (let e of ms) {
        let ks = lookup(e.syllable.literal);
        if (ks != undefined && ks[0] != undefined) {
            // in case the kana is absent, we check against ks[0]
            kanaCompositions[0] += ks[0];
            kanaCompositions[1] += ks[1];
            if (previous.length > 0 &&
                checkChouon(previous[previous.length - 1], e.syllable.literal[e.syllable.literal.length - 1]) &&
                new kana_1.InitialConsonantSet().includes(e.syllable.literal) == false &&
                e.syllable.literal.length == 1) {
                // a vowel does not begin with a consonant and is of length 1
                // a vowel follows a previous vowel
                kanaCompositions[2] += 'ー';
            }
            else {
                kanaCompositions[2] += ks[1];
            }
        }
        else if (new kana_1.FinalConsonantSet().includes(e.syllable.literal[e.syllable.literal.length - 1]) == true) {
            ks = lookup(e.syllable.literal.substring(0, e.syllable.literal.length - 1));
            if (ks != undefined && ks[0] != undefined) {
                kanaCompositions[0] += ks[0];
                kanaCompositions[1] += ks[1];
                kanaCompositions[2] += ks[1];
            }
            if (new kana_1.Hatsuon().includes(e.syllable.literal[e.syllable.literal.length - 1])) {
                ks = kana_1.hatsuon.get('n');
                if (ks) {
                    kanaCompositions[0] += ks[0];
                    kanaCompositions[1] += ks[1];
                    kanaCompositions[2] += ks[1];
                }
            }
            else {
                ks = kana_1.kogakimoji.get('chu');
                if (ks) {
                    kanaCompositions[0] += ks[0];
                    kanaCompositions[1] += ks[1];
                    kanaCompositions[2] += ks[1];
                }
            }
        }
        else {
            let first = e.syllable.literal[0];
            let second = e.syllable.literal[1];
            if (first === second &&
                new kana_1.GerminatedConsonantSet().includes(first) == true) {
                ks = kana_1.kogakimoji.get('chu');
                if (ks) {
                    kanaCompositions[0] += ks[0];
                    kanaCompositions[1] += ks[1];
                    kanaCompositions[2] += ks[1];
                }
                ks = kana_1.hiraganaKatakana.get(e.syllable.literal.substring(1, e.syllable.literal.length));
                if (ks) {
                    kanaCompositions[0] += ks[0];
                    kanaCompositions[1] += ks[1];
                    kanaCompositions[2] += ks[1];
                }
            }
        }
        previous = e.syllable.literal;
    }
    // remove duplicates
    if (kanaCompositions[1] === kanaCompositions[2])
        kanaCompositions[2] = '';
    return kanaCompositions;
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
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
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
class LettersOfKana extends unit_1.Letters {
}
exports.LettersOfKana = LettersOfKana;
exports.lowerLettersKana = new LettersOfKana([
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
    KanaLetterTags.ng
]);
var KanaSoundTags;
(function (KanaSoundTags) {
    KanaSoundTags["germinatedConsonant"] = "germinatedConsonant";
    KanaSoundTags["initialConsonant"] = "initialConsonant";
    KanaSoundTags["semivowel"] = "semivowel";
    KanaSoundTags["vowel"] = "vowel";
    KanaSoundTags["finalConsonant"] = "finalConsonant";
})(KanaSoundTags = exports.KanaSoundTags || (exports.KanaSoundTags = {}));
class GerminatedConsonant extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.germinatedConsonant;
    }
}
class InitialConsonant extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.initialConsonant;
    }
}
class Semivowel extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.semivowel;
    }
}
class Vowel extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = KanaSoundTags.vowel;
    }
}
class FinalConsonant extends unit_1.Sound {
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
class InitialConsonantSet extends unit_1.SetOfSounds {
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
exports.InitialConsonantSet = InitialConsonantSet;
class VowelSet extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new VowelA());
        this.sounds.push(new VowelI());
        this.sounds.push(new VowelU());
        this.sounds.push(new VowelE());
        this.sounds.push(new VowelO());
    }
}
exports.VowelSet = VowelSet;
class GerminatedConsonantSet extends unit_1.SetOfSounds {
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
exports.GerminatedConsonantSet = GerminatedConsonantSet;
class SemivowelSet extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new SemivowelW());
        this.sounds.push(new SemivowelY());
    }
}
exports.SemivowelSet = SemivowelSet;
class FinalConsonantSet extends unit_1.SetOfSounds {
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
exports.FinalConsonantSet = FinalConsonantSet;
class Hatsuon extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalConsonantN());
    }
}
exports.Hatsuon = Hatsuon;
function positionalSound(sounds) {
    return (t) => {
        for (let i in sounds) {
            if (sounds[i].name === t)
                return sounds[i];
        }
        return new unit_1.Sound();
    };
}
exports.positionalSound = positionalSound;
const psA = positionalSound([new VowelA()]);
const psB = positionalSound([
    new InitialConsonantB(),
    new FinalConsonantB(),
    new GerminatedConsonantB()
]);
const psC = positionalSound([
    new InitialConsonantC(),
    new GerminatedConsonantC()
]);
const psCh = positionalSound([new InitialConsonantCH()]);
const psD = positionalSound([
    new InitialConsonantD(),
    new FinalConsonantD(),
    new GerminatedConsonantD()
]);
const psE = positionalSound([new VowelE()]);
const psF = positionalSound([new InitialConsonantF()]);
const psG = positionalSound([
    new InitialConsonantG(),
    new FinalConsonantG(),
    new GerminatedConsonantG()
]);
const psH = positionalSound([new InitialConsonantH()]);
const psI = positionalSound([new VowelI()]);
const psJ = positionalSound([new InitialConsonantJ()]);
const psK = positionalSound([
    new InitialConsonantK(),
    new FinalConsonantK(),
    new GerminatedConsonantK()
]);
const psL = positionalSound([new InitialConsonantL()]);
const psM = positionalSound([new InitialConsonantM()]);
const psN = positionalSound([new InitialConsonantN(), new FinalConsonantN()]);
const psNg = positionalSound([new InitialConsonantNG()]);
const psO = positionalSound([new VowelO()]);
const psP = positionalSound([
    new InitialConsonantP(),
    new FinalConsonantP(),
    new GerminatedConsonantP()
]);
const psR = positionalSound([new InitialConsonantR()]);
const psS = positionalSound([
    new InitialConsonantS(),
    new FinalConsonantS(),
    new GerminatedConsonantS()
]);
const psT = positionalSound([
    new InitialConsonantT(),
    new FinalConsonantT(),
    new GerminatedConsonantT()
]);
const psU = positionalSound([new VowelU()]);
const psV = positionalSound([new InitialConsonantV()]);
const psW = positionalSound([new InitialConsonantW(), new SemivowelW()]);
const psY = positionalSound([new InitialConsonantY(), new SemivowelY()]);
const psZ = positionalSound([new InitialConsonantZ()]);
exports.kanaPositionalSound = new Map()
    .set(KanaLetterTags.a, psA)
    .set(KanaLetterTags.b, psB)
    .set(KanaLetterTags.c, psC)
    .set(KanaLetterTags.ch, psCh)
    .set(KanaLetterTags.d, psD)
    .set(KanaLetterTags.e, psE)
    .set(KanaLetterTags.f, psF)
    .set(KanaLetterTags.g, psG)
    .set(KanaLetterTags.h, psH)
    .set(KanaLetterTags.i, psI)
    .set(KanaLetterTags.j, psJ)
    .set(KanaLetterTags.k, psK)
    .set(KanaLetterTags.l, psL)
    .set(KanaLetterTags.m, psM)
    .set(KanaLetterTags.n, psN)
    .set(KanaLetterTags.ng, psNg)
    .set(KanaLetterTags.o, psO)
    .set(KanaLetterTags.p, psP)
    .set(KanaLetterTags.r, psR)
    .set(KanaLetterTags.s, psS)
    .set(KanaLetterTags.t, psT)
    .set(KanaLetterTags.u, psU)
    .set(KanaLetterTags.v, psV)
    .set(KanaLetterTags.w, psW)
    .set(KanaLetterTags.y, psY)
    .set(KanaLetterTags.z, psZ);
exports.kogakimoji = new Map().set(KanaLetterTags.ch + KanaLetterTags.u, ['っ', 'ッ']);
exports.hatsuon = new Map().set(KanaLetterTags.n, [
    'ん',
    'ン'
]);
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
    .set(KanaLetterTags.w + KanaLetterTags.a, ['ゎ', 'ヮ'])
    .set(KanaLetterTags.z + KanaLetterTags.u, ['づ', 'ヅ']);
exports.hiraganaKatakana = new Map()
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
    .set(KanaLetterTags.j + KanaLetterTags.y + KanaLetterTags.u, [
    'ぢ゙ゅ',
    'ヂュ'
])
    .set(KanaLetterTags.j + KanaLetterTags.y + KanaLetterTags.o, [
    'ぢ゙ょ',
    'ヂョ'
])
    .set(KanaLetterTags.b + KanaLetterTags.y + KanaLetterTags.a, ['びゃ', 'ビャ'])
    .set(KanaLetterTags.b + KanaLetterTags.y + KanaLetterTags.u, ['びゅ', 'ビュ'])
    .set(KanaLetterTags.b + KanaLetterTags.y + KanaLetterTags.o, ['びょ', 'ビョ'])
    .set(KanaLetterTags.p + KanaLetterTags.y + KanaLetterTags.a, ['ぴゃ', 'ピャ'])
    .set(KanaLetterTags.p + KanaLetterTags.y + KanaLetterTags.u, ['ぴゅ', 'ピュ'])
    .set(KanaLetterTags.p + KanaLetterTags.y + KanaLetterTags.o, [
    'ぴょ',
    'ピョ'
]);
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
exports.gailaigoY = new Map()
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
    .set(KanaLetterTags.d + KanaLetterTags.y + KanaLetterTags.e, [
    '',
    'デェ',
    'ディェ'
])
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
exports.gailaigoW = new Map()
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
exports.specialY = new Map()
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
exports.specialW = new Map()
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
exports.specialH = new Map()
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
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const kana_1 = __webpack_require__(/*! ./kana */ "./node_modules/taipa/lib/kana/kana.js");
const soundgen_1 = __webpack_require__(/*! ./soundgen */ "./node_modules/taipa/lib/kana/soundgen.js");
class KanaSyllable extends unit_1.Syllable {
}
exports.KanaSyllable = KanaSyllable;
/** A syllable. */
class KanaUncombiningMorpheme extends unit_1.Morpheme {
    constructor(syllable, sounds, kcm) {
        super();
        this.syllable = syllable;
        this.metaplasm = kcm;
        this.sounds = new Array();
        this.sounds = sounds;
    }
}
exports.KanaUncombiningMorpheme = KanaUncombiningMorpheme;
function syllabifyKana(letters, beginOfSyllable) {
    let literal = '';
    let matched = '';
    let lookahead = '';
    let ltrs = new Array();
    let matchedLtrs = new Array();
    const sov = new kana_1.VowelSet();
    for (let i = beginOfSyllable; i < letters.length; i++) {
        literal = literal + letters[i].literal;
        ltrs.push(letters[i].literal);
        if (kana_1.hiraganaKatakana.has(literal) || kana_1.gailaigo.has(literal)) {
            matched = literal;
            Object.assign(matchedLtrs, ltrs);
            if (i + 1 < letters.length)
                lookahead = letters[i + 1].literal; // look-ahead
        }
        else {
            if (literal.length == 3 &&
                literal[0] === literal[1] &&
                sov.includes(literal[2])) {
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
    let mp = new unit_1.MatchedPattern();
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
        if (letters.length - beginOfSyllable ==
            arraysOfLetters[longerEntry].length) {
            if (new kana_1.Hatsuon().includes(arraysOfLetters[longerEntry][arraysOfLetters[longerEntry].length - 1]
                .literal)) {
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
        if (letters.length - beginOfSyllable ==
            arraysOfLetters[longerEntry].length + 1) {
            if (new kana_1.InitialConsonantSet().includes(letters[beginOfSyllable + arraysOfLetters[longerEntry].length].literal) == true) {
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
        if (letters.length - beginOfSyllable >
            arraysOfLetters[longerEntry].length + 1) {
            if (new kana_1.VowelSet().includes(letters[beginOfSyllable + arraysOfLetters[longerEntry].length].literal) == true ||
                new kana_1.SemivowelSet().includes(letters[beginOfSyllable + arraysOfLetters[longerEntry].length].literal) == true) {
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
class KanaUncombiningMorphemeMaker extends unit_1.MorphemeMaker {
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
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const kana_1 = __webpack_require__(/*! ./kana */ "./node_modules/taipa/lib/kana/kana.js");
function initialConsonant(sg) {
    const sics = new kana_1.InitialConsonantSet();
    if (sics.includes(sg.letters[sg.sounds.length])) {
        const ps = kana_1.kanaPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(kana_1.KanaSoundTags.initialConsonant);
            if (s)
                sg.sounds.push(s);
        }
    }
    else
        sg.matching = false;
    return sg;
}
function semivowel(sg) {
    const ssvs = new kana_1.SemivowelSet();
    if (ssvs.includes(sg.letters[sg.sounds.length])) {
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
    const svs = new kana_1.VowelSet();
    if (svs.includes(sg.letters[sg.sounds.length])) {
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
    const sfcs = new kana_1.FinalConsonantSet();
    if (sfcs.includes(sg.letters[sg.sounds.length])) {
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
    const sgcs = new kana_1.GerminatedConsonantSet();
    if (sgcs.includes(sg.letters[sg.sounds.length])) {
        const ps = kana_1.kanaPositionalSound.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(kana_1.KanaSoundTags.germinatedConsonant);
            if (s)
                sg.sounds.push(s);
        }
    }
    return sg;
}
const scV = unit_1.sgPipe(vowel);
const scCV = unit_1.sgPipe(initialConsonant, vowel);
const scCVC = unit_1.sgPipe(initialConsonant, vowel, finalConsonant);
const scCSV = unit_1.sgPipe(initialConsonant, semivowel, vowel);
const scCCV = unit_1.sgPipe(germinatedConsonant, initialConsonant, vowel);
class KanaSoundGenerator {
    constructor() {
        this.sylCompositions = [scV, scCV, scCVC, scCSV, scCCV];
    }
    genSokuonAndGerminated(letters, lookahead) {
        let strs = new Array();
        strs.push(letters);
        // consonant germination
        if (new kana_1.GerminatedConsonantSet().includes(letters[0]) == true) {
            let syl = new Array();
            syl.push(letters[0].charAt(0));
            for (let e of letters) {
                syl.push(e);
            }
            strs.push(syl);
        }
        // sokuon
        let fcs = new kana_1.FinalConsonantSet();
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
                let sg = new unit_1.SoundGeneration();
                sg.letters = strs[i];
                //console.log(`j: ${j}`)
                sg = this.sylCompositions[j](sg);
                if (sg.letters.length == sg.sounds.length && sg.matching == true) {
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

/***/ "./node_modules/taipa/lib/metaplasm.js":
/*!*********************************************!*\
  !*** ./node_modules/taipa/lib/metaplasm.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = __webpack_require__(/*! ./interface */ "./node_modules/taipa/lib/interface.js");
class TonalCombiningMetaplasm extends interface_1.Metaplasm {
    apply(sounds, allomorph) {
        return [];
    }
}
exports.TonalCombiningMetaplasm = TonalCombiningMetaplasm;
class TonalZeroCombining extends TonalCombiningMetaplasm {
}
exports.TonalZeroCombining = TonalZeroCombining;
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
class KanaCombiningMetaplasm extends interface_1.Metaplasm {
}
exports.KanaCombiningMetaplasm = KanaCombiningMetaplasm;
class TonalInflectionMetaplasm extends interface_1.Metaplasm {
    apply(morphemes) {
        return [];
    }
}
exports.TonalInflectionMetaplasm = TonalInflectionMetaplasm;
class TonalZeroInflection extends TonalInflectionMetaplasm {
}
exports.TonalZeroInflection = TonalZeroInflection;
class TonalAssimilationMetaplasm extends interface_1.Metaplasm {
    apply(morphemes) {
        return [];
    }
}
exports.TonalAssimilationMetaplasm = TonalAssimilationMetaplasm;
class TonalZeroAssimilation extends TonalAssimilationMetaplasm {
}
exports.TonalZeroAssimilation = TonalZeroAssimilation;
class TonalLemmatizationMetaplasm extends interface_1.Metaplasm {
    apply(morphemes, inflectionalEnding) {
        return [];
    }
}
exports.TonalLemmatizationMetaplasm = TonalLemmatizationMetaplasm;
class TonalPhrasalInflectionMetaplasm extends interface_1.Metaplasm {
    apply(lexemeOne, lexemeTwo) {
        return [];
    }
    applyVpp(lexemeOne, lexemeTwo, lexemeThree) {
        return [];
    }
}
exports.TonalPhrasalInflectionMetaplasm = TonalPhrasalInflectionMetaplasm;
class TonalPhrasalZeroInflection extends TonalPhrasalInflectionMetaplasm {
}
exports.TonalPhrasalZeroInflection = TonalPhrasalZeroInflection;
class TonalPhrasalAssimilationMetaplasm extends interface_1.Metaplasm {
    apply(lexemeOne, lexemeTwo) {
        return [];
    }
}
exports.TonalPhrasalAssimilationMetaplasm = TonalPhrasalAssimilationMetaplasm;
//# sourceMappingURL=metaplasm.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/token.js":
/*!*****************************************!*\
  !*** ./node_modules/taipa/lib/token.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const symbols_1 = __webpack_require__(/*! ./dparser/symbols */ "./node_modules/taipa/lib/dparser/symbols.js");
const rules_1 = __webpack_require__(/*! ./dparser/rules */ "./node_modules/taipa/lib/dparser/rules.js");
const unit_1 = __webpack_require__(/*! ./unit */ "./node_modules/taipa/lib/unit.js");
const lemmatizer_1 = __webpack_require__(/*! ./tonal/lemmatizer */ "./node_modules/taipa/lib/tonal/lemmatizer.js");
class Token {
    /**
     * Constructor of Token.
     * @param text The text of the token
     */
    constructor(text) {
        this.text = text;
        /** The simple part-of-speech tag. */
        this.pos = '';
        /** The detailed part-of-speech tag. */
        this.tag = '';
        /** The base form of the word. */
        this.lemma = '';
        /** Syntactic dependnecy */
        this.dep = '';
        /** The head of this token */
        this.head = undefined;
    }
}
exports.Token = Token;
class TokenAnalysis {
    constructor() {
        /** Analyzed token. */
        this.word = new unit_1.Word();
        /** Base forms of the word. */
        this.lemmas = new Array();
        /** Inflectional suffix. */
        this.inflectionalEnding = '';
        /** Sound sequences. */
        this.soundSequences = new Array();
        /** Syllabic block or syllabogram sequences. */
        this.blockSequences = [];
        /** Uncombining form sequences. */
        this.uncombiningSequences = new Array(); // uncombining form sequences
    }
}
exports.TokenAnalysis = TokenAnalysis;
class TokenLemmaLookup {
    constructor() {
        this.getTonalLemmas = (doc) => {
            // const lmtzr = new TonalLemmatizer();
            const sophv = new rules_1.PhrasalVerbs();
            let j = 0;
            let k = 0;
            let len = 0;
            for (let i = 0; i < doc.tokens.length; i++) {
                if (len == i) {
                    // loop over the doc.speeches sequence
                    if (j < doc.phrases.length) {
                        len += doc.phrases[j].elements.length;
                        if (j + 1 < doc.phrases.length)
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
                if (doc.tokens[i].tag === symbols_1.Tagset.psub ||
                    doc.tokens[i].tag === symbols_1.Tagset.aux) {
                    doc.tokens[i].lemma = doc.tokens[i].text;
                    continue;
                }
                if (doc.tokens[i].tag === symbols_1.Tagset.vb && i + 1 < doc.tokens.length) {
                    if (i + 2 < doc.tokens.length && doc.tokens[i + 2].tag === symbols_1.Tagset.ppv) {
                        // phrasal verbs of length 3
                        const base = sophv.match([
                            doc.tokens[i].text,
                            doc.tokens[i + 1].text,
                            doc.tokens[i + 2].text
                        ]);
                        if (base != '') {
                            const lemmas = base.split(' ');
                            doc.tokens[i].lemma = lemmas[0];
                            doc.tokens[i + 1].lemma = lemmas[1];
                            doc.tokens[i + 2].lemma = lemmas[2];
                            i++;
                        }
                        continue;
                    }
                    else if (doc.tokens[i + 1].tag === symbols_1.Tagset.ppv ||
                        doc.tokens[i + 1].tag === symbols_1.Tagset.appr) {
                        // phrasal verbs of length 2
                        const base = sophv.match([
                            doc.tokens[i].text,
                            doc.tokens[i + 1].text
                        ]);
                        if (base != '') {
                            const lemmas = base.split(' ');
                            doc.tokens[i].lemma = lemmas[0];
                            doc.tokens[i + 1].lemma = lemmas[1];
                            i++;
                        }
                        continue;
                    }
                }
                if (doc.tokens[i].tag === symbols_1.Tagset.vb) {
                    if (i + 1 < doc.tokens.length &&
                        doc.tokens[i + 1].tag === symbols_1.Tagset.psub) {
                        doc.tokens[i].lemma = doc.tokens[i].text; // copy the base form
                        continue;
                    }
                }
                if (doc.phrases[j] && k + 1 == doc.phrases[j].elements.length) {
                    // at the end of a speech
                    // need to further check if the speech is a noun chunk or verb phrase
                    doc.tokens[i].lemma = doc.tokens[i].text; // copy the base form
                    continue;
                }
                let lemmas = [];
                lemmas = lemmatizer_1.lemmatize(doc.tokens[i].text).getLemmas();
                if (lemmas.length > 0)
                    doc.tokens[i].lemma = lemmas[0].literal;
            }
            return doc;
        };
    }
}
exports.TokenLemmaLookup = TokenLemmaLookup;
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
const lexeme_1 = __webpack_require__(/*! ./lexeme */ "./node_modules/taipa/lib/tonal/lexeme.js");
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
/**
 * Analyzes a string into graphemes. Graphemic analysis.
 * @param str A string
 */
function graphAnalyzeTonal(str) {
    const gm = new unit_1.GraphemeMaker(version2_1.lowerLettersTonal);
    return gm.makeGraphemes(str);
}
exports.graphAnalyzeTonal = graphAnalyzeTonal;
/** Analyzes a string into morphemes or lexeme. */
exports.tonalLemmatizationAnalyzer = {
    /**
     * Analyzes a string or graphemes into morphemes. Morphological analysis.
     * @param x A string or graphemes
     */
    morphAnalyze(x) {
        let gs = [];
        if (typeof x == 'object') {
            gs = x;
        }
        else if (typeof x == 'string') {
            gs = graphAnalyzeTonal(x);
        }
        const mm = new morpheme_1.TonalUncombiningMorphemeMaker();
        return mm.makeMorphemes(gs);
    },
    /**
     * Analyzes a string or morphemes into a lexeme. Lexical analysis.
     * @param x A string or uncombining morphemes
     */
    lexAnalyze(x) {
        let ms = [];
        if (typeof x == 'object') {
            ms = x;
        }
        else if (typeof x == 'string') {
            ms = this.morphAnalyze(x);
        }
        const lm = new lexeme_1.TonalLemmatizationLexemeMaker();
        return lm.makeLexemes(ms);
    }
};
//# sourceMappingURL=analyzer.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/collections.js":
/*!*****************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/collections.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
// m, n, ng
exports.nasalInitialSounds = [
    version2_1.TonalLetterTags.m.toString(),
    version2_1.TonalLetterTags.n.toString(),
    version2_1.TonalLetterTags.ng.toString()
];
exports.combiningRules = new Map()
    .set(version2_1.TonalLetterTags.zero, [version2_1.TonalLetterTags.z])
    .set(version2_1.TonalLetterTags.y, [version2_1.TonalLetterTags.zero, version2_1.TonalLetterTags.f])
    .set(version2_1.TonalLetterTags.w, [version2_1.TonalLetterTags.y])
    .set(version2_1.TonalLetterTags.x, [version2_1.TonalLetterTags.z, version2_1.TonalLetterTags.w])
    .set(version2_1.TonalLetterTags.z, [version2_1.TonalLetterTags.w])
    .set(version2_1.TonalLetterTags.p, [version2_1.TonalLetterTags.f])
    .set(version2_1.TonalLetterTags.t, [version2_1.TonalLetterTags.f])
    .set(version2_1.TonalLetterTags.k, [version2_1.TonalLetterTags.f])
    .set(version2_1.TonalLetterTags.h, [version2_1.TonalLetterTags.y, version2_1.TonalLetterTags.f])
    .set(version2_1.TonalLetterTags.pp, [version2_1.TonalLetterTags.w, version2_1.TonalLetterTags.x])
    .set(version2_1.TonalLetterTags.tt, [version2_1.TonalLetterTags.w, version2_1.TonalLetterTags.x])
    .set(version2_1.TonalLetterTags.kk, [version2_1.TonalLetterTags.w, version2_1.TonalLetterTags.x])
    .set(version2_1.TonalLetterTags.hh, [version2_1.TonalLetterTags.w, version2_1.TonalLetterTags.x]);
// w, x
exports.tonalsWx = [
    version2_1.TonalLetterTags.w.toString(),
    version2_1.TonalLetterTags.x.toString()
];
// b, l, g, m, n
exports.epentheticSounds = [
    version2_1.TonalLetterTags.b.toString(),
    version2_1.TonalLetterTags.l.toString(),
    version2_1.TonalLetterTags.g.toString(),
    version2_1.TonalLetterTags.m.toString(),
    version2_1.TonalLetterTags.n.toString()
];
// j, l, s
exports.euphonicFinalsJls = [
    version2_1.TonalLetterTags.j.toString(),
    version2_1.TonalLetterTags.l.toString(),
    version2_1.TonalLetterTags.s.toString()
];
// b, g, k, p
exports.euphonicFinalsBgkp = [
    version2_1.TonalLetterTags.b.toString(),
    version2_1.TonalLetterTags.g.toString(),
    version2_1.TonalLetterTags.k.toString(),
    version2_1.TonalLetterTags.p.toString()
];
// jj, ll, ss
exports.euphonicFinalsJjllss = [
    version2_1.TonalLetterTags.jj.toString(),
    version2_1.TonalLetterTags.ll.toString(),
    version2_1.TonalLetterTags.ss.toString()
];
// bb, gg, kk, pp
exports.euphonicFinalsBbggkkpp = [
    version2_1.TonalLetterTags.bb.toString(),
    version2_1.TonalLetterTags.gg.toString(),
    version2_1.TonalLetterTags.kk.toString(),
    version2_1.TonalLetterTags.pp.toString()
];
// t
exports.initialsForEuphonicT = [
    version2_1.TonalLetterTags.p.toString(),
    version2_1.TonalLetterTags.k.toString(),
    version2_1.TonalLetterTags.b.toString(),
    version2_1.TonalLetterTags.g.toString(),
    version2_1.TonalLetterTags.j.toString(),
    version2_1.TonalLetterTags.q.toString(),
    version2_1.TonalLetterTags.s.toString(),
    version2_1.TonalLetterTags.v.toString(),
    version2_1.TonalLetterTags.m.toString(),
    version2_1.TonalLetterTags.n.toString(),
    version2_1.TonalLetterTags.ng.toString()
];
// tt
exports.initialsForEuphonicTt = [
    version2_1.TonalLetterTags.p.toString(),
    version2_1.TonalLetterTags.k.toString(),
    version2_1.TonalLetterTags.g.toString(),
    version2_1.TonalLetterTags.q.toString(),
    version2_1.TonalLetterTags.s.toString(),
    version2_1.TonalLetterTags.v.toString(),
    version2_1.TonalLetterTags.m.toString(),
    version2_1.TonalLetterTags.n.toString(),
    version2_1.TonalLetterTags.ng.toString()
];
exports.voicelessVoicedFinals = new Map()
    .set(version2_1.TonalLetterTags.k, version2_1.TonalLetterTags.g)
    .set(version2_1.TonalLetterTags.p, version2_1.TonalLetterTags.b)
    .set(version2_1.TonalLetterTags.t, version2_1.TonalLetterTags.l)
    .set(version2_1.TonalLetterTags.kk, version2_1.TonalLetterTags.gg)
    .set(version2_1.TonalLetterTags.pp, version2_1.TonalLetterTags.bb)
    .set(version2_1.TonalLetterTags.tt, version2_1.TonalLetterTags.ll);
// .set(TonalLetterTags.g, TonalLetterTags.k)
// .set(TonalLetterTags.b, TonalLetterTags.p)
// .set(TonalLetterTags.l, TonalLetterTags.t)
// .set(TonalLetterTags.gg, TonalLetterTags.kk)
// .set(TonalLetterTags.bb, TonalLetterTags.pp)
// .set(TonalLetterTags.ll, TonalLetterTags.tt);
// tt, t
exports.ttInitialTInitialPairs = new Map()
    .set(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.p, version2_1.TonalLetterTags.p)
    .set(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.v, version2_1.TonalLetterTags.p)
    .set(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.k, version2_1.TonalLetterTags.k)
    .set(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.q, version2_1.TonalLetterTags.k)
    .set(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.m, version2_1.TonalLetterTags.h)
    .set(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.n, version2_1.TonalLetterTags.h)
    .set(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.ng, version2_1.TonalLetterTags.h)
    .set(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.p, version2_1.TonalLetterTags.pp)
    .set(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.v, version2_1.TonalLetterTags.pp)
    .set(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.k, version2_1.TonalLetterTags.kk)
    .set(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.q, version2_1.TonalLetterTags.kk)
    .set(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.m, version2_1.TonalLetterTags.hh)
    .set(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.n, version2_1.TonalLetterTags.hh)
    .set(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.ng, version2_1.TonalLetterTags.hh);
// b, g, h, l
exports.initialBghl = [
    // turn preceding finals to voiced ones
    version2_1.TonalLetterTags.b.toString(),
    version2_1.TonalLetterTags.g.toString(),
    version2_1.TonalLetterTags.h.toString(),
    version2_1.TonalLetterTags.l.toString()
];
// 8 to 1
exports.eighthToFirst = new Map()
    .set(version2_1.TonalLetterTags.pp, version2_1.TonalLetterTags.p)
    .set(version2_1.TonalLetterTags.tt, version2_1.TonalLetterTags.t)
    .set(version2_1.TonalLetterTags.kk, version2_1.TonalLetterTags.k)
    .set(version2_1.TonalLetterTags.hh, version2_1.TonalLetterTags.h);
exports.finalOfPhrasalVerbParticle = new Map()
    .set(version2_1.TonalLetterTags.h, version2_1.TonalLetterTags.hh)
    .set(version2_1.TonalLetterTags.p, version2_1.TonalLetterTags.pp);
//# sourceMappingURL=collections.js.map

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
function checkNumberOfLetterTonal() {
    if (version2_1.tonalPositionalSounds.size !== version2_1.lowerLettersTonal.size) {
        console.log('sizes unmatched');
    }
}
exports.checkNumberOfLetterTonal = checkNumberOfLetterTonal;
//# sourceMappingURL=init.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/lemmatizer.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/lemmatizer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const analyzer_1 = __webpack_require__(/*! ./analyzer */ "./node_modules/taipa/lib/tonal/analyzer.js");
/**
 * Lemmatizes a word.
 * @param word A word to be lemmatized.
 */
function lemmatize(word) {
    const mrphs = analyzer_1.tonalLemmatizationAnalyzer.morphAnalyze(word);
    const lx = analyzer_1.tonalLemmatizationAnalyzer.lexAnalyze(mrphs);
    return lx;
}
exports.lemmatize = lemmatize;
//# sourceMappingURL=lemmatizer.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/lexeme.js":
/*!************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/lexeme.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const version2_2 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/tonal/metaplasm.js");
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
class AllomorphicEnding extends Ending {
    constructor() {
        super(...arguments);
        this.allomorph = new version2_1.Allomorph();
    }
    toString() {
        return this.allomorph.toString();
    }
}
exports.AllomorphicEnding = AllomorphicEnding;
class FreeAllomorphicEnding extends AllomorphicEnding {
}
exports.FreeAllomorphicEnding = FreeAllomorphicEnding;
class CheckedAllomorphicEnding extends AllomorphicEnding {
}
exports.CheckedAllomorphicEnding = CheckedAllomorphicEnding;
/** A word made of syllables. */
class TonalWord extends unit_1.Word {
    constructor(syllables) {
        super();
        this.syllables = new Array();
        if (syllables != undefined) {
            this.syllables = syllables;
            this.concat();
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
exports.TonalWord = TonalWord;
/** A word and its lemmas/base forms. */
class TonalLemmatizationLexeme extends unit_1.Lexeme {
    constructor(morphemes, metaplasm) {
        super();
        this.lemmata = new Array(); // lexical forms. underlying forms
        if (morphemes.length == 0)
            this.word = new TonalWord([]);
        else
            this.word = new TonalWord(morphemes.map(x => x.syllable));
        if (morphemes.length > 0) {
            if (morphemes[morphemes.length - 1].allomorph) {
                this.inflectionalEnding = this.assignInflectionalEnding(morphemes[morphemes.length - 1].allomorph);
            }
            else {
                this.inflectionalEnding = new InflectionalEnding();
            }
        }
        else {
            this.inflectionalEnding = new InflectionalEnding();
        }
        if (morphemes.length > 0)
            this.lemmata = metaplasm.apply(morphemes, this.inflectionalEnding);
    }
    getLemmas() {
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
class TonalLemmatizationLexemeMaker extends unit_1.LexemeMaker {
    constructor() {
        super();
    }
    makeLexemes(morphemes) {
        return this.make(morphemes);
    }
    make(morphemes) {
        let isInflStemWithX = false; // inflectional stem with x in the middle
        return new TonalLemmatizationLexeme(morphemes, new metaplasm_1.TonalLemmatization());
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
function isInLexcialRoots(strToFind) {
    if (exports.lexicalRoots.includes(strToFind))
        return true;
    if (extraLexicalRoots.includes(strToFind))
        return true;
    return false;
}
exports.isInLexcialRoots = isInLexcialRoots;
// prettier-ignore
const toBeVerified = [
    'cett', 'choa',
    'dom',
    'hioh', 'hoang',
    'jex', 'jek', 'jeng', 'jih', 'jirnx', 'jirtt',
    'len', 'lirey',
    'mah',
    'na',
    'oehh',
    'qanh', 'qih', 'qoaiz', 'qngh',
    'simh',
    'toehh', 'tom', 'tomz',
    'virt',
];
// prettier-ignore
const extraLexicalRoots = [
    'aih',
    'coaih',
    'dngh',
    'gehh', 'gih', 'giuh', 'gimw',
    'homz',
    'jip',
    'kiaih', 'kuih',
    'laih', 'langh', 'lip', 'lih', 'lit', 'loaih', 'loaiz', 'loeh', 'loeih', 'lurih',
    'mnghh',
    'n',
    'oh', 'op',
    'sangh', 'sennh', 'sienh', 'sinnh',
];
// prettier-ignore
const addonLexicalRoots = [
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
exports.lexicalRoots = [
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
    'voehh', 'vuh', 'vui', 'vuix', 'vuiz', 'vun', 'vuny', 'vunw', 'vunx',
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
const collections_1 = __webpack_require__(/*! ./collections */ "./node_modules/taipa/lib/tonal/collections.js");
// mhf, nhf, nghf
exports.regexMnngHF = /(m|ng?)hf/g;
// mhf, nhf, nghf
exports.smMnngHF = function (nasalFinal, neutralFinalH, firstTonalF) {
    const snfs = new version2_1.NasalFinalSounds();
    if (snfs.includes(nasalFinal) && version2_1.TonalLetterTags.h === neutralFinalH && version2_1.TonalLetterTags.f === firstTonalF)
        return true;
    return false;
};
// mhhw, mhhx, nhhw, nhhx, nghhw, nghhx
exports.regexMnngHhWX = /(m|ng?)hh(w|x)/g;
// mhhw
exports.smMHhW = function (nasalFinal, neutralFinalHH, thirdTonalW) {
    if (nasalFinal === version2_1.TonalLetterTags.m && neutralFinalHH === version2_1.TonalLetterTags.hh && thirdTonalW === version2_1.TonalLetterTags.w)
        return true;
    return false;
};
// mhhw, mhhx, nhhw, nhhx, nghhw, nghhx
exports.smMnngHhWx = function (nasalFinal, neutralFinalHH, tonalWX) {
    const snfs = new version2_1.NasalFinalSounds();
    if (snfs.includes(nasalFinal) && version2_1.TonalLetterTags.hh === neutralFinalHH && collections_1.tonalsWx.includes(tonalWX))
        return true;
    return false;
};
// jf, lf, sf
exports.regexJlsF = /(j|l|s)f/g;
// jf, lf, sf
exports.smJlsF = function (euphonicFinalJLS, firstTonalF) {
    if (collections_1.euphonicFinalsJls.includes(euphonicFinalJLS) && version2_1.TonalLetterTags.f === firstTonalF)
        return true;
    return false;
};
// bf, gf, kf, pf
exports.smBgkpF = function (euphonicFinalBGJKLPS, firstTonalF) {
    if (collections_1.euphonicFinalsBgkp.includes(euphonicFinalBGJKLPS) && version2_1.TonalLetterTags.f === firstTonalF)
        return true;
    return false;
};
// jjw, jjx, llw, llx, ssw, ssx
exports.regexJjllssWx = /(jj|ll|ss)(w|x)/g;
// jjw, jjx, llw, llx, ssw, ssx
exports.smJjllssWx = function (euphonicFinalJJLLSS, tonalWX) {
    if (collections_1.euphonicFinalsJjllss.includes(euphonicFinalJJLLSS) && collections_1.tonalsWx.includes(tonalWX))
        return true;
    return false;
};
// bbw, bbx, ggw, ggx, kkw, kkx, ppw, ppx
exports.smBbggkkppWx = function (euphonicFinalBBGGJJKKLLPPSS, tonalWX) {
    if (collections_1.euphonicFinalsBbggkkpp.includes(euphonicFinalBBGGJJKKLLPPSS) && collections_1.tonalsWx.includes(tonalWX))
        return true;
    return false;
};
// bf, gf, jf, kf, lf, pf, sf
exports.smBgjklpsF = function (euphonicFinalBGJKLPS, firstTonalF) {
    const efs = new version2_1.EuphonicFinalsBGJKLPS();
    if (efs.includes(euphonicFinalBGJKLPS) && version2_1.TonalLetterTags.f === firstTonalF)
        return true;
    return false;
};
// bbw, bbx, ggw, ggx, jjw, jjx, kkw, kkx, llw, llx, ppw, ppx, ssw, ssx
exports.smBbggjjkkllppssWx = function (euphonicFinalBBGGJJKKLLPPSS, tonalWX) {
    const efs = new version2_1.EuphonicFinalsBBGGJJKKLLPPSS();
    if (efs.includes(euphonicFinalBBGGJJKKLLPPSS) && collections_1.tonalsWx.includes(tonalWX))
        return true;
    return false;
};
//# sourceMappingURL=matcher.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/metaplasm.js":
/*!***************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/metaplasm.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const metaplasm_1 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
const lexeme_1 = __webpack_require__(/*! ./lexeme */ "./node_modules/taipa/lib/tonal/lexeme.js");
const morpheme_1 = __webpack_require__(/*! ./morpheme */ "./node_modules/taipa/lib/tonal/morpheme.js");
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const metaplasm_2 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
/** Returns the uncombining forms of a syllable. */
class TonalUncombiningForms extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph) {
            if (allomorph instanceof version2_1.FreeAllomorph) {
                if (allomorph instanceof version2_1.ZeroAllomorph) {
                    // push y to make tone 2
                    // 1 to 2
                    const s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
                    const tnls = version2_1.freeAllomorphUncombiningRules.get('zero');
                    if (tnls)
                        s.pushLetter(new unit_1.AlphabeticLetter(tnls[0].characters));
                    return [s];
                }
                else {
                    // the 7th tone has two baseforms
                    const ret = [];
                    const rules = version2_1.freeAllomorphUncombiningRules.get(allomorph.toString());
                    const tnls = !rules ? [] : rules;
                    for (let i in tnls) {
                        let s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
                        if (!(tnls[i] instanceof version2_1.ZeroAllomorph)) {
                            // 2 to 3. 3 to 7. 7 to 5. 3 to 5.
                            // replace z with f or x
                            s.popLetter();
                            s.pushLetter(new unit_1.AlphabeticLetter(tnls[i].characters));
                            ret.push(s);
                        }
                        else {
                            // 7 to 1
                            // pop z
                            s.popLetter();
                            ret.push(s);
                        }
                    }
                    return ret;
                }
            }
            else if (allomorph instanceof version2_1.CheckedAllomorph) {
                // pop the tone letter
                // 1 to 4. 3 to 8. 2 to 4. 5 to 8.
                if (allomorph.tonal.toString() === '')
                    return [];
                const s = new morpheme_1.TonalSyllable(sounds.map(x => new unit_1.AlphabeticLetter(x.characters)));
                s.popLetter();
                return [s];
            }
        }
        return [];
    }
}
exports.TonalUncombiningForms = TonalUncombiningForms;
/** Returns the uncombining forms of the syllable preceding ay */
class UncombiningAy extends metaplasm_1.TonalCombiningMetaplasm {
    apply(sounds, allomorph) {
        if (allomorph) {
            if (allomorph.tonal.toString() === version2_1.TonalLetterTags.f) {
                if (allomorph instanceof version2_1.FreeAllomorph) {
                    const ret = [];
                    const rls = version2_1.uncombiningRulesAy.get(allomorph.toString());
                    const tnls = !rls ? [] : rls;
                    for (let i in tnls) {
                        let s = new morpheme_1.TonalSyllable(sounds.map(it => new unit_1.AlphabeticLetter(it.characters)));
                        // 1 to 2. 1 to 3
                        // replace f with y or w
                        s.popLetter();
                        s.pushLetter(new unit_1.AlphabeticLetter(tnls[i].characters));
                        ret.push(s);
                    }
                    return ret;
                }
                else if (allomorph instanceof version2_1.CheckedAllomorph) {
                    const s = new morpheme_1.TonalSyllable(sounds.map(it => new unit_1.AlphabeticLetter(it.characters)));
                    // pop f
                    s.popLetter();
                    return [s];
                }
            }
            else if (allomorph.tonal.toString() === version2_1.TonalLetterTags.x) {
                // 5 to 1. 5 to 7. 5 to 5.
                if (allomorph instanceof version2_1.FreeAllomorph) {
                    const ret = [];
                    const rls = version2_1.uncombiningRulesAy.get(allomorph.toString());
                    const tnls = !rls ? [] : rls;
                    for (let i in tnls) {
                        let s = new morpheme_1.TonalSyllable(sounds.map(it => new unit_1.AlphabeticLetter(it.characters)));
                        if (!(tnls[i] instanceof version2_1.ZeroTonal)) {
                            if (tnls[i] instanceof version2_1.FreeTonalZ) {
                                // 5 to 7
                                // replace x with z
                                s.popLetter();
                                s.pushLetter(new unit_1.AlphabeticLetter(tnls[i].characters));
                                ret.push(s);
                            }
                            else if (tnls[i] instanceof version2_1.FreeTonalX) {
                                // 5 to 5
                                ret.push(s);
                            }
                        }
                        else {
                            // 5 to 1
                            // pop x
                            s.popLetter();
                            ret.push(s);
                        }
                    }
                    return ret;
                }
                else if (allomorph instanceof version2_1.CheckedAllomorph) {
                    // 5 to 8.
                    const s = new morpheme_1.TonalSyllable(sounds.map(it => new unit_1.AlphabeticLetter(it.characters)));
                    // pop x
                    s.popLetter();
                    return [s];
                }
            }
            else if (allomorph.tonal.toString() === version2_1.TonalLetterTags.y) {
                return [];
            }
        }
        return [];
    }
}
exports.UncombiningAy = UncombiningAy;
/** Returns the last syllable of a double or triple construction as an uncombining form. */
class TonalReduplication extends metaplasm_1.TonalCombiningMetaplasm {
    constructor(sounds) {
        super();
        this.sounds = sounds;
    }
    apply(sounds, allomorph) {
        if (allomorph) {
            // skip the last syllable. it is the base form of the preceding 2 syllables.
            if (this.sounds[this.sounds.length - 1].toString() ===
                sounds[sounds.length - 1].toString())
                return [];
            const s = new morpheme_1.TonalSyllable(this.sounds.map(it => new unit_1.AlphabeticLetter(it.characters)));
            return [s];
        }
        return [];
    }
}
exports.TonalReduplication = TonalReduplication;
/** Lemmatizes a word and returns its base forms. */
class TonalLemmatization extends metaplasm_2.TonalLemmatizationMetaplasm {
    apply(morphemes, inflectionalEnding) {
        return this.populateLemmata(morphemes, inflectionalEnding);
    }
    getLemmas(morphemes, inflectionalEnding) {
        if (inflectionalEnding) {
            if (inflectionalEnding instanceof lexeme_1.FreeInflectionalEnding) {
                const ret = [];
                const arr = morphemes[morphemes.length - 1].getForms();
                for (let key in arr) {
                    const wrd = new lexeme_1.TonalWord(morphemes.map(x => x.syllable));
                    wrd.popSyllable();
                    wrd.pushSyllable(arr[key]);
                    ret.push(wrd);
                }
                return ret;
            }
            else if (inflectionalEnding instanceof lexeme_1.CheckedInflectionalEnding) {
                if (morphemes[morphemes.length - 1].getForms().length == 0)
                    return [];
                const wrd = new lexeme_1.TonalWord(morphemes.map(x => x.syllable));
                wrd.popSyllable();
                wrd.pushSyllable(morphemes[morphemes.length - 1].getForms()[0]);
                return [wrd];
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
//# sourceMappingURL=metaplasm.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/morpheme.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/morpheme.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const unit_2 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const soundgen_1 = __webpack_require__(/*! ./soundgen */ "./node_modules/taipa/lib/tonal/soundgen.js");
const lexicalroots2_1 = __webpack_require__(/*! ./lexicalroots2 */ "./node_modules/taipa/lib/tonal/lexicalroots2.js");
const matcher_1 = __webpack_require__(/*! ./matcher */ "./node_modules/taipa/lib/tonal/matcher.js");
const collections_1 = __webpack_require__(/*! ./collections */ "./node_modules/taipa/lib/tonal/collections.js");
const metaplasm_1 = __webpack_require__(/*! ./metaplasm */ "./node_modules/taipa/lib/tonal/metaplasm.js");
const metaplasm_2 = __webpack_require__(/*! ../metaplasm */ "./node_modules/taipa/lib/metaplasm.js");
function syllabifyTonal(letters, beginOfSyllable) {
    // get the longest matched syllable pattern
    let literal = '';
    let matched = '';
    let begin = 0;
    let ltrs = new Array();
    let matchedLtrs = new Array();
    const sft = new version2_1.FreeTonalSounds();
    const ssf = new version2_1.StopFinalSounds();
    const faurs = version2_1.freeAllomorphUncombiningRules;
    const ursa = version2_1.uncombiningRulesAy;
    for (let i = beginOfSyllable; i < letters.length; i++) {
        literal = literal + letters[i].literal;
        ltrs.push(letters[i].literal);
        //console.log(`begining of the loop: ${literal}. ${ltrs}`)
        if (lexicalroots2_1.isInLexcialRoots(literal) && sft.includes(letters[i].literal)) {
            //console.log(`i: ${i}, literal: ${literal}, tone: ${letters[i].literal}, letters[i+1]: ${letters[i + 1].literal}`)
            if (begin === beginOfSyllable) {
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
            }
            break;
        }
        else if (lexicalroots2_1.isInLexcialRoots(literal) && ssf.includes(letters[i].literal)) {
            //console.log(`i: ${i}, literal: ${literal}, stopFinal: ${letters[i].literal}`)
            //console.log(`begin: ${begin}, beginOfSyllable: ${beginOfSyllable}`)
            if (begin === beginOfSyllable) {
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
            }
            break;
        }
        else if (sft.includes(letters[i].literal)) {
            // check tonals is the subset of free tonals
            // console.log('i: %d', i)
            // console.log(`i: ${i}, literal: ${literal}, letters[i].literal, ${letters[i].literal}`)
            // when there are tonals
            if (literal.length > 1 &&
                letters[i] &&
                letters[i - 1] &&
                (matcher_1.smBgkpF(letters[i - 1].literal, letters[i].literal) ||
                    matcher_1.smBbggkkppWx(letters[i - 1].literal, letters[i].literal))) {
                // this combining form is not present in the pool.
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
                break;
            }
            else if (literal.length > 2 &&
                letters[i] &&
                letters[i - 1] &&
                letters[i - 2] &&
                matcher_1.smMHhW(letters[i - 2].literal, letters[i - 1].literal, letters[i].literal)) {
                // for lexical roots end with ~mhhw.
                matched = literal;
                Object.assign(matchedLtrs, ltrs);
                break;
            }
            // tone sandhi of free allomorph
            const rulesFa = faurs.get(letters[i].literal);
            const tnlsFa = !rulesFa ? [] : rulesFa.map(x => x.toString());
            // tone sandhi of ay
            const rulesAy = ursa.get(letters[i].literal);
            const tnlsAy = !rulesAy ? [] : rulesAy.map(x => x.toString());
            // merge the above twoo arrays
            const tnls = tnlsFa.concat(tnlsAy.filter(item => tnlsFa.indexOf(item) < 0));
            //console.log(ts)
            if (tnls.length > 0) {
                for (let t of tnls) {
                    //console.log(lit + t.toString())
                    if (lexicalroots2_1.isInLexcialRoots(letters
                        .slice(beginOfSyllable, i)
                        .map(x => x.literal)
                        .join('') + t)) {
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
        else if (lexicalroots2_1.isInLexcialRoots(literal)) {
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
            else if (!sft.includes(letters[i].literal)) {
                // free first tone without a free tonal
                const rules = faurs.get(version2_1.TonalLetterTags.zero);
                const tnls = !rules ? [] : rules;
                for (let t of tnls) {
                    // append second tonal letter
                    // check the uncombining forms
                    if (lexicalroots2_1.isInLexcialRoots(literal + t.toString())) {
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
            const rea = new metaplasm_2.RemovingEpenthesisOfAy();
            const done = rea.applyToString(literal);
            //console.log(done.toString())
            if (collections_1.epentheticSounds.includes(ltrs[0]) && lexicalroots2_1.isInLexcialRoots(done)) {
                list = tsg.generate(ltrs);
            }
        }
    }
    //console.log(list)
    let matchedLen = 0;
    let mp = new unit_1.MatchedPattern();
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
class TonalSyllable extends unit_1.Syllable {
    popLetter() {
        this.letters = this.letters.slice(0, this.letters.length - 1);
        this.concat();
    }
    get lastLetter() {
        if (this.letters.length >= 1)
            return this.letters[this.letters.length - 1];
        return new unit_2.AlphabeticLetter([]);
    }
    get lastSecondLetter() {
        if (this.letters.length >= 2)
            return this.letters[this.letters.length - 2];
        return new unit_2.AlphabeticLetter([]);
    }
}
exports.TonalSyllable = TonalSyllable;
/** A syllable and its uncombining forms. */
class TonalUncombiningMorpheme extends unit_1.Morpheme {
    constructor(syllable, sounds, metaplasm) {
        super();
        this.syllable = syllable;
        this.metaplasm = metaplasm;
        // assign allomorph for each syllable
        this.allomorph = this.assignAllomorph(this.syllable);
        this.sounds = sounds;
        this.forms = this.metaplasm.apply(this.sounds, this.allomorph);
    }
    getForms() {
        return this.forms;
    }
    assignAllomorph(syllable) {
        let allomorph = new version2_1.ZeroAllomorph();
        // assign the matched allomorph for this syllable
        let aoas = []; // array of allomorphs
        let keys = Array.from(version2_1.checkedAllomorphs.keys());
        for (let k = 0; k < keys.length; k++) {
            let am = version2_1.checkedAllomorphs.get(keys[k]);
            if (am && am instanceof version2_1.CheckedAllomorph) {
                if (am.tonal) {
                    if (am.tonal.toString() === syllable.lastLetter.literal &&
                        am.final.toString() === syllable.lastSecondLetter.literal) {
                        aoas.push(am);
                        break;
                    }
                    else {
                        if (am.final.toString() === syllable.lastLetter.literal) {
                            aoas.push(am);
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
            const am = version2_1.freeAllomorphs.get(syllable.lastLetter.literal);
            if (am)
                aoas.push(am);
            else
                aoas.push(new version2_1.Allomorph());
        }
        if (aoas.length == 0) {
            // tone 1 has no allomorph
            allomorph = new version2_1.ZeroAllomorph();
        }
        else if (aoas.length == 1) {
            // are there multiple allomorphs? there should be only one.
            for (let i = 0; i < aoas.length; i++) {
                if (aoas[i].tonal.toString() === new version2_1.AllomorphX().tonal.toString()) {
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
class TonalUncombiningMorphemeMaker extends unit_1.MorphemeMaker {
    constructor() {
        super();
        this.euphonicFinals = new Array();
        this.euphonicFinalTonals = new Array();
    }
    createMorphemes() {
        return new Array();
    }
    createMorpheme(matched, metaplasm) {
        const tum = new TonalUncombiningMorpheme(new TonalSyllable(matched.letters), matched.pattern, metaplasm);
        return tum;
    }
    isCombiningAy(patterns) {
        const keysAy = Array.from(version2_1.uncombiningRulesAy.keys());
        if (patterns.length == 2 &&
            keysAy.filter(it => it === patterns[patterns.length - 2].lastLetter.literal).length > 0 &&
            ((patterns[patterns.length - 1].lastSecondLetter.literal ===
                version2_1.TonalLetterTags.a &&
                patterns[patterns.length - 1].lastLetter.literal ===
                    version2_1.TonalLetterTags.y) ||
                patterns[patterns.length - 1].lastLetter.literal === version2_1.TonalLetterTags.a)) {
            return true;
        }
        return false;
    }
    isDoublet(matches) {
        if (matches.length == 2) {
            const stms = matches
                .map(it => it.pattern.filter(s => s.name !== version2_1.TonalSoundTags.freeTonal))
                .map(seq => seq.map(s => s.toString()).join(''));
            // TODO: add checks for tone group
            const tnls = matches
                .map(it => it.pattern.filter(s => s.name === version2_1.TonalSoundTags.freeTonal))
                .map(seq => seq.map(s => s.toString()).join(''));
            // compare 2 strings/lexical stems
            if (stms[0] === stms[1])
                return true; // identical
        }
        return false;
    }
    isTriplet(matches) {
        if (matches.length == 3) {
            const stms = matches
                .map(it => it.pattern.filter(s => s.name !== version2_1.TonalSoundTags.freeTonal))
                .map(seq => seq.map(s => s.toString()).join(''));
            // TODO: add checks for tone group
            const tnls = matches
                .map(it => it.pattern.filter(s => s.name === version2_1.TonalSoundTags.freeTonal))
                .map(seq => seq.map(s => s.toString()).join(''));
            // compare 3 strings/lexical stems
            if (stms.every((v, i, a) => v === a[0]))
                return true; // identical
        }
        return false;
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
                if (matcher_1.smJlsF(letters[i].literal, letters[i + 1].literal) ||
                    matcher_1.smJjllssWx(letters[i].literal, letters[i + 1].literal)) {
                    indx = i;
                    break;
                }
            }
        }
        else if (len == 2) {
            for (let i = 0; i < letters.length - 2; i++) {
                if (matcher_1.smMnngHF(letters[i].literal, letters[i + 1].literal, letters[i + 2].literal) ||
                    matcher_1.smMnngHhWx(letters[i].literal, letters[i + 1].literal, letters[i + 2].literal)) {
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
                if (new version2_1.InitialSounds().includes(sub1))
                    return letters;
                let fnl;
                if (version2_1.TonalLetterTags.f === arr[i].charAt(arr[i].length - 1)) {
                    literal = sub1.concat(version2_1.TonalLetterTags.t + version2_1.TonalLetterTags.f, sub2);
                    fnl = letters.splice(indx, len, version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.t));
                }
                else if (collections_1.tonalsWx.includes(arr[i].charAt(arr[i].length - 1))) {
                    if (arr[i].charAt(arr[i].length - 1) === version2_1.TonalLetterTags.w)
                        literal = sub1.concat(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.w, sub2);
                    else if (arr[i].charAt(arr[i].length - 1) === version2_1.TonalLetterTags.x)
                        literal = sub1.concat(version2_1.TonalLetterTags.tt + version2_1.TonalLetterTags.x, sub2);
                    fnl = letters.splice(indx, len, version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.tt));
                }
                // console.log(literal)
                if (fnl && len == 1)
                    this.euphonicFinalTonals.push({ index: indx, letters: [fnl[0]] });
                else if (fnl && len == 2)
                    this.euphonicFinalTonals.push({
                        index: indx,
                        letters: [fnl[0], fnl[1]]
                    });
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
            lexicalroots2_1.isInLexcialRoots(literal + version2_1.TonalLetterTags.tt) &&
            !lexicalroots2_1.isInLexcialRoots(literal + version2_1.TonalLetterTags.kk)) {
            // for surface form gg whose underlying form is tt but not kk
            const ls = this.preprocessEuphonicFinal(letters);
            ls.push(version2_1.lowerLettersTonal.get(version2_1.TonalLetterTags.tt));
            return ls;
        }
        return letters;
    }
    replaceEuphonicFinalTonal(letters) {
        let literal = letters.map(x => x.literal).join('');
        if (literal.length > 1 && matcher_1.regexJlsF.test(literal)) {
            const ls = this.preprocessEuphonicFinalTonal(letters, literal, matcher_1.regexJlsF, 1);
            return ls;
        }
        else if (literal.length > 1 && matcher_1.regexJjllssWx.test(literal)) {
            const ls = this.preprocessEuphonicFinalTonal(letters, literal, matcher_1.regexJjllssWx, 1);
            return ls;
        }
        else if (literal.length > 2 && matcher_1.regexMnngHF.test(literal)) {
            const ls = this.preprocessEuphonicFinalTonal(letters, literal, matcher_1.regexMnngHF, 2);
            return ls;
        }
        else if (literal.length > 2 && matcher_1.regexMnngHhWX.test(literal)) {
            const ls = this.preprocessEuphonicFinalTonal(letters, literal, matcher_1.regexMnngHhWX, 2);
            return ls;
        }
        return letters;
    }
    preprocess(graphemes) {
        let ltrs = new Array();
        ltrs = graphemes.map(it => it.letter);
        ltrs = this.replaceEuphonicFinal(ltrs);
        ltrs = this.replaceEuphonicFinalTonal(ltrs);
        return ltrs;
    }
    postprocessEuphonicTtT(pattern) {
        if ((pattern.letters[pattern.letters.length - 1].literal ===
            version2_1.TonalLetterTags.t ||
            pattern.letters[pattern.letters.length - 1].literal ===
                version2_1.TonalLetterTags.tt) &&
            this.euphonicFinals.length > 0) {
            pattern.letters.pop();
            pattern.pattern.pop();
            const fnl = this.euphonicFinals.pop();
            if (fnl) {
                pattern.letters.push(fnl);
                const snd = version2_1.tonalPositionalSounds.get(fnl.literal);
                if (snd)
                    pattern.pattern.push(snd(version2_1.TonalSoundTags.stopFinal));
            }
        }
        else if (this.euphonicFinalTonals.length > 0) {
            const fnl = this.euphonicFinalTonals.pop();
            if (fnl) {
                if (fnl.letters.length == 1) {
                    pattern.letters.splice(fnl.index, 1, fnl.letters[0]);
                    const snd = version2_1.tonalPositionalSounds.get(fnl.letters[0].literal);
                    if (snd)
                        pattern.pattern.splice(fnl.index, 1, snd(version2_1.TonalSoundTags.stopFinal));
                }
                else if (fnl.letters.length == 2) {
                    // console.log(pattern)
                    pattern.letters.splice(fnl.index, 1, fnl.letters[0], fnl.letters[1]);
                    const snd1 = version2_1.tonalPositionalSounds.get(fnl.letters[0].literal);
                    const snd2 = version2_1.tonalPositionalSounds.get(fnl.letters[1].literal);
                    if (snd1 && snd2)
                        pattern.pattern.splice(fnl.index, 1, snd1(version2_1.TonalSoundTags.nasalFinal), snd2(version2_1.TonalSoundTags.stopFinal));
                    // console.log(pattern)
                }
            }
        }
        return pattern;
    }
    postprocess(matched) {
        const morphemes = this.createMorphemes();
        for (let i in matched) {
            const ptn = this.postprocessEuphonicTtT(matched[i]);
            if (this.isCombiningAy(matched)) {
                // ~fa, ~xa, fay, or ~xay
                morphemes.push(this.createMorpheme(ptn, new metaplasm_1.UncombiningAy()));
            }
            else if (this.isTriplet(matched)) {
                // triple construction
                morphemes.push(this.createMorpheme(ptn, new metaplasm_1.TonalReduplication(matched[2].pattern)));
            }
            else if (this.isDoublet(matched)) {
                // double construction
                morphemes.push(this.createMorpheme(ptn, new metaplasm_1.TonalReduplication(matched[1].pattern)));
            }
            else {
                morphemes.push(this.createMorpheme(ptn, new metaplasm_1.TonalUncombiningForms()));
            }
        }
        return morphemes;
    }
    makeMorphemes(graphemes) {
        const ltrs = this.preprocess(graphemes);
        const ptns = this.make(ltrs, syllabifyTonal);
        const ms = this.postprocess(ptns);
        return ms;
    }
}
exports.TonalUncombiningMorphemeMaker = TonalUncombiningMorphemeMaker;
//# sourceMappingURL=morpheme.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/phraseme.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/phraseme.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
/** A phrase made of words. */
class TonalPhrase extends unit_1.Phrase {
    constructor(words) {
        super();
        this.words = new Array();
        if (words) {
            this.words = words;
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

/***/ "./node_modules/taipa/lib/tonal/prediction.js":
/*!****************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/prediction.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const soundgen_1 = __webpack_require__(/*! ./soundgen */ "./node_modules/taipa/lib/tonal/soundgen.js");
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const lexicalroots2_1 = __webpack_require__(/*! ./lexicalroots2 */ "./node_modules/taipa/lib/tonal/lexicalroots2.js");
/** Predicts the following letters. Return them as an array of strings when available. If the lexical roots are not present, an empty array will be returned. */
function predict(strs) {
    const soundSeqs = new Array();
    for (let j = 0; j < soundgen_1.syllableCompositions.length; j++) {
        let sg = new unit_1.SoundGeneration();
        sg.predictive = true;
        sg.letters = strs;
        sg = soundgen_1.syllableCompositions[j](sg);
        if (sg.letters.length != sg.sounds.length || sg.matching != true) {
            // the pattern is not matched, the first unmatched set of sounds
            // is then returned as a possible prediction
            sg.predictions.map(x => soundSeqs.push(x));
        }
    }
    const dupes = new Array();
    soundSeqs.map(i => i.map(j => dupes.push([j.toString(), j.name])));
    let dedupes = dupes.reduce(function (accumulator, curr) {
        if (accumulator.filter(x => x[0] === curr[0]).length == 0) {
            accumulator.push(curr);
        }
        return accumulator;
    }, []);
    // for valid predictions
    const predictions = dedupes.filter(x => lexicalroots2_1.isInLexcialRoots(strs.join('') + x[0]));
    return predictions;
}
exports.predict = predict;
//# sourceMappingURL=prediction.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/tonal/soundgen.js":
/*!**************************************************!*\
  !*** ./node_modules/taipa/lib/tonal/soundgen.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
const version2_1 = __webpack_require__(/*! ./version2 */ "./node_modules/taipa/lib/tonal/version2.js");
const collections_1 = __webpack_require__(/*! ./collections */ "./node_modules/taipa/lib/tonal/collections.js");
function initialConsonant(sg) {
    const sis = new version2_1.InitialSounds();
    if (sis.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.initial);
            if (s)
                sg.sounds.push(s);
        }
    }
    else
        sg.matching = false;
    return sg;
}
function stopFinalConsonant(sg) {
    if (!sg.matching)
        return sg;
    const ssfs = new version2_1.StopFinalSounds();
    if (ssfs.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.stopFinal);
            if (s)
                sg.sounds.push(s);
        }
    }
    else {
        sg.matching = false;
        if (sg.letters.length == sg.sounds.length && sg.predictive)
            sg.predictions.push(ssfs.sounds);
    }
    return sg;
}
function neutralFinalConsonant(sg) {
    if (!sg.matching)
        return sg;
    const snfs = new version2_1.NeutralFinalSounds();
    if (snfs.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.stopFinal);
            if (s)
                sg.sounds.push(s);
        }
    }
    else {
        sg.matching = false;
        if (sg.letters.length == sg.sounds.length && sg.predictive)
            sg.predictions.push(snfs.sounds);
    }
    return sg;
}
function nasalFinalConsonant(sg) {
    if (!sg.matching)
        return sg;
    const snfs = new version2_1.NasalFinalSounds();
    if (snfs.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.nasalFinal);
            if (s)
                sg.sounds.push(s);
        }
    }
    else {
        sg.matching = false;
        if (sg.letters.length == sg.sounds.length && sg.predictive)
            sg.predictions.push(snfs.sounds);
    }
    return sg;
}
function vowel(sg) {
    const sms = new version2_1.MedialSounds();
    let toBePredicted = true;
    let matches = 0;
    for (let i = sg.sounds.length; i < sg.letters.length; i++) {
        // console.log(`sg.sounds.length: ${sg.sounds.length}`);
        if (sms.includes(sg.letters[i])) {
            toBePredicted = false;
            const ps = version2_1.tonalPositionalSounds.get(sg.letters[i]);
            if (ps) {
                const s = ps(version2_1.TonalSoundTags.medial);
                matches++;
                if (s)
                    sg.sounds.push(s);
            }
        }
        else {
            toBePredicted = false;
            if (matches == 0)
                sg.matching = false;
            break;
        }
    }
    if (toBePredicted) {
        if (sg.predictive && sg.letters.length > 0)
            sg.predictions.push(sms.sounds);
        sg.matching = false;
    }
    return sg;
}
function materLectionis(sg) {
    const sml = new version2_1.MaterLectionisSounds();
    if (sml.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.medial);
            if (s)
                sg.sounds.push(s);
        }
    }
    else
        sg.matching = false;
    return sg;
}
function nasalization(sg) {
    if (!sg.matching)
        return sg;
    const sns = new version2_1.NasalizationSound();
    if (sns.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.nasalization);
            if (s)
                sg.sounds.push(s);
        }
    }
    else {
        sg.matching = false;
        if (sg.letters.length == sg.sounds.length && sg.predictive)
            sg.predictions.push(sns.sounds);
    }
    return sg;
}
function freeTone(sg) {
    if (!sg.matching)
        return sg;
    const sfts = new version2_1.FreeTonalSounds();
    if (sfts.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.freeTonal);
            if (s)
                sg.sounds.push(s);
        }
    }
    else {
        sg.matching = false;
        if (sg.letters.length == sg.sounds.length && sg.predictive)
            sg.predictions.push(sfts.sounds);
    }
    return sg;
}
function checkedTone(sg) {
    if (!sg.matching)
        return sg;
    const scts = new version2_1.CheckedTonalSounds();
    if (scts.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.checkedTonal);
            if (s)
                sg.sounds.push(s);
        }
    }
    else {
        sg.matching = false;
        if (sg.letters.length == sg.sounds.length && sg.predictive)
            sg.predictions.push(scts.sounds);
    }
    return sg;
}
function euphonicFinalConsonant(sg) {
    if (!sg.matching)
        return sg;
    const efBgjklps = new version2_1.EuphonicFinalsBGJKLPS();
    const efBbggjjkkllppss = new version2_1.EuphonicFinalsBBGGJJKKLLPPSS();
    if (efBgjklps.includes(sg.letters[sg.sounds.length]) ||
        efBbggjjkkllppss.includes(sg.letters[sg.sounds.length])) {
        const ps = version2_1.tonalPositionalSounds.get(sg.letters[sg.sounds.length]);
        if (ps) {
            const s = ps(version2_1.TonalSoundTags.stopFinal);
            if (s)
                sg.sounds.push(s);
        }
    }
    else {
        sg.matching = false;
        if (sg.letters.length == sg.sounds.length &&
            sg.predictive &&
            sg.predictEuphonicFinal) {
            sg.predictions.push(efBgjklps.sounds);
            sg.predictions.push(efBbggjjkkllppss.sounds);
        }
    }
    return sg;
}
// common syllables
const scV = unit_1.sgPipe(vowel);
const scM = unit_1.sgPipe(materLectionis);
const scVT = unit_1.sgPipe(vowel, freeTone);
const scMT = unit_1.sgPipe(materLectionis, freeTone);
//const scMC = sgPipe(materLectionis, neutralFinalConsonant);
const scCV = unit_1.sgPipe(initialConsonant, vowel);
const scVC1 = unit_1.sgPipe(vowel, stopFinalConsonant);
const scVC2 = unit_1.sgPipe(vowel, nasalFinalConsonant);
const scVCT1 = unit_1.sgPipe(vowel, stopFinalConsonant, checkedTone);
const scVCT2 = unit_1.sgPipe(vowel, nasalFinalConsonant, freeTone);
const scCVT = unit_1.sgPipe(initialConsonant, vowel, freeTone);
const scCVC1 = unit_1.sgPipe(initialConsonant, vowel, stopFinalConsonant);
const scCVC2 = unit_1.sgPipe(initialConsonant, vowel, nasalFinalConsonant);
const scCVCT1 = unit_1.sgPipe(initialConsonant, vowel, stopFinalConsonant, checkedTone);
const scCVCT2 = unit_1.sgPipe(initialConsonant, vowel, nasalFinalConsonant, freeTone);
//const scCVCC = sgPipe(initialConsonant, vowel, nasalFinalConsonant, neutralFinalConsonant);
// consonant syllables
const scCC = unit_1.sgPipe(initialConsonant, nasalFinalConsonant);
const scCCT = unit_1.sgPipe(initialConsonant, nasalFinalConsonant, freeTone);
const scCCC = unit_1.sgPipe(initialConsonant, nasalFinalConsonant, neutralFinalConsonant);
const scCCCT = unit_1.sgPipe(initialConsonant, nasalFinalConsonant, neutralFinalConsonant, checkedTone);
// nasalization syllables
const scVN = unit_1.sgPipe(vowel, nasalization);
const scVNT = unit_1.sgPipe(vowel, nasalization, freeTone);
const scCVN = unit_1.sgPipe(initialConsonant, vowel, nasalization);
const scCVNT = unit_1.sgPipe(initialConsonant, vowel, nasalization, freeTone);
//const scVNC = sgPipe(vowel, nasalization, neutralFinalConsonant);
//const scVNCT = sgPipe(vowel, nasalization, neutralFinalConsonant, checkedTone);
const scCVNC = unit_1.sgPipe(initialConsonant, vowel, nasalization, neutralFinalConsonant);
const scCVNCT = unit_1.sgPipe(initialConsonant, vowel, nasalization, neutralFinalConsonant, checkedTone);
// euphonic syllables
const scVC3 = unit_1.sgPipe(vowel, euphonicFinalConsonant);
const scVCT3 = unit_1.sgPipe(vowel, euphonicFinalConsonant, checkedTone);
const scCVC3 = unit_1.sgPipe(initialConsonant, vowel, euphonicFinalConsonant);
const scCVCT3 = unit_1.sgPipe(initialConsonant, vowel, euphonicFinalConsonant, checkedTone);
const scCVCCT = unit_1.sgPipe(initialConsonant, vowel, nasalFinalConsonant, neutralFinalConsonant, checkedTone);
// syllable compositions or patterns
exports.syllableCompositions = [
    scV,
    scM,
    scVT,
    scMT,
    scCV,
    scVC1,
    scVC2,
    scVCT1,
    scVCT2,
    scCVT,
    scCVC1,
    scCVC2,
    scCVCT1,
    scCVCT2,
    scCC,
    scCCT,
    scCCC,
    scCCCT,
    scVN,
    scVNT,
    scCVN,
    scCVNT,
    scCVNC,
    scCVNCT,
    scVC3,
    scVCT3,
    scCVC3,
    scCVCT3,
    scCVCCT
];
class TonalSoundGenerator {
    isStopFinal(str) {
        if (new version2_1.StopFinalSounds().includes(str))
            return true;
        return false;
    }
    genChecked(ltrs) {
        const tos = collections_1.combiningRules.get(ltrs[ltrs.length - 1]);
        let strs = new Array();
        strs.push(ltrs);
        // console.debug(tos);
        if (tos) {
            for (let i in tos) {
                let syl = new Array();
                Object.assign(syl, ltrs);
                syl.push(version2_1.lowerLettersTonal.get(tos[i]).literal);
                strs.push(syl);
            }
        }
        return strs;
    }
    generate(letters) {
        let strs = new Array();
        const sequences = new Array(); // to be returned
        if (this.isStopFinal(letters[letters.length - 1])) {
            strs = this.genChecked(letters);
        }
        else {
            strs.push(letters);
        }
        for (let i in strs) {
            // generates all needed sounds to be processed
            for (let j = 0; j < exports.syllableCompositions.length; j++) {
                let sg = new unit_1.SoundGeneration();
                sg.letters = strs[i];
                //console.log(`j: ${j}`)
                sg = exports.syllableCompositions[j](sg);
                if (sg.letters.length == sg.sounds.length && sg.matching == true) {
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
const unit_1 = __webpack_require__(/*! ../unit */ "./node_modules/taipa/lib/unit.js");
class Morph {
}
exports.Morph = Morph;
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
class LettersOfTonal extends unit_1.Letters {
}
exports.LettersOfTonal = LettersOfTonal;
exports.lowerLettersTonal = new LettersOfTonal([
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
    TonalLetterTags.or
]);
var TonalSoundTags;
(function (TonalSoundTags) {
    TonalSoundTags["initial"] = "initial";
    TonalSoundTags["medial"] = "medial";
    TonalSoundTags["nasalization"] = "nasalization";
    TonalSoundTags["stopFinal"] = "stopFinal";
    TonalSoundTags["nasalFinal"] = "nasalFinal";
    TonalSoundTags["checkedTonal"] = "checkedTonal";
    TonalSoundTags["freeTonal"] = "freeTonal";
})(TonalSoundTags = exports.TonalSoundTags || (exports.TonalSoundTags = {}));
class Initial extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.initial;
    }
}
exports.Initial = Initial;
class Medial extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.medial;
    }
}
exports.Medial = Medial;
class Final extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = '';
    }
}
exports.Final = Final;
class Nasalization extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = TonalSoundTags.nasalization;
    }
}
exports.Nasalization = Nasalization;
class Tonal extends unit_1.Sound {
    constructor() {
        super(...arguments);
        this.name = '';
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
class NasalizationSound extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new NasalizationNN());
    }
}
exports.NasalizationSound = NasalizationSound;
class NasalFinalSounds extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalM());
        this.sounds.push(new FinalN());
        this.sounds.push(new FinalNG());
    }
}
exports.NasalFinalSounds = NasalFinalSounds;
class NeutralFinalSounds extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FinalH());
        this.sounds.push(new FinalHH());
    }
}
exports.NeutralFinalSounds = NeutralFinalSounds;
class MedialSounds extends unit_1.SetOfSounds {
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
exports.MedialSounds = MedialSounds;
class MaterLectionisSounds extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new MaterLectionisM());
        this.sounds.push(new MaterLectionisN());
        this.sounds.push(new MaterLectionisNG());
    }
}
exports.MaterLectionisSounds = MaterLectionisSounds;
class InitialSounds extends unit_1.SetOfSounds {
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
exports.InitialSounds = InitialSounds;
class FreeTonalSounds extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new FreeTonalZ());
        this.sounds.push(new FreeTonalW());
        this.sounds.push(new FreeTonalXX());
        this.sounds.push(new FreeTonalF());
        this.sounds.push(new FreeTonalZX());
        this.sounds.push(new FreeTonalX());
        this.sounds.push(new FreeTonalY());
    }
}
exports.FreeTonalSounds = FreeTonalSounds;
class CheckedTonalSounds extends unit_1.SetOfSounds {
    constructor() {
        super();
        this.sounds.push(new CheckedTonalF());
        this.sounds.push(new CheckedTonalY());
        this.sounds.push(new CheckedTonalW());
        this.sounds.push(new CheckedTonalX());
    }
}
exports.CheckedTonalSounds = CheckedTonalSounds;
class StopFinalSounds extends unit_1.SetOfSounds {
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
exports.StopFinalSounds = StopFinalSounds;
class EuphonicFinalsBGJKLPS extends unit_1.SetOfSounds {
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
class EuphonicFinalsBBGGJJKKLLPPSS extends unit_1.SetOfSounds {
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
function positionalSound(sounds) {
    return (t) => {
        for (let i in sounds) {
            if (sounds[i].name === t)
                return sounds[i];
        }
        return new unit_1.Sound();
    };
}
exports.positionalSound = positionalSound;
const psA = positionalSound([new MedialA()]);
const psB = positionalSound([new InitialB(), new FinalB()]);
const psBb = positionalSound([new FinalBB()]);
const psC = positionalSound([new InitialC()]);
const psCh = positionalSound([new InitialCH()]);
const psD = positionalSound([new InitialD()]);
const psE = positionalSound([new MedialE()]);
const psEr = positionalSound([new MedialER()]);
const psF = positionalSound([new FreeTonalF(), new CheckedTonalF()]);
const psG = positionalSound([new InitialG(), new FinalG()]);
const psGg = positionalSound([new FinalGG()]);
const psH = positionalSound([new InitialH(), new FinalH()]);
const psHh = positionalSound([new FinalHH()]);
const psI = positionalSound([new MedialI()]);
const psIr = positionalSound([new MedialIR()]);
const psJ = positionalSound([new InitialJ(), new FinalJ()]);
const psJj = positionalSound([new FinalJJ()]);
const psK = positionalSound([new InitialK(), new FinalK()]);
const psKk = positionalSound([new FinalKK()]);
const psL = positionalSound([new InitialL(), new FinalL()]);
const psLl = positionalSound([new FinalLL()]);
const psM = positionalSound([
    new InitialM(),
    new MaterLectionisM(),
    new FinalM()
]);
const psN = positionalSound([
    new InitialN(),
    new MaterLectionisN(),
    new FinalN()
]);
const psNn = positionalSound([new NasalizationNN()]);
const psNg = positionalSound([
    new InitialNG(),
    new MaterLectionisNG(),
    new FinalNG()
]);
const psO = positionalSound([new MedialO()]);
const psOr = positionalSound([new MedialOR()]);
const psP = positionalSound([new InitialP(), new FinalP()]);
const psPp = positionalSound([new FinalPP()]);
const psQ = positionalSound([new InitialQ()]);
const psS = positionalSound([new InitialS(), new FinalS()]);
const psSs = positionalSound([new FinalSS()]);
const psT = positionalSound([new InitialT(), new FinalT()]);
const psTt = positionalSound([new FinalTT()]);
const psU = positionalSound([new MedialU()]);
const psUr = positionalSound([new MedialUR()]);
const psV = positionalSound([new InitialV()]);
const psW = positionalSound([new FreeTonalW(), new CheckedTonalW()]);
const psX = positionalSound([new FreeTonalX(), new CheckedTonalX()]);
const psXx = positionalSound([new FreeTonalXX()]);
const psY = positionalSound([new FreeTonalY(), new CheckedTonalY()]);
const psZ = positionalSound([new FreeTonalZ()]);
const psZx = positionalSound([new FreeTonalZX()]);
exports.tonalPositionalSounds = new Map()
    .set(TonalLetterTags.a, psA)
    .set(TonalLetterTags.b, psB)
    .set(TonalLetterTags.bb, psBb)
    .set(TonalLetterTags.c, psC)
    .set(TonalLetterTags.ch, psCh)
    .set(TonalLetterTags.d, psD)
    .set(TonalLetterTags.e, psE)
    .set(TonalLetterTags.er, psEr)
    .set(TonalLetterTags.f, psF)
    .set(TonalLetterTags.g, psG)
    .set(TonalLetterTags.gg, psGg)
    .set(TonalLetterTags.h, psH)
    .set(TonalLetterTags.hh, psHh)
    .set(TonalLetterTags.i, psI)
    .set(TonalLetterTags.ir, psIr)
    .set(TonalLetterTags.j, psJ)
    .set(TonalLetterTags.jj, psJj)
    .set(TonalLetterTags.k, psK)
    .set(TonalLetterTags.kk, psKk)
    .set(TonalLetterTags.l, psL)
    .set(TonalLetterTags.ll, psLl)
    .set(TonalLetterTags.m, psM)
    .set(TonalLetterTags.n, psN)
    .set(TonalLetterTags.nn, psNn)
    .set(TonalLetterTags.ng, psNg)
    .set(TonalLetterTags.o, psO)
    .set(TonalLetterTags.or, psOr)
    .set(TonalLetterTags.p, psP)
    .set(TonalLetterTags.pp, psPp)
    .set(TonalLetterTags.q, psQ)
    .set(TonalLetterTags.s, psS)
    .set(TonalLetterTags.ss, psSs)
    .set(TonalLetterTags.t, psT)
    .set(TonalLetterTags.tt, psTt)
    .set(TonalLetterTags.u, psU)
    .set(TonalLetterTags.ur, psUr)
    .set(TonalLetterTags.v, psV)
    .set(TonalLetterTags.w, psW)
    .set(TonalLetterTags.x, psX)
    .set(TonalLetterTags.xx, psXx)
    .set(TonalLetterTags.y, psY)
    .set(TonalLetterTags.z, psZ)
    .set(TonalLetterTags.zx, psZx);
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
class AllomorphZX extends FreeAllomorph {
    constructor() {
        super(...arguments);
        this.tonal = new FreeTonalZX();
    }
}
exports.freeAllomorphs = new Map()
    .set(TonalLetterTags.f, new AllomorphF())
    .set(TonalLetterTags.w, new AllomorphW())
    .set(TonalLetterTags.xx, new AllomorphXX())
    .set(TonalLetterTags.z, new AllomorphZ())
    .set(TonalLetterTags.zx, new AllomorphZX())
    .set(TonalLetterTags.y, new AllomorphY())
    .set(TonalLetterTags.x, new AllomorphX());
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
exports.checkedAllomorphs = new Map()
    .set(TonalLetterTags.p, new AllomorphP())
    .set(TonalLetterTags.t, new AllomorphT())
    .set(TonalLetterTags.k, new AllomorphK())
    .set(TonalLetterTags.h, new AllomorphH())
    .set(TonalLetterTags.pp, new AllomorphPP())
    .set(TonalLetterTags.tt, new AllomorphTT())
    .set(TonalLetterTags.kk, new AllomorphKK())
    .set(TonalLetterTags.hh, new AllomorphHH())
    .set(TonalLetterTags.p + TonalLetterTags.f, new AllomorphPF())
    .set(TonalLetterTags.t + TonalLetterTags.f, new AllomorphTF())
    .set(TonalLetterTags.k + TonalLetterTags.f, new AllomorphKF())
    .set(TonalLetterTags.h + TonalLetterTags.f, new AllomorphHF())
    .set(TonalLetterTags.pp + TonalLetterTags.w, new AllomorphPPW())
    .set(TonalLetterTags.tt + TonalLetterTags.w, new AllomorphTTW())
    .set(TonalLetterTags.kk + TonalLetterTags.w, new AllomorphKKW())
    .set(TonalLetterTags.hh + TonalLetterTags.w, new AllomorphHHW())
    .set(TonalLetterTags.h + TonalLetterTags.y, new AllomorphHY())
    .set(TonalLetterTags.pp + TonalLetterTags.x, new AllomorphPPX())
    .set(TonalLetterTags.tt + TonalLetterTags.x, new AllomorphTTX())
    .set(TonalLetterTags.kk + TonalLetterTags.x, new AllomorphKKX())
    .set(TonalLetterTags.hh + TonalLetterTags.x, new AllomorphHHX());
exports.combinedFreeAllomorphs = new Map()
    .set(TonalLetterTags.w, new AllomorphW())
    .set(TonalLetterTags.z, new AllomorphZ())
    .set(TonalLetterTags.x, new AllomorphX())
    .set(TonalLetterTags.y, new AllomorphY())
    .set(TonalLetterTags.f, new AllomorphF())
    .set(TonalLetterTags.xx, new AllomorphXX());
exports.uncombinedCheckedAllomorphs = new Map()
    .set(TonalLetterTags.p, new AllomorphP())
    .set(TonalLetterTags.t, new AllomorphT())
    .set(TonalLetterTags.k, new AllomorphK())
    .set(TonalLetterTags.h, new AllomorphH())
    .set(TonalLetterTags.pp, new AllomorphPP())
    .set(TonalLetterTags.tt, new AllomorphTT())
    .set(TonalLetterTags.kk, new AllomorphKK())
    .set(TonalLetterTags.hh, new AllomorphHH());
exports.combinedCheckedAllomorphs = new Map()
    .set(TonalLetterTags.p, [new AllomorphPF()])
    .set(TonalLetterTags.t, [new AllomorphTF()])
    .set(TonalLetterTags.k, [new AllomorphKF()])
    .set(TonalLetterTags.h, [new AllomorphHF(), new AllomorphHY()])
    .set(TonalLetterTags.pp, [new AllomorphPPW(), new AllomorphPPX()])
    .set(TonalLetterTags.tt, [new AllomorphTTW(), new AllomorphTTX()])
    .set(TonalLetterTags.kk, [new AllomorphKKW(), new AllomorphKKX()])
    .set(TonalLetterTags.hh, [new AllomorphHHW(), new AllomorphHHX()]);
exports.freeAllomorphUncombiningRules = new Map()
    .set(TonalLetterTags.f, [new FreeTonalY()])
    .set(TonalLetterTags.w, [new FreeTonalZ(), new FreeTonalX()])
    .set(TonalLetterTags.xx, [
    new FreeTonalZ(),
    new FreeTonalF(),
    new FreeTonalX()
])
    .set(TonalLetterTags.z, [new FreeTonalX(), new FreeTonalF(), new ZeroTonal()])
    .set(TonalLetterTags.zx, [])
    .set(TonalLetterTags.x, [])
    .set(TonalLetterTags.y, [new FreeTonalW()])
    .set(TonalLetterTags.zero, [new FreeTonalY()]);
exports.uncombiningRulesAy = new Map()
    .set(TonalLetterTags.f, [new FreeTonalY(), new FreeTonalW()])
    .set(TonalLetterTags.x, [
    new ZeroTonal(),
    new FreeTonalX(),
    new FreeTonalZ()
]);
//# sourceMappingURL=version2.js.map

/***/ }),

/***/ "./node_modules/taipa/lib/unit.js":
/*!****************************************!*\
  !*** ./node_modules/taipa/lib/unit.js ***!
  \****************************************/
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
            'z'
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
class Grapheme {
}
exports.Grapheme = Grapheme;
class AlphabeticGrapheme extends Grapheme {
    constructor(letter) {
        super();
        this.letter = letter;
    }
}
exports.AlphabeticGrapheme = AlphabeticGrapheme;
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
        if (characters) {
            this.characters = characters;
            this.concat();
        }
    }
    pushCharacter(c) {
        this.characters.push(c);
        this.concat();
    }
    concat() {
        this.literal = this.characters.map(x => (x ? x.character : '')).join('');
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
        this.arr = larr;
        for (let i = 0; i < this.arr.length; i++) {
            this.assign(this.arr[i]);
        }
    }
    assign(e) {
        let carr = [];
        for (let i = 0; i < e.length; i++) {
            let c = exports.characters.get(e[i]);
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
/** Turn a string into graphemes. */
class GraphemeMaker {
    constructor(lowerLetters) {
        this.list = new Array();
        this.list = Array.from(lowerLetters.values);
    }
    makeGraphemes(str) {
        const characters = new Array();
        if (str) {
            for (let i = 0; i < str.length; i++) {
                if (str.charAt(i) != '\0') {
                    characters.push(new Character(str.charAt(i)));
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
                    ms.characters[0] = new Character('n');
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
                        if (candidates[key].literal ===
                            new AlphabeticLetter(ms.characters).literal) {
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
            arr.push(new Character(str[i]));
        }
        return arr;
    }
}
exports.Sound = Sound;
class SetOfSounds {
    constructor() {
        this.sounds = new Array();
    }
    includes(str) {
        for (let i in this.sounds) {
            if (str && this.sounds[i] && str === this.sounds[i].toString())
                return true;
        }
        return false;
    }
}
exports.SetOfSounds = SetOfSounds;
exports.sgPipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
/** Sound generation for syllable compositions. */
class SoundGeneration {
    constructor() {
        /** The letters to be matched. */
        this.letters = [];
        /** Matched sounds accumulator. */
        this.sounds = new Array();
        /** Indicator of syllable matching process. */
        this.matching = true;
        /** Will populate `predictions` when set to true. */
        this.predictive = false;
        /** Predicted sounds */
        this.predictions = new Array();
        this.predictEuphonicFinal = false;
    }
}
exports.SoundGeneration = SoundGeneration;
class MatchedPattern {
    constructor() {
        this.letters = new Array();
        this.pattern = new Array();
    }
    get matchedLength() {
        return this.letters.length;
    } // length of pattern can be optionally returned
    get lastLetter() {
        if (this.letters.length > 0)
            return this.letters[this.letters.length - 1];
        return new AlphabeticLetter([]);
    }
    get lastSecondLetter() {
        if (this.letters.length > 1)
            return this.letters[this.letters.length - 2];
        return new AlphabeticLetter([]);
    }
}
exports.MatchedPattern = MatchedPattern;
class Morpheme {
}
exports.Morpheme = Morpheme;
class Syllable {
    constructor(letters) {
        this.literal = '';
        this.letters = new Array();
        if (letters) {
            this.letters = letters;
            this.concat();
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
class Lexeme {
}
exports.Lexeme = Lexeme;
class Word {
    constructor() {
        this.literal = '';
    }
}
exports.Word = Word;
class LexemeMaker {
}
exports.LexemeMaker = LexemeMaker;
class ToneGroup {
    constructor() {
        this.inflectionalEndings = new Array();
    }
}
exports.ToneGroup = ToneGroup;
class ToneSandhiGroup extends ToneGroup {
}
class Phraseme {
}
exports.Phraseme = Phraseme;
class Phrase {
    constructor() {
        this.literal = '';
    }
}
exports.Phrase = Phrase;
//# sourceMappingURL=unit.js.map

/***/ }),

/***/ "./pages/hint.tsx":
/*!************************!*\
  !*** ./pages/hint.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/jslv/Projects/keyin/pages/hint.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var Hint = function Hint() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hint);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hint", '');

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sounds", new Array());

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "namesOfSound", new Array());
};

var Entry = function Entry(reading) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Entry);

  this.reading = reading;
};

var Group = function Group() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Group);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "entries", [new Entry('hoefcia'), new Entry('hefcia')]);
};

var topic = new Group();
var slicedReadings = [];
var literals = [];
var entries = [];
var hints = new Array();
var highlights = [];
var idx = 0;
var tonalInHanji = new Map().set("f", "一").set("y", "二").set("w", "三").set("x", "五").set("z", "七").set("xx", "九");
var namesInHanji = new Map().set("initial", "初聲").set("medial", "中聲").set("nasalization", "鼻音化").set("stopFinal", "終聲").set("nasalFinal", "終聲").set("freeTonal", "聲調").set("checkedTonal", "聲調");

function getTopic() {
  entries = topic.entries;
  var clt = new taipa__WEBPACK_IMPORTED_MODULE_3__["Client"]();

  for (var i = 0; i < topic.entries.length; i++) {
    var doc = clt.processTonal(topic.entries[i].reading);
    literals[i] = doc.word.literal;
    var h = new Hint();

    var _iterator = _createForOfIteratorHelper(doc.soundSequences),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var e = _step.value;

        var _iterator2 = _createForOfIteratorHelper(e),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var j = _step2.value;
            h.namesOfSound.push(j.name);
            h.sounds.push(j.toString());
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        h.hint = namesInHanji.get(h.namesOfSound[0]) + ' ' + h.namesOfSound[0];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    highlights[i] = h.sounds[0];
    var sliced = literals[i].slice(highlights[i].length);
    slicedReadings[i] = sliced;
    hints.push(h);
  }
}

getTopic();

function setHintAndHighlight(index, n) {
  if (hints[index].namesOfSound[n] === taipa__WEBPACK_IMPORTED_MODULE_3__["TonalSoundTags"].freeTonal || hints[index].namesOfSound[n] === taipa__WEBPACK_IMPORTED_MODULE_3__["TonalSoundTags"].checkedTonal) {
    if (tonalInHanji.has(hints[index].sounds[n])) {
      var tonal = "";
      tonal = tonalInHanji.get(hints[index].sounds[n]);
      hints[index].hint = namesInHanji.get(hints[index].namesOfSound[n]) + tonal + ' ' + hints[index].namesOfSound[n];
    }
  } else {
    hints[index].hint = namesInHanji.get(hints[index].namesOfSound[n]) + ' ' + hints[index].namesOfSound[n];
  }

  highlights[index] = hints[index].sounds[n];
}

function HintPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var str = input; // if(literals[idx].search(new RegExp(str)) != 0) {}

  var len = 0;

  if (str.length > 0 && literals[idx].search(new RegExp(str)) == 0) {
    for (var j = 0; j < hints[idx].sounds.length; j++) {
      len += hints[idx].sounds[j].length;

      if (len >= str.length) {
        if (len > str.length) {
          setHintAndHighlight(idx, j);
        } else {
          if (j + 1 == hints[idx].sounds.length) {
            // last sound
            hints[idx].hint = "";
            highlights[idx] = "";
          } else {
            setHintAndHighlight(idx, j + 1);
          }
        }

        break;
      }
    }
  } else if (str.length == 0) {
    setHintAndHighlight(idx, 0);
  }

  if (len == str.length) {
    var sliced = literals[idx].slice(str.length);

    if (literals[idx].search(new RegExp(str)) == 0) {
      if (highlights[idx] != undefined) {
        var slicedTwo = sliced.slice(highlights[idx].length);
        slicedReadings[idx] = slicedTwo;
      }
    }
  } else if (len > str.length) {}

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "\u62CD\u7F85\u99AC\u5B57, \u986F\u793A hint", __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "text",
    list: "words",
    value: input,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  })), highlights[idx], ", ", slicedReadings[idx], __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), literals[idx], __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), len, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }), len < literals[idx].length ? hints[idx].hint : '');
}

/* harmony default export */ __webpack_exports__["default"] = (HintPage);

/***/ }),

/***/ 3:
/*!**************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fhint&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fhint.tsx ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fhint&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fhint.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhint&absolutePagePath=%2FUsers%2Fjslv%2FProjects%2Fkeyin%2Fpages%2Fhint.tsx!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=hint.js.map