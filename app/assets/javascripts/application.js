//This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= reuire bootstrap/alert
//= require_tree .


function getCookie(e) {
  return document.cookie.length>0&&(c_start=document.cookie.indexOf(e+"="),c_start!=-1)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),c_end==-1&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))): ""
}

function windowPopup(e,t,n) {
  var r=window.innerWidth?window.innerWidth: document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,i=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,o=r/2-t/2+window.screenX,a=i/2-n/2+window.screenY;
  window.open(e,"_blank","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+t+",height="+n+",top="+a+",left="+o)
}!function(e,t) {
"object"
  ==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0): function(e){if(!e.document)throw new Error("jQuery requires a window with a document");
  return t(e)
}

:t(e)
}("undefined"!=typeof window?window:this,function(e,t) {
function n(e){var t=!!e&&"length"in e&&e.length,n=pe.type(e);return"function"!==n&&!pe.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)
}

function r(e,t,n) {
if(pe.isFunction(t))return pe.grep(e,function(e,r){return!!t.call(e,r,e)!==n
});

if(t.nodeType)return pe.grep(e,function(e) {
return e===t!==n
});

if("string"==typeof t) {
if(Ce.test(t))return pe.filter(t,e,n);t=pe.filter(t,e)
}

return pe.grep(e,function(e) {
return pe.inArray(e,t)>-1!==n
})}

function i(e,t) {
do e=e[t];while(e&&1!==e.nodeType);return e
}

function o(e) {
var t={
};

return pe.each(e.match(Ne)||[],function(e,n) {
t[n]=!0
}),t
}

function a() {
re.addEventListener?(re.removeEventListener("DOMContentLoaded",s),e.removeEventListener("load",s)): (re.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))
}

function s() {
(re.addEventListener||"load"===e.event.type||"complete"===re.readyState)&&(a(),pe.ready())
}

function u(e,t,n) {
if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(qe,"-$1").toLowerCase();if(n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null: +n+""===n?+n:_e.test(n)?pe.parseJSON(n):n)
}

catch(e) {
}

pe.data(e,t,n)
}

else n=void 0
}

return n
}

function l(e) {
var t;for(t in e)if(("data"!==t||!pe.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0
}

function c(e,t,n,r) {
if(Le(e)){var i,o,a=pe.expando,s=e.nodeType,u=s?pe.cache: e,l=s?e[a]:e[a]&&a;
if(l&&u[l]&&(r||u[l].data)||void 0!==n||"string"!=typeof t)return l||(l=s?e[a]=ne.pop()||pe.guid++: a),u[l]||(u[l]=s?{
}

: {
toJSON: pe.noop
}),("object"==typeof t||"function"==typeof t)&&(r?u[l]=pe.extend(u[l],t):u[l].data=pe.extend(u[l].data,t)),o=u[l],r||(o.data||(o.data= {
}),o=o.data),void 0!==n&&(o[pe.camelCase(t)]=n),"string"==typeof t?(i=o[t],null==i&&(i=o[pe.camelCase(t)])):i=o,i
}}

function d(e,t,n) {
if(Le(e)){var r,i,o=e.nodeType,a=o?pe.cache: e,s=o?e[pe.expando]:pe.expando;
if(a[s]){if(t&&(r=n?a[s]: a[s].data)){pe.isArray(t)?t=t.concat(pe.map(t,pe.camelCase)):t in r?t=[t]:(t=pe.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
for(;i--;)delete r[t[i]];if(n?!l(r): !pe.isEmptyObject(r))return
}(n||(delete a[s].data,l(a[s])))&&(o?pe.cleanData([e],!0):de.deleteExpando||a!=a.window?delete a[s]:a[s]=void 0)
}}}

function f(e,t,n,r) {
var i,o=1,a=20,s=r?function(){return r.cur()
}

:function() {
return pe.css(e,t,"")
},u=s(),l=n&&n[3]||(pe.cssNumber[t]?"":"px"),c=(pe.cssNumber[t]||"px"!==l&&+u)&&Me.exec(pe.css(e,t));if(c&&c[3]!==l) {
l=l||c[3],n=n||[],c=+u||1;do o=o||".5",c/=o,pe.style(e,t,c+l);while(o!==(o=s()/u)&&1!==o&&--a)
}

return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i
}

function p(e) {
var t=We.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n
}

function h(e,t) {
var n,r,i=0,o="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"): "undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):void 0;
if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||pe.nodeName(r,t)?o.push(r): pe.merge(o,h(r,t));
return void 0===t||t&&pe.nodeName(e,t)?pe.merge([e],o): o
}

function m(e,t) {
for(var n,r=0;null!=(n=e[r]);r++)pe._data(n,"globalEval",!t||pe._data(t[r],"globalEval"))
}

function g(e) {
$e.test(e.type)&&(e.defaultChecked=e.checked)
}

function v(e,t,n,r,i) {
for(var o,a,s,u,l,c,d,f=e.length,v=p(t),y=[],b=0;f>b;b++)if(a=e[b],a||0===a)if("object"===pe.type(a))pe.merge(y,a.nodeType?[a]: a);
else if(Ve.test(a)){for(u=u||v.appendChild(t.createElement("div")),l=(ze.exec(a)||["",""])[1].toLowerCase(),d=Xe[l]||Xe._default,u.innerHTML=d[1]+pe.htmlPrefilter(a)+d[2],o=d[0];o--;)u=u.lastChild;if(!de.leadingWhitespace&&Be.test(a)&&y.push(t.createTextNode(Be.exec(a)[0])),!de.tbody)for(a="table"!==l||Ue.test(a)?"<table>"!==d[1]||Ue.test(a)?0: u:u.firstChild,o=a&&a.childNodes.length;
o--;)pe.nodeName(c=a.childNodes[o],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(pe.merge(y,u.childNodes),u.textContent="";u.firstChild;)u.removeChild(u.firstChild);u=v.lastChild
}

else y.push(t.createTextNode(a));for(u&&v.removeChild(u),de.appendChecked||pe.grep(h(y,"input"),g),b=0;a=y[b++];)if(r&&pe.inArray(a,r)>-1)i&&i.push(a);else if(s=pe.contains(a.ownerDocument,a),u=h(v.appendChild(a),"script"),s&&m(u),n)for(o=0;a=u[o++];)Ie.test(a.type||"")&&n.push(a);return u=null,v
}

function y() {
return!0
}

function b() {
return!1
}

function x() {
try{return re.activeElement
}

catch(e) {
}}

function w(e,t,n,r,i,o) {
var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)w(e,s,n,r,t[s],o);return e
}

if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=b;else if(!i)return e;return 1===o&&(a=i,i=function(e) {
return pe().off(e),a.apply(this,arguments)
},i.guid=a.guid||(a.guid=pe.guid++)),e.each(function() {
pe.event.add(this,t,i,r,n)
})}

function T(e,t) {
return pe.nodeName(e,"table")&&pe.nodeName(11!==t.nodeType?t: t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}

function C(e) {
return e.type=(null!==pe.find.attr(e,"type"))+"/"+e.type,e
}

function k(e) {
var t=it.exec(e.type);return t?e.type=t[1]: e.removeAttribute("type"),e
}

function E(e,t) {
if(1===t.nodeType&&pe.hasData(e)){var n,r,i,o=pe._data(e),a=pe._data(t,o),s=o.events;if(s){delete a.handle,a.events={
};

for(n in s)for(r=0,i=s[n].length;i>r;r++)pe.event.add(t,n,s[n][r])
}

a.data&&(a.data=pe.extend( {
},a.data))
}}

function S(e,t) {
var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!de.noCloneEvent&&t[pe.expando]){i=pe._data(t);for(r in i.events)pe.removeEvent(t,r,i.handle);t.removeAttribute(pe.expando)
}"script"===n&&t.text!==e.text?(C(t).text=e.text,k(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),de.html5Clone&&e.innerHTML&&!pe.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&$e.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}

function F(e,t,n,r) {
t=oe.apply([],t);var i,o,a,s,u,l,c=0,d=e.length,f=d-1,p=t[0],m=pe.isFunction(p);if(m||d>1&&"string"==typeof p&&!de.checkClone&&rt.test(p))return e.each(function(i){var o=e.eq(i);m&&(t[0]=p.call(this,i,o.html())),F(o,t,n,r)
});

if(d&&(l=v(t,e[0].ownerDocument,!1,e,r),i=l.firstChild,1===l.childNodes.length&&(l=i),i||r)) {
for(s=pe.map(h(l,"script"),C),a=s.length;d>c;c++)o=l,c!==f&&(o=pe.clone(o,!0,!0),a&&pe.merge(s,h(o,"script"))),n.call(e[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,pe.map(s,k),c=0;a>c;c++)o=s[c],Ie.test(o.type||"")&&!pe._data(o,"globalEval")&&pe.contains(u,o)&&(o.src?pe._evalUrl&&pe._evalUrl(o.src): pe.globalEval((o.text||o.textContent||o.innerHTML||"").replace(ot,"")));
l=i=null
}

return e
}

function D(e,t,n) {
for(var r,i=t?pe.filter(t,e): e,o=0;
null!=(r=i[o]);o++)n||1!==r.nodeType||pe.cleanData(h(r)),r.parentNode&&(n&&pe.contains(r.ownerDocument,r)&&m(h(r,"script")),r.parentNode.removeChild(r));return e
}

function N(e,t) {
var n=pe(t.createElement(e)).appendTo(t.body),r=pe.css(n[0],"display");return n.detach(),r
}

function A(e) {
var t=re,n=lt[e];return n||(n=N(e,t),"none"!==n&&n||(ut=(ut||pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(ut[0].contentWindow||ut[0].contentDocument).document,t.write(),t.close(),n=N(e,t),ut.detach()),lt[e]=n),n
}

function j(e,t) {
return{get: function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)
}}}

function L(e) {
if(e in kt)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=Ct.length;n--;)if(e=Ct[n]+t,e in kt)return e
}

function _(e,t) {
for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=pe._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Re(r)&&(o[a]=pe._data(r,"olddisplay",A(r.nodeName)))): (i=Re(r),(n&&"none"!==n||!i)&&pe._data(r,"olddisplay",i?n:pe.css(r,"display"))));
for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"": "none"));
return e
}

function q(e,t,n) {
var r=xt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"): t
}

function H(e,t,n,r,i) {
for(var o=n===(r?"border": "content")?4:"width"===t?1:0,a=0;
4>o;o+=2)"margin"===n&&(a+=pe.css(e,n+Pe[o],!0,i)),r?("content"===n&&(a-=pe.css(e,"padding"+Pe[o],!0,i)),"margin"!==n&&(a-=pe.css(e,"border"+Pe[o]+"Width",!0,i))): (a+=pe.css(e,"padding"+Pe[o],!0,i),"padding"!==n&&(a+=pe.css(e,"border"+Pe[o]+"Width",!0,i)));
return a
}

function M(t,n,r) {
var i=!0,o="width"===n?t.offsetWidth: t.offsetHeight,a=ht(t),s=de.boxSizing&&"border-box"===pe.css(t,"boxSizing",!1,a);
if(re.msFullscreenElement&&e.top!==e&&t.getClientRects().length&&(o=Math.round(100*t.getBoundingClientRect()[n])),0>=o||null==o){if(o=mt(t,n,a),(0>o||null==o)&&(o=t.style[n]),dt.test(o))return o;i=s&&(de.boxSizingReliable()||o===t.style[n]),o=parseFloat(o)||0
}

return o+H(t,n,r||(s?"border":"content"),i,a)+"px"
}

function P(e,t,n,r,i) {
return new P.prototype.init(e,t,n,r,i)
}

function R() {
return e.setTimeout(function(){Et=void 0
}),Et=pe.now()
}

function O(e,t) {
var n,r={height: e
},i=0;for(t=t?1:0;4>i;i+=2-t)n=Pe[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r
}

function $(e,t,n) {
for(var r,i=(B.tweeners[t]||[]).concat(B.tweeners["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r
}

function z(e,t,n) {
var r,i,o,a,s,u,l,c,d=this,f={
},p=e.style,h=e.nodeType&&Re(e),m=pe._data(e,"fxshow");n.queue||(s=pe._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function() {
s.unqueued||u()
}),s.unqueued++,d.always(function() {
d.always(function(){s.unqueued--,pe.queue(e,"fx").length||s.empty.fire()
})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],l=pe.css(e,"display"),c="none"===l?pe._data(e,"olddisplay")||A(e.nodeName):l,"inline"===c&&"none"===pe.css(e,"float")&&(de.inlineBlockNeedsLayout&&"inline"!==A(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",de.shrinkWrapBlocks()||d.always(function() {
p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));

for(r in t)if(i=t[r],Ft.exec(i)) {
if(delete t[r],o=o||"toggle"===i,i===(h?"hide": "show")){if("show"!==i||!m||void 0===m[r])continue;
h=!0
}

f[r]=m&&m[r]||pe.style(e,r)
}

else l=void 0;if(pe.isEmptyObject(f))"inline"===("none"===l?A(e.nodeName):l)&&(p.display=l);else {
m?"hidden"in m&&(h=m.hidden): m=pe._data(e,"fxshow",{
}),o&&(m.hidden=!h),h?pe(e).show():d.done(function() {
pe(e).hide()
}),d.done(function() {
var t;pe._removeData(e,"fxshow");for(t in f)pe.style(e,t,f[t])
});

for(r in f)a=$(h?m[r]:0,r,d),r in m||(m[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}

function I(e,t) {
var n,r,i,o,a;for(n in e)if(r=pe.camelCase(n),i=t[r],o=e[n],pe.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=pe.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)
}

else t[r]=i
}

function B(e,t,n) {
var r,i,o=0,a=B.prefilters.length,s=pe.Deferred().always(function(){delete u.elem
}),u=function() {
if(i)return!1;for(var t=Et||R(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n: (s.resolveWith(e,[l]),!1)
},l=s.promise( {
elem: e,props:pe.extend({
},t),opts:pe.extend(!0, {
specialEasing: {
},easing:pe.easing._default
},n),originalProperties:t,originalOptions:n,startTime:Et||R(),duration:n.duration,tweens:[],createTween:function(t,n) {
var r=pe.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r
},stop:function(t) {
var n=0,r=t?l.tweens.length: 0;
if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])): s.rejectWith(e,[l,t]),this
}}),c=l.props;for(I(c,l.opts.specialEasing);a>o;o++)if(r=B.prefilters[o].call(l,e,c,l.opts))return pe.isFunction(r.stop)&&(pe._queueHooks(l.elem,l.opts.queue).stop=pe.proxy(r.stop,r)),r;return pe.map(c,$,l),pe.isFunction(l.opts.start)&&l.opts.start.call(e,l),pe.fx.timer(pe.extend(u, {
elem: e,anim:l,queue:l.opts.queue
})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)
}

function W(e) {
return pe.attr(e,"class")||""
}

function X(e) {
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Ne)||[];if(pe.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)): (e[r]=e[r]||[]).push(n)
}}

function V(e,t,n,r) {
function i(s){var u;return o[s]=!0,pe.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l): void 0:(t.dataTypes.unshift(l),i(l),!1)
}),u
}

var o= {
},a=e===Jt;return i(t.dataTypes[0])||!o["*"]&&i("*")
}

