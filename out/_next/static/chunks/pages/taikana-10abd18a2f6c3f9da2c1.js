_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"+QRC":function(t,e,n){"use strict";var r=n("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var n,a,l,i,g,s,u=!1;e||(e={}),n=e.debug||!1;try{if(l=r(),i=document.createRange(),g=document.getSelection(),(s=document.createElement("span")).textContent=t,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),e.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[e.format]||o.default;window.clipboardData.setData(a,t)}else r.clipboardData.clearData(),r.clipboardData.setData(e.format,t);e.onCopy&&(r.preventDefault(),e.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),g.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(T){n&&console.error("unable to copy using execCommand: ",T),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),u=!0}catch(T){n&&console.error("unable to copy using clipboardData: ",T),n&&console.error("falling back to prompt"),a=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,t)}}finally{g&&("function"==typeof g.removeRange?g.removeRange(i):g.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},E9nw:function(t,e){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||n.forEach((function(e){t.addRange(e)})),e&&e.focus()}}},JYuh:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("h9Ui"),l=n("iR1w"),i=n("P5Jw"),g=n.n(i),s=o.a.createElement,u=[{letter:a.TonalLetterTags.a.toString(),hanjis:["\u963f"]},{letter:a.TonalLetterTags.b.toString(),hanjis:["\u7c73"]},{letter:a.TonalLetterTags.bb.toString(),hanjis:[""]},{letter:a.TonalLetterTags.c.toString(),hanjis:["\u5e02"]},{letter:a.TonalLetterTags.ch.toString(),hanjis:["\u5fd7"]},{letter:a.TonalLetterTags.e.toString(),hanjis:["\u4e2a","\u76ca"]},{letter:a.TonalLetterTags.f.toString(),hanjis:[""]},{letter:a.TonalLetterTags.g.toString(),hanjis:["\u725b"]},{letter:a.TonalLetterTags.gg.toString(),hanjis:[""]},{letter:a.TonalLetterTags.h.toString(),hanjis:["\u706b"]},{letter:a.TonalLetterTags.hh.toString(),hanjis:["\u7071"]},{letter:a.TonalLetterTags.i.toString(),hanjis:["\u8863"]},{letter:a.TonalLetterTags.ir.toString(),hanjis:["\u53bb"]},{letter:a.TonalLetterTags.j.toString(),hanjis:["\u800c"]},{letter:a.TonalLetterTags.k.toString(),hanjis:["\u53e4"]},{letter:a.TonalLetterTags.kh.toString(),hanjis:["\u53bb"]},{letter:a.TonalLetterTags.kk.toString(),hanjis:["\u76ee"]},{letter:a.TonalLetterTags.l.toString(),hanjis:["\u5973"]},{letter:a.TonalLetterTags.ll.toString(),hanjis:[""]},{letter:a.TonalLetterTags.m.toString(),hanjis:["\u4e5c"]}],T=[{letter:a.TonalLetterTags.n.toString(),hanjis:["\u5c3c"]},{letter:a.TonalLetterTags.ng.toString(),hanjis:["\u5348"]},{letter:a.TonalLetterTags.nn.toString(),hanjis:["\u4e95"]},{letter:a.TonalLetterTags.o.toString(),hanjis:["\u828b"]},{letter:a.TonalLetterTags.or.toString(),hanjis:["\u86b5"]},{letter:a.TonalLetterTags.p.toString(),hanjis:["\u6bd4"]},{letter:a.TonalLetterTags.ph.toString(),hanjis:["\u76ae"]},{letter:a.TonalLetterTags.pp.toString(),hanjis:["\u5165"]},{letter:a.TonalLetterTags.s.toString(),hanjis:["\u793a"]},{letter:a.TonalLetterTags.ss.toString(),hanjis:[""]},{letter:a.TonalLetterTags.t.toString(),hanjis:["\u6c60"]},{letter:a.TonalLetterTags.th.toString(),hanjis:["\u571f"]},{letter:a.TonalLetterTags.tt.toString(),hanjis:["\u65e5"]},{letter:a.TonalLetterTags.u.toString(),hanjis:["\u5b87"]},{letter:a.TonalLetterTags.ur.toString(),hanjis:["\u86b5"]},{letter:a.TonalLetterTags.w.toString(),hanjis:[""]},{letter:a.TonalLetterTags.x.toString(),hanjis:[""]},{letter:a.TonalLetterTags.xx.toString(),hanjis:[""]},{letter:a.TonalLetterTags.y.toString(),hanjis:[""]},{letter:a.TonalLetterTags.z.toString(),hanjis:[""]}],c=[a.TonalLetterTags.b.toString(),a.TonalLetterTags.c.toString(),a.TonalLetterTags.ch.toString(),a.TonalLetterTags.g.toString(),a.TonalLetterTags.h.toString(),a.TonalLetterTags.j.toString(),a.TonalLetterTags.k.toString(),a.TonalLetterTags.kh.toString(),a.TonalLetterTags.l.toString(),a.TonalLetterTags.m.toString(),a.TonalLetterTags.n.toString(),a.TonalLetterTags.ng.toString(),a.TonalLetterTags.p.toString(),a.TonalLetterTags.ph.toString(),a.TonalLetterTags.s.toString(),a.TonalLetterTags.t.toString(),a.TonalLetterTags.th.toString()],h=[a.TonalLetterTags.a.toString(),a.TonalLetterTags.e.toString(),a.TonalLetterTags.i.toString(),a.TonalLetterTags.o.toString(),a.TonalLetterTags.u.toString(),a.TonalLetterTags.ur.toString(),a.TonalLetterTags.or.toString(),a.TonalLetterTags.ir.toString(),a.TonalLetterTags.er.toString(),a.TonalLetterTags.m.toString(),a.TonalLetterTags.n.toString(),a.TonalLetterTags.ng.toString(),a.TonalLetterTags.a.toString()+a.TonalLetterTags.i.toString(),a.TonalLetterTags.a.toString()+a.TonalLetterTags.u.toString(),a.TonalLetterTags.i.toString()+a.TonalLetterTags.a.toString(),a.TonalLetterTags.i.toString()+a.TonalLetterTags.e.toString(),a.TonalLetterTags.i.toString()+a.TonalLetterTags.o.toString(),a.TonalLetterTags.i.toString()+a.TonalLetterTags.u.toString(),a.TonalLetterTags.i.toString()+a.TonalLetterTags.ur.toString(),a.TonalLetterTags.ir.toString()+a.TonalLetterTags.i.toString(),a.TonalLetterTags.or.toString()+a.TonalLetterTags.e.toString(),a.TonalLetterTags.u.toString()+a.TonalLetterTags.a.toString(),a.TonalLetterTags.u.toString()+a.TonalLetterTags.e.toString(),a.TonalLetterTags.u.toString()+a.TonalLetterTags.i.toString(),a.TonalLetterTags.i.toString()+a.TonalLetterTags.a.toString()+a.TonalLetterTags.i.toString(),a.TonalLetterTags.i.toString()+a.TonalLetterTags.a.toString()+a.TonalLetterTags.u.toString(),a.TonalLetterTags.u.toString()+a.TonalLetterTags.a.toString()+a.TonalLetterTags.i.toString()],d=[a.TonalLetterTags.nn.toString()],p=[a.TonalLetterTags.p.toString(),a.TonalLetterTags.t.toString(),a.TonalLetterTags.k.toString(),a.TonalLetterTags.h.toString(),a.TonalLetterTags.pp.toString(),a.TonalLetterTags.tt.toString(),a.TonalLetterTags.kk.toString(),a.TonalLetterTags.hh.toString(),a.TonalLetterTags.b.toString(),a.TonalLetterTags.g.toString(),a.TonalLetterTags.j.toString(),a.TonalLetterTags.l.toString(),a.TonalLetterTags.s.toString(),a.TonalLetterTags.bb.toString(),a.TonalLetterTags.gg.toString(),a.TonalLetterTags.ll.toString(),a.TonalLetterTags.ss.toString(),a.TonalLetterTags.m.toString(),a.TonalLetterTags.n.toString(),a.TonalLetterTags.ng.toString(),a.TonalLetterTags.m.toString()+a.TonalLetterTags.h.toString(),a.TonalLetterTags.m.toString()+a.TonalLetterTags.hh.toString(),a.TonalLetterTags.n.toString()+a.TonalLetterTags.h.toString(),a.TonalLetterTags.ng.toString()+a.TonalLetterTags.h.toString(),a.TonalLetterTags.ng.toString()+a.TonalLetterTags.hh.toString()],S=[{letter:a.TonalLetterTags.f.toString(),number:1},{letter:a.TonalLetterTags.y.toString(),number:2},{letter:a.TonalLetterTags.w.toString(),number:3},{letter:a.TonalLetterTags.x.toString(),number:5},{letter:a.TonalLetterTags.z.toString(),number:7},{letter:a.TonalLetterTags.xx.toString(),number:9}],f="papayawhip",L="black",b=35,y=20,m="mistyrose",w={rowCount:1,height:y+2,columnWidth:40};e.default=function(){var t=Object(r.useState)(""),e=t[0],n=t[1],o=[],i=e.match(/\w+/g);i&&i.filter((function(t){return void 0!=t})).map((function(t){return o.push(t)}));var j=new a.Client,v=o.map((function(t){return j.processTonal(t)})).map((function(t){return t.blockSequences.filter((function(t){return t.length>0}))})),C=v.map((function(t){return t[0]})).join(""),x=function(t){var e=t.columnIndex,n=t.rowIndex,r=t.style;return s("div",{className:e%2?n%2==0?"GridItemOdd":"GridItemEven":n%2?"GridItemOdd":"GridItemEven",style:Object.assign(n%4==0?{backgroundColor:m,border:"1px solid white",color:L}:{},r)},0==n?e>=0&&u[e]?u[e].letter:"":1==n?e>=0&&u[e]?u[e].hanjis[0]:"":2==n?5==e?u[e].hanjis[1]:"":3==n?5==e?u[e].hanjis[2]:"":4==n?e>=0&&T[e]?T[e].letter:"":5==n&&e>=0&&T[e]?T[e].hanjis[0]:"")},O=function(t){var e=t.columnIndex,n=(t.rowIndex,t.style);return s("div",{style:Object.assign({backgroundColor:f,border:"1px solid white",color:L},n)},c[e])},k=function(t){var e=t.columnIndex,n=(t.rowIndex,t.style);return s("div",{style:Object.assign({backgroundColor:f,border:"1px solid white",color:L},n)},h[e])},E=function(t){var e=t.columnIndex,n=(t.rowIndex,t.style);return s("div",{style:Object.assign({backgroundColor:f,border:"1px solid white",color:L},n)},d[e])},P=function(t){var e=t.columnIndex,n=(t.rowIndex,t.style);return s("div",{style:Object.assign({backgroundColor:f,border:"1px solid white",color:L},n)},p[e])},I=function(t){var e=t.columnIndex,n=t.rowIndex,r=t.style;return s("div",{style:Object.assign(0==n?{backgroundColor:f,border:"1px solid white",color:L}:{},r)},0==n?S[e].letter:1==n?S[e].number:"")};return s("div",{style:{fontFamily:"IBM Plex Mono",fontSize:16}},"\u62cd\u7f85\u99ac\u5b57, \u8f38\u51fa\u53f0\u7063\u8a9e\u5047\u540d",s("label",null,s("br",null),s("input",{type:"text",value:e,onChange:function(t){n(t.target.value)},style:{fontFamily:"IBM Plex Mono",fontSize:16}})),s("br",null),v.map((function(t){return s("li",null,0==t.length?"":1==t.length?t[0]:2==t.length?t[0]+", "+t[1]:"")})),s("br",null),s("li",null,C),s(g.a,{text:C},s("button",{disabled:""===C},"Copy")),s("br",null),s("div",null,s("div",null,"Alphabet"),s((function(){return s(l.a,{className:"GridAlphabet",columnCount:20,columnWidth:b,rowCount:8*w.rowCount,rowHeight:y,height:8*w.height,width:u.length*(b+1),style:{textAlign:"center"}},x)}),null)),s("br",null),s("div",null,s("div",null,"\u521d\u8072(\u8a9e\u982d\u5b50\u97f3)"),s((function(){return s(l.a,{className:"GridInitials",columnCount:c.length,columnWidth:w.columnWidth,rowCount:w.rowCount,rowHeight:y,height:w.height,width:c.length*(w.columnWidth+1),style:{textAlign:"center"}},O)}),null))," ",s("br",null),s("div",null,s("div",null,"\u4e2d\u8072(\u6bcd\u97f3, \u6e96\u6bcd\u97f3)"),s((function(){return s(l.a,{className:"GridMedials",columnCount:h.length,columnWidth:w.columnWidth,rowCount:w.rowCount,rowHeight:y,height:w.height,width:h.length*(w.columnWidth+1),style:{textAlign:"center"}},k)}),null)),s("br",null),s("div",null,s("div",null,"\u9f3b\u97f3\u5316"),s((function(){return s(l.a,{className:"GridNasalizations",columnCount:d.length,columnWidth:w.columnWidth,rowCount:w.rowCount,rowHeight:y,height:w.height,width:d.length*w.columnWidth+2,style:{textAlign:"center"}},E)}),null))," ",s("br",null),s("div",null,s("div",null,"\u7d42\u8072(\u8a9e\u5c3e\u5b50\u97f3, \u8072\u8abf)"),s((function(){return s(l.a,{className:"GridFinals",columnCount:p.length,columnWidth:w.columnWidth,rowCount:w.rowCount,rowHeight:y,height:w.height,width:p.length*(w.columnWidth+1),style:{textAlign:"center"}},P)}),null)),s("br",null),s("div",null,s("div",null,"\u8072\u8abf"),s((function(){return s(l.a,{className:"GridTonals",columnCount:S.length,columnWidth:w.columnWidth,rowCount:2*w.rowCount,rowHeight:y,height:2*w.height,width:S.length*(w.columnWidth+1),style:{textAlign:"center"}},I)}),null)))}},P5Jw:function(t,e,n){"use strict";var r=n("rHrb").CopyToClipboard;r.CopyToClipboard=r,t.exports=r},g3EK:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/taikana",function(){return n("JYuh")}])},rHrb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CopyToClipboard=void 0;var r=a(n("q1tI")),o=a(n("+QRC"));function a(t){return t&&t.__esModule?t:{default:t}}function l(t){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t,e){return!e||"object"!==l(e)&&"function"!==typeof e?h(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=function(t){function e(){var t,n;s(this,e);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return p(h(n=T(this,(t=c(e)).call.apply(t,[this].concat(l)))),"onClick",(function(t){var e=n.props,a=e.text,l=e.onCopy,i=e.children,g=e.options,s=r.default.Children.only(i),u=(0,o.default)(a,g);l&&l(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t)})),n}var n,a,l;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(a=[{key:"render",value:function(){var t=this.props,e=(t.text,t.onCopy,t.options,t.children),n=g(t,["text","onCopy","options","children"]),o=r.default.Children.only(e);return r.default.cloneElement(o,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),l&&u(n,l),e}(r.default.PureComponent);e.CopyToClipboard=S,p(S,"defaultProps",{onCopy:void 0,options:void 0})}},[["g3EK",0,1,2,3]]]);