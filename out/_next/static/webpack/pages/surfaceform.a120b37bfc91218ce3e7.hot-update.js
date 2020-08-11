webpackHotUpdate_N_E("pages/surfaceform",{

/***/ "./pages/surfaceform.tsx":
/*!*******************************!*\
  !*** ./pages/surfaceform.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/process */ \"./src/process.ts\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taipa */ \"./node_modules/taipa/lib/index.js\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/surfaceform.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction SurfaceFormPage() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var handleChange = function handleChange(e) {\n    setInput(e.target.value);\n  };\n\n  var words = ['lakwex', 'hietfkiw', 'qapfay', 'chapwex', 'cutfmiax', 'qutflatt'];\n  var lx = Object(taipa__WEBPACK_IMPORTED_MODULE_2__[\"mutateFinalOfPrecedingSyllable\"])(input);\n  var surfaceForm = Object(_src_process__WEBPACK_IMPORTED_MODULE_1__[\"getSurfaceForms\"])(lx.word.literal, lx.getForms().length > 0 && lx.getForms()[0] ? lx.getForms()[0].literal : '');\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, \"\\u62CD\\u7F85\\u99AC\\u5B57, \\u8F38\\u51FA\\u8868\\u9762\\u5F62\", __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    list: \"words\",\n    value: input,\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"datalist\", {\n    id: \"words\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, words.map(function (item) {\n    return __jsx(\"option\", {\n      key: item,\n      value: item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    });\n  }))), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), surfaceForm.map(function (x) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, x);\n  }));\n}\n\n_s(SurfaceFormPage, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = SurfaceFormPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SurfaceFormPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SurfaceFormPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VyZmFjZWZvcm0udHN4P2JhMjciXSwibmFtZXMiOlsiU3VyZmFjZUZvcm1QYWdlIiwidXNlU3RhdGUiLCJpbnB1dCIsInNldElucHV0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwid29yZHMiLCJseCIsIm11dGF0ZUZpbmFsT2ZQcmVjZWRpbmdTeWxsYWJsZSIsInN1cmZhY2VGb3JtIiwiZ2V0U3VyZmFjZUZvcm1zIiwid29yZCIsImxpdGVyYWwiLCJnZXRGb3JtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULEdBQTJCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsRUFBRCxDQURUO0FBQUEsTUFDbEJDLEtBRGtCO0FBQUEsTUFDWEMsUUFEVzs7QUFHekIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBVUMsQ0FBVixFQUFrRDtBQUNyRUYsWUFBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxLQUFLLEdBQUcsQ0FDWixRQURZLEVBRVosVUFGWSxFQUdaLFFBSFksRUFJWixTQUpZLEVBS1osVUFMWSxFQU1aLFVBTlksQ0FBZDtBQVNBLE1BQU1DLEVBQUUsR0FBR0MsNEVBQThCLENBQUNSLEtBQUQsQ0FBekM7QUFDQSxNQUFNUyxXQUFXLEdBQUdDLG9FQUFlLENBQ2pDSCxFQUFFLENBQUNJLElBQUgsQ0FBUUMsT0FEeUIsRUFFakNMLEVBQUUsQ0FBQ00sUUFBSCxHQUFjQyxNQUFkLEdBQXVCLENBQXZCLElBQTRCUCxFQUFFLENBQUNNLFFBQUgsR0FBYyxDQUFkLENBQTVCLEdBQStDTixFQUFFLENBQUNNLFFBQUgsR0FBYyxDQUFkLEVBQWlCRCxPQUFoRSxHQUEwRSxFQUZ6QyxDQUFuQztBQUtBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsT0FBeEI7QUFBZ0MsU0FBSyxFQUFFWixLQUF2QztBQUE4QyxZQUFRLEVBQUVFLFlBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQVUsTUFBRSxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsV0FDYjtBQUFRLFNBQUcsRUFBRUEsSUFBYjtBQUFtQixXQUFLLEVBQUVBLElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYTtBQUFBLEdBQWQsQ0FESCxDQUhGLENBRkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZR1AsV0FBVyxDQUFDTSxHQUFaLENBQWdCLFVBQUFFLENBQUM7QUFBQSxXQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLENBQUwsQ0FEZ0I7QUFBQSxHQUFqQixDQVpILENBREY7QUFrQkQ7O0dBeENRbkIsZTs7S0FBQUEsZTtBQTBDTUEsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zdXJmYWNlZm9ybS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdXJmYWNlRm9ybXMgfSBmcm9tICcuLi9zcmMvcHJvY2Vzcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG11dGF0ZUZpbmFsT2ZQcmVjZWRpbmdTeWxsYWJsZSB9IGZyb20gJ3RhaXBhJztcblxuZnVuY3Rpb24gU3VyZmFjZUZvcm1QYWdlKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgd29yZHMgPSBbXG4gICAgJ2xha3dleCcsXG4gICAgJ2hpZXRma2l3JyxcbiAgICAncWFwZmF5JyxcbiAgICAnY2hhcHdleCcsXG4gICAgJ2N1dGZtaWF4JyxcbiAgICAncXV0ZmxhdHQnLFxuICBdO1xuXG4gIGNvbnN0IGx4ID0gbXV0YXRlRmluYWxPZlByZWNlZGluZ1N5bGxhYmxlKGlucHV0KTtcbiAgY29uc3Qgc3VyZmFjZUZvcm0gPSBnZXRTdXJmYWNlRm9ybXMoXG4gICAgbHgud29yZC5saXRlcmFsLFxuICAgIGx4LmdldEZvcm1zKCkubGVuZ3RoID4gMCAmJiBseC5nZXRGb3JtcygpWzBdID8gbHguZ2V0Rm9ybXMoKVswXS5saXRlcmFsIDogJydcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICDmi43nvoXppqzlrZcsIOi8uOWHuuihqOmdouW9olxuICAgICAgPGxhYmVsPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbGlzdD1cIndvcmRzXCIgdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJ3b3Jkc1wiPlxuICAgICAgICAgIHt3b3Jkcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICB7c3VyZmFjZUZvcm0ubWFwKHggPT4gKFxuICAgICAgICA8bGk+e3h9PC9saT5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdXJmYWNlRm9ybVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/surfaceform.tsx\n");

/***/ })

})