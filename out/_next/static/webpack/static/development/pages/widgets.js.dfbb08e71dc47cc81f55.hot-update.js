webpackHotUpdate("static/development/pages/widgets.js",{

/***/ "./pages/widgets.tsx":
/*!***************************!*\
  !*** ./pages/widgets.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taipa */ \"./node_modules/taipa/lib/index.js\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _src_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/highlight */ \"./src/highlight.ts\");\n\n\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/widgets.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar wordsChang = [{\n  index: 0,\n  hanyjiz: '粽',\n  lurzmafjiz: 'changw'\n}, {\n  index: 1,\n  hanyjiz: '欉',\n  lurzmafjiz: 'changx'\n}];\nvar wordsItfditt = [{\n  index: 0,\n  hanyjiz: '一直',\n  lurzmafjiz: 'itfditt'\n}, {\n  index: 1,\n  hanyjiz: '',\n  lurzmafjiz: 'itfdittw'\n}, {\n  index: 2,\n  hanyjiz: '',\n  lurzmafjiz: 'itfditf'\n}]; // const wordsMizmix = [\n//   { index: 20, hanyjiz: '綿綿', lurzmafjiz: ['mizmix', 'mixxmix'] },\n// ];\n\nfunction WidgetsPage() {\n  _s();\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(function (state, newState) {\n    return _objectSpread(_objectSpread({}, state), newState);\n  }, {\n    inputZero: '',\n    inputOne: '',\n    inputThree: '',\n    inputFour: '',\n    inputFive: ''\n  }),\n      input = _useReducer[0],\n      setInput = _useReducer[1];\n\n  var handleChangeChang = function handleChangeChang(e) {\n    var name = e.target.name;\n    var value = e.target.value;\n    setInput(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value));\n  };\n\n  var handleChangeItfditt = function handleChangeItfditt(e) {\n    var name = e.target.name;\n    var value = e.target.value;\n    setInput(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value));\n  };\n\n  var cli = new taipa__WEBPACK_IMPORTED_MODULE_2__[\"Client\"]();\n  var groupChang = new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Group\"]();\n  groupChang.entries = [new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsChang[0].lurzmafjiz), new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsChang[1].lurzmafjiz)];\n  var hltChang = new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Highlighter\"](groupChang);\n  var hltChangZero = hltChang.getTarget(input.inputZero, wordsChang[0].index);\n  var hltChangOne = hltChang.getTarget(input.inputOne, wordsChang[1].index);\n  var groupItfditt = new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Group\"]();\n  groupItfditt.entries = [new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsItfditt[0].lurzmafjiz[0]), new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsChang[1].lurzmafjiz)];\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, \"widgets\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"], {\n    celled: true,\n    striped: true,\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, wordsChang[wordsChang[0].index].hanyjiz), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, wordsChang[wordsChang[1].index].hanyjiz)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, wordsChang[wordsChang[0].index].lurzmafjiz), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, wordsChang[wordsChang[1].index].lurzmafjiz)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, cli.processTonal(wordsChang[wordsChang[0].index].lurzmafjiz).blockSequences.filter(function (it) {\n    return it.length > 0;\n  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, cli.processTonal(wordsChang[wordsChang[1].index].lurzmafjiz).blockSequences.filter(function (it) {\n    return it.length > 0;\n  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 15\n    }\n  }, hltChangZero.target), hltChangZero.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }), hltChangZero.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputZero,\n    name: \"inputZero\",\n    onChange: handleChangeChang,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 15\n    }\n  }, hltChangOne.target), hltChangOne.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 15\n    }\n  }), hltChangOne.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputOne,\n    name: \"inputOne\",\n    onChange: handleChangeChang,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 15\n    }\n  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 15\n    }\n  }, hltChangZero.target), hltChangZero.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  }), hltChangZero.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputThree,\n    name: \"inputThree\",\n    onChange: handleChangeItfditt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 15\n    }\n  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 15\n    }\n  }, hltChangOne.target), hltChangOne.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 15\n    }\n  }), hltChangOne.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputFour,\n    name: \"inputFour\",\n    onChange: handleChangeItfditt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 15\n    }\n  }))))));\n}\n\n_s(WidgetsPage, \"H+SnnRko3PMiGZ7dokMOLWL7B5I=\");\n\n_c = WidgetsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WidgetsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"WidgetsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93aWRnZXRzLnRzeD9hM2M4Il0sIm5hbWVzIjpbIndvcmRzQ2hhbmciLCJpbmRleCIsImhhbnlqaXoiLCJsdXJ6bWFmaml6Iiwid29yZHNJdGZkaXR0IiwiV2lkZ2V0c1BhZ2UiLCJ1c2VSZWR1Y2VyIiwic3RhdGUiLCJuZXdTdGF0ZSIsImlucHV0WmVybyIsImlucHV0T25lIiwiaW5wdXRUaHJlZSIsImlucHV0Rm91ciIsImlucHV0Rml2ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJoYW5kbGVDaGFuZ2VDaGFuZyIsImUiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VJdGZkaXR0IiwiY2xpIiwiQ2xpZW50IiwiZ3JvdXBDaGFuZyIsIkdyb3VwIiwiZW50cmllcyIsIkVudHJ5IiwiaGx0Q2hhbmciLCJIaWdobGlnaHRlciIsImhsdENoYW5nWmVybyIsImdldFRhcmdldCIsImhsdENoYW5nT25lIiwiZ3JvdXBJdGZkaXR0IiwicHJvY2Vzc1RvbmFsIiwiYmxvY2tTZXF1ZW5jZXMiLCJmaWx0ZXIiLCJpdCIsImxlbmd0aCIsImNvbG9yIiwidGFpbCIsImhpbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFBRUMsT0FBSyxFQUFFLENBQVQ7QUFBWUMsU0FBTyxFQUFFLEdBQXJCO0FBQTBCQyxZQUFVLEVBQUU7QUFBdEMsQ0FEaUIsRUFFakI7QUFBRUYsT0FBSyxFQUFFLENBQVQ7QUFBWUMsU0FBTyxFQUFFLEdBQXJCO0FBQTBCQyxZQUFVLEVBQUU7QUFBdEMsQ0FGaUIsQ0FBbkI7QUFLQSxJQUFNQyxZQUFZLEdBQUcsQ0FDbkI7QUFDRUgsT0FBSyxFQUFFLENBRFQ7QUFFRUMsU0FBTyxFQUFFLElBRlg7QUFHRUMsWUFBVSxFQUFFO0FBSGQsQ0FEbUIsRUFNbkI7QUFBRUYsT0FBSyxFQUFFLENBQVQ7QUFBWUMsU0FBTyxFQUFFLEVBQXJCO0FBQXlCQyxZQUFVLEVBQUU7QUFBckMsQ0FObUIsRUFPbkI7QUFBRUYsT0FBSyxFQUFFLENBQVQ7QUFBWUMsU0FBTyxFQUFFLEVBQXJCO0FBQXlCQyxZQUFVLEVBQUU7QUFBckMsQ0FQbUIsQ0FBckIsQyxDQVVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxXQUFULEdBQXVCO0FBQUE7O0FBQUEsb0JBQ0tDLHdEQUFVLENBQ2xDLFVBQUNDLEtBQUQsRUFBYUMsUUFBYjtBQUFBLDJDQUFxQ0QsS0FBckMsR0FBK0NDLFFBQS9DO0FBQUEsR0FEa0MsRUFFbEM7QUFDRUMsYUFBUyxFQUFFLEVBRGI7QUFFRUMsWUFBUSxFQUFFLEVBRlo7QUFJRUMsY0FBVSxFQUFFLEVBSmQ7QUFLRUMsYUFBUyxFQUFFLEVBTGI7QUFNRUMsYUFBUyxFQUFFO0FBTmIsR0FGa0MsQ0FEZjtBQUFBLE1BQ2RDLEtBRGM7QUFBQSxNQUNQQyxRQURPOztBQWFyQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQVVDLENBQVYsRUFBa0Q7QUFDMUUsUUFBTUMsSUFBSSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsSUFBdEI7QUFDQSxRQUFNRSxLQUFLLEdBQUdILENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUF2QjtBQUNBTCxZQUFRLENBQUMsOEZBQUdHLElBQUosRUFBV0UsS0FBWCxFQUFSO0FBQ0QsR0FKRDs7QUFNQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQzFCSixDQUQwQixFQUUxQjtBQUNBLFFBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELElBQXRCO0FBQ0EsUUFBTUUsS0FBSyxHQUFHSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBdkI7QUFDQUwsWUFBUSxDQUFDLDhGQUFHRyxJQUFKLEVBQVdFLEtBQVgsRUFBUjtBQUNELEdBTkQ7O0FBUUEsTUFBTUUsR0FBRyxHQUFHLElBQUlDLDRDQUFKLEVBQVo7QUFFQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUMsb0RBQUosRUFBbkI7QUFDQUQsWUFBVSxDQUFDRSxPQUFYLEdBQXFCLENBQ25CLElBQUlDLG9EQUFKLENBQVUzQixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNHLFVBQXhCLENBRG1CLEVBRW5CLElBQUl3QixvREFBSixDQUFVM0IsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRyxVQUF4QixDQUZtQixDQUFyQjtBQUtBLE1BQU15QixRQUFRLEdBQUcsSUFBSUMsMERBQUosQ0FBZ0JMLFVBQWhCLENBQWpCO0FBQ0EsTUFBTU0sWUFBdUIsR0FBR0YsUUFBUSxDQUFDRyxTQUFULENBQzlCakIsS0FBSyxDQUFDTCxTQUR3QixFQUU5QlQsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUZnQixDQUFoQztBQUlBLE1BQU0rQixXQUFzQixHQUFHSixRQUFRLENBQUNHLFNBQVQsQ0FDN0JqQixLQUFLLENBQUNKLFFBRHVCLEVBRTdCVixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNDLEtBRmUsQ0FBL0I7QUFLQSxNQUFNZ0MsWUFBWSxHQUFHLElBQUlSLG9EQUFKLEVBQXJCO0FBQ0FRLGNBQVksQ0FBQ1AsT0FBYixHQUF1QixDQUNyQixJQUFJQyxvREFBSixDQUFVdkIsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQkQsVUFBaEIsQ0FBMkIsQ0FBM0IsQ0FBVixDQURxQixFQUVyQixJQUFJd0Isb0RBQUosQ0FBVTNCLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0csVUFBeEIsQ0FGcUIsQ0FBdkI7QUFLQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyx1REFBRDtBQUFPLFVBQU0sTUFBYjtBQUFjLFdBQU8sTUFBckI7QUFBc0IsY0FBVSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRCxDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFILFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFmLENBQVYsQ0FBZ0NDLE9BQTdDLENBREYsRUFFRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFmLENBQVYsQ0FBZ0NDLE9BQTdDLENBRkYsQ0FERixFQUtFLE1BQUMsdURBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFmLENBQVYsQ0FBZ0NFLFVBRG5DLENBREYsRUFJRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFmLENBQVYsQ0FBZ0NFLFVBRG5DLENBSkYsQ0FMRixFQWFFLE1BQUMsdURBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dtQixHQUFHLENBQ0RZLFlBREYsQ0FDZWxDLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFmLENBQVYsQ0FBZ0NFLFVBRC9DLEVBRUVn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QUFDLFlBSFA7QUFJRSxZQUFRLEVBQUVVLG1CQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBY0UsTUFBQyx1REFBRCxDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUVrQixXQUFLLEVBQUU7QUFBVCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0NQLFdBQVcsQ0FBQ2IsTUFBNUMsQ0FERixFQUVHYSxXQUFXLENBQUNRLElBRmYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJR1IsV0FBVyxDQUFDUyxJQUFaLENBQWlCQSxJQUpwQixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUUzQixLQUFLLENBQUNGLFNBRmY7QUFHRSxRQUFJLEVBQUMsV0FIUDtBQUlFLFlBQVEsRUFBRVMsbUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBZEYsQ0FyREYsQ0FERixDQUhGLENBREY7QUEwRkQ7O0dBN0lRaEIsVzs7S0FBQUEsVztBQStJTUEsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy93aWRnZXRzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ3RhaXBhJztcbmltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB7IEhpZ2hsaWdodGVyLCBHcm91cCwgRW50cnksIEhpZ2hsaWdodCB9IGZyb20gJy4uL3NyYy9oaWdobGlnaHQnO1xuXG5jb25zdCB3b3Jkc0NoYW5nID0gW1xuICB7IGluZGV4OiAwLCBoYW55aml6OiAn57K9JywgbHVyem1hZmppejogJ2NoYW5ndycgfSxcbiAgeyBpbmRleDogMSwgaGFueWppejogJ+asiScsIGx1cnptYWZqaXo6ICdjaGFuZ3gnIH0sXG5dO1xuXG5jb25zdCB3b3Jkc0l0ZmRpdHQgPSBbXG4gIHtcbiAgICBpbmRleDogMCxcbiAgICBoYW55aml6OiAn5LiA55u0JyxcbiAgICBsdXJ6bWFmaml6OiAnaXRmZGl0dCcsXG4gIH0sXG4gIHsgaW5kZXg6IDEsIGhhbnlqaXo6ICcnLCBsdXJ6bWFmaml6OiAnaXRmZGl0dHcnIH0sXG4gIHsgaW5kZXg6IDIsIGhhbnlqaXo6ICcnLCBsdXJ6bWFmaml6OiAnaXRmZGl0ZicgfSxcbl07XG5cbi8vIGNvbnN0IHdvcmRzTWl6bWl4ID0gW1xuLy8gICB7IGluZGV4OiAyMCwgaGFueWppejogJ+e2v+e2vycsIGx1cnptYWZqaXo6IFsnbWl6bWl4JywgJ21peHhtaXgnXSB9LFxuLy8gXTtcblxuZnVuY3Rpb24gV2lkZ2V0c1BhZ2UoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlUmVkdWNlcihcbiAgICAoc3RhdGU6IGFueSwgbmV3U3RhdGU6IGFueSkgPT4gKHsgLi4uc3RhdGUsIC4uLm5ld1N0YXRlIH0pLFxuICAgIHtcbiAgICAgIGlucHV0WmVybzogJycsXG4gICAgICBpbnB1dE9uZTogJycsXG5cbiAgICAgIGlucHV0VGhyZWU6ICcnLFxuICAgICAgaW5wdXRGb3VyOiAnJyxcbiAgICAgIGlucHV0Rml2ZTogJycsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNoYW5nID0gZnVuY3Rpb24gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dCh7IFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRmZGl0dCA9IGZ1bmN0aW9uIChcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApIHtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldElucHV0KHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBjbGkgPSBuZXcgQ2xpZW50KCk7XG5cbiAgY29uc3QgZ3JvdXBDaGFuZyA9IG5ldyBHcm91cCgpO1xuICBncm91cENoYW5nLmVudHJpZXMgPSBbXG4gICAgbmV3IEVudHJ5KHdvcmRzQ2hhbmdbMF0ubHVyem1hZmppeiksXG4gICAgbmV3IEVudHJ5KHdvcmRzQ2hhbmdbMV0ubHVyem1hZmppeiksXG4gIF07XG5cbiAgY29uc3QgaGx0Q2hhbmcgPSBuZXcgSGlnaGxpZ2h0ZXIoZ3JvdXBDaGFuZyk7XG4gIGNvbnN0IGhsdENoYW5nWmVybzogSGlnaGxpZ2h0ID0gaGx0Q2hhbmcuZ2V0VGFyZ2V0KFxuICAgIGlucHV0LmlucHV0WmVybyxcbiAgICB3b3Jkc0NoYW5nWzBdLmluZGV4XG4gICk7XG4gIGNvbnN0IGhsdENoYW5nT25lOiBIaWdobGlnaHQgPSBobHRDaGFuZy5nZXRUYXJnZXQoXG4gICAgaW5wdXQuaW5wdXRPbmUsXG4gICAgd29yZHNDaGFuZ1sxXS5pbmRleFxuICApO1xuXG4gIGNvbnN0IGdyb3VwSXRmZGl0dCA9IG5ldyBHcm91cCgpO1xuICBncm91cEl0ZmRpdHQuZW50cmllcyA9IFtcbiAgICBuZXcgRW50cnkod29yZHNJdGZkaXR0WzBdLmx1cnptYWZqaXpbMF0pLFxuICAgIG5ldyBFbnRyeSh3b3Jkc0NoYW5nWzFdLmx1cnptYWZqaXopLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHdpZGdldHNcbiAgICAgIDxiciAvPlxuICAgICAgPFRhYmxlIGNlbGxlZCBzdHJpcGVkIGNvbGxhcHNpbmc+XG4gICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57d29yZHNDaGFuZ1t3b3Jkc0NoYW5nWzBdLmluZGV4XS5oYW55aml6fTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPnt3b3Jkc0NoYW5nW3dvcmRzQ2hhbmdbMV0uaW5kZXhdLmhhbnlqaXp9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAge3dvcmRzQ2hhbmdbd29yZHNDaGFuZ1swXS5pbmRleF0ubHVyem1hZmppen1cbiAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICB7d29yZHNDaGFuZ1t3b3Jkc0NoYW5nWzFdLmluZGV4XS5sdXJ6bWFmaml6fVxuICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAge2NsaVxuICAgICAgICAgICAgICAgIC5wcm9jZXNzVG9uYWwod29yZHNDaGFuZ1t3b3Jkc0NoYW5nWzBdLmluZGV4XS5sdXJ6bWFmaml6KVxuICAgICAgICAgICAgICAgIC5ibG9ja1NlcXVlbmNlcy5maWx0ZXIoaXQgPT4gaXQubGVuZ3RoID4gMCl9XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAge2NsaVxuICAgICAgICAgICAgICAgIC5wcm9jZXNzVG9uYWwod29yZHNDaGFuZ1t3b3Jkc0NoYW5nWzFdLmluZGV4XS5sdXJ6bWFmaml6KVxuICAgICAgICAgICAgICAgIC5ibG9ja1NlcXVlbmNlcy5maWx0ZXIoaXQgPT4gaXQubGVuZ3RoID4gMCl9XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2hsdENoYW5nWmVyby50YXJnZXR9PC90ZXh0PlxuICAgICAgICAgICAgICB7aGx0Q2hhbmdaZXJvLnRhaWx9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7aGx0Q2hhbmdaZXJvLmhpbnQuaGludH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQuaW5wdXRaZXJvfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbnB1dFplcm9cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDaGFuZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2hsdENoYW5nT25lLnRhcmdldH08L3RleHQ+XG4gICAgICAgICAgICAgIHtobHRDaGFuZ09uZS50YWlsfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2hsdENoYW5nT25lLmhpbnQuaGludH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQuaW5wdXRPbmV9XG4gICAgICAgICAgICAgICAgbmFtZT1cImlucHV0T25lXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ2hhbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2hsdENoYW5nWmVyby50YXJnZXR9PC90ZXh0PlxuICAgICAgICAgICAgICB7aGx0Q2hhbmdaZXJvLnRhaWx9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7aGx0Q2hhbmdaZXJvLmhpbnQuaGludH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQuaW5wdXRUaHJlZX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiaW5wdXRUaHJlZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUl0ZmRpdHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntobHRDaGFuZ09uZS50YXJnZXR9PC90ZXh0PlxuICAgICAgICAgICAgICB7aGx0Q2hhbmdPbmUudGFpbH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtobHRDaGFuZ09uZS5oaW50LmhpbnR9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LmlucHV0Rm91cn1cbiAgICAgICAgICAgICAgICBuYW1lPVwiaW5wdXRGb3VyXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSXRmZGl0dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0c1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/widgets.tsx\n");

/***/ })

})