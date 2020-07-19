webpackHotUpdate("static/development/pages/taikana.js",{

/***/ "./pages/taikana.tsx":
/*!***************************!*\
  !*** ./pages/taikana.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ \"./node_modules/taipa/lib/index.js\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/taikana.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction TaiKanaPage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var tokens = [];\n  var matchArr = input.match(/\\w+/g);\n\n  if (matchArr) {\n    matchArr.filter(function (it) {\n      return it != undefined;\n    }).map(function (it) {\n      return tokens.push(it);\n    });\n  }\n\n  var cli = new taipa__WEBPACK_IMPORTED_MODULE_1__[\"Client\"]();\n  var tas = tokens.map(function (it) {\n    return cli.processTonal(it);\n  });\n  var listOfSeqs = tas.map(function (it) {\n    return it.blockSequences.filter(function (it) {\n      return it.length > 0;\n    });\n  });\n\n  var handleChange = function handleChange(e) {\n    setInput(e.target.value);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, \"\\u62CD\\u7F85\\u99AC\\u5B57, \\u8F38\\u51FA\\u53F0\\u7063\\u8A9E\\u5047\\u540D\", __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input,\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), listOfSeqs.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, \" \", x, \" \");\n  }), __jsx(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, listOfSeqs.map(function (y) {\n    return y[0];\n  }).join('')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    celled: true,\n    striped: true,\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n    colSpan: \"9\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"\\u4E2D\\u8072\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].a.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].e.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].i.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].o.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].u.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].ur.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].or.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].ir.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].er.toString())))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    celled: true,\n    striped: true,\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"\\u9F3B\\u97F3\\u5316\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].nn.toString())))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], {\n    celled: true,\n    striped: true,\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Header, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].HeaderCell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, \"\\u8072\\u8ABF\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].f.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].y.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].w.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].x.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].z.toString()), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].xx.toString())))));\n}\n\n_s(TaiKanaPage, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = TaiKanaPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaiKanaPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"TaiKanaPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90YWlrYW5hLnRzeD8yNThiIl0sIm5hbWVzIjpbIlRhaUthbmFQYWdlIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwidG9rZW5zIiwibWF0Y2hBcnIiLCJtYXRjaCIsImZpbHRlciIsIml0IiwidW5kZWZpbmVkIiwibWFwIiwicHVzaCIsImNsaSIsIkNsaWVudCIsInRhcyIsInByb2Nlc3NUb25hbCIsImxpc3RPZlNlcXMiLCJibG9ja1NlcXVlbmNlcyIsImxlbmd0aCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIngiLCJ5Iiwiam9pbiIsIlRvbmFsTGV0dGVyVGFncyIsImEiLCJ0b1N0cmluZyIsImkiLCJvIiwidSIsInVyIiwib3IiLCJpciIsImVyIiwibm4iLCJmIiwidyIsInoiLCJ4eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ2RDLEtBRGM7QUFBQSxNQUNQQyxRQURPOztBQUdyQixNQUFNQyxNQUFnQixHQUFHLEVBQXpCO0FBRUEsTUFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUNJLEtBQU4sQ0FBWSxNQUFaLENBQWpCOztBQUNBLE1BQUlELFFBQUosRUFBYztBQUNaQSxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQUMsRUFBRTtBQUFBLGFBQUlBLEVBQUUsSUFBSUMsU0FBVjtBQUFBLEtBQWxCLEVBQXVDQyxHQUF2QyxDQUEyQyxVQUFBRixFQUFFO0FBQUEsYUFBSUosTUFBTSxDQUFDTyxJQUFQLENBQVlILEVBQVosQ0FBSjtBQUFBLEtBQTdDO0FBQ0Q7O0FBRUQsTUFBTUksR0FBRyxHQUFHLElBQUlDLDRDQUFKLEVBQVo7QUFDQSxNQUFNQyxHQUFHLEdBQUdWLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUFGLEVBQUU7QUFBQSxXQUFJSSxHQUFHLENBQUNHLFlBQUosQ0FBaUJQLEVBQWpCLENBQUo7QUFBQSxHQUFiLENBQVo7QUFDQSxNQUFNUSxVQUFVLEdBQUdGLEdBQUcsQ0FBQ0osR0FBSixDQUFRLFVBQUFGLEVBQUU7QUFBQSxXQUMzQkEsRUFBRSxDQUFDUyxjQUFILENBQWtCVixNQUFsQixDQUF5QixVQUFBQyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDVSxNQUFILEdBQVksQ0FBaEI7QUFBQSxLQUEzQixDQUQyQjtBQUFBLEdBQVYsQ0FBbkI7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBVUMsQ0FBVixFQUFrRDtBQUNyRWpCLFlBQVEsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxHQUZEOztBQUlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixTQUFLLEVBQUVwQixLQUExQjtBQUFpQyxZQUFRLEVBQUVpQixZQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FGRixFQU1HSCxVQUFVLENBQUNOLEdBQVgsQ0FBZSxVQUFBYSxDQUFDO0FBQUEsV0FDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQU1BLENBQU4sTUFEZTtBQUFBLEdBQWhCLENBTkgsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtQLFVBQVUsQ0FBQ04sR0FBWCxDQUFlLFVBQUFjLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUMsQ0FBRCxDQUFMO0FBQUEsR0FBaEIsRUFBMEJDLElBQTFCLENBQStCLEVBQS9CLENBQUwsQ0FURixFQVVFLE1BQUMsdURBQUQ7QUFBTyxVQUFNLE1BQWI7QUFBYyxXQUFPLE1BQXJCO0FBQXNCLGNBQVUsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQsQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELENBQU8sR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRCxDQUFPLFVBQVA7QUFBa0IsV0FBTyxFQUFDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERixDQURGLEVBT0UsTUFBQyx1REFBRCxDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFDLHFEQUFlLENBQUNDLENBQWhCLENBQWtCQyxRQUFsQixFQUFiLENBREYsRUFFRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLHFEQUFlLENBQUNOLENBQWhCLENBQWtCUSxRQUFsQixFQUFiLENBRkYsRUFHRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLHFEQUFlLENBQUNHLENBQWhCLENBQWtCRCxRQUFsQixFQUFiLENBSEYsRUFJRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLHFEQUFlLENBQUNJLENBQWhCLENBQWtCRixRQUFsQixFQUFiLENBSkYsRUFLRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLHFEQUFlLENBQUNILENBQWhCLENBQWtCSyxRQUFsQixFQUFiLENBSkYsRUFLRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLHFEQUFlLENBQUNhLENBQWhCLENBQWtCWCxRQUFsQixFQUFiLENBTEYsRUFNRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLHFEQUFlLENBQUNjLEVBQWhCLENBQW1CWixRQUFuQixFQUFiLENBTkYsQ0FERixDQVBGLENBNUNGLENBREY7QUFpRUQ7O0dBckZRNUIsVzs7S0FBQUEsVztBQXVGTUEsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy90YWlrYW5hLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCwgVG9uYWxMZXR0ZXJUYWdzIH0gZnJvbSAndGFpcGEnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZnVuY3Rpb24gVGFpS2FuYVBhZ2UoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdCBtYXRjaEFyciA9IGlucHV0Lm1hdGNoKC9cXHcrL2cpO1xuICBpZiAobWF0Y2hBcnIpIHtcbiAgICBtYXRjaEFyci5maWx0ZXIoaXQgPT4gaXQgIT0gdW5kZWZpbmVkKS5tYXAoaXQgPT4gdG9rZW5zLnB1c2goaXQpKTtcbiAgfVxuXG4gIGNvbnN0IGNsaSA9IG5ldyBDbGllbnQoKTtcbiAgY29uc3QgdGFzID0gdG9rZW5zLm1hcChpdCA9PiBjbGkucHJvY2Vzc1RvbmFsKGl0KSk7XG4gIGNvbnN0IGxpc3RPZlNlcXMgPSB0YXMubWFwKGl0ID0+XG4gICAgaXQuYmxvY2tTZXF1ZW5jZXMuZmlsdGVyKGl0ID0+IGl0Lmxlbmd0aCA+IDApXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIOaLjee+hemmrOWtlywg6Ly45Ye65Y+w54Gj6Kqe5YGH5ZCNXG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAge2xpc3RPZlNlcXMubWFwKHggPT4gKFxuICAgICAgICA8bGk+IHt4fSA8L2xpPlxuICAgICAgKSl9XG4gICAgICA8bGk+e2xpc3RPZlNlcXMubWFwKHkgPT4geVswXSkuam9pbignJyl9PC9saT5cbiAgICAgIDxUYWJsZSBjZWxsZWQgc3RyaXBlZCBjb2xsYXBzaW5nPlxuICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbCBjb2xTcGFuPVwiOVwiPuS4reiBsjwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5IZWFkZXI+XG5cbiAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntUb25hbExldHRlclRhZ3MuYS50b1N0cmluZygpfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntUb25hbExldHRlclRhZ3MuZS50b1N0cmluZygpfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntUb25hbExldHRlclRhZ3MuaS50b1N0cmluZygpfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntUb25hbExldHRlclRhZ3Muby50b1N0cmluZygpfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntUb25hbExldHRlclRhZ3MudS50b1N0cmluZygpfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntUb25hbExldHRlclRhZ3MudXIudG9TdHJpbmcoKX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57VG9uYWxMZXR0ZXJUYWdzLm9yLnRvU3RyaW5nKCl9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e1RvbmFsTGV0dGVyVGFncy5pci50b1N0cmluZygpfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPntUb25hbExldHRlclRhZ3MuZXIudG9TdHJpbmcoKX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgIDwvVGFibGUuQm9keT5cbiAgICAgIDwvVGFibGU+XG4gICAgICA8VGFibGUgY2VsbGVkIHN0cmlwZWQgY29sbGFwc2luZz5cbiAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+6by76Z+z5YyWPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8L1RhYmxlLkhlYWRlcj5cblxuICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e1RvbmFsTGV0dGVyVGFncy5ubi50b1N0cmluZygpfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICAgIDxUYWJsZSBjZWxsZWQgc3RyaXBlZCBjb2xsYXBzaW5nPlxuICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD7ogbLoqr88L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57VG9uYWxMZXR0ZXJUYWdzLmYudG9TdHJpbmcoKX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57VG9uYWxMZXR0ZXJUYWdzLnkudG9TdHJpbmcoKX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57VG9uYWxMZXR0ZXJUYWdzLncudG9TdHJpbmcoKX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57VG9uYWxMZXR0ZXJUYWdzLngudG9TdHJpbmcoKX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57VG9uYWxMZXR0ZXJUYWdzLnoudG9TdHJpbmcoKX08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57VG9uYWxMZXR0ZXJUYWdzLnh4LnRvU3RyaW5nKCl9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWlLYW5hUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/taikana.tsx\n");

/***/ })

})