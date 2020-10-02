/*! For license information please see module.js.LICENSE.txt */
define(["emotion","react","@grafana/data","@grafana/ui"],(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=8)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){"use strict";const n=r(5),o=r(6),a=r(7);function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function s(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function l(e){const t=(e=s(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map(t=>u(t,e)):null===r?r:u(r,e);n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){let[e,i]=a(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator"].includes(t.arrayFormat)?i:u(i,t),r(u(e,t),i,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=p(r[e],t);else n[e]=p(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=l,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[c(t,e),"=",c(n,e)].join("")]:[[r,c(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map(r=>{const o=e[r];return void 0===o?"":null===o?c(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):c(r,t)+"="+c(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:f(l(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=s(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query);let u=t.stringify(i,r);u&&(u="?"+u);let l=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(l="#"+c(e.fragmentIdentifier,r)),`${n}${u}${l}`}},function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())},function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function i(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=a(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=i(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),c=0;c<a.length;c++){var u=a[c];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},function(e,t,r){"use strict";r.r(t);var n=r(2);function o(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var a,i,c,u,s,l=r(1),p=r.n(l),f=r(0),d=r(3),y=r(4),m=r.n(y),g=Object(d.stylesFactory)((function(){return{wrapper:Object(f.css)(u||(u=o(["\n      position: absolute;\n    "],["\n      position: absolute;\n    "]))),video:Object(f.css)(s||(s=o(["\n      top: 0;\n      left: 0;\n    "],["\n      top: 0;\n      left: 0;\n    "])))}}));r.d(t,"plugin",(function(){return h}));var h=new n.PanelPlugin((function(e){var t=e.options,r=(e.data,e.width),n=e.height,u=g(),s="";if("youtube"===t.videoType){var l={loop:0,autoplay:0,playlist:t.videoId};t.autoPlay&&(l.autoplay=1),t.loop&&(l.loop=1),s="https://www.youtube.com/embed/"+t.videoId+"?"+m.a.stringify(l)}else"iframe"===t.videoType&&(s=t.iframeURL);return p.a.createElement("div",{className:Object(f.cx)(u.wrapper,Object(f.css)(a||(a=o(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),r,n))},"url"===t.videoType?p.a.createElement("video",{className:Object(f.cx)(u.video,Object(f.css)(i||(i=o(["\n              width: ","px;\n              height: ","px;\n            "],["\n              width: ","px;\n              height: ","px;\n            "])),r,n)),controls:!0,autoPlay:t.autoPlay,loop:t.loop,muted:!0},p.a.createElement("source",{src:t.videoURL})):p.a.createElement("iframe",{frameBorder:"0",allowFullScreen:!0,className:Object(f.cx)(u.video,Object(f.css)(c||(c=o(["\n              width: ","px;\n              height: ","px;\n            "],["\n              width: ","px;\n              height: ","px;\n            "])),r,n)),src:s}))})).setPanelOptions((function(e){return e.addRadio({path:"videoType",name:"Source",defaultValue:"url",settings:{options:[{value:"url",label:"File"},{value:"youtube",label:"YouTube"},{value:"iframe",label:"iframe"}]}}).addTextInput({path:"videoId",name:"Video ID",description:"The value after watch?v= in the URL.",defaultValue:"lWl2_zC2sDc",settings:{placeholder:"6OCA_yOn9hE"},showIf:function(e){return"youtube"===e.videoType}}).addTextInput({path:"videoURL",name:"URL",description:"A URL to a valid video file.",settings:{placeholder:"https://example.com/video.mp4"},showIf:function(e){return"url"===e.videoType}}).addTextInput({path:"iframeURL",name:"URL",description:"A valid URL.",settings:{placeholder:"https://example.com/video"},showIf:function(e){return"iframe"===e.videoType}}).addBooleanSwitch({path:"autoPlay",name:"Autoplay",defaultValue:!0,showIf:function(e){return"iframe"!==e.videoType}}).addBooleanSwitch({path:"loop",name:"Loop",defaultValue:!1,showIf:function(e){return"iframe"!==e.videoType}})}))}])}));
//# sourceMappingURL=module.js.map