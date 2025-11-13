(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();var Fn,j,_o,qe,ls,mo,yo,vo,Bi,Si,bi,Bt={},wo=[],fc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Vn=Array.isArray;function Ee(i,e){for(var t in e)i[t]=e[t];return i}function $i(i){i&&i.parentNode&&i.parentNode.removeChild(i)}function pc(i,e,t){var r,s,c,l={};for(c in e)c=="key"?r=e[c]:c=="ref"?s=e[c]:l[c]=e[c];if(arguments.length>2&&(l.children=arguments.length>3?Fn.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(c in i.defaultProps)l[c]===void 0&&(l[c]=i.defaultProps[c]);return wn(i,l,r,s,null)}function wn(i,e,t,r,s){var c={type:i,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++_o,__i:-1,__u:0};return s==null&&j.vnode!=null&&j.vnode(c),c}function zt(i){return i.children}function In(i,e){this.props=i,this.context=e}function ft(i,e){if(e==null)return i.__?ft(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?ft(i):null}function Io(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return Io(i)}}function us(i){(!i.__d&&(i.__d=!0)&&qe.push(i)&&!Cn.__r++||ls!=j.debounceRendering)&&((ls=j.debounceRendering)||mo)(Cn)}function Cn(){for(var i,e,t,r,s,c,l,u=1;qe.length;)qe.length>u&&qe.sort(yo),i=qe.shift(),u=qe.length,i.__d&&(t=void 0,s=(r=(e=i).__v).__e,c=[],l=[],e.__P&&((t=Ee({},r)).__v=r.__v+1,j.vnode&&j.vnode(t),Hi(e.__P,t,r,e.__n,e.__P.namespaceURI,32&r.__u?[s]:null,c,s??ft(r),!!(32&r.__u),l),t.__v=r.__v,t.__.__k[t.__i]=t,Ao(c,t,l),t.__e!=s&&Io(t)));Cn.__r=0}function Eo(i,e,t,r,s,c,l,u,I,y,S){var E,A,k,C,O,R,D,N=r&&r.__k||wo,B=e.length;for(I=gc(t,e,N,I,B),E=0;E<B;E++)(k=t.__k[E])!=null&&(A=k.__i==-1?Bt:N[k.__i]||Bt,k.__i=E,R=Hi(i,k,A,s,c,l,u,I,y,S),C=k.__e,k.ref&&A.ref!=k.ref&&(A.ref&&Wi(A.ref,null,k),S.push(k.ref,k.__c||C,k)),O==null&&C!=null&&(O=C),(D=!!(4&k.__u))||A.__k===k.__k?I=To(k,I,i,D):typeof k.type=="function"&&R!==void 0?I=R:C&&(I=C.nextSibling),k.__u&=-7);return t.__e=O,I}function gc(i,e,t,r,s){var c,l,u,I,y,S=t.length,E=S,A=0;for(i.__k=new Array(s),c=0;c<s;c++)(l=e[c])!=null&&typeof l!="boolean"&&typeof l!="function"?(I=c+A,(l=i.__k[c]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?wn(null,l,null,null,null):Vn(l)?wn(zt,{children:l},null,null,null):l.constructor==null&&l.__b>0?wn(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=i,l.__b=i.__b+1,u=null,(y=l.__i=_c(l,t,I,E))!=-1&&(E--,(u=t[y])&&(u.__u|=2)),u==null||u.__v==null?(y==-1&&(s>S?A--:s<S&&A++),typeof l.type!="function"&&(l.__u|=4)):y!=I&&(y==I-1?A--:y==I+1?A++:(y>I?A--:A++,l.__u|=4))):i.__k[c]=null;if(E)for(c=0;c<S;c++)(u=t[c])!=null&&(2&u.__u)==0&&(u.__e==r&&(r=ft(u)),bo(u,u));return r}function To(i,e,t,r){var s,c;if(typeof i.type=="function"){for(s=i.__k,c=0;s&&c<s.length;c++)s[c]&&(s[c].__=i,e=To(s[c],e,t,r));return e}i.__e!=e&&(r&&(e&&i.type&&!e.parentNode&&(e=ft(i)),t.insertBefore(i.__e,e||null)),e=i.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function _c(i,e,t,r){var s,c,l,u=i.key,I=i.type,y=e[t],S=y!=null&&(2&y.__u)==0;if(y===null&&i.key==null||S&&u==y.key&&I==y.type)return t;if(r>(S?1:0)){for(s=t-1,c=t+1;s>=0||c<e.length;)if((y=e[l=s>=0?s--:c++])!=null&&(2&y.__u)==0&&u==y.key&&I==y.type)return l}return-1}function ds(i,e,t){e[0]=="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||fc.test(e)?t:t+"px"}function _n(i,e,t,r,s){var c,l;e:if(e=="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof r=="string"&&(i.style.cssText=r=""),r)for(e in r)t&&e in t||ds(i.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||ds(i.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")c=e!=(e=e.replace(vo,"$1")),l=e.toLowerCase(),e=l in i||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),i.l||(i.l={}),i.l[e+c]=t,t?r?t.u=r.u:(t.u=Bi,i.addEventListener(e,c?bi:Si,c)):i.removeEventListener(e,c?bi:Si,c);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?i.removeAttribute(e):i.setAttribute(e,e=="popover"&&t==1?"":t))}}function fs(i){return function(e){if(this.l){var t=this.l[e.type+i];if(e.t==null)e.t=Bi++;else if(e.t<t.u)return;return t(j.event?j.event(e):e)}}}function Hi(i,e,t,r,s,c,l,u,I,y){var S,E,A,k,C,O,R,D,N,B,G,me,J,m,d,p,_,g=e.type;if(e.constructor!=null)return null;128&t.__u&&(I=!!(32&t.__u),c=[u=e.__e=t.__e]),(S=j.__b)&&S(e);e:if(typeof g=="function")try{if(D=e.props,N="prototype"in g&&g.prototype.render,B=(S=g.contextType)&&r[S.__c],G=S?B?B.props.value:S.__:r,t.__c?R=(E=e.__c=t.__c).__=E.__E:(N?e.__c=E=new g(D,G):(e.__c=E=new In(D,G),E.constructor=g,E.render=yc),B&&B.sub(E),E.props=D,E.state||(E.state={}),E.context=G,E.__n=r,A=E.__d=!0,E.__h=[],E._sb=[]),N&&E.__s==null&&(E.__s=E.state),N&&g.getDerivedStateFromProps!=null&&(E.__s==E.state&&(E.__s=Ee({},E.__s)),Ee(E.__s,g.getDerivedStateFromProps(D,E.__s))),k=E.props,C=E.state,E.__v=e,A)N&&g.getDerivedStateFromProps==null&&E.componentWillMount!=null&&E.componentWillMount(),N&&E.componentDidMount!=null&&E.__h.push(E.componentDidMount);else{if(N&&g.getDerivedStateFromProps==null&&D!==k&&E.componentWillReceiveProps!=null&&E.componentWillReceiveProps(D,G),!E.__e&&E.shouldComponentUpdate!=null&&E.shouldComponentUpdate(D,E.__s,G)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(E.props=D,E.state=E.__s,E.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(w){w&&(w.__=e)}),me=0;me<E._sb.length;me++)E.__h.push(E._sb[me]);E._sb=[],E.__h.length&&l.push(E);break e}E.componentWillUpdate!=null&&E.componentWillUpdate(D,E.__s,G),N&&E.componentDidUpdate!=null&&E.__h.push(function(){E.componentDidUpdate(k,C,O)})}if(E.context=G,E.props=D,E.__P=i,E.__e=!1,J=j.__r,m=0,N){for(E.state=E.__s,E.__d=!1,J&&J(e),S=E.render(E.props,E.state,E.context),d=0;d<E._sb.length;d++)E.__h.push(E._sb[d]);E._sb=[]}else do E.__d=!1,J&&J(e),S=E.render(E.props,E.state,E.context),E.state=E.__s;while(E.__d&&++m<25);E.state=E.__s,E.getChildContext!=null&&(r=Ee(Ee({},r),E.getChildContext())),N&&!A&&E.getSnapshotBeforeUpdate!=null&&(O=E.getSnapshotBeforeUpdate(k,C)),p=S,S!=null&&S.type===zt&&S.key==null&&(p=So(S.props.children)),u=Eo(i,Vn(p)?p:[p],e,t,r,s,c,l,u,I,y),E.base=e.__e,e.__u&=-161,E.__h.length&&l.push(E),R&&(E.__E=E.__=null)}catch(w){if(e.__v=null,I||c!=null)if(w.then){for(e.__u|=I?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;c[c.indexOf(u)]=null,e.__e=u}else{for(_=c.length;_--;)$i(c[_]);ki(e)}else e.__e=t.__e,e.__k=t.__k,w.then||ki(e);j.__e(w,e,t)}else c==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):u=e.__e=mc(t.__e,e,t,r,s,c,l,I,y);return(S=j.diffed)&&S(e),128&e.__u?void 0:u}function ki(i){i&&i.__c&&(i.__c.__e=!0),i&&i.__k&&i.__k.forEach(ki)}function Ao(i,e,t){for(var r=0;r<t.length;r++)Wi(t[r],t[++r],t[++r]);j.__c&&j.__c(e,i),i.some(function(s){try{i=s.__h,s.__h=[],i.some(function(c){c.call(s)})}catch(c){j.__e(c,s.__v)}})}function So(i){return typeof i!="object"||i==null||i.__b&&i.__b>0?i:Vn(i)?i.map(So):Ee({},i)}function mc(i,e,t,r,s,c,l,u,I){var y,S,E,A,k,C,O,R=t.props,D=e.props,N=e.type;if(N=="svg"?s="http://www.w3.org/2000/svg":N=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),c!=null){for(y=0;y<c.length;y++)if((k=c[y])&&"setAttribute"in k==!!N&&(N?k.localName==N:k.nodeType==3)){i=k,c[y]=null;break}}if(i==null){if(N==null)return document.createTextNode(D);i=document.createElementNS(s,N,D.is&&D),u&&(j.__m&&j.__m(e,c),u=!1),c=null}if(N==null)R===D||u&&i.data==D||(i.data=D);else{if(c=c&&Fn.call(i.childNodes),R=t.props||Bt,!u&&c!=null)for(R={},y=0;y<i.attributes.length;y++)R[(k=i.attributes[y]).name]=k.value;for(y in R)if(k=R[y],y!="children"){if(y=="dangerouslySetInnerHTML")E=k;else if(!(y in D)){if(y=="value"&&"defaultValue"in D||y=="checked"&&"defaultChecked"in D)continue;_n(i,y,null,k,s)}}for(y in D)k=D[y],y=="children"?A=k:y=="dangerouslySetInnerHTML"?S=k:y=="value"?C=k:y=="checked"?O=k:u&&typeof k!="function"||R[y]===k||_n(i,y,k,R[y],s);if(S)u||E&&(S.__html==E.__html||S.__html==i.innerHTML)||(i.innerHTML=S.__html),e.__k=[];else if(E&&(i.innerHTML=""),Eo(e.type=="template"?i.content:i,Vn(A)?A:[A],e,t,r,N=="foreignObject"?"http://www.w3.org/1999/xhtml":s,c,l,c?c[0]:t.__k&&ft(t,0),u,I),c!=null)for(y=c.length;y--;)$i(c[y]);u||(y="value",N=="progress"&&C==null?i.removeAttribute("value"):C!=null&&(C!==i[y]||N=="progress"&&!C||N=="option"&&C!=R[y])&&_n(i,y,C,R[y],s),y="checked",O!=null&&O!=i[y]&&_n(i,y,O,R[y],s))}return i}function Wi(i,e,t){try{if(typeof i=="function"){var r=typeof i.__u=="function";r&&i.__u(),r&&e==null||(i.__u=i(e))}else i.current=e}catch(s){j.__e(s,t)}}function bo(i,e,t){var r,s;if(j.unmount&&j.unmount(i),(r=i.ref)&&(r.current&&r.current!=i.__e||Wi(r,null,e)),(r=i.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(c){j.__e(c,e)}r.base=r.__P=null}if(r=i.__k)for(s=0;s<r.length;s++)r[s]&&bo(r[s],e,t||typeof i.type!="function");t||$i(i.__e),i.__c=i.__=i.__e=void 0}function yc(i,e,t){return this.constructor(i,t)}function vc(i,e,t){var r,s,c,l;e==document&&(e=document.documentElement),j.__&&j.__(i,e),s=(r=!1)?null:e.__k,c=[],l=[],Hi(e,i=e.__k=pc(zt,null,[i]),s||Bt,Bt,e.namespaceURI,s?null:e.firstChild?Fn.call(e.childNodes):null,c,s?s.__e:e.firstChild,r,l),Ao(c,i,l)}Fn=wo.slice,j={__e:function(i,e,t,r){for(var s,c,l;e=e.__;)if((s=e.__c)&&!s.__)try{if((c=s.constructor)&&c.getDerivedStateFromError!=null&&(s.setState(c.getDerivedStateFromError(i)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(i,r||{}),l=s.__d),l)return s.__E=s}catch(u){i=u}throw i}},_o=0,In.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ee({},this.state),typeof i=="function"&&(i=i(Ee({},t),this.props)),i&&Ee(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),us(this))},In.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),us(this))},In.prototype.render=zt,qe=[],mo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,yo=function(i,e){return i.__v.__b-e.__v.__b},Cn.__r=0,vo=/(PointerCapture)$|Capture$/i,Bi=0,Si=fs(!1),bi=fs(!0);var wc=0;function ne(i,e,t,r,s,c){e||(e={});var l,u,I=e;if("ref"in I)for(u in I={},e)u=="ref"?l=e[u]:I[u]=e[u];var y={type:i,props:I,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--wc,__i:-1,__u:0,__source:s,__self:c};if(typeof i=="function"&&(l=i.defaultProps))for(u in l)I[u]===void 0&&(I[u]=l[u]);return j.vnode&&j.vnode(y),y}const Ic=()=>{};var ps={};/**
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
 */const ko=function(i){const e=[];let t=0;for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ec=function(i){const e=[];let t=0,r=0;for(;t<i.length;){const s=i[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const c=i[t++];e[r++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=i[t++],l=i[t++],u=i[t++],I=((s&7)<<18|(c&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(I>>10)),e[r++]=String.fromCharCode(56320+(I&1023))}else{const c=i[t++],l=i[t++];e[r++]=String.fromCharCode((s&15)<<12|(c&63)<<6|l&63)}}return e.join("")},Co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<i.length;s+=3){const c=i[s],l=s+1<i.length,u=l?i[s+1]:0,I=s+2<i.length,y=I?i[s+2]:0,S=c>>2,E=(c&3)<<4|u>>4;let A=(u&15)<<2|y>>6,k=y&63;I||(k=64,l||(A=64)),r.push(t[S],t[E],t[A],t[k])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ko(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Ec(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<i.length;){const c=t[i.charAt(s++)],u=s<i.length?t[i.charAt(s)]:0;++s;const y=s<i.length?t[i.charAt(s)]:64;++s;const E=s<i.length?t[i.charAt(s)]:64;if(++s,c==null||u==null||y==null||E==null)throw new Tc;const A=c<<2|u>>4;if(r.push(A),y!==64){const k=u<<4&240|y>>2;if(r.push(k),E!==64){const C=y<<6&192|E;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Tc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ac=function(i){const e=ko(i);return Co.encodeByteArray(e,!0)},Pn=function(i){return Ac(i).replace(/\./g,"")},Po=function(i){try{return Co.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bc=()=>Sc().__FIREBASE_DEFAULTS__,kc=()=>{if(typeof process>"u"||typeof ps>"u")return;const i=ps.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Cc=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Po(i[1]);return e&&JSON.parse(e)},zi=()=>{try{return Ic()||bc()||kc()||Cc()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ro=i=>zi()?.emulatorHosts?.[i],No=i=>{const e=Ro(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Do=()=>zi()?.config,Oo=i=>zi()?.[`_${i}`];/**
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
 */class Pc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function _t(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gi(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Rc(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Pn(JSON.stringify(t)),Pn(JSON.stringify(l)),""].join(".")}const Ut={};function Nc(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ut))Ut[e]?i.emulator.push(e):i.prod.push(e);return i}function Dc(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let gs=!1;function qi(i,e){if(typeof window>"u"||typeof document>"u"||!_t(window.location.host)||Ut[i]===e||Ut[i]||gs)return;Ut[i]=e;function t(A){return`__firebase__banner__${A}`}const r="__firebase__banner",c=Nc().prod.length>0;function l(){const A=document.getElementById(r);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function I(A,k){A.setAttribute("width","24"),A.setAttribute("id",k),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function y(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{gs=!0,l()},A}function S(A,k){A.setAttribute("id",k),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function E(){const A=Dc(r),k=t("text"),C=document.getElementById(k)||document.createElement("span"),O=t("learnmore"),R=document.getElementById(O)||document.createElement("a"),D=t("preprendIcon"),N=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const B=A.element;u(B),S(R,O);const G=y();I(N,D),B.append(N,C,R,G),document.body.appendChild(B)}c?(C.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function Lc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mc(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Uc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xc(){const i=re();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function Vc(){return new Promise((i,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),i(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const jc="FirebaseError";class Ce extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=jc,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gt.prototype.create)}}class Gt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,c=this.errors[e],l=c?Bc(c,r):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Ce(s,u,r)}}function Bc(i,e){return i.replace($c,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $c=/\{\$([^}]+)}/g;function Hc(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Qe(i,e){if(i===e)return!0;const t=Object.keys(i),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const c=i[s],l=e[s];if(_s(c)&&_s(l)){if(!Qe(c,l))return!1}else if(c!==l)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function _s(i){return i!==null&&typeof i=="object"}/**
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
 */function qt(i){const e=[];for(const[t,r]of Object.entries(i))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wc(i,e){const t=new zc(i,e);return t.subscribe.bind(t)}class zc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gc(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=gi),s.error===void 0&&(s.error=gi),s.complete===void 0&&(s.complete=gi);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gc(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function gi(){}/**
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
 */function $e(i){return i&&i._delegate?i._delegate:i}class je{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class qc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pc;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jc(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:s});r.resolve(c)}catch{}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[c,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(c);r===u&&l.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const c=this.instances.get(r);return c&&e(c,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kc(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kc(i){return i===Ge?void 0:i}function Jc(i){return i.instantiationMode==="EAGER"}/**
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
 */class Xc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(F||(F={}));const Yc={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Zc=F.INFO,Qc={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},eh=(i,e,...t)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),s=Qc[e];if(s)console[s](`[${r}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ki{constructor(e){this.name=e,this._logLevel=Zc,this._logHandler=eh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const th=(i,e)=>e.some(t=>i instanceof t);let ms,ys;function nh(){return ms||(ms=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ih(){return ys||(ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lo=new WeakMap,Ci=new WeakMap,Mo=new WeakMap,_i=new WeakMap,Ji=new WeakMap;function rh(i){const e=new Promise((t,r)=>{const s=()=>{i.removeEventListener("success",c),i.removeEventListener("error",l)},c=()=>{t(Fe(i.result)),s()},l=()=>{r(i.error),s()};i.addEventListener("success",c),i.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Lo.set(t,i)}).catch(()=>{}),Ji.set(e,i),e}function sh(i){if(Ci.has(i))return;const e=new Promise((t,r)=>{const s=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",l),i.removeEventListener("abort",l)},c=()=>{t(),s()},l=()=>{r(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",c),i.addEventListener("error",l),i.addEventListener("abort",l)});Ci.set(i,e)}let Pi={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Ci.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Mo.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fe(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function oh(i){Pi=i(Pi)}function ah(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=i.call(mi(this),e,...t);return Mo.set(r,e.sort?e.sort():[e]),Fe(r)}:ih().includes(i)?function(...e){return i.apply(mi(this),e),Fe(Lo.get(this))}:function(...e){return Fe(i.apply(mi(this),e))}}function ch(i){return typeof i=="function"?ah(i):(i instanceof IDBTransaction&&sh(i),th(i,nh())?new Proxy(i,Pi):i)}function Fe(i){if(i instanceof IDBRequest)return rh(i);if(_i.has(i))return _i.get(i);const e=ch(i);return e!==i&&(_i.set(i,e),Ji.set(e,i)),e}const mi=i=>Ji.get(i);function hh(i,e,{blocked:t,upgrade:r,blocking:s,terminated:c}={}){const l=indexedDB.open(i,e),u=Fe(l);return r&&l.addEventListener("upgradeneeded",I=>{r(Fe(l.result),I.oldVersion,I.newVersion,Fe(l.transaction),I)}),t&&l.addEventListener("blocked",I=>t(I.oldVersion,I.newVersion,I)),u.then(I=>{c&&I.addEventListener("close",()=>c()),s&&I.addEventListener("versionchange",y=>s(y.oldVersion,y.newVersion,y))}).catch(()=>{}),u}const lh=["get","getKey","getAll","getAllKeys","count"],uh=["put","add","delete","clear"],yi=new Map;function vs(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(yi.get(e))return yi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=uh.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lh.includes(t)))return;const c=async function(l,...u){const I=this.transaction(l,s?"readwrite":"readonly");let y=I.store;return r&&(y=y.index(u.shift())),(await Promise.all([y[t](...u),s&&I.done]))[0]};return yi.set(e,c),c}oh(i=>({...i,get:(e,t,r)=>vs(e,t)||i.get(e,t,r),has:(e,t)=>!!vs(e,t)||i.has(e,t)}));/**
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
 */class dh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fh(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fh(i){return i.getComponent()?.type==="VERSION"}const Ri="@firebase/app",ws="0.14.2";/**
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
 */const Se=new Ki("@firebase/app"),ph="@firebase/app-compat",gh="@firebase/analytics-compat",_h="@firebase/analytics",mh="@firebase/app-check-compat",yh="@firebase/app-check",vh="@firebase/auth",wh="@firebase/auth-compat",Ih="@firebase/database",Eh="@firebase/data-connect",Th="@firebase/database-compat",Ah="@firebase/functions",Sh="@firebase/functions-compat",bh="@firebase/installations",kh="@firebase/installations-compat",Ch="@firebase/messaging",Ph="@firebase/messaging-compat",Rh="@firebase/performance",Nh="@firebase/performance-compat",Dh="@firebase/remote-config",Oh="@firebase/remote-config-compat",Lh="@firebase/storage",Mh="@firebase/storage-compat",Uh="@firebase/firestore",xh="@firebase/ai",Fh="@firebase/firestore-compat",Vh="firebase",jh="12.2.0";/**
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
 */const Ni="[DEFAULT]",Bh={[Ri]:"fire-core",[ph]:"fire-core-compat",[_h]:"fire-analytics",[gh]:"fire-analytics-compat",[yh]:"fire-app-check",[mh]:"fire-app-check-compat",[vh]:"fire-auth",[wh]:"fire-auth-compat",[Ih]:"fire-rtdb",[Eh]:"fire-data-connect",[Th]:"fire-rtdb-compat",[Ah]:"fire-fn",[Sh]:"fire-fn-compat",[bh]:"fire-iid",[kh]:"fire-iid-compat",[Ch]:"fire-fcm",[Ph]:"fire-fcm-compat",[Rh]:"fire-perf",[Nh]:"fire-perf-compat",[Dh]:"fire-rc",[Oh]:"fire-rc-compat",[Lh]:"fire-gcs",[Mh]:"fire-gcs-compat",[Uh]:"fire-fst",[Fh]:"fire-fst-compat",[xh]:"fire-vertex","fire-js":"fire-js",[Vh]:"fire-js-all"};/**
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
 */const Rn=new Map,$h=new Map,Di=new Map;function Is(i,e){try{i.container.addComponent(e)}catch(t){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function et(i){const e=i.name;if(Di.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;Di.set(e,i);for(const t of Rn.values())Is(t,i);for(const t of $h.values())Is(t,i);return!0}function jn(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function ce(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Hh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ve=new Gt("app","Firebase",Hh);/**
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
 */class Wh{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const mt=jh;function Uo(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const r={name:Ni,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ve.create("bad-app-name",{appName:String(s)});if(t||(t=Do()),!t)throw Ve.create("no-options");const c=Rn.get(s);if(c){if(Qe(t,c.options)&&Qe(r,c.config))return c;throw Ve.create("duplicate-app",{appName:s})}const l=new Xc(s);for(const I of Di.values())l.addComponent(I);const u=new Wh(t,r,l);return Rn.set(s,u),u}function Xi(i=Ni){const e=Rn.get(i);if(!e&&i===Ni&&Do())return Uo();if(!e)throw Ve.create("no-app",{appName:i});return e}function pe(i,e,t){let r=Bh[i]??i;t&&(r+=`-${t}`);const s=r.match(/\s|\//),c=e.match(/\s|\//);if(s||c){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(l.join(" "));return}et(new je(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const zh="firebase-heartbeat-database",Gh=1,$t="firebase-heartbeat-store";let vi=null;function xo(){return vi||(vi=hh(zh,Gh,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore($t)}catch(t){console.warn(t)}}}}).catch(i=>{throw Ve.create("idb-open",{originalErrorMessage:i.message})})),vi}async function qh(i){try{const t=(await xo()).transaction($t),r=await t.objectStore($t).get(Fo(i));return await t.done,r}catch(e){if(e instanceof Ce)Se.warn(e.message);else{const t=Ve.create("idb-get",{originalErrorMessage:e?.message});Se.warn(t.message)}}}async function Es(i,e){try{const r=(await xo()).transaction($t,"readwrite");await r.objectStore($t).put(e,Fo(i)),await r.done}catch(t){if(t instanceof Ce)Se.warn(t.message);else{const r=Ve.create("idb-set",{originalErrorMessage:t?.message});Se.warn(r.message)}}}function Fo(i){return`${i.name}!${i.options.appId}`}/**
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
 */const Kh=1024,Jh=30;class Xh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zh(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ts();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Jh){const s=Qh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Se.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ts(),{heartbeatsToSend:t,unsentEntries:r}=Yh(this._heartbeatsCache.heartbeats),s=Pn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Se.warn(e),""}}}function Ts(){return new Date().toISOString().substring(0,10)}function Yh(i,e=Kh){const t=[];let r=i.slice();for(const s of i){const c=t.find(l=>l.agent===s.agent);if(c){if(c.dates.push(s.date),As(t)>e){c.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),As(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?Vc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Es(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Es(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function As(i){return Pn(JSON.stringify({version:2,heartbeats:i})).length}function Qh(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let r=1;r<i.length;r++)i[r].date<t&&(t=i[r].date,e=r);return e}/**
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
 */function el(i){et(new je("platform-logger",e=>new dh(e),"PRIVATE")),et(new je("heartbeat",e=>new Xh(e),"PRIVATE")),pe(Ri,ws,i),pe(Ri,ws,"esm2020"),pe("fire-js","")}el("");var tl="firebase",nl="12.2.1";/**
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
 */pe(tl,nl,"app");var Ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yi;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,d){function p(){}p.prototype=d.prototype,m.D=d.prototype,m.prototype=new p,m.prototype.constructor=m,m.C=function(_,g,w){for(var f=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)f[ye-2]=arguments[ye];return d.prototype[g].apply(_,f)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(m,d,p){p||(p=0);var _=Array(16);if(typeof d=="string")for(var g=0;16>g;++g)_[g]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(g=0;16>g;++g)_[g]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=m.g[0],p=m.g[1],g=m.g[2];var w=m.g[3],f=d+(w^p&(g^w))+_[0]+3614090360&4294967295;d=p+(f<<7&4294967295|f>>>25),f=w+(g^d&(p^g))+_[1]+3905402710&4294967295,w=d+(f<<12&4294967295|f>>>20),f=g+(p^w&(d^p))+_[2]+606105819&4294967295,g=w+(f<<17&4294967295|f>>>15),f=p+(d^g&(w^d))+_[3]+3250441966&4294967295,p=g+(f<<22&4294967295|f>>>10),f=d+(w^p&(g^w))+_[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=w+(g^d&(p^g))+_[5]+1200080426&4294967295,w=d+(f<<12&4294967295|f>>>20),f=g+(p^w&(d^p))+_[6]+2821735955&4294967295,g=w+(f<<17&4294967295|f>>>15),f=p+(d^g&(w^d))+_[7]+4249261313&4294967295,p=g+(f<<22&4294967295|f>>>10),f=d+(w^p&(g^w))+_[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=w+(g^d&(p^g))+_[9]+2336552879&4294967295,w=d+(f<<12&4294967295|f>>>20),f=g+(p^w&(d^p))+_[10]+4294925233&4294967295,g=w+(f<<17&4294967295|f>>>15),f=p+(d^g&(w^d))+_[11]+2304563134&4294967295,p=g+(f<<22&4294967295|f>>>10),f=d+(w^p&(g^w))+_[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=w+(g^d&(p^g))+_[13]+4254626195&4294967295,w=d+(f<<12&4294967295|f>>>20),f=g+(p^w&(d^p))+_[14]+2792965006&4294967295,g=w+(f<<17&4294967295|f>>>15),f=p+(d^g&(w^d))+_[15]+1236535329&4294967295,p=g+(f<<22&4294967295|f>>>10),f=d+(g^w&(p^g))+_[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=w+(p^g&(d^p))+_[6]+3225465664&4294967295,w=d+(f<<9&4294967295|f>>>23),f=g+(d^p&(w^d))+_[11]+643717713&4294967295,g=w+(f<<14&4294967295|f>>>18),f=p+(w^d&(g^w))+_[0]+3921069994&4294967295,p=g+(f<<20&4294967295|f>>>12),f=d+(g^w&(p^g))+_[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=w+(p^g&(d^p))+_[10]+38016083&4294967295,w=d+(f<<9&4294967295|f>>>23),f=g+(d^p&(w^d))+_[15]+3634488961&4294967295,g=w+(f<<14&4294967295|f>>>18),f=p+(w^d&(g^w))+_[4]+3889429448&4294967295,p=g+(f<<20&4294967295|f>>>12),f=d+(g^w&(p^g))+_[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=w+(p^g&(d^p))+_[14]+3275163606&4294967295,w=d+(f<<9&4294967295|f>>>23),f=g+(d^p&(w^d))+_[3]+4107603335&4294967295,g=w+(f<<14&4294967295|f>>>18),f=p+(w^d&(g^w))+_[8]+1163531501&4294967295,p=g+(f<<20&4294967295|f>>>12),f=d+(g^w&(p^g))+_[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=w+(p^g&(d^p))+_[2]+4243563512&4294967295,w=d+(f<<9&4294967295|f>>>23),f=g+(d^p&(w^d))+_[7]+1735328473&4294967295,g=w+(f<<14&4294967295|f>>>18),f=p+(w^d&(g^w))+_[12]+2368359562&4294967295,p=g+(f<<20&4294967295|f>>>12),f=d+(p^g^w)+_[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=w+(d^p^g)+_[8]+2272392833&4294967295,w=d+(f<<11&4294967295|f>>>21),f=g+(w^d^p)+_[11]+1839030562&4294967295,g=w+(f<<16&4294967295|f>>>16),f=p+(g^w^d)+_[14]+4259657740&4294967295,p=g+(f<<23&4294967295|f>>>9),f=d+(p^g^w)+_[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=w+(d^p^g)+_[4]+1272893353&4294967295,w=d+(f<<11&4294967295|f>>>21),f=g+(w^d^p)+_[7]+4139469664&4294967295,g=w+(f<<16&4294967295|f>>>16),f=p+(g^w^d)+_[10]+3200236656&4294967295,p=g+(f<<23&4294967295|f>>>9),f=d+(p^g^w)+_[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=w+(d^p^g)+_[0]+3936430074&4294967295,w=d+(f<<11&4294967295|f>>>21),f=g+(w^d^p)+_[3]+3572445317&4294967295,g=w+(f<<16&4294967295|f>>>16),f=p+(g^w^d)+_[6]+76029189&4294967295,p=g+(f<<23&4294967295|f>>>9),f=d+(p^g^w)+_[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=w+(d^p^g)+_[12]+3873151461&4294967295,w=d+(f<<11&4294967295|f>>>21),f=g+(w^d^p)+_[15]+530742520&4294967295,g=w+(f<<16&4294967295|f>>>16),f=p+(g^w^d)+_[2]+3299628645&4294967295,p=g+(f<<23&4294967295|f>>>9),f=d+(g^(p|~w))+_[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=w+(p^(d|~g))+_[7]+1126891415&4294967295,w=d+(f<<10&4294967295|f>>>22),f=g+(d^(w|~p))+_[14]+2878612391&4294967295,g=w+(f<<15&4294967295|f>>>17),f=p+(w^(g|~d))+_[5]+4237533241&4294967295,p=g+(f<<21&4294967295|f>>>11),f=d+(g^(p|~w))+_[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=w+(p^(d|~g))+_[3]+2399980690&4294967295,w=d+(f<<10&4294967295|f>>>22),f=g+(d^(w|~p))+_[10]+4293915773&4294967295,g=w+(f<<15&4294967295|f>>>17),f=p+(w^(g|~d))+_[1]+2240044497&4294967295,p=g+(f<<21&4294967295|f>>>11),f=d+(g^(p|~w))+_[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=w+(p^(d|~g))+_[15]+4264355552&4294967295,w=d+(f<<10&4294967295|f>>>22),f=g+(d^(w|~p))+_[6]+2734768916&4294967295,g=w+(f<<15&4294967295|f>>>17),f=p+(w^(g|~d))+_[13]+1309151649&4294967295,p=g+(f<<21&4294967295|f>>>11),f=d+(g^(p|~w))+_[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=w+(p^(d|~g))+_[11]+3174756917&4294967295,w=d+(f<<10&4294967295|f>>>22),f=g+(d^(w|~p))+_[2]+718787259&4294967295,g=w+(f<<15&4294967295|f>>>17),f=p+(w^(g|~d))+_[9]+3951481745&4294967295,m.g[0]=m.g[0]+d&4294967295,m.g[1]=m.g[1]+(g+(f<<21&4294967295|f>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+w&4294967295}r.prototype.u=function(m,d){d===void 0&&(d=m.length);for(var p=d-this.blockSize,_=this.B,g=this.h,w=0;w<d;){if(g==0)for(;w<=p;)s(this,m,w),w+=this.blockSize;if(typeof m=="string"){for(;w<d;)if(_[g++]=m.charCodeAt(w++),g==this.blockSize){s(this,_),g=0;break}}else for(;w<d;)if(_[g++]=m[w++],g==this.blockSize){s(this,_),g=0;break}}this.h=g,this.o+=d},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var d=1;d<m.length-8;++d)m[d]=0;var p=8*this.o;for(d=m.length-8;d<m.length;++d)m[d]=p&255,p/=256;for(this.u(m),m=Array(16),d=p=0;4>d;++d)for(var _=0;32>_;_+=8)m[p++]=this.g[d]>>>_&255;return m};function c(m,d){var p=u;return Object.prototype.hasOwnProperty.call(p,m)?p[m]:p[m]=d(m)}function l(m,d){this.h=d;for(var p=[],_=!0,g=m.length-1;0<=g;g--){var w=m[g]|0;_&&w==d||(p[g]=w,_=!1)}this.g=p}var u={};function I(m){return-128<=m&&128>m?c(m,function(d){return new l([d|0],0>d?-1:0)}):new l([m|0],0>m?-1:0)}function y(m){if(isNaN(m)||!isFinite(m))return E;if(0>m)return R(y(-m));for(var d=[],p=1,_=0;m>=p;_++)d[_]=m/p|0,p*=4294967296;return new l(d,0)}function S(m,d){if(m.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(m.charAt(0)=="-")return R(S(m.substring(1),d));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=y(Math.pow(d,8)),_=E,g=0;g<m.length;g+=8){var w=Math.min(8,m.length-g),f=parseInt(m.substring(g,g+w),d);8>w?(w=y(Math.pow(d,w)),_=_.j(w).add(y(f))):(_=_.j(p),_=_.add(y(f)))}return _}var E=I(0),A=I(1),k=I(16777216);i=l.prototype,i.m=function(){if(O(this))return-R(this).m();for(var m=0,d=1,p=0;p<this.g.length;p++){var _=this.i(p);m+=(0<=_?_:4294967296+_)*d,d*=4294967296}return m},i.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(C(this))return"0";if(O(this))return"-"+R(this).toString(m);for(var d=y(Math.pow(m,6)),p=this,_="";;){var g=G(p,d).g;p=D(p,g.j(d));var w=((0<p.g.length?p.g[0]:p.h)>>>0).toString(m);if(p=g,C(p))return w+_;for(;6>w.length;)w="0"+w;_=w+_}},i.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function C(m){if(m.h!=0)return!1;for(var d=0;d<m.g.length;d++)if(m.g[d]!=0)return!1;return!0}function O(m){return m.h==-1}i.l=function(m){return m=D(this,m),O(m)?-1:C(m)?0:1};function R(m){for(var d=m.g.length,p=[],_=0;_<d;_++)p[_]=~m.g[_];return new l(p,~m.h).add(A)}i.abs=function(){return O(this)?R(this):this},i.add=function(m){for(var d=Math.max(this.g.length,m.g.length),p=[],_=0,g=0;g<=d;g++){var w=_+(this.i(g)&65535)+(m.i(g)&65535),f=(w>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);_=f>>>16,w&=65535,f&=65535,p[g]=f<<16|w}return new l(p,p[p.length-1]&-2147483648?-1:0)};function D(m,d){return m.add(R(d))}i.j=function(m){if(C(this)||C(m))return E;if(O(this))return O(m)?R(this).j(R(m)):R(R(this).j(m));if(O(m))return R(this.j(R(m)));if(0>this.l(k)&&0>m.l(k))return y(this.m()*m.m());for(var d=this.g.length+m.g.length,p=[],_=0;_<2*d;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var g=0;g<m.g.length;g++){var w=this.i(_)>>>16,f=this.i(_)&65535,ye=m.i(g)>>>16,vt=m.i(g)&65535;p[2*_+2*g]+=f*vt,N(p,2*_+2*g),p[2*_+2*g+1]+=w*vt,N(p,2*_+2*g+1),p[2*_+2*g+1]+=f*ye,N(p,2*_+2*g+1),p[2*_+2*g+2]+=w*ye,N(p,2*_+2*g+2)}for(_=0;_<d;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=d;_<2*d;_++)p[_]=0;return new l(p,0)};function N(m,d){for(;(m[d]&65535)!=m[d];)m[d+1]+=m[d]>>>16,m[d]&=65535,d++}function B(m,d){this.g=m,this.h=d}function G(m,d){if(C(d))throw Error("division by zero");if(C(m))return new B(E,E);if(O(m))return d=G(R(m),d),new B(R(d.g),R(d.h));if(O(d))return d=G(m,R(d)),new B(R(d.g),d.h);if(30<m.g.length){if(O(m)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var p=A,_=d;0>=_.l(m);)p=me(p),_=me(_);var g=J(p,1),w=J(_,1);for(_=J(_,2),p=J(p,2);!C(_);){var f=w.add(_);0>=f.l(m)&&(g=g.add(p),w=f),_=J(_,1),p=J(p,1)}return d=D(m,g.j(d)),new B(g,d)}for(g=E;0<=m.l(d);){for(p=Math.max(1,Math.floor(m.m()/d.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),w=y(p),f=w.j(d);O(f)||0<f.l(m);)p-=_,w=y(p),f=w.j(d);C(w)&&(w=A),g=g.add(w),m=D(m,f)}return new B(g,m)}i.A=function(m){return G(this,m).h},i.and=function(m){for(var d=Math.max(this.g.length,m.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)&m.i(_);return new l(p,this.h&m.h)},i.or=function(m){for(var d=Math.max(this.g.length,m.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)|m.i(_);return new l(p,this.h|m.h)},i.xor=function(m){for(var d=Math.max(this.g.length,m.g.length),p=[],_=0;_<d;_++)p[_]=this.i(_)^m.i(_);return new l(p,this.h^m.h)};function me(m){for(var d=m.g.length+1,p=[],_=0;_<d;_++)p[_]=m.i(_)<<1|m.i(_-1)>>>31;return new l(p,m.h)}function J(m,d){var p=d>>5;d%=32;for(var _=m.g.length-p,g=[],w=0;w<_;w++)g[w]=0<d?m.i(w+p)>>>d|m.i(w+p+1)<<32-d:m.i(w+p);return new l(g,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=y,l.fromString=S,Yi=l}).apply(typeof Ss<"u"?Ss:typeof self<"u"?self:typeof window<"u"?window:{});var mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,a){return n==Array.prototype||n==Object.prototype||(n[o]=a.value),n};function t(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof mn=="object"&&mn];for(var o=0;o<n.length;++o){var a=n[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=t(this);function s(n,o){if(o)e:{var a=r;n=n.split(".");for(var h=0;h<n.length-1;h++){var v=n[h];if(!(v in a))break e;a=a[v]}n=n[n.length-1],h=a[n],o=o(h),o!=h&&o!=null&&e(a,n,{configurable:!0,writable:!0,value:o})}}function c(n,o){n instanceof String&&(n+="");var a=0,h=!1,v={next:function(){if(!h&&a<n.length){var T=a++;return{value:o(T,n[T]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(n){return n||function(){return c(this,function(o,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function I(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function y(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function S(n,o,a){return n.call.apply(n.bind,arguments)}function E(n,o,a){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),n.apply(o,v)}}return function(){return n.apply(o,arguments)}}function A(n,o,a){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:E,A.apply(null,arguments)}function k(n,o){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function C(n,o){function a(){}a.prototype=o.prototype,n.aa=o.prototype,n.prototype=new a,n.prototype.constructor=n,n.Qb=function(h,v,T){for(var b=Array(arguments.length-2),V=2;V<arguments.length;V++)b[V-2]=arguments[V];return o.prototype[v].apply(h,b)}}function O(n){const o=n.length;if(0<o){const a=Array(o);for(let h=0;h<o;h++)a[h]=n[h];return a}return[]}function R(n,o){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(I(h)){const v=n.length||0,T=h.length||0;n.length=v+T;for(let b=0;b<T;b++)n[v+b]=h[b]}else n.push(h)}}class D{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function N(n){return/^[\s\xa0]*$/.test(n)}function B(){var n=u.navigator;return n&&(n=n.userAgent)?n:""}function G(n){return G[" "](n),n}G[" "]=function(){};var me=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function J(n,o,a){for(const h in n)o.call(a,n[h],h,n)}function m(n,o){for(const a in n)o.call(void 0,n[a],a,n)}function d(n){const o={};for(const a in n)o[a]=n[a];return o}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(n,o){let a,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(a in h)n[a]=h[a];for(let T=0;T<p.length;T++)a=p[T],Object.prototype.hasOwnProperty.call(h,a)&&(n[a]=h[a])}}function g(n){var o=1;n=n.split(":");const a=[];for(;0<o&&n.length;)a.push(n.shift()),o--;return n.length&&a.push(n.join(":")),a}function w(n){u.setTimeout(()=>{throw n},0)}function f(){var n=Hn;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class ye{constructor(){this.h=this.g=null}add(o,a){const h=vt.get();h.set(o,a),this.h?this.h.next=h:this.g=h,this.h=h}}var vt=new D(()=>new Ra,n=>n.reset());class Ra{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let wt,It=!1,Hn=new ye,dr=()=>{const n=u.Promise.resolve(void 0);wt=()=>{n.then(Na)}};var Na=()=>{for(var n;n=f();){try{n.h.call(n.g)}catch(a){w(a)}var o=vt;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}It=!1};function Pe(){this.s=this.s,this.C=this.C}Pe.prototype.s=!1,Pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var Da=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};u.addEventListener("test",a,o),u.removeEventListener("test",a,o)}catch{}return n})();function Et(n,o){if(X.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var a=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(me){e:{try{G(o.nodeName);var v=!0;break e}catch{}v=!1}v||(o=null)}}else a=="mouseover"?o=n.fromElement:a=="mouseout"&&(o=n.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Oa[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Et.aa.h.call(this)}}C(Et,X);var Oa={2:"touch",3:"pen",4:"mouse"};Et.prototype.h=function(){Et.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Qt="closure_listenable_"+(1e6*Math.random()|0),La=0;function Ma(n,o,a,h,v){this.listener=n,this.proxy=null,this.src=o,this.type=a,this.capture=!!h,this.ha=v,this.key=++La,this.da=this.fa=!1}function en(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function tn(n){this.src=n,this.g={},this.h=0}tn.prototype.add=function(n,o,a,h,v){var T=n.toString();n=this.g[T],n||(n=this.g[T]=[],this.h++);var b=zn(n,o,h,v);return-1<b?(o=n[b],a||(o.fa=!1)):(o=new Ma(o,this.src,T,!!h,v),o.fa=a,n.push(o)),o};function Wn(n,o){var a=o.type;if(a in n.g){var h=n.g[a],v=Array.prototype.indexOf.call(h,o,void 0),T;(T=0<=v)&&Array.prototype.splice.call(h,v,1),T&&(en(o),n.g[a].length==0&&(delete n.g[a],n.h--))}}function zn(n,o,a,h){for(var v=0;v<n.length;++v){var T=n[v];if(!T.da&&T.listener==o&&T.capture==!!a&&T.ha==h)return v}return-1}var Gn="closure_lm_"+(1e6*Math.random()|0),qn={};function fr(n,o,a,h,v){if(Array.isArray(o)){for(var T=0;T<o.length;T++)fr(n,o[T],a,h,v);return null}return a=_r(a),n&&n[Qt]?n.K(o,a,y(h)?!!h.capture:!1,v):Ua(n,o,a,!1,h,v)}function Ua(n,o,a,h,v,T){if(!o)throw Error("Invalid event type");var b=y(v)?!!v.capture:!!v,V=Jn(n);if(V||(n[Gn]=V=new tn(n)),a=V.add(o,a,h,b,T),a.proxy)return a;if(h=xa(),a.proxy=h,h.src=n,h.listener=a,n.addEventListener)Da||(v=b),v===void 0&&(v=!1),n.addEventListener(o.toString(),h,v);else if(n.attachEvent)n.attachEvent(gr(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function xa(){function n(a){return o.call(n.src,n.listener,a)}const o=Fa;return n}function pr(n,o,a,h,v){if(Array.isArray(o))for(var T=0;T<o.length;T++)pr(n,o[T],a,h,v);else h=y(h)?!!h.capture:!!h,a=_r(a),n&&n[Qt]?(n=n.i,o=String(o).toString(),o in n.g&&(T=n.g[o],a=zn(T,a,h,v),-1<a&&(en(T[a]),Array.prototype.splice.call(T,a,1),T.length==0&&(delete n.g[o],n.h--)))):n&&(n=Jn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=zn(o,a,h,v)),(a=-1<n?o[n]:null)&&Kn(a))}function Kn(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Qt])Wn(o.i,n);else{var a=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(a,h,n.capture):o.detachEvent?o.detachEvent(gr(a),h):o.addListener&&o.removeListener&&o.removeListener(h),(a=Jn(o))?(Wn(a,n),a.h==0&&(a.src=null,o[Gn]=null)):en(n)}}}function gr(n){return n in qn?qn[n]:qn[n]="on"+n}function Fa(n,o){if(n.da)n=!0;else{o=new Et(o,this);var a=n.listener,h=n.ha||n.src;n.fa&&Kn(n),n=a.call(h,o)}return n}function Jn(n){return n=n[Gn],n instanceof tn?n:null}var Xn="__closure_events_fn_"+(1e9*Math.random()>>>0);function _r(n){return typeof n=="function"?n:(n[Xn]||(n[Xn]=function(o){return n.handleEvent(o)}),n[Xn])}function Y(){Pe.call(this),this.i=new tn(this),this.M=this,this.F=null}C(Y,Pe),Y.prototype[Qt]=!0,Y.prototype.removeEventListener=function(n,o,a,h){pr(this,n,o,a,h)};function ee(n,o){var a,h=n.F;if(h)for(a=[];h;h=h.F)a.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new X(o,n);else if(o instanceof X)o.target=o.target||n;else{var v=o;o=new X(h,n),_(o,v)}if(v=!0,a)for(var T=a.length-1;0<=T;T--){var b=o.g=a[T];v=nn(b,h,!0,o)&&v}if(b=o.g=n,v=nn(b,h,!0,o)&&v,v=nn(b,h,!1,o)&&v,a)for(T=0;T<a.length;T++)b=o.g=a[T],v=nn(b,h,!1,o)&&v}Y.prototype.N=function(){if(Y.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var a=n.g[o],h=0;h<a.length;h++)en(a[h]);delete n.g[o],n.h--}}this.F=null},Y.prototype.K=function(n,o,a,h){return this.i.add(String(n),o,!1,a,h)},Y.prototype.L=function(n,o,a,h){return this.i.add(String(n),o,!0,a,h)};function nn(n,o,a,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var v=!0,T=0;T<o.length;++T){var b=o[T];if(b&&!b.da&&b.capture==a){var V=b.listener,K=b.ha||b.src;b.fa&&Wn(n.i,b),v=V.call(K,h)!==!1&&v}}return v&&!h.defaultPrevented}function mr(n,o,a){if(typeof n=="function")a&&(n=A(n,a));else if(n&&typeof n.handleEvent=="function")n=A(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:u.setTimeout(n,o||0)}function yr(n){n.g=mr(()=>{n.g=null,n.i&&(n.i=!1,yr(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class Va extends Pe{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:yr(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(n){Pe.call(this),this.h=n,this.g={}}C(Tt,Pe);var vr=[];function wr(n){J(n.g,function(o,a){this.g.hasOwnProperty(a)&&Kn(o)},n),n.g={}}Tt.prototype.N=function(){Tt.aa.N.call(this),wr(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yn=u.JSON.stringify,ja=u.JSON.parse,Ba=class{stringify(n){return u.JSON.stringify(n,void 0)}parse(n){return u.JSON.parse(n,void 0)}};function Zn(){}Zn.prototype.h=null;function Ir(n){return n.h||(n.h=n.i())}function $a(){}var At={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qn(){X.call(this,"d")}C(Qn,X);function ei(){X.call(this,"c")}C(ei,X);var it={},Er=null;function ti(){return Er=Er||new Y}it.La="serverreachability";function Tr(n){X.call(this,it.La,n)}C(Tr,X);function St(n){const o=ti();ee(o,new Tr(o))}it.STAT_EVENT="statevent";function Ar(n,o){X.call(this,it.STAT_EVENT,n),this.stat=o}C(Ar,X);function te(n){const o=ti();ee(o,new Ar(o,n))}it.Ma="timingevent";function Sr(n,o){X.call(this,it.Ma,n),this.size=o}C(Sr,X);function bt(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){n()},o)}function kt(){this.g=!0}kt.prototype.xa=function(){this.g=!1};function Ha(n,o,a,h,v,T){n.info(function(){if(n.g)if(T)for(var b="",V=T.split("&"),K=0;K<V.length;K++){var x=V[K].split("=");if(1<x.length){var Z=x[0];x=x[1];var Q=Z.split("_");b=2<=Q.length&&Q[1]=="type"?b+(Z+"="+x+"&"):b+(Z+"=redacted&")}}else b=null;else b=T;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+o+`
`+a+`
`+b})}function Wa(n,o,a,h,v,T,b){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+o+`
`+a+`
`+T+" "+b})}function rt(n,o,a,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+Ga(n,a)+(h?" "+h:"")})}function za(n,o){n.info(function(){return"TIMEOUT: "+o})}kt.prototype.info=function(){};function Ga(n,o){if(!n.g)return o;if(!o)return null;try{var a=JSON.parse(o);if(a){for(n=0;n<a.length;n++)if(Array.isArray(a[n])){var h=a[n];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var T=v[0];if(T!="noop"&&T!="stop"&&T!="close")for(var b=1;b<v.length;b++)v[b]=""}}}}return Yn(a)}catch{return o}}var ni={NO_ERROR:0,TIMEOUT:8},qa={},ii;function rn(){}C(rn,Zn),rn.prototype.g=function(){return new XMLHttpRequest},rn.prototype.i=function(){return{}},ii=new rn;function Re(n,o,a,h){this.j=n,this.i=o,this.l=a,this.R=h||1,this.U=new Tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new br}function br(){this.i=null,this.g="",this.h=!1}var kr={},ri={};function si(n,o,a){n.L=1,n.v=cn(ve(o)),n.m=a,n.P=!0,Cr(n,null)}function Cr(n,o){n.F=Date.now(),sn(n),n.A=ve(n.v);var a=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),$r(a.i,"t",h),n.C=0,a=n.j.J,n.h=new br,n.g=os(n.j,a?o:null,!n.m),0<n.O&&(n.M=new Va(A(n.Y,n,n.g),n.O)),o=n.U,a=n.g,h=n.ca;var v="readystatechange";Array.isArray(v)||(v&&(vr[0]=v.toString()),v=vr);for(var T=0;T<v.length;T++){var b=fr(a,v[T],h||o.handleEvent,!1,o.h||o);if(!b)break;o.g[b.key]=b}o=n.H?d(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),St(),Ha(n.i,n.u,n.A,n.l,n.R,n.m)}Re.prototype.ca=function(n){n=n.target;const o=this.M;o&&we(n)==3?o.j():this.Y(n)},Re.prototype.Y=function(n){try{if(n==this.g)e:{const Q=we(this.g);var o=this.g.Ba();const at=this.g.Z();if(!(3>Q)&&(Q!=3||this.g&&(this.h.h||this.g.oa()||Jr(this.g)))){this.J||Q!=4||o==7||(o==8||0>=at?St(3):St(2)),oi(this);var a=this.g.Z();this.X=a;t:if(Pr(this)){var h=Jr(this.g);n="";var v=h.length,T=we(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){He(this),Ct(this);var b="";break t}this.h.i=new u.TextDecoder}for(o=0;o<v;o++)this.h.h=!0,n+=this.h.i.decode(h[o],{stream:!(T&&o==v-1)});h.length=0,this.h.g+=n,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=a==200,Wa(this.i,this.u,this.A,this.l,this.R,Q,a),this.o){if(this.T&&!this.K){t:{if(this.g){var V,K=this.g;if((V=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(V)){var x=V;break t}}x=null}if(a=x)rt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ai(this,a);else{this.o=!1,this.s=3,te(12),He(this),Ct(this);break e}}if(this.P){a=!0;let oe;for(;!this.J&&this.C<b.length;)if(oe=Ka(this,b),oe==ri){Q==4&&(this.s=4,te(14),a=!1),rt(this.i,this.l,null,"[Incomplete Response]");break}else if(oe==kr){this.s=4,te(15),rt(this.i,this.l,b,"[Invalid Chunk]"),a=!1;break}else rt(this.i,this.l,oe,null),ai(this,oe);if(Pr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||b.length!=0||this.h.h||(this.s=1,te(16),a=!1),this.o=this.o&&a,!a)rt(this.i,this.l,b,"[Invalid Chunked Response]"),He(this),Ct(this);else if(0<b.length&&!this.W){this.W=!0;var Z=this.j;Z.g==this&&Z.ba&&!Z.M&&(Z.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),fi(Z),Z.M=!0,te(11))}}else rt(this.i,this.l,b,null),ai(this,b);Q==4&&He(this),this.o&&!this.J&&(Q==4?ns(this.j,this):(this.o=!1,sn(this)))}else uc(this.g),a==400&&0<b.indexOf("Unknown SID")?(this.s=3,te(12)):(this.s=0,te(13)),He(this),Ct(this)}}}catch{}finally{}};function Pr(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function Ka(n,o){var a=n.C,h=o.indexOf(`
`,a);return h==-1?ri:(a=Number(o.substring(a,h)),isNaN(a)?kr:(h+=1,h+a>o.length?ri:(o=o.slice(h,h+a),n.C=h+a,o)))}Re.prototype.cancel=function(){this.J=!0,He(this)};function sn(n){n.S=Date.now()+n.I,Rr(n,n.I)}function Rr(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=bt(A(n.ba,n),o)}function oi(n){n.B&&(u.clearTimeout(n.B),n.B=null)}Re.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(za(this.i,this.A),this.L!=2&&(St(),te(17)),He(this),this.s=2,Ct(this)):Rr(this,this.S-n)};function Ct(n){n.j.G==0||n.J||ns(n.j,n)}function He(n){oi(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,wr(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function ai(n,o){try{var a=n.j;if(a.G!=0&&(a.g==n||ci(a.h,n))){if(!n.K&&ci(a.h,n)&&a.G==3){try{var h=a.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<n.F)pn(a),dn(a);else break e;di(a),te(18)}}else a.za=v[1],0<a.za-a.T&&37500>v[2]&&a.F&&a.v==0&&!a.C&&(a.C=bt(A(a.Za,a),6e3));if(1>=Or(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else ze(a,11)}else if((n.K||a.g==n)&&pn(a),!N(o))for(v=a.Da.g.parse(o),o=0;o<v.length;o++){let x=v[o];if(a.T=x[0],x=x[1],a.G==2)if(x[0]=="c"){a.K=x[1],a.ia=x[2];const Z=x[3];Z!=null&&(a.la=Z,a.j.info("VER="+a.la));const Q=x[4];Q!=null&&(a.Aa=Q,a.j.info("SVER="+a.Aa));const at=x[5];at!=null&&typeof at=="number"&&0<at&&(h=1.5*at,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const oe=n.g;if(oe){const gn=oe.g?oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gn){var T=h.h;T.g||gn.indexOf("spdy")==-1&&gn.indexOf("quic")==-1&&gn.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(hi(T,T.h),T.h=null))}if(h.D){const pi=oe.g?oe.g.getResponseHeader("X-HTTP-Session-Id"):null;pi&&(h.ya=pi,$(h.I,h.D,pi))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-n.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var b=n;if(h.qa=ss(h,h.J?h.ia:null,h.W),b.K){Lr(h.h,b);var V=b,K=h.L;K&&(V.I=K),V.B&&(oi(V),sn(V)),h.g=b}else es(h);0<a.i.length&&fn(a)}else x[0]!="stop"&&x[0]!="close"||ze(a,7);else a.G==3&&(x[0]=="stop"||x[0]=="close"?x[0]=="stop"?ze(a,7):ui(a):x[0]!="noop"&&a.l&&a.l.ta(x),a.v=0)}}St(4)}catch{}}var Ja=class{constructor(n,o){this.g=n,this.map=o}};function Nr(n){this.l=n||10,u.PerformanceNavigationTiming?(n=u.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dr(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Or(n){return n.h?1:n.g?n.g.size:0}function ci(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function hi(n,o){n.g?n.g.add(o):n.h=o}function Lr(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}Nr.prototype.cancel=function(){if(this.i=Mr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Mr(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const a of n.g.values())o=o.concat(a.D);return o}return O(n.i)}function Xa(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(I(n)){for(var o=[],a=n.length,h=0;h<a;h++)o.push(n[h]);return o}o=[],a=0;for(h in n)o[a++]=n[h];return o}function Ya(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(I(n)||typeof n=="string"){var o=[];n=n.length;for(var a=0;a<n;a++)o.push(a);return o}o=[],a=0;for(const h in n)o[a++]=h;return o}}}function Ur(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(I(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var a=Ya(n),h=Xa(n),v=h.length,T=0;T<v;T++)o.call(void 0,h[T],a&&a[T],n)}var xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Za(n,o){if(n){n=n.split("&");for(var a=0;a<n.length;a++){var h=n[a].indexOf("="),v=null;if(0<=h){var T=n[a].substring(0,h);v=n[a].substring(h+1)}else T=n[a];o(T,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function We(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof We){this.h=n.h,on(this,n.j),this.o=n.o,this.g=n.g,an(this,n.s),this.l=n.l;var o=n.i,a=new Nt;a.i=o.i,o.g&&(a.g=new Map(o.g),a.h=o.h),Fr(this,a),this.m=n.m}else n&&(o=String(n).match(xr))?(this.h=!1,on(this,o[1]||"",!0),this.o=Pt(o[2]||""),this.g=Pt(o[3]||"",!0),an(this,o[4]),this.l=Pt(o[5]||"",!0),Fr(this,o[6]||"",!0),this.m=Pt(o[7]||"")):(this.h=!1,this.i=new Nt(null,this.h))}We.prototype.toString=function(){var n=[],o=this.j;o&&n.push(Rt(o,Vr,!0),":");var a=this.g;return(a||o=="file")&&(n.push("//"),(o=this.o)&&n.push(Rt(o,Vr,!0),"@"),n.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&n.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(Rt(a,a.charAt(0)=="/"?tc:ec,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",Rt(a,ic)),n.join("")};function ve(n){return new We(n)}function on(n,o,a){n.j=a?Pt(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function an(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function Fr(n,o,a){o instanceof Nt?(n.i=o,rc(n.i,n.h)):(a||(o=Rt(o,nc)),n.i=new Nt(o,n.h))}function $(n,o,a){n.i.set(o,a)}function cn(n){return $(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Pt(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Rt(n,o,a){return typeof n=="string"?(n=encodeURI(n).replace(o,Qa),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Qa(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Vr=/[#\/\?@]/g,ec=/[#\?:]/g,tc=/[#\?]/g,nc=/[#\?@]/g,ic=/#/g;function Nt(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Ne(n){n.g||(n.g=new Map,n.h=0,n.i&&Za(n.i,function(o,a){n.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}i=Nt.prototype,i.add=function(n,o){Ne(this),this.i=null,n=st(this,n);var a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(o),this.h+=1,this};function jr(n,o){Ne(n),o=st(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function Br(n,o){return Ne(n),o=st(n,o),n.g.has(o)}i.forEach=function(n,o){Ne(this),this.g.forEach(function(a,h){a.forEach(function(v){n.call(o,v,h,this)},this)},this)},i.na=function(){Ne(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),a=[];for(let h=0;h<o.length;h++){const v=n[h];for(let T=0;T<v.length;T++)a.push(o[h])}return a},i.V=function(n){Ne(this);let o=[];if(typeof n=="string")Br(this,n)&&(o=o.concat(this.g.get(st(this,n))));else{n=Array.from(this.g.values());for(let a=0;a<n.length;a++)o=o.concat(n[a])}return o},i.set=function(n,o){return Ne(this),this.i=null,n=st(this,n),Br(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},i.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function $r(n,o,a){jr(n,o),0<a.length&&(n.i=null,n.g.set(st(n,o),O(a)),n.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var a=0;a<o.length;a++){var h=o[a];const T=encodeURIComponent(String(h)),b=this.V(h);for(h=0;h<b.length;h++){var v=T;b[h]!==""&&(v+="="+encodeURIComponent(String(b[h]))),n.push(v)}}return this.i=n.join("&")};function st(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function rc(n,o){o&&!n.j&&(Ne(n),n.i=null,n.g.forEach(function(a,h){var v=h.toLowerCase();h!=v&&(jr(this,h),$r(this,v,a))},n)),n.j=o}function sc(n,o){const a=new kt;if(u.Image){const h=new Image;h.onload=k(De,a,"TestLoadImage: loaded",!0,o,h),h.onerror=k(De,a,"TestLoadImage: error",!1,o,h),h.onabort=k(De,a,"TestLoadImage: abort",!1,o,h),h.ontimeout=k(De,a,"TestLoadImage: timeout",!1,o,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function oc(n,o){const a=new kt,h=new AbortController,v=setTimeout(()=>{h.abort(),De(a,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(T=>{clearTimeout(v),T.ok?De(a,"TestPingServer: ok",!0,o):De(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(v),De(a,"TestPingServer: error",!1,o)})}function De(n,o,a,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(a)}catch{}}function ac(){this.g=new Ba}function cc(n,o,a){const h=a||"";try{Ur(n,function(v,T){let b=v;y(v)&&(b=Yn(v)),o.push(h+T+"="+encodeURIComponent(b))})}catch(v){throw o.push(h+"type="+encodeURIComponent("_badmap")),v}}function hn(n){this.l=n.Ub||null,this.j=n.eb||!1}C(hn,Zn),hn.prototype.g=function(){return new ln(this.l,this.j)},hn.prototype.i=(function(n){return function(){return n}})({});function ln(n,o){Y.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ln,Y),i=ln.prototype,i.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,Ot(this)},i.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||u).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dt(this)),this.readyState=0},i.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ot(this)),this.g&&(this.readyState=3,Ot(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hr(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hr(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}i.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?Dt(this):Ot(this),this.readyState==3&&Hr(this)}},i.Ra=function(n){this.g&&(this.response=this.responseText=n,Dt(this))},i.Qa=function(n){this.g&&(this.response=n,Dt(this))},i.ga=function(){this.g&&Dt(this)};function Dt(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Ot(n)}i.setRequestHeader=function(n,o){this.u.append(n,o)},i.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=o.next();return n.join(`\r
`)};function Ot(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Wr(n){let o="";return J(n,function(a,h){o+=h,o+=":",o+=a,o+=`\r
`}),o}function li(n,o,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=Wr(a),typeof n=="string"?a!=null&&encodeURIComponent(String(a)):$(n,o,a))}function H(n){Y.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(H,Y);var hc=/^https?$/i,lc=["POST","PUT"];i=H.prototype,i.Ha=function(n){this.J=n},i.ea=function(n,o,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?Ir(this.o):Ir(ii),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(T){zr(this,T);return}if(n=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)a.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const T of h.keys())a.set(T,h.get(T));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(T=>T.toLowerCase()=="content-type"),v=u.FormData&&n instanceof u.FormData,!(0<=Array.prototype.indexOf.call(lc,o,void 0))||h||v||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,b]of a)this.g.setRequestHeader(T,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kr(this),this.u=!0,this.g.send(n),this.u=!1}catch(T){zr(this,T)}};function zr(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,Gr(n),un(n)}function Gr(n){n.A||(n.A=!0,ee(n,"complete"),ee(n,"error"))}i.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,ee(this,"complete"),ee(this,"abort"),un(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),H.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?qr(this):this.bb())},i.bb=function(){qr(this)};function qr(n){if(n.h&&typeof l<"u"&&(!n.v[1]||we(n)!=4||n.Z()!=2)){if(n.u&&we(n)==4)mr(n.Ea,0,n);else if(ee(n,"readystatechange"),we(n)==4){n.h=!1;try{const b=n.Z();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var h;if(h=b===0){var v=String(n.D).match(xr)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),h=!hc.test(v?v.toLowerCase():"")}a=h}if(a)ee(n,"complete"),ee(n,"success");else{n.m=6;try{var T=2<we(n)?n.g.statusText:""}catch{T=""}n.l=T+" ["+n.Z()+"]",Gr(n)}}finally{un(n)}}}}function un(n,o){if(n.g){Kr(n);const a=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||ee(n,"ready");try{a.onreadystatechange=h}catch{}}}function Kr(n){n.I&&(u.clearTimeout(n.I),n.I=null)}i.isActive=function(){return!!this.g};function we(n){return n.g?n.g.readyState:0}i.Z=function(){try{return 2<we(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),ja(o)}};function Jr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function uc(n){const o={};n=(n.g&&2<=we(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if(N(n[h]))continue;var a=g(n[h]);const v=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const T=o[v]||[];o[v]=T,T.push(a)}m(o,function(h){return h.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lt(n,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||o}function Xr(n){this.Aa=0,this.i=[],this.j=new kt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Lt("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Lt("baseRetryDelayMs",5e3,n),this.cb=Lt("retryDelaySeedMs",1e4,n),this.Wa=Lt("forwardChannelMaxRetries",2,n),this.wa=Lt("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new Nr(n&&n.concurrentRequestLimit),this.Da=new ac,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Xr.prototype,i.la=8,i.G=1,i.connect=function(n,o,a,h){te(0),this.W=n,this.H=o||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=ss(this,null,this.W),fn(this)};function ui(n){if(Yr(n),n.G==3){var o=n.U++,a=ve(n.I);if($(a,"SID",n.K),$(a,"RID",o),$(a,"TYPE","terminate"),Mt(n,a),o=new Re(n,n.j,o),o.L=2,o.v=cn(ve(a)),a=!1,u.navigator&&u.navigator.sendBeacon)try{a=u.navigator.sendBeacon(o.v.toString(),"")}catch{}!a&&u.Image&&(new Image().src=o.v,a=!0),a||(o.g=os(o.j,null),o.g.ea(o.v)),o.F=Date.now(),sn(o)}rs(n)}function dn(n){n.g&&(fi(n),n.g.cancel(),n.g=null)}function Yr(n){dn(n),n.u&&(u.clearTimeout(n.u),n.u=null),pn(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&u.clearTimeout(n.s),n.s=null)}function fn(n){if(!Dr(n.h)&&!n.s){n.s=!0;var o=n.Ga;wt||dr(),It||(wt(),It=!0),Hn.add(o,n),n.B=0}}function dc(n,o){return Or(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=bt(A(n.Ga,n,o),is(n,n.B)),n.B++,!0)}i.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const v=new Re(this,this.j,n);let T=this.o;if(this.S&&(T?(T=d(T),_(T,this.S)):T=this.S),this.m!==null||this.O||(v.H=T,T=null),this.P)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=Qr(this,v,o),a=ve(this.I),$(a,"RID",n),$(a,"CVER",22),this.D&&$(a,"X-HTTP-Session-Id",this.D),Mt(this,a),T&&(this.O?o="headers="+encodeURIComponent(String(Wr(T)))+"&"+o:this.m&&li(a,this.m,T)),hi(this.h,v),this.Ua&&$(a,"TYPE","init"),this.P?($(a,"$req",o),$(a,"SID","null"),v.T=!0,si(v,a,null)):si(v,a,o),this.G=2}}else this.G==3&&(n?Zr(this,n):this.i.length==0||Dr(this.h)||Zr(this))};function Zr(n,o){var a;o?a=o.l:a=n.U++;const h=ve(n.I);$(h,"SID",n.K),$(h,"RID",a),$(h,"AID",n.T),Mt(n,h),n.m&&n.o&&li(h,n.m,n.o),a=new Re(n,n.j,a,n.B+1),n.m===null&&(a.H=n.o),o&&(n.i=o.D.concat(n.i)),o=Qr(n,a,1e3),a.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),hi(n.h,a),si(a,h,o)}function Mt(n,o){n.H&&J(n.H,function(a,h){$(o,h,a)}),n.l&&Ur({},function(a,h){$(o,h,a)})}function Qr(n,o,a){a=Math.min(n.i.length,a);var h=n.l?A(n.l.Na,n.l,n):null;e:{var v=n.i;let T=-1;for(;;){const b=["count="+a];T==-1?0<a?(T=v[0].g,b.push("ofs="+T)):T=0:b.push("ofs="+T);let V=!0;for(let K=0;K<a;K++){let x=v[K].g;const Z=v[K].map;if(x-=T,0>x)T=Math.max(0,v[K].g-100),V=!1;else try{cc(Z,b,"req"+x+"_")}catch{h&&h(Z)}}if(V){h=b.join("&");break e}}}return n=n.i.splice(0,a),o.D=n,h}function es(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;wt||dr(),It||(wt(),It=!0),Hn.add(o,n),n.v=0}}function di(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=bt(A(n.Fa,n),is(n,n.v)),n.v++,!0)}i.Fa=function(){if(this.u=null,ts(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=bt(A(this.ab,this),n)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,te(10),dn(this),ts(this))};function fi(n){n.A!=null&&(u.clearTimeout(n.A),n.A=null)}function ts(n){n.g=new Re(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=ve(n.qa);$(o,"RID","rpc"),$(o,"SID",n.K),$(o,"AID",n.T),$(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&$(o,"TO",n.ja),$(o,"TYPE","xmlhttp"),Mt(n,o),n.m&&n.o&&li(o,n.m,n.o),n.L&&(n.g.I=n.L);var a=n.g;n=n.ia,a.L=1,a.v=cn(ve(o)),a.m=null,a.P=!0,Cr(a,n)}i.Za=function(){this.C!=null&&(this.C=null,dn(this),di(this),te(19))};function pn(n){n.C!=null&&(u.clearTimeout(n.C),n.C=null)}function ns(n,o){var a=null;if(n.g==o){pn(n),fi(n),n.g=null;var h=2}else if(ci(n.h,o))a=o.D,Lr(n.h,o),h=1;else return;if(n.G!=0){if(o.o)if(h==1){a=o.m?o.m.length:0,o=Date.now()-o.F;var v=n.B;h=ti(),ee(h,new Sr(h,a)),fn(n)}else es(n);else if(v=o.s,v==3||v==0&&0<o.X||!(h==1&&dc(n,o)||h==2&&di(n)))switch(a&&0<a.length&&(o=n.h,o.i=o.i.concat(a)),v){case 1:ze(n,5);break;case 4:ze(n,10);break;case 3:ze(n,6);break;default:ze(n,2)}}}function is(n,o){let a=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(a*=2),a*o}function ze(n,o){if(n.j.info("Error code "+o),o==2){var a=A(n.fb,n),h=n.Xa;const v=!h;h=new We(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||on(h,"https"),cn(h),v?sc(h.toString(),a):oc(h.toString(),a)}else te(2);n.G=0,n.l&&n.l.sa(o),rs(n),Yr(n)}i.fb=function(n){n?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function rs(n){if(n.G=0,n.ka=[],n.l){const o=Mr(n.h);(o.length!=0||n.i.length!=0)&&(R(n.ka,o),R(n.ka,n.i),n.h.i.length=0,O(n.i),n.i.length=0),n.l.ra()}}function ss(n,o,a){var h=a instanceof We?ve(a):new We(a);if(h.g!="")o&&(h.g=o+"."+h.g),an(h,h.s);else{var v=u.location;h=v.protocol,o=o?o+"."+v.hostname:v.hostname,v=+v.port;var T=new We(null);h&&on(T,h),o&&(T.g=o),v&&an(T,v),a&&(T.l=a),h=T}return a=n.D,o=n.ya,a&&o&&$(h,a,o),$(h,"VER",n.la),Mt(n,h),h}function os(n,o,a){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new H(new hn({eb:a})):new H(n.pa),o.Ha(n.J),o}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function as(){}i=as.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function se(n,o){Y.call(this),this.g=new Xr(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!N(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!N(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new ot(this)}C(se,Y),se.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){ui(this.g)},se.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.u&&(a={},a.__data__=Yn(n),n=a);o.i.push(new Ja(o.Ya++,n)),o.G==3&&fn(o)},se.prototype.N=function(){this.g.l=null,delete this.j,ui(this.g),delete this.g,se.aa.N.call(this)};function cs(n){Qn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){e:{for(const a in o){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}C(cs,Qn);function hs(){ei.call(this),this.status=1}C(hs,ei);function ot(n){this.g=n}C(ot,as),ot.prototype.ua=function(){ee(this.g,"a")},ot.prototype.ta=function(n){ee(this.g,new cs(n))},ot.prototype.sa=function(n){ee(this.g,new hs)},ot.prototype.ra=function(){ee(this.g,"b")},se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,ni.NO_ERROR=0,ni.TIMEOUT=8,ni.HTTP_ERROR=6,qa.COMPLETE="complete",$a.EventType=At,At.OPEN="a",At.CLOSE="b",At.ERROR="c",At.MESSAGE="d",Y.prototype.listen=Y.prototype.K,H.prototype.listenOnce=H.prototype.L,H.prototype.getLastError=H.prototype.Ka,H.prototype.getLastErrorCode=H.prototype.Ba,H.prototype.getStatus=H.prototype.Z,H.prototype.getResponseJson=H.prototype.Oa,H.prototype.getResponseText=H.prototype.oa,H.prototype.send=H.prototype.ea,H.prototype.setWithCredentials=H.prototype.Ha}).apply(typeof mn<"u"?mn:typeof self<"u"?self:typeof window<"u"?window:{});const bs="@firebase/firestore",ks="4.9.1";/**
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
 */let Kt="12.2.0";/**
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
 */const pt=new Ki("@firebase/firestore");function he(i,...e){if(pt.logLevel<=F.DEBUG){const t=e.map(Zi);pt.debug(`Firestore (${Kt}): ${i}`,...t)}}function Vo(i,...e){if(pt.logLevel<=F.ERROR){const t=e.map(Zi);pt.error(`Firestore (${Kt}): ${i}`,...t)}}function il(i,...e){if(pt.logLevel<=F.WARN){const t=e.map(Zi);pt.warn(`Firestore (${Kt}): ${i}`,...t)}}function Zi(i){if(typeof i=="string")return i;try{/**
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
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function Ht(i,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,jo(i,r,t)}function jo(i,e,t){let r=`FIRESTORE (${Kt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Vo(r),new Error(r)}function xt(i,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,i||jo(e,s,r)}/**
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
 */const M={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class U extends Ce{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ft{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Bo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ie.UNAUTHENTICATED)))}shutdown(){}}class sl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ol{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){xt(this.o===void 0,42304);let r=this.i;const s=I=>this.i!==r?(r=this.i,t(I)):Promise.resolve();let c=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ft,e.enqueueRetryable((()=>s(this.currentUser)))};const l=()=>{const I=c;e.enqueueRetryable((async()=>{await I.promise,await s(this.currentUser)}))},u=I=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((I=>u(I))),setTimeout((()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?u(I):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ft)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xt(typeof r.accessToken=="string",31837,{l:r}),new Bo(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xt(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class al{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cl{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new al(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Cs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hl{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ce(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){xt(this.o===void 0,3512);const r=c=>{c.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,he("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>r(c)))};const s=c=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>s(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?s(c):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Cs(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(xt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Cs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ll(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<i;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ul{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ll(40);for(let c=0;c<s.length;++c)r.length<20&&s[c]<t&&(r+=e.charAt(s[c]%62))}return r}}function Be(i,e){return i<e?-1:i>e?1:0}function dl(i,e){const t=Math.min(i.length,e.length);for(let r=0;r<t;r++){const s=i.charAt(r),c=e.charAt(r);if(s!==c)return wi(s)===wi(c)?Be(s,c):wi(s)?1:-1}return Be(i.length,e.length)}const fl=55296,pl=57343;function wi(i){const e=i.charCodeAt(0);return e>=fl&&e<=pl}/**
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
 */const Ps="__name__";class ue{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ht(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ht(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ue.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ue?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const c=ue.compareSegments(e.get(s),t.get(s));if(c!==0)return c}return Be(e.length,t.length)}static compareSegments(e,t){const r=ue.isNumericId(e),s=ue.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ue.extractNumericId(e).compare(ue.extractNumericId(t)):dl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yi.fromString(e.substring(4,e.length-2))}}class ae extends ue{construct(e,t,r){return new ae(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ae(t)}static emptyPath(){return new ae([])}}const gl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends ue{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return gl.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ps}static keyField(){return new Ke([Ps])}static fromServerFormat(e){const t=[];let r="",s=0;const c=()=>{if(r.length===0)throw new U(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new U(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const I=e[s+1];if(I!=="\\"&&I!=="."&&I!=="`")throw new U(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=I,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(r+=u,s++):(c(),s++)}if(c(),l)throw new U(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
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
 */class Je{constructor(e){this.path=e}static fromPath(e){return new Je(ae.fromString(e))}static fromName(e){return new Je(ae.fromString(e).popFirst(5))}static empty(){return new Je(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Je(new ae(e.slice()))}}function _l(i,e,t,r){if(e===!0&&r===!0)throw new U(M.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function ml(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function yl(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ht(12329,{type:typeof i})}function vl(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new U(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yl(i);throw new U(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function z(i,e){const t={typeString:i};return e&&(t.value=e),t}function Jt(i,e){if(!ml(i))throw new U(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in i)){t=`JSON missing required field: '${r}'`;break}const l=i[r];if(s&&typeof l!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(c!==void 0&&l!==c.value){t=`Expected '${r}' field to equal '${c.value}'`;break}}if(t)throw new U(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const Rs=-62135596800,Ns=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ns);return new de(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rs)throw new U(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ns}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Jt(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rs;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:z("string",de._jsonSchemaVersion),seconds:z("number"),nanoseconds:z("number")};function wl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Il extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Il("Invalid base64 string: "+c):c}})(e);return new tt(t)}static fromUint8Array(e){const t=(function(s){let c="";for(let l=0;l<s.length;++l)c+=String.fromCharCode(s[l]);return c})(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Oi="(default)";class Nn{constructor(e,t){this.projectId=e,this.database=t||Oi}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database===Oi}isEqual(e){return e instanceof Nn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class El{constructor(e,t=null,r=[],s=[],c=null,l="F",u=null,I=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=c,this.limitType=l,this.startAt=u,this.endAt=I,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Tl(i){return new El(i)}/**
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
 */var Ds,L;(L=Ds||(Ds={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Yi([4294967295,4294967295],0);/**
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
 */const Al=41943040;/**
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
 */const Sl=1048576;function Ii(){return typeof document<"u"?document:null}/**
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
 */class bl{constructor(e,t,r=1e3,s=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&he("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Qi{constructor(e,t,r,s,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=c,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,c){const l=Date.now()+r,u=new Qi(e,t,l,s,c);return u.start(r),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Os,Ls;(Ls=Os||(Os={})).Ma="default",Ls.Cache="cache";/**
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
 */function kl(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Ms=new Map;/**
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
 */const $o="firestore.googleapis.com",Us=!0;class xs{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$o,this.ssl=Us}else this.host=e.host,this.ssl=e.ssl??Us;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Al;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Sl)throw new U(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_l("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kl(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ho{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xs({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xs(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new rl;switch(r.type){case"firstParty":return new cl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ms.get(t);r&&(he("ComponentProvider","Removing Datastore"),Ms.delete(t),r.terminate())})(this),Promise.resolve()}}function Wo(i,e,t,r={}){i=vl(i,Ho);const s=_t(e),c=i._getSettings(),l={...c,emulatorOptions:i._getEmulatorOptions()},u=`${e}:${t}`;s&&(Gi(`https://${u}`),qi("Firestore",!0)),c.host!==$o&&c.host!==u&&il("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const I={...c,host:u,ssl:s,emulatorOptions:r};if(!Qe(I,l)&&(i._setSettings(I),r.mockUserToken)){let y,S;if(typeof r.mockUserToken=="string")y=r.mockUserToken,S=ie.MOCK_USER;else{y=Rc(r.mockUserToken,i._app?.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new U(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new ie(E)}i._authCredentials=new sl(new Bo(y,S))}}/**
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
 */class er{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new er(this.firestore,e,this._query)}}class fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Jt(t,fe._jsonSchema))return new fe(e,r||null,new Je(ae.fromString(t.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:z("string",fe._jsonSchemaVersion),referencePath:z("string")};class tr extends er{constructor(e,t,r){super(e,t,Tl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new Je(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}/**
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
 */const Fs="AsyncQueue";class Vs{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bl(this,"async_queue_retry"),this._c=()=>{const r=Ii();r&&he(Fs,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ii();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ii();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ft;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!wl(e))throw e;he(Fs,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Vo("INTERNAL UNHANDLED ERROR: ",js(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Qi.createAndSchedule(this,e,t,r,(c=>this.hc(c)));return this.tc.push(s),s}uc(){this.nc&&Ht(47125,{Pc:js(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function js(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Cl extends Ho{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Vs,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vs(e),this._firestoreClient=void 0,await e}}}function Pl(i,e){const t=typeof i=="object"?i:Xi(),r=typeof i=="string"?i:Oi,s=jn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const c=No("firestore");c&&Wo(s,...c)}return s}/**
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
 */class Ie{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ie(tt.fromBase64String(e))}catch(t){throw new U(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ie(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ie._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Jt(e,Ie._jsonSchema))return Ie.fromBase64String(e.bytes)}}Ie._jsonSchemaVersion="firestore/bytes/1.0",Ie._jsonSchema={type:z("string",Ie._jsonSchemaVersion),bytes:z("string")};/**
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
 */class zo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xe._jsonSchemaVersion}}static fromJSON(e){if(Jt(e,Xe._jsonSchema))return new Xe(e.latitude,e.longitude)}}Xe._jsonSchemaVersion="firestore/geoPoint/1.0",Xe._jsonSchema={type:z("string",Xe._jsonSchemaVersion),latitude:z("number"),longitude:z("number")};/**
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
 */class Ye{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==s[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Jt(e,Ye._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ye(e.vectorValues);throw new U(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:z("string",Ye._jsonSchemaVersion),vectorValues:z("object")};const Rl=new RegExp("[~\\*/\\[\\]]");function Nl(i,e,t){if(e.search(Rl)>=0)throw Bs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new zo(...e.split("."))._internalPath}catch{throw Bs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Bs(i,e,t,r,s){let c=`Function ${e}() called with invalid data`;c+=". ";let l="";return new U(M.INVALID_ARGUMENT,c+i+l)}/**
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
 */class Go{constructor(e,t,r,s,c){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dl extends Go{data(){return super.data()}}function qo(i,e){return typeof e=="string"?Nl(i,e):e instanceof zo?e._internalPath:e._delegate._internalPath}class yn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ht extends Go{constructor(e,t,r,s,c,l){super(e,t,r,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new En(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(qo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ht._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ht._jsonSchemaVersion="firestore/documentSnapshot/1.0",ht._jsonSchema={type:z("string",ht._jsonSchemaVersion),bundleSource:z("string","DocumentSnapshot"),bundleName:z("string"),bundle:z("string")};class En extends ht{data(e={}){return super.data(e)}}class Vt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new yn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new En(this._firestore,this._userDataWriter,r.key,r,new yn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,c){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map((u=>{const I=new En(s._firestore,s._userDataWriter,u.doc.key,u.doc,new yn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:I,oldIndex:-1,newIndex:l++}}))}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>c||u.type!==3)).map((u=>{const I=new En(s._firestore,s._userDataWriter,u.doc.key,u.doc,new yn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let y=-1,S=-1;return u.type!==0&&(y=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),S=l.indexOf(u.doc.key)),{type:Ol(u.type),doc:I,oldIndex:y,newIndex:S}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ul.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),s.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ol(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ht(61501,{type:i})}}Vt._jsonSchemaVersion="firestore/querySnapshot/1.0",Vt._jsonSchema={type:z("string",Vt._jsonSchemaVersion),bundleSource:z("string","QuerySnapshot"),bundleName:z("string"),bundle:z("string")};(function(e,t=!0){(function(s){Kt=s})(mt),et(new je("firestore",((r,{instanceIdentifier:s,options:c})=>{const l=r.getProvider("app").getImmediate(),u=new Cl(new ol(r.getProvider("auth-internal")),new hl(l,r.getProvider("app-check-internal")),(function(y,S){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new U(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(y.options.projectId,S)})(l,s),l);return c={useFetchStreams:t,...c},u._setSettings(c),u}),"PUBLIC").setMultipleInstances(!0)),pe(bs,ks,e),pe(bs,ks,"esm2020")})();/**
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
 */const Ko="functions";/**
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
 */class Ll{constructor(e,t,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,ce(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(c=>this.auth=c,()=>{}),this.messaging||r.get().then(c=>this.messaging=c,()=>{}),this.appCheck||s?.get().then(c=>this.appCheck=c,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
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
 */const Li="us-central1";class Ml{constructor(e,t,r,s,c=Li,l=(...u)=>fetch(...u)){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new Ll(e,t,r,s),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(c);this.customDomain=u.origin+(u.pathname==="/"?"":u.pathname),this.region=Li}catch{this.customDomain=null,this.region=c}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Ul(i,e,t){const r=_t(e);i.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&(Gi(i.emulatorOrigin+"/backends"),qi("Functions",!0))}const $s="@firebase/functions",Hs="0.13.1";/**
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
 */const xl="auth-internal",Fl="app-check-internal",Vl="messaging-internal";function jl(i){const e=(t,{instanceIdentifier:r})=>{const s=t.getProvider("app").getImmediate(),c=t.getProvider(xl),l=t.getProvider(Vl),u=t.getProvider(Fl);return new Ml(s,c,l,u,r)};et(new je(Ko,e,"PUBLIC").setMultipleInstances(!0)),pe($s,Hs,i),pe($s,Hs,"esm2020")}/**
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
 */function Bl(i=Xi(),e=Li){const r=jn($e(i),Ko).getImmediate({identifier:e}),s=No("functions");return s&&Jo(r,...s),r}function Jo(i,e,t){Ul($e(i),e,t)}jl();function Xo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $l=Xo,Yo=new Gt("auth","Firebase",Xo());/**
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
 */const Dn=new Ki("@firebase/auth");function Hl(i,...e){Dn.logLevel<=F.WARN&&Dn.warn(`Auth (${mt}): ${i}`,...e)}function Tn(i,...e){Dn.logLevel<=F.ERROR&&Dn.error(`Auth (${mt}): ${i}`,...e)}/**
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
 */function be(i,...e){throw nr(i,...e)}function ge(i,...e){return nr(i,...e)}function Zo(i,e,t){const r={...$l(),[e]:t};return new Gt("auth","Firebase",r).create(e,{appName:i.name})}function Ze(i){return Zo(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nr(i,...e){if(typeof i!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(t,...r)}return Yo.create(i,...e)}function P(i,e,...t){if(!i)throw nr(e,...t)}function Te(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Tn(e),new Error(e)}function ke(i,e){i||Te(e)}/**
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
 */function Mi(){return typeof self<"u"&&self.location?.href||""}function Wl(){return Ws()==="http:"||Ws()==="https:"}function Ws(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function zl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wl()||Mc()||"connection"in navigator)?navigator.onLine:!0}function Gl(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Xt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ke(t>e,"Short delay should be less than long delay!"),this.isMobile=Oc()||Uc()}get(){return zl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ir(i,e){ke(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qo{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ql={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kl=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jl=new Xt(3e4,6e4);function rr(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function yt(i,e,t,r,s={}){return ea(i,s,async()=>{let c={},l={};r&&(e==="GET"?l=r:c={body:JSON.stringify(r)});const u=qt({key:i.config.apiKey,...l}).slice(1),I=await i._getAdditionalHeaders();I["Content-Type"]="application/json",i.languageCode&&(I["X-Firebase-Locale"]=i.languageCode);const y={method:e,headers:I,...c};return Lc()||(y.referrerPolicy="no-referrer"),i.emulatorConfig&&_t(i.emulatorConfig.host)&&(y.credentials="include"),Qo.fetch()(await ta(i,i.config.apiHost,t,u),y)})}async function ea(i,e,t){i._canInitEmulator=!1;const r={...ql,...e};try{const s=new Yl(i),c=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw vn(i,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const u=c.ok?l.errorMessage:l.error.message,[I,y]=u.split(" : ");if(I==="FEDERATED_USER_ID_ALREADY_LINKED")throw vn(i,"credential-already-in-use",l);if(I==="EMAIL_EXISTS")throw vn(i,"email-already-in-use",l);if(I==="USER_DISABLED")throw vn(i,"user-disabled",l);const S=r[I]||I.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Zo(i,S,y);be(i,S)}}catch(s){if(s instanceof Ce)throw s;be(i,"network-request-failed",{message:String(s)})}}async function Xl(i,e,t,r,s={}){const c=await yt(i,e,t,r,s);return"mfaPendingCredential"in c&&be(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function ta(i,e,t,r){const s=`${e}${t}?${r}`,c=i,l=c.config.emulator?ir(i.config,s):`${i.config.apiScheme}://${s}`;return Kl.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}class Yl{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ge(this.auth,"network-request-failed")),Jl.get())})}}function vn(i,e,t){const r={appName:i.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ge(i,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Zl(i,e){return yt(i,"POST","/v1/accounts:delete",e)}async function On(i,e){return yt(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function jt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ql(i,e=!1){const t=$e(i),r=await t.getIdToken(e),s=sr(r);P(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,l=c?.sign_in_provider;return{claims:s,token:r,authTime:jt(Ei(s.auth_time)),issuedAtTime:jt(Ei(s.iat)),expirationTime:jt(Ei(s.exp)),signInProvider:l||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Ei(i){return Number(i)*1e3}function sr(i){const[e,t,r]=i.split(".");if(e===void 0||t===void 0||r===void 0)return Tn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Po(t);return s?JSON.parse(s):(Tn("Failed to decode base64 JWT payload"),null)}catch(s){return Tn("Caught error parsing JWT payload as JSON",s?.toString()),null}}function zs(i){const e=sr(i);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wt(i,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ce&&eu(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function eu({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class tu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ui{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jt(this.lastLoginAt),this.creationTime=jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ln(i){const e=i.auth,t=await i.getIdToken(),r=await Wt(i,On(e,{idToken:t}));P(r?.users.length,e,"internal-error");const s=r.users[0];i._notifyReloadListener(s);const c=s.providerUserInfo?.length?na(s.providerUserInfo):[],l=iu(i.providerData,c),u=i.isAnonymous,I=!(i.email&&s.passwordHash)&&!l?.length,y=u?I:!1,S={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ui(s.createdAt,s.lastLoginAt),isAnonymous:y};Object.assign(i,S)}async function nu(i){const e=$e(i);await Ln(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iu(i,e){return[...i.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function na(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ru(i,e){const t=await ea(i,{},async()=>{const r=qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=i.config,l=await ta(i,s,"/v1/token",`key=${c}`),u=await i._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const I={method:"POST",headers:u,body:r};return i.emulatorConfig&&_t(i.emulatorConfig.host)&&(I.credentials="include"),Qo.fetch()(l,I)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function su(i,e){return yt(i,"POST","/v2/accounts:revokeToken",rr(i,e))}/**
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
 */class lt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){P(e.length!==0,"internal-error");const t=zs(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:c}=await ru(e,t);this.updateTokensAndExpiration(r,s,Number(c))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:c}=t,l=new lt;return r&&(P(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),s&&(P(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),c&&(P(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lt,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
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
 */function Oe(i,e){P(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class le{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new tu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ui(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ql(this,e)}reload(){return nu(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new le({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ln(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ce(this.auth.app))return Promise.reject(Ze(this.auth));const e=await this.getIdToken();return await Wt(this,Zl(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,c=t.phoneNumber??void 0,l=t.photoURL??void 0,u=t.tenantId??void 0,I=t._redirectEventId??void 0,y=t.createdAt??void 0,S=t.lastLoginAt??void 0,{uid:E,emailVerified:A,isAnonymous:k,providerData:C,stsTokenManager:O}=t;P(E&&O,e,"internal-error");const R=lt.fromJSON(this.name,O);P(typeof E=="string",e,"internal-error"),Oe(r,e.name),Oe(s,e.name),P(typeof A=="boolean",e,"internal-error"),P(typeof k=="boolean",e,"internal-error"),Oe(c,e.name),Oe(l,e.name),Oe(u,e.name),Oe(I,e.name),Oe(y,e.name),Oe(S,e.name);const D=new le({uid:E,auth:e,email:s,emailVerified:A,displayName:r,isAnonymous:k,photoURL:l,phoneNumber:c,tenantId:u,stsTokenManager:R,createdAt:y,lastLoginAt:S});return C&&Array.isArray(C)&&(D.providerData=C.map(N=>({...N}))),I&&(D._redirectEventId=I),D}static async _fromIdTokenResponse(e,t,r=!1){const s=new lt;s.updateFromServerResponse(t);const c=new le({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ln(c),c}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];P(s.localId!==void 0,"internal-error");const c=s.providerUserInfo!==void 0?na(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!c?.length,u=new lt;u.updateFromIdToken(r);const I=new le({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:l}),y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ui(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!c?.length};return Object.assign(I,y),I}}/**
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
 */const Gs=new Map;function Ae(i){ke(i instanceof Function,"Expected a class definition");let e=Gs.get(i);return e?(ke(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Gs.set(i,e),e)}/**
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
 */class ia{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ia.type="NONE";const qs=ia;/**
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
 */function An(i,e,t){return`firebase:${i}:${e}:${t}`}class ut{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:c}=this.auth;this.fullUserKey=An(this.userKey,s.apiKey,c),this.fullPersistenceKey=An("persistence",s.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await On(this.auth,{idToken:e}).catch(()=>{});return t?le._fromGetAccountInfoResponse(this.auth,t,e):null}return le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ut(Ae(qs),e,r);const s=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=s[0]||Ae(qs);const l=An(r,e.config.apiKey,e.name);let u=null;for(const y of t)try{const S=await y._get(l);if(S){let E;if(typeof S=="string"){const A=await On(e,{idToken:S}).catch(()=>{});if(!A)break;E=await le._fromGetAccountInfoResponse(e,A,S)}else E=le._fromJSON(e,S);y!==c&&(u=E),c=y;break}}catch{}const I=s.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!I.length?new ut(c,e,r):(c=I[0],u&&await c._set(l,u.toJSON()),await Promise.all(t.map(async y=>{if(y!==c)try{await y._remove(l)}catch{}})),new ut(c,e,r))}}/**
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
 */function Ks(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ra(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ha(e))return"Blackberry";if(la(e))return"Webos";if(sa(e))return"Safari";if((e.includes("chrome/")||oa(e))&&!e.includes("edge/"))return"Chrome";if(ca(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(t);if(r?.length===2)return r[1]}return"Other"}function ra(i=re()){return/firefox\//i.test(i)}function sa(i=re()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oa(i=re()){return/crios\//i.test(i)}function aa(i=re()){return/iemobile/i.test(i)}function ca(i=re()){return/android/i.test(i)}function ha(i=re()){return/blackberry/i.test(i)}function la(i=re()){return/webos/i.test(i)}function or(i=re()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ou(i=re()){return or(i)&&!!window.navigator?.standalone}function au(){return xc()&&document.documentMode===10}function ua(i=re()){return or(i)||ca(i)||la(i)||ha(i)||/windows phone/i.test(i)||aa(i)}/**
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
 */function da(i,e=[]){let t;switch(i){case"Browser":t=Ks(re());break;case"Worker":t=`${Ks(re())}-${i}`;break;default:t=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mt}/${r}`}/**
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
 */class cu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=c=>new Promise((l,u)=>{try{const I=e(c);l(I)}catch(I){u(I)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function hu(i,e={}){return yt(i,"GET","/v2/passwordPolicy",rr(i,e))}/**
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
 */const lu=6;class uu{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??lu,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class du{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Js(this),this.idTokenSubscription=new Js(this),this.beforeStateQueue=new cu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ae(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ut.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await On(this,{idToken:e}),r=await le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ce(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,l=r?._redirectEventId,u=await this.tryRedirectSignIn(e);(!c||c===l)&&u?.user&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ln(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ce(this.app))return Promise.reject(Ze(this));const t=e?$e(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ce(this.app)?Promise.reject(Ze(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ce(this.app)?Promise.reject(Ze(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hu(this),t=new uu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await su(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ae(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[Ae(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(u,this,"internal-error"),u.then(()=>{l||c(this.currentUser)}),typeof t=="function"){const I=e.addObserver(t,r,s);return()=>{l=!0,I()}}else{const I=e.addObserver(t);return()=>{l=!0,I()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=da(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(ce(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Hl(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ar(i){return $e(i)}class Js{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wc(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fu(i){cr=i}function pu(i){return cr.loadJS(i)}function gu(){return cr.gapiScript}function _u(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function mu(i,e){const t=jn(i,"auth");if(t.isInitialized()){const s=t.getImmediate(),c=t.getOptions();if(Qe(c,e??{}))return s;be(s,"already-initialized")}return t.initialize({options:e})}function yu(i,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Ae);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e?.popupRedirectResolver)}function fa(i,e,t){const r=ar(i);P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,c=pa(e),{host:l,port:u}=vu(e),I=u===null?"":`:${u}`,y={url:`${c}//${l}${I}/`},S=Object.freeze({host:l,port:u,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){P(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),P(Qe(y,r.config.emulator)&&Qe(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=y,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,_t(l)?(Gi(`${c}//${l}${I}`),qi("Auth",!0)):wu()}function pa(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function vu(i){const e=pa(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const c=s[1];return{host:c,port:Xs(r.substr(c.length+1))}}else{const[c,l]=r.split(":");return{host:c,port:Xs(l)}}}function Xs(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function wu(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class ga{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Te("not implemented")}_getIdTokenResponse(e){return Te("not implemented")}_linkToIdToken(e,t){return Te("not implemented")}_getReauthenticationResolver(e){return Te("not implemented")}}/**
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
 */async function dt(i,e){return Xl(i,"POST","/v1/accounts:signInWithIdp",rr(i,e))}/**
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
 */const Iu="http://localhost";class nt extends ga{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...c}=t;if(!r||!s)return null;const l=new nt(r,s);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return dt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,dt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dt(e,t)}buildRequest(){const e={requestUri:Iu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qt(t)}return e}}/**
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
 */class _a{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yt extends _a{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Le extends Yt{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.FACEBOOK_SIGN_IN_METHOD="facebook.com";Le.PROVIDER_ID="facebook.com";/**
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
 */class Me extends Yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Me.credential(t,r)}catch{return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com";Me.PROVIDER_ID="google.com";/**
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
 */class Ue extends Yt{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
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
 */class xe extends Yt{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return xe.credential(t,r)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";/**
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
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const c=await le._fromIdTokenResponse(e,r,s),l=Ys(r);return new gt({user:c,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ys(r);return new gt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ys(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Mn extends Ce{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Mn(e,t,r,s)}}function ma(i,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Mn._fromErrorAndOperation(i,c,e,r):c})}async function Eu(i,e,t=!1){const r=await Wt(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return gt._forOperation(i,"link",r)}/**
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
 */async function Tu(i,e,t=!1){const{auth:r}=i;if(ce(r.app))return Promise.reject(Ze(r));const s="reauthenticate";try{const c=await Wt(i,ma(r,s,e,i),t);P(c.idToken,r,"internal-error");const l=sr(c.idToken);P(l,r,"internal-error");const{sub:u}=l;return P(i.uid===u,r,"user-mismatch"),gt._forOperation(i,s,c)}catch(c){throw c?.code==="auth/user-not-found"&&be(r,"user-mismatch"),c}}/**
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
 */async function Au(i,e,t=!1){if(ce(i.app))return Promise.reject(Ze(i));const r="signIn",s=await ma(i,r,e),c=await gt._fromIdTokenResponse(i,r,s);return t||await i._updateCurrentUser(c.user),c}function Su(i,e,t,r){return $e(i).onIdTokenChanged(e,t,r)}function bu(i,e,t){return $e(i).beforeAuthStateChanged(e,t)}const Un="__sak";/**
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
 */class ya{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Un,"1"),this.storage.removeItem(Un),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ku=1e3,Cu=10;class va extends ya{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ua(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,I)=>{this.notifyListeners(l,I)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},c=this.storage.getItem(r);au()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Cu):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ku)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}va.type="LOCAL";const Pu=va;/**
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
 */class wa extends ya{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wa.type="SESSION";const Ia=wa;/**
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
 */function Ru(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Bn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Bn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:c}=t.data,l=this.handlersMap[s];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(l).map(async y=>y(t.origin,c)),I=await Ru(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:I})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bn.receivers=[];/**
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
 */function hr(i="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class Nu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let c,l;return new Promise((u,I)=>{const y=hr("",20);s.port1.start();const S=setTimeout(()=>{I(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(E){const A=E;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{I(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),u(A.data.response);break;default:clearTimeout(S),clearTimeout(c),I(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function _e(){return window}function Du(i){_e().location.href=i}/**
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
 */function Ea(){return typeof _e().WorkerGlobalScope<"u"&&typeof _e().importScripts=="function"}async function Ou(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lu(){return navigator?.serviceWorker?.controller||null}function Mu(){return Ea()?self:null}/**
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
 */const Ta="firebaseLocalStorageDb",Uu=1,xn="firebaseLocalStorage",Aa="fbase_key";class Zt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $n(i,e){return i.transaction([xn],e?"readwrite":"readonly").objectStore(xn)}function xu(){const i=indexedDB.deleteDatabase(Ta);return new Zt(i).toPromise()}function xi(){const i=indexedDB.open(Ta,Uu);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(xn,{keyPath:Aa})}catch(s){t(s)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(xn)?e(r):(r.close(),await xu(),e(await xi()))})})}async function Zs(i,e,t){const r=$n(i,!0).put({[Aa]:e,value:t});return new Zt(r).toPromise()}async function Fu(i,e){const t=$n(i,!1).get(e),r=await new Zt(t).toPromise();return r===void 0?null:r.value}function Qs(i,e){const t=$n(i,!0).delete(e);return new Zt(t).toPromise()}const Vu=800,ju=3;class Sa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ju)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ea()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bn._getInstance(Mu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ou(),!this.activeServiceWorker)return;this.sender=new Nu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xi();return await Zs(e,Un,"1"),await Qs(e,Un),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zs(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fu(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qs(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const c=$n(s,!1).getAll();return new Zt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:c}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(c)&&(this.notifyListeners(s,c),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sa.type="LOCAL";const Bu=Sa;new Xt(3e4,6e4);/**
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
 */function $u(i,e){return e?Ae(e):(P(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class lr extends ga{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hu(i){return Au(i.auth,new lr(i),i.bypassAuthState)}function Wu(i){const{auth:e,user:t}=i;return P(t,e,"internal-error"),Tu(t,new lr(i),i.bypassAuthState)}async function zu(i){const{auth:e,user:t}=i;return P(t,e,"internal-error"),Eu(t,new lr(i),i.bypassAuthState)}/**
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
 */class ba{constructor(e,t,r,s,c=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:c,error:l,type:u}=e;if(l){this.reject(l);return}const I={auth:this.auth,requestUri:t,sessionId:r,tenantId:c||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(I))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hu;case"linkViaPopup":case"linkViaRedirect":return zu;case"reauthViaPopup":case"reauthViaRedirect":return Wu;default:be(this.auth,"internal-error")}}resolve(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gu=new Xt(2e3,1e4);class ct extends ba{constructor(e,t,r,s,c){super(e,t,s,c),this.provider=r,this.authWindow=null,this.pollId=null,ct.currentPopupAction&&ct.currentPopupAction.cancel(),ct.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const e=hr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ct.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gu.get())};e()}}ct.currentPopupAction=null;/**
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
 */const qu="pendingRedirect",Sn=new Map;class Ku extends ba{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Sn.get(this.auth._key());if(!e){try{const r=await Ju(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Sn.set(this.auth._key(),e)}return this.bypassAuthState||Sn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ju(i,e){const t=Zu(e),r=Yu(i);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Xu(i,e){Sn.set(i._key(),e)}function Yu(i){return Ae(i._redirectPersistence)}function Zu(i){return An(qu,i.config.apiKey,i.name)}async function Qu(i,e,t=!1){if(ce(i.app))return Promise.reject(Ze(i));const r=ar(i),s=$u(r,e),l=await new Ku(r,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const ed=600*1e3;class td{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nd(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!ka(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ge(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ed&&this.cachedEventUids.clear(),this.cachedEventUids.has(eo(e))}saveEventToCache(e){this.cachedEventUids.add(eo(e)),this.lastProcessedEventTime=Date.now()}}function eo(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function ka({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function nd(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ka(i);default:return!1}}/**
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
 */async function id(i,e={}){return yt(i,"GET","/v1/projects",e)}/**
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
 */const rd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sd=/^https?/;async function od(i){if(i.config.emulator)return;const{authorizedDomains:e}=await id(i);for(const t of e)try{if(ad(t))return}catch{}be(i,"unauthorized-domain")}function ad(i){const e=Mi(),{protocol:t,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const l=new URL(i);return l.hostname===""&&r===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!sd.test(t))return!1;if(rd.test(i))return r===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const cd=new Xt(3e4,6e4);function to(){const i=_e().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function hd(i){return new Promise((e,t)=>{function r(){to(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{to(),t(ge(i,"network-request-failed"))},timeout:cd.get()})}if(_e().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(_e().gapi?.load)r();else{const s=_u("iframefcb");return _e()[s]=()=>{gapi.load?r():t(ge(i,"network-request-failed"))},pu(`${gu()}?onload=${s}`).catch(c=>t(c))}}).catch(e=>{throw bn=null,e})}let bn=null;function ld(i){return bn=bn||hd(i),bn}/**
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
 */const ud=new Xt(5e3,15e3),dd="__/auth/iframe",fd="emulator/auth/iframe",pd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _d(i){const e=i.config;P(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?ir(e,fd):`https://${i.config.authDomain}/${dd}`,r={apiKey:e.apiKey,appName:i.name,v:mt},s=gd.get(i.config.apiHost);s&&(r.eid=s);const c=i._getFrameworks();return c.length&&(r.fw=c.join(",")),`${t}?${qt(r).slice(1)}`}async function md(i){const e=await ld(i),t=_e().gapi;return P(t,i,"internal-error"),e.open({where:document.body,url:_d(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pd,dontclear:!0},r=>new Promise(async(s,c)=>{await r.restyle({setHideOnLeave:!1});const l=ge(i,"network-request-failed"),u=_e().setTimeout(()=>{c(l)},ud.get());function I(){_e().clearTimeout(u),s(r)}r.ping(I).then(I,()=>{c(l)})}))}/**
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
 */const yd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vd=500,wd=600,Id="_blank",Ed="http://localhost";class no{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Td(i,e,t,r=vd,s=wd){const c=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const I={...yd,width:r.toString(),height:s.toString(),top:c,left:l},y=re().toLowerCase();t&&(u=oa(y)?Id:t),ra(y)&&(e=e||Ed,I.scrollbars="yes");const S=Object.entries(I).reduce((A,[k,C])=>`${A}${k}=${C},`,"");if(ou(y)&&u!=="_self")return Ad(e||"",u),new no(null);const E=window.open(e||"",u,S);P(E,i,"popup-blocked");try{E.focus()}catch{}return new no(E)}function Ad(i,e){const t=document.createElement("a");t.href=i,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Sd="__/auth/handler",bd="emulator/auth/handler",kd=encodeURIComponent("fac");async function io(i,e,t,r,s,c){P(i.config.authDomain,i,"auth-domain-config-required"),P(i.config.apiKey,i,"invalid-api-key");const l={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:r,v:mt,eventId:s};if(e instanceof _a){e.setDefaultLanguage(i.languageCode),l.providerId=e.providerId||"",Hc(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,E]of Object.entries({}))l[S]=E}if(e instanceof Yt){const S=e.getScopes().filter(E=>E!=="");S.length>0&&(l.scopes=S.join(","))}i.tenantId&&(l.tid=i.tenantId);const u=l;for(const S of Object.keys(u))u[S]===void 0&&delete u[S];const I=await i._getAppCheckToken(),y=I?`#${kd}=${encodeURIComponent(I)}`:"";return`${Cd(i)}?${qt(u).slice(1)}${y}`}function Cd({config:i}){return i.emulator?ir(i,bd):`https://${i.authDomain}/${Sd}`}/**
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
 */const Ti="webStorageSupport";class Pd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ia,this._completeRedirectFn=Qu,this._overrideRedirectResult=Xu}async _openPopup(e,t,r,s){ke(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await io(e,t,r,Mi(),s);return Td(e,c,hr())}async _openRedirect(e,t,r,s){await this._originValidation(e);const c=await io(e,t,r,Mi(),s);return Du(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:c}=this.eventManagers[t];return s?Promise.resolve(s):(ke(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await md(e),r=new td(e);return t.register("authEvent",s=>(P(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ti,{type:Ti},s=>{const c=s?.[0]?.[Ti];c!==void 0&&t(!!c),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=od(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ua()||sa()||or()}}const Rd=Pd;var ro="@firebase/auth",so="1.11.0";/**
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
 */class Nd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dd(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Od(i){et(new je("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;P(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const I={apiKey:l,authDomain:u,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:da(i)},y=new du(r,s,c,I);return yu(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),et(new je("auth-internal",e=>{const t=ar(e.getProvider("auth").getImmediate());return(r=>new Nd(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(ro,so,Dd(i)),pe(ro,so,"esm2020")}/**
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
 */const Ld=300,Md=Oo("authIdTokenMaxAge")||Ld;let oo=null;const Ud=i=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Md)return;const s=t?.token;oo!==s&&(oo=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xd(i=Xi()){const e=jn(i,"auth");if(e.isInitialized())return e.getImmediate();const t=mu(i,{popupRedirectResolver:Rd,persistence:[Bu,Pu,Ia]}),r=Oo("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const l=Ud(c.toString());bu(t,l,()=>l(t.currentUser)),Su(t,u=>l(u))}}const s=Ro("auth");return s&&fa(t,`http://${s}`),t}function Fd(){return document.getElementsByTagName("head")?.[0]??document}fu({loadJS(i){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=s=>{const c=ge("internal-error");c.customData=s,t(c)},r.type="text/javascript",r.charset="UTF-8",Fd().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Od("Browser");const Vd={apiKey:"AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",authDomain:"my-new-firebase-project-94e22.firebaseapp.com",projectId:"my-new-firebase-project-94e22",storageBucket:"my-new-firebase-project-94e22.firebasestorage.app",messagingSenderId:"210118924526",appId:"1:210118924526:web:c88671740e8b13e1e7fbff"},ur=Uo(Vd),jd=Pl(ur),Bd=Bl(ur),$d=xd(ur);window.location.hostname==="localhost"?(console.log("Development mode: Connecting to local Firebase emulators..."),Wo(jd,"localhost",8080),Jo(Bd,"localhost",5001),fa($d,"http://localhost:9099")):console.log("Production mode: Connecting to live Firebase services.");var Fi,W,Ai,ao,Vi=0,Ca=[],q=j,co=q.__b,ho=q.__r,lo=q.diffed,uo=q.__c,fo=q.unmount,po=q.__;function Hd(i,e){q.__h&&q.__h(W,i,Vi||e),Vi=0;var t=W.__H||(W.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({}),t.__[i]}function Wd(i){return Vi=1,zd(Pa,i)}function zd(i,e,t){var r=Hd(Fi++,2);if(r.t=i,!r.__c&&(r.__=[Pa(void 0,e),function(u){var I=r.__N?r.__N[0]:r.__[0],y=r.t(I,u);I!==y&&(r.__N=[y,r.__[1]],r.__c.setState({}))}],r.__c=W,!W.__f)){var s=function(u,I,y){if(!r.__c.__H)return!0;var S=r.__c.__H.__.filter(function(A){return!!A.__c});if(S.every(function(A){return!A.__N}))return!c||c.call(this,u,I,y);var E=r.__c.props!==u;return S.forEach(function(A){if(A.__N){var k=A.__[0];A.__=A.__N,A.__N=void 0,k!==A.__[0]&&(E=!0)}}),c&&c.call(this,u,I,y)||E};W.__f=!0;var c=W.shouldComponentUpdate,l=W.componentWillUpdate;W.componentWillUpdate=function(u,I,y){if(this.__e){var S=c;c=void 0,s(u,I,y),c=S}l&&l.call(this,u,I,y)},W.shouldComponentUpdate=s}return r.__N||r.__}function Gd(){for(var i;i=Ca.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(kn),i.__H.__h.forEach(ji),i.__H.__h=[]}catch(e){i.__H.__h=[],q.__e(e,i.__v)}}q.__b=function(i){W=null,co&&co(i)},q.__=function(i,e){i&&e.__k&&e.__k.__m&&(i.__m=e.__k.__m),po&&po(i,e)},q.__r=function(i){ho&&ho(i),Fi=0;var e=(W=i.__c).__H;e&&(Ai===W?(e.__h=[],W.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(kn),e.__h.forEach(ji),e.__h=[],Fi=0)),Ai=W},q.diffed=function(i){lo&&lo(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(Ca.push(e)!==1&&ao===q.requestAnimationFrame||((ao=q.requestAnimationFrame)||qd)(Gd)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Ai=W=null},q.__c=function(i,e){e.some(function(t){try{t.__h.forEach(kn),t.__h=t.__h.filter(function(r){return!r.__||ji(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],q.__e(r,t.__v)}}),uo&&uo(i,e)},q.unmount=function(i){fo&&fo(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{kn(r)}catch(s){e=s}}),t.__H=void 0,e&&q.__e(e,t.__v))};var go=typeof requestAnimationFrame=="function";function qd(i){var e,t=function(){clearTimeout(r),go&&cancelAnimationFrame(e),setTimeout(i)},r=setTimeout(t,35);go&&(e=requestAnimationFrame(t))}function kn(i){var e=W,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),W=e}function ji(i){var e=W;i.__c=i.__(),W=e}function Pa(i,e){return typeof e=="function"?e(i):e}const Kd="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='27.68'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20296'%3e%3cpath%20fill='%23673AB8'%20d='m128%200l128%2073.9v147.8l-128%2073.9L0%20221.7V73.9z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M34.865%20220.478c17.016%2021.78%2071.095%205.185%20122.15-34.704c51.055-39.888%2080.24-88.345%2063.224-110.126c-17.017-21.78-71.095-5.184-122.15%2034.704c-51.055%2039.89-80.24%2088.346-63.224%20110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402%207.573-39.253c11.322-18.797%2030.541-39.548%2054.06-57.923c23.52-18.375%2048.303-32.004%2069.281-38.442c19.922-6.113%2034.277-5.075%2039.92%202.148c5.644%207.223%203.178%2021.403-7.573%2039.254c-11.322%2018.797-30.541%2039.547-54.06%2057.923c-23.52%2018.375-48.304%2032.004-69.281%2038.441c-19.922%206.114-34.277%205.076-39.92-2.147Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M220.239%20220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96%2070.464%2051.88%2053.868%2034.865%2075.648c-17.017%2021.78%2012.169%2070.238%2063.224%20110.126c51.055%2039.889%20105.133%2056.485%20122.15%2034.704Zm-7.27-5.68c-5.643%207.224-19.998%208.262-39.92%202.148c-20.978-6.437-45.761-20.066-69.28-38.441c-23.52-18.376-42.74-39.126-54.06-57.923c-10.752-17.851-13.218-32.03-7.575-39.254c5.644-7.223%2019.999-8.261%2039.92-2.148c20.978%206.438%2045.762%2020.067%2069.281%2038.442c23.52%2018.375%2042.739%2039.126%2054.06%2057.923c10.752%2017.85%2013.218%2032.03%207.574%2039.254Z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M127.552%20167.667c10.827%200%2019.603-8.777%2019.603-19.604c0-10.826-8.776-19.603-19.603-19.603c-10.827%200-19.604%208.777-19.604%2019.603c0%2010.827%208.777%2019.604%2019.604%2019.604Z'%3e%3c/path%3e%3c/svg%3e",Jd="/vite.svg";function Xd(){const[i,e]=Wd(0);return ne(zt,{children:[ne("div",{children:[ne("a",{href:"https://vite.dev",target:"_blank",children:ne("img",{src:Jd,class:"logo",alt:"Vite logo"})}),ne("a",{href:"https://preactjs.com",target:"_blank",children:ne("img",{src:Kd,class:"logo preact",alt:"Preact logo"})})]}),ne("h1",{children:"Vite + Preact"}),ne("div",{class:"card",children:[ne("button",{onClick:()=>e(t=>t+1),children:["count is ",i]}),ne("p",{children:["Edit ",ne("code",{children:"src/app.jsx"})," and save to test HMR"]})]}),ne("p",{children:["Check out"," ",ne("a",{href:"https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app",target:"_blank",children:"create-preact"}),", the official Preact + Vite starter"]}),ne("p",{class:"read-the-docs",children:"Click on the Vite and Preact logos to learn more"})]})}vc(ne(Xd,{}),document.getElementById("app"));
