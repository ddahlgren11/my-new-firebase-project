(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Zn,B,Uo,Qe,Rs,Fo,jo,Vo,si,$r,Hr,Xt={},Bo=[],Uc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,er=Array.isArray;function Ce(n,e){for(var t in e)n[t]=e[t];return n}function oi(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Fc(n,e,t){var i,s,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?s=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?Zn.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)l[a]===void 0&&(l[a]=n.defaultProps[a]);return xn(n,l,i,s,null)}function xn(n,e,t,i,s){var a={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Uo,__i:-1,__u:0};return s==null&&B.vnode!=null&&B.vnode(a),a}function en(n){return n.children}function Nn(n,e){this.props=n,this.context=e}function bt(n,e){if(e==null)return n.__?bt(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?bt(n):null}function $o(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return $o(n)}}function xs(n){(!n.__d&&(n.__d=!0)&&Qe.push(n)&&!jn.__r++||Rs!=B.debounceRendering)&&((Rs=B.debounceRendering)||Fo)(jn)}function jn(){for(var n,e,t,i,s,a,l,u=1;Qe.length;)Qe.length>u&&Qe.sort(jo),n=Qe.shift(),u=Qe.length,n.__d&&(t=void 0,s=(i=(e=n).__v).__e,a=[],l=[],e.__P&&((t=Ce({},i)).__v=i.__v+1,B.vnode&&B.vnode(t),ai(e.__P,t,i,e.__n,e.__P.namespaceURI,32&i.__u?[s]:null,a,s??bt(i),!!(32&i.__u),l),t.__v=i.__v,t.__.__k[t.__i]=t,zo(a,t,l),t.__e!=s&&$o(t)));jn.__r=0}function Ho(n,e,t,i,s,a,l,u,m,_,A){var E,S,P,k,O,R,D,N=i&&i.__k||Bo,H=e.length;for(m=jc(t,e,N,m,H),E=0;E<H;E++)(P=t.__k[E])!=null&&(S=P.__i==-1?Xt:N[P.__i]||Xt,P.__i=E,R=ai(n,P,S,s,a,l,u,m,_,A),k=P.__e,P.ref&&S.ref!=P.ref&&(S.ref&&ci(S.ref,null,P),A.push(P.ref,P.__c||k,P)),O==null&&k!=null&&(O=k),(D=!!(4&P.__u))||S.__k===P.__k?m=Wo(P,m,n,D):typeof P.type=="function"&&R!==void 0?m=R:k&&(m=k.nextSibling),P.__u&=-7);return t.__e=O,m}function jc(n,e,t,i,s){var a,l,u,m,_,A=t.length,E=A,S=0;for(n.__k=new Array(s),a=0;a<s;a++)(l=e[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(m=a+S,(l=n.__k[a]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?xn(null,l,null,null,null):er(l)?xn(en,{children:l},null,null,null):l.constructor==null&&l.__b>0?xn(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=n,l.__b=n.__b+1,u=null,(_=l.__i=Vc(l,t,m,E))!=-1&&(E--,(u=t[_])&&(u.__u|=2)),u==null||u.__v==null?(_==-1&&(s>A?S--:s<A&&S++),typeof l.type!="function"&&(l.__u|=4)):_!=m&&(_==m-1?S--:_==m+1?S++:(_>m?S--:S++,l.__u|=4))):n.__k[a]=null;if(E)for(a=0;a<A;a++)(u=t[a])!=null&&(2&u.__u)==0&&(u.__e==i&&(i=bt(u)),qo(u,u));return i}function Wo(n,e,t,i){var s,a;if(typeof n.type=="function"){for(s=n.__k,a=0;s&&a<s.length;a++)s[a]&&(s[a].__=n,e=Wo(s[a],e,t,i));return e}n.__e!=e&&(i&&(e&&n.type&&!e.parentNode&&(e=bt(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Vc(n,e,t,i){var s,a,l,u=n.key,m=n.type,_=e[t],A=_!=null&&(2&_.__u)==0;if(_===null&&n.key==null||A&&u==_.key&&m==_.type)return t;if(i>(A?1:0)){for(s=t-1,a=t+1;s>=0||a<e.length;)if((_=e[l=s>=0?s--:a++])!=null&&(2&_.__u)==0&&u==_.key&&m==_.type)return l}return-1}function Ns(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Uc.test(e)?t:t+"px"}function An(n,e,t,i,s){var a,l;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Ns(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Ns(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Vo,"$1")),l=e.toLowerCase(),e=l in n||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?i?t.u=i.u:(t.u=si,n.addEventListener(e,a?Hr:$r,a)):n.removeEventListener(e,a?Hr:$r,a);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Ds(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=si++;else if(e.t<t.u)return;return t(B.event?B.event(e):e)}}}function ai(n,e,t,i,s,a,l,u,m,_){var A,E,S,P,k,O,R,D,N,H,J,Ie,Y,w,d,p,v,y=e.type;if(e.constructor!=null)return null;128&t.__u&&(m=!!(32&t.__u),a=[u=e.__e=t.__e]),(A=B.__b)&&A(e);e:if(typeof y=="function")try{if(D=e.props,N="prototype"in y&&y.prototype.render,H=(A=y.contextType)&&i[A.__c],J=A?H?H.props.value:A.__:i,t.__c?R=(E=e.__c=t.__c).__=E.__E:(N?e.__c=E=new y(D,J):(e.__c=E=new Nn(D,J),E.constructor=y,E.render=$c),H&&H.sub(E),E.props=D,E.state||(E.state={}),E.context=J,E.__n=i,S=E.__d=!0,E.__h=[],E._sb=[]),N&&E.__s==null&&(E.__s=E.state),N&&y.getDerivedStateFromProps!=null&&(E.__s==E.state&&(E.__s=Ce({},E.__s)),Ce(E.__s,y.getDerivedStateFromProps(D,E.__s))),P=E.props,k=E.state,E.__v=e,S)N&&y.getDerivedStateFromProps==null&&E.componentWillMount!=null&&E.componentWillMount(),N&&E.componentDidMount!=null&&E.__h.push(E.componentDidMount);else{if(N&&y.getDerivedStateFromProps==null&&D!==P&&E.componentWillReceiveProps!=null&&E.componentWillReceiveProps(D,J),!E.__e&&E.shouldComponentUpdate!=null&&E.shouldComponentUpdate(D,E.__s,J)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(E.props=D,E.state=E.__s,E.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(I){I&&(I.__=e)}),Ie=0;Ie<E._sb.length;Ie++)E.__h.push(E._sb[Ie]);E._sb=[],E.__h.length&&l.push(E);break e}E.componentWillUpdate!=null&&E.componentWillUpdate(D,E.__s,J),N&&E.componentDidUpdate!=null&&E.__h.push(function(){E.componentDidUpdate(P,k,O)})}if(E.context=J,E.props=D,E.__P=n,E.__e=!1,Y=B.__r,w=0,N){for(E.state=E.__s,E.__d=!1,Y&&Y(e),A=E.render(E.props,E.state,E.context),d=0;d<E._sb.length;d++)E.__h.push(E._sb[d]);E._sb=[]}else do E.__d=!1,Y&&Y(e),A=E.render(E.props,E.state,E.context),E.state=E.__s;while(E.__d&&++w<25);E.state=E.__s,E.getChildContext!=null&&(i=Ce(Ce({},i),E.getChildContext())),N&&!S&&E.getSnapshotBeforeUpdate!=null&&(O=E.getSnapshotBeforeUpdate(P,k)),p=A,A!=null&&A.type===en&&A.key==null&&(p=Go(A.props.children)),u=Ho(n,er(p)?p:[p],e,t,i,s,a,l,u,m,_),E.base=e.__e,e.__u&=-161,E.__h.length&&l.push(E),R&&(E.__E=E.__=null)}catch(I){if(e.__v=null,m||a!=null)if(I.then){for(e.__u|=m?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;a[a.indexOf(u)]=null,e.__e=u}else{for(v=a.length;v--;)oi(a[v]);Wr(e)}else e.__e=t.__e,e.__k=t.__k,I.then||Wr(e);B.__e(I,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):u=e.__e=Bc(t.__e,e,t,i,s,a,l,m,_);return(A=B.diffed)&&A(e),128&e.__u?void 0:u}function Wr(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(Wr)}function zo(n,e,t){for(var i=0;i<t.length;i++)ci(t[i],t[++i],t[++i]);B.__c&&B.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(a){a.call(s)})}catch(a){B.__e(a,s.__v)}})}function Go(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:er(n)?n.map(Go):Ce({},n)}function Bc(n,e,t,i,s,a,l,u,m){var _,A,E,S,P,k,O,R=t.props,D=e.props,N=e.type;if(N=="svg"?s="http://www.w3.org/2000/svg":N=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),a!=null){for(_=0;_<a.length;_++)if((P=a[_])&&"setAttribute"in P==!!N&&(N?P.localName==N:P.nodeType==3)){n=P,a[_]=null;break}}if(n==null){if(N==null)return document.createTextNode(D);n=document.createElementNS(s,N,D.is&&D),u&&(B.__m&&B.__m(e,a),u=!1),a=null}if(N==null)R===D||u&&n.data==D||(n.data=D);else{if(a=a&&Zn.call(n.childNodes),R=t.props||Xt,!u&&a!=null)for(R={},_=0;_<n.attributes.length;_++)R[(P=n.attributes[_]).name]=P.value;for(_ in R)if(P=R[_],_!="children"){if(_=="dangerouslySetInnerHTML")E=P;else if(!(_ in D)){if(_=="value"&&"defaultValue"in D||_=="checked"&&"defaultChecked"in D)continue;An(n,_,null,P,s)}}for(_ in D)P=D[_],_=="children"?S=P:_=="dangerouslySetInnerHTML"?A=P:_=="value"?k=P:_=="checked"?O=P:u&&typeof P!="function"||R[_]===P||An(n,_,P,R[_],s);if(A)u||E&&(A.__html==E.__html||A.__html==n.innerHTML)||(n.innerHTML=A.__html),e.__k=[];else if(E&&(n.innerHTML=""),Ho(e.type=="template"?n.content:n,er(S)?S:[S],e,t,i,N=="foreignObject"?"http://www.w3.org/1999/xhtml":s,a,l,a?a[0]:t.__k&&bt(t,0),u,m),a!=null)for(_=a.length;_--;)oi(a[_]);u||(_="value",N=="progress"&&k==null?n.removeAttribute("value"):k!=null&&(k!==n[_]||N=="progress"&&!k||N=="option"&&k!=R[_])&&An(n,_,k,R[_],s),_="checked",O!=null&&O!=n[_]&&An(n,_,O,R[_],s))}return n}function ci(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){B.__e(s,t)}}function qo(n,e,t){var i,s;if(B.unmount&&B.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||ci(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){B.__e(a,e)}i.base=i.__P=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&qo(i[s],e,t||typeof n.type!="function");t||oi(n.__e),n.__c=n.__=n.__e=void 0}function $c(n,e,t){return this.constructor(n,t)}function Hc(n,e,t){var i,s,a,l;e==document&&(e=document.documentElement),B.__&&B.__(n,e),s=(i=!1)?null:e.__k,a=[],l=[],ai(e,n=e.__k=Fc(en,null,[n]),s||Xt,Xt,e.namespaceURI,s?null:e.firstChild?Zn.call(e.childNodes):null,a,s?s.__e:e.firstChild,i,l),zo(a,n,l)}Zn=Bo.slice,B={__e:function(n,e,t,i){for(var s,a,l;e=e.__;)if((s=e.__c)&&!s.__)try{if((a=s.constructor)&&a.getDerivedStateFromError!=null&&(s.setState(a.getDerivedStateFromError(n)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),l=s.__d),l)return s.__E=s}catch(u){n=u}throw n}},Uo=0,Nn.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ce({},this.state),typeof n=="function"&&(n=n(Ce({},t),this.props)),n&&Ce(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),xs(this))},Nn.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),xs(this))},Nn.prototype.render=en,Qe=[],Fo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,jo=function(n,e){return n.__v.__b-e.__v.__b},jn.__r=0,Vo=/(PointerCapture)$|Capture$/i,si=0,$r=Ds(!1),Hr=Ds(!0);var Wc=0;function g(n,e,t,i,s,a){e||(e={});var l,u,m=e;if("ref"in m)for(u in m={},e)u=="ref"?l=e[u]:m[u]=e[u];var _={type:n,props:m,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Wc,__i:-1,__u:0,__source:s,__self:a};if(typeof n=="function"&&(l=n.defaultProps))for(u in l)m[u]===void 0&&(m[u]=l[u]);return B.vnode&&B.vnode(_),_}const zc=()=>{};var Os={};/**
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
 */const Ko=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],l=n[t++],u=n[t++],m=((s&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const a=n[t++],l=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},Jo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],l=s+1<n.length,u=l?n[s+1]:0,m=s+2<n.length,_=m?n[s+2]:0,A=a>>2,E=(a&3)<<4|u>>4;let S=(u&15)<<2|_>>6,P=_&63;m||(P=64,l||(S=64)),i.push(t[A],t[E],t[S],t[P])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ko(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const _=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||u==null||_==null||E==null)throw new qc;const S=a<<2|u>>4;if(i.push(S),_!==64){const P=u<<4&240|_>>2;if(i.push(P),E!==64){const k=_<<6&192|E;i.push(k)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kc=function(n){const e=Ko(n);return Jo.encodeByteArray(e,!0)},Vn=function(n){return Kc(n).replace(/\./g,"")},Xo=function(n){try{return Jo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xc=()=>Jc().__FIREBASE_DEFAULTS__,Yc=()=>{if(typeof process>"u"||typeof Os>"u")return;const n=Os.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xo(n[1]);return e&&JSON.parse(e)},li=()=>{try{return zc()||Xc()||Yc()||Qc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yo=n=>li()?.emulatorHosts?.[n],Qo=n=>{const e=Yo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Zo=()=>li()?.config,ea=n=>li()?.[`_${n}`];/**
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
 */class Zc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ct(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hi(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function el(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vn(JSON.stringify(t)),Vn(JSON.stringify(l)),""].join(".")}const Wt={};function tl(){const n={prod:[],emulator:[]};for(const e of Object.keys(Wt))Wt[e]?n.emulator.push(e):n.prod.push(e);return n}function nl(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ls=!1;function ui(n,e){if(typeof window>"u"||typeof document>"u"||!ct(window.location.host)||Wt[n]===e||Wt[n]||Ls)return;Wt[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",a=tl().prod.length>0;function l(){const S=document.getElementById(i);S&&S.remove()}function u(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,P){S.setAttribute("width","24"),S.setAttribute("id",P),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function _(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ls=!0,l()},S}function A(S,P){S.setAttribute("id",P),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=nl(i),P=t("text"),k=document.getElementById(P)||document.createElement("span"),O=t("learnmore"),R=document.getElementById(O)||document.createElement("a"),D=t("preprendIcon"),N=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const H=S.element;u(H),A(R,O);const J=_();m(N,D),H.append(N,k,R,J),document.body.appendChild(H)}a?(k.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function il(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ol(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function al(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cl(){try{return typeof indexedDB=="object"}catch{return!1}}function ll(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const hl="FirebaseError";class be extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=hl,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tn.prototype.create)}}class tn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?ul(a,i):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new be(s,u,i)}}function ul(n,e){return n.replace(dl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const dl=/\{\$([^}]+)}/g;function fl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function it(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],l=e[s];if(Ms(a)&&Ms(l)){if(!it(a,l))return!1}else if(a!==l)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ms(n){return n!==null&&typeof n=="object"}/**
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
 */function nn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function pl(n,e){const t=new gl(n,e);return t.subscribe.bind(t)}class gl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ml(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Nr),s.error===void 0&&(s.error=Nr),s.complete===void 0&&(s.complete=Nr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ml(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Nr(){}/**
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
 */function pe(n){return n&&n._delegate?n._delegate:n}class ze{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ye="[DEFAULT]";/**
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
 */class _l{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Zc;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vl(e))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=Ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ye){return this.instances.has(e)}getOptions(e=Ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);i===u&&l.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:yl(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ye){return this.component?this.component.multipleInstances?e:Ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yl(n){return n===Ye?void 0:n}function vl(n){return n.instantiationMode==="EAGER"}/**
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
 */class wl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _l(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const bl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Il=j.INFO,El={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Tl=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=El[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class di{constructor(e){this.name=e,this._logLevel=Il,this._logHandler=Tl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Sl=(n,e)=>e.some(t=>n instanceof t);let Us,Fs;function Al(){return Us||(Us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kl(){return Fs||(Fs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ta=new WeakMap,zr=new WeakMap,na=new WeakMap,Dr=new WeakMap,fi=new WeakMap;function Cl(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(He(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&ta.set(t,n)}).catch(()=>{}),fi.set(e,n),e}function Pl(n){if(zr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});zr.set(n,e)}let Gr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||na.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rl(n){Gr=n(Gr)}function xl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Or(this),e,...t);return na.set(i,e.sort?e.sort():[e]),He(i)}:kl().includes(n)?function(...e){return n.apply(Or(this),e),He(ta.get(this))}:function(...e){return He(n.apply(Or(this),e))}}function Nl(n){return typeof n=="function"?xl(n):(n instanceof IDBTransaction&&Pl(n),Sl(n,Al())?new Proxy(n,Gr):n)}function He(n){if(n instanceof IDBRequest)return Cl(n);if(Dr.has(n))return Dr.get(n);const e=Nl(n);return e!==n&&(Dr.set(n,e),fi.set(e,n)),e}const Or=n=>fi.get(n);function Dl(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const l=indexedDB.open(n,e),u=He(l);return i&&l.addEventListener("upgradeneeded",m=>{i(He(l.result),m.oldVersion,m.newVersion,He(l.transaction),m)}),t&&l.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),u.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",_=>s(_.oldVersion,_.newVersion,_))}).catch(()=>{}),u}const Ol=["get","getKey","getAll","getAllKeys","count"],Ll=["put","add","delete","clear"],Lr=new Map;function js(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Lr.get(e))return Lr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Ll.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ol.includes(t)))return;const a=async function(l,...u){const m=this.transaction(l,s?"readwrite":"readonly");let _=m.store;return i&&(_=_.index(u.shift())),(await Promise.all([_[t](...u),s&&m.done]))[0]};return Lr.set(e,a),a}Rl(n=>({...n,get:(e,t,i)=>js(e,t)||n.get(e,t,i),has:(e,t)=>!!js(e,t)||n.has(e,t)}));/**
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
 */class Ml{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ul(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ul(n){return n.getComponent()?.type==="VERSION"}const qr="@firebase/app",Vs="0.14.2";/**
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
 */const Ne=new di("@firebase/app"),Fl="@firebase/app-compat",jl="@firebase/analytics-compat",Vl="@firebase/analytics",Bl="@firebase/app-check-compat",$l="@firebase/app-check",Hl="@firebase/auth",Wl="@firebase/auth-compat",zl="@firebase/database",Gl="@firebase/data-connect",ql="@firebase/database-compat",Kl="@firebase/functions",Jl="@firebase/functions-compat",Xl="@firebase/installations",Yl="@firebase/installations-compat",Ql="@firebase/messaging",Zl="@firebase/messaging-compat",eh="@firebase/performance",th="@firebase/performance-compat",nh="@firebase/remote-config",rh="@firebase/remote-config-compat",ih="@firebase/storage",sh="@firebase/storage-compat",oh="@firebase/firestore",ah="@firebase/ai",ch="@firebase/firestore-compat",lh="firebase",hh="12.2.0";/**
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
 */const Kr="[DEFAULT]",uh={[qr]:"fire-core",[Fl]:"fire-core-compat",[Vl]:"fire-analytics",[jl]:"fire-analytics-compat",[$l]:"fire-app-check",[Bl]:"fire-app-check-compat",[Hl]:"fire-auth",[Wl]:"fire-auth-compat",[zl]:"fire-rtdb",[Gl]:"fire-data-connect",[ql]:"fire-rtdb-compat",[Kl]:"fire-fn",[Jl]:"fire-fn-compat",[Xl]:"fire-iid",[Yl]:"fire-iid-compat",[Ql]:"fire-fcm",[Zl]:"fire-fcm-compat",[eh]:"fire-perf",[th]:"fire-perf-compat",[nh]:"fire-rc",[rh]:"fire-rc-compat",[ih]:"fire-gcs",[sh]:"fire-gcs-compat",[oh]:"fire-fst",[ch]:"fire-fst-compat",[ah]:"fire-vertex","fire-js":"fire-js",[lh]:"fire-js-all"};/**
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
 */const Bn=new Map,dh=new Map,Jr=new Map;function Bs(n,e){try{n.container.addComponent(e)}catch(t){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function st(n){const e=n.name;if(Jr.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,n);for(const t of Bn.values())Bs(t,n);for(const t of dh.values())Bs(t,n);return!0}function tr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const fh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},We=new tn("app","Firebase",fh);/**
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
 */class ph{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
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
 */const Tt=hh;function ra(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Kr,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw We.create("bad-app-name",{appName:String(s)});if(t||(t=Zo()),!t)throw We.create("no-options");const a=Bn.get(s);if(a){if(it(t,a.options)&&it(i,a.config))return a;throw We.create("duplicate-app",{appName:s})}const l=new wl(s);for(const m of Jr.values())l.addComponent(m);const u=new ph(t,i,l);return Bn.set(s,u),u}function pi(n=Kr){const e=Bn.get(n);if(!e&&n===Kr&&Zo())return ra();if(!e)throw We.create("no-app",{appName:n});return e}function ye(n,e,t){let i=uh[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ne.warn(l.join(" "));return}st(new ze(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gh="firebase-heartbeat-database",mh=1,Yt="firebase-heartbeat-store";let Mr=null;function ia(){return Mr||(Mr=Dl(gh,mh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yt)}catch(t){console.warn(t)}}}}).catch(n=>{throw We.create("idb-open",{originalErrorMessage:n.message})})),Mr}async function _h(n){try{const t=(await ia()).transaction(Yt),i=await t.objectStore(Yt).get(sa(n));return await t.done,i}catch(e){if(e instanceof be)Ne.warn(e.message);else{const t=We.create("idb-get",{originalErrorMessage:e?.message});Ne.warn(t.message)}}}async function $s(n,e){try{const i=(await ia()).transaction(Yt,"readwrite");await i.objectStore(Yt).put(e,sa(n)),await i.done}catch(t){if(t instanceof be)Ne.warn(t.message);else{const i=We.create("idb-set",{originalErrorMessage:t?.message});Ne.warn(i.message)}}}function sa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yh=1024,vh=30;class wh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ih(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>vh){const s=Eh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ne.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hs(),{heartbeatsToSend:t,unsentEntries:i}=bh(this._heartbeatsCache.heartbeats),s=Vn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ne.warn(e),""}}}function Hs(){return new Date().toISOString().substring(0,10)}function bh(n,e=yh){const t=[];let i=n.slice();for(const s of n){const a=t.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),Ws(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ws(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Ih{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cl()?ll().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _h(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $s(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $s(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ws(n){return Vn(JSON.stringify({version:2,heartbeats:n})).length}function Eh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function Th(n){st(new ze("platform-logger",e=>new Ml(e),"PRIVATE")),st(new ze("heartbeat",e=>new wh(e),"PRIVATE")),ye(qr,Vs,n),ye(qr,Vs,"esm2020"),ye("fire-js","")}Th("");var Sh="firebase",Ah="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye(Sh,Ah,"app");function oa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kh=oa,aa=new tn("auth","Firebase",oa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new di("@firebase/auth");function Ch(n,...e){$n.logLevel<=j.WARN&&$n.warn(`Auth (${Tt}): ${n}`,...e)}function Dn(n,...e){$n.logLevel<=j.ERROR&&$n.error(`Auth (${Tt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,...e){throw mi(n,...e)}function fe(n,...e){return mi(n,...e)}function gi(n,e,t){const i={...kh(),[e]:t};return new tn("auth","Firebase",i).create(e,{appName:n.name})}function xe(n){return gi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ph(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&we(n,"argument-error"),gi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mi(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return aa.create(n,...e)}function x(n,e,...t){if(!n)throw mi(e,...t)}function Pe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dn(e),new Error(e)}function De(n,e){n||Pe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(){return typeof self<"u"&&self.location?.href||""}function Rh(){return zs()==="http:"||zs()==="https:"}function zs(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rh()||sl()||"connection"in navigator)?navigator.onLine:!0}function Nh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){this.shortDelay=e,this.longDelay=t,De(t>e,"Short delay should be less than long delay!"),this.isMobile=rl()||ol()}get(){return xh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){De(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Lh=new rn(3e4,6e4);function sn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function St(n,e,t,i,s={}){return la(n,s,async()=>{let a={},l={};i&&(e==="GET"?l=i:a={body:JSON.stringify(i)});const u=nn({key:n.config.apiKey,...l}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const _={method:e,headers:m,...a};return il()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&ct(n.emulatorConfig.host)&&(_.credentials="include"),ca.fetch()(await ha(n,n.config.apiHost,t,u),_)})}async function la(n,e,t){n._canInitEmulator=!1;const i={...Dh,...e};try{const s=new Mh(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw kn(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const u=a.ok?l.errorMessage:l.error.message,[m,_]=u.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw kn(n,"credential-already-in-use",l);if(m==="EMAIL_EXISTS")throw kn(n,"email-already-in-use",l);if(m==="USER_DISABLED")throw kn(n,"user-disabled",l);const A=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw gi(n,A,_);we(n,A)}}catch(s){if(s instanceof be)throw s;we(n,"network-request-failed",{message:String(s)})}}async function yi(n,e,t,i,s={}){const a=await St(n,e,t,i,s);return"mfaPendingCredential"in a&&we(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function ha(n,e,t,i){const s=`${e}${t}?${i}`,a=n,l=a.config.emulator?_i(n.config,s):`${n.config.apiScheme}://${s}`;return Oh.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}class Mh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(fe(this.auth,"network-request-failed")),Lh.get())})}}function kn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=fe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function Hn(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(n,e=!1){const t=pe(n),i=await t.getIdToken(e),s=vi(i);x(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a?.sign_in_provider;return{claims:s,token:i,authTime:zt(Ur(s.auth_time)),issuedAtTime:zt(Ur(s.iat)),expirationTime:zt(Ur(s.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Ur(n){return Number(n)*1e3}function vi(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Dn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xo(t);return s?JSON.parse(s):(Dn("Failed to decode base64 JWT payload"),null)}catch(s){return Dn("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Gs(n){const e=vi(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof be&&jh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function jh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zt(this.lastLoginAt),this.creationTime=zt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wn(n){const e=n.auth,t=await n.getIdToken(),i=await Qt(n,Hn(e,{idToken:t}));x(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=s.providerUserInfo?.length?ua(s.providerUserInfo):[],l=$h(n.providerData,a),u=n.isAnonymous,m=!(n.email&&s.passwordHash)&&!l?.length,_=u?m:!1,A={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yr(s.createdAt,s.lastLoginAt),isAnonymous:_};Object.assign(n,A)}async function Bh(n){const e=pe(n);await Wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $h(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ua(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(n,e){const t=await la(n,{},async()=>{const i=nn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,l=await ha(n,s,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:u,body:i};return n.emulatorConfig&&ct(n.emulatorConfig.host)&&(m.credentials="include"),ca.fetch()(l,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Wh(n,e){return St(n,"POST","/v2/accounts:revokeToken",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=Gs(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await Hh(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,l=new gt;return i&&(x(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),s&&(x(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(x(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gt,this.toJSON())}_performRefresh(){return Pe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ue{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Vh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fh(this,e)}reload(){return Bh(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Wn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(oe(this.auth.app))return Promise.reject(xe(this.auth));const e=await this.getIdToken();return await Qt(this,Uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,u=t.tenantId??void 0,m=t._redirectEventId??void 0,_=t.createdAt??void 0,A=t.lastLoginAt??void 0,{uid:E,emailVerified:S,isAnonymous:P,providerData:k,stsTokenManager:O}=t;x(E&&O,e,"internal-error");const R=gt.fromJSON(this.name,O);x(typeof E=="string",e,"internal-error"),je(i,e.name),je(s,e.name),x(typeof S=="boolean",e,"internal-error"),x(typeof P=="boolean",e,"internal-error"),je(a,e.name),je(l,e.name),je(u,e.name),je(m,e.name),je(_,e.name),je(A,e.name);const D=new ue({uid:E,auth:e,email:s,emailVerified:S,displayName:i,isAnonymous:P,photoURL:l,phoneNumber:a,tenantId:u,stsTokenManager:R,createdAt:_,lastLoginAt:A});return k&&Array.isArray(k)&&(D.providerData=k.map(N=>({...N}))),m&&(D._redirectEventId=m),D}static async _fromIdTokenResponse(e,t,i=!1){const s=new gt;s.updateFromServerResponse(t);const a=new ue({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Wn(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];x(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?ua(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!a?.length,u=new gt;u.updateFromIdToken(i);const m=new ue({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:l}),_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!a?.length};return Object.assign(m,_),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map;function Re(n){De(n instanceof Function,"Expected a class definition");let e=qs.get(n);return e?(De(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qs.set(n,e),e)}/**
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
 */class da{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}da.type="NONE";const Ks=da;/**
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
 */function On(n,e,t){return`firebase:${n}:${e}:${t}`}class mt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=On(this.userKey,s.apiKey,a),this.fullPersistenceKey=On("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Hn(this.auth,{idToken:e}).catch(()=>{});return t?ue._fromGetAccountInfoResponse(this.auth,t,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new mt(Re(Ks),e,i);const s=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=s[0]||Re(Ks);const l=On(i,e.config.apiKey,e.name);let u=null;for(const _ of t)try{const A=await _._get(l);if(A){let E;if(typeof A=="string"){const S=await Hn(e,{idToken:A}).catch(()=>{});if(!S)break;E=await ue._fromGetAccountInfoResponse(e,S,A)}else E=ue._fromJSON(e,A);_!==a&&(u=E),a=_;break}}catch{}const m=s.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new mt(a,e,i):(a=m[0],u&&await a._set(l,u.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(l)}catch{}})),new mt(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ma(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ya(e))return"Blackberry";if(va(e))return"Webos";if(pa(e))return"Safari";if((e.includes("chrome/")||ga(e))&&!e.includes("edge/"))return"Chrome";if(_a(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function fa(n=se()){return/firefox\//i.test(n)}function pa(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ga(n=se()){return/crios\//i.test(n)}function ma(n=se()){return/iemobile/i.test(n)}function _a(n=se()){return/android/i.test(n)}function ya(n=se()){return/blackberry/i.test(n)}function va(n=se()){return/webos/i.test(n)}function wi(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zh(n=se()){return wi(n)&&!!window.navigator?.standalone}function Gh(){return al()&&document.documentMode===10}function wa(n=se()){return wi(n)||_a(n)||va(n)||ya(n)||/windows phone/i.test(n)||ma(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n,e=[]){let t;switch(n){case"Browser":t=Js(se());break;case"Worker":t=`${Js(se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tt}/${i}`}/**
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
 */class qh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((l,u)=>{try{const m=e(a);l(m)}catch(m){u(m)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Kh(n,e={}){return St(n,"GET","/v2/passwordPolicy",sn(n,e))}/**
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
 */const Jh=6;class Xh{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Jh,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xs(this),this.idTokenSubscription=new Xs(this),this.beforeStateQueue=new qh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Re(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await mt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Hn(this,{idToken:e}),i=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(oe(this.app))return Promise.reject(xe(this));const t=e?pe(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return oe(this.app)?Promise.reject(xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return oe(this.app)?Promise.reject(xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kh(this),t=new Xh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new tn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Wh(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Re(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await mt.create(this,[Re(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(u,this,"internal-error"),u.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,s);return()=>{l=!0,m()}}else{const m=e.addObserver(t);return()=>{l=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ba(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ch(`Error while retrieving App Check token: ${e.error}`),e?.token}}function At(n){return pe(n)}class Xs{constructor(e){this.auth=e,this.observer=null,this.addObserver=pl(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qh(n){bi=n}function Zh(n){return bi.loadJS(n)}function eu(){return bi.gapiScript}function tu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n,e){const t=tr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(it(a,e??{}))return s;we(s,"already-initialized")}return t.initialize({options:e})}function ru(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Re);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Ia(n,e,t){const i=At(n);x(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=Ea(e),{host:l,port:u}=iu(e),m=u===null?"":`:${u}`,_={url:`${a}//${l}${m}/`},A=Object.freeze({host:l,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){x(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),x(it(_,i.config.emulator)&&it(A,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=A,i.settings.appVerificationDisabledForTesting=!0,ct(l)?(hi(`${a}//${l}${m}`),ui("Auth",!0)):su()}function Ea(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iu(n){const e=Ea(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:Ys(i.substr(a.length+1))}}else{const[a,l]=i.split(":");return{host:a,port:Ys(l)}}}function Ys(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function su(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pe("not implemented")}_getIdTokenResponse(e){return Pe("not implemented")}_linkToIdToken(e,t){return Pe("not implemented")}_getReauthenticationResolver(e){return Pe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(n,e){return yi(n,"POST","/v1/accounts:signInWithIdp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="http://localhost";class ot extends Ta{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):we("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...a}=t;if(!i||!s)return null;const l=new ot(i,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return _t(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,_t(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_t(e,t)}buildRequest(){const e={requestUri:ou,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class on extends Ii{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends on{constructor(){super("facebook.com")}static credential(e){return ot._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ve.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends on{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ot._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ae.credential(t,i)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends on{constructor(){super("github.com")}static credential(e){return ot._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch{return null}}}Be.GITHUB_SIGN_IN_METHOD="github.com";Be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends on{constructor(){super("twitter.com")}static credential(e,t){return ot._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return $e.credential(t,i)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(n,e){return yi(n,"POST","/v1/accounts:signUp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await ue._fromIdTokenResponse(e,i,s),l=Qs(i);return new Oe({user:a,providerId:l,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Qs(i);return new Oe({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Qs(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(n){if(oe(n.app))return Promise.reject(xe(n));const e=At(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Oe({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await au(e,{returnSecureToken:!0}),i=await Oe._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends be{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,zn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new zn(e,t,i,s)}}function Sa(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?zn._fromErrorAndOperation(n,a,e,i):a})}async function lu(n,e,t=!1){const i=await Qt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Oe._forOperation(n,"link",i)}/**
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
 */async function hu(n,e,t=!1){const{auth:i}=n;if(oe(i.app))return Promise.reject(xe(i));const s="reauthenticate";try{const a=await Qt(n,Sa(i,s,e,n),t);x(a.idToken,i,"internal-error");const l=vi(a.idToken);x(l,i,"internal-error");const{sub:u}=l;return x(n.uid===u,i,"user-mismatch"),Oe._forOperation(n,s,a)}catch(a){throw a?.code==="auth/user-not-found"&&we(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(n,e,t=!1){if(oe(n.app))return Promise.reject(xe(n));const i="signIn",s=await Sa(n,i,e),a=await Oe._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(n,e){return yi(n,"POST","/v1/accounts:signInWithCustomToken",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(n,e){if(oe(n.app))return Promise.reject(xe(n));const t=At(n),i=await du(t,{token:e,returnSecureToken:!0}),s=await Oe._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}function pu(n,e,t,i){return pe(n).onIdTokenChanged(e,t,i)}function gu(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function Aa(n,e,t,i){return pe(n).onAuthStateChanged(e,t,i)}function mu(n){return pe(n).signOut()}const Gn="__sak";/**
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
 */class ka{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gn,"1"),this.storage.removeItem(Gn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=1e3,yu=10;class Ca extends ka{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,m)=>{this.notifyListeners(l,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(i);!t&&this.localCache[i]===l||this.notifyListeners(i,l)},a=this.storage.getItem(i);Gh()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},_u)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ca.type="LOCAL";const vu=Ca;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends ka{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pa.type="SESSION";const Ra=Pa;/**
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
 */function wu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class nr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new nr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,l=this.handlersMap[s];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(l).map(async _=>_(t.origin,a)),m=await wu(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class bu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((u,m)=>{const _=Ei("",20);s.port1.start();const A=setTimeout(()=>{m(new Error("unsupported_event"))},i);l={messageChannel:s,onMessage(E){const S=E;if(S.data.eventId===_)switch(S.data.status){case"ack":clearTimeout(A),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(S.data.response);break;default:clearTimeout(A),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return window}function Iu(n){ve().location.href=n}/**
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
 */function xa(){return typeof ve().WorkerGlobalScope<"u"&&typeof ve().importScripts=="function"}async function Eu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tu(){return navigator?.serviceWorker?.controller||null}function Su(){return xa()?self:null}/**
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
 */const Na="firebaseLocalStorageDb",Au=1,qn="firebaseLocalStorage",Da="fbase_key";class an{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rr(n,e){return n.transaction([qn],e?"readwrite":"readonly").objectStore(qn)}function ku(){const n=indexedDB.deleteDatabase(Na);return new an(n).toPromise()}function Qr(){const n=indexedDB.open(Na,Au);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(qn,{keyPath:Da})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(qn)?e(i):(i.close(),await ku(),e(await Qr()))})})}async function Zs(n,e,t){const i=rr(n,!0).put({[Da]:e,value:t});return new an(i).toPromise()}async function Cu(n,e){const t=rr(n,!1).get(e),i=await new an(t).toPromise();return i===void 0?null:i.value}function eo(n,e){const t=rr(n,!0).delete(e);return new an(t).toPromise()}const Pu=800,Ru=3;class Oa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ru)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nr._getInstance(Su()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Eu(),!this.activeServiceWorker)return;this.sender=new bu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await Zs(e,Gn,"1"),await eo(e,Gn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zs(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Cu(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=rr(s,!1).getAll();return new an(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oa.type="LOCAL";const xu=Oa;new rn(3e4,6e4);/**
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
 */function La(n,e){return e?Re(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ti extends Ta{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _t(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _t(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _t(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nu(n){return uu(n.auth,new Ti(n),n.bypassAuthState)}function Du(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),hu(t,new Ti(n),n.bypassAuthState)}async function Ou(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),lu(t,new Ti(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:l,type:u}=e;if(l){this.reject(l);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nu;case"linkViaPopup":case"linkViaRedirect":return Ou;case"reauthViaPopup":case"reauthViaRedirect":return Du;default:we(this.auth,"internal-error")}}resolve(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new rn(2e3,1e4);async function Mu(n,e,t){if(oe(n.app))return Promise.reject(fe(n,"operation-not-supported-in-this-environment"));const i=At(n);Ph(n,e,Ii);const s=La(i,t);return new et(i,"signInViaPopup",e,s).executeNotNull()}class et extends Ma{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,et.currentPopupAction&&et.currentPopupAction.cancel(),et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){De(this.filter.length===1,"Popup operations only handle one event");const e=Ei();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,et.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lu.get())};e()}}et.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="pendingRedirect",Ln=new Map;class Fu extends Ma{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ln.get(this.auth._key());if(!e){try{const i=await ju(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ln.set(this.auth._key(),e)}return this.bypassAuthState||Ln.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ju(n,e){const t=$u(e),i=Bu(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Vu(n,e){Ln.set(n._key(),e)}function Bu(n){return Re(n._redirectPersistence)}function $u(n){return On(Uu,n.config.apiKey,n.name)}async function Hu(n,e,t=!1){if(oe(n.app))return Promise.reject(xe(n));const i=At(n),s=La(i,e),l=await new Fu(i,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=600*1e3;class zu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Ua(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wu&&this.cachedEventUids.clear(),this.cachedEventUids.has(to(e))}saveEventToCache(e){this.cachedEventUids.add(to(e)),this.lastProcessedEventTime=Date.now()}}function to(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ua({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Gu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ua(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(n,e={}){return St(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ju=/^https?/;async function Xu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qu(n);for(const t of e)try{if(Yu(t))return}catch{}we(n,"unauthorized-domain")}function Yu(n){const e=Xr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===i}if(!Ju.test(t))return!1;if(Ku.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Qu=new rn(3e4,6e4);function no(){const n=ve().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zu(n){return new Promise((e,t)=>{function i(){no(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{no(),t(fe(n,"network-request-failed"))},timeout:Qu.get()})}if(ve().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ve().gapi?.load)i();else{const s=tu("iframefcb");return ve()[s]=()=>{gapi.load?i():t(fe(n,"network-request-failed"))},Zh(`${eu()}?onload=${s}`).catch(a=>t(a))}}).catch(e=>{throw Mn=null,e})}let Mn=null;function ed(n){return Mn=Mn||Zu(n),Mn}/**
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
 */const td=new rn(5e3,15e3),nd="__/auth/iframe",rd="emulator/auth/iframe",id={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function od(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_i(e,rd):`https://${n.config.authDomain}/${nd}`,i={apiKey:e.apiKey,appName:n.name,v:Tt},s=sd.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${nn(i).slice(1)}`}async function ad(n){const e=await ed(n),t=ve().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:od(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:id,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const l=fe(n,"network-request-failed"),u=ve().setTimeout(()=>{a(l)},td.get());function m(){ve().clearTimeout(u),s(i)}i.ping(m).then(m,()=>{a(l)})}))}/**
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
 */const cd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ld=500,hd=600,ud="_blank",dd="http://localhost";class ro{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fd(n,e,t,i=ld,s=hd){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const m={...cd,width:i.toString(),height:s.toString(),top:a,left:l},_=se().toLowerCase();t&&(u=ga(_)?ud:t),fa(_)&&(e=e||dd,m.scrollbars="yes");const A=Object.entries(m).reduce((S,[P,k])=>`${S}${P}=${k},`,"");if(zh(_)&&u!=="_self")return pd(e||"",u),new ro(null);const E=window.open(e||"",u,A);x(E,n,"popup-blocked");try{E.focus()}catch{}return new ro(E)}function pd(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const gd="__/auth/handler",md="emulator/auth/handler",_d=encodeURIComponent("fac");async function io(n,e,t,i,s,a){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Tt,eventId:s};if(e instanceof Ii){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",fl(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,E]of Object.entries({}))l[A]=E}if(e instanceof on){const A=e.getScopes().filter(E=>E!=="");A.length>0&&(l.scopes=A.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const A of Object.keys(u))u[A]===void 0&&delete u[A];const m=await n._getAppCheckToken(),_=m?`#${_d}=${encodeURIComponent(m)}`:"";return`${yd(n)}?${nn(u).slice(1)}${_}`}function yd({config:n}){return n.emulator?_i(n,md):`https://${n.authDomain}/${gd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="webStorageSupport";class vd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ra,this._completeRedirectFn=Hu,this._overrideRedirectResult=Vu}async _openPopup(e,t,i,s){De(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await io(e,t,i,Xr(),s);return fd(e,a,Ei())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await io(e,t,i,Xr(),s);return Iu(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(De(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ad(e),i=new zu(e);return t.register("authEvent",s=>(x(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fr,{type:Fr},s=>{const a=s?.[0]?.[Fr];a!==void 0&&t(!!a),we(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wa()||pa()||wi()}}const wd=vd;var so="@firebase/auth",oo="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ed(n){st(new ze("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;x(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ba(n)},_=new Yh(i,s,a,m);return ru(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),st(new ze("auth-internal",e=>{const t=At(e.getProvider("auth").getImmediate());return(i=>new bd(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ye(so,oo,Id(n)),ye(so,oo,"esm2020")}/**
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
 */const Td=300,Sd=ea("authIdTokenMaxAge")||Td;let ao=null;const Ad=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Sd)return;const s=t?.token;ao!==s&&(ao=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kd(n=pi()){const e=tr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nu(n,{popupRedirectResolver:wd,persistence:[xu,vu,Ra]}),i=ea("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const l=Ad(a.toString());gu(t,l,()=>l(t.currentUser)),pu(t,u=>l(u))}}const s=Yo("auth");return s&&Ia(t,`http://${s}`),t}function Cd(){return document.getElementsByTagName("head")?.[0]??document}Qh({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=fe("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",Cd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ed("Browser");var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,d){function p(){}p.prototype=d.prototype,w.D=d.prototype,w.prototype=new p,w.prototype.constructor=w,w.C=function(v,y,I){for(var f=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)f[Ee-2]=arguments[Ee];return d.prototype[y].apply(v,f)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,d,p){p||(p=0);var v=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)v[y]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(y=0;16>y;++y)v[y]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=w.g[0],p=w.g[1],y=w.g[2];var I=w.g[3],f=d+(I^p&(y^I))+v[0]+3614090360&4294967295;d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+v[1]+3905402710&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+v[2]+606105819&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+v[3]+3250441966&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+v[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+v[5]+1200080426&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+v[6]+2821735955&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+v[7]+4249261313&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+v[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+v[9]+2336552879&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+v[10]+4294925233&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+v[11]+2304563134&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+v[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+v[13]+4254626195&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+v[14]+2792965006&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+v[15]+1236535329&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(y^I&(p^y))+v[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+v[6]+3225465664&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+v[11]+643717713&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+v[0]+3921069994&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+v[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+v[10]+38016083&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+v[15]+3634488961&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+v[4]+3889429448&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+v[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+v[14]+3275163606&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+v[3]+4107603335&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+v[8]+1163531501&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+v[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+v[2]+4243563512&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+v[7]+1735328473&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+v[12]+2368359562&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(p^y^I)+v[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+v[8]+2272392833&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+v[11]+1839030562&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+v[14]+4259657740&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+v[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+v[4]+1272893353&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+v[7]+4139469664&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+v[10]+3200236656&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+v[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+v[0]+3936430074&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+v[3]+3572445317&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+v[6]+76029189&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+v[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+v[12]+3873151461&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+v[15]+530742520&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+v[2]+3299628645&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(y^(p|~I))+v[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+v[7]+1126891415&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+v[14]+2878612391&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+v[5]+4237533241&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+v[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+v[3]+2399980690&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+v[10]+4293915773&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+v[1]+2240044497&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+v[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+v[15]+4264355552&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+v[6]+2734768916&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+v[13]+1309151649&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+v[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+v[11]+3174756917&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+v[2]+718787259&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+d&4294967295,w.g[1]=w.g[1]+(y+(f<<21&4294967295|f>>>11))&4294967295,w.g[2]=w.g[2]+y&4294967295,w.g[3]=w.g[3]+I&4294967295}i.prototype.u=function(w,d){d===void 0&&(d=w.length);for(var p=d-this.blockSize,v=this.B,y=this.h,I=0;I<d;){if(y==0)for(;I<=p;)s(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<d;)if(v[y++]=w.charCodeAt(I++),y==this.blockSize){s(this,v),y=0;break}}else for(;I<d;)if(v[y++]=w[I++],y==this.blockSize){s(this,v),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var d=1;d<w.length-8;++d)w[d]=0;var p=8*this.o;for(d=w.length-8;d<w.length;++d)w[d]=p&255,p/=256;for(this.u(w),w=Array(16),d=p=0;4>d;++d)for(var v=0;32>v;v+=8)w[p++]=this.g[d]>>>v&255;return w};function a(w,d){var p=u;return Object.prototype.hasOwnProperty.call(p,w)?p[w]:p[w]=d(w)}function l(w,d){this.h=d;for(var p=[],v=!0,y=w.length-1;0<=y;y--){var I=w[y]|0;v&&I==d||(p[y]=I,v=!1)}this.g=p}var u={};function m(w){return-128<=w&&128>w?a(w,function(d){return new l([d|0],0>d?-1:0)}):new l([w|0],0>w?-1:0)}function _(w){if(isNaN(w)||!isFinite(w))return E;if(0>w)return R(_(-w));for(var d=[],p=1,v=0;w>=p;v++)d[v]=w/p|0,p*=4294967296;return new l(d,0)}function A(w,d){if(w.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(w.charAt(0)=="-")return R(A(w.substring(1),d));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=_(Math.pow(d,8)),v=E,y=0;y<w.length;y+=8){var I=Math.min(8,w.length-y),f=parseInt(w.substring(y,y+I),d);8>I?(I=_(Math.pow(d,I)),v=v.j(I).add(_(f))):(v=v.j(p),v=v.add(_(f)))}return v}var E=m(0),S=m(1),P=m(16777216);n=l.prototype,n.m=function(){if(O(this))return-R(this).m();for(var w=0,d=1,p=0;p<this.g.length;p++){var v=this.i(p);w+=(0<=v?v:4294967296+v)*d,d*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(O(this))return"-"+R(this).toString(w);for(var d=_(Math.pow(w,6)),p=this,v="";;){var y=J(p,d).g;p=D(p,y.j(d));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(w);if(p=y,k(p))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var d=0;d<w.g.length;d++)if(w.g[d]!=0)return!1;return!0}function O(w){return w.h==-1}n.l=function(w){return w=D(this,w),O(w)?-1:k(w)?0:1};function R(w){for(var d=w.g.length,p=[],v=0;v<d;v++)p[v]=~w.g[v];return new l(p,~w.h).add(S)}n.abs=function(){return O(this)?R(this):this},n.add=function(w){for(var d=Math.max(this.g.length,w.g.length),p=[],v=0,y=0;y<=d;y++){var I=v+(this.i(y)&65535)+(w.i(y)&65535),f=(I>>>16)+(this.i(y)>>>16)+(w.i(y)>>>16);v=f>>>16,I&=65535,f&=65535,p[y]=f<<16|I}return new l(p,p[p.length-1]&-2147483648?-1:0)};function D(w,d){return w.add(R(d))}n.j=function(w){if(k(this)||k(w))return E;if(O(this))return O(w)?R(this).j(R(w)):R(R(this).j(w));if(O(w))return R(this.j(R(w)));if(0>this.l(P)&&0>w.l(P))return _(this.m()*w.m());for(var d=this.g.length+w.g.length,p=[],v=0;v<2*d;v++)p[v]=0;for(v=0;v<this.g.length;v++)for(var y=0;y<w.g.length;y++){var I=this.i(v)>>>16,f=this.i(v)&65535,Ee=w.i(y)>>>16,kt=w.i(y)&65535;p[2*v+2*y]+=f*kt,N(p,2*v+2*y),p[2*v+2*y+1]+=I*kt,N(p,2*v+2*y+1),p[2*v+2*y+1]+=f*Ee,N(p,2*v+2*y+1),p[2*v+2*y+2]+=I*Ee,N(p,2*v+2*y+2)}for(v=0;v<d;v++)p[v]=p[2*v+1]<<16|p[2*v];for(v=d;v<2*d;v++)p[v]=0;return new l(p,0)};function N(w,d){for(;(w[d]&65535)!=w[d];)w[d+1]+=w[d]>>>16,w[d]&=65535,d++}function H(w,d){this.g=w,this.h=d}function J(w,d){if(k(d))throw Error("division by zero");if(k(w))return new H(E,E);if(O(w))return d=J(R(w),d),new H(R(d.g),R(d.h));if(O(d))return d=J(w,R(d)),new H(R(d.g),d.h);if(30<w.g.length){if(O(w)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var p=S,v=d;0>=v.l(w);)p=Ie(p),v=Ie(v);var y=Y(p,1),I=Y(v,1);for(v=Y(v,2),p=Y(p,2);!k(v);){var f=I.add(v);0>=f.l(w)&&(y=y.add(p),I=f),v=Y(v,1),p=Y(p,1)}return d=D(w,y.j(d)),new H(y,d)}for(y=E;0<=w.l(d);){for(p=Math.max(1,Math.floor(w.m()/d.m())),v=Math.ceil(Math.log(p)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=_(p),f=I.j(d);O(f)||0<f.l(w);)p-=v,I=_(p),f=I.j(d);k(I)&&(I=S),y=y.add(I),w=D(w,f)}return new H(y,w)}n.A=function(w){return J(this,w).h},n.and=function(w){for(var d=Math.max(this.g.length,w.g.length),p=[],v=0;v<d;v++)p[v]=this.i(v)&w.i(v);return new l(p,this.h&w.h)},n.or=function(w){for(var d=Math.max(this.g.length,w.g.length),p=[],v=0;v<d;v++)p[v]=this.i(v)|w.i(v);return new l(p,this.h|w.h)},n.xor=function(w){for(var d=Math.max(this.g.length,w.g.length),p=[],v=0;v<d;v++)p[v]=this.i(v)^w.i(v);return new l(p,this.h^w.h)};function Ie(w){for(var d=w.g.length+1,p=[],v=0;v<d;v++)p[v]=w.i(v)<<1|w.i(v-1)>>>31;return new l(p,w.h)}function Y(w,d){var p=d>>5;d%=32;for(var v=w.g.length-p,y=[],I=0;I<v;I++)y[I]=0<d?w.i(I+p)>>>d|w.i(I+p+1)<<32-d:w.i(I+p);return new l(y,w.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=A,Si=l}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});var Cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,o,c){return r==Array.prototype||r==Object.prototype||(r[o]=c.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cn=="object"&&Cn];for(var o=0;o<r.length;++o){var c=r[o];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=t(this);function s(r,o){if(o)e:{var c=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var b=r[h];if(!(b in c))break e;c=c[b]}r=r[r.length-1],h=c[r],o=o(h),o!=h&&o!=null&&e(c,r,{configurable:!0,writable:!0,value:o})}}function a(r,o){r instanceof String&&(r+="");var c=0,h=!1,b={next:function(){if(!h&&c<r.length){var T=c++;return{value:o(T,r[T]),done:!1}}return h=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(r){return r||function(){return a(this,function(o,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function m(r){var o=typeof r;return o=o!="object"?o:r?Array.isArray(r)?"array":o:"null",o=="array"||o=="object"&&typeof r.length=="number"}function _(r){var o=typeof r;return o=="object"&&r!=null||o=="function"}function A(r,o,c){return r.call.apply(r.bind,arguments)}function E(r,o,c){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,h),r.apply(o,b)}}return function(){return r.apply(o,arguments)}}function S(r,o,c){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:E,S.apply(null,arguments)}function P(r,o){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function k(r,o){function c(){}c.prototype=o.prototype,r.aa=o.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(h,b,T){for(var C=Array(arguments.length-2),V=2;V<arguments.length;V++)C[V-2]=arguments[V];return o.prototype[b].apply(h,C)}}function O(r){const o=r.length;if(0<o){const c=Array(o);for(let h=0;h<o;h++)c[h]=r[h];return c}return[]}function R(r,o){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(m(h)){const b=r.length||0,T=h.length||0;r.length=b+T;for(let C=0;C<T;C++)r[b+C]=h[C]}else r.push(h)}}class D{constructor(o,c){this.i=o,this.j=c,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function N(r){return/^[\s\xa0]*$/.test(r)}function H(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function J(r){return J[" "](r),r}J[" "]=function(){};var Ie=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function Y(r,o,c){for(const h in r)o.call(c,r[h],h,r)}function w(r,o){for(const c in r)o.call(void 0,r[c],c,r)}function d(r){const o={};for(const c in r)o[c]=r[c];return o}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(r,o){let c,h;for(let b=1;b<arguments.length;b++){h=arguments[b];for(c in h)r[c]=h[c];for(let T=0;T<p.length;T++)c=p[T],Object.prototype.hasOwnProperty.call(h,c)&&(r[c]=h[c])}}function y(r){var o=1;r=r.split(":");const c=[];for(;0<o&&r.length;)c.push(r.shift()),o--;return r.length&&c.push(r.join(":")),c}function I(r){u.setTimeout(()=>{throw r},0)}function f(){var r=or;let o=null;return r.g&&(o=r.g,r.g=r.g.next,r.g||(r.h=null),o.next=null),o}class Ee{constructor(){this.h=this.g=null}add(o,c){const h=kt.get();h.set(o,c),this.h?this.h.next=h:this.g=h,this.h=h}}var kt=new D(()=>new ec,r=>r.reset());class ec{constructor(){this.next=this.g=this.h=null}set(o,c){this.h=o,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ct,Pt=!1,or=new Ee,Ni=()=>{const r=u.Promise.resolve(void 0);Ct=()=>{r.then(tc)}};var tc=()=>{for(var r;r=f();){try{r.h.call(r.g)}catch(c){I(c)}var o=kt;o.j(r),100>o.h&&(o.h++,r.next=o.g,o.g=r)}Pt=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(r,o){this.type=r,this.g=this.target=o,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var nc=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,o=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};u.addEventListener("test",c,o),u.removeEventListener("test",c,o)}catch{}return r})();function Rt(r,o){if(Q.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=o,o=r.relatedTarget){if(Ie){e:{try{J(o.nodeName);var b=!0;break e}catch{}b=!1}b||(o=null)}}else c=="mouseover"?o=r.fromElement:c=="mouseout"&&(o=r.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:rc[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Rt.aa.h.call(this)}}k(Rt,Q);var rc={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),ic=0;function sc(r,o,c,h,b){this.listener=r,this.proxy=null,this.src=o,this.type=c,this.capture=!!h,this.ha=b,this.key=++ic,this.da=this.fa=!1}function un(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function dn(r){this.src=r,this.g={},this.h=0}dn.prototype.add=function(r,o,c,h,b){var T=r.toString();r=this.g[T],r||(r=this.g[T]=[],this.h++);var C=cr(r,o,h,b);return-1<C?(o=r[C],c||(o.fa=!1)):(o=new sc(o,this.src,T,!!h,b),o.fa=c,r.push(o)),o};function ar(r,o){var c=o.type;if(c in r.g){var h=r.g[c],b=Array.prototype.indexOf.call(h,o,void 0),T;(T=0<=b)&&Array.prototype.splice.call(h,b,1),T&&(un(o),r.g[c].length==0&&(delete r.g[c],r.h--))}}function cr(r,o,c,h){for(var b=0;b<r.length;++b){var T=r[b];if(!T.da&&T.listener==o&&T.capture==!!c&&T.ha==h)return b}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),hr={};function Di(r,o,c,h,b){if(Array.isArray(o)){for(var T=0;T<o.length;T++)Di(r,o[T],c,h,b);return null}return c=Mi(c),r&&r[hn]?r.K(o,c,_(h)?!!h.capture:!1,b):oc(r,o,c,!1,h,b)}function oc(r,o,c,h,b,T){if(!o)throw Error("Invalid event type");var C=_(b)?!!b.capture:!!b,V=dr(r);if(V||(r[lr]=V=new dn(r)),c=V.add(o,c,h,C,T),c.proxy)return c;if(h=ac(),c.proxy=h,h.src=r,h.listener=c,r.addEventListener)nc||(b=C),b===void 0&&(b=!1),r.addEventListener(o.toString(),h,b);else if(r.attachEvent)r.attachEvent(Li(o.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function ac(){function r(c){return o.call(r.src,r.listener,c)}const o=cc;return r}function Oi(r,o,c,h,b){if(Array.isArray(o))for(var T=0;T<o.length;T++)Oi(r,o[T],c,h,b);else h=_(h)?!!h.capture:!!h,c=Mi(c),r&&r[hn]?(r=r.i,o=String(o).toString(),o in r.g&&(T=r.g[o],c=cr(T,c,h,b),-1<c&&(un(T[c]),Array.prototype.splice.call(T,c,1),T.length==0&&(delete r.g[o],r.h--)))):r&&(r=dr(r))&&(o=r.g[o.toString()],r=-1,o&&(r=cr(o,c,h,b)),(c=-1<r?o[r]:null)&&ur(c))}function ur(r){if(typeof r!="number"&&r&&!r.da){var o=r.src;if(o&&o[hn])ar(o.i,r);else{var c=r.type,h=r.proxy;o.removeEventListener?o.removeEventListener(c,h,r.capture):o.detachEvent?o.detachEvent(Li(c),h):o.addListener&&o.removeListener&&o.removeListener(h),(c=dr(o))?(ar(c,r),c.h==0&&(c.src=null,o[lr]=null)):un(r)}}}function Li(r){return r in hr?hr[r]:hr[r]="on"+r}function cc(r,o){if(r.da)r=!0;else{o=new Rt(o,this);var c=r.listener,h=r.ha||r.src;r.fa&&ur(r),r=c.call(h,o)}return r}function dr(r){return r=r[lr],r instanceof dn?r:null}var fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mi(r){return typeof r=="function"?r:(r[fr]||(r[fr]=function(o){return r.handleEvent(o)}),r[fr])}function Z(){Le.call(this),this.i=new dn(this),this.M=this,this.F=null}k(Z,Le),Z.prototype[hn]=!0,Z.prototype.removeEventListener=function(r,o,c,h){Oi(this,r,o,c,h)};function ne(r,o){var c,h=r.F;if(h)for(c=[];h;h=h.F)c.push(h);if(r=r.M,h=o.type||o,typeof o=="string")o=new Q(o,r);else if(o instanceof Q)o.target=o.target||r;else{var b=o;o=new Q(h,r),v(o,b)}if(b=!0,c)for(var T=c.length-1;0<=T;T--){var C=o.g=c[T];b=fn(C,h,!0,o)&&b}if(C=o.g=r,b=fn(C,h,!0,o)&&b,b=fn(C,h,!1,o)&&b,c)for(T=0;T<c.length;T++)C=o.g=c[T],b=fn(C,h,!1,o)&&b}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var r=this.i,o;for(o in r.g){for(var c=r.g[o],h=0;h<c.length;h++)un(c[h]);delete r.g[o],r.h--}}this.F=null},Z.prototype.K=function(r,o,c,h){return this.i.add(String(r),o,!1,c,h)},Z.prototype.L=function(r,o,c,h){return this.i.add(String(r),o,!0,c,h)};function fn(r,o,c,h){if(o=r.i.g[String(o)],!o)return!0;o=o.concat();for(var b=!0,T=0;T<o.length;++T){var C=o[T];if(C&&!C.da&&C.capture==c){var V=C.listener,X=C.ha||C.src;C.fa&&ar(r.i,C),b=V.call(X,h)!==!1&&b}}return b&&!h.defaultPrevented}function Ui(r,o,c){if(typeof r=="function")c&&(r=S(r,c));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:u.setTimeout(r,o||0)}function Fi(r){r.g=Ui(()=>{r.g=null,r.i&&(r.i=!1,Fi(r))},r.l);const o=r.h;r.h=null,r.m.apply(null,o)}class lc extends Le{constructor(o,c){super(),this.m=o,this.l=c,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Fi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xt(r){Le.call(this),this.h=r,this.g={}}k(xt,Le);var ji=[];function Vi(r){Y(r.g,function(o,c){this.g.hasOwnProperty(c)&&ur(o)},r),r.g={}}xt.prototype.N=function(){xt.aa.N.call(this),Vi(this)},xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=u.JSON.stringify,hc=u.JSON.parse,uc=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function gr(){}gr.prototype.h=null;function Bi(r){return r.h||(r.h=r.i())}function dc(){}var Nt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mr(){Q.call(this,"d")}k(mr,Q);function _r(){Q.call(this,"c")}k(_r,Q);var ht={},$i=null;function yr(){return $i=$i||new Z}ht.La="serverreachability";function Hi(r){Q.call(this,ht.La,r)}k(Hi,Q);function Dt(r){const o=yr();ne(o,new Hi(o))}ht.STAT_EVENT="statevent";function Wi(r,o){Q.call(this,ht.STAT_EVENT,r),this.stat=o}k(Wi,Q);function re(r){const o=yr();ne(o,new Wi(o,r))}ht.Ma="timingevent";function zi(r,o){Q.call(this,ht.Ma,r),this.size=o}k(zi,Q);function Ot(r,o){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},o)}function Lt(){this.g=!0}Lt.prototype.xa=function(){this.g=!1};function fc(r,o,c,h,b,T){r.info(function(){if(r.g)if(T)for(var C="",V=T.split("&"),X=0;X<V.length;X++){var F=V[X].split("=");if(1<F.length){var ee=F[0];F=F[1];var te=ee.split("_");C=2<=te.length&&te[1]=="type"?C+(ee+"="+F+"&"):C+(ee+"=redacted&")}}else C=null;else C=T;return"XMLHTTP REQ ("+h+") [attempt "+b+"]: "+o+`
`+c+`
`+C})}function pc(r,o,c,h,b,T,C){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+b+"]: "+o+`
`+c+`
`+T+" "+C})}function ut(r,o,c,h){r.info(function(){return"XMLHTTP TEXT ("+o+"): "+mc(r,c)+(h?" "+h:"")})}function gc(r,o){r.info(function(){return"TIMEOUT: "+o})}Lt.prototype.info=function(){};function mc(r,o){if(!r.g)return o;if(!o)return null;try{var c=JSON.parse(o);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var h=c[r];if(!(2>h.length)){var b=h[1];if(Array.isArray(b)&&!(1>b.length)){var T=b[0];if(T!="noop"&&T!="stop"&&T!="close")for(var C=1;C<b.length;C++)b[C]=""}}}}return pr(c)}catch{return o}}var vr={NO_ERROR:0,TIMEOUT:8},_c={},wr;function pn(){}k(pn,gr),pn.prototype.g=function(){return new XMLHttpRequest},pn.prototype.i=function(){return{}},wr=new pn;function Me(r,o,c,h){this.j=r,this.i=o,this.l=c,this.R=h||1,this.U=new xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gi}function Gi(){this.i=null,this.g="",this.h=!1}var qi={},br={};function Ir(r,o,c){r.L=1,r.v=yn(Te(o)),r.m=c,r.P=!0,Ki(r,null)}function Ki(r,o){r.F=Date.now(),gn(r),r.A=Te(r.v);var c=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),cs(c.i,"t",h),r.C=0,c=r.j.J,r.h=new Gi,r.g=As(r.j,c?o:null,!r.m),0<r.O&&(r.M=new lc(S(r.Y,r,r.g),r.O)),o=r.U,c=r.g,h=r.ca;var b="readystatechange";Array.isArray(b)||(b&&(ji[0]=b.toString()),b=ji);for(var T=0;T<b.length;T++){var C=Di(c,b[T],h||o.handleEvent,!1,o.h||o);if(!C)break;o.g[C.key]=C}o=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,o)):(r.u="GET",r.g.ea(r.A,r.u,null,o)),Dt(),fc(r.i,r.u,r.A,r.l,r.R,r.m)}Me.prototype.ca=function(r){r=r.target;const o=this.M;o&&Se(r)==3?o.j():this.Y(r)},Me.prototype.Y=function(r){try{if(r==this.g)e:{const te=Se(this.g);var o=this.g.Ba();const pt=this.g.Z();if(!(3>te)&&(te!=3||this.g&&(this.h.h||this.g.oa()||gs(this.g)))){this.J||te!=4||o==7||(o==8||0>=pt?Dt(3):Dt(2)),Er(this);var c=this.g.Z();this.X=c;t:if(Ji(this)){var h=gs(this.g);r="";var b=h.length,T=Se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ke(this),Mt(this);var C="";break t}this.h.i=new u.TextDecoder}for(o=0;o<b;o++)this.h.h=!0,r+=this.h.i.decode(h[o],{stream:!(T&&o==b-1)});h.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=c==200,pc(this.i,this.u,this.A,this.l,this.R,te,c),this.o){if(this.T&&!this.K){t:{if(this.g){var V,X=this.g;if((V=X.g?X.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(V)){var F=V;break t}}F=null}if(c=F)ut(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tr(this,c);else{this.o=!1,this.s=3,re(12),Ke(this),Mt(this);break e}}if(this.P){c=!0;let le;for(;!this.J&&this.C<C.length;)if(le=yc(this,C),le==br){te==4&&(this.s=4,re(14),c=!1),ut(this.i,this.l,null,"[Incomplete Response]");break}else if(le==qi){this.s=4,re(15),ut(this.i,this.l,C,"[Invalid Chunk]"),c=!1;break}else ut(this.i,this.l,le,null),Tr(this,le);if(Ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||C.length!=0||this.h.h||(this.s=1,re(16),c=!1),this.o=this.o&&c,!c)ut(this.i,this.l,C,"[Invalid Chunked Response]"),Ke(this),Mt(this);else if(0<C.length&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.ba&&!ee.M&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Rr(ee),ee.M=!0,re(11))}}else ut(this.i,this.l,C,null),Tr(this,C);te==4&&Ke(this),this.o&&!this.J&&(te==4?Is(this.j,this):(this.o=!1,gn(this)))}else Lc(this.g),c==400&&0<C.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Ke(this),Mt(this)}}}catch{}finally{}};function Ji(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function yc(r,o){var c=r.C,h=o.indexOf(`
`,c);return h==-1?br:(c=Number(o.substring(c,h)),isNaN(c)?qi:(h+=1,h+c>o.length?br:(o=o.slice(h,h+c),r.C=h+c,o)))}Me.prototype.cancel=function(){this.J=!0,Ke(this)};function gn(r){r.S=Date.now()+r.I,Xi(r,r.I)}function Xi(r,o){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ot(S(r.ba,r),o)}function Er(r){r.B&&(u.clearTimeout(r.B),r.B=null)}Me.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(gc(this.i,this.A),this.L!=2&&(Dt(),re(17)),Ke(this),this.s=2,Mt(this)):Xi(this,this.S-r)};function Mt(r){r.j.G==0||r.J||Is(r.j,r)}function Ke(r){Er(r);var o=r.M;o&&typeof o.ma=="function"&&o.ma(),r.M=null,Vi(r.U),r.g&&(o=r.g,r.g=null,o.abort(),o.ma())}function Tr(r,o){try{var c=r.j;if(c.G!=0&&(c.g==r||Sr(c.h,r))){if(!r.K&&Sr(c.h,r)&&c.G==3){try{var h=c.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var b=h;if(b[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)Tn(c),In(c);else break e;Pr(c),re(18)}}else c.za=b[1],0<c.za-c.T&&37500>b[2]&&c.F&&c.v==0&&!c.C&&(c.C=Ot(S(c.Za,c),6e3));if(1>=Zi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Xe(c,11)}else if((r.K||c.g==r)&&Tn(c),!N(o))for(b=c.Da.g.parse(o),o=0;o<b.length;o++){let F=b[o];if(c.T=F[0],F=F[1],c.G==2)if(F[0]=="c"){c.K=F[1],c.ia=F[2];const ee=F[3];ee!=null&&(c.la=ee,c.j.info("VER="+c.la));const te=F[4];te!=null&&(c.Aa=te,c.j.info("SVER="+c.Aa));const pt=F[5];pt!=null&&typeof pt=="number"&&0<pt&&(h=1.5*pt,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const le=r.g;if(le){const Sn=le.g?le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sn){var T=h.h;T.g||Sn.indexOf("spdy")==-1&&Sn.indexOf("quic")==-1&&Sn.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(Ar(T,T.h),T.h=null))}if(h.D){const xr=le.g?le.g.getResponseHeader("X-HTTP-Session-Id"):null;xr&&(h.ya=xr,W(h.I,h.D,xr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var C=r;if(h.qa=Ss(h,h.J?h.ia:null,h.W),C.K){es(h.h,C);var V=C,X=h.L;X&&(V.I=X),V.B&&(Er(V),gn(V)),h.g=C}else ws(h);0<c.i.length&&En(c)}else F[0]!="stop"&&F[0]!="close"||Xe(c,7);else c.G==3&&(F[0]=="stop"||F[0]=="close"?F[0]=="stop"?Xe(c,7):Cr(c):F[0]!="noop"&&c.l&&c.l.ta(F),c.v=0)}}Dt(4)}catch{}}var vc=class{constructor(r,o){this.g=r,this.map=o}};function Yi(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Zi(r){return r.h?1:r.g?r.g.size:0}function Sr(r,o){return r.h?r.h==o:r.g?r.g.has(o):!1}function Ar(r,o){r.g?r.g.add(o):r.h=o}function es(r,o){r.h&&r.h==o?r.h=null:r.g&&r.g.has(o)&&r.g.delete(o)}Yi.prototype.cancel=function(){if(this.i=ts(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ts(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let o=r.i;for(const c of r.g.values())o=o.concat(c.D);return o}return O(r.i)}function wc(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(m(r)){for(var o=[],c=r.length,h=0;h<c;h++)o.push(r[h]);return o}o=[],c=0;for(h in r)o[c++]=r[h];return o}function bc(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(m(r)||typeof r=="string"){var o=[];r=r.length;for(var c=0;c<r;c++)o.push(c);return o}o=[],c=0;for(const h in r)o[c++]=h;return o}}}function ns(r,o){if(r.forEach&&typeof r.forEach=="function")r.forEach(o,void 0);else if(m(r)||typeof r=="string")Array.prototype.forEach.call(r,o,void 0);else for(var c=bc(r),h=wc(r),b=h.length,T=0;T<b;T++)o.call(void 0,h[T],c&&c[T],r)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ic(r,o){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var h=r[c].indexOf("="),b=null;if(0<=h){var T=r[c].substring(0,h);b=r[c].substring(h+1)}else T=r[c];o(T,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Je(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Je){this.h=r.h,mn(this,r.j),this.o=r.o,this.g=r.g,_n(this,r.s),this.l=r.l;var o=r.i,c=new jt;c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),is(this,c),this.m=r.m}else r&&(o=String(r).match(rs))?(this.h=!1,mn(this,o[1]||"",!0),this.o=Ut(o[2]||""),this.g=Ut(o[3]||"",!0),_n(this,o[4]),this.l=Ut(o[5]||"",!0),is(this,o[6]||"",!0),this.m=Ut(o[7]||"")):(this.h=!1,this.i=new jt(null,this.h))}Je.prototype.toString=function(){var r=[],o=this.j;o&&r.push(Ft(o,ss,!0),":");var c=this.g;return(c||o=="file")&&(r.push("//"),(o=this.o)&&r.push(Ft(o,ss,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(Ft(c,c.charAt(0)=="/"?Sc:Tc,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",Ft(c,kc)),r.join("")};function Te(r){return new Je(r)}function mn(r,o,c){r.j=c?Ut(o,!0):o,r.j&&(r.j=r.j.replace(/:$/,""))}function _n(r,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);r.s=o}else r.s=null}function is(r,o,c){o instanceof jt?(r.i=o,Cc(r.i,r.h)):(c||(o=Ft(o,Ac)),r.i=new jt(o,r.h))}function W(r,o,c){r.i.set(o,c)}function yn(r){return W(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ut(r,o){return r?o?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ft(r,o,c){return typeof r=="string"?(r=encodeURI(r).replace(o,Ec),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Ec(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var ss=/[#\/\?@]/g,Tc=/[#\?:]/g,Sc=/[#\?]/g,Ac=/[#\?@]/g,kc=/#/g;function jt(r,o){this.h=this.g=null,this.i=r||null,this.j=!!o}function Ue(r){r.g||(r.g=new Map,r.h=0,r.i&&Ic(r.i,function(o,c){r.add(decodeURIComponent(o.replace(/\+/g," ")),c)}))}n=jt.prototype,n.add=function(r,o){Ue(this),this.i=null,r=dt(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(o),this.h+=1,this};function os(r,o){Ue(r),o=dt(r,o),r.g.has(o)&&(r.i=null,r.h-=r.g.get(o).length,r.g.delete(o))}function as(r,o){return Ue(r),o=dt(r,o),r.g.has(o)}n.forEach=function(r,o){Ue(this),this.g.forEach(function(c,h){c.forEach(function(b){r.call(o,b,h,this)},this)},this)},n.na=function(){Ue(this);const r=Array.from(this.g.values()),o=Array.from(this.g.keys()),c=[];for(let h=0;h<o.length;h++){const b=r[h];for(let T=0;T<b.length;T++)c.push(o[h])}return c},n.V=function(r){Ue(this);let o=[];if(typeof r=="string")as(this,r)&&(o=o.concat(this.g.get(dt(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)o=o.concat(r[c])}return o},n.set=function(r,o){return Ue(this),this.i=null,r=dt(this,r),as(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[o]),this.h+=1,this},n.get=function(r,o){return r?(r=this.V(r),0<r.length?String(r[0]):o):o};function cs(r,o,c){os(r,o),0<c.length&&(r.i=null,r.g.set(dt(r,o),O(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],o=Array.from(this.g.keys());for(var c=0;c<o.length;c++){var h=o[c];const T=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var b=T;C[h]!==""&&(b+="="+encodeURIComponent(String(C[h]))),r.push(b)}}return this.i=r.join("&")};function dt(r,o){return o=String(o),r.j&&(o=o.toLowerCase()),o}function Cc(r,o){o&&!r.j&&(Ue(r),r.i=null,r.g.forEach(function(c,h){var b=h.toLowerCase();h!=b&&(os(this,h),cs(this,b,c))},r)),r.j=o}function Pc(r,o){const c=new Lt;if(u.Image){const h=new Image;h.onload=P(Fe,c,"TestLoadImage: loaded",!0,o,h),h.onerror=P(Fe,c,"TestLoadImage: error",!1,o,h),h.onabort=P(Fe,c,"TestLoadImage: abort",!1,o,h),h.ontimeout=P(Fe,c,"TestLoadImage: timeout",!1,o,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else o(!1)}function Rc(r,o){const c=new Lt,h=new AbortController,b=setTimeout(()=>{h.abort(),Fe(c,"TestPingServer: timeout",!1,o)},1e4);fetch(r,{signal:h.signal}).then(T=>{clearTimeout(b),T.ok?Fe(c,"TestPingServer: ok",!0,o):Fe(c,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(b),Fe(c,"TestPingServer: error",!1,o)})}function Fe(r,o,c,h,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),h(c)}catch{}}function xc(){this.g=new uc}function Nc(r,o,c){const h=c||"";try{ns(r,function(b,T){let C=b;_(b)&&(C=pr(b)),o.push(h+T+"="+encodeURIComponent(C))})}catch(b){throw o.push(h+"type="+encodeURIComponent("_badmap")),b}}function vn(r){this.l=r.Ub||null,this.j=r.eb||!1}k(vn,gr),vn.prototype.g=function(){return new wn(this.l,this.j)},vn.prototype.i=(function(r){return function(){return r}})({});function wn(r,o){Z.call(this),this.D=r,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(wn,Z),n=wn.prototype,n.open=function(r,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=o,this.readyState=1,Bt(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(o.body=r),(this.D||u).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vt(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Bt(this)),this.g&&(this.readyState=3,Bt(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ls(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function ls(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var o=r.value?r.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!r.done}))&&(this.response=this.responseText+=o)}r.done?Vt(this):Bt(this),this.readyState==3&&ls(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Vt(this))},n.Qa=function(r){this.g&&(this.response=r,Vt(this))},n.ga=function(){this.g&&Vt(this)};function Vt(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Bt(r)}n.setRequestHeader=function(r,o){this.u.append(r,o)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],o=this.h.entries();for(var c=o.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=o.next();return r.join(`\r
`)};function Bt(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function hs(r){let o="";return Y(r,function(c,h){o+=h,o+=":",o+=c,o+=`\r
`}),o}function kr(r,o,c){e:{for(h in c){var h=!1;break e}h=!0}h||(c=hs(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):W(r,o,c))}function z(r){Z.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(z,Z);var Dc=/^https?$/i,Oc=["POST","PUT"];n=z.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,o,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);o=o?o.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?Bi(this.o):Bi(wr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(r),!0),this.B=!1}catch(T){us(this,T);return}if(r=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var b in h)c.set(b,h[b]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const T of h.keys())c.set(T,h.get(T));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(T=>T.toLowerCase()=="content-type"),b=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Oc,o,void 0))||h||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,C]of c)this.g.setRequestHeader(T,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(r),this.u=!1}catch(T){us(this,T)}};function us(r,o){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=o,r.m=5,ds(r),bn(r)}function ds(r){r.A||(r.A=!0,ne(r,"complete"),ne(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ne(this,"complete"),ne(this,"abort"),bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bn(this,!0)),z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fs(this):this.bb())},n.bb=function(){fs(this)};function fs(r){if(r.h&&typeof l<"u"&&(!r.v[1]||Se(r)!=4||r.Z()!=2)){if(r.u&&Se(r)==4)Ui(r.Ea,0,r);else if(ne(r,"readystatechange"),Se(r)==4){r.h=!1;try{const C=r.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var c;if(!(c=o)){var h;if(h=C===0){var b=String(r.D).match(rs)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),h=!Dc.test(b?b.toLowerCase():"")}c=h}if(c)ne(r,"complete"),ne(r,"success");else{r.m=6;try{var T=2<Se(r)?r.g.statusText:""}catch{T=""}r.l=T+" ["+r.Z()+"]",ds(r)}}finally{bn(r)}}}}function bn(r,o){if(r.g){ps(r);const c=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,o||ne(r,"ready");try{c.onreadystatechange=h}catch{}}}function ps(r){r.I&&(u.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Se(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Se(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var o=this.g.responseText;return r&&o.indexOf(r)==0&&(o=o.substring(r.length)),hc(o)}};function gs(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Lc(r){const o={};r=(r.g&&2<=Se(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(N(r[h]))continue;var c=y(r[h]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const T=o[b]||[];o[b]=T,T.push(c)}w(o,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $t(r,o,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||o}function ms(r){this.Aa=0,this.i=[],this.j=new Lt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$t("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$t("baseRetryDelayMs",5e3,r),this.cb=$t("retryDelaySeedMs",1e4,r),this.Wa=$t("forwardChannelMaxRetries",2,r),this.wa=$t("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(r&&r.concurrentRequestLimit),this.Da=new xc,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ms.prototype,n.la=8,n.G=1,n.connect=function(r,o,c,h){re(0),this.W=r,this.H=o||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=Ss(this,null,this.W),En(this)};function Cr(r){if(_s(r),r.G==3){var o=r.U++,c=Te(r.I);if(W(c,"SID",r.K),W(c,"RID",o),W(c,"TYPE","terminate"),Ht(r,c),o=new Me(r,r.j,o),o.L=2,o.v=yn(Te(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(o.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=o.v,c=!0),c||(o.g=As(o.j,null),o.g.ea(o.v)),o.F=Date.now(),gn(o)}Ts(r)}function In(r){r.g&&(Rr(r),r.g.cancel(),r.g=null)}function _s(r){In(r),r.u&&(u.clearTimeout(r.u),r.u=null),Tn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function En(r){if(!Qi(r.h)&&!r.s){r.s=!0;var o=r.Ga;Ct||Ni(),Pt||(Ct(),Pt=!0),or.add(o,r),r.B=0}}function Mc(r,o){return Zi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=o.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ot(S(r.Ga,r,o),Es(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const b=new Me(this,this.j,r);let T=this.o;if(this.S&&(T?(T=d(T),v(T,this.S)):T=this.S),this.m!==null||this.O||(b.H=T,T=null),this.P)e:{for(var o=0,c=0;c<this.i.length;c++){t:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=c;break e}if(o===4096||c===this.i.length-1){o=c+1;break e}}o=1e3}else o=1e3;o=vs(this,b,o),c=Te(this.I),W(c,"RID",r),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),Ht(this,c),T&&(this.O?o="headers="+encodeURIComponent(String(hs(T)))+"&"+o:this.m&&kr(c,this.m,T)),Ar(this.h,b),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",o),W(c,"SID","null"),b.T=!0,Ir(b,c,null)):Ir(b,c,o),this.G=2}}else this.G==3&&(r?ys(this,r):this.i.length==0||Qi(this.h)||ys(this))};function ys(r,o){var c;o?c=o.l:c=r.U++;const h=Te(r.I);W(h,"SID",r.K),W(h,"RID",c),W(h,"AID",r.T),Ht(r,h),r.m&&r.o&&kr(h,r.m,r.o),c=new Me(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),o&&(r.i=o.D.concat(r.i)),o=vs(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Ar(r.h,c),Ir(c,h,o)}function Ht(r,o){r.H&&Y(r.H,function(c,h){W(o,h,c)}),r.l&&ns({},function(c,h){W(o,h,c)})}function vs(r,o,c){c=Math.min(r.i.length,c);var h=r.l?S(r.l.Na,r.l,r):null;e:{var b=r.i;let T=-1;for(;;){const C=["count="+c];T==-1?0<c?(T=b[0].g,C.push("ofs="+T)):T=0:C.push("ofs="+T);let V=!0;for(let X=0;X<c;X++){let F=b[X].g;const ee=b[X].map;if(F-=T,0>F)T=Math.max(0,b[X].g-100),V=!1;else try{Nc(ee,C,"req"+F+"_")}catch{h&&h(ee)}}if(V){h=C.join("&");break e}}}return r=r.i.splice(0,c),o.D=r,h}function ws(r){if(!r.g&&!r.u){r.Y=1;var o=r.Fa;Ct||Ni(),Pt||(Ct(),Pt=!0),or.add(o,r),r.v=0}}function Pr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ot(S(r.Fa,r),Es(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,bs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ot(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),In(this),bs(this))};function Rr(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function bs(r){r.g=new Me(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var o=Te(r.qa);W(o,"RID","rpc"),W(o,"SID",r.K),W(o,"AID",r.T),W(o,"CI",r.F?"0":"1"),!r.F&&r.ja&&W(o,"TO",r.ja),W(o,"TYPE","xmlhttp"),Ht(r,o),r.m&&r.o&&kr(o,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=yn(Te(o)),c.m=null,c.P=!0,Ki(c,r)}n.Za=function(){this.C!=null&&(this.C=null,In(this),Pr(this),re(19))};function Tn(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function Is(r,o){var c=null;if(r.g==o){Tn(r),Rr(r),r.g=null;var h=2}else if(Sr(r.h,o))c=o.D,es(r.h,o),h=1;else return;if(r.G!=0){if(o.o)if(h==1){c=o.m?o.m.length:0,o=Date.now()-o.F;var b=r.B;h=yr(),ne(h,new zi(h,c)),En(r)}else ws(r);else if(b=o.s,b==3||b==0&&0<o.X||!(h==1&&Mc(r,o)||h==2&&Pr(r)))switch(c&&0<c.length&&(o=r.h,o.i=o.i.concat(c)),b){case 1:Xe(r,5);break;case 4:Xe(r,10);break;case 3:Xe(r,6);break;default:Xe(r,2)}}}function Es(r,o){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*o}function Xe(r,o){if(r.j.info("Error code "+o),o==2){var c=S(r.fb,r),h=r.Xa;const b=!h;h=new Je(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||mn(h,"https"),yn(h),b?Pc(h.toString(),c):Rc(h.toString(),c)}else re(2);r.G=0,r.l&&r.l.sa(o),Ts(r),_s(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function Ts(r){if(r.G=0,r.ka=[],r.l){const o=ts(r.h);(o.length!=0||r.i.length!=0)&&(R(r.ka,o),R(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function Ss(r,o,c){var h=c instanceof Je?Te(c):new Je(c);if(h.g!="")o&&(h.g=o+"."+h.g),_n(h,h.s);else{var b=u.location;h=b.protocol,o=o?o+"."+b.hostname:b.hostname,b=+b.port;var T=new Je(null);h&&mn(T,h),o&&(T.g=o),b&&_n(T,b),c&&(T.l=c),h=T}return c=r.D,o=r.ya,c&&o&&W(h,c,o),W(h,"VER",r.la),Ht(r,h),h}function As(r,o,c){if(o&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=r.Ca&&!r.pa?new z(new vn({eb:c})):new z(r.pa),o.Ha(r.J),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ks(){}n=ks.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ce(r,o){Z.call(this),this.g=new ms(o),this.l=r,this.h=o&&o.messageUrlParams||null,r=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(r?r["X-WebChannel-Content-Type"]=o.messageContentType:r={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(r?r["X-WebChannel-Client-Profile"]=o.va:r={"X-WebChannel-Client-Profile":o.va}),this.g.S=r,(r=o&&o.Sb)&&!N(r)&&(this.g.m=r),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!N(o)&&(this.g.D=o,r=this.h,r!==null&&o in r&&(r=this.h,o in r&&delete r[o])),this.j=new ft(this)}k(ce,Z),ce.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ce.prototype.close=function(){Cr(this.g)},ce.prototype.o=function(r){var o=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=pr(r),r=c);o.i.push(new vc(o.Ya++,r)),o.G==3&&En(o)},ce.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,ce.aa.N.call(this)};function Cs(r){mr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var o=r.__sm__;if(o){e:{for(const c in o){r=c;break e}r=void 0}(this.i=r)&&(r=this.i,o=o!==null&&r in o?o[r]:void 0),this.data=o}else this.data=r}k(Cs,mr);function Ps(){_r.call(this),this.status=1}k(Ps,_r);function ft(r){this.g=r}k(ft,ks),ft.prototype.ua=function(){ne(this.g,"a")},ft.prototype.ta=function(r){ne(this.g,new Cs(r))},ft.prototype.sa=function(r){ne(this.g,new Ps)},ft.prototype.ra=function(){ne(this.g,"b")},ce.prototype.send=ce.prototype.o,ce.prototype.open=ce.prototype.m,ce.prototype.close=ce.prototype.close,vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,_c.COMPLETE="complete",dc.EventType=Nt,Nt.OPEN="a",Nt.CLOSE="b",Nt.ERROR="c",Nt.MESSAGE="d",Z.prototype.listen=Z.prototype.K,z.prototype.listenOnce=z.prototype.L,z.prototype.getLastError=z.prototype.Ka,z.prototype.getLastErrorCode=z.prototype.Ba,z.prototype.getStatus=z.prototype.Z,z.prototype.getResponseJson=z.prototype.Oa,z.prototype.getResponseText=z.prototype.oa,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Ha}).apply(typeof Cn<"u"?Cn:typeof self<"u"?self:typeof window<"u"?window:{});const lo="@firebase/firestore",ho="4.9.1";/**
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
 */let cn="12.2.0";/**
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
 */const It=new di("@firebase/firestore");function de(n,...e){if(It.logLevel<=j.DEBUG){const t=e.map(Ai);It.debug(`Firestore (${cn}): ${n}`,...t)}}function Fa(n,...e){if(It.logLevel<=j.ERROR){const t=e.map(Ai);It.error(`Firestore (${cn}): ${n}`,...t)}}function Pd(n,...e){if(It.logLevel<=j.WARN){const t=e.map(Ai);It.warn(`Firestore (${cn}): ${n}`,...t)}}function Ai(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Zt(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,ja(n,i,t)}function ja(n,e,t){let i=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Fa(i),new Error(i)}function Gt(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||ja(e,s,i)}/**
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
 */const M={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class U extends be{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Va{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ie.UNAUTHENTICATED)))}shutdown(){}}class xd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Nd{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Gt(this.o===void 0,42304);let i=this.i;const s=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let a=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new qt,e.enqueueRetryable((()=>s(this.currentUser)))};const l=()=>{const m=a;e.enqueueRetryable((async()=>{await m.promise,await s(this.currentUser)}))},u=m=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((m=>u(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?u(m):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new qt)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Gt(typeof i.accessToken=="string",31837,{l:i}),new Va(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Gt(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class Dd{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Od{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Dd(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class uo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ld{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Gt(this.o===void 0,3512);const i=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>i(a)))};const s=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new uo(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Gt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Ud{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Md(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<t&&(i+=e.charAt(s[a]%62))}return i}}function Ge(n,e){return n<e?-1:n>e?1:0}function Fd(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),a=e.charAt(i);if(s!==a)return jr(s)===jr(a)?Ge(s,a):jr(s)?1:-1}return Ge(n.length,e.length)}const jd=55296,Vd=57343;function jr(n){const e=n.charCodeAt(0);return e>=jd&&e<=Vd}/**
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
 */const fo="__name__";class ge{constructor(e,t,i){t===void 0?t=0:t>e.length&&Zt(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Zt(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ge?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const a=ge.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Ge(e.length,t.length)}static compareSegments(e,t){const i=ge.isNumericId(e),s=ge.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?ge.extractNumericId(e).compare(ge.extractNumericId(t)):Fd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class he extends ge{construct(e,t,i){return new he(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new U(M.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new he(t)}static emptyPath(){return new he([])}}const Bd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends ge{construct(e,t,i){return new Ze(e,t,i)}static isValidIdentifier(e){return Bd.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fo}static keyField(){return new Ze([fo])}static fromServerFormat(e){const t=[];let i="",s=0;const a=()=>{if(i.length===0)throw new U(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let l=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new U(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new U(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(i+=u,s++):(a(),s++)}if(a(),l)throw new U(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(t)}static emptyPath(){return new Ze([])}}/**
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
 */class tt{constructor(e){this.path=e}static fromPath(e){return new tt(he.fromString(e))}static fromName(e){return new tt(he.fromString(e).popFirst(5))}static empty(){return new tt(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new tt(new he(e.slice()))}}function $d(n,e,t,i){if(e===!0&&i===!0)throw new U(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Zt(12329,{type:typeof n})}function zd(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wd(n);throw new U(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function K(n,e){const t={typeString:n};return e&&(t.value=e),t}function ln(n,e){if(!Hd(n))throw new U(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const l=n[i];if(s&&typeof l!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${i}' field to equal '${a.value}'`;break}}if(t)throw new U(M.INVALID_ARGUMENT,t);return!0}/**
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
 */const po=-62135596800,go=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*go);return new me(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<po)throw new U(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/go}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ln(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-po;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:K("string",me._jsonSchemaVersion),seconds:K("number"),nanoseconds:K("number")};function Gd(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new qd("Invalid base64 string: "+a):a}})(e);return new at(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a})(e);return new at(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Zr="(default)";class Kn{constructor(e,t){this.projectId=e,this.database=t||Zr}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(e){return e instanceof Kn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Kd{constructor(e,t=null,i=[],s=[],a=null,l="F",u=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=l,this.startAt=u,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Jd(n){return new Kd(n)}/**
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
 */var mo,L;(L=mo||(mo={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Si([4294967295,4294967295],0);/**
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
 */const Xd=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=1048576;function Vr(){return typeof document<"u"?document:null}/**
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
 */class Qd{constructor(e,t,i=1e3,s=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&de("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class ki{constructor(e,t,i,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,a){const l=Date.now()+i,u=new ki(e,t,l,s,a);return u.start(i),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var _o,yo;(yo=_o||(_o={})).Ma="default",yo.Cache="cache";/**
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
 */function Zd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="firestore.googleapis.com",wo=!0;class bo{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ba,this.ssl=wo}else this.host=e.host,this.ssl=e.ssl??wo;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yd)throw new U(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$d("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zd(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $a{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bo(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Rd;switch(i.type){case"firstParty":return new Od(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new U(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=vo.get(t);i&&(de("ComponentProvider","Removing Datastore"),vo.delete(t),i.terminate())})(this),Promise.resolve()}}function Ha(n,e,t,i={}){n=zd(n,$a);const s=ct(e),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(hi(`https://${u}`),ui("Firestore",!0)),a.host!==Ba&&a.host!==u&&Pd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...a,host:u,ssl:s,emulatorOptions:i};if(!it(m,l)&&(n._setSettings(m),i.mockUserToken)){let _,A;if(typeof i.mockUserToken=="string")_=i.mockUserToken,A=ie.MOCK_USER;else{_=el(i.mockUserToken,n._app?.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new U(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new ie(E)}n._authCredentials=new xd(new Va(_,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class _e{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}toJSON(){return{type:_e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(ln(t,_e._jsonSchema))return new _e(e,i||null,new tt(he.fromString(t.referencePath)))}}_e._jsonSchemaVersion="firestore/documentReference/1.0",_e._jsonSchema={type:K("string",_e._jsonSchemaVersion),referencePath:K("string")};class Pi extends Ci{constructor(e,t,i){super(e,t,Jd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new tt(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="AsyncQueue";class Eo{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qd(this,"async_queue_retry"),this._c=()=>{const i=Vr();i&&de(Io,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Vr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new qt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Gd(e))throw e;de(Io,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Fa("INTERNAL UNHANDLED ERROR: ",To(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ki.createAndSchedule(this,e,t,i,(a=>this.hc(a)));return this.tc.push(s),s}uc(){this.nc&&Zt(47125,{Pc:To(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function To(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ef extends $a{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Eo,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Eo(e),this._firestoreClient=void 0,await e}}}function tf(n,e){const t=typeof n=="object"?n:pi(),i=typeof n=="string"?n:Zr,s=tr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=Qo("firestore");a&&Ha(s,...a)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ke(at.fromBase64String(e))}catch(t){throw new U(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ke(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ln(e,ke._jsonSchema))return ke.fromBase64String(e.bytes)}}ke._jsonSchemaVersion="firestore/bytes/1.0",ke._jsonSchema={type:K("string",ke._jsonSchemaVersion),bytes:K("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nt._jsonSchemaVersion}}static fromJSON(e){if(ln(e,nt._jsonSchema))return new nt(e.latitude,e.longitude)}}nt._jsonSchemaVersion="firestore/geoPoint/1.0",nt._jsonSchema={type:K("string",nt._jsonSchemaVersion),latitude:K("number"),longitude:K("number")};/**
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
 */class rt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ln(e,rt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new rt(e.vectorValues);throw new U(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rt._jsonSchemaVersion="firestore/vectorValue/1.0",rt._jsonSchema={type:K("string",rt._jsonSchemaVersion),vectorValues:K("object")};const nf=new RegExp("[~\\*/\\[\\]]");function rf(n,e,t){if(e.search(nf)>=0)throw So(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Wa(...e.split("."))._internalPath}catch{throw So(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function So(n,e,t,i,s){let a=`Function ${e}() called with invalid data`;a+=". ";let l="";return new U(M.INVALID_ARGUMENT,a+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,i,s,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ga("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sf extends za{data(){return super.data()}}function Ga(n,e){return typeof e=="string"?rf(n,e):e instanceof Wa?e._internalPath:e._delegate._internalPath}class Pn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yt extends za{constructor(e,t,i,s,a,l){super(e,t,i,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Un(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Ga("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=yt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}yt._jsonSchemaVersion="firestore/documentSnapshot/1.0",yt._jsonSchema={type:K("string",yt._jsonSchemaVersion),bundleSource:K("string","DocumentSnapshot"),bundleName:K("string"),bundle:K("string")};class Un extends yt{data(e={}){return super.data(e)}}class Kt{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Pn(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Un(this._firestore,this._userDataWriter,i.key,i,new Pn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map((u=>{const m=new Un(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Pn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:m,oldIndex:-1,newIndex:l++}}))}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>a||u.type!==3)).map((u=>{const m=new Un(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Pn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let _=-1,A=-1;return u.type!==0&&(_=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),A=l.indexOf(u.doc.key)),{type:of(u.type),doc:m,oldIndex:_,newIndex:A}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ud.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function of(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zt(61501,{type:n})}}Kt._jsonSchemaVersion="firestore/querySnapshot/1.0",Kt._jsonSchema={type:K("string",Kt._jsonSchemaVersion),bundleSource:K("string","QuerySnapshot"),bundleName:K("string"),bundle:K("string")};(function(e,t=!0){(function(s){cn=s})(Tt),st(new ze("firestore",((i,{instanceIdentifier:s,options:a})=>{const l=i.getProvider("app").getImmediate(),u=new ef(new Nd(i.getProvider("auth-internal")),new Ld(l,i.getProvider("app-check-internal")),(function(_,A){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new U(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(_.options.projectId,A)})(l,s),l);return a={useFetchStreams:t,...a},u._setSettings(a),u}),"PUBLIC").setMultipleInstances(!0)),ye(lo,ho,e),ye(lo,ho,"esm2020")})();/**
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
 */const af="type.googleapis.com/google.protobuf.Int64Value",cf="type.googleapis.com/google.protobuf.UInt64Value";function qa(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Jn(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Jn(e));if(typeof n=="function"||typeof n=="object")return qa(n,e=>Jn(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Et(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case af:case cf:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Et(e)):typeof n=="function"||typeof n=="object"?qa(n,e=>Et(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ao={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends be{constructor(e,t,i){super(`${Ri}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,ae.prototype)}}function lf(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Xn(n,e){let t=lf(n),i=t,s;try{const a=e&&e.error;if(a){const l=a.status;if(typeof l=="string"){if(!Ao[l])return new ae("internal","internal");t=Ao[l],i=l}const u=a.message;typeof u=="string"&&(i=u),s=a.details,s!==void 0&&(s=Et(s))}}catch{}return t==="ok"?null:new ae(t,i,s)}/**
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
 */class hf{constructor(e,t,i,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,oe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||i.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s?.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
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
 */const ei="us-central1",uf=/^data: (.*?)(?:\n|$)/;function df(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new ae("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class ff{constructor(e,t,i,s,a=ei,l=(...u)=>fetch(...u)){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new hf(e,t,i,s),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(a);this.customDomain=u.origin+(u.pathname==="/"?"":u.pathname),this.region=ei}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function pf(n,e,t){const i=ct(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(hi(n.emulatorOrigin+"/backends"),ui("Functions",!0))}function gf(n,e,t){const i=s=>_f(n,e,s,{});return i.stream=(s,a)=>vf(n,e,s,a),i}function Ka(n){return n.emulatorOrigin&&ct(n.emulatorOrigin)?"include":void 0}async function mf(n,e,t,i,s){t["Content-Type"]="application/json";let a;try{a=await i(n,{method:"POST",body:JSON.stringify(e),headers:t,credentials:Ka(s)})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}async function Ja(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function _f(n,e,t,i){const s=n._url(e);return yf(n,s,t,i)}async function yf(n,e,t,i){t=Jn(t);const s={data:t},a=await Ja(n,i),l=i.timeout||7e4,u=df(l),m=await Promise.race([mf(e,s,a,n.fetchImpl,n),u.promise,n.cancelAllRequests]);if(u.cancel(),!m)throw new ae("cancelled","Firebase Functions instance was deleted.");const _=Xn(m.status,m.json);if(_)throw _;if(!m.json)throw new ae("internal","Response is not valid JSON object.");let A=m.json.data;if(typeof A>"u"&&(A=m.json.result),typeof A>"u")throw new ae("internal","Response is missing data field.");return{data:Et(A)}}function vf(n,e,t,i){const s=n._url(e);return wf(n,s,t,i||{})}async function wf(n,e,t,i){t=Jn(t);const s={data:t},a=await Ja(n,i);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:a,signal:i?.signal,credentials:Ka(n)})}catch(S){if(S instanceof Error&&S.name==="AbortError"){const k=new ae("cancelled","Request was cancelled.");return{data:Promise.reject(k),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(k)}}}}}}const P=Xn(0,null);return{data:Promise.reject(P),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(P)}}}}}}let u,m;const _=new Promise((S,P)=>{u=S,m=P});i?.signal?.addEventListener("abort",()=>{const S=new ae("cancelled","Request was cancelled.");m(S)});const A=l.body.getReader(),E=bf(A,u,m,i?.signal);return{stream:{[Symbol.asyncIterator](){const S=E.getReader();return{async next(){const{value:P,done:k}=await S.read();return{value:P,done:k}},async return(){return await S.cancel(),{done:!0,value:void 0}}}}},data:_}}function bf(n,e,t,i){const s=(l,u)=>{const m=l.match(uf);if(!m)return;const _=m[1];try{const A=JSON.parse(_);if("result"in A){e(Et(A.result));return}if("message"in A){u.enqueue(Et(A.message));return}if("error"in A){const E=Xn(0,A);u.error(E),t(E);return}}catch(A){if(A instanceof ae){u.error(A),t(A);return}}},a=new TextDecoder;return new ReadableStream({start(l){let u="";return m();async function m(){if(i?.aborted){const _=new ae("cancelled","Request was cancelled");return l.error(_),t(_),Promise.resolve()}try{const{value:_,done:A}=await n.read();if(A){u.trim()&&s(u.trim(),l),l.close();return}if(i?.aborted){const S=new ae("cancelled","Request was cancelled");l.error(S),t(S),await n.cancel();return}u+=a.decode(_,{stream:!0});const E=u.split(`
`);u=E.pop()||"";for(const S of E)S.trim()&&s(S.trim(),l);return m()}catch(_){const A=_ instanceof ae?_:Xn(0,null);l.error(A),t(A)}}},cancel(){return n.cancel()}})}const ko="@firebase/functions",Co="0.13.1";/**
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
 */const If="auth-internal",Ef="app-check-internal",Tf="messaging-internal";function Sf(n){const e=(t,{instanceIdentifier:i})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider(If),l=t.getProvider(Tf),u=t.getProvider(Ef);return new ff(s,a,l,u,i)};st(new ze(Ri,e,"PUBLIC").setMultipleInstances(!0)),ye(ko,Co,n),ye(ko,Co,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n=pi(),e=ei){const i=tr(pe(n),Ri).getImmediate({identifier:e}),s=Qo("functions");return s&&Xa(i,...s),i}function Xa(n,e,t){pf(pe(n),e,t)}function ir(n,e,t){return gf(pe(n),e)}Sf();const xi=typeof __firebase_config<"u";let vt,ti=null;xi?(vt=JSON.parse(__firebase_config),ti=typeof __initial_auth_token<"u"?__initial_auth_token:null):vt={apiKey:"AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",authDomain:"my-new-firebase-project-94e22.firebaseapp.com",projectId:"my-new-firebase-project-94e22",storageBucket:"my-new-firebase-project-94e22.firebasestorage.app",messagingSenderId:"210118924526",appId:"1:210118924526:web:c88671740e8b13e1e7fbff"};let Rn=null,wt=null,ni=null,Yn=null;vt&&vt.apiKey?(Rn=ra(vt),wt=kd(Rn),ni=tf(Rn),Yn=Af(Rn),xi&&(async()=>{try{ti?(await fu(wt,ti),console.log("Firebase: Signed in with custom token.")):(await cu(wt),console.warn("Firebase: Signed in anonymously (no custom token)."))}catch(e){console.error("Firebase Authentication Failed:",e)}})()):console.error("Firebase initialization failed: Configuration (apiKey) is missing.");const Jt=wt,kf=new Ae,sr=Yn;if(location.hostname==="localhost"&&!xi&&wt&&ni&&Yn){const n=vt.apiKey==="demo-api-key";Ha(ni,"localhost",8080),Xa(Yn,"localhost",5001),n&&Ia(wt,"http://localhost:9099")}var Qn,G,Br,Po,ri=0,Ya=[],q=B,Ro=q.__b,xo=q.__r,No=q.diffed,Do=q.__c,Oo=q.unmount,Lo=q.__;function Qa(n,e){q.__h&&q.__h(G,n,ri||e),ri=0;var t=G.__H||(G.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function $(n){return ri=1,Cf(Za,n)}function Cf(n,e,t){var i=Qa(Qn++,2);if(i.t=n,!i.__c&&(i.__=[Za(void 0,e),function(u){var m=i.__N?i.__N[0]:i.__[0],_=i.t(m,u);m!==_&&(i.__N=[_,i.__[1]],i.__c.setState({}))}],i.__c=G,!G.__f)){var s=function(u,m,_){if(!i.__c.__H)return!0;var A=i.__c.__H.__.filter(function(S){return!!S.__c});if(A.every(function(S){return!S.__N}))return!a||a.call(this,u,m,_);var E=i.__c.props!==u;return A.forEach(function(S){if(S.__N){var P=S.__[0];S.__=S.__N,S.__N=void 0,P!==S.__[0]&&(E=!0)}}),a&&a.call(this,u,m,_)||E};G.__f=!0;var a=G.shouldComponentUpdate,l=G.componentWillUpdate;G.componentWillUpdate=function(u,m,_){if(this.__e){var A=a;a=void 0,s(u,m,_),a=A}l&&l.call(this,u,m,_)},G.shouldComponentUpdate=s}return i.__N||i.__}function lt(n,e){var t=Qa(Qn++,3);!q.__s&&xf(t.__H,e)&&(t.__=n,t.u=e,G.__H.__h.push(t))}function Pf(){for(var n;n=Ya.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Fn),n.__H.__h.forEach(ii),n.__H.__h=[]}catch(e){n.__H.__h=[],q.__e(e,n.__v)}}q.__b=function(n){G=null,Ro&&Ro(n)},q.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Lo&&Lo(n,e)},q.__r=function(n){xo&&xo(n),Qn=0;var e=(G=n.__c).__H;e&&(Br===G?(e.__h=[],G.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(Fn),e.__h.forEach(ii),e.__h=[],Qn=0)),Br=G},q.diffed=function(n){No&&No(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ya.push(e)!==1&&Po===q.requestAnimationFrame||((Po=q.requestAnimationFrame)||Rf)(Pf)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Br=G=null},q.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Fn),t.__h=t.__h.filter(function(i){return!i.__||ii(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],q.__e(i,t.__v)}}),Do&&Do(n,e)},q.unmount=function(n){Oo&&Oo(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{Fn(i)}catch(s){e=s}}),t.__H=void 0,e&&q.__e(e,t.__v))};var Mo=typeof requestAnimationFrame=="function";function Rf(n){var e,t=function(){clearTimeout(i),Mo&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);Mo&&(e=requestAnimationFrame(t))}function Fn(n){var e=G,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),G=e}function ii(n){var e=G;n.__c=n.__(),G=e}function xf(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function Za(n,e){return typeof e=="function"?e(n):e}function Nf(){const[n,e]=$(null),[t,i]=$(null);lt(()=>{const l=Aa(Jt,e);return()=>l()},[]);async function s(){i(null);try{await Mu(Jt,kf)}catch(l){if(console.error("Login failed:",l),l.code==="auth/unauthorized-domain"){const u=window.location.hostname==="0.0.0.0";i({type:"unauthorized-domain",message:"Login failed: Domain not authorized.",details:u?"Firebase does not allow OAuth on 0.0.0.0. Please use localhost.":`Add "${window.location.hostname}" to Authorized Domains in Firebase Console.`})}else i({message:l.message})}}async function a(){await mu(Jt)}return n?g("div",{class:"flex flex-col items-center justify-center h-screen space-y-4 bg-gray-900 text-white",children:[n.photoURL&&g("img",{src:n.photoURL,alt:"Profile",class:"rounded-full w-20 h-20 border-4 border-indigo-500 shadow-lg"}),g("p",{class:"text-xl font-semibold",children:["Hello, ",n.displayName||n.email,"!"]}),g("button",{onClick:a,class:"bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors shadow-md",children:"Sign Out"})]}):g("div",{class:"flex flex-col items-center justify-center h-screen bg-gray-900 text-white space-y-6",children:[g("header",{class:"text-center mb-8",children:[g("h1",{class:"text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2",children:"Procrastinot"}),g("p",{class:"text-xl text-gray-400",children:"Beat procrastination together."})]}),g("div",{class:"bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 w-full max-w-md",children:[g("h2",{class:"text-2xl font-bold mb-6 text-center",children:"Sign In"}),g("button",{onClick:s,class:"w-full bg-white text-gray-900 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3 shadow-md",children:[g("svg",{class:"w-5 h-5",viewBox:"0 0 24 24",children:[g("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),g("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),g("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),g("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),g("span",{children:"Sign in with Google"})]}),t&&g("div",{class:"mt-6 p-4 bg-red-900/30 text-red-200 rounded-lg text-center border border-red-500/50",children:[g("p",{class:"font-bold",children:t.message}),g("p",{class:"text-sm mt-1 text-red-300",children:t.details||t.message}),t.type==="unauthorized-domain"&&window.location.hostname==="0.0.0.0"&&g("button",{onClick:()=>{const l=new URL(window.location.href);l.hostname="localhost",window.location.href=l.toString()},class:"mt-3 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 shadow-sm transition-colors",children:"Switch to localhost"})]})]})]})}const Df=ir(sr,"getRooms"),Of=ir(sr,"createRoom"),Lf=ir(sr,"joinRoom"),Mf=ir(sr,"startSession"),qe={getRooms:async()=>(await Df()).data,createRoom:async n=>(await Of(n)).data,joinRoom:async n=>(await Lf({inviteCode:n})).data,startSession:async(n,e)=>(await Mf({roomId:n,mode:e})).data,getFriends:async n=>(console.warn("MOCK: getFriends using placeholder data."),[{id:"f1",name:"Alex Focus",status:"in-session"},{id:"f2",name:"Ben Chill",status:"offline"},{id:"f3",name:"Sarah Study",status:"in-session"}]),getFriendActivity:async n=>(console.warn("MOCK: getFriendActivity using placeholder data."),{completedSessions:5,nudgesReceived:2})};function Uf({onRoomCreated:n}){console.log("CreateRoom component rendering");const[e,t]=$(""),[i,s]=$(""),[a,l]=$(!1);async function u(m){if(m.preventDefault(),!!e.trim())try{const _=await qe.createRoom({name:e,description:i});typeof n=="function"&&n(_),t(""),s(""),l(!1)}catch(_){console.error("Failed to create room:",_.message)}}return a?g("div",{class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:g("div",{class:"bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md border border-gray-700",children:[g("h3",{class:"text-xl font-bold text-white mb-4",children:"Create New Room"}),g("form",{onSubmit:u,class:"flex flex-col space-y-4",children:[g("div",{children:[g("label",{class:"block text-gray-400 text-sm mb-1",children:"Room Name"}),g("input",{type:"text",value:e,onInput:m=>t(m.target.value),placeholder:"e.g. Study Group A",class:"w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500",required:!0})]}),g("div",{children:[g("label",{class:"block text-gray-400 text-sm mb-1",children:"Requirements / Description"}),g("textarea",{value:i,onInput:m=>s(m.target.value),placeholder:"e.g. Must have camera on, 25/5 pomodoro...",class:"w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white h-24 focus:outline-none focus:border-green-500"})]}),g("div",{class:"flex justify-end space-x-3 mt-2",children:[g("button",{type:"button",onClick:()=>l(!1),class:"px-4 py-2 text-gray-300 hover:text-white",children:"Cancel"}),g("button",{type:"submit",class:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",children:"Create Room"})]})]})]})}):g("button",{onClick:()=>l(!0),class:"bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition",children:"+ Create Room"})}function Ff({onRoomJoined:n}){console.log("JoinRoom component rendering");const[e,t]=$("");async function i(s){if(s.preventDefault(),!!e.trim())try{const a=await qe.joinRoom(e);n(a),t("")}catch(a){console.error("Failed to join room:",a.message)}}return g("form",{onSubmit:i,class:"flex items-center space-x-2",children:[g("input",{type:"text",value:e,onInput:s=>t(s.target.value),placeholder:"Enter invite code",class:"border px-2 py-1 rounded"}),g("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700",children:"Join"})]})}function jf({roomId:n,onSessionStarted:e}){console.log("StartSession component rendering");const[t,i]=$("pomodoro");async function s(){try{const a=await qe.startSession(n,t);e(a)}catch(a){console.error("Failed to start session:",a.message)}}return g("div",{class:"flex items-center space-x-2",children:[g("select",{value:t,onChange:a=>i(a.target.value),class:"border px-2 py-1 rounded",children:[g("option",{value:"pomodoro",children:"Pomodoro (25 min)"}),g("option",{value:"short_break",children:"Short Break (5 min)"}),g("option",{value:"long_break",children:"Long Break (15 min)"})]}),g("button",{onClick:s,class:"bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700",children:"Start Session"})]})}function Vf({roomId:n,sessionId:e,userId:t}){const[i,s]=$(""),[a,l]=$(!1),[u,m]=$(null);async function _(A){if(A.preventDefault(),!!i.trim()){l(!0),m(null);try{await qe.trackProgress(n,e,t,{task:i}),s("")}catch(E){m(E.message)}finally{l(!1)}}}return g("form",{onSubmit:_,class:"mt-4",children:[g("h4",{class:"font-semibold mb-2",children:"Track Your Progress"}),g("div",{class:"flex items-center space-x-2",children:[g("input",{type:"text",value:i,onInput:A=>s(A.target.value),placeholder:"Enter a completed task",class:"border px-2 py-1 rounded w-full",disabled:a}),g("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400",disabled:a,children:a?"Submitting...":"Submit"})]}),u&&g("p",{class:"text-red-500 mt-2",children:["Error: ",u]})]})}function Bf({room:n,user:e}){return n?g("div",{class:"p-4 border rounded-lg shadow-sm",children:[g("h3",{class:"text-xl font-bold mb-2",children:n.name}),g("div",{class:"mb-4 text-gray-300",children:[g("p",{class:"mb-2",children:[g("strong",{children:"Mode:"})," ",n.mode||"Standard"]}),g("div",{class:"p-3 bg-indigo-900 bg-opacity-30 border border-indigo-700 rounded-lg",children:[g("p",{class:"text-sm text-indigo-300 mb-1 font-bold uppercase tracking-wider",children:"Room Join Code"}),g("div",{class:"flex items-center space-x-2",children:[g("span",{class:"text-2xl font-mono font-bold text-white tracking-widest select-all",children:n.inviteCode}),g("button",{class:"text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded",onClick:()=>navigator.clipboard.writeText(n.inviteCode),children:"Copy"})]}),g("p",{class:"text-xs text-gray-400 mt-1",children:"Share this code with friends to let them join."})]})]}),g("div",{class:"mb-6",children:[g("h4",{class:"font-bold text-gray-300 mb-1",children:"Requirements:"}),g("p",{class:"text-gray-400 italic bg-gray-900 p-3 rounded border border-gray-700",children:n.description||"No specific requirements set."})]}),g(Vf,{roomId:n.id,sessionId:"s_placeholder_123",userId:e.uid})]}):g("div",{children:"Select a room to see details."})}function $f({session:n,room:e,onEndSession:t}){const[i,s]=$(n.durationMinutes*60),[a,l]=$(!0);lt(()=>{let m=null;return a&&i>0?m=setInterval(()=>{s(_=>_-1)},1e3):i===0&&l(!1),()=>clearInterval(m)},[a,i]);const u=m=>{const _=Math.floor(m/60),A=m%60;return`${_.toString().padStart(2,"0")}:${A.toString().padStart(2,"0")}`};return g("div",{class:"fixed inset-0 bg-gray-900 text-white z-50 flex flex-col items-center justify-center p-8",children:g("div",{class:"max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700",children:[g("div",{class:"text-center mb-10",children:[g("h1",{class:"text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",children:e.name}),g("p",{class:"text-xl text-gray-300 max-w-2xl mx-auto",children:e.description||"No specific requirements for this room. Stay focused!"})]}),g("div",{class:"flex flex-col items-center justify-center mb-12",children:[g("div",{class:"text-9xl font-mono font-bold tracking-wider mb-4 text-white drop-shadow-lg",children:u(i)}),g("div",{class:"text-2xl text-purple-300 uppercase tracking-widest font-semibold",children:n.mode.replace("_"," ")})]}),g("div",{class:"flex justify-center space-x-6",children:[!a&&i>0?g("button",{onClick:()=>l(!0),class:"bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"Resume"}):a&&g("button",{onClick:()=>l(!1),class:"bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"Pause"}),g("button",{onClick:t,class:"bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"End Session"})]})]})})}function Hf({user:n}){const[e,t]=$([]),[i,s]=$(null),[a,l]=$(null),[u,m]=$(null),_=()=>{qe.getRooms().then(k=>{Array.isArray(k)?t(k):console.error("API did not return an array for rooms:",k)}).catch(console.error)};lt(()=>{_()},[]);const A=k=>{const O=e.findIndex(R=>R.id===k.id);if(O>-1){const R=[...e];R[O]=k,t(R)}else t([...e,k])},E=k=>{console.log("Session started:",k);const O=e.find(R=>R.id===k.roomId);m(O),l(k)},S=()=>{l(null),m(null)},P=e.find(k=>k.id===i);return a&&u?g($f,{session:a,room:u,onEndSession:S}):g("div",{class:"container mx-auto p-6",children:[g("div",{class:"flex flex-col md:flex-row justify-between items-center mb-8",children:[g("h2",{class:"text-3xl font-bold text-white mb-4 md:mb-0",children:"Focus Rooms"}),g("div",{class:"flex space-x-4",children:[g(Uf,{onRoomCreated:A}),g(Ff,{onRoomJoined:A})]})]}),g("div",{class:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[g("div",{class:"lg:col-span-1",children:[g("h3",{class:"text-xl font-semibold text-gray-300 mb-4 px-2",children:"Your Rooms"}),g("ul",{class:"space-y-3",children:[e.map(k=>g("li",{class:`p-4 border border-gray-700 rounded-xl flex justify-between items-center cursor-pointer transition-all duration-200 ${i===k.id?"bg-gray-700 border-indigo-500 shadow-md transform scale-105":"bg-gray-800 hover:bg-gray-750 hover:border-gray-600"}`,onClick:()=>s(k.id),children:[g("div",{class:"flex-grow",children:[g("span",{class:"font-medium text-lg text-white block",children:k.name}),g("span",{class:"text-xs text-gray-400 mr-2",children:["Code: ",g("span",{class:"font-mono text-indigo-400",children:k.inviteCode})]})]}),g(jf,{roomId:k.id,onSessionStarted:E})]},k.id)),e.length===0&&g("div",{class:"text-gray-500 text-center py-8 bg-gray-800 rounded-xl border border-gray-700 border-dashed",children:"No rooms yet. Join or create one!"})]})]}),g("div",{class:"lg:col-span-2",children:P?g("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden min-h-[500px]",children:[g("div",{class:"p-6 border-b border-gray-700 bg-gray-850",children:[g("h3",{class:"text-2xl font-bold text-white",children:P.name}),g("p",{class:"text-gray-400 text-sm mt-1",children:"Room Details & Activity"})]}),g("div",{class:"p-6",children:g(Bf,{room:P,user:n})})]}):g("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-lg flex items-center justify-center min-h-[500px] text-gray-400",children:g("div",{class:"text-center",children:[g("span",{class:"text-6xl block mb-4",children:"👈"}),g("p",{class:"text-xl",children:"Select a room to view details"})]})})})]})]})}function Wf({activePage:n,setActivePage:e}){return g("nav",{class:"bg-gray-900 text-white shadow-md border-b border-gray-800 sticky top-0 z-50",children:g("div",{class:"container mx-auto px-4",children:g("div",{class:"flex items-center justify-between h-16",children:[g("div",{class:"flex items-center",children:g("span",{class:"font-bold text-xl tracking-tight cursor-pointer hover:text-indigo-400 transition-colors",onClick:()=>e("dashboard"),children:"FocusApp"})}),g("div",{class:"flex space-x-1",children:[{id:"dashboard",label:"Home"},{id:"rooms",label:"Rooms"},{id:"friends",label:"Friends"},{id:"accountability",label:"Accountability"}].map(i=>g("a",{href:"#",class:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${n===i.id?"bg-gray-800 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"}`,onClick:s=>{s.preventDefault(),e(i.id)},children:i.label},i.id))})]})})})}function zf({user:n}){const[e,t]=$([]),[i,s]=$(!0),[a,l]=$(null);return lt(()=>{if(console.log("FriendsPage user:",n),!!n){s(!0);try{qe.getFriends(n.uid).then(u=>{Array.isArray(u)?t(u):t([]),l(null)}).catch(u=>{l(u.message),t([])}).finally(()=>s(!1))}catch(u){l(u.message),s(!1)}}},[n]),g("div",{class:"container mx-auto p-6 max-w-4xl",children:[g("header",{class:"mb-8 flex items-center justify-between",children:[g("div",{children:[g("h2",{class:"text-3xl font-bold text-white",children:"Focus Friends"}),g("p",{class:"text-gray-400 mt-1",children:"See who is online and working."})]}),g("button",{class:"bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm flex items-center",children:g("span",{children:"+ Add Friend"})})]}),i&&g("div",{class:"flex justify-center items-center py-12",children:g("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"})}),a&&g("div",{class:"bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6",children:["Error: ",a]}),!i&&!a&&g("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden",children:e.length===0?g("div",{class:"text-center py-12 px-6",children:[g("div",{class:"text-6xl mb-4",children:"👋"}),g("h3",{class:"text-xl font-medium text-white mb-2",children:"No friends yet"}),g("p",{class:"text-gray-400",children:"Invite friends to see their status here."})]}):g("ul",{class:"divide-y divide-gray-700",children:e.map(u=>g("li",{class:"p-4 hover:bg-gray-750 transition-colors duration-150 flex justify-between items-center",children:[g("div",{class:"flex items-center space-x-4",children:[g("div",{class:"h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm",children:u.name.substring(0,2).toUpperCase()}),g("div",{children:[g("span",{class:"font-medium text-white block",children:u.name}),g("span",{class:"text-xs text-gray-400",children:"Last active: 2h ago"})]})]}),g("span",{class:`px-3 py-1 text-xs font-semibold rounded-full border ${u.status==="in-session"?"bg-emerald-900/30 text-emerald-400 border-emerald-500/30":"bg-gray-700 text-gray-400 border-gray-600"}`,children:u.status==="in-session"?"⚡ In Focus":"💤 Offline"})]},u.id))})})]})}function Gf({friend:n}){const[e,t]=$(null),[i,s]=$(!0);return lt(()=>{qe.getFriendActivity(n.id).then(a=>{t(a),s(!1)})},[n.id]),g("div",{class:"bg-gray-800 border border-gray-700 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200",children:[g("div",{class:"flex justify-between items-start mb-4",children:[g("div",{class:"flex items-center space-x-3",children:[g("div",{class:"h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-200 font-bold border border-indigo-500/30",children:n.name.substring(0,2).toUpperCase()}),g("div",{children:[g("h3",{class:"font-bold text-white text-lg",children:n.name}),g("p",{class:"text-xs text-gray-400",children:"Level 5 Focus Master"})]})]}),g("div",{class:"bg-amber-900/30 text-amber-500 px-2 py-1 rounded text-xs font-mono border border-amber-500/20",children:"🔥 3 Day Streak"})]}),i?g("div",{class:"animate-pulse space-y-3",children:[g("div",{class:"h-4 bg-gray-700 rounded w-3/4"}),g("div",{class:"h-4 bg-gray-700 rounded w-1/2"})]}):g("div",{class:"mt-2",children:[g("div",{class:"grid grid-cols-2 gap-4 mb-4",children:[g("div",{class:"bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700",children:[g("span",{class:"block text-2xl font-bold text-white",children:e.completedSessions}),g("span",{class:"text-xs text-gray-400 uppercase tracking-wider",children:"Sessions"})]}),g("div",{class:"bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700",children:[g("span",{class:"block text-2xl font-bold text-white",children:e.nudgesReceived}),g("span",{class:"text-xs text-gray-400 uppercase tracking-wider",children:"Nudges"})]})]}),g("button",{class:"w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm flex justify-center items-center group",children:[g("span",{class:"mr-2 group-hover:scale-110 transition-transform",children:"👋"})," Send a Nudge"]})]})]})}function qf({user:n}){const[e,t]=$([]),[i,s]=$(!0),[a,l]=$(null);return lt(()=>{n&&(s(!0),qe.getFriends(n.uid).then(u=>{Array.isArray(u)?t(u):t([]),l(null)}).catch(u=>{l(u.message),t([])}).finally(()=>s(!1)))},[n]),g("div",{class:"container mx-auto p-6 max-w-5xl",children:[g("header",{class:"mb-8",children:[g("h2",{class:"text-3xl font-bold text-white",children:"Peer Progress"}),g("p",{class:"text-gray-400 mt-1",children:"Keep each other accountable and celebrate wins."})]}),i&&g("div",{class:"flex justify-center items-center py-12",children:g("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"})}),a&&g("div",{class:"bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6",children:["Error: ",a]}),!i&&!a&&g(en,{children:e.length===0?g("div",{class:"text-center py-12 px-6 bg-gray-800 rounded-xl border border-gray-700",children:[g("div",{class:"text-6xl mb-4",children:"🌱"}),g("h3",{class:"text-xl font-medium text-white mb-2",children:"No accountability partners yet"}),g("p",{class:"text-gray-400 mb-6",children:"Add friends to start tracking progress together."}),g("button",{class:"bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors",children:"Find Friends"})]}):g("div",{class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(u=>g(Gf,{friend:u},u.id))})})]})}function Kf({setActivePage:n}){return g("div",{class:"container mx-auto p-6",children:[g("header",{class:"mb-10 text-center",children:[g("h1",{class:"text-4xl font-extrabold text-white mb-2",children:"Welcome Back!"}),g("p",{class:"text-gray-400 text-lg",children:"Choose where you want to go today."})]}),g("div",{class:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{id:"rooms",title:"Rooms",description:"Join or create focus rooms to work together.",color:"bg-indigo-500",icon:"🏠"},{id:"friends",title:"Friends",description:"See what your friends are up to and connect.",color:"bg-emerald-500",icon:"👥"},{id:"accountability",title:"Accountability",description:"Track progress and nudge your accountability partners.",color:"bg-amber-500",icon:"🔥"}].map(t=>g("div",{onClick:()=>n(t.id),class:"bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700",children:[g("div",{class:`${t.color} p-4 flex justify-center items-center h-24`,children:g("span",{class:"text-5xl",children:t.icon})}),g("div",{class:"p-6",children:[g("h2",{class:"text-2xl font-bold text-white mb-2",children:t.title}),g("p",{class:"text-gray-300",children:t.description}),g("div",{class:"mt-4 flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300",children:["Launch ",t.title," ",g("span",{class:"ml-2",children:"→"})]})]})]},t.id))})]})}function Jf(){const[n,e]=$(null),[t,i]=$(!0),[s,a]=$("dashboard");return lt(()=>{if(!Jt)return console.error("Firebase Auth instance is null. Skipping authentication listeners."),i(!1),()=>{};const l=Aa(Jt,u=>{e(u),i(!1)});return()=>l()},[]),t?g("div",{class:"min-h-screen flex items-center justify-center bg-gray-900 text-white",children:"Loading..."}):g("main",{class:"min-h-screen bg-gray-900 text-gray-100 font-sans",children:n?g("div",{class:"flex flex-col min-h-screen",children:[g(Wf,{activePage:s,setActivePage:a}),g("div",{class:"flex-grow",children:[s==="dashboard"&&g(Kf,{setActivePage:a}),s==="rooms"&&g(Hf,{user:n}),s==="friends"&&g(zf,{user:n}),s==="accountability"&&g(qf,{user:n})]})]}):g(Nf,{})})}Hc(g(Jf,{}),document.getElementById("app"));
