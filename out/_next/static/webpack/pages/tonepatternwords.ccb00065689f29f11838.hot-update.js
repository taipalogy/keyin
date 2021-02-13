webpackHotUpdate_N_E("pages/tonepatternwords",{

/***/ "./pages/tonepatternwords.tsx":
/*!************************************!*\
  !*** ./pages/tonepatternwords.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ \"./node_modules/taipa/lib/index.js\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/tonepatternwords.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction TonePatternWordsPage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var handleChange = function handleChange(e) {\n    setInput(e.target.value);\n  };\n\n  var mapTonal = new Map().set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].f, 1).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].y, 2).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].w, 3).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].x, 5).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].z, 7).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].xx, 9);\n  var mapFinal = new Map().set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].p, 4).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].t, 4).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].k, 4).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].h, 4).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].pp, 8).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].tt, 8).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].kk, 8).set(taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalLetterTags\"].hh, 8);\n  var tia = taipa__WEBPACK_IMPORTED_MODULE_1__[\"tonalInflectionAnalyzer\"];\n  var tokens = [];\n\n  if (input) {\n    tokens = input.split(' ');\n  }\n\n  var items = [];\n\n  if (tokens.length > 0) {\n    var ls1 = tokens.map(function (it) {\n      return tia.lexAnalyze(it, new taipa__WEBPACK_IMPORTED_MODULE_1__[\"TonalDesinenceInflection\"]());\n    });\n    items = ls1.map(function (it) {\n      return mapTonal.has(it.getInflectionalEnding().toString()) ? mapTonal.get(it.getInflectionalEnding().toString()) : mapFinal.has(it.getAllomorphicEnding().toString()) ? mapFinal.get(it.getAllomorphicEnding().toString()) : 1;\n    });\n  }\n\n  var numArray = [];\n\n  if (tokens.length == 1) {\n    numArray.push(Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"getToneEndingNumber\"])(tokens[0]));\n  } else if (tokens.length == 2) {\n    numArray = Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"getToneEndingNumbersTwo\"])(tokens[0], tokens[1]);\n  } else if (tokens.length == 3) {\n    numArray = Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"getToneEndingNumbersThree\"])(tokens[0], tokens[1], tokens[2]);\n  } else if (tokens.length >= 4) {\n    tokens.map(function (it) {\n      return numArray.push(Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"getToneEndingNumber\"])(it));\n    });\n  }\n\n  var phrases = ['ciet tngh', 'hoz guaz', 'kongy aw', 'giurx ez', 'chongx cut khih', 'chau laiz chau khiw'];\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, \"\\u62CD\\u7F85\\u99AC\\u5B57, \\u8F38\\u51FA\\u8072\\u8ABF\\u6A21\\u5F0F\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    list: \"entries\",\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  })), __jsx(\"datalist\", {\n    id: \"entries\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, phrases.map(function (it) {\n    return __jsx(\"option\", {\n      key: it,\n      value: it,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }\n    });\n  })), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }), items, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), numArray);\n}\n\n_s(TonePatternWordsPage, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = TonePatternWordsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TonePatternWordsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"TonePatternWordsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9uZXBhdHRlcm53b3Jkcy50c3g/ODQ5ZSJdLCJuYW1lcyI6WyJUb25lUGF0dGVybldvcmRzUGFnZSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcFRvbmFsIiwiTWFwIiwic2V0IiwiVG9uYWxMZXR0ZXJUYWdzIiwiZiIsInkiLCJ3IiwieCIsInoiLCJ4eCIsIm1hcEZpbmFsIiwicCIsInQiLCJrIiwiaCIsInBwIiwidHQiLCJrayIsImhoIiwidGlhIiwidG9uYWxJbmZsZWN0aW9uQW5hbHl6ZXIiLCJ0b2tlbnMiLCJzcGxpdCIsIml0ZW1zIiwibGVuZ3RoIiwibHMxIiwibWFwIiwiaXQiLCJsZXhBbmFseXplIiwiVG9uYWxEZXNpbmVuY2VJbmZsZWN0aW9uIiwiaGFzIiwiZ2V0SW5mbGVjdGlvbmFsRW5kaW5nIiwidG9TdHJpbmciLCJnZXQiLCJnZXRBbGxvbW9ycGhpY0VuZGluZyIsIm51bUFycmF5IiwicHVzaCIsImdldFRvbmVFbmRpbmdOdW1iZXIiLCJnZXRUb25lRW5kaW5nTnVtYmVyc1R3byIsImdldFRvbmVFbmRpbmdOdW1iZXJzVGhyZWUiLCJwaHJhc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFTQSxTQUFTQSxvQkFBVCxHQUFnQztBQUFBOztBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFDLEVBQUQsQ0FESjtBQUFBLE1BQ3ZCQyxLQUR1QjtBQUFBLE1BQ2hCQyxRQURnQjs7QUFHOUIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBVUMsQ0FBVixFQUFrRDtBQUNyRUYsWUFBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsR0FBSixHQUNkQyxHQURjLENBQ1ZDLHFEQUFlLENBQUNDLENBRE4s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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgdG9uYWxJbmZsZWN0aW9uQW5hbHl6ZXIsXG4gIFRvbmFsTGV0dGVyVGFncyxcbiAgVG9uYWxEZXNpbmVuY2VJbmZsZWN0aW9uLFxuICBnZXRUb25lRW5kaW5nTnVtYmVyc1R3byxcbiAgZ2V0VG9uZUVuZGluZ051bWJlcnNUaHJlZSxcbiAgZ2V0VG9uZUVuZGluZ051bWJlcixcbn0gZnJvbSAndGFpcGEnO1xuXG5mdW5jdGlvbiBUb25lUGF0dGVybldvcmRzUGFnZSgpIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IG1hcFRvbmFsID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuICAgIC5zZXQoVG9uYWxMZXR0ZXJUYWdzLmYsIDEpXG4gICAgLnNldChUb25hbExldHRlclRhZ3MueSwgMilcbiAgICAuc2V0KFRvbmFsTGV0dGVyVGFncy53LCAzKVxuICAgIC5zZXQoVG9uYWxMZXR0ZXJUYWdzLngsIDUpXG4gICAgLnNldChUb25hbExldHRlclRhZ3MueiwgNylcbiAgICAuc2V0KFRvbmFsTGV0dGVyVGFncy54eCwgOSk7XG5cbiAgY29uc3QgbWFwRmluYWwgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gICAgLnNldChUb25hbExldHRlclRhZ3MucCwgNClcbiAgICAuc2V0KFRvbmFsTGV0dGVyVGFncy50LCA0KVxuICAgIC5zZXQoVG9uYWxMZXR0ZXJUYWdzLmssIDQpXG4gICAgLnNldChUb25hbExldHRlclRhZ3MuaCwgNClcbiAgICAuc2V0KFRvbmFsTGV0dGVyVGFncy5wcCwgOClcbiAgICAuc2V0KFRvbmFsTGV0dGVyVGFncy50dCwgOClcbiAgICAuc2V0KFRvbmFsTGV0dGVyVGFncy5raywgOClcbiAgICAuc2V0KFRvbmFsTGV0dGVyVGFncy5oaCwgOCk7XG5cbiAgY29uc3QgdGlhID0gdG9uYWxJbmZsZWN0aW9uQW5hbHl6ZXI7XG4gIGxldCB0b2tlbnM6IHN0cmluZ1tdID0gW107XG4gIGlmIChpbnB1dCkge1xuICAgIHRva2VucyA9IGlucHV0LnNwbGl0KCcgJyk7XG4gIH1cbiAgbGV0IGl0ZW1zOiAobnVtYmVyIHwgdW5kZWZpbmVkKVtdID0gW107XG4gIGlmICh0b2tlbnMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxzMSA9IHRva2Vucy5tYXAoaXQgPT5cbiAgICAgIHRpYS5sZXhBbmFseXplKGl0LCBuZXcgVG9uYWxEZXNpbmVuY2VJbmZsZWN0aW9uKCkpXG4gICAgKTtcbiAgICBpdGVtcyA9IGxzMS5tYXAoaXQgPT5cbiAgICAgIG1hcFRvbmFsLmhhcyhpdC5nZXRJbmZsZWN0aW9uYWxFbmRpbmcoKS50b1N0cmluZygpKVxuICAgICAgICA/IG1hcFRvbmFsLmdldChpdC5nZXRJbmZsZWN0aW9uYWxFbmRpbmcoKS50b1N0cmluZygpKVxuICAgICAgICA6IG1hcEZpbmFsLmhhcyhpdC5nZXRBbGxvbW9ycGhpY0VuZGluZygpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgPyBtYXBGaW5hbC5nZXQoaXQuZ2V0QWxsb21vcnBoaWNFbmRpbmcoKS50b1N0cmluZygpKVxuICAgICAgICAgIDogMVxuICAgICk7XG4gIH1cblxuICBsZXQgbnVtQXJyYXk6IG51bWJlciBbXSA9IFtdO1xuICBpZih0b2tlbnMubGVuZ3RoID09IDEpIHtcbiAgICBudW1BcnJheS5wdXNoKGdldFRvbmVFbmRpbmdOdW1iZXIodG9rZW5zWzBdKSk7XG4gIH0gZWxzZSBpZih0b2tlbnMubGVuZ3RoID09IDIpIHtcbiAgICBudW1BcnJheSA9IGdldFRvbmVFbmRpbmdOdW1iZXJzVHdvKHRva2Vuc1swXSwgdG9rZW5zWzFdKTtcbiAgfSBlbHNlIGlmKHRva2Vucy5sZW5ndGggPT0gMykge1xuICAgIG51bUFycmF5ID0gZ2V0VG9uZUVuZGluZ051bWJlcnNUaHJlZSh0b2tlbnNbMF0sIHRva2Vuc1sxXSwgdG9rZW5zWzJdKTtcbiAgfSBlbHNlIGlmKHRva2Vucy5sZW5ndGggPj0gNCkge1xuICAgIHRva2Vucy5tYXAoaXQgPT4gbnVtQXJyYXkucHVzaChnZXRUb25lRW5kaW5nTnVtYmVyKGl0KSkpO1xuICB9XG5cbiAgY29uc3QgcGhyYXNlcyA9IFtcbiAgICAnY2lldCB0bmdoJyxcbiAgICAnaG96IGd1YXonLFxuICAgICdrb25neSBhdycsXG4gICAgJ2dpdXJ4IGV6JyxcbiAgICAnY2hvbmd4IGN1dCBraGloJyxcbiAgICAnY2hhdSBsYWl6IGNoYXUga2hpdycsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPlxuICAgICAgICDmi43nvoXppqzlrZcsIOi8uOWHuuiBsuiqv+aooeW8j1xuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbGlzdD1cImVudHJpZXNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxkYXRhbGlzdCBpZD1cImVudHJpZXNcIj5cbiAgICAgICAge3BocmFzZXMubWFwKGl0ID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17aXR9IHZhbHVlPXtpdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2RhdGFsaXN0PlxuICAgICAgPGJyLz5cbiAgICAgIHtpdGVtc31cbiAgICAgIDxici8+XG4gICAgICB7bnVtQXJyYXl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvbmVQYXR0ZXJuV29yZHNQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tonepatternwords.tsx\n");

/***/ })

})