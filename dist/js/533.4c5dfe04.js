/*! For license information please see 533.4c5dfe04.js.LICENSE.txt */
"use strict";(self.webpackChunkkalapps_pwa=self.webpackChunkkalapps_pwa||[]).push([[533],{533:(t,e,n)=>{const o=Object.freeze({left:0,top:0,width:16,height:16}),i=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),r=Object.freeze({...o,...i}),s=Object.freeze({...r,body:"",hidden:!1}),c=Object.freeze({width:null,height:null}),a=Object.freeze({...c,...i}),u=/[\s,]+/,l={...a,preserveAspectRatio:""};function f(t){const e={...l},n=(e,n)=>t.getAttribute(e)||n;var o;return e.width=n("width",null),e.height=n("height",null),e.rotate=function(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?o(i):0)}}return e}(n("rotate","")),o=e,n("flip","").split(u).forEach((t=>{switch(t.trim()){case"horizontal":o.hFlip=!0;break;case"vertical":o.vFlip=!0}})),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}const d=/^[a-z0-9]+(-[a-z0-9]+)*$/,h=(t,e,n,o="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),r={provider:i.length>0?i[0]:o,prefix:n,name:t};return e&&!p(r)?null:r}const r=i[0],s=r.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!p(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:r};return e&&!p(t,n)?null:t}return null},p=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(d)||!(e&&""===t.prefix||t.prefix.match(d))||!t.name.match(d));function g(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in s)o in i?o in t&&!(o in n)&&(n[o]=i[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function m(t,e,n){const o=t.icons,i=t.aliases||{};let r={};function s(t){r=g(o[t]||i[t],r)}return s(e),n.forEach(s),g(t,r)}function b(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||{},i=Object.create(null);return Object.keys(n).concat(Object.keys(o)).forEach((function t(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;const n=o[e]&&o[e].parent,r=n&&t(n);r&&(i[e]=[n].concat(r))}return i[e]})),i}(t);for(const i in o){const r=o[i];r&&(e(i,m(t,i,r)),n.push(i))}return n}const y={provider:"",aliases:{},not_found:{},...o};function v(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function x(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!v(t,y))return null;const n=e.icons;for(const t in n){const e=n[t];if(!t.match(d)||"string"!=typeof e.body||!v(e,s))return null}const o=e.aliases||{};for(const t in o){const e=o[t],i=e.parent;if(!t.match(d)||"string"!=typeof i||!n[i]&&!o[i]||!v(e,s))return null}return e}const w=Object.create(null);function k(t,e){const n=w[t]||(w[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function j(t,e){return x(e)?b(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}function C(t,e){let n=[];return("string"==typeof t?[t]:Object.keys(w)).forEach((t=>{("string"==typeof t&&"string"==typeof e?[e]:Object.keys(w[t]||{})).forEach((e=>{const o=k(t,e);n=n.concat(Object.keys(o.icons).map((n=>(""!==t?"@"+t+":":"")+e+":"+n)))}))})),n}let _=!1;function I(t){return"boolean"==typeof t&&(_=t),_}function A(t){const e="string"==typeof t?h(t,!0,_):t;if(e){const t=k(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function O(t,e){const n=h(t,!0,_);return!!n&&function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(t){}return!1}(k(n.provider,n.prefix),n.name,e)}function S(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),_&&!e&&!t.prefix){let e=!1;return x(t)&&(t.prefix="",b(t,((t,n)=>{n&&O(t,n)&&(e=!0)}))),e}const n=t.prefix;return!!p({provider:e,prefix:n,name:"a"})&&!!j(k(e,n),t)}function E(t){return!!A(t)}function M(t){const e=A(t);return e?{...r,...e}:null}function T(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let F=0;const P=Object.create(null);function R(t,e){P[t]=e}function L(t){return P[t]||P[""]}var N={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function z(t){const e={...N,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,r){const s=function(t,e,n,o){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let a,u="pending",l=0,f=null,d=[],h=[];function p(){f&&(clearTimeout(f),f=null)}function g(){"pending"===u&&(u="aborted"),p(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(h=[]),"function"==typeof t&&h.push(t)}function b(){u="failed",h.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}return"function"==typeof o&&h.push(o),setTimeout((function o(){if("pending"!==u)return;p();const i=s.shift();if(void 0===i)return d.length?void(f=setTimeout((()=>{p(),"pending"===u&&(y(),b())}),t.timeout)):void b();const r={status:"pending",resource:i,callback:(e,n)=>{!function(e,n,i){const r="success"!==n;switch(d=d.filter((t=>t!==e)),u){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=i,void b();if(r)return a=i,void(d.length||(s.length?o():b()));if(p(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}u="completed",h.forEach((t=>{t(i)}))}(r,e,n)}};d.push(r),l++,f=setTimeout(o,t.rotate),n(i,e,r.callback)})),function(){return{startTime:c,payload:e,status:u,queriesSent:l,queriesPending:d.length,subscribe:m,abort:g}}}(e,t,i,((t,e)=>{o(),r&&r(t,e)}));return n.push(s),s},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function Q(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const q=Object.create(null),D=["https://api.simplesvg.com","https://api.unisvg.com"],J=[];for(;D.length>0;)1===D.length||Math.random()>.5?J.push(D.shift()):J.push(D.pop());function U(t,e){const n=Q(e);return null!==n&&(q[t]=n,!0)}function $(t){return q[t]}function H(){return Object.keys(q)}function B(){}q[""]=Q({resources:["https://api.iconify.design"].concat(J)});const G=Object.create(null);function K(t,e,n){let o,i;if("string"==typeof t){const e=L(t);if(!e)return n(void 0,424),B;i=e.send;const r=function(t){if(!G[t]){const e=$(t);if(!e)return;const n={config:e,redundancy:z(e)};G[t]=n}return G[t]}(t);r&&(o=r.redundancy)}else{const e=Q(t);if(e){o=z(e);const n=L(t.resources?t.resources[0]:"");n&&(i=n.send)}}return o&&i?o.query(e,i,n)().abort:(n(void 0,424),B)}const V="iconify2",W="iconify",X="iconify-count",Y="iconify-version",Z=36e5;function tt(t,e){try{return t.getItem(e)}catch(t){}}function et(t,e,n){try{return t.setItem(e,n),!0}catch(t){}}function nt(t,e){try{t.removeItem(e)}catch(t){}}function ot(t,e){return et(t,X,e.toString())}function it(t){return parseInt(tt(t,X))||0}const rt={local:!0,session:!0},st={local:new Set,session:new Set};let ct=!1,at="undefined"==typeof window?{}:window;function ut(t){const e=t+"Storage";try{if(at&&at[e]&&"number"==typeof at[e].length)return at[e]}catch(t){}rt[t]=!1}function lt(t,e){const n=ut(t);if(!n)return;const o=tt(n,Y);if(o!==V){if(o){const t=it(n);for(let e=0;e<t;e++)nt(n,W+e.toString())}return et(n,Y,V),void ot(n,0)}const i=Math.floor(Date.now()/Z)-168,r=t=>{const o=W+t.toString(),r=tt(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(t){}nt(n,o)}};let s=it(n);for(let e=s-1;e>=0;e--)r(e)||(e===s-1?(s--,ot(n,s)):st[t].add(e))}function ft(){if(!ct){ct=!0;for(const t in rt)lt(t,(t=>{const e=t.data,n=k(t.provider,e.prefix);if(!j(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function dt(){}const ht=(t,e)=>{const n=function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const i="string"==typeof t?h(t,e,n):t;i&&o.push(i)})),o}(t,!0,I()),o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const i=t.provider,r=t.prefix,s=t.name,c=n[i]||(n[i]=Object.create(null)),a=c[r]||(c[r]=k(i,r));let u;u=s in a.icons?e.loaded:""===r||a.missing.has(s)?e.missing:e.pending;const l={provider:i,prefix:r,name:s};u.push(l)})),e}(n);if(!o.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(o.loaded,o.missing,o.pending,dt)})),()=>{t=!1}}const i=Object.create(null),r=[];let s,c;return o.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===c&&e===s)return;s=e,c=n,r.push(k(e,n));const o=i[e]||(i[e]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,r=k(e,n),s=r.pendingIcons||(r.pendingIcons=new Set);s.has(o)||(s.add(o),i[e][n].push(o))})),r.forEach((t=>{const{provider:e,prefix:n}=t;i[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let i;delete t.iconsToLoad,o&&(i=L(e))&&i.prepare(e,n,o).forEach((n=>{K(e,n,((e,o)=>{if("object"!=typeof e){if(404!==o)return;n.icons.forEach((e=>{t.missing.add(e)}))}else try{const n=j(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),function(t,e){function n(n){let o;if(!rt[n]||!(o=ut(n)))return;const i=st[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=it(o),!ot(o,r+1))return;const s={cached:Math.floor(Date.now()/Z),provider:t.provider,data:e};return et(o,W+r.toString(),JSON.stringify(s))}ct||ft(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const n in rt)lt(n,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}(t,e)}catch(t){console.error(t)}!function(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,i=t.prefix;e.forEach((e=>{const r=e.icons,s=r.pending.length;r.pending=r.pending.filter((e=>{if(e.prefix!==i)return!0;const s=e.name;if(t.icons[s])r.loaded.push({provider:o,prefix:i,name:s});else{if(!t.missing.has(s))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:s})}return!1})),r.pending.length!==s&&(n||T([t],e.id),e.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),e.abort))}))})))}(t)})))}(t)}))}))})))}(t,i[e][n])})),e?function(t,e,n){const o=F++,i=T.bind(null,n,o);if(!e.pending.length)return i;const r={id:o,icons:e,callback:t,abort:i};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(r)})),i}(e,o,r):dt},pt=t=>new Promise(((e,n)=>{const o="string"==typeof t?h(t):t;ht([o||t],(i=>{if(i.length&&o){const t=A(o);if(t)return void e({...r,...t})}n(t)}))}));function gt(t){return t.hasAttribute("inline")}let mt=!1;try{mt=0===navigator.vendor.indexOf("Apple")}catch(t){}const bt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,yt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function vt(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(bt);if(null===o||!o.length)return t;const i=[];let r=o.shift(),s=yt.test(r);for(;;){if(s){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");s=!s}}function xt(t,e){const n={...r,...t},o={...a,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let r,c=t.rotate;switch(n?o?c+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):o&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:r=i.height/2+i.top,e.unshift("rotate(90 "+r.toString()+" "+r.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:r=i.width/2+i.left,e.unshift("rotate(-90 "+r.toString()+" "+r.toString()+")")}c%2==1&&(i.left!==i.top&&(r=i.left,i.left=i.top,i.top=r),i.width!==i.height&&(r=i.width,i.width=i.height,i.height=r)),e.length&&(s='<g transform="'+e.join(" ")+'">'+s+"</g>")}));const c=o.width,u=o.height,l=i.width,f=i.height;let d,h;return null===c?(h=null===u?"1em":"auto"===u?f:u,d=vt(h,l/f)):(d="auto"===c?l:c,h=null===u?vt(d,f/l):"auto"===u?f:u),{attributes:{width:d.toString(),height:h.toString(),viewBox:i.left.toString()+" "+i.top.toString()+" "+l.toString()+" "+f.toString()},body:s}}let wt=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(t){}})();function kt(t){wt=t}function jt(){return wt}const Ct={prepare:(t,e,n)=>{const o=[],i=function(t,e){const n=$(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=e+".json?icons=";o=n.maxURL-t-n.path.length-i.length}else o=0;return o}(t,e),r="icons";let s={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=i&&a>0&&(o.push(s),s={type:r,provider:t,prefix:e,icons:[]},c=n.length),s.icons.push(n)})),o.push(s),o},send:(t,e,n)=>{if(!wt)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=$(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;wt(t+o).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{n("next",i)}))})).catch((()=>{n("next",i)}))}};function _t(t,e){switch(t){case"local":case"session":rt[t]=e;break;case"all":for(const t in rt)rt[t]=e}}function It(){let t;R("",Ct),I(!0);try{t=window}catch(t){}if(t){if(ft(),void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!S(t))&&console.error(n)}catch(t){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(const t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;U(t,o)||console.error(n)}catch(t){console.error(n)}}}}return{enableCache:t=>_t(t,!0),disableCache:t=>_t(t,!1),iconExists:E,getIcon:M,listIcons:C,addIcon:O,addCollection:S,calculateSize:vt,buildIcon:xt,loadIcons:ht,loadIcon:pt,addAPIProvider:U,_api:{getAPIConfig:$,setAPIModule:R,sendAPIQuery:K,setFetch:kt,getFetch:jt,listAPIProviders:H}}}function At(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const t in e)n+=" "+t+'="'+e[t]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}const Ot={"background-color":"currentColor"},St={"background-color":"transparent"},Et={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Mt={"-webkit-mask":Ot,mask:Ot,background:St};for(const t in Mt){const e=Mt[t];for(const n in Et)e[t+"-"+n]=Et[n]}function Tt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function Ft(t,e){const n=e.icon.data,o=e.customisations,i=xt(n,o);o.preserveAspectRatio&&(i.attributes.preserveAspectRatio=o.preserveAspectRatio);const s=e.renderedMode;let c;if(c="svg"===s?function(t){const e=document.createElement("span");return e.innerHTML=At(t.body,t.attributes),e.firstChild}(i):function(t,e,n){const o=document.createElement("span");let i=t.body;-1!==i.indexOf("<a")&&(i+="\x3c!-- "+Date.now()+" --\x3e");const r=t.attributes,s='url("data:image/svg+xml,'+(At(i,{...r,width:e.width+"",height:e.height+""}).replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")'),c=o.style,a={"--svg":s,width:Tt(r.width),height:Tt(r.height),...n?Ot:St};for(const t in a)c.setProperty(t,a[t]);return o}(i,{...r,...n},"mask"===s),t.childNodes.length>1){const e=t.lastChild;"SPAN"===c.tagName&&e.tagName===c.tagName?e.setAttribute("style",c.getAttribute("style")):t.replaceChild(c,e)}else t.appendChild(c)}function Pt(t,e){let n=t.firstChild;n||(n=document.createElement("style"),t.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"}function Rt(t,e,n){return{rendered:!1,inline:e,icon:t,lastRender:n&&(n.rendered?n:n.lastRender)}}const Lt=function(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch(t){return}if(!e||!n)return;const o=e.get(t);if(o)return o;const i=["icon","mode","inline","width","height","rotate","flip"],r=class extends n{_shadowRoot;_state;_checkQueued=!1;constructor(){super();const t=this._shadowRoot=this.attachShadow({mode:"closed"}),e=gt(this);Pt(t,e),this._state=Rt({value:""},e),this._queueCheck()}static get observedAttributes(){return i.slice(0)}attributeChangedCallback(t){if("inline"===t){const t=gt(this),e=this._state;t!==e.inline&&(e.inline=t,Pt(this._shadowRoot,t))}else this._queueCheck()}get icon(){const t=this.getAttribute("icon");if(t&&"{"===t.slice(0,1))try{return JSON.parse(t)}catch(t){}return t}set icon(t){"object"==typeof t&&(t=JSON.stringify(t)),this.setAttribute("icon",t)}get inline(){return gt(this)}set inline(t){this.setAttribute("inline",t?"true":null)}restartAnimation(){const t=this._state;if(t.rendered){const e=this._shadowRoot;if("svg"===t.renderedMode)try{return void e.lastChild.setCurrentTime(0)}catch(t){}Ft(e,t)}}get status(){const t=this._state;return t.rendered?"rendered":null===t.icon.data?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout((()=>{this._check()})))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const t=this._state,e=this.getAttribute("icon");if(e!==t.icon.value)return void this._iconChanged(e);if(!t.rendered)return;const n=this.getAttribute("mode"),o=f(this);(t.attrMode!==n||function(t,e){for(const n in l)if(t[n]!==e[n])return!0;return!1}(t.customisations,o))&&this._renderIcon(t.icon,o,n)}_iconChanged(t){const e=function(t,e){const n="string"==typeof t?h(t,!0,!0):null;if(!n){const e=function(t){try{const e="string"==typeof t?JSON.parse(t):t;if("string"==typeof e.body)return{...e}}catch(t){}}(t);return{value:t,data:e}}const o=A(n);if(void 0!==o||!n.prefix)return{value:t,name:n,data:o};const i=ht([n],(()=>e(t,n,A(n))));return{value:t,name:n,loading:i}}(t,((t,e,n)=>{const o=this._state;if(o.rendered||this.getAttribute("icon")!==t)return;const i={value:t,name:e,data:n};i.data?this._gotIconData(i):o.icon=i}));e.data?this._gotIconData(e):this._state=Rt(e,this._state.inline,this._state)}_gotIconData(t){this._checkQueued=!1,this._renderIcon(t,f(this),this.getAttribute("mode"))}_renderIcon(t,e,n){const o=function(t,e){switch(e){case"svg":case"bg":case"mask":return e}return"style"===e||!mt&&-1!==t.indexOf("<a")?-1===t.indexOf("currentColor")?"bg":"mask":"svg"}(t.data.body,n),i=this._state.inline;Ft(this._shadowRoot,this._state={rendered:!0,icon:t,inline:i,customisations:e,attrMode:n,renderedMode:o})}};i.forEach((t=>{t in r.prototype||Object.defineProperty(r.prototype,t,{get:function(){return this.getAttribute(t)},set:function(e){this.setAttribute(t,e)}})}));const s=It();for(const t in s)r[t]=r.prototype[t]=s[t];return e.define(t,r),r}()||It(),{enableCache:Nt,disableCache:zt,iconExists:Qt,getIcon:qt,listIcons:Dt,addIcon:Jt,addCollection:Ut,calculateSize:$t,buildIcon:Ht,loadIcons:Bt,loadIcon:Gt,addAPIProvider:Kt,_api:Vt}=Lt}}]);
//# sourceMappingURL=533.4c5dfe04.js.map