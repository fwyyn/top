(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},Ws=[],gn=()=>{},Fp=()=>!1,Ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$a=t=>t.startsWith("onUpdate:"),Qe=Object.assign,su=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sv=Object.prototype.hasOwnProperty,Ie=(t,e)=>sv.call(t,e),se=Array.isArray,ds=t=>Xi(t)==="[object Map]",nr=t=>Xi(t)==="[object Set]",id=t=>Xi(t)==="[object Date]",de=t=>typeof t=="function",Ue=t=>typeof t=="string",In=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Up=t=>(Se(t)||de(t))&&de(t.then)&&de(t.catch),$p=Object.prototype.toString,Xi=t=>$p.call(t),rv=t=>Xi(t).slice(8,-1),Bp=t=>Xi(t)==="[object Object]",ru=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,bi=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},iv=/-\w/g,tn=Ba(t=>t.replace(iv,e=>e.slice(1).toUpperCase())),ov=/\B([A-Z])/g,ur=Ba(t=>t.replace(ov,"-$1").toLowerCase()),jp=Ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fl=Ba(t=>t?`on${jp(t)}`:""),pn=(t,e)=>!Object.is(t,e),qo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e},av=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let od;const Ha=()=>od||(od=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function un(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ue(s)?hv(s):un(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ue(t)||Se(t))return t}const lv=/;(?![^(]*\))/g,cv=/:([^]+)/,uv=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function hv(t){const e={};return t.replace(uv,n=>n.startsWith("/*")?"":n).split(lv).forEach(n=>{if(n){const s=n.split(cv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function rt(t){let e="";if(Ue(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const s=rt(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",fv=nu(dv);function qp(t){return!!t||t===""}function pv(t,e,n){if(t.length!==e.length)return!1;let s=!0;for(let r=0;s&&r<t.length;r++)s=Ts(t[r],e[r],n);return s}function ad(t,e,n){if(t.size!==e.size)return!1;const s=Array.from(e),r=new Uint8Array(s.length);for(const i of t){let o=-1;for(let l=0;l<s.length;l++)if(!r[l]&&Ts(i,s[l],n)){o=l;break}if(o<0)return!1;r[o]=1}return!0}function mv(t,e,n){let s=ds(t),r=ds(e);if(s||r||(s=nr(t),r=nr(e),s||r))return s&&r?ad(t,e,n):!1;const i=Object.keys(t).length,o=Object.keys(e).length;if(i!==o)return!1;for(const l in t){const c=t.hasOwnProperty(l),h=e.hasOwnProperty(l);if(c&&!h||!c&&h||!Ts(t[l],e[l],n))return!1}return String(t)===String(e)}function ld(t,e,n,s){n||(n=[new Map,new Map]);const[r,i]=n;if(r.has(t)||i.has(e))return r.get(t)===e&&i.get(e)===t;r.set(t,e),i.set(e,t);const o=s(t,e,n);return r.delete(t),i.delete(e),o}function Ts(t,e,n){if(t===e)return!0;let s=id(t),r=id(e);return s||r?s&&r?t.getTime()===e.getTime():!1:(s=In(t),r=In(e),s||r?t===e:(s=se(t),r=se(e),s||r?s&&r?ld(t,e,n,pv):!1:(s=Se(t),r=Se(e),s||r?!s||!r?!1:ld(t,e,n,mv):String(t)===String(e))))}function gv(t,e){return t.findIndex(n=>Ts(n,e))}const zp=t=>!!(t&&t.__v_isRef===!0),ee=t=>Ue(t)?t:t==null?"":se(t)||Se(t)&&(t.toString===$p||!de(t.toString))?zp(t)?ee(t.value):JSON.stringify(t,Wp,2):String(t),Wp=(t,e)=>zp(e)?Wp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Ul(s,i)+" =>"]=r,n),{})}:nr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ul(n))}:In(e)?Ul(e):Se(e)&&!se(e)&&!Bp(e)?String(e):e,Ul=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class _v{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&nt&&(nt.active?(this.parent=nt,this.index=(nt.scopes||(nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}const s=this.effects.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){if(this._on>0&&--this._on===0){if(nt===this)nt=this.prevScope;else{let e=nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,s=r.length;n<s;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function yv(){return nt}let Ve;const $l=new WeakSet;class Kp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&(nt.active?nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$l.has(this)&&($l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cd(this),Jp(this);const e=Ve,n=nn;Ve=this,nn=!0;try{return this.fn()}finally{Xp(this),Ve=e,nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)au(e);this.deps=this.depsTail=void 0,cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uc(this)&&this.run()}get dirty(){return uc(this)}}let Gp=0,Ai,Si;function Qp(t,e=!1){if(t.flags|=8,e){t.next=Si,Si=t;return}t.next=Ai,Ai=t}function iu(){Gp++}function ou(){if(--Gp>0)return;if(Si){let e=Si;for(Si=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ai;){let e=Ai;for(Ai=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Jp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xp(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),au(s),vv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function uc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Yp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Li)||(t.globalVersion=Li,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!uc(t))))return;t.flags|=2;const e=t.dep,n=Ve,s=nn;Ve=t,nn=!0;try{Jp(t);const r=t.fn(t._value);(e.version===0||pn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ve=n,nn=s,Xp(t),t.flags&=-3}}function au(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)au(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function vv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let nn=!0;const Zp=[];function bn(){Zp.push(nn),nn=!1}function An(){const t=Zp.pop();nn=t===void 0?!0:t}function cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Li=0;class Ev{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!nn||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new Ev(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,em(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=s)}return n}trigger(e){this.version++,Li++,this.notify(e)}notify(e){iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ou()}}}function em(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)em(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const hc=new WeakMap,Js=Symbol(""),dc=Symbol(""),Fi=Symbol("");function ft(t,e,n){if(nn&&Ve){let s=hc.get(t);s||hc.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new lu),r.map=s,r.key=n),r.track()}}function Fn(t,e,n,s,r,i){const o=hc.get(t);if(!o){Li++;return}const l=c=>{c&&c.trigger()};if(iu(),e==="clear")o.forEach(l);else{const c=se(t),h=c&&ru(n);if(c&&n==="length"){const f=Number(s);o.forEach((p,g)=>{(g==="length"||g===Fi||!In(g)&&g>=f)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(Fi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(Js)),ds(t)&&l(o.get(dc)));break;case"delete":c||(l(o.get(Js)),ds(t)&&l(o.get(dc)));break;case"set":ds(t)&&l(o.get(Js));break}}ou()}function yr(t){const e=we(t);return e===t||(ft(e,"iterate",Fi),zt(t))?e:Sn(t)?fs(t)?e.map(n=>ws(Wt(n))):e.map(ws):e.map(Wt)}function qa(t){return ft(t=we(t),"iterate",Fi),t}function hn(t,e){return Sn(t)?ws(fs(t)?Wt(e):e):Wt(e)}const Tv={__proto__:null,[Symbol.iterator](){return Bl(this,Symbol.iterator,t=>hn(this,t))},concat(...t){return yr(this).concat(...t.map(e=>se(e)?yr(e):e))},entries(){return Bl(this,"entries",t=>(t[1]=hn(this,t[1]),t))},every(t,e){return Nn(this,"every",t,e,void 0,arguments)},filter(t,e){return Nn(this,"filter",t,e,n=>n.map(s=>hn(this,s)),arguments)},find(t,e){return Nn(this,"find",t,e,n=>hn(this,n),arguments)},findIndex(t,e){return Nn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Nn(this,"findLast",t,e,n=>hn(this,n),arguments)},findLastIndex(t,e){return Nn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Nn(this,"forEach",t,e,void 0,arguments)},includes(...t){return jl(this,"includes",t)},indexOf(...t){return jl(this,"indexOf",t)},join(t){return yr(this).join(t)},lastIndexOf(...t){return jl(this,"lastIndexOf",t)},map(t,e){return Nn(this,"map",t,e,void 0,arguments)},pop(){return fi(this,"pop")},push(...t){return fi(this,"push",t)},reduce(t,...e){return hd(this,"reduce",t,e)},reduceRight(t,...e){return hd(this,"reduceRight",t,e)},shift(){return fi(this,"shift")},some(t,e){return Nn(this,"some",t,e,void 0,arguments)},splice(...t){return fi(this,"splice",t)},toReversed(){return yr(this).toReversed()},toSorted(t){return yr(this).toSorted(t)},toSpliced(...t){return yr(this).toSpliced(...t)},unshift(...t){return fi(this,"unshift",t)},values(){return Bl(this,"values",t=>hn(this,t))}};function Bl(t,e,n){const s=qa(t),r=s[e],i=r.call(s);if(s!==t&&!zt(t)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>ud(i.next(),n),r!==tm[e]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>ud(i._next(),n)}return i}function ud(t,e){return t.done||(t.value=e(t.value)),t}const tm=Array.prototype;function Nn(t,e,n,s,r,i){const o=qa(t),l=o!==t&&!zt(t),c=o[e];if(c!==tm[e]){const p=c.apply(t,i);return l?Wt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,hn(t,p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(o,h,s);return l&&r?r(f):f}function hd(t,e,n,s){const r=qa(t),i=r!==t&&!zt(t);let o=n,l=!1;r!==t&&(i?(l=s.length===0,o=function(h,f,p){return l&&(l=!1,h=hn(t,h)),n.call(this,h,hn(t,f),p,t)}):n.length>3&&(o=function(h,f,p){return n.call(this,h,f,p,t)}));const c=r[e](o,...s);return l?hn(t,c):c}function jl(t,e,n){const s=we(t);ft(s,"iterate",Fi);const r=s[e](...n);return(r===-1||r===!1)&&hu(n[0])?(n[0]=we(n[0]),s[e](...n)):r}function fi(t,e,n=[]){bn(),iu();const s=we(t)[e].apply(t,n);return ou(),An(),s}const wv=nu("__proto__,__v_isRef,__isVue"),nm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In));function Iv(t){In(t)||(t=String(t));const e=we(this);return ft(e,"has",t),e.hasOwnProperty(t)}class sm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ov:am:i?om:im).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=se(e);if(!r){let c;if(o&&(c=Tv[n]))return c;if(n==="hasOwnProperty")return Iv}const l=Reflect.get(e,n,_t(e)?e:s);if((In(n)?nm.has(n):wv(n))||(r||ft(e,"get",n),i))return l;if(_t(l)){const c=o&&ru(n)?l:l.value;return r&&Se(c)?pc(c):c}return Se(l)?r?pc(l):hr(l):l}}class rm extends sm{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=se(e)&&ru(n);if(!this._isShallow){const h=Sn(i);if(!zt(s)&&!Sn(s)&&(i=we(i),s=we(s)),!o&&_t(i)&&!_t(s))return h||(i.value=s),!0}const l=o?Number(n)<e.length:Ie(e,n),c=Reflect.set(e,n,s,_t(e)?e:r);return e===we(r)&&c&&(l?pn(s,i)&&Fn(e,"set",n,s):Fn(e,"add",n,s)),c}deleteProperty(e,n){const s=Ie(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Fn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!In(n)||!nm.has(n))&&ft(e,"has",n),s}ownKeys(e){return ft(e,"iterate",se(e)?"length":Js),Reflect.ownKeys(e)}}class bv extends sm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Av=new rm,Sv=new bv,Cv=new rm(!0);const fc=t=>t,Oo=t=>Reflect.getPrototypeOf(t);function Rv(t,e,n){return function(...s){const r=this.__v_raw,i=we(r),o=ds(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=r[t](...s),f=n?fc:e?ws:Wt;return!e&&ft(i,"iterate",c?dc:Js),Qe(Object.create(h),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}}})}}function No(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pv(t,e){const n={get(r){const i=this.__v_raw,o=we(i),l=we(r);t||(pn(r,l)&&ft(o,"get",r),ft(o,"get",l));const{has:c}=Oo(o),h=e?fc:t?ws:Wt;if(c.call(o,r))return h(i.get(r));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ft(we(r),"iterate",Js),r.size},has(r){const i=this.__v_raw,o=we(i),l=we(r);return t||(pn(r,l)&&ft(o,"has",r),ft(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,c=we(l),h=e?fc:t?ws:Wt;return!t&&ft(c,"iterate",Js),l.forEach((f,p)=>r.call(i,h(f),h(p),o))}};return Qe(n,t?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(r){const i=we(this),o=Oo(i),l=we(r),c=!e&&!zt(r)&&!Sn(r)?l:r;return o.has.call(i,c)||pn(r,c)&&o.has.call(i,r)||pn(l,c)&&o.has.call(i,l)||(i.add(c),Fn(i,"add",c,c)),this},set(r,i){!e&&!zt(i)&&!Sn(i)&&(i=we(i));const o=we(this),{has:l,get:c}=Oo(o);let h=l.call(o,r);h||(r=we(r),h=l.call(o,r));const f=c.call(o,r);return o.set(r,i),h?pn(i,f)&&Fn(o,"set",r,i):Fn(o,"add",r,i),this},delete(r){const i=we(this),{has:o,get:l}=Oo(i);let c=o.call(i,r);c||(r=we(r),c=o.call(i,r)),l&&l.call(i,r);const h=i.delete(r);return c&&Fn(i,"delete",r,void 0),h},clear(){const r=we(this),i=r.size!==0,o=r.clear();return i&&Fn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Rv(r,t,e)}),n}function cu(t,e){const n=Pv(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_isShallow"?e:r==="__v_raw"?s:Reflect.get(Ie(n,r)&&r in s?n:s,r,i)}const kv={get:cu(!1,!1)},Vv={get:cu(!1,!0)},Dv={get:cu(!0,!1)};const im=new WeakMap,om=new WeakMap,am=new WeakMap,Ov=new WeakMap;function Nv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hr(t){return Sn(t)?t:uu(t,!1,Av,kv,im)}function xv(t){return uu(t,!1,Cv,Vv,om)}function pc(t){return uu(t,!0,Sv,Dv,am)}function uu(t,e,n,s,r){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=r.get(t);if(i)return i;const o=Nv(rv(t));if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function fs(t){return Sn(t)?fs(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function zt(t){return!!(t&&t.__v_isShallow)}function hu(t){return t?!!t.__v_raw:!1}function we(t){const e=t&&t.__v_raw;return e?we(e):t}function Mv(t){return!Ie(t,"__v_skip")&&Object.isExtensible(t)&&Hp(t,"__v_skip",!0),t}const Wt=t=>Se(t)?hr(t):t,ws=t=>Se(t)?pc(t):t;function _t(t){return t?t.__v_isRef===!0:!1}function Lt(t){return Lv(t,!1)}function Lv(t,e){return _t(t)?t:new Fv(t,e)}class Fv{constructor(e,n){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:we(e),this._value=n?e:Wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||zt(e)||Sn(e);e=s?e:we(e),pn(e,n)&&(this._rawValue=e,this._value=s?e:Wt(e),this.dep.trigger())}}function R(t){return _t(t)?t.value:t}const Uv={get:(t,e,n)=>e==="__v_raw"?t:R(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return _t(r)&&!_t(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function lm(t){return fs(t)?t:new Proxy(t,Uv)}class $v{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Li-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Qp(this,!0),!0}get value(){const e=this.dep.track();return Yp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bv(t,e,n=!1){let s,r;return de(t)?s=t:(s=t.get,r=t.set),new $v(s,r,n)}const xo={},ia=new WeakMap;let Hs;function jv(t,e=!1,n=Hs){if(n){let s=ia.get(n);s||ia.set(n,s=[]),s.push(t)}}function Hv(t,e,n=Pe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,h=W=>r?W:zt(W)||r===!1||r===0?Un(W,1):Un(W);let f,p,g,T,D=!1,O=!1;if(_t(t)?(p=()=>t.value,D=zt(t)):fs(t)?(p=()=>h(t),D=!0):se(t)?(O=!0,D=t.some(W=>fs(W)||zt(W)),p=()=>t.map(W=>{if(_t(W))return W.value;if(fs(W))return h(W);if(de(W))return c?c(W,2):W()})):de(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){bn();try{g()}finally{An()}}const W=Hs;Hs=f;try{return c?c(t,3,[T]):t(T)}finally{Hs=W}}:p=gn,e&&r){const W=p,fe=r===!0?1/0:r;p=()=>Un(W(),fe)}const x=yv(),X=()=>{f.stop(),x&&x.active&&su(x.effects,f)};if(i&&e){const W=e;e=(...fe)=>{try{return W(...fe)}finally{X()}}}let z=O?new Array(t.length).fill(xo):xo;const Q=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const fe=f.run();if(W||r||D||(O?fe.some((pe,S)=>pn(pe,z[S])):pn(fe,z))){const pe=Hs;bn();try{g&&g(),Hs=f;const S=[fe,z===xo?void 0:O&&z[0]===xo?[]:z,T];z=fe,c?c(e,3,S):e(...S)}finally{Hs=pe,An()}}}else f.run()};return l&&l(Q),f=new Kp(p),f.scheduler=o?()=>o(Q,!1):Q,T=W=>jv(W,!1,f),g=f.onStop=()=>{const W=ia.get(f);if(W){if(c)c(W,4);else for(const fe of W)fe();ia.delete(f)}},e?s?Q(!0):z=f.run():o?o(Q.bind(null,!0),!0):f.run(),X.pause=f.pause.bind(f),X.resume=f.resume.bind(f),X.stop=X,X}function Un(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,_t(t))Un(t.value,e,n);else if(se(t))for(let s=0;s<t.length;s++)Un(t[s],e,n);else if(nr(t)||ds(t))t.forEach(s=>{Un(s,e,n)});else if(Bp(t)){for(const s in t)Un(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Un(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yi(t,e,n,s){try{return s?t(...s):t()}catch(r){za(r,e,n)}}function Kt(t,e,n,s){if(de(t)){const r=Yi(t,e,n,s);return r&&Up(r)&&r.catch(i=>{za(i,e,n)}),r}if(se(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Kt(t[i],e,n,s));return r}}function za(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){bn(),Yi(i,null,10,[t,c,h]),An();return}}qv(t,n,r,s,o)}function qv(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const wt=[];let Yt=-1;const dn=[];let rs=null,wr=0;const cm=Promise.resolve();let oa=null;function um(t){const e=oa||cm;return t?e.then(this?t.bind(this):t):e}function zv(t){let e=Yt+1,n=wt.length;for(;e<n;){const s=e+n>>>1,r=wt[s],i=Ui(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function du(t){if(!(t.flags&1)){const e=Ui(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=Ui(n)?wt.push(t):wt.splice(zv(e),0,t),t.flags|=1,hm()}}function hm(){oa||(oa=cm.then(pm))}function Wv(t){if(!se(t))rs&&t.id===-1?rs.splice(wr+1,0,t):t.flags&1||(dn.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)dn.push(t[e]);hm()}function dm(t,e,n,s=Yt+1){for(;s<wt.length;s++){const r=wt[s];if(r&&r.flags&2){if(t&&r.id!==t.uid||e!==void 0&&!(r.id>=e))continue;wt.splice(s,1),s=t?s-1:Yt,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function fm(t,e,n=0){if(dn.length){let s=dn,r=0;if(e){s=[];for(let o=0;o<dn.length;o++){const l=dn[o];(l.i!==void 0?!l.i||l.i.uid<n:e.has(l))?dn[r++]=l:s.push(l)}}const i=[...new Set(s)].sort((o,l)=>Ui(o)-Ui(l));if(dn.length=r,rs){for(let o=0;o<i.length;o++)rs.push(i[o]);return}for(rs=i,wr=0;wr<rs.length;wr++){const o=rs[wr];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}rs=null,wr=0}}let Hl=!1;function Kv(t,e){if(Hl){t();return}const n=e===void 0?void 0:new Set(dn);t(),Hl=!0;try{dm(void 0,e),fm(void 0,n,e)}finally{Hl=!1}}const Ui=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pm(t){try{for(Yt=0;Yt<wt.length;Yt++){const e=wt[Yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yt<wt.length;Yt++){const e=wt[Yt];e&&(e.flags&=-2)}Yt=-1,wt.length=0,fm(),oa=null,(wt.length||dn.length)&&pm()}}let Ht=null,mm=null;function aa(t){const e=Ht;return Ht=t,mm=t&&t.type.__scopeId||null,e}function fu(t,e=Ht,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&wd(-1);const i=aa(e),o=Xs.length;let l;try{l=t(...r)}finally{for(let c=Xs.length;c>o;c--)Hm();aa(i),s._d&&wd(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function is(t,e){if(Ht===null)return t;const n=Ja(Ht),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Pe]=e[r];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Un(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function $s(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(bn(),Kt(c,n,8,[t.el,l,t,e]),An())}}function Gv(t,e){if(It){let n=It.provides;const s=It.parent&&It.parent.provides;s===n&&(n=It.provides=Object.create(s)),n[t]=e}}function zo(t,e,n=!1){const s=Km();if(s||Pr){let r=Pr?Pr._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&de(e)?e.call(s&&s.proxy):e}}const Qv=Symbol.for("v-scx"),Jv=()=>zo(Qv);function Ci(t,e,n){return gm(t,e,n)}function gm(t,e,n=Pe){const{immediate:s,deep:r,flush:i,once:o}=n,l=Qe({},n),c=e&&s||!e&&i!=="post";let h;if(ji){if(i==="sync"){const T=Jv();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=gn,T.resume=gn,T.pause=gn,T}}const f=It;l.call=(T,D,O)=>Kt(T,f,D,O);let p=!1;i==="post"?l.scheduler=T=>{T.i=f,At(T,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(T,D)=>{D?T():du(T)}),l.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,f&&(T.id=f.uid,T.i=f))};const g=Hv(t,e,l);return ji&&(h?h.push(g):c&&g()),g}function Xv(t,e,n){const s=this.proxy,r=Ue(t)?t.includes(".")?_m(s,t):()=>s[t]:t.bind(s,s);let i;de(e)?i=e:(i=e.handler,n=e);const o=Zi(this),l=gm(r,i.bind(s),n);return o(),l}function _m(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Yv=Symbol("_vte"),Wa=t=>t.__isTeleport,ln=Symbol("_leaveCb"),pi=Symbol("_enterCb");function Zv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wm(()=>{t.isMounted=!0}),bm(()=>{t.isUnmounting=!0}),t}const $t=[Function,Array],eE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t};function tE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Gt){e=n;break}}return e}function nE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function mc(t,e,n,s,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:T,onAfterLeave:D,onLeaveCancelled:O,onBeforeAppear:x,onAppear:X,onAfterAppear:z,onAppearCancelled:Q}=e,W=String(t.key),fe=nE(n,t),pe=(_,I)=>{_&&Kt(_,s,9,I)},S=(_,I)=>{const b=I[1];pe(_,I),se(_)?_.every(w=>w.length<=1)&&b():_.length<=1&&b()},v={mode:o,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=x||c;else return;_[ln]&&_[ln](!0);const b=fe[W];if(b&&Ir(t,b)){let w=b.el[ln];if(!w){const E=la(b);w=E&&E.el[ln]}w&&w()}pe(I,[_])},enter(_){if(fe[W]===t)return;let I=h,b=f,w=p;if(!n.isMounted)if(i)I=X||h,b=z||f,w=Q||p;else return;let E=!1;_[pi]=vt=>{E||(E=!0,vt?pe(w,[_]):pe(b,[_]),v.delayedLeave&&v.delayedLeave(),_[pi]=void 0)};const ke=_[pi].bind(null,!1);I?S(I,[_,ke]):ke()},leave(_,I){const b=String(t.key);if(_[pi]&&_[pi](!0),n.isUnmounting)return I();pe(g,[_]);let w=!1;_[ln]=ke=>{w||(w=!0,I(),ke?pe(O,[_]):pe(D,[_]),_[ln]=void 0,fe[b]===t&&delete fe[b])};const E=_[ln].bind(null,!1);fe[b]=t,T?S(T,[_,E]):E()},clone(_){return mc(_,e,n,s)}};return v}function ym(t){if(!pu(t))return Wa(t.type)&&t.children?tE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function xr(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const n=t.component.subTree;xr(Wa(n.type)&&ym(n)||n,e)}else if(t.shapeFlag&128)t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback);else if(t.transition=e,t.type===Ce&&se(t.children)){const n=km(t.children,!1);n&&xr(n,e)}}function vm(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ce?(o.patchFlag&128&&r++,s=s.concat(vm(o.children,e,l))):(e||o.type!==Gt)&&s.push(l!=null?sr(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function la(t){if(t.component)return la(t.component.subTree);if(t.type===Ce){const e=se(t.children)&&km(t.children,!1);return e?la(e):void 0}if(t.type!==Gt)return t}function Em(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function dd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ca=new WeakMap;function Ri(t,e,n,s,r=!1){if(se(t)){t.forEach((O,x)=>Ri(O,e&&(se(e)?e[x]:e),n,s,r));return}if(Pi(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ri(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ja(s.component):s.el,o=r?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,g=we(p),T=p===Pe?Fp:O=>dd(f,O)?!1:Ie(g,O),D=(O,x)=>!(x&&dd(f,x));if(h!=null&&h!==c){if(fd(e),Ue(h))f[h]=null,T(h)&&(p[h]=null);else if(_t(h)){const O=e;D(h,O.k)&&(h.value=null),O.k&&(f[O.k]=null)}}if(de(c))Yi(c,l,12,[o,f]);else{const O=Ue(c),x=_t(c);if(O||x){const X=()=>{if(t.f){const z=O?T(c)?p[c]:f[c]:D()||!t.k?c.value:f[t.k];if(r)se(z)&&su(z,i);else if(se(z))z.includes(i)||z.push(i);else if(O)f[c]=[i],T(c)&&(p[c]=f[c]);else{const Q=[i];D(c,t.k)&&(c.value=Q),t.k&&(f[t.k]=Q)}}else O?(f[c]=o,T(c)&&(p[c]=o)):x&&(D(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const z=()=>{X(),ca.delete(t)};z.id=-1,ca.set(t,z),At(z,n)}else fd(t),X()}}}function fd(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}Ha().requestIdleCallback;Ha().cancelIdleCallback;const Pi=t=>!!t.type.__asyncLoader,pu=t=>t.type.__isKeepAlive;function sE(t,e){Tm(t,"a",e)}function rE(t,e){Tm(t,"da",e)}function Tm(t,e,n=It){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ka(e,s,n),n){let r=n.parent;for(;r&&r.parent;)pu(r.parent.vnode)&&iE(s,e,n,r),r=r.parent}}function iE(t,e,n,s){const r=Ka(e,t,s,!0);Am(()=>{su(s[e],r)},n)}function Ka(t,e,n=It,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{bn();const l=Zi(n),c=Kt(e,n,t,o);return l(),An(),c});return s?r.unshift(i):r.push(i),i}}const Qn=t=>(e,n=It)=>{(!ji||t==="sp")&&Ka(t,(...s)=>e(...s),n)},oE=Qn("bm"),wm=Qn("m"),aE=Qn("bu"),Im=Qn("u"),bm=Qn("bum"),Am=Qn("um"),lE=Qn("sp"),cE=Qn("rtg"),uE=Qn("rtc");function hE(t,e=It){Ka("ec",t,e)}const dE=Symbol.for("v-ndc");function sn(t,e,n,s){let r;const i=n,o=se(t);if(o||Ue(t)){const l=o&&fs(t);let c=!1,h=!1;l&&(c=!zt(t),h=Sn(t),t=qa(t)),r=new Array(t.length);for(let f=0,p=t.length;f<p;f++)r[f]=e(c?h?ws(Wt(t[f])):Wt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number")if(!Number.isInteger(t)||t<0)r=[];else{r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(Se(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];r[c]=e(t[f],f,c,i)}}else r=[];return r}const gc=t=>t?Gm(t)?Ja(t):gc(t.parent):null,ki=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gc(t.parent),$root:t=>gc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Cm(t),$forceUpdate:t=>t.f||(t.f=()=>{du(t.update)}),$nextTick:t=>t.n||(t.n=um.bind(t.proxy)),$watch:t=>Xv.bind(t)}),ql=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Ie(t,e),fE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ql(s,e))return o[e]=1,s[e];if(r!==Pe&&Ie(r,e))return o[e]=2,r[e];if(Ie(i,e))return o[e]=3,i[e];if(n!==Pe&&Ie(n,e))return o[e]=4,n[e];_c&&(o[e]=0)}}const h=ki[e];let f,p;if(h)return e==="$attrs"&&ft(t.attrs,"get",""),h(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==Pe&&Ie(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Ie(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ql(r,e)?(r[e]=n,!0):s!==Pe&&Ie(s,e)?(s[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let c;return!!(n[l]||t!==Pe&&l[0]!=="$"&&Ie(t,l)||ql(e,l)||Ie(i,l)||Ie(s,l)||Ie(ki,l)||Ie(r.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function pd(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _c=!0;function pE(t){const e=Cm(t),n=t.proxy,s=t.ctx;_c=!1,e.beforeCreate&&md(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:T,updated:D,activated:O,deactivated:x,beforeDestroy:X,beforeUnmount:z,destroyed:Q,unmounted:W,render:fe,renderTracked:pe,renderTriggered:S,errorCaptured:v,serverPrefetch:_,expose:I,inheritAttrs:b,components:w,directives:E,filters:ke}=e;if(h&&mE(h,s,null),o)for(const Ae in o){const Ee=o[Ae];de(Ee)&&(s[Ae]=Ee.bind(n))}if(r){const Ae=r.call(n,n);Se(Ae)&&(t.data=hr(Ae))}if(_c=!0,i)for(const Ae in i){const Ee=i[Ae],Qt=de(Ee)?Ee.bind(n,n):de(Ee.get)?Ee.get.bind(n,n):gn,Ds=!de(Ee)&&de(Ee.set)?Ee.set.bind(n):gn,kn=Oe({get:Qt,set:Ds});Object.defineProperty(s,Ae,{enumerable:!0,configurable:!0,get:()=>kn.value,set:qe=>kn.value=qe})}if(l)for(const Ae in l)Sm(l[Ae],s,n,Ae);if(c){const Ae=de(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Ee=>{Gv(Ee,Ae[Ee])})}f&&md(f,t,"c");function He(Ae,Ee){se(Ee)?Ee.forEach(Qt=>Ae(Qt.bind(n))):Ee&&Ae(Ee.bind(n))}if(He(oE,p),He(wm,g),He(aE,T),He(Im,D),He(sE,O),He(rE,x),He(hE,v),He(uE,pe),He(cE,S),He(bm,z),He(Am,W),He(lE,_),se(I))if(I.length){const Ae=t.exposed||(t.exposed={});I.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>n[Ee],set:Qt=>n[Ee]=Qt,enumerable:!0})})}else t.exposed||(t.exposed={});fe&&t.render===gn&&(t.render=fe),b!=null&&(t.inheritAttrs=b),w&&(t.components=w),E&&(t.directives=E),_&&Em(t)}function mE(t,e,n=gn){se(t)&&(t=yc(t));for(const s in t){const r=t[s];let i;Se(r)?"default"in r?i=zo(r.from||s,r.default,!0):i=zo(r.from||s):i=zo(r),_t(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function md(t,e,n){Kt(se(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sm(t,e,n,s){let r=s.includes(".")?_m(n,s):()=>n[s];if(Ue(t)){const i=e[t];de(i)&&Ci(r,i)}else if(de(t))Ci(r,t.bind(n));else if(Se(t))if(se(t))t.forEach(i=>Sm(i,e,n,s));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Ci(r,i,t)}}function Cm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(h=>ua(c,h,o,!0)),ua(c,e,o)),Se(e)&&i.set(e,c),c}function ua(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ua(t,i,n,!0),r&&r.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=gE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const gE={data:gd,props:_d,emits:_d,methods:_i,computed:_i,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:_i,directives:_i,watch:yE,provide:gd,inject:_E};function gd(t,e){return e?t?function(){return Qe(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function _E(t,e){return _i(yc(t),yc(e))}function yc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function _i(t,e){return t?Qe(Object.create(null),t,e):e}function _d(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Qe(Object.create(null),pd(t),pd(e??{})):e}function yE(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function Rm(){return{app:null,config:{isNativeTag:Fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vE=0;function EE(t,e){return function(s,r=null){de(s)||(s=Qe({},s)),r!=null&&!Se(r)&&(r=null);const i=Rm(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:vE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:XE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&de(f.install)?(o.add(f),f.install(h,...p)):de(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const T=h._ceVNode||xt(s,r);return T.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(T,f,g),c=!0,h._container=f,f.__vue_app__=h,Ja(T.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Kt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Pr;Pr=h;try{return f()}finally{Pr=p}}};return h}}let Pr=null;const TE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${ur(e)}Modifiers`];function wE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let r=n;const i=e.startsWith("update:"),o=i&&TE(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>Ue(f)?f.trim():f)),o.number&&(r=r.map(ja)));let l,c=s[l=Fl(e)]||s[l=Fl(tn(e))];!c&&i&&(c=s[l=Fl(ur(e))]),c&&Kt(c,t,6,r);const h=s[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Kt(h,t,6,r)}}const IE=new WeakMap;function Pm(t,e,n=!1){const s=n?IE:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!de(t)){const c=h=>{const f=Pm(h,e,!0);f&&(l=!0,Qe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Se(t)&&s.set(t,null),null):(se(i)?i.forEach(c=>o[c]=null):Qe(o,i),Se(t)&&s.set(t,o),o)}function Ga(t,e){return!t||!Ua(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,ur(e))||Ie(t,e))}function yd(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:T,ctx:D,inheritAttrs:O}=t,x=aa(t);let X,z;try{if(n.shapeFlag&4){const W=r||s,fe=W;X=fn(h.call(fe,W,f,p,T,g,D)),z=l}else{const W=e;X=fn(W.length>1?W(p,{attrs:l,slots:o,emit:c}):W(p,null)),z=e.props?l:bE(l)}}catch(W){Xs.length=0,za(W,t,1),X=xt(Gt)}let Q=X;if(z&&O!==!1){const W=Object.keys(z),{shapeFlag:fe}=Q;W.length&&fe&7&&(i&&W.some($a)&&(z=AE(z,i)),Q=sr(Q,z,!1,!0))}if(n.dirs&&(Q=sr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition){const W=Wa(Q.type)&&ym(Q)||Q;xr(W,n.transition)}return X=Q,aa(x),X}function km(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(_u(r)){if(r.type!==Gt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const bE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ua(n))&&((e||(e={}))[n]=t[n]);return e},AE=(t,e)=>{const n={};for(const s in t)(!$a(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function SE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?vd(s,o,h):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(Vm(o,s,g)&&!Ga(h,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?vd(s,o,h):!0:!!o;return!1}function vd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(!Ie(t,i)||Vm(e,t,i)&&!Ga(n,i))return!0}return!1}function Vm(t,e,n){const s=t[n],r=e[n];return n==="style"&&Se(s)&&Se(r)?!Ts(s,r):s!==r}function CE({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Dm={},Om=()=>Object.create(Dm),Nm=t=>Object.getPrototypeOf(t)===Dm;function RE(t,e,n,s=!1){const r={},i=Om();t.propsDefaults=Object.create(null),xm(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:xv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function PE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=we(r),[c]=t.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Ga(t.emitsOptions,g))continue;const T=e[g];if(c)if(Ie(i,g))T!==i[g]&&(i[g]=T,h=!0);else{const D=tn(g);r[D]=vc(c,l,D,T,t,!1)}else T!==i[g]&&(i[g]=T,h=!0)}}}else{xm(t,e,r,i)&&(h=!0);let f;for(const p in l)(!e||!Ie(e,p)&&((f=ur(p))===p||!Ie(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=vc(c,l,p,void 0,t,!0)):delete r[p]);if(i!==l)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&Fn(t.attrs,"set","")}function xm(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(bi(c))continue;const h=e[c];let f;r&&Ie(r,f=tn(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:Ga(t.emitsOptions,c)||(!(c in s)||h!==s[c])&&(s[c]=h,o=!0)}if(i){const c=we(n),h=l||Pe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=vc(r,c,p,h[p],t,!Ie(h,p))}}return o}function vc(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=Ie(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:h}=r;if(n in h)s=h[n];else{const f=Zi(r);s=h[n]=c.call(null,e),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===ur(n))&&(s=!0))}return s}const kE=new WeakMap;function Mm(t,e,n=!1){const s=n?kE:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!de(t)){const f=p=>{c=!0;const[g,T]=Mm(p,e,!0);Qe(o,g),T&&l.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Se(t)&&s.set(t,Ws),Ws;if(se(i))for(let f=0;f<i.length;f++){const p=tn(i[f]);Ed(p)&&(o[p]=Pe)}else if(i)for(const f in i){const p=tn(f);if(Ed(p)){const g=i[f],T=o[p]=se(g)||de(g)?{type:g}:Qe({},g),D=T.type;let O=!1,x=!0;if(se(D))for(let X=0;X<D.length;++X){const z=D[X],Q=de(z)&&z.name;if(Q==="Boolean"){O=!0;break}else Q==="String"&&(x=!1)}else O=de(D)&&D.name==="Boolean";T[0]=O,T[1]=x,(O||Ie(T,"default"))&&l.push(p)}}const h=[o,l];return Se(t)&&s.set(t,h),h}function Ed(t){return t[0]!=="$"&&!bi(t)}const mu=t=>t==="_"||t==="_ctx"||t==="$stable",gu=t=>se(t)?t.map(fn):[fn(t)],VE=(t,e,n)=>{if(e._n)return e;const s=fu((...r)=>gu(e(...r)),n);return s._c=!1,s},Lm=(t,e,n)=>{const s=t._ctx;for(const r in t){if(mu(r))continue;const i=t[r];if(de(i))e[r]=VE(r,i,s);else if(i!=null){const o=gu(i);e[r]=()=>o}}},Fm=(t,e)=>{const n=gu(e);t.slots.default=()=>n},Um=(t,e,n)=>{for(const s in e)(n||!mu(s))&&(t[s]=e[s])},DE=(t,e,n)=>{const s=t.slots=Om();if(t.vnode.shapeFlag&32){const r=e._;r?(Um(s,e,n),n&&Hp(s,"_",r,!0)):Lm(e,s)}else e&&Fm(t,e)},OE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Pe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Um(r,e,n):(i=!e.$stable,Lm(e,r)),o=e}else e&&(Fm(t,e),o={default:1});if(i)for(const l in r)!mu(l)&&o[l]==null&&delete r[l]},At=FE;function NE(t){return xE(t)}function xE(t,e){const n=Ha();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:T=gn,insertStaticContent:D}=t,O=(y,A,k,$=null,L=null,F=null,H=void 0,j=null,B=!!A.dynamicChildren)=>{if(y===A)return;y&&!Ir(y,A)&&($=Vn(y),qe(y,L,F,!0),y=null),A.patchFlag===-2&&(B=!1,A.dynamicChildren=null),A.dynamicChildren&&y&&y.dynamicChildren&&y.dynamicChildren.hasOnce&&(A.dynamicChildren===Ws&&(A.dynamicChildren=[]),A.dynamicChildren.hasOnce=!0);const{type:M,ref:te,shapeFlag:K}=A;switch(M){case Qa:x(y,A,k,$);break;case Gt:X(y,A,k,$);break;case Wo:y==null&&z(A,k,$,H);break;case Ce:w(y,A,k,$,L,F,H,j,B);break;default:K&1?fe(y,A,k,$,L,F,H,j,B):K&6?E(y,A,k,$,L,F,H,j,B):(K&64||K&128)&&M.process(y,A,k,$,L,F,H,j,B,xs)}te!=null&&L?Ri(te,y&&y.ref,F,A||y,!A):te==null&&y&&y.ref!=null&&Ri(y.ref,null,F,y,!0)},x=(y,A,k,$)=>{if(y==null)s(A.el=l(A.children),k,$);else{const L=A.el=y.el;A.children!==y.children&&h(L,A.children)}},X=(y,A,k,$)=>{y==null?s(A.el=c(A.children||""),k,$):A.el=y.el},z=(y,A,k,$)=>{[y.el,y.anchor]=D(y.children,A,k,$,y.el,y.anchor)},Q=({el:y,anchor:A},k,$)=>{let L;for(;y&&y!==A;)L=g(y),s(y,k,$),y=L;s(A,k,$)},W=({el:y,anchor:A})=>{let k;for(;y&&y!==A;)k=g(y),r(y),y=k;r(A)},fe=(y,A,k,$,L,F,H,j,B)=>{if(A.type==="svg"?H="svg":A.type==="math"&&(H="mathml"),y==null)pe(A,k,$,L,F,H,j,B);else{const M=y.el&&y.el._isVueCE?y.el:null;try{M&&M._beginPatch(),_(y,A,L,F,H,j,B)}finally{M&&M._endPatch()}}},pe=(y,A,k,$,L,F,H,j)=>{let B,M;const{props:te,shapeFlag:K,transition:ne,dirs:ie}=y;if(B=y.el=o(y.type,F,te&&te.is,te),K&8?f(B,y.children):K&16&&v(y.children,B,null,$,L,zl(y,F),H,j),ie&&$s(y,null,$,"created"),S(B,y,y.scopeId,H,$),te){for(const ce in te)ce!=="value"&&!bi(ce)&&i(B,ce,null,te[ce],F,$);"value"in te&&i(B,"value",null,te.value,F),(M=te.onVnodeBeforeMount)&&on(M,$,y)}ie&&$s(y,null,$,"beforeMount");const ge=ME(L,ne);ge&&ne.beforeEnter(B),s(B,A,k),((M=te&&te.onVnodeMounted)||ge||ie)&&At(()=>{try{M&&on(M,$,y),ge&&ne.enter(B),ie&&$s(y,null,$,"mounted")}finally{}},L)},S=(y,A,k,$,L)=>{if(k&&T(y,k),$)for(let F=0;F<$.length;F++)T(y,$[F]);if(L){let F=L.subTree;if(A===F||jm(F.type)&&(F.ssContent===A||F.ssFallback===A)){const H=L.vnode;S(y,H,H.scopeId,H.slotScopeIds,L.parent)}}},v=(y,A,k,$,L,F,H,j,B=0)=>{for(let M=B;M<y.length;M++){const te=y[M]=j?Ln(y[M]):fn(y[M]);O(null,te,A,k,$,L,F,H,j)}},_=(y,A,k,$,L,F,H)=>{const j=A.el=y.el;let{patchFlag:B,dynamicChildren:M,dirs:te}=A;B|=y.patchFlag&16;const K=y.props||Pe,ne=A.props||Pe;let ie;if(k&&Bs(k,!1),(ie=ne.onVnodeBeforeUpdate)&&on(ie,k,A,y),te&&$s(A,y,k,"beforeUpdate"),k&&Bs(k,!0),M&&(!y.dynamicChildren||y.dynamicChildren.length!==M.length)&&(B=0,H=!1,M=null),(K.innerHTML&&ne.innerHTML==null||K.textContent&&ne.textContent==null)&&f(j,""),M?I(y.dynamicChildren,M,j,k,$,zl(A,L),F):H||Ee(y,A,j,null,k,$,zl(A,L),F,!1),B>0){if(B&16)b(j,K,ne,k,L);else if(B&2&&K.class!==ne.class&&i(j,"class",null,ne.class,L),B&4&&i(j,"style",K.style,ne.style,L),B&8){const ge=A.dynamicProps;for(let ce=0;ce<ge.length;ce++){const ue=ge[ce],Ne=K[ue],ze=ne[ue];(ze!==Ne||ue==="value")&&i(j,ue,Ne,ze,L,k)}}B&1&&y.children!==A.children&&f(j,A.children)}else!H&&M==null&&b(j,K,ne,k,L);((ie=ne.onVnodeUpdated)||te)&&At(()=>{ie&&on(ie,k,A,y),te&&$s(A,y,k,"updated")},$)},I=(y,A,k,$,L,F,H)=>{for(let j=0;j<A.length;j++){const B=y[j],M=A[j],te=B.el||Ec(B),K=te&&(B.type===Ce||!Ir(B,M)||B.shapeFlag&198)?p(te):k;O(B,M,K,null,$,L,F,H,!0)}},b=(y,A,k,$,L)=>{if(A!==k){if(A!==Pe)for(const F in A)!bi(F)&&!(F in k)&&i(y,F,A[F],null,L,$);for(const F in k){if(bi(F))continue;const H=k[F],j=A[F];H!==j&&F!=="value"&&i(y,F,j,H,L,$)}"value"in k&&i(y,"value",A.value,k.value,L)}},w=(y,A,k,$,L,F,H,j,B)=>{const M=A.el=y?y.el:l(""),te=A.anchor=y?y.anchor:l("");let{patchFlag:K,dynamicChildren:ne,slotScopeIds:ie}=A;ie&&(j=j?j.concat(ie):ie),y==null?(s(M,k,$),s(te,k,$),v(A.children||[],k,te,L,F,H,j,B)):K>0&&K&64&&ne&&y.dynamicChildren&&y.dynamicChildren.length===ne.length?(I(y.dynamicChildren,ne,k,L,F,H,j),(A.key!=null||L&&A===L.subTree)&&$m(y,A,!0)):Ee(y,A,k,te,L,F,H,j,B)},E=(y,A,k,$,L,F,H,j,B)=>{A.slotScopeIds=j,y==null?A.shapeFlag&512?L.ctx.activate(A,k,$,H,B):ke(A,k,$,L,F,H,B):vt(y,A,B)},ke=(y,A,k,$,L,F,H)=>{const j=y.component=zE(y,$,L);if(pu(y)&&(j.ctx.renderer=xs),WE(j,!1,H),j.asyncDep){if(L&&L.registerDep(j,He,H,F),!y.el){const B=j.subTree=xt(Gt);X(null,B,A,k),y.placeholder=B.el}}else He(j,y,A,k,L,F,H)},vt=(y,A,k)=>{const $=A.component=y.component;if(SE(y,A,k))if($.asyncDep&&!$.asyncResolved){A.el=y.el,A.placeholder=y.placeholder,Ae($,A,k);return}else $.next=A,$.update();else A.el=y.el,A.placeholder=y.placeholder,$.vnode=A},He=(y,A,k,$,L,F,H)=>{const j=()=>{if(y.isMounted){let{next:K,bu:ne,u:ie,parent:ge,vnode:ce}=y;{const Ut=Bm(y);if(Ut){K&&(K.el=ce.el,Ae(y,K,H)),Ut.asyncDep.then(()=>{At(()=>{y.isUnmounted||M()},L)});return}}let ue=K,Ne;Bs(y,!1),K?(K.el=ce.el,Ae(y,K,H)):K=ce,ne&&qo(ne),(Ne=K.props&&K.props.onVnodeBeforeUpdate)&&on(Ne,ge,K,ce),Bs(y,!0);const ze=yd(y),Vt=y.subTree;y.subTree=ze,O(Vt,ze,p(Vt.el),Vn(Vt),y,L,F),K.el=ze.el,ue===null&&CE(y,ze.el),ie&&At(ie,L),(Ne=K.props&&K.props.onVnodeUpdated)&&At(()=>on(Ne,ge,K,ce),L)}else{let K;const{el:ne,props:ie}=A,{bm:ge,m:ce,parent:ue,root:Ne,type:ze}=y,Vt=Pi(A);Bs(y,!1),ge&&qo(ge),!Vt&&(K=ie&&ie.onVnodeBeforeMount)&&on(K,ue,A),Bs(y,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle(ze,y.parent?y.parent.type:void 0);const Ut=y.subTree=yd(y);O(null,Ut,k,$,y,L,F),A.el=Ut.el}if(ce&&At(ce,L),!Vt&&(K=ie&&ie.onVnodeMounted)){const Ut=A;At(()=>on(K,ue,Ut),L)}(A.shapeFlag&256||ue&&Pi(ue.vnode)&&ue.vnode.shapeFlag&256)&&y.a&&At(y.a,L),y.isMounted=!0,A=k=$=null}};y.scope.on();const B=y.effect=new Kp(j);y.scope.off();const M=y.update=B.run.bind(B),te=y.job=B.runIfDirty.bind(B);te.i=y,te.id=y.uid,B.scheduler=()=>du(te),Bs(y,!0),M()},Ae=(y,A,k)=>{A.component=y;const $=y.vnode.props;y.vnode=A,y.next=null,PE(y,A.props,$,k),OE(y,A.children,k),bn(),dm(y),An()},Ee=(y,A,k,$,L,F,H,j,B=!1)=>{const M=y&&y.children,te=y?y.shapeFlag:0,K=A.children,{patchFlag:ne,shapeFlag:ie}=A;if(ne>0){if(ne&128){Ds(M,K,k,$,L,F,H,j,B);return}else if(ne&256){Qt(M,K,k,$,L,F,H,j,B);return}}ie&8?(te&16&&Ns(M,L,F),K!==M&&f(k,K)):te&16?ie&16?Ds(M,K,k,$,L,F,H,j,B):Ns(M,L,F,!0):(te&8&&f(k,""),ie&16&&v(K,k,$,L,F,H,j,B))},Qt=(y,A,k,$,L,F,H,j,B)=>{y=y||Ws,A=A||Ws;const M=y.length,te=A.length,K=Math.min(M,te);let ne;for(ne=0;ne<K;ne++){const ie=A[ne]=B?Ln(A[ne]):fn(A[ne]);O(y[ne],ie,k,null,L,F,H,j,B)}M>te?Ns(y,L,F,!0,!1,K):v(A,k,$,L,F,H,j,B,K)},Ds=(y,A,k,$,L,F,H,j,B)=>{let M=0;const te=A.length;let K=y.length-1,ne=te-1;for(;M<=K&&M<=ne;){const ie=y[M],ge=A[M]=B?Ln(A[M]):fn(A[M]);if(Ir(ie,ge))O(ie,ge,k,null,L,F,H,j,B);else break;M++}for(;M<=K&&M<=ne;){const ie=y[K],ge=A[ne]=B?Ln(A[ne]):fn(A[ne]);if(Ir(ie,ge))O(ie,ge,k,null,L,F,H,j,B);else break;K--,ne--}if(M>K){if(M<=ne){const ie=ne+1,ge=ie<te?A[ie].el:$;for(;M<=ne;)O(null,A[M]=B?Ln(A[M]):fn(A[M]),k,ge,L,F,H,j,B),M++}}else if(M>ne)for(;M<=K;)qe(y[M],L,F,!0),M++;else{const ie=M,ge=M,ce=new Map;for(M=ge;M<=ne;M++){const lt=A[M]=B?Ln(A[M]):fn(A[M]);lt.key!=null&&ce.set(lt.key,M)}let ue,Ne=0;const ze=ne-ge+1;let Vt=!1,Ut=0;const Jt=new Array(ze);for(M=0;M<ze;M++)Jt[M]=0;for(M=ie;M<=K;M++){const lt=y[M];if(Ne>=ze){qe(lt,L,F,!0);continue}let bt;if(lt.key!=null)bt=ce.get(lt.key);else for(ue=ge;ue<=ne;ue++)if(Jt[ue-ge]===0&&Ir(lt,A[ue])){bt=ue;break}bt===void 0?qe(lt,L,F,!0):(Jt[bt-ge]=M+1,bt>=Ut?Ut=bt:Vt=!0,O(lt,A[bt],k,null,L,F,H,j,B),Ne++)}const ei=Vt?LE(Jt):Ws;for(ue=ei.length-1,M=ze-1;M>=0;M--){const lt=ge+M,bt=A[lt],go=A[lt+1],_o=lt+1<te?go.el||Ec(go):$;Jt[M]===0?O(null,bt,k,_o,L,F,H,j,B):Vt&&(ue<0||M!==ei[ue]?kn(bt,k,_o,2):ue--)}}},kn=(y,A,k,$,L=null)=>{const{el:F,type:H,transition:j,children:B,shapeFlag:M}=y;if(M&6){kn(y.component.subTree,A,k,$);return}if(M&128){y.suspense.move(A,k,$);return}if(M&64){H.move(y,A,k,xs);return}if(H===Ce){s(F,A,k);for(let K=0;K<B.length;K++)kn(B[K],A,k,$);s(y.anchor,A,k);return}if(H===Wo){Q(y,A,k);return}if($!==2&&M&1&&j)if($===0)j.persisted&&!F[ln]?s(F,A,k):(j.beforeEnter(F),s(F,A,k),At(()=>j.enter(F),L));else{const{leave:K,delayLeave:ne,afterLeave:ie}=j,ge=()=>{y.ctx.isUnmounted?r(F):s(F,A,k)},ce=()=>{const ue=F._isLeaving||!!F[ln];F._isLeaving&&F[ln](!0),j.persisted&&!ue?ge():K(F,()=>{ge(),ie&&ie()})};ne?ne(F,ge,ce):ce()}else s(F,A,k)},qe=(y,A,k,$=!1,L=!1)=>{const{type:F,props:H,ref:j,children:B,dynamicChildren:M,shapeFlag:te,patchFlag:K,dirs:ne,cacheIndex:ie,memo:ge}=y;if((K===-2||M&&M.hasOnce)&&(L=!1),j!=null&&(bn(),Ri(j,null,k,y,!0),An()),ie!=null&&(!y.ctx||y.ctx===A)&&(A.renderCache[ie]=void 0),te&256){A.ctx.deactivate(y);return}const ce=te&1&&ne,ue=!Pi(y);let Ne;if(ue&&(Ne=H&&H.onVnodeBeforeUnmount)&&on(Ne,A,y),te&6)Os(y.component,k,$);else{if(te&128){y.suspense.unmount(k,$);return}ce&&$s(y,null,A,"beforeUnmount"),te&64?y.type.remove(y,A,k,xs,$):M&&!M.hasOnce&&(F!==Ce||K>0&&K&64)?Ns(M,A,k,!1,!0):(F===Ce&&K&384||!L&&te&16)&&Ns(B,A,k),$&&Je(y)}const ze=ge!=null&&ie==null;(ue&&(Ne=H&&H.onVnodeUnmounted)||ce||ze)&&At(()=>{Ne&&on(Ne,A,y),ce&&$s(y,null,A,"unmounted"),ze&&(y.el=null)},k)},Je=y=>{const{type:A,el:k,anchor:$,transition:L}=y,F=A===Ce;if(F&&!L){po(k,$);return}if(A===Wo){W(y),L&&!L.persisted&&L.afterLeave&&L.afterLeave();return}const H=F?la(y):y,j=()=>{F?p(k)&&po(k,$):r(k),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(H&&H.shapeFlag&1&&L&&!L.persisted){const{leave:B,delayLeave:M}=L,te=H.el,K=()=>B(te,j);M?M(te,j,K):K()}else j()},po=(y,A)=>{let k;for(;y!==A;)k=g(y),r(y),y=k;r(A)},Os=(y,A,k)=>{const{bum:$,scope:L,job:F,subTree:H,um:j,m:B,a:M}=y;Td(B),Td(M),$&&qo($),L.stop(),F?(F.flags|=8,qe(H,y,A,k)):y.vnode.el&&H&&(H.transition=y.vnode.transition,qe(H,y,A,k)),j&&At(j,A),At(()=>{y.isUnmounted=!0},A)},Ns=(y,A,k,$=!1,L=!1,F=0)=>{for(let H=F;H<y.length;H++)qe(y[H],A,k,$,L)},Vn=y=>{if(y.shapeFlag&6)return Vn(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const A=g(y.anchor||y.el),k=A&&A[Yv];return k?g(k):A},mo=(y,A,k)=>{const $=y&&A._vnode?void 0:y&&y.component?y.component.uid:qE();Kv(()=>{y==null?A._vnode&&qe(A._vnode,null,null,!0):O(A._vnode||null,y,A,null,null,null,k),A._vnode=y},$)},xs={p:O,um:qe,m:kn,r:Je,mt:ke,mc:v,pc:Ee,pbc:I,n:Vn,o:t};return{render:mo,hydrate:void 0,createApp:EE(mo)}}function zl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Bs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ME(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $m(t,e,n=!1){const s=t.children,r=e.children;if(se(s)&&se(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Ln(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&$m(o,l)),l.type===Qa&&(l.patchFlag===-1&&(l=r[i]=Ln(l)),l.el=o.el),l.type===Gt&&!l.el&&(l.el=o.el)}}function LE(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const h=t[s];if(h!==0){if(r=n[n.length-1],t[r]<h){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Bm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bm(e)}function Td(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ec(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ec(e.subTree):null}const jm=t=>t.__isSuspense;function FE(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Wv(t)}const Ce=Symbol.for("v-fgt"),Qa=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),Wo=Symbol.for("v-stc"),Xs=[];let Ot=null;function G(t=!1){Xs.push(Ot=t?null:[])}function Hm(){Xs.pop(),Ot=Xs[Xs.length-1]||null}let $i=1;function wd(t,e=!1){$i+=t,t<0&&Ot&&e&&(Ot.hasOnce=!0)}function qm(t){return t.dynamicChildren=$i>0?Ot||Ws:null,Hm(),$i>0&&Ot&&Ot.push(t),t}function Y(t,e,n,s,r,i){return qm(V(t,e,n,s,r,i,!0))}function Mr(t,e,n,s,r){return qm(xt(t,e,n,s,r,!0))}function _u(t){return t?t.__v_isVNode===!0:!1}function Ir(t,e){return t.type===e.type&&t.key===e.key}const zm=({key:t})=>t??null,Ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||_t(t)||de(t)?{i:Ht,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,s=0,r=null,i=t===Ce?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zm(e),ref:e&&Ko(e),scopeId:mm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ht};return l?(ha(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),$i>0&&!o&&Ot&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ot.push(c),c}const xt=UE;function UE(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===dE)&&(t=Gt),_u(t)){const l=sr(t,e,!0);return n&&ha(l,n),$i>0&&!i&&Ot&&(l.shapeFlag&6?Ot[Ot.indexOf(t)]=l:Ot.push(l)),l.patchFlag=-2,l}if(JE(t)&&(t=t.__vccOpts),e){e=$E(e);let{class:l,style:c}=e;l&&!Ue(l)&&(e.class=rt(l)),Se(c)&&(hu(c)&&!se(c)&&(c=Qe({},c)),e.style=un(c))}const o=Ue(t)?1:jm(t)?128:Wa(t)?64:Se(t)?4:de(t)?2:0;return V(t,e,n,s,r,o,i,!0)}function $E(t){return t?hu(t)||Nm(t)?Qe({},t):t:null}function sr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?jE(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&zm(h),ref:e&&e.ref?n&&i?se(i)?i.concat(Ko(e)):[i,Ko(e)]:Ko(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sr(t.ssContent),ssFallback:t.ssFallback&&sr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return c&&s&&xr(f,c.clone(f)),f}function os(t=" ",e=0){return xt(Qa,null,t,e)}function BE(t,e){const n=xt(Wo,null,t);return n.staticCount=e,n}function De(t="",e=!1){return e?(G(),Mr(Gt,null,t)):xt(Gt,null,t)}function fn(t){return t==null||typeof t=="boolean"?xt(Gt):se(t)?xt(Ce,null,t.slice()):_u(t)?Ln(t):xt(Qa,null,String(t))}function Ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sr(t)}function ha(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ha(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Nm(e)?e._ctx=Ht:r===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(de(e)){if(s&65){ha(t,{default:e});return}e={default:e,_ctx:Ht},n=32}else e=String(e),s&64?(n=16,e=[os(e)]):n=8;t.children=e,t.shapeFlag|=n}function jE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=rt([e.class,s.class]));else if(r==="style")e.style=un([e.style,s.style]);else if(Ua(r)){const i=e[r],o=s[r];o&&i!==o&&!(se(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!$a(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function on(t,e,n,s=null){Kt(t,e,7,[n,s])}const HE=Rm();let Wm=0;function qE(){return Wm}function zE(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||HE,i={uid:Wm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _v(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mm(s,r),emitsOptions:Pm(s,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wE.bind(null,i),t.ce&&t.ce(i),i}let It=null;const Km=()=>It||Ht;let da,Bi;{const t=Ha(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};da=e("__VUE_INSTANCE_SETTERS__",n=>It=n),Bi=e("__VUE_SSR_SETTERS__",n=>ji=n)}const Zi=t=>{const e=It;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},Id=()=>{It&&It.scope.off(),da(null)};function Gm(t){return t.vnode.shapeFlag&4}let ji=!1;function WE(t,e=!1,n=!1){e&&Bi(e);const{props:s,children:r}=t.vnode,i=Gm(t);RE(t,s,i,e),DE(t,r,n||e);const o=i?KE(t,e):void 0;return e&&Bi(!1),o}function KE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fE);const{setup:s}=n;if(s){bn();const r=t.setupContext=s.length>1?QE(t):null,i=Zi(t),o=Yi(s,t,0,[t.props,r]),l=Up(o);if(An(),i(),(l||t.sp)&&!Pi(t)&&Em(t),l){if(o.then(Id,Id),e)return o.then(c=>{Bi(!0);try{bd(t,c,e)}finally{Bi(!1)}}).catch(c=>{za(c,t,0)});t.asyncDep=o}else bd(t,o)}else Qm(t)}function bd(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=lm(e)),Qm(t)}function Qm(t,e,n){const s=t.type;t.render||(t.render=s.render||gn);{const r=Zi(t);bn();try{pE(t)}finally{An(),r()}}}const GE={get(t,e){return ft(t,"get",""),t[e]}};function QE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,GE),slots:t.slots,emit:t.emit,expose:e}}function Ja(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(lm(Mv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ki)return ki[n](t)},has(e,n){return n in e||n in ki}})):t.proxy}function JE(t){return de(t)&&"__vccOpts"in t}const Oe=(t,e)=>Bv(t,e,ji),XE="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const Ad=typeof window<"u"&&window.trustedTypes;if(Ad)try{Tc=Ad.createPolicy("vue",{createHTML:t=>t})}catch{}const Jm=Tc?t=>Tc.createHTML(t):t=>t,YE="http://www.w3.org/2000/svg",ZE="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,Sd=Mn&&Mn.createElement("template"),eT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Mn.createElementNS(YE,t):e==="mathml"?Mn.createElementNS(ZE,t):n?Mn.createElement(t,{is:n}):Mn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Sd.innerHTML=Jm(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Sd.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},es="transition",mi="animation",Lr=Symbol("_vtc"),Xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tT=Qe({},eE,Xm),js=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cd=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function nT(t){const e={};for(const w in t)w in Xm||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,D=sT(r),O=D&&D[0],x=D&&D[1],{onBeforeEnter:X,onEnter:z,onEnterCancelled:Q,onLeave:W,onLeaveCancelled:fe,onBeforeAppear:pe=X,onAppear:S=z,onAppearCancelled:v=Q}=e,_=(w,E,ke,vt)=>{w._enterCancelled=vt,ss(w,E?f:l),ss(w,E?h:o),ke&&ke()},I=(w,E)=>{w._isLeaving=!1,ss(w,p),ss(w,T),ss(w,g),E&&E()},b=w=>(E,ke)=>{const vt=w?S:z,He=()=>_(E,w,ke);js(vt,[E,He]),Rd(()=>{ss(E,w?c:i),an(E,w?f:l),Cd(vt)||Pd(E,s,O,He)})};return Qe(e,{onBeforeEnter(w){js(X,[w]),an(w,i),an(w,o)},onBeforeAppear(w){js(pe,[w]),an(w,c),an(w,h)},onEnter:b(!1),onAppear:b(!0),onLeave(w,E){w._isLeaving=!0;const ke=()=>I(w,E);an(w,p),w._enterCancelled?(an(w,g),wc(w)):(wc(w),an(w,g)),Rd(()=>{w._isLeaving&&(ss(w,p),an(w,T),Cd(W)||Pd(w,s,x,ke))}),js(W,[w,ke])},onEnterCancelled(w){_(w,!1,void 0,!0),js(Q,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),js(v,[w])},onLeaveCancelled(w){I(w),js(fe,[w])}})}function sT(t){if(t==null)return null;if(Se(t))return[Wl(t.enter),Wl(t.leave)];{const e=Wl(t);return[e,e]}}function Wl(t){return av(t)}function an(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Lr]||(t[Lr]=new Set)).add(e)}function ss(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Lr];n&&(n.delete(e),n.size||(t[Lr]=void 0))}function Rd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let rT=0;function Pd(t,e,n,s){const r=t._endId=++rT,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Ym(t,e);if(!o)return s();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,g),i()},g=T=>{T.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(h,g)}function Ym(t,e){const n=window.getComputedStyle(t),s=D=>(n[D]||"").split(", "),r=s(`${es}Delay`),i=s(`${es}Duration`),o=kd(r,i),l=s(`${mi}Delay`),c=s(`${mi}Duration`),h=kd(l,c);let f=null,p=0,g=0;e===es?o>0&&(f=es,p=o,g=i.length):e===mi?h>0&&(f=mi,p=h,g=c.length):(p=Math.max(o,h),f=p>0?o>h?es:mi:null,g=f?f===es?i.length:c.length:0);const T=f===es&&/\b(?:transform|all)(?:,|$)/.test(s(`${es}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:T}}function kd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Vd(n)+Vd(t[s])))}function Vd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function wc(t){return(t?t.ownerDocument:document).body.offsetHeight}function iT(t,e,n){const s=t[Lr];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dd=Symbol("_vod"),Zm=Symbol("_vsh"),oT=Symbol(""),aT=/(?:^|;)\s*display\s*:/;function lT(t,e,n){const s=t.style,r=Ue(n);let i=!1;if(n&&!r){if(e)if(Ue(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&yi(s,l,"")}else for(const o in e)n[o]==null&&yi(s,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?uT(t,o,!Ue(e)&&e?e[o]:void 0,l)||yi(s,o,l):yi(s,o,"")}}else if(r){if(e!==n){const o=s[oT];o&&(n+=";"+o),s.cssText=n,i=aT.test(n)}}else e&&t.removeAttribute("style");Dd in t&&((!r||e!==n)&&(t[Dd]=i?s.display:""),t[Zm]&&(s.display="none"))}const Mo=/\s*!important$/;function yi(t,e,n){if(se(n))n.forEach(s=>yi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))Mo.test(n)?t.setProperty(e,n.replace(Mo,""),"important"):t.setProperty(e,n);else{const s=cT(t,e);Mo.test(n)?t.setProperty(ur(s),n.replace(Mo,""),"important"):t[s]=n}}const Od=["Webkit","Moz","ms"],Kl={};function cT(t,e){const n=Kl[e];if(n)return n;let s=tn(e);if(s!=="filter"&&s in t)return Kl[e]=s;s=jp(s);for(let r=0;r<Od.length;r++){const i=Od[r]+s;if(i in t)return Kl[e]=i}return e}function uT(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ue(s)&&n===s}const Nd="http://www.w3.org/1999/xlink";function xd(t,e,n,s,r,i=fv(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nd,e.slice(6,e.length)):t.setAttributeNS(Nd,e,n):n==null||i&&!qp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":In(n)?String(n):n)}function Md(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qp(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function zs(t,e,n,s){t.addEventListener(e,n,s)}function hT(t,e,n,s){t.removeEventListener(e,n,s)}const Ld=Symbol("_vei");function dT(t,e,n,s,r=null){const i=t[Ld]||(t[Ld]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=mT(e);if(s){const h=i[e]=yT(s,r);zs(t,l,h,c)}else o&&(hT(t,l,o,c),i[e]=void 0)}}const fT=/(Once|Passive|Capture)$/,pT=/^on:?(?:Once|Passive|Capture)$/;function mT(t){let e,n;for(;(n=t.match(fT))&&!pT.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):ur(t.slice(2)),e]}let Gl=0;const gT=Promise.resolve(),_T=()=>Gl||(gT.then(()=>Gl=0),Gl=Date.now());function yT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(se(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const o=r.slice(),l=[s];for(let c=0;c<o.length&&!s._stopped;c++){const h=o[c];h&&Kt(h,e,5,l)}}else Kt(r,e,5,[s])};return n.value=t,n.attached=_T(),n}const Fd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vT=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?iT(t,s,o):e==="style"?lT(t,n,s):Ua(e)?$a(e)||dT(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ET(t,e,s,o))?(Md(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xd(t,e,s,o,i,e!=="value")):t._isVueCE&&(TT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ue(s)))?Md(t,tn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xd(t,e,s,o))};function ET(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Fd(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Fd(e)&&Ue(n)?!1:e in t}function TT(t,e){const n=t._def.props;if(!n)return!1;const s=tn(e);return Array.isArray(n)?n.some(r=>tn(r)===s):Object.keys(n).some(r=>tn(r)===s)}const eg=new WeakMap,tg=new WeakMap,fa=Symbol("_moveCb"),Ud=Symbol("_enterCb"),Ic=new WeakMap,wT=t=>(delete t.props.mode,t),IT=wT({name:"TransitionGroup",props:Qe({},tT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Km(),s=Zv();let r,i,o,l;const c=()=>(l===void 0&&(l=r.length>0&&kT(r[0].el,n.vnode.el,$d(t))),l);return Im(()=>{if(Ic.delete(n),!c()){r=[],o=void 0;return}const h=$d(t);r.forEach(bT);const f=o&&PT(o,n.vnode.el);o=void 0,r.forEach(g=>AT(g,f));const p=r.filter(ST);wc(n.vnode.el),p.forEach(g=>{const T=g.el,D=T.style;an(T,h),D.transform=D.webkitTransform=D.transitionDuration="";const O=T[fa]=x=>{x&&x.target!==T||(!x||x.propertyName.endsWith("transform"))&&(T.removeEventListener("transitionend",O),T[fa]=null,ss(T,h))};T.addEventListener("transitionend",O)}),r=[]}),()=>{const h=we(t),f=nT(h);let p=h.tag||Ce;if(r=[],l=void 0,i)for(let g=0;g<i.length;g++){const T=i[g];T.el&&T.el instanceof Element&&!T.el[Zm]&&(r.push(T),xr(T,mc(T,f,s,n)),eg.set(T,Xa(T.el)))}i=e.default?vm(e.default()):[];for(let g=0;g<i.length;g++){const T=i[g];T.key!=null&&xr(T,mc(T,f,s,n))}return r.length&&(o=CT(n),Ic.set(n,c)),xt(p,null,i)}}}),ng=IT;function bT(t){const e=t.el;e[fa]&&e[fa](),e[Ud]&&e[Ud]()}function $d(t){return t.moveClass||`${t.name||"v"}-move`}function AT(t,e){tg.set(t,Xa(t.el,e))}function ST(t){const e=eg.get(t),n=tg.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el,o=i.style,l=i.getBoundingClientRect();let c=1,h=1;return i.offsetWidth&&(c=l.width/i.offsetWidth),i.offsetHeight&&(h=l.height/i.offsetHeight),(!Number.isFinite(c)||c===0)&&(c=1),(!Number.isFinite(h)||h===0)&&(h=1),Math.abs(c-1)<.01&&(c=1),Math.abs(h-1)<.01&&(h=1),o.transform=o.webkitTransform=`translate(${s/c}px,${r/h}px)`,o.transitionDuration="0s",t}}function Xa(t,e){const n=t.getBoundingClientRect();return{left:n.left-(e?e.left:0),top:n.top-(e?e.top:0)}}function CT(t){let e;for(let n=t.parent;n;n=n.parent){const s=Ic.get(n);if(s){const r=RT(n.vnode.el,t.vnode.el);r&&(e||(e=[])).push(Qe(Xa(r),{item:r,willMove:s}))}}return e}function RT(t,e){const n=t.nodeType===1?t:t.parentNode;for(;e&&e.parentNode!==n;)e=e.parentNode;if(e&&e.nodeType===1)return e}function PT(t,e){const n=t.find(s=>s.willMove()&&s.item.contains(e));return n&&Xa(n.item,n)}function kT(t,e,n){const s=t.cloneNode(),r=t[Lr];r&&r.forEach(l=>{l.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:o}=Ym(s);return i.removeChild(s),o}const pa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>qo(e,n):e};function VT(t){t.target.composing=!0}function Bd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ks=Symbol("_assign"),Lo=Symbol("_initialValue");function Ql(t,e,n){return e&&(t=t.trim()),n&&(t=ja(t)),t}const Rr={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t.parentNode&&(t.type==="text"?t[Lo]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Lo]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Ks]=pa(r);const i=s||r.props&&r.props.type==="number";zs(t,e?"change":"input",o=>{o.target.composing||t[Ks](Ql(t.value,n,i))}),(n||i)&&zs(t,"change",()=>{t.value=Ql(t.value,n,i)}),e||(zs(t,"compositionstart",VT),zs(t,"compositionend",Bd),zs(t,"change",Bd))},mounted(t,{value:e,modifiers:{trim:n,number:s}}){const r=e??"",i=t[Lo];delete t[Lo],i!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==i?t[Ks](Ql(t.value,n,s)):t.value=r},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Ks]=pa(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ja(t.value):t.value,c=e??"";if(l===c)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c)}},jd={deep:!0,created(t,{value:e,modifiers:{number:n}},s){t._modelValue=e,zs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,c=>c.selected).map(c=>n?ja(ma(c)):ma(c)),i=t.multiple,o=i?nr(t._modelValue)?new Set(r):r:r[0],l=t._pendingValue=[i,i?se(o)?r.slice():r:o];try{t[Ks](o)}finally{um(()=>{t._pendingValue===l&&(t._pendingValue=void 0)})}}),t[Ks]=pa(s)},mounted(t,{value:e}){Hd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Ks]=pa(n)},updated(t,{value:e}){const n=t._pendingValue;t._pendingValue=void 0,(!n||n[0]!==t.multiple||!DT(e,n[1],n[0]))&&Hd(t,e)}};function DT(t,e,n){if(!n||se(t))return Ts(t,e);if(nr(t)){if(t.size!==e.length)return!1;for(const s of e)if(!t.has(s))return!1;return!0}return!1}function Hd(t,e){const n=t.multiple,s=se(e);if(!(n&&!s&&!nr(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],l=ma(o);if(n)if(s){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=gv(e,l)>-1}else o.selected=e.has(l);else if(Ts(ma(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ma(t){return"_value"in t?t._value:t.value}const OT=["ctrl","shift","alt","meta"],NT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>OT.some(n=>t[`${n}Key`]&&!e.includes(n))},Go=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<e.length;o++){const l=NT[e[o]];if(l&&l(r,e))return}return t(r,...i)}))},xT=Qe({patchProp:vT},eT);let qd;function MT(){return qd||(qd=NE(xT))}const LT=((...t)=>{const e=MT().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=UT(s);if(!r)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,FT(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function FT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function UT(t){return Ue(t)?document.querySelector(t):t}const $T=()=>{};var zd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},BT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,h=c?t[r+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,T=h&63;c||(T=64,o||(g=64)),s.push(n[f],n[p],n[g],n[T])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||h==null||p==null)throw new jT;const g=i<<2|l>>4;if(s.push(g),h!==64){const T=l<<4&240|h>>2;if(s.push(T),p!==64){const D=h<<6&192|p;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HT=function(t){const e=sg(t);return rg.encodeByteArray(e,!0)},ga=function(t){return HT(t).replace(/\./g,"")},ig=function(t){try{return rg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=()=>qT().__FIREBASE_DEFAULTS__,WT=()=>{if(typeof process>"u"||typeof zd>"u")return;const t=zd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ig(t[1]);return e&&JSON.parse(e)},Ya=()=>{try{return $T()||zT()||WT()||KT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},og=t=>{var e,n;return(n=(e=Ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GT=t=>{const e=og(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ag=()=>{var t;return(t=Ya())===null||t===void 0?void 0:t.config},lg=t=>{var e;return(e=Ya())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cg(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ga(JSON.stringify(n)),ga(JSON.stringify(o)),""].join(".")}const Vi={};function XT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vi))Vi[e]?t.emulator.push(e):t.prod.push(e);return t}function YT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wd=!1;function ug(t,e){if(typeof window>"u"||typeof document>"u"||!zr(window.location.host)||Vi[t]===e||Vi[t]||Wd)return;Vi[t]=e;function n(g){return`__firebase__banner__${g}`}const s="__firebase__banner",i=XT().prod.length>0;function o(){const g=document.getElementById(s);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Wd=!0,o()},g}function f(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=YT(s),T=n("text"),D=document.getElementById(T)||document.createElement("span"),O=n("learnmore"),x=document.getElementById(O)||document.createElement("a"),X=n("preprendIcon"),z=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const Q=g.element;l(Q),f(x,O);const W=h();c(z,X),Q.append(z,D,x,W),document.body.appendChild(Q)}i?(D.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function ew(){var t;const e=(t=Ya())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rw(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iw(){return!ew()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ow(){try{return typeof indexedDB=="object"}catch{return!1}}function aw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="FirebaseError";class Jn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lw,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?cw(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Jn(r,l,s)}}function cw(t,e){return t.replace(uw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const uw=/\{\$([^}]+)}/g;function hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Kd(i)&&Kd(o)){if(!rr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Kd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function dw(t,e){const n=new fw(t,e);return n.subscribe.bind(n)}class fw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");pw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Jl),r.error===void 0&&(r.error=Jl),r.complete===void 0&&(r.complete=Jl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class ir{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new QT;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_w(e))try{this.getOrInitializeService({instanceIdentifier:qs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qs){return this.instances.has(e)}getOptions(e=qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qs){return this.component?this.component.multipleInstances?e:qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gw(t){return t===qs?void 0:t}function _w(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const vw={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},Ew=_e.INFO,Tw={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},ww=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Tw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=Ew,this._logHandler=ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const Iw=(t,e)=>e.some(n=>t instanceof n);let Gd,Qd;function bw(){return Gd||(Gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Aw(){return Qd||(Qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hg=new WeakMap,bc=new WeakMap,dg=new WeakMap,Xl=new WeakMap,vu=new WeakMap;function Sw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ps(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hg.set(n,t)}).catch(()=>{}),vu.set(e,t),e}function Cw(t){if(bc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rw(t){Ac=t(Ac)}function Pw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Yl(this),e,...n);return dg.set(s,e.sort?e.sort():[e]),ps(s)}:Aw().includes(t)?function(...e){return t.apply(Yl(this),e),ps(hg.get(this))}:function(...e){return ps(t.apply(Yl(this),e))}}function kw(t){return typeof t=="function"?Pw(t):(t instanceof IDBTransaction&&Cw(t),Iw(t,bw())?new Proxy(t,Ac):t)}function ps(t){if(t instanceof IDBRequest)return Sw(t);if(Xl.has(t))return Xl.get(t);const e=kw(t);return e!==t&&(Xl.set(t,e),vu.set(e,t)),e}const Yl=t=>vu.get(t);function Vw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=ps(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ps(o.result),c.oldVersion,c.newVersion,ps(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Dw=["get","getKey","getAll","getAllKeys","count"],Ow=["put","add","delete","clear"],Zl=new Map;function Jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zl.get(e))return Zl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ow.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Dw.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let h=c.store;return s&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),r&&c.done]))[0]};return Zl.set(e,i),i}Rw(t=>({...t,get:(e,n,s)=>Jd(e,n)||t.get(e,n,s),has:(e,n)=>!!Jd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sc="@firebase/app",Xd="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new yu("@firebase/app"),Mw="@firebase/app-compat",Lw="@firebase/analytics-compat",Fw="@firebase/analytics",Uw="@firebase/app-check-compat",$w="@firebase/app-check",Bw="@firebase/auth",jw="@firebase/auth-compat",Hw="@firebase/database",qw="@firebase/data-connect",zw="@firebase/database-compat",Ww="@firebase/functions",Kw="@firebase/functions-compat",Gw="@firebase/installations",Qw="@firebase/installations-compat",Jw="@firebase/messaging",Xw="@firebase/messaging-compat",Yw="@firebase/performance",Zw="@firebase/performance-compat",eI="@firebase/remote-config",tI="@firebase/remote-config-compat",nI="@firebase/storage",sI="@firebase/storage-compat",rI="@firebase/firestore",iI="@firebase/ai",oI="@firebase/firestore-compat",aI="firebase",lI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="[DEFAULT]",cI={[Sc]:"fire-core",[Mw]:"fire-core-compat",[Fw]:"fire-analytics",[Lw]:"fire-analytics-compat",[$w]:"fire-app-check",[Uw]:"fire-app-check-compat",[Bw]:"fire-auth",[jw]:"fire-auth-compat",[Hw]:"fire-rtdb",[qw]:"fire-data-connect",[zw]:"fire-rtdb-compat",[Ww]:"fire-fn",[Kw]:"fire-fn-compat",[Gw]:"fire-iid",[Qw]:"fire-iid-compat",[Jw]:"fire-fcm",[Xw]:"fire-fcm-compat",[Yw]:"fire-perf",[Zw]:"fire-perf-compat",[eI]:"fire-rc",[tI]:"fire-rc-compat",[nI]:"fire-gcs",[sI]:"fire-gcs-compat",[rI]:"fire-fst",[oI]:"fire-fst-compat",[iI]:"fire-vertex","fire-js":"fire-js",[aI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Map,uI=new Map,Rc=new Map;function Yd(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(Rc.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of _a.values())Yd(n,t);for(const n of uI.values())Yd(n,t);return!0}function Eu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ms=new eo("app","Firebase",hI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=lI;function fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Cc,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw ms.create("bad-app-name",{appName:String(r)});if(n||(n=ag()),!n)throw ms.create("no-options");const i=_a.get(r);if(i){if(rr(n,i.options)&&rr(s,i.config))return i;throw ms.create("duplicate-app",{appName:r})}const o=new yw(r);for(const c of Rc.values())o.addComponent(c);const l=new dI(n,s,o);return _a.set(r,l),l}function pg(t=Cc){const e=_a.get(t);if(!e&&t===Cc&&ag())return fg();if(!e)throw ms.create("no-app",{appName:t});return e}function gs(t,e,n){var s;let r=(s=cI[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}Fr(new ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="firebase-heartbeat-database",pI=1,Hi="firebase-heartbeat-store";let ec=null;function mg(){return ec||(ec=Vw(fI,pI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ms.create("idb-open",{originalErrorMessage:t.message})})),ec}async function mI(t){try{const n=(await mg()).transaction(Hi),s=await n.objectStore(Hi).get(gg(t));return await n.done,s}catch(e){if(e instanceof Jn)qn.warn(e.message);else{const n=ms.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function Zd(t,e){try{const s=(await mg()).transaction(Hi,"readwrite");await s.objectStore(Hi).put(e,gg(t)),await s.done}catch(n){if(n instanceof Jn)qn.warn(n.message);else{const s=ms.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(s.message)}}}function gg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=1024,_I=30;class yI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ef();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>_I){const o=TI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){qn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ef(),{heartbeatsToSend:s,unsentEntries:r}=vI(this._heartbeatsCache.heartbeats),i=ga(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function ef(){return new Date().toISOString().substring(0,10)}function vI(t,e=gI){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),tf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class EI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ow()?aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tf(t){return ga(JSON.stringify({version:2,heartbeats:t})).length}function TI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){Fr(new ir("platform-logger",e=>new Nw(e),"PRIVATE")),Fr(new ir("heartbeat",e=>new yI(e),"PRIVATE")),gs(Sc,Xd,t),gs(Sc,Xd,"esm2017"),gs("fire-js","")}wI("");var nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,_g;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function _(){}_.prototype=v.prototype,S.D=v.prototype,S.prototype=new _,S.prototype.constructor=S,S.C=function(I,b,w){for(var E=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)E[ke-2]=arguments[ke];return v.prototype[b].apply(I,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,v,_){_||(_=0);var I=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)I[b]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(b=0;16>b;++b)I[b]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=S.g[0],_=S.g[1],b=S.g[2];var w=S.g[3],E=v+(w^_&(b^w))+I[0]+3614090360&4294967295;v=_+(E<<7&4294967295|E>>>25),E=w+(b^v&(_^b))+I[1]+3905402710&4294967295,w=v+(E<<12&4294967295|E>>>20),E=b+(_^w&(v^_))+I[2]+606105819&4294967295,b=w+(E<<17&4294967295|E>>>15),E=_+(v^b&(w^v))+I[3]+3250441966&4294967295,_=b+(E<<22&4294967295|E>>>10),E=v+(w^_&(b^w))+I[4]+4118548399&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(b^v&(_^b))+I[5]+1200080426&4294967295,w=v+(E<<12&4294967295|E>>>20),E=b+(_^w&(v^_))+I[6]+2821735955&4294967295,b=w+(E<<17&4294967295|E>>>15),E=_+(v^b&(w^v))+I[7]+4249261313&4294967295,_=b+(E<<22&4294967295|E>>>10),E=v+(w^_&(b^w))+I[8]+1770035416&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(b^v&(_^b))+I[9]+2336552879&4294967295,w=v+(E<<12&4294967295|E>>>20),E=b+(_^w&(v^_))+I[10]+4294925233&4294967295,b=w+(E<<17&4294967295|E>>>15),E=_+(v^b&(w^v))+I[11]+2304563134&4294967295,_=b+(E<<22&4294967295|E>>>10),E=v+(w^_&(b^w))+I[12]+1804603682&4294967295,v=_+(E<<7&4294967295|E>>>25),E=w+(b^v&(_^b))+I[13]+4254626195&4294967295,w=v+(E<<12&4294967295|E>>>20),E=b+(_^w&(v^_))+I[14]+2792965006&4294967295,b=w+(E<<17&4294967295|E>>>15),E=_+(v^b&(w^v))+I[15]+1236535329&4294967295,_=b+(E<<22&4294967295|E>>>10),E=v+(b^w&(_^b))+I[1]+4129170786&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^b&(v^_))+I[6]+3225465664&4294967295,w=v+(E<<9&4294967295|E>>>23),E=b+(v^_&(w^v))+I[11]+643717713&4294967295,b=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(b^w))+I[0]+3921069994&4294967295,_=b+(E<<20&4294967295|E>>>12),E=v+(b^w&(_^b))+I[5]+3593408605&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^b&(v^_))+I[10]+38016083&4294967295,w=v+(E<<9&4294967295|E>>>23),E=b+(v^_&(w^v))+I[15]+3634488961&4294967295,b=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(b^w))+I[4]+3889429448&4294967295,_=b+(E<<20&4294967295|E>>>12),E=v+(b^w&(_^b))+I[9]+568446438&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^b&(v^_))+I[14]+3275163606&4294967295,w=v+(E<<9&4294967295|E>>>23),E=b+(v^_&(w^v))+I[3]+4107603335&4294967295,b=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(b^w))+I[8]+1163531501&4294967295,_=b+(E<<20&4294967295|E>>>12),E=v+(b^w&(_^b))+I[13]+2850285829&4294967295,v=_+(E<<5&4294967295|E>>>27),E=w+(_^b&(v^_))+I[2]+4243563512&4294967295,w=v+(E<<9&4294967295|E>>>23),E=b+(v^_&(w^v))+I[7]+1735328473&4294967295,b=w+(E<<14&4294967295|E>>>18),E=_+(w^v&(b^w))+I[12]+2368359562&4294967295,_=b+(E<<20&4294967295|E>>>12),E=v+(_^b^w)+I[5]+4294588738&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^b)+I[8]+2272392833&4294967295,w=v+(E<<11&4294967295|E>>>21),E=b+(w^v^_)+I[11]+1839030562&4294967295,b=w+(E<<16&4294967295|E>>>16),E=_+(b^w^v)+I[14]+4259657740&4294967295,_=b+(E<<23&4294967295|E>>>9),E=v+(_^b^w)+I[1]+2763975236&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^b)+I[4]+1272893353&4294967295,w=v+(E<<11&4294967295|E>>>21),E=b+(w^v^_)+I[7]+4139469664&4294967295,b=w+(E<<16&4294967295|E>>>16),E=_+(b^w^v)+I[10]+3200236656&4294967295,_=b+(E<<23&4294967295|E>>>9),E=v+(_^b^w)+I[13]+681279174&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^b)+I[0]+3936430074&4294967295,w=v+(E<<11&4294967295|E>>>21),E=b+(w^v^_)+I[3]+3572445317&4294967295,b=w+(E<<16&4294967295|E>>>16),E=_+(b^w^v)+I[6]+76029189&4294967295,_=b+(E<<23&4294967295|E>>>9),E=v+(_^b^w)+I[9]+3654602809&4294967295,v=_+(E<<4&4294967295|E>>>28),E=w+(v^_^b)+I[12]+3873151461&4294967295,w=v+(E<<11&4294967295|E>>>21),E=b+(w^v^_)+I[15]+530742520&4294967295,b=w+(E<<16&4294967295|E>>>16),E=_+(b^w^v)+I[2]+3299628645&4294967295,_=b+(E<<23&4294967295|E>>>9),E=v+(b^(_|~w))+I[0]+4096336452&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~b))+I[7]+1126891415&4294967295,w=v+(E<<10&4294967295|E>>>22),E=b+(v^(w|~_))+I[14]+2878612391&4294967295,b=w+(E<<15&4294967295|E>>>17),E=_+(w^(b|~v))+I[5]+4237533241&4294967295,_=b+(E<<21&4294967295|E>>>11),E=v+(b^(_|~w))+I[12]+1700485571&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~b))+I[3]+2399980690&4294967295,w=v+(E<<10&4294967295|E>>>22),E=b+(v^(w|~_))+I[10]+4293915773&4294967295,b=w+(E<<15&4294967295|E>>>17),E=_+(w^(b|~v))+I[1]+2240044497&4294967295,_=b+(E<<21&4294967295|E>>>11),E=v+(b^(_|~w))+I[8]+1873313359&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~b))+I[15]+4264355552&4294967295,w=v+(E<<10&4294967295|E>>>22),E=b+(v^(w|~_))+I[6]+2734768916&4294967295,b=w+(E<<15&4294967295|E>>>17),E=_+(w^(b|~v))+I[13]+1309151649&4294967295,_=b+(E<<21&4294967295|E>>>11),E=v+(b^(_|~w))+I[4]+4149444226&4294967295,v=_+(E<<6&4294967295|E>>>26),E=w+(_^(v|~b))+I[11]+3174756917&4294967295,w=v+(E<<10&4294967295|E>>>22),E=b+(v^(w|~_))+I[2]+718787259&4294967295,b=w+(E<<15&4294967295|E>>>17),E=_+(w^(b|~v))+I[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+b&4294967295,S.g[3]=S.g[3]+w&4294967295}s.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var _=v-this.blockSize,I=this.B,b=this.h,w=0;w<v;){if(b==0)for(;w<=_;)r(this,S,w),w+=this.blockSize;if(typeof S=="string"){for(;w<v;)if(I[b++]=S.charCodeAt(w++),b==this.blockSize){r(this,I),b=0;break}}else for(;w<v;)if(I[b++]=S[w++],b==this.blockSize){r(this,I),b=0;break}}this.h=b,this.o+=v},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var _=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=_&255,_/=256;for(this.u(S),S=Array(16),v=_=0;4>v;++v)for(var I=0;32>I;I+=8)S[_++]=this.g[v]>>>I&255;return S};function i(S,v){var _=l;return Object.prototype.hasOwnProperty.call(_,S)?_[S]:_[S]=v(S)}function o(S,v){this.h=v;for(var _=[],I=!0,b=S.length-1;0<=b;b--){var w=S[b]|0;I&&w==v||(_[b]=w,I=!1)}this.g=_}var l={};function c(S){return-128<=S&&128>S?i(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return x(h(-S));for(var v=[],_=1,I=0;S>=_;I++)v[I]=S/_|0,_*=4294967296;return new o(v,0)}function f(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return x(f(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(v,8)),I=p,b=0;b<S.length;b+=8){var w=Math.min(8,S.length-b),E=parseInt(S.substring(b,b+w),v);8>w?(w=h(Math.pow(v,w)),I=I.j(w).add(h(E))):(I=I.j(_),I=I.add(h(E)))}return I}var p=c(0),g=c(1),T=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-x(this).m();for(var S=0,v=1,_=0;_<this.g.length;_++){var I=this.i(_);S+=(0<=I?I:4294967296+I)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D(this))return"0";if(O(this))return"-"+x(this).toString(S);for(var v=h(Math.pow(S,6)),_=this,I="";;){var b=W(_,v).g;_=X(_,b.j(v));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(S);if(_=b,D(_))return w+I;for(;6>w.length;)w="0"+w;I=w+I}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function D(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function O(S){return S.h==-1}t.l=function(S){return S=X(this,S),O(S)?-1:D(S)?0:1};function x(S){for(var v=S.g.length,_=[],I=0;I<v;I++)_[I]=~S.g[I];return new o(_,~S.h).add(g)}t.abs=function(){return O(this)?x(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),_=[],I=0,b=0;b<=v;b++){var w=I+(this.i(b)&65535)+(S.i(b)&65535),E=(w>>>16)+(this.i(b)>>>16)+(S.i(b)>>>16);I=E>>>16,w&=65535,E&=65535,_[b]=E<<16|w}return new o(_,_[_.length-1]&-2147483648?-1:0)};function X(S,v){return S.add(x(v))}t.j=function(S){if(D(this)||D(S))return p;if(O(this))return O(S)?x(this).j(x(S)):x(x(this).j(S));if(O(S))return x(this.j(x(S)));if(0>this.l(T)&&0>S.l(T))return h(this.m()*S.m());for(var v=this.g.length+S.g.length,_=[],I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<S.g.length;b++){var w=this.i(I)>>>16,E=this.i(I)&65535,ke=S.i(b)>>>16,vt=S.i(b)&65535;_[2*I+2*b]+=E*vt,z(_,2*I+2*b),_[2*I+2*b+1]+=w*vt,z(_,2*I+2*b+1),_[2*I+2*b+1]+=E*ke,z(_,2*I+2*b+1),_[2*I+2*b+2]+=w*ke,z(_,2*I+2*b+2)}for(I=0;I<v;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=v;I<2*v;I++)_[I]=0;return new o(_,0)};function z(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function Q(S,v){this.g=S,this.h=v}function W(S,v){if(D(v))throw Error("division by zero");if(D(S))return new Q(p,p);if(O(S))return v=W(x(S),v),new Q(x(v.g),x(v.h));if(O(v))return v=W(S,x(v)),new Q(x(v.g),v.h);if(30<S.g.length){if(O(S)||O(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=v;0>=I.l(S);)_=fe(_),I=fe(I);var b=pe(_,1),w=pe(I,1);for(I=pe(I,2),_=pe(_,2);!D(I);){var E=w.add(I);0>=E.l(S)&&(b=b.add(_),w=E),I=pe(I,1),_=pe(_,1)}return v=X(S,b.j(v)),new Q(b,v)}for(b=p;0<=S.l(v);){for(_=Math.max(1,Math.floor(S.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),w=h(_),E=w.j(v);O(E)||0<E.l(S);)_-=I,w=h(_),E=w.j(v);D(w)&&(w=g),b=b.add(w),S=X(S,E)}return new Q(b,S)}t.A=function(S){return W(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)&S.i(I);return new o(_,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)|S.i(I);return new o(_,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)^S.i(I);return new o(_,this.h^S.h)};function fe(S){for(var v=S.g.length+1,_=[],I=0;I<v;I++)_[I]=S.i(I)<<1|S.i(I-1)>>>31;return new o(_,S.h)}function pe(S,v){var _=v>>5;v%=32;for(var I=S.g.length-_,b=[],w=0;w<I;w++)b[w]=0<v?S.i(w+_)>>>v|S.i(w+_+1)<<32-v:S.i(w+_);return new o(b,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,_g=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,_s=o}).apply(typeof nf<"u"?nf:typeof self<"u"?self:typeof window<"u"?window:{});var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yg,vi,vg,Qo,Pc,Eg,Tg,wg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fo=="object"&&Fo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=n(this);function r(a,u){if(u)e:{var d=s;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var P=d++;return{value:u(P,a[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}r("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function T(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function D(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,P){for(var q=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)q[Re-2]=arguments[Re];return u.prototype[C].apply(m,q)}}function O(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function x(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=a.length||0,P=m.length||0;a.length=C+P;for(let q=0;q<P;q++)a[C+q]=m[q]}else a.push(m)}}class X{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function z(a){return/^[\s\xa0]*$/.test(a)}function Q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var fe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function pe(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function S(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let P=0;P<_.length;P++)d=_[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function w(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Qt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ke{constructor(){this.h=this.g=null}add(u,d){const m=vt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var vt=new X(()=>new He,a=>a.reset());class He{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Ee=!1,Qt=new ke,Ds=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(kn)}};var kn=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){w(d)}var u=vt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Ee=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var po=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a})();function Os(a,u){if(Je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(fe){e:{try{W(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ns[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Os.aa.h.call(this)}}D(Os,Je);var Ns={2:"touch",3:"pen",4:"mouse"};Os.prototype.h=function(){Os.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),mo=0;function xs(a,u,d,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++mo,this.da=this.fa=!1}function Zr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function y(a){this.src=a,this.g={},this.h=0}y.prototype.add=function(a,u,d,m,C){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var q=k(a,u,m,C);return-1<q?(u=a[q],d||(u.fa=!1)):(u=new xs(u,this.src,P,!!m,C),u.fa=d,a.push(u)),u};function A(a,u){var d=u.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(m,C,1),P&&(Zr(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function k(a,u,d,m){for(var C=0;C<a.length;++C){var P=a[C];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==m)return C}return-1}var $="closure_lm_"+(1e6*Math.random()|0),L={};function F(a,u,d,m,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)F(a,u[P],d,m,C);return null}return d=ge(d),a&&a[Vn]?a.K(u,d,h(m)?!!m.capture:!1,C):H(a,u,d,!1,m,C)}function H(a,u,d,m,C,P){if(!u)throw Error("Invalid event type");var q=h(C)?!!C.capture:!!C,Re=ne(a);if(Re||(a[$]=Re=new y(a)),d=Re.add(u,d,m,q,P),d.proxy)return d;if(m=j(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)po||(C=q),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(te(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function j(){function a(d){return u.call(a.src,a.listener,d)}const u=K;return a}function B(a,u,d,m,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)B(a,u[P],d,m,C);else m=h(m)?!!m.capture:!!m,d=ge(d),a&&a[Vn]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],d=k(P,d,m,C),-1<d&&(Zr(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=ne(a))&&(u=a.g[u.toString()],a=-1,u&&(a=k(u,d,m,C)),(d=-1<a?u[a]:null)&&M(d))}function M(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Vn])A(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(te(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=ne(u))?(A(d,a),d.h==0&&(d.src=null,u[$]=null)):Zr(a)}}}function te(a){return a in L?L[a]:L[a]="on"+a}function K(a,u){if(a.da)a=!0;else{u=new Os(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&M(a),a=d.call(m,u)}return a}function ne(a){return a=a[$],a instanceof y?a:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(a){return typeof a=="function"?a:(a[ie]||(a[ie]=function(u){return a.handleEvent(u)}),a[ie])}function ce(){qe.call(this),this.i=new y(this),this.M=this,this.F=null}D(ce,qe),ce.prototype[Vn]=!0,ce.prototype.removeEventListener=function(a,u,d,m){B(this,a,u,d,m)};function ue(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Je(u,a);else if(u instanceof Je)u.target=u.target||a;else{var C=u;u=new Je(m,a),I(u,C)}if(C=!0,d)for(var P=d.length-1;0<=P;P--){var q=u.g=d[P];C=Ne(q,m,!0,u)&&C}if(q=u.g=a,C=Ne(q,m,!0,u)&&C,C=Ne(q,m,!1,u)&&C,d)for(P=0;P<d.length;P++)q=u.g=d[P],C=Ne(q,m,!1,u)&&C}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Zr(d[m]);delete a.g[u],a.h--}}this.F=null},ce.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},ce.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ne(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var q=u[P];if(q&&!q.da&&q.capture==d){var Re=q.listener,tt=q.ha||q.src;q.fa&&A(a.i,q),C=Re.call(tt,m)!==!1&&C}}return C&&!m.defaultPrevented}function ze(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Vt(a){a.g=ze(()=>{a.g=null,a.i&&(a.i=!1,Vt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ut extends qe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(a){qe.call(this),this.h=a,this.g={}}D(Jt,qe);var ei=[];function lt(a){pe(a.g,function(u,d){this.g.hasOwnProperty(d)&&M(u)},a),a.g={}}Jt.prototype.N=function(){Jt.aa.N.call(this),lt(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bt=l.JSON.stringify,go=l.JSON.parse,_o=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Il(){}Il.prototype.h=null;function ph(a){return a.h||(a.h=a.i())}function mh(){}var ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bl(){Je.call(this,"d")}D(bl,Je);function Al(){Je.call(this,"c")}D(Al,Je);var Ms={},gh=null;function yo(){return gh=gh||new ce}Ms.La="serverreachability";function _h(a){Je.call(this,Ms.La,a)}D(_h,Je);function ni(a){const u=yo();ue(u,new _h(u))}Ms.STAT_EVENT="statevent";function yh(a,u){Je.call(this,Ms.STAT_EVENT,a),this.stat=u}D(yh,Je);function Et(a){const u=yo();ue(u,new yh(u,a))}Ms.Ma="timingevent";function vh(a,u){Je.call(this,Ms.Ma,a),this.size=u}D(vh,Je);function si(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function ri(){this.g=!0}ri.prototype.xa=function(){this.g=!1};function Ny(a,u,d,m,C,P){a.info(function(){if(a.g)if(P)for(var q="",Re=P.split("&"),tt=0;tt<Re.length;tt++){var Te=Re[tt].split("=");if(1<Te.length){var ct=Te[0];Te=Te[1];var ut=ct.split("_");q=2<=ut.length&&ut[1]=="type"?q+(ct+"="+Te+"&"):q+(ct+"=redacted&")}}else q=null;else q=P;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+q})}function xy(a,u,d,m,C,P,q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+P+" "+q})}function pr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ly(a,d)+(m?" "+m:"")})}function My(a,u){a.info(function(){return"TIMEOUT: "+u})}ri.prototype.info=function(){};function Ly(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var q=1;q<C.length;q++)C[q]=""}}}}return bt(d)}catch{return u}}var vo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Eh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sl;function Eo(){}D(Eo,Il),Eo.prototype.g=function(){return new XMLHttpRequest},Eo.prototype.i=function(){return{}},Sl=new Eo;function Xn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Th}function Th(){this.i=null,this.g="",this.h=!1}var wh={},Cl={};function Rl(a,u,d){a.L=1,a.v=bo(Dn(u)),a.m=d,a.P=!0,Ih(a,null)}function Ih(a,u){a.F=Date.now(),To(a),a.A=Dn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Lh(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Th,a.g=td(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Ut(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(ei[0]=C.toString()),C=ei);for(var P=0;P<C.length;P++){var q=F(d,C[P],m||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ni(),Ny(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const u=this.M;u&&On(a)==3?u.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=On(this.g);var u=this.g.Ba();const _r=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||qh(this.g)))){this.J||ut!=4||u==7||(u==8||0>=_r?ni(3):ni(2)),Pl(this);var d=this.g.Z();this.X=d;t:if(bh(this)){var m=qh(this.g);a="";var C=m.length,P=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ls(this),ii(this);var q="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(P&&u==C-1)});m.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=d==200,xy(this.i,this.u,this.A,this.l,this.R,ut,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,tt=this.g;if((Re=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Re)){var Te=Re;break t}}Te=null}if(d=Te)pr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kl(this,d);else{this.o=!1,this.s=3,Et(12),Ls(this),ii(this);break e}}if(this.P){d=!0;let Xt;for(;!this.J&&this.C<q.length;)if(Xt=Fy(this,q),Xt==Cl){ut==4&&(this.s=4,Et(14),d=!1),pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==wh){this.s=4,Et(15),pr(this.i,this.l,q,"[Invalid Chunk]"),d=!1;break}else pr(this.i,this.l,Xt,null),kl(this,Xt);if(bh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||q.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)pr(this.i,this.l,q,"[Invalid Chunked Response]"),Ls(this),ii(this);else if(0<q.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Ml(ct),ct.M=!0,Et(11))}}else pr(this.i,this.l,q,null),kl(this,q);ut==4&&Ls(this),this.o&&!this.J&&(ut==4?Xh(this.j,this):(this.o=!1,To(this)))}else tv(this.g),d==400&&0<q.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Ls(this),ii(this)}}}catch{}finally{}};function bh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Fy(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Cl:(d=Number(u.substring(d,m)),isNaN(d)?wh:(m+=1,m+d>u.length?Cl:(u=u.slice(m,m+d),a.C=m+d,u)))}Xn.prototype.cancel=function(){this.J=!0,Ls(this)};function To(a){a.S=Date.now()+a.I,Ah(a,a.I)}function Ah(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=si(g(a.ba,a),u)}function Pl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(My(this.i,this.A),this.L!=2&&(ni(),Et(17)),Ls(this),this.s=2,ii(this)):Ah(this,this.S-a)};function ii(a){a.j.G==0||a.J||Xh(a.j,a)}function Ls(a){Pl(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,lt(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function kl(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Vl(d.h,a))){if(!a.K&&Vl(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ko(d),Ro(d);else break e;xl(d),Et(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=si(g(d.Za,d),6e3));if(1>=Rh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Us(d,11)}else if((a.K||d.g==a)&&ko(d),!z(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let Te=C[u];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const ct=Te[3];ct!=null&&(d.la=ct,d.j.info("VER="+d.la));const ut=Te[4];ut!=null&&(d.Aa=ut,d.j.info("SVER="+d.Aa));const _r=Te[5];_r!=null&&typeof _r=="number"&&0<_r&&(m=1.5*_r,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Xt=a.g;if(Xt){const Do=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Do){var P=m.h;P.g||Do.indexOf("spdy")==-1&&Do.indexOf("quic")==-1&&Do.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Dl(P,P.h),P.h=null))}if(m.D){const Ll=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ll&&(m.ya=Ll,xe(m.I,m.D,Ll))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var q=a;if(m.qa=ed(m,m.J?m.ia:null,m.W),q.K){Ph(m.h,q);var Re=q,tt=m.L;tt&&(Re.I=tt),Re.B&&(Pl(Re),To(Re)),m.g=q}else Qh(m);0<d.i.length&&Po(d)}else Te[0]!="stop"&&Te[0]!="close"||Us(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Us(d,7):Nl(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}ni(4)}catch{}}var Uy=class{constructor(a,u){this.g=a,this.map=u}};function Sh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ch(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rh(a){return a.h?1:a.g?a.g.size:0}function Vl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Dl(a,u){a.g?a.g.add(u):a.h=u}function Ph(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Sh.prototype.cancel=function(){if(this.i=kh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return O(a.i)}function $y(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function By(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Vh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=By(a),m=$y(a),C=m.length,P=0;P<C;P++)u.call(void 0,m[P],d&&d[P],a)}var Dh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jy(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var P=a[d].substring(0,m);C=a[d].substring(m+1)}else P=a[d];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Fs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fs){this.h=a.h,wo(this,a.j),this.o=a.o,this.g=a.g,Io(this,a.s),this.l=a.l;var u=a.i,d=new li;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Oh(this,d),this.m=a.m}else a&&(u=String(a).match(Dh))?(this.h=!1,wo(this,u[1]||"",!0),this.o=oi(u[2]||""),this.g=oi(u[3]||"",!0),Io(this,u[4]),this.l=oi(u[5]||"",!0),Oh(this,u[6]||"",!0),this.m=oi(u[7]||"")):(this.h=!1,this.i=new li(null,this.h))}Fs.prototype.toString=function(){var a=[],u=this.j;u&&a.push(ai(u,Nh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ai(u,Nh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ai(d,d.charAt(0)=="/"?zy:qy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ai(d,Ky)),a.join("")};function Dn(a){return new Fs(a)}function wo(a,u,d){a.j=d?oi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Io(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Oh(a,u,d){u instanceof li?(a.i=u,Gy(a.i,a.h)):(d||(u=ai(u,Wy)),a.i=new li(u,a.h))}function xe(a,u,d){a.i.set(u,d)}function bo(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ai(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Hy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nh=/[#\/\?@]/g,qy=/[#\?:]/g,zy=/[#\?]/g,Wy=/[#\?@]/g,Ky=/#/g;function li(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&jy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=li.prototype,t.add=function(a,u){Yn(this),this.i=null,a=mr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function xh(a,u){Yn(a),u=mr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Mh(a,u){return Yn(a),u=mr(a,u),a.g.has(u)}t.forEach=function(a,u){Yn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(u,C,m,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const C=a[m];for(let P=0;P<C.length;P++)d.push(u[m])}return d},t.V=function(a){Yn(this);let u=[];if(typeof a=="string")Mh(this,a)&&(u=u.concat(this.g.get(mr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Yn(this),this.i=null,a=mr(this,a),Mh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Lh(a,u,d){xh(a,u),0<d.length&&(a.i=null,a.g.set(mr(a,u),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const P=encodeURIComponent(String(m)),q=this.V(m);for(m=0;m<q.length;m++){var C=P;q[m]!==""&&(C+="="+encodeURIComponent(String(q[m]))),a.push(C)}}return this.i=a.join("&")};function mr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Gy(a,u){u&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(xh(this,m),Lh(this,C,d))},a)),a.j=u}function Qy(a,u){const d=new ri;if(l.Image){const m=new Image;m.onload=T(Zn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=T(Zn,d,"TestLoadImage: error",!1,u,m),m.onabort=T(Zn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=T(Zn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Jy(a,u){const d=new ri,m=new AbortController,C=setTimeout(()=>{m.abort(),Zn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(C),P.ok?Zn(d,"TestPingServer: ok",!0,u):Zn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Zn(d,"TestPingServer: error",!1,u)})}function Zn(a,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function Xy(){this.g=new _o}function Yy(a,u,d){const m=d||"";try{Vh(a,function(C,P){let q=C;h(C)&&(q=bt(C)),u.push(m+P+"="+encodeURIComponent(q))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function Ao(a){this.l=a.Ub||null,this.j=a.eb||!1}D(Ao,Il),Ao.prototype.g=function(){return new So(this.l,this.j)},Ao.prototype.i=(function(a){return function(){return a}})({});function So(a,u){ce.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(So,ce),t=So.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ci(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ci(this):ui(this),this.readyState==3&&Fh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ci(this))},t.Qa=function(a){this.g&&(this.response=a,ci(this))},t.ga=function(){this.g&&ci(this)};function ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ui(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(So.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uh(a){let u="";return pe(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ol(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Uh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):xe(a,u,d))}function Be(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Be,ce);var Zy=/^https?$/i,ev=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sl.g(),this.v=this.o?ph(this.o):ph(Sl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){$h(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ev,u,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,q]of d)this.g.setRequestHeader(P,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hh(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){$h(this,P)}};function $h(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Bh(a),Co(a)}function Bh(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),Co(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Co(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jh(this):this.bb())},t.bb=function(){jh(this)};function jh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||On(a)!=4||a.Z()!=2)){if(a.u&&On(a)==4)ze(a.Ea,0,a);else if(ue(a,"readystatechange"),On(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=q===0){var C=String(a.D).match(Dh)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Zy.test(C?C.toLowerCase():"")}d=m}if(d)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var P=2<On(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",Bh(a)}}finally{Co(a)}}}}function Co(a,u){if(a.g){Hh(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ue(a,"ready");try{d.onreadystatechange=m}catch{}}}function Hh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),go(u)}};function qh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function tv(a){const u={};a=(a.g&&2<=On(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(z(a[m]))continue;var d=b(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[C]||[];u[C]=P,P.push(d)}S(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function zh(a){this.Aa=0,this.i=[],this.j=new ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hi("baseRetryDelayMs",5e3,a),this.cb=hi("retryDelaySeedMs",1e4,a),this.Wa=hi("forwardChannelMaxRetries",2,a),this.wa=hi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Sh(a&&a.concurrentRequestLimit),this.Da=new Xy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){Et(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ed(this,null,this.W),Po(this)};function Nl(a){if(Wh(a),a.G==3){var u=a.U++,d=Dn(a.I);if(xe(d,"SID",a.K),xe(d,"RID",u),xe(d,"TYPE","terminate"),di(a,d),u=new Xn(a,a.j,u),u.L=2,u.v=bo(Dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=td(u.j,null),u.g.ea(u.v)),u.F=Date.now(),To(u)}Zh(a)}function Ro(a){a.g&&(Ml(a),a.g.cancel(),a.g=null)}function Wh(a){Ro(a),a.u&&(l.clearTimeout(a.u),a.u=null),ko(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Po(a){if(!Ch(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ae||Ds(),Ee||(Ae(),Ee=!0),Qt.add(u,a),a.B=0}}function nv(a,u){return Rh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=si(g(a.Ga,a,u),Yh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Xn(this,this.j,a);let P=this.o;if(this.S&&(P?(P=v(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Gh(this,C,u),d=Dn(this.I),xe(d,"RID",a),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),di(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(Uh(P)))+"&"+u:this.m&&Ol(d,this.m,P)),Dl(this.h,C),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",u),xe(d,"SID","null"),C.T=!0,Rl(C,d,null)):Rl(C,d,u),this.G=2}}else this.G==3&&(a?Kh(this,a):this.i.length==0||Ch(this.h)||Kh(this))};function Kh(a,u){var d;u?d=u.l:d=a.U++;const m=Dn(a.I);xe(m,"SID",a.K),xe(m,"RID",d),xe(m,"AID",a.T),di(a,m),a.m&&a.o&&Ol(m,a.m,a.o),d=new Xn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Gh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Dl(a.h,d),Rl(d,m,u)}function di(a,u){a.H&&pe(a.H,function(d,m){xe(u,m,d)}),a.l&&Vh({},function(d,m){xe(u,m,d)})}function Gh(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let P=-1;for(;;){const q=["count="+d];P==-1?0<d?(P=C[0].g,q.push("ofs="+P)):P=0:q.push("ofs="+P);let Re=!0;for(let tt=0;tt<d;tt++){let Te=C[tt].g;const ct=C[tt].map;if(Te-=P,0>Te)P=Math.max(0,C[tt].g-100),Re=!1;else try{Yy(ct,q,"req"+Te+"_")}catch{m&&m(ct)}}if(Re){m=q.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Qh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ae||Ds(),Ee||(Ae(),Ee=!0),Qt.add(u,a),a.v=0}}function xl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=si(g(a.Fa,a),Yh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Jh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=si(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Ro(this),Jh(this))};function Ml(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Jh(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Dn(a.qa);xe(u,"RID","rpc"),xe(u,"SID",a.K),xe(u,"AID",a.T),xe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(u,"TO",a.ja),xe(u,"TYPE","xmlhttp"),di(a,u),a.m&&a.o&&Ol(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=bo(Dn(u)),d.m=null,d.P=!0,Ih(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ro(this),xl(this),Et(19))};function ko(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Xh(a,u){var d=null;if(a.g==u){ko(a),Ml(a),a.g=null;var m=2}else if(Vl(a.h,u))d=u.D,Ph(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;m=yo(),ue(m,new vh(m,d)),Po(a)}else Qh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&nv(a,u)||m==2&&xl(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:Us(a,5);break;case 4:Us(a,10);break;case 3:Us(a,6);break;default:Us(a,2)}}}function Yh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Us(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new Fs(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wo(m,"https"),bo(m),C?Qy(m.toString(),d):Jy(m.toString(),d)}else Et(2);a.G=0,a.l&&a.l.sa(u),Zh(a),Wh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Zh(a){if(a.G=0,a.ka=[],a.l){const u=kh(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function ed(a,u,d){var m=d instanceof Fs?Dn(d):new Fs(d);if(m.g!="")u&&(m.g=u+"."+m.g),Io(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new Fs(null);m&&wo(P,m),u&&(P.g=u),C&&Io(P,C),d&&(P.l=d),m=P}return d=a.D,u=a.ya,d&&u&&xe(m,d,u),xe(m,"VER",a.la),di(a,m),m}function td(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Be(new Ao({eb:d})):new Be(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nd(){}t=nd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Vo(){}Vo.prototype.g=function(a,u){return new Dt(a,u)};function Dt(a,u){ce.call(this),this.g=new zh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!z(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!z(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new gr(this)}D(Dt,ce),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Nl(this.g)},Dt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=bt(a),a=d);u.i.push(new Uy(u.Ya++,a)),u.G==3&&Po(u)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Nl(this.g),delete this.g,Dt.aa.N.call(this)};function sd(a){bl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}D(sd,bl);function rd(){Al.call(this),this.status=1}D(rd,Al);function gr(a){this.g=a}D(gr,nd),gr.prototype.ua=function(){ue(this.g,"a")},gr.prototype.ta=function(a){ue(this.g,new sd(a))},gr.prototype.sa=function(a){ue(this.g,new rd)},gr.prototype.ra=function(){ue(this.g,"b")},Vo.prototype.createWebChannel=Vo.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,wg=function(){return new Vo},Tg=function(){return yo()},Eg=Ms,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vo.NO_ERROR=0,vo.TIMEOUT=8,vo.HTTP_ERROR=6,Qo=vo,Eh.COMPLETE="complete",vg=Eh,mh.EventType=ti,ti.OPEN="a",ti.CLOSE="b",ti.ERROR="c",ti.MESSAGE="d",ce.prototype.listen=ce.prototype.K,vi=mh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,yg=Be}).apply(typeof Fo<"u"?Fo:typeof self<"u"?self:typeof window<"u"?window:{});const sf="@firebase/firestore",rf="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new yu("@firebase/firestore");function br(){return or.logLevel}function J(t,...e){if(or.logLevel<=_e.DEBUG){const n=e.map(Tu);or.debug(`Firestore (${Kr}): ${t}`,...n)}}function zn(t,...e){if(or.logLevel<=_e.ERROR){const n=e.map(Tu);or.error(`Firestore (${Kr}): ${t}`,...n)}}function Is(t,...e){if(or.logLevel<=_e.WARN){const n=e.map(Tu);or.warn(`Firestore (${Kr}): ${t}`,...n)}}function Tu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Ig(t,s,n)}function Ig(t,e,n){let s=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw zn(s),new Error(s)}function be(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||Ig(e,r,s)}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class II{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(dt.UNAUTHENTICATED)))}shutdown(){}}class bI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class AI{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ys;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ys,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ys)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new bg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class SI{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CI{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new SI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class of{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const s=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new of(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new of(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=PI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function kc(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),r=e.codePointAt(n);if(s!==r){if(s<128&&r<128)return me(s,r);{const i=Ag(),o=kI(i.encode(af(t,n)),i.encode(af(e,n)));return o!==0?o:me(s,r)}}n+=s>65535?2:1}return me(t.length,e.length)}function af(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function kI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return me(t[n],e[n]);return me(t.length,e.length)}function Ur(t,e,n){return t.length===e.length&&t.every(((s,r)=>n(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="__name__";class cn{constructor(e,n,s){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&oe(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=cn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const s=cn.isNumericId(e),r=cn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?cn.extractNumericId(e).compare(cn.extractNumericId(n)):kc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _s.fromString(e.substring(4,e.length-2))}}class Me extends cn{construct(e,n,s){return new Me(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new Z(U.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((r=>r.length>0)))}return new Me(n)}static emptyPath(){return new Me([])}}const VI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends cn{construct(e,n,s){return new it(e,n,s)}static isValidIdentifier(e){return VI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lf}static keyField(){return new it([lf])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new Z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new Z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new Z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Me.fromString(e))}static fromName(e){return new re(Me.fromString(e).popFirst(5))}static empty(){return new re(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t,e,n){if(!n)throw new Z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DI(t,e,n,s){if(e===!0&&s===!0)throw new Z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cf(t){if(!re.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uf(t){if(re.isDocumentKey(t))throw new Z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Iu(t);throw new Z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function no(t,e){if(!Cg(t))throw new Z(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const o=t[s];if(r&&typeof o!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${s}' field to equal '${i.value}'`;break}}if(n)throw new Z(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=-62135596800,df=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*df);return new Le(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hf)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/df}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(no(e,Le._jsonSchema))return new Le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:Ke("string",Le._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Le(0,0))}static max(){return new le(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=-1;function OI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=le.fromTimestamp(s===1e9?new Le(n+1,0):new Le(n,s));return new bs(r,re.empty(),e)}function NI(t){return new bs(t.readTime,t.key,qi)}class bs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new bs(le.min(),re.empty(),qi)}static max(){return new bs(le.max(),re.empty(),qi)}}function xI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==MI)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):N.reject(n)}static resolve(e){return new N(((n,s)=>{n(e)}))}static reject(e){return new N(((n,s)=>{s(e)}))}static waitFor(e){return new N(((n,s)=>{let r=0,i=0,o=!1;e.forEach((l=>{++r,l.next((()=>{++i,o&&i===r&&n()}),(c=>s(c)))})),o=!0,i===r&&n()}))}static or(e){let n=N.resolve(!1);for(const s of e)n=n.next((r=>r?N.resolve(r):s()));return n}static forEach(e,n){const s=[];return e.forEach(((r,i)=>{s.push(n.call(this,r,i))})),this.waitFor(s)}static mapArray(e,n){return new N(((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next((f=>{o[h]=f,++l,l===i&&s(o)}),(f=>r(f)))}}))}static doWhile(e,n){return new N(((s,r)=>{const i=()=>{e()===!0?n().next((()=>{i()}),r):s()};i()}))}}function FI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this._e(s),this.ae=s=>n.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Za.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=-1;function el(t){return t==null}function ya(t){return t===0&&1/t==-1/0}function UI(t){return typeof t=="number"&&Number.isInteger(t)&&!ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="";function $I(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ff(e)),e=BI(t.get(n),e);return ff(e)}function BI(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case Rg:n+="";break;default:n+=i}}return n}function ff(t){return t+Rg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uo(this.root,e,this.comparator,!0)}}class Uo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??st.RED,this.left=r??st.EMPTY,this.right=i??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new st(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return st.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mf(this.data.getIterator())}getIteratorFrom(e){return new mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Ye(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ur(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kg("Invalid base64 string: "+i):i}})(e);return new at(n)}static fromUint8Array(e){const n=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const jI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=jI.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="server_timestamp",Dg="__type__",Og="__previous_value__",Ng="__local_write_time__";function Au(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dg])===null||n===void 0?void 0:n.stringValue)===Vg}function tl(t){const e=t.mapValue.fields[Og];return Au(e)?tl(e):e}function zi(t){const e=As(t.mapValue.fields[Ng].timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,s,r,i,o,l,c,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const va="(default)";class Wi{constructor(e,n){this.projectId=e,this.database=n||va}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database===va}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="__type__",qI="__max__",$o={mapValue:{}},Mg="__vector__",Ea="value";function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Au(t)?4:WI(t)?9007199254740991:zI(t)?10:11:oe(28295,{value:t})}function Cn(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zi(t).isEqual(zi(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=As(r.timestampValue),l=As(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(r,i){return Ss(r.bytesValue).isEqual(Ss(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(r,i){return je(r.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(r.geoPointValue.longitude)===je(i.geoPointValue.longitude)})(t,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return je(r.integerValue)===je(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=je(r.doubleValue),l=je(i.doubleValue);return o===l?ya(o)===ya(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Ur(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return(function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(pf(o)!==pf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Cn(o[c],l[c])))return!1;return!0})(t,e);default:return oe(52216,{left:t})}}function Ki(t,e){return(t.values||[]).find((n=>Cn(n,e)))!==void 0}function $r(t,e){if(t===e)return 0;const n=Cs(t),s=Cs(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=je(i.integerValue||i.doubleValue),c=je(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return gf(t.timestampValue,e.timestampValue);case 4:return gf(zi(t),zi(e));case 5:return kc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Ss(i),c=Ss(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=me(l[h],c[h]);if(f!==0)return f}return me(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=me(je(i.latitude),je(o.latitude));return l!==0?l:me(je(i.longitude),je(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return _f(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var l,c,h,f;const p=i.fields||{},g=o.fields||{},T=(l=p[Ea])===null||l===void 0?void 0:l.arrayValue,D=(c=g[Ea])===null||c===void 0?void 0:c.arrayValue,O=me(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:_f(T,D)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===$o.mapValue&&o===$o.mapValue)return 0;if(i===$o.mapValue)return 1;if(o===$o.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=kc(c[p],f[p]);if(g!==0)return g;const T=$r(l[c[p]],h[f[p]]);if(T!==0)return T}return me(c.length,f.length)})(t.mapValue,e.mapValue);default:throw oe(23264,{le:n})}}function gf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=As(t),s=As(e),r=me(n.seconds,s.seconds);return r!==0?r:me(n.nanos,s.nanos)}function _f(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=$r(n[r],s[r]);if(i)return i}return me(n.length,s.length)}function Br(t){return Vc(t)}function Vc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const s=As(n);return`time(${s.seconds},${s.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Ss(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Vc(i);return s+"]"})(t.arrayValue):"mapValue"in t?(function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Vc(n.fields[o])}`;return r+"}"})(t.mapValue):oe(61005,{value:t})}function Jo(t){switch(Cs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tl(t);return e?16+Jo(e):16;case 5:return 2*t.stringValue.length;case 6:return Ss(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Jo(i)),0)})(t.arrayValue);case 10:case 11:return(function(s){let r=0;return ks(s.fields,((i,o)=>{r+=i.length+Jo(o)})),r})(t.mapValue);default:throw oe(13486,{value:t})}}function Dc(t){return!!t&&"integerValue"in t}function Su(t){return!!t&&"arrayValue"in t}function yf(t){return!!t&&"nullValue"in t}function vf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xo(t){return!!t&&"mapValue"in t}function zI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[xg])===null||n===void 0?void 0:n.stringValue)===Mg}function Di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Di(s))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Di(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===qI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Di(n)}setAll(e){let n=it.emptyPath(),s={},r=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=Di(o):r.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Xo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ks(n,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Rt(Di(this.value))}}function Lg(t){const e=[];return ks(t.fields,((n,s)=>{const r=new it([n]);if(Xo(s)){const i=Lg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,le.min(),le.min(),le.min(),Rt.empty(),0)}static newFoundDocument(e,n,s,r){return new pt(e,1,n,le.min(),s,r,0)}static newNoDocument(e,n){return new pt(e,2,n,le.min(),le.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,le.min(),le.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.position=e,this.inclusive=n}}function Ef(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=re.comparator(re.fromName(o.referenceValue),n.key):s=$r(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Tf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function KI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{}class Xe extends Fg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new QI(e,n,s):n==="array-contains"?new YI(e,s):n==="in"?new ZI(e,s):n==="not-in"?new e0(e,s):n==="array-contains-any"?new t0(e,s):new Xe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new JI(e,s):new XI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison($r(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison($r(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rn extends Fg{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Rn(e,n)}matches(e){return Ug(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ug(t){return t.op==="and"}function $g(t){return GI(t)&&Ug(t)}function GI(t){for(const e of t.filters)if(e instanceof Rn)return!1;return!0}function Oc(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Br(t.value);if($g(t))return t.filters.map((e=>Oc(e))).join(",");{const e=t.filters.map((n=>Oc(n))).join(",");return`${t.op}(${e})`}}function Bg(t,e){return t instanceof Xe?(function(s,r){return r instanceof Xe&&s.op===r.op&&s.field.isEqual(r.field)&&Cn(s.value,r.value)})(t,e):t instanceof Rn?(function(s,r){return r instanceof Rn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,l)=>i&&Bg(o,r.filters[l])),!0):!1})(t,e):void oe(19439)}function jg(t){return t instanceof Xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Br(n.value)}`})(t):t instanceof Rn?(function(n){return n.op.toString()+" {"+n.getFilters().map(jg).join(" ,")+"}"})(t):"Filter"}class QI extends Xe{constructor(e,n,s){super(e,n,s),this.key=re.fromName(s.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class JI extends Xe{constructor(e,n){super(e,"in",n),this.keys=Hg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class XI extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Hg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Hg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((s=>re.fromName(s.referenceValue)))}class YI extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Su(n)&&Ki(n.arrayValue,this.value)}}class ZI extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ki(this.value.arrayValue,n)}}class e0 extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ki(this.value.arrayValue,n)}}class t0 extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Su(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Ki(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Pe=null}}function wf(t,e=null,n=[],s=[],r=null,i=null,o=null){return new n0(t,e,n,s,r,i,o)}function Cu(t){const e=he(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Oc(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),el(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Br(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Br(s))).join(",")),e.Pe=n}return e.Pe}function Ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tf(t.startAt,e.startAt)&&Tf(t.endAt,e.endAt)}function Nc(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function s0(t,e,n,s,r,i,o,l){return new nl(t,e,n,s,r,i,o,l)}function Pu(t){return new nl(t)}function If(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r0(t){return t.collectionGroup!==null}function Oi(t){const e=he(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(it.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new wa(i,s))})),n.has(it.keyField().canonicalString())||e.Te.push(new wa(it.keyField(),s))}return e.Te}function yn(t){const e=he(t);return e.Ie||(e.Ie=i0(e,Oi(t))),e.Ie}function i0(t,e){if(t.limitType==="F")return wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new wa(r.field,i)}));const n=t.endAt?new Ta(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ta(t.startAt.position,t.startAt.inclusive):null;return wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function xc(t,e,n){return new nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sl(t,e){return Ru(yn(t),yn(e))&&t.limitType===e.limitType}function qg(t){return`${Cu(yn(t))}|lt:${t.limitType}`}function Ar(t){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((r=>jg(r))).join(", ")}]`),el(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((r=>Br(r))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((r=>Br(r))).join(",")),`Target(${s})`})(yn(t))}; limitType=${t.limitType})`}function rl(t,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):re.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(t,e)&&(function(s,r){for(const i of Oi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(t,e)&&(function(s,r){return!(s.startAt&&!(function(o,l,c){const h=Ef(o,l,c);return o.inclusive?h<=0:h<0})(s.startAt,Oi(s),r)||s.endAt&&!(function(o,l,c){const h=Ef(o,l,c);return o.inclusive?h>=0:h>0})(s.endAt,Oi(s),r))})(t,e)}function o0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zg(t){return(e,n)=>{let s=!1;for(const r of Oi(t)){const i=a0(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function a0(t,e,n){const s=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?$r(c,h):oe(42886)})(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,((n,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Pg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new $e(re.comparator);function Wn(){return l0}const Wg=new $e(re.comparator);function Ei(...t){let e=Wg;for(const n of t)e=e.insert(n.key,n);return e}function Kg(t){let e=Wg;return t.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Gs(){return Ni()}function Gg(){return Ni()}function Ni(){return new dr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const c0=new $e(re.comparator),u0=new Ye(re.comparator);function ye(...t){let e=u0;for(const n of t)e=e.add(n);return e}const h0=new Ye(me);function d0(){return h0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function Qg(t){return{integerValue:""+t}}function f0(t,e){return UI(e)?Qg(e):ku(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this._=void 0}}function p0(t,e,n){return t instanceof Ia?(function(r,i){const o={fields:{[Dg]:{stringValue:Vg},[Ng]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Au(i)&&(i=tl(i)),i&&(o.fields[Og]=i),{mapValue:o}})(n,e):t instanceof Gi?Xg(t,e):t instanceof Qi?Yg(t,e):(function(r,i){const o=Jg(r,i),l=bf(o)+bf(r.Ee);return Dc(o)&&Dc(r.Ee)?Qg(l):ku(r.serializer,l)})(t,e)}function m0(t,e,n){return t instanceof Gi?Xg(t,e):t instanceof Qi?Yg(t,e):n}function Jg(t,e){return t instanceof ba?(function(s){return Dc(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class Ia extends il{}class Gi extends il{constructor(e){super(),this.elements=e}}function Xg(t,e){const n=Zg(e);for(const s of t.elements)n.some((r=>Cn(r,s)))||n.push(s);return{arrayValue:{values:n}}}class Qi extends il{constructor(e){super(),this.elements=e}}function Yg(t,e){let n=Zg(e);for(const s of t.elements)n=n.filter((r=>!Cn(r,s)));return{arrayValue:{values:n}}}class ba extends il{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function bf(t){return je(t.integerValue||t.doubleValue)}function Zg(t){return Su(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function g0(t,e){return t.field.isEqual(e.field)&&(function(s,r){return s instanceof Gi&&r instanceof Gi||s instanceof Qi&&r instanceof Qi?Ur(s.elements,r.elements,Cn):s instanceof ba&&r instanceof ba?Cn(s.Ee,r.Ee):s instanceof Ia&&r instanceof Ia})(t.transform,e.transform)}class _0{constructor(e,n){this.version=e,this.transformResults=n}}class kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ol{}function e_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new al(t.key,kt.none()):new so(t.key,t.data,kt.none());{const n=t.data,s=Rt.empty();let r=new Ye(it.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Vs(t.key,s,new Nt(r.toArray()),kt.none())}}function y0(t,e,n){t instanceof so?(function(r,i,o){const l=r.value.clone(),c=Sf(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Vs?(function(r,i,o){if(!Yo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Sf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(t_(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function xi(t,e,n,s){return t instanceof so?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const h=i.value.clone(),f=Cf(i.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,s):t instanceof Vs?(function(i,o,l,c){if(!Yo(i.precondition,o))return l;const h=Cf(i.fieldTransforms,c,o),f=o.data;return f.setAll(t_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,s):(function(i,o,l){return Yo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function v0(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Jg(s.transform,r||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(s.field,i))}return n||null}function Af(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ur(s,r,((i,o)=>g0(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends ol{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Vs extends ol{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function t_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Sf(t,e,n){const s=new Map;be(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,m0(o,l,n[r]))}return s}function Cf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,p0(i,o,e))}return s}class al extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E0 extends ol{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&y0(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=xi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=xi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Gg();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=e_(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(le.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ye())}isEqual(e){return this.batchId===e.batchId&&Ur(this.mutations,e.mutations,((n,s)=>Af(n,s)))&&Ur(this.baseMutations,e.baseMutations,((n,s)=>Af(n,s)))}}class Vu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){be(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=(function(){return c0})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Vu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ve;function b0(t){switch(t){case U.OK:return oe(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function n_(t){if(t===void 0)return zn("GRPC error has no .code"),U.UNKNOWN;switch(t){case We.OK:return U.OK;case We.CANCELLED:return U.CANCELLED;case We.UNKNOWN:return U.UNKNOWN;case We.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case We.INTERNAL:return U.INTERNAL;case We.UNAVAILABLE:return U.UNAVAILABLE;case We.UNAUTHENTICATED:return U.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case We.NOT_FOUND:return U.NOT_FOUND;case We.ALREADY_EXISTS:return U.ALREADY_EXISTS;case We.PERMISSION_DENIED:return U.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case We.ABORTED:return U.ABORTED;case We.OUT_OF_RANGE:return U.OUT_OF_RANGE;case We.UNIMPLEMENTED:return U.UNIMPLEMENTED;case We.DATA_LOSS:return U.DATA_LOSS;default:return oe(39323,{code:t})}}(ve=We||(We={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new _s([4294967295,4294967295],0);function Rf(t){const e=Ag().encode(t),n=new _g;return n.update(e),new Uint8Array(n.digest())}function Pf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([n,s],0),new _s([r,i],0)]}class Du{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ti(`Invalid padding: ${n}`);if(s<0)throw new Ti(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ti(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ti(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=_s.fromNumber(this.fe)}pe(e,n,s){let r=e.add(n.multiply(_s.fromNumber(s)));return r.compare(A0)===1&&(r=new _s([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Rf(e),[s,r]=Pf(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(s,r,i);if(!this.ye(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Du(i,r,n);return s.forEach((l=>o.insert(l))),o}insert(e){if(this.fe===0)return;const n=Rf(e),[s,r]=Pf(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(s,r,i);this.we(o)}}we(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ro.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ll(le.min(),r,new $e(me),Wn(),ye())}}class ro{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ro(s,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,s,r){this.Se=e,this.removedTargetIds=n,this.key=s,this.be=r}}class s_{constructor(e,n){this.targetId=e,this.De=n}}class r_{constructor(e,n,s=at.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class kf{constructor(){this.ve=0,this.Ce=Vf(),this.Fe=at.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ye(),n=ye(),s=ye();return this.Ce.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:oe(38017,{changeType:i})}})),new ro(this.Fe,this.Me,e,n,s)}ke(){this.xe=!1,this.Ce=Vf()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class S0{constructor(e){this.We=e,this.Ge=new Map,this.ze=Wn(),this.je=Bo(),this.Je=Bo(),this.He=new $e(me)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const s=this.tt(n);switch(e.state){case 0:this.nt(n)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),s.Be(e.resumeToken));break;default:oe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((s,r)=>{this.nt(r)&&n(r)}))}it(e){const n=e.targetId,s=e.De.count,r=this.st(n);if(r){const i=r.target;if(Nc(i))if(s===0){const o=new re(i.path);this.Xe(n,o,pt.newNoDocument(o,le.min()))}else be(s===1,20013,{expectedCount:s});else{const o=this.ot(n);if(o!==s){const l=this._t(e),c=l?this.ut(l,e,o):1;if(c!==0){this.rt(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=Ss(s).toUint8Array()}catch(c){if(c instanceof kg)return Is("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Du(o,r,i)}catch(c){return Is(c instanceof Ti?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,s){return n.De.count===s-this.ht(e,n.targetId)?0:2}ht(e,n){const s=this.We.getRemoteKeysForTarget(n);let r=0;return s.forEach((i=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),r++)})),r}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const l=this.st(o);if(l){if(i.current&&Nc(l.target)){const c=new re(l.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,pt.newNoDocument(c,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let s=ye();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const r=new ll(e,n,this.He,this.ze,s);return this.ze=Wn(),this.je=Bo(),this.Je=Bo(),this.He=new $e(me),r}Ze(e,n){if(!this.nt(e))return;const s=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,s),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,n)?r.qe(n,1):r.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),s&&(this.ze=this.ze.insert(n,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new kf,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ye(me),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ye(me),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new kf),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Bo(){return new $e(re.comparator)}function Vf(){return new $e(re.comparator)}const C0={asc:"ASCENDING",desc:"DESCENDING"},R0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P0={and:"AND",or:"OR"};class k0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mc(t,e){return t.useProto3Json||el(e)?e:{value:e}}function Aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function i_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function V0(t,e){return Aa(t,e.toTimestamp())}function vn(t){return be(!!t,49232),le.fromTimestamp((function(n){const s=As(n);return new Le(s.seconds,s.nanos)})(t))}function Ou(t,e){return Lc(t,e).canonicalString()}function Lc(t,e){const n=(function(r){return new Me(["projects",r.projectId,"databases",r.database])})(t).child("documents");return e===void 0?n:n.child(e)}function o_(t){const e=Me.fromString(t);return be(h_(e),10190,{key:e.toString()}),e}function Fc(t,e){return Ou(t.databaseId,e.path)}function tc(t,e){const n=o_(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(l_(n))}function a_(t,e){return Ou(t.databaseId,e)}function D0(t){const e=o_(t);return e.length===4?Me.emptyPath():l_(e)}function Uc(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function l_(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Df(t,e,n){return{name:Fc(t,e),fields:n.value.mapValue.fields}}function O0(t,e){let n;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string",58123),at.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),at.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(h){const f=h.code===void 0?U.UNKNOWN:n_(h.code);return new Z(f,h.message||"")})(o);n=new r_(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=tc(t,s.document.name),i=vn(s.document.updateTime),o=s.document.createTime?vn(s.document.createTime):le.min(),l=new Rt({mapValue:{fields:s.document.fields}}),c=pt.newFoundDocument(r,i,o,l),h=s.targetIds||[],f=s.removedTargetIds||[];n=new Zo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=tc(t,s.document),i=s.readTime?vn(s.readTime):le.min(),o=pt.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Zo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=tc(t,s.document),i=s.removedTargetIds||[];n=new Zo([],i,r,null)}else{if(!("filter"in e))return oe(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new I0(r,i),l=s.targetId;n=new s_(l,o)}}return n}function N0(t,e){let n;if(e instanceof so)n={update:Df(t,e.key,e.value)};else if(e instanceof al)n={delete:Fc(t,e.key)};else if(e instanceof Vs)n={update:Df(t,e.key,e.data),updateMask:H0(e.fieldMask)};else{if(!(e instanceof E0))return oe(16599,{Rt:e.type});n={verify:Fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const l=o.transform;if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ba)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw oe(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:V0(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)})(t,e.precondition)),n}function x0(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map((n=>(function(r,i){let o=r.updateTime?vn(r.updateTime):vn(i);return o.isEqual(le.min())&&(o=vn(i)),new _0(o,r.transformResults||[])})(n,e)))):[]}function M0(t,e){return{documents:[a_(t,e.path)]}}function L0(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=a_(t,r);const i=(function(h){if(h.length!==0)return u_(Rn.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Sr(g.field),direction:$0(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Mc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:r}}function F0(t){let e=D0(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){be(s===1,65062);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=c_(p);return g instanceof Rn&&$g(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(D){return new wa(Cr(D.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(g)))})(n.orderBy));let l=null;n.limit&&(l=(function(p){let g;return g=typeof p=="object"?p.value:p,el(g)?null:g})(n.limit));let c=null;n.startAt&&(c=(function(p){const g=!!p.before,T=p.values||[];return new Ta(T,g)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const g=!p.before,T=p.values||[];return new Ta(T,g)})(n.endAt)),s0(e,r,o,i,l,"F",c,h)}function U0(t,e){const n=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:r})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function c_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Cr(n.unaryFilter.field);return Xe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Cr(n.unaryFilter.field);return Xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cr(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cr(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Xe.create(Cr(n.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Rn.create(n.compositeFilter.filters.map((s=>c_(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return oe(1026)}})(n.compositeFilter.op))})(t):oe(30097,{filter:t})}function $0(t){return C0[t]}function B0(t){return R0[t]}function j0(t){return P0[t]}function Sr(t){return{fieldPath:t.canonicalString()}}function Cr(t){return it.fromServerFormat(t.fieldPath)}function u_(t){return t instanceof Xe?(function(n){if(n.op==="=="){if(vf(n.value))return{unaryFilter:{field:Sr(n.field),op:"IS_NAN"}};if(yf(n.value))return{unaryFilter:{field:Sr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vf(n.value))return{unaryFilter:{field:Sr(n.field),op:"IS_NOT_NAN"}};if(yf(n.value))return{unaryFilter:{field:Sr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Sr(n.field),op:B0(n.op),value:n.value}}})(t):t instanceof Rn?(function(n){const s=n.getFilters().map((r=>u_(r)));return s.length===1?s[0]:{compositeFilter:{op:j0(n.op),filters:s}}})(t):oe(54877,{filter:t})}function H0(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function h_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,s,r,i=le.min(),o=le.min(),l=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new us(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.gt=e}}function z0(t){const e=F0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.Dn=new K0}addToCollectionParentIndex(e,n){return this.Dn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(bs.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(bs.min())}updateCollectionGroup(e,n,s){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class K0{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ye(Me.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ye(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},d_=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(d_,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new jr(0)}static ur(){return new jr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="LruGarbageCollector",G0=1048576;function xf([t,e],[n,s]){const r=me(t,n);return r===0?me(e,s):r}class Q0{constructor(e){this.Tr=e,this.buffer=new Ye(xf),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();xf(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class J0{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){J(Nf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qr(n)?J(Nf,"Ignoring IndexedDB error during garbage collection: ",n):await Gr(n)}await this.Rr(3e5)}))}}class X0{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Za.ue);const s=new Q0(n);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.gr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Of)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Of):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let s,r,i,o,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,n)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(h=Date.now(),br()<=_e.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p}))))}}function Y0(t,e){return new X0(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.changes=new dr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?N.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,n)))).next((r=>(s!==null&&xi(s.mutation,r,Nt.empty(),Le.now()),r)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,ye()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=ye()){const r=Gs();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,s).next((i=>{let o=Ei();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const s=Gs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,ye())))}populateOverlays(e,n,s){const r=[];return s.forEach((i=>{n.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,s,r){let i=Wn();const o=Ni(),l=(function(){return Ni()})();return n.forEach(((c,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof Vs)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),xi(f.mutation,h,f.mutation.getFieldMask(),Le.now())):o.set(h.key,Nt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>{var p;return l.set(h,new eb(f,(p=o.get(h))!==null&&p!==void 0?p:null))})),l)))}recalculateAndSaveOverlays(e,n){const s=Ni();let r=new $e(((o,l)=>o-l)),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const h=n.get(c);if(h===null)return;let f=s.get(c)||Nt.empty();f=l.applyToLocalView(h,f),s.set(c,f);const p=(r.get(l.batchId)||ye()).add(c);r=r.insert(l.batchId,p)}))})).next((()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Gg();f.forEach((g=>{if(!i.has(g)){const T=e_(n.get(g),s.get(g));T!==null&&p.set(g,T),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return N.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,r){return(function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):N.resolve(Gs());let l=qi,c=i;return o.next((h=>N.forEach(h,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{c=c.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,ye()))).next((f=>({batchId:l,changes:Kg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((s=>{let r=Ei();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Ei();return this.indexManager.getCollectionParents(e,i).next((l=>N.forEach(l,(c=>{const h=(function(p,g){return new nl(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r)))).next((o=>{i.forEach(((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))}));let l=Ei();return o.forEach(((c,h)=>{const f=i.get(c);f!==void 0&&xi(f.mutation,h,Nt.empty(),Le.now()),rl(n,h)&&(l=l.insert(c,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return N.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(r){return{id:r.id,version:r.version,createTime:vn(r.createTime)}})(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(r){return{name:r.name,query:z0(r.bundledQuery),readTime:vn(r.readTime)}})(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.overlays=new $e(re.comparator),this.kr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gs();return N.forEach(n,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((r,i)=>{this.wt(e,n,i)})),N.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(s)),N.resolve()}getOverlaysForCollection(e,n,s){const r=Gs(),i=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return N.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new $e(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=Gs(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Gs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=r)););return N.resolve(l)}wt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new w0(n,s));let i=this.kr.get(n);i===void 0&&(i=ye(),this.kr.set(n,i)),this.kr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.qr=new Ye(et.Qr),this.$r=new Ye(et.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const s=new et(e,n);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new et(e,n))}Gr(e,n){e.forEach((s=>this.removeReference(s,n)))}zr(e){const n=new re(new Me([])),s=new et(n,e),r=new et(n,e+1),i=[];return this.$r.forEachInRange([s,r],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new re(new Me([])),s=new et(n,e),r=new et(n,e+1);let i=ye();return this.$r.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new et(e,0),s=this.qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class et{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return re.comparator(e.key,n.key)||me(e.Hr,n.Hr)}static Ur(e,n){return me(e.Hr,n.Hr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ye(et.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new T0(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.Yr=this.Yr.add(new et(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Xr(s),i=r<0?0:r;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?bu:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new et(n,0),r=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],(o=>{const l=this.Zr(o.Hr);i.push(l)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ye(me);return n.forEach((r=>{const i=new et(r,0),o=new et(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(l=>{s=s.add(l.Hr)}))})),N.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;re.isDocumentKey(i)||(i=i.child(""));const o=new et(new re(i),0);let l=new Ye(me);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(l=l.add(c.Hr)),!0)}),o),N.resolve(this.ei(l))}ei(e){const n=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&n.push(r)})),n}removeMutationBatch(e,n){be(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return N.forEach(n.mutations,(r=>{const i=new et(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,n){const s=new et(n,0),r=this.Yr.firstAfterOrEqual(s);return N.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.ni=e,this.docs=(function(){return new $e(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ni(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return N.resolve(s?s.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let s=Wn();return n.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():pt.newInvalidDocument(r))})),N.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Wn();const o=n.path,l=new re(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||xI(NI(f),s)<=0||(r.has(f.key)||rl(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,s,r){oe(9500)}ri(e,n){return N.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new ab(this)}getSize(e){return N.resolve(this.size)}}class ab extends Z0{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?n.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)})),N.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.persistence=e,this.ii=new dr((n=>Cu(n)),Ru),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.si=0,this.oi=new Nu,this.targetCount=0,this._i=jr.ar()}forEachTarget(e,n){return this.ii.forEach(((s,r)=>n(r))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.si&&(this.si=n),N.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new jr(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.hr(n),N.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.ii.forEach(((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),N.waitFor(i).next((()=>r))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const s=this.ii.get(n)||null;return N.resolve(s)}addMatchingKeys(e,n,s){return this.oi.Kr(n,s),N.resolve()}removeMatchingKeys(e,n,s){this.oi.Gr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const s=this.oi.Jr(n);return N.resolve(s)}containsKey(e,n){return N.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.ai={},this.overlays={},this.ui=new Za(0),this.ci=!1,this.ci=!0,this.li=new rb,this.referenceDelegate=e(this),this.hi=new lb(this),this.indexManager=new W0,this.remoteDocumentCache=(function(r){return new ob(r)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new q0(n),this.Ti=new nb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ai[e.toKey()];return s||(s=new ib(n,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,s){J("MemoryPersistence","Starting transaction:",e);const r=new cb(this.ui.next());return this.referenceDelegate.Ii(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,n){return N.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,n))))}}class cb extends LI{constructor(e){super(),this.currentSequenceNumber=e}}class xu{constructor(e){this.persistence=e,this.Ai=new Nu,this.Ri=null}static Vi(e){return new xu(e)}get mi(){if(this.Ri)return this.Ri;throw oe(60996)}addReference(e,n,s){return this.Ai.addReference(s,n),this.mi.delete(s.toString()),N.resolve()}removeReference(e,n,s){return this.Ai.removeReference(s,n),this.mi.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),N.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((r=>this.mi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((r=>{r.forEach((i=>this.mi.add(i.toString())))})).next((()=>s.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,(s=>{const r=re.fromPath(s);return this.fi(e,r).next((i=>{i||n.removeEntry(r,le.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((s=>{s?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return N.or([()=>N.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Sa{constructor(e,n){this.persistence=e,this.gi=new dr((s=>$I(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Y0(this,n)}static Vi(e,n){return new Sa(e,n)}Ii(){}di(e){return N.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((r=>s+r))))}yr(e){let n=0;return this.gr(e,(s=>{n++})).next((()=>n))}gr(e,n){return N.forEach(this.gi,((s,r)=>this.Sr(e,s,r).next((i=>i?N.resolve():n(r)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,(o=>this.Sr(e,o,n).next((l=>{l||(s++,i.removeEntry(o,le.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),N.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),N.resolve()}removeReference(e,n,s){return this.gi.set(s,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),N.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Jo(e.data.value)),n}Sr(e,n,s){return N.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.gi.get(n);return N.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Is=s,this.ds=r}static Es(e,n){let s=ye(),r=ye();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Mu(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return iw()?8:FI(yt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new ub;return this.ws(e,n,o).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,n,o,l.size)}))})).next((()=>i.result))}Ss(e,n,s,r){return s.documentReadCount<this.Vs?(br()<=_e.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Ar(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(br()<=_e.DEBUG&&J("QueryEngine","Query:",Ar(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(br()<=_e.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Ar(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):N.resolve())}ps(e,n){if(If(n))return N.resolve(null);let s=yn(n);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(n.limit!==null&&r===1&&(n=xc(n,null,"F"),s=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const o=ye(...i);return this.gs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,s).next((c=>{const h=this.bs(n,l);return this.Ds(n,h,o,c.readTime)?this.ps(e,xc(n,null,"F")):this.vs(e,h,n,c)}))))})))))}ys(e,n,s,r){return If(n)||r.isEqual(le.min())?N.resolve(null):this.gs.getDocuments(e,s).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,s,r)?N.resolve(null):(br()<=_e.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ar(n)),this.vs(e,o,n,OI(r,qi)).next((l=>l)))}))}bs(e,n){let s=new Ye(zg(e));return n.forEach(((r,i)=>{rl(e,i)&&(s=s.add(i))})),s}Ds(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,n,s){return br()<=_e.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Ar(n)),this.gs.getDocumentsMatchingQuery(e,n,bs.min(),s)}vs(e,n,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="LocalStore",db=3e8;class fb{constructor(e,n,s,r){this.persistence=e,this.Cs=n,this.serializer=r,this.Fs=new $e(me),this.Ms=new dr((i=>Cu(i)),Ru),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function pb(t,e,n,s){return new fb(t,e,n,s)}async function p_(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],l=[];let c=ye();for(const h of r){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(s,c).next((h=>({Bs:h,removedBatchIds:o,addedBatchIds:l})))}))}))}function mb(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,f){const p=h.batch,g=p.keys();let T=N.resolve();return g.forEach((D=>{T=T.next((()=>f.getEntry(c,D))).next((O=>{const x=h.docVersions.get(D);be(x!==null,48541),O.version.compareTo(x)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))}))})),T.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(n,s,e,i).next((()=>i.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(s,r)))}))}function m_(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function gb(t,e){const n=he(t),s=e.snapshotVersion;let r=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});r=n.Fs;const l=[];e.targetChanges.forEach(((f,p)=>{const g=r.get(p);if(!g)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(at.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,s)),r=r.insert(p,T),(function(O,x,X){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=db?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0})(g,T,f)&&l.push(n.hi.updateTargetData(i,T))}));let c=Wn(),h=ye();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),l.push(_b(i,o,e.documentUpdates).next((f=>{c=f.Ls,h=f.ks}))),!s.isEqual(le.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(f)}return N.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(n.Fs=r,i)))}function _b(t,e,n){let s=ye(),r=ye();return n.forEach((i=>s=s.add(i))),e.getEntries(t,s).next((i=>{let o=Wn();return n.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):J(Lu,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:o,ks:r}}))}function yb(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=bu),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function vb(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return n.hi.getTargetData(s,e).next((i=>i?(r=i,N.resolve(r)):n.hi.allocateTargetId(s).next((o=>(r=new us(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.hi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=n.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(s.targetId,s),n.Ms.set(e,s.targetId)),s}))}async function $c(t,e,n){const s=he(t),r=s.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(o=>s.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Qr(o))throw o;J(Lu,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function Mf(t,e,n){const s=he(t);let r=le.min(),i=ye();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,h,f){const p=he(c),g=p.Ms.get(f);return g!==void 0?N.resolve(p.Fs.get(g)):p.hi.getTargetData(h,f)})(s,o,yn(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,n?r:le.min(),n?i:ye()))).next((l=>(Eb(s,o0(e),l),{documents:l,qs:i})))))}function Eb(t,e,n){let s=t.xs.get(e)||le.min();n.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),t.xs.set(e,s)}class Lf{constructor(){this.activeTargetIds=d0()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tb{constructor(){this.Fo=new Lf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,s){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Lf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="ConnectivityMonitor";class Uf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){J(Ff,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){J(Ff,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo=null;function Bc(){return jo===null?jo=(function(){return 268435456+Math.round(2147483648*Math.random())})():jo++,"0x"+jo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="RestConnection",Ib={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===va?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,n,s,r,i){const o=Bc(),l=this.Go(e,n.toUriEncodedString());J(nc,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,r,i);const{host:h}=new URL(l),f=zr(h);return this.jo(e,l,c,s,f).then((p=>(J(nc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Is(nc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",s),p}))}Jo(e,n,s,r,i,o){return this.Wo(e,n,s,r,i)}zo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Kr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Go(e,n){const s=Ib[e];return`${this.$o}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class Sb extends bb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,s,r,i){const o=Bc();return new Promise(((l,c)=>{const h=new yg;h.setWithCredentials(!0),h.listenOnce(vg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Qo.NO_ERROR:const p=h.getResponseJson();J(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Qo.TIMEOUT:J(ht,`RPC '${e}' ${o} timed out`),c(new Z(U.DEADLINE_EXCEEDED,"Request time out"));break;case Qo.HTTP_ERROR:const g=h.getStatus();if(J(ht,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const D=T==null?void 0:T.error;if(D&&D.status&&D.message){const O=(function(X){const z=X.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(z)>=0?z:U.UNKNOWN})(D.status);c(new Z(O,D.message))}else c(new Z(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new Z(U.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{J(ht,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);J(ht,`RPC '${e}' ${o} sending request:`,r),h.send(n,"POST",f,s,15)}))}P_(e,n,s){const r=Bc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=wg(),l=Tg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const f=i.join("");J(ht,`Creating RPC '${e}' stream ${r}: ${f}`,c);const p=o.createWebChannel(f,c);this.T_(p);let g=!1,T=!1;const D=new Ab({Ho:x=>{T?J(ht,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(g||(J(ht,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),J(ht,`RPC '${e}' stream ${r} sending:`,x),p.send(x))},Yo:()=>p.close()}),O=(x,X,z)=>{x.listen(X,(Q=>{try{z(Q)}catch(W){setTimeout((()=>{throw W}),0)}}))};return O(p,vi.EventType.OPEN,(()=>{T||(J(ht,`RPC '${e}' stream ${r} transport opened.`),D.s_())})),O(p,vi.EventType.CLOSE,(()=>{T||(T=!0,J(ht,`RPC '${e}' stream ${r} transport closed`),D.__(),this.I_(p))})),O(p,vi.EventType.ERROR,(x=>{T||(T=!0,Is(ht,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),D.__(new Z(U.UNAVAILABLE,"The operation could not be completed")))})),O(p,vi.EventType.MESSAGE,(x=>{var X;if(!T){const z=x.data[0];be(!!z,16349);const Q=z,W=(Q==null?void 0:Q.error)||((X=Q[0])===null||X===void 0?void 0:X.error);if(W){J(ht,`RPC '${e}' stream ${r} received error:`,W);const fe=W.status;let pe=(function(_){const I=We[_];if(I!==void 0)return n_(I)})(fe),S=W.message;pe===void 0&&(pe=U.INTERNAL,S="Unknown error status: "+fe+" with message "+W.message),T=!0,D.__(new Z(pe,S)),p.close()}else J(ht,`RPC '${e}' stream ${r} received:`,z),D.a_(z)}})),O(l,Eg.STAT_EVENT,(x=>{x.stat===Pc.PROXY?J(ht,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===Pc.NOPROXY&&J(ht,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{D.o_()}),0),D}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function sc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){return new k0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,n-s);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="PersistentStream";class __{constructor(e,n,s,r,i,o,l,c){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new g_(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.b_===n&&this.W_(s,r)}),(s=>{e((()=>{const r=new Z(U.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)}))}))}W_(e,n){const s=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((r=>{s((()=>this.G_(r)))})),this.stream.onMessage((r=>{s((()=>++this.C_==1?this.j_(r):this.onNext(r)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return J($f,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(J($f,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cb extends __{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=O0(this.serializer,e),s=(function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?vn(o.readTime):le.min()})(e);return this.listener.J_(n,s)}H_(e){const n={};n.database=Uc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Nc(c)?{documents:M0(i,c)}:{query:L0(i,c).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=i_(i,o.resumeToken);const h=Mc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(le.min())>0){l.readTime=Aa(i,o.snapshotVersion.toTimestamp());const h=Mc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const s=U0(this.serializer,e);s&&(n.labels=s),this.k_(n)}Y_(e){const n={};n.database=Uc(this.serializer),n.removeTarget=e,this.k_(n)}}class Rb extends __{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=x0(e.writeResults,e.commitTime),s=vn(e.commitTime);return this.listener.ta(s,n)}na(){const e={};e.database=Uc(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>N0(this.serializer,s)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{}class kb extends Pb{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Lc(n,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(U.UNKNOWN,i.toString())}))}Jo(e,n,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Jo(e,Lc(n,s),r,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(U.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Vb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(zn(n),this._a=!1):J("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="RemoteStore";class Db{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{s.enqueueAndForget((async()=>{fr(this)&&(J(ar,"Restarting streams for network reachability change."),await(async function(c){const h=he(c);h.Ia.add(4),await io(h),h.Aa.set("Unknown"),h.Ia.delete(4),await ul(h)})(this))}))})),this.Aa=new Vb(s,r)}}async function ul(t){if(fr(t))for(const e of t.da)await e(!0)}async function io(t){for(const e of t.da)await e(!1)}function y_(t,e){const n=he(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Bu(n)?$u(n):Jr(n).x_()&&Uu(n,e))}function Fu(t,e){const n=he(t),s=Jr(n);n.Ta.delete(e),s.x_()&&v_(n,e),n.Ta.size===0&&(s.x_()?s.B_():fr(n)&&n.Aa.set("Unknown"))}function Uu(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Jr(t).H_(e)}function v_(t,e){t.Ra.$e(e),Jr(t).Y_(e)}function $u(t){t.Ra=new S0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Jr(t).start(),t.Aa.aa()}function Bu(t){return fr(t)&&!Jr(t).M_()&&t.Ta.size>0}function fr(t){return he(t).Ia.size===0}function E_(t){t.Ra=void 0}async function Ob(t){t.Aa.set("Online")}async function Nb(t){t.Ta.forEach(((e,n)=>{Uu(t,e)}))}async function xb(t,e){E_(t),Bu(t)?(t.Aa.la(e),$u(t)):t.Aa.set("Unknown")}async function Mb(t,e,n){if(t.Aa.set("Online"),e instanceof r_&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ta.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ta.delete(l),r.Ra.removeTarget(l))})(t,e)}catch(s){J(ar,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ca(t,s)}else if(e instanceof Zo?t.Ra.Ye(e):e instanceof s_?t.Ra.it(e):t.Ra.et(e),!n.isEqual(le.min()))try{const s=await m_(t.localStore);n.compareTo(s)>=0&&await(function(i,o){const l=i.Ra.Pt(o);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,h)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),v_(i,c);const p=new us(f.target,c,h,f.sequenceNumber);Uu(i,p)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(s){J(ar,"Failed to raise snapshot:",s),await Ca(t,s)}}async function Ca(t,e,n){if(!Qr(e))throw e;t.Ia.add(1),await io(t),t.Aa.set("Offline"),n||(n=()=>m_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{J(ar,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ul(t)}))}function T_(t,e){return e().catch((n=>Ca(t,n,e)))}async function hl(t){const e=he(t),n=Rs(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:bu;for(;Lb(e);)try{const r=await yb(e.localStore,s);if(r===null){e.Pa.length===0&&n.B_();break}s=r.batchId,Fb(e,r)}catch(r){await Ca(e,r)}w_(e)&&I_(e)}function Lb(t){return fr(t)&&t.Pa.length<10}function Fb(t,e){t.Pa.push(e);const n=Rs(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function w_(t){return fr(t)&&!Rs(t).M_()&&t.Pa.length>0}function I_(t){Rs(t).start()}async function Ub(t){Rs(t).na()}async function $b(t){const e=Rs(t);for(const n of t.Pa)e.X_(n.mutations)}async function Bb(t,e,n){const s=t.Pa.shift(),r=Vu.from(s,e,n);await T_(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await hl(t)}async function jb(t,e){e&&Rs(t).Z_&&await(async function(s,r){if((function(o){return b0(o)&&o!==U.ABORTED})(r.code)){const i=s.Pa.shift();Rs(s).N_(),await T_(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await hl(s)}})(t,e),w_(t)&&I_(t)}async function Bf(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),J(ar,"RemoteStore received new credentials");const s=fr(n);n.Ia.add(3),await io(n),s&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ul(n)}async function Hb(t,e){const n=he(t);e?(n.Ia.delete(2),await ul(n)):e||(n.Ia.add(2),await io(n),n.Aa.set("Unknown"))}function Jr(t){return t.Va||(t.Va=(function(n,s,r){const i=he(n);return i.ia(),new Cb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Zo:Ob.bind(null,t),e_:Nb.bind(null,t),n_:xb.bind(null,t),J_:Mb.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Bu(t)?$u(t):t.Aa.set("Unknown")):(await t.Va.stop(),E_(t))}))),t.Va}function Rs(t){return t.ma||(t.ma=(function(n,s,r){const i=he(n);return i.ia(),new Rb(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:Ub.bind(null,t),n_:jb.bind(null,t),ea:$b.bind(null,t),ta:Bb.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await hl(t)):(await t.ma.stop(),t.Pa.length>0&&(J(ar,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new ju(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Qr(t))return new Z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{static emptySet(e){return new kr(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||re.comparator(n.key,s.key):(n,s)=>re.comparator(n.key,s.key),this.keyedMap=Ei(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new kr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.fa=new $e(re.comparator)}track(e){const n=e.doc.key,s=this.fa.get(n);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(n,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(n):e.type===1&&s.type===2?this.fa=this.fa.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):oe(63341,{At:e,ga:s}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,s)=>{e.push(s)})),e}}class Hr{constructor(e,n,s,r,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Hr(e,n,kr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class zb{constructor(){this.queries=Hf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,s){const r=he(n),i=r.queries;r.queries=Hf(),i.forEach(((o,l)=>{for(const c of l.wa)c.onError(s)}))})(this,new Z(U.ABORTED,"Firestore shutting down"))}}function Hf(){return new dr((t=>qg(t)),sl)}async function Wb(t,e){const n=he(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new qb,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await n.onListen(r,!0);break;case 1:i.ya=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Hu(o,`Initialization of query '${Ar(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&qu(n)}async function Kb(t,e){const n=he(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function Gb(t,e){const n=he(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.wa)l.Ca(r)&&(s=!0);o.ya=r}}s&&qu(n)}function Qb(t,e,n){const s=he(t),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(n);s.queries.delete(e)}function qu(t){t.Da.forEach((e=>{e.next()}))}var jc,qf;(qf=jc||(jc={})).Fa="default",qf.Cache="cache";class Jb{constructor(e,n,s){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Hr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const s=n!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==jc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.key=e}}class A_{constructor(e){this.key=e}}class Xb{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ye(),this.mutatedKeys=ye(),this.Xa=zg(e),this.eu=new kr(this.Xa)}get tu(){return this.Ha}nu(e,n){const s=n?n.ru:new jf,r=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((f,p)=>{const g=r.get(f),T=rl(this.query,p)?p:null,D=!!g&&this.mutatedKeys.has(g.key),O=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let x=!1;g&&T?g.data.isEqual(T.data)?D!==O&&(s.track({type:3,doc:T}),x=!0):this.iu(g,T)||(s.track({type:2,doc:T}),x=!0,(c&&this.Xa(T,c)>0||h&&this.Xa(T,h)<0)&&(l=!0)):!g&&T?(s.track({type:0,doc:T}),x=!0):g&&!T&&(s.track({type:1,doc:g}),x=!0,(c||h)&&(l=!0)),x&&(T?(o=o.add(T),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{eu:o,ru:s,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(T,D){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{At:x})}};return O(T)-O(D)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(s),r=r!=null&&r;const l=n&&!r?this.ou():[],c=this.Za.size===0&&this.current&&!r?1:0,h=c!==this.Ya;return this.Ya=c,o.length!==0||h?{snapshot:new Hr(this.query,e.eu,i,o,e.mutatedKeys,c===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new jf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ye(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const n=[];return e.forEach((s=>{this.Za.has(s)||n.push(new A_(s))})),this.Za.forEach((s=>{e.has(s)||n.push(new b_(s))})),n}uu(e){this.Ha=e.qs,this.Za=ye();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Hr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const zu="SyncEngine";class Yb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Zb{constructor(e){this.key=e,this.lu=!1}}class eA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new dr((l=>qg(l)),sl),this.Tu=new Map,this.Iu=new Set,this.du=new $e(re.comparator),this.Eu=new Map,this.Au=new Nu,this.Ru={},this.Vu=new Map,this.mu=jr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function tA(t,e,n=!0){const s=V_(t);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await S_(s,e,n,!0),r}async function nA(t,e){const n=V_(t);await S_(n,e,!0,!1)}async function S_(t,e,n,s){const r=await vb(t.localStore,yn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await sA(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&y_(t.remoteStore,r),l}async function sA(t,e,n,s,r){t.gu=(p,g,T)=>(async function(O,x,X,z){let Q=x.view.nu(X);Q.Ds&&(Q=await Mf(O.localStore,x.query,!1).then((({documents:S})=>x.view.nu(S,Q))));const W=z&&z.targetChanges.get(x.targetId),fe=z&&z.targetMismatches.get(x.targetId)!=null,pe=x.view.applyChanges(Q,O.isPrimaryClient,W,fe);return Wf(O,x.targetId,pe._u),pe.snapshot})(t,p,g,T);const i=await Mf(t.localStore,e,!0),o=new Xb(e,i.qs),l=o.nu(i.documents),c=ro.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),h=o.applyChanges(l,t.isPrimaryClient,c);Wf(t,n,h._u);const f=new Yb(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function rA(t,e,n){const s=he(t),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter((o=>!sl(o,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await $c(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Fu(s.remoteStore,r.targetId),Hc(s,r.targetId)})).catch(Gr)):(Hc(s,r.targetId),await $c(s.localStore,r.targetId,!0))}async function iA(t,e){const n=he(t),s=n.Pu.get(e),r=n.Tu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Fu(n.remoteStore,s.targetId))}async function oA(t,e,n){const s=fA(t);try{const r=await(function(o,l){const c=he(o),h=Le.now(),f=l.reduce(((T,D)=>T.add(D.key)),ye());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let D=Wn(),O=ye();return c.Os.getEntries(T,f).next((x=>{D=x,D.forEach(((X,z)=>{z.isValidDocument()||(O=O.add(X))}))})).next((()=>c.localDocuments.getOverlayedDocuments(T,D))).next((x=>{p=x;const X=[];for(const z of l){const Q=v0(z,p.get(z.key).overlayedDocument);Q!=null&&X.push(new Vs(z.key,Q,Lg(Q.value.mapValue),kt.exists(!0)))}return c.mutationQueue.addMutationBatch(T,h,X,l)})).next((x=>{g=x;const X=x.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(T,x.batchId,X)}))})).then((()=>({batchId:g.batchId,changes:Kg(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,l,c){let h=o.Ru[o.currentUser.toKey()];h||(h=new $e(me)),h=h.insert(l,c),o.Ru[o.currentUser.toKey()]=h})(s,r.batchId,n),await oo(s,r.changes),await hl(s.remoteStore)}catch(r){const i=Hu(r,"Failed to persist write");n.reject(i)}}async function C_(t,e){const n=he(t);try{const s=await gb(n.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=n.Eu.get(i);o&&(be(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.lu=!0:r.modifiedDocuments.size>0?be(o.lu,14607):r.removedDocuments.size>0&&(be(o.lu,42227),o.lu=!1))})),await oo(n,s,e)}catch(s){await Gr(s)}}function zf(t,e,n){const s=he(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Pu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)})),(function(o,l){const c=he(o);c.onlineState=l;let h=!1;c.queries.forEach(((f,p)=>{for(const g of p.wa)g.va(l)&&(h=!0)})),h&&qu(c)})(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function aA(t,e,n){const s=he(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Eu.get(e),i=r&&r.key;if(i){let o=new $e(re.comparator);o=o.insert(i,pt.newNoDocument(i,le.min()));const l=ye().add(i),c=new ll(le.min(),new Map,new $e(me),o,l);await C_(s,c),s.du=s.du.remove(i),s.Eu.delete(e),Wu(s)}else await $c(s.localStore,e,!1).then((()=>Hc(s,e,n))).catch(Gr)}async function lA(t,e){const n=he(t),s=e.batch.batchId;try{const r=await mb(n.localStore,e);P_(n,s,null),R_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await oo(n,r)}catch(r){await Gr(r)}}async function cA(t,e,n){const s=he(t);try{const r=await(function(o,l){const c=he(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next((p=>(be(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>c.localDocuments.getDocuments(h,f)))}))})(s.localStore,e);P_(s,e,n),R_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await oo(s,r)}catch(r){await Gr(r)}}function R_(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function P_(t,e,n){const s=he(t);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function Hc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Tu.get(e))t.Pu.delete(s),n&&t.hu.pu(s,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((s=>{t.Au.containsKey(s)||k_(t,s)}))}function k_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Fu(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Wu(t))}function Wf(t,e,n){for(const s of n)s instanceof b_?(t.Au.addReference(s.key,e),uA(t,s)):s instanceof A_?(J(zu,"Document no longer in limbo: "+s.key),t.Au.removeReference(s.key,e),t.Au.containsKey(s.key)||k_(t,s.key)):oe(19791,{yu:s})}function uA(t,e){const n=e.key,s=n.path.canonicalString();t.du.get(n)||t.Iu.has(s)||(J(zu,"New document in limbo: "+n),t.Iu.add(s),Wu(t))}function Wu(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new re(Me.fromString(e)),s=t.mu.next();t.Eu.set(s,new Zb(n)),t.du=t.du.insert(n,s),y_(t.remoteStore,new us(yn(Pu(n.path)),s,"TargetPurposeLimboResolution",Za.ue))}}async function oo(t,e,n){const s=he(t),r=[],i=[],o=[];s.Pu.isEmpty()||(s.Pu.forEach(((l,c)=>{o.push(s.gu(c,e,n).then((h=>{var f;if((h||n)&&s.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;s.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){r.push(h);const p=Mu.Es(c.targetId,h);i.push(p)}})))})),await Promise.all(o),s.hu.J_(r),await(async function(c,h){const f=he(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>N.forEach(h,(g=>N.forEach(g.Is,(T=>f.persistence.referenceDelegate.addReference(p,g.targetId,T))).next((()=>N.forEach(g.ds,(T=>f.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))))))}catch(p){if(!Qr(p))throw p;J(Lu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const T=f.Fs.get(g),D=T.snapshotVersion,O=T.withLastLimboFreeSnapshotVersion(D);f.Fs=f.Fs.insert(g,O)}}})(s.localStore,i))}async function hA(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){J(zu,"User change. New user:",e.toKey());const s=await p_(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new Z(U.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await oo(n,s.Bs)}}function dA(t,e){const n=he(t),s=n.Eu.get(e);if(s&&s.lu)return ye().add(s.key);{let r=ye();const i=n.Tu.get(e);if(!i)return r;for(const o of i){const l=n.Pu.get(o);r=r.unionWith(l.view.tu)}return r}}function V_(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=C_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aA.bind(null,e),e.hu.J_=Gb.bind(null,e.eventManager),e.hu.pu=Qb.bind(null,e.eventManager),e}function fA(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cA.bind(null,e),e}class Ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return pb(this.persistence,new hb,e.initialUser,this.serializer)}Du(e){return new f_(xu.Vi,this.serializer)}bu(e){return new Tb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ra.provider={build:()=>new Ra};class pA extends Ra{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){be(this.persistence.referenceDelegate instanceof Sa,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new J0(s,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new f_((s=>Sa.Vi(s,n)),this.serializer)}}class qc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>zf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hA.bind(null,this.syncEngine),await Hb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new zb})()}createDatastore(e){const n=cl(e.databaseInfo.databaseId),s=(function(i){return new Sb(i)})(e.databaseInfo);return(function(i,o,l,c){return new kb(i,o,l,c)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,r,i,o,l){return new Db(s,r,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>zf(this.syncEngine,n,0)),(function(){return Uf.C()?new Uf:new wb})())}createSyncEngine(e,n){return(function(r,i,o,l,c,h,f){const p=new eA(r,i,o,l,c,h);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(r){const i=he(r);J(ar,"RemoteStore shutting down."),i.Ia.add(5),await io(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qc.provider={build:()=>new qc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="FirestoreClient";class gA{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=dt.UNAUTHENTICATED,this.clientId=wu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{J(Ps,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(J(Ps,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Hu(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function rc(t,e){t.asyncQueue.verifyOperationInProgress(),J(Ps,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async r=>{s.isEqual(r)||(await p_(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>{Is("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{J("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((r=>{Is("Terminating Firestore due to IndexedDb database deletion failed",r)}))})),t._offlineComponents=e}async function Kf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _A(t);J(Ps,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((s=>Bf(e.remoteStore,s))),t.setAppCheckTokenChangeListener(((s,r)=>Bf(e.remoteStore,r))),t._onlineComponents=e}async function _A(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(Ps,"Using user provided OfflineComponentProvider");try{await rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(r){return r.name==="FirebaseError"?r.code===U.FAILED_PRECONDITION||r.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await rc(t,new Ra)}}else J(Ps,"Using default OfflineComponentProvider"),await rc(t,new pA(void 0));return t._offlineComponents}async function D_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(Ps,"Using user provided OnlineComponentProvider"),await Kf(t,t._uninitializedComponentsProvider._online)):(J(Ps,"Using default OnlineComponentProvider"),await Kf(t,new qc))),t._onlineComponents}function yA(t){return D_(t).then((e=>e.syncEngine))}async function Gf(t){const e=await D_(t),n=e.eventManager;return n.onListen=tA.bind(null,e.syncEngine),n.onUnlisten=rA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iA.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firestore.googleapis.com",Jf=!0;class Xf{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=N_,this.ssl=Jf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Jf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=d_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<G0)throw new Z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new II;switch(s.type){case"firstParty":return new CI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=Qf.get(n);s&&(J("ComponentProvider","Removing Datastore"),Qf.delete(n),s.terminate())})(this),Promise.resolve()}}function vA(t,e,n,s={}){var r;t=_n(t,dl);const i=zr(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(cg(`https://${c}`),ug("Firestore",!0)),o.host!==N_&&o.host!==c&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:s});if(!rr(h,l)&&(t._setSettings(h),s.mockUserToken)){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=dt.MOCK_USER;else{f=JT(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new Z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new dt(g)}t._authCredentials=new bI(new bg(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new fl(this.firestore,e,this._query)}}class Ge{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(no(n,Ge._jsonSchema))return new Ge(e,s||null,new re(Me.fromString(n.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:Ke("string",Ge._jsonSchemaVersion),referencePath:Ke("string")};class ys extends fl{constructor(e,n,s){super(e,n,Pu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new re(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function EA(t,e,...n){if(t=Ze(t),Sg("collection","path",e),t instanceof dl){const s=Me.fromString(e,...n);return uf(s),new ys(t,null,s)}{if(!(t instanceof Ge||t instanceof ys))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Me.fromString(e,...n));return uf(s),new ys(t.firestore,null,s)}}function Xr(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=wu.newId()),Sg("doc","path",e),t instanceof dl){const s=Me.fromString(e,...n);return cf(s),new Ge(t,null,new re(s))}{if(!(t instanceof Ge||t instanceof ys))throw new Z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Me.fromString(e,...n));return cf(s),new Ge(t.firestore,t instanceof ys?t.converter:null,new re(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="AsyncQueue";class Zf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new g_(this,"async_queue_retry"),this.oc=()=>{const s=sc();s&&J(Yf,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=sc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Ys;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Qr(e))throw e;J(Yf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,zn("INTERNAL UNHANDLED ERROR: ",ep(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const r=ju.createAndSchedule(this,e,n,s,(i=>this.lc(i)));return this.ec.push(r),r}ac(){this.tc&&oe(47125,{hc:ep(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function ep(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){return(function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(t,["next","error","complete"])}class lr extends dl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Zf,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zf(e),this._firestoreClient=void 0,await e}}}function TA(t,e){const n=typeof t=="object"?t:pg(),s=typeof t=="string"?t:va,r=Eu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=GT("firestore");i&&vA(r,...i)}return r}function Ku(t){if(t._terminated)throw new Z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||wA(t),t._firestoreClient}function wA(t){var e,n,s;const r=t._freezeSettings(),i=(function(l,c,h,f){return new HI(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,O_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new gA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(at.fromBase64String(e))}catch(n){throw new Z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(no(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:Ke("string",jt._jsonSchemaVersion),bytes:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:En._jsonSchemaVersion}}static fromJSON(e){if(no(e,En._jsonSchema))return new En(e.latitude,e.longitude)}}En._jsonSchemaVersion="firestore/geoPoint/1.0",En._jsonSchema={type:Ke("string",En._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(no(e,Tn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Tn(e.vectorValues);throw new Z(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tn._jsonSchemaVersion="firestore/vectorValue/1.0",Tn._jsonSchema={type:Ke("string",Tn._jsonSchemaVersion),vectorValues:Ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=/^__.*__$/;class bA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}class x_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function M_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ec:t})}}class Qu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Pa(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(M_(this.Ec)&&IA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class AA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||cl(e)}Dc(e,n,s,r=!1){return new Qu({Ec:e,methodName:n,bc:s,path:it.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ju(t){const e=t._freezeSettings(),n=cl(t._databaseId);return new AA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function L_(t,e,n,s,r,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,r);Xu("Data must be an object, but it was:",o,s);const l=$_(s,o);let c,h;if(i.merge)c=new Nt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=zc(e,p,n);if(!o.contains(g))throw new Z(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);j_(f,g)||f.push(g)}c=new Nt(f),h=o.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,h=o.fieldTransforms;return new bA(new Rt(l),c,h)}class pl extends Gu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pl}}function F_(t,e,n,s){const r=t.Dc(1,e,n);Xu("Data must be an object, but it was:",r,s);const i=[],o=Rt.empty();ks(s,((c,h)=>{const f=Yu(e,c,n);h=Ze(h);const p=r.gc(f);if(h instanceof pl)i.push(f);else{const g=ml(h,p);g!=null&&(i.push(f),o.set(f,g))}}));const l=new Nt(i);return new x_(o,l,r.fieldTransforms)}function U_(t,e,n,s,r,i){const o=t.Dc(1,e,n),l=[zc(e,s,n)],c=[r];if(i.length%2!=0)throw new Z(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(zc(e,i[g])),c.push(i[g+1]);const h=[],f=Rt.empty();for(let g=l.length-1;g>=0;--g)if(!j_(h,l[g])){const T=l[g];let D=c[g];D=Ze(D);const O=o.gc(T);if(D instanceof pl)h.push(T);else{const x=ml(D,O);x!=null&&(h.push(T),f.set(T,x))}}const p=new Nt(h);return new x_(f,p,o.fieldTransforms)}function ml(t,e){if(B_(t=Ze(t)))return Xu("Unsupported field value:",e,t),$_(t,e);if(t instanceof Gu)return(function(s,r){if(!M_(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,r){const i=[];let o=0;for(const l of s){let c=ml(l,r.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(s,r){if((s=Ze(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return f0(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Le.fromDate(s);return{timestampValue:Aa(r.serializer,i)}}if(s instanceof Le){const i=new Le(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Aa(r.serializer,i)}}if(s instanceof En)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof jt)return{bytesValue:i_(r.serializer,s._byteString)};if(s instanceof Ge){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ou(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Tn)return(function(o,l){return{mapValue:{fields:{[xg]:{stringValue:Mg},[Ea]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return ku(l.serializer,h)}))}}}}}})(s,r);throw r.wc(`Unsupported field value: ${Iu(s)}`)})(t,e)}function $_(t,e){const n={};return Pg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,((s,r)=>{const i=ml(r,e.Vc(s));i!=null&&(n[s]=i)})),{mapValue:{fields:n}}}function B_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof En||t instanceof jt||t instanceof Ge||t instanceof Gu||t instanceof Tn)}function Xu(t,e,n){if(!B_(n)||!Cg(n)){const s=Iu(n);throw s==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+s)}}function zc(t,e,n){if((e=Ze(e))instanceof ao)return e._internalPath;if(typeof e=="string")return Yu(t,e);throw Pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const SA=new RegExp("[~\\*/\\[\\]]");function Yu(t,e,n){if(e.search(SA)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ao(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pa(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Z(U.INVALID_ARGUMENT,l+t+c)}function j_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(q_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CA extends H_{data(){return super.data()}}function q_(t,e){return typeof e=="string"?Yu(t,e):e instanceof ao?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PA{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ks(e,((r,i)=>{s[r]=this.convertValue(i,n)})),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n[Ea].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map((o=>je(o.doubleValue)));return new Tn(i)}convertGeoPoint(e){return new En(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=tl(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zi(e));default:return null}}convertTimestamp(e){const n=As(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Me.fromString(e);be(h_(s),9688,{name:e});const r=new Wi(s.get(1),s.get(3)),i=new re(s.popFirst(5));return r.isEqual(n)||zn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zs extends H_{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(q_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zs._jsonSchema={type:Ke("string",Zs._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class ea extends Zs{data(e={}){return super.data(e)}}class Vr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new wi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new ea(this._firestore,this._userDataWriter,s.key,s,new wi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new ea(r._firestore,r._userDataWriter,l.doc.key,l.doc,new wi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new ea(r._firestore,r._userDataWriter,l.doc.key,l.doc,new wi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:kA(l.type),doc:c,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}Vr._jsonSchemaVersion="firestore/querySnapshot/1.0",Vr._jsonSchema={type:Ke("string",Vr._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class W_ extends PA{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function K_(t,e,n){t=_n(t,Ge);const s=_n(t.firestore,lr),r=z_(t.converter,e,n);return gl(s,[L_(Ju(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,kt.none())])}function VA(t,e,n,...s){t=_n(t,Ge);const r=_n(t.firestore,lr),i=Ju(r);let o;return o=typeof(e=Ze(e))=="string"||e instanceof ao?U_(i,"updateDoc",t._key,e,n,s):F_(i,"updateDoc",t._key,e),gl(r,[o.toMutation(t._key,kt.exists(!0))])}function DA(t){return gl(_n(t.firestore,lr),[new al(t._key,kt.none())])}function np(t,...e){var n,s,r;t=Ze(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||tp(e[o])||(i=e[o++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(tp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),e[o+2]=(r=p.complete)===null||r===void 0?void 0:r.bind(p)}let c,h,f;if(t instanceof Ge)h=_n(t.firestore,lr),f=Pu(t._key.path),c={next:p=>{e[o]&&e[o](OA(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=_n(t,fl);h=_n(p.firestore,lr),f=p._query;const g=new W_(h);c={next:T=>{e[o]&&e[o](new Vr(h,g,p,T))},error:e[o+1],complete:e[o+2]},RA(t._query)}return(function(g,T,D,O){const x=new mA(O),X=new Jb(T,x,D);return g.asyncQueue.enqueueAndForget((async()=>Wb(await Gf(g),X))),()=>{x.Ou(),g.asyncQueue.enqueueAndForget((async()=>Kb(await Gf(g),X)))}})(Ku(h),f,l,c)}function gl(t,e){return(function(s,r){const i=new Ys;return s.asyncQueue.enqueueAndForget((async()=>oA(await yA(s),r,i))),i.promise})(Ku(t),e)}function OA(t,e,n){const s=n.docs.get(e._key),r=new W_(t);return new Zs(t,r,e._key,s,new wi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ju(e)}set(e,n,s){this._verifyNotCommitted();const r=ic(e,this._firestore),i=z_(r.converter,n,s),o=L_(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,kt.none())),this}update(e,n,s,...r){this._verifyNotCommitted();const i=ic(e,this._firestore);let o;return o=typeof(n=Ze(n))=="string"||n instanceof ao?U_(this._dataReader,"WriteBatch.update",i._key,n,s,r):F_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,kt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ic(e,this._firestore);return this._mutations=this._mutations.concat(new al(n._key,kt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ic(t,e){if((t=Ze(t)).firestore!==e)throw new Z(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){return Ku(t=_n(t,lr)),new NA(t,(e=>gl(t,e)))}(function(e,n=!0){(function(r){Kr=r})(Wr),Fr(new ir("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new lr(new AI(s.getProvider("auth-internal")),new RI(o,s.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(h.options.projectId,f)})(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),gs(sf,rf,e),gs(sf,rf,"esm2017")})();function Zu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function G_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MA=G_,Q_=new eo("auth","Firebase",G_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new yu("@firebase/auth");function LA(t,...e){ka.logLevel<=_e.WARN&&ka.warn(`Auth (${Wr}): ${t}`,...e)}function ta(t,...e){ka.logLevel<=_e.ERROR&&ka.error(`Auth (${Wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw th(t,...e)}function rn(t,...e){return th(t,...e)}function eh(t,e,n){const s=Object.assign(Object.assign({},MA()),{[e]:n});return new eo("auth","Firebase",s).create(e,{appName:t.name})}function er(t){return eh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function FA(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Pn(t,"argument-error"),eh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function th(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Q_.create(t,...e)}function ae(t,e,...n){if(!t)throw th(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ta(e),new Error(e)}function Kn(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UA(){return sp()==="http:"||sp()==="https:"}function sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UA()||nw()||"connection"in navigator)?navigator.onLine:!0}function BA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZT()||sw()}get(){return $A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qA=new lo(3e4,6e4);function sh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yr(t,e,n,s,r={}){return X_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=to(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return tw()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&zr(t.emulatorConfig.host)&&(h.credentials="include"),J_.fetch()(await Y_(t,t.config.apiHost,n,l),h)})}async function X_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},jA),e);try{const r=new WA(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ho(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw eh(t,f,h);Pn(t,f)}}catch(r){if(r instanceof Jn)throw r;Pn(t,"network-request-failed",{message:String(r)})}}async function zA(t,e,n,s,r={}){const i=await Yr(t,e,n,s,r);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Y_(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?nh(t.config,r):`${t.config.apiScheme}://${r}`;return HA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class WA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rn(this.auth,"network-request-failed")),qA.get())})}}function Ho(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=rn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(t,e){return Yr(t,"POST","/v1/accounts:delete",e)}async function Va(t,e){return Yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GA(t,e=!1){const n=Ze(t),s=await n.getIdToken(e),r=rh(s);ae(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Mi(oc(r.auth_time)),issuedAtTime:Mi(oc(r.iat)),expirationTime:Mi(oc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oc(t){return Number(t)*1e3}function rh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ta("JWT malformed, contained fewer than 3 sections"),null;try{const r=ig(n);return r?JSON.parse(r):(ta("Failed to decode base64 JWT payload"),null)}catch(r){return ta("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rp(t){const e=rh(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Jn&&QA(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function QA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ji(t,Va(n,{idToken:s}));ae(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Z_(i.providerUserInfo):[],l=YA(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Kc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function XA(t){const e=Ze(t);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YA(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Z_(t){return t.map(e=>{var{providerId:n}=e,s=Zu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e){const n=await X_(t,{},async()=>{const s=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Y_(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return t.emulatorConfig&&zr(t.emulatorConfig.host)&&(c.credentials="include"),J_.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eS(t,e){return Yr(t,"POST","/v2/accounts:revokeToken",sh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=rp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await ZA(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Dr;return s&&(ae(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ae(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Zu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GA(this,e)}reload(){return XA(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Da(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Ji(this,KA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,c,h,f;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,X=(h=n.createdAt)!==null&&h!==void 0?h:void 0,z=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Q,emailVerified:W,isAnonymous:fe,providerData:pe,stsTokenManager:S}=n;ae(Q&&S,e,"internal-error");const v=Dr.fromJSON(this.name,S);ae(typeof Q=="string",e,"internal-error"),ts(p,e.name),ts(g,e.name),ae(typeof W=="boolean",e,"internal-error"),ae(typeof fe=="boolean",e,"internal-error"),ts(T,e.name),ts(D,e.name),ts(O,e.name),ts(x,e.name),ts(X,e.name),ts(z,e.name);const _=new en({uid:Q,auth:e,email:g,emailVerified:W,displayName:p,isAnonymous:fe,photoURL:D,phoneNumber:T,tenantId:O,stsTokenManager:v,createdAt:X,lastLoginAt:z});return pe&&Array.isArray(pe)&&(_.providerData=pe.map(I=>Object.assign({},I))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,s=!1){const r=new Dr;r.updateFromServerResponse(n);const i=new en({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Da(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ae(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Z_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Dr;l.updateFromIdToken(s);const c=new en({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Kc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Map;function Hn(t){Kn(t instanceof Function,"Expected a class definition");let e=ip.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ip.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ey.type="NONE";const op=ey;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e,n){return`firebase:${t}:${e}:${n}`}class Or{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=na(this.userKey,r.apiKey,i),this.fullPersistenceKey=na("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Va(this.auth,{idToken:e}).catch(()=>{});return n?en._fromGetAccountInfoResponse(this.auth,n,e):null}return en._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Or(Hn(op),e,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||Hn(op);const o=na(s,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Va(e,{idToken:f}).catch(()=>{});if(!g)break;p=await en._fromGetAccountInfoResponse(e,g,f)}else p=en._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Or(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Or(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ty(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oy(e))return"Blackberry";if(ay(e))return"Webos";if(ny(e))return"Safari";if((e.includes("chrome/")||sy(e))&&!e.includes("edge/"))return"Chrome";if(iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ty(t=yt()){return/firefox\//i.test(t)}function ny(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sy(t=yt()){return/crios\//i.test(t)}function ry(t=yt()){return/iemobile/i.test(t)}function iy(t=yt()){return/android/i.test(t)}function oy(t=yt()){return/blackberry/i.test(t)}function ay(t=yt()){return/webos/i.test(t)}function ih(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tS(t=yt()){var e;return ih(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nS(){return rw()&&document.documentMode===10}function ly(t=yt()){return ih(t)||iy(t)||ay(t)||oy(t)||/windows phone/i.test(t)||ry(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t,e=[]){let n;switch(t){case"Browser":n=ap(yt());break;case"Worker":n=`${ap(yt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e={}){return Yr(t,"GET","/v2/passwordPolicy",sh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=6;class oS{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lp(this),this.idTokenSubscription=new lp(this),this.beforeStateQueue=new sS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Or.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Va(this,{idToken:e}),s=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(er(this));const n=e?Ze(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rS(this),n=new oS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await eS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _l(t){return Ze(t)}class lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=dw(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lS(t){oh=t}function cS(t){return oh.loadJS(t)}function uS(){return oh.gapiScript}function hS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t,e){const n=Eu(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(rr(i,e??{}))return r;Pn(r,"already-initialized")}return n.initialize({options:e})}function fS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function pS(t,e,n){const s=_l(t);ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=uy(e),{host:o,port:l}=mS(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ae(rr(h,s.config.emulator)&&rr(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,zr(o)?(cg(`${i}//${o}${c}`),ug("Auth",!0)):gS()}function uy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mS(t){const e=uy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:cp(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:cp(o)}}}function cp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(t,e){return zA(t,"POST","/v1/accounts:signInWithIdp",sh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="http://localhost";class cr extends hy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Zu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new cr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Nr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nr(e,n)}buildRequest(){const e={requestUri:_S,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends ah{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends co{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.FACEBOOK_SIGN_IN_METHOD="facebook.com";as.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return $n.credential(n,s)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends co{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ls.credentialFromTaggedObject(e)}static credentialFromError(e){return ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ls.credential(e.oauthAccessToken)}catch{return null}}}ls.GITHUB_SIGN_IN_METHOD="github.com";ls.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends co{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return cs.credential(n,s)}catch{return null}}}cs.TWITTER_SIGN_IN_METHOD="twitter.com";cs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await en._fromIdTokenResponse(e,s,r),o=up(s);return new qr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=up(s);return new qr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function up(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends Jn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Oa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Oa(e,n,s,r)}}function dy(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oa._fromErrorAndOperation(t,i,e,s):i})}async function yS(t,e,n=!1){const s=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e,n=!1){const{auth:s}=t;if(Zt(s.app))return Promise.reject(er(s));const r="reauthenticate";try{const i=await Ji(t,dy(s,r,e,t),n);ae(i.idToken,s,"internal-error");const o=rh(i.idToken);ae(o,s,"internal-error");const{sub:l}=o;return ae(t.uid===l,s,"user-mismatch"),qr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e,n=!1){if(Zt(t.app))return Promise.reject(er(t));const s="signIn",r=await dy(t,s,e),i=await qr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function TS(t,e,n,s){return Ze(t).onIdTokenChanged(e,n,s)}function wS(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function IS(t,e,n,s){return Ze(t).onAuthStateChanged(e,n,s)}function bS(t){return Ze(t).signOut()}const Na="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=1e3,SS=10;class py extends fy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);nS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,SS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},AS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}py.type="LOCAL";const CS=py;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends fy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}my.type="SESSION";const gy=my;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new yl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await RS(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=lh("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function kS(t){wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function VS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OS(){return _y()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="firebaseLocalStorageDb",NS=1,xa="firebaseLocalStorage",vy="fbase_key";class uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vl(t,e){return t.transaction([xa],e?"readwrite":"readonly").objectStore(xa)}function xS(){const t=indexedDB.deleteDatabase(yy);return new uo(t).toPromise()}function Gc(){const t=indexedDB.open(yy,NS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xa,{keyPath:vy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xa)?e(s):(s.close(),await xS(),e(await Gc()))})})}async function hp(t,e,n){const s=vl(t,!0).put({[vy]:e,value:n});return new uo(s).toPromise()}async function MS(t,e){const n=vl(t,!1).get(e),s=await new uo(n).toPromise();return s===void 0?null:s.value}function dp(t,e){const n=vl(t,!0).delete(e);return new uo(n).toPromise()}const LS=800,FS=3;class Ey{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>FS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yl._getInstance(OS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VS(),!this.activeServiceWorker)return;this.sender=new PS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await hp(e,Na,"1"),await dp(e,Na),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>hp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>MS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=vl(r,!1).getAll();return new uo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ey.type="LOCAL";const US=Ey;new lo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e){return e?Hn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends hy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $S(t){return ES(t.auth,new ch(t),t.bypassAuthState)}function BS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),vS(n,new ch(t),t.bypassAuthState)}async function jS(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),yS(n,new ch(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $S;case"linkViaPopup":case"linkViaRedirect":return jS;case"reauthViaPopup":case"reauthViaRedirect":return BS;default:Pn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new lo(2e3,1e4);async function qS(t,e,n){if(Zt(t.app))return Promise.reject(rn(t,"operation-not-supported-in-this-environment"));const s=_l(t);FA(t,e,ah);const r=Ty(s,n);return new Qs(s,"signInViaPopup",e,r).executeNotNull()}class Qs extends wy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Qs.currentPopupAction&&Qs.currentPopupAction.cancel(),Qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HS.get())};e()}}Qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="pendingRedirect",sa=new Map;class WS extends wy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=sa.get(this.auth._key());if(!e){try{const s=await KS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}sa.set(this.auth._key(),e)}return this.bypassAuthState||sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KS(t,e){const n=JS(e),s=QS(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function GS(t,e){sa.set(t._key(),e)}function QS(t){return Hn(t._redirectPersistence)}function JS(t){return na(zS,t.config.apiKey,t.name)}async function XS(t,e,n=!1){if(Zt(t.app))return Promise.reject(er(t));const s=_l(t),r=Ty(s,e),o=await new WS(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=600*1e3;class ZS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Iy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YS&&this.cachedEventUids.clear(),this.cachedEventUids.has(fp(e))}saveEventToCache(e){this.cachedEventUids.add(fp(e)),this.lastProcessedEventTime=Date.now()}}function fp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e={}){return Yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sC=/^https?/;async function rC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tC(t);for(const n of e)try{if(iC(n))return}catch{}Pn(t,"unauthorized-domain")}function iC(t){const e=Wc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!sC.test(n))return!1;if(nC.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new lo(3e4,6e4);function pp(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aC(t){return new Promise((e,n)=>{var s,r,i;function o(){pp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pp(),n(rn(t,"network-request-failed"))},timeout:oC.get()})}if(!((r=(s=wn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const l=hS("iframefcb");return wn()[l]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},cS(`${uS()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ra=null,e})}let ra=null;function lC(t){return ra=ra||aC(t),ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new lo(5e3,15e3),uC="__/auth/iframe",hC="emulator/auth/iframe",dC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pC(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nh(e,hC):`https://${t.config.authDomain}/${uC}`,s={apiKey:e.apiKey,appName:t.name,v:Wr},r=fC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${to(s).slice(1)}`}async function mC(t){const e=await lC(t),n=wn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:pC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=wn().setTimeout(()=>{i(o)},cC.get());function c(){wn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_C=500,yC=600,vC="_blank",EC="http://localhost";class mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TC(t,e,n,s=_C,r=yC){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},gC),{width:s.toString(),height:r.toString(),top:i,left:o}),h=yt().toLowerCase();n&&(l=sy(h)?vC:n),ty(h)&&(e=e||EC,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[T,D])=>`${g}${T}=${D},`,"");if(tS(h)&&l!=="_self")return wC(e||"",l),new mp(null);const p=window.open(e||"",l,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new mp(p)}function wC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="__/auth/handler",bC="emulator/auth/handler",AC=encodeURIComponent("fac");async function gp(t,e,n,s,r,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Wr,eventId:r};if(e instanceof ah){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof co){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${AC}=${encodeURIComponent(c)}`:"";return`${SC(t)}?${to(l).slice(1)}${h}`}function SC({config:t}){return t.emulator?nh(t,bC):`https://${t.authDomain}/${IC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class CC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gy,this._completeRedirectFn=XS,this._overrideRedirectResult=GS}async _openPopup(e,n,s,r){var i;Kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await gp(e,n,s,Wc(),r);return TC(e,o,lh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await gp(e,n,s,Wc(),r);return kS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Kn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await mC(e),s=new ZS(e);return n.register("authEvent",r=>(ae(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ac,{type:ac},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ac];o!==void 0&&n(!!o),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ly()||ny()||ih()}}const RC=CC;var _p="@firebase/auth",yp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VC(t){Fr(new ir("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cy(t)},h=new aS(s,r,i,c);return fS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Fr(new ir("auth-internal",e=>{const n=_l(e.getProvider("auth").getImmediate());return(s=>new PC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gs(_p,yp,kC(t)),gs(_p,yp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=300,OC=lg("authIdTokenMaxAge")||DC;let vp=null;const NC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>OC)return;const r=n==null?void 0:n.token;vp!==r&&(vp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xC(t=pg()){const e=Eu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dS(t,{popupRedirectResolver:RC,persistence:[US,CS,gy]}),s=lg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=NC(i.toString());wS(n,o,()=>o(n.currentUser)),TS(n,l=>o(l))}}const r=og("auth");return r&&pS(n,`http://${r}`),n}function MC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=rn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",MC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VC("Browser");var LC="firebase",FC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gs(LC,FC,"app");const Qc={apiKey:void 0,authDomain:void 0,projectId:void 0,appId:void 0},vs=!!(Qc.apiKey&&Qc.projectId),Ma=vs?fg(Qc):null,Mt=Ma?TA(Ma):null,uh=Ma?xC(Ma):null,Ep=(t,e,n)=>["categories",t,{label:e,order:n,example:!0}],ns=(t,e,n,s)=>["teams",t,{name:e,cat:n,hue:s,example:!0}],Bt=(t,e,n,s,r,i,o,l)=>["matches",t,{cat:e,a:n,b:s,ends:r,status:i,round:"Pool",lane:o,order:l,example:!0}],xn=(t,e,n,s,r)=>["sled",t,{name:e,mode:n,ms:s,at:Date.now()-r*6e4,example:!0}],vr=(t,e,n,s)=>["grip",t,{name:e,kg:n,at:Date.now()-s*6e4,example:!0}];function UC(){return[xn("s01","Aiden Tan","pull",14820,50),xn("s02","Marcus Lim","pull",13970,46),xn("s03","Priya Nair","pull",16400,42),xn("s04","Daniel Koh","pull",15330,38),xn("s05","Marcus Lim","pull",14200,22),xn("s06","Aiden Tan","push",12080,34),xn("s07","Marcus Lim","push",11450,30),xn("s08","Priya Nair","push",13900,26),xn("s09","Daniel Koh","push",12910,18),vr("g01","Aiden Tan",62.5,40),vr("g02","Marcus Lim",71,36),vr("g03","Priya Nair",48,32),vr("g04","Daniel Koh",66.5,28),vr("g05","Priya Nair",51.5,14),vr("g06","Marcus Lim",69,10),Ep("c540","Mixed 540 kg",1),Ep("c600","Men's 600 kg",2),ns("t_bulls","Raging Bulls","c540",12),ns("t_anchors","Iron Anchors","c540",205),ns("t_runners","Rope Runners","c540",160),ns("t_dead","Deadlift Dynasty","c540",265),ns("t_hitters","Heavy Hitters","c600",38),ns("t_crew","Anchor Crew","c600",330),ns("t_chalk","Chalk and Grit","c600",95),ns("t_lane","Lane Four","c600",50),Bt("m01","c540","t_bulls","t_anchors",["a","a"],"final","Lane 1",1),Bt("m02","c540","t_runners","t_dead",["b","a","b"],"final","Lane 2",2),Bt("m03","c540","t_bulls","t_runners",["a","b","a"],"final","Lane 1",3),Bt("m04","c540","t_anchors","t_dead",["a"],"live","Lane 2",4),Bt("m05","c540","t_bulls","t_dead",[],"scheduled","Lane 1",5),Bt("m06","c540","t_anchors","t_runners",[],"scheduled","Lane 2",6),Bt("m07","c600","t_hitters","t_crew",["a","a"],"final","Lane 3",7),Bt("m08","c600","t_chalk","t_lane",["b","b"],"final","Lane 4",8),Bt("m09","c600","t_hitters","t_chalk",["b","a","b"],"final","Lane 3",9),Bt("m10","c600","t_crew","t_lane",[],"scheduled","Lane 4",10),Bt("m11","c600","t_hitters","t_lane",[],"scheduled","Lane 3",11),Bt("m12","c600","t_crew","t_chalk",[],"scheduled","Lane 4",12)]}function $C(t){const n=String(t).trim().replace(",",".").match(/^(?:(\d{1,2}):)?(\d{1,4}(?:\.\d{1,2})?)$/);if(!n)return null;const s=Number(n[2]);if(n[1]!==void 0&&s>=60)return null;const r=Math.round(((n[1]?Number(n[1]):0)*60+s)*1e3);return r>0&&r<36e5?r:null}function BC(t){const e=String(t).trim().replace(",",".");if(!/^\d{1,4}(\.\d{1,2})?$/.test(e))return null;const n=Number(e);return n>0&&n<=1e3?n:null}function by(t){if(t<6e4)return(t/1e3).toFixed(2)+" s";const e=Math.floor(t/6e4),n=(t-e*6e4)/1e3;return e+":"+n.toFixed(2).padStart(5,"0")}const Ay=t=>Number(t.toFixed(2))+" kg",Tp=(t,e)=>t==="sled"?by(e):Ay(e);function jC(t,e){return e?t==="sled"?"+"+by(e):"−"+Ay(e):"–"}function Jc(t,e,n){const s=e==="sled",r=new Map;t.forEach(o=>{if(s&&o.mode!==n)return;const l=s?o.ms:o.kg;if(typeof l!="number"||!o.name)return;const c=String(o.name).trim().toLowerCase(),h=r.get(c);if(!h){r.set(c,{key:c,name:o.name,value:l,tries:1,rank:0,gap:0});return}h.tries++,(s?l<h.value:l>h.value)&&(h.value=l,h.name=o.name)});const i=Array.from(r.values()).sort((o,l)=>(s?o.value-l.value:l.value-o.value)||o.name.localeCompare(l.name));return i.forEach((o,l)=>{const c=i[l-1];o.rank=c&&c.value===o.value?c.rank:l+1,o.gap=Math.abs(o.value-i[0].value)}),i}const wp=[12,38,160,205,265,330,95,50],El=t=>t+Math.random().toString(36).slice(2,9),Xc=(t,e)=>(t.order||0)-(e.order||0),ot=hr({name:"Tug of War Scoreboard",winPts:2,bestOf:3}),Fe=hr({categories:{},teams:{},matches:{},sled:{},grip:{}}),Sy=[{id:"tow",label:"Tug of War"},{id:"sled",label:"Sled Pull / Push"},{id:"grip",label:"Handgrip"}];function HC(){try{const t=localStorage.getItem("tow-game");return Sy.some(e=>e.id===t)?t:"tow"}catch{return"tow"}}const gt=Lt(HC());function qC(t){gt.value=t;try{localStorage.setItem("tow-game",t)}catch{}}const Es=Lt("pull"),hh=Lt(!1),dh=Lt(vs),La=Lt(null),Cy=Lt(!vs),Gn=Lt(!1),Yc=Lt(""),qt=Lt(""),Ry=Lt(""),mt=Lt(""),Ct=Lt({}),mn=Oe(()=>vs?!!La.value:!0);let Ip,bp,Ap;function Pt(t){Yc.value=t,clearTimeout(Ip),Ip=setTimeout(()=>{Yc.value=""},4500)}function zC(){Ry.value=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}const Sp={meta:!1,categories:!1,teams:!1,matches:!1,sled:!1,grip:!1};function Cp(t){Sp[t]=!0,zC(),Object.values(Sp).every(Boolean)&&(dh.value=!1)}function Rp(){hh.value=!1,Pt("Live updates stopped. Check your connection and reload.")}vs&&(hh.value=!0,IS(uh,t=>{La.value=t,Cy.value=!0}),np(Xr(Mt,"meta","event"),t=>{if(t.exists()){const e=t.data();e.name&&(ot.name=e.name),e.winPts&&(ot.winPts=e.winPts),e.bestOf&&(ot.bestOf=e.bestOf)}Cp("meta")},Rp),["categories","teams","matches","sled","grip"].forEach(t=>{np(EA(Mt,t),e=>{const n={};e.forEach(s=>{n[s.id]={...s.data(),id:s.id}}),Fe[t]=n,Cp(t)},Rp)}),setTimeout(()=>{dh.value=!1},8e3));async function Pp(){try{await qS(uh,new $n)}catch(t){t.code!=="auth/popup-closed-by-user"&&Pt("Sign-in did not complete. Try again.")}}async function kp(){Gn.value=!1,await bS(uh)}async function Tl(t,e,n){Mt?await K_(Xr(Mt,t,e),n):Fe[t]={...Fe[t],[e]:{...n,id:e}}}async function fh(t,e,n){Mt?await VA(Xr(Mt,t,e),n):Fe[t][e]&&(Fe[t]={...Fe[t],[e]:{...Fe[t][e],...n}})}async function Bn(t,e){if(Mt)await DA(Xr(Mt,t,e));else{const n={...Fe[t]};delete n[e],Fe[t]=n}}async function Ft(t){try{await t()}catch(e){e&&e.code==="permission-denied"?Pt("This account is not on the organizer list."):Pt("That did not save. Try again.")}}function wl(t,e){if(qt.value===t){qt.value="",e();return}qt.value=t,clearTimeout(bp),bp=setTimeout(()=>{qt.value=""},4e3)}const tr=Oe(()=>Object.values(Fe.categories).sort(Xc));Ci(tr,t=>{if(t.some(s=>s.id===mt.value))return;let e="";try{e=localStorage.getItem("tow-cat")||""}catch{}const n=t.find(s=>s.id===e)||t[0];mt.value=n?n.id:""},{immediate:!0});function Py(t){mt.value=t;try{localStorage.setItem("tow-cat",t)}catch{}}const Zc=Oe(()=>(Fe.categories[mt.value]||{}).label||""),ho=Oe(()=>Object.values(Fe.teams)),fo=Oe(()=>Object.values(Fe.matches)),eu=Oe(()=>ho.value.filter(t=>t.cat===mt.value).sort((t,e)=>t.name.localeCompare(e.name))),Fa=Oe(()=>Math.ceil((ot.bestOf||3)/2)),lc=Oe(()=>fo.value.filter(t=>t.status==="live").length),WC=Oe(()=>ho.value.some(t=>t.example)||Object.values(Fe.sled).some(t=>t.example)||Object.values(Fe.grip).some(t=>t.example));function hs(t){const e=t.ends||[];return{a:e.filter(n=>n==="a").length,b:e.filter(n=>n==="b").length}}function ky(t){const e=Number(ot.winPts)||2,n=new Map(ho.value.filter(o=>o.cat===t).map(o=>[o.id,{team:o,p:0,w:0,l:0,ew:0,el:0,pts:0,diff:0,rank:0}]));fo.value.forEach(o=>{if(o.cat!==t||o.status!=="final")return;const l=n.get(o.a),c=n.get(o.b);if(!l||!c)return;const h=hs(o);l.p++,c.p++,l.ew+=h.a,l.el+=h.b,c.ew+=h.b,c.el+=h.a,h.a>h.b?(l.w++,c.l++,l.pts+=e):h.b>h.a&&(c.w++,l.l++,c.pts+=e)});const s=Array.from(n.values());s.forEach(o=>{o.diff=o.ew-o.el});const r=s.filter(o=>o.p>0).sort((o,l)=>l.pts-o.pts||l.diff-o.diff||l.ew-o.ew||o.team.name.localeCompare(l.team.name));r.forEach((o,l)=>{const c=r[l-1];o.rank=c&&c.pts===o.pts&&c.diff===o.diff&&c.ew===o.ew?c.rank:l+1});const i=s.filter(o=>o.p===0).sort((o,l)=>o.team.name.localeCompare(l.team.name));return r.concat(i)}const Vp=Oe(()=>ky(mt.value)),KC=Oe(()=>{const t={};tr.value.forEach(n=>ky(n.id).forEach(s=>{s.rank&&(t[s.team.id]=s.rank)}));const e=Object.values(Fe.sled);return["pull","push"].forEach(n=>Jc(e,"sled",n).forEach(s=>{t["sled:"+n+":"+s.key]=s.rank})),Jc(Object.values(Fe.grip),"grip").forEach(n=>{t["grip:"+n.key]=n.rank}),t});Ci(KC,(t,e)=>{const n={};Object.keys(t).forEach(s=>{e[s]&&e[s]!==t[s]&&(n[s]=e[s]-t[s])}),Object.keys(n).length&&(Ct.value=n,clearTimeout(Ap),Ap=setTimeout(()=>{Ct.value={}},12e3))});const Vy=Oe(()=>fo.value.filter(t=>t.cat===mt.value)),GC=Oe(()=>{const t=e=>Vy.value.filter(n=>n.status===e);return[{key:"live",title:"On the rope",items:t("live").sort(Xc)},{key:"next",title:"Up next",items:t("scheduled").sort(Xc)},{key:"done",title:"Results",items:t("final").sort((e,n)=>(n.order||0)-(e.order||0))}]}),Er=t=>(Fe.teams[t]||{}).name||"Unknown team",gi=t=>{const e=Fe.teams[t];return e?e.hue:0};function Dp(t){if(t.status!=="final")return"";const e=hs(t);return e.a>e.b?"a":"b"}const QC=t=>t==="live"?"Live":t==="final"?"Final":"Up next";function JC(t){const e=hs(t);return Math.max(12,Math.min(88,50-(e.a-e.b)/Fa.value*38))}const XC=t=>Ft(()=>fh("matches",t.id,{status:"live"})),Op=(t,e)=>Ft(()=>{const n=(t.ends||[]).concat(e),s=hs({ends:n}),r=s.a>=Fa.value||s.b>=Fa.value;return fh("matches",t.id,{ends:n,status:r?"final":"live"})}),YC=t=>Ft(()=>{const e=(t.ends||[]).slice(0,-1);return fh("matches",t.id,{ends:e,status:e.length?"live":"scheduled"})}),ZC=t=>wl("m"+t.id,()=>Ft(()=>Bn("matches",t.id))),eR=t=>wl("t"+t.id,()=>Ft(async()=>{const e=fo.value.filter(n=>n.a===t.id||n.b===t.id);for(const n of e)await Bn("matches",n.id);await Bn("teams",t.id)})),Np=()=>wl("xall",()=>Ft(async()=>{for(const t of fo.value.filter(e=>e.example))await Bn("matches",t.id);for(const t of ho.value.filter(e=>e.example))await Bn("teams",t.id);for(const t of tr.value.filter(e=>e.example))await Bn("categories",t.id);for(const t of Object.values(Fe.sled).filter(e=>e.example))await Bn("sled",t.id);for(const t of Object.values(Fe.grip).filter(e=>e.example))await Bn("grip",t.id);Pt("Examples cleared.")}));async function tR(t){if(t=t.trim(),!t)return!1;const e=El("c");let n=!0;return await Ft(async()=>{try{await Tl("categories",e,{label:t,order:Date.now()})}catch(s){throw n=!1,s}}),n&&Py(e),n}async function nR(t){if(t=t.trim(),!t||!mt.value)return!1;if(eu.value.some(n=>n.name.toLowerCase()===t.toLowerCase()))return Pt("That team is already in this class."),!1;let e=!0;return await Ft(async()=>{try{await Tl("teams",El("t"),{name:t,cat:mt.value,hue:wp[ho.value.length%wp.length]})}catch(n){throw e=!1,n}}),e}async function sR({a:t,b:e,round:n,lane:s}){if(!t||!e)return Pt("Choose both teams."),!1;if(t===e)return Pt("A team cannot pull against itself."),!1;let r=!0;return await Ft(async()=>{try{await Tl("matches",El("m"),{cat:mt.value,a:t,b:e,round:n,lane:s,ends:[],status:"scheduled",order:Date.now()})}catch(i){throw r=!1,i}}),r&&Pt("Match added."),r}const cc=t=>Ft(async()=>{const e={name:ot.name,winPts:ot.winPts,bestOf:ot.bestOf,...t};Mt?await K_(Xr(Mt,"meta","event"),e):Object.assign(ot,e)}),xp=()=>Ft(async()=>{const t=UC();if(Mt){const e=xA(Mt);t.forEach(([n,s,r])=>e.set(Xr(Mt,n,s),r)),await e.commit()}else t.forEach(([e,n,s])=>{Fe[e]={...Fe[e],[n]:{...s,id:n}}});Pt("Example data loaded.")}),Dy=Oe(()=>{const t=gt.value;return t==="tow"?[]:Object.values(Fe[t]).filter(e=>t==="grip"||e.mode===Es.value)}),tu=Oe(()=>gt.value==="tow"?[]:Jc(Dy.value,gt.value,Es.value)),Ii=Oe(()=>Dy.value.slice().sort((t,e)=>(e.at||0)-(t.at||0))),rR=Oe(()=>{const t=new Map(tu.value.map(n=>[n.key,n.value])),e=gt.value;return new Set(Ii.value.filter(n=>t.get(String(n.name).trim().toLowerCase())===(e==="sled"?n.ms:n.kg)).map(n=>n.id))}),Oy=Oe(()=>{if(gt.value==="tow")return[];const t=new Map;return Object.values(Fe[gt.value]).forEach(e=>{const n=String(e.name).trim().toLowerCase();t.has(n)||t.set(n,e.name)}),Array.from(t.values()).sort((e,n)=>e.localeCompare(n))}),Tr=t=>(gt.value==="sled"?"sled:"+Es.value+":":"grip:")+t.key;async function iR({name:t,raw:e}){const n=gt.value;if(n==="tow")return!1;if(t=t.trim(),!t)return Pt("Enter the athlete or team name."),!1;const s=Oy.value.find(o=>o.toLowerCase()===t.toLowerCase());s&&(t=s);let r;if(n==="sled"){const o=$C(e);if(o===null)return Pt("Enter a time like 12.34 or 1:05.20."),!1;r={name:t,mode:Es.value,ms:o,at:Date.now()}}else{const o=BC(e);if(o===null)return Pt("Enter the weight in kg, for example 42.5."),!1;r={name:t,kg:o,at:Date.now()}}let i=!0;return await Ft(async()=>{try{await Tl(n,El(n[0]),r)}catch(o){throw i=!1,o}}),i&&Pt("Result recorded."),i}const oR=t=>wl("a"+t.id,()=>Ft(()=>Bn(gt.value,t.id))),Mp=t=>{Es.value=t},Lp=()=>{Gn.value=!Gn.value},aR={class:"panel","aria-labelledby":"st-h"},lR={class:"panel-h"},cR={class:"sub"},uR={key:0,class:"empty"},hR={class:"rank"},dR=["aria-label"],fR={class:"tcell"},pR={class:"tname"},mR=["onClick"],gR={class:"n"},_R={class:"n"},yR={class:"n"},vR=["title"],ER={class:"pts"},TR={class:"legend"},wR={__name:"StandingsTable",setup(t){return(e,n)=>(G(),Y("section",aR,[V("div",lR,[n[0]||(n[0]=V("h2",{id:"st-h"},"Standings",-1)),V("span",cR,ee(R(Zc)),1)]),n[1]||(n[1]=BE('<div class="cols rows-head" aria-hidden="true"><span>Pos</span><span>Team</span><span class="n">P</span><span class="n">W</span><span class="n">L</span><span class="n col-ends">Ends</span><span class="n">Pts</span></div>',1)),R(Vp).length?(G(),Mr(ng,{key:1,name:"flip",tag:"ol",class:"rows"},{default:fu(()=>[(G(!0),Y(Ce,null,sn(R(Vp),s=>(G(),Y("li",{key:s.team.id,class:rt(["cols row",s.rank?"p"+s.rank:""])},[V("span",hR,[V("b",null,ee(s.rank||"–"),1),R(Ct)[s.team.id]?(G(),Y("em",{key:0,class:rt(["mv",R(Ct)[s.team.id]>0?"up":"down"]),"aria-label":(R(Ct)[s.team.id]>0?"Up ":"Down ")+Math.abs(R(Ct)[s.team.id])},ee(R(Ct)[s.team.id]>0?"▲":"▼")+ee(Math.abs(R(Ct)[s.team.id])),11,dR)):De("",!0)]),V("span",fR,[V("i",{class:"chip",style:un({"--h":s.team.hue})},null,4),V("span",pR,ee(s.team.name),1),R(mn)&&R(Gn)?(G(),Y("button",{key:0,class:rt(["mini",{armed:R(qt)==="t"+s.team.id}]),type:"button",onClick:r=>R(eR)(s.team)},ee(R(qt)==="t"+s.team.id?"Confirm":"Remove"),11,mR)):De("",!0)]),V("span",gR,ee(s.p),1),V("span",_R,ee(s.w),1),V("span",yR,ee(s.l),1),V("span",{class:"n col-ends",title:s.ew+" ends won, "+s.el+" lost"},ee(s.diff>0?"+":"")+ee(s.diff),9,vR),V("span",ER,ee(s.pts),1)],2))),128))]),_:1})):(G(),Y("p",uR,"No teams in this class yet.")),V("p",TR," P played · W won · L lost · Ends = ends won minus ends lost · A match win is worth "+ee(R(ot).winPts)+" pts. Ties are split by end difference, then ends won. ",1)]))}},IR={class:"m-head"},bR={key:0,class:"dot"},AR={class:"m-body"},SR=["aria-label"],CR={class:"slots","aria-hidden":"true"},RR=["title"],PR={key:1,class:"ctl"},kR={class:"lbl"},VR={class:"lbl"},DR={__name:"MatchCard",props:{m:{type:Object,required:!0}},setup(t){return(e,n)=>(G(),Y("li",{class:rt(["match","is-"+t.m.status])},[V("div",IR,[V("span",null,[os(ee(t.m.lane||"Lane –"),1),t.m.round?(G(),Y(Ce,{key:0},[os(" · "+ee(t.m.round),1)],64)):De("",!0)]),V("span",{class:rt(["st","st-"+t.m.status])},[t.m.status==="live"?(G(),Y("i",bR)):De("",!0),os(ee(R(QC)(t.m.status)),1)],2)]),V("div",AR,[V("div",{class:rt(["side a",{win:R(Dp)(t.m)==="a"}])},[V("i",{class:"chip",style:un({"--h":R(gi)(t.m.a)})},null,4),V("span",null,ee(R(Er)(t.m.a)),1)],2),V("div",{class:"score","aria-label":R(Er)(t.m.a)+" "+R(hs)(t.m).a+", "+R(Er)(t.m.b)+" "+R(hs)(t.m).b},[os(ee(R(hs)(t.m).a),1),n[5]||(n[5]=V("i",null,"–",-1)),os(ee(R(hs)(t.m).b),1)],8,SR),V("div",{class:rt(["side b",{win:R(Dp)(t.m)==="b"}])},[V("i",{class:"chip",style:un({"--h":R(gi)(t.m.b)})},null,4),V("span",null,ee(R(Er)(t.m.b)),1)],2)]),t.m.status==="live"?(G(),Y("div",{key:0,class:"rope",style:un({"--pos":R(JC)(t.m)+"%"}),"aria-hidden":"true"},[...n[6]||(n[6]=[V("i",{class:"mark wa"},null,-1),V("i",{class:"mark wb"},null,-1),V("i",{class:"mark mid"},null,-1),V("i",{class:"flag"},null,-1)])],4)):De("",!0),V("div",CR,[(G(!0),Y(Ce,null,sn(R(ot).bestOf,s=>(G(),Y("i",{key:s,class:rt(["slot",{on:(t.m.ends||[])[s-1]}]),style:un({"--h":R(gi)(t.m[(t.m.ends||[])[s-1]])}),title:"End "+s},null,14,RR))),128))]),R(mn)?(G(),Y("div",PR,[t.m.status==="scheduled"?(G(),Y("button",{key:0,class:"btn",type:"button",onClick:n[0]||(n[0]=s=>R(XC)(t.m))},"Start match")):De("",!0),t.m.status==="live"?(G(),Y(Ce,{key:1},[V("button",{class:"btn",type:"button",onClick:n[1]||(n[1]=s=>R(Op)(t.m,"a"))},[V("i",{class:"chip",style:un({"--h":R(gi)(t.m.a)})},null,4),V("span",kR,ee(R(Er)(t.m.a))+" won end",1)]),V("button",{class:"btn",type:"button",onClick:n[2]||(n[2]=s=>R(Op)(t.m,"b"))},[V("i",{class:"chip",style:un({"--h":R(gi)(t.m.b)})},null,4),V("span",VR,ee(R(Er)(t.m.b))+" won end",1)])],64)):De("",!0),(t.m.ends||[]).length?(G(),Y("button",{key:2,class:"btn ghost",type:"button",onClick:n[3]||(n[3]=s=>R(YC)(t.m))},"Undo last end")):De("",!0),R(Gn)?(G(),Y("button",{key:3,class:rt(["btn warn",{armed:R(qt)==="m"+t.m.id}]),type:"button",onClick:n[4]||(n[4]=s=>R(ZC)(t.m))},ee(R(qt)==="m"+t.m.id?"Confirm remove":"Remove match"),3)):De("",!0)])):De("",!0)],2))}},OR={class:"panel","aria-labelledby":"mt-h"},NR={class:"panel-h"},xR={class:"sub"},MR={key:0,class:"empty"},LR={key:1,class:"mbody"},FR={key:0},UR={class:"grp"},$R={class:"mlist"},BR={__name:"MatchesPanel",setup(t){return(e,n)=>(G(),Y("section",OR,[V("div",NR,[n[0]||(n[0]=V("h2",{id:"mt-h"},"Matches",-1)),V("span",xR,"Best of "+ee(R(ot).bestOf),1)]),R(Vy).length?(G(),Y("div",LR,[(G(!0),Y(Ce,null,sn(R(GC),s=>(G(),Y(Ce,{key:s.key},[s.items.length?(G(),Y("div",FR,[V("h3",UR,[os(ee(s.title)+" ",1),V("span",null,ee(s.items.length),1)]),V("ul",$R,[(G(!0),Y(Ce,null,sn(s.items,r=>(G(),Mr(DR,{key:r.id,m:r},null,8,["m"]))),128))])])):De("",!0)],64))),128))])):(G(),Y("p",MR,"No matches scheduled in this class yet."))]))}},jR={class:"org","aria-label":"Organizer tools"},HR={class:"org-grid"},qR={for:"team-name"},zR=["disabled"],WR=["disabled"],KR=["disabled"],GR=["value"],QR=["disabled"],JR=["value"],XR=["disabled"],YR={class:"fld"},ZR=["value"],eP=["value"],tP=["value"],nP={class:"hint"},sP={key:0},rP={__name:"OrganizerPanel",setup(t){const e=hr({cat:"",team:"",a:"",b:"",round:"",lane:""});async function n(){await tR(e.cat)&&(e.cat="")}async function s(){await nR(e.team)&&(e.team="")}async function r(){await sR({a:e.a,b:e.b,round:e.round,lane:e.lane})&&(e.a="",e.b="")}return(i,o)=>(G(),Y("section",jR,[V("div",HR,[V("form",{class:"fld",onSubmit:Go(n,["prevent"])},[o[10]||(o[10]=V("h3",null,"Weight class",-1)),o[11]||(o[11]=V("label",{for:"cat-name"},"Class name",-1)),is(V("input",{id:"cat-name","onUpdate:modelValue":o[0]||(o[0]=l=>e.cat=l),maxlength:"40",placeholder:"e.g. Mixed 540 kg",autocomplete:"off"},null,512),[[Rr,e.cat,void 0,{trim:!0}]]),o[12]||(o[12]=V("button",{class:"btn",type:"submit"},"Add class",-1))],32),V("form",{class:"fld",onSubmit:Go(s,["prevent"])},[o[13]||(o[13]=V("h3",null,"Team",-1)),V("label",qR,"Team name"+ee(R(Zc)?" ("+R(Zc)+")":""),1),is(V("input",{id:"team-name","onUpdate:modelValue":o[1]||(o[1]=l=>e.team=l),maxlength:"40",placeholder:"e.g. Rope Runners",autocomplete:"off",disabled:!R(mt)},null,8,zR),[[Rr,e.team,void 0,{trim:!0}]]),V("button",{class:"btn",type:"submit",disabled:!R(mt)},"Add team",8,WR)],32),V("form",{class:"fld",onSubmit:Go(r,["prevent"])},[o[16]||(o[16]=V("h3",null,"Match",-1)),o[17]||(o[17]=V("label",{for:"m-a"},"Team A (left)",-1)),is(V("select",{id:"m-a","onUpdate:modelValue":o[2]||(o[2]=l=>e.a=l),disabled:!R(mt)},[o[14]||(o[14]=V("option",{value:""},"Choose team",-1)),(G(!0),Y(Ce,null,sn(R(eu),l=>(G(),Y("option",{key:l.id,value:l.id},ee(l.name),9,GR))),128))],8,KR),[[jd,e.a]]),o[18]||(o[18]=V("label",{for:"m-b"},"Team B (right)",-1)),is(V("select",{id:"m-b","onUpdate:modelValue":o[3]||(o[3]=l=>e.b=l),disabled:!R(mt)},[o[15]||(o[15]=V("option",{value:""},"Choose team",-1)),(G(!0),Y(Ce,null,sn(R(eu),l=>(G(),Y("option",{key:l.id,value:l.id},ee(l.name),9,JR))),128))],8,QR),[[jd,e.b]]),o[19]||(o[19]=V("label",{for:"m-round"},"Round",-1)),is(V("input",{id:"m-round","onUpdate:modelValue":o[4]||(o[4]=l=>e.round=l),maxlength:"24",placeholder:"e.g. Pool, Semi-final",autocomplete:"off"},null,512),[[Rr,e.round,void 0,{trim:!0}]]),o[20]||(o[20]=V("label",{for:"m-lane"},"Lane",-1)),is(V("input",{id:"m-lane","onUpdate:modelValue":o[5]||(o[5]=l=>e.lane=l),maxlength:"16",placeholder:"e.g. Lane 1",autocomplete:"off"},null,512),[[Rr,e.lane,void 0,{trim:!0}]]),V("button",{class:"btn",type:"submit",disabled:!R(mt)},"Add match",8,XR)],32),V("div",YR,[o[23]||(o[23]=V("h3",null,"Event settings",-1)),o[24]||(o[24]=V("label",{for:"ev-name"},"Event name",-1)),V("input",{id:"ev-name",value:R(ot).name,maxlength:"60",onChange:o[6]||(o[6]=l=>R(cc)({name:l.target.value.trim()||R(ot).name}))},null,40,ZR),o[25]||(o[25]=V("label",{for:"ev-pts"},"Points for a match win",-1)),V("select",{id:"ev-pts",value:R(ot).winPts,onChange:o[7]||(o[7]=l=>R(cc)({winPts:Number(l.target.value)}))},[...o[21]||(o[21]=[V("option",{value:1},"1",-1),V("option",{value:2},"2",-1),V("option",{value:3},"3",-1)])],40,eP),o[26]||(o[26]=V("label",{for:"ev-best"},"Ends per match",-1)),V("select",{id:"ev-best",value:R(ot).bestOf,onChange:o[8]||(o[8]=l=>R(cc)({bestOf:Number(l.target.value)}))},[...o[22]||(o[22]=[V("option",{value:3},"Best of 3",-1),V("option",{value:5},"Best of 5",-1)])],40,tP)])]),V("p",nP," Scores are entered on each match card: tap the team that won the end. The match closes when a team reaches "+ee(R(Fa))+" ends. ",1),R(tr).length?De("",!0):(G(),Y("div",sP,[V("button",{class:"btn ghost",type:"button",onClick:o[9]||(o[9]=(...l)=>R(xp)&&R(xp)(...l))},"Load example teams and matches")]))]))}},iP={class:"grid"},oP={class:"panel","aria-labelledby":"fb-h"},aP={class:"panel-h"},lP={id:"fb-h"},cP={class:"sub"},uP={key:0,class:"seg",role:"tablist","aria-label":"Sled event"},hP=["aria-selected"],dP=["aria-selected"],fP={class:"cols cols-f rows-head","aria-hidden":"true"},pP={class:"n"},mP={key:1,class:"empty"},gP={class:"rank"},_P=["aria-label"],yP={class:"tcell"},vP={class:"tname"},EP={class:"n"},TP={class:"n col-gap muted"},wP={class:"best"},IP={class:"legend"},bP={class:"stack"},AP={class:"fld"},SP={for:"f-name"},CP={id:"f-names"},RP=["value"],PP={for:"f-val"},kP=["inputmode","placeholder"],VP={class:"btn",type:"submit"},DP={class:"panel","aria-labelledby":"fl-h"},OP={class:"panel-h"},NP={class:"sub"},xP={key:0,class:"hint pad"},MP={key:1,class:"empty"},LP={key:2,class:"log"},FP={class:"aname"},UP={class:"aval"},$P={key:0,class:"tag"},BP=["onClick"],jP={__name:"FringeBoard",setup(t){const e=hr({name:"",val:""}),n=Lt(null),s=Oe(()=>gt.value==="sled"),r=Oe(()=>Es.value==="pull"?"Pull":"Push"),i=Oe(()=>s.value?"Sled "+r.value.toLowerCase():"Handgrip"),o=Oe(()=>s.value?"Lowest time wins":"Heaviest weight wins"),l=Oe(()=>s.value?"Best time":"Best grip"),c=Oe(()=>s.value?"Time ("+r.value.toLowerCase()+")":"Weight gripped (kg)"),h=Oe(()=>s.value?"e.g. 12.34 or 1:05.20":"e.g. 42.5");async function f(){await iR({name:e.name,raw:e.val})&&(e.name="",e.val="",n.value&&n.value.focus())}return(p,g)=>(G(),Y("div",iP,[V("section",oP,[V("div",aP,[V("h2",lP,ee(i.value),1),V("span",cP,ee(o.value),1)]),s.value?(G(),Y("div",uP,[V("button",{class:"tab",type:"button",role:"tab","aria-selected":R(Es)==="pull",onClick:g[0]||(g[0]=T=>R(Mp)("pull"))},"Pull",8,hP),V("button",{class:"tab",type:"button",role:"tab","aria-selected":R(Es)==="push",onClick:g[1]||(g[1]=T=>R(Mp)("push"))},"Push",8,dP)])):De("",!0),V("div",fP,[g[4]||(g[4]=V("span",null,"Pos",-1)),V("span",null,ee(s.value?"Athlete / team":"Athlete"),1),g[5]||(g[5]=V("span",{class:"n"},"Tries",-1)),g[6]||(g[6]=V("span",{class:"n col-gap"},"Behind",-1)),V("span",pP,ee(l.value),1)]),R(tu).length?(G(),Mr(ng,{key:2,name:"flip",tag:"ol",class:"rows"},{default:fu(()=>[(G(!0),Y(Ce,null,sn(R(tu),T=>(G(),Y("li",{key:T.key,class:rt(["cols cols-f row","p"+T.rank])},[V("span",gP,[V("b",null,ee(T.rank),1),R(Ct)[R(Tr)(T)]?(G(),Y("em",{key:0,class:rt(["mv",R(Ct)[R(Tr)(T)]>0?"up":"down"]),"aria-label":(R(Ct)[R(Tr)(T)]>0?"Up ":"Down ")+Math.abs(R(Ct)[R(Tr)(T)])},ee(R(Ct)[R(Tr)(T)]>0?"▲":"▼")+ee(Math.abs(R(Ct)[R(Tr)(T)])),11,_P)):De("",!0)]),V("span",yP,[V("span",vP,ee(T.name),1)]),V("span",EP,ee(T.tries),1),V("span",TP,ee(R(jC)(R(gt),T.gap)),1),V("span",wP,ee(R(Tp)(R(gt),T.value)),1)],2))),128))]),_:1})):(G(),Y("p",mP," No "+ee(s.value?r.value.toLowerCase():"grip")+" results yet. "+ee(R(mn)?"Record the first result in the panel on this page.":"Results appear here as soon as they are recorded."),1)),V("p",IP," Each athlete is ranked on their best attempt"+ee(s.value?" in this event":"")+". Equal results share a position. ",1)]),V("div",bP,[R(mn)?(G(),Y("form",{key:0,class:"panel rec",onSubmit:Go(f,["prevent"])},[V("div",AP,[g[7]||(g[7]=V("h3",null,"Record result",-1)),V("label",SP,ee(s.value?"Athlete or team":"Athlete"),1),is(V("input",{id:"f-name",ref_key:"nameEl",ref:n,"onUpdate:modelValue":g[2]||(g[2]=T=>e.name=T),list:"f-names",maxlength:"40",autocomplete:"off",placeholder:"Name"},null,512),[[Rr,e.name,void 0,{trim:!0}]]),V("datalist",CP,[(G(!0),Y(Ce,null,sn(R(Oy),T=>(G(),Y("option",{key:T,value:T},null,8,RP))),128))]),V("label",PP,ee(c.value),1),is(V("input",{id:"f-val","onUpdate:modelValue":g[3]||(g[3]=T=>e.val=T),inputmode:s.value?"text":"decimal",autocomplete:"off",placeholder:h.value},null,8,kP),[[Rr,e.val,void 0,{trim:!0}]]),V("button",VP,"Record "+ee(s.value?r.value.toLowerCase():"grip")+" result",1)])],32)):De("",!0),V("section",DP,[V("div",OP,[g[8]||(g[8]=V("h2",{id:"fl-h"},"Attempts",-1)),V("span",NP,ee(R(Ii).length)+" recorded",1)]),R(mn)&&!R(Gn)&&R(Ii).length?(G(),Y("p",xP,"Open Organizer tools to remove an entry.")):De("",!0),R(Ii).length?(G(),Y("ul",LP,[(G(!0),Y(Ce,null,sn(R(Ii),T=>(G(),Y("li",{key:T.id,class:"att"},[V("span",FP,ee(T.name),1),V("span",UP,[os(ee(R(Tp)(R(gt),s.value?T.ms:T.kg))+" ",1),R(rR).has(T.id)?(G(),Y("i",$P,"Best")):De("",!0)]),R(mn)&&R(Gn)?(G(),Y("button",{key:0,class:rt(["mini",{armed:R(qt)==="a"+T.id}]),type:"button",onClick:D=>R(oR)(T)},ee(R(qt)==="a"+T.id?"Confirm":"Remove"),11,BP)):De("",!0)]))),128))])):(G(),Y("p",MP,"Nothing recorded yet."))])])]))}},HP={class:"wrap"},qP={class:"top"},zP={class:"title"},WP={class:"top-side"},KP={key:0},GP={key:1},QP={key:2},JP=["aria-expanded"],XP={key:0,class:"notice",role:"note"},YP={key:1,class:"notice",role:"note"},ZP={class:"games",role:"tablist","aria-label":"Events"},e1=["aria-selected","onClick"],t1={key:2,class:"muted"},n1={key:1,class:"tabs",role:"tablist","aria-label":"Weight classes"},s1=["aria-selected","onClick"],r1={key:2,class:"panel"},i1={class:"empty"},o1={key:3,class:"grid"},a1={class:"toast",role:"status","aria-live":"polite"},l1={__name:"App",setup(t){return(e,n)=>(G(),Y("div",HP,[V("header",qP,[V("div",zP,[n[4]||(n[4]=V("p",{class:"eyebrow"},"Live results",-1)),V("h1",null,ee(R(ot).name),1)]),V("div",WP,[V("span",{class:rt(["pill",{"pill-live":R(lc)>0}])},[n[5]||(n[5]=V("i",{class:"dot"},null,-1)),R(lc)>0?(G(),Y("span",KP,ee(R(lc))+" live now",1)):R(hh)?(G(),Y("span",GP,"Synced "+ee(R(Ry)),1)):(G(),Y("span",QP,"Not synced"))],2),R(mn)?(G(),Y("button",{key:0,class:"btn ghost",type:"button","aria-expanded":R(Gn),onClick:n[0]||(n[0]=(...s)=>R(Lp)&&R(Lp)(...s))},"Organizer tools",8,JP)):De("",!0),R(vs)&&R(Cy)&&!R(La)?(G(),Y("button",{key:1,class:"btn ghost",type:"button",onClick:n[1]||(n[1]=(...s)=>R(Pp)&&R(Pp)(...s))},"Organizer sign-in")):De("",!0),R(vs)&&R(La)?(G(),Y("button",{key:2,class:"btn ghost",type:"button",onClick:n[2]||(n[2]=(...s)=>R(kp)&&R(kp)(...s))},"Sign out")):De("",!0)])]),R(vs)?De("",!0):(G(),Y("div",XP,[...n[6]||(n[6]=[V("span",null,"Demo mode: Firebase is not configured, so changes stay in this browser tab. See the README to go live.",-1)])])),R(WC)?(G(),Y("div",YP,[n[7]||(n[7]=V("span",null,"These are example teams and results. Real standings appear once the organizer replaces them.",-1)),R(mn)?(G(),Y("button",{key:0,class:rt(["btn warn",{armed:R(qt)==="xall"}]),type:"button",onClick:n[3]||(n[3]=(...s)=>R(Np)&&R(Np)(...s))},ee(R(qt)==="xall"?"Confirm clear":"Clear examples"),3)):De("",!0)])):De("",!0),V("nav",ZP,[(G(!0),Y(Ce,null,sn(R(Sy),s=>(G(),Y("button",{key:s.id,class:"gtab",type:"button",role:"tab","aria-selected":s.id===R(gt),onClick:r=>R(qC)(s.id)},ee(s.label),9,e1))),128))]),R(dh)?(G(),Y("p",t1,"Connecting to live results…")):R(gt)==="tow"?(G(),Y(Ce,{key:3},[R(mn)&&R(Gn)?(G(),Mr(rP,{key:0})):De("",!0),R(tr).length?(G(),Y("nav",n1,[(G(!0),Y(Ce,null,sn(R(tr),s=>(G(),Y("button",{key:s.id,class:"tab",type:"button",role:"tab","aria-selected":s.id===R(mt),onClick:r=>R(Py)(s.id)},ee(s.label),9,s1))),128))])):De("",!0),R(tr).length?(G(),Y("main",o1,[xt(wR),xt(BR)])):(G(),Y("section",r1,[V("p",i1," No weight classes yet. "+ee(R(mn)?"Open Organizer tools and add a class such as 540 kg, then add teams.":"Standings appear here as soon as the organizer adds teams."),1)]))],64)):(G(),Mr(jP,{key:4})),V("div",a1,ee(R(Yc)),1)]))}};LT(l1).mount("#app");
