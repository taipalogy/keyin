_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"9XFl":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/composition",function(){return n("kZZT")}])},kZZT:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),i=n("vuIU"),l=n("rePB"),o=n("q1tI"),a=n.n(o),c=n("h9Ui"),u=a.a.createElement;function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(){function e(t){Object(r.a)(this,e),Object(l.a)(this,"literal",""),this.literal=t}return Object(i.a)(e,[{key:"isBaseForm",value:function(e){return e===this.literal}},{key:"isProceedingForm",value:function(e){return Object(c.inflectDesinence)(this.literal).getForms().filter((function(t){return t.literal===e})).length>0}},{key:"includes",value:function(e){return!(!this.isBaseForm(e)&&!this.isProceedingForm(e))}}]),e}(),p=new d("pah"),y=new d("jiz"),b=new d("sek"),g=["daizgiy","kana"],m=["blue","green","red"],h=[{segment:p,options:["type"]},{segment:y,options:g},{segment:b,options:m}],v=new c.Client;function w(e,t){if(e==g[1])return v.processKana(t).blockSequences.filter((function(e){return e.length>0}));if(e==g[0]){var n=v.processTonal(t);if(n.word.syllables)return n.word.syllables.flatMap((function(e){return e.literal}))}return[]}var O=[],j="",k={},P=Object(c.inflectDesinence)(h[0].segment.literal),T=Object(c.inflectDesinence)(h[1].segment.literal),F=[P.word.literal,P.getForms()[0].literal+T.word.literal,P.getForms()[0].literal+T.getForms()[0].literal+h[2].segment.literal];t.default=function(){var e=Object(o.useReducer)((function(e,t){return f(f({},e),t)}),{scanned:"",selectedOne:"",typed:"",selectedTwo:"",selectedThree:""}),t=e[0],n=e[1],r=function(e){var t=e.target.name,r=e.target.value;n(Object(l.a)({},t,r))},i=-1,a=-1,s=-1,d=c.tonalLemmatizationAnalyzer.morphAnalyze(t.scanned);if(d)for(var p=0;p<d.length;p++)if(d[p]&&h[p]){if(!(p<h.length-1&&h[p].segment.isProceedingForm(d[p].syllable.literal)||p==h.length-1&&h[p].segment.isBaseForm(d[p].syllable.literal)))break;a=p}for(var y=0;y<h.length;y++)d&&d[y]&&h[y]&&h[y].segment.includes(d[y].syllable.literal)&&(i=y);var b=[];if(i>=0&&(a<i?(b=h[a+1].options,s=a+1):(b=h[i].options,s=i)),g.filter((function(e){return e.includes(t.selectedTwo)})).length>0?(j=t.selectedTwo,O=w(j,t.typed)):O=w(j,t.typed),m.filter((function(e){return e.includes(t.selectedThree)})).length>0){var v=t.selectedThree;k={color:v}}var P=!0;return s>0&&(P=!1),u("div",null,u("input",{type:"text",list:"words",value:t.scanned,name:"scanned",onChange:r}),u("datalist",{id:"words"},F.map((function(e){return u("option",{key:e,value:e})}))),u("br",null),u("div",null,0==s&&b.map((function(e,n){return u("div",{key:n},u("input",{type:"radio",checked:t.selectedOne===e,name:"selectedOne",onChange:r,value:e}),e)})),1==s&&b.map((function(e,n){return u("div",{key:n},u("input",{type:"radio",checked:t.selectedTwo===e,name:"selectedTwo",onChange:r,value:e}),e)})),2==s&&b.map((function(e,n){return u("div",{key:n},u("input",{type:"radio",checked:t.selectedThree===e,name:"selectedThree",onChange:r,value:e}),e)}))),u("div",{style:k},s>0&&u("input",{type:"text",disabled:P,value:t.typed,name:"typed",onChange:r}),O.map((function(e){return u("li",null," ",e," ")}))))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return i}))}},[["9XFl",0,1,2]]]);