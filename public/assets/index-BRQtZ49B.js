(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var tr,H,Uo,tt,Ps,Fo,jo,Vo,si,Br,Hr,Qt={},$o=[],Fc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,nr=Array.isArray;function Ne(n,e){for(var t in e)n[t]=e[t];return n}function oi(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function jc(n,e,t){var i,s,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?s=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?tr.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)l[a]===void 0&&(l[a]=n.defaultProps[a]);return Dn(n,l,i,s,null)}function Dn(n,e,t,i,s){var a={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Uo,__i:-1,__u:0};return s==null&&H.vnode!=null&&H.vnode(a),a}function nn(n){return n.children}function On(n,e){this.props=n,this.context=e}function Et(n,e){if(e==null)return n.__?Et(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Et(n):null}function Bo(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Bo(n)}}function Rs(n){(!n.__d&&(n.__d=!0)&&tt.push(n)&&!$n.__r++||Ps!=H.debounceRendering)&&((Ps=H.debounceRendering)||Fo)($n)}function $n(){for(var n,e,t,i,s,a,l,u=1;tt.length;)tt.length>u&&tt.sort(jo),n=tt.shift(),u=tt.length,n.__d&&(t=void 0,s=(i=(e=n).__v).__e,a=[],l=[],e.__P&&((t=Ne({},i)).__v=i.__v+1,H.vnode&&H.vnode(t),ai(e.__P,t,i,e.__n,e.__P.namespaceURI,32&i.__u?[s]:null,a,s??Et(i),!!(32&i.__u),l),t.__v=i.__v,t.__.__k[t.__i]=t,zo(a,t,l),t.__e!=s&&Bo(t)));$n.__r=0}function Ho(n,e,t,i,s,a,l,u,m,_,E){var w,S,k,x,P,R,N,D=i&&i.__k||$o,$=e.length;for(m=Vc(t,e,D,m,$),w=0;w<$;w++)(k=t.__k[w])!=null&&(S=k.__i==-1?Qt:D[k.__i]||Qt,k.__i=w,R=ai(n,k,S,s,a,l,u,m,_,E),x=k.__e,k.ref&&S.ref!=k.ref&&(S.ref&&ci(S.ref,null,k),E.push(k.ref,k.__c||x,k)),P==null&&x!=null&&(P=x),(N=!!(4&k.__u))||S.__k===k.__k?m=Wo(k,m,n,N):typeof k.type=="function"&&R!==void 0?m=R:x&&(m=x.nextSibling),k.__u&=-7);return t.__e=P,m}function Vc(n,e,t,i,s){var a,l,u,m,_,E=t.length,w=E,S=0;for(n.__k=new Array(s),a=0;a<s;a++)(l=e[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(m=a+S,(l=n.__k[a]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?Dn(null,l,null,null,null):nr(l)?Dn(nn,{children:l},null,null,null):l.constructor==null&&l.__b>0?Dn(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=n,l.__b=n.__b+1,u=null,(_=l.__i=$c(l,t,m,w))!=-1&&(w--,(u=t[_])&&(u.__u|=2)),u==null||u.__v==null?(_==-1&&(s>E?S--:s<E&&S++),typeof l.type!="function"&&(l.__u|=4)):_!=m&&(_==m-1?S--:_==m+1?S++:(_>m?S--:S++,l.__u|=4))):n.__k[a]=null;if(w)for(a=0;a<E;a++)(u=t[a])!=null&&(2&u.__u)==0&&(u.__e==i&&(i=Et(u)),qo(u,u));return i}function Wo(n,e,t,i){var s,a;if(typeof n.type=="function"){for(s=n.__k,a=0;s&&a<s.length;a++)s[a]&&(s[a].__=n,e=Wo(s[a],e,t,i));return e}n.__e!=e&&(i&&(e&&n.type&&!e.parentNode&&(e=Et(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function $c(n,e,t,i){var s,a,l,u=n.key,m=n.type,_=e[t],E=_!=null&&(2&_.__u)==0;if(_===null&&n.key==null||E&&u==_.key&&m==_.type)return t;if(i>(E?1:0)){for(s=t-1,a=t+1;s>=0||a<e.length;)if((_=e[l=s>=0?s--:a++])!=null&&(2&_.__u)==0&&u==_.key&&m==_.type)return l}return-1}function Ns(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Fc.test(e)?t:t+"px"}function xn(n,e,t,i,s){var a,l;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Ns(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Ns(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Vo,"$1")),l=e.toLowerCase(),e=l in n||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?i?t.u=i.u:(t.u=si,n.addEventListener(e,a?Hr:Br,a)):n.removeEventListener(e,a?Hr:Br,a);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Ds(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=si++;else if(e.t<t.u)return;return t(H.event?H.event(e):e)}}}function ai(n,e,t,i,s,a,l,u,m,_){var E,w,S,k,x,P,R,N,D,$,z,ue,J,b,p,f,y,v=e.type;if(e.constructor!=null)return null;128&t.__u&&(m=!!(32&t.__u),a=[u=e.__e=t.__e]),(E=H.__b)&&E(e);e:if(typeof v=="function")try{if(N=e.props,D="prototype"in v&&v.prototype.render,$=(E=v.contextType)&&i[E.__c],z=E?$?$.props.value:E.__:i,t.__c?R=(w=e.__c=t.__c).__=w.__E:(D?e.__c=w=new v(N,z):(e.__c=w=new On(N,z),w.constructor=v,w.render=Hc),$&&$.sub(w),w.props=N,w.state||(w.state={}),w.context=z,w.__n=i,S=w.__d=!0,w.__h=[],w._sb=[]),D&&w.__s==null&&(w.__s=w.state),D&&v.getDerivedStateFromProps!=null&&(w.__s==w.state&&(w.__s=Ne({},w.__s)),Ne(w.__s,v.getDerivedStateFromProps(N,w.__s))),k=w.props,x=w.state,w.__v=e,S)D&&v.getDerivedStateFromProps==null&&w.componentWillMount!=null&&w.componentWillMount(),D&&w.componentDidMount!=null&&w.__h.push(w.componentDidMount);else{if(D&&v.getDerivedStateFromProps==null&&N!==k&&w.componentWillReceiveProps!=null&&w.componentWillReceiveProps(N,z),!w.__e&&w.shouldComponentUpdate!=null&&w.shouldComponentUpdate(N,w.__s,z)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(w.props=N,w.state=w.__s,w.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(T){T&&(T.__=e)}),ue=0;ue<w._sb.length;ue++)w.__h.push(w._sb[ue]);w._sb=[],w.__h.length&&l.push(w);break e}w.componentWillUpdate!=null&&w.componentWillUpdate(N,w.__s,z),D&&w.componentDidUpdate!=null&&w.__h.push(function(){w.componentDidUpdate(k,x,P)})}if(w.context=z,w.props=N,w.__P=n,w.__e=!1,J=H.__r,b=0,D){for(w.state=w.__s,w.__d=!1,J&&J(e),E=w.render(w.props,w.state,w.context),p=0;p<w._sb.length;p++)w.__h.push(w._sb[p]);w._sb=[]}else do w.__d=!1,J&&J(e),E=w.render(w.props,w.state,w.context),w.state=w.__s;while(w.__d&&++b<25);w.state=w.__s,w.getChildContext!=null&&(i=Ne(Ne({},i),w.getChildContext())),D&&!S&&w.getSnapshotBeforeUpdate!=null&&(P=w.getSnapshotBeforeUpdate(k,x)),f=E,E!=null&&E.type===nn&&E.key==null&&(f=Go(E.props.children)),u=Ho(n,nr(f)?f:[f],e,t,i,s,a,l,u,m,_),w.base=e.__e,e.__u&=-161,w.__h.length&&l.push(w),R&&(w.__E=w.__=null)}catch(T){if(e.__v=null,m||a!=null)if(T.then){for(e.__u|=m?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;a[a.indexOf(u)]=null,e.__e=u}else{for(y=a.length;y--;)oi(a[y]);Wr(e)}else e.__e=t.__e,e.__k=t.__k,T.then||Wr(e);H.__e(T,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):u=e.__e=Bc(t.__e,e,t,i,s,a,l,m,_);return(E=H.diffed)&&E(e),128&e.__u?void 0:u}function Wr(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(Wr)}function zo(n,e,t){for(var i=0;i<t.length;i++)ci(t[i],t[++i],t[++i]);H.__c&&H.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(a){a.call(s)})}catch(a){H.__e(a,s.__v)}})}function Go(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:nr(n)?n.map(Go):Ne({},n)}function Bc(n,e,t,i,s,a,l,u,m){var _,E,w,S,k,x,P,R=t.props,N=e.props,D=e.type;if(D=="svg"?s="http://www.w3.org/2000/svg":D=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),a!=null){for(_=0;_<a.length;_++)if((k=a[_])&&"setAttribute"in k==!!D&&(D?k.localName==D:k.nodeType==3)){n=k,a[_]=null;break}}if(n==null){if(D==null)return document.createTextNode(N);n=document.createElementNS(s,D,N.is&&N),u&&(H.__m&&H.__m(e,a),u=!1),a=null}if(D==null)R===N||u&&n.data==N||(n.data=N);else{if(a=a&&tr.call(n.childNodes),R=t.props||Qt,!u&&a!=null)for(R={},_=0;_<n.attributes.length;_++)R[(k=n.attributes[_]).name]=k.value;for(_ in R)if(k=R[_],_!="children"){if(_=="dangerouslySetInnerHTML")w=k;else if(!(_ in N)){if(_=="value"&&"defaultValue"in N||_=="checked"&&"defaultChecked"in N)continue;xn(n,_,null,k,s)}}for(_ in N)k=N[_],_=="children"?S=k:_=="dangerouslySetInnerHTML"?E=k:_=="value"?x=k:_=="checked"?P=k:u&&typeof k!="function"||R[_]===k||xn(n,_,k,R[_],s);if(E)u||w&&(E.__html==w.__html||E.__html==n.innerHTML)||(n.innerHTML=E.__html),e.__k=[];else if(w&&(n.innerHTML=""),Ho(e.type=="template"?n.content:n,nr(S)?S:[S],e,t,i,D=="foreignObject"?"http://www.w3.org/1999/xhtml":s,a,l,a?a[0]:t.__k&&Et(t,0),u,m),a!=null)for(_=a.length;_--;)oi(a[_]);u||(_="value",D=="progress"&&x==null?n.removeAttribute("value"):x!=null&&(x!==n[_]||D=="progress"&&!x||D=="option"&&x!=R[_])&&xn(n,_,x,R[_],s),_="checked",P!=null&&P!=n[_]&&xn(n,_,P,R[_],s))}return n}function ci(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){H.__e(s,t)}}function qo(n,e,t){var i,s;if(H.unmount&&H.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||ci(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){H.__e(a,e)}i.base=i.__P=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&qo(i[s],e,t||typeof n.type!="function");t||oi(n.__e),n.__c=n.__=n.__e=void 0}function Hc(n,e,t){return this.constructor(n,t)}function Wc(n,e,t){var i,s,a,l;e==document&&(e=document.documentElement),H.__&&H.__(n,e),s=(i=!1)?null:e.__k,a=[],l=[],ai(e,n=e.__k=jc(nn,null,[n]),s||Qt,Qt,e.namespaceURI,s?null:e.firstChild?tr.call(e.childNodes):null,a,s?s.__e:e.firstChild,i,l),zo(a,n,l)}tr=$o.slice,H={__e:function(n,e,t,i){for(var s,a,l;e=e.__;)if((s=e.__c)&&!s.__)try{if((a=s.constructor)&&a.getDerivedStateFromError!=null&&(s.setState(a.getDerivedStateFromError(n)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),l=s.__d),l)return s.__E=s}catch(u){n=u}throw n}},Uo=0,On.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ne({},this.state),typeof n=="function"&&(n=n(Ne({},t),this.props)),n&&Ne(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Rs(this))},On.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Rs(this))},On.prototype.render=nn,tt=[],Fo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,jo=function(n,e){return n.__v.__b-e.__v.__b},$n.__r=0,Vo=/(PointerCapture)$|Capture$/i,si=0,Br=Ds(!1),Hr=Ds(!0);var zc=0;function d(n,e,t,i,s,a){e||(e={});var l,u,m=e;if("ref"in m)for(u in m={},e)u=="ref"?l=e[u]:m[u]=e[u];var _={type:n,props:m,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--zc,__i:-1,__u:0,__source:s,__self:a};if(typeof n=="function"&&(l=n.defaultProps))for(u in l)m[u]===void 0&&(m[u]=l[u]);return H.vnode&&H.vnode(_),_}const Gc=()=>{};var Os={};/**
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
 */const Ko=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},qc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],l=n[t++],u=n[t++],m=((s&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const a=n[t++],l=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},Jo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],l=s+1<n.length,u=l?n[s+1]:0,m=s+2<n.length,_=m?n[s+2]:0,E=a>>2,w=(a&3)<<4|u>>4;let S=(u&15)<<2|_>>6,k=_&63;m||(k=64,l||(S=64)),i.push(t[E],t[w],t[S],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ko(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const _=s<n.length?t[n.charAt(s)]:64;++s;const w=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||u==null||_==null||w==null)throw new Kc;const S=a<<2|u>>4;if(i.push(S),_!==64){const k=u<<4&240|_>>2;if(i.push(k),w!==64){const x=_<<6&192|w;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jc=function(n){const e=Ko(n);return Jo.encodeByteArray(e,!0)},Bn=function(n){return Jc(n).replace(/\./g,"")},Xo=function(n){try{return Jo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Yc=()=>Xc().__FIREBASE_DEFAULTS__,Qc=()=>{if(typeof process>"u"||typeof Os>"u")return;const n=Os.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xo(n[1]);return e&&JSON.parse(e)},li=()=>{try{return Gc()||Yc()||Qc()||Zc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yo=n=>li()?.emulatorHosts?.[n],Qo=n=>{const e=Yo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Zo=()=>li()?.config,ea=n=>li()?.[`_${n}`];/**
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
 */function ut(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hi(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function tl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Bn(JSON.stringify(t)),Bn(JSON.stringify(l)),""].join(".")}const qt={};function nl(){const n={prod:[],emulator:[]};for(const e of Object.keys(qt))qt[e]?n.emulator.push(e):n.prod.push(e);return n}function rl(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ls=!1;function ui(n,e){if(typeof window>"u"||typeof document>"u"||!ut(window.location.host)||qt[n]===e||qt[n]||Ls)return;qt[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",a=nl().prod.length>0;function l(){const S=document.getElementById(i);S&&S.remove()}function u(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,k){S.setAttribute("width","24"),S.setAttribute("id",k),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function _(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ls=!0,l()},S}function E(S,k){S.setAttribute("id",k),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function w(){const S=rl(i),k=t("text"),x=document.getElementById(k)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),N=t("preprendIcon"),D=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const $=S.element;u($),E(R,P);const z=_();m(D,N),$.append(D,x,R,z),document.body.appendChild($)}a?(x.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function il(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function sl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ol(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function al(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cl(){const n=ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ll(){try{return typeof indexedDB=="object"}catch{return!1}}function hl(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const ul="FirebaseError";class Ae extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ul,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rn.prototype.create)}}class rn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?dl(a,i):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Ae(s,u,i)}}function dl(n,e){return n.replace(fl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fl=/\{\$([^}]+)}/g;function pl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function at(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],l=e[s];if(Ms(a)&&Ms(l)){if(!at(a,l))return!1}else if(a!==l)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ms(n){return n!==null&&typeof n=="object"}/**
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
 */function ve(n){return n&&n._delegate?n._delegate:n}class Je{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const et="[DEFAULT]";/**
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
 */class yl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new el;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wl(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);i===u&&l.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vl(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vl(n){return n===et?void 0:n}function wl(n){return n.instantiationMode==="EAGER"}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const Il={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Tl=V.INFO,El={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Sl=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=El[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class di{constructor(e){this.name=e,this._logLevel=Tl,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Il[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Al=(n,e)=>e.some(t=>n instanceof t);let Us,Fs;function kl(){return Us||(Us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xl(){return Fs||(Fs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ta=new WeakMap,zr=new WeakMap,na=new WeakMap,Dr=new WeakMap,fi=new WeakMap;function Cl(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(qe(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&ta.set(t,n)}).catch(()=>{}),fi.set(e,n),e}function Pl(n){if(zr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});zr.set(n,e)}let Gr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||na.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rl(n){Gr=n(Gr)}function Nl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Or(this),e,...t);return na.set(i,e.sort?e.sort():[e]),qe(i)}:xl().includes(n)?function(...e){return n.apply(Or(this),e),qe(ta.get(this))}:function(...e){return qe(n.apply(Or(this),e))}}function Dl(n){return typeof n=="function"?Nl(n):(n instanceof IDBTransaction&&Pl(n),Al(n,kl())?new Proxy(n,Gr):n)}function qe(n){if(n instanceof IDBRequest)return Cl(n);if(Dr.has(n))return Dr.get(n);const e=Dl(n);return e!==n&&(Dr.set(n,e),fi.set(e,n)),e}const Or=n=>fi.get(n);function Ol(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const l=indexedDB.open(n,e),u=qe(l);return i&&l.addEventListener("upgradeneeded",m=>{i(qe(l.result),m.oldVersion,m.newVersion,qe(l.transaction),m)}),t&&l.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),u.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",_=>s(_.oldVersion,_.newVersion,_))}).catch(()=>{}),u}const Ll=["get","getKey","getAll","getAllKeys","count"],Ml=["put","add","delete","clear"],Lr=new Map;function js(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Lr.get(e))return Lr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Ml.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ll.includes(t)))return;const a=async function(l,...u){const m=this.transaction(l,s?"readwrite":"readonly");let _=m.store;return i&&(_=_.index(u.shift())),(await Promise.all([_[t](...u),s&&m.done]))[0]};return Lr.set(e,a),a}Rl(n=>({...n,get:(e,t,i)=>js(e,t)||n.get(e,t,i),has:(e,t)=>!!js(e,t)||n.has(e,t)}));/**
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
 */class Ul{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Fl(n){return n.getComponent()?.type==="VERSION"}const qr="@firebase/app",Vs="0.14.2";/**
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
 */const Me=new di("@firebase/app"),jl="@firebase/app-compat",Vl="@firebase/analytics-compat",$l="@firebase/analytics",Bl="@firebase/app-check-compat",Hl="@firebase/app-check",Wl="@firebase/auth",zl="@firebase/auth-compat",Gl="@firebase/database",ql="@firebase/data-connect",Kl="@firebase/database-compat",Jl="@firebase/functions",Xl="@firebase/functions-compat",Yl="@firebase/installations",Ql="@firebase/installations-compat",Zl="@firebase/messaging",eh="@firebase/messaging-compat",th="@firebase/performance",nh="@firebase/performance-compat",rh="@firebase/remote-config",ih="@firebase/remote-config-compat",sh="@firebase/storage",oh="@firebase/storage-compat",ah="@firebase/firestore",ch="@firebase/ai",lh="@firebase/firestore-compat",hh="firebase",uh="12.2.0";/**
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
 */const Kr="[DEFAULT]",dh={[qr]:"fire-core",[jl]:"fire-core-compat",[$l]:"fire-analytics",[Vl]:"fire-analytics-compat",[Hl]:"fire-app-check",[Bl]:"fire-app-check-compat",[Wl]:"fire-auth",[zl]:"fire-auth-compat",[Gl]:"fire-rtdb",[ql]:"fire-data-connect",[Kl]:"fire-rtdb-compat",[Jl]:"fire-fn",[Xl]:"fire-fn-compat",[Yl]:"fire-iid",[Ql]:"fire-iid-compat",[Zl]:"fire-fcm",[eh]:"fire-fcm-compat",[th]:"fire-perf",[nh]:"fire-perf-compat",[rh]:"fire-rc",[ih]:"fire-rc-compat",[sh]:"fire-gcs",[oh]:"fire-gcs-compat",[ah]:"fire-fst",[lh]:"fire-fst-compat",[ch]:"fire-vertex","fire-js":"fire-js",[hh]:"fire-js-all"};/**
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
 */const Hn=new Map,fh=new Map,Jr=new Map;function $s(n,e){try{n.container.addComponent(e)}catch(t){Me.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ct(n){const e=n.name;if(Jr.has(e))return Me.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,n);for(const t of Hn.values())$s(t,n);for(const t of fh.values())$s(t,n);return!0}function rr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function le(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new rn("app","Firebase",ph);/**
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
 */class gh{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const kt=uh;function ra(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Kr,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(t||(t=Zo()),!t)throw Ke.create("no-options");const a=Hn.get(s);if(a){if(at(t,a.options)&&at(i,a.config))return a;throw Ke.create("duplicate-app",{appName:s})}const l=new bl(s);for(const m of Jr.values())l.addComponent(m);const u=new gh(t,i,l);return Hn.set(s,u),u}function pi(n=Kr){const e=Hn.get(n);if(!e&&n===Kr&&Zo())return ra();if(!e)throw Ke.create("no-app",{appName:n});return e}function Te(n,e,t){let i=dh[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Me.warn(l.join(" "));return}ct(new Je(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mh="firebase-heartbeat-database",_h=1,Zt="firebase-heartbeat-store";let Mr=null;function ia(){return Mr||(Mr=Ol(mh,_h,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ke.create("idb-open",{originalErrorMessage:n.message})})),Mr}async function yh(n){try{const t=(await ia()).transaction(Zt),i=await t.objectStore(Zt).get(sa(n));return await t.done,i}catch(e){if(e instanceof Ae)Me.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e?.message});Me.warn(t.message)}}}async function Bs(n,e){try{const i=(await ia()).transaction(Zt,"readwrite");await i.objectStore(Zt).put(e,sa(n)),await i.done}catch(t){if(t instanceof Ae)Me.warn(t.message);else{const i=Ke.create("idb-set",{originalErrorMessage:t?.message});Me.warn(i.message)}}}function sa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vh=1024,wh=30;class bh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Th(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>wh){const s=Eh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Me.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hs(),{heartbeatsToSend:t,unsentEntries:i}=Ih(this._heartbeatsCache.heartbeats),s=Bn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Me.warn(e),""}}}function Hs(){return new Date().toISOString().substring(0,10)}function Ih(n,e=vh){const t=[];let i=n.slice();for(const s of n){const a=t.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),Ws(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ws(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Th{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ll()?hl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Bs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Bs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ws(n){return Bn(JSON.stringify({version:2,heartbeats:n})).length}function Eh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function Sh(n){ct(new Je("platform-logger",e=>new Ul(e),"PRIVATE")),ct(new Je("heartbeat",e=>new bh(e),"PRIVATE")),Te(qr,Vs,n),Te(qr,Vs,"esm2020"),Te("fire-js","")}Sh("");var Ah="firebase",kh="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te(Ah,kh,"app");function oa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xh=oa,aa=new rn("auth","Firebase",oa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new di("@firebase/auth");function Ch(n,...e){Wn.logLevel<=V.WARN&&Wn.warn(`Auth (${kt}): ${n}`,...e)}function Ln(n,...e){Wn.logLevel<=V.ERROR&&Wn.error(`Auth (${kt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,...e){throw mi(n,...e)}function _e(n,...e){return mi(n,...e)}function gi(n,e,t){const i={...xh(),[e]:t};return new rn("auth","Firebase",i).create(e,{appName:n.name})}function Le(n){return gi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ph(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Se(n,"argument-error"),gi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mi(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return aa.create(n,...e)}function O(n,e,...t){if(!n)throw mi(e,...t)}function De(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ln(e),new Error(e)}function Ue(n,e){n||De(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class on{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ue(t>e,"Short delay should be less than long delay!"),this.isMobile=il()||al()}get(){return Nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){Ue(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;De("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;De("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;De("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Lh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Mh=new on(3e4,6e4);function an(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function xt(n,e,t,i,s={}){return la(n,s,async()=>{let a={},l={};i&&(e==="GET"?l=i:a={body:JSON.stringify(i)});const u=sn({key:n.config.apiKey,...l}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const _={method:e,headers:m,...a};return sl()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&ut(n.emulatorConfig.host)&&(_.credentials="include"),ca.fetch()(await ha(n,n.config.apiHost,t,u),_)})}async function la(n,e,t){n._canInitEmulator=!1;const i={...Oh,...e};try{const s=new Uh(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Cn(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const u=a.ok?l.errorMessage:l.error.message,[m,_]=u.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cn(n,"credential-already-in-use",l);if(m==="EMAIL_EXISTS")throw Cn(n,"email-already-in-use",l);if(m==="USER_DISABLED")throw Cn(n,"user-disabled",l);const E=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw gi(n,E,_);Se(n,E)}}catch(s){if(s instanceof Ae)throw s;Se(n,"network-request-failed",{message:String(s)})}}async function yi(n,e,t,i,s={}){const a=await xt(n,e,t,i,s);return"mfaPendingCredential"in a&&Se(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function ha(n,e,t,i){const s=`${e}${t}?${i}`,a=n,l=a.config.emulator?_i(n.config,s):`${n.config.apiScheme}://${s}`;return Lh.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}class Uh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(_e(this.auth,"network-request-failed")),Mh.get())})}}function Cn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=_e(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function zn(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jh(n,e=!1){const t=ve(n),i=await t.getIdToken(e),s=vi(i);O(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a?.sign_in_provider;return{claims:s,token:i,authTime:Kt(Ur(s.auth_time)),issuedAtTime:Kt(Ur(s.iat)),expirationTime:Kt(Ur(s.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Ur(n){return Number(n)*1e3}function vi(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ln("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xo(t);return s?JSON.parse(s):(Ln("Failed to decode base64 JWT payload"),null)}catch(s){return Ln("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Gs(n){const e=vi(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ae&&Vh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Vh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kt(this.lastLoginAt),this.creationTime=Kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gn(n){const e=n.auth,t=await n.getIdToken(),i=await en(n,zn(e,{idToken:t}));O(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=s.providerUserInfo?.length?ua(s.providerUserInfo):[],l=Hh(n.providerData,a),u=n.isAnonymous,m=!(n.email&&s.passwordHash)&&!l?.length,_=u?m:!1,E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yr(s.createdAt,s.lastLoginAt),isAnonymous:_};Object.assign(n,E)}async function Bh(n){const e=ve(n);await Gn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hh(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ua(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n,e){const t=await la(n,{},async()=>{const i=sn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,l=await ha(n,s,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:u,body:i};return n.emulatorConfig&&ut(n.emulatorConfig.host)&&(m.credentials="include"),ca.fetch()(l,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zh(n,e){return xt(n,"POST","/v2/accounts:revokeToken",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=Gs(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await Wh(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,l=new yt;return i&&(O(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),s&&(O(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(O(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yt,this.toJSON())}_performRefresh(){return De("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ge{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new $h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await en(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jh(this,e)}reload(){return Bh(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ge({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Gn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(le(this.auth.app))return Promise.reject(Le(this.auth));const e=await this.getIdToken();return await en(this,Fh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,u=t.tenantId??void 0,m=t._redirectEventId??void 0,_=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:w,emailVerified:S,isAnonymous:k,providerData:x,stsTokenManager:P}=t;O(w&&P,e,"internal-error");const R=yt.fromJSON(this.name,P);O(typeof w=="string",e,"internal-error"),He(i,e.name),He(s,e.name),O(typeof S=="boolean",e,"internal-error"),O(typeof k=="boolean",e,"internal-error"),He(a,e.name),He(l,e.name),He(u,e.name),He(m,e.name),He(_,e.name),He(E,e.name);const N=new ge({uid:w,auth:e,email:s,emailVerified:S,displayName:i,isAnonymous:k,photoURL:l,phoneNumber:a,tenantId:u,stsTokenManager:R,createdAt:_,lastLoginAt:E});return x&&Array.isArray(x)&&(N.providerData=x.map(D=>({...D}))),m&&(N._redirectEventId=m),N}static async _fromIdTokenResponse(e,t,i=!1){const s=new yt;s.updateFromServerResponse(t);const a=new ge({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Gn(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];O(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?ua(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!a?.length,u=new yt;u.updateFromIdToken(i);const m=new ge({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:l}),_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!a?.length};return Object.assign(m,_),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map;function Oe(n){Ue(n instanceof Function,"Expected a class definition");let e=qs.get(n);return e?(Ue(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qs.set(n,e),e)}/**
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
 */function Mn(n,e,t){return`firebase:${n}:${e}:${t}`}class vt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=Mn(this.userKey,s.apiKey,a),this.fullPersistenceKey=Mn("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zn(this.auth,{idToken:e}).catch(()=>{});return t?ge._fromGetAccountInfoResponse(this.auth,t,e):null}return ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new vt(Oe(Ks),e,i);const s=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=s[0]||Oe(Ks);const l=Mn(i,e.config.apiKey,e.name);let u=null;for(const _ of t)try{const E=await _._get(l);if(E){let w;if(typeof E=="string"){const S=await zn(e,{idToken:E}).catch(()=>{});if(!S)break;w=await ge._fromGetAccountInfoResponse(e,S,E)}else w=ge._fromJSON(e,E);_!==a&&(u=w),a=_;break}}catch{}const m=s.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new vt(a,e,i):(a=m[0],u&&await a._set(l,u.toJSON()),await Promise.all(t.map(async _=>{if(_!==a)try{await _._remove(l)}catch{}})),new vt(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ma(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ya(e))return"Blackberry";if(va(e))return"Webos";if(pa(e))return"Safari";if((e.includes("chrome/")||ga(e))&&!e.includes("edge/"))return"Chrome";if(_a(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function fa(n=ce()){return/firefox\//i.test(n)}function pa(n=ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ga(n=ce()){return/crios\//i.test(n)}function ma(n=ce()){return/iemobile/i.test(n)}function _a(n=ce()){return/android/i.test(n)}function ya(n=ce()){return/blackberry/i.test(n)}function va(n=ce()){return/webos/i.test(n)}function wi(n=ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gh(n=ce()){return wi(n)&&!!window.navigator?.standalone}function qh(){return cl()&&document.documentMode===10}function wa(n=ce()){return wi(n)||_a(n)||va(n)||ya(n)||/windows phone/i.test(n)||ma(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n,e=[]){let t;switch(n){case"Browser":t=Js(ce());break;case"Worker":t=`${Js(ce())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kt}/${i}`}/**
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
 */async function Jh(n,e={}){return xt(n,"GET","/v2/passwordPolicy",an(n,e))}/**
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
 */class Qh{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xs(this),this.idTokenSubscription=new Xs(this),this.beforeStateQueue=new Kh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Oe(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await vt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zn(this,{idToken:e}),i=await ge._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(le(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(le(this.app))return Promise.reject(Le(this));const t=e?ve(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return le(this.app)?Promise.reject(Le(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return le(this.app)?Promise.reject(Le(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jh(this),t=new Yh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await zh(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Oe(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await vt.create(this,[Oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(u,this,"internal-error"),u.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,s);return()=>{l=!0,m()}}else{const m=e.addObserver(t);return()=>{l=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ba(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ch(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ct(n){return ve(n)}class Xs{constructor(e){this.auth=e,this.observer=null,this.addObserver=gl(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zh(n){bi=n}function eu(n){return bi.loadJS(n)}function tu(){return bi.gapiScript}function nu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n,e){const t=rr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(at(a,e??{}))return s;Se(s,"already-initialized")}return t.initialize({options:e})}function iu(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Oe);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Ia(n,e,t){const i=Ct(n);O(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=Ta(e),{host:l,port:u}=su(e),m=u===null?"":`:${u}`,_={url:`${a}//${l}${m}/`},E=Object.freeze({host:l,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){O(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),O(at(_,i.config.emulator)&&at(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,ut(l)?(hi(`${a}//${l}${m}`),ui("Auth",!0)):ou()}function Ta(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function su(n){const e=Ta(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:Ys(i.substr(a.length+1))}}else{const[a,l]=i.split(":");return{host:a,port:Ys(l)}}}function Ys(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ou(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return De("not implemented")}_getIdTokenResponse(e){return De("not implemented")}_linkToIdToken(e,t){return De("not implemented")}_getReauthenticationResolver(e){return De("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(n,e){return yi(n,"POST","/v1/accounts:signInWithIdp",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="http://localhost";class lt extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...a}=t;if(!i||!s)return null;const l=new lt(i,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return wt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,wt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wt(e,t)}buildRequest(){const e={requestUri:au,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cn extends Ii{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends cn{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends cn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Pe.credential(t,i)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends cn{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends cn{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ge.credential(t,i)}catch{return null}}}Ge.TWITTER_SIGN_IN_METHOD="twitter.com";Ge.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(n,e){return yi(n,"POST","/v1/accounts:signUp",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await ge._fromIdTokenResponse(e,i,s),l=Qs(i);return new Fe({user:a,providerId:l,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Qs(i);return new Fe({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Qs(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(n){if(le(n.app))return Promise.reject(Le(n));const e=Ct(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Fe({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await cu(e,{returnSecureToken:!0}),i=await Fe._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ae{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,qn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new qn(e,t,i,s)}}function Aa(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?qn._fromErrorAndOperation(n,a,e,i):a})}async function lu(n,e,t=!1){const i=await en(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fe._forOperation(n,"link",i)}/**
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
 */async function hu(n,e,t=!1){const{auth:i}=n;if(le(i.app))return Promise.reject(Le(i));const s="reauthenticate";try{const a=await en(n,Aa(i,s,e,n),t);O(a.idToken,i,"internal-error");const l=vi(a.idToken);O(l,i,"internal-error");const{sub:u}=l;return O(n.uid===u,i,"user-mismatch"),Fe._forOperation(n,s,a)}catch(a){throw a?.code==="auth/user-not-found"&&Se(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(n,e,t=!1){if(le(n.app))return Promise.reject(Le(n));const i="signIn",s=await Aa(n,i,e),a=await Fe._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(n,e){return yi(n,"POST","/v1/accounts:signInWithCustomToken",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(n,e){if(le(n.app))return Promise.reject(Le(n));const t=Ct(n),i=await du(t,{token:e,returnSecureToken:!0}),s=await Fe._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}function pu(n,e,t,i){return ve(n).onIdTokenChanged(e,t,i)}function gu(n,e,t){return ve(n).beforeAuthStateChanged(e,t)}function ka(n,e,t,i){return ve(n).onAuthStateChanged(e,t,i)}function mu(n){return ve(n).signOut()}const Kn="__sak";/**
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
 */class xa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kn,"1"),this.storage.removeItem(Kn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=1e3,yu=10;class Ca extends xa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,m)=>{this.notifyListeners(l,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(i);!t&&this.localCache[i]===l||this.notifyListeners(i,l)},a=this.storage.getItem(i);qh()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},_u)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ca.type="LOCAL";const vu=Ca;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends xa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pa.type="SESSION";const Ra=Pa;/**
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
 */class ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ir(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,l=this.handlersMap[s];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(l).map(async _=>_(t.origin,a)),m=await wu(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ir.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((u,m)=>{const _=Ti("",20);s.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},i);l={messageChannel:s,onMessage(w){const S=w;if(S.data.eventId===_)switch(S.data.status){case"ack":clearTimeout(E),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(S.data.response);break;default:clearTimeout(E),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return window}function Iu(n){Ee().location.href=n}/**
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
 */function Na(){return typeof Ee().WorkerGlobalScope<"u"&&typeof Ee().importScripts=="function"}async function Tu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eu(){return navigator?.serviceWorker?.controller||null}function Su(){return Na()?self:null}/**
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
 */const Da="firebaseLocalStorageDb",Au=1,Jn="firebaseLocalStorage",Oa="fbase_key";class ln{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function sr(n,e){return n.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function ku(){const n=indexedDB.deleteDatabase(Da);return new ln(n).toPromise()}function Qr(){const n=indexedDB.open(Da,Au);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Jn,{keyPath:Oa})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Jn)?e(i):(i.close(),await ku(),e(await Qr()))})})}async function Zs(n,e,t){const i=sr(n,!0).put({[Oa]:e,value:t});return new ln(i).toPromise()}async function xu(n,e){const t=sr(n,!1).get(e),i=await new ln(t).toPromise();return i===void 0?null:i.value}function eo(n,e){const t=sr(n,!0).delete(e);return new ln(t).toPromise()}const Cu=800,Pu=3;class La{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Pu)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Na()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(Su()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Tu(),!this.activeServiceWorker)return;this.sender=new bu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await Zs(e,Kn,"1"),await eo(e,Kn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zs(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>xu(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=sr(s,!1).getAll();return new ln(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}La.type="LOCAL";const Ru=La;new on(3e4,6e4);/**
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
 */function Ma(n,e){return e?Oe(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ei extends Ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nu(n){return uu(n.auth,new Ei(n),n.bypassAuthState)}function Du(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),hu(t,new Ei(n),n.bypassAuthState)}async function Ou(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),lu(t,new Ei(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:l,type:u}=e;if(l){this.reject(l);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nu;case"linkViaPopup":case"linkViaRedirect":return Ou;case"reauthViaPopup":case"reauthViaRedirect":return Du;default:Se(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new on(2e3,1e4);async function Mu(n,e,t){if(le(n.app))return Promise.reject(_e(n,"operation-not-supported-in-this-environment"));const i=Ct(n);Ph(n,e,Ii);const s=Ma(i,t);return new rt(i,"signInViaPopup",e,s).executeNotNull()}class rt extends Ua{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,rt.currentPopupAction&&rt.currentPopupAction.cancel(),rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=Ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(_e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lu.get())};e()}}rt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="pendingRedirect",Un=new Map;class Fu extends Ua{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const i=await ju(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ju(n,e){const t=Bu(e),i=$u(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Vu(n,e){Un.set(n._key(),e)}function $u(n){return Oe(n._redirectPersistence)}function Bu(n){return Mn(Uu,n.config.apiKey,n.name)}async function Hu(n,e,t=!1){if(le(n.app))return Promise.reject(Le(n));const i=Ct(n),s=Ma(i,e),l=await new Fu(i,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=600*1e3;class zu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Fa(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(_e(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wu&&this.cachedEventUids.clear(),this.cachedEventUids.has(to(e))}saveEventToCache(e){this.cachedEventUids.add(to(e)),this.lastProcessedEventTime=Date.now()}}function to(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fa({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Gu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fa(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ju=/^https?/;async function Xu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qu(n);for(const t of e)try{if(Yu(t))return}catch{}Se(n,"unauthorized-domain")}function Yu(n){const e=Xr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===i}if(!Ju.test(t))return!1;if(Ku.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Qu=new on(3e4,6e4);function no(){const n=Ee().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zu(n){return new Promise((e,t)=>{function i(){no(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{no(),t(_e(n,"network-request-failed"))},timeout:Qu.get()})}if(Ee().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ee().gapi?.load)i();else{const s=nu("iframefcb");return Ee()[s]=()=>{gapi.load?i():t(_e(n,"network-request-failed"))},eu(`${tu()}?onload=${s}`).catch(a=>t(a))}}).catch(e=>{throw Fn=null,e})}let Fn=null;function ed(n){return Fn=Fn||Zu(n),Fn}/**
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
 */const td=new on(5e3,15e3),nd="__/auth/iframe",rd="emulator/auth/iframe",id={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function od(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_i(e,rd):`https://${n.config.authDomain}/${nd}`,i={apiKey:e.apiKey,appName:n.name,v:kt},s=sd.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${sn(i).slice(1)}`}async function ad(n){const e=await ed(n),t=Ee().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:od(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:id,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const l=_e(n,"network-request-failed"),u=Ee().setTimeout(()=>{a(l)},td.get());function m(){Ee().clearTimeout(u),s(i)}i.ping(m).then(m,()=>{a(l)})}))}/**
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
 */const cd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ld=500,hd=600,ud="_blank",dd="http://localhost";class ro{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fd(n,e,t,i=ld,s=hd){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const m={...cd,width:i.toString(),height:s.toString(),top:a,left:l},_=ce().toLowerCase();t&&(u=ga(_)?ud:t),fa(_)&&(e=e||dd,m.scrollbars="yes");const E=Object.entries(m).reduce((S,[k,x])=>`${S}${k}=${x},`,"");if(Gh(_)&&u!=="_self")return pd(e||"",u),new ro(null);const w=window.open(e||"",u,E);O(w,n,"popup-blocked");try{w.focus()}catch{}return new ro(w)}function pd(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const gd="__/auth/handler",md="emulator/auth/handler",_d=encodeURIComponent("fac");async function io(n,e,t,i,s,a){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:kt,eventId:s};if(e instanceof Ii){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",pl(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))l[E]=w}if(e instanceof cn){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(l.scopes=E.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const E of Object.keys(u))u[E]===void 0&&delete u[E];const m=await n._getAppCheckToken(),_=m?`#${_d}=${encodeURIComponent(m)}`:"";return`${yd(n)}?${sn(u).slice(1)}${_}`}function yd({config:n}){return n.emulator?_i(n,md):`https://${n.authDomain}/${gd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="webStorageSupport";class vd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ra,this._completeRedirectFn=Hu,this._overrideRedirectResult=Vu}async _openPopup(e,t,i,s){Ue(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await io(e,t,i,Xr(),s);return fd(e,a,Ti())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await io(e,t,i,Xr(),s);return Iu(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Ue(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ad(e),i=new zu(e);return t.register("authEvent",s=>(O(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fr,{type:Fr},s=>{const a=s?.[0]?.[Fr];a!==void 0&&t(!!a),Se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wa()||pa()||wi()}}const wd=vd;var so="@firebase/auth",oo="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Td(n){ct(new Je("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;O(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ba(n)},_=new Qh(i,s,a,m);return iu(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ct(new Je("auth-internal",e=>{const t=Ct(e.getProvider("auth").getImmediate());return(i=>new bd(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Te(so,oo,Id(n)),Te(so,oo,"esm2020")}/**
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
 */const Ed=300,Sd=ea("authIdTokenMaxAge")||Ed;let ao=null;const Ad=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Sd)return;const s=t?.token;ao!==s&&(ao=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kd(n=pi()){const e=rr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ru(n,{popupRedirectResolver:wd,persistence:[Ru,vu,Ra]}),i=ea("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const l=Ad(a.toString());gu(t,l,()=>l(t.currentUser)),pu(t,u=>l(u))}}const s=Yo("auth");return s&&Ia(t,`http://${s}`),t}function xd(){return document.getElementsByTagName("head")?.[0]??document}Zh({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=_e("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",xd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Td("Browser");var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,p){function f(){}f.prototype=p.prototype,b.D=p.prototype,b.prototype=new f,b.prototype.constructor=b,b.C=function(y,v,T){for(var g=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)g[ke-2]=arguments[ke];return p.prototype[v].apply(y,g)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,p,f){f||(f=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(f++)|p.charCodeAt(f++)<<8|p.charCodeAt(f++)<<16|p.charCodeAt(f++)<<24;else for(v=0;16>v;++v)y[v]=p[f++]|p[f++]<<8|p[f++]<<16|p[f++]<<24;p=b.g[0],f=b.g[1],v=b.g[2];var T=b.g[3],g=p+(T^f&(v^T))+y[0]+3614090360&4294967295;p=f+(g<<7&4294967295|g>>>25),g=T+(v^p&(f^v))+y[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(f^T&(p^f))+y[2]+606105819&4294967295,v=T+(g<<17&4294967295|g>>>15),g=f+(p^v&(T^p))+y[3]+3250441966&4294967295,f=v+(g<<22&4294967295|g>>>10),g=p+(T^f&(v^T))+y[4]+4118548399&4294967295,p=f+(g<<7&4294967295|g>>>25),g=T+(v^p&(f^v))+y[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(f^T&(p^f))+y[6]+2821735955&4294967295,v=T+(g<<17&4294967295|g>>>15),g=f+(p^v&(T^p))+y[7]+4249261313&4294967295,f=v+(g<<22&4294967295|g>>>10),g=p+(T^f&(v^T))+y[8]+1770035416&4294967295,p=f+(g<<7&4294967295|g>>>25),g=T+(v^p&(f^v))+y[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(f^T&(p^f))+y[10]+4294925233&4294967295,v=T+(g<<17&4294967295|g>>>15),g=f+(p^v&(T^p))+y[11]+2304563134&4294967295,f=v+(g<<22&4294967295|g>>>10),g=p+(T^f&(v^T))+y[12]+1804603682&4294967295,p=f+(g<<7&4294967295|g>>>25),g=T+(v^p&(f^v))+y[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=v+(f^T&(p^f))+y[14]+2792965006&4294967295,v=T+(g<<17&4294967295|g>>>15),g=f+(p^v&(T^p))+y[15]+1236535329&4294967295,f=v+(g<<22&4294967295|g>>>10),g=p+(v^T&(f^v))+y[1]+4129170786&4294967295,p=f+(g<<5&4294967295|g>>>27),g=T+(f^v&(p^f))+y[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^f&(T^p))+y[11]+643717713&4294967295,v=T+(g<<14&4294967295|g>>>18),g=f+(T^p&(v^T))+y[0]+3921069994&4294967295,f=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(f^v))+y[5]+3593408605&4294967295,p=f+(g<<5&4294967295|g>>>27),g=T+(f^v&(p^f))+y[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^f&(T^p))+y[15]+3634488961&4294967295,v=T+(g<<14&4294967295|g>>>18),g=f+(T^p&(v^T))+y[4]+3889429448&4294967295,f=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(f^v))+y[9]+568446438&4294967295,p=f+(g<<5&4294967295|g>>>27),g=T+(f^v&(p^f))+y[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^f&(T^p))+y[3]+4107603335&4294967295,v=T+(g<<14&4294967295|g>>>18),g=f+(T^p&(v^T))+y[8]+1163531501&4294967295,f=v+(g<<20&4294967295|g>>>12),g=p+(v^T&(f^v))+y[13]+2850285829&4294967295,p=f+(g<<5&4294967295|g>>>27),g=T+(f^v&(p^f))+y[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=v+(p^f&(T^p))+y[7]+1735328473&4294967295,v=T+(g<<14&4294967295|g>>>18),g=f+(T^p&(v^T))+y[12]+2368359562&4294967295,f=v+(g<<20&4294967295|g>>>12),g=p+(f^v^T)+y[5]+4294588738&4294967295,p=f+(g<<4&4294967295|g>>>28),g=T+(p^f^v)+y[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^f)+y[11]+1839030562&4294967295,v=T+(g<<16&4294967295|g>>>16),g=f+(v^T^p)+y[14]+4259657740&4294967295,f=v+(g<<23&4294967295|g>>>9),g=p+(f^v^T)+y[1]+2763975236&4294967295,p=f+(g<<4&4294967295|g>>>28),g=T+(p^f^v)+y[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^f)+y[7]+4139469664&4294967295,v=T+(g<<16&4294967295|g>>>16),g=f+(v^T^p)+y[10]+3200236656&4294967295,f=v+(g<<23&4294967295|g>>>9),g=p+(f^v^T)+y[13]+681279174&4294967295,p=f+(g<<4&4294967295|g>>>28),g=T+(p^f^v)+y[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^f)+y[3]+3572445317&4294967295,v=T+(g<<16&4294967295|g>>>16),g=f+(v^T^p)+y[6]+76029189&4294967295,f=v+(g<<23&4294967295|g>>>9),g=p+(f^v^T)+y[9]+3654602809&4294967295,p=f+(g<<4&4294967295|g>>>28),g=T+(p^f^v)+y[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=v+(T^p^f)+y[15]+530742520&4294967295,v=T+(g<<16&4294967295|g>>>16),g=f+(v^T^p)+y[2]+3299628645&4294967295,f=v+(g<<23&4294967295|g>>>9),g=p+(v^(f|~T))+y[0]+4096336452&4294967295,p=f+(g<<6&4294967295|g>>>26),g=T+(f^(p|~v))+y[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~f))+y[14]+2878612391&4294967295,v=T+(g<<15&4294967295|g>>>17),g=f+(T^(v|~p))+y[5]+4237533241&4294967295,f=v+(g<<21&4294967295|g>>>11),g=p+(v^(f|~T))+y[12]+1700485571&4294967295,p=f+(g<<6&4294967295|g>>>26),g=T+(f^(p|~v))+y[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~f))+y[10]+4293915773&4294967295,v=T+(g<<15&4294967295|g>>>17),g=f+(T^(v|~p))+y[1]+2240044497&4294967295,f=v+(g<<21&4294967295|g>>>11),g=p+(v^(f|~T))+y[8]+1873313359&4294967295,p=f+(g<<6&4294967295|g>>>26),g=T+(f^(p|~v))+y[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~f))+y[6]+2734768916&4294967295,v=T+(g<<15&4294967295|g>>>17),g=f+(T^(v|~p))+y[13]+1309151649&4294967295,f=v+(g<<21&4294967295|g>>>11),g=p+(v^(f|~T))+y[4]+4149444226&4294967295,p=f+(g<<6&4294967295|g>>>26),g=T+(f^(p|~v))+y[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=v+(p^(T|~f))+y[2]+718787259&4294967295,v=T+(g<<15&4294967295|g>>>17),g=f+(T^(v|~p))+y[9]+3951481745&4294967295,b.g[0]=b.g[0]+p&4294967295,b.g[1]=b.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,b.g[2]=b.g[2]+v&4294967295,b.g[3]=b.g[3]+T&4294967295}i.prototype.u=function(b,p){p===void 0&&(p=b.length);for(var f=p-this.blockSize,y=this.B,v=this.h,T=0;T<p;){if(v==0)for(;T<=f;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<p;)if(y[v++]=b.charCodeAt(T++),v==this.blockSize){s(this,y),v=0;break}}else for(;T<p;)if(y[v++]=b[T++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=p},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var p=1;p<b.length-8;++p)b[p]=0;var f=8*this.o;for(p=b.length-8;p<b.length;++p)b[p]=f&255,f/=256;for(this.u(b),b=Array(16),p=f=0;4>p;++p)for(var y=0;32>y;y+=8)b[f++]=this.g[p]>>>y&255;return b};function a(b,p){var f=u;return Object.prototype.hasOwnProperty.call(f,b)?f[b]:f[b]=p(b)}function l(b,p){this.h=p;for(var f=[],y=!0,v=b.length-1;0<=v;v--){var T=b[v]|0;y&&T==p||(f[v]=T,y=!1)}this.g=f}var u={};function m(b){return-128<=b&&128>b?a(b,function(p){return new l([p|0],0>p?-1:0)}):new l([b|0],0>b?-1:0)}function _(b){if(isNaN(b)||!isFinite(b))return w;if(0>b)return R(_(-b));for(var p=[],f=1,y=0;b>=f;y++)p[y]=b/f|0,f*=4294967296;return new l(p,0)}function E(b,p){if(b.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(b.charAt(0)=="-")return R(E(b.substring(1),p));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=_(Math.pow(p,8)),y=w,v=0;v<b.length;v+=8){var T=Math.min(8,b.length-v),g=parseInt(b.substring(v,v+T),p);8>T?(T=_(Math.pow(p,T)),y=y.j(T).add(_(g))):(y=y.j(f),y=y.add(_(g)))}return y}var w=m(0),S=m(1),k=m(16777216);n=l.prototype,n.m=function(){if(P(this))return-R(this).m();for(var b=0,p=1,f=0;f<this.g.length;f++){var y=this.i(f);b+=(0<=y?y:4294967296+y)*p,p*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(P(this))return"-"+R(this).toString(b);for(var p=_(Math.pow(b,6)),f=this,y="";;){var v=z(f,p).g;f=N(f,v.j(p));var T=((0<f.g.length?f.g[0]:f.h)>>>0).toString(b);if(f=v,x(f))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var p=0;p<b.g.length;p++)if(b.g[p]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=N(this,b),P(b)?-1:x(b)?0:1};function R(b){for(var p=b.g.length,f=[],y=0;y<p;y++)f[y]=~b.g[y];return new l(f,~b.h).add(S)}n.abs=function(){return P(this)?R(this):this},n.add=function(b){for(var p=Math.max(this.g.length,b.g.length),f=[],y=0,v=0;v<=p;v++){var T=y+(this.i(v)&65535)+(b.i(v)&65535),g=(T>>>16)+(this.i(v)>>>16)+(b.i(v)>>>16);y=g>>>16,T&=65535,g&=65535,f[v]=g<<16|T}return new l(f,f[f.length-1]&-2147483648?-1:0)};function N(b,p){return b.add(R(p))}n.j=function(b){if(x(this)||x(b))return w;if(P(this))return P(b)?R(this).j(R(b)):R(R(this).j(b));if(P(b))return R(this.j(R(b)));if(0>this.l(k)&&0>b.l(k))return _(this.m()*b.m());for(var p=this.g.length+b.g.length,f=[],y=0;y<2*p;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<b.g.length;v++){var T=this.i(y)>>>16,g=this.i(y)&65535,ke=b.i(v)>>>16,Pt=b.i(v)&65535;f[2*y+2*v]+=g*Pt,D(f,2*y+2*v),f[2*y+2*v+1]+=T*Pt,D(f,2*y+2*v+1),f[2*y+2*v+1]+=g*ke,D(f,2*y+2*v+1),f[2*y+2*v+2]+=T*ke,D(f,2*y+2*v+2)}for(y=0;y<p;y++)f[y]=f[2*y+1]<<16|f[2*y];for(y=p;y<2*p;y++)f[y]=0;return new l(f,0)};function D(b,p){for(;(b[p]&65535)!=b[p];)b[p+1]+=b[p]>>>16,b[p]&=65535,p++}function $(b,p){this.g=b,this.h=p}function z(b,p){if(x(p))throw Error("division by zero");if(x(b))return new $(w,w);if(P(b))return p=z(R(b),p),new $(R(p.g),R(p.h));if(P(p))return p=z(b,R(p)),new $(R(p.g),p.h);if(30<b.g.length){if(P(b)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var f=S,y=p;0>=y.l(b);)f=ue(f),y=ue(y);var v=J(f,1),T=J(y,1);for(y=J(y,2),f=J(f,2);!x(y);){var g=T.add(y);0>=g.l(b)&&(v=v.add(f),T=g),y=J(y,1),f=J(f,1)}return p=N(b,v.j(p)),new $(v,p)}for(v=w;0<=b.l(p);){for(f=Math.max(1,Math.floor(b.m()/p.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=_(f),g=T.j(p);P(g)||0<g.l(b);)f-=y,T=_(f),g=T.j(p);x(T)&&(T=S),v=v.add(T),b=N(b,g)}return new $(v,b)}n.A=function(b){return z(this,b).h},n.and=function(b){for(var p=Math.max(this.g.length,b.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)&b.i(y);return new l(f,this.h&b.h)},n.or=function(b){for(var p=Math.max(this.g.length,b.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)|b.i(y);return new l(f,this.h|b.h)},n.xor=function(b){for(var p=Math.max(this.g.length,b.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)^b.i(y);return new l(f,this.h^b.h)};function ue(b){for(var p=b.g.length+1,f=[],y=0;y<p;y++)f[y]=b.i(y)<<1|b.i(y-1)>>>31;return new l(f,b.h)}function J(b,p){var f=p>>5;p%=32;for(var y=b.g.length-f,v=[],T=0;T<y;T++)v[T]=0<p?b.i(T+f)>>>p|b.i(T+f+1)<<32-p:b.i(T+f);return new l(v,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=E,Si=l}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});var Pn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,o,c){return r==Array.prototype||r==Object.prototype||(r[o]=c.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pn=="object"&&Pn];for(var o=0;o<r.length;++o){var c=r[o];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=t(this);function s(r,o){if(o)e:{var c=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var I=r[h];if(!(I in c))break e;c=c[I]}r=r[r.length-1],h=c[r],o=o(h),o!=h&&o!=null&&e(c,r,{configurable:!0,writable:!0,value:o})}}function a(r,o){r instanceof String&&(r+="");var c=0,h=!1,I={next:function(){if(!h&&c<r.length){var A=c++;return{value:o(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(r){return r||function(){return a(this,function(o,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function m(r){var o=typeof r;return o=o!="object"?o:r?Array.isArray(r)?"array":o:"null",o=="array"||o=="object"&&typeof r.length=="number"}function _(r){var o=typeof r;return o=="object"&&r!=null||o=="function"}function E(r,o,c){return r.call.apply(r.bind,arguments)}function w(r,o,c){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,h),r.apply(o,I)}}return function(){return r.apply(o,arguments)}}function S(r,o,c){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,S.apply(null,arguments)}function k(r,o){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function x(r,o){function c(){}c.prototype=o.prototype,r.aa=o.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(h,I,A){for(var C=Array(arguments.length-2),B=2;B<arguments.length;B++)C[B-2]=arguments[B];return o.prototype[I].apply(h,C)}}function P(r){const o=r.length;if(0<o){const c=Array(o);for(let h=0;h<o;h++)c[h]=r[h];return c}return[]}function R(r,o){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(m(h)){const I=r.length||0,A=h.length||0;r.length=I+A;for(let C=0;C<A;C++)r[I+C]=h[C]}else r.push(h)}}class N{constructor(o,c){this.i=o,this.j=c,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function D(r){return/^[\s\xa0]*$/.test(r)}function $(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function z(r){return z[" "](r),r}z[" "]=function(){};var ue=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function J(r,o,c){for(const h in r)o.call(c,r[h],h,r)}function b(r,o){for(const c in r)o.call(void 0,r[c],c,r)}function p(r){const o={};for(const c in r)o[c]=r[c];return o}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(r,o){let c,h;for(let I=1;I<arguments.length;I++){h=arguments[I];for(c in h)r[c]=h[c];for(let A=0;A<f.length;A++)c=f[A],Object.prototype.hasOwnProperty.call(h,c)&&(r[c]=h[c])}}function v(r){var o=1;r=r.split(":");const c=[];for(;0<o&&r.length;)c.push(r.shift()),o--;return r.length&&c.push(r.join(":")),c}function T(r){u.setTimeout(()=>{throw r},0)}function g(){var r=or;let o=null;return r.g&&(o=r.g,r.g=r.g.next,r.g||(r.h=null),o.next=null),o}class ke{constructor(){this.h=this.g=null}add(o,c){const h=Pt.get();h.set(o,c),this.h?this.h.next=h:this.g=h,this.h=h}}var Pt=new N(()=>new tc,r=>r.reset());class tc{constructor(){this.next=this.g=this.h=null}set(o,c){this.h=o,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Rt,Nt=!1,or=new ke,Ni=()=>{const r=u.Promise.resolve(void 0);Rt=()=>{r.then(nc)}};var nc=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(c){T(c)}var o=Pt;o.j(r),100>o.h&&(o.h++,r.next=o.g,o.g=r)}Nt=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(r,o){this.type=r,this.g=this.target=o,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var rc=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,o=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};u.addEventListener("test",c,o),u.removeEventListener("test",c,o)}catch{}return r})();function Dt(r,o){if(te.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=o,o=r.relatedTarget){if(ue){e:{try{z(o.nodeName);var I=!0;break e}catch{}I=!1}I||(o=null)}}else c=="mouseover"?o=r.fromElement:c=="mouseout"&&(o=r.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ic[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Dt.aa.h.call(this)}}x(Dt,te);var ic={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),sc=0;function oc(r,o,c,h,I){this.listener=r,this.proxy=null,this.src=o,this.type=c,this.capture=!!h,this.ha=I,this.key=++sc,this.da=this.fa=!1}function fn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function pn(r){this.src=r,this.g={},this.h=0}pn.prototype.add=function(r,o,c,h,I){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var C=cr(r,o,h,I);return-1<C?(o=r[C],c||(o.fa=!1)):(o=new oc(o,this.src,A,!!h,I),o.fa=c,r.push(o)),o};function ar(r,o){var c=o.type;if(c in r.g){var h=r.g[c],I=Array.prototype.indexOf.call(h,o,void 0),A;(A=0<=I)&&Array.prototype.splice.call(h,I,1),A&&(fn(o),r.g[c].length==0&&(delete r.g[c],r.h--))}}function cr(r,o,c,h){for(var I=0;I<r.length;++I){var A=r[I];if(!A.da&&A.listener==o&&A.capture==!!c&&A.ha==h)return I}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),hr={};function Di(r,o,c,h,I){if(Array.isArray(o)){for(var A=0;A<o.length;A++)Di(r,o[A],c,h,I);return null}return c=Mi(c),r&&r[dn]?r.K(o,c,_(h)?!!h.capture:!1,I):ac(r,o,c,!1,h,I)}function ac(r,o,c,h,I,A){if(!o)throw Error("Invalid event type");var C=_(I)?!!I.capture:!!I,B=dr(r);if(B||(r[lr]=B=new pn(r)),c=B.add(o,c,h,C,A),c.proxy)return c;if(h=cc(),c.proxy=h,h.src=r,h.listener=c,r.addEventListener)rc||(I=C),I===void 0&&(I=!1),r.addEventListener(o.toString(),h,I);else if(r.attachEvent)r.attachEvent(Li(o.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function cc(){function r(c){return o.call(r.src,r.listener,c)}const o=lc;return r}function Oi(r,o,c,h,I){if(Array.isArray(o))for(var A=0;A<o.length;A++)Oi(r,o[A],c,h,I);else h=_(h)?!!h.capture:!!h,c=Mi(c),r&&r[dn]?(r=r.i,o=String(o).toString(),o in r.g&&(A=r.g[o],c=cr(A,c,h,I),-1<c&&(fn(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete r.g[o],r.h--)))):r&&(r=dr(r))&&(o=r.g[o.toString()],r=-1,o&&(r=cr(o,c,h,I)),(c=-1<r?o[r]:null)&&ur(c))}function ur(r){if(typeof r!="number"&&r&&!r.da){var o=r.src;if(o&&o[dn])ar(o.i,r);else{var c=r.type,h=r.proxy;o.removeEventListener?o.removeEventListener(c,h,r.capture):o.detachEvent?o.detachEvent(Li(c),h):o.addListener&&o.removeListener&&o.removeListener(h),(c=dr(o))?(ar(c,r),c.h==0&&(c.src=null,o[lr]=null)):fn(r)}}}function Li(r){return r in hr?hr[r]:hr[r]="on"+r}function lc(r,o){if(r.da)r=!0;else{o=new Dt(o,this);var c=r.listener,h=r.ha||r.src;r.fa&&ur(r),r=c.call(h,o)}return r}function dr(r){return r=r[lr],r instanceof pn?r:null}var fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mi(r){return typeof r=="function"?r:(r[fr]||(r[fr]=function(o){return r.handleEvent(o)}),r[fr])}function ne(){je.call(this),this.i=new pn(this),this.M=this,this.F=null}x(ne,je),ne.prototype[dn]=!0,ne.prototype.removeEventListener=function(r,o,c,h){Oi(this,r,o,c,h)};function se(r,o){var c,h=r.F;if(h)for(c=[];h;h=h.F)c.push(h);if(r=r.M,h=o.type||o,typeof o=="string")o=new te(o,r);else if(o instanceof te)o.target=o.target||r;else{var I=o;o=new te(h,r),y(o,I)}if(I=!0,c)for(var A=c.length-1;0<=A;A--){var C=o.g=c[A];I=gn(C,h,!0,o)&&I}if(C=o.g=r,I=gn(C,h,!0,o)&&I,I=gn(C,h,!1,o)&&I,c)for(A=0;A<c.length;A++)C=o.g=c[A],I=gn(C,h,!1,o)&&I}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var r=this.i,o;for(o in r.g){for(var c=r.g[o],h=0;h<c.length;h++)fn(c[h]);delete r.g[o],r.h--}}this.F=null},ne.prototype.K=function(r,o,c,h){return this.i.add(String(r),o,!1,c,h)},ne.prototype.L=function(r,o,c,h){return this.i.add(String(r),o,!0,c,h)};function gn(r,o,c,h){if(o=r.i.g[String(o)],!o)return!0;o=o.concat();for(var I=!0,A=0;A<o.length;++A){var C=o[A];if(C&&!C.da&&C.capture==c){var B=C.listener,Q=C.ha||C.src;C.fa&&ar(r.i,C),I=B.call(Q,h)!==!1&&I}}return I&&!h.defaultPrevented}function Ui(r,o,c){if(typeof r=="function")c&&(r=S(r,c));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:u.setTimeout(r,o||0)}function Fi(r){r.g=Ui(()=>{r.g=null,r.i&&(r.i=!1,Fi(r))},r.l);const o=r.h;r.h=null,r.m.apply(null,o)}class hc extends je{constructor(o,c){super(),this.m=o,this.l=c,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Fi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(r){je.call(this),this.h=r,this.g={}}x(Ot,je);var ji=[];function Vi(r){J(r.g,function(o,c){this.g.hasOwnProperty(c)&&ur(o)},r),r.g={}}Ot.prototype.N=function(){Ot.aa.N.call(this),Vi(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=u.JSON.stringify,uc=u.JSON.parse,dc=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function gr(){}gr.prototype.h=null;function $i(r){return r.h||(r.h=r.i())}function fc(){}var Lt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mr(){te.call(this,"d")}x(mr,te);function _r(){te.call(this,"c")}x(_r,te);var dt={},Bi=null;function yr(){return Bi=Bi||new ne}dt.La="serverreachability";function Hi(r){te.call(this,dt.La,r)}x(Hi,te);function Mt(r){const o=yr();se(o,new Hi(o))}dt.STAT_EVENT="statevent";function Wi(r,o){te.call(this,dt.STAT_EVENT,r),this.stat=o}x(Wi,te);function oe(r){const o=yr();se(o,new Wi(o,r))}dt.Ma="timingevent";function zi(r,o){te.call(this,dt.Ma,r),this.size=o}x(zi,te);function Ut(r,o){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},o)}function Ft(){this.g=!0}Ft.prototype.xa=function(){this.g=!1};function pc(r,o,c,h,I,A){r.info(function(){if(r.g)if(A)for(var C="",B=A.split("&"),Q=0;Q<B.length;Q++){var j=B[Q].split("=");if(1<j.length){var re=j[0];j=j[1];var ie=re.split("_");C=2<=ie.length&&ie[1]=="type"?C+(re+"="+j+"&"):C+(re+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+h+") [attempt "+I+"]: "+o+`
`+c+`
`+C})}function gc(r,o,c,h,I,A,C){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+I+"]: "+o+`
`+c+`
`+A+" "+C})}function ft(r,o,c,h){r.info(function(){return"XMLHTTP TEXT ("+o+"): "+_c(r,c)+(h?" "+h:"")})}function mc(r,o){r.info(function(){return"TIMEOUT: "+o})}Ft.prototype.info=function(){};function _c(r,o){if(!r.g)return o;if(!o)return null;try{var c=JSON.parse(o);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var h=c[r];if(!(2>h.length)){var I=h[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return pr(c)}catch{return o}}var vr={NO_ERROR:0,TIMEOUT:8},yc={},wr;function mn(){}x(mn,gr),mn.prototype.g=function(){return new XMLHttpRequest},mn.prototype.i=function(){return{}},wr=new mn;function Ve(r,o,c,h){this.j=r,this.i=o,this.l=c,this.R=h||1,this.U=new Ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gi}function Gi(){this.i=null,this.g="",this.h=!1}var qi={},br={};function Ir(r,o,c){r.L=1,r.v=wn(xe(o)),r.m=c,r.P=!0,Ki(r,null)}function Ki(r,o){r.F=Date.now(),_n(r),r.A=xe(r.v);var c=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),cs(c.i,"t",h),r.C=0,c=r.j.J,r.h=new Gi,r.g=As(r.j,c?o:null,!r.m),0<r.O&&(r.M=new hc(S(r.Y,r,r.g),r.O)),o=r.U,c=r.g,h=r.ca;var I="readystatechange";Array.isArray(I)||(I&&(ji[0]=I.toString()),I=ji);for(var A=0;A<I.length;A++){var C=Di(c,I[A],h||o.handleEvent,!1,o.h||o);if(!C)break;o.g[C.key]=C}o=r.H?p(r.H):{},r.m?(r.u||(r.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,o)):(r.u="GET",r.g.ea(r.A,r.u,null,o)),Mt(),pc(r.i,r.u,r.A,r.l,r.R,r.m)}Ve.prototype.ca=function(r){r=r.target;const o=this.M;o&&Ce(r)==3?o.j():this.Y(r)},Ve.prototype.Y=function(r){try{if(r==this.g)e:{const ie=Ce(this.g);var o=this.g.Ba();const mt=this.g.Z();if(!(3>ie)&&(ie!=3||this.g&&(this.h.h||this.g.oa()||gs(this.g)))){this.J||ie!=4||o==7||(o==8||0>=mt?Mt(3):Mt(2)),Tr(this);var c=this.g.Z();this.X=c;t:if(Ji(this)){var h=gs(this.g);r="";var I=h.length,A=Ce(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ye(this),jt(this);var C="";break t}this.h.i=new u.TextDecoder}for(o=0;o<I;o++)this.h.h=!0,r+=this.h.i.decode(h[o],{stream:!(A&&o==I-1)});h.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=c==200,gc(this.i,this.u,this.A,this.l,this.R,ie,c),this.o){if(this.T&&!this.K){t:{if(this.g){var B,Q=this.g;if((B=Q.g?Q.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(B)){var j=B;break t}}j=null}if(c=j)ft(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Er(this,c);else{this.o=!1,this.s=3,oe(12),Ye(this),jt(this);break e}}if(this.P){c=!0;let fe;for(;!this.J&&this.C<C.length;)if(fe=vc(this,C),fe==br){ie==4&&(this.s=4,oe(14),c=!1),ft(this.i,this.l,null,"[Incomplete Response]");break}else if(fe==qi){this.s=4,oe(15),ft(this.i,this.l,C,"[Invalid Chunk]"),c=!1;break}else ft(this.i,this.l,fe,null),Er(this,fe);if(Ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||C.length!=0||this.h.h||(this.s=1,oe(16),c=!1),this.o=this.o&&c,!c)ft(this.i,this.l,C,"[Invalid Chunked Response]"),Ye(this),jt(this);else if(0<C.length&&!this.W){this.W=!0;var re=this.j;re.g==this&&re.ba&&!re.M&&(re.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Pr(re),re.M=!0,oe(11))}}else ft(this.i,this.l,C,null),Er(this,C);ie==4&&Ye(this),this.o&&!this.J&&(ie==4?Is(this.j,this):(this.o=!1,_n(this)))}else Mc(this.g),c==400&&0<C.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Ye(this),jt(this)}}}catch{}finally{}};function Ji(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function vc(r,o){var c=r.C,h=o.indexOf(`
`,c);return h==-1?br:(c=Number(o.substring(c,h)),isNaN(c)?qi:(h+=1,h+c>o.length?br:(o=o.slice(h,h+c),r.C=h+c,o)))}Ve.prototype.cancel=function(){this.J=!0,Ye(this)};function _n(r){r.S=Date.now()+r.I,Xi(r,r.I)}function Xi(r,o){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ut(S(r.ba,r),o)}function Tr(r){r.B&&(u.clearTimeout(r.B),r.B=null)}Ve.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(mc(this.i,this.A),this.L!=2&&(Mt(),oe(17)),Ye(this),this.s=2,jt(this)):Xi(this,this.S-r)};function jt(r){r.j.G==0||r.J||Is(r.j,r)}function Ye(r){Tr(r);var o=r.M;o&&typeof o.ma=="function"&&o.ma(),r.M=null,Vi(r.U),r.g&&(o=r.g,r.g=null,o.abort(),o.ma())}function Er(r,o){try{var c=r.j;if(c.G!=0&&(c.g==r||Sr(c.h,r))){if(!r.K&&Sr(c.h,r)&&c.G==3){try{var h=c.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var I=h;if(I[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)An(c),En(c);else break e;Cr(c),oe(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=Ut(S(c.Za,c),6e3));if(1>=Zi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Ze(c,11)}else if((r.K||c.g==r)&&An(c),!D(o))for(I=c.Da.g.parse(o),o=0;o<I.length;o++){let j=I[o];if(c.T=j[0],j=j[1],c.G==2)if(j[0]=="c"){c.K=j[1],c.ia=j[2];const re=j[3];re!=null&&(c.la=re,c.j.info("VER="+c.la));const ie=j[4];ie!=null&&(c.Aa=ie,c.j.info("SVER="+c.Aa));const mt=j[5];mt!=null&&typeof mt=="number"&&0<mt&&(h=1.5*mt,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const fe=r.g;if(fe){const kn=fe.g?fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kn){var A=h.h;A.g||kn.indexOf("spdy")==-1&&kn.indexOf("quic")==-1&&kn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ar(A,A.h),A.h=null))}if(h.D){const Rr=fe.g?fe.g.getResponseHeader("X-HTTP-Session-Id"):null;Rr&&(h.ya=Rr,W(h.I,h.D,Rr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var C=r;if(h.qa=Ss(h,h.J?h.ia:null,h.W),C.K){es(h.h,C);var B=C,Q=h.L;Q&&(B.I=Q),B.B&&(Tr(B),_n(B)),h.g=C}else ws(h);0<c.i.length&&Sn(c)}else j[0]!="stop"&&j[0]!="close"||Ze(c,7);else c.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Ze(c,7):xr(c):j[0]!="noop"&&c.l&&c.l.ta(j),c.v=0)}}Mt(4)}catch{}}var wc=class{constructor(r,o){this.g=r,this.map=o}};function Yi(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Zi(r){return r.h?1:r.g?r.g.size:0}function Sr(r,o){return r.h?r.h==o:r.g?r.g.has(o):!1}function Ar(r,o){r.g?r.g.add(o):r.h=o}function es(r,o){r.h&&r.h==o?r.h=null:r.g&&r.g.has(o)&&r.g.delete(o)}Yi.prototype.cancel=function(){if(this.i=ts(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ts(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let o=r.i;for(const c of r.g.values())o=o.concat(c.D);return o}return P(r.i)}function bc(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(m(r)){for(var o=[],c=r.length,h=0;h<c;h++)o.push(r[h]);return o}o=[],c=0;for(h in r)o[c++]=r[h];return o}function Ic(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(m(r)||typeof r=="string"){var o=[];r=r.length;for(var c=0;c<r;c++)o.push(c);return o}o=[],c=0;for(const h in r)o[c++]=h;return o}}}function ns(r,o){if(r.forEach&&typeof r.forEach=="function")r.forEach(o,void 0);else if(m(r)||typeof r=="string")Array.prototype.forEach.call(r,o,void 0);else for(var c=Ic(r),h=bc(r),I=h.length,A=0;A<I;A++)o.call(void 0,h[A],c&&c[A],r)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tc(r,o){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var h=r[c].indexOf("="),I=null;if(0<=h){var A=r[c].substring(0,h);I=r[c].substring(h+1)}else A=r[c];o(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Qe(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Qe){this.h=r.h,yn(this,r.j),this.o=r.o,this.g=r.g,vn(this,r.s),this.l=r.l;var o=r.i,c=new Bt;c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),is(this,c),this.m=r.m}else r&&(o=String(r).match(rs))?(this.h=!1,yn(this,o[1]||"",!0),this.o=Vt(o[2]||""),this.g=Vt(o[3]||"",!0),vn(this,o[4]),this.l=Vt(o[5]||"",!0),is(this,o[6]||"",!0),this.m=Vt(o[7]||"")):(this.h=!1,this.i=new Bt(null,this.h))}Qe.prototype.toString=function(){var r=[],o=this.j;o&&r.push($t(o,ss,!0),":");var c=this.g;return(c||o=="file")&&(r.push("//"),(o=this.o)&&r.push($t(o,ss,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push($t(c,c.charAt(0)=="/"?Ac:Sc,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",$t(c,xc)),r.join("")};function xe(r){return new Qe(r)}function yn(r,o,c){r.j=c?Vt(o,!0):o,r.j&&(r.j=r.j.replace(/:$/,""))}function vn(r,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);r.s=o}else r.s=null}function is(r,o,c){o instanceof Bt?(r.i=o,Cc(r.i,r.h)):(c||(o=$t(o,kc)),r.i=new Bt(o,r.h))}function W(r,o,c){r.i.set(o,c)}function wn(r){return W(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Vt(r,o){return r?o?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function $t(r,o,c){return typeof r=="string"?(r=encodeURI(r).replace(o,Ec),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Ec(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var ss=/[#\/\?@]/g,Sc=/[#\?:]/g,Ac=/[#\?]/g,kc=/[#\?@]/g,xc=/#/g;function Bt(r,o){this.h=this.g=null,this.i=r||null,this.j=!!o}function $e(r){r.g||(r.g=new Map,r.h=0,r.i&&Tc(r.i,function(o,c){r.add(decodeURIComponent(o.replace(/\+/g," ")),c)}))}n=Bt.prototype,n.add=function(r,o){$e(this),this.i=null,r=pt(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(o),this.h+=1,this};function os(r,o){$e(r),o=pt(r,o),r.g.has(o)&&(r.i=null,r.h-=r.g.get(o).length,r.g.delete(o))}function as(r,o){return $e(r),o=pt(r,o),r.g.has(o)}n.forEach=function(r,o){$e(this),this.g.forEach(function(c,h){c.forEach(function(I){r.call(o,I,h,this)},this)},this)},n.na=function(){$e(this);const r=Array.from(this.g.values()),o=Array.from(this.g.keys()),c=[];for(let h=0;h<o.length;h++){const I=r[h];for(let A=0;A<I.length;A++)c.push(o[h])}return c},n.V=function(r){$e(this);let o=[];if(typeof r=="string")as(this,r)&&(o=o.concat(this.g.get(pt(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)o=o.concat(r[c])}return o},n.set=function(r,o){return $e(this),this.i=null,r=pt(this,r),as(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[o]),this.h+=1,this},n.get=function(r,o){return r?(r=this.V(r),0<r.length?String(r[0]):o):o};function cs(r,o,c){os(r,o),0<c.length&&(r.i=null,r.g.set(pt(r,o),P(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],o=Array.from(this.g.keys());for(var c=0;c<o.length;c++){var h=o[c];const A=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var I=A;C[h]!==""&&(I+="="+encodeURIComponent(String(C[h]))),r.push(I)}}return this.i=r.join("&")};function pt(r,o){return o=String(o),r.j&&(o=o.toLowerCase()),o}function Cc(r,o){o&&!r.j&&($e(r),r.i=null,r.g.forEach(function(c,h){var I=h.toLowerCase();h!=I&&(os(this,h),cs(this,I,c))},r)),r.j=o}function Pc(r,o){const c=new Ft;if(u.Image){const h=new Image;h.onload=k(Be,c,"TestLoadImage: loaded",!0,o,h),h.onerror=k(Be,c,"TestLoadImage: error",!1,o,h),h.onabort=k(Be,c,"TestLoadImage: abort",!1,o,h),h.ontimeout=k(Be,c,"TestLoadImage: timeout",!1,o,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else o(!1)}function Rc(r,o){const c=new Ft,h=new AbortController,I=setTimeout(()=>{h.abort(),Be(c,"TestPingServer: timeout",!1,o)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(I),A.ok?Be(c,"TestPingServer: ok",!0,o):Be(c,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(I),Be(c,"TestPingServer: error",!1,o)})}function Be(r,o,c,h,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),h(c)}catch{}}function Nc(){this.g=new dc}function Dc(r,o,c){const h=c||"";try{ns(r,function(I,A){let C=I;_(I)&&(C=pr(I)),o.push(h+A+"="+encodeURIComponent(C))})}catch(I){throw o.push(h+"type="+encodeURIComponent("_badmap")),I}}function bn(r){this.l=r.Ub||null,this.j=r.eb||!1}x(bn,gr),bn.prototype.g=function(){return new In(this.l,this.j)},bn.prototype.i=(function(r){return function(){return r}})({});function In(r,o){ne.call(this),this.D=r,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(In,ne),n=In.prototype,n.open=function(r,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=o,this.readyState=1,Wt(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(o.body=r),(this.D||u).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ht(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Wt(this)),this.g&&(this.readyState=3,Wt(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ls(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function ls(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var o=r.value?r.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!r.done}))&&(this.response=this.responseText+=o)}r.done?Ht(this):Wt(this),this.readyState==3&&ls(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Ht(this))},n.Qa=function(r){this.g&&(this.response=r,Ht(this))},n.ga=function(){this.g&&Ht(this)};function Ht(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Wt(r)}n.setRequestHeader=function(r,o){this.u.append(r,o)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],o=this.h.entries();for(var c=o.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=o.next();return r.join(`\r
`)};function Wt(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(In.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function hs(r){let o="";return J(r,function(c,h){o+=h,o+=":",o+=c,o+=`\r
`}),o}function kr(r,o,c){e:{for(h in c){var h=!1;break e}h=!0}h||(c=hs(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):W(r,o,c))}function G(r){ne.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(G,ne);var Oc=/^https?$/i,Lc=["POST","PUT"];n=G.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,o,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);o=o?o.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?$i(this.o):$i(wr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(r),!0),this.B=!1}catch(A){us(this,A);return}if(r=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var I in h)c.set(I,h[I]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())c.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),I=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Lc,o,void 0))||h||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of c)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){us(this,A)}};function us(r,o){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=o,r.m=5,ds(r),Tn(r)}function ds(r){r.A||(r.A=!0,se(r,"complete"),se(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,se(this,"complete"),se(this,"abort"),Tn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tn(this,!0)),G.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fs(this):this.bb())},n.bb=function(){fs(this)};function fs(r){if(r.h&&typeof l<"u"&&(!r.v[1]||Ce(r)!=4||r.Z()!=2)){if(r.u&&Ce(r)==4)Ui(r.Ea,0,r);else if(se(r,"readystatechange"),Ce(r)==4){r.h=!1;try{const C=r.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var c;if(!(c=o)){var h;if(h=C===0){var I=String(r.D).match(rs)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),h=!Oc.test(I?I.toLowerCase():"")}c=h}if(c)se(r,"complete"),se(r,"success");else{r.m=6;try{var A=2<Ce(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",ds(r)}}finally{Tn(r)}}}}function Tn(r,o){if(r.g){ps(r);const c=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,o||se(r,"ready");try{c.onreadystatechange=h}catch{}}}function ps(r){r.I&&(u.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Ce(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Ce(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var o=this.g.responseText;return r&&o.indexOf(r)==0&&(o=o.substring(r.length)),uc(o)}};function gs(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Mc(r){const o={};r=(r.g&&2<=Ce(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(D(r[h]))continue;var c=v(r[h]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=o[I]||[];o[I]=A,A.push(c)}b(o,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zt(r,o,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||o}function ms(r){this.Aa=0,this.i=[],this.j=new Ft,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zt("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zt("baseRetryDelayMs",5e3,r),this.cb=zt("retryDelaySeedMs",1e4,r),this.Wa=zt("forwardChannelMaxRetries",2,r),this.wa=zt("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(r&&r.concurrentRequestLimit),this.Da=new Nc,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ms.prototype,n.la=8,n.G=1,n.connect=function(r,o,c,h){oe(0),this.W=r,this.H=o||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=Ss(this,null,this.W),Sn(this)};function xr(r){if(_s(r),r.G==3){var o=r.U++,c=xe(r.I);if(W(c,"SID",r.K),W(c,"RID",o),W(c,"TYPE","terminate"),Gt(r,c),o=new Ve(r,r.j,o),o.L=2,o.v=wn(xe(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(o.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=o.v,c=!0),c||(o.g=As(o.j,null),o.g.ea(o.v)),o.F=Date.now(),_n(o)}Es(r)}function En(r){r.g&&(Pr(r),r.g.cancel(),r.g=null)}function _s(r){En(r),r.u&&(u.clearTimeout(r.u),r.u=null),An(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function Sn(r){if(!Qi(r.h)&&!r.s){r.s=!0;var o=r.Ga;Rt||Ni(),Nt||(Rt(),Nt=!0),or.add(o,r),r.B=0}}function Uc(r,o){return Zi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=o.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ut(S(r.Ga,r,o),Ts(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const I=new Ve(this,this.j,r);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)e:{for(var o=0,c=0;c<this.i.length;c++){t:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=c;break e}if(o===4096||c===this.i.length-1){o=c+1;break e}}o=1e3}else o=1e3;o=vs(this,I,o),c=xe(this.I),W(c,"RID",r),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),Gt(this,c),A&&(this.O?o="headers="+encodeURIComponent(String(hs(A)))+"&"+o:this.m&&kr(c,this.m,A)),Ar(this.h,I),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",o),W(c,"SID","null"),I.T=!0,Ir(I,c,null)):Ir(I,c,o),this.G=2}}else this.G==3&&(r?ys(this,r):this.i.length==0||Qi(this.h)||ys(this))};function ys(r,o){var c;o?c=o.l:c=r.U++;const h=xe(r.I);W(h,"SID",r.K),W(h,"RID",c),W(h,"AID",r.T),Gt(r,h),r.m&&r.o&&kr(h,r.m,r.o),c=new Ve(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),o&&(r.i=o.D.concat(r.i)),o=vs(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Ar(r.h,c),Ir(c,h,o)}function Gt(r,o){r.H&&J(r.H,function(c,h){W(o,h,c)}),r.l&&ns({},function(c,h){W(o,h,c)})}function vs(r,o,c){c=Math.min(r.i.length,c);var h=r.l?S(r.l.Na,r.l,r):null;e:{var I=r.i;let A=-1;for(;;){const C=["count="+c];A==-1?0<c?(A=I[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let B=!0;for(let Q=0;Q<c;Q++){let j=I[Q].g;const re=I[Q].map;if(j-=A,0>j)A=Math.max(0,I[Q].g-100),B=!1;else try{Dc(re,C,"req"+j+"_")}catch{h&&h(re)}}if(B){h=C.join("&");break e}}}return r=r.i.splice(0,c),o.D=r,h}function ws(r){if(!r.g&&!r.u){r.Y=1;var o=r.Fa;Rt||Ni(),Nt||(Rt(),Nt=!0),or.add(o,r),r.v=0}}function Cr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ut(S(r.Fa,r),Ts(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,bs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ut(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),En(this),bs(this))};function Pr(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function bs(r){r.g=new Ve(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var o=xe(r.qa);W(o,"RID","rpc"),W(o,"SID",r.K),W(o,"AID",r.T),W(o,"CI",r.F?"0":"1"),!r.F&&r.ja&&W(o,"TO",r.ja),W(o,"TYPE","xmlhttp"),Gt(r,o),r.m&&r.o&&kr(o,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=wn(xe(o)),c.m=null,c.P=!0,Ki(c,r)}n.Za=function(){this.C!=null&&(this.C=null,En(this),Cr(this),oe(19))};function An(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function Is(r,o){var c=null;if(r.g==o){An(r),Pr(r),r.g=null;var h=2}else if(Sr(r.h,o))c=o.D,es(r.h,o),h=1;else return;if(r.G!=0){if(o.o)if(h==1){c=o.m?o.m.length:0,o=Date.now()-o.F;var I=r.B;h=yr(),se(h,new zi(h,c)),Sn(r)}else ws(r);else if(I=o.s,I==3||I==0&&0<o.X||!(h==1&&Uc(r,o)||h==2&&Cr(r)))switch(c&&0<c.length&&(o=r.h,o.i=o.i.concat(c)),I){case 1:Ze(r,5);break;case 4:Ze(r,10);break;case 3:Ze(r,6);break;default:Ze(r,2)}}}function Ts(r,o){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*o}function Ze(r,o){if(r.j.info("Error code "+o),o==2){var c=S(r.fb,r),h=r.Xa;const I=!h;h=new Qe(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||yn(h,"https"),wn(h),I?Pc(h.toString(),c):Rc(h.toString(),c)}else oe(2);r.G=0,r.l&&r.l.sa(o),Es(r),_s(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function Es(r){if(r.G=0,r.ka=[],r.l){const o=ts(r.h);(o.length!=0||r.i.length!=0)&&(R(r.ka,o),R(r.ka,r.i),r.h.i.length=0,P(r.i),r.i.length=0),r.l.ra()}}function Ss(r,o,c){var h=c instanceof Qe?xe(c):new Qe(c);if(h.g!="")o&&(h.g=o+"."+h.g),vn(h,h.s);else{var I=u.location;h=I.protocol,o=o?o+"."+I.hostname:I.hostname,I=+I.port;var A=new Qe(null);h&&yn(A,h),o&&(A.g=o),I&&vn(A,I),c&&(A.l=c),h=A}return c=r.D,o=r.ya,c&&o&&W(h,c,o),W(h,"VER",r.la),Gt(r,h),h}function As(r,o,c){if(o&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=r.Ca&&!r.pa?new G(new bn({eb:c})):new G(r.pa),o.Ha(r.J),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ks(){}n=ks.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function de(r,o){ne.call(this),this.g=new ms(o),this.l=r,this.h=o&&o.messageUrlParams||null,r=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(r?r["X-WebChannel-Content-Type"]=o.messageContentType:r={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(r?r["X-WebChannel-Client-Profile"]=o.va:r={"X-WebChannel-Client-Profile":o.va}),this.g.S=r,(r=o&&o.Sb)&&!D(r)&&(this.g.m=r),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!D(o)&&(this.g.D=o,r=this.h,r!==null&&o in r&&(r=this.h,o in r&&delete r[o])),this.j=new gt(this)}x(de,ne),de.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},de.prototype.close=function(){xr(this.g)},de.prototype.o=function(r){var o=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=pr(r),r=c);o.i.push(new wc(o.Ya++,r)),o.G==3&&Sn(o)},de.prototype.N=function(){this.g.l=null,delete this.j,xr(this.g),delete this.g,de.aa.N.call(this)};function xs(r){mr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var o=r.__sm__;if(o){e:{for(const c in o){r=c;break e}r=void 0}(this.i=r)&&(r=this.i,o=o!==null&&r in o?o[r]:void 0),this.data=o}else this.data=r}x(xs,mr);function Cs(){_r.call(this),this.status=1}x(Cs,_r);function gt(r){this.g=r}x(gt,ks),gt.prototype.ua=function(){se(this.g,"a")},gt.prototype.ta=function(r){se(this.g,new xs(r))},gt.prototype.sa=function(r){se(this.g,new Cs)},gt.prototype.ra=function(){se(this.g,"b")},de.prototype.send=de.prototype.o,de.prototype.open=de.prototype.m,de.prototype.close=de.prototype.close,vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,yc.COMPLETE="complete",fc.EventType=Lt,Lt.OPEN="a",Lt.CLOSE="b",Lt.ERROR="c",Lt.MESSAGE="d",ne.prototype.listen=ne.prototype.K,G.prototype.listenOnce=G.prototype.L,G.prototype.getLastError=G.prototype.Ka,G.prototype.getLastErrorCode=G.prototype.Ba,G.prototype.getStatus=G.prototype.Z,G.prototype.getResponseJson=G.prototype.Oa,G.prototype.getResponseText=G.prototype.oa,G.prototype.send=G.prototype.ea,G.prototype.setWithCredentials=G.prototype.Ha}).apply(typeof Pn<"u"?Pn:typeof self<"u"?self:typeof window<"u"?window:{});const lo="@firebase/firestore",ho="4.9.1";/**
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
 */class ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");/**
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
 */const St=new di("@firebase/firestore");function me(n,...e){if(St.logLevel<=V.DEBUG){const t=e.map(Ai);St.debug(`Firestore (${hn}): ${n}`,...t)}}function ja(n,...e){if(St.logLevel<=V.ERROR){const t=e.map(Ai);St.error(`Firestore (${hn}): ${n}`,...t)}}function Cd(n,...e){if(St.logLevel<=V.WARN){const t=e.map(Ai);St.warn(`Firestore (${hn}): ${n}`,...t)}}function Ai(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function tn(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Va(n,i,t)}function Va(n,e,t){let i=`FIRESTORE (${hn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw ja(i),new Error(i)}function Jt(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Va(e,s,i)}/**
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
 */const U={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class F extends Ae{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class $a{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ae.UNAUTHENTICATED)))}shutdown(){}}class Rd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Nd{constructor(e){this.t=e,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Jt(this.o===void 0,42304);let i=this.i;const s=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let a=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Xt,e.enqueueRetryable((()=>s(this.currentUser)))};const l=()=>{const m=a;e.enqueueRetryable((async()=>{await m.promise,await s(this.currentUser)}))},u=m=>{me("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((m=>u(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?u(m):(me("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Xt)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(me("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Jt(typeof i.accessToken=="string",31837,{l:i}),new $a(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Jt(e===null||typeof e=="string",2055,{h:e}),new ae(e)}}class Dd{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Od{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Dd(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class uo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ld{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Jt(this.o===void 0,3512);const i=a=>{a.error!=null&&me("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,me("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>i(a)))};const s=a=>{me("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):me("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new uo(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Jt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ud{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Md(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<t&&(i+=e.charAt(s[a]%62))}return i}}function Xe(n,e){return n<e?-1:n>e?1:0}function Fd(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),a=e.charAt(i);if(s!==a)return jr(s)===jr(a)?Xe(s,a):jr(s)?1:-1}return Xe(n.length,e.length)}const jd=55296,Vd=57343;function jr(n){const e=n.charCodeAt(0);return e>=jd&&e<=Vd}/**
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
 */const fo="__name__";class we{constructor(e,t,i){t===void 0?t=0:t>e.length&&tn(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&tn(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return we.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof we?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const a=we.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Xe(e.length,t.length)}static compareSegments(e,t){const i=we.isNumericId(e),s=we.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?we.extractNumericId(e).compare(we.extractNumericId(t)):Fd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class pe extends we{construct(e,t,i){return new pe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new F(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new pe(t)}static emptyPath(){return new pe([])}}const $d=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends we{construct(e,t,i){return new nt(e,t,i)}static isValidIdentifier(e){return $d.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fo}static keyField(){return new nt([fo])}static fromServerFormat(e){const t=[];let i="",s=0;const a=()=>{if(i.length===0)throw new F(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let l=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new F(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new F(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(i+=u,s++):(a(),s++)}if(a(),l)throw new F(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(t)}static emptyPath(){return new nt([])}}/**
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
 */class it{constructor(e){this.path=e}static fromPath(e){return new it(pe.fromString(e))}static fromName(e){return new it(pe.fromString(e).popFirst(5))}static empty(){return new it(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new it(new pe(e.slice()))}}function Bd(n,e,t,i){if(e===!0&&i===!0)throw new F(U.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":tn(12329,{type:typeof n})}function zd(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wd(n);throw new F(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Y(n,e){const t={typeString:n};return e&&(t.value=e),t}function un(n,e){if(!Hd(n))throw new F(U.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const l=n[i];if(s&&typeof l!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${i}' field to equal '${a.value}'`;break}}if(t)throw new F(U.INVALID_ARGUMENT,t);return!0}/**
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
 */const po=-62135596800,go=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*go);return new be(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<po)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/go}_compareTo(e){return this.seconds===e.seconds?Xe(this.nanoseconds,e.nanoseconds):Xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(un(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-po;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Y("string",be._jsonSchemaVersion),seconds:Y("number"),nanoseconds:Y("number")};function Gd(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new qd("Invalid base64 string: "+a):a}})(e);return new ht(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a})(e);return new ht(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Zr="(default)";class Xn{constructor(e,t){this.projectId=e,this.database=t||Zr}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var mo,M;(M=mo||(mo={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Qd{constructor(e,t,i=1e3,s=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&me("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class ki{constructor(e,t,i,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,a){const l=Date.now()+i,u=new ki(e,t,l,s,a);return u.start(i),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var _o,yo;(yo=_o||(_o={})).Ma="default",yo.Cache="cache";/**
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
 */const Ba="firestore.googleapis.com",wo=!0;class bo{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ba,this.ssl=wo}else this.host=e.host,this.ssl=e.ssl??wo;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yd)throw new F(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zd(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ha{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bo(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Pd;switch(i.type){case"firstParty":return new Od(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new F(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=vo.get(t);i&&(me("ComponentProvider","Removing Datastore"),vo.delete(t),i.terminate())})(this),Promise.resolve()}}function Wa(n,e,t,i={}){n=zd(n,Ha);const s=ut(e),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(hi(`https://${u}`),ui("Firestore",!0)),a.host!==Ba&&a.host!==u&&Cd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...a,host:u,ssl:s,emulatorOptions:i};if(!at(m,l)&&(n._setSettings(m),i.mockUserToken)){let _,E;if(typeof i.mockUserToken=="string")_=i.mockUserToken,E=ae.MOCK_USER;else{_=tl(i.mockUserToken,n._app?.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new F(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new ae(w)}n._authCredentials=new Rd(new $a(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class Ie{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(un(t,Ie._jsonSchema))return new Ie(e,i||null,new it(pe.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:Y("string",Ie._jsonSchemaVersion),referencePath:Y("string")};class Ci extends xi{constructor(e,t,i){super(e,t,Jd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new it(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="AsyncQueue";class To{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qd(this,"async_queue_retry"),this._c=()=>{const i=Vr();i&&me(Io,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Vr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Xt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Gd(e))throw e;me(Io,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,ja("INTERNAL UNHANDLED ERROR: ",Eo(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ki.createAndSchedule(this,e,t,i,(a=>this.hc(a)));return this.tc.push(s),s}uc(){this.nc&&tn(47125,{Pc:Eo(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Eo(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ef extends Ha{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new To,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new To(e),this._firestoreClient=void 0,await e}}}function tf(n,e){const t=typeof n=="object"?n:pi(),i=typeof n=="string"?n:Zr,s=rr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=Qo("firestore");a&&Wa(s,...a)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Re(ht.fromBase64String(e))}catch(t){throw new F(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Re(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Re._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(un(e,Re._jsonSchema))return Re.fromBase64String(e.bytes)}}Re._jsonSchemaVersion="firestore/bytes/1.0",Re._jsonSchema={type:Y("string",Re._jsonSchemaVersion),bytes:Y("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class st{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Xe(this._lat,e._lat)||Xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:st._jsonSchemaVersion}}static fromJSON(e){if(un(e,st._jsonSchema))return new st(e.latitude,e.longitude)}}st._jsonSchemaVersion="firestore/geoPoint/1.0",st._jsonSchema={type:Y("string",st._jsonSchemaVersion),latitude:Y("number"),longitude:Y("number")};/**
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
 */class ot{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(un(e,ot._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ot(e.vectorValues);throw new F(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ot._jsonSchemaVersion="firestore/vectorValue/1.0",ot._jsonSchema={type:Y("string",ot._jsonSchemaVersion),vectorValues:Y("object")};const nf=new RegExp("[~\\*/\\[\\]]");function rf(n,e,t){if(e.search(nf)>=0)throw So(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new za(...e.split("."))._internalPath}catch{throw So(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function So(n,e,t,i,s){let a=`Function ${e}() called with invalid data`;a+=". ";let l="";return new F(U.INVALID_ARGUMENT,a+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,i,s,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sf extends Ga{data(){return super.data()}}function qa(n,e){return typeof e=="string"?rf(n,e):e instanceof za?e._internalPath:e._delegate._internalPath}class Rn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bt extends Ga{constructor(e,t,i,s,a,l){super(e,t,i,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(qa("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bt._jsonSchemaVersion="firestore/documentSnapshot/1.0",bt._jsonSchema={type:Y("string",bt._jsonSchemaVersion),bundleSource:Y("string","DocumentSnapshot"),bundleName:Y("string"),bundle:Y("string")};class jn extends bt{data(e={}){return super.data(e)}}class Yt{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rn(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new jn(this._firestore,this._userDataWriter,i.key,i,new Rn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map((u=>{const m=new jn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Rn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:m,oldIndex:-1,newIndex:l++}}))}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>a||u.type!==3)).map((u=>{const m=new jn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Rn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let _=-1,E=-1;return u.type!==0&&(_=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),E=l.indexOf(u.doc.key)),{type:of(u.type),doc:m,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ud.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function of(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tn(61501,{type:n})}}Yt._jsonSchemaVersion="firestore/querySnapshot/1.0",Yt._jsonSchema={type:Y("string",Yt._jsonSchemaVersion),bundleSource:Y("string","QuerySnapshot"),bundleName:Y("string"),bundle:Y("string")};(function(e,t=!0){(function(s){hn=s})(kt),ct(new Je("firestore",((i,{instanceIdentifier:s,options:a})=>{const l=i.getProvider("app").getImmediate(),u=new ef(new Nd(i.getProvider("auth-internal")),new Ld(l,i.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new F(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(_.options.projectId,E)})(l,s),l);return a={useFetchStreams:t,...a},u._setSettings(a),u}),"PUBLIC").setMultipleInstances(!0)),Te(lo,ho,e),Te(lo,ho,"esm2020")})();/**
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
 */const af="type.googleapis.com/google.protobuf.Int64Value",cf="type.googleapis.com/google.protobuf.UInt64Value";function Ka(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Yn(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Yn(e));if(typeof n=="function"||typeof n=="object")return Ka(n,e=>Yn(e));throw new Error("Data cannot be encoded in JSON: "+n)}function At(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case af:case cf:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>At(e)):typeof n=="function"||typeof n=="object"?Ka(n,e=>At(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="functions";/**
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
 */const Ao={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ae{constructor(e,t,i){super(`${Pi}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,he.prototype)}}function lf(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Qn(n,e){let t=lf(n),i=t,s;try{const a=e&&e.error;if(a){const l=a.status;if(typeof l=="string"){if(!Ao[l])return new he("internal","internal");t=Ao[l],i=l}const u=a.message;typeof u=="string"&&(i=u),s=a.details,s!==void 0&&(s=At(s))}}catch{}return t==="ok"?null:new he(t,i,s)}/**
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
 */class hf{constructor(e,t,i,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,le(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||i.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s?.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
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
 */const ei="us-central1",uf=/^data: (.*?)(?:\n|$)/;function df(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new he("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class ff{constructor(e,t,i,s,a=ei,l=(...u)=>fetch(...u)){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new hf(e,t,i,s),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(a);this.customDomain=u.origin+(u.pathname==="/"?"":u.pathname),this.region=ei}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function pf(n,e,t){const i=ut(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(hi(n.emulatorOrigin+"/backends"),ui("Functions",!0))}function gf(n,e,t){const i=s=>_f(n,e,s,{});return i.stream=(s,a)=>vf(n,e,s,a),i}function Ja(n){return n.emulatorOrigin&&ut(n.emulatorOrigin)?"include":void 0}async function mf(n,e,t,i,s){t["Content-Type"]="application/json";let a;try{a=await i(n,{method:"POST",body:JSON.stringify(e),headers:t,credentials:Ja(s)})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}async function Xa(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function _f(n,e,t,i){const s=n._url(e);return yf(n,s,t,i)}async function yf(n,e,t,i){t=Yn(t);const s={data:t},a=await Xa(n,i),l=i.timeout||7e4,u=df(l),m=await Promise.race([mf(e,s,a,n.fetchImpl,n),u.promise,n.cancelAllRequests]);if(u.cancel(),!m)throw new he("cancelled","Firebase Functions instance was deleted.");const _=Qn(m.status,m.json);if(_)throw _;if(!m.json)throw new he("internal","Response is not valid JSON object.");let E=m.json.data;if(typeof E>"u"&&(E=m.json.result),typeof E>"u")throw new he("internal","Response is missing data field.");return{data:At(E)}}function vf(n,e,t,i){const s=n._url(e);return wf(n,s,t,i||{})}async function wf(n,e,t,i){t=Yn(t);const s={data:t},a=await Xa(n,i);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:a,signal:i?.signal,credentials:Ja(n)})}catch(S){if(S instanceof Error&&S.name==="AbortError"){const x=new he("cancelled","Request was cancelled.");return{data:Promise.reject(x),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(x)}}}}}}const k=Qn(0,null);return{data:Promise.reject(k),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(k)}}}}}}let u,m;const _=new Promise((S,k)=>{u=S,m=k});i?.signal?.addEventListener("abort",()=>{const S=new he("cancelled","Request was cancelled.");m(S)});const E=l.body.getReader(),w=bf(E,u,m,i?.signal);return{stream:{[Symbol.asyncIterator](){const S=w.getReader();return{async next(){const{value:k,done:x}=await S.read();return{value:k,done:x}},async return(){return await S.cancel(),{done:!0,value:void 0}}}}},data:_}}function bf(n,e,t,i){const s=(l,u)=>{const m=l.match(uf);if(!m)return;const _=m[1];try{const E=JSON.parse(_);if("result"in E){e(At(E.result));return}if("message"in E){u.enqueue(At(E.message));return}if("error"in E){const w=Qn(0,E);u.error(w),t(w);return}}catch(E){if(E instanceof he){u.error(E),t(E);return}}},a=new TextDecoder;return new ReadableStream({start(l){let u="";return m();async function m(){if(i?.aborted){const _=new he("cancelled","Request was cancelled");return l.error(_),t(_),Promise.resolve()}try{const{value:_,done:E}=await n.read();if(E){u.trim()&&s(u.trim(),l),l.close();return}if(i?.aborted){const S=new he("cancelled","Request was cancelled");l.error(S),t(S),await n.cancel();return}u+=a.decode(_,{stream:!0});const w=u.split(`
`);u=w.pop()||"";for(const S of w)S.trim()&&s(S.trim(),l);return m()}catch(_){const E=_ instanceof he?_:Qn(0,null);l.error(E),t(E)}}},cancel(){return n.cancel()}})}const ko="@firebase/functions",xo="0.13.1";/**
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
 */const If="auth-internal",Tf="app-check-internal",Ef="messaging-internal";function Sf(n){const e=(t,{instanceIdentifier:i})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider(If),l=t.getProvider(Ef),u=t.getProvider(Tf);return new ff(s,a,l,u,i)};ct(new Je(Pi,e,"PUBLIC").setMultipleInstances(!0)),Te(ko,xo,n),Te(ko,xo,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n=pi(),e=ei){const i=rr(ve(n),Pi).getImmediate({identifier:e}),s=Qo("functions");return s&&Ya(i,...s),i}function Ya(n,e,t){pf(ve(n),e,t)}function Z(n,e,t){return gf(ve(n),e)}Sf();const Ri=typeof __firebase_config<"u";let It,ti=null;Ri?(It=JSON.parse(__firebase_config),ti=typeof __initial_auth_token<"u"?__initial_auth_token:null):It={apiKey:"AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",authDomain:"my-new-firebase-project-94e22.firebaseapp.com",projectId:"my-new-firebase-project-94e22",storageBucket:"my-new-firebase-project-94e22.firebasestorage.app",messagingSenderId:"210118924526",appId:"1:210118924526:web:c88671740e8b13e1e7fbff"};let Nn=null,Tt=null,ni=null,Zn=null;It&&It.apiKey?(Nn=ra(It),Tt=kd(Nn),ni=tf(Nn),Zn=Af(Nn),Ri&&(async()=>{try{ti?(await fu(Tt,ti),console.log("Firebase: Signed in with custom token.")):(await Sa(Tt),console.warn("Firebase: Signed in anonymously (no custom token)."))}catch(e){console.error("Firebase Authentication Failed:",e)}})()):console.error("Firebase initialization failed: Configuration (apiKey) is missing.");const _t=Tt,kf=new Pe,ee=Zn;if(location.hostname==="localhost"&&!Ri&&Tt&&ni&&Zn){const n=It.apiKey==="demo-api-key";Wa(ni,"localhost",8080),Ya(Zn,"localhost",5001),n&&Ia(Tt,"http://localhost:9099")}var er,q,$r,Co,ri=0,Qa=[],X=H,Po=X.__b,Ro=X.__r,No=X.diffed,Do=X.__c,Oo=X.unmount,Lo=X.__;function Za(n,e){X.__h&&X.__h(q,n,ri||e),ri=0;var t=q.__H||(q.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function L(n){return ri=1,xf(ec,n)}function xf(n,e,t){var i=Za(er++,2);if(i.t=n,!i.__c&&(i.__=[ec(void 0,e),function(u){var m=i.__N?i.__N[0]:i.__[0],_=i.t(m,u);m!==_&&(i.__N=[_,i.__[1]],i.__c.setState({}))}],i.__c=q,!q.__f)){var s=function(u,m,_){if(!i.__c.__H)return!0;var E=i.__c.__H.__.filter(function(S){return!!S.__c});if(E.every(function(S){return!S.__N}))return!a||a.call(this,u,m,_);var w=i.__c.props!==u;return E.forEach(function(S){if(S.__N){var k=S.__[0];S.__=S.__N,S.__N=void 0,k!==S.__[0]&&(w=!0)}}),a&&a.call(this,u,m,_)||w};q.__f=!0;var a=q.shouldComponentUpdate,l=q.componentWillUpdate;q.componentWillUpdate=function(u,m,_){if(this.__e){var E=a;a=void 0,s(u,m,_),a=E}l&&l.call(this,u,m,_)},q.shouldComponentUpdate=s}return i.__N||i.__}function ye(n,e){var t=Za(er++,3);!X.__s&&Rf(t.__H,e)&&(t.__=n,t.u=e,q.__H.__h.push(t))}function Cf(){for(var n;n=Qa.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Vn),n.__H.__h.forEach(ii),n.__H.__h=[]}catch(e){n.__H.__h=[],X.__e(e,n.__v)}}X.__b=function(n){q=null,Po&&Po(n)},X.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Lo&&Lo(n,e)},X.__r=function(n){Ro&&Ro(n),er=0;var e=(q=n.__c).__H;e&&($r===q?(e.__h=[],q.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(Vn),e.__h.forEach(ii),e.__h=[],er=0)),$r=q},X.diffed=function(n){No&&No(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Qa.push(e)!==1&&Co===X.requestAnimationFrame||((Co=X.requestAnimationFrame)||Pf)(Cf)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),$r=q=null},X.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Vn),t.__h=t.__h.filter(function(i){return!i.__||ii(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],X.__e(i,t.__v)}}),Do&&Do(n,e)},X.unmount=function(n){Oo&&Oo(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{Vn(i)}catch(s){e=s}}),t.__H=void 0,e&&X.__e(e,t.__v))};var Mo=typeof requestAnimationFrame=="function";function Pf(n){var e,t=function(){clearTimeout(i),Mo&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);Mo&&(e=requestAnimationFrame(t))}function Vn(n){var e=q,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),q=e}function ii(n){var e=q;n.__c=n.__(),q=e}function Rf(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function ec(n,e){return typeof e=="function"?e(n):e}function Nf(){const[n,e]=L(null),[t,i]=L(null);ye(()=>{const u=ka(_t,e);return()=>u()},[]);async function s(){i(null);try{await Mu(_t,kf)}catch(u){if(console.error("Login failed:",u),u.code==="auth/unauthorized-domain"){const m=window.location.hostname==="0.0.0.0";i({type:"unauthorized-domain",message:"Login failed: Domain not authorized.",details:m?"Firebase does not allow OAuth on 0.0.0.0. Please use localhost.":`Add "${window.location.hostname}" to Authorized Domains in Firebase Console.`})}else i({message:u.message})}}async function a(){i(null);try{await Sa(_t)}catch(u){console.error("Guest login failed:",u),i({message:"Guest login failed. Ensure Anonymous Auth is enabled in Firebase Console."})}}async function l(){await mu(_t)}return n?d("div",{class:"flex flex-col items-center justify-center h-screen space-y-4 bg-gray-900 text-white",children:[n.photoURL&&d("img",{src:n.photoURL,alt:"Profile",class:"rounded-full w-20 h-20 border-4 border-indigo-500 shadow-lg"}),d("p",{class:"text-xl font-semibold",children:["Hello, ",n.displayName||n.email,"!"]}),d("button",{onClick:l,class:"bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors shadow-md",children:"Sign Out"})]}):d("div",{class:"flex flex-col items-center justify-center h-screen bg-gray-900 text-white space-y-6",children:[d("header",{class:"text-center mb-8",children:[d("h1",{class:"text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2",children:"Procrastinot"}),d("p",{class:"text-xl text-gray-400",children:"Beat procrastination together."})]}),d("div",{class:"bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 w-full max-w-md",children:[d("h2",{class:"text-2xl font-bold mb-6 text-center",children:"Sign In"}),d("button",{onClick:s,class:"w-full bg-white text-gray-900 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3 shadow-md",children:[d("svg",{class:"w-5 h-5",viewBox:"0 0 24 24",children:[d("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),d("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),d("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),d("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),d("span",{children:"Sign in with Google"})]}),d("button",{onClick:a,class:"w-full bg-gray-700 text-white font-semibold px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-3 shadow-md mt-4",children:[d("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),d("span",{children:"Continue as Guest"})]}),t&&d("div",{class:"mt-6 p-4 bg-red-900/30 text-red-200 rounded-lg text-center border border-red-500/50",children:[d("p",{class:"font-bold",children:t.message}),d("p",{class:"text-sm mt-1 text-red-300",children:t.details||t.message}),t.type==="unauthorized-domain"&&window.location.hostname==="0.0.0.0"&&d("button",{onClick:()=>{const u=new URL(window.location.href);u.hostname="localhost",window.location.href=u.toString()},class:"mt-3 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 shadow-sm transition-colors",children:"Switch to localhost"})]})]})]})}const Df=Z(ee,"getRooms"),Of=Z(ee,"createRoom"),Lf=Z(ee,"joinRoom"),Mf=Z(ee,"startSession"),Uf=Z(ee,"joinSession"),Ff=Z(ee,"getSessionDetails"),jf=Z(ee,"endSession"),Vf=Z(ee,"getSessions"),$f=Z(ee,"getFriends"),Bf=Z(ee,"addFriend"),Hf=Z(ee,"getSuggestedFriends"),Wf=Z(ee,"createTask"),zf=Z(ee,"getTasks"),Gf=Z(ee,"updateTask"),qf=Z(ee,"sendNudge"),Kf=Z(ee,"syncUser"),Jf=Z(ee,"getUserProfile"),K={syncUser:async()=>{await Kf()},getUserProfile:async()=>(await Jf()).data,createTask:async(n,e)=>(await Wf({title:n,roomId:e})).data,getTasks:async(n,e=!1)=>(await zf({roomId:n,includeAllUsers:e})).data,updateTask:async(n,e)=>(await Gf({taskId:n,completed:e})).data,sendNudge:async n=>(await qf({friendId:n})).data,getRooms:async()=>(await Df()).data,createRoom:async n=>(await Of(n)).data,joinRoom:async n=>(await Lf({inviteCode:n})).data,startSession:async(n,e)=>(await Mf({roomId:n,mode:e})).data,joinSession:async n=>(await Uf({sessionId:n})).data,getSessionDetails:async n=>(await Ff({sessionId:n})).data,endSession:async n=>(await jf({sessionId:n})).data,getSessions:async n=>(await Vf({roomId:n})).data,getFriends:async n=>{const e=await $f();return Array.isArray(e.data)?e.data:[]},addFriend:async({friendCode:n,username:e,targetUserId:t})=>(await Bf({friendCode:n,username:e,targetUserId:t})).data,getSuggestedFriends:async()=>{const n=await Hf();return Array.isArray(n.data)?n.data:[]},getFriendActivity:async n=>(console.warn("MOCK: getFriendActivity using placeholder data."),{completedSessions:5,nudgesReceived:2})};function Xf({onRoomCreated:n}){console.log("CreateRoom component rendering");const[e,t]=L(""),[i,s]=L(""),[a,l]=L(!1);async function u(m){if(m.preventDefault(),!!e.trim())try{const _=await K.createRoom({name:e,description:i});typeof n=="function"&&n(_),t(""),s(""),l(!1)}catch(_){console.error("Failed to create room:",_.message)}}return a?d("div",{class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:d("div",{class:"bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md border border-gray-700",children:[d("h3",{class:"text-xl font-bold text-white mb-4",children:"Create New Room"}),d("form",{onSubmit:u,class:"flex flex-col space-y-4",children:[d("div",{children:[d("label",{class:"block text-gray-400 text-sm mb-1",children:"Room Name"}),d("input",{type:"text",value:e,onInput:m=>t(m.target.value),placeholder:"e.g. Study Group A",class:"w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500",required:!0})]}),d("div",{children:[d("label",{class:"block text-gray-400 text-sm mb-1",children:"Requirements / Description"}),d("textarea",{value:i,onInput:m=>s(m.target.value),placeholder:"e.g. Must have camera on, 25/5 pomodoro...",class:"w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white h-24 focus:outline-none focus:border-green-500"})]}),d("div",{class:"flex justify-end space-x-3 mt-2",children:[d("button",{type:"button",onClick:()=>l(!1),class:"px-4 py-2 text-gray-300 hover:text-white",children:"Cancel"}),d("button",{type:"submit",class:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",children:"Create Room"})]})]})]})}):d("button",{onClick:()=>l(!0),class:"bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition",children:"+ Create Room"})}function Yf({onRoomJoined:n}){console.log("JoinRoom component rendering");const[e,t]=L("");async function i(s){if(s.preventDefault(),!!e.trim())try{const a=await K.joinRoom(e);n(a),t("")}catch(a){console.error("Failed to join room:",a.message)}}return d("form",{onSubmit:i,class:"flex items-center space-x-2",children:[d("input",{type:"text",value:e,onInput:s=>t(s.target.value),placeholder:"Enter invite code",class:"border px-2 py-1 rounded"}),d("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700",children:"Join"})]})}function Qf({roomId:n,onSessionStarted:e}){console.log("StartSession component rendering");const[t,i]=L("pomodoro");async function s(){try{const a=await K.startSession(n,t);e(a)}catch(a){console.error("Failed to start session:",a.message)}}return d("div",{class:"flex items-center space-x-2",children:[d("select",{value:t,onChange:a=>i(a.target.value),class:"border px-2 py-1 rounded",children:[d("option",{value:"pomodoro",children:"Pomodoro (25 min)"}),d("option",{value:"short_break",children:"Short Break (5 min)"}),d("option",{value:"long_break",children:"Long Break (15 min)"})]}),d("button",{onClick:s,class:"bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700",children:"Start Session"})]})}function Zf({roomId:n,sessionId:e,userId:t}){const[i,s]=L(""),[a,l]=L(!1),[u,m]=L(null);async function _(E){if(E.preventDefault(),!!i.trim()){l(!0),m(null);try{await K.trackProgress(n,e,t,{task:i}),s("")}catch(w){m(w.message)}finally{l(!1)}}}return d("form",{onSubmit:_,class:"mt-4",children:[d("h4",{class:"font-semibold mb-2",children:"Track Your Progress"}),d("div",{class:"flex items-center space-x-2",children:[d("input",{type:"text",value:i,onInput:E=>s(E.target.value),placeholder:"Enter a completed task",class:"border px-2 py-1 rounded w-full",disabled:a}),d("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400",disabled:a,children:a?"Submitting...":"Submit"})]}),u&&d("p",{class:"text-red-500 mt-2",children:["Error: ",u]})]})}function ep({room:n,user:e,onJoinSession:t}){const[i,s]=L(null);if(ye(()=>{let l;const u=()=>{K.getSessions(n.id).then(m=>{const _=Date.now(),E=m.find(w=>{const S=w.startTime+w.durationMinutes*60*1e3;return!w.endTime&&_<S});s(E||null)}).catch(console.error)};return n&&(u(),l=setInterval(u,1e4)),()=>{l&&clearInterval(l)}},[n]),!n)return d("div",{children:"Select a room to see details."});const a=i?i.id:"s_placeholder_123";return d("div",{class:"p-4 border rounded-lg shadow-sm",children:[d("div",{class:"flex justify-between items-start mb-4",children:[d("div",{children:[d("h3",{class:"text-xl font-bold mb-2",children:n.name}),d("p",{class:"text-gray-300",children:[d("strong",{children:"Mode:"})," ",n.mode||"Standard"]})]}),i&&d("button",{onClick:async()=>{await K.joinSession(i.id),t(i)},class:"bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded animate-pulse",children:"Join Active Session"})]}),d("div",{class:"mb-4 text-gray-300",children:d("div",{class:"p-3 bg-indigo-900 bg-opacity-30 border border-indigo-700 rounded-lg",children:[d("p",{class:"text-sm text-indigo-300 mb-1 font-bold uppercase tracking-wider",children:"Room Join Code"}),d("div",{class:"flex items-center space-x-2",children:[d("span",{class:"text-2xl font-mono font-bold text-white tracking-widest select-all",children:n.inviteCode}),d("button",{class:"text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded",onClick:()=>navigator.clipboard.writeText(n.inviteCode),children:"Copy"})]}),d("p",{class:"text-xs text-gray-400 mt-1",children:"Share this code with friends to let them join."})]})}),d("div",{class:"mb-6",children:[d("h4",{class:"font-bold text-gray-300 mb-1",children:"Requirements:"}),d("p",{class:"text-gray-400 italic bg-gray-900 p-3 rounded border border-gray-700",children:n.description||"No specific requirements set."})]}),d(Zf,{roomId:n.id,sessionId:a,userId:e.uid})]})}function tp({roomId:n,includeAllUsers:e=!1}){const[t,i]=L([]),[s,a]=L(""),[l,u]=L(!0),[m,_]=L(!1),[E,w]=L(null);ye(()=>{S();const P=setInterval(S,5e3);return()=>clearInterval(P)},[n,e]);async function S(){t.length===0&&u(!0);try{const P=await K.getTasks(n,e);i(P),w(null)}catch(P){console.error("Failed to load tasks:",P),w("Failed to load tasks")}finally{u(!1)}}async function k(P){if(P.preventDefault(),!!s.trim()){_(!0);try{const R=await K.createTask(s,n);i([R,...t]),a("")}catch(R){console.error("Failed to add task:",R),w("Failed to add task")}finally{_(!1)}}}async function x(P,R){i(t.map(N=>N.id===P?{...N,completed:R}:N));try{await K.updateTask(P,R)}catch(N){console.error("Failed to update task:",N),w("Failed to update task"),i(t.map(D=>D.id===P?{...D,completed:!R}:D))}}return d("div",{class:"bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 w-full max-w-md mt-8",children:[d("h3",{class:"text-xl font-bold text-white mb-4 flex items-center",children:[d("span",{class:"mr-2",children:"📝"})," Session Tasks"]}),d("form",{onSubmit:k,class:"flex gap-2 mb-4",children:[d("input",{type:"text",value:s,onInput:P=>a(P.target.value),placeholder:"Add a task for this session...",class:"flex-1 bg-gray-900 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 transition-colors",disabled:m}),d("button",{type:"submit",class:"bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50",disabled:m||!s.trim(),children:m?"...":"Add"})]}),E&&d("div",{class:"text-red-400 text-sm mb-4 bg-red-900/20 p-2 rounded border border-red-500/20",children:E}),l?d("div",{class:"flex justify-center py-4",children:d("div",{class:"animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"})}):t.length===0?d("p",{class:"text-gray-400 text-center py-4 italic",children:"No tasks yet. Set a goal!"}):d("ul",{class:"space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar",children:t.map(P=>d("li",{class:"flex flex-col group bg-gray-900/50 p-3 rounded-lg border border-transparent hover:border-gray-600 transition-colors",children:[e&&P.user&&d("div",{class:"flex items-center mb-2 text-xs text-gray-400",children:[P.user.avatarUrl?d("img",{src:P.user.avatarUrl,class:"w-4 h-4 rounded-full mr-2"}):d("div",{class:"w-4 h-4 rounded-full bg-gray-600 mr-2"}),d("span",{children:P.user.displayName})]}),d("label",{class:"flex items-center cursor-pointer w-full",children:[d("div",{class:"relative flex items-center",children:[d("input",{type:"checkbox",checked:P.completed,onChange:R=>x(P.id,R.target.checked),disabled:e&&!P.userId,class:"peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-500 bg-gray-900 transition-all checked:border-green-500 checked:bg-green-500 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"}),d("svg",{class:"pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d("path",{d:"M3.5 6L5 7.5L8.5 4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})]}),d("span",{class:`ml-3 text-sm transition-all duration-200 ${P.completed?"text-gray-500 line-through":"text-gray-200"}`,children:P.title})]})]},P.id))})]})}function np({session:n,room:e,user:t,onEndSession:i}){const[s,a]=L(0),[l,u]=L(!0),[m,_]=L([]);ye(()=>{const k=()=>{const N=n.startTime+n.durationMinutes*60*1e3,D=Math.max(0,Math.floor((N-Date.now())/1e3));a(D),D===0&&u(!1)};k();const x=setInterval(k,1e3),P=async()=>{try{const N=await K.getSessionDetails(n.id);_(N.participants||[]),N.session.endTime&&(alert("The session has been ended by the host."),i())}catch(N){console.error("Failed to fetch session details",N)}};P();const R=setInterval(P,5e3);return()=>{clearInterval(x),clearInterval(R)}},[n]);const E=async()=>{if(window.confirm("Are you sure you want to end the session for everyone?"))try{await K.endSession(n.id),i()}catch(k){console.error("Failed to end session:",k),alert("Failed to end session: "+k.message)}},w=t&&n.userId===t.uid,S=k=>{const x=Math.floor(k/60),P=k%60;return`${x.toString().padStart(2,"0")}:${P.toString().padStart(2,"0")}`};return d("div",{class:"fixed inset-0 bg-gray-900 text-white z-50 flex flex-col items-center justify-center p-8",children:d("div",{class:"max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700",children:[d("div",{class:"text-center mb-10",children:[d("h1",{class:"text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",children:e.name}),d("p",{class:"text-xl text-gray-300 max-w-2xl mx-auto",children:e.description||"No specific requirements for this room. Stay focused!"})]}),d("div",{class:"flex flex-col items-center justify-center mb-12",children:[d("div",{class:"text-9xl font-mono font-bold tracking-wider mb-4 text-white drop-shadow-lg",children:S(s)}),d("div",{class:"text-2xl text-purple-300 uppercase tracking-widest font-semibold mb-6",children:n.mode.replace("_"," ")}),d("div",{class:"flex space-x-4 mb-4",children:m.map(k=>d("div",{class:"flex flex-col items-center",children:[k.avatarUrl?d("img",{src:k.avatarUrl,alt:k.displayName,class:"w-10 h-10 rounded-full border-2 border-purple-500"}):d("div",{class:"w-10 h-10 rounded-full bg-gray-600 border-2 border-purple-500 flex items-center justify-center text-xs font-bold",children:k.displayName[0]}),d("span",{class:"text-xs text-gray-400 mt-1",children:k.displayName})]},k.userId))})]}),d("div",{class:"flex justify-center space-x-6",children:w?d("button",{onClick:E,class:"bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"End Session"}):d("button",{onClick:i,class:"bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"Leave Session"})}),d("div",{class:"flex justify-center mt-8 w-full",children:d(tp,{roomId:e.id,includeAllUsers:!0})})]})})}function rp({user:n}){const[e,t]=L([]),[i,s]=L(null),[a,l]=L(null),[u,m]=L(null),_=()=>{K.getRooms().then(x=>{Array.isArray(x)?t(x):console.error("API did not return an array for rooms:",x)}).catch(console.error)};ye(()=>{_()},[]);const E=x=>{const P=e.findIndex(R=>R.id===x.id);if(P>-1){const R=[...e];R[P]=x,t(R)}else t([...e,x])},w=x=>{console.log("Session started:",x);const P=e.find(R=>R.id===x.roomId);m(P),l(x)},S=()=>{l(null),m(null)},k=e.find(x=>x.id===i);return a&&u?d(np,{session:a,room:u,user:n,onEndSession:S}):d("div",{class:"container mx-auto p-6",children:[d("div",{class:"flex flex-col md:flex-row justify-between items-center mb-8",children:[d("h2",{class:"text-3xl font-bold text-white mb-4 md:mb-0",children:"Focus Rooms"}),d("div",{class:"flex space-x-4",children:[d(Xf,{onRoomCreated:E}),d(Yf,{onRoomJoined:E})]})]}),d("div",{class:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[d("div",{class:"lg:col-span-1",children:[d("h3",{class:"text-xl font-semibold text-gray-300 mb-4 px-2",children:"Your Rooms"}),d("ul",{class:"space-y-3",children:[e.map(x=>d("li",{class:`p-4 border border-gray-700 rounded-xl flex justify-between items-center cursor-pointer transition-all duration-200 ${i===x.id?"bg-gray-700 border-indigo-500 shadow-md transform scale-105":"bg-gray-800 hover:bg-gray-750 hover:border-gray-600"}`,onClick:()=>s(x.id),children:[d("div",{class:"flex-grow",children:[d("span",{class:"font-medium text-lg text-white block",children:x.name}),d("span",{class:"text-xs text-gray-400 mr-2",children:["Code: ",d("span",{class:"font-mono text-indigo-400",children:x.inviteCode})]})]}),d(Qf,{roomId:x.id,onSessionStarted:w})]},x.id)),e.length===0&&d("div",{class:"text-gray-500 text-center py-8 bg-gray-800 rounded-xl border border-gray-700 border-dashed",children:"No rooms yet. Join or create one!"})]})]}),d("div",{class:"lg:col-span-2",children:k?d("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden min-h-[500px]",children:[d("div",{class:"p-6 border-b border-gray-700 bg-gray-850",children:[d("h3",{class:"text-2xl font-bold text-white",children:k.name}),d("p",{class:"text-gray-400 text-sm mt-1",children:"Room Details & Activity"})]}),d("div",{class:"p-6",children:d(ep,{room:k,user:n,onJoinSession:w})})]}):d("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-lg flex items-center justify-center min-h-[500px] text-gray-400",children:d("div",{class:"text-center",children:[d("span",{class:"text-6xl block mb-4",children:"👈"}),d("p",{class:"text-xl",children:"Select a room to view details"})]})})})]})]})}function ip({activePage:n,setActivePage:e}){return d("nav",{class:"bg-gray-900 text-white shadow-md border-b border-gray-800 sticky top-0 z-50",children:d("div",{class:"container mx-auto px-4",children:d("div",{class:"flex items-center justify-between h-16",children:[d("div",{class:"flex items-center",children:d("span",{class:"font-bold text-xl tracking-tight cursor-pointer hover:text-indigo-400 transition-colors",onClick:()=>e("dashboard"),children:"Procrastinot"})}),d("div",{class:"flex space-x-1",children:[{id:"dashboard",label:"Home"},{id:"rooms",label:"Rooms"},{id:"friends",label:"Friends"},{id:"accountability",label:"Accountability"},{id:"profile",label:"Profile"}].map(i=>d("a",{href:"#",class:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${n===i.id?"bg-gray-800 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"}`,onClick:s=>{s.preventDefault(),e(i.id)},children:i.label},i.id))})]})})})}function sp({user:n}){const[e,t]=L([]),[i,s]=L(!0),[a,l]=L(null),[u,m]=L(!1),[_,E]=L("name"),[w,S]=L(""),[k,x]=L(null),[P,R]=L(""),[N,D]=L([]),[$,z]=L(!1),ue=()=>{n&&(s(!0),K.getFriends(n.uid).then(f=>{t(Array.isArray(f)?f:[]),l(null)}).catch(f=>{l(f.message),t([])}).finally(()=>s(!1)))},J=()=>{z(!0),K.getSuggestedFriends().then(f=>{D(Array.isArray(f)?f:[])}).catch(f=>console.error("Failed to fetch suggestions:",f)).finally(()=>z(!1))};ye(()=>{ue()},[n]),ye(()=>{u&&J()},[u]);const b=async f=>{if(f.preventDefault(),!!w.trim()){x("adding"),R("");try{const y=_==="code"?{friendCode:w}:{username:w};await K.addFriend(y),x("success"),R("Friend added successfully!"),S(""),ue(),J()}catch(y){x("error"),R(y.message||"Failed to add friend")}}},p=async f=>{x("adding"),R("");try{await K.addFriend({targetUserId:f.id}),x("success"),R(`Added ${f.name} as friend!`),ue(),J()}catch(y){x("error"),R(y.message||"Failed to add friend")}};return d("div",{class:"container mx-auto p-6 max-w-4xl relative",children:[d("header",{class:"mb-8 flex items-center justify-between",children:[d("div",{children:[d("h2",{class:"text-3xl font-bold text-white",children:"Focus Friends"}),d("p",{class:"text-gray-400 mt-1",children:"See who is online and working."})]}),d("button",{onClick:()=>m(!0),class:"bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm flex items-center",children:d("span",{children:"+ Add Friend"})})]}),i&&d("div",{class:"flex justify-center items-center py-12",children:d("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"})}),a&&d("div",{class:"bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6",children:["Error: ",a]}),!i&&!a&&d("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden",children:e.length===0?d("div",{class:"text-center py-12 px-6",children:[d("div",{class:"text-6xl mb-4",children:"👋"}),d("h3",{class:"text-xl font-medium text-white mb-2",children:"No friends yet"}),d("p",{class:"text-gray-400",children:"Invite friends to see their status here."})]}):d("ul",{class:"divide-y divide-gray-700",children:e.map(f=>d("li",{class:"p-4 hover:bg-gray-750 transition-colors duration-150 flex justify-between items-center",children:[d("div",{class:"flex items-center space-x-4",children:[d("div",{class:"h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm",children:f.name.substring(0,2).toUpperCase()}),d("div",{children:[d("span",{class:"font-medium text-white block",children:f.name}),d("span",{class:"text-xs text-gray-400",children:f.status==="in-session"?"Working now":"Last active recently"})]})]}),d("span",{class:`px-3 py-1 text-xs font-semibold rounded-full border ${f.status==="in-session"?"bg-emerald-900/30 text-emerald-400 border-emerald-500/30":"bg-gray-700 text-gray-400 border-gray-600"}`,children:f.status==="in-session"?"⚡ In Focus":"💤 Offline"})]},f.id))})}),u&&d("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",children:d("div",{class:"bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]",children:[d("div",{class:"p-4 border-b border-gray-700 flex justify-between items-center",children:[d("h3",{class:"text-xl font-bold text-white",children:"Add Friend"}),d("button",{onClick:()=>m(!1),class:"text-gray-400 hover:text-white",children:"✕"})]}),d("div",{class:"p-6 overflow-y-auto",children:[d("div",{class:"flex space-x-4 mb-6",children:[d("button",{onClick:()=>{E("name"),x(null),R("")},class:`flex-1 py-2 rounded-lg font-medium transition-colors ${_==="name"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"By Name"}),d("button",{onClick:()=>{E("code"),x(null),R("")},class:`flex-1 py-2 rounded-lg font-medium transition-colors ${_==="code"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"By Code"})]}),d("form",{onSubmit:b,class:"mb-8",children:[d("div",{class:"mb-4",children:[d("label",{class:"block text-gray-400 text-sm font-bold mb-2",children:_==="name"?"Friend's Username":"Friend Code"}),d("input",{type:"text",class:"w-full bg-gray-900 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-indigo-500",placeholder:_==="name"?"Enter username...":"Enter 6-character code...",value:w,onInput:f=>S(f.target.value)})]}),P&&d("div",{class:`mb-4 text-sm ${k==="success"?"text-green-400":"text-red-400"}`,children:P}),d("button",{type:"submit",disabled:k==="adding",class:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors",children:k==="adding"?"Adding...":"Add Friend"})]}),d("div",{children:[d("h4",{class:"text-sm font-bold text-gray-400 uppercase tracking-wider mb-4",children:"Suggested Friends"}),$?d("div",{class:"flex justify-center py-4",children:d("div",{class:"animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500"})}):N.length>0?d("ul",{class:"space-y-3",children:N.map(f=>d("li",{class:"bg-gray-700/50 rounded-lg p-3 flex items-center justify-between",children:[d("div",{class:"flex items-center space-x-3",children:[d("div",{class:"h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white",children:f.name.substring(0,2).toUpperCase()}),d("div",{children:[d("span",{class:"text-white text-sm font-medium block",children:f.name}),d("span",{class:"text-gray-400 text-xs",children:"Shared Room"})]})]}),d("button",{onClick:()=>p(f),class:"text-indigo-400 hover:text-indigo-300 text-sm font-medium",children:"Add"})]},f.id))}):d("p",{class:"text-gray-500 text-center py-2 text-sm",children:"No suggestions available."})]})]})]})})]})}function op({friend:n,onNudge:e}){const[t,i]=L(null),[s,a]=L(!0);return ye(()=>{K.getFriendActivity(n.id).then(l=>{i(l),a(!1)})},[n.id]),d("div",{class:"bg-gray-800 border border-gray-700 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200",children:[d("div",{class:"flex justify-between items-start mb-4",children:[d("div",{class:"flex items-center space-x-3",children:[d("div",{class:"h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-200 font-bold border border-indigo-500/30",children:n.name.substring(0,2).toUpperCase()}),d("div",{children:[d("h3",{class:"font-bold text-white text-lg",children:n.name}),d("p",{class:"text-xs text-gray-400",children:"Level 5 Focus Master"})]})]}),d("div",{class:"bg-amber-900/30 text-amber-500 px-2 py-1 rounded text-xs font-mono border border-amber-500/20",children:"🔥 3 Day Streak"})]}),s?d("div",{class:"animate-pulse space-y-3",children:[d("div",{class:"h-4 bg-gray-700 rounded w-3/4"}),d("div",{class:"h-4 bg-gray-700 rounded w-1/2"})]}):d("div",{class:"mt-2",children:[d("div",{class:"grid grid-cols-2 gap-4 mb-4",children:[d("div",{class:"bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700",children:[d("span",{class:"block text-2xl font-bold text-white",children:t.completedSessions}),d("span",{class:"text-xs text-gray-400 uppercase tracking-wider",children:"Sessions"})]}),d("div",{class:"bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700",children:[d("span",{class:"block text-2xl font-bold text-white",children:t.nudgesReceived}),d("span",{class:"text-xs text-gray-400 uppercase tracking-wider",children:"Nudges"})]})]}),d("button",{onClick:()=>e(n),class:"w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm flex justify-center items-center group",children:[d("span",{class:"mr-2 group-hover:scale-110 transition-transform",children:"👋"})," Send a Nudge"]})]})]})}function ap({user:n}){const[e,t]=L([]),[i,s]=L(!0),[a,l]=L(null),[u,m]=L(null);ye(()=>{n&&(s(!0),K.getFriends(n.uid).then(E=>{Array.isArray(E)?t(E):t([]),l(null)}).catch(E=>{l(E.message),t([])}).finally(()=>s(!1)))},[n]);const _=async E=>{try{await K.sendNudge(E.id),m({friendName:E.name,message:`You nudged ${E.name}! They'll get a notification.`}),setTimeout(()=>m(null),3e3)}catch(w){console.error(w)}};return d("div",{class:"container mx-auto p-6 max-w-5xl relative",children:[u&&d("div",{class:"fixed top-24 right-6 z-50 animate-bounce-in",children:d("div",{class:"bg-gray-800 border-l-4 border-amber-500 text-white p-4 rounded shadow-2xl flex items-center space-x-3 pr-8",children:[d("div",{class:"text-2xl",children:"👋"}),d("div",{children:[d("h4",{class:"font-bold",children:"Nudge Sent!"}),d("p",{class:"text-sm text-gray-300",children:["You nudged ",u.friendName]})]}),d("button",{onClick:()=>m(null),class:"absolute top-2 right-2 text-gray-400 hover:text-white",children:"×"})]})}),d("header",{class:"mb-8",children:[d("h2",{class:"text-3xl font-bold text-white",children:"Peer Progress"}),d("p",{class:"text-gray-400 mt-1",children:"Keep each other accountable and celebrate wins."})]}),i&&d("div",{class:"flex justify-center items-center py-12",children:d("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"})}),a&&d("div",{class:"bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6",children:["Error: ",a]}),!i&&!a&&d(nn,{children:e.length===0?d("div",{class:"text-center py-12 px-6 bg-gray-800 rounded-xl border border-gray-700",children:[d("div",{class:"text-6xl mb-4",children:"🌱"}),d("h3",{class:"text-xl font-medium text-white mb-2",children:"No accountability partners yet"}),d("p",{class:"text-gray-400 mb-6",children:"Add friends to start tracking progress together."}),d("button",{class:"bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors",children:"Find Friends"})]}):d("div",{class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(E=>d(op,{friend:E,onNudge:_},E.id))})})]})}function cp({user:n}){const[e,t]=L(null),[i,s]=L(!0);if(ye(()=>{async function _(){if(n){const E=await K.getUserProfile();t(E)}s(!1)}_()},[n]),i)return d("div",{class:"flex items-center justify-center h-full text-gray-400",children:"Loading profile..."});const a=e?.displayName||n?.displayName||"User",l=e?.email||n?.email||"No email provided",u=e?.friendCode||"Unavailable",m=e?.avatarUrl||n?.photoURL||"https://via.placeholder.com/150";return d("div",{class:"container mx-auto px-4 py-8",children:d("div",{class:"max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700",children:[d("div",{class:"bg-gray-900 px-6 py-4 border-b border-gray-700",children:d("h2",{class:"text-2xl font-bold text-white",children:"My Profile"})}),d("div",{class:"p-6",children:[d("div",{class:"flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6",children:[d("div",{class:"flex-shrink-0",children:d("img",{src:m,alt:"Profile",class:"h-24 w-24 rounded-full border-2 border-indigo-500 shadow-sm object-cover"})}),d("div",{class:"flex-grow text-center md:text-left",children:[d("h3",{class:"text-xl font-semibold text-white",children:a}),d("p",{class:"text-gray-400 text-sm mt-1",children:l}),d("div",{class:"mt-4 flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4",children:d("div",{class:"bg-indigo-900/50 px-4 py-2 rounded-lg border border-indigo-500/30",children:[d("span",{class:"block text-xs text-indigo-300 uppercase font-bold tracking-wider",children:"Friend Code"}),d("span",{class:"block text-lg font-mono text-white tracking-widest",children:u})]})})]})]}),d("div",{class:"mt-8 border-t border-gray-700 pt-6",children:[d("h4",{class:"text-lg font-medium text-gray-200 mb-4",children:"Account Stats"}),d("div",{class:"grid grid-cols-2 gap-4",children:[d("div",{class:"bg-gray-700/50 p-4 rounded-lg",children:[d("span",{class:"block text-gray-400 text-sm",children:"Member Since"}),d("span",{class:"block text-white font-medium",children:e?.createdAt?new Date(e.createdAt).toLocaleDateString():"Unknown"})]}),d("div",{class:"bg-gray-700/50 p-4 rounded-lg",children:[d("span",{class:"block text-gray-400 text-sm",children:"Status"}),d("span",{class:"block text-green-400 font-medium",children:"Active"})]})]})]})]})]})})}function lp({setActivePage:n}){return d("div",{class:"container mx-auto p-6",children:[d("header",{class:"mb-10 text-center",children:[d("h1",{class:"text-4xl font-extrabold text-white mb-2",children:"Welcome Back!"}),d("p",{class:"text-gray-400 text-lg",children:"Choose where you want to go today."})]}),d("div",{class:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{id:"rooms",title:"Rooms",description:"Join or create focus rooms to work together.",color:"bg-indigo-500",icon:"🏠"},{id:"friends",title:"Friends",description:"See what your friends are up to and connect.",color:"bg-emerald-500",icon:"👥"},{id:"accountability",title:"Accountability",description:"Track progress and nudge your accountability partners.",color:"bg-amber-500",icon:"🔥"}].map(t=>d("div",{onClick:()=>n(t.id),class:"bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700",children:[d("div",{class:`${t.color} p-4 flex justify-center items-center h-24`,children:d("span",{class:"text-5xl",children:t.icon})}),d("div",{class:"p-6",children:[d("h2",{class:"text-2xl font-bold text-white mb-2",children:t.title}),d("p",{class:"text-gray-300",children:t.description}),d("div",{class:"mt-4 flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300",children:["Launch ",t.title," ",d("span",{class:"ml-2",children:"→"})]})]})]},t.id))})]})}function hp(){const[n,e]=L(null),[t,i]=L(!0),[s,a]=L("dashboard");return ye(()=>{if(!_t)return console.error("Firebase Auth instance is null. Skipping authentication listeners."),i(!1),()=>{};const l=ka(_t,u=>{e(u),u&&K.syncUser(),i(!1)});return()=>l()},[]),t?d("div",{class:"min-h-screen flex items-center justify-center bg-gray-900 text-white",children:"Loading..."}):d("main",{class:"min-h-screen bg-gray-900 text-gray-100 font-sans",children:n?d("div",{class:"flex flex-col min-h-screen",children:[d(ip,{activePage:s,setActivePage:a}),d("div",{class:"flex-grow",children:[s==="dashboard"&&d(lp,{setActivePage:a}),s==="rooms"&&d(rp,{user:n}),s==="friends"&&d(sp,{user:n}),s==="accountability"&&d(ap,{user:n}),s==="profile"&&d(cp,{user:n})]})]}):d(Nf,{})})}Wc(d(hp,{}),document.getElementById("app"));
