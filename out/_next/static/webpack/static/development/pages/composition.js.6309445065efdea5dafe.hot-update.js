webpackHotUpdate("static/development/pages/composition.js",{

/***/ "./pages/composition.tsx":
/*!*******************************!*\
  !*** ./pages/composition.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "/Users/jslv/Projects/keyin/pages/composition.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Segment = /*#__PURE__*/function () {
  function Segment(str) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Segment);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "literal", '');

    this.literal = str;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Segment, [{
    key: "isBaseForm",
    value: function isBaseForm(str) {
      if (str === this.literal) return true;
      return false;
    }
  }, {
    key: "isProceedingForm",
    value: function isProceedingForm(str) {
      var lx = Object(taipa__WEBPACK_IMPORTED_MODULE_4__["inflectDesinence"])(this.literal);
      if (lx.getForms().filter(function (x) {
        return x.literal === str;
      }).length > 0) return true;
      return false;
    }
  }, {
    key: "includes",
    value: function includes(str) {
      if (this.isBaseForm(str) || this.isProceedingForm(str)) return true;
      return false;
    }
  }]);

  return Segment;
}();

var pah = new Segment('pah');
var jiz = new Segment('jiz');
var sek = new Segment('sek'); // radio groups

var optGroup1 = ['type'];
var optGroup2 = ['daizgiy', 'kana'];
var optGroup3 = ['blue', 'green', 'red'];
var segments = [{
  segment: pah,
  options: optGroup1
}, {
  segment: jiz,
  options: optGroup2
}, {
  segment: sek,
  options: optGroup3
}];
var cli = new taipa__WEBPACK_IMPORTED_MODULE_4__["Client"]();

function getSeqs(alphabet, str) {
  if (alphabet == optGroup2[1]) {
    var ta = cli.processKana(str);
    return ta.blockSequences.filter(function (x) {
      return x.length > 0;
    });
  } else if (alphabet == optGroup2[0]) {
    var _ta = cli.processTonal(str);

    if (_ta.word.syllables) {
      return _ta.word.syllables.flatMap(function (x) {
        return x.literal;
      });
    }
  }

  return [];
}

var seqs = []; // output sequences

var alphabet = '';
var fcolor = {}; // font color

var lx1 = Object(taipa__WEBPACK_IMPORTED_MODULE_4__["inflectDesinence"])(segments[0].segment.literal);
var lx2 = Object(taipa__WEBPACK_IMPORTED_MODULE_4__["inflectDesinence"])(segments[1].segment.literal);
var candidates = [lx1.word.literal, lx1.getForms()[1].literal + lx2.word.literal, lx1.getForms()[1].literal + lx2.getForms()[0].literal + segments[2].segment.literal];

function CompositionPage() {
  var _this = this;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(function (state, newState) {
    return _objectSpread({}, state, {}, newState);
  }, {
    scanned: '',
    selectedOne: '',
    typed: '',
    selectedTwo: '',
    selectedThree: ''
  }),
      input = _useReducer[0],
      setInput = _useReducer[1];

  var handleChange = function handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    setInput(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, value));
  };

  var segIdx = -1; // no. of segment

  var combinedSegIdx = -1; // no. of combined segments

  var optIdx = -1; // which radio button and input field to be displayed

  var tl = taipa__WEBPACK_IMPORTED_MODULE_4__["tonalLemmatizationAnalyzer"];
  var mphs = tl.morphAnalyze(input.scanned);

  if (mphs) {
    for (var i = 0; i < mphs.length; i++) {
      if (mphs[i] && segments[i]) {
        if (i < segments.length - 1 && segments[i].segment.isProceedingForm(mphs[i].syllable.literal) || i == segments.length - 1 && segments[i].segment.isBaseForm(mphs[i].syllable.literal)) {
          combinedSegIdx = i;
        } else {
          break;
        }
      }
    }
  }

  for (var _i = 0; _i < segments.length; _i++) {
    if (mphs && mphs[_i] && segments[_i]) {
      if (segments[_i].segment.includes(mphs[_i].syllable.literal)) {
        segIdx = _i;
      }
    }
  }

  var options = [];

  if (segIdx >= 0) {
    if (combinedSegIdx < segIdx) {
      options = segments[combinedSegIdx + 1].options;
      optIdx = combinedSegIdx + 1;
    } else {
      options = segments[segIdx].options;
      optIdx = segIdx;
    }
  }

  if (optGroup2.filter(function (x) {
    return x.includes(input.selectedTwo);
  }).length > 0) {
    alphabet = input.selectedTwo;
    seqs = getSeqs(alphabet, input.typed);
  } else {
    seqs = getSeqs(alphabet, input.typed);
  }

  if (optGroup3.filter(function (x) {
    return x.includes(input.selectedThree);
  }).length > 0) {
    var str = input.selectedThree;
    fcolor = {
      color: str
    };
  }

  var isDisabled = true;
  if (optIdx > 0) isDisabled = false;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    list: "words",
    value: input.scanned,
    name: "scanned",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }), __jsx("datalist", {
    id: "words",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, candidates.map(function (item) {
    return __jsx("option", {
      key: item,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    });
  })), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, optIdx == 0 && options.map(function (checked_opt, i) {
    return __jsx("div", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "radio",
      checked: input.selectedOne === checked_opt,
      name: "selectedOne",
      onChange: handleChange,
      value: checked_opt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    }), checked_opt);
  }), optIdx == 1 && options.map(function (checked_opt, i) {
    return __jsx("div", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "radio",
      checked: input.selectedTwo === checked_opt,
      name: "selectedTwo",
      onChange: handleChange,
      value: checked_opt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 29
      }
    }), checked_opt);
  }), optIdx == 2 && options.map(function (checked_opt, i) {
    return __jsx("div", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "radio",
      checked: input.selectedThree === checked_opt,
      name: "selectedThree",
      onChange: handleChange,
      value: checked_opt,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 29
      }
    }), checked_opt);
  })), __jsx("div", {
    style: fcolor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, optIdx > 0 && __jsx("input", {
    type: "text",
    disabled: isDisabled,
    value: input.typed,
    name: "typed",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }), seqs.map(function (x) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }
    }, " ", x, " ");
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CompositionPage);

/***/ })

})
//# sourceMappingURL=composition.js.6309445065efdea5dafe.hot-update.js.map