webpackHotUpdate("static/development/pages/hint.js",{

/***/ "./pages/hint.tsx":
/*!************************!*\
  !*** ./pages/hint.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taipa */ "./node_modules/taipa/lib/index.js");
/* harmony import */ var taipa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(taipa__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/jslv/Projects/keyin/pages/hint.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var Hint = function Hint() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hint);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "hint", '');

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "sounds", new Array());

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "namesOfSound", new Array());
};

var Entry = function Entry(reading) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Entry);

  this.reading = reading;
};

var Topic = function Topic() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Topic);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "entries", [new Entry('hoefcia')]);
};

var topic = new Topic();
var slicedReadings = [];
var literals = [];
var entries = [];
var hints = new Array();
var highlights = [];
var idx = 0;
var tonalInHanji = new Map().set("f", "一").set("y", "二").set("w", "三").set("x", "五").set("z", "七").set("xx", "九");
var namesInHanji = new Map().set("initial", "初聲").set("medial", "中聲").set("nasalization", "鼻音化").set("stop final", "終聲").set("nasal final", "終聲").set("free tonal", "聲調").set("checked tonal", "聲調");

function getTopic() {
  // const id = +this.route.snapshot.paramMap.get('id');
  // this.topicService.getTopic(id).subscribe(topic => this.topic = topic);
  entries = topic.entries;
  var clt = new taipa__WEBPACK_IMPORTED_MODULE_3__["Client"]();

  for (var i = 0; i < topic.entries.length; i++) {
    var doc = clt.processTonal(topic.entries[i].reading);
    literals[i] = doc.word.literal;
    var h = new Hint();

    var _iterator = _createForOfIteratorHelper(doc.soundSequences),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var e = _step.value;

        var _iterator2 = _createForOfIteratorHelper(e),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var j = _step2.value;
            h.namesOfSound.push(j.name);
            h.sounds.push(j.toString());
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        h.hint = namesInHanji.get(h.namesOfSound[0]) + ' ' + h.namesOfSound[0];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    highlights[i] = h.sounds[0];
    var sliced = literals[i].slice(highlights[i].length);
    slicedReadings[i] = sliced;
    hints.push(h);
  }
}

function setHintAndHighlight(index, n) {
  var tonal = "";

  if (hints[index].namesOfSound[n] === "free tonal" || hints[index].namesOfSound[n] === "checked tonal") {
    tonal = tonalInHanji.get(hints[index].sounds[n]);
    hints[index].hint = namesInHanji.get(hints[index].namesOfSound[n]) + tonal + ' ' + hints[index].namesOfSound[n];
  } else {
    hints[index].hint = namesInHanji.get(hints[index].namesOfSound[n]) + ' ' + hints[index].namesOfSound[n];
  }

  highlights[index] = hints[index].sounds[n];
}

function HintPage() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState[0],
      setInput = _useState[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  getTopic();
  var str = input;
  if (literals[idx].search(new RegExp(str)) != 0) return;
  var len = 0;

  if (str.length > 0) {
    for (var j = 0; j < hints[idx].sounds.length; j++) {
      len += hints[idx].sounds[j].length;

      if (len >= str.length) {
        if (len > str.length) {
          setHintAndHighlight(idx, j);
        } else {
          if (j + 1 == hints[idx].sounds.length) {
            // last sound
            hints[idx].hint = "";
            highlights[idx] = "";
          } else {
            setHintAndHighlight(idx, j + 1);
          }
        }

        break;
      }
    }
  } else if (str.length == 0) {
    setHintAndHighlight(idx, 0);
  }

  if (len == str.length) {
    var sliced = literals[idx].slice(str.length);

    if (literals[idx].search(new RegExp(str)) == 0) {
      if (highlights[idx] != undefined) {
        var slicedTwo = sliced.slice(highlights[idx].length);
        slicedReadings[idx] = slicedTwo;
      }
    }
  } else if (len > str.length) {}

  var words = ['a', 'bax'];
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, str, "\u62CD\u7F85\u99AC\u5B57, \u8F38\u51FA hint", __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "text",
    list: "words",
    value: input,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), __jsx("datalist", {
    id: "words",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, words.map(function (item) {
    return __jsx("option", {
      key: item,
      value: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 25
      }
    });
  }))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HintPage);

/***/ })

})
//# sourceMappingURL=hint.js.51759cc2463d59e9a75c.hot-update.js.map