function U(e,t) {
var n,r,i=pe.ajaxSettings.flatOptions||{
};

for(r in t)void 0!==t[r]&&((i[r]?e:n||(n= {
}))[r]=t[r]);return n&&pe.extend(!0,e,n),e
}

function Q(e,t,n) {
for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){u.unshift(a);break
}

if(u[0]in n)o=u[0];else {
for(a in n){if(!u[0]||e.converters[a+" "+u[0]]){o=a;break
}

r||(r=a)
}

o=o||r
}

return o?(o!==u[0]&&u.unshift(o),n[o]):void 0
}

function Y(e,t,n,r) {
var i,o,a,s,u,l={
},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o) {
if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]: l[i]!==!0&&(o=s[0],c.unshift(s[1]));
break
}

if(a!==!0)if(a&&e["throws"])t=a(t);else try {
t=a(t)
}

catch(e) {
return{state: "parsererror",error:a?e:"No conversion from "+u+" to "+o
}}}

return {
state: "success",data:t
}}

function G(e) {
return e.style&&e.style.display||pe.css(e,"display")
}

function J(e) {
for(;e&&1===e.nodeType;){if("none"===G(e)||"hidden"===e.type)return!0;e=e.parentNode
}

return!1
}

function Z(e,t,n,r) {
var i;if(pe.isArray(t))pe.each(t,function(t,i){n||nn.test(e)?r(e,i): Z(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)
});

else if(n||"object"!==pe.type(t))r(e,t);else for(i in t)Z(e+"["+i+"]",t[i],n,r)
}

function K() {
try{return new e.XMLHttpRequest
}

catch(e) {
}}

function ee() {
try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}

catch(e) {
}}

function te(e) {
return pe.isWindow(e)?e: 9===e.nodeType&&(e.defaultView||e.parentWindow)
}

var ne=[],re=e.document,ie=ne.slice,oe=ne.concat,ae=ne.push,se=ne.indexOf,ue= {
},le=ue.toString,ce=ue.hasOwnProperty,de= {
},fe="1.12.1",pe=function(e,t) {
return new pe.fn.init(e,t)
},he=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,me=/^-ms-/,ge=/-([\da-z])/gi,ve=function(e,t) {
return t.toUpperCase()
};

pe.fn=pe.prototype= {
jquery: fe,constructor:pe,selector:"",length:0,toArray:function(){return ie.call(this)
},get:function(e) {
return null!=e?0>e?this[e+this.length]: this[e]:ie.call(this)
},pushStack:function(e) {
var t=pe.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t
},each:function(e) {
return pe.each(this,e)
},map:function(e) {
return this.pushStack(pe.map(this,function(t,n){return e.call(t,n,t)
}))},slice:function() {
return this.pushStack(ie.apply(this,arguments))
},first:function() {
return this.eq(0)
},last:function() {
return this.eq(-1)
},eq:function(e) {
var t=this.length,n=+e+(0>e?t: 0);
return this.pushStack(n>=0&&t>n?[this[n]]: [])
},end:function() {
return this.prevObject||this.constructor()
},push:ae,sort:ne.sort,splice:ne.splice
},pe.extend=pe.fn.extend=function() {
var e,t,n,r,i,o,a=arguments[0]||{
},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]|| {
},s++),"object"==typeof a||pe.isFunction(a)||(a= {
}),s===u&&(a=this,s--);u>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(l&&n&&(pe.isPlainObject(n)||(t=pe.isArray(n)))?(t?(t=!1,o=e&&pe.isArray(e)?e:[]):o=e&&pe.isPlainObject(e)?e: {
},a[r]=pe.extend(l,o,n)):void 0!==n&&(a[r]=n));return a
},pe.extend( {
expando: "jQuery"+(fe+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)
},noop:function() {
},isFunction:function(e) {
return"function"===pe.type(e)
},isArray:Array.isArray||function(e) {
return"array"===pe.type(e)
},isWindow:function(e) {
return null!=e&&e==e.window
},isNumeric:function(e) {
var t=e&&e.toString();return!pe.isArray(e)&&t-parseFloat(t)+1>=0
},isEmptyObject:function(e) {
var t;for(t in e)return!1;return!0
},isPlainObject:function(e) {
var t;if(!e||"object"!==pe.type(e)||e.nodeType||pe.isWindow(e))return!1;try{if(e.constructor&&!ce.call(e,"constructor")&&!ce.call(e.constructor.prototype,"isPrototypeOf"))return!1
}

catch(e) {
return!1
}

if(!de.ownFirst)for(t in e)return ce.call(e,t);for(t in e);return void 0===t||ce.call(e,t)
},type:function(e) {
return null==e?e+"": "object"==typeof e||"function"==typeof e?ue[le.call(e)]||"object":typeof e
},globalEval:function(t) {
t&&pe.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)
},camelCase:function(e) {
return e.replace(me,"ms-").replace(ge,ve)
},nodeName:function(e,t) {
return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t) {
var r,i=0;if(n(e))for(r=e.length;r>i&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e
},trim:function(e) {
return null==e?"": (e+"").replace(he,"")
},makeArray:function(e,t) {
var r=t||[];return null!=e&&(n(Object(e))?pe.merge(r,"string"==typeof e?[e]: e):ae.call(r,e)),r
},inArray:function(e,t,n) {
var r;if(t){if(se)return se.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n): n:0;
r>n;n++)if(n in t&&t[n]===e)return n
}

return-1
},merge:function(e,t) {
for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e
},grep:function(e,t,n) {
for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i
},map:function(e,t,r) {
var i,o,a=0,s=[];if(n(e))for(i=e.length;i>a;a++)o=t(e[a],a,r),null!=o&&s.push(o);else for(a in e)o=t(e[a],a,r),null!=o&&s.push(o);return oe.apply([],s)
},guid:1,proxy:function(e,t) {
var n,r,i;return"string"==typeof t&&(i=e[t],t=e,e=i),pe.isFunction(e)?(n=ie.call(arguments,2),r=function(){return e.apply(t||this,n.concat(ie.call(arguments)))
},r.guid=e.guid=e.guid||pe.guid++,r):void 0
},now:function() {
return+new Date
},support:de
}),"function"==typeof Symbol&&(pe.fn[Symbol.iterator]=ne[Symbol.iterator]),pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t) {
ue["[object "+t+"]"]=t.toLowerCase()
});

var ye=function(e) {
function t(e,t,n,r){var i,o,a,s,u,l,d,p,h=t&&t.ownerDocument,m=t?t.nodeType: 9;
if(n=n||[],"string"!=typeof e||!e||1!==m&&9!==m&&11!==m)return n;if(!r&&((t?t.ownerDocument||t: $)!==L&&j(t),t=t||L,q)){if(11!==m&&(l=ve.exec(e)))if(i=l[1]){if(9===m){if(!(a=t.getElementById(i)))return n;
if(a.id===i)return n.push(a),n
}

else if(h&&(a=h.getElementById(i))&&R(t,a)&&a.id===i)return n.push(a),n
}

else {
if(l[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(i)),n
}

if(w.qsa&&!X[e+" "]&&(!H||!H.test(e))) {
if(1!==m)h=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(be,"\\$&"): t.setAttribute("id",s=O),d=E(e),o=d.length,u=fe.test(s)?"#"+s:"[id='"+s+"']";
o--;)d[o]=u+" "+f(d[o]);p=d.join(","),h=ye.test(e)&&c(t.parentNode)||t
}

if(p)try {
return Z.apply(n,h.querySelectorAll(p)),n
}

catch(e) {
}

finally {
s===O&&t.removeAttribute("id")
}}}

return F(e.replace(se,"$1"),t,n,r)
}

function n() {
function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r
}

var t=[];return e
}

function r(e) {
return e[O]=!0,e
}

function i(e) {
var t=L.createElement("div");try{return!!e(t)
}

catch(e) {
return!1
}

finally {
t.parentNode&&t.parentNode.removeChild(t),t=null
}}

function o(e,t) {
for(var n=e.split("|"),r=n.length;r--;)T.attrHandle[n[r]]=t
}

function a(e,t) {
var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||U)-(~e.sourceIndex||U);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1: -1
}

function s(e) {
return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e
}}

function u(e) {
return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e
}}

function l(e) {
return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
})})}

function c(e) {
return e&&"undefined"!=typeof e.getElementsByTagName&&e
}

function d() {
}

function f(e) {
for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r
}

function p(e,t,n) {
var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)
}

:function(t,n,a) {
var s,u,l,c=[z,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0
}

else for(;t=t[r];)if(1===t.nodeType||i) {
if(l=t[O]||(t[O]={
}),u=l[t.uniqueID]||(l[t.uniqueID]= {
}),(s=u[r])&&s[0]===z&&s[1]===o)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,a))return!0
}}}

function h(e) {
return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0
}

:e[0]
}

function m(e,n,r) {
for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r
}

function g(e,t,n,r,i) {
for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a
}

function v(e,t,n,i,o,a) {
return i&&!i[O]&&(i=v(i)),o&&!o[O]&&(o=v(o,a)),r(function(r,a,s,u){var l,c,d,f=[],p=[],h=a.length,v=r||m(t||"*",s.nodeType?[s]: s,[]),y=!e||!r&&t?v:g(v,f,e,s,u),b=n?o||(r?e:h||i)?[]:a:y;
if(n&&n(y,b,s,u),i)for(l=g(b,p),i(l,[],s,u),c=l.length;c--;)(d=l[c])&&(b[p[c]]=!(y[p[c]]=d));if(r){if(o||e){if(o){for(l=[],c=b.length;c--;)(d=b[c])&&l.push(y[c]=d);o(null,b=[],l,u)
}

for(c=b.length;c--;)(d=b[c])&&(l=o?ee(r,d):f[c])>-1&&(r[l]=!(a[l]=d))
}}

else b=g(b===a?b.splice(h,b.length):b),o?o(null,a,b,u):Z.apply(a,b)
})}

function y(e) {
for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1: 0,u=p(function(e){return e===t
},a,!0),l=p(function(e) {
return ee(t,e)>-1
},a,!0),c=[function(e,n,r) {
var i=!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r): l(e,n,r));
return t=null,i
}

];i>s;s++)if(n=T.relative[e[s].type])c=[p(h(c),n)];else {
if(n=T.filter[e[s].type].apply(null,e[s].matches),n[O]){for(r=++s;i>r&&!T.relative[e[r].type];r++);return v(s>1&&h(c),s>1&&f(e.slice(0,s-1).concat({value: " "===e[s-2].type?"*":""
})).replace(se,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&f(e))
}

c.push(n)
}

return h(c)
}

function b(e,n) {
var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,d,f,p=0,h="0",m=r&&[],v=[],y=D,b=r||o&&T.find.TAG("*",l),x=z+=null==y?1: Math.random()||.1,w=b.length;
for(l&&(D=a===L||a||l);h!==w&&null!=(c=b[h]);h++){if(o&&c){for(d=0,a||c.ownerDocument===L||(j(c),s=!q);f=e[d++];)if(f(c,a||L,s)){u.push(c);break
}

l&&(z=x)
}

i&&((c=!f&&c)&&p--,r&&m.push(c))
}

if(p+=h,i&&h!==p) {
for(d=0;f=n[d++];)f(m,v,a,s);if(r){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=G.call(u));v=g(v)
}

Z.apply(u,v),l&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(u)
}

return l&&(z=x,D=y),m
};

return i?r(a):a
}

var x,w,T,C,k,E,S,F,D,N,A,j,L,_,q,H,M,P,R,O="sizzle"+1*new Date,$=e.document,z=0,I=0,B=n(),W=n(),X=n(),V=function(e,t) {
return e===t&&(A=!0),0
},U=1<<31,Q= {
}

