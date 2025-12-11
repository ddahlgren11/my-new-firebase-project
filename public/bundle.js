(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();var Hn,$,To,Je,_s,So,bo,Ao,qr,Dr,Or,zt={},ko=[],Ec=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Wn=Array.isArray;function Ae(n,e){for(var t in e)n[t]=e[t];return n}function Kr(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Tc(n,e,t){var i,s,c,h={};for(c in e)c=="key"?i=e[c]:c=="ref"?s=e[c]:h[c]=e[c];if(arguments.length>2&&(h.children=arguments.length>3?Hn.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(c in n.defaultProps)h[c]===void 0&&(h[c]=n.defaultProps[c]);return Sn(n,h,i,s,null)}function Sn(n,e,t,i,s){var c={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++To,__i:-1,__u:0};return s==null&&$.vnode!=null&&$.vnode(c),c}function zn(n){return n.children}function bn(n,e){this.props=n,this.context=e}function gt(n,e){if(e==null)return n.__?gt(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?gt(n):null}function Co(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Co(n)}}function ys(n){(!n.__d&&(n.__d=!0)&&Je.push(n)&&!Dn.__r++||_s!=$.debounceRendering)&&((_s=$.debounceRendering)||So)(Dn)}function Dn(){for(var n,e,t,i,s,c,h,u=1;Je.length;)Je.length>u&&Je.sort(bo),n=Je.shift(),u=Je.length,n.__d&&(t=void 0,s=(i=(e=n).__v).__e,c=[],h=[],e.__P&&((t=Ae({},i)).__v=i.__v+1,$.vnode&&$.vnode(t),Jr(e.__P,t,i,e.__n,e.__P.namespaceURI,32&i.__u?[s]:null,c,s??gt(i),!!(32&i.__u),h),t.__v=i.__v,t.__.__k[t.__i]=t,No(c,t,h),t.__e!=s&&Co(t)));Dn.__r=0}function Po(n,e,t,i,s,c,h,u,v,g,b){var E,S,C,P,L,N,O,D=i&&i.__k||ko,B=e.length;for(v=Sc(t,e,D,v,B),E=0;E<B;E++)(C=t.__k[E])!=null&&(S=C.__i==-1?zt:D[C.__i]||zt,C.__i=E,N=Jr(n,C,S,s,c,h,u,v,g,b),P=C.__e,C.ref&&S.ref!=C.ref&&(S.ref&&Xr(S.ref,null,C),b.push(C.ref,C.__c||P,C)),L==null&&P!=null&&(L=P),(O=!!(4&C.__u))||S.__k===C.__k?v=Ro(C,v,n,O):typeof C.type=="function"&&N!==void 0?v=N:P&&(v=P.nextSibling),C.__u&=-7);return t.__e=L,v}function Sc(n,e,t,i,s){var c,h,u,v,g,b=t.length,E=b,S=0;for(n.__k=new Array(s),c=0;c<s;c++)(h=e[c])!=null&&typeof h!="boolean"&&typeof h!="function"?(v=c+S,(h=n.__k[c]=typeof h=="string"||typeof h=="number"||typeof h=="bigint"||h.constructor==String?Sn(null,h,null,null,null):Wn(h)?Sn(zn,{children:h},null,null,null):h.constructor==null&&h.__b>0?Sn(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):h).__=n,h.__b=n.__b+1,u=null,(g=h.__i=bc(h,t,v,E))!=-1&&(E--,(u=t[g])&&(u.__u|=2)),u==null||u.__v==null?(g==-1&&(s>b?S--:s<b&&S++),typeof h.type!="function"&&(h.__u|=4)):g!=v&&(g==v-1?S--:g==v+1?S++:(g>v?S--:S++,h.__u|=4))):n.__k[c]=null;if(E)for(c=0;c<b;c++)(u=t[c])!=null&&(2&u.__u)==0&&(u.__e==i&&(i=gt(u)),Oo(u,u));return i}function Ro(n,e,t,i){var s,c;if(typeof n.type=="function"){for(s=n.__k,c=0;s&&c<s.length;c++)s[c]&&(s[c].__=n,e=Ro(s[c],e,t,i));return e}n.__e!=e&&(i&&(e&&n.type&&!e.parentNode&&(e=gt(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function bc(n,e,t,i){var s,c,h,u=n.key,v=n.type,g=e[t],b=g!=null&&(2&g.__u)==0;if(g===null&&n.key==null||b&&u==g.key&&v==g.type)return t;if(i>(b?1:0)){for(s=t-1,c=t+1;s>=0||c<e.length;)if((g=e[h=s>=0?s--:c++])!=null&&(2&g.__u)==0&&u==g.key&&v==g.type)return h}return-1}function vs(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Ec.test(e)?t:t+"px"}function vn(n,e,t,i,s){var c,h;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||vs(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||vs(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")c=e!=(e=e.replace(Ao,"$1")),h=e.toLowerCase(),e=h in n||e=="onFocusOut"||e=="onFocusIn"?h.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+c]=t,t?i?t.u=i.u:(t.u=qr,n.addEventListener(e,c?Or:Dr,c)):n.removeEventListener(e,c?Or:Dr,c);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function ws(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=qr++;else if(e.t<t.u)return;return t($.event?$.event(e):e)}}}function Jr(n,e,t,i,s,c,h,u,v,g){var b,E,S,C,P,L,N,O,D,B,J,we,Y,y,d,p,_,m=e.type;if(e.constructor!=null)return null;128&t.__u&&(v=!!(32&t.__u),c=[u=e.__e=t.__e]),(b=$.__b)&&b(e);e:if(typeof m=="function")try{if(O=e.props,D="prototype"in m&&m.prototype.render,B=(b=m.contextType)&&i[b.__c],J=b?B?B.props.value:b.__:i,t.__c?N=(E=e.__c=t.__c).__=E.__E:(D?e.__c=E=new m(O,J):(e.__c=E=new bn(O,J),E.constructor=m,E.render=kc),B&&B.sub(E),E.props=O,E.state||(E.state={}),E.context=J,E.__n=i,S=E.__d=!0,E.__h=[],E._sb=[]),D&&E.__s==null&&(E.__s=E.state),D&&m.getDerivedStateFromProps!=null&&(E.__s==E.state&&(E.__s=Ae({},E.__s)),Ae(E.__s,m.getDerivedStateFromProps(O,E.__s))),C=E.props,P=E.state,E.__v=e,S)D&&m.getDerivedStateFromProps==null&&E.componentWillMount!=null&&E.componentWillMount(),D&&E.componentDidMount!=null&&E.__h.push(E.componentDidMount);else{if(D&&m.getDerivedStateFromProps==null&&O!==C&&E.componentWillReceiveProps!=null&&E.componentWillReceiveProps(O,J),!E.__e&&E.shouldComponentUpdate!=null&&E.shouldComponentUpdate(O,E.__s,J)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(E.props=O,E.state=E.__s,E.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(I){I&&(I.__=e)}),we=0;we<E._sb.length;we++)E.__h.push(E._sb[we]);E._sb=[],E.__h.length&&h.push(E);break e}E.componentWillUpdate!=null&&E.componentWillUpdate(O,E.__s,J),D&&E.componentDidUpdate!=null&&E.__h.push(function(){E.componentDidUpdate(C,P,L)})}if(E.context=J,E.props=O,E.__P=n,E.__e=!1,Y=$.__r,y=0,D){for(E.state=E.__s,E.__d=!1,Y&&Y(e),b=E.render(E.props,E.state,E.context),d=0;d<E._sb.length;d++)E.__h.push(E._sb[d]);E._sb=[]}else do E.__d=!1,Y&&Y(e),b=E.render(E.props,E.state,E.context),E.state=E.__s;while(E.__d&&++y<25);E.state=E.__s,E.getChildContext!=null&&(i=Ae(Ae({},i),E.getChildContext())),D&&!S&&E.getSnapshotBeforeUpdate!=null&&(L=E.getSnapshotBeforeUpdate(C,P)),p=b,b!=null&&b.type===zn&&b.key==null&&(p=Do(b.props.children)),u=Po(n,Wn(p)?p:[p],e,t,i,s,c,h,u,v,g),E.base=e.__e,e.__u&=-161,E.__h.length&&h.push(E),N&&(E.__E=E.__=null)}catch(I){if(e.__v=null,v||c!=null)if(I.then){for(e.__u|=v?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;c[c.indexOf(u)]=null,e.__e=u}else{for(_=c.length;_--;)Kr(c[_]);Lr(e)}else e.__e=t.__e,e.__k=t.__k,I.then||Lr(e);$.__e(I,e,t)}else c==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):u=e.__e=Ac(t.__e,e,t,i,s,c,h,v,g);return(b=$.diffed)&&b(e),128&e.__u?void 0:u}function Lr(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(Lr)}function No(n,e,t){for(var i=0;i<t.length;i++)Xr(t[i],t[++i],t[++i]);$.__c&&$.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(c){c.call(s)})}catch(c){$.__e(c,s.__v)}})}function Do(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:Wn(n)?n.map(Do):Ae({},n)}function Ac(n,e,t,i,s,c,h,u,v){var g,b,E,S,C,P,L,N=t.props,O=e.props,D=e.type;if(D=="svg"?s="http://www.w3.org/2000/svg":D=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),c!=null){for(g=0;g<c.length;g++)if((C=c[g])&&"setAttribute"in C==!!D&&(D?C.localName==D:C.nodeType==3)){n=C,c[g]=null;break}}if(n==null){if(D==null)return document.createTextNode(O);n=document.createElementNS(s,D,O.is&&O),u&&($.__m&&$.__m(e,c),u=!1),c=null}if(D==null)N===O||u&&n.data==O||(n.data=O);else{if(c=c&&Hn.call(n.childNodes),N=t.props||zt,!u&&c!=null)for(N={},g=0;g<n.attributes.length;g++)N[(C=n.attributes[g]).name]=C.value;for(g in N)if(C=N[g],g!="children"){if(g=="dangerouslySetInnerHTML")E=C;else if(!(g in O)){if(g=="value"&&"defaultValue"in O||g=="checked"&&"defaultChecked"in O)continue;vn(n,g,null,C,s)}}for(g in O)C=O[g],g=="children"?S=C:g=="dangerouslySetInnerHTML"?b=C:g=="value"?P=C:g=="checked"?L=C:u&&typeof C!="function"||N[g]===C||vn(n,g,C,N[g],s);if(b)u||E&&(b.__html==E.__html||b.__html==n.innerHTML)||(n.innerHTML=b.__html),e.__k=[];else if(E&&(n.innerHTML=""),Po(e.type=="template"?n.content:n,Wn(S)?S:[S],e,t,i,D=="foreignObject"?"http://www.w3.org/1999/xhtml":s,c,h,c?c[0]:t.__k&&gt(t,0),u,v),c!=null)for(g=c.length;g--;)Kr(c[g]);u||(g="value",D=="progress"&&P==null?n.removeAttribute("value"):P!=null&&(P!==n[g]||D=="progress"&&!P||D=="option"&&P!=N[g])&&vn(n,g,P,N[g],s),g="checked",L!=null&&L!=n[g]&&vn(n,g,L,N[g],s))}return n}function Xr(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){$.__e(s,t)}}function Oo(n,e,t){var i,s;if($.unmount&&$.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||Xr(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(c){$.__e(c,e)}i.base=i.__P=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&Oo(i[s],e,t||typeof n.type!="function");t||Kr(n.__e),n.__c=n.__=n.__e=void 0}function kc(n,e,t){return this.constructor(n,t)}function Cc(n,e,t){var i,s,c,h;e==document&&(e=document.documentElement),$.__&&$.__(n,e),s=(i=!1)?null:e.__k,c=[],h=[],Jr(e,n=e.__k=Tc(zn,null,[n]),s||zt,zt,e.namespaceURI,s?null:e.firstChild?Hn.call(e.childNodes):null,c,s?s.__e:e.firstChild,i,h),No(c,n,h)}Hn=ko.slice,$={__e:function(n,e,t,i){for(var s,c,h;e=e.__;)if((s=e.__c)&&!s.__)try{if((c=s.constructor)&&c.getDerivedStateFromError!=null&&(s.setState(c.getDerivedStateFromError(n)),h=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),h=s.__d),h)return s.__E=s}catch(u){n=u}throw n}},To=0,bn.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ae({},this.state),typeof n=="function"&&(n=n(Ae({},t),this.props)),n&&Ae(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),ys(this))},bn.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),ys(this))},bn.prototype.render=zn,Je=[],So=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,bo=function(n,e){return n.__v.__b-e.__v.__b},Dn.__r=0,Ao=/(PointerCapture)$|Capture$/i,qr=0,Dr=ws(!1),Or=ws(!0);var Pc=0;function A(n,e,t,i,s,c){e||(e={});var h,u,v=e;if("ref"in v)for(u in v={},e)u=="ref"?h=e[u]:v[u]=e[u];var g={type:n,props:v,key:t,ref:h,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Pc,__i:-1,__u:0,__source:s,__self:c};if(typeof n=="function"&&(h=n.defaultProps))for(u in h)v[u]===void 0&&(v[u]=h[u]);return $.vnode&&$.vnode(g),g}const Rc=()=>{};var Is={};/**
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
 */const Lo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Nc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const c=n[t++];e[i++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=n[t++],h=n[t++],u=n[t++],v=((s&7)<<18|(c&63)<<12|(h&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(v>>10)),e[i++]=String.fromCharCode(56320+(v&1023))}else{const c=n[t++],h=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const c=n[s],h=s+1<n.length,u=h?n[s+1]:0,v=s+2<n.length,g=v?n[s+2]:0,b=c>>2,E=(c&3)<<4|u>>4;let S=(u&15)<<2|g>>6,C=g&63;v||(C=64,h||(S=64)),i.push(t[b],t[E],t[S],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Nc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const c=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const g=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,c==null||u==null||g==null||E==null)throw new Dc;const S=c<<2|u>>4;if(i.push(S),g!==64){const C=u<<4&240|g>>2;if(i.push(C),E!==64){const P=g<<6&192|E;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oc=function(n){const e=Lo(n);return Mo.encodeByteArray(e,!0)},On=function(n){return Oc(n).replace(/\./g,"")},xo=function(n){try{return Mo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mc=()=>Lc().__FIREBASE_DEFAULTS__,xc=()=>{if(typeof process>"u"||typeof Is>"u")return;const n=Is.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xo(n[1]);return e&&JSON.parse(e)},Yr=()=>{try{return Rc()||Mc()||xc()||Uc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uo=n=>Yr()?.emulatorHosts?.[n],Fo=n=>{const e=Uo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Vo=()=>Yr()?.config,jo=n=>Yr()?.[`_${n}`];/**
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
 */class Fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function yt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qr(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Vc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[On(JSON.stringify(t)),On(JSON.stringify(h)),""].join(".")}const Vt={};function jc(){const n={prod:[],emulator:[]};for(const e of Object.keys(Vt))Vt[e]?n.emulator.push(e):n.prod.push(e);return n}function $c(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Es=!1;function Zr(n,e){if(typeof window>"u"||typeof document>"u"||!yt(window.location.host)||Vt[n]===e||Vt[n]||Es)return;Vt[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",c=jc().prod.length>0;function h(){const S=document.getElementById(i);S&&S.remove()}function u(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function v(S,C){S.setAttribute("width","24"),S.setAttribute("id",C),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Es=!0,h()},S}function b(S,C){S.setAttribute("id",C),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=$c(i),C=t("text"),P=document.getElementById(C)||document.createElement("span"),L=t("learnmore"),N=document.getElementById(L)||document.createElement("a"),O=t("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const B=S.element;u(B),b(N,L);const J=g();v(D,O),B.append(D,P,N,J),document.body.appendChild(B)}c?(P.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function Hc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gc(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qc(){try{return typeof indexedDB=="object"}catch{return!1}}function Kc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Jc="FirebaseError";class Ne extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Jc,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jt.prototype.create)}}class Jt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,c=this.errors[e],h=c?Xc(c,i):"Error",u=`${this.serviceName}: ${h} (${s}).`;return new Ne(s,u,i)}}function Xc(n,e){return n.replace(Yc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Yc=/\{\$([^}]+)}/g;function Qc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const c=n[s],h=e[s];if(Ts(c)&&Ts(h)){if(!nt(c,h))return!1}else if(c!==h)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ts(n){return n!==null&&typeof n=="object"}/**
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
 */function Xt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Zc(n,e){const t=new eh(n,e);return t.subscribe.bind(t)}class eh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");th(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Er),s.error===void 0&&(s.error=Er),s.complete===void 0&&(s.complete=Er);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function th(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Er(){}/**
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
 */function ve(n){return n&&n._delegate?n._delegate:n}class Be{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ke="[DEFAULT]";/**
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
 */class nh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Fc;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ih(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:s});i.resolve(c)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[c,h]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(c);i===u&&h.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const c=this.instances.get(i);return c&&e(c,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rh(n){return n===Ke?void 0:n}function ih(n){return n.instantiationMode==="EAGER"}/**
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
 */class sh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const oh={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ah=V.INFO,ch={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},hh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ch[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ei{constructor(e){this.name=e,this._logLevel=ah,this._logHandler=hh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const lh=(n,e)=>e.some(t=>n instanceof t);let Ss,bs;function uh(){return Ss||(Ss=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dh(){return bs||(bs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $o=new WeakMap,Mr=new WeakMap,Bo=new WeakMap,Tr=new WeakMap,ti=new WeakMap;function fh(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{t(je(n.result)),s()},h=()=>{i(n.error),s()};n.addEventListener("success",c),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&$o.set(t,n)}).catch(()=>{}),ti.set(e,n),e}function ph(n){if(Mr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{t(),s()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});Mr.set(n,e)}let xr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Mr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return je(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gh(n){xr=n(xr)}function mh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Sr(this),e,...t);return Bo.set(i,e.sort?e.sort():[e]),je(i)}:dh().includes(n)?function(...e){return n.apply(Sr(this),e),je($o.get(this))}:function(...e){return je(n.apply(Sr(this),e))}}function _h(n){return typeof n=="function"?mh(n):(n instanceof IDBTransaction&&ph(n),lh(n,uh())?new Proxy(n,xr):n)}function je(n){if(n instanceof IDBRequest)return fh(n);if(Tr.has(n))return Tr.get(n);const e=_h(n);return e!==n&&(Tr.set(n,e),ti.set(e,n)),e}const Sr=n=>ti.get(n);function yh(n,e,{blocked:t,upgrade:i,blocking:s,terminated:c}={}){const h=indexedDB.open(n,e),u=je(h);return i&&h.addEventListener("upgradeneeded",v=>{i(je(h.result),v.oldVersion,v.newVersion,je(h.transaction),v)}),t&&h.addEventListener("blocked",v=>t(v.oldVersion,v.newVersion,v)),u.then(v=>{c&&v.addEventListener("close",()=>c()),s&&v.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),u}const vh=["get","getKey","getAll","getAllKeys","count"],wh=["put","add","delete","clear"],br=new Map;function As(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=wh.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||vh.includes(t)))return;const c=async function(h,...u){const v=this.transaction(h,s?"readwrite":"readonly");let g=v.store;return i&&(g=g.index(u.shift())),(await Promise.all([g[t](...u),s&&v.done]))[0]};return br.set(e,c),c}gh(n=>({...n,get:(e,t,i)=>As(e,t)||n.get(e,t,i),has:(e,t)=>!!As(e,t)||n.has(e,t)}));/**
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
 */class Ih{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Eh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Eh(n){return n.getComponent()?.type==="VERSION"}const Ur="@firebase/app",ks="0.14.2";/**
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
 */const Pe=new ei("@firebase/app"),Th="@firebase/app-compat",Sh="@firebase/analytics-compat",bh="@firebase/analytics",Ah="@firebase/app-check-compat",kh="@firebase/app-check",Ch="@firebase/auth",Ph="@firebase/auth-compat",Rh="@firebase/database",Nh="@firebase/data-connect",Dh="@firebase/database-compat",Oh="@firebase/functions",Lh="@firebase/functions-compat",Mh="@firebase/installations",xh="@firebase/installations-compat",Uh="@firebase/messaging",Fh="@firebase/messaging-compat",Vh="@firebase/performance",jh="@firebase/performance-compat",$h="@firebase/remote-config",Bh="@firebase/remote-config-compat",Hh="@firebase/storage",Wh="@firebase/storage-compat",zh="@firebase/firestore",Gh="@firebase/ai",qh="@firebase/firestore-compat",Kh="firebase",Jh="12.2.0";/**
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
 */const Fr="[DEFAULT]",Xh={[Ur]:"fire-core",[Th]:"fire-core-compat",[bh]:"fire-analytics",[Sh]:"fire-analytics-compat",[kh]:"fire-app-check",[Ah]:"fire-app-check-compat",[Ch]:"fire-auth",[Ph]:"fire-auth-compat",[Rh]:"fire-rtdb",[Nh]:"fire-data-connect",[Dh]:"fire-rtdb-compat",[Oh]:"fire-fn",[Lh]:"fire-fn-compat",[Mh]:"fire-iid",[xh]:"fire-iid-compat",[Uh]:"fire-fcm",[Fh]:"fire-fcm-compat",[Vh]:"fire-perf",[jh]:"fire-perf-compat",[$h]:"fire-rc",[Bh]:"fire-rc-compat",[Hh]:"fire-gcs",[Wh]:"fire-gcs-compat",[zh]:"fire-fst",[qh]:"fire-fst-compat",[Gh]:"fire-vertex","fire-js":"fire-js",[Kh]:"fire-js-all"};/**
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
 */const Ln=new Map,Yh=new Map,Vr=new Map;function Cs(n,e){try{n.container.addComponent(e)}catch(t){Pe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rt(n){const e=n.name;if(Vr.has(e))return Pe.debug(`There were multiple attempts to register component ${e}.`),!1;Vr.set(e,n);for(const t of Ln.values())Cs(t,n);for(const t of Yh.values())Cs(t,n);return!0}function Gn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ae(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$e=new Jt("app","Firebase",Qh);/**
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
 */class Zh{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}/**
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
 */const vt=Jh;function Ho(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Fr,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw $e.create("bad-app-name",{appName:String(s)});if(t||(t=Vo()),!t)throw $e.create("no-options");const c=Ln.get(s);if(c){if(nt(t,c.options)&&nt(i,c.config))return c;throw $e.create("duplicate-app",{appName:s})}const h=new sh(s);for(const v of Vr.values())h.addComponent(v);const u=new Zh(t,i,h);return Ln.set(s,u),u}function ni(n=Fr){const e=Ln.get(n);if(!e&&n===Fr&&Vo())return Ho();if(!e)throw $e.create("no-app",{appName:n});return e}function me(n,e,t){let i=Xh[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),c=e.match(/\s|\//);if(s||c){const h=[`Unable to register library "${i}" with version "${e}":`];s&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pe.warn(h.join(" "));return}rt(new Be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const el="firebase-heartbeat-database",tl=1,Gt="firebase-heartbeat-store";let Ar=null;function Wo(){return Ar||(Ar=yh(el,tl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gt)}catch(t){console.warn(t)}}}}).catch(n=>{throw $e.create("idb-open",{originalErrorMessage:n.message})})),Ar}async function nl(n){try{const t=(await Wo()).transaction(Gt),i=await t.objectStore(Gt).get(zo(n));return await t.done,i}catch(e){if(e instanceof Ne)Pe.warn(e.message);else{const t=$e.create("idb-get",{originalErrorMessage:e?.message});Pe.warn(t.message)}}}async function Ps(n,e){try{const i=(await Wo()).transaction(Gt,"readwrite");await i.objectStore(Gt).put(e,zo(n)),await i.done}catch(t){if(t instanceof Ne)Pe.warn(t.message);else{const i=$e.create("idb-set",{originalErrorMessage:t?.message});Pe.warn(i.message)}}}function zo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rl=1024,il=30;class sl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new al(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>il){const s=cl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Pe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rs(),{heartbeatsToSend:t,unsentEntries:i}=ol(this._heartbeatsCache.heartbeats),s=On(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Pe.warn(e),""}}}function Rs(){return new Date().toISOString().substring(0,10)}function ol(n,e=rl){const t=[];let i=n.slice();for(const s of n){const c=t.find(h=>h.agent===s.agent);if(c){if(c.dates.push(s.date),Ns(t)>e){c.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ns(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class al{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qc()?Kc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nl(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ps(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ps(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ns(n){return On(JSON.stringify({version:2,heartbeats:n})).length}function cl(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function hl(n){rt(new Be("platform-logger",e=>new Ih(e),"PRIVATE")),rt(new Be("heartbeat",e=>new sl(e),"PRIVATE")),me(Ur,ks,n),me(Ur,ks,"esm2020"),me("fire-js","")}hl("");var ll="firebase",ul="12.2.1";/**
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
 */me(ll,ul,"app");function Go(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dl=Go,qo=new Jt("auth","Firebase",Go());/**
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
 */const Mn=new ei("@firebase/auth");function fl(n,...e){Mn.logLevel<=V.WARN&&Mn.warn(`Auth (${vt}): ${n}`,...e)}function An(n,...e){Mn.logLevel<=V.ERROR&&Mn.error(`Auth (${vt}): ${n}`,...e)}/**
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
 */function ye(n,...e){throw ii(n,...e)}function de(n,...e){return ii(n,...e)}function ri(n,e,t){const i={...dl(),[e]:t};return new Jt("auth","Firebase",i).create(e,{appName:n.name})}function Ze(n){return ri(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pl(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ye(n,"argument-error"),ri(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ii(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return qo.create(n,...e)}function R(n,e,...t){if(!n)throw ii(e,...t)}function ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw An(e),new Error(e)}function Re(n,e){n||ke(e)}/**
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
 */function jr(){return typeof self<"u"&&self.location?.href||""}function gl(){return Ds()==="http:"||Ds()==="https:"}function Ds(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function ml(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gl()||Wc()||"connection"in navigator)?navigator.onLine:!0}function _l(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Yt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Re(t>e,"Short delay should be less than long delay!"),this.isMobile=Bc()||zc()}get(){return ml()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function si(n,e){Re(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ko{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vl=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wl=new Yt(3e4,6e4);function oi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function wt(n,e,t,i,s={}){return Jo(n,s,async()=>{let c={},h={};i&&(e==="GET"?h=i:c={body:JSON.stringify(i)});const u=Xt({key:n.config.apiKey,...h}).slice(1),v=await n._getAdditionalHeaders();v["Content-Type"]="application/json",n.languageCode&&(v["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:v,...c};return Hc()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&yt(n.emulatorConfig.host)&&(g.credentials="include"),Ko.fetch()(await Xo(n,n.config.apiHost,t,u),g)})}async function Jo(n,e,t){n._canInitEmulator=!1;const i={...yl,...e};try{const s=new El(n),c=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw wn(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const u=c.ok?h.errorMessage:h.error.message,[v,g]=u.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw wn(n,"credential-already-in-use",h);if(v==="EMAIL_EXISTS")throw wn(n,"email-already-in-use",h);if(v==="USER_DISABLED")throw wn(n,"user-disabled",h);const b=i[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw ri(n,b,g);ye(n,b)}}catch(s){if(s instanceof Ne)throw s;ye(n,"network-request-failed",{message:String(s)})}}async function Il(n,e,t,i,s={}){const c=await wt(n,e,t,i,s);return"mfaPendingCredential"in c&&ye(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function Xo(n,e,t,i){const s=`${e}${t}?${i}`,c=n,h=c.config.emulator?si(n.config,s):`${n.config.apiScheme}://${s}`;return vl.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class El{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(de(this.auth,"network-request-failed")),wl.get())})}}function wn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=de(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Tl(n,e){return wt(n,"POST","/v1/accounts:delete",e)}async function xn(n,e){return wt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function jt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sl(n,e=!1){const t=ve(n),i=await t.getIdToken(e),s=ai(i);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,h=c?.sign_in_provider;return{claims:s,token:i,authTime:jt(kr(s.auth_time)),issuedAtTime:jt(kr(s.iat)),expirationTime:jt(kr(s.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function kr(n){return Number(n)*1e3}function ai(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return An("JWT malformed, contained fewer than 3 sections"),null;try{const s=xo(t);return s?JSON.parse(s):(An("Failed to decode base64 JWT payload"),null)}catch(s){return An("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Os(n){const e=ai(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ne&&bl(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function bl({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Al{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $r{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jt(this.lastLoginAt),this.creationTime=jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Un(n){const e=n.auth,t=await n.getIdToken(),i=await qt(n,xn(e,{idToken:t}));R(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const c=s.providerUserInfo?.length?Yo(s.providerUserInfo):[],h=Cl(n.providerData,c),u=n.isAnonymous,v=!(n.email&&s.passwordHash)&&!h?.length,g=u?v:!1,b={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:h,metadata:new $r(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(n,b)}async function kl(n){const e=ve(n);await Un(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cl(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Yo(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Pl(n,e){const t=await Jo(n,{},async()=>{const i=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=n.config,h=await Xo(n,s,"/v1/token",`key=${c}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:u,body:i};return n.emulatorConfig&&yt(n.emulatorConfig.host)&&(v.credentials="include"),Ko.fetch()(h,v)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Rl(n,e){return wt(n,"POST","/v2/accounts:revokeToken",oi(n,e))}/**
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
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Os(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(e.length!==0,"internal-error");const t=Os(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:c}=await Pl(e,t);this.updateTokensAndExpiration(i,s,Number(c))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:c}=t,h=new ut;return i&&(R(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:e}),h.accessToken=s),c&&(R(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
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
 */function xe(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class le{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Al(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $r(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await qt(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Sl(this,e)}reload(){return kl(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new le({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Un(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ae(this.auth.app))return Promise.reject(Ze(this.auth));const e=await this.getIdToken();return await qt(this,Tl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,u=t.tenantId??void 0,v=t._redirectEventId??void 0,g=t.createdAt??void 0,b=t.lastLoginAt??void 0,{uid:E,emailVerified:S,isAnonymous:C,providerData:P,stsTokenManager:L}=t;R(E&&L,e,"internal-error");const N=ut.fromJSON(this.name,L);R(typeof E=="string",e,"internal-error"),xe(i,e.name),xe(s,e.name),R(typeof S=="boolean",e,"internal-error"),R(typeof C=="boolean",e,"internal-error"),xe(c,e.name),xe(h,e.name),xe(u,e.name),xe(v,e.name),xe(g,e.name),xe(b,e.name);const O=new le({uid:E,auth:e,email:s,emailVerified:S,displayName:i,isAnonymous:C,photoURL:h,phoneNumber:c,tenantId:u,stsTokenManager:N,createdAt:g,lastLoginAt:b});return P&&Array.isArray(P)&&(O.providerData=P.map(D=>({...D}))),v&&(O._redirectEventId=v),O}static async _fromIdTokenResponse(e,t,i=!1){const s=new ut;s.updateFromServerResponse(t);const c=new le({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Un(c),c}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];R(s.localId!==void 0,"internal-error");const c=s.providerUserInfo!==void 0?Yo(s.providerUserInfo):[],h=!(s.email&&s.passwordHash)&&!c?.length,u=new ut;u.updateFromIdToken(i);const v=new le({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:h}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new $r(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!c?.length};return Object.assign(v,g),v}}/**
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
 */const Ls=new Map;function Ce(n){Re(n instanceof Function,"Expected a class definition");let e=Ls.get(n);return e?(Re(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ls.set(n,e),e)}/**
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
 */class Qo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qo.type="NONE";const Ms=Qo;/**
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
 */function kn(n,e,t){return`firebase:${n}:${e}:${t}`}class dt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:c}=this.auth;this.fullUserKey=kn(this.userKey,s.apiKey,c),this.fullPersistenceKey=kn("persistence",s.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xn(this.auth,{idToken:e}).catch(()=>{});return t?le._fromGetAccountInfoResponse(this.auth,t,e):null}return le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new dt(Ce(Ms),e,i);const s=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let c=s[0]||Ce(Ms);const h=kn(i,e.config.apiKey,e.name);let u=null;for(const g of t)try{const b=await g._get(h);if(b){let E;if(typeof b=="string"){const S=await xn(e,{idToken:b}).catch(()=>{});if(!S)break;E=await le._fromGetAccountInfoResponse(e,S,b)}else E=le._fromJSON(e,b);g!==c&&(u=E),c=g;break}}catch{}const v=s.filter(g=>g._shouldAllowMigration);return!c._shouldAllowMigration||!v.length?new dt(c,e,i):(c=v[0],u&&await c._set(h,u.toJSON()),await Promise.all(t.map(async g=>{if(g!==c)try{await g._remove(h)}catch{}})),new dt(c,e,i))}}/**
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
 */function xs(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(na(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ia(e))return"Blackberry";if(sa(e))return"Webos";if(ea(e))return"Safari";if((e.includes("chrome/")||ta(e))&&!e.includes("edge/"))return"Chrome";if(ra(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Zo(n=se()){return/firefox\//i.test(n)}function ea(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ta(n=se()){return/crios\//i.test(n)}function na(n=se()){return/iemobile/i.test(n)}function ra(n=se()){return/android/i.test(n)}function ia(n=se()){return/blackberry/i.test(n)}function sa(n=se()){return/webos/i.test(n)}function ci(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Nl(n=se()){return ci(n)&&!!window.navigator?.standalone}function Dl(){return Gc()&&document.documentMode===10}function oa(n=se()){return ci(n)||ra(n)||sa(n)||ia(n)||/windows phone/i.test(n)||na(n)}/**
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
 */function aa(n,e=[]){let t;switch(n){case"Browser":t=xs(se());break;case"Worker":t=`${xs(se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vt}/${i}`}/**
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
 */class Ol{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=c=>new Promise((h,u)=>{try{const v=e(c);h(v)}catch(v){u(v)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Ll(n,e={}){return wt(n,"GET","/v2/passwordPolicy",oi(n,e))}/**
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
 */const Ml=6;class xl{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ml,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class Ul{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Us(this),this.idTokenSubscription=new Us(this),this.beforeStateQueue=new Ol(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ce(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xn(this,{idToken:e}),i=await le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ae(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!c||c===h)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Un(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_l()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ae(this.app))return Promise.reject(Ze(this));const t=e?ve(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ae(this.app)?Promise.reject(Ze(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ae(this.app)?Promise.reject(Ze(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ce(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ll(this),t=new xl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Rl(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ce(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[Ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(u,this,"internal-error"),u.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const v=e.addObserver(t,i,s);return()=>{h=!0,v()}}else{const v=e.addObserver(t);return()=>{h=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(ae(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&fl(`Error while retrieving App Check token: ${e.error}`),e?.token}}function qn(n){return ve(n)}class Us{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zc(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fl(n){hi=n}function Vl(n){return hi.loadJS(n)}function jl(){return hi.gapiScript}function $l(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Bl(n,e){const t=Gn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),c=t.getOptions();if(nt(c,e??{}))return s;ye(s,"already-initialized")}return t.initialize({options:e})}function Hl(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Ce);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function ca(n,e,t){const i=qn(n);R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,c=ha(e),{host:h,port:u}=Wl(e),v=u===null?"":`:${u}`,g={url:`${c}//${h}${v}/`},b=Object.freeze({host:h,port:u,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){R(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),R(nt(g,i.config.emulator)&&nt(b,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=b,i.settings.appVerificationDisabledForTesting=!0,yt(h)?(Qr(`${c}//${h}${v}`),Zr("Auth",!0)):zl()}function ha(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Wl(n){const e=ha(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const c=s[1];return{host:c,port:Fs(i.substr(c.length+1))}}else{const[c,h]=i.split(":");return{host:c,port:Fs(h)}}}function Fs(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function zl(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class la{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ke("not implemented")}_getIdTokenResponse(e){return ke("not implemented")}_linkToIdToken(e,t){return ke("not implemented")}_getReauthenticationResolver(e){return ke("not implemented")}}/**
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
 */async function ft(n,e){return Il(n,"POST","/v1/accounts:signInWithIdp",oi(n,e))}/**
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
 */const Gl="http://localhost";class it extends la{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new it(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...c}=t;if(!i||!s)return null;const h=new it(i,s);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ft(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:Gl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xt(t)}return e}}/**
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
 */class li{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qt extends li{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ue extends Qt{constructor(){super("facebook.com")}static credential(e){return it._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ue.PROVIDER_ID="facebook.com";/**
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
 */class Se extends Qt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return it._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Se.credential(t,i)}catch{return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com";Se.PROVIDER_ID="google.com";/**
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
 */class Fe extends Qt{constructor(){super("github.com")}static credential(e){return it._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com";Fe.PROVIDER_ID="github.com";/**
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
 */class Ve extends Qt{constructor(){super("twitter.com")}static credential(e,t){return it._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ve.credential(t,i)}catch{return null}}}Ve.TWITTER_SIGN_IN_METHOD="twitter.com";Ve.PROVIDER_ID="twitter.com";/**
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
 */class mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const c=await le._fromIdTokenResponse(e,i,s),h=Vs(i);return new mt({user:c,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Vs(i);return new mt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Vs(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Fn extends Ne{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Fn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Fn(e,t,i,s)}}function ua(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Fn._fromErrorAndOperation(n,c,e,i):c})}async function ql(n,e,t=!1){const i=await qt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mt._forOperation(n,"link",i)}/**
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
 */async function Kl(n,e,t=!1){const{auth:i}=n;if(ae(i.app))return Promise.reject(Ze(i));const s="reauthenticate";try{const c=await qt(n,ua(i,s,e,n),t);R(c.idToken,i,"internal-error");const h=ai(c.idToken);R(h,i,"internal-error");const{sub:u}=h;return R(n.uid===u,i,"user-mismatch"),mt._forOperation(n,s,c)}catch(c){throw c?.code==="auth/user-not-found"&&ye(i,"user-mismatch"),c}}/**
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
 */async function Jl(n,e,t=!1){if(ae(n.app))return Promise.reject(Ze(n));const i="signIn",s=await ua(n,i,e),c=await mt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(c.user),c}function Xl(n,e,t,i){return ve(n).onIdTokenChanged(e,t,i)}function Yl(n,e,t){return ve(n).beforeAuthStateChanged(e,t)}function da(n,e,t,i){return ve(n).onAuthStateChanged(e,t,i)}function Ql(n){return ve(n).signOut()}const Vn="__sak";/**
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
 */class fa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vn,"1"),this.storage.removeItem(Vn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Zl=1e3,eu=10;class pa extends fa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=oa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,u,v)=>{this.notifyListeners(h,v)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},c=this.storage.getItem(i);Dl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Zl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pa.type="LOCAL";const tu=pa;/**
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
 */class ga extends fa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ga.type="SESSION";const ma=ga;/**
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
 */function nu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Kn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Kn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:c}=t.data,h=this.handlersMap[s];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(h).map(async g=>g(t.origin,c)),v=await nu(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:v})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kn.receivers=[];/**
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
 */function ui(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ru{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let c,h;return new Promise((u,v)=>{const g=ui("",20);s.port1.start();const b=setTimeout(()=>{v(new Error("unsupported_event"))},i);h={messageChannel:s,onMessage(E){const S=E;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),u(S.data.response);break;default:clearTimeout(b),clearTimeout(c),v(new Error("invalid_response"));break}}},this.handlers.add(h),s.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[s.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function _e(){return window}function iu(n){_e().location.href=n}/**
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
 */function _a(){return typeof _e().WorkerGlobalScope<"u"&&typeof _e().importScripts=="function"}async function su(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ou(){return navigator?.serviceWorker?.controller||null}function au(){return _a()?self:null}/**
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
 */const ya="firebaseLocalStorageDb",cu=1,jn="firebaseLocalStorage",va="fbase_key";class Zt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jn(n,e){return n.transaction([jn],e?"readwrite":"readonly").objectStore(jn)}function hu(){const n=indexedDB.deleteDatabase(ya);return new Zt(n).toPromise()}function Br(){const n=indexedDB.open(ya,cu);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(jn,{keyPath:va})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(jn)?e(i):(i.close(),await hu(),e(await Br()))})})}async function js(n,e,t){const i=Jn(n,!0).put({[va]:e,value:t});return new Zt(i).toPromise()}async function lu(n,e){const t=Jn(n,!1).get(e),i=await new Zt(t).toPromise();return i===void 0?null:i.value}function $s(n,e){const t=Jn(n,!0).delete(e);return new Zt(t).toPromise()}const uu=800,du=3;class wa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Br(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>du)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _a()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kn._getInstance(au()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await su(),!this.activeServiceWorker)return;this.sender=new ru(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ou()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Br();return await js(e,Vn,"1"),await $s(e,Vn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>js(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>lu(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$s(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const c=Jn(s,!1).getAll();return new Zt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:c}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(c)&&(this.notifyListeners(s,c),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wa.type="LOCAL";const fu=wa;new Yt(3e4,6e4);/**
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
 */function Ia(n,e){return e?Ce(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class di extends la{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pu(n){return Jl(n.auth,new di(n),n.bypassAuthState)}function gu(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Kl(t,new di(n),n.bypassAuthState)}async function mu(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),ql(t,new di(n),n.bypassAuthState)}/**
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
 */class Ea{constructor(e,t,i,s,c=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:c,error:h,type:u}=e;if(h){this.reject(h);return}const v={auth:this.auth,requestUri:t,sessionId:i,tenantId:c||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(v))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pu;case"linkViaPopup":case"linkViaRedirect":return mu;case"reauthViaPopup":case"reauthViaRedirect":return gu;default:ye(this.auth,"internal-error")}}resolve(e){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _u=new Yt(2e3,1e4);async function yu(n,e,t){if(ae(n.app))return Promise.reject(de(n,"operation-not-supported-in-this-environment"));const i=qn(n);pl(n,e,li);const s=Ia(i,t);return new Ye(i,"signInViaPopup",e,s).executeNotNull()}class Ye extends Ea{constructor(e,t,i,s,c){super(e,t,s,c),this.provider=i,this.authWindow=null,this.pollId=null,Ye.currentPopupAction&&Ye.currentPopupAction.cancel(),Ye.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Re(this.filter.length===1,"Popup operations only handle one event");const e=ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ye.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_u.get())};e()}}Ye.currentPopupAction=null;/**
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
 */const vu="pendingRedirect",Cn=new Map;class wu extends Ea{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Cn.get(this.auth._key());if(!e){try{const i=await Iu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Cn.set(this.auth._key(),e)}return this.bypassAuthState||Cn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Iu(n,e){const t=Su(e),i=Tu(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Eu(n,e){Cn.set(n._key(),e)}function Tu(n){return Ce(n._redirectPersistence)}function Su(n){return kn(vu,n.config.apiKey,n.name)}async function bu(n,e,t=!1){if(ae(n.app))return Promise.reject(Ze(n));const i=qn(n),s=Ia(i,e),h=await new wu(i,s,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
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
 */const Au=600*1e3;class ku{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Ta(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(de(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Au&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bs(e))}saveEventToCache(e){this.cachedEventUids.add(Bs(e)),this.lastProcessedEventTime=Date.now()}}function Bs(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ta({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Cu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ta(n);default:return!1}}/**
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
 */async function Pu(n,e={}){return wt(n,"GET","/v1/projects",e)}/**
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
 */const Ru=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nu=/^https?/;async function Du(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Pu(n);for(const t of e)try{if(Ou(t))return}catch{}ye(n,"unauthorized-domain")}function Ou(n){const e=jr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!Nu.test(t))return!1;if(Ru.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Lu=new Yt(3e4,6e4);function Hs(){const n=_e().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Mu(n){return new Promise((e,t)=>{function i(){Hs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hs(),t(de(n,"network-request-failed"))},timeout:Lu.get()})}if(_e().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(_e().gapi?.load)i();else{const s=$l("iframefcb");return _e()[s]=()=>{gapi.load?i():t(de(n,"network-request-failed"))},Vl(`${jl()}?onload=${s}`).catch(c=>t(c))}}).catch(e=>{throw Pn=null,e})}let Pn=null;function xu(n){return Pn=Pn||Mu(n),Pn}/**
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
 */const Uu=new Yt(5e3,15e3),Fu="__/auth/iframe",Vu="emulator/auth/iframe",ju={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$u=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bu(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?si(e,Vu):`https://${n.config.authDomain}/${Fu}`,i={apiKey:e.apiKey,appName:n.name,v:vt},s=$u.get(n.config.apiHost);s&&(i.eid=s);const c=n._getFrameworks();return c.length&&(i.fw=c.join(",")),`${t}?${Xt(i).slice(1)}`}async function Hu(n){const e=await xu(n),t=_e().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:Bu(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ju,dontclear:!0},i=>new Promise(async(s,c)=>{await i.restyle({setHideOnLeave:!1});const h=de(n,"network-request-failed"),u=_e().setTimeout(()=>{c(h)},Uu.get());function v(){_e().clearTimeout(u),s(i)}i.ping(v).then(v,()=>{c(h)})}))}/**
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
 */const Wu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zu=500,Gu=600,qu="_blank",Ku="http://localhost";class Ws{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ju(n,e,t,i=zu,s=Gu){const c=Math.max((window.screen.availHeight-s)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const v={...Wu,width:i.toString(),height:s.toString(),top:c,left:h},g=se().toLowerCase();t&&(u=ta(g)?qu:t),Zo(g)&&(e=e||Ku,v.scrollbars="yes");const b=Object.entries(v).reduce((S,[C,P])=>`${S}${C}=${P},`,"");if(Nl(g)&&u!=="_self")return Xu(e||"",u),new Ws(null);const E=window.open(e||"",u,b);R(E,n,"popup-blocked");try{E.focus()}catch{}return new Ws(E)}function Xu(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Yu="__/auth/handler",Qu="emulator/auth/handler",Zu=encodeURIComponent("fac");async function zs(n,e,t,i,s,c){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:vt,eventId:s};if(e instanceof li){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",Qc(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,E]of Object.entries({}))h[b]=E}if(e instanceof Qt){const b=e.getScopes().filter(E=>E!=="");b.length>0&&(h.scopes=b.join(","))}n.tenantId&&(h.tid=n.tenantId);const u=h;for(const b of Object.keys(u))u[b]===void 0&&delete u[b];const v=await n._getAppCheckToken(),g=v?`#${Zu}=${encodeURIComponent(v)}`:"";return`${ed(n)}?${Xt(u).slice(1)}${g}`}function ed({config:n}){return n.emulator?si(n,Qu):`https://${n.authDomain}/${Yu}`}/**
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
 */const Cr="webStorageSupport";class td{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ma,this._completeRedirectFn=bu,this._overrideRedirectResult=Eu}async _openPopup(e,t,i,s){Re(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await zs(e,t,i,jr(),s);return Ju(e,c,ui())}async _openRedirect(e,t,i,s){await this._originValidation(e);const c=await zs(e,t,i,jr(),s);return iu(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:c}=this.eventManagers[t];return s?Promise.resolve(s):(Re(c,"If manager is not set, promise should be"),c)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Hu(e),i=new ku(e);return t.register("authEvent",s=>(R(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cr,{type:Cr},s=>{const c=s?.[0]?.[Cr];c!==void 0&&t(!!c),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Du(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oa()||ea()||ci()}}const nd=td;var Gs="@firebase/auth",qs="1.11.0";/**
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
 */class rd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function id(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sd(n){rt(new Be("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:u}=i.options;R(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const v={apiKey:h,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aa(n)},g=new Ul(i,s,c,v);return Hl(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),rt(new Be("auth-internal",e=>{const t=qn(e.getProvider("auth").getImmediate());return(i=>new rd(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),me(Gs,qs,id(n)),me(Gs,qs,"esm2020")}/**
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
 */const od=300,ad=jo("authIdTokenMaxAge")||od;let Ks=null;const cd=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ad)return;const s=t?.token;Ks!==s&&(Ks=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Sa(n=ni()){const e=Gn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Bl(n,{popupRedirectResolver:nd,persistence:[fu,tu,ma]}),i=jo("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(i,location.origin);if(location.origin===c.origin){const h=cd(c.toString());Yl(t,h,()=>h(t.currentUser)),Xl(t,u=>h(u))}}const s=Uo("auth");return s&&ca(t,`http://${s}`),t}function hd(){return document.getElementsByTagName("head")?.[0]??document}Fl({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const c=de("internal-error");c.customData=s,t(c)},i.type="text/javascript",i.charset="UTF-8",hd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sd("Browser");var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,d){function p(){}p.prototype=d.prototype,y.D=d.prototype,y.prototype=new p,y.prototype.constructor=y,y.C=function(_,m,I){for(var f=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)f[Ie-2]=arguments[Ie];return d.prototype[m].apply(_,f)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,d,p){p||(p=0);var _=Array(16);if(typeof d=="string")for(var m=0;16>m;++m)_[m]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(m=0;16>m;++m)_[m]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=y.g[0],p=y.g[1],m=y.g[2];var I=y.g[3],f=d+(I^p&(m^I))+_[0]+3614090360&4294967295;d=p+(f<<7&4294967295|f>>>25),f=I+(m^d&(p^m))+_[1]+3905402710&4294967295,I=d+(f<<12&4294967295|f>>>20),f=m+(p^I&(d^p))+_[2]+606105819&4294967295,m=I+(f<<17&4294967295|f>>>15),f=p+(d^m&(I^d))+_[3]+3250441966&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(I^p&(m^I))+_[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(m^d&(p^m))+_[5]+1200080426&4294967295,I=d+(f<<12&4294967295|f>>>20),f=m+(p^I&(d^p))+_[6]+2821735955&4294967295,m=I+(f<<17&4294967295|f>>>15),f=p+(d^m&(I^d))+_[7]+4249261313&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(I^p&(m^I))+_[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(m^d&(p^m))+_[9]+2336552879&4294967295,I=d+(f<<12&4294967295|f>>>20),f=m+(p^I&(d^p))+_[10]+4294925233&4294967295,m=I+(f<<17&4294967295|f>>>15),f=p+(d^m&(I^d))+_[11]+2304563134&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(I^p&(m^I))+_[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(m^d&(p^m))+_[13]+4254626195&4294967295,I=d+(f<<12&4294967295|f>>>20),f=m+(p^I&(d^p))+_[14]+2792965006&4294967295,m=I+(f<<17&4294967295|f>>>15),f=p+(d^m&(I^d))+_[15]+1236535329&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(m^I&(p^m))+_[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^m&(d^p))+_[6]+3225465664&4294967295,I=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(I^d))+_[11]+643717713&4294967295,m=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(m^I))+_[0]+3921069994&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^I&(p^m))+_[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^m&(d^p))+_[10]+38016083&4294967295,I=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(I^d))+_[15]+3634488961&4294967295,m=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(m^I))+_[4]+3889429448&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^I&(p^m))+_[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^m&(d^p))+_[14]+3275163606&4294967295,I=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(I^d))+_[3]+4107603335&4294967295,m=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(m^I))+_[8]+1163531501&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^I&(p^m))+_[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^m&(d^p))+_[2]+4243563512&4294967295,I=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(I^d))+_[7]+1735328473&4294967295,m=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(m^I))+_[12]+2368359562&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(p^m^I)+_[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^m)+_[8]+2272392833&4294967295,I=d+(f<<11&4294967295|f>>>21),f=m+(I^d^p)+_[11]+1839030562&4294967295,m=I+(f<<16&4294967295|f>>>16),f=p+(m^I^d)+_[14]+4259657740&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^I)+_[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^m)+_[4]+1272893353&4294967295,I=d+(f<<11&4294967295|f>>>21),f=m+(I^d^p)+_[7]+4139469664&4294967295,m=I+(f<<16&4294967295|f>>>16),f=p+(m^I^d)+_[10]+3200236656&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^I)+_[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^m)+_[0]+3936430074&4294967295,I=d+(f<<11&4294967295|f>>>21),f=m+(I^d^p)+_[3]+3572445317&4294967295,m=I+(f<<16&4294967295|f>>>16),f=p+(m^I^d)+_[6]+76029189&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^I)+_[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^m)+_[12]+3873151461&4294967295,I=d+(f<<11&4294967295|f>>>21),f=m+(I^d^p)+_[15]+530742520&4294967295,m=I+(f<<16&4294967295|f>>>16),f=p+(m^I^d)+_[2]+3299628645&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(m^(p|~I))+_[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~m))+_[7]+1126891415&4294967295,I=d+(f<<10&4294967295|f>>>22),f=m+(d^(I|~p))+_[14]+2878612391&4294967295,m=I+(f<<15&4294967295|f>>>17),f=p+(I^(m|~d))+_[5]+4237533241&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~I))+_[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~m))+_[3]+2399980690&4294967295,I=d+(f<<10&4294967295|f>>>22),f=m+(d^(I|~p))+_[10]+4293915773&4294967295,m=I+(f<<15&4294967295|f>>>17),f=p+(I^(m|~d))+_[1]+2240044497&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~I))+_[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~m))+_[15]+4264355552&4294967295,I=d+(f<<10&4294967295|f>>>22),f=m+(d^(I|~p))+_[6]+2734768916&4294967295,m=I+(f<<15&4294967295|f>>>17),f=p+(I^(m|~d))+_[13]+1309151649&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~I))+_[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~m))+_[11]+3174756917&4294967295,I=d+(f<<10&4294967295|f>>>22),f=m+(d^(I|~p))+_[2]+718787259&4294967295,m=I+(f<<15&4294967295|f>>>17),f=p+(I^(m|~d))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+d&4294967295,y.g[1]=y.g[1]+(m+(f<<21&4294967295|f>>>11))&4294967295,y.g[2]=y.g[2]+m&4294967295,y.g[3]=y.g[3]+I&4294967295}i.prototype.u=function(y,d){d===void 0&&(d=y.length);for(var p=d-this.blockSize,_=this.B,m=this.h,I=0;I<d;){if(m==0)for(;I<=p;)s(this,y,I),I+=this.blockSize;if(typeof y=="string"){for(;I<d;)if(_[m++]=y.charCodeAt(I++),m==this.blockSize){s(this,_),m=0;break}}else for(;I<d;)if(_[m++]=y[I++],m==this.blockSize){s(this,_),m=0;break}}this.h=m,this.o+=d},i.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var d=1;d<y.length-8;++d)y[d]=0;var p=8*this.o;for(d=y.length-8;d<y.length;++d)y[d]=p&255,p/=256;for(this.u(y),y=Array(16),d=p=0;4>d;++d)for(var _=0;32>_;_+=8)y[p++]=this.g[d]>>>_&255;return y};function c(y,d){var p=u;return Object.prototype.hasOwnProperty.call(p,y)?p[y]:p[y]=d(y)}function h(y,d){this.h=d;for(var p=[],_=!0,m=y.length-1;0<=m;m--){var I=y[m]|0;_&&I==d||(p[m]=I,_=!1)}this.g=p}var u={};function v(y){return-128<=y&&128>y?c(y,function(d){return new h([d|0],0>d?-1:0)}):new h([y|0],0>y?-1:0)}function g(y){if(isNaN(y)||!isFinite(y))return E;if(0>y)return N(g(-y));for(var d=[],p=1,_=0;y>=p;_++)d[_]=y/p|0,p*=4294967296;return new h(d,0)}function b(y,d){if(y.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(y.charAt(0)=="-")return N(b(y.substring(1),d));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=g(Math.pow(d,8)),_=E,m=0;m<y.length;m+=8){var I=Math.min(8,y.length-m),f=parseInt(y.substring(m,m+I),d);8>I?(I=g(Math.pow(d,I)),_=_.j(I).add(g(f))):(_=_.j(p),_=_.add(g(f)))}return _}var E=v(0),S=v(1),C=v(16777216);n=h.prototype,n.m=function(){if(L(this))return-N(this).m();for(var y=0,d=1,p=0;p<this.g.length;p++){var _=this.i(p);y+=(0<=_?_:4294967296+_)*d,d*=4294967296}return y},n.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(P(this))return"0";if(L(this))return"-"+N(this).toString(y);for(var d=g(Math.pow(y,6)),p=this,_="";;){var m=J(p,d).g;p=O(p,m.j(d));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(y);if(p=m,P(p))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},n.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function P(y){if(y.h!=0)return!1;for(var d=0;d<y.g.length;d++)if(y.g[d]!=0)return!1;return!0}function L(y){return y.h==-1}n.l=function(y){return y=O(this,y),L(y)?-1:P(y)?0:1};function N(y){for(var d=y.g.length,p=[],_=0;_<d;_++)p[_]=~y.g[_];return new h(p,~y.h).add(S)}n.abs=function(){return L(this)?N(this):this},n.add=function(y){for(var d=Math.max(this.g.length,y.g.length),p=[],_=0,m=0;m<=d;m++){var I=_+(this.i(m)&65535)+(y.i(m)&65535),f=(I>>>16)+(this.i(m)>>>16)+(y.i(m)>>>16);_=f>>>16,I&=65535,f&=65535,p[m]=f<<16|I}return new h(p,p[p.length-1]&-2147483648?-1:0)};function O(y,d){return y.add(N(d))}n.j=function(y){if(P(this)||P(y))return E;if(L(this))return L(y)?N(this).j(N(y)):N(N(this).j(y));if(L(y))return N(this.j(N(y)));if(0>this.l(C)&&0>y.l(C))return g(this.m()*y.m());for(var d=this.g.length+y.g.length,p=[],_=0;_<2*d;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var m=0;m<y.g.length;m++){var I=this.i(_)>>>16,f=this.i(_)&65535,Ie=y.i(m)>>>16,Et=y.i(m)&65535;p[2*_+2*m]+=f*Et,D(p,2*_+2*m),p[2*_+2*m+1]+=I*Et,D(p,2*_+2*m+1),p[2*_+2*m+1]+=f*Ie,D(p,2*_+2*m+1),p[2*_+2*m+2]+=I*Ie,D(p,2*_+2*m+2)}for(_=0;_<d;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=d;_<2*d;_++)p[_]=0;return new h(p,0)};function D(y,d){for(;(y[d]&65535)!=y[d];)y[d+1]+=y[d]>>>16,y[d]&=65535,d++}function B(y,d){this.g=y,this.h=d}function J(y,d){if(P(d))throw Error("division by zero");if(P(y))return new B(E,E);if(L(y))return d=J(N(y),d),new B(N(d.g),N(d.h));if(L(d))return d=J(y,N(d)),new B(N(d.g),d.h);if(30<y.g.length){if(L(y)||L(d))throw Error("slowDivide_ only works with positive integers.");for(var p=S,_=d;0>=_.l(y);)p=we(p),_=we(_);var m=Y(p,1),I=Y(_,1);for(_=Y(_,2),p=Y(p,2);!P(_);){var f=I.add(_);0>=f.l(y)&&(m=m.add(p),I=f),_=Y(_,1),p=Y(p,1)}return d=O(y,m.j(d)),new B(m,d)}for(m=E;0<=y.l(d);){for(p=Math.max(1,Math.floor(y.m()/d.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=g(p),f=I.j(d);L(f)||0<f.l(y);)p-=_,I=g(p),f=I.j(d);P(I)&&(I=S),m=m.add(I),y=O(y,f)}return new B(m,y)}n.A=function(y){return J(this,y).h},n.and=function(y){for(var d=Math.max(this.g.length,y.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)&y.i(_);return new h(p,this.h&y.h)},n.or=function(y){for(var d=Math.max(this.g.length,y.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)|y.i(_);return new h(p,this.h|y.h)},n.xor=function(y){for(var d=Math.max(this.g.length,y.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)^y.i(_);return new h(p,this.h^y.h)};function we(y){for(var d=y.g.length+1,p=[],_=0;_<d;_++)p[_]=y.i(_)<<1|y.i(_-1)>>>31;return new h(p,y.h)}function Y(y,d){var p=d>>5;d%=32;for(var _=y.g.length-p,m=[],I=0;I<_;I++)m[I]=0<d?y.i(I+p)>>>d|y.i(I+p+1)<<32-d:y.i(I+p);return new h(m,y.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=b,fi=h}).apply(typeof Js<"u"?Js:typeof self<"u"?self:typeof window<"u"?window:{});var In=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,o,a){return r==Array.prototype||r==Object.prototype||(r[o]=a.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof In=="object"&&In];for(var o=0;o<r.length;++o){var a=r[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var i=t(this);function s(r,o){if(o)e:{var a=i;r=r.split(".");for(var l=0;l<r.length-1;l++){var w=r[l];if(!(w in a))break e;a=a[w]}r=r[r.length-1],l=a[r],o=o(l),o!=l&&o!=null&&e(a,r,{configurable:!0,writable:!0,value:o})}}function c(r,o){r instanceof String&&(r+="");var a=0,l=!1,w={next:function(){if(!l&&a<r.length){var T=a++;return{value:o(T,r[T]),done:!1}}return l=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(r){return r||function(){return c(this,function(o,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},u=this||self;function v(r){var o=typeof r;return o=o!="object"?o:r?Array.isArray(r)?"array":o:"null",o=="array"||o=="object"&&typeof r.length=="number"}function g(r){var o=typeof r;return o=="object"&&r!=null||o=="function"}function b(r,o,a){return r.call.apply(r.bind,arguments)}function E(r,o,a){if(!r)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,l),r.apply(o,w)}}return function(){return r.apply(o,arguments)}}function S(r,o,a){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:E,S.apply(null,arguments)}function C(r,o){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),r.apply(this,l)}}function P(r,o){function a(){}a.prototype=o.prototype,r.aa=o.prototype,r.prototype=new a,r.prototype.constructor=r,r.Qb=function(l,w,T){for(var k=Array(arguments.length-2),j=2;j<arguments.length;j++)k[j-2]=arguments[j];return o.prototype[w].apply(l,k)}}function L(r){const o=r.length;if(0<o){const a=Array(o);for(let l=0;l<o;l++)a[l]=r[l];return a}return[]}function N(r,o){for(let a=1;a<arguments.length;a++){const l=arguments[a];if(v(l)){const w=r.length||0,T=l.length||0;r.length=w+T;for(let k=0;k<T;k++)r[w+k]=l[k]}else r.push(l)}}class O{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function D(r){return/^[\s\xa0]*$/.test(r)}function B(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function J(r){return J[" "](r),r}J[" "]=function(){};var we=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Y(r,o,a){for(const l in r)o.call(a,r[l],l,r)}function y(r,o){for(const a in r)o.call(void 0,r[a],a,r)}function d(r){const o={};for(const a in r)o[a]=r[a];return o}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,o){let a,l;for(let w=1;w<arguments.length;w++){l=arguments[w];for(a in l)r[a]=l[a];for(let T=0;T<p.length;T++)a=p[T],Object.prototype.hasOwnProperty.call(l,a)&&(r[a]=l[a])}}function m(r){var o=1;r=r.split(":");const a=[];for(;0<o&&r.length;)a.push(r.shift()),o--;return r.length&&a.push(r.join(":")),a}function I(r){u.setTimeout(()=>{throw r},0)}function f(){var r=Xn;let o=null;return r.g&&(o=r.g,r.g=r.g.next,r.g||(r.h=null),o.next=null),o}class Ie{constructor(){this.h=this.g=null}add(o,a){const l=Et.get();l.set(o,a),this.h?this.h.next=l:this.g=l,this.h=l}}var Et=new O(()=>new Va,r=>r.reset());class Va{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Tt,St=!1,Xn=new Ie,vi=()=>{const r=u.Promise.resolve(void 0);Tt=()=>{r.then(ja)}};var ja=()=>{for(var r;r=f();){try{r.h.call(r.g)}catch(a){I(a)}var o=Et;o.j(r),100>o.h&&(o.h++,r.next=o.g,o.g=r)}St=!1};function De(){this.s=this.s,this.C=this.C}De.prototype.s=!1,De.prototype.ma=function(){this.s||(this.s=!0,this.N())},De.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(r,o){this.type=r,this.g=this.target=o,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var $a=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,o=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const a=()=>{};u.addEventListener("test",a,o),u.removeEventListener("test",a,o)}catch{}return r})();function bt(r,o){if(Q.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var a=this.type=r.type,l=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=o,o=r.relatedTarget){if(we){e:{try{J(o.nodeName);var w=!0;break e}catch{}w=!1}w||(o=null)}}else a=="mouseover"?o=r.fromElement:a=="mouseout"&&(o=r.toElement);this.relatedTarget=o,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Ba[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&bt.aa.h.call(this)}}P(bt,Q);var Ba={2:"touch",3:"pen",4:"mouse"};bt.prototype.h=function(){bt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),Ha=0;function Wa(r,o,a,l,w){this.listener=r,this.proxy=null,this.src=o,this.type=a,this.capture=!!l,this.ha=w,this.key=++Ha,this.da=this.fa=!1}function rn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function sn(r){this.src=r,this.g={},this.h=0}sn.prototype.add=function(r,o,a,l,w){var T=r.toString();r=this.g[T],r||(r=this.g[T]=[],this.h++);var k=Qn(r,o,l,w);return-1<k?(o=r[k],a||(o.fa=!1)):(o=new Wa(o,this.src,T,!!l,w),o.fa=a,r.push(o)),o};function Yn(r,o){var a=o.type;if(a in r.g){var l=r.g[a],w=Array.prototype.indexOf.call(l,o,void 0),T;(T=0<=w)&&Array.prototype.splice.call(l,w,1),T&&(rn(o),r.g[a].length==0&&(delete r.g[a],r.h--))}}function Qn(r,o,a,l){for(var w=0;w<r.length;++w){var T=r[w];if(!T.da&&T.listener==o&&T.capture==!!a&&T.ha==l)return w}return-1}var Zn="closure_lm_"+(1e6*Math.random()|0),er={};function wi(r,o,a,l,w){if(Array.isArray(o)){for(var T=0;T<o.length;T++)wi(r,o[T],a,l,w);return null}return a=Ti(a),r&&r[nn]?r.K(o,a,g(l)?!!l.capture:!1,w):za(r,o,a,!1,l,w)}function za(r,o,a,l,w,T){if(!o)throw Error("Invalid event type");var k=g(w)?!!w.capture:!!w,j=nr(r);if(j||(r[Zn]=j=new sn(r)),a=j.add(o,a,l,k,T),a.proxy)return a;if(l=Ga(),a.proxy=l,l.src=r,l.listener=a,r.addEventListener)$a||(w=k),w===void 0&&(w=!1),r.addEventListener(o.toString(),l,w);else if(r.attachEvent)r.attachEvent(Ei(o.toString()),l);else if(r.addListener&&r.removeListener)r.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Ga(){function r(a){return o.call(r.src,r.listener,a)}const o=qa;return r}function Ii(r,o,a,l,w){if(Array.isArray(o))for(var T=0;T<o.length;T++)Ii(r,o[T],a,l,w);else l=g(l)?!!l.capture:!!l,a=Ti(a),r&&r[nn]?(r=r.i,o=String(o).toString(),o in r.g&&(T=r.g[o],a=Qn(T,a,l,w),-1<a&&(rn(T[a]),Array.prototype.splice.call(T,a,1),T.length==0&&(delete r.g[o],r.h--)))):r&&(r=nr(r))&&(o=r.g[o.toString()],r=-1,o&&(r=Qn(o,a,l,w)),(a=-1<r?o[r]:null)&&tr(a))}function tr(r){if(typeof r!="number"&&r&&!r.da){var o=r.src;if(o&&o[nn])Yn(o.i,r);else{var a=r.type,l=r.proxy;o.removeEventListener?o.removeEventListener(a,l,r.capture):o.detachEvent?o.detachEvent(Ei(a),l):o.addListener&&o.removeListener&&o.removeListener(l),(a=nr(o))?(Yn(a,r),a.h==0&&(a.src=null,o[Zn]=null)):rn(r)}}}function Ei(r){return r in er?er[r]:er[r]="on"+r}function qa(r,o){if(r.da)r=!0;else{o=new bt(o,this);var a=r.listener,l=r.ha||r.src;r.fa&&tr(r),r=a.call(l,o)}return r}function nr(r){return r=r[Zn],r instanceof sn?r:null}var rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ti(r){return typeof r=="function"?r:(r[rr]||(r[rr]=function(o){return r.handleEvent(o)}),r[rr])}function Z(){De.call(this),this.i=new sn(this),this.M=this,this.F=null}P(Z,De),Z.prototype[nn]=!0,Z.prototype.removeEventListener=function(r,o,a,l){Ii(this,r,o,a,l)};function ne(r,o){var a,l=r.F;if(l)for(a=[];l;l=l.F)a.push(l);if(r=r.M,l=o.type||o,typeof o=="string")o=new Q(o,r);else if(o instanceof Q)o.target=o.target||r;else{var w=o;o=new Q(l,r),_(o,w)}if(w=!0,a)for(var T=a.length-1;0<=T;T--){var k=o.g=a[T];w=on(k,l,!0,o)&&w}if(k=o.g=r,w=on(k,l,!0,o)&&w,w=on(k,l,!1,o)&&w,a)for(T=0;T<a.length;T++)k=o.g=a[T],w=on(k,l,!1,o)&&w}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var r=this.i,o;for(o in r.g){for(var a=r.g[o],l=0;l<a.length;l++)rn(a[l]);delete r.g[o],r.h--}}this.F=null},Z.prototype.K=function(r,o,a,l){return this.i.add(String(r),o,!1,a,l)},Z.prototype.L=function(r,o,a,l){return this.i.add(String(r),o,!0,a,l)};function on(r,o,a,l){if(o=r.i.g[String(o)],!o)return!0;o=o.concat();for(var w=!0,T=0;T<o.length;++T){var k=o[T];if(k&&!k.da&&k.capture==a){var j=k.listener,X=k.ha||k.src;k.fa&&Yn(r.i,k),w=j.call(X,l)!==!1&&w}}return w&&!l.defaultPrevented}function Si(r,o,a){if(typeof r=="function")a&&(r=S(r,a));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:u.setTimeout(r,o||0)}function bi(r){r.g=Si(()=>{r.g=null,r.i&&(r.i=!1,bi(r))},r.l);const o=r.h;r.h=null,r.m.apply(null,o)}class Ka extends De{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:bi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(r){De.call(this),this.h=r,this.g={}}P(At,De);var Ai=[];function ki(r){Y(r.g,function(o,a){this.g.hasOwnProperty(a)&&tr(o)},r),r.g={}}At.prototype.N=function(){At.aa.N.call(this),ki(this)},At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ir=u.JSON.stringify,Ja=u.JSON.parse,Xa=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function sr(){}sr.prototype.h=null;function Ci(r){return r.h||(r.h=r.i())}function Ya(){}var kt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function or(){Q.call(this,"d")}P(or,Q);function ar(){Q.call(this,"c")}P(ar,Q);var ot={},Pi=null;function cr(){return Pi=Pi||new Z}ot.La="serverreachability";function Ri(r){Q.call(this,ot.La,r)}P(Ri,Q);function Ct(r){const o=cr();ne(o,new Ri(o))}ot.STAT_EVENT="statevent";function Ni(r,o){Q.call(this,ot.STAT_EVENT,r),this.stat=o}P(Ni,Q);function re(r){const o=cr();ne(o,new Ni(o,r))}ot.Ma="timingevent";function Di(r,o){Q.call(this,ot.Ma,r),this.size=o}P(Di,Q);function Pt(r,o){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},o)}function Rt(){this.g=!0}Rt.prototype.xa=function(){this.g=!1};function Qa(r,o,a,l,w,T){r.info(function(){if(r.g)if(T)for(var k="",j=T.split("&"),X=0;X<j.length;X++){var F=j[X].split("=");if(1<F.length){var ee=F[0];F=F[1];var te=ee.split("_");k=2<=te.length&&te[1]=="type"?k+(ee+"="+F+"&"):k+(ee+"=redacted&")}}else k=null;else k=T;return"XMLHTTP REQ ("+l+") [attempt "+w+"]: "+o+`
`+a+`
`+k})}function Za(r,o,a,l,w,T,k){r.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+w+"]: "+o+`
`+a+`
`+T+" "+k})}function at(r,o,a,l){r.info(function(){return"XMLHTTP TEXT ("+o+"): "+tc(r,a)+(l?" "+l:"")})}function ec(r,o){r.info(function(){return"TIMEOUT: "+o})}Rt.prototype.info=function(){};function tc(r,o){if(!r.g)return o;if(!o)return null;try{var a=JSON.parse(o);if(a){for(r=0;r<a.length;r++)if(Array.isArray(a[r])){var l=a[r];if(!(2>l.length)){var w=l[1];if(Array.isArray(w)&&!(1>w.length)){var T=w[0];if(T!="noop"&&T!="stop"&&T!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return ir(a)}catch{return o}}var hr={NO_ERROR:0,TIMEOUT:8},nc={},lr;function an(){}P(an,sr),an.prototype.g=function(){return new XMLHttpRequest},an.prototype.i=function(){return{}},lr=new an;function Oe(r,o,a,l){this.j=r,this.i=o,this.l=a,this.R=l||1,this.U=new At(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oi}function Oi(){this.i=null,this.g="",this.h=!1}var Li={},ur={};function dr(r,o,a){r.L=1,r.v=un(Ee(o)),r.m=a,r.P=!0,Mi(r,null)}function Mi(r,o){r.F=Date.now(),cn(r),r.A=Ee(r.v);var a=r.A,l=r.R;Array.isArray(l)||(l=[String(l)]),Ji(a.i,"t",l),r.C=0,a=r.j.J,r.h=new Oi,r.g=fs(r.j,a?o:null,!r.m),0<r.O&&(r.M=new Ka(S(r.Y,r,r.g),r.O)),o=r.U,a=r.g,l=r.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ai[0]=w.toString()),w=Ai);for(var T=0;T<w.length;T++){var k=wi(a,w[T],l||o.handleEvent,!1,o.h||o);if(!k)break;o.g[k.key]=k}o=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,o)):(r.u="GET",r.g.ea(r.A,r.u,null,o)),Ct(),Qa(r.i,r.u,r.A,r.l,r.R,r.m)}Oe.prototype.ca=function(r){r=r.target;const o=this.M;o&&Te(r)==3?o.j():this.Y(r)},Oe.prototype.Y=function(r){try{if(r==this.g)e:{const te=Te(this.g);var o=this.g.Ba();const lt=this.g.Z();if(!(3>te)&&(te!=3||this.g&&(this.h.h||this.g.oa()||ns(this.g)))){this.J||te!=4||o==7||(o==8||0>=lt?Ct(3):Ct(2)),fr(this);var a=this.g.Z();this.X=a;t:if(xi(this)){var l=ns(this.g);r="";var w=l.length,T=Te(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ze(this),Nt(this);var k="";break t}this.h.i=new u.TextDecoder}for(o=0;o<w;o++)this.h.h=!0,r+=this.h.i.decode(l[o],{stream:!(T&&o==w-1)});l.length=0,this.h.g+=r,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=a==200,Za(this.i,this.u,this.A,this.l,this.R,te,a),this.o){if(this.T&&!this.K){t:{if(this.g){var j,X=this.g;if((j=X.g?X.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(j)){var F=j;break t}}F=null}if(a=F)at(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pr(this,a);else{this.o=!1,this.s=3,re(12),ze(this),Nt(this);break e}}if(this.P){a=!0;let ce;for(;!this.J&&this.C<k.length;)if(ce=rc(this,k),ce==ur){te==4&&(this.s=4,re(14),a=!1),at(this.i,this.l,null,"[Incomplete Response]");break}else if(ce==Li){this.s=4,re(15),at(this.i,this.l,k,"[Invalid Chunk]"),a=!1;break}else at(this.i,this.l,ce,null),pr(this,ce);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||k.length!=0||this.h.h||(this.s=1,re(16),a=!1),this.o=this.o&&a,!a)at(this.i,this.l,k,"[Invalid Chunked Response]"),ze(this),Nt(this);else if(0<k.length&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.ba&&!ee.M&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),wr(ee),ee.M=!0,re(11))}}else at(this.i,this.l,k,null),pr(this,k);te==4&&ze(this),this.o&&!this.J&&(te==4?hs(this.j,this):(this.o=!1,cn(this)))}else wc(this.g),a==400&&0<k.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),ze(this),Nt(this)}}}catch{}finally{}};function xi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function rc(r,o){var a=r.C,l=o.indexOf(`
`,a);return l==-1?ur:(a=Number(o.substring(a,l)),isNaN(a)?Li:(l+=1,l+a>o.length?ur:(o=o.slice(l,l+a),r.C=l+a,o)))}Oe.prototype.cancel=function(){this.J=!0,ze(this)};function cn(r){r.S=Date.now()+r.I,Ui(r,r.I)}function Ui(r,o){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Pt(S(r.ba,r),o)}function fr(r){r.B&&(u.clearTimeout(r.B),r.B=null)}Oe.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(ec(this.i,this.A),this.L!=2&&(Ct(),re(17)),ze(this),this.s=2,Nt(this)):Ui(this,this.S-r)};function Nt(r){r.j.G==0||r.J||hs(r.j,r)}function ze(r){fr(r);var o=r.M;o&&typeof o.ma=="function"&&o.ma(),r.M=null,ki(r.U),r.g&&(o=r.g,r.g=null,o.abort(),o.ma())}function pr(r,o){try{var a=r.j;if(a.G!=0&&(a.g==r||gr(a.h,r))){if(!r.K&&gr(a.h,r)&&a.G==3){try{var l=a.Da.g.parse(o)}catch{l=null}if(Array.isArray(l)&&l.length==3){var w=l;if(w[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<r.F)_n(a),gn(a);else break e;vr(a),re(18)}}else a.za=w[1],0<a.za-a.T&&37500>w[2]&&a.F&&a.v==0&&!a.C&&(a.C=Pt(S(a.Za,a),6e3));if(1>=ji(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else qe(a,11)}else if((r.K||a.g==r)&&_n(a),!D(o))for(w=a.Da.g.parse(o),o=0;o<w.length;o++){let F=w[o];if(a.T=F[0],F=F[1],a.G==2)if(F[0]=="c"){a.K=F[1],a.ia=F[2];const ee=F[3];ee!=null&&(a.la=ee,a.j.info("VER="+a.la));const te=F[4];te!=null&&(a.Aa=te,a.j.info("SVER="+a.Aa));const lt=F[5];lt!=null&&typeof lt=="number"&&0<lt&&(l=1.5*lt,a.L=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ce=r.g;if(ce){const yn=ce.g?ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yn){var T=l.h;T.g||yn.indexOf("spdy")==-1&&yn.indexOf("quic")==-1&&yn.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(mr(T,T.h),T.h=null))}if(l.D){const Ir=ce.g?ce.g.getResponseHeader("X-HTTP-Session-Id"):null;Ir&&(l.ya=Ir,H(l.I,l.D,Ir))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-r.F,a.j.info("Handshake RTT: "+a.R+"ms")),l=a;var k=r;if(l.qa=ds(l,l.J?l.ia:null,l.W),k.K){$i(l.h,k);var j=k,X=l.L;X&&(j.I=X),j.B&&(fr(j),cn(j)),l.g=k}else as(l);0<a.i.length&&mn(a)}else F[0]!="stop"&&F[0]!="close"||qe(a,7);else a.G==3&&(F[0]=="stop"||F[0]=="close"?F[0]=="stop"?qe(a,7):yr(a):F[0]!="noop"&&a.l&&a.l.ta(F),a.v=0)}}Ct(4)}catch{}}var ic=class{constructor(r,o){this.g=r,this.map=o}};function Fi(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function ji(r){return r.h?1:r.g?r.g.size:0}function gr(r,o){return r.h?r.h==o:r.g?r.g.has(o):!1}function mr(r,o){r.g?r.g.add(o):r.h=o}function $i(r,o){r.h&&r.h==o?r.h=null:r.g&&r.g.has(o)&&r.g.delete(o)}Fi.prototype.cancel=function(){if(this.i=Bi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Bi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let o=r.i;for(const a of r.g.values())o=o.concat(a.D);return o}return L(r.i)}function sc(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(v(r)){for(var o=[],a=r.length,l=0;l<a;l++)o.push(r[l]);return o}o=[],a=0;for(l in r)o[a++]=r[l];return o}function oc(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(v(r)||typeof r=="string"){var o=[];r=r.length;for(var a=0;a<r;a++)o.push(a);return o}o=[],a=0;for(const l in r)o[a++]=l;return o}}}function Hi(r,o){if(r.forEach&&typeof r.forEach=="function")r.forEach(o,void 0);else if(v(r)||typeof r=="string")Array.prototype.forEach.call(r,o,void 0);else for(var a=oc(r),l=sc(r),w=l.length,T=0;T<w;T++)o.call(void 0,l[T],a&&a[T],r)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(r,o){if(r){r=r.split("&");for(var a=0;a<r.length;a++){var l=r[a].indexOf("="),w=null;if(0<=l){var T=r[a].substring(0,l);w=r[a].substring(l+1)}else T=r[a];o(T,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Ge(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ge){this.h=r.h,hn(this,r.j),this.o=r.o,this.g=r.g,ln(this,r.s),this.l=r.l;var o=r.i,a=new Lt;a.i=o.i,o.g&&(a.g=new Map(o.g),a.h=o.h),zi(this,a),this.m=r.m}else r&&(o=String(r).match(Wi))?(this.h=!1,hn(this,o[1]||"",!0),this.o=Dt(o[2]||""),this.g=Dt(o[3]||"",!0),ln(this,o[4]),this.l=Dt(o[5]||"",!0),zi(this,o[6]||"",!0),this.m=Dt(o[7]||"")):(this.h=!1,this.i=new Lt(null,this.h))}Ge.prototype.toString=function(){var r=[],o=this.j;o&&r.push(Ot(o,Gi,!0),":");var a=this.g;return(a||o=="file")&&(r.push("//"),(o=this.o)&&r.push(Ot(o,Gi,!0),"@"),r.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&r.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&r.push("/"),r.push(Ot(a,a.charAt(0)=="/"?lc:hc,!0))),(a=this.i.toString())&&r.push("?",a),(a=this.m)&&r.push("#",Ot(a,dc)),r.join("")};function Ee(r){return new Ge(r)}function hn(r,o,a){r.j=a?Dt(o,!0):o,r.j&&(r.j=r.j.replace(/:$/,""))}function ln(r,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);r.s=o}else r.s=null}function zi(r,o,a){o instanceof Lt?(r.i=o,fc(r.i,r.h)):(a||(o=Ot(o,uc)),r.i=new Lt(o,r.h))}function H(r,o,a){r.i.set(o,a)}function un(r){return H(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Dt(r,o){return r?o?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ot(r,o,a){return typeof r=="string"?(r=encodeURI(r).replace(o,cc),a&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function cc(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Gi=/[#\/\?@]/g,hc=/[#\?:]/g,lc=/[#\?]/g,uc=/[#\?@]/g,dc=/#/g;function Lt(r,o){this.h=this.g=null,this.i=r||null,this.j=!!o}function Le(r){r.g||(r.g=new Map,r.h=0,r.i&&ac(r.i,function(o,a){r.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}n=Lt.prototype,n.add=function(r,o){Le(this),this.i=null,r=ct(this,r);var a=this.g.get(r);return a||this.g.set(r,a=[]),a.push(o),this.h+=1,this};function qi(r,o){Le(r),o=ct(r,o),r.g.has(o)&&(r.i=null,r.h-=r.g.get(o).length,r.g.delete(o))}function Ki(r,o){return Le(r),o=ct(r,o),r.g.has(o)}n.forEach=function(r,o){Le(this),this.g.forEach(function(a,l){a.forEach(function(w){r.call(o,w,l,this)},this)},this)},n.na=function(){Le(this);const r=Array.from(this.g.values()),o=Array.from(this.g.keys()),a=[];for(let l=0;l<o.length;l++){const w=r[l];for(let T=0;T<w.length;T++)a.push(o[l])}return a},n.V=function(r){Le(this);let o=[];if(typeof r=="string")Ki(this,r)&&(o=o.concat(this.g.get(ct(this,r))));else{r=Array.from(this.g.values());for(let a=0;a<r.length;a++)o=o.concat(r[a])}return o},n.set=function(r,o){return Le(this),this.i=null,r=ct(this,r),Ki(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[o]),this.h+=1,this},n.get=function(r,o){return r?(r=this.V(r),0<r.length?String(r[0]):o):o};function Ji(r,o,a){qi(r,o),0<a.length&&(r.i=null,r.g.set(ct(r,o),L(a)),r.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],o=Array.from(this.g.keys());for(var a=0;a<o.length;a++){var l=o[a];const T=encodeURIComponent(String(l)),k=this.V(l);for(l=0;l<k.length;l++){var w=T;k[l]!==""&&(w+="="+encodeURIComponent(String(k[l]))),r.push(w)}}return this.i=r.join("&")};function ct(r,o){return o=String(o),r.j&&(o=o.toLowerCase()),o}function fc(r,o){o&&!r.j&&(Le(r),r.i=null,r.g.forEach(function(a,l){var w=l.toLowerCase();l!=w&&(qi(this,l),Ji(this,w,a))},r)),r.j=o}function pc(r,o){const a=new Rt;if(u.Image){const l=new Image;l.onload=C(Me,a,"TestLoadImage: loaded",!0,o,l),l.onerror=C(Me,a,"TestLoadImage: error",!1,o,l),l.onabort=C(Me,a,"TestLoadImage: abort",!1,o,l),l.ontimeout=C(Me,a,"TestLoadImage: timeout",!1,o,l),u.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=r}else o(!1)}function gc(r,o){const a=new Rt,l=new AbortController,w=setTimeout(()=>{l.abort(),Me(a,"TestPingServer: timeout",!1,o)},1e4);fetch(r,{signal:l.signal}).then(T=>{clearTimeout(w),T.ok?Me(a,"TestPingServer: ok",!0,o):Me(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(w),Me(a,"TestPingServer: error",!1,o)})}function Me(r,o,a,l,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),l(a)}catch{}}function mc(){this.g=new Xa}function _c(r,o,a){const l=a||"";try{Hi(r,function(w,T){let k=w;g(w)&&(k=ir(w)),o.push(l+T+"="+encodeURIComponent(k))})}catch(w){throw o.push(l+"type="+encodeURIComponent("_badmap")),w}}function dn(r){this.l=r.Ub||null,this.j=r.eb||!1}P(dn,sr),dn.prototype.g=function(){return new fn(this.l,this.j)},dn.prototype.i=(function(r){return function(){return r}})({});function fn(r,o){Z.call(this),this.D=r,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(fn,Z),n=fn.prototype,n.open=function(r,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=o,this.readyState=1,xt(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(o.body=r),(this.D||u).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mt(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,xt(this)),this.g&&(this.readyState=3,xt(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var o=r.value?r.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!r.done}))&&(this.response=this.responseText+=o)}r.done?Mt(this):xt(this),this.readyState==3&&Xi(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Mt(this))},n.Qa=function(r){this.g&&(this.response=r,Mt(this))},n.ga=function(){this.g&&Mt(this)};function Mt(r){r.readyState=4,r.l=null,r.j=null,r.v=null,xt(r)}n.setRequestHeader=function(r,o){this.u.append(r,o)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,r.push(a[0]+": "+a[1]),a=o.next();return r.join(`\r
`)};function xt(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(fn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Yi(r){let o="";return Y(r,function(a,l){o+=l,o+=":",o+=a,o+=`\r
`}),o}function _r(r,o,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=Yi(a),typeof r=="string"?a!=null&&encodeURIComponent(String(a)):H(r,o,a))}function W(r){Z.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(W,Z);var yc=/^https?$/i,vc=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,o,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);o=o?o.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lr.g(),this.v=this.o?Ci(this.o):Ci(lr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(r),!0),this.B=!1}catch(T){Qi(this,T);return}if(r=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var w in l)a.set(w,l[w]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const T of l.keys())a.set(T,l.get(T));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(T=>T.toLowerCase()=="content-type"),w=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(vc,o,void 0))||l||w||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,k]of a)this.g.setRequestHeader(T,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ts(this),this.u=!0,this.g.send(r),this.u=!1}catch(T){Qi(this,T)}};function Qi(r,o){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=o,r.m=5,Zi(r),pn(r)}function Zi(r){r.A||(r.A=!0,ne(r,"complete"),ne(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ne(this,"complete"),ne(this,"abort"),pn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pn(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?es(this):this.bb())},n.bb=function(){es(this)};function es(r){if(r.h&&typeof h<"u"&&(!r.v[1]||Te(r)!=4||r.Z()!=2)){if(r.u&&Te(r)==4)Si(r.Ea,0,r);else if(ne(r,"readystatechange"),Te(r)==4){r.h=!1;try{const k=r.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var l;if(l=k===0){var w=String(r.D).match(Wi)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),l=!yc.test(w?w.toLowerCase():"")}a=l}if(a)ne(r,"complete"),ne(r,"success");else{r.m=6;try{var T=2<Te(r)?r.g.statusText:""}catch{T=""}r.l=T+" ["+r.Z()+"]",Zi(r)}}finally{pn(r)}}}}function pn(r,o){if(r.g){ts(r);const a=r.g,l=r.v[0]?()=>{}:null;r.g=null,r.v=null,o||ne(r,"ready");try{a.onreadystatechange=l}catch{}}}function ts(r){r.I&&(u.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Te(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Te(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var o=this.g.responseText;return r&&o.indexOf(r)==0&&(o=o.substring(r.length)),Ja(o)}};function ns(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function wc(r){const o={};r=(r.g&&2<=Te(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<r.length;l++){if(D(r[l]))continue;var a=m(r[l]);const w=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const T=o[w]||[];o[w]=T,T.push(a)}y(o,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ut(r,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[r]||o}function rs(r){this.Aa=0,this.i=[],this.j=new Rt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ut("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ut("baseRetryDelayMs",5e3,r),this.cb=Ut("retryDelaySeedMs",1e4,r),this.Wa=Ut("forwardChannelMaxRetries",2,r),this.wa=Ut("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(r&&r.concurrentRequestLimit),this.Da=new mc,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rs.prototype,n.la=8,n.G=1,n.connect=function(r,o,a,l){re(0),this.W=r,this.H=o||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.I=ds(this,null,this.W),mn(this)};function yr(r){if(is(r),r.G==3){var o=r.U++,a=Ee(r.I);if(H(a,"SID",r.K),H(a,"RID",o),H(a,"TYPE","terminate"),Ft(r,a),o=new Oe(r,r.j,o),o.L=2,o.v=un(Ee(a)),a=!1,u.navigator&&u.navigator.sendBeacon)try{a=u.navigator.sendBeacon(o.v.toString(),"")}catch{}!a&&u.Image&&(new Image().src=o.v,a=!0),a||(o.g=fs(o.j,null),o.g.ea(o.v)),o.F=Date.now(),cn(o)}us(r)}function gn(r){r.g&&(wr(r),r.g.cancel(),r.g=null)}function is(r){gn(r),r.u&&(u.clearTimeout(r.u),r.u=null),_n(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function mn(r){if(!Vi(r.h)&&!r.s){r.s=!0;var o=r.Ga;Tt||vi(),St||(Tt(),St=!0),Xn.add(o,r),r.B=0}}function Ic(r,o){return ji(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=o.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Pt(S(r.Ga,r,o),ls(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const w=new Oe(this,this.j,r);let T=this.o;if(this.S&&(T?(T=d(T),_(T,this.S)):T=this.S),this.m!==null||this.O||(w.H=T,T=null),this.P)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(o+=l,4096<o){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=os(this,w,o),a=Ee(this.I),H(a,"RID",r),H(a,"CVER",22),this.D&&H(a,"X-HTTP-Session-Id",this.D),Ft(this,a),T&&(this.O?o="headers="+encodeURIComponent(String(Yi(T)))+"&"+o:this.m&&_r(a,this.m,T)),mr(this.h,w),this.Ua&&H(a,"TYPE","init"),this.P?(H(a,"$req",o),H(a,"SID","null"),w.T=!0,dr(w,a,null)):dr(w,a,o),this.G=2}}else this.G==3&&(r?ss(this,r):this.i.length==0||Vi(this.h)||ss(this))};function ss(r,o){var a;o?a=o.l:a=r.U++;const l=Ee(r.I);H(l,"SID",r.K),H(l,"RID",a),H(l,"AID",r.T),Ft(r,l),r.m&&r.o&&_r(l,r.m,r.o),a=new Oe(r,r.j,a,r.B+1),r.m===null&&(a.H=r.o),o&&(r.i=o.D.concat(r.i)),o=os(r,a,1e3),a.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),mr(r.h,a),dr(a,l,o)}function Ft(r,o){r.H&&Y(r.H,function(a,l){H(o,l,a)}),r.l&&Hi({},function(a,l){H(o,l,a)})}function os(r,o,a){a=Math.min(r.i.length,a);var l=r.l?S(r.l.Na,r.l,r):null;e:{var w=r.i;let T=-1;for(;;){const k=["count="+a];T==-1?0<a?(T=w[0].g,k.push("ofs="+T)):T=0:k.push("ofs="+T);let j=!0;for(let X=0;X<a;X++){let F=w[X].g;const ee=w[X].map;if(F-=T,0>F)T=Math.max(0,w[X].g-100),j=!1;else try{_c(ee,k,"req"+F+"_")}catch{l&&l(ee)}}if(j){l=k.join("&");break e}}}return r=r.i.splice(0,a),o.D=r,l}function as(r){if(!r.g&&!r.u){r.Y=1;var o=r.Fa;Tt||vi(),St||(Tt(),St=!0),Xn.add(o,r),r.v=0}}function vr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Pt(S(r.Fa,r),ls(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,cs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Pt(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),gn(this),cs(this))};function wr(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function cs(r){r.g=new Oe(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var o=Ee(r.qa);H(o,"RID","rpc"),H(o,"SID",r.K),H(o,"AID",r.T),H(o,"CI",r.F?"0":"1"),!r.F&&r.ja&&H(o,"TO",r.ja),H(o,"TYPE","xmlhttp"),Ft(r,o),r.m&&r.o&&_r(o,r.m,r.o),r.L&&(r.g.I=r.L);var a=r.g;r=r.ia,a.L=1,a.v=un(Ee(o)),a.m=null,a.P=!0,Mi(a,r)}n.Za=function(){this.C!=null&&(this.C=null,gn(this),vr(this),re(19))};function _n(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function hs(r,o){var a=null;if(r.g==o){_n(r),wr(r),r.g=null;var l=2}else if(gr(r.h,o))a=o.D,$i(r.h,o),l=1;else return;if(r.G!=0){if(o.o)if(l==1){a=o.m?o.m.length:0,o=Date.now()-o.F;var w=r.B;l=cr(),ne(l,new Di(l,a)),mn(r)}else as(r);else if(w=o.s,w==3||w==0&&0<o.X||!(l==1&&Ic(r,o)||l==2&&vr(r)))switch(a&&0<a.length&&(o=r.h,o.i=o.i.concat(a)),w){case 1:qe(r,5);break;case 4:qe(r,10);break;case 3:qe(r,6);break;default:qe(r,2)}}}function ls(r,o){let a=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(a*=2),a*o}function qe(r,o){if(r.j.info("Error code "+o),o==2){var a=S(r.fb,r),l=r.Xa;const w=!l;l=new Ge(l||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||hn(l,"https"),un(l),w?pc(l.toString(),a):gc(l.toString(),a)}else re(2);r.G=0,r.l&&r.l.sa(o),us(r),is(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function us(r){if(r.G=0,r.ka=[],r.l){const o=Bi(r.h);(o.length!=0||r.i.length!=0)&&(N(r.ka,o),N(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function ds(r,o,a){var l=a instanceof Ge?Ee(a):new Ge(a);if(l.g!="")o&&(l.g=o+"."+l.g),ln(l,l.s);else{var w=u.location;l=w.protocol,o=o?o+"."+w.hostname:w.hostname,w=+w.port;var T=new Ge(null);l&&hn(T,l),o&&(T.g=o),w&&ln(T,w),a&&(T.l=a),l=T}return a=r.D,o=r.ya,a&&o&&H(l,a,o),H(l,"VER",r.la),Ft(r,l),l}function fs(r,o,a){if(o&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=r.Ca&&!r.pa?new W(new dn({eb:a})):new W(r.pa),o.Ha(r.J),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ps(){}n=ps.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oe(r,o){Z.call(this),this.g=new rs(o),this.l=r,this.h=o&&o.messageUrlParams||null,r=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(r?r["X-WebChannel-Content-Type"]=o.messageContentType:r={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(r?r["X-WebChannel-Client-Profile"]=o.va:r={"X-WebChannel-Client-Profile":o.va}),this.g.S=r,(r=o&&o.Sb)&&!D(r)&&(this.g.m=r),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!D(o)&&(this.g.D=o,r=this.h,r!==null&&o in r&&(r=this.h,o in r&&delete r[o])),this.j=new ht(this)}P(oe,Z),oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){yr(this.g)},oe.prototype.o=function(r){var o=this.g;if(typeof r=="string"){var a={};a.__data__=r,r=a}else this.u&&(a={},a.__data__=ir(r),r=a);o.i.push(new ic(o.Ya++,r)),o.G==3&&mn(o)},oe.prototype.N=function(){this.g.l=null,delete this.j,yr(this.g),delete this.g,oe.aa.N.call(this)};function gs(r){or.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var o=r.__sm__;if(o){e:{for(const a in o){r=a;break e}r=void 0}(this.i=r)&&(r=this.i,o=o!==null&&r in o?o[r]:void 0),this.data=o}else this.data=r}P(gs,or);function ms(){ar.call(this),this.status=1}P(ms,ar);function ht(r){this.g=r}P(ht,ps),ht.prototype.ua=function(){ne(this.g,"a")},ht.prototype.ta=function(r){ne(this.g,new gs(r))},ht.prototype.sa=function(r){ne(this.g,new ms)},ht.prototype.ra=function(){ne(this.g,"b")},oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,nc.COMPLETE="complete",Ya.EventType=kt,kt.OPEN="a",kt.CLOSE="b",kt.ERROR="c",kt.MESSAGE="d",Z.prototype.listen=Z.prototype.K,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha}).apply(typeof In<"u"?In:typeof self<"u"?self:typeof window<"u"?window:{});const Xs="@firebase/firestore",Ys="4.9.1";/**
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
 */class ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ie.UNAUTHENTICATED=new ie(null),ie.GOOGLE_CREDENTIALS=new ie("google-credentials-uid"),ie.FIRST_PARTY=new ie("first-party-uid"),ie.MOCK_USER=new ie("mock-user");/**
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
 */let en="12.2.0";/**
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
 */const _t=new ei("@firebase/firestore");function ue(n,...e){if(_t.logLevel<=V.DEBUG){const t=e.map(pi);_t.debug(`Firestore (${en}): ${n}`,...t)}}function ba(n,...e){if(_t.logLevel<=V.ERROR){const t=e.map(pi);_t.error(`Firestore (${en}): ${n}`,...t)}}function ld(n,...e){if(_t.logLevel<=V.WARN){const t=e.map(pi);_t.warn(`Firestore (${en}): ${n}`,...t)}}function pi(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Kt(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Aa(n,i,t)}function Aa(n,e,t){let i=`FIRESTORE (${en}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw ba(i),new Error(i)}function $t(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Aa(e,s,i)}/**
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
 */const x={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class U extends Ne{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class ka{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ud{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ie.UNAUTHENTICATED)))}shutdown(){}}class dd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class fd{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$t(this.o===void 0,42304);let i=this.i;const s=v=>this.i!==i?(i=this.i,t(v)):Promise.resolve();let c=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Bt,e.enqueueRetryable((()=>s(this.currentUser)))};const h=()=>{const v=c;e.enqueueRetryable((async()=>{await v.promise,await s(this.currentUser)}))},u=v=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((v=>u(v))),setTimeout((()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?u(v):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Bt)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($t(typeof i.accessToken=="string",31837,{l:i}),new ka(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $t(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class pd{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gd{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new pd(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class md{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ae(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$t(this.o===void 0,3512);const i=c=>{c.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>i(c)))};const s=c=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>s(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?s(c):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qs(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($t(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _d(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=_d(40);for(let c=0;c<s.length;++c)i.length<20&&s[c]<t&&(i+=e.charAt(s[c]%62))}return i}}function He(n,e){return n<e?-1:n>e?1:0}function vd(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),c=e.charAt(i);if(s!==c)return Pr(s)===Pr(c)?He(s,c):Pr(s)?1:-1}return He(n.length,e.length)}const wd=55296,Id=57343;function Pr(n){const e=n.charCodeAt(0);return e>=wd&&e<=Id}/**
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
 */const Zs="__name__";class fe{constructor(e,t,i){t===void 0?t=0:t>e.length&&Kt(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Kt(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return fe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fe?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const c=fe.compareSegments(e.get(s),t.get(s));if(c!==0)return c}return He(e.length,t.length)}static compareSegments(e,t){const i=fe.isNumericId(e),s=fe.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?fe.extractNumericId(e).compare(fe.extractNumericId(t)):vd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fi.fromString(e.substring(4,e.length-2))}}class he extends fe{construct(e,t,i){return new he(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new U(x.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new he(t)}static emptyPath(){return new he([])}}const Ed=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends fe{construct(e,t,i){return new Xe(e,t,i)}static isValidIdentifier(e){return Ed.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zs}static keyField(){return new Xe([Zs])}static fromServerFormat(e){const t=[];let i="",s=0;const c=()=>{if(i.length===0)throw new U(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new U(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[s+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new U(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=v,s+=2}else u==="`"?(h=!h,s++):u!=="."||h?(i+=u,s++):(c(),s++)}if(c(),h)throw new U(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
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
 */class Qe{constructor(e){this.path=e}static fromPath(e){return new Qe(he.fromString(e))}static fromName(e){return new Qe(he.fromString(e).popFirst(5))}static empty(){return new Qe(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Qe(new he(e.slice()))}}function Td(n,e,t,i){if(e===!0&&i===!0)throw new U(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Kt(12329,{type:typeof n})}function Ad(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bd(n);throw new U(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function q(n,e){const t={typeString:n};return e&&(t.value=e),t}function tn(n,e){if(!Sd(n))throw new U(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,c="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(s&&typeof h!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${i}' field to equal '${c.value}'`;break}}if(t)throw new U(x.INVALID_ARGUMENT,t);return!0}/**
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
 */const eo=-62135596800,to=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*to);return new pe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<eo)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/to}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(tn(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-eo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:q("string",pe._jsonSchemaVersion),seconds:q("number"),nanoseconds:q("number")};function kd(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Cd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Cd("Invalid base64 string: "+c):c}})(e);return new st(t)}static fromUint8Array(e){const t=(function(s){let c="";for(let h=0;h<s.length;++h)c+=String.fromCharCode(s[h]);return c})(e);return new st(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Hr="(default)";class $n{constructor(e,t){this.projectId=e,this.database=t||Hr}static empty(){return new $n("","")}get isDefaultDatabase(){return this.database===Hr}isEqual(e){return e instanceof $n&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Pd{constructor(e,t=null,i=[],s=[],c=null,h="F",u=null,v=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=c,this.limitType=h,this.startAt=u,this.endAt=v,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Rd(n){return new Pd(n)}/**
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
 */var no,M;(M=no||(no={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new fi([4294967295,4294967295],0);/**
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
 */const Nd=41943040;/**
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
 */const Dd=1048576;function Rr(){return typeof document<"u"?document:null}/**
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
 */class Od{constructor(e,t,i=1e3,s=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&ue("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class gi{constructor(e,t,i,s,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=c,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,c){const h=Date.now()+i,u=new gi(e,t,h,s,c);return u.start(i),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ro,io;(io=ro||(ro={})).Ma="default",io.Cache="cache";/**
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
 */function Ld(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const so=new Map;/**
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
 */const Ca="firestore.googleapis.com",oo=!0;class ao{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ca,this.ssl=oo}else this.host=e.host,this.ssl=e.ssl??oo;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Dd)throw new U(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Td("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ld(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pa{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ao({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ao(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new ud;switch(i.type){case"firstParty":return new gd(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new U(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=so.get(t);i&&(ue("ComponentProvider","Removing Datastore"),so.delete(t),i.terminate())})(this),Promise.resolve()}}function Ra(n,e,t,i={}){n=Ad(n,Pa);const s=yt(e),c=n._getSettings(),h={...c,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(Qr(`https://${u}`),Zr("Firestore",!0)),c.host!==Ca&&c.host!==u&&ld("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v={...c,host:u,ssl:s,emulatorOptions:i};if(!nt(v,h)&&(n._setSettings(v),i.mockUserToken)){let g,b;if(typeof i.mockUserToken=="string")g=i.mockUserToken,b=ie.MOCK_USER;else{g=Vc(i.mockUserToken,n._app?.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new U(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new ie(E)}n._authCredentials=new dd(new ka(g,b))}}/**
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
 */class mi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new mi(this.firestore,e,this._query)}}class ge{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(tn(t,ge._jsonSchema))return new ge(e,i||null,new Qe(he.fromString(t.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:q("string",ge._jsonSchemaVersion),referencePath:q("string")};class _i extends mi{constructor(e,t,i){super(e,t,Rd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new Qe(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}/**
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
 */const co="AsyncQueue";class ho{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Od(this,"async_queue_retry"),this._c=()=>{const i=Rr();i&&ue(co,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Rr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Rr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Bt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!kd(e))throw e;ue(co,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,ba("INTERNAL UNHANDLED ERROR: ",lo(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=gi.createAndSchedule(this,e,t,i,(c=>this.hc(c)));return this.tc.push(s),s}uc(){this.nc&&Kt(47125,{Pc:lo(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function lo(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Md extends Pa{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new ho,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ho(e),this._firestoreClient=void 0,await e}}}function xd(n,e){const t=typeof n=="object"?n:ni(),i=typeof n=="string"?n:Hr,s=Gn(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const c=Fo("firestore");c&&Ra(s,...c)}return s}/**
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
 */class be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new be(st.fromBase64String(e))}catch(t){throw new U(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new be(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(tn(e,be._jsonSchema))return be.fromBase64String(e.bytes)}}be._jsonSchemaVersion="firestore/bytes/1.0",be._jsonSchema={type:q("string",be._jsonSchemaVersion),bytes:q("string")};/**
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
 */class Na{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class et{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:et._jsonSchemaVersion}}static fromJSON(e){if(tn(e,et._jsonSchema))return new et(e.latitude,e.longitude)}}et._jsonSchemaVersion="firestore/geoPoint/1.0",et._jsonSchema={type:q("string",et._jsonSchemaVersion),latitude:q("number"),longitude:q("number")};/**
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
 */class tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let c=0;c<i.length;++c)if(i[c]!==s[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(tn(e,tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new tt(e.vectorValues);throw new U(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tt._jsonSchemaVersion="firestore/vectorValue/1.0",tt._jsonSchema={type:q("string",tt._jsonSchemaVersion),vectorValues:q("object")};const Ud=new RegExp("[~\\*/\\[\\]]");function Fd(n,e,t){if(e.search(Ud)>=0)throw uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Na(...e.split("."))._internalPath}catch{throw uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function uo(n,e,t,i,s){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new U(x.INVALID_ARGUMENT,c+n+h)}/**
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
 */class Da{constructor(e,t,i,s,c){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Oa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Vd extends Da{data(){return super.data()}}function Oa(n,e){return typeof e=="string"?Fd(n,e):e instanceof Na?e._internalPath:e._delegate._internalPath}class En{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pt extends Da{constructor(e,t,i,s,c,h){super(e,t,i,s,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Oa("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}pt._jsonSchemaVersion="firestore/documentSnapshot/1.0",pt._jsonSchema={type:q("string",pt._jsonSchemaVersion),bundleSource:q("string","DocumentSnapshot"),bundleName:q("string"),bundle:q("string")};class Rn extends pt{data(e={}){return super.data(e)}}class Ht{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new En(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Rn(this._firestore,this._userDataWriter,i.key,i,new En(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,c){if(s._snapshot.oldDocs.isEmpty()){let h=0;return s._snapshot.docChanges.map((u=>{const v=new Rn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new En(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:v,oldIndex:-1,newIndex:h++}}))}{let h=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>c||u.type!==3)).map((u=>{const v=new Rn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new En(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,b=-1;return u.type!==0&&(g=h.indexOf(u.doc.key),h=h.delete(u.doc.key)),u.type!==1&&(h=h.add(u.doc),b=h.indexOf(u.doc.key)),{type:jd(u.type),doc:v,oldIndex:g,newIndex:b}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ht._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),i.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),s.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Kt(61501,{type:n})}}Ht._jsonSchemaVersion="firestore/querySnapshot/1.0",Ht._jsonSchema={type:q("string",Ht._jsonSchemaVersion),bundleSource:q("string","QuerySnapshot"),bundleName:q("string"),bundle:q("string")};(function(e,t=!0){(function(s){en=s})(vt),rt(new Be("firestore",((i,{instanceIdentifier:s,options:c})=>{const h=i.getProvider("app").getImmediate(),u=new Md(new fd(i.getProvider("auth-internal")),new md(h,i.getProvider("app-check-internal")),(function(g,b){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new U(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $n(g.options.projectId,b)})(h,s),h);return c={useFetchStreams:t,...c},u._setSettings(c),u}),"PUBLIC").setMultipleInstances(!0)),me(Xs,Ys,e),me(Xs,Ys,"esm2020")})();/**
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
 */const La="functions";/**
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
 */class $d{constructor(e,t,i,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,ae(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(c=>this.auth=c,()=>{}),this.messaging||i.get().then(c=>this.messaging=c,()=>{}),this.appCheck||s?.get().then(c=>this.appCheck=c,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
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
 */const Wr="us-central1";class Bd{constructor(e,t,i,s,c=Wr,h=(...u)=>fetch(...u)){this.app=e,this.fetchImpl=h,this.emulatorOrigin=null,this.contextProvider=new $d(e,t,i,s),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(c);this.customDomain=u.origin+(u.pathname==="/"?"":u.pathname),this.region=Wr}catch{this.customDomain=null,this.region=c}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Hd(n,e,t){const i=yt(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(Qr(n.emulatorOrigin+"/backends"),Zr("Functions",!0))}const fo="@firebase/functions",po="0.13.1";/**
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
 */const Wd="auth-internal",zd="app-check-internal",Gd="messaging-internal";function qd(n){const e=(t,{instanceIdentifier:i})=>{const s=t.getProvider("app").getImmediate(),c=t.getProvider(Wd),h=t.getProvider(Gd),u=t.getProvider(zd);return new Bd(s,c,h,u,i)};rt(new Be(La,e,"PUBLIC").setMultipleInstances(!0)),me(fo,po,n),me(fo,po,"esm2020")}/**
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
 */function Kd(n=ni(),e=Wr){const i=Gn(ve(n),La).getImmediate({identifier:e}),s=Fo("functions");return s&&Ma(i,...s),i}function Ma(n,e,t){Hd(ve(n),e,t)}qd();const Jd={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},yi=Ho(Jd),Wt=Sa(yi),Xd=new Se,Yd=xd(yi),Qd=Kd(yi);location.hostname==="localhost"&&(ca(Wt,"http://localhost:9099"),Ra(Yd,"localhost",8080),Ma(Qd,"localhost",5001));var Bn,z,Nr,go,zr=0,xa=[],G=$,mo=G.__b,_o=G.__r,yo=G.diffed,vo=G.__c,wo=G.unmount,Io=G.__;function Ua(n,e){G.__h&&G.__h(z,n,zr||e),zr=0;var t=z.__H||(z.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function K(n){return zr=1,Zd(Fa,n)}function Zd(n,e,t){var i=Ua(Bn++,2);if(i.t=n,!i.__c&&(i.__=[Fa(void 0,e),function(u){var v=i.__N?i.__N[0]:i.__[0],g=i.t(v,u);v!==g&&(i.__N=[g,i.__[1]],i.__c.setState({}))}],i.__c=z,!z.__f)){var s=function(u,v,g){if(!i.__c.__H)return!0;var b=i.__c.__H.__.filter(function(S){return!!S.__c});if(b.every(function(S){return!S.__N}))return!c||c.call(this,u,v,g);var E=i.__c.props!==u;return b.forEach(function(S){if(S.__N){var C=S.__[0];S.__=S.__N,S.__N=void 0,C!==S.__[0]&&(E=!0)}}),c&&c.call(this,u,v,g)||E};z.__f=!0;var c=z.shouldComponentUpdate,h=z.componentWillUpdate;z.componentWillUpdate=function(u,v,g){if(this.__e){var b=c;c=void 0,s(u,v,g),c=b}h&&h.call(this,u,v,g)},z.shouldComponentUpdate=s}return i.__N||i.__}function It(n,e){var t=Ua(Bn++,3);!G.__s&&nf(t.__H,e)&&(t.__=n,t.u=e,z.__H.__h.push(t))}function ef(){for(var n;n=xa.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Nn),n.__H.__h.forEach(Gr),n.__H.__h=[]}catch(e){n.__H.__h=[],G.__e(e,n.__v)}}G.__b=function(n){z=null,mo&&mo(n)},G.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Io&&Io(n,e)},G.__r=function(n){_o&&_o(n),Bn=0;var e=(z=n.__c).__H;e&&(Nr===z?(e.__h=[],z.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(Nn),e.__h.forEach(Gr),e.__h=[],Bn=0)),Nr=z},G.diffed=function(n){yo&&yo(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(xa.push(e)!==1&&go===G.requestAnimationFrame||((go=G.requestAnimationFrame)||tf)(ef)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Nr=z=null},G.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Nn),t.__h=t.__h.filter(function(i){return!i.__||Gr(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],G.__e(i,t.__v)}}),vo&&vo(n,e)},G.unmount=function(n){wo&&wo(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{Nn(i)}catch(s){e=s}}),t.__H=void 0,e&&G.__e(e,t.__v))};var Eo=typeof requestAnimationFrame=="function";function tf(n){var e,t=function(){clearTimeout(i),Eo&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);Eo&&(e=requestAnimationFrame(t))}function Nn(n){var e=z,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),z=e}function Gr(n){var e=z;n.__c=n.__(),z=e}function nf(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function Fa(n,e){return typeof e=="function"?e(n):e}function rf(){const[n,e]=K(null);It(()=>{const s=da(Wt,e);return()=>s()},[]);async function t(){try{await yu(Wt,Xd)}catch(s){console.error("Login failed:",s.message)}}async function i(){await Ql(Wt)}return n?A("div",{class:"flex flex-col items-center justify-center h-screen space-y-4",children:[n.photoURL&&A("img",{src:n.photoURL,alt:"Profile",class:"rounded-full w-16 h-16"}),A("p",{class:"text-lg",children:["Hello, ",n.displayName||n.email,"!"]}),A("button",{onClick:i,class:"bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800",children:"Sign Out"})]}):A("div",{class:"flex flex-col items-center justify-center h-screen space-y-4",children:[A("h2",{class:"text-2xl font-bold",children:"Welcome to Procrastinot"}),A("button",{onClick:t,class:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Sign in with Google"})]})}const sf=window.location.origin;async function Tn(n,e={}){const t=Sa().currentUser;if(!t)throw new Error("User not authenticated");const i=await t.getIdToken(),s={...e.headers||{},"Content-Type":"application/json",Authorization:`Bearer ${i}`},c=await fetch(`${sf}${n}`,{...e,headers:s});if(!c.ok)throw new Error(`API error: ${c.statusText}`);try{return await c.json()}catch{return null}}const We={getRooms:()=>Tn("/api/rooms"),createRoom:n=>Tn("/api/rooms",{method:"POST",body:JSON.stringify(n)}),joinRoom:n=>Tn("/api/rooms/join",{method:"POST",body:JSON.stringify({inviteCode:n})}),startSession:(n,e)=>Tn(`/api/rooms/${n}/sessions`,{method:"POST",body:JSON.stringify({mode:e})})};function of({onRoomCreated:n}){console.log("CreateRoom component rendering");const[e,t]=K("");async function i(s){if(s.preventDefault(),!!e.trim())try{const c=await We.createRoom({name:e});typeof n=="function"&&n(c),t("")}catch(c){console.error("Failed to create room:",c.message)}}return A("form",{onSubmit:i,class:"flex items-center space-x-2",children:[A("input",{type:"text",value:e,onInput:s=>t(s.target.value),placeholder:"New room name",class:"border px-2 py-1 rounded"}),A("button",{type:"submit",class:"bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700",children:"Create"})]})}function af({onRoomJoined:n}){console.log("JoinRoom component rendering");const[e,t]=K("");async function i(s){if(s.preventDefault(),!!e.trim())try{const c=await We.joinRoom(e);n(c),t("")}catch(c){console.error("Failed to join room:",c.message)}}return A("form",{onSubmit:i,class:"flex items-center space-x-2",children:[A("input",{type:"text",value:e,onInput:s=>t(s.target.value),placeholder:"Enter invite code",class:"border px-2 py-1 rounded"}),A("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700",children:"Join"})]})}function cf({roomId:n,onSessionStarted:e}){console.log("StartSession component rendering");const[t,i]=K("pomodoro");async function s(){try{const c=await We.startSession(n,t);e(c)}catch(c){console.error("Failed to start session:",c.message)}}return A("div",{class:"flex items-center space-x-2",children:[A("select",{value:t,onChange:c=>i(c.target.value),class:"border px-2 py-1 rounded",children:[A("option",{value:"pomodoro",children:"Pomodoro (25 min)"}),A("option",{value:"short_break",children:"Short Break (5 min)"}),A("option",{value:"long_break",children:"Long Break (15 min)"})]}),A("button",{onClick:s,class:"bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700",children:"Start Session"})]})}function hf({roomId:n,sessionId:e,userId:t}){const[i,s]=K(""),[c,h]=K(!1),[u,v]=K(null);async function g(b){if(b.preventDefault(),!!i.trim()){h(!0),v(null);try{await We.trackProgress(n,e,t,{task:i}),s("")}catch(E){v(E.message)}finally{h(!1)}}}return A("form",{onSubmit:g,class:"mt-4",children:[A("h4",{class:"font-semibold mb-2",children:"Track Your Progress"}),A("div",{class:"flex items-center space-x-2",children:[A("input",{type:"text",value:i,onInput:b=>s(b.target.value),placeholder:"Enter a completed task",class:"border px-2 py-1 rounded w-full",disabled:c}),A("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400",disabled:c,children:c?"Submitting...":"Submit"})]}),u&&A("p",{class:"text-red-500 mt-2",children:["Error: ",u]})]})}function lf({room:n,user:e}){return n?A("div",{class:"p-4 border rounded-lg shadow-sm",children:[A("h3",{class:"text-xl font-bold mb-2",children:n.name}),A("p",{children:[A("strong",{children:"Mode:"})," ",n.mode]}),A("p",{children:[A("strong",{children:"Invite Code:"})," ",A("span",{class:"font-mono bg-gray-200 p-1 rounded",children:n.inviteCode})]}),A(hf,{roomId:n.id,sessionId:"s_placeholder_123",userId:e.uid})]}):A("div",{children:"Select a room to see details."})}function uf({user:n}){const[e,t]=K([]),[i,s]=K(null),c=()=>{We.getRooms().then(g=>{Array.isArray(g)?t(g):console.error("API did not return an array for rooms:",g)}).catch(console.error)};It(()=>{c()},[]);const h=g=>{const b=e.findIndex(E=>E.id===g.id);if(b>-1){const E=[...e];E[b]=g,t(E)}else t([...e,g])},u=g=>{console.log("Session started:",g),alert(`Session started with mode: ${g.mode}`)},v=e.find(g=>g.id===i);return A("div",{class:"container mx-auto p-4",children:[A("div",{class:"flex space-x-4 mb-6",children:[A(of,{onRoomCreated:h}),A(af,{onRoomJoined:h})]}),A("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[A("div",{children:[A("h3",{class:"text-xl font-semibold mb-3",children:"My Rooms"}),A("ul",{class:"space-y-3",children:e.map(g=>A("li",{class:`p-4 border rounded-lg flex justify-between items-center shadow-sm cursor-pointer hover:bg-gray-100 ${i===g.id?"bg-gray-200":""}`,onClick:()=>s(g.id),children:[A("span",{class:"font-medium",children:g.name}),A(cf,{roomId:g.id,onSessionStarted:u})]},g.id))})]}),A("div",{children:[A("h3",{class:"text-xl font-semibold mb-3",children:"Room Details"}),A(lf,{room:v,user:n})]})]})]})}function df({activePage:n,setActivePage:e}){return A("nav",{class:"bg-gray-800 text-white p-4",children:A("ul",{class:"flex space-x-4",children:["Rooms","Friends","Accountability"].map(i=>A("li",{children:A("a",{href:"#",class:`hover:text-gray-300 ${n===i.toLowerCase()?"font-bold":""}`,onClick:s=>{s.preventDefault(),e(i.toLowerCase())},children:i})},i))})})}function ff({user:n}){const[e,t]=K([]),[i,s]=K(!0),[c,h]=K(null);return It(()=>{if(console.log("FriendsPage user:",n),!!n){s(!0);try{We.getFriends(n.uid).then(u=>{Array.isArray(u)?t(u):t([]),h(null)}).catch(u=>{h(u.message),t([])}).finally(()=>s(!1))}catch(u){h(u.message),s(!1)}}},[n]),A("div",{class:"p-4",children:[A("h2",{class:"text-2xl font-bold mb-4",children:"Focus Friends"}),i&&A("div",{children:"Loading friends..."}),c&&A("div",{class:"text-red-500",children:["Error: ",c]}),!i&&!c&&A("ul",{class:"space-y-3",children:e.map(u=>A("li",{class:"p-4 border rounded-lg flex justify-between items-center shadow-sm",children:[A("span",{class:"font-medium",children:u.name}),A("span",{class:`px-2 py-1 text-sm rounded-full ${u.status==="in-session"?"bg-green-200 text-green-800":"bg-gray-200 text-gray-800"}`,children:u.status})]},u.id))})]})}function pf({friend:n}){const[e,t]=K(null),[i,s]=K(!0);return It(()=>{We.getFriendActivity(n.id).then(c=>{t(c),s(!1)})},[n.id]),A("li",{class:"p-4 border rounded-lg shadow-sm",children:[A("h3",{class:"font-bold",children:n.name}),i?A("p",{children:"Loading progress..."}):A("div",{class:"mt-2",children:[A("p",{children:["Completed Sessions: ",e.completedSessions]}),A("p",{children:["Nudges Received: ",e.nudgesReceived]}),A("button",{class:"mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600",children:"Nudge"})]})]})}function gf({user:n}){const[e,t]=K([]),[i,s]=K(!0),[c,h]=K(null);return It(()=>{n&&(s(!0),We.getFriends(n.uid).then(u=>{Array.isArray(u)?t(u):t([]),h(null)}).catch(u=>{h(u.message),t([])}).finally(()=>s(!1)))},[n]),A("div",{class:"p-4",children:[A("h2",{class:"text-2xl font-bold mb-4",children:"Peer Progress"}),i&&A("div",{children:"Loading friends..."}),c&&A("div",{class:"text-red-500",children:["Error: ",c]}),!i&&!c&&A("ul",{class:"space-y-4",children:e.map(u=>A(pf,{friend:u},u.id))})]})}function mf(){const[n,e]=K(null),[t,i]=K(!0),[s,c]=K("rooms");return It(()=>{const h=da(Wt,u=>{e(u),i(!1)});return()=>h()},[]),t?A("div",{children:"Loading..."}):A("main",{children:n?A("div",{children:[A(df,{activePage:s,setActivePage:c}),s==="rooms"&&A(uf,{user:n}),s==="friends"&&A(ff,{user:n}),s==="accountability"&&A(gf,{user:n})]}):A(rf,{})})}Cc(A(mf,{}),document.getElementById("app"));
