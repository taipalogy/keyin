webpackHotUpdate("static/development/pages/lurzmafjiz.js",{

/***/ "./src/process.ts":
/*!************************!*\
  !*** ./src/process.ts ***!
  \************************/
/*! exports provided: getInflectionalSuffixes, getStems, getSoundSequences, getAssimilatedForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInflectionalSuffixes", function() { return getInflectionalSuffixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStems", function() { return getStems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSoundSequences", function() { return getSoundSequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssimilatedForms", function() { return getAssimilatedForms; });
function getInflectionalSuffixes(ending) {
  var desinences = [];

  if (ending) {
    desinences.push(ending);
    return desinences;
  }

  return desinences;
}
function getStems(literal, ending) {
  var l = literal;
  var ie = ending;
  var stems = [];

  if (l.length - ie.length != 0) {
    stems.push(l.substr(0, l.length - ie.length));
    return stems;
  }

  return stems;
}
function getSoundSequences(soundSeqs) {
  var snds = [];

  for (var j in soundSeqs) {
    for (var k in soundSeqs[j]) {
      var snd = soundSeqs[j][k];
      snds.push([snd.toString(), snd.name]);
    }
  }

  return snds;
}
function getAssimilatedForms(underlying, surface) {
  var forms = [];

  if (underlying && surface && underlying !== surface) {
    forms.push(surface);
    return forms;
  }

  return forms;
}

/***/ })

})
//# sourceMappingURL=lurzmafjiz.js.69530f26f20772156101.hot-update.js.map