.hasOwnProperty,Y=[],G=Y.pop,J=Y.push,Z=Y.push,K=Y.slice,ee=function(e,t) {
for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1
},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(oe),fe=new RegExp("^"+re+"$"),pe= {
ID: new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")
},he=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^ {
]+\{\s*\[native \w/,ve=/^(?: #([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,be=/'|\\/g,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Te=function(){j()};try{Z.apply(Y=K.call($.childNodes),$.childNodes),Y[$.childNodes.length].nodeType}catch(e){Z={apply:Y.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},j=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,_=L.documentElement,q=!k(L),(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ge.test(L.getElementsByClassName),w.getById=i(function(e){return _.appendChild(e).id=O,!L.getElementsByName||!L.getElementsByName(O).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&q){var n=t.getElementById(e);return n?[n]:[]}},T.filter.ID=function(e){var t=e.replace(xe,we);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(xe,we);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return"undefined"!=typeof t.getElementsByClassName&&q?t.getElementsByClassName(e):void 0},M=[],H=[],(w.qsa=ge.test(L.querySelectorAll))&&(i(function(e){_.appendChild(e).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&H.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||H.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+O+"-]").length||H.push("~="),e.querySelectorAll(":checked").length||H.push(":checked"),e.querySelectorAll("a#"+O+"+*").length||H.push(".#.+[+~]")}),i(function(e){var t=L.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&H.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),(w.matchesSelector=ge.test(P=_.matches||_.webkitMatchesSelector||_.mozMatchesSelector||_.oMatchesSelector||_.msMatchesSelector))&&i(function(e){w.disconnectedMatch=P.call(e,"div"),P.call(e,"[s!='']:x"),M.push("!=",oe)}),H=H.length&&new RegExp(H.join("|")),M=M.length&&new RegExp(M.join("|")),t=ge.test(_.compareDocumentPosition),R=t||ge.test(_.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},V=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===$&&R($,e)?-1:t===L||t.ownerDocument===$&&R($,t)?1:N?ee(N,e)-ee(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];if(!i||!o)return e===L?-1:t===L?1:i?-1:o?1:N?ee(N,e)-ee(N,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]===$?-1:u[r]===$?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&j(e),n=n.replace(ce,"='$1']"),w.matchesSelector&&q&&!X[n+" "]&&(!M||!M.test(n))&&(!H||!H.test(n)))try{var r=P.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&j(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&j(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Q.call(T.attrHandle,t.toLowerCase())?n(e,t,!q):void 0;return void 0!==r?r:w.attributes||!q?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!w.detectDuplicates,N=!w.sortStable&&e.slice(0),e.sort(V),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return N=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,we),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,d,f,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,b=!1;if(g){if(o){for(;m;){for(f=t;f=f[m];)if(s?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(f=g,d=f[O]||(f[O]={}),c=d[f.uniqueID]||(d[f.uniqueID]={}),
l=c[e]||[],p=l[0]===z&&l[1],b=p&&l[2],f=p&&g.childNodes[p];f=++p&&f&&f[m]||(b=p=0)||h.pop();)if(1===f.nodeType&&++b&&f===t){c[e]=[z,p,b];break}}else if(y&&(f=t,d=f[O]||(f[O]={}),c=d[f.uniqueID]||(d[f.uniqueID]={}),l=c[e]||[],p=l[0]===z&&l[1],b=p),b===!1)for(;(f=++p&&f&&f[m]||(b=p=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++b||(y&&(d=f[O]||(f[O]={}),c=d[f.uniqueID]||(d[f.uniqueID]={}),c[e]=[z,b]),f!==t)););return b-=i,b===r||b%r===0&&b/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[O]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(se,"$1"));return i[O]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(xe,we),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return fe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,we).toLowerCase(),function(t){var n;do if(n=q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===_},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=u(x);return d.prototype=T.filters=T.pseudos,T.setFilters=new d,E=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=W[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){(!r||(i=ue.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=le.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(a in T.filter)!(i=pe[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):W(e,u).slice(0)},S=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=E(e)),n=t.length;n--;)o=y(t[n]),o[O]?r.push(o):i.push(o);o=X(e,b(i,r)),o.selector=e}return o},F=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,d=!r&&E(e=l.selector||e);if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&q&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(xe,we),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=pe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((u=T.find[s])&&(r=u(a.matches[0].replace(xe,we),ye.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&f(o),!e)return Z.apply(n,r),n;break}}return(l||S(e,d))(r,t,!q,n,!t||ye.test(e)&&c(t.parentNode)||t),n},w.sortStable=O.split("").sort(V).join("")===O,w.detectDuplicates=!!A,j(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);pe.find=ye,pe.expr=ye.selectors,pe.expr[":"]=pe.expr.pseudos,pe.uniqueSort=pe.unique=ye.uniqueSort,pe.text=ye.getText,pe.isXMLDoc=ye.isXML,pe.contains=ye.contains;var be=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&pe(e).is(n))break;r.push(e)}return r},xe=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},we=pe.expr.match.needsContext,Te=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Ce=/^.[^:#\[\.,]*$/;pe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?pe.find.matchesSelector(r,e)?[r]:[]:pe.find.matches(e,pe.grep(t,function(e){return 1===e.nodeType}))},pe.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(pe(e).filter(function(){for(t=0;i>t;t++)if(pe.contains(r[t],this))return!0}));for(t=0;i>t;t++)pe.find(e,r[t],n);return n=this.pushStack(i>1?pe.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&we.test(e)?pe(e):e||[],!1).length}});var ke,Ee=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Se=pe.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||ke,"string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:Ee.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof pe?t[0]:t,pe.merge(this,pe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:re,!0)),Te.test(r[1])&&pe.isPlainObject(t))for(r in t)pe.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}if(i=re.getElementById(r[2]),i&&i.parentNode){if(i.id!==r[2])return ke.find(e);this.length=1,this[0]=i}return this.context=re,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):pe.isFunction(e)?"undefined"!=typeof n.ready?n.ready(e):e(pe):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),pe.makeArray(e,this))};Se.prototype=pe.fn,ke=pe(re);var Fe=/^(?:parents|prev(?:Until|All))/,De={children:!0,contents:!0,next:!0,prev:!0};pe.fn.extend({has:function(e){var t,n=pe(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(pe.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=we.test(e)||"string"!=typeof e?pe(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&pe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?pe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?pe.inArray(this[0],pe(e)):pe.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(pe.uniqueSort(pe.merge(this.get(),pe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),pe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return be(e,"parentNode")},parentsUntil:function(e,t,n){return be(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return be(e,"nextSibling")},prevAll:function(e){return be(e,"previousSibling")},nextUntil:function(e,t,n){return be(e,"nextSibling",n)},prevUntil:function(e,t,n){return be(e,"previousSibling",n)},siblings:function(e){return xe((e.parentNode||{}).firstChild,e)},children:function(e){return xe(e.firstChild)},contents:function(e){return pe.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:pe.merge([],e.childNodes)}},function(e,t){pe.fn[e]=function(n,r){var i=pe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=pe.filter(r,i)),this.length>1&&(De[e]||(i=pe.uniqueSort(i)),Fe.test(e)&&(i=i.reverse())),this.pushStack(i)}});var Ne=/\S+/g;pe.Callbacks=function(e){e="string"==typeof e?o(e):pe.extend({},e);var t,n,r,i,a=[],s=[],u=-1,l=function(){for(i=e.once,r=t=!0;s.length;u=-1)for(n=s.shift();++u<a.length;)a[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=a.length,n=!1);e.memory||(n=!1),t=!1,i&&(a=n?[]:"")},c={add:function(){return a&&(n&&!t&&(u=a.length-1,s.push(n)),function t(n){pe.each(n,function(n,r){pe.isFunction(r)?e.unique&&c.has(r)||a.push(r):r&&r.length&&"string"!==pe.type(r)&&t(r)})}(arguments),n&&!t&&l()),this},remove:function(){return pe.each(arguments,function(e,t){for(var n;(n=pe.inArray(t,a,n))>-1;)a.splice(n,1),u>=n&&u--}),this},has:function(e){return e?pe.inArray(e,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return i=s=[],a=n="",this},disabled:function(){return!a},lock:function(){return i=!0,n||c.disable(),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},pe.extend({Deferred:function(e){var t=[["resolve","done",pe.Callbacks("once memory"),"resolved"],["reject","fail",pe.Callbacks("once memory"),"rejected"],["notify","progress",pe.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return pe.Deferred(function(n){pe.each(t,function(t,o){var a=pe.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&pe.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?pe.extend(e,r):r}},i={};return r.pipe=r.then,pe.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=ie.call(arguments),a=o.length,s=1!==a||e&&pe.isFunction(e.promise)?a:0,u=1===s?e:pe.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?ie.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&pe.isFunction(o[i].promise)?o[i].promise().progress(l(i,n,t)).done(l(i,r,o)).fail(u.reject):--s;return s||u.resolveWith(r,o),u.promise()}});var Ae;pe.fn.ready=function(e){return pe.ready.promise().done(e),this},pe.extend({isReady:!1,readyWait:1,holdReady:function(e){e?pe.readyWait++:pe.ready(!0)},ready:function(e){(e===!0?--pe.readyWait:pe.isReady)||(pe.isReady=!0,e!==!0&&--pe.readyWait>0||(Ae.resolveWith(re,[pe]),pe.fn.triggerHandler&&(pe(re).triggerHandler("ready"),pe(re).off("ready"))))}}),pe.ready.promise=function(t){if(!Ae)if(Ae=pe.Deferred(),"complete"===re.readyState||"loading"!==re.readyState&&!re.documentElement.doScroll)e.setTimeout(pe.ready);else if(re.addEventListener)re.addEventListener("DOMContentLoaded",s),e.addEventListener("load",s);else{re.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&re.documentElement}catch(e){}n&&n.doScroll&&!function t(){if(!pe.isReady){try{n.doScroll("left")}catch(n){return e.setTimeout(t,50)}a(),pe.ready()}}()}return Ae.promise(t)},pe.ready.promise();var je;for(je in pe(de))break;de.ownFirst="0"===je,de.inlineBlockNeedsLayout=!1,pe(function(){var e,t,n,r;n=re.getElementsByTagName("body")[0],n&&n.style&&(t=re.createElement("div"),r=re.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",de.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=re.createElement("div");de.deleteExpando=!0;try{delete e.test}catch(e){de.deleteExpando=!1}e=null}();var Le=function(e){var t=pe.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)},_e=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,qe=/([A-Z])/g;pe.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?pe.cache[e[pe.expando]]:e[pe.expando],!!e&&!l(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return d(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return d(e,t,!0)}}),pe.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=pe.data(o),1===o.nodeType&&!pe._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=pe.camelCase(r.slice(5)),u(o,r,i[r])));pe._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){pe.data(this,e)}):arguments.length>1?this.each(function(){pe.data(this,e,t)}):o?u(o,e,pe.data(o,e)):void 0},removeData:function(e){return this.each(function(){pe.removeData(this,e)})}}),pe.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=pe._data(e,t),n&&(!r||pe.isArray(n)?r=pe._data(e,t,pe.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=pe.queue(e,t),r=n.length,i=n.shift(),o=pe._queueHooks(e,t),a=function(){pe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return pe._data(e,n)||pe._data(e,n,{empty:pe.Callbacks("once memory").add(function(){pe._removeData(e,t+"queue"),pe._removeData(e,n)})})}}),pe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?pe.queue(this[0],e):void 0===t?this:this.each(function(){var n=pe.queue(this,e,t);pe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&pe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){pe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=pe.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=pe._data(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}}),function(){var e;de.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,r;return n=re.getElementsByTagName("body")[0],n&&n.style?(t=re.createElement("div"),r=re.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),"undefined"!=typeof t.style.zoom&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(re.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0}}();var He=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Me=new RegExp("^(?:([+-])=|)("+He+")([a-z%]*)$","i"),Pe=["Top","Right","Bottom","Left"],Re=function(e,t){return e=t||e,"none"===pe.css(e,"display")||!pe.contains(e.ownerDocument,e)},Oe=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===pe.type(n)){i=!0;for(s in n)Oe(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,pe.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(pe(e),n)})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},$e=/^(?:checkbox|radio)$/i,ze=/<([\w:-]+)/,Ie=/^$|\/(?:java|ecma)script/i,Be=/^\s+/,We="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var e=re.createElement("div"),t=re.createDocumentFragment(),n=re.createElement("input");e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",de.leadingWhitespace=3===e.firstChild.nodeType,de.tbody=!e.getElementsByTagName("tbody").length,de.htmlSerialize=!!e.getElementsByTagName("link").length,de.html5Clone="<:nav></:nav>"!==re.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,t.appendChild(n),de.appendChecked=n.checked,e.innerHTML="<textarea>x</textarea>",de.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,t.appendChild(e),n=re.createElement("input"),n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),de.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,de.noCloneEvent=!!e.addEventListener,e[pe.expando]=1,de.attributes=!e.getAttribute(pe.expando)}();var Xe={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:de.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};Xe.optgroup=Xe.option,Xe.tbody=Xe.tfoot=Xe.colgroup=Xe.caption=Xe.thead,Xe.th=Xe.td;var Ve=/<|&#?\w+;/,Ue=/<tbody/i;!function(){var t,n,r=re.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(de[t]=n in e)||(r.setAttribute(n,"t"),de[t]=r.attributes[n].expando===!1);r=null}();var Qe=/^(?:input|select|textarea)$/i,Ye=/^key/,Ge=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Je=/^(?:focusinfocus|focusoutblur)$/,Ze=/^([^.]*)(?:\.(.+)|)/;pe.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,d,f,p,h,m,g=pe._data(e);if(g){for(n.handler&&(u=n,n=u.handler,i=u.selector),n.guid||(n.guid=pe.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||(c=g.handle=function(e){return"undefined"==typeof pe||e&&pe.event.triggered===e.type?void 0:pe.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(Ne)||[""],s=t.length;s--;)o=Ze.exec(t[s])||[],p=m=o[1],h=(o[2]||"").split(".").sort(),p&&(l=pe.event.special[p]||{},p=(i?l.delegateType:l.bindType)||p,l=pe.event.special[p]||{},d=pe.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&pe.expr.match.needsContext.test(i),namespace:h.join(".")},u),(f=a[p])||(f=a[p]=[],f.delegateCount=0,l.setup&&l.setup.call(e,r,h,c)!==!1||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),l.add&&(l.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),i?f.splice(f.delegateCount++,0,d):f.push(d),pe.event.global[p]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,d,f,p,h,m,g=pe.hasData(e)&&pe._data(e);if(g&&(c=g.events)){for(t=(t||"").match(Ne)||[""],l=t.length;l--;)if(s=Ze.exec(t[l])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(d=pe.event.special[p]||{},p=(r?d.delegateType:d.bindType)||p,f=c[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;o--;)a=f[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,d.remove&&d.remove.call(e,a));u&&!f.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||pe.removeEvent(e,p,g.handle),delete c[p])}else for(p in c)pe.event.remove(e,p+t[l],n,r,!0);pe.isEmptyObject(c)&&(delete g.handle,pe._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,u,l,c,d,f=[r||re],p=ce.call(t,"type")?t.type:t,h=ce.call(t,"namespace")?t.namespace.split("."):[];if(s=c=r=r||re,3!==r.nodeType&&8!==r.nodeType&&!Je.test(p+pe.event.triggered)&&(p.indexOf(".")>-1&&(h=p.split("."),p=h.shift(),h.sort()),a=p.indexOf(":")<0&&"on"+p,t=t[pe.expando]?t:new pe.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:pe.makeArray(n,[t]),l=pe.event.special[p]||{},i||!l.trigger||l.trigger.apply(r,n)!==!1)){if(!i&&!l.noBubble&&!pe.isWindow(r)){for(u=l.delegateType||p,Je.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),c=s;c===(r.ownerDocument||re)&&f.push(c.defaultView||c.parentWindow||e)}for(d=0;(s=f[d++])&&!t.isPropagationStopped();)t.type=d>1?u:l.bindType||p,o=(pe._data(s,"events")||{})[t.type]&&pe._data(s,"handle"),o&&o.apply(s,n),o=a&&s[a],o&&o.apply&&Le(s)&&(t.result=o.apply(s,n),t.result===!1&&t.preventDefault());if(t.type=p,!i&&!t.isDefaultPrevented()&&(!l._default||l._default.apply(f.pop(),n)===!1)&&Le(r)&&a&&r[p]&&!pe.isWindow(r)){c=r[a],c&&(r[a]=null),pe.event.triggered=p;try{r[p]()}catch(e){}pe.event.triggered=void 0,c&&(r[a]=c)}return t.result}},dispatch:function(e){e=pe.event.fix(e);var t,n,r,i,o,a=[],s=ie.call(arguments),u=(pe._data(this,"events")||{})[e.type]||[],l=pe.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=pe.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.rnamespace||e.rnamespace.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((pe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?pe(i,this).index(u)>-1:pe.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[pe.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Ge.test(i)?this.mouseHooks:Ye.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new pe.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||re),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||re,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==x()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===x()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return pe.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return pe.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n){var r=pe.extend(new pe.Event,n,{type:e,isSimulated:!0});pe.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}},pe.removeEvent=re.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)}:function(e,t,n){var r="on"+t;e.detachEvent&&("undefined"==typeof e[r]&&(e[r]=null),e.detachEvent(r,n))},pe.Event=function(e,t){return this instanceof pe.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?y:b):this.type=e,t&&pe.extend(this,t),this.timeStamp=e&&e.timeStamp||pe.now(),void(this[pe.expando]=!0)):new pe.Event(e,t)},pe.Event.prototype={constructor:pe.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=y,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=y,e&&!this.isSimulated&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=y,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},pe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){pe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!pe.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),de.submit||(pe.event.special.submit={setup:function(){return!pe.nodeName(this,"form")&&void pe.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=pe.nodeName(t,"input")||pe.nodeName(t,"button")?pe.prop(t,"form"):void 0;n&&!pe._data(n,"submit")&&(pe.event.add(n,"submit._submit",function(e){e._submitBubble=!0}),pe._data(n,"submit",!0))})},postDispatch:function(e){e._submitBubble&&(delete e._submitBubble,this.parentNode&&!e.isTrigger&&pe.event.simulate("submit",this.parentNode,e))},teardown:function(){return!pe.nodeName(this,"form")&&void pe.event.remove(this,"._submit")}}),de.change||(pe.event.special.change={setup:function(){return Qe.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(pe.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._justChanged=!0)}),pe.event.add(this,"click._change",function(e){this._justChanged&&!e.isTrigger&&(this._justChanged=!1),pe.event.simulate("change",this,e)})),!1):void pe.event.add(this,"beforeactivate._change",function(e){var t=e.target;Qe.test(t.nodeName)&&!pe._data(t,"change")&&(pe.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||pe.event.simulate("change",this.parentNode,e)}),pe._data(t,"change",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return pe.event.remove(this,"._change"),!Qe.test(this.nodeName)}}),de.focusin||pe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){pe.event.simulate(t,e.target,pe.event.fix(e))};pe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=pe._data(r,t);i||r.addEventListener(e,n,!0),pe._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=pe._data(r,t)-1;i?pe._data(r,t,i):(r.removeEventListener(e,n,!0),pe._removeData(r,t))}}}),pe.fn.extend({on:function(e,t,n,r){return w(this,e,t,n,r)},one:function(e,t,n,r){return w(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,pe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=b),this.each(function(){pe.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){pe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?pe.event.trigger(e,t,n,!0):void 0}});var Ke=/ jQuery\d+="(?:null|\d+)"/g,et=new RegExp("<(?:"+We+")[\\s/>]","i"),tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,nt=/<script|<style|<link/i,rt=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/^true\/(.*)/,ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,at=p(re),st=at.appendChild(re.createElement("div"));pe.extend({htmlPrefilter:function(e){return e.replace(tt,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u=pe.contains(e.ownerDocument,e);if(de.html5Clone||pe.isXMLDoc(e)||!et.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(st.innerHTML=e.outerHTML,st.removeChild(o=st.firstChild)),!(de.noCloneEvent&&de.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||pe.isXMLDoc(e)))for(r=h(o),s=h(e),a=0;null!=(i=s[a]);++a)r[a]&&S(i,r[a]);if(t)if(n)for(s=s||h(e),r=r||h(o),a=0;null!=(i=s[a]);a++)E(i,r[a]);else E(e,o);return r=h(o,"script"),r.length>0&&m(r,!u&&h(e,"script")),r=s=i=null,o},cleanData:function(e,t){for(var n,r,i,o,a=0,s=pe.expando,u=pe.cache,l=de.attributes,c=pe.event.special;null!=(n=e[a]);a++)if((t||Le(n))&&(i=n[s],o=i&&u[i])){if(o.events)for(r in o.events)c[r]?pe.event.remove(n,r):pe.removeEvent(n,r,o.handle);u[i]&&(delete u[i],l||"undefined"==typeof n.removeAttribute?n[s]=void 0:n.removeAttribute(s),ne.push(i))}}}),pe.fn.extend({domManip:F,detach:function(e){return D(this,e,!0)},remove:function(e){return D(this,e)},text:function(e){return Oe(this,function(e){return void 0===e?pe.text(this):this.empty().append((this[0]&&this[0].ownerDocument||re).createTextNode(e))},null,e,arguments.length)},append:function(){return F(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.appendChild(e)}})},prepend:function(){return F(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return F(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return F(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&pe.cleanData(h(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&pe.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return pe.clone(this,e,t)})},html:function(e){return Oe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Ke,""):void 0;if("string"==typeof e&&!nt.test(e)&&(de.htmlSerialize||!et.test(e))&&(de.leadingWhitespace||!Be.test(e))&&!Xe[(ze.exec(e)||["",""])[1].toLowerCase()]){e=pe.htmlPrefilter(e);try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(pe.cleanData(h(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return F(this,arguments,function(t){var n=this.parentNode;pe.inArray(this,e)<0&&(pe.cleanData(h(this)),n&&n.replaceChild(t,this))},e)}}),pe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){pe.fn[e]=function(e){for(var n,r=0,i=[],o=pe(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),pe(o[r])[t](n),ae.apply(i,n.get());return this.pushStack(i)}});var ut,lt={HTML:"block",BODY:"block"},ct=/^margin/,dt=new RegExp("^("+He+")(?!px)[a-z%]+$","i"),ft=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i},pt=re.documentElement;!function(){function t(){var t,c,d=re.documentElement;d.appendChild(u),l.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
n=i=s=!1,r=a=!0,e.getComputedStyle&&(c=e.getComputedStyle(l),n="1%"!==(c||{}).top,s="2px"===(c||{}).marginLeft,i="4px"===(c||{width:"4px"}).width,l.style.marginRight="50%",r="4px"===(c||{marginRight:"4px"}).marginRight,t=l.appendChild(re.createElement("div")),t.style.cssText=l.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",l.style.width="1px",a=!parseFloat((e.getComputedStyle(t)||{}).marginRight),l.removeChild(t)),l.style.display="none",o=0===l.getClientRects().length,o&&(l.style.display="",l.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=l.getElementsByTagName("td"),t[0].style.cssText="margin:0;border:0;padding:0;display:none",o=0===t[0].offsetHeight,o&&(t[0].style.display="",t[1].style.display="none",o=0===t[0].offsetHeight)),d.removeChild(u)}var n,r,i,o,a,s,u=re.createElement("div"),l=re.createElement("div");l.style&&(l.style.cssText="float:left;opacity:.5",de.opacity="0.5"===l.style.opacity,de.cssFloat=!!l.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",de.clearCloneStyle="content-box"===l.style.backgroundClip,u=re.createElement("div"),u.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",l.innerHTML="",u.appendChild(l),de.boxSizing=""===l.style.boxSizing||""===l.style.MozBoxSizing||""===l.style.WebkitBoxSizing,pe.extend(de,{reliableHiddenOffsets:function(){return null==n&&t(),o},boxSizingReliable:function(){return null==n&&t(),i},pixelMarginRight:function(){return null==n&&t(),r},pixelPosition:function(){return null==n&&t(),n},reliableMarginRight:function(){return null==n&&t(),a},reliableMarginLeft:function(){return null==n&&t(),s}}))}();var ht,mt,gt=/^(top|right|bottom|left)$/;e.getComputedStyle?(ht=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},mt=function(e,t,n){var r,i,o,a,s=e.style;return n=n||ht(e),a=n?n.getPropertyValue(t)||n[t]:void 0,""!==a&&void 0!==a||pe.contains(e.ownerDocument,e)||(a=pe.style(e,t)),n&&!de.pixelMarginRight()&&dt.test(a)&&ct.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o),void 0===a?a:a+""}):pt.currentStyle&&(ht=function(e){return e.currentStyle},mt=function(e,t,n){var r,i,o,a,s=e.style;return n=n||ht(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),dt.test(a)&&!gt.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"});var vt=/alpha\([^)]*\)/i,yt=/opacity\s*=\s*([^)]*)/i,bt=/^(none|table(?!-c[ea]).+)/,xt=new RegExp("^("+He+")(.*)$","i"),wt={position:"absolute",visibility:"hidden",display:"block"},Tt={letterSpacing:"0",fontWeight:"400"},Ct=["Webkit","O","Moz","ms"],kt=re.createElement("div").style;pe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=mt(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":de.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=pe.camelCase(t),u=e.style;if(t=pe.cssProps[s]||(pe.cssProps[s]=L(s)||s),a=pe.cssHooks[t]||pe.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];if(o=typeof n,"string"===o&&(i=Me.exec(n))&&i[1]&&(n=f(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(pe.cssNumber[s]?"":"px")),de.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,r){var i,o,a,s=pe.camelCase(t);return t=pe.cssProps[s]||(pe.cssProps[s]=L(s)||s),a=pe.cssHooks[t]||pe.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=mt(e,t,r)),"normal"===o&&t in Tt&&(o=Tt[t]),""===n||n?(i=parseFloat(o),n===!0||isFinite(i)?i||0:o):o}}),pe.each(["height","width"],function(e,t){pe.cssHooks[t]={get:function(e,n,r){return n?bt.test(pe.css(e,"display"))&&0===e.offsetWidth?ft(e,wt,function(){return M(e,t,r)}):M(e,t,r):void 0},set:function(e,n,r){var i=r&&ht(e);return q(e,n,r?H(e,t,r,de.boxSizing&&"border-box"===pe.css(e,"boxSizing",!1,i),i):0)}}}),de.opacity||(pe.cssHooks.opacity={get:function(e,t){return yt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=pe.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===pe.trim(o.replace(vt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=vt.test(o)?o.replace(vt,i):o+" "+i)}}),pe.cssHooks.marginRight=j(de.reliableMarginRight,function(e,t){return t?ft(e,{display:"inline-block"},mt,[e,"marginRight"]):void 0}),pe.cssHooks.marginLeft=j(de.reliableMarginLeft,function(e,t){return t?(parseFloat(mt(e,"marginLeft"))||(pe.contains(e.ownerDocument,e)?e.getBoundingClientRect().left-ft(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}):0))+"px":void 0}),pe.each({margin:"",padding:"",border:"Width"},function(e,t){pe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Pe[r]+t]=o[r]||o[r-2]||o[0];return i}},ct.test(e)||(pe.cssHooks[e+t].set=q)}),pe.fn.extend({css:function(e,t){return Oe(this,function(e,t,n){var r,i,o={},a=0;if(pe.isArray(t)){for(r=ht(e),i=t.length;i>a;a++)o[t[a]]=pe.css(e,t[a],!1,r);return o}return void 0!==n?pe.style(e,t,n):pe.css(e,t)},e,t,arguments.length>1)},show:function(){return _(this,!0)},hide:function(){return _(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Re(this)?pe(this).show():pe(this).hide()})}}),pe.Tween=P,P.prototype={constructor:P,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||pe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(pe.cssNumber[n]?"":"px")},cur:function(){var e=P.propHooks[this.prop];return e&&e.get?e.get(this):P.propHooks._default.get(this)},run:function(e){var t,n=P.propHooks[this.prop];return this.options.duration?this.pos=t=pe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):P.propHooks._default.set(this),this}},P.prototype.init.prototype=P.prototype,P.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=pe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){pe.fx.step[e.prop]?pe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[pe.cssProps[e.prop]]&&!pe.cssHooks[e.prop]?e.elem[e.prop]=e.now:pe.style(e.elem,e.prop,e.now+e.unit)}}},P.propHooks.scrollTop=P.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},pe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},pe.fx=P.prototype.init,pe.fx.step={};var Et,St,Ft=/^(?:toggle|show|hide)$/,Dt=/queueHooks$/;pe.Animation=pe.extend(B,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return f(n.elem,e,Me.exec(t),n),n}]},tweener:function(e,t){pe.isFunction(e)?(t=e,e=["*"]):e=e.match(Ne);for(var n,r=0,i=e.length;i>r;r++)n=e[r],B.tweeners[n]=B.tweeners[n]||[],B.tweeners[n].unshift(t)},prefilters:[z],prefilter:function(e,t){t?B.prefilters.unshift(e):B.prefilters.push(e)}}),pe.speed=function(e,t,n){var r=e&&"object"==typeof e?pe.extend({},e):{complete:n||!n&&t||pe.isFunction(e)&&e,duration:e,easing:n&&t||t&&!pe.isFunction(t)&&t};return r.duration=pe.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in pe.fx.speeds?pe.fx.speeds[r.duration]:pe.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){pe.isFunction(r.old)&&r.old.call(this),r.queue&&pe.dequeue(this,r.queue)},r},pe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Re).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=pe.isEmptyObject(e),o=pe.speed(t,n,r),a=function(){var t=B(this,pe.extend({},e),o);(i||pe._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=pe.timers,a=pe._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&Dt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&pe.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=pe._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=pe.timers,a=r?r.length:0;for(n.finish=!0,pe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),pe.each(["toggle","show","hide"],function(e,t){var n=pe.fn[t];pe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(O(t,!0),e,r,i)}}),pe.each({slideDown:O("show"),slideUp:O("hide"),slideToggle:O("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){pe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),pe.timers=[],pe.fx.tick=function(){var e,t=pe.timers,n=0;for(Et=pe.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||pe.fx.stop(),Et=void 0},pe.fx.timer=function(e){pe.timers.push(e),e()?pe.fx.start():pe.timers.pop()},pe.fx.interval=13,pe.fx.start=function(){St||(St=e.setInterval(pe.fx.tick,pe.fx.interval))},pe.fx.stop=function(){e.clearInterval(St),St=null},pe.fx.speeds={slow:600,fast:200,_default:400},pe.fn.delay=function(t,n){return t=pe.fx?pe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e,t=re.createElement("input"),n=re.createElement("div"),r=re.createElement("select"),i=r.appendChild(re.createElement("option"));n=re.createElement("div"),n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],t.setAttribute("type","checkbox"),n.appendChild(t),e=n.getElementsByTagName("a")[0],e.style.cssText="top:1px",de.getSetAttribute="t"!==n.className,de.style=/top/.test(e.getAttribute("style")),de.hrefNormalized="/a"===e.getAttribute("href"),de.checkOn=!!t.value,de.optSelected=i.selected,de.enctype=!!re.createElement("form").enctype,r.disabled=!0,de.optDisabled=!i.disabled,t=re.createElement("input"),t.setAttribute("value",""),de.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),de.radioValue="t"===t.value}();var Nt=/\r/g;pe.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=pe.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,pe(this).val()):e,null==i?i="":"number"==typeof i?i+="":pe.isArray(i)&&(i=pe.map(i,function(e){return null==e?"":e+""})),t=pe.valHooks[this.type]||pe.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=pe.valHooks[i.type]||pe.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(Nt,""):null==n?"":n)):void 0}}),pe.extend({valHooks:{option:{get:function(e){var t=pe.find.attr(e,"value");return null!=t?t:pe.trim(pe.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],(n.selected||u===i)&&(de.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!pe.nodeName(n.parentNode,"optgroup"))){if(t=pe(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=pe.makeArray(t),a=i.length;a--;)if(r=i[a],pe.inArray(pe.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(e){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),pe.each(["radio","checkbox"],function(){pe.valHooks[this]={set:function(e,t){return pe.isArray(t)?e.checked=pe.inArray(pe(e).val(),t)>-1:void 0}},de.checkOn||(pe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var At,jt,Lt=pe.expr.attrHandle,_t=/^(?:checked|selected)$/i,qt=de.getSetAttribute,Ht=de.input;pe.fn.extend({attr:function(e,t){return Oe(this,pe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){pe.removeAttr(this,e)})}}),pe.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?pe.prop(e,t,n):(1===o&&pe.isXMLDoc(e)||(t=t.toLowerCase(),i=pe.attrHooks[t]||(pe.expr.match.bool.test(t)?jt:At)),void 0!==n?null===n?void pe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=pe.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!de.radioValue&&"radio"===t&&pe.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(Ne);if(o&&1===e.nodeType)for(;n=o[i++];)r=pe.propFix[n]||n,pe.expr.match.bool.test(n)?Ht&&qt||!_t.test(n)?e[r]=!1:e[pe.camelCase("default-"+n)]=e[r]=!1:pe.attr(e,n,""),e.removeAttribute(qt?n:r)}}),jt={set:function(e,t,n){return t===!1?pe.removeAttr(e,n):Ht&&qt||!_t.test(n)?e.setAttribute(!qt&&pe.propFix[n]||n,n):e[pe.camelCase("default-"+n)]=e[n]=!0,n}},pe.each(pe.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Lt[t]||pe.find.attr;Ht&&qt||!_t.test(t)?Lt[t]=function(e,t,r){var i,o;return r||(o=Lt[t],Lt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Lt[t]=o),i}:Lt[t]=function(e,t,n){return n?void 0:e[pe.camelCase("default-"+t)]?t.toLowerCase():null}}),Ht&&qt||(pe.attrHooks.value={set:function(e,t,n){return pe.nodeName(e,"input")?void(e.defaultValue=t):At&&At.set(e,t,n)}}),qt||(At={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},Lt.id=Lt.name=Lt.coords=function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},pe.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:At.set},pe.attrHooks.contenteditable={set:function(e,t,n){At.set(e,""!==t&&t,n)}},pe.each(["width","height"],function(e,t){pe.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),de.style||(pe.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Mt=/^(?:input|select|textarea|button|object)$/i,Pt=/^(?:a|area)$/i;pe.fn.extend({prop:function(e,t){return Oe(this,pe.prop,e,t,arguments.length>1)},removeProp:function(e){return e=pe.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(e){}})}}),pe.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&pe.isXMLDoc(e)||(t=pe.propFix[t]||t,i=pe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=pe.find.attr(e,"tabindex");return t?parseInt(t,10):Mt.test(e.nodeName)||Pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),de.hrefNormalized||pe.each(["href","src"],function(e,t){pe.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),de.optSelected||(pe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),pe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){pe.propFix[this.toLowerCase()]=this}),de.enctype||(pe.propFix.enctype="encoding");var Rt=/[\t\r\n\f]/g;pe.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).addClass(e.call(this,t,W(this)))});if("string"==typeof e&&e)for(t=e.match(Ne)||[];n=this[u++];)if(i=W(n),r=1===n.nodeType&&(" "+i+" ").replace(Rt," ")){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=pe.trim(r),i!==s&&pe.attr(n,"class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(pe.isFunction(e))return this.each(function(t){pe(this).removeClass(e.call(this,t,W(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(Ne)||[];n=this[u++];)if(i=W(n),r=1===n.nodeType&&(" "+i+" ").replace(Rt," ")){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=pe.trim(r),i!==s&&pe.attr(n,"class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):pe.isFunction(e)?this.each(function(n){pe(this).toggleClass(e.call(this,n,W(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=pe(this),o=e.match(Ne)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(void 0===e||"boolean"===n)&&(t=W(this),t&&pe._data(this,"__className__",t),pe.attr(this,"class",t||e===!1?"":pe._data(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+W(n)+" ").replace(Rt," ").indexOf(t)>-1)return!0;return!1}}),pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){pe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),pe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var Ot=e.location,$t=pe.now(),zt=/\?/,It=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;pe.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=pe.trim(t+"");return i&&!pe.trim(i.replace(It,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():pe.error("Invalid JSON: "+t)},pe.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(r=new e.DOMParser,n=r.parseFromString(t,"text/xml")):(n=new e.ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(e){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||pe.error("Invalid XML: "+t),n};var Bt=/#.*$/,Wt=/([?&])_=[^&]*/,Xt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Vt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ut=/^(?:GET|HEAD)$/,Qt=/^\/\//,Yt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Gt={},Jt={},Zt="*/".concat("*"),Kt=Ot.href,en=Yt.exec(Kt.toLowerCase())||[];pe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Kt,type:"GET",isLocal:Vt.test(en[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":pe.parseJSON,"text xml":pe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?U(U(e,pe.ajaxSettings),t):U(pe.ajaxSettings,e)},ajaxPrefilter:X(Gt),ajaxTransport:X(Jt),ajax:function(t,n){function r(t,n,r,i){var o,d,y,b,w,C=n;2!==x&&(x=2,u&&e.clearTimeout(u),c=void 0,s=i||"",T.readyState=t>0?4:0,o=t>=200&&300>t||304===t,r&&(b=Q(f,T,r)),b=Y(f,b,T,o),o?(f.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(pe.lastModified[a]=w),w=T.getResponseHeader("etag"),w&&(pe.etag[a]=w)),204===t||"HEAD"===f.type?C="nocontent":304===t?C="notmodified":(C=b.state,d=b.data,y=b.error,o=!y)):(y=C,(t||!C)&&(C="error",0>t&&(t=0))),T.status=t,T.statusText=(n||C)+"",o?m.resolveWith(p,[d,C,T]):m.rejectWith(p,[T,C,y]),T.statusCode(v),v=void 0,l&&h.trigger(o?"ajaxSuccess":"ajaxError",[T,f,o?d:y]),g.fireWith(p,[T,C]),l&&(h.trigger("ajaxComplete",[T,f]),--pe.active||pe.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,d,f=pe.ajaxSetup({},n),p=f.context||f,h=f.context&&(p.nodeType||p.jquery)?pe(p):pe.event,m=pe.Deferred(),g=pe.Callbacks("once memory"),v=f.statusCode||{},y={},b={},x=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!d)for(d={};t=Xt.exec(s);)d[t[1].toLowerCase()]=t[2];t=d[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)v[t]=[v[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return c&&c.abort(t),r(0,t),this}};if(m.promise(T).complete=g.add,T.success=T.done,T.error=T.fail,f.url=((t||f.url||Kt)+"").replace(Bt,"").replace(Qt,en[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=pe.trim(f.dataType||"*").toLowerCase().match(Ne)||[""],null==f.crossDomain&&(i=Yt.exec(f.url.toLowerCase()),f.crossDomain=!(!i||i[1]===en[1]&&i[2]===en[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(en[3]||("http:"===en[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=pe.param(f.data,f.traditional)),V(Gt,f,n,T),2===x)return T;l=pe.event&&f.global,l&&0===pe.active++&&pe.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Ut.test(f.type),a=f.url,f.hasContent||(f.data&&(a=f.url+=(zt.test(a)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=Wt.test(a)?a.replace(Wt,"$1_="+$t++):a+(zt.test(a)?"&":"?")+"_="+$t++)),f.ifModified&&(pe.lastModified[a]&&T.setRequestHeader("If-Modified-Since",pe.lastModified[a]),pe.etag[a]&&T.setRequestHeader("If-None-Match",pe.etag[a])),(f.data&&f.hasContent&&f.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",f.contentType),T.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Zt+"; q=0.01":""):f.accepts["*"]);for(o in f.headers)T.setRequestHeader(o,f.headers[o]);if(f.beforeSend&&(f.beforeSend.call(p,T,f)===!1||2===x))return T.abort();w="abort";for(o in{success:1,error:1,complete:1})T[o](f[o]);if(c=V(Jt,f,n,T)){if(T.readyState=1,l&&h.trigger("ajaxSend",[T,f]),2===x)return T;f.async&&f.timeout>0&&(u=e.setTimeout(function(){T.abort("timeout")},f.timeout));try{x=1,c.send(y,r)}catch(e){if(!(2>x))throw e;r(-1,e)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return pe.get(e,t,n,"json")},getScript:function(e,t){return pe.get(e,void 0,t,"script")}}),pe.each(["get","post"],function(e,t){pe[t]=function(e,n,r,i){return pe.isFunction(n)&&(i=i||r,r=n,n=void 0),pe.ajax(pe.extend({url:e,type:t,dataType:i,data:n,success:r},pe.isPlainObject(e)&&e))}}),pe._evalUrl=function(e){return pe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},pe.fn.extend({wrapAll:function(e){if(pe.isFunction(e))return this.each(function(t){pe(this).wrapAll(e.call(this,t))});if(this[0]){var t=pe(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return pe.isFunction(e)?this.each(function(t){pe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=pe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=pe.isFunction(e);return this.each(function(n){pe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){pe.nodeName(this,"body")||pe(this).replaceWith(this.childNodes)}).end()}}),pe.expr.filters.hidden=function(e){return de.reliableHiddenOffsets()?e.offsetWidth<=0&&e.offsetHeight<=0&&!e.getClientRects().length:J(e)},pe.expr.filters.visible=function(e){return!pe.expr.filters.hidden(e)};var tn=/%20/g,nn=/\[\]$/,rn=/\r?\n/g,on=/^(?:submit|button|image|reset|file)$/i,an=/^(?:input|select|textarea|keygen)/i;pe.param=function(e,t){var n,r=[],i=function(e,t){t=pe.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=pe.ajaxSettings&&pe.ajaxSettings.traditional),pe.isArray(e)||e.jquery&&!pe.isPlainObject(e))pe.each(e,function(){i(this.name,this.value)});else for(n in e)Z(n,e[n],t,i);return r.join("&").replace(tn,"+")},pe.fn.extend({serialize:function(){return pe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=pe.prop(this,"elements");return e?pe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!pe(this).is(":disabled")&&an.test(this.nodeName)&&!on.test(e)&&(this.checked||!$e.test(e))}).map(function(e,t){var n=pe(this).val();return null==n?null:pe.isArray(n)?pe.map(n,function(e){return{name:t.name,value:e.replace(rn,"\r\n")}}):{name:t.name,value:n.replace(rn,"\r\n")}}).get()}}),pe.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return this.isLocal?ee():re.documentMode>8?K():/^(get|post|head|put|delete|options)$/i.test(this.type)&&K()||ee()}:K;var sn=0,un={},ln=pe.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in un)un[e](void 0,!0)}),de.cors=!!ln&&"withCredentials"in ln,ln=de.ajax=!!ln,ln&&pe.ajaxTransport(function(t){if(!t.crossDomain||de.cors){var n;return{send:function(r,i){var o,a=t.xhr(),s=++sn;if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(o in r)void 0!==r[o]&&a.setRequestHeader(o,r[o]+"");a.send(t.hasContent&&t.data||null),n=function(e,r){var o,u,l;if(n&&(r||4===a.readyState))if(delete un[s],n=void 0,a.onreadystatechange=pe.noop,r)4!==a.readyState&&a.abort();else{l={},o=a.status,"string"==typeof a.responseText&&(l.text=a.responseText);try{u=a.statusText}catch(e){u=""}o||!t.isLocal||t.crossDomain?1223===o&&(o=204):o=l.text?200:404}l&&i(o,u,l,a.getAllResponseHeaders())},t.async?4===a.readyState?e.setTimeout(n):a.onreadystatechange=un[s]=n:n()},abort:function(){n&&n(void 0,!0)}}}}),pe.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),pe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return pe.globalEval(e),e}}}),pe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),pe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=re.head||pe("head")[0]||re.documentElement;return{send:function(r,i){t=re.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var cn=[],dn=/(=)\?(?=&|$)|\?\?/;pe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=cn.pop()||pe.expando+"_"+$t++;return this[e]=!0,e}}),pe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=pe.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(zt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||pe.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?pe(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,cn.push(i)),a&&pe.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),de.createHTMLDocument=function(){if(!re.implementation.createHTMLDocument)return!1;var e=re.implementation.createHTMLDocument("");return e.body.innerHTML="<form></form><form></form>",2===e.body.childNodes.length}(),pe.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||(de.createHTMLDocument?re.implementation.createHTMLDocument(""):re);var r=Te.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=v([e],t,i),i&&i.length&&pe(i).remove(),pe.merge([],r.childNodes))};var fn=pe.fn.load;pe.fn.load=function(e,t,n){if("string"!=typeof e&&fn)return fn.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=pe.trim(e.slice(s,e.length)),e=e.slice(0,s)),pe.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&pe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?pe("<div>").append(pe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(a,o||[e.responseText,t,e])})}),this},pe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){pe.fn[t]=function(e){return this.on(t,e)}}),pe.expr.filters.animated=function(e){return pe.grep(pe.timers,function(t){return e===t.elem}).length},pe.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=pe.css(e,"position"),d=pe(e),f={};"static"===c&&(e.style.position="relative"),s=d.offset(),o=pe.css(e,"top"),u=pe.css(e,"left"),l=("absolute"===c||"fixed"===c)&&pe.inArray("auto",[o,u])>-1,l?(r=d.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),pe.isFunction(t)&&(t=t.call(e,n,pe.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):d.css(f)}},pe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){pe.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,pe.contains(t,i)?("undefined"!=typeof i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=te(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===pe.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),pe.nodeName(e[0],"html")||(n=e.offset()),n.top+=pe.css(e[0],"borderTopWidth",!0),n.left+=pe.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-pe.css(r,"marginTop",!0),left:t.left-n.left-pe.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&!pe.nodeName(e,"html")&&"static"===pe.css(e,"position");)e=e.offsetParent;return e||pt})}}),pe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);pe.fn[e]=function(r){return Oe(this,function(e,r,i){var o=te(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?pe(o).scrollLeft():i,n?i:pe(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),pe.each(["top","left"],function(e,t){pe.cssHooks[t]=j(de.pixelPosition,function(e,n){return n?(n=mt(e,t),dt.test(n)?pe(e).position()[t]+"px":n):void 0})}),pe.each({Height:"height",Width:"width"},function(e,t){pe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){pe.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return Oe(this,function(t,n,r){var i;return pe.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?pe.css(t,n,a):pe.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),pe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),pe.fn.size=function(){return this.length},pe.fn.andSelf=pe.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return pe});var pn=e.jQuery,hn=e.$;return pe.noConflict=function(t){return e.$===pe&&(e.$=hn),t&&e.jQuery===pe&&(e.jQuery=pn),pe},t||(e.jQuery=e.$=pe),pe});var checkCookie=function(){var e=!!navigator.cookieEnabled;return"undefined"!=typeof navigator.cookieEnabled||e||(createCookie(testCookie,momentaryTest),e=document.cookie.indexOf("testcookie")!=-1),!!e||showCookieFail()},showCookieFail=function(){$(".no-cookies").addClass("show")},createCookie=function(e,t,n){var r;if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),r="; expires="+i.toGMTString()}else r=10;document.cookie=e+"="+t+r+"; path=/"},acceptedCookiesCookie=getCookie("principles_com_cookies");0===acceptedCookiesCookie.length?$(".app-cookies, footer").addClass("unaccepted"):$(".app-cookies, footer").removeClass("unaccepted"),$(".app-cookies").on("click","#cookies",function(){createCookie("principles_com_cookies","accepts-cookies",30),$("footer").removeClass("unaccepted"),$(".app-cookies").slideToggle(400,function(){$(this).parent().removeClass("unaccepted")})}),checkCookie();var jsSocialShares=document.querySelectorAll(".js-social-share");jsSocialShares&&[].forEach.call(jsSocialShares,function(e){e.addEventListener("click",function(t){t.preventDefault();var n=e.getAttribute("data-height"),r=e.getAttribute("data-width");windowPopup(this.href,r,n)})}),document.documentElement.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()},!1);var lastTouchEnd=0;document.documentElement.addEventListener("touchend",function(e){var t=(new Date).getTime();t-lastTouchEnd<=300&&e.preventDefault(),lastTouchEnd=t},!1),!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var n=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(n))}function n(t){var n=t.target,r=e(n);if(!r.is("[type=submit],[type=image]")){var i=r.closest("[type=submit]");if(0===i.length)return;n=i[0]}var o=this;if(o.clk=n,"image"==n.type)if(void 0!==t.offsetX)o.clk_x=t.offsetX,o.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var a=r.offset();o.clk_x=t.pageX-a.left,o.clk_y=t.pageY-a.top}else o.clk_x=t.pageX-n.offsetLeft,o.clk_y=t.pageY-n.offsetTop;setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function r(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var i={};i.fileapi=void 0!==e("<input type='file'/>").get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function n(n){var r,i,o=e.param(n,t.traditional).split("&"),a=o.length,s=[];for(r=0;a>r;r++)o[r]=o[r].replace(/\+/g," "),i=o[r].split("="),s.push([decodeURIComponent(i[0]),decodeURIComponent(i[1])]);return s}function a(r){for(var i=new FormData,o=0;o<r.length;o++)i.append(r[o].name,r[o].value);if(t.extraData){var a=n(t.extraData);for(o=0;o<a.length;o++)a[o]&&i.append(a[o][0],a[o][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var n=e.ajaxSettings.xhr();return n.upload&&n.upload.addEventListener("progress",function(e){var n=0,r=e.loaded||e.position,i=e.total;e.lengthComputable&&(n=Math.ceil(r/i*100)),t.uploadProgress(e,r,i,n)},!1),n}),s.data=null;var l=s.beforeSend;return s.beforeSend=function(e,n){n.data=t.formData?t.formData:i,l&&l.call(this,e,n)},e.ajax(s)}function s(n){function i(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){r("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(n){r("cannot get iframe.contentDocument: "+n),t=e.document}return t}function a(){function t(){try{var e=i(v).readyState;r("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(e){r("Server abort: ",e," (",e.name,")"),s(S),T&&clearTimeout(T),T=void 0}}var n=d.attr2("target"),o=d.attr2("action"),a="multipart/form-data",l=d.attr("enctype")||d.attr("encoding")||a;C.setAttribute("target",h),(!u||/post/i.test(u))&&C.setAttribute("method","POST"),o!=f.url&&C.setAttribute("action",f.url),f.skipEncodingOverride||u&&!/post/i.test(u)||d.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(T=setTimeout(function(){w=!0,s(E)},f.timeout));var c=[];try{if(f.extraData)for(var p in f.extraData)f.extraData.hasOwnProperty(p)&&c.push(e.isPlainObject(f.extraData[p])&&f.extraData[p].hasOwnProperty("name")&&f.extraData[p].hasOwnProperty("value")?e('<input type="hidden" name="'+f.extraData[p].name+'">').val(f.extraData[p].value).appendTo(C)[0]:e('<input type="hidden" name="'+p+'">').val(f.extraData[p]).appendTo(C)[0]);f.iframeTarget||g.appendTo("body"),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{C.submit()}catch(e){var m=document.createElement("form").submit;m.apply(C)}}finally{C.setAttribute("action",o),C.setAttribute("enctype",l),n?C.setAttribute("target",n):d.removeAttr("target"),e(c).remove()}}function s(t){if(!y.aborted&&!j){if(A=i(v),A||(r("cannot access response document"),t=S),t===E&&y)return y.abort("timeout"),void k.reject(y,"timeout");if(t==S&&y)return y.abort("server abort"),void k.reject(y,"error","server abort");if(A&&A.location.href!=f.iframeSrc||w){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var n,o="success";try{if(w)throw"timeout";var a="xml"==f.dataType||A.XMLDocument||e.isXMLDoc(A);if(r("isXml="+a),!a&&window.opera&&(null===A.body||!A.body.innerHTML)&&--L)return r("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=A.body?A.body:A.documentElement;y.responseText=u?u.innerHTML:null,y.responseXML=A.XMLDocument?A.XMLDocument:A,a&&(f.dataType="xml"),y.getResponseHeader=function(e){var t={"content-type":f.dataType};return t[e.toLowerCase()]},u&&(y.status=Number(u.getAttribute("status"))||y.status,y.statusText=u.getAttribute("statusText")||y.statusText);var l=(f.dataType||"").toLowerCase(),c=/(json|script|text)/.test(l);if(c||f.textarea){var d=A.getElementsByTagName("textarea")[0];if(d)y.responseText=d.value,y.status=Number(d.getAttribute("status"))||y.status,y.statusText=d.getAttribute("statusText")||y.statusText;else if(c){var h=A.getElementsByTagName("pre")[0],m=A.getElementsByTagName("body")[0];h?y.responseText=h.textContent?h.textContent:h.innerText:m&&(y.responseText=m.textContent?m.textContent:m.innerText)}}else"xml"==l&&!y.responseXML&&y.responseText&&(y.responseXML=_(y.responseText));try{N=H(y,l,f)}catch(e){o="parsererror",y.error=n=e||o}}catch(e){r("error caught: ",e),o="error",y.error=n=e||o}y.aborted&&(r("upload aborted"),o=null),y.status&&(o=y.status>=200&&y.status<300||304===y.status?"success":"error"),"success"===o?(f.success&&f.success.call(f.context,N,"success",y),k.resolve(y.responseText,"success",y),p&&e.event.trigger("ajaxSuccess",[y,f])):o&&(void 0===n&&(n=y.statusText),f.error&&f.error.call(f.context,y,o,n),k.reject(y,"error",n),p&&e.event.trigger("ajaxError",[y,f,n])),p&&e.event.trigger("ajaxComplete",[y,f]),p&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,y,o),j=!0,f.timeout&&clearTimeout(T),setTimeout(function(){f.iframeTarget?g.attr("src",f.iframeSrc):g.remove(),y.responseXML=null},100)}}}var l,c,f,p,h,g,v,y,b,x,w,T,C=d[0],k=e.Deferred();if(k.abort=function(e){y.abort(e)},n)for(c=0;c<m.length;c++)l=e(m[c]),o?l.prop("disabled",!1):l.removeAttr("disabled");if(f=e.extend(!0,{},e.ajaxSettings,t),f.context=f.context||f,h="jqFormIO"+(new Date).getTime(),f.iframeTarget?(g=e(f.iframeTarget),x=g.attr2("name"),x?h=x:g.attr2("name",h)):(g=e('<iframe name="'+h+'" src="'+f.iframeSrc+'" />'),g.css({position:"absolute",top:"-1000px",left:"-1000px"})),v=g[0],y={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var n="timeout"===t?"timeout":"aborted";r("aborting upload... "+n),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}g.attr("src",f.iframeSrc),y.error=n,f.error&&f.error.call(f.context,y,n,t),p&&e.event.trigger("ajaxError",[y,f,n]),f.complete&&f.complete.call(f.context,y,n)}},p=f.global,p&&0===e.active++&&e.event.trigger("ajaxStart"),p&&e.event.trigger("ajaxSend",[y,f]),f.beforeSend&&f.beforeSend.call(f.context,y,f)===!1)return f.global&&e.active--,k.reject(),k;if(y.aborted)return k.reject(),k;b=C.clk,b&&(x=b.name,x&&!b.disabled&&(f.extraData=f.extraData||{},f.extraData[x]=b.value,"image"==b.type&&(f.extraData[x+".x"]=C.clk_x,f.extraData[x+".y"]=C.clk_y)));var E=1,S=2,F=e("meta[name=csrf-token]").attr("content"),D=e("meta[name=csrf-param]").attr("content");D&&F&&(f.extraData=f.extraData||{},f.extraData[D]=F),f.forceSync?a():setTimeout(a,10);var N,A,j,L=50,_=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},q=e.parseJSON||function(e){return window.eval("("+e+")")},H=function(t,n,r){var i=t.getResponseHeader("content-type")||"",o="xml"===n||!n&&i.indexOf("xml")>=0,a=o?t.responseXML:t.responseText;return o&&"parsererror"===a.documentElement.nodeName&&e.error&&e.error("parsererror"),r&&r.dataFilter&&(a=r.dataFilter(a,n)),"string"==typeof a&&("json"===n||!n&&i.indexOf("json")>=0?a=q(a):("script"===n||!n&&i.indexOf("javascript")>=0)&&e.globalEval(a)),a};return k}if(!this.length)return r("ajaxSubmit: skipping submit process - no element selected"),this;var u,l,c,d=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),l=t.url||this.attr2("action"),c="string"==typeof l?e.trim(l):"",c=c||window.location.href||"",c&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var f={};if(this.trigger("form-pre-serialize",[this,t,f]),f.veto)return r("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return r("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=t.traditional;void 0===p&&(p=e.ajaxSettings.traditional);var h,m=[],g=this.formToArray(t.semantic,m);if(t.data&&(t.extraData=t.data,h=e.param(t.data,p)),t.beforeSubmit&&t.beforeSubmit(g,this,t)===!1)return r("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[g,this,t,f]),f.veto)return r("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var v=e.param(g,p);h&&(v=v?v+"&"+h:h),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+v,t.data=null):t.data=v;var y=[];if(t.resetForm&&y.push(function(){d.resetForm()}),t.clearForm&&y.push(function(){d.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};y.push(function(n){var r=t.replaceTarget?"replaceWith":"html";e(t.target)[r](n).each(b,arguments)})}else t.success&&y.push(t.success);if(t.success=function(e,n,r){for(var i=t.context||this,o=0,a=y.length;a>o;o++)y[o].apply(i,[e,n,r||d,d])},t.error){var x=t.error;t.error=function(e,n,r){var i=t.context||this;x.apply(i,[e,n,r,d])}}if(t.complete){var w=t.complete;t.complete=function(e,n){var r=t.context||this;w.apply(r,[e,n,d])}}var T=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),C=T.length>0,k="multipart/form-data",E=d.attr("enctype")==k||d.attr("encoding")==k,S=i.fileapi&&i.formdata;r("fileAPI :"+S);var F,D=(C||E)&&!S;t.iframe!==!1&&(t.iframe||D)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=s(g)}):F=s(g):F=(C||E)&&S?a(g):e.ajax(t),d.removeData("jqxhr").data("jqxhr",F);for(var N=0;N<m.length;N++)m[N]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(i){if(i=i||{},i.delegation=i.delegation&&e.isFunction(e.fn.on),!i.delegation&&0===this.length){var o={s:this.selector,c:this.context};return!e.isReady&&o.s?(r("DOM not ready, queuing ajaxForm"),e(function(){e(o.s,o.c).ajaxForm(i)}),this):(r("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return i.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,n).on("submit.form-plugin",this.selector,i,t).on("click.form-plugin",this.selector,i,n),this):this.ajaxFormUnbind().bind("submit.form-plugin",i,t).bind("click.form-plugin",i,n)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,n){var r=[];if(0===this.length)return r;var o,a=this[0],s=this.attr("id"),u=t?a.getElementsByTagName("*"):a.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(o=e(':input[form="'+s+'"]').get(),o.length&&(u=(u||[]).concat(o))),!u||!u.length)return r;var l,c,d,f,p,h,m;for(l=0,h=u.length;h>l;l++)if(p=u[l],d=p.name,d&&!p.disabled)if(t&&a.clk&&"image"==p.type)a.clk==p&&(r.push({name:d,value:e(p).val(),type:p.type}),r.push({name:d+".x",value:a.clk_x},{name:d+".y",value:a.clk_y}));else if(f=e.fieldValue(p,!0),f&&f.constructor==Array)for(n&&n.push(p),c=0,m=f.length;m>c;c++)r.push({name:d,value:f[c]});else if(i.fileapi&&"file"==p.type){n&&n.push(p);var g=p.files;if(g.length)for(c=0;c<g.length;c++)r.push({name:d,value:g[c],type:p.type});else r.push({name:d,value:"",type:p.type})}else null!==f&&"undefined"!=typeof f&&(n&&n.push(p),r.push({name:d,value:f,type:p.type,required:p.required}));if(!t&&a.clk){var v=e(a.clk),y=v[0];d=y.name,d&&!y.disabled&&"image"==y.type&&(r.push({name:d,value:v.val()}),r.push({name:d+".x",value:a.clk_x},{name:d+".y",value:a.clk_y}))}return r},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var n=[];return this.each(function(){var r=this.name;if(r){var i=e.fieldValue(this,t);if(i&&i.constructor==Array)for(var o=0,a=i.length;a>o;o++)n.push({name:r,value:i[o]});else null!==i&&"undefined"!=typeof i&&n.push({name:this.name,value:i})}}),e.param(n)},e.fn.fieldValue=function(t){for(var n=[],r=0,i=this.length;i>r;r++){var o=this[r],a=e.fieldValue(o,t);null===a||"undefined"==typeof a||a.constructor==Array&&!a.length||(a.constructor==Array?e.merge(n,a):n.push(a))}return n},e.fieldValue=function(t,n){var r=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===n&&(n=!0),n&&(!r||t.disabled||"reset"==i||"button"==i||("checkbox"==i||"radio"==i)&&!t.checked||("submit"==i||"image"==i)&&t.form&&t.form.clk!=t||"select"==o&&-1==t.selectedIndex))return null;if("select"==o){var a=t.selectedIndex;if(0>a)return null;for(var s=[],u=t.options,l="select-one"==i,c=l?a+1:u.length,d=l?a:0;c>d;d++){var f=u[d];if(f.selected){var p=f.value;if(p||(p=f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value),l)return p;s.push(p)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var n=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var r=this.type,i=this.tagName.toLowerCase();n.test(r)||"textarea"==i?this.value="":"checkbox"==r||"radio"==r?this.checked=!1:"select"==i?this.selectedIndex=-1:"file"==r?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(r)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var n=this.type;if("checkbox"==n||"radio"==n)this.checked=t;else if("option"==this.tagName.toLowerCase()){var r=e(this).parent("select");t&&r[0]&&"select-one"==r[0].type&&r.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}),!function(e){e.extend(e.fn,{validate:function(t){if(!this.length)return void(t&&t.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var n=e.data(this[0],"validator");return n?n:(this.attr("novalidate","novalidate"),n=new e.validator(t,this[0]),e.data(this[0],"validator",n),n.settings.onsubmit&&(this.validateDelegate(":submit","click",function(t){n.settings.submitHandler&&(n.submitButton=t.target),e(t.target).hasClass("cancel")&&(n.cancelSubmit=!0),void 0!==e(t.target).attr("formnovalidate")&&(n.cancelSubmit=!0)}),this.submit(function(t){function r(){var r;return!n.settings.submitHandler||(n.submitButton&&(r=e("<input type='hidden'/>").attr("name",n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)),n.settings.submitHandler.call(n,n.currentForm,t),n.submitButton&&r.remove(),!1)}return n.settings.debug&&t.preventDefault(),n.cancelSubmit?(n.cancelSubmit=!1,r()):n.form()?n.pendingRequest?(n.formSubmitted=!0,!1):r():(n.focusInvalid(),!1)})),n)},valid:function(){var t,n;return e(this[0]).is("form")?t=this.validate().form():(t=!0,n=e(this[0].form).validate(),this.each(function(){t=n.element(this)&&t})),t},removeAttrs:function(t){var n={},r=this;return e.each(t.split(/\s/),function(e,t){n[t]=r.attr(t),r.removeAttr(t)}),n},rules:function(t,n){var r,i,o,a,s,u,l=this[0];if(t)switch(r=e.data(l.form,"validator").settings,i=r.rules,o=e.validator.staticRules(l),t){case"add":e.extend(o,e.validator.normalizeRule(n)),delete o.messages,i[l.name]=o,n.messages&&(r.messages[l.name]=e.extend(r.messages[l.name],n.messages));break;case"remove":return n?(u={},e.each(n.split(/\s/),function(t,n){u[n]=o[n],delete o[n],"required"===n&&e(l).removeAttr("aria-required")}),u):(delete i[l.name],o)}return a=e.validator.normalizeRules(e.extend({},e.validator.classRules(l),e.validator.attributeRules(l),e.validator.dataRules(l),e.validator.staticRules(l)),l),a.required&&(s=a.required,delete a.required,a=e.extend({required:s},a),e(l).attr("aria-required","true")),a.remote&&(s=a.remote,delete a.remote,a=e.extend(a,{remote:s})),a}}),e.extend(e.expr[":"],{blank:function(t){return!e.trim(""+e(t).val())},filled:function(t){return!!e.trim(""+e(t).val())},unchecked:function(t){return!e(t).prop("checked")}}),e.validator=function(t,n){this.settings=e.extend(!0,{},e.validator.defaults,t),this.currentForm=n,this.init()},e.validator.format=function(t,n){return 1===arguments.length?function(){var n=e.makeArray(arguments);return n.unshift(t),e.validator.format.apply(this,n)}:(arguments.length>2&&n.constructor!==Array&&(n=e.makeArray(arguments).slice(1)),n.constructor!==Array&&(n=[n]),e.each(n,function(e,n){t=t.replace(new RegExp("\\{"+e+"\\
}","g"),function(){return n})}),t)},e.extend(e.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:e([]),errorLabelContainer:e([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(e){this.lastActive=e,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,e,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(e)).hide())},onfocusout:function(e){this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||this.element(e)},onkeyup:function(e,t){(9!==t.which||""!==this.elementValue(e))&&(e.name in this.submitted||e===this.lastElement)&&this.element(e)},onclick:function(e){e.name in this.submitted?this.element(e):e.parentNode.name in this.submitted&&this.element(e.parentNode)},highlight:function(t,n,r){"radio"===t.type?this.findByName(t.name).addClass(n).removeClass(r):e(t).addClass(n).removeClass(r)},unhighlight:function(t,n,r){"radio"===t.type?this.findByName(t.name).removeClass(n).addClass(r):e(t).removeClass(n).addClass(r)}},setDefaults:function(t){e.extend(e.validator.defaults,t)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:e.validator.format("Please enter no more than {
0
}

characters."),minlength:e.validator.format("Please enter at least {
0
}

characters."),rangelength:e.validator.format("Please enter a value between {
0
}

and {
1
}

characters long."),range:e.validator.format("Please enter a value between {
0
}

and {
1
}

."),max:e.validator.format("Please enter a value less than or equal to {
0
}

."),min:e.validator.format("Please enter a value greater than or equal to {
0
}

.")},autoCreateRanges:!1,prototype:{init:function(){function t(t){var n=e.data(this[0].form,"validator"),r="on"+t.type.replace(/^validate/,""),i=n.settings;i[r]&&!this.is(i.ignore)&&i[r].call(n,this[0],t)}this.labelContainer=e(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||e(this.currentForm),this.containers=e(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var n,r=this.groups={};e.each(this.settings.groups,function(t,n){"string"==typeof n&&(n=n.split(/\s/)),e.each(n,function(e,n){r[n]=t})}),n=this.settings.rules,e.each(n,function(t,r){n[t]=e.validator.normalizeRule(r)}),e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",t).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",t),this.settings.invalidHandler&&e(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),e.extend(this.submitted,this.errorMap),this.invalid=e.extend({},this.errorMap),this.valid()||e(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var e=0,t=this.currentElements=this.elements();t[e];e++)this.check(t[e]);return this.valid()},element:function(t){var n=this.clean(t),r=this.validationTargetFor(n),i=!0;return this.lastElement=r,void 0===r?delete this.invalid[n.name]:(this.prepareElement(r),this.currentElements=e(r),i=this.check(r)!==!1,i?delete this.invalid[r.name]:this.invalid[r.name]=!0),e(t).attr("aria-invalid",!i),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(t){if(t){e.extend(this.errorMap,t),this.errorList=[];for(var n in t)this.errorList.push({message:t[n],element:this.findByName(n)[0]});this.successList=e.grep(this.successList,function(e){return!(e.name in t)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){e.fn.resetForm&&e(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(e){var t,n=0;for(t in e)n++;return n},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{e(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var t=this.lastActive;return t&&1===e.grep(this.errorList,function(e){return e.element.name===t.name}).length&&t},elements:function(){var t=this,n={};return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&t.settings.debug&&window.console&&console.error("%o has no name assigned",this),!(this.name in n||!t.objectLength(e(this).rules()))&&(n[this.name]=!0,!0)})},clean:function(t){return e(t)[0]},errors:function(){var t=this.settings.errorClass.split(" ").join(".");return e(this.settings.errorElement+"."+t,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=e([]),this.toHide=e([]),this.currentElements=e([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(e){this.reset(),this.toHide=this.errorsFor(e)},elementValue:function(t){var n,r=e(t),i=r.attr("type");return"radio"===i||"checkbox"===i?e("input[name='"+r.attr("name")+"']:checked").val():(n=r.val(),"string"==typeof n?n.replace(/\r/g,""):n)},check:function(t){t=this.validationTargetFor(this.clean(t));var n,r,i,o=e(t).rules(),a=e.map(o,function(e,t){return t}).length,s=!1,u=this.elementValue(t);for(r in o){i={method:r,parameters:o[r]};try{if(n=e.validator.methods[r].call(this,u,t,i.parameters),"dependency-mismatch"===n&&1===a){s=!0;continue}if(s=!1,"pending"===n)return void(this.toHide=this.toHide.not(this.errorsFor(t)));if(!n)return this.formatAndAdd(t,i),!1}catch(e){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+t.id+", check the '"+i.method+"' method.",e),e}}if(!s)return this.objectLength(o)&&this.successList.push(t),!0},customDataMessage:function(t,n){return e(t).data("msg"+n[0].toUpperCase()+n.substring(1).toLowerCase())||e(t).data("msg")},customMessage:function(e,t){var n=this.settings.messages[e];return n&&(n.constructor===String?n:n[t])},findDefined:function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]},defaultMessage:function(t,n){return this.findDefined(this.customMessage(t.name,n),this.customDataMessage(t,n),!this.settings.ignoreTitle&&t.title||void 0,e.validator.messages[n],"<strong>Warning: No message defined for "+t.name+"</strong>")},formatAndAdd:function(t,n){var r=this.defaultMessage(t,n.method),i=/\$?\{(\d+)\}/g;"function"==typeof r?r=r.call(this,n.parameters,t):i.test(r)&&(r=e.validator.format(r.replace(i," {
$1
}"),n.parameters)),this.errorList.push({message:r,element:t,method:n.method}),this.errorMap[t.name]=r,this.submitted[t.name]=r},addWrapper:function(e){return this.settings.wrapper&&(e=e.add(e.parent(this.settings.wrapper))),e},defaultShowErrors:function(){var e,t,n;for(e=0;this.errorList[e];e++)n=this.errorList[e],this.settings.highlight&&this.settings.highlight.call(this,n.element,this.settings.errorClass,this.settings.validClass),this.showLabel(n.element,n.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(e=0;this.successList[e];e++)this.showLabel(this.successList[e]);if(this.settings.unhighlight)for(e=0,t=this.validElements();t[e];e++)this.settings.unhighlight.call(this,t[e],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return e(this.errorList).map(function(){return this.element})},showLabel:function(t,n){var r=this.errorsFor(t);r.length?(r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),r.html(n)):(r=e("<"+this.settings.errorElement+">").attr("for",this.idOrName(t)).addClass(this.settings.errorClass).html(n||""),this.settings.wrapper&&(r=r.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(r).length||(this.settings.errorPlacement?this.settings.errorPlacement(r,e(t)):r.insertAfter(t))),!n&&this.settings.success&&(r.text(""),"string"==typeof this.settings.success?r.addClass(this.settings.success):this.settings.success(r,t)),this.toShow=this.toShow.add(r)},errorsFor:function(t){var n=this.idOrName(t);return this.errors().filter(function(){return e(this).attr("for")===n})},idOrName:function(e){return this.groups[e.name]||(this.checkable(e)?e.name:e.id||e.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name).not(this.settings.ignore)[0]),e},checkable:function(e){return/radio|checkbox/i.test(e.type)},findByName:function(t){return e(this.currentForm).find("[name='"+t+"']")},getLength:function(t,n){switch(n.nodeName.toLowerCase()){case"select":return e("option:selected",n).length;case"input":if(this.checkable(n))return this.findByName(n.name).filter(":checked").length}return t.length},depend:function(e,t){return!this.dependTypes[typeof e]||this.dependTypes[typeof e](e,t)},dependTypes:{"boolean":function(e){return e},string:function(t,n){return!!e(t,n.form).length},"function":function(e,t){return e(t)}},optional:function(t){var n=this.elementValue(t);return!e.validator.methods.required.call(this,n,t)&&"dependency-mismatch"},startRequest:function(e){this.pending[e.name]||(this.pendingRequest++,this.pending[e.name]=!0)},stopRequest:function(t,n){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[t.name],n&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(e(this.currentForm).submit(),this.formSubmitted=!1):!n&&0===this.pendingRequest&&this.formSubmitted&&(e(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(t){return e.data(t,"previousValue")||e.data(t,"previousValue",{old:null,valid:!0,message:this.defaultMessage(t,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(t,n){t.constructor===String?this.classRuleSettings[t]=n:e.extend(this.classRuleSettings,t)},classRules:function(t){var n={},r=e(t).attr("class");return r&&e.each(r.split(" "),function(){this in e.validator.classRuleSettings&&e.extend(n,e.validator.classRuleSettings[this])}),n},attributeRules:function(t){var n,r,i={},o=e(t),a=t.getAttribute("type");for(n in e.validator.methods)"required"===n?(r=t.getAttribute(n),""===r&&(r=!0),r=!!r):r=o.attr(n),/min|max/.test(n)&&(null===a||/number|range|text/.test(a))&&(r=Number(r)),r||0===r?i[n]=r:a===n&&"range"!==a&&(i[n]=!0);return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(t){var n,r,i={},o=e(t);for(n in e.validator.methods)r=o.data("rule"+n[0].toUpperCase()+n.substring(1).toLowerCase()),void 0!==r&&(i[n]=r);return i},staticRules:function(t){var n={},r=e.data(t.form,"validator");return r.settings.rules&&(n=e.validator.normalizeRule(r.settings.rules[t.name])||{}),n},normalizeRules:function(t,n){return e.each(t,function(r,i){if(i===!1)return void delete t[r];if(i.param||i.depends){var o=!0;switch(typeof i.depends){case"string":o=!!e(i.depends,n.form).length;break;case"function":o=i.depends.call(n,n)}o?t[r]=void 0===i.param||i.param:delete t[r]}}),e.each(t,function(r,i){t[r]=e.isFunction(i)?i(n):i}),e.each(["minlength","maxlength"],function(){t[this]&&(t[this]=Number(t[this]))}),e.each(["rangelength","range"],function(){var n;t[this]&&(e.isArray(t[this])?t[this]=[Number(t[this][0]),Number(t[this][1])]:"string"==typeof t[this]&&(n=t[this].split(/[\s,]+/),t[this]=[Number(n[0]),Number(n[1])]))}),e.validator.autoCreateRanges&&(t.min&&t.max&&(t.range=[t.min,t.max],delete t.min,delete t.max),t.minlength&&t.maxlength&&(t.rangelength=[t.minlength,t.maxlength],delete t.minlength,delete t.maxlength)),t},normalizeRule:function(t){if("string"==typeof t){var n={};e.each(t.split(/\s/),function(){n[this]=!0}),t=n}return t},addMethod:function(t,n,r){e.validator.methods[t]=n,e.validator.messages[t]=void 0!==r?r:e.validator.messages[t],
n.length<3&&e.validator.addClassRules(t,e.validator.normalizeRule(t))},methods:{required:function(t,n,r){if(!this.depend(r,n))return"dependency-mismatch";if("select"===n.nodeName.toLowerCase()){var i=e(n).val();return i&&i.length>0}return this.checkable(n)?this.getLength(t,n)>0:e.trim(t).length>0},email:function(e,t){return this.optional(t)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},url:function(e,t){return this.optional(t)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)},date:function(e,t){return this.optional(t)||!/Invalid|NaN/.test(new Date(e).toString())},dateISO:function(e,t){return this.optional(t)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)},number:function(e,t){return this.optional(t)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e,t){return this.optional(t)||/^\d+$/.test(e)},creditcard:function(e,t){if(this.optional(t))return"dependency-mismatch";if(/[^0-9 \-]+/.test(e))return!1;var n,r,i=0,o=0,a=!1;if(e=e.replace(/\D/g,""),e.length<13||e.length>19)return!1;for(n=e.length-1;n>=0;n--)r=e.charAt(n),o=parseInt(r,10),a&&(o*=2)>9&&(o-=9),i+=o,a=!a;return i%10===0},minlength:function(t,n,r){var i=e.isArray(t)?t.length:this.getLength(e.trim(t),n);return this.optional(n)||i>=r},maxlength:function(t,n,r){var i=e.isArray(t)?t.length:this.getLength(e.trim(t),n);return this.optional(n)||r>=i},rangelength:function(t,n,r){var i=e.isArray(t)?t.length:this.getLength(e.trim(t),n);return this.optional(n)||i>=r[0]&&i<=r[1]},min:function(e,t,n){return this.optional(t)||e>=n},max:function(e,t,n){return this.optional(t)||n>=e},range:function(e,t,n){return this.optional(t)||e>=n[0]&&e<=n[1]},equalTo:function(t,n,r){var i=e(r);return this.settings.onfocusout&&i.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){e(n).valid()}),t===i.val()},remote:function(t,n,r){if(this.optional(n))return"dependency-mismatch";var i,o,a=this.previousValue(n);return this.settings.messages[n.name]||(this.settings.messages[n.name]={}),a.originalMessage=this.settings.messages[n.name].remote,this.settings.messages[n.name].remote=a.message,r="string"==typeof r&&{url:r}||r,a.old===t?a.valid:(a.old=t,i=this,this.startRequest(n),o={},o[n.name]=t,e.ajax(e.extend(!0,{url:r,mode:"abort",port:"validate"+n.name,dataType:"json",data:o,context:i.currentForm,success:function(r){var o,s,u,l=r===!0||"true"===r;i.settings.messages[n.name].remote=a.originalMessage,l?(u=i.formSubmitted,i.prepareElement(n),i.formSubmitted=u,i.successList.push(n),delete i.invalid[n.name],i.showErrors()):(o={},s=r||i.defaultMessage(n,"remote"),o[n.name]=a.message=e.isFunction(s)?s(t):s,i.invalid[n.name]=!0,i.showErrors(o)),a.valid=l,i.stopRequest(n,l)}},r)),"pending")}}}),e.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."}}(jQuery),function(e){var t,n={};e.ajaxPrefilter?e.ajaxPrefilter(function(e,t,r){var i=e.port;"abort"===e.mode&&(n[i]&&n[i].abort(),n[i]=r)}):(t=e.ajax,e.ajax=function(r){var i=("mode"in r?r:e.ajaxSettings).mode,o=("port"in r?r:e.ajaxSettings).port;return"abort"===i?(n[o]&&n[o].abort(),n[o]=t.apply(this,arguments),n[o]):t.apply(this,arguments)})}(jQuery),function(e){e.extend(e.fn,{validateDelegate:function(t,n,r){return this.bind(n,function(n){var i=e(n.target);return i.is(t)?r.apply(i,arguments):void 0})}})}(jQuery),function(e){e.validator.addMethod("mc_birthday",function(t,n,r){var i=!1,o=e("input:not(:hidden)",e(n).closest(r));if(0==o.filter(":filled").length&&this.optional(n))i=!0;else{var a=new Array;a.month=o.filter("input[name*='[month]']").val(),a.day=o.filter("input[name*='[day]']").val(),a.month=a.month-1;var s=new Date(1970,a.month,a.day);i=s.getDate()==a.day&&s.getMonth()==a.month}return i},"Please enter a valid month and day."),e.validator.addMethod("mc_date",function(t,n,r){var i=!1,o=e("input:not(:hidden)",e(n).closest(r));if(0==o.filter(":filled").length&&this.optional(n))i=!0;else{var a=new Array;a.month=o.filter("input[name*='[month]']").val(),a.day=o.filter("input[name*='[day]']").val(),a.year=o.filter("input[name*='[year]']").val(),a.month=a.month-1,a.year.length<4&&(a.year=parseInt(a.year)<50?2e3+parseInt(a.year):1900+parseInt(a.year));var s=new Date(a.year,a.month,a.day);i=s.getDate()==a.day&&s.getMonth()==a.month&&s.getFullYear()==a.year}return i},"Please enter a valid date"),e.validator.addMethod("mc_phone",function(t,n,r){var i=!1,o=e("input:filled:not(:hidden)",e(n).closest(r));return 0==o.length&&this.optional(n)?i=!0:(t=o.eq(0).val()+o.eq(1).val()+o.eq(2).val(),i=10==t.length&&t.match(/[0-9]{9}/)),i},"Please specify a valid phone number"),e.validator.addMethod("skip_or_complete_group",function(t,n,r){var i=e("input:not(:hidden)",e(n).closest(r)),o=i.eq(0),a=o.data("valid_skip")?o.data("valid_skip"):e.extend({},this),s=i.filter(function(){return a.elementValue(this)}).length,u=0===s||s===i.length;return o.data("valid_skip",a),e(n).data("being_validated")||(i.data("being_validated",!0),i.each(function(){a.element(this)}),i.data("being_validated",!1)),u},e.validator.format("Please supply missing fields.")),e.validator.addMethod("skip_or_fill_minimum",function(t,n,r){var i=e(r[1],n.form),o=i.eq(0),a=o.data("valid_skip")?o.data("valid_skip"):e.extend({},this),s=i.filter(function(){return a.elementValue(this)}).length,u=0===s||s>=r[0];return console.log(i.eq(0)),o.data("valid_skip",a),e(n).data("being_validated")||(i.data("being_validated",!0),i.each(function(){a.element(this)}),i.data("being_validated",!1)),u},e.validator.format("Please either skip these fields or fill at least {
0
}

