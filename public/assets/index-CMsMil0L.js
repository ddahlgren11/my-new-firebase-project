(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var an,$,Jo,tt,Vs,Xo,Yo,Qo,di,qr,Kr,Zo,nn={},ea=[],el=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,cn=Array.isArray;function ve(n,e){for(var t in e)n[t]=e[t];return n}function fi(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function rt(n,e,t){var i,s,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?s=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?an.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(a in n.defaultProps)l[a]===void 0&&(l[a]=n.defaultProps[a]);return Xt(n,l,i,s,null)}function Xt(n,e,t,i,s){var a={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Jo,__i:-1,__u:0};return s==null&&$.vnode!=null&&$.vnode(a),a}function ln(n){return n.children}function Hn(n,e){this.props=n,this.context=e}function At(n,e){if(e==null)return n.__?At(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?At(n):null}function ta(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return ta(n)}}function Jr(n){(!n.__d&&(n.__d=!0)&&tt.push(n)&&!Xn.__r++||Vs!=$.debounceRendering)&&((Vs=$.debounceRendering)||Xo)(Xn)}function Xn(){for(var n,e,t,i,s,a,l,d=1;tt.length;)tt.length>d&&tt.sort(Yo),n=tt.shift(),d=tt.length,n.__d&&(t=void 0,s=(i=(e=n).__v).__e,a=[],l=[],e.__P&&((t=ve({},i)).__v=i.__v+1,$.vnode&&$.vnode(t),pi(e.__P,t,i,e.__n,e.__P.namespaceURI,32&i.__u?[s]:null,a,s??At(i),!!(32&i.__u),l),t.__v=i.__v,t.__.__k[t.__i]=t,sa(a,t,l),t.__e!=s&&ta(t)));Xn.__r=0}function na(n,e,t,i,s,a,l,d,m,y,A){var v,E,k,x,P,R,N,D=i&&i.__k||ea,j=e.length;for(m=tl(t,e,D,m,j),v=0;v<j;v++)(k=t.__k[v])!=null&&(E=k.__i==-1?nn:D[k.__i]||nn,k.__i=v,R=pi(n,k,E,s,a,l,d,m,y,A),x=k.__e,k.ref&&E.ref!=k.ref&&(E.ref&&gi(E.ref,null,k),A.push(k.ref,k.__c||x,k)),P==null&&x!=null&&(P=x),(N=!!(4&k.__u))||E.__k===k.__k?m=ra(k,m,n,N):typeof k.type=="function"&&R!==void 0?m=R:x&&(m=x.nextSibling),k.__u&=-7);return t.__e=P,m}function tl(n,e,t,i,s){var a,l,d,m,y,A=t.length,v=A,E=0;for(n.__k=new Array(s),a=0;a<s;a++)(l=e[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(m=a+E,(l=n.__k[a]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?Xt(null,l,null,null,null):cn(l)?Xt(ln,{children:l},null,null,null):l.constructor==null&&l.__b>0?Xt(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=n,l.__b=n.__b+1,d=null,(y=l.__i=nl(l,t,m,v))!=-1&&(v--,(d=t[y])&&(d.__u|=2)),d==null||d.__v==null?(y==-1&&(s>A?E--:s<A&&E++),typeof l.type!="function"&&(l.__u|=4)):y!=m&&(y==m-1?E--:y==m+1?E++:(y>m?E--:E++,l.__u|=4))):n.__k[a]=null;if(v)for(a=0;a<A;a++)(d=t[a])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=At(d)),aa(d,d));return i}function ra(n,e,t,i){var s,a;if(typeof n.type=="function"){for(s=n.__k,a=0;s&&a<s.length;a++)s[a]&&(s[a].__=n,e=ra(s[a],e,t,i));return e}n.__e!=e&&(i&&(e&&n.type&&!e.parentNode&&(e=At(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ia(n,e){return e=e||[],n==null||typeof n=="boolean"||(cn(n)?n.some(function(t){ia(t,e)}):e.push(n)),e}function nl(n,e,t,i){var s,a,l,d=n.key,m=n.type,y=e[t],A=y!=null&&(2&y.__u)==0;if(y===null&&n.key==null||A&&d==y.key&&m==y.type)return t;if(i>(A?1:0)){for(s=t-1,a=t+1;s>=0||a<e.length;)if((y=e[l=s>=0?s--:a++])!=null&&(2&y.__u)==0&&d==y.key&&m==y.type)return l}return-1}function $s(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||el.test(e)?t:t+"px"}function Mn(n,e,t,i,s){var a,l;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||$s(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||$s(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Qo,"$1")),l=e.toLowerCase(),e=l in n||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+a]=t,t?i?t.u=i.u:(t.u=di,n.addEventListener(e,a?Kr:qr,a)):n.removeEventListener(e,a?Kr:qr,a);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Bs(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=di++;else if(e.t<t.u)return;return t($.event?$.event(e):e)}}}function pi(n,e,t,i,s,a,l,d,m,y){var A,v,E,k,x,P,R,N,D,j,H,ie,q,b,p,f,_,w=e.type;if(e.constructor!=null)return null;128&t.__u&&(m=!!(32&t.__u),a=[d=e.__e=t.__e]),(A=$.__b)&&A(e);e:if(typeof w=="function")try{if(N=e.props,D="prototype"in w&&w.prototype.render,j=(A=w.contextType)&&i[A.__c],H=A?j?j.props.value:A.__:i,t.__c?R=(v=e.__c=t.__c).__=v.__E:(D?e.__c=v=new w(N,H):(e.__c=v=new Hn(N,H),v.constructor=w,v.render=il),j&&j.sub(v),v.props=N,v.state||(v.state={}),v.context=H,v.__n=i,E=v.__d=!0,v.__h=[],v._sb=[]),D&&v.__s==null&&(v.__s=v.state),D&&w.getDerivedStateFromProps!=null&&(v.__s==v.state&&(v.__s=ve({},v.__s)),ve(v.__s,w.getDerivedStateFromProps(N,v.__s))),k=v.props,x=v.state,v.__v=e,E)D&&w.getDerivedStateFromProps==null&&v.componentWillMount!=null&&v.componentWillMount(),D&&v.componentDidMount!=null&&v.__h.push(v.componentDidMount);else{if(D&&w.getDerivedStateFromProps==null&&N!==k&&v.componentWillReceiveProps!=null&&v.componentWillReceiveProps(N,H),!v.__e&&v.shouldComponentUpdate!=null&&v.shouldComponentUpdate(N,v.__s,H)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(v.props=N,v.state=v.__s,v.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(T){T&&(T.__=e)}),ie=0;ie<v._sb.length;ie++)v.__h.push(v._sb[ie]);v._sb=[],v.__h.length&&l.push(v);break e}v.componentWillUpdate!=null&&v.componentWillUpdate(N,v.__s,H),D&&v.componentDidUpdate!=null&&v.__h.push(function(){v.componentDidUpdate(k,x,P)})}if(v.context=H,v.props=N,v.__P=n,v.__e=!1,q=$.__r,b=0,D){for(v.state=v.__s,v.__d=!1,q&&q(e),A=v.render(v.props,v.state,v.context),p=0;p<v._sb.length;p++)v.__h.push(v._sb[p]);v._sb=[]}else do v.__d=!1,q&&q(e),A=v.render(v.props,v.state,v.context),v.state=v.__s;while(v.__d&&++b<25);v.state=v.__s,v.getChildContext!=null&&(i=ve(ve({},i),v.getChildContext())),D&&!E&&v.getSnapshotBeforeUpdate!=null&&(P=v.getSnapshotBeforeUpdate(k,x)),f=A,A!=null&&A.type===ln&&A.key==null&&(f=oa(A.props.children)),d=na(n,cn(f)?f:[f],e,t,i,s,a,l,d,m,y),v.base=e.__e,e.__u&=-161,v.__h.length&&l.push(v),R&&(v.__E=v.__=null)}catch(T){if(e.__v=null,m||a!=null)if(T.then){for(e.__u|=m?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;a[a.indexOf(d)]=null,e.__e=d}else{for(_=a.length;_--;)fi(a[_]);Xr(e)}else e.__e=t.__e,e.__k=t.__k,T.then||Xr(e);$.__e(T,e,t)}else a==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):d=e.__e=rl(t.__e,e,t,i,s,a,l,m,y);return(A=$.diffed)&&A(e),128&e.__u?void 0:d}function Xr(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(Xr)}function sa(n,e,t){for(var i=0;i<t.length;i++)gi(t[i],t[++i],t[++i]);$.__c&&$.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(a){a.call(s)})}catch(a){$.__e(a,s.__v)}})}function oa(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:cn(n)?n.map(oa):ve({},n)}function rl(n,e,t,i,s,a,l,d,m){var y,A,v,E,k,x,P,R=t.props,N=e.props,D=e.type;if(D=="svg"?s="http://www.w3.org/2000/svg":D=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),a!=null){for(y=0;y<a.length;y++)if((k=a[y])&&"setAttribute"in k==!!D&&(D?k.localName==D:k.nodeType==3)){n=k,a[y]=null;break}}if(n==null){if(D==null)return document.createTextNode(N);n=document.createElementNS(s,D,N.is&&N),d&&($.__m&&$.__m(e,a),d=!1),a=null}if(D==null)R===N||d&&n.data==N||(n.data=N);else{if(a=a&&an.call(n.childNodes),R=t.props||nn,!d&&a!=null)for(R={},y=0;y<n.attributes.length;y++)R[(k=n.attributes[y]).name]=k.value;for(y in R)if(k=R[y],y!="children"){if(y=="dangerouslySetInnerHTML")v=k;else if(!(y in N)){if(y=="value"&&"defaultValue"in N||y=="checked"&&"defaultChecked"in N)continue;Mn(n,y,null,k,s)}}for(y in N)k=N[y],y=="children"?E=k:y=="dangerouslySetInnerHTML"?A=k:y=="value"?x=k:y=="checked"?P=k:d&&typeof k!="function"||R[y]===k||Mn(n,y,k,R[y],s);if(A)d||v&&(A.__html==v.__html||A.__html==n.innerHTML)||(n.innerHTML=A.__html),e.__k=[];else if(v&&(n.innerHTML=""),na(e.type=="template"?n.content:n,cn(E)?E:[E],e,t,i,D=="foreignObject"?"http://www.w3.org/1999/xhtml":s,a,l,a?a[0]:t.__k&&At(t,0),d,m),a!=null)for(y=a.length;y--;)fi(a[y]);d||(y="value",D=="progress"&&x==null?n.removeAttribute("value"):x!=null&&(x!==n[y]||D=="progress"&&!x||D=="option"&&x!=R[y])&&Mn(n,y,x,R[y],s),y="checked",P!=null&&P!=n[y]&&Mn(n,y,P,R[y],s))}return n}function gi(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){$.__e(s,t)}}function aa(n,e,t){var i,s;if($.unmount&&$.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||gi(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){$.__e(a,e)}i.base=i.__P=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&aa(i[s],e,t||typeof n.type!="function");t||fi(n.__e),n.__c=n.__=n.__e=void 0}function il(n,e,t){return this.constructor(n,t)}function sl(n,e,t){var i,s,a,l;e==document&&(e=document.documentElement),$.__&&$.__(n,e),s=(i=!1)?null:e.__k,a=[],l=[],pi(e,n=e.__k=rt(ln,null,[n]),s||nn,nn,e.namespaceURI,s?null:e.firstChild?an.call(e.childNodes):null,a,s?s.__e:e.firstChild,i,l),sa(a,n,l)}function Hs(n,e,t){var i,s,a,l,d=ve({},n.props);for(a in n.type&&n.type.defaultProps&&(l=n.type.defaultProps),e)a=="key"?i=e[a]:a=="ref"?s=e[a]:d[a]=e[a]===void 0&&l!=null?l[a]:e[a];return arguments.length>2&&(d.children=arguments.length>3?an.call(arguments,2):t),Xt(n.type,d,i||n.key,s||n.ref,null)}function ca(n){function e(t){var i,s;return this.getChildContext||(i=new Set,(s={})[e.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(a){this.props.value!=a.value&&i.forEach(function(l){l.__e=!0,Jr(l)})},this.sub=function(a){i.add(a);var l=a.componentWillUnmount;a.componentWillUnmount=function(){i&&i.delete(a),l&&l.call(a)}}),t.children}return e.__c="__cC"+Zo++,e.__=n,e.Provider=e.__l=(e.Consumer=function(t,i){return t.children(i)}).contextType=e,e}an=ea.slice,$={__e:function(n,e,t,i){for(var s,a,l;e=e.__;)if((s=e.__c)&&!s.__)try{if((a=s.constructor)&&a.getDerivedStateFromError!=null&&(s.setState(a.getDerivedStateFromError(n)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),l=s.__d),l)return s.__E=s}catch(d){n=d}throw n}},Jo=0,Hn.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ve({},this.state),typeof n=="function"&&(n=n(ve({},t),this.props)),n&&ve(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Jr(this))},Hn.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Jr(this))},Hn.prototype.render=ln,tt=[],Xo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Yo=function(n,e){return n.__v.__b-e.__v.__b},Xn.__r=0,Qo=/(PointerCapture)$|Capture$/i,di=0,qr=Bs(!1),Kr=Bs(!0),Zo=0;var ol=0;function u(n,e,t,i,s,a){e||(e={});var l,d,m=e;if("ref"in m)for(d in m={},e)d=="ref"?l=e[d]:m[d]=e[d];var y={type:n,props:m,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ol,__i:-1,__u:0,__source:s,__self:a};if(typeof n=="function"&&(l=n.defaultProps))for(d in l)m[d]===void 0&&(m[d]=l[d]);return $.vnode&&$.vnode(y),y}const al=()=>{};var Ws={};/**
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
 */const la=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},cl=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[t++];e[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[t++],l=n[t++],d=n[t++],m=((s&7)<<18|(a&63)<<12|(l&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const a=n[t++],l=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return e.join("")},ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const a=n[s],l=s+1<n.length,d=l?n[s+1]:0,m=s+2<n.length,y=m?n[s+2]:0,A=a>>2,v=(a&3)<<4|d>>4;let E=(d&15)<<2|y>>6,k=y&63;m||(k=64,l||(E=64)),i.push(t[A],t[v],t[E],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(la(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const a=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const y=s<n.length?t[n.charAt(s)]:64;++s;const v=s<n.length?t[n.charAt(s)]:64;if(++s,a==null||d==null||y==null||v==null)throw new ll;const E=a<<2|d>>4;if(i.push(E),y!==64){const k=d<<4&240|y>>2;if(i.push(k),v!==64){const x=y<<6&192|v;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ll extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hl=function(n){const e=la(n);return ha.encodeByteArray(e,!0)},Yn=function(n){return hl(n).replace(/\./g,"")},ua=function(n){try{return ha.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ul(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dl=()=>ul().__FIREBASE_DEFAULTS__,fl=()=>{if(typeof process>"u"||typeof Ws>"u")return;const n=Ws.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ua(n[1]);return e&&JSON.parse(e)},mi=()=>{try{return al()||dl()||fl()||pl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},da=n=>mi()?.emulatorHosts?.[n],fa=n=>{const e=da(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},pa=()=>mi()?.config,ga=n=>mi()?.[`_${n}`];/**
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
 */class gl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function xt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _i(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ml(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Yn(JSON.stringify(t)),Yn(JSON.stringify(l)),""].join(".")}const Yt={};function _l(){const n={prod:[],emulator:[]};for(const e of Object.keys(Yt))Yt[e]?n.emulator.push(e):n.prod.push(e);return n}function yl(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let zs=!1;function yi(n,e){if(typeof window>"u"||typeof document>"u"||!xt(window.location.host)||Yt[n]===e||Yt[n]||zs)return;Yt[n]=e;function t(E){return`__firebase__banner__${E}`}const i="__firebase__banner",a=_l().prod.length>0;function l(){const E=document.getElementById(i);E&&E.remove()}function d(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function m(E,k){E.setAttribute("width","24"),E.setAttribute("id",k),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function y(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{zs=!0,l()},E}function A(E,k){E.setAttribute("id",k),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function v(){const E=yl(i),k=t("text"),x=document.getElementById(k)||document.createElement("span"),P=t("learnmore"),R=document.getElementById(P)||document.createElement("a"),N=t("preprendIcon"),D=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const j=E.element;d(j),A(R,P);const H=y();m(D,N),j.append(D,x,R,H),document.body.appendChild(j)}a?(x.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
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
 */function ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function wl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Il(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tl(){const n=ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function El(){try{return typeof indexedDB=="object"}catch{return!1}}function Sl(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Al="FirebaseError";class Me extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Al,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],l=a?kl(a,i):"Error",d=`${this.serviceName}: ${l} (${s}).`;return new Me(s,d,i)}}function kl(n,e){return n.replace(xl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const xl=/\{\$([^}]+)}/g;function Cl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ct(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const a=n[s],l=e[s];if(Gs(a)&&Gs(l)){if(!ct(a,l))return!1}else if(a!==l)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Gs(n){return n!==null&&typeof n=="object"}/**
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
 */function un(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Pl(n,e){const t=new Rl(n,e);return t.subscribe.bind(t)}class Rl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Nl(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Mr),s.error===void 0&&(s.error=Mr),s.complete===void 0&&(s.complete=Mr);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nl(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mr(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class Ke{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Dl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new gl;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ll(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:s});i.resolve(a)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,l]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&l.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ol(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ol(n){return n===et?void 0:n}function Ll(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ml{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Ul={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Fl=B.INFO,jl={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Vl=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=jl[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vi{constructor(e){this.name=e,this._logLevel=Fl,this._logHandler=Vl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ul[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const $l=(n,e)=>e.some(t=>n instanceof t);let qs,Ks;function Bl(){return qs||(qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hl(){return Ks||(Ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ma=new WeakMap,Yr=new WeakMap,_a=new WeakMap,Ur=new WeakMap,wi=new WeakMap;function Wl(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(Ge(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&ma.set(t,n)}).catch(()=>{}),wi.set(e,n),e}function zl(n){if(Yr.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});Yr.set(n,e)}let Qr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_a.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ge(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gl(n){Qr=n(Qr)}function ql(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Fr(this),e,...t);return _a.set(i,e.sort?e.sort():[e]),Ge(i)}:Hl().includes(n)?function(...e){return n.apply(Fr(this),e),Ge(ma.get(this))}:function(...e){return Ge(n.apply(Fr(this),e))}}function Kl(n){return typeof n=="function"?ql(n):(n instanceof IDBTransaction&&zl(n),$l(n,Bl())?new Proxy(n,Qr):n)}function Ge(n){if(n instanceof IDBRequest)return Wl(n);if(Ur.has(n))return Ur.get(n);const e=Kl(n);return e!==n&&(Ur.set(n,e),wi.set(e,n)),e}const Fr=n=>wi.get(n);function Jl(n,e,{blocked:t,upgrade:i,blocking:s,terminated:a}={}){const l=indexedDB.open(n,e),d=Ge(l);return i&&l.addEventListener("upgradeneeded",m=>{i(Ge(l.result),m.oldVersion,m.newVersion,Ge(l.transaction),m)}),t&&l.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",y=>s(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const Xl=["get","getKey","getAll","getAllKeys","count"],Yl=["put","add","delete","clear"],jr=new Map;function Js(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Yl.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Xl.includes(t)))return;const a=async function(l,...d){const m=this.transaction(l,s?"readwrite":"readonly");let y=m.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),s&&m.done]))[0]};return jr.set(e,a),a}Gl(n=>({...n,get:(e,t,i)=>Js(e,t)||n.get(e,t,i),has:(e,t)=>!!Js(e,t)||n.has(e,t)}));/**
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
 */class Ql{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Zl(n){return n.getComponent()?.type==="VERSION"}const Zr="@firebase/app",Xs="0.14.2";/**
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
 */const De=new vi("@firebase/app"),eh="@firebase/app-compat",th="@firebase/analytics-compat",nh="@firebase/analytics",rh="@firebase/app-check-compat",ih="@firebase/app-check",sh="@firebase/auth",oh="@firebase/auth-compat",ah="@firebase/database",ch="@firebase/data-connect",lh="@firebase/database-compat",hh="@firebase/functions",uh="@firebase/functions-compat",dh="@firebase/installations",fh="@firebase/installations-compat",ph="@firebase/messaging",gh="@firebase/messaging-compat",mh="@firebase/performance",_h="@firebase/performance-compat",yh="@firebase/remote-config",vh="@firebase/remote-config-compat",wh="@firebase/storage",bh="@firebase/storage-compat",Ih="@firebase/firestore",Th="@firebase/ai",Eh="@firebase/firestore-compat",Sh="firebase",Ah="12.2.0";/**
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
 */const ei="[DEFAULT]",kh={[Zr]:"fire-core",[eh]:"fire-core-compat",[nh]:"fire-analytics",[th]:"fire-analytics-compat",[ih]:"fire-app-check",[rh]:"fire-app-check-compat",[sh]:"fire-auth",[oh]:"fire-auth-compat",[ah]:"fire-rtdb",[ch]:"fire-data-connect",[lh]:"fire-rtdb-compat",[hh]:"fire-fn",[uh]:"fire-fn-compat",[dh]:"fire-iid",[fh]:"fire-iid-compat",[ph]:"fire-fcm",[gh]:"fire-fcm-compat",[mh]:"fire-perf",[_h]:"fire-perf-compat",[yh]:"fire-rc",[vh]:"fire-rc-compat",[wh]:"fire-gcs",[bh]:"fire-gcs-compat",[Ih]:"fire-fst",[Eh]:"fire-fst-compat",[Th]:"fire-vertex","fire-js":"fire-js",[Sh]:"fire-js-all"};/**
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
 */const Qn=new Map,xh=new Map,ti=new Map;function Ys(n,e){try{n.container.addComponent(e)}catch(t){De.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lt(n){const e=n.name;if(ti.has(e))return De.debug(`There were multiple attempts to register component ${e}.`),!1;ti.set(e,n);for(const t of Qn.values())Ys(t,n);for(const t of xh.values())Ys(t,n);return!0}function ar(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function le(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ch={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new hn("app","Firebase",Ch);/**
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
 */class Ph{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
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
 */const Ct=Ah;function ya(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ei,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw qe.create("bad-app-name",{appName:String(s)});if(t||(t=pa()),!t)throw qe.create("no-options");const a=Qn.get(s);if(a){if(ct(t,a.options)&&ct(i,a.config))return a;throw qe.create("duplicate-app",{appName:s})}const l=new Ml(s);for(const m of ti.values())l.addComponent(m);const d=new Ph(t,i,l);return Qn.set(s,d),d}function bi(n=ei){const e=Qn.get(n);if(!e&&n===ei&&pa())return ya();if(!e)throw qe.create("no-app",{appName:n});return e}function be(n,e,t){let i=kh[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),De.warn(l.join(" "));return}lt(new Ke(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rh="firebase-heartbeat-database",Nh=1,rn="firebase-heartbeat-store";let Vr=null;function va(){return Vr||(Vr=Jl(Rh,Nh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rn)}catch(t){console.warn(t)}}}}).catch(n=>{throw qe.create("idb-open",{originalErrorMessage:n.message})})),Vr}async function Dh(n){try{const t=(await va()).transaction(rn),i=await t.objectStore(rn).get(wa(n));return await t.done,i}catch(e){if(e instanceof Me)De.warn(e.message);else{const t=qe.create("idb-get",{originalErrorMessage:e?.message});De.warn(t.message)}}}async function Qs(n,e){try{const i=(await va()).transaction(rn,"readwrite");await i.objectStore(rn).put(e,wa(n)),await i.done}catch(t){if(t instanceof Me)De.warn(t.message);else{const i=qe.create("idb-set",{originalErrorMessage:t?.message});De.warn(i.message)}}}function wa(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Oh=1024,Lh=30;class Mh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>Lh){const s=jh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){De.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zs(),{heartbeatsToSend:t,unsentEntries:i}=Uh(this._heartbeatsCache.heartbeats),s=Yn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return De.warn(e),""}}}function Zs(){return new Date().toISOString().substring(0,10)}function Uh(n,e=Oh){const t=[];let i=n.slice();for(const s of n){const a=t.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),eo(t)>e){a.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),eo(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Fh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return El()?Sl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Dh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Qs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Qs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function eo(n){return Yn(JSON.stringify({version:2,heartbeats:n})).length}function jh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function Vh(n){lt(new Ke("platform-logger",e=>new Ql(e),"PRIVATE")),lt(new Ke("heartbeat",e=>new Mh(e),"PRIVATE")),be(Zr,Xs,n),be(Zr,Xs,"esm2020"),be("fire-js","")}Vh("");var $h="firebase",Bh="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be($h,Bh,"app");function ba(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hh=ba,Ia=new hn("auth","Firebase",ba());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new vi("@firebase/auth");function Wh(n,...e){Zn.logLevel<=B.WARN&&Zn.warn(`Auth (${Ct}): ${n}`,...e)}function Wn(n,...e){Zn.logLevel<=B.ERROR&&Zn.error(`Auth (${Ct}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n,...e){throw Ti(n,...e)}function me(n,...e){return Ti(n,...e)}function Ii(n,e,t){const i={...Hh(),[e]:t};return new hn("auth","Firebase",i).create(e,{appName:n.name})}function Ne(n){return Ii(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zh(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Te(n,"argument-error"),Ii(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ti(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ia.create(n,...e)}function O(n,e,...t){if(!n)throw Ti(e,...t)}function Pe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wn(e),new Error(e)}function Oe(n,e){n||Pe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return typeof self<"u"&&self.location?.href||""}function Gh(){return to()==="http:"||to()==="https:"}function to(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gh()||bl()||"connection"in navigator)?navigator.onLine:!0}function Kh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Oe(t>e,"Short delay should be less than long delay!"),this.isMobile=vl()||Il()}get(){return qh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n,e){Oe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yh=new dn(3e4,6e4);function fn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Pt(n,e,t,i,s={}){return Ea(n,s,async()=>{let a={},l={};i&&(e==="GET"?l=i:a={body:JSON.stringify(i)});const d=un({key:n.config.apiKey,...l}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:m,...a};return wl()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&xt(n.emulatorConfig.host)&&(y.credentials="include"),Ta.fetch()(await Sa(n,n.config.apiHost,t,d),y)})}async function Ea(n,e,t){n._canInitEmulator=!1;const i={...Jh,...e};try{const s=new Qh(n),a=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Un(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const d=a.ok?l.errorMessage:l.error.message,[m,y]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Un(n,"credential-already-in-use",l);if(m==="EMAIL_EXISTS")throw Un(n,"email-already-in-use",l);if(m==="USER_DISABLED")throw Un(n,"user-disabled",l);const A=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Ii(n,A,y);Te(n,A)}}catch(s){if(s instanceof Me)throw s;Te(n,"network-request-failed",{message:String(s)})}}async function Si(n,e,t,i,s={}){const a=await Pt(n,e,t,i,s);return"mfaPendingCredential"in a&&Te(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Sa(n,e,t,i){const s=`${e}${t}?${i}`,a=n,l=a.config.emulator?Ei(n.config,s):`${n.config.apiScheme}://${s}`;return Xh.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}class Qh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(me(this.auth,"network-request-failed")),Yh.get())})}}function Un(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=me(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function er(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eu(n,e=!1){const t=Ee(n),i=await t.getIdToken(e),s=Ai(i);O(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,l=a?.sign_in_provider;return{claims:s,token:i,authTime:Qt($r(s.auth_time)),issuedAtTime:Qt($r(s.iat)),expirationTime:Qt($r(s.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function $r(n){return Number(n)*1e3}function Ai(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Wn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ua(t);return s?JSON.parse(s):(Wn("Failed to decode base64 JWT payload"),null)}catch(s){return Wn("Caught error parsing JWT payload as JSON",s?.toString()),null}}function no(n){const e=Ai(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Me&&tu(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function tu({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tr(n){const e=n.auth,t=await n.getIdToken(),i=await sn(n,er(e,{idToken:t}));O(i?.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=s.providerUserInfo?.length?Aa(s.providerUserInfo):[],l=iu(n.providerData,a),d=n.isAnonymous,m=!(n.email&&s.passwordHash)&&!l?.length,y=d?m:!1,A={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ri(s.createdAt,s.lastLoginAt),isAnonymous:y};Object.assign(n,A)}async function ru(n){const e=Ee(n);await tr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iu(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Aa(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(n,e){const t=await Ea(n,{},async()=>{const i=un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,l=await Sa(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:d,body:i};return n.emulatorConfig&&xt(n.emulatorConfig.host)&&(m.credentials="include"),Ta.fetch()(l,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ou(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):no(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=no(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:a}=await su(e,t);this.updateTokensAndExpiration(i,s,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:a}=t,l=new wt;return i&&(O(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),s&&(O(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),a&&(O(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wt,this.toJSON())}_performRefresh(){return Pe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pe{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new nu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ri(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await sn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eu(this,e)}reload(){return ru(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await tr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(le(this.auth.app))return Promise.reject(Ne(this.auth));const e=await this.getIdToken();return await sn(this,Zh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,a=t.phoneNumber??void 0,l=t.photoURL??void 0,d=t.tenantId??void 0,m=t._redirectEventId??void 0,y=t.createdAt??void 0,A=t.lastLoginAt??void 0,{uid:v,emailVerified:E,isAnonymous:k,providerData:x,stsTokenManager:P}=t;O(v&&P,e,"internal-error");const R=wt.fromJSON(this.name,P);O(typeof v=="string",e,"internal-error"),$e(i,e.name),$e(s,e.name),O(typeof E=="boolean",e,"internal-error"),O(typeof k=="boolean",e,"internal-error"),$e(a,e.name),$e(l,e.name),$e(d,e.name),$e(m,e.name),$e(y,e.name),$e(A,e.name);const N=new pe({uid:v,auth:e,email:s,emailVerified:E,displayName:i,isAnonymous:k,photoURL:l,phoneNumber:a,tenantId:d,stsTokenManager:R,createdAt:y,lastLoginAt:A});return x&&Array.isArray(x)&&(N.providerData=x.map(D=>({...D}))),m&&(N._redirectEventId=m),N}static async _fromIdTokenResponse(e,t,i=!1){const s=new wt;s.updateFromServerResponse(t);const a=new pe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await tr(a),a}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];O(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?Aa(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!a?.length,d=new wt;d.updateFromIdToken(i);const m=new pe({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:l}),y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ri(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!a?.length};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Map;function Re(n){Oe(n instanceof Function,"Expected a class definition");let e=ro.get(n);return e?(Oe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ro.set(n,e),e)}/**
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
 */class ka{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ka.type="NONE";const io=ka;/**
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
 */function zn(n,e,t){return`firebase:${n}:${e}:${t}`}class bt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:a}=this.auth;this.fullUserKey=zn(this.userKey,s.apiKey,a),this.fullPersistenceKey=zn("persistence",s.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await er(this.auth,{idToken:e}).catch(()=>{});return t?pe._fromGetAccountInfoResponse(this.auth,t,e):null}return pe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new bt(Re(io),e,i);const s=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=s[0]||Re(io);const l=zn(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const A=await y._get(l);if(A){let v;if(typeof A=="string"){const E=await er(e,{idToken:A}).catch(()=>{});if(!E)break;v=await pe._fromGetAccountInfoResponse(e,E,A)}else v=pe._fromJSON(e,A);y!==a&&(d=v),a=y;break}}catch{}const m=s.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new bt(a,e,i):(a=m[0],d&&await a._set(l,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(l)}catch{}})),new bt(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ra(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Da(e))return"Blackberry";if(Oa(e))return"Webos";if(Ca(e))return"Safari";if((e.includes("chrome/")||Pa(e))&&!e.includes("edge/"))return"Chrome";if(Na(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function xa(n=ce()){return/firefox\//i.test(n)}function Ca(n=ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pa(n=ce()){return/crios\//i.test(n)}function Ra(n=ce()){return/iemobile/i.test(n)}function Na(n=ce()){return/android/i.test(n)}function Da(n=ce()){return/blackberry/i.test(n)}function Oa(n=ce()){return/webos/i.test(n)}function ki(n=ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function au(n=ce()){return ki(n)&&!!window.navigator?.standalone}function cu(){return Tl()&&document.documentMode===10}function La(n=ce()){return ki(n)||Na(n)||Oa(n)||Da(n)||/windows phone/i.test(n)||Ra(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,e=[]){let t;switch(n){case"Browser":t=so(ce());break;case"Worker":t=`${so(ce())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ct}/${i}`}/**
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
 */class lu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((l,d)=>{try{const m=e(a);l(m)}catch(m){d(m)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function hu(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",fn(n,e))}/**
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
 */const uu=6;class du{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??uu,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oo(this),this.idTokenSubscription=new oo(this),this.beforeStateQueue=new lu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ia,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Re(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await bt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await er(this,{idToken:e}),i=await pe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(le(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,l=i?._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===l)&&d?.user&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tr(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(le(this.app))return Promise.reject(Ne(this));const t=e?Ee(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return le(this.app)?Promise.reject(Ne(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return le(this.app)?Promise.reject(Ne(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hu(this),t=new du(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ou(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Re(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await bt.create(this,[Re(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(d,this,"internal-error"),d.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,s);return()=>{l=!0,m()}}else{const m=e.addObserver(t);return()=>{l=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ma(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Wh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Rt(n){return Ee(n)}class oo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pl(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pu(n){xi=n}function gu(n){return xi.loadJS(n)}function mu(){return xi.gapiScript}function _u(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n,e){const t=ar(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),a=t.getOptions();if(ct(a,e??{}))return s;Te(s,"already-initialized")}return t.initialize({options:e})}function vu(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Re);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Ua(n,e,t){const i=Rt(n);O(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,a=Fa(e),{host:l,port:d}=wu(e),m=d===null?"":`:${d}`,y={url:`${a}//${l}${m}/`},A=Object.freeze({host:l,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){O(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),O(ct(y,i.config.emulator)&&ct(A,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=A,i.settings.appVerificationDisabledForTesting=!0,xt(l)?(_i(`${a}//${l}${m}`),yi("Auth",!0)):bu()}function Fa(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function wu(n){const e=Fa(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const a=s[1];return{host:a,port:ao(i.substr(a.length+1))}}else{const[a,l]=i.split(":");return{host:a,port:ao(l)}}}function ao(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bu(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pe("not implemented")}_getIdTokenResponse(e){return Pe("not implemented")}_linkToIdToken(e,t){return Pe("not implemented")}_getReauthenticationResolver(e){return Pe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(n,e){return Si(n,"POST","/v1/accounts:signInWithIdp",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="http://localhost";class ht extends ja{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Te("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...a}=t;if(!i||!s)return null;const l=new ht(i,s);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return It(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,It(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,It(e,t)}buildRequest(){const e={requestUri:Iu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=un(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pn extends Ci{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends pn{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch{return null}}}He.FACEBOOK_SIGN_IN_METHOD="facebook.com";He.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ht._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xe.credential(t,i)}catch{return null}}}xe.GOOGLE_SIGN_IN_METHOD="google.com";xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends pn{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.GITHUB_SIGN_IN_METHOD="github.com";We.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends pn{constructor(){super("twitter.com")}static credential(e,t){return ht._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ze.credential(t,i)}catch{return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com";ze.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(n,e){return Si(n,"POST","/v1/accounts:signUp",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const a=await pe._fromIdTokenResponse(e,i,s),l=co(i);return new Le({user:a,providerId:l,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=co(i);return new Le({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function co(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(n){if(le(n.app))return Promise.reject(Ne(n));const e=Rt(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Le({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Tu(e,{returnSecureToken:!0}),i=await Le._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Me{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,nr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new nr(e,t,i,s)}}function $a(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?nr._fromErrorAndOperation(n,a,e,i):a})}async function Eu(n,e,t=!1){const i=await sn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Le._forOperation(n,"link",i)}/**
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
 */async function Su(n,e,t=!1){const{auth:i}=n;if(le(i.app))return Promise.reject(Ne(i));const s="reauthenticate";try{const a=await sn(n,$a(i,s,e,n),t);O(a.idToken,i,"internal-error");const l=Ai(a.idToken);O(l,i,"internal-error");const{sub:d}=l;return O(n.uid===d,i,"user-mismatch"),Le._forOperation(n,s,a)}catch(a){throw a?.code==="auth/user-not-found"&&Te(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(n,e,t=!1){if(le(n.app))return Promise.reject(Ne(n));const i="signIn",s=await $a(n,i,e),a=await Le._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(n,e){return Si(n,"POST","/v1/accounts:signInWithCustomToken",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(n,e){if(le(n.app))return Promise.reject(Ne(n));const t=Rt(n),i=await ku(t,{token:e,returnSecureToken:!0}),s=await Le._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(s.user),s}function Cu(n,e,t,i){return Ee(n).onIdTokenChanged(e,t,i)}function Pu(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function Ba(n,e,t,i){return Ee(n).onAuthStateChanged(e,t,i)}function Ru(n){return Ee(n).signOut()}const rr="__sak";/**
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
 */class Ha{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rr,"1"),this.storage.removeItem(rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=1e3,Du=10;class Wa extends Ha{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=La(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,d,m)=>{this.notifyListeners(l,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(i);!t&&this.localCache[i]===l||this.notifyListeners(i,l)},a=this.storage.getItem(i);cu()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Du):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Nu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wa.type="LOCAL";const Ou=Wa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Ha{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}za.type="SESSION";const Ga=za;/**
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
 */function Lu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new cr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:a}=t.data,l=this.handlersMap[s];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const d=Array.from(l).map(async y=>y(t.origin,a)),m=await Lu(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Mu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,l;return new Promise((d,m)=>{const y=Pi("",20);s.port1.start();const A=setTimeout(()=>{m(new Error("unsupported_event"))},i);l={messageChannel:s,onMessage(v){const E=v;if(E.data.eventId===y)switch(E.data.status){case"ack":clearTimeout(A),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(E.data.response);break;default:clearTimeout(A),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return window}function Uu(n){Ie().location.href=n}/**
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
 */function qa(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function Fu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ju(){return navigator?.serviceWorker?.controller||null}function Vu(){return qa()?self:null}/**
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
 */const Ka="firebaseLocalStorageDb",$u=1,ir="firebaseLocalStorage",Ja="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lr(n,e){return n.transaction([ir],e?"readwrite":"readonly").objectStore(ir)}function Bu(){const n=indexedDB.deleteDatabase(Ka);return new gn(n).toPromise()}function ii(){const n=indexedDB.open(Ka,$u);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ir,{keyPath:Ja})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ir)?e(i):(i.close(),await Bu(),e(await ii()))})})}async function lo(n,e,t){const i=lr(n,!0).put({[Ja]:e,value:t});return new gn(i).toPromise()}async function Hu(n,e){const t=lr(n,!1).get(e),i=await new gn(t).toPromise();return i===void 0?null:i.value}function ho(n,e){const t=lr(n,!0).delete(e);return new gn(t).toPromise()}const Wu=800,zu=3;class Xa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ii(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>zu)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cr._getInstance(Vu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Fu(),!this.activeServiceWorker)return;this.sender=new Mu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ju()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ii();return await lo(e,rr,"1"),await ho(e,rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>lo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Hu(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ho(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=lr(s,!1).getAll();return new gn(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xa.type="LOCAL";const Gu=Xa;new dn(3e4,6e4);/**
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
 */function Ya(n,e){return e?Re(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ri extends ja{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return It(e,this._buildIdpRequest())}_linkToIdToken(e,t){return It(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return It(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qu(n){return Au(n.auth,new Ri(n),n.bypassAuthState)}function Ku(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Su(t,new Ri(n),n.bypassAuthState)}async function Ju(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Eu(t,new Ri(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,i,s,a=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:a,error:l,type:d}=e;if(l){this.reject(l);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qu;case"linkViaPopup":case"linkViaRedirect":return Ju;case"reauthViaPopup":case"reauthViaRedirect":return Ku;default:Te(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new dn(2e3,1e4);async function Yu(n,e,t){if(le(n.app))return Promise.reject(me(n,"operation-not-supported-in-this-environment"));const i=Rt(n);zh(n,e,Ci);const s=Ya(i,t);return new it(i,"signInViaPopup",e,s).executeNotNull()}class it extends Qa{constructor(e,t,i,s,a){super(e,t,s,a),this.provider=i,this.authWindow=null,this.pollId=null,it.currentPopupAction&&it.currentPopupAction.cancel(),it.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=Pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,it.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Xu.get())};e()}}it.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="pendingRedirect",Gn=new Map;class Zu extends Qa{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Gn.get(this.auth._key());if(!e){try{const i=await ed(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Gn.set(this.auth._key(),e)}return this.bypassAuthState||Gn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ed(n,e){const t=rd(e),i=nd(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function td(n,e){Gn.set(n._key(),e)}function nd(n){return Re(n._redirectPersistence)}function rd(n){return zn(Qu,n.config.apiKey,n.name)}async function id(n,e,t=!1){if(le(n.app))return Promise.reject(Ne(n));const i=Rt(n),s=Ya(i,e),l=await new Zu(i,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=600*1e3;class od{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ad(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Za(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(me(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sd&&this.cachedEventUids.clear(),this.cachedEventUids.has(uo(e))}saveEventToCache(e){this.cachedEventUids.add(uo(e)),this.lastProcessedEventTime=Date.now()}}function uo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Za({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ad(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Za(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hd=/^https?/;async function ud(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cd(n);for(const t of e)try{if(dd(t))return}catch{}Te(n,"unauthorized-domain")}function dd(n){const e=ni(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===i}if(!hd.test(t))return!1;if(ld.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const fd=new dn(3e4,6e4);function fo(){const n=Ie().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pd(n){return new Promise((e,t)=>{function i(){fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fo(),t(me(n,"network-request-failed"))},timeout:fd.get()})}if(Ie().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ie().gapi?.load)i();else{const s=_u("iframefcb");return Ie()[s]=()=>{gapi.load?i():t(me(n,"network-request-failed"))},gu(`${mu()}?onload=${s}`).catch(a=>t(a))}}).catch(e=>{throw qn=null,e})}let qn=null;function gd(n){return qn=qn||pd(n),qn}/**
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
 */const md=new dn(5e3,15e3),_d="__/auth/iframe",yd="emulator/auth/iframe",vd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bd(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ei(e,yd):`https://${n.config.authDomain}/${_d}`,i={apiKey:e.apiKey,appName:n.name,v:Ct},s=wd.get(n.config.apiHost);s&&(i.eid=s);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${un(i).slice(1)}`}async function Id(n){const e=await gd(n),t=Ie().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:bd(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vd,dontclear:!0},i=>new Promise(async(s,a)=>{await i.restyle({setHideOnLeave:!1});const l=me(n,"network-request-failed"),d=Ie().setTimeout(()=>{a(l)},md.get());function m(){Ie().clearTimeout(d),s(i)}i.ping(m).then(m,()=>{a(l)})}))}/**
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
 */const Td={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ed=500,Sd=600,Ad="_blank",kd="http://localhost";class po{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xd(n,e,t,i=Ed,s=Sd){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const m={...Td,width:i.toString(),height:s.toString(),top:a,left:l},y=ce().toLowerCase();t&&(d=Pa(y)?Ad:t),xa(y)&&(e=e||kd,m.scrollbars="yes");const A=Object.entries(m).reduce((E,[k,x])=>`${E}${k}=${x},`,"");if(au(y)&&d!=="_self")return Cd(e||"",d),new po(null);const v=window.open(e||"",d,A);O(v,n,"popup-blocked");try{v.focus()}catch{}return new po(v)}function Cd(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Pd="__/auth/handler",Rd="emulator/auth/handler",Nd=encodeURIComponent("fac");async function go(n,e,t,i,s,a){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ct,eventId:s};if(e instanceof Ci){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Cl(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,v]of Object.entries({}))l[A]=v}if(e instanceof pn){const A=e.getScopes().filter(v=>v!=="");A.length>0&&(l.scopes=A.join(","))}n.tenantId&&(l.tid=n.tenantId);const d=l;for(const A of Object.keys(d))d[A]===void 0&&delete d[A];const m=await n._getAppCheckToken(),y=m?`#${Nd}=${encodeURIComponent(m)}`:"";return`${Dd(n)}?${un(d).slice(1)}${y}`}function Dd({config:n}){return n.emulator?Ei(n,Rd):`https://${n.authDomain}/${Pd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="webStorageSupport";class Od{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ga,this._completeRedirectFn=id,this._overrideRedirectResult=td}async _openPopup(e,t,i,s){Oe(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await go(e,t,i,ni(),s);return xd(e,a,Pi())}async _openRedirect(e,t,i,s){await this._originValidation(e);const a=await go(e,t,i,ni(),s);return Uu(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:a}=this.eventManagers[t];return s?Promise.resolve(s):(Oe(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Id(e),i=new od(e);return t.register("authEvent",s=>(O(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Br,{type:Br},s=>{const a=s?.[0]?.[Br];a!==void 0&&t(!!a),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ud(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return La()||Ca()||ki()}}const Ld=Od;var mo="@firebase/auth",_o="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fd(n){lt(new Ke("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:d}=i.options;O(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:l,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ma(n)},y=new fu(i,s,a,m);return vu(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),lt(new Ke("auth-internal",e=>{const t=Rt(e.getProvider("auth").getImmediate());return(i=>new Md(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),be(mo,_o,Ud(n)),be(mo,_o,"esm2020")}/**
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
 */const jd=300,Vd=ga("authIdTokenMaxAge")||jd;let yo=null;const $d=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Vd)return;const s=t?.token;yo!==s&&(yo=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ec(n=bi()){const e=ar(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yu(n,{popupRedirectResolver:Ld,persistence:[Gu,Ou,Ga]}),i=ga("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const l=$d(a.toString());Pu(t,l,()=>l(t.currentUser)),Cu(t,d=>l(d))}}const s=da("auth");return s&&Ua(t,`http://${s}`),t}function Bd(){return document.getElementsByTagName("head")?.[0]??document}pu({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const a=me("internal-error");a.customData=s,t(a)},i.type="text/javascript",i.charset="UTF-8",Bd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fd("Browser");var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,p){function f(){}f.prototype=p.prototype,b.D=p.prototype,b.prototype=new f,b.prototype.constructor=b,b.C=function(_,w,T){for(var g=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)g[Se-2]=arguments[Se];return p.prototype[w].apply(_,g)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,p,f){f||(f=0);var _=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)_[w]=p.charCodeAt(f++)|p.charCodeAt(f++)<<8|p.charCodeAt(f++)<<16|p.charCodeAt(f++)<<24;else for(w=0;16>w;++w)_[w]=p[f++]|p[f++]<<8|p[f++]<<16|p[f++]<<24;p=b.g[0],f=b.g[1],w=b.g[2];var T=b.g[3],g=p+(T^f&(w^T))+_[0]+3614090360&4294967295;p=f+(g<<7&4294967295|g>>>25),g=T+(w^p&(f^w))+_[1]+3905402710&4294967295,T=p+(g<<12&4294967295|g>>>20),g=w+(f^T&(p^f))+_[2]+606105819&4294967295,w=T+(g<<17&4294967295|g>>>15),g=f+(p^w&(T^p))+_[3]+3250441966&4294967295,f=w+(g<<22&4294967295|g>>>10),g=p+(T^f&(w^T))+_[4]+4118548399&4294967295,p=f+(g<<7&4294967295|g>>>25),g=T+(w^p&(f^w))+_[5]+1200080426&4294967295,T=p+(g<<12&4294967295|g>>>20),g=w+(f^T&(p^f))+_[6]+2821735955&4294967295,w=T+(g<<17&4294967295|g>>>15),g=f+(p^w&(T^p))+_[7]+4249261313&4294967295,f=w+(g<<22&4294967295|g>>>10),g=p+(T^f&(w^T))+_[8]+1770035416&4294967295,p=f+(g<<7&4294967295|g>>>25),g=T+(w^p&(f^w))+_[9]+2336552879&4294967295,T=p+(g<<12&4294967295|g>>>20),g=w+(f^T&(p^f))+_[10]+4294925233&4294967295,w=T+(g<<17&4294967295|g>>>15),g=f+(p^w&(T^p))+_[11]+2304563134&4294967295,f=w+(g<<22&4294967295|g>>>10),g=p+(T^f&(w^T))+_[12]+1804603682&4294967295,p=f+(g<<7&4294967295|g>>>25),g=T+(w^p&(f^w))+_[13]+4254626195&4294967295,T=p+(g<<12&4294967295|g>>>20),g=w+(f^T&(p^f))+_[14]+2792965006&4294967295,w=T+(g<<17&4294967295|g>>>15),g=f+(p^w&(T^p))+_[15]+1236535329&4294967295,f=w+(g<<22&4294967295|g>>>10),g=p+(w^T&(f^w))+_[1]+4129170786&4294967295,p=f+(g<<5&4294967295|g>>>27),g=T+(f^w&(p^f))+_[6]+3225465664&4294967295,T=p+(g<<9&4294967295|g>>>23),g=w+(p^f&(T^p))+_[11]+643717713&4294967295,w=T+(g<<14&4294967295|g>>>18),g=f+(T^p&(w^T))+_[0]+3921069994&4294967295,f=w+(g<<20&4294967295|g>>>12),g=p+(w^T&(f^w))+_[5]+3593408605&4294967295,p=f+(g<<5&4294967295|g>>>27),g=T+(f^w&(p^f))+_[10]+38016083&4294967295,T=p+(g<<9&4294967295|g>>>23),g=w+(p^f&(T^p))+_[15]+3634488961&4294967295,w=T+(g<<14&4294967295|g>>>18),g=f+(T^p&(w^T))+_[4]+3889429448&4294967295,f=w+(g<<20&4294967295|g>>>12),g=p+(w^T&(f^w))+_[9]+568446438&4294967295,p=f+(g<<5&4294967295|g>>>27),g=T+(f^w&(p^f))+_[14]+3275163606&4294967295,T=p+(g<<9&4294967295|g>>>23),g=w+(p^f&(T^p))+_[3]+4107603335&4294967295,w=T+(g<<14&4294967295|g>>>18),g=f+(T^p&(w^T))+_[8]+1163531501&4294967295,f=w+(g<<20&4294967295|g>>>12),g=p+(w^T&(f^w))+_[13]+2850285829&4294967295,p=f+(g<<5&4294967295|g>>>27),g=T+(f^w&(p^f))+_[2]+4243563512&4294967295,T=p+(g<<9&4294967295|g>>>23),g=w+(p^f&(T^p))+_[7]+1735328473&4294967295,w=T+(g<<14&4294967295|g>>>18),g=f+(T^p&(w^T))+_[12]+2368359562&4294967295,f=w+(g<<20&4294967295|g>>>12),g=p+(f^w^T)+_[5]+4294588738&4294967295,p=f+(g<<4&4294967295|g>>>28),g=T+(p^f^w)+_[8]+2272392833&4294967295,T=p+(g<<11&4294967295|g>>>21),g=w+(T^p^f)+_[11]+1839030562&4294967295,w=T+(g<<16&4294967295|g>>>16),g=f+(w^T^p)+_[14]+4259657740&4294967295,f=w+(g<<23&4294967295|g>>>9),g=p+(f^w^T)+_[1]+2763975236&4294967295,p=f+(g<<4&4294967295|g>>>28),g=T+(p^f^w)+_[4]+1272893353&4294967295,T=p+(g<<11&4294967295|g>>>21),g=w+(T^p^f)+_[7]+4139469664&4294967295,w=T+(g<<16&4294967295|g>>>16),g=f+(w^T^p)+_[10]+3200236656&4294967295,f=w+(g<<23&4294967295|g>>>9),g=p+(f^w^T)+_[13]+681279174&4294967295,p=f+(g<<4&4294967295|g>>>28),g=T+(p^f^w)+_[0]+3936430074&4294967295,T=p+(g<<11&4294967295|g>>>21),g=w+(T^p^f)+_[3]+3572445317&4294967295,w=T+(g<<16&4294967295|g>>>16),g=f+(w^T^p)+_[6]+76029189&4294967295,f=w+(g<<23&4294967295|g>>>9),g=p+(f^w^T)+_[9]+3654602809&4294967295,p=f+(g<<4&4294967295|g>>>28),g=T+(p^f^w)+_[12]+3873151461&4294967295,T=p+(g<<11&4294967295|g>>>21),g=w+(T^p^f)+_[15]+530742520&4294967295,w=T+(g<<16&4294967295|g>>>16),g=f+(w^T^p)+_[2]+3299628645&4294967295,f=w+(g<<23&4294967295|g>>>9),g=p+(w^(f|~T))+_[0]+4096336452&4294967295,p=f+(g<<6&4294967295|g>>>26),g=T+(f^(p|~w))+_[7]+1126891415&4294967295,T=p+(g<<10&4294967295|g>>>22),g=w+(p^(T|~f))+_[14]+2878612391&4294967295,w=T+(g<<15&4294967295|g>>>17),g=f+(T^(w|~p))+_[5]+4237533241&4294967295,f=w+(g<<21&4294967295|g>>>11),g=p+(w^(f|~T))+_[12]+1700485571&4294967295,p=f+(g<<6&4294967295|g>>>26),g=T+(f^(p|~w))+_[3]+2399980690&4294967295,T=p+(g<<10&4294967295|g>>>22),g=w+(p^(T|~f))+_[10]+4293915773&4294967295,w=T+(g<<15&4294967295|g>>>17),g=f+(T^(w|~p))+_[1]+2240044497&4294967295,f=w+(g<<21&4294967295|g>>>11),g=p+(w^(f|~T))+_[8]+1873313359&4294967295,p=f+(g<<6&4294967295|g>>>26),g=T+(f^(p|~w))+_[15]+4264355552&4294967295,T=p+(g<<10&4294967295|g>>>22),g=w+(p^(T|~f))+_[6]+2734768916&4294967295,w=T+(g<<15&4294967295|g>>>17),g=f+(T^(w|~p))+_[13]+1309151649&4294967295,f=w+(g<<21&4294967295|g>>>11),g=p+(w^(f|~T))+_[4]+4149444226&4294967295,p=f+(g<<6&4294967295|g>>>26),g=T+(f^(p|~w))+_[11]+3174756917&4294967295,T=p+(g<<10&4294967295|g>>>22),g=w+(p^(T|~f))+_[2]+718787259&4294967295,w=T+(g<<15&4294967295|g>>>17),g=f+(T^(w|~p))+_[9]+3951481745&4294967295,b.g[0]=b.g[0]+p&4294967295,b.g[1]=b.g[1]+(w+(g<<21&4294967295|g>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+T&4294967295}i.prototype.u=function(b,p){p===void 0&&(p=b.length);for(var f=p-this.blockSize,_=this.B,w=this.h,T=0;T<p;){if(w==0)for(;T<=f;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<p;)if(_[w++]=b.charCodeAt(T++),w==this.blockSize){s(this,_),w=0;break}}else for(;T<p;)if(_[w++]=b[T++],w==this.blockSize){s(this,_),w=0;break}}this.h=w,this.o+=p},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var p=1;p<b.length-8;++p)b[p]=0;var f=8*this.o;for(p=b.length-8;p<b.length;++p)b[p]=f&255,f/=256;for(this.u(b),b=Array(16),p=f=0;4>p;++p)for(var _=0;32>_;_+=8)b[f++]=this.g[p]>>>_&255;return b};function a(b,p){var f=d;return Object.prototype.hasOwnProperty.call(f,b)?f[b]:f[b]=p(b)}function l(b,p){this.h=p;for(var f=[],_=!0,w=b.length-1;0<=w;w--){var T=b[w]|0;_&&T==p||(f[w]=T,_=!1)}this.g=f}var d={};function m(b){return-128<=b&&128>b?a(b,function(p){return new l([p|0],0>p?-1:0)}):new l([b|0],0>b?-1:0)}function y(b){if(isNaN(b)||!isFinite(b))return v;if(0>b)return R(y(-b));for(var p=[],f=1,_=0;b>=f;_++)p[_]=b/f|0,f*=4294967296;return new l(p,0)}function A(b,p){if(b.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(b.charAt(0)=="-")return R(A(b.substring(1),p));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=y(Math.pow(p,8)),_=v,w=0;w<b.length;w+=8){var T=Math.min(8,b.length-w),g=parseInt(b.substring(w,w+T),p);8>T?(T=y(Math.pow(p,T)),_=_.j(T).add(y(g))):(_=_.j(f),_=_.add(y(g)))}return _}var v=m(0),E=m(1),k=m(16777216);n=l.prototype,n.m=function(){if(P(this))return-R(this).m();for(var b=0,p=1,f=0;f<this.g.length;f++){var _=this.i(f);b+=(0<=_?_:4294967296+_)*p,p*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(P(this))return"-"+R(this).toString(b);for(var p=y(Math.pow(b,6)),f=this,_="";;){var w=H(f,p).g;f=N(f,w.j(p));var T=((0<f.g.length?f.g[0]:f.h)>>>0).toString(b);if(f=w,x(f))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var p=0;p<b.g.length;p++)if(b.g[p]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=N(this,b),P(b)?-1:x(b)?0:1};function R(b){for(var p=b.g.length,f=[],_=0;_<p;_++)f[_]=~b.g[_];return new l(f,~b.h).add(E)}n.abs=function(){return P(this)?R(this):this},n.add=function(b){for(var p=Math.max(this.g.length,b.g.length),f=[],_=0,w=0;w<=p;w++){var T=_+(this.i(w)&65535)+(b.i(w)&65535),g=(T>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);_=g>>>16,T&=65535,g&=65535,f[w]=g<<16|T}return new l(f,f[f.length-1]&-2147483648?-1:0)};function N(b,p){return b.add(R(p))}n.j=function(b){if(x(this)||x(b))return v;if(P(this))return P(b)?R(this).j(R(b)):R(R(this).j(b));if(P(b))return R(this.j(R(b)));if(0>this.l(k)&&0>b.l(k))return y(this.m()*b.m());for(var p=this.g.length+b.g.length,f=[],_=0;_<2*p;_++)f[_]=0;for(_=0;_<this.g.length;_++)for(var w=0;w<b.g.length;w++){var T=this.i(_)>>>16,g=this.i(_)&65535,Se=b.i(w)>>>16,Nt=b.i(w)&65535;f[2*_+2*w]+=g*Nt,D(f,2*_+2*w),f[2*_+2*w+1]+=T*Nt,D(f,2*_+2*w+1),f[2*_+2*w+1]+=g*Se,D(f,2*_+2*w+1),f[2*_+2*w+2]+=T*Se,D(f,2*_+2*w+2)}for(_=0;_<p;_++)f[_]=f[2*_+1]<<16|f[2*_];for(_=p;_<2*p;_++)f[_]=0;return new l(f,0)};function D(b,p){for(;(b[p]&65535)!=b[p];)b[p+1]+=b[p]>>>16,b[p]&=65535,p++}function j(b,p){this.g=b,this.h=p}function H(b,p){if(x(p))throw Error("division by zero");if(x(b))return new j(v,v);if(P(b))return p=H(R(b),p),new j(R(p.g),R(p.h));if(P(p))return p=H(b,R(p)),new j(R(p.g),p.h);if(30<b.g.length){if(P(b)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var f=E,_=p;0>=_.l(b);)f=ie(f),_=ie(_);var w=q(f,1),T=q(_,1);for(_=q(_,2),f=q(f,2);!x(_);){var g=T.add(_);0>=g.l(b)&&(w=w.add(f),T=g),_=q(_,1),f=q(f,1)}return p=N(b,w.j(p)),new j(w,p)}for(w=v;0<=b.l(p);){for(f=Math.max(1,Math.floor(b.m()/p.m())),_=Math.ceil(Math.log(f)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=y(f),g=T.j(p);P(g)||0<g.l(b);)f-=_,T=y(f),g=T.j(p);x(T)&&(T=E),w=w.add(T),b=N(b,g)}return new j(w,b)}n.A=function(b){return H(this,b).h},n.and=function(b){for(var p=Math.max(this.g.length,b.g.length),f=[],_=0;_<p;_++)f[_]=this.i(_)&b.i(_);return new l(f,this.h&b.h)},n.or=function(b){for(var p=Math.max(this.g.length,b.g.length),f=[],_=0;_<p;_++)f[_]=this.i(_)|b.i(_);return new l(f,this.h|b.h)},n.xor=function(b){for(var p=Math.max(this.g.length,b.g.length),f=[],_=0;_<p;_++)f[_]=this.i(_)^b.i(_);return new l(f,this.h^b.h)};function ie(b){for(var p=b.g.length+1,f=[],_=0;_<p;_++)f[_]=b.i(_)<<1|b.i(_-1)>>>31;return new l(f,b.h)}function q(b,p){var f=p>>5;p%=32;for(var _=b.g.length-f,w=[],T=0;T<_;T++)w[T]=0<p?b.i(T+f)>>>p|b.i(T+f+1)<<32-p:b.i(T+f);return new l(w,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=y,l.fromString=A,Ni=l}).apply(typeof vo<"u"?vo:typeof self<"u"?self:typeof window<"u"?window:{});var Fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,o,c){return r==Array.prototype||r==Object.prototype||(r[o]=c.value),r};function t(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fn=="object"&&Fn];for(var o=0;o<r.length;++o){var c=r[o];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=t(this);function s(r,o){if(o)e:{var c=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var I=r[h];if(!(I in c))break e;c=c[I]}r=r[r.length-1],h=c[r],o=o(h),o!=h&&o!=null&&e(c,r,{configurable:!0,writable:!0,value:o})}}function a(r,o){r instanceof String&&(r+="");var c=0,h=!1,I={next:function(){if(!h&&c<r.length){var S=c++;return{value:o(S,r[S]),done:!1}}return h=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(r){return r||function(){return a(this,function(o,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},d=this||self;function m(r){var o=typeof r;return o=o!="object"?o:r?Array.isArray(r)?"array":o:"null",o=="array"||o=="object"&&typeof r.length=="number"}function y(r){var o=typeof r;return o=="object"&&r!=null||o=="function"}function A(r,o,c){return r.call.apply(r.bind,arguments)}function v(r,o,c){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,h),r.apply(o,I)}}return function(){return r.apply(o,arguments)}}function E(r,o,c){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:v,E.apply(null,arguments)}function k(r,o){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function x(r,o){function c(){}c.prototype=o.prototype,r.aa=o.prototype,r.prototype=new c,r.prototype.constructor=r,r.Qb=function(h,I,S){for(var C=Array(arguments.length-2),W=2;W<arguments.length;W++)C[W-2]=arguments[W];return o.prototype[I].apply(h,C)}}function P(r){const o=r.length;if(0<o){const c=Array(o);for(let h=0;h<o;h++)c[h]=r[h];return c}return[]}function R(r,o){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(m(h)){const I=r.length||0,S=h.length||0;r.length=I+S;for(let C=0;C<S;C++)r[I+C]=h[C]}else r.push(h)}}class N{constructor(o,c){this.i=o,this.j=c,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function D(r){return/^[\s\xa0]*$/.test(r)}function j(){var r=d.navigator;return r&&(r=r.userAgent)?r:""}function H(r){return H[" "](r),r}H[" "]=function(){};var ie=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function q(r,o,c){for(const h in r)o.call(c,r[h],h,r)}function b(r,o){for(const c in r)o.call(void 0,r[c],c,r)}function p(r){const o={};for(const c in r)o[c]=r[c];return o}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,o){let c,h;for(let I=1;I<arguments.length;I++){h=arguments[I];for(c in h)r[c]=h[c];for(let S=0;S<f.length;S++)c=f[S],Object.prototype.hasOwnProperty.call(h,c)&&(r[c]=h[c])}}function w(r){var o=1;r=r.split(":");const c=[];for(;0<o&&r.length;)c.push(r.shift()),o--;return r.length&&c.push(r.join(":")),c}function T(r){d.setTimeout(()=>{throw r},0)}function g(){var r=hr;let o=null;return r.g&&(o=r.g,r.g=r.g.next,r.g||(r.h=null),o.next=null),o}class Se{constructor(){this.h=this.g=null}add(o,c){const h=Nt.get();h.set(o,c),this.h?this.h.next=h:this.g=h,this.h=h}}var Nt=new N(()=>new _c,r=>r.reset());class _c{constructor(){this.next=this.g=this.h=null}set(o,c){this.h=o,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,Ot=!1,hr=new Se,Bi=()=>{const r=d.Promise.resolve(void 0);Dt=()=>{r.then(yc)}};var yc=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(c){T(c)}var o=Nt;o.j(r),100>o.h&&(o.h++,r.next=o.g,o.g=r)}Ot=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(r,o){this.type=r,this.g=this.target=o,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var vc=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var r=!1,o=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const c=()=>{};d.addEventListener("test",c,o),d.removeEventListener("test",c,o)}catch{}return r})();function Lt(r,o){if(ee.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var c=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=o,o=r.relatedTarget){if(ie){e:{try{H(o.nodeName);var I=!0;break e}catch{}I=!1}I||(o=null)}}else c=="mouseover"?o=r.fromElement:c=="mouseout"&&(o=r.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:wc[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Lt.aa.h.call(this)}}x(Lt,ee);var wc={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),bc=0;function Ic(r,o,c,h,I){this.listener=r,this.proxy=null,this.src=o,this.type=c,this.capture=!!h,this.ha=I,this.key=++bc,this.da=this.fa=!1}function bn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function In(r){this.src=r,this.g={},this.h=0}In.prototype.add=function(r,o,c,h,I){var S=r.toString();r=this.g[S],r||(r=this.g[S]=[],this.h++);var C=dr(r,o,h,I);return-1<C?(o=r[C],c||(o.fa=!1)):(o=new Ic(o,this.src,S,!!h,I),o.fa=c,r.push(o)),o};function ur(r,o){var c=o.type;if(c in r.g){var h=r.g[c],I=Array.prototype.indexOf.call(h,o,void 0),S;(S=0<=I)&&Array.prototype.splice.call(h,I,1),S&&(bn(o),r.g[c].length==0&&(delete r.g[c],r.h--))}}function dr(r,o,c,h){for(var I=0;I<r.length;++I){var S=r[I];if(!S.da&&S.listener==o&&S.capture==!!c&&S.ha==h)return I}return-1}var fr="closure_lm_"+(1e6*Math.random()|0),pr={};function Hi(r,o,c,h,I){if(Array.isArray(o)){for(var S=0;S<o.length;S++)Hi(r,o[S],c,h,I);return null}return c=Gi(c),r&&r[wn]?r.K(o,c,y(h)?!!h.capture:!1,I):Tc(r,o,c,!1,h,I)}function Tc(r,o,c,h,I,S){if(!o)throw Error("Invalid event type");var C=y(I)?!!I.capture:!!I,W=mr(r);if(W||(r[fr]=W=new In(r)),c=W.add(o,c,h,C,S),c.proxy)return c;if(h=Ec(),c.proxy=h,h.src=r,h.listener=c,r.addEventListener)vc||(I=C),I===void 0&&(I=!1),r.addEventListener(o.toString(),h,I);else if(r.attachEvent)r.attachEvent(zi(o.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Ec(){function r(c){return o.call(r.src,r.listener,c)}const o=Sc;return r}function Wi(r,o,c,h,I){if(Array.isArray(o))for(var S=0;S<o.length;S++)Wi(r,o[S],c,h,I);else h=y(h)?!!h.capture:!!h,c=Gi(c),r&&r[wn]?(r=r.i,o=String(o).toString(),o in r.g&&(S=r.g[o],c=dr(S,c,h,I),-1<c&&(bn(S[c]),Array.prototype.splice.call(S,c,1),S.length==0&&(delete r.g[o],r.h--)))):r&&(r=mr(r))&&(o=r.g[o.toString()],r=-1,o&&(r=dr(o,c,h,I)),(c=-1<r?o[r]:null)&&gr(c))}function gr(r){if(typeof r!="number"&&r&&!r.da){var o=r.src;if(o&&o[wn])ur(o.i,r);else{var c=r.type,h=r.proxy;o.removeEventListener?o.removeEventListener(c,h,r.capture):o.detachEvent?o.detachEvent(zi(c),h):o.addListener&&o.removeListener&&o.removeListener(h),(c=mr(o))?(ur(c,r),c.h==0&&(c.src=null,o[fr]=null)):bn(r)}}}function zi(r){return r in pr?pr[r]:pr[r]="on"+r}function Sc(r,o){if(r.da)r=!0;else{o=new Lt(o,this);var c=r.listener,h=r.ha||r.src;r.fa&&gr(r),r=c.call(h,o)}return r}function mr(r){return r=r[fr],r instanceof In?r:null}var _r="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gi(r){return typeof r=="function"?r:(r[_r]||(r[_r]=function(o){return r.handleEvent(o)}),r[_r])}function te(){Ue.call(this),this.i=new In(this),this.M=this,this.F=null}x(te,Ue),te.prototype[wn]=!0,te.prototype.removeEventListener=function(r,o,c,h){Wi(this,r,o,c,h)};function se(r,o){var c,h=r.F;if(h)for(c=[];h;h=h.F)c.push(h);if(r=r.M,h=o.type||o,typeof o=="string")o=new ee(o,r);else if(o instanceof ee)o.target=o.target||r;else{var I=o;o=new ee(h,r),_(o,I)}if(I=!0,c)for(var S=c.length-1;0<=S;S--){var C=o.g=c[S];I=Tn(C,h,!0,o)&&I}if(C=o.g=r,I=Tn(C,h,!0,o)&&I,I=Tn(C,h,!1,o)&&I,c)for(S=0;S<c.length;S++)C=o.g=c[S],I=Tn(C,h,!1,o)&&I}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var r=this.i,o;for(o in r.g){for(var c=r.g[o],h=0;h<c.length;h++)bn(c[h]);delete r.g[o],r.h--}}this.F=null},te.prototype.K=function(r,o,c,h){return this.i.add(String(r),o,!1,c,h)},te.prototype.L=function(r,o,c,h){return this.i.add(String(r),o,!0,c,h)};function Tn(r,o,c,h){if(o=r.i.g[String(o)],!o)return!0;o=o.concat();for(var I=!0,S=0;S<o.length;++S){var C=o[S];if(C&&!C.da&&C.capture==c){var W=C.listener,Z=C.ha||C.src;C.fa&&ur(r.i,C),I=W.call(Z,h)!==!1&&I}}return I&&!h.defaultPrevented}function qi(r,o,c){if(typeof r=="function")c&&(r=E(r,c));else if(r&&typeof r.handleEvent=="function")r=E(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:d.setTimeout(r,o||0)}function Ki(r){r.g=qi(()=>{r.g=null,r.i&&(r.i=!1,Ki(r))},r.l);const o=r.h;r.h=null,r.m.apply(null,o)}class Ac extends Ue{constructor(o,c){super(),this.m=o,this.l=c,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Ki(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mt(r){Ue.call(this),this.h=r,this.g={}}x(Mt,Ue);var Ji=[];function Xi(r){q(r.g,function(o,c){this.g.hasOwnProperty(c)&&gr(o)},r),r.g={}}Mt.prototype.N=function(){Mt.aa.N.call(this),Xi(this)},Mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yr=d.JSON.stringify,kc=d.JSON.parse,xc=class{stringify(r){return d.JSON.stringify(r,void 0)}parse(r){return d.JSON.parse(r,void 0)}};function vr(){}vr.prototype.h=null;function Yi(r){return r.h||(r.h=r.i())}function Cc(){}var Ut={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wr(){ee.call(this,"d")}x(wr,ee);function br(){ee.call(this,"c")}x(br,ee);var ft={},Qi=null;function Ir(){return Qi=Qi||new te}ft.La="serverreachability";function Zi(r){ee.call(this,ft.La,r)}x(Zi,ee);function Ft(r){const o=Ir();se(o,new Zi(o))}ft.STAT_EVENT="statevent";function es(r,o){ee.call(this,ft.STAT_EVENT,r),this.stat=o}x(es,ee);function oe(r){const o=Ir();se(o,new es(o,r))}ft.Ma="timingevent";function ts(r,o){ee.call(this,ft.Ma,r),this.size=o}x(ts,ee);function jt(r,o){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){r()},o)}function Vt(){this.g=!0}Vt.prototype.xa=function(){this.g=!1};function Pc(r,o,c,h,I,S){r.info(function(){if(r.g)if(S)for(var C="",W=S.split("&"),Z=0;Z<W.length;Z++){var V=W[Z].split("=");if(1<V.length){var ne=V[0];V=V[1];var re=ne.split("_");C=2<=re.length&&re[1]=="type"?C+(ne+"="+V+"&"):C+(ne+"=redacted&")}}else C=null;else C=S;return"XMLHTTP REQ ("+h+") [attempt "+I+"]: "+o+`
`+c+`
`+C})}function Rc(r,o,c,h,I,S,C){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+I+"]: "+o+`
`+c+`
`+S+" "+C})}function pt(r,o,c,h){r.info(function(){return"XMLHTTP TEXT ("+o+"): "+Dc(r,c)+(h?" "+h:"")})}function Nc(r,o){r.info(function(){return"TIMEOUT: "+o})}Vt.prototype.info=function(){};function Dc(r,o){if(!r.g)return o;if(!o)return null;try{var c=JSON.parse(o);if(c){for(r=0;r<c.length;r++)if(Array.isArray(c[r])){var h=c[r];if(!(2>h.length)){var I=h[1];if(Array.isArray(I)&&!(1>I.length)){var S=I[0];if(S!="noop"&&S!="stop"&&S!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return yr(c)}catch{return o}}var Tr={NO_ERROR:0,TIMEOUT:8},Oc={},Er;function En(){}x(En,vr),En.prototype.g=function(){return new XMLHttpRequest},En.prototype.i=function(){return{}},Er=new En;function Fe(r,o,c,h){this.j=r,this.i=o,this.l=c,this.R=h||1,this.U=new Mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ns}function ns(){this.i=null,this.g="",this.h=!1}var rs={},Sr={};function Ar(r,o,c){r.L=1,r.v=xn(Ae(o)),r.m=c,r.P=!0,is(r,null)}function is(r,o){r.F=Date.now(),Sn(r),r.A=Ae(r.v);var c=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),ys(c.i,"t",h),r.C=0,c=r.j.J,r.h=new ns,r.g=Ms(r.j,c?o:null,!r.m),0<r.O&&(r.M=new Ac(E(r.Y,r,r.g),r.O)),o=r.U,c=r.g,h=r.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ji[0]=I.toString()),I=Ji);for(var S=0;S<I.length;S++){var C=Hi(c,I[S],h||o.handleEvent,!1,o.h||o);if(!C)break;o.g[C.key]=C}o=r.H?p(r.H):{},r.m?(r.u||(r.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,o)):(r.u="GET",r.g.ea(r.A,r.u,null,o)),Ft(),Pc(r.i,r.u,r.A,r.l,r.R,r.m)}Fe.prototype.ca=function(r){r=r.target;const o=this.M;o&&ke(r)==3?o.j():this.Y(r)},Fe.prototype.Y=function(r){try{if(r==this.g)e:{const re=ke(this.g);var o=this.g.Ba();const _t=this.g.Z();if(!(3>re)&&(re!=3||this.g&&(this.h.h||this.g.oa()||Ss(this.g)))){this.J||re!=4||o==7||(o==8||0>=_t?Ft(3):Ft(2)),kr(this);var c=this.g.Z();this.X=c;t:if(ss(this)){var h=Ss(this.g);r="";var I=h.length,S=ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xe(this),$t(this);var C="";break t}this.h.i=new d.TextDecoder}for(o=0;o<I;o++)this.h.h=!0,r+=this.h.i.decode(h[o],{stream:!(S&&o==I-1)});h.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=c==200,Rc(this.i,this.u,this.A,this.l,this.R,re,c),this.o){if(this.T&&!this.K){t:{if(this.g){var W,Z=this.g;if((W=Z.g?Z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(W)){var V=W;break t}}V=null}if(c=V)pt(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xr(this,c);else{this.o=!1,this.s=3,oe(12),Xe(this),$t(this);break e}}if(this.P){c=!0;let de;for(;!this.J&&this.C<C.length;)if(de=Lc(this,C),de==Sr){re==4&&(this.s=4,oe(14),c=!1),pt(this.i,this.l,null,"[Incomplete Response]");break}else if(de==rs){this.s=4,oe(15),pt(this.i,this.l,C,"[Invalid Chunk]"),c=!1;break}else pt(this.i,this.l,de,null),xr(this,de);if(ss(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||C.length!=0||this.h.h||(this.s=1,oe(16),c=!1),this.o=this.o&&c,!c)pt(this.i,this.l,C,"[Invalid Chunked Response]"),Xe(this),$t(this);else if(0<C.length&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.ba&&!ne.M&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Or(ne),ne.M=!0,oe(11))}}else pt(this.i,this.l,C,null),xr(this,C);re==4&&Xe(this),this.o&&!this.J&&(re==4?Ns(this.j,this):(this.o=!1,Sn(this)))}else Qc(this.g),c==400&&0<C.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Xe(this),$t(this)}}}catch{}finally{}};function ss(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Lc(r,o){var c=r.C,h=o.indexOf(`
`,c);return h==-1?Sr:(c=Number(o.substring(c,h)),isNaN(c)?rs:(h+=1,h+c>o.length?Sr:(o=o.slice(h,h+c),r.C=h+c,o)))}Fe.prototype.cancel=function(){this.J=!0,Xe(this)};function Sn(r){r.S=Date.now()+r.I,os(r,r.I)}function os(r,o){if(r.B!=null)throw Error("WatchDog timer not null");r.B=jt(E(r.ba,r),o)}function kr(r){r.B&&(d.clearTimeout(r.B),r.B=null)}Fe.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Nc(this.i,this.A),this.L!=2&&(Ft(),oe(17)),Xe(this),this.s=2,$t(this)):os(this,this.S-r)};function $t(r){r.j.G==0||r.J||Ns(r.j,r)}function Xe(r){kr(r);var o=r.M;o&&typeof o.ma=="function"&&o.ma(),r.M=null,Xi(r.U),r.g&&(o=r.g,r.g=null,o.abort(),o.ma())}function xr(r,o){try{var c=r.j;if(c.G!=0&&(c.g==r||Cr(c.h,r))){if(!r.K&&Cr(c.h,r)&&c.G==3){try{var h=c.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var I=h;if(I[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<r.F)On(c),Nn(c);else break e;Dr(c),oe(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=jt(E(c.Za,c),6e3));if(1>=ls(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Qe(c,11)}else if((r.K||c.g==r)&&On(c),!D(o))for(I=c.Da.g.parse(o),o=0;o<I.length;o++){let V=I[o];if(c.T=V[0],V=V[1],c.G==2)if(V[0]=="c"){c.K=V[1],c.ia=V[2];const ne=V[3];ne!=null&&(c.la=ne,c.j.info("VER="+c.la));const re=V[4];re!=null&&(c.Aa=re,c.j.info("SVER="+c.Aa));const _t=V[5];_t!=null&&typeof _t=="number"&&0<_t&&(h=1.5*_t,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const de=r.g;if(de){const Ln=de.g?de.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ln){var S=h.h;S.g||Ln.indexOf("spdy")==-1&&Ln.indexOf("quic")==-1&&Ln.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Pr(S,S.h),S.h=null))}if(h.D){const Lr=de.g?de.g.getResponseHeader("X-HTTP-Session-Id"):null;Lr&&(h.ya=Lr,z(h.I,h.D,Lr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-r.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var C=r;if(h.qa=Ls(h,h.J?h.ia:null,h.W),C.K){hs(h.h,C);var W=C,Z=h.L;Z&&(W.I=Z),W.B&&(kr(W),Sn(W)),h.g=C}else Ps(h);0<c.i.length&&Dn(c)}else V[0]!="stop"&&V[0]!="close"||Qe(c,7);else c.G==3&&(V[0]=="stop"||V[0]=="close"?V[0]=="stop"?Qe(c,7):Nr(c):V[0]!="noop"&&c.l&&c.l.ta(V),c.v=0)}}Ft(4)}catch{}}var Mc=class{constructor(r,o){this.g=r,this.map=o}};function as(r){this.l=r||10,d.PerformanceNavigationTiming?(r=d.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cs(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function ls(r){return r.h?1:r.g?r.g.size:0}function Cr(r,o){return r.h?r.h==o:r.g?r.g.has(o):!1}function Pr(r,o){r.g?r.g.add(o):r.h=o}function hs(r,o){r.h&&r.h==o?r.h=null:r.g&&r.g.has(o)&&r.g.delete(o)}as.prototype.cancel=function(){if(this.i=us(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function us(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let o=r.i;for(const c of r.g.values())o=o.concat(c.D);return o}return P(r.i)}function Uc(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(m(r)){for(var o=[],c=r.length,h=0;h<c;h++)o.push(r[h]);return o}o=[],c=0;for(h in r)o[c++]=r[h];return o}function Fc(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(m(r)||typeof r=="string"){var o=[];r=r.length;for(var c=0;c<r;c++)o.push(c);return o}o=[],c=0;for(const h in r)o[c++]=h;return o}}}function ds(r,o){if(r.forEach&&typeof r.forEach=="function")r.forEach(o,void 0);else if(m(r)||typeof r=="string")Array.prototype.forEach.call(r,o,void 0);else for(var c=Fc(r),h=Uc(r),I=h.length,S=0;S<I;S++)o.call(void 0,h[S],c&&c[S],r)}var fs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jc(r,o){if(r){r=r.split("&");for(var c=0;c<r.length;c++){var h=r[c].indexOf("="),I=null;if(0<=h){var S=r[c].substring(0,h);I=r[c].substring(h+1)}else S=r[c];o(S,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Ye(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ye){this.h=r.h,An(this,r.j),this.o=r.o,this.g=r.g,kn(this,r.s),this.l=r.l;var o=r.i,c=new Wt;c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),ps(this,c),this.m=r.m}else r&&(o=String(r).match(fs))?(this.h=!1,An(this,o[1]||"",!0),this.o=Bt(o[2]||""),this.g=Bt(o[3]||"",!0),kn(this,o[4]),this.l=Bt(o[5]||"",!0),ps(this,o[6]||"",!0),this.m=Bt(o[7]||"")):(this.h=!1,this.i=new Wt(null,this.h))}Ye.prototype.toString=function(){var r=[],o=this.j;o&&r.push(Ht(o,gs,!0),":");var c=this.g;return(c||o=="file")&&(r.push("//"),(o=this.o)&&r.push(Ht(o,gs,!0),"@"),r.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&r.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&r.push("/"),r.push(Ht(c,c.charAt(0)=="/"?Bc:$c,!0))),(c=this.i.toString())&&r.push("?",c),(c=this.m)&&r.push("#",Ht(c,Wc)),r.join("")};function Ae(r){return new Ye(r)}function An(r,o,c){r.j=c?Bt(o,!0):o,r.j&&(r.j=r.j.replace(/:$/,""))}function kn(r,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);r.s=o}else r.s=null}function ps(r,o,c){o instanceof Wt?(r.i=o,zc(r.i,r.h)):(c||(o=Ht(o,Hc)),r.i=new Wt(o,r.h))}function z(r,o,c){r.i.set(o,c)}function xn(r){return z(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Bt(r,o){return r?o?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ht(r,o,c){return typeof r=="string"?(r=encodeURI(r).replace(o,Vc),c&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Vc(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var gs=/[#\/\?@]/g,$c=/[#\?:]/g,Bc=/[#\?]/g,Hc=/[#\?@]/g,Wc=/#/g;function Wt(r,o){this.h=this.g=null,this.i=r||null,this.j=!!o}function je(r){r.g||(r.g=new Map,r.h=0,r.i&&jc(r.i,function(o,c){r.add(decodeURIComponent(o.replace(/\+/g," ")),c)}))}n=Wt.prototype,n.add=function(r,o){je(this),this.i=null,r=gt(this,r);var c=this.g.get(r);return c||this.g.set(r,c=[]),c.push(o),this.h+=1,this};function ms(r,o){je(r),o=gt(r,o),r.g.has(o)&&(r.i=null,r.h-=r.g.get(o).length,r.g.delete(o))}function _s(r,o){return je(r),o=gt(r,o),r.g.has(o)}n.forEach=function(r,o){je(this),this.g.forEach(function(c,h){c.forEach(function(I){r.call(o,I,h,this)},this)},this)},n.na=function(){je(this);const r=Array.from(this.g.values()),o=Array.from(this.g.keys()),c=[];for(let h=0;h<o.length;h++){const I=r[h];for(let S=0;S<I.length;S++)c.push(o[h])}return c},n.V=function(r){je(this);let o=[];if(typeof r=="string")_s(this,r)&&(o=o.concat(this.g.get(gt(this,r))));else{r=Array.from(this.g.values());for(let c=0;c<r.length;c++)o=o.concat(r[c])}return o},n.set=function(r,o){return je(this),this.i=null,r=gt(this,r),_s(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[o]),this.h+=1,this},n.get=function(r,o){return r?(r=this.V(r),0<r.length?String(r[0]):o):o};function ys(r,o,c){ms(r,o),0<c.length&&(r.i=null,r.g.set(gt(r,o),P(c)),r.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],o=Array.from(this.g.keys());for(var c=0;c<o.length;c++){var h=o[c];const S=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var I=S;C[h]!==""&&(I+="="+encodeURIComponent(String(C[h]))),r.push(I)}}return this.i=r.join("&")};function gt(r,o){return o=String(o),r.j&&(o=o.toLowerCase()),o}function zc(r,o){o&&!r.j&&(je(r),r.i=null,r.g.forEach(function(c,h){var I=h.toLowerCase();h!=I&&(ms(this,h),ys(this,I,c))},r)),r.j=o}function Gc(r,o){const c=new Vt;if(d.Image){const h=new Image;h.onload=k(Ve,c,"TestLoadImage: loaded",!0,o,h),h.onerror=k(Ve,c,"TestLoadImage: error",!1,o,h),h.onabort=k(Ve,c,"TestLoadImage: abort",!1,o,h),h.ontimeout=k(Ve,c,"TestLoadImage: timeout",!1,o,h),d.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else o(!1)}function qc(r,o){const c=new Vt,h=new AbortController,I=setTimeout(()=>{h.abort(),Ve(c,"TestPingServer: timeout",!1,o)},1e4);fetch(r,{signal:h.signal}).then(S=>{clearTimeout(I),S.ok?Ve(c,"TestPingServer: ok",!0,o):Ve(c,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(I),Ve(c,"TestPingServer: error",!1,o)})}function Ve(r,o,c,h,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),h(c)}catch{}}function Kc(){this.g=new xc}function Jc(r,o,c){const h=c||"";try{ds(r,function(I,S){let C=I;y(I)&&(C=yr(I)),o.push(h+S+"="+encodeURIComponent(C))})}catch(I){throw o.push(h+"type="+encodeURIComponent("_badmap")),I}}function Cn(r){this.l=r.Ub||null,this.j=r.eb||!1}x(Cn,vr),Cn.prototype.g=function(){return new Pn(this.l,this.j)},Cn.prototype.i=(function(r){return function(){return r}})({});function Pn(r,o){te.call(this),this.D=r,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Pn,te),n=Pn.prototype,n.open=function(r,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=o,this.readyState=1,Gt(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(o.body=r),(this.D||d).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zt(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Gt(this)),this.g&&(this.readyState=3,Gt(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vs(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function vs(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var o=r.value?r.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!r.done}))&&(this.response=this.responseText+=o)}r.done?zt(this):Gt(this),this.readyState==3&&vs(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,zt(this))},n.Qa=function(r){this.g&&(this.response=r,zt(this))},n.ga=function(){this.g&&zt(this)};function zt(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Gt(r)}n.setRequestHeader=function(r,o){this.u.append(r,o)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],o=this.h.entries();for(var c=o.next();!c.done;)c=c.value,r.push(c[0]+": "+c[1]),c=o.next();return r.join(`\r
`)};function Gt(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function ws(r){let o="";return q(r,function(c,h){o+=h,o+=":",o+=c,o+=`\r
`}),o}function Rr(r,o,c){e:{for(h in c){var h=!1;break e}h=!0}h||(c=ws(c),typeof r=="string"?c!=null&&encodeURIComponent(String(c)):z(r,o,c))}function J(r){te.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(J,te);var Xc=/^https?$/i,Yc=["POST","PUT"];n=J.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,o,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);o=o?o.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Er.g(),this.v=this.o?Yi(this.o):Yi(Er),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(o,String(r),!0),this.B=!1}catch(S){bs(this,S);return}if(r=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var I in h)c.set(I,h[I]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const S of h.keys())c.set(S,h.get(S));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(S=>S.toLowerCase()=="content-type"),I=d.FormData&&r instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Yc,o,void 0))||h||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,C]of c)this.g.setRequestHeader(S,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Es(this),this.u=!0,this.g.send(r),this.u=!1}catch(S){bs(this,S)}};function bs(r,o){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=o,r.m=5,Is(r),Rn(r)}function Is(r){r.A||(r.A=!0,se(r,"complete"),se(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,se(this,"complete"),se(this,"abort"),Rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ts(this):this.bb())},n.bb=function(){Ts(this)};function Ts(r){if(r.h&&typeof l<"u"&&(!r.v[1]||ke(r)!=4||r.Z()!=2)){if(r.u&&ke(r)==4)qi(r.Ea,0,r);else if(se(r,"readystatechange"),ke(r)==4){r.h=!1;try{const C=r.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var c;if(!(c=o)){var h;if(h=C===0){var I=String(r.D).match(fs)[1]||null;!I&&d.self&&d.self.location&&(I=d.self.location.protocol.slice(0,-1)),h=!Xc.test(I?I.toLowerCase():"")}c=h}if(c)se(r,"complete"),se(r,"success");else{r.m=6;try{var S=2<ke(r)?r.g.statusText:""}catch{S=""}r.l=S+" ["+r.Z()+"]",Is(r)}}finally{Rn(r)}}}}function Rn(r,o){if(r.g){Es(r);const c=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,o||se(r,"ready");try{c.onreadystatechange=h}catch{}}}function Es(r){r.I&&(d.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function ke(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<ke(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var o=this.g.responseText;return r&&o.indexOf(r)==0&&(o=o.substring(r.length)),kc(o)}};function Ss(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Qc(r){const o={};r=(r.g&&2<=ke(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(D(r[h]))continue;var c=w(r[h]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const S=o[I]||[];o[I]=S,S.push(c)}b(o,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qt(r,o,c){return c&&c.internalChannelParams&&c.internalChannelParams[r]||o}function As(r){this.Aa=0,this.i=[],this.j=new Vt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qt("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qt("baseRetryDelayMs",5e3,r),this.cb=qt("retryDelaySeedMs",1e4,r),this.Wa=qt("forwardChannelMaxRetries",2,r),this.wa=qt("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new as(r&&r.concurrentRequestLimit),this.Da=new Kc,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=As.prototype,n.la=8,n.G=1,n.connect=function(r,o,c,h){oe(0),this.W=r,this.H=o||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=Ls(this,null,this.W),Dn(this)};function Nr(r){if(ks(r),r.G==3){var o=r.U++,c=Ae(r.I);if(z(c,"SID",r.K),z(c,"RID",o),z(c,"TYPE","terminate"),Kt(r,c),o=new Fe(r,r.j,o),o.L=2,o.v=xn(Ae(c)),c=!1,d.navigator&&d.navigator.sendBeacon)try{c=d.navigator.sendBeacon(o.v.toString(),"")}catch{}!c&&d.Image&&(new Image().src=o.v,c=!0),c||(o.g=Ms(o.j,null),o.g.ea(o.v)),o.F=Date.now(),Sn(o)}Os(r)}function Nn(r){r.g&&(Or(r),r.g.cancel(),r.g=null)}function ks(r){Nn(r),r.u&&(d.clearTimeout(r.u),r.u=null),On(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&d.clearTimeout(r.s),r.s=null)}function Dn(r){if(!cs(r.h)&&!r.s){r.s=!0;var o=r.Ga;Dt||Bi(),Ot||(Dt(),Ot=!0),hr.add(o,r),r.B=0}}function Zc(r,o){return ls(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=o.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=jt(E(r.Ga,r,o),Ds(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const I=new Fe(this,this.j,r);let S=this.o;if(this.S&&(S?(S=p(S),_(S,this.S)):S=this.S),this.m!==null||this.O||(I.H=S,S=null),this.P)e:{for(var o=0,c=0;c<this.i.length;c++){t:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=c;break e}if(o===4096||c===this.i.length-1){o=c+1;break e}}o=1e3}else o=1e3;o=Cs(this,I,o),c=Ae(this.I),z(c,"RID",r),z(c,"CVER",22),this.D&&z(c,"X-HTTP-Session-Id",this.D),Kt(this,c),S&&(this.O?o="headers="+encodeURIComponent(String(ws(S)))+"&"+o:this.m&&Rr(c,this.m,S)),Pr(this.h,I),this.Ua&&z(c,"TYPE","init"),this.P?(z(c,"$req",o),z(c,"SID","null"),I.T=!0,Ar(I,c,null)):Ar(I,c,o),this.G=2}}else this.G==3&&(r?xs(this,r):this.i.length==0||cs(this.h)||xs(this))};function xs(r,o){var c;o?c=o.l:c=r.U++;const h=Ae(r.I);z(h,"SID",r.K),z(h,"RID",c),z(h,"AID",r.T),Kt(r,h),r.m&&r.o&&Rr(h,r.m,r.o),c=new Fe(r,r.j,c,r.B+1),r.m===null&&(c.H=r.o),o&&(r.i=o.D.concat(r.i)),o=Cs(r,c,1e3),c.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Pr(r.h,c),Ar(c,h,o)}function Kt(r,o){r.H&&q(r.H,function(c,h){z(o,h,c)}),r.l&&ds({},function(c,h){z(o,h,c)})}function Cs(r,o,c){c=Math.min(r.i.length,c);var h=r.l?E(r.l.Na,r.l,r):null;e:{var I=r.i;let S=-1;for(;;){const C=["count="+c];S==-1?0<c?(S=I[0].g,C.push("ofs="+S)):S=0:C.push("ofs="+S);let W=!0;for(let Z=0;Z<c;Z++){let V=I[Z].g;const ne=I[Z].map;if(V-=S,0>V)S=Math.max(0,I[Z].g-100),W=!1;else try{Jc(ne,C,"req"+V+"_")}catch{h&&h(ne)}}if(W){h=C.join("&");break e}}}return r=r.i.splice(0,c),o.D=r,h}function Ps(r){if(!r.g&&!r.u){r.Y=1;var o=r.Fa;Dt||Bi(),Ot||(Dt(),Ot=!0),hr.add(o,r),r.v=0}}function Dr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=jt(E(r.Fa,r),Ds(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Rs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=jt(E(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),Nn(this),Rs(this))};function Or(r){r.A!=null&&(d.clearTimeout(r.A),r.A=null)}function Rs(r){r.g=new Fe(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var o=Ae(r.qa);z(o,"RID","rpc"),z(o,"SID",r.K),z(o,"AID",r.T),z(o,"CI",r.F?"0":"1"),!r.F&&r.ja&&z(o,"TO",r.ja),z(o,"TYPE","xmlhttp"),Kt(r,o),r.m&&r.o&&Rr(o,r.m,r.o),r.L&&(r.g.I=r.L);var c=r.g;r=r.ia,c.L=1,c.v=xn(Ae(o)),c.m=null,c.P=!0,is(c,r)}n.Za=function(){this.C!=null&&(this.C=null,Nn(this),Dr(this),oe(19))};function On(r){r.C!=null&&(d.clearTimeout(r.C),r.C=null)}function Ns(r,o){var c=null;if(r.g==o){On(r),Or(r),r.g=null;var h=2}else if(Cr(r.h,o))c=o.D,hs(r.h,o),h=1;else return;if(r.G!=0){if(o.o)if(h==1){c=o.m?o.m.length:0,o=Date.now()-o.F;var I=r.B;h=Ir(),se(h,new ts(h,c)),Dn(r)}else Ps(r);else if(I=o.s,I==3||I==0&&0<o.X||!(h==1&&Zc(r,o)||h==2&&Dr(r)))switch(c&&0<c.length&&(o=r.h,o.i=o.i.concat(c)),I){case 1:Qe(r,5);break;case 4:Qe(r,10);break;case 3:Qe(r,6);break;default:Qe(r,2)}}}function Ds(r,o){let c=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(c*=2),c*o}function Qe(r,o){if(r.j.info("Error code "+o),o==2){var c=E(r.fb,r),h=r.Xa;const I=!h;h=new Ye(h||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||An(h,"https"),xn(h),I?Gc(h.toString(),c):qc(h.toString(),c)}else oe(2);r.G=0,r.l&&r.l.sa(o),Os(r),ks(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function Os(r){if(r.G=0,r.ka=[],r.l){const o=us(r.h);(o.length!=0||r.i.length!=0)&&(R(r.ka,o),R(r.ka,r.i),r.h.i.length=0,P(r.i),r.i.length=0),r.l.ra()}}function Ls(r,o,c){var h=c instanceof Ye?Ae(c):new Ye(c);if(h.g!="")o&&(h.g=o+"."+h.g),kn(h,h.s);else{var I=d.location;h=I.protocol,o=o?o+"."+I.hostname:I.hostname,I=+I.port;var S=new Ye(null);h&&An(S,h),o&&(S.g=o),I&&kn(S,I),c&&(S.l=c),h=S}return c=r.D,o=r.ya,c&&o&&z(h,c,o),z(h,"VER",r.la),Kt(r,h),h}function Ms(r,o,c){if(o&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=r.Ca&&!r.pa?new J(new Cn({eb:c})):new J(r.pa),o.Ha(r.J),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Us(){}n=Us.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function he(r,o){te.call(this),this.g=new As(o),this.l=r,this.h=o&&o.messageUrlParams||null,r=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(r?r["X-WebChannel-Content-Type"]=o.messageContentType:r={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(r?r["X-WebChannel-Client-Profile"]=o.va:r={"X-WebChannel-Client-Profile":o.va}),this.g.S=r,(r=o&&o.Sb)&&!D(r)&&(this.g.m=r),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!D(o)&&(this.g.D=o,r=this.h,r!==null&&o in r&&(r=this.h,o in r&&delete r[o])),this.j=new mt(this)}x(he,te),he.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},he.prototype.close=function(){Nr(this.g)},he.prototype.o=function(r){var o=this.g;if(typeof r=="string"){var c={};c.__data__=r,r=c}else this.u&&(c={},c.__data__=yr(r),r=c);o.i.push(new Mc(o.Ya++,r)),o.G==3&&Dn(o)},he.prototype.N=function(){this.g.l=null,delete this.j,Nr(this.g),delete this.g,he.aa.N.call(this)};function Fs(r){wr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var o=r.__sm__;if(o){e:{for(const c in o){r=c;break e}r=void 0}(this.i=r)&&(r=this.i,o=o!==null&&r in o?o[r]:void 0),this.data=o}else this.data=r}x(Fs,wr);function js(){br.call(this),this.status=1}x(js,br);function mt(r){this.g=r}x(mt,Us),mt.prototype.ua=function(){se(this.g,"a")},mt.prototype.ta=function(r){se(this.g,new Fs(r))},mt.prototype.sa=function(r){se(this.g,new js)},mt.prototype.ra=function(){se(this.g,"b")},he.prototype.send=he.prototype.o,he.prototype.open=he.prototype.m,he.prototype.close=he.prototype.close,Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,Oc.COMPLETE="complete",Cc.EventType=Ut,Ut.OPEN="a",Ut.CLOSE="b",Ut.ERROR="c",Ut.MESSAGE="d",te.prototype.listen=te.prototype.K,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha}).apply(typeof Fn<"u"?Fn:typeof self<"u"?self:typeof window<"u"?window:{});const wo="@firebase/firestore",bo="4.9.1";/**
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
 */let mn="12.2.0";/**
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
 */const kt=new vi("@firebase/firestore");function ge(n,...e){if(kt.logLevel<=B.DEBUG){const t=e.map(Di);kt.debug(`Firestore (${mn}): ${n}`,...t)}}function tc(n,...e){if(kt.logLevel<=B.ERROR){const t=e.map(Di);kt.error(`Firestore (${mn}): ${n}`,...t)}}function Hd(n,...e){if(kt.logLevel<=B.WARN){const t=e.map(Di);kt.warn(`Firestore (${mn}): ${n}`,...t)}}function Di(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function on(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,nc(n,i,t)}function nc(n,e,t){let i=`FIRESTORE (${mn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw tc(i),new Error(i)}function Zt(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||nc(e,s,i)}/**
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
 */const U={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class F extends Me{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class en{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class rc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ae.UNAUTHENTICATED)))}shutdown(){}}class zd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Gd{constructor(e){this.t=e,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Zt(this.o===void 0,42304);let i=this.i;const s=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let a=new en;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new en,e.enqueueRetryable((()=>s(this.currentUser)))};const l=()=>{const m=a;e.enqueueRetryable((async()=>{await m.promise,await s(this.currentUser)}))},d=m=>{ge("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((m=>d(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(ge("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new en)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ge("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Zt(typeof i.accessToken=="string",31837,{l:i}),new rc(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Zt(e===null||typeof e=="string",2055,{h:e}),new ae(e)}}class qd{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Kd{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new qd(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ae.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Io{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jd{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Zt(this.o===void 0,3512);const i=a=>{a.error!=null&&ge("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,ge("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>i(a)))};const s=a=>{ge("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>s(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):ge("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Io(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Zt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Io(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Yd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Xd(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<t&&(i+=e.charAt(s[a]%62))}return i}}function Je(n,e){return n<e?-1:n>e?1:0}function Qd(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),a=e.charAt(i);if(s!==a)return Hr(s)===Hr(a)?Je(s,a):Hr(s)?1:-1}return Je(n.length,e.length)}const Zd=55296,ef=57343;function Hr(n){const e=n.charCodeAt(0);return e>=Zd&&e<=ef}/**
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
 */const To="__name__";class _e{constructor(e,t,i){t===void 0?t=0:t>e.length&&on(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&on(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return _e.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _e?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const a=_e.compareSegments(e.get(s),t.get(s));if(a!==0)return a}return Je(e.length,t.length)}static compareSegments(e,t){const i=_e.isNumericId(e),s=_e.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?_e.extractNumericId(e).compare(_e.extractNumericId(t)):Qd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}}class fe extends _e{construct(e,t,i){return new fe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new F(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new fe(t)}static emptyPath(){return new fe([])}}const tf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends _e{construct(e,t,i){return new nt(e,t,i)}static isValidIdentifier(e){return tf.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===To}static keyField(){return new nt([To])}static fromServerFormat(e){const t=[];let i="",s=0;const a=()=>{if(i.length===0)throw new F(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let l=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new F(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new F(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,s+=2}else d==="`"?(l=!l,s++):d!=="."||l?(i+=d,s++):(a(),s++)}if(a(),l)throw new F(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(t)}static emptyPath(){return new nt([])}}/**
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
 */class st{constructor(e){this.path=e}static fromPath(e){return new st(fe.fromString(e))}static fromName(e){return new st(fe.fromString(e).popFirst(5))}static empty(){return new st(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new st(new fe(e.slice()))}}function nf(n,e,t,i){if(e===!0&&i===!0)throw new F(U.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function sf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":on(12329,{type:typeof n})}function of(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sf(n);throw new F(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Y(n,e){const t={typeString:n};return e&&(t.value=e),t}function _n(n,e){if(!rf(n))throw new F(U.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,a="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const l=n[i];if(s&&typeof l!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${i}' field to equal '${a.value}'`;break}}if(t)throw new F(U.INVALID_ARGUMENT,t);return!0}/**
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
 */const Eo=-62135596800,So=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*So);return new ye(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Eo)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/So}_compareTo(e){return this.seconds===e.seconds?Je(this.nanoseconds,e.nanoseconds):Je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_n(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Eo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Y("string",ye._jsonSchemaVersion),seconds:Y("number"),nanoseconds:Y("number")};function af(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class cf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new cf("Invalid base64 string: "+a):a}})(e);return new ut(t)}static fromUint8Array(e){const t=(function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a})(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const si="(default)";class sr{constructor(e,t){this.projectId=e,this.database=t||si}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database===si}isEqual(e){return e instanceof sr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class lf{constructor(e,t=null,i=[],s=[],a=null,l="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=l,this.startAt=d,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function hf(n){return new lf(n)}/**
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
 */var Ao,M;(M=Ao||(Ao={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ni([4294967295,4294967295],0);/**
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
 */const uf=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=1048576;function Wr(){return typeof document<"u"?document:null}/**
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
 */class ff{constructor(e,t,i=1e3,s=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=s,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&ge("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Oi{constructor(e,t,i,s,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,a){const l=Date.now()+i,d=new Oi(e,t,l,s,a);return d.start(i),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ko,xo;(xo=ko||(ko={})).Ma="default",xo.Cache="cache";/**
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
 */function pf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="firestore.googleapis.com",Po=!0;class Ro{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ic,this.ssl=Po}else this.host=e.host,this.ssl=e.ssl??Po;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<df)throw new F(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pf(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ro({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ro(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Wd;switch(i.type){case"firstParty":return new Kd(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new F(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Co.get(t);i&&(ge("ComponentProvider","Removing Datastore"),Co.delete(t),i.terminate())})(this),Promise.resolve()}}function oc(n,e,t,i={}){n=of(n,sc);const s=xt(e),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;s&&(_i(`https://${d}`),yi("Firestore",!0)),a.host!==ic&&a.host!==d&&Hd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...a,host:d,ssl:s,emulatorOptions:i};if(!ct(m,l)&&(n._setSettings(m),i.mockUserToken)){let y,A;if(typeof i.mockUserToken=="string")y=i.mockUserToken,A=ae.MOCK_USER;else{y=ml(i.mockUserToken,n._app?.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new F(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new ae(v)}n._authCredentials=new zd(new rc(y,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Li(this.firestore,e,this._query)}}class we{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(_n(t,we._jsonSchema))return new we(e,i||null,new st(fe.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:Y("string",we._jsonSchemaVersion),referencePath:Y("string")};class Mi extends Li{constructor(e,t,i){super(e,t,hf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new st(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="AsyncQueue";class Do{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ff(this,"async_queue_retry"),this._c=()=>{const i=Wr();i&&ge(No,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Wr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Wr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new en;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!af(e))throw e;ge(No,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,tc("INTERNAL UNHANDLED ERROR: ",Oo(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Oi.createAndSchedule(this,e,t,i,(a=>this.hc(a)));return this.tc.push(s),s}uc(){this.nc&&on(47125,{Pc:Oo(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Oo(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class gf extends sc{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Do,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Do(e),this._firestoreClient=void 0,await e}}}function mf(n,e){const t=typeof n=="object"?n:bi(),i=typeof n=="string"?n:si,s=ar(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=fa("firestore");a&&oc(s,...a)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ce(ut.fromBase64String(e))}catch(t){throw new F(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ce(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ce._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_n(e,Ce._jsonSchema))return Ce.fromBase64String(e.bytes)}}Ce._jsonSchemaVersion="firestore/bytes/1.0",Ce._jsonSchema={type:Y("string",Ce._jsonSchemaVersion),bytes:Y("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ot{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Je(this._lat,e._lat)||Je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ot._jsonSchemaVersion}}static fromJSON(e){if(_n(e,ot._jsonSchema))return new ot(e.latitude,e.longitude)}}ot._jsonSchemaVersion="firestore/geoPoint/1.0",ot._jsonSchema={type:Y("string",ot._jsonSchemaVersion),latitude:Y("number"),longitude:Y("number")};/**
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
 */class at{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:at._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_n(e,at._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new at(e.vectorValues);throw new F(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}at._jsonSchemaVersion="firestore/vectorValue/1.0",at._jsonSchema={type:Y("string",at._jsonSchemaVersion),vectorValues:Y("object")};const _f=new RegExp("[~\\*/\\[\\]]");function yf(n,e,t){if(e.search(_f)>=0)throw Lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new ac(...e.split("."))._internalPath}catch{throw Lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Lo(n,e,t,i,s){let a=`Function ${e}() called with invalid data`;a+=". ";let l="";return new F(U.INVALID_ARGUMENT,a+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,i,s,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vf extends cc{data(){return super.data()}}function lc(n,e){return typeof e=="string"?yf(n,e):e instanceof ac?e._internalPath:e._delegate._internalPath}class jn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tt extends cc{constructor(e,t,i,s,a,l){super(e,t,i,s,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(lc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Tt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Tt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tt._jsonSchema={type:Y("string",Tt._jsonSchemaVersion),bundleSource:Y("string","DocumentSnapshot"),bundleName:Y("string"),bundle:Y("string")};class Kn extends Tt{data(e={}){return super.data(e)}}class tn{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new jn(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Kn(this._firestore,this._userDataWriter,i.key,i,new jn(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,a){if(s._snapshot.oldDocs.isEmpty()){let l=0;return s._snapshot.docChanges.map((d=>{const m=new Kn(s._firestore,s._userDataWriter,d.doc.key,d.doc,new jn(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:l++}}))}{let l=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((d=>a||d.type!==3)).map((d=>{const m=new Kn(s._firestore,s._userDataWriter,d.doc.key,d.doc,new jn(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let y=-1,A=-1;return d.type!==0&&(y=l.indexOf(d.doc.key),l=l.delete(d.doc.key)),d.type!==1&&(l=l.add(d.doc),A=l.indexOf(d.doc.key)),{type:wf(d.type),doc:m,oldIndex:y,newIndex:A}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),i.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return on(61501,{type:n})}}tn._jsonSchemaVersion="firestore/querySnapshot/1.0",tn._jsonSchema={type:Y("string",tn._jsonSchemaVersion),bundleSource:Y("string","QuerySnapshot"),bundleName:Y("string"),bundle:Y("string")};(function(e,t=!0){(function(s){mn=s})(Ct),lt(new Ke("firestore",((i,{instanceIdentifier:s,options:a})=>{const l=i.getProvider("app").getImmediate(),d=new gf(new Gd(i.getProvider("auth-internal")),new Jd(l,i.getProvider("app-check-internal")),(function(y,A){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new F(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sr(y.options.projectId,A)})(l,s),l);return a={useFetchStreams:t,...a},d._setSettings(a),d}),"PUBLIC").setMultipleInstances(!0)),be(wo,bo,e),be(wo,bo,"esm2020")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="functions";/**
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
 */class bf{constructor(e,t,i,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,le(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||t.get().then(a=>this.auth=a,()=>{}),this.messaging||i.get().then(a=>this.messaging=a,()=>{}),this.appCheck||s?.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
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
 */const oi="us-central1";class If{constructor(e,t,i,s,a=oi,l=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new bf(e,t,i,s),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(a);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=oi}catch{this.customDomain=null,this.region=a}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Tf(n,e,t){const i=xt(e);n.emulatorOrigin=`http${i?"s":""}://${e}:${t}`,i&&(_i(n.emulatorOrigin+"/backends"),yi("Functions",!0))}const Mo="@firebase/functions",Uo="0.13.1";/**
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
 */const Ef="auth-internal",Sf="app-check-internal",Af="messaging-internal";function kf(n){const e=(t,{instanceIdentifier:i})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider(Ef),l=t.getProvider(Af),d=t.getProvider(Sf);return new If(s,a,l,d,i)};lt(new Ke(hc,e,"PUBLIC").setMultipleInstances(!0)),be(Mo,Uo,n),be(Mo,Uo,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n=bi(),e=oi){const i=ar(Ee(n),hc).getImmediate({identifier:e}),s=fa("functions");return s&&uc(i,...s),i}function uc(n,e,t){Tf(Ee(n),e,t)}kf();const Ui=typeof __firebase_config<"u";let Et,ai=null;Ui?(Et=JSON.parse(__firebase_config),ai=typeof __initial_auth_token<"u"?__initial_auth_token:null):Et={apiKey:"AIzaSyC3w_aZojKeEp3llhJlKlVGj_rbOHAMhb0",authDomain:"my-new-firebase-project-94e22.firebaseapp.com",projectId:"my-new-firebase-project-94e22",storageBucket:"my-new-firebase-project-94e22.firebasestorage.app",messagingSenderId:"210118924526",appId:"1:210118924526:web:c88671740e8b13e1e7fbff"};let Vn=null,St=null,ci=null,li=null;Et&&Et.apiKey?(Vn=ya(Et),St=ec(Vn),ci=mf(Vn),li=xf(Vn),Ui&&(async()=>{try{ai?(await xu(St,ai),console.log("Firebase: Signed in with custom token.")):(await Va(St),console.warn("Firebase: Signed in anonymously (no custom token)."))}catch(e){console.error("Firebase Authentication Failed:",e)}})()):console.error("Firebase initialization failed: Configuration (apiKey) is missing.");const vt=St,Cf=new xe;if(location.hostname==="localhost"&&!Ui&&St&&ci&&li){const n=Et.apiKey==="demo-api-key";oc(ci,"localhost",8080),uc(li,"localhost",5001),n&&Ua(St,"http://localhost:9099")}var dt,G,zr,Fo,or=0,dc=[],X=$,jo=X.__b,Vo=X.__r,$o=X.diffed,Bo=X.__c,Ho=X.unmount,Wo=X.__;function yn(n,e){X.__h&&X.__h(G,n,or||e),or=0;var t=G.__H||(G.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function L(n){return or=1,Fi(pc,n)}function Fi(n,e,t){var i=yn(dt++,2);if(i.t=n,!i.__c&&(i.__=[pc(void 0,e),function(d){var m=i.__N?i.__N[0]:i.__[0],y=i.t(m,d);m!==y&&(i.__N=[y,i.__[1]],i.__c.setState({}))}],i.__c=G,!G.__f)){var s=function(d,m,y){if(!i.__c.__H)return!0;var A=i.__c.__H.__.filter(function(E){return!!E.__c});if(A.every(function(E){return!E.__N}))return!a||a.call(this,d,m,y);var v=i.__c.props!==d;return A.forEach(function(E){if(E.__N){var k=E.__[0];E.__=E.__N,E.__N=void 0,k!==E.__[0]&&(v=!0)}}),a&&a.call(this,d,m,y)||v};G.__f=!0;var a=G.shouldComponentUpdate,l=G.componentWillUpdate;G.componentWillUpdate=function(d,m,y){if(this.__e){var A=a;a=void 0,s(d,m,y),a=A}l&&l.call(this,d,m,y)},G.shouldComponentUpdate=s}return i.__N||i.__}function ue(n,e){var t=yn(dt++,3);!X.__s&&$i(t.__H,e)&&(t.__=n,t.u=e,G.__H.__h.push(t))}function fc(n,e){var t=yn(dt++,4);!X.__s&&$i(t.__H,e)&&(t.__=n,t.u=e,G.__h.push(t))}function Be(n){return or=5,ji(function(){return{current:n}},[])}function ji(n,e){var t=yn(dt++,7);return $i(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Vi(n){var e=G.context[n.__c],t=yn(dt++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(G)),e.props.value):n.__}function Pf(){for(var n;n=dc.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Jn),n.__H.__h.forEach(hi),n.__H.__h=[]}catch(e){n.__H.__h=[],X.__e(e,n.__v)}}X.__b=function(n){G=null,jo&&jo(n)},X.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Wo&&Wo(n,e)},X.__r=function(n){Vo&&Vo(n),dt=0;var e=(G=n.__c).__H;e&&(zr===G?(e.__h=[],G.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(Jn),e.__h.forEach(hi),e.__h=[],dt=0)),zr=G},X.diffed=function(n){$o&&$o(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(dc.push(e)!==1&&Fo===X.requestAnimationFrame||((Fo=X.requestAnimationFrame)||Rf)(Pf)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),zr=G=null},X.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Jn),t.__h=t.__h.filter(function(i){return!i.__||hi(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],X.__e(i,t.__v)}}),Bo&&Bo(n,e)},X.unmount=function(n){Ho&&Ho(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{Jn(i)}catch(s){e=s}}),t.__H=void 0,e&&X.__e(e,t.__v))};var zo=typeof requestAnimationFrame=="function";function Rf(n){var e,t=function(){clearTimeout(i),zo&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);zo&&(e=requestAnimationFrame(t))}function Jn(n){var e=G,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),G=e}function hi(n){var e=G;n.__c=n.__(),G=e}function $i(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function pc(n,e){return typeof e=="function"?e(n):e}let yt,Jt;function Nf(n){return!Jt||(typeof Jt=="string"?n.startsWith(Jt):Jt.test(n))}function Df(n,e){let t="";if(yt=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return n;const i=e.composedPath().find(a=>a.nodeName=="A"&&a.href),s=i&&i.getAttribute("href");if(!i||i.origin!=location.origin||/^#/.test(s)||!/^(_?self)?$/i.test(i.target)||!Nf(s)||i.download)return n;yt=!0,e.preventDefault(),t=i.href.replace(location.origin,"")}else e&&e.url?(yt=!e.replace,t=e.url):t=location.pathname+location.search;return yt===!0?history.pushState(null,"",t):yt===!1&&history.replaceState(null,"",t),t}const Of=(n,e,t={})=>{n=n.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean),t.params||(t.params={});for(let i=0,s,a;i<Math.max(n.length,e.length);i++){let[,l,d,m]=(e[i]||"").match(/^(:?)(.*?)([+*?]?)$/);if(s=n[i],!(!l&&d==s)){if(!l&&s&&m=="*"){t.rest="/"+n.slice(i).map(decodeURIComponent).join("/");break}if(!l||!s&&m!="?"&&m!="*")return;if(a=m=="+"||m=="*",a?s=n.slice(i).map(decodeURIComponent).join("/")||void 0:s&&(s=decodeURIComponent(s)),t.params[d]=s,d in t||(t[d]=s),a)break}}return t};function vn(n){const[e,t]=Fi(Df,n.url||location.pathname+location.search);n.scope&&(Jt=n.scope);const i=yt===!0,s=ji(()=>{const a=new URL(e,location.origin),l=a.pathname.replace(/\/+$/g,"")||"/";return{url:e,path:l,query:Object.fromEntries(a.searchParams),route:(d,m)=>t({url:d,replace:m}),wasPush:i}},[e]);return fc(()=>(addEventListener("click",t),addEventListener("popstate",t),()=>{removeEventListener("click",t),removeEventListener("popstate",t)}),[]),rt(vn.ctx.Provider,{value:s},n.children)}const Lf=Promise.resolve();function gc(n){const[e,t]=Fi(f=>f+1,0),{url:i,query:s,wasPush:a,path:l}=mc();if(!i)throw new Error("preact-iso's <Router> must be used within a <LocationProvider>, see: https://github.com/preactjs/preact-iso#locationprovider");const{rest:d=l,params:m={}}=Vi(ui),y=Be(!1),A=Be(l),v=Be(0),E=Be(),k=Be(),x=Be(),P=Be(!1),R=Be();R.current=!1;let N,D,j;ia(n.children).some(f=>{if(Of(d,f.props.path,j={...f.props,path:d,query:s,params:Object.assign({},m),rest:""}))return N=Hs(f,j);f.props.default&&(D=Hs(f,j))});let H=N||D;const ie=E.current&&E.current.__u&$n&&E.current.__u&Bn,q=E.current&&E.current.__h,b=ji(()=>{k.current=E.current,E.current=rt(ui.Provider,{value:j},H);const f=k.current&&k.current.props.children;return!f||!H||H.type!==f.type||H.props.component!==f.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),v.current++,!0):!1},[i,JSON.stringify(j)]);ie?(E.current.__u|=$n,E.current.__u|=Bn):q&&(E.current.__h=!0);const p=k.current;return k.current=null,this.__c=(f,_)=>{R.current=!0,k.current=p,n.onLoadStart&&n.onLoadStart(i),y.current=!0;let w=v.current;f.then(()=>{w===v.current&&(k.current=null,E.current&&(_.__h&&(E.current.__h=_.__h),_.__u&Bn&&(E.current.__u|=Bn),_.__u&$n&&(E.current.__u|=$n)),Lf.then(t))})},fc(()=>{const f=this.__v&&this.__v.__e;if(R.current){!P.current&&!x.current&&(x.current=f);return}!P.current&&x.current&&(x.current!==f&&x.current.remove(),x.current=null),P.current=!0,A.current!==l&&(a&&scrollTo(0,0),n.onRouteChange&&n.onRouteChange(i),A.current=l),n.onLoadEnd&&y.current&&n.onLoadEnd(i),y.current=!1},[l,a,e]),b?[rt(Gr,{r:E}),rt(Gr,{r:k})]:rt(Gr,{r:E})}const $n=32,Bn=128,Gr=({r:n})=>n.current;gc.Provider=vn;vn.ctx=ca({});const ui=ca({}),Ze=n=>rt(n.component,n),mc=()=>Vi(vn.ctx),Mf=()=>Vi(ui),Go=$.__b;$.__b=n=>{n.type&&n.type._forwarded&&n.ref&&(n.props.ref=n.ref,n.ref=null),Go&&Go(n)};const qo=$.__e;$.__e=(n,e,t)=>{if(n&&n.then){let i=e;for(;i=i.__;)if(i.__c&&i.__c.__c)return e.__e==null&&(e.__c.__z=[t.__e],e.__e=t.__e,e.__k=t.__k),e.__k||(e.__k=[]),i.__c.__c(n,e)}qo&&qo(n,e,t)};function Uf(){const[n,e]=L(null),[t,i]=L(null);ue(()=>{const d=Ba(vt,e);return()=>d()},[]);async function s(){i(null);try{await Yu(vt,Cf)}catch(d){if(console.error("Login failed:",d),d.code==="auth/unauthorized-domain"){const m=window.location.hostname==="0.0.0.0";i({type:"unauthorized-domain",message:"Login failed: Domain not authorized.",details:m?"Firebase does not allow OAuth on 0.0.0.0. Please use localhost.":`Add "${window.location.hostname}" to Authorized Domains in Firebase Console.`})}else i({message:d.message})}}async function a(){i(null);try{await Va(vt)}catch(d){console.error("Guest login failed:",d),i({message:"Guest login failed. Ensure Anonymous Auth is enabled in Firebase Console."})}}async function l(){await Ru(vt)}return n?u("div",{class:"flex flex-col items-center justify-center h-screen space-y-4 bg-gray-900 text-white",children:[n.photoURL&&u("img",{src:n.photoURL,alt:"Profile",class:"rounded-full w-20 h-20 border-4 border-indigo-500 shadow-lg"}),u("p",{class:"text-xl font-semibold",children:["Hello, ",n.displayName||n.email,"!"]}),u("button",{onClick:l,class:"bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors shadow-md",children:"Sign Out"})]}):u("div",{class:"flex flex-col items-center justify-center h-screen bg-gray-900 text-white space-y-6",children:[u("header",{class:"text-center mb-8",children:[u("h1",{class:"text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 mb-2",children:"Procrastinot"}),u("p",{class:"text-xl text-gray-400",children:"Beat procrastination together."})]}),u("div",{class:"bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 w-full max-w-md",children:[u("h2",{class:"text-2xl font-bold mb-6 text-center",children:"Sign In"}),u("button",{onClick:s,class:"w-full bg-white text-gray-900 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-3 shadow-md",children:[u("svg",{class:"w-5 h-5",viewBox:"0 0 24 24",children:[u("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),u("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),u("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),u("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),u("span",{children:"Sign in with Google"})]}),u("button",{onClick:a,class:"w-full bg-gray-700 text-white font-semibold px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center space-x-3 shadow-md mt-4",children:[u("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),u("span",{children:"Continue as Guest"})]}),t&&u("div",{class:"mt-6 p-4 bg-red-900/30 text-red-200 rounded-lg text-center border border-red-500/50",children:[u("p",{class:"font-bold",children:t.message}),u("p",{class:"text-sm mt-1 text-red-300",children:t.details||t.message}),t.type==="unauthorized-domain"&&window.location.hostname==="0.0.0.0"&&u("button",{onClick:()=>{const d=new URL(window.location.href);d.hostname="localhost",window.location.href=d.toString()},class:"mt-3 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 shadow-sm transition-colors",children:"Switch to localhost"})]})]})]})}const Ff="/api";async function Q(n,e={}){const t=ec();let i=null;const s=t.currentUser;s&&(i=await s.getIdToken());const a={"Content-Type":"application/json",...e.headers};i&&(a.Authorization=`Bearer ${i}`);const l={...e,headers:a};l.body&&typeof l.body=="object"&&(l.body=JSON.stringify(l.body));const d=await fetch(`${Ff}${n}`,l),m=await d.json();if(!d.ok)throw new Error(m.error||d.statusText);return m}const K={syncUser:async()=>await Q("/users/me",{method:"PUT"}),getUserProfile:async()=>await Q("/users/me",{method:"GET"}),createTask:async(n,e)=>await Q("/tasks",{method:"POST",body:{title:n,roomId:e}}),getTasks:async(n,e=!1)=>{const t=new URLSearchParams;return n&&t.append("roomId",n),e&&t.append("includeAllUsers","true"),await Q(`/tasks?${t.toString()}`,{method:"GET"})},updateTask:async(n,e)=>await Q(`/tasks/${n}`,{method:"PATCH",body:{completed:e}}),sendNudge:async n=>await Q("/nudges",{method:"POST",body:{friendId:n}}),getRooms:async()=>await Q("/users/me/rooms",{method:"GET"}),getRoom:async n=>await Q(`/rooms/${n}`,{method:"GET"}),createRoom:async n=>await Q("/rooms",{method:"POST",body:n}),joinRoom:async n=>await Q("/rooms/join",{method:"POST",body:{inviteCode:n}}),startSession:async(n,e)=>await Q(`/rooms/${n}/sessions`,{method:"POST",body:{mode:e}}),joinSession:async n=>await Q(`/sessions/${n}/join`,{method:"POST"}),getSessionDetails:async n=>await Q(`/sessions/${n}`,{method:"GET"}),endSession:async n=>await Q(`/sessions/${n}/end`,{method:"POST"}),getSessions:async n=>await Q(`/rooms/${n}/sessions`,{method:"GET"}),getFriends:async n=>await Q(`/users/${n||"me"}/friends`,{method:"GET"}),addFriend:async({friendCode:n,username:e,targetUserId:t})=>await Q("/friends",{method:"POST",body:{friendCode:n,username:e,targetUserId:t}}),getSuggestedFriends:async()=>await Q("/friends/suggestions",{method:"GET"}),getFriendActivity:async n=>(console.warn("MOCK: getFriendActivity using placeholder data."),{completedSessions:5,nudgesReceived:2}),trackProgress:async(n,e,t,i)=>await Q("/tasks",{method:"POST",body:{title:i.task,roomId:n}})};function jf({onRoomCreated:n}){console.log("CreateRoom component rendering");const[e,t]=L(""),[i,s]=L(""),[a,l]=L(!1);async function d(m){if(m.preventDefault(),!!e.trim())try{const y=await K.createRoom({name:e,description:i});typeof n=="function"&&n(y),t(""),s(""),l(!1)}catch(y){console.error("Failed to create room:",y.message)}}return a?u("div",{class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:u("div",{class:"bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md border border-gray-700",children:[u("h3",{class:"text-xl font-bold text-white mb-4",children:"Create New Room"}),u("form",{onSubmit:d,class:"flex flex-col space-y-4",children:[u("div",{children:[u("label",{class:"block text-gray-400 text-sm mb-1",children:"Room Name"}),u("input",{type:"text",value:e,onInput:m=>t(m.target.value),placeholder:"e.g. Study Group A",class:"w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500",required:!0})]}),u("div",{children:[u("label",{class:"block text-gray-400 text-sm mb-1",children:"Requirements / Description"}),u("textarea",{value:i,onInput:m=>s(m.target.value),placeholder:"e.g. Must have camera on, 25/5 pomodoro...",class:"w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white h-24 focus:outline-none focus:border-green-500"})]}),u("div",{class:"flex justify-end space-x-3 mt-2",children:[u("button",{type:"button",onClick:()=>l(!1),class:"px-4 py-2 text-gray-300 hover:text-white",children:"Cancel"}),u("button",{type:"submit",class:"bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",children:"Create Room"})]})]})]})}):u("button",{onClick:()=>l(!0),class:"bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition",children:"+ Create Room"})}function Vf({onRoomJoined:n}){console.log("JoinRoom component rendering");const[e,t]=L("");async function i(s){if(s.preventDefault(),!!e.trim())try{const a=await K.joinRoom(e);n(a),t("")}catch(a){console.error("Failed to join room:",a.message)}}return u("form",{onSubmit:i,class:"flex items-center space-x-2",children:[u("input",{type:"text",value:e,onInput:s=>t(s.target.value),placeholder:"Enter invite code",class:"border px-2 py-1 rounded"}),u("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700",children:"Join"})]})}function $f({roomId:n,onSessionStarted:e}){console.log("StartSession component rendering");const[t,i]=L("pomodoro");async function s(){try{const a=await K.startSession(n,t);e(a)}catch(a){console.error("Failed to start session:",a.message)}}return u("div",{class:"flex items-center space-x-2",children:[u("select",{value:t,onChange:a=>i(a.target.value),class:"border px-2 py-1 rounded",children:[u("option",{value:"pomodoro",children:"Pomodoro (25 min)"}),u("option",{value:"short_break",children:"Short Break (5 min)"}),u("option",{value:"long_break",children:"Long Break (15 min)"})]}),u("button",{onClick:s,class:"bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700",children:"Start Session"})]})}function Bf({roomId:n,includeAllUsers:e=!1}){const[t,i]=L([]),[s,a]=L(""),[l,d]=L(!0),[m,y]=L(!1),[A,v]=L(null);ue(()=>{E();const P=setInterval(E,5e3);return()=>clearInterval(P)},[n,e]);async function E(){t.length===0&&d(!0);try{const P=await K.getTasks(n,e);i(P),v(null)}catch(P){console.error("Failed to load tasks:",P),v("Failed to load tasks")}finally{d(!1)}}async function k(P){if(P.preventDefault(),!!s.trim()){y(!0);try{const R=await K.createTask(s,n);i([R,...t]),a("")}catch(R){console.error("Failed to add task:",R),v("Failed to add task")}finally{y(!1)}}}async function x(P,R){i(t.map(N=>N.id===P?{...N,completed:R}:N));try{await K.updateTask(P,R)}catch(N){console.error("Failed to update task:",N),v("Failed to update task"),i(t.map(D=>D.id===P?{...D,completed:!R}:D))}}return u("div",{class:"bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 w-full max-w-md mt-8",children:[u("h3",{class:"text-xl font-bold text-white mb-4 flex items-center",children:[u("span",{class:"mr-2",children:"📝"})," Session Tasks"]}),u("form",{onSubmit:k,class:"flex gap-2 mb-4",children:[u("input",{type:"text",value:s,onInput:P=>a(P.target.value),placeholder:"Add a task for this session...",class:"flex-1 bg-gray-900 border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-purple-500 transition-colors",disabled:m}),u("button",{type:"submit",class:"bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50",disabled:m||!s.trim(),children:m?"...":"Add"})]}),A&&u("div",{class:"text-red-400 text-sm mb-4 bg-red-900/20 p-2 rounded border border-red-500/20",children:A}),l?u("div",{class:"flex justify-center py-4",children:u("div",{class:"animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"})}):t.length===0?u("p",{class:"text-gray-400 text-center py-4 italic",children:"No tasks yet. Set a goal!"}):u("ul",{class:"space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar",children:t.map(P=>u("li",{class:"flex flex-col group bg-gray-900/50 p-3 rounded-lg border border-transparent hover:border-gray-600 transition-colors",children:[e&&P.user&&u("div",{class:"flex items-center mb-2 text-xs text-gray-400",children:[P.user.avatarUrl?u("img",{src:P.user.avatarUrl,class:"w-4 h-4 rounded-full mr-2"}):u("div",{class:"w-4 h-4 rounded-full bg-gray-600 mr-2"}),u("span",{children:P.user.displayName})]}),u("label",{class:"flex items-center cursor-pointer w-full",children:[u("div",{class:"relative flex items-center",children:[u("input",{type:"checkbox",checked:P.completed,onChange:R=>x(P.id,R.target.checked),disabled:e&&!P.userId,class:"peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-500 bg-gray-900 transition-all checked:border-green-500 checked:bg-green-500 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"}),u("svg",{class:"pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:u("path",{d:"M3.5 6L5 7.5L8.5 4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})})]}),u("span",{class:`ml-3 text-sm transition-all duration-200 ${P.completed?"text-gray-500 line-through":"text-gray-200"}`,children:P.title})]})]},P.id))})]})}function Hf({session:n,room:e,user:t,onEndSession:i}){const[s,a]=L(0),[l,d]=L(!0),[m,y]=L([]);ue(()=>{const k=()=>{const N=n.startTime+n.durationMinutes*60*1e3,D=Math.max(0,Math.floor((N-Date.now())/1e3));a(D),D===0&&d(!1)};k();const x=setInterval(k,1e3),P=async()=>{try{const N=await K.getSessionDetails(n.id);y(N.participants||[]),N.session.endTime&&(alert("The session has been ended by the host."),i())}catch(N){console.error("Failed to fetch session details",N)}};P();const R=setInterval(P,5e3);return()=>{clearInterval(x),clearInterval(R)}},[n]);const A=async()=>{if(window.confirm("Are you sure you want to end the session for everyone?"))try{await K.endSession(n.id),i()}catch(k){console.error("Failed to end session:",k),alert("Failed to end session: "+k.message)}},v=t&&n.userId===t.uid,E=k=>{const x=Math.floor(k/60),P=k%60;return`${x.toString().padStart(2,"0")}:${P.toString().padStart(2,"0")}`};return u("div",{class:"fixed inset-0 bg-gray-900 text-white z-50 flex flex-col items-center justify-center p-8",children:u("div",{class:"max-w-4xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700",children:[u("div",{class:"text-center mb-10",children:[u("h1",{class:"text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",children:e.name}),u("p",{class:"text-xl text-gray-300 max-w-2xl mx-auto",children:e.description||"No specific requirements for this room. Stay focused!"})]}),u("div",{class:"flex flex-col items-center justify-center mb-12",children:[u("div",{class:"text-9xl font-mono font-bold tracking-wider mb-4 text-white drop-shadow-lg",children:E(s)}),u("div",{class:"text-2xl text-purple-300 uppercase tracking-widest font-semibold mb-6",children:n.mode.replace("_"," ")}),u("div",{class:"flex space-x-4 mb-4",children:m.map(k=>u("div",{class:"flex flex-col items-center",children:[k.avatarUrl?u("img",{src:k.avatarUrl,alt:k.displayName,class:"w-10 h-10 rounded-full border-2 border-purple-500"}):u("div",{class:"w-10 h-10 rounded-full bg-gray-600 border-2 border-purple-500 flex items-center justify-center text-xs font-bold",children:k.displayName[0]}),u("span",{class:"text-xs text-gray-400 mt-1",children:k.displayName})]},k.userId))})]}),u("div",{class:"flex justify-center space-x-6",children:v?u("button",{onClick:A,class:"bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"End Session"}):u("button",{onClick:i,class:"bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg",children:"Leave Session"})}),u("div",{class:"flex justify-center mt-8 w-full",children:u(Bf,{roomId:e.id,includeAllUsers:!0})})]})})}function Wf({user:n}){const[e,t]=L([]),[i,s]=L(null),[a,l]=L(null),d=()=>{K.getRooms().then(v=>{Array.isArray(v)?t(v):console.error("API did not return an array for rooms:",v)}).catch(console.error)};ue(()=>{d()},[]);const m=v=>{const E=e.findIndex(k=>k.id===v.id);if(E>-1){const k=[...e];k[E]=v,t(k)}else t([...e,v])},y=v=>{console.log("Session started:",v);const E=e.find(k=>k.id===v.roomId);l(E),s(v)},A=()=>{s(null),l(null)};return i&&a?u(Hf,{session:i,room:a,user:n,onEndSession:A}):u("div",{class:"container mx-auto p-6",children:[u("div",{class:"flex flex-col md:flex-row justify-between items-center mb-8",children:[u("h2",{class:"text-3xl font-bold text-white mb-4 md:mb-0",children:"Focus Rooms"}),u("div",{class:"flex space-x-4",children:[u(jf,{onRoomCreated:m}),u(Vf,{onRoomJoined:m})]})]}),u("div",{class:"grid grid-cols-1 gap-8",children:u("div",{class:"lg:col-span-1",children:[u("h3",{class:"text-xl font-semibold text-gray-300 mb-4 px-2",children:"Your Rooms"}),u("ul",{class:"space-y-3",children:[e.map(v=>u("li",{class:"p-4 border border-gray-700 rounded-xl flex justify-between items-center transition-all duration-200 bg-gray-800 hover:bg-gray-750 hover:border-gray-600",children:[u("a",{href:`/rooms/${v.id}`,class:"flex-grow group",children:[u("span",{class:"font-medium text-lg text-white block group-hover:text-indigo-400 transition-colors",children:v.name}),u("span",{class:"text-xs text-gray-400 mr-2",children:["Code: ",u("span",{class:"font-mono text-indigo-400",children:v.inviteCode})]})]}),u($f,{roomId:v.id,onSessionStarted:y})]},v.id)),e.length===0&&u("div",{class:"text-gray-500 text-center py-8 bg-gray-800 rounded-xl border border-gray-700 border-dashed",children:"No rooms yet. Join or create one!"})]})]})})]})}function zf({roomId:n,sessionId:e,userId:t}){const[i,s]=L(""),[a,l]=L(!1),[d,m]=L(null);async function y(A){if(A.preventDefault(),!!i.trim()){l(!0),m(null);try{await K.trackProgress(n,e,t,{task:i}),s("")}catch(v){m(v.message)}finally{l(!1)}}}return u("form",{onSubmit:y,class:"mt-4",children:[u("h4",{class:"font-semibold mb-2",children:"Track Your Progress"}),u("div",{class:"flex items-center space-x-2",children:[u("input",{type:"text",value:i,onInput:A=>s(A.target.value),placeholder:"Enter a completed task",class:"border px-2 py-1 rounded w-full",disabled:a}),u("button",{type:"submit",class:"bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400",disabled:a,children:a?"Submitting...":"Submit"})]}),d&&u("p",{class:"text-red-500 mt-2",children:["Error: ",d]})]})}function Gf({user:n}){const{roomId:e}=Mf(),[t,i]=L(null),[s,a]=L(!0),[l,d]=L(null),[m,y]=L(null);if(ue(()=>{e&&(a(!0),K.getRoom(e).then(v=>{i(v),a(!1)}).catch(v=>{console.error(v),d("Room not found or access denied."),a(!1)}))},[e]),ue(()=>{let v;const E=()=>{K.getSessions(t.id).then(k=>{const x=Date.now(),P=k.find(R=>{const N=R.startTime+R.durationMinutes*60*1e3;return!R.endTime&&x<N});y(P||null)}).catch(console.error)};return t&&(E(),v=setInterval(E,1e4)),()=>{v&&clearInterval(v)}},[t]),s)return u("div",{class:"p-6 text-gray-300",children:"Loading room details..."});if(l)return u("div",{class:"p-6 text-red-400",children:l});if(!t)return u("div",{class:"p-6 text-gray-300",children:"Room not found."});const A=m?m.id:"s_placeholder_123";return u("div",{class:"container mx-auto p-6",children:u("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden",children:[u("div",{class:"p-6 border-b border-gray-700 bg-gray-850",children:[u("h3",{class:"text-2xl font-bold text-white",children:t.name}),u("p",{class:"text-gray-400 text-sm mt-1",children:"Room Details & Activity"})]}),u("div",{class:"p-6",children:[u("div",{class:"flex justify-between items-start mb-4",children:[u("div",{children:u("p",{class:"text-gray-300",children:[u("strong",{children:"Mode:"})," ",t.mode||"Standard"]})}),m&&u("button",{onClick:async()=>{await K.joinSession(m.id),window.location.reload()},class:"bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded animate-pulse",children:"Join Active Session"})]}),u("div",{class:"mb-4 text-gray-300",children:u("div",{class:"p-3 bg-indigo-900 bg-opacity-30 border border-indigo-700 rounded-lg",children:[u("p",{class:"text-sm text-indigo-300 mb-1 font-bold uppercase tracking-wider",children:"Room Join Code"}),u("div",{class:"flex items-center space-x-2",children:[u("span",{class:"text-2xl font-mono font-bold text-white tracking-widest select-all",children:t.inviteCode}),u("button",{class:"text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded",onClick:()=>navigator.clipboard.writeText(t.inviteCode),children:"Copy"})]}),u("p",{class:"text-xs text-gray-400 mt-1",children:"Share this code with friends to let them join."})]})}),u("div",{class:"mb-6",children:[u("h4",{class:"font-bold text-gray-300 mb-1",children:"Requirements:"}),u("p",{class:"text-gray-400 italic bg-gray-900 p-3 rounded border border-gray-700",children:t.description||"No specific requirements set."})]}),u(zf,{roomId:t.id,sessionId:A,userId:n.uid})]})]})})}function qf(){const{url:n}=mc(),e=[{href:"/",label:"Home"},{href:"/rooms",label:"Rooms"},{href:"/friends",label:"Friends"},{href:"/accountability",label:"Accountability"},{href:"/profile",label:"Profile"}],t=i=>i==="/"?n==="/":n.startsWith(i);return u("nav",{class:"bg-gray-900 text-white shadow-md border-b border-gray-800 sticky top-0 z-50",children:u("div",{class:"container mx-auto px-4",children:u("div",{class:"flex items-center justify-between h-16",children:[u("div",{class:"flex items-center",children:u("a",{href:"/",class:"font-bold text-xl tracking-tight cursor-pointer hover:text-indigo-400 transition-colors",children:"Procrastinot"})}),u("div",{class:"flex space-x-1",children:e.map(i=>u("a",{href:i.href,class:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${t(i.href)?"bg-gray-800 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white"}`,children:i.label},i.href))})]})})})}function Kf({user:n}){const[e,t]=L([]),[i,s]=L(!0),[a,l]=L(null),[d,m]=L(!1),[y,A]=L("name"),[v,E]=L(""),[k,x]=L(null),[P,R]=L(""),[N,D]=L([]),[j,H]=L(!1),ie=()=>{n&&(s(!0),K.getFriends(n.uid).then(f=>{t(Array.isArray(f)?f:[]),l(null)}).catch(f=>{l(f.message),t([])}).finally(()=>s(!1)))},q=()=>{H(!0),K.getSuggestedFriends().then(f=>{D(Array.isArray(f)?f:[])}).catch(f=>console.error("Failed to fetch suggestions:",f)).finally(()=>H(!1))};ue(()=>{ie()},[n]),ue(()=>{d&&q()},[d]);const b=async f=>{if(f.preventDefault(),!!v.trim()){x("adding"),R("");try{const _=y==="code"?{friendCode:v}:{username:v};await K.addFriend(_),x("success"),R("Friend added successfully!"),E(""),ie(),q()}catch(_){x("error"),R(_.message||"Failed to add friend")}}},p=async f=>{x("adding"),R("");try{await K.addFriend({targetUserId:f.id}),x("success"),R(`Added ${f.name} as friend!`),ie(),q()}catch(_){x("error"),R(_.message||"Failed to add friend")}};return u("div",{class:"container mx-auto p-6 max-w-4xl relative",children:[u("header",{class:"mb-8 flex items-center justify-between",children:[u("div",{children:[u("h2",{class:"text-3xl font-bold text-white",children:"Focus Friends"}),u("p",{class:"text-gray-400 mt-1",children:"See who is online and working."})]}),u("button",{onClick:()=>m(!0),class:"bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm flex items-center",children:u("span",{children:"+ Add Friend"})})]}),i&&u("div",{class:"flex justify-center items-center py-12",children:u("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"})}),a&&u("div",{class:"bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6",children:["Error: ",a]}),!i&&!a&&u("div",{class:"bg-gray-800 rounded-xl border border-gray-700 shadow-sm overflow-hidden",children:e.length===0?u("div",{class:"text-center py-12 px-6",children:[u("div",{class:"text-6xl mb-4",children:"👋"}),u("h3",{class:"text-xl font-medium text-white mb-2",children:"No friends yet"}),u("p",{class:"text-gray-400",children:"Invite friends to see their status here."})]}):u("ul",{class:"divide-y divide-gray-700",children:e.map(f=>u("li",{class:"p-4 hover:bg-gray-750 transition-colors duration-150 flex justify-between items-center",children:[u("div",{class:"flex items-center space-x-4",children:[u("div",{class:"h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm",children:f.name.substring(0,2).toUpperCase()}),u("div",{children:[u("span",{class:"font-medium text-white block",children:f.name}),u("span",{class:"text-xs text-gray-400",children:f.status==="in-session"?"Working now":"Last active recently"})]})]}),u("span",{class:`px-3 py-1 text-xs font-semibold rounded-full border ${f.status==="in-session"?"bg-emerald-900/30 text-emerald-400 border-emerald-500/30":"bg-gray-700 text-gray-400 border-gray-600"}`,children:f.status==="in-session"?"⚡ In Focus":"💤 Offline"})]},f.id))})}),d&&u("div",{class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",children:u("div",{class:"bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-md overflow-hidden flex flex-col max-h-[90vh]",children:[u("div",{class:"p-4 border-b border-gray-700 flex justify-between items-center",children:[u("h3",{class:"text-xl font-bold text-white",children:"Add Friend"}),u("button",{onClick:()=>m(!1),class:"text-gray-400 hover:text-white",children:"✕"})]}),u("div",{class:"p-6 overflow-y-auto",children:[u("div",{class:"flex space-x-4 mb-6",children:[u("button",{onClick:()=>{A("name"),x(null),R("")},class:`flex-1 py-2 rounded-lg font-medium transition-colors ${y==="name"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"By Name"}),u("button",{onClick:()=>{A("code"),x(null),R("")},class:`flex-1 py-2 rounded-lg font-medium transition-colors ${y==="code"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300 hover:bg-gray-600"}`,children:"By Code"})]}),u("form",{onSubmit:b,class:"mb-8",children:[u("div",{class:"mb-4",children:[u("label",{class:"block text-gray-400 text-sm font-bold mb-2",children:y==="name"?"Friend's Username":"Friend Code"}),u("input",{type:"text",class:"w-full bg-gray-900 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-indigo-500",placeholder:y==="name"?"Enter username...":"Enter 6-character code...",value:v,onInput:f=>E(f.target.value)})]}),P&&u("div",{class:`mb-4 text-sm ${k==="success"?"text-green-400":"text-red-400"}`,children:P}),u("button",{type:"submit",disabled:k==="adding",class:"w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-colors",children:k==="adding"?"Adding...":"Add Friend"})]}),u("div",{children:[u("h4",{class:"text-sm font-bold text-gray-400 uppercase tracking-wider mb-4",children:"Suggested Friends"}),j?u("div",{class:"flex justify-center py-4",children:u("div",{class:"animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500"})}):N.length>0?u("ul",{class:"space-y-3",children:N.map(f=>u("li",{class:"bg-gray-700/50 rounded-lg p-3 flex items-center justify-between",children:[u("div",{class:"flex items-center space-x-3",children:[u("div",{class:"h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white",children:f.name.substring(0,2).toUpperCase()}),u("div",{children:[u("span",{class:"text-white text-sm font-medium block",children:f.name}),u("span",{class:"text-gray-400 text-xs",children:"Shared Room"})]})]}),u("button",{onClick:()=>p(f),class:"text-indigo-400 hover:text-indigo-300 text-sm font-medium",children:"Add"})]},f.id))}):u("p",{class:"text-gray-500 text-center py-2 text-sm",children:"No suggestions available."})]})]})]})})]})}function Jf({friend:n,onNudge:e}){const[t,i]=L(null),[s,a]=L(!0);return ue(()=>{K.getFriendActivity(n.id).then(l=>{i(l),a(!1)})},[n.id]),u("div",{class:"bg-gray-800 border border-gray-700 rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-200",children:[u("div",{class:"flex justify-between items-start mb-4",children:[u("div",{class:"flex items-center space-x-3",children:[u("div",{class:"h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-200 font-bold border border-indigo-500/30",children:n.name.substring(0,2).toUpperCase()}),u("div",{children:[u("h3",{class:"font-bold text-white text-lg",children:n.name}),u("p",{class:"text-xs text-gray-400",children:"Level 5 Focus Master"})]})]}),u("div",{class:"bg-amber-900/30 text-amber-500 px-2 py-1 rounded text-xs font-mono border border-amber-500/20",children:"🔥 3 Day Streak"})]}),s?u("div",{class:"animate-pulse space-y-3",children:[u("div",{class:"h-4 bg-gray-700 rounded w-3/4"}),u("div",{class:"h-4 bg-gray-700 rounded w-1/2"})]}):u("div",{class:"mt-2",children:[u("div",{class:"grid grid-cols-2 gap-4 mb-4",children:[u("div",{class:"bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700",children:[u("span",{class:"block text-2xl font-bold text-white",children:t.completedSessions}),u("span",{class:"text-xs text-gray-400 uppercase tracking-wider",children:"Sessions"})]}),u("div",{class:"bg-gray-900/50 p-3 rounded-lg text-center border border-gray-700",children:[u("span",{class:"block text-2xl font-bold text-white",children:t.nudgesReceived}),u("span",{class:"text-xs text-gray-400 uppercase tracking-wider",children:"Nudges"})]})]}),u("button",{onClick:()=>e(n),class:"w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 shadow-sm flex justify-center items-center group",children:[u("span",{class:"mr-2 group-hover:scale-110 transition-transform",children:"👋"})," Send a Nudge"]})]})]})}function Xf({user:n}){const[e,t]=L([]),[i,s]=L(!0),[a,l]=L(null),[d,m]=L(null);ue(()=>{n&&(s(!0),K.getFriends(n.uid).then(A=>{Array.isArray(A)?t(A):t([]),l(null)}).catch(A=>{l(A.message),t([])}).finally(()=>s(!1)))},[n]);const y=async A=>{try{await K.sendNudge(A.id),m({friendName:A.name,message:`You nudged ${A.name}! They'll get a notification.`}),setTimeout(()=>m(null),3e3)}catch(v){console.error(v)}};return u("div",{class:"container mx-auto p-6 max-w-5xl relative",children:[d&&u("div",{class:"fixed top-24 right-6 z-50 animate-bounce-in",children:u("div",{class:"bg-gray-800 border-l-4 border-amber-500 text-white p-4 rounded shadow-2xl flex items-center space-x-3 pr-8",children:[u("div",{class:"text-2xl",children:"👋"}),u("div",{children:[u("h4",{class:"font-bold",children:"Nudge Sent!"}),u("p",{class:"text-sm text-gray-300",children:["You nudged ",d.friendName]})]}),u("button",{onClick:()=>m(null),class:"absolute top-2 right-2 text-gray-400 hover:text-white",children:"×"})]})}),u("header",{class:"mb-8",children:[u("h2",{class:"text-3xl font-bold text-white",children:"Peer Progress"}),u("p",{class:"text-gray-400 mt-1",children:"Keep each other accountable and celebrate wins."})]}),i&&u("div",{class:"flex justify-center items-center py-12",children:u("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"})}),a&&u("div",{class:"bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-lg mb-6",children:["Error: ",a]}),!i&&!a&&u(ln,{children:e.length===0?u("div",{class:"text-center py-12 px-6 bg-gray-800 rounded-xl border border-gray-700",children:[u("div",{class:"text-6xl mb-4",children:"🌱"}),u("h3",{class:"text-xl font-medium text-white mb-2",children:"No accountability partners yet"}),u("p",{class:"text-gray-400 mb-6",children:"Add friends to start tracking progress together."}),u("button",{class:"bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors",children:"Find Friends"})]}):u("div",{class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.map(A=>u(Jf,{friend:A,onNudge:y},A.id))})})]})}function Yf({user:n}){const[e,t]=L(null),[i,s]=L(!0);if(ue(()=>{async function y(){if(n){const A=await K.getUserProfile();t(A)}s(!1)}y()},[n]),i)return u("div",{class:"flex items-center justify-center h-full text-gray-400",children:"Loading profile..."});const a=e?.displayName||n?.displayName||"User",l=e?.email||n?.email||"No email provided",d=e?.friendCode||"Unavailable",m=e?.avatarUrl||n?.photoURL||"https://via.placeholder.com/150";return u("div",{class:"container mx-auto px-4 py-8",children:u("div",{class:"max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700",children:[u("div",{class:"bg-gray-900 px-6 py-4 border-b border-gray-700",children:u("h2",{class:"text-2xl font-bold text-white",children:"My Profile"})}),u("div",{class:"p-6",children:[u("div",{class:"flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6",children:[u("div",{class:"flex-shrink-0",children:u("img",{src:m,alt:"Profile",class:"h-24 w-24 rounded-full border-2 border-indigo-500 shadow-sm object-cover"})}),u("div",{class:"flex-grow text-center md:text-left",children:[u("h3",{class:"text-xl font-semibold text-white",children:a}),u("p",{class:"text-gray-400 text-sm mt-1",children:l}),u("div",{class:"mt-4 flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4",children:u("div",{class:"bg-indigo-900/50 px-4 py-2 rounded-lg border border-indigo-500/30",children:[u("span",{class:"block text-xs text-indigo-300 uppercase font-bold tracking-wider",children:"Friend Code"}),u("span",{class:"block text-lg font-mono text-white tracking-widest",children:d})]})})]})]}),u("div",{class:"mt-8 border-t border-gray-700 pt-6",children:[u("h4",{class:"text-lg font-medium text-gray-200 mb-4",children:"Account Stats"}),u("div",{class:"grid grid-cols-2 gap-4",children:[u("div",{class:"bg-gray-700/50 p-4 rounded-lg",children:[u("span",{class:"block text-gray-400 text-sm",children:"Member Since"}),u("span",{class:"block text-white font-medium",children:e?.createdAt?new Date(e.createdAt).toLocaleDateString():"Unknown"})]}),u("div",{class:"bg-gray-700/50 p-4 rounded-lg",children:[u("span",{class:"block text-gray-400 text-sm",children:"Status"}),u("span",{class:"block text-green-400 font-medium",children:"Active"})]})]})]})]})]})})}function Ko(){return u("div",{class:"container mx-auto p-6",children:[u("header",{class:"mb-10 text-center",children:[u("h1",{class:"text-4xl font-extrabold text-white mb-2",children:"Welcome Back!"}),u("p",{class:"text-gray-400 text-lg",children:"Choose where you want to go today."})]}),u("div",{class:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{href:"/rooms",title:"Rooms",description:"Join or create focus rooms to work together.",color:"bg-indigo-500",icon:"🏠"},{href:"/friends",title:"Friends",description:"See what your friends are up to and connect.",color:"bg-emerald-500",icon:"👥"},{href:"/accountability",title:"Accountability",description:"Track progress and nudge your accountability partners.",color:"bg-amber-500",icon:"🔥"}].map(e=>u("a",{href:e.href,class:"bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 block",children:[u("div",{class:`${e.color} p-4 flex justify-center items-center h-24`,children:u("span",{class:"text-5xl",children:e.icon})}),u("div",{class:"p-6",children:[u("h2",{class:"text-2xl font-bold text-white mb-2",children:e.title}),u("p",{class:"text-gray-300",children:e.description}),u("div",{class:"mt-4 flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300",children:["Launch ",e.title," ",u("span",{class:"ml-2",children:"→"})]})]})]},e.href))})]})}function Qf(){const[n,e]=L(null),[t,i]=L(!0);return ue(()=>{if(!vt)return console.error("Firebase Auth instance is null. Skipping authentication listeners."),i(!1),()=>{};const s=Ba(vt,a=>{e(a),a&&K.syncUser(),i(!1)});return()=>s()},[]),t?u("div",{class:"min-h-screen flex items-center justify-center bg-gray-900 text-white",children:"Loading..."}):u(vn,{children:u("main",{class:"min-h-screen bg-gray-900 text-gray-100 font-sans",children:n?u("div",{class:"flex flex-col min-h-screen",children:[u(qf,{}),u("div",{class:"flex-grow",children:u(gc,{children:[u(Ze,{path:"/",component:Ko}),u(Ze,{path:"/rooms",component:()=>u(Wf,{user:n})}),u(Ze,{path:"/rooms/:roomId",component:()=>u(Gf,{user:n})}),u(Ze,{path:"/friends",component:()=>u(Kf,{user:n})}),u(Ze,{path:"/accountability",component:()=>u(Xf,{user:n})}),u(Ze,{path:"/profile",component:()=>u(Yf,{user:n})}),u(Ze,{default:!0,component:Ko})]})})]}):u(Uf,{})})})}sl(u(Qf,{}),document.getElementById("app"));
