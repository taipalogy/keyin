webpackHotUpdate_N_E("pages/surfaceform",{

/***/ "./node_modules/taipa/lib/client.js":
false,

/***/ "./node_modules/taipa/lib/dparser/analyzer.js":
false,

/***/ "./node_modules/taipa/lib/dparser/creator.js":
false,

/***/ "./node_modules/taipa/lib/dparser/dictionary.js":
false,

/***/ "./node_modules/taipa/lib/dparser/inflector.js":
false,

/***/ "./node_modules/taipa/lib/dparser/inserter.js":
false,

/***/ "./node_modules/taipa/lib/dparser/keywords.js":
false,

/***/ "./node_modules/taipa/lib/dparser/lexeme.js":
false,

/***/ "./node_modules/taipa/lib/dparser/metaplasm.js":
false,

/***/ "./node_modules/taipa/lib/dparser/morpheme.js":
false,

/***/ "./node_modules/taipa/lib/dparser/mutator.js":
false,

/***/ "./node_modules/taipa/lib/dparser/phraseme.js":
false,

/***/ "./node_modules/taipa/lib/dparser/rules.js":
false,

/***/ "./node_modules/taipa/lib/dparser/symbols.js":
false,

/***/ "./node_modules/taipa/lib/dparser/visitor.js":
false,

/***/ "./node_modules/taipa/lib/hangul/analyzer.js":
false,

/***/ "./node_modules/taipa/lib/hangul/hangul.js":
false,

/***/ "./node_modules/taipa/lib/index.js":
false,

/***/ "./node_modules/taipa/lib/interface.js":
false,

/***/ "./node_modules/taipa/lib/kana/analyzer.js":
false,

/***/ "./node_modules/taipa/lib/kana/init.js":
false,

/***/ "./node_modules/taipa/lib/kana/kana.js":
false,

/***/ "./node_modules/taipa/lib/kana/lettergen.js":
false,

/***/ "./node_modules/taipa/lib/kana/morpheme.js":
false,

/***/ "./node_modules/taipa/lib/metaplasm.js":
false,

/***/ "./node_modules/taipa/lib/token.js":
false,

/***/ "./node_modules/taipa/lib/tonal/analyzer.js":
false,

/***/ "./node_modules/taipa/lib/tonal/collections.js":
false,

/***/ "./node_modules/taipa/lib/tonal/init.js":
false,

/***/ "./node_modules/taipa/lib/tonal/lemmatizer.js":
false,

/***/ "./node_modules/taipa/lib/tonal/lettergen.js":
false,

/***/ "./node_modules/taipa/lib/tonal/lexeme.js":
false,

/***/ "./node_modules/taipa/lib/tonal/matcher.js":
false,

/***/ "./node_modules/taipa/lib/tonal/metaplasm.js":
false,

/***/ "./node_modules/taipa/lib/tonal/morpheme.js":
false,

/***/ "./node_modules/taipa/lib/tonal/phraseme.js":
false,

/***/ "./node_modules/taipa/lib/tonal/prediction.js":
false,

/***/ "./node_modules/taipa/lib/tonal/syllabletable.js":
false,

/***/ "./node_modules/taipa/lib/tonal/tokenizer.js":
false,

/***/ "./node_modules/taipa/lib/tonal/version2.js":
false,

/***/ "./node_modules/taipa/lib/unit.js":
false,

/***/ "./pages/surfaceform.tsx":
/*!*******************************!*\
  !*** ./pages/surfaceform.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/process */ \"./src/process.ts\");\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/surfaceform.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction SurfaceFormPage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var handleChange = function handleChange(e) {\n    setInput(e.target.value);\n  };\n\n  var words = ['lakwex', 'hietfkhiw', 'kapfay', 'chapwex', 'cutfmiax', 'kutflatt'];\n  var lx = mutateFinalConsonantOfPrecedingSyllable(input);\n  var surfaceForm = Object(_src_process__WEBPACK_IMPORTED_MODULE_1__[\"getSurfaceForms\"])(lx.word.literal, lx.getForms().length > 0 && lx.getForms()[0] ? lx.getForms()[0].literal : '');\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, \"\\u62CD\\u7F85\\u99AC\\u5B57, \\u8F38\\u51FA\\u8868\\u9762\\u5F62\", __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    list: \"words\",\n    value: input,\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"datalist\", {\n    id: \"words\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, words.map(function (item) {\n    return __jsx(\"option\", {\n      key: item,\n      value: item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    });\n  }))), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), surfaceForm.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, x);\n  }));\n}\n\n_s(SurfaceFormPage, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = SurfaceFormPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SurfaceFormPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SurfaceFormPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VyZmFjZWZvcm0udHN4P2JhMjciXSwibmFtZXMiOlsiU3VyZmFjZUZvcm1QYWdlIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwid29yZHMiLCJseCIsIm11dGF0ZUZpbmFsQ29uc29uYW50T2ZQcmVjZWRpbmdTeWxsYWJsZSIsInN1cmZhY2VGb3JtIiwiZ2V0U3VyZmFjZUZvcm1zIiwid29yZCIsImxpdGVyYWwiLCJnZXRGb3JtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLGVBQVQsR0FBMkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxFQUFELENBRFQ7QUFBQSxNQUNsQkMsS0FEa0I7QUFBQSxNQUNYQyxRQURXOztBQUd6QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVQyxDQUFWLEVBQWtEO0FBQ3JFRixZQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLEtBQUssR0FBRyxDQUNaLFFBRFksRUFFWixXQUZZLEVBR1osUUFIWSxFQUlaLFNBSlksRUFLWixVQUxZLEVBTVosVUFOWSxDQUFkO0FBU0EsTUFBTUMsRUFBRSxHQUFHQyx1Q0FBdUMsQ0FBQ1IsS0FBRCxDQUFsRDtBQUNBLE1BQU1TLFdBQVcsR0FBR0Msb0VBQWUsQ0FDakNILEVBQUUsQ0FBQ0ksSUFBSCxDQUFRQyxPQUR5QixFQUVqQ0wsRUFBRSxDQUFDTSxRQUFILEdBQWNDLE1BQWQsR0FBdUIsQ0FBdkIsSUFBNEJQLEVBQUUsQ0FBQ00sUUFBSCxHQUFjLENBQWQsQ0FBNUIsR0FBK0NOLEVBQUUsQ0FBQ00sUUFBSCxHQUFjLENBQWQsRUFBaUJELE9BQWhFLEdBQTBFLEVBRnpDLENBQW5DO0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxPQUF4QjtBQUFnQyxTQUFLLEVBQUVaLEtBQXZDO0FBQThDLFlBQVEsRUFBRUUsWUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBVSxNQUFFLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dJLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNiO0FBQVEsU0FBRyxFQUFFQSxJQUFiO0FBQW1CLFdBQUssRUFBRUEsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURhO0FBQUEsR0FBZCxDQURILENBSEYsQ0FGRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlHUCxXQUFXLENBQUNNLEdBQVosQ0FBZ0IsVUFBQUUsQ0FBQztBQUFBLFdBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsQ0FBTCxDQURnQjtBQUFBLEdBQWpCLENBWkgsQ0FERjtBQWtCRDs7R0F4Q1FuQixlOztLQUFBQSxlO0FBMENNQSw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3N1cmZhY2Vmb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFN1cmZhY2VGb3JtcyB9IGZyb20gJy4uL3NyYy9wcm9jZXNzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbXV0YXRlRmluYWxPZlByZWNlZGluZ1N5bGxhYmxlIH0gZnJvbSAndGFpcGEnO1xuXG5mdW5jdGlvbiBTdXJmYWNlRm9ybVBhZ2UoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCB3b3JkcyA9IFtcbiAgICAnbGFrd2V4JyxcbiAgICAnaGlldGZraGl3JyxcbiAgICAna2FwZmF5JyxcbiAgICAnY2hhcHdleCcsXG4gICAgJ2N1dGZtaWF4JyxcbiAgICAna3V0ZmxhdHQnLFxuICBdO1xuXG4gIGNvbnN0IGx4ID0gbXV0YXRlRmluYWxDb25zb25hbnRPZlByZWNlZGluZ1N5bGxhYmxlKGlucHV0KTtcbiAgY29uc3Qgc3VyZmFjZUZvcm0gPSBnZXRTdXJmYWNlRm9ybXMoXG4gICAgbHgud29yZC5saXRlcmFsLFxuICAgIGx4LmdldEZvcm1zKCkubGVuZ3RoID4gMCAmJiBseC5nZXRGb3JtcygpWzBdID8gbHguZ2V0Rm9ybXMoKVswXS5saXRlcmFsIDogJydcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICDmi43nvoXppqzlrZcsIOi8uOWHuuihqOmdouW9olxuICAgICAgPGxhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbGlzdD1cIndvcmRzXCIgdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJ3b3Jkc1wiPlxuICAgICAgICAgIHt3b3Jkcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICB7c3VyZmFjZUZvcm0ubWFwKHggPT4gKFxuICAgICAgICA8bGk+e3h9PC9saT5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdXJmYWNlRm9ybVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/surfaceform.tsx\n");

/***/ })

})