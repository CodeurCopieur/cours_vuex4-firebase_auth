var Ic=Object.defineProperty,Ec=Object.defineProperties;var wc=Object.getOwnPropertyDescriptors;var ei=Object.getOwnPropertySymbols;var Tc=Object.prototype.hasOwnProperty,Rc=Object.prototype.propertyIsEnumerable;var ti=(t,e,n)=>e in t?Ic(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ni=(t,e)=>{for(var n in e||(e={}))Tc.call(e,n)&&ti(t,n,e[n]);if(ei)for(var n of ei(e))Rc.call(e,n)&&ti(t,n,e[n]);return t},ri=(t,e)=>Ec(t,wc(e));const Sc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Sc();function bs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ac="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cc=bs(Ac);function vo(t){return!!t||t===""}function Is(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?kc(r):Is(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ue(t))return t;if(ie(t))return t}}const Oc=/;(?![^(]*\))/g,Pc=/:(.+)/;function kc(t){const e={};return t.split(Oc).forEach(n=>{if(n){const r=n.split(Pc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Es(t){let e="";if(ue(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Es(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ng=t=>ue(t)?t:t==null?"":F(t)||ie(t)&&(t.toString===Eo||!B(t.toString))?JSON.stringify(t,yo,2):String(t),yo=(t,e)=>e&&e.__v_isRef?yo(t,e.value):Ft(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:bo(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!F(e)&&!wo(e)?String(e):e,Q={},Ut=[],Ce=()=>{},Nc=()=>!1,Mc=/^on[^a-z]/,pr=t=>Mc.test(t),ws=t=>t.startsWith("onUpdate:"),he=Object.assign,Ts=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dc=Object.prototype.hasOwnProperty,W=(t,e)=>Dc.call(t,e),F=Array.isArray,Ft=t=>gr(t)==="[object Map]",bo=t=>gr(t)==="[object Set]",B=t=>typeof t=="function",ue=t=>typeof t=="string",Rs=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Io=t=>ie(t)&&B(t.then)&&B(t.catch),Eo=Object.prototype.toString,gr=t=>Eo.call(t),xc=t=>gr(t).slice(8,-1),wo=t=>gr(t)==="[object Object]",Ss=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zn=bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lc=/-(\w)/g,$e=mr(t=>t.replace(Lc,(e,n)=>n?n.toUpperCase():"")),Uc=/\B([A-Z])/g,Gt=mr(t=>t.replace(Uc,"-$1").toLowerCase()),_r=mr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mr=mr(t=>t?`on${_r(t)}`:""),mn=(t,e)=>!Object.is(t,e),Kn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let si;const Fc=()=>si||(si=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let De;class Bc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&De&&(this.parent=De,this.index=(De.scopes||(De.scopes=[])).push(this)-1)}run(e){if(this.active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function $c(t,e=De){e&&e.active&&e.effects.push(t)}const As=t=>{const e=new Set(t);return e.w=0,e.n=0,e},To=t=>(t.w&ft)>0,Ro=t=>(t.n&ft)>0,Hc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ft},jc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];To(s)&&!Ro(s)?s.delete(t):e[n++]=s,s.w&=~ft,s.n&=~ft}e.length=n}},Jr=new WeakMap;let rn=0,ft=1;const Yr=30;let Re;const yt=Symbol(""),Xr=Symbol("");class Cs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$c(this,r)}run(){if(!this.active)return this.fn();let e=Re,n=ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Re,Re=this,ct=!0,ft=1<<++rn,rn<=Yr?Hc(this):ii(this),this.fn()}finally{rn<=Yr&&jc(this),ft=1<<--rn,Re=this.parent,ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Re===this?this.deferStop=!0:this.active&&(ii(this),this.onStop&&this.onStop(),this.active=!1)}}function ii(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ct=!0;const So=[];function Jt(){So.push(ct),ct=!1}function Yt(){const t=So.pop();ct=t===void 0?!0:t}function ye(t,e,n){if(ct&&Re){let r=Jr.get(t);r||Jr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=As()),Ao(s)}}function Ao(t,e){let n=!1;rn<=Yr?Ro(t)||(t.n|=ft,n=!To(t)):n=!t.has(Re),n&&(t.add(Re),Re.deps.push(t))}function qe(t,e,n,r,s,i){const o=Jr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t))o.forEach((a,l)=>{(l==="length"||l>=r)&&c.push(a)});else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?Ss(n)&&c.push(o.get("length")):(c.push(o.get(yt)),Ft(t)&&c.push(o.get(Xr)));break;case"delete":F(t)||(c.push(o.get(yt)),Ft(t)&&c.push(o.get(Xr)));break;case"set":Ft(t)&&c.push(o.get(yt));break}if(c.length===1)c[0]&&Qr(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);Qr(As(a))}}function Qr(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&oi(r);for(const r of n)r.computed||oi(r)}function oi(t,e){(t!==Re||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wc=bs("__proto__,__v_isRef,__isVue"),Co=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rs)),Vc=Os(),zc=Os(!1,!0),Kc=Os(!0),ai=qc();function qc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Jt();const r=K(this)[e].apply(this,n);return Yt(),r}}),t}function Os(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ll:Mo:e?No:ko).get(r))return r;const o=F(r);if(!t&&o&&W(ai,s))return Reflect.get(ai,s,i);const c=Reflect.get(r,s,i);return(Rs(s)?Co.has(s):Wc(s))||(t||ye(r,"get",s),e)?c:le(c)?o&&Ss(s)?c:c.value:ie(c)?t?Do(c):On(c):c}}const Gc=Oo(),Jc=Oo(!0);function Oo(t=!1){return function(n,r,s,i){let o=n[r];if(_n(o)&&le(o)&&!le(s))return!1;if(!t&&!_n(s)&&(Zr(s)||(s=K(s),o=K(o)),!F(n)&&le(o)&&!le(s)))return o.value=s,!0;const c=F(n)&&Ss(r)?Number(r)<n.length:W(n,r),a=Reflect.set(n,r,s,i);return n===K(i)&&(c?mn(s,o)&&qe(n,"set",r,s):qe(n,"add",r,s)),a}}function Yc(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&qe(t,"delete",e,void 0),r}function Xc(t,e){const n=Reflect.has(t,e);return(!Rs(e)||!Co.has(e))&&ye(t,"has",e),n}function Qc(t){return ye(t,"iterate",F(t)?"length":yt),Reflect.ownKeys(t)}const Po={get:Vc,set:Gc,deleteProperty:Yc,has:Xc,ownKeys:Qc},Zc={get:Kc,set(t,e){return!0},deleteProperty(t,e){return!0}},el=he({},Po,{get:zc,set:Jc}),Ps=t=>t,vr=t=>Reflect.getPrototypeOf(t);function Bn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&ye(s,"get",e),ye(s,"get",i));const{has:o}=vr(s),c=r?Ps:n?Ms:vn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function $n(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&ye(r,"has",t),ye(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Hn(t,e=!1){return t=t.__v_raw,!e&&ye(K(t),"iterate",yt),Reflect.get(t,"size",t)}function ci(t){t=K(t);const e=K(this);return vr(e).has.call(e,t)||(e.add(t),qe(e,"add",t,t)),this}function li(t,e){e=K(e);const n=K(this),{has:r,get:s}=vr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mn(e,o)&&qe(n,"set",t,e):qe(n,"add",t,e),this}function ui(t){const e=K(this),{has:n,get:r}=vr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qe(e,"delete",t,void 0),i}function fi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&qe(t,"clear",void 0,void 0),n}function jn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=K(o),a=e?Ps:t?Ms:vn;return!t&&ye(c,"iterate",yt),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function Wn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Ft(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?Ps:e?Ms:vn;return!e&&ye(i,"iterate",a?Xr:yt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Xe(t){return function(...e){return t==="delete"?!1:this}}function tl(){const t={get(i){return Bn(this,i)},get size(){return Hn(this)},has:$n,add:ci,set:li,delete:ui,clear:fi,forEach:jn(!1,!1)},e={get(i){return Bn(this,i,!1,!0)},get size(){return Hn(this)},has:$n,add:ci,set:li,delete:ui,clear:fi,forEach:jn(!1,!0)},n={get(i){return Bn(this,i,!0)},get size(){return Hn(this,!0)},has(i){return $n.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:jn(!0,!1)},r={get(i){return Bn(this,i,!0,!0)},get size(){return Hn(this,!0)},has(i){return $n.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wn(i,!1,!1),n[i]=Wn(i,!0,!1),e[i]=Wn(i,!1,!0),r[i]=Wn(i,!0,!0)}),[t,n,e,r]}const[nl,rl,sl,il]=tl();function ks(t,e){const n=e?t?il:sl:t?rl:nl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const ol={get:ks(!1,!1)},al={get:ks(!1,!0)},cl={get:ks(!0,!1)},ko=new WeakMap,No=new WeakMap,Mo=new WeakMap,ll=new WeakMap;function ul(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fl(t){return t.__v_skip||!Object.isExtensible(t)?0:ul(xc(t))}function On(t){return _n(t)?t:Ns(t,!1,Po,ol,ko)}function dl(t){return Ns(t,!1,el,al,No)}function Do(t){return Ns(t,!0,Zc,cl,Mo)}function Ns(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=fl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Bt(t){return _n(t)?Bt(t.__v_raw):!!(t&&t.__v_isReactive)}function _n(t){return!!(t&&t.__v_isReadonly)}function Zr(t){return!!(t&&t.__v_isShallow)}function xo(t){return Bt(t)||_n(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Lo(t){return tr(t,"__v_skip",!0),t}const vn=t=>ie(t)?On(t):t,Ms=t=>ie(t)?Do(t):t;function Uo(t){ct&&Re&&(t=K(t),Ao(t.dep||(t.dep=As())))}function Fo(t,e){t=K(t),t.dep&&Qr(t.dep)}function le(t){return!!(t&&t.__v_isRef===!0)}function Bo(t){return $o(t,!1)}function hl(t){return $o(t,!0)}function $o(t,e){return le(t)?t:new pl(t,e)}class pl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:vn(e)}get value(){return Uo(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),mn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:vn(e),Fo(this))}}function ln(t){return le(t)?t.value:t}const gl={get:(t,e,n)=>ln(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ho(t){return Bt(t)?t:new Proxy(t,gl)}class ml{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Cs(e,()=>{this._dirty||(this._dirty=!0,Fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Uo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _l(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=Ce):(r=t.get,s=t.set),new ml(r,s,i||!s,n)}function lt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){yr(i,e,n)}return s}function Oe(t,e,n,r){if(B(t)){const i=lt(t,e,n,r);return i&&Io(i)&&i.catch(o=>{yr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Oe(t[i],e,n,r));return s}function yr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){lt(a,null,10,[t,o,c]);return}}vl(t,n,s,r)}function vl(t,e,n,r=!0){console.error(t)}let nr=!1,es=!1;const ve=[];let We=0;const un=[];let sn=null,Mt=0;const fn=[];let tt=null,Dt=0;const jo=Promise.resolve();let Ds=null,ts=null;function Wo(t){const e=Ds||jo;return t?e.then(this?t.bind(this):t):e}function yl(t){let e=We+1,n=ve.length;for(;e<n;){const r=e+n>>>1;yn(ve[r])<t?e=r+1:n=r}return e}function Vo(t){(!ve.length||!ve.includes(t,nr&&t.allowRecurse?We+1:We))&&t!==ts&&(t.id==null?ve.push(t):ve.splice(yl(t.id),0,t),zo())}function zo(){!nr&&!es&&(es=!0,Ds=jo.then(Go))}function bl(t){const e=ve.indexOf(t);e>We&&ve.splice(e,1)}function Ko(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),zo()}function Il(t){Ko(t,sn,un,Mt)}function El(t){Ko(t,tt,fn,Dt)}function br(t,e=null){if(un.length){for(ts=e,sn=[...new Set(un)],un.length=0,Mt=0;Mt<sn.length;Mt++)sn[Mt]();sn=null,Mt=0,ts=null,br(t,e)}}function qo(t){if(br(),fn.length){const e=[...new Set(fn)];if(fn.length=0,tt){tt.push(...e);return}for(tt=e,tt.sort((n,r)=>yn(n)-yn(r)),Dt=0;Dt<tt.length;Dt++)tt[Dt]();tt=null,Dt=0}}const yn=t=>t.id==null?1/0:t.id;function Go(t){es=!1,nr=!0,br(t),ve.sort((n,r)=>yn(n)-yn(r));const e=Ce;try{for(We=0;We<ve.length;We++){const n=ve[We];n&&n.active!==!1&&lt(n,null,14)}}finally{We=0,ve.length=0,qo(),nr=!1,Ds=null,(ve.length||un.length||fn.length)&&Go(t)}}function wl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Q;p&&(s=n.map(b=>b.trim())),h&&(s=n.map(Gr))}let c,a=r[c=Mr(e)]||r[c=Mr($e(e))];!a&&i&&(a=r[c=Mr(Gt(e))]),a&&Oe(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Oe(l,t,6,s)}}function Jo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const f=Jo(l,e,!0);f&&(c=!0,he(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):he(o,i),r.set(t,o),o)}function Ir(t,e){return!t||!pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Gt(e))||W(t,e))}let Se=null,Yo=null;function rr(t){const e=Se;return Se=t,Yo=t&&t.type.__scopeId||null,e}function on(t,e=Se,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ii(-1);const i=rr(e),o=t(...s);return rr(i),r._d&&Ii(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Dr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:f,renderCache:h,data:p,setupState:b,ctx:S,inheritAttrs:L}=t;let O,A;const U=rr(t);try{if(n.shapeFlag&4){const z=s||r;O=Le(f.call(z,z,h,i,b,p,S)),A=a}else{const z=e;O=Le(z.length>1?z(i,{attrs:a,slots:c,emit:l}):z(i,null)),A=e.props?a:Tl(a)}}catch(z){dn.length=0,yr(z,t,1),O=se(Et)}let j=O;if(A&&L!==!1){const z=Object.keys(A),{shapeFlag:oe}=j;z.length&&oe&7&&(o&&z.some(ws)&&(A=Rl(A,o)),j=Wt(j,A))}return n.dirs&&(j=Wt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),O=j,rr(U),O}const Tl=t=>{let e;for(const n in t)(n==="class"||n==="style"||pr(n))&&((e||(e={}))[n]=t[n]);return e},Rl=(t,e)=>{const n={};for(const r in t)(!ws(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?di(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Ir(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?di(r,o,l):!0:!!o;return!1}function di(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ir(n,i))return!0}return!1}function Al({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cl=t=>t.__isSuspense;function Ol(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):El(t)}function qn(t,e){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=ce||Se;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const hi={};function Gn(t,e,n){return Xo(t,e,n)}function Xo(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const c=ce;let a,l=!1,f=!1;if(le(t)?(a=()=>t.value,l=Zr(t)):Bt(t)?(a=()=>t,r=!0):F(t)?(f=!0,l=t.some(A=>Bt(A)||Zr(A)),a=()=>t.map(A=>{if(le(A))return A.value;if(Bt(A))return _t(A);if(B(A))return lt(A,c,2)})):B(t)?e?a=()=>lt(t,c,2):a=()=>{if(!(c&&c.isUnmounted))return h&&h(),Oe(t,c,3,[p])}:a=Ce,e&&r){const A=a;a=()=>_t(A())}let h,p=A=>{h=O.onStop=()=>{lt(A,c,4)}};if(En)return p=Ce,e?n&&Oe(e,c,3,[a(),f?[]:void 0,p]):a(),Ce;let b=f?[]:hi;const S=()=>{if(!!O.active)if(e){const A=O.run();(r||l||(f?A.some((U,j)=>mn(U,b[j])):mn(A,b)))&&(h&&h(),Oe(e,c,3,[A,b===hi?void 0:b,p]),b=A)}else O.run()};S.allowRecurse=!!e;let L;s==="sync"?L=S:s==="post"?L=()=>ge(S,c&&c.suspense):L=()=>Il(S);const O=new Cs(a,L);return e?n?S():b=O.run():s==="post"?ge(O.run.bind(O),c&&c.suspense):O.run(),()=>{O.stop(),c&&c.scope&&Ts(c.scope.effects,O)}}function Pl(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?Qo(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=ce;Vt(this);const c=Xo(s,i.bind(r),n);return o?Vt(o):bt(),c}function Qo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function _t(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),le(t))_t(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)_t(t[n],e);else if(bo(t)||Ft(t))t.forEach(n=>{_t(n,e)});else if(wo(t))for(const n in t)_t(t[n],e);return t}function Zo(t){return B(t)?{setup:t,name:t.name}:t}const Jn=t=>!!t.type.__asyncLoader,ea=t=>t.type.__isKeepAlive;function kl(t,e){ta(t,"a",e)}function Nl(t,e){ta(t,"da",e)}function ta(t,e,n=ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Er(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ea(s.parent.vnode)&&Ml(r,e,n,s),s=s.parent}}function Ml(t,e,n,r){const s=Er(e,t,r,!0);ra(()=>{Ts(r[e],s)},n)}function Er(t,e,n=ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Jt(),Vt(n);const c=Oe(e,n,t,o);return bt(),Yt(),c});return r?s.unshift(i):s.push(i),i}}const Je=t=>(e,n=ce)=>(!En||t==="sp")&&Er(t,e,n),Dl=Je("bm"),na=Je("m"),xl=Je("bu"),Ll=Je("u"),Ul=Je("bum"),ra=Je("um"),Fl=Je("sp"),Bl=Je("rtg"),$l=Je("rtc");function Hl(t,e=ce){Er("ec",t,e)}function Mg(t,e){const n=Se;if(n===null)return t;const r=Rr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,c,a,l=Q]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&_t(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l})}return t}function dt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Jt(),Oe(a,n,8,[t.el,c,t,e]),Yt())}}const sa="components";function ia(t,e){return Wl(sa,t,!0,e)||t}const jl=Symbol();function Wl(t,e,n=!0,r=!1){const s=Se||ce;if(s){const i=s.type;if(t===sa){const c=bu(i);if(c&&(c===e||c===$e(e)||c===_r($e(e))))return i}const o=pi(s[t]||i[t],e)||pi(s.appContext[t],e);return!o&&r?i:o}}function pi(t,e){return t&&(t[e]||t[$e(e)]||t[_r($e(e))])}const ns=t=>t?_a(t)?Rr(t)||t.proxy:ns(t.parent):null,sr=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ns(t.parent),$root:t=>ns(t.root),$emit:t=>t.emit,$options:t=>aa(t),$forceUpdate:t=>t.f||(t.f=()=>Vo(t.update)),$nextTick:t=>t.n||(t.n=Wo.bind(t.proxy)),$watch:t=>Pl.bind(t)}),Vl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&W(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];rs&&(o[e]=0)}}const f=sr[e];let h,p;if(f)return e==="$attrs"&&ye(t,"get",e),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Q&&W(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&W(t,o)||e!==Q&&W(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(sr,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let rs=!0;function zl(t){const e=aa(t),n=t.proxy,r=t.ctx;rs=!1,e.beforeCreate&&gi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:S,activated:L,deactivated:O,beforeDestroy:A,beforeUnmount:U,destroyed:j,unmounted:z,render:oe,renderTracked:ae,renderTriggered:be,errorCaptured:Ye,serverPrefetch:pe,expose:Pe,inheritAttrs:He,components:we,directives:At,filters:Ct}=e;if(l&&Kl(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const q=o[Z];B(q)&&(r[Z]=q.bind(n))}if(s){const Z=s.call(n,n);ie(Z)&&(t.data=On(Z))}if(rs=!0,i)for(const Z in i){const q=i[Z],me=B(q)?q.bind(n,n):B(q.get)?q.get.bind(n,n):Ce,Pt=!B(q)&&B(q.set)?q.set.bind(n):Ce,je=Ue({get:me,set:Pt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>je.value,set:ke=>je.value=ke})}if(c)for(const Z in c)oa(c[Z],r,n,Z);if(a){const Z=B(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(q=>{qn(q,Z[q])})}f&&gi(f,t,"c");function re(Z,q){F(q)?q.forEach(me=>Z(me.bind(n))):q&&Z(q.bind(n))}if(re(Dl,h),re(na,p),re(xl,b),re(Ll,S),re(kl,L),re(Nl,O),re(Hl,Ye),re($l,ae),re(Bl,be),re(Ul,U),re(ra,z),re(Fl,pe),F(Pe))if(Pe.length){const Z=t.exposed||(t.exposed={});Pe.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:me=>n[q]=me})})}else t.exposed||(t.exposed={});oe&&t.render===Ce&&(t.render=oe),He!=null&&(t.inheritAttrs=He),we&&(t.components=we),At&&(t.directives=At)}function Kl(t,e,n=Ce,r=!1){F(t)&&(t=ss(t));for(const s in t){const i=t[s];let o;ie(i)?"default"in i?o=Ke(i.from||s,i.default,!0):o=Ke(i.from||s):o=Ke(i),le(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:c=>o.value=c}):e[s]=o}}function gi(t,e,n){Oe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function oa(t,e,n,r){const s=r.includes(".")?Qo(n,r):()=>n[r];if(ue(t)){const i=e[t];B(i)&&Gn(s,i)}else if(B(t))Gn(s,t.bind(n));else if(ie(t))if(F(t))t.forEach(i=>oa(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Gn(s,i,t)}}function aa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>ir(a,l,o,!0)),ir(a,e,o)),i.set(e,a),a}function ir(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ir(t,i,n,!0),s&&s.forEach(o=>ir(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=ql[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const ql={data:mi,props:pt,emits:pt,methods:pt,computed:pt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:pt,directives:pt,watch:Jl,provide:mi,inject:Gl};function mi(t,e){return e?t?function(){return he(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Gl(t,e){return pt(ss(t),ss(e))}function ss(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function de(t,e){return t?[...new Set([].concat(t,e))]:e}function pt(t,e){return t?he(he(Object.create(null),t),e):e}function Jl(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const r in e)n[r]=de(t[r],e[r]);return n}function Yl(t,e,n,r=!1){const s={},i={};tr(i,wr,1),t.propsDefaults=Object.create(null),ca(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:dl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=K(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Ir(t.emitsOptions,p))continue;const b=e[p];if(a)if(W(i,p))b!==i[p]&&(i[p]=b,l=!0);else{const S=$e(p);s[S]=is(a,c,S,b,t,!1)}else b!==i[p]&&(i[p]=b,l=!0)}}}else{ca(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!W(e,h)&&((f=Gt(h))===h||!W(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=is(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&qe(t,"set","$attrs")}function ca(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(zn(a))continue;const l=e[a];let f;s&&W(s,f=$e(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Ir(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=K(n),l=c||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=is(s,a,h,l[h],t,!W(l,h))}}return o}function is(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&B(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Vt(s),r=l[n]=a.call(null,e),bt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Gt(n))&&(r=!0))}return r}function la(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const f=h=>{a=!0;const[p,b]=la(h,e,!0);he(o,p),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return r.set(t,Ut),Ut;if(F(i))for(let f=0;f<i.length;f++){const h=$e(i[f]);_i(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=$e(f);if(_i(h)){const p=i[f],b=o[h]=F(p)||B(p)?{type:p}:p;if(b){const S=bi(Boolean,b.type),L=bi(String,b.type);b[0]=S>-1,b[1]=L<0||S<L,(S>-1||W(b,"default"))&&c.push(h)}}}const l=[o,c];return r.set(t,l),l}function _i(t){return t[0]!=="$"}function vi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function yi(t,e){return vi(t)===vi(e)}function bi(t,e){return F(e)?e.findIndex(n=>yi(n,t)):B(e)&&yi(e,t)?0:-1}const ua=t=>t[0]==="_"||t==="$stable",xs=t=>F(t)?t.map(Le):[Le(t)],Ql=(t,e,n)=>{if(e._n)return e;const r=on((...s)=>xs(e(...s)),n);return r._c=!1,r},fa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ua(s))continue;const i=t[s];if(B(i))e[s]=Ql(s,i,r);else if(i!=null){const o=xs(i);e[s]=()=>o}}},da=(t,e)=>{const n=xs(e);t.slots.default=()=>n},Zl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),tr(e,"_",n)):fa(e,t.slots={})}else t.slots={},e&&da(t,e);tr(t.slots,wr,1)},eu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(he(s,e),!n&&c===1&&delete s._):(i=!e.$stable,fa(e,s)),o=e}else e&&(da(t,e),o={default:1});if(i)for(const c in s)!ua(c)&&!(c in o)&&delete s[c]};function ha(){return{app:null,config:{isNativeTag:Nc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tu=0;function nu(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!ie(s)&&(s=null);const i=ha(),o=new Set;let c=!1;const a=i.app={_uid:tu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Eu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(a,...f)):B(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const p=se(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,Rr(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a}};return a}}function os(t,e,n,r,s=!1){if(F(t)){t.forEach((p,b)=>os(p,e&&(F(e)?e[b]:e),n,r,s));return}if(Jn(r)&&!s)return;const i=r.shapeFlag&4?Rr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ue(l)?(f[l]=null,W(h,l)&&(h[l]=null)):le(l)&&(l.value=null)),B(a))lt(a,c,12,[o,f]);else{const p=ue(a),b=le(a);if(p||b){const S=()=>{if(t.f){const L=p?f[a]:a.value;s?F(L)&&Ts(L,i):F(L)?L.includes(i)||L.push(i):p?(f[a]=[i],W(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else p?(f[a]=o,W(h,a)&&(h[a]=o)):le(a)&&(a.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,ge(S,n)):S()}}}const ge=Ol;function ru(t){return su(t)}function su(t,e){const n=Fc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Ce,cloneNode:S,insertStaticContent:L}=t,O=(u,d,g,v=null,_=null,E=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!tn(u,d)&&(v=k(u),Ie(u,_,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:C}=d;switch(y){case Ls:A(u,d,g,v);break;case Et:U(u,d,g,v);break;case xr:u==null&&j(d,g,v,R);break;case xe:At(u,d,g,v,_,E,R,I,w);break;default:C&1?ae(u,d,g,v,_,E,R,I,w):C&6?Ct(u,d,g,v,_,E,R,I,w):(C&64||C&128)&&y.process(u,d,g,v,_,E,R,I,w,ee)}N!=null&&_&&os(N,u&&u.ref,E,d||u,!d)},A=(u,d,g,v)=>{if(u==null)r(d.el=c(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},U=(u,d,g,v)=>{u==null?r(d.el=a(d.children||""),g,v):d.el=u.el},j=(u,d,g,v)=>{[u.el,u.anchor]=L(u.children,d,g,v,u.el,u.anchor)},z=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,v),u=_;r(d,g,v)},oe=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},ae=(u,d,g,v,_,E,R,I,w)=>{R=R||d.type==="svg",u==null?be(d,g,v,_,E,R,I,w):Pe(u,d,_,E,R,I,w)},be=(u,d,g,v,_,E,R,I)=>{let w,y;const{type:N,props:C,shapeFlag:M,transition:x,patchFlag:V,dirs:J}=u;if(u.el&&S!==void 0&&V===-1)w=u.el=S(u.el);else{if(w=u.el=o(u.type,E,C&&C.is,C),M&8?f(w,u.children):M&16&&pe(u.children,w,null,v,_,E&&N!=="foreignObject",R,I),J&&dt(u,null,v,"created"),C){for(const ne in C)ne!=="value"&&!zn(ne)&&i(w,ne,null,C[ne],E,u.children,v,_,T);"value"in C&&i(w,"value",null,C.value),(y=C.onVnodeBeforeMount)&&Me(y,v,u)}Ye(w,u,u.scopeId,R,v)}J&&dt(u,null,v,"beforeMount");const Y=(!_||_&&!_.pendingBranch)&&x&&!x.persisted;Y&&x.beforeEnter(w),r(w,d,g),((y=C&&C.onVnodeMounted)||Y||J)&&ge(()=>{y&&Me(y,v,u),Y&&x.enter(w),J&&dt(u,null,v,"mounted")},_)},Ye=(u,d,g,v,_)=>{if(g&&b(u,g),v)for(let E=0;E<v.length;E++)b(u,v[E]);if(_){let E=_.subTree;if(d===E){const R=_.vnode;Ye(u,R,R.scopeId,R.slotScopeIds,_.parent)}}},pe=(u,d,g,v,_,E,R,I,w=0)=>{for(let y=w;y<u.length;y++){const N=u[y]=I?nt(u[y]):Le(u[y]);O(null,N,d,g,v,_,E,R,I)}},Pe=(u,d,g,v,_,E,R)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:y,dirs:N}=d;w|=u.patchFlag&16;const C=u.props||Q,M=d.props||Q;let x;g&&ht(g,!1),(x=M.onVnodeBeforeUpdate)&&Me(x,g,d,u),N&&dt(d,u,g,"beforeUpdate"),g&&ht(g,!0);const V=_&&d.type!=="foreignObject";if(y?He(u.dynamicChildren,y,I,g,v,V,E):R||me(u,d,I,null,g,v,V,E,!1),w>0){if(w&16)we(I,d,C,M,g,v,_);else if(w&2&&C.class!==M.class&&i(I,"class",null,M.class,_),w&4&&i(I,"style",C.style,M.style,_),w&8){const J=d.dynamicProps;for(let Y=0;Y<J.length;Y++){const ne=J[Y],Te=C[ne],kt=M[ne];(kt!==Te||ne==="value")&&i(I,ne,Te,kt,_,u.children,g,v,T)}}w&1&&u.children!==d.children&&f(I,d.children)}else!R&&y==null&&we(I,d,C,M,g,v,_);((x=M.onVnodeUpdated)||N)&&ge(()=>{x&&Me(x,g,d,u),N&&dt(d,u,g,"updated")},v)},He=(u,d,g,v,_,E,R)=>{for(let I=0;I<d.length;I++){const w=u[I],y=d[I],N=w.el&&(w.type===xe||!tn(w,y)||w.shapeFlag&70)?h(w.el):g;O(w,y,N,null,v,_,E,R,!0)}},we=(u,d,g,v,_,E,R)=>{if(g!==v){for(const I in v){if(zn(I))continue;const w=v[I],y=g[I];w!==y&&I!=="value"&&i(u,I,y,w,R,d.children,_,E,T)}if(g!==Q)for(const I in g)!zn(I)&&!(I in v)&&i(u,I,g[I],null,R,d.children,_,E,T);"value"in v&&i(u,"value",g.value,v.value)}},At=(u,d,g,v,_,E,R,I,w)=>{const y=d.el=u?u.el:c(""),N=d.anchor=u?u.anchor:c("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:x}=d;x&&(I=I?I.concat(x):x),u==null?(r(y,g,v),r(N,g,v),pe(d.children,g,N,_,E,R,I,w)):C>0&&C&64&&M&&u.dynamicChildren?(He(u.dynamicChildren,M,g,_,E,R,I),(d.key!=null||_&&d===_.subTree)&&pa(u,d,!0)):me(u,d,g,N,_,E,R,I,w)},Ct=(u,d,g,v,_,E,R,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,R,w):Ot(d,g,v,_,E,R,w):re(u,d,w)},Ot=(u,d,g,v,_,E,R)=>{const I=u.component=gu(u,v,_);if(ea(u)&&(I.ctx.renderer=ee),mu(I),I.asyncDep){if(_&&_.registerDep(I,Z),!u.el){const w=I.subTree=se(Et);U(null,w,d,g)}return}Z(I,u,d,g,_,E,R)},re=(u,d,g)=>{const v=d.component=u.component;if(Sl(u,d,g))if(v.asyncDep&&!v.asyncResolved){q(v,d,g);return}else v.next=d,bl(v.update),v.update();else d.el=u.el,v.vnode=d},Z=(u,d,g,v,_,E,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:C,u:M,parent:x,vnode:V}=u,J=N,Y;ht(u,!1),N?(N.el=V.el,q(u,N,R)):N=V,C&&Kn(C),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&Me(Y,x,N,V),ht(u,!0);const ne=Dr(u),Te=u.subTree;u.subTree=ne,O(Te,ne,h(Te.el),k(Te),u,_,E),N.el=ne.el,J===null&&Al(u,ne.el),M&&ge(M,_),(Y=N.props&&N.props.onVnodeUpdated)&&ge(()=>Me(Y,x,N,V),_)}else{let N;const{el:C,props:M}=d,{bm:x,m:V,parent:J}=u,Y=Jn(d);if(ht(u,!1),x&&Kn(x),!Y&&(N=M&&M.onVnodeBeforeMount)&&Me(N,J,d),ht(u,!0),C&&$){const ne=()=>{u.subTree=Dr(u),$(C,u.subTree,u,_,null)};Y?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=Dr(u);O(null,ne,g,v,u,_,E),d.el=ne.el}if(V&&ge(V,_),!Y&&(N=M&&M.onVnodeMounted)){const ne=d;ge(()=>Me(N,J,ne),_)}(d.shapeFlag&256||J&&Jn(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&ge(u.a,_),u.isMounted=!0,d=g=v=null}},w=u.effect=new Cs(I,()=>Vo(y),u.scope),y=u.update=()=>w.run();y.id=u.uid,ht(u,!0),y()},q=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,Xl(u,d.props,v,g),eu(u,d.children,g),Jt(),br(void 0,u.update),Yt()},me=(u,d,g,v,_,E,R,I,w=!1)=>{const y=u&&u.children,N=u?u.shapeFlag:0,C=d.children,{patchFlag:M,shapeFlag:x}=d;if(M>0){if(M&128){je(y,C,g,v,_,E,R,I,w);return}else if(M&256){Pt(y,C,g,v,_,E,R,I,w);return}}x&8?(N&16&&T(y,_,E),C!==y&&f(g,C)):N&16?x&16?je(y,C,g,v,_,E,R,I,w):T(y,_,E,!0):(N&8&&f(g,""),x&16&&pe(C,g,v,_,E,R,I,w))},Pt=(u,d,g,v,_,E,R,I,w)=>{u=u||Ut,d=d||Ut;const y=u.length,N=d.length,C=Math.min(y,N);let M;for(M=0;M<C;M++){const x=d[M]=w?nt(d[M]):Le(d[M]);O(u[M],x,g,null,_,E,R,I,w)}y>N?T(u,_,E,!0,!1,C):pe(d,g,v,_,E,R,I,w,C)},je=(u,d,g,v,_,E,R,I,w)=>{let y=0;const N=d.length;let C=u.length-1,M=N-1;for(;y<=C&&y<=M;){const x=u[y],V=d[y]=w?nt(d[y]):Le(d[y]);if(tn(x,V))O(x,V,g,null,_,E,R,I,w);else break;y++}for(;y<=C&&y<=M;){const x=u[C],V=d[M]=w?nt(d[M]):Le(d[M]);if(tn(x,V))O(x,V,g,null,_,E,R,I,w);else break;C--,M--}if(y>C){if(y<=M){const x=M+1,V=x<N?d[x].el:v;for(;y<=M;)O(null,d[y]=w?nt(d[y]):Le(d[y]),g,V,_,E,R,I,w),y++}}else if(y>M)for(;y<=C;)Ie(u[y],_,E,!0),y++;else{const x=y,V=y,J=new Map;for(y=V;y<=M;y++){const _e=d[y]=w?nt(d[y]):Le(d[y]);_e.key!=null&&J.set(_e.key,y)}let Y,ne=0;const Te=M-V+1;let kt=!1,Xs=0;const en=new Array(Te);for(y=0;y<Te;y++)en[y]=0;for(y=x;y<=C;y++){const _e=u[y];if(ne>=Te){Ie(_e,_,E,!0);continue}let Ne;if(_e.key!=null)Ne=J.get(_e.key);else for(Y=V;Y<=M;Y++)if(en[Y-V]===0&&tn(_e,d[Y])){Ne=Y;break}Ne===void 0?Ie(_e,_,E,!0):(en[Ne-V]=y+1,Ne>=Xs?Xs=Ne:kt=!0,O(_e,d[Ne],g,null,_,E,R,I,w),ne++)}const Qs=kt?iu(en):Ut;for(Y=Qs.length-1,y=Te-1;y>=0;y--){const _e=V+y,Ne=d[_e],Zs=_e+1<N?d[_e+1].el:v;en[y]===0?O(null,Ne,g,Zs,_,E,R,I,w):kt&&(Y<0||y!==Qs[Y]?ke(Ne,g,Zs,2):Y--)}}},ke=(u,d,g,v,_=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:y}=u;if(y&6){ke(u.component.subTree,d,g,v);return}if(y&128){u.suspense.move(d,g,v);return}if(y&64){R.move(u,d,g,ee);return}if(R===xe){r(E,d,g);for(let C=0;C<w.length;C++)ke(w[C],d,g,v);r(u.anchor,d,g);return}if(R===xr){z(u,d,g);return}if(v!==2&&y&1&&I)if(v===0)I.beforeEnter(E),r(E,d,g),ge(()=>I.enter(E),_);else{const{leave:C,delayLeave:M,afterLeave:x}=I,V=()=>r(E,d,g),J=()=>{C(E,()=>{V(),x&&x()})};M?M(E,V,J):J()}else r(E,d,g)},Ie=(u,d,g,v=!1,_=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:y,shapeFlag:N,patchFlag:C,dirs:M}=u;if(I!=null&&os(I,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const x=N&1&&M,V=!Jn(u);let J;if(V&&(J=R&&R.onVnodeBeforeUnmount)&&Me(J,d,u),N&6)P(u.component,g,v);else{if(N&128){u.suspense.unmount(g,v);return}x&&dt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,_,ee,v):y&&(E!==xe||C>0&&C&64)?T(y,d,g,!1,!0):(E===xe&&C&384||!_&&N&16)&&T(w,d,g),v&&Nr(u)}(V&&(J=R&&R.onVnodeUnmounted)||x)&&ge(()=>{J&&Me(J,d,u),x&&dt(u,null,d,"unmounted")},g)},Nr=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===xe){m(g,v);return}if(d===xr){oe(u);return}const E=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:I}=_,w=()=>R(g,E);I?I(u.el,E,w):w()}else E()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:v,scope:_,update:E,subTree:R,um:I}=u;v&&Kn(v),_.stop(),E&&(E.active=!1,Ie(R,u,d,g)),I&&ge(I,d),ge(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,E=0)=>{for(let R=E;R<u.length;R++)Ie(u[R],d,g,v,_)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),G=(u,d,g)=>{u==null?d._vnode&&Ie(d._vnode,null,null,!0):O(d._vnode||null,u,d,null,null,null,g),qo(),d._vnode=u},ee={p:O,um:Ie,m:ke,r:Nr,mt:Ot,mc:pe,pc:me,pbc:He,n:k,o:t};let H,$;return e&&([H,$]=e(ee)),{render:G,hydrate:H,createApp:nu(G,H)}}function ht({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function pa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=nt(s[i]),c.el=o.el),n||pa(o,c))}}function iu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ou=t=>t.__isTeleport,xe=Symbol(void 0),Ls=Symbol(void 0),Et=Symbol(void 0),xr=Symbol(void 0),dn=[];let Ae=null;function or(t=!1){dn.push(Ae=t?null:[])}function au(){dn.pop(),Ae=dn[dn.length-1]||null}let bn=1;function Ii(t){bn+=t}function ga(t){return t.dynamicChildren=bn>0?Ae||Ut:null,au(),bn>0&&Ae&&Ae.push(t),t}function as(t,e,n,r,s,i){return ga(In(t,e,n,r,s,i,!0))}function cu(t,e,n,r,s){return ga(se(t,e,n,r,s,!0))}function cs(t){return t?t.__v_isVNode===!0:!1}function tn(t,e){return t.type===e.type&&t.key===e.key}const wr="__vInternal",ma=({key:t})=>t!=null?t:null,Yn=({ref:t,ref_key:e,ref_for:n})=>t!=null?ue(t)||le(t)||B(t)?{i:Se,r:t,k:e,f:!!n}:t:null;function In(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ma(e),ref:e&&Yn(e),scopeId:Yo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Us(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),bn>0&&!o&&Ae&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ae.push(a),a}const se=lu;function lu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jl)&&(t=Et),cs(t)){const c=Wt(t,e,!0);return n&&Us(c,n),bn>0&&!i&&Ae&&(c.shapeFlag&6?Ae[Ae.indexOf(t)]=c:Ae.push(c)),c.patchFlag|=-2,c}if(Iu(t)&&(t=t.__vccOpts),e){e=uu(e);let{class:c,style:a}=e;c&&!ue(c)&&(e.class=Es(c)),ie(a)&&(xo(a)&&!F(a)&&(a=he({},a)),e.style=Is(a))}const o=ue(t)?1:Cl(t)?128:ou(t)?64:ie(t)?4:B(t)?2:0;return In(t,e,n,r,s,o,i,!0)}function uu(t){return t?xo(t)||wr in t?he({},t):t:null}function Wt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?du(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ma(c),ref:e&&e.ref?n&&s?F(s)?s.concat(Yn(e)):[s,Yn(e)]:Yn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wt(t.ssContent),ssFallback:t.ssFallback&&Wt(t.ssFallback),el:t.el,anchor:t.anchor}}function Tr(t=" ",e=0){return se(Ls,null,t,e)}function fu(t="",e=!1){return e?(or(),cu(Et,null,t)):se(Et,null,t)}function Le(t){return t==null||typeof t=="boolean"?se(Et):F(t)?se(xe,null,t.slice()):typeof t=="object"?nt(t):se(Ls,null,String(t))}function nt(t){return t.el===null||t.memo?t:Wt(t)}function Us(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Us(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(wr in e)?e._ctx=Se:s===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[Tr(e)]):n=8);t.children=e,t.shapeFlag|=n}function du(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Es([e.class,r.class]));else if(s==="style")e.style=Is([e.style,r.style]);else if(pr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Me(t,e,n,r=null){Oe(t,e,7,[n,r])}const hu=ha();let pu=0;function gu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hu,i={uid:pu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:la(r,s),emitsOptions:Jo(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wl.bind(null,i),t.ce&&t.ce(i),i}let ce=null;const Vt=t=>{ce=t,t.scope.on()},bt=()=>{ce&&ce.scope.off(),ce=null};function _a(t){return t.vnode.shapeFlag&4}let En=!1;function mu(t,e=!1){En=e;const{props:n,children:r}=t.vnode,s=_a(t);Yl(t,n,s,e),Zl(t,r);const i=s?_u(t,e):void 0;return En=!1,i}function _u(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Lo(new Proxy(t.ctx,Vl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?yu(t):null;Vt(t),Jt();const i=lt(r,t,0,[t.props,s]);if(Yt(),bt(),Io(i)){if(i.then(bt,bt),e)return i.then(o=>{Ei(t,o,e)}).catch(o=>{yr(o,t,0)});t.asyncDep=i}else Ei(t,i,e)}else va(t,e)}function Ei(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Ho(e)),va(t,n)}let wi;function va(t,e,n){const r=t.type;if(!t.render){if(!e&&wi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=he(he({isCustomElement:i,delimiters:c},o),a);r.render=wi(s,l)}}t.render=r.render||Ce}Vt(t),Jt(),zl(t),Yt(),bt()}function vu(t){return new Proxy(t.attrs,{get(e,n){return ye(t,"get","$attrs"),e[n]}})}function yu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=vu(t))},slots:t.slots,emit:t.emit,expose:e}}function Rr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ho(Lo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sr)return sr[n](t)}}))}function bu(t){return B(t)&&t.displayName||t.name}function Iu(t){return B(t)&&"__vccOpts"in t}const Ue=(t,e)=>_l(t,e,En);function ya(t,e,n){const r=arguments.length;return r===2?ie(e)&&!F(e)?cs(e)?se(t,null,[e]):se(t,e):se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&cs(n)&&(n=[n]),se(t,e,n))}const Eu="3.2.35",wu="http://www.w3.org/2000/svg",mt=typeof document!="undefined"?document:null,Ti=mt&&mt.createElement("template"),Tu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?mt.createElementNS(wu,t):mt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mt.createTextNode(t),createComment:t=>mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ti.innerHTML=r?`<svg>${t}</svg>`:t;const c=Ti.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ru(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Su(t,e,n){const r=t.style,s=ue(n);if(n&&!s){for(const i in n)ls(r,i,n[i]);if(e&&!ue(e))for(const i in e)n[i]==null&&ls(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ri=/\s*!important$/;function ls(t,e,n){if(F(n))n.forEach(r=>ls(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Au(t,e);Ri.test(n)?t.setProperty(Gt(r),n.replace(Ri,""),"important"):t[r]=n}}const Si=["Webkit","Moz","ms"],Lr={};function Au(t,e){const n=Lr[e];if(n)return n;let r=$e(e);if(r!=="filter"&&r in t)return Lr[e]=r;r=_r(r);for(let s=0;s<Si.length;s++){const i=Si[s]+r;if(i in t)return Lr[e]=i}return e}const Ai="http://www.w3.org/1999/xlink";function Cu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ai,e.slice(6,e.length)):t.setAttributeNS(Ai,e,n);else{const i=Cc(e);n==null||i&&!vo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ou(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=vo(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}const[ba,Pu]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let us=0;const ku=Promise.resolve(),Nu=()=>{us=0},Mu=()=>us||(ku.then(Nu),us=ba());function xt(t,e,n,r){t.addEventListener(e,n,r)}function Du(t,e,n,r){t.removeEventListener(e,n,r)}function xu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Lu(e);if(r){const l=i[e]=Uu(r,s);xt(t,c,l,a)}else o&&(Du(t,c,o,a),i[e]=void 0)}}const Ci=/(?:Once|Passive|Capture)$/;function Lu(t){let e;if(Ci.test(t)){e={};let n;for(;n=t.match(Ci);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Gt(t.slice(2)),e]}function Uu(t,e){const n=r=>{const s=r.timeStamp||ba();(Pu||s>=n.attached-1)&&Oe(Fu(r,n.value),e,5,[r])};return n.value=t,n.attached=Mu(),n}function Fu(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Oi=/^on[a-z]/,Bu=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?Ru(t,r,s):e==="style"?Su(t,n,r):pr(e)?ws(e)||xu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$u(t,e,r,s))?Ou(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cu(t,e,r,s))};function $u(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Oi.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Oi.test(e)&&ue(n)?!1:e in t}const Pi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Kn(e,n):e};function Hu(t){t.target.composing=!0}function ki(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dg={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Pi(s);const i=r||s.props&&s.props.type==="number";xt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Gr(c)),t._assign(c)}),n&&xt(t,"change",()=>{t.value=t.value.trim()}),e||(xt(t,"compositionstart",Hu),xt(t,"compositionend",ki),xt(t,"change",ki))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Pi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Gr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ju=["ctrl","shift","alt","meta"],Wu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ju.some(n=>t[`${n}Key`]&&!e.includes(n))},xg=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Wu[e[s]];if(i&&i(n,e))return}return t(n,...r)},Vu=he({patchProp:Bu},Tu);let Ni;function zu(){return Ni||(Ni=ru(Vu))}const Ku=(...t)=>{const e=zu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qu(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qu(t){return ue(t)?document.querySelector(t):t}/**
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
 */const Ia=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gu=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ea={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,b=l&63;a||(b=64,o||(p=64)),r.push(n[f],n[h],n[p],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ia(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw Error();const p=i<<2|c>>4;if(r.push(p),l!==64){const b=c<<4&240|l>>2;if(r.push(b),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ju=function(t){const e=Ia(t);return Ea.encodeByteArray(e,!0)},wa=function(t){return Ju(t).replace(/\./g,"")},Yu=function(t){try{return Ea.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Xu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function Zu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tf(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nf(){return typeof indexedDB=="object"}function rf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const sf="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sf,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pn.prototype.create)}}class Pn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?of(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Xt(s,c,r)}}function of(t,e){return t.replace(af,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const af=/\{\$([^}]+)}/g;function cf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ar(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mi(i)&&Mi(o)){if(!ar(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mi(t){return t!==null&&typeof t=="object"}/**
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
 */function kn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function an(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lf(t,e){const n=new uf(t,e);return n.subscribe.bind(n)}class uf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ff(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ur),s.error===void 0&&(s.error=Ur),s.complete===void 0&&(s.complete=Ur);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ff(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ur(){}/**
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
 */function St(t){return t&&t._delegate?t._delegate:t}class zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gt="[DEFAULT]";/**
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
 */class df{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pf(e))try{this.getOrInitializeService({instanceIdentifier:gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gt){return this.instances.has(e)}getOptions(e=gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gt){return this.component?this.component.multipleInstances?e:gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hf(t){return t===gt?void 0:t}function pf(t){return t.instantiationMode==="EAGER"}/**
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
 */class gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new df(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const mf={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},_f=te.INFO,vf={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},yf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=_f,this._logHandler=yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const bf=(t,e)=>e.some(n=>t instanceof n);let Di,xi;function If(){return Di||(Di=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ef(){return xi||(xi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ra=new WeakMap,fs=new WeakMap,Sa=new WeakMap,Fr=new WeakMap,Fs=new WeakMap;function wf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ra.set(n,t)}).catch(()=>{}),Fs.set(e,t),e}function Tf(t){if(fs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fs.set(t,e)}let ds={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rf(t){ds=t(ds)}function Sf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Br(this),e,...n);return Sa.set(r,e.sort?e.sort():[e]),ut(r)}:Ef().includes(t)?function(...e){return t.apply(Br(this),e),ut(Ra.get(this))}:function(...e){return ut(t.apply(Br(this),e))}}function Af(t){return typeof t=="function"?Sf(t):(t instanceof IDBTransaction&&Tf(t),bf(t,If())?new Proxy(t,ds):t)}function ut(t){if(t instanceof IDBRequest)return wf(t);if(Fr.has(t))return Fr.get(t);const e=Af(t);return e!==t&&(Fr.set(t,e),Fs.set(e,t)),e}const Br=t=>Fs.get(t);function Cf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ut(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ut(o.result),a.oldVersion,a.newVersion,ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const Of=["get","getKey","getAll","getAllKeys","count"],Pf=["put","add","delete","clear"],$r=new Map;function Li(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($r.get(e))return $r.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Pf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Of.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return $r.set(e,i),i}Rf(t=>ri(ni({},t),{get:(e,n,r)=>Li(e,n)||t.get(e,n,r),has:(e,n)=>!!Li(e,n)||t.has(e,n)}));/**
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
 */class kf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hs="@firebase/app",Ui="0.7.24";/**
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
 */const Bs=new Ta("@firebase/app"),Mf="@firebase/app-compat",Df="@firebase/analytics-compat",xf="@firebase/analytics",Lf="@firebase/app-check-compat",Uf="@firebase/app-check",Ff="@firebase/auth",Bf="@firebase/auth-compat",$f="@firebase/database",Hf="@firebase/database-compat",jf="@firebase/functions",Wf="@firebase/functions-compat",Vf="@firebase/installations",zf="@firebase/installations-compat",Kf="@firebase/messaging",qf="@firebase/messaging-compat",Gf="@firebase/performance",Jf="@firebase/performance-compat",Yf="@firebase/remote-config",Xf="@firebase/remote-config-compat",Qf="@firebase/storage",Zf="@firebase/storage-compat",ed="@firebase/firestore",td="@firebase/firestore-compat",nd="firebase",rd="9.8.1";/**
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
 */const Aa="[DEFAULT]",sd={[hs]:"fire-core",[Mf]:"fire-core-compat",[xf]:"fire-analytics",[Df]:"fire-analytics-compat",[Uf]:"fire-app-check",[Lf]:"fire-app-check-compat",[Ff]:"fire-auth",[Bf]:"fire-auth-compat",[$f]:"fire-rtdb",[Hf]:"fire-rtdb-compat",[jf]:"fire-fn",[Wf]:"fire-fn-compat",[Vf]:"fire-iid",[zf]:"fire-iid-compat",[Kf]:"fire-fcm",[qf]:"fire-fcm-compat",[Gf]:"fire-perf",[Jf]:"fire-perf-compat",[Yf]:"fire-rc",[Xf]:"fire-rc-compat",[Qf]:"fire-gcs",[Zf]:"fire-gcs-compat",[ed]:"fire-fst",[td]:"fire-fst-compat","fire-js":"fire-js",[nd]:"fire-js-all"};/**
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
 */const cr=new Map,ps=new Map;function id(t,e){try{t.container.addComponent(e)}catch(n){Bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(ps.has(e))return Bs.debug(`There were multiple attempts to register component ${e}.`),!1;ps.set(e,t);for(const n of cr.values())id(n,t);return!0}function Ca(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const od={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},wt=new Pn("app","Firebase",od);/**
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
 */class ad{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=rd;function cd(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Aa,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw wt.create("bad-app-name",{appName:String(r)});const s=cr.get(r);if(s){if(ar(t,s.options)&&ar(n,s.config))return s;throw wt.create("duplicate-app",{appName:r})}const i=new gf(r);for(const c of ps.values())i.addComponent(c);const o=new ad(t,n,i);return cr.set(r,o),o}function ld(t=Aa){const e=cr.get(t);if(!e)throw wt.create("no-app",{appName:t});return e}function $t(t,e,n){var r;let s=(r=sd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bs.warn(c.join(" "));return}wn(new zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ud="firebase-heartbeat-database",fd=1,Tn="firebase-heartbeat-store";let Hr=null;function Oa(){return Hr||(Hr=Cf(ud,fd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Tn)}}}).catch(t=>{throw wt.create("storage-open",{originalErrorMessage:t.message})})),Hr}async function dd(t){try{return(await Oa()).transaction(Tn).objectStore(Tn).get(Pa(t))}catch(e){throw wt.create("storage-get",{originalErrorMessage:e.message})}}async function Fi(t,e){try{const r=(await Oa()).transaction(Tn,"readwrite");return await r.objectStore(Tn).put(e,Pa(t)),r.done}catch(n){throw wt.create("storage-set",{originalErrorMessage:n.message})}}function Pa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hd=1024,pd=30*24*60*60*1e3;class gd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _d(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=pd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bi(),{heartbeatsToSend:n,unsentEntries:r}=md(this._heartbeatsCache.heartbeats),s=wa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bi(){return new Date().toISOString().substring(0,10)}function md(t,e=hd){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$i(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$i(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _d{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nf()?rf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $i(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vd(t){wn(new zt("platform-logger",e=>new kf(e),"PRIVATE")),wn(new zt("heartbeat",e=>new gd(e),"PRIVATE")),$t(hs,Ui,t),$t(hs,Ui,"esm2017"),$t("fire-js","")}vd("");function $s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ka(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yd=ka,Na=new Pn("auth","Firebase",ka());/**
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
 */const Hi=new Ta("@firebase/auth");function Xn(t,...e){Hi.logLevel<=te.ERROR&&Hi.error(`Auth (${Sr}): ${t}`,...e)}/**
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
 */function Ee(t,...e){throw Hs(t,...e)}function Fe(t,...e){return Hs(t,...e)}function Ma(t,e,n){const r=Object.assign(Object.assign({},yd()),{[e]:n});return new Pn("auth","Firebase",r).create(e,{appName:t.name})}function bd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ee(t,"argument-error"),Ma(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Na.create(t,...e)}function D(t,e,...n){if(!t)throw Hs(e,...n)}function Ve(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xn(e),new Error(e)}function Ge(t,e){t||Ve(e)}/**
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
 */const ji=new Map;function ze(t){Ge(t instanceof Function,"Expected a class definition");let e=ji.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ji.set(t,e),e)}/**
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
 */function Id(t,e){const n=Ca(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ar(i,e!=null?e:{}))return s;Ee(s,"already-initialized")}return n.initialize({options:e})}function Ed(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function gs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wd(){return Wi()==="http:"||Wi()==="https:"}function Wi(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Td(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wd()||Zu()||"connection"in navigator)?navigator.onLine:!0}function Rd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=Qu()||ef()}get(){return Td()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function js(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Da{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ad=new Nn(3e4,6e4);function Mn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,r,s={}){return xa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=kn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Da.fetch()(La(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function xa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Sd),e);try{const s=new Cd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw jr(t,"email-already-in-use",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ma(t,f,l);Ee(t,f)}}catch(s){if(s instanceof Xt)throw s;Ee(t,"network-request-failed")}}async function xn(t,e,n,r,s={}){const i=await Dn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ee(t,"multi-factor-auth-required",{_serverResponse:i}),i}function La(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?js(t.config,s):`${t.config.apiScheme}://${s}`}class Cd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),Ad.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Od(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function Pd(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kd(t,e=!1){const n=St(t),r=await n.getIdToken(e),s=Ws(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hn(Wr(s.auth_time)),issuedAtTime:hn(Wr(s.iat)),expirationTime:hn(Wr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wr(t){return Number(t)*1e3}function Ws(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yu(n);return s?JSON.parse(s):(Xn("Failed to decode base64 JWT payload"),null)}catch(s){return Xn("Caught error parsing JWT payload as JSON",s),null}}function Nd(t){const e=Ws(t);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&Md(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Md({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Dd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ua{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hn(this.lastLoginAt),this.creationTime=hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Rn(t,Pd(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ud(i.providerUserInfo):[],c=Ld(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ua(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function xd(t){const e=St(t);await lr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ld(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ud(t){return t.map(e=>{var{providerId:n}=e,r=$s(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Fd(t,e){const n=await xa(t,{},async()=>{const r=kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=La(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Da.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Nd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Fd(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Sn;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return Ve("not implemented")}}/**
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
 */function Qe(t,e){D(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ua(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kd(this,e)}reload(){return xd(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rn(this,Od(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:oe,providerData:ae,stsTokenManager:be}=n;D(j&&be,e,"internal-error");const Ye=Sn.fromJSON(this.name,be);D(typeof j=="string",e,"internal-error"),Qe(h,e.name),Qe(p,e.name),D(typeof z=="boolean",e,"internal-error"),D(typeof oe=="boolean",e,"internal-error"),Qe(b,e.name),Qe(S,e.name),Qe(L,e.name),Qe(O,e.name),Qe(A,e.name),Qe(U,e.name);const pe=new It({uid:j,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:oe,photoURL:S,phoneNumber:b,tenantId:L,stsTokenManager:Ye,createdAt:A,lastLoginAt:U});return ae&&Array.isArray(ae)&&(pe.providerData=ae.map(Pe=>Object.assign({},Pe))),O&&(pe._redirectEventId=O),pe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Sn;s.updateFromServerResponse(n);const i=new It({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lr(i),i}}/**
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
 */class Fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fa.type="NONE";const Vi=Fa;/**
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
 */function Qn(t,e,n){return`firebase:${t}:${e}:${n}`}class Ht{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ht(ze(Vi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ze(Vi);const o=Qn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=It._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Ht(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ht(i,e,r))}}/**
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
 */function zi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ha(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ba(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wa(e))return"Blackberry";if(Va(e))return"Webos";if(Vs(e))return"Safari";if((e.includes("chrome/")||$a(e))&&!e.includes("edge/"))return"Chrome";if(ja(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ba(t=fe()){return/firefox\//i.test(t)}function Vs(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $a(t=fe()){return/crios\//i.test(t)}function Ha(t=fe()){return/iemobile/i.test(t)}function ja(t=fe()){return/android/i.test(t)}function Wa(t=fe()){return/blackberry/i.test(t)}function Va(t=fe()){return/webos/i.test(t)}function Ar(t=fe()){return/iphone|ipad|ipod/i.test(t)}function Bd(t=fe()){var e;return Ar(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $d(){return tf()&&document.documentMode===10}function za(t=fe()){return Ar(t)||ja(t)||Va(t)||Wa(t)||/windows phone/i.test(t)||Ha(t)}function Hd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ka(t,e=[]){let n;switch(t){case"Browser":n=zi(fe());break;case"Worker":n=`${zi(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
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
 */class jd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
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
 */class Wd{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ki(this),this.idTokenSubscription=new Ki(this),this.beforeStateQueue=new jd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Na,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ht.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?St(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Ht.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ka(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ln(t){return St(t)}class Ki{constructor(e){this.auth=e,this.observer=null,this.addObserver=lf(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class zs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,n){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}}async function Vd(t,e){return Dn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function zd(t,e){return xn(t,"POST","/v1/accounts:signInWithPassword",Mn(t,e))}/**
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
 */async function Kd(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}async function qd(t,e){return xn(t,"POST","/v1/accounts:signInWithEmailLink",Mn(t,e))}/**
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
 */class An extends zs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new An(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new An(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return zd(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Kd(e,{email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vd(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qd(e,{idToken:n,email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jt(t,e){return xn(t,"POST","/v1/accounts:signInWithIdp",Mn(t,e))}/**
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
 */const Gd="http://localhost";class Tt extends zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ee("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$s(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Tt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jt(e,n)}buildRequest(){const e={requestUri:Gd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=kn(n)}return e}}/**
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
 */function Jd(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yd(t){const e=an(cn(t)).link,n=e?an(cn(e)).deep_link_id:null,r=an(cn(t)).deep_link_id;return(r?an(cn(r)).link:null)||r||n||e||t}class Ks{constructor(e){var n,r,s,i,o,c;const a=an(cn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=Jd((s=a.mode)!==null&&s!==void 0?s:null);D(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Yd(e);try{return new Ks(n)}catch{return null}}}/**
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
 */class Qt{constructor(){this.providerId=Qt.PROVIDER_ID}static credential(e,n){return An._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ks.parseLink(n);return D(r,"argument-error"),An._fromEmailAndCode(e,r.code,r.tenantId)}}Qt.PROVIDER_ID="password";Qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Un extends qs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class st extends Un{constructor(){super("facebook.com")}static credential(e){return Tt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.FACEBOOK_SIGN_IN_METHOD="facebook.com";st.PROVIDER_ID="facebook.com";/**
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
 */class it extends Un{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
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
 */class ot extends Un{constructor(){super("github.com")}static credential(e){return Tt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
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
 */class at extends Un{constructor(){super("twitter.com")}static credential(e,n){return Tt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return at.credential(n,r)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
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
 */async function Xd(t,e){return xn(t,"POST","/v1/accounts:signUp",Mn(t,e))}/**
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
 */class Rt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await It._fromIdTokenResponse(e,r,s),o=qi(r);return new Rt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qi(r);return new Rt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ur extends Xt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ur.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ur(e,n,r,s)}}function qa(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ur._fromErrorAndOperation(t,i,e,r):i})}async function Qd(t,e,n=!1){const r=await Rn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rt._forOperation(t,"link",r)}/**
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
 */async function Zd(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Rn(t,qa(r,s,e,t),n);D(i.idToken,r,"internal-error");const o=Ws(i.idToken);D(o,r,"internal-error");const{sub:c}=o;return D(t.uid===c,r,"user-mismatch"),Rt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ee(r,"user-mismatch"),i}}/**
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
 */async function Ga(t,e,n=!1){const r="signIn",s=await qa(t,r,e),i=await Rt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function eh(t,e){return Ga(Ln(t),e)}async function Lg(t,e,n){const r=Ln(t),s=await Xd(r,{returnSecureToken:!0,email:e,password:n}),i=await Rt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Ug(t,e,n){return eh(St(t),Qt.credential(e,n))}function Ja(t,e,n,r){return St(t).onAuthStateChanged(e,n,r)}function th(t){return St(t).signOut()}const fr="__sak";/**
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
 */class Ya{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fr,"1"),this.storage.removeItem(fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function nh(){const t=fe();return Vs(t)||Ar(t)}const rh=1e3,sh=10;class Xa extends Ya{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nh()&&Hd(),this.fallbackToPolling=za(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$d()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xa.type="LOCAL";const ih=Xa;/**
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
 */class Qa extends Ya{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qa.type="SESSION";const Za=Qa;/**
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
 */function oh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await oh(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cr.receivers=[];/**
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
 */function Gs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ah{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Gs("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Be(){return window}function ch(t){Be().location.href=t}/**
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
 */function ec(){return typeof Be().WorkerGlobalScope!="undefined"&&typeof Be().importScripts=="function"}async function lh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fh(){return ec()?self:null}/**
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
 */const tc="firebaseLocalStorageDb",dh=1,dr="firebaseLocalStorage",nc="fbase_key";class Fn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Or(t,e){return t.transaction([dr],e?"readwrite":"readonly").objectStore(dr)}function hh(){const t=indexedDB.deleteDatabase(tc);return new Fn(t).toPromise()}function ms(){const t=indexedDB.open(tc,dh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dr,{keyPath:nc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dr)?e(r):(r.close(),await hh(),e(await ms()))})})}async function Gi(t,e,n){const r=Or(t,!0).put({[nc]:e,value:n});return new Fn(r).toPromise()}async function ph(t,e){const n=Or(t,!1).get(e),r=await new Fn(n).toPromise();return r===void 0?null:r.value}function Ji(t,e){const n=Or(t,!0).delete(e);return new Fn(n).toPromise()}const gh=800,mh=3;class rc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ms(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ec()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cr._getInstance(fh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lh(),!this.activeServiceWorker)return;this.sender=new ah(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ms();return await Gi(e,fr,"1"),await Ji(e,fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ph(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ji(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Or(s,!1).getAll();return new Fn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rc.type="LOCAL";const _h=rc;/**
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
 */function vh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vh().appendChild(r)})}function bh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nn(3e4,6e4);/**
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
 */function sc(t,e){return e?ze(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Js extends zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ih(t){return Ga(t.auth,new Js(t),t.bypassAuthState)}function Eh(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Zd(n,new Js(t),t.bypassAuthState)}async function wh(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Qd(n,new Js(t),t.bypassAuthState)}/**
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
 */class ic{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ih;case"linkViaPopup":case"linkViaRedirect":return wh;case"reauthViaPopup":case"reauthViaRedirect":return Eh;default:Ee(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Th=new Nn(2e3,1e4);async function Fg(t,e,n){const r=Ln(t);bd(t,e,qs);const s=sc(r,n);return new vt(r,"signInViaPopup",e,s).executeNotNull()}class vt extends ic{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,vt.currentPopupAction&&vt.currentPopupAction.cancel(),vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=Gs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Th.get())};e()}}vt.currentPopupAction=null;/**
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
 */const Rh="pendingRedirect",Zn=new Map;class Sh extends ic{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zn.get(this.auth._key());if(!e){try{const r=await Ah(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zn.set(this.auth._key(),e)}return this.bypassAuthState||Zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ah(t,e){const n=Ph(e),r=Oh(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ch(t,e){Zn.set(t._key(),e)}function Oh(t){return ze(t._redirectPersistence)}function Ph(t){return Qn(Rh,t.config.apiKey,t.name)}async function kh(t,e,n=!1){const r=Ln(t),s=sc(r,e),o=await new Sh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Nh=10*60*1e3;class Mh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Nh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yi(e))}saveEventToCache(e){this.cachedEventUids.add(Yi(e)),this.lastProcessedEventTime=Date.now()}}function Yi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oc(t);default:return!1}}/**
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
 */async function xh(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
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
 */const Lh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uh=/^https?/;async function Fh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xh(t);for(const n of e)try{if(Bh(n))return}catch{}Ee(t,"unauthorized-domain")}function Bh(t){const e=gs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Uh.test(n))return!1;if(Lh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $h=new Nn(3e4,6e4);function Xi(){const t=Be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Hh(t){return new Promise((e,n)=>{var r,s,i;function o(){Xi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xi(),n(Fe(t,"network-request-failed"))},timeout:$h.get()})}if(!((s=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Be().gapi)===null||i===void 0)&&i.load)o();else{const c=bh("iframefcb");return Be()[c]=()=>{gapi.load?o():n(Fe(t,"network-request-failed"))},yh(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw er=null,e})}let er=null;function jh(t){return er=er||Hh(t),er}/**
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
 */const Wh=new Nn(5e3,15e3),Vh="__/auth/iframe",zh="emulator/auth/iframe",Kh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gh(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?js(e,zh):`https://${t.config.authDomain}/${Vh}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},s=qh.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${kn(r).slice(1)}`}async function Jh(t){const e=await jh(t),n=Be().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Gh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kh,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fe(t,"network-request-failed"),c=Be().setTimeout(()=>{i(o)},Wh.get());function a(){Be().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Yh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xh=500,Qh=600,Zh="_blank",ep="http://localhost";class Qi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tp(t,e,n,r=Xh,s=Qh){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Yh),{width:r.toString(),height:s.toString(),top:i,left:o}),l=fe().toLowerCase();n&&(c=$a(l)?Zh:n),Ba(l)&&(e=e||ep,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[b,S])=>`${p}${b}=${S},`,"");if(Bd(l)&&c!=="_self")return np(e||"",c),new Qi(null);const h=window.open(e||"",c,f);D(h,t,"popup-blocked");try{h.focus()}catch{}return new Qi(h)}function np(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rp="__/auth/handler",sp="emulator/auth/handler";function Zi(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:s};if(e instanceof qs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,l]of Object.entries(i||{}))o[a]=l}if(e instanceof Un){const a=e.getScopes().filter(l=>l!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const a of Object.keys(c))c[a]===void 0&&delete c[a];return`${ip(t)}?${kn(c).slice(1)}`}function ip({config:t}){return t.emulator?js(t,sp):`https://${t.authDomain}/${rp}`}/**
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
 */const Vr="webStorageSupport";class op{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Za,this._completeRedirectFn=kh,this._overrideRedirectResult=Ch}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Zi(e,n,r,gs(),s);return tp(e,o,Gs())}async _openRedirect(e,n,r,s){return await this._originValidation(e),ch(Zi(e,n,r,gs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Jh(e),r=new Mh(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vr,{type:Vr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vr];o!==void 0&&n(!!o),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return za()||Vs()||Ar()}}const ap=op;var eo="@firebase/auth",to="0.20.1";/**
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
 */class cp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function up(t){wn(new zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((c,a)=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:c.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:c.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ka(t)},f=new Wd(c,a,l);return Ed(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new zt("auth-internal",e=>{const n=Ln(e.getProvider("auth").getImmediate());return(r=>new cp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(eo,to,lp(t)),$t(eo,to,"esm2017")}/**
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
 */function ac(t=ld()){const e=Ca(t,"auth");return e.isInitialized()?e.getImmediate():Id(t,{popupRedirectResolver:ap,persistence:[_h,ih,Za]})}up("Browser");/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const cc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Zt=t=>cc?Symbol(t):"_vr_"+t,fp=Zt("rvlm"),no=Zt("rvd"),Pr=Zt("r"),lc=Zt("rl"),_s=Zt("rvl"),Lt=typeof window!="undefined";function dp(t){return t.__esModule||cc&&t[Symbol.toStringTag]==="Module"}const X=Object.assign;function zr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const pn=()=>{},hp=/\/$/,pp=t=>t.replace(hp,"");function Kr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("?"),a=e.indexOf("#",c>-1?c:0);return c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=vp(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function gp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ro(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mp(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Kt(e.matched[r],n.matched[s])&&uc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function uc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_p(t[n],e[n]))return!1;return!0}function _p(t,e){return Array.isArray(t)?so(t,e):Array.isArray(e)?so(e,t):t===e}function so(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Cn;(function(t){t.pop="pop",t.push="push"})(Cn||(Cn={}));var gn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gn||(gn={}));function yp(t){if(!t)if(Lt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pp(t)}const bp=/^[^#]+#/;function Ip(t,e){return t.replace(bp,"#")+e}function Ep(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const kr=()=>({left:window.pageXOffset,top:window.pageYOffset});function wp(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ep(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function io(t,e){return(history.state?history.state.position-e:-1)+t}const vs=new Map;function Tp(t,e){vs.set(t,e)}function Rp(t){const e=vs.get(t);return vs.delete(t),e}let Sp=()=>location.protocol+"//"+location.host;function fc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),ro(a,"")}return ro(n,t)+r+s}function Ap(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const b=fc(t,location),S=n.value,L=e.value;let O=0;if(p){if(n.value=b,e.value=p,o&&o===S){o=null;return}O=L?p.position-L.position:0}else r(b);s.forEach(A=>{A(n.value,S,{delta:O,type:Cn.pop,direction:O?O>0?gn.forward:gn.back:gn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const b=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(b),b}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:kr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:a,listen:l,destroy:h}}function oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?kr():null}}function Cp(t){const{history:e,location:n}=window,r={value:fc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Sp()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(a,l){const f=X({},e.state,oo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=X({},s.value,e.state,{forward:a,scroll:kr()});i(f.current,f,!0);const h=X({},oo(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Op(t){t=yp(t);const e=Cp(t),n=Ap(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Ip.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pp(t){return typeof t=="string"||t&&typeof t=="object"}function dc(t){return typeof t=="string"||typeof t=="symbol"}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hc=Zt("nf");var ao;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ao||(ao={}));function qt(t,e){return X(new Error,{type:t,[hc]:!0},e)}function et(t,e){return t instanceof Error&&hc in t&&(e==null||!!(t.type&e))}const co="[^/]+?",kp={sensitive:!1,strict:!1,start:!0,end:!0},Np=/[.+*?^${}()[\]/\\]/g;function Mp(t,e){const n=X({},kp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Np,"\\$&"),b+=40;else if(p.type===1){const{value:S,repeatable:L,optional:O,regexp:A}=p;i.push({name:S,repeatable:L,optional:O});const U=A||co;if(U!==co){b+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+z.message)}}let j=L?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;h||(j=O&&l.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,b+=20,O&&(b+=-8),L&&(b+=-20),U===".*"&&(b+=-50)}f.push(b)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",S=i[p-1];h[S.name]=b&&S.repeatable?b.split("/"):b}return h}function a(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:S,repeatable:L,optional:O}=b,A=S in l?l[S]:"";if(Array.isArray(A)&&!L)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=Array.isArray(A)?A.join("/"):A;if(!U)if(O)p.length<2&&t.length>1&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=U}}return f}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Dp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Dp(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Lp={type:0,value:""},Up=/[a-zA-Z0-9_]/;function Fp(t){if(!t)return[[]];if(t==="/")return[[Lp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${l}": ${b}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Up.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Bp(t,e,n){const r=Mp(Fp(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $p(t,e){const n=[],r=new Map;e=uo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const b=!p,S=jp(f);S.aliasOf=p&&p.record;const L=uo(e,f),O=[S];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of j)O.push(X({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let A,U;for(const j of O){const{path:z}=j;if(h&&z[0]!=="/"){const oe=h.record.path,ae=oe[oe.length-1]==="/"?"":"/";j.path=h.record.path+(z&&ae+z)}if(A=Bp(j,h,L),p?p.alias.push(A):(U=U||A,U!==A&&U.alias.push(A),b&&f.name&&!lo(A)&&o(f.name)),"children"in S){const oe=S.children;for(let ae=0;ae<oe.length;ae++)i(oe[ae],A,p&&p.children[ae])}p=p||A,a(A)}return U?()=>{o(U)}:pn}function o(f){if(dc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){let h=0;for(;h<n.length&&xp(f,n[h])>=0&&(f.record.path!==n[h].record.path||!pc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!lo(f)&&r.set(f.record.name,f)}function l(f,h){let p,b={},S,L;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw qt(1,{location:f});L=p.record.name,b=X(Hp(h.params,p.keys.filter(U=>!U.optional).map(U=>U.name)),f.params),S=p.stringify(b)}else if("path"in f)S=f.path,p=n.find(U=>U.re.test(S)),p&&(b=p.parse(S),L=p.record.name);else{if(p=h.name?r.get(h.name):n.find(U=>U.re.test(h.path)),!p)throw qt(1,{location:f,currentLocation:h});L=p.record.name,b=X({},h.params,f.params),S=p.stringify(b)}const O=[];let A=p;for(;A;)O.unshift(A.record),A=A.parent;return{name:L,path:S,params:b,matched:O,meta:Vp(O)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Hp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Wp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Wp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function lo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vp(t){return t.reduce((e,n)=>X(e,n.meta),{})}function uo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function pc(t,e){return e.children.some(n=>n===t||pc(t,n))}const gc=/#/g,zp=/&/g,Kp=/\//g,qp=/=/g,Gp=/\?/g,mc=/\+/g,Jp=/%5B/g,Yp=/%5D/g,_c=/%5E/g,Xp=/%60/g,vc=/%7B/g,Qp=/%7C/g,yc=/%7D/g,Zp=/%20/g;function Ys(t){return encodeURI(""+t).replace(Qp,"|").replace(Jp,"[").replace(Yp,"]")}function eg(t){return Ys(t).replace(vc,"{").replace(yc,"}").replace(_c,"^")}function ys(t){return Ys(t).replace(mc,"%2B").replace(Zp,"+").replace(gc,"%23").replace(zp,"%26").replace(Xp,"`").replace(vc,"{").replace(yc,"}").replace(_c,"^")}function tg(t){return ys(t).replace(qp,"%3D")}function ng(t){return Ys(t).replace(gc,"%23").replace(Gp,"%3F")}function rg(t){return t==null?"":ng(t).replace(Kp,"%2F")}function hr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mc," "),o=i.indexOf("="),c=hr(o<0?i:i.slice(0,o)),a=o<0?null:hr(i.slice(o+1));if(c in e){let l=e[c];Array.isArray(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function fo(t){let e="";for(let n in t){const r=t[n];if(n=tg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ys(i)):[r&&ys(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ig(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function nn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function rt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(qt(4,{from:n,to:e})):h instanceof Error?c(h):Pp(h)?c(qt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let f=Promise.resolve(l);t.length<3&&(f=f.then(a)),f.catch(h=>c(h))})}function qr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(og(c)){const l=(c.__vccOpts||c)[e];l&&s.push(rt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=dp(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&rt(p,n,r,i,o)()}))}}return s}function og(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ho(t){const e=Ke(Pr),n=Ke(lc),r=Ue(()=>e.resolve(ln(t.to))),s=Ue(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Kt.bind(null,f));if(p>-1)return p;const b=po(a[l-2]);return l>1&&po(f)===b&&h[h.length-1].path!==b?h.findIndex(Kt.bind(null,a[l-2])):p}),i=Ue(()=>s.value>-1&&ug(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&uc(n.params,r.value.params));function c(a={}){return lg(a)?e[ln(t.replace)?"replace":"push"](ln(t.to)).catch(pn):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const ag=Zo({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ho,setup(t,{slots:e}){const n=On(ho(t)),{options:r}=Ke(Pr),s=Ue(()=>({[go(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[go(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ya("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),cg=ag;function lg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ug(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function po(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const go=(t,e,n)=>t!=null?t:e!=null?e:n,fg=Zo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(_s),s=Ue(()=>t.route||r.value),i=Ke(no,0),o=Ue(()=>s.value.matched[i]);qn(no,i+1),qn(fp,o),qn(_s,s);const c=Bo();return Gn(()=>[c.value,o.value,t.name],([a,l,f],[h,p,b])=>{l&&(l.instances[f]=a,p&&p!==l&&a&&a===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),a&&l&&(!p||!Kt(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(S=>S(a))},{flush:"post"}),()=>{const a=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return mo(n.default,{Component:f,route:a});const p=l.props[t.name],b=p?p===!0?a.params:typeof p=="function"?p(a):p:null,L=ya(f,X({},b,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(l.instances[h]=null)},ref:c}));return mo(n.default,{Component:L,route:a})||L}}});function mo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dg=fg;function hg(t){const e=$p(t.routes,t),n=t.parseQuery||sg,r=t.stringifyQuery||fo,s=t.history,i=nn(),o=nn(),c=nn(),a=hl(Ze);let l=Ze;Lt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=zr.bind(null,m=>""+m),h=zr.bind(null,rg),p=zr.bind(null,hr);function b(m,P){let T,k;return dc(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function S(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function L(){return e.getRoutes().map(m=>m.record)}function O(m){return!!e.getRecordMatcher(m)}function A(m,P){if(P=X({},P||a.value),typeof m=="string"){const $=Kr(n,m,P.path),u=e.resolve({path:$.path},P),d=s.createHref($.fullPath);return X($,u,{params:p(u.params),hash:hr($.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=X({},m,{path:Kr(n,m.path,P.path).path});else{const $=X({},m.params);for(const u in $)$[u]==null&&delete $[u];T=X({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),G=m.hash||"";k.params=f(p(k.params));const ee=gp(r,X({},m,{hash:eg(G),path:k.path})),H=s.createHref(ee);return X({fullPath:ee,hash:G,query:r===fo?ig(m.query):m.query||{}},k,{redirectedFrom:void 0,href:H})}function U(m){return typeof m=="string"?Kr(n,m,a.value.path):X({},m)}function j(m,P){if(l!==m)return qt(8,{from:P,to:m})}function z(m){return be(m)}function oe(m){return z(X(U(m),{replace:!0}))}function ae(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=U(k):{path:k},k.params={}),X({query:m.query,hash:m.hash,params:m.params},k)}}function be(m,P){const T=l=A(m),k=a.value,G=m.state,ee=m.force,H=m.replace===!0,$=ae(T);if($)return be(X(U($),{state:G,force:ee,replace:H}),P||T);const u=T;u.redirectedFrom=P;let d;return!ee&&mp(r,k,T)&&(d=qt(16,{to:u,from:k}),Pt(k,k,!0,!1)),(d?Promise.resolve(d):pe(u,k)).catch(g=>et(g)?et(g,2)?g:me(g):Z(g,u,k)).then(g=>{if(g){if(et(g,2))return be(X(U(g.to),{state:G,force:ee,replace:H}),P||u)}else g=He(u,k,!0,H,G);return Pe(u,k,g),g})}function Ye(m,P){const T=j(m,P);return T?Promise.reject(T):Promise.resolve()}function pe(m,P){let T;const[k,G,ee]=pg(m,P);T=qr(k.reverse(),"beforeRouteLeave",m,P);for(const $ of k)$.leaveGuards.forEach(u=>{T.push(rt(u,m,P))});const H=Ye.bind(null,m,P);return T.push(H),Nt(T).then(()=>{T=[];for(const $ of i.list())T.push(rt($,m,P));return T.push(H),Nt(T)}).then(()=>{T=qr(G,"beforeRouteUpdate",m,P);for(const $ of G)$.updateGuards.forEach(u=>{T.push(rt(u,m,P))});return T.push(H),Nt(T)}).then(()=>{T=[];for(const $ of m.matched)if($.beforeEnter&&!P.matched.includes($))if(Array.isArray($.beforeEnter))for(const u of $.beforeEnter)T.push(rt(u,m,P));else T.push(rt($.beforeEnter,m,P));return T.push(H),Nt(T)}).then(()=>(m.matched.forEach($=>$.enterCallbacks={}),T=qr(ee,"beforeRouteEnter",m,P),T.push(H),Nt(T))).then(()=>{T=[];for(const $ of o.list())T.push(rt($,m,P));return T.push(H),Nt(T)}).catch($=>et($,8)?$:Promise.reject($))}function Pe(m,P,T){for(const k of c.list())k(m,P,T)}function He(m,P,T,k,G){const ee=j(m,P);if(ee)return ee;const H=P===Ze,$=Lt?history.state:{};T&&(k||H?s.replace(m.fullPath,X({scroll:H&&$&&$.scroll},G)):s.push(m.fullPath,G)),a.value=m,Pt(m,P,T,H),me()}let we;function At(){we||(we=s.listen((m,P,T)=>{const k=A(m),G=ae(k);if(G){be(X(G,{replace:!0}),k).catch(pn);return}l=k;const ee=a.value;Lt&&Tp(io(ee.fullPath,T.delta),kr()),pe(k,ee).catch(H=>et(H,12)?H:et(H,2)?(be(H.to,k).then($=>{et($,20)&&!T.delta&&T.type===Cn.pop&&s.go(-1,!1)}).catch(pn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(H,k,ee))).then(H=>{H=H||He(k,ee,!1),H&&(T.delta?s.go(-T.delta,!1):T.type===Cn.pop&&et(H,20)&&s.go(-1,!1)),Pe(k,ee,H)}).catch(pn)}))}let Ct=nn(),Ot=nn(),re;function Z(m,P,T){me(m);const k=Ot.list();return k.length?k.forEach(G=>G(m,P,T)):console.error(m),Promise.reject(m)}function q(){return re&&a.value!==Ze?Promise.resolve():new Promise((m,P)=>{Ct.add([m,P])})}function me(m){return re||(re=!m,At(),Ct.list().forEach(([P,T])=>m?T(m):P()),Ct.reset()),m}function Pt(m,P,T,k){const{scrollBehavior:G}=t;if(!Lt||!G)return Promise.resolve();const ee=!T&&Rp(io(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Wo().then(()=>G(m,P,ee)).then(H=>H&&wp(H)).catch(H=>Z(H,m,P))}const je=m=>s.go(m);let ke;const Ie=new Set;return{currentRoute:a,addRoute:b,removeRoute:S,hasRoute:O,getRoutes:L,resolve:A,options:t,push:z,replace:oe,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ot.add,isReady:q,install(m){const P=this;m.component("RouterLink",cg),m.component("RouterView",dg),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>ln(a)}),Lt&&!ke&&a.value===Ze&&(ke=!0,z(s.location).catch(G=>{}));const T={};for(const G in Ze)T[G]=Ue(()=>a.value[G]);m.provide(Pr,P),m.provide(lc,On(T)),m.provide(_s,a);const k=m.unmount;Ie.add(m),m.unmount=function(){Ie.delete(m),Ie.size<1&&(l=Ze,we&&we(),we=null,a.value=Ze,ke=!1,re=!1),k()}}}}function Nt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function pg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Kt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Kt(l,a))||s.push(a))}return[n,r,s]}function gg(){return Ke(Pr)}const mg={class:"text-center bg-sky-600 text-white p-4"},_g={class:"container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center"},vg=In("h1",{class:"ml-3 text-2xl"},"Vue Auth",-1),yg={class:"md:ml-auto flex flex-wrap items-center text-base justify-center"},bg=Tr("Feed"),Ig=Tr("Register"),Eg=Tr("Login"),wg={name:"Header",setup(t){const e=Bo(!1),n=gg();let r;na(()=>{r=ac(),Ja(r,i=>{i?e.value=!0:e.value=!1})});const s=()=>{th(r).then(()=>{n.push("/")})};return(i,o)=>{const c=ia("router-link");return or(),as("header",mg,[In("div",_g,[se(c,{to:"/",class:"flex title-font font-bold items-center"},{default:on(()=>[vg]),_:1}),In("nav",yg,[se(c,{to:"/feed",class:"mr-5 font-medium hover:text-gray-900"},{default:on(()=>[bg]),_:1}),se(c,{to:"/register",class:"mr-5 font-medium hover:text-gray-900"},{default:on(()=>[Ig]),_:1}),se(c,{to:"/sign-in",class:"mr-5 font-medium hover:text-gray-900"},{default:on(()=>[Eg]),_:1}),e.value?(or(),as("button",{key:0,class:"mr-5",onClick:s},"Logout")):fu("",!0)])])])}}};const Tg={name:"App",setup(t){return(e,n)=>{const r=ia("router-view");return or(),as(xe,null,[se(wg),se(r)],64)}}},Rg="modulepreload",_o={},Sg="/cours_vuex4-firebase_auth/tree/main/vue-firebase-auth/",Vn=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Sg}${r}`,r in _o)return;_o[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Rg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((c,a)=>{o.addEventListener("load",c),o.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},bc=hg({history:Op(),routes:[{path:"/",component:()=>Vn(()=>import("./Home.bc6d2d89.js"),["assets/Home.bc6d2d89.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/register",component:()=>Vn(()=>import("./Register.e5c6facd.js"),["assets/Register.e5c6facd.js","assets/SignIn.7653bc28.css"])},{path:"/sign-in",component:()=>Vn(()=>import("./SignIn.0496769d.js"),["assets/SignIn.0496769d.js","assets/SignIn.7653bc28.css"])},{path:"/feed",component:()=>Vn(()=>import("./Feed.11dc2b54.js"),["assets/Feed.11dc2b54.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requiresAuth:!0}}]}),Ag=()=>new Promise((t,e)=>{const n=Ja(ac(),r=>{n(),t(r)},e)});bc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Ag()?n():(n("/"),alert("vous n'y avez pas acc\xE8s !")):n()});var Cg="firebase",Og="9.8.1";/**
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
 */$t(Cg,Og,"app");const Pg={apiKey:"AIzaSyBxHnKhYi4FxxJ0i666GIStrSBRAShtLYs",authDomain:"vue-firebase-auth-3dcab.firebaseapp.com",projectId:"vue-firebase-auth-3dcab",storageBucket:"vue-firebase-auth-3dcab.appspot.com",messagingSenderId:"1061226216209",appId:"1:1061226216209:web:d3f87a230c76024ad7eab0"};cd(Pg);Ku(Tg).use(bc).mount("#app");export{it as G,In as a,xg as b,as as c,Lg as d,fu as e,Ug as f,ac as g,or as o,Bo as r,Fg as s,Ng as t,gg as u,Dg as v,Mg as w};