of them.")),e.validator.addMethod("zipcodeUS",function(e,t){return this.optional(t)||/^\d{5}-\d{4}$|^\d{5}$/.test(e)},"The specified US ZIP Code is invalid")}(jQuery),function(e){var t="";try{t=mc_custom_error_style}catch(e){t="#mc_embed_signup input.mce_inline_error {
border-color: #6B0505;
}

#mc_embed_signup div.mce_inline_error {
margin: 0 0 1em 0;
padding: 5px 10px;
background-color: #6B0505;
font-weight: bold;
z-index: 1;
color: #fff;
}"}var n=document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t)),n.appendChild(r),window.mc={openPopup:function(){e("#mc_embed_signup a.mc_embed_close").show(),setTimeout(function(){e("#mc_embed_signup").fadeIn()},mc.delayPopup)},closePopup:function(){e("#mc_embed_signup").hide();var t=new Date,n=new Date(t.getTime()+31536e6);document.cookie="MCEvilPopupClosed=yes;expires="+n.toGMTString()+";path=/"},evalPopup:function(){for(e("#mc_embed_signup").hide(),cks=document.cookie.split(";"),i=0;i<cks.length;i++)parts=cks[i].split("="),parts[0].indexOf("MCEvilPopupClosed")!=-1&&(mc.showPopup=!1);mc.showPopup&&mc.openPopup()},getAjaxSubmitUrl:function(){var t=e("form#mc-embedded-subscribe-form").attr("action");return t=t.replace("/post?u=","/post-json?u="),t+="&c=?"},getGroups:function(){var t={};return e(".mc-field-group").each(function(){var n=e(this).find("input:text:not(:hidden)");if(n.length>1){var r=n.first().attr("name"),i=e.map(n,function(e){return e.name});t[r.substring(0,r.indexOf("["))]=i.join(" ")}}),t},isMultiPartField:function(t){return e("input:not(:hidden)",e(t).closest(".mc-field-group")).length>1},isTooEarly:function(t){var n=e("input:not(:hidden)",e(t).closest(".mc-field-group"));return e(n).eq(-1).attr("id")!=e(t).attr("id")},mce_success_cb:function(t){if(e("#mce-success-response").hide(),e("#mce-error-response").hide(),"success"==t.result)e("#mce-"+t.result+"-response").show(),e("#mce-"+t.result+"-response").html(t.msg),e("#mc-embedded-subscribe-form").each(function(){this.reset()});else{var n,r=-1;try{var o=t.msg.split(" - ",2);void 0==o[1]?n=t.msg:(i=parseInt(o[0]),i.toString()==o[0]?(r=o[0],n=o[1]):(r=-1,n=t.msg))}catch(e){r=-1,n=t.msg}try{if(r==-1)e("#mce-"+t.result+"-response").show(),e("#mce-"+t.result+"-response").html(n);else{var a=e("input[name*='"+fnames[r]+"']").attr("name"),s={};s[a]=n,mc.mce_validator.showErrors(s)}}catch(r){e("#mce-"+t.result+"-response").show(),e("#mce-"+t.result+"-response").html(n)}}}},window.mc.mce_validator=e("#mc-embedded-subscribe-form").validate({errorClass:"mce_inline_error",errorElement:"div",onkeyup:!1,onfocusout:function(t){mc.isTooEarly(t)||e(t).valid()},onblur:function(t){mc.isTooEarly(t)||e(t).valid()},groups:mc.getGroups(),errorPlacement:function(e,t){t.closest(".mc-field-group").append(e)},submitHandler:function(t){e(t).ajaxSubmit(mc.ajaxOptions)}}),window.mc.ajaxOptions={url:mc.getAjaxSubmitUrl(),type:"GET",dataType:"json",contentType:"application/json; charset=utf-8",success:mc.mce_success_cb},e.validator.addClassRules("birthday",{digits:!0,mc_birthday:".datefield"}),e.validator.addClassRules("datepart",{digits:!0,mc_date:".datefield"}),e.validator.addClassRules("phonepart",{digits:!0,mc_phone:".phonefield"}),e("#mc_embed_signup a.mc_embed_close").click(function(){mc.closePopup()}),e(document).keydown(function(e){keycode=null==e?event.keyCode:e.which,27==keycode&&"undefined"!=typeof mc.showPopup&&mc.closePopup()})}(jQuery),function(){window.fnames=new Array,window.ftypes=new Array,fnames[1]="NAME",ftypes[1]="text",fnames[0]="EMAIL",ftypes[0]="email"}(jQuery);var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-12801279-4"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var resizeTimer;$(window).on("resize load zoom",function(){resizeTimer&&window.clearTimeout(resizeTimer),resizeTimer=window.setTimeout(function(){var e=window.outerWidth/window.innerWidth;e>1&&_gaq.push(["_trackEvent","Site: Zoom","Zoom Level above 1",e.toString(),void 0,!0])},500)}),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],i=".fluid-width-video-wrapper {
width: 100%;
position: relative;
padding: 0;
}

