webpackHotUpdate("static/development/pages/tonepattern.js",{

/***/ "./pages/tonepattern.tsx":
/*!*******************************!*\
  !*** ./pages/tonepattern.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/jslv/Projects/keyin/pages/tonepattern.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function TonePatternPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var mapTonal = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a().set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].f, 1).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].y, 2).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].w, 3).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].x, 5).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].z, 7); // .set(TonalLetterTags.xx, 9);

  var mapFinal = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a().set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].zero, 1).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].p, 4).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].t, 4).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].k, 4).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].h, 4).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].pp, 8).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].tt, 8).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].kk, 8).set(taipa__WEBPACK_IMPORTED_MODULE_2__["TonalLetterTags"].hh, 8);
  var tia = new taipa__WEBPACK_IMPORTED_MODULE_2__["TonalInflectionAnalyzer"]();
  var ms1 = tia.morphAnalyze(input, new taipa__WEBPACK_IMPORTED_MODULE_2__["TonalCombiningForms"]());
  var items = ms1.map(function (it) {
    return mapTonal.has(it.allomorph.tonal.toString()) ? mapTonal.get(it.allomorph.tonal.toString()) : mapFinal.get(it.allomorph.toString());
  });
  var nouns = ['engzhiongx', 'pannypannyqiurw', 'angfangwangx', 'siurfsiurzsiur', 'liyleyqiurw'];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA\u8072\u8ABF\u6A21\u5F0F", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    list: "items",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("datalist", {
    id: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, nouns.map(function (item) {
    return __jsx("option", {
      key: item,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    });
  })), items);
}

/* harmony default export */ __webpack_exports__["default"] = (TonePatternPage);

/***/ })

})
//# sourceMappingURL=tonepattern.js.274c804395d55c0b9e59.hot-update.js.map