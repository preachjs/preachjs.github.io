const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_content-DQlcwnSg.js","assets/base-La4wjEgp.js","assets/index-CniLogsJ.js"])))=>i.map(i=>d[i]);
(function(){if(typeof window>"u")return;const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const _ of o)if(_.type==="childList")for(const c of _.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const _={};return o.integrity&&(_.integrity=o.integrity),o.referrerPolicy&&(_.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?_.credentials="include":o.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(o){if(o.ep)return;o.ep=!0;const _=n(o);fetch(o.href,_)}})();var j,m,Ue,T,ye,Te,re,De,le,_e,oe,Ae,W={},Oe=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,V=Array.isArray;function x(t,e){for(var n in e)t[n]=e[n];return t}function fe(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function H(t,e,n){var r,o,_,c={};for(_ in e)_=="key"?r=e[_]:_=="ref"?o=e[_]:c[_]=e[_];if(arguments.length>2&&(c.children=arguments.length>3?j.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)c[_]===void 0&&(c[_]=t.defaultProps[_]);return N(t,c,r,o,null)}function N(t,e,n,r,o){var _={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Ue,__i:-1,__u:0};return o==null&&m.vnode!=null&&m.vnode(_),_}function ee(t){return t.children}function Y(t,e){this.props=t,this.context=e}function I(t,e){if(e==null)return t.__?I(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?I(t):null}function Ie(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Ie(t)}}function ie(t){(!t.__d&&(t.__d=!0)&&T.push(t)&&!X.__r++||ye!==m.debounceRendering)&&((ye=m.debounceRendering)||Te)(X)}function X(){var t,e,n,r,o,_,c,u;for(T.sort(re);t=T.shift();)t.__d&&(e=T.length,r=void 0,_=(o=(n=t).__v).__e,c=[],u=[],n.__P&&((r=x({},o)).__v=o.__v+1,m.vnode&&m.vnode(r),ae(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[_]:null,c,_??I(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,We(c,r,u),r.__e!=_&&Ie(r)),T.length>e&&T.sort(re));X.__r=0}function Fe(t,e,n,r,o,_,c,u,s,l,p){var i,a,f,v,$,g,h=r&&r.__k||Oe,d=e.length;for(s=Xe(n,e,h,s,d),i=0;i<d;i++)(f=n.__k[i])!=null&&(a=f.__i===-1?W:h[f.__i]||W,f.__i=i,g=ae(t,f,a,o,_,c,u,s,l,p),v=f.__e,f.ref&&a.ref!=f.ref&&(a.ref&&pe(a.ref,null,f),p.push(f.ref,f.__c||v,f)),$==null&&v!=null&&($=v),4&f.__u||a.__k===f.__k?s=Me(f,s,t):typeof f.type=="function"&&g!==void 0?s=g:v&&(s=v.nextSibling),f.__u&=-7);return n.__e=$,s}function Xe(t,e,n,r,o){var _,c,u,s,l,p=n.length,i=p,a=0;for(t.__k=new Array(o),_=0;_<o;_++)(c=e[_])!=null&&typeof c!="boolean"&&typeof c!="function"?(s=_+a,(c=t.__k[_]=typeof c=="string"||typeof c=="number"||typeof c=="bigint"||c.constructor==String?N(null,c,null,null,null):V(c)?N(ee,{children:c},null,null,null):c.constructor===void 0&&c.__b>0?N(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c).__=t,c.__b=t.__b+1,u=null,(l=c.__i=Ze(c,n,s,i))!==-1&&(i--,(u=n[l])&&(u.__u|=2)),u==null||u.__v===null?(l==-1&&a--,typeof c.type!="function"&&(c.__u|=4)):l!=s&&(l==s-1?a--:l==s+1?a++:(l>s?a--:a++,c.__u|=4))):t.__k[_]=null;if(i)for(_=0;_<p;_++)(u=n[_])!=null&&!(2&u.__u)&&(u.__e==r&&(r=I(u)),je(u,u));return r}function Me(t,e,n){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=Me(r[o],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=I(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Ne(t,e){return e=e||[],t==null||typeof t=="boolean"||(V(t)?t.some(function(n){Ne(n,e)}):e.push(t)),e}function Ze(t,e,n,r){var o,_,c=t.key,u=t.type,s=e[n];if(s===null||s&&c==s.key&&u===s.type&&!(2&s.__u))return n;if(r>(s!=null&&!(2&s.__u)?1:0))for(o=n-1,_=n+1;o>=0||_<e.length;){if(o>=0){if((s=e[o])&&!(2&s.__u)&&c==s.key&&u===s.type)return o;o--}if(_<e.length){if((s=e[_])&&!(2&s.__u)&&c==s.key&&u===s.type)return _;_++}}return-1}function ge(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Qe.test(e)?n:n+"px"}function K(t,e,n,r,o){var _;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ge(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ge(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")_=e!=(e=e.replace(De,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?r?n.u=r.u:(n.u=le,t.addEventListener(e,_?oe:_e,_)):t.removeEventListener(e,_?oe:_e,_);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function be(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=le++;else if(e.t<n.u)return;return n(m.event?m.event(e):e)}}}function ae(t,e,n,r,o,_,c,u,s,l){var p,i,a,f,v,$,g,h,d,L,P,S,R,z,O,k,C,E=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(s=!!(32&n.__u),_=[u=e.__e=n.__e]),(p=m.__b)&&p(e);e:if(typeof E=="function")try{if(h=e.props,d="prototype"in E&&E.prototype.render,L=(p=E.contextType)&&r[p.__c],P=p?L?L.props.value:p.__:r,n.__c?g=(i=e.__c=n.__c).__=i.__E:(d?e.__c=i=new E(h,P):(e.__c=i=new Y(h,P),i.constructor=E,i.render=et),L&&L.sub(i),i.props=h,i.state||(i.state={}),i.context=P,i.__n=r,a=i.__d=!0,i.__h=[],i._sb=[]),d&&i.__s==null&&(i.__s=i.state),d&&E.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=x({},i.__s)),x(i.__s,E.getDerivedStateFromProps(h,i.__s))),f=i.props,v=i.state,i.__v=e,a)d&&E.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),d&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(d&&E.getDerivedStateFromProps==null&&h!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,P),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,P)===!1||e.__v==n.__v)){for(e.__v!=n.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(F){F&&(F.__=e)}),S=0;S<i._sb.length;S++)i.__h.push(i._sb[S]);i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,P),d&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,v,$)})}if(i.context=P,i.props=h,i.__P=t,i.__e=!1,R=m.__r,z=0,d){for(i.state=i.__s,i.__d=!1,R&&R(e),p=i.render(i.props,i.state,i.context),O=0;O<i._sb.length;O++)i.__h.push(i._sb[O]);i._sb=[]}else do i.__d=!1,R&&R(e),p=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++z<25);i.state=i.__s,i.getChildContext!=null&&(r=x(x({},r),i.getChildContext())),d&&!a&&i.getSnapshotBeforeUpdate!=null&&($=i.getSnapshotBeforeUpdate(f,v)),u=Fe(t,V(k=p!=null&&p.type===ee&&p.key==null?p.props.children:p)?k:[k],e,n,r,o,_,c,u,s,l),i.base=e.__e,e.__u&=-161,i.__h.length&&c.push(i),g&&(i.__E=i.__=null)}catch(F){if(e.__v=null,s||_!=null)if(F.then){for(e.__u|=s?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;_[_.indexOf(u)]=null,e.__e=u}else for(C=_.length;C--;)fe(_[C]);else e.__e=n.__e,e.__k=n.__k;m.__e(F,e,n)}else _==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):u=e.__e=Ve(n.__e,e,n,r,o,_,c,s,l);return(p=m.diffed)&&p(e),128&e.__u?void 0:u}function We(t,e,n){for(var r=0;r<n.length;r++)pe(n[r],n[++r],n[++r]);m.__c&&m.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(_){_.call(o)})}catch(_){m.__e(_,o.__v)}})}function Ve(t,e,n,r,o,_,c,u,s){var l,p,i,a,f,v,$,g=n.props,h=e.props,d=e.type;if(d=="svg"?o="http://www.w3.org/2000/svg":d=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),_!=null){for(l=0;l<_.length;l++)if((f=_[l])&&"setAttribute"in f==!!d&&(d?f.localName==d:f.nodeType==3)){t=f,_[l]=null;break}}if(t==null){if(d==null)return document.createTextNode(h);t=document.createElementNS(o,d,h.is&&h),u&&(m.__m&&m.__m(e,_),u=!1),_=null}if(d===null)g===h||u&&t.data===h||(t.data=h);else{if(_=_&&j.call(t.childNodes),g=n.props||W,!u&&_!=null)for(g={},l=0;l<t.attributes.length;l++)g[(f=t.attributes[l]).name]=f.value;for(l in g)if(f=g[l],l!="children"){if(l=="dangerouslySetInnerHTML")i=f;else if(!(l in h)){if(l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h)continue;K(t,l,null,f,o)}}for(l in h)f=h[l],l=="children"?a=f:l=="dangerouslySetInnerHTML"?p=f:l=="value"?v=f:l=="checked"?$=f:u&&typeof f!="function"||g[l]===f||K(t,l,f,g[l],o);if(p)u||i&&(p.__html===i.__html||p.__html===t.innerHTML)||(t.innerHTML=p.__html),e.__k=[];else if(i&&(t.innerHTML=""),Fe(t,V(a)?a:[a],e,n,r,d=="foreignObject"?"http://www.w3.org/1999/xhtml":o,_,c,_?_[0]:n.__k&&I(n,0),u,s),_!=null)for(l=_.length;l--;)fe(_[l]);u||(l="value",d=="progress"&&v==null?t.removeAttribute("value"):v!==void 0&&(v!==t[l]||d=="progress"&&!v||d=="option"&&v!==g[l])&&K(t,l,v,g[l],o),l="checked",$!==void 0&&$!==t[l]&&K(t,l,$,g[l],o))}return t}function pe(t,e,n){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(o){m.__e(o,n)}}function je(t,e,n){var r,o;if(m.unmount&&m.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||pe(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){m.__e(_,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&je(r[o],e,n||typeof t.type!="function");n||fe(t.__e),t.__c=t.__=t.__e=void 0}function et(t,e,n){return this.constructor(t,n)}function tt(t,e,n){var r,o,_,c;e==document&&(e=document.documentElement),m.__&&m.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,_=[],c=[],ae(e,t=(!r&&n||e).__k=H(ee,null,[t]),o||W,W,e.namespaceURI,!r&&n?[n]:o?null:e.firstChild?j.call(e.childNodes):null,_,!r&&n?n:o?o.__e:e.firstChild,r,c),We(_,t,c)}function Be(t,e){tt(t,e,Be)}function ke(t,e,n){var r,o,_,c,u=x({},t.props);for(_ in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)_=="key"?r=e[_]:_=="ref"?o=e[_]:u[_]=e[_]===void 0&&c!==void 0?c[_]:e[_];return arguments.length>2&&(u.children=arguments.length>3?j.call(arguments,2):n),N(t.type,u,r||t.key,o||t.ref,null)}function qe(t,e){var n={__c:e="__cC"+Ae++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,_;return this.getChildContext||(o=new Set,(_={})[e]=this,this.getChildContext=function(){return _},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.forEach(function(u){u.__e=!0,ie(u)})},this.sub=function(c){o.add(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){o&&o.delete(c),u&&u.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}j=Oe.slice,m={__e:function(t,e,n,r){for(var o,_,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),c=o.__d),c)return o.__E=o}catch(u){t=u}throw t}},Ue=0,Y.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},n),this.props)),t&&x(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),ie(this))},Y.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ie(this))},Y.prototype.render=ee,T=[],Te=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,re=function(t,e){return t.__v.__b-e.__v.__b},X.__r=0,De=/(PointerCapture)$|Capture$/i,le=0,_e=be(!1),oe=be(!0),Ae=0;var nt=0;function D(t,e,n,r,o,_){e||(e={});var c,u,s=e;if("ref"in s)for(u in s={},e)u=="ref"?c=e[u]:s[u]=e[u];var l={type:t,props:s,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--nt,__i:-1,__u:0,__source:o,__self:_};if(typeof t=="function"&&(c=t.defaultProps))for(u in c)s[u]===void 0&&(s[u]=c[u]);return m.vnode&&m.vnode(l),l}const rt="modulepreload",_t=function(t){return"/"+t},$e={},ce=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0&&typeof window<"u"){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=_t(s),s in $e)return;$e[s]=!0;const l=s.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${p}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":rt,l||(i.as="script"),i.crossOrigin="",i.href=s,u&&i.setAttribute("nonce",u),document.head.appendChild(i),l)return new Promise((a,f)=>{i.addEventListener("load",a),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}function _(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return o.then(c=>{for(const u of c||[])u.status==="rejected"&&_(u.reason);return e().catch(_)})};var A,y,te,Pe,Z=0,ze=[],b=m,Ee=b.__b,we=b.__r,Se=b.diffed,Ce=b.__c,xe=b.unmount,Le=b.__;function B(t,e){b.__h&&b.__h(y,t,Z||e),Z=0;var n=y.__H||(y.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function ot(t){return Z=1,he(Je,t)}function he(t,e,n){var r=B(A++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Je(void 0,e),function(u){var s=r.__N?r.__N[0]:r.__[0],l=r.t(s,u);s!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){var o=function(u,s,l){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(a){return!!a.__c});if(p.every(function(a){return!a.__N}))return!_||_.call(this,u,s,l);var i=r.__c.props!==u;return p.forEach(function(a){if(a.__N){var f=a.__[0];a.__=a.__N,a.__N=void 0,f!==a.__[0]&&(i=!0)}}),_&&_.call(this,u,s,l)||i};y.u=!0;var _=y.shouldComponentUpdate,c=y.componentWillUpdate;y.componentWillUpdate=function(u,s,l){if(this.__e){var p=_;_=void 0,o(u,s,l),_=p}c&&c.call(this,u,s,l)},y.shouldComponentUpdate=o}return r.__N||r.__}function Et(t,e){var n=B(A++,3);!b.__s&&ve(n.__H,e)&&(n.__=t,n.i=e,y.__H.__h.push(n))}function Ke(t,e){var n=B(A++,4);!b.__s&&ve(n.__H,e)&&(n.__=t,n.i=e,y.__h.push(n))}function w(t){return Z=5,de(function(){return{current:t}},[])}function de(t,e){var n=B(A++,7);return ve(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function me(t){var e=y.context[t.__c],n=B(A++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(y)),e.props.value):t.__}function it(){for(var t;t=ze.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Q),t.__H.__h.forEach(ue),t.__H.__h=[]}catch(e){t.__H.__h=[],b.__e(e,t.__v)}}b.__b=function(t){y=null,Ee&&Ee(t)},b.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Le&&Le(t,e)},b.__r=function(t){we&&we(t),A=0;var e=(y=t.__c).__H;e&&(te===y?(e.__h=[],y.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(Q),e.__h.forEach(ue),e.__h=[],A=0)),te=y},b.diffed=function(t){Se&&Se(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ze.push(e)!==1&&Pe===b.requestAnimationFrame||((Pe=b.requestAnimationFrame)||ct)(it)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),te=y=null},b.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Q),n.__h=n.__h.filter(function(r){return!r.__||ue(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],b.__e(r,n.__v)}}),Ce&&Ce(t,e)},b.unmount=function(t){xe&&xe(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Q(r)}catch(o){e=o}}),n.__H=void 0,e&&b.__e(e,n.__v))};var He=typeof requestAnimationFrame=="function";function ct(t){var e,n=function(){clearTimeout(r),He&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);He&&(e=requestAnimationFrame(n))}function Q(t){var e=y,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),y=e}function ue(t){var e=y;t.__c=t.__(),y=e}function ve(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Je(t,e){return typeof e=="function"?e(t):e}let U,M;const ut=(t,e)=>{if(U=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const n=e.target.closest("a[href]"),r=n&&n.getAttribute("href");if(!n||n.origin!=location.origin||/^#/.test(r)||!/^(_?self)?$/i.test(n.target)||M&&(typeof M=="string"?!r.startsWith(M):!M.test(r)))return t;U=!0,e.preventDefault(),e=n.href.replace(location.origin,"")}else typeof e=="string"?U=!0:e&&e.url?(U=!e.replace,e=e.url):e=location.pathname+location.search;return U===!0?history.pushState(null,"",e):U===!1&&history.replaceState(null,"",e),e},st=(t,e,n)=>{t=t.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean);for(let r=0,o,_;r<Math.max(t.length,e.length);r++){let[,c,u,s]=(e[r]||"").match(/^(:?)(.*?)([+*?]?)$/);if(o=t[r],!(!c&&u==o)){if(!c&&o&&s=="*"){n.rest="/"+t.slice(r).map(decodeURIComponent).join("/");break}if(!c||!o&&s!="?"&&s!="*")return;if(_=s=="+"||s=="*",_?o=t.slice(r).map(decodeURIComponent).join("/")||void 0:o&&(o=decodeURIComponent(o)),n.params[u]=o,u in n||(n[u]=o),_)break}}return n};function q(t){const[e,n]=he(ut,t.url||location.pathname+location.search);t.scope&&(M=t.scope);const r=U===!0,o=de(()=>{const _=new URL(e,location.origin),c=_.pathname.replace(/\/+$/g,"")||"/";return{url:e,path:c,query:Object.fromEntries(_.searchParams),route:(u,s)=>n({url:u,replace:s}),wasPush:r}},[e]);return Ke(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),H(q.ctx.Provider,{value:o},t.children)}const lt=Promise.resolve();function Ge(t){const[e,n]=he(k=>k+1,0),{url:r,query:o,wasPush:_,path:c}=at(),{rest:u=c,params:s={}}=me(se),l=w(!1),p=w(c),i=w(0),a=w(),f=w(),v=w(),$=w(!1),g=w();g.current=!1;const h=w(!1);let d,L,P;Ne(t.children).some(k=>{if(st(u,k.props.path,P={...k.props,path:u,query:o,params:s,rest:""}))return d=ke(k,P);k.props.default&&(L=ke(k,P))});let S=d||L;de(()=>{f.current=a.current;const k=f.current&&f.current.props.children;!k||!S||S.type!==k.type||S.props.component!==k.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),i.current++,h.current=!0):h.current=!1},[r]);const R=a.current&&a.current.__u&J&&a.current.__u&G,z=a.current&&a.current.__h;a.current=H(se.Provider,{value:P},S),R?(a.current.__u|=J,a.current.__u|=G):z&&(a.current.__h=!0);const O=f.current;return f.current=null,this.__c=(k,C)=>{g.current=!0,f.current=O,t.onLoadStart&&t.onLoadStart(r),l.current=!0;let E=i.current;k.then(()=>{E===i.current&&(f.current=null,a.current&&(C.__h&&(a.current.__h=C.__h),C.__u&G&&(a.current.__u|=G),C.__u&J&&(a.current.__u|=J)),lt.then(n))})},Ke(()=>{const k=this.__v&&this.__v.__e;if(g.current){!$.current&&!v.current&&(v.current=k);return}!$.current&&v.current&&(v.current!==k&&v.current.remove(),v.current=null),$.current=!0,p.current!==c&&(_&&scrollTo(0,0),t.onRouteChange&&t.onRouteChange(r),p.current=c),t.onLoadEnd&&l.current&&t.onLoadEnd(r),l.current=!1},[c,_,e]),h.current?[H(ne,{r:a}),H(ne,{r:f})]:H(ne,{r:a})}const J=32,G=128,ne=({r:t})=>t.current;Ge.Provider=q;q.ctx=qe({});const se=qe({}),ft=t=>H(t.component,t),at=()=>me(q.ctx),wt=()=>me(se);function pt(t){let e,n;const r=()=>t().then(_=>n=_&&_.default||_),o=_=>{const[,c]=ot(0),u=w(n);if(e||(e=r()),n!==void 0)return H(n,_);throw u.current||(u.current=e.then(()=>c(1))),e};return o.preload=()=>(e||(e=r()),e),o}const Re=m.__e;m.__e=(t,e,n)=>{if(t&&t.then){let r=e;for(;r=r.__;)if(r.__c&&r.__c.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),e.__k||(e.__k=[]),r.__c.__c(t,e)}Re&&Re(t,e,n)};function ht(t){return this.__c=dt,this.componentDidCatch=t.onError,t.children}function dt(t){t.then(()=>this.forceUpdate())}function mt(t,e){return ce(()=>import("./prerender-fyyhQM6B.js"),[]).then(n=>n.default(t,e))}const vt=Object.assign({"/src/pages/$content.jsx":()=>ce(()=>import("./_content-DQlcwnSg.js"),__vite__mapDeps([0,1])),"/src/pages/index.jsx":()=>ce(()=>import("./index-CniLogsJ.js"),__vite__mapDeps([2,1]))}),yt=bt(vt,[new RegExp("^/src/pages"),""]);function gt(t,e){const n=Number(t.match(/\$\$(\w+)$/))-Number(e.match(/\$\$(\w+)$/));if(n)return n;const r=t.split("/"),o=e.split("/"),_=r.filter(u=>u.includes("$")).length-o.filter(u=>u.includes("$")).length;if(_)return _;const c=r.length-o.length;if(c)return c;for(let u=0;u<r.length;u++){const s=r[u],l=o[u],p=Number(s.includes("$"))-Number(l.includes("$"));if(p)return p;const i=s.split("$").length-l.split("$").length;if(i)return i}return 0}function bt(t,e){return Object.keys(t).sort(gt).map(n=>{const r=kt(n).replace(e[0],e[1]);return{route:n,routePath:r,module:t[n]}})}function kt(t){return t.replace(/(\.(js|ts)x?)/,"").replace(/index/,"/").replace("//","/").replace(/\$\$/,"*").replace(/\$/,":")}const $t=()=>D(Ge,{children:Pt(yt)}),Ye=()=>D(q,{children:D(ht,{children:D($t,{})})}),St=async t=>{const{html:e,links:n}=await mt(D(Ye,{}));return{html:e,links:new Set([...n]),data:{url:t.url},head:{lang:"en",title:"PreachJS | Tiny preact libraries",elements:new Set([])}}};typeof window<"u"&&Be(D(Ye,{}),document.getElementById("app"));function Pt(t){const e=[];for(const n of t)e.push(D(ft,{path:n.routePath,component:pt(()=>n.module())}));return e}export{ke as G,Ne as H,ce as _,D as a,pt as b,H as g,ot as h,ee as k,m as l,St as prerender,wt as u,Y as x,Et as y};
