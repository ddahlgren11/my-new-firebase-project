(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var tr,H,Fo,Ze,Rs,jo,Vo,$o,oi,Hr,Wr,Qt={},Bo=[],Fc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,nr=Array.isArray;function xe(n,e){for(var t in e)n[t]=e[t];return n}function ai(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function jc(n,e,t){var i,s,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?s=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?tr.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)l[a]===void 0&&(l[a]=n.defaultProps[a]);return Dn(n,l,i,s,null)}function Dn(n,e,t,i,s){var a={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Fo,__i:-1,__u:0};return s==null&&H.vnode!=null&&H.vnode(a),a}function nn(n){return n.children}function On(n,e){this.props=n,this.context=e}function Et(n,e){if(e==null)return n.__?Et(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Et(n):null}function Ho(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Ho(n)}}function Ns(n){(!n.__d&&(n.__d=!0)&&Ze.push(n)&&!$n.__r++||Rs!=H.debounceRendering)&&((Rs=H.debounceRendering)||jo)($n)}function $n(){for(var n,e,t,i,s,a,l,u=1;Ze.length;)Ze.length>u&&Ze.sort(Vo),n=Ze.shift(),u=Ze.length,n.__d&&(t=void 0,s=(i=(e=n).__v).__e,a=[],l=[],e.__P&&((t=xe({},i)).__v=i.__v+1,H.vnode&&H.vnode(t),ci(e.__P,t,i,e.__n,e.__P.namespaceURI,32&i.__u?[s]:null,a,s??Et(i),!!(32&i.__u),l),t.__v=i.__v,t.__.__k[t.__i]=t,Go(a,t,l),t.__e!=s&&Ho(t)));$n.__r=0}function Wo(n,e,t,i,s,a,l,u,m,_,A){var I,S,C,k,O,P,D,N=i&&i.__k||Bo,$=e.length;for(m=Vc(t,e,N,m,$),I=0;I<$;I++)(C=t.__k[I])!=null&&(S=C.__i==-1?Qt:N[C.__i]||Qt,C.__i=I,P=ci(n,C,S,s,a,l,u,m,_,A),k=C.__e,C.ref&&S.ref!=C.ref&&(S.ref&&li(S.ref,null,C),A.push(C.ref,C.__c||k,C)),O==null&&k!=null&&(O=k),(D=!!(4&C.__u))||S.__k===C.__k?m=zo(C,m,n,D):typeof C.type=="function"&&P!==void 0?m=P:k&&(m=k.nextSibling),C.__u&=-7);return t.__e=O,m}function Vc(n,e,t,i,s){var a,l,u,m,_,A=t.length,I=A,S=0;for(n.__k=new Array(s),a=0;a<s;a++)(l=e[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(m=a+S,(l=n.__k[a]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?Dn(null,l,null,null,null):nr(l)?Dn(nn,{children:l},null,null,null):l.constructor==null&&l.__b>0?Dn(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=n,l.__b=n.__b+1,u=null,(_=l.__i=$c(l,t,m,I))!=-1&&(I--,(u=t[_])&&(u.__u|=2)),u==null||u.__v==null?(_==-1&&(s>A?S--:s<A&&S++),typeof l.type!="function"&&(l.__u|=4)):_!=m&&(_==m-1?S--:_==m+1?S++:(_>m?S--:S++,l.__u|=4))):n.__k[a]=null;if(I)for(a=0;a<A;a++)(u=t[a])!=null&&(2&u.__u)==0&&(u.__e==i&&(i=Et(u)),Ko(u,u));return i}function zo(n,e,t,i){var s,a;if(typeof n.type=="function"){for(s=n.__k,a=0;s&&a<s.length;a++)s[a]&&(s[a].__=n,e=zo(s[a],e,t,i));return e}n.__e!=e&&(i&&(e&&n.type&&!e.parentNode&&(e=Et(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function $c(n,e,t,i){var s,a,l,u=n.key,m=n.type,_=e[t],A=_!=null&&(2&_.__u)==0;if(_===null&&n.key==null||A&&u==_.key&&m==_.type)return t;if(i>(A?1:0)){for(s=t-1,a=t+1;s>=0||a<e.length;)if((_=e[l=s>=0?s--:a++])!=null&&(2&_.__u)==0&&u==_.key&&m==_.type)return l}return-1}function Ds(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Fc.test(e)?t:t+"px"}function Cn(n,e,t,i,s){var a,l;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Ds(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Ds(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace($o,"$1")),l=e.toLowerCase(),e=l in n||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?i?t.u=i.u:(t.u=oi,n.addEventListener(e,a?Wr:Hr,a)):n.removeEventListener(e,a?Wr:Hr,a);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Os(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=oi++;else if(e.t<t.u)return;return t(H.event?H.event(e):e)}}}function ci(n,e,t,i,s,a,l,u,m,_){var A,I,S,C,k,O,P,D,N,$,z,ce,K,w,f,d,y,v=e.type;if(e.constructor!=null)return null;128&t.__u&&(m=!!(32&t.__u),a=[u=e.__e=t.__e]),(A=H.__b)&&A(e);e:if(typeof v=="function")try{if(D=e.props,N="prototype"in v&&v.prototype.render,$=(A=v.contextType)&&i[A.__c],z=A?$?$.props.value:A.__:i,t.__c?P=(I=e.__c=t.__c).__=I.__E:(N?e.__c=I=new v(D,z):(e.__c=I=new On(D,z),I.constructor=v,I.render=Hc),$&&$.sub(I),I.props=D,I.state||(I.state={}),I.context=z,I.__n=i,S=I.__d=!0,I.__h=[],I._sb=[]),N&&I.__s==null&&(I.__s=I.state),N&&v.getDerivedStateFromProps!=null&&(I.__s==I.state&&(I.__s=xe({},I.__s)),xe(I.__s,v.getDerivedStateFromProps(D,I.__s))),C=I.props,k=I.state,I.__v=e,S)N&&v.getDerivedStateFromProps==null&&I.componentWillMount!=null&&I.componentWillMount(),N&&I.componentDidMount!=null&&I.__h.push(I.componentDidMount);else{if(N&&v.getDerivedStateFromProps==null&&D!==C&&I.componentWillReceiveProps!=null&&I.componentWillReceiveProps(D,z),!I.__e&&I.shouldComponentUpdate!=null&&I.shouldComponentUpdate(D,I.__s,z)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(I.props=D,I.state=I.__s,I.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(E){E&&(E.__=e)}),ce=0;ce<I._sb.length;ce++)I.__h.push(I._sb[ce]);I._sb=[],I.__h.length&&l.push(I);break e}I.componentWillUpdate!=null&&I.componentWillUpdate(D,I.__s,z),N&&I.componentDidUpdate!=null&&I.__h.push(function(){I.componentDidUpdate(C,k,O)})}if(I.context=z,I.props=D,I.__P=n,I.__e=!1,K=H.__r,w=0,N){for(I.state=I.__s,I.__d=!1,K&&K(e),A=I.render(I.props,I.state,I.context),f=0;f<I._sb.length;f++)I.__h.push(I._sb[f]);I._sb=[]}else do I.__d=!1,K&&K(e),A=I.render(I.props,I.state,I.context),I.state=I.__s;while(I.__d&&++w<25);I.state=I.__s,I.getChildContext!=null&&(i=xe(xe({},i),I.getChildContext())),N&&!S&&I.getSnapshotBeforeUpdate!=null&&(O=I.getSnapshotBeforeUpdate(C,k)),d=A,A!=null&&A.type===nn&&A.key==null&&(d=qo(A.props.children)),u=Wo(n,nr(d)?d:[d],e,t,i,s,a,l,u,m,_),I.base=e.__e,e.__u&=-161,I.__h.length&&l.push(I),P&&(I.__E=I.__=null)}catch(E){if(e.__v=null,m||a!=null)if(E.then){for(e.__u|=m?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;a[a.indexOf(u)]=null,e.__e=u}else{for(y=a.length;y--;)ai(a[y]);zr(e)}else e.__e=t.__e,e.__k=t.__k,E.then||zr(e);H.__e(E,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):u=e.__e=Bc(t.__e,e,t,i,s,a,l,m,_);return(A=H.diffed)&&A(e),128&e.__u?void 0:u}function zr(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(zr)}function Go(n,e,t){for(var i=0;i<t.length;i++)li(t[i],t[++i],t[++i]);H.__c&&H.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(a){a.call(s)})}catch(a){H.__e(a,s.__v)}})}function qo(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:nr(n)?n.map(qo):xe({},n)}function Bc(n,e,t,i,s,a,l,u,m){var _,A,I,S,C,k,O,P=t.props,D=e.props,N=e.type;if(N=="svg"?s="http://www.w3.org/2000/svg":N=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),a!=null){for(_=0;_<a.length;_++)if((C=a[_])&&"setAttribute"in C==!!N&&(N?C.localName==N:C.nodeType==3)){n=C,a[_]=null;break}}if(n==null){if(N==null)return document.createTextNode(D);n=document.createElementNS(s,N,D.is&&D),u&&(H.__m&&H.__m(e,a),u=!1),a=null}if(N==null)P===D||u&&n.data==D||(n.data=D);else{if(a=a&&tr.call(n.childNodes),P=t.props||Qt,!u&&a!=null)for(P={},_=0;_<n.attributes.length;_++)P[(C=n.attributes[_]).name]=C.value;for(_ in P)if(C=P[_],_!="children"){if(_=="dangerouslySetInnerHTML")I=C;else if(!(_ in D)){if(_=="value"&&"defaultValue"in D||_=="checked"&&"defaultChecked"in D)continue;Cn(n,_,null,C,s)}}for(_ in D)C=D[_],_=="children"?S=C:_=="dangerouslySetInnerHTML"?A=C:_=="value"?k=C:_=="checked"?O=C:u&&typeof C!="function"||P[_]===C||Cn(n,_,C,P[_],s);if(A)u||I&&(A.__html==I.__html||A.__html==n.innerHTML)||(n.innerHTML=A.__html),e.__k=[];else if(I&&(n.innerHTML=""),Wo(e.type=="template"?n.content:n,nr(S)?S:[S],e,t,i,N=="foreignObject"?"http://www.w3.org/1999/xhtml":s,a,l,a?a[0]:t.__k&&Et(t,0),u,m),a!=null)for(_=a.length;_--;)ai(a[_]);u||(_="value",N=="progress"&&k==null?n.removeAttribute("value"):k!=null&&(k!==n[_]||N=="progress"&&!k||N=="option"&&k!=P[_])&&Cn(n,_,k,P[_],s),_="checked",O!=null&&O!=n[_]&&Cn(n,_,O,P[_],s))}return n}function li(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){H.__e(s,t)}}function Ko(n,e,t){var i,s;if(H.unmount&&H.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||li(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){H.__e(a,e)}i.base=i.__P=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&Ko(i[s],e,t||typeof n.type!="function");t||ai(n.__e),n.__c=n.__=n.__e=void 0}function Hc(n,e,t){return this.constructor(n,t)}function Wc(n,e,t){var i,s,a,l;e==document&&(e=document.documentElement),H.__&&H.__(n,e),s=(i=!1)?null:e.__k,a=[],l=[],ci(e,n=e.__k=jc(nn,null,[n]),s||Qt,Qt,e.namespaceURI,s?null:e.firstChild?tr.call(e.childNodes):null,a,s?s.__e:e.firstChild,i,l),Go(a,n,l)}tr=Bo.slice,H={__e:function(n,e,t,i){for(var s,a,l;e=e.__;)if((s=e.__c)&&!s.__)try{if((a=s.constructor)&&a.getDerivedStateFromError!=null&&(s.setState(a.getDerivedStateFromError(n)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),l=s.__d),l)return s.__E=s}catch(u){n=u}throw n}},Fo=0,On.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=xe({},this.state),typeof n=="function"&&(n=n(xe({},t),this.props)),n&&xe(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Ns(this))},On.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Ns(this))},On.prototype.render=nn,Ze=[],jo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Vo=function(n,e){return n.__v.__b-e.__v.__b},$n.__r=0,$o=/(PointerCapture)$|Capture$/i,oi=0,Hr=Os(!1),Wr=Os(!0);var zc=0;function p(n,e,t,i,s,a){e||(e={});var l,u,m=e;if("ref"in m)for(u in m={},e)u=="ref"?l=e[u]:m[u]=e[u];var _={type:n,props:m,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--zc,__i:-1,__u:0,__source:s,__self:a};if(typeof n=="function"&&(l=n.defaultProps))for(u in l)m[u]===void 0&&(m[u]=l[u]);return H.vnode&&H.vnode(_),_}const Gc=()=>{};var Ls={};/**
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
 */const Jo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],l=n[t++],u=n[t++],m=((s&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const a=n[t++],l=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},Xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],l=s+1<n.length,u=l?n[s+1]:0,m=s+2<n.length,_=m?n[s+2]:0,A=a>>2,I=(a&3)<<4|u>>4;let S=(u&15)<<2|_>>6,C=_&63;m||(C=64,l||(S=64)),i.push(t[A],t[I],t[S],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const _=s<n.length?t[n.charAt(s)]:64;++s;const I=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||u==null||_==null||I==null)throw new Kc;const S=a<<2|u>>4;if(i.push(S),_!==64){const C=u<<4&240|_>>2;if(i.push(C),I!==64){const k=_<<6&192|I;i.push(k)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jc=function(n){const e=Jo(n);return Xo.encodeByteArray(e,!0)},Bn=function(n){return Jc(n).replace(/\./g,"")},Yo=function(n){try{return Xo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yc=()=>Xc().__FIREBASE_DEFAULTS__,Qc=()=>{if(typeof process>"u"||typeof Ls>"u")return;const n=Ls.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yo(n[1]);return e&&JSON.parse(e)},hi=()=>{try{return Gc()||Yc()||Qc()||Zc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qo=n=>hi()?.emulatorHosts?.[n],Zo=n=>{const e=Qo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ea=()=>hi()?.config,ta=n=>hi()?.[`_${n}`];/**
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
 */class el{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function lt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ui(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function tl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Bn(JSON.stringify(t)),Bn(JSON.stringify(l)),""].join(".")}const Gt={};function nl(){const n={prod:[],emulator:[]};for(const e of Object.keys(Gt))Gt[e]?n.emulator.push(e):n.prod.push(e);return n}function rl(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ms=!1;function di(n,e){if(typeof window>"u"||typeof document>"u"||!lt(window.location.host)||Gt[n]===e||Gt[n]||Ms)return;Gt[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",a=nl().prod.length>0;function l(){const S=document.getElementById(i);S&&S.remove()}function u(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,C){S.setAttribute("width","24"),S.setAttribute("id",C),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function _(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ms=!0,l()},S}function A(S,C){S.setAttribute("id",C),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function I(){const S=rl(i),C=t("text"),k=document.getElementById(C)||document.createElement("span"),O=t("learnmore"),P=document.getElementById(O)||document.createElement("a"),D=t("preprendIcon"),N=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const $=S.element;u($),A(P,O);const z=_();m(N,D),$.append(N,k,P,z),document.body.appendChild($)}a?(k.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function il(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function sl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ol(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function al(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cl(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ll(){try{return typeof indexedDB=="object"}catch{return!1}}function hl(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const ul="FirebaseError";class Ee extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ul,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rn.prototype.create)}}class rn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?dl(a,i):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Ee(s,u,i)}}function dl(n,e){return n.replace(fl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fl=/\{\$([^}]+)}/g;function pl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function st(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],l=e[s];if(Us(a)&&Us(l)){if(!st(a,l))return!1}else if(a!==l)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Us(n){return n!==null&&typeof n=="object"}/**
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
 */function sn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function gl(n,e){const t=new ml(n,e);return t.subscribe.bind(t)}class ml{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");_l(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Nr),s.error===void 0&&(s.error=Nr),s.complete===void 0&&(s.complete=Nr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _l(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Nr(){}/**
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
 */function me(n){return n&&n._delegate?n._delegate:n}class Ge{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qe="[DEFAULT]";/**
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
 */class yl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new el;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wl(e))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=Qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qe){return this.instances.has(e)}getOptions(e=Qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);i===u&&l.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vl(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qe){return this.component?this.component.multipleInstances?e:Qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vl(n){return n===Qe?void 0:n}function wl(n){return n.instantiationMode==="EAGER"}/**
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
 */class bl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const Il={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},El=V.INFO,Tl={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Sl=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Tl[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fi{constructor(e){this.name=e,this._logLevel=El,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Il[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Al=(n,e)=>e.some(t=>n instanceof t);let Fs,js;function kl(){return Fs||(Fs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cl(){return js||(js=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const na=new WeakMap,Gr=new WeakMap,ra=new WeakMap,Dr=new WeakMap,pi=new WeakMap;function xl(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(We(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&na.set(t,n)}).catch(()=>{}),pi.set(e,n),e}function Pl(n){if(Gr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});Gr.set(n,e)}let qr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ra.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return We(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rl(n){qr=n(qr)}function Nl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Or(this),e,...t);return ra.set(i,e.sort?e.sort():[e]),We(i)}:Cl().includes(n)?function(...e){return n.apply(Or(this),e),We(na.get(this))}:function(...e){return We(n.apply(Or(this),e))}}function Dl(n){return typeof n=="function"?Nl(n):(n instanceof IDBTransaction&&Pl(n),Al(n,kl())?new Proxy(n,qr):n)}function We(n){if(n instanceof IDBRequest)return xl(n);if(Dr.has(n))return Dr.get(n);const e=Dl(n);return e!==n&&(Dr.set(n,e),pi.set(e,n)),e}const Or=n=>pi.get(n);function Ol(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const l=indexedDB.open(n,e),u=We(l);return i&&l.addEventListener("upgradeneeded",m=>{i(We(l.result),m.oldVersion,m.newVersion,We(l.transaction),m)}),t&&l.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),u.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",_=>s(_.oldVersion,_.newVersion,_))}).catch(()=>{}),u}const Ll=["get","getKey","getAll","getAllKeys","count"],Ml=["put","add","delete","clear"],Lr=new Map;function Vs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Lr.get(e))return Lr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Ml.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ll.includes(t)))return;const a=async function(l,...u){const m=this.transaction(l,s?"readwrite":"readonly");let _=m.store;return i&&(_=_.index(u.shift())),(await Promise.all([_[t](...u),s&&m.done]))[0]};return Lr.set(e,a),a}Rl(n=>({...n,get:(e,t,i)=>Vs(e,t)||n.get(e,t,i),has:(e,t)=>!!Vs(e,t)||n.has(e,t)}));/**
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
 */class Ul{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Fl(n){return n.getComponent()?.type==="VERSION"}const Kr="@firebase/app",$s="0.14.2";/**
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
 */const De=new fi("@firebase/app"),jl="@firebase/app-compat",Vl="@firebase/analytics-compat",$l="@firebase/analytics",Bl="@firebase/app-check-compat",Hl="@firebase/app-check",Wl="@firebase/auth",zl="@firebase/auth-compat",Gl="@firebase/database",ql="@firebase/data-connect",Kl="@firebase/database-compat",Jl="@firebase/functions",Xl="@firebase/functions-compat",Yl="@firebase/installations",Ql="@firebase/installations-compat",Zl="@firebase/messaging",eh="@firebase/messaging-compat",th="@firebase/performance",nh="@firebase/performance-compat",rh="@firebase/remote-config",ih="@firebase/remote-config-compat",sh="@firebase/storage",oh="@firebase/storage-compat",ah="@firebase/firestore",ch="@firebase/ai",lh="@firebase/firestore-compat",hh="firebase",uh="12.2.0";/**
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
 */const Jr="[DEFAULT]",dh={[Kr]:"fire-core",[jl]:"fire-core-compat",[$l]:"fire-analytics",[Vl]:"fire-analytics-compat",[Hl]:"fire-app-check",[Bl]:"fire-app-check-compat",[Wl]:"fire-auth",[zl]:"fire-auth-compat",[Gl]:"fire-rtdb",[ql]:"fire-data-connect",[Kl]:"fire-rtdb-compat",[Jl]:"fire-fn",[Xl]:"fire-fn-compat",[Yl]:"fire-iid",[Ql]:"fire-iid-compat",[Zl]:"fire-fcm",[eh]:"fire-fcm-compat",[th]:"fire-perf",[nh]:"fire-perf-compat",[rh]:"fire-rc",[ih]:"fire-rc-compat",[sh]:"fire-gcs",[oh]:"fire-gcs-compat",[ah]:"fire-fst",[lh]:"fire-fst-compat",[ch]:"fire-vertex","fire-js":"fire-js",[hh]:"fire-js-all"};/**
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
 */const Hn=new Map,fh=new Map,Xr=new Map;function Bs(n,e){try{n.container.addComponent(e)}catch(t){De.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ot(n){const e=n.name;if(Xr.has(e))return De.debug(`There were multiple attempts to register component ${e}.`),!1;Xr.set(e,n);for(const t of Hn.values())Bs(t,n);for(const t of fh.values())Bs(t,n);return!0}function rr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ze=new rn("app","Firebase",ph);/**
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
 */class gh{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ze.create("app-deleted",{appName:this._name})}}/**
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
 */const At=uh;function ia(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Jr,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw ze.create("bad-app-name",{appName:String(s)});if(t||(t=ea()),!t)throw ze.create("no-options");const a=Hn.get(s);if(a){if(st(t,a.options)&&st(i,a.config))return a;throw ze.create("duplicate-app",{appName:s})}const l=new bl(s);for(const m of Xr.values())l.addComponent(m);const u=new gh(t,i,l);return Hn.set(s,u),u}function gi(n=Jr){const e=Hn.get(n);if(!e&&n===Jr&&ea())return ia();if(!e)throw ze.create("no-app",{appName:n});return e}function we(n,e,t){let i=dh[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),De.warn(l.join(" "));return}ot(new Ge(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mh="firebase-heartbeat-database",_h=1,Zt="firebase-heartbeat-store";let Mr=null;function sa(){return Mr||(Mr=Ol(mh,_h,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ze.create("idb-open",{originalErrorMessage:n.message})})),Mr}async function yh(n){try{const t=(await sa()).transaction(Zt),i=await t.objectStore(Zt).get(oa(n));return await t.done,i}catch(e){if(e instanceof Ee)De.warn(e.message);else{const t=ze.create("idb-get",{originalErrorMessage:e?.message});De.warn(t.message)}}}async function Hs(n,e){try{const i=(await sa()).transaction(Zt,"readwrite");await i.objectStore(Zt).put(e,oa(n)),await i.done}catch(t){if(t instanceof Ee)De.warn(t.message);else{const i=ze.create("idb-set",{originalErrorMessage:t?.message});De.warn(i.message)}}}function oa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vh=1024,wh=30;class bh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Eh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ws();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>wh){const s=Th(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){De.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ws(),{heartbeatsToSend:t,unsentEntries:i}=Ih(this._heartbeatsCache.heartbeats),s=Bn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return De.warn(e),""}}}function Ws(){return new Date().toISOString().substring(0,10)}function Ih(n,e=vh){const t=[];let i=n.slice();for(const s of n){const a=t.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),zs(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zs(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Eh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ll()?hl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Hs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Hs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zs(n){return Bn(JSON.stringify({version:2,heartbeats:n})).length}function Th(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function Sh(n){ot(new Ge("platform-logger",e=>new Ul(e),"PRIVATE")),ot(new Ge("heartbeat",e=>new bh(e),"PRIVATE")),we(Kr,$s,n),we(Kr,$s,"esm2020"),we("fire-js","")}Sh("");var Ah="firebase",kh="12.2.1";/**
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
 */we(Ah,kh,"app");function aa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ch=aa,ca=new rn("auth","Firebase",aa());/**
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
 */const Wn=new fi("@firebase/auth");function xh(n,...e){Wn.logLevel<=V.WARN&&Wn.warn(`Auth (${At}): ${n}`,...e)}function Ln(n,...e){Wn.logLevel<=V.ERROR&&Wn.error(`Auth (${At}): ${n}`,...e)}/**
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
 */function Ie(n,...e){throw _i(n,...e)}function ge(n,...e){return _i(n,...e)}function mi(n,e,t){const i={...Ch(),[e]:t};return new rn("auth","Firebase",i).create(e,{appName:n.name})}function Ne(n){return mi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ph(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ie(n,"argument-error"),mi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _i(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ca.create(n,...e)}function R(n,e,...t){if(!n)throw _i(e,...t)}function Pe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ln(e),new Error(e)}function Oe(n,e){n||Pe(e)}/**
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
 */function Yr(){return typeof self<"u"&&self.location?.href||""}function Rh(){return Gs()==="http:"||Gs()==="https:"}function Gs(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Nh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rh()||ol()||"connection"in navigator)?navigator.onLine:!0}function Dh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class on{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oe(t>e,"Short delay should be less than long delay!"),this.isMobile=il()||al()}get(){return Nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yi(n,e){Oe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class la{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Oh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Mh=new on(3e4,6e4);function an(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function kt(n,e,t,i,s={}){return ha(n,s,async()=>{let a={},l={};i&&(e==="GET"?l=i:a={body:JSON.stringify(i)});const u=sn({key:n.config.apiKey,...l}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const _={method:e,headers:m,...a};return sl()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&lt(n.emulatorConfig.host)&&(_.credentials="include"),la.fetch()(await ua(n,n.config.apiHost,t,u),_)})}async function ha(n,e,t){n._canInitEmulator=!1;const i={...Oh,...e};try{const s=new Uh(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw xn(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const u=a.ok?l.errorMessage:l.error.message,[m,_]=u.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw xn(n,"credential-already-in-use",l);if(m==="EMAIL_EXISTS")throw xn(n,"email-already-in-use",l);if(m==="USER_DISABLED")throw xn(n,"user-disabled",l);const A=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw mi(n,A,_);Ie(n,A)}}catch(s){if(s instanceof Ee)throw s;Ie(n,"network-request-failed",{message:String(s)})}}async function vi(n,e,t,i,s={}){const a=await kt(n,e,t,i,s);return"mfaPendingCredential"in a&&Ie(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function ua(n,e,t,i){const s=`${e}${t}?${i}`,a=n,l=a.config.emulator?yi(n.config,s):`${n.config.apiScheme}://${s}`;return Lh.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}class Uh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ge(this.auth,"network-request-failed")),Mh.get())})}}function xn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ge(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Fh(n,e){return kt(n,"POST","/v1/accounts:delete",e)}async function zn(n,e){return kt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function qt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jh(n,e=!1){const t=me(n),i=await t.getIdToken(e),s=wi(i);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a?.sign_in_provider;return{claims:s,token:i,authTime:qt(Ur(s.auth_time)),issuedAtTime:qt(Ur(s.iat)),expirationTime:qt(Ur(s.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Ur(n){return Number(n)*1e3}function wi(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ln("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yo(t);return s?JSON.parse(s):(Ln("Failed to decode base64 JWT payload"),null)}catch(s){return Ln("Caught error parsing JWT payload as JSON",s?.toString()),null}}function qs(n){const e=wi(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function en(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ee&&Vh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Vh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class $h{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qt(this.lastLoginAt),this.creationTime=qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gn(n){const e=n.auth,t=await n.getIdToken(),i=await en(n,zn(e,{idToken:t}));R(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=s.providerUserInfo?.length?da(s.providerUserInfo):[],l=Hh(n.providerData,a),u=n.isAnonymous,m=!(n.email&&s.passwordHash)&&!l?.length,_=u?m:!1,A={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Qr(s.createdAt,s.lastLoginAt),isAnonymous:_};Object.assign(n,A)}async function Bh(n){const e=me(n);await Gn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hh(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function da(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Wh(n,e){const t=await ha(n,{},async()=>{const i=sn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,l=await ua(n,s,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:u,body:i};return n.emulatorConfig&&lt(n.emulatorConfig.host)&&(m.credentials="include"),la.fetch()(l,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zh(n,e){return kt(n,"POST","/v2/accounts:revokeToken",an(n,e))}/**
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
 */class _t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(e.length!==0,"internal-error");const t=qs(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await Wh(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,l=new _t;return i&&(R(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(R(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _t,this.toJSON())}_performRefresh(){return Pe("not implemented")}}/**
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
 */function Ve(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class de{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new $h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await en(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jh(this,e)}reload(){return Bh(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new de({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Gn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(oe(this.auth.app))return Promise.reject(Ne(this.auth));const e=await this.getIdToken();return await en(this,Fh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,u=t.tenantId??void 0,m=t._redirectEventId??void 0,_=t.createdAt??void 0,A=t.lastLoginAt??void 0,{uid:I,emailVerified:S,isAnonymous:C,providerData:k,stsTokenManager:O}=t;R(I&&O,e,"internal-error");const P=_t.fromJSON(this.name,O);R(typeof I=="string",e,"internal-error"),Ve(i,e.name),Ve(s,e.name),R(typeof S=="boolean",e,"internal-error"),R(typeof C=="boolean",e,"internal-error"),Ve(a,e.name),Ve(l,e.name),Ve(u,e.name),Ve(m,e.name),Ve(_,e.name),Ve(A,e.name);const D=new de({uid:I,auth:e,email:s,emailVerified:S,displayName:i,isAnonymous:C,photoURL:l,phoneNumber:a,tenantId:u,stsTokenManager:P,createdAt:_,lastLoginAt:A});return k&&Array.isArray(k)&&(D.providerData=k.map(N=>({...N}))),m&&(D._redirectEventId=m),D}static async _fromIdTokenResponse(e,t,i=!1){const s=new _t;s.updateFromServerResponse(t);const a=new de({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Gn(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];R(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?da(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!a?.length,u=new _t;u.updateFromIdToken(i);const m=new de({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:l}),_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!a?.length};return Object.assign(m,_),m}}/**
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
 */const Ks=new Map;function Re(n){Oe(n instanceof Function,"Expected a class definition");let e=Ks.get(n);return e?(Oe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ks.set(n,e),e)}/**
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
 */class fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fa.type="NONE";const Js=fa;/**
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
 */function Mn(n,e,t){return`firebase:${n}:${e}:${t}`}class yt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=Mn(this.userKey,s.apiKey,a),this.fullPersistenceKey=Mn("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zn(this.auth,{idToken:e}).catch(()=>{});return t?de._fromGetAccountInfoResponse(this.auth,t,e):null}return de._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new yt(Re(Js),e,i);const s=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=s[0]||Re(Js);const l=Mn(i,e.config.apiKey,e.name);let u=null;for(const _ of t)try{const A=await _._get(l);if(A){let I;if(typeof A=="string"){const S=await zn(e,{idToken:A}).catch(()=>{});if(!S)break;I=await de._fromGetAccountInfoResponse(e,S,A)}else I=de._fromJSON(e,A);_!==a&&(u=I),a=_;break}}catch{}const m=s.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new yt(a,e,i):(a=m[0],u&&await a._set(l,u.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(l)}catch{}})),new yt(a,e,i))}}/**
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
 */function Xs(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_a(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(va(e))return"Blackberry";if(wa(e))return"Webos";if(ga(e))return"Safari";if((e.includes("chrome/")||ma(e))&&!e.includes("edge/"))return"Chrome";if(ya(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function pa(n=se()){return/firefox\//i.test(n)}function ga(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ma(n=se()){return/crios\//i.test(n)}function _a(n=se()){return/iemobile/i.test(n)}function ya(n=se()){return/android/i.test(n)}function va(n=se()){return/blackberry/i.test(n)}function wa(n=se()){return/webos/i.test(n)}function bi(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gh(n=se()){return bi(n)&&!!window.navigator?.standalone}function qh(){return cl()&&document.documentMode===10}function ba(n=se()){return bi(n)||ya(n)||wa(n)||va(n)||/windows phone/i.test(n)||_a(n)}/**
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
 */function Ia(n,e=[]){let t;switch(n){case"Browser":t=Xs(se());break;case"Worker":t=`${Xs(se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${At}/${i}`}/**
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
 */class Kh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((l,u)=>{try{const m=e(a);l(m)}catch(m){u(m)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Jh(n,e={}){return kt(n,"GET","/v2/passwordPolicy",an(n,e))}/**
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
 */const Xh=6;class Yh{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Xh,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class Qh{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ys(this),this.idTokenSubscription=new Ys(this),this.beforeStateQueue=new Kh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ca,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Re(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await yt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zn(this,{idToken:e}),i=await de._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(oe(this.app))return Promise.reject(Ne(this));const t=e?me(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return oe(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return oe(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jh(this),t=new Yh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await zh(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Re(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await yt.create(this,[Re(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(u,this,"internal-error"),u.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,s);return()=>{l=!0,m()}}else{const m=e.addObserver(t);return()=>{l=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ia(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&xh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ct(n){return me(n)}class Ys{constructor(e){this.auth=e,this.observer=null,this.addObserver=gl(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ii={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zh(n){Ii=n}function eu(n){return Ii.loadJS(n)}function tu(){return Ii.gapiScript}function nu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ru(n,e){const t=rr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(st(a,e??{}))return s;Ie(s,"already-initialized")}return t.initialize({options:e})}function iu(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Re);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Ea(n,e,t){const i=Ct(n);R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=Ta(e),{host:l,port:u}=su(e),m=u===null?"":`:${u}`,_={url:`${a}//${l}${m}/`},A=Object.freeze({host:l,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){R(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),R(st(_,i.config.emulator)&&st(A,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=A,i.settings.appVerificationDisabledForTesting=!0,lt(l)?(ui(`${a}//${l}${m}`),di("Auth",!0)):ou()}function Ta(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function su(n){const e=Ta(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:Qs(i.substr(a.length+1))}}else{const[a,l]=i.split(":");return{host:a,port:Qs(l)}}}function Qs(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ou(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Sa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pe("not implemented")}_getIdTokenResponse(e){return Pe("not implemented")}_linkToIdToken(e,t){return Pe("not implemented")}_getReauthenticationResolver(e){return Pe("not implemented")}}/**
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
 */async function vt(n,e){return vi(n,"POST","/v1/accounts:signInWithIdp",an(n,e))}/**
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
 */const au="http://localhost";class at extends Sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new at(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...a}=t;if(!i||!s)return null;const l=new at(i,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return vt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,vt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vt(e,t)}buildRequest(){const e={requestUri:au,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sn(t)}return e}}/**
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
 */class Ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cn extends Ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $e extends cn{constructor(){super("facebook.com")}static credential(e){return at._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com";$e.PROVIDER_ID="facebook.com";/**
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
 */class ke extends cn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return at._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ke.credential(t,i)}catch{return null}}}ke.GOOGLE_SIGN_IN_METHOD="google.com";ke.PROVIDER_ID="google.com";/**
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
 */class Be extends cn{constructor(){super("github.com")}static credential(e){return at._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.GITHUB_SIGN_IN_METHOD="github.com";Be.PROVIDER_ID="github.com";/**
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
 */class He extends cn{constructor(){super("twitter.com")}static credential(e,t){return at._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return He.credential(t,i)}catch{return null}}}He.TWITTER_SIGN_IN_METHOD="twitter.com";He.PROVIDER_ID="twitter.com";/**
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
 */async function cu(n,e){return vi(n,"POST","/v1/accounts:signUp",an(n,e))}/**
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
 */class Le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await de._fromIdTokenResponse(e,i,s),l=Zs(i);return new Le({user:a,providerId:l,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Zs(i);return new Le({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Zs(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function lu(n){if(oe(n.app))return Promise.reject(Ne(n));const e=Ct(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Le({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await cu(e,{returnSecureToken:!0}),i=await Le._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class qn extends Ee{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,qn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new qn(e,t,i,s)}}function Aa(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?qn._fromErrorAndOperation(n,a,e,i):a})}async function hu(n,e,t=!1){const i=await en(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Le._forOperation(n,"link",i)}/**
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
 */async function uu(n,e,t=!1){const{auth:i}=n;if(oe(i.app))return Promise.reject(Ne(i));const s="reauthenticate";try{const a=await en(n,Aa(i,s,e,n),t);R(a.idToken,i,"internal-error");const l=wi(a.idToken);R(l,i,"internal-error");const{sub:u}=l;return R(n.uid===u,i,"user-mismatch"),Le._forOperation(n,s,a)}catch(a){throw a?.code==="auth/user-not-found"&&Ie(i,"user-mismatch"),a}}/**
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
 */async function du(n,e,t=!1){if(oe(n.app))return Promise.reject(Ne(n));const i="signIn",s=await Aa(n,i,e),a=await Le._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}/**
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
 */async function fu(n,e){return vi(n,"POST","/v1/accounts:signInWithCustomToken",an(n,e))}/**
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
 */async function pu(n,e){if(oe(n.app))return Promise.reject(Ne(n));const t=Ct(n),i=await fu(t,{token:e,returnSecureToken:!0}),s=await Le._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}function gu(n,e,t,i){return me(n).onIdTokenChanged(e,t,i)}function mu(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function ka(n,e,t,i){return me(n).onAuthStateChanged(e,t,i)}function _u(n){return me(n).signOut()}const Kn="__sak";/**
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
 */class Ca{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kn,"1"),this.storage.removeItem(Kn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const yu=1e3,vu=10;class xa extends Ca{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ba(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,m)=>{this.notifyListeners(l,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(i);!t&&this.localCache[i]===l||this.notifyListeners(i,l)},a=this.storage.getItem(i);qh()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},yu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xa.type="LOCAL";const wu=xa;/**
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
 */class Pa extends Ca{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pa.type="SESSION";const Ra=Pa;/**
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
 */function bu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ir(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,l=this.handlersMap[s];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(l).map(async _=>_(t.origin,a)),m=await bu(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ir.receivers=[];/**
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
 */function Ti(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Iu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((u,m)=>{const _=Ti("",20);s.port1.start();const A=setTimeout(()=>{m(new Error("unsupported_event"))},i);l={messageChannel:s,onMessage(I){const S=I;if(S.data.eventId===_)switch(S.data.status){case"ack":clearTimeout(A),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(S.data.response);break;default:clearTimeout(A),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function be(){return window}function Eu(n){be().location.href=n}/**
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
 */function Na(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function Tu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Su(){return navigator?.serviceWorker?.controller||null}function Au(){return Na()?self:null}/**
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
 */const Da="firebaseLocalStorageDb",ku=1,Jn="firebaseLocalStorage",Oa="fbase_key";class ln{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sr(n,e){return n.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function Cu(){const n=indexedDB.deleteDatabase(Da);return new ln(n).toPromise()}function Zr(){const n=indexedDB.open(Da,ku);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Jn,{keyPath:Oa})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Jn)?e(i):(i.close(),await Cu(),e(await Zr()))})})}async function eo(n,e,t){const i=sr(n,!0).put({[Oa]:e,value:t});return new ln(i).toPromise()}async function xu(n,e){const t=sr(n,!1).get(e),i=await new ln(t).toPromise();return i===void 0?null:i.value}function to(n,e){const t=sr(n,!0).delete(e);return new ln(t).toPromise()}const Pu=800,Ru=3;class La{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ru)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Na()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(Au()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Tu(),!this.activeServiceWorker)return;this.sender=new Iu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Su()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zr();return await eo(e,Kn,"1"),await to(e,Kn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>eo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>xu(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>to(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=sr(s,!1).getAll();return new ln(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}La.type="LOCAL";const Nu=La;new on(3e4,6e4);/**
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
 */function Ma(n,e){return e?Re(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Si extends Sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Du(n){return du(n.auth,new Si(n),n.bypassAuthState)}function Ou(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),uu(t,new Si(n),n.bypassAuthState)}async function Lu(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),hu(t,new Si(n),n.bypassAuthState)}/**
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
 */class Ua{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:l,type:u}=e;if(l){this.reject(l);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Du;case"linkViaPopup":case"linkViaRedirect":return Lu;case"reauthViaPopup":case"reauthViaRedirect":return Ou;default:Ie(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mu=new on(2e3,1e4);async function Uu(n,e,t){if(oe(n.app))return Promise.reject(ge(n,"operation-not-supported-in-this-environment"));const i=Ct(n);Ph(n,e,Ei);const s=Ma(i,t);return new tt(i,"signInViaPopup",e,s).executeNotNull()}class tt extends Ua{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,tt.currentPopupAction&&tt.currentPopupAction.cancel(),tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=Ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mu.get())};e()}}tt.currentPopupAction=null;/**
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
 */const Fu="pendingRedirect",Un=new Map;class ju extends Ua{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const i=await Vu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vu(n,e){const t=Hu(e),i=Bu(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function $u(n,e){Un.set(n._key(),e)}function Bu(n){return Re(n._redirectPersistence)}function Hu(n){return Mn(Fu,n.config.apiKey,n.name)}async function Wu(n,e,t=!1){if(oe(n.app))return Promise.reject(Ne(n));const i=Ct(n),s=Ma(i,e),l=await new ju(i,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
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
 */const zu=600*1e3;class Gu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Fa(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ge(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zu&&this.cachedEventUids.clear(),this.cachedEventUids.has(no(e))}saveEventToCache(e){this.cachedEventUids.add(no(e)),this.lastProcessedEventTime=Date.now()}}function no(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fa({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function qu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fa(n);default:return!1}}/**
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
 */async function Ku(n,e={}){return kt(n,"GET","/v1/projects",e)}/**
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
 */const Ju=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xu=/^https?/;async function Yu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ku(n);for(const t of e)try{if(Qu(t))return}catch{}Ie(n,"unauthorized-domain")}function Qu(n){const e=Yr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===i}if(!Xu.test(t))return!1;if(Ju.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Zu=new on(3e4,6e4);function ro(){const n=be().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ed(n){return new Promise((e,t)=>{function i(){ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ro(),t(ge(n,"network-request-failed"))},timeout:Zu.get()})}if(be().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(be().gapi?.load)i();else{const s=nu("iframefcb");return be()[s]=()=>{gapi.load?i():t(ge(n,"network-request-failed"))},eu(`${tu()}?onload=${s}`).catch(a=>t(a))}}).catch(e=>{throw Fn=null,e})}let Fn=null;function td(n){return Fn=Fn||ed(n),Fn}/**
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
 */const nd=new on(5e3,15e3),rd="__/auth/iframe",id="emulator/auth/iframe",sd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},od=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ad(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yi(e,id):`https://${n.config.authDomain}/${rd}`,i={apiKey:e.apiKey,appName:n.name,v:At},s=od.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${sn(i).slice(1)}`}async function cd(n){const e=await td(n),t=be().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:ad(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sd,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const l=ge(n,"network-request-failed"),u=be().setTimeout(()=>{a(l)},nd.get());function m(){be().clearTimeout(u),s(i)}i.ping(m).then(m,()=>{a(l)})}))}/**
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
 */const ld={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hd=500,ud=600,dd="_blank",fd="http://localhost";class io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pd(n,e,t,i=hd,s=ud){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const m={...ld,width:i.toString(),height:s.toString(),top:a,left:l},_=se().toLowerCase();t&&(u=ma(_)?dd:t),pa(_)&&(e=e||fd,m.scrollbars="yes");const A=Object.entries(m).reduce((S,[C,k])=>`${S}${C}=${k},`,"");if(Gh(_)&&u!=="_self")return gd(e||"",u),new io(null);const I=window.open(e||"",u,A);R(I,n,"popup-blocked");try{I.focus()}catch{}return new io(I)}function gd(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const md="__/auth/handler",_d="emulator/auth/handler",yd=encodeURIComponent("fac");async function so(n,e,t,i,s,a){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:At,eventId:s};if(e instanceof Ei){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",pl(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,I]of Object.entries({}))l[A]=I}if(e instanceof cn){const A=e.getScopes().filter(I=>I!=="");A.length>0&&(l.scopes=A.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const A of Object.keys(u))u[A]===void 0&&delete u[A];const m=await n._getAppCheckToken(),_=m?`#${yd}=${encodeURIComponent(m)}`:"";return`${vd(n)}?${sn(u).slice(1)}${_}`}function vd({config:n}){return n.emulator?yi(n,_d):`https://${n.authDomain}/${md}`}/**
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
 */const Fr="webStorageSupport";class wd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ra,this._completeRedirectFn=Wu,this._overrideRedirectResult=$u}async _openPopup(e,t,i,s){Oe(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await so(e,t,i,Yr(),s);return pd(e,a,Ti())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await so(e,t,i,Yr(),s);return Eu(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Oe(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await cd(e),i=new Gu(e);return t.register("authEvent",s=>(R(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fr,{type:Fr},s=>{const a=s?.[0]?.[Fr];a!==void 0&&t(!!a),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ba()||ga()||bi()}}const bd=wd;var oo="@firebase/auth",ao="1.11.0";/**
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
 */class Id{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ed(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Td(n){ot(new Ge("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;R(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ia(n)},_=new Qh(i,s,a,m);return iu(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ot(new Ge("auth-internal",e=>{const t=Ct(e.getProvider("auth").getImmediate());return(i=>new Id(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),we(oo,ao,Ed(n)),we(oo,ao,"esm2020")}/**
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
 */const Sd=300,Ad=ta("authIdTokenMaxAge")||Sd;let co=null;const kd=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ad)return;const s=t?.token;co!==s&&(co=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cd(n=gi()){const e=rr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ru(n,{popupRedirectResolver:bd,persistence:[Nu,wu,Ra]}),i=ta("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const l=kd(a.toString());mu(t,l,()=>l(t.currentUser)),gu(t,u=>l(u))}}const s=Qo("auth");return s&&Ea(t,`http://${s}`),t}function xd(){return document.getElementsByTagName("head")?.[0]??document}Zh({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=ge("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",xd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Td("Browser");var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ai;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,f){function d(){}d.prototype=f.prototype,w.D=f.prototype,w.prototype=new d,w.prototype.constructor=w,w.C=function(y,v,E){for(var g=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)g[Te-2]=arguments[Te];return f.prototype[v].apply(y,g)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,f,d){d||(d=0);var y=Array(16);if(typeof f=="string")for(var v=0;16>v;++v)y[v]=f.charCodeAt(d++)|f.charCodeAt(d++)<<8|f.charCodeAt(d++)<<16|f.charCodeAt(d++)<<24;else for(v=0;16>v;++v)y[v]=f[d++]|f[d++]<<8|f[d++]<<16|f[d++]<<24;f=w.g[0],d=w.g[1],v=w.g[2];var E=w.g[3],g=f+(E^d&(v^E))+y[0]+3614090360&4294967295;f=d+(g<<7&4294967295|g>>>25),g=E+(v^f&(d^v))+y[1]+3905402710&4294967295,E=f+(g<<12&4294967295|g>>>20),g=v+(d^E&(f^d))+y[2]+606105819&4294967295,v=E+(g<<17&4294967295|g>>>15),g=d+(f^v&(E^f))+y[3]+3250441966&4294967295,d=v+(g<<22&4294967295|g>>>10),g=f+(E^d&(v^E))+y[4]+4118548399&4294967295,f=d+(g<<7&4294967295|g>>>25),g=E+(v^f&(d^v))+y[5]+1200080426&4294967295,E=f+(g<<12&4294967295|g>>>20),g=v+(d^E&(f^d))+y[6]+2821735955&4294967295,v=E+(g<<17&4294967295|g>>>15),g=d+(f^v&(E^f))+y[7]+4249261313&4294967295,d=v+(g<<22&4294967295|g>>>10),g=f+(E^d&(v^E))+y[8]+1770035416&4294967295,f=d+(g<<7&4294967295|g>>>25),g=E+(v^f&(d^v))+y[9]+2336552879&4294967295,E=f+(g<<12&4294967295|g>>>20),g=v+(d^E&(f^d))+y[10]+4294925233&4294967295,v=E+(g<<17&4294967295|g>>>15),g=d+(f^v&(E^f))+y[11]+2304563134&4294967295,d=v+(g<<22&4294967295|g>>>10),g=f+(E^d&(v^E))+y[12]+1804603682&4294967295,f=d+(g<<7&4294967295|g>>>25),g=E+(v^f&(d^v))+y[13]+4254626195&4294967295,E=f+(g<<12&4294967295|g>>>20),g=v+(d^E&(f^d))+y[14]+2792965006&4294967295,v=E+(g<<17&4294967295|g>>>15),g=d+(f^v&(E^f))+y[15]+1236535329&4294967295,d=v+(g<<22&4294967295|g>>>10),g=f+(v^E&(d^v))+y[1]+4129170786&4294967295,f=d+(g<<5&4294967295|g>>>27),g=E+(d^v&(f^d))+y[6]+3225465664&4294967295,E=f+(g<<9&4294967295|g>>>23),g=v+(f^d&(E^f))+y[11]+643717713&4294967295,v=E+(g<<14&4294967295|g>>>18),g=d+(E^f&(v^E))+y[0]+3921069994&4294967295,d=v+(g<<20&4294967295|g>>>12),g=f+(v^E&(d^v))+y[5]+3593408605&4294967295,f=d+(g<<5&4294967295|g>>>27),g=E+(d^v&(f^d))+y[10]+38016083&4294967295,E=f+(g<<9&4294967295|g>>>23),g=v+(f^d&(E^f))+y[15]+3634488961&4294967295,v=E+(g<<14&4294967295|g>>>18),g=d+(E^f&(v^E))+y[4]+3889429448&4294967295,d=v+(g<<20&4294967295|g>>>12),g=f+(v^E&(d^v))+y[9]+568446438&4294967295,f=d+(g<<5&4294967295|g>>>27),g=E+(d^v&(f^d))+y[14]+3275163606&4294967295,E=f+(g<<9&4294967295|g>>>23),g=v+(f^d&(E^f))+y[3]+4107603335&4294967295,v=E+(g<<14&4294967295|g>>>18),g=d+(E^f&(v^E))+y[8]+1163531501&4294967295,d=v+(g<<20&4294967295|g>>>12),g=f+(v^E&(d^v))+y[13]+2850285829&4294967295,f=d+(g<<5&4294967295|g>>>27),g=E+(d^v&(f^d))+y[2]+4243563512&4294967295,E=f+(g<<9&4294967295|g>>>23),g=v+(f^d&(E^f))+y[7]+1735328473&4294967295,v=E+(g<<14&4294967295|g>>>18),g=d+(E^f&(v^E))+y[12]+2368359562&4294967295,d=v+(g<<20&4294967295|g>>>12),g=f+(d^v^E)+y[5]+4294588738&4294967295,f=d+(g<<4&4294967295|g>>>28),g=E+(f^d^v)+y[8]+2272392833&4294967295,E=f+(g<<11&4294967295|g>>>21),g=v+(E^f^d)+y[11]+1839030562&4294967295,v=E+(g<<16&4294967295|g>>>16),g=d+(v^E^f)+y[14]+4259657740&4294967295,d=v+(g<<23&4294967295|g>>>9),g=f+(d^v^E)+y[1]+2763975236&4294967295,f=d+(g<<4&4294967295|g>>>28),g=E+(f^d^v)+y[4]+1272893353&4294967295,E=f+(g<<11&4294967295|g>>>21),g=v+(E^f^d)+y[7]+4139469664&4294967295,v=E+(g<<16&4294967295|g>>>16),g=d+(v^E^f)+y[10]+3200236656&4294967295,d=v+(g<<23&4294967295|g>>>9),g=f+(d^v^E)+y[13]+681279174&4294967295,f=d+(g<<4&4294967295|g>>>28),g=E+(f^d^v)+y[0]+3936430074&4294967295,E=f+(g<<11&4294967295|g>>>21),g=v+(E^f^d)+y[3]+3572445317&4294967295,v=E+(g<<16&4294967295|g>>>16),g=d+(v^E^f)+y[6]+76029189&4294967295,d=v+(g<<23&4294967295|g>>>9),g=f+(d^v^E)+y[9]+3654602809&4294967295,f=d+(g<<4&4294967295|g>>>28),g=E+(f^d^v)+y[12]+3873151461&4294967295,E=f+(g<<11&4294967295|g>>>21),g=v+(E^f^d)+y[15]+530742520&4294967295,v=E+(g<<16&4294967295|g>>>16),g=d+(v^E^f)+y[2]+3299628645&4294967295,d=v+(g<<23&4294967295|g>>>9),g=f+(v^(d|~E))+y[0]+4096336452&4294967295,f=d+(g<<6&4294967295|g>>>26),g=E+(d^(f|~v))+y[7]+1126891415&4294967295,E=f+(g<<10&4294967295|g>>>22),g=v+(f^(E|~d))+y[14]+2878612391&4294967295,v=E+(g<<15&4294967295|g>>>17),g=d+(E^(v|~f))+y[5]+4237533241&4294967295,d=v+(g<<21&4294967295|g>>>11),g=f+(v^(d|~E))+y[12]+1700485571&4294967295,f=d+(g<<6&4294967295|g>>>26),g=E+(d^(f|~v))+y[3]+2399980690&4294967295,E=f+(g<<10&4294967295|g>>>22),g=v+(f^(E|~d))+y[10]+4293915773&4294967295,v=E+(g<<15&4294967295|g>>>17),g=d+(E^(v|~f))+y[1]+2240044497&4294967295,d=v+(g<<21&4294967295|g>>>11),g=f+(v^(d|~E))+y[8]+1873313359&4294967295,f=d+(g<<6&4294967295|g>>>26),g=E+(d^(f|~v))+y[15]+4264355552&4294967295,E=f+(g<<10&4294967295|g>>>22),g=v+(f^(E|~d))+y[6]+2734768916&4294967295,v=E+(g<<15&4294967295|g>>>17),g=d+(E^(v|~f))+y[13]+1309151649&4294967295,d=v+(g<<21&4294967295|g>>>11),g=f+(v^(d|~E))+y[4]+4149444226&4294967295,f=d+(g<<6&4294967295|g>>>26),g=E+(d^(f|~v))+y[11]+3174756917&4294967295,E=f+(g<<10&4294967295|g>>>22),g=v+(f^(E|~d))+y[2]+718787259&4294967295,v=E+(g<<15&4294967295|g>>>17),g=d+(E^(v|~f))+y[9]+3951481745&4294967295,w.g[0]=w.g[0]+f&4294967295,w.g[1]=w.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+E&4294967295}i.prototype.u=function(w,f){f===void 0&&(f=w.length);for(var d=f-this.blockSize,y=this.B,v=this.h,E=0;E<f;){if(v==0)for(;E<=d;)s(this,w,E),E+=this.blockSize;if(typeof w=="string"){for(;E<f;)if(y[v++]=w.charCodeAt(E++),v==this.blockSize){s(this,y),v=0;break}}else for(;E<f;)if(y[v++]=w[E++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=f},i.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var f=1;f<w.length-8;++f)w[f]=0;var d=8*this.o;for(f=w.length-8;f<w.length;++f)w[f]=d&255,d/=256;for(this.u(w),w=Array(16),f=d=0;4>f;++f)for(var y=0;32>y;y+=8)w[d++]=this.g[f]>>>y&255;return w};function a(w,f){var d=u;return Object.prototype.hasOwnProperty.call(d,w)?d[w]:d[w]=f(w)}function l(w,f){this.h=f;for(var d=[],y=!0,v=w.length-1;0<=v;v--){var E=w[v]|0;y&&E==f||(d[v]=E,y=!1)}this.g=d}var u={};function m(w){return-128<=w&&128>w?a(w,function(f){return new l([f|0],0>f?-1:0)}):new l([w|0],0>w?-1:0)}function _(w){if(isNaN(w)||!isFinite(w))return I;if(0>w)return P(_(-w));for(var f=[],d=1,y=0;w>=d;y++)f[y]=w/d|0,d*=4294967296;return new l(f,0)}function A(w,f){if(w.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(w.charAt(0)=="-")return P(A(w.substring(1),f));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var d=_(Math.pow(f,8)),y=I,v=0;v<w.length;v+=8){var E=Math.min(8,w.length-v),g=parseInt(w.substring(v,v+E),f);8>E?(E=_(Math.pow(f,E)),y=y.j(E).add(_(g))):(y=y.j(d),y=y.add(_(g)))}return y}var I=m(0),S=m(1),C=m(16777216);n=l.prototype,n.m=function(){if(O(this))return-P(this).m();for(var w=0,f=1,d=0;d<this.g.length;d++){var y=this.i(d);w+=(0<=y?y:4294967296+y)*f,f*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(O(this))return"-"+P(this).toString(w);for(var f=_(Math.pow(w,6)),d=this,y="";;){var v=z(d,f).g;d=D(d,v.j(f));var E=((0<d.g.length?d.g[0]:d.h)>>>0).toString(w);if(d=v,k(d))return E+y;for(;6>E.length;)E="0"+E;y=E+y}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var f=0;f<w.g.length;f++)if(w.g[f]!=0)return!1;return!0}function O(w){return w.h==-1}n.l=function(w){return w=D(this,w),O(w)?-1:k(w)?0:1};function P(w){for(var f=w.g.length,d=[],y=0;y<f;y++)d[y]=~w.g[y];return new l(d,~w.h).add(S)}n.abs=function(){return O(this)?P(this):this},n.add=function(w){for(var f=Math.max(this.g.length,w.g.length),d=[],y=0,v=0;v<=f;v++){var E=y+(this.i(v)&65535)+(w.i(v)&65535),g=(E>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);y=g>>>16,E&=65535,g&=65535,d[v]=g<<16|E}return new l(d,d[d.length-1]&-2147483648?-1:0)};function D(w,f){return w.add(P(f))}n.j=function(w){if(k(this)||k(w))return I;if(O(this))return O(w)?P(this).j(P(w)):P(P(this).j(w));if(O(w))return P(this.j(P(w)));if(0>this.l(C)&&0>w.l(C))return _(this.m()*w.m());for(var f=this.g.length+w.g.length,d=[],y=0;y<2*f;y++)d[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<w.g.length;v++){var E=this.i(y)>>>16,g=this.i(y)&65535,Te=w.i(v)>>>16,xt=w.i(v)&65535;d[2*y+2*v]+=g*xt,N(d,2*y+2*v),d[2*y+2*v+1]+=E*xt,N(d,2*y+2*v+1),d[2*y+2*v+1]+=g*Te,N(d,2*y+2*v+1),d[2*y+2*v+2]+=E*Te,N(d,2*y+2*v+2)}for(y=0;y<f;y++)d[y]=d[2*y+1]<<16|d[2*y];for(y=f;y<2*f;y++)d[y]=0;return new l(d,0)};function N(w,f){for(;(w[f]&65535)!=w[f];)w[f+1]+=w[f]>>>16,w[f]&=65535,f++}function $(w,f){this.g=w,this.h=f}function z(w,f){if(k(f))throw Error("division by zero");if(k(w))return new $(I,I);if(O(w))return f=z(P(w),f),new $(P(f.g),P(f.h));if(O(f))return f=z(w,P(f)),new $(P(f.g),f.h);if(30<w.g.length){if(O(w)||O(f))throw Error("slowDivide_ only works with positive integers.");for(var d=S,y=f;0>=y.l(w);)d=ce(d),y=ce(y);var v=K(d,1),E=K(y,1);for(y=K(y,2),d=K(d,2);!k(y);){var g=E.add(y);0>=g.l(w)&&(v=v.add(d),E=g),y=K(y,1),d=K(d,1)}return f=D(w,v.j(f)),new $(v,f)}for(v=I;0<=w.l(f);){for(d=Math.max(1,Math.floor(w.m()/f.m())),y=Math.ceil(Math.log(d)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),E=_(d),g=E.j(f);O(g)||0<g.l(w);)d-=y,E=_(d),g=E.j(f);k(E)&&(E=S),v=v.add(E),w=D(w,g)}return new $(v,w)}n.A=function(w){return z(this,w).h},n.and=function(w){for(var f=Math.max(this.g.length,w.g.length),d=[],y=0;y<f;y++)d[y]=this.i(y)&w.i(y);return new l(d,this.h&w.h)},n.or=function(w){for(var f=Math.max(this.g.length,w.g.length),d=[],y=0;y<f;y++)d[y]=this.i(y)|w.i(y);return new l(d,this.h|w.h)},n.xor=function(w){for(var f=Math.max(this.g.length,w.g.length),d=[],y=0;y<f;y++)d[y]=this.i(y)^w.i(y);return new l(d,this.h^w.h)};function ce(w){for(var f=w.g.length+1,d=[],y=0;y<f;y++)d[y]=w.i(y)<<1|w.i(y-1)>>>31;return new l(d,w.h)}function K(w,f){var d=f>>5;f%=32;for(var y=w.g.length-d,v=[],E=0;E<y;E++)v[E]=0<f?w.i(E+d)>>>f|w.i(E+d+1)<<32-f:w.i(E+d);return new l(v,w.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=A,Ai=l}).apply(typeof lo<"u"?lo:typeof self<"u"?self:typeof window<"u"?window:{});var Pn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,o,c){return r==Array.prototype||r==Object.prototype||(r[o]=c.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pn=="object"&&Pn];for(var o=0;o<r.length;++o){var c=r[o];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=t(this);function s(r,o){if(o)e:{var c=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var b=r[h];if(!(b in c))break e;c=c[b]}r=r[r.length-1],h=c[r],o=o(h),o!=h&&o!=null&&e(c,r,{configurable:!0,writable:!0,value:o})}}function a(r,o){r instanceof String&&(r+="");var c=0,h=!1,b={next:function(){if(!h&&c<r.length){var T=c++;return{value:o(T,r[T]),done:!1}}return h=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(r){return r||function(){return a(this,function(o,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function m(r){var o=typeof r;return o=o!="object"?o:r?Array.isArray(r)?"array":o:"null",o=="array"||o=="object"&&typeof r.length=="number"}function _(r){var o=typeof r;return o=="object"&&r!=null||o=="function"}function A(r,o,c){return r.call.apply(r.bind,arguments)}function I(r,o,c){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,h),r.apply(o,b)}}return function(){return r.apply(o,arguments)}}function S(r,o,c){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:I,S.apply(null,arguments)}function C(r,o){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function k(r,o){function c(){}c.prototype=o.prototype,r.aa=o.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(h,b,T){for(var x=Array(arguments.length-2),B=2;B<arguments.length;B++)x[B-2]=arguments[B];return o.prototype[b].apply(h,x)}}function O(r){const o=r.length;if(0<o){const c=Array(o);for(let h=0;h<o;h++)c[h]=r[h];return c}return[]}function P(r,o){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(m(h)){const b=r.length||0,T=h.length||0;r.length=b+T;for(let x=0;x<T;x++)r[b+x]=h[x]}else r.push(h)}}class D{constructor(o,c){this.i=o,this.j=c,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function N(r){return/^[\s\xa0]*$/.test(r)}function $(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function z(r){return z[" "](r),r}z[" "]=function(){};var ce=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function K(r,o,c){for(const h in r)o.call(c,r[h],h,r)}function w(r,o){for(const c in r)o.call(void 0,r[c],c,r)}function f(r){const o={};for(const c in r)o[c]=r[c];return o}const d="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(r,o){let c,h;for(let b=1;b<arguments.length;b++){h=arguments[b];for(c in h)r[c]=h[c];for(let T=0;T<d.length;T++)c=d[T],Object.prototype.hasOwnProperty.call(h,c)&&(r[c]=h[c])}}function v(r){var o=1;r=r.split(":");const c=[];for(;0<o&&r.length;)c.push(r.shift()),o--;return r.length&&c.push(r.join(":")),c}function E(r){u.setTimeout(()=>{throw r},0)}function g(){var r=or;let o=null;return r.g&&(o=r.g,r.g=r.g.next,r.g||(r.h=null),o.next=null),o}class Te{constructor(){this.h=this.g=null}add(o,c){const h=xt.get();h.set(o,c),this.h?this.h.next=h:this.g=h,this.h=h}}var xt=new D(()=>new tc,r=>r.reset());class tc{constructor(){this.next=this.g=this.h=null}set(o,c){this.h=o,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Pt,Rt=!1,or=new Te,Di=()=>{const r=u.Promise.resolve(void 0);Pt=()=>{r.then(nc)}};var nc=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(c){E(c)}var o=xt;o.j(r),100>o.h&&(o.h++,r.next=o.g,o.g=r)}Rt=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(r,o){this.type=r,this.g=this.target=o,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var rc=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,o=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};u.addEventListener("test",c,o),u.removeEventListener("test",c,o)}catch{}return r})();function Nt(r,o){if(Q.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=o,o=r.relatedTarget){if(ce){e:{try{z(o.nodeName);var b=!0;break e}catch{}b=!1}b||(o=null)}}else c=="mouseover"?o=r.fromElement:c=="mouseout"&&(o=r.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ic[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Nt.aa.h.call(this)}}k(Nt,Q);var ic={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),sc=0;function oc(r,o,c,h,b){this.listener=r,this.proxy=null,this.src=o,this.type=c,this.capture=!!h,this.ha=b,this.key=++sc,this.da=this.fa=!1}function fn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function pn(r){this.src=r,this.g={},this.h=0}pn.prototype.add=function(r,o,c,h,b){var T=r.toString();r=this.g[T],r||(r=this.g[T]=[],this.h++);var x=cr(r,o,h,b);return-1<x?(o=r[x],c||(o.fa=!1)):(o=new oc(o,this.src,T,!!h,b),o.fa=c,r.push(o)),o};function ar(r,o){var c=o.type;if(c in r.g){var h=r.g[c],b=Array.prototype.indexOf.call(h,o,void 0),T;(T=0<=b)&&Array.prototype.splice.call(h,b,1),T&&(fn(o),r.g[c].length==0&&(delete r.g[c],r.h--))}}function cr(r,o,c,h){for(var b=0;b<r.length;++b){var T=r[b];if(!T.da&&T.listener==o&&T.capture==!!c&&T.ha==h)return b}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),hr={};function Oi(r,o,c,h,b){if(Array.isArray(o)){for(var T=0;T<o.length;T++)Oi(r,o[T],c,h,b);return null}return c=Ui(c),r&&r[dn]?r.K(o,c,_(h)?!!h.capture:!1,b):ac(r,o,c,!1,h,b)}function ac(r,o,c,h,b,T){if(!o)throw Error("Invalid event type");var x=_(b)?!!b.capture:!!b,B=dr(r);if(B||(r[lr]=B=new pn(r)),c=B.add(o,c,h,x,T),c.proxy)return c;if(h=cc(),c.proxy=h,h.src=r,h.listener=c,r.addEventListener)rc||(b=x),b===void 0&&(b=!1),r.addEventListener(o.toString(),h,b);else if(r.attachEvent)r.attachEvent(Mi(o.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function cc(){function r(c){return o.call(r.src,r.listener,c)}const o=lc;return r}function Li(r,o,c,h,b){if(Array.isArray(o))for(var T=0;T<o.length;T++)Li(r,o[T],c,h,b);else h=_(h)?!!h.capture:!!h,c=Ui(c),r&&r[dn]?(r=r.i,o=String(o).toString(),o in r.g&&(T=r.g[o],c=cr(T,c,h,b),-1<c&&(fn(T[c]),Array.prototype.splice.call(T,c,1),T.length==0&&(delete r.g[o],r.h--)))):r&&(r=dr(r))&&(o=r.g[o.toString()],r=-1,o&&(r=cr(o,c,h,b)),(c=-1<r?o[r]:null)&&ur(c))}function ur(r){if(typeof r!="number"&&r&&!r.da){var o=r.src;if(o&&o[dn])ar(o.i,r);else{var c=r.type,h=r.proxy;o.removeEventListener?o.removeEventListener(c,h,r.capture):o.detachEvent?o.detachEvent(Mi(c),h):o.addListener&&o.removeListener&&o.removeListener(h),(c=dr(o))?(ar(c,r),c.h==0&&(c.src=null,o[lr]=null)):fn(r)}}}function Mi(r){return r in hr?hr[r]:hr[r]="on"+r}function lc(r,o){if(r.da)r=!0;else{o=new Nt(o,this);var c=r.listener,h=r.ha||r.src;r.fa&&ur(r),r=c.call(h,o)}return r}function dr(r){return r=r[lr],r instanceof pn?r:null}var fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ui(r){return typeof r=="function"?r:(r[fr]||(r[fr]=function(o){return r.handleEvent(o)}),r[fr])}function Z(){Me.call(this),this.i=new pn(this),this.M=this,this.F=null}k(Z,Me),Z.prototype[dn]=!0,Z.prototype.removeEventListener=function(r,o,c,h){Li(this,r,o,c,h)};function ne(r,o){var c,h=r.F;if(h)for(c=[];h;h=h.F)c.push(h);if(r=r.M,h=o.type||o,typeof o=="string")o=new Q(o,r);else if(o instanceof Q)o.target=o.target||r;else{var b=o;o=new Q(h,r),y(o,b)}if(b=!0,c)for(var T=c.length-1;0<=T;T--){var x=o.g=c[T];b=gn(x,h,!0,o)&&b}if(x=o.g=r,b=gn(x,h,!0,o)&&b,b=gn(x,h,!1,o)&&b,c)for(T=0;T<c.length;T++)x=o.g=c[T],b=gn(x,h,!1,o)&&b}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var r=this.i,o;for(o in r.g){for(var c=r.g[o],h=0;h<c.length;h++)fn(c[h]);delete r.g[o],r.h--}}this.F=null},Z.prototype.K=function(r,o,c,h){return this.i.add(String(r),o,!1,c,h)},Z.prototype.L=function(r,o,c,h){return this.i.add(String(r),o,!0,c,h)};function gn(r,o,c,h){if(o=r.i.g[String(o)],!o)return!0;o=o.concat();for(var b=!0,T=0;T<o.length;++T){var x=o[T];if(x&&!x.da&&x.capture==c){var B=x.listener,Y=x.ha||x.src;x.fa&&ar(r.i,x),b=B.call(Y,h)!==!1&&b}}return b&&!h.defaultPrevented}function Fi(r,o,c){if(typeof r=="function")c&&(r=S(r,c));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:u.setTimeout(r,o||0)}function ji(r){r.g=Fi(()=>{r.g=null,r.i&&(r.i=!1,ji(r))},r.l);const o=r.h;r.h=null,r.m.apply(null,o)}class hc extends Me{constructor(o,c){super(),this.m=o,this.l=c,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:ji(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(r){Me.call(this),this.h=r,this.g={}}k(Dt,Me);var Vi=[];function $i(r){K(r.g,function(o,c){this.g.hasOwnProperty(c)&&ur(o)},r),r.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),$i(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=u.JSON.stringify,uc=u.JSON.parse,dc=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function gr(){}gr.prototype.h=null;function Bi(r){return r.h||(r.h=r.i())}function fc(){}var Ot={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mr(){Q.call(this,"d")}k(mr,Q);function _r(){Q.call(this,"c")}k(_r,Q);var dt={},Hi=null;function yr(){return Hi=Hi||new Z}dt.La="serverreachability";function Wi(r){Q.call(this,dt.La,r)}k(Wi,Q);function Lt(r){const o=yr();ne(o,new Wi(o))}dt.STAT_EVENT="statevent";function zi(r,o){Q.call(this,dt.STAT_EVENT,r),this.stat=o}k(zi,Q);function re(r){const o=yr();ne(o,new zi(o,r))}dt.Ma="timingevent";function Gi(r,o){Q.call(this,dt.Ma,r),this.size=o}k(Gi,Q);function Mt(r,o){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},o)}function Ut(){this.g=!0}Ut.prototype.xa=function(){this.g=!1};function pc(r,o,c,h,b,T){r.info(function(){if(r.g)if(T)for(var x="",B=T.split("&"),Y=0;Y<B.length;Y++){var j=B[Y].split("=");if(1<j.length){var ee=j[0];j=j[1];var te=ee.split("_");x=2<=te.length&&te[1]=="type"?x+(ee+"="+j+"&"):x+(ee+"=redacted&")}}else x=null;else x=T;return"XMLHTTP REQ ("+h+") [attempt "+b+"]: "+o+`
`+c+`
`+x})}function gc(r,o,c,h,b,T,x){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+b+"]: "+o+`
`+c+`
`+T+" "+x})}function ft(r,o,c,h){r.info(function(){return"XMLHTTP TEXT ("+o+"): "+_c(r,c)+(h?" "+h:"")})}function mc(r,o){r.info(function(){return"TIMEOUT: "+o})}Ut.prototype.info=function(){};function _c(r,o){if(!r.g)return o;if(!o)return null;try{var c=JSON.parse(o);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var h=c[r];if(!(2>h.length)){var b=h[1];if(Array.isArray(b)&&!(1>b.length)){var T=b[0];if(T!="noop"&&T!="stop"&&T!="close")for(var x=1;x<b.length;x++)b[x]=""}}}}return pr(c)}catch{return o}}var vr={NO_ERROR:0,TIMEOUT:8},yc={},wr;function mn(){}k(mn,gr),mn.prototype.g=function(){return new XMLHttpRequest},mn.prototype.i=function(){return{}},wr=new mn;function Ue(r,o,c,h){this.j=r,this.i=o,this.l=c,this.R=h||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qi}function qi(){this.i=null,this.g="",this.h=!1}var Ki={},br={};function Ir(r,o,c){r.L=1,r.v=wn(Se(o)),r.m=c,r.P=!0,Ji(r,null)}function Ji(r,o){r.F=Date.now(),_n(r),r.A=Se(r.v);var c=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),ls(c.i,"t",h),r.C=0,c=r.j.J,r.h=new qi,r.g=ks(r.j,c?o:null,!r.m),0<r.O&&(r.M=new hc(S(r.Y,r,r.g),r.O)),o=r.U,c=r.g,h=r.ca;var b="readystatechange";Array.isArray(b)||(b&&(Vi[0]=b.toString()),b=Vi);for(var T=0;T<b.length;T++){var x=Oi(c,b[T],h||o.handleEvent,!1,o.h||o);if(!x)break;o.g[x.key]=x}o=r.H?f(r.H):{},r.m?(r.u||(r.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,o)):(r.u="GET",r.g.ea(r.A,r.u,null,o)),Lt(),pc(r.i,r.u,r.A,r.l,r.R,r.m)}Ue.prototype.ca=function(r){r=r.target;const o=this.M;o&&Ae(r)==3?o.j():this.Y(r)},Ue.prototype.Y=function(r){try{if(r==this.g)e:{const te=Ae(this.g);var o=this.g.Ba();const mt=this.g.Z();if(!(3>te)&&(te!=3||this.g&&(this.h.h||this.g.oa()||ms(this.g)))){this.J||te!=4||o==7||(o==8||0>=mt?Lt(3):Lt(2)),Er(this);var c=this.g.Z();this.X=c;t:if(Xi(this)){var h=ms(this.g);r="";var b=h.length,T=Ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Je(this),Ft(this);var x="";break t}this.h.i=new u.TextDecoder}for(o=0;o<b;o++)this.h.h=!0,r+=this.h.i.decode(h[o],{stream:!(T&&o==b-1)});h.length=0,this.h.g+=r,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=c==200,gc(this.i,this.u,this.A,this.l,this.R,te,c),this.o){if(this.T&&!this.K){t:{if(this.g){var B,Y=this.g;if((B=Y.g?Y.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(B)){var j=B;break t}}j=null}if(c=j)ft(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tr(this,c);else{this.o=!1,this.s=3,re(12),Je(this),Ft(this);break e}}if(this.P){c=!0;let he;for(;!this.J&&this.C<x.length;)if(he=vc(this,x),he==br){te==4&&(this.s=4,re(14),c=!1),ft(this.i,this.l,null,"[Incomplete Response]");break}else if(he==Ki){this.s=4,re(15),ft(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else ft(this.i,this.l,he,null),Tr(this,he);if(Xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||x.length!=0||this.h.h||(this.s=1,re(16),c=!1),this.o=this.o&&c,!c)ft(this.i,this.l,x,"[Invalid Chunked Response]"),Je(this),Ft(this);else if(0<x.length&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.ba&&!ee.M&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Pr(ee),ee.M=!0,re(11))}}else ft(this.i,this.l,x,null),Tr(this,x);te==4&&Je(this),this.o&&!this.J&&(te==4?Es(this.j,this):(this.o=!1,_n(this)))}else Mc(this.g),c==400&&0<x.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Je(this),Ft(this)}}}catch{}finally{}};function Xi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function vc(r,o){var c=r.C,h=o.indexOf(`
`,c);return h==-1?br:(c=Number(o.substring(c,h)),isNaN(c)?Ki:(h+=1,h+c>o.length?br:(o=o.slice(h,h+c),r.C=h+c,o)))}Ue.prototype.cancel=function(){this.J=!0,Je(this)};function _n(r){r.S=Date.now()+r.I,Yi(r,r.I)}function Yi(r,o){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Mt(S(r.ba,r),o)}function Er(r){r.B&&(u.clearTimeout(r.B),r.B=null)}Ue.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(mc(this.i,this.A),this.L!=2&&(Lt(),re(17)),Je(this),this.s=2,Ft(this)):Yi(this,this.S-r)};function Ft(r){r.j.G==0||r.J||Es(r.j,r)}function Je(r){Er(r);var o=r.M;o&&typeof o.ma=="function"&&o.ma(),r.M=null,$i(r.U),r.g&&(o=r.g,r.g=null,o.abort(),o.ma())}function Tr(r,o){try{var c=r.j;if(c.G!=0&&(c.g==r||Sr(c.h,r))){if(!r.K&&Sr(c.h,r)&&c.G==3){try{var h=c.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var b=h;if(b[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)An(c),Tn(c);else break e;xr(c),re(18)}}else c.za=b[1],0<c.za-c.T&&37500>b[2]&&c.F&&c.v==0&&!c.C&&(c.C=Mt(S(c.Za,c),6e3));if(1>=es(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ye(c,11)}else if((r.K||c.g==r)&&An(c),!N(o))for(b=c.Da.g.parse(o),o=0;o<b.length;o++){let j=b[o];if(c.T=j[0],j=j[1],c.G==2)if(j[0]=="c"){c.K=j[1],c.ia=j[2];const ee=j[3];ee!=null&&(c.la=ee,c.j.info("VER="+c.la));const te=j[4];te!=null&&(c.Aa=te,c.j.info("SVER="+c.Aa));const mt=j[5];mt!=null&&typeof mt=="number"&&0<mt&&(h=1.5*mt,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const he=r.g;if(he){const kn=he.g?he.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kn){var T=h.h;T.g||kn.indexOf("spdy")==-1&&kn.indexOf("quic")==-1&&kn.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(Ar(T,T.h),T.h=null))}if(h.D){const Rr=he.g?he.g.getResponseHeader("X-HTTP-Session-Id"):null;Rr&&(h.ya=Rr,W(h.I,h.D,Rr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var x=r;if(h.qa=As(h,h.J?h.ia:null,h.W),x.K){ts(h.h,x);var B=x,Y=h.L;Y&&(B.I=Y),B.B&&(Er(B),_n(B)),h.g=x}else bs(h);0<c.i.length&&Sn(c)}else j[0]!="stop"&&j[0]!="close"||Ye(c,7);else c.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Ye(c,7):Cr(c):j[0]!="noop"&&c.l&&c.l.ta(j),c.v=0)}}Lt(4)}catch{}}var wc=class{constructor(r,o){this.g=r,this.map=o}};function Qi(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function es(r){return r.h?1:r.g?r.g.size:0}function Sr(r,o){return r.h?r.h==o:r.g?r.g.has(o):!1}function Ar(r,o){r.g?r.g.add(o):r.h=o}function ts(r,o){r.h&&r.h==o?r.h=null:r.g&&r.g.has(o)&&r.g.delete(o)}Qi.prototype.cancel=function(){if(this.i=ns(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ns(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let o=r.i;for(const c of r.g.values())o=o.concat(c.D);return o}return O(r.i)}function bc(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(m(r)){for(var o=[],c=r.length,h=0;h<c;h++)o.push(r[h]);return o}o=[],c=0;for(h in r)o[c++]=r[h];return o}function Ic(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(m(r)||typeof r=="string"){var o=[];r=r.length;for(var c=0;c<r;c++)o.push(c);return o}o=[],c=0;for(const h in r)o[c++]=h;return o}}}function rs(r,o){if(r.forEach&&typeof r.forEach=="function")r.forEach(o,void 0);else if(m(r)||typeof r=="string")Array.prototype.forEach.call(r,o,void 0);else for(var c=Ic(r),h=bc(r),b=h.length,T=0;T<b;T++)o.call(void 0,h[T],c&&c[T],r)}var is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ec(r,o){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var h=r[c].indexOf("="),b=null;if(0<=h){var T=r[c].substring(0,h);b=r[c].substring(h+1)}else T=r[c];o(T,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Xe(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Xe){this.h=r.h,yn(this,r.j),this.o=r.o,this.g=r.g,vn(this,r.s),this.l=r.l;var o=r.i,c=new $t;c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),ss(this,c),this.m=r.m}else r&&(o=String(r).match(is))?(this.h=!1,yn(this,o[1]||"",!0),this.o=jt(o[2]||""),this.g=jt(o[3]||"",!0),vn(this,o[4]),this.l=jt(o[5]||"",!0),ss(this,o[6]||"",!0),this.m=jt(o[7]||"")):(this.h=!1,this.i=new $t(null,this.h))}Xe.prototype.toString=function(){var r=[],o=this.j;o&&r.push(Vt(o,os,!0),":");var c=this.g;return(c||o=="file")&&(r.push("//"),(o=this.o)&&r.push(Vt(o,os,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(Vt(c,c.charAt(0)=="/"?Ac:Sc,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",Vt(c,Cc)),r.join("")};function Se(r){return new Xe(r)}function yn(r,o,c){r.j=c?jt(o,!0):o,r.j&&(r.j=r.j.replace(/:$/,""))}function vn(r,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);r.s=o}else r.s=null}function ss(r,o,c){o instanceof $t?(r.i=o,xc(r.i,r.h)):(c||(o=Vt(o,kc)),r.i=new $t(o,r.h))}function W(r,o,c){r.i.set(o,c)}function wn(r){return W(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function jt(r,o){return r?o?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Vt(r,o,c){return typeof r=="string"?(r=encodeURI(r).replace(o,Tc),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Tc(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var os=/[#\/\?@]/g,Sc=/[#\?:]/g,Ac=/[#\?]/g,kc=/[#\?@]/g,Cc=/#/g;function $t(r,o){this.h=this.g=null,this.i=r||null,this.j=!!o}function Fe(r){r.g||(r.g=new Map,r.h=0,r.i&&Ec(r.i,function(o,c){r.add(decodeURIComponent(o.replace(/\+/g," ")),c)}))}n=$t.prototype,n.add=function(r,o){Fe(this),this.i=null,r=pt(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(o),this.h+=1,this};function as(r,o){Fe(r),o=pt(r,o),r.g.has(o)&&(r.i=null,r.h-=r.g.get(o).length,r.g.delete(o))}function cs(r,o){return Fe(r),o=pt(r,o),r.g.has(o)}n.forEach=function(r,o){Fe(this),this.g.forEach(function(c,h){c.forEach(function(b){r.call(o,b,h,this)},this)},this)},n.na=function(){Fe(this);const r=Array.from(this.g.values()),o=Array.from(this.g.keys()),c=[];for(let h=0;h<o.length;h++){const b=r[h];for(let T=0;T<b.length;T++)c.push(o[h])}return c},n.V=function(r){Fe(this);let o=[];if(typeof r=="string")cs(this,r)&&(o=o.concat(this.g.get(pt(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)o=o.concat(r[c])}return o},n.set=function(r,o){return Fe(this),this.i=null,r=pt(this,r),cs(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[o]),this.h+=1,this},n.get=function(r,o){return r?(r=this.V(r),0<r.length?String(r[0]):o):o};function ls(r,o,c){as(r,o),0<c.length&&(r.i=null,r.g.set(pt(r,o),O(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],o=Array.from(this.g.keys());for(var c=0;c<o.length;c++){var h=o[c];const T=encodeURIComponent(String(h)),x=this.V(h);for(h=0;h<x.length;h++){var b=T;x[h]!==""&&(b+="="+encodeURIComponent(String(x[h]))),r.push(b)}}return this.i=r.join("&")};function pt(r,o){return o=String(o),r.j&&(o=o.toLowerCase()),o}function xc(r,o){o&&!r.j&&(Fe(r),r.i=null,r.g.forEach(function(c,h){var b=h.toLowerCase();h!=b&&(as(this,h),ls(this,b,c))},r)),r.j=o}function Pc(r,o){const c=new Ut;if(u.Image){const h=new Image;h.onload=C(je,c,"TestLoadImage: loaded",!0,o,h),h.onerror=C(je,c,"TestLoadImage: error",!1,o,h),h.onabort=C(je,c,"TestLoadImage: abort",!1,o,h),h.ontimeout=C(je,c,"TestLoadImage: timeout",!1,o,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else o(!1)}function Rc(r,o){const c=new Ut,h=new AbortController,b=setTimeout(()=>{h.abort(),je(c,"TestPingServer: timeout",!1,o)},1e4);fetch(r,{signal:h.signal}).then(T=>{clearTimeout(b),T.ok?je(c,"TestPingServer: ok",!0,o):je(c,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(b),je(c,"TestPingServer: error",!1,o)})}function je(r,o,c,h,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),h(c)}catch{}}function Nc(){this.g=new dc}function Dc(r,o,c){const h=c||"";try{rs(r,function(b,T){let x=b;_(b)&&(x=pr(b)),o.push(h+T+"="+encodeURIComponent(x))})}catch(b){throw o.push(h+"type="+encodeURIComponent("_badmap")),b}}function bn(r){this.l=r.Ub||null,this.j=r.eb||!1}k(bn,gr),bn.prototype.g=function(){return new In(this.l,this.j)},bn.prototype.i=(function(r){return function(){return r}})({});function In(r,o){Z.call(this),this.D=r,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(In,Z),n=In.prototype,n.open=function(r,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=o,this.readyState=1,Ht(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(o.body=r),(this.D||u).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bt(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ht(this)),this.g&&(this.readyState=3,Ht(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hs(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function hs(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var o=r.value?r.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!r.done}))&&(this.response=this.responseText+=o)}r.done?Bt(this):Ht(this),this.readyState==3&&hs(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Bt(this))},n.Qa=function(r){this.g&&(this.response=r,Bt(this))},n.ga=function(){this.g&&Bt(this)};function Bt(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Ht(r)}n.setRequestHeader=function(r,o){this.u.append(r,o)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],o=this.h.entries();for(var c=o.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=o.next();return r.join(`\r
`)};function Ht(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(In.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function us(r){let o="";return K(r,function(c,h){o+=h,o+=":",o+=c,o+=`\r
`}),o}function kr(r,o,c){e:{for(h in c){var h=!1;break e}h=!0}h||(c=us(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):W(r,o,c))}function G(r){Z.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(G,Z);var Oc=/^https?$/i,Lc=["POST","PUT"];n=G.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,o,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);o=o?o.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?Bi(this.o):Bi(wr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(r),!0),this.B=!1}catch(T){ds(this,T);return}if(r=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var b in h)c.set(b,h[b]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const T of h.keys())c.set(T,h.get(T));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(T=>T.toLowerCase()=="content-type"),b=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Lc,o,void 0))||h||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,x]of c)this.g.setRequestHeader(T,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gs(this),this.u=!0,this.g.send(r),this.u=!1}catch(T){ds(this,T)}};function ds(r,o){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=o,r.m=5,fs(r),En(r)}function fs(r){r.A||(r.A=!0,ne(r,"complete"),ne(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ne(this,"complete"),ne(this,"abort"),En(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),En(this,!0)),G.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ps(this):this.bb())},n.bb=function(){ps(this)};function ps(r){if(r.h&&typeof l<"u"&&(!r.v[1]||Ae(r)!=4||r.Z()!=2)){if(r.u&&Ae(r)==4)Fi(r.Ea,0,r);else if(ne(r,"readystatechange"),Ae(r)==4){r.h=!1;try{const x=r.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var c;if(!(c=o)){var h;if(h=x===0){var b=String(r.D).match(is)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),h=!Oc.test(b?b.toLowerCase():"")}c=h}if(c)ne(r,"complete"),ne(r,"success");else{r.m=6;try{var T=2<Ae(r)?r.g.statusText:""}catch{T=""}r.l=T+" ["+r.Z()+"]",fs(r)}}finally{En(r)}}}}function En(r,o){if(r.g){gs(r);const c=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,o||ne(r,"ready");try{c.onreadystatechange=h}catch{}}}function gs(r){r.I&&(u.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Ae(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Ae(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var o=this.g.responseText;return r&&o.indexOf(r)==0&&(o=o.substring(r.length)),uc(o)}};function ms(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Mc(r){const o={};r=(r.g&&2<=Ae(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(N(r[h]))continue;var c=v(r[h]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const T=o[b]||[];o[b]=T,T.push(c)}w(o,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wt(r,o,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||o}function _s(r){this.Aa=0,this.i=[],this.j=new Ut,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wt("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wt("baseRetryDelayMs",5e3,r),this.cb=Wt("retryDelaySeedMs",1e4,r),this.Wa=Wt("forwardChannelMaxRetries",2,r),this.wa=Wt("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(r&&r.concurrentRequestLimit),this.Da=new Nc,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_s.prototype,n.la=8,n.G=1,n.connect=function(r,o,c,h){re(0),this.W=r,this.H=o||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=As(this,null,this.W),Sn(this)};function Cr(r){if(ys(r),r.G==3){var o=r.U++,c=Se(r.I);if(W(c,"SID",r.K),W(c,"RID",o),W(c,"TYPE","terminate"),zt(r,c),o=new Ue(r,r.j,o),o.L=2,o.v=wn(Se(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(o.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=o.v,c=!0),c||(o.g=ks(o.j,null),o.g.ea(o.v)),o.F=Date.now(),_n(o)}Ss(r)}function Tn(r){r.g&&(Pr(r),r.g.cancel(),r.g=null)}function ys(r){Tn(r),r.u&&(u.clearTimeout(r.u),r.u=null),An(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function Sn(r){if(!Zi(r.h)&&!r.s){r.s=!0;var o=r.Ga;Pt||Di(),Rt||(Pt(),Rt=!0),or.add(o,r),r.B=0}}function Uc(r,o){return es(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=o.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Mt(S(r.Ga,r,o),Ts(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const b=new Ue(this,this.j,r);let T=this.o;if(this.S&&(T?(T=f(T),y(T,this.S)):T=this.S),this.m!==null||this.O||(b.H=T,T=null),this.P)e:{for(var o=0,c=0;c<this.i.length;c++){t:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=c;break e}if(o===4096||c===this.i.length-1){o=c+1;break e}}o=1e3}else o=1e3;o=ws(this,b,o),c=Se(this.I),W(c,"RID",r),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),zt(this,c),T&&(this.O?o="headers="+encodeURIComponent(String(us(T)))+"&"+o:this.m&&kr(c,this.m,T)),Ar(this.h,b),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",o),W(c,"SID","null"),b.T=!0,Ir(b,c,null)):Ir(b,c,o),this.G=2}}else this.G==3&&(r?vs(this,r):this.i.length==0||Zi(this.h)||vs(this))};function vs(r,o){var c;o?c=o.l:c=r.U++;const h=Se(r.I);W(h,"SID",r.K),W(h,"RID",c),W(h,"AID",r.T),zt(r,h),r.m&&r.o&&kr(h,r.m,r.o),c=new Ue(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),o&&(r.i=o.D.concat(r.i)),o=ws(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Ar(r.h,c),Ir(c,h,o)}function zt(r,o){r.H&&K(r.H,function(c,h){W(o,h,c)}),r.l&&rs({},function(c,h){W(o,h,c)})}function ws(r,o,c){c=Math.min(r.i.length,c);var h=r.l?S(r.l.Na,r.l,r):null;e:{var b=r.i;let T=-1;for(;;){const x=["count="+c];T==-1?0<c?(T=b[0].g,x.push("ofs="+T)):T=0:x.push("ofs="+T);let B=!0;for(let Y=0;Y<c;Y++){let j=b[Y].g;const ee=b[Y].map;if(j-=T,0>j)T=Math.max(0,b[Y].g-100),B=!1;else try{Dc(ee,x,"req"+j+"_")}catch{h&&h(ee)}}if(B){h=x.join("&");break e}}}return r=r.i.splice(0,c),o.D=r,h}function bs(r){if(!r.g&&!r.u){r.Y=1;var o=r.Fa;Pt||Di(),Rt||(Pt(),Rt=!0),or.add(o,r),r.v=0}}function xr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Mt(S(r.Fa,r),Ts(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Is(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Mt(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),Tn(this),Is(this))};function Pr(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function Is(r){r.g=new Ue(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var o=Se(r.qa);W(o,"RID","rpc"),W(o,"SID",r.K),W(o,"AID",r.T),W(o,"CI",r.F?"0":"1"),!r.F&&r.ja&&W(o,"TO",r.ja),W(o,"TYPE","xmlhttp"),zt(r,o),r.m&&r.o&&kr(o,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=wn(Se(o)),c.m=null,c.P=!0,Ji(c,r)}n.Za=function(){this.C!=null&&(this.C=null,Tn(this),xr(this),re(19))};function An(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function Es(r,o){var c=null;if(r.g==o){An(r),Pr(r),r.g=null;var h=2}else if(Sr(r.h,o))c=o.D,ts(r.h,o),h=1;else return;if(r.G!=0){if(o.o)if(h==1){c=o.m?o.m.length:0,o=Date.now()-o.F;var b=r.B;h=yr(),ne(h,new Gi(h,c)),Sn(r)}else bs(r);else if(b=o.s,b==3||b==0&&0<o.X||!(h==1&&Uc(r,o)||h==2&&xr(r)))switch(c&&0<c.length&&(o=r.h,o.i=o.i.concat(c)),b){case 1:Ye(r,5);break;case 4:Ye(r,10);break;case 3:Ye(r,6);break;default:Ye(r,2)}}}function Ts(r,o){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*o}function Ye(r,o){if(r.j.info("Error code "+o),o==2){var c=S(r.fb,r),h=r.Xa;const b=!h;h=new Xe(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||yn(h,"https"),wn(h),b?Pc(h.toString(),c):Rc(h.toString(),c)}else re(2);r.G=0,r.l&&r.l.sa(o),Ss(r),ys(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function Ss(r){if(r.G=0,r.ka=[],r.l){const o=ns(r.h);(o.length!=0||r.i.length!=0)&&(P(r.ka,o),P(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function As(r,o,c){var h=c instanceof Xe?Se(c):new Xe(c);if(h.g!="")o&&(h.g=o+"."+h.g),vn(h,h.s);else{var b=u.location;h=b.protocol,o=o?o+"."+b.hostname:b.hostname,b=+b.port;var T=new Xe(null);h&&yn(T,h),o&&(T.g=o),b&&vn(T,b),c&&(T.l=c),h=T}return c=r.D,o=r.ya,c&&o&&W(h,c,o),W(h,"VER",r.la),zt(r,h),h}function ks(r,o,c){if(o&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=r.Ca&&!r.pa?new G(new bn({eb:c})):new G(r.pa),o.Ha(r.J),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cs(){}n=Cs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function le(r,o){Z.call(this),this.g=new _s(o),this.l=r,this.h=o&&o.messageUrlParams||null,r=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(r?r["X-WebChannel-Content-Type"]=o.messageContentType:r={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(r?r["X-WebChannel-Client-Profile"]=o.va:r={"X-WebChannel-Client-Profile":o.va}),this.g.S=r,(r=o&&o.Sb)&&!N(r)&&(this.g.m=r),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!N(o)&&(this.g.D=o,r=this.h,r!==null&&o in r&&(r=this.h,o in r&&delete r[o])),this.j=new gt(this)}k(le,Z),le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},le.prototype.close=function(){Cr(this.g)},le.prototype.o=function(r){var o=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=pr(r),r=c);o.i.push(new wc(o.Ya++,r)),o.G==3&&Sn(o)},le.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,le.aa.N.call(this)};function xs(r){mr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var o=r.__sm__;if(o){e:{for(const c in o){r=c;break e}r=void 0}(this.i=r)&&(r=this.i,o=o!==null&&r in o?o[r]:void 0),this.data=o}else this.data=r}k(xs,mr);function Ps(){_r.call(this),this.status=1}k(Ps,_r);function gt(r){this.g=r}k(gt,Cs),gt.prototype.ua=function(){ne(this.g,"a")},gt.prototype.ta=function(r){ne(this.g,new xs(r))},gt.prototype.sa=function(r){ne(this.g,new Ps)},gt.prototype.ra=function(){ne(this.g,"b")},le.prototype.send=le.prototype.o,le.prototype.open=le.prototype.m,le.prototype.close=le.prototype.close,vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,yc.COMPLETE="complete",fc.EventType=Ot,Ot.OPEN="a",Ot.CLOSE="b",Ot.ERROR="c",Ot.MESSAGE="d",Z.prototype.listen=Z.prototype.K,G.prototype.listenOnce=G.prototype.L,G.prototype.getLastError=G.prototype.Ka,G.prototype.getLastErrorCode=G.prototype.Ba,G.prototype.getStatus=G.prototype.Z,G.prototype.getResponseJson=G.prototype.Oa,G.prototype.getResponseText=G.prototype.oa,G.prototype.send=G.prototype.ea,G.prototype.setWithCredentials=G.prototype.Ha}).apply(typeof Pn<"u"?Pn:typeof self<"u"?self:typeof window<"u"?window:{});const ho="@firebase/firestore",uo="4.9.1";/**
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
 */let hn="12.2.0";/**
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
 */const Tt=new fi("@firebase/firestore");function fe(n,...e){if(Tt.logLevel<=V.DEBUG){const t=e.map(ki);Tt.debug(`Firestore (${hn}): ${n}`,...t)}}function ja(n,...e){if(Tt.logLevel<=V.ERROR){const t=e.map(ki);Tt.error(`Firestore (${hn}): ${n}`,...t)}}function Pd(n,...e){if(Tt.logLevel<=V.WARN){const t=e.map(ki);Tt.warn(`Firestore (${hn}): ${n}`,...t)}}function ki(n){if(typeof n=="string")return n;try{/**
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
 */function tn(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Va(n,i,t)}function Va(n,e,t){let i=`FIRESTORE (${hn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw ja(i),new Error(i)}function Kt(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Va(e,s,i)}/**
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
 */const U={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class F extends Ee{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class $a{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ie.UNAUTHENTICATED)))}shutdown(){}}class Nd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Dd{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Kt(this.o===void 0,42304);let i=this.i;const s=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let a=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Jt,e.enqueueRetryable((()=>s(this.currentUser)))};const l=()=>{const m=a;e.enqueueRetryable((async()=>{await m.promise,await s(this.currentUser)}))},u=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((m=>u(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?u(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Jt)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Kt(typeof i.accessToken=="string",31837,{l:i}),new $a(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Kt(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class Od{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ld{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Od(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Md{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Kt(this.o===void 0,3512);const i=a=>{a.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,fe("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>i(a)))};const s=a=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fo(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Kt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ud(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Fd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Ud(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<t&&(i+=e.charAt(s[a]%62))}return i}}function qe(n,e){return n<e?-1:n>e?1:0}function jd(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),a=e.charAt(i);if(s!==a)return jr(s)===jr(a)?qe(s,a):jr(s)?1:-1}return qe(n.length,e.length)}const Vd=55296,$d=57343;function jr(n){const e=n.charCodeAt(0);return e>=Vd&&e<=$d}/**
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
 */const po="__name__";class _e{constructor(e,t,i){t===void 0?t=0:t>e.length&&tn(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&tn(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return _e.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _e?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const a=_e.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return qe(e.length,t.length)}static compareSegments(e,t){const i=_e.isNumericId(e),s=_e.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?_e.extractNumericId(e).compare(_e.extractNumericId(t)):jd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ai.fromString(e.substring(4,e.length-2))}}class ue extends _e{construct(e,t,i){return new ue(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new F(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new ue(t)}static emptyPath(){return new ue([])}}const Bd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends _e{construct(e,t,i){return new et(e,t,i)}static isValidIdentifier(e){return Bd.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===po}static keyField(){return new et([po])}static fromServerFormat(e){const t=[];let i="",s=0;const a=()=>{if(i.length===0)throw new F(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let l=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new F(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new F(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(i+=u,s++):(a(),s++)}if(a(),l)throw new F(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
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
 */class nt{constructor(e){this.path=e}static fromPath(e){return new nt(ue.fromString(e))}static fromName(e){return new nt(ue.fromString(e).popFirst(5))}static empty(){return new nt(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new nt(new ue(e.slice()))}}function Hd(n,e,t,i){if(e===!0&&i===!0)throw new F(U.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":tn(12329,{type:typeof n})}function Gd(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zd(n);throw new F(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function X(n,e){const t={typeString:n};return e&&(t.value=e),t}function un(n,e){if(!Wd(n))throw new F(U.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const l=n[i];if(s&&typeof l!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${i}' field to equal '${a.value}'`;break}}if(t)throw new F(U.INVALID_ARGUMENT,t);return!0}/**
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
 */const go=-62135596800,mo=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*mo);return new ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<go)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mo}_compareTo(e){return this.seconds===e.seconds?qe(this.nanoseconds,e.nanoseconds):qe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(un(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-go;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:X("string",ye._jsonSchemaVersion),seconds:X("number"),nanoseconds:X("number")};function qd(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Kd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Kd("Invalid base64 string: "+a):a}})(e);return new ct(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a})(e);return new ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const ei="(default)";class Xn{constructor(e,t){this.projectId=e,this.database=t||ei}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===ei}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Jd{constructor(e,t=null,i=[],s=[],a=null,l="F",u=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=l,this.startAt=u,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Xd(n){return new Jd(n)}/**
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
 */var _o,L;(L=_o||(_o={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ai([4294967295,4294967295],0);/**
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
 */const Yd=41943040;/**
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
 */const Qd=1048576;function Vr(){return typeof document<"u"?document:null}/**
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
 */class Zd{constructor(e,t,i=1e3,s=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&fe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Ci{constructor(e,t,i,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,a){const l=Date.now()+i,u=new Ci(e,t,l,s,a);return u.start(i),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var yo,vo;(vo=yo||(yo={})).Ma="default",vo.Cache="cache";/**
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
 */function ef(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const wo=new Map;/**
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
 */const Ba="firestore.googleapis.com",bo=!0;class Io{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ba,this.ssl=bo}else this.host=e.host,this.ssl=e.ssl??bo;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Qd)throw new F(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ef(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ha{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Io({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Io(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Rd;switch(i.type){case"firstParty":return new Ld(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new F(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=wo.get(t);i&&(fe("ComponentProvider","Removing Datastore"),wo.delete(t),i.terminate())})(this),Promise.resolve()}}function Wa(n,e,t,i={}){n=Gd(n,Ha);const s=lt(e),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(ui(`https://${u}`),di("Firestore",!0)),a.host!==Ba&&a.host!==u&&Pd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...a,host:u,ssl:s,emulatorOptions:i};if(!st(m,l)&&(n._setSettings(m),i.mockUserToken)){let _,A;if(typeof i.mockUserToken=="string")_=i.mockUserToken,A=ie.MOCK_USER;else{_=tl(i.mockUserToken,n._app?.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new F(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new ie(I)}n._authCredentials=new Nd(new $a(_,A))}}/**
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
 */class xi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class ve{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ve(this.firestore,e,this._key)}toJSON(){return{type:ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(un(t,ve._jsonSchema))return new ve(e,i||null,new nt(ue.fromString(t.referencePath)))}}ve._jsonSchemaVersion="firestore/documentReference/1.0",ve._jsonSchema={type:X("string",ve._jsonSchemaVersion),referencePath:X("string")};class Pi extends xi{constructor(e,t,i){super(e,t,Xd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new nt(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}/**
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
 */const Eo="AsyncQueue";class To{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zd(this,"async_queue_retry"),this._c=()=>{const i=Vr();i&&fe(Eo,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Vr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Jt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!qd(e))throw e;fe(Eo,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,ja("INTERNAL UNHANDLED ERROR: ",So(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ci.createAndSchedule(this,e,t,i,(a=>this.hc(a)));return this.tc.push(s),s}uc(){this.nc&&tn(47125,{Pc:So(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function So(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class tf extends Ha{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new To,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new To(e),this._firestoreClient=void 0,await e}}}function nf(n,e){const t=typeof n=="object"?n:gi(),i=typeof n=="string"?n:ei,s=rr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=Zo("firestore");a&&Wa(s,...a)}return s}/**
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
 */class Ce{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ce(ct.fromBase64String(e))}catch(t){throw new F(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ce(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ce._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(un(e,Ce._jsonSchema))return Ce.fromBase64String(e.bytes)}}Ce._jsonSchemaVersion="firestore/bytes/1.0",Ce._jsonSchema={type:X("string",Ce._jsonSchemaVersion),bytes:X("string")};/**
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
 */class za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return qe(this._lat,e._lat)||qe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rt._jsonSchemaVersion}}static fromJSON(e){if(un(e,rt._jsonSchema))return new rt(e.latitude,e.longitude)}}rt._jsonSchemaVersion="firestore/geoPoint/1.0",rt._jsonSchema={type:X("string",rt._jsonSchemaVersion),latitude:X("number"),longitude:X("number")};/**
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
 */class it{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:it._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(un(e,it._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new it(e.vectorValues);throw new F(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}it._jsonSchemaVersion="firestore/vectorValue/1.0",it._jsonSchema={type:X("string",it._jsonSchemaVersion),vectorValues:X("object")};const rf=new RegExp("[~\\*/\\[\\]]");function sf(n,e,t){if(e.search(rf)>=0)throw Ao(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new za(...e.split("."))._internalPath}catch{throw Ao(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Ao(n,e,t,i,s){let a=`Function ${e}() called with invalid data`;a+=". ";let l="";return new F(U.INVALID_ARGUMENT,a+n+l)}/**
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
 */class Ga{constructor(e,t,i,s,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new of(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class of extends Ga{data(){return super.data()}}function qa(n,e){return typeof e=="string"?sf(n,e):e instanceof za?e._internalPath:e._delegate._internalPath}class Rn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wt extends Ga{constructor(e,t,i,s,a,l){super(e,t,i,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(qa("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=wt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}wt._jsonSchemaVersion="firestore/documentSnapshot/1.0",wt._jsonSchema={type:X("string",wt._jsonSchemaVersion),bundleSource:X("string","DocumentSnapshot"),bundleName:X("string"),bundle:X("string")};class jn extends wt{data(e={}){return super.data(e)}}class Xt{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rn(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new jn(this._firestore,this._userDataWriter,i.key,i,new Rn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map((u=>{const m=new jn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Rn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:m,oldIndex:-1,newIndex:l++}}))}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>a||u.type!==3)).map((u=>{const m=new jn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Rn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let _=-1,A=-1;return u.type!==0&&(_=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),A=l.indexOf(u.doc.key)),{type:af(u.type),doc:m,oldIndex:_,newIndex:A}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function af(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tn(61501,{type:n})}}Xt._jsonSchemaVersion="firestore/querySnapshot/1.0",Xt._jsonSchema={type:X("string",Xt._jsonSchemaVersion),bundleSource:X("string","QuerySnapshot"),bundleName:X("string"),bundle:X("string")};(function(e,t=!0){(function(s){hn=s})(At),ot(new Ge("firestore",((i,{instanceIdentifier:s,options:a})=>{const l=i.getProvider("app").getImmediate(),u=new tf(new Dd(i.getProvider("auth-internal")),new Md(l,i.getProvider("app-check-internal")),(function(_,A){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new F(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(_.options.projectId,A)})(l,s),l);return a={useFetchStreams:t,...a},u._setSettings(a),u}),"PUBLIC").setMultipleInstances(!0)),we(ho,uo,e),we(ho,uo,"esm2020")})();/**
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
 */const cf="type.googleapis.com/google.protobuf.Int64Value",lf="type.googleapis.com/google.protobuf.UInt64Value";function Ka(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Yn(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Yn(e));if(typeof n=="function"||typeof n=="object")return Ka(n,e=>Yn(e));throw new Error("Data cannot be encoded in JSON: "+n)}function St(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case cf:case lf:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>St(e)):typeof n=="function"||typeof n=="object"?Ka(n,e=>St(e)):n}/**
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
 */const Ri="functions";/**
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
 */const ko={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Ee{constructor(e,t,i){super(`${Ri}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,ae.prototype)}}function hf(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Qn(n,e){let t=hf(n),i=t,s;try{const a=e&&e.error;if(a){const l=a.status;if(typeof l=="string"){if(!ko[l])return new ae("internal","internal");t=ko[l],i=l}const u=a.message;typeof u=="string"&&(i=u),s=a.details,s!==void 0&&(s=St(s))}}catch{}return t==="ok"?null:new ae(t,i,s)}/**
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
 */class uf{constructor(e,t,i,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,oe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||i.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s?.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
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
 */const ti="us-central1",df=/^data: (.*?)(?:\n|$)/;function ff(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new ae("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class pf{constructor(e,t,i,s,a=ti,l=(...u)=>fetch(...u)){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new uf(e,t,i,s),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(a);this.customDomain=u.origin+(u.pathname==="/"?"":u.pathname),this.region=ti}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function gf(n,e,t){const i=lt(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(ui(n.emulatorOrigin+"/backends"),di("Functions",!0))}function mf(n,e,t){const i=s=>yf(n,e,s,{});return i.stream=(s,a)=>wf(n,e,s,a),i}function Ja(n){return n.emulatorOrigin&&lt(n.emulatorOrigin)?"include":void 0}async function _f(n,e,t,i,s){t["Content-Type"]="application/json";let a;try{a=await i(n,{method:"POST",body:JSON.stringify(e),headers:t,credentials:Ja(s)})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}async function Xa(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function yf(n,e,t,i){const s=n._url(e);return vf(n,s,t,i)}async function vf(n,e,t,i){t=Yn(t);const s={data:t},a=await Xa(n,i),l=i.timeout||7e4,u=ff(l),m=await Promise.race([_f(e,s,a,n.fetchImpl,n),u.promise,n.cancelAllRequests]);if(u.cancel(),!m)throw new ae("cancelled","Firebase Functions instance was deleted.");const _=Qn(m.status,m.json);if(_)throw _;if(!m.json)throw new ae("internal","Response is not valid JSON object.");let A=m.json.data;if(typeof A>"u"&&(A=m.json.result),typeof A>"u")throw new ae("internal","Response is missing data field.");return{data:St(A)}}function wf(n,e,t,i){const s=n._url(e);return bf(n,s,t,i||{})}async function bf(n,e,t,i){t=Yn(t);const s={data:t},a=await Xa(n,i);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:a,signal:i?.signal,credentials:Ja(n)})}catch(S){if(S instanceof Error&&S.name==="AbortError"){const k=new ae("cancelled","Request was cancelled.");return{data:Promise.reject(k),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(k)}}}}}}const C=Qn(0,null);return{data:Promise.reject(C),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(C)}}}}}}let u,m;const _=new Promise((S,C)=>{u=S,m=C});i?.signal?.addEventListener("abort",()=>{const S=new ae("cancelled","Request was cancelled.");m(S)});const A=l.body.getReader(),I=If(A,u,m,i?.signal);return{stream:{[Symbol.asyncIterator](){const S=I.getReader();return{async next(){const{value:C,done:k}=await S.read();return{value:C,done:k}},async return(){return await S.cancel(),{done:!0,value:void 0}}}}},data:_}}function If(n,e,t,i){const s=(l,u)=>{const m=l.match(df);if(!m)return;const _=m[1];try{const A=JSON.parse(_);if("result"in A){e(St(A.result));return}if("message"in A){u.enqueue(St(A.message));return}if("error"in A){const I=Qn(0,A);u.error(I),t(I);return}}catch(A){if(A instanceof ae){u.error(A),t(A);return}}},a=new TextDecoder;return new ReadableStream({start(l){let u="";return m();async function m(){if(i?.aborted){const _=new ae("cancelled","Request was cancelled");return l.error(_),t(_),Promise.resolve()}try{const{value:_,done:A}=await n.read();if(A){u.trim()&&s(u.trim(),l),l.close();return}if(i?.aborted){const S=new ae("cancelled","Request was cancelled");l.error(S),t(S),await n.cancel();return}u+=a.decode(_,{stream:!0});const I=u.split(`
`);u=I.pop()||"";for(const S of I)S.trim()&&s(S.trim(),l);return m()}catch(_){const A=_ instanceof ae?_:Qn(0,null);l.error(A),t(A)}}},cancel(){return n.cancel()}})}const Co="@firebase/functions",xo="0.13.1";/**
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
 */const Ef="auth-internal",Tf="app-check-internal",Sf="messaging-internal";function Af(n){const e=(t,{instanceIdentifier:i})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider(Ef),l=t.getProvider(Sf),u=t.getProvider(Tf);return new pf(s,a,l,u,i)};ot(new Ge(Ri,e,"PUBLIC").setMultipleInstances(!0)),we(Co,xo,n),we(Co,xo,"esm2020")}/**
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
 */function kf(n=gi(),e=ti){const i=rr(me(n),Ri).getImmediate({identifier:e}),s=Zo("functions");return s&&Ya(i,...s),i}function Ya(n,e,t){gf(me(n),e,t)}function ht(n,e,t){return mf(me(n),e)}Af();const Ni=typeof __firebase_config<"u";let bt,ni=null;Ni?(bt=JSON.parse(__firebase_config),ni=typeof __initial_auth_token<"u"?__initial_auth_token:null):bt={apiKey:"AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",authDomain:"my-new-firebase-project-94e22.firebaseapp.com",projectId:"my-new-firebase-project-94e22",storageBucket:"my-new-firebase-project-94e22.firebasestorage.app",messagingSenderId:"210118924526",appId:"1:210118924526:web:c88671740e8b13e1e7fbff"};let Nn=null,It=null,ri=null,Zn=null;bt&&bt.apiKey?(Nn=ia(bt),It=Cd(Nn),ri=nf(Nn),Zn=kf(Nn),Ni&&(async()=>{try{ni?(await pu(It,ni),console.log("Firebase: Signed in with custom token.")):(await lu(It),console.warn("Firebase: Signed in anonymously (no custom token)."))}catch(e){console.error("Firebase Authentication Failed:",e)}})()):console.error("Firebase initialization failed: Configuration (apiKey) is missing.");const Yt=It,Cf=new ke,ut=Zn;if(location.hostname==="localhost"&&!Ni&&It&&ri&&Zn){const n=bt.apiKey==="demo-api-key";Wa(ri,"localhost",8080),Ya(Zn,"localhost",5001),n&&Ea(It,"http://localhost:9099")}var er,q,$r,Po,ii=0,Qa=[],J=H,Ro=J.__b,No=J.__r,Do=J.diffed,Oo=J.__c,Lo=J.unmount,Mo=J.__;function Za(n,e){J.__h&&J.__h(q,n,ii||e),ii=0;var t=q.__H||(q.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function M(n){return ii=1,xf(ec,n)}function xf(n,e,t){var i=Za(er++,2);if(i.t=n,!i.__c&&(i.__=[ec(void 0,e),function(u){var m=i.__N?i.__N[0]:i.__[0],_=i.t(m,u);m!==_&&(i.__N=[_,i.__[1]],i.__c.setState({}))}],i.__c=q,!q.__f)){var s=function(u,m,_){if(!i.__c.__H)return!0;var A=i.__c.__H.__.filter(function(S){return!!S.__c});if(A.every(function(S){return!S.__N}))return!a||a.call(this,u,m,_);var I=i.__c.props!==u;return A.forEach(function(S){if(S.__N){var C=S.__[0];S.__=S.__N,S.__N=void 0,C!==S.__[0]&&(I=!0)}}),a&&a.call(this,u,m,_)||I};q.__f=!0;var a=q.shouldComponentUpdate,l=q.componentWillUpdate;q.componentWillUpdate=function(u,m,_){if(this.__e){var A=a;a=void 0,s(u,m,_),a=A}l&&l.call(this,u,m,_)},q.shouldComponentUpdate=s}return i.__N||i.__}function Ke(n,e){var t=Za(er++,3);!J.__s&&Nf(t.__H,e)&&(t.__=n,t.u=e,q.__H.__h.push(t))}function Pf(){for(var n;n=Qa.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Vn),n.__H.__h.forEach(si),n.__H.__h=[]}catch(e){n.__H.__h=[],J.__e(e,n.__v)}}J.__b=function(n){q=null,Ro&&Ro(n)},J.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Mo&&Mo(n,e)},J.__r=function(n){No&&No(n),er=0;var e=(q=n.__c).__H;e&&($r===q?(e.__h=[],q.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(Vn),e.__h.forEach(si),e.__h=[],er=0)),$r=q},J.diffed=function(n){Do&&Do(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Qa.push(e)!==1&&Po===J.requestAnimationFrame||((Po=J.requestAnimationFrame)||Rf)(Pf)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),$r=q=null},J.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Vn),t.__h=t.__h.filter(function(i){return!i.__||si(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],J.__e(i,t.__v)}}),Oo&&Oo(n,e)},J.unmount=function(n){Lo&&Lo(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{Vn(i)}catch(s){e=s}}),t.__H=void 0,e&&J.__e(e,t.__v))};var Uo=typeof requestAnimationFrame=="function";function Rf(n){var e,t=function(){clearTimeout(i),Uo&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);Uo&&(e=requestAnimationFrame(t))}function Vn(n){var e=q,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),q=e}function si(n){var e=q;n.__c=n.__(),q=e}function Nf(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function ec(n,e){return typeof e=="function"?e(n):e}function Df(){const[n,e]=M(null),[t,i]=M(null);Ke(()=>{const l=ka(Yt,e);return()=>l()},[]);async function s(){i(null);try{await Uu(Yt,Cf)}catch(l){if(console.error("Login failed:",l),l.code==="auth/unauthorized-domain"){const u=window.location.hostname==="0.0.0.0";i({type:"unauthorized-domain",message:"Login failed: Domain not authorized.",details:u?"Firebase does not allow OAuth on 0.0.0.0. Please use localhost.":`Add "${window.location.hostname}" to Authorized Domains in Firebase Console.`})}else i({message:l.message})}}async function a(){await _u(Yt)}return n?p("div",{class:"flex flex-col items-center justify-center h-screen space-y-4 bg-gray-900 text-white",children:[n.photoURL&&p("img",{src:n.photoURL,alt:"Profile",class:"rounded-full w-20 h-20 border-4 border-indigo-500 shadow-lg"}),p("p",{class:"text-xl font-semibold",children:["Hello, ",n.displayName||n.email,"!"]}),p("button",{onClick:a,class:"bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors shadow-md",children:"Sign Out"})]}):p("div",{class:"flex flex-col items-center justify-center h-screen bg-gray-900 text-white space-y-6",children:[p("header",{class:"text-center mb-8",children:[p("h1",{class:"text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2",children:"Procrastinot"}),p("p",{class:"text-xl text-gray-400",children:"Beat procrastination together."})]}),p("div",{class:"bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 w-full max-w-md",children:[p("h2",{class:"text-2xl font-bold mb-6 text-center",children:"Sign In"}),p("button",{onClick:s,class:"w-full bg-white text-gray-900 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3 shadow-md",children:[p("svg",{class:"w-5 h-5",viewBox:"0 0 24 24",children:[p("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),p("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),p("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),p("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),p("span",{children:"Sign in with Google"})]}),t&&p("div",{class:"mt-6 p-4 bg-red-900/30 text-red-200 rounded-lg text-center border border-red-500/50",children:[p("p",{class:"font-bold",children:t.message}),p("p",{class:"text-sm mt-1 text-red-300",children:t.details||t.message}),t.type==="unauthorized-domain"&&window.location.hostname==="0.0.0.0"&&p("button",{onClick:()=>{const l=new URL(window.location.href);l.hostname="localhost",window.location.href=l.toString()},class:"mt-3 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 shadow-sm transition-colors",children:"Switch to localhost"})]})]})]})}const Of=ht(ut,"getRooms"),Lf=ht(ut,"createRoom"),Mf=ht(ut,"joinRoom"),Uf=ht(ut,"startSession"),Ff=ht(ut,"getFriends"),jf=ht(ut,"addFriend"),Vf=ht(ut,"getSuggestedFriends"),Br=[],pe={getRooms:async()=>(await Of()).data,createRoom:async n=>(await Lf(n)).data,joinRoom:async n=>(await Mf({inviteCode:n})).data,startSession:async(n,e)=>(await Uf({roomId:n,mode:e})).data,getFriends:async n=>{const e=await Ff();return[...Array.isArray(e.data)?e.data:[],...Br]},addFriend:async({friendCode:n,username:e,targetUserId:t})=>{if(t==="12345"||e==="Dillon"){const s={id:"12345",name:"Dillon",status:"offline"};return Br.some(a=>a.id==="12345")||Br.push(s),{message:"Friend added",friend:s}}return(await jf({friendCode:n,username:e,targetUserId:t})).data},getSuggestedFriends:async()=>{let n=[];try{const e=await Vf();Array.isArray(e.data)&&(n=e.data)}catch(e){console.warn("Backend call failed, using mock data only",e)}return n.some(e=>e.id==="12345")||n.push({id:"12345",name:"Dillon",avatarUrl:""}),n},getFriendActivity:async n=>(console.warn("MOCK: getFriendActivity using placeholder data."),{completedSessions:5,nudgesReceived:2})};function $f({onRoomCreated:n}){console.log("CreateRoom component rendering");const[e,t]=M(""),[i,s]=M(""),[a,l]=M(!1);async function u(m){if(m.preventDefault(),!!e.trim())try{const _=await pe.createRoom({name:e,description:i});typeof n=="function"&&n(_),t(""),s(""),l(!1)}catch(_){console.error("Failed to create room:",_.message)}}return a?p("div",{class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:p("div",{class:"bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md border border-gray-700",children:[p("h3",{class:"text-xl font-bold text-white mb-4",children:"Create New Room"}),p("form",{onSubmit:u,class:"flex flex-col space-y-4",children:[p("div",{children:[p("label",{class:"block text-gray-400 text-sm mb-1",children:"Room Name"}),p("input",{type:"text",value:e,onInput:m=>t(m.target.value),placeholder:"e.g. Study Group A",class:"w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500",required:!0})]}),p("div",{children:[p("label",{class:"block text-gray-400 text-sm mb-1",children:"Requirements / Description"}),p("textarea",{value:i,onInput:m=>s(m.target.value),placeholder:"e.g. Must have camera on, 25/5 pomodoro...",class:"w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white h-24 focus:outline-none focus:border-green-500"})]}),p("div",{class:"flex justify-end space-x-3 mt-2",children:[p("button",{type:"button",onClick:()=>l(!1),class:"px-4 py-2 text-gray-300 hover:text-white",children:"Cancel"}),p("button",{type:"submit",class:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",children:"Create Room"})]})]})]})}):p("button",{onClick:()=>l(!0),class:"bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition",children:"+ Create Room"})}function Bf({onRoomJoined:n}){console.log("JoinRoom component rendering");const[e,t]=M("");async function i(s){if(s.preventDefault(),!!e.trim())try{const a=await pe.joinRoom(e);n(a),t("")}catch(a){console.error("Failed to join room:",a.message)}}return p("form",{onSubmit:i,class:"flex items-center space-x-2",children:[p("input",{type:"text",value:e,onInput:s=>t(s.target.value),placeholder:"Enter invite code",class:"border px-2 py-1 rounded"}),p("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700",children:"Join"})]})}function Hf({roomId:n,onSessionStarted:e}){console.log("StartSession component rendering");const[t,i]=M("pomodoro");async function s(){try{const a=await pe.startSession(n,t);e(a)}catch(a){console.error("Failed to start session:",a.message)}}return p("div",{class:"flex items-center space-x-2",children:[p("select",{value:t,onChange:a=>i(a.target.value),class:"border px-2 py-1 rounded",children:[p("option",{value:"pomodoro",children:"Pomodoro (25 min)"}),p("option",{value:"short_break",children:"Short Break (5 min)"}),p("option",{value:"long_break",children:"Long Break (15 min)"})]}),p("button",{onClick:s,class:"bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700",children:"Start Session"})]})}function Wf({roomId:n,sessionId:e,userId:t}){const[i,s]=M(""),[a,l]=M(!1),[u,m]=M(null);async function _(A){if(A.preventDefault(),!!i.trim()){l(!0),m(null);try{await pe.trackProgress(n,e,t,{task:i}),s("")}catch(I){m(I.message)}finally{l(!1)}}}return p("form",{onSubmit:_,class:"mt-4",children:[p("h4",{class:"font-semibold mb-2",children:"Track Your Progress"}),p("div",{class:"flex items-center space-x-2",children:[p("input",{type:"text",value:i,onInput:A=>s(A.target.value),placeholder:"Enter a completed task",class:"border px-2 py-1 rounded w-full",disabled:a}),p("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400",disabled:a,children:a?"Submitting...":"Submit"})]}),u&&p("p",{class:"text-red-500 mt-2",children:["Error: ",u]})]})}function zf({room:n,user:e}){return n?p("div",{class:"p-4 border rounded-lg shadow-sm",children:[p("h3",{class:"text-xl font-bold mb-2",children:n.name}),p("div",{class:"mb-4 text-gray-300",children:[p("p",{class:"mb-2",children:[p("strong",{children:"Mode:"})," ",n.mode||"Standard"]}),p("div",{class:"p-3 bg-indigo-900 bg-opacity-30 border border-indigo-700 rounded-lg",children:[p("p",{class:"text-sm text-indigo-300 mb-1 font-bold uppercase tracking-wider",children:"Room Join Code"}),p("div",{class:"flex items-center space-x-2",children:[p("span",{class:"text-2xl font-mono font-bold text-white tracking-widest select-all",children:n.inviteCode}),p("button",{class:"text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded",onClick:()=>navigator.clipboard.writeText(n.inviteCode),children:"Copy"})]}),p("p",{class:"text-xs text-gray-400 mt-1",children:"Share this code with friends to let them join."})]})]}),p("div",{class:"mb-6",children:[p("h4",{class:"font-bold text-gray-300 mb-1",children:"Requirements:"}),p("p",{class:"text-gray-400 italic bg-gray-900 p-3 rounded border border-gray-700",children:n.description||"No specific requirements set."})]}),p(Wf,{roomId:n.id,sessionId:"s_placeholder_123",userId:e.uid})]}):p("div",{children:"Select a room to see details."})}function Gf({session:n,room:e,onEndSession:t}){const[i,s]=M(n.durationMinutes*60),[a,l]=M(!0);Ke(()=>{let m=null;return a&&i>0?m=setInterval(()=>{s(_=>_-1)},1e3):i===0&&l(!1),()=>clearInterval(m)},[a,i]);const u=m=>{const _=Math.floor(m/60),A=m%60;return`${_.toString().padStart(2,"0")}:${A.toString().padStart(2,"0")}`};return p("div",{class:"fixed inset-0 bg-gray-900 text-white z-50 flex flex-col items-center justify-center p-8",children:p("div",{class:"max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700",children:[p("div",{class:"text-center mb-10",children:[p("h1",{class:"text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",children:e.name}),p("p",{class:"text-xl text-gray-300 max-w-2xl mx-auto",children:e.description||"No specific requirements for this room. Stay focused!"})]}),p("div",{class:"flex flex-col items-center justify-center mb-12",children:[p("div",{class:"text-9xl font-mono font-bold tracking-wider mb-4 text-white drop-shadow-lg",children:u(i)}),p("div",{class:"text-2xl text-purple-300 uppercase tracking-widest font-semibold",children:n.mode.replace("_"," ")})]}),p("div",{class:"flex justify-center space-x-6",children:[!a&&i>0?p("button",{onClick:()=>l(!0),class:"bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"Resume"}):a&&p("button",{onClick:()=>l(!1),class:"bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"Pause"}),p("button",{onClick:t,class:"bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"End Session"})]})]})})}function qf({user:n}){const[e,t]=M([]),[i,s]=M(null),[a,l]=M(null),[u,m]=M(null),_=()=>{pe.getRooms().then(k=>{Array.isArray(k)?t(k):console.error("API did not return an array for rooms:",k)}).catch(console.error)};Ke(()=>{_()},[]);const A=k=>{const O=e.findIndex(P=>P.id===k.id);if(O>-1){const P=[...e];P[O]=k,t(P)}else t([...e,k])},I=k=>{console.log("Session started:",k);const O=e.find(P=>P.id===k.roomId);m(O),l(k)},S=()=>{l(null),m(null)},C=e.find(k=>k.id===i);return a&&u?p(Gf,{session:a,room:u,onEndSession:S}):p("div",{class:"container mx-auto p-6",children:[p("div",{class:"flex flex-col md:flex-row justify-between items-center mb-8",children:[p("h2",{class:"text-3xl font-bold text-white mb-4 md:mb-0",children:"Focus Rooms"}),p("div",{class:"flex space-x-4",children:[p($f,{onRoomCreated:A}),p(Bf,{onRoomJoined:A})]})]}),p("div",{class:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[p("div",{class:"lg:col-span-1",children:[p("h3",{class:"text-xl font-semibold text-gray-300 mb-4 px-2",children:"Your Rooms"}),p("ul",{class:"space-y-3",children:[e.map(k=>p("li",{class:`p-4 border border-gray-700 rounded-xl flex justify-between items-center cursor-pointer transition-all duration-200 ${i===k.id?"bg-gray-700 border-indigo-500 shadow-md transform scale-105":"bg-gray-800 hover:bg-gray-750 hover:border-gray-600"}`,onClick:()=>s(k.id),children:[p("div",{class:"flex-grow",children:[p("span",{class:"font-medium text-lg text-white block",children:k.name}),p("span",{class:"text-xs text-gray-400 mr-2",children:["Code: ",p("span",{class:"font-mono text-indigo-400",children:k.inviteCode})]})]}),p(Hf,{roomId:k.id,onSessionStarted:I})]},k.id)),e.length===0&&p("div",{class:"text-gray-500 text-center py-8 bg-gray-800 rounded-xl border border-gray-700 border-dashed",children:"No rooms yet. Join or create one!"})]})]}),p("div",{class:"lg:col-span-2",children:C?p("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden min-h-[500px]",children:[p("div",{class:"p-6 border-b border-gray-700 bg-gray-850",children:[p("h3",{class:"text-2xl font-bold text-white",children:C.name}),p("p",{class:"text-gray-400 text-sm mt-1",children:"Room Details & Activity"})]}),p("div",{class:"p-6",children:p(zf,{room:C,user:n})})]}):p("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-lg flex items-center justify-center min-h-[500px] text-gray-400",children:p("div",{class:"text-center",children:[p("span",{class:"text-6xl block mb-4",children:"👈"}),p("p",{class:"text-xl",children:"Select a room to view details"})]})})})]})]})}function Kf({activePage:n,setActivePage:e}){return p("nav",{class:"bg-gray-900 text-white shadow-md border-b border-gray-800 sticky top-0 z-50",children:p("div",{class:"container mx-auto px-4",children:p("div",{class:"flex items-center justify-between h-16",children:[p("div",{class:"flex items-center",children:p("span",{class:"font-bold text-xl tracking-tight cursor-pointer hover:text-indigo-400 transition-colors",onClick:()=>e("dashboard"),children:"FocusApp"})}),p("div",{class:"flex space-x-1",children:[{id:"dashboard",label:"Home"},{id:"rooms",label:"Rooms"},{id:"friends",label:"Friends"},{id:"accountability",label:"Accountability"}].map(i=>p("a",{href:"#",class:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${n===i.id?"bg-gray-800 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"}`,onClick:s=>{s.preventDefault(),e(i.id)},children:i.label},i.id))})]})})})}function Jf({user:n}){const[e,t]=M([]),[i,s]=M(!0),[a,l]=M(null),[u,m]=M(!1),[_,A]=M("name"),[I,S]=M(""),[C,k]=M(null),[O,P]=M(""),[D,N]=M([]),[$,z]=M(!1),ce=()=>{n&&(s(!0),pe.getFriends(n.uid).then(d=>{t(Array.isArray(d)?d:[]),l(null)}).catch(d=>{l(d.message),t([])}).finally(()=>s(!1)))},K=()=>{z(!0),pe.getSuggestedFriends().then(d=>{N(Array.isArray(d)?d:[])}).catch(d=>console.error("Failed to fetch suggestions:",d)).finally(()=>z(!1))};Ke(()=>{ce()},[n]),Ke(()=>{u&&K()},[u]);const w=async d=>{if(d.preventDefault(),!!I.trim()){k("adding"),P("");try{const y=_==="code"?{friendCode:I}:{username:I};await pe.addFriend(y),k("success"),P("Friend added successfully!"),S(""),ce(),K()}catch(y){k("error"),P(y.message||"Failed to add friend")}}},f=async d=>{k("adding"),P("");try{await pe.addFriend({targetUserId:d.id}),k("success"),P(`Added ${d.name} as friend!`),ce(),K()}catch(y){k("error"),P(y.message||"Failed to add friend")}};return p("div",{class:"container mx-auto p-6 max-w-4xl relative",children:[p("header",{class:"mb-8 flex items-center justify-between",children:[p("div",{children:[p("h2",{class:"text-3xl font-bold text-white",children:"Focus Friends"}),p("p",{class:"text-gray-400 mt-1",children:"See who is online and working."})]}),p("button",{onClick:()=>m(!0),class:"bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm flex items-center",children:p("span",{children:"+ Add Friend"})})]}),i&&p("div",{class:"flex justify-center items-center py-12",children:p("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"})}),a&&p("div",{class:"bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6",children:["Error: ",a]}),!i&&!a&&p("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden",children:e.length===0?p("div",{class:"text-center py-12 px-6",children:[p("div",{class:"text-6xl mb-4",children:"👋"}),p("h3",{class:"text-xl font-medium text-white mb-2",children:"No friends yet"}),p("p",{class:"text-gray-400",children:"Invite friends to see their status here."})]}):p("ul",{class:"divide-y divide-gray-700",children:e.map(d=>p("li",{class:"p-4 hover:bg-gray-750 transition-colors duration-150 flex justify-between items-center",children:[p("div",{class:"flex items-center space-x-4",children:[p("div",{class:"h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm",children:d.name.substring(0,2).toUpperCase()}),p("div",{children:[p("span",{class:"font-medium text-white block",children:d.name}),p("span",{class:"text-xs text-gray-400",children:d.status==="in-session"?"Working now":"Last active recently"})]})]}),p("span",{class:`px-3 py-1 text-xs font-semibold rounded-full border ${d.status==="in-session"?"bg-emerald-900/30 text-emerald-400 border-emerald-500/30":"bg-gray-700 text-gray-400 border-gray-600"}`,children:d.status==="in-session"?"⚡ In Focus":"💤 Offline"})]},d.id))})}),u&&p("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",children:p("div",{class:"bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]",children:[p("div",{class:"p-4 border-b border-gray-700 flex justify-between items-center",children:[p("h3",{class:"text-xl font-bold text-white",children:"Add Friend"}),p("button",{onClick:()=>m(!1),class:"text-gray-400 hover:text-white",children:"✕"})]}),p("div",{class:"p-6 overflow-y-auto",children:[p("div",{class:"flex space-x-4 mb-6",children:[p("button",{onClick:()=>{A("name"),k(null),P("")},class:`flex-1 py-2 rounded-lg font-medium transition-colors ${_==="name"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"By Name"}),p("button",{onClick:()=>{A("code"),k(null),P("")},class:`flex-1 py-2 rounded-lg font-medium transition-colors ${_==="code"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"By Code"})]}),p("form",{onSubmit:w,class:"mb-8",children:[p("div",{class:"mb-4",children:[p("label",{class:"block text-gray-400 text-sm font-bold mb-2",children:_==="name"?"Friend's Username":"Friend Code"}),p("input",{type:"text",class:"w-full bg-gray-900 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-indigo-500",placeholder:_==="name"?"Enter username...":"Enter 6-character code...",value:I,onInput:d=>S(d.target.value)})]}),O&&p("div",{class:`mb-4 text-sm ${C==="success"?"text-green-400":"text-red-400"}`,children:O}),p("button",{type:"submit",disabled:C==="adding",class:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors",children:C==="adding"?"Adding...":"Add Friend"})]}),p("div",{children:[p("h4",{class:"text-sm font-bold text-gray-400 uppercase tracking-wider mb-4",children:"Suggested Friends"}),$?p("div",{class:"flex justify-center py-4",children:p("div",{class:"animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500"})}):D.length>0?p("ul",{class:"space-y-3",children:D.map(d=>p("li",{class:"bg-gray-700/50 rounded-lg p-3 flex items-center justify-between",children:[p("div",{class:"flex items-center space-x-3",children:[p("div",{class:"h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white",children:d.name.substring(0,2).toUpperCase()}),p("div",{children:[p("span",{class:"text-white text-sm font-medium block",children:d.name}),p("span",{class:"text-gray-400 text-xs",children:"Shared Room"})]})]}),p("button",{onClick:()=>f(d),class:"text-indigo-400 hover:text-indigo-300 text-sm font-medium",children:"Add"})]},d.id))}):p("p",{class:"text-gray-500 text-center py-2 text-sm",children:"No suggestions available."})]})]})]})})]})}function Xf({friend:n}){const[e,t]=M(null),[i,s]=M(!0);return Ke(()=>{pe.getFriendActivity(n.id).then(a=>{t(a),s(!1)})},[n.id]),p("div",{class:"bg-gray-800 border border-gray-700 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200",children:[p("div",{class:"flex justify-between items-start mb-4",children:[p("div",{class:"flex items-center space-x-3",children:[p("div",{class:"h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-200 font-bold border border-indigo-500/30",children:n.name.substring(0,2).toUpperCase()}),p("div",{children:[p("h3",{class:"font-bold text-white text-lg",children:n.name}),p("p",{class:"text-xs text-gray-400",children:"Level 5 Focus Master"})]})]}),p("div",{class:"bg-amber-900/30 text-amber-500 px-2 py-1 rounded text-xs font-mono border border-amber-500/20",children:"🔥 3 Day Streak"})]}),i?p("div",{class:"animate-pulse space-y-3",children:[p("div",{class:"h-4 bg-gray-700 rounded w-3/4"}),p("div",{class:"h-4 bg-gray-700 rounded w-1/2"})]}):p("div",{class:"mt-2",children:[p("div",{class:"grid grid-cols-2 gap-4 mb-4",children:[p("div",{class:"bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700",children:[p("span",{class:"block text-2xl font-bold text-white",children:e.completedSessions}),p("span",{class:"text-xs text-gray-400 uppercase tracking-wider",children:"Sessions"})]}),p("div",{class:"bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700",children:[p("span",{class:"block text-2xl font-bold text-white",children:e.nudgesReceived}),p("span",{class:"text-xs text-gray-400 uppercase tracking-wider",children:"Nudges"})]})]}),p("button",{class:"w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm flex justify-center items-center group",children:[p("span",{class:"mr-2 group-hover:scale-110 transition-transform",children:"👋"})," Send a Nudge"]})]})]})}function Yf({user:n}){const[e,t]=M([]),[i,s]=M(!0),[a,l]=M(null);return Ke(()=>{n&&(s(!0),pe.getFriends(n.uid).then(u=>{Array.isArray(u)?t(u):t([]),l(null)}).catch(u=>{l(u.message),t([])}).finally(()=>s(!1)))},[n]),p("div",{class:"container mx-auto p-6 max-w-5xl",children:[p("header",{class:"mb-8",children:[p("h2",{class:"text-3xl font-bold text-white",children:"Peer Progress"}),p("p",{class:"text-gray-400 mt-1",children:"Keep each other accountable and celebrate wins."})]}),i&&p("div",{class:"flex justify-center items-center py-12",children:p("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"})}),a&&p("div",{class:"bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6",children:["Error: ",a]}),!i&&!a&&p(nn,{children:e.length===0?p("div",{class:"text-center py-12 px-6 bg-gray-800 rounded-xl border border-gray-700",children:[p("div",{class:"text-6xl mb-4",children:"🌱"}),p("h3",{class:"text-xl font-medium text-white mb-2",children:"No accountability partners yet"}),p("p",{class:"text-gray-400 mb-6",children:"Add friends to start tracking progress together."}),p("button",{class:"bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors",children:"Find Friends"})]}):p("div",{class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(u=>p(Xf,{friend:u},u.id))})})]})}function Qf({setActivePage:n}){return p("div",{class:"container mx-auto p-6",children:[p("header",{class:"mb-10 text-center",children:[p("h1",{class:"text-4xl font-extrabold text-white mb-2",children:"Welcome Back!"}),p("p",{class:"text-gray-400 text-lg",children:"Choose where you want to go today."})]}),p("div",{class:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{id:"rooms",title:"Rooms",description:"Join or create focus rooms to work together.",color:"bg-indigo-500",icon:"🏠"},{id:"friends",title:"Friends",description:"See what your friends are up to and connect.",color:"bg-emerald-500",icon:"👥"},{id:"accountability",title:"Accountability",description:"Track progress and nudge your accountability partners.",color:"bg-amber-500",icon:"🔥"}].map(t=>p("div",{onClick:()=>n(t.id),class:"bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700",children:[p("div",{class:`${t.color} p-4 flex justify-center items-center h-24`,children:p("span",{class:"text-5xl",children:t.icon})}),p("div",{class:"p-6",children:[p("h2",{class:"text-2xl font-bold text-white mb-2",children:t.title}),p("p",{class:"text-gray-300",children:t.description}),p("div",{class:"mt-4 flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300",children:["Launch ",t.title," ",p("span",{class:"ml-2",children:"→"})]})]})]},t.id))})]})}function Zf(){const[n,e]=M(null),[t,i]=M(!0),[s,a]=M("dashboard");return Ke(()=>{if(!Yt)return console.error("Firebase Auth instance is null. Skipping authentication listeners."),i(!1),()=>{};const l=ka(Yt,u=>{e(u),i(!1)});return()=>l()},[]),t?p("div",{class:"min-h-screen flex items-center justify-center bg-gray-900 text-white",children:"Loading..."}):p("main",{class:"min-h-screen bg-gray-900 text-gray-100 font-sans",children:n?p("div",{class:"flex flex-col min-h-screen",children:[p(Kf,{activePage:s,setActivePage:a}),p("div",{class:"flex-grow",children:[s==="dashboard"&&p(Qf,{setActivePage:a}),s==="rooms"&&p(qf,{user:n}),s==="friends"&&p(Jf,{user:n}),s==="accountability"&&p(Yf,{user:n})]})]}):p(Df,{})})}Wc(p(Zf,{}),document.getElementById("app"));
