_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{hJ7p:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),o=n.n(a),r=n("h9Ui"),l=o.a.createElement;e.default=function(){var t=Object(a.useState)(""),e=t[0],n=t[1],o=(new Map).set(r.TonalLetterTags.f,1).set(r.TonalLetterTags.y,2).set(r.TonalLetterTags.w,3).set(r.TonalLetterTags.x,5).set(r.TonalLetterTags.z,7).set(r.TonalLetterTags.xx,9),g=(new Map).set(r.TonalLetterTags.p,4).set(r.TonalLetterTags.t,4).set(r.TonalLetterTags.k,4).set(r.TonalLetterTags.h,4).set(r.TonalLetterTags.pp,8).set(r.TonalLetterTags.tt,8).set(r.TonalLetterTags.kk,8).set(r.TonalLetterTags.hh,8),i=r.tonalInflectionAnalyzer,s=[];e&&(s=e.split(" "));var u=[];s.length>0&&(u=s.map((function(t){return i.lexAnalyze(t,new r.TonalDesinenceInflection)})).map((function(t){return o.has(t.getInflectionalEnding().toString())?o.get(t.getInflectionalEnding().toString()):g.has(t.getAllomorphicEnding().toString())?g.get(t.getAllomorphicEnding().toString()):1})));var T=[];return 1==s.length?T.push(Object(r.getToneEndingNumber)(s[0])):2==s.length?T=Object(r.getToneEndingNumbersTwo)(s[0],s[1]):3==s.length?T=Object(r.getToneEndingNumbersThree)(s[0],s[1],s[2]):s.length>=4&&s.map((function(t){return T.push(Object(r.getToneEndingNumber)(t))})),l("div",null,l("label",null,"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa\u8072\u8abf\u6a21\u5f0f",l("br",null),l("input",{type:"text",list:"entries",onChange:function(t){n(t.target.value)}})),l("datalist",{id:"entries"},["ciet tngh","hoz guaz","kongy aw","giurx ez","chongx cut khih","chau laiz chau khiw"].map((function(t){return l("option",{key:t,value:t})}))),u,l("br",null),T)}},zXkq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tonepatternwords",function(){return n("hJ7p")}])}},[["zXkq",0,1,2]]]);