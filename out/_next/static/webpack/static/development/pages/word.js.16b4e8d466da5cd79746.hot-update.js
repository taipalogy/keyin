webpackHotUpdate("static/development/pages/word.js",{

/***/ "./pages/word.tsx":
/*!************************!*\
  !*** ./pages/word.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/process */ "./src/process.ts");
var _jsxFileName = "/Users/jslv/Projects/keyin/pages/word.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function WordPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      input = _useState[0],
      setInput = _useState[1];

  var tla = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLemmatizationAnalyzer"]();
  var letters = tla.graphAnalyze(input).map(function (x) {
    return x.letter && x.letter.literal;
  });
  var soudnSeqs = Object(_src_process__WEBPACK_IMPORTED_MODULE_2__["getSoundSequences"])(tla.morphAnalyze(input).map(function (x) {
    return x.sounds;
  }));
  var uncombiningFormSeqs = tla.morphAnalyze(input).map(function (it) {
    return it.getForms().map(function (it) {
      return it.literal;
    }).join(', ');
  });
  var tl = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLemmatizer"]();
  var lxLemma = tl.lemmatize(input);
  var stems = Object(_src_process__WEBPACK_IMPORTED_MODULE_2__["getStems"])(lxLemma.word.literal, lxLemma.getInflectionalEnding());
  var inflectionalSuffixes = Object(_src_process__WEBPACK_IMPORTED_MODULE_2__["getInflectionalSuffixes"])(lxLemma.getInflectionalEnding());
  var lemmas = lxLemma.getLemmas().map(function (x) {
    return x.literal;
  });
  var ti = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalInflector"]();
  var lxInflect = ti.inflectDesinence(input);
  var proceedingForms = lxInflect.getForms().map(function (x) {
    return x.literal;
  });

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA lemmas, stem, inflectional suffix, proceeding forms, sound sequences, uncombining form sequences, \u7532 letters", __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    value: input,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "lemmas", lemmas.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), "stem", stems.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), "inflectional suffix", inflectionalSuffixes.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), "proceeding forms", proceedingForms.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "sound sequences", soudnSeqs.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, x[0] + ' - ' + x[1]);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), "uncombining form sequences", uncombiningFormSeqs.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, x);
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), "letters: ", letters.join(', '));
}

/* harmony default export */ __webpack_exports__["default"] = (WordPage);

/***/ })

})
//# sourceMappingURL=word.js.16b4e8d466da5cd79746.hot-update.js.map