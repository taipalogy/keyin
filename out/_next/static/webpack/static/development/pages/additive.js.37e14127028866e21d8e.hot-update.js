webpackHotUpdate("static/development/pages/additive.js",{

/***/ "./pages/additive.tsx":
/*!****************************!*\
  !*** ./pages/additive.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taipa/lib/tonal/version2 */ "./node_modules/taipa/lib/tonal/version2.js");
/* harmony import */ var taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jslv/Projects/keyin/pages/additive.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AdditivePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var syllableSeqs = [['lo', 'le'], ['qiong', 'dong']];
  var patterns = [[taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].w, taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].x], // 35
  [taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].z, taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].z] // 77
  ];
  var matches = syllableSeqs.map(function (x) {
    return x.join('') === input ? x : [];
  });
  var tia = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalInflectionAnalyzer"](); // let gs1 = new AlphabeticGrapheme('');
  // let gs2;
  // if(matches) {

  var gs1 = tia.graphAnalyze(matches[0][0]);
  var gs2 = tia.graphAnalyze(matches[0][1]); // }

  var ms1 = tia.morphAnalyze(gs1, new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalCombiningForms"]());
  var ms2 = tia.morphAnalyze(gs2, new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalCombiningForms"]());

  if (ms1[0] && ms2[0]) {
    ms1[0].syllable.pushLetter(taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__["lowerLettersOfTonal"].get(patterns[0][0]));
    ms2[0].syllable.pushLetter(taipa_lib_tonal_version2__WEBPACK_IMPORTED_MODULE_2__["lowerLettersOfTonal"].get(patterns[0][1]));
  }

  var lx = tia.lexAnalyze([ms1, ms2].flat(), new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalDesinenceInflection"]());
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA inflected form", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    list: "phrasalverbs",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("datalist", {
    id: "phrasalverbs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, syllableSeqs.map(function (item) {
    return __jsx("option", {
      key: item[0] + item[1],
      value: item[0] + item[1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    });
  })), lx.word.literal);
}

/* harmony default export */ __webpack_exports__["default"] = (AdditivePage);

/***/ })

})
//# sourceMappingURL=additive.js.37e14127028866e21d8e.hot-update.js.map