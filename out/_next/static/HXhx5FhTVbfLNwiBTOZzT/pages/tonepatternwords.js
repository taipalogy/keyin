(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{hJ7p:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),o=n.n(a),l=n("h9Ui"),s=o.a.createElement;e.default=function(){var t=Object(a.useState)(""),e=t[0],n=t[1],o=(new Map).set(l.TonalLetterTags.f,1).set(l.TonalLetterTags.y,2).set(l.TonalLetterTags.w,3).set(l.TonalLetterTags.x,5).set(l.TonalLetterTags.z,7).set(l.TonalLetterTags.xx,9),r=(new Map).set(l.TonalLetterTags.zero,1).set(l.TonalLetterTags.p,4).set(l.TonalLetterTags.t,4).set(l.TonalLetterTags.k,4).set(l.TonalLetterTags.h,4).set(l.TonalLetterTags.pp,8).set(l.TonalLetterTags.tt,8).set(l.TonalLetterTags.kk,8).set(l.TonalLetterTags.hh,8),i=l.tonalInflectionAnalyzer,g=[];e&&(g=e.split(" "));var T=[];return g.length>0&&(T=g.map((function(t){return i.lexAnalyze(t,new l.TonalDesinenceInflection)})).map((function(t){return o.has(t.getInflectionalEnding().toString())?o.get(t.getInflectionalEnding().toString()):r.get(t.getAllomorphicEnding().toString())}))),s("div",null,s("label",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa\u8072\u8abf\u6a21\u5f0f",s("br",null),s("input",{type:"text",list:"entries",onChange:function(t){n(t.target.value)}})),s("datalist",{id:"entries"},["ciet dngh","hoz goaz","qongy aw","giurx ez","chongx cut kih","chau laiz chau kiw"].map((function(t){return s("option",{key:t,value:t})}))),T)}},zXkq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tonepatternwords",function(){return n("hJ7p")}])}},[["zXkq",0,1,2]]]);