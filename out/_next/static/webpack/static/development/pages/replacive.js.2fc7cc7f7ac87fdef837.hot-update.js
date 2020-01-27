webpackHotUpdate("static/development/pages/replacive.js",{

/***/ "./pages/replacive.tsx":
/*!*****************************!*\
  !*** ./pages/replacive.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jslv/Projects/keyin/pages/replacive.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ReplacivePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var nouns = ['chittwvaiy', 'chittwqoa', 'voannydang', 'dangzsixay'];
  var tia = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalInflectionAnalyzer"]();
  var lx = tia.analyze(input, new taipa__WEBPACK_IMPORTED_MODULE_1__["ThirdCombiningForm"](), new taipa__WEBPACK_IMPORTED_MODULE_1__["TransfixInflection"]());
  var items = lx.otherForms.map(function (x) {
    return x.literal;
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    list: "phrasalverbs",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("datalist", {
    id: "phrasalverbs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, nouns.map(function (item) {
    return __jsx("option", {
      key: item,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  })), items);
}

/* harmony default export */ __webpack_exports__["default"] = (ReplacivePage);

/***/ })

})
//# sourceMappingURL=replacive.js.2fc7cc7f7ac87fdef837.hot-update.js.map