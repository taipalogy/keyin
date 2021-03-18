webpackHotUpdate_N_E("pages/word",{

/***/ "./pages/word.tsx":
/*!************************!*\
  !*** ./pages/word.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taipa */ \"./node_modules/taipa/lib/index.js\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taipa/lib/unchange/metaplasm */ \"./node_modules/taipa/lib/unchange/metaplasm.js\");\n/* harmony import */ var taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/process */ \"./src/process.ts\");\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/word.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction WordPage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var tla = taipa__WEBPACK_IMPORTED_MODULE_1__[\"tonalLemmatizationAnalyzer\"];\n  var letters = Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"graphAnalyzeTonal\"])(input).map(function (x) {\n    return x.letter && x.letter.literal;\n  });\n  var soudnSeqs = Object(_src_process__WEBPACK_IMPORTED_MODULE_3__[\"getSoundSequences\"])(tla.morphAnalyze(input, new taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_2__[\"TonalUncombiningForms\"]([])).map(function (x) {\n    return x.sounds;\n  }));\n  var uncombiningSeqs = tla.morphAnalyze(input, new taipa_lib_unchange_metaplasm__WEBPACK_IMPORTED_MODULE_2__[\"TonalUncombiningForms\"]([])).map(function (it) {\n    return it.getForms().map(function (it) {\n      return it.literal;\n    }).join(', ');\n  }).filter(function (it) {\n    return it.length > 0;\n  });\n  var lxLemma = Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"lemmatize\"])(input);\n  var stems = Object(_src_process__WEBPACK_IMPORTED_MODULE_3__[\"getStems\"])(lxLemma.word.literal, lxLemma.getInflectionalEnding());\n  var inflectionalSuffixes = Object(_src_process__WEBPACK_IMPORTED_MODULE_3__[\"getInflectionalSuffixes\"])(lxLemma.getInflectionalEnding());\n  var lemmas = lxLemma.getLemmas().map(function (x) {\n    return x.literal;\n  });\n  var lxInflect = Object(taipa__WEBPACK_IMPORTED_MODULE_1__[\"inflectDesinence\"])(input);\n  var proceedingForms = lxInflect.getForms().map(function (x) {\n    return x.literal;\n  });\n\n  var handleChange = function handleChange(e) {\n    setInput(e.target.value);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, \"\\u62CD\\u7F85\\u99AC\\u5B57, \\u8F38\\u51FA lemmas, stem, inflectional suffix, proceeding forms, sound sequences, uncombining form sequences, \\u7532 letters\", __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input,\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  })), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }), \"lemmas\", lemmas.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }), \"stem\", stems.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }), \"inflectional suffix\", inflectionalSuffixes.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }), \"proceeding forms\", proceedingForms.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }), \"sound sequences with letter\", soudnSeqs.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }\n    }, x[0] + ' - ' + x[1]);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }), \"uncombining form sequences\", uncombiningSeqs.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }\n    }, x);\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), \"letters: \", letters.join(', '));\n}\n\n_s(WordPage, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = WordPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"WordPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd29yZC50c3g/YzdlNiJdLCJuYW1lcyI6WyJXb3JkUGFnZSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInRsYSIsInRvbmFsTGVtbWF0aXphdGlvbkFuYWx5emVyIiwibGV0dGVycyIsImdyYXBoQW5hbHl6ZVRvbmFsIiwibWFwIiwieCIsImxldHRlciIsImxpdGVyYWwiLCJzb3VkblNlcXMiLCJnZXRTb3VuZFNlcXVlbmNlcyIsIm1vcnBoQW5hbHl6ZSIsIlRvbmFsVW5jb21iaW5pbmdGb3JtcyIsInNvdW5kcyIsInVuY29tYmluaW5nU2VxcyIsIml0IiwiZ2V0Rm9ybXMiLCJqb2luIiwiZmlsdGVyIiwibGVuZ3RoIiwibHhMZW1tYSIsImxlbW1hdGl6ZSIsInN0ZW1zIiwiZ2V0U3RlbXMiLCJ3b3JkIiwiZ2V0SW5mbGVjdGlvbmFsRW5kaW5nIiwiaW5mbGVjdGlvbmFsU3VmZml4ZXMiLCJnZXRJbmZsZWN0aW9uYWxTdWZmaXhlcyIsImxlbW1hcyIsImdldExlbW1hcyIsImx4SW5mbGVjdCIsImluZmxlY3REZXNpbmVuY2UiLCJwcm9jZWVkaW5nRm9ybXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTs7QUFNQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUdsQixNQUFNQyxHQUFHLEdBQUdDLGdFQUFaO0FBRUEsTUFBTUMsT0FBTyxHQUFHQywrREFBaUIsQ0FBQ0wsS0FBRCxDQUFqQixDQUF5Qk0sR0FBekIsQ0FDZCxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxNQUFGLElBQVlELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxPQUF6QjtBQUFBLEdBRGEsQ0FB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QTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxDQUFMLENBRHlCO0FBQUEsR0FBMUIsQ0FuQkgsRUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixzQkF3QkcwQixlQUFlLENBQUMzQixHQUFoQixDQUFvQixVQUFBQyxDQUFDO0FBQUEsV0FDcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxDQUFMLENBRG9CO0FBQUEsR0FBckIsQ0F4QkgsRUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixpQ0E2QkdHLFNBQVMsQ0FBQ0osR0FBVixDQUFjLFVBQUFDLENBQUM7QUFBQSxXQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEtBQVAsR0FBZUEsQ0FBQyxDQUFDLENBQUQsQ0FBckIsQ0FEYztBQUFBLEdBQWYsQ0E3QkgsRUFnQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDRixnQ0FrQ0dRLGVBQWUsQ0FBQ1QsR0FBaEIsQ0FBb0IsVUFBQUMsQ0FBQztBQUFBLFdBQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsQ0FBTCxDQURvQjtBQUFBLEdBQXJCLENBbENILEVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQ0YsZUFzQ1lILE9BQU8sQ0FBQ2MsSUFBUixDQUFhLElBQWIsQ0F0Q1osQ0FERjtBQTBDRDs7R0E5RVFwQixROztLQUFBQSxRO0FBZ0ZNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3dvcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICB0b25hbExlbW1hdGl6YXRpb25BbmFseXplcixcbiAgbGVtbWF0aXplLFxuICBncmFwaEFuYWx5emVUb25hbCxcbiAgaW5mbGVjdERlc2luZW5jZSxcbn0gZnJvbSAndGFpcGEnO1xuaW1wb3J0IHsgVG9uYWxVbmNvbWJpbmluZ0Zvcm1zIH0gZnJvbSAndGFpcGEvbGliL3VuY2hhbmdlL21ldGFwbGFzbSc7XG5pbXBvcnQge1xuICBnZXRJbmZsZWN0aW9uYWxTdWZmaXhlcyxcbiAgZ2V0U3RlbXMsXG4gIGdldFNvdW5kU2VxdWVuY2VzLFxufSBmcm9tICcuLi9zcmMvcHJvY2Vzcyc7XG5cbmZ1bmN0aW9uIFdvcmRQYWdlKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB0bGEgPSB0b25hbExlbW1hdGl6YXRpb25BbmFseXplcjtcblxuICBjb25zdCBsZXR0ZXJzID0gZ3JhcGhBbmFseXplVG9uYWwoaW5wdXQpLm1hcChcbiAgICB4ID0+IHgubGV0dGVyICYmIHgubGV0dGVyLmxpdGVyYWxcbiAgKTtcblxuICBjb25zdCBzb3VkblNlcXMgPSBnZXRTb3VuZFNlcXVlbmNlcyhcbiAgICB0bGEubW9ycGhBbmFseXplKGlucHV0LCBuZXcgVG9uYWxVbmNvbWJpbmluZ0Zvcm1zKFtdKSkubWFwKHggPT4geC5zb3VuZHMpXG4gICk7XG4gIGNvbnN0IHVuY29tYmluaW5nU2VxcyA9IHRsYVxuICAgIC5tb3JwaEFuYWx5emUoaW5wdXQsIG5ldyBUb25hbFVuY29tYmluaW5nRm9ybXMoW10pKVxuICAgIC5tYXAoaXQgPT5cbiAgICAgIGl0XG4gICAgICAgIC5nZXRGb3JtcygpXG4gICAgICAgIC5tYXAoaXQgPT4gaXQubGl0ZXJhbClcbiAgICAgICAgLmpvaW4oJywgJylcbiAgICApXG4gICAgLmZpbHRlcihpdCA9PiBpdC5sZW5ndGggPiAwKTtcblxuICBjb25zdCBseExlbW1hID0gbGVtbWF0aXplKGlucHV0KTtcbiAgY29uc3Qgc3RlbXMgPSBnZXRTdGVtcyhseExlbW1hLndvcmQubGl0ZXJhbCwgbHhMZW1tYS5nZXRJbmZsZWN0aW9uYWxFbmRpbmcoKSk7XG4gIGNvbnN0IGluZmxlY3Rpb25hbFN1ZmZpeGVzID0gZ2V0SW5mbGVjdGlvbmFsU3VmZml4ZXMoXG4gICAgbHhMZW1tYS5nZXRJbmZsZWN0aW9uYWxFbmRpbmcoKVxuICApO1xuICBjb25zdCBsZW1tYXMgPSBseExlbW1hLmdldExlbW1hcygpLm1hcCh4ID0+IHgubGl0ZXJhbCk7XG5cbiAgY29uc3QgbHhJbmZsZWN0ID0gaW5mbGVjdERlc2luZW5jZShpbnB1dCk7XG4gIGNvbnN0IHByb2NlZWRpbmdGb3JtcyA9IGx4SW5mbGVjdC5nZXRGb3JtcygpLm1hcCh4ID0+IHgubGl0ZXJhbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIOaLjee+hemmrOWtlywg6Ly45Ye6IGxlbW1hcywgc3RlbSwgaW5mbGVjdGlvbmFsIHN1ZmZpeCwgcHJvY2VlZGluZyBmb3JtcyxcbiAgICAgIHNvdW5kIHNlcXVlbmNlcywgdW5jb21iaW5pbmcgZm9ybSBzZXF1ZW5jZXMsIOeUsiBsZXR0ZXJzXG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICBsZW1tYXNcbiAgICAgIHtsZW1tYXMubWFwKHggPT4gKFxuICAgICAgICA8bGk+e3h9PC9saT5cbiAgICAgICkpfVxuICAgICAgPGJyIC8+XG4gICAgICBzdGVtXG4gICAgICB7c3RlbXMubWFwKHggPT4gKFxuICAgICAgICA8bGk+e3h9PC9saT5cbiAgICAgICkpfVxuICAgICAgPGJyIC8+XG4gICAgICBpbmZsZWN0aW9uYWwgc3VmZml4XG4gICAgICB7aW5mbGVjdGlvbmFsU3VmZml4ZXMubWFwKHggPT4gKFxuICAgICAgICA8bGk+e3h9PC9saT5cbiAgICAgICkpfVxuICAgICAgPGJyIC8+XG4gICAgICBwcm9jZWVkaW5nIGZvcm1zXG4gICAgICB7cHJvY2VlZGluZ0Zvcm1zLm1hcCh4ID0+IChcbiAgICAgICAgPGxpPnt4fTwvbGk+XG4gICAgICApKX1cbiAgICAgIDxiciAvPlxuICAgICAgc291bmQgc2VxdWVuY2VzIHdpdGggbGV0dGVyXG4gICAgICB7c291ZG5TZXFzLm1hcCh4ID0+IChcbiAgICAgICAgPGxpPnt4WzBdICsgJyAtICcgKyB4WzFdfTwvbGk+XG4gICAgICApKX1cbiAgICAgIDxiciAvPlxuICAgICAgdW5jb21iaW5pbmcgZm9ybSBzZXF1ZW5jZXNcbiAgICAgIHt1bmNvbWJpbmluZ1NlcXMubWFwKHggPT4gKFxuICAgICAgICA8bGk+e3h9PC9saT5cbiAgICAgICkpfVxuICAgICAgPGJyIC8+XG4gICAgICBsZXR0ZXJzOiB7bGV0dGVycy5qb2luKCcsICcpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JkUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/word.tsx\n");

/***/ })

})