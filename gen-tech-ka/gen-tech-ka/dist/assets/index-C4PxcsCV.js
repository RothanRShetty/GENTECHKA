var Qb=Object.defineProperty;var Jb=(t,e,n)=>e in t?Qb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Tf=(t,e,n)=>Jb(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();var Fv={exports:{}},Zu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $b=Symbol.for("react.transitional.element"),eM=Symbol.for("react.fragment");function Dv(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:$b,type:t,key:i,ref:e!==void 0?e:null,props:n}}Zu.Fragment=eM;Zu.jsx=Dv;Zu.jsxs=Dv;Fv.exports=Zu;var u=Fv.exports,Lv={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=Symbol.for("react.transitional.element"),tM=Symbol.for("react.portal"),nM=Symbol.for("react.fragment"),iM=Symbol.for("react.strict_mode"),aM=Symbol.for("react.profiler"),sM=Symbol.for("react.consumer"),rM=Symbol.for("react.context"),oM=Symbol.for("react.forward_ref"),lM=Symbol.for("react.suspense"),cM=Symbol.for("react.memo"),Uv=Symbol.for("react.lazy"),uM=Symbol.for("react.activity"),fM=Symbol.for("react.view_transition"),O0=Symbol.iterator;function dM(t){return t===null||typeof t!="object"?null:(t=O0&&t[O0]||t["@@iterator"],typeof t=="function"?t:null)}var Ov={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pv=Object.assign,Iv={};function uo(t,e,n){this.props=t,this.context=e,this.refs=Iv,this.updater=n||Ov}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zv(){}zv.prototype=uo.prototype;function Yp(t,e,n){this.props=t,this.context=e,this.refs=Iv,this.updater=n||Ov}var Zp=Yp.prototype=new zv;Zp.constructor=Yp;Pv(Zp,uo.prototype);Zp.isPureReactComponent=!0;var P0=Array.isArray;function Vd(){}var Pt={H:null,A:null,T:null,S:null},Bv=Object.prototype.hasOwnProperty;function Kp(t,e,n){var i=n.ref;return{$$typeof:qp,type:t,key:e,ref:i!==void 0?i:null,props:n}}function hM(t,e){return Kp(t.type,e,t.props)}function Qp(t){return typeof t=="object"&&t!==null&&t.$$typeof===qp}function pM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var I0=/\/+/g;function Af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pM(""+t.key):e.toString(36)}function mM(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Vd,Vd):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function gr(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case qp:case tM:r=!0;break;case Uv:return r=t._init,gr(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+Af(t,0):i,P0(a)?(n="",r!=null&&(n=r.replace(I0,"$&/")+"/"),gr(a,e,n,"",function(c){return c})):a!=null&&(Qp(a)&&(a=hM(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(I0,"$&/")+"/")+r)),e.push(a)),1;r=0;var o=i===""?".":i+":";if(P0(t))for(var l=0;l<t.length;l++)i=t[l],s=o+Af(i,l),r+=gr(i,e,n,s,a);else if(l=dM(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,s=o+Af(i,l++),r+=gr(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return gr(mM(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Xl(t,e,n){if(t==null)return t;var i=[],a=0;return gr(t,i,"","",function(s){return e.call(n,s,a++)}),i}function gM(t){if(t._status===-1){var e=t._result,n=e();n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var z0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Hv(t){var e=Pt.T,n={};n.types=e!==null?e.types:null,Pt.T=n;try{var i=t(),a=Pt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Vd,z0)}catch(s){z0(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Pt.T=e}}function Gv(t){var e=Pt.T;if(e!==null){var n=e.types;n===null?e.types=[t]:n.indexOf(t)===-1&&n.push(t)}else Hv(Gv.bind(null,t))}var xM={map:Xl,forEach:function(t,e,n){Xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xl(t,function(){e++}),e},toArray:function(t){return Xl(t,function(e){return e})||[]},only:function(t){if(!Qp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Activity=uM;je.Children=xM;je.Component=uo;je.Fragment=nM;je.Profiler=aM;je.PureComponent=Yp;je.StrictMode=iM;je.Suspense=lM;je.ViewTransition=fM;je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pt;je.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Pt.H.useMemoCache(t)}};je.addTransitionType=Gv;je.cache=function(t){return function(){return t.apply(null,arguments)}};je.cacheSignal=function(){return null};je.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Pv({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!Bv.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Kp(t.type,a,i)};je.createContext=function(t){return t={$$typeof:rM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:sM,_context:t},t};je.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)Bv.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Kp(t,s,a)};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:oM,render:t}};je.isValidElement=Qp;je.lazy=function(t){return{$$typeof:Uv,_payload:{_status:-1,_result:t},_init:gM}};je.memo=function(t,e){return{$$typeof:cM,type:t,compare:e===void 0?null:e}};je.startTransition=Hv;je.unstable_useCacheRefresh=function(){return Pt.H.useCacheRefresh()};je.use=function(t){return Pt.H.use(t)};je.useActionState=function(t,e,n){return Pt.H.useActionState(t,e,n)};je.useCallback=function(t,e){return Pt.H.useCallback(t,e)};je.useContext=function(t){return Pt.H.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t,e){return Pt.H.useDeferredValue(t,e)};je.useEffect=function(t,e){return Pt.H.useEffect(t,e)};je.useEffectEvent=function(t){return Pt.H.useEffectEvent(t)};je.useId=function(){return Pt.H.useId()};je.useImperativeHandle=function(t,e,n){return Pt.H.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Pt.H.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Pt.H.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Pt.H.useMemo(t,e)};je.useOptimistic=function(t,e){return Pt.H.useOptimistic(t,e)};je.useReducer=function(t,e,n){return Pt.H.useReducer(t,e,n)};je.useRef=function(t){return Pt.H.useRef(t)};je.useState=function(t){return Pt.H.useState(t)};je.useSyncExternalStore=function(t,e,n){return Pt.H.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Pt.H.useTransition()};je.version="19.3.1";Lv.exports=je;var $e=Lv.exports,Vv={exports:{}},Ku={},kv={exports:{}},jv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,L){var Z=B.length;B.push(L);e:for(;0<Z;){var X=Z-1>>>1,N=B[X];if(0<a(N,L))B[X]=L,B[Z]=N,Z=X;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var L=B[0],Z=B.pop();if(Z!==L){B[0]=Z;e:for(var X=0,N=B.length,w=N>>>1;X<w;){var ee=2*(X+1)-1,ce=B[ee],G=ee+1,ne=B[G];if(0>a(ce,Z))G<N&&0>a(ne,ce)?(B[X]=ne,B[G]=Z,X=G):(B[X]=ce,B[ee]=Z,X=ee);else if(G<N&&0>a(ne,Z))B[X]=ne,B[G]=Z,X=G;else break e}}return L}function a(B,L){var Z=B.sortIndex-L.sortIndex;return Z!==0?Z:B.id-L.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();t.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,m=null,f=3,p=!1,_=!1,b=!1,x=!1,h=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;function y(B){for(var L=n(c);L!==null;){if(L.callback===null)i(c);else if(L.startTime<=B)i(c),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(c)}}function M(B){if(b=!1,y(B),!_)if(n(l)!==null)_=!0,C||(C=!0,V());else{var L=n(c);L!==null&&q(M,L.startTime-B)}}var C=!1,v=-1,E=5,P=-1;function F(){return x?!0:!(t.unstable_now()-P<E)}function I(){if(x=!1,C){var B=t.unstable_now();P=B;var L=!0;try{e:{_=!1,b&&(b=!1,g(v),v=-1),p=!0;var Z=f;try{t:{for(y(B),m=n(l);m!==null&&!(m.expirationTime>B&&F());){var X=m.callback;if(typeof X=="function"){m.callback=null,f=m.priorityLevel;var N=X(m.expirationTime<=B);if(B=t.unstable_now(),typeof N=="function"){m.callback=N,y(B),L=!0;break t}m===n(l)&&i(l),y(B)}else i(l);m=n(l)}if(m!==null)L=!0;else{var w=n(c);w!==null&&q(M,w.startTime-B),L=!1}}break e}finally{m=null,f=Z,p=!1}L=void 0}}finally{L?V():C=!1}}}var V;if(typeof S=="function")V=function(){S(I)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,z=K.port2;K.port1.onmessage=I,V=function(){z.postMessage(null)}}else V=function(){h(I,0)};function q(B,L){v=h(function(){B(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(B){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var Z=f;f=L;try{return B()}finally{f=Z}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(B,L){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=f;f=B;try{return L()}finally{f=Z}},t.unstable_scheduleCallback=function(B,L,Z){var X=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?X+Z:X):Z=X,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Z+N,B={id:d++,callback:L,priorityLevel:B,startTime:Z,expirationTime:N,sortIndex:-1},Z>X?(B.sortIndex=Z,e(c,B),n(l)===null&&B===n(c)&&(b?(g(v),v=-1):b=!0,q(M,Z-X))):(B.sortIndex=N,e(l,B),_||p||(_=!0,C||(C=!0,V()))),B},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(B){var L=f;return function(){var Z=f;f=L;try{return B.apply(this,arguments)}finally{f=Z}}}})(jv);kv.exports=jv;var vM=kv.exports,Xv={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _M=$e;function Wv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ca(){}var Pn={d:{f:Ca,r:function(){throw Error(Wv(522))},D:Ca,C:Ca,L:Ca,m:Ca,X:Ca,S:Ca,M:Ca},p:0,findDOMNode:null},yM=Symbol.for("react.portal"),SM=Symbol.for("react.recoverable"),B0=Symbol.for("react.optimistic_key");function bM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yM,key:i==null?null:i===B0?B0:""+i,children:t,containerInfo:e,implementation:n}}var ko=_M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Qu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pn;Nn.browser=function(t){return{$$typeof:SM,_reason:t}};Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Wv(299));return bM(t,e,null,n)};Nn.flushSync=function(t){var e=ko.T,n=Pn.p;try{if(ko.T=null,Pn.p=2,t)return t()}finally{ko.T=e,Pn.p=n,Pn.d.f()}};Nn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Pn.d.C(t,e))};Nn.prefetchDNS=function(t){typeof t=="string"&&Pn.d.D(t)};Nn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Qu(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Pn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Pn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Nn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Qu(e.as,e.crossOrigin);Pn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&Pn.d.M(t)};Nn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Qu(n,e.crossOrigin);Pn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Nn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Qu(e.as,e.crossOrigin);Pn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else Pn.d.m(t)};Nn.requestFormReset=function(t){Pn.d.r(t)};Nn.unstable_batchedUpdates=function(t,e){return t(e)};Nn.useFormState=function(t,e,n){return ko.H.useFormState(t,e,n)};Nn.useFormStatus=function(){return ko.H.useHostTransitionStatus()};Nn.version="19.3.1";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(t){console.error(t)}}qv(),Xv.exports=Nn;var MM=Xv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var an=vM,Yv=$e,EM=MM;function ie(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Zv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Al(t){for(var e=t,n=e;n&&!n.alternate;)e=n,e.flags&4098&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function Kv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qv(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function H0(t){if(Al(t)!==t)throw Error(ie(188))}function TM(t){var e=t.alternate;if(!e){if(e=Al(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return H0(a),t;if(s===i)return H0(a),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Jv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Jv(t),e!==null)return e;t=t.sibling}return null}function Xn(t,e,n,i,a,s){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,i,a,s)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&Xn(t.child,e,n,i,a,s))return!0;t=t.sibling}return!1}function Ys(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function G0(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function $v(t){var e=[null,null],n=Ys(t);return n===null||e_(e,t,n.child,{foundSelf:!1}),e}function e_(t,e,n,i){for(;n!==null;){if(n===e)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&e_(t,e,n.child,i))return!0;n=n.sibling}return!1}function tn(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(ie(559))}}var Sr=null,kd=null;function AM(t,e,n){return t===n?!0:t===e?(Sr=t,!0):!1}function CM(t,e,n){return t===n?(kd=t,!1):t===e?(kd!==null&&(Sr=t),!0):!1}function V0(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function jd(t,e,n){for(var i=0,a=t;a;a=n(a))i++;a=0;for(var s=e;s;s=n(s))a++;for(;0<i-a;)t=n(t),i--;for(;0<a-i;)e=n(e),a--;for(;i--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var Ft=Object.assign,wM=Symbol.for("react.element"),Wl=Symbol.for("react.transitional.element"),Uo=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),t_=Symbol.for("react.strict_mode"),Xd=Symbol.for("react.profiler"),n_=Symbol.for("react.consumer"),Gi=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),Pa=Symbol.for("react.lazy"),Yd=Symbol.for("react.activity"),RM=Symbol.for("react.legacy_hidden"),NM=Symbol.for("react.memo_cache_sentinel"),Zd=Symbol.for("react.view_transition"),FM=Symbol.for("react.recoverable"),k0=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=k0&&t[k0]||t["@@iterator"],typeof t=="function"?t:null)}var DM=Symbol.for("react.client.reference");function Kd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===DM?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case br:return"Fragment";case Xd:return"Profiler";case t_:return"StrictMode";case Wd:return"Suspense";case qd:return"SuspenseList";case Yd:return"Activity";case Zd:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case Uo:return"Portal";case Gi:return t.displayName||"Context";case n_:return(t._context.displayName||"Context")+".Consumer";case Jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $p:return e=t.displayName||null,e!==null?e:Kd(t.type)||"Memo";case Pa:e=t._payload,t=t._init;try{return Kd(t(e))}catch{}}return null}var Oo=Array.isArray,He=Yv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vt=EM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Fs={pending:!1,data:null,method:null,action:null},Qd=[],Mr=-1;function $i(t){return{current:t}}function yn(t){0>Mr||(t.current=Qd[Mr],Qd[Mr]=null,Mr--)}function It(t,e){Mr++,Qd[Mr]=t.current,t.current=e}var qi=$i(null),al=$i(null),Za=$i(null),cu=$i(null);function uu(t,e){switch(It(Za,e),It(al,t),It(qi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?nx(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=nx(e),t=ES(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yn(qi),It(qi,t)}function qr(){yn(qi),yn(al),yn(Za)}function Jd(t){var e=t.memoizedState;e!==null&&(io._currentValue=e.memoizedState,It(cu,t)),e=qi.current;var n=ES(e,t.type);e!==n&&(It(al,t),It(qi,n))}function fu(t){al.current===t&&(yn(qi),yn(al)),cu.current===t&&(yn(cu),io._currentValue=Fs)}var Cf,j0;function Ua(t){if(Cf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cf=e&&e[1]||"",j0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cf+t+j0}var wf=!1;function Rf(t,e){if(!t||wf)return"";wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(_){var f=_}Reflect.construct(t,[],m)}else{try{m.call()}catch(_){f=_}m=!1;try{var p=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),m=!0,new t}finally{m&&(p!==void 0?Object.defineProperty(t.prototype,"props",p):delete t.prototype.props)}}}else{try{throw Error()}catch(_){f=_}(m=t())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(_){if(_&&f&&typeof _.stack=="string")return[_.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{wf=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ua(n):""}function LM(t,e){switch(t.tag){case 26:case 27:case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return t.child!==e&&e!==null?Ua("Suspense Fallback"):Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return Rf(t.type,!1);case 11:return Rf(t.type.render,!1);case 1:return Rf(t.type,!0);case 31:return Ua("Activity");case 30:return Ua("ViewTransition");default:return""}}function X0(t){try{var e="",n=null;do e+=LM(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var $d=Object.prototype.hasOwnProperty,em=an.unstable_scheduleCallback,Nf=an.unstable_cancelCallback,UM=an.unstable_shouldYield,OM=an.unstable_requestPaint,ni=an.unstable_now,PM=an.unstable_getCurrentPriorityLevel,i_=an.unstable_ImmediatePriority,a_=an.unstable_UserBlockingPriority,du=an.unstable_NormalPriority,IM=an.unstable_LowPriority,s_=an.unstable_IdlePriority,zM=an.log,BM=an.unstable_setDisableYieldValue,Cl=null,ii=null;function Ga(t){if(typeof zM=="function"&&BM(t),ii&&typeof ii.setStrictMode=="function")try{ii.setStrictMode(Cl,t)}catch{}}var ai=Math.clz32?Math.clz32:VM,HM=Math.log,GM=Math.LN2;function VM(t){return t>>>=0,t===0?32:31-(HM(t)/GM|0)|0}var ql=256,Yl=262144,Zl=4194304;function As(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ju(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=As(i):(r&=o,r!==0?a=As(r):n||(n=o&~t,n!==0&&(a=As(n))))):(o=i&~s,o!==0?a=As(o):r!==0?a=As(r):n||(n=i&~t,n!==0&&(a=As(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function wl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function r_(t,e){e&8&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-ai(n),a=1<<i;e|=t[i],n&=~a}return e}function kM(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o_(){var t=Zl;return Zl<<=1,!(Zl&62914560)&&(Zl=4194304),t}function Ff(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jM(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var d=31-ai(n),m=1<<d;o[d]=0,l[d]=-1;var f=c[d];if(f!==null)for(c[d]=null,d=0;d<f.length;d++){var p=f[d];p!==null&&(p.lane&=-536870913)}n&=~m}i!==0&&l_(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function l_(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-ai(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function c_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function u_(t,e){var n=e&-e;return n=n&42?1:tm(n),n&(t.suspendedLanes|e)?0:n}function tm(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nm(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function f_(){var t=vt.p;return t!==0?t:(t=window.event,t===void 0?32:XS(t.type))}function W0(t,e){var n=vt.p;try{return vt.p=t,e()}finally{vt.p=n}}var ba=Math.random().toString(36).slice(2),xn="__reactFiber$"+ba,Wn="__reactProps$"+ba,fo="__reactContainer$"+ba,q0="__reactEvents$"+ba,XM="__reactListeners$"+ba,WM="__reactHandles$"+ba,Y0="__reactResources$"+ba,Nl="__reactMarker$"+ba,hu="__reactLoad$"+ba;function $u(t){delete t[xn],delete t[Wn],delete t[XM],delete t[WM]}function Rs(t){var e;if(e=t[xn])return e;for(var n=t.parentNode;n;){if(e=n[fo]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ux(t);t!==null;){if(n=t[xn])return n;t=ux(t)}return e}t=n,n=t.parentNode}return null}function ho(t){if(t=t[xn]||t[fo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Po(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ie(33))}function Or(t){var e=t[Y0];return e||(e=t[Y0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function dn(t){t[Nl]=!0}function d_(t){t[hu]=void 0}var h_=new Set,p_={};function Zs(t,e){Yr(t,e),Yr(t+"Capture",e)}function Yr(t,e){for(p_[t]=e,t=0;t<e.length;t++)h_.add(e[t])}var qM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Z0={},K0={};function YM(t){return $d.call(K0,t)?!0:$d.call(Z0,t)?!1:qM.test(t)?K0[t]=!0:(Z0[t]=!0,!1)}var pt=!1;function Q0(){var t=pt;return pt=!1,t}function Ic(t,e,n){if(YM(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Kl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function na(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,i)}}function Kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function m_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZM(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eh(t){if(!t._valueTracker){var e=m_(t)?"checked":"value";t._valueTracker=ZM(t,e,""+t[e])}}function g_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=m_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}var KM=/[\n"\\]/g;function pi(t){return t.replace(KM,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function th(t,e,n,i,a,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Kn(e)):t.value!==""+Kn(e)&&(t.value=""+Kn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?r==="number"&&t.value==e?Df(t,Kn(t.value)):Df(t,Kn(e)):n!=null?Df(t,Kn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Kn(o):t.removeAttribute("name")}function x_(t,e,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){eh(t);return}n=n!=null?""+Kn(n):"",e=e!=null?""+Kn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),eh(t)}function Df(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Pr(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Kn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function v_(t,e,n){if(e!=null&&(e=""+Kn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Kn(n):""}function __(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ie(92));if(Oo(i)){if(1<i.length)throw Error(ie(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Kn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),eh(t)}function Zr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var QM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function J0(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||QM.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function y_(t,e,n){if(e!=null&&typeof e!="object")throw Error(ie(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="",pt=!0);for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&(J0(t,a,i),pt=!0)}else for(var s in e)e.hasOwnProperty(s)&&J0(t,s,e[s])}function im(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var JM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$M=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zc(t){return $M.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vi(){}var nh=null;function am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Er=null,Ir=null;function $0(t){var e=ho(t);if(e&&(t=e.stateNode)){var n=t[Wn]||null;e:switch(t=e.stateNode,e.type){case"input":if(th(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pi(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Wn]||null;if(!a)throw Error(ie(90));th(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&g_(i)}break e;case"textarea":v_(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Pr(t,!!n.multiple,e,!1)}}}var Lf=!1;function S_(t,e,n){if(Lf)return t(e,n);Lf=!0;try{var i=t(e);return i}finally{if(Lf=!1,(Er!==null||Ir!==null)&&(pf(),Er&&(e=Er,t=Ir,Ir=Er=null,$0(e),t)))for(e=0;e<t.length;e++)$0(t[e])}}function sl(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Wn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var ga=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ih=!1;if(ga)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{ih=!1}var Va=null,sm=null,Bc=null;function b_(){if(Bc)return Bc;var t,e=sm,n=e.length,i,a="value"in Va?Va.value:Va.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return Bc=a.slice(t,1<i?1-i:void 0)}function Hc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ql(){return!0}function eg(){return!1}function In(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ql:eg,this.isPropagationStopped=eg,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=In(ps),Fl=Ft({},ps,{view:0,detail:0}),eE=In(Fl),Uf,Of,Eo,tf=Ft({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(Uf=t.screenX-Eo.screenX,Of=t.screenY-Eo.screenY):Of=Uf=0,Eo=t),Uf)},movementY:function(t){return"movementY"in t?t.movementY:Of}}),tg=In(tf),tE=Ft({},tf,{dataTransfer:0}),nE=In(tE),iE=Ft({},Fl,{relatedTarget:0}),Pf=In(iE),aE=Ft({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),sE=In(aE),rE=Ft({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oE=In(rE),lE=Ft({},ps,{data:0}),ng=In(lE),cE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fE[t])?!!e[t]:!1}function rm(){return dE}var hE=Ft({},Fl,{key:function(t){if(t.key){var e=cE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rm,charCode:function(t){return t.type==="keypress"?Hc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pE=In(hE),mE=Ft({},tf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=In(mE),gE=Ft({},ps,{submitter:0}),xE=In(gE),vE=Ft({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rm}),_E=In(vE),yE=Ft({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),SE=In(yE),bE=Ft({},tf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ME=In(bE),EE=Ft({},ps,{newState:0,oldState:0,source:0}),TE=In(EE),AE=[9,13,27,32],om=ga&&"CompositionEvent"in window,jo=null;ga&&"documentMode"in document&&(jo=document.documentMode);var CE=ga&&"TextEvent"in window&&!jo,M_=ga&&(!om||jo&&8<jo&&11>=jo),ag=" ",sg=!1;function E_(t,e){switch(t){case"keyup":return AE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Tr=!1;function wE(t,e){switch(t){case"compositionend":return T_(e);case"keypress":return e.which!==32?null:(sg=!0,ag);case"textInput":return t=e.data,t===ag&&sg?null:t;default:return null}}function RE(t,e){if(Tr)return t==="compositionend"||!om&&E_(t,e)?(t=b_(),Bc=sm=Va=null,Tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M_&&e.locale!=="ko"?null:e.data;default:return null}}var NE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NE[t.type]:e==="textarea"}function A_(t,e,n,i){Er?Ir?Ir.push(i):Ir=[i]:Er=i,e=Ou(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,rl=null;function FE(t){SS(t,0)}function nf(t){var e=Po(t);if(g_(e))return t}function og(t,e){if(t==="change")return e}var C_=!1;if(ga){var If;if(ga){var zf="oninput"in document;if(!zf){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),zf=typeof lg.oninput=="function"}If=zf}else If=!1;C_=If&&(!document.documentMode||9<document.documentMode)}function cg(){Xo&&(Xo.detachEvent("onpropertychange",w_),rl=Xo=null)}function w_(t){if(t.propertyName==="value"&&nf(rl)){var e=[];A_(e,rl,t,am(t)),S_(FE,e)}}function DE(t,e,n){t==="focusin"?(cg(),Xo=e,rl=n,Xo.attachEvent("onpropertychange",w_)):t==="focusout"&&cg()}function LE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nf(rl)}function UE(t,e){if(t==="click")return nf(e)}function OE(t,e){if(t==="input"||t==="change")return nf(e)}function PE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:PE;function ol(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!$d.call(e,a)||!ri(t[a],e[a]))return!1}return!0}function ah(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,e){var n=ug(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ug(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ah(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ah(t.document)}return e}function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var IE=ga&&"documentMode"in document&&11>=document.documentMode,Ar=null,sh=null,Wo=null,rh=!1;function dg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||Ar==null||Ar!==ah(i)||(i=Ar,"selectionStart"in i&&lm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&ol(Wo,i)||(Wo=i,i=Ou(sh,"onSelect"),0<i.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ar)))}function _s(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cr={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Bf={},F_={};ga&&(F_=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Ks(t){if(Bf[t])return Bf[t];if(!Cr[t])return t;var e=Cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F_)return Bf[t]=e[n];return t}var D_=Ks("animationend"),L_=Ks("animationiteration"),U_=Ks("animationstart"),zE=Ks("transitionrun"),BE=Ks("transitionstart"),HE=Ks("transitioncancel"),O_=Ks("transitionend"),P_=new Map,oh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oh.push("scrollEnd");function Fi(t,e){P_.set(t,e),Zs(e,[t])}var GE=0;function xa(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ri.identifierPrefix;var n=GE++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function hg(t){if(t==null||typeof t=="string")return t;var e=null,n=jr;if(n!==null)for(var i=0;i<n.length;i++){var a=t[n[i]];if(a!=null){if(a==="none")return"none";e=e==null?a:e+(" "+a)}}return e??t.default}function Ma(t,e){return t=hg(t),e=hg(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var pu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],wr=0,cm=0;function af(){for(var t=wr,e=cm=wr=0;e<t;){var n=ui[e];ui[e++]=null;var i=ui[e];ui[e++]=null;var a=ui[e];ui[e++]=null;var s=ui[e];if(ui[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&I_(n,a,s)}}function sf(t,e,n,i){ui[wr++]=t,ui[wr++]=e,ui[wr++]=n,ui[wr++]=i,cm|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function um(t,e,n,i){return sf(t,e,n,i),mu(t)}function Qs(t,e){return sf(t,null,null,e),mu(t)}function I_(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-ai(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function mu(t){if(50<nl)throw nl=0,Kc=null,Error(ie(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Rr={};function VE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new VE(t,e,n,i)}function fm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function z_(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Gc(t,e,n,i,a,s){var r=0;if(i=t,typeof i=="function")fm(i)&&(r=1);else if(typeof i=="string")r=gA(t,n,qi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(i){case Yd:return t=Gn(31,n,e,a),t.elementType=Yd,t.lanes=s,t;case br:return Ds(n.children,a,s,e);case t_:r=8,a|=24;break;case Xd:return t=Gn(12,n,e,a|2),t.elementType=Xd,t.lanes=s,t;case Wd:return t=Gn(13,n,e,a),t.elementType=Wd,t.lanes=s,t;case qd:return t=Gn(19,n,e,a),t.elementType=qd,t.lanes=s,t;case RM:case Zd:return t=a|32,t=Gn(30,n,e,t),t.elementType=Zd,t.lanes=s,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Gi:r=10;break e;case n_:r=9;break e;case Jp:r=11;break e;case $p:r=14;break e;case Pa:r=16,i=null;break e}r=29,n=Error(ie(130,t===null?"null":typeof t,"")),i=null}return e=Gn(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function Ds(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Hf(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function B_(t){var e=Gn(18,null,null,0);return e.stateNode=t,e}function Gf(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var pg=new WeakMap;function mi(t,e){if(typeof t=="object"&&t!==null){var n=pg.get(t);return n!==void 0?n:(e={value:t,source:e,stack:X0(e)},pg.set(t,e),e)}return{value:t,source:e,stack:X0(e)}}var Nr=[],Fr=0,gu=null,ll=0,di=[],hi=0,os=null,ki=1,ji="";function ca(t,e){Nr[Fr++]=ll,Nr[Fr++]=gu,gu=t,ll=e}function H_(t,e,n){di[hi++]=ki,di[hi++]=ji,di[hi++]=os,os=t;var i=ki;t=ji;var a=32-ai(i)-1;i&=~(1<<a),n+=1;var s=32-ai(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,ki=1<<32-ai(e)+a|n<<a|i,ji=s+t}else ki=1<<s|n<<a|i,ji=t}function rf(t){t.return!==null&&(ca(t,1),H_(t,1,0))}function dm(t){for(;t===gu;)gu=Nr[--Fr],Nr[Fr]=null,ll=Nr[--Fr],Nr[Fr]=null;for(;t===os;)os=di[--hi],di[hi]=null,ji=di[--hi],di[hi]=null,ki=di[--hi],di[hi]=null}function G_(t,e){di[hi++]=ki,di[hi++]=ji,di[hi++]=os,ki=e.id,ji=e.overflow,os=t}var hn=null,Ot=null,et=!1,Ka=null,gi=!1,lh=Error(ie(519));function ls(t){var e=Error(ie(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl(mi(e,t)),lh}function mg(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[xn]=t,e[Wn]=i,n){case"dialog":at("cancel",e),at("close",e);break;case"iframe":case"object":case"embed":at("load",e);break;case"video":case"audio":for(n=0;n<hl.length;n++)at(hl[n],e);break;case"source":at("error",e);break;case"img":case"image":case"link":at("error",e),at("load",e);break;case"details":at("toggle",e);break;case"input":at("invalid",e),x_(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":at("invalid",e);break;case"textarea":at("invalid",e),__(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||MS(e.textContent,n)?(i.popover!=null&&(at("beforetoggle",e),at("toggle",e)),i.onScroll!=null&&at("scroll",e),i.onScrollEnd!=null&&at("scrollend",e),i.onClick!=null&&(e.onclick=Vi),e=!0):e=!1,e||ls(t,!0)}function xu(t){for(hn=t.return;hn;)switch(hn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:hn=hn.return}}function tr(t){if(t!==hn)return!1;if(!et)return xu(t),et=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Wh(t.type,t.memoizedProps)),n=!n),n&&Ot&&ls(t),xu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));Ot=cx(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));Ot=cx(t)}else e===27?(e=Ot,ms(t.type)?(t=Kh,Kh=null,Ot=t):Ot=e):Ot=hn?xi(t.stateNode.nextSibling):null;return!0}function Is(){Ot=hn=null,et=!1}function Vf(){var t=Ka;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),Ka=null),t}function cl(t){Ka===null?Ka=[t]:Ka.push(t)}var ch=$i(null),Js=null,ua=null;function ka(t,e,n){It(ch,e._currentValue),e._currentValue=n}function ha(t){t._currentValue=ch.current,yn(ch)}function Vc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uh(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Vc(s.return,n,t),i||(r=null);break e}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(ie(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Vc(r,n,t),r=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),Vc(a.return,n,t),r=a.child,r=r!==null?r.sibling:null):r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function zs(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(ie(387));if(r=r.memoizedProps,r!==null){var o=a.type;ri(a.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(a===cu.current){if(r=a.alternate,r===null)throw Error(ie(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(io):t=[io])}a=a.return}return t!==null&&uh(e,t,n,i),e.flags|=262144,t!==null}function vu(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bs(t){Js=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vn(t){return V_(Js,t)}function Jl(t,e){return Js===null&&Bs(t),V_(t,e)}function V_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},ua===null){if(t===null)throw Error(ie(308));ua=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ua=ua.next=e;return n}var kE=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},jE=an.unstable_scheduleCallback,XE=an.unstable_NormalPriority,Jt={$$typeof:Gi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hm(){return{controller:new kE,data:new Map,refCount:0}}function Dl(t){t.refCount--,t.refCount===0&&jE(XE,function(){t.controller.abort()})}function gg(t,e){if(t.pendingLanes&4194048){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var i=e[t];n.indexOf(i)===-1&&n.push(i)}}}var Io=null;function WE(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var qo=null,fh=0,Hs=0,zr=null;function qE(t,e){if(qo===null){var n=qo=[];fh=0,Hs=Gm(),zr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return fh++,e.then(xg,xg),e}function xg(){if(--fh===0&&(Io=null,qo!==null)){zr!==null&&(zr.status="fulfilled");var t=qo;qo=null,Hs=0,zr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function YE(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var vg=He.S;He.S=function(t,e){if(rS=ni(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&qE(t,e),Io!==null)for(var n=eo;n!==null;)gg(n,Io),n=n.next;if(n=t.types,n!==null){for(var i=eo;i!==null;)gg(i,n),i=i.next;if(Hs!==0){i=Io,i===null&&(i=Io=[]);for(var a=0;a<n.length;a++){var s=n[a];i.indexOf(s)===-1&&i.push(s)}}}vg!==null&&vg(t,e)};var Ls=$i(null);function pm(){var t=Ls.current;return t!==null?t:Nt.pooledCache}function kc(t,e){e===null?It(Ls,Ls.current):It(Ls,e.pool)}function k_(){var t=pm();return t===null?null:{parent:Jt._currentValue,pool:t}}var po=Error(ie(460)),mm=Error(ie(474)),of=Error(ie(542)),_u={then:function(){}};function _g(t){return t=t.status,t==="fulfilled"||t==="rejected"}function j_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Vi,Vi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Sg(t),t===void 0&&!("reason"in e)?Error(ie(600)):t;default:if(typeof e.status=="string")e.then(Vi,Vi);else{if(t=Nt,t!==null&&100<t.shellSuspendCounter)throw Error(ie(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Sg(t),t}throw Us=e,po}}function Cs(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Us=n,po):n}}var Us=null;function yg(){if(Us===null)throw Error(ie(459));var t=Us;return Us=null,t}function Sg(t){if(t===po||t===of)throw Error(ie(483))}var Br=null,ul=0;function $l(t){var e=ul;return ul+=1,Br===null&&(Br=[]),j_(Br,t,e)}function wa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ec(t,e){throw e.$$typeof===wM?Error(ie(525)):(t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function X_(t){function e(h,g){if(t){var S=h.deletions;S===null?(h.deletions=[g],h.flags|=16):S.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key===null?g.set(h.index,h):g.set(h.key,h),h=h.sibling;return g}function a(h,g){return h=da(h,g),h.index=0,h.sibling=null,h}function s(h,g,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<g?(h.flags|=2,g):S):(h.flags|=134217730,g)):(h.flags|=1048576,g)}function r(h){return t&&h.alternate===null&&(h.flags|=134217730),h}function o(h,g,S,y){return g===null||g.tag!==6?(g=Hf(S,h.mode,y),g.return=h,g):(g=a(g,S),g.return=h,g)}function l(h,g,S,y){var M=S.type;return M===br?(h=d(h,g,S.props.children,y,S.key),wa(h,S),h):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Pa&&Cs(M)===g.type)?(g=a(g,S.props),wa(g,S),g.return=h,g):(g=Gc(S.type,S.key,S.props,null,h.mode,y),wa(g,S),g.return=h,g)}function c(h,g,S,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Gf(S,h.mode,y),g.return=h,g):(g=a(g,S.children||[]),g.return=h,g)}function d(h,g,S,y,M){return g===null||g.tag!==7?(g=Ds(S,h.mode,y,M),g.return=h,g):(g=a(g,S),g.return=h,g)}function m(h,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Hf(""+g,h.mode,S),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wl:return S=Gc(g.type,g.key,g.props,null,h.mode,S),wa(S,g),S.return=h,S;case Uo:return g=Gf(g,h.mode,S),g.return=h,g;case Pa:return g=Cs(g),m(h,g,S)}if(Oo(g)||bo(g))return g=Ds(g,h.mode,S,null),g.return=h,g;if(typeof g.then=="function")return m(h,$l(g),S);if(g.$$typeof===Gi)return m(h,Jl(h,g),S);ec(h,g)}return null}function f(h,g,S,y){var M=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return M!==null?null:o(h,g,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wl:return S.key===M?l(h,g,S,y):null;case Uo:return S.key===M?c(h,g,S,y):null;case Pa:return S=Cs(S),f(h,g,S,y)}if(Oo(S)||bo(S))return M!==null?null:d(h,g,S,y,null);if(typeof S.then=="function")return f(h,g,$l(S),y);if(S.$$typeof===Gi)return f(h,g,Jl(h,S),y);ec(h,S)}return null}function p(h,g,S,y,M){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(S)||null,o(g,h,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wl:return h=h.get(y.key===null?S:y.key)||null,l(g,h,y,M);case Uo:return h=h.get(y.key===null?S:y.key)||null,c(g,h,y,M);case Pa:return y=Cs(y),p(h,g,S,y,M)}if(Oo(y)||bo(y))return h=h.get(S)||null,d(g,h,y,M,null);if(typeof y.then=="function")return p(h,g,S,$l(y),M);if(y.$$typeof===Gi)return p(h,g,S,Jl(g,y),M);ec(g,y)}return null}function _(h,g,S,y){for(var M=null,C=null,v=g,E=g=0,P=null;v!==null&&E<S.length;E++){v.index>E?(P=v,v=null):P=v.sibling;var F=f(h,v,S[E],y);if(F===null){v===null&&(v=P);break}t&&v&&F.alternate===null&&e(h,v),g=s(F,g,E),C===null?M=F:C.sibling=F,C=F,v=P}if(E===S.length)return n(h,v),et&&ca(h,E),M;if(v===null){for(;E<S.length;E++)v=m(h,S[E],y),v!==null&&(g=s(v,g,E),C===null?M=v:C.sibling=v,C=v);return et&&ca(h,E),M}for(v=i(v);E<S.length;E++)P=p(v,h,E,S[E],y),P!==null&&(t&&(F=P.alternate,F!==null&&v.delete(F.key===null?E:F.key)),g=s(P,g,E),C===null?M=P:C.sibling=P,C=P);return t&&v.forEach(function(I){return e(h,I)}),et&&ca(h,E),M}function b(h,g,S,y){if(S==null)throw Error(ie(151));for(var M=null,C=null,v=g,E=g=0,P=null,F=S.next();v!==null&&!F.done;E++,F=S.next()){v.index>E?(P=v,v=null):P=v.sibling;var I=f(h,v,F.value,y);if(I===null){v===null&&(v=P);break}t&&v&&I.alternate===null&&e(h,v),g=s(I,g,E),C===null?M=I:C.sibling=I,C=I,v=P}if(F.done)return n(h,v),et&&ca(h,E),M;if(v===null){for(;!F.done;E++,F=S.next())F=m(h,F.value,y),F!==null&&(g=s(F,g,E),C===null?M=F:C.sibling=F,C=F);return et&&ca(h,E),M}for(v=i(v);!F.done;E++,F=S.next())F=p(v,h,E,F.value,y),F!==null&&(t&&(P=F.alternate,P!==null&&v.delete(P.key===null?E:P.key)),g=s(F,g,E),C===null?M=F:C.sibling=F,C=F);return t&&v.forEach(function(V){return e(h,V)}),et&&ca(h,E),M}function x(h,g,S,y){if(typeof S=="object"&&S!==null&&S.type===br&&S.key===null&&S.props.ref===void 0&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Wl:e:{for(var M=S.key;g!==null;){if(g.key===M){if(M=S.type,M===br){if(g.tag===7){n(h,g.sibling),y=a(g,S.props.children),wa(y,S),y.return=h,h=y;break e}}else if(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Pa&&Cs(M)===g.type){n(h,g.sibling),y=a(g,S.props),wa(y,S),y.return=h,h=y;break e}n(h,g);break}else e(h,g);g=g.sibling}S.type===br?(y=Ds(S.props.children,h.mode,y,S.key),wa(y,S),y.return=h,h=y):(y=Gc(S.type,S.key,S.props,null,h.mode,y),wa(y,S),y.return=h,h=y)}return r(h);case Uo:e:{for(M=S.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(h,g.sibling),y=a(g,S.children||[]),y.return=h,h=y;break e}else{n(h,g);break}else e(h,g);g=g.sibling}y=Gf(S,h.mode,y),y.return=h,h=y}return r(h);case Pa:return S=Cs(S),x(h,g,S,y)}if(Oo(S))return _(h,g,S,y);if(bo(S)){if(M=bo(S),typeof M!="function")throw Error(ie(150));return S=M.call(S),b(h,g,S,y)}if(typeof S.then=="function")return x(h,g,$l(S),y);if(S.$$typeof===Gi)return x(h,g,Jl(h,S),y);ec(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(n(h,g.sibling),y=a(g,S),y.return=h,h=y):(n(h,g),y=Hf(S,h.mode,y),y.return=h,h=y),r(h)):n(h,g)}return function(h,g,S,y){try{ul=0;var M=x(h,g,S,y);return Br=null,M}catch(v){if(v===po||v===of)throw v;var C=Gn(29,v,null,h.mode);return C.lanes=y,C.return=h,C}finally{}}}var Gs=X_(!0),W_=X_(!1),Ia=!1;function gm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,xt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=mu(t),I_(t,null,n),e}return sf(t,i,e,n),mu(t)}function Yo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,c_(t,n)}}function kf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var hh=!1;function Zo(){if(hh){var t=zr;if(t!==null)throw t}}function Ko(t,e,n,i){hh=!1;var a=t.updateQueue;Ia=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var m=a.baseState;r=0,d=c=l=null,o=s;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(ct&f)===f:(i&f)===f){f!==0&&f===Hs&&(hh=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var _=t,b=o;f=e;var x=n;switch(b.tag){case 1:if(_=b.payload,typeof _=="function"){m=_.call(x,m,f);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=b.payload,f=typeof _=="function"?_.call(x,m,f):_,f==null)break e;m=Ft({},m,f);break e;case 2:Ia=!0}}f=o.callback,f!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=m):d=d.next=p,r|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=m),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),fs|=r,t.lanes=r,t.memoizedState=m}}function q_(t,e){if(typeof t!="function")throw Error(ie(191,t));t.call(e)}function Y_(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)q_(n[t],e)}var cs=$i(null),yu=$i(0);function bg(t,e){t=Sa,It(yu,t),It(cs,e),Sa=t|e.baseLanes}function ph(){It(yu,Sa),It(cs,cs.current)}function xm(){Sa=yu.current,yn(cs),yn(yu)}var Mn=$i(null),wn=null;function $a(t){var e=t.alternate;It(Sn,Sn.current&1),It(Mn,t),wn===null&&(e===null||cs.current!==null||e.memoizedState!==null)&&(wn=t)}function mh(t){It(Sn,Sn.current),It(Mn,t),wn===null&&(wn=t)}function Z_(t){t.tag===22?(It(Sn,Sn.current),It(Mn,t),wn===null&&(wn=t)):es()}function es(){It(Sn,Sn.current),It(Mn,Mn.current)}function Qn(t){yn(Mn),wn===t&&(wn=null),yn(Sn)}var Sn=$i(0);function fl(t,e){It(Mn,Mn.current),It(Sn,e)}function vm(t){yn(Sn),yn(Mn),wn===t&&(wn=null)}function Su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Zh(n)||Xm(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var va=0,Ze=null,wt=null,Qt=null,bu=!1,Hr=!1,Vs=!1,Mu=0,dl=0,Gr=null,ZE=0;function Xt(){throw Error(ie(321))}function _m(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function ym(t,e,n,i,a,s){return va=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,He.H=t===null||t.memoizedState===null?Ay:Cy,Vs=!1,s=n(i,a),Vs=!1,Hr&&(s=Q_(e,n,i,a)),K_(t),s}function K_(t){He.H=Eu;var e=wt!==null&&wt.next!==null;if(va=0,Qt=wt=Ze=null,bu=!1,dl=0,Gr=null,e)throw Error(ie(300));t===null||$t||(t=t.dependencies,t!==null&&vu(t)&&($t=!0))}function Q_(t,e,n,i){Ze=t;var a=0;do{if(Hr&&(Gr=null),dl=0,Hr=!1,25<=a)throw Error(ie(301));if(a+=1,Qt=wt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}He.H=iT,s=e(n,i)}while(Hr);return s}function KE(){var t=He.H,e=t.useState()[0];return e=typeof e.then=="function"?Ll(e):e,t=t.useState()[0],(wt!==null?wt.memoizedState:null)!==t&&(Ze.flags|=1024),e}function Sm(){var t=Mu!==0;return Mu=0,t}function bm(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Mm(t){if(bu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}bu=!1}va=0,Qt=wt=Ze=null,Hr=!1,dl=Mu=0,Gr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Ze.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function qt(){if(wt===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Qt===null?Ze.memoizedState:Qt.next;if(e!==null)Qt=e,wt=t;else{if(t===null)throw Ze.alternate===null?Error(ie(467)):Error(ie(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Qt===null?Ze.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(t){var e=dl;return dl+=1,Gr===null&&(Gr=[]),t=j_(Gr,t,e),e=Ze,(Qt===null?e.memoizedState:Qt.next)===null&&(e=e.alternate,He.H=e===null||e.memoizedState===null?Ay:Cy),t}function cf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ll(t);if(t.$$typeof===FM)return;if(t.$$typeof===Gi)return vn(t)}throw Error(ie(438,String(t)))}function Em(t){var e=null,n=Ze.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ze.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=lf(),Ze.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=NM;return e.index++,n}function _a(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=qt();return Tm(e,wt,t)}function Tm(t,e,n){var i=t.queue;if(i===null)throw Error(ie(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var o=r=null,l=null,c=e,d=!1;do{var m=c.lane&-536870913;if(m!==c.lane?(ct&m)===m:(va&m)===m){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),m===Hs&&(d=!0);else if((va&f)===f){c=c.next,f===Hs&&(d=!0);continue}else m={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=m,r=s):l=l.next=m,Ze.lanes|=f,fs|=f;m=c.action,Vs&&n(s,m),s=c.hasEagerState?c.eagerState:n(s,m)}else f={lane:m,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=s):l=l.next=f,Ze.lanes|=m,fs|=m;c=c.next}while(c!==null&&c!==e);if(l===null?r=s:l.next=o,!ri(s,t.memoizedState)&&($t=!0,d&&(n=zr,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function jf(t){var e=qt(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);ri(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function J_(t,e,n){var i=Ze,a=qt(),s=et;if(s){if(n===void 0)throw Error(ie(407));n=n()}else n=e();var r=!ri((wt||a).memoizedState,n);if(r&&(a.memoizedState=n,$t=!0),a=a.queue,Am(ty.bind(null,i,a,t),[t]),t=a.getSnapshot!==e||r||Qt!==null&&(Qt.memoizedState.tag&1)!==0,Kr(t?9:8,{destroy:void 0},ey.bind(null,i,a,n,e),null),t){if(i.flags|=2048,Nt===null)throw Error(ie(349));s||va&127||$_(i,e,n)}return n}function $_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ze.updateQueue,e===null?(e=lf(),Ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ey(t,e,n,i){e.value=n,e.getSnapshot=i,ny(e)&&iy(t)}function ty(t,e,n){return n(function(){ny(e)&&iy(t)})}function ny(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function iy(t){var e=Qs(t,2);e!==null&&kn(e,t,2)}function gh(t){var e=On();if(typeof t=="function"){var n=t;if(t=n(),Vs){Ga(!0);try{n()}finally{Ga(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e}function ay(t,e,n,i){return t.baseState=n,Tm(t,wt,typeof i=="function"?i:_a)}function QE(t,e,n,i,a){if(ff(t))throw Error(ie(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};He.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,sy(e,s)):(s.next=n.next,e.pending=n.next=s)}}function sy(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=He.T,r={};r.types=s!==null?s.types:null,He.T=r;try{var o=n(a,i),l=He.S;l!==null&&l(r,o),Mg(t,e,o)}catch(c){xh(t,e,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),He.T=s}}else try{s=n(a,i),Mg(t,e,s)}catch(c){xh(t,e,c)}}function Mg(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Eg(t,e,i)},function(i){return xh(t,e,i)}):Eg(t,e,n)}function Eg(t,e,n){e.status="fulfilled",e.value=n,ry(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,sy(t,n)))}function xh(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,ry(e),e=e.next;while(e!==i)}t.action=null}function ry(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function oy(t,e){return e}function Tg(t,e){if(et){var n=Nt.formState;if(n!==null){e:{var i=Ze;if(et){if(Ot){t:{for(var a=Ot,s=gi;a.nodeType!==8;){if(!s){a=null;break t}if(a=xi(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ot=xi(a.nextSibling),i=a.data==="F!";break e}}ls(i)}i=!1}i&&(e=n[0])}}return n=On(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oy,lastRenderedState:e},n.queue=i,n=My.bind(null,Ze,i),i.dispatch=n,i=gh(!1),s=Nm.bind(null,Ze,!1,i.queue),i=On(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=QE.bind(null,Ze,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Ag(t){var e=qt();return ly(e,wt,t)}function ly(t,e,n){if(e=Tm(t,e,oy)[0],t=jc(_a)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Ll(e)}catch(r){throw r===po?of:r}else i=e;e=qt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Ze.flags|=2048,Kr(9,{destroy:void 0},JE.bind(null,a,n),null)),[i,s,t]}function JE(t,e){t.action=e}function Cg(t){var e=qt(),n=wt;if(n!==null)return ly(e,n,t);qt(),e=e.memoizedState,n=qt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Kr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ze.updateQueue,e===null&&(e=lf(),Ze.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function cy(){return qt().memoizedState}function Xc(t,e,n,i){var a=On();Ze.flags|=t,a.memoizedState=Kr(1|e,{destroy:void 0},n,i===void 0?null:i)}function uf(t,e,n,i){var a=qt();i=i===void 0?null:i;var s=a.memoizedState.inst;wt!==null&&i!==null&&_m(i,wt.memoizedState.deps)?a.memoizedState=Kr(e,s,n,i):(Ze.flags|=t,a.memoizedState=Kr(1|e,s,n,i))}function wg(t,e){Xc(8390656,8,t,e)}function Am(t,e){uf(2048,8,t,e)}function $E(t){Ze.flags|=4;var e=Ze.updateQueue;if(e===null)e=lf(),Ze.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function uy(t){var e=qt().memoizedState;return $E({ref:e,nextImpl:t}),function(){if(xt&2)throw Error(ie(440));return e.impl.apply(void 0,arguments)}}function fy(t,e){return uf(4,2,t,e)}function dy(t,e){return uf(4,4,t,e)}function hy(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function py(t,e,n){n=n!=null?n.concat([t]):null,uf(4,4,hy.bind(null,e,t),n)}function Cm(){}function my(t,e){var n=qt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&_m(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gy(t,e){var n=qt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&_m(e,i[1]))return i[0];if(i=t(),Vs){Ga(!0);try{t()}finally{Ga(!1)}}return n.memoizedState=[i,e],i}function wm(t,e,n){return n===void 0||va&1073741824&&!(ct&261930)?t.memoizedState=e:(t.memoizedState=n,t=lS(),Ze.lanes|=t,fs|=t,n)}function xy(t,e,n,i){return ri(n,e)?n:cs.current!==null?(t=wm(t,n,i),ri(t,e)||($t=!0),t):!(va&106)||va&1073741824&&!(ct&261930)?($t=!0,t.memoizedState=n):(t=lS(),Ze.lanes|=t,fs|=t,e)}function vy(t,e,n,i,a){var s=vt.p;vt.p=s!==0&&8>s?s:8;var r=He.T,o={};o.types=r!==null?r.types:null,He.T=o,Nm(t,!1,e,n);try{var l=a(),c=He.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=YE(l,i);Qo(t,e,d,si(t))}else Qo(t,e,i,si(t))}catch(m){Qo(t,e,{then:function(){},status:"rejected",reason:m},si())}finally{vt.p=s,r!==null&&o.types!==null&&(r.types=o.types),He.T=r}}function eT(){}function vh(t,e,n,i){if(t.tag!==5)throw Error(ie(476));var a=_y(t).queue;vy(t,a,e,Fs,n===null?eT:function(){return yy(t),n(i)})}function _y(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Fs,baseState:Fs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:Fs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function yy(t){var e=_y(t);e.next===null&&(e=t.alternate.memoizedState),Qo(t,e.next.queue,{},si())}function Rm(){return vn(io)}function Sy(){return qt().memoizedState}function by(){return qt().memoizedState}function tT(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=si();t=Qa(n);var i=Ja(e,t,n);i!==null&&(kn(i,e,n),Yo(i,e,n)),e={cache:hm()},t.payload=e;return}e=e.return}}function nT(t,e,n){var i=si();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ff(t)?Ey(e,n):(n=um(t,e,n,i),n!==null&&(kn(n,t,i),Ty(n,e,i)))}function My(t,e,n){var i=si();Qo(t,e,n,i)}function Qo(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ff(t))Ey(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,ri(o,r))return sf(t,e,a,0),Nt===null&&af(),!1}catch{}finally{}if(n=um(t,e,a,i),n!==null)return kn(n,t,i),Ty(n,e,i),!0}return!1}function Nm(t,e,n,i){if(i={lane:2,revertLane:Gm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ff(t)){if(e)throw Error(ie(479))}else e=um(t,n,i,2),e!==null&&kn(e,t,2)}function ff(t){var e=t.alternate;return t===Ze||e!==null&&e===Ze}function Ey(t,e){Hr=bu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ty(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,c_(t,n)}}var Eu={readContext:vn,use:cf,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useLayoutEffect:Xt,useInsertionEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useSyncExternalStore:Xt,useId:Xt,useHostTransitionStatus:Xt,useFormState:Xt,useActionState:Xt,useOptimistic:Xt,useMemoCache:Xt,useCacheRefresh:Xt,useEffectEvent:Xt},Ay={readContext:vn,use:cf,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:wg,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Xc(4194308,4,hy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xc(4194308,4,t,e)},useInsertionEffect:function(t,e){Xc(4,2,t,e)},useMemo:function(t,e){var n=On();e=e===void 0?null:e;var i=t();if(Vs){Ga(!0);try{t()}finally{Ga(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=On();if(n!==void 0){var a=n(e);if(Vs){Ga(!0);try{n(e)}finally{Ga(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=nT.bind(null,Ze,t),[i.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:function(t){t=gh(t);var e=t.queue,n=My.bind(null,Ze,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Cm,useDeferredValue:function(t,e){var n=On();return wm(n,t,e)},useTransition:function(){var t=gh(!1);return t=vy.bind(null,Ze,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ze,a=On();if(et){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Nt===null)throw Error(ie(349));ct&127||$_(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,wg(ty.bind(null,i,s,t),[t]),i.flags|=2048,Kr(9,{destroy:void 0},ey.bind(null,i,s,n,e),null),n},useId:function(){var t=On(),e=Nt.identifierPrefix;if(et){var n=ji,i=ki;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Mu++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=ZE++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Rm,useFormState:Tg,useActionState:Tg,useOptimistic:function(t){var e=On();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Nm.bind(null,Ze,!0,n),n.dispatch=e,[t,e]},useMemoCache:Em,useCacheRefresh:function(){return On().memoizedState=tT.bind(null,Ze)},useEffectEvent:function(t){var e=On(),n={impl:t};return e.memoizedState=n,function(){if(xt&2)throw Error(ie(440));return n.impl.apply(void 0,arguments)}}},Cy={readContext:vn,use:cf,useCallback:my,useContext:vn,useEffect:Am,useImperativeHandle:py,useInsertionEffect:fy,useLayoutEffect:dy,useMemo:gy,useReducer:jc,useRef:cy,useState:function(){return jc(_a)},useDebugValue:Cm,useDeferredValue:function(t,e){var n=qt();return xy(n,wt.memoizedState,t,e)},useTransition:function(){var t=jc(_a)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Ll(t),e]},useSyncExternalStore:J_,useId:Sy,useHostTransitionStatus:Rm,useFormState:Ag,useActionState:Ag,useOptimistic:function(t,e){var n=qt();return ay(n,wt,t,e)},useMemoCache:Em,useCacheRefresh:by,useEffectEvent:uy},iT={readContext:vn,use:cf,useCallback:my,useContext:vn,useEffect:Am,useImperativeHandle:py,useInsertionEffect:fy,useLayoutEffect:dy,useMemo:gy,useReducer:jf,useRef:cy,useState:function(){return jf(_a)},useDebugValue:Cm,useDeferredValue:function(t,e){var n=qt();return wt===null?wm(n,t,e):xy(n,wt.memoizedState,t,e)},useTransition:function(){var t=jf(_a)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Ll(t),e]},useSyncExternalStore:J_,useId:Sy,useHostTransitionStatus:Rm,useFormState:Cg,useActionState:Cg,useOptimistic:function(t,e){var n=qt();return wt!==null?ay(n,wt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Em,useCacheRefresh:by,useEffectEvent:uy};function Xf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _h={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=si(),a=Qa(i);a.payload=e,n!=null&&(a.callback=n),e=Ja(t,a,i),e!==null&&(kn(e,t,i),Yo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=si(),a=Qa(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ja(t,a,i),e!==null&&(kn(e,t,i),Yo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=si(),i=Qa(n);i.tag=2,e!=null&&(i.callback=e),e=Ja(t,i,n),e!==null&&(kn(e,t,n),Yo(e,t,n))}};function Rg(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!ol(n,i)||!ol(a,s):!0}function Ng(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_h.enqueueReplaceState(e,e.state,null)}function ks(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Ft({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function wy(t){pu(t)}function Ry(t){console.error(t)}function Ny(t){pu(t)}function Tu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Fg(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function yh(t,e,n){return n=Qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Tu(t,e)},n}function Fy(t){return t=Qa(t),t.tag=3,t}function Dy(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){Fg(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Fg(e,n,i),typeof a!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function aT(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&zs(e,n,a,!0),n=Mn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return wn===null?Lu():n.alternate===null&&Wt===0&&(Wt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===_u?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Jf(t,i,a)),!1;case 22:return n.flags|=65536,i===_u?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Jf(t,i,a)),!1}throw Error(ie(435,n.tag))}return Jf(t,i,a),Lu(),!1}if(et)return e=Mn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==lh&&(t=Error(ie(422),{cause:i}),cl(mi(t,n)))):(i!==lh&&(e=Error(ie(423),{cause:i}),cl(mi(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=mi(i,n),a=yh(t.stateNode,i,a),kf(t,a),Wt!==4&&(Wt=2)),!1;var s=Error(ie(520),{cause:i});if(s=mi(s,n),tl===null?tl=[s]:tl.push(s),Wt!==4&&(Wt=2),e===null)return!0;i=mi(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=yh(n.stateNode,i,t),kf(n,t),!1;case 1:if(e=n.type,s=n.stateNode,!(n.flags&128)&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ts===null||!ts.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Fy(a),Dy(a,t,n,i),kf(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Fm=Error(ie(461)),$t=!1;function en(t,e,n,i){e.child=t===null?W_(e,null,n,i):Gs(e,t.child,n,i)}function Dg(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Bs(e),i=ym(t,e,n,r,s,a),o=Sm(),t!==null&&!$t?(bm(t,e,a),ya(t,e,a)):(et&&o&&rf(e),e.flags|=1,en(t,e,i,a),e.child)}function Lg(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!fm(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,Ly(t,e,s,i,a)):(t=Gc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Lm(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(r,i)&&t.ref===e.ref)return ya(t,e,a)}return e.flags|=1,t=da(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ly(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(ol(s,i)&&t.ref===e.ref)if($t=!1,e.pendingProps=i=s,Lm(t,a))t.flags&131072&&($t=!0);else return e.lanes=t.lanes,ya(t,e,a)}return Sh(t,e,n,i,a)}function Uy(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return Ug(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&kc(e,s!==null?s.cachePool:null),s!==null?bg(e,s):ph(),Z_(e);else return i=e.lanes=536870912,Ug(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(kc(e,s.cachePool),bg(e,s),es(),e.memoizedState=null):(t!==null&&kc(e,null),ph(),es());return en(t,e,a,n),e.child}function Jo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Ug(t,e,n,i,a){var s=pm();return s=s===null?null:{parent:Jt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&kc(e,null),ph(),Z_(e),t!==null&&zs(t,e,i,!0),e.childLanes=a,null}function Wc(t,e){return e=df({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Og(t,e,n){return Gs(e,t.child,null,n),t=Wc(e,e.pendingProps),t.flags|=2,Qn(e),e.memoizedState=null,t}function sT(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(et){if(i.mode==="hidden")return t=Wc(e,i),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Jo(null,t);if(mh(e),(t=Ot)?(t=LS(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:os!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},n=B_(t),n.return=e,e.child=n,hn=e,Ot=null)):t=null,t===null)throw ls(e);return e.lanes=536870912,null}return Wc(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(mh(e),a)if(e.flags&256)e.flags&=-257,e=Og(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ie(558));else if($t||zs(t,e,n,!1),a=(n&t.childLanes)!==0,$t||a){if(cs.current===null){if(i=Nt,i!==null&&(r=u_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Qs(t,r),kn(i,t,r),Fm;Lu()}e=Og(t,e,n)}else t=s.treeContext,Ot=xi(r.nextSibling),hn=e,et=!0,Ka=null,gi=!1,t!==null&&G_(e,t),e=Wc(e,i),e.flags|=134221824;return e}return t=da(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function xr(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(ie(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Sh(t,e,n,i,a){return Bs(e),n=ym(t,e,n,i,void 0,a),i=Sm(),t!==null&&!$t?(bm(t,e,a),ya(t,e,a)):(et&&i&&rf(e),e.flags|=1,en(t,e,n,a),e.child)}function Pg(t,e,n,i,a,s){return Bs(e),e.updateQueue=null,n=Q_(e,i,n,a),K_(t),i=Sm(),t!==null&&!$t?(bm(t,e,s),ya(t,e,s)):(et&&i&&rf(e),e.flags|=1,en(t,e,n,s),e.child)}function Ig(t,e,n,i,a){if(Bs(e),e.stateNode===null){var s=Rr,r=n.contextType;typeof r=="object"&&r!==null&&(s=vn(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_h,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},gm(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?vn(r):Rr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Xf(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&_h.enqueueReplaceState(s,s.state,null),Ko(e,i,s,a),Zo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=ks(n,o);s.props=l;var c=s.context,d=n.contextType;r=Rr,typeof d=="object"&&d!==null&&(r=vn(d));var m=n.getDerivedStateFromProps;d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Ng(e,s,i,r),Ia=!1;var f=e.memoizedState;s.state=f,Ko(e,i,s,a),Zo(),c=e.memoizedState,o||f!==c||Ia?(typeof m=="function"&&(Xf(e,n,m,i),c=e.memoizedState),(l=Ia||Rg(e,n,l,i,f,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,dh(t,e),r=e.memoizedProps,d=ks(n,r),s.props=d,m=e.pendingProps,f=s.context,c=n.contextType,l=Rr,typeof c=="object"&&c!==null&&(l=vn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==m||f!==l)&&Ng(e,s,i,l),Ia=!1,f=e.memoizedState,s.state=f,Ko(e,i,s,a),Zo();var p=e.memoizedState;r!==m||f!==p||Ia||t!==null&&t.dependencies!==null&&vu(t.dependencies)?(typeof o=="function"&&(Xf(e,n,o,i),p=e.memoizedState),(d=Ia||Rg(e,n,d,i,f,p,l)||t!==null&&t.dependencies!==null&&vu(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),s.props=i,s.state=p,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,xr(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=Gs(e,t.child,null,a),e.child=Gs(e,null,n,a)):en(t,e,n,a),e.memoizedState=s.state,t=e.child):t=ya(t,e,a),t}function zg(t,e,n,i){return Is(),e.flags|=256,en(t,e,n,i),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mh(t){return{baseLanes:t,cachePool:k_()}}function Eh(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ti),t}function Oy(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(et){if(a?$a(e):es(),(t=Ot)?(t=LS(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:os!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},n=B_(t),n.return=e,e.child=n,hn=e,Ot=null)):t=null,t===null)throw ls(e);return Xm(t)?e.lanes=32:e.lanes=536870912,null}return s=i.children,i=i.fallback,a?(es(),a=e.mode,s=df({mode:"hidden",children:s},a),i=Ds(i,a,n,null),s.return=e,i.return=e,s.sibling=i,e.child=s,i=e.child,i.memoizedState=Mh(n),i.childLanes=Eh(t,r,n),e.memoizedState=bh,Jo(null,i)):($a(e),Dm(e,s))}var o=t.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return rT(t,e,s,r,i,l,o,n)}return a?(es(),a=i.fallback,s=e.mode,o=t.child,l=o.sibling,i=da(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?a=da(l,a):(a=Ds(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,Jo(null,i),i=e.child,a=t.child.memoizedState,a===null?a=Mh(n):(s=a.cachePool,s!==null?(o=Jt._currentValue,s=s.parent!==o?{parent:o,pool:o}:s):s=k_(),a={baseLanes:a.baseLanes|n,cachePool:s}),i.memoizedState=a,i.childLanes=Eh(t,r,n),e.memoizedState=bh,Jo(t.child,i)):($a(e),n=t.child,t=n.sibling,n=da(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function Dm(t,e){return e=df({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function df(t,e){return t=Gn(22,t,null,e),t.lanes=0,t}function tc(t,e,n){return Gs(e,t.child,null,n),t=Dm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rT(t,e,n,i,a,s,r,o){if(n)return e.flags&256?($a(e),e.flags&=-257,tc(t,e,o)):e.memoizedState!==null?(es(),e.child=t.child,e.flags|=128,null):(es(),s=a.fallback,r=e.mode,a=df({mode:"visible",children:a.children},r),s=Ds(s,r,o,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,Gs(e,t.child,null,o),a=e.child,a.memoizedState=Mh(o),a.childLanes=Eh(t,i,o),e.memoizedState=bh,Jo(null,a));if($a(e),Xm(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(a=Error(ie(419)),a.stack="",a.digest=i,cl({value:a,source:null,stack:null})),tc(t,e,o)}if($t||zs(t,e,o,!1),i=(o&t.childLanes)!==0,$t||i){if(cs.current!==null)return tc(t,e,o);if(i=Nt,i!==null&&(a=u_(i,o),a!==0&&a!==r.retryLane))throw r.retryLane=a,Qs(t,a),kn(i,t,a),Fm;return Zh(s)||Lu(),tc(t,e,o)}return Zh(s)?(e.flags|=192,e.child=t.child,null):(t=r.treeContext,Ot=xi(s.nextSibling),hn=e,et=!0,Ka=null,gi=!1,t!==null&&G_(e,t),e=Dm(e,a.children),e.flags|=134221824,e)}function Bg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vc(t.return,e,n)}function Hg(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&Su(n)===null&&(e=t),t=t.sibling}return e}function nc(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Wf(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function Th(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Sn.current;if(e.flags&128)return fl(e,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,fl(e,r),a==="backwards"&&t!==null?(Wf(t),en(t,e,i,n),Wf(t)):en(t,e,i,n),i=et?ll:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,n,e);else if(t.tag===19)Bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"backwards":n=Hg(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null,Wf(e)),nc(e,!0,a,null,s,i);break;case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Su(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}nc(e,!0,n,null,s,i);break;case"together":nc(e,!1,null,null,void 0,i);break;case"independent":e.memoizedState=null;break;default:n=Hg(e.child),n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),nc(e,!1,a,n,s,i)}return e.child}function Gg(t,e,n){var i=e.pendingProps;return ka(e,e.type,i.value),en(t,e,i.children,n),e.child}function ya(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fs|=e.lanes,!(n&e.childLanes))if(t!==null){if(zs(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=da(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=da(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lm(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&vu(t)))}function oT(t,e,n){switch(e.tag){case 3:uu(e,e.stateNode.containerInfo),ka(e,Jt,t.memoizedState.cache),Is();break;case 27:case 5:Jd(e);break;case 4:uu(e,e.stateNode.containerInfo);break;case 10:ka(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,mh(e),null;break;case 13:var i=e.memoizedState;if(i!==null){if(i.dehydrated!==null)return $a(e),e.flags|=128,null;i=zs(t,e,n,!1);var a=e.child.childLanes;return i||n&a?Oy(t,e,n):($a(e),t=ya(t,e,n),t!==null?t.sibling:null)}$a(e);break;case 19:if(e.flags&128)return Th(t,e,n);if(a=(t.flags&128)!==0,i=(n&e.childLanes)!==0,i||(zs(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return Th(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),fl(e,Sn.current),i)break;return null;case 22:return e.lanes=0,Uy(t,e,n,e.pendingProps);case 24:ka(e,Jt,t.memoizedState.cache)}return ya(t,e,n)}function Py(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)$t=!0;else{if(!Lm(t,n)&&!(e.flags&128))return $t=!1,oT(t,e,n);$t=!!(t.flags&131072)}else $t=!1,et&&e.flags&1048576&&H_(e,ll,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=Cs(e.elementType),e.type=t,typeof t=="function")fm(t)?(i=ks(t,i),e.tag=1,e=Ig(null,e,t,i,n)):(e.tag=0,e=Sh(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Jp){e.tag=11,e=Dg(null,e,t,i,n);break e}else if(a===$p){e.tag=14,e=Lg(null,e,t,i,n);break e}else if(a===Gi){e.tag=10,e.type=t,e=Gg(null,e,n);break e}}throw e=Kd(t)||t,Error(ie(306,e,""))}}return e;case 0:return Sh(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=ks(i,e.pendingProps),Ig(t,e,i,a,n);case 3:e:{if(uu(e,e.stateNode.containerInfo),t===null)throw Error(ie(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,dh(t,e),Ko(e,i,null,n);var r=e.memoizedState;if(i=r.cache,ka(e,Jt,i),i!==s.cache&&uh(e,[Jt],n,!0),Zo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=zg(t,e,i,n);break e}else if(i!==a){a=mi(Error(ie(424)),e),cl(a),e=zg(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ot=xi(t.firstChild),hn=e,et=!0,Ka=null,gi=!0,n=W_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Is(),i===a){e=ya(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 26:return xr(t,e),t===null?(n=dx(e.type,null,e.pendingProps,null))?e.memoizedState=n:et||(e.stateNode=TS(e.type,e.pendingProps,Za.current,e)):e.memoizedState=dx(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Jd(e),t===null&&et&&(i=e.stateNode=US(e.type,e.pendingProps,Za.current),hn=e,gi=!0,a=Ot,ms(e.type)?(Kh=a,Ot=xi(i.firstChild)):Ot=a),en(t,e,e.pendingProps.children,n),xr(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&et&&((a=i=Ot)&&(i=tA(i,e.type,e.pendingProps,gi),i!==null?(e.stateNode=i,hn=e,Ot=xi(i.firstChild),gi=!1,a=!0):a=!1),a||ls(e)),Jd(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,Wh(a,s)?i=null:r!==null&&Wh(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=ym(t,e,KE,null,null,n),io._currentValue=a),xr(t,e),en(t,e,i,n),e.child;case 6:return t===null&&et&&((t=n=Ot)&&(n=nA(n,e.pendingProps,gi),n!==null?(e.stateNode=n,hn=e,Ot=null,t=!0):t=!1),t||ls(e)),null;case 13:return Oy(t,e,n);case 4:return uu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):en(t,e,i,n),e.child;case 11:return Dg(t,e,e.type,e.pendingProps,n);case 7:return i=e.pendingProps,xr(t,e),en(t,e,i,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:return Gg(t,e,n);case 9:return a=e.type._context,i=e.pendingProps.children,Bs(e),a=vn(a),i=i(a),e.flags|=1,en(t,e,i,n),e.child;case 14:return Lg(t,e,e.type,e.pendingProps,n);case 15:return Ly(t,e,e.type,e.pendingProps,n);case 19:return Th(t,e,n);case 31:return sT(t,e,n);case 22:return Uy(t,e,n,e.pendingProps);case 24:return Bs(e),i=vn(Jt),t===null?(a=pm(),a===null&&(a=Nt,s=hm(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},gm(e),ka(e,Jt,a)):(t.lanes&n&&(dh(t,e),Ko(e,null,null,n),Zo()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ka(e,Jt,i)):(i=s.cache,ka(e,Jt,i),i!==a.cache&&uh(e,[Jt],n,!0))),en(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=e.pendingProps,i.name!=null&&i.name!=="auto"?e.flags|=t===null?18882560:18874368:et&&rf(e),t!==null&&t.memoizedProps.name!==i.name?e.flags|=4194816:xr(t,e),en(t,e,i.children,n),e.child;case 29:throw e.pendingProps}throw Error(ie(156,e.tag))}function ia(t){t.flags|=4}function qf(t,e,n,i,a){var s;if((s=(t.mode&32)!==0)&&(s=n===null?mx(e,i):mx(e,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),s){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(fS())t.flags|=8192;else throw Us=_u,mm}else t.flags&=-16777217}function Vg(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!zS(e))if(fS())t.flags|=8192;else throw Us=_u,mm}function ic(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?o_():536870912,t.lanes|=e,Qr|=e)}function To(t,e){if(!et)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&1206910976,i|=a.flags&1206910976,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function lT(t,e,n){var i=e.pendingProps;switch(dm(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Ut(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ha(Jt),qr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(tr(e)?ia(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vf())),Ut(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(ia(e),s!==null?(Ut(e),Vg(e,s)):(Ut(e),qf(e,a,null,i,n))):s?s!==t.memoizedState?(ia(e),Ut(e),Vg(e,s)):(Ut(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&ia(e),Ut(e),qf(e,a,t,i,n)),null;case 27:if(fu(e),n=Za.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ia(e);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ut(e),e.subtreeFlags&=-33554433,null}t=qi.current,tr(e)?mg(e):(t=US(a,i,n),e.stateNode=t,ia(e))}return Ut(e),e.subtreeFlags&=-33554433,null;case 5:if(fu(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&ia(e);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ut(e),e.subtreeFlags&=-33554433,null}if(s=qi.current,tr(e))mg(e);else{var r=ml(Za.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[xn]=e,s[Wn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(bn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ia(e)}}return Ut(e),e.subtreeFlags&=-33554433,qf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&ia(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Za.current,tr(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=hn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[xn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||MS(t.nodeValue,n)),t||ls(e,!0)}else t=ml(t).createTextNode(i),t[xn]=e,e.stateNode=t}return Ut(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=tr(e),n!==null){if(t===null){if(!i)throw Error(ie(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(557));t[xn]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),t=!1}else n=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Qn(e),e):(Qn(e),null);if(e.flags&128)throw Error(ie(558))}return Ut(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=tr(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ie(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ie(317));a[xn]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),a=!1}else a=Vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Qn(e),e):(Qn(e),null)}return Qn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),ic(e,e.updateQueue),Ut(e),null);case 4:return qr(),t===null&&Vm(e.stateNode.containerInfo),e.flags|=67108864,Ut(e),null;case 10:return ha(e.type),Ut(e),null;case 19:if(vm(e),i=e.memoizedState,i===null)return Ut(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)To(i,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Su(t),s!==null){for(e.flags|=128,To(i,!1),t=s.updateQueue,e.updateQueue=t,ic(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)z_(n,t),n=n.sibling;return fl(e,Sn.current&1|2),et&&ca(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&ni()>Fu&&(e.flags|=128,a=!0,To(i,!1),e.lanes=4194304)}else{if(!a)if(t=Su(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,ic(e,t),To(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!s.alternate&&!et)return Ut(e),null}else 2*ni()-i.renderingStartTime>Fu&&n!==536870912&&(e.flags|=128,a=!0,To(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}if(i.tail!==null){t=i.tail;e:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ni(),t.sibling=null,s=Sn.current,s=a?s&1|2:s&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||et?fl(e,s):(n=s,It(Mn,e),It(Sn,n),wn===null&&(wn=e)),et&&ca(e,i.treeForkCount),t}return Ut(e),null;case 22:case 23:return Qn(e),xm(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),n=e.updateQueue,n!==null&&ic(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&yn(Ls),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ha(Jt),Ut(e),null;case 25:return null;case 30:return e.flags|=33554432,Ut(e),null}throw Error(ie(156,e.tag))}function cT(t,e){switch(dm(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ha(Jt),qr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return fu(e),null;case 31:if(e.memoizedState!==null){if(Qn(e),e.alternate===null)throw Error(ie(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Qn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vm(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return qr(),null;case 10:return ha(e.type),null;case 22:case 23:return Qn(e),xm(),t!==null&&yn(Ls),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ha(Jt),null;case 25:return null;default:return null}}function Iy(t,e){switch(dm(e),e.tag){case 3:ha(Jt),qr();break;case 26:case 27:case 5:fu(e);break;case 4:qr();break;case 31:e.memoizedState!==null&&Qn(e);break;case 13:Qn(e);break;case 19:vm(e);break;case 10:ha(e.type);break;case 22:case 23:Qn(e),xm(),t!==null&&yn(Ls);break;case 24:ha(Jt)}}function Ul(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){At(e,e.return,o)}}function us(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){At(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){At(e,e.return,d)}}function zy(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Y_(e,n)}catch(i){At(t,t.return,i)}}}function By(t,e,n){n.props=ks(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){At(t,e,i)}}function Ii(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:var a=t.stateNode,s=xa(t.memoizedProps,a);(a.ref===null||a.ref.name!==s)&&(a.ref=wS(s)),i=a.ref;break;case 7:if(t.stateNode===null){var r=new oi(t);Xn(t.child,!1,$T,r,void 0,void 0),t.stateNode=r}i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(o){At(t,e,o)}}function gn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){At(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){At(t,e,a)}else n.current=null}function Au(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)DS(t.stateNode,e[n])}function kg(t){for(var e=t.return;e!==null&&(Om(e)&&DS(t.stateNode,e.stateNode),!Um(e));)e=e.return}function $o(t){for(var e=t.return;e!==null&&(Om(e)&&eA(t.stateNode,e.stateNode),!Um(e));)e=e.return}function Um(t){return t.tag===5||t.tag===3||t.tag===27}function Om(t){return t&&t.tag===7&&t.stateNode!==null}function Ah(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){At(t,t.return,a)}}function Yf(t,e,n){try{var i=t.stateNode;OT(i,t.type,n,e),i[Wn]=e}catch(a){At(t,t.return,a)}}function Hy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ms(t.type)||t.tag===4}function Zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ms(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(a,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(a),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vi)),Au(t,i),pt=!0;else if(a!==4&&(a===27&&(Au(t,i),i=null,ms(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(Ch(t,e,n,i),t=t.sibling;t!==null;)Ch(t,e,n,i),t=t.sibling}function Cu(t,e,n,i){var a=t.tag;if(a===5||a===6)a=t.stateNode,e?n.insertBefore(a,e):n.appendChild(a),Au(t,i),pt=!0;else if(a!==4&&(a===27&&(Au(t,i),i=null,ms(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(Cu(t,e,n,i),t=t.sibling;t!==null;)Cu(t,e,n,i),t=t.sibling}function Gy(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);bn(e,i,n),e[xn]=t,e[Wn]=n}catch(s){At(t,t.return,s)}}var wu=!1,$n=null;function jg(t){(t.tag===30||t.subtreeFlags&33554432)&&(wu=!0)}var Bi=null;function Xg(){var t=Bi;return Bi=null,t}var Hn=0;function mo(t,e,n,i,a){return Hn=0,Vy(t.child,e,n,i,a)}function Vy(t,e,n,i,a){for(var s=!1;t!==null;){if(t.tag===5){var r=t.stateNode;if(i!==null){var o=qh(r);i.push(o),o.view&&(s=!0)}else s||qh(r).view&&(s=!0);wu=!0,AS(r,Hn===0?e:e+"_"+Hn,n),Hn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&a||Vy(t.child,e,n,i,a)&&(s=!0));t=t.sibling}return s}function Ki(t,e){for(;t!==null;)t.tag===5?CS(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Ki(t.child,e)),t=t.sibling}function qc(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(qc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(ie(544));var n=e.name;e=Ma(e.default,e.share),e!=="none"&&(mo(t,n,e,null,!1)||Ki(t.child,!1))}t=t.sibling}}function wh(t,e){if(t.tag===30){var n=t.stateNode,i=t.memoizedProps,a=xa(i,n),s=Ma(i.default,n.paired?i.share:i.enter);s!=="none"?mo(t,a,s,null,!1)?(qc(t),n.paired||e||Jr(t,i.onEnter)):Ki(t.child,!1):qc(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)wh(t,e),t=t.sibling;else qc(t)}function Rh(t){if($n!==null&&$n.size!==0){var e=$n;if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var n=t.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var a=e.get(i);if(a!==void 0){var s=Ma(n.default,n.share);if(s!=="none"&&(mo(t,i,s,null,!1)?(s=t.stateNode,a.paired=s,s.paired=a,Jr(t,n.onShare)):Ki(t.child,!1)),e.delete(i),e.size===0)break}}}Rh(t)}t=t.sibling}}}function Nh(t){if(t.tag===30){var e=t.memoizedProps,n=xa(e,t.stateNode),i=$n!==null?$n.get(n):void 0,a=Ma(e.default,i!==void 0?e.share:e.exit);a!=="none"&&(mo(t,n,a,null,!1)?i!==void 0?(a=t.stateNode,i.paired=a,a.paired=i,$n.delete(n),Jr(t,e.onShare)):Jr(t,e.onExit):Ki(t.child,!1)),$n!==null&&Rh(t)}else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Nh(t),t=t.sibling;else $n!==null&&Rh(t)}function ky(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=xa(e,t.stateNode);e=Ma(e.default,e.update),t.flags&=-5,e!=="none"&&mo(t,n,e,t.memoizedState=[],!1)}else t.subtreeFlags&33554432&&ky(t);t=t.sibling}}function Fh(t){if(t.subtreeFlags&18874368)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&t.flags&18874368){var e=t.stateNode;e.paired!==null&&(e.paired=null,Ki(t.child,!1))}Fh(t)}t=t.sibling}}function Yc(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),Fh(t);else if(t.subtreeFlags&33554432)for(t=t.child;t!==null;)Yc(t),t=t.sibling;else Fh(t)}function jy(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):t.subtreeFlags&33554432&&jy(t),t=t.sibling}function Pm(t,e,n,i,a,s,r){for(var o=!1;e!==null;){if(e.tag===5){var l=e.stateNode;if(s!==null&&Hn<s.length){var c=s[Hn],d=qh(l);(c.view||d.view)&&(o=!0);var m;if(m=(t.flags&4)===0)if(d.clip)m=!0;else{m=c.rect;var f=d.rect;m=m.y!==f.y||m.x!==f.x||m.height!==f.height||m.width!==f.width}m&&(t.flags|=4),d.abs?d=!c.abs:(c=c.rect,d=d.rect,d=c.height!==d.height||c.width!==d.width),d&&(t.flags|=32)}else t.flags|=32;t.flags&4&&AS(l,Hn===0?n:n+"_"+Hn,a),o&&t.flags&4||(Bi===null&&(Bi=[]),Bi.push(l,Hn===0?i:i+"_"+Hn,e.memoizedProps)),Hn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&r?t.flags|=e.flags&32:Pm(t,e.child,n,i,a,s,r)&&(o=!0));e=e.sibling}return o}function Xy(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=t.stateNode,a=xa(n,i),s=Ma(n.default,n.update),r;r=t.memoizedState,t.memoizedState=null,i=t;var o=t.child;Hn=0,a=Pm(i,o,a,a,s,r,!1),t.flags&4&&a&&Jr(t,n.onUpdate)}else t.subtreeFlags&33554432&&Xy(t);t=t.sibling}}var un=!1,St=!1,Di=!1,Kf=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,fn=null,Li=!1,zo=!1,Ru=!1,Dh=!1;function uT(t,e,n){if(t=t.containerInfo,jh=ao,t=N_(t),lm(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var s=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break e}var o=0,l=-1,c=-1,d=0,m=0,f=t,p=null;t:for(;;){for(var _;f!==i||s!==0&&f.nodeType!==3||(l=o+s),f!==r||a!==0&&f.nodeType!==3||(c=o+a),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)p=f,f=_;for(;;){if(f===t)break t;if(p===i&&++d===s&&(l=o),p===r&&++m===a&&(c=o),(_=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=_}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Xh={focusedElem:t,selectionRange:i},ao=!1,n=(n&335544064)===n,fn=e,e=n?9270:1024;fn!==null;){if(t=fn,n&&(i=t.deletions,i!==null))for(s=0;s<i.length;s++)n&&Nh(i[s]);if(t.alternate===null&&t.flags&2)n&&jg(t),ac(n);else{if(t.tag===22){if(i=t.alternate,t.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Nh(i),ac(n);continue}else if(i!==null&&i.memoizedState!==null){n&&jg(t),ac(n);continue}}i=t.child,t.subtreeFlags&e&&i!==null?(i.return=t,fn=i):(n&&ky(t),ac(n))}}$n=null}function ac(t){for(;fn!==null;){var e=fn,n=t,i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&i!==null){n=void 0,a=i.memoizedProps,i=i.memoizedState;var s=e.stateNode;try{var r=ks(e.type,a);n=s.getSnapshotBeforeUpdate(r,i),s.__reactInternalSnapshotBeforeUpdate=n}catch(o){At(e,e.return,o)}}break;case 3:if(a&1024){if(i=e.stateNode.containerInfo,n=i.nodeType,n===9)Yh(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Yh(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=xa(i.memoizedProps,i.stateNode),a=e.memoizedProps,a=Ma(a.default,a.update),a!=="none"&&mo(i,n,a,i.memoizedState=[],!0));break;default:if(a&1024)throw Error(ie(163))}if(i=e.sibling,i!==null){i.return=e.return,fn=i;break}fn=e.return}}function Wy(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n),i&4&&Ul(5,n);break;case 1:if(Ui(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){At(n,n.return,r)}else{var a=ks(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){At(n,n.return,r)}}i&64&&zy(n),i&512&&Ii(n,n.return);break;case 3:if(Ui(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Y_(t,e)}catch(r){At(n,n.return,r)}}break;case 27:e===null&&i&4&&Gy(n);case 26:case 5:Ui(t,n),e===null&&i&4&&Ah(n),i&512&&Ii(n,n.return);break;case 12:Ui(t,n);break;case 31:Ui(t,n),i&4&&Ky(t,n);break;case 13:Ui(t,n),i&4&&Qy(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=bT.bind(null,n),iA(t,n))));break;case 22:if(i=n.memoizedState!==null||un,!i){var s=e!==null&&e.memoizedState!==null||St;e=un,a=St,un=i,(St=s)&&!a?(i=2,n.subtreeFlags&8772&&(i|=1),Ei(t,n,i)):Ui(t,n),un=e,St=a}break;case 30:Ui(t,n),i&512&&Ii(n,n.return);break;case 7:i&512&&Ii(n,n.return);default:Ui(t,n)}}function Lh(t,e){for(t=t.child;t!==null;)qy(t,e),t=t.sibling}function qy(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var a=t.stateNode,s=t.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null;a.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){At(t,t.return,l)}Uh(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,pt=!0}catch(l){At(t,t.return,l)}break;case 18:try{var o=t.stateNode;e?rx(o,!0):rx(t.stateNode,!1)}catch(l){At(t,t.return,l)}break;case 22:case 23:t.memoizedState===null&&Lh(t,e);break;default:Lh(t,e)}}function Uh(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){e:{var n=t,i=e;switch(n.tag){case 4:qy(n,i);break e;case 22:n.memoizedState===null&&Uh(n,i);break e;default:Uh(n,i)}}t=t.sibling}}function Yy(t){var e=t.alternate;e!==null&&(t.alternate=null,Yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&$u(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Gt=null,zn=!1;function yi(t,e,n){for(n=n.child;n!==null;)Zy(t,e,n),n=n.sibling}function Zy(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 26:St||gn(n,e),yi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!St&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:St||gn(n,e),$o(n);var i=Gt,a=zn;ms(n.type)&&(Gt=n.stateNode,zn=!1),yi(t,e,n),OS(n.stateNode,n.type,n.memoizedProps),Gt=i,zn=a;break;case 5:St||gn(n,e),$o(n);case 6:if(n.tag===6&&$o(n),i=Gt,a=zn,Gt=null,yi(t,e,n),Gt=i,zn=a,Gt!==null)if(zn)try{(Gt.nodeType===9?Gt.body:Gt.nodeName==="HTML"?Gt.ownerDocument.body:Gt).removeChild(n.stateNode),pt=!0}catch(s){At(n,e,s)}else try{Gt.removeChild(n.stateNode),pt=!0}catch(s){At(n,e,s)}break;case 18:Gt!==null&&(zn?(t=Gt,sx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),so(t)):sx(Gt,n.stateNode));break;case 4:i=Gt,a=zn,Gt=n.stateNode.containerInfo,zn=!0,yi(t,e,n),Gt=i,zn=a;break;case 0:case 11:case 14:case 15:us(2,n,e),St||us(4,n,e),yi(t,e,n);break;case 1:St||(gn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&By(n,e,i)),yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:St=(i=St)||n.memoizedState!==null,yi(t,e,n),St=i;break;case 30:gn(n,e),yi(t,e,n);break;case 7:St||gn(n,e),yi(t,e,n);break;default:yi(t,e,n)}}function Ky(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{so(t)}catch(n){At(e,e.return,n)}}}function Qy(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{so(t)}catch(n){At(e,e.return,n)}}function fT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Wg),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Wg),e;default:throw Error(ie(435,t.tag))}}function sc(t,e){var n=fT(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=MT.bind(null,t,i);i.then(a,a)}})}function Dn(t,e,n){var i=e.deletions;if(i!==null)for(var a=0;a<i.length;a++){var s=i[a],r=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 27:if(ms(l.type)){Gt=l.stateNode,zn=!1;break e}break;case 5:Gt=l.stateNode,zn=!1;break e;case 3:case 4:Gt=l.stateNode.containerInfo,zn=!0;break e}l=l.return}if(Gt===null)throw Error(ie(160));Zy(r,o,s),Gt=null,zn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Jy(e,t,n),e=e.sibling}var Ti=null;function Jy(t,e,n){var i=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(a&4&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(var s=0;s<i.length;s++){var r=i[s];r.ref.impl=r.nextImpl}Dn(e,t,n),Ln(t),a&4&&(us(3,t,t.return),Ul(3,t),us(5,t,t.return));break;case 1:Dn(e,t,n),Ln(t),a&512&&(St||i===null||gn(i,i.return)),a&64&&un&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(s=Ti,Dn(e,t,n),Ln(t),a&512&&(St||i===null||gn(i,i.return)),a&4)if(a=i!==null?i.memoizedState:null,n=t.memoizedState,i===null)if(n===null)if(t.stateNode===null)if(un)t.stateNode=TS(t.type,t.memoizedProps,e.containerInfo,t);else{e:{e=t.type,n=t.memoizedProps,a=s.ownerDocument||s;t:switch(e){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Nl]||i[xn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(e),a.head.insertBefore(i,a.querySelector("head > title"))),bn(i,e,n),i[xn]=t,dn(i),e=i;break e;case"link":if(s=px("link","href",a).get(e+(n.href||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(r,1);break t}}i=a.createElement(e),bn(i,e,n),a.head.appendChild(i);break;case"meta":if(s=px("meta","content",a).get(e+(n.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(r,1);break t}}i=a.createElement(e),bn(i,e,n),a.head.appendChild(i);break;default:throw Error(ie(468,e))}i[xn]=t,dn(i),e=i}t.stateNode=e}else un||Qh(s,t.type,t.stateNode);else t.stateNode=hx(s,n,t.memoizedProps);else a!==n?(a===null?(e=i.stateNode,e===null||St||e.parentNode.removeChild(e)):a.count--,n===null?un||Qh(s,t.type,t.stateNode):hx(s,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,i.memoizedProps);break;case 27:Dn(e,t,n),Ln(t),a&512&&(St||i===null||gn(i,i.return)),i!==null&&a&4&&Yf(t,t.memoizedProps,i.memoizedProps);break;case 5:if(s=Di,Di=!1,Dn(e,t,n),Di=s,Ln(t),a&512&&(St||i===null||gn(i,i.return)),t.flags&32){e=t.stateNode;try{Zr(e,""),pt=!0}catch(d){At(t,t.return,d)}}a&4&&t.stateNode!=null&&(e=t.memoizedProps,Yf(t,e,i!==null?i.memoizedProps:e)),a&1024&&(Kf=!0);break;case 6:if(Dn(e,t,n),Ln(t),a&4){if(t.stateNode===null)throw Error(ie(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,pt=!0}catch(d){At(t,t.return,d)}}break;case 3:if(pt=!1,Jc=null,s=Ti,Ti=gl(e.containerInfo),Dn(e,t,n),Ti=s,Ln(t),a&4&&i!==null&&i.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(d){At(t,t.return,d)}Kf&&(Kf=!1,$y(t)),pt=!1;break;case 4:a=Di,Di=un,i=Q0(),s=Ti,Ti=gl(t.stateNode.containerInfo),Dn(e,t,n),Ln(t),Ti=s,pt&&zo&&(Ru=!0),pt=i,Di=a;break;case 12:Dn(e,t,n),Ln(t);break;case 31:Dn(e,t,n),Ln(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,sc(t,e)));break;case 13:Dn(e,t,n),Ln(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(hf=ni()),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,sc(t,e)));break;case 22:s=t.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=un,l=St,c=Di;un=o||s,Di=c||s,St=l||r,Dn(e,t,n),St=l,Di=c,un=o,Ln(t),a&8192&&(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,!s||i===null||r||un||St||(e=r||St,n=un,i=St,un=s||un,St=e,Oa(t,2),un=n,St=i),!s&&Di||Lh(t,s)),a&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,sc(t,n))));break;case 19:Dn(e,t,n),Ln(t),a&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,sc(t,e)));break;case 30:a&512&&(St||i===null||gn(i,i.return)),a=Q0(),s=zo,r=(n&335544064)===n,o=t.memoizedProps,zo=r&&Ma(o.default,o.update)!=="none",Dn(e,t,n),Ln(t),r&&i!==null&&pt&&(t.flags|=4),zo=s,pt=a;break;case 21:break;case 7:a&512&&(St||i===null||gn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=t);default:Dn(e,t,n),Ln(t)}}function Ln(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Hy(i)){n=i;break}i=i.return}i=null;for(var a=t.return;a!==null;){if(Om(a)){var s=a.stateNode;i===null?i=[s]:i.push(s)}if(Um(a))break;a=a.return}var r=i;if(n==null)throw Error(ie(160));switch(n.tag){case 27:var o=n.stateNode,l=Zf(t);Cu(t,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Zr(c,""),n.flags&=-33);var d=Zf(t);Cu(t,d,c,r);break;case 3:case 4:var m=n.stateNode.containerInfo,f=Zf(t);Ch(t,f,m,r);break;default:throw Error(ie(161))}}catch(p){At(t,t.return,p)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $y(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$y(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,ao=!0,e.reset(),ao=!1),t=t.sibling}}function nr(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)eS(e,t),e=e.sibling;else Xy(e)}function eS(t,e){var n=t.alternate;if(n===null)wh(t,!1);else switch(t.tag){case 3:if(Dh=Li=!1,Xg(),nr(e,t),!Li&&!Ru){if(t=Bi,t!==null)for(var i=0;i<t.length;i+=3){n=t[i];var a=t[i+1];CS(n,t[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+a+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Dh=!0}Bi=null;break;case 5:nr(e,t);break;case 4:i=Li,Li=!1,nr(e,t),Li&&(Ru=!0),Li=i;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?wh(t,!1):nr(e,t));break;case 30:i=Li,a=Xg(),Li=!1,nr(e,t),Li&&(t.flags|=4);var s=t.memoizedProps,r=t.stateNode;e=xa(s,r),r=xa(n.memoizedProps,r);var o=Ma(s.default,s.update);o==="none"?e=!1:(s=n.memoizedState,n.memoizedState=null,n=t.child,Hn=0,e=Pm(t,n,e,r,o,s,!0),Hn!==(s===null?0:s.length)&&(t.flags|=32)),t.flags&4&&e?(Jr(t,t.memoizedProps.onUpdate),Bi=a):a!==null&&(a.push.apply(a,Bi),Bi=a),Li=t.flags&32?!0:i;break;default:nr(e,t)}}function Ui(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Wy(t,e.alternate,e),e=e.sibling}function Oa(t,e){for(t=t.child;t!==null;){var n=t,i=e;switch(n.tag){case 0:case 11:case 14:case 15:us(4,n,n.return),Oa(n,i);break;case 1:gn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&By(n,n.return,a),Oa(n,i);break;case 27:i&2&&OS(n.stateNode,n.type,n.memoizedProps);case 5:gn(n,n.return),n.tag!==5&&n.tag!==27||$o(n),Oa(n,i);break;case 6:$o(n);break;case 26:gn(n,n.return),a=n.stateNode,n.memoizedState!==null||a===null||St||a.parentNode.removeChild(a),Oa(n,i);break;case 22:n.memoizedState===null&&Oa(n,i);break;case 30:gn(n,n.return),Oa(n,i);break;case 7:gn(n,n.return);default:Oa(n,i)}t=t.sibling}}function Ei(t,e,n){for(n=e.subtreeFlags&8772?n:n&-2,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags,o=(n&1)!==0;switch(s.tag){case 0:case 11:case 15:Ei(a,s,n),Ul(4,s);break;case 1:if(Ei(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(d){At(i,i.return,d)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)q_(c[a],l)}catch(d){At(i,i.return,d)}}o&&r&64&&zy(s),Ii(s,s.return);break;case 27:n&2&&Gy(s);case 5:s.tag!==5&&s.tag!==27||kg(s),Ei(a,s,n),o&&i===null&&r&4&&Ah(s),Ii(s,s.return);break;case 6:kg(s);break;case 26:l=s.stateNode,s.memoizedState!==null||l===null||un||Qh(gl(l.ownerDocument),s.type,l),Ei(a,s,n),o&&i===null&&r&4&&Ah(s),Ii(s,s.return);break;case 12:Ei(a,s,n);break;case 31:Ei(a,s,n),o&&r&4&&Ky(a,s);break;case 13:Ei(a,s,n),o&&r&4&&Qy(a,s);break;case 22:s.memoizedState===null&&Ei(a,s,n),Ii(s,s.return);break;case 30:Ei(a,s,n),Ii(s,s.return);break;case 7:Ii(s,s.return);default:Ei(a,s,n)}e=e.sibling}}function Im(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Dl(n))}function zm(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Dl(t))}function li(t,e,n,i){var a=(n&335544064)===n;if(e.subtreeFlags&(a?10262:10256))for(e=e.child;e!==null;)tS(t,e,n,i),e=e.sibling;else a&&jy(e)}function tS(t,e,n,i){var a=(n&335544064)===n;a&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Yc(e);var s=e.flags;switch(e.tag){case 0:case 11:case 15:li(t,e,n,i),s&2048&&Ul(9,e);break;case 1:li(t,e,n,i);break;case 3:li(t,e,n,i),a&&Dh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),s&2048&&(s=null,e.alternate!==null&&(s=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==s&&(e.refCount++,s!=null&&Dl(s)));break;case 12:if(s&2048){li(t,e,n,i),s=e.stateNode;try{var r=e.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,e.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(c){At(e,e.return,c)}}else li(t,e,n,i);break;case 31:li(t,e,n,i);break;case 13:li(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,o=e.alternate,e.memoizedState!==null?(a&&o!==null&&o.memoizedState===null&&Yc(o),r._visibility&2?li(t,e,n,i):el(t,e)):(a&&o!==null&&o.memoizedState!==null&&Yc(e),r._visibility&2?li(t,e,n,i):(r._visibility|=2,vr(t,e,n,i,(e.subtreeFlags&10256)!==0||!1))),s&2048&&Im(o,e);break;case 24:li(t,e,n,i),s&2048&&zm(e.alternate,e);break;case 30:a&&(s=e.alternate,s!==null&&(Ki(s.child,!0),Ki(e.child,!0))),li(t,e,n,i);break;default:li(t,e,n,i)}}function vr(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:vr(s,r,o,l,a),Ul(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?vr(s,r,o,l,a):el(s,r):(d._visibility|=2,vr(s,r,o,l,a)),a&&c&2048&&Im(r.alternate,r);break;case 24:vr(s,r,o,l,a),a&&c&2048&&zm(r.alternate,r);break;default:vr(s,r,o,l,a)}e=e.sibling}}function el(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:el(n,i),a&2048&&Im(i.alternate,i);break;case 24:el(n,i),a&2048&&zm(i.alternate,i);break;default:el(n,i)}e=e.sibling}}var ws=8192;function ys(t,e,n){if(t.subtreeFlags&ws)for(t=t.child;t!==null;)nS(t,e,n),t=t.sibling}function nS(t,e,n){switch(t.tag){case 26:ys(t,e,n),t.flags&ws&&(t.memoizedState!==null?xA(n,Ti,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&gx(n,t)));break;case 5:ys(t,e,n),t.flags&ws&&(t=t.stateNode,(e&335544128)===e&&gx(n,t));break;case 3:case 4:var i=Ti;Ti=gl(t.stateNode.containerInfo),ys(t,e,n),Ti=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ws,ws=16777216,ys(t,e,n),ws=i):ys(t,e,n));break;case 30:if(t.flags&ws&&(i=t.memoizedProps.name,i!=null&&i!=="auto")){var a=t.stateNode;a.paired=null,$n===null&&($n=new Map),$n.set(i,a)}ys(t,e,n);break;default:ys(t,e,n)}}function iS(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ao(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];fn=i,sS(i,t)}iS(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)aS(t),t=t.sibling}function aS(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&us(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Zc(t)):Ao(t);break;default:Ao(t)}}function Zc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];fn=i,sS(i,t)}iS(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:us(8,e,e.return),Zc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Zc(e));break;default:Zc(e)}t=t.sibling}}function sS(t,e){for(;fn!==null;){var n=fn;switch(n.tag){case 0:case 11:case 15:us(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Dl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,fn=i;else e:for(n=t;fn!==null;){i=fn;var a=i.sibling,s=i.return;if(Yy(i),i===n){fn=null;break e}if(a!==null){a.return=s,fn=a;break e}fn=s}}}var dT={getCacheForType:function(t){var e=vn(Jt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return vn(Jt).controller.signal}},hT=typeof WeakMap=="function"?WeakMap:Map,xt=0,Nt=null,st=null,ct=0,Et=0,Zn=null,ja=!1,go=!1,Bm=!1,Sa=0,Wt=0,fs=0,Os=0,Nu=0,ti=0,Qr=0,tl=null,Bn=null,Oh=!1,hf=0,rS=0,Fu=1/0,Du=null,ts=null,kt=0,Ri=null,js=null,Yi=0,Ph=0,Ih=null,oS=null,Vr=null,kr=null,jr=null,nl=0,Kc=null;function si(){return xt&2&&ct!==0?ct&-ct:He.T!==null?Gm():f_()}function lS(){if(ti===0)if(!(ct&536870912)||et){var t=Yl;Yl<<=1,!(Yl&3932160)&&(Yl=262144),ti=t}else ti=536870912;return t=Mn.current,t!==null&&(t.flags|=32),ti}function Jr(t,e){if(e!=null){var n=t.stateNode,i=n.ref;i===null&&(i=n.ref=wS(xa(t.memoizedProps,n))),kr===null&&(kr=[]),kr.push(e.bind(null,i))}}function kn(t,e,n){(t===Nt&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&($r(t,0),Xa(t,ct,ti,!1)),Rl(t,n),(!(xt&2)||t!==Nt)&&(t===Nt&&(!(xt&2)&&(Os|=n),Wt===4&&Xa(t,ct,ti,!1)),ea(t))}function cS(t,e,n){if(xt&6)throw Error(ie(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||wl(t,e),a=i?gT(t,e):Qf(t,e,!0),s=i;do{if(a===0){go&&!i&&Xa(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!pT(n)){a=Qf(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;a=tl;var l=o.current.memoizedState.isDehydrated;if(l&&($r(o,r).flags|=256),r=Qf(o,r,!1),r!==2&&r!==6){if(Bm&&!l){o.errorRecoveryDisabledLanes|=s,Os|=s,a=4;break e}s=Bn,Bn=a,s!==null&&(Bn===null?Bn=s:Bn.push.apply(Bn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){$r(t,0),Xa(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(ie(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:Xa(i,e,ti,!ja);break e;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(ie(329))}if((e&62914560)===e&&(a=hf+300-ni(),10<a)){if(Xa(i,e,ti,!ja),Ju(i,0,!0)!==0)break e;Yi=e,i.timeoutHandle=km(qg.bind(null,i,n,Bn,Du,Oh,e,ti,Os,Qr,ja,s,"Throttled",-0,0),a);break e}qg(i,n,Bn,Du,Oh,e,ti,Os,Qr,ja,s,null,-0,0)}}break}while(!0);ea(t)}function qg(t,e,n,i,a,s,r,o,l,c,d,m,f,p){t.timeoutHandle=-1;var _=e.subtreeFlags,b=(s&335544064)===s;if(m=null,(b||_&8192||(_&16785408)===16785408)&&(m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},$n=null,nS(e,s,m),b&&(_=m,b=t.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(_.count++,_.waitingForViewTransition=!0,_=xl.bind(_),b.finished.then(_,_))),_=(s&62914560)===s?hf-ni():(s&4194048)===s?rS-ni():0,_=vA(m,_),_!==null)){Yi=s,t.cancelPendingCommit=_(Zg.bind(null,t,e,s,n,i,a,r,o,l,c,d,m,null,f,p)),Xa(t,s,r,!c);return}Zg(t,e,s,n,i,a,r,o,l,c,d,m)}function pT(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!ri(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xa(t,e,n,i){e=r_(t,e),e&=~Nu,e&=~Os,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-ai(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&l_(t,n,e)}function pf(){return xt&6?!0:(Ol(0),!1)}function Hm(){if(st!==null){if(Et===0)var t=st.return;else t=st,ua=Js=null,Mm(t),Br=null,ul=0,t=st;for(;t!==null;)Iy(t.alternate,t),t=t.return;st=null}}function $r(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,zT(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Yi=0,Hm(),Nt=t,st=n=da(t.current,null),ct=e,Et=0,Zn=null,ja=!1,go=wl(t,e),Bm=!1,Qr=ti=Nu=Os=fs=Wt=0,Bn=tl=null,Oh=!1,Sa=r_(t,e),af(),n}function uS(t,e){Ze=null,He.H=Eu,e===po||e===of?(e=yg(),Et=3):e===mm?(e=yg(),Et=4):Et=e===Fm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Zn=e,st===null&&(Wt=1,Tu(t,mi(e,t.current)))}function fS(){var t=Mn.current;return t===null?!0:(ct&4194048)===ct?wn===null:(ct&62914560)===ct||ct&536870912?t===wn:!1}function dS(){var t=He.H;return He.H=Eu,t===null?Eu:t}function hS(){var t=He.A;return He.A=dT,t}function Lu(){Wt=4,ja||(ct&4194048)!==ct&&Mn.current!==null||(go=!0),!(fs&134217727)&&!(Os&134217727)||Nt===null||Xa(Nt,ct,ti,!1)}function Qf(t,e,n){var i=xt;xt|=2;var a=dS(),s=hS();(Nt!==t||ct!==e)&&(Du=null,$r(t,e)),e=!1;var r=Wt;e:do try{if(Et!==0&&st!==null){var o=st,l=Zn;switch(Et){case 8:Hm(),r=6;break e;case 3:case 2:case 9:case 6:Mn.current===null&&(e=!0);var c=Et;if(Et=0,Zn=null,Dr(t,o,l,c),n&&go){r=0;break e}break;default:c=Et,Et=0,Zn=null,Dr(t,o,l,c)}}mT(),r=Wt;break}catch(d){uS(t,d)}while(!0);return e&&t.shellSuspendCounter++,ua=Js=null,xt=i,He.H=a,He.A=s,st===null&&(Nt=null,ct=0,af()),r}function mT(){for(;st!==null;)pS(st)}function gT(t,e){var n=xt;xt|=2;var i=dS(),a=hS();Nt!==t||ct!==e?(Du=null,Fu=ni()+500,$r(t,e)):go=wl(t,e);e:do try{if(Et!==0&&st!==null){e=st;var s=Zn;t:switch(Et){case 1:Et=0,Zn=null,Dr(t,e,s,1);break;case 2:case 9:if(_g(s)){Et=0,Zn=null,Yg(e);break}e=function(){Et!==2&&Et!==9||Nt!==t||(Et=7),ea(t)},s.then(e,e);break e;case 3:Et=7;break e;case 4:Et=5;break e;case 7:_g(s)?(Et=0,Zn=null,Yg(e)):(Et=0,Zn=null,Dr(t,e,s,7));break;case 5:var r=null;switch(st.tag){case 26:r=st.memoizedState;case 5:case 27:var o=st;if(r?zS(r):o.stateNode.complete){Et=0,Zn=null;var l=o.sibling;if(l!==null)st=l;else{var c=o.return;c!==null?(st=c,mf(c)):st=null}break t}}Et=0,Zn=null,Dr(t,e,s,5);break;case 6:Et=0,Zn=null,Dr(t,e,s,6);break;case 8:Hm(),Wt=6;break e;default:throw Error(ie(462))}}xT();break}catch(d){uS(t,d)}while(!0);return ua=Js=null,He.H=i,He.A=a,xt=n,st!==null?0:(Nt=null,ct=0,af(),Wt)}function xT(){for(;st!==null&&!UM();)pS(st)}function pS(t){var e=Py(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,e===null?mf(t):st=e}function Yg(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Pg(n,e,e.pendingProps,e.type,void 0,ct);break;case 11:e=Pg(n,e,e.pendingProps,e.type.render,e.ref,ct);break;case 5:Mm(e);var i=e;i===hn&&(et?(xu(i),i.tag===5&&i.stateNode!=null&&(Ot=i.stateNode)):(xu(i),et=!0));default:Iy(n,e),e=st=z_(e,Sa),e=Py(n,e,Sa)}t.memoizedProps=t.pendingProps,e===null?mf(t):st=e}function Dr(t,e,n,i){ua=Js=null,Mm(e),Br=null,ul=0;var a=e.return;try{if(aT(t,a,e,n,ct)){Wt=1,Tu(t,mi(n,t.current)),st=null;return}}catch(s){if(a!==null)throw st=a,s;Wt=1,Tu(t,mi(n,t.current)),st=null;return}e.flags&32768?(et||i===1?t=!0:go||ct&536870912?t=!1:(ja=t=!0,(i===2||i===9||i===3||i===6)&&(i=Mn.current,i!==null&&i.tag===13&&(i.flags|=16384))),mS(e,t)):mf(e)}function mf(t){var e=t;do{if(e.flags&32768){mS(e,ja);return}t=e.return;var n=lT(e.alternate,e,Sa);if(n!==null){st=n;return}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);Wt===0&&(Wt=5)}function mS(t,e){do{var n=cT(t.alternate,t);if(n!==null){n.flags&=32767,st=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){st=t;return}st=t=n}while(t!==null);Wt=6,st=null}function Zg(t,e,n,i,a,s,r,o,l,c,d,m){t.cancelPendingCommit=null;do gf();while(kt!==0);if(xt&6)throw Error(ie(327));if(e!==null){if(e===t.current)throw Error(ie(177));t===Nt&&(st=Nt=null,ct=0),js=e,Ri=t,Yi=n,Ih=a,oS=i,vT(t,e,n,r,o,l,m)}}function vT(t,e,n,i,a,s,r){var o=e.lanes|e.childLanes;if(Ph=o,o|=cm,jM(t,n,o,i,a,s),kr=null,(n&335544064)===n?(jr=WE(t),i=10262):(jr=null,i=10256),e.subtreeFlags&i||e.flags&i?(t.callbackNode=null,t.callbackPriority=0,ET(du,function(){return Gh(),null})):(t.callbackNode=null,t.callbackPriority=0),wu=!1,i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=He.T,He.T=null,a=vt.p,vt.p=2,s=xt,xt|=4;try{uT(t,e,n)}finally{xt=s,vt.p=a,He.T=i}}kt=1,wu?Vr=jT(r,t.containerInfo,jr,zh,Bh,yT,Hh,Gh,_T):(zh(),Bh(),Hh())}function _T(t){if(kt!==0){var e=Ri.onRecoverableError;e(t,{componentStack:null})}}function yT(){kt===3&&(kt=0,eS(js,Ri),kt=4)}function zh(){if(kt===1){kt=0;var t=Ri,e=js,n=Yi,i=(e.flags&13878)!==0;if(e.subtreeFlags&13878||i){i=He.T,He.T=null;var a=vt.p;vt.p=2;var s=xt;xt|=4;try{zo=Ru=!1,Jy(e,t,n),n=Xh;var r=N_(t.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&R_(o.ownerDocument.documentElement,o)){if(l!==null&&lm(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var m=o.ownerDocument||document,f=m&&m.defaultView||window;if(f.getSelection){var p=f.getSelection(),_=o.textContent.length,b=Math.min(l.start,_),x=l.end===void 0?b:Math.min(l.end,_);!p.extend&&b>x&&(r=x,x=b,b=r);var h=fg(o,b),g=fg(o,x);if(h&&g&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var S=m.createRange();S.setStart(h.node,h.offset),p.removeAllRanges(),b>x?(p.addRange(S),p.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),p.addRange(S))}}}}for(m=[],p=o;p=p.parentNode;)p.nodeType===1&&m.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<m.length;o++){var y=m[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}ao=!!jh,Xh=jh=null}finally{xt=s,vt.p=a,He.T=i}}t.current=e,kt=2}}function Bh(){if(kt===2){kt=0;var t=Ri,e=js,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=He.T,He.T=null;var i=vt.p;vt.p=2;var a=xt;xt|=4;try{Wy(t,e.alternate,e)}finally{xt=a,vt.p=i,He.T=n}}kt=3}}function Hh(){if(kt===4||kt===3){kt=0;var t=Vr;Vr=null,OM();var e=Ri,n=js,i=Yi,a=oS,s=(i&335544064)===i?10262:10256;if(n.subtreeFlags&s||n.flags&s?kt=5:(kt=0,js=Ri=null,gS(e,e.pendingLanes)),s=e.pendingLanes,s===0&&(ts=null),nm(i),n=n.stateNode,ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Cl,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=He.T,s=vt.p,vt.p=2,He.T=null;try{for(var r=e.onRecoverableError,o=0;o<a.length;o++){var l=a[o];r(l.value,{componentStack:l.stack})}}finally{He.T=n,vt.p=s}}if(a=kr,r=jr,jr=null,a!==null&&(kr=null,r===null&&(r=[]),t!==null))for(l=0;l<a.length;l++)n=(0,a[l])(r),n!==void 0&&t.finished.finally(n);Yi&3&&gf(),ea(e),s=e.pendingLanes,i&261930&&s&42?e===Kc?nl++:(nl=0,Kc=e):(nl=0,Kc=null),Ol(0)}}function gS(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Dl(e)))}function gf(){return Vr!==null&&(Vr.skipTransition(),Vr=null),zh(),Bh(),Hh(),Gh()}function Gh(){if(kt!==5)return!1;var t=Ri,e=Ph;Ph=0;var n=nm(Yi),i=He.T,a=vt.p;try{vt.p=32>n?32:n,He.T=null,n=Ih,Ih=null;var s=Ri,r=Yi;if(kt=0,js=Ri=null,Yi=0,xt&6)throw Error(ie(331));var o=xt;if(xt|=4,aS(s.current),tS(s,s.current,r,n),xt=o,Ol(0,!1),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Cl,s)}catch{}return!0}finally{vt.p=a,He.T=i,gS(t,e)}}function Kg(t,e,n){e=mi(n,e),e=yh(t.stateNode,e,2),t=Ja(t,e,2),t!==null&&(Rl(t,2),ea(t))}function At(t,e,n){if(t.tag===3)Kg(t,t,n);else for(;e!==null;){if(e.tag===3){Kg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ts===null||!ts.has(i))){t=mi(n,t),n=Fy(2),i=Ja(e,n,2),i!==null&&(Dy(n,i,e,t),Rl(i,2),ea(i));break}}e=e.return}}function Jf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hT;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Bm=!0,a.add(n),t=ST.bind(null,t,e,n),e.then(t,t))}function ST(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Nt===t&&(ct&n)===n&&(Wt===4||Wt===3&&(ct&62914560)===ct&&300>ni()-hf?xt&2?Nu|=n:$r(t,0):Nu|=n,Qr===ct&&(Qr=0)),ea(t)}function xS(t,e){e===0&&(e=o_()),t=Qs(t,e),t!==null&&(Rl(t,e),ea(t))}function bT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xS(t,n)}function MT(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ie(314))}i!==null&&i.delete(e),xS(t,n)}function ET(t,e){return em(t,e)}var eo=null,_r=null,Vh=!1,Uu=!1,$f=!1,Wa=0;function ea(t){t!==_r&&t.next===null&&(_r===null?eo=_r=t:_r=_r.next=t),Uu=!0,Vh||(Vh=!0,AT())}function Ol(t,e){if(!$f&&Uu){$f=!0;do for(var n=!1,i=eo;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-ai(42|t)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Qg(i,s))}else s=ct,s=Ju(i,i===Nt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||wl(i,s)||(n=!0,Qg(i,s));i=i.next}while(n);$f=!1}}function TT(){vS()}function vS(){Uu=Vh=!1;var t=0;Wa!==0&&IT()&&(t=Wa);for(var e=ni(),n=null,i=eo;i!==null;){var a=i.next,s=_S(i,e);s===0?(i.next=null,n===null?eo=a:n.next=a,a===null&&(_r=n)):(n=i,(t!==0||s&3)&&(Uu=!0)),i=a}kt!==0&&kt!==5||Ol(t),Wa!==0&&(Wa=0)}function _S(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-ai(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=kM(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=Nt,n=ct,n=Ju(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Nf(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||wl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Nf(i),nm(n)){case 2:case 8:n=a_;break;case 32:n=du;break;case 268435456:n=s_;break;default:n=du}return i=yS.bind(null,t),n=em(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Nf(i),t.callbackPriority=2,t.callbackNode=null,2}function yS(t,e){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(gf()&&t.callbackNode!==n)return null;var i=ct;return i=Ju(t,t===Nt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(cS(t,i,e),_S(t,ni()),t.callbackNode!=null&&t.callbackNode===n?yS.bind(null,t):null)}function Qg(t,e){if(gf())return null;cS(t,e,!0)}function AT(){BT(function(){xt&6?em(i_,TT):vS()})}function Gm(){if(Wa===0){var t=Hs;t===0&&(t=ql,ql<<=1,!(ql&261888)&&(ql=256)),Wa=t}return Wa}function Jg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zc(t)}function CT(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=Jg((a[Wn]||null).action),r=i.submitter;r&&(e=(e=r[Wn]||null)?Jg(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new ef("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Wa!==0){var l=new FormData(a,r);vh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=new FormData(a,r),vh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var ed=0;ed<oh.length;ed++){var td=oh[ed],wT=td.toLowerCase(),RT=td[0].toUpperCase()+td.slice(1);Fi(wT,"on"+RT)}Fi(D_,"onAnimationEnd");Fi(L_,"onAnimationIteration");Fi(U_,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(zE,"onTransitionRun");Fi(BE,"onTransitionStart");Fi(HE,"onTransitionCancel");Fi(O_,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);Zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function SS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(d){pu(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(d){pu(d)}a.currentTarget=null,s=l}}}}function at(t,e){var n=e[q0];n===void 0&&(n=e[q0]=new Set);var i=t+"__bubble";n.has(i)||(bS(e,t,2,!1),n.add(i))}function nd(t,e,n){var i=0;e&&(i|=4),bS(n,t,i,e)}var rc="_reactListening"+Math.random().toString(36).slice(2);function Vm(t){if(!t[rc]){t[rc]=!0,h_.forEach(function(n){n!=="selectionchange"&&(NT.has(n)||nd(n,!1,t),nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rc]||(e[rc]=!0,nd("selectionchange",!1,e))}}function bS(t,e,n,i){switch(XS(e)){case 2:var a=bA;break;case 8:a=MA;break;default:a=Zm}n=a.bind(null,e,n,t),a=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function id(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Rs(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue e}o=o.parentNode}}i=i.return}S_(function(){var c=s,d=am(n),m=[];e:{var f=P_.get(t);if(f!==void 0){var p=ef,_=t;switch(t){case"keypress":if(Hc(n)===0)break e;case"keydown":case"keyup":p=pE;break;case"focusin":_="focus",p=Pf;break;case"focusout":_="blur",p=Pf;break;case"beforeblur":case"afterblur":p=Pf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_E;break;case D_:case L_:case U_:p=sE;break;case O_:p=SE;break;case"scroll":case"scrollend":p=eE;break;case"wheel":p=ME;break;case"copy":case"cut":case"paste":p=oE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ig;break;case"submit":p=xE;break;case"toggle":case"beforetoggle":p=TE}var b=(e&4)!==0,x=!b&&(t==="scroll"||t==="scrollend"),h=b?f!==null?f+"Capture":null:f;b=[];for(var g=c,S;g!==null;){var y=g;if(S=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||S===null||h===null||(y=sl(g,h),y!=null&&b.push(pl(g,y,S))),x)break;g=g.return}0<b.length&&(f=new p(f,_,null,n,d),m.push({event:f,listeners:b}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",p&&n!==nh&&(_=n.relatedTarget||n.fromElement)&&(Rs(_)||_[fo]))break e;(f||p)&&(_=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,f?(p=n.relatedTarget||n.toElement,f=c,p=p?Rs(p):null,p!==null&&(x=Al(p),b=p.tag,p!==x||b!==5&&b!==27&&b!==6)&&(p=null)):(f=null,p=c),f!==p&&(b=tg,y="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(b=ig,y="onPointerLeave",h="onPointerEnter",g="pointer"),x=f==null?_:Po(f),S=p==null?_:Po(p),_=new b(y,g+"leave",f,n,d),_.target=x,_.relatedTarget=S,y=null,Rs(d)===c&&(b=new b(h,g+"enter",p,n,d),b.target=S,b.relatedTarget=x,y=b),x=y,b=f&&p?jd(f,p,FT):null,f!==null&&$g(m,_,f,b,!1),p!==null&&x!==null&&$g(m,x,p,b,!0)))}e:{if(f=c?Po(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var M=og;else if(rg(f))if(C_)M=OE;else{M=LE;var C=DE}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&im(c.elementType)&&(M=og):M=UE;if(M&&(M=M(t,c))){A_(m,M,n,d);break e}C&&C(t,f,c)}switch(C=c?Po(c):window,t){case"focusin":(rg(C)||C.contentEditable==="true")&&(Ar=C,sh=c,Wo=null);break;case"focusout":Wo=sh=Ar=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,dg(m,n,d);break;case"selectionchange":if(IE)break;case"keydown":case"keyup":dg(m,n,d)}var v;if(om)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Tr?E_(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(M_&&n.locale!=="ko"&&(Tr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Tr&&(v=b_()):(Va=d,sm="value"in Va?Va.value:Va.textContent,Tr=!0)),C=Ou(c,E),0<C.length&&(E=new ng(E,t,null,n,d),m.push({event:E,listeners:C}),v?E.data=v:(v=T_(n),v!==null&&(E.data=v)))),(v=CE?wE(t,n):RE(t,n))&&(E=Ou(c,"onBeforeInput"),0<E.length&&(C=new ng("onBeforeInput","beforeinput",null,n,d),m.push({event:C,listeners:E}),C.data=v)),CT(m,t,c,n,d)}SS(m,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ou(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=sl(t,n),a!=null&&i.unshift(pl(t,a,s)),a=sl(t,e),a!=null&&i.push(pl(t,a,s))),t.tag===3)return i;t=t.return}return[]}function FT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $g(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=sl(n,s),c!=null&&r.unshift(pl(n,c,l))):a||(c=sl(n,s),c!=null&&r.push(pl(n,c,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var DT=/\r\n?/g,LT=/\u0000|\uFFFD/g;function ex(t){return(typeof t=="string"?t:""+t).replace(DT,`
`).replace(LT,"")}function MS(t,e){return e=ex(e),ex(t)===e}function Tt(t,e,n,i,a,s){switch(n){case"children":if(typeof i=="string")e==="body"||e==="textarea"&&i===""||Zr(t,i);else if(typeof i=="number"||typeof i=="bigint")e!=="body"&&Zr(t,""+i);else return;break;case"className":Kl(t,"class",i);break;case"tabIndex":Kl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(t,n,i);break;case"style":y_(t,i,s);return;case"data":if(e!=="object"){Kl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=zc(i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&Tt(t,e,"name",a.name,a,null),Tt(t,e,"formEncType",a.formEncType,a,null),Tt(t,e,"formMethod",a.formMethod,a,null),Tt(t,e,"formTarget",a.formTarget,a,null)):(Tt(t,e,"encType",a.encType,a,null),Tt(t,e,"method",a.method,a,null),Tt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=zc(i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Vi);return;case"onScroll":i!=null&&at("scroll",t);return;case"onScrollEnd":i!=null&&at("scrollend",t);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ie(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ie(60));(s!=null?s.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=zc(i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":at("beforetoggle",t),at("toggle",t),Ic(t,"popover",i);break;case"xlinkActuate":na(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":na(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":na(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":na(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":na(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":na(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":na(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":na(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":na(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ic(t,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=JM.get(n)||n,Ic(t,n,i);else return}pt=!0}function kh(t,e,n,i,a,s){switch(n){case"style":y_(t,i,s);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ie(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ie(60));(s!=null?s.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof i=="string")Zr(t,i);else if(typeof i=="number"||typeof i=="bigint")Zr(t,""+i);else return;break;case"onScroll":i!=null&&at("scroll",t);return;case"onScrollEnd":i!=null&&at("scrollend",t);return;case"onClick":i!=null&&(t.onclick=Vi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!p_.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),s=n.slice(2,a?n.length-7:void 0),e=t[Wn]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(s,e,a),typeof i=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(s,i,a);break e}pt=!0,n in t?t[n]=i:i===!0?t.setAttribute(n,""):Ic(t,n,i)}return}pt=!0}function bn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":at("error",t),at("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ie(137,e));default:Tt(t,e,s,r,n,null)}}a&&Tt(t,e,"srcSet",n.srcSet,n,null),i&&Tt(t,e,"src",n.src,n,null);return;case"input":at("invalid",t);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ie(137,e));break;default:Tt(t,e,i,d,n,null)}}x_(t,s,o,l,c,r,a,!1);return;case"select":at("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Tt(t,e,a,o,n,null)}e=s,n=r,t.multiple=!!i,e!=null?Pr(t,!!i,e,!1):n!=null&&Pr(t,!!i,n,!0);return;case"textarea":at("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ie(91));break;default:Tt(t,e,r,o,n,null)}__(t,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Tt(t,e,l,i,n,null)}return;case"dialog":at("beforetoggle",t),at("toggle",t),at("cancel",t),at("close",t);break;case"iframe":case"object":at("load",t);break;case"video":case"audio":for(i=0;i<hl.length;i++)at(hl[i],t);break;case"image":at("error",t),at("load",t);break;case"details":at("toggle",t);break;case"embed":case"source":case"link":at("error",t),at("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(ie(137,e));default:Tt(t,e,c,i,n,null)}return;default:if(im(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&kh(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Tt(t,e,o,i,n,null))}var UT={};function OT(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(p in n){var m=n[p];if(n.hasOwnProperty(p)&&m!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=m;default:i.hasOwnProperty(p)||Tt(t,e,p,null,i,m)}}for(var f in i){var p=i[f];if(m=n[f],i.hasOwnProperty(f)&&(p!=null||m!=null))switch(f){case"type":p!==m&&(pt=!0),s=p;break;case"name":p!==m&&(pt=!0),a=p;break;case"checked":p!==m&&(pt=!0),c=p;break;case"defaultChecked":p!==m&&(pt=!0),d=p;break;case"value":p!==m&&(pt=!0),r=p;break;case"defaultValue":p!==m&&(pt=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(ie(137,e));break;default:p!==m&&Tt(t,e,f,p,i,m)}}th(t,r,o,l,c,d,s,a);return;case"select":p=r=o=f=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||Tt(t,e,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":s!==l&&(pt=!0),f=s;break;case"defaultValue":s!==l&&(pt=!0),o=s;break;case"multiple":s!==l&&(pt=!0),r=s;default:s!==l&&Tt(t,e,a,s,i,l)}e=o,n=r,i=p,f!=null?Pr(t,!!n,f,!1):!!i!=!!n&&(e!=null?Pr(t,!!n,e,!0):Pr(t,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Tt(t,e,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":a!==s&&(pt=!0),f=a;break;case"defaultValue":a!==s&&(pt=!0),p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ie(91));break;default:a!==s&&Tt(t,e,r,a,i,s)}v_(t,f,p);return;case"option":for(var _ in n)if(f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:Tt(t,e,_,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":f!==p&&(pt=!0),t.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Tt(t,e,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)f=n[b],n.hasOwnProperty(b)&&f!=null&&!i.hasOwnProperty(b)&&Tt(t,e,b,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(ie(137,e));break;default:Tt(t,e,c,f,i,p)}return;default:if(im(e)){for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!==void 0&&!i.hasOwnProperty(x)&&kh(t,e,x,void 0,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f===void 0&&p===void 0||kh(t,e,d,f,i,p);return}}for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!i.hasOwnProperty(h)&&Tt(t,e,h,null,i,f);for(m in i)f=i[m],p=n[m],!i.hasOwnProperty(m)||f===p||f==null&&p==null||Tt(t,e,m,f,i,p)}function tx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&tx(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,m=l.initiatorType;d&&tx(m)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jh=null,Xh=null;function ml(t){return t.nodeType===9?t:t.ownerDocument}function nx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ES(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function TS(t,e,n,i){return n=ml(n).createElement(t),n[xn]=i,n[Wn]=e,bn(n,t,e),dn(n),n}function Wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=null;function IT(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var km=typeof setTimeout=="function"?setTimeout:void 0,zT=typeof clearTimeout=="function"?clearTimeout:void 0,ix=typeof Promise=="function"?Promise:void 0,ax=typeof requestAnimationFrame=="function"?requestAnimationFrame:km,BT=typeof queueMicrotask=="function"?queueMicrotask:typeof ix<"u"?function(t){return ix.resolve(null).then(t).catch(HT)}:km;function HT(t){setTimeout(function(){throw t})}function ms(t){return t==="head"}function sx(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),so(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")rd(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,rd(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Nl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&rd(t.ownerDocument.body);n=a}while(n);so(e)}function rx(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function AS(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var i=1;else for(var a=i=0;a<e.length;a++){var s=e[a];0<s.width&&0<s.height&&i++}i===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function CS(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function GT(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function qh(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return GT(e,n,t)}function VT(t){return t.documentElement.clientHeight}function kT(t){this.addEventListener("load",t),this.addEventListener("error",t)}function jT(t,e,n,i,a,s,r,o,l){var c=e.nodeType===9?e:e.ownerDocument;try{var d=c.startViewTransition({update:function(){var f=c.defaultView,p=f.navigation&&f.navigation.transition,_=c.fonts.status;i();var b=[];if(_==="loaded"&&(VT(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),_=b.length,t!==null)for(var x=t.suspenseyImages,h=0,g=0;g<x.length;g++){var S=x[g];if(!S.complete){var y=S.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<f.innerHeight&&y.left<f.innerWidth){if(h+=BS(S),h>$c){b.length=_;break}S=new Promise(kT.bind(S)),b.push(S)}}}if(0<b.length)return f=Promise.race([Promise.all(b),new Promise(function(M){return setTimeout(M,500)})]).then(a,a),(p?Promise.allSettled([p.finished,f]):f).then(s,s);if(a(),p)return p.finished.then(s,s);s()},types:n});c.__reactViewTransition=d;var m=[];return d.ready.then(function(){for(var f=c.documentElement.getAnimations({subtree:!0}),p=0;p<f.length;p++){var _=f[p],b=_.effect,x=b.pseudoElement;if(x!=null&&x.startsWith("::view-transition")){m.push(_),_=b.getKeyframes();for(var h=x=void 0,g=!0,S=0;S<_.length;S++){var y=_[S],M=y.width;if(x===void 0)x=M;else if(x!==M){g=!1;break}if(M=y.height,h===void 0)h=M;else if(h!==M){g=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}g&&x!==void 0&&h!==void 0&&(b.setKeyframes(_),g=getComputedStyle(b.target,b.pseudoElement),g.width!==x||g.height!==h)&&(g=_[0],g.width=x,g.height=h,g=_[_.length-1],g.width=x,g.height=h,b.setKeyframes(_))}}r()},function(f){c.__reactViewTransition===d&&(c.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&l(f)}finally{i(),a(),r()}}),d.finished.finally(function(){for(var f=0;f<m.length;f++)m[f].cancel();c.__reactViewTransition===d&&(c.__reactViewTransition=null),o()}),d}catch{return i(),a(),r(),null}}function Ns(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Ns.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:Ft({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)};Ns.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),i=[],a=0;a<n.length;a++){var s=n[a].effect;s!==null&&s.target===t&&s.pseudoElement===e&&i.push(n[a])}return i};Ns.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function wS(t){return{name:t,group:new Ns("group",t),imagePair:new Ns("image-pair",t),old:new Ns("old",t),new:new Ns("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,e,n){var i=null,a=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(RS(s,t,e,n)===-1){var r=this,o=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(t,e,n),typeof e=="function"?e.call(this,l):e.handleEvent(l)}),i!==null&&(a=r.removeEventListener.bind(r,t,e,n),i.addEventListener("abort",a,{once:!0}),a=i.removeEventListener.bind(i,"abort",a)),i=to(n),s.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:o,cleanup:a}),Xn(this._fragmentFiber.child,!1,XT,t,o,i)}this._eventListeners=s}};function XT(t,e,n,i){return tn(t).addEventListener(e,n,i),!1}oi.prototype.removeEventListener=function(t,e,n){var i=this._eventListeners;if(i!==null&&(e=RS(i,t,e,n),e!==-1)){var a=i[e];n=a.attachedListener;var s=a.cleanup;a=to(a.optionsOrUseCapture),Xn(this._fragmentFiber.child,!1,WT,t,n,a),i.splice(e,1),s!==null&&s()}};function WT(t,e,n,i){return tn(t).removeEventListener(e,n,i),!1}function to(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function ox(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function RS(t,e,n,i){if(t.length===0)return-1;i=ox(i);for(var a=0;a<t.length;a++){var s=t[a];if(s.type===e&&s.listener===n&&ox(s.optionsOrUseCapture)===i)return a}return-1}oi.prototype.dispatchEvent=function(t){var e=Ys(this._fragmentFiber);if(e===null)return!0;e=tn(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var i=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var a=0;a<n.length;a++){var s=n[a];i.addEventListener(s.type,s.attachedListener,to(s.optionsOrUseCapture))}if(e.appendChild(i),t=i.dispatchEvent(t),n)for(a=0;a<n.length;a++)s=n[a],i.removeEventListener(s.type,s.attachedListener,to(s.optionsOrUseCapture));return e.removeChild(i),t}return e.dispatchEvent(t)};oi.prototype.focus=function(t){Xn(this._fragmentFiber.child,!0,NS,t,void 0,void 0)};function NS(t,e){return t.tag===6?!1:(t=tn(t),aA(t,e))}oi.prototype.focusLast=function(t){var e=[];Xn(this._fragmentFiber.child,!0,jm,e,void 0,void 0);for(var n=e.length-1;0<=n&&!NS(e[n],t);n--);};function jm(t,e){return e.push(t),!1}oi.prototype.blur=function(){var t=Ys(this._fragmentFiber);t!==null&&(t=tn(t),t=ml(t).activeElement,t!==null&&Xn(this._fragmentFiber.child,!1,qT,t,void 0,void 0))};function qT(t,e){return t.tag===6?!1:(t=tn(t),t===e||t.contains(e)?(e.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),Xn(this._fragmentFiber.child,!1,YT,t,void 0,void 0)};function YT(t,e){return t.tag===6||(t=tn(t),e.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),Xn(this._fragmentFiber.child,!1,ZT,t,void 0,void 0);for(var n=e=0;n<Ci.length;n++){var i=Ci[n];i.fragmentInstance===this&&i.observer===t?t.unobserve(i.instance):Ci[e++]=i}Ci.length=e}};function ZT(t,e){return t.tag===6||(t=tn(t),e.unobserve(t)),!1}var Ci=[],sd=!1;function KT(t,e,n){Ci.push({fragmentInstance:t,observer:e,instance:n}),sd||(sd=!0,sA(function(){sd=!1;var i=Ci;Ci=[];for(var a=0;a<i.length;a++){var s=i[a];s.observer.unobserve(s.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return Xn(this._fragmentFiber.child,!1,QT,t,void 0,void 0),t};function QT(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=tn(t),e.push.apply(e,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var e=Ys(this._fragmentFiber);return e===null?this:tn(e).getRootNode(t)};oi.prototype.compareDocumentPosition=function(t){var e=Ys(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Xn(this._fragmentFiber.child,!1,jm,n,void 0,void 0);var i=tn(e);if(n.length===0){if(n=i,G0(this._fragmentFiber)){e:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break e}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var a=i=n.compareDocumentPosition(t);return n===t?a=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=$v(e)[1],n===null?a=Node.DOCUMENT_POSITION_PRECEDING:(t=tn(n).compareDocumentPosition(t),a=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),a|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=tn(n[0]),a=tn(n[n.length-1]);var s=G0(this._fragmentFiber)?e.parentElement:i;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=s.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=e.compareDocumentPosition(t),o=a.compareDocumentPosition(t),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&s&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,e=i&&e===t||s&&a===t||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&e===t||!s&&a===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||JT(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function JT(t,e,n,i,a){var s=Rs(a);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!s)e:{for(;s!==null;){if(s.tag===7&&(s===e||s.alternate===e)){n=!0;break e}s=s.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=a.ownerDocument,a===s||a===s.documentElement||a===s.body;e:{for(s=e,e=Ys(e);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==e&&s.alternate!==e)){s=!0;break e}s=s.return}s=!1}return s}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!s)&&!(e=s===n)&&(e=jd(n,s,V0),e===null?e=!1:(Xn(e,!0,AM,s,n),s=Sr,Sr=null,e=s!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!s)&&!(e=s===i)&&(e=jd(i,s,V0),e===null?e=!1:(Xn(e,!0,CM,s,i),s=Sr,kd=Sr=null,e=s!==null)),e):!1}function lx(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(ie(566));var e=[];Xn(this._fragmentFiber.child,!1,jm,e,void 0,void 0);var n=t!==!1;if(e.length===0){var i=$v(this._fragmentFiber);if(i=n?i[1]||i[0]||Ys(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){t=tn(i),lx(t,n);return}if(i=tn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(t);return}i.scrollIntoView(t)}}for(i=n?e.length-1:0;i!==(n?-1:e.length);){var a=e[i];a.tag===6?(a=tn(a),lx(a,n)):tn(a).scrollIntoView(t),i+=n?-1:1}};function $T(t,e){return t=tn(t),FS(t,e),!1}function FS(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function DS(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.addEventListener(a.type,a.attachedListener,to(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(s){for(var r=0,o=0;o<Ci.length;o++){var l=Ci[o];(l.fragmentInstance!==e||l.observer!==s||l.instance!==t)&&(Ci[r++]=l)}Ci.length=r,s.observe(t)}),FS(t,e))}function eA(t,e){var n=e._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];t.removeEventListener(a.type,a.attachedListener,to(a.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(s){typeof s.rootMargin=="string"?KT(e,s,t):s.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Yh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Yh(n),$u(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function tA(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Nl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function nA(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function LS(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=xi(t.nextSibling),t===null))return null;return t}function Zh(t){return t.data==="$?"||t.data==="$~"}function Xm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function iA(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Kh=null;function cx(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return xi(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function ux(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function aA(t,e){function n(){i=!0}if(t.ownerDocument.activeElement===t)return!0;var i=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return i}function sA(t){ax(function(){ax(function(e){return t(e)})})}function US(t,e,n){switch(e=ml(n),t){case"html":if(t=e.documentElement,!t)throw Error(ie(452));return t;case"head":if(t=e.head,!t)throw Error(ie(453));return t;case"body":if(t=e.body,!t)throw Error(ie(454));return t;default:throw Error(ie(451))}}function OS(t,e,n){for(var i in n){var a=n[i];n.hasOwnProperty(i)&&a!=null&&Tt(t,e,i,null,UT,a)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Vi&&(t.onclick=null),$u(t)}function rd(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);$u(t)}var vi=new Map,fx=new Set;function gl(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Ea=vt.d;vt.d={f:rA,r:oA,D:lA,C:cA,L:uA,m:fA,X:hA,S:dA,M:pA};function rA(){var t=Ea.f(),e=pf();return t||e}function oA(t){var e=ho(t);e!==null&&e.tag===5&&e.type==="form"?yy(e):Ea.r(t)}var xo=typeof document>"u"?null:document;function PS(t,e,n){var i=xo;if(i&&typeof e=="string"&&e){var a=pi(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),fx.has(a)||(fx.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),bn(e,"link",t),dn(e),i.head.appendChild(e)))}}function lA(t){Ea.D(t),PS("dns-prefetch",t,null)}function cA(t,e){Ea.C(t,e),PS("preconnect",t,e)}function uA(t,e,n){Ea.L(t,e,n);var i=xo;if(i&&t&&e){var a='link[rel="preload"][as="'+pi(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+pi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+pi(n.imageSizes)+'"]')):a+='[href="'+pi(t)+'"]';var s=a;switch(e){case"style":s=no(t);break;case"script":s=vo(t)}if(!(vi.has(s)||(t=Ft({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),vi.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Pl(s))||e==="script"&&i.querySelector(Il(s))))){var r=i.createElement("link");bn(r,"link",t),e==="style"&&(r[hu]=!0,r.onload=r.onerror=function(){d_(r)}),dn(r),i.head.appendChild(r)}}}function fA(t,e){Ea.m(t,e);var n=xo;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+pi(i)+'"][href="'+pi(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=vo(t)}if(!vi.has(s)&&(t=Ft({rel:"modulepreload",href:t},e),vi.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Il(s)))return}i=n.createElement("link"),bn(i,"link",t),dn(i),n.head.appendChild(i)}}}function dA(t,e,n){Ea.S(t,e,n);var i=xo;if(i&&t){var a=Or(i).hoistableStyles,s=no(t);e=e||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Pl(s)))o.loading=5;else{t=Ft({rel:"stylesheet",href:t,"data-precedence":e},n),(n=vi.get(s))&&Wm(t,n);var l=r=i.createElement("link");dn(l),bn(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Qc(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function hA(t,e){Ea.X(t,e);var n=xo;if(n&&t){var i=Or(n).hoistableScripts,a=vo(t),s=i.get(a);s||(s=n.querySelector(Il(a)),s||(t=Ft({src:t,async:!0},e),(e=vi.get(a))&&qm(t,e),s=n.createElement("script"),dn(s),bn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function pA(t,e){Ea.M(t,e);var n=xo;if(n&&t){var i=Or(n).hoistableScripts,a=vo(t),s=i.get(a);s||(s=n.querySelector(Il(a)),s||(t=Ft({src:t,async:!0,type:"module"},e),(e=vi.get(a))&&qm(t,e),s=n.createElement("script"),dn(s),bn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function dx(t,e,n,i){var a=(a=Za.current)?gl(a):null;if(!a)throw Error(ie(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=no(n.href),e=Or(a).hoistableStyles,i=e.get(n),i||(i={type:"style",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=no(n.href);var s=Or(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(Pl(t)))?s._p||(r.instance=s,r.state.loading=5):(s=vi.get(t),s||(s={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vi.set(t,s)),mA(a,t,s,r.state))),e&&i===null)throw Error(ie(528,""));return r}if(e&&i!==null)throw Error(ie(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=vo(n),e=Or(a).hoistableScripts,i=e.get(n),i||(i={type:"script",instance:null,count:0,state:null},e.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ie(444,t))}}function no(t){return'href="'+pi(t)+'"'}function Pl(t){return'link[rel="stylesheet"]['+t+"]"}function IS(t){return Ft({},t,{"data-precedence":t.precedence,precedence:null})}function mA(t,e,n,i){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[hu]!==!0){i.loading=1;return}}else e=t.createElement("link"),e[hu]=!0,e.onload=e.onerror=d_.bind(null,e),bn(e,"link",n),dn(e),t.head.appendChild(e);i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2})}function vo(t){return'[src="'+pi(t)+'"]'}function Il(t){return"script[async]"+t}function hx(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+pi(n.href)+'"]');if(i)return e.instance=i,dn(i),i;var a=Ft({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),dn(i),bn(i,"style",a),Qc(i,n.precedence,t),e.instance=i;case"stylesheet":a=no(n.href);var s=t.querySelector(Pl(a));if(s)return e.state.loading|=4,e.instance=s,dn(s),s;i=IS(n),(a=vi.get(a))&&Wm(i,a),s=(t.ownerDocument||t).createElement("link"),dn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),bn(s,"link",i),e.state.loading|=4,Qc(s,n.precedence,t),e.instance=s;case"script":return s=vo(n.src),(a=t.querySelector(Il(s)))?(e.instance=a,dn(a),a):(i=n,(a=vi.get(s))&&(i=Ft({},n),qm(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),dn(a),bn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ie(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Qc(i,n.precedence,t));return e.instance}function Qc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Wm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function qm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Jc=null;function px(t,e,n){if(Jc===null){var i=new Map,a=Jc=new Map;a.set(n,i)}else a=Jc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Nl]||s[xn]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Qh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function gA(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function mx(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function zS(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function BS(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function gx(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=BS(e),t.suspenseyImages.push(e)),t=_A.bind(t),e.decode().then(t,t))}function xA(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=no(i.href),s=e.querySelector(Pl(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=xl.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,dn(s);return}s=e.ownerDocument||e,i=IS(i),(a=vi.get(a))&&Wm(i,a),s=s.createElement("link"),dn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),bn(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=xl.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var $c=0;function vA(t,e){return t.stylesheets&&t.count===0&&eu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&eu(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&$c===0&&($c=62500*PT());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&eu(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>$c?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function HS(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)eu(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function xl(){this.count--,HS(this)}function _A(){this.imgCount--,HS(this)}var Pu=null;function eu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pu=new Map,e.forEach(yA,t),Pu=null,xl.call(t))}function yA(t,e){if(!(e.state.loading&4)){var n=Pu.get(t);if(n)var i=n.get(null);else{n=new Map,Pu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=xl.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var io={$$typeof:Gi,Provider:null,Consumer:null,_currentValue:Fs,_currentValue2:Fs,_threadCount:0};function SA(t,e,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ff(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ff(0),this.hiddenUpdates=Ff(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function GS(t,e,n,i,a,s,r,o,l,c,d,m){return t=new SA(t,e,n,r,l,c,d,m,o),e=1,s===!0&&(e|=24),s=Gn(3,null,null,e),t.current=s,s.stateNode=t,e=hm(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},gm(s),t}function VS(t){return t?(t=Rr,t):Rr}function kS(t,e,n,i,a,s){a=VS(a),i.context===null?i.context=a:i.pendingContext=a,i=Qa(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Ja(t,i,e),n!==null&&(kn(n,t,e),Yo(n,t,e))}function xx(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ym(t,e){xx(t,e),(t=t.alternate)&&xx(t,e)}function jS(t){if(t.tag===13||t.tag===31){var e=Qs(t,67108864);e!==null&&kn(e,t,67108864),Ym(t,67108864)}}function vx(t){if(t.tag===13||t.tag===31){var e=si();e=tm(e);var n=Qs(t,e);n!==null&&kn(n,t,e),Ym(t,e)}}var ao=!0;function bA(t,e,n,i){var a=He.T;He.T=null;var s=vt.p;try{vt.p=2,Zm(t,e,n,i)}finally{vt.p=s,He.T=a}}function MA(t,e,n,i){var a=He.T;He.T=null;var s=vt.p;try{vt.p=8,Zm(t,e,n,i)}finally{vt.p=s,He.T=a}}function Zm(t,e,n,i){if(ao){var a=Jh(i);if(a===null)id(t,e,i,Iu,n),_x(t,i);else if(TA(a,t,e,n,i))i.stopPropagation();else if(_x(t,i),e&4&&-1<EA.indexOf(t)){for(;a!==null;){var s=ho(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=As(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ai(r);o.entanglements[1]|=l,r&=~l}ea(s),!(xt&6)&&(Fu=ni()+500,Ol(0))}}break;case 31:case 13:o=Qs(s,2),o!==null&&kn(o,s,2),pf(),Ym(s,2)}if(s=Jh(i),s===null&&id(t,e,i,Iu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else id(t,e,i,null,n)}}function Jh(t){return t=am(t),Km(t)}var Iu=null;function Km(t){if(Iu=null,t=Rs(t),t!==null){var e=Al(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Kv(e),t!==null)return t;t=null}else if(n===31){if(t=Qv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Iu=t,null}function XS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(PM()){case i_:return 2;case a_:return 8;case du:case IM:return 32;case s_:return 268435456;default:return 32}default:return 32}}var $h=!1,ns=null,is=null,as=null,vl=new Map,_l=new Map,Ba=[],EA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _x(t,e){switch(t){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":vl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(e.pointerId)}}function Co(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=ho(e),e!==null&&jS(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function TA(t,e,n,i,a){switch(e){case"focusin":return ns=Co(ns,t,e,n,i,a),!0;case"dragenter":return is=Co(is,t,e,n,i,a),!0;case"mouseover":return as=Co(as,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return vl.set(s,Co(vl.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,_l.set(s,Co(_l.get(s)||null,t,e,n,i,a)),!0}return!1}function WS(t){var e=Rs(t.target);if(e!==null){var n=Al(e);if(n!==null){if(e=n.tag,e===13){if(e=Kv(n),e!==null){t.blockedOn=e,W0(t.priority,function(){vx(n)});return}}else if(e===31){if(e=Qv(n),e!==null){t.blockedOn=e,W0(t.priority,function(){vx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nh=i,n.target.dispatchEvent(i),nh=null}else return e=ho(n),e!==null&&jS(e),t.blockedOn=n,!1;e.shift()}return!0}function yx(t,e,n){tu(t)&&n.delete(e)}function AA(){$h=!1,ns!==null&&tu(ns)&&(ns=null),is!==null&&tu(is)&&(is=null),as!==null&&tu(as)&&(as=null),vl.forEach(yx),_l.forEach(yx)}function oc(t,e){t.blockedOn===e&&(t.blockedOn=null,$h||($h=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,AA)))}var lc=null;function Sx(t){lc!==t&&(lc=t,an.unstable_scheduleCallback(an.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Km(i||n)===null)continue;break}var s=ho(n);s!==null&&(t.splice(e,3),e-=3,vh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function so(t){function e(l){return oc(l,t)}ns!==null&&oc(ns,t),is!==null&&oc(is,t),as!==null&&oc(as,t),vl.forEach(e),_l.forEach(e);for(var n=0;n<Ba.length;n++){var i=Ba[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ba.length&&(n=Ba[0],n.blockedOn===null);)WS(n),n.blockedOn===null&&Ba.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Wn]||null;if(typeof s=="function")r||Sx(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Wn]||null)o=r.formAction;else if(Km(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Sx(n)}}}function qS(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Qm(t){this._internalRoot=t}xf.prototype.render=Qm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));var n=e.current,i=si();kS(n,i,t,e,null,null)};xf.prototype.unmount=Qm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kS(t.current,2,null,t,null,null),pf(),e[fo]=null}};function xf(t){this._internalRoot=t}xf.prototype.unstable_scheduleHydration=function(t){if(t){var e=f_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ba.length&&e!==0&&e<Ba[n].priority;n++);Ba.splice(n,0,t),n===0&&WS(t)}};var bx=Yv.version;if(bx!=="19.3.1")throw Error(ie(527,bx,"19.3.1"));vt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=TM(e),t=t!==null?Jv(t):null,t=t===null?null:t.stateNode,t};var CA={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:He,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Cl=cc.inject(CA),ii=cc}catch{}}Ku.createRoot=function(t,e){if(!Zv(t))throw Error(ie(299));var n=!1,i="",a=wy,s=Ry,r=Ny;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=GS(t,1,!1,null,null,n,i,null,a,s,r,qS),t[fo]=e.current,Vm(t),new Qm(e)};Ku.hydrateRoot=function(t,e,n){if(!Zv(t))throw Error(ie(299));var i=!1,a="",s=wy,r=Ry,o=Ny,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=GS(t,1,!0,e,n??null,i,a,l,s,r,o,qS),e.context=VS(null),n=e.current,i=si(),i=tm(i),a=Qa(i),a.callback=null,Ja(n,a,i),n=i,e.current.lanes=n,Rl(e,n),ea(e),t[fo]=e.current,Vm(t),new xf(e)};Ku.version="19.3.1";function YS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YS)}catch(t){console.error(t)}}YS(),Vv.exports=Ku;var wA=Vv.exports;/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=t=>(t.match(/\d+[xX]\d+|[A-Z]?[a-z]+|[A-Z]|\d+/g)??[]).join("-").toLowerCase();/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function NA(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:RA(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=t=>{const e=FA(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=(...t)=>{const e=new Set;for(const n of t)if(typeof n=="string")for(const i of n.split(/\s+/))i&&e.add(i);return[...e].join(" ")};/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function od(t){return t!=null}function LA(t,e={}){var f,p;const n=e.attributeNames??{},i=_=>n[_]??_,a=t.size??t.width??Ss.width,s=t.size??t.height??Ss.height,r=((f=t.aliases)==null?void 0:f.filter(_=>typeof _=="string"&&_.trim()!=="").map(_=>`lucide-${_}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...r],l=((p=e.className)==null?void 0:p.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?ep(...l):ep("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??Ss["stroke-width"])*Number(t.size??t.width??Ss.width)/Number(e.size??e.width??Ss.width):e.strokeWidth??Ss["stroke-width"];return["svg",{...Object.entries(Ss).reduce((_,[b,x])=>(_[i(b)]=x,_),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&od(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&od(e.width)&&{[i("width")]:e.width},..."height"in e&&od(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:d,...c&&{[i("class")]:c},[i("viewBox")]:`0 0 ${a} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(_=>{const[b,x,h]=_,g=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...x}:x;return h?[b,g,h]:[b,g]})]}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function UA(t,e={}){return LA(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=t=>{if(t==null||typeof t!="object")return!1;for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&(e.startsWith("aria-")||e==="role"||e==="title")&&t[e]!=null)return!0;return!1},PA=$e.createContext({}),IA=()=>$e.useContext(PA),zA=$e.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:a,absoluteStrokeWidth:s,nonScalingStroke:r,className:o="",children:l,iconNode:c=[],icon:d={node:c,aliases:[],size:24},...m},f)=>{const{size:p=24,strokeWidth:_=2,absoluteStrokeWidth:b=!1,nonScalingStroke:x=!1,color:h="currentColor",className:g=""}=IA()??{},S=!!l||OA(m),[y,M,C=[]]=UA(d,{color:t??h,width:n??e??p,height:i??e??p,strokeWidth:a??_,absoluteStrokeWidth:s??b,nonScalingStroke:r??x,className:ep(g,o),hasA11yProp:S,attributes:m});return $e.createElement(y,{ref:f,...M},[...C.map(([v,E])=>$e.createElement(v,E)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ge(t,e=[],n=[]){const i=typeof t=="string"?NA(t,e,n):t,a=$e.forwardRef(({className:s,...r},o)=>$e.createElement(zA,{ref:o,icon:i,className:s,...r}));return i.name&&(a.displayName=DA(i.name)),a}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};ZS.node;const BA=Ge(ZS);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};KS.node;const HA=Ge(KS);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};QS.node;const Jm=Ge(QS);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};JS.node;const zu=Ge(JS);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};$S.node;const GA=Ge($S);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};e1.node;const Mx=Ge(e1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1={name:"brain",size:24,node:[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 01-3-4 4.17 4.17 0 01-3 4",key:"5nuw1p"}],["path",{d:"M17.707 6.294A3 3 0 1012 5a3 3 0 10-5.707 1.294",key:"18ldcf"}],["path",{d:"M17.996 5.125a4 4 0 012.526 5.77",key:"1sdu8q"}],["path",{d:"M18 18a4 4 0 002-7.465",key:"7xqqvr"}],["path",{d:"M19.967 17.482a4 4 0 11-7.967.517 4 4 0 11-7.967-.517",key:"t46ysz"}],["path",{d:"M6 18a4 4 0 01-2-7.465",key:"1y2m15"}],["path",{d:"M6.004 5.125a4 4 0 00-2.526 5.77",key:"3cw1ss"}]]};t1.node;const VA=Ge(t1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};n1.node;const kA=Ge(n1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};i1.node;const jA=Ge(i1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};a1.node;const XA=Ge(a1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};s1.node;const $m=Ge(s1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};r1.node;const ir=Ge(r1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};o1.node;const WA=Ge(o1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};l1.node;const c1=Ge(l1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};u1.node;const qA=Ge(u1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};f1.node;const YA=Ge(f1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};d1.node;const h1=Ge(d1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};p1.node;const ZA=Ge(p1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};m1.node;const KA=Ge(m1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};g1.node;const QA=Ge(g1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1={name:"fast-forward",size:24,node:[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]]};x1.node;const JA=Ge(x1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};v1.node;const $A=Ge(v1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};_1.node;const e2=Ge(_1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};y1.node;const t2=Ge(y1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1={name:"heart-handshake",size:24,node:[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]]};S1.node;const n2=Ge(S1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};b1.node;const i2=Ge(b1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};M1.node;const a2=Ge(M1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};E1.node;const tp=Ge(E1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};T1.node;const s2=Ge(T1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};A1.node;const r2=Ge(A1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};C1.node;const yl=Ge(C1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1={name:"network",size:24,node:[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]};w1.node;const Ex=Ge(w1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};R1.node;const N1=Ge(R1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1={name:"panels-top-left",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],aliases:["layout"]};F1.node;const o2=Ge(F1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};D1.node;const l2=Ge(D1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};L1.node;const c2=Ge(L1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};U1.node;const O1=Ge(U1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};P1.node;const I1=Ge(P1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};z1.node;const u2=Ge(z1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};B1.node;const f2=Ge(B1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};H1.node;const Ni=Ge(H1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1={name:"terminal",size:24,node:[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]]};G1.node;const d2=Ge(G1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};V1.node;const Tx=Ge(V1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};k1.node;const h2=Ge(k1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};j1.node;const p2=Ge(j1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1={name:"workflow",size:24,node:[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]};X1.node;const Ax=Ge(X1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};W1.node;const vf=Ge(W1);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};q1.node;const Y1=Ge(q1);class m2{constructor(){Tf(this,"ctx",null);Tf(this,"enabled",!1)}initCtx(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggle(){return this.enabled=!this.enabled,this.enabled&&(this.initCtx(),this.playChime()),this.enabled}playHover(){if(this.enabled&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(880,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1320,this.ctx.currentTime+.04),n.gain.setValueAtTime(.015,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.04),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playClick(){if(this.enabled&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(440,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1760,this.ctx.currentTime+.08),n.gain.setValueAtTime(.04,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.08),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}playChime(){if(this.enabled&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,a)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=i,r.gain.setValueAtTime(.03,e+a*.06),r.gain.exponentialRampToValueAtTime(1e-4,e+a*.06+.35),s.connect(r),r.connect(this.ctx.destination),s.start(e+a*.06),s.stop(e+a*.06+.35)})}catch{}}playWhoosh(){if(this.enabled&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(120,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(600,this.ctx.currentTime+.15),e.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.3),n.gain.setValueAtTime(.03,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.3),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.3)}catch{}}}const Pe=new m2;function g2({onOpenContact:t}){const[e,n]=$e.useState(!1),[i,a]=$e.useState(!Pe.enabled),[s,r]=$e.useState(!1);$e.useEffect(()=>{const d=()=>{n(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const o=()=>{const d=Pe.toggle();a(!d)},l=[{label:"THE PROBLEM",href:"#problem",tag:"01"},{label:"SOLUTIONS",href:"#solutions",tag:"02"},{label:"SHOWCASE",href:"#showcase",tag:"03"},{label:"PROCESS",href:"#process",tag:"04"},{label:"WHY US",href:"#why-us",tag:"05"},{label:"CONTACT",href:"#contact",tag:"06"}],c=(d,m)=>{d.preventDefault(),Pe.playClick(),r(!1);const f=document.querySelector(m);f&&f.scrollIntoView({behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsx("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-[#050817]/85 backdrop-blur-md border-b border-[#00C8FF]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]":"bg-transparent py-5 border-b border-white/5"}`,children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[u.jsxs("a",{href:"#",onClick:d=>{d.preventDefault(),Pe.playClick(),window.scrollTo({top:0,behavior:"smooth"})},onMouseEnter:()=>Pe.playHover(),className:"flex items-center gap-3 group",children:[u.jsxs("div",{className:"relative w-10 h-10 flex items-center justify-center",children:[u.jsx("div",{className:"absolute inset-0 bg-[#087BFF]/20 rounded-lg rotate-45 border border-[#00C8FF] group-hover:rotate-90 group-hover:border-[#FFC229] transition-transform duration-500 shadow-[0_0_15px_rgba(0,200,255,0.4)]"}),u.jsx("div",{className:"relative font-mono font-black text-sm tracking-tighter text-[#00C8FF] group-hover:text-[#FFC229] transition-colors",children:"GTK"})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"font-space font-extrabold text-lg sm:text-xl tracking-wider text-[#F5F7FF] group-hover:text-[#00C8FF] transition-colors",children:"GEN TECH KA"}),u.jsx("span",{className:"hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[#00C8FF]/10 text-[#00C8FF] border border-[#00C8FF]/30 rounded",children:"2.0"})]}),u.jsx("p",{className:"text-[10px] font-mono tracking-widest text-[#9CA6C5] uppercase hidden md:block",children:"Digital Reality Studio"})]})]}),u.jsx("nav",{className:"hidden lg:flex items-center gap-1 xl:gap-2",children:l.map(d=>u.jsxs("a",{href:d.href,onClick:m=>c(m,d.href),onMouseEnter:()=>Pe.playHover(),className:"relative px-3 py-1.5 text-xs font-mono font-medium tracking-wider text-[#9CA6C5] hover:text-[#00C8FF] hover:bg-[#00C8FF]/5 rounded transition-all duration-200 group",children:[u.jsx("span",{className:"text-[10px] text-[#FFC229] opacity-60 group-hover:opacity-100 mr-1.5",children:d.tag}),d.label]},d.href))}),u.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[u.jsx("button",{onClick:o,onMouseEnter:()=>Pe.playHover(),title:i?"Turn Sound FX On":"Mute Sound FX",className:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-all duration-200 ${i?"border-white/10 bg-white/5 text-[#9CA6C5] hover:border-white/30":"border-[#00C8FF]/60 bg-[#00C8FF]/10 text-[#00C8FF] shadow-[0_0_10px_rgba(0,200,255,0.3)]"}`,children:i?u.jsxs(u.Fragment,{children:[u.jsx(p2,{className:"w-3.5 h-3.5 opacity-60"}),u.jsx("span",{className:"hidden sm:inline text-[10px] uppercase tracking-wider",children:"Audio Muted"})]}):u.jsxs(u.Fragment,{children:[u.jsx(h2,{className:"w-3.5 h-3.5 animate-pulse"}),u.jsx("span",{className:"hidden sm:inline text-[10px] uppercase tracking-wider",children:"Audio On"})]})}),u.jsxs("a",{href:"#contact",onClick:d=>{c(d,"#contact"),t&&t()},onMouseEnter:()=>Pe.playHover(),className:"relative inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-space font-bold uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] to-[#087BFF] hover:from-[#FFC229] hover:to-[#FFA000] rounded transition-all duration-300 shadow-[0_0_20px_rgba(0,200,255,0.4)] hover:shadow-[0_0_25px_rgba(255,194,41,0.5)] transform hover:-translate-y-0.5 active:translate-y-0",children:[u.jsx("span",{children:"LET'S BUILD"}),u.jsx(zu,{className:"w-3.5 h-3.5"})]}),u.jsx("button",{onClick:()=>{Pe.playClick(),r(!s)},className:"lg:hidden p-2 text-[#9CA6C5] hover:text-[#00C8FF] border border-white/10 rounded bg-[#0A1025]","aria-label":"Toggle Navigation Menu",children:s?u.jsx(vf,{className:"w-5 h-5"}):u.jsx(r2,{className:"w-5 h-5"})})]})]})}),s&&u.jsxs("div",{className:"fixed inset-0 z-40 bg-[#050817]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2 pb-4 border-b border-white/10 text-xs font-mono text-[#00C8FF]",children:[u.jsx(d2,{className:"w-4 h-4"}),u.jsx("span",{children:"NAVIGATION TERMINAL"})]}),u.jsx("div",{className:"grid gap-2",children:l.map(d=>u.jsxs("a",{href:d.href,onClick:m=>c(m,d.href),className:"flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#0A1025]/60 hover:border-[#00C8FF]/50 hover:bg-[#00C8FF]/10 transition-colors",children:[u.jsx("span",{className:"font-space font-bold text-base text-[#F5F7FF] tracking-wider",children:d.label}),u.jsxs("span",{className:"font-mono text-xs text-[#FFC229]",children:["// ",d.tag]})]},d.href))})]}),u.jsxs("div",{className:"pt-6 border-t border-white/10 space-y-3",children:[u.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-[#9CA6C5]",children:[u.jsx("span",{children:"STATUS: SYSTEM OPERATIONAL"}),u.jsx("span",{className:"text-[#00C8FF]",children:"KARNATAKA, IN"})]}),u.jsxs("a",{href:"#contact",onClick:d=>c(d,"#contact"),className:"w-full flex items-center justify-center gap-2 py-3 bg-[#00C8FF] text-[#050817] font-space font-extrabold text-sm uppercase rounded shadow-[0_0_20px_rgba(0,200,255,0.4)]",children:[u.jsx("span",{children:"START YOUR PROJECT"}),u.jsx(zu,{className:"w-4 h-4"})]})]})]})]})}function x2({onExplore:t,onContact:e}){const n=i=>{Pe.playClick();const a=document.querySelector(i);a&&a.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{className:"relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 sm:pb-16 z-10 pointer-events-none",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 pointer-events-auto",children:u.jsxs("div",{className:"flex flex-col md:flex-row md:items-start justify-between gap-6",children:[u.jsxs("div",{className:"space-y-2 max-w-2xl",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#050817]/80 backdrop-blur-md mb-2 shadow-[0_0_20px_rgba(0,200,255,0.2)]",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse"}),u.jsx("span",{className:"text-[10px] font-mono tracking-widest text-[#00C8FF] uppercase",children:"NEURAL SILICON // AXION-CLASS ARCHITECTURE"}),u.jsx("span",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"|"}),u.jsxs("span",{className:"text-[10px] font-mono text-[#FFC229] flex items-center gap-1",children:[u.jsx(Ni,{className:"w-3 h-3"})," GEN TECH KA"]})]}),u.jsxs("h1",{className:"text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-[0.98]",children:["at the speed of ",u.jsx("br",{}),u.jsx("span",{className:"bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-clip-text text-transparent glow-neon",children:"compute."})]}),u.jsx("p",{className:"text-base sm:text-xl font-sora font-semibold text-[#FFC229] pt-2",children:"“We Turn Ideas Into Digital Reality.”"})]}),u.jsxs("div",{className:"max-w-xs md:text-right space-y-2 self-start md:self-auto bg-[#050817]/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#00C8FF] uppercase tracking-wider",children:"GEN TECH KA CORE FABRIC"}),u.jsx("p",{className:"text-xs font-inter text-[#9CA6C5] leading-relaxed",children:"We engineer ultra-fast 3D digital experiences, web apps, and autonomous AI systems built on bespoke modern architectures."}),u.jsx("div",{className:"text-[10px] font-mono text-[#FFC229]",children:"Karnataka, India 🇮🇳 // 60 FPS"})]})]})}),u.jsx("div",{className:"my-auto py-12 flex items-center justify-center",children:u.jsx("div",{className:"pointer-events-none text-center space-y-1 opacity-70",children:u.jsx("div",{className:"text-[9px] font-mono tracking-[0.3em] text-[#00C8FF] uppercase",children:"[ 3D NEURAL DATA PASSING // SCROLL TO INTERACT ]"})})}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto",children:u.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-white/10 bg-[#050817]/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl border",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-3 w-full md:w-auto",children:[u.jsxs("button",{onClick:()=>{n("#contact"),e&&e()},onMouseEnter:()=>Pe.playHover(),className:"px-6 py-3.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#00C8FF] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_25px_rgba(0,200,255,0.4)] hover:shadow-[0_0_35px_rgba(255,194,41,0.6)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer",children:[u.jsx("span",{children:"LET'S BUILD SOMETHING"}),u.jsx(Y1,{className:"w-3.5 h-3.5 text-[#050817]"})]}),u.jsxs("button",{onClick:()=>{n("#problem"),t&&t()},onMouseEnter:()=>Pe.playHover(),className:"px-5 py-3.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#F5F7FF] border border-[#00C8FF]/40 bg-[#0A1025]/80 hover:bg-[#00C8FF]/10 hover:border-[#00C8FF] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer",children:[u.jsx("span",{children:"EXPLORE OUR WORLD"}),u.jsx(HA,{className:"w-3.5 h-3.5 text-[#00C8FF]"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto",children:[u.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-[#050817] border border-white/5 text-left",children:[u.jsxs("div",{className:"text-[9px] font-mono text-[#00C8FF] flex items-center gap-1",children:[u.jsx(h1,{className:"w-3 h-3"})," ARCH"]}),u.jsx("div",{className:"text-[11px] font-space font-bold text-[#F5F7FF]",children:"Axion Silicon"})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-[#050817] border border-white/5 text-left",children:[u.jsxs("div",{className:"text-[9px] font-mono text-[#FFC229] flex items-center gap-1",children:[u.jsx(BA,{className:"w-3 h-3"})," BUS"]}),u.jsx("div",{className:"text-[11px] font-space font-bold text-[#F5F7FF]",children:"Wavefront Pulse"})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-[#050817] border border-white/5 text-left",children:[u.jsxs("div",{className:"text-[9px] font-mono text-[#8B2CFF] flex items-center gap-1",children:[u.jsx(i2,{className:"w-3 h-3"})," FLOW"]}),u.jsx("div",{className:"text-[11px] font-space font-bold text-[#F5F7FF]",children:"3D Scroll Story"})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-[#050817] border border-white/5 text-left",children:[u.jsxs("div",{className:"text-[9px] font-mono text-[#00C8FF] flex items-center gap-1",children:[u.jsx(I1,{className:"w-3 h-3"})," PERF"]}),u.jsx("div",{className:"text-[11px] font-space font-bold text-[#F5F7FF]",children:"Hardware 60 FPS"})]})]})]})})]})}function v2(){const[t,e]=$e.useState({}),[n,i]=$e.useState(!1),a=$e.useRef(null),s=(l,c)=>{const m=l.currentTarget.getBoundingClientRect(),f=l.clientX-m.left,p=l.clientY-m.top,_=m.width/2,b=m.height/2,x=(p-b)/b*-12,h=(f-_)/_*12;e(g=>({...g,[c]:{rotateX:x,rotateY:h}}))},r=l=>{e(c=>({...c,[l]:{rotateX:0,rotateY:0}}))},o=[{id:1,num:"01",tag:"VISIBILITY DEFICIT",title:"YOUR BUSINESS IS INVISIBLE ONLINE.",desc:"Lost in a sea of generic WordPress themes and boring corporate templates. Visitors bounce within 3 seconds because your site fails to captivate, communicate authority, or inspire action.",icon:KA,stat:"78% of visitors leave due to uninspiring digital presence.",symptom:"Zero brand recall & low conversion rates"},{id:2,num:"02",tag:"EXECUTION BOTTLENECK",title:"YOUR IDEAS ARE STUCK WITHOUT TECHNOLOGY.",desc:"You have ambitious visions, groundbreaking service concepts, or innovative product roadmaps, but you lack the engineering firepower to build high-performance 3D apps and automated systems.",icon:Tx,stat:"Vision without execution remains purely digital dust.",symptom:"Stalled product launches & lost momentum"},{id:3,num:"03",tag:"SPEED GAP",title:"YOUR COMPETITORS ARE MOVING FASTER.",desc:"Modern market leaders are adopting AI workflows, 3D interactive experiences, and automated customer engines while traditional businesses drown in manual repetitive tasks.",icon:JA,stat:"Speed to market separates market leaders from obsolete brands.",symptom:"Shrinking market share & obsolete pipelines"}];return u.jsxs("section",{id:"problem",ref:a,className:"relative w-full py-24 sm:py-32 overflow-hidden bg-[#050817]/75 backdrop-blur-sm border-t border-white/5",children:[u.jsx("div",{className:"absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none"}),u.jsx("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${n?"bg-[#087BFF]/25":"bg-[#FF3366]/15"}`}),u.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 sm:mb-20",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FF3366]/40 bg-[#FF3366]/10 text-[#FF3366] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(255,51,102,0.2)]",children:[u.jsx($A,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"THE REALITY CHECK"})]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4",children:["EVERY BIG IDEA STARTS WITH A"," ",u.jsx("span",{className:"text-[#FF3366] glow-box-problem underline decoration-wavy decoration-[#FF3366]/50",children:"PROBLEM."})]}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto",children:"Before we talk about cutting-edge code or 3D visuals, we confront the raw digital friction holding your venture back."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 perspective-1000",children:o.map(l=>{const c=l.icon,d=t[l.id]||{rotateX:0,rotateY:0};return u.jsxs("div",{onMouseMove:m=>s(m,l.id),onMouseLeave:()=>r(l.id),onMouseEnter:()=>Pe.playHover(),style:{transform:`perspective(1000px) rotateX(${d.rotateX}deg) rotateY(${d.rotateY}deg)`,transition:"transform 0.15s ease-out, box-shadow 0.3s ease"},className:"relative rounded-2xl p-6 sm:p-8 bg-[#0A1025]/90 border border-[#FF3366]/30 hover:border-[#FF3366] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(255,51,102,0.3)] transition-all duration-300 flex flex-col justify-between group overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF3366] to-transparent opacity-80"}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("span",{className:"font-mono text-xs font-bold tracking-widest text-[#FF3366] px-2.5 py-1 rounded bg-[#FF3366]/10 border border-[#FF3366]/20",children:["PROBLEM // ",l.num]}),u.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#FF3366]/10 border border-[#FF3366]/40 flex items-center justify-center text-[#FF3366] group-hover:scale-110 group-hover:bg-[#FF3366] group-hover:text-[#050817] transition-all duration-300",children:u.jsx(c,{className:"w-5 h-5"})})]}),u.jsx("span",{className:"text-[10px] font-mono tracking-widest text-[#9CA6C5] uppercase block mb-1",children:l.tag}),u.jsx("h3",{className:"text-xl sm:text-2xl font-space font-extrabold text-[#F5F7FF] tracking-tight group-hover:text-[#FF3366] transition-colors leading-snug mb-3",children:l.title}),u.jsx("p",{className:"text-xs sm:text-sm font-inter text-[#9CA6C5] leading-relaxed mb-6",children:l.desc})]}),u.jsxs("div",{className:"pt-4 border-t border-white/5 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono text-[#FF3366]/90",children:[u.jsx(Tx,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Symptom: ",l.symptom]})]}),u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:l.stat})]}),u.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 border-t border-r border-[#FF3366]/50"}),u.jsx("div",{className:"absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#FF3366]/50"})]},l.id)})}),u.jsxs("div",{className:"relative rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 bg-gradient-to-b from-[#0A1025] via-[#081232] to-[#050817] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden",children:[u.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-[#00C8FF]/10 rounded-full blur-[90px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 bg-[#5715A8]/20 rounded-full blur-[90px] pointer-events-none"}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[u.jsxs("div",{className:"lg:col-span-7 space-y-6 text-left",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono uppercase tracking-widest",children:[u.jsx(Ni,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"THE PARADIGM SHIFT"})]}),u.jsxs("h3",{className:"text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-[#F5F7FF] leading-tight",children:["WHAT IF TECHNOLOGY COULD"," ",u.jsx("span",{className:"text-[#00C8FF] glow-neon",children:"CHANGE EVERYTHING?"})]}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] leading-relaxed",children:"Imagine turning every digital touchpoint into an unfair competitive advantage. From immersive 3D architectures that mesmerize your clients to autonomous systems that do the heavy lifting 24/7."}),u.jsxs("div",{className:"flex flex-wrap gap-4 pt-2",children:[u.jsxs("button",{onClick:()=>{Pe.playClick(),i(!n);const l=document.querySelector("#solutions");l&&l.scrollIntoView({behavior:"smooth"})},onMouseEnter:()=>Pe.playHover(),className:"px-6 py-3.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] to-[#087BFF] hover:from-[#FFC229] hover:to-[#FFA000] transition-all shadow-[0_0_25px_rgba(0,200,255,0.4)] flex items-center gap-2 group cursor-pointer",children:[u.jsx("span",{children:"SEE THE SOLUTIONS"}),u.jsx(Jm,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]}),u.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-[#050817]/60 text-xs font-mono text-[#9CA6C5]",children:[u.jsx(Y1,{className:"w-3.5 h-3.5 text-[#FFC229]"}),u.jsx("span",{children:"Transforming Problems Into Digital Power"})]})]})]}),u.jsx("div",{className:"lg:col-span-5 relative",children:u.jsxs("div",{className:"relative rounded-2xl overflow-hidden border border-[#00C8FF]/40 shadow-[0_0_35px_rgba(0,200,255,0.25)] group",children:[u.jsx("img",{src:"/images/cyber-core-platform.jpg",alt:"GEN TECH KA Cyber Core Platform",className:"w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-transparent opacity-80"}),u.jsxs("div",{className:"absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#050817]/90 backdrop-blur-md border border-[#00C8FF]/30 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#00C8FF] uppercase tracking-wider",children:"GEN TECH KA LABS"}),u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"Exposed Truths → Engineered Solutions"})]}),u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#00C8FF] animate-ping"})]})]})})]})]})]})]})}function _2({onSelectService:t}){const[e,n]=$e.useState(0),i=[{id:"web-dev",num:"01",title:"WEBSITE DEVELOPMENT",subtitle:"Spatial 3D & High-Conversion Digital Flagships",desc:"From stunning landing pages to complete business websites, we turn your brand into a powerful digital experience.",icon:t2,color:"#00C8FF",deliverables:["Custom Three.js & WebGL 3D Experiences","Sub-second Core Web Vitals & Next.js/Vite Architecture","Tailored CMS & Headless Content Workflows","Mobile-First Responsive Cinematic Layouts"],techStack:["Three.js","React","Tailwind CSS","TypeScript","WebGL","GSAP"],interactiveType:"browser"},{id:"web-app",num:"02",title:"WEB APPLICATIONS",subtitle:"Scalable Enterprise & SaaS Ecosystems",desc:"Powerful, scalable web applications designed to solve real business problems with secure backend architecture.",icon:o2,color:"#087BFF",deliverables:["Full-Stack Cloud Architecture & Microservices","Real-time WebSockets & Collaborative Dashboards","Role-Based Access Control (RBAC) & OAuth2","High-Throughput Database Optimization (PostgreSQL/Redis)"],techStack:["React","Node.js","PostgreSQL","Docker","GraphQL","AWS"],interactiveType:"dashboard"},{id:"mobile-app",num:"03",title:"MOBILE APP DEVELOPMENT",subtitle:"Native-Feel iOS & Android Applications",desc:"Transform your ideas into intuitive mobile applications engineered for fluid performance and user retention.",icon:f2,color:"#FFC229",deliverables:["Cross-Platform React Native & Flutter Engineering","Offline-First Data Synchronization","Biometric Auth & Push Notification Gateways","App Store & Play Store End-to-End Launch Management"],techStack:["React Native","Flutter","Swift","Kotlin","Firebase","Supabase"],interactiveType:"smartphone"},{id:"ai-automation",num:"04",title:"AI & AUTOMATION",subtitle:"Intelligent Workflows & Autonomous Agents",desc:"Work smarter with AI-powered systems, intelligent workflows, and business automation that eliminate manual grind.",icon:Mx,color:"#8B2CFF",deliverables:["Custom AI Agent Teams & Decision Pipelines","CRM, WhatsApp, & ERP Business Automation","LLM Fine-Tuning & Vector Knowledge Bases (RAG)","Automated Lead Nurturing & Sentiment Intelligence"],techStack:["Python","OpenAI / Gemini","LangChain","n8n","FastAPI","Pinecone"],interactiveType:"neural"},{id:"ui-ux",num:"05",title:"UI/UX DESIGN",subtitle:"Obsessively Crafted Human-Centric Interfaces",desc:"Beautiful interfaces. Seamless experiences. Designs that make people stay, engage, and convert.",icon:N1,color:"#00C8FF",deliverables:["Interactive Figma Design Systems & Token Architecture","Micro-Interactions & Motion Design Storyboarding","Conversion Rate Optimization (CRO) UX Audits","Heuristic Analysis & User Journey Mapping"],techStack:["Figma","Spline 3D","After Effects","Design Tokens","Protopie"],interactiveType:"design"},{id:"digital-solutions",num:"06",title:"CUSTOM DIGITAL SOLUTIONS",subtitle:"Tailor-Made Engineering For Niche Verticals",desc:"Custom technology solutions designed around your business goals, unconstrained by standard software limits.",icon:Ex,color:"#FFC229",deliverables:["Custom E-Commerce & Payment Engine Integration","Hardware & IoT Telemetry Gateways","Legacy Platform Modernization & Cloud Migration","Automated Reporting & Business Intelligence Pipelines"],techStack:["Node.js","Go","Python","Stripe","Redis","Kafka"],interactiveType:"ecosystem"}],a=i[e],s=r=>{Pe.playClick(),t&&t(r);const o=document.querySelector("#contact");o&&o.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{id:"solutions",className:"relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/3 left-0 w-96 h-96 bg-[#087BFF]/15 blur-[120px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-1/4 right-0 w-96 h-96 bg-[#5715A8]/20 blur-[130px] pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 cyber-grid opacity-25 pointer-events-none"}),u.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 sm:mb-20",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,200,255,0.2)]",children:[u.jsx(Ni,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"OUR ARCHITECTURAL CAPABILITIES"})]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4",children:["WE DON'T JUST BUILD WEBSITES."," ",u.jsx("span",{className:"bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-clip-text text-transparent glow-neon",children:"WE BUILD DIGITAL EXPERIENCES."})]}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] max-w-2xl mx-auto",children:"Six elite engineering pillars designed to elevate your business into a digital powerhouse."})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10",children:i.map((r,o)=>{const l=r.icon,c=e===o;return u.jsxs("button",{onClick:()=>{Pe.playClick(),n(o)},onMouseEnter:()=>Pe.playHover(),className:`relative p-3.5 sm:p-4 rounded-xl border transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer ${c?"border-[#00C8FF] bg-[#0A1025] shadow-[0_0_20px_rgba(0,200,255,0.3)]":"border-white/5 bg-[#0A1025]/50 hover:border-white/20 hover:bg-[#0A1025]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("span",{className:`text-[10px] font-mono font-bold ${c?"text-[#00C8FF]":"text-[#9CA6C5]"}`,children:["// ",r.num]}),u.jsx(l,{className:`w-4 h-4 transition-transform group-hover:scale-110 ${c?"text-[#00C8FF]":"text-[#9CA6C5]"}`})]}),u.jsx("div",{className:`font-space font-bold text-xs leading-snug ${c?"text-[#F5F7FF]":"text-[#9CA6C5]"}`,children:r.title}),c&&u.jsx("div",{className:"absolute -bottom-1 left-4 right-4 h-0.5 bg-[#00C8FF] shadow-[0_0_10px_#00C8FF]"})]},r.id)})}),u.jsx("div",{className:"rounded-3xl border border-[#00C8FF]/30 bg-[#0A1025]/90 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("span",{className:"px-3 py-1 rounded bg-[#00C8FF]/10 border border-[#00C8FF]/30 font-mono text-xs text-[#00C8FF] font-bold",children:["SERVICE // ",a.num]}),u.jsx("span",{className:"text-xs font-mono text-[#FFC229] uppercase tracking-wider",children:a.subtitle})]}),u.jsx("h3",{className:"text-3xl sm:text-4xl font-space font-extrabold text-[#F5F7FF] tracking-tight",children:a.title}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] leading-relaxed",children:a.desc}),u.jsxs("div",{className:"space-y-2.5 pt-2",children:[u.jsxs("div",{className:"text-xs font-mono uppercase tracking-widest text-[#00C8FF] flex items-center gap-2",children:[u.jsx(Ax,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"WHAT WE DELIVER"})]}),u.jsx("div",{className:"grid grid-cols-1 gap-2",children:a.deliverables.map((r,o)=>u.jsxs("div",{className:"flex items-start gap-2.5 p-2.5 rounded-lg bg-[#050817]/60 border border-white/5 text-xs text-[#F5F7FF]",children:[u.jsx(jA,{className:"w-3.5 h-3.5 text-[#00C8FF] shrink-0 mt-0.5"}),u.jsx("span",{children:r})]},o))})]}),u.jsxs("div",{className:"pt-2",children:[u.jsxs("div",{className:"text-xs font-mono uppercase tracking-widest text-[#9CA6C5] flex items-center gap-2 mb-2",children:[u.jsx(c1,{className:"w-3.5 h-3.5 text-[#FFC229]"}),u.jsx("span",{children:"CORE TECHNOLOGIES"})]}),u.jsx("div",{className:"flex flex-wrap gap-2",children:a.techStack.map(r=>u.jsx("span",{className:"px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#050817] border border-white/10 text-[#00C8FF]",children:r},r))})]}),u.jsx("div",{className:"pt-4",children:u.jsxs("button",{onClick:()=>s(a.title),onMouseEnter:()=>Pe.playHover(),className:"px-6 py-3.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] to-[#087BFF] hover:from-[#FFC229] hover:to-[#FFA000] transition-all shadow-[0_0_20px_rgba(0,200,255,0.4)] flex items-center gap-2 group cursor-pointer",children:[u.jsxs("span",{children:["START YOUR ",a.title]}),u.jsx(Jm,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})})]}),u.jsxs("div",{className:"lg:col-span-6",children:[a.interactiveType==="browser"&&u.jsxs("div",{className:"rounded-2xl border border-[#00C8FF]/40 bg-[#050817] overflow-hidden shadow-[0_0_40px_rgba(0,200,255,0.25)]",children:[u.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-[#0A1025] border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-[#FF3366]"}),u.jsx("div",{className:"w-3 h-3 rounded-full bg-[#FFC229]"}),u.jsx("div",{className:"w-3 h-3 rounded-full bg-[#00C8FF]"})]}),u.jsxs("div",{className:"text-[11px] font-mono text-[#9CA6C5] bg-[#050817] px-4 py-1 rounded-full border border-white/10 flex items-center gap-2",children:[u.jsx("span",{className:"text-[#00C8FF]",children:"https://"}),u.jsx("span",{children:"gentechka.com/experience"})]}),u.jsx("div",{className:"text-[10px] font-mono text-[#00C8FF]",children:"60 FPS"})]}),u.jsxs("div",{className:"p-6 space-y-4",children:[u.jsxs("div",{className:"h-40 rounded-xl bg-gradient-to-br from-[#087BFF]/20 via-[#5715A8]/30 to-[#00C8FF]/10 border border-[#00C8FF]/20 p-4 flex flex-col justify-between relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded bg-[#00C8FF]/20 text-[#00C8FF]",children:"Three.js Viewport"}),u.jsxs("div",{className:"space-y-1",children:[u.jsx("span",{className:"text-xs font-mono text-[#FFC229]",children:"RENDER_ENGINE_READY"}),u.jsx("div",{className:"text-lg font-space font-extrabold text-[#F5F7FF]",children:"Spatial Web Experience"})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("div",{className:"h-2 w-16 bg-[#00C8FF] rounded"}),u.jsx("div",{className:"h-2 w-24 bg-white/20 rounded"})]})]}),u.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[u.jsxs("div",{className:"p-3 rounded-lg bg-[#0A1025] border border-white/5 text-center",children:[u.jsx("div",{className:"text-base font-space font-bold text-[#00C8FF]",children:"0.4s"}),u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"LCP Speed"})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-[#0A1025] border border-white/5 text-center",children:[u.jsx("div",{className:"text-base font-space font-bold text-[#FFC229]",children:"100"}),u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"Performance"})]}),u.jsxs("div",{className:"p-3 rounded-lg bg-[#0A1025] border border-white/5 text-center",children:[u.jsx("div",{className:"text-base font-space font-bold text-[#8B2CFF]",children:"WebGL"}),u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"Hardware Accel"})]})]})]})]}),a.interactiveType==="dashboard"&&u.jsxs("div",{className:"rounded-2xl border border-[#087BFF]/40 bg-[#050817] p-5 shadow-[0_0_40px_rgba(8,123,255,0.25)] space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-[#00C8FF] animate-pulse"}),u.jsx("span",{className:"font-space font-bold text-sm text-[#F5F7FF]",children:"ENTERPRISE CONSOLE"})]}),u.jsx("span",{className:"text-[10px] font-mono text-[#00C8FF] px-2 py-0.5 rounded bg-[#00C8FF]/10",children:"LIVE TELEMETRY"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[u.jsxs("div",{className:"p-3 rounded-xl bg-[#0A1025] border border-white/10",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"API Latency"}),u.jsx("div",{className:"text-xl font-space font-bold text-[#00C8FF]",children:"18ms"}),u.jsx("div",{className:"h-1.5 w-full bg-white/10 rounded-full mt-2 overflow-hidden",children:u.jsx("div",{className:"h-full bg-[#00C8FF] w-[88%]"})})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-[#0A1025] border border-white/10",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"Active WebSockets"}),u.jsx("div",{className:"text-xl font-space font-bold text-[#FFC229]",children:"12,480"}),u.jsx("div",{className:"h-1.5 w-full bg-white/10 rounded-full mt-2 overflow-hidden",children:u.jsx("div",{className:"h-full bg-[#FFC229] w-[75%]"})})]})]}),u.jsxs("div",{className:"h-32 rounded-xl bg-[#0A1025] p-3 border border-white/5 flex flex-col justify-between",children:[u.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-[#9CA6C5]",children:[u.jsx("span",{children:"EVENT STREAM THROUGHPUT"}),u.jsx("span",{className:"text-[#00C8FF]",children:"99.99% UPTIME"})]}),u.jsx("div",{className:"flex items-end gap-1.5 h-16 pt-2",children:[40,65,30,85,95,75,60,90,100,80,70,95,110,85].map((r,o)=>u.jsx("div",{style:{height:`${r/110*100}%`},className:"flex-1 bg-gradient-to-t from-[#087BFF] to-[#00C8FF] rounded-t hover:bg-[#FFC229] transition-colors"},o))})]})]}),a.interactiveType==="smartphone"&&u.jsx("div",{className:"relative rounded-2xl border border-[#FFC229]/40 bg-[#050817] p-4 shadow-[0_0_40px_rgba(255,194,41,0.25)] overflow-hidden",children:u.jsxs("div",{className:"relative rounded-xl overflow-hidden border border-white/10",children:[u.jsx("img",{src:"/images/holographic-mobile-ui.jpg",alt:"Holographic Mobile App UI by GEN TECH KA",className:"w-full h-80 object-cover object-center"}),u.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#050817] via-transparent to-transparent opacity-75"}),u.jsxs("div",{className:"absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0A1025]/90 backdrop-blur-md border border-[#FFC229]/30 flex justify-between items-center",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#FFC229]",children:"REACT NATIVE + FLUTTER"}),u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"Spatial Mobile UI"})]}),u.jsx("span",{className:"px-2 py-0.5 rounded bg-[#FFC229]/20 text-[#FFC229] text-[10px] font-mono",children:"120Hz ProMotion"})]})]})}),a.interactiveType==="neural"&&u.jsxs("div",{className:"rounded-2xl border border-[#8B2CFF]/40 bg-[#050817] p-6 shadow-[0_0_40px_rgba(139,44,255,0.25)] space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"font-space font-bold text-sm text-[#F5F7FF]",children:"NEURAL WORKFLOW ENGINE"}),u.jsx("span",{className:"text-[10px] font-mono text-[#8B2CFF] px-2 py-0.5 rounded bg-[#8B2CFF]/20",children:"AGENTIC LOOP"})]}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"p-3 rounded-xl bg-[#0A1025] border border-[#8B2CFF]/30 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#8B2CFF]/20 flex items-center justify-center text-[#8B2CFF]",children:u.jsx(Mx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"Lead Intelligence Agent"}),u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"Qualifies & Enriches Incoming Data"})]})]}),u.jsx("span",{className:"text-[10px] font-mono text-[#00C8FF]",children:"AUTONOMOUS"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-[#0A1025] border border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#00C8FF]/20 flex items-center justify-center text-[#00C8FF]",children:u.jsx(Ax,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"Automated CRM Sync"}),u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"Instant WhatsApp & Email Pipeline"})]})]}),u.jsx("span",{className:"text-[10px] font-mono text-[#FFC229]",children:"SYNCED"})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-[#0A1025] border border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#FFC229]/20 flex items-center justify-center text-[#FFC229]",children:u.jsx(Ni,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"Custom Vector RAG"}),u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"Trained on Your Business Knowledge"})]})]}),u.jsx("span",{className:"text-[10px] font-mono text-[#00C8FF]",children:"ACCURACY 99.4%"})]})]})]}),a.interactiveType==="design"&&u.jsxs("div",{className:"rounded-2xl border border-[#00C8FF]/40 bg-[#050817] p-6 shadow-[0_0_40px_rgba(0,200,255,0.25)] space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"font-space font-bold text-sm text-[#F5F7FF]",children:"DESIGN TOKENS & ATOMS"}),u.jsx("span",{className:"text-[10px] font-mono text-[#00C8FF]",children:"FIGMA AUTO-SYNC"})]}),u.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[u.jsxs("div",{className:"h-14 rounded-lg bg-[#050817] border border-white/20 p-2 flex flex-col justify-between",children:[u.jsx("span",{className:"text-[8px] font-mono text-[#9CA6C5]",children:"#050817"}),u.jsx("span",{className:"text-[9px] font-mono text-[#F5F7FF]",children:"Midnight"})]}),u.jsxs("div",{className:"h-14 rounded-lg bg-[#087BFF] p-2 flex flex-col justify-between text-white",children:[u.jsx("span",{className:"text-[8px] font-mono opacity-80",children:"#087BFF"}),u.jsx("span",{className:"text-[9px] font-mono font-bold",children:"Electric"})]}),u.jsxs("div",{className:"h-14 rounded-lg bg-[#00C8FF] p-2 flex flex-col justify-between text-[#050817]",children:[u.jsx("span",{className:"text-[8px] font-mono font-bold opacity-80",children:"#00C8FF"}),u.jsx("span",{className:"text-[9px] font-mono font-bold",children:"Neon"})]}),u.jsxs("div",{className:"h-14 rounded-lg bg-[#FFC229] p-2 flex flex-col justify-between text-[#050817]",children:[u.jsx("span",{className:"text-[8px] font-mono font-bold opacity-80",children:"#FFC229"}),u.jsx("span",{className:"text-[9px] font-mono font-bold",children:"Gold"})]})]}),u.jsxs("div",{className:"p-3 rounded-xl bg-[#0A1025] border border-white/10 space-y-2",children:[u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5]",children:"TYPOGRAPHY SPECIMEN"}),u.jsx("div",{className:"text-xl font-space font-black text-[#F5F7FF]",children:"Space Grotesk 800"}),u.jsx("div",{className:"text-sm font-sora font-semibold text-[#00C8FF]",children:"Sora SemiBold 600"}),u.jsx("div",{className:"text-xs font-inter text-[#9CA6C5]",children:"Inter Regular 400 — Precision readability"})]})]}),a.interactiveType==="ecosystem"&&u.jsxs("div",{className:"rounded-2xl border border-[#FFC229]/40 bg-[#050817] p-6 shadow-[0_0_40px_rgba(255,194,41,0.25)] space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"font-space font-bold text-sm text-[#F5F7FF]",children:"CUSTOM DIGITAL ARCHITECTURE"}),u.jsx("span",{className:"text-[10px] font-mono text-[#FFC229]",children:"CLOUD AGNOSTIC"})]}),u.jsxs("div",{className:"relative p-6 rounded-xl bg-[#0A1025] border border-white/10 flex flex-col items-center justify-center text-center space-y-3",children:[u.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#087BFF] to-[#00C8FF] flex items-center justify-center text-[#050817] font-bold shadow-[0_0_20px_rgba(0,200,255,0.5)]",children:u.jsx(Ex,{className:"w-7 h-7"})}),u.jsx("div",{className:"text-base font-space font-bold text-[#F5F7FF]",children:"Distributed Cloud Mesh"}),u.jsx("div",{className:"text-xs font-mono text-[#9CA6C5] max-w-sm",children:"REST & GraphQL APIs // Webhooks // Real-time Message Queues // Zero-Downtime CI/CD"})]})]})]})]})})]})]})}const Cx=[{id:"kinetic-ai",name:"KINETIC AGENT OS",category:"AI & Automation",headline:"Autonomous Business Decision & Workflow Architecture",shortDesc:"Multi-agent orchestration platform that analyzes customer signals, automates inventory reordering, and triggers intelligent email & WhatsApp dispatches in milliseconds.",fullDesc:"Built as an autonomous operational spine, Kinetic Agent OS coordinates specialized LLM subagents for automated CRM data hygiene, dynamic pricing optimization, and cross-channel customer service routing.",techStack:["Python","LangChain","FastAPI","React","Tailwind CSS","Pinecone","Docker"],features:["Autonomous multi-agent consensus engine","Real-time WhatsApp & Webhook event triggers","Vector memory RAG for zero-hallucination compliance","Executive telemetry dashboard with 99.9% uptime"],metrics:[{label:"Time Saved / Week",value:"42 hrs"},{label:"Latency",value:"180ms"},{label:"Accuracy Rate",value:"99.4%"}],accentColor:"#8B2CFF",gradient:"from-[#8B2CFF]/30 to-[#087BFF]/20",previewType:"dashboard",isDemo:!0},{id:"nexus-spatial",name:"NEXUS 3D SPATIAL COMMERCE",category:"Websites & 3D",headline:"Immersive WebGL Flagship Showroom & Customizer",shortDesc:"High-performance 3D spatial web platform delivering real-time product rendering, 360° tactile customization, and instant checkout integration.",fullDesc:"Nexus 3D eliminates the gap between physical retail and digital commerce with photorealistic Three.js shaders, reactive lighting, and fluid camera choreography that elevates brand prestige.",techStack:["Three.js","React Three Fiber","TypeScript","Tailwind CSS","WebGL","Stripe"],features:["Hardware-accelerated 60 FPS 3D configurator","Instant PBR material & texture swapping","Mobile-optimized touch orbit controls","Sub-second first contentful paint (0.35s)"],metrics:[{label:"Conversion Lift",value:"+68%"},{label:"Avg Time on Site",value:"4m 12s"},{label:"LCP Score",value:"0.35s"}],accentColor:"#00C8FF",gradient:"from-[#00C8FF]/30 to-[#087BFF]/20",previewType:"3d-canvas",isDemo:!0},{id:"aura-health",name:"AURA BIO-METRIC MOBILE",category:"Mobile Apps",headline:"Next-Generation Telehealth & Vital Telemetry App",shortDesc:"Sleek, biometric health application connecting wearable sensor data with intelligent clinician consultation schedules and encrypted records.",fullDesc:"Engineered with React Native and native biometric APIs, Aura Health features dark-mode glowing telemetry, offline-first sync, and military-grade end-to-end encryption.",techStack:["React Native","TypeScript","Supabase","GraphQL","Tailwind","HealthKit"],features:["Biometric Face ID & Fingerprint authentication","Real-time pulse and metabolic telemetry charting","Encrypted WebRTC high-definition video consultations","Offline-first automated cloud replication"],metrics:[{label:"App Store Rating",value:"4.9 ★"},{label:"Sync Latency",value:"12ms"},{label:"Active Users",value:"85K+"}],accentColor:"#FFC229",gradient:"from-[#FFC229]/25 to-[#5715A8]/20",previewType:"mobile-hud",isDemo:!0},{id:"pulse-cloud-os",name:"PULSE ANALYTICS OS",category:"Web Apps",headline:"Collaborative Real-time Infrastructure Monitoring",shortDesc:"Full-stack cloud telemetry hub handling 2M+ daily events with low-latency WebSockets, anomaly detection, and automated failover switches.",fullDesc:"Designed for DevOps and engineering leads, Pulse provides an ultra-responsive dark interface for server node monitoring, incident resolution, and CI/CD pipelines.",techStack:["React","Node.js","PostgreSQL","Redis","WebSockets","Docker"],features:["Real-time WebSocket cluster telemetry","Configurable alert thresholds & Discord/Slack bots","Role-based granular multi-tenant security","Automated PDF & CSV audit log export"],metrics:[{label:"Daily Events",value:"2.4M"},{label:"Mean Resolution",value:"2.1m"},{label:"Uptime",value:"99.99%"}],accentColor:"#087BFF",gradient:"from-[#087BFF]/30 to-[#00C8FF]/20",previewType:"dashboard",isDemo:!0},{id:"chrono-luxe",name:"CHRONO LUXE FLAGSHIP",category:"E-commerce",headline:"Ultra-Luxury Horology Experience & Digital Concierge",shortDesc:"Editorial-grade e-commerce showcase combining micro-animations, VIP private concierge booking, and tactile product storytelling.",fullDesc:"Crafted for a high-end luxury watch brand concept, Chrono Luxe features bespoke typography, golden atmospheric lighting, and high-converting private enquiry mechanics.",techStack:["Next.js","Tailwind CSS","Framer Motion","Shopify Storefront API","TypeScript"],features:["Magnetic cursor interaction & sound feedback","VIP private viewing reservation system","High-resolution multi-angle macro zooms","Automated concierge WhatsApp communication link"],metrics:[{label:"Avg Order Value",value:"₹1.8L"},{label:"Bounce Rate",value:"18%"},{label:"Mobile Score",value:"98/100"}],accentColor:"#FFC229",gradient:"from-[#FFC229]/30 to-[#FF3366]/20",previewType:"hologram",isDemo:!0},{id:"flow-automata",name:"FLOW AUTOMATA PIPELINE",category:"AI & Automation",headline:"Omnichannel B2B Marketing & Lead Engine",shortDesc:"Automated revenue engine combining AI copywriting, multi-step lead enrichment, automated scheduling, and CRM synchronization.",fullDesc:"Flow Automata replaces 5 disconnected marketing tools with a unified intelligent pipeline that ingests inbound traffic, enriches business profiles, and books qualified meetings.",techStack:["Python","FastAPI","OpenAI","n8n","React","Tailwind CSS"],features:["Instant enrichment via LinkedIn & business registries","Dynamic personalized landing page generator","Smart calendar slot negotiation via WhatsApp","Zero maintenance cloud serverless architecture"],metrics:[{label:"Lead Response Time",value:"< 45s"},{label:"Qualified Rate",value:"+54%"},{label:"ROI Multiple",value:"4.8x"}],accentColor:"#00C8FF",gradient:"from-[#00C8FF]/30 to-[#5715A8]/20",previewType:"dashboard",isDemo:!0}];function y2({project:t,onClose:e,onRequestSimilar:n}){return t?u.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#050817]/90 backdrop-blur-xl animate-fade-in",children:u.jsxs("div",{className:"relative w-full max-w-4xl rounded-3xl border border-[#00C8FF]/40 bg-[#0A1025] shadow-[0_0_60px_rgba(0,200,255,0.3)] overflow-hidden my-8",children:[u.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050817]/80",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FFC229]/20 text-[#FFC229] border border-[#FFC229]/40 uppercase",children:"DEMO ARCHITECTURE CONCEPT"}),u.jsxs("span",{className:"text-xs font-mono text-[#9CA6C5] hidden sm:inline",children:["// ",t.category]})]}),u.jsx("button",{onClick:()=>{Pe.playClick(),e()},onMouseEnter:()=>Pe.playHover(),className:"p-1.5 rounded-lg border border-white/10 text-[#9CA6C5] hover:text-[#FF3366] hover:border-[#FF3366]/40 hover:bg-[#FF3366]/10 transition-colors","aria-label":"Close Project Modal",children:u.jsx(vf,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-[#00C8FF]",children:[u.jsx(Ni,{className:"w-4 h-4"}),u.jsx("span",{children:"PROJECT SPECIFICATION"})]}),u.jsx("h3",{className:"text-2xl sm:text-4xl font-space font-extrabold text-[#F5F7FF] tracking-tight",children:t.name}),u.jsx("p",{className:"text-base sm:text-lg font-sora text-[#FFC229]",children:t.headline}),u.jsx("p",{className:"text-sm font-inter text-[#9CA6C5] leading-relaxed",children:t.fullDesc})]}),u.jsx("div",{className:"grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-[#050817] border border-white/10",children:t.metrics.map((i,a)=>u.jsxs("div",{className:"text-center p-2",children:[u.jsx("div",{className:"text-xl sm:text-3xl font-space font-extrabold text-[#00C8FF]",children:i.value}),u.jsx("div",{className:"text-[10px] sm:text-xs font-mono text-[#9CA6C5] uppercase mt-1",children:i.label})]},a))}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-[#00C8FF]",children:"ENGINEERED CAPABILITIES & ARCHITECTURE"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:t.features.map((i,a)=>u.jsxs("div",{className:"flex items-start gap-2.5 p-3 rounded-xl bg-[#050817]/60 border border-white/5 text-xs text-[#F5F7FF]",children:[u.jsx($m,{className:"w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5"}),u.jsx("span",{children:i})]},a))})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-[#9CA6C5]",children:"TECHNOLOGY STACK"}),u.jsx("div",{className:"flex flex-wrap gap-2",children:t.techStack.map(i=>u.jsx("span",{className:"px-3 py-1 rounded-md text-xs font-mono bg-[#050817] border border-[#00C8FF]/20 text-[#00C8FF]",children:i},i))})]}),u.jsxs("div",{className:"p-4 rounded-xl border border-white/10 bg-[#050817]/80 flex items-center gap-3 text-xs text-[#9CA6C5]",children:[u.jsx(I1,{className:"w-5 h-5 text-[#FFC229] shrink-0"}),u.jsx("span",{children:"This is an engineered concept model demonstrating GEN TECH KA's architectural capabilities. Ready to build a bespoke production version tailored to your venture?"})]})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#050817]/90",children:[u.jsxs("span",{className:"text-xs font-mono text-[#9CA6C5]",children:["CONCEPT ID: GTK-SPEC-",t.id.toUpperCase()]}),u.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[u.jsx("button",{onClick:()=>{Pe.playClick(),e()},className:"w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-[#9CA6C5] hover:text-[#F5F7FF] transition-colors",children:"CLOSE"}),u.jsxs("button",{onClick:()=>{Pe.playClick(),e(),n(t.category)},onMouseEnter:()=>Pe.playHover(),className:"w-full sm:w-auto px-6 py-2.5 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] to-[#087BFF] hover:from-[#FFC229] hover:to-[#FFA000] transition-all shadow-[0_0_20px_rgba(0,200,255,0.4)] flex items-center justify-center gap-2 group cursor-pointer",children:[u.jsx("span",{children:"REQUEST SIMILAR BUILD"}),u.jsx(Jm,{className:"w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"})]})]})]})]})}):null}function S2({onSelectCategory:t}){const[e,n]=$e.useState("All"),[i,a]=$e.useState(null),s=["All","Websites & 3D","Web Apps","Mobile Apps","AI & Automation","E-commerce"],r=e==="All"?Cx:Cx.filter(c=>c.category===e),o=c=>{Pe.playClick(),a(c)},l=c=>{Pe.playClick(),t&&t(c);const d=document.querySelector("#contact");d&&d.scrollIntoView({behavior:"smooth"})};return u.jsxs("section",{id:"showcase",className:"relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden border-t border-white/5",children:[u.jsx("div",{className:"absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00C8FF]/10 blur-[130px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#5715A8]/15 blur-[140px] pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 cyber-grid opacity-20 pointer-events-none"}),u.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14 sm:mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,200,255,0.2)]",children:[u.jsx(Ni,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"PORTFOLIO & PROTOTYPES"})]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4",children:["IMAGINATION,"," ",u.jsx("span",{className:"text-[#FFC229] glow-gold",children:"MEET EXECUTION."})]}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto",children:"A curated showcase of cutting-edge digital architectures engineered by GEN TECH KA."}),u.jsxs("div",{className:"inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-md bg-[#0A1025] border border-white/10 text-[11px] font-mono text-[#9CA6C5]",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00C8FF]"}),u.jsx("span",{children:"Clearly marked concept showcases. Production builds tailored on commission."})]})]}),u.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-12",children:s.map(c=>u.jsx("button",{onClick:()=>{Pe.playClick(),n(c)},onMouseEnter:()=>Pe.playHover(),className:`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${e===c?"bg-[#00C8FF] text-[#050817] font-bold shadow-[0_0_20px_rgba(0,200,255,0.4)]":"bg-[#0A1025] text-[#9CA6C5] border border-white/5 hover:border-[#00C8FF]/40 hover:text-[#F5F7FF]"}`,children:c},c))}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:r.map(c=>u.jsxs("div",{onMouseEnter:()=>Pe.playHover(),className:"group relative rounded-2xl border border-white/10 bg-[#0A1025]/80 hover:border-[#00C8FF]/60 hover:shadow-[0_0_35px_rgba(0,200,255,0.25)] transition-all duration-300 flex flex-col justify-between overflow-hidden",children:[u.jsxs("div",{className:`relative h-48 w-full bg-gradient-to-br ${c.gradient} p-5 flex flex-col justify-between overflow-hidden border-b border-white/5`,children:[u.jsxs("div",{className:"flex items-center justify-between z-10",children:[u.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#050817]/80 text-[#00C8FF] border border-[#00C8FF]/30",children:c.category}),u.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFC229]/20 text-[#FFC229] border border-[#FFC229]/30",children:"CONCEPT DEMO"})]}),u.jsxs("div",{className:"relative z-10",children:[u.jsx("div",{className:"text-xl sm:text-2xl font-space font-black text-[#F5F7FF] tracking-tight group-hover:text-[#00C8FF] transition-colors",children:c.name}),u.jsx("div",{className:"text-xs font-sora text-[#FFC229] line-clamp-1",children:c.headline})]}),u.jsx("div",{className:"absolute inset-0 cyber-grid opacity-30 group-hover:opacity-60 transition-opacity"})]}),u.jsxs("div",{className:"p-6 space-y-4 flex-1 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-xs sm:text-sm font-inter text-[#9CA6C5] line-clamp-3 leading-relaxed mb-4",children:c.shortDesc}),u.jsx("div",{className:"space-y-1.5 mb-4",children:c.features.slice(0,2).map((d,m)=>u.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#F5F7FF]",children:[u.jsx(XA,{className:"w-3.5 h-3.5 text-[#00C8FF] shrink-0"}),u.jsx("span",{className:"truncate",children:d})]},m))}),u.jsxs("div",{className:"flex flex-wrap gap-1.5 pt-2 border-t border-white/5",children:[c.techStack.slice(0,4).map(d=>u.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-[#050817] text-[#9CA6C5] border border-white/5",children:d},d)),c.techStack.length>4&&u.jsxs("span",{className:"px-1.5 py-0.5 text-[10px] font-mono text-[#00C8FF]",children:["+",c.techStack.length-4]})]})]}),u.jsx("div",{className:"pt-4 border-t border-white/5 flex items-center justify-between",children:u.jsxs("button",{onClick:()=>o(c),className:"w-full py-2.5 px-4 rounded-xl font-space font-bold text-xs uppercase tracking-wider text-[#F5F7FF] bg-[#050817] hover:bg-[#00C8FF] hover:text-[#050817] border border-[#00C8FF]/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer",children:[u.jsx(QA,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"VIEW PROJECT DETAILS"}),u.jsx(zu,{className:"w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"})]})})]})]},c.id))})]}),u.jsx(y2,{project:i,onClose:()=>a(null),onRequestSimilar:l})]})}function b2(){const[t,e]=$e.useState(0),n=[{num:"01",title:"DISCOVER",tagline:"Deep Dive & Goal Alignment",summary:"We understand your idea, business, and goals.",desc:"Every breakthrough project starts with surgical listening. We dissect your business model, target audience, competitive landscape, and brand voice to unearth your most lethal differentiators.",icon:c2,duration:"Day 1–3",deliverables:["Discovery Workshop & Strategic Brief","Competitor & Technology Landscape Audit","User Persona & Journey Definition","Scope Matrix & Architectural Feasibility"],color:"#00C8FF"},{num:"02",title:"STRATEGIZE",tagline:"Architectural Blueprint & Roadmap",summary:"We plan the perfect digital solution.",desc:"We map the tech stack, data pipelines, information architecture, and user flows before writing a single line of code. No guesswork, no costly rewrites.",icon:qA,duration:"Day 4–7",deliverables:["System Architecture & Stack Selection","Interactive Wireframes & Information Hierarchy","Conversion Funnel Strategy","Milestone Roadmap & Sprint Schedule"],color:"#087BFF"},{num:"03",title:"DESIGN",tagline:"Cinematic 3D & Human-Centric UI/UX",summary:"We transform your idea into an incredible visual experience.",desc:"We craft a breathtaking visual universe with futuristic typography, high-contrast layouts, custom 3D assets, and micro-interactions that forge instant brand reverence.",icon:N1,duration:"Week 2",deliverables:["High-Fidelity Interactive Figma Prototype","Custom 3D Emblems, Shaders & Motion Specs","Complete Design System & Token Tokens","Cross-Device Mobile & Desktop Sign-Off"],color:"#FFC229"},{num:"04",title:"DEVELOP",tagline:"Clean Code, 60 FPS 3D & AI Pipelines",summary:"We bring everything to life using modern technology.",desc:"We write robust, modular, production-ready code. From hardware-accelerated Three.js scenes to real-time APIs, automated database workflows, and rigorous automated tests.",icon:c1,duration:"Week 3–4",deliverables:["Production React / Three.js / TypeScript Build","Sub-second Core Web Vitals Optimization","Backend APIs, Databases & Security Hardening","Automated Testing & Cross-Browser Validation"],color:"#8B2CFF"},{num:"05",title:"LAUNCH",tagline:"Zero-Downtime Deployment & Handover",summary:"We launch your digital product into the world.",desc:"We manage DNS configurations, SSL certificates, cloud deployment, and telemetry tracking. Then we provide comprehensive documentation and training so you take full ownership.",icon:l2,duration:"Launch Day & Beyond",deliverables:["Zero-Downtime Cloud Deployment (AWS/Vercel/CDN)","SEO & Analytics Event Tracking Verification","Admin Video Walkthrough & Source Code Handover","30-Day Post-Launch Warranty & Monitoring"],color:"#00C8FF"}],i=n[t],a=i.icon;return u.jsxs("section",{id:"process",className:"relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden border-t border-white/5",children:[u.jsx("div",{className:"absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none"}),u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#087BFF]/10 blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 sm:mb-20",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FFC229]/40 bg-[#FFC229]/10 text-[#FFC229] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(255,194,41,0.2)]",children:[u.jsx(Ni,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"THE EXECUTION METHODOLOGY"})]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4",children:["FROM A SMALL IDEA TO"," ",u.jsx("span",{className:"text-[#00C8FF] glow-neon",children:"SOMETHING BIG."})]}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto",children:"A battle-tested 5-phase engineering protocol that guarantees precision, velocity, and unforgettable quality."})]}),u.jsxs("div",{className:"relative mb-12 sm:mb-16",children:[u.jsx("div",{className:"hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0"}),u.jsx("div",{className:"hidden md:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#00C8FF] to-[#FFC229] -translate-y-1/2 z-0 transition-all duration-500 shadow-[0_0_10px_#00C8FF]",style:{width:`${t/(n.length-1)*100}%`}}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10",children:n.map((s,r)=>{const o=s.icon,l=t===r,c=t>r;return u.jsxs("button",{onClick:()=>{Pe.playClick(),e(r)},onMouseEnter:()=>Pe.playHover(),className:`p-4 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer ${l?"border-[#00C8FF] bg-[#0A1025] shadow-[0_0_25px_rgba(0,200,255,0.35)] scale-105":c?"border-[#00C8FF]/40 bg-[#0A1025]/80 hover:border-[#00C8FF]":"border-white/5 bg-[#0A1025]/40 hover:border-white/20"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded ${l?"bg-[#00C8FF] text-[#050817]":c?"bg-[#00C8FF]/20 text-[#00C8FF]":"bg-white/5 text-[#9CA6C5]"}`,children:["STEP ",s.num]}),u.jsx(o,{className:`w-4 h-4 ${l?"text-[#FFC229]":c?"text-[#00C8FF]":"text-[#9CA6C5]"}`})]}),u.jsx("div",{className:"font-space font-bold text-sm text-[#F5F7FF] tracking-tight",children:s.title}),u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5] mt-1",children:s.duration})]},s.num)})})]}),u.jsx("div",{className:"rounded-3xl border border-[#00C8FF]/30 bg-[#0A1025]/90 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("span",{className:"px-3 py-1 rounded bg-[#00C8FF]/10 border border-[#00C8FF]/30 font-mono text-xs text-[#00C8FF] font-bold",children:["STEP // ",i.num]}),u.jsxs("span",{className:"text-xs font-mono text-[#FFC229] uppercase tracking-wider flex items-center gap-1.5",children:[u.jsx(WA,{className:"w-3.5 h-3.5"})," ",i.duration]})]}),u.jsxs("h3",{className:"text-3xl sm:text-4xl font-space font-extrabold text-[#F5F7FF] tracking-tight",children:[i.title,": ",i.tagline]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[#050817] border border-white/10 text-sm font-sora font-semibold text-[#00C8FF]",children:["“",i.summary,"”"]}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] leading-relaxed",children:i.desc}),u.jsxs("div",{className:"space-y-3 pt-2",children:[u.jsx("div",{className:"text-xs font-mono uppercase tracking-widest text-[#00C8FF]",children:"PHASE MILESTONES & DELIVERABLES"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:i.deliverables.map((s,r)=>u.jsxs("div",{className:"flex items-start gap-2 p-2.5 rounded-lg bg-[#050817]/60 border border-white/5 text-xs text-[#F5F7FF]",children:[u.jsx($m,{className:"w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5"}),u.jsx("span",{children:s})]},r))})]})]}),u.jsx("div",{className:"lg:col-span-5",children:u.jsxs("div",{className:"relative rounded-2xl border border-white/10 bg-[#050817] p-8 flex flex-col items-center text-center justify-between min-h-[340px] shadow-[0_0_35px_rgba(0,0,0,0.8)] overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 cyber-grid opacity-30"}),u.jsx("div",{className:"relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#087BFF] to-[#00C8FF] flex items-center justify-center text-[#050817] shadow-[0_0_30px_rgba(0,200,255,0.4)] mb-4",children:u.jsx(a,{className:"w-10 h-10"})}),u.jsxs("div",{className:"relative z-10 space-y-2",children:[u.jsxs("div",{className:"text-xs font-mono uppercase tracking-widest text-[#FFC229]",children:["PHASE 0",t+1," OF 05"]}),u.jsx("div",{className:"text-2xl font-space font-extrabold text-[#F5F7FF]",children:i.title}),u.jsx("div",{className:"text-xs font-inter text-[#9CA6C5]",children:"Engineered with surgical standards. Every phase signed off by you before deployment."})]}),u.jsx("div",{className:"relative z-10 flex gap-2 mt-6",children:n.map((s,r)=>u.jsx("div",{className:`h-2 rounded-full transition-all duration-300 ${r===t?"w-6 bg-[#00C8FF]":r<t?"w-2 bg-[#FFC229]":"w-2 bg-white/20"}`},r))})]})})]})})]})]})}function M2(){const t=[{title:"Creative Thinking",desc:"We discard cookie-cutter patterns and reinvent digital conventions for every client.",icon:VA,color:"#00C8FF"},{title:"Modern Technology",desc:"Cutting-edge Three.js, React, WebGL, and LLM agent architectures built for 2026 and beyond.",icon:h1,color:"#087BFF"},{title:"Custom-Built Solutions",desc:"100% tailor-crafted source code without bloated pre-made templates or fragile plugins.",icon:u2,color:"#FFC229"},{title:"User-Focused Experiences",desc:"Obsessively polished micro-interactions and intuitive journeys that convert visitors into advocates.",icon:n2,color:"#8B2CFF"},{title:"Innovation First",desc:"We continuously experiment with spatial web, autonomous workflows, and generative interfaces.",icon:a2,color:"#00C8FF"},{title:"Performance Driven",desc:"Engineered for sub-second page loads, 60 FPS rendering, and measurable revenue impact.",icon:e2,color:"#FFC229"}],e=[{feature:"Design & Visual Identity",gentech:"Immersive 3D Spatial Canvas & Bespoke Aesthetics",traditional:"Recycled WordPress or generic SaaS templates"},{feature:"Code Quality & Performance",gentech:"Handwritten modern React/TS, 60 FPS, <0.5s LCP",traditional:"Bloated page builders, slow load times, poor SEO"},{feature:"AI & Automation Systems",gentech:"Custom intelligent agents, automated CRM & WhatsApp pipelines",traditional:"Basic static contact form with manual copy-pasting"},{feature:"Communication & Ownership",gentech:"Direct engineer access, complete source code handover",traditional:"Layers of account managers, vendor lock-in"}];return u.jsxs("section",{id:"why-us",className:"relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden border-t border-white/5",children:[u.jsx("div",{className:"absolute top-1/3 right-1/4 w-96 h-96 bg-[#5715A8]/20 blur-[130px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00C8FF]/15 blur-[120px] pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 cyber-grid opacity-20 pointer-events-none"}),u.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 sm:mb-20",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,200,255,0.2)]",children:[u.jsx(Ni,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"THE GEN TECH KA STANDARD"})]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-6",children:["NOT JUST ANOTHER"," ",u.jsx("span",{className:"text-[#FFC229] glow-gold",children:"TECH AGENCY."})]}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto",children:"We are a rare intersection of creative art directors and hardcore software engineers."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20",children:t.map((n,i)=>{const a=n.icon;return u.jsxs("div",{onMouseEnter:()=>Pe.playHover(),className:"group relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0A1025]/80 hover:border-[#00C8FF]/60 hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden",children:[u.jsxs("div",{children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#050817] border border-white/10 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 group-hover:border-[#00C8FF] transition-all duration-300 mb-6",children:u.jsx(a,{className:"w-6 h-6"})}),u.jsx("h3",{className:"text-xl font-space font-bold text-[#F5F7FF] group-hover:text-[#00C8FF] transition-colors mb-3",children:n.title}),u.jsx("p",{className:"text-xs sm:text-sm font-inter text-[#9CA6C5] leading-relaxed",children:n.desc})]}),u.jsxs("div",{className:"pt-6 mt-4 border-t border-white/5 flex items-center justify-between",children:[u.jsxs("span",{className:"text-[10px] font-mono text-[#FFC229]",children:["VALUE // 0",i+1]}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#00C8FF] group-hover:scale-150 transition-transform"})]})]},i)})}),u.jsxs("div",{className:"relative rounded-3xl p-8 sm:p-14 border border-[#FFC229]/40 bg-gradient-to-r from-[#0A1025] via-[#101738] to-[#0A1025] shadow-[0_0_50px_rgba(255,194,41,0.15)] text-center my-16 overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 cyber-grid opacity-30 pointer-events-none"}),u.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto space-y-4",children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-[0.3em] text-[#00C8FF]",children:"OUR CREED"}),u.jsxs("div",{className:"text-3xl sm:text-5xl lg:text-6xl font-space font-black tracking-tight leading-tight text-[#F5F7FF]",children:["“WE DON'T FOLLOW THE FUTURE."," ",u.jsx("span",{className:"text-[#FFC229] glow-gold",children:"WE BUILD IT.”"})]}),u.jsx("p",{className:"text-xs sm:text-sm font-inter text-[#9CA6C5] pt-2",children:"Every system we launch is engineered to endure, scale, and outcompete."})]})]}),u.jsxs("div",{className:"rounded-3xl border border-white/10 bg-[#0A1025]/90 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl",children:[u.jsxs("div",{className:"p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl sm:text-2xl font-space font-bold text-[#F5F7FF]",children:"THE ARCHITECTURAL DIFFERENCE"}),u.jsx("p",{className:"text-xs font-inter text-[#9CA6C5]",children:"Why forward-thinking enterprises choose GEN TECH KA over legacy agencies."})]}),u.jsx("span",{className:"px-3 py-1 rounded bg-[#00C8FF]/10 border border-[#00C8FF]/30 font-mono text-xs text-[#00C8FF] self-start sm:self-auto",children:"HEAD-TO-HEAD AUDIT"})]}),u.jsx("div",{className:"divide-y divide-white/5",children:e.map((n,i)=>u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-center hover:bg-white/[0.02] transition-colors",children:[u.jsx("div",{className:"md:col-span-4 font-space font-bold text-sm text-[#F5F7FF]",children:n.feature}),u.jsxs("div",{className:"md:col-span-4 flex items-start gap-3 p-3 rounded-xl bg-[#00C8FF]/5 border border-[#00C8FF]/20",children:[u.jsx(kA,{className:"w-4 h-4 text-[#00C8FF] shrink-0 mt-0.5"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#00C8FF] font-bold uppercase",children:"GEN TECH KA"}),u.jsx("div",{className:"text-xs font-inter text-[#F5F7FF]",children:n.gentech})]})]}),u.jsxs("div",{className:"md:col-span-4 flex items-start gap-3 p-3 rounded-xl bg-[#050817] border border-white/5 opacity-75",children:[u.jsx(vf,{className:"w-4 h-4 text-[#FF3366] shrink-0 mt-0.5"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5] font-bold uppercase",children:"TYPICAL AGENCIES"}),u.jsx("div",{className:"text-xs font-inter text-[#9CA6C5]",children:n.traditional})]})]})]},i))})]})]})]})}function Z1({className:t="w-5 h-5"}){return u.jsxs("svg",{className:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),u.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),u.jsx("line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"})]})}var e0={};(function t(e,n,i,a){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),w=N.getContext("2d");w.fillRect(0,0,1,1);var ee=N.transferToImageBitmap();w.createPattern(ee,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var w=n.exports.Promise,ee=w!==void 0?w:e.Promise;return typeof ee=="function"?new ee(N):(N(l,l),null)}var d=function(N,w){return{transform:function(ee){if(N)return ee;if(w.has(ee))return w.get(ee);var ce=new OffscreenCanvas(ee.width,ee.height),G=ce.getContext("2d");return G.drawImage(ee,0,0),w.set(ee,ce),ce},clear:function(){w.clear()}}}(o,new Map),m=function(){var N=Math.floor(16.666666666666668),w,ee,ce={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(ne){var re=Math.random();return ce[re]=requestAnimationFrame(function oe(se){G===se||G+N-1<se?(G=se,delete ce[re],ne()):ce[re]=requestAnimationFrame(oe)}),re},ee=function(ne){ce[ne]&&cancelAnimationFrame(ce[ne])}):(w=function(ne){return setTimeout(ne,N)},ee=function(ne){return clearTimeout(ne)}),{frame:w,cancel:ee}}(),f=function(){var N,w,ee={};function ce(G){function ne(re,oe){G.postMessage({options:re||{},callback:oe})}G.init=function(oe){var se=oe.transferControlToOffscreen();G.postMessage({canvas:se},[se])},G.fire=function(oe,se,Te){if(w)return ne(oe,null),w;var Ve=Math.random().toString(36).slice(2);return w=c(function(be){function Le(Be){Be.data.callback===Ve&&(delete ee[Ve],G.removeEventListener("message",Le),w=null,d.clear(),Te(),be())}G.addEventListener("message",Le),ne(oe,Ve),ee[Ve]=Le.bind(null,{data:{callback:Ve}})}),w},G.reset=function(){G.postMessage({reset:!0});for(var oe in ee)ee[oe](),delete ee[oe]}}return function(){if(N)return N;if(!i&&s){var G=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([G])))}catch(ne){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ne),null}ce(N)}return N}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(N,w){return w?w(N):N}function b(N){return N!=null}function x(N,w,ee){return _(N&&b(N[w])?N[w]:p[w],ee)}function h(N){return N<0?0:Math.floor(N)}function g(N,w){return Math.floor(Math.random()*(w-N))+N}function S(N){return parseInt(N,16)}function y(N){return N.map(M)}function M(N){var w=String(N).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:S(w.substring(0,2)),g:S(w.substring(2,4)),b:S(w.substring(4,6))}}function C(N){var w=x(N,"origin",Object);return w.x=x(w,"x",Number),w.y=x(w,"y",Number),w}function v(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function E(N){var w=N.getBoundingClientRect();N.width=w.width,N.height=w.height}function P(N){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=N,w}function F(N,w,ee,ce,G,ne,re,oe,se){N.save(),N.translate(w,ee),N.rotate(ne),N.scale(ce,G),N.arc(0,0,1,re,oe,se),N.restore()}function I(N){var w=N.angle*(Math.PI/180),ee=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-w+(.5*ee-Math.random()*ee),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function V(N,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var ee=w.tick++/w.totalTicks,ce=w.x+w.random*w.tiltCos,G=w.y+w.random*w.tiltSin,ne=w.wobbleX+w.random*w.tiltCos,re=w.wobbleY+w.random*w.tiltSin;if(N.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-ee)+")",N.beginPath(),r&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))N.fill(L(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(ne-ce)*.1,Math.abs(re-G)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var oe=Math.PI/10*w.wobble,se=Math.abs(ne-ce)*.1,Te=Math.abs(re-G)*.1,Ve=w.shape.bitmap.width*w.scalar,be=w.shape.bitmap.height*w.scalar,Le=new DOMMatrix([Math.cos(oe)*se,Math.sin(oe)*se,-Math.sin(oe)*Te,Math.cos(oe)*Te,w.x,w.y]);Le.multiplySelf(new DOMMatrix(w.shape.matrix));var Be=N.createPattern(d.transform(w.shape.bitmap),"no-repeat");Be.setTransform(Le),N.globalAlpha=1-ee,N.fillStyle=Be,N.fillRect(w.x-Ve/2,w.y-be/2,Ve,be),N.globalAlpha=1}else if(w.shape==="circle")N.ellipse?N.ellipse(w.x,w.y,Math.abs(ne-ce)*w.ovalScalar,Math.abs(re-G)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):F(N,w.x,w.y,Math.abs(ne-ce)*w.ovalScalar,Math.abs(re-G)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var le=Math.PI/2*3,pe=4*w.scalar,De=8*w.scalar,qe=w.x,Ye=w.y,Dt=5,We=Math.PI/Dt;Dt--;)qe=w.x+Math.cos(le)*De,Ye=w.y+Math.sin(le)*De,N.lineTo(qe,Ye),le+=We,qe=w.x+Math.cos(le)*pe,Ye=w.y+Math.sin(le)*pe,N.lineTo(qe,Ye),le+=We;else N.moveTo(Math.floor(w.x),Math.floor(w.y)),N.lineTo(Math.floor(w.wobbleX),Math.floor(G)),N.lineTo(Math.floor(ne),Math.floor(re)),N.lineTo(Math.floor(ce),Math.floor(w.wobbleY));return N.closePath(),N.fill(),w.tick<w.totalTicks}function K(N,w,ee,ce,G){var ne=w.slice(),re=N.getContext("2d"),oe,se,Te=c(function(Ve){function be(){oe=se=null,re.clearRect(0,0,ce.width,ce.height),d.clear(),G(),Ve()}function Le(){i&&!(ce.width===a.width&&ce.height===a.height)&&(ce.width=N.width=a.width,ce.height=N.height=a.height),!ce.width&&!ce.height&&(ee(N),ce.width=N.width,ce.height=N.height),re.clearRect(0,0,ce.width,ce.height),ne=ne.filter(function(Be){return V(re,Be)}),ne.length?oe=m.frame(Le):be()}oe=m.frame(Le),se=be});return{addFettis:function(Ve){return ne=ne.concat(Ve),Te},canvas:N,promise:Te,reset:function(){oe&&m.cancel(oe),se&&se()}}}function z(N,w){var ee=!N,ce=!!x(w||{},"resize"),G=!1,ne=x(w,"disableForReducedMotion",Boolean),re=s&&!!x(w||{},"useWorker"),oe=re?f():null,se=ee?v:E,Te=N&&oe?!!N.__confetti_initialized:!1,Ve=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,be;function Le(le,pe,De){for(var qe=x(le,"particleCount",h),Ye=x(le,"angle",Number),Dt=x(le,"spread",Number),We=x(le,"startVelocity",Number),dt=x(le,"decay",Number),Bt=x(le,"gravity",Number),Ct=x(le,"drift",Number),U=x(le,"colors",y),_t=x(le,"ticks",Number),ut=x(le,"shapes"),it=x(le,"scalar"),de=!!x(le,"flat"),yt=C(le),Ue=qe,ze=[],R=N.width*yt.x,T=N.height*yt.y;Ue--;)ze.push(I({x:R,y:T,angle:Ye,spread:Dt,startVelocity:We,color:U[Ue%U.length],shape:ut[g(0,ut.length)],ticks:_t,decay:dt,gravity:Bt,drift:Ct,scalar:it,flat:de}));return be?be.addFettis(ze):(be=K(N,ze,se,pe,De),be.promise)}function Be(le){var pe=ne||x(le,"disableForReducedMotion",Boolean),De=x(le,"zIndex",Number);if(pe&&Ve)return c(function(We){We()});ee&&be?N=be.canvas:ee&&!N&&(N=P(De),document.body.appendChild(N)),ce&&!Te&&se(N);var qe={width:N.width,height:N.height};oe&&!Te&&oe.init(N),Te=!0,oe&&(N.__confetti_initialized=!0);function Ye(){if(oe){var We={getBoundingClientRect:function(){if(!ee)return N.getBoundingClientRect()}};se(We),oe.postMessage({resize:{width:We.width,height:We.height}});return}qe.width=qe.height=null}function Dt(){be=null,ce&&(G=!1,e.removeEventListener("resize",Ye)),ee&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Te=!1)}return ce&&!G&&(G=!0,e.addEventListener("resize",Ye,!1)),oe?oe.fire(le,qe,Dt):Le(le,qe,Dt)}return Be.reset=function(){oe&&oe.reset(),be&&be.reset()},Be}var q;function B(){return q||(q=z(null,{useWorker:!0,resize:!0})),q}function L(N,w,ee,ce,G,ne,re){var oe=new Path2D(N),se=new Path2D;se.addPath(oe,new DOMMatrix(w));var Te=new Path2D;return Te.addPath(se,new DOMMatrix([Math.cos(re)*G,Math.sin(re)*G,-Math.sin(re)*ne,Math.cos(re)*ne,ee,ce])),Te}function Z(N){if(!r)throw new Error("path confetti are not supported in this browser");var w,ee;typeof N=="string"?w=N:(w=N.path,ee=N.matrix);var ce=new Path2D(w),G=document.createElement("canvas"),ne=G.getContext("2d");if(!ee){for(var re=1e3,oe=re,se=re,Te=0,Ve=0,be,Le,Be=0;Be<re;Be+=2)for(var le=0;le<re;le+=2)ne.isPointInPath(ce,Be,le,"nonzero")&&(oe=Math.min(oe,Be),se=Math.min(se,le),Te=Math.max(Te,Be),Ve=Math.max(Ve,le));be=Te-oe,Le=Ve-se;var pe=10,De=Math.min(pe/be,pe/Le);ee=[De,0,0,De,-Math.round(be/2+oe)*De,-Math.round(Le/2+se)*De]}return{type:"path",path:w,matrix:ee}}function X(N){var w,ee=1,ce="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?w=N:(w=N.text,ee="scalar"in N?N.scalar:ee,G="fontFamily"in N?N.fontFamily:G,ce="color"in N?N.color:ce);var ne=10*ee,re=""+ne+"px "+G,oe=new OffscreenCanvas(ne,ne),se=oe.getContext("2d");se.font=re;var Te=se.measureText(w),Ve=Math.ceil(Te.actualBoundingBoxRight+Te.actualBoundingBoxLeft),be=Math.ceil(Te.actualBoundingBoxAscent+Te.actualBoundingBoxDescent),Le=2,Be=Te.actualBoundingBoxLeft+Le,le=Te.actualBoundingBoxAscent+Le;Ve+=Le+Le,be+=Le+Le,oe=new OffscreenCanvas(Ve,be),se=oe.getContext("2d"),se.font=re,se.fillStyle=ce,se.fillText(w,Be,le);var pe=1/ee;return{type:"bitmap",bitmap:oe.transferToImageBitmap(),matrix:[pe,0,0,pe,-Ve*pe/2,-be*pe/2]}}n.exports=function(){return B().apply(this,arguments)},n.exports.reset=function(){B().reset()},n.exports.create=z,n.exports.shapeFromPath=Z,n.exports.shapeFromText=X})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),e0,!1);const E2=e0.exports;e0.exports.create;function T2({initialService:t=""}){const[e,n]=$e.useState({fullName:"",email:"",phone:"",company:"",services:[],budget:"",description:"",timeline:"Within 2 Weeks",preferredContact:"WhatsApp"}),[i,a]=$e.useState({}),[s,r]=$e.useState(!1),[o,l]=$e.useState(null),[c,d]=$e.useState(!1);$e.useEffect(()=>{t&&n(M=>({...M,services:M.services.includes(t)?M.services:[...M.services,t]}))},[t]);const m=["Website Development","Web Application","Mobile App Development","AI & Automation","UI/UX Design","E-commerce Website","Custom Digital Solution","Other"],f=["Below ₹10,000","₹10,000–₹25,000","₹25,000–₹50,000","₹50,000–₹1,00,000","Above ₹1,00,000","Not Decided Yet"],p=["ASAP","Within 2 Weeks","Within 1 Month","Flexible"],_=["WhatsApp","Email","Phone Call"],b=M=>{Pe.playHover(),n(C=>{const v=C.services.includes(M);return{...C,services:v?C.services.filter(E=>E!==M):[...C.services,M]}}),i.services&&a(C=>({...C,services:""}))},x=()=>{const M={};return e.fullName.trim()||(M.fullName="Full Name is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(M.email="Please enter a valid email address"):M.email="Email Address is required",e.phone.trim()?e.phone.replace(/\D/g,"").length<8&&(M.phone="Please enter a valid phone number"):M.phone="Phone / WhatsApp Number is required",e.services.length===0&&(M.services="Please select at least one service"),e.budget||(M.budget="Please select a project budget tier"),e.description.trim()?e.description.trim().length<15&&(M.description="Please provide a bit more detail (min 15 characters)"):M.description="Please describe your project or idea",a(M),Object.keys(M).length===0},h=async M=>{if(M.preventDefault(),Pe.playClick(),!x()){Pe.playWhoosh();return}r(!0);try{await new Promise(E=>setTimeout(E,900));const v={id:`GTK-${new Date().getFullYear()}-${Math.floor(1e3+Math.random()*9e3)}`,date:new Date().toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}),data:{...e}};try{const E=JSON.parse(localStorage.getItem("gtk_enquiries")||"[]");E.push(v),localStorage.setItem("gtk_enquiries",JSON.stringify(E))}catch{}l(v),Pe.playChime();try{E2({particleCount:80,spread:70,origin:{y:.6},colors:["#00C8FF","#FFC229","#087BFF","#5715A8"]})}catch{}}finally{r(!1)}},g=()=>{const M="919876543210",C=encodeURIComponent(`*GEN TECH KA // PROJECT ENQUIRY*
Ticket: ${(o==null?void 0:o.id)||"NEW"}
Name: ${e.fullName}
Email: ${e.email}
Phone: ${e.phone}
Company: ${e.company||"N/A"}
Services: ${e.services.join(", ")}
Budget: ${e.budget}
Timeline: ${e.timeline}
Details: ${e.description}`);return`https://wa.me/${M}?text=${C}`},S=()=>{const M=encodeURIComponent(`Project Enquiry: ${e.fullName} - ${e.services.join(", ")}`),C=encodeURIComponent(`Hi GEN TECH KA Team,

I would like to discuss a project:

Name: ${e.fullName}
Company: ${e.company||"N/A"}
Phone: ${e.phone}
Services: ${e.services.join(", ")}
Budget Tier: ${e.budget}
Timeline: ${e.timeline}
Preferred Contact: ${e.preferredContact}

Description:
${e.description}

Looking forward to your response.`);return`mailto:hello@gentechka.com?subject=${M}&body=${C}`},y=()=>{Pe.playHover();const M=`GEN TECH KA Enquiry [${o==null?void 0:o.id}]
Client: ${e.fullName}
Services: ${e.services.join(", ")}
Budget: ${e.budget}`;navigator.clipboard.writeText(M),d(!0),setTimeout(()=>d(!1),2e3)};return u.jsxs("section",{id:"contact",className:"relative w-full py-24 sm:py-32 bg-[#050817] overflow-hidden border-t border-white/5",children:[u.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[700px] bg-gradient-to-tr from-[#087BFF]/15 via-[#5715A8]/20 to-[#00C8FF]/10 blur-[150px] pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 cyber-grid opacity-25 pointer-events-none"}),u.jsxs("div",{className:"relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16 sm:mb-20",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00C8FF] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,200,255,0.2)]",children:[u.jsx(Ni,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"DIRECT ARCHITECTURE PIPELINE"})]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl lg:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight mb-4",children:["HAVE AN IDEA?"," ",u.jsx("span",{className:"bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-clip-text text-transparent glow-neon",children:"LET'S MAKE IT REAL."})]}),u.jsx("p",{className:"text-sm sm:text-base font-inter text-[#9CA6C5] max-w-xl mx-auto",children:"Your next big digital idea deserves more than just a conversation. Let's build something extraordinary together."})]}),u.jsx("div",{className:"rounded-3xl border border-[#00C8FF]/30 bg-[#0A1025]/90 p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden",children:o?u.jsxs("div",{className:"space-y-6 text-center py-6 animate-fade-in",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00C8FF] to-[#087BFF] flex items-center justify-center text-[#050817] mx-auto shadow-[0_0_30px_rgba(0,200,255,0.5)]",children:u.jsx($m,{className:"w-8 h-8"})}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("span",{className:"text-xs font-mono text-[#FFC229] uppercase tracking-widest",children:"TRANSMISSION SUCCESSFUL"}),u.jsxs("h3",{className:"text-2xl sm:text-3xl font-space font-extrabold text-[#F5F7FF]",children:["Enquiry Logged Under Ticket #",o.id]}),u.jsxs("p",{className:"text-sm font-inter text-[#9CA6C5] max-w-lg mx-auto",children:["Thank you, ",u.jsx("strong",{className:"text-[#00C8FF]",children:o.data.fullName}),". Our lead engineers review every enquiry within 12 hours."]})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 pt-4",children:[u.jsxs("a",{href:g(),target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-[#050817] font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all",children:[u.jsx(yl,{className:"w-4 h-4"}),u.jsx("span",{children:"DISPATCH ON WHATSAPP NOW"}),u.jsx(ZA,{className:"w-3.5 h-3.5"})]}),u.jsxs("a",{href:S(),className:"w-full sm:w-auto px-6 py-3 rounded-xl bg-[#087BFF] text-white font-space font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(8,123,255,0.4)] hover:scale-105 transition-all",children:[u.jsx(tp,{className:"w-4 h-4"}),u.jsx("span",{children:"OPEN IN EMAIL CLIENT"})]}),u.jsxs("button",{onClick:y,className:"w-full sm:w-auto px-4 py-3 rounded-xl border border-white/10 text-xs font-mono text-[#9CA6C5] hover:text-[#F5F7FF] flex items-center justify-center gap-2",children:[u.jsx(YA,{className:"w-4 h-4"}),u.jsx("span",{children:c?"COPIED!":"COPY TICKET"})]})]}),u.jsx("div",{className:"pt-4",children:u.jsx("button",{onClick:()=>l(null),className:"text-xs font-mono text-[#00C8FF] hover:underline",children:"← Submit Another Project Enquiry"})})]}):u.jsxs("form",{onSubmit:h,className:"space-y-8",noValidate:!0,children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:["Full Name ",u.jsx("span",{className:"text-[#FF3366]",children:"*"})]}),u.jsx("input",{type:"text",value:e.fullName,onChange:M=>n({...e,fullName:M.target.value}),placeholder:"e.g. Rahul Sharma",className:`w-full px-4 py-3 rounded-xl bg-[#050817] border text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none transition-all ${i.fullName?"border-[#FF3366] focus:border-[#FF3366]":"border-white/10 focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)]"}`}),i.fullName&&u.jsxs("p",{className:"text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1",children:[u.jsx(ir,{className:"w-3 h-3"})," ",i.fullName]})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:["Email Address ",u.jsx("span",{className:"text-[#FF3366]",children:"*"})]}),u.jsx("input",{type:"email",value:e.email,onChange:M=>n({...e,email:M.target.value}),placeholder:"e.g. rahul@company.com",className:`w-full px-4 py-3 rounded-xl bg-[#050817] border text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none transition-all ${i.email?"border-[#FF3366] focus:border-[#FF3366]":"border-white/10 focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)]"}`}),i.email&&u.jsxs("p",{className:"text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1",children:[u.jsx(ir,{className:"w-3 h-3"})," ",i.email]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:["Phone / WhatsApp Number ",u.jsx("span",{className:"text-[#FF3366]",children:"*"})]}),u.jsx("input",{type:"tel",value:e.phone,onChange:M=>n({...e,phone:M.target.value}),placeholder:"+91 98765 43210",className:`w-full px-4 py-3 rounded-xl bg-[#050817] border text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none transition-all ${i.phone?"border-[#FF3366] focus:border-[#FF3366]":"border-white/10 focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)]"}`}),i.phone&&u.jsxs("p",{className:"text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1",children:[u.jsx(ir,{className:"w-3 h-3"})," ",i.phone]})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:["Company / Brand Name ",u.jsx("span",{className:"text-[#9CA6C5] font-normal",children:"(Optional)"})]}),u.jsx("input",{type:"text",value:e.company,onChange:M=>n({...e,company:M.target.value}),placeholder:"e.g. Apex Tech Lab",className:"w-full px-4 py-3 rounded-xl bg-[#050817] border border-white/10 text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)] transition-all"})]})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:["What service are you looking for? ",u.jsx("span",{className:"text-[#FF3366]",children:"*"})]}),u.jsx("div",{className:"flex flex-wrap gap-2.5",children:m.map(M=>{const C=e.services.includes(M);return u.jsxs("button",{type:"button",onClick:()=>b(M),className:`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${C?"bg-[#00C8FF] text-[#050817] font-bold shadow-[0_0_15px_rgba(0,200,255,0.4)]":"bg-[#050817] text-[#9CA6C5] border border-white/10 hover:border-[#00C8FF]/40 hover:text-[#F5F7FF]"}`,children:[C?"✓ ":"+ ",M]},M)})}),i.services&&u.jsxs("p",{className:"text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1",children:[u.jsx(ir,{className:"w-3 h-3"})," ",i.services]})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:["Estimated Project Budget ",u.jsx("span",{className:"text-[#FF3366]",children:"*"})]}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5",children:f.map(M=>{const C=e.budget===M;return u.jsxs("button",{type:"button",onClick:()=>{Pe.playHover(),n({...e,budget:M}),i.budget&&a({...i,budget:""})},className:`p-3 rounded-xl text-xs font-mono text-left transition-all cursor-pointer ${C?"bg-[#FFC229] text-[#050817] font-bold shadow-[0_0_15px_rgba(255,194,41,0.4)]":"bg-[#050817] text-[#9CA6C5] border border-white/10 hover:border-white/30 hover:text-[#F5F7FF]"}`,children:[u.jsx("div",{className:"text-[10px] opacity-75 uppercase",children:"TIER"}),u.jsx("div",{className:"font-space font-bold mt-0.5",children:M})]},M)})}),i.budget&&u.jsxs("p",{className:"text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1",children:[u.jsx(ir,{className:"w-3 h-3"})," ",i.budget]})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:["Project Description & Vision ",u.jsx("span",{className:"text-[#FF3366]",children:"*"})]}),u.jsx("textarea",{rows:4,value:e.description,onChange:M=>n({...e,description:M.target.value}),placeholder:"Tell us about your venture, what problems you're solving, any benchmark designs or tech requirements...",className:`w-full px-4 py-3 rounded-xl bg-[#050817] border text-sm text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none transition-all ${i.description?"border-[#FF3366] focus:border-[#FF3366]":"border-white/10 focus:border-[#00C8FF] focus:shadow-[0_0_15px_rgba(0,200,255,0.2)]"}`}),i.description&&u.jsxs("p",{className:"text-[11px] font-mono text-[#FF3366] mt-1.5 flex items-center gap-1",children:[u.jsx(ir,{className:"w-3 h-3"})," ",i.description]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:"Expected Timeline"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:p.map(M=>u.jsx("button",{type:"button",onClick:()=>{Pe.playHover(),n({...e,timeline:M})},className:`p-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${e.timeline===M?"bg-[#00C8FF]/20 text-[#00C8FF] border border-[#00C8FF]":"bg-[#050817] text-[#9CA6C5] border border-white/10 hover:border-white/30"}`,children:M},M))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-xs font-mono text-[#F5F7FF] mb-2 uppercase tracking-wider",children:"Preferred Contact Method"}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:_.map(M=>u.jsx("button",{type:"button",onClick:()=>{Pe.playHover(),n({...e,preferredContact:M})},className:`p-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${e.preferredContact===M?"bg-[#00C8FF]/20 text-[#00C8FF] border border-[#00C8FF]":"bg-[#050817] text-[#9CA6C5] border border-white/10 hover:border-white/30"}`,children:M},M))})]})]}),u.jsx("div",{className:"pt-4",children:u.jsx("button",{type:"submit",disabled:s,onMouseEnter:()=>Pe.playHover(),className:"w-full py-4 px-8 rounded-xl font-space font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_30px_rgba(0,200,255,0.4)] hover:shadow-[0_0_40px_rgba(255,194,41,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",children:s?u.jsxs("span",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-4 h-4 border-2 border-[#050817] border-t-transparent rounded-full animate-spin"}),u.jsx("span",{children:"TRANSMITTING ENQUIRY..."})]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"SEND PROJECT ENQUIRY"}),u.jsx(O1,{className:"w-4 h-4 text-[#050817]"})]})})})]})}),u.jsxs("div",{className:"mt-12 grid grid-cols-2 md:grid-cols-4 gap-4",children:[u.jsxs("a",{href:"https://instagram.com/gentechka",target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>Pe.playHover(),className:"p-4 rounded-xl border border-white/5 bg-[#0A1025]/60 hover:border-[#00C8FF]/40 hover:bg-[#00C8FF]/10 transition-colors flex items-center gap-3 text-left group",children:[u.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#050817] border border-white/10 flex items-center justify-center text-[#00C8FF] group-hover:scale-110 transition-transform",children:u.jsx(Z1,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5] uppercase",children:"Instagram"}),u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"@gentechka"})]})]}),u.jsxs("a",{href:"https://wa.me/919876543210",target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>Pe.playHover(),className:"p-4 rounded-xl border border-white/5 bg-[#0A1025]/60 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 transition-colors flex items-center gap-3 text-left group",children:[u.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#050817] border border-white/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform",children:u.jsx(yl,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5] uppercase",children:"WhatsApp"}),u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"+91 98765 43210"})]})]}),u.jsxs("a",{href:"mailto:hello@gentechka.com",onMouseEnter:()=>Pe.playHover(),className:"p-4 rounded-xl border border-white/5 bg-[#0A1025]/60 hover:border-[#087BFF]/40 hover:bg-[#087BFF]/10 transition-colors flex items-center gap-3 text-left group",children:[u.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#050817] border border-white/10 flex items-center justify-center text-[#087BFF] group-hover:scale-110 transition-transform",children:u.jsx(tp,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5] uppercase",children:"Email"}),u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"hello@gentechka.com"})]})]}),u.jsxs("div",{className:"p-4 rounded-xl border border-white/5 bg-[#0A1025]/60 flex items-center gap-3 text-left",children:[u.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#050817] border border-white/10 flex items-center justify-center text-[#FFC229]",children:u.jsx(s2,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("div",{className:"text-[10px] font-mono text-[#9CA6C5] uppercase",children:"Headquarters"}),u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"Karnataka, India 🇮🇳"})]})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const t0="187",A2=0,wx=1,C2=2,nu=1,K1=2,Bo=3,Xs=0,jn=1,Hi=2,Xr=0,il=1,np=2,Rx=3,Nx=4,w2=5,yr=100,R2=101,N2=102,F2=103,D2=104,L2=200,U2=201,O2=202,P2=203,Q1=204,J1=205,I2=206,z2=207,B2=208,H2=209,G2=210,V2=211,k2=212,j2=213,X2=214,ip=0,ap=1,sp=2,Sl=3,rp=4,op=5,lp=6,cp=7,$1=0,W2=1,q2=2,pa=0,eb=1,tb=2,nb=3,n0=4,ib=5,ab=6,sb=7,rb=300,ro=301,bl=302,ld=303,cd=304,up=1e3,fa=1001,fp=1002,_n=1003,Y2=1004,uc=1005,Vn=1006,ud=1007,qa=1008,ei=1009,ob=1010,lb=1011,Ml=1012,i0=1013,Qi=1014,Xi=1015,Ji=1016,a0=1017,s0=1018,oo=1020,cb=35902,ub=35899,fb=1021,db=1022,Wi=1023,ds=1026,Ya=1027,hb=1028,r0=1029,Ws=1030,o0=1031,l0=1033,iu=33776,au=33777,su=33778,ru=33779,dp=35840,hp=35841,pp=35842,mp=35843,gp=36196,xp=37492,vp=37496,_p=37488,yp=37489,Bu=37490,Sp=37491,bp=37808,Mp=37809,Ep=37810,Tp=37811,Ap=37812,Cp=37813,wp=37814,Rp=37815,Np=37816,Fp=37817,Dp=37818,Lp=37819,Up=37820,Op=37821,Pp=36492,Ip=36494,zp=36495,Bp=36283,Hp=36284,Hu=36285,Gp=36286,Z2=3200,Vp=0,K2=1,Ha="",fi="srgb",Gu="srgb-linear",Vu="linear",Mt="srgb",fd=7680,Q2=519,J2=512,$2=513,eC=514,pb=515,tC=516,nC=517,mb=518,gb=519,iC=35044,Fx="300 es",wi=2e3,El=2001;function aC(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ku(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sC(){const t=ku("canvas");return t.style.display="block",t}const Dx={};function Lx(...t){const e="THREE."+t.shift();console.log(e,...t)}function xb(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=xb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function gt(...t){t=xb(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ou(...t){const e=t.join(" ");e in Dx||(Dx[e]=!0,Ie(...t))}function rC(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const oC={[ip]:ip,[sp]:lp,[rp]:rp,[Sl]:op,[ap]:ap,[lp]:sp,[cp]:cp,[op]:Sl};class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,kp=180/Math.PI;function zl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[t&255]+An[t>>8&255]+An[t>>16&255]+An[t>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[n&63|128]+An[n>>8&255]+"-"+An[n>>16&255]+An[n>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function lC(t,e){return(t%e+e)%e}function hd(t,e,n){return(1-n)*t+n*e}function cC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function c0(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uC(t,e){if(e.constructor===Float32Array)return t;const n=c0(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function fC(t,e){if(e.constructor===Float32Array)return t;const n=c0(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const y0=class y0{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};y0.prototype.isVector2=!0;let nt=y0;class _o{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],m=i[a+3],f=s[r+0],p=s[r+1],_=s[r+2],b=s[r+3];if(m!==b||l!==f||c!==p||d!==_){let x=l*f+c*p+d*_+m*b;x<0&&(f=-f,p=-p,_=-_,b=-b,x=-x);let h=1-o;if(x<.9995){const g=Math.acos(x),S=Math.sin(g);h=Math.sin(h*g)/S,o=Math.sin(o*g)/S,l=l*h+f*o,c=c*h+p*o,d=d*h+_*o,m=m*h+b*o}else{l=l*h+f*o,c=c*h+p*o,d=d*h+_*o,m=m*h+b*o;const g=1/Math.sqrt(l*l+c*c+d*d+m*m);l*=g,c*=g,d*=g,m*=g}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],m=s[r],f=s[r+1],p=s[r+2],_=s[r+3];return e[n]=o*_+d*m+l*p-c*f,e[n+1]=l*_+d*f+c*m-o*p,e[n+2]=c*_+d*p+o*f-l*m,e[n+3]=d*_-o*m-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),m=o(s/2),f=l(i/2),p=l(a/2),_=l(s/2);switch(r){case"XYZ":this._x=f*d*m+c*p*_,this._y=c*p*m-f*d*_,this._z=c*d*_+f*p*m,this._w=c*d*m-f*p*_;break;case"YXZ":this._x=f*d*m+c*p*_,this._y=c*p*m-f*d*_,this._z=c*d*_-f*p*m,this._w=c*d*m+f*p*_;break;case"ZXY":this._x=f*d*m-c*p*_,this._y=c*p*m+f*d*_,this._z=c*d*_+f*p*m,this._w=c*d*m-f*p*_;break;case"ZYX":this._x=f*d*m-c*p*_,this._y=c*p*m+f*d*_,this._z=c*d*_-f*p*m,this._w=c*d*m+f*p*_;break;case"YZX":this._x=f*d*m+c*p*_,this._y=c*p*m+f*d*_,this._z=c*d*_-f*p*m,this._w=c*d*m-f*p*_;break;case"XZY":this._x=f*d*m-c*p*_,this._y=c*p*m-f*d*_,this._z=c*d*_+f*p*m,this._w=c*d*m+f*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],m=n[10],f=i+o+m;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(d-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const S0=class S0{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ux.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ux.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),d=2*(o*n-s*a),m=2*(s*i-r*n);return this.x=n+l*c+r*m-o*d,this.y=i+l*d+o*c-s*m,this.z=a+l*m+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};S0.prototype.isVector3=!0;let H=S0;const pd=new H,Ux=new _o,b0=class b0{constructor(e,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c)}set(e,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],m=i[7],f=i[2],p=i[5],_=i[8],b=a[0],x=a[3],h=a[6],g=a[1],S=a[4],y=a[7],M=a[2],C=a[5],v=a[8];return s[0]=r*b+o*g+l*M,s[3]=r*x+o*S+l*C,s[6]=r*h+o*y+l*v,s[1]=c*b+d*g+m*M,s[4]=c*x+d*S+m*C,s[7]=c*h+d*y+m*v,s[2]=f*b+p*g+_*M,s[5]=f*x+p*S+_*C,s[8]=f*h+p*y+_*v,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=d*r-o*c,f=o*l-d*s,p=c*s-r*l,_=n*m+i*f+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=m*b,e[1]=(a*c-d*i)*b,e[2]=(o*i-a*r)*b,e[3]=f*b,e[4]=(d*n-a*l)*b,e[5]=(a*s-o*n)*b,e[6]=p*b,e[7]=(i*l-c*n)*b,e[8]=(r*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(e,n){return ou("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(e,n)),this}rotate(e){return ou("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-e)),this}translate(e,n){return ou("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};b0.prototype.isMatrix3=!0;let ke=b0;const md=new ke,Ox=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Px=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dC(){const t={enabled:!0,workingColorSpace:Gu,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Mt&&(a.r=ma(a.r),a.g=ma(a.g),a.b=ma(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Mt&&(a.r=Wr(a.r),a.g=Wr(a.g),a.b=Wr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ha?Vu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gu]:{primaries:e,whitePoint:i,transfer:Vu,toXYZ:Ox,fromXYZ:Px,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Ox,fromXYZ:Px,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),t}const ft=dC();function ma(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ar;class hC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ar===void 0&&(ar=ku("canvas")),ar.width=e.width,ar.height=e.height;const a=ar.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ar}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ku("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ma(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ma(n[i]/255)*255):n[i]=ma(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pC=0;class u0{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pC++}),this.uuid=zl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(gd(a[r].image)):s.push(gd(a[r]))}else s=gd(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function gd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let mC=0;const xd=new H;class Rn extends $s{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,i=fa,a=fa,s=Vn,r=qa,o=Wi,l=ei,c=Rn.DEFAULT_ANISOTROPY,d=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=zl(),this.name="",this.source=new u0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case up:e.x=e.x-Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case fp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case up:e.y=e.y-Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case fp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=rb;Rn.DEFAULT_ANISOTROPY=1;const M0=class M0{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const l=e.elements,c=l[0],d=l[4],m=l[8],f=l[1],p=l[5],_=l[9],b=l[2],x=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(m-b)<.01&&Math.abs(_-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(m+b)<.1&&Math.abs(_+x)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(p+1)/2,M=(h+1)/2,C=(d+f)/4,v=(m+b)/4,E=(_+x)/4;return S>y&&S>M?S<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(S),a=C/i,s=v/i):y>M?y<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(y),i=C/a,s=E/a):M<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(M),i=v/s,a=E/s),this.set(i,a,s,n),this}let g=Math.sqrt((x-_)*(x-_)+(m-b)*(m-b)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(x-_)/g,this.y=(m-b)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};M0.prototype.isVector4=!0;let jt=M0;class gC extends $s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n),this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=new Rn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new u0(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends gC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vb extends Rn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xC extends Rn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=_n,this.minFilter=_n,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Yu=class Yu{constructor(e,n,i,a,s,r,o,l,c,d,m,f,p,_,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c,d,m,f,p,_,b,x)}set(e,n,i,a,s,r,o,l,c,d,m,f,p,_,b,x){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=a,h[1]=s,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=m,h[14]=f,h[3]=p,h[7]=_,h[11]=b,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),r=1/sr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=r*d,p=r*m,_=o*d,b=o*m;n[0]=l*d,n[4]=-l*m,n[8]=c,n[1]=p+_*c,n[5]=f-b*c,n[9]=-o*l,n[2]=b-f*c,n[6]=_+p*c,n[10]=r*l}else if(e.order==="YXZ"){const f=l*d,p=l*m,_=c*d,b=c*m;n[0]=f+b*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*m,n[5]=r*d,n[9]=-o,n[2]=p*o-_,n[6]=b+f*o,n[10]=r*l}else if(e.order==="ZXY"){const f=l*d,p=l*m,_=c*d,b=c*m;n[0]=f-b*o,n[4]=-r*m,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*d,n[9]=b-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){const f=r*d,p=r*m,_=o*d,b=o*m;n[0]=l*d,n[4]=_*c-p,n[8]=f*c+b,n[1]=l*m,n[5]=b*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*c,_=o*l,b=o*c;n[0]=l*d,n[4]=b-f*m,n[8]=_*m+p,n[1]=m,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*m+_,n[10]=f-b*m}else if(e.order==="XZY"){const f=r*l,p=r*c,_=o*l,b=o*c;n[0]=l*d,n[4]=-m,n[8]=c*d,n[1]=f*m+b,n[5]=r*d,n[9]=p*m-_,n[2]=_*m-p,n[6]=o*d,n[10]=b*m+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vC,e,_C)}lookAt(e,n,i){const a=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ra.crossVectors(i,qn),Ra.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ra.crossVectors(i,qn)),Ra.normalize(),fc.crossVectors(qn,Ra),a[0]=Ra.x,a[4]=fc.x,a[8]=qn.x,a[1]=Ra.y,a[5]=fc.y,a[9]=qn.y,a[2]=Ra.z,a[6]=fc.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],m=i[5],f=i[9],p=i[13],_=i[2],b=i[6],x=i[10],h=i[14],g=i[3],S=i[7],y=i[11],M=i[15],C=a[0],v=a[4],E=a[8],P=a[12],F=a[1],I=a[5],V=a[9],K=a[13],z=a[2],q=a[6],B=a[10],L=a[14],Z=a[3],X=a[7],N=a[11],w=a[15];return s[0]=r*C+o*F+l*z+c*Z,s[4]=r*v+o*I+l*q+c*X,s[8]=r*E+o*V+l*B+c*N,s[12]=r*P+o*K+l*L+c*w,s[1]=d*C+m*F+f*z+p*Z,s[5]=d*v+m*I+f*q+p*X,s[9]=d*E+m*V+f*B+p*N,s[13]=d*P+m*K+f*L+p*w,s[2]=_*C+b*F+x*z+h*Z,s[6]=_*v+b*I+x*q+h*X,s[10]=_*E+b*V+x*B+h*N,s[14]=_*P+b*K+x*L+h*w,s[3]=g*C+S*F+y*z+M*Z,s[7]=g*v+S*I+y*q+M*X,s[11]=g*E+S*V+y*B+M*N,s[15]=g*P+S*K+y*L+M*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],m=e[6],f=e[10],p=e[14],_=e[3],b=e[7],x=e[11],h=e[15],g=l*p-c*f,S=o*p-c*m,y=o*f-l*m,M=r*p-c*d,C=r*f-l*d,v=r*m-o*d;return n*(b*g-x*S+h*y)-i*(_*g-x*M+h*C)+a*(_*S-b*M+h*v)-s*(_*y-b*C+x*v)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(r*d-o*c)-i*(s*d-o*l)+a*(s*c-r*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=e[9],f=e[10],p=e[11],_=e[12],b=e[13],x=e[14],h=e[15],g=n*o-i*r,S=n*l-a*r,y=n*c-s*r,M=i*l-a*o,C=i*c-s*o,v=a*c-s*l,E=d*b-m*_,P=d*x-f*_,F=d*h-p*_,I=m*x-f*b,V=m*h-p*b,K=f*h-p*x,z=g*K-S*V+y*I+M*F-C*P+v*E;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/z;return e[0]=(o*K-l*V+c*I)*q,e[1]=(a*V-i*K-s*I)*q,e[2]=(b*v-x*C+h*M)*q,e[3]=(f*C-m*v-p*M)*q,e[4]=(l*F-r*K-c*P)*q,e[5]=(n*K-a*F+s*P)*q,e[6]=(x*y-_*v-h*S)*q,e[7]=(d*v-f*y+p*S)*q,e[8]=(r*V-o*F+c*E)*q,e[9]=(i*F-n*V-s*E)*q,e[10]=(_*C-b*y+h*g)*q,e[11]=(m*y-d*C-p*g)*q,e[12]=(o*P-r*I-l*E)*q,e[13]=(n*I-i*P+a*E)*q,e[14]=(b*S-_*M-x*g)*q,e[15]=(d*M-m*S+f*g)*q,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,m=o+o,f=s*c,p=s*d,_=s*m,b=r*d,x=r*m,h=o*m,g=l*c,S=l*d,y=l*m,M=i.x,C=i.y,v=i.z;return a[0]=(1-(b+h))*M,a[1]=(p+y)*M,a[2]=(_-S)*M,a[3]=0,a[4]=(p-y)*C,a[5]=(1-(f+h))*C,a[6]=(x+g)*C,a[7]=0,a[8]=(_+S)*v,a[9]=(x-g)*v,a[10]=(1-(f+b))*v,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=sr.set(a[0],a[1],a[2]).length();const o=sr.set(a[4],a[5],a[6]).length(),l=sr.set(a[8],a[9],a[10]).length();s<0&&(r=-r),Si.copy(this);const c=1/r,d=1/o,m=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=d,Si.elements[5]*=d,Si.elements[6]*=d,Si.elements[8]*=m,Si.elements[9]*=m,Si.elements[10]*=m,n.setFromRotationMatrix(Si),i.x=r,i.y=o,i.z=l,this}makePerspective(e,n,i,a,s,r,o=wi,l=!1){const c=this.elements,d=2*s/(n-e),m=2*s/(i-a),f=(n+e)/(n-e),p=(i+a)/(i-a);let _,b;if(l)_=s/(r-s),b=r*s/(r-s);else if(o===wi)_=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===El)_=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,s,r,o=wi,l=!1){const c=this.elements,d=2/(n-e),m=2/(i-a),f=-(n+e)/(n-e),p=-(i+a)/(i-a);let _,b;if(l)_=1/(r-s),b=r/(r-s);else if(o===wi)_=-2/(r-s),b=-(r+s)/(r-s);else if(o===El)_=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Yu.prototype.isMatrix4=!0;let zt=Yu;const sr=new H,Si=new zt,vC=new H(0,0,0),_C=new H(1,1,1),Ra=new H,fc=new H,qn=new H,Ix=new zt,zx=new _o;class hs{constructor(e=0,n=0,i=0,a=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],m=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ix.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ix,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zx.setFromEuler(this),this.setFromQuaternion(zx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class _b{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yC=0;const Bx=new H,rr=new _o,aa=new zt,dc=new H,wo=new H,SC=new H,bC=new _o,Hx=new H(1,0,0),Gx=new H(0,1,0),Vx=new H(0,0,1),kx={type:"added"},MC={type:"removed"},or={type:"childadded",child:null},vd={type:"childremoved",child:null};class pn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yC++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new H,n=new hs,i=new _o,a=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new ke}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _b,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rr.setFromAxisAngle(e,n),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,n){return rr.setFromAxisAngle(e,n),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Hx,e)}rotateY(e){return this.rotateOnAxis(Gx,e)}rotateZ(e){return this.rotateOnAxis(Vx,e)}translateOnAxis(e,n){return Bx.copy(e).applyQuaternion(this.quaternion),this.position.add(Bx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hx,e)}translateY(e){return this.translateOnAxis(Gx,e)}translateZ(e){return this.translateOnAxis(Vx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?dc.copy(e):dc.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(wo,dc,this.up):aa.lookAt(dc,wo,this.up),this.quaternion.setFromRotationMatrix(aa),a&&(aa.extractRotation(a.matrixWorld),rr.setFromRotationMatrix(aa),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kx),or.child=e,this.dispatchEvent(or),or.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(MC),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kx),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,SC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,bC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(n){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),m=r(e.shapes),f=r(e.skeletons),p=r(e.animations),_=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),m.length>0&&(i.shapes=m),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pn.DEFAULT_UP=new H(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lr extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EC={type:"move"};class _d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),h=this._getHandJoint(c,b);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const d=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],f=d.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(EC)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const yb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},hc={h:0,s:0,l:0};function yd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=ft.workingColorSpace){if(e=lC(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=yd(r,s,e+1/3),this.g=yd(r,s,e),this.b=yd(r,s,e-1/3)}return ft.colorSpaceToWorking(this,a),this}setStyle(e,n=fi){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fi){const i=yb[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return ft.workingToColorSpace(Cn.copy(this),e),Math.round(rt(Cn.r*255,0,255))*65536+Math.round(rt(Cn.g*255,0,255))*256+Math.round(rt(Cn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.workingToColorSpace(Cn.copy(this),n);const i=Cn.r,a=Cn.g,s=Cn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const m=r-o;switch(c=d<=.5?m/(r+o):m/(2-r-o),r){case i:l=(a-s)/m+(a<s?6:0);break;case a:l=(s-i)/m+2;break;case s:l=(i-a)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ft.workingColorSpace){return ft.workingToColorSpace(Cn.copy(this),n),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=fi){ft.workingToColorSpace(Cn.copy(this),e);const n=Cn.r,i=Cn.g,a=Cn.b;return e!==fi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+n,Na.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Na),e.getHSL(hc);const i=hd(Na.h,hc.h,n),a=hd(Na.s,hc.s,n),s=hd(Na.l,hc.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new tt;tt.NAMES=yb;class _f{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=n}clone(){return new _f(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sb extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const bi=new H,sa=new H,Sd=new H,ra=new H,lr=new H,cr=new H,jx=new H,bd=new H,Md=new H,Ed=new H,Td=new jt,Ad=new jt,Cd=new jt;class Ai{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),bi.subVectors(e,n),a.cross(bi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){bi.subVectors(a,n),sa.subVectors(i,n),Sd.subVectors(e,n);const r=bi.dot(bi),o=bi.dot(sa),l=bi.dot(Sd),c=sa.dot(sa),d=sa.dot(Sd),m=r*c-o*o;if(m===0)return s.set(0,0,0),null;const f=1/m,p=(c*l-o*d)*f,_=(r*d-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(e,n,i,a,s,r,o,l){return this.getBarycoord(e,n,i,a,ra)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ra.x),l.addScaledVector(r,ra.y),l.addScaledVector(o,ra.z),l)}static getInterpolatedAttribute(e,n,i,a,s,r){return Td.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),Td.fromBufferAttribute(e,n),Ad.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Td,s.x),r.addScaledVector(Ad,s.y),r.addScaledVector(Cd,s.z),r}static isFrontFacing(e,n,i,a){return bi.subVectors(i,n),sa.subVectors(e,n),bi.cross(sa).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),bi.cross(sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return Ai.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,o;lr.subVectors(a,i),cr.subVectors(s,i),bd.subVectors(e,i);const l=lr.dot(bd),c=cr.dot(bd);if(l<=0&&c<=0)return n.copy(i);Md.subVectors(e,a);const d=lr.dot(Md),m=cr.dot(Md);if(d>=0&&m<=d)return n.copy(a);const f=l*m-d*c;if(f<=0&&l>=0&&d<=0&&l-d>0)return r=l/(l-d),n.copy(i).addScaledVector(lr,r);Ed.subVectors(e,s);const p=lr.dot(Ed),_=cr.dot(Ed);if(_>=0&&p<=_)return n.copy(s);const b=p*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(cr,o);const x=d*_-p*m;if(x<=0&&m-d>=0&&p-_>=0)return jx.subVectors(s,a),o=(m-d)/(m-d+(p-_)),n.copy(a).addScaledVector(jx,o);const h=1/(x+b+f);return r=b*h,o=f*h,n.copy(i).addScaledVector(lr,r).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bl{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Mi):Mi.fromBufferAttribute(s,r),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),mc.subVectors(this.max,Ro),ur.subVectors(e.a,Ro),fr.subVectors(e.b,Ro),dr.subVectors(e.c,Ro),Fa.subVectors(fr,ur),Da.subVectors(dr,fr),bs.subVectors(ur,dr);let n=[0,-Fa.z,Fa.y,0,-Da.z,Da.y,0,-bs.z,bs.y,Fa.z,0,-Fa.x,Da.z,0,-Da.x,bs.z,0,-bs.x,-Fa.y,Fa.x,0,-Da.y,Da.x,0,-bs.y,bs.x,0];return!wd(n,ur,fr,dr,mc)||(n=[1,0,0,0,1,0,0,0,1],!wd(n,ur,fr,dr,mc))?!1:(gc.crossVectors(Fa,Da),n=[gc.x,gc.y,gc.z],wd(n,ur,fr,dr,mc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oa=[new H,new H,new H,new H,new H,new H,new H,new H],Mi=new H,pc=new Bl,ur=new H,fr=new H,dr=new H,Fa=new H,Da=new H,bs=new H,Ro=new H,mc=new H,gc=new H,Ms=new H;function wd(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){Ms.fromArray(t,s);const o=a.x*Math.abs(Ms.x)+a.y*Math.abs(Ms.y)+a.z*Math.abs(Ms.z),l=e.dot(Ms),c=n.dot(Ms),d=i.dot(Ms);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Zt=new H,xc=new nt;let TC=0;class ss extends $s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=iC,this.updateRanges=[],this.gpuType=Xi,this.version=0,this._normalizationScale=e!==void 0?c0(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xc.fromBufferAttribute(this,n),xc.applyMatrix3(e),this.setXY(n,xc.x,xc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),a=this._normalize(a),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):uC(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):fC(e,this.array)}}class bb extends ss{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mb extends ss{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ht extends ss{constructor(e,n,i){super(new Float32Array(e),n,i)}}const AC=new Bl,No=new H,Rd=new H;class Hl{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AC.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(No,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Rd)),this.expandByPoint(No.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let CC=0;const ci=new zt,Nd=new pn,hr=new H,Yn=new Bl,Fo=new Bl,cn=new H;class nn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CC++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aC(e)?Mb:bb)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,i){return ci.makeTranslation(e,n,i),this.applyMatrix4(ci),this}scale(e,n,i){return ci.makeScale(e,n,i),this.applyMatrix4(ci),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Fo.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Yn.min,Fo.min),Yn.expandByPoint(cn),cn.addVectors(Yn.max,Fo.max),Yn.expandByPoint(cn)):(Yn.expandByPoint(Fo.min),Yn.expandByPoint(Fo.max))}Yn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)cn.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(cn));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)cn.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(e,c),cn.add(hr)),a=Math.max(a,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ss(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new H,l[P]=new H;const d=new H,m=new H,f=new H,p=new nt,_=new nt,b=new nt,x=new H,h=new H;function g(P,F,I){c[P]=c[F]=c[I]=1,d.fromBufferAttribute(i,P),m.fromBufferAttribute(i,F),f.fromBufferAttribute(i,I),p.fromBufferAttribute(s,P),_.fromBufferAttribute(s,F),b.fromBufferAttribute(s,I),m.sub(d),f.sub(d),_.sub(p),b.sub(p);const V=1/(_.x*b.y-b.x*_.y);isFinite(V)&&(x.copy(m).multiplyScalar(b.y).addScaledVector(f,-_.y).multiplyScalar(V),h.copy(f).multiplyScalar(_.x).addScaledVector(m,-b.x).multiplyScalar(V),o[P].add(x),o[F].add(x),o[I].add(x),l[P].add(h),l[F].add(h),l[I].add(h))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,F=S.length;P<F;++P){const I=S[P],V=I.start,K=I.count;for(let z=V,q=V+K;z<q;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new H,M=new H,C=new H,v=new H;function E(P){C.fromBufferAttribute(a,P),v.copy(C);const F=o[P];y.copy(F),y.sub(C.multiplyScalar(C.dot(F))).normalize(),M.crossVectors(v,F);const V=M.dot(l[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,V)}for(let P=0,F=i.count;P<F;++P)c[P]&&E(P);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ss(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new H,s=new H,r=new H,o=new H,l=new H,c=new H,d=new H,m=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),b=e.getX(f+1),x=e.getX(f+2);a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,b),r.fromBufferAttribute(n,x),d.subVectors(r,s),m.subVectors(a,s),d.cross(m),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,x),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),d.subVectors(r,s),m.subVectors(a,s),d.cross(m),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,m=o.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let b=0,x=l.length;b<x;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*d;for(let h=0;h<d;h++)f[_++]=c[p++]}return new ss(f,d,m)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,m=c.length;d<m;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let m=0,f=c.length;m<f;m++){const p=c[m];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],m=s[c];for(let f=0,p=m.length;f<p;f++)d.push(m[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const m=r[c];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fd=new H,wC=new H,RC=new ke;class za{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Fd.subVectors(i,n).cross(wC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Fd),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RC.getNormalMatrix(e),a=this.coplanarPoint(Fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let NC=0;class er extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NC++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=il,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Q1,this.blendDst=J1,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fd,this.stencilZFail=fd,this.stencilZPass=fd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new za().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const la=new H,Dd=new H,vc=new H,_c=new H;class f0{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,la)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=la.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(la.copy(this.origin).addScaledVector(this.direction,n),la.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Dd.copy(e).add(n).multiplyScalar(.5),vc.copy(n).sub(e).normalize(),_c.copy(this.origin).sub(Dd);const s=e.distanceTo(n)*.5,r=-this.direction.dot(vc),o=_c.dot(this.direction),l=-_c.dot(vc),c=_c.lengthSq(),d=Math.abs(1-r*r);let m,f,p,_;if(d>0)if(m=r*l-o,f=r*o-l,_=s*d,m>=0)if(f>=-_)if(f<=_){const b=1/d;m*=b,f*=b,p=m*(m+r*f+2*o)+f*(r*m+f+2*l)+c}else f=s,m=Math.max(0,-(r*f+o)),p=-m*m+f*(f+2*l)+c;else f=-s,m=Math.max(0,-(r*f+o)),p=-m*m+f*(f+2*l)+c;else f<=-_?(m=Math.max(0,-(-r*s+o)),f=m>0?-s:Math.min(Math.max(-s,-l),s),p=-m*m+f*(f+2*l)+c):f<=_?(m=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(m=Math.max(0,-(r*s+o)),f=m>0?s:Math.min(Math.max(-s,-l),s),p=-m*m+f*(f+2*l)+c);else f=r>0?-s:s,m=Math.max(0,-(r*f+o)),p=-m*m+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),a&&a.copy(Dd).addScaledVector(vc,f),p}intersectSphere(e,n){if(e.radius<0)return null;la.subVectors(e.center,this.origin);const i=la.dot(this.direction),a=la.dot(la)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),m>=0?(o=(e.min.z-f.z)*m,l=(e.max.z-f.z)*m):(o=(e.max.z-f.z)*m,l=(e.min.z-f.z)*m),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,la)!==null}intersectTriangle(e,n,i,a,s){const r=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,m=e.x-r.x,f=e.y-r.y,p=e.z-r.z,_=n.x-r.x,b=n.y-r.y,x=n.z-r.z,h=i.x-r.x,g=i.y-r.y,S=i.z-r.z,y=Math.abs(l),M=Math.abs(c),C=Math.abs(d);let v,E,P,F,I,V,K,z,q,B,L,Z;if(y>=M&&y>=C?(P=l,V=m,q=_,Z=h,l>=0?(v=c,E=d,F=f,I=p,K=b,z=x,B=g,L=S):(v=d,E=c,F=p,I=f,K=x,z=b,B=S,L=g)):M>=C?(P=c,V=f,q=b,Z=g,c>=0?(v=d,E=l,F=p,I=m,K=x,z=_,B=S,L=h):(v=l,E=d,F=m,I=p,K=_,z=x,B=h,L=S)):(P=d,V=p,q=x,Z=S,d>=0?(v=l,E=c,F=m,I=f,K=_,z=b,B=h,L=g):(v=c,E=l,F=f,I=m,K=b,z=_,B=g,L=h)),P===0)return null;const X=v/P,N=E/P,w=1/P,ee=F-X*V,ce=I-N*V,G=K-X*q,ne=z-N*q,re=B-X*Z,oe=L-N*Z,se=re*ne-oe*G,Te=ee*oe-ce*re,Ve=G*ce-ne*ee;if(a){if(se<0||Te<0||Ve<0)return null}else if((se<0||Te<0||Ve<0)&&(se>0||Te>0||Ve>0))return null;const be=se+Te+Ve;if(be===0)return null;const Le=w*(se*V+Te*q+Ve*Z);return(be>0?Le<0:Le>0)?null:this.at(Le/be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ps extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=$1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xx=new zt,Es=new f0,yc=new Hl,Wx=new H,Sc=new H,bc=new H,Mc=new H,Ld=new H,Ec=new H,qx=new H,Tc=new H;class Kt extends pn{constructor(e=new nn,n=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],m=s[l];d!==0&&(Ld.fromBufferAttribute(m,e),r?Ec.addScaledVector(Ld,d):Ec.addScaledVector(Ld.sub(n),d))}n.add(Ec)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(s),Es.copy(e.ray).recast(e.near),!(yc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(yc,Wx)===null||Es.origin.distanceToSquared(Wx)>(e.far-e.near)**2))&&(Xx.copy(s).invert(),Es.copy(e.ray).applyMatrix4(Xx),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Es)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,b=f.length;_<b;_++){const x=f[_],h=r[x.materialIndex],g=Math.max(x.start,p.start),S=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let y=g,M=S;y<M;y+=3){const C=o.getX(y),v=o.getX(y+1),E=o.getX(y+2);a=Ac(this,h,e,i,c,d,m,C,v,E),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let x=_,h=b;x<h;x+=3){const g=o.getX(x),S=o.getX(x+1),y=o.getX(x+2);a=Ac(this,r,e,i,c,d,m,g,S,y),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,b=f.length;_<b;_++){const x=f[_],h=r[x.materialIndex],g=Math.max(x.start,p.start),S=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let y=g,M=S;y<M;y+=3){const C=y,v=y+1,E=y+2;a=Ac(this,h,e,i,c,d,m,C,v,E),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=x.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let x=_,h=b;x<h;x+=3){const g=x,S=x+1,y=x+2;a=Ac(this,r,e,i,c,d,m,g,S,y),a&&(a.faceIndex=Math.floor(x/3),n.push(a))}}}}function FC(t,e,n,i,a,s,r,o){let l;if(e.side===jn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===Xs,o),l===null)return null;Tc.copy(o),Tc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Tc);return c<n.near||c>n.far?null:{distance:c,point:Tc.clone(),object:t}}function Ac(t,e,n,i,a,s,r,o,l,c){t.getVertexPosition(o,Sc),t.getVertexPosition(l,bc),t.getVertexPosition(c,Mc);const d=FC(t,e,n,i,Sc,bc,Mc,qx);if(d){const m=new H;Ai.getBarycoord(qx,Sc,bc,Mc,m),a&&(d.uv=Ai.getInterpolatedAttribute(a,o,l,c,m,new nt)),s&&(d.uv1=Ai.getInterpolatedAttribute(s,o,l,c,m,new nt)),r&&(d.normal=Ai.getInterpolatedAttribute(r,o,l,c,m,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};Ai.getNormal(Sc,bc,Mc,f.normal),d.face=f,d.barycoord=m}return d}class DC extends Rn{constructor(e=null,n=1,i=1,a,s,r,o,l,c=_n,d=_n,m,f){super(null,r,o,l,c,d,a,s,m,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ts=new Hl,LC=new nt(.5,.5),Cc=new H;class Tl{constructor(e=new za,n=new za,i=new za,a=new za,s=new za,r=new za){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi,i=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],m=s[5],f=s[6],p=s[7],_=s[8],b=s[9],x=s[10],h=s[11],g=s[12],S=s[13],y=s[14],M=s[15];if(a[0].setComponents(c-r,p-d,h-_,M-g).normalize(),a[1].setComponents(c+r,p+d,h+_,M+g).normalize(),a[2].setComponents(c+o,p+m,h+b,M+S).normalize(),a[3].setComponents(c-o,p-m,h-b,M-S).normalize(),i)a[4].setComponents(l,f,x,y).normalize(),a[5].setComponents(c-l,p-f,h-x,M-y).normalize();else if(a[4].setComponents(c-l,p-f,h-x,M-y).normalize(),n===wi)a[5].setComponents(c+l,p+f,h+x,M+y).normalize();else if(n===El)a[5].setComponents(l,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const n=LC.distanceTo(e.center);return Ts.radius=.7071067811865476+n,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Cc.x=a.normal.x>0?e.max.x:e.min.x,Cc.y=a.normal.y>0?e.max.y:e.min.y,Cc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Yx=new zt;class d0{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let a=0;a<n.length;a++){const s=n[a];Yx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[a]===void 0&&(i[a]=new Tl),i[a].setFromProjectionMatrix(Yx,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let a=0;a<e._count;a++)n[a]===void 0&&(n[a]=new Tl),n[a].copy(i[a]);return this._count=e._count,this}clone(){return new d0().copy(this)}}class Ur extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ju=new H,Xu=new H,Zx=new zt,Do=new f0,wc=new Hl,Ud=new H,Kx=new H;class Ho extends pn{constructor(e=new nn,n=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)ju.fromBufferAttribute(n,a-1),Xu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=ju.distanceTo(Xu);e.setAttribute("lineDistance",new Ht(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(a),wc.radius+=s,e.ray.intersectsSphere(wc)===!1)return;Zx.copy(a).invert(),Do.copy(e.ray).applyMatrix4(Zx);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,r.start),_=Math.min(d.count,r.start+r.count);for(let b=p,x=_-1;b<x;b+=c){const h=d.getX(b),g=d.getX(b+1),S=Rc(this,e,Do,l,h,g,b);S&&n.push(S)}if(this.isLineLoop){const b=d.getX(_-1),x=d.getX(p),h=Rc(this,e,Do,l,b,x,_-1);h&&n.push(h)}}else{const p=Math.max(0,r.start),_=Math.min(f.count,r.start+r.count);for(let b=p,x=_-1;b<x;b+=c){const h=Rc(this,e,Do,l,b,b+1,b);h&&n.push(h)}if(this.isLineLoop){const b=Rc(this,e,Do,l,_-1,p,_-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rc(t,e,n,i,a,s,r){const o=t.geometry.attributes.position;if(ju.fromBufferAttribute(o,a),Xu.fromBufferAttribute(o,s),n.distanceSqToSegment(ju,Xu,Ud,Kx)>i)return;Ud.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Ud);if(!(c<e.near||c>e.far))return{distance:c,point:Kx.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Qx=new H,Jx=new H;class UC extends Ho{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let a=0,s=n.count;a<s;a+=2)Qx.fromBufferAttribute(n,a),Jx.fromBufferAttribute(n,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Qx.distanceTo(Jx);e.setAttribute("lineDistance",new Ht(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eb extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $x=new zt,jp=new f0,Nc=new Hl,Fc=new H;class OC extends pn{constructor(e=new nn,n=new Eb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(a),Nc.radius+=s,e.ray.intersectsSphere(Nc)===!1)return;$x.copy(a).invert(),jp.copy(e.ray).applyMatrix4($x);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,m=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let _=f,b=p;_<b;_++){const x=c.getX(_);Fc.fromBufferAttribute(m,x),ev(Fc,x,l,a,e,n,this)}}else{const f=Math.max(0,r.start),p=Math.min(m.count,r.start+r.count);for(let _=f,b=p;_<b;_++)Fc.fromBufferAttribute(m,_),ev(Fc,_,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ev(t,e,n,i,a,s,r){const o=jp.distanceSqToPoint(t);if(o<n){const l=new H;jp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Tb extends Rn{constructor(e=[],n=ro,i,a,s,r,o,l,c,d){super(e,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PC extends Rn{constructor(e,n,i,a,s,r,o,l,c){super(e,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lo extends Rn{constructor(e,n,i=Qi,a,s,r,o=_n,l=_n,c,d=ds,m=1){if(d!==ds&&d!==Ya)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:m};super(f,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new u0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Ab extends lo{constructor(e,n=Qi,i=ro,a,s,r=_n,o=_n,l,c=ds){const d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,n,i,a,s,r,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cb extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rs extends nn{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],m=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,r,s,0),_("z","y","x",1,-1,i,n,-e,r,s,1),_("x","z","y",1,1,e,i,n,a,r,2),_("x","z","y",1,-1,e,i,-n,a,r,3),_("x","y","z",1,-1,e,n,i,a,s,4),_("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(m,2));function _(b,x,h,g,S,y,M,C,v,E,P){const F=y/v,I=M/E,V=y/2,K=M/2,z=C/2,q=v+1,B=E+1;let L=0,Z=0;const X=new H;for(let N=0;N<B;N++){const w=N*I-K;for(let ee=0;ee<q;ee++){const ce=ee*F-V;X[b]=ce*g,X[x]=w*S,X[h]=z,c.push(X.x,X.y,X.z),X[b]=0,X[x]=0,X[h]=C>0?1:-1,d.push(X.x,X.y,X.z),m.push(ee/v),m.push(1-N/E),L+=1}}for(let N=0;N<E;N++)for(let w=0;w<v;w++){const ee=f+w+q*N,ce=f+w+q*(N+1),G=f+(w+1)+q*(N+1),ne=f+(w+1)+q*N;l.push(ee,ce,ne),l.push(ce,G,ne),Z+=6}o.addGroup(p,Z,P),p+=Z,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yf extends nn{constructor(e=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new Ht(s,3)),this.setAttribute("normal",new Ht(s.slice(),3)),this.setAttribute("uv",new Ht(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const S=new H,y=new H,M=new H;for(let C=0;C<n.length;C+=3)p(n[C+0],S),p(n[C+1],y),p(n[C+2],M),l(S,y,M,g)}function l(g,S,y,M){const C=M+1,v=[];for(let E=0;E<=C;E++){v[E]=[];const P=g.clone().lerp(y,E/C),F=S.clone().lerp(y,E/C),I=C-E;for(let V=0;V<=I;V++)V===0&&E===C?v[E][V]=P:v[E][V]=P.clone().lerp(F,V/I)}for(let E=0;E<C;E++)for(let P=0;P<2*(C-E)-1;P++){const F=Math.floor(P/2);P%2===0?(f(v[E][F+1]),f(v[E+1][F]),f(v[E][F])):(f(v[E][F+1]),f(v[E+1][F+1]),f(v[E+1][F]))}}function c(g){const S=new H;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(g),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function d(){const g=new H;for(let S=0;S<s.length;S+=3){g.x=s[S+0],g.y=s[S+1],g.z=s[S+2];const y=x(g)/2/Math.PI+.5,M=h(g)/Math.PI+.5;r.push(y,1-M)}_(),m()}function m(){for(let g=0;g<r.length;g+=6){const S=r[g+0],y=r[g+2],M=r[g+4],C=Math.max(S,y,M),v=Math.min(S,y,M);C>.9&&v<.1&&(S<.2&&(r[g+0]+=1),y<.2&&(r[g+2]+=1),M<.2&&(r[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,S){const y=g*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function _(){const g=new H,S=new H,y=new H,M=new H,C=new nt,v=new nt,E=new nt;for(let P=0,F=0;P<s.length;P+=9,F+=6){g.set(s[P+0],s[P+1],s[P+2]),S.set(s[P+3],s[P+4],s[P+5]),y.set(s[P+6],s[P+7],s[P+8]),C.set(r[F+0],r[F+1]),v.set(r[F+2],r[F+3]),E.set(r[F+4],r[F+5]),M.copy(g).add(S).add(y).divideScalar(3);const I=x(M);b(C,F+0,g,I),b(v,F+2,S,I),b(E,F+4,y,I)}}function b(g,S,y,M){M<0&&g.x===1&&(r[S]=g.x-1),y.x===0&&y.z===0&&(r[S]=M/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yf(e.vertices,e.indices,e.radius,e.detail)}}class h0 extends yf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,a=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-i,0,-a,i,0,a,-i,0,a,i,-a,-i,0,-a,i,0,a,-i,0,a,i,0,-i,0,-a,i,0,-a,-i,0,a,i,0,a],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new h0(e.radius,e.detail)}}class IC{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,a=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),s+=i.distanceTo(a),n.push(s),a=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let a=0;const s=i.length;let r;n?r=n:r=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(a=Math.floor(o+(l-o)/2),c=i[a]-r,c<0)o=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===r)return a/(s-1);const d=i[a],f=i[a+1]-d,p=(r-d)/f;return(a+p)/(s-1)}getTangent(e,n){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const r=this.getPoint(a),o=this.getPoint(s),l=n||(r.isVector2?new nt:new H);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new H,a=[],s=[],r=[],o=new H,l=new zt;for(let p=0;p<=e;p++){const _=p/e;a[p]=this.getTangentAt(_,new H)}s[0]=new H,r[0]=new H;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),m=Math.abs(a[0].y),f=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),m<=c&&(c=m,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(a[p-1],a[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(rt(a[p-1].dot(a[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,_))}r[p].crossVectors(a[p],s[p])}if(n===!0){let p=Math.acos(rt(s[0].dot(s[e]),-1,1));p/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(a[_],p*_)),r[_].crossVectors(a[_],s[_])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}function p0(){let t=0,e=0,n=0,i=0;function a(s,r,o,l){t=s,e=o,n=-3*s+3*r-2*o-l,i=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){a(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,d,m){let f=(r-s)/c-(o-s)/(c+d)+(o-r)/d,p=(o-r)/d-(l-r)/(d+m)+(l-o)/m;f*=d,p*=d,a(r,o,f,p)},calc:function(s){const r=s*s,o=r*s;return t+e*s+n*r+i*o}}}const tv=new H,nv=new H,Od=new p0,Pd=new p0,Id=new p0;class Dc extends IC{constructor(e=[],n=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=a}getPoint(e,n=new H){const i=n,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=a[(o-1)%s]:(nv.subVectors(a[0],a[1]).add(a[0]),c=nv);const m=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?d=a[(o+2)%s]:(tv.subVectors(a[s-1],a[s-2]).add(a[s-1]),d=tv),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(m),p),b=Math.pow(m.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p);b<1e-4&&(b=1),_<1e-4&&(_=b),x<1e-4&&(x=b),Od.initNonuniformCatmullRom(c.x,m.x,f.x,d.x,_,b,x),Pd.initNonuniformCatmullRom(c.y,m.y,f.y,d.y,_,b,x),Id.initNonuniformCatmullRom(c.z,m.z,f.z,d.z,_,b,x)}else this.curveType==="catmullrom"&&(Od.initCatmullRom(c.x,m.x,f.x,d.x,this.tension),Pd.initCatmullRom(c.y,m.y,f.y,d.y,this.tension),Id.initCatmullRom(c.z,m.z,f.z,d.z,this.tension));return i.set(Od.calc(l),Pd.calc(l),Id.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const a=e.points[n];this.points.push(new H().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class m0 extends yf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new m0(e.radius,e.detail)}}class Gl extends nn{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,m=e/o,f=n/l,p=[],_=[],b=[],x=[];for(let h=0;h<d;h++){const g=h*f-r;for(let S=0;S<c;S++){const y=S*m-s;_.push(y,-g,0),b.push(0,0,1),x.push(S/o),x.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const S=g+c*h,y=g+c*(h+1),M=g+1+c*(h+1),C=g+1+c*h;p.push(S,y,C),p.push(y,M,C)}this.setIndex(p),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(b,3)),this.setAttribute("uv",new Ht(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}class g0 extends nn{constructor(e=.5,n=1,i=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:a,thetaStart:s,thetaLength:r},i=Math.max(3,i),a=Math.max(1,a);const o=[],l=[],c=[],d=[];let m=e;const f=(n-e)/a,p=new H,_=new nt;for(let b=0;b<=a;b++){for(let x=0;x<=i;x++){const h=s+x/i*r;p.x=m*Math.cos(h),p.y=m*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,d.push(_.x,_.y)}m+=f}for(let b=0;b<a;b++){const x=b*(i+1);for(let h=0;h<i;h++){const g=h+x,S=g,y=g+i+1,M=g+i+2,C=g+1;o.push(S,y,C),o.push(y,M,C)}}this.setIndex(o),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new g0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class x0 extends nn{constructor(e=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const d=[],m=new H,f=new H,p=[],_=[],b=[],x=[];for(let h=0;h<=i;h++){const g=[],S=h/i,y=r+S*o,M=e*Math.cos(y),C=Math.sqrt(e*e-M*M);let v=0;h===0&&r===0?v=.5/n:h===i&&l===Math.PI&&(v=-.5/n);for(let E=0;E<=n;E++){const P=E/n,F=a+P*s;m.x=-C*Math.cos(F),m.y=M,m.z=C*Math.sin(F),_.push(m.x,m.y,m.z),f.copy(m).normalize(),b.push(f.x,f.y,f.z),x.push(P+v,1-S),g.push(c++)}d.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){const S=d[h][g+1],y=d[h][g],M=d[h+1][g],C=d[h+1][g+1];(h!==0||r>0)&&p.push(S,y,C),(h!==i-1||l<Math.PI)&&p.push(y,M,C)}this.setIndex(p),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(b,3)),this.setAttribute("uv",new Ht(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new x0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wu extends nn{constructor(e=1,n=.4,i=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},i=Math.floor(i),a=Math.floor(a);const l=[],c=[],d=[],m=[],f=new H,p=new H,_=new H;for(let b=0;b<=i;b++){const x=r+b/i*o;for(let h=0;h<=a;h++){const g=h/a*s;p.x=(e+n*Math.cos(x))*Math.cos(g),p.y=(e+n*Math.cos(x))*Math.sin(g),p.z=n*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(g),f.y=e*Math.sin(g),_.subVectors(p,f).normalize(),d.push(_.x,_.y,_.z),m.push(h/a),m.push(b/i)}}for(let b=1;b<=i;b++)for(let x=1;x<=a;x++){const h=(a+1)*b+x-1,g=(a+1)*(b-1)+x-1,S=(a+1)*(b-1)+x,y=(a+1)*b+x;l.push(h,g,y),l.push(g,S,y)}this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(iv(a))a.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(iv(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function Un(t){const e={};for(let n=0;n<t.length;n++){const i=co(t[n]);for(const a in i)e[a]=i[a]}return e}function iv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function zC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wb(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const BC={clone:co,merge:Un};var HC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qs extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HC,this.fragmentShader=GC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=zC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(a.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new H().fromArray(a.value);break;case"v4":this.uniforms[i].value=new jt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(a.value);break;case"m4":this.uniforms[i].value=new zt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VC extends qs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Go extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kC extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jC extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class v0 extends pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const zd=new zt,av=new H,sv=new H;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;av.setFromMatrixPosition(e.matrixWorld),n.position.copy(av),sv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sv),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,a){zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(zd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;e.coordinateSystem===El||e.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lc=new H,Uc=new _o,Oi=new H;class Nb extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Uc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Uc,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Lc,Uc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Uc,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const La=new H,rv=new nt,ov=new nt;class Jn extends Nb{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kp*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(La.x,La.y).multiplyScalar(-e/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-e/La.z)}getViewSize(e,n){return this.getViewBounds(e,rv,ov),n.subVectors(ov,rv)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(dd*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class XC extends Rb{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class lv extends v0{constructor(e,n,i=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new XC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Fb extends Nb{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class WC extends Rb{constructor(){super(new Fb(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bd extends v0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new WC}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Db extends v0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const pr=-90,mr=1;class Xp extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Jn(pr,mr,e,n);a.layers=this.layers,this.add(a);const s=new Jn(pr,mr,e,n);s.layers=this.layers,this.add(s);const r=new Jn(pr,mr,e,n);r.layers=this.layers,this.add(r);const o=new Jn(pr,mr,e,n);o.layers=this.layers,this.add(o);const l=new Jn(pr,mr,e,n);l.layers=this.layers,this.add(l);const c=new Jn(pr,mr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(m,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qC extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Lb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class YC extends UC{constructor(e=10,n=10,i=4473924,a=8947848){i=new tt(i),a=new tt(a);const s=n/2,r=e/n,o=e/2,l=[],c=[];for(let f=0,p=0,_=-o;f<=n;f++,_+=r){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const b=f===s?i:a;b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3,b.toArray(c,p),p+=3}const d=new nn;d.setAttribute("position",new Ht(l,3)),d.setAttribute("color",new Ht(c,3));const m=new Ur({vertexColors:!0,toneMapped:!1});super(d,m),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function cv(t,e,n,i){const a=ZC(i);switch(n){case fb:return t*e;case hb:return t*e/a.components*a.byteLength;case r0:return t*e/a.components*a.byteLength;case Ws:return t*e*2/a.components*a.byteLength;case o0:return t*e*2/a.components*a.byteLength;case db:return t*e*3/a.components*a.byteLength;case Wi:return t*e*4/a.components*a.byteLength;case l0:return t*e*4/a.components*a.byteLength;case iu:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case su:case ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hp:case mp:return Math.max(t,16)*Math.max(e,8)/4;case dp:case pp:return Math.max(t,8)*Math.max(e,8)/2;case gp:case xp:case _p:case yp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vp:case Bu:case Sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Np:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Up:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Op:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pp:case Ip:case zp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bp:case Hp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hu:case Gp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZC(t){switch(t){case ei:case ob:return{byteLength:1,components:1};case Ml:case lb:case Ji:return{byteLength:2,components:1};case a0:case s0:return{byteLength:2,components:4};case Qi:case i0:case Xi:return{byteLength:4,components:1};case cb:case ub:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:t0}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=t0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ub(){let t=null,e=!1,n=null,i=null;function a(s,r){i=t.requestAnimationFrame(a),n(s,r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KC(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,m=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){const d=l.array,m=l.updateRanges;if(t.bindBuffer(c,o),m.length===0)t.bufferSubData(c,0,d);else{m.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<m.length;p++){const _=m[f],b=m[p];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,m[f]=b)}m.length=f+1;for(let p=0,_=m.length;p<_;p++){const b=m[p];t.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var QC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$C=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ow=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_w=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Aw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ww=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ow=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,kw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ww=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jw=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$w=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u3=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,A3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:QC,alphahash_pars_fragment:JC,alphamap_fragment:$C,alphamap_pars_fragment:ew,alphatest_fragment:tw,alphatest_pars_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:aw,batching_pars_vertex:sw,batching_vertex:rw,begin_vertex:ow,beginnormal_vertex:lw,bsdfs:cw,iridescence_fragment:uw,bumpmap_pars_fragment:fw,clipping_planes_fragment:dw,clipping_planes_pars_fragment:hw,clipping_planes_pars_vertex:pw,clipping_planes_vertex:mw,color_fragment:gw,color_pars_fragment:xw,color_pars_vertex:vw,color_vertex:_w,common:yw,defaultnormal_vertex:Sw,displacementmap_pars_vertex:bw,displacementmap_vertex:Mw,emissivemap_fragment:Ew,emissivemap_pars_fragment:Tw,colorspace_fragment:Aw,colorspace_pars_fragment:Cw,envmap_fragment:ww,envmap_common_pars_fragment:Rw,envmap_pars_fragment:Nw,envmap_pars_vertex:Fw,envmap_physical_pars_fragment:Vw,envmap_vertex:Dw,fog_vertex:Lw,fog_pars_vertex:Uw,fog_fragment:Ow,fog_pars_fragment:Pw,gradientmap_pars_fragment:Iw,lightmap_pars_fragment:zw,lights_lambert_fragment:Bw,lights_lambert_pars_fragment:Hw,lights_pars_begin:Gw,lights_toon_fragment:kw,lights_toon_pars_fragment:jw,lights_phong_fragment:Xw,lights_phong_pars_fragment:Ww,lights_physical_fragment:qw,lights_physical_pars_fragment:Yw,lights_fragment_begin:Zw,lights_fragment_maps:Kw,lights_fragment_end:Qw,lightprobes_pars_fragment:Jw,logdepthbuf_fragment:$w,logdepthbuf_pars_fragment:e3,logdepthbuf_pars_vertex:t3,logdepthbuf_vertex:n3,map_fragment:i3,map_pars_fragment:a3,map_particle_fragment:s3,map_particle_pars_fragment:r3,metalnessmap_fragment:o3,metalnessmap_pars_fragment:l3,morphinstance_vertex:c3,morphcolor_vertex:u3,morphnormal_vertex:f3,morphtarget_pars_vertex:d3,morphtarget_vertex:h3,normal_fragment_begin:p3,normal_fragment_maps:m3,normal_pars_fragment:g3,normal_pars_vertex:x3,normal_vertex:v3,normalmap_pars_fragment:_3,clearcoat_normal_fragment_begin:y3,clearcoat_normal_fragment_maps:S3,clearcoat_pars_fragment:b3,iridescence_pars_fragment:M3,opaque_fragment:E3,packing:T3,premultiplied_alpha_fragment:A3,project_vertex:C3,dithering_fragment:w3,dithering_pars_fragment:R3,roughnessmap_fragment:N3,roughnessmap_pars_fragment:F3,shadowmap_pars_fragment:D3,shadowmap_pars_vertex:L3,shadowmap_vertex:U3,shadowmask_pars_fragment:O3,skinbase_vertex:P3,skinning_pars_vertex:I3,skinning_vertex:z3,skinnormal_vertex:B3,specularmap_fragment:H3,specularmap_pars_fragment:G3,tonemapping_fragment:V3,tonemapping_pars_fragment:k3,transmission_fragment:j3,transmission_pars_fragment:X3,uv_pars_fragment:W3,uv_pars_vertex:q3,uv_vertex:Y3,worldpos_vertex:Z3,background_vert:K3,background_frag:Q3,backgroundCube_vert:J3,backgroundCube_frag:$3,cube_vert:eR,cube_frag:tR,depth_vert:nR,depth_frag:iR,distance_vert:aR,distance_frag:sR,equirect_vert:rR,equirect_frag:oR,linedashed_vert:lR,linedashed_frag:cR,meshbasic_vert:uR,meshbasic_frag:fR,meshlambert_vert:dR,meshlambert_frag:hR,meshmatcap_vert:pR,meshmatcap_frag:mR,meshnormal_vert:gR,meshnormal_frag:xR,meshphong_vert:vR,meshphong_frag:_R,meshphysical_vert:yR,meshphysical_frag:SR,meshtoon_vert:bR,meshtoon_frag:MR,points_vert:ER,points_frag:TR,shadow_vert:AR,shadow_frag:CR,sprite_vert:wR,sprite_frag:RR},Ee={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},zi={basic:{uniforms:Un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Un([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Un([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Un([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Un([Ee.points,Ee.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Un([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Un([Ee.common,Ee.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Un([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Un([Ee.sprite,Ee.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Un([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Un([Ee.lights,Ee.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};zi.physical={uniforms:Un([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Oc={r:0,b:0,g:0},NR=new zt,Ob=new ke;Ob.set(-1,0,0,0,1,0,0,0,1);function FR(t,e,n,i,a,s){const r=new tt(0);let o=a===!0?0:1,l,c,d=null,m=0,f=null;function p(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){const y=g.backgroundBlurriness>0;S=e.get(S,y)}return S}function _(g){let S=!1;const y=p(g);y===null?x(r,o):y&&y.isColor&&(x(y,1),S=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(g,S){const y=p(S);y&&y.isCubeTexture?(c===void 0&&(c=new Kt(new rs(1,1,1),new qs({name:"BackgroundCubeMaterial",uniforms:co(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NR.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ob),c.material.toneMapped=ft.getTransfer(y.colorSpace)!==Mt,(d!==y||m!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,m=y.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Kt(new Gl(2,2),new qs({name:"BackgroundMaterial",uniforms:co(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||m!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,m=y.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,S){g.getRGB(Oc,wb(t)),n.buffers.color.setClear(Oc.r,Oc.g,Oc.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,S=1){r.set(g),o=S,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,x(r,o)},render:_,addToRenderList:b,dispose:h}}function DR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=f(null);let s=a,r=!1;function o(I,V,K,z,q){let B=!1;const L=m(I,z,K,V);s!==L&&(s=L,c(s.object)),B=p(I,z,K,q),B&&_(I,z,K,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(B||r)&&(r=!1,y(I,V,K,z),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function d(I){return t.deleteVertexArray(I)}function m(I,V,K,z){const q=z.wireframe===!0;let B=i[V.id];B===void 0&&(B={},i[V.id]=B);const L=I.isInstancedMesh===!0?I.id:0;let Z=B[L];Z===void 0&&(Z={},B[L]=Z);let X=Z[K.id];X===void 0&&(X={},Z[K.id]=X);let N=X[q];return N===void 0&&(N=f(l()),X[q]=N),N}function f(I){const V=[],K=[],z=[];for(let q=0;q<n;q++)V[q]=0,K[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:z,object:I,attributes:{},index:null}}function p(I,V,K,z){const q=s.attributes,B=V.attributes;let L=0;const Z=K.getAttributes();for(const X in Z)if(Z[X].location>=0){const w=q[X];let ee=B[X];if(ee===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),w===void 0||w.attribute!==ee||ee&&w.data!==ee.data)return!0;L++}return s.attributesNum!==L||s.index!==z}function _(I,V,K,z){const q={},B=V.attributes;let L=0;const Z=K.getAttributes();for(const X in Z)if(Z[X].location>=0){let w=B[X];w===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(w=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(w=I.instanceColor));const ee={};ee.attribute=w,w&&w.data&&(ee.data=w.data),q[X]=ee,L++}s.attributes=q,s.attributesNum=L,s.index=z}function b(){const I=s.newAttributes;for(let V=0,K=I.length;V<K;V++)I[V]=0}function x(I){h(I,0)}function h(I,V){const K=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;K[I]=1,z[I]===0&&(t.enableVertexAttribArray(I),z[I]=1),q[I]!==V&&(t.vertexAttribDivisor(I,V),q[I]=V)}function g(){const I=s.newAttributes,V=s.enabledAttributes;for(let K=0,z=V.length;K<z;K++)V[K]!==I[K]&&(t.disableVertexAttribArray(K),V[K]=0)}function S(I,V,K,z,q,B,L){L===!0?t.vertexAttribIPointer(I,V,K,q,B):t.vertexAttribPointer(I,V,K,z,q,B)}function y(I,V,K,z){b();const q=z.attributes,B=K.getAttributes(),L=V.defaultAttributeValues;for(const Z in B){const X=B[Z];if(X.location>=0){let N=q[Z];if(N===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(N=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(N=I.instanceColor)),N!==void 0){const w=N.normalized,ee=N.itemSize,ce=e.get(N);if(ce===void 0)continue;const G=ce.buffer,ne=ce.type,re=ce.bytesPerElement,oe=ne===t.INT||ne===t.UNSIGNED_INT||N.gpuType===i0;if(N.isInterleavedBufferAttribute){const se=N.data,Te=se.isInterleavedBuffer===!0?se.stride:se.itemSize,Ve=N.offset;if(se.isInstancedInterleavedBuffer||se.isInstancedBufferAttribute){for(let be=0;be<X.locationSize;be++)h(X.location+be,se.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<X.locationSize;be++)x(X.location+be);t.bindBuffer(t.ARRAY_BUFFER,G);for(let be=0;be<X.locationSize;be++)S(X.location+be,ee/X.locationSize,ne,w,Te*re,(Ve+ee/X.locationSize*be)*re,oe)}else{if(N.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)h(X.location+se,N.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let se=0;se<X.locationSize;se++)x(X.location+se);t.bindBuffer(t.ARRAY_BUFFER,G);for(let se=0;se<X.locationSize;se++)S(X.location+se,ee/X.locationSize,ne,w,ee*re,ee/X.locationSize*se*re,oe)}}else if(L!==void 0){const w=L[Z];if(w!==void 0)switch(w.length){case 2:t.vertexAttrib2fv(X.location,w);break;case 3:t.vertexAttrib3fv(X.location,w);break;case 4:t.vertexAttrib4fv(X.location,w);break;default:t.vertexAttrib1fv(X.location,w)}}}}g()}function M(){P();for(const I in i){const V=i[I];for(const K in V){const z=V[K];for(const q in z){const B=z[q];for(const L in B)d(B[L].object),delete B[L];delete z[q]}}delete i[I]}}function C(I){if(i[I.id]===void 0)return;const V=i[I.id];for(const K in V){const z=V[K];for(const q in z){const B=z[q];for(const L in B)d(B[L].object),delete B[L];delete z[q]}}delete i[I.id]}function v(I){for(const V in i){const K=i[V];for(const z in K){const q=K[z];if(q[I.id]===void 0)continue;const B=q[I.id];for(const L in B)d(B[L].object),delete B[L];delete q[I.id]}}}function E(I){for(const V in i){const K=i[V],z=I.isInstancedMesh===!0?I.id:0,q=K[z];if(q!==void 0){for(const B in q){const L=q[B];for(const Z in L)d(L[Z].object),delete L[Z];delete q[B]}delete K[z],Object.keys(K).length===0&&delete i[V]}}}function P(){F(),r=!0,s!==a&&(s=a,c(s.object))}function F(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:P,resetDefaultState:F,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:v,initAttributes:b,enableAttribute:x,disableUnusedAttributes:g}}function LR(t,e,n){let i;function a(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let p=0;p<d;p++)f+=c[p];n.update(f,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function UR(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(v){return!(v!==Wi&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const E=v===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==ei&&v!==Xi&&!E&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&m===!1;n.reversedDepthBuffer===!0&&m===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&m===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:y,maxSamples:M,samples:C}}function OR(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new za,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const p=m.length!==0||f||i!==0||a;return a=f,i=m.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){n=d(m,f,0)},this.setState=function(m,f,p){const _=m.clippingPlanes,b=m.clipIntersection,x=m.clipShadows,h=t.get(m);if(!a||_===null||_.length===0||s&&!x)s?d(null):c();else{const g=s?0:i,S=g*4;let y=h.clippingState||null;l.value=y,y=d(_,f,S,p);for(let M=0;M!==S;++M)y[M]=n[M];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(m,f,p,_){const b=m!==null?m.length:0;let x=null;if(b!==0){if(x=l.value,_!==!0||x===null){const h=p+b*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<h)&&(x=new Float32Array(h));for(let S=0,y=p;S!==b;++S,y+=4)r.copy(m[S]).applyMatrix4(g,o),r.normal.toArray(x,y),x[y+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}class _0 extends Zi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Tb(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new rs(5,5,5),s=new qs({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:Xr});s.uniforms.tEquirect.value=n;const r=new Kt(a,s),o=n.minFilter;return n.minFilter===qa&&(n.minFilter=Vn),new Xp(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}const uv=256,PR=3,IR=20,Pb=256,Ib=16,zR=3,BR=new H,HR=new tt;class qu{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xp(1,10,null),this._boxMesh=new Kt(new rs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=BR}=s,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),d=this._getSourceTarget(!0);n>0&&(d.texture.mipmapsAutoUpdate=!1);const m=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(HR));const x=new Xp(i,a,d);return x.position.copy(o),x.update(l,e),l.autoClear=m,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=_,e.background=b,n>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(uv,cC(e))}_fromTexture(e,n){e.mapping===ro||e.mapping===bl?this._setSize(e.image.length===0?uv:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=fv(e,!1,!1),i=Math.log2(e)-PR;for(let a=0;a<=i;a++)n.texture.mipmaps.push({width:e>>a,height:e>>a});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=fv(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const a=this._boxMesh,s=this._cubeCamera;a.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const r=e.width>>n;e.viewport.set(0,0,r,r),s.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===ro||e.mapping===bl?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dv()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=GR(),this._integrationMaterial=VR());const n=this._cubeSize,i=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Ib);for(let r=0;r<=i;r++){const o=qu.lodToRoughness(r,i);if(r>i-zR)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Pb*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=kR());const i=this._blurMaterial,a=i.uniforms,s=this._sourceTarget;a.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,a.envMap.value=s.texture,this._renderCube(e,0,i),a.envMap.value=e.texture,this._renderCube(s,0,i)}}function fv(t,e,n){return new _0(t,{minFilter:qa,generateMipmaps:e,type:Ji,colorSpace:Gu,depthBuffer:n})}function Vl(t,e,n){return new qs({name:t,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:n,side:jn,blending:Xr,depthTest:!1,depthWrite:!1})}function GR(){return Vl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pb}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function VR(){return Vl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ib}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kR(){return Vl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${IR}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function dv(){return Vl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function hv(){return Vl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jR(t){let e=new WeakMap,n=new WeakMap,i=null;function a(f,p=!1){return f==null?null:p?r(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===ld||p===cd)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const b=new _0(_.height);return b.fromEquirectangularTexture(t,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const p=f.mapping,_=p===ld||p===cd,b=p===ro||p===bl;if(_||b){let x=n.get(f);const h=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new qu(t)),x=_?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{const g=f.image;return _&&g&&g.height>0||b&&g&&l(g)?(i===null&&(i=new qu(t)),x=_?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",d),x.texture):null}}}return f}function o(f,p){return p===ld?f.mapping=ro:p===cd&&(f.mapping=bl),f}function l(f){let p=0;const _=6;for(let b=0;b<_;b++)f[b]!==void 0&&p++;return p===_}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:m}}function XR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&ou("WebGLRenderer: "+i+" extension not supported."),a}}}function WR(t,e,n,i){const a={},s=new WeakMap,r=new FinalizationRegistry(_=>delete a[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const x in _.attributes)e.remove(_.attributes[x]);_.removeEventListener("dispose",o),delete a[_.id],r.unregister(_);const b=s.get(_);b&&(e.remove(b),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(_,b){return a[b.id]!==void 0||(b.addEventListener("dispose",o),a[b.id]=new WeakRef(b),r.register(b,b.id,b),n.memory.geometries++),b}function d(_){const b=_.attributes;for(const x in b)e.update(b[x],t.ARRAY_BUFFER)}function m(_){const b=_.index,x=_.attributes.position;let h=0;if(x===void 0)return;const g=b!==null?b.array.length:x.array.length/3-1,S=x.count>=65535?Mb:bb,y=new S(Math.ceil(g/3)*6,1),M=y.array;if(b!==null){const v=b.array;h=b.version;for(let E=0,P=0;E<g;E+=3){const F=v[E+0],I=v[E+1],V=v[E+2];M[P++]=F,M[P++]=I,M[P++]=I,M[P++]=V,M[P++]=V,M[P++]=F}}else{h=x.version;for(let v=0,E=0;v<g;v+=3){const P=v+0,F=v+1,I=v+2;M[E++]=P,M[E++]=F,M[E++]=F,M[E++]=I,M[E++]=I,M[E++]=P}}y.version=h;const C=s.get(_);C&&e.remove(C),s.set(_,y)}function f(_){const b=s.get(_);if(b){const x=_.index;x!==null&&b.version<x.version&&m(_)}else m(_);return s.get(_)}function p(){for(const _ in a){const b=a[_].deref();b!==void 0&&l(b)}}return{get:c,update:d,getWireframeAttribute:f,dispose:p}}function qR(t,e,n){let i;function a(m){i=m}let s,r;function o(m){s=m.type,r=m.bytesPerElement}function l(m,f){t.drawElements(i,f,s,m*r),n.update(f,i,1)}function c(m,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,m*r,p),n.update(f,i,p))}function d(m,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,m,0,p);let b=0;for(let x=0;x<p;x++)b+=f[x];n.update(b,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function YR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:gt("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function ZR(t,e,n){const i=new WeakMap,a=new jt;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==m){let F=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var p=F;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),b===!0&&(y=2),x===!0&&(y=3);let M=o.attributes.position.count*y,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const v=new Float32Array(M*C*4*m),E=new vb(v,M,C,m);E.type=Xi,E.needsUpdate=!0;const P=y*4;for(let I=0;I<m;I++){const V=h[I],K=g[I],z=S[I],q=M*C*4*I;for(let B=0;B<V.count;B++){const L=B*P;_===!0&&(a.fromBufferAttribute(V,B),v[q+L+0]=a.x,v[q+L+1]=a.y,v[q+L+2]=a.z,v[q+L+3]=0),b===!0&&(a.fromBufferAttribute(K,B),v[q+L+4]=a.x,v[q+L+5]=a.y,v[q+L+6]=a.z,v[q+L+7]=0),x===!0&&(a.fromBufferAttribute(z,B),v[q+L+8]=a.x,v[q+L+9]=a.y,v[q+L+10]=a.z,v[q+L+11]=z.itemSize===4?a.w:1)}}f={count:m,texture:E,size:new nt(M,C)},i.set(o,f),o.addEventListener("dispose",F)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let _=0;for(let x=0;x<c.length;x++)_+=c[x];const b=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",b),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function KR(t,e,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,m=c.geometry,f=e.get(c,m);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return f}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const QR={[eb]:"LINEAR_TONE_MAPPING",[tb]:"REINHARD_TONE_MAPPING",[nb]:"CINEON_TONE_MAPPING",[n0]:"ACES_FILMIC_TONE_MAPPING",[ab]:"AGX_TONE_MAPPING",[sb]:"NEUTRAL_TONE_MAPPING",[ib]:"CUSTOM_TONE_MAPPING"};function JR(t,e,n,i,a,s){const r=new Zi(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new nn;d.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const m=new VC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Kt(d,m),p=new Fb(-1,1,1,-1,0,1);let _=null,b=null,x=!1,h,g=null,S=[],y=!1;this.setSize=function(M,C){r.setSize(M,C),o!==null&&o.setSize(M,C),l!==null&&l.setSize(M,C);for(let v=0;v<S.length;v++){const E=S[v];E.setSize&&E.setSize(M,C)}},this.setEffects=function(M){S=M,y=S.length>0&&S[0].isRenderPass===!0;const C=r.width,v=r.height;S.length>0&&o===null&&(o=new Zi(C,v,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),l=new Zi(C,v,{type:Ji,depthBuffer:!1,stencilBuffer:!1}));const E=a===!0&&S.some(P=>P.needsDepthTexture===!0);E!==(r.depthTexture!==null)&&(E===!0&&c===null&&(c=new lo(C,v),s===!0&&(c.format=Ya,c.type=oo)),r.dispose(),r.depthTexture=E?c:null,r.resolveDepthBuffer=E,r.storeMultisampledDepthBuffer=E);for(let P=0;P<S.length;P++){const F=S[P];F.setSize&&F.setSize(C,v),E&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(c)}},this.begin=function(M,C){if(x||M.toneMapping===pa&&S.length===0)return!1;if(g=C,C!==null){const v=C.width,E=C.height;(r.width!==v||r.height!==E)&&this.setSize(v,E)}return y===!1&&M.setRenderTarget(r),h=M.toneMapping,M.toneMapping=pa,!0},this.hasRenderPass=function(){return y},this.end=function(M,C){M.toneMapping=h,x=!0;let v=r,E=o;for(let P=0;P<S.length;P++){const F=S[P];F.enabled!==!1&&(F.render(M,E,v,C),F.needsSwap!==!1&&(v=E,E=E===o?l:o))}if(_!==M.outputColorSpace||b!==M.toneMapping){_=M.outputColorSpace,b=M.toneMapping,m.defines={},ft.getTransfer(_)===Mt&&(m.defines.SRGB_TRANSFER="");const P=QR[b];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(g),M.render(f,p),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),m.dispose()}}const zb=new Rn,Bb=new lo(1,1),Hb=new Ab(1),Gb=new vb,Vb=new xC,kb=new Tb,pv=[],mv=[],gv=new Float32Array(16),xv=new Float32Array(9),vv=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=pv[a];if(s===void 0&&(s=new Float32Array(a),pv[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sf(t,e){let n=mv[e];n===void 0&&(n=new Int32Array(e),mv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $R(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function tN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function nN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function iN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;vv.set(i),t.uniformMatrix2fv(this.addr,!1,vv),rn(n,i)}}function aN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;xv.set(i),t.uniformMatrix3fv(this.addr,!1,xv),rn(n,i)}}function sN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;gv.set(i),t.uniformMatrix4fv(this.addr,!1,gv),rn(n,i)}}function rN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function lN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function cN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function uN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function dN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function hN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function bf(t){return t.version===0&&(t.compareFunction=gb,t.needsUpdate=!0),t}function pN(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?s=bf(Bb):s=zb,n.setTexture2D(e||s,a)}function mN(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||Vb,a)}function gN(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=bf(Hb):s=kb,n.setTextureCube(e||s,a)}function xN(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||Gb,a)}function vN(t){switch(t){case 5126:return $R;case 35664:return eN;case 35665:return tN;case 35666:return nN;case 35674:return iN;case 35675:return aN;case 35676:return sN;case 5124:case 35670:return rN;case 35667:case 35671:return oN;case 35668:case 35672:return lN;case 35669:case 35673:return cN;case 5125:return uN;case 36294:return fN;case 36295:return dN;case 36296:return hN;case 35678:case 36198:case 36298:case 36306:case 35682:return pN;case 35679:case 36299:case 36307:return mN;case 35680:case 36300:case 36308:case 36293:return gN;case 36289:case 36303:case 36311:case 36292:return xN}}function _N(t,e){t.uniform1fv(this.addr,e)}function yN(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function SN(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function bN(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function MN(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function EN(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TN(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AN(t,e){t.uniform1iv(this.addr,e)}function CN(t,e){t.uniform2iv(this.addr,e)}function wN(t,e){t.uniform3iv(this.addr,e)}function RN(t,e){t.uniform4iv(this.addr,e)}function NN(t,e){t.uniform1uiv(this.addr,e)}function FN(t,e){t.uniform2uiv(this.addr,e)}function DN(t,e){t.uniform3uiv(this.addr,e)}function LN(t,e){t.uniform4uiv(this.addr,e)}function UN(t,e,n){const i=this.cache,a=e.length,s=Sf(n,a);sn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=bf(Bb):r=zb;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||r,s[o])}function ON(t,e,n){const i=this.cache,a=e.length,s=Sf(n,a);sn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||Vb,s[r])}function PN(t,e,n){const i=this.cache,a=e.length,s=Sf(n,a);sn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));let r;this.type===t.SAMPLER_CUBE_SHADOW?r=bf(Hb):r=kb;for(let o=0;o!==a;++o)n.setTextureCube(e[o]||r,s[o])}function IN(t,e,n){const i=this.cache,a=e.length,s=Sf(n,a);sn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||Gb,s[r])}function zN(t){switch(t){case 5126:return _N;case 35664:return yN;case 35665:return SN;case 35666:return bN;case 35674:return MN;case 35675:return EN;case 35676:return TN;case 5124:case 35670:return AN;case 35667:case 35671:return CN;case 35668:case 35672:return wN;case 35669:case 35673:return RN;case 5125:return NN;case 36294:return FN;case 36295:return DN;case 36296:return LN;case 35678:case 36198:case 36298:case 36306:case 35682:return UN;case 35679:case 36299:case 36307:return ON;case 35680:case 36300:case 36308:case 36293:return PN;case 36289:case 36303:case 36311:case 36292:return IN}}class BN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vN(n.type)}}class HN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zN(n.type)}}class GN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,n[o.id],i)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function _v(t,e){t.seq.push(e),t.map[e.id]=e}function VN(t,e,n){const i=t.name,a=i.length;for(Hd.lastIndex=0;;){const s=Hd.exec(i),r=Hd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){_v(n,c===void 0?new BN(o,t,e):new HN(o,t,e));break}else{let m=n.map[o];m===void 0&&(m=new GN(o),_v(n,m)),n=m}}}class lu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);VN(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function yv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kN=37297;let jN=0;function XN(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const Sv=new ke;function WN(t){ft._getMatrix(Sv,ft.workingColorSpace,t);const e=`mat3( ${Sv.elements.map(n=>n.toFixed(4))} )`;switch(ft.getTransfer(t)){case Vu:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+XN(t.getShaderSource(e),o)}else return s}function qN(t,e){const n=WN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const YN={[eb]:"Linear",[tb]:"Reinhard",[nb]:"Cineon",[n0]:"ACESFilmic",[ab]:"AgX",[sb]:"Neutral",[ib]:"Custom"};function ZN(t,e){const n=YN[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pc=new H;function KN(){ft.getLuminanceCoefficients(Pc);const t=Pc.x.toFixed(4),e=Pc.y.toFixed(4),n=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function JN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $N(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function Vo(t){return t!==""}function Mv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ev(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eF=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(t){return t.replace(eF,tF)}function tF(t,e){const n=Je[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wp(n)}const nF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(t){return t.replace(nF,iF)}function iF(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Av(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const aF={[nu]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function sF(t){return aF[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rF={[bl]:"ENVMAP_MODE_REFRACTION"};function oF(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":rF[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const lF={[$1]:"ENVMAP_BLENDING_MULTIPLY",[W2]:"ENVMAP_BLENDING_MIX",[q2]:"ENVMAP_BLENDING_ADD"};function cF(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":lF[t.combine]||"ENVMAP_BLENDING_NONE"}function uF(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=sF(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=oF(n),m=cF(n),f=QN(n),p=JN(s),_=a.createProgram();let b,x,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Vo).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Vo).join(`
`),x.length>0&&(x+=`
`)):(b=[Av(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),x=[Av(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pa?"#define TONE_MAPPING":"",n.toneMapping!==pa?Je.tonemapping_pars_fragment:"",n.toneMapping!==pa?ZN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,qN("linearToOutputTexel",n.outputColorSpace),KN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),r=Wp(r),r=Mv(r,n),r=Ev(r,n),o=Wp(o),o=Mv(o,n),o=Ev(o,n),r=Tv(r),o=Tv(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",n.glslVersion===Fx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const g=h+b+r,S=h+x+o,y=yv(a,a.VERTEX_SHADER,g),M=yv(a,a.FRAGMENT_SHADER,S);a.attachShader(_,y),a.attachShader(_,M),n.index0AttributeName!==void 0?a.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function C(F){if(t.debug.checkShaderErrors){const I=a.getProgramInfoLog(_)||"",V=a.getShaderInfoLog(y)||"",K=a.getShaderInfoLog(M)||"",z=I.trim(),q=V.trim(),B=K.trim();let L=!0,Z=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,_,y,M);else{const X=bv(a,y,"vertex"),N=bv(a,M,"fragment");gt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+X+`
`+N)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(q===""||B==="")&&(Z=!1);Z&&(F.diagnostics={runnable:L,programLog:z,vertexShader:{log:q,prefix:b},fragmentShader:{log:B,prefix:x}})}a.deleteShader(y),a.deleteShader(M),v=new lu(a,_),E=$N(a,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=a.getProgramParameter(_,kN)),P},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jN++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=M,this}let fF=0;class dF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hF(e),n.set(e,i)),i}}class hF{constructor(e){this.id=fF++,this.code=e,this.usedTimes=0}}function pF(t){return t===Ws||t===Bu||t===Hu}function mF(t,e,n,i,a,s){const r=new _b,o=new dF,l=new Set,c=[],d=new Map,m=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,P,F,I,V){const K=F.fog,z=I.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,L=e.get(v.envMap||q,B),Z=f[v.type];let X=i.precision;v.precision!==null&&(X=i.getMaxPrecision(v.precision),X!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",X,"instead."));const N=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,w=N!==void 0?N.length:0;let ee=0;z.morphAttributes.position!==void 0&&(ee=1),z.morphAttributes.normal!==void 0&&(ee=2),z.morphAttributes.color!==void 0&&(ee=3);let ce,G,ne,re;if(Z){const Me=zi[Z];ce=Me.vertexShader,G=Me.fragmentShader}else{ce=v.vertexShader,G=v.fragmentShader;const Me=o.getVertexShaderStage(v),bt=o.getFragmentShaderStage(v);o.update(v,Me,bt),ne=Me.id,re=bt.id}const oe=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),Te=I.isInstancedMesh===!0,Ve=I.isBatchedMesh===!0,be=!!v.map,Le=!!v.matcap,Be=!!L,le=Be&&L.isPMREMTexture===!0,pe=!!v.aoMap,De=!!v.lightMap,qe=!!v.bumpMap&&v.wireframe===!1,Ye=!!v.normalMap,Dt=!!v.displacementMap,We=!!v.emissiveMap,dt=!!v.metalnessMap,Bt=!!v.roughnessMap,Ct=v.anisotropy>0,U=v.clearcoat>0,_t=v.diffuseRoughness>0,ut=v.dispersion>0,it=v.retroreflectivity>0,de=v.iridescence>0,yt=v.sheen>0,Ue=v.transmission>0,ze=Ct&&!!v.anisotropyMap,R=U&&!!v.clearcoatMap,T=U&&!!v.clearcoatNormalMap,j=U&&!!v.clearcoatRoughnessMap,ue=_t&&!!v.diffuseRoughnessMap,ae=de&&!!v.iridescenceMap,me=de&&!!v.iridescenceThicknessMap,ye=yt&&!!v.sheenColorMap,J=yt&&!!v.sheenRoughnessMap,$=!!v.specularMap,xe=!!v.specularColorMap,D=!!v.specularIntensityMap,te=Ue&&!!v.transmissionMap,Q=Ue&&!!v.thicknessMap,ve=!!v.gradientMap,he=!!v.alphaMap,ge=v.alphaTest>0,Fe=!!v.alphaHash,Qe=!!v.extensions;let fe=pa;v.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(fe=t.toneMapping);const Oe=le?L.isCompressedCubeTexture?L.image[0].mipmaps:L.mipmaps:null,Ke={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:ce,fragmentShader:G,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:X,batching:Ve,batchingColor:Ve&&I._colorsTexture!==null,instancing:Te,instancingColor:Te&&I.instanceColor!==null,instancingMorph:Te&&I.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:be,matcap:Le,envMap:Be,envMapMode:Be&&L.mapping,envMapPMREM:le,envMapMaxLod:le?Oe.length-1:null,envMapSize:le?Oe[0].width:null,aoMap:pe,lightMap:De,bumpMap:qe,normalMap:Ye,displacementMap:Dt,emissiveMap:We,normalMapObjectSpace:Ye&&v.normalMapType===K2,normalMapTangentSpace:Ye&&v.normalMapType===Vp,packedNormalMap:Ye&&v.normalMapType===Vp&&pF(v.normalMap.format),metalnessMap:dt,roughnessMap:Bt,anisotropy:Ct,anisotropyMap:ze,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:j,diffuseRoughness:_t,diffuseRoughnessMap:ue,dispersion:ut,retroreflection:it,iridescence:de,iridescenceMap:ae,iridescenceThicknessMap:me,sheen:yt,sheenColorMap:ye,sheenRoughnessMap:J,specularMap:$,specularColorMap:xe,specularIntensityMap:D,transmission:Ue,transmissionMap:te,thicknessMap:Q,gradientMap:ve,opaque:v.transparent===!1&&v.blending===il&&v.alphaToCoverage===!1,alphaMap:he,alphaTest:ge,alphaHash:Fe,combine:v.combine,mapUv:be&&p(v.map.channel),aoMapUv:pe&&p(v.aoMap.channel),lightMapUv:De&&p(v.lightMap.channel),bumpMapUv:qe&&p(v.bumpMap.channel),normalMapUv:Ye&&p(v.normalMap.channel),displacementMapUv:Dt&&p(v.displacementMap.channel),emissiveMapUv:We&&p(v.emissiveMap.channel),metalnessMapUv:dt&&p(v.metalnessMap.channel),roughnessMapUv:Bt&&p(v.roughnessMap.channel),anisotropyMapUv:ze&&p(v.anisotropyMap.channel),clearcoatMapUv:R&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(v.sheenRoughnessMap.channel),specularMapUv:$&&p(v.specularMap.channel),specularColorMapUv:xe&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:te&&p(v.transmissionMap.channel),thicknessMapUv:Q&&p(v.thicknessMap.channel),alphaMapUv:he&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ye||Ct),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(be||he),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&Ye===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:se,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:ee,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.filter(Me=>Me.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:fe,decodeVideoTexture:be&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===Mt,decodeVideoTextureEmissive:We&&v.emissiveMap.isVideoTexture===!0&&ft.getTransfer(v.emissiveMap.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hi,flipSided:v.side===jn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Qe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&v.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function b(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(E,v),h(E,v),E.push(t.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapPMREM),v.push(E.envMapMaxLod),v.push(E.envMapSize),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.diffuseRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.numLightProbeGrids),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function h(v,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.diffuseRoughness&&r.enable(25),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function g(v){const E=f[v.type];let P;if(E){const F=zi[E];P=BC.clone(F.uniforms)}else P=v.uniforms;return P}function S(v,E){let P=d.get(E);return P!==void 0?++P.usedTimes:(P=new uF(t,E,v,a),c.push(P),d.set(E,P)),P}function y(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:g,acquireProgram:S,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:C}}function gF(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function a(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function xF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Cv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wv(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,b,x,h){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:_,materialVariant:r(f),groupOrder:b,renderOrder:f.renderOrder,z:x,group:h},t[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=_,g.materialVariant=r(f),g.groupOrder=b,g.renderOrder=f.renderOrder,g.z=x,g.group=h),e++,g}function l(f,p,_,b,x,h,g){g.reversedDepth===!0&&(x=-x);const S=o(f,p,_,b,x,h);_.transmission>0?i.push(S):_.transparent===!0?a.push(S):n.push(S)}function c(f,p,_,b,x,h){const g=o(f,p,_,b,x,h);_.transmission>0?i.unshift(g):_.transparent===!0?a.unshift(g):n.unshift(g)}function d(f,p){n.length>1&&n.sort(f||xF),i.length>1&&i.sort(p||Cv),a.length>1&&a.sort(p||Cv)}function m(){for(let f=e,p=t.length;f<p;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:m,sort:d}}function vF(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new wv,t.set(i,[r])):a>=s.length?(r=new wv,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function _F(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new H,color:new tt};break;case"SpotLight":n={position:new H,direction:new H,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function yF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let SF=0;function bF(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MF(t){const e=new _F,n=yF(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const a=new H,s=new zt,r=new zt;function o(c){let d=0,m=0,f=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,_=0,b=0,x=0,h=0,g=0,S=0,y=0,M=0,C=0,v=0,E=0,P=0,F=0;c.sort(bF);for(let V=0,K=c.length;V<K;V++){const z=c[V],q=z.color,B=z.intensity,L=z.distance;let Z=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ws?Z=z.shadow.map.texture:Z=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)d+=q.r*B,m+=q.g*B,f+=q.b*B;else if(z.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(z.sh.coefficients[X],B);F++}else if(z.isSunLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const N=z.shadow,w=n.get(z);w.shadowIntensity=N.intensity,w.shadowBias=N.bias,w.shadowNormalBias=N.normalBias,w.shadowRadius=N.radius,w.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),i.sunShadow[_]=w,i.sunShadowMap[_]=Z;const ee=N.getViewportCount();for(let ce=0;ce<ee;ce++)i.sunShadowMatrix[b+ce]=N.getMatrix(ce),i.sunShadowCascade[b+ce]=N._cascadeData[ce];b+=ee,_++}i.sun[p]=X,p++}else if(z.isDirectionalLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const N=z.shadow,w=n.get(z);w.shadowIntensity=N.intensity,w.shadowBias=N.bias,w.shadowNormalBias=N.normalBias,w.shadowRadius=N.radius,w.shadowMapSize=N.mapSize,i.directionalShadow[x]=w,i.directionalShadowMap[x]=Z,i.directionalShadowMatrix[x]=z.shadow.matrix,M++}i.directional[x]=X,x++}else if(z.isSpotLight){const X=e.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(q).multiplyScalar(B),X.distance=L,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,i.spot[g]=X;const N=z.shadow;if(z.map&&(i.spotLightMap[E]=z.map,E++,N.updateMatrices(z),z.castShadow&&P++),i.spotLightMatrix[g]=N.matrix,z.castShadow){const w=n.get(z);w.shadowIntensity=N.intensity,w.shadowBias=N.bias,w.shadowNormalBias=N.normalBias,w.shadowRadius=N.radius,w.shadowMapSize=N.mapSize,i.spotShadow[g]=w,i.spotShadowMap[g]=Z,v++}g++}else if(z.isRectAreaLight){const X=e.get(z);X.color.copy(q).multiplyScalar(B),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=X,S++}else if(z.isPointLight){const X=e.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity),X.distance=z.distance,X.decay=z.decay,z.castShadow){const N=z.shadow,w=n.get(z);w.shadowIntensity=N.intensity,w.shadowBias=N.bias,w.shadowNormalBias=N.normalBias,w.shadowRadius=N.radius,w.shadowMapSize=N.mapSize,w.shadowCameraNear=N.camera.near,w.shadowCameraFar=N.camera.far,i.pointShadow[h]=w,i.pointShadowMap[h]=Z,i.pointShadowMatrix[h]=z.shadow.matrix,C++}i.point[h]=X,h++}else if(z.isHemisphereLight){const X=e.get(z);X.skyColor.copy(z.color).multiplyScalar(B),X.groundColor.copy(z.groundColor).multiplyScalar(B),i.hemi[y]=X,y++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=f;const I=i.hash;(I.sunLength!==p||I.directionalLength!==x||I.pointLength!==h||I.spotLength!==g||I.rectAreaLength!==S||I.hemiLength!==y||I.numSunShadows!==_||I.numDirectionalShadows!==M||I.numPointShadows!==C||I.numSpotShadows!==v||I.numSpotMaps!==E||I.numLightProbes!==F)&&(i.sun.length=p,i.directional.length=x,i.spot.length=g,i.rectArea.length=S,i.point.length=h,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=C,i.pointShadowMap.length=C,i.pointShadowMatrix.length=C,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=F,I.sunLength=p,I.directionalLength=x,I.pointLength=h,I.spotLength=g,I.rectAreaLength=S,I.hemiLength=y,I.numSunShadows=_,I.numDirectionalShadows=M,I.numPointShadows=C,I.numSpotShadows=v,I.numSpotMaps=E,I.numLightProbes=F,i.version=SF++)}function l(c,d){let m=0,f=0,p=0,_=0,b=0,x=0;const h=d.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const y=c[g];if(y.isSunLight){const M=i.sun[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),m++}else if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(h),f++}else if(y.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const M=i.rectArea[b];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),r.identity(),s.copy(y.matrixWorld),s.premultiply(h),r.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),x++}}}return{setup:o,setupView:l,state:i}}function Rv(t){const e=new MF(t),n=[],i=[],a=[];function s(m){d.camera=m,n.length=0,i.length=0,a.length=0}function r(m){m.isLightProbeGrid?a.push(m):n.push(m)}function o(m){i.push(m)}function l(){e.setup(n),a.sort((m,f)=>m.priority-f.priority||m.id-f.id)}function c(m){e.setupView(n,m)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function EF(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Rv(t),e.set(a,[o])):s>=r.length?(o=new Rv(t),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const TF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CF=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],wF=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Nv=new zt,Lo=new H,Gd=new H;function RF(t,e,n){let i=new Tl;const a=new nt,s=new nt,r=new jt,o=new kC,l=new jC,c={},d=n.maxTextureSize,m={[Xs]:jn,[jn]:Xs,[Hi]:Hi},f=new qs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:TF,fragmentShader:AF}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new nn;_.setAttribute("position",new ss(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Kt(_,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let h=this.type;this.render=function(C,v,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===K1&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nu);const P=t.getRenderTarget(),F=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Xr),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const K=h!==this.type;K&&v.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(q=>q.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,q=C.length;z<q;z++){const B=C[z],L=B.shadow;if(L===void 0){Ie("WebGLShadowMap:",B,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;a.copy(L.mapSize);const Z=L.getFrameExtents();a.multiply(Z),s.copy(L.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/Z.x),a.x=s.x*Z.x,L.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/Z.y),a.y=s.y*Z.y,L.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(L.camera._reversedDepth=X,L.map===null||K===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Bo){if(B.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Zi(a.x,a.y,{format:Ws,type:Ji,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),L.map.texture.name=B.name+".shadowMap",L.map.depthTexture=new lo(a.x,a.y,Xi),L.map.depthTexture.name=B.name+".shadowMapDepth",L.map.depthTexture.format=ds,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=_n,L.map.depthTexture.magFilter=_n}else B.isPointLight?(L.map=new _0(a.x),L.map.depthTexture=new Ab(a.x,Qi)):(L.map=new Zi(a.x,a.y),L.map.depthTexture=new lo(a.x,a.y,Qi)),L.map.depthTexture.name=B.name+".shadowMap",L.map.depthTexture.format=ds,this.type===nu?(L.map.depthTexture.compareFunction=X?mb:pb,L.map.depthTexture.minFilter=Vn,L.map.depthTexture.magFilter=Vn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=_n,L.map.depthTexture.magFilter=_n);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==a.x||L.map.height!==a.y)&&L.map.setSize(a.x,a.y);const N=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();B.isPointLight!==!0&&L.updateMatrices(B,E);const w=L.camera.layers.mask&4294967294?L.camera.layers:E.layers;for(let ee=0;ee<N;ee++){const ce=L.getCamera(ee);if(B.isPointLight){const G=L.camera,ne=L.matrix,re=B.distance||G.far;re!==G.far&&(G.far=re,G.updateProjectionMatrix()),Lo.setFromMatrixPosition(B.matrixWorld),G.position.copy(Lo),Gd.copy(G.position),Gd.add(CF[ee]),G.up.copy(wF[ee]),G.lookAt(Gd),G.updateMatrixWorld(),ne.makeTranslation(-Lo.x,-Lo.y,-Lo.z),Nv.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Nv,G.coordinateSystem,G.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)t.setRenderTarget(L.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(L.map),t.clear());const G=L.getViewport(ee);r.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),V.viewport(r)}i=L.getFrustum(ee),y(v,E,ce,B,w,this.type)}L.isPointLightShadow!==!0&&this.type===Bo&&g(L,E),L.needsUpdate=!1}h=this.type,x.needsUpdate=!1,t.setRenderTarget(P,F,I)};function g(C,v){const E=e.update(b);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new Zi(a.x,a.y,{format:Ws,type:Ji}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(v,null,E,f,b,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(v,null,E,p,b,null)}function S(C,v,E,P){let F=null;const I=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)F=I;else if(F=E.isPointLight===!0?l:o,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const V=F.uuid,K=v.uuid;let z=c[V];z===void 0&&(z={},c[V]=z);let q=z[K];q===void 0&&(q=F.clone(),z[K]=q,v.addEventListener("dispose",M)),F=q}if(F.visible=v.visible,F.wireframe=v.wireframe,P===Bo?F.side=v.shadowSide!==null?v.shadowSide:v.side:F.side=v.shadowSide!==null?v.shadowSide:m[v.side],F.alphaMap=v.alphaMap,F.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,F.map=v.map,F.clipShadows=v.clipShadows,F.clippingPlanes=v.clippingPlanes,F.clipIntersection=v.clipIntersection,F.displacementMap=v.displacementMap,F.displacementScale=v.displacementScale,F.displacementBias=v.displacementBias,F.wireframeLinewidth=v.wireframeLinewidth,F.linewidth=v.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const V=t.properties.get(F);V.light=E}return F}function y(C,v,E,P,F,I){if(C.visible===!1)return;if(C.layers.test(F)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&I===Bo)&&(!C.frustumCulled||C.intersectsFrustum(i))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const z=e.update(C),q=C.material;if(Array.isArray(q)){const B=z.groups;for(let L=0,Z=B.length;L<Z;L++){const X=B[L],N=q[X.materialIndex];if(N&&N.visible){const w=S(C,N,P,I);C.onBeforeShadow(t,C,v,E,z,w,X),t.renderBufferDirect(E,null,z,w,C,X),C.onAfterShadow(t,C,v,E,z,w,X)}}}else if(q.visible){const B=S(C,q,P,I);C.onBeforeShadow(t,C,v,E,z,B,null),t.renderBufferDirect(E,null,z,B,C,null),C.onAfterShadow(t,C,v,E,z,B,null)}}const K=C.children;for(let z=0,q=K.length;z<q;z++)y(K[z],v,E,P,F,I)}function M(C){C.target.removeEventListener("dispose",M);for(const E in c){const P=c[E],F=C.target.uuid;F in P&&(P[F].dispose(),delete P[F])}}}function NF(t,e){function n(){let D=!1;const te=new jt;let Q=null;const ve=new jt(0,0,0,0);return{setMask:function(he){Q!==he&&!D&&(t.colorMask(he,he,he,he),Q=he)},setLocked:function(he){D=he},setClear:function(he,ge,Fe,Qe,fe){fe===!0&&(he*=Qe,ge*=Qe,Fe*=Qe),te.set(he,ge,Fe,Qe),ve.equals(te)===!1&&(t.clearColor(he,ge,Fe,Qe),ve.copy(te))},reset:function(){D=!1,Q=null,ve.set(-1,0,0,0)}}}function i(){let D=!1,te=!1,Q=null,ve=null,he=null;return{setReversed:function(ge){if(te!==ge){const Fe=e.get("EXT_clip_control");ge?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),te=ge;const Qe=he;he=null,this.setClear(Qe)}},getReversed:function(){return te},setTest:function(ge){ge?se(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(ge){Q!==ge&&!D&&(t.depthMask(ge),Q=ge)},setFunc:function(ge){if(te&&(ge=oC[ge]),ve!==ge){switch(ge){case ip:t.depthFunc(t.NEVER);break;case ap:t.depthFunc(t.ALWAYS);break;case sp:t.depthFunc(t.LESS);break;case Sl:t.depthFunc(t.LEQUAL);break;case rp:t.depthFunc(t.EQUAL);break;case op:t.depthFunc(t.GEQUAL);break;case lp:t.depthFunc(t.GREATER);break;case cp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=ge}},setLocked:function(ge){D=ge},setClear:function(ge){he!==ge&&(he=ge,te&&(ge=1-ge),t.clearDepth(ge))},reset:function(){D=!1,Q=null,ve=null,he=null,te=!1}}}function a(){let D=!1,te=null,Q=null,ve=null,he=null,ge=null,Fe=null,Qe=null,fe=null;return{setTest:function(Oe){D||(Oe?se(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(Oe){te!==Oe&&!D&&(t.stencilMask(Oe),te=Oe)},setFunc:function(Oe,Ke,Me){(Q!==Oe||ve!==Ke||he!==Me)&&(t.stencilFunc(Oe,Ke,Me),Q=Oe,ve=Ke,he=Me)},setOp:function(Oe,Ke,Me){(ge!==Oe||Fe!==Ke||Qe!==Me)&&(t.stencilOp(Oe,Ke,Me),ge=Oe,Fe=Ke,Qe=Me)},setLocked:function(Oe){D=Oe},setClear:function(Oe){fe!==Oe&&(t.clearStencil(Oe),fe=Oe)},reset:function(){D=!1,te=null,Q=null,ve=null,he=null,ge=null,Fe=null,Qe=null,fe=null}}}const s=new n,r=new i,o=new a;let l={};const c=new WeakMap;let d={},m={},f={},p=new WeakMap,_=[],b=null,x=!1,h=null,g=null,S=null,y=null,M=null,C=null,v=null,E=new tt(0,0,0),P=0,F=!1,I=null,V=null,K=null,z=null,q=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,Z=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),L=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),L=Z>=2);let N=null,w={};const ee=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),G=new jt().fromArray(ee),ne=new jt().fromArray(ce);function re(D,te,Q,ve){const he=new Uint8Array(4),ge=t.createTexture();t.bindTexture(D,ge),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<Q;Fe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(te+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ge}const oe={};oe[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),se(t.DEPTH_TEST),r.setFunc(Sl),qe(!1),Ye(wx),se(t.CULL_FACE),pe(Xr);function se(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Te(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Ve(D,te){return f[D]!==te?(t.bindFramebuffer(D,te),f[D]=te,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=te),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=te),!0):!1}function be(D,te){let Q=_,ve=!1;if(D){Q=p.get(te),Q===void 0&&(Q=[],p.set(te,Q));const he=D.textures;if(Q.length!==he.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Fe=he.length;ge<Fe;ge++)Q[ge]=t.COLOR_ATTACHMENT0+ge;Q.length=he.length,ve=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,ve=!0);ve&&t.drawBuffers(Q)}function Le(D){return b!==D?(t.useProgram(D),b=D,!0):!1}const Be={[yr]:t.FUNC_ADD,[R2]:t.FUNC_SUBTRACT,[N2]:t.FUNC_REVERSE_SUBTRACT};Be[F2]=t.MIN,Be[D2]=t.MAX;const le={[L2]:t.ZERO,[U2]:t.ONE,[O2]:t.SRC_COLOR,[Q1]:t.SRC_ALPHA,[G2]:t.SRC_ALPHA_SATURATE,[B2]:t.DST_COLOR,[I2]:t.DST_ALPHA,[P2]:t.ONE_MINUS_SRC_COLOR,[J1]:t.ONE_MINUS_SRC_ALPHA,[H2]:t.ONE_MINUS_DST_COLOR,[z2]:t.ONE_MINUS_DST_ALPHA,[V2]:t.CONSTANT_COLOR,[k2]:t.ONE_MINUS_CONSTANT_COLOR,[j2]:t.CONSTANT_ALPHA,[X2]:t.ONE_MINUS_CONSTANT_ALPHA};function pe(D,te,Q,ve,he,ge,Fe,Qe,fe,Oe){if(D===Xr){x===!0&&(Te(t.BLEND),x=!1);return}if(x===!1&&(se(t.BLEND),x=!0),D!==w2){if(D!==h||Oe!==F){if((g!==yr||M!==yr)&&(t.blendEquation(t.FUNC_ADD),g=yr,M=yr),Oe)switch(D){case il:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case np:t.blendFunc(t.ONE,t.ONE);break;case Rx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:gt("WebGLState: Invalid blending: ",D);break}else switch(D){case il:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case np:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rx:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nx:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",D);break}S=null,y=null,C=null,v=null,E.set(0,0,0),P=0,h=D,F=Oe}return}he=he||te,ge=ge||Q,Fe=Fe||ve,(te!==g||he!==M)&&(t.blendEquationSeparate(Be[te],Be[he]),g=te,M=he),(Q!==S||ve!==y||ge!==C||Fe!==v)&&(t.blendFuncSeparate(le[Q],le[ve],le[ge],le[Fe]),S=Q,y=ve,C=ge,v=Fe),(Qe.equals(E)===!1||fe!==P)&&(t.blendColor(Qe.r,Qe.g,Qe.b,fe),E.copy(Qe),P=fe),h=D,F=!1}function De(D,te){D.side===Hi?Te(t.CULL_FACE):se(t.CULL_FACE);let Q=D.side===jn;te&&(Q=!Q),qe(Q),D.blending===il&&D.transparent===!1?pe(Xr):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const ve=D.stencilWrite;o.setTest(ve),ve&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),We(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){I!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),I=D)}function Ye(D){D!==A2?(se(t.CULL_FACE),D!==V&&(D===wx?t.cullFace(t.BACK):D===C2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),V=D}function Dt(D){D!==K&&(L&&t.lineWidth(D),K=D)}function We(D,te,Q){D?(se(t.POLYGON_OFFSET_FILL),(z!==te||q!==Q)&&(z=te,q=Q,r.getReversed()&&(te=-te,Q=-Q),t.polygonOffset(te,Q))):Te(t.POLYGON_OFFSET_FILL)}function dt(D){D?se(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function Bt(D){D===void 0&&(D=t.TEXTURE0+B-1),N!==D&&(t.activeTexture(D),N=D)}function Ct(D,te,Q){Q===void 0&&(N===null?Q=t.TEXTURE0+B-1:Q=N);let ve=w[Q];ve===void 0&&(ve={type:void 0,texture:void 0},w[Q]=ve),(ve.type!==D||ve.texture!==te)&&(N!==Q&&(t.activeTexture(Q),N=Q),t.bindTexture(D,te||oe[D]),ve.type=D,ve.texture=te)}function U(){const D=w[N];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _t(){try{t.compressedTexImage2D(...arguments)}catch(D){gt("WebGLState:",D)}}function ut(){try{t.compressedTexImage3D(...arguments)}catch(D){gt("WebGLState:",D)}}function it(){try{t.texSubImage2D(...arguments)}catch(D){gt("WebGLState:",D)}}function de(){try{t.texSubImage3D(...arguments)}catch(D){gt("WebGLState:",D)}}function yt(){try{t.compressedTexSubImage2D(...arguments)}catch(D){gt("WebGLState:",D)}}function Ue(){try{t.compressedTexSubImage3D(...arguments)}catch(D){gt("WebGLState:",D)}}function ze(){try{t.texStorage2D(...arguments)}catch(D){gt("WebGLState:",D)}}function R(){try{t.texStorage3D(...arguments)}catch(D){gt("WebGLState:",D)}}function T(){try{t.texImage2D(...arguments)}catch(D){gt("WebGLState:",D)}}function j(){try{t.texImage3D(...arguments)}catch(D){gt("WebGLState:",D)}}function ue(D){return m[D]!==void 0?m[D]:t.getParameter(D)}function ae(D,te){m[D]!==te&&(t.pixelStorei(D,te),m[D]=te)}function me(D){G.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),G.copy(D))}function ye(D){ne.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function J(D,te){let Q=c.get(te);Q===void 0&&(Q=new WeakMap,c.set(te,Q));let ve=Q.get(D);ve===void 0&&(ve=t.getUniformBlockIndex(te,D.name),t.uniformBlockBinding(te,ve,ve),Q.set(D,ve))}function $(D,te,Q){const he=c.get(te).get(D);l[he]!==Q&&(t.bindBufferBase(t.UNIFORM_BUFFER,he,Q),l[he]=Q)}function xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},m={},N=null,w={},f={},l={},p=new WeakMap,_=[],b=null,x=!1,h=null,g=null,S=null,y=null,M=null,C=null,v=null,E=new tt(0,0,0),P=0,F=!1,I=null,V=null,K=null,z=null,q=null,G.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:se,disable:Te,bindFramebuffer:Ve,drawBuffers:be,useProgram:Le,setBlending:pe,setMaterial:De,setFlipSided:qe,setCullFace:Ye,setLineWidth:Dt,setPolygonOffset:We,setScissorTest:dt,activeTexture:Bt,bindTexture:Ct,unbindTexture:U,compressedTexImage2D:_t,compressedTexImage3D:ut,texImage2D:T,texImage3D:j,pixelStorei:ae,getParameter:ue,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:ze,texStorage3D:R,texSubImage2D:it,texSubImage3D:de,compressedTexSubImage2D:yt,compressedTexSubImage3D:Ue,scissor:me,viewport:ye,reset:xe}}function FF(t,e,n,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,d=new WeakMap,m=new Set;let f;const p=new WeakMap,_=new Set,b=new FinalizationRegistry(R=>_.delete(R));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(R,T){return x?new OffscreenCanvas(R,T):ku("canvas")}function g(R,T,j){let ue=1;const ae=ze(R);if((ae.width>j||ae.height>j)&&(ue=j/Math.max(ae.width,ae.height)),ue<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const me=Math.floor(ue*ae.width),ye=Math.floor(ue*ae.height);f===void 0&&(f=h(me,ye));const J=T?h(me,ye):f;return J.width=me,J.height=ye,J.getContext("2d").drawImage(R,0,0,me,ye),Ie("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+me+"x"+ye+")."),J}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function S(R){return R.generateMipmaps}function y(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function C(R,T,j,ue,ae,me=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ye;ue&&(ye=e.get("EXT_texture_norm16"),ye||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=T;if(T===t.RED&&(j===t.FLOAT&&(J=t.R32F),j===t.HALF_FLOAT&&(J=t.R16F),j===t.UNSIGNED_BYTE&&(J=t.R8),j===t.UNSIGNED_SHORT&&ye&&(J=ye.R16_EXT),j===t.SHORT&&ye&&(J=ye.R16_SNORM_EXT)),T===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.R8UI),j===t.UNSIGNED_SHORT&&(J=t.R16UI),j===t.UNSIGNED_INT&&(J=t.R32UI),j===t.BYTE&&(J=t.R8I),j===t.SHORT&&(J=t.R16I),j===t.INT&&(J=t.R32I)),T===t.RG&&(j===t.FLOAT&&(J=t.RG32F),j===t.HALF_FLOAT&&(J=t.RG16F),j===t.UNSIGNED_BYTE&&(J=t.RG8),j===t.UNSIGNED_SHORT&&ye&&(J=ye.RG16_EXT),j===t.SHORT&&ye&&(J=ye.RG16_SNORM_EXT)),T===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RG8UI),j===t.UNSIGNED_SHORT&&(J=t.RG16UI),j===t.UNSIGNED_INT&&(J=t.RG32UI),j===t.BYTE&&(J=t.RG8I),j===t.SHORT&&(J=t.RG16I),j===t.INT&&(J=t.RG32I)),T===t.RGB_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RGB8UI),j===t.UNSIGNED_SHORT&&(J=t.RGB16UI),j===t.UNSIGNED_INT&&(J=t.RGB32UI),j===t.BYTE&&(J=t.RGB8I),j===t.SHORT&&(J=t.RGB16I),j===t.INT&&(J=t.RGB32I)),T===t.RGBA_INTEGER&&(j===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),j===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),j===t.UNSIGNED_INT&&(J=t.RGBA32UI),j===t.BYTE&&(J=t.RGBA8I),j===t.SHORT&&(J=t.RGBA16I),j===t.INT&&(J=t.RGBA32I)),T===t.RGB&&(j===t.UNSIGNED_SHORT&&ye&&(J=ye.RGB16_EXT),j===t.SHORT&&ye&&(J=ye.RGB16_SNORM_EXT),j===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),j===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),T===t.RGBA){const $=me?Vu:ft.getTransfer(ae);j===t.FLOAT&&(J=t.RGBA32F),j===t.HALF_FLOAT&&(J=t.RGBA16F),j===t.UNSIGNED_BYTE&&(J=$===Mt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT&&ye&&(J=ye.RGBA16_EXT),j===t.SHORT&&ye&&(J=ye.RGBA16_SNORM_EXT),j===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,T){let j;return R?T===null||T===Qi||T===oo?j=t.DEPTH24_STENCIL8:T===Xi?j=t.DEPTH32F_STENCIL8:T===Ml&&(j=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qi||T===oo?j=t.DEPTH_COMPONENT24:T===Xi?j=t.DEPTH_COMPONENT32F:T===Ml&&(j=t.DEPTH_COMPONENT16),j}function E(R,T){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){const T=new WeakRef(R);i.get(R).__ref=T,_.add(T),b.register(R,T,T)}function F(R){const T=i.get(R).__ref;T!==void 0&&(_.delete(T),b.unregister(T))}function I(R){K(R.target)}function V(R){z(R.target)}function K(R){R.removeEventListener("dispose",I),F(R),B(R),R.isVideoTexture&&d.delete(R),R.isHTMLTexture&&m.delete(R)}function z(R){R.removeEventListener("dispose",V),F(R),Z(R)}function q(){for(const R of _){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?z(T):K(T))}_.clear(),m.clear()}function B(R){const T=i.get(R);if(T.__webglInit===void 0)return;const j=R.source,ue=p.get(j);if(ue){const ae=ue[T.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&L(R),Object.keys(ue).length===0&&p.delete(j)}i.remove(R)}function L(R){const T=i.get(R);t.deleteTexture(T.__webglTexture);const j=R.source,ue=p.get(j);delete ue[T.__cacheKey],r.memory.textures--}function Z(R){const T=i.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const j=R.depthTexture;if(j&&j.renderTarget===R&&K(j),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let me=0;me<T.__webglFramebuffer[ae].length;me++)t.deleteFramebuffer(T.__webglFramebuffer[ae][me]);else t.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)t.deleteFramebuffer(T.__webglFramebuffer[ae]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ue=R.textures;for(let ae=0,me=ue.length;ae<me;ae++){const ye=i.get(ue[ae]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),r.memory.textures--),i.remove(ue[ae])}i.remove(R)}let X=0;function N(){X=0}function w(){return X}function ee(R){X=R}function ce(){const R=X;return R>=a.maxTextures&&Ie("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),X+=1,R}function G(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function ne(R,T){const j=i.get(R);if(R.isVideoTexture&&yt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&j.__version!==R.version){const ue=R.image;if(ue===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{De(j,R,T);return}}else R.isExternalTexture&&(j.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+T)}function re(R,T){const j=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){De(j,R,T);return}else R.isExternalTexture&&(j.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+T)}function oe(R,T){const j=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){De(j,R,T);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+T)}function se(R,T){const j=i.get(R);if(R.version>0&&j.__version!==R.version){qe(j,R,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+T)}const Te={[up]:t.REPEAT,[fa]:t.CLAMP_TO_EDGE,[fp]:t.MIRRORED_REPEAT},Ve={[_n]:t.NEAREST,[Y2]:t.NEAREST_MIPMAP_NEAREST,[uc]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[ud]:t.LINEAR_MIPMAP_NEAREST,[qa]:t.LINEAR_MIPMAP_LINEAR},be={[J2]:t.NEVER,[gb]:t.ALWAYS,[$2]:t.LESS,[pb]:t.LEQUAL,[eC]:t.EQUAL,[mb]:t.GEQUAL,[tC]:t.GREATER,[nC]:t.NOTEQUAL};function Le(R,T){if(T.type===Xi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===ud||T.magFilter===uc||T.magFilter===qa||T.minFilter===Vn||T.minFilter===ud||T.minFilter===uc||T.minFilter===qa)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Te[T.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Te[T.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Te[T.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ve[T.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ve[T.minFilter]),T.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_n||T.minFilter!==uc&&T.minFilter!==qa||T.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Be(R,T){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",I),P(T));const ue=T.source;let ae=p.get(ue);ae===void 0&&(ae={},p.set(ue,ae));const me=G(T);if(me!==R.__cacheKey){ae[me]===void 0&&(ae[me]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,j=!0),ae[me].usedTimes++;const ye=ae[R.__cacheKey];ye!==void 0&&(ae[R.__cacheKey].usedTimes--,ye.usedTimes===0&&L(T)),R.__cacheKey=me,R.__webglTexture=ae[me].texture}return j}function le(R,T,j){return Math.floor(Math.floor(R/j)/T)}function pe(R,T,j,ue){const me=R.updateRanges;if(me.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,j,ue,T.data);else{me.sort((D,te)=>D.start-te.start);let ye=0;for(let D=1;D<me.length;D++){const te=me[ye],Q=me[D],ve=te.start+te.count,he=le(Q.start,T.width,4),ge=le(te.start,T.width,4);Q.start<=ve+1&&he===ge&&le(Q.start+Q.count-1,T.width,4)===he?te.count=Math.max(te.count,Q.start+Q.count-te.start):(++ye,me[ye]=Q)}me.length=ye+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),$=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let D=0,te=me.length;D<te;D++){const Q=me[D],ve=Math.floor(Q.start/4),he=Math.ceil(Q.count/4),ge=ve%T.width,Fe=Math.floor(ve/T.width),Qe=he,fe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,Fe),n.texSubImage2D(t.TEXTURE_2D,0,ge,Fe,Qe,fe,j,ue,T.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,$),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function De(R,T,j){let ue=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ue=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ue=t.TEXTURE_3D);const ae=Be(R,T),me=T.source;n.bindTexture(ue,R.__webglTexture,t.TEXTURE0+j);const ye=i.get(me);if(me.version!==ye.__version||ae===!0){if(n.activeTexture(t.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const fe=ft.getPrimaries(ft.workingColorSpace),Oe=T.colorSpace===Ha?null:ft.getPrimaries(T.colorSpace),Ke=T.colorSpace===Ha||fe===Oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}n.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment);let $=g(T.image,!1,a.maxTextureSize);$=Ue(T,$);const xe=s.convert(T.format,T.colorSpace),D=s.convert(T.type);let te=C(T.internalFormat,xe,D,T.normalized,T.colorSpace,T.isVideoTexture);Le(ue,T);let Q;const ve=T.mipmaps,he=T.isVideoTexture!==!0,ge=ye.__version===void 0||ae===!0,Fe=me.dataReady,Qe=E(T,$);if(T.isDepthTexture)te=v(T.format===Ya,T.type),ge&&(he?n.texStorage2D(t.TEXTURE_2D,1,te,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,te,$.width,$.height,0,xe,D,null));else if(T.isDataTexture)if(ve.length>0){he&&ge&&n.texStorage2D(t.TEXTURE_2D,Qe,te,ve[0].width,ve[0].height);for(let fe=0,Oe=ve.length;fe<Oe;fe++)Q=ve[fe],he?Fe&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Q.width,Q.height,xe,D,Q.data):n.texImage2D(t.TEXTURE_2D,fe,te,Q.width,Q.height,0,xe,D,Q.data);T.generateMipmaps=!1}else he?(ge&&n.texStorage2D(t.TEXTURE_2D,Qe,te,$.width,$.height),Fe&&pe(T,$,xe,D)):n.texImage2D(t.TEXTURE_2D,0,te,$.width,$.height,0,xe,D,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){he&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Qe,te,ve[0].width,ve[0].height,$.depth);for(let fe=0,Oe=ve.length;fe<Oe;fe++)if(Q=ve[fe],T.format!==Wi)if(xe!==null)if(he){if(Fe)if(T.layerUpdates.size>0){const Ke=cv(Q.width,Q.height,T.format,T.type);for(const Me of T.layerUpdates){const bt=Q.data.subarray(Me*Ke/Q.data.BYTES_PER_ELEMENT,(Me+1)*Ke/Q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,Me,Q.width,Q.height,1,xe,bt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Q.width,Q.height,$.depth,xe,Q.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,te,Q.width,Q.height,$.depth,0,Q.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Fe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Q.width,Q.height,$.depth,xe,D,Q.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,te,Q.width,Q.height,$.depth,0,xe,D,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{he&&ge&&n.texStorage2D(t.TEXTURE_2D,Qe,te,ve[0].width,ve[0].height);for(let fe=0,Oe=ve.length;fe<Oe;fe++)Q=ve[fe],T.format!==Wi?xe!==null?he?Fe&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,Q.width,Q.height,xe,Q.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,te,Q.width,Q.height,0,Q.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Fe&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Q.width,Q.height,xe,D,Q.data):n.texImage2D(t.TEXTURE_2D,fe,te,Q.width,Q.height,0,xe,D,Q.data)}else if(T.isDataArrayTexture)if(he){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Qe,te,$.width,$.height,$.depth),Fe)if(T.layerUpdates.size>0){const fe=cv($.width,$.height,T.format,T.type);for(const Oe of T.layerUpdates){const Ke=$.data.subarray(Oe*fe/$.data.BYTES_PER_ELEMENT,(Oe+1)*fe/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Oe,$.width,$.height,1,xe,D,Ke)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,xe,D,$.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,te,$.width,$.height,$.depth,0,xe,D,$.data);else if(T.isData3DTexture)he?(ge&&n.texStorage3D(t.TEXTURE_3D,Qe,te,$.width,$.height,$.depth),Fe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,xe,D,$.data)):n.texImage3D(t.TEXTURE_3D,0,te,$.width,$.height,$.depth,0,xe,D,$.data);else if(T.isFramebufferTexture){if(ge)if(he)n.texStorage2D(t.TEXTURE_2D,Qe,te,$.width,$.height);else{let fe=$.width,Oe=$.height;for(let Ke=0;Ke<Qe;Ke++)n.texImage2D(t.TEXTURE_2D,Ke,te,fe,Oe,0,xe,D,null),fe>>=1,Oe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in t){const fe=t.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),$.parentNode!==fe){fe.appendChild($),m.add(T),fe.onpaint=Oe=>{const Ke=Oe.changedElements;for(const Me of m)Ke.includes(Me.image)&&(Me.needsUpdate=!0)},fe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,$);else{const Ke=t.RGBA,Me=t.RGBA,bt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ke,Me,bt,$)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ve.length>0){if(he&&ge){const fe=ze(ve[0]);n.texStorage2D(t.TEXTURE_2D,Qe,te,fe.width,fe.height)}for(let fe=0,Oe=ve.length;fe<Oe;fe++)Q=ve[fe],he?Fe&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,xe,D,Q):n.texImage2D(t.TEXTURE_2D,fe,te,xe,D,Q);T.generateMipmaps=!1}else if(he){if(ge){const fe=ze($);n.texStorage2D(t.TEXTURE_2D,Qe,te,fe.width,fe.height)}Fe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,D,$)}else n.texImage2D(t.TEXTURE_2D,0,te,xe,D,$);S(T)&&T.mipmapsAutoUpdate===!0&&y(ue),ye.__version=me.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function qe(R,T,j){if(T.image.length!==6)return;const ue=Be(R,T),ae=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+j);const me=i.get(ae);if(ae.version!==me.__version||ue===!0){n.activeTexture(t.TEXTURE0+j);const ye=ft.getPrimaries(ft.workingColorSpace),J=T.colorSpace===Ha?null:ft.getPrimaries(T.colorSpace),$=T.colorSpace===Ha||ye===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const xe=T.isCompressedTexture||T.image[0].isCompressedTexture,D=T.image[0]&&T.image[0].isDataTexture,te=[];for(let Me=0;Me<6;Me++)!xe&&!D?te[Me]=g(T.image[Me],!0,a.maxCubemapSize):te[Me]=D?T.image[Me].image:T.image[Me],te[Me]=Ue(T,te[Me]);const Q=te[0],ve=s.convert(T.format,T.colorSpace),he=s.convert(T.type);let ge=C(T.internalFormat,ve,he,T.normalized,T.colorSpace);const Fe=T.isVideoTexture!==!0,Qe=me.__version===void 0||ue===!0,fe=ae.dataReady;let Oe=E(T,Q);Le(t.TEXTURE_CUBE_MAP,T);let Ke;if(T.isDepthTexture){if(ge=v(T.format===Ya,T.type),Qe)if(Fe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ge,Q.width,Q.height);else for(let Me=0;Me<6;Me++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,Q.width,Q.height,0,ve,he,null)}else if(xe){Fe&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,ge,Q.width,Q.height);for(let Me=0;Me<6;Me++){Ke=te[Me].mipmaps;for(let bt=0;bt<Ke.length;bt++){const on=Ke[bt];T.format!==Wi?ve!==null?Fe?fe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,bt,0,0,on.width,on.height,ve,on.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,bt,ge,on.width,on.height,0,on.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,bt,0,0,on.width,on.height,ve,he,on.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,bt,ge,on.width,on.height,0,ve,he,on.data)}}}else{if(Ke=T.mipmaps,Fe&&Qe){Ke.length>0&&Oe++;const Me=ze(te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,ge,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(D){Fe?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,te[Me].width,te[Me].height,ve,he,te[Me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,te[Me].width,te[Me].height,0,ve,he,te[Me].data);for(let bt=0;bt<Ke.length;bt++){const Ta=Ke[bt].image[Me].image;Fe?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,bt+1,0,0,Ta.width,Ta.height,ve,he,Ta.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,bt+1,ge,Ta.width,Ta.height,0,ve,he,Ta.data)}}else{Fe?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ve,he,te[Me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,ve,he,te[Me]);for(let bt=0;bt<Ke.length;bt++){const on=Ke[bt];Fe?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,bt+1,0,0,ve,he,on.image[Me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,bt+1,ge,ve,he,on.image[Me])}}}S(T)&&T.mipmapsAutoUpdate===!0&&y(t.TEXTURE_CUBE_MAP),me.__version=ae.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Ye(R,T,j,ue,ae,me){const ye=s.convert(j.format,j.colorSpace),J=s.convert(j.type),$=C(j.internalFormat,ye,J,j.normalized,j.colorSpace),xe=i.get(T),D=i.get(j);if(D.__renderTarget=T,!xe.__hasExternalTextures){const te=Math.max(1,T.width>>me),Q=Math.max(1,T.height>>me);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,me,$,te,Q,T.depth,0,ye,J,null):n.texImage2D(ae,me,$,te,Q,0,ye,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),de(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,ae,D.__webglTexture,0,it(T)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ue,ae,D.__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Dt(R,T,j){if(t.bindRenderbuffer(t.RENDERBUFFER,R),T.depthBuffer){const ue=T.depthTexture,ae=ue&&ue.isDepthTexture?ue.type:null,me=v(T.stencilBuffer,ae),ye=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;de(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,it(T),me,T.width,T.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,it(T),me,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,me,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,R)}else{const ue=T.textures;for(let ae=0;ae<ue.length;ae++){const me=ue[ae],ye=s.convert(me.format,me.colorSpace),J=s.convert(me.type),$=C(me.internalFormat,ye,J,me.normalized,me.colorSpace);de(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,it(T),$,T.width,T.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,it(T),$,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,$,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(R,T,j){const ue=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=i.get(T.depthTexture);ae.__renderTarget=T;const me=ue?T.depthTexture.image[0]:T.depthTexture.image;(!ae.__webglTexture||me.width!==T.width||me.height!==T.height)&&(me.width=T.width,me.height=T.height,T.depthTexture.needsUpdate=!0),ue?se(T.depthTexture,0):ne(T.depthTexture,0);const ye=ae.__webglTexture,J=it(T),$=ue?t.TEXTURE_CUBE_MAP_POSITIVE_X+j:t.TEXTURE_2D,xe=T.depthTexture.format===Ya?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(T.depthTexture.format===ds)de(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,xe,$,ye,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,xe,$,ye,0);else if(T.depthTexture.format===Ya)de(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,xe,$,ye,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,xe,$,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(R){const T=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const ue=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ue){const ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ue.removeEventListener("dispose",ae)};ue.addEventListener("dispose",ae),T.__depthDisposeCallback=ae}T.__boundDepthTexture=ue}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let ue=0;ue<6;ue++)We(T.__webglFramebuffer[ue],R,ue);else R.texture.mipmaps.length>0?We(T.__webglFramebuffer[0],R,0):We(T.__webglFramebuffer,R,0);else if(j){T.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ue]),T.__webglDepthbuffer[ue]===void 0)T.__webglDepthbuffer[ue]=t.createRenderbuffer(),Dt(T.__webglDepthbuffer[ue],R,!1);else{const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer[ue];t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,me)}}else if(R.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),Dt(T.__webglDepthbuffer,R,!1);else{const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,me)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Bt(R,T,j){const ue=i.get(R);T!==void 0&&Ye(ue.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&dt(R)}function Ct(R){const T=R.texture,j=i.get(R),ue=i.get(T);R.addEventListener("dispose",V),P(R);const ae=R.textures,me=R.isWebGLCubeRenderTarget===!0,ye=ae.length>1;if(ye||(ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture()),ue.__version=T.version,r.memory.textures++),me){j.__webglFramebuffer=[];for(let J=0;J<6;J++)if(T.mipmaps.length>0){j.__webglFramebuffer[J]=[];for(let $=0;$<T.mipmaps.length;$++)j.__webglFramebuffer[J][$]=t.createFramebuffer()}else j.__webglFramebuffer[J]=t.createFramebuffer()}else{if(T.mipmaps.length>0){j.__webglFramebuffer=[];for(let J=0;J<T.mipmaps.length;J++)j.__webglFramebuffer[J]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(ye)for(let J=0,$=ae.length;J<$;J++){const xe=i.get(ae[J]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),r.memory.textures++)}if(R.samples>0&&de(R)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let J=0;J<ae.length;J++){const $=ae[J];j.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[J]);const xe=s.convert($.format,$.colorSpace),D=s.convert($.type),te=C($.internalFormat,xe,D,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),Q=it(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,te,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,j.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Dt(j.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){n.bindTexture(t.TEXTURE_CUBE_MAP,ue.__webglTexture),Le(t.TEXTURE_CUBE_MAP,T);for(let J=0;J<6;J++)if(T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)Ye(j.__webglFramebuffer[J][$],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else Ye(j.__webglFramebuffer[J],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);S(T)?y(t.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}else if(ye){for(let J=0,$=ae.length;J<$;J++){const xe=ae[J],D=i.get(xe);let te=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,D.__webglTexture),Le(te,xe),Ye(j.__webglFramebuffer,R,xe,t.COLOR_ATTACHMENT0+J,te,0),S(xe)&&y(te)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,ue.__webglTexture),Le(J,T),T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)Ye(j.__webglFramebuffer[$],R,T,t.COLOR_ATTACHMENT0,J,$);else Ye(j.__webglFramebuffer,R,T,t.COLOR_ATTACHMENT0,J,0);S(T)?y(J):T.mipmaps.length>0&&t.texParameteri(J,t.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),n.unbindTexture()}R.depthBuffer&&dt(R)}function U(R){const T=R.textures;for(let j=0,ue=T.length;j<ue;j++){const ae=T[j];if(S(ae)&&ae.mipmapsAutoUpdate===!0){const me=M(R),ye=i.get(ae).__webglTexture;n.bindTexture(me,ye),y(me),n.unbindTexture()}}}const _t=[];function ut(R){if(R.samples>0){if(de(R)===!1){const T=R.textures,j=R.width,ue=R.height;let ae=t.COLOR_BUFFER_BIT;const me=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(R),J=T.length>1;if(J)for(let xe=0;xe<T.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const D=i.get(T[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,D,0)}t.blitFramebuffer(0,0,j,ue,0,0,j,ue,ae,t.NEAREST),l===!0&&(_t.length=0,_t.push(t.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&_t.push(me),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_t))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let xe=0;xe<T.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);const D=i.get(T[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,D,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const T=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function it(R){return Math.min(a.maxSamples,R.samples)}function de(R){const T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(R){const T=r.render.frame;d.get(R)!==T&&(d.set(R,T),R.update())}function Ue(R,T){const j=R.colorSpace,ue=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==Gu&&j!==Ha&&(ft.getTransfer(j)===Mt?(ue!==Wi||ae!==ei)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",j)),T}function ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ce,this.resetTextureUnits=N,this.getTextureUnits=w,this.setTextureUnits=ee,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=Bt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=de,this.dispose=q}function DF(t,e){function n(i,a=Ha){let s;const r=ft.getTransfer(a);if(i===ei)return t.UNSIGNED_BYTE;if(i===a0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===s0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ub)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ob)return t.BYTE;if(i===lb)return t.SHORT;if(i===Ml)return t.UNSIGNED_SHORT;if(i===i0)return t.INT;if(i===Qi)return t.UNSIGNED_INT;if(i===Xi)return t.FLOAT;if(i===Ji)return t.HALF_FLOAT;if(i===fb)return t.ALPHA;if(i===db)return t.RGB;if(i===Wi)return t.RGBA;if(i===ds)return t.DEPTH_COMPONENT;if(i===Ya)return t.DEPTH_STENCIL;if(i===hb)return t.RED;if(i===r0)return t.RED_INTEGER;if(i===Ws)return t.RG;if(i===o0)return t.RG_INTEGER;if(i===l0)return t.RGBA_INTEGER;if(i===iu||i===au||i===su||i===ru)if(r===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===iu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===iu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ru)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dp||i===hp||i===pp||i===mp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gp||i===xp||i===vp||i===_p||i===yp||i===Bu||i===Sp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gp||i===xp)return r===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_p)return s.COMPRESSED_R11_EAC;if(i===yp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bu)return s.COMPRESSED_RG11_EAC;if(i===Sp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bp||i===Mp||i===Ep||i===Tp||i===Ap||i===Cp||i===wp||i===Rp||i===Np||i===Fp||i===Dp||i===Lp||i===Up||i===Op)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ep)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ap)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Np)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lp)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Up)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Op)return r===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pp||i===Ip||i===zp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pp)return r===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ip)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bp||i===Hp||i===Hu||i===Gp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const LF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OF{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Cb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qs({vertexShader:LF,fragmentShader:UF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kt(new Gl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PF extends $s{constructor(e,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,m=null,f=null,p=null,_=null;const b=typeof XRWebGLBinding<"u",x=new OF,h={},g=n.getContextAttributes();let S=null,y=null;const M=[],C=[],v=new nt;let E=null,P=null;const F=new Jn;F.viewport=new jt;const I=new Jn;I.viewport=new jt;const V=[F,I],K=new qC;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=M[G];return ne===void 0&&(ne=new _d,M[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=M[G];return ne===void 0&&(ne=new _d,M[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=M[G];return ne===void 0&&(ne=new _d,M[G]=ne),ne.getHandSpace()};function B(G){const ne=C.indexOf(G.inputSource);if(ne===-1)return;const re=M[ne];re!==void 0&&(re.update(G.inputSource,G.frame,c||r),re.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",L),a.removeEventListener("inputsourceschange",Z);for(let G=0;G<M.length;G++){const ne=C[G];ne!==null&&(C[G]=null,M[G].disconnect(ne))}z=null,q=null,x.reset();for(const G in h)delete h[G];if(e.setRenderTarget(S),p=null,f=null,m=null,a=null,y=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(v.width,v.height,!1),P!==null){const G=P.camera;G.fov=P.fov,G.zoom=P.zoom,G.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(a,n)),m},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(G){if(a=G,a!==null){if(S=e.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",L),a.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(v),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,oe=null,se=null;g.depth&&(se=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=g.stencil?Ya:ds,oe=g.stencil?oo:Qi);const Te={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(Te),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Zi(f.textureWidth,f.textureHeight,{format:Wi,type:ei,depthTexture:new lo(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const re={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,re),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Zi(p.framebufferWidth,p.framebufferHeight,{format:Wi,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),ce.setContext(a),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(G){for(let ne=0;ne<G.removed.length;ne++){const re=G.removed[ne],oe=C.indexOf(re);oe>=0&&(C[oe]=null,M[oe].disconnect(re))}for(let ne=0;ne<G.added.length;ne++){const re=G.added[ne];let oe=C.indexOf(re);if(oe===-1){for(let Te=0;Te<M.length;Te++)if(Te>=C.length){C.push(re),oe=Te;break}else if(C[Te]===null){C[Te]=re,oe=Te;break}if(oe===-1)break}const se=M[oe];se&&se.connect(re)}}function X(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(a===null)return;let ne=G.near,re=G.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(re=x.depthFar)),K.near=I.near=F.near=ne,K.far=I.far=F.far=re,(z!==K.near||q!==K.far)&&(a.updateRenderState({depthNear:K.near,depthFar:K.far}),z=K.near,q=K.far),K.layers.mask=G.layers.mask|6,F.layers.mask=K.layers.mask&-5,I.layers.mask=K.layers.mask&-3;const oe=G.parent,se=K.cameras;X(K,oe);for(let Te=0;Te<se.length;Te++)X(se[Te],oe);K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse),P===null&&G.isPerspectiveCamera&&(P={camera:G,fov:G.fov,zoom:G.zoom}),N(G,K,oe)};function N(G,ne,re){re===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=kp*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(K)},this.getCameraTexture=function(G){return h[G]};let w=null;function ee(G,ne){if(d=ne.getViewerPose(c||r),_=ne,d!==null){const re=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let oe=!1;re.length!==K.cameras.length&&(K.cameras.length=0,oe=!0);for(let be=0;be<re.length;be++){const Le=re[be];let Be=null;if(p!==null)Be=p.getViewport(Le);else{const pe=m.getViewSubImage(f,Le);Be=pe.viewport,be===0&&(e.setRenderTargetTextures(y,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(y))}let le=V[be];le===void 0&&(le=new Jn,le.layers.enable(be),le.viewport=new jt,V[be]=le),le.matrix.fromArray(Le.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Le.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Be.x,Be.y,Be.width,Be.height),be===0&&(K.matrix.copy(le.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),oe===!0&&K.cameras.push(le)}const se=a.enabledFeatures;if(se&&se.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const be=m.getDepthInformation(re[0]);be&&be.isValid&&be.texture&&x.init(be,a.renderState)}if(se&&se.includes("camera-access")&&b){e.state.unbindTexture(),m=i.getBinding();for(let be=0;be<re.length;be++){const Le=re[be].camera;if(Le){let Be=h[Le];Be||(Be=new Cb,h[Le]=Be);const le=m.getCameraImage(Le);Be.sourceTexture=le}}}}for(let re=0;re<M.length;re++){const oe=C[re],se=M[re];oe!==null&&se!==void 0&&se.update(oe,ne,c||r)}w&&w(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const ce=new Ub;ce.setAnimationLoop(ee),this.setAnimationLoop=function(G){w=G},this.dispose=function(){}}}const IF=new zt,jb=new ke;jb.set(-1,0,0,0,1,0,0,0,1);function zF(t,e){function n(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,wb(t)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function a(x,h,g,S,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(x,h):h.isMeshLambertMaterial?(s(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(x,h),m(x,h)):h.isMeshPhongMaterial?(s(x,h),d(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(x,h),f(x,h),h.isMeshPhysicalMaterial&&p(x,h,y)):h.isMeshMatcapMaterial?(s(x,h),_(x,h)):h.isMeshDepthMaterial?s(x,h):h.isMeshDistanceMaterial?(s(x,h),b(x,h)):h.isMeshNormalMaterial?s(x,h):h.isLineBasicMaterial?(r(x,h),h.isLineDashedMaterial&&o(x,h)):h.isPointsMaterial?l(x,h,g,S):h.isSpriteMaterial?c(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,n(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===jn&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,n(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===jn&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,n(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,n(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const g=e.get(h),S=g.envMap,y=g.envMapRotation;S&&(x.envMap.value=S,x.envMapRotation.value.setFromMatrix4(IF.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(jb),x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,x.aoMapTransform))}function r(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform))}function o(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function l(x,h,g,S){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*g,x.scale.value=S*.5,h.map&&(x.map.value=h.map,n(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function c(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function d(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function m(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function f(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function p(x,h,g){x.ior.value=h.ior,h.diffuseRoughness>0&&(x.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===jn&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.retroreflectivity>0&&(x.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,h){h.matcap&&(x.matcap.value=h.matcap)}function b(x,h){const g=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function BF(t,e,n,i){let a={},s={};function r(g,S){const y=S.program;i.uniformBlockBinding(g,y,a[g.id])}function o(g,S){let y=a[g.id];y===void 0&&(_(g),y=l(g),a[g.id]=y,g.addEventListener("dispose",x));const M=S.program;i.updateUBOMapping(g,M);const C=e.render.frame;s[g.id]!==C&&(c(g),s[g.id]=C)}function l(g){const S=t.createBuffer(),y=g.__size,M=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,y,M),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function c(g){const S=a[g.id],y=g.uniforms,M=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,v=y.length;C<v;C++){const E=y[C];if(Array.isArray(E))for(let P=0,F=E.length;P<F;P++)d(E[P],C,P,M);else d(E,C,0,M)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(g,S,y,M){if(f(g,S,y,M)===!0){const C=g.__offset,v=g.value;if(Array.isArray(v)){let E=0;for(let P=0;P<v.length;P++){const F=v[P],I=b(F,!0);m(F,g.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else m(v,g.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,C,g.__data)}}function m(g,S,y){typeof g=="number"||typeof g=="boolean"?S[y]=g:g.isMatrix3?(S[y]=g.elements[0],S[y+1]=g.elements[1],S[y+2]=g.elements[2],S[y+3]=0,S[y+4]=g.elements[3],S[y+5]=g.elements[4],S[y+6]=g.elements[5],S[y+7]=0,S[y+8]=g.elements[6],S[y+9]=g.elements[7],S[y+10]=g.elements[8],S[y+11]=0):ArrayBuffer.isView(g)?S.set(g.subarray(0,S.length-y),y):g.toArray(S,y)}function f(g,S,y,M){const C=g.value,v=S+"_"+y;if(Array.isArray(C)){M[v]===void 0&&(M[v]=[]);const E=M[v];let P=!1;for(let F=0;F<C.length;F++)p(C[F],E,F)===!0&&(P=!0);return P}return p(C,M,v)}function p(g,S,y){if(S[y]===void 0)return typeof g=="number"||typeof g=="boolean"?S[y]=g:ArrayBuffer.isView(g)?S[y]=g.slice():S[y]=g.clone(),!0;{const M=S[y];if(typeof g=="number"||typeof g=="boolean"){if(M!==g)return S[y]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(M.equals(g)===!1)return M.copy(g),!0}}return!1}function _(g){const S=g.uniforms;let y=0;const M=16;for(let v=0,E=S.length;v<E;v++){const P=Array.isArray(S[v])?S[v]:[S[v]];for(let F=0,I=P.length;F<I;F++){const V=P[F],K=Array.isArray(V.value)?V.value:[V.value],z=Array.isArray(S[v])||Array.isArray(V.value);let q=y;for(let L=0,Z=K.length;L<Z;L++){const X=K[L],N=b(X,z),w=y%M,ee=w%N.boundary,ce=w+ee;y+=ee,ce!==0&&M-ce<N.storage&&(y+=M-ce),L===0&&(q=y),y+=N.storage}const B=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new B((y-q)/Float32Array.BYTES_PER_ELEMENT),V.__offset=q}}const C=y%M;return C>0&&(y+=M-C),g.__size=y,g.__cache={},this}function b(g,S){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=16,y.storage=48):g.isMatrix4?(y.boundary=16,y.storage=64):g.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(y.boundary=16,y.storage=g.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",g),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function x(g){const S=g.target;S.removeEventListener("dispose",x),t.deleteBuffer(a[S.id]),delete a[S.id],delete s[S.id]}function h(){for(const g in a)t.deleteBuffer(a[g]);a={},s={}}return{bind:r,update:o,dispose:h}}const HF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function GF(){return Pi===null&&(Pi=new DC(HF,16,16,Ws,Ji),Pi.name="DFG_LUT",Pi.minFilter=Vn,Pi.magFilter=Vn,Pi.wrapS=fa,Pi.wrapT=fa,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Xb{constructor(e={}){const{canvas:n=sC(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ei}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const b=p,x=new Set([l0,o0,r0]),h=new Set([ei,Qi,Ml,oo,a0,s0]),g=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let M=null,C=null;const v=[],E=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let I=!1,V=null,K=null,z=null,q=null;this._outputColorSpace=fi;let B=0,L=0,Z=null,X=-1,N=null;const w=new jt,ee=new jt;let ce=null;const G=new tt(0);let ne=0,re=n.width,oe=n.height,se=1,Te=null,Ve=null;const be=new jt(0,0,re,oe),Le=new jt(0,0,re,oe);let Be=!1;const le=new Tl,pe=new d0;let De=!1,qe=!1;const Ye=new zt,Dt=new H,We=new jt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function Ct(){return Z===null?se:1}let U=i;function _t(A,O){return n.getContext(A,O)}let ut,it,de,yt,Ue,ze,R,T,j,ue,ae,me,ye,J,$,xe,D,te,Q,ve,he,ge,Fe;try{const A={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${t0}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",Ke,!1),n.addEventListener("webglcontextcreationerror",Me,!1),U===null){const O="webgl2";if(U=_t(O,A),U===null)throw _t(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(A){throw n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),gt("WebGLRenderer: "+A.message),A}function Qe(){ut=new XR(U),ut.init(),he=new DF(U,ut),it=new UR(U,ut,e,he),de=new NF(U,ut),it.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),K=U.createFramebuffer(),z=U.createFramebuffer(),q=U.createFramebuffer(),yt=new YR(U),Ue=new gF,ze=new FF(U,ut,de,Ue,it,he,yt),R=new jR(F),T=new KC(U),ge=new DR(U,T),j=new WR(U,T,yt,ge),ue=new KR(U,j,T,ge,yt),te=new ZR(U,it,ze),$=new OR(Ue),ae=new mF(F,R,ut,it,ge,$),me=new zF(F,Ue),ye=new vF,J=new EF(ut),D=new FR(F,R,de,ue,_,l),xe=new RF(F,ue,it),Fe=new BF(U,yt,it,de),Q=new LR(U,ut,yt),ve=new qR(U,ut,yt),yt.programs=ae.programs,F.capabilities=it,F.extensions=ut,F.properties=Ue,F.renderLists=ye,F.shadowMap=xe,F.state=de,F.info=yt}b!==ei&&(P=new JR(b,n.width,n.height,o,a,s));const fe=new PF(F,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(A){A!==void 0&&(se=A,this.setSize(re,oe,!1))},this.getSize=function(A){return A.set(re,oe)},this.setSize=function(A,O,Y=!0){if(fe.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,oe=O,n.width=Math.floor(A*se),n.height=Math.floor(O*se),Y===!0&&(n.style.width=A+"px",n.style.height=O+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(re*se,oe*se).floor()},this.setDrawingBufferSize=function(A,O,Y){re=A,oe=O,se=Y,n.width=Math.floor(A*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(b===ei){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,O,Y,k){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,O,Y,k),de.viewport(w.copy(be).multiplyScalar(Ct()).round())},this.getScissor=function(A){return A.copy(Le)},this.setScissor=function(A,O,Y,k){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,O,Y,k),de.scissor(ee.copy(Le).multiplyScalar(Ct()).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(A){de.setScissorTest(Be=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,Y=!0){let k=0;if(A){let W=!1;if(Z!==null){const Se=Z.texture.format;W=x.has(Se)}if(W){const Se=Z.texture.type,Ce=h.has(Se),_e=D.getClearColor(),Ae=D.getClearAlpha(),Ne=_e.r,Xe=_e.g,ot=_e.b;Ce?(g[0]=Ne,g[1]=Xe,g[2]=ot,g[3]=Ae,U.clearBufferuiv(U.COLOR,0,g)):(S[0]=Ne,S[1]=Xe,S[2]=ot,S[3]=Ae,U.clearBufferiv(U.COLOR,0,S))}else k|=U.COLOR_BUFFER_BIT}O&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),V=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),D.dispose(),ye.dispose(),J.dispose(),ze.dispose(),Ue.dispose(),R.dispose(),ue.dispose(),j.dispose(),ge.dispose(),Fe.dispose(),ae.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",T0),fe.removeEventListener("sessionend",A0),gs.stop()};function Oe(A){A.preventDefault(),Lx("WebGLRenderer: Context Lost."),I=!0}function Ke(){Lx("WebGLRenderer: Context Restored."),I=!1;const A=yt.autoReset,O=xe.enabled,Y=xe.autoUpdate,k=xe.needsUpdate,W=xe.type;Qe(),yt.autoReset=A,xe.enabled=O,xe.autoUpdate=Y,xe.needsUpdate=k,xe.type=W}function Me(A){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function bt(A){const O=A.target;O.removeEventListener("dispose",bt),on(O)}function on(A){Ta(A),Ue.remove(A)}function Ta(A){const O=Ue.get(A).programs;O!==void 0&&(O.forEach(function(Y){ae.releaseProgram(Y)}),A.isShaderMaterial&&ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,Y,k,W,Se){O===null&&(O=dt);const Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,_e=Yb(A,O,Y,k,W);de.setMaterial(k,Ce);let Ae=Y.index,Ne=1;if(k.wireframe===!0){if(Ae=j.getWireframeAttribute(Y),Ae===void 0)return;Ne=2}const Xe=Y.drawRange,ot=Y.attributes.position;let we=Xe.start*Ne,lt=(Xe.start+Xe.count)*Ne;Se!==null&&(we=Math.max(we,Se.start*Ne),lt=Math.min(lt,(Se.start+Se.count)*Ne)),Ae!==null?(we=Math.max(we,0),lt=Math.min(lt,Ae.count)):ot!=null&&(we=Math.max(we,0),lt=Math.min(lt,ot.count));const Yt=lt-we;if(Yt<0||Yt===1/0)return;ge.setup(W,k,_e,Y,Ae);let Lt,Rt=Q;if(Ae!==null&&(Lt=T.get(Ae),Rt=ve,Rt.setIndex(Lt)),W.isMesh)k.wireframe===!0?(de.setLineWidth(k.wireframeLinewidth*Ct()),Rt.setMode(U.LINES)):Rt.setMode(U.TRIANGLES);else if(W.isLine){let En=k.linewidth;En===void 0&&(En=1),de.setLineWidth(En*Ct()),W.isLineSegments?Rt.setMode(U.LINES):W.isLineLoop?Rt.setMode(U.LINE_LOOP):Rt.setMode(U.LINE_STRIP)}else W.isPoints?Rt.setMode(U.POINTS):W.isSprite&&Rt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const En=W._multiDrawStarts,Re=W._multiDrawCounts,Fn=W._multiDrawCount,mt=Ae?T.get(Ae).bytesPerElement:1,xs=Ue.get(k).currentProgram.getUniforms();for(let Tn=0;Tn<Fn;Tn++)xs.setValue(U,"_gl_DrawID",Tn),Rt.render(En[Tn]/mt,Re[Tn])}else if(W.isInstancedMesh)Rt.renderInstances(we,Yt,W.count);else if(Y.isInstancedBufferGeometry){const En=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Re=Math.min(Y.instanceCount,En);Rt.renderInstances(we,Yt,Re)}else Rt.render(we,Yt)};function E0(A,O,Y,k){V!==null&&A.isNodeMaterial&&V.setObject(k,A),De===!0&&$.setState(A,Y,!1),A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,So(A,O,k),A.side=Xs,A.needsUpdate=!0,So(A,O,k),A.side=Hi):So(A,O,k)}this.compile=function(A,O,Y=null){Y===null&&(Y=A),V!==null&&V.renderStart(A,O,Y),C=J.get(Y),C.init(O),E.push(C),Y.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(C.pushLight(W),W.castShadow&&C.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(C.pushLight(W),W.castShadow&&C.pushShadow(W))}),C.setupLights(),V!==null&&V.updateLights(C.state.lightsArray),qe=this.localClippingEnabled,De=$.init(this.clippingPlanes,qe),De===!0&&$.setGlobalState(this.clippingPlanes,O),V!==null&&xe.render(C.state.shadowsArray,Y,O);const k=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const _e=Se[Ce];E0(_e,Y,O,W),k.add(_e)}else E0(Se,Y,O,W),k.add(Se)}),C=E.pop(),V!==null&&V.renderEnd(),k},this.compileAsync=function(A,O,Y=null){const k=this.compile(A,O,Y);return new Promise(W=>{function Se(){if(k.forEach(function(Ce){const Ae=Ue.get(Ce).currentProgram;(Ae===void 0||Ae.isReady())&&k.delete(Ce)}),k.size===0){W(A);return}setTimeout(Se,10)}ut.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Mf=null;function Wb(A){Mf&&Mf(A)}function T0(){gs.stop()}function A0(){gs.start()}const gs=new Ub;gs.setAnimationLoop(Wb),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(A){Mf=A,fe.setAnimationLoop(A),A===null?gs.stop():gs.start()},fe.addEventListener("sessionstart",T0),fe.addEventListener("sessionend",A0),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;V!==null&&V.renderStart(A,O);const Y=fe.enabled===!0&&fe.isPresenting===!0,k=P!==null&&(Z===null||Y)&&P.begin(F,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(F,A,O,Z),C=J.get(A,E.length),C.init(O),C.state.textureUnits=ze.getTextureUnits(),E.push(C),Ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?pe.setFromArrayCamera(O):le.setFromProjectionMatrix(Ye,wi,O.reversedDepth),qe=this.localClippingEnabled,De=$.init(this.clippingPlanes,qe),M=ye.get(A,v.length),M.init(),v.push(M),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){const Ce=F.xr.getDepthSensingMesh();Ce!==null&&Ef(Ce,O,-1/0,F.sortObjects)}Ef(A,O,0,F.sortObjects),M.finish(),V!==null&&V.updateLights(C.state.lightsArray),F.sortObjects===!0&&M.sort(Te,Ve),Bt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Bt&&D.addToRenderList(M,A),this.info.autoReset===!0&&this.info.reset(),De===!0&&$.beginShadows();const W=C.state.shadowsArray;if(xe.render(W,A,O),De===!0&&$.endShadows(),(k&&P.hasRenderPass())===!1){const Ce=M.opaque,_e=M.transmissive;if(C.setupLights(),O.isArrayCamera){const Ae=O.cameras;if(_e.length>0)for(let Ne=0,Xe=Ae.length;Ne<Xe;Ne++){const ot=Ae[Ne];w0(Ce,_e,A,ot)}Bt&&D.render(A);for(let Ne=0,Xe=Ae.length;Ne<Xe;Ne++){const ot=Ae[Ne];C0(M,A,ot,ot.viewport)}}else _e.length>0&&w0(Ce,_e,A,O),Bt&&D.render(A),C0(M,A,O)}Z!==null&&L===0&&(ze.updateMultisampleRenderTarget(Z),ze.updateRenderTargetMipmap(Z)),k&&P.end(F),A.isScene===!0&&A.onAfterRender(F,A,O),ge.resetDefaultState(),X=-1,N=null,E.pop(),E.length>0?(C=E[E.length-1],ze.setTextureUnits(C.state.textureUnits),De===!0&&$.setGlobalState(F.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?M=v[v.length-1]:M=null,V!==null&&V.renderEnd()};function Ef(A,O,Y,k){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)C.pushLight(A),A.castShadow&&C.pushShadow(A);else if(A.isSprite){const Ce=O.isArrayCamera?pe:le;if(!A.frustumCulled||A.intersectsFrustum(Ce)){k&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ye);const _e=ue.update(A),Ae=A.material;Ae.visible&&M.push(A,_e,Ae,Y,We.z,null,O)}}else if(A.isMesh||A.isLine||A.isPoints){const Ce=O.isArrayCamera?pe:le;if(!A.frustumCulled||A.intersectsFrustum(Ce)){const _e=ue.update(A),Ae=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),We.copy(_e.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ae)){const Ne=_e.groups;for(let Xe=0,ot=Ne.length;Xe<ot;Xe++){const we=Ne[Xe],lt=Ae[we.materialIndex];lt&&lt.visible&&M.push(A,_e,lt,Y,We.z,we,O)}}else Ae.visible&&M.push(A,_e,Ae,Y,We.z,null,O)}}}const Se=A.children;for(let Ce=0,_e=Se.length;Ce<_e;Ce++)Ef(Se[Ce],O,Y,k)}function C0(A,O,Y,k){const{opaque:W,transmissive:Se,transparent:Ce}=A;C.setupLightsView(Y),De===!0&&$.setGlobalState(F.clippingPlanes,Y),k&&de.viewport(w.copy(k)),W.length>0&&kl(W,O,Y),Se.length>0&&kl(Se,O,Y),Ce.length>0&&kl(Ce,O,Y),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function w0(A,O,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[k.id]===void 0){const we=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[k.id]=new Zi(1,1,{generateMipmaps:!0,type:we?Ji:ei,minFilter:qa,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const Se=C.state.transmissionRenderTarget[k.id],Ce=k.viewport||w;Se.setSize(Ce.z*F.transmissionResolutionScale,Ce.w*F.transmissionResolutionScale);const _e=F.getRenderTarget(),Ae=F.getActiveCubeFace(),Ne=F.getActiveMipmapLevel();F.setRenderTarget(Se),F.getClearColor(G),ne=F.getClearAlpha(),ne<1&&F.setClearColor(16777215,.5),F.clear(),Bt&&D.render(Y);const Xe=F.toneMapping;F.toneMapping=pa;const ot=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),C.setupLightsView(k),De===!0&&$.setGlobalState(F.clippingPlanes,k),kl(A,Y,k),ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se),ut.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let lt=0,Yt=O.length;lt<Yt;lt++){const Lt=O[lt],{object:Rt,geometry:En,material:Re,group:Fn}=Lt;if(Re.side===Hi&&Rt.layers.test(k.layers)){const mt=Re.side;Re.side=jn,Re.needsUpdate=!0,R0(Rt,Y,k,En,Re,Fn),Re.side=mt,Re.needsUpdate=!0,we=!0}}we===!0&&(ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se))}F.setRenderTarget(_e,Ae,Ne),F.setClearColor(G,ne),ot!==void 0&&(k.viewport=ot),F.toneMapping=Xe}function kl(A,O,Y){const k=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Ce=A[W],{object:_e,geometry:Ae,group:Ne}=Ce;let Xe=Ce.material;Xe.allowOverride===!0&&k!==null&&(Xe=k),_e.layers.test(Y.layers)&&R0(_e,O,Y,Ae,Xe,Ne)}}function R0(A,O,Y,k,W,Se){V!==null&&W.isNodeMaterial&&V.setObject(A,W),A.onBeforeRender(F,O,Y,k,W,Se),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(F,O,Y,k,A,Se),W.transparent===!0&&W.side===Hi&&W.forceSinglePass===!1?(W.side=jn,W.needsUpdate=!0,F.renderBufferDirect(Y,O,k,W,A,Se),W.side=Xs,W.needsUpdate=!0,F.renderBufferDirect(Y,O,k,W,A,Se),W.side=Hi):F.renderBufferDirect(Y,O,k,W,A,Se),A.onAfterRender(F,O,Y,k,W,Se)}function N0(A){let O=0;for(const Y of A)Y.texture!==null&&O++;return O}function So(A,O,Y){O.isScene!==!0&&(O=dt);const k=Ue.get(A),W=C.state.lights,Se=C.state.shadowsArray,Ce=W.state.version,_e=ae.getParameters(A,W.state,Se,O,Y,C.state.lightProbeGridArray),Ae=ae.getProgramCacheKey(_e);let Ne=k.programs;k.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;const Xe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;k.envMap=R.get(A.envMap||k.environment,Xe),k.envMapRotation=k.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",bt),Ne=new Map,k.programs=Ne,k.programVariants=new Map);let ot=Ne.get(Ae);if(ot!==void 0){if(k.currentProgram===ot&&k.lightsStateVersion===Ce)return D0(A,_e),ot}else _e.uniforms=ae.getUniforms(A),V!==null&&A.isNodeMaterial&&V.build(A,Y,_e),A.onBeforeCompile(_e,F),ot=ae.acquireProgram(_e,Ae),Ne.set(Ae,ot),k.uniforms=_e.uniforms;const we=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(we.clippingPlanes=$.uniform),D0(A,_e),k.needsLights=Kb(A),k.lightsStateVersion=Ce,k.needsLights&&(we.ambientLightColor.value=W.state.ambient,we.lightProbe.value=W.state.probe,we.sunLights.value=W.state.sun,we.sunLightShadows.value=W.state.sunShadow,we.directionalLights.value=W.state.directional,we.directionalLightShadows.value=W.state.directionalShadow,we.spotLights.value=W.state.spot,we.spotLightShadows.value=W.state.spotShadow,we.rectAreaLights.value=W.state.rectArea,we.ltc_1.value=W.state.rectAreaLTC1,we.ltc_2.value=W.state.rectAreaLTC2,we.pointLights.value=W.state.point,we.pointLightShadows.value=W.state.pointShadow,we.hemisphereLights.value=W.state.hemi,we.sunShadowMatrix.value=W.state.sunShadowMatrix,we.sunShadowCascade.value=W.state.sunShadowCascade,we.directionalShadowMatrix.value=W.state.directionalShadowMatrix,we.spotLightMatrix.value=W.state.spotLightMatrix,we.spotLightMap.value=W.state.spotLightMap,we.pointShadowMatrix.value=W.state.pointShadowMatrix),k.numLightProbeGrids=N0(C.state.lightProbeGridArray),k.currentProgram=ot,k.uniformsList=null,ot}function qb(A,O,Y,k,W){const Se=Ue.get(A),Ce=Se.currentProgram.id+","+k+","+W;let _e=Se.programVariants.get(Ce);return _e===void 0?(_e=So(A,O,Y),Se.programVariants.set(Ce,_e)):(Se.currentProgram=_e,Se.uniformsList=null,Se.outputColorSpace=k,Se.toneMapping=W),_e}function F0(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=lu.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function D0(A,O){const Y=Ue.get(A);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Yb(A,O,Y,k,W){O.isScene!==!0&&(O=dt),ze.resetTextureUnits();const Se=O.fog,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,_e=Z===null?F.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ft.workingColorSpace,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ne=R.get(k.envMap||Ce,Ae),Xe=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ot=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,Yt=!!Y.morphAttributes.color;let Lt=pa;k.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Lt=F.toneMapping);const Rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,En=Rt!==void 0?Rt.length:0,Re=Ue.get(k),Fn=C.state.lights;if(De===!0&&(qe===!0||A!==N)){const Vt=A===N&&k.id===X;$.setState(k,A,Vt)}let mt=!1,xs=!1;k.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Fn.state.version||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==Ne||k.fog===!0&&Re.fog!==Se||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==$.numPlanes||Re.numIntersection!==$.numIntersection)||Re.vertexAlphas!==Xe||Re.vertexTangents!==ot||Re.morphTargets!==we||Re.morphNormals!==lt||Re.morphColors!==Yt||Re.morphTargetsCount!==En||Re.numLightProbeGrids!==N0(C.state.lightProbeGridArray)?mt=!0:(Re.outputColorSpace!==_e||Re.toneMapping!==Lt)&&(xs=!0):(mt=!0,Re.__version=k.version);let Tn=Re.currentProgram;(mt===!0||xs===!0)&&(Tn=xs===!0?qb(k,O,W,_e,Lt):So(k,O,W),V&&k.isNodeMaterial&&V.onUpdateProgram(k,Tn,Re));let jl=!1,Aa=!1,vs=!1;const ht=Tn.getUniforms(),mn=Re.uniforms;if(de.useProgram(Tn.program)&&(jl=!0,Aa=!0,vs=!0),k.id!==X&&(X=k.id,Aa=!0),jl||N!==A){de.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",A.projectionMatrix),ht.setValue(U,"viewMatrix",A.matrixWorldInverse);const ln=ht.map.cameraPosition;ln!==void 0&&ln.setValue(U,Dt.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ht.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,Aa=!0,vs=!0)}if(Re.needsLights&&(Fn.state.sunShadowMap.length>0&&ht.setValue(U,"sunShadowMap",Fn.state.sunShadowMap,ze),Fn.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",Fn.state.directionalShadowMap,ze),Fn.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",Fn.state.spotShadowMap,ze),Fn.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",Fn.state.pointShadowMap,ze)),W.isSkinnedMesh){ht.setOptional(U,W,"bindMatrix"),ht.setOptional(U,W,"bindMatrixInverse");const Vt=W.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ht.setValue(U,"boneTexture",Vt.boneTexture,ze))}W.isBatchedMesh&&(ht.setOptional(U,W,"batchingTexture"),ht.setValue(U,"batchingTexture",W._matricesTexture,ze),ht.setOptional(U,W,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",W._indirectTexture,ze),ht.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",W._colorsTexture,ze));const _i=Y.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&te.update(W,Y,Tn),(Aa||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,ht.setValue(U,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(mn.envMapIntensity.value=O.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=GF()),Aa){if(ht.setValue(U,"toneMappingExposure",F.toneMappingExposure),Re.needsLights&&Zb(mn,vs),Se&&k.fog===!0&&me.refreshFogUniforms(mn,Se),me.refreshMaterialUniforms(mn,k,se,oe,C.state.transmissionRenderTarget[A.id]),Re.needsLights&&Re.numLightProbeGrids>0){const Vt=y;let ln=0;for(const ta of C.state.lightProbeGridArray)ta.texture!==null&&(Vt.textures[ln]=ta.texture,Vt.min[ln]=ta.boundingBox.min,Vt.max[ln]=ta.boundingBox.max,Vt.resolution[ln]=ta.resolution,ln++);for(const ta in Vt)Vt[ta].length=ln;mn.probesSH.value=Vt.textures,mn.probesMin.value=Vt.min,mn.probesMax.value=Vt.max,mn.probesResolution.value=Vt.resolution}lu.upload(U,F0(Re),mn,ze)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(lu.upload(U,F0(Re),mn,ze),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ht.setValue(U,"center",W.center),ht.setValue(U,"modelViewMatrix",W.modelViewMatrix),ht.setValue(U,"normalMatrix",W.normalMatrix),ht.setValue(U,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){const Vt=k.uniformsGroups;for(let ln=0,ta=Vt.length;ln<ta;ln++){const U0=Vt[ln];Fe.update(U0,Tn),Fe.bind(U0,Tn)}}return Tn}function Zb(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Kb(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,O,Y){const k=Ue.get(A);k.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ue.get(A.texture).__webglTexture=O,Ue.get(A.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){const Y=Ue.get(A);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,Y=0){Z=A,B=O,L=Y;let k=null,W=!1,Se=!1;if(A){const _e=Ue.get(A);if(_e.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(U.FRAMEBUFFER,_e.__webglFramebuffer),w.copy(A.viewport),ee.copy(A.scissor),ce=A.scissorTest,de.viewport(w),de.scissor(ee),de.setScissorTest(ce),X=-1;return}else if(_e.__webglFramebuffer===void 0)ze.setupRenderTarget(A);else if(_e.__hasExternalTextures)ze.rebindTextures(A,Ue.get(A.texture).__webglTexture,Ue.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(_e.__boundDepthTexture!==Xe){if(Xe!==null&&Ue.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(A)}}const Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Se=!0);const Ne=Ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?k=Ne[O][Y]:k=Ne[O],W=!0):A.samples>0&&ze.useMultisampledRTT(A)===!1?k=Ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[Y]:k=Ne,w.copy(A.viewport),ee.copy(A.scissor),ce=A.scissorTest}else w.copy(be).multiplyScalar(se).floor(),ee.copy(Le).multiplyScalar(se).floor(),ce=Be;if(Y!==0&&(k=K),de.bindFramebuffer(U.FRAMEBUFFER,k)&&de.drawBuffers(A,k),de.viewport(w),de.scissor(ee),de.setScissorTest(ce),W){const _e=Ue.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,Y)}else if(Se){const _e=O;for(let Ae=0;Ae<A.textures.length;Ae++){const Ne=Ue.get(A.textures[Ae]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ae,Ne.__webglTexture,Y,_e)}}else if(A!==null&&Y!==0){const _e=Ue.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,Y)}X=-1};function L0(A){const O=Ue.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=it.textureFormatReadable(A.format),O.__typeReadable=it.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,Y,k,W,Se,Ce,_e=0){if(!(A&&A.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ae=Ae[Ce],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){de.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Ne=A.textures[_e],Xe=Ne.format,ot=Ne.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);const we=L0(Ne);if(we.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-k&&Y>=0&&Y<=A.height-W&&U.readPixels(O,Y,k,W,he.convert(Xe),he.convert(ot),Se)}finally{const Ne=Z!==null?Ue.get(Z).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,O,Y,k,W,Se,Ce,_e=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ae=Ae[Ce],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(O>=0&&O<=A.width-k&&Y>=0&&Y<=A.height-W){de.bindFramebuffer(U.FRAMEBUFFER,Ae);const Ne=A.textures[_e],Xe=Ne.format,ot=Ne.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e);const we=L0(Ne);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(O,Y,k,W,he.convert(Xe),he.convert(ot),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Yt=Z!==null?Ue.get(Z).__webglFramebuffer:null;de.bindFramebuffer(U.FRAMEBUFFER,Yt);const Lt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rC(U,Lt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(lt),U.deleteSync(Lt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,Y=0){const k=Math.pow(2,-Y),W=Math.floor(A.image.width*k),Se=Math.floor(A.image.height*k),Ce=O!==null?O.x:0,_e=O!==null?O.y:0;ze.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ce,_e,W,Se),de.unbindTexture()},this.copyTextureToTexture=function(A,O,Y=null,k=null,W=0,Se=0){let Ce,_e,Ae,Ne,Xe,ot,we,lt,Yt;const Lt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(Y!==null)Ce=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,Xe=Y.min.y,ot=Y.isBox3?Y.min.z:0;else{const ht=Math.pow(2,-W);Ce=Math.floor(Lt.width*ht),_e=Math.floor(Lt.height*ht),A.isDataArrayTexture?Ae=Lt.depth:A.isData3DTexture?Ae=Math.floor(Lt.depth*ht):Ae=1,Ne=0,Xe=0,ot=0}k!==null?(we=k.x,lt=k.y,Yt=k.z):(we=0,lt=0,Yt=0);const Rt=he.convert(O.format),En=he.convert(O.type);let Re;O.isData3DTexture?(ze.setTexture3D(O,0),Re=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ze.setTexture2DArray(O,0),Re=U.TEXTURE_2D_ARRAY):(ze.setTexture2D(O,0),Re=U.TEXTURE_2D),de.activeTexture(U.TEXTURE0),de.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),de.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),de.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Fn=de.getParameter(U.UNPACK_ROW_LENGTH),mt=de.getParameter(U.UNPACK_IMAGE_HEIGHT),xs=de.getParameter(U.UNPACK_SKIP_PIXELS),Tn=de.getParameter(U.UNPACK_SKIP_ROWS),jl=de.getParameter(U.UNPACK_SKIP_IMAGES);de.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),de.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),de.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),de.pixelStorei(U.UNPACK_SKIP_IMAGES,ot);const Aa=A.isDataArrayTexture||A.isData3DTexture,vs=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const ht=Ue.get(A),mn=Ue.get(O),_i=Ue.get(ht.__renderTarget),Vt=Ue.get(mn.__renderTarget);de.bindFramebuffer(U.READ_FRAMEBUFFER,_i.__webglFramebuffer),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let ln=0;ln<Ae;ln++)Aa&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.get(A).__webglTexture,W,ot+ln),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ue.get(O).__webglTexture,Se,Yt+ln)),U.blitFramebuffer(Ne,Xe,Ne+Ce,Xe+_e,we,lt,we+Ce,lt+_e,U.DEPTH_BUFFER_BIT,U.NEAREST);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||Ue.has(A)){const ht=Ue.get(A),mn=Ue.get(O);de.bindFramebuffer(U.READ_FRAMEBUFFER,z),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,q);for(let _i=0;_i<Ae;_i++)Aa?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ht.__webglTexture,W,ot+_i):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,W),vs?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,mn.__webglTexture,Se,Yt+_i):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mn.__webglTexture,Se),W!==0?U.blitFramebuffer(Ne,Xe,Ne+Ce,Xe+_e,we,lt,we+Ce,lt+_e,U.COLOR_BUFFER_BIT,U.NEAREST):vs?U.copyTexSubImage3D(Re,Se,we,lt,Yt+_i,Ne,Xe,Ce,_e):U.copyTexSubImage2D(Re,Se,we,lt,Ne,Xe,Ce,_e);de.bindFramebuffer(U.READ_FRAMEBUFFER,null),de.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else vs?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Re,Se,we,lt,Yt,Ce,_e,Ae,Rt,En,Lt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,Se,we,lt,Yt,Ce,_e,Ae,Rt,Lt.data):U.texSubImage3D(Re,Se,we,lt,Yt,Ce,_e,Ae,Rt,En,Lt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,we,lt,Ce,_e,Rt,En,Lt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,we,lt,Lt.width,Lt.height,Rt,Lt.data):U.texSubImage2D(U.TEXTURE_2D,Se,we,lt,Ce,_e,Rt,En,Lt);de.pixelStorei(U.UNPACK_ROW_LENGTH,Fn),de.pixelStorei(U.UNPACK_IMAGE_HEIGHT,mt),de.pixelStorei(U.UNPACK_SKIP_PIXELS,xs),de.pixelStorei(U.UNPACK_SKIP_ROWS,Tn),de.pixelStorei(U.UNPACK_SKIP_IMAGES,jl),Se===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&U.generateMipmap(Re),de.unbindTexture()},this.initRenderTarget=function(A){Ue.get(A).__webglFramebuffer===void 0&&ze.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ze.setTextureCube(A,0):A.isData3DTexture?ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ze.setTexture2DArray(A,0):ze.setTexture2D(A,0),de.unbindTexture()},this.resetState=function(){B=0,L=0,Z=null,de.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),n.unpackColorSpace=ft._getUnpackColorSpace()}}function VF({className:t=""}){const e=$e.useRef(null);return $e.useEffect(()=>{const n=e.current;if(!n)return;let i=n.clientWidth||window.innerWidth,a=n.clientHeight||500;const s=new Sb;s.fog=new _f(329751,.04);const r=new Jn(45,i/a,.1,100);r.position.set(0,0,8);const o=new Xb({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setSize(i,a),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(o.domElement);const l=new Lr;s.add(l);const c=new h0(1.9,0),d=new Go({color:556031,emissive:51455,emissiveIntensity:.35,roughness:.15,metalness:.95,wireframe:!1}),m=new Kt(c,d);l.add(m);const f=new m0(2.3,1),p=new Ps({color:16761385,wireframe:!0,transparent:!0,opacity:.45}),_=new Kt(f,p);l.add(_);const b=new Wu(3.1,.035,16,120),x=new Ps({color:51455,transparent:!0,opacity:.85}),h=new Kt(b,x);h.rotation.x=Math.PI/3,l.add(h);const g=new Wu(3.6,.02,16,120),S=new Ps({color:16761385,transparent:!0,opacity:.6}),y=new Kt(g,S);y.rotation.y=Math.PI/3.5,y.rotation.z=Math.PI/4,l.add(y);const M=200,C=new Float32Array(M*3);for(let L=0;L<M;L++)C[L*3]=(Math.random()-.5)*12,C[L*3+1]=(Math.random()-.5)*8,C[L*3+2]=(Math.random()-.5)*8;const v=new nn;v.setAttribute("position",new ss(C,3));const E=new Eb({color:51455,size:.05,transparent:!0,opacity:.6,blending:np}),P=new OC(v,E);s.add(P);const F=new lv(51455,3,15);F.position.set(0,0,2),s.add(F);const I=new lv(16761385,2,10);I.position.set(3,3,3),s.add(I);const V=new Db(659493,1);s.add(V);let K,z=new Lb;const q=()=>{K=requestAnimationFrame(q);const L=z.getElapsedTime();l.rotation.y=L*.35,l.rotation.x=Math.sin(L*.4)*.15,h.rotation.z=L*.5,y.rotation.z=-L*.35,m.rotation.y=-L*.2,m.rotation.z=L*.1,P.rotation.y=L*.05,o.render(s,r)};q();const B=()=>{n&&(i=n.clientWidth||window.innerWidth,a=n.clientHeight||500,r.aspect=i/a,r.updateProjectionMatrix(),o.setSize(i,a))};return window.addEventListener("resize",B),()=>{window.removeEventListener("resize",B),cancelAnimationFrame(K),o.dispose(),c.dispose(),f.dispose(),b.dispose(),g.dispose(),v.dispose(),d.dispose(),p.dispose(),x.dispose(),S.dispose(),E.dispose(),n&&o.domElement&&n.contains(o.domElement)&&n.removeChild(o.domElement)}},[]),u.jsx("div",{ref:e,className:`relative w-full h-[380px] sm:h-[460px] pointer-events-none select-none ${t}`,"aria-hidden":"true"})}function kF({onStartProject:t}){const e=()=>{Pe.playClick(),window.scrollTo({top:0,behavior:"smooth"})},n=()=>{Pe.playClick(),t&&t();const i=document.querySelector("#contact");i&&i.scrollIntoView({behavior:"smooth"})};return u.jsxs("footer",{className:"relative w-full bg-[#050817] overflow-hidden border-t border-white/5 pt-20",children:[u.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#087BFF]/15 via-[#5715A8]/20 to-transparent blur-[140px] pointer-events-none"}),u.jsx("div",{className:"absolute inset-0 cyber-grid opacity-20 pointer-events-none"}),u.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[u.jsx("div",{className:"relative w-full flex items-center justify-center -mb-8 sm:-mb-14",children:u.jsx(VF,{})}),u.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto space-y-4 mb-12",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#FFC229]/40 bg-[#FFC229]/10 text-[#FFC229] text-xs font-mono tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(255,194,41,0.2)]",children:[u.jsx(Ni,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"THE NEXT HORIZON"})]}),u.jsx("h2",{className:"text-3xl sm:text-5xl md:text-7xl font-space font-extrabold tracking-tight text-[#FFC229] glow-gold leading-tight",children:"THE FUTURE ISN'T WAITING."}),u.jsx("h3",{className:"text-3xl sm:text-5xl md:text-6xl font-space font-extrabold tracking-tight text-[#F5F7FF] leading-tight",children:"WHY SHOULD YOU?"}),u.jsx("p",{className:"text-base sm:text-xl font-sora text-[#00C8FF] tracking-wide pt-2",children:"“LET'S BUILD THE FUTURE TOGETHER.”"}),u.jsx("div",{className:"pt-6",children:u.jsxs("button",{onClick:n,onMouseEnter:()=>Pe.playHover(),className:"px-10 py-5 rounded-2xl font-space font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#050817] bg-gradient-to-r from-[#00C8FF] via-[#087BFF] to-[#FFC229] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 shadow-[0_0_35px_rgba(0,200,255,0.5)] hover:shadow-[0_0_45px_rgba(255,194,41,0.6)] hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer",children:[u.jsx("span",{children:"START YOUR PROJECT"}),u.jsx(zu,{className:"w-5 h-5 text-[#050817]"})]})})]}),u.jsx("div",{className:"h-px w-full bg-gradient-to-r from-transparent via-[#00C8FF]/30 to-transparent my-16"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-8 text-left pb-16",children:[u.jsxs("div",{className:"md:col-span-5 space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-9 h-9 rounded-lg bg-[#087BFF]/20 border border-[#00C8FF] flex items-center justify-center font-mono font-black text-xs text-[#00C8FF] shadow-[0_0_12px_rgba(0,200,255,0.4)]",children:"GTK"}),u.jsx("span",{className:"text-xl font-space font-extrabold tracking-wider text-[#F5F7FF]",children:"GEN TECH KA"})]}),u.jsx("p",{className:"text-xs sm:text-sm font-sora text-[#00C8FF]",children:"“We Turn Ideas Into Digital Reality.”"}),u.jsx("p",{className:"text-xs font-inter text-[#9CA6C5] max-w-sm leading-relaxed",children:"Karnataka-born next-generation digital technology studio engineering 3D websites, intelligent web applications, mobile platforms, and autonomous systems."}),u.jsxs("div",{className:"flex items-center gap-3 pt-2",children:[u.jsx("a",{href:"https://instagram.com/gentechka",target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-lg bg-[#0A1025] border border-white/10 flex items-center justify-center text-[#9CA6C5] hover:text-[#00C8FF] hover:border-[#00C8FF] transition-colors","aria-label":"Instagram",children:u.jsx(Z1,{className:"w-4 h-4"})}),u.jsx("a",{href:"https://wa.me/919876543210",target:"_blank",rel:"noopener noreferrer",className:"w-8 h-8 rounded-lg bg-[#0A1025] border border-white/10 flex items-center justify-center text-[#9CA6C5] hover:text-[#25D366] hover:border-[#25D366] transition-colors","aria-label":"WhatsApp",children:u.jsx(yl,{className:"w-4 h-4"})}),u.jsx("a",{href:"mailto:hello@gentechka.com",className:"w-8 h-8 rounded-lg bg-[#0A1025] border border-white/10 flex items-center justify-center text-[#9CA6C5] hover:text-[#087BFF] hover:border-[#087BFF] transition-colors","aria-label":"Email",children:u.jsx(tp,{className:"w-4 h-4"})})]})]}),u.jsxs("div",{className:"md:col-span-3 space-y-3",children:[u.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-[#00C8FF]",children:"NAVIGATION"}),u.jsxs("ul",{className:"space-y-2 text-xs font-inter text-[#9CA6C5]",children:[u.jsx("li",{children:u.jsx("a",{href:"#problem",className:"hover:text-[#F5F7FF] transition-colors",children:"01 // The Problem"})}),u.jsx("li",{children:u.jsx("a",{href:"#solutions",className:"hover:text-[#F5F7FF] transition-colors",children:"02 // Architectural Solutions"})}),u.jsx("li",{children:u.jsx("a",{href:"#showcase",className:"hover:text-[#F5F7FF] transition-colors",children:"03 // Digital Showcase"})}),u.jsx("li",{children:u.jsx("a",{href:"#process",className:"hover:text-[#F5F7FF] transition-colors",children:"04 // Engineering Process"})}),u.jsx("li",{children:u.jsx("a",{href:"#why-us",className:"hover:text-[#F5F7FF] transition-colors",children:"05 // Why GEN TECH KA"})}),u.jsx("li",{children:u.jsx("a",{href:"#contact",className:"hover:text-[#F5F7FF] transition-colors",children:"06 // Project Enquiry"})})]})]}),u.jsxs("div",{className:"md:col-span-4 space-y-3",children:[u.jsx("h4",{className:"text-xs font-mono uppercase tracking-widest text-[#FFC229]",children:"CORE SERVICES"}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono text-[#9CA6C5]",children:[u.jsx("span",{children:"• Website Dev"}),u.jsx("span",{children:"• Web Apps"}),u.jsx("span",{children:"• Mobile Apps"}),u.jsx("span",{children:"• AI & Automation"}),u.jsx("span",{children:"• UI/UX Design"}),u.jsx("span",{children:"• Digital Solutions"})]}),u.jsxs("div",{className:"pt-4 p-3 rounded-xl bg-[#0A1025] border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-mono text-[#00C8FF]",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00C8FF] animate-pulse"}),u.jsx("span",{children:"SYSTEM ONLINE // ALL CHANNELS ACTIVE"})]}),u.jsx("div",{className:"text-[11px] font-inter text-[#9CA6C5] mt-1",children:"Karnataka, India 🇮🇳 // Accepting commission briefs for 2026."})]})]})]}),u.jsxs("div",{className:"py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9CA6C5]",children:[u.jsxs("div",{children:["© 2026 ",u.jsx("strong",{className:"text-[#F5F7FF]",children:"GEN TECH KA"}),". All Rights Reserved."]}),u.jsxs("button",{onClick:e,onMouseEnter:()=>Pe.playHover(),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#00C8FF] hover:text-[#00C8FF] transition-colors",children:[u.jsx("span",{children:"BACK TO TOP"}),u.jsx(GA,{className:"w-3.5 h-3.5"})]})]})]})]})}function jF(){const[t,e]=$e.useState({x:-100,y:-100}),[n,i]=$e.useState({x:-100,y:-100}),[a,s]=$e.useState(!1),[r,o]=$e.useState(!1),[l,c]=$e.useState(!1);return $e.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches){c(!0);return}const d=b=>{e({x:b.clientX,y:b.clientY}),r||o(!0);const x=b.target;x!=null&&x.closest("button")||x!=null&&x.closest("a")||x!=null&&x.closest("input")||x!=null&&x.closest("textarea")||x!=null&&x.closest(".cursor-pointer")||x!=null&&x.closest('[role="button"]')?s(!0):s(!1)},m=()=>o(!1),f=()=>o(!0);window.addEventListener("mousemove",d),document.addEventListener("mouseleave",m),document.addEventListener("mouseenter",f);let p;const _=()=>{i(b=>({x:b.x+(t.x-b.x)*.22,y:b.y+(t.y-b.y)*.22})),p=requestAnimationFrame(_)};return p=requestAnimationFrame(_),()=>{window.removeEventListener("mousemove",d),document.removeEventListener("mouseleave",m),document.removeEventListener("mouseenter",f),cancelAnimationFrame(p)}},[t.x,t.y,r]),l||!r?null:u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#00C8FF] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#00C8FF]",style:{transform:`translate3d(${t.x}px, ${t.y}px, 0)`,transition:"transform 0.04s linear"}}),u.jsx("div",{className:`fixed top-0 left-0 rounded-full border pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${a?"w-12 h-12 border-[#FFC229] bg-[#FFC229]/10 shadow-[0_0_20px_rgba(255,194,41,0.4)] scale-110":"w-8 h-8 border-[#00C8FF]/60 bg-[#00C8FF]/5 shadow-[0_0_12px_rgba(0,200,255,0.25)] scale-100"}`,style:{left:`${n.x}px`,top:`${n.y}px`}})]})}function XF(){const[t,e]=$e.useState(!1),[n,i]=$e.useState(""),a="919876543210",s=r=>{r.preventDefault(),Pe.playClick();const o=encodeURIComponent(n.trim()||"Hi GEN TECH KA! I am exploring your digital agency services and would like to build something.");window.open(`https://wa.me/${a}?text=${o}`,"_blank"),e(!1),i("")};return u.jsxs("div",{className:"fixed bottom-6 right-6 z-40 flex flex-col items-end",children:[t&&u.jsxs("div",{className:"mb-3 w-80 sm:w-96 rounded-2xl border border-[#25D366]/40 bg-[#0A1025] shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in backdrop-blur-xl",children:[u.jsxs("div",{className:"bg-[#050817] p-4 border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{className:"relative w-9 h-9 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366]",children:[u.jsx(yl,{className:"w-5 h-5"}),u.jsx("span",{className:"absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-[#050817]"})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-space font-bold text-[#F5F7FF]",children:"GEN TECH KA Support"}),u.jsx("div",{className:"text-[10px] font-mono text-[#25D366]",children:"Online // Instant Reply"})]})]}),u.jsx("button",{onClick:()=>{Pe.playClick(),e(!1)},className:"p-1 rounded-md text-[#9CA6C5] hover:text-[#F5F7FF]","aria-label":"Close Chat",children:u.jsx(vf,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:"p-4 space-y-3",children:[u.jsxs("div",{className:"p-3 rounded-xl bg-[#050817]/80 border border-white/5 text-xs text-[#F5F7FF] space-y-1",children:[u.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] font-mono text-[#00C8FF]",children:[u.jsx(Ni,{className:"w-3 h-3"}),u.jsx("span",{children:"GEN TECH KA // ARCHITECTURE DESK"})]}),u.jsx("p",{children:"Have a quick question about a project, budget, or 3D development timeline? Ping us directly!"})]}),u.jsxs("form",{onSubmit:s,className:"flex gap-2",children:[u.jsx("input",{type:"text",value:n,onChange:r=>i(r.target.value),placeholder:"Type your message...",className:"flex-1 px-3 py-2 rounded-xl bg-[#050817] border border-white/10 text-xs text-[#F5F7FF] placeholder-[#9CA6C5]/50 focus:outline-none focus:border-[#25D366]"}),u.jsx("button",{type:"submit",className:"p-2.5 rounded-xl bg-[#25D366] text-[#050817] hover:scale-105 transition-transform",title:"Send via WhatsApp",children:u.jsx(O1,{className:"w-4 h-4"})})]})]})]}),u.jsxs("button",{onClick:()=>{Pe.playClick(),e(!t)},onMouseEnter:()=>Pe.playHover(),className:"group relative w-14 h-14 rounded-full bg-[#25D366] text-[#050817] flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer","aria-label":"Chat on WhatsApp with GEN TECH KA",children:[u.jsx(yl,{className:"w-6 h-6 fill-current"}),u.jsx("span",{className:"absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 pointer-events-none"}),u.jsx("span",{className:"hidden sm:group-hover:inline-block absolute right-16 px-3 py-1.5 rounded-lg bg-[#0A1025] border border-[#25D366]/40 text-[#25D366] text-xs font-mono whitespace-nowrap shadow-[0_4px_15px_rgba(0,0,0,0.8)] pointer-events-none",children:"Chat on WhatsApp"})]})]})}function WF(){const t=$e.useRef(null);return $e.useEffect(()=>{const e=t.current;if(!e)return;let n=window.innerWidth,i=window.innerHeight;const a=new Sb;a.background=new tt(329751),a.fog=new _f(329751,.04);const s=new Jn(40,n/i,.1,100);s.position.set(2.8,6.2,7.8),s.lookAt(0,0,0);const r=new Xb({antialias:!0,alpha:!1,powerPreference:"high-performance"});r.setSize(n,i),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.toneMapping=n0,r.toneMappingExposure=1.3,r.shadowMap.enabled=!0,r.shadowMap.type=K1,e.appendChild(r.domElement);const o=new YC(40,50,51455,661560);o.position.y=-.55,o.material.transparent=!0,o.material.opacity=.22,a.add(o);const l=new Gl(60,60),c=new Go({color:329751,roughness:.8,metalness:.2}),d=new Kt(l,c);d.rotation.x=-Math.PI/2,d.position.y=-.56,a.add(d);const m=new Lr;a.add(m);const p=(()=>{const le=document.createElement("canvas");le.width=1024,le.height=1024;const pe=le.getContext("2d");if(!pe)return null;const De=pe.createLinearGradient(0,0,1024,1024);De.addColorStop(0,"#CBD5E1"),De.addColorStop(.5,"#E2E8F0"),De.addColorStop(1,"#94A3B8"),pe.fillStyle=De,pe.fillRect(0,0,1024,1024),pe.fillStyle="rgba(255, 255, 255, 0.08)";for(let qe=0;qe<1024;qe+=3)pe.fillRect(0,qe,1024,1);return pe.strokeStyle="#FFFFFF",pe.lineWidth=12,pe.strokeRect(40,40,944,944),pe.strokeStyle="rgba(0, 0, 0, 0.25)",pe.lineWidth=6,pe.strokeRect(52,52,920,920),pe.save(),pe.shadowColor="rgba(0, 0, 0, 0.6)",pe.shadowOffsetX=4,pe.shadowOffsetY=6,pe.shadowBlur=8,pe.font='bold 92px "Space Grotesk", sans-serif',pe.fillStyle="#CBD5E1",pe.textAlign="center",pe.fillText("GEN TECH KA",512,530),pe.restore(),pe.fillStyle="#FFFFFF",pe.font='bold 92px "Space Grotesk", sans-serif',pe.textAlign="center",pe.fillText("GEN TECH KA",510,526),pe.fillStyle="rgba(71, 85, 105, 0.7)",pe.font="bold 22px monospace",pe.textAlign="right",pe.fillText("GTK-AXION // 2026",920,120),pe.textAlign="left",pe.fillText("NEURAL FABRIC",100,120),new PC(le)})(),_=new rs(3.6,.45,3.6),b=new Go({color:13424352,roughness:.22,metalness:.92,map:p||null}),x=new Kt(_,b);x.position.y=.22,m.add(x);const h=new rs(4.1,.2,4.1),g=new Go({color:528420,roughness:.3,metalness:.8}),S=new Kt(h,g);S.position.y=-.05,m.add(S);const y=new rs(.08,.12,.22),M=new Go({color:16761385,roughness:.1,metalness:.95,emissive:16761385,emissiveIntensity:.3}),C=[-1.5,-1.2,-.9,-.6,-.3,0,.3,.6,.9,1.2,1.5];C.forEach(le=>{const pe=new Kt(y,M);pe.rotation.y=Math.PI/2,pe.position.set(-2.05,-.05,le),m.add(pe);const De=new Kt(y,M);De.rotation.y=Math.PI/2,De.position.set(2.05,-.05,le),m.add(De);const qe=new Kt(y,M);qe.position.set(le,-.05,-2.05),m.add(qe);const Ye=new Kt(y,M);Ye.position.set(le,-.05,2.05),m.add(Ye)});const v=[],E=[];C.forEach((le,pe)=>{const De=[];for(let U=0;U<=30;U++){const _t=U/30,ut=-12+_t*(-2.05- -12),it=Math.sin(_t*Math.PI*3+pe*.4)*.12*(1-_t*.8),de=-.05+it*.5,yt=le+it;De.push(new H(ut,de,yt))}const We=new Dc(De);v.push(We);const dt=new nn().setFromPoints(We.getPoints(50)),Bt=new Ur({color:51455,transparent:!0,opacity:.75,linewidth:2}),Ct=new Ho(dt,Bt);a.add(Ct),E.push(Ct)}),C.forEach((le,pe)=>{const De=[];for(let U=0;U<=30;U++){const _t=U/30,ut=12+_t*(2.05-12),it=Math.sin(_t*Math.PI*3+pe*.4)*.12*(1-_t*.8),de=-.05+it*.5,yt=le+it;De.push(new H(ut,de,yt))}const We=new Dc(De);v.push(We);const dt=new nn().setFromPoints(We.getPoints(50)),Bt=new Ur({color:51455,transparent:!0,opacity:.75,linewidth:2}),Ct=new Ho(dt,Bt);a.add(Ct),E.push(Ct)});const P=[-1.2,-.9,-.6,-.3,0,.3,.6,.9,1.2];P.forEach((le,pe)=>{const De=[];for(let U=0;U<=25;U++){const _t=U/25,ut=-10+_t*(-2.05- -10),it=Math.sin(_t*Math.PI*2.5+pe*.5)*.14*(1-_t*.8),de=-.05+it*.5,yt=le+it;De.push(new H(yt,de,ut))}const We=new Dc(De);v.push(We);const dt=new nn().setFromPoints(We.getPoints(40)),Bt=new Ur({color:16761385,transparent:!0,opacity:.7}),Ct=new Ho(dt,Bt);a.add(Ct),E.push(Ct)}),P.forEach((le,pe)=>{const De=[];for(let U=0;U<=25;U++){const _t=U/25,ut=10+_t*(2.05-10),it=Math.sin(_t*Math.PI*2.5+pe*.5)*.14*(1-_t*.8),de=-.05+it*.5,yt=le+it;De.push(new H(yt,de,ut))}const We=new Dc(De);v.push(We);const dt=new nn().setFromPoints(We.getPoints(40)),Bt=new Ur({color:556031,transparent:!0,opacity:.7}),Ct=new Ho(dt,Bt);a.add(Ct),E.push(Ct)});const F=140,I=new x0(.07,8,8),V=new Ps({color:51455}),K=new Ps({color:16761385}),z=[];for(let le=0;le<F;le++){const pe=le%v.length,De=le%3===0?K:V,qe=new Kt(I,De);a.add(qe),z.push({mesh:qe,curveIdx:pe,progress:Math.random(),speed:.004+Math.random()*.005})}const q=new g0(3.6,3.75,64),B=new Ps({color:51455,side:Hi,transparent:!0,opacity:.5}),L=new Kt(q,B);L.rotation.x=-Math.PI/2,L.position.y=-.02,a.add(L);const Z=new Db(660014,2);a.add(Z);const X=new Bd(16777215,3.5);X.position.set(4,9,5),a.add(X);const N=new Bd(51455,3);N.position.set(-8,5,-5),a.add(N);const w=new Bd(16761385,2.2);w.position.set(6,4,-6),a.add(w);let ee=window.scrollY,ce=ee,G=0,ne=0,re=0,oe=0;const se=()=>{ee=window.scrollY},Te=le=>{G=(le.clientX/n-.5)*2,ne=(le.clientY/i-.5)*2};window.addEventListener("scroll",se,{passive:!0}),window.addEventListener("mousemove",Te);const Ve=()=>{n=window.innerWidth,i=window.innerHeight,s.aspect=n/i,s.updateProjectionMatrix(),r.setSize(n,i)};window.addEventListener("resize",Ve);let be,Le=new Lb;const Be=()=>{be=requestAnimationFrame(Be);const le=Le.getElapsedTime();ce+=(ee-ce)*.06,re+=(G-re)*.05,oe+=(ne-oe)*.05;const pe=Math.min(ce/(window.innerHeight||900),3),De=2.8+re*.4-pe*.8,qe=6.2+oe*-.3-pe*1.1,Ye=7.8-pe*1.5;s.position.set(De,qe,Math.max(Ye,3.8)),s.lookAt(0,pe*.1,0),m.rotation.y=re*.06+Math.sin(le*.5)*.02,m.rotation.x=oe*-.04;const Dt=1+le*.8%2.5;L.scale.set(Dt,Dt,1),B.opacity=Math.max(0,.65*(1-(Dt-1)/2.5));const We=1+pe*2.5;z.forEach(dt=>{dt.progress+=dt.speed*We,dt.progress>=1&&(dt.progress=0);const Bt=v[dt.curveIdx];if(Bt){const Ct=Bt.getPoint(dt.progress);if(dt.mesh.position.copy(Ct),dt.progress>.85){const U=(1-dt.progress)/.15*1.6;dt.mesh.scale.set(U,U,U)}else dt.mesh.scale.set(1.2,1.2,1.2)}}),r.render(a,s)};return Be(),()=>{window.removeEventListener("scroll",se),window.removeEventListener("mousemove",Te),window.removeEventListener("resize",Ve),cancelAnimationFrame(be),r.dispose(),o.dispose(),l.dispose(),c.dispose(),_.dispose(),b.dispose(),h.dispose(),g.dispose(),y.dispose(),M.dispose(),E.forEach(le=>{le.geometry.dispose(),le.material.dispose()}),I.dispose(),V.dispose(),K.dispose(),q.dispose(),B.dispose(),e&&r.domElement&&e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),u.jsx("div",{ref:t,className:"fixed inset-0 w-full h-full pointer-events-none select-none z-0","aria-hidden":"true"})}function qF(){const[t,e]=$e.useState(""),n=a=>{e(a)},i=a=>{e({"Websites & 3D":"Website Development","Web Apps":"Web Application","Mobile Apps":"Mobile App Development","AI & Automation":"AI & Automation","E-commerce":"E-commerce Website"}[a]||"Custom Digital Solution")};return u.jsxs("div",{className:"min-h-screen bg-[#050817] text-[#F5F7FF] relative selection:bg-[#00C8FF] selection:text-[#050817] overflow-x-hidden",children:[u.jsx(WF,{}),u.jsx(jF,{}),u.jsx(g2,{onOpenContact:()=>e("")}),u.jsxs("main",{className:"relative z-10",children:[u.jsx(x2,{onExplore:()=>{},onContact:()=>e("")}),u.jsx(v2,{}),u.jsx(_2,{onSelectService:n}),u.jsx(S2,{onSelectCategory:i}),u.jsx(b2,{}),u.jsx(M2,{}),u.jsx(T2,{initialService:t})]}),u.jsx(kF,{onStartProject:()=>e("")}),u.jsx(XF,{})]})}wA.createRoot(document.getElementById("root")).render(u.jsx($e.StrictMode,{children:u.jsx(qF,{})}));