.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}",o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>",r.appendChild(o.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var r=".fitvidsignore";n.ignore&&(r=r+", "+n.ignore);var i=e(this).find(t.join(","));i=i.not("object object"),i=i.not(r),i.each(function(){var t=e(this);if(!(t.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),o=n/i;if(!t.attr("name")){var a="fitvid"+e.fn.fitVids._count;t.attr("name",a),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*o+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto);var target=document.getElementById("mce-success-response"),observer=new MutationObserver(function(e){e.forEach(function(){$("#mce-success-response:visible").length&&($(".sign-up-form").css("opacity",0).hide(),$(".success-message").show())})}),config={attributes:!0,childList:!0,characterData:!0};observer.observe(target,config);var $body=$("body");!function(e){var t;e("button.follow-button").click(function(){showPopup(".overlay.follow-ray")}),e("button.pre-order").click(function(){showPopup(".overlay.pre-order")}),e("button.get-updates").click(function(){showPopup(".overlay.get-updates")}),e(".overlay .close-popup").click(function(){hidePopup(".overlay")}),e(".play .play-arrow, .play .play-copy").click(function(){var n=e(".ted-popup #myVideo iframe");n.attr("src",n.data("src")),e(".ted-popup #myVideo").fitVids({customSelector:"iframe[class='tedVideo']"}).addClass("viewing"),showPopup(".overlay.ted-popup"),t&&(t.appendTo(".overlay.ted-popup .flex-fix"),t=null)}),e(".overlay.ted-popup .close-popup").click(function(){hidePopup(".overlay"),t=e("#myVideo").detach()})}(jQuery);var resetSignUp=function(){$(".sign-up-form").css("opacity",1).show(),$(".success-message, .response").hide(),$(".mc-field-group").find("input").attr("aria-invalid",!1).removeClass("mce_inline_error"),$(".sign-up-form").trigger("reset")},setExternalLinks=function(){$('a[href^="http://"], a[href^="https://"], a[href*="pdf"]').attr("target","_blank")};("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&$body.addClass("touch-device");var showPopup=function(e){var t=$body.scrollTop();$body.attr("data-pos",t),$body.addClass("active-popup"),$(e).removeClass("waiting-content"),$(e).addClass("active-content"),history.pushState(null,null,"#overlay"),resetSignUp()},hidePopup=function(e){var t=parseInt($body.attr("data-pos"));$body.removeClass("active-popup").scrollTop(t),$(e).removeClass("active-content"),$(e).addClass("waiting-content"),location.hash.length>0&&"#overlay"==location.hash&&(history.back(1),history.replaceState("",document.title,window.location.pathname+window.location.search))},landingURL=function(){"#get-updates"==window.location.hash&&$("button.get-updates").trigger("click")},landingHash=function(){history.replaceState("",document.title,window.location.pathname+window.location.search)};window.onpopstate=function(){"/"==document.location.pathname&&hidePopup(".overlay")};var getSetDate=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1;$("span#today").html(n+"/"+t)};$(window).on("load",function(){landingURL(),getSetDate(),landingHash(),setExternalLinks()}),$.getJSON("order-status.json",function(e){$.each(e,function(e,t){$this=e,$status=t,$("."+$this).addClass($status)})});




function isElementInViewport(e){"function"==typeof jQuery&&e instanceof jQuery&&(e=e[0]);var n=e.getBoundingClientRect();return n.bottom>=0&&n.right>=0&&n.top<=(window.innerHeight||document.documentElement.clientHeight)&&n.left<=(window.innerWidth||document.documentElement.clientWidth)}function checkHeader(){var e=isElementInViewport($("section.pullquote-hero"));e&&headerVisible?(headerVisible=!1,$("header").removeClass("show")):e||headerVisible||(headerVisible=!0,$("header").addClass("show"))}var headerVisible=!1;$(window).on("DOMContentLoaded load resize scroll",checkHeader);
