(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Qn,$,Uo,Qe,Rs,Fo,Vo,jo,si,Br,Hr,Xt={},$o=[],Uc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Zn=Array.isArray;function Ce(n,e){for(var t in e)n[t]=e[t];return n}function oi(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Fc(n,e,t){var i,s,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?s=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?Qn.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)l[a]===void 0&&(l[a]=n.defaultProps[a]);return Rn(n,l,i,s,null)}function Rn(n,e,t,i,s){var a={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Uo,__i:-1,__u:0};return s==null&&$.vnode!=null&&$.vnode(a),a}function er(n){return n.children}function Nn(n,e){this.props=n,this.context=e}function wt(n,e){if(e==null)return n.__?wt(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?wt(n):null}function Bo(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Bo(n)}}function Ns(n){(!n.__d&&(n.__d=!0)&&Qe.push(n)&&!Fn.__r++||Rs!=$.debounceRendering)&&((Rs=$.debounceRendering)||Fo)(Fn)}function Fn(){for(var n,e,t,i,s,a,l,u=1;Qe.length;)Qe.length>u&&Qe.sort(Vo),n=Qe.shift(),u=Qe.length,n.__d&&(t=void 0,s=(i=(e=n).__v).__e,a=[],l=[],e.__P&&((t=Ce({},i)).__v=i.__v+1,$.vnode&&$.vnode(t),ai(e.__P,t,i,e.__n,e.__P.namespaceURI,32&i.__u?[s]:null,a,s??wt(i),!!(32&i.__u),l),t.__v=i.__v,t.__.__k[t.__i]=t,zo(a,t,l),t.__e!=s&&Bo(t)));Fn.__r=0}function Ho(n,e,t,i,s,a,l,u,_,g,b){var E,S,C,P,L,N,O,D=i&&i.__k||$o,B=e.length;for(_=Vc(t,e,D,_,B),E=0;E<B;E++)(C=t.__k[E])!=null&&(S=C.__i==-1?Xt:D[C.__i]||Xt,C.__i=E,N=ai(n,C,S,s,a,l,u,_,g,b),P=C.__e,C.ref&&S.ref!=C.ref&&(S.ref&&ci(S.ref,null,C),b.push(C.ref,C.__c||P,C)),L==null&&P!=null&&(L=P),(O=!!(4&C.__u))||S.__k===C.__k?_=Wo(C,_,n,O):typeof C.type=="function"&&N!==void 0?_=N:P&&(_=P.nextSibling),C.__u&=-7);return t.__e=L,_}function Vc(n,e,t,i,s){var a,l,u,_,g,b=t.length,E=b,S=0;for(n.__k=new Array(s),a=0;a<s;a++)(l=e[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(_=a+S,(l=n.__k[a]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?Rn(null,l,null,null,null):Zn(l)?Rn(er,{children:l},null,null,null):l.constructor==null&&l.__b>0?Rn(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=n,l.__b=n.__b+1,u=null,(g=l.__i=jc(l,t,_,E))!=-1&&(E--,(u=t[g])&&(u.__u|=2)),u==null||u.__v==null?(g==-1&&(s>b?S--:s<b&&S++),typeof l.type!="function"&&(l.__u|=4)):g!=_&&(g==_-1?S--:g==_+1?S++:(g>_?S--:S++,l.__u|=4))):n.__k[a]=null;if(E)for(a=0;a<b;a++)(u=t[a])!=null&&(2&u.__u)==0&&(u.__e==i&&(i=wt(u)),qo(u,u));return i}function Wo(n,e,t,i){var s,a;if(typeof n.type=="function"){for(s=n.__k,a=0;s&&a<s.length;a++)s[a]&&(s[a].__=n,e=Wo(s[a],e,t,i));return e}n.__e!=e&&(i&&(e&&n.type&&!e.parentNode&&(e=wt(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function jc(n,e,t,i){var s,a,l,u=n.key,_=n.type,g=e[t],b=g!=null&&(2&g.__u)==0;if(g===null&&n.key==null||b&&u==g.key&&_==g.type)return t;if(i>(b?1:0)){for(s=t-1,a=t+1;s>=0||a<e.length;)if((g=e[l=s>=0?s--:a++])!=null&&(2&g.__u)==0&&u==g.key&&_==g.type)return l}return-1}function Ds(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Uc.test(e)?t:t+"px"}function bn(n,e,t,i,s){var a,l;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Ds(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Ds(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(jo,"$1")),l=e.toLowerCase(),e=l in n||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?i?t.u=i.u:(t.u=si,n.addEventListener(e,a?Hr:Br,a)):n.removeEventListener(e,a?Hr:Br,a);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Os(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=si++;else if(e.t<t.u)return;return t($.event?$.event(e):e)}}}function ai(n,e,t,i,s,a,l,u,_,g){var b,E,S,C,P,L,N,O,D,B,J,Ee,Y,v,d,p,y,m=e.type;if(e.constructor!=null)return null;128&t.__u&&(_=!!(32&t.__u),a=[u=e.__e=t.__e]),(b=$.__b)&&b(e);e:if(typeof m=="function")try{if(O=e.props,D="prototype"in m&&m.prototype.render,B=(b=m.contextType)&&i[b.__c],J=b?B?B.props.value:b.__:i,t.__c?N=(E=e.__c=t.__c).__=E.__E:(D?e.__c=E=new m(O,J):(e.__c=E=new Nn(O,J),E.constructor=m,E.render=Bc),B&&B.sub(E),E.props=O,E.state||(E.state={}),E.context=J,E.__n=i,S=E.__d=!0,E.__h=[],E._sb=[]),D&&E.__s==null&&(E.__s=E.state),D&&m.getDerivedStateFromProps!=null&&(E.__s==E.state&&(E.__s=Ce({},E.__s)),Ce(E.__s,m.getDerivedStateFromProps(O,E.__s))),C=E.props,P=E.state,E.__v=e,S)D&&m.getDerivedStateFromProps==null&&E.componentWillMount!=null&&E.componentWillMount(),D&&E.componentDidMount!=null&&E.__h.push(E.componentDidMount);else{if(D&&m.getDerivedStateFromProps==null&&O!==C&&E.componentWillReceiveProps!=null&&E.componentWillReceiveProps(O,J),!E.__e&&E.shouldComponentUpdate!=null&&E.shouldComponentUpdate(O,E.__s,J)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(E.props=O,E.state=E.__s,E.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(I){I&&(I.__=e)}),Ee=0;Ee<E._sb.length;Ee++)E.__h.push(E._sb[Ee]);E._sb=[],E.__h.length&&l.push(E);break e}E.componentWillUpdate!=null&&E.componentWillUpdate(O,E.__s,J),D&&E.componentDidUpdate!=null&&E.__h.push(function(){E.componentDidUpdate(C,P,L)})}if(E.context=J,E.props=O,E.__P=n,E.__e=!1,Y=$.__r,v=0,D){for(E.state=E.__s,E.__d=!1,Y&&Y(e),b=E.render(E.props,E.state,E.context),d=0;d<E._sb.length;d++)E.__h.push(E._sb[d]);E._sb=[]}else do E.__d=!1,Y&&Y(e),b=E.render(E.props,E.state,E.context),E.state=E.__s;while(E.__d&&++v<25);E.state=E.__s,E.getChildContext!=null&&(i=Ce(Ce({},i),E.getChildContext())),D&&!S&&E.getSnapshotBeforeUpdate!=null&&(L=E.getSnapshotBeforeUpdate(C,P)),p=b,b!=null&&b.type===er&&b.key==null&&(p=Go(b.props.children)),u=Ho(n,Zn(p)?p:[p],e,t,i,s,a,l,u,_,g),E.base=e.__e,e.__u&=-161,E.__h.length&&l.push(E),N&&(E.__E=E.__=null)}catch(I){if(e.__v=null,_||a!=null)if(I.then){for(e.__u|=_?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;a[a.indexOf(u)]=null,e.__e=u}else{for(y=a.length;y--;)oi(a[y]);Wr(e)}else e.__e=t.__e,e.__k=t.__k,I.then||Wr(e);$.__e(I,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):u=e.__e=$c(t.__e,e,t,i,s,a,l,_,g);return(b=$.diffed)&&b(e),128&e.__u?void 0:u}function Wr(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(Wr)}function zo(n,e,t){for(var i=0;i<t.length;i++)ci(t[i],t[++i],t[++i]);$.__c&&$.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(a){a.call(s)})}catch(a){$.__e(a,s.__v)}})}function Go(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:Zn(n)?n.map(Go):Ce({},n)}function $c(n,e,t,i,s,a,l,u,_){var g,b,E,S,C,P,L,N=t.props,O=e.props,D=e.type;if(D=="svg"?s="http://www.w3.org/2000/svg":D=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),a!=null){for(g=0;g<a.length;g++)if((C=a[g])&&"setAttribute"in C==!!D&&(D?C.localName==D:C.nodeType==3)){n=C,a[g]=null;break}}if(n==null){if(D==null)return document.createTextNode(O);n=document.createElementNS(s,D,O.is&&O),u&&($.__m&&$.__m(e,a),u=!1),a=null}if(D==null)N===O||u&&n.data==O||(n.data=O);else{if(a=a&&Qn.call(n.childNodes),N=t.props||Xt,!u&&a!=null)for(N={},g=0;g<n.attributes.length;g++)N[(C=n.attributes[g]).name]=C.value;for(g in N)if(C=N[g],g!="children"){if(g=="dangerouslySetInnerHTML")E=C;else if(!(g in O)){if(g=="value"&&"defaultValue"in O||g=="checked"&&"defaultChecked"in O)continue;bn(n,g,null,C,s)}}for(g in O)C=O[g],g=="children"?S=C:g=="dangerouslySetInnerHTML"?b=C:g=="value"?P=C:g=="checked"?L=C:u&&typeof C!="function"||N[g]===C||bn(n,g,C,N[g],s);if(b)u||E&&(b.__html==E.__html||b.__html==n.innerHTML)||(n.innerHTML=b.__html),e.__k=[];else if(E&&(n.innerHTML=""),Ho(e.type=="template"?n.content:n,Zn(S)?S:[S],e,t,i,D=="foreignObject"?"http://www.w3.org/1999/xhtml":s,a,l,a?a[0]:t.__k&&wt(t,0),u,_),a!=null)for(g=a.length;g--;)oi(a[g]);u||(g="value",D=="progress"&&P==null?n.removeAttribute("value"):P!=null&&(P!==n[g]||D=="progress"&&!P||D=="option"&&P!=N[g])&&bn(n,g,P,N[g],s),g="checked",L!=null&&L!=n[g]&&bn(n,g,L,N[g],s))}return n}function ci(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){$.__e(s,t)}}function qo(n,e,t){var i,s;if($.unmount&&$.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||ci(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){$.__e(a,e)}i.base=i.__P=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&qo(i[s],e,t||typeof n.type!="function");t||oi(n.__e),n.__c=n.__=n.__e=void 0}function Bc(n,e,t){return this.constructor(n,t)}function Hc(n,e,t){var i,s,a,l;e==document&&(e=document.documentElement),$.__&&$.__(n,e),s=(i=!1)?null:e.__k,a=[],l=[],ai(e,n=e.__k=Fc(er,null,[n]),s||Xt,Xt,e.namespaceURI,s?null:e.firstChild?Qn.call(e.childNodes):null,a,s?s.__e:e.firstChild,i,l),zo(a,n,l)}Qn=$o.slice,$={__e:function(n,e,t,i){for(var s,a,l;e=e.__;)if((s=e.__c)&&!s.__)try{if((a=s.constructor)&&a.getDerivedStateFromError!=null&&(s.setState(a.getDerivedStateFromError(n)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),l=s.__d),l)return s.__E=s}catch(u){n=u}throw n}},Uo=0,Nn.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ce({},this.state),typeof n=="function"&&(n=n(Ce({},t),this.props)),n&&Ce(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Ns(this))},Nn.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Ns(this))},Nn.prototype.render=er,Qe=[],Fo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Vo=function(n,e){return n.__v.__b-e.__v.__b},Fn.__r=0,jo=/(PointerCapture)$|Capture$/i,si=0,Br=Os(!1),Hr=Os(!0);var Wc=0;function A(n,e,t,i,s,a){e||(e={});var l,u,_=e;if("ref"in _)for(u in _={},e)u=="ref"?l=e[u]:_[u]=e[u];var g={type:n,props:_,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Wc,__i:-1,__u:0,__source:s,__self:a};if(typeof n=="function"&&(l=n.defaultProps))for(u in l)_[u]===void 0&&(_[u]=l[u]);return $.vnode&&$.vnode(g),g}const zc=()=>{};var Ls={};/**
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
 */const Ko=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Gc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],l=n[t++],u=n[t++],_=((s&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(_>>10)),e[i++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],l=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},Jo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],l=s+1<n.length,u=l?n[s+1]:0,_=s+2<n.length,g=_?n[s+2]:0,b=a>>2,E=(a&3)<<4|u>>4;let S=(u&15)<<2|g>>6,C=g&63;_||(C=64,l||(S=64)),i.push(t[b],t[E],t[S],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ko(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const g=s<n.length?t[n.charAt(s)]:64;++s;const E=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||u==null||g==null||E==null)throw new qc;const S=a<<2|u>>4;if(i.push(S),g!==64){const C=u<<4&240|g>>2;if(i.push(C),E!==64){const P=g<<6&192|E;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kc=function(n){const e=Ko(n);return Jo.encodeByteArray(e,!0)},Vn=function(n){return Kc(n).replace(/\./g,"")},Xo=function(n){try{return Jo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Xc=()=>Jc().__FIREBASE_DEFAULTS__,Yc=()=>{if(typeof process>"u"||typeof Ls>"u")return;const n=Ls.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xo(n[1]);return e&&JSON.parse(e)},li=()=>{try{return zc()||Xc()||Yc()||Qc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yo=n=>li()?.emulatorHosts?.[n],Qo=n=>{const e=Yo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Zo=()=>li()?.config,ea=n=>li()?.[`_${n}`];/**
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
 */function el(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Vn(JSON.stringify(t)),Vn(JSON.stringify(l)),""].join(".")}const Wt={};function tl(){const n={prod:[],emulator:[]};for(const e of Object.keys(Wt))Wt[e]?n.emulator.push(e):n.prod.push(e);return n}function nl(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ms=!1;function ui(n,e){if(typeof window>"u"||typeof document>"u"||!ct(window.location.host)||Wt[n]===e||Wt[n]||Ms)return;Wt[n]=e;function t(S){return`__firebase__banner__${S}`}const i="__firebase__banner",a=tl().prod.length>0;function l(){const S=document.getElementById(i);S&&S.remove()}function u(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function _(S,C){S.setAttribute("width","24"),S.setAttribute("id",C),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ms=!0,l()},S}function b(S,C){S.setAttribute("id",C),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=nl(i),C=t("text"),P=document.getElementById(C)||document.createElement("span"),L=t("learnmore"),N=document.getElementById(L)||document.createElement("a"),O=t("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const B=S.element;u(B),b(N,L);const J=g();_(D,O),B.append(D,P,N,J),document.body.appendChild(B)}a?(P.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */const hl="FirebaseError";class Ie extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=hl,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,en.prototype.create)}}class en{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?ul(a,i):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Ie(s,u,i)}}function ul(n,e){return n.replace(dl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const dl=/\{\$([^}]+)}/g;function fl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function it(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],l=e[s];if(xs(a)&&xs(l)){if(!it(a,l))return!1}else if(a!==l)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function xs(n){return n!==null&&typeof n=="object"}/**
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
 */function tn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function pl(n,e){const t=new gl(n,e);return t.subscribe.bind(t)}class gl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ml(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Dr),s.error===void 0&&(s.error=Dr),s.complete===void 0&&(s.complete=Dr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ml(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Dr(){}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const Il={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},El=V.INFO,Tl={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Sl=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Tl[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class di{constructor(e){this.name=e,this._logLevel=El,this._logHandler=Sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Il[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const bl=(n,e)=>e.some(t=>n instanceof t);let Us,Fs;function Al(){return Us||(Us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kl(){return Fs||(Fs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ta=new WeakMap,zr=new WeakMap,na=new WeakMap,Or=new WeakMap,fi=new WeakMap;function Cl(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(He(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&ta.set(t,n)}).catch(()=>{}),fi.set(e,n),e}function Pl(n){if(zr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});zr.set(n,e)}let Gr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||na.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rl(n){Gr=n(Gr)}function Nl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Lr(this),e,...t);return na.set(i,e.sort?e.sort():[e]),He(i)}:kl().includes(n)?function(...e){return n.apply(Lr(this),e),He(ta.get(this))}:function(...e){return He(n.apply(Lr(this),e))}}function Dl(n){return typeof n=="function"?Nl(n):(n instanceof IDBTransaction&&Pl(n),bl(n,Al())?new Proxy(n,Gr):n)}function He(n){if(n instanceof IDBRequest)return Cl(n);if(Or.has(n))return Or.get(n);const e=Dl(n);return e!==n&&(Or.set(n,e),fi.set(e,n)),e}const Lr=n=>fi.get(n);function Ol(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const l=indexedDB.open(n,e),u=He(l);return i&&l.addEventListener("upgradeneeded",_=>{i(He(l.result),_.oldVersion,_.newVersion,He(l.transaction),_)}),t&&l.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),u.then(_=>{a&&_.addEventListener("close",()=>a()),s&&_.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),u}const Ll=["get","getKey","getAll","getAllKeys","count"],Ml=["put","add","delete","clear"],Mr=new Map;function Vs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mr.get(e))return Mr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Ml.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ll.includes(t)))return;const a=async function(l,...u){const _=this.transaction(l,s?"readwrite":"readonly");let g=_.store;return i&&(g=g.index(u.shift())),(await Promise.all([g[t](...u),s&&_.done]))[0]};return Mr.set(e,a),a}Rl(n=>({...n,get:(e,t,i)=>Vs(e,t)||n.get(e,t,i),has:(e,t)=>!!Vs(e,t)||n.has(e,t)}));/**
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
 */class xl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ul(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ul(n){return n.getComponent()?.type==="VERSION"}const qr="@firebase/app",js="0.14.2";/**
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
 */const De=new di("@firebase/app"),Fl="@firebase/app-compat",Vl="@firebase/analytics-compat",jl="@firebase/analytics",$l="@firebase/app-check-compat",Bl="@firebase/app-check",Hl="@firebase/auth",Wl="@firebase/auth-compat",zl="@firebase/database",Gl="@firebase/data-connect",ql="@firebase/database-compat",Kl="@firebase/functions",Jl="@firebase/functions-compat",Xl="@firebase/installations",Yl="@firebase/installations-compat",Ql="@firebase/messaging",Zl="@firebase/messaging-compat",eh="@firebase/performance",th="@firebase/performance-compat",nh="@firebase/remote-config",rh="@firebase/remote-config-compat",ih="@firebase/storage",sh="@firebase/storage-compat",oh="@firebase/firestore",ah="@firebase/ai",ch="@firebase/firestore-compat",lh="firebase",hh="12.2.0";/**
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
 */const Kr="[DEFAULT]",uh={[qr]:"fire-core",[Fl]:"fire-core-compat",[jl]:"fire-analytics",[Vl]:"fire-analytics-compat",[Bl]:"fire-app-check",[$l]:"fire-app-check-compat",[Hl]:"fire-auth",[Wl]:"fire-auth-compat",[zl]:"fire-rtdb",[Gl]:"fire-data-connect",[ql]:"fire-rtdb-compat",[Kl]:"fire-fn",[Jl]:"fire-fn-compat",[Xl]:"fire-iid",[Yl]:"fire-iid-compat",[Ql]:"fire-fcm",[Zl]:"fire-fcm-compat",[eh]:"fire-perf",[th]:"fire-perf-compat",[nh]:"fire-rc",[rh]:"fire-rc-compat",[ih]:"fire-gcs",[sh]:"fire-gcs-compat",[oh]:"fire-fst",[ch]:"fire-fst-compat",[ah]:"fire-vertex","fire-js":"fire-js",[lh]:"fire-js-all"};/**
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
 */const jn=new Map,dh=new Map,Jr=new Map;function $s(n,e){try{n.container.addComponent(e)}catch(t){De.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function st(n){const e=n.name;if(Jr.has(e))return De.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,n);for(const t of jn.values())$s(t,n);for(const t of dh.values())$s(t,n);return!0}function tr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const fh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},We=new en("app","Firebase",fh);/**
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
 */const Tt=hh;function ra(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Kr,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw We.create("bad-app-name",{appName:String(s)});if(t||(t=Zo()),!t)throw We.create("no-options");const a=jn.get(s);if(a){if(it(t,a.options)&&it(i,a.config))return a;throw We.create("duplicate-app",{appName:s})}const l=new wl(s);for(const _ of Jr.values())l.addComponent(_);const u=new ph(t,i,l);return jn.set(s,u),u}function pi(n=Kr){const e=jn.get(n);if(!e&&n===Kr&&Zo())return ra();if(!e)throw We.create("no-app",{appName:n});return e}function ye(n,e,t){let i=uh[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),De.warn(l.join(" "));return}st(new ze(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gh="firebase-heartbeat-database",mh=1,Yt="firebase-heartbeat-store";let xr=null;function ia(){return xr||(xr=Ol(gh,mh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yt)}catch(t){console.warn(t)}}}}).catch(n=>{throw We.create("idb-open",{originalErrorMessage:n.message})})),xr}async function _h(n){try{const t=(await ia()).transaction(Yt),i=await t.objectStore(Yt).get(sa(n));return await t.done,i}catch(e){if(e instanceof Ie)De.warn(e.message);else{const t=We.create("idb-get",{originalErrorMessage:e?.message});De.warn(t.message)}}}async function Bs(n,e){try{const i=(await ia()).transaction(Yt,"readwrite");await i.objectStore(Yt).put(e,sa(n)),await i.done}catch(t){if(t instanceof Ie)De.warn(t.message);else{const i=We.create("idb-set",{originalErrorMessage:t?.message});De.warn(i.message)}}}function sa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yh=1024,vh=30;class wh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Eh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>vh){const s=Th(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){De.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hs(),{heartbeatsToSend:t,unsentEntries:i}=Ih(this._heartbeatsCache.heartbeats),s=Vn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return De.warn(e),""}}}function Hs(){return new Date().toISOString().substring(0,10)}function Ih(n,e=yh){const t=[];let i=n.slice();for(const s of n){const a=t.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),Ws(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ws(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Eh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cl()?ll().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _h(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Bs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Bs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ws(n){return Vn(JSON.stringify({version:2,heartbeats:n})).length}function Th(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function Sh(n){st(new ze("platform-logger",e=>new xl(e),"PRIVATE")),st(new ze("heartbeat",e=>new wh(e),"PRIVATE")),ye(qr,js,n),ye(qr,js,"esm2020"),ye("fire-js","")}Sh("");var bh="firebase",Ah="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye(bh,Ah,"app");function oa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kh=oa,aa=new en("auth","Firebase",oa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new di("@firebase/auth");function Ch(n,...e){$n.logLevel<=V.WARN&&$n.warn(`Auth (${Tt}): ${n}`,...e)}function Dn(n,...e){$n.logLevel<=V.ERROR&&$n.error(`Auth (${Tt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n,...e){throw mi(n,...e)}function fe(n,...e){return mi(n,...e)}function gi(n,e,t){const i={...kh(),[e]:t};return new en("auth","Firebase",i).create(e,{appName:n.name})}function Ne(n){return gi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ph(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&we(n,"argument-error"),gi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mi(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return aa.create(n,...e)}function R(n,e,...t){if(!n)throw mi(e,...t)}function Pe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dn(e),new Error(e)}function Oe(n,e){n||Pe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Nh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rh()||sl()||"connection"in navigator)?navigator.onLine:!0}function Dh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oe(t>e,"Short delay should be less than long delay!"),this.isMobile=rl()||ol()}get(){return Nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){Oe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Lh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Mh=new nn(3e4,6e4);function rn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function St(n,e,t,i,s={}){return la(n,s,async()=>{let a={},l={};i&&(e==="GET"?l=i:a={body:JSON.stringify(i)});const u=tn({key:n.config.apiKey,...l}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const g={method:e,headers:_,...a};return il()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&ct(n.emulatorConfig.host)&&(g.credentials="include"),ca.fetch()(await ha(n,n.config.apiHost,t,u),g)})}async function la(n,e,t){n._canInitEmulator=!1;const i={...Oh,...e};try{const s=new xh(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw An(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const u=a.ok?l.errorMessage:l.error.message,[_,g]=u.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw An(n,"credential-already-in-use",l);if(_==="EMAIL_EXISTS")throw An(n,"email-already-in-use",l);if(_==="USER_DISABLED")throw An(n,"user-disabled",l);const b=i[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw gi(n,b,g);we(n,b)}}catch(s){if(s instanceof Ie)throw s;we(n,"network-request-failed",{message:String(s)})}}async function yi(n,e,t,i,s={}){const a=await St(n,e,t,i,s);return"mfaPendingCredential"in a&&we(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function ha(n,e,t,i){const s=`${e}${t}?${i}`,a=n,l=a.config.emulator?_i(n.config,s):`${n.config.apiScheme}://${s}`;return Lh.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}class xh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(fe(this.auth,"network-request-failed")),Mh.get())})}}function An(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=fe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function Bn(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(n,e=!1){const t=pe(n),i=await t.getIdToken(e),s=vi(i);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a?.sign_in_provider;return{claims:s,token:i,authTime:zt(Ur(s.auth_time)),issuedAtTime:zt(Ur(s.iat)),expirationTime:zt(Ur(s.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Ur(n){return Number(n)*1e3}function vi(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Dn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xo(t);return s?JSON.parse(s):(Dn("Failed to decode base64 JWT payload"),null)}catch(s){return Dn("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Gs(n){const e=vi(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ie&&Vh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Vh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Hn(n){const e=n.auth,t=await n.getIdToken(),i=await Qt(n,Bn(e,{idToken:t}));R(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=s.providerUserInfo?.length?ua(s.providerUserInfo):[],l=Bh(n.providerData,a),u=n.isAnonymous,_=!(n.email&&s.passwordHash)&&!l?.length,g=u?_:!1,b={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yr(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(n,b)}async function $h(n){const e=pe(n);await Hn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bh(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ua(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(n,e){const t=await la(n,{},async()=>{const i=tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,l=await ha(n,s,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:u,body:i};return n.emulatorConfig&&ct(n.emulatorConfig.host)&&(_.credentials="include"),ca.fetch()(l,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Wh(n,e){return St(n,"POST","/v2/accounts:revokeToken",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(e.length!==0,"internal-error");const t=Gs(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await Hh(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,l=new pt;return i&&(R(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(R(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pt,this.toJSON())}_performRefresh(){return Pe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ue{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new jh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fh(this,e)}reload(){return $h(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Hn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(oe(this.auth.app))return Promise.reject(Ne(this.auth));const e=await this.getIdToken();return await Qt(this,Uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,u=t.tenantId??void 0,_=t._redirectEventId??void 0,g=t.createdAt??void 0,b=t.lastLoginAt??void 0,{uid:E,emailVerified:S,isAnonymous:C,providerData:P,stsTokenManager:L}=t;R(E&&L,e,"internal-error");const N=pt.fromJSON(this.name,L);R(typeof E=="string",e,"internal-error"),Ve(i,e.name),Ve(s,e.name),R(typeof S=="boolean",e,"internal-error"),R(typeof C=="boolean",e,"internal-error"),Ve(a,e.name),Ve(l,e.name),Ve(u,e.name),Ve(_,e.name),Ve(g,e.name),Ve(b,e.name);const O=new ue({uid:E,auth:e,email:s,emailVerified:S,displayName:i,isAnonymous:C,photoURL:l,phoneNumber:a,tenantId:u,stsTokenManager:N,createdAt:g,lastLoginAt:b});return P&&Array.isArray(P)&&(O.providerData=P.map(D=>({...D}))),_&&(O._redirectEventId=_),O}static async _fromIdTokenResponse(e,t,i=!1){const s=new pt;s.updateFromServerResponse(t);const a=new ue({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Hn(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];R(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?ua(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!a?.length,u=new pt;u.updateFromIdToken(i);const _=new ue({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:l}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!a?.length};return Object.assign(_,g),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map;function Re(n){Oe(n instanceof Function,"Expected a class definition");let e=qs.get(n);return e?(Oe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qs.set(n,e),e)}/**
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
 */function On(n,e,t){return`firebase:${n}:${e}:${t}`}class gt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=On(this.userKey,s.apiKey,a),this.fullPersistenceKey=On("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Bn(this.auth,{idToken:e}).catch(()=>{});return t?ue._fromGetAccountInfoResponse(this.auth,t,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new gt(Re(Ks),e,i);const s=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||Re(Ks);const l=On(i,e.config.apiKey,e.name);let u=null;for(const g of t)try{const b=await g._get(l);if(b){let E;if(typeof b=="string"){const S=await Bn(e,{idToken:b}).catch(()=>{});if(!S)break;E=await ue._fromGetAccountInfoResponse(e,S,b)}else E=ue._fromJSON(e,b);g!==a&&(u=E),a=g;break}}catch{}const _=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new gt(a,e,i):(a=_[0],u&&await a._set(l,u.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(l)}catch{}})),new gt(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ia(n,e=[]){let t;switch(n){case"Browser":t=Js(se());break;case"Worker":t=`${Js(se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tt}/${i}`}/**
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
 */class qh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((l,u)=>{try{const _=e(a);l(_)}catch(_){u(_)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Kh(n,e={}){return St(n,"GET","/v2/passwordPolicy",rn(n,e))}/**
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
 */class Yh{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xs(this),this.idTokenSubscription=new Xs(this),this.beforeStateQueue=new qh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Re(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await gt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Bn(this,{idToken:e}),i=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(oe(this.app))return Promise.reject(Ne(this));const t=e?pe(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return oe(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return oe(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kh(this),t=new Xh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new en("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Wh(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Re(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await gt.create(this,[Re(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(u,this,"internal-error"),u.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,i,s);return()=>{l=!0,_()}}else{const _=e.addObserver(t);return()=>{l=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ia(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ch(`Error while retrieving App Check token: ${e.error}`),e?.token}}function bt(n){return pe(n)}class Xs{constructor(e){this.auth=e,this.observer=null,this.addObserver=pl(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qh(n){Ii=n}function Zh(n){return Ii.loadJS(n)}function eu(){return Ii.gapiScript}function tu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n,e){const t=tr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(it(a,e??{}))return s;we(s,"already-initialized")}return t.initialize({options:e})}function ru(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Re);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Ea(n,e,t){const i=bt(n);R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=Ta(e),{host:l,port:u}=iu(e),_=u===null?"":`:${u}`,g={url:`${a}//${l}${_}/`},b=Object.freeze({host:l,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){R(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),R(it(g,i.config.emulator)&&it(b,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=b,i.settings.appVerificationDisabledForTesting=!0,ct(l)?(hi(`${a}//${l}${_}`),ui("Auth",!0)):su()}function Ta(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iu(n){const e=Ta(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:Ys(i.substr(a.length+1))}}else{const[a,l]=i.split(":");return{host:a,port:Ys(l)}}}function Ys(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function su(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function mt(n,e){return yi(n,"POST","/v1/accounts:signInWithIdp",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="http://localhost";class ot extends Sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):we("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...a}=t;if(!i||!s)return null;const l=new ot(i,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return mt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,mt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mt(e,t)}buildRequest(){const e={requestUri:ou,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sn extends Ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends sn{constructor(){super("facebook.com")}static credential(e){return ot._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends sn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ot._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ae.credential(t,i)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends sn{constructor(){super("github.com")}static credential(e){return ot._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.GITHUB_SIGN_IN_METHOD="github.com";$e.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends sn{constructor(){super("twitter.com")}static credential(e,t){return ot._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.TWITTER_SIGN_IN_METHOD="twitter.com";Be.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(n,e){return yi(n,"POST","/v1/accounts:signUp",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await ue._fromIdTokenResponse(e,i,s),l=Qs(i);return new Le({user:a,providerId:l,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Qs(i);return new Le({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Qs(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cu(n){if(oe(n.app))return Promise.reject(Ne(n));const e=bt(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Le({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await au(e,{returnSecureToken:!0}),i=await Le._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ie{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Wn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Wn(e,t,i,s)}}function ba(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Wn._fromErrorAndOperation(n,a,e,i):a})}async function lu(n,e,t=!1){const i=await Qt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Le._forOperation(n,"link",i)}/**
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
 */async function hu(n,e,t=!1){const{auth:i}=n;if(oe(i.app))return Promise.reject(Ne(i));const s="reauthenticate";try{const a=await Qt(n,ba(i,s,e,n),t);R(a.idToken,i,"internal-error");const l=vi(a.idToken);R(l,i,"internal-error");const{sub:u}=l;return R(n.uid===u,i,"user-mismatch"),Le._forOperation(n,s,a)}catch(a){throw a?.code==="auth/user-not-found"&&we(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(n,e,t=!1){if(oe(n.app))return Promise.reject(Ne(n));const i="signIn",s=await ba(n,i,e),a=await Le._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(n,e){return yi(n,"POST","/v1/accounts:signInWithCustomToken",rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(n,e){if(oe(n.app))return Promise.reject(Ne(n));const t=bt(n),i=await du(t,{token:e,returnSecureToken:!0}),s=await Le._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}function pu(n,e,t,i){return pe(n).onIdTokenChanged(e,t,i)}function gu(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function Aa(n,e,t,i){return pe(n).onAuthStateChanged(e,t,i)}function mu(n){return pe(n).signOut()}const zn="__sak";/**
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
 */class ka{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zn,"1"),this.storage.removeItem(zn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=1e3,yu=10;class Ca extends ka{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,_)=>{this.notifyListeners(l,_)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(i);!t&&this.localCache[i]===l||this.notifyListeners(i,l)},a=this.storage.getItem(i);Gh()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},_u)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ca.type="LOCAL";const vu=Ca;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new nr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,l=this.handlersMap[s];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(l).map(async g=>g(t.origin,a)),_=await wu(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Iu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((u,_)=>{const g=Ti("",20);s.port1.start();const b=setTimeout(()=>{_(new Error("unsupported_event"))},i);l={messageChannel:s,onMessage(E){const S=E;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(b),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(S.data.response);break;default:clearTimeout(b),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return window}function Eu(n){ve().location.href=n}/**
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
 */function Na(){return typeof ve().WorkerGlobalScope<"u"&&typeof ve().importScripts=="function"}async function Tu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Su(){return navigator?.serviceWorker?.controller||null}function bu(){return Na()?self:null}/**
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
 */const Da="firebaseLocalStorageDb",Au=1,Gn="firebaseLocalStorage",Oa="fbase_key";class on{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rr(n,e){return n.transaction([Gn],e?"readwrite":"readonly").objectStore(Gn)}function ku(){const n=indexedDB.deleteDatabase(Da);return new on(n).toPromise()}function Qr(){const n=indexedDB.open(Da,Au);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Gn,{keyPath:Oa})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Gn)?e(i):(i.close(),await ku(),e(await Qr()))})})}async function Zs(n,e,t){const i=rr(n,!0).put({[Oa]:e,value:t});return new on(i).toPromise()}async function Cu(n,e){const t=rr(n,!1).get(e),i=await new on(t).toPromise();return i===void 0?null:i.value}function eo(n,e){const t=rr(n,!0).delete(e);return new on(t).toPromise()}const Pu=800,Ru=3;class La{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ru)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Na()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nr._getInstance(bu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Tu(),!this.activeServiceWorker)return;this.sender=new Iu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Su()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qr();return await Zs(e,zn,"1"),await eo(e,zn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zs(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Cu(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>eo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=rr(s,!1).getAll();return new on(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}La.type="LOCAL";const Nu=La;new nn(3e4,6e4);/**
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
 */class Si extends Sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Du(n){return uu(n.auth,new Si(n),n.bypassAuthState)}function Ou(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),hu(t,new Si(n),n.bypassAuthState)}async function Lu(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),lu(t,new Si(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:l,type:u}=e;if(l){this.reject(l);return}const _={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(_))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Du;case"linkViaPopup":case"linkViaRedirect":return Lu;case"reauthViaPopup":case"reauthViaRedirect":return Ou;default:we(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new nn(2e3,1e4);async function xu(n,e,t){if(oe(n.app))return Promise.reject(fe(n,"operation-not-supported-in-this-environment"));const i=bt(n);Ph(n,e,Ei);const s=Ma(i,t);return new et(i,"signInViaPopup",e,s).executeNotNull()}class et extends xa{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,et.currentPopupAction&&et.currentPopupAction.cancel(),et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=Ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,et.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mu.get())};e()}}et.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="pendingRedirect",Ln=new Map;class Fu extends xa{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ln.get(this.auth._key());if(!e){try{const i=await Vu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ln.set(this.auth._key(),e)}return this.bypassAuthState||Ln.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vu(n,e){const t=Bu(e),i=$u(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function ju(n,e){Ln.set(n._key(),e)}function $u(n){return Re(n._redirectPersistence)}function Bu(n){return On(Uu,n.config.apiKey,n.name)}async function Hu(n,e,t=!1){if(oe(n.app))return Promise.reject(Ne(n));const i=bt(n),s=Ma(i,e),l=await new Fu(i,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Qu=new nn(3e4,6e4);function no(){const n=ve().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zu(n){return new Promise((e,t)=>{function i(){no(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{no(),t(fe(n,"network-request-failed"))},timeout:Qu.get()})}if(ve().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ve().gapi?.load)i();else{const s=tu("iframefcb");return ve()[s]=()=>{gapi.load?i():t(fe(n,"network-request-failed"))},Zh(`${eu()}?onload=${s}`).catch(a=>t(a))}}).catch(e=>{throw Mn=null,e})}let Mn=null;function ed(n){return Mn=Mn||Zu(n),Mn}/**
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
 */const td=new nn(5e3,15e3),nd="__/auth/iframe",rd="emulator/auth/iframe",id={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function od(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_i(e,rd):`https://${n.config.authDomain}/${nd}`,i={apiKey:e.apiKey,appName:n.name,v:Tt},s=sd.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${tn(i).slice(1)}`}async function ad(n){const e=await ed(n),t=ve().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:od(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:id,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const l=fe(n,"network-request-failed"),u=ve().setTimeout(()=>{a(l)},td.get());function _(){ve().clearTimeout(u),s(i)}i.ping(_).then(_,()=>{a(l)})}))}/**
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
 */const cd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ld=500,hd=600,ud="_blank",dd="http://localhost";class ro{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fd(n,e,t,i=ld,s=hd){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const _={...cd,width:i.toString(),height:s.toString(),top:a,left:l},g=se().toLowerCase();t&&(u=ga(g)?ud:t),fa(g)&&(e=e||dd,_.scrollbars="yes");const b=Object.entries(_).reduce((S,[C,P])=>`${S}${C}=${P},`,"");if(zh(g)&&u!=="_self")return pd(e||"",u),new ro(null);const E=window.open(e||"",u,b);R(E,n,"popup-blocked");try{E.focus()}catch{}return new ro(E)}function pd(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const gd="__/auth/handler",md="emulator/auth/handler",_d=encodeURIComponent("fac");async function io(n,e,t,i,s,a){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Tt,eventId:s};if(e instanceof Ei){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",fl(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,E]of Object.entries({}))l[b]=E}if(e instanceof sn){const b=e.getScopes().filter(E=>E!=="");b.length>0&&(l.scopes=b.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const b of Object.keys(u))u[b]===void 0&&delete u[b];const _=await n._getAppCheckToken(),g=_?`#${_d}=${encodeURIComponent(_)}`:"";return`${yd(n)}?${tn(u).slice(1)}${g}`}function yd({config:n}){return n.emulator?_i(n,md):`https://${n.authDomain}/${gd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="webStorageSupport";class vd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ra,this._completeRedirectFn=Hu,this._overrideRedirectResult=ju}async _openPopup(e,t,i,s){Oe(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await io(e,t,i,Xr(),s);return fd(e,a,Ti())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await io(e,t,i,Xr(),s);return Eu(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Oe(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await ad(e),i=new zu(e);return t.register("authEvent",s=>(R(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fr,{type:Fr},s=>{const a=s?.[0]?.[Fr];a!==void 0&&t(!!a),we(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wa()||pa()||wi()}}const wd=vd;var so="@firebase/auth",oo="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ed(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Td(n){st(new ze("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;R(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const _={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ia(n)},g=new Yh(i,s,a,_);return ru(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),st(new ze("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(i=>new Id(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ye(so,oo,Ed(n)),ye(so,oo,"esm2020")}/**
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
 */const Sd=300,bd=ea("authIdTokenMaxAge")||Sd;let ao=null;const Ad=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>bd)return;const s=t?.token;ao!==s&&(ao=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kd(n=pi()){const e=tr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nu(n,{popupRedirectResolver:wd,persistence:[Nu,vu,Ra]}),i=ea("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const l=Ad(a.toString());gu(t,l,()=>l(t.currentUser)),pu(t,u=>l(u))}}const s=Yo("auth");return s&&Ea(t,`http://${s}`),t}function Cd(){return document.getElementsByTagName("head")?.[0]??document}Qh({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=fe("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",Cd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Td("Browser");var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,d){function p(){}p.prototype=d.prototype,v.D=d.prototype,v.prototype=new p,v.prototype.constructor=v,v.C=function(y,m,I){for(var f=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)f[Te-2]=arguments[Te];return d.prototype[m].apply(y,f)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,d,p){p||(p=0);var y=Array(16);if(typeof d=="string")for(var m=0;16>m;++m)y[m]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(m=0;16>m;++m)y[m]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=v.g[0],p=v.g[1],m=v.g[2];var I=v.g[3],f=d+(I^p&(m^I))+y[0]+3614090360&4294967295;d=p+(f<<7&4294967295|f>>>25),f=I+(m^d&(p^m))+y[1]+3905402710&4294967295,I=d+(f<<12&4294967295|f>>>20),f=m+(p^I&(d^p))+y[2]+606105819&4294967295,m=I+(f<<17&4294967295|f>>>15),f=p+(d^m&(I^d))+y[3]+3250441966&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(I^p&(m^I))+y[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(m^d&(p^m))+y[5]+1200080426&4294967295,I=d+(f<<12&4294967295|f>>>20),f=m+(p^I&(d^p))+y[6]+2821735955&4294967295,m=I+(f<<17&4294967295|f>>>15),f=p+(d^m&(I^d))+y[7]+4249261313&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(I^p&(m^I))+y[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(m^d&(p^m))+y[9]+2336552879&4294967295,I=d+(f<<12&4294967295|f>>>20),f=m+(p^I&(d^p))+y[10]+4294925233&4294967295,m=I+(f<<17&4294967295|f>>>15),f=p+(d^m&(I^d))+y[11]+2304563134&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(I^p&(m^I))+y[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(m^d&(p^m))+y[13]+4254626195&4294967295,I=d+(f<<12&4294967295|f>>>20),f=m+(p^I&(d^p))+y[14]+2792965006&4294967295,m=I+(f<<17&4294967295|f>>>15),f=p+(d^m&(I^d))+y[15]+1236535329&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(m^I&(p^m))+y[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^m&(d^p))+y[6]+3225465664&4294967295,I=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(I^d))+y[11]+643717713&4294967295,m=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(m^I))+y[0]+3921069994&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^I&(p^m))+y[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^m&(d^p))+y[10]+38016083&4294967295,I=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(I^d))+y[15]+3634488961&4294967295,m=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(m^I))+y[4]+3889429448&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^I&(p^m))+y[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^m&(d^p))+y[14]+3275163606&4294967295,I=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(I^d))+y[3]+4107603335&4294967295,m=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(m^I))+y[8]+1163531501&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^I&(p^m))+y[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^m&(d^p))+y[2]+4243563512&4294967295,I=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(I^d))+y[7]+1735328473&4294967295,m=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(m^I))+y[12]+2368359562&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(p^m^I)+y[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^m)+y[8]+2272392833&4294967295,I=d+(f<<11&4294967295|f>>>21),f=m+(I^d^p)+y[11]+1839030562&4294967295,m=I+(f<<16&4294967295|f>>>16),f=p+(m^I^d)+y[14]+4259657740&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^I)+y[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^m)+y[4]+1272893353&4294967295,I=d+(f<<11&4294967295|f>>>21),f=m+(I^d^p)+y[7]+4139469664&4294967295,m=I+(f<<16&4294967295|f>>>16),f=p+(m^I^d)+y[10]+3200236656&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^I)+y[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^m)+y[0]+3936430074&4294967295,I=d+(f<<11&4294967295|f>>>21),f=m+(I^d^p)+y[3]+3572445317&4294967295,m=I+(f<<16&4294967295|f>>>16),f=p+(m^I^d)+y[6]+76029189&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^I)+y[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^m)+y[12]+3873151461&4294967295,I=d+(f<<11&4294967295|f>>>21),f=m+(I^d^p)+y[15]+530742520&4294967295,m=I+(f<<16&4294967295|f>>>16),f=p+(m^I^d)+y[2]+3299628645&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(m^(p|~I))+y[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~m))+y[7]+1126891415&4294967295,I=d+(f<<10&4294967295|f>>>22),f=m+(d^(I|~p))+y[14]+2878612391&4294967295,m=I+(f<<15&4294967295|f>>>17),f=p+(I^(m|~d))+y[5]+4237533241&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~I))+y[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~m))+y[3]+2399980690&4294967295,I=d+(f<<10&4294967295|f>>>22),f=m+(d^(I|~p))+y[10]+4293915773&4294967295,m=I+(f<<15&4294967295|f>>>17),f=p+(I^(m|~d))+y[1]+2240044497&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~I))+y[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~m))+y[15]+4264355552&4294967295,I=d+(f<<10&4294967295|f>>>22),f=m+(d^(I|~p))+y[6]+2734768916&4294967295,m=I+(f<<15&4294967295|f>>>17),f=p+(I^(m|~d))+y[13]+1309151649&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~I))+y[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~m))+y[11]+3174756917&4294967295,I=d+(f<<10&4294967295|f>>>22),f=m+(d^(I|~p))+y[2]+718787259&4294967295,m=I+(f<<15&4294967295|f>>>17),f=p+(I^(m|~d))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(m+(f<<21&4294967295|f>>>11))&4294967295,v.g[2]=v.g[2]+m&4294967295,v.g[3]=v.g[3]+I&4294967295}i.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var p=d-this.blockSize,y=this.B,m=this.h,I=0;I<d;){if(m==0)for(;I<=p;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<d;)if(y[m++]=v.charCodeAt(I++),m==this.blockSize){s(this,y),m=0;break}}else for(;I<d;)if(y[m++]=v[I++],m==this.blockSize){s(this,y),m=0;break}}this.h=m,this.o+=d},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var p=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=p&255,p/=256;for(this.u(v),v=Array(16),d=p=0;4>d;++d)for(var y=0;32>y;y+=8)v[p++]=this.g[d]>>>y&255;return v};function a(v,d){var p=u;return Object.prototype.hasOwnProperty.call(p,v)?p[v]:p[v]=d(v)}function l(v,d){this.h=d;for(var p=[],y=!0,m=v.length-1;0<=m;m--){var I=v[m]|0;y&&I==d||(p[m]=I,y=!1)}this.g=p}var u={};function _(v){return-128<=v&&128>v?a(v,function(d){return new l([d|0],0>d?-1:0)}):new l([v|0],0>v?-1:0)}function g(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return N(g(-v));for(var d=[],p=1,y=0;v>=p;y++)d[y]=v/p|0,p*=4294967296;return new l(d,0)}function b(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return N(b(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=g(Math.pow(d,8)),y=E,m=0;m<v.length;m+=8){var I=Math.min(8,v.length-m),f=parseInt(v.substring(m,m+I),d);8>I?(I=g(Math.pow(d,I)),y=y.j(I).add(g(f))):(y=y.j(p),y=y.add(g(f)))}return y}var E=_(0),S=_(1),C=_(16777216);n=l.prototype,n.m=function(){if(L(this))return-N(this).m();for(var v=0,d=1,p=0;p<this.g.length;p++){var y=this.i(p);v+=(0<=y?y:4294967296+y)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(L(this))return"-"+N(this).toString(v);for(var d=g(Math.pow(v,6)),p=this,y="";;){var m=J(p,d).g;p=O(p,m.j(d));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(v);if(p=m,P(p))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=O(this,v),L(v)?-1:P(v)?0:1};function N(v){for(var d=v.g.length,p=[],y=0;y<d;y++)p[y]=~v.g[y];return new l(p,~v.h).add(S)}n.abs=function(){return L(this)?N(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],y=0,m=0;m<=d;m++){var I=y+(this.i(m)&65535)+(v.i(m)&65535),f=(I>>>16)+(this.i(m)>>>16)+(v.i(m)>>>16);y=f>>>16,I&=65535,f&=65535,p[m]=f<<16|I}return new l(p,p[p.length-1]&-2147483648?-1:0)};function O(v,d){return v.add(N(d))}n.j=function(v){if(P(this)||P(v))return E;if(L(this))return L(v)?N(this).j(N(v)):N(N(this).j(v));if(L(v))return N(this.j(N(v)));if(0>this.l(C)&&0>v.l(C))return g(this.m()*v.m());for(var d=this.g.length+v.g.length,p=[],y=0;y<2*d;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var m=0;m<v.g.length;m++){var I=this.i(y)>>>16,f=this.i(y)&65535,Te=v.i(m)>>>16,kt=v.i(m)&65535;p[2*y+2*m]+=f*kt,D(p,2*y+2*m),p[2*y+2*m+1]+=I*kt,D(p,2*y+2*m+1),p[2*y+2*m+1]+=f*Te,D(p,2*y+2*m+1),p[2*y+2*m+2]+=I*Te,D(p,2*y+2*m+2)}for(y=0;y<d;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=d;y<2*d;y++)p[y]=0;return new l(p,0)};function D(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function B(v,d){this.g=v,this.h=d}function J(v,d){if(P(d))throw Error("division by zero");if(P(v))return new B(E,E);if(L(v))return d=J(N(v),d),new B(N(d.g),N(d.h));if(L(d))return d=J(v,N(d)),new B(N(d.g),d.h);if(30<v.g.length){if(L(v)||L(d))throw Error("slowDivide_ only works with positive integers.");for(var p=S,y=d;0>=y.l(v);)p=Ee(p),y=Ee(y);var m=Y(p,1),I=Y(y,1);for(y=Y(y,2),p=Y(p,2);!P(y);){var f=I.add(y);0>=f.l(v)&&(m=m.add(p),I=f),y=Y(y,1),p=Y(p,1)}return d=O(v,m.j(d)),new B(m,d)}for(m=E;0<=v.l(d);){for(p=Math.max(1,Math.floor(v.m()/d.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=g(p),f=I.j(d);L(f)||0<f.l(v);)p-=y,I=g(p),f=I.j(d);P(I)&&(I=S),m=m.add(I),v=O(v,f)}return new B(m,v)}n.A=function(v){return J(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],y=0;y<d;y++)p[y]=this.i(y)&v.i(y);return new l(p,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],y=0;y<d;y++)p[y]=this.i(y)|v.i(y);return new l(p,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],y=0;y<d;y++)p[y]=this.i(y)^v.i(y);return new l(p,this.h^v.h)};function Ee(v){for(var d=v.g.length+1,p=[],y=0;y<d;y++)p[y]=v.i(y)<<1|v.i(y-1)>>>31;return new l(p,v.h)}function Y(v,d){var p=d>>5;d%=32;for(var y=v.g.length-p,m=[],I=0;I<y;I++)m[I]=0<d?v.i(I+p)>>>d|v.i(I+p+1)<<32-d:v.i(I+p);return new l(m,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=g,l.fromString=b,bi=l}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,o,c){return r==Array.prototype||r==Object.prototype||(r[o]=c.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof kn=="object"&&kn];for(var o=0;o<r.length;++o){var c=r[o];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=t(this);function s(r,o){if(o)e:{var c=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var w=r[h];if(!(w in c))break e;c=c[w]}r=r[r.length-1],h=c[r],o=o(h),o!=h&&o!=null&&e(c,r,{configurable:!0,writable:!0,value:o})}}function a(r,o){r instanceof String&&(r+="");var c=0,h=!1,w={next:function(){if(!h&&c<r.length){var T=c++;return{value:o(T,r[T]),done:!1}}return h=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(r){return r||function(){return a(this,function(o,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function _(r){var o=typeof r;return o=o!="object"?o:r?Array.isArray(r)?"array":o:"null",o=="array"||o=="object"&&typeof r.length=="number"}function g(r){var o=typeof r;return o=="object"&&r!=null||o=="function"}function b(r,o,c){return r.call.apply(r.bind,arguments)}function E(r,o,c){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,h),r.apply(o,w)}}return function(){return r.apply(o,arguments)}}function S(r,o,c){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:E,S.apply(null,arguments)}function C(r,o){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function P(r,o){function c(){}c.prototype=o.prototype,r.aa=o.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(h,w,T){for(var k=Array(arguments.length-2),j=2;j<arguments.length;j++)k[j-2]=arguments[j];return o.prototype[w].apply(h,k)}}function L(r){const o=r.length;if(0<o){const c=Array(o);for(let h=0;h<o;h++)c[h]=r[h];return c}return[]}function N(r,o){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(_(h)){const w=r.length||0,T=h.length||0;r.length=w+T;for(let k=0;k<T;k++)r[w+k]=h[k]}else r.push(h)}}class O{constructor(o,c){this.i=o,this.j=c,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function D(r){return/^[\s\xa0]*$/.test(r)}function B(){var r=u.navigator;return r&&(r=r.userAgent)?r:""}function J(r){return J[" "](r),r}J[" "]=function(){};var Ee=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Y(r,o,c){for(const h in r)o.call(c,r[h],h,r)}function v(r,o){for(const c in r)o.call(void 0,r[c],c,r)}function d(r){const o={};for(const c in r)o[c]=r[c];return o}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(r,o){let c,h;for(let w=1;w<arguments.length;w++){h=arguments[w];for(c in h)r[c]=h[c];for(let T=0;T<p.length;T++)c=p[T],Object.prototype.hasOwnProperty.call(h,c)&&(r[c]=h[c])}}function m(r){var o=1;r=r.split(":");const c=[];for(;0<o&&r.length;)c.push(r.shift()),o--;return r.length&&c.push(r.join(":")),c}function I(r){u.setTimeout(()=>{throw r},0)}function f(){var r=or;let o=null;return r.g&&(o=r.g,r.g=r.g.next,r.g||(r.h=null),o.next=null),o}class Te{constructor(){this.h=this.g=null}add(o,c){const h=kt.get();h.set(o,c),this.h?this.h.next=h:this.g=h,this.h=h}}var kt=new O(()=>new ec,r=>r.reset());class ec{constructor(){this.next=this.g=this.h=null}set(o,c){this.h=o,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Ct,Pt=!1,or=new Te,Di=()=>{const r=u.Promise.resolve(void 0);Ct=()=>{r.then(tc)}};var tc=()=>{for(var r;r=f();){try{r.h.call(r.g)}catch(c){I(c)}var o=kt;o.j(r),100>o.h&&(o.h++,r.next=o.g,o.g=r)}Pt=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Q(r,o){this.type=r,this.g=this.target=o,this.defaultPrevented=!1}Q.prototype.h=function(){this.defaultPrevented=!0};var nc=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var r=!1,o=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};u.addEventListener("test",c,o),u.removeEventListener("test",c,o)}catch{}return r})();function Rt(r,o){if(Q.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=o,o=r.relatedTarget){if(Ee){e:{try{J(o.nodeName);var w=!0;break e}catch{}w=!1}w||(o=null)}}else c=="mouseover"?o=r.fromElement:c=="mouseout"&&(o=r.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:rc[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Rt.aa.h.call(this)}}P(Rt,Q);var rc={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),ic=0;function sc(r,o,c,h,w){this.listener=r,this.proxy=null,this.src=o,this.type=c,this.capture=!!h,this.ha=w,this.key=++ic,this.da=this.fa=!1}function hn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function un(r){this.src=r,this.g={},this.h=0}un.prototype.add=function(r,o,c,h,w){var T=r.toString();r=this.g[T],r||(r=this.g[T]=[],this.h++);var k=cr(r,o,h,w);return-1<k?(o=r[k],c||(o.fa=!1)):(o=new sc(o,this.src,T,!!h,w),o.fa=c,r.push(o)),o};function ar(r,o){var c=o.type;if(c in r.g){var h=r.g[c],w=Array.prototype.indexOf.call(h,o,void 0),T;(T=0<=w)&&Array.prototype.splice.call(h,w,1),T&&(hn(o),r.g[c].length==0&&(delete r.g[c],r.h--))}}function cr(r,o,c,h){for(var w=0;w<r.length;++w){var T=r[w];if(!T.da&&T.listener==o&&T.capture==!!c&&T.ha==h)return w}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),hr={};function Oi(r,o,c,h,w){if(Array.isArray(o)){for(var T=0;T<o.length;T++)Oi(r,o[T],c,h,w);return null}return c=xi(c),r&&r[ln]?r.K(o,c,g(h)?!!h.capture:!1,w):oc(r,o,c,!1,h,w)}function oc(r,o,c,h,w,T){if(!o)throw Error("Invalid event type");var k=g(w)?!!w.capture:!!w,j=dr(r);if(j||(r[lr]=j=new un(r)),c=j.add(o,c,h,k,T),c.proxy)return c;if(h=ac(),c.proxy=h,h.src=r,h.listener=c,r.addEventListener)nc||(w=k),w===void 0&&(w=!1),r.addEventListener(o.toString(),h,w);else if(r.attachEvent)r.attachEvent(Mi(o.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function ac(){function r(c){return o.call(r.src,r.listener,c)}const o=cc;return r}function Li(r,o,c,h,w){if(Array.isArray(o))for(var T=0;T<o.length;T++)Li(r,o[T],c,h,w);else h=g(h)?!!h.capture:!!h,c=xi(c),r&&r[ln]?(r=r.i,o=String(o).toString(),o in r.g&&(T=r.g[o],c=cr(T,c,h,w),-1<c&&(hn(T[c]),Array.prototype.splice.call(T,c,1),T.length==0&&(delete r.g[o],r.h--)))):r&&(r=dr(r))&&(o=r.g[o.toString()],r=-1,o&&(r=cr(o,c,h,w)),(c=-1<r?o[r]:null)&&ur(c))}function ur(r){if(typeof r!="number"&&r&&!r.da){var o=r.src;if(o&&o[ln])ar(o.i,r);else{var c=r.type,h=r.proxy;o.removeEventListener?o.removeEventListener(c,h,r.capture):o.detachEvent?o.detachEvent(Mi(c),h):o.addListener&&o.removeListener&&o.removeListener(h),(c=dr(o))?(ar(c,r),c.h==0&&(c.src=null,o[lr]=null)):hn(r)}}}function Mi(r){return r in hr?hr[r]:hr[r]="on"+r}function cc(r,o){if(r.da)r=!0;else{o=new Rt(o,this);var c=r.listener,h=r.ha||r.src;r.fa&&ur(r),r=c.call(h,o)}return r}function dr(r){return r=r[lr],r instanceof un?r:null}var fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function xi(r){return typeof r=="function"?r:(r[fr]||(r[fr]=function(o){return r.handleEvent(o)}),r[fr])}function Z(){Me.call(this),this.i=new un(this),this.M=this,this.F=null}P(Z,Me),Z.prototype[ln]=!0,Z.prototype.removeEventListener=function(r,o,c,h){Li(this,r,o,c,h)};function ne(r,o){var c,h=r.F;if(h)for(c=[];h;h=h.F)c.push(h);if(r=r.M,h=o.type||o,typeof o=="string")o=new Q(o,r);else if(o instanceof Q)o.target=o.target||r;else{var w=o;o=new Q(h,r),y(o,w)}if(w=!0,c)for(var T=c.length-1;0<=T;T--){var k=o.g=c[T];w=dn(k,h,!0,o)&&w}if(k=o.g=r,w=dn(k,h,!0,o)&&w,w=dn(k,h,!1,o)&&w,c)for(T=0;T<c.length;T++)k=o.g=c[T],w=dn(k,h,!1,o)&&w}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var r=this.i,o;for(o in r.g){for(var c=r.g[o],h=0;h<c.length;h++)hn(c[h]);delete r.g[o],r.h--}}this.F=null},Z.prototype.K=function(r,o,c,h){return this.i.add(String(r),o,!1,c,h)},Z.prototype.L=function(r,o,c,h){return this.i.add(String(r),o,!0,c,h)};function dn(r,o,c,h){if(o=r.i.g[String(o)],!o)return!0;o=o.concat();for(var w=!0,T=0;T<o.length;++T){var k=o[T];if(k&&!k.da&&k.capture==c){var j=k.listener,X=k.ha||k.src;k.fa&&ar(r.i,k),w=j.call(X,h)!==!1&&w}}return w&&!h.defaultPrevented}function Ui(r,o,c){if(typeof r=="function")c&&(r=S(r,c));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:u.setTimeout(r,o||0)}function Fi(r){r.g=Ui(()=>{r.g=null,r.i&&(r.i=!1,Fi(r))},r.l);const o=r.h;r.h=null,r.m.apply(null,o)}class lc extends Me{constructor(o,c){super(),this.m=o,this.l=c,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Fi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(r){Me.call(this),this.h=r,this.g={}}P(Nt,Me);var Vi=[];function ji(r){Y(r.g,function(o,c){this.g.hasOwnProperty(c)&&ur(o)},r),r.g={}}Nt.prototype.N=function(){Nt.aa.N.call(this),ji(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=u.JSON.stringify,hc=u.JSON.parse,uc=class{stringify(r){return u.JSON.stringify(r,void 0)}parse(r){return u.JSON.parse(r,void 0)}};function gr(){}gr.prototype.h=null;function $i(r){return r.h||(r.h=r.i())}function dc(){}var Dt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mr(){Q.call(this,"d")}P(mr,Q);function _r(){Q.call(this,"c")}P(_r,Q);var lt={},Bi=null;function yr(){return Bi=Bi||new Z}lt.La="serverreachability";function Hi(r){Q.call(this,lt.La,r)}P(Hi,Q);function Ot(r){const o=yr();ne(o,new Hi(o))}lt.STAT_EVENT="statevent";function Wi(r,o){Q.call(this,lt.STAT_EVENT,r),this.stat=o}P(Wi,Q);function re(r){const o=yr();ne(o,new Wi(o,r))}lt.Ma="timingevent";function zi(r,o){Q.call(this,lt.Ma,r),this.size=o}P(zi,Q);function Lt(r,o){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){r()},o)}function Mt(){this.g=!0}Mt.prototype.xa=function(){this.g=!1};function fc(r,o,c,h,w,T){r.info(function(){if(r.g)if(T)for(var k="",j=T.split("&"),X=0;X<j.length;X++){var F=j[X].split("=");if(1<F.length){var ee=F[0];F=F[1];var te=ee.split("_");k=2<=te.length&&te[1]=="type"?k+(ee+"="+F+"&"):k+(ee+"=redacted&")}}else k=null;else k=T;return"XMLHTTP REQ ("+h+") [attempt "+w+"]: "+o+`
`+c+`
`+k})}function pc(r,o,c,h,w,T,k){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+w+"]: "+o+`
`+c+`
`+T+" "+k})}function ht(r,o,c,h){r.info(function(){return"XMLHTTP TEXT ("+o+"): "+mc(r,c)+(h?" "+h:"")})}function gc(r,o){r.info(function(){return"TIMEOUT: "+o})}Mt.prototype.info=function(){};function mc(r,o){if(!r.g)return o;if(!o)return null;try{var c=JSON.parse(o);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var h=c[r];if(!(2>h.length)){var w=h[1];if(Array.isArray(w)&&!(1>w.length)){var T=w[0];if(T!="noop"&&T!="stop"&&T!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return pr(c)}catch{return o}}var vr={NO_ERROR:0,TIMEOUT:8},_c={},wr;function fn(){}P(fn,gr),fn.prototype.g=function(){return new XMLHttpRequest},fn.prototype.i=function(){return{}},wr=new fn;function xe(r,o,c,h){this.j=r,this.i=o,this.l=c,this.R=h||1,this.U=new Nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gi}function Gi(){this.i=null,this.g="",this.h=!1}var qi={},Ir={};function Er(r,o,c){r.L=1,r.v=_n(Se(o)),r.m=c,r.P=!0,Ki(r,null)}function Ki(r,o){r.F=Date.now(),pn(r),r.A=Se(r.v);var c=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),cs(c.i,"t",h),r.C=0,c=r.j.J,r.h=new Gi,r.g=As(r.j,c?o:null,!r.m),0<r.O&&(r.M=new lc(S(r.Y,r,r.g),r.O)),o=r.U,c=r.g,h=r.ca;var w="readystatechange";Array.isArray(w)||(w&&(Vi[0]=w.toString()),w=Vi);for(var T=0;T<w.length;T++){var k=Oi(c,w[T],h||o.handleEvent,!1,o.h||o);if(!k)break;o.g[k.key]=k}o=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,o)):(r.u="GET",r.g.ea(r.A,r.u,null,o)),Ot(),fc(r.i,r.u,r.A,r.l,r.R,r.m)}xe.prototype.ca=function(r){r=r.target;const o=this.M;o&&be(r)==3?o.j():this.Y(r)},xe.prototype.Y=function(r){try{if(r==this.g)e:{const te=be(this.g);var o=this.g.Ba();const ft=this.g.Z();if(!(3>te)&&(te!=3||this.g&&(this.h.h||this.g.oa()||gs(this.g)))){this.J||te!=4||o==7||(o==8||0>=ft?Ot(3):Ot(2)),Tr(this);var c=this.g.Z();this.X=c;t:if(Ji(this)){var h=gs(this.g);r="";var w=h.length,T=be(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ke(this),xt(this);var k="";break t}this.h.i=new u.TextDecoder}for(o=0;o<w;o++)this.h.h=!0,r+=this.h.i.decode(h[o],{stream:!(T&&o==w-1)});h.length=0,this.h.g+=r,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=c==200,pc(this.i,this.u,this.A,this.l,this.R,te,c),this.o){if(this.T&&!this.K){t:{if(this.g){var j,X=this.g;if((j=X.g?X.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(j)){var F=j;break t}}F=null}if(c=F)ht(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sr(this,c);else{this.o=!1,this.s=3,re(12),Ke(this),xt(this);break e}}if(this.P){c=!0;let le;for(;!this.J&&this.C<k.length;)if(le=yc(this,k),le==Ir){te==4&&(this.s=4,re(14),c=!1),ht(this.i,this.l,null,"[Incomplete Response]");break}else if(le==qi){this.s=4,re(15),ht(this.i,this.l,k,"[Invalid Chunk]"),c=!1;break}else ht(this.i,this.l,le,null),Sr(this,le);if(Ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||k.length!=0||this.h.h||(this.s=1,re(16),c=!1),this.o=this.o&&c,!c)ht(this.i,this.l,k,"[Invalid Chunked Response]"),Ke(this),xt(this);else if(0<k.length&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.ba&&!ee.M&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Rr(ee),ee.M=!0,re(11))}}else ht(this.i,this.l,k,null),Sr(this,k);te==4&&Ke(this),this.o&&!this.J&&(te==4?Es(this.j,this):(this.o=!1,pn(this)))}else Mc(this.g),c==400&&0<k.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Ke(this),xt(this)}}}catch{}finally{}};function Ji(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function yc(r,o){var c=r.C,h=o.indexOf(`
`,c);return h==-1?Ir:(c=Number(o.substring(c,h)),isNaN(c)?qi:(h+=1,h+c>o.length?Ir:(o=o.slice(h,h+c),r.C=h+c,o)))}xe.prototype.cancel=function(){this.J=!0,Ke(this)};function pn(r){r.S=Date.now()+r.I,Xi(r,r.I)}function Xi(r,o){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Lt(S(r.ba,r),o)}function Tr(r){r.B&&(u.clearTimeout(r.B),r.B=null)}xe.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(gc(this.i,this.A),this.L!=2&&(Ot(),re(17)),Ke(this),this.s=2,xt(this)):Xi(this,this.S-r)};function xt(r){r.j.G==0||r.J||Es(r.j,r)}function Ke(r){Tr(r);var o=r.M;o&&typeof o.ma=="function"&&o.ma(),r.M=null,ji(r.U),r.g&&(o=r.g,r.g=null,o.abort(),o.ma())}function Sr(r,o){try{var c=r.j;if(c.G!=0&&(c.g==r||br(c.h,r))){if(!r.K&&br(c.h,r)&&c.G==3){try{var h=c.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var w=h;if(w[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)Tn(c),In(c);else break e;Pr(c),re(18)}}else c.za=w[1],0<c.za-c.T&&37500>w[2]&&c.F&&c.v==0&&!c.C&&(c.C=Lt(S(c.Za,c),6e3));if(1>=Zi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Xe(c,11)}else if((r.K||c.g==r)&&Tn(c),!D(o))for(w=c.Da.g.parse(o),o=0;o<w.length;o++){let F=w[o];if(c.T=F[0],F=F[1],c.G==2)if(F[0]=="c"){c.K=F[1],c.ia=F[2];const ee=F[3];ee!=null&&(c.la=ee,c.j.info("VER="+c.la));const te=F[4];te!=null&&(c.Aa=te,c.j.info("SVER="+c.Aa));const ft=F[5];ft!=null&&typeof ft=="number"&&0<ft&&(h=1.5*ft,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const le=r.g;if(le){const Sn=le.g?le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sn){var T=h.h;T.g||Sn.indexOf("spdy")==-1&&Sn.indexOf("quic")==-1&&Sn.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(Ar(T,T.h),T.h=null))}if(h.D){const Nr=le.g?le.g.getResponseHeader("X-HTTP-Session-Id"):null;Nr&&(h.ya=Nr,H(h.I,h.D,Nr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var k=r;if(h.qa=bs(h,h.J?h.ia:null,h.W),k.K){es(h.h,k);var j=k,X=h.L;X&&(j.I=X),j.B&&(Tr(j),pn(j)),h.g=k}else ws(h);0<c.i.length&&En(c)}else F[0]!="stop"&&F[0]!="close"||Xe(c,7);else c.G==3&&(F[0]=="stop"||F[0]=="close"?F[0]=="stop"?Xe(c,7):Cr(c):F[0]!="noop"&&c.l&&c.l.ta(F),c.v=0)}}Ot(4)}catch{}}var vc=class{constructor(r,o){this.g=r,this.map=o}};function Yi(r){this.l=r||10,u.PerformanceNavigationTiming?(r=u.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Zi(r){return r.h?1:r.g?r.g.size:0}function br(r,o){return r.h?r.h==o:r.g?r.g.has(o):!1}function Ar(r,o){r.g?r.g.add(o):r.h=o}function es(r,o){r.h&&r.h==o?r.h=null:r.g&&r.g.has(o)&&r.g.delete(o)}Yi.prototype.cancel=function(){if(this.i=ts(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ts(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let o=r.i;for(const c of r.g.values())o=o.concat(c.D);return o}return L(r.i)}function wc(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(_(r)){for(var o=[],c=r.length,h=0;h<c;h++)o.push(r[h]);return o}o=[],c=0;for(h in r)o[c++]=r[h];return o}function Ic(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(_(r)||typeof r=="string"){var o=[];r=r.length;for(var c=0;c<r;c++)o.push(c);return o}o=[],c=0;for(const h in r)o[c++]=h;return o}}}function ns(r,o){if(r.forEach&&typeof r.forEach=="function")r.forEach(o,void 0);else if(_(r)||typeof r=="string")Array.prototype.forEach.call(r,o,void 0);else for(var c=Ic(r),h=wc(r),w=h.length,T=0;T<w;T++)o.call(void 0,h[T],c&&c[T],r)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ec(r,o){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var h=r[c].indexOf("="),w=null;if(0<=h){var T=r[c].substring(0,h);w=r[c].substring(h+1)}else T=r[c];o(T,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Je(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Je){this.h=r.h,gn(this,r.j),this.o=r.o,this.g=r.g,mn(this,r.s),this.l=r.l;var o=r.i,c=new Vt;c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),is(this,c),this.m=r.m}else r&&(o=String(r).match(rs))?(this.h=!1,gn(this,o[1]||"",!0),this.o=Ut(o[2]||""),this.g=Ut(o[3]||"",!0),mn(this,o[4]),this.l=Ut(o[5]||"",!0),is(this,o[6]||"",!0),this.m=Ut(o[7]||"")):(this.h=!1,this.i=new Vt(null,this.h))}Je.prototype.toString=function(){var r=[],o=this.j;o&&r.push(Ft(o,ss,!0),":");var c=this.g;return(c||o=="file")&&(r.push("//"),(o=this.o)&&r.push(Ft(o,ss,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(Ft(c,c.charAt(0)=="/"?bc:Sc,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",Ft(c,kc)),r.join("")};function Se(r){return new Je(r)}function gn(r,o,c){r.j=c?Ut(o,!0):o,r.j&&(r.j=r.j.replace(/:$/,""))}function mn(r,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);r.s=o}else r.s=null}function is(r,o,c){o instanceof Vt?(r.i=o,Cc(r.i,r.h)):(c||(o=Ft(o,Ac)),r.i=new Vt(o,r.h))}function H(r,o,c){r.i.set(o,c)}function _n(r){return H(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ut(r,o){return r?o?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ft(r,o,c){return typeof r=="string"?(r=encodeURI(r).replace(o,Tc),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Tc(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var ss=/[#\/\?@]/g,Sc=/[#\?:]/g,bc=/[#\?]/g,Ac=/[#\?@]/g,kc=/#/g;function Vt(r,o){this.h=this.g=null,this.i=r||null,this.j=!!o}function Ue(r){r.g||(r.g=new Map,r.h=0,r.i&&Ec(r.i,function(o,c){r.add(decodeURIComponent(o.replace(/\+/g," ")),c)}))}n=Vt.prototype,n.add=function(r,o){Ue(this),this.i=null,r=ut(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(o),this.h+=1,this};function os(r,o){Ue(r),o=ut(r,o),r.g.has(o)&&(r.i=null,r.h-=r.g.get(o).length,r.g.delete(o))}function as(r,o){return Ue(r),o=ut(r,o),r.g.has(o)}n.forEach=function(r,o){Ue(this),this.g.forEach(function(c,h){c.forEach(function(w){r.call(o,w,h,this)},this)},this)},n.na=function(){Ue(this);const r=Array.from(this.g.values()),o=Array.from(this.g.keys()),c=[];for(let h=0;h<o.length;h++){const w=r[h];for(let T=0;T<w.length;T++)c.push(o[h])}return c},n.V=function(r){Ue(this);let o=[];if(typeof r=="string")as(this,r)&&(o=o.concat(this.g.get(ut(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)o=o.concat(r[c])}return o},n.set=function(r,o){return Ue(this),this.i=null,r=ut(this,r),as(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[o]),this.h+=1,this},n.get=function(r,o){return r?(r=this.V(r),0<r.length?String(r[0]):o):o};function cs(r,o,c){os(r,o),0<c.length&&(r.i=null,r.g.set(ut(r,o),L(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],o=Array.from(this.g.keys());for(var c=0;c<o.length;c++){var h=o[c];const T=encodeURIComponent(String(h)),k=this.V(h);for(h=0;h<k.length;h++){var w=T;k[h]!==""&&(w+="="+encodeURIComponent(String(k[h]))),r.push(w)}}return this.i=r.join("&")};function ut(r,o){return o=String(o),r.j&&(o=o.toLowerCase()),o}function Cc(r,o){o&&!r.j&&(Ue(r),r.i=null,r.g.forEach(function(c,h){var w=h.toLowerCase();h!=w&&(os(this,h),cs(this,w,c))},r)),r.j=o}function Pc(r,o){const c=new Mt;if(u.Image){const h=new Image;h.onload=C(Fe,c,"TestLoadImage: loaded",!0,o,h),h.onerror=C(Fe,c,"TestLoadImage: error",!1,o,h),h.onabort=C(Fe,c,"TestLoadImage: abort",!1,o,h),h.ontimeout=C(Fe,c,"TestLoadImage: timeout",!1,o,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else o(!1)}function Rc(r,o){const c=new Mt,h=new AbortController,w=setTimeout(()=>{h.abort(),Fe(c,"TestPingServer: timeout",!1,o)},1e4);fetch(r,{signal:h.signal}).then(T=>{clearTimeout(w),T.ok?Fe(c,"TestPingServer: ok",!0,o):Fe(c,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(w),Fe(c,"TestPingServer: error",!1,o)})}function Fe(r,o,c,h,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),h(c)}catch{}}function Nc(){this.g=new uc}function Dc(r,o,c){const h=c||"";try{ns(r,function(w,T){let k=w;g(w)&&(k=pr(w)),o.push(h+T+"="+encodeURIComponent(k))})}catch(w){throw o.push(h+"type="+encodeURIComponent("_badmap")),w}}function yn(r){this.l=r.Ub||null,this.j=r.eb||!1}P(yn,gr),yn.prototype.g=function(){return new vn(this.l,this.j)},yn.prototype.i=(function(r){return function(){return r}})({});function vn(r,o){Z.call(this),this.D=r,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(vn,Z),n=vn.prototype,n.open=function(r,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=o,this.readyState=1,$t(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(o.body=r),(this.D||u).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jt(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,$t(this)),this.g&&(this.readyState=3,$t(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ls(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function ls(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var o=r.value?r.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!r.done}))&&(this.response=this.responseText+=o)}r.done?jt(this):$t(this),this.readyState==3&&ls(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,jt(this))},n.Qa=function(r){this.g&&(this.response=r,jt(this))},n.ga=function(){this.g&&jt(this)};function jt(r){r.readyState=4,r.l=null,r.j=null,r.v=null,$t(r)}n.setRequestHeader=function(r,o){this.u.append(r,o)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],o=this.h.entries();for(var c=o.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=o.next();return r.join(`\r
`)};function $t(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function hs(r){let o="";return Y(r,function(c,h){o+=h,o+=":",o+=c,o+=`\r
`}),o}function kr(r,o,c){e:{for(h in c){var h=!1;break e}h=!0}h||(c=hs(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):H(r,o,c))}function W(r){Z.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(W,Z);var Oc=/^https?$/i,Lc=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,o,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);o=o?o.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?$i(this.o):$i(wr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(r),!0),this.B=!1}catch(T){us(this,T);return}if(r=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var w in h)c.set(w,h[w]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const T of h.keys())c.set(T,h.get(T));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(T=>T.toLowerCase()=="content-type"),w=u.FormData&&r instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Lc,o,void 0))||h||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,k]of c)this.g.setRequestHeader(T,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ps(this),this.u=!0,this.g.send(r),this.u=!1}catch(T){us(this,T)}};function us(r,o){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=o,r.m=5,ds(r),wn(r)}function ds(r){r.A||(r.A=!0,ne(r,"complete"),ne(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ne(this,"complete"),ne(this,"abort"),wn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wn(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fs(this):this.bb())},n.bb=function(){fs(this)};function fs(r){if(r.h&&typeof l<"u"&&(!r.v[1]||be(r)!=4||r.Z()!=2)){if(r.u&&be(r)==4)Ui(r.Ea,0,r);else if(ne(r,"readystatechange"),be(r)==4){r.h=!1;try{const k=r.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var c;if(!(c=o)){var h;if(h=k===0){var w=String(r.D).match(rs)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),h=!Oc.test(w?w.toLowerCase():"")}c=h}if(c)ne(r,"complete"),ne(r,"success");else{r.m=6;try{var T=2<be(r)?r.g.statusText:""}catch{T=""}r.l=T+" ["+r.Z()+"]",ds(r)}}finally{wn(r)}}}}function wn(r,o){if(r.g){ps(r);const c=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,o||ne(r,"ready");try{c.onreadystatechange=h}catch{}}}function ps(r){r.I&&(u.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function be(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<be(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var o=this.g.responseText;return r&&o.indexOf(r)==0&&(o=o.substring(r.length)),hc(o)}};function gs(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Mc(r){const o={};r=(r.g&&2<=be(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(D(r[h]))continue;var c=m(r[h]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const T=o[w]||[];o[w]=T,T.push(c)}v(o,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bt(r,o,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||o}function ms(r){this.Aa=0,this.i=[],this.j=new Mt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bt("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bt("baseRetryDelayMs",5e3,r),this.cb=Bt("retryDelaySeedMs",1e4,r),this.Wa=Bt("forwardChannelMaxRetries",2,r),this.wa=Bt("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(r&&r.concurrentRequestLimit),this.Da=new Nc,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ms.prototype,n.la=8,n.G=1,n.connect=function(r,o,c,h){re(0),this.W=r,this.H=o||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=bs(this,null,this.W),En(this)};function Cr(r){if(_s(r),r.G==3){var o=r.U++,c=Se(r.I);if(H(c,"SID",r.K),H(c,"RID",o),H(c,"TYPE","terminate"),Ht(r,c),o=new xe(r,r.j,o),o.L=2,o.v=_n(Se(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(o.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=o.v,c=!0),c||(o.g=As(o.j,null),o.g.ea(o.v)),o.F=Date.now(),pn(o)}Ss(r)}function In(r){r.g&&(Rr(r),r.g.cancel(),r.g=null)}function _s(r){In(r),r.u&&(u.clearTimeout(r.u),r.u=null),Tn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&u.clearTimeout(r.s),r.s=null)}function En(r){if(!Qi(r.h)&&!r.s){r.s=!0;var o=r.Ga;Ct||Di(),Pt||(Ct(),Pt=!0),or.add(o,r),r.B=0}}function xc(r,o){return Zi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=o.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Lt(S(r.Ga,r,o),Ts(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const w=new xe(this,this.j,r);let T=this.o;if(this.S&&(T?(T=d(T),y(T,this.S)):T=this.S),this.m!==null||this.O||(w.H=T,T=null),this.P)e:{for(var o=0,c=0;c<this.i.length;c++){t:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=c;break e}if(o===4096||c===this.i.length-1){o=c+1;break e}}o=1e3}else o=1e3;o=vs(this,w,o),c=Se(this.I),H(c,"RID",r),H(c,"CVER",22),this.D&&H(c,"X-HTTP-Session-Id",this.D),Ht(this,c),T&&(this.O?o="headers="+encodeURIComponent(String(hs(T)))+"&"+o:this.m&&kr(c,this.m,T)),Ar(this.h,w),this.Ua&&H(c,"TYPE","init"),this.P?(H(c,"$req",o),H(c,"SID","null"),w.T=!0,Er(w,c,null)):Er(w,c,o),this.G=2}}else this.G==3&&(r?ys(this,r):this.i.length==0||Qi(this.h)||ys(this))};function ys(r,o){var c;o?c=o.l:c=r.U++;const h=Se(r.I);H(h,"SID",r.K),H(h,"RID",c),H(h,"AID",r.T),Ht(r,h),r.m&&r.o&&kr(h,r.m,r.o),c=new xe(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),o&&(r.i=o.D.concat(r.i)),o=vs(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Ar(r.h,c),Er(c,h,o)}function Ht(r,o){r.H&&Y(r.H,function(c,h){H(o,h,c)}),r.l&&ns({},function(c,h){H(o,h,c)})}function vs(r,o,c){c=Math.min(r.i.length,c);var h=r.l?S(r.l.Na,r.l,r):null;e:{var w=r.i;let T=-1;for(;;){const k=["count="+c];T==-1?0<c?(T=w[0].g,k.push("ofs="+T)):T=0:k.push("ofs="+T);let j=!0;for(let X=0;X<c;X++){let F=w[X].g;const ee=w[X].map;if(F-=T,0>F)T=Math.max(0,w[X].g-100),j=!1;else try{Dc(ee,k,"req"+F+"_")}catch{h&&h(ee)}}if(j){h=k.join("&");break e}}}return r=r.i.splice(0,c),o.D=r,h}function ws(r){if(!r.g&&!r.u){r.Y=1;var o=r.Fa;Ct||Di(),Pt||(Ct(),Pt=!0),or.add(o,r),r.v=0}}function Pr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Lt(S(r.Fa,r),Ts(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Is(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Lt(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),In(this),Is(this))};function Rr(r){r.A!=null&&(u.clearTimeout(r.A),r.A=null)}function Is(r){r.g=new xe(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var o=Se(r.qa);H(o,"RID","rpc"),H(o,"SID",r.K),H(o,"AID",r.T),H(o,"CI",r.F?"0":"1"),!r.F&&r.ja&&H(o,"TO",r.ja),H(o,"TYPE","xmlhttp"),Ht(r,o),r.m&&r.o&&kr(o,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=_n(Se(o)),c.m=null,c.P=!0,Ki(c,r)}n.Za=function(){this.C!=null&&(this.C=null,In(this),Pr(this),re(19))};function Tn(r){r.C!=null&&(u.clearTimeout(r.C),r.C=null)}function Es(r,o){var c=null;if(r.g==o){Tn(r),Rr(r),r.g=null;var h=2}else if(br(r.h,o))c=o.D,es(r.h,o),h=1;else return;if(r.G!=0){if(o.o)if(h==1){c=o.m?o.m.length:0,o=Date.now()-o.F;var w=r.B;h=yr(),ne(h,new zi(h,c)),En(r)}else ws(r);else if(w=o.s,w==3||w==0&&0<o.X||!(h==1&&xc(r,o)||h==2&&Pr(r)))switch(c&&0<c.length&&(o=r.h,o.i=o.i.concat(c)),w){case 1:Xe(r,5);break;case 4:Xe(r,10);break;case 3:Xe(r,6);break;default:Xe(r,2)}}}function Ts(r,o){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*o}function Xe(r,o){if(r.j.info("Error code "+o),o==2){var c=S(r.fb,r),h=r.Xa;const w=!h;h=new Je(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||gn(h,"https"),_n(h),w?Pc(h.toString(),c):Rc(h.toString(),c)}else re(2);r.G=0,r.l&&r.l.sa(o),Ss(r),_s(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function Ss(r){if(r.G=0,r.ka=[],r.l){const o=ts(r.h);(o.length!=0||r.i.length!=0)&&(N(r.ka,o),N(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function bs(r,o,c){var h=c instanceof Je?Se(c):new Je(c);if(h.g!="")o&&(h.g=o+"."+h.g),mn(h,h.s);else{var w=u.location;h=w.protocol,o=o?o+"."+w.hostname:w.hostname,w=+w.port;var T=new Je(null);h&&gn(T,h),o&&(T.g=o),w&&mn(T,w),c&&(T.l=c),h=T}return c=r.D,o=r.ya,c&&o&&H(h,c,o),H(h,"VER",r.la),Ht(r,h),h}function As(r,o,c){if(o&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=r.Ca&&!r.pa?new W(new yn({eb:c})):new W(r.pa),o.Ha(r.J),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ks(){}n=ks.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ce(r,o){Z.call(this),this.g=new ms(o),this.l=r,this.h=o&&o.messageUrlParams||null,r=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(r?r["X-WebChannel-Content-Type"]=o.messageContentType:r={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(r?r["X-WebChannel-Client-Profile"]=o.va:r={"X-WebChannel-Client-Profile":o.va}),this.g.S=r,(r=o&&o.Sb)&&!D(r)&&(this.g.m=r),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!D(o)&&(this.g.D=o,r=this.h,r!==null&&o in r&&(r=this.h,o in r&&delete r[o])),this.j=new dt(this)}P(ce,Z),ce.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ce.prototype.close=function(){Cr(this.g)},ce.prototype.o=function(r){var o=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=pr(r),r=c);o.i.push(new vc(o.Ya++,r)),o.G==3&&En(o)},ce.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,ce.aa.N.call(this)};function Cs(r){mr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var o=r.__sm__;if(o){e:{for(const c in o){r=c;break e}r=void 0}(this.i=r)&&(r=this.i,o=o!==null&&r in o?o[r]:void 0),this.data=o}else this.data=r}P(Cs,mr);function Ps(){_r.call(this),this.status=1}P(Ps,_r);function dt(r){this.g=r}P(dt,ks),dt.prototype.ua=function(){ne(this.g,"a")},dt.prototype.ta=function(r){ne(this.g,new Cs(r))},dt.prototype.sa=function(r){ne(this.g,new Ps)},dt.prototype.ra=function(){ne(this.g,"b")},ce.prototype.send=ce.prototype.o,ce.prototype.open=ce.prototype.m,ce.prototype.close=ce.prototype.close,vr.NO_ERROR=0,vr.TIMEOUT=8,vr.HTTP_ERROR=6,_c.COMPLETE="complete",dc.EventType=Dt,Dt.OPEN="a",Dt.CLOSE="b",Dt.ERROR="c",Dt.MESSAGE="d",Z.prototype.listen=Z.prototype.K,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha}).apply(typeof kn<"u"?kn:typeof self<"u"?self:typeof window<"u"?window:{});const lo="@firebase/firestore",ho="4.9.1";/**
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
 */let an="12.2.0";/**
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
 */const It=new di("@firebase/firestore");function de(n,...e){if(It.logLevel<=V.DEBUG){const t=e.map(Ai);It.debug(`Firestore (${an}): ${n}`,...t)}}function Fa(n,...e){if(It.logLevel<=V.ERROR){const t=e.map(Ai);It.error(`Firestore (${an}): ${n}`,...t)}}function Pd(n,...e){if(It.logLevel<=V.WARN){const t=e.map(Ai);It.warn(`Firestore (${an}): ${n}`,...t)}}function Ai(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Zt(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Va(n,i,t)}function Va(n,e,t){let i=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Fa(i),new Error(i)}function Gt(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Va(e,s,i)}/**
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
 */const x={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class U extends Ie{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ja{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ie.UNAUTHENTICATED)))}shutdown(){}}class Nd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Dd{constructor(e){this.t=e,this.currentUser=ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Gt(this.o===void 0,42304);let i=this.i;const s=_=>this.i!==i?(i=this.i,t(_)):Promise.resolve();let a=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new qt,e.enqueueRetryable((()=>s(this.currentUser)))};const l=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await s(this.currentUser)}))},u=_=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((_=>u(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?u(_):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new qt)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Gt(typeof i.accessToken=="string",31837,{l:i}),new ja(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Gt(e===null||typeof e=="string",2055,{h:e}),new ie(e)}}class Od{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ld{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Od(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class uo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Md{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Gt(this.o===void 0,3512);const i=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>i(a)))};const s=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new uo(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Gt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Ud{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=xd(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<t&&(i+=e.charAt(s[a]%62))}return i}}function Ge(n,e){return n<e?-1:n>e?1:0}function Fd(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),a=e.charAt(i);if(s!==a)return Vr(s)===Vr(a)?Ge(s,a):Vr(s)?1:-1}return Ge(n.length,e.length)}const Vd=55296,jd=57343;function Vr(n){const e=n.charCodeAt(0);return e>=Vd&&e<=jd}/**
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
 */const fo="__name__";class ge{constructor(e,t,i){t===void 0?t=0:t>e.length&&Zt(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Zt(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ge.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ge?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const a=ge.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Ge(e.length,t.length)}static compareSegments(e,t){const i=ge.isNumericId(e),s=ge.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?ge.extractNumericId(e).compare(ge.extractNumericId(t)):Fd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bi.fromString(e.substring(4,e.length-2))}}class he extends ge{construct(e,t,i){return new he(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new U(x.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new he(t)}static emptyPath(){return new he([])}}const $d=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends ge{construct(e,t,i){return new Ze(e,t,i)}static isValidIdentifier(e){return $d.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fo}static keyField(){return new Ze([fo])}static fromServerFormat(e){const t=[];let i="",s=0;const a=()=>{if(i.length===0)throw new U(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let l=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new U(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[s+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new U(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=_,s+=2}else u==="`"?(l=!l,s++):u!=="."||l?(i+=u,s++):(a(),s++)}if(a(),l)throw new U(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(t)}static emptyPath(){return new Ze([])}}/**
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
 */class tt{constructor(e){this.path=e}static fromPath(e){return new tt(he.fromString(e))}static fromName(e){return new tt(he.fromString(e).popFirst(5))}static empty(){return new tt(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new tt(new he(e.slice()))}}function Bd(n,e,t,i){if(e===!0&&i===!0)throw new U(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Zt(12329,{type:typeof n})}function zd(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wd(n);throw new U(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function q(n,e){const t={typeString:n};return e&&(t.value=e),t}function cn(n,e){if(!Hd(n))throw new U(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const l=n[i];if(s&&typeof l!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${i}' field to equal '${a.value}'`;break}}if(t)throw new U(x.INVALID_ARGUMENT,t);return!0}/**
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
 */const po=-62135596800,go=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*go);return new me(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<po)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/go}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cn(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-po;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:q("string",me._jsonSchemaVersion),seconds:q("number"),nanoseconds:q("number")};function Gd(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new qd("Invalid base64 string: "+a):a}})(e);return new at(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a})(e);return new at(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Zr="(default)";class qn{constructor(e,t){this.projectId=e,this.database=t||Zr}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database===Zr}isEqual(e){return e instanceof qn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Kd{constructor(e,t=null,i=[],s=[],a=null,l="F",u=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=l,this.startAt=u,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Jd(n){return new Kd(n)}/**
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
 */new bi([4294967295,4294967295],0);/**
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
 */const Yd=1048576;function jr(){return typeof document<"u"?document:null}/**
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
 */class ki{constructor(e,t,i,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,a){const l=Date.now()+i,u=new ki(e,t,l,s,a);return u.start(i),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var _o,yo;(yo=_o||(_o={})).Ma="default",yo.Cache="cache";/**
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
 */const $a="firestore.googleapis.com",wo=!0;class Io{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$a,this.ssl=wo}else this.host=e.host,this.ssl=e.ssl??wo;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yd)throw new U(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zd(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Io({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Io(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Rd;switch(i.type){case"firstParty":return new Ld(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new U(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=vo.get(t);i&&(de("ComponentProvider","Removing Datastore"),vo.delete(t),i.terminate())})(this),Promise.resolve()}}function Ha(n,e,t,i={}){n=zd(n,Ba);const s=ct(e),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&(hi(`https://${u}`),ui("Firestore",!0)),a.host!==$a&&a.host!==u&&Pd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:u,ssl:s,emulatorOptions:i};if(!it(_,l)&&(n._setSettings(_),i.mockUserToken)){let g,b;if(typeof i.mockUserToken=="string")g=i.mockUserToken,b=ie.MOCK_USER;else{g=el(i.mockUserToken,n._app?.options.projectId);const E=i.mockUserToken.sub||i.mockUserToken.user_id;if(!E)throw new U(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new ie(E)}n._authCredentials=new Nd(new ja(g,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class _e{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}toJSON(){return{type:_e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(cn(t,_e._jsonSchema))return new _e(e,i||null,new tt(he.fromString(t.referencePath)))}}_e._jsonSchemaVersion="firestore/documentReference/1.0",_e._jsonSchema={type:q("string",_e._jsonSchemaVersion),referencePath:q("string")};class Pi extends Ci{constructor(e,t,i){super(e,t,Jd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new tt(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="AsyncQueue";class To{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qd(this,"async_queue_retry"),this._c=()=>{const i=jr();i&&de(Eo,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=jr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new qt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Gd(e))throw e;de(Eo,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Fa("INTERNAL UNHANDLED ERROR: ",So(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=ki.createAndSchedule(this,e,t,i,(a=>this.hc(a)));return this.tc.push(s),s}uc(){this.nc&&Zt(47125,{Pc:So(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function So(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ef extends Ba{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new To,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new To(e),this._firestoreClient=void 0,await e}}}function tf(n,e){const t=typeof n=="object"?n:pi(),i=typeof n=="string"?n:Zr,s=tr(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=Qo("firestore");a&&Ha(s,...a)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ke(at.fromBase64String(e))}catch(t){throw new U(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ke(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cn(e,ke._jsonSchema))return ke.fromBase64String(e.bytes)}}ke._jsonSchemaVersion="firestore/bytes/1.0",ke._jsonSchema={type:q("string",ke._jsonSchemaVersion),bytes:q("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nt._jsonSchemaVersion}}static fromJSON(e){if(cn(e,nt._jsonSchema))return new nt(e.latitude,e.longitude)}}nt._jsonSchemaVersion="firestore/geoPoint/1.0",nt._jsonSchema={type:q("string",nt._jsonSchemaVersion),latitude:q("number"),longitude:q("number")};/**
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
 */class rt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cn(e,rt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new rt(e.vectorValues);throw new U(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rt._jsonSchemaVersion="firestore/vectorValue/1.0",rt._jsonSchema={type:q("string",rt._jsonSchemaVersion),vectorValues:q("object")};const nf=new RegExp("[~\\*/\\[\\]]");function rf(n,e,t){if(e.search(nf)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Wa(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function bo(n,e,t,i,s){let a=`Function ${e}() called with invalid data`;a+=". ";let l="";return new U(x.INVALID_ARGUMENT,a+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,i,s,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ga("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sf extends za{data(){return super.data()}}function Ga(n,e){return typeof e=="string"?rf(n,e):e instanceof Wa?e._internalPath:e._delegate._internalPath}class Cn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _t extends za{constructor(e,t,i,s,a,l){super(e,t,i,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Ga("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_t._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_t._jsonSchemaVersion="firestore/documentSnapshot/1.0",_t._jsonSchema={type:q("string",_t._jsonSchemaVersion),bundleSource:q("string","DocumentSnapshot"),bundleName:q("string"),bundle:q("string")};class xn extends _t{data(e={}){return super.data(e)}}class Kt{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Cn(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new xn(this._firestore,this._userDataWriter,i.key,i,new Cn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map((u=>{const _=new xn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Cn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:_,oldIndex:-1,newIndex:l++}}))}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>a||u.type!==3)).map((u=>{const _=new xn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Cn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,b=-1;return u.type!==0&&(g=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),b=l.indexOf(u.doc.key)),{type:of(u.type),doc:_,oldIndex:g,newIndex:b}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ud.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function of(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Zt(61501,{type:n})}}Kt._jsonSchemaVersion="firestore/querySnapshot/1.0",Kt._jsonSchema={type:q("string",Kt._jsonSchemaVersion),bundleSource:q("string","QuerySnapshot"),bundleName:q("string"),bundle:q("string")};(function(e,t=!0){(function(s){an=s})(Tt),st(new ze("firestore",((i,{instanceIdentifier:s,options:a})=>{const l=i.getProvider("app").getImmediate(),u=new ef(new Dd(i.getProvider("auth-internal")),new Md(l,i.getProvider("app-check-internal")),(function(g,b){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new U(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(g.options.projectId,b)})(l,s),l);return a={useFetchStreams:t,...a},u._setSettings(a),u}),"PUBLIC").setMultipleInstances(!0)),ye(lo,ho,e),ye(lo,ho,"esm2020")})();/**
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
 */const af="type.googleapis.com/google.protobuf.Int64Value",cf="type.googleapis.com/google.protobuf.UInt64Value";function qa(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Kn(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Kn(e));if(typeof n=="function"||typeof n=="object")return qa(n,e=>Kn(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Et(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case af:case cf:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Et(e)):typeof n=="function"||typeof n=="object"?qa(n,e=>Et(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ao={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Ie{constructor(e,t,i){super(`${Ri}/${e}`,t||""),this.details=i,Object.setPrototypeOf(this,ae.prototype)}}function lf(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Jn(n,e){let t=lf(n),i=t,s;try{const a=e&&e.error;if(a){const l=a.status;if(typeof l=="string"){if(!Ao[l])return new ae("internal","internal");t=Ao[l],i=l}const u=a.message;typeof u=="string"&&(i=u),s=a.details,s!==void 0&&(s=Et(s))}}catch{}return t==="ok"?null:new ae(t,i,s)}/**
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
 */const ei="us-central1",uf=/^data: (.*?)(?:\n|$)/;function df(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new ae("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class ff{constructor(e,t,i,s,a=ei,l=(...u)=>fetch(...u)){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new hf(e,t,i,s),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(a);this.customDomain=u.origin+(u.pathname==="/"?"":u.pathname),this.region=ei}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function pf(n,e,t){const i=ct(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(hi(n.emulatorOrigin+"/backends"),ui("Functions",!0))}function gf(n,e,t){const i=s=>_f(n,e,s,{});return i.stream=(s,a)=>vf(n,e,s,a),i}function Ka(n){return n.emulatorOrigin&&ct(n.emulatorOrigin)?"include":void 0}async function mf(n,e,t,i,s){t["Content-Type"]="application/json";let a;try{a=await i(n,{method:"POST",body:JSON.stringify(e),headers:t,credentials:Ka(s)})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}async function Ja(n,e){const t={},i=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return i.authToken&&(t.Authorization="Bearer "+i.authToken),i.messagingToken&&(t["Firebase-Instance-ID-Token"]=i.messagingToken),i.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=i.appCheckToken),t}function _f(n,e,t,i){const s=n._url(e);return yf(n,s,t,i)}async function yf(n,e,t,i){t=Kn(t);const s={data:t},a=await Ja(n,i),l=i.timeout||7e4,u=df(l),_=await Promise.race([mf(e,s,a,n.fetchImpl,n),u.promise,n.cancelAllRequests]);if(u.cancel(),!_)throw new ae("cancelled","Firebase Functions instance was deleted.");const g=Jn(_.status,_.json);if(g)throw g;if(!_.json)throw new ae("internal","Response is not valid JSON object.");let b=_.json.data;if(typeof b>"u"&&(b=_.json.result),typeof b>"u")throw new ae("internal","Response is missing data field.");return{data:Et(b)}}function vf(n,e,t,i){const s=n._url(e);return wf(n,s,t,i||{})}async function wf(n,e,t,i){t=Kn(t);const s={data:t},a=await Ja(n,i);a["Content-Type"]="application/json",a.Accept="text/event-stream";let l;try{l=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:a,signal:i?.signal,credentials:Ka(n)})}catch(S){if(S instanceof Error&&S.name==="AbortError"){const P=new ae("cancelled","Request was cancelled.");return{data:Promise.reject(P),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(P)}}}}}}const C=Jn(0,null);return{data:Promise.reject(C),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(C)}}}}}}let u,_;const g=new Promise((S,C)=>{u=S,_=C});i?.signal?.addEventListener("abort",()=>{const S=new ae("cancelled","Request was cancelled.");_(S)});const b=l.body.getReader(),E=If(b,u,_,i?.signal);return{stream:{[Symbol.asyncIterator](){const S=E.getReader();return{async next(){const{value:C,done:P}=await S.read();return{value:C,done:P}},async return(){return await S.cancel(),{done:!0,value:void 0}}}}},data:g}}function If(n,e,t,i){const s=(l,u)=>{const _=l.match(uf);if(!_)return;const g=_[1];try{const b=JSON.parse(g);if("result"in b){e(Et(b.result));return}if("message"in b){u.enqueue(Et(b.message));return}if("error"in b){const E=Jn(0,b);u.error(E),t(E);return}}catch(b){if(b instanceof ae){u.error(b),t(b);return}}},a=new TextDecoder;return new ReadableStream({start(l){let u="";return _();async function _(){if(i?.aborted){const g=new ae("cancelled","Request was cancelled");return l.error(g),t(g),Promise.resolve()}try{const{value:g,done:b}=await n.read();if(b){u.trim()&&s(u.trim(),l),l.close();return}if(i?.aborted){const S=new ae("cancelled","Request was cancelled");l.error(S),t(S),await n.cancel();return}u+=a.decode(g,{stream:!0});const E=u.split(`
`);u=E.pop()||"";for(const S of E)S.trim()&&s(S.trim(),l);return _()}catch(g){const b=g instanceof ae?g:Jn(0,null);l.error(b),t(b)}}},cancel(){return n.cancel()}})}const ko="@firebase/functions",Co="0.13.1";/**
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
 */const Ef="auth-internal",Tf="app-check-internal",Sf="messaging-internal";function bf(n){const e=(t,{instanceIdentifier:i})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider(Ef),l=t.getProvider(Sf),u=t.getProvider(Tf);return new ff(s,a,l,u,i)};st(new ze(Ri,e,"PUBLIC").setMultipleInstances(!0)),ye(ko,Co,n),ye(ko,Co,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n=pi(),e=ei){const i=tr(pe(n),Ri).getImmediate({identifier:e}),s=Qo("functions");return s&&Xa(i,...s),i}function Xa(n,e,t){pf(pe(n),e,t)}function ir(n,e,t){return gf(pe(n),e)}bf();const Ni=typeof __firebase_config<"u";let yt,ti=null;Ni?(yt=JSON.parse(__firebase_config),ti=typeof __initial_auth_token<"u"?__initial_auth_token:null):yt={apiKey:"AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",authDomain:"my-new-firebase-project-94e22.firebaseapp.com",projectId:"my-new-firebase-project-94e22",storageBucket:"my-new-firebase-project-94e22.firebasestorage.app",messagingSenderId:"210118924526",appId:"1:210118924526:web:c88671740e8b13e1e7fbff"};let Pn=null,vt=null,ni=null,Xn=null;yt&&yt.apiKey?(Pn=ra(yt),vt=kd(Pn),ni=tf(Pn),Xn=Af(Pn),Ni&&(async()=>{try{ti?(await fu(vt,ti),console.log("Firebase: Signed in with custom token.")):(await cu(vt),console.warn("Firebase: Signed in anonymously (no custom token)."))}catch(e){console.error("Firebase Authentication Failed:",e)}})()):console.error("Firebase initialization failed: Configuration (apiKey) is missing.");const Jt=vt,kf=new Ae,sr=Xn;if(location.hostname==="localhost"&&!Ni&&vt&&ni&&Xn){const n=yt.apiKey==="demo-api-key";Ha(ni,"localhost",8080),Xa(Xn,"localhost",5001),n&&Ea(vt,"http://localhost:9099")}var Yn,z,$r,Po,ri=0,Ya=[],G=$,Ro=G.__b,No=G.__r,Do=G.diffed,Oo=G.__c,Lo=G.unmount,Mo=G.__;function Qa(n,e){G.__h&&G.__h(z,n,ri||e),ri=0;var t=z.__H||(z.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function K(n){return ri=1,Cf(Za,n)}function Cf(n,e,t){var i=Qa(Yn++,2);if(i.t=n,!i.__c&&(i.__=[Za(void 0,e),function(u){var _=i.__N?i.__N[0]:i.__[0],g=i.t(_,u);_!==g&&(i.__N=[g,i.__[1]],i.__c.setState({}))}],i.__c=z,!z.__f)){var s=function(u,_,g){if(!i.__c.__H)return!0;var b=i.__c.__H.__.filter(function(S){return!!S.__c});if(b.every(function(S){return!S.__N}))return!a||a.call(this,u,_,g);var E=i.__c.props!==u;return b.forEach(function(S){if(S.__N){var C=S.__[0];S.__=S.__N,S.__N=void 0,C!==S.__[0]&&(E=!0)}}),a&&a.call(this,u,_,g)||E};z.__f=!0;var a=z.shouldComponentUpdate,l=z.componentWillUpdate;z.componentWillUpdate=function(u,_,g){if(this.__e){var b=a;a=void 0,s(u,_,g),a=b}l&&l.call(this,u,_,g)},z.shouldComponentUpdate=s}return i.__N||i.__}function At(n,e){var t=Qa(Yn++,3);!G.__s&&Nf(t.__H,e)&&(t.__=n,t.u=e,z.__H.__h.push(t))}function Pf(){for(var n;n=Ya.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Un),n.__H.__h.forEach(ii),n.__H.__h=[]}catch(e){n.__H.__h=[],G.__e(e,n.__v)}}G.__b=function(n){z=null,Ro&&Ro(n)},G.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Mo&&Mo(n,e)},G.__r=function(n){No&&No(n),Yn=0;var e=(z=n.__c).__H;e&&($r===z?(e.__h=[],z.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(Un),e.__h.forEach(ii),e.__h=[],Yn=0)),$r=z},G.diffed=function(n){Do&&Do(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ya.push(e)!==1&&Po===G.requestAnimationFrame||((Po=G.requestAnimationFrame)||Rf)(Pf)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),$r=z=null},G.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Un),t.__h=t.__h.filter(function(i){return!i.__||ii(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],G.__e(i,t.__v)}}),Oo&&Oo(n,e)},G.unmount=function(n){Lo&&Lo(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{Un(i)}catch(s){e=s}}),t.__H=void 0,e&&G.__e(e,t.__v))};var xo=typeof requestAnimationFrame=="function";function Rf(n){var e,t=function(){clearTimeout(i),xo&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);xo&&(e=requestAnimationFrame(t))}function Un(n){var e=z,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),z=e}function ii(n){var e=z;n.__c=n.__(),z=e}function Nf(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function Za(n,e){return typeof e=="function"?e(n):e}function Df(){const[n,e]=K(null);At(()=>{const s=Aa(Jt,e);return()=>s()},[]);async function t(){try{await xu(Jt,kf)}catch(s){console.error("Login failed:",s.message)}}async function i(){await mu(Jt)}return n?A("div",{class:"flex flex-col items-center justify-center h-screen space-y-4",children:[n.photoURL&&A("img",{src:n.photoURL,alt:"Profile",class:"rounded-full w-16 h-16"}),A("p",{class:"text-lg",children:["Hello, ",n.displayName||n.email,"!"]}),A("button",{onClick:i,class:"bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800",children:"Sign Out"})]}):A("div",{class:"flex flex-col items-center justify-center h-screen space-y-4",children:[A("h2",{class:"text-2xl font-bold",children:"Welcome to Procrastinot"}),A("button",{onClick:t,class:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Sign in with Google"})]})}const Of=ir(sr,"getRooms"),Lf=ir(sr,"createRoom"),Mf=ir(sr,"joinRoom"),xf=ir(sr,"startSession"),qe={getRooms:async()=>(await Of()).data,createRoom:async n=>(await Lf(n)).data,joinRoom:async n=>(await Mf({inviteCode:n})).data,startSession:async(n,e)=>(await xf({roomId:n,mode:e})).data,getFriends:async n=>(console.warn("MOCK: getFriends using placeholder data."),[{id:"f1",name:"Alex Focus",status:"in-session"},{id:"f2",name:"Ben Chill",status:"offline"}]),getFriendActivity:async n=>(console.warn("MOCK: getFriendActivity using placeholder data."),{completedSessions:5,nudgesReceived:2})};function Uf({onRoomCreated:n}){console.log("CreateRoom component rendering");const[e,t]=K("");async function i(s){if(s.preventDefault(),!!e.trim())try{const a=await qe.createRoom({name:e});typeof n=="function"&&n(a),t("")}catch(a){console.error("Failed to create room:",a.message)}}return A("form",{onSubmit:i,class:"flex items-center space-x-2",children:[A("input",{type:"text",value:e,onInput:s=>t(s.target.value),placeholder:"New room name",class:"border px-2 py-1 rounded"}),A("button",{type:"submit",class:"bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700",children:"Create"})]})}function Ff({onRoomJoined:n}){console.log("JoinRoom component rendering");const[e,t]=K("");async function i(s){if(s.preventDefault(),!!e.trim())try{const a=await qe.joinRoom(e);n(a),t("")}catch(a){console.error("Failed to join room:",a.message)}}return A("form",{onSubmit:i,class:"flex items-center space-x-2",children:[A("input",{type:"text",value:e,onInput:s=>t(s.target.value),placeholder:"Enter invite code",class:"border px-2 py-1 rounded"}),A("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700",children:"Join"})]})}function Vf({roomId:n,onSessionStarted:e}){console.log("StartSession component rendering");const[t,i]=K("pomodoro");async function s(){try{const a=await qe.startSession(n,t);e(a)}catch(a){console.error("Failed to start session:",a.message)}}return A("div",{class:"flex items-center space-x-2",children:[A("select",{value:t,onChange:a=>i(a.target.value),class:"border px-2 py-1 rounded",children:[A("option",{value:"pomodoro",children:"Pomodoro (25 min)"}),A("option",{value:"short_break",children:"Short Break (5 min)"}),A("option",{value:"long_break",children:"Long Break (15 min)"})]}),A("button",{onClick:s,class:"bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700",children:"Start Session"})]})}function jf({roomId:n,sessionId:e,userId:t}){const[i,s]=K(""),[a,l]=K(!1),[u,_]=K(null);async function g(b){if(b.preventDefault(),!!i.trim()){l(!0),_(null);try{await qe.trackProgress(n,e,t,{task:i}),s("")}catch(E){_(E.message)}finally{l(!1)}}}return A("form",{onSubmit:g,class:"mt-4",children:[A("h4",{class:"font-semibold mb-2",children:"Track Your Progress"}),A("div",{class:"flex items-center space-x-2",children:[A("input",{type:"text",value:i,onInput:b=>s(b.target.value),placeholder:"Enter a completed task",class:"border px-2 py-1 rounded w-full",disabled:a}),A("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400",disabled:a,children:a?"Submitting...":"Submit"})]}),u&&A("p",{class:"text-red-500 mt-2",children:["Error: ",u]})]})}function $f({room:n,user:e}){return n?A("div",{class:"p-4 border rounded-lg shadow-sm",children:[A("h3",{class:"text-xl font-bold mb-2",children:n.name}),A("p",{children:[A("strong",{children:"Mode:"})," ",n.mode]}),A("p",{children:[A("strong",{children:"Invite Code:"})," ",A("span",{class:"font-mono bg-gray-200 p-1 rounded",children:n.inviteCode})]}),A(jf,{roomId:n.id,sessionId:"s_placeholder_123",userId:e.uid})]}):A("div",{children:"Select a room to see details."})}function Bf({user:n}){const[e,t]=K([]),[i,s]=K(null),a=()=>{qe.getRooms().then(g=>{Array.isArray(g)?t(g):console.error("API did not return an array for rooms:",g)}).catch(console.error)};At(()=>{a()},[]);const l=g=>{const b=e.findIndex(E=>E.id===g.id);if(b>-1){const E=[...e];E[b]=g,t(E)}else t([...e,g])},u=g=>{console.log("Session started:",g),alert(`Session started with mode: ${g.mode}`)},_=e.find(g=>g.id===i);return A("div",{class:"container mx-auto p-4",children:[A("div",{class:"flex space-x-4 mb-6",children:[A(Uf,{onRoomCreated:l}),A(Ff,{onRoomJoined:l})]}),A("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[A("div",{children:[A("h3",{class:"text-xl font-semibold mb-3",children:"My Rooms"}),A("ul",{class:"space-y-3",children:e.map(g=>A("li",{class:`p-4 border rounded-lg flex justify-between items-center shadow-sm cursor-pointer hover:bg-gray-100 ${i===g.id?"bg-gray-200":""}`,onClick:()=>s(g.id),children:[A("span",{class:"font-medium",children:g.name}),A(Vf,{roomId:g.id,onSessionStarted:u})]},g.id))})]}),A("div",{children:[A("h3",{class:"text-xl font-semibold mb-3",children:"Room Details"}),A($f,{room:_,user:n})]})]})]})}function Hf({activePage:n,setActivePage:e}){return A("nav",{class:"bg-gray-800 text-white p-4",children:A("ul",{class:"flex space-x-4",children:["Rooms","Friends","Accountability"].map(i=>A("li",{children:A("a",{href:"#",class:`hover:text-gray-300 ${n===i.toLowerCase()?"font-bold":""}`,onClick:s=>{s.preventDefault(),e(i.toLowerCase())},children:i})},i))})})}function Wf({user:n}){const[e,t]=K([]),[i,s]=K(!0),[a,l]=K(null);return At(()=>{if(console.log("FriendsPage user:",n),!!n){s(!0);try{qe.getFriends(n.uid).then(u=>{Array.isArray(u)?t(u):t([]),l(null)}).catch(u=>{l(u.message),t([])}).finally(()=>s(!1))}catch(u){l(u.message),s(!1)}}},[n]),A("div",{class:"p-4",children:[A("h2",{class:"text-2xl font-bold mb-4",children:"Focus Friends"}),i&&A("div",{children:"Loading friends..."}),a&&A("div",{class:"text-red-500",children:["Error: ",a]}),!i&&!a&&A("ul",{class:"space-y-3",children:e.map(u=>A("li",{class:"p-4 border rounded-lg flex justify-between items-center shadow-sm",children:[A("span",{class:"font-medium",children:u.name}),A("span",{class:`px-2 py-1 text-sm rounded-full ${u.status==="in-session"?"bg-green-200 text-green-800":"bg-gray-200 text-gray-800"}`,children:u.status})]},u.id))})]})}function zf({friend:n}){const[e,t]=K(null),[i,s]=K(!0);return At(()=>{qe.getFriendActivity(n.id).then(a=>{t(a),s(!1)})},[n.id]),A("li",{class:"p-4 border rounded-lg shadow-sm",children:[A("h3",{class:"font-bold",children:n.name}),i?A("p",{children:"Loading progress..."}):A("div",{class:"mt-2",children:[A("p",{children:["Completed Sessions: ",e.completedSessions]}),A("p",{children:["Nudges Received: ",e.nudgesReceived]}),A("button",{class:"mt-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600",children:"Nudge"})]})]})}function Gf({user:n}){const[e,t]=K([]),[i,s]=K(!0),[a,l]=K(null);return At(()=>{n&&(s(!0),qe.getFriends(n.uid).then(u=>{Array.isArray(u)?t(u):t([]),l(null)}).catch(u=>{l(u.message),t([])}).finally(()=>s(!1)))},[n]),A("div",{class:"p-4",children:[A("h2",{class:"text-2xl font-bold mb-4",children:"Peer Progress"}),i&&A("div",{children:"Loading friends..."}),a&&A("div",{class:"text-red-500",children:["Error: ",a]}),!i&&!a&&A("ul",{class:"space-y-4",children:e.map(u=>A(zf,{friend:u},u.id))})]})}function qf(){const[n,e]=K(null),[t,i]=K(!0),[s,a]=K("rooms");return At(()=>{if(!Jt)return console.error("Firebase Auth instance is null. Skipping authentication listeners."),i(!1),()=>{};const l=Aa(Jt,u=>{e(u),i(!1)});return()=>l()},[]),t?A("div",{children:"Loading..."}):A("main",{children:n?A("div",{children:[A(Hf,{activePage:s,setActivePage:a}),s==="rooms"&&A(Bf,{user:n}),s==="friends"&&A(Wf,{user:n}),s==="accountability"&&A(Gf,{user:n})]}):A(Df,{})})}Hc(A(qf,{}),document.getElementById("app"));
