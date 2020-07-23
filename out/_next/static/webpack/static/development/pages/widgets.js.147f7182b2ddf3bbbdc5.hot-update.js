webpackHotUpdate("static/development/pages/widgets.js",{

/***/ "./pages/widgets.tsx":
/*!***************************!*\
  !*** ./pages/widgets.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taipa */ \"./node_modules/taipa/lib/index.js\");\n/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _src_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/highlight */ \"./src/highlight.ts\");\n\n\nvar _jsxFileName = \"/Users/jslv/Projects/keyin/pages/widgets.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar wordsChang = [{\n  index: 0,\n  hanyjiz: '粽',\n  lurzmafjiz: 'changw'\n}, {\n  index: 1,\n  hanyjiz: '欉',\n  lurzmafjiz: 'changx'\n}];\nvar wordsItfditt = [{\n  index: 0,\n  hanyjiz: '一直',\n  lurzmafjiz: 'itfditt'\n}, {\n  index: 1,\n  hanyjiz: '',\n  lurzmafjiz: 'itfdittw'\n}, {\n  index: 2,\n  hanyjiz: '',\n  lurzmafjiz: 'itfditf'\n}]; // const wordsMizmix = [\n//   { index: 20, hanyjiz: '綿綿', lurzmafjiz: ['mizmix', 'mixxmix'] },\n// ];\n\nfunction WidgetsPage() {\n  _s();\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(function (state, newState) {\n    return _objectSpread(_objectSpread({}, state), newState);\n  }, {\n    inputZero: '',\n    inputOne: '',\n    inputTen: '',\n    inputEleven: '',\n    inputTwelve: ''\n  }),\n      input = _useReducer[0],\n      setInput = _useReducer[1];\n\n  var handleChangeChang = function handleChangeChang(e) {\n    var name = e.target.name;\n    var value = e.target.value;\n    setInput(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value));\n  };\n\n  var handleChangeItfditt = function handleChangeItfditt(e) {\n    var name = e.target.name;\n    var value = e.target.value;\n    setInput(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value));\n  };\n\n  var cli = new taipa__WEBPACK_IMPORTED_MODULE_2__[\"Client\"]();\n  var groupChang = new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Group\"]();\n  groupChang.entries = [new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsChang[0].lurzmafjiz), new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsChang[1].lurzmafjiz)];\n  var hltChang = new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Highlighter\"](groupChang);\n  var hltChangZero = hltChang.getTarget(input.inputZero, wordsChang[0].index);\n  var hltChangOne = hltChang.getTarget(input.inputOne, wordsChang[1].index);\n  var groupItfditt = new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Group\"]();\n  groupItfditt.entries = [new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsItfditt[0].lurzmafjiz), new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsItfditt[1].lurzmafjiz), new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Entry\"](wordsItfditt[2].lurzmafjiz)];\n  var hltItfditt = new _src_highlight__WEBPACK_IMPORTED_MODULE_4__[\"Highlighter\"](groupItfditt);\n  var hltItfdittThree = hltItfditt.getTarget(input.inputTen, wordsItfditt[0].index);\n  var hltItfdittEleven = hltItfditt.getTarget(input.inputEleven, wordsItfditt[1].index);\n  var hltItfdittTwelve = hltItfditt.getTarget(input.inputTwelve, wordsItfditt[2].index);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, \"widgets\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"], {\n    celled: true,\n    striped: true,\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  }, wordsChang[wordsChang[0].index].hanyjiz), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }\n  }, wordsChang[wordsChang[1].index].hanyjiz)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, wordsChang[wordsChang[0].index].lurzmafjiz), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, wordsChang[wordsChang[1].index].lurzmafjiz)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, cli.processTonal(wordsChang[wordsChang[0].index].lurzmafjiz).blockSequences.filter(function (it) {\n    return it.length > 0;\n  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, cli.processTonal(wordsChang[wordsChang[1].index].lurzmafjiz).blockSequences.filter(function (it) {\n    return it.length > 0;\n  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 15\n    }\n  }, hltChangZero.target), hltChangZero.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 15\n    }\n  }), hltChangZero.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputZero,\n    name: \"inputZero\",\n    onChange: handleChangeChang,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 15\n    }\n  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 15\n    }\n  }, hltChangOne.target), hltChangOne.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 15\n    }\n  }), hltChangOne.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputOne,\n    name: \"inputOne\",\n    onChange: handleChangeChang,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 15\n    }\n  }))))), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"], {\n    celled: true,\n    striped: true,\n    collapsing: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Body, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }, wordsItfditt[wordsItfditt[0].index].hanyjiz)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 15\n    }\n  }, hltItfdittThree.target), hltItfdittThree.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 15\n    }\n  }), hltItfdittThree.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputTen,\n    name: \"inputTen\",\n    onChange: handleChangeItfditt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 15\n    }\n  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 15\n    }\n  }, hltItfdittEleven.target), hltItfdittEleven.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 15\n    }\n  }), hltItfdittEleven.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputEleven,\n    name: \"inputEleven\",\n    onChange: handleChangeItfditt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 15\n    }\n  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 11\n    }\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 190,\n      columnNumber: 13\n    }\n  }, __jsx(\"text\", {\n    style: {\n      color: 'red'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 15\n    }\n  }, hltItfdittTwelve.target), hltItfdittTwelve.tail, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 193,\n      columnNumber: 15\n    }\n  }), hltItfdittTwelve.hint.hint, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 15\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    value: input.inputTwelve,\n    name: \"inputTwelve\",\n    onChange: handleChangeItfditt,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 196,\n      columnNumber: 15\n    }\n  }))))));\n}\n\n_s(WidgetsPage, \"75Ouhe27yWu1jj6XCb3fEHc/2ro=\");\n\n_c = WidgetsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WidgetsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"WidgetsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93aWRnZXRzLnRzeD9hM2M4Il0sIm5hbWVzIjpbIndvcmRzQ2hhbmciLCJpbmRleCIsImhhbnlqaXoiLCJsdXJ6bWFmaml6Iiwid29yZHNJdGZkaXR0IiwiV2lkZ2V0c1BhZ2UiLCJ1c2VSZWR1Y2VyIiwic3RhdGUiLCJuZXdTdGF0ZSIsImlucHV0WmVybyIsImlucHV0T25lIiwiaW5wdXRUZW4iLCJpbnB1dEVsZXZlbiIsImlucHV0VHdlbHZlIiwiaW5wdXQiLCJzZXRJbnB1dCIsImhhbmRsZUNoYW5nZUNoYW5nIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZUl0ZmRpdHQiLCJjbGkiLCJDbGllbnQiLCJncm91cENoYW5nIiwiR3JvdXAiLCJlbnRyaWVzIiwiRW50cnkiLCJobHRDaGFuZyIsIkhpZ2hsaWdodGVyIiwiaGx0Q2hhbmdaZXJvIiwiZ2V0VGFyZ2V0IiwiaGx0Q2hhbmdPbmUiLCJncm91cEl0ZmRpdHQiLCJobHRJdGZkaXR0IiwiaGx0SXRmZGl0dFRocmVlIiwiaGx0SXRmZGl0dEVsZXZlbiIsImhsdEl0ZmRpdHRUd2VsdmUiLCJwcm9jZXNzVG9uYWwiLCJibG9ja1NlcXVlbmNlcyIsImZpbHRlciIsIml0IiwibGVuZ3RoIiwiY29sb3IiLCJ0YWlsIiwiaGludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUFFQyxPQUFLLEVBQUUsQ0FBVDtBQUFZQyxTQUFPLEVBQUUsR0FBckI7QUFBMEJDLFlBQVUsRUFBRTtBQUF0QyxDQURpQixFQUVqQjtBQUFFRixPQUFLLEVBQUUsQ0FBVDtBQUFZQyxTQUFPLEVBQUUsR0FBckI7QUFBMEJDLFlBQVUsRUFBRTtBQUF0QyxDQUZpQixDQUFuQjtBQUtBLElBQU1DLFlBQVksR0FBRyxDQUNuQjtBQUNFSCxPQUFLLEVBQUUsQ0FEVDtBQUVFQyxT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Z0IsQ0FBQ08sSUFGcEIsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJR1AsZ0JBQWdCLENBQUNRLElBQWpCLENBQXNCQSxJQUp6QixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxTQUFLLEVBQUUvQixLQUFLLENBQUNELFdBRmY7QUFHRSxRQUFJLEVBQUMsYUFIUDtBQUlFLFlBQVEsRUFBRVEsbUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FwQ0YsQ0FERixDQTVERixDQURGO0FBcUhEOztHQXZMUWhCLFc7O0tBQUFBLFc7QUF5TE1BLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvd2lkZ2V0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICd0YWlwYSc7XG5pbXBvcnQgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgeyBIaWdobGlnaHRlciwgR3JvdXAsIEVudHJ5LCBIaWdobGlnaHQgfSBmcm9tICcuLi9zcmMvaGlnaGxpZ2h0JztcblxuY29uc3Qgd29yZHNDaGFuZyA9IFtcbiAgeyBpbmRleDogMCwgaGFueWppejogJ+eyvScsIGx1cnptYWZqaXo6ICdjaGFuZ3cnIH0sXG4gIHsgaW5kZXg6IDEsIGhhbnlqaXo6ICfmrIknLCBsdXJ6bWFmaml6OiAnY2hhbmd4JyB9LFxuXTtcblxuY29uc3Qgd29yZHNJdGZkaXR0ID0gW1xuICB7XG4gICAgaW5kZXg6IDAsXG4gICAgaGFueWppejogJ+S4gOebtCcsXG4gICAgbHVyem1hZmppejogJ2l0ZmRpdHQnLFxuICB9LFxuICB7IGluZGV4OiAxLCBoYW55aml6OiAnJywgbHVyem1hZmppejogJ2l0ZmRpdHR3JyB9LFxuICB7IGluZGV4OiAyLCBoYW55aml6OiAnJywgbHVyem1hZmppejogJ2l0ZmRpdGYnIH0sXG5dO1xuXG4vLyBjb25zdCB3b3Jkc01pem1peCA9IFtcbi8vICAgeyBpbmRleDogMjAsIGhhbnlqaXo6ICfntr/ntr8nLCBsdXJ6bWFmaml6OiBbJ21pem1peCcsICdtaXh4bWl4J10gfSxcbi8vIF07XG5cbmZ1bmN0aW9uIFdpZGdldHNQYWdlKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVJlZHVjZXIoXG4gICAgKHN0YXRlOiBhbnksIG5ld1N0YXRlOiBhbnkpID0+ICh7IC4uLnN0YXRlLCAuLi5uZXdTdGF0ZSB9KSxcbiAgICB7XG4gICAgICBpbnB1dFplcm86ICcnLFxuICAgICAgaW5wdXRPbmU6ICcnLFxuXG4gICAgICBpbnB1dFRlbjogJycsXG4gICAgICBpbnB1dEVsZXZlbjogJycsXG4gICAgICBpbnB1dFR3ZWx2ZTogJycsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNoYW5nID0gZnVuY3Rpb24gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dCh7IFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRmZGl0dCA9IGZ1bmN0aW9uIChcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApIHtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldElucHV0KHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBjbGkgPSBuZXcgQ2xpZW50KCk7XG5cbiAgY29uc3QgZ3JvdXBDaGFuZyA9IG5ldyBHcm91cCgpO1xuICBncm91cENoYW5nLmVudHJpZXMgPSBbXG4gICAgbmV3IEVudHJ5KHdvcmRzQ2hhbmdbMF0ubHVyem1hZmppeiksXG4gICAgbmV3IEVudHJ5KHdvcmRzQ2hhbmdbMV0ubHVyem1hZmppeiksXG4gIF07XG5cbiAgY29uc3QgaGx0Q2hhbmcgPSBuZXcgSGlnaGxpZ2h0ZXIoZ3JvdXBDaGFuZyk7XG4gIGNvbnN0IGhsdENoYW5nWmVybzogSGlnaGxpZ2h0ID0gaGx0Q2hhbmcuZ2V0VGFyZ2V0KFxuICAgIGlucHV0LmlucHV0WmVybyxcbiAgICB3b3Jkc0NoYW5nWzBdLmluZGV4XG4gICk7XG4gIGNvbnN0IGhsdENoYW5nT25lOiBIaWdobGlnaHQgPSBobHRDaGFuZy5nZXRUYXJnZXQoXG4gICAgaW5wdXQuaW5wdXRPbmUsXG4gICAgd29yZHNDaGFuZ1sxXS5pbmRleFxuICApO1xuXG4gIGNvbnN0IGdyb3VwSXRmZGl0dCA9IG5ldyBHcm91cCgpO1xuICBncm91cEl0ZmRpdHQuZW50cmllcyA9IFtcbiAgICBuZXcgRW50cnkod29yZHNJdGZkaXR0WzBdLmx1cnptYWZqaXopLFxuICAgIG5ldyBFbnRyeSh3b3Jkc0l0ZmRpdHRbMV0ubHVyem1hZmppeiksXG4gICAgbmV3IEVudHJ5KHdvcmRzSXRmZGl0dFsyXS5sdXJ6bWFmaml6KSxcbiAgXTtcblxuICBjb25zdCBobHRJdGZkaXR0ID0gbmV3IEhpZ2hsaWdodGVyKGdyb3VwSXRmZGl0dCk7XG4gIGNvbnN0IGhsdEl0ZmRpdHRUaHJlZTogSGlnaGxpZ2h0ID0gaGx0SXRmZGl0dC5nZXRUYXJnZXQoXG4gICAgaW5wdXQuaW5wdXRUZW4sXG4gICAgd29yZHNJdGZkaXR0WzBdLmluZGV4XG4gICk7XG4gIGNvbnN0IGhsdEl0ZmRpdHRFbGV2ZW46IEhpZ2hsaWdodCA9IGhsdEl0ZmRpdHQuZ2V0VGFyZ2V0KFxuICAgIGlucHV0LmlucHV0RWxldmVuLFxuICAgIHdvcmRzSXRmZGl0dFsxXS5pbmRleFxuICApO1xuICBjb25zdCBobHRJdGZkaXR0VHdlbHZlOiBIaWdobGlnaHQgPSBobHRJdGZkaXR0LmdldFRhcmdldChcbiAgICBpbnB1dC5pbnB1dFR3ZWx2ZSxcbiAgICB3b3Jkc0l0ZmRpdHRbMl0uaW5kZXhcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB3aWRnZXRzXG4gICAgICA8YnIgLz5cbiAgICAgIDxUYWJsZSBjZWxsZWQgc3RyaXBlZCBjb2xsYXBzaW5nPlxuICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+e3dvcmRzQ2hhbmdbd29yZHNDaGFuZ1swXS5pbmRleF0uaGFueWppen08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD57d29yZHNDaGFuZ1t3b3Jkc0NoYW5nWzFdLmluZGV4XS5oYW55aml6fTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgIHt3b3Jkc0NoYW5nW3dvcmRzQ2hhbmdbMF0uaW5kZXhdLmx1cnptYWZqaXp9XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAge3dvcmRzQ2hhbmdbd29yZHNDaGFuZ1sxXS5pbmRleF0ubHVyem1hZmppen1cbiAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgIHtjbGlcbiAgICAgICAgICAgICAgICAucHJvY2Vzc1RvbmFsKHdvcmRzQ2hhbmdbd29yZHNDaGFuZ1swXS5pbmRleF0ubHVyem1hZmppeilcbiAgICAgICAgICAgICAgICAuYmxvY2tTZXF1ZW5jZXMuZmlsdGVyKGl0ID0+IGl0Lmxlbmd0aCA+IDApfVxuICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgIHtjbGlcbiAgICAgICAgICAgICAgICAucHJvY2Vzc1RvbmFsKHdvcmRzQ2hhbmdbd29yZHNDaGFuZ1sxXS5pbmRleF0ubHVyem1hZmppeilcbiAgICAgICAgICAgICAgICAuYmxvY2tTZXF1ZW5jZXMuZmlsdGVyKGl0ID0+IGl0Lmxlbmd0aCA+IDApfVxuICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntobHRDaGFuZ1plcm8udGFyZ2V0fTwvdGV4dD5cbiAgICAgICAgICAgICAge2hsdENoYW5nWmVyby50YWlsfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2hsdENoYW5nWmVyby5oaW50LmhpbnR9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LmlucHV0WmVyb31cbiAgICAgICAgICAgICAgICBuYW1lPVwiaW5wdXRaZXJvXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ2hhbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntobHRDaGFuZ09uZS50YXJnZXR9PC90ZXh0PlxuICAgICAgICAgICAgICB7aGx0Q2hhbmdPbmUudGFpbH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtobHRDaGFuZ09uZS5oaW50LmhpbnR9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LmlucHV0T25lfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbnB1dE9uZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNoYW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgICAgPGJyIC8+XG4gICAgICA8VGFibGUgY2VsbGVkIHN0cmlwZWQgY29sbGFwc2luZz5cbiAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICB7d29yZHNJdGZkaXR0W3dvcmRzSXRmZGl0dFswXS5pbmRleF0uaGFueWppen1cbiAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57aGx0SXRmZGl0dFRocmVlLnRhcmdldH08L3RleHQ+XG4gICAgICAgICAgICAgIHtobHRJdGZkaXR0VGhyZWUudGFpbH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtobHRJdGZkaXR0VGhyZWUuaGludC5oaW50fVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5pbnB1dFRlbn1cbiAgICAgICAgICAgICAgICBuYW1lPVwiaW5wdXRUZW5cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJdGZkaXR0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntobHRJdGZkaXR0RWxldmVuLnRhcmdldH08L3RleHQ+XG4gICAgICAgICAgICAgIHtobHRJdGZkaXR0RWxldmVuLnRhaWx9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7aGx0SXRmZGl0dEVsZXZlbi5oaW50LmhpbnR9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LmlucHV0RWxldmVufVxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbnB1dEVsZXZlblwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUl0ZmRpdHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2hsdEl0ZmRpdHRUd2VsdmUudGFyZ2V0fTwvdGV4dD5cbiAgICAgICAgICAgICAge2hsdEl0ZmRpdHRUd2VsdmUudGFpbH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtobHRJdGZkaXR0VHdlbHZlLmhpbnQuaGludH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQuaW5wdXRUd2VsdmV9XG4gICAgICAgICAgICAgICAgbmFtZT1cImlucHV0VHdlbHZlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSXRmZGl0dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgPC9UYWJsZS5Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0c1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/widgets.tsx\n");

/***/ })

})