parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".wall"),t=document.querySelector(".spider"),i=parseFloat(window.getComputedStyle(e).getPropertyValue("border-width"));e.addEventListener("click",function(l){l.preventDefault();var n=e.getBoundingClientRect(),r=n.left,o=n.top,d=n.width,c=n.height,u=t.getBoundingClientRect(),p=u.width,a=u.height,g=l.clientX-r,h=l.clientY-o,s=i+p/2,w=d-i-p/2,y=i+a/2,f=c-i-a/2;g<s&&(g=s),g>w&&(g=w),h<y&&(h=y),h>f&&(h=f),t.style.left=g-i-p/2+"px",t.style.top=h-i-a/2+"px"});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e25930b6.js.map