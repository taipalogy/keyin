webpackHotUpdate("static/development/pages/taikana.js",{

/***/ "./pages/taikana.tsx":
/*!***************************!*\
  !*** ./pages/taikana.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ \"./node_modules/taipa/lib/index.js\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/taikana.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction TaiKanaPage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var tokens = [];\n  var matchArr = input.match(/\\w+/g);\n\n  if (matchArr) {\n    matchArr.filter(function (it) {\n      return it != undefined;\n    }).map(function (it) {\n      return tokens.push(it);\n    });\n  }\n\n  var cli = new taipa__WEBPACK_IMPORTED_MODULE_1__[\"Client\"]();\n  var tas = tokens.map(function (it) {\n    return cli.processTonal(it);\n  });\n  var listOfSeqs = tas.map(function (it) {\n    return it.blockSequences.filter(function (it) {\n      return it.length > 0;\n    });\n  });\n\n  var handleChange = function handleChange(e) {\n    setInput(e.target.value);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, \"\\u62CD\\u7F85\\u99AC\\u5B57, \\u8F38\\u51FA\\u53F0\\u7063\\u8A9E\\u5047\\u540D\", __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input,\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), listOfSeqs.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, \" \", x, \" \");\n  }), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, listOfSeqs.map(function (y) {\n    return y[0];\n  }).join('')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    celled: true,\n    striped: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n    colSpan: \"9\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"\\u4E2D\\u8072\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].a.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, \"e\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"i\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"o\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, \"u\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"ur\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"or\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"ir\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \"er\")))));\n}\n\n_s(TaiKanaPage, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = TaiKanaPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaiKanaPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"TaiKanaPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90YWlrYW5hLnRzeD8yNThiIl0sIm5hbWVzIjpbIlRhaUthbmFQYWdlIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwidG9rZW5zIiwibWF0Y2hBcnIiLCJtYXRjaCIsImZpbHRlciIsIml0IiwidW5kZWZpbmVkIiwibWFwIiwicHVzaCIsImNsaSIsIkNsaWVudCIsInRhcyIsInByb2Nlc3NUb25hbCIsImxpc3RPZlNlcXMiLCJibG9ja1NlcXVlbmNlcyIsImxlbmd0aCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIngiLCJ5Iiwiam9pbiIsIlRvbmFsTGV0dGVyVGFncyIsImEiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ2RDLEtBRGM7QUFBQSxNQUNQQyxRQURPOztBQUdyQixNQUFNQyxNQUFnQixHQUFHLEVBQXpCO0FBRUEsTUFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUNJLEtBQU4sQ0FBWSxNQUFaLENBQWpCOztBQUNBLE1BQUlELFFBQUosRUFBYztBQUNaQSxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsSUFBSUMsU0FBVjtBQUFBLEtBQWxCLEVBQXVDQyxHQUF2QyxDQUEyQyxVQUFBRixFQUFFO0FBQUEsYUFBSUosTUFBTSxDQUFDTyxJQUFQLENBQVlILEVBQVosQ0FBSjtBQUFBLEtBQTdDO0FBQ0Q7O0FBRUQsTUFBTUksR0FBRyxHQUFHLElBQUlDLDRDQUFKLEVBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUdWLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUFGLEVBQUU7QUFBQSxXQUFJSSxHQUFHLENBQUNHLFlBQUosQ0FBaUJQLEVBQWpCLENBQUo7QUFBQSxHQUFi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T0UsTUFBQyx1REFBRCxDQUFPLElBQVA7QUFBWSxjQUFVLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFQRixFQVFFLE1BQUMsdURBQUQsQ0FBTyxJQUFQO0FBQVksY0FBVSxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBUkYsRUFTRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFZLGNBQVUsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRGLENBREYsQ0FQRixDQVZGLENBREY7QUFrQ0Q7O0dBdERRNUIsVzs7S0FBQUEsVztBQXdETUEsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy90YWlrYW5hLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCwgVG9uYWxMZXR0ZXJUYWdzIH0gZnJvbSAndGFpcGEnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZnVuY3Rpb24gVGFpS2FuYVBhZ2UoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdCBtYXRjaEFyciA9IGlucHV0Lm1hdGNoKC9cXHcrL2cpO1xuICBpZiAobWF0Y2hBcnIpIHtcbiAgICBtYXRjaEFyci5maWx0ZXIoaXQgPT4gaXQgIT0gdW5kZWZpbmVkKS5tYXAoaXQgPT4gdG9rZW5zLnB1c2goaXQpKTtcbiAgfVxuXG4gIGNvbnN0IGNsaSA9IG5ldyBDbGllbnQoKTtcbiAgY29uc3QgdGFzID0gdG9rZW5zLm1hcChpdCA9PiBjbGkucHJvY2Vzc1RvbmFsKGl0KSk7XG4gIGNvbnN0IGxpc3RPZlNlcXMgPSB0YXMubWFwKGl0ID0+XG4gICAgaXQuYmxvY2tTZXF1ZW5jZXMuZmlsdGVyKGl0ID0+IGl0Lmxlbmd0aCA+IDApXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIOaLjee+hemmrOWtlywg6Ly45Ye65Y+w54Gj6Kqe5YGH5ZCNXG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAge2xpc3RPZlNlcXMubWFwKHggPT4gKFxuICAgICAgICA8bGk+IHt4fSA8L2xpPlxuICAgICAgKSl9XG4gICAgICA8bGk+e2xpc3RPZlNlcXMubWFwKHkgPT4geVswXSkuam9pbignJyl9PC9saT5cbiAgICAgIDxUYWJsZSBjZWxsZWQgc3RyaXBlZD5cbiAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGwgY29sU3Bhbj1cIjlcIj7kuK3ogbI8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIDxUYWJsZS5Sb3cgY29sbGFwc2luZz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsIGNvbGxhcHNpbmc+e1RvbmFsTGV0dGVyVGFncy5hLnRvU3RyaW5nKCl9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGwgY29sbGFwc2luZz5lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGwgY29sbGFwc2luZz5pPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGwgY29sbGFwc2luZz5vPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGwgY29sbGFwc2luZz51PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGwgY29sbGFwc2luZz51cjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsIGNvbGxhcHNpbmc+b3I8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbCBjb2xsYXBzaW5nPmlyPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGwgY29sbGFwc2luZz5lcjwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFpS2FuYVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/taikana.tsx\n");

/***/ })

})