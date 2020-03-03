webpackHotUpdate("static/development/pages/prediction.js",{

/***/ "./pages/prediction.tsx":
/*!******************************!*\
  !*** ./pages/prediction.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jslv/Projects/keyin/pages/prediction.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PredictionPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var tla = new taipa__WEBPACK_IMPORTED_MODULE_1__["TonalLemmatizationAnalyzer"]();
  var prmptr = new taipa__WEBPACK_IMPORTED_MODULE_1__["Prediction"]();
  var gs = tla.graphAnalyze(input);
  var tuples = prmptr.predict(gs.map(function (x) {
    return x.letter;
  }).map(function (y) {
    return y.literal;
  }));
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA prediction", __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    value: input,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), "tuples", tuples.map(function (x) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, (x[0], x[1]));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (PredictionPage);

/***/ })

})
//# sourceMappingURL=prediction.js.952ff0c3c3dd14876983.hot-update.js.map