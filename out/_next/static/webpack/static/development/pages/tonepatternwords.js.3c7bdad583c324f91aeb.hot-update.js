webpackHotUpdate("static/development/pages/tonepatternwords.js",{

/***/ "./pages/tonepatternwords.tsx":
/*!************************************!*\
  !*** ./pages/tonepatternwords.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jslv/Projects/keyin/pages/tonepatternwords.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function TonePatternWordsPage() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var mapTonal = new Map().set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].f, 1).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].y, 2).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].w, 3).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].x, 5).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].z, 7).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].xx, 9);
  var mapFinal = new Map().set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].zero, 1).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].p, 4).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].t, 4).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].k, 4).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].h, 4).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].pp, 8).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].tt, 8).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].kk, 8).set(taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLetterTags"].hh, 8);
  var tia = taipa__WEBPACK_IMPORTED_MODULE_1__["tonalInflectionAnalyzer"];
  var tokens = input.split(' ');
  var items = [];

  if (tokens.length > 0) {
    var ls1 = tokens.map(function (it) {
      return tia.lexAnalyze(it, new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalDesinenceInflection"]());
    });
    items = ls1.map(function (it) {
      return mapTonal.has(it.getInflectionalEnding().toString()) ? mapTonal.get(it.getInflectionalEnding().toString()) : mapFinal.get(it.getAllomorphicEnding().toString());
    });
  } else {
    items = [];
  }

  var phrases = ['diurhhw qaux', 'tehh cut kih'];
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA\u8072\u8ABF\u6A21\u5F0F", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "text",
    list: "entries",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx("datalist", {
    id: "entries",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, phrases.map(function (item) {
    return __jsx("option", {
      key: item,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    });
  })), items);
}

/* harmony default export */ __webpack_exports__["default"] = (TonePatternWordsPage);

/***/ })

})
//# sourceMappingURL=tonepatternwords.js.3c7bdad583c324f91aeb.hot-update.js.map