(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function I_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zp={exports:{}},Tl={},Bp={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),N_=Symbol.for("react.portal"),F_=Symbol.for("react.fragment"),O_=Symbol.for("react.strict_mode"),k_=Symbol.for("react.profiler"),z_=Symbol.for("react.provider"),B_=Symbol.for("react.context"),H_=Symbol.for("react.forward_ref"),V_=Symbol.for("react.suspense"),G_=Symbol.for("react.memo"),W_=Symbol.for("react.lazy"),Pd=Symbol.iterator;function X_(t){return t===null||typeof t!="object"?null:(t=Pd&&t[Pd]||t["@@iterator"],typeof t=="function"?t:null)}var Hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,Gp={};function Lo(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Hp}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wp(){}Wp.prototype=Lo.prototype;function yf(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Hp}var Sf=yf.prototype=new Wp;Sf.constructor=yf;Vp(Sf,Lo.prototype);Sf.isPureReactComponent=!0;var Ld=Array.isArray,Xp=Object.prototype.hasOwnProperty,Mf={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function jp(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Xp.call(e,i)&&!Yp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Is,type:t,key:o,ref:s,props:r,_owner:Mf.current}}function Y_(t,e){return{$$typeof:Is,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Is}function j_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bd=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j_(""+t.key):e.toString(36)}function La(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Is:case N_:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ql(s,0):i,Ld(r)?(n="",t!=null&&(n=t.replace(bd,"$&/")+"/"),La(r,e,n,"",function(u){return u})):r!=null&&(Ef(r)&&(r=Y_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(bd,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Ld(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+ql(o,a);s+=La(o,e,n,l,r)}else if(l=X_(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+ql(o,a++),s+=La(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Gs(t,e,n){if(t==null)return t;var i=[],r=0;return La(t,i,"","",function(o){return e.call(n,o,r++)}),i}function q_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},ba={transition:null},$_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:ba,ReactCurrentOwner:Mf};function qp(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Gs,forEach:function(t,e,n){Gs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gs(t,function(){e++}),e},toArray:function(t){return Gs(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Lo;ze.Fragment=F_;ze.Profiler=k_;ze.PureComponent=yf;ze.StrictMode=O_;ze.Suspense=V_;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$_;ze.act=qp;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vp({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Mf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xp.call(e,l)&&!Yp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Is,type:t.type,key:r,ref:o,props:i,_owner:s}};ze.createContext=function(t){return t={$$typeof:B_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:z_,_context:t},t.Consumer=t};ze.createElement=jp;ze.createFactory=function(t){var e=jp.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:H_,render:t}};ze.isValidElement=Ef;ze.lazy=function(t){return{$$typeof:W_,_payload:{_status:-1,_result:t},_init:q_}};ze.memo=function(t,e){return{$$typeof:G_,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=ba.transition;ba.transition={};try{t()}finally{ba.transition=e}};ze.unstable_act=qp;ze.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ze.useContext=function(t){return Yt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ze.useId=function(){return Yt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ze.useRef=function(t){return Yt.current.useRef(t)};ze.useState=function(t){return Yt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Yt.current.useTransition()};ze.version="18.3.1";Bp.exports=ze;var hs=Bp.exports;const K_=I_(hs);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_=hs,Q_=Symbol.for("react.element"),J_=Symbol.for("react.fragment"),ev=Object.prototype.hasOwnProperty,tv=Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nv={key:!0,ref:!0,__self:!0,__source:!0};function $p(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)ev.call(e,i)&&!nv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Q_,type:t,key:o,ref:s,props:r,_owner:tv.current}}Tl.Fragment=J_;Tl.jsx=$p;Tl.jsxs=$p;zp.exports=Tl;var ps=zp.exports,ju={},Kp={exports:{}},fn={},Zp={exports:{}},Qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,j){var Z=U.length;U.push(j);e:for(;0<Z;){var se=Z-1>>>1,ye=U[se];if(0<r(ye,j))U[se]=j,U[Z]=ye,Z=se;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var j=U[0],Z=U.pop();if(Z!==j){U[0]=Z;e:for(var se=0,ye=U.length,Be=ye>>>1;se<Be;){var X=2*(se+1)-1,ie=U[X],ue=X+1,ce=U[ue];if(0>r(ie,Z))ue<ye&&0>r(ce,ie)?(U[se]=ce,U[ue]=Z,se=ue):(U[se]=ie,U[X]=Z,se=X);else if(ue<ye&&0>r(ce,Z))U[se]=ce,U[ue]=Z,se=ue;else break e}}return j}function r(U,j){var Z=U.sortIndex-j.sortIndex;return Z!==0?Z:U.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=U)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function E(U){if(y=!1,g(U),!x)if(n(l)!==null)x=!0,Y(L);else{var j=n(u);j!==null&&q(E,j.startTime-U)}}function L(U,j){x=!1,y&&(y=!1,c(D),D=-1),p=!0;var Z=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||U&&!b());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var ye=se(h.expirationTime<=j);j=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),g(j)}else i(l);h=n(l)}if(h!==null)var Be=!0;else{var X=n(u);X!==null&&q(E,X.startTime-j),Be=!1}return Be}finally{h=null,d=Z,p=!1}}var C=!1,A=null,D=-1,w=5,M=-1;function b(){return!(t.unstable_now()-M<w)}function W(){if(A!==null){var U=t.unstable_now();M=U;var j=!0;try{j=A(!0,U)}finally{j?V():(C=!1,A=null)}}else C=!1}var V;if(typeof _=="function")V=function(){_(W)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,K=$.port2;$.port1.onmessage=W,V=function(){K.postMessage(null)}}else V=function(){m(W,0)};function Y(U){A=U,C||(C=!0,V())}function q(U,j){D=m(function(){U(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,Y(L))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var Z=d;d=j;try{return U()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=d;d=U;try{return j()}finally{d=Z}},t.unstable_scheduleCallback=function(U,j,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,U){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Z+ye,U={id:f++,callback:j,priorityLevel:U,startTime:Z,expirationTime:ye,sortIndex:-1},Z>se?(U.sortIndex=Z,e(u,U),n(l)===null&&U===n(u)&&(y?(c(D),D=-1):y=!0,q(E,Z-se))):(U.sortIndex=ye,e(l,U),x||p||(x=!0,Y(L))),U},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(U){var j=d;return function(){var Z=d;d=j;try{return U.apply(this,arguments)}finally{d=Z}}}})(Qp);Zp.exports=Qp;var iv=Zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=hs,cn=iv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jp=new Set,ms={};function Er(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(ms[t]=e,t=0;t<e.length;t++)Jp.add(e[t])}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=Object.prototype.hasOwnProperty,ov=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},Ud={};function sv(t){return qu.call(Ud,t)?!0:qu.call(Dd,t)?!1:ov.test(t)?Ud[t]=!0:(Dd[t]=!0,!1)}function av(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lv(t,e,n,i){if(e===null||typeof e>"u"||av(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tf,wf);It[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tf,wf);It[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tf,wf);It[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Af(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lv(e,n,r,i)&&(n=null),i||r===null?sv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pi=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ws=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),Ku=Symbol.for("react.suspense"),Zu=Symbol.for("react.suspense_list"),Pf=Symbol.for("react.memo"),Ti=Symbol.for("react.lazy"),nm=Symbol.for("react.offscreen"),Id=Symbol.iterator;function Oo(t){return t===null||typeof t!="object"?null:(t=Id&&t[Id]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,$l;function Ko(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Kl=!1;function Zl(t,e){if(!t||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function uv(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=Zl(t.type,!1),t;case 11:return t=Zl(t.type.render,!1),t;case 1:return t=Zl(t.type,!0),t;default:return""}}function Qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case $r:return"Portal";case $u:return"Profiler";case Cf:return"StrictMode";case Ku:return"Suspense";case Zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tm:return(t.displayName||"Context")+".Consumer";case em:return(t._context.displayName||"Context")+".Provider";case Rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pf:return e=t.displayName||null,e!==null?e:Qu(t.type)||"Memo";case Ti:e=t._payload,t=t._init;try{return Qu(t(e))}catch{}}return null}function cv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qu(e);case 8:return e===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fv(t){var e=im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xs(t){t._valueTracker||(t._valueTracker=fv(t))}function rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=im(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ju(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&Af(t,"checked",e,!1)}function ec(t,e){om(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tc(t,e.type,n):e.hasOwnProperty("defaultValue")&&tc(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tc(t,e,n){(e!=="number"||qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zo=Array.isArray;function lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function nc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Od(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Zo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function sm(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ic(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ys,lm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ys.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(t){dv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ts[e]=ts[t]})});function um(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ts.hasOwnProperty(t)&&ts[t]?(""+e).trim():e+"px"}function cm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=um(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hv=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rc(t,e){if(e){if(hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function oc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function Lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ac=null,uo=null,co=null;function zd(t){if(t=Os(t)){if(typeof ac!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Pl(e),ac(t.stateNode,t.type,e))}}function fm(t){uo?co?co.push(t):co=[t]:uo=t}function dm(){if(uo){var t=uo,e=co;if(co=uo=null,zd(t),e)for(t=0;t<e.length;t++)zd(e[t])}}function hm(t,e){return t(e)}function pm(){}var Ql=!1;function mm(t,e,n){if(Ql)return t(e,n);Ql=!0;try{return hm(t,e,n)}finally{Ql=!1,(uo!==null||co!==null)&&(pm(),dm())}}function _s(t,e){var n=t.stateNode;if(n===null)return null;var i=Pl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var lc=!1;if(ai)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){lc=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{lc=!1}function pv(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ns=!1,$a=null,Ka=!1,uc=null,mv={onError:function(t){ns=!0,$a=t}};function gv(t,e,n,i,r,o,s,a,l){ns=!1,$a=null,pv.apply(mv,arguments)}function _v(t,e,n,i,r,o,s,a,l){if(gv.apply(this,arguments),ns){if(ns){var u=$a;ns=!1,$a=null}else throw Error(ne(198));Ka||(Ka=!0,uc=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bd(t){if(Tr(t)!==t)throw Error(ne(188))}function vv(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Bd(r),t;if(o===i)return Bd(r),e;o=o.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function _m(t){return t=vv(t),t!==null?vm(t):null}function vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vm(t);if(e!==null)return e;t=t.sibling}return null}var xm=cn.unstable_scheduleCallback,Hd=cn.unstable_cancelCallback,xv=cn.unstable_shouldYield,yv=cn.unstable_requestPaint,pt=cn.unstable_now,Sv=cn.unstable_getCurrentPriorityLevel,bf=cn.unstable_ImmediatePriority,ym=cn.unstable_UserBlockingPriority,Za=cn.unstable_NormalPriority,Mv=cn.unstable_LowPriority,Sm=cn.unstable_IdlePriority,wl=null,Gn=null;function Ev(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:Av,Tv=Math.log,wv=Math.LN2;function Av(t){return t>>>=0,t===0?32:31-(Tv(t)/wv|0)|0}var js=64,qs=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Qo(a):(o&=s,o!==0&&(i=Qo(o)))}else s=n&~r,s!==0?i=Qo(s):o!==0&&(i=Qo(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function Cv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Un(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Cv(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function cc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mm(){var t=js;return js<<=1,!(js&4194240)&&(js=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ns(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function Pv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Em(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,Uf,wm,Am,Cm,fc=!1,$s=[],Di=null,Ui=null,Ii=null,vs=new Map,xs=new Map,Ci=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vd(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(e.pointerId)}}function zo(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Os(e),e!==null&&Uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function bv(t,e,n,i,r){switch(e){case"focusin":return Di=zo(Di,t,e,n,i,r),!0;case"dragenter":return Ui=zo(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=zo(Ii,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return vs.set(o,zo(vs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,xs.set(o,zo(xs.get(o)||null,t,e,n,i,r)),!0}return!1}function Rm(t){var e=ar(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=gm(n),e!==null){t.blockedOn=e,Cm(t.priority,function(){wm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sc=i,n.target.dispatchEvent(i),sc=null}else return e=Os(n),e!==null&&Uf(e),t.blockedOn=n,!1;e.shift()}return!0}function Gd(t,e,n){Da(t)&&n.delete(e)}function Dv(){fc=!1,Di!==null&&Da(Di)&&(Di=null),Ui!==null&&Da(Ui)&&(Ui=null),Ii!==null&&Da(Ii)&&(Ii=null),vs.forEach(Gd),xs.forEach(Gd)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,fc||(fc=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,Dv)))}function ys(t){function e(r){return Bo(r,t)}if(0<$s.length){Bo($s[0],t);for(var n=1;n<$s.length;n++){var i=$s[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Bo(Di,t),Ui!==null&&Bo(Ui,t),Ii!==null&&Bo(Ii,t),vs.forEach(e),xs.forEach(e),n=0;n<Ci.length;n++)i=Ci[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&Ci.shift()}var fo=pi.ReactCurrentBatchConfig,Ja=!0;function Uv(t,e,n,i){var r=Ze,o=fo.transition;fo.transition=null;try{Ze=1,If(t,e,n,i)}finally{Ze=r,fo.transition=o}}function Iv(t,e,n,i){var r=Ze,o=fo.transition;fo.transition=null;try{Ze=4,If(t,e,n,i)}finally{Ze=r,fo.transition=o}}function If(t,e,n,i){if(Ja){var r=dc(t,e,n,i);if(r===null)uu(t,e,i,el,n),Vd(t,i);else if(bv(r,t,e,n,i))i.stopPropagation();else if(Vd(t,i),e&4&&-1<Lv.indexOf(t)){for(;r!==null;){var o=Os(r);if(o!==null&&Tm(o),o=dc(t,e,n,i),o===null&&uu(t,e,i,el,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else uu(t,e,i,null,n)}}var el=null;function dc(t,e,n,i){if(el=null,t=Lf(i),t=ar(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function Pm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sv()){case bf:return 1;case ym:return 4;case Za:case Mv:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var Li=null,Nf=null,Ua=null;function Lm(){if(Ua)return Ua;var t,e=Nf,n=e.length,i,r="value"in Li?Li.value:Li.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Ua=r.slice(t,1<i?1-i:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ks(){return!0}function Wd(){return!1}function dn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ks:Wd,this.isPropagationStopped=Wd,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ks)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ks)},persist:function(){},isPersistent:Ks}),e}var bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ff=dn(bo),Fs=at({},bo,{view:0,detail:0}),Nv=dn(Fs),eu,tu,Ho,Al=at({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(eu=t.screenX-Ho.screenX,tu=t.screenY-Ho.screenY):tu=eu=0,Ho=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Xd=dn(Al),Fv=at({},Al,{dataTransfer:0}),Ov=dn(Fv),kv=at({},Fs,{relatedTarget:0}),nu=dn(kv),zv=at({},bo,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=dn(zv),Hv=at({},bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vv=dn(Hv),Gv=at({},bo,{data:0}),Yd=dn(Gv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yv[t])?!!e[t]:!1}function Of(){return jv}var qv=at({},Fs,{key:function(t){if(t.key){var e=Wv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=dn(qv),Kv=at({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=dn(Kv),Zv=at({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),Qv=dn(Zv),Jv=at({},bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=dn(Jv),t0=at({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=dn(t0),i0=[9,13,27,32],kf=ai&&"CompositionEvent"in window,is=null;ai&&"documentMode"in document&&(is=document.documentMode);var r0=ai&&"TextEvent"in window&&!is,bm=ai&&(!kf||is&&8<is&&11>=is),qd=" ",$d=!1;function Dm(t,e){switch(t){case"keyup":return i0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function o0(t,e){switch(t){case"compositionend":return Um(e);case"keypress":return e.which!==32?null:($d=!0,qd);case"textInput":return t=e.data,t===qd&&$d?null:t;default:return null}}function s0(t,e){if(Zr)return t==="compositionend"||!kf&&Dm(t,e)?(t=Lm(),Ua=Nf=Li=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bm&&e.locale!=="ko"?null:e.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!a0[t.type]:e==="textarea"}function Im(t,e,n,i){fm(i),e=tl(e,"onChange"),0<e.length&&(n=new Ff("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var rs=null,Ss=null;function l0(t){Xm(t,0)}function Cl(t){var e=eo(t);if(rm(e))return t}function u0(t,e){if(t==="change")return e}var Nm=!1;if(ai){var iu;if(ai){var ru="oninput"in document;if(!ru){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),ru=typeof Zd.oninput=="function"}iu=ru}else iu=!1;Nm=iu&&(!document.documentMode||9<document.documentMode)}function Qd(){rs&&(rs.detachEvent("onpropertychange",Fm),Ss=rs=null)}function Fm(t){if(t.propertyName==="value"&&Cl(Ss)){var e=[];Im(e,Ss,t,Lf(t)),mm(l0,e)}}function c0(t,e,n){t==="focusin"?(Qd(),rs=e,Ss=n,rs.attachEvent("onpropertychange",Fm)):t==="focusout"&&Qd()}function f0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(Ss)}function d0(t,e){if(t==="click")return Cl(e)}function h0(t,e){if(t==="input"||t==="change")return Cl(e)}function p0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:p0;function Ms(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qu.call(e,r)||!Nn(t[r],e[r]))return!1}return!0}function Jd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eh(t,e){var n=Jd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jd(n)}}function Om(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Om(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function km(){for(var t=window,e=qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qa(t.document)}return e}function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m0(t){var e=km(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Om(n.ownerDocument.documentElement,n)){if(i!==null&&zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=eh(n,o);var s=eh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g0=ai&&"documentMode"in document&&11>=document.documentMode,Qr=null,hc=null,os=null,pc=!1;function th(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pc||Qr==null||Qr!==qa(i)||(i=Qr,"selectionStart"in i&&zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),os&&Ms(os,i)||(os=i,i=tl(hc,"onSelect"),0<i.length&&(e=new Ff("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function Zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},ou={},zm={};ai&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Rl(t){if(ou[t])return ou[t];if(!Jr[t])return t;var e=Jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zm)return ou[t]=e[n];return t}var Bm=Rl("animationend"),Hm=Rl("animationiteration"),Vm=Rl("animationstart"),Gm=Rl("transitionend"),Wm=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){Wm.set(t,e),Er(e,[t])}for(var su=0;su<nh.length;su++){var au=nh[su],_0=au.toLowerCase(),v0=au[0].toUpperCase()+au.slice(1);Xi(_0,"on"+v0)}Xi(Bm,"onAnimationEnd");Xi(Hm,"onAnimationIteration");Xi(Vm,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(Gm,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function ih(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_v(i,e,void 0,t),t.currentTarget=null}function Xm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;ih(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;ih(r,a,u),o=l}}}if(Ka)throw t=uc,Ka=!1,uc=null,t}function et(t,e){var n=e[xc];n===void 0&&(n=e[xc]=new Set);var i=t+"__bubble";n.has(i)||(Ym(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),Ym(n,t,i,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function Es(t){if(!t[Qs]){t[Qs]=!0,Jp.forEach(function(n){n!=="selectionchange"&&(x0.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,lu("selectionchange",!1,e))}}function Ym(t,e,n,i){switch(Pm(e)){case 1:var r=Uv;break;case 4:r=Iv;break;default:r=If}n=r.bind(null,e,n,t),r=void 0,!lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=ar(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}mm(function(){var u=o,f=Lf(n),h=[];e:{var d=Wm.get(t);if(d!==void 0){var p=Ff,x=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":p=$v;break;case"focusin":x="focus",p=nu;break;case"focusout":x="blur",p=nu;break;case"beforeblur":case"afterblur":p=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Qv;break;case Bm:case Hm:case Vm:p=Bv;break;case Gm:p=e0;break;case"scroll":p=Nv;break;case"wheel":p=n0;break;case"copy":case"cut":case"paste":p=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jd}var y=(e&4)!==0,m=!y&&t==="scroll",c=y?d!==null?d+"Capture":null:d;y=[];for(var _=u,g;_!==null;){g=_;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,c!==null&&(E=_s(_,c),E!=null&&y.push(Ts(_,E,g)))),m)break;_=_.return}0<y.length&&(d=new p(d,x,null,n,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==sc&&(x=n.relatedTarget||n.fromElement)&&(ar(x)||x[li]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?ar(x):null,x!==null&&(m=Tr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(y=Xd,E="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=jd,E="onPointerLeave",c="onPointerEnter",_="pointer"),m=p==null?d:eo(p),g=x==null?d:eo(x),d=new y(E,_+"leave",p,n,f),d.target=m,d.relatedTarget=g,E=null,ar(f)===u&&(y=new y(c,_+"enter",x,n,f),y.target=g,y.relatedTarget=m,E=y),m=E,p&&x)t:{for(y=p,c=x,_=0,g=y;g;g=Rr(g))_++;for(g=0,E=c;E;E=Rr(E))g++;for(;0<_-g;)y=Rr(y),_--;for(;0<g-_;)c=Rr(c),g--;for(;_--;){if(y===c||c!==null&&y===c.alternate)break t;y=Rr(y),c=Rr(c)}y=null}else y=null;p!==null&&rh(h,d,p,y,!1),x!==null&&m!==null&&rh(h,m,x,y,!0)}}e:{if(d=u?eo(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var L=u0;else if(Kd(d))if(Nm)L=h0;else{L=f0;var C=c0}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(L=d0);if(L&&(L=L(t,u))){Im(h,L,n,f);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&tc(d,"number",d.value)}switch(C=u?eo(u):window,t){case"focusin":(Kd(C)||C.contentEditable==="true")&&(Qr=C,hc=u,os=null);break;case"focusout":os=hc=Qr=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,th(h,n,f);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":th(h,n,f)}var A;if(kf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Zr?Dm(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(bm&&n.locale!=="ko"&&(Zr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Zr&&(A=Lm()):(Li=f,Nf="value"in Li?Li.value:Li.textContent,Zr=!0)),C=tl(u,D),0<C.length&&(D=new Yd(D,t,null,n,f),h.push({event:D,listeners:C}),A?D.data=A:(A=Um(n),A!==null&&(D.data=A)))),(A=r0?o0(t,n):s0(t,n))&&(u=tl(u,"onBeforeInput"),0<u.length&&(f=new Yd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=A))}Xm(h,e)})}function Ts(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=_s(t,n),o!=null&&i.unshift(Ts(t,o,r)),o=_s(t,e),o!=null&&i.push(Ts(t,o,r))),t=t.return}return i}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=_s(n,o),l!=null&&s.unshift(Ts(n,l,a))):r||(l=_s(n,o),l!=null&&s.push(Ts(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var y0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function oh(t){return(typeof t=="string"?t:""+t).replace(y0,`
`).replace(S0,"")}function Js(t,e,n){if(e=oh(e),oh(t)!==e&&n)throw Error(ne(425))}function nl(){}var mc=null,gc=null;function _c(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vc=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(t){return sh.resolve(null).then(t).catch(T0)}:vc;function T0(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ys(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ys(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Do,ws="__reactProps$"+Do,li="__reactContainer$"+Do,xc="__reactEvents$"+Do,w0="__reactListeners$"+Do,A0="__reactHandles$"+Do;function ar(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[li]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ah(t);t!==null;){if(n=t[Bn])return n;t=ah(t)}return e}t=n,n=t.parentNode}return null}function Os(t){return t=t[Bn]||t[li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Pl(t){return t[ws]||null}var yc=[],to=-1;function Yi(t){return{current:t}}function nt(t){0>to||(t.current=yc[to],yc[to]=null,to--)}function Qe(t,e){to++,yc[to]=t.current,t.current=e}var Gi={},Ht=Yi(Gi),Kt=Yi(!1),mr=Gi;function xo(t,e){var n=t.type.contextTypes;if(!n)return Gi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function il(){nt(Kt),nt(Ht)}function lh(t,e,n){if(Ht.current!==Gi)throw Error(ne(168));Qe(Ht,e),Qe(Kt,n)}function jm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,cv(t)||"Unknown",r));return at({},n,i)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gi,mr=Ht.current,Qe(Ht,t),Qe(Kt,Kt.current),!0}function uh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=jm(t,e,mr),i.__reactInternalMemoizedMergedChildContext=t,nt(Kt),nt(Ht),Qe(Ht,t)):nt(Kt),Qe(Kt,n)}var ei=null,Ll=!1,fu=!1;function qm(t){ei===null?ei=[t]:ei.push(t)}function C0(t){Ll=!0,qm(t)}function ji(){if(!fu&&ei!==null){fu=!0;var t=0,e=Ze;try{var n=ei;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ei=null,Ll=!1}catch(r){throw ei!==null&&(ei=ei.slice(t+1)),xm(bf,ji),r}finally{Ze=e,fu=!1}}return null}var no=[],io=0,ol=null,sl=0,mn=[],gn=0,gr=null,ni=1,ii="";function nr(t,e){no[io++]=sl,no[io++]=ol,ol=t,sl=e}function $m(t,e,n){mn[gn++]=ni,mn[gn++]=ii,mn[gn++]=gr,gr=t;var i=ni;t=ii;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var o=32-Un(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,ni=1<<32-Un(e)+r|n<<r|i,ii=o+t}else ni=1<<o|n<<r|i,ii=t}function Bf(t){t.return!==null&&(nr(t,1),$m(t,1,0))}function Hf(t){for(;t===ol;)ol=no[--io],no[io]=null,sl=no[--io],no[io]=null;for(;t===gr;)gr=mn[--gn],mn[gn]=null,ii=mn[--gn],mn[gn]=null,ni=mn[--gn],mn[gn]=null}var ln=null,an=null,rt=!1,Ln=null;function Km(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ch(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:ni,overflow:ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(rt){var e=an;if(e){var n=e;if(!ch(t,e)){if(Sc(t))throw Error(ne(418));e=Ni(n.nextSibling);var i=ln;e&&ch(t,e)?Km(i,n):(t.flags=t.flags&-4097|2,rt=!1,ln=t)}}else{if(Sc(t))throw Error(ne(418));t.flags=t.flags&-4097|2,rt=!1,ln=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function ea(t){if(t!==ln)return!1;if(!rt)return fh(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_c(t.type,t.memoizedProps)),e&&(e=an)){if(Sc(t))throw Zm(),Error(ne(418));for(;e;)Km(t,e),e=Ni(e.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?Ni(t.stateNode.nextSibling):null;return!0}function Zm(){for(var t=an;t;)t=Ni(t.nextSibling)}function yo(){an=ln=null,rt=!1}function Vf(t){Ln===null?Ln=[t]:Ln.push(t)}var R0=pi.ReactCurrentBatchConfig;function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ta(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dh(t){var e=t._init;return e(t._payload)}function Qm(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=zi(c,_),c.index=0,c.sibling=null,c}function o(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,E){return _===null||_.tag!==6?(_=vu(g,c.mode,E),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,E){var L=g.type;return L===Kr?f(c,_,g.props.children,E,g.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ti&&dh(L)===_.type)?(E=r(_,g.props),E.ref=Vo(c,_,g),E.return=c,E):(E=Ha(g.type,g.key,g.props,null,c.mode,E),E.ref=Vo(c,_,g),E.return=c,E)}function u(c,_,g,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=xu(g,c.mode,E),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,E,L){return _===null||_.tag!==7?(_=hr(g,c.mode,E,L),_.return=c,_):(_=r(_,g),_.return=c,_)}function h(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=vu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ws:return g=Ha(_.type,_.key,_.props,null,c.mode,g),g.ref=Vo(c,null,_),g.return=c,g;case $r:return _=xu(_,c.mode,g),_.return=c,_;case Ti:var E=_._init;return h(c,E(_._payload),g)}if(Zo(_)||Oo(_))return _=hr(_,c.mode,g,null),_.return=c,_;ta(c,_)}return null}function d(c,_,g,E){var L=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:a(c,_,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ws:return g.key===L?l(c,_,g,E):null;case $r:return g.key===L?u(c,_,g,E):null;case Ti:return L=g._init,d(c,_,L(g._payload),E)}if(Zo(g)||Oo(g))return L!==null?null:f(c,_,g,E,null);ta(c,g)}return null}function p(c,_,g,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return c=c.get(g)||null,a(_,c,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ws:return c=c.get(E.key===null?g:E.key)||null,l(_,c,E,L);case $r:return c=c.get(E.key===null?g:E.key)||null,u(_,c,E,L);case Ti:var C=E._init;return p(c,_,g,C(E._payload),L)}if(Zo(E)||Oo(E))return c=c.get(g)||null,f(_,c,E,L,null);ta(_,E)}return null}function x(c,_,g,E){for(var L=null,C=null,A=_,D=_=0,w=null;A!==null&&D<g.length;D++){A.index>D?(w=A,A=null):w=A.sibling;var M=d(c,A,g[D],E);if(M===null){A===null&&(A=w);break}t&&A&&M.alternate===null&&e(c,A),_=o(M,_,D),C===null?L=M:C.sibling=M,C=M,A=w}if(D===g.length)return n(c,A),rt&&nr(c,D),L;if(A===null){for(;D<g.length;D++)A=h(c,g[D],E),A!==null&&(_=o(A,_,D),C===null?L=A:C.sibling=A,C=A);return rt&&nr(c,D),L}for(A=i(c,A);D<g.length;D++)w=p(A,c,D,g[D],E),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?D:w.key),_=o(w,_,D),C===null?L=w:C.sibling=w,C=w);return t&&A.forEach(function(b){return e(c,b)}),rt&&nr(c,D),L}function y(c,_,g,E){var L=Oo(g);if(typeof L!="function")throw Error(ne(150));if(g=L.call(g),g==null)throw Error(ne(151));for(var C=L=null,A=_,D=_=0,w=null,M=g.next();A!==null&&!M.done;D++,M=g.next()){A.index>D?(w=A,A=null):w=A.sibling;var b=d(c,A,M.value,E);if(b===null){A===null&&(A=w);break}t&&A&&b.alternate===null&&e(c,A),_=o(b,_,D),C===null?L=b:C.sibling=b,C=b,A=w}if(M.done)return n(c,A),rt&&nr(c,D),L;if(A===null){for(;!M.done;D++,M=g.next())M=h(c,M.value,E),M!==null&&(_=o(M,_,D),C===null?L=M:C.sibling=M,C=M);return rt&&nr(c,D),L}for(A=i(c,A);!M.done;D++,M=g.next())M=p(A,c,D,M.value,E),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?D:M.key),_=o(M,_,D),C===null?L=M:C.sibling=M,C=M);return t&&A.forEach(function(W){return e(c,W)}),rt&&nr(c,D),L}function m(c,_,g,E){if(typeof g=="object"&&g!==null&&g.type===Kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ws:e:{for(var L=g.key,C=_;C!==null;){if(C.key===L){if(L=g.type,L===Kr){if(C.tag===7){n(c,C.sibling),_=r(C,g.props.children),_.return=c,c=_;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ti&&dh(L)===C.type){n(c,C.sibling),_=r(C,g.props),_.ref=Vo(c,C,g),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===Kr?(_=hr(g.props.children,c.mode,E,g.key),_.return=c,c=_):(E=Ha(g.type,g.key,g.props,null,c.mode,E),E.ref=Vo(c,_,g),E.return=c,c=E)}return s(c);case $r:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=xu(g,c.mode,E),_.return=c,c=_}return s(c);case Ti:return C=g._init,m(c,_,C(g._payload),E)}if(Zo(g))return x(c,_,g,E);if(Oo(g))return y(c,_,g,E);ta(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=vu(g,c.mode,E),_.return=c,c=_),s(c)):n(c,_)}return m}var So=Qm(!0),Jm=Qm(!1),al=Yi(null),ll=null,ro=null,Gf=null;function Wf(){Gf=ro=ll=null}function Xf(t){var e=al.current;nt(al),t._currentValue=e}function Ec(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){ll=t,Gf=ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(Gf!==t)if(t={context:t,memoizedValue:e,next:null},ro===null){if(ll===null)throw Error(ne(308));ro=t,ll.dependencies={lanes:0,firstContext:t}}else ro=ro.next=t;return e}var lr=null;function Yf(t){lr===null?lr=[t]:lr.push(t)}function eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wi=!1;function jf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function Na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}function hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,i){var r=t.updateQueue;wi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,f=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(d=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(p,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,d=typeof x=="function"?x.call(p,h,d):x,d==null)break e;h=at({},h,d);break e;case 2:wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);vr|=s,t.lanes=s,t.memoizedState=h}}function ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ks={},Wn=Yi(ks),As=Yi(ks),Cs=Yi(ks);function ur(t){if(t===ks)throw Error(ne(174));return t}function qf(t,e){switch(Qe(Cs,e),Qe(As,t),Qe(Wn,ks),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ic(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ic(e,t)}nt(Wn),Qe(Wn,e)}function Mo(){nt(Wn),nt(As),nt(Cs)}function ng(t){ur(Cs.current);var e=ur(Wn.current),n=ic(e,t.type);e!==n&&(Qe(As,t),Qe(Wn,n))}function $f(t){As.current===t&&(nt(Wn),nt(As))}var ot=Yi(0);function cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function Kf(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Fa=pi.ReactCurrentDispatcher,hu=pi.ReactCurrentBatchConfig,_r=0,st=null,St=null,Ct=null,fl=!1,ss=!1,Rs=0,P0=0;function Nt(){throw Error(ne(321))}function Zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function Qf(t,e,n,i,r,o){if(_r=o,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=t===null||t.memoizedState===null?U0:I0,t=n(i,r),ss){o=0;do{if(ss=!1,Rs=0,25<=o)throw Error(ne(301));o+=1,Ct=St=null,e.updateQueue=null,Fa.current=N0,t=n(i,r)}while(ss)}if(Fa.current=dl,e=St!==null&&St.next!==null,_r=0,Ct=St=st=null,fl=!1,e)throw Error(ne(300));return t}function Jf(){var t=Rs!==0;return Rs=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?st.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Mn(){if(St===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ct===null?st.memoizedState:Ct.next;if(e!==null)Ct=e,St=t;else{if(t===null)throw Error(ne(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?st.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Ps(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((_r&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,st.lanes|=f,vr|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Nn(i,e.memoizedState)||($t=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,st.lanes|=o,vr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=Mn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Nn(o,e.memoizedState)||($t=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function ig(){}function rg(t,e){var n=st,i=Mn(),r=e(),o=!Nn(i.memoizedState,r);if(o&&(i.memoizedState=r,$t=!0),i=i.queue,ed(ag.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Ls(9,sg.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ne(349));_r&30||og(n,e,r)}return r}function og(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sg(t,e,n,i){e.value=n,e.getSnapshot=i,lg(e)&&ug(t)}function ag(t,e,n){return n(function(){lg(e)&&ug(t)})}function lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function ug(t){var e=ui(t,1);e!==null&&In(e,t,1,-1)}function mh(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:t},e.queue=t,t=t.dispatch=D0.bind(null,st,t),[e.memoizedState,t]}function Ls(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function cg(){return Mn().memoizedState}function Oa(t,e,n,i){var r=On();st.flags|=t,r.memoizedState=Ls(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var o=void 0;if(St!==null){var s=St.memoizedState;if(o=s.destroy,i!==null&&Zf(i,s.deps)){r.memoizedState=Ls(e,n,o,i);return}}st.flags|=t,r.memoizedState=Ls(1|e,n,o,i)}function gh(t,e){return Oa(8390656,8,t,e)}function ed(t,e){return bl(2048,8,t,e)}function fg(t,e){return bl(4,2,t,e)}function dg(t,e){return bl(4,4,t,e)}function hg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,hg.bind(null,e,t),n)}function td(){}function mg(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function gg(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _g(t,e,n){return _r&21?(Nn(n,e)||(n=Mm(),st.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function L0(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{Ze=n,hu.transition=i}}function vg(){return Mn().memoizedState}function b0(t,e,n){var i=ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xg(t))yg(e,n);else if(n=eg(t,e,n,i),n!==null){var r=Xt();In(n,t,i,r),Sg(n,e,i)}}function D0(t,e,n){var i=ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xg(t))yg(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Nn(a,s)){var l=e.interleaved;l===null?(r.next=r,Yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=eg(t,e,r,i),n!==null&&(r=Xt(),In(n,t,i,r),Sg(n,e,i))}}function xg(t){var e=t.alternate;return t===st||e!==null&&e===st}function yg(t,e){ss=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}var dl={readContext:Sn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},U0={readContext:Sn,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:gh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,hg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=On();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=b0.bind(null,st,t),[i.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:mh,useDebugValue:td,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=mh(!1),e=t[0];return t=L0.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=st,r=On();if(rt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Pt===null)throw Error(ne(349));_r&30||og(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,gh(ag.bind(null,i,o,t),[t]),i.flags|=2048,Ls(9,sg.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=On(),e=Pt.identifierPrefix;if(rt){var n=ii,i=ni;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},I0={readContext:Sn,useCallback:mg,useContext:Sn,useEffect:ed,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:dg,useMemo:gg,useReducer:pu,useRef:cg,useState:function(){return pu(Ps)},useDebugValue:td,useDeferredValue:function(t){var e=Mn();return _g(e,St.memoizedState,t)},useTransition:function(){var t=pu(Ps)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:vg,unstable_isNewReconciler:!1},N0={readContext:Sn,useCallback:mg,useContext:Sn,useEffect:ed,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:dg,useMemo:gg,useReducer:mu,useRef:cg,useState:function(){return mu(Ps)},useDebugValue:td,useDeferredValue:function(t){var e=Mn();return St===null?e.memoizedState=t:_g(e,St.memoizedState,t)},useTransition:function(){var t=mu(Ps)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:rg,useId:vg,unstable_isNewReconciler:!1};function Rn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=ki(t),o=si(i,r);o.payload=e,n!=null&&(o.callback=n),e=Fi(t,o,r),e!==null&&(In(e,t,r,i),Na(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=ki(t),o=si(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Fi(t,o,r),e!==null&&(In(e,t,r,i),Na(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=ki(t),r=si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fi(t,r,i),e!==null&&(In(e,t,i,n),Na(e,t,i))}};function _h(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ms(n,i)||!Ms(r,o):!0}function Mg(t,e,n){var i=!1,r=Gi,o=e.contextType;return typeof o=="object"&&o!==null?o=Sn(o):(r=Zt(e)?mr:Ht.current,i=e.contextTypes,o=(i=i!=null)?xo(t,r):Gi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function vh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function wc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},jf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Sn(o):(o=Zt(e)?mr:Ht.current,r.context=xo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Tc(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dl.enqueueReplaceState(r,r.state,null),ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var n="",i=e;do n+=uv(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ac(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F0=typeof WeakMap=="function"?WeakMap:Map;function Eg(t,e,n){n=si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pl||(pl=!0,Fc=i),Ac(t,e)},n}function Tg(t,e,n){n=si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ac(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ac(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function xh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new F0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=K0.bind(null,t,e,n),e.then(t,t))}function yh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=si(-1,1),e.tag=2,Fi(n,e,1))),n.lanes|=1),t)}var O0=pi.ReactCurrentOwner,$t=!1;function Wt(t,e,n,i){e.child=t===null?Jm(e,null,n,i):So(e,t.child,n,i)}function Mh(t,e,n,i,r){n=n.render;var o=e.ref;return ho(e,r),i=Qf(t,e,n,i,o,r),n=Jf(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(rt&&n&&Bf(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Eh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!ud(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,wg(t,e,o,i,r)):(t=Ha(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ms,n(s,i)&&t.ref===e.ref)return ci(t,e,r)}return e.flags|=1,t=zi(o,i),t.ref=e.ref,t.return=e,e.child=t}function wg(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ms(o,i)&&t.ref===e.ref)if($t=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,ci(t,e,r)}return Cc(t,e,n,i,r)}function Ag(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(so,sn),sn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(so,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Qe(so,sn),sn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Qe(so,sn),sn|=i;return Wt(t,e,r,n),e.child}function Cg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cc(t,e,n,i,r){var o=Zt(n)?mr:Ht.current;return o=xo(e,o),ho(e,r),n=Qf(t,e,n,i,o,r),i=Jf(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(rt&&i&&Bf(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Th(t,e,n,i,r){if(Zt(n)){var o=!0;rl(e)}else o=!1;if(ho(e,r),e.stateNode===null)ka(t,e),Mg(e,n,i),wc(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Sn(u):(u=Zt(n)?mr:Ht.current,u=xo(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vh(e,s,i,u),wi=!1;var d=e.memoizedState;s.state=d,ul(e,i,s,r),l=e.memoizedState,a!==i||d!==l||Kt.current||wi?(typeof f=="function"&&(Tc(e,n,f,i),l=e.memoizedState),(a=wi||_h(e,n,a,i,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,tg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),s.props=u,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=Zt(n)?mr:Ht.current,l=xo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&vh(e,s,i,l),wi=!1,d=e.memoizedState,s.state=d,ul(e,i,s,r);var x=e.memoizedState;a!==h||d!==x||Kt.current||wi?(typeof p=="function"&&(Tc(e,n,p,i),x=e.memoizedState),(u=wi||_h(e,n,u,i,d,x,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Rc(t,e,n,i,o,r)}function Rc(t,e,n,i,r,o){Cg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&uh(e,n,!1),ci(t,e,o);i=e.stateNode,O0.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=So(e,t.child,null,o),e.child=So(e,null,a,o)):Wt(t,e,a,o),e.memoizedState=i.state,r&&uh(e,n,!0),e.child}function Rg(t){var e=t.stateNode;e.pendingContext?lh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lh(t,e.context,!1),qf(t,e.containerInfo)}function wh(t,e,n,i,r){return yo(),Vf(r),e.flags|=256,Wt(t,e,n,i),e.child}var Pc={dehydrated:null,treeContext:null,retryLane:0};function Lc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pg(t,e,n){var i=e.pendingProps,r=ot.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Qe(ot,r&1),t===null)return Mc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Nl(s,i,0,null),t=hr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Lc(n),e.memoizedState=Pc,t):nd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return k0(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=zi(a,o):(o=hr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Lc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Pc,i}return o=t.child,t=o.sibling,i=zi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nd(t,e){return e=Nl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function na(t,e,n,i){return i!==null&&Vf(i),So(e,t.child,null,n),t=nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function k0(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(ne(422))),na(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Nl({mode:"visible",children:i.children},r,0,null),o=hr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&So(e,t.child,null,s),e.child.memoizedState=Lc(s),e.memoizedState=Pc,o);if(!(e.mode&1))return na(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ne(419)),i=gu(o,i,void 0),na(t,e,s,i)}if(a=(s&t.childLanes)!==0,$t||a){if(i=Pt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ui(t,r),In(i,t,r,-1))}return ld(),i=gu(Error(ne(421))),na(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Z0.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,an=Ni(r.nextSibling),ln=e,rt=!0,Ln=null,t!==null&&(mn[gn++]=ni,mn[gn++]=ii,mn[gn++]=gr,ni=t.id,ii=t.overflow,gr=e),e=nd(e,i.children),e.flags|=4096,e)}function Ah(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ec(t.return,e,n)}function _u(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Lg(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Wt(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ah(t,n,e);else if(t.tag===19)Ah(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Qe(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_u(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_u(e,!0,n,null,o);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z0(t,e,n){switch(e.tag){case 3:Rg(e),yo();break;case 5:ng(e);break;case 1:Zt(e.type)&&rl(e);break;case 4:qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Qe(al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Qe(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?Pg(t,e,n):(Qe(ot,ot.current&1),t=ci(t,e,n),t!==null?t.sibling:null);Qe(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Lg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Qe(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,Ag(t,e,n)}return ci(t,e,n)}var bg,bc,Dg,Ug;bg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};Dg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Wn.current);var o=null;switch(n){case"input":r=Ju(t,r),i=Ju(t,i),o=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),o=[];break;case"textarea":r=nc(t,r),i=nc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nl)}rc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ms.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ms.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&et("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Ug=function(t,e,n,i){n!==i&&(e.flags|=4)};function Go(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function B0(t,e,n){var i=e.pendingProps;switch(Hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return Zt(e.type)&&il(),Ft(e),null;case 3:return i=e.stateNode,Mo(),nt(Kt),nt(Ht),Kf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(zc(Ln),Ln=null))),bc(t,e),Ft(e),null;case 5:$f(e);var r=ur(Cs.current);if(n=e.type,t!==null&&e.stateNode!=null)Dg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Ft(e),null}if(t=ur(Wn.current),ea(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Bn]=e,i[ws]=o,t=(e.mode&1)!==0,n){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(r=0;r<Jo.length;r++)et(Jo[r],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":Nd(i,o),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},et("invalid",i);break;case"textarea":Od(i,o),et("invalid",i)}rc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Js(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Js(i.textContent,a,t),r=["children",""+a]):ms.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&et("scroll",i)}switch(n){case"input":Xs(i),Fd(i,o,!0);break;case"textarea":Xs(i),kd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Bn]=e,t[ws]=i,bg(t,e,!1,!1),e.stateNode=t;e:{switch(s=oc(n,i),n){case"dialog":et("cancel",t),et("close",t),r=i;break;case"iframe":case"object":case"embed":et("load",t),r=i;break;case"video":case"audio":for(r=0;r<Jo.length;r++)et(Jo[r],t);r=i;break;case"source":et("error",t),r=i;break;case"img":case"image":case"link":et("error",t),et("load",t),r=i;break;case"details":et("toggle",t),r=i;break;case"input":Nd(t,i),r=Ju(t,i),et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),et("invalid",t);break;case"textarea":Od(t,i),r=nc(t,i),et("invalid",t);break;default:r=i}rc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cm(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lm(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gs(t,l):typeof l=="number"&&gs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ms.hasOwnProperty(o)?l!=null&&o==="onScroll"&&et("scroll",t):l!=null&&Af(t,o,l,s))}switch(n){case"input":Xs(t),Fd(t,i,!1);break;case"textarea":Xs(t),kd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?lo(t,!!i.multiple,o,!1):i.defaultValue!=null&&lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Ug(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=ur(Cs.current),ur(Wn.current),ea(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bn]=e,(o=i.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:Js(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Js(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return Ft(e),null;case 13:if(nt(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&an!==null&&e.mode&1&&!(e.flags&128))Zm(),yo(),e.flags|=98560,o=!1;else if(o=ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ne(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ne(317));o[Bn]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),o=!1}else Ln!==null&&(zc(Ln),Ln=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?Mt===0&&(Mt=3):ld())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Mo(),bc(t,e),t===null&&Es(e.stateNode.containerInfo),Ft(e),null;case 10:return Xf(e.type._context),Ft(e),null;case 17:return Zt(e.type)&&il(),Ft(e),null;case 19:if(nt(ot),o=e.memoizedState,o===null)return Ft(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Go(o,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=cl(t),s!==null){for(e.flags|=128,Go(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(ot,ot.current&1|2),e.child}t=t.sibling}o.tail!==null&&pt()>To&&(e.flags|=128,i=!0,Go(o,!1),e.lanes=4194304)}else{if(!i)if(t=cl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!rt)return Ft(e),null}else 2*pt()-o.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,i=!0,Go(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,n=ot.current,Qe(ot,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return ad(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?sn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function H0(t,e){switch(Hf(e),e.tag){case 1:return Zt(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),nt(Kt),nt(Ht),Kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $f(e),null;case 13:if(nt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));yo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ot),null;case 4:return Mo(),null;case 10:return Xf(e.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var ia=!1,zt=!1,V0=typeof WeakSet=="function"?WeakSet:Set,pe=null;function oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function Dc(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Ch=!1;function G0(t,e){if(mc=Ja,t=km(),zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=s),d===o&&++f===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gc={focusedElem:t,selectionRange:n},Ja=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:Rn(e.type,y),m);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){dt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return x=Ch,Ch=!1,x}function as(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Dc(e,n,o)}r=r.next}while(r!==i)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ig(t){var e=t.alternate;e!==null&&(t.alternate=null,Ig(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[ws],delete e[xc],delete e[w0],delete e[A0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ng(t){return t.tag===5||t.tag===3||t.tag===4}function Rh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ic(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(i!==4&&(t=t.child,t!==null))for(Ic(t,e,n),t=t.sibling;t!==null;)Ic(t,e,n),t=t.sibling}function Nc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}var Dt=null,Pn=!1;function _i(t,e,n){for(n=n.child;n!==null;)Fg(t,e,n),n=n.sibling}function Fg(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:zt||oo(n,e);case 6:var i=Dt,r=Pn;Dt=null,_i(t,e,n),Dt=i,Pn=r,Dt!==null&&(Pn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Pn?(t=Dt,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),ys(t)):cu(Dt,n.stateNode));break;case 4:i=Dt,r=Pn,Dt=n.stateNode.containerInfo,Pn=!0,_i(t,e,n),Dt=i,Pn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Dc(n,e,s),r=r.next}while(r!==i)}_i(t,e,n);break;case 1:if(!zt&&(oo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}_i(t,e,n);break;case 21:_i(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,_i(t,e,n),zt=i):_i(t,e,n);break;default:_i(t,e,n)}}function Ph(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new V0),e.forEach(function(i){var r=Q0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Pn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Pn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(Dt===null)throw Error(ne(160));Fg(o,s,r),Dt=null,Pn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Og(e,t),e=e.sibling}function Og(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),Fn(t),i&4){try{as(3,t,t.return),Ul(3,t)}catch(y){dt(t,t.return,y)}try{as(5,t,t.return)}catch(y){dt(t,t.return,y)}}break;case 1:Tn(e,t),Fn(t),i&512&&n!==null&&oo(n,n.return);break;case 5:if(Tn(e,t),Fn(t),i&512&&n!==null&&oo(n,n.return),t.flags&32){var r=t.stateNode;try{gs(r,"")}catch(y){dt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&om(r,o),oc(a,s);var u=oc(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?cm(r,h):f==="dangerouslySetInnerHTML"?lm(r,h):f==="children"?gs(r,h):Af(r,f,h,u)}switch(a){case"input":ec(r,o);break;case"textarea":sm(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?lo(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?lo(r,!!o.multiple,o.defaultValue,!0):lo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ws]=o}catch(y){dt(t,t.return,y)}}break;case 6:if(Tn(e,t),Fn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){dt(t,t.return,y)}}break;case 3:if(Tn(e,t),Fn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ys(e.containerInfo)}catch(y){dt(t,t.return,y)}break;case 4:Tn(e,t),Fn(t);break;case 13:Tn(e,t),Fn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(od=pt())),i&4&&Ph(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||f,Tn(e,t),zt=u):Tn(e,t),Fn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(h=pe=f;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:as(4,d,d.return);break;case 1:oo(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){dt(i,n,y)}}break;case 5:oo(d,d.return);break;case 22:if(d.memoizedState!==null){bh(h);continue}}p!==null?(p.return=d,pe=p):bh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=um("display",s))}catch(y){dt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){dt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(e,t),Fn(t),i&4&&Ph(t);break;case 21:break;default:Tn(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ng(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(gs(r,""),i.flags&=-33);var o=Rh(t);Nc(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Rh(t);Ic(t,a,s);break;default:throw Error(ne(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function W0(t,e,n){pe=t,kg(t)}function kg(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ia;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=ia;var u=zt;if(ia=s,(zt=l)&&!u)for(pe=r;pe!==null;)s=pe,l=s.child,s.tag===22&&s.memoizedState!==null?Dh(r):l!==null?(l.return=s,pe=l):Dh(r);for(;o!==null;)pe=o,kg(o),o=o.sibling;pe=r,ia=a,zt=u}Lh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,pe=o):Lh(t)}}function Lh(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ph(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ph(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ys(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}zt||e.flags&512&&Uc(e)}catch(d){dt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function bh(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Dh(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var o=e.return;try{Uc(e)}catch(l){dt(e,o,l)}break;case 5:var s=e.return;try{Uc(e)}catch(l){dt(e,s,l)}}}catch(l){dt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var X0=Math.ceil,hl=pi.ReactCurrentDispatcher,id=pi.ReactCurrentOwner,yn=pi.ReactCurrentBatchConfig,Ge=0,Pt=null,vt=null,Ut=0,sn=0,so=Yi(0),Mt=0,bs=null,vr=0,Il=0,rd=0,ls=null,qt=null,od=0,To=1/0,Jn=null,pl=!1,Fc=null,Oi=null,ra=!1,bi=null,ml=0,us=0,Oc=null,za=-1,Ba=0;function Xt(){return Ge&6?pt():za!==-1?za:za=pt()}function ki(t){return t.mode&1?Ge&2&&Ut!==0?Ut&-Ut:R0.transition!==null?(Ba===0&&(Ba=Mm()),Ba):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Pm(t.type)),t):1}function In(t,e,n,i){if(50<us)throw us=0,Oc=null,Error(ne(185));Ns(t,n,i),(!(Ge&2)||t!==Pt)&&(t===Pt&&(!(Ge&2)&&(Il|=n),Mt===4&&Ri(t,Ut)),Qt(t,i),n===1&&Ge===0&&!(e.mode&1)&&(To=pt()+500,Ll&&ji()))}function Qt(t,e){var n=t.callbackNode;Rv(t,e);var i=Qa(t,t===Pt?Ut:0);if(i===0)n!==null&&Hd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hd(n),e===1)t.tag===0?C0(Uh.bind(null,t)):qm(Uh.bind(null,t)),E0(function(){!(Ge&6)&&ji()}),n=null;else{switch(Em(i)){case 1:n=bf;break;case 4:n=ym;break;case 16:n=Za;break;case 536870912:n=Sm;break;default:n=Za}n=Yg(n,zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zg(t,e){if(za=-1,Ba=0,Ge&6)throw Error(ne(327));var n=t.callbackNode;if(po()&&t.callbackNode!==n)return null;var i=Qa(t,t===Pt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=Ge;Ge|=2;var o=Hg();(Pt!==t||Ut!==e)&&(Jn=null,To=pt()+500,dr(t,e));do try{q0();break}catch(a){Bg(t,a)}while(!0);Wf(),hl.current=o,Ge=r,vt!==null?e=0:(Pt=null,Ut=0,e=Mt)}if(e!==0){if(e===2&&(r=cc(t),r!==0&&(i=r,e=kc(t,r))),e===1)throw n=bs,dr(t,0),Ri(t,i),Qt(t,pt()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!Y0(r)&&(e=gl(t,i),e===2&&(o=cc(t),o!==0&&(i=o,e=kc(t,o))),e===1))throw n=bs,dr(t,0),Ri(t,i),Qt(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:ir(t,qt,Jn);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=od+500-pt(),10<e)){if(Qa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vc(ir.bind(null,t,qt,Jn),e);break}ir(t,qt,Jn);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Un(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X0(i/1960))-i,10<i){t.timeoutHandle=vc(ir.bind(null,t,qt,Jn),i);break}ir(t,qt,Jn);break;case 5:ir(t,qt,Jn);break;default:throw Error(ne(329))}}}return Qt(t,pt()),t.callbackNode===n?zg.bind(null,t):null}function kc(t,e){var n=ls;return t.current.memoizedState.isDehydrated&&(dr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=qt,qt=n,e!==null&&zc(e)),t}function zc(t){qt===null?qt=t:qt.push.apply(qt,t)}function Y0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Nn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~rd,e&=~Il,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function Uh(t){if(Ge&6)throw Error(ne(327));po();var e=Qa(t,0);if(!(e&1))return Qt(t,pt()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=cc(t);i!==0&&(e=i,n=kc(t,i))}if(n===1)throw n=bs,dr(t,0),Ri(t,e),Qt(t,pt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,qt,Jn),Qt(t,pt()),null}function sd(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(To=pt()+500,Ll&&ji())}}function xr(t){bi!==null&&bi.tag===0&&!(Ge&6)&&po();var e=Ge;Ge|=1;var n=yn.transition,i=Ze;try{if(yn.transition=null,Ze=1,t)return t()}finally{Ze=i,yn.transition=n,Ge=e,!(Ge&6)&&ji()}}function ad(){sn=so.current,nt(so)}function dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,M0(n)),vt!==null)for(n=vt.return;n!==null;){var i=n;switch(Hf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:Mo(),nt(Kt),nt(Ht),Kf();break;case 5:$f(i);break;case 4:Mo();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:Xf(i.type._context);break;case 22:case 23:ad()}n=n.return}if(Pt=t,vt=t=zi(t.current,null),Ut=sn=e,Mt=0,bs=null,rd=Il=vr=0,qt=ls=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}lr=null}return t}function Bg(t,e){do{var n=vt;try{if(Wf(),Fa.current=dl,fl){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fl=!1}if(_r=0,Ct=St=st=null,ss=!1,Rs=0,id.current=null,n===null||n.return===null){Mt=1,bs=e,vt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=yh(s);if(p!==null){p.flags&=-257,Sh(p,s,a,o,e),p.mode&1&&xh(o,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){xh(o,u,e),ld();break e}l=Error(ne(426))}}else if(rt&&a.mode&1){var m=yh(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Sh(m,s,a,o,e),Vf(Eo(l,a));break e}}o=l=Eo(l,a),Mt!==4&&(Mt=2),ls===null?ls=[o]:ls.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=Eg(o,l,e);hh(o,c);break e;case 1:a=l;var _=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Oi===null||!Oi.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=Tg(o,a,e);hh(o,E);break e}}o=o.return}while(o!==null)}Gg(n)}catch(L){e=L,vt===n&&n!==null&&(vt=n=n.return);continue}break}while(!0)}function Hg(){var t=hl.current;return hl.current=dl,t===null?dl:t}function ld(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Pt===null||!(vr&268435455)&&!(Il&268435455)||Ri(Pt,Ut)}function gl(t,e){var n=Ge;Ge|=2;var i=Hg();(Pt!==t||Ut!==e)&&(Jn=null,dr(t,e));do try{j0();break}catch(r){Bg(t,r)}while(!0);if(Wf(),Ge=n,hl.current=i,vt!==null)throw Error(ne(261));return Pt=null,Ut=0,Mt}function j0(){for(;vt!==null;)Vg(vt)}function q0(){for(;vt!==null&&!xv();)Vg(vt)}function Vg(t){var e=Xg(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?Gg(t):vt=e,id.current=null}function Gg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H0(n,e),n!==null){n.flags&=32767,vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,vt=null;return}}else if(n=B0(n,e,sn),n!==null){vt=n;return}if(e=e.sibling,e!==null){vt=e;return}vt=e=t}while(e!==null);Mt===0&&(Mt=5)}function ir(t,e,n){var i=Ze,r=yn.transition;try{yn.transition=null,Ze=1,$0(t,e,n,i)}finally{yn.transition=r,Ze=i}return null}function $0(t,e,n,i){do po();while(bi!==null);if(Ge&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pv(t,o),t===Pt&&(vt=Pt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ra||(ra=!0,Yg(Za,function(){return po(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=yn.transition,yn.transition=null;var s=Ze;Ze=1;var a=Ge;Ge|=4,id.current=null,G0(t,n),Og(n,t),m0(gc),Ja=!!mc,gc=mc=null,t.current=n,W0(n),yv(),Ge=a,Ze=s,yn.transition=o}else t.current=n;if(ra&&(ra=!1,bi=t,ml=r),o=t.pendingLanes,o===0&&(Oi=null),Ev(n.stateNode),Qt(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pl)throw pl=!1,t=Fc,Fc=null,t;return ml&1&&t.tag!==0&&po(),o=t.pendingLanes,o&1?t===Oc?us++:(us=0,Oc=t):us=0,ji(),null}function po(){if(bi!==null){var t=Em(ml),e=yn.transition,n=Ze;try{if(yn.transition=null,Ze=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,ml=0,Ge&6)throw Error(ne(331));var r=Ge;for(Ge|=4,pe=t.current;pe!==null;){var o=pe,s=o.child;if(pe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:as(8,f,o)}var h=f.child;if(h!==null)h.return=f,pe=h;else for(;pe!==null;){f=pe;var d=f.sibling,p=f.return;if(Ig(f),f===u){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,pe=s;else e:for(;pe!==null;){if(o=pe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:as(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,pe=c;break e}pe=o.return}}var _=t.current;for(pe=_;pe!==null;){s=pe;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,pe=g;else e:for(s=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(L){dt(a,a.return,L)}if(a===s){pe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,pe=E;break e}pe=a.return}}if(Ge=r,ji(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(wl,t)}catch{}i=!0}return i}finally{Ze=n,yn.transition=e}}return!1}function Ih(t,e,n){e=Eo(n,e),e=Eg(t,e,1),t=Fi(t,e,1),e=Xt(),t!==null&&(Ns(t,1,e),Qt(t,e))}function dt(t,e,n){if(t.tag===3)Ih(t,t,n);else for(;e!==null;){if(e.tag===3){Ih(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=Eo(n,t),t=Tg(e,t,1),e=Fi(e,t,1),t=Xt(),e!==null&&(Ns(e,1,t),Qt(e,t));break}}e=e.return}}function K0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Ut&n)===n&&(Mt===4||Mt===3&&(Ut&130023424)===Ut&&500>pt()-od?dr(t,0):rd|=n),Qt(t,e)}function Wg(t,e){e===0&&(t.mode&1?(e=qs,qs<<=1,!(qs&130023424)&&(qs=4194304)):e=1);var n=Xt();t=ui(t,e),t!==null&&(Ns(t,e,n),Qt(t,n))}function Z0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wg(t,n)}function Q0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Wg(t,n)}var Xg;Xg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,z0(t,e,n);$t=!!(t.flags&131072)}else $t=!1,rt&&e.flags&1048576&&$m(e,sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ka(t,e),t=e.pendingProps;var r=xo(e,Ht.current);ho(e,n),r=Qf(null,e,i,t,r,n);var o=Jf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(o=!0,rl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jf(e),r.updater=Dl,e.stateNode=r,r._reactInternals=e,wc(e,i,t,n),e=Rc(null,e,i,!0,o,n)):(e.tag=0,rt&&o&&Bf(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ka(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ex(i),t=Rn(i,t),r){case 0:e=Cc(null,e,i,t,n);break e;case 1:e=Th(null,e,i,t,n);break e;case 11:e=Mh(null,e,i,t,n);break e;case 14:e=Eh(null,e,i,Rn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Cc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Th(t,e,i,r,n);case 3:e:{if(Rg(e),t===null)throw Error(ne(387));i=e.pendingProps,o=e.memoizedState,r=o.element,tg(t,e),ul(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Eo(Error(ne(423)),e),e=wh(t,e,i,n,r);break e}else if(i!==r){r=Eo(Error(ne(424)),e),e=wh(t,e,i,n,r);break e}else for(an=Ni(e.stateNode.containerInfo.firstChild),ln=e,rt=!0,Ln=null,n=Jm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),i===r){e=ci(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return ng(e),t===null&&Mc(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,_c(i,r)?s=null:o!==null&&_c(i,o)&&(e.flags|=32),Cg(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&Mc(e),null;case 13:return Pg(t,e,n);case 4:return qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=So(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Mh(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Qe(al,i._currentValue),i._currentValue=s,o!==null)if(Nn(o.value,s)){if(o.children===r.children&&!Kt.current){e=ci(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=si(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ec(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ne(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ec(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,n),r=Sn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Rn(i,e.pendingProps),r=Rn(i.type,r),Eh(t,e,i,r,n);case 15:return wg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),ka(t,e),e.tag=1,Zt(i)?(t=!0,rl(e)):t=!1,ho(e,n),Mg(e,i,r),wc(e,i,r,n),Rc(null,e,i,!0,t,n);case 19:return Lg(t,e,n);case 22:return Ag(t,e,n)}throw Error(ne(156,e.tag))};function Yg(t,e){return xm(t,e)}function J0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,i){return new J0(t,e,n,i)}function ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ex(t){if(typeof t=="function")return ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rf)return 11;if(t===Pf)return 14}return 2}function zi(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")ud(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Kr:return hr(n.children,r,o,e);case Cf:s=8,r|=8;break;case $u:return t=vn(12,n,e,r|2),t.elementType=$u,t.lanes=o,t;case Ku:return t=vn(13,n,e,r),t.elementType=Ku,t.lanes=o,t;case Zu:return t=vn(19,n,e,r),t.elementType=Zu,t.lanes=o,t;case nm:return Nl(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case em:s=10;break e;case tm:s=9;break e;case Rf:s=11;break e;case Pf:s=14;break e;case Ti:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=vn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function hr(t,e,n,i){return t=vn(7,t,i,e),t.lanes=n,t}function Nl(t,e,n,i){return t=vn(22,t,i,e),t.elementType=nm,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function xu(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cd(t,e,n,i,r,o,s,a,l){return t=new tx(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=vn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jf(o),t}function nx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jg(t){if(!t)return Gi;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Zt(n))return jm(t,n,e)}return e}function qg(t,e,n,i,r,o,s,a,l){return t=cd(n,i,!0,t,r,o,s,a,l),t.context=jg(null),n=t.current,i=Xt(),r=ki(n),o=si(i,r),o.callback=e??null,Fi(n,o,r),t.current.lanes=r,Ns(t,r,i),Qt(t,i),t}function Fl(t,e,n,i){var r=e.current,o=Xt(),s=ki(r);return n=jg(n),e.context===null?e.context=n:e.pendingContext=n,e=si(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fi(r,e,s),t!==null&&(In(t,r,s,o),Na(t,r,s)),s}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Nh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fd(t,e){Nh(t,e),(t=t.alternate)&&Nh(t,e)}function ix(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function dd(t){this._internalRoot=t}Ol.prototype.render=dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Fl(t,e,null,null)};Ol.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xr(function(){Fl(null,t,null,null)}),e[li]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=Am();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ci.length&&e!==0&&e<Ci[n].priority;n++);Ci.splice(n,0,t),n===0&&Rm(t)}};function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fh(){}function rx(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=_l(s);o.call(u)}}var s=qg(e,i,t,0,null,!1,!1,"",Fh);return t._reactRootContainer=s,t[li]=s.current,Es(t.nodeType===8?t.parentNode:t),xr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=_l(l);a.call(u)}}var l=cd(t,0,!1,null,null,!1,!1,"",Fh);return t._reactRootContainer=l,t[li]=l.current,Es(t.nodeType===8?t.parentNode:t),xr(function(){Fl(e,l,n,i)}),l}function zl(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=_l(s);a.call(l)}}Fl(e,s,t,r)}else s=rx(n,e,t,r,i);return _l(s)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(Df(e,n|1),Qt(e,pt()),!(Ge&6)&&(To=pt()+500,ji()))}break;case 13:xr(function(){var i=ui(t,1);if(i!==null){var r=Xt();In(i,t,1,r)}}),fd(t,1)}};Uf=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=Xt();In(e,t,134217728,n)}fd(t,134217728)}};wm=function(t){if(t.tag===13){var e=ki(t),n=ui(t,e);if(n!==null){var i=Xt();In(n,t,e,i)}fd(t,e)}};Am=function(){return Ze};Cm=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};ac=function(t,e,n){switch(e){case"input":if(ec(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pl(i);if(!r)throw Error(ne(90));rm(i),ec(i,r)}}}break;case"textarea":sm(t,n);break;case"select":e=n.value,e!=null&&lo(t,!!n.multiple,e,!1)}};hm=sd;pm=xr;var ox={usingClientEntryPoint:!1,Events:[Os,eo,Pl,fm,dm,sd]},Wo={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sx={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_m(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{wl=oa.inject(sx),Gn=oa}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ox;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(e))throw Error(ne(200));return nx(t,e,null,n)};fn.createRoot=function(t,e){if(!hd(t))throw Error(ne(299));var n=!1,i="",r=$g;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cd(t,1,!1,null,null,n,!1,i,r),t[li]=e.current,Es(t.nodeType===8?t.parentNode:t),new dd(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=_m(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return xr(t)};fn.hydrate=function(t,e,n){if(!kl(e))throw Error(ne(200));return zl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!hd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=$g;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=qg(e,null,t,1,n??null,r,!1,o,s),t[li]=e.current,Es(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ol(e)};fn.render=function(t,e,n){if(!kl(e))throw Error(ne(200));return zl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!kl(t))throw Error(ne(40));return t._reactRootContainer?(xr(function(){zl(null,null,t,!1,function(){t._reactRootContainer=null,t[li]=null})}),!0):!1};fn.unstable_batchedUpdates=sd;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return zl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function Kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kg)}catch(t){console.error(t)}}Kg(),Kp.exports=fn;var ax=Kp.exports,Oh=ax;ju.createRoot=Oh.createRoot,ju.hydrateRoot=Oh.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="167",Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lx=0,kh=1,ux=2,Zg=1,cx=2,Qn=3,Wi=0,Jt=1,ti=2,Bi=0,mo=1,zh=2,Bh=3,Hh=4,fx=5,or=100,dx=101,hx=102,px=103,mx=104,gx=200,_x=201,vx=202,xx=203,Bc=204,Hc=205,yx=206,Sx=207,Mx=208,Ex=209,Tx=210,wx=211,Ax=212,Cx=213,Rx=214,Px=0,Lx=1,bx=2,vl=3,Dx=4,Ux=5,Ix=6,Nx=7,Qg=0,Fx=1,Ox=2,Hi=0,kx=1,zx=2,Bx=3,Hx=4,Vx=5,Gx=6,Wx=7,Jg=300,wo=301,Ao=302,Vc=303,Gc=304,Bl=306,Wc=1e3,cr=1001,Xc=1002,xn=1003,Xx=1004,sa=1005,bn=1006,yu=1007,fr=1008,fi=1009,e_=1010,t_=1011,Ds=1012,md=1013,yr=1014,ri=1015,zs=1016,gd=1017,_d=1018,Co=1020,n_=35902,i_=1021,r_=1022,Dn=1023,o_=1024,s_=1025,go=1026,Ro=1027,a_=1028,vd=1029,l_=1030,xd=1031,yd=1033,Va=33776,Ga=33777,Wa=33778,Xa=33779,Yc=35840,jc=35841,qc=35842,$c=35843,Kc=36196,Zc=37492,Qc=37496,Jc=37808,ef=37809,tf=37810,nf=37811,rf=37812,of=37813,sf=37814,af=37815,lf=37816,uf=37817,cf=37818,ff=37819,df=37820,hf=37821,Ya=36492,pf=36494,mf=36495,u_=36283,gf=36284,_f=36285,vf=36286,Yx=3200,jx=3201,qx=0,$x=1,Pi="",kn="srgb",qi="srgb-linear",Sd="display-p3",Hl="display-p3-linear",xl="linear",tt="srgb",yl="rec709",Sl="p3",br=7680,Vh=519,Kx=512,Zx=513,Qx=514,c_=515,Jx=516,ey=517,ty=518,ny=519,Gh=35044,Wh="300 es",oi=2e3,Ml=2001;class wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xh=1234567;const cs=Math.PI/180,Us=180/Math.PI;function Uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function Md(t,e){return(t%e+e)%e}function iy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function ry(t,e,n){return t!==e?(n-t)/(e-t):0}function fs(t,e,n){return(1-n)*t+n*e}function oy(t,e,n,i){return fs(t,e,1-Math.exp(-n*i))}function sy(t,e=1){return e-Math.abs(Md(t,e*2)-e)}function ay(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ly(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function uy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function cy(t,e){return t+Math.random()*(e-t)}function fy(t){return t*(.5-Math.random())}function dy(t){t!==void 0&&(Xh=t);let e=Xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hy(t){return t*cs}function py(t){return t*Us}function my(t){return(t&t-1)===0&&t!==0}function gy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _y(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vy(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),f=s((e+i)/2),h=o((e-i)/2),d=s((e-i)/2),p=o((i-e)/2),x=s((i-e)/2);switch(r){case"XYX":t.set(a*f,l*h,l*d,a*u);break;case"YZY":t.set(l*d,a*f,l*h,a*u);break;case"ZXZ":t.set(l*h,l*d,a*f,a*u);break;case"XZX":t.set(a*f,l*x,l*p,a*u);break;case"YXY":t.set(l*p,a*f,l*x,a*u);break;case"ZYZ":t.set(l*x,l*p,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const xy={DEG2RAD:cs,RAD2DEG:Us,generateUUID:Uo,clamp:Bt,euclideanModulo:Md,mapLinear:iy,inverseLerp:ry,lerp:fs,damp:oy,pingpong:sy,smoothstep:ay,smootherstep:ly,randInt:uy,randFloat:cy,randFloatSpread:fy,seededRandom:dy,degToRad:hy,radToDeg:py,isPowerOfTwo:my,ceilPowerOfTwo:gy,floorPowerOfTwo:_y,setQuaternionFromProperEuler:vy,normalize:Vt,denormalize:qr};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,o,s,a,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],p=i[5],x=i[8],y=r[0],m=r[3],c=r[6],_=r[1],g=r[4],E=r[7],L=r[2],C=r[5],A=r[8];return o[0]=s*y+a*_+l*L,o[3]=s*m+a*g+l*C,o[6]=s*c+a*E+l*A,o[1]=u*y+f*_+h*L,o[4]=u*m+f*g+h*C,o[7]=u*c+f*E+h*A,o[2]=d*y+p*_+x*L,o[5]=d*m+p*g+x*C,o[8]=d*c+p*E+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*s-a*u,d=a*l-f*o,p=u*o-s*l,x=n*h+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*u-f*i)*y,e[2]=(a*i-r*s)*y,e[3]=d*y,e[4]=(f*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Su.makeScale(e,n)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,n){return this.premultiply(Su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Su=new Oe;function f_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function El(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yy(){const t=El("canvas");return t.style.display="block",t}const Yh={};function ds(t){t in Yh||(Yh[t]=!0,console.warn(t))}function Sy(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const jh=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qh=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xo={[qi]:{transfer:xl,primaries:yl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[kn]:{transfer:tt,primaries:yl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hl]:{transfer:xl,primaries:Sl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(qh),fromReference:t=>t.applyMatrix3(jh)},[Sd]:{transfer:tt,primaries:Sl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(qh),fromReference:t=>t.applyMatrix3(jh).convertLinearToSRGB()}},My=new Set([qi,Hl]),$e={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!My.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xo[e].toReference,r=Xo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xo[t].primaries},getTransfer:function(t){return t===Pi?xl:Xo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Xo[e].luminanceCoefficients)}};function _o(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Mu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class Ey{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=El("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=_o(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_o(n[i]/255)*255):n[i]=_o(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ty=0;class d_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Eu(r[s].image)):o.push(Eu(r[s]))}else o=Eu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ey.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wy=0;class en extends wr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=cr,r=cr,o=bn,s=fr,a=Dn,l=fi,u=en.DEFAULT_ANISOTROPY,f=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Uo(),this.name="",this.source=new d_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wc:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wc:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Jg;en.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],x=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,E=(p+1)/2,L=(c+1)/2,C=(f+d)/4,A=(h+y)/4,D=(x+m)/4;return g>E&&g>L?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=C/i,o=A/i):E>L?E<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),i=C/r,o=D/r):L<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),i=A/o,r=D/o),this.set(i,r,o,n),this}let _=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(h-y)/_,this.z=(d-f)/_,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ay extends wr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new d_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends Ay{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class h_ extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cy extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],x=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(h!==y||l!==d||u!==p||f!==x){let m=1-a;const c=l*d+u*p+f*x+h*y,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const L=Math.sqrt(g),C=Math.atan2(L,c*_);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const E=a*_;if(l=l*m+d*E,u=u*m+p*E,f=f*m+x*E,h=h*m+y*E,m===1-a){const L=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=L,u*=L,f*=L,h*=L}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=o[s],d=o[s+1],p=o[s+2],x=o[s+3];return e[n]=a*x+f*h+l*p-u*d,e[n+1]=l*x+f*d+u*h-a*p,e[n+2]=u*x+f*p+a*d-l*h,e[n+3]=f*x-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(o/2),d=l(i/2),p=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=d*f*h+u*p*x,this._y=u*p*h-d*f*x,this._z=u*f*x+d*p*h,this._w=u*f*h-d*p*x;break;case"YXZ":this._x=d*f*h+u*p*x,this._y=u*p*h-d*f*x,this._z=u*f*x-d*p*h,this._w=u*f*h+d*p*x;break;case"ZXY":this._x=d*f*h-u*p*x,this._y=u*p*h+d*f*x,this._z=u*f*x+d*p*h,this._w=u*f*h-d*p*x;break;case"ZYX":this._x=d*f*h-u*p*x,this._y=u*p*h+d*f*x,this._z=u*f*x-d*p*h,this._w=u*f*h+d*p*x;break;case"YZX":this._x=d*f*h+u*p*x,this._y=u*p*h+d*f*x,this._z=u*f*x-d*p*h,this._w=u*f*h-d*p*x;break;case"XZY":this._x=d*f*h-u*p*x,this._y=u*p*h-d*f*x,this._z=u*f*x+d*p*h,this._w=u*f*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($h.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),f=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*u+s*h-a*f,this.y=i+l*f+a*u-o*h,this.z=r+l*h+o*f-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new O,$h=new Mr;class Bs{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,wn):wn.fromBufferAttribute(o,s),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),la.subVectors(this.max,Yo),Ur.subVectors(e.a,Yo),Ir.subVectors(e.b,Yo),Nr.subVectors(e.c,Yo),vi.subVectors(Ir,Ur),xi.subVectors(Nr,Ir),Ki.subVectors(Ur,Nr);let n=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Ki.z,Ki.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Ki.z,0,-Ki.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Ki.y,Ki.x,0];return!wu(n,Ur,Ir,Nr,la)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,Ur,Ir,Nr,la))?!1:(ua.crossVectors(vi,xi),n=[ua.x,ua.y,ua.z],wu(n,Ur,Ir,Nr,la))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new O,new O,new O,new O,new O,new O,new O,new O],wn=new O,aa=new Bs,Ur=new O,Ir=new O,Nr=new O,vi=new O,xi=new O,Ki=new O,Yo=new O,la=new O,ua=new O,Zi=new O;function wu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Zi.fromArray(t,o);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),u=n.dot(Zi),f=i.dot(Zi);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Ry=new Bs,jo=new O,Au=new O;class Ed{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ry.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const n=jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Au)),this.expandByPoint(jo.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new O,Cu=new O,ca=new O,yi=new O,Ru=new O,fa=new O,Pu=new O;class p_{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cu.copy(e).add(n).multiplyScalar(.5),ca.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Cu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ca),a=yi.dot(this.direction),l=-yi.dot(ca),u=yi.lengthSq(),f=Math.abs(1-s*s);let h,d,p,x;if(f>0)if(h=s*l-a,d=s*a-l,x=o*f,h>=0)if(d>=-x)if(d<=x){const y=1/f;h*=y,d*=y,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+u}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+u):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cu).addScaledVector(ca,d),p}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(o=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(o=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,o){Ru.subVectors(n,e),fa.subVectors(i,e),Pu.crossVectors(Ru,fa);let s=this.direction.dot(Pu),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(fa.crossVectors(yi,fa));if(l<0)return null;const u=a*this.direction.dot(Ru.cross(yi));if(u<0||l+u>s)return null;const f=-a*yi.dot(Pu);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,o,s,a,l,u,f,h,d,p,x,y,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,h,d,p,x,y,m)}set(e,n,i,r,o,s,a,l,u,f,h,d,p,x,y,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=x,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),o=1/Fr.setFromMatrixColumn(e,1).length(),s=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*f,p=s*h,x=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=p+x*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=x+p*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,x=u*f,y=u*h;n[0]=d+y*a,n[4]=x*a-p,n[8]=s*u,n[1]=s*h,n[5]=s*f,n[9]=-a,n[2]=p*a-x,n[6]=y+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,x=u*f,y=u*h;n[0]=d-y*a,n[4]=-s*h,n[8]=x+p*a,n[1]=p+x*a,n[5]=s*f,n[9]=y-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*f,p=s*h,x=a*f,y=a*h;n[0]=l*f,n[4]=x*u-p,n[8]=d*u+y,n[1]=l*h,n[5]=y*u+d,n[9]=p*u-x,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*u,x=a*l,y=a*u;n[0]=l*f,n[4]=y-d*h,n[8]=x*h+p,n[1]=h,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*h+x,n[10]=d-y*h}else if(e.order==="XZY"){const d=s*l,p=s*u,x=a*l,y=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+y,n[5]=s*f,n[9]=p*h-x,n[2]=x*h-p,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Py,e,Ly)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Si.crossVectors(i,rn),Si.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Si.crossVectors(i,rn)),Si.normalize(),da.crossVectors(rn,Si),r[0]=Si.x,r[4]=da.x,r[8]=rn.x,r[1]=Si.y,r[5]=da.y,r[9]=rn.y,r[2]=Si.z,r[6]=da.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],p=i[13],x=i[2],y=i[6],m=i[10],c=i[14],_=i[3],g=i[7],E=i[11],L=i[15],C=r[0],A=r[4],D=r[8],w=r[12],M=r[1],b=r[5],W=r[9],V=r[13],$=r[2],K=r[6],Y=r[10],q=r[14],U=r[3],j=r[7],Z=r[11],se=r[15];return o[0]=s*C+a*M+l*$+u*U,o[4]=s*A+a*b+l*K+u*j,o[8]=s*D+a*W+l*Y+u*Z,o[12]=s*w+a*V+l*q+u*se,o[1]=f*C+h*M+d*$+p*U,o[5]=f*A+h*b+d*K+p*j,o[9]=f*D+h*W+d*Y+p*Z,o[13]=f*w+h*V+d*q+p*se,o[2]=x*C+y*M+m*$+c*U,o[6]=x*A+y*b+m*K+c*j,o[10]=x*D+y*W+m*Y+c*Z,o[14]=x*w+y*V+m*q+c*se,o[3]=_*C+g*M+E*$+L*U,o[7]=_*A+g*b+E*K+L*j,o[11]=_*D+g*W+E*Y+L*Z,o[15]=_*w+g*V+E*q+L*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],p=e[14],x=e[3],y=e[7],m=e[11],c=e[15];return x*(+o*l*h-r*u*h-o*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+o*s*d-r*s*p+r*u*f-o*l*f)+m*(+n*u*h-n*a*p-o*s*h+i*s*p+o*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*s*h-i*s*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],p=e[11],x=e[12],y=e[13],m=e[14],c=e[15],_=h*m*u-y*d*u+y*l*p-a*m*p-h*l*c+a*d*c,g=x*d*u-f*m*u-x*l*p+s*m*p+f*l*c-s*d*c,E=f*y*u-x*h*u+x*a*p-s*y*p-f*a*c+s*h*c,L=x*h*l-f*y*l-x*a*d+s*y*d+f*a*m-s*h*m,C=n*_+i*g+r*E+o*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(y*d*o-h*m*o-y*r*p+i*m*p+h*r*c-i*d*c)*A,e[2]=(a*m*o-y*l*o+y*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(h*l*o-a*d*o-h*r*u+i*d*u+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(f*m*o-x*d*o+x*r*p-n*m*p-f*r*c+n*d*c)*A,e[6]=(x*l*o-s*m*o-x*r*u+n*m*u+s*r*c-n*l*c)*A,e[7]=(s*d*o-f*l*o+f*r*u-n*d*u-s*r*p+n*l*p)*A,e[8]=E*A,e[9]=(x*h*o-f*y*o-x*i*p+n*y*p+f*i*c-n*h*c)*A,e[10]=(s*y*o-x*a*o+x*i*u-n*y*u-s*i*c+n*a*c)*A,e[11]=(f*a*o-s*h*o-f*i*u+n*h*u+s*i*p-n*a*p)*A,e[12]=L*A,e[13]=(f*y*r-x*h*r+x*i*d-n*y*d-f*i*m+n*h*m)*A,e[14]=(x*a*r-s*y*r-x*i*l+n*y*l+s*i*m-n*a*m)*A,e[15]=(s*h*r-f*a*r+f*i*l-n*h*l-s*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,h=a+a,d=o*u,p=o*f,x=o*h,y=s*f,m=s*h,c=a*h,_=l*u,g=l*f,E=l*h,L=i.x,C=i.y,A=i.z;return r[0]=(1-(y+c))*L,r[1]=(p+E)*L,r[2]=(x-g)*L,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(d+c))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(x+g)*A,r[9]=(m-_)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Fr.set(r[0],r[1],r[2]).length();const s=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const u=1/o,f=1/s,h=1/a;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,n.setFromRotationMatrix(An),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=oi){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,x;if(a===oi)p=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===Ml)p=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=oi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(s-o),d=(n+e)*u,p=(i+r)*f;let x,y;if(a===oi)x=(s+o)*h,y=-2*h;else if(a===Ml)x=o*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new O,An=new Et,Py=new O(0,0,0),Ly=new O(1,1,1),Si=new O,da=new O,rn=new O,Kh=new Et,Zh=new Mr;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let by=0;const Qh=new O,Or=new Mr,$n=new Et,ha=new O,qo=new O,Dy=new O,Uy=new Mr,Jh=new O(1,0,0),ep=new O(0,1,0),tp=new O(0,0,1),np={type:"added"},Iy={type:"removed"},kr={type:"childadded",child:null},Lu={type:"childremoved",child:null};class un extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new O,n=new di,i=new Mr,r=new O(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Oe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(ep,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,n){return Qh.copy(e).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(ep,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ha.copy(e):ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(qo,ha,this.up):$n.lookAt(ha,qo,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Or.setFromRotationMatrix($n),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(np),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Iy),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(np),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,Dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new O(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new O,Kn=new O,bu=new O,Zn=new O,zr=new O,Br=new O,ip=new O,Du=new O,Uu=new O,Iu=new O;class Hn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Cn.subVectors(r,n),Kn.subVectors(i,n),bu.subVectors(e,n);const s=Cn.dot(Cn),a=Cn.dot(Kn),l=Cn.dot(bu),u=Kn.dot(Kn),f=Kn.dot(bu),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(u*l-a*f)*d,x=(s*f-a*l)*d;return o.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Zn.x),l.addScaledVector(s,Zn.y),l.addScaledVector(a,Zn.z),l)}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),Kn.subVectors(e,n),Cn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Cn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;zr.subVectors(r,i),Br.subVectors(o,i),Du.subVectors(e,i);const l=zr.dot(Du),u=Br.dot(Du);if(l<=0&&u<=0)return n.copy(i);Uu.subVectors(e,r);const f=zr.dot(Uu),h=Br.dot(Uu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(zr,s);Iu.subVectors(e,o);const p=zr.dot(Iu),x=Br.dot(Iu);if(x>=0&&p<=x)return n.copy(o);const y=p*u-l*x;if(y<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Br,a);const m=f*x-p*h;if(m<=0&&h-f>=0&&p-x>=0)return ip.subVectors(o,r),a=(h-f)/(h-f+(p-x)),n.copy(r).addScaledVector(ip,a);const c=1/(m+y+d);return s=y*c,a=d*c,n.copy(i).addScaledVector(zr,s).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=Md(e,1),n=Bt(n,0,1),i=Bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Nu(s,o,e+1/3),this.g=Nu(s,o,e),this.b=Nu(s,o,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=kn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=g_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=Mu(e.r),this.g=Mu(e.g),this.b=Mu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return $e.fromWorkingColorSpace(kt.copy(this),e),Math.round(Bt(kt.r*255,0,255))*65536+Math.round(Bt(kt.g*255,0,255))*256+Math.round(Bt(kt.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,o=kt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=f<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=kn){$e.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(pa);const i=fs(Mi.h,pa.h,n),r=fs(Mi.s,pa.s,n),o=fs(Mi.l,pa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ke;Ke.NAMES=g_;let Ny=0;class Vl extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=mo,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=Hc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bc&&(i.blendSrc=this.blendSrc),this.blendDst!==Hc&&(i.blendDst=this.blendDst),this.blendEquation!==or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class __ extends Vl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new O,ma=new Ne;class Xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ds("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ma.fromBufferAttribute(this,n),ma.applyMatrix3(e),this.setXY(n,ma.x,ma.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),e}}class v_ extends Xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class x_ extends Xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pr extends Xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Fy=0;const pn=new Et,Fu=new un,Hr=new O,on=new Bs,$o=new Bs,At=new O;class Ar extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f_(e)?x_:v_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Oe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new pr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];on.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ed);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(on.min,$o.min),on.expandByPoint(At),At.addVectors(on.max,$o.max),on.expandByPoint(At)):(on.expandByPoint($o.min),on.expandByPoint($o.max))}on.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)At.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(At));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)At.fromBufferAttribute(a,u),l&&(Hr.fromBufferAttribute(e,u),At.add(Hr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new O,l[D]=new O;const u=new O,f=new O,h=new O,d=new Ne,p=new Ne,x=new Ne,y=new O,m=new O;function c(D,w,M){u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),d.fromBufferAttribute(o,D),p.fromBufferAttribute(o,w),x.fromBufferAttribute(o,M),f.sub(u),h.sub(u),p.sub(d),x.sub(d);const b=1/(p.x*x.y-x.x*p.y);isFinite(b)&&(y.copy(f).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(b),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(b),a[D].add(y),a[w].add(y),a[M].add(y),l[D].add(m),l[w].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,w=_.length;D<w;++D){const M=_[D],b=M.start,W=M.count;for(let V=b,$=b+W;V<$;V+=3)c(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const g=new O,E=new O,L=new O,C=new O;function A(D){L.fromBufferAttribute(r,D),C.copy(L);const w=a[D];g.copy(w),g.sub(L.multiplyScalar(L.dot(w))).normalize(),E.crossVectors(C,w);const b=E.dot(l[D])<0?-1:1;s.setXYZW(D,g.x,g.y,g.z,b)}for(let D=0,w=_.length;D<w;++D){const M=_[D],b=M.start,W=M.count;for(let V=b,$=b+W;V<$;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,o=new O,s=new O,a=new O,l=new O,u=new O,f=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let c=0;c<f;c++)d[x++]=u[p++]}return new Xn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ar,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],h=o[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rp=new Et,Qi=new p_,ga=new Ed,op=new O,Vr=new O,Gr=new O,Wr=new O,Ou=new O,_a=new O,va=new Ne,xa=new Ne,ya=new Ne,sp=new O,ap=new O,lp=new O,Sa=new O,Ma=new O;class Vn extends un{constructor(e=new Ar,n=new __){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){_a.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],h=o[l];f!==0&&(Ou.fromBufferAttribute(h,e),s?_a.addScaledVector(Ou,f):_a.addScaledVector(Ou.sub(n),f))}n.add(_a)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(o),Qi.copy(e.ray).recast(e.near),!(ga.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ga,op)===null||Qi.origin.distanceToSquared(op)>(e.far-e.near)**2))&&(rp.copy(o).invert(),Qi.copy(e.ray).applyMatrix4(rp),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qi)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,y=d.length;x<y;x++){const m=d[x],c=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,L=g;E<L;E+=3){const C=a.getX(E),A=a.getX(E+1),D=a.getX(E+2);r=Ea(this,c,e,i,u,f,h,C,A,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,c=y;m<c;m+=3){const _=a.getX(m),g=a.getX(m+1),E=a.getX(m+2);r=Ea(this,s,e,i,u,f,h,_,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,y=d.length;x<y;x++){const m=d[x],c=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,L=g;E<L;E+=3){const C=E,A=E+1,D=E+2;r=Ea(this,c,e,i,u,f,h,C,A,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,c=y;m<c;m+=3){const _=m,g=m+1,E=m+2;r=Ea(this,s,e,i,u,f,h,_,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Oy(t,e,n,i,r,o,s,a){let l;if(e.side===Jt?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Wi,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ma);return u<n.near||u>n.far?null:{distance:u,point:Ma.clone(),object:t}}function Ea(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Vr),t.getVertexPosition(l,Gr),t.getVertexPosition(u,Wr);const f=Oy(t,e,n,i,Vr,Gr,Wr,Sa);if(f){r&&(va.fromBufferAttribute(r,a),xa.fromBufferAttribute(r,l),ya.fromBufferAttribute(r,u),f.uv=Hn.getInterpolation(Sa,Vr,Gr,Wr,va,xa,ya,new Ne)),o&&(va.fromBufferAttribute(o,a),xa.fromBufferAttribute(o,l),ya.fromBufferAttribute(o,u),f.uv1=Hn.getInterpolation(Sa,Vr,Gr,Wr,va,xa,ya,new Ne)),s&&(sp.fromBufferAttribute(s,a),ap.fromBufferAttribute(s,l),lp.fromBufferAttribute(s,u),f.normal=Hn.getInterpolation(Sa,Vr,Gr,Wr,sp,ap,lp,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};Hn.getNormal(Vr,Gr,Wr,h.normal),f.face=h}return f}class Io extends Ar{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new pr(u,3)),this.setAttribute("normal",new pr(f,3)),this.setAttribute("uv",new pr(h,2));function x(y,m,c,_,g,E,L,C,A,D,w){const M=E/A,b=L/D,W=E/2,V=L/2,$=C/2,K=A+1,Y=D+1;let q=0,U=0;const j=new O;for(let Z=0;Z<Y;Z++){const se=Z*b-V;for(let ye=0;ye<K;ye++){const Be=ye*M-W;j[y]=Be*_,j[m]=se*g,j[c]=$,u.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[c]=C>0?1:-1,f.push(j.x,j.y,j.z),h.push(ye/A),h.push(1-Z/D),q+=1}}for(let Z=0;Z<D;Z++)for(let se=0;se<A;se++){const ye=d+se+K*Z,Be=d+se+K*(Z+1),X=d+(se+1)+K*(Z+1),ie=d+(se+1)+K*Z;l.push(ye,Be,ie),l.push(Be,X,ie),U+=6}a.addGroup(p,U,w),p+=U,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Po(t[n]);for(const r in i)e[r]=i[r]}return e}function ky(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function y_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const zy={clone:Po,merge:Gt};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Vl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class S_ extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new O,up=new Ne,cp=new Ne;class _n extends S_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,n){return this.getViewBounds(e,up,cp),n.subVectors(cp,up)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,Yr=1;class Vy extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Xr,Yr,e,n);r.layers=this.layers,this.add(r);const o=new _n(Xr,Yr,e,n);o.layers=this.layers,this.add(o);const s=new _n(Xr,Yr,e,n);s.layers=this.layers,this.add(s);const a=new _n(Xr,Yr,e,n);a.layers=this.layers,this.add(a);const l=new _n(Xr,Yr,e,n);l.layers=this.layers,this.add(l);const u=new _n(Xr,Yr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class M_ extends en{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:wo,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gy extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Io(5,5,5),o=new hi({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Bi});o.uniforms.tEquirect.value=n;const s=new Vn(r,o),a=n.minFilter;return n.minFilter===fr&&(n.minFilter=bn),new Vy(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const ku=new O,Wy=new O,Xy=new Oe;class Ai{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ku.subVectors(i,n).cross(Wy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Xy.getNormalMatrix(e),r=this.coplanarPoint(ku).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Ed,Ta=new O;class E_{constructor(e=new Ai,n=new Ai,i=new Ai,r=new Ai,o=new Ai,s=new Ai){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],x=r[9],y=r[10],m=r[11],c=r[12],_=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-o,d-u,m-p,E-c).normalize(),i[1].setComponents(l+o,d+u,m+p,E+c).normalize(),i[2].setComponents(l+s,d+f,m+x,E+_).normalize(),i[3].setComponents(l-s,d-f,m-x,E-_).normalize(),i[4].setComponents(l-a,d-h,m-y,E-g).normalize(),n===oi)i[5].setComponents(l+a,d+h,m+y,E+g).normalize();else if(n===Ml)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ta.x=r.normal.x>0?e.max.x:e.min.x,Ta.y=r.normal.y>0?e.max.y:e.min.y,Ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Yy(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&d.length===0&&t.bufferSubData(u,0,f),d.length!==0){for(let p=0,x=d.length;p<x;p++){const y=d[p];t.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class Gl extends Ar{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,p=[],x=[],y=[],m=[];for(let c=0;c<f;c++){const _=c*d-s;for(let g=0;g<u;g++){const E=g*h-o;x.push(E,-_,0),y.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,E=_+u*(c+1),L=_+1+u*(c+1),C=_+1+u*c;p.push(g,E,C),p.push(E,L,C)}this.setIndex(p),this.setAttribute("position",new pr(x,3)),this.setAttribute("normal",new pr(y,3)),this.setAttribute("uv",new pr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
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
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
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
#endif`,eS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tS=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sS=`#ifdef USE_IRIDESCENCE
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
#endif`,aS=`#ifdef USE_BUMPMAP
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
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gS=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_S=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ES="gl_FragColor = linearToOutputTexel( gl_FragColor );",TS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CS=`#ifdef USE_ENVMAP
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
#endif`,RS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,US=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IS=`#ifdef USE_GRADIENTMAP
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
}`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kS=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,zS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,XS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$S=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nM=`#if defined( USE_POINTS_UV )
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
#endif`,iM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
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
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,LM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,bM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UM=`#ifdef USE_SKINNING
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
#endif`,IM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zM=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jM=`uniform sampler2D t2D;
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
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
}`,JM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eE=`#define DISTANCE
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
}`,tE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
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
}`,oE=`uniform vec3 diffuse;
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
}`,sE=`#include <common>
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
}`,aE=`uniform vec3 diffuse;
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
}`,lE=`#define LAMBERT
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
}`,uE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cE=`#define MATCAP
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
}`,fE=`#define MATCAP
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
}`,dE=`#define NORMAL
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
}`,hE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pE=`#define PHONG
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
}`,mE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,gE=`#define STANDARD
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
}`,_E=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,vE=`#define TOON
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
}`,xE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yE=`uniform float size;
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,EE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,wE=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:jy,alphahash_pars_fragment:qy,alphamap_fragment:$y,alphamap_pars_fragment:Ky,alphatest_fragment:Zy,alphatest_pars_fragment:Qy,aomap_fragment:Jy,aomap_pars_fragment:eS,batching_pars_vertex:tS,batching_vertex:nS,begin_vertex:iS,beginnormal_vertex:rS,bsdfs:oS,iridescence_fragment:sS,bumpmap_pars_fragment:aS,clipping_planes_fragment:lS,clipping_planes_pars_fragment:uS,clipping_planes_pars_vertex:cS,clipping_planes_vertex:fS,color_fragment:dS,color_pars_fragment:hS,color_pars_vertex:pS,color_vertex:mS,common:gS,cube_uv_reflection_fragment:_S,defaultnormal_vertex:vS,displacementmap_pars_vertex:xS,displacementmap_vertex:yS,emissivemap_fragment:SS,emissivemap_pars_fragment:MS,colorspace_fragment:ES,colorspace_pars_fragment:TS,envmap_fragment:wS,envmap_common_pars_fragment:AS,envmap_pars_fragment:CS,envmap_pars_vertex:RS,envmap_physical_pars_fragment:zS,envmap_vertex:PS,fog_vertex:LS,fog_pars_vertex:bS,fog_fragment:DS,fog_pars_fragment:US,gradientmap_pars_fragment:IS,lightmap_pars_fragment:NS,lights_lambert_fragment:FS,lights_lambert_pars_fragment:OS,lights_pars_begin:kS,lights_toon_fragment:BS,lights_toon_pars_fragment:HS,lights_phong_fragment:VS,lights_phong_pars_fragment:GS,lights_physical_fragment:WS,lights_physical_pars_fragment:XS,lights_fragment_begin:YS,lights_fragment_maps:jS,lights_fragment_end:qS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:QS,map_fragment:JS,map_pars_fragment:eM,map_particle_fragment:tM,map_particle_pars_fragment:nM,metalnessmap_fragment:iM,metalnessmap_pars_fragment:rM,morphinstance_vertex:oM,morphcolor_vertex:sM,morphnormal_vertex:aM,morphtarget_pars_vertex:lM,morphtarget_vertex:uM,normal_fragment_begin:cM,normal_fragment_maps:fM,normal_pars_fragment:dM,normal_pars_vertex:hM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:vM,iridescence_pars_fragment:xM,opaque_fragment:yM,packing:SM,premultiplied_alpha_fragment:MM,project_vertex:EM,dithering_fragment:TM,dithering_pars_fragment:wM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:PM,shadowmap_vertex:LM,shadowmask_pars_fragment:bM,skinbase_vertex:DM,skinning_pars_vertex:UM,skinning_vertex:IM,skinnormal_vertex:NM,specularmap_fragment:FM,specularmap_pars_fragment:OM,tonemapping_fragment:kM,tonemapping_pars_fragment:zM,transmission_fragment:BM,transmission_pars_fragment:HM,uv_pars_fragment:VM,uv_pars_vertex:GM,uv_vertex:WM,worldpos_vertex:XM,background_vert:YM,background_frag:jM,backgroundCube_vert:qM,backgroundCube_frag:$M,cube_vert:KM,cube_frag:ZM,depth_vert:QM,depth_frag:JM,distanceRGBA_vert:eE,distanceRGBA_frag:tE,equirect_vert:nE,equirect_frag:iE,linedashed_vert:rE,linedashed_frag:oE,meshbasic_vert:sE,meshbasic_frag:aE,meshlambert_vert:lE,meshlambert_frag:uE,meshmatcap_vert:cE,meshmatcap_frag:fE,meshnormal_vert:dE,meshnormal_frag:hE,meshphong_vert:pE,meshphong_frag:mE,meshphysical_vert:gE,meshphysical_frag:_E,meshtoon_vert:vE,meshtoon_frag:xE,points_vert:yE,points_frag:SE,shadow_vert:ME,shadow_frag:EE,sprite_vert:TE,sprite_frag:wE},le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},zn={basic:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([le.lights,le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};zn.physical={uniforms:Gt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const wa={r:0,b:0,g:0},er=new di,AE=new Et;function CE(t,e,n,i,r,o,s){const a=new Ke(0);let l=o===!0?0:1,u,f,h=null,d=0,p=null;function x(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const E=x(_);E===null?c(a,l):E&&E.isColor&&(c(E,1),g=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const E=x(g);E&&(E.isCubeTexture||E.mapping===Bl)?(f===void 0&&(f=new Vn(new Io(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Po(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),er.copy(g.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(er)),f.material.toneMapped=$e.getTransfer(E.colorSpace)!==tt,(h!==E||d!==E.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=E,d=E.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Vn(new Gl(2,2),new hi({name:"BackgroundMaterial",uniforms:Po(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=$e.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function c(_,g){_.getRGB(wa,y_(t)),i.buffers.color.setClear(wa.r,wa.g,wa.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,c(a,l)},render:y,addToRenderList:m}}function RE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(M,b,W,V,$){let K=!1;const Y=h(V,W,b);o!==Y&&(o=Y,u(o.object)),K=p(M,V,W,$),K&&x(M,V,W,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,E(M,b,W,V),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function h(M,b,W){const V=W.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let K=$[b.id];K===void 0&&(K={},$[b.id]=K);let Y=K[V];return Y===void 0&&(Y=d(l()),K[V]=Y),Y}function d(M){const b=[],W=[],V=[];for(let $=0;$<n;$++)b[$]=0,W[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,b,W,V){const $=o.attributes,K=b.attributes;let Y=0;const q=W.getAttributes();for(const U in q)if(q[U].location>=0){const Z=$[U];let se=K[U];if(se===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;Y++}return o.attributesNum!==Y||o.index!==V}function x(M,b,W,V){const $={},K=b.attributes;let Y=0;const q=W.getAttributes();for(const U in q)if(q[U].location>=0){let Z=K[U];Z===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),$[U]=se,Y++}o.attributes=$,o.attributesNum=Y,o.index=V}function y(){const M=o.newAttributes;for(let b=0,W=M.length;b<W;b++)M[b]=0}function m(M){c(M,0)}function c(M,b){const W=o.newAttributes,V=o.enabledAttributes,$=o.attributeDivisors;W[M]=1,V[M]===0&&(t.enableVertexAttribArray(M),V[M]=1),$[M]!==b&&(t.vertexAttribDivisor(M,b),$[M]=b)}function _(){const M=o.newAttributes,b=o.enabledAttributes;for(let W=0,V=b.length;W<V;W++)b[W]!==M[W]&&(t.disableVertexAttribArray(W),b[W]=0)}function g(M,b,W,V,$,K,Y){Y===!0?t.vertexAttribIPointer(M,b,W,$,K):t.vertexAttribPointer(M,b,W,V,$,K)}function E(M,b,W,V){y();const $=V.attributes,K=W.getAttributes(),Y=b.defaultAttributeValues;for(const q in K){const U=K[q];if(U.location>=0){let j=$[q];if(j===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const Z=j.normalized,se=j.itemSize,ye=e.get(j);if(ye===void 0)continue;const Be=ye.buffer,X=ye.type,ie=ye.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||j.gpuType===md;if(j.isInterleavedBufferAttribute){const ce=j.data,De=ce.stride,Ie=j.offset;if(ce.isInstancedInterleavedBuffer){for(let ke=0;ke<U.locationSize;ke++)c(U.location+ke,ce.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<U.locationSize;ke++)m(U.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ke=0;ke<U.locationSize;ke++)g(U.location+ke,se/U.locationSize,X,Z,De*ie,(Ie+se/U.locationSize*ke)*ie,ue)}else{if(j.isInstancedBufferAttribute){for(let ce=0;ce<U.locationSize;ce++)c(U.location+ce,j.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ce=0;ce<U.locationSize;ce++)m(U.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ce=0;ce<U.locationSize;ce++)g(U.location+ce,se/U.locationSize,X,Z,se*ie,se/U.locationSize*ce*ie,ue)}}else if(Y!==void 0){const Z=Y[q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(U.location,Z);break;case 3:t.vertexAttrib3fv(U.location,Z);break;case 4:t.vertexAttrib4fv(U.location,Z);break;default:t.vertexAttrib1fv(U.location,Z)}}}}_()}function L(){D();for(const M in i){const b=i[M];for(const W in b){const V=b[W];for(const $ in V)f(V[$].object),delete V[$];delete b[W]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const b=i[M.id];for(const W in b){const V=b[W];for(const $ in V)f(V[$].object),delete V[$];delete b[W]}delete i[M.id]}function A(M){for(const b in i){const W=i[b];if(W[M.id]===void 0)continue;const V=W[M.id];for(const $ in V)f(V[$].object),delete V[$];delete W[M.id]}}function D(){w(),s=!0,o!==r&&(o=r,u(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function PE(t,e,n){let i;function r(u){i=u}function o(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function s(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let p=0;for(let x=0;x<h;x++)p+=f[x];n.update(p,i,1)}function l(u,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)s(u[x],f[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let x=0;for(let y=0;y<h;y++)x+=f[y];for(let y=0;y<d.length;y++)n.update(x,i,d[y])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function LE(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==Dn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==fi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ri&&!A)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:c,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:E,maxSamples:L}}function bE(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Ai,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||o&&!m)o?f(null):u();else{const _=o?0:i,g=_*4;let E=c.clippingState||null;l.value=E,E=f(x,d,g,p);for(let L=0;L!==g;++L)E[L]=n[L];c.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,x){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const c=p+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,E=p;g!==y;++g,E+=4)s.copy(h[g]).applyMatrix4(_,a),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function DE(t){let e=new WeakMap;function n(s,a){return a===Vc?s.mapping=wo:a===Gc&&(s.mapping=Ao),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Vc||a===Gc)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new Gy(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class UE extends S_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ao=4,fp=[.125,.215,.35,.446,.526,.582],sr=20,zu=new UE,dp=new Ke;let Bu=null,Hu=0,Vu=0,Gu=!1;const rr=(1+Math.sqrt(5))/2,jr=1/rr,hp=[new O(-rr,jr,0),new O(rr,jr,0),new O(-jr,0,rr),new O(jr,0,rr),new O(0,rr,-jr),new O(0,rr,jr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Vu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===wo||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:zs,format:Dn,colorSpace:qi,depthBuffer:!1},r=mp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IE(o)),this._blurMaterial=NE(o,e,n)}return r}_compileMaterial(e){const n=new Vn(this._lodPlanes[0],e);this._renderer.compile(n,zu)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(dp),f.toneMapping=Hi,f.autoClear=!1;const p=new __({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),x=new Vn(new Io,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(dp),y=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;Aa(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),y&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===wo||e.mapping===Ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Vn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Aa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=hp[(r-o-1)%hp.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Vn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*sr-1),y=o/x,m=isFinite(o)?1+Math.floor(f*y):sr;m>sr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const c=[];let _=0;for(let A=0;A<sr;++A){const D=A/y,w=Math.exp(-D*D/2);c.push(w),A===0?_+=w:A<m&&(_+=2*w)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=x,d.mipInt.value=g-i;const E=this._sizeLods[r],L=3*E*(r>g-ao?r-g+ao:0),C=4*(this._cubeSize-E);Aa(n,L,C,3*E,2*E),l.setRenderTarget(n),l.render(h,zu)}}function IE(t){const e=[],n=[],i=[];let r=t;const o=t-ao+1+fp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-ao?l=fp[s-t+ao-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,x=6,y=3,m=2,c=1,_=new Float32Array(y*x*p),g=new Float32Array(m*x*p),E=new Float32Array(c*x*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,D=C>2?0:-1,w=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(w,y*x*C),g.set(d,m*x*C);const M=[C,C,C,C,C,C];E.set(M,c*x*C)}const L=new Ar;L.setAttribute("position",new Xn(_,y)),L.setAttribute("uv",new Xn(g,m)),L.setAttribute("faceIndex",new Xn(E,c)),e.push(L),r>ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function mp(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NE(t,e,n){const i=new Float32Array(sr),r=new O(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function gp(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function _p(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Vc||l===Gc,f=l===wo||l===Ao;if(u||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new pp(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new pp(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function OE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ds("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kE(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const y=d.morphAttributes[x];for(let m=0,c=y.length;m<c;m++)e.remove(y[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const y=p[x];for(let m=0,c=y.length;m<c;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,x=h.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,E=_.length;g<E;g+=3){const L=_[g+0],C=_[g+1],A=_[g+2];d.push(L,C,C,A,A,L)}}else if(x!==void 0){const _=x.array;y=x.version;for(let g=0,E=_.length/3-1;g<E;g+=3){const L=g+0,C=g+1,A=g+2;d.push(L,C,C,A,A,L)}}else return;const m=new(f_(d)?x_:v_)(d,1);m.version=y;const c=o.get(h);c&&e.remove(c),o.set(h,m)}function f(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function zE(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(i,p,o,d*s),n.update(p,i,1)}function u(d,p,x){x!==0&&(t.drawElementsInstanced(i,p,o,d*s,x),n.update(p,i,x))}function f(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,x);let m=0;for(let c=0;c<x;c++)m+=p[c];n.update(m,i,1)}function h(d,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<d.length;c++)u(d[c]/s,p[c],y[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,y,0,x);let c=0;for(let _=0;_<x;_++)c+=p[_];for(let _=0;_<y.length;_++)n.update(c,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function BE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HE(t,e,n){const i=new WeakMap,r=new Rt;function o(s,a,l){const u=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let L=a.attributes.position.count*E,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*h),D=new h_(A,L,C,h);D.type=ri,D.needsUpdate=!0;const w=E*4;for(let b=0;b<h;b++){const W=c[b],V=_[b],$=g[b],K=L*C*4*b;for(let Y=0;Y<W.count;Y++){const q=Y*w;x===!0&&(r.fromBufferAttribute(W,Y),A[K+q+0]=r.x,A[K+q+1]=r.y,A[K+q+2]=r.z,A[K+q+3]=0),y===!0&&(r.fromBufferAttribute(V,Y),A[K+q+4]=r.x,A[K+q+5]=r.y,A[K+q+6]=r.z,A[K+q+7]=0),m===!0&&(r.fromBufferAttribute($,Y),A[K+q+8]=r.x,A[K+q+9]=r.y,A[K+q+10]=r.z,A[K+q+11]=$.itemSize===4?r.w:1)}}d={count:h,texture:D,size:new Ne(L,C)},i.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<u.length;m++)x+=u[m];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function VE(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class w_ extends en{constructor(e,n,i,r,o,s,a,l,u,f=go){if(f!==go&&f!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===go&&(i=yr),i===void 0&&f===Ro&&(i=Co),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const A_=new en,vp=new w_(1,1),C_=new h_,R_=new Cy,P_=new M_,xp=[],yp=[],Sp=new Float32Array(16),Mp=new Float32Array(9),Ep=new Float32Array(4);function No(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=xp[r];if(o===void 0&&(o=new Float32Array(r),xp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wl(t,e){let n=yp[e];n===void 0&&(n=new Int32Array(e),yp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;Ep.set(i),t.uniformMatrix2fv(this.addr,!1,Ep),wt(n,i)}}function qE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;Mp.set(i),t.uniformMatrix3fv(this.addr,!1,Mp),wt(n,i)}}function $E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Tt(n,i))return;Sp.set(i),t.uniformMatrix4fv(this.addr,!1,Sp),wt(n,i)}}function KE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function eT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function rT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(vp.compareFunction=c_,o=vp):o=A_,n.setTexture2D(e||o,r)}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||R_,r)}function sT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||P_,r)}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||C_,r)}function lT(t){switch(t){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return YE;case 35674:return jE;case 35675:return qE;case 35676:return $E;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return aT}}function uT(t,e){t.uniform1fv(this.addr,e)}function cT(t,e){const n=No(e,this.size,2);t.uniform2fv(this.addr,n)}function fT(t,e){const n=No(e,this.size,3);t.uniform3fv(this.addr,n)}function dT(t,e){const n=No(e,this.size,4);t.uniform4fv(this.addr,n)}function hT(t,e){const n=No(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pT(t,e){const n=No(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mT(t,e){const n=No(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gT(t,e){t.uniform1iv(this.addr,e)}function _T(t,e){t.uniform2iv(this.addr,e)}function vT(t,e){t.uniform3iv(this.addr,e)}function xT(t,e){t.uniform4iv(this.addr,e)}function yT(t,e){t.uniform1uiv(this.addr,e)}function ST(t,e){t.uniform2uiv(this.addr,e)}function MT(t,e){t.uniform3uiv(this.addr,e)}function ET(t,e){t.uniform4uiv(this.addr,e)}function TT(t,e,n){const i=this.cache,r=e.length,o=Wl(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||A_,o[s])}function wT(t,e,n){const i=this.cache,r=e.length,o=Wl(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||R_,o[s])}function AT(t,e,n){const i=this.cache,r=e.length,o=Wl(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||P_,o[s])}function CT(t,e,n){const i=this.cache,r=e.length,o=Wl(n,r);Tt(i,o)||(t.uniform1iv(this.addr,o),wt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||C_,o[s])}function RT(t){switch(t){case 5126:return uT;case 35664:return cT;case 35665:return fT;case 35666:return dT;case 35674:return hT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return vT;case 35669:case 35673:return xT;case 5125:return yT;case 36294:return ST;case 36295:return MT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return CT}}class PT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lT(n.type)}}class LT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RT(n.type)}}class bT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function Tp(t,e){t.seq.push(e),t.map[e.id]=e}function DT(t,e,n){const i=t.name,r=i.length;for(Wu.lastIndex=0;;){const o=Wu.exec(i),s=Wu.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Tp(n,u===void 0?new PT(a,t,e):new LT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new bT(a),Tp(n,h)),n=h}}}class ja{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);DT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function wp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UT=37297;let IT=0;function NT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function FT(t){const e=$e.getPrimaries($e.workingColorSpace),n=$e.getPrimaries(t);let i;switch(e===n?i="":e===Sl&&n===yl?i="LinearDisplayP3ToLinearSRGB":e===yl&&n===Sl&&(i="LinearSRGBToLinearDisplayP3"),t){case qi:case Hl:return[i,"LinearTransferOETF"];case kn:case Sd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ap(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+NT(t.getShaderSource(e),s)}else return r}function OT(t,e){const n=FT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kT(t,e){let n;switch(e){case kx:n="Linear";break;case zx:n="Reinhard";break;case Bx:n="OptimizedCineon";break;case Hx:n="ACESFilmic";break;case Gx:n="AgX";break;case Wx:n="Neutral";break;case Vx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ca=new O;function zT(){$e.getLuminanceCoefficients(Ca);const t=Ca.x.toFixed(4),e=Ca.y.toFixed(4),n=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function HT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function es(t){return t!==""}function Cp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GT=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(t){return t.replace(GT,XT)}const WT=new Map;function XT(t,e){let n=Fe[e];if(n===void 0){const i=WT.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xf(n)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(t){return t.replace(YT,jT)}function jT(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Lp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function qT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function $T(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case wo:case Ao:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function ZT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qg:e="ENVMAP_BLENDING_MULTIPLY";break;case Fx:e="ENVMAP_BLENDING_MIX";break;case Ox:e="ENVMAP_BLENDING_ADD";break}return e}function QT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JT(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=qT(n),u=$T(n),f=KT(n),h=ZT(n),d=QT(n),p=BT(n),x=HT(o),y=r.createProgram();let m,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(es).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(es).join(`
`),c.length>0&&(c+=`
`)):(m=[Lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),c=[Lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Hi?kT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,OT("linearToOutputTexel",n.outputColorSpace),zT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(es).join(`
`)),s=xf(s),s=Cp(s,n),s=Rp(s,n),a=xf(a),a=Cp(a,n),a=Rp(a,n),s=Pp(s),a=Pp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+m+s,E=_+c+a,L=wp(r,r.VERTEX_SHADER,g),C=wp(r,r.FRAGMENT_SHADER,E);r.attachShader(y,L),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(b){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(y).trim(),V=r.getShaderInfoLog(L).trim(),$=r.getShaderInfoLog(C).trim();let K=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,L,C);else{const q=Ap(r,L,"vertex"),U=Ap(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+W+`
`+q+`
`+U)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||$==="")&&(Y=!1);Y&&(b.diagnostics={runnable:K,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:c}})}r.deleteShader(L),r.deleteShader(C),D=new ja(r,y),w=VT(r,y)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,UT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=C,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new n1(e),n.set(e,i)),i}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(t,e,n,i,r,o,s){const a=new m_,l=new t1,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,M,b,W,V){const $=W.fog,K=V.geometry,Y=w.isMeshStandardMaterial?W.environment:null,q=(w.isMeshStandardMaterial?n:e).get(w.envMap||Y),U=q&&q.mapping===Bl?q.image.height:null,j=x[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,se=Z!==void 0?Z.length:0;let ye=0;K.morphAttributes.position!==void 0&&(ye=1),K.morphAttributes.normal!==void 0&&(ye=2),K.morphAttributes.color!==void 0&&(ye=3);let Be,X,ie,ue;if(j){const Ve=zn[j];Be=Ve.vertexShader,X=Ve.fragmentShader}else Be=w.vertexShader,X=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),ue=l.getFragmentShaderID(w);const ce=t.getRenderTarget(),De=V.isInstancedMesh===!0,Ie=V.isBatchedMesh===!0,ke=!!w.map,Je=!!w.matcap,P=!!q,lt=!!w.aoMap,We=!!w.lightMap,Xe=!!w.bumpMap,ve=!!w.normalMap,ut=!!w.displacementMap,Pe=!!w.emissiveMap,be=!!w.metalnessMap,R=!!w.roughnessMap,S=w.anisotropy>0,H=w.clearcoat>0,J=w.dispersion>0,te=w.iridescence>0,Q=w.sheen>0,Me=w.transmission>0,ae=S&&!!w.anisotropyMap,de=H&&!!w.clearcoatMap,Ue=H&&!!w.clearcoatNormalMap,re=H&&!!w.clearcoatRoughnessMap,he=te&&!!w.iridescenceMap,He=te&&!!w.iridescenceThicknessMap,Te=Q&&!!w.sheenColorMap,me=Q&&!!w.sheenRoughnessMap,Ae=!!w.specularMap,Le=!!w.specularColorMap,it=!!w.specularIntensityMap,v=Me&&!!w.transmissionMap,F=Me&&!!w.thicknessMap,k=!!w.gradientMap,G=!!w.alphaMap,ee=w.alphaTest>0,xe=!!w.alphaHash,Ce=!!w.extensions;let ht=Hi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ht=t.toneMapping);const xt={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:X,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:qi,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:Je,envMap:P,envMapMode:P&&q.mapping,envMapCubeUVHeight:U,aoMap:lt,lightMap:We,bumpMap:Xe,normalMap:ve,displacementMap:d&&ut,emissiveMap:Pe,normalMapObjectSpace:ve&&w.normalMapType===$x,normalMapTangentSpace:ve&&w.normalMapType===qx,metalnessMap:be,roughnessMap:R,anisotropy:S,anisotropyMap:ae,clearcoat:H,clearcoatMap:de,clearcoatNormalMap:Ue,clearcoatRoughnessMap:re,dispersion:J,iridescence:te,iridescenceMap:he,iridescenceThicknessMap:He,sheen:Q,sheenColorMap:Te,sheenRoughnessMap:me,specularMap:Ae,specularColorMap:Le,specularIntensityMap:it,transmission:Me,transmissionMap:v,thicknessMap:F,gradientMap:k,opaque:w.transparent===!1&&w.blending===mo&&w.alphaToCoverage===!1,alphaMap:G,alphaTest:ee,alphaHash:xe,combine:w.combine,mapUv:ke&&y(w.map.channel),aoMapUv:lt&&y(w.aoMap.channel),lightMapUv:We&&y(w.lightMap.channel),bumpMapUv:Xe&&y(w.bumpMap.channel),normalMapUv:ve&&y(w.normalMap.channel),displacementMapUv:ut&&y(w.displacementMap.channel),emissiveMapUv:Pe&&y(w.emissiveMap.channel),metalnessMapUv:be&&y(w.metalnessMap.channel),roughnessMapUv:R&&y(w.roughnessMap.channel),anisotropyMapUv:ae&&y(w.anisotropyMap.channel),clearcoatMapUv:de&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:He&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&y(w.sheenRoughnessMap.channel),specularMapUv:Ae&&y(w.specularMap.channel),specularColorMapUv:Le&&y(w.specularColorMap.channel),specularIntensityMapUv:it&&y(w.specularIntensityMap.channel),transmissionMapUv:v&&y(w.transmissionMap.channel),thicknessMapUv:F&&y(w.thicknessMap.channel),alphaMapUv:G&&y(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ve||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(ke||G),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ht,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&$e.getTransfer(w.map.colorSpace)===tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ti,flipSided:w.side===Jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&w.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xt.vertexUv1s=u.has(1),xt.vertexUv2s=u.has(2),xt.vertexUv3s=u.has(3),u.clear(),xt}function c(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const b in w.defines)M.push(b),M.push(w.defines[b]);return w.isRawShaderMaterial===!1&&(_(M,w),g(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function _(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function g(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){const M=x[w.type];let b;if(M){const W=zn[M];b=zy.clone(W.uniforms)}else b=w.uniforms;return b}function L(w,M){let b;for(let W=0,V=f.length;W<V;W++){const $=f[W];if($.cacheKey===M){b=$,++b.usedTimes;break}}return b===void 0&&(b=new JT(t,M,w,o),f.push(b)),b}function C(w){if(--w.usedTimes===0){const M=f.indexOf(w);f[M]=f[f.length-1],f.pop(),w.destroy()}}function A(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:f,dispose:D}}function r1(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function o1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dp(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,p,x,y,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:y,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=y,c.group=m),e++,c}function a(h,d,p,x,y,m){const c=s(h,d,p,x,y,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,d,p,x,y,m){const c=s(h,d,p,x,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||o1),i.length>1&&i.sort(d||bp),r.length>1&&r.sort(d||bp)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function s1(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Dp,t.set(i,[s])):r>=o.length?(s=new Dp,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function a1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Ke};break;case"SpotLight":n={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function l1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let u1=0;function c1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function f1(t){const e=new a1,n=l1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,o=new Et,s=new Et;function a(u){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,x=0,y=0,m=0,c=0,_=0,g=0,E=0,L=0,C=0,A=0;u.sort(c1);for(let w=0,M=u.length;w<M;w++){const b=u[w],W=b.color,V=b.intensity,$=b.distance,K=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)f+=W.r*V,h+=W.g*V,d+=W.b*V;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(b.sh.coefficients[Y],V);A++}else if(b.isDirectionalLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,U=n.get(b);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=b.shadow.matrix,_++}i.directional[p]=Y,p++}else if(b.isSpotLight){const Y=e.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(W).multiplyScalar(V),Y.distance=$,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,i.spot[y]=Y;const q=b.shadow;if(b.map&&(i.spotLightMap[L]=b.map,L++,q.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[y]=q.matrix,b.castShadow){const U=n.get(b);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=K,E++}y++}else if(b.isRectAreaLight){const Y=e.get(b);Y.color.copy(W).multiplyScalar(V),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=Y,m++}else if(b.isPointLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){const q=b.shadow,U=n.get(b);U.shadowIntensity=q.intensity,U.shadowBias=q.bias,U.shadowNormalBias=q.normalBias,U.shadowRadius=q.radius,U.shadowMapSize=q.mapSize,U.shadowCameraNear=q.camera.near,U.shadowCameraFar=q.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=K,i.pointShadowMatrix[x]=b.shadow.matrix,g++}i.point[x]=Y,x++}else if(b.isHemisphereLight){const Y=e.get(b);Y.skyColor.copy(b.color).multiplyScalar(V),Y.groundColor.copy(b.groundColor).multiplyScalar(V),i.hemi[c]=Y,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==y||D.rectAreaLength!==m||D.hemiLength!==c||D.numDirectionalShadows!==_||D.numPointShadows!==g||D.numSpotShadows!==E||D.numSpotMaps!==L||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=c,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=E+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,D.directionalLength=p,D.pointLength=x,D.spotLength=y,D.rectAreaLength=m,D.hemiLength=c,D.numDirectionalShadows=_,D.numPointShadows=g,D.numSpotShadows=E,D.numSpotMaps=L,D.numLightProbes=A,i.version=u1++)}function l(u,f){let h=0,d=0,p=0,x=0,y=0;const m=f.matrixWorldInverse;for(let c=0,_=u.length;c<_;c++){const g=u[c];if(g.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(g.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),s.identity(),o.copy(g.matrixWorld),o.premultiply(m),s.extractRotation(o),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),x++}else if(g.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Up(t){const e=new f1(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function d1(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Up(t),e.set(r,[a])):o>=s.length?(a=new Up(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class h1 extends Vl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p1 extends Vl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _1(t,e,n){let i=new E_;const r=new Ne,o=new Ne,s=new Rt,a=new h1({depthPacking:jx}),l=new p1,u={},f=n.maxTextureSize,h={[Wi]:Jt,[Jt]:Wi,[ti]:ti},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ar;x.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Vn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let c=this.type;this.render=function(C,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Bi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=c!==Qn&&this.type===Qn,$=c===Qn&&this.type!==Qn;for(let K=0,Y=C.length;K<Y;K++){const q=C[K],U=q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const j=U.getFrameExtents();if(r.multiply(j),o.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/j.x),r.x=o.x*j.x,U.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/j.y),r.y=o.y*j.y,U.mapSize.y=o.y)),U.map===null||V===!0||$===!0){const se=this.type!==Qn?{minFilter:xn,magFilter:xn}:{};U.map!==null&&U.map.dispose(),U.map=new Sr(r.x,r.y,se),U.map.texture.name=q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Z=U.getViewportCount();for(let se=0;se<Z;se++){const ye=U.getViewport(se);s.set(o.x*ye.x,o.y*ye.y,o.x*ye.z,o.y*ye.w),W.viewport(s),U.updateMatrices(q,se),i=U.getFrustum(),E(A,D,U.camera,q,this.type)}U.isPointLightShadow!==!0&&this.type===Qn&&_(U,D),U.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,b)};function _(C,A){const D=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Sr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,D,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,D,p,y,null)}function g(C,A,D,w){let M=null;const b=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)M=b;else if(M=D.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=M.uuid,V=A.uuid;let $=u[W];$===void 0&&($={},u[W]=$);let K=$[V];K===void 0&&(K=M.clone(),$[V]=K,A.addEventListener("dispose",L)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Qn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=D}return M}function E(C,A,D,w,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Qn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const V=e.update(C),$=C.material;if(Array.isArray($)){const K=V.groups;for(let Y=0,q=K.length;Y<q;Y++){const U=K[Y],j=$[U.materialIndex];if(j&&j.visible){const Z=g(C,j,w,M);C.onBeforeShadow(t,C,A,D,V,Z,U),t.renderBufferDirect(D,null,V,Z,C,U),C.onAfterShadow(t,C,A,D,V,Z,U)}}}else if($.visible){const K=g(C,$,w,M);C.onBeforeShadow(t,C,A,D,V,K,null),t.renderBufferDirect(D,null,V,K,C,null),C.onAfterShadow(t,C,A,D,V,K,null)}}const W=C.children;for(let V=0,$=W.length;V<$;V++)E(W[V],A,D,w,M)}function L(C){C.target.removeEventListener("dispose",L);for(const D in u){const w=u[D],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function v1(t){function e(){let v=!1;const F=new Rt;let k=null;const G=new Rt(0,0,0,0);return{setMask:function(ee){k!==ee&&!v&&(t.colorMask(ee,ee,ee,ee),k=ee)},setLocked:function(ee){v=ee},setClear:function(ee,xe,Ce,ht,xt){xt===!0&&(ee*=ht,xe*=ht,Ce*=ht),F.set(ee,xe,Ce,ht),G.equals(F)===!1&&(t.clearColor(ee,xe,Ce,ht),G.copy(F))},reset:function(){v=!1,k=null,G.set(-1,0,0,0)}}}function n(){let v=!1,F=null,k=null,G=null;return{setTest:function(ee){ee?ue(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ee){F!==ee&&!v&&(t.depthMask(ee),F=ee)},setFunc:function(ee){if(k!==ee){switch(ee){case Px:t.depthFunc(t.NEVER);break;case Lx:t.depthFunc(t.ALWAYS);break;case bx:t.depthFunc(t.LESS);break;case vl:t.depthFunc(t.LEQUAL);break;case Dx:t.depthFunc(t.EQUAL);break;case Ux:t.depthFunc(t.GEQUAL);break;case Ix:t.depthFunc(t.GREATER);break;case Nx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}k=ee}},setLocked:function(ee){v=ee},setClear:function(ee){G!==ee&&(t.clearDepth(ee),G=ee)},reset:function(){v=!1,F=null,k=null,G=null}}}function i(){let v=!1,F=null,k=null,G=null,ee=null,xe=null,Ce=null,ht=null,xt=null;return{setTest:function(Ve){v||(Ve?ue(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ve){F!==Ve&&!v&&(t.stencilMask(Ve),F=Ve)},setFunc:function(Ve,yt,mt){(k!==Ve||G!==yt||ee!==mt)&&(t.stencilFunc(Ve,yt,mt),k=Ve,G=yt,ee=mt)},setOp:function(Ve,yt,mt){(xe!==Ve||Ce!==yt||ht!==mt)&&(t.stencilOp(Ve,yt,mt),xe=Ve,Ce=yt,ht=mt)},setLocked:function(Ve){v=Ve},setClear:function(Ve){xt!==Ve&&(t.clearStencil(Ve),xt=Ve)},reset:function(){v=!1,F=null,k=null,G=null,ee=null,xe=null,Ce=null,ht=null,xt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,x=!1,y=null,m=null,c=null,_=null,g=null,E=null,L=null,C=new Ke(0,0,0),A=0,D=!1,w=null,M=null,b=null,W=null,V=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),K=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),K=Y>=2);let U=null,j={};const Z=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),ye=new Rt().fromArray(Z),Be=new Rt().fromArray(se);function X(v,F,k,G){const ee=new Uint8Array(4),xe=t.createTexture();t.bindTexture(v,xe),t.texParameteri(v,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(v,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<k;Ce++)v===t.TEXTURE_3D||v===t.TEXTURE_2D_ARRAY?t.texImage3D(F,0,t.RGBA,1,1,G,0,t.RGBA,t.UNSIGNED_BYTE,ee):t.texImage2D(F+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ee);return xe}const ie={};ie[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(t.DEPTH_TEST),o.setFunc(vl),Xe(!1),ve(kh),ue(t.CULL_FACE),lt(Bi);function ue(v){u[v]!==!0&&(t.enable(v),u[v]=!0)}function ce(v){u[v]!==!1&&(t.disable(v),u[v]=!1)}function De(v,F){return f[v]!==F?(t.bindFramebuffer(v,F),f[v]=F,v===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=F),v===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=F),!0):!1}function Ie(v,F){let k=d,G=!1;if(v){k=h.get(F),k===void 0&&(k=[],h.set(F,k));const ee=v.textures;if(k.length!==ee.length||k[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Ce=ee.length;xe<Ce;xe++)k[xe]=t.COLOR_ATTACHMENT0+xe;k.length=ee.length,G=!0}}else k[0]!==t.BACK&&(k[0]=t.BACK,G=!0);G&&t.drawBuffers(k)}function ke(v){return p!==v?(t.useProgram(v),p=v,!0):!1}const Je={[or]:t.FUNC_ADD,[dx]:t.FUNC_SUBTRACT,[hx]:t.FUNC_REVERSE_SUBTRACT};Je[px]=t.MIN,Je[mx]=t.MAX;const P={[gx]:t.ZERO,[_x]:t.ONE,[vx]:t.SRC_COLOR,[Bc]:t.SRC_ALPHA,[Tx]:t.SRC_ALPHA_SATURATE,[Mx]:t.DST_COLOR,[yx]:t.DST_ALPHA,[xx]:t.ONE_MINUS_SRC_COLOR,[Hc]:t.ONE_MINUS_SRC_ALPHA,[Ex]:t.ONE_MINUS_DST_COLOR,[Sx]:t.ONE_MINUS_DST_ALPHA,[wx]:t.CONSTANT_COLOR,[Ax]:t.ONE_MINUS_CONSTANT_COLOR,[Cx]:t.CONSTANT_ALPHA,[Rx]:t.ONE_MINUS_CONSTANT_ALPHA};function lt(v,F,k,G,ee,xe,Ce,ht,xt,Ve){if(v===Bi){x===!0&&(ce(t.BLEND),x=!1);return}if(x===!1&&(ue(t.BLEND),x=!0),v!==fx){if(v!==y||Ve!==D){if((m!==or||g!==or)&&(t.blendEquation(t.FUNC_ADD),m=or,g=or),Ve)switch(v){case mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zh:t.blendFunc(t.ONE,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}c=null,_=null,E=null,L=null,C.set(0,0,0),A=0,y=v,D=Ve}return}ee=ee||F,xe=xe||k,Ce=Ce||G,(F!==m||ee!==g)&&(t.blendEquationSeparate(Je[F],Je[ee]),m=F,g=ee),(k!==c||G!==_||xe!==E||Ce!==L)&&(t.blendFuncSeparate(P[k],P[G],P[xe],P[Ce]),c=k,_=G,E=xe,L=Ce),(ht.equals(C)===!1||xt!==A)&&(t.blendColor(ht.r,ht.g,ht.b,xt),C.copy(ht),A=xt),y=v,D=!1}function We(v,F){v.side===ti?ce(t.CULL_FACE):ue(t.CULL_FACE);let k=v.side===Jt;F&&(k=!k),Xe(k),v.blending===mo&&v.transparent===!1?lt(Bi):lt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),o.setFunc(v.depthFunc),o.setTest(v.depthTest),o.setMask(v.depthWrite),r.setMask(v.colorWrite);const G=v.stencilWrite;s.setTest(G),G&&(s.setMask(v.stencilWriteMask),s.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),s.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Pe(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(v){w!==v&&(v?t.frontFace(t.CW):t.frontFace(t.CCW),w=v)}function ve(v){v!==lx?(ue(t.CULL_FACE),v!==M&&(v===kh?t.cullFace(t.BACK):v===ux?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),M=v}function ut(v){v!==b&&(K&&t.lineWidth(v),b=v)}function Pe(v,F,k){v?(ue(t.POLYGON_OFFSET_FILL),(W!==F||V!==k)&&(t.polygonOffset(F,k),W=F,V=k)):ce(t.POLYGON_OFFSET_FILL)}function be(v){v?ue(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(v){v===void 0&&(v=t.TEXTURE0+$-1),U!==v&&(t.activeTexture(v),U=v)}function S(v,F,k){k===void 0&&(U===null?k=t.TEXTURE0+$-1:k=U);let G=j[k];G===void 0&&(G={type:void 0,texture:void 0},j[k]=G),(G.type!==v||G.texture!==F)&&(U!==k&&(t.activeTexture(k),U=k),t.bindTexture(v,F||ie[v]),G.type=v,G.texture=F)}function H(){const v=j[U];v!==void 0&&v.type!==void 0&&(t.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Te(v){ye.equals(v)===!1&&(t.scissor(v.x,v.y,v.z,v.w),ye.copy(v))}function me(v){Be.equals(v)===!1&&(t.viewport(v.x,v.y,v.z,v.w),Be.copy(v))}function Ae(v,F){let k=l.get(F);k===void 0&&(k=new WeakMap,l.set(F,k));let G=k.get(v);G===void 0&&(G=t.getUniformBlockIndex(F,v.name),k.set(v,G))}function Le(v,F){const G=l.get(F).get(v);a.get(F)!==G&&(t.uniformBlockBinding(F,G,v.__bindingPointIndex),a.set(F,G))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},U=null,j={},f={},h=new WeakMap,d=[],p=null,x=!1,y=null,m=null,c=null,_=null,g=null,E=null,L=null,C=new Ke(0,0,0),A=0,D=!1,w=null,M=null,b=null,W=null,V=null,ye.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:ue,disable:ce,bindFramebuffer:De,drawBuffers:Ie,useProgram:ke,setBlending:lt,setMaterial:We,setFlipSided:Xe,setCullFace:ve,setLineWidth:ut,setPolygonOffset:Pe,setScissorTest:be,activeTexture:R,bindTexture:S,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:he,texImage3D:He,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:Ue,texStorage3D:re,texSubImage2D:Q,texSubImage3D:Me,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Te,viewport:me,reset:it}}function Ip(t,e,n,i){const r=x1(i);switch(n){case i_:return t*e;case o_:return t*e;case s_:return t*e*2;case a_:return t*e/r.components*r.byteLength;case vd:return t*e/r.components*r.byteLength;case l_:return t*e*2/r.components*r.byteLength;case xd:return t*e*2/r.components*r.byteLength;case r_:return t*e*3/r.components*r.byteLength;case Dn:return t*e*4/r.components*r.byteLength;case yd:return t*e*4/r.components*r.byteLength;case Va:case Ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jc:case $c:return Math.max(t,16)*Math.max(e,8)/4;case Yc:case qc:return Math.max(t,8)*Math.max(e,8)/2;case Kc:case Zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case df:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ya:case pf:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case u_:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _f:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function x1(t){switch(t){case fi:case e_:return{byteLength:1,components:1};case Ds:case t_:case zs:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case yr:case md:case ri:return{byteLength:4,components:1};case n_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function y1(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ne,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return p?new OffscreenCanvas(R,S):El("canvas")}function y(R,S,H){let J=1;const te=be(R);if((te.width>H||te.height>H)&&(J=H/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*te.width),Me=Math.floor(J*te.height);h===void 0&&(h=x(Q,Me));const ae=S?x(Q,Me):h;return ae.width=Q,ae.height=Me,ae.getContext("2d").drawImage(R,0,0,Q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+Me+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==xn&&R.minFilter!==bn}function c(R){t.generateMipmap(R)}function _(R,S,H,J,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===t.RED&&(H===t.FLOAT&&(Q=t.R32F),H===t.HALF_FLOAT&&(Q=t.R16F),H===t.UNSIGNED_BYTE&&(Q=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.R8UI),H===t.UNSIGNED_SHORT&&(Q=t.R16UI),H===t.UNSIGNED_INT&&(Q=t.R32UI),H===t.BYTE&&(Q=t.R8I),H===t.SHORT&&(Q=t.R16I),H===t.INT&&(Q=t.R32I)),S===t.RG&&(H===t.FLOAT&&(Q=t.RG32F),H===t.HALF_FLOAT&&(Q=t.RG16F),H===t.UNSIGNED_BYTE&&(Q=t.RG8)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RG8UI),H===t.UNSIGNED_SHORT&&(Q=t.RG16UI),H===t.UNSIGNED_INT&&(Q=t.RG32UI),H===t.BYTE&&(Q=t.RG8I),H===t.SHORT&&(Q=t.RG16I),H===t.INT&&(Q=t.RG32I)),S===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),S===t.RGBA){const Me=te?xl:$e.getTransfer(J);H===t.FLOAT&&(Q=t.RGBA32F),H===t.HALF_FLOAT&&(Q=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Q=Me===tt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(R,S){let H;return R?S===null||S===yr||S===Co?H=t.DEPTH24_STENCIL8:S===ri?H=t.DEPTH32F_STENCIL8:S===Ds&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===yr||S===Co?H=t.DEPTH_COMPONENT24:S===ri?H=t.DEPTH_COMPONENT32F:S===Ds&&(H=t.DEPTH_COMPONENT16),H}function E(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){const S=R.target;S.removeEventListener("dispose",L),A(S),S.isVideoTexture&&f.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),w(S)}function A(R){const S=i.get(R);if(S.__webglInit===void 0)return;const H=R.source,J=d.get(H);if(J){const te=J[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&D(R),Object.keys(J).length===0&&d.delete(H)}i.remove(R)}function D(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const H=R.source,J=d.get(H);delete J[S.__cacheKey],s.memory.textures--}function w(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let te=0;te<S.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[J][te]);else t.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)t.deleteFramebuffer(S.__webglFramebuffer[J]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let J=0,te=H.length;J<te;J++){const Q=i.get(H[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(H[J])}i.remove(R)}let M=0;function b(){M=0}function W(){const R=M;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),M+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function $(R,S){const H=i.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(H,R,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function K(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Be(H,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function Y(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Be(H,R,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function q(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){X(H,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const U={[Wc]:t.REPEAT,[cr]:t.CLAMP_TO_EDGE,[Xc]:t.MIRRORED_REPEAT},j={[xn]:t.NEAREST,[Xx]:t.NEAREST_MIPMAP_NEAREST,[sa]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[yu]:t.LINEAR_MIPMAP_NEAREST,[fr]:t.LINEAR_MIPMAP_LINEAR},Z={[Kx]:t.NEVER,[ny]:t.ALWAYS,[Zx]:t.LESS,[c_]:t.LEQUAL,[Qx]:t.EQUAL,[ty]:t.GEQUAL,[Jx]:t.GREATER,[ey]:t.NOTEQUAL};function se(R,S){if(S.type===ri&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===yu||S.magFilter===sa||S.magFilter===fr||S.minFilter===bn||S.minFilter===yu||S.minFilter===sa||S.minFilter===fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,U[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,U[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,U[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==sa&&S.minFilter!==fr||S.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ye(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));const J=S.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const Q=V(S);if(Q!==R.__cacheKey){te[Q]===void 0&&(te[Q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),te[Q].usedTimes++;const Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&D(S)),R.__cacheKey=Q,R.__webglTexture=te[Q].texture}return H}function Be(R,S,H){let J=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=t.TEXTURE_3D);const te=ye(R,S),Q=S.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+H);const Me=i.get(Q);if(Q.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const ae=$e.getPrimaries($e.workingColorSpace),de=S.colorSpace===Pi?null:$e.getPrimaries(S.colorSpace),Ue=S.colorSpace===Pi||ae===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=y(S.image,!1,r.maxTextureSize);re=Pe(S,re);const he=o.convert(S.format,S.colorSpace),He=o.convert(S.type);let Te=_(S.internalFormat,he,He,S.colorSpace,S.isVideoTexture);se(J,S);let me;const Ae=S.mipmaps,Le=S.isVideoTexture!==!0,it=Me.__version===void 0||te===!0,v=Q.dataReady,F=E(S,re);if(S.isDepthTexture)Te=g(S.format===Ro,S.type),it&&(Le?n.texStorage2D(t.TEXTURE_2D,1,Te,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Te,re.width,re.height,0,he,He,null));else if(S.isDataTexture)if(Ae.length>0){Le&&it&&n.texStorage2D(t.TEXTURE_2D,F,Te,Ae[0].width,Ae[0].height);for(let k=0,G=Ae.length;k<G;k++)me=Ae[k],Le?v&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,me.width,me.height,he,He,me.data):n.texImage2D(t.TEXTURE_2D,k,Te,me.width,me.height,0,he,He,me.data);S.generateMipmaps=!1}else Le?(it&&n.texStorage2D(t.TEXTURE_2D,F,Te,re.width,re.height),v&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,he,He,re.data)):n.texImage2D(t.TEXTURE_2D,0,Te,re.width,re.height,0,he,He,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,Te,Ae[0].width,Ae[0].height,re.depth);for(let k=0,G=Ae.length;k<G;k++)if(me=Ae[k],S.format!==Dn)if(he!==null)if(Le){if(v)if(S.layerUpdates.size>0){const ee=Ip(me.width,me.height,S.format,S.type);for(const xe of S.layerUpdates){const Ce=me.data.subarray(xe*ee/me.data.BYTES_PER_ELEMENT,(xe+1)*ee/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,xe,me.width,me.height,1,he,Ce,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,re.depth,he,me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,k,Te,me.width,me.height,re.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?v&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,re.depth,he,He,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,k,Te,me.width,me.height,re.depth,0,he,He,me.data)}else{Le&&it&&n.texStorage2D(t.TEXTURE_2D,F,Te,Ae[0].width,Ae[0].height);for(let k=0,G=Ae.length;k<G;k++)me=Ae[k],S.format!==Dn?he!==null?Le?v&&n.compressedTexSubImage2D(t.TEXTURE_2D,k,0,0,me.width,me.height,he,me.data):n.compressedTexImage2D(t.TEXTURE_2D,k,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?v&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,me.width,me.height,he,He,me.data):n.texImage2D(t.TEXTURE_2D,k,Te,me.width,me.height,0,he,He,me.data)}else if(S.isDataArrayTexture)if(Le){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,F,Te,re.width,re.height,re.depth),v)if(S.layerUpdates.size>0){const k=Ip(re.width,re.height,S.format,S.type);for(const G of S.layerUpdates){const ee=re.data.subarray(G*k/re.data.BYTES_PER_ELEMENT,(G+1)*k/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,G,re.width,re.height,1,he,He,ee)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,He,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,re.width,re.height,re.depth,0,he,He,re.data);else if(S.isData3DTexture)Le?(it&&n.texStorage3D(t.TEXTURE_3D,F,Te,re.width,re.height,re.depth),v&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,He,re.data)):n.texImage3D(t.TEXTURE_3D,0,Te,re.width,re.height,re.depth,0,he,He,re.data);else if(S.isFramebufferTexture){if(it)if(Le)n.texStorage2D(t.TEXTURE_2D,F,Te,re.width,re.height);else{let k=re.width,G=re.height;for(let ee=0;ee<F;ee++)n.texImage2D(t.TEXTURE_2D,ee,Te,k,G,0,he,He,null),k>>=1,G>>=1}}else if(Ae.length>0){if(Le&&it){const k=be(Ae[0]);n.texStorage2D(t.TEXTURE_2D,F,Te,k.width,k.height)}for(let k=0,G=Ae.length;k<G;k++)me=Ae[k],Le?v&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,he,He,me):n.texImage2D(t.TEXTURE_2D,k,Te,he,He,me);S.generateMipmaps=!1}else if(Le){if(it){const k=be(re);n.texStorage2D(t.TEXTURE_2D,F,Te,k.width,k.height)}v&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,He,re)}else n.texImage2D(t.TEXTURE_2D,0,Te,he,He,re);m(S)&&c(J),Me.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function X(R,S,H){if(S.image.length!==6)return;const J=ye(R,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const Q=i.get(te);if(te.version!==Q.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const Me=$e.getPrimaries($e.workingColorSpace),ae=S.colorSpace===Pi?null:$e.getPrimaries(S.colorSpace),de=S.colorSpace===Pi||Me===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,he=[];for(let G=0;G<6;G++)!Ue&&!re?he[G]=y(S.image[G],!0,r.maxCubemapSize):he[G]=re?S.image[G].image:S.image[G],he[G]=Pe(S,he[G]);const He=he[0],Te=o.convert(S.format,S.colorSpace),me=o.convert(S.type),Ae=_(S.internalFormat,Te,me,S.colorSpace),Le=S.isVideoTexture!==!0,it=Q.__version===void 0||J===!0,v=te.dataReady;let F=E(S,He);se(t.TEXTURE_CUBE_MAP,S);let k;if(Ue){Le&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ae,He.width,He.height);for(let G=0;G<6;G++){k=he[G].mipmaps;for(let ee=0;ee<k.length;ee++){const xe=k[ee];S.format!==Dn?Te!==null?Le?v&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee,0,0,xe.width,xe.height,Te,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee,Ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?v&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee,0,0,xe.width,xe.height,Te,me,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee,Ae,xe.width,xe.height,0,Te,me,xe.data)}}}else{if(k=S.mipmaps,Le&&it){k.length>0&&F++;const G=be(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ae,G.width,G.height)}for(let G=0;G<6;G++)if(re){Le?v&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,he[G].width,he[G].height,Te,me,he[G].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ae,he[G].width,he[G].height,0,Te,me,he[G].data);for(let ee=0;ee<k.length;ee++){const Ce=k[ee].image[G].image;Le?v&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee+1,0,0,Ce.width,Ce.height,Te,me,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee+1,Ae,Ce.width,Ce.height,0,Te,me,Ce.data)}}else{Le?v&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Te,me,he[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,Ae,Te,me,he[G]);for(let ee=0;ee<k.length;ee++){const xe=k[ee];Le?v&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee+1,0,0,Te,me,xe.image[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,ee+1,Ae,Te,me,xe.image[G])}}}m(S)&&c(t.TEXTURE_CUBE_MAP),Q.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ie(R,S,H,J,te,Q){const Me=o.convert(H.format,H.colorSpace),ae=o.convert(H.type),de=_(H.internalFormat,Me,ae,H.colorSpace);if(!i.get(S).__hasExternalTextures){const re=Math.max(1,S.width>>Q),he=Math.max(1,S.height>>Q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Q,de,re,he,S.depth,0,Me,ae,null):n.texImage2D(te,Q,de,re,he,0,Me,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ve(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,te,i.get(H).__webglTexture,0,Xe(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,te,i.get(H).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const J=S.depthTexture,te=J&&J.isDepthTexture?J.type:null,Q=g(S.stencilBuffer,te),Me=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Xe(S);ve(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,Q,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,Q,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Q,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const J=S.textures;for(let te=0;te<J.length;te++){const Q=J[te],Me=o.convert(Q.format,Q.colorSpace),ae=o.convert(Q.type),de=_(Q.internalFormat,Me,ae,Q.colorSpace),Ue=Xe(S);H&&ve(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,de,S.width,S.height):ve(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,de,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,de,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const J=i.get(S.depthTexture).__webglTexture,te=Xe(S);if(S.depthTexture.format===go)ve(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(S.depthTexture.format===Ro)ve(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function De(R){const S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=t.createRenderbuffer(),ue(S.__webglDepthbuffer[J],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),ue(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(R,S,H){const J=i.get(R);S!==void 0&&ie(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&De(R)}function ke(R){const S=R.texture,H=i.get(R),J=i.get(S);R.addEventListener("dispose",C);const te=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=S.version,s.memory.textures++),Q){H.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ae]=[];for(let de=0;de<S.mipmaps.length;de++)H.__webglFramebuffer[ae][de]=t.createFramebuffer()}else H.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)H.__webglFramebuffer[ae]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ae=0,de=te.length;ae<de;ae++){const Ue=i.get(te[ae]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&ve(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ae=0;ae<te.length;ae++){const de=te[ae];H.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[ae]);const Ue=o.convert(de.format,de.colorSpace),re=o.convert(de.type),he=_(de.internalFormat,Ue,re,de.colorSpace,R.isXRRenderTarget===!0),He=Xe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,H.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),se(t.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ie(H.__webglFramebuffer[ae][de],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else ie(H.__webglFramebuffer[ae],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ae=0,de=te.length;ae<de;ae++){const Ue=te[ae],re=i.get(Ue);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),se(t.TEXTURE_2D,Ue),ie(H.__webglFramebuffer,R,Ue,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),m(Ue)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,J.__webglTexture),se(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ie(H.__webglFramebuffer[de],R,S,t.COLOR_ATTACHMENT0,ae,de);else ie(H.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ae,0);m(S)&&c(ae),n.unbindTexture()}R.depthBuffer&&De(R)}function Je(R){const S=R.textures;for(let H=0,J=S.length;H<J;H++){const te=S[H];if(m(te)){const Q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(te).__webglTexture;n.bindTexture(Q,Me),c(Q),n.unbindTexture()}}}const P=[],lt=[];function We(R){if(R.samples>0){if(ve(R)===!1){const S=R.textures,H=R.width,J=R.height;let te=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),ae=S.length>1;if(ae)for(let de=0;de<S.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<S.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const Ue=i.get(S[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,H,J,0,0,H,J,te,t.NEAREST),l===!0&&(P.length=0,lt.length=0,P.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(P.push(Q),lt.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,lt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<S.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const Ue=i.get(S[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Xe(R){return Math.min(r.maxSamples,R.samples)}function ve(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(R){const S=s.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function Pe(R,S){const H=R.colorSpace,J=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==qi&&H!==Pi&&($e.getTransfer(H)===tt?(J!==Dn||te!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=b,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Ie,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ve}function S1(t,e){function n(i,r=Pi){let o;const s=$e.getTransfer(r);if(i===fi)return t.UNSIGNED_BYTE;if(i===gd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_d)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===e_)return t.BYTE;if(i===t_)return t.SHORT;if(i===Ds)return t.UNSIGNED_SHORT;if(i===md)return t.INT;if(i===yr)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===zs)return t.HALF_FLOAT;if(i===i_)return t.ALPHA;if(i===r_)return t.RGB;if(i===Dn)return t.RGBA;if(i===o_)return t.LUMINANCE;if(i===s_)return t.LUMINANCE_ALPHA;if(i===go)return t.DEPTH_COMPONENT;if(i===Ro)return t.DEPTH_STENCIL;if(i===a_)return t.RED;if(i===vd)return t.RED_INTEGER;if(i===l_)return t.RG;if(i===xd)return t.RG_INTEGER;if(i===yd)return t.RGBA_INTEGER;if(i===Va||i===Ga||i===Wa||i===Xa)if(s===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Va)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Va)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yc||i===jc||i===qc||i===$c)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Yc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$c)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===Zc||i===Qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Kc||i===Zc)return s===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Qc)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jc||i===ef||i===tf||i===nf||i===rf||i===of||i===sf||i===af||i===lf||i===uf||i===cf||i===ff||i===df||i===hf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Jc)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ef)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tf)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nf)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rf)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===of)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sf)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===af)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lf)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uf)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cf)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ff)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===df)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return s===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ya||i===pf||i===mf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ya)return s===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===u_||i===gf||i===_f||i===vf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ya)return o.COMPRESSED_RED_RGTC1_EXT;if(i===gf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_f)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Co?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class M1 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ra extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E1={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,x=.005;u.inputState.pinching&&d>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ra;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const T1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class A1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new en,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:T1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vn(new Gl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C1 extends wr{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,x=null;const y=new A1,m=n.getContextAttributes();let c=null,_=null;const g=[],E=[],L=new Ne;let C=null;const A=new _n;A.layers.enable(1),A.viewport=new Rt;const D=new _n;D.layers.enable(2),D.viewport=new Rt;const w=[A,D],M=new M1;M.layers.enable(1),M.layers.enable(2);let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=g[X];return ie===void 0&&(ie=new Xu,g[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=g[X];return ie===void 0&&(ie=new Xu,g[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=g[X];return ie===void 0&&(ie=new Xu,g[X]=ie),ie.getHandSpace()};function V(X){const ie=E.indexOf(X.inputSource);if(ie===-1)return;const ue=g[ie];ue!==void 0&&(ue.update(X.inputSource,X.frame,u||s),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",K);for(let X=0;X<g.length;X++){const ie=E[X];ie!==null&&(E[X]=null,g[X].disconnect(ie))}b=null,W=null,y.reset(),e.setRenderTarget(c),p=null,d=null,h=null,r=null,_=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Sr(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ue=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Ro:go,ue=m.stencil?Co:yr);const De={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Sr(d.textureWidth,d.textureHeight,{format:Dn,type:fi,depthTexture:new w_(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(X){for(let ie=0;ie<X.removed.length;ie++){const ue=X.removed[ie],ce=E.indexOf(ue);ce>=0&&(E[ce]=null,g[ce].disconnect(ue))}for(let ie=0;ie<X.added.length;ie++){const ue=X.added[ie];let ce=E.indexOf(ue);if(ce===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=E.length){E.push(ue),ce=Ie;break}else if(E[Ie]===null){E[Ie]=ue,ce=Ie;break}if(ce===-1)break}const De=g[ce];De&&De.connect(ue)}}const Y=new O,q=new O;function U(X,ie,ue){Y.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const ce=Y.distanceTo(q),De=ie.projectionMatrix.elements,Ie=ue.projectionMatrix.elements,ke=De[14]/(De[10]-1),Je=De[14]/(De[10]+1),P=(De[9]+1)/De[5],lt=(De[9]-1)/De[5],We=(De[8]-1)/De[0],Xe=(Ie[8]+1)/Ie[0],ve=ke*We,ut=ke*Xe,Pe=ce/(-We+Xe),be=Pe*-We;ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(Pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=ke+Pe,S=Je+Pe,H=ve-be,J=ut+(ce-be),te=P*Je/S*R,Q=lt*Je/S*R;X.projectionMatrix.makePerspective(H,J,te,Q,R,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function j(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;y.texture!==null&&(X.near=y.depthNear,X.far=y.depthFar),M.near=D.near=A.near=X.near,M.far=D.far=A.far=X.far,(b!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,W=M.far,A.near=b,A.far=W,D.near=b,D.far=W,A.updateProjectionMatrix(),D.updateProjectionMatrix(),X.updateProjectionMatrix());const ie=X.parent,ue=M.cameras;j(M,ie);for(let ce=0;ce<ue.length;ce++)j(ue[ce],ie);ue.length===2?U(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),Z(X,M,ie)};function Z(X,ie,ue){ue===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Us*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let se=null;function ye(X,ie){if(f=ie.getViewerPose(u||s),x=ie,f!==null){const ue=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ce=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Ie=0;Ie<ue.length;Ie++){const ke=ue[Ie];let Je=null;if(p!==null)Je=p.getViewport(ke);else{const lt=h.getViewSubImage(d,ke);Je=lt.viewport,Ie===0&&(e.setRenderTargetTextures(_,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(_))}let P=w[Ie];P===void 0&&(P=new _n,P.layers.enable(Ie),P.viewport=new Rt,w[Ie]=P),P.matrix.fromArray(ke.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ke.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Je.x,Je.y,Je.width,Je.height),Ie===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(P)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ie=h.getDepthInformation(ue[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let ue=0;ue<g.length;ue++){const ce=E[ue],De=g[ue];ce!==null&&De!==void 0&&De.update(ce,ie,u||s)}se&&se(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const Be=new T_;Be.setAnimationLoop(ye),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const tr=new di,R1=new Et;function P1(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,y_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,_,g,E){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(m,c):c.isMeshToonMaterial?(o(m,c),h(m,c)):c.isMeshPhongMaterial?(o(m,c),f(m,c)):c.isMeshStandardMaterial?(o(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,E)):c.isMeshMatcapMaterial?(o(m,c),x(m,c)):c.isMeshDepthMaterial?o(m,c):c.isMeshDistanceMaterial?(o(m,c),y(m,c)):c.isMeshNormalMaterial?o(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,_,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===Jt&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===Jt&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const _=e.get(c),g=_.envMap,E=_.envMapRotation;g&&(m.envMap.value=g,tr.copy(E),tr.x*=-1,tr.y*=-1,tr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler(tr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,_,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*_,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,_){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Jt&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const _=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function L1(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const E=g.program;i.uniformBlockBinding(_,E)}function u(_,g){let E=r[_.id];E===void 0&&(x(_),E=f(_),r[_.id]=E,_.addEventListener("dispose",m));const L=g.program;i.updateUBOMapping(_,L);const C=e.render.frame;o[_.id]!==C&&(d(_),o[_.id]=C)}function f(_){const g=h();_.__bindingPointIndex=g;const E=t.createBuffer(),L=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function h(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],E=_.uniforms,L=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,A=E.length;C<A;C++){const D=Array.isArray(E[C])?E[C]:[E[C]];for(let w=0,M=D.length;w<M;w++){const b=D[w];if(p(b,C,w,L)===!0){const W=b.__offset,V=Array.isArray(b.value)?b.value:[b.value];let $=0;for(let K=0;K<V.length;K++){const Y=V[K],q=y(Y);typeof Y=="number"||typeof Y=="boolean"?(b.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,W+$,b.__data)):Y.isMatrix3?(b.__data[0]=Y.elements[0],b.__data[1]=Y.elements[1],b.__data[2]=Y.elements[2],b.__data[3]=0,b.__data[4]=Y.elements[3],b.__data[5]=Y.elements[4],b.__data[6]=Y.elements[5],b.__data[7]=0,b.__data[8]=Y.elements[6],b.__data[9]=Y.elements[7],b.__data[10]=Y.elements[8],b.__data[11]=0):(Y.toArray(b.__data,$),$+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,E,L){const C=_.value,A=g+"_"+E;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const D=L[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return L[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function x(_){const g=_.uniforms;let E=0;const L=16;for(let A=0,D=g.length;A<D;A++){const w=Array.isArray(g[A])?g[A]:[g[A]];for(let M=0,b=w.length;M<b;M++){const W=w[M],V=Array.isArray(W.value)?W.value:[W.value];for(let $=0,K=V.length;$<K;$++){const Y=V[$],q=y(Y),U=E%L,j=U%q.boundary,Z=U+j;E+=j,Z!==0&&L-Z<q.storage&&(E+=L-Z),W.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=q.storage}}}const C=E%L;return C>0&&(E+=L-C),_.__size=E,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const E=s.indexOf(g.__bindingPointIndex);s.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class b1{constructor(e={}){const{canvas:n=yy(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=Hi,this.toneMappingExposure=1;const g=this;let E=!1,L=0,C=0,A=null,D=-1,w=null;const M=new Rt,b=new Rt;let W=null;const V=new Ke(0);let $=0,K=n.width,Y=n.height,q=1,U=null,j=null;const Z=new Rt(0,0,K,Y),se=new Rt(0,0,K,Y);let ye=!1;const Be=new E_;let X=!1,ie=!1;const ue=new Et,ce=new O,De=new Rt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Je(){return A===null?q:1}let P=i;function lt(T,I){return n.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pd}`),n.addEventListener("webglcontextlost",k,!1),n.addEventListener("webglcontextrestored",G,!1),n.addEventListener("webglcontextcreationerror",ee,!1),P===null){const I="webgl2";if(P=lt(I,T),P===null)throw lt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let We,Xe,ve,ut,Pe,be,R,S,H,J,te,Q,Me,ae,de,Ue,re,he,He,Te,me,Ae,Le,it;function v(){We=new OE(P),We.init(),Ae=new S1(P,We),Xe=new LE(P,We,e,Ae),ve=new v1(P),ut=new BE(P),Pe=new r1,be=new y1(P,We,ve,Pe,Xe,Ae,ut),R=new DE(g),S=new FE(g),H=new Yy(P),Le=new RE(P,H),J=new kE(P,H,ut,Le),te=new VE(P,J,H,ut),He=new HE(P,Xe,be),Ue=new bE(Pe),Q=new i1(g,R,S,We,Xe,Le,Ue),Me=new P1(g,Pe),ae=new s1,de=new d1(We),he=new CE(g,R,S,ve,te,d,l),re=new _1(g,te,Xe),it=new L1(P,ut,Xe,ve),Te=new PE(P,We,ut),me=new zE(P,We,ut),ut.programs=Q.programs,g.capabilities=Xe,g.extensions=We,g.properties=Pe,g.renderLists=ae,g.shadowMap=re,g.state=ve,g.info=ut}v();const F=new C1(g,P);this.xr=F,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=We.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=We.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(K,Y,!1))},this.getSize=function(T){return T.set(K,Y)},this.setSize=function(T,I,z=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,Y=I,n.width=Math.floor(T*q),n.height=Math.floor(I*q),z===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(K*q,Y*q).floor()},this.setDrawingBufferSize=function(T,I,z){K=T,Y=I,q=z,n.width=Math.floor(T*z),n.height=Math.floor(I*z),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,I,z,B){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,I,z,B),ve.viewport(M.copy(Z).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,I,z,B){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,I,z,B),ve.scissor(b.copy(se).multiplyScalar(q).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){ve.setScissorTest(ye=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(T=!0,I=!0,z=!0){let B=0;if(T){let N=!1;if(A!==null){const oe=A.texture.format;N=oe===yd||oe===xd||oe===vd}if(N){const oe=A.texture.type,fe=oe===fi||oe===yr||oe===Ds||oe===Co||oe===gd||oe===_d,ge=he.getClearColor(),_e=he.getClearAlpha(),we=ge.r,Re=ge.g,Ee=ge.b;fe?(p[0]=we,p[1]=Re,p[2]=Ee,p[3]=_e,P.clearBufferuiv(P.COLOR,0,p)):(x[0]=we,x[1]=Re,x[2]=Ee,x[3]=_e,P.clearBufferiv(P.COLOR,0,x))}else B|=P.COLOR_BUFFER_BIT}I&&(B|=P.DEPTH_BUFFER_BIT),z&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",k,!1),n.removeEventListener("webglcontextrestored",G,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),ae.dispose(),de.dispose(),Pe.dispose(),R.dispose(),S.dispose(),te.dispose(),Le.dispose(),it.dispose(),Q.dispose(),F.dispose(),F.removeEventListener("sessionstart",mt),F.removeEventListener("sessionend",mi),Lt.stop()};function k(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=ut.autoReset,I=re.enabled,z=re.autoUpdate,B=re.needsUpdate,N=re.type;v(),ut.autoReset=T,re.enabled=I,re.autoUpdate=z,re.needsUpdate=B,re.type=N}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xe(T){const I=T.target;I.removeEventListener("dispose",xe),Ce(I)}function Ce(T){ht(T),Pe.remove(T)}function ht(T){const I=Pe.get(T).programs;I!==void 0&&(I.forEach(function(z){Q.releaseProgram(z)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,z,B,N,oe){I===null&&(I=Ie);const fe=N.isMesh&&N.matrixWorld.determinant()<0,ge=L_(T,I,z,B,N);ve.setMaterial(B,fe);let _e=z.index,we=1;if(B.wireframe===!0){if(_e=J.getWireframeAttribute(z),_e===void 0)return;we=2}const Re=z.drawRange,Ee=z.attributes.position;let Ye=Re.start*we,ct=(Re.start+Re.count)*we;oe!==null&&(Ye=Math.max(Ye,oe.start*we),ct=Math.min(ct,(oe.start+oe.count)*we)),_e!==null?(Ye=Math.max(Ye,0),ct=Math.min(ct,_e.count)):Ee!=null&&(Ye=Math.max(Ye,0),ct=Math.min(ct,Ee.count));const ft=ct-Ye;if(ft<0||ft===1/0)return;Le.setup(N,B,ge,z,_e);let tn,je=Te;if(_e!==null&&(tn=H.get(_e),je=me,je.setIndex(tn)),N.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*Je()),je.setMode(P.LINES)):je.setMode(P.TRIANGLES);else if(N.isLine){let Se=B.linewidth;Se===void 0&&(Se=1),ve.setLineWidth(Se*Je()),N.isLineSegments?je.setMode(P.LINES):N.isLineLoop?je.setMode(P.LINE_LOOP):je.setMode(P.LINE_STRIP)}else N.isPoints?je.setMode(P.POINTS):N.isSprite&&je.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Se=N._multiDrawStarts,bt=N._multiDrawCounts,qe=N._multiDrawCount,En=_e?H.get(_e).bytesPerElement:1,Cr=Pe.get(B).currentProgram.getUniforms();for(let nn=0;nn<qe;nn++)Cr.setValue(P,"_gl_DrawID",nn),je.render(Se[nn]/En,bt[nn])}else if(N.isInstancedMesh)je.renderInstances(Ye,ft,N.count);else if(z.isInstancedBufferGeometry){const Se=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,bt=Math.min(z.instanceCount,Se);je.renderInstances(Ye,ft,bt)}else je.render(Ye,ft)};function xt(T,I,z){T.transparent===!0&&T.side===ti&&T.forceSinglePass===!1?(T.side=Jt,T.needsUpdate=!0,Vs(T,I,z),T.side=Wi,T.needsUpdate=!0,Vs(T,I,z),T.side=ti):Vs(T,I,z)}this.compile=function(T,I,z=null){z===null&&(z=T),m=de.get(z),m.init(I),_.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const B=new Set;return T.traverse(function(N){const oe=N.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const ge=oe[fe];xt(ge,z,N),B.add(ge)}else xt(oe,z,N),B.add(oe)}),_.pop(),m=null,B},this.compileAsync=function(T,I,z=null){const B=this.compile(T,I,z);return new Promise(N=>{function oe(){if(B.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){N(T);return}setTimeout(oe,10)}We.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ve=null;function yt(T){Ve&&Ve(T)}function mt(){Lt.stop()}function mi(){Lt.start()}const Lt=new T_;Lt.setAnimationLoop(yt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(T){Ve=T,F.setAnimationLoop(T),T===null?Lt.stop():Lt.start()},F.addEventListener("sessionstart",mt),F.addEventListener("sessionend",mi),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(I),I=F.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,I,A),m=de.get(T,_.length),m.init(I),_.push(m),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(ue),ie=this.localClippingEnabled,X=Ue.init(this.clippingPlanes,ie),y=ae.get(T,c.length),y.init(),c.push(y),F.enabled===!0&&F.isPresenting===!0){const oe=g.xr.getDepthSensingMesh();oe!==null&&Yn(oe,I,-1/0,g.sortObjects)}Yn(T,I,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(U,j),ke=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,ke&&he.addToRenderList(y,T),this.info.render.frame++,X===!0&&Ue.beginShadows();const z=m.state.shadowsArray;re.render(z,T,I),X===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=y.opaque,N=y.transmissive;if(m.setupLights(),I.isArrayCamera){const oe=I.cameras;if(N.length>0)for(let fe=0,ge=oe.length;fe<ge;fe++){const _e=oe[fe];Fo(B,N,T,_e)}ke&&he.render(T);for(let fe=0,ge=oe.length;fe<ge;fe++){const _e=oe[fe];$i(y,T,_e,_e.viewport)}}else N.length>0&&Fo(B,N,T,I),ke&&he.render(T),$i(y,T,I);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(g,T,I),Le.resetDefaultState(),D=-1,w=null,_.pop(),_.length>0?(m=_[_.length-1],X===!0&&Ue.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function Yn(T,I,z,B){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Be.intersectsSprite(T)){B&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const fe=te.update(T),ge=T.material;ge.visible&&y.push(T,fe,ge,z,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Be.intersectsObject(T))){const fe=te.update(T),ge=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),De.copy(fe.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(ge)){const _e=fe.groups;for(let we=0,Re=_e.length;we<Re;we++){const Ee=_e[we],Ye=ge[Ee.materialIndex];Ye&&Ye.visible&&y.push(T,fe,Ye,z,De.z,Ee)}}else ge.visible&&y.push(T,fe,ge,z,De.z,null)}}const oe=T.children;for(let fe=0,ge=oe.length;fe<ge;fe++)Yn(oe[fe],I,z,B)}function $i(T,I,z,B){const N=T.opaque,oe=T.transmissive,fe=T.transparent;m.setupLightsView(z),X===!0&&Ue.setGlobalState(g.clippingPlanes,z),B&&ve.viewport(M.copy(B)),N.length>0&&Hs(N,I,z),oe.length>0&&Hs(oe,I,z),fe.length>0&&Hs(fe,I,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Fo(T,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Sr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?zs:fi,minFilter:fr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const oe=m.state.transmissionRenderTarget[B.id],fe=B.viewport||M;oe.setSize(fe.z,fe.w);const ge=g.getRenderTarget();g.setRenderTarget(oe),g.getClearColor(V),$=g.getClearAlpha(),$<1&&g.setClearColor(16777215,.5),g.clear(),ke&&he.render(z);const _e=g.toneMapping;g.toneMapping=Hi;const we=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),X===!0&&Ue.setGlobalState(g.clippingPlanes,B),Hs(T,z,B),be.updateMultisampleRenderTarget(oe),be.updateRenderTargetMipmap(oe),We.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,Ye=I.length;Ee<Ye;Ee++){const ct=I[Ee],ft=ct.object,tn=ct.geometry,je=ct.material,Se=ct.group;if(je.side===ti&&ft.layers.test(B.layers)){const bt=je.side;je.side=Jt,je.needsUpdate=!0,wd(ft,z,B,tn,je,Se),je.side=bt,je.needsUpdate=!0,Re=!0}}Re===!0&&(be.updateMultisampleRenderTarget(oe),be.updateRenderTargetMipmap(oe))}g.setRenderTarget(ge),g.setClearColor(V,$),we!==void 0&&(B.viewport=we),g.toneMapping=_e}function Hs(T,I,z){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,oe=T.length;N<oe;N++){const fe=T[N],ge=fe.object,_e=fe.geometry,we=B===null?fe.material:B,Re=fe.group;ge.layers.test(z.layers)&&wd(ge,I,z,_e,we,Re)}}function wd(T,I,z,B,N,oe){T.onBeforeRender(g,I,z,B,N,oe),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.transparent===!0&&N.side===ti&&N.forceSinglePass===!1?(N.side=Jt,N.needsUpdate=!0,g.renderBufferDirect(z,I,B,N,T,oe),N.side=Wi,N.needsUpdate=!0,g.renderBufferDirect(z,I,B,N,T,oe),N.side=ti):g.renderBufferDirect(z,I,B,N,T,oe),T.onAfterRender(g,I,z,B,N,oe)}function Vs(T,I,z){I.isScene!==!0&&(I=Ie);const B=Pe.get(T),N=m.state.lights,oe=m.state.shadowsArray,fe=N.state.version,ge=Q.getParameters(T,N.state,oe,I,z),_e=Q.getProgramCacheKey(ge);let we=B.programs;B.environment=T.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(T.isMeshStandardMaterial?S:R).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,we===void 0&&(T.addEventListener("dispose",xe),we=new Map,B.programs=we);let Re=we.get(_e);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===fe)return Cd(T,ge),Re}else ge.uniforms=Q.getUniforms(T),T.onBeforeCompile(ge,g),Re=Q.acquireProgram(ge,_e),we.set(_e,Re),B.uniforms=ge.uniforms;const Ee=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=Ue.uniform),Cd(T,ge),B.needsLights=D_(T),B.lightsStateVersion=fe,B.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function Ad(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=ja.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Cd(T,I){const z=Pe.get(T);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function L_(T,I,z,B,N){I.isScene!==!0&&(I=Ie),be.resetTextureUnits();const oe=I.fog,fe=B.isMeshStandardMaterial?I.environment:null,ge=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qi,_e=(B.isMeshStandardMaterial?S:R).get(B.envMap||fe),we=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color;let ft=Hi;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=g.toneMapping);const tn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,je=tn!==void 0?tn.length:0,Se=Pe.get(B),bt=m.state.lights;if(X===!0&&(ie===!0||T!==w)){const hn=T===w&&B.id===D;Ue.setState(B,T,hn)}let qe=!1;B.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==bt.state.version||Se.outputColorSpace!==ge||N.isBatchedMesh&&Se.batching===!1||!N.isBatchedMesh&&Se.batching===!0||N.isBatchedMesh&&Se.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Se.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Se.instancing===!1||!N.isInstancedMesh&&Se.instancing===!0||N.isSkinnedMesh&&Se.skinning===!1||!N.isSkinnedMesh&&Se.skinning===!0||N.isInstancedMesh&&Se.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Se.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Se.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Se.instancingMorph===!1&&N.morphTexture!==null||Se.envMap!==_e||B.fog===!0&&Se.fog!==oe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ue.numPlanes||Se.numIntersection!==Ue.numIntersection)||Se.vertexAlphas!==we||Se.vertexTangents!==Re||Se.morphTargets!==Ee||Se.morphNormals!==Ye||Se.morphColors!==ct||Se.toneMapping!==ft||Se.morphTargetsCount!==je)&&(qe=!0):(qe=!0,Se.__version=B.version);let En=Se.currentProgram;qe===!0&&(En=Vs(B,I,N));let Cr=!1,nn=!1,Xl=!1;const gt=En.getUniforms(),gi=Se.uniforms;if(ve.useProgram(En.program)&&(Cr=!0,nn=!0,Xl=!0),B.id!==D&&(D=B.id,nn=!0),Cr||w!==T){gt.setValue(P,"projectionMatrix",T.projectionMatrix),gt.setValue(P,"viewMatrix",T.matrixWorldInverse);const hn=gt.map.cameraPosition;hn!==void 0&&hn.setValue(P,ce.setFromMatrixPosition(T.matrixWorld)),Xe.logarithmicDepthBuffer&&gt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&gt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,nn=!0,Xl=!0)}if(N.isSkinnedMesh){gt.setOptional(P,N,"bindMatrix"),gt.setOptional(P,N,"bindMatrixInverse");const hn=N.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),gt.setValue(P,"boneTexture",hn.boneTexture,be))}N.isBatchedMesh&&(gt.setOptional(P,N,"batchingTexture"),gt.setValue(P,"batchingTexture",N._matricesTexture,be),gt.setOptional(P,N,"batchingIdTexture"),gt.setValue(P,"batchingIdTexture",N._indirectTexture,be),gt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&gt.setValue(P,"batchingColorTexture",N._colorsTexture,be));const Yl=z.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0)&&He.update(N,z,En),(nn||Se.receiveShadow!==N.receiveShadow)&&(Se.receiveShadow=N.receiveShadow,gt.setValue(P,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(gi.envMap.value=_e,gi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(gi.envMapIntensity.value=I.environmentIntensity),nn&&(gt.setValue(P,"toneMappingExposure",g.toneMappingExposure),Se.needsLights&&b_(gi,Xl),oe&&B.fog===!0&&Me.refreshFogUniforms(gi,oe),Me.refreshMaterialUniforms(gi,B,q,Y,m.state.transmissionRenderTarget[T.id]),ja.upload(P,Ad(Se),gi,be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ja.upload(P,Ad(Se),gi,be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&gt.setValue(P,"center",N.center),gt.setValue(P,"modelViewMatrix",N.modelViewMatrix),gt.setValue(P,"normalMatrix",N.normalMatrix),gt.setValue(P,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const hn=B.uniformsGroups;for(let jl=0,U_=hn.length;jl<U_;jl++){const Rd=hn[jl];it.update(Rd,En),it.bind(Rd,En)}}return En}function b_(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function D_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,I,z){Pe.get(T.texture).__webglTexture=I,Pe.get(T.depthTexture).__webglTexture=z;const B=Pe.get(T);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const z=Pe.get(T);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,z=0){A=T,L=I,C=z;let B=!0,N=null,oe=!1,fe=!1;if(T){const _e=Pe.get(T);_e.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(P.FRAMEBUFFER,null),B=!1):_e.__webglFramebuffer===void 0?be.setupRenderTarget(T):_e.__hasExternalTextures&&be.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(fe=!0);const Re=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?N=Re[I][z]:N=Re[I],oe=!0):T.samples>0&&be.useMultisampledRTT(T)===!1?N=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[z]:N=Re,M.copy(T.viewport),b.copy(T.scissor),W=T.scissorTest}else M.copy(Z).multiplyScalar(q).floor(),b.copy(se).multiplyScalar(q).floor(),W=ye;if(ve.bindFramebuffer(P.FRAMEBUFFER,N)&&B&&ve.drawBuffers(T,N),ve.viewport(M),ve.scissor(b),ve.setScissorTest(W),oe){const _e=Pe.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,_e.__webglTexture,z)}else if(fe){const _e=Pe.get(T.texture),we=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.__webglTexture,z||0,we)}D=-1},this.readRenderTargetPixels=function(T,I,z,B,N,oe,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){ve.bindFramebuffer(P.FRAMEBUFFER,ge);try{const _e=T.texture,we=_e.format,Re=_e.type;if(!Xe.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-B&&z>=0&&z<=T.height-N&&P.readPixels(I,z,B,N,Ae.convert(we),Ae.convert(Re),oe)}finally{const _e=A!==null?Pe.get(A).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(T,I,z,B,N,oe,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){ve.bindFramebuffer(P.FRAMEBUFFER,ge);try{const _e=T.texture,we=_e.format,Re=_e.type;if(!Xe.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-B&&z>=0&&z<=T.height-N){const Ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),P.readPixels(I,z,B,N,Ae.convert(we),Ae.convert(Re),0),P.flush();const Ye=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Sy(P,Ye,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe)}finally{P.deleteBuffer(Ee),P.deleteSync(Ye)}return oe}}finally{const _e=A!==null?Pe.get(A).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(T,I=null,z=0){T.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const B=Math.pow(2,-z),N=Math.floor(T.image.width*B),oe=Math.floor(T.image.height*B),fe=I!==null?I.x:0,ge=I!==null?I.y:0;be.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,fe,ge,N,oe),ve.unbindTexture()},this.copyTextureToTexture=function(T,I,z=null,B=null,N=0){T.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1],I=arguments[2],N=arguments[3]||0,z=null);let oe,fe,ge,_e,we,Re;z!==null?(oe=z.max.x-z.min.x,fe=z.max.y-z.min.y,ge=z.min.x,_e=z.min.y):(oe=T.image.width,fe=T.image.height,ge=0,_e=0),B!==null?(we=B.x,Re=B.y):(we=0,Re=0);const Ee=Ae.convert(I.format),Ye=Ae.convert(I.type);be.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ct=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),je=P.getParameter(P.UNPACK_SKIP_ROWS),Se=P.getParameter(P.UNPACK_SKIP_IMAGES),bt=T.isCompressedTexture?T.mipmaps[N]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,_e),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,we,Re,oe,fe,Ee,Ye,bt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,we,Re,bt.width,bt.height,Ee,bt.data):P.texSubImage2D(P.TEXTURE_2D,N,we,Re,oe,fe,Ee,Ye,bt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Se),N===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,I,z=null,B=null,N=0){T.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,T=arguments[2],I=arguments[3],N=arguments[4]||0);let oe,fe,ge,_e,we,Re,Ee,Ye,ct;const ft=T.isCompressedTexture?T.mipmaps[N]:T.image;z!==null?(oe=z.max.x-z.min.x,fe=z.max.y-z.min.y,ge=z.max.z-z.min.z,_e=z.min.x,we=z.min.y,Re=z.min.z):(oe=ft.width,fe=ft.height,ge=ft.depth,_e=0,we=0,Re=0),B!==null?(Ee=B.x,Ye=B.y,ct=B.z):(Ee=0,Ye=0,ct=0);const tn=Ae.convert(I.format),je=Ae.convert(I.type);let Se;if(I.isData3DTexture)be.setTexture3D(I,0),Se=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)be.setTexture2DArray(I,0),Se=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const bt=P.getParameter(P.UNPACK_ROW_LENGTH),qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),En=P.getParameter(P.UNPACK_SKIP_PIXELS),Cr=P.getParameter(P.UNPACK_SKIP_ROWS),nn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,we),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Se,N,Ee,Ye,ct,oe,fe,ge,tn,je,ft.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,N,Ee,Ye,ct,oe,fe,ge,tn,ft.data):P.texSubImage3D(Se,N,Ee,Ye,ct,oe,fe,ge,tn,je,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,bt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,En),P.pixelStorei(P.UNPACK_SKIP_ROWS,Cr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,nn),N===0&&I.generateMipmaps&&P.generateMipmap(Se),ve.unbindTexture()},this.initRenderTarget=function(T){Pe.get(T).__webglFramebuffer===void 0&&be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?be.setTextureCube(T,0):T.isData3DTexture?be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?be.setTexture2DArray(T,0):be.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,ve.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Sd?"display-p3":"srgb",n.unpackColorSpace=$e.workingColorSpace===Hl?"display-p3":"srgb"}}class D1 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Np{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);const Fp={type:"change"},Yu={type:"start"},Op={type:"end"},Pa=new p_,kp=new Ai,U1=Math.cos(70*xy.DEG2RAD);class I1 extends wr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",de),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Fp),i.update(),o=r.NONE},this.update=function(){const v=new O,F=new Mr().setFromUnitVectors(e.up,new O(0,1,0)),k=F.clone().invert(),G=new O,ee=new Mr,xe=new O,Ce=2*Math.PI;return function(xt=null){const Ve=i.object.position;v.copy(Ve).sub(i.target),v.applyQuaternion(F),a.setFromVector3(v),i.autoRotate&&o===r.NONE&&W(M(xt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let yt=i.minAzimuthAngle,mt=i.maxAzimuthAngle;isFinite(yt)&&isFinite(mt)&&(yt<-Math.PI?yt+=Ce:yt>Math.PI&&(yt-=Ce),mt<-Math.PI?mt+=Ce:mt>Math.PI&&(mt-=Ce),yt<=mt?a.theta=Math.max(yt,Math.min(mt,a.theta)):a.theta=a.theta>(yt+mt)/2?Math.max(yt,a.theta):Math.min(mt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let mi=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)a.radius=Z(a.radius);else{const Lt=a.radius;a.radius=Z(a.radius*u),mi=Lt!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(k),Ve.copy(i.target).add(v),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&C){let Lt=null;if(i.object.isPerspectiveCamera){const Yn=v.length();Lt=Z(Yn*u);const $i=Yn-Lt;i.object.position.addScaledVector(E,$i),i.object.updateMatrixWorld(),mi=!!$i}else if(i.object.isOrthographicCamera){const Yn=new O(L.x,L.y,0);Yn.unproject(i.object);const $i=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),mi=$i!==i.object.zoom;const Fo=new O(L.x,L.y,0);Fo.unproject(i.object),i.object.position.sub(Fo).add(Yn),i.object.updateMatrixWorld(),Lt=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Lt).add(i.object.position):(Pa.origin.copy(i.object.position),Pa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Pa.direction))<U1?e.lookAt(i.target):(kp.setFromNormalAndCoplanarPoint(i.object.up,i.target),Pa.intersectPlane(kp,i.target))))}else if(i.object.isOrthographicCamera){const Lt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),Lt!==i.object.zoom&&(i.object.updateProjectionMatrix(),mi=!0)}return u=1,C=!1,mi||G.distanceToSquared(i.object.position)>s||8*(1-ee.dot(i.object.quaternion))>s||xe.distanceToSquared(i.target)>s?(i.dispatchEvent(Fp),G.copy(i.object.position),ee.copy(i.object.quaternion),xe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",he),i.domElement.removeEventListener("pointerdown",be),i.domElement.removeEventListener("pointercancel",S),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",S),i.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",de),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Np,l=new Np;let u=1;const f=new O,h=new Ne,d=new Ne,p=new Ne,x=new Ne,y=new Ne,m=new Ne,c=new Ne,_=new Ne,g=new Ne,E=new O,L=new Ne;let C=!1;const A=[],D={};let w=!1;function M(v){return v!==null?2*Math.PI/60*i.autoRotateSpeed*v:2*Math.PI/60/60*i.autoRotateSpeed}function b(v){const F=Math.abs(v*.01);return Math.pow(.95,i.zoomSpeed*F)}function W(v){l.theta-=v}function V(v){l.phi-=v}const $=function(){const v=new O;return function(k,G){v.setFromMatrixColumn(G,0),v.multiplyScalar(-k),f.add(v)}}(),K=function(){const v=new O;return function(k,G){i.screenSpacePanning===!0?v.setFromMatrixColumn(G,1):(v.setFromMatrixColumn(G,0),v.crossVectors(i.object.up,v)),v.multiplyScalar(k),f.add(v)}}(),Y=function(){const v=new O;return function(k,G){const ee=i.domElement;if(i.object.isPerspectiveCamera){const xe=i.object.position;v.copy(xe).sub(i.target);let Ce=v.length();Ce*=Math.tan(i.object.fov/2*Math.PI/180),$(2*k*Ce/ee.clientHeight,i.object.matrix),K(2*G*Ce/ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(k*(i.object.right-i.object.left)/i.object.zoom/ee.clientWidth,i.object.matrix),K(G*(i.object.top-i.object.bottom)/i.object.zoom/ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(v){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(v,F){if(!i.zoomToCursor)return;C=!0;const k=i.domElement.getBoundingClientRect(),G=v-k.left,ee=F-k.top,xe=k.width,Ce=k.height;L.x=G/xe*2-1,L.y=-(ee/Ce)*2+1,E.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(v){return Math.max(i.minDistance,Math.min(i.maxDistance,v))}function se(v){h.set(v.clientX,v.clientY)}function ye(v){j(v.clientX,v.clientX),c.set(v.clientX,v.clientY)}function Be(v){x.set(v.clientX,v.clientY)}function X(v){d.set(v.clientX,v.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const F=i.domElement;W(2*Math.PI*p.x/F.clientHeight),V(2*Math.PI*p.y/F.clientHeight),h.copy(d),i.update()}function ie(v){_.set(v.clientX,v.clientY),g.subVectors(_,c),g.y>0?q(b(g.y)):g.y<0&&U(b(g.y)),c.copy(_),i.update()}function ue(v){y.set(v.clientX,v.clientY),m.subVectors(y,x).multiplyScalar(i.panSpeed),Y(m.x,m.y),x.copy(y),i.update()}function ce(v){j(v.clientX,v.clientY),v.deltaY<0?U(b(v.deltaY)):v.deltaY>0&&q(b(v.deltaY)),i.update()}function De(v){let F=!1;switch(v.code){case i.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),F=!0;break}F&&(v.preventDefault(),i.update())}function Ie(v){if(A.length===1)h.set(v.pageX,v.pageY);else{const F=Le(v),k=.5*(v.pageX+F.x),G=.5*(v.pageY+F.y);h.set(k,G)}}function ke(v){if(A.length===1)x.set(v.pageX,v.pageY);else{const F=Le(v),k=.5*(v.pageX+F.x),G=.5*(v.pageY+F.y);x.set(k,G)}}function Je(v){const F=Le(v),k=v.pageX-F.x,G=v.pageY-F.y,ee=Math.sqrt(k*k+G*G);c.set(0,ee)}function P(v){i.enableZoom&&Je(v),i.enablePan&&ke(v)}function lt(v){i.enableZoom&&Je(v),i.enableRotate&&Ie(v)}function We(v){if(A.length==1)d.set(v.pageX,v.pageY);else{const k=Le(v),G=.5*(v.pageX+k.x),ee=.5*(v.pageY+k.y);d.set(G,ee)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const F=i.domElement;W(2*Math.PI*p.x/F.clientHeight),V(2*Math.PI*p.y/F.clientHeight),h.copy(d)}function Xe(v){if(A.length===1)y.set(v.pageX,v.pageY);else{const F=Le(v),k=.5*(v.pageX+F.x),G=.5*(v.pageY+F.y);y.set(k,G)}m.subVectors(y,x).multiplyScalar(i.panSpeed),Y(m.x,m.y),x.copy(y)}function ve(v){const F=Le(v),k=v.pageX-F.x,G=v.pageY-F.y,ee=Math.sqrt(k*k+G*G);_.set(0,ee),g.set(0,Math.pow(_.y/c.y,i.zoomSpeed)),q(g.y),c.copy(_);const xe=(v.pageX+F.x)*.5,Ce=(v.pageY+F.y)*.5;j(xe,Ce)}function ut(v){i.enableZoom&&ve(v),i.enablePan&&Xe(v)}function Pe(v){i.enableZoom&&ve(v),i.enableRotate&&We(v)}function be(v){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(v.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",S)),!me(v)&&(He(v),v.pointerType==="touch"?Ue(v):H(v)))}function R(v){i.enabled!==!1&&(v.pointerType==="touch"?re(v):J(v))}function S(v){switch(Te(v),A.length){case 0:i.domElement.releasePointerCapture(v.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",S),i.dispatchEvent(Op),o=r.NONE;break;case 1:const F=A[0],k=D[F];Ue({pointerId:F,pageX:k.x,pageY:k.y});break}}function H(v){let F;switch(v.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Pr.DOLLY:if(i.enableZoom===!1)return;ye(v),o=r.DOLLY;break;case Pr.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enablePan===!1)return;Be(v),o=r.PAN}else{if(i.enableRotate===!1)return;se(v),o=r.ROTATE}break;case Pr.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(i.enableRotate===!1)return;se(v),o=r.ROTATE}else{if(i.enablePan===!1)return;Be(v),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Yu)}function J(v){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;X(v);break;case r.DOLLY:if(i.enableZoom===!1)return;ie(v);break;case r.PAN:if(i.enablePan===!1)return;ue(v);break}}function te(v){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(v.preventDefault(),i.dispatchEvent(Yu),ce(Q(v)),i.dispatchEvent(Op))}function Q(v){const F=v.deltaMode,k={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(F){case 1:k.deltaY*=16;break;case 2:k.deltaY*=100;break}return v.ctrlKey&&!w&&(k.deltaY*=10),k}function Me(v){v.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",ae,{passive:!0,capture:!0}))}function ae(v){v.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",ae,{passive:!0,capture:!0}))}function de(v){i.enabled===!1||i.enablePan===!1||De(v)}function Ue(v){switch(Ae(v),A.length){case 1:switch(i.touches.ONE){case Lr.ROTATE:if(i.enableRotate===!1)return;Ie(v),o=r.TOUCH_ROTATE;break;case Lr.PAN:if(i.enablePan===!1)return;ke(v),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Lr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;P(v),o=r.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(v),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Yu)}function re(v){switch(Ae(v),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;We(v),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Xe(v),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ut(v),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Pe(v),i.update();break;default:o=r.NONE}}function he(v){i.enabled!==!1&&v.preventDefault()}function He(v){A.push(v.pointerId)}function Te(v){delete D[v.pointerId];for(let F=0;F<A.length;F++)if(A[F]==v.pointerId){A.splice(F,1);return}}function me(v){for(let F=0;F<A.length;F++)if(A[F]==v.pointerId)return!0;return!1}function Ae(v){let F=D[v.pointerId];F===void 0&&(F=new Ne,D[v.pointerId]=F),F.set(v.pageX,v.pageY)}function Le(v){const F=v.pointerId===A[0]?A[1]:A[0];return D[F]}i.domElement.addEventListener("contextmenu",he),i.domElement.addEventListener("pointerdown",be),i.domElement.addEventListener("pointercancel",S),i.domElement.addEventListener("wheel",te,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}const N1={uniforms:{color1:{value:new Ke(255)},color2:{value:new Ke(16711680)}},vertexShader:`
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec3 vPosition;
    uniform vec3 color1;
    uniform vec3 color2;
    void main() {
      float gradient = (vPosition.y + 1.0) * 0.5; // Simple vertical gradient
      gl_FragColor = vec4(mix(color1, color2, gradient), 1.0);
    }
  `},F1=()=>{const t=hs.useRef();return hs.useEffect(()=>{const e=new D1,n=new _n(25,t.current.clientWidth/t.current.clientHeight,.1,1e3);n.position.z=5;const i=new b1({antialias:!0});i.setSize(t.current.clientWidth,t.current.clientHeight),t.current.appendChild(i.domElement);const r=new I1(n,i.domElement);r.enableDamping=!0,r.dampingFactor=.05,r.rotateSpeed=.1,r.autoRotate=!0,r.autoRotateSpeed=4;const o=new hi(N1),s=new Io(1,1,1,64,64,64),a=new Vn(s,o);e.add(a),a.rotation.x=Math.PI/4,a.rotation.y=Math.PI/4;const l=()=>{requestAnimationFrame(l),r.update(),i.render(e,n)};return l(),()=>{r.dispose(),t.current.removeChild(i.domElement)}},[]),ps.jsx("div",{ref:t,className:"three-container"})},O1=()=>ps.jsx("div",{children:ps.jsx(F1,{})});ju.createRoot(document.getElementById("root")).render(ps.jsx(K_.StrictMode,{children:ps.jsx(O1,{})}));
