webpackHotUpdate("static/development/pages/phrasalverbs.js",{

/***/ "./pages/phrasalverbs.tsx":
/*!********************************!*\
  !*** ./pages/phrasalverbs.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taipa_lib_dparser_analyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa/lib/dparser/analyzer */ "./node_modules/taipa/lib/dparser/analyzer.js");
/* harmony import */ var taipa_lib_dparser_analyzer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa_lib_dparser_analyzer__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jslv/Projects/keyin/pages/phrasalverbs.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PhrasalVerbPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var phrasalVerbs = [['koannw', 'diurh'], ['longw', 'diurh']];
  var matches = phrasalVerbs.filter(function (x) {
    return x[0] + x[1] === input;
  });
  var phinfl = new taipa_lib_dparser_analyzer__WEBPACK_IMPORTED_MODULE_1__["PhrasalInflectionAnalyzer"]();
  var fr1;

  if (matches) {
    fr1 = phinfl.analyzeTransitive(matches[0][0], matches[0][1]);
  }

  var items = [fr1];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA\u55AE\u8A9E", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    list: "phrasalverbs",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("datalist", {
    id: "phrasalverbs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, phrasalVerbs.map(function (x) {
    return __jsx("option", {
      key: x[0] + x[1],
      value: x[0] + ' ' + x[1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  })), items.map(function (x) {
    return __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, x.proceedingForms[0].literal, " ");
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PhrasalVerbPage);

/***/ })

})
//# sourceMappingURL=phrasalverbs.js.52cf2107e10c58a680d6.hot-update.js.map