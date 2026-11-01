(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Ho,nt,zh,Hh,pi,Uc,Gh,Vh,ea,oo,Js,Wh,sc,qa,Ka,yo={},So=[],kf=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Go=Array.isArray;function jn(n,e){for(var t in e)n[t]=e[t];return n}function rc(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function $h(n,e,t){var i,s,r,o={};for(r in e)r=="key"?i=e[r]:r=="ref"?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?Ho.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)o[r]===void 0&&(o[r]=n.defaultProps[r]);return ao(n,o,i,s,null)}function ao(n,e,t,i,s){var r={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++zh,__i:-1,__u:0};return s==null&&nt.vnode!=null&&nt.vnode(r),r}function Pt(n){return n.children}function js(n,e){this.props=n,this.context=e}function $i(n,e){if(e==null)return n.__?$i(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?$i(n):null}function If(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],s=[],r=jn({},e);r.__v=e.__v+1,nt.vnode&&nt.vnode(r),oc(n.__P,r,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??$i(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,Zh(i,r,s),e.__e=e.__=null,r.__e!=t&&Xh(r)}}function Xh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Xh(n)}function Nc(n){(!n.__d&&(n.__d=!0)&&pi.push(n)&&!xo.__r++||Uc!=nt.debounceRendering)&&((Uc=nt.debounceRendering)||Gh)(xo)}function xo(){try{for(var n,e=1;pi.length;)pi.length>e&&pi.sort(Vh),n=pi.shift(),e=pi.length,If(n)}finally{pi.length=xo.__r=0}}function Yh(n,e,t,i,s,r,o,a,c,l,u){var d,h,f,m,v,g,p=i&&i.__k||So,T=e.length;for(c=Uf(t,e,p,c,T),d=0;d<T;d++)(f=t.__k[d])!=null&&(h=f.__i!=-1&&p[f.__i]||yo,f.__i=d,g=oc(n,f,h,s,r,o,a,c,l,u),m=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&ac(h.ref,null,f),u.push(f.ref,f.__c||m,f)),v==null&&m!=null&&(v=m),4&f.__u?(c=qh(f,c,n),h.__e&&(h.__e=null)):typeof f.type=="function"&&g!==void 0?c=g:m&&(c=m.nextSibling),f.__u&=-7);return t.__e=v,c}function Uf(n,e,t,i,s){var r,o,a,c,l,u=t.length,d=u,h=0;for(n.__k=new Array(s),r=0;r<s;r++)(o=e[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=n.__k[r]=ao(null,o,null,null,null):Go(o)?o=n.__k[r]=ao(Pt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=n.__k[r]=ao(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,c=r+h,o.__=n,o.__b=n.__b+1,a=null,(l=o.__i=Nf(o,t,c,d))!=-1&&(d--,(a=t[l])&&(a.__u|=2)),a==null||a.__v==null?(l==-1&&(s>u?h--:s<u&&h++),typeof o.type!="function"&&(o.__u|=4)):l!=c&&(l==c-1?h--:l==c+1?h++:(l>c?h--:h++,o.__u|=4))):n.__k[r]=null;if(d)for(r=0;r<u;r++)(a=t[r])!=null&&(2&a.__u)==0&&(a.__e==i&&(i=$i(a)),jh(a,a));return i}function qh(n,e,t){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=qh(i[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=$i(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Nf(n,e,t,i){var s,r,o,a=n.key,c=n.type,l=e[t],u=l!=null&&(2&l.__u)==0;if(l===null&&a==null||u&&a==l.key&&c==l.type)return t;if(i>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((l=e[o=s>=0?s--:r++])!=null&&(2&l.__u)==0&&a==l.key&&c==l.type)return o}return-1}function Oc(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||kf.test(e)?t:t+"px"}function Tr(n,e,t,i,s){var r,o;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Oc(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Oc(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Wh,"$1")),o=e.toLowerCase(),e=o in n||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?i?t[Js]=i[Js]:(t[Js]=sc,n.addEventListener(e,r?Ka:qa,r)):n.removeEventListener(e,r?Ka:qa,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Fc(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[oo]==null)e[oo]=sc++;else if(e[oo]<t[Js])return;return t(nt.event?nt.event(e):e)}}}function oc(n,e,t,i,s,r,o,a,c,l){var u,d,h,f,m,v,g,p,T,S,x,w,R,A,D,M,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[a=e.__e=t.__e]),(u=nt.__b)&&u(e);e:if(typeof b=="function"){d=o.length;try{if(T=e.props,S=b.prototype&&b.prototype.render,x=(u=b.contextType)&&i[u.__c],w=u?x?x.props.value:u.__:i,t.__c?p=(h=e.__c=t.__c).__=h.__E:(S?e.__c=h=new b(T,w):(e.__c=h=new js(T,w),h.constructor=b,h.render=Ff),x&&x.sub(h),h.state||(h.state={}),h.__n=i,f=h.__d=!0,h.__h=[],h._sb=[]),S&&h.__s==null&&(h.__s=h.state),S&&b.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=jn({},h.__s)),jn(h.__s,b.getDerivedStateFromProps(T,h.__s))),m=h.props,v=h.state,h.__v=e,f)S&&b.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),S&&h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(S&&b.getDerivedStateFromProps==null&&T!==m&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(T,w),e.__v==t.__v||!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(T,h.__s,w)===!1){e.__v!=t.__v&&(h.props=T,h.state=h.__s,h.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(P){P&&(P.__=e)}),So.push.apply(h.__h,h._sb),h._sb=[],h.__h.length&&o.push(h),a=$i(t);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(T,h.__s,w),S&&h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(m,v,g)})}if(h.context=w,h.props=T,h.__P=n,h.__e=!1,R=nt.__r,A=0,S)h.state=h.__s,h.__d=!1,R&&R(e),u=h.render(h.props,h.state,h.context),So.push.apply(h.__h,h._sb),h._sb=[];else do h.__d=!1,R&&R(e),u=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++A<25);h.state=h.__s,h.getChildContext!=null&&(i=jn(jn({},i),h.getChildContext())),S&&!f&&h.getSnapshotBeforeUpdate!=null&&(g=h.getSnapshotBeforeUpdate(m,v)),D=u!=null&&u.type===Pt&&u.key==null?Jh(u.props.children):u,a=Yh(n,Go(D)?D:[D],e,t,i,s,r,o,a,c,l),h.base=e.__e,e.__u&=-161,h.__h.length&&o.push(h),p&&(h.__E=h.__=null)}catch(P){if(o.length=d,e.__v=null,c||r!=null){if(P.then){for(e.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;r!=null&&(r[r.indexOf(a)]=null),e.__e=a}else if(r!=null)for(M=r.length;M--;)rc(r[M])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),P.then||Kh(e),nt.__e(P,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):a=e.__e=Of(t.__e,e,t,i,s,r,o,c,l);return(u=nt.diffed)&&u(e),128&e.__u?void 0:a}function Kh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Kh))}function Zh(n,e,t){for(var i=0;i<t.length;i++)ac(t[i],t[++i],t[++i]);nt.__c&&nt.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(r){r.call(s)})}catch(r){nt.__e(r,s.__v)}})}function Jh(n){return typeof n!="object"||n==null||n.__b>0?n:Go(n)?n.map(Jh):n.constructor!==void 0?null:jn({},n)}function Of(n,e,t,i,s,r,o,a,c){var l,u,d,h,f,m,v,g=t.props||yo,p=e.props,T=e.type;if(T=="svg"?s="http://www.w3.org/2000/svg":T=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((f=r[l])&&"setAttribute"in f==!!T&&(T?f.localName==T:f.nodeType==3)){n=f,r[l]=null;break}}if(n==null){if(T==null)return document.createTextNode(p);n=document.createElementNS(s,T,p.is&&p),a&&(nt.__m&&nt.__m(e,r),a=!1),r=null}if(T==null)g===p||a&&n.data==p||(n.data=p);else{if(r=T=="textarea"&&p.defaultValue!=null?null:r&&Ho.call(n.childNodes),!a&&r!=null)for(g={},l=0;l<n.attributes.length;l++)g[(f=n.attributes[l]).name]=f.value;for(l in g)f=g[l],l=="dangerouslySetInnerHTML"?d=f:l=="children"||l in p||l=="value"&&"defaultValue"in p||l=="checked"&&"defaultChecked"in p||Tr(n,l,null,f,s);for(l in p)f=p[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?u=f:l=="value"?m=f:l=="checked"?v=f:a&&typeof f!="function"||g[l]===f||Tr(n,l,f,g[l],s);if(u)a||d&&(u.__html==d.__html||u.__html==n.innerHTML)||(n.innerHTML=u.__html),e.__k=[];else if(d&&(n.innerHTML=""),Yh(e.type=="template"?n.content:n,Go(h)?h:[h],e,t,i,T=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,o,r?r[0]:t.__k&&$i(t,0),a,c),r!=null)for(l=r.length;l--;)rc(r[l]);a&&T!="textarea"||(l="value",T=="progress"&&m==null?n.removeAttribute("value"):m!=null&&(m!==n[l]||T=="progress"&&!m||T=="option"&&m!=g[l])&&Tr(n,l,m,g[l],s),l="checked",v!=null&&v!=n[l]&&Tr(n,l,v,g[l],s))}return n}function ac(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){nt.__e(s,t)}}function jh(n,e,t){var i,s;if(nt.unmount&&nt.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||ac(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){nt.__e(r,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&jh(i[s],e,t||typeof n.type!="function");t||rc(n.__e),n.__c=n.__=n.__e=void 0}function Ff(n,e,t){return this.constructor(n,t)}function Bf(n,e,t){var i,s,r,o;e==document&&(e=document.documentElement),nt.__&&nt.__(n,e),s=(i=!1)?null:e.__k,r=[],o=[],oc(e,n=e.__k=$h(Pt,null,[n]),s||yo,yo,e.namespaceURI,s?null:e.firstChild?Ho.call(e.childNodes):null,r,s?s.__e:e.firstChild,i,o),Zh(r,n,o),n.props.children=null}Ho=So.slice,nt={__e:function(n,e,t,i){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},zh=0,Hh=function(n){return n!=null&&n.constructor===void 0},js.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=jn({},this.state),typeof n=="function"&&(n=n(jn({},t),this.props)),n&&jn(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Nc(this))},js.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Nc(this))},js.prototype.render=Pt,pi=[],Gh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Vh=function(n,e){return n.__v.__b-e.__v.__b},xo.__r=0,ea=Math.random().toString(8),oo="__d"+ea,Js="__a"+ea,Wh=/(PointerCapture)$|Capture$/i,sc=0,qa=Fc(!1),Ka=Fc(!0);var zf=0;function _(n,e,t,i,s,r){e||(e={});var o,a,c=e;if("ref"in c)for(a in c={},e)a=="ref"?o=e[a]:c[a]=e[a];var l={type:n,props:c,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--zf,__i:-1,__u:0,__source:s,__self:r};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)c[a]===void 0&&(c[a]=o[a]);return nt.vnode&&nt.vnode(l),l}var rr,Tt,ta,Bc,Mo=0,Qh=[],Rt=nt,zc=Rt.__b,Hc=Rt.__r,Gc=Rt.diffed,Vc=Rt.__c,Wc=Rt.unmount,$c=Rt.__;function lc(n,e){Rt.__h&&Rt.__h(Tt,n,Mo||e),Mo=0;var t=Tt.__H||(Tt.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function fn(n){return Mo=1,Hf(td,n)}function Hf(n,e,t){var i=lc(rr++,2);if(i.t=n,!i.__c&&(i.__=[td(void 0,e),function(a){var c=i.__N?i.__N[0]:i.__[0],l=i.t(c,a);c!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=Tt,!Tt.__f)){var s=function(a,c,l){if(!i.__c.__H)return!0;var u=!1,d=i.__c.props!==a;if(i.__c.__H.__.some(function(f){if(f.__N){u=!0;var m=f.__[0];f.__=f.__N,f.__N=void 0,m!==f.__[0]&&(d=!0)}}),r){var h=r.call(this,a,c,l);return u?h||d:h}return!u||d};Tt.__f=!0;var r=Tt.shouldComponentUpdate,o=Tt.componentWillUpdate;Tt.componentWillUpdate=function(a,c,l){if(this.__e){var u=r;r=void 0,s(a,c,l),r=u}o&&o.call(this,a,c,l)},Tt.shouldComponentUpdate=s}return i.__N||i.__}function lo(n,e){var t=lc(rr++,3);!Rt.__s&&ed(t.__H,e)&&(t.__=n,t.u=e,Tt.__H.__h.push(t))}function Za(n){return Mo=5,cc(function(){return{current:n}},[])}function cc(n,e){var t=lc(rr++,7);return ed(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Gf(){for(var n;n=Qh.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(co),e.__h.some(Ja),e.__h=[]}catch(t){e.__h=[],Rt.__e(t,n.__v)}}}Rt.__b=function(n){Tt=null,zc&&zc(n)},Rt.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),$c&&$c(n,e)},Rt.__r=function(n){Hc&&Hc(n),rr=0;var e=(Tt=n.__c).__H;e&&(ta===Tt?(e.__h=[],Tt.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(co),e.__h.some(Ja),e.__h=[],rr=0)),ta=Tt},Rt.diffed=function(n){Gc&&Gc(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Qh.push(e)!==1&&Bc===Rt.requestAnimationFrame||((Bc=Rt.requestAnimationFrame)||Vf)(Gf)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),ta=Tt=null},Rt.__c=function(n,e){e.some(function(t){try{t.__h.some(co),t.__h=t.__h.filter(function(i){return!i.__||Ja(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Rt.__e(i,t.__v)}}),Vc&&Vc(n,e)},Rt.unmount=function(n){Wc&&Wc(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(i){try{co(i)}catch(s){e=s}}),t.__H=void 0,e&&Rt.__e(e,t.__v))};var Xc=typeof requestAnimationFrame=="function";function Vf(n){var e,t=function(){clearTimeout(i),Xc&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);Xc&&(e=requestAnimationFrame(t))}function co(n){var e=Tt,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Tt=e}function Ja(n){var e=Tt;n.__c=n.__(),Tt=e}function ed(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function td(n,e){return typeof e=="function"?e(n):e}var Wf=Symbol.for("preact-signals");function Vo(){if(ti>1)ti--;else{var n,e=!1;for((function(){var s=Eo;for(Eo=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var o=r.t;o!==void 0;o=o.x)o.i===s.i&&(o.i=r.i);s=s.o}})();er!==void 0;){var t=er;for(er=void 0,bo++;t!==void 0;){var i=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&id(t))try{t.c()}catch(s){e||(n=s,e=!0)}t=i}}if(bo=0,ti--,e)throw n}}function $f(n){if(ti>0)return n();ja=++Xf,ti++;try{return n()}finally{Vo()}}var Qs,_t=void 0;function Gi(n){var e=_t,t=Qs;_t=void 0,Qs=void 0;try{return n()}finally{_t=e,Qs=t}}var er=void 0,ti=0,bo=0,Xf=0,ja=0,Eo=void 0,To=0;function nd(n){if(_t!==void 0){var e=n.n;if(e===void 0||e.t!==_t)return e={i:0,S:n,p:_t.s,n:void 0,t:_t,e:void 0,x:void 0,r:e},_t.s!==void 0&&(_t.s.n=e),_t.s=e,n.n=e,32&_t.f&&n.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=_t.s,e.n=void 0,_t.s.n=e,_t.s=e),e}}function Bt(n,e){this.v=n,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}Bt.prototype.brand=Wf;Bt.prototype.h=function(){return!0};Bt.prototype.S=function(n){var e=this,t=this.t;t!==n&&n.e===void 0&&(n.x=t,this.t=n,t!==void 0?t.e=n:Gi(function(){var i;(i=e.W)==null||i.call(e)}))};Bt.prototype.U=function(n){var e=this;if(this.t!==void 0){var t=n.e,i=n.x;t!==void 0&&(t.x=i,n.e=void 0),i!==void 0&&(i.e=t,n.x=void 0),n===this.t&&(this.t=i,i===void 0&&Gi(function(){var s;(s=e.Z)==null||s.call(e)}))}};Bt.prototype.subscribe=function(n){var e=this;return yi(function(){var t=e.value;Gi(function(){return n(t)})},{name:"sub"})};Bt.prototype.valueOf=function(){return this.value};Bt.prototype.toString=function(){return this.value+""};Bt.prototype.toJSON=function(){return this.value};Bt.prototype.peek=function(){var n=this;return Gi(function(){return n.value})};Object.defineProperty(Bt.prototype,"value",{get:function(){var n=nd(this);return n!==void 0&&(n.i=this.i),this.v},set:function(n){if(n!==this.v){if(bo>100)throw new Error("Cycle detected");(function(t){ti!==0&&bo===0&&t.l!==ja&&(t.l=ja,Eo={S:t,v:t.v,i:t.i,o:Eo})})(this),this.v=n,this.i++,To++,ti++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Vo()}}}});function tt(n,e){return new Bt(n,e)}function id(n){for(var e=n.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function sd(n){for(var e=n.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){n.s=e;break}}}function rd(n){for(var e=n.s,t=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}n.s=t}function Ki(n,e){Bt.call(this,void 0,e),this.x=n,this.s=void 0,this.g=To-1,this.f=4}Ki.prototype=new Bt;Ki.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===To))return!0;if(this.g=To,this.f|=1,this.i>0&&!id(this))return this.f&=-2,!0;var n=_t;try{sd(this),_t=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return _t=n,rd(this),this.f&=-2,!0};Ki.prototype.S=function(n){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}Bt.prototype.S.call(this,n)};Ki.prototype.U=function(n){if(this.t!==void 0&&(Bt.prototype.U.call(this,n),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};Ki.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;n!==void 0;n=n.x)n.t.N()}};Object.defineProperty(Ki.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var n=nd(this);if(this.h(),n!==void 0&&(n.i=this.i),16&this.f)throw this.v;return this.v}});function si(n,e){return new Ki(n,e)}function od(n){var e=n.j;if(n.j=void 0,typeof e=="function"){ti++;var t=_t;_t=void 0;try{e()}catch(i){throw n.f&=-2,n.f|=8,uc(n),i}finally{_t=t,Vo()}}}function uc(n){for(var e=n.s;e!==void 0;e=e.n)e.S.U(e);n.x=void 0,n.s=void 0,od(n)}function Yf(n){if(_t!==this)throw new Error("Out-of-order effect");rd(this),_t=n,this.f&=-2;try{8&this.f&&uc(this)}finally{Vo()}}function Ds(n,e){this.x=n,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,Qs&&Qs.push(this)}Ds.prototype.c=function(){var n=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.j=e)}finally{n()}};Ds.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,od(this),sd(this),ti++;var n=_t;return _t=this,Yf.bind(this,n)};Ds.prototype.N=function(){2&this.f||(this.f|=2,this.u=er,er=this)};Ds.prototype.d=function(){this.f|=8,1&this.f||uc(this)};Ds.prototype.dispose=function(){this.d()};function yi(n,e){var t=new Ds(n,e);try{t.c()}catch(s){throw t.d(),s}var i=t.d.bind(t);return i[Symbol.dispose]=i,i}var ad,wr,qf=typeof window<"u"&&!!window.__PREACT_SIGNALS_DEVTOOLS__,ld=[];yi(function(){ad=this.N})();function ks(n,e){nt[n]=e.bind(null,nt[n]||function(){})}function or(n){if(wr){var e=wr;wr=void 0,e()}wr=n&&n.S()}function cd(n){var e=this,t=n.data,i=Zf(t);i.name="ReactiveDom",i.value=t;var s=cc(function(){for(var a=e,c=e.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}var l=si(function(){var f=i.value.value;return f===0?0:f===!0?"":f||""}),u=si(function(){return!Array.isArray(l.value)&&!Hh(l.value)}),d=yi(function(){if(this.N=ud,u.value){var f=l.value;a.__v&&a.__v.__e&&a.__v.__e.nodeType===3&&(a.__v.__e.data=f)}}),h=e.__$u.d;return e.__$u.d=function(){d(),h.call(this)},[u,l]},[]),r=s[0],o=s[1];return r.value?o.peek():o.value}cd.displayName="ReactiveTextNode";Object.defineProperties(Bt.prototype,{constructor:{configurable:!0,value:$h(Pt,null).constructor},type:{configurable:!0,value:cd},props:{configurable:!0,get:function(){var n=this;return{data:{get value(){return n.value}}}}},__b:{configurable:!0,value:1}});ks("__b",function(n,e){if(or(),typeof e.type=="string"){var t,i=e.props;for(var s in i)if(s!=="children"){var r=i[s];r instanceof Bt&&(t||(e.__np=t={}),t[s]=r,i[s]=r.peek())}}n(e)});ks("__r",function(n,e){if(n(e),e.type!==Pt){or();var t,i=e.__c;i&&(i.__$f&=-2,(t=i.__$u)===void 0&&(i.__$u=t=(function(s,r){var o;return yi(function(){o=this},{name:r}),o.c=s,o})((function(s){return function(){var r;qf&&((r=this.y)==null||r.call(this)),s.__$f|=1,s.setState({})}})(i),typeof e.type=="function"?e.type.displayName||e.type.name:""))),or(t)}});ks("__e",function(n,e,t,i){or(),n(e,t,i)});ks("diffed",function(n,e){or();var t;if(typeof e.type=="string"&&(t=e.__e)){var i=e.__np,s=e.props,r=t.U;if(r)for(var o in r){var a=r[o];a===void 0||i&&o in i||(a.d(),r[o]=void 0)}if(i){r||(r={},t.U=r);for(var c in i){var l=r[c],u=i[c];l===void 0?(l=Kf(t,c,u,s),r[c]=l):l.o(u,s)}}}n(e)});function Kf(n,e,t,i){var s=e in n&&n.ownerSVGElement===void 0,r=tt(t);return{o:function(o,a){r.value=o,i=a},d:yi(function(){this.N=ud;var o=r.value.value;i[e]!==o&&(i[e]=o,s?n[e]=o:o!=null&&(o!==!1||e[4]==="-")?n.setAttribute(e,o):n.removeAttribute(e))})}}ks("unmount",function(n,e){if(typeof e.type=="string"){var t=e.__e;if(t){var i=t.U;if(i){t.U=void 0;for(var s in i){var r=i[s];r&&r.d()}}}var o=e.__np;if(o){var a=e.props;for(var c in o)a[c]=o[c]}e.__np=void 0}else{var l=e.__c;if(l){l.__$f|=8;var u=l.__$u;u&&(l.__$u=void 0,u.d())}}n(e)});ks("__h",function(n,e,t,i){i<3&&(e.__$f|=2),n(e,t,i)});js.prototype.shouldComponentUpdate=function(n,e){if(this.__R)return!0;var t=this.__$u,i=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var r=2&this.__$f;if(!(i||r||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var o in n)if(o!=="__source"&&n[o]!==this.props[o])return!0;for(var a in this.props)if(!(a in n))return!0;return!1};function Zf(n,e){return cc(function(){return tt(n,e)},[])}var Jf=function(n){queueMicrotask(function(){queueMicrotask(n)})};function jf(){$f(function(){for(var n;n=ld.shift();)ad.call(n)})}function ud(){ld.push(this)===1&&(nt.requestAnimationFrame||Jf)(jf)}const hc="180",Qf=0,Yc=1,ep=2,hd=1,tp=2,qn=3,Mi=0,jt=1,Kn=2,Si=0,xs=1,qc=2,Kc=3,Zc=4,np=5,Oi=100,ip=101,sp=102,rp=103,op=104,ap=200,lp=201,cp=202,up=203,Qa=204,el=205,hp=206,dp=207,fp=208,pp=209,mp=210,gp=211,_p=212,vp=213,yp=214,tl=0,nl=1,il=2,Es=3,sl=4,rl=5,ol=6,al=7,dd=0,Sp=1,xp=2,xi=0,Mp=1,bp=2,Ep=3,Tp=4,wp=5,Ap=6,Cp=7,fd=300,Ts=301,ws=302,ll=303,cl=304,Wo=306,ul=1e3,zi=1001,hl=1002,wn=1003,Rp=1004,Ar=1005,bn=1006,na=1007,Hi=1008,ri=1009,pd=1010,md=1011,ar=1012,dc=1013,Xi=1014,Qn=1015,vr=1016,fc=1017,pc=1018,lr=1020,gd=35902,_d=35899,vd=1021,yd=1022,En=1023,cr=1026,ur=1027,Sd=1028,mc=1029,xd=1030,gc=1031,_c=1033,uo=33776,ho=33777,fo=33778,po=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,_l=37492,vl=37496,yl=37808,Sl=37809,xl=37810,Ml=37811,bl=37812,El=37813,Tl=37814,wl=37815,Al=37816,Cl=37817,Rl=37818,Pl=37819,Ll=37820,Dl=37821,kl=36492,Il=36494,Ul=36495,Nl=36283,Ol=36284,Fl=36285,Bl=36286,Pp=3200,Lp=3201,Dp=0,kp=1,_i="",Zt="srgb",As="srgb-linear",wo="linear",ot="srgb",ji=7680,Jc=519,Ip=512,Up=513,Np=514,Md=515,Op=516,Fp=517,Bp=518,zp=519,zl=35044,jc="300 es",On=2e3,Ao=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mo=Math.PI/180,Hl=180/Math.PI;function ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ve(n,e,t){return Math.max(e,Math.min(t,n))}function Hp(n,e){return(n%e+e)%e}function ia(n,e,t){return(1-t)*n+t*e}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function at(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const h=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(d!==v||c!==h||l!==f||u!==m){let g=1-a;const p=c*h+l*f+u*m+d*v,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),R=Math.atan2(w,p*T);g=Math.sin(g*R)/w,a=Math.sin(a*R)/w}const x=a*T;if(c=c*g+h*x,l=l*g+f*x,u=u*g+m*x,d=d*g+v*x,g===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=w,l*=w,u*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*d+c*f-l*h,e[t+1]=c*m+u*h+l*d-a*f,e[t+2]=l*m+u*f+a*h-c*d,e[t+3]=u*m-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"YZX":this._x=h*u*d+l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d-h*f*m;break;case"XZY":this._x=h*u*d-l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ve(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new U,Qc=new yr;class Be{constructor(e,t,i,s,r,o,a,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],m=i[8],v=s[0],g=s[3],p=s[6],T=s[1],S=s[4],x=s[7],w=s[2],R=s[5],A=s[8];return r[0]=o*v+a*T+c*w,r[3]=o*g+a*S+c*R,r[6]=o*p+a*x+c*A,r[1]=l*v+u*T+d*w,r[4]=l*g+u*S+d*R,r[7]=l*p+u*x+d*A,r[2]=h*v+f*T+m*w,r[5]=h*g+f*S+m*R,r[8]=h*p+f*x+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,m=t*d+i*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(s*l-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Be;function bd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gp(){const n=Co("canvas");return n.style.display="block",n}const eu={};function hr(n){n in eu||(eu[n]=!0,console.warn(n))}function Vp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const tu=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){const n={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[As]:{primaries:e,whitePoint:i,transfer:wo,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const Ze=Wp();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class $p{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qi===void 0&&(Qi=Co("canvas")),Qi.width=e.width,Qi.height=e.height;const s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xp=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oa(s[o].image)):r.push(oa(s[o]))}else r=oa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$p.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;const aa=new U;class Yt extends Is{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=zi,s=zi,r=bn,o=Hi,a=En,c=ri,l=Yt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=ni(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(aa).x}get height(){return this.source.getSize(aa).y}get depth(){return this.source.getSize(aa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ul:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ul:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=fd;Yt.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,i=0,s=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(f+1)/2,w=(p+1)/2,R=(u+h)/4,A=(d+v)/4,D=(m+g)/4;return S>x&&S>w?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=A/i):x>w?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=R/s,r=D/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=D/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(d-v)/T,this.z=(h-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ve(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qp extends Is{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Yt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends qp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ed extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kp extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cr.copy(i.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Rr.subVectors(this.max,Bs),es.subVectors(e.a,Bs),ts.subVectors(e.b,Bs),ns.subVectors(e.c,Bs),li.subVectors(ts,es),ci.subVectors(ns,ts),wi.subVectors(es,ns);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-wi.z,wi.y,li.z,0,-li.x,ci.z,0,-ci.x,wi.z,0,-wi.x,-li.y,li.x,0,-ci.y,ci.x,0,-wi.y,wi.x,0];return!la(t,es,ts,ns,Rr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,es,ts,ns,Rr))?!1:(Pr.crossVectors(li,ci),t=[Pr.x,Pr.y,Pr.z],la(t,es,ts,ns,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new U,new U,new U,new U,new U,new U,new U,new U],pn=new U,Cr=new Sr,es=new U,ts=new U,ns=new U,li=new U,ci=new U,wi=new U,Bs=new U,Rr=new U,Pr=new U,Ai=new U;function la(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ai.fromArray(n,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),u=i.dot(Ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Zp=new Sr,zs=new U,ca=new U;class $o{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(ca)),this.expandByPoint(zs.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wn=new U,ua=new U,Lr=new U,ui=new U,ha=new U,Dr=new U,da=new U;class yc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ua.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(ua);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=ui.dot(this.direction),c=-ui.dot(Lr),l=ui.lengthSq(),u=Math.abs(1-o*o);let d,h,f,m;if(u>0)if(d=o*c-a,h=o*a-c,m=r*u,d>=0)if(h>=-m)if(h<=m){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=m?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ua).addScaledVector(Lr,h),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,s,r){ha.subVectors(t,e),Dr.subVectors(i,e),da.crossVectors(ha,Dr);let o=this.direction.dot(da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const c=a*this.direction.dot(Dr.crossVectors(ui,Dr));if(c<0)return null;const l=a*this.direction.dot(ha.cross(ui));if(l<0||c+l>o)return null;const u=-a*ui.dot(da);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,i,s,r,o,a,c,l,u,d,h,f,m,v,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,d,h,f,m,v,g)}set(e,t,i,s,r,o,a,c,l,u,d,h,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,m=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,m=l*u,v=l*d;t[0]=h+v*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,m=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,m=a*u,v=a*d;t[0]=c*u,t[4]=m*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+m,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,jp)}lookAt(e,t,i){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),hi.crossVectors(i,nn),hi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),hi.crossVectors(i,nn)),hi.normalize(),kr.crossVectors(nn,hi),s[0]=hi.x,s[4]=kr.x,s[8]=nn.x,s[1]=hi.y,s[5]=kr.y,s[9]=nn.y,s[2]=hi.z,s[6]=kr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],T=i[3],S=i[7],x=i[11],w=i[15],R=s[0],A=s[4],D=s[8],M=s[12],b=s[1],P=s[5],k=s[9],B=s[13],Y=s[2],W=s[6],X=s[10],Z=s[14],G=s[3],re=s[7],ue=s[11],pe=s[15];return r[0]=o*R+a*b+c*Y+l*G,r[4]=o*A+a*P+c*W+l*re,r[8]=o*D+a*k+c*X+l*ue,r[12]=o*M+a*B+c*Z+l*pe,r[1]=u*R+d*b+h*Y+f*G,r[5]=u*A+d*P+h*W+f*re,r[9]=u*D+d*k+h*X+f*ue,r[13]=u*M+d*B+h*Z+f*pe,r[2]=m*R+v*b+g*Y+p*G,r[6]=m*A+v*P+g*W+p*re,r[10]=m*D+v*k+g*X+p*ue,r[14]=m*M+v*B+g*Z+p*pe,r[3]=T*R+S*b+x*Y+w*G,r[7]=T*A+S*P+x*W+w*re,r[11]=T*D+S*k+x*X+w*ue,r[15]=T*M+S*B+x*Z+w*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*d-s*l*d-r*a*h+i*l*h+s*a*f-i*c*f)+v*(+t*c*f-t*l*h+r*o*h-s*o*f+s*l*u-r*c*u)+g*(+t*l*d-t*a*f-r*o*d+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*d+t*a*h+s*o*d-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],T=d*g*l-v*h*l+v*c*f-a*g*f-d*c*p+a*h*p,S=m*h*l-u*g*l-m*c*f+o*g*f+u*c*p-o*h*p,x=u*v*l-m*d*l+m*a*f-o*v*f-u*a*p+o*d*p,w=m*d*c-u*v*c-m*a*h+o*v*h+u*a*g-o*d*g,R=t*T+i*S+s*x+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(v*h*r-d*g*r-v*s*f+i*g*f+d*s*p-i*h*p)*A,e[2]=(a*g*r-v*c*r+v*s*l-i*g*l-a*s*p+i*c*p)*A,e[3]=(d*c*r-a*h*r-d*s*l+i*h*l+a*s*f-i*c*f)*A,e[4]=S*A,e[5]=(u*g*r-m*h*r+m*s*f-t*g*f-u*s*p+t*h*p)*A,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*A,e[7]=(o*h*r-u*c*r+u*s*l-t*h*l-o*s*f+t*c*f)*A,e[8]=x*A,e[9]=(m*d*r-u*v*r-m*i*f+t*v*f+u*i*p-t*d*p)*A,e[10]=(o*v*r-m*a*r+m*i*l-t*v*l-o*i*p+t*a*p)*A,e[11]=(u*a*r-o*d*r-u*i*l+t*d*l+o*i*f-t*a*f)*A,e[12]=w*A,e[13]=(u*v*s-m*d*s+m*i*h-t*v*h-u*i*g+t*d*g)*A,e[14]=(m*a*s-o*v*s-m*i*c+t*v*c+o*i*g-t*a*g)*A,e[15]=(o*d*s-u*a*s+u*i*c-t*d*c-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,m=r*d,v=o*u,g=o*d,p=a*d,T=c*l,S=c*u,x=c*d,w=i.x,R=i.y,A=i.z;return s[0]=(1-(v+p))*w,s[1]=(f+x)*w,s[2]=(m-S)*w,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(h+p))*R,s[6]=(g+T)*R,s[7]=0,s[8]=(m+S)*A,s[9]=(g-T)*A,s[10]=(1-(h+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const l=1/r,u=1/o,d=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,t.setFromRotationMatrix(mn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=On,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let m,v;if(c)m=r/(o-r),v=o*r/(o-r);else if(a===On)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ao)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=On,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let m,v;if(c)m=1/(o-r),v=o/(o-r);else if(a===On)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ao)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new U,mn=new xt,Jp=new U(0,0,0),jp=new U(1,1,1),hi=new U,kr=new U,nn=new U,iu=new xt,su=new yr;class oi{constructor(e=0,t=0,i=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qp=0;const ru=new U,ss=new yr,$n=new xt,Ir=new U,Hs=new U,em=new U,tm=new yr,ou=new U(1,0,0),au=new U(0,1,0),lu=new U(0,0,1),cu={type:"added"},nm={type:"removed"},rs={type:"childadded",child:null},fa={type:"childremoved",child:null};class qt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new U,t=new oi,i=new yr,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Be}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ir.copy(e):Ir.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Hs,Ir,this.up):$n.lookAt(Ir,Hs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ss.setFromRotationMatrix($n),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nm),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new U,Xn=new U,pa=new U,Yn=new U,os=new U,as=new U,uu=new U,ma=new U,ga=new U,_a=new U,va=new wt,ya=new wt,Sa=new wt;class rn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gn.subVectors(s,t),Xn.subVectors(i,t),pa.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Xn),c=gn.dot(pa),l=Xn.dot(Xn),u=Xn.dot(pa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(o,Yn.y),c.addScaledVector(a,Yn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return va.setScalar(0),ya.setScalar(0),Sa.setScalar(0),va.fromBufferAttribute(e,t),ya.fromBufferAttribute(e,i),Sa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(ya,r.y),o.addScaledVector(Sa,r.z),o}static isFrontFacing(e,t,i,s){return gn.subVectors(i,t),Xn.subVectors(e,t),gn.cross(Xn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),gn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,i),as.subVectors(r,i),ma.subVectors(e,i);const c=os.dot(ma),l=as.dot(ma);if(c<=0&&l<=0)return t.copy(i);ga.subVectors(e,s);const u=os.dot(ga),d=as.dot(ga);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(os,o);_a.subVectors(e,r);const f=os.dot(_a),m=as.dot(_a);if(m>=0&&f<=m)return t.copy(r);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(as,a);const g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return uu.subVectors(r,s),a=(d-u)/(d-u+(f-m)),t.copy(s).addScaledVector(uu,a);const p=1/(g+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Hp(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=xa(o,r,e+1/3),this.g=xa(o,r,e),this.b=xa(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=Td[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Ze.workingToColorSpace(Gt.copy(this),e),Math.round(Ve(Gt.r*255,0,255))*65536+Math.round(Ve(Gt.g*255,0,255))*256+Math.round(Ve(Gt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Zt){Ze.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Ur);const i=ia(di.h,Ur.h,t),s=ia(di.s,Ur.s,t),r=ia(di.l,Ur.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ye;Ye.NAMES=Td;let im=0;class Us extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=xs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=el,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Et extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new U,Nr=new de;let sm=0;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zl,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),e}}class wd extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ad extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rm=0;const hn=new xt,Ma=new qt,ls=new U,sn=new Sr,Gs=new Sr,Nt=new U;class Vt extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?Ad:wd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(sn.min,Gs.min),sn.expandByPoint(Nt),Nt.addVectors(sn.max,Gs.max),sn.expandByPoint(Nt)):(sn.expandByPoint(Gs.min),sn.expandByPoint(Gs.max))}sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Nt.fromBufferAttribute(a,l),c&&(ls.fromBufferAttribute(e,l),Nt.add(ls)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new U,c[D]=new U;const l=new U,u=new U,d=new U,h=new de,f=new de,m=new de,v=new U,g=new U;function p(D,M,b){l.fromBufferAttribute(i,D),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),h.fromBufferAttribute(r,D),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,b),u.sub(l),d.sub(l),f.sub(h),m.sub(h);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),a[D].add(v),a[M].add(v),a[b].add(v),c[D].add(g),c[M].add(g),c[b].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,M=T.length;D<M;++D){const b=T[D],P=b.start,k=b.count;for(let B=P,Y=P+k;B<Y;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new U,x=new U,w=new U,R=new U;function A(D){w.fromBufferAttribute(s,D),R.copy(w);const M=a[D];S.copy(M),S.sub(w.multiplyScalar(w.dot(M))).normalize(),x.crossVectors(R,M);const P=x.dot(c[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,P)}for(let D=0,M=T.length;D<M;++D){const b=T[D],P=b.start,k=b.count;for(let B=P,Y=P+k;B<Y;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let p=0;p<u;p++)h[m++]=l[f++]}return new An(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new xt,Ci=new yc,Or=new $o,du=new U,Fr=new U,Br=new U,zr=new U,ba=new U,Hr=new U,fu=new U,Gr=new U;class rt extends qt{constructor(e=new Vt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(ba.fromBufferAttribute(d,e),o?Hr.addScaledVector(ba,u):Hr.addScaledVector(ba.sub(t),u))}t.add(Hr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Or.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Or,du)===null||Ci.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(hu.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(hu),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=o[g.materialIndex],T=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=T,w=S;x<w;x+=3){const R=a.getX(x),A=a.getX(x+1),D=a.getX(x+2);s=Vr(this,p,e,i,l,u,d,R,A,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const T=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);s=Vr(this,o,e,i,l,u,d,T,S,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=o[g.materialIndex],T=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=T,w=S;x<w;x+=3){const R=x,A=x+1,D=x+2;s=Vr(this,p,e,i,l,u,d,R,A,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const T=g,S=g+1,x=g+2;s=Vr(this,o,e,i,l,u,d,T,S,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function om(n,e,t,i,s,r,o,a){let c;if(e.side===jt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Mi,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Gr);return l<t.near||l>t.far?null:{distance:l,point:Gr.clone(),object:n}}function Vr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Fr),n.getVertexPosition(c,Br),n.getVertexPosition(l,zr);const u=om(n,e,t,i,Fr,Br,zr,fu);if(u){const d=new U;rn.getBarycoord(fu,Fr,Br,zr,d),s&&(u.uv=rn.getInterpolatedAttribute(s,a,c,l,d,new de)),r&&(u.uv1=rn.getInterpolatedAttribute(r,a,c,l,d,new de)),o&&(u.normal=rn.getInterpolatedAttribute(o,a,c,l,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new U,materialIndex:0};rn.getNormal(Fr,Br,zr,h.normal),u.face=h,u.barycoord=d}return u}class xr extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(d,2));function m(v,g,p,T,S,x,w,R,A,D,M){const b=x/A,P=w/D,k=x/2,B=w/2,Y=R/2,W=A+1,X=D+1;let Z=0,G=0;const re=new U;for(let ue=0;ue<X;ue++){const pe=ue*P-B;for(let Oe=0;Oe<W;Oe++){const Xe=Oe*b-k;re[v]=Xe*T,re[g]=pe*S,re[p]=Y,l.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[p]=R>0?1:-1,u.push(re.x,re.y,re.z),d.push(Oe/A),d.push(1-ue/D),Z+=1}}for(let ue=0;ue<D;ue++)for(let pe=0;pe<A;pe++){const Oe=h+pe+W*ue,Xe=h+pe+W*(ue+1),ut=h+(pe+1)+W*(ue+1),je=h+(pe+1)+W*ue;c.push(Oe,Xe,je),c.push(Xe,ut,je),G+=6}a.addGroup(f,G,M),f+=G,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=Cs(n[t]);for(const s in i)e[s]=i[s]}return e}function am(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const lm={clone:Cs,merge:Xt};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rd extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new U,pu=new de,mu=new de;class _n extends Rd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,us=1;class hm extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(cs,us,e,t);s.layers=this.layers,this.add(s);const r=new _n(cs,us,e,t);r.layers=this.layers,this.add(r);const o=new _n(cs,us,e,t);o.layers=this.layers,this.add(o);const a=new _n(cs,us,e,t);a.layers=this.layers,this.add(a);const c=new _n(cs,us,e,t);c.layers=this.layers,this.add(c);const l=new _n(cs,us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Pd extends Yt{constructor(e=[],t=Ts,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dm extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Pd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xr(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Si});r.uniforms.tEquirect.value=t;const o=new rt(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=bn),new hm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Dn extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pm extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zl,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new U;class Ro{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ro(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ld extends Us{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const Vs=new U,ds=new U,fs=new U,ps=new de,Ws=new de,Dd=new xt,Wr=new U,$s=new U,$r=new U,gu=new de,Ta=new de,_u=new de;class gm extends qt{constructor(e=new Ld){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mm(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new Ro(i,3,0,!1)),hs.setAttribute("uv",new Ro(i,2,3,!1))}this.geometry=hs,this.material=e,this.center=new de(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Dd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Xr(Wr.set(-.5,-.5,0),fs,o,ds,s,r),Xr($s.set(.5,-.5,0),fs,o,ds,s,r),Xr($r.set(.5,.5,0),fs,o,ds,s,r),gu.set(0,0),Ta.set(1,0),_u.set(1,1);let a=e.ray.intersectTriangle(Wr,$s,$r,!1,Vs);if(a===null&&(Xr($s.set(-.5,.5,0),fs,o,ds,s,r),Ta.set(0,1),a=e.ray.intersectTriangle(Wr,$r,$s,!1,Vs),a===null))return;const c=e.ray.origin.distanceTo(Vs);c<e.near||c>e.far||t.push({distance:c,point:Vs.clone(),uv:rn.getInterpolation(Vs,Wr,$s,$r,gu,Ta,_u,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(n,e,t,i,s,r){ps.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ws.x=r*ps.x-s*ps.y,Ws.y=s*ps.x+r*ps.y):Ws.copy(ps),n.copy(e),n.x+=Ws.x,n.y+=Ws.y,n.applyMatrix4(Dd)}const wa=new U,_m=new U,vm=new Be;class Ii{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=wa.subVectors(i,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vm.getNormalMatrix(e),s=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new $o,ym=new de(.5,.5),Yr=new U;class kd{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],T=r[12],S=r[13],x=r[14],w=r[15];if(s[0].setComponents(l-o,f-u,p-m,w-T).normalize(),s[1].setComponents(l+o,f+u,p+m,w+T).normalize(),s[2].setComponents(l+a,f+d,p+v,w+S).normalize(),s[3].setComponents(l-a,f-d,p-v,w-S).normalize(),i)s[4].setComponents(c,h,g,x).normalize(),s[5].setComponents(l-c,f-h,p-g,w-x).normalize();else if(s[4].setComponents(l-c,f-h,p-g,w-x).normalize(),t===On)s[5].setComponents(l+c,f+h,p+g,w+x).normalize();else if(t===Ao)s[5].setComponents(c,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=ym.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bs extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new U,Lo=new U,vu=new xt,Xs=new yc,qr=new $o,Aa=new U,yu=new U;class Do extends qt{constructor(e=new Vt,t=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Po.fromBufferAttribute(t,s-1),Lo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Po.distanceTo(Lo);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;vu.copy(s).invert(),Xs.copy(e.ray).applyMatrix4(vu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=u.getX(v),T=u.getX(v+1),S=Kr(this,e,Xs,c,p,T,v);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(f),p=Kr(this,e,Xs,c,v,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=Kr(this,e,Xs,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Kr(this,e,Xs,c,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Po.fromBufferAttribute(a,s),Lo.fromBufferAttribute(a,r),t.distanceSqToSegment(Po,Lo,Aa,yu)>i)return;Aa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Aa);if(!(l<e.near||l>e.far))return{distance:l,point:yu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Su=new U,xu=new U;class Sm extends Do{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Su.fromBufferAttribute(t,s),xu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Su.distanceTo(xu);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Id extends Yt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ud extends Yt{constructor(e,t,i=Xi,s,r,o,a=wn,c=wn,l,u=cr,d=1){if(u!==cr&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nd extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ln extends Vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new U,u=new de;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Zr=new U,Jr=new U,Ca=new U,jr=new rn;class xm extends Vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(mo*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:v,b:g,c:p}=jr;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),jr.getNormal(Ca),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){const S=(T+1)%3,x=d[T],w=d[S],R=jr[u[T]],A=jr[u[S]],D=`${x}_${w}`,M=`${w}_${x}`;M in h&&h[M]?(Ca.dot(h[M].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(A.x,A.y,A.z)),h[M]=null):D in h||(h[D]={index0:l[T],index1:l[S],normal:Ca.clone()})}}for(const m in h)if(h[m]){const{index0:v,index1:g}=h[m];Zr.fromBufferAttribute(a,v),Jr.fromBufferAttribute(a,g),f.push(Zr.x,Zr.y,Zr.z),f.push(Jr.x,Jr.y,Jr.z)}this.setAttribute("position",new Dt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new de:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new U,s=[],r=[],o=[],a=new U,c=new xt;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xc extends Hn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new de){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mm extends xc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Mc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Qr=new U,Ra=new Mc,Pa=new Mc,La=new Mc;class bm extends Hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new U){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Qr.subVectors(s[0],s[1]).add(s[0]),l=Qr);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ra.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,m,v,g),Pa.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,m,v,g),La.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Pa.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),La.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Ra.calc(c),Pa.calc(c),La.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Em(n,e){const t=1-n;return t*t*e}function Tm(n,e){return 2*(1-n)*n*e}function wm(n,e){return n*n*e}function tr(n,e,t,i){return Em(n,e)+Tm(n,t)+wm(n,i)}function Am(n,e){const t=1-n;return t*t*t*e}function Cm(n,e){const t=1-n;return 3*t*t*n*e}function Rm(n,e){return 3*(1-n)*n*n*e}function Pm(n,e){return n*n*n*e}function nr(n,e,t,i,s){return Am(n,e)+Cm(n,t)+Rm(n,i)+Pm(n,s)}class Od extends Hn{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(nr(e,s.x,r.x,o.x,a.x),nr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lm extends Hn{constructor(e=new U,t=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(nr(e,s.x,r.x,o.x,a.x),nr(e,s.y,r.y,o.y,a.y),nr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fd extends Hn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dm extends Hn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bd extends Hn{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(tr(e,s.x,r.x,o.x),tr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class km extends Hn{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(tr(e,s.x,r.x,o.x),tr(e,s.y,r.y,o.y),tr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Mu(a,c.x,l.x,u.x,d.x),Mu(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var bu=Object.freeze({__proto__:null,ArcCurve:Mm,CatmullRomCurve3:bm,CubicBezierCurve:Od,CubicBezierCurve3:Lm,EllipseCurve:xc,LineCurve:Fd,LineCurve3:Dm,QuadraticBezierCurve:Bd,QuadraticBezierCurve3:km,SplineCurve:zd});class Im extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new bu[s.type]().fromJSON(s))}return this}}class Eu extends Im{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Fd(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Bd(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Od(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new zd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new xc(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hd extends Eu{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Eu().fromJSON(s))}return this}}function Um(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Gd(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=zm(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=t;h<s;h+=t){const f=n[h],m=n[h+1];f<a&&(a=f),m<c&&(c=m),f>u&&(u=f),m>d&&(d=m)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return dr(r,o,t,a,c,l,0),o}function Gd(n,e,t,i,s){let r;if(s===Jm(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Tu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Tu(o/i|0,n[o],n[o+1],r);return r&&Rs(r,r.next)&&(pr(r),r=r.next),r}function qi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Rs(t,t.next)||St(t.prev,t,t.next)===0)){if(pr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function dr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&$m(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Om(n,i,s,r):Nm(n)){e.push(c.i,n.i,l.i),pr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Fm(qi(n),e),dr(n,e,t,i,s,r,2)):o===2&&Bm(n,e,t,i,s,r):dr(qi(n),e,t,i,s,r,1);break}}}function Nm(n){const e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&qs(s,a,r,c,o,l,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Om(n,e,t,i){const s=n.prev,r=n,o=n.next;if(St(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),m=Math.min(u,d,h),v=Math.max(a,c,l),g=Math.max(u,d,h),p=Gl(f,m,e,t,i),T=Gl(v,g,e,t,i);let S=n.prevZ,x=n.nextZ;for(;S&&S.z>=p&&x&&x.z<=T;){if(S.x>=f&&S.x<=v&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&qs(a,u,c,d,l,h,S.x,S.y)&&St(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&qs(a,u,c,d,l,h,x.x,x.y)&&St(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=v&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&qs(a,u,c,d,l,h,S.x,S.y)&&St(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&qs(a,u,c,d,l,h,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Fm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Rs(i,s)&&Wd(i,t,t.next,s)&&fr(i,s)&&fr(s,i)&&(e.push(i.i,t.i,s.i),pr(t),pr(t.next),t=n=s),t=t.next}while(t!==n);return qi(t)}function Bm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qm(o,a)){let c=$d(o,a);o=qi(o,o.next),c=qi(c,c.next),dr(o,e,t,i,s,r,0),dr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function zm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Gd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Ym(l))}s.sort(Hm);for(let r=0;r<s.length;r++)t=Gm(s[r],t);return t}function Hm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Gm(n,e){const t=Vm(n,e);if(!t)return e;const i=$d(t,n);return qi(i,i.next),qi(t,t.next)}function Vm(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Rs(n,t))return t;do{if(Rs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Vd(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);fr(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Wm(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Wm(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function $m(n,e,t,i){let s=n;do s.z===0&&(s.z=Gl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Xm(s)}function Xm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Gl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ym(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Vd(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function qs(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Vd(n,e,t,i,s,r,o,a)}function qm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Km(n,e)&&(fr(n,e)&&fr(e,n)&&Zm(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||Rs(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Rs(n,e){return n.x===e.x&&n.y===e.y}function Wd(n,e,t,i){const s=to(St(n,e,t)),r=to(St(n,e,i)),o=to(St(t,i,n)),a=to(St(t,i,e));return!!(s!==r&&o!==a||s===0&&eo(n,t,e)||r===0&&eo(n,i,e)||o===0&&eo(t,n,i)||a===0&&eo(t,e,i))}function eo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function to(n){return n>0?1:n<0?-1:0}function Km(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Wd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function fr(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function Zm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function $d(n,e){const t=Vl(n.i,n.x,n.y),i=Vl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Tu(n,e,t,i){const s=Vl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function pr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jm(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class jm{static triangulate(e,t,i=2){return Um(e,t,i)}}class ir{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ir.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];wu(e),Au(i,e);let o=e.length;t.forEach(wu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Au(i,t[c]);const a=jm.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function wu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Au(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Zn extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,f=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const T=p*h-o;for(let S=0;S<l;S++){const x=S*d-r;m.push(x,-T,0),v.push(0,0,1),g.push(S/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const S=T+l*p,x=T+l*(p+1),w=T+1+l*(p+1),R=T+1+l*p;f.push(S,x,R),f.push(x,w,R)}this.setIndex(f),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.width,e.height,e.widthSegments,e.heightSegments)}}class mi extends Vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=e;const h=(t-e)/s,f=new U,m=new de;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const p=r+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let v=0;v<s;v++){const g=v*(i+1);for(let p=0;p<i;p++){const T=p+g,S=T,x=T+i+1,w=T+i+2,R=T+1;a.push(S,x,R),a.push(x,w,R)}}this.setIndex(a),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class bc extends Vt{constructor(e=new Hd([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(r,3)),this.setAttribute("uv",new Dt(o,2));function l(u){const d=s.length/3,h=u.extractPoints(t);let f=h.shape;const m=h.holes;ir.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const T=m[g];ir.isClockWise(T)===!0&&(m[g]=T.reverse())}const v=ir.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const T=m[g];f=f.concat(T)}for(let g=0,p=f.length;g<p;g++){const T=f[g];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let g=0,p=v.length;g<p;g++){const T=v[g],S=T[0]+d,x=T[1]+d,w=T[2]+d;i.push(S,x,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Qm(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new bc(i,e.curveSegments)}}function Qm(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class eg extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ng extends bs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Xd extends Rd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ig extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cu=new xt;class sg{constructor(e,t,i=0,s=1/0){this.ray=new yc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(e,t=!0,i=[]){return Wl(e,this,i,t),i.sort(Ru),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Wl(e[s],this,i,t);return i.sort(Ru),i}}function Ru(n,e){return n.distance-e.distance}function Wl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Wl(r[o],e,t,!0)}}function Pu(n,e,t,i){const s=rg(i);switch(t){case vd:return n*e;case Sd:return n*e/s.components*s.byteLength;case mc:return n*e/s.components*s.byteLength;case xd:return n*e*2/s.components*s.byteLength;case gc:return n*e*2/s.components*s.byteLength;case yd:return n*e*3/s.components*s.byteLength;case En:return n*e*4/s.components*s.byteLength;case _c:return n*e*4/s.components*s.byteLength;case uo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:case ml:return Math.max(n,16)*Math.max(e,8)/4;case dl:case pl:return Math.max(n,8)*Math.max(e,8)/2;case gl:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kl:case Il:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Nl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fl:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rg(n){switch(n){case ri:case pd:return{byteLength:1,components:1};case ar:case md:case vr:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case Xi:case dc:case Qn:return{byteLength:4,components:1};case gd:case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);function Yd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function og(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:ag,alphahash_pars_fragment:lg,alphamap_fragment:cg,alphamap_pars_fragment:ug,alphatest_fragment:hg,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:gg,begin_vertex:_g,beginnormal_vertex:vg,bsdfs:yg,iridescence_fragment:Sg,bumpmap_pars_fragment:xg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:Eg,clipping_planes_vertex:Tg,color_fragment:wg,color_pars_fragment:Ag,color_pars_vertex:Cg,color_vertex:Rg,common:Pg,cube_uv_reflection_fragment:Lg,defaultnormal_vertex:Dg,displacementmap_pars_vertex:kg,displacementmap_vertex:Ig,emissivemap_fragment:Ug,emissivemap_pars_fragment:Ng,colorspace_fragment:Og,colorspace_pars_fragment:Fg,envmap_fragment:Bg,envmap_common_pars_fragment:zg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:Qg,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:$g,fog_fragment:Xg,fog_pars_fragment:Yg,gradientmap_pars_fragment:qg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:jg,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:d_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:__,metalnessmap_pars_fragment:v_,morphinstance_vertex:y_,morphcolor_vertex:S_,morphnormal_vertex:x_,morphtarget_pars_vertex:M_,morphtarget_vertex:b_,normal_fragment_begin:E_,normal_fragment_maps:T_,normal_pars_fragment:w_,normal_pars_vertex:A_,normal_vertex:C_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:k_,opaque_fragment:I_,packing:U_,premultiplied_alpha_fragment:N_,project_vertex:O_,dithering_fragment:F_,dithering_pars_fragment:B_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:$_,skinbase_vertex:X_,skinning_pars_vertex:Y_,skinning_vertex:q_,skinnormal_vertex:K_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:j_,tonemapping_pars_fragment:Q_,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:hv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:yv,meshbasic_vert:Sv,meshbasic_frag:xv,meshlambert_vert:Mv,meshlambert_frag:bv,meshmatcap_vert:Ev,meshmatcap_frag:Tv,meshnormal_vert:wv,meshnormal_frag:Av,meshphong_vert:Cv,meshphong_frag:Rv,meshphysical_vert:Pv,meshphysical_frag:Lv,meshtoon_vert:Dv,meshtoon_frag:kv,points_vert:Iv,points_frag:Uv,shadow_vert:Nv,shadow_frag:Ov,sprite_vert:Fv,sprite_frag:Bv},oe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},kn={basic:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Xt([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Xt([oe.lights,oe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};kn.physical={uniforms:Xt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const no={r:0,b:0,g:0},Pi=new oi,zv=new xt;function Hv(n,e,t,i,s,r,o){const a=new Ye(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function m(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1;const w=m(S);w===null?p(a,c):w&&w.isColor&&(p(w,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(S,x){const w=m(x);w&&(w.isCubeTexture||w.mapping===Wo)?(u===void 0&&(u=new rt(new xr(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Cs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pi.copy(x.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zv.makeRotationFromEuler(Pi)),u.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ot,(d!==w||h!==w.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,f=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new rt(new Zn(2,2),new bi({name:"BackgroundMaterial",uniforms:Cs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=w,h=w.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(no,Cd(n)),i.buffers.color.setClear(no.r,no.g,no.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:g,dispose:T}}function Gv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(b,P,k,B,Y){let W=!1;const X=d(B,k,P);r!==X&&(r=X,l(r.object)),W=f(b,B,k,Y),W&&m(b,B,k,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(b,P,k,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function d(b,P,k){const B=k.wireframe===!0;let Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let W=Y[P.id];W===void 0&&(W={},Y[P.id]=W);let X=W[B];return X===void 0&&(X=h(c()),W[B]=X),X}function h(b){const P=[],k=[],B=[];for(let Y=0;Y<t;Y++)P[Y]=0,k[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,P,k,B){const Y=r.attributes,W=P.attributes;let X=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){const ue=Y[G];let pe=W[G];if(pe===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),ue===void 0||ue.attribute!==pe||pe&&ue.data!==pe.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function m(b,P,k,B){const Y={},W=P.attributes;let X=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){let ue=W[G];ue===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor));const pe={};pe.attribute=ue,ue&&ue.data&&(pe.data=ue.data),Y[G]=pe,X++}r.attributes=Y,r.attributesNum=X,r.index=B}function v(){const b=r.newAttributes;for(let P=0,k=b.length;P<k;P++)b[P]=0}function g(b){p(b,0)}function p(b,P){const k=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;k[b]=1,B[b]===0&&(n.enableVertexAttribArray(b),B[b]=1),Y[b]!==P&&(n.vertexAttribDivisor(b,P),Y[b]=P)}function T(){const b=r.newAttributes,P=r.enabledAttributes;for(let k=0,B=P.length;k<B;k++)P[k]!==b[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function S(b,P,k,B,Y,W,X){X===!0?n.vertexAttribIPointer(b,P,k,Y,W):n.vertexAttribPointer(b,P,k,B,Y,W)}function x(b,P,k,B){v();const Y=B.attributes,W=k.getAttributes(),X=P.defaultAttributeValues;for(const Z in W){const G=W[Z];if(G.location>=0){let re=Y[Z];if(re===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const ue=re.normalized,pe=re.itemSize,Oe=e.get(re);if(Oe===void 0)continue;const Xe=Oe.buffer,ut=Oe.type,je=Oe.bytesPerElement,q=ut===n.INT||ut===n.UNSIGNED_INT||re.gpuType===dc;if(re.isInterleavedBufferAttribute){const j=re.data,ge=j.stride,Ie=re.offset;if(j.isInstancedInterleavedBuffer){for(let Ae=0;Ae<G.locationSize;Ae++)p(G.location+Ae,j.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ae=0;Ae<G.locationSize;Ae++)g(G.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let Ae=0;Ae<G.locationSize;Ae++)S(G.location+Ae,pe/G.locationSize,ut,ue,ge*je,(Ie+pe/G.locationSize*Ae)*je,q)}else{if(re.isInstancedBufferAttribute){for(let j=0;j<G.locationSize;j++)p(G.location+j,re.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let j=0;j<G.locationSize;j++)g(G.location+j);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let j=0;j<G.locationSize;j++)S(G.location+j,pe/G.locationSize,ut,ue,pe*je,pe/G.locationSize*j*je,q)}}else if(X!==void 0){const ue=X[Z];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(G.location,ue);break;case 3:n.vertexAttrib3fv(G.location,ue);break;case 4:n.vertexAttrib4fv(G.location,ue);break;default:n.vertexAttrib1fv(G.location,ue)}}}}T()}function w(){D();for(const b in i){const P=i[b];for(const k in P){const B=P[k];for(const Y in B)u(B[Y].object),delete B[Y];delete P[k]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const k in P){const B=P[k];for(const Y in B)u(B[Y].object),delete B[Y];delete P[k]}delete i[b.id]}function A(b){for(const P in i){const k=i[P];if(k[b.id]===void 0)continue;const B=k[b.id];for(const Y in B)u(B[Y].object),delete B[Y];delete k[b.id]}}function D(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function Vv(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v]*h[v];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==En&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ri&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Qn&&!D)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:R}}function $v(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ii,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const T=r?0:i,S=T*4;let x=p.clippingState||null;c.value=x,x=u(m,h,S,f);for(let w=0;w!==S;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,x=f;S!==v;++S,x+=4)o.copy(d[S]).applyMatrix4(T,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Xv(n){let e=new WeakMap;function t(o,a){return a===ll?o.mapping=Ts:a===cl&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ll||a===cl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new dm(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ys=4,Lu=[.125,.215,.35,.446,.526,.582],Fi=20,Da=new Xd,Du=new Ye;let ka=null,Ia=0,Ua=0,Na=!1;const Ui=(1+Math.sqrt(5))/2,ms=1/Ui,ku=[new U(-Ui,ms,0),new U(Ui,ms,0),new U(-ms,0,Ui),new U(ms,0,Ui),new U(0,Ui,-ms),new U(0,Ui,ms),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Yv=new U;class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Yv}=r;ka=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Ia,Ua),this._renderer.xr.enabled=Na,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:vr,format:En,colorSpace:As,depthBuffer:!1},s=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qv(r)),this._blurMaterial=Kv(r,e,t)}return s}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,i,s,r){const c=new _n(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Du),d.toneMapping=xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Et({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new rt(new xr,v);let p=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,p=!0):(v.color.copy(Du),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));const w=this._cubeSize;io(s,x*w,S>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(g,c),d.render(e,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ts||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;io(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Da)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ku[(s-r-1)%ku.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new rt(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),v=r/m,g=isFinite(r)?1+Math.floor(u*v):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const p=[];let T=0;for(let A=0;A<Fi;++A){const D=A/v,M=Math.exp(-D*D/2);p.push(M),A===0?T+=M:A<g&&(T+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=m,h.mipInt.value=S-i;const x=this._sizeLods[s],w=3*x*(s>S-ys?s-S+ys:0),R=4*(this._cubeSize-x);io(t,w,R,3*x,2*x),c.setRenderTarget(t),c.render(d,Da)}}function qv(n){const e=[],t=[],i=[];let s=n;const r=n-ys+1+Lu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-ys?c=Lu[o-n+ys-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,v=3,g=2,p=1,T=new Float32Array(v*m*f),S=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,D=R>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];T.set(M,v*m*R),S.set(h,g*m*R);const b=[R,R,R,R,R,R];x.set(b,p*m*R)}const w=new Vt;w.setAttribute("position",new An(T,v)),w.setAttribute("uv",new An(S,g)),w.setAttribute("faceIndex",new An(x,p)),e.push(w),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Uu(n,e,t){const i=new Yi(n,e,t);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Kv(n,e,t){const i=new Float32Array(Fi),s=new U(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Nu(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ou(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ll||c===cl,u=c===Ts||c===ws;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Iu(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Iu(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Jv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&hr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jv(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,m=d.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let S=0,x=T.length;S<x;S+=3){const w=T[S+0],R=T[S+1],A=T[S+2];h.push(w,R,R,A,A,w)}}else if(m!==void 0){const T=m.array;v=m.version;for(let S=0,x=T.length/3-1;S<x;S+=3){const w=S+0,R=S+1,A=S+2;h.push(w,R,R,A,A,w)}}else return;const g=new(bd(h)?Ad:wd)(h,1);g.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Qv(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function l(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,h*o,m),t.update(f,i,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function d(h,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,v,0,m);let p=0;for(let T=0;T<m;T++)p+=f[T]*v[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function e0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function t0(n,e,t){const i=new WeakMap,s=new wt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let w=a.attributes.position.count*x,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*R*4*d),D=new Ed(A,w,R,d);D.type=Qn,D.needsUpdate=!0;const M=x*4;for(let P=0;P<d;P++){const k=p[P],B=T[P],Y=S[P],W=w*R*4*P;for(let X=0;X<k.count;X++){const Z=X*M;m===!0&&(s.fromBufferAttribute(k,X),A[W+Z+0]=s.x,A[W+Z+1]=s.y,A[W+Z+2]=s.z,A[W+Z+3]=0),v===!0&&(s.fromBufferAttribute(B,X),A[W+Z+4]=s.x,A[W+Z+5]=s.y,A[W+Z+6]=s.z,A[W+Z+7]=0),g===!0&&(s.fromBufferAttribute(Y,X),A[W+Z+8]=s.x,A[W+Z+9]=s.y,A[W+Z+10]=s.z,A[W+Z+11]=Y.itemSize===4?s.w:1)}}h={count:d,texture:D,size:new de(w,R)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function n0(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const qd=new Yt,Fu=new Ud(1,1),Kd=new Ed,Zd=new Kp,Jd=new Pd,Bu=[],zu=[],Hu=new Float32Array(16),Gu=new Float32Array(9),Vu=new Float32Array(4);function Ns(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xo(n,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function a0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(kt(t,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),It(t,i)}}function l0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(kt(t,i))return;Gu.set(i),n.uniformMatrix3fv(this.addr,!1,Gu),It(t,i)}}function c0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(kt(t,i))return;Hu.set(i),n.uniformMatrix4fv(this.addr,!1,Hu),It(t,i)}}function u0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function d0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function p0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function m0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function v0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fu.compareFunction=Md,r=Fu):r=qd,t.setTexture2D(e||r,s)}function y0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zd,s)}function S0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jd,s)}function x0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kd,s)}function M0(n){switch(n){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return u0;case 35667:case 35671:return h0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return x0}}function b0(n,e){n.uniform1fv(this.addr,e)}function E0(n,e){const t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function T0(n,e){const t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function w0(n,e){const t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function A0(n,e){const t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function C0(n,e){const t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R0(n,e){const t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P0(n,e){n.uniform1iv(this.addr,e)}function L0(n,e){n.uniform2iv(this.addr,e)}function D0(n,e){n.uniform3iv(this.addr,e)}function k0(n,e){n.uniform4iv(this.addr,e)}function I0(n,e){n.uniform1uiv(this.addr,e)}function U0(n,e){n.uniform2uiv(this.addr,e)}function N0(n,e){n.uniform3uiv(this.addr,e)}function O0(n,e){n.uniform4uiv(this.addr,e)}function F0(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||qd,r[o])}function B0(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zd,r[o])}function z0(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jd,r[o])}function H0(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Kd,r[o])}function G0(n){switch(n){case 5126:return b0;case 35664:return E0;case 35665:return T0;case 35666:return w0;case 35674:return A0;case 35675:return C0;case 35676:return R0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return k0;case 5125:return I0;case 36294:return U0;case 36295:return N0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}class V0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M0(t.type)}}class W0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G0(t.type)}}class $0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Wu(n,e){n.seq.push(e),n.map[e.id]=e}function X0(n,e,t){const i=n.name,s=i.length;for(Oa.lastIndex=0;;){const r=Oa.exec(i),o=Oa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wu(t,l===void 0?new V0(a,n,e):new W0(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new $0(a),Wu(t,d)),t=d}}}class go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);X0(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function $u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Y0=37297;let q0=0;function K0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Xu=new Be;function Z0(n){Ze._getMatrix(Xu,Ze.workingColorSpace,n);const e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case wo:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+K0(n.getShaderSource(e),a)}else return r}function J0(n,e){const t=Z0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j0(n,e){let t;switch(e){case Mp:t="Linear";break;case bp:t="Reinhard";break;case Ep:t="Cineon";break;case Tp:t="ACESFilmic";break;case Ap:t="AgX";break;case Cp:t="Neutral";break;case wp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new U;function Q0(){Ze.getLuminanceCoefficients(so);const n=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ey(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function ty(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ny(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ks(n){return n!==""}function qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(iy,ry)}const sy=new Map;function ry(n,e){let t=He[e];if(t===void 0){const i=sy.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}const oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(oy,ay)}function ay(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ju(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ly(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function cy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ts:case ws:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ws&&(e="ENVMAP_MODE_REFRACTION"),e}function hy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case Sp:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function dy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fy(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ly(t),l=cy(t),u=uy(t),d=hy(t),h=dy(t),f=ey(t),m=ty(r),v=s.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?He.tonemapping_pars_fragment:"",t.toneMapping!==xi?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,J0("linearToOutputTexel",t.outputColorSpace),Q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=$l(o),o=qu(o,t),o=Ku(o,t),a=$l(a),a=qu(a,t),a=Ku(a,t),o=Zu(o),a=Zu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+g+o,x=T+p+a,w=$u(s,s.VERTEX_SHADER,S),R=$u(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(w)||"",Y=s.getShaderInfoLog(R)||"",W=k.trim(),X=B.trim(),Z=Y.trim();let G=!0,re=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,R);else{const ue=Yu(s,w,"vertex"),pe=Yu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ue+`
`+pe)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||Z==="")&&(re=!1);re&&(P.diagnostics={runnable:G,programLog:W,vertexShader:{log:X,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(w),s.deleteShader(R),D=new go(s,v),M=ny(s,v)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Y0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=R,this}let py=0;class my{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gy(e),t.set(e,i)),i}}class gy{constructor(e){this.id=py++,this.code=e,this.usedTimes=0}}function _y(n,e,t,i,s,r,o){const a=new Sc,c=new my,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,b,P,k,B){const Y=k.fog,W=B.geometry,X=M.isMeshStandardMaterial?k.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),G=Z&&Z.mapping===Wo?Z.image.height:null,re=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=ue!==void 0?ue.length:0;let Oe=0;W.morphAttributes.position!==void 0&&(Oe=1),W.morphAttributes.normal!==void 0&&(Oe=2),W.morphAttributes.color!==void 0&&(Oe=3);let Xe,ut,je,q;if(re){const Qe=kn[re];Xe=Qe.vertexShader,ut=Qe.fragmentShader}else Xe=M.vertexShader,ut=M.fragmentShader,c.update(M),je=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);const j=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,qe=!!M.map,zt=!!M.matcap,L=!!Z,mt=!!M.aoMap,Ne=!!M.lightMap,De=!!M.bumpMap,Se=!!M.normalMap,gt=!!M.displacementMap,xe=!!M.emissiveMap,ze=!!M.metalnessMap,Ut=!!M.roughnessMap,bt=M.anisotropy>0,C=M.clearcoat>0,y=M.dispersion>0,F=M.iridescence>0,$=M.sheen>0,J=M.transmission>0,V=bt&&!!M.anisotropyMap,we=C&&!!M.clearcoatMap,ie=C&&!!M.clearcoatNormalMap,Me=C&&!!M.clearcoatRoughnessMap,Ee=F&&!!M.iridescenceMap,te=F&&!!M.iridescenceThicknessMap,ce=$&&!!M.sheenColorMap,Le=$&&!!M.sheenRoughnessMap,Te=!!M.specularMap,ae=!!M.specularColorMap,Fe=!!M.specularIntensityMap,I=J&&!!M.transmissionMap,ne=J&&!!M.thicknessMap,se=!!M.gradientMap,me=!!M.alphaMap,Q=M.alphaTest>0,K=!!M.alphaHash,ve=!!M.extensions;let Ue=xi;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ht={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:Xe,fragmentShader:ut,defines:M.defines,customVertexShaderID:je,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:As,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:zt,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:G,aoMap:mt,lightMap:Ne,bumpMap:De,normalMap:Se,displacementMap:h&&gt,emissiveMap:xe,normalMapObjectSpace:Se&&M.normalMapType===kp,normalMapTangentSpace:Se&&M.normalMapType===Dp,metalnessMap:ze,roughnessMap:Ut,anisotropy:bt,anisotropyMap:V,clearcoat:C,clearcoatMap:we,clearcoatNormalMap:ie,clearcoatRoughnessMap:Me,dispersion:y,iridescence:F,iridescenceMap:Ee,iridescenceThicknessMap:te,sheen:$,sheenColorMap:ce,sheenRoughnessMap:Le,specularMap:Te,specularColorMap:ae,specularIntensityMap:Fe,transmission:J,transmissionMap:I,thicknessMap:ne,gradientMap:se,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:K,combine:M.combine,mapUv:qe&&v(M.map.channel),aoMapUv:mt&&v(M.aoMap.channel),lightMapUv:Ne&&v(M.lightMap.channel),bumpMapUv:De&&v(M.bumpMap.channel),normalMapUv:Se&&v(M.normalMap.channel),displacementMapUv:gt&&v(M.displacementMap.channel),emissiveMapUv:xe&&v(M.emissiveMap.channel),metalnessMapUv:ze&&v(M.metalnessMap.channel),roughnessMapUv:Ut&&v(M.roughnessMap.channel),anisotropyMapUv:V&&v(M.anisotropyMap.channel),clearcoatMapUv:we&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(M.sheenRoughnessMap.channel),specularMapUv:Te&&v(M.specularMap.channel),specularColorMapUv:ae&&v(M.specularColorMap.channel),specularIntensityMapUv:Fe&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ne&&v(M.thicknessMap.channel),alphaMapUv:me&&v(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Se||bt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(qe||me),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:xe&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kn,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)b.push(P),b.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(b,M),S(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function T(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function S(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const b=m[M.type];let P;if(b){const k=kn[b];P=lm.clone(k.uniforms)}else P=M.uniforms;return P}function w(M,b){let P;for(let k=0,B=u.length;k<B;k++){const Y=u[k];if(Y.cacheKey===b){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new fy(n,b,M,r),u.push(P)),P}function R(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:D}}function vy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,f,m,v,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=v,p.group=g),e++,p}function a(d,h,f,m,v,g){const p=o(d,h,f,m,v,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,h,f,m,v,g){const p=o(d,h,f,m,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||yy),i.length>1&&i.sort(h||ju),s.length>1&&s.sort(h||ju)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Sy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Qu,n.set(i,[o])):s>=r.length?(o=new Qu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function My(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let by=0;function Ey(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ty(n){const e=new xy,t=My(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new xt,o=new xt;function a(l){let u=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,T=0,S=0,x=0,w=0,R=0,A=0;l.sort(Ey);for(let M=0,b=l.length;M<b;M++){const P=l[M],k=P.color,B=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=k.r*B,d+=k.g*B,h+=k.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],B);A++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=P.shadow.matrix,T++}i.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(B),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[v]=X;const Z=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,Z.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=Z.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=W,x++}v++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(k).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=X,g++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=P.shadow.matrix,S++}i.point[m]=X,m++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const D=i.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==S||D.numSpotShadows!==x||D.numSpotMaps!==w||D.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,D.directionalLength=f,D.pointLength=m,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=S,D.numSpotShadows=x,D.numSpotMaps=w,D.numLightProbes=A,i.version=by++)}function c(l,u){let d=0,h=0,f=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const S=l[p];if(S.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(S.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function eh(n){const e=new Ty(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function wy(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new eh(n),e.set(s,[a])):r>=o.length?(a=new eh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ry(n,e,t){let i=new kd;const s=new de,r=new de,o=new wt,a=new eg({depthPacking:Lp}),c=new tg,l={},u=t.maxTextureSize,d={[Mi]:jt,[jt]:Mi,[Kn]:Kn},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Ay,fragmentShader:Cy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Vt;m.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new rt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let p=this.type;this.render=function(R,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const M=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Si),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==qn&&this.type===qn,Y=p===qn&&this.type!==qn;for(let W=0,X=R.length;W<X;W++){const Z=R[W],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const re=G.getFrameExtents();if(s.multiply(re),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,G.mapSize.y=r.y)),G.map===null||B===!0||Y===!0){const pe=this.type!==qn?{minFilter:wn,magFilter:wn}:{};G.map!==null&&G.map.dispose(),G.map=new Yi(s.x,s.y,pe),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ue=G.getViewportCount();for(let pe=0;pe<ue;pe++){const Oe=G.getViewport(pe);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),k.viewport(o),G.updateMatrices(Z,pe),i=G.getFrustum(),x(A,D,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===qn&&T(G,D),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,b,P)};function T(R,A){const D=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yi(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,D,h,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,D,f,v,null)}function S(R,A,D,M){let b=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=b.uuid,B=A.uuid;let Y=l[k];Y===void 0&&(Y={},l[k]=Y);let W=Y[B];W===void 0&&(W=b.clone(),Y[B]=W,A.addEventListener("dispose",w)),b=W}if(b.visible=A.visible,b.wireframe=A.wireframe,M===qn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=n.properties.get(b);k.light=D}return b}function x(R,A,D,M,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=e.update(R),Y=R.material;if(Array.isArray(Y)){const W=B.groups;for(let X=0,Z=W.length;X<Z;X++){const G=W[X],re=Y[G.materialIndex];if(re&&re.visible){const ue=S(R,re,M,b);R.onBeforeShadow(n,R,A,D,B,ue,G),n.renderBufferDirect(D,null,B,ue,R,G),R.onAfterShadow(n,R,A,D,B,ue,G)}}}else if(Y.visible){const W=S(R,Y,M,b);R.onBeforeShadow(n,R,A,D,B,W,null),n.renderBufferDirect(D,null,B,W,R,null),R.onAfterShadow(n,R,A,D,B,W,null)}}const k=R.children;for(let B=0,Y=k.length;B<Y;B++)x(k[B],A,D,M,b)}function w(R){R.target.removeEventListener("dispose",w);for(const D in l){const M=l[D],b=R.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const Py={[tl]:nl,[il]:ol,[sl]:al,[Es]:rl,[nl]:tl,[ol]:il,[al]:sl,[rl]:Es};function Ly(n,e){function t(){let I=!1;const ne=new wt;let se=null;const me=new wt(0,0,0,0);return{setMask:function(Q){se!==Q&&!I&&(n.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){I=Q},setClear:function(Q,K,ve,Ue,ht){ht===!0&&(Q*=Ue,K*=Ue,ve*=Ue),ne.set(Q,K,ve,Ue),me.equals(ne)===!1&&(n.clearColor(Q,K,ve,Ue),me.copy(ne))},reset:function(){I=!1,se=null,me.set(-1,0,0,0)}}}function i(){let I=!1,ne=!1,se=null,me=null,Q=null;return{setReversed:function(K){if(ne!==K){const ve=e.get("EXT_clip_control");K?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ne=K;const Ue=Q;Q=null,this.setClear(Ue)}},getReversed:function(){return ne},setTest:function(K){K?j(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(K){se!==K&&!I&&(n.depthMask(K),se=K)},setFunc:function(K){if(ne&&(K=Py[K]),me!==K){switch(K){case tl:n.depthFunc(n.NEVER);break;case nl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case Es:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=K}},setLocked:function(K){I=K},setClear:function(K){Q!==K&&(ne&&(K=1-K),n.clearDepth(K),Q=K)},reset:function(){I=!1,se=null,me=null,Q=null,ne=!1}}}function s(){let I=!1,ne=null,se=null,me=null,Q=null,K=null,ve=null,Ue=null,ht=null;return{setTest:function(Qe){I||(Qe?j(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(Qe){ne!==Qe&&!I&&(n.stencilMask(Qe),ne=Qe)},setFunc:function(Qe,Gn,Rn){(se!==Qe||me!==Gn||Q!==Rn)&&(n.stencilFunc(Qe,Gn,Rn),se=Qe,me=Gn,Q=Rn)},setOp:function(Qe,Gn,Rn){(K!==Qe||ve!==Gn||Ue!==Rn)&&(n.stencilOp(Qe,Gn,Rn),K=Qe,ve=Gn,Ue=Rn)},setLocked:function(Qe){I=Qe},setClear:function(Qe){ht!==Qe&&(n.clearStencil(Qe),ht=Qe)},reset:function(){I=!1,ne=null,se=null,me=null,Q=null,K=null,ve=null,Ue=null,ht=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],m=null,v=!1,g=null,p=null,T=null,S=null,x=null,w=null,R=null,A=new Ye(0,0,0),D=0,M=!1,b=null,P=null,k=null,B=null,Y=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let re=null,ue={};const pe=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Xe=new wt().fromArray(pe),ut=new wt().fromArray(Oe);function je(I,ne,se,me){const Q=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<se;ve++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(ne+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return K}const q={};q[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(Es),De(!1),Se(Yc),j(n.CULL_FACE),mt(Si);function j(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ge(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ie(I,ne){return d[I]!==ne?(n.bindFramebuffer(I,ne),d[I]=ne,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ae(I,ne){let se=f,me=!1;if(I){se=h.get(ne),se===void 0&&(se=[],h.set(ne,se));const Q=I.textures;if(se.length!==Q.length||se[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ve=Q.length;K<ve;K++)se[K]=n.COLOR_ATTACHMENT0+K;se.length=Q.length,me=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,me=!0);me&&n.drawBuffers(se)}function qe(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const zt={[Oi]:n.FUNC_ADD,[ip]:n.FUNC_SUBTRACT,[sp]:n.FUNC_REVERSE_SUBTRACT};zt[rp]=n.MIN,zt[op]=n.MAX;const L={[ap]:n.ZERO,[lp]:n.ONE,[cp]:n.SRC_COLOR,[Qa]:n.SRC_ALPHA,[mp]:n.SRC_ALPHA_SATURATE,[fp]:n.DST_COLOR,[hp]:n.DST_ALPHA,[up]:n.ONE_MINUS_SRC_COLOR,[el]:n.ONE_MINUS_SRC_ALPHA,[pp]:n.ONE_MINUS_DST_COLOR,[dp]:n.ONE_MINUS_DST_ALPHA,[gp]:n.CONSTANT_COLOR,[_p]:n.ONE_MINUS_CONSTANT_COLOR,[vp]:n.CONSTANT_ALPHA,[yp]:n.ONE_MINUS_CONSTANT_ALPHA};function mt(I,ne,se,me,Q,K,ve,Ue,ht,Qe){if(I===Si){v===!0&&(ge(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),I!==np){if(I!==g||Qe!==M){if((p!==Oi||x!==Oi)&&(n.blendEquation(n.FUNC_ADD),p=Oi,x=Oi),Qe)switch(I){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,S=null,w=null,R=null,A.set(0,0,0),D=0,g=I,M=Qe}return}Q=Q||ne,K=K||se,ve=ve||me,(ne!==p||Q!==x)&&(n.blendEquationSeparate(zt[ne],zt[Q]),p=ne,x=Q),(se!==T||me!==S||K!==w||ve!==R)&&(n.blendFuncSeparate(L[se],L[me],L[K],L[ve]),T=se,S=me,w=K,R=ve),(Ue.equals(A)===!1||ht!==D)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ht),A.copy(Ue),D=ht),g=I,M=!1}function Ne(I,ne){I.side===Kn?ge(n.CULL_FACE):j(n.CULL_FACE);let se=I.side===jt;ne&&(se=!se),De(se),I.blending===xs&&I.transparent===!1?mt(Si):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){b!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),b=I)}function Se(I){I!==Qf?(j(n.CULL_FACE),I!==P&&(I===Yc?n.cullFace(n.BACK):I===ep?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),P=I}function gt(I){I!==k&&(X&&n.lineWidth(I),k=I)}function xe(I,ne,se){I?(j(n.POLYGON_OFFSET_FILL),(B!==ne||Y!==se)&&(n.polygonOffset(ne,se),B=ne,Y=se)):ge(n.POLYGON_OFFSET_FILL)}function ze(I){I?j(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Ut(I){I===void 0&&(I=n.TEXTURE0+W-1),re!==I&&(n.activeTexture(I),re=I)}function bt(I,ne,se){se===void 0&&(re===null?se=n.TEXTURE0+W-1:se=re);let me=ue[se];me===void 0&&(me={type:void 0,texture:void 0},ue[se]=me),(me.type!==I||me.texture!==ne)&&(re!==se&&(n.activeTexture(se),re=se),n.bindTexture(I,ne||q[I]),me.type=I,me.texture=ne)}function C(){const I=ue[re];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){Xe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Xe.copy(I))}function Le(I){ut.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ut.copy(I))}function Te(I,ne){let se=l.get(ne);se===void 0&&(se=new WeakMap,l.set(ne,se));let me=se.get(I);me===void 0&&(me=n.getUniformBlockIndex(ne,I.name),se.set(I,me))}function ae(I,ne){const me=l.get(ne).get(I);c.get(ne)!==me&&(n.uniformBlockBinding(ne,me,I.__bindingPointIndex),c.set(ne,me))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},re=null,ue={},d={},h=new WeakMap,f=[],m=null,v=!1,g=null,p=null,T=null,S=null,x=null,w=null,R=null,A=new Ye(0,0,0),D=0,M=!1,b=null,P=null,k=null,B=null,Y=null,Xe.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ge,bindFramebuffer:Ie,drawBuffers:Ae,useProgram:qe,setBlending:mt,setMaterial:Ne,setFlipSided:De,setCullFace:Se,setLineWidth:gt,setPolygonOffset:xe,setScissorTest:ze,activeTexture:Ut,bindTexture:bt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Ee,texImage3D:te,updateUBOMapping:Te,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:Me,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:V,compressedTexSubImage3D:we,scissor:ce,viewport:Le,reset:Fe}}function Dy(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,y){return f?new OffscreenCanvas(C,y):Co("canvas")}function v(C,y,F){let $=1;const J=bt(C);if((J.width>F||J.height>F)&&($=F/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const V=Math.floor($*J.width),we=Math.floor($*J.height);d===void 0&&(d=m(V,we));const ie=y?m(V,we):d;return ie.width=V,ie.height=we,ie.getContext("2d").drawImage(C,0,0,V,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+we+")."),ie}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,y,F,$,J=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let V=y;if(y===n.RED&&(F===n.FLOAT&&(V=n.R32F),F===n.HALF_FLOAT&&(V=n.R16F),F===n.UNSIGNED_BYTE&&(V=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.R8UI),F===n.UNSIGNED_SHORT&&(V=n.R16UI),F===n.UNSIGNED_INT&&(V=n.R32UI),F===n.BYTE&&(V=n.R8I),F===n.SHORT&&(V=n.R16I),F===n.INT&&(V=n.R32I)),y===n.RG&&(F===n.FLOAT&&(V=n.RG32F),F===n.HALF_FLOAT&&(V=n.RG16F),F===n.UNSIGNED_BYTE&&(V=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RG8UI),F===n.UNSIGNED_SHORT&&(V=n.RG16UI),F===n.UNSIGNED_INT&&(V=n.RG32UI),F===n.BYTE&&(V=n.RG8I),F===n.SHORT&&(V=n.RG16I),F===n.INT&&(V=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGB8UI),F===n.UNSIGNED_SHORT&&(V=n.RGB16UI),F===n.UNSIGNED_INT&&(V=n.RGB32UI),F===n.BYTE&&(V=n.RGB8I),F===n.SHORT&&(V=n.RGB16I),F===n.INT&&(V=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),F===n.UNSIGNED_INT&&(V=n.RGBA32UI),F===n.BYTE&&(V=n.RGBA8I),F===n.SHORT&&(V=n.RGBA16I),F===n.INT&&(V=n.RGBA32I)),y===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),y===n.RGBA){const we=J?wo:Ze.getTransfer($);F===n.FLOAT&&(V=n.RGBA32F),F===n.HALF_FLOAT&&(V=n.RGBA16F),F===n.UNSIGNED_BYTE&&(V=we===ot?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function x(C,y){let F;return C?y===null||y===Xi||y===lr?F=n.DEPTH24_STENCIL8:y===Qn?F=n.DEPTH32F_STENCIL8:y===ar&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xi||y===lr?F=n.DEPTH_COMPONENT24:y===Qn?F=n.DEPTH_COMPONENT32F:y===ar&&(F=n.DEPTH_COMPONENT16),F}function w(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==bn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),D(y),y.isVideoTexture&&u.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),b(y)}function D(C){const y=i.get(C);if(y.__webglInit===void 0)return;const F=C.source,$=h.get(F);if($){const J=$[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys($).length===0&&h.delete(F)}i.remove(C)}function M(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const F=C.source,$=h.get(F);delete $[y.__cacheKey],o.memory.textures--}function b(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let J=0;J<y.__webglFramebuffer[$].length;J++)n.deleteFramebuffer(y.__webglFramebuffer[$][J]);else n.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)n.deleteFramebuffer(y.__webglFramebuffer[$]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=C.textures;for(let $=0,J=F.length;$<J;$++){const V=i.get(F[$]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(F[$])}i.remove(C)}let P=0;function k(){P=0}function B(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function Y(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function W(C,y){const F=i.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,C,y);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function X(C,y){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){q(F,C,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function Z(C,y){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){q(F,C,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function G(C,y){const F=i.get(C);if(C.version>0&&F.__version!==C.version){j(F,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const re={[ul]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},ue={[wn]:n.NEAREST,[Rp]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},pe={[Ip]:n.NEVER,[zp]:n.ALWAYS,[Up]:n.LESS,[Md]:n.LEQUAL,[Np]:n.EQUAL,[Bp]:n.GEQUAL,[Op]:n.GREATER,[Fp]:n.NOTEQUAL};function Oe(C,y){if(y.type===Qn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===bn||y.magFilter===na||y.magFilter===Ar||y.magFilter===Hi||y.minFilter===bn||y.minFilter===na||y.minFilter===Ar||y.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,re[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,re[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,re[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ue[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wn||y.minFilter!==Ar&&y.minFilter!==Hi||y.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(C,y){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const $=y.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const V=Y(y);if(V!==C.__cacheKey){J[V]===void 0&&(J[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[V].usedTimes++;const we=J[C.__cacheKey];we!==void 0&&(J[C.__cacheKey].usedTimes--,we.usedTimes===0&&M(y)),C.__cacheKey=V,C.__webglTexture=J[V].texture}return F}function ut(C,y,F){return Math.floor(Math.floor(C/F)/y)}function je(C,y,F,$){const V=C.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,F,$,y.data);else{V.sort((te,ce)=>te.start-ce.start);let we=0;for(let te=1;te<V.length;te++){const ce=V[we],Le=V[te],Te=ce.start+ce.count,ae=ut(Le.start,y.width,4),Fe=ut(ce.start,y.width,4);Le.start<=Te+1&&ae===Fe&&ut(Le.start+Le.count-1,y.width,4)===ae?ce.count=Math.max(ce.count,Le.start+Le.count-ce.start):(++we,V[we]=Le)}V.length=we+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),Me=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let te=0,ce=V.length;te<ce;te++){const Le=V[te],Te=Math.floor(Le.start/4),ae=Math.ceil(Le.count/4),Fe=Te%y.width,I=Math.floor(Te/y.width),ne=ae,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Fe,I,ne,se,F,$,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function q(C,y,F){let $=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=n.TEXTURE_3D);const J=Xe(C,y),V=y.source;t.bindTexture($,C.__webglTexture,n.TEXTURE0+F);const we=i.get(V);if(V.version!==we.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const ie=Ze.getPrimaries(Ze.workingColorSpace),Me=y.colorSpace===_i?null:Ze.getPrimaries(y.colorSpace),Ee=y.colorSpace===_i||ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let te=v(y.image,!1,s.maxTextureSize);te=Ut(y,te);const ce=r.convert(y.format,y.colorSpace),Le=r.convert(y.type);let Te=S(y.internalFormat,ce,Le,y.colorSpace,y.isVideoTexture);Oe($,y);let ae;const Fe=y.mipmaps,I=y.isVideoTexture!==!0,ne=we.__version===void 0||J===!0,se=V.dataReady,me=w(y,te);if(y.isDepthTexture)Te=x(y.format===ur,y.type),ne&&(I?t.texStorage2D(n.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,ce,Le,null));else if(y.isDataTexture)if(Fe.length>0){I&&ne&&t.texStorage2D(n.TEXTURE_2D,me,Te,Fe[0].width,Fe[0].height);for(let Q=0,K=Fe.length;Q<K;Q++)ae=Fe[Q],I?se&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ae.width,ae.height,ce,Le,ae.data):t.texImage2D(n.TEXTURE_2D,Q,Te,ae.width,ae.height,0,ce,Le,ae.data);y.generateMipmaps=!1}else I?(ne&&t.texStorage2D(n.TEXTURE_2D,me,Te,te.width,te.height),se&&je(y,te,ce,Le)):t.texImage2D(n.TEXTURE_2D,0,Te,te.width,te.height,0,ce,Le,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Te,Fe[0].width,Fe[0].height,te.depth);for(let Q=0,K=Fe.length;Q<K;Q++)if(ae=Fe[Q],y.format!==En)if(ce!==null)if(I){if(se)if(y.layerUpdates.size>0){const ve=Pu(ae.width,ae.height,y.format,y.type);for(const Ue of y.layerUpdates){const ht=ae.data.subarray(Ue*ve/ae.data.BYTES_PER_ELEMENT,(Ue+1)*ve/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ue,ae.width,ae.height,1,ce,ht)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,te.depth,ce,ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Te,ae.width,ae.height,te.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,te.depth,ce,Le,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Te,ae.width,ae.height,te.depth,0,ce,Le,ae.data)}else{I&&ne&&t.texStorage2D(n.TEXTURE_2D,me,Te,Fe[0].width,Fe[0].height);for(let Q=0,K=Fe.length;Q<K;Q++)ae=Fe[Q],y.format!==En?ce!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Te,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ae.width,ae.height,ce,Le,ae.data):t.texImage2D(n.TEXTURE_2D,Q,Te,ae.width,ae.height,0,ce,Le,ae.data)}else if(y.isDataArrayTexture)if(I){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Te,te.width,te.height,te.depth),se)if(y.layerUpdates.size>0){const Q=Pu(te.width,te.height,y.format,y.type);for(const K of y.layerUpdates){const ve=te.data.subarray(K*Q/te.data.BYTES_PER_ELEMENT,(K+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,ce,Le,ve)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Le,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,ce,Le,te.data);else if(y.isData3DTexture)I?(ne&&t.texStorage3D(n.TEXTURE_3D,me,Te,te.width,te.height,te.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Le,te.data)):t.texImage3D(n.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,ce,Le,te.data);else if(y.isFramebufferTexture){if(ne)if(I)t.texStorage2D(n.TEXTURE_2D,me,Te,te.width,te.height);else{let Q=te.width,K=te.height;for(let ve=0;ve<me;ve++)t.texImage2D(n.TEXTURE_2D,ve,Te,Q,K,0,ce,Le,null),Q>>=1,K>>=1}}else if(Fe.length>0){if(I&&ne){const Q=bt(Fe[0]);t.texStorage2D(n.TEXTURE_2D,me,Te,Q.width,Q.height)}for(let Q=0,K=Fe.length;Q<K;Q++)ae=Fe[Q],I?se&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce,Le,ae):t.texImage2D(n.TEXTURE_2D,Q,Te,ce,Le,ae);y.generateMipmaps=!1}else if(I){if(ne){const Q=bt(te);t.texStorage2D(n.TEXTURE_2D,me,Te,Q.width,Q.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Le,te)}else t.texImage2D(n.TEXTURE_2D,0,Te,ce,Le,te);g(y)&&p($),we.__version=V.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function j(C,y,F){if(y.image.length!==6)return;const $=Xe(C,y),J=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+F);const V=i.get(J);if(J.version!==V.__version||$===!0){t.activeTexture(n.TEXTURE0+F);const we=Ze.getPrimaries(Ze.workingColorSpace),ie=y.colorSpace===_i?null:Ze.getPrimaries(y.colorSpace),Me=y.colorSpace===_i||we===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!Ee&&!te?ce[K]=v(y.image[K],!0,s.maxCubemapSize):ce[K]=te?y.image[K].image:y.image[K],ce[K]=Ut(y,ce[K]);const Le=ce[0],Te=r.convert(y.format,y.colorSpace),ae=r.convert(y.type),Fe=S(y.internalFormat,Te,ae,y.colorSpace),I=y.isVideoTexture!==!0,ne=V.__version===void 0||$===!0,se=J.dataReady;let me=w(y,Le);Oe(n.TEXTURE_CUBE_MAP,y);let Q;if(Ee){I&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Fe,Le.width,Le.height);for(let K=0;K<6;K++){Q=ce[K].mipmaps;for(let ve=0;ve<Q.length;ve++){const Ue=Q[ve];y.format!==En?Te!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Ue.width,Ue.height,Te,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Fe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Ue.width,Ue.height,Te,ae,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Fe,Ue.width,Ue.height,0,Te,ae,Ue.data)}}}else{if(Q=y.mipmaps,I&&ne){Q.length>0&&me++;const K=bt(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(te){I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Te,ae,ce[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ce[K].width,ce[K].height,0,Te,ae,ce[K].data);for(let ve=0;ve<Q.length;ve++){const ht=Q[ve].image[K].image;I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,ht.width,ht.height,Te,ae,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Fe,ht.width,ht.height,0,Te,ae,ht.data)}}else{I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Te,ae,ce[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Te,ae,ce[K]);for(let ve=0;ve<Q.length;ve++){const Ue=Q[ve];I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,Te,ae,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Fe,Te,ae,Ue.image[K])}}}g(y)&&p(n.TEXTURE_CUBE_MAP),V.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ge(C,y,F,$,J,V){const we=r.convert(F.format,F.colorSpace),ie=r.convert(F.type),Me=S(F.internalFormat,we,ie,F.colorSpace),Ee=i.get(y),te=i.get(F);if(te.__renderTarget=y,!Ee.__hasExternalTextures){const ce=Math.max(1,y.width>>V),Le=Math.max(1,y.height>>V);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,V,Me,ce,Le,y.depth,0,we,ie,null):t.texImage2D(J,V,Me,ce,Le,0,we,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),xe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,te.__webglTexture,0,gt(y)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,J,te.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(C,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const $=y.depthTexture,J=$&&$.isDepthTexture?$.type:null,V=x(y.stencilBuffer,J),we=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=gt(y);xe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,V,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,V,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,V,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,C)}else{const $=y.textures;for(let J=0;J<$.length;J++){const V=$[J],we=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),Me=S(V.internalFormat,we,ie,V.colorSpace),Ee=gt(y);F&&xe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Me,y.width,y.height):xe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,Me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Me,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const J=$.__webglTexture,V=gt(y);if(y.depthTexture.format===cr)xe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(y.depthTexture.format===ur)xe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function qe(C){const y=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=$}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?Ae(y.__webglFramebuffer[0],C):Ae(y.__webglFramebuffer,C)}else if(F){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=n.createRenderbuffer(),Ie(y.__webglDepthbuffer[$],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,V)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ie(y.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(C,y,F){const $=i.get(C);y!==void 0&&ge($.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&qe(C)}function L(C){const y=C.texture,F=i.get(C),$=i.get(y);C.addEventListener("dispose",A);const J=C.textures,V=C.isWebGLCubeRenderTarget===!0,we=J.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,o.memory.textures++),V){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let Me=0;Me<y.mipmaps.length;Me++)F.__webglFramebuffer[ie][Me]=n.createFramebuffer()}else F.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)F.__webglFramebuffer[ie]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(we)for(let ie=0,Me=J.length;ie<Me;ie++){const Ee=i.get(J[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&xe(C)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<J.length;ie++){const Me=J[ie];F.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const Ee=r.convert(Me.format,Me.colorSpace),te=r.convert(Me.type),ce=S(Me.internalFormat,Ee,te,Me.colorSpace,C.isXRRenderTarget===!0),Le=gt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ce,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)ge(F.__webglFramebuffer[ie][Me],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me);else ge(F.__webglFramebuffer[ie],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ie=0,Me=J.length;ie<Me;ie++){const Ee=J[ie],te=i.get(Ee);let ce=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),Oe(ce,Ee),ge(F.__webglFramebuffer,C,Ee,n.COLOR_ATTACHMENT0+ie,ce,0),g(Ee)&&p(ce)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),Oe(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let Me=0;Me<y.mipmaps.length;Me++)ge(F.__webglFramebuffer[Me],C,y,n.COLOR_ATTACHMENT0,ie,Me);else ge(F.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,ie,0);g(y)&&p(ie),t.unbindTexture()}C.depthBuffer&&qe(C)}function mt(C){const y=C.textures;for(let F=0,$=y.length;F<$;F++){const J=y[F];if(g(J)){const V=T(C),we=i.get(J).__webglTexture;t.bindTexture(V,we),p(V),t.unbindTexture()}}}const Ne=[],De=[];function Se(C){if(C.samples>0){if(xe(C)===!1){const y=C.textures,F=C.width,$=C.height;let J=n.COLOR_BUFFER_BIT;const V=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(C),ie=y.length>1;if(ie)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Me=C.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);const te=i.get(y[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,F,$,0,0,F,$,J,n.NEAREST),c===!0&&(Ne.length=0,De.length=0,Ne.push(n.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ne.push(V),De.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);const te=i.get(y[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function gt(C){return Math.min(s.maxSamples,C.samples)}function xe(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ze(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Ut(C,y){const F=C.colorSpace,$=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==As&&F!==_i&&(Ze.getTransfer(F)===ot?($!==En||J!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=zt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function ky(n,e){function t(i,s=_i){let r;const o=Ze.getTransfer(s);if(i===ri)return n.UNSIGNED_BYTE;if(i===fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pd)return n.BYTE;if(i===md)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===dc)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===vr)return n.HALF_FLOAT;if(i===vd)return n.ALPHA;if(i===yd)return n.RGB;if(i===En)return n.RGBA;if(i===cr)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===Sd)return n.RED;if(i===mc)return n.RED_INTEGER;if(i===xd)return n.RG;if(i===gc)return n.RG_INTEGER;if(i===_c)return n.RGBA_INTEGER;if(i===uo||i===ho||i===fo||i===po)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===fl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===_l||i===vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===_l)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yl||i===Sl||i===xl||i===Ml||i===bl||i===El||i===Tl||i===wl||i===Al||i===Cl||i===Rl||i===Pl||i===Ll||i===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ml)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===Il||i===Ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===kl)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nl||i===Ol||i===Fl||i===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ny{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bi({vertexShader:Iy,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Oy extends Is{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Ny,p={},T=t.getContextAttributes();let S=null,x=null;const w=[],R=[],A=new de;let D=null;const M=new _n;M.viewport=new wt;const b=new _n;b.viewport=new wt;const P=[M,b],k=new ig;let B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=w[q];return j===void 0&&(j=new Ea,w[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=w[q];return j===void 0&&(j=new Ea,w[q]=j),j.getGripSpace()},this.getHand=function(q){let j=w[q];return j===void 0&&(j=new Ea,w[q]=j),j.getHandSpace()};function W(q){const j=R.indexOf(q.inputSource);if(j===-1)return;const ge=w[j];ge!==void 0&&(ge.update(q.inputSource,q.frame,l||o),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<w.length;q++){const j=R[q];j!==null&&(R[q]=null,w[q].disconnect(j))}B=null,Y=null,g.reset();for(const q in p)delete p[q];e.setRenderTarget(S),f=null,h=null,d=null,s=null,x=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ie=null,Ae=null;T.depth&&(Ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=T.stencil?ur:cr,Ie=T.stencil?lr:Xi);const qe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(qe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Yi(h.textureWidth,h.textureHeight,{format:En,type:ri,depthTexture:new Ud(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Yi(f.framebufferWidth,f.framebufferHeight,{format:En,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(q){for(let j=0;j<q.removed.length;j++){const ge=q.removed[j],Ie=R.indexOf(ge);Ie>=0&&(R[Ie]=null,w[Ie].disconnect(ge))}for(let j=0;j<q.added.length;j++){const ge=q.added[j];let Ie=R.indexOf(ge);if(Ie===-1){for(let qe=0;qe<w.length;qe++)if(qe>=R.length){R.push(ge),Ie=qe;break}else if(R[qe]===null){R[qe]=ge,Ie=qe;break}if(Ie===-1)break}const Ae=w[Ie];Ae&&Ae.connect(ge)}}const G=new U,re=new U;function ue(q,j,ge){G.setFromMatrixPosition(j.matrixWorld),re.setFromMatrixPosition(ge.matrixWorld);const Ie=G.distanceTo(re),Ae=j.projectionMatrix.elements,qe=ge.projectionMatrix.elements,zt=Ae[14]/(Ae[10]-1),L=Ae[14]/(Ae[10]+1),mt=(Ae[9]+1)/Ae[5],Ne=(Ae[9]-1)/Ae[5],De=(Ae[8]-1)/Ae[0],Se=(qe[8]+1)/qe[0],gt=zt*De,xe=zt*Se,ze=Ie/(-De+Se),Ut=ze*-De;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ut),q.translateZ(ze),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const bt=zt+ze,C=L+ze,y=gt-Ut,F=xe+(Ie-Ut),$=mt*L/C*bt,J=Ne*L/C*bt;q.projectionMatrix.makePerspective(y,F,$,J,bt,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pe(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ge=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),k.near=b.near=M.near=j,k.far=b.far=M.far=ge,(B!==k.near||Y!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),B=k.near,Y=k.far),k.layers.mask=q.layers.mask|6,M.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const Ie=q.parent,Ae=k.cameras;pe(k,Ie);for(let qe=0;qe<Ae.length;qe++)pe(Ae[qe],Ie);Ae.length===2?ue(k,M,b):k.projectionMatrix.copy(M.projectionMatrix),Oe(q,k,Ie)};function Oe(q,j,ge){ge===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(q){return p[q]};let Xe=null;function ut(q,j){if(u=j.getViewerPose(l||o),m=j,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ie=!1;ge.length!==k.cameras.length&&(k.cameras.length=0,Ie=!0);for(let L=0;L<ge.length;L++){const mt=ge[L];let Ne=null;if(f!==null)Ne=f.getViewport(mt);else{const Se=d.getViewSubImage(h,mt);Ne=Se.viewport,L===0&&(e.setRenderTargetTextures(x,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(x))}let De=P[L];De===void 0&&(De=new _n,De.layers.enable(L),De.viewport=new wt,P[L]=De),De.matrix.fromArray(mt.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(mt.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),L===0&&(k.matrix.copy(De.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ie===!0&&k.cameras.push(De)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const L=d.getDepthInformation(ge[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let L=0;L<ge.length;L++){const mt=ge[L].camera;if(mt){let Ne=p[mt];Ne||(Ne=new Nd,p[mt]=Ne);const De=d.getCameraImage(mt);Ne.sourceTexture=De}}}}for(let ge=0;ge<w.length;ge++){const Ie=R[ge],Ae=w[ge];Ie!==null&&Ae!==void 0&&Ae.update(Ie,j,l||o)}Xe&&Xe(q,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}const je=new Yd;je.setAnimationLoop(ut),this.setAnimationLoop=function(q){Xe=q},this.dispose=function(){}}}const Li=new oi,Fy=new xt;function By(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Cd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,T,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),S=T.envMap,x=T.envMapRotation;S&&(g.envMap.value=S,Li.copy(x),Li.x*=-1,Li.y*=-1,Li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),g.envMapRotation.value.setFromMatrix4(Fy.makeRotationFromEuler(Li)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zy(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const x=S.program;i.uniformBlockBinding(T,x)}function l(T,S){let x=s[T.id];x===void 0&&(m(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",g));const w=S.program;i.updateUBOMapping(T,w);const R=e.render.frame;r[T.id]!==R&&(h(T),r[T.id]=R)}function u(T){const S=d();T.__bindingPointIndex=S;const x=n.createBuffer(),w=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=s[T.id],x=T.uniforms,w=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,A=x.length;R<A;R++){const D=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,b=D.length;M<b;M++){const P=D[M];if(f(P,R,M,w)===!0){const k=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let W=0;W<B.length;W++){const X=B[W],Z=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,k+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,S,x,w){const R=T.value,A=S+"_"+x;if(w[A]===void 0)return typeof R=="number"||typeof R=="boolean"?w[A]=R:w[A]=R.clone(),!0;{const D=w[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return w[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function m(T){const S=T.uniforms;let x=0;const w=16;for(let A=0,D=S.length;A<D;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,P=M.length;b<P;b++){const k=M[b],B=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,W=B.length;Y<W;Y++){const X=B[Y],Z=v(X),G=x%w,re=G%Z.boundary,ue=G+re;x+=re,ue!==0&&w-ue<Z.storage&&(x+=w-ue),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Z.storage}}}const R=x%w;return R>0&&(x+=w-R),T.__size=x,T.__cache={},this}function v(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function g(T){const S=T.target;S.removeEventListener("dispose",g);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Hy{constructor(e={}){const{canvas:t=Gp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=Zt;let R=0,A=0,D=null,M=-1,b=null;const P=new wt,k=new wt;let B=null;const Y=new Ye(0);let W=0,X=t.width,Z=t.height,G=1,re=null,ue=null;const pe=new wt(0,0,X,Z),Oe=new wt(0,0,X,Z);let Xe=!1;const ut=new kd;let je=!1,q=!1;const j=new xt,ge=new U,Ie=new wt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function zt(){return D===null?G:1}let L=i;function mt(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Q,!1),L===null){const N="webgl2";if(L=mt(N,E),L===null)throw mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ne,De,Se,gt,xe,ze,Ut,bt,C,y,F,$,J,V,we,ie,Me,Ee,te,ce,Le,Te,ae,Fe;function I(){Ne=new Jv(L),Ne.init(),Te=new ky(L,Ne),De=new Wv(L,Ne,e,Te),Se=new Ly(L,Ne),De.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),gt=new e0(L),xe=new vy,ze=new Dy(L,Ne,Se,xe,De,Te,gt),Ut=new Xv(x),bt=new Zv(x),C=new og(L),ae=new Gv(L,C),y=new jv(L,C,gt,ae),F=new n0(L,y,C,gt),te=new t0(L,De,ze),ie=new $v(xe),$=new _y(x,Ut,bt,Ne,De,ae,ie),J=new By(x,xe),V=new Sy,we=new wy(Ne),Ee=new Hv(x,Ut,bt,Se,F,f,c),Me=new Ry(x,F,De),Fe=new zy(L,gt,De,Se),ce=new Vv(L,Ne,gt),Le=new Qv(L,Ne,gt),gt.programs=$.programs,x.capabilities=De,x.extensions=Ne,x.properties=xe,x.renderLists=V,x.shadowMap=Me,x.state=Se,x.info=gt}I();const ne=new Oy(x,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(X,Z,!1))},this.getSize=function(E){return E.set(X,Z)},this.setSize=function(E,N,z=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Z=N,t.width=Math.floor(E*G),t.height=Math.floor(N*G),z===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(E,N,z){X=E,Z=N,G=z,t.width=Math.floor(E*z),t.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(pe)},this.setViewport=function(E,N,z,H){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,N,z,H),Se.viewport(P.copy(pe).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,N,z,H){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,N,z,H),Se.scissor(k.copy(Oe).multiplyScalar(G).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(E){Se.setScissorTest(Xe=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,z=!0){let H=0;if(E){let O=!1;if(D!==null){const ee=D.texture.format;O=ee===_c||ee===gc||ee===mc}if(O){const ee=D.texture.type,le=ee===ri||ee===Xi||ee===ar||ee===lr||ee===fc||ee===pc,_e=Ee.getClearColor(),fe=Ee.getClearAlpha(),Pe=_e.r,ke=_e.g,Ce=_e.b;le?(m[0]=Pe,m[1]=ke,m[2]=Ce,m[3]=fe,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Pe,v[1]=ke,v[2]=Ce,v[3]=fe,L.clearBufferiv(L.COLOR,0,v))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ee.dispose(),V.dispose(),we.dispose(),xe.dispose(),Ut.dispose(),bt.dispose(),F.dispose(),ae.dispose(),Fe.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rn),ne.removeEventListener("sessionend",Rc),Ei.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=gt.autoReset,N=Me.enabled,z=Me.autoUpdate,H=Me.needsUpdate,O=Me.type;I(),gt.autoReset=E,Me.enabled=N,Me.autoUpdate=z,Me.needsUpdate=H,Me.type=O}function Q(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function K(E){const N=E.target;N.removeEventListener("dispose",K),ve(N)}function ve(E){Ue(E),xe.remove(E)}function Ue(E){const N=xe.get(E).programs;N!==void 0&&(N.forEach(function(z){$.releaseProgram(z)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,H,O,ee){N===null&&(N=Ae);const le=O.isMesh&&O.matrixWorld.determinant()<0,_e=Af(E,N,z,H,O);Se.setMaterial(H,le);let fe=z.index,Pe=1;if(H.wireframe===!0){if(fe=y.getWireframeAttribute(z),fe===void 0)return;Pe=2}const ke=z.drawRange,Ce=z.attributes.position;let $e=ke.start*Pe,st=(ke.start+ke.count)*Pe;ee!==null&&($e=Math.max($e,ee.start*Pe),st=Math.min(st,(ee.start+ee.count)*Pe)),fe!==null?($e=Math.max($e,0),st=Math.min(st,fe.count)):Ce!=null&&($e=Math.max($e,0),st=Math.min(st,Ce.count));const Mt=st-$e;if(Mt<0||Mt===1/0)return;ae.setup(O,H,_e,z,fe);let ft,lt=ce;if(fe!==null&&(ft=C.get(fe),lt=Le,lt.setIndex(ft)),O.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*zt()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(O.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),Se.setLineWidth(Re*zt()),O.isLineSegments?lt.setMode(L.LINES):O.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else O.isPoints?lt.setMode(L.POINTS):O.isSprite&&lt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Re=O._multiDrawStarts,vt=O._multiDrawCounts,Ke=O._multiDrawCount,en=fe?C.get(fe).bytesPerElement:1,Ji=xe.get(H).currentProgram.getUniforms();for(let tn=0;tn<Ke;tn++)Ji.setValue(L,"_gl_DrawID",tn),lt.render(Re[tn]/en,vt[tn])}else if(O.isInstancedMesh)lt.renderInstances($e,Mt,O.count);else if(z.isInstancedBufferGeometry){const Re=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,vt=Math.min(z.instanceCount,Re);lt.renderInstances($e,Mt,vt)}else lt.render($e,Mt)};function ht(E,N,z){E.transparent===!0&&E.side===Kn&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,Er(E,N,z),E.side=Mi,E.needsUpdate=!0,Er(E,N,z),E.side=Kn):Er(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),p=we.get(z),p.init(N),S.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==z&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const _e=ee[le];ht(_e,z,O),H.add(_e)}else ht(ee,z,O),H.add(ee)}),p=S.pop(),H},this.compileAsync=function(E,N,z=null){const H=this.compile(E,N,z);return new Promise(O=>{function ee(){if(H.forEach(function(le){xe.get(le).currentProgram.isReady()&&H.delete(le)}),H.size===0){O(E);return}setTimeout(ee,10)}Ne.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Qe=null;function Gn(E){Qe&&Qe(E)}function Rn(){Ei.stop()}function Rc(){Ei.start()}const Ei=new Yd;Ei.setAnimationLoop(Gn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){Qe=E,ne.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},ne.addEventListener("sessionstart",Rn),ne.addEventListener("sessionend",Rc),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,D),p=we.get(E,S.length),p.init(N),S.push(p),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ut.setFromProjectionMatrix(j,On,N.reversedDepth),q=this.localClippingEnabled,je=ie.init(this.clippingPlanes,q),g=V.get(E,T.length),g.init(),T.push(g),ne.enabled===!0&&ne.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&jo(ee,N,-1/0,x.sortObjects)}jo(E,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(re,ue),qe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,qe&&Ee.addToRenderList(g,E),this.info.render.frame++,je===!0&&ie.beginShadows();const z=p.state.shadowsArray;Me.render(z,E,N),je===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,O=g.transmissive;if(p.setupLights(),N.isArrayCamera){const ee=N.cameras;if(O.length>0)for(let le=0,_e=ee.length;le<_e;le++){const fe=ee[le];Lc(H,O,E,fe)}qe&&Ee.render(E);for(let le=0,_e=ee.length;le<_e;le++){const fe=ee[le];Pc(g,E,fe,fe.viewport)}}else O.length>0&&Lc(H,O,E,N),qe&&Ee.render(E),Pc(g,E,N);D!==null&&A===0&&(ze.updateMultisampleRenderTarget(D),ze.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(x,E,N),ae.resetDefaultState(),M=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],je===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function jo(E,N,z,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ut.intersectsSprite(E)){H&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);const le=F.update(E),_e=E.material;_e.visible&&g.push(E,le,_e,z,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ut.intersectsObject(E))){const le=F.update(E),_e=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(j)),Array.isArray(_e)){const fe=le.groups;for(let Pe=0,ke=fe.length;Pe<ke;Pe++){const Ce=fe[Pe],$e=_e[Ce.materialIndex];$e&&$e.visible&&g.push(E,le,$e,z,Ie.z,Ce)}}else _e.visible&&g.push(E,le,_e,z,Ie.z,null)}}const ee=E.children;for(let le=0,_e=ee.length;le<_e;le++)jo(ee[le],N,z,H)}function Pc(E,N,z,H){const O=E.opaque,ee=E.transmissive,le=E.transparent;p.setupLightsView(z),je===!0&&ie.setGlobalState(x.clippingPlanes,z),H&&Se.viewport(P.copy(H)),O.length>0&&br(O,N,z),ee.length>0&&br(ee,N,z),le.length>0&&br(le,N,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Lc(E,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Yi(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?vr:ri,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ee=p.state.transmissionRenderTarget[H.id],le=H.viewport||P;ee.setSize(le.z*x.transmissionResolutionScale,le.w*x.transmissionResolutionScale);const _e=x.getRenderTarget(),fe=x.getActiveCubeFace(),Pe=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(Y),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Ee.render(z);const ke=x.toneMapping;x.toneMapping=xi;const Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),je===!0&&ie.setGlobalState(x.clippingPlanes,H),br(E,z,H),ze.updateMultisampleRenderTarget(ee),ze.updateRenderTargetMipmap(ee),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let st=0,Mt=N.length;st<Mt;st++){const ft=N[st],lt=ft.object,Re=ft.geometry,vt=ft.material,Ke=ft.group;if(vt.side===Kn&&lt.layers.test(H.layers)){const en=vt.side;vt.side=jt,vt.needsUpdate=!0,Dc(lt,z,H,Re,vt,Ke),vt.side=en,vt.needsUpdate=!0,$e=!0}}$e===!0&&(ze.updateMultisampleRenderTarget(ee),ze.updateRenderTargetMipmap(ee))}x.setRenderTarget(_e,fe,Pe),x.setClearColor(Y,W),Ce!==void 0&&(H.viewport=Ce),x.toneMapping=ke}function br(E,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ee=E.length;O<ee;O++){const le=E[O],_e=le.object,fe=le.geometry,Pe=le.group;let ke=le.material;ke.allowOverride===!0&&H!==null&&(ke=H),_e.layers.test(z.layers)&&Dc(_e,N,z,fe,ke,Pe)}}function Dc(E,N,z,H,O,ee){E.onBeforeRender(x,N,z,H,O,ee),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,N,z,H,E,ee),O.transparent===!0&&O.side===Kn&&O.forceSinglePass===!1?(O.side=jt,O.needsUpdate=!0,x.renderBufferDirect(z,N,H,O,E,ee),O.side=Mi,O.needsUpdate=!0,x.renderBufferDirect(z,N,H,O,E,ee),O.side=Kn):x.renderBufferDirect(z,N,H,O,E,ee),E.onAfterRender(x,N,z,H,O,ee)}function Er(E,N,z){N.isScene!==!0&&(N=Ae);const H=xe.get(E),O=p.state.lights,ee=p.state.shadowsArray,le=O.state.version,_e=$.getParameters(E,O.state,ee,N,z),fe=$.getProgramCacheKey(_e);let Pe=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?bt:Ut).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",K),Pe=new Map,H.programs=Pe);let ke=Pe.get(fe);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===le)return Ic(E,_e),ke}else _e.uniforms=$.getUniforms(E),E.onBeforeCompile(_e,x),ke=$.acquireProgram(_e,fe),Pe.set(fe,ke),H.uniforms=_e.uniforms;const Ce=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),Ic(E,_e),H.needsLights=Rf(E),H.lightsStateVersion=le,H.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function kc(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=go.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ic(E,N){const z=xe.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Af(E,N,z,H,O){N.isScene!==!0&&(N=Ae),ze.resetTextureUnits();const ee=N.fog,le=H.isMeshStandardMaterial?N.environment:null,_e=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:As,fe=(H.isMeshStandardMaterial?bt:Ut).get(H.envMap||le),Pe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,st=!!z.morphAttributes.color;let Mt=xi;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=ft!==void 0?ft.length:0,Re=xe.get(H),vt=p.state.lights;if(je===!0&&(q===!0||E!==b)){const Wt=E===b&&H.id===M;ie.setState(H,E,Wt)}let Ke=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==vt.state.version||Re.outputColorSpace!==_e||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==fe||H.fog===!0&&Re.fog!==ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ie.numPlanes||Re.numIntersection!==ie.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==ke||Re.morphTargets!==Ce||Re.morphNormals!==$e||Re.morphColors!==st||Re.toneMapping!==Mt||Re.morphTargetsCount!==lt)&&(Ke=!0):(Ke=!0,Re.__version=H.version);let en=Re.currentProgram;Ke===!0&&(en=Er(H,N,O));let Ji=!1,tn=!1,Fs=!1;const yt=en.getUniforms(),cn=Re.uniforms;if(Se.useProgram(en.program)&&(Ji=!0,tn=!0,Fs=!0),H.id!==M&&(M=H.id,tn=!0),Ji||b!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(L,"projectionMatrix",E.projectionMatrix),yt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Kt=yt.map.cameraPosition;Kt!==void 0&&Kt.setValue(L,ge.setFromMatrixPosition(E.matrixWorld)),De.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,tn=!0,Fs=!0)}if(O.isSkinnedMesh){yt.setOptional(L,O,"bindMatrix"),yt.setOptional(L,O,"bindMatrixInverse");const Wt=O.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),yt.setValue(L,"boneTexture",Wt.boneTexture,ze))}O.isBatchedMesh&&(yt.setOptional(L,O,"batchingTexture"),yt.setValue(L,"batchingTexture",O._matricesTexture,ze),yt.setOptional(L,O,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",O._indirectTexture,ze),yt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",O._colorsTexture,ze));const un=z.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&te.update(O,z,en),(tn||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,yt.setValue(L,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(cn.envMap.value=fe,cn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),tn&&(yt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Cf(cn,Fs),ee&&H.fog===!0&&J.refreshFogUniforms(cn,ee),J.refreshMaterialUniforms(cn,H,G,Z,p.state.transmissionRenderTarget[E.id]),go.upload(L,kc(Re),cn,ze)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(go.upload(L,kc(Re),cn,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(L,"center",O.center),yt.setValue(L,"modelViewMatrix",O.modelViewMatrix),yt.setValue(L,"normalMatrix",O.normalMatrix),yt.setValue(L,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Wt=H.uniformsGroups;for(let Kt=0,Qo=Wt.length;Kt<Qo;Kt++){const Ti=Wt[Kt];Fe.update(Ti,en),Fe.bind(Ti,en)}}return en}function Cf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Rf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,N,z){const H=xe.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),xe.get(E.texture).__webglTexture=N,xe.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const z=xe.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const Pf=L.createFramebuffer();this.setRenderTarget=function(E,N=0,z=0){D=E,R=N,A=z;let H=!0,O=null,ee=!1,le=!1;if(E){const fe=xe.get(E);if(fe.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(fe.__webglFramebuffer===void 0)ze.setupRenderTarget(E);else if(fe.__hasExternalTextures)ze.rebindTextures(E,xe.get(E.texture).__webglTexture,xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ce=E.depthTexture;if(fe.__boundDepthTexture!==Ce){if(Ce!==null&&xe.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);const ke=xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?O=ke[N][z]:O=ke[N],ee=!0):E.samples>0&&ze.useMultisampledRTT(E)===!1?O=xe.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[z]:O=ke,P.copy(E.viewport),k.copy(E.scissor),B=E.scissorTest}else P.copy(pe).multiplyScalar(G).floor(),k.copy(Oe).multiplyScalar(G).floor(),B=Xe;if(z!==0&&(O=Pf),Se.bindFramebuffer(L.FRAMEBUFFER,O)&&H&&Se.drawBuffers(E,O),Se.viewport(P),Se.scissor(k),Se.setScissorTest(B),ee){const fe=xe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,z)}else if(le){const fe=N;for(let Pe=0;Pe<E.textures.length;Pe++){const ke=xe.get(E.textures[Pe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pe,ke.__webglTexture,z,fe)}}else if(E!==null&&z!==0){const fe=xe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(E,N,z,H,O,ee,le,_e=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){Se.bindFramebuffer(L.FRAMEBUFFER,fe);try{const Pe=E.textures[_e],ke=Pe.format,Ce=Pe.type;if(!De.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&z>=0&&z<=E.height-O&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(N,z,H,O,Te.convert(ke),Te.convert(Ce),ee))}finally{const Pe=D!==null?xe.get(D).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,N,z,H,O,ee,le,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe)if(N>=0&&N<=E.width-H&&z>=0&&z<=E.height-O){Se.bindFramebuffer(L.FRAMEBUFFER,fe);const Pe=E.textures[_e],ke=Pe.format,Ce=Pe.type;if(!De.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(N,z,H,O,Te.convert(ke),Te.convert(Ce),0);const st=D!==null?xe.get(D).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,st);const Mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Vp(L,Mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer($e),L.deleteSync(Mt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,z=0){const H=Math.pow(2,-z),O=Math.floor(E.image.width*H),ee=Math.floor(E.image.height*H),le=N!==null?N.x:0,_e=N!==null?N.y:0;ze.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,le,_e,O,ee),Se.unbindTexture()};const Lf=L.createFramebuffer(),Df=L.createFramebuffer();this.copyTextureToTexture=function(E,N,z=null,H=null,O=0,ee=null){ee===null&&(O!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=O,O=0):ee=0);let le,_e,fe,Pe,ke,Ce,$e,st,Mt;const ft=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(z!==null)le=z.max.x-z.min.x,_e=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,ke=z.min.y,Ce=z.isBox3?z.min.z:0;else{const un=Math.pow(2,-O);le=Math.floor(ft.width*un),_e=Math.floor(ft.height*un),E.isDataArrayTexture?fe=ft.depth:E.isData3DTexture?fe=Math.floor(ft.depth*un):fe=1,Pe=0,ke=0,Ce=0}H!==null?($e=H.x,st=H.y,Mt=H.z):($e=0,st=0,Mt=0);const lt=Te.convert(N.format),Re=Te.convert(N.type);let vt;N.isData3DTexture?(ze.setTexture3D(N,0),vt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ze.setTexture2DArray(N,0),vt=L.TEXTURE_2D_ARRAY):(ze.setTexture2D(N,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Ke=L.getParameter(L.UNPACK_ROW_LENGTH),en=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ji=L.getParameter(L.UNPACK_SKIP_PIXELS),tn=L.getParameter(L.UNPACK_SKIP_ROWS),Fs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce);const yt=E.isDataArrayTexture||E.isData3DTexture,cn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const un=xe.get(E),Wt=xe.get(N),Kt=xe.get(un.__renderTarget),Qo=xe.get(Wt.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qo.__webglFramebuffer);for(let Ti=0;Ti<fe;Ti++)yt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(E).__webglTexture,O,Ce+Ti),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(N).__webglTexture,ee,Mt+Ti)),L.blitFramebuffer(Pe,ke,le,_e,$e,st,le,_e,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||xe.has(E)){const un=xe.get(E),Wt=xe.get(N);Se.bindFramebuffer(L.READ_FRAMEBUFFER,Lf),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Df);for(let Kt=0;Kt<fe;Kt++)yt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,un.__webglTexture,O,Ce+Kt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,un.__webglTexture,O),cn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Wt.__webglTexture,ee,Mt+Kt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Wt.__webglTexture,ee),O!==0?L.blitFramebuffer(Pe,ke,le,_e,$e,st,le,_e,L.COLOR_BUFFER_BIT,L.NEAREST):cn?L.copyTexSubImage3D(vt,ee,$e,st,Mt+Kt,Pe,ke,le,_e):L.copyTexSubImage2D(vt,ee,$e,st,Pe,ke,le,_e);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else cn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(vt,ee,$e,st,Mt,le,_e,fe,lt,Re,ft.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,ee,$e,st,Mt,le,_e,fe,lt,ft.data):L.texSubImage3D(vt,ee,$e,st,Mt,le,_e,fe,lt,Re,ft):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ee,$e,st,le,_e,lt,Re,ft.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ee,$e,st,ft.width,ft.height,lt,ft.data):L.texSubImage2D(L.TEXTURE_2D,ee,$e,st,le,_e,lt,Re,ft);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ke),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,en),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ji),L.pixelStorei(L.UNPACK_SKIP_ROWS,tn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Fs),ee===0&&N.generateMipmaps&&L.generateMipmap(vt),Se.unbindTexture()},this.initRenderTarget=function(E){xe.get(E).__webglFramebuffer===void 0&&ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ze.setTextureCube(E,0):E.isData3DTexture?ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ze.setTexture2DArray(E,0):ze.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,Se.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const gi=1.2,Jt=144,ct=62,Bi=12,vn=ct/2,Un=Bi,Cn=Jt-Bi,We=2.5,ye=We/2,Gy=4,Yo=2,Vy=3,jd=3,Wy=3,Qd=3,$y=3,Xy=3,ef=5,ko=1,Tc=2,Yy=1,qy=1,Ky=2,th=45,nh=5,Zy=-3,Jy=-2,jy=-1,Qy=-5,eS=-5,tS=2,nS=-2,iS=5,sS=5,ih=10,rS=5,oS=1,aS=1,lS=2,cS=-2,uS=-5,hS=2,dS=1,sh=2,fS=12,tf=0,pS=10,mS=5,gS=10,rh=10,_S=11,vS=5,nf=[{group:0,maxCm:12,penalty:0},{group:1,maxCm:20,penalty:-2},{group:2,maxCm:28,penalty:-4},{group:3,maxCm:34,penalty:-6},{group:4,maxCm:40,penalty:-8},{group:5,maxCm:1/0,penalty:-10}];function yS(n){for(const e of nf)if(n<=e.maxCm)return e.group;return 5}function oh(n){return nf[Math.max(0,Math.min(5,n))].penalty}function ah(n){return n<30?5:n<35?3:n<40?0:n<=50?-2:-5}const Fa=8,lh=6,SS=6,xS=14,ch=12,uh=24,MS=24,hh=2.5*We,gs=22.5,_s=112.5,_o=6,bS=3,ES=2,TS=1,wS=2,AS=4,CS=10,dh=2,Ni=20,RS=40,fh=40,PS=10,Ba=30,LS=30,DS=50,kS=5,IS=8,US=20,NS=25,ph=50,mh=20,gh=15;function vo(n){return n*gi}function sf(n){return n/gi}function vs(n){return Cn-vo(n)}function OS(n){return sf(Cn-n)}const Pn=10;function FS(n){const e=ct*Pn,t=Jt*Pn,i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d"),r=c=>t-c*Pn,o=c=>c*Pn;for(let c=0;c<120;c+=5){const l=Bi+(c-10)*gi,u=c/5%2===0;s.fillStyle=u?"#2f7a3c":"#358a44",s.fillRect(0,r(l+5*gi),e,5*gi*Pn)}s.fillStyle=_h(n.bottomColor,.55),s.fillRect(0,r(Un),e,Bi*Pn),s.fillStyle=_h(n.topColor,.55),s.fillRect(0,r(Jt),e,Bi*Pn),s.strokeStyle="rgba(255,255,255,0.85)",s.lineWidth=2;for(let c=0;c<=100;c+=5){const l=Un+c*gi;s.beginPath(),s.moveTo(0,r(l)),s.lineTo(e,r(l)),s.stroke()}s.lineWidth=1.5,s.strokeStyle="rgba(255,255,255,0.7)";for(let c=1;c<100;c++){if(c%5===0)continue;const l=Un+c*gi;for(const u of[0,ct*.37,ct*.63,ct]){s.beginPath();const d=.6*Pn,h=o(u);s.moveTo(Math.max(0,h-d),r(l)),s.lineTo(Math.min(e,h+d),r(l)),s.stroke()}}s.fillStyle="rgba(255,255,255,0.8)",s.font=`bold ${3.2*Pn}px ${getComputedStyle(document.body).fontFamily||"sans-serif"}`,s.textAlign="center",s.textBaseline="middle";for(let c=10;c<=90;c+=10){const l=c<=50?c:100-c,u=Un+c*gi;for(const d of[ct*.2,ct*.8])s.save(),s.translate(o(d),r(u)),s.rotate(d<ct/2?Math.PI/2:-Math.PI/2),s.fillText(String(l),0,0),s.restore()}s.strokeStyle="#ffffff",s.lineWidth=3;for(const c of[Un,Cn])s.beginPath(),s.moveTo(0,r(c)),s.lineTo(e,r(c)),s.stroke();s.fillStyle="rgba(255,255,255,0.9)",s.font=`bold ${5*Pn}px ${getComputedStyle(document.body).fontFamily||"sans-serif"}`,s.fillText(n.topName.toUpperCase(),e/2,r(Jt-Bi/2)),s.save(),s.translate(e/2,r(Bi/2)),s.rotate(Math.PI),s.fillText(n.bottomName.toUpperCase(),0,0),s.restore(),s.strokeStyle="#ffffff",s.lineWidth=4,s.strokeRect(2,2,e-4,t-4),n.boardMinY>0&&(s.fillStyle="rgba(5,8,10,0.75)",s.fillRect(0,r(n.boardMinY),e,t-r(n.boardMinY)),s.strokeStyle="rgba(255,255,255,0.5)",s.setLineDash([12,8]),s.lineWidth=3,s.beginPath(),s.moveTo(0,r(n.boardMinY)),s.lineTo(e,r(n.boardMinY)),s.stroke(),s.setLineDash([]));const a=new Id(i);return a.colorSpace=Zt,a.anisotropy=4,a}function _h(n,e){const t=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(n);if(!t)return n;const i=Math.round(parseInt(t[1],16)*e),s=Math.round(parseInt(t[2],16)*e),r=Math.round(parseInt(t[3],16)*e);return`rgb(${i},${s},${r})`}const vh=new Map;function rf(n,e={}){const t=JSON.stringify([n,e]),i=vh.get(t);if(i)return i;const s=e.width??128,r=e.height??128,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");e.bg&&(a.fillStyle=e.bg,yh(a,2,2,s-4,r-4,e.radius??18),a.fill()),e.border&&(a.strokeStyle=e.border,a.lineWidth=6,yh(a,4,4,s-8,r-8,e.radius??18),a.stroke()),a.fillStyle=e.color??"#fff",a.textAlign="center",a.textBaseline="middle";const c=getComputedStyle(document.body).fontFamily||"sans-serif",l=e.size??60;a.font=`${e.bold===!1?"":"bold "}${l}px ${c}`,e.sub?(a.fillText(n,s/2,r/2-l*.22),a.font=`${l*.5}px ${c}`,a.fillStyle=e.color??"#fff",a.globalAlpha=.85,a.fillText(e.sub,s/2,r/2+l*.45),a.globalAlpha=1):a.fillText(n,s/2,r/2);const u=new Id(o);return u.colorSpace=Zt,u.minFilter=bn,vh.set(t,u),u}function yh(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function Di(n,e,t,i=1){const s=new Ld({map:rf(n,e),transparent:!0,depthTest:!1}),r=new gm(s);return r.scale.set(t*i,t,1),r}function Sh(n,e,t){const i=rf(e,t),s=n.material;s.map!==i&&(s.map=i,s.needsUpdate=!0)}const Ot=1e-6,Fn=(n,e)=>({x:n.x+e.x,y:n.y+e.y}),Je=(n,e)=>({x:n.x-e.x,y:n.y-e.y}),ai=(n,e)=>({x:n.x*e,y:n.y*e}),on=(n,e)=>n.x*e.x+n.y*e.y,BS=(n,e)=>n.x*e.y-n.y*e.x,wc=n=>Math.hypot(n.x,n.y),it=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function Xl(n){const e=wc(n);return e<Ot?{x:0,y:1}:{x:n.x/e,y:n.y/e}}function Tn(n){const e=n*Math.PI/180;return{x:Math.sin(e),y:Math.cos(e)}}function an(n){if(wc(n)<Ot)return 0;let e=Math.atan2(n.x,n.y)*180/Math.PI;return e<=-180&&(e+=360),e}function zS(n,e){let t=e-n;for(;t>180;)t-=360;for(;t<=-180;)t+=360;return t}function HS(n,e){const t=e*Math.PI/180,i=Math.cos(t),s=Math.sin(t);return{x:n.x*i-n.y*s,y:n.x*s+n.y*i}}function GS(n,e,t){return Fn(e,HS(Je(n,e),t))}function za(n,e,t){return{x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t}}function Ps(n,e,t){return n<e?e:n>t?t:n}function Ha(n,e,t,i){const s=Je(e,n),r=Je(n,t),o=on(s,s),a=2*on(r,s),c=on(r,r)-i*i;if(c<=Ot)return 0;if(o<Ot)return null;const l=a*a-4*o*c;if(l<0)return null;const u=(-a-Math.sqrt(l))/(2*o);return u<-Ot||u>1+Ot?null:Ps(u,0,1)}function xh(n,e,t){return BS(Je(e,n),Je(t,n))}const dn=n=>n==="home"?"away":"home",Vi=4,qo=2;function of(){return{movedCm:0,moved:!1,stranded:!1,speedPenalty:0,halved:!1,noMove:!1,noAction:!1,contestModifier:0,rushPerfect:!1,clutchEligible:!1,tackled:!1,engagedThisSlice:!1,disengagedFrom:[],brokeThrough:!1,declinedJump:!1}}const Mh={lineupOffense:"Offense lines up",lineupDefense:"Defense lines up",markers:"Markers",defenseReveal:"1. Defense reveals",offenseReveal:"2. Offense reveals",freeBlockers:"3. Free blockers",resolveBlocks:"4. Blocking",ballCarrier:"5. Ball carrier",defenders:"6. Blitzers & free defenders",receivers:"7. Receivers & man coverage",zones:"8. Spies & zones",pass:"9. Pass",looseBall:"Loose ball",over:"Play over"};class Ga extends Error{}function af(n){switch(n){case"QB":return["read","handoff","filler"];case"RB":case"FB":return["run","dir","continue","delay","cut","passblock","runblock","filler"];case"WR":case"TE":return["dir","continue","delay","cut","passblock","runblock","filler"];case"OL":return["passblock","runblock","filler"];default:return["man","zone","spy","blitz","filler"]}}function yn(n,e){const t=n?n.slice(0,e):[];for(;t.length<e;)t.push({t:"filler"});return t}function Ko(n){switch(n.t){case"filler":return"Filler";case"read":return"Read";case"handoff":return"Hand off";case"run":return`${n.lane==="dive"?"Dive":n.lane==="offtackle"?"Off tackle":"Sprint"} ${n.side}`;case"passblock":return"Pass block";case"runblock":return"Run block";case"dir":return n.dir==="up"?"Up":`${n.dir==="left"?"Left":"Right"} ${n.angle}°`;case"continue":return"Continue";case"delay":return"Delay";case"cut":return`Cut ${n.cut}`;case"man":return"Man";case"zone":return n.zone==="flat"||n.zone==="curl"?`Zone ${n.zone} ${n.side}`:`Zone ${n.zone}`;case"spy":return"Spy";case"blitz":return"Blitz"}}function lf(n,e,t){const i=[],s=n==="offense"?Vi:qo,r=new Set(e.map(l=>l.id));for(const l of Object.keys(t))r.has(l)||i.push({player:l,slot:null,text:`${l} is not on the field.`,severity:"error"});const o=[],a=[],c=e.filter(l=>l.position==="QB");for(const l of e){const u=yn(t[l.id],s);(t[l.id]?.length??0)>s&&i.push({player:l.id,slot:null,text:`${l.name} may have at most ${s} markers.`,severity:"error"});const d=af(l.position);let h=!1,f=!1,m=!1,v=!1,g=!1,p=!1;for(let T=0;T<u.length;T++){const S=u[T],x=T+1,w=R=>i.push({player:l.id,slot:T,text:`${l.name}, timeslice ${x}: ${R}`,severity:"error"});if(!d.includes(S.t)){w(`a ${l.position} cannot use the ${Ko(S)} marker.`);continue}if(h&&S.t!=="filler"&&w("once a filler marker is placed every later marker must be a filler."),S.t==="filler"){h=!0;continue}switch(m&&S.t!=="runblock"&&w("after a cut only filler or run block markers may follow."),S.t){case"handoff":x>2&&w("hand-off markers must be in one of the first two timeslices."),a.some(R=>R.id===l.id)&&w("only one hand-off marker per play."),(!r.has(S.target)||S.target===l.id)&&w("the hand-off target must be a team mate on the field."),a.push({id:l.id,target:S.target,slice:x});break;case"read":(!r.has(S.target)||S.target===l.id)&&w("the read target must be a team mate on the field.");break;case"run":x>2&&w("running markers may only be placed in timeslice 1 (run) or 2 (draw)."),v&&w("only one running marker per play."),v=!0,g=!0,o.push({id:l.id,slice:x});break;case"dir":{f&&w("a receiver may have only one direction marker."),u.slice(0,T).every(A=>A.t==="delay")||w("direction markers go in timeslice 1 (or right after delay markers)."),S.dir!=="up"&&!(S.angle>5&&S.angle<180)&&w("a left or right direction needs an angle between 5 and 180 degrees."),f=!0,g=!0;break}case"continue":g||w("continue needs an earlier direction to continue in.");break;case"delay":break;case"cut":m&&w("a receiver may only cut once on a play."),m=!0;break;case"passblock":case"runblock":break;case"man":p&&w("a defender may not have two man coverage markers."),p=!0;break}}}if(n==="offense"){o.length>1&&i.push({player:null,slot:null,text:"Only one player can have running markers on a given play.",severity:"error"});const l=c[0];if(l){const u=yn(t[l.id],s);for(const h of a)o.find(m=>m.id===h.target&&m.slice===h.slice)||i.push({player:l.id,slot:h.slice-1,text:`The hand-off in timeslice ${h.slice} has no matching running marker on the target: that is an automatic fumble.`,severity:"warning"});for(const h of o)a.find(m=>m.target===h.id&&m.slice===h.slice)||i.push({player:h.id,slot:h.slice-1,text:`The running marker in timeslice ${h.slice} has no matching hand-off from the QB: that is an automatic fumble.`,severity:"warning"});a.find(h=>h.slice===1)&&u[1].t!=="filler"&&i.push({player:l.id,slot:1,text:"A read marker after a hand-off in timeslice 1 makes this a play-action fake.",severity:"warning"})}}return i}function VS(n){return n.some(e=>e.severity==="error")}const Ge={field:0,zone:.2,link:.4,ring:.5,trail:.6,chip:.7,token:1,label:1.2,overlay:2,ghost:1.5},WS={option:15909198,target:5223423,danger:15688801,engageable:5816957,designated:16098596,selected:16777215,muted:3355443,hover:16777215};class $S{renderer;scene=new pm;camera;fieldMesh;fieldKey="";tokens=new Map;overlay=new Dn;links=new Dn;zonesGroup=new Dn;ghostGroup=new Dn;ghostMeshes=new Map;losLine;ltgLine;raycaster=new sg;pointer=new de;canvas;handlers;view=null;ui={selected:null,highlights:{}};defs=new Map;teamColors={offense:{primary:"#1f6feb",secondary:"#fff"},defense:{primary:"#c0392b",secondary:"#fff"}};dragging=null;panning=null;downAt=null;raf=0;disposed=!1;ballFlight=null;hoverGhost=null;constructor(e,t){this.canvas=e,this.handlers=t,this.renderer=new Hy({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.renderer.setClearColor(724754),this.camera=new Xd(-10,10,10,-10,.1,100),this.camera.position.set(ct/2,Jt/2,50),this.camera.up.set(0,1,0),this.camera.lookAt(ct/2,Jt/2,0),this.camera.zoom=1;const i=new Zn(ct,Jt);this.fieldMesh=new rt(i,new Et({color:3111484})),this.fieldMesh.position.set(ct/2,Jt/2,Ge.field),this.fieldMesh.name="field",this.scene.add(this.fieldMesh),this.losLine=this.makeLine(5223423,.9),this.ltgLine=this.makeLine(15909198,.9),this.scene.add(this.losLine,this.ltgLine,this.zonesGroup,this.links,this.overlay,this.ghostGroup),this.bindEvents(),this.resize(),this.fitField();const s=()=>{this.disposed||(this.animate(),this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(s))};this.raf=requestAnimationFrame(s),new ResizeObserver(()=>this.resize()).observe(e.parentElement??e)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.dispose()}resize(){const e=this.canvas.parentElement??this.canvas,t=Math.max(1,e.clientWidth),i=Math.max(1,e.clientHeight);this.renderer.setSize(t,i,!1);const s=t/i,r=10;this.camera.left=-r*s,this.camera.right=r*s,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix()}fitRegion(e,t,i,s,r=2){const o=i-e+r*2,a=s-t+r*2,c=this.camera.right-this.camera.left,l=this.camera.top-this.camera.bottom;this.camera.zoom=Math.min(c/o,l/a),this.camera.position.x=(e+i)/2,this.camera.position.y=(t+s)/2,this.camera.updateProjectionMatrix()}fitField(){const e=this.view?.play?.boardMinY??0;this.fitRegion(0,e,ct,Jt,1)}fitPlay(){const e=this.view?.play;if(!e)return this.fitField();const t=Object.values(e.players);if(t.length===0){this.fitRegion(0,e.los-20,ct,e.los+30,1);return}let i=1/0,s=-1/0;for(const r of t)i=Math.min(i,r.pos.y),s=Math.max(s,r.pos.y);i=Math.min(i,e.los-12),s=Math.max(s,e.los+28),this.fitRegion(0,i,ct,s,2)}focusBall(){const e=this.view?.play;if(!e)return;const t=e.ball.carrier,i=t?e.players[t]:null,s=e.ball.loose??i?.pos??{x:ct/2,y:e.los};this.camera.position.x=s.x,this.camera.position.y=s.y,this.camera.updateProjectionMatrix()}zoomBy(e,t){const i=t?this.toWorld(t.x,t.y):null;if(this.camera.zoom=Math.max(.3,Math.min(12,this.camera.zoom*e)),this.camera.updateProjectionMatrix(),i&&t){const s=this.toWorld(t.x,t.y);this.camera.position.x+=i.x-s.x,this.camera.position.y+=i.y-s.y,this.camera.updateProjectionMatrix()}}toScreen(e){const t=this.canvas.getBoundingClientRect(),i=new U(e.x,e.y,0).project(this.camera);return{x:t.left+(i.x+1)/2*t.width,y:t.top+(1-i.y)/2*t.height}}toWorld(e,t){const i=this.canvas.getBoundingClientRect(),s=(e-i.left)/i.width*2-1,r=-((t-i.top)/i.height)*2+1,o=new U(s,r,0).unproject(this.camera);return{x:o.x,y:o.y}}bindEvents(){const e=this.canvas;e.addEventListener("contextmenu",i=>i.preventDefault()),e.addEventListener("wheel",i=>{i.preventDefault(),this.zoomBy(i.deltaY<0?1.15:1/1.15,{x:i.clientX,y:i.clientY})},{passive:!1}),e.addEventListener("pointerdown",i=>{e.setPointerCapture(i.pointerId),this.downAt={x:i.clientX,y:i.clientY,t:performance.now()};const s=this.pick(i.clientX,i.clientY);if(i.button===0&&s.player&&this.ui.draggable?.has(s.player)){this.dragging={id:s.player};return}(i.button===1||i.button===2||i.button===0&&!s.player&&!s.ghost)&&(this.panning={x:i.clientX,y:i.clientY,cx:this.camera.position.x,cy:this.camera.position.y})}),e.addEventListener("pointermove",i=>{if(this.dragging){const r=this.toWorld(i.clientX,i.clientY);this.handlers.onDrag(this.dragging.id,r,!1);return}if(this.panning){const r=e.getBoundingClientRect(),o=(this.camera.right-this.camera.left)/this.camera.zoom,a=(this.camera.top-this.camera.bottom)/this.camera.zoom,c=(i.clientX-this.panning.x)/r.width*o,l=(i.clientY-this.panning.y)/r.height*a;this.camera.position.x=this.panning.cx-c,this.camera.position.y=this.panning.cy+l,this.camera.updateProjectionMatrix();return}const s=this.pick(i.clientX,i.clientY);this.hoverGhost=s.ghost,this.handlers.onHover(s.field,s.player,s.ghost)});const t=i=>{const s=this.dragging;if(this.panning,this.dragging=null,this.panning=null,s){const c=this.toWorld(i.clientX,i.clientY);this.handlers.onDrag(s.id,c,!0);return}const r=this.downAt;if(this.downAt=null,!r||Math.hypot(i.clientX-r.x,i.clientY-r.y)>4||i.button!==0)return;const a=this.pick(i.clientX,i.clientY);a.ghost?this.handlers.onClickGhost(a.ghost):a.player?this.handlers.onClickPlayer(a.player,i,a.field):a.field&&this.handlers.onClickField(a.field,i)};e.addEventListener("pointerup",t),e.addEventListener("pointerleave",()=>{this.handlers.onHover(null,null,null)}),e.addEventListener("dblclick",()=>this.fitPlay())}pick(e,t){const i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const s=[...this.ghostMeshes.values()],r=this.raycaster.intersectObjects(s,!0)[0];if(r){let u=r.object;for(;u&&!u.userData.ghostKey;)u=u.parent;if(u)return{player:null,field:null,ghost:u.userData.ghostKey}}const o=this.raycaster.intersectObjects([...this.tokens.values()].map(u=>u.hit),!1),a=o.length?o[0].object.userData.id:null,c=this.raycaster.intersectObject(this.fieldMesh,!1)[0],l=c?{x:c.point.x,y:c.point.y}:null;return{player:a,field:l,ghost:null}}setTeams(e,t){this.defs=new Map(e.map(i=>[i.id,i])),this.teamColors=t}setView(e,t,i={}){const s=!this.view?.play&&!!e.play,r=this.view?.play&&e.play&&(this.view.play.los!==e.play.los||this.view.play.offense!==e.play.offense||Object.keys(this.view.play.players).length===0);this.view=e,this.ui=t,this.updateField(),this.updateTokens(),this.updateLinks(),this.updateOverlay(),this.updateGhosts(),i.pass&&this.flyBall(i.pass.from,i.pass.to),(s||r)&&this.fitPlay()}setUi(e){this.ui=e,this.view&&(this.updateTokens(),this.updateLinks(),this.updateOverlay(),this.updateGhosts())}updateField(){const e=this.view,t=e.play,i=t?.offense??e.possession,s=i==="home"?"away":"home",r=t?.boardMinY??0,o=`${i}|${r}`;if(o!==this.fieldKey){this.fieldKey=o;const a=e.config.teams[i],c=e.config.teams[s],l=FS({bottomName:a.name,bottomColor:a.colors.primary,topName:c.name,topColor:c.colors.primary,boardMinY:r}),u=this.fieldMesh.material;u.map?.dispose(),u.map=l,u.color.set(16777215),u.needsUpdate=!0}t?(this.setLine(this.losLine,t.los),this.losLine.visible=!0,t.lineToGainY!==null?(this.setLine(this.ltgLine,t.lineToGainY),this.ltgLine.visible=!0):this.ltgLine.visible=!1):(this.losLine.visible=!1,this.ltgLine.visible=!1)}makeLine(e,t){const i=new Zn(ct,.3),s=new Et({color:e,transparent:!0,opacity:t}),r=new rt(i,s);return r.position.set(ct/2,0,Ge.ring),r}setLine(e,t){e.position.y=t}tokenColors(e){const t=this.teamColors[e];return{primary:new Ye(t.primary).getHex(),secondary:new Ye(t.secondary).getHex()}}makeToken(e,t){const i=new Dn,s=this.tokenColors(t),r=new rt(new Ln(ye,40),new Et({color:s.primary}));r.position.z=Ge.token;const o=new rt(new mi(ye,ye+.28,48),new Et({color:s.secondary,transparent:!0,opacity:.9}));o.position.z=Ge.token+.01;const a=this.defs.get(e),c=Di(String(a?.number??"?"),{color:"#fff",size:64,sub:a?.position??""},2.2);c.position.z=Ge.label;const l=new rt(new Zn(.35,.9),new Et({color:s.secondary,transparent:!0,opacity:.9}));l.position.set(0,ye-.3,Ge.token+.02);const u=new rt(new Ln(.42,16),new Et({color:9127187}));u.scale.set(1.5,1,1),u.position.set(.9,-.9,Ge.label+.1),u.visible=!1;const d=Di("",{color:"#fff",size:50},1.6);d.position.set(0,1.9,Ge.label+.2),d.visible=!1;const h=new rt(new Ln(ye+.4,16),new Et({visible:!1}));return h.userData.id=e,h.position.z=Ge.label+.5,i.add(r,o,c,l,u,d,h),this.scene.add(i),{group:i,base:r,ring:o,label:c,facing:l,ball:u,status:d,hit:h,target:new U,side:t,markerSprites:[]}}updateTokens(){const t=this.view.play,i=new Map;if(t)for(const r of Object.values(t.players))i.set(r.id,{side:r.side,pos:r.pos,f:r});for(const r of this.ui.extraTokens??[])i.has(r.id)||i.set(r.id,{side:r.side,pos:r.pos,f:null});for(const[r,o]of this.tokens)i.has(r)||(this.scene.remove(o.group),this.tokens.delete(r));const s=t?.ball.carrier??null;for(const[r,o]of i){let a=this.tokens.get(r);(!a||a.side!==o.side)&&(a&&this.scene.remove(a.group),a=this.makeToken(r,o.side),this.tokens.set(r,a),a.group.position.set(o.pos.x,o.pos.y,0));const c=this.ui.positions?.[r]??o.pos;a.target.set(c.x,c.y,0),this.ui.positions?.[r]&&a.group.position.set(c.x,c.y,0);const l=o.f,u=!!l&&l.pancakedSlice!==null;if(a.base.material.color.setHex(this.tokenColors(o.side).primary),a.base.material.opacity=u?.45:1,a.base.material.transparent=u,a.label.material.opacity=u?.5:1,a.facing.visible=!u,l){const v=Tn(l.facing);a.facing.position.set(v.x*(ye-.3),v.y*(ye-.3),Ge.token+.02),a.facing.rotation.z=-(l.facing*Math.PI)/180}a.ball.visible=r===s;const d=this.ui.highlights[r]??(r===this.ui.selected?"selected":null),h=a.ring.material;d?(h.color.setHex(WS[d]),a.ring.scale.setScalar(d==="selected"||d==="hover"?1.18:1.12),h.opacity=1):(h.color.setHex(this.tokenColors(o.side).secondary),a.ring.scale.setScalar(1),h.opacity=.9);let f="",m="#333";l&&(l.pancakedSlice!==null?(f="DOWN",m="#5a1e1e"):l.s.noAction?(f="UP",m="#4a3a14"):l.s.stranded?(f="STUCK",m="#4a3a14"):l.draggedBy.length>0?(f="DRAG",m="#4a3a14"):t&&l.sidelineSlice!==null&&l.sidelineSlice===t.slice&&(f="SIDELINE",m="#2a3a4a")),f?(Sh(a.status,f,{color:"#fff",size:40,bg:m,width:256,height:96,radius:30}),a.status.scale.set(3.2,1.2,1),a.status.visible=!0):a.status.visible=!1,this.updateMarkerSprites(a,r,o.side)}}updateMarkerSprites(e,t,i){const s=this.view?.play,r=this.ui.markerOverride?.[t]??s?.markers[t],o=r?r.length:0;for(;e.markerSprites.length>o;){const l=e.markerSprites.pop();e.group.remove(l)}for(;e.markerSprites.length<o;){const l=Di("",{color:"#fff",size:40,bg:"#222",width:256,height:96,radius:24},.85,2.6);l.position.z=Ge.chip,e.group.add(l),e.markerSprites.push(l)}if(!r)return;const a=i==="offense"?-1:1,c=s?i==="offense"?s.revealed.offense:s.revealed.defense:0;r.forEach((l,u)=>{const d=e.markerSprites[u],h=l.t==="hidden",f=h?"?":XS(l,this.defs),m=s&&s.slice===u+1&&s.slice>0,v=h?"#2a2a2a":YS(l);Sh(d,f,{color:h?"#777":"#fff",size:40,bg:v,width:256,height:96,radius:24,border:m?"#f2c14e":null});const g=s?u+1<s.slice&&u+1<=c:!1;d.material.opacity=g?.4:.9,d.position.set(0,a*(ye+.75+u*.95),Ge.chip)})}updateLinks(){const t=this.view.play;if(Va(this.links),!!t){for(const i of t.engagements){const s=t.players[i.defender];if(!s)continue;for(const c of i.blockers){const l=t.players[c];if(!l)continue;const u=ki(l.pos,s.pos,16777215,.35,Ge.link);this.links.add(u)}const r=t.players[i.blockers[0]];if(!r)continue;const o={x:(r.pos.x+s.pos.x)/2,y:(r.pos.y+s.pos.y)/2},a=Di(String(i.dominance),{color:i.dominance>=5?"#ffd98a":"#fff",size:60,bg:i.dominance>=10?"#7a2020":i.dominance>=5?"#5a3a10":"#1b2a35",border:"#dfe7ee"},1.3);a.position.set(o.x,o.y,Ge.label+.6),this.links.add(a)}for(const[i,s]of Object.entries(t.designations)){const r=t.players[i],o=t.players[s];!r||!o||this.links.add(ki(r.pos,o.pos,16098596,.6,Ge.link,!0))}for(const[i,s]of Object.entries(t.assignments)){if(s.t!=="man")continue;const r=t.players[i],o=t.players[s.target];if(!r||!o)continue;const a=t.players[i];a.freeSince!==null&&a.freeSince<=t.slice||this.links.add(ki(r.pos,o.pos,11566335,.5,Ge.link,!0))}if(this.ui.showTrails!==!1)for(const[i,s]of Object.entries(t.trails)){if(s.length<2)continue;const o=t.players[i]?.side==="offense"?10474751:16757681,a=new Vt().setFromPoints(s.map(c=>new U(c.x,c.y,Ge.trail)));this.links.add(new Do(a,new bs({color:o,transparent:!0,opacity:.5})))}if(t.ball.loose){const i=new rt(new Ln(.5,16),new Et({color:9127187}));i.scale.set(1.5,1,1),i.position.set(t.ball.loose.x,t.ball.loose.y,Ge.label),this.links.add(i);const s=new rt(new mi(5+ye-.06,5+ye+.06,64),new Et({color:16767370,transparent:!0,opacity:.5}));s.position.set(t.ball.loose.x,t.ball.loose.y,Ge.ring),this.links.add(s)}}}updateOverlay(){Va(this.overlay),Va(this.zonesGroup);const e=this.view?.play;for(const r of this.ui.zones??[]){const o=r.rect.x1-r.rect.x0,a=r.rect.y1-r.rect.y0,c=qS(r.zone),l=new rt(new Zn(o,a),new Et({color:c,transparent:!0,opacity:.16}));l.position.set(r.rect.x0+o/2,r.rect.y0+a/2,Ge.zone),this.zonesGroup.add(l);const u=new Sm(new xm(new Zn(o,a)),new bs({color:c,transparent:!0,opacity:.6}));u.position.copy(l.position),this.zonesGroup.add(u);const d=Di(r.label.toUpperCase(),{color:"#fff",size:36,bg:"rgba(0,0,0,0.35)",width:512,height:96,radius:24},1.6,5.3);d.position.set(r.rect.x0+o/2,r.rect.y1-1.3,Ge.zone+.1),this.zonesGroup.add(d)}for(const r of this.ui.rings??[]){const a=e?.players[r.id]?.pos??this.ui.positions?.[r.id];if(!a)continue;const c=new rt(new mi(r.radius-.05,r.radius+.05,64),new Et({color:new Ye(r.color),transparent:!0,opacity:r.dashed?.35:.6}));c.position.set(a.x,a.y,Ge.ring),this.overlay.add(c)}const t=this.ui.mover;if(t&&e){const r=e.players[t.id];if(r){const o=Math.max(.01,t.spec.allowance),a=new rt(new Ln(o,64),new Et({color:15909198,transparent:!0,opacity:.1}));a.position.set(r.pos.x,r.pos.y,Ge.ring);const c=new rt(new mi(o-.06,o+.06,64),new Et({color:15909198,transparent:!0,opacity:.8}));c.position.set(r.pos.x,r.pos.y,Ge.ring+.01),this.overlay.add(a,c);const l=t.spec.mode;if(l.t==="fixed"){const u=Tn(l.angle);this.overlay.add(ki(r.pos,{x:r.pos.x+u.x*o,y:r.pos.y+u.y*o},15909198,.9,Ge.ring+.02))}else if(l.t==="along"){const u=Tn(l.angle);this.overlay.add(ki({x:r.pos.x-u.x*o,y:r.pos.y-u.y*o},{x:r.pos.x+u.x*o,y:r.pos.y+u.y*o},15909198,.9,Ge.ring+.02))}else if(l.t==="sector"){const u=((l.to-l.from)%360+360)%360||360,d=Math.max(2,Math.ceil(u/6)),h=[new U(r.pos.x,r.pos.y,Ge.ring+.02)];for(let v=0;v<=d;v++){const g=l.from+u*v/d,p=Tn(g);h.push(new U(r.pos.x+p.x*o,r.pos.y+p.y*o,Ge.ring+.02))}h.push(h[0].clone());const f=new Hd(h.map(v=>new de(v.x,v.y))),m=new rt(new bc(f),new Et({color:15909198,transparent:!0,opacity:.18}));m.position.z=Ge.ring+.015,this.overlay.add(m),this.overlay.add(new Do(new Vt().setFromPoints(h),new bs({color:15909198,transparent:!0,opacity:.8})))}}}const i=this.ui.preview;if(i){const r=i.ok?16777215:15688801;this.overlay.add(ki(i.from,i.to,r,.95,Ge.overlay));const o=new rt(new mi(ye-.08,ye+.08,48),new Et({color:r,transparent:!0,opacity:.9}));o.position.set(i.to.x,i.to.y,Ge.overlay),this.overlay.add(o);for(const a of i.marks){const c=a.kind==="hole"?16098596:a.kind==="jump"||a.kind==="clutch"?15688801:a.kind==="engage"?5816957:16777215,l=new rt(new Ln(.45,16),new Et({color:c}));l.position.set(a.at.x,a.at.y,Ge.overlay+.05),this.overlay.add(l);const u=a.kind==="hole"?"HOLE":a.kind==="jump"?"JUMP":a.kind==="clutch"?"CLUTCH":a.kind==="engage"?"BLOCK":a.kind==="carrier"?"TACKLE":"STOP",d=Di(u,{color:"#fff",size:40,bg:"rgba(0,0,0,0.6)",width:256,height:96,radius:24},1.1,2.6);d.position.set(a.at.x+1.9,a.at.y+1.1,Ge.overlay+.1),this.overlay.add(d)}}const s=this.ui.passLine;s&&this.overlay.add(ki(s.from,s.to,10474751,.95,Ge.overlay,!0))}updateGhosts(){const e=new Map((this.ui.ghosts??[]).map(t=>[t.key,t]));for(const[t,i]of this.ghostMeshes)e.has(t)||(this.ghostGroup.remove(i),this.ghostMeshes.delete(t));for(const[t,i]of e){let s=this.ghostMeshes.get(t);if(!s){const o=new Dn;o.userData.ghostKey=t;const a=new rt(new Ln(ye,32),new Et({color:new Ye(i.color??"#ffffff"),transparent:!0,opacity:.35}));a.position.z=Ge.ghost;const c=new rt(new mi(ye-.08,ye+.08,32),new Et({color:new Ye(i.color??"#ffffff"),transparent:!0,opacity:.9}));if(c.position.z=Ge.ghost+.01,o.add(a,c),i.label){const l=Di(i.label,{color:"#fff",size:56},1.6);l.position.z=Ge.ghost+.1,o.add(l)}this.ghostGroup.add(o),this.ghostMeshes.set(t,o),s=o}s.position.set(i.pos.x,i.pos.y,0);const r=this.hoverGhost===t;s.scale.setScalar(r?1.15:1)}}flyBall(e,t){this.ballFlight&&this.scene.remove(this.ballFlight.mesh);const i=new rt(new Ln(.55,16),new Et({color:9127187}));i.scale.set(1.5,1,1),this.scene.add(i);const s=Math.hypot(t.x-e.x,t.y-e.y);this.ballFlight={from:new U(e.x,e.y,Ge.overlay+1),to:new U(t.x,t.y,Ge.overlay+1),t0:performance.now(),dur:350+s*18,mesh:i}}animate(){const e=performance.now();for(const i of this.tokens.values()){const s=i.group.position,r=i.target,o=r.x-s.x,a=r.y-s.y;if(Math.abs(o)+Math.abs(a)<.002){s.x=r.x,s.y=r.y;continue}s.x+=o*.16,s.y+=a*.16}const t=this.ballFlight;if(t){const i=Math.min(1,(e-t.t0)/t.dur),s=t.from.clone().lerp(t.to,i);t.mesh.position.copy(s);const r=1+Math.sin(Math.PI*i)*1.4;t.mesh.scale.set(1.5*r,r,1),i>=1&&(this.scene.remove(t.mesh),this.ballFlight=null)}}}function Va(n){for(;n.children.length;){const e=n.children.pop();n.remove(e)}}function ki(n,e,t,i,s,r=!1){const o=new Vt().setFromPoints([new U(n.x,n.y,s),new U(e.x,e.y,s)]),a=r?new ng({color:t,transparent:!0,opacity:i,dashSize:.6,gapSize:.4}):new bs({color:t,transparent:!0,opacity:i}),c=new Do(o,a);return r&&c.computeLineDistances(),c}function XS(n,e){switch(n.t){case"filler":return"—";case"read":return`READ ${e.get(n.target)?.number??"?"}`;case"handoff":return`HAND ${e.get(n.target)?.number??"?"}`;case"run":return`${n.lane==="dive"?"DIVE":n.lane==="offtackle"?"OFF-T":"SPRINT"} ${n.side==="left"?"L":"R"}`;case"passblock":return"PASS BLK";case"runblock":return"RUN BLK";case"dir":return n.dir==="up"?"UP":`${n.dir==="left"?"L":"R"} ${n.angle}°`;case"continue":return"CONT";case"delay":return"DELAY";case"cut":return`CUT ${n.cut.toUpperCase()}`;case"man":return"MAN";case"zone":return n.zone==="flat"||n.zone==="curl"?`${n.zone.toUpperCase()} ${n.side==="left"?"L":"R"}`:n.zone.toUpperCase();case"spy":return"SPY";case"blitz":return"BLITZ"}}function YS(n){switch(n.t){case"filler":return"#2a2f35";case"read":case"handoff":return"#1f4a73";case"run":return"#7a4a12";case"passblock":case"runblock":return"#3d4147";case"dir":case"continue":case"delay":return"#245a35";case"cut":return"#7a2a2a";case"man":return"#4a2a7a";case"zone":return"#1f5a6a";case"spy":return"#5a5a1a";case"blitz":return"#7a1f1f"}}function qS(n){switch(n.zone){case"flat":return 5230847;case"curl":return 11566335;case"hook":return 15917390;case"deep":return 5209087}}class KS{s;constructor(e){this.s=e>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}die(e){return 1+Math.floor(this.next()*e)}}function Wa(n,e){return n===1?!0:n===20?!1:n<=e}function Yl(n,e,t,i=0){const s=t+i,r=n.die(20),o={skill:e,base:t,modifier:i,target:s,roll:r,success:Wa(r,s),successRate:0,rawRate:s-r,perfect:!1,critical:!1};return r===1?(o.confirm=n.die(20),o.perfect=Wa(o.confirm,s)):r===20&&(o.confirm=n.die(20),o.critical=!Wa(o.confirm,s)),o.successRate=o.success?Math.max(0,s-r):0,o}function ql(n){const e=n.modifier===0?"":n.modifier>0?` +${n.modifier}`:` ${n.modifier}`,t=n.perfect?" PERFECT":n.critical?" CRITICAL FAILURE":n.success?` SR ${n.successRate}`:" fail",i=n.confirm!==void 0?` (confirm ${n.confirm})`:"";return`${n.skill} ${n.base}${e} = ${n.target}: rolled ${n.roll}${i}${t}`}class Ac{state;play;rng;defs;constructor(e,t,i){this.state=e,this.play=t,this.rng=i,this.defs=new Map;for(const s of["home","away"]){const r=e.config.teams[s];for(const o of[...r.offense,...r.defense])this.defs.set(o.id,o)}}def(e){const t=this.defs.get(e);if(!t)throw new Ga(`unknown player ${e}`);return t}f(e){const t=this.play.players[e];if(!t)throw new Ga(`${e} is not on the field`);return t}has(e){return e in this.play.players}name(e){const t=this.def(e);return`${t.position} ${t.name} (#${t.number})`}short(e){const t=this.def(e);return`${t.position} #${t.number}`}skill(e,t){return this.def(e).skills[t]}team(e){return this.state.config.teams[e]}coachOf(e){return e==="offense"?this.play.offense:this.play.defense}sideOf(e){return this.f(e).side}coachOfPlayer(e){return this.coachOf(this.sideOf(e))}onField(e){return Object.values(this.play.players).filter(t=>t.side===e)}offensePlayers(){return this.onField("offense")}defensePlayers(){return this.onField("defense")}qb(){const e=this.offensePlayers().find(t=>this.def(t.id).position==="QB");if(!e)throw new Ga("no quarterback on the field");return e}marker(e,t=this.play.slice){const i=this.sideOf(e)==="offense"?Vi:qo,s=yn(this.play.markers[e],i);return t>i?{t:"filler"}:s[t-1]}offMarker(e,t=this.play.slice){return this.marker(e,t)}blockKind(e,t=this.play.slice){const i=this.effectiveOffMarker(e,t);return i.t==="passblock"?"pass":i.t==="runblock"?"run":null}effectiveOffMarker(e,t=this.play.slice){if(t<=Vi)return this.offMarker(e,t);const i=yn(this.play.markers[e],Vi);for(let s=i.length-1;s>=0;s--)if(i[s].t!=="filler")return i[s];return{t:"filler"}}effectiveCarrier(){return this.play.ball.apparent??this.play.ball.carrier}handoffPending(){const e=this.play.handoff;return!!e&&!e.done&&!e.fumbled&&e.slice===this.play.slice}effectiveInPlay(){return this.play.ball.inPlay||this.play.ball.apparent!==null||this.handoffPending()}isCarrier(e){return this.effectiveCarrier()===e}ballNowInPlay(){const e=this.play.ball;e.inPlay||(e.inPlay=!0,e.inPlaySlice=this.play.slice),e.apparent=null}fakeHandoff(e){this.play.ball.apparent=e}revealFake(){this.play.ball.apparent=null}engagementOf(e){return this.play.engagements.find(t=>t.defender===e||t.blockers.includes(e))}isEngaged(e){return this.engagementOf(e)!==void 0}engagedSet(){const e=new Set;for(const t of this.play.engagements){e.add(t.defender);for(const i of t.blockers)e.add(i)}return e}removeEngagement(e){this.play.engagements=this.play.engagements.filter(t=>t.id!==e.id)}moveCtx(){return{players:this.play.players,engaged:this.engagedSet(),boardMinY:this.play.boardMinY}}isLying(e){return this.f(e).pancakedSlice!==null}canAct(e){const t=this.f(e);return t.pancakedSlice===null&&!t.s.noAction}markerAssignment(e){return this.play.assignments[e]??{t:"none"}}assignment(e){const t=this.markerAssignment(e),i=this.f(e);return i.freeSince!==null&&i.freeSince<=this.play.slice?{t:"free"}:this.effectiveInPlay()&&t.t!=="man"?{t:"free"}:t}setAssignment(e,t){this.play.assignments[e]=t}freeDefender(e,t){const i=this.f(e);i.freeSince===null&&(i.freeSince=this.play.slice,this.log(`${this.short(e)} becomes a free defender (${t}).`,"event"))}isFreeDefender(e){return this.assignment(e).t==="free"}isBlitzer(e){return this.assignment(e).t==="blitz"}allowance(e,t={}){const i=this.f(e);if(i.pancakedSlice!==null||i.s.noAction||i.s.noMove)return 0;let s=this.skill(e,"speed");return this.play.slice===1?s/=2:t.zone&&(s-=oS),s-=i.s.speedPenalty,i.s.halved&&(s/=2),Math.max(0,s)}gap(e,t){return it(this.f(e).pos,this.f(t).pos)-We}defendersWithin(e,t){const i=this.f(e);return this.defensePlayers().filter(s=>s.pancakedSlice===null&&it(s.pos,i.pos)-We<=t+1e-6)}sidelineGap(e){return Math.min(e.x,ct-e.x)-ye}zoneRect(e){const t=this.play.los,i=Jt;switch(e.zone){case"flat":return e.side==="left"?{x0:0,y0:t,x1:vn-hh,y1:t+lh}:{x0:vn+hh,y0:t,x1:ct,y1:t+lh};case"curl":return e.side==="left"?{x0:0,y0:t+ch,x1:vn,y1:Math.min(i,t+uh)}:{x0:vn,y0:t+ch,x1:ct,y1:Math.min(i,t+uh)};case"hook":return{x0:0,y0:t+SS,x1:ct,y1:Math.min(i,t+xS)};case"deep":return{x0:0,y0:Math.min(i-We,t+MS),x1:ct,y1:i}}}inZone(e,t){const i=this.zoneRect(t);return e.x>=i.x0-1e-6&&e.x<=i.x1+1e-6&&e.y>=i.y0-1e-6&&e.y<=i.y1+1e-6}nearestInZone(e,t){const i=this.zoneRect(t);return{x:Ps(e.x,i.x0+ye,i.x1-ye),y:Ps(e.y,i.y0+ye,Math.max(i.y0+ye,i.y1-ye))}}zoneLabel(e){return e.zone==="flat"||e.zone==="curl"?`${e.zone} ${e.side}`:e.zone}log(e,t="info",i={}){const s=this.state.log.length+1;this.state.log.push({n:s,text:e,kind:t,slice:this.play.slice,...i})}roll(e,t,i=0,s){const r=Yl(this.rng,s??t.toUpperCase(),this.skill(e,t),i);return this.log(`${this.short(e)} ${ql(r)}`,"roll",{roll:r}),r}rollValue(e,t,i,s=0){const r=Yl(this.rng,t,i,s);return this.log(`${this.short(e)} ${ql(r)}`,"roll",{roll:r}),r}*ask(e,t){const i=Array.isArray(t)?t:[t];let s=e;for(;;){const r=yield s;if(i.includes(r.kind))return r;s={...e,error:`Expected ${i.join(" or ")}, got ${r.kind}.`}}}startSlice(){const e=this.play;e.slice+=1,e.trails={},e.designations={};for(const t of Object.values(e.players))t.s,t.s=of(),t.halvedNext&&(t.s.halved=!0,t.halvedNext=!1),t.nextSlicePenalty>0&&(t.s.speedPenalty+=t.nextSlicePenalty,t.nextSlicePenalty=0),t.pancakedSlice!==null&&t.pancakedSlice<e.slice&&(this.skill(t.id,"agility")>=fS?(t.pancakedSlice=null,t.s.speedPenalty+=sh,this.log(`${this.short(t.id)} gets back on his feet (-${sh} movement).`,"event")):(t.pancakedSlice=null,t.s.noAction=!0,t.s.noMove=!0,this.log(`${this.short(t.id)} gets up slowly and can do nothing this timeslice.`,"event")));if(e.ball.inPlay&&e.ball.inPlaySlice!==null&&e.slice>=e.ball.inPlaySlice+2)for(const t of this.defensePlayers())this.markerAssignment(t.id).t==="man"&&t.freeSince===null&&(t.freeSince=e.slice);for(const t of e.engagements)t.mayDisengage=t.dominance>=1||t.lastResult!==null&&t.lastResult>0,t.blockersWonLast=t.lastResult!==null&&t.lastResult<0}setPos(e,t,i){const s=this.f(e),r=s.pos;s.pos={x:Math.round(t.x*1e3)/1e3,y:Math.round(t.y*1e3)/1e3},i!==void 0?s.facing=i:it(r,t)>1e-6&&(s.facing=an(Je(t,r))),(this.play.trails[e]??=[r]).push(s.pos)}faceEachOther(e,t){const i=this.f(e),s=this.f(t);i.facing=an(Je(s.pos,i.pos)),s.facing=an(Je(i.pos,s.pos))}static inSector(e,t,i){const s=((i-t)%360+360)%360,r=((e-t)%360+360)%360;return s===0?Math.abs(zS(t,e))<1e-6:r<=s+1e-6}towardsCenterSign(e){return e.x<=vn?1:-1}runLaneTarget(e,t){const i=this.offensePlayers().filter(l=>this.def(l.id).position==="OL").sort((l,u)=>l.pos.x-u.pos.x),s=i.length,r=Math.floor(s/2),o=i[r],a=e==="left"?i[r-1]:i[r+1],c=e==="left"?i[r-2]:i[r+2];switch(t){case"dive":return{x:(o.pos.x+a.pos.x)/2,y:(o.pos.y+a.pos.y)/2};case"offtackle":return{x:(a.pos.x+c.pos.x)/2,y:(a.pos.y+c.pos.y)/2};case"sprint":{const l=e==="left"?i[0]:i[s-1];return{x:l.pos.x+(e==="left"?-We:We),y:l.pos.y}}}}dirTo(e,t){return an(Je(t,e))}pointAt(e,t,i){return Fn(e,{x:Tn(t).x*i,y:Tn(t).y*i})}}function ZS(n,e,t){return t?We:e.side===n?ye:ye*1.5}function bh(n,e,t,i){const s=Je(e,n),r=Je(n,t),o=on(s,s),a=2*on(r,s),c=on(r,r)-i*i;if(o<Ot)return c<0?[0,1]:null;const l=a*a-4*o*c;if(l<=0)return null;const u=Math.sqrt(l),d=(-a-u)/(2*o),h=(-a+u)/(2*o);return h<0||d>1?null:[Math.max(0,d),Math.min(1,h)]}function cf(n,e,t,i){const s=n.players[e],r=s.pos,o=new Set(i.ignore??[]),a=new Set(i.passThrough??[]);let c=Je(t,r),l=wc(c);const u={from:r,to:r,requested:t,distance:0,clipped:null,boundary:null,events:[]};if(l<Ot||i.allowance<=Ot)return l>Ot&&(u.clipped={reason:"allowance"}),u;c=ai(c,1/l);let d=l;d>i.allowance+Ot&&(d=i.allowance,u.clipped={reason:"allowance"});const h=ye,f=ct-ye,m=n.boardMinY+ye,v=Jt-ye,g=(k,B,Y,W)=>{if(B>Ot){const X=(W-k)/B;if(X<d)return{L:Math.max(0,X),which:"hi"}}else if(B<-Ot){const X=(Y-k)/B;if(X<d)return{L:Math.max(0,X),which:"lo"}}return null},p=g(r.x,c.x,h,f);p&&(d=p.L,u.clipped={reason:"bounds"},u.boundary=p.which==="lo"?"left":"right");const T=g(r.y,c.y,m,v);if(T&&(d=T.L,u.clipped={reason:"bounds"},u.boundary=T.which==="lo"?"back":"end"),i.maxY!==void 0&&c.y>Ot){const k=(i.maxY-ye-r.y)/c.y;k<d&&(d=Math.max(0,k),u.clipped={reason:"line"},u.boundary=null)}if(i.stopY!==void 0&&c.y>Ot){const k=(i.stopY-r.y)/c.y;k<d&&k>=0&&(d=k,u.clipped={reason:"stopY"},u.boundary=null)}if(d<=Ot)return u.to=r,u;let S=Fn(r,ai(c,d));const x=Object.values(n.players).filter(k=>k.id!==e&&!o.has(k.id)),w=k=>n.engaged.has(k.id)&&!a.has(k.id),R=[];let A=1,D;const M=new Set;for(const k of x){const B=ZS(s.side,k,w(k)),Y=bh(r,S,k.pos,B-1e-5);if(!Y)continue;const[W]=Y;if(!(W>=A)){if(w(k)){const X=xh(r,S,k.pos),Z=Ps(on(Je(k.pos,r),Je(S,r))/Math.max(Ot,on(Je(S,r),Je(S,r))),0,1);let G=null,re=1/0;for(const pe of x){if(pe.id===k.id||!w(pe))continue;const Oe=xh(r,S,pe.pos);if(X*Oe>=0)continue;const Xe=it(k.pos,pe.pos)-We;if(Xe<Yy-1e-6||Xe>=We-1e-6)continue;const ut=Ps(on(Je(pe.pos,r),Je(S,r))/Math.max(Ot,on(Je(S,r),Je(S,r))),0,1);Math.abs(ut-Z)*d>We+Xe||Xe<re&&(re=Xe,G=pe)}if(G){const pe=[k.id,G.id].sort().join("|");if(!M.has(pe)){M.add(pe);const Oe=Ha(r,S,G.pos,We-1e-5),Xe=Math.min(W,Oe??1);R.push({t:Xe,at:za(r,S,Xe),kind:"hole",pair:[k.id,G.id],gap:re})}continue}const ue=Math.max(0,Ha(r,S,k.pos,We)??0);ue<A&&(A=ue,D=k.id);continue}W<A&&(A=W,D=k.id)}}D!==void 0&&(u.clipped={reason:"blocked",by:D});const b=[];for(const k of x){const B=bh(r,S,k.pos,We-1e-5);B&&b.push(B)}let P=!1;for(let k=0;k<50;k++){const B=b.find(([Y,W])=>A>Y&&A<W);if(!B)break;A=B[0],P=!0}P&&u.clipped?.reason!=="blocked"&&(u.clipped={reason:"overlap"}),P&&(u.boundary=null),u.events=R.filter(k=>k.t<=A+1e-9).sort((k,B)=>k.t-B.t);for(const k of i.watches??[]){const B=n.players[k.id];if(!B||B.id===e)continue;const Y=Ha(r,S,B.pos,k.reach);Y!==null&&Y<=A+1e-9&&u.events.push({t:Y,at:za(r,S,Y),kind:"watch",id:k.id,tag:k.tag})}return u.events.sort((k,B)=>k.t-B.t),S=za(r,S,A),u.to=S,u.distance=it(r,S),u}function mr(n,e,t=[]){const i=new Set(t);if(e.x<ye-1e-6||e.x>ct-ye+1e-6||e.y<n.boardMinY+ye-1e-6||e.y>Jt-ye+1e-6)return!1;for(const s of Object.values(n.players))if(!i.has(s.id)&&it(s.pos,e)<We-1e-5)return!1;return!0}function Zo(n,e,t,i,s=[]){for(let r=0;r<=36;r++)for(const o of r===0?[1]:[1,-1]){const a=t+o*r*5,c=Fn(e,ai(Tn(a),We));if(mr(n,c,[i,...s]))return c}return null}function JS(n,e,t){const i=n.players[e],s=n.players[t];return Zo(n,s.pos,an(Je(i.pos,s.pos)),e)}function jS(n,e){return it(n.pos,e.pos)-We}function uf(n,e,t,i,s){n.setPos(e,s);const r=n.f(e);r.s.moved=!0,r.s.engagedThisSlice=!0,n.faceEachOther(e,t),i==="run"&&n.markerAssignment(t).t==="man"&&n.freeDefender(t,"run blocked");let o=n.play.engagements.find(a=>a.defender===t);return o?(o.blockers.includes(e)||o.blockers.push(e),n.log(`${n.short(e)} joins the block on ${n.short(t)}: double team.`,"event"),o):(o={id:n.play.nextEngagementId++,defender:t,blockers:[e],kind:i,dominance:tf,formedSlice:n.play.slice,lastResult:null,mayDisengage:!1,blockersWonLast:!1,resolvedSlice:0},n.play.engagements.push(o),n.log(`${n.short(e)} ${i} blocks ${n.short(t)}.`,"event"),o)}function Eh(n,e,t){const i=n.f(e);i.pancakedSlice=n.play.slice,i.s.noAction=!0,i.s.noMove=!0,i.s.clutchEligible=!1,delete n.play.designations[e],n.log(`${n.short(e)} is PANCAKED by ${n.short(t)}!`,"event")}function*Th(n,e,t){const i=n.f(e.defender),s=n.f(t),r=n.play.defense,o=an(Je(s.pos,i.pos));for(;;){const a=yield*n.ask({kind:"breakThrough",coach:r,defender:e.defender,blocker:t},"breakThrough"),c=Number.isFinite(a.angle)?a.angle:o,l=Zo(n.moveCtx(),s.pos,c,e.defender);if(!l)break;n.setPos(e.defender,l);break}n.removeEngagement(e),i.s.moved=!0,i.s.brokeThrough=!0,i.s.clutchEligible=!0,i.facing=an(Je(n.qb().pos,i.pos));for(const a of e.blockers)n.f(a).cannotEngageUntil[e.defender]=n.play.slice+2;n.log(`${n.short(e.defender)} has BROKEN THROUGH the block of ${n.short(t)}.`,"event")}function hf(n,e,t,i,s,r,o,a){const c=n.f(e),l=n.f(t),u=Xl(Je(l.pos,c.pos)),d=n.moveCtx(),h=[e,t,...o],f=(p,T)=>{let S=Fn(l.pos,ai(u,p));const x=r||Math.abs(T)>1e-9?Fn(c.pos,ai(u,p)):c.pos;return S=GS(S,x,T),!mr(d,S,h)||!mr(d,x,h)||it(S,x)<We-1e-6?null:{w:x,l:S}};let m=Math.max(0,Math.min(Ky,i)),v=Math.max(-th,Math.min(th,s)),g=f(m,v);for(let p=9;p>=0&&!g;p--)g=f(m*p/10,v*p/10),g&&(m=m*p/10,v=v*p/10);if(!g)return{push:0,turn:0};n.setPos(t,g.l),n.setPos(e,g.w),n.faceEachOther(e,t);for(const p of o){const T=n.f(p),S=n.f(a);if(it(T.pos,S.pos)>We+.05){const x=Zo(d,S.pos,an(Je(T.pos,S.pos)),p,[e,t]);x&&n.setPos(p,x)}}return{push:Math.round(m*100)/100,turn:Math.round(v)}}function*df(n,e){const t=n.play;e.resolvedSlice=t.slice;const i=n.blockKind(e.blockers[0])??e.kind;e.kind=i;let s=0,r=!1;for(const f of e.blockers){if(!n.canAct(f)){n.log(`${n.short(f)} is still getting up and cannot block properly (successrate 0).`,"event");continue}const m=n.blockKind(f)??e.kind,v=n.roll(f,m==="pass"?"passblock":"runblock");s+=v.successRate,v.perfect&&(r=!0)}const o=n.f(e.defender);let a=0,c=!1;if(n.canAct(e.defender)){const f=n.roll(e.defender,"passrush",0,"RUSH");a=f.successRate,c=f.perfect}else n.log(`${n.short(e.defender)} is still getting up and cannot rush (successrate 0).`,"event");const l={perfect:c};o.s.rushPerfect=l.perfect;const u=a-s;e.lastResult=u,e.dominance=Math.max(tf,Math.min(pS,e.dominance+u)),n.log(`${e.kind==="pass"?"Pass":"Run"} block ${e.blockers.map(f=>n.short(f)).join(" + ")} vs ${n.short(e.defender)}: timeslice result ${u>=0?"+":""}${u}, dominance ${e.dominance}.`,"event");let d,h;if(e.kind==="pass"?(d=u<=-rh||r,h=u>=rh||l.perfect):(d=u<=-10||r,h=u>=_S||l.perfect),d&&h&&(d=h=!1,n.log("Both sides rolled a PERFECT: the pancakes cancel out.","event")),d){Eh(n,e.defender,e.blockers[0]),n.removeEngagement(e);return}if(h){let f=e.blockers[0];if(e.blockers.length>1){const m=yield*n.ask({kind:"pancakeChoice",coach:t.defense,defender:e.defender,blockers:[...e.blockers]},"pancakeChoice");e.blockers.includes(m.blocker)&&(f=m.blocker)}Eh(n,f,e.defender),yield*Th(n,e,f);return}if(e.dominance>=gS){yield*Th(n,e,e.blockers[0]);return}if((e.dominance>=mS||e.kind==="run"&&u>=vS)&&(o.s.clutchEligible=!0),u!==0){const f=u>0,m=f?t.defense:t.offense,v=f?[e.defender]:[...e.blockers],g=f?e.blockers[0]:e.defender,p=yield*n.ask({kind:"pushAround",coach:m,winner:v[0],loser:g,blockers:[...e.blockers]},"pushAround"),T=p.anchor&&v.includes(p.anchor)?p.anchor:v[0],S=f?g:e.defender;if(Math.abs(p.push)>1e-9||Math.abs(p.turn)>1e-9){const x=f?e.blockers.slice(1):e.blockers.filter(R=>R!==T),w=hf(n,T,S,p.push,p.turn,p.follow,x,e.defender);(w.push>0||w.turn!==0)&&n.log(`${n.short(T)} pushes ${n.short(S)} around: ${w.push>0?`${w.push} cm back`:""}${w.push>0&&w.turn!==0?", ":""}${w.turn!==0?`turned ${w.turn}°`:""}.`,"event")}}}function Kl(n,e,t,i){const s=n.f(t),r=n.f(e),o=an(Je(r.pos,s.pos)),a=n.moveCtx();for(let c=0;c<=36;c++)for(const l of c===0?[1]:[1,-1]){const u=o+l*c*5,d=Fn(s.pos,ai(Tn(u),We));if(mr(a,d,[e])&&!(i!==void 0&&d.y>i-ye+1e-6))return d}return null}function Io(n,e,t){const i=n.f(e),s=n.f(t);if(!n.canAct(e))return{ok:!1,reason:"The blocker is down."};if(n.isLying(t))return{ok:!1,reason:"The defender is lying on the ground."};if(n.isEngaged(e))return{ok:!1,reason:"The blocker is already engaged."};if((i.cannotEngageUntil[t]??0)>n.play.slice)return{ok:!1,reason:"The defender broke through this blocker: he may not engage him this timeslice."};if(s.s.disengagedFrom.includes(e))return{ok:!1,reason:"The defender disengaged from this blocker this timeslice."};const r=n.blockKind(e);if(!r)return{ok:!1,reason:"The player has no blocking marker this timeslice."};if(r==="run"&&!n.effectiveInPlay())return{ok:!1,reason:"Run blocking is only allowed once the ball is in play."};if(n.isCarrier(t))return{ok:!1,reason:"Cannot block the ball carrier."};const o=n.play.engagements.find(a=>a.defender===t);return o&&o.blockers.length>=2?{ok:!1,reason:"At most two blockers may double team a defender."}:{ok:!0}}function QS(n,e){switch(e.kind){case"tackled":return`Tackled by ${n.short(e.by)}.`;case"sacked":return`Sacked by ${n.short(e.by)}!`;case"outOfBounds":return"Out of bounds.";case"incomplete":return"Incomplete pass.";case"interception":return`Intercepted by ${n.short(e.by)}${e.touchdown?" and returned for a touchdown!":e.returnYards>0?`, returned ${e.returnYards} yards.`:"."}`;case"fumbleLost":return`Fumble recovered by ${n.short(e.by)}${e.touchdown?" and returned for a touchdown!":e.returnYards>0?`, returned ${e.returnYards} yards.`:"."}`;case"touchdown":return`TOUCHDOWN ${n.short(e.by)}!`;case"safety":return"SAFETY!";case"fakeTackled":return"The fake runner is tackled; he never had the ball."}}function Sn(n,e,t){const i=n.play;if(i.result)return;let s=e;(s.kind==="tackled"||s.kind==="sacked"||s.kind==="outOfBounds"||s.kind==="touchdown")&&s.kind!=="touchdown"&&t>=Cn&&(s={kind:"touchdown",by:i.ball.carrier??""}),(s.kind==="tackled"||s.kind==="sacked"||s.kind==="outOfBounds")&&t<Un&&i.boardMinY<Un&&(s={kind:"safety"});const o=s.kind==="interception"||s.kind==="fumbleLost",a=s.kind==="touchdown",c=s.kind==="incomplete"&&!i.dpi?i.los:Ps(t,i.boardMinY,Cn);i.result={ending:s,spotY:c,yards:Math.round(sf(c-i.los)*10)/10,turnover:o,autoFirstDown:i.dpi&&!o,scored:a},i.phase="over",n.log(QS(n,s),s.kind==="touchdown"||s.kind==="safety"?"score":"event"),a&&n.log(`${_o} points.`,"score")}function ff(n,e,t){const i=n.f(e),s=n.f(t);if(it(i.pos,s.pos)<=We+.05){n.faceEachOther(e,t);return}const r=JS(n.moveCtx(),e,t);r&&n.setPos(e,r),n.faceEachOther(e,t)}function*Mr(n,e,t,i={}){const s=n.play,r=n.f(e),o=n.f(t);r.s.tackled=!0,ff(n,e,t);const a=s.ball.apparent===t&&s.ball.carrier!==t;a&&(s.ball.apparent=null,n.log(`${n.short(e)} hits ${n.short(t)}: he does not have the ball! The quarterback kept it.`,"event"));let c=0;const l=[];i.cleanShot&&(c+=iS,l.push("clean shot +5"));let u=!1;if(i.allowOutOfBounds!==!1&&n.sidelineGap(o.pos)<=Xy+1e-6&&!a&&(yield*n.ask({kind:"tackleStyle",coach:s.defense,tackler:e,carrier:t},"tackleStyle")).style==="outOfBounds"&&(c+=sS,u=!0,l.push("out of bounds +5")),i.clutch){const m=Math.ceil(n.skill(e,"tackle")/2);c-=m,l.push(`clutch -${m}`)}const d=a?0:n.skill(t,"running"),h=n.roll(e,"tackle",c,l.length?`TACKLE (${l.join(", ")})`:"TACKLE");if(a)return h.success&&h.roll<h.target-d&&(o.pancakedSlice=s.slice,o.s.noAction=!0,o.s.noMove=!0,n.log(`${n.short(t)} is brought down anyway.`,"event")),"fakeRevealed";if(h.perfect&&!u)return n.log(`${n.short(e)} rolls a PERFECT tackle: ${n.short(t)} FUMBLES!`,"event"),Uo(n,o.pos),"fumble";if(h.success&&h.roll<h.target-d){const m=n.def(t).position==="QB"&&!s.ball.inPlay&&o.pos.y<s.los?{kind:"sacked",by:e}:{kind:"tackled",by:e};return Sn(n,u?{kind:"outOfBounds"}:m,o.pos.y),"down"}if(h.success)return o.draggedBy.includes(e)||o.draggedBy.push(e),o.halvedNext=!0,n.log(`${n.short(t)} drags ${n.short(e)} along: stopped in his tracks.`,"event"),"dragging";n.log(`${n.short(e)} MISSES the tackle on ${n.short(t)}.`,"event"),r.halvedNext=!0,o.cannotTackleUntil[e]=s.slice+2;const f=yield*n.ask({kind:"missedTackle",coach:s.offense,carrier:t,tackler:e},"missedTackle");if(f.angle!==null&&Number.isFinite(f.angle)){const m=Zo(n.moveCtx(),r.pos,f.angle,t);m&&m.y<=r.pos.y+1e-6&&(n.setPos(t,m),n.log(`${n.short(t)} steps around ${n.short(e)}.`,"event"))}return"missed"}function Uo(n,e){const t=n.play;t.ball.loose={...e},t.ball.carrier=null,t.ball.apparent=null,t.ball.inPlay||(t.ball.inPlay=!0,t.ball.inPlaySlice=t.slice);for(const i of Object.values(t.players))i.draggedBy=[]}function*pf(n){const e=n.play,t=e.ball.loose,i=Object.values(e.players).filter(m=>m.pancakedSlice===null&&it(m.pos,t)-ye<=ef+1e-6);if(i.length===0)return n.log("Nobody is near the loose ball.","event"),"none";const r=i.map(m=>({p:m,r:n.rollValue(m.id,"AGILITY/2",Math.ceil(n.skill(m.id,"agility")/2))})).filter(m=>m.r.success);if(r.length===0)return n.log("Nobody comes up with the ball.","event"),"none";const o=Math.max(...r.map(m=>m.r.successRate)),a=r.filter(m=>m.r.successRate===o);let c=a[0];const l=a.find(m=>m.p.side==="offense"),u=a.find(m=>m.p.side==="defense");if(l&&u){n.log(`${n.short(l.p.id)} and ${n.short(u.p.id)} are tied: one more roll each.`,"event");for(let m=0;m<100;m++){const v=n.rollValue(l.p.id,"AGILITY/2",Math.ceil(n.skill(l.p.id,"agility")/2)),g=n.rollValue(u.p.id,"AGILITY/2",Math.ceil(n.skill(u.p.id,"agility")/2));if(v.rawRate>g.rawRate){c=l;break}if(g.rawRate>v.rawRate){c=u;break}}}const d=c.p.id;n.log(`${n.short(d)} recovers the ball!`,"event");const h=n.engagementOf(d);if(h&&n.removeEngagement(h),e.ball.loose=null,c.p.side==="offense")return e.ball.carrier=d,e.ball.inPlay=!0,"offense";const f=mf(n,d,c.p.pos.y);return Sn(n,{kind:"fumbleLost",by:d,returnYards:f.yards,touchdown:f.touchdown},f.spotY),"defense"}function mf(n,e,t){let i=0,s=!1;for(let o=0;o<50;o++){const a=n.roll(e,"agility");if(!a.success)break;if(a.perfect){s=!0,n.log(`${n.short(e)} rolls a PERFECT return: touchdown!`,"score");break}const c=n.rng.die(20);if(i+=c,n.log(`${n.short(e)} returns it ${c} yards (${i} in total).`,"event"),t-vo(i)<=Un){s=!0;break}if(c!==20)break;n.log("A 20 on the return: he keeps going.","event")}let r=t-vo(i);return s?r=Un:r>=Cn&&(r=Cn-vo(Ni)),{yards:i,touchdown:s,spotY:r}}function gf(n,e,t,i){const s=Je(i,t);if(Math.hypot(s.x,s.y)<1e-6)return{to:t};const o=e.mode;switch(o.t){case"none":return{error:o.reason};case"free":case"closer":case"zone":return{to:i};case"fixed":{const a=Tn(o.angle),c=Math.max(0,on(s,a));return{to:Fn(t,ai(a,c))}}case"along":{const a=Tn(o.angle),c=on(s,a);return{to:Fn(t,ai(a,c))}}case"sector":{const a=an(s);return Ac.inSector(a,o.from,o.to)?{to:i}:{error:`That direction is outside the allowed ${o.label} (${a.toFixed(0)}°).`}}}}function ex(n,e,t,i){const s=e.mode;if(s.t==="closer"&&it(i,s.target)>it(t,s.target)-1e-6&&it(t,i)>1e-6)return`The move must end closer to the ${s.label}.`;if(s.t==="zone"){const r=n.inZone(t,s.zone);if(r&&!n.inZone(i,s.zone))return`A defender in zone coverage stays inside his ${n.zoneLabel(s.zone)} zone.`;if(!r){const o=n.nearestInZone(t,s.zone);if(it(i,o)>it(t,o)-1e-6&&it(t,i)>1e-6)return`Outside his zone the defender must move towards his ${n.zoneLabel(s.zone)} zone.`}}if(e.notFartherFrom){const r=n.f(e.notFartherFrom).pos;if(it(i,r)>it(t,r)+1e-6&&it(i,r)>We+.5)return`The move may not end farther from ${n.short(e.notFartherFrom)}.`}return null}function*Bn(n,e,t,i){const s=n.f(e),r=s.pos,o=a=>{n.setPos(e,a),s.s.movedCm=it(r,a)};s.s.moved=!0;for(const a of t.events){if(a.kind==="hole"){if(o(a.at),!n.roll(e,"agility",0,`AGILITY (hit the hole between ${n.short(a.pair[0])} and ${n.short(a.pair[1])}, ${a.gap.toFixed(1)} cm)`).success)return s.s.stranded=!0,n.log(`${n.short(e)} is stranded in front of the hole.`,"event"),{stopped:!0};n.log(`${n.short(e)} hits the hole.`,"event");continue}if(i){if(o(a.at),(yield*i(a))==="stop")return{stopped:!0};if(n.play.result)return{stopped:!0}}}return o(t.to),{stopped:!1}}function zn(n,e,t,i={}){const s=n.f(e.id).pos,r=gf(n,e,s,t);if("error"in r)return r;const o=cf(n.moveCtx(),e.id,r.to,{allowance:e.allowance,...i}),a=ex(n,e,s,o.to);return a?{error:a}:{plan:o}}function tx(n,e,t){return zn(n,e,t,{watches:[],stopY:e.id===n.effectiveCarrier()?Cn:void 0,maxY:Ss(n,e.id)})}function Ss(n,e){if(n.def(e).position==="OL"&&!n.effectiveInPlay())return n.play.los}function*Zi(n,e){let t;for(;;){if(n.play.result)return;const i=e.specs(),s=i.filter(l=>!l.done);if(s.length===0)return;if(s.every(l=>l.mode.t==="none"&&!l.mayDisengage&&!l.mayBlitz)){if(e.finishRemaining)yield*e.finishRemaining(s);else for(const l of s)n.f(l.id).s.moved=!0;return}const r={kind:"move",coach:e.coach,phase:e.phase,movers:i,canFinish:!0,title:e.title,error:t};t=void 0;const o=yield*n.ask(r,["move","skipMove","disengage","declareBlitz","finish"]);if(o.kind==="finish"){e.finishRemaining&&(yield*e.finishRemaining(s));return}const a=s.find(l=>l.id===o.id);if(!a){t="That player cannot move now.";continue}if(o.kind==="skipMove"){e.skip&&(yield*e.skip(a)),a.done=!0,n.f(a.id).s.moved=!0;continue}if(o.kind==="declareBlitz"){if(!a.mayBlitz||!e.declareBlitz){t="That player cannot declare a blitz.";continue}e.declareBlitz(a);continue}if(o.kind==="disengage"){if(!a.mayDisengage||!e.disengage){t="That player may not disengage.";continue}const l=yield*e.disengage(a,o.to);l&&(t=l);continue}if(a.mode.t==="none"){t=a.mode.reason;continue}const c=yield*e.run(a,o.to);c&&(t=c)}}function pt(n,e,t,i){const s=n.f(e),r=s.s.moved;return n.canAct(e)?s.s.noMove?{id:e,allowance:0,mode:{t:"none",reason:"May not move this timeslice."},done:r}:s.s.stranded?{id:e,allowance:0,mode:{t:"none",reason:"Stranded in front of a hole."},done:r}:t<=1e-9&&i.t!=="none"?{id:e,allowance:0,mode:{t:"none",reason:"No movement available."},done:r}:{id:e,allowance:t,mode:i,done:r}:{id:e,allowance:0,mode:{t:"none",reason:s.pancakedSlice!==null?"Lying on the ground.":"Getting up: may do nothing this timeslice."},done:r}}function*nx(n){const e=n.play,t=()=>n.defensePlayers().filter(i=>n.assignment(i.id).t==="blitz").map(i=>{const s=i.pos.y-ye-e.los,r=pt(n,i.id,Math.max(0,s/2),{t:"sector",from:90,to:-90,label:"approach to the line of scrimmage"});return r.note="Pre-snap: up to half the distance to the line, approaching it.",r});if(t().length!==0){yield*Zi(n,{coach:e.defense,phase:"defenseReveal",title:"Pre-snap movement: blitzers may creep towards the line",specs:t,*run(i,s){const r=zn(n,i,s,{});if("error"in r)return r.error;const o=n.f(i.id).pos;return r.plan.to.y>=o.y-1e-6&&it(o,r.plan.to)>1e-6?"Pre-snap movement must approach the line of scrimmage.":(yield*Bn(n,i.id,r.plan),n.log(`${n.short(i.id)} creeps up before the snap.`,"event"),null)}});for(const i of n.defensePlayers())i.s.moved=!1,i.s.movedCm=0}}function*ix(n){const e=n.play,t=()=>{const s=[];for(const r of n.offensePlayers()){const o=n.blockKind(r.id);if(!o||n.isCarrier(r.id))continue;const a=n.engagementOf(r.id);if(a){a.blockers.length>1&&a.blockersWonLast&&a.blockers.includes(r.id)&&s.push({id:r.id,allowance:0,designated:null,engageable:[],mayEngage:!1,kind:o,done:r.s.moved,mayRelease:!0,crossesLosForbidden:!1});continue}const c=r.s.moved?[]:n.defensePlayers().filter(u=>jS(r,u)<=Yo+1e-6&&Io(n,r.id,u.id).ok&&Kl(n,r.id,u.id,Ss(n,r.id))!==null).map(u=>u.id),l=o==="pass"||n.effectiveInPlay();s.push({id:r.id,allowance:n.allowance(r.id),designated:e.designations[r.id]??null,engageable:c,mayEngage:l&&n.canAct(r.id),kind:o,done:r.s.moved,mayRelease:!1,crossesLosForbidden:Ss(n,r.id)!==void 0})}return s};let i;for(;;){if(e.result)return;const s=t();if(s.length===0)return;const r=yield*n.ask({kind:"freeBlockers",coach:e.offense,blockers:s,error:i},["move","designate","engage","release","finish"]);if(i=void 0,r.kind==="finish")return;const o=s.find(l=>l.id===(r.kind==="move"?r.id:r.blocker));if(!o){i="That player is not a free blocker.";continue}if(r.kind==="release"){const l=n.engagementOf(o.id);if(!l||!o.mayRelease){i="That blocker may not leave the double team.";continue}l.blockers=l.blockers.filter(u=>u!==o.id),n.log(`${n.short(o.id)} leaves the double team on ${n.short(l.defender)}.`,"event");continue}if(r.kind==="designate"){if(r.defender===null)delete e.designations[o.id];else{if(!n.has(r.defender)||n.sideOf(r.defender)!=="defense"){i="Designate a defender.";continue}e.designations[o.id]=r.defender,n.log(`${n.short(o.id)} designates ${n.short(r.defender)}.`,"decision")}continue}if(r.kind==="engage"){if(!o.engageable.includes(r.defender)||!o.mayEngage){const u=Io(n,o.id,r.defender);i=u.ok?"The defender is not within 2 cm.":u.reason;continue}const l=Kl(n,o.id,r.defender,Ss(n,o.id));if(!l){i="There is no room to engage that defender.";continue}e.designations[o.id]=r.defender,uf(n,o.id,r.defender,o.kind,l);continue}if(o.done){i="That blocker has already moved.";continue}const a=pt(n,o.id,o.allowance,{t:"free"}),c=zn(n,a,r.to,{maxY:Ss(n,o.id)});if("error"in c){i=c.error;continue}yield*Bn(n,o.id,c.plan),n.log(`${n.short(o.id)} moves ${c.plan.distance.toFixed(1)} cm.`,"event")}}function*sx(n){const e=n.play;for(const t of[...e.engagements].sort((i,s)=>i.id-s.id)){if(e.result)return;e.engagements.includes(t)&&t.resolvedSlice!==e.slice&&(yield*df(n,t))}}function rx(n,e){const t=[],i=n.f(e);for(const s of n.defensePlayers())!n.canAct(s.id)||s.s.tackled||(i.cannotTackleUntil[s.id]??0)>n.play.slice||i.draggedBy.includes(s.id)||(n.isEngaged(s.id)?s.s.clutchEligible&&t.push({id:s.id,reach:We+ko,tag:"clutch"}):(t.push({id:s.id,reach:We+Tc,tag:"jump"}),s.s.brokeThrough&&s.s.clutchEligible&&t.push({id:s.id,reach:We+ko,tag:"clutch"})));return t}function*wh(n,e,t){const i=n.play,s=n.f(e);if(!s.s.clutchEligible||s.s.tackled||!n.canAct(e))return"continue";if(n.def(t).position==="QB"&&i.ball.carrier===t&&i.slice===1&&!s.s.rushPerfect)return n.log(`${n.short(e)} could clutch tackle the QB but did not roll a PERFECT rush in timeslice 1.`,"info"),"continue";if(!(yield*n.ask({kind:"clutchTackle",coach:i.defense,defender:e,carrier:t},"clutchTackle")).attempt)return"continue";const a=yield*Mr(n,e,t,{clutch:!0,allowOutOfBounds:!0});return a==="down"||a==="fumble"||a==="dragging"?"stop":"continue"}function*ox(n,e,t){const i=n.play,s=n.f(e),r=n.defensePlayers().filter(a=>n.canAct(a.id)&&!a.s.tackled&&!a.s.declinedJump&&!n.isEngaged(a.id)&&(s.cannotTackleUntil[a.id]??0)<=i.slice&&!s.draggedBy.includes(a.id)&&it(a.pos,t)-We<=Tc+1e-6).map(a=>a.id);if(r.length===0)return"continue";const o=yield*n.ask({kind:"jumpTackle",coach:i.defense,carrier:e,candidates:r},"jumpTackle");if(o.defender===null||!r.includes(o.defender)){for(const a of r)n.f(a).s.declinedJump=!0;return"continue"}return n.log(`${n.short(o.defender)} jumps the ball carrier.`,"event"),yield*Mr(n,o.defender,e,{allowOutOfBounds:!0}),"stop"}function*ax(n){const e=n.play;if(e.ball.loose)return;if(n.handoffPending()){const i=n.qb().id,s=e.handoff;if(yield*Ah(n,i,`Move the quarterback to hand off to ${n.short(s.runner)}`),e.result||e.ball.loose)return;if(n.gap(i,s.runner)>Vy+1e-6){s.fumbled=!0,n.log(`${n.short(s.runner)} is more than 3 cm from the quarterback at the hand-off: FUMBLE!`,"event"),Uo(n,n.f(s.runner).pos);return}n.log(`${n.short(i)} hands the ball to ${n.short(s.runner)}.`,"event"),s.fake?n.fakeHandoff(s.runner):(e.ball.carrier=s.runner,n.ballNowInPlay()),s.done=!0}const t=n.effectiveCarrier();t&&(yield*Ah(n,t,`Move the ball carrier ${n.short(t)}`))}function*Ah(n,e,t){const i=n.play,s=n.f(e);for(const c of n.defensePlayers())c.s.declinedJump=!1;for(const c of n.defensePlayers()){if(i.result)return;if(!(!c.s.clutchEligible||c.s.tackled)&&it(c.pos,s.pos)-We<=ko+1e-6&&(yield*wh(n,c.id,e))==="stop")return}if(i.result||i.ball.loose)return;const r=i.handoff&&i.handoff.done&&i.handoff.slice===i.slice&&i.handoff.runner===e,o=()=>{let c;if(r){const l=n.offMarker(e);if(l.t==="run"){const u=n.runLaneTarget(l.side,l.lane);c=pt(n,e,n.allowance(e),{t:"fixed",angle:n.dirTo(n.f(e).pos,u)}),c.mandatory=!0,c.note=`Runs ${l.lane==="dive"?"the dive":l.lane==="offtackle"?"off tackle":"the sprint"} ${l.side}.`}else c=pt(n,e,n.allowance(e),{t:"free"})}else c=pt(n,e,n.allowance(e),{t:"free"});return s.draggedBy.length>0&&(c.note=`Dragging ${s.draggedBy.map(l=>n.short(l)).join(", ")}: movement halved.`),c};if(o().mode.t==="none"?n.log(`${n.short(e)} cannot move this timeslice.`,"info"):yield*Zi(n,{coach:i.offense,phase:"ballCarrier",title:t,specs:()=>[o()],*run(c,l){const u=zn(n,c,l,{watches:rx(n,e),stopY:Cn,ignore:n.f(e).draggedBy});if("error"in u)return u.error;const d=u.plan,h=yield*Bn(n,e,d,function*(m){return m.tag==="clutch"?yield*wh(n,m.id,e):m.tag==="jump"?yield*ox(n,e,n.f(e).pos):"continue"});if(i.result||i.ball.loose)return null;const f=n.f(e).pos;if(n.log(`${n.short(e)} runs ${n.f(e).s.movedCm.toFixed(1)} cm.`,"event"),!h.stopped){if(d.boundary==="left"||d.boundary==="right")return i.ball.apparent===e?(n.revealFake(),n.log(`${n.short(e)} runs out of bounds: he never had the ball.`,"event")):Sn(n,{kind:"outOfBounds"},f.y),null;if(d.boundary==="back")return i.ball.apparent!==e&&Sn(n,{kind:"outOfBounds"},f.y),null}return f.y>=Cn-1e-6&&i.ball.carrier===e&&Sn(n,{kind:"touchdown",by:e},f.y),null}}),i.result||i.ball.loose)return;const a=n.f(e);for(const c of[...a.draggedBy]){if(i.result||i.ball.loose)return;if(!n.canAct(c)){a.draggedBy=a.draggedBy.filter(l=>l!==c);continue}ff(n,c,e),n.f(c).s.tackled=!1,a.draggedBy=a.draggedBy.filter(l=>l!==c),n.log(`${n.short(c)}, dragged along, tries again.`,"event"),yield*Mr(n,c,e,{allowOutOfBounds:!0})}}function Zl(n,e,t){const i=n.play,s=[],r=n.effectiveCarrier(),o=n.f(e);r&&t&&(n.f(r).cannotTackleUntil[e]??0)<=i.slice&&s.push({id:r,reach:We+.05,tag:"carrier"});for(const[a,c]of Object.entries(i.designations))c===e&&(!n.has(a)||!Io(n,a,e).ok||o.s.disengagedFrom.includes(a)||s.push({id:a,reach:We+Yo,tag:"engage"}));return s}function*lx(n,e,t){const i=n.play;if(!Io(n,e,t).ok)return"continue";const r=n.blockKind(e),o=n.f(t),a=Kl(n,e,t,Ss(n,e));if(!a||!(yield*n.ask({kind:"engageOffer",coach:i.offense,blocker:e,defender:t,stopAt:o.pos,kind2:r},"engageOffer")).accept)return"continue";const l=uf(n,e,t,r,a);return yield*df(n,l),"stop"}function*cx(n){const e=n.play,t=n.effectiveInPlay(),i=n.effectiveCarrier(),s=()=>{const r=[];for(const o of n.defensePlayers()){const a=n.assignment(o.id),c=n.engagementOf(o.id);if(c){if(c.mayDisengage&&n.canAct(o.id)){const l=pt(n,o.id,Math.max(0,n.allowance(o.id)-aS),{t:"none",reason:"Engaged in a block; may disengage."});l.mayDisengage=!0,l.note="May disengage (-1 movement, not towards the blocker).",r.push(l)}continue}if(a.t==="blitz"){const l=pt(n,o.id,n.allowance(o.id),{t:"free"});!t&&i&&(l.notFartherFrom=i),l.mayTackle=!0,l.note=t?"Free defender.":"Blitzing: rushes the quarterback.",r.push(l)}else if(a.t==="free"){const l=pt(n,o.id,n.allowance(o.id),{t:"free"});l.mayTackle=!0,l.note="Free defender.",r.push(l)}else if(a.t==="spy"&&!t){const l=pt(n,o.id,n.allowance(o.id),{t:"none",reason:"A spy moves in the spy & zone phase unless he declares a blitz."});l.mayBlitz=!0,r.push(l)}}return r};yield*Zi(n,{coach:e.defense,phase:"defenders",title:t?"Move free defenders":"Move blitzers",specs:s,declareBlitz(r){n.setAssignment(r.id,{t:"blitz"}),e.spyBlitz[r.id]=!0,n.f(r.id).s.moved=!1,n.log(`${n.short(r.id)} abandons the spy and blitzes.`,"event")},*disengage(r,o){const a=n.engagementOf(r.id),c=n.f(r.id),l=Xl(Je(c.pos,n.f(a.blockers[0]).pos)),u=Je(o,c.pos);if(Math.hypot(u.x,u.y)>1e-6&&on(Xl(u),l)<-1e-6)return"A disengaging defender may not move closer to the blocker.";const d=[...a.blockers];n.removeEngagement(a),c.s.disengagedFrom=d,n.log(`${n.short(r.id)} disengages from ${d.map(m=>n.short(m)).join(" and ")}.`,"event");const h={...r,mode:{t:"free"}},f=zn(n,h,o,{watches:Zl(n,r.id,!0),passThrough:d});return"error"in f?f.error:(yield*Bn(n,r.id,f.plan,function*(m){return yield*Jl(n,r.id,m)}),null)},*run(r,o){const a=zn(n,r,o,{watches:Zl(n,r.id,r.mayTackle??!1)});return"error"in a?a.error:(yield*Bn(n,r.id,a.plan,function*(c){return yield*Jl(n,r.id,c)}),e.result||n.log(`${n.short(r.id)} moves ${n.f(r.id).s.movedCm.toFixed(1)} cm.`,"event"),null)}})}function*Jl(n,e,t){if(t.tag==="engage")return yield*lx(n,t.id,e);if(t.tag==="carrier"){const i=n.effectiveCarrier();return!i||i!==t.id?"continue":(yield*Mr(n,e,i,{allowOutOfBounds:!0}),"stop")}return"continue"}function ux(n,e,t){const i=n.towardsCenterSign(e);switch(t){case"fly":return{from:-gs,to:gs,label:"fly cut (straight upfield)"};case"hook":return{from:_s,to:-_s,label:"hook cut (back towards the quarterback)"};case"in":return i>0?{from:gs,to:_s,label:"cut in (towards the middle)"}:{from:-_s,to:-gs,label:"cut in (towards the middle)"};case"out":return i>0?{from:-_s,to:-gs,label:"cut out (towards the sideline)"}:{from:gs,to:_s,label:"cut out (towards the sideline)"}}}function hx(n,e){const t=n.play,i=n.f(e),s=n.effectiveOffMarker(e),r=n.allowance(e),o=i.sidelineSlice!==null&&i.sidelineSlice===t.slice-1,a=i.sidelineSlice!==null&&i.sidelineSlice<t.slice-1,c=s.t==="cut"||s.t==="runblock";if(o&&!c)return pt(n,e,0,{t:"none",reason:"Reached the sideline last timeslice: waits here."});if(i.cutSlice!==null&&i.cutSlice<t.slice)return a?pt(n,e,r,{t:"along",angle:0,label:"along the sideline"}):pt(n,e,r,{t:"fixed",angle:i.routeDir??0});switch(s.t){case"dir":return s.dir==="up"?pt(n,e,r,{t:"sector",from:-nh,to:nh,label:"up (within 5°)"}):pt(n,e,r,{t:"fixed",angle:s.dir==="left"?-s.angle:s.angle});case"continue":return a?pt(n,e,r,{t:"along",angle:0,label:"along the sideline"}):i.routeDir===null?pt(n,e,0,{t:"none",reason:"No direction to continue in."}):pt(n,e,r,{t:"fixed",angle:i.routeDir});case"delay":return pt(n,e,Math.min(qy,r),{t:"free"});case"cut":{const l=pt(n,e,r,{t:"sector",...ux(n,i.pos,s.cut)});return l.cutPending=!0,l}case"run":return pt(n,e,r,{t:"fixed",angle:i.routeDir??0});default:return a&&i.routeDir!==null?pt(n,e,r,{t:"along",angle:0,label:"along the sideline"}):pt(n,e,0,{t:"none",reason:t.slice>4?"No route to follow.":"No movement marker this timeslice."})}}function*Ch(n,e,t){const i=n.play;for(const s of n.defensePlayers()){if(i.result)return;const r=n.assignment(s.id);if(r.t!=="man"||r.target!==e||!n.canAct(s.id)||n.isEngaged(s.id)||s.s.moved)continue;const o=n.roll(s.id,"cover",0,"COVER (coverage movement)");if(o.critical){s.s.noMove=!0,s.s.contestModifier+=uS,n.log(`${n.short(s.id)} loses his man completely: no movement, -5 to contest.`,"event"),s.s.moved=!0;continue}o.success||(s.s.speedPenalty+=lS,s.s.contestModifier+=cS,n.log(`${n.short(s.id)} has trouble following: -2 movement, -2 to contest.`,"event")),t&&(s.s.speedPenalty+=dS);const a=()=>{const c=pt(n,s.id,n.allowance(s.id),{t:"free"});return c.notFartherFrom=e,c.mayTackle=n.effectiveCarrier()===e,c.note=`Man coverage on ${n.short(e)}.`,[c]};yield*Zi(n,{coach:i.defense,phase:"receivers",title:`Man coverage: ${n.short(s.id)} follows ${n.short(e)}`,specs:a,*run(c,l){const u=zn(n,c,l,{watches:Zl(n,s.id,c.mayTackle??!1)});return"error"in u?u.error:(yield*Bn(n,s.id,u.plan,function*(d){return yield*Jl(n,s.id,d)}),null)},*finishRemaining(c){for(const l of c)n.f(l.id).s.moved=!0}}),s.s.moved=!0}}function*dx(n){const e=n.play,t=n.effectiveCarrier(),i=o=>n.def(o).position!=="QB"&&o!==t&&!n.blockKind(o)&&!n.isEngaged(o)&&e.ball.carrier!==o,s=()=>n.offensePlayers().filter(o=>i(o.id)).map(o=>hx(n,o.id)),r=function*(o,a){const c=n.f(o.id);let l=!1,u=o;if(a!==null&&u.mode.t!=="none"){const d=n.effectiveOffMarker(o.id);if(u.cutPending&&d.t==="cut"){const v=c.pos,g=gf(n,u,v,a);if("error"in g)return g.error;const p=n.roll(o.id,"routes",0,`ROUTES (cut ${d.cut})`);if(c.cutSlice=e.slice,c.sidelineSlice=null,p.critical)return c.s.noMove=!0,n.log(`${n.short(o.id)} stumbles on his cut and may not move.`,"event"),c.s.moved=!0,c.routeDir=an(Je(g.to,v)),yield*Ch(n,o.id,!1),null;p.success||(c.s.speedPenalty+=hS,n.log(`${n.short(o.id)} makes a sloppy cut: -2 movement.`,"event")),p.perfect&&(l=!0,n.log(`${n.short(o.id)} makes a PERFECT cut: his man loses a step.`,"event")),u={...u,allowance:n.allowance(o.id)}}const h=zn(n,u,a,{});if("error"in h)return h.error;const f=c.pos;yield*Bn(n,o.id,h.plan);const m=Je(c.pos,f);Math.hypot(m.x,m.y)>1e-6&&u.mode.t!=="free"?c.routeDir=an(m):u.mode.t==="fixed"?c.routeDir=u.mode.angle:u.mode.t==="sector"&&Math.hypot(m.x,m.y)>1e-6&&(c.routeDir=an(m)),(h.plan.boundary==="left"||h.plan.boundary==="right")&&(c.sidelineSlice=e.slice,n.log(`${n.short(o.id)} reaches the sideline and stops.`,"event")),n.log(`${n.short(o.id)} runs ${c.s.movedCm.toFixed(1)} cm.`,"event")}return c.s.moved=!0,yield*Ch(n,o.id,l),null};yield*Zi(n,{coach:e.offense,phase:"receivers",title:"Move receivers (any order); man coverage follows each",specs:s,*run(o,a){return yield*r(o,a)},*skip(o){yield*r(o,null)},*finishRemaining(o){for(const a of o)yield*r(a,null)}});for(const o of s())o.done||(yield*r(o,null))}function*fx(n){const e=n.play;if(n.effectiveInPlay())return;const t=n.effectiveCarrier();for(const r of n.defensePlayers()){if(n.assignment(r.id).t!=="spy"||n.isEngaged(r.id)||r.s.moved||!n.canAct(r.id))continue;const a={x:t?n.f(t).pos.x:n.qb().pos.x,y:e.los+4},c=cf(n.moveCtx(),r.id,a,{allowance:n.allowance(r.id)});c.events=c.events.filter(l=>l.kind!=="hole"),yield*Bn(n,r.id,c),n.log(`${n.short(r.id)} spies the backfield.`,"event")}const i=r=>n.defensePlayers().filter(o=>{const a=n.assignment(o.id);return a.t==="zone"&&a.zone.zone===r.zone&&(r.zone==="hook"||r.zone==="deep")}).sort((o,a)=>o.pos.x-a.pos.x).map(o=>o.id),s=()=>n.defensePlayers().filter(r=>n.assignment(r.id).t==="zone"&&!n.isEngaged(r.id)).map(r=>{const o=n.assignment(r.id),a=pt(n,r.id,n.allowance(r.id,{zone:!0}),{t:"zone",zone:o.zone,label:n.zoneLabel(o.zone)});return a.note=n.inZone(r.pos,o.zone)?`In his ${n.zoneLabel(o.zone)} zone.`:`Moving to his ${n.zoneLabel(o.zone)} zone.`,a});yield*Zi(n,{coach:e.defense,phase:"zones",title:"Zone coverage: move defenders within (or towards) their zones",specs:s,*run(r,o){const a=n.assignment(r.id),c=i(a.zone),l=zn(n,r,o,{});if("error"in l)return l.error;if(c.length>1){const u=c.indexOf(r.id),d=u>0?n.f(c[u-1]).pos.x:-1/0,h=u<c.length-1?n.f(c[u+1]).pos.x:1/0;if(l.plan.to.x<d||l.plan.to.x>h)return`Defenders sharing the ${a.zone} zone may not cross each other laterally.`}return yield*Bn(n,r.id,l.plan),null}})}function*px(n){const e=n.play;for(const t of["defense","offense"]){const i=n.coachOf(t),s=()=>n.onField(t).filter(r=>!n.isEngaged(r.id)).map(r=>pt(n,r.id,n.allowance(r.id),{t:"free"}));if(yield*Zi(n,{coach:i,phase:"looseBall",title:`Loose ball: ${t} moves players towards it`,specs:s,*run(r,o){const a=zn(n,r,o,{});return"error"in a?a.error:(yield*Bn(n,r.id,a.plan),null)}}),e.result)return}}const ei=1e-4;function No(n,e,t="right"){const i=n-ye,s=[];for(let r=0;r<5;r++)s.push({x:vn+(r-2)*We,y:i});return e===6&&(t==="left"?s.unshift({x:vn-3*We,y:i}):s.push({x:vn+3*We,y:i})),s}function Cc(n,e){return{x:vn,y:n-ye-We-e}}function _f(n,e){return n.x>=ye-ei&&n.x<=ct-ye+ei&&n.y>=e+ye-ei&&n.y<=Jt-ye+ei}function jl(n,e){return it(n,e)<We-ei}function mx(n,e,t,i){const s=[],r=new Map(n.map(h=>[h.id,h]));e.length!==11&&s.push({player:null,text:`The offense must field exactly 11 players (${e.length} placed).`});const o=new Set,a=[];for(const h of e){const f=r.get(h.id);if(!f){s.push({player:h.id,text:`${h.id} is not on the offensive roster.`});continue}o.has(h.id)&&s.push({player:h.id,text:`${f.name} is placed twice.`}),o.add(h.id),a.push({def:f,pos:h.pos})}const c=h=>a.filter(f=>f.def.position===h).length;c("QB")!==1&&s.push({player:null,text:"Exactly one quarterback must be on the field."});const l=c("OL");l!==5&&l!==6&&s.push({player:null,text:"Five offensive linemen must be on the field (six at most)."});const u=a.filter(h=>h.def.position==="OL").sort((h,f)=>h.pos.x-f.pos.x);if(l===5||l===6){const h=No(t,l,"left"),f=No(t,l,"right"),m=v=>u.every((g,p)=>it(g.pos,v[p])<.05);!m(h)&&!m(f)&&s.push({player:null,text:"The offensive line must stand touching, centred on the field, with their front edge on the line of scrimmage."})}const d=a.find(h=>h.def.position==="QB");if(d){const f=Cc(t,0).y-d.pos.y;Math.abs(d.pos.x-vn)>.05&&s.push({player:d.def.id,text:"The quarterback must line up directly behind the centre."}),(f<-ei||f>Gy+ei)&&s.push({player:d.def.id,text:"The quarterback may be under centre or up to 4 cm behind the line."})}for(const h of a)h.pos.y>t-ye+ei&&s.push({player:h.def.id,text:`${h.def.name} must be behind the line of scrimmage.`}),_f(h.pos,i)||s.push({player:h.def.id,text:`${h.def.name} is out of bounds.`});for(let h=0;h<a.length;h++)for(let f=h+1;f<a.length;f++)jl(a[h].pos,a[f].pos)&&s.push({player:a[h].def.id,text:`${a[h].def.name} overlaps ${a[f].def.name}.`});return s}function gx(n,e,t,i){const s=[],r=new Map(n.map(l=>[l.id,l]));e.length!==11&&s.push({player:null,text:`The defense must field exactly 11 players (${e.length} placed).`});const o=new Set,a=[];for(const l of e){const u=r.get(l.id);if(!u){s.push({player:l.id,text:`${l.id} is not on the defensive roster.`});continue}o.has(l.id)&&s.push({player:l.id,text:`${u.name} is placed twice.`}),o.add(l.id),a.push({def:u,pos:l.pos})}const c=l=>a.filter(u=>u.def.position===l).length;c("DL")<3&&s.push({player:null,text:"At least three defensive linemen must be on the field."}),c("LB")<1&&s.push({player:null,text:"At least one linebacker must be on the field."});for(const l of a){l.pos.y<t+ye-ei&&s.push({player:l.def.id,text:`${l.def.name} must be on the defensive side of the line of scrimmage.`}),_f(l.pos,0)||s.push({player:l.def.id,text:`${l.def.name} is out of bounds.`});for(const u of i)jl(l.pos,u)&&s.push({player:l.def.id,text:`${l.def.name} overlaps an offensive player.`})}for(let l=0;l<a.length;l++)for(let u=l+1;u<a.length;u++)jl(a[l].pos,a[u].pos)&&s.push({player:a[l].def.id,text:`${a[l].def.name} overlaps ${a[u].def.name}.`});return s}function vf(n,e,t,i,s,r){return n==="offense"?mx(e,t,i,s):gx(e,t,i,r)}const et=(n,e,t,i)=>({positions:n,dx:e,dy:t,label:i}),yf=[{name:"I formation",side:"offense",qbDepth:0,linemen:5,slots:[et(["FB","RB","TE"],0,-7.5,"FB"),et(["RB","FB","WR"],0,-11,"RB"),et(["TE","WR","FB"],8.75,-1.25,"TE"),et(["WR","TE","RB"],-22,-1.25,"WR"),et(["WR","TE","RB"],22,-2.75,"WR")]},{name:"Singleback",side:"offense",qbDepth:0,linemen:5,slots:[et(["RB","FB","WR"],0,-9.5,"RB"),et(["TE","WR","FB"],8.75,-1.25,"TE"),et(["WR","TE","RB"],-23,-1.25,"WR"),et(["WR","TE","RB"],23,-2.75,"WR"),et(["WR","TE","RB"],-14,-2.75,"WR")]},{name:"Shotgun spread",side:"offense",qbDepth:4,linemen:5,slots:[et(["RB","FB","WR"],4.5,-8.5,"RB"),et(["WR","TE","RB"],-24,-1.25,"WR"),et(["WR","TE","RB"],24,-1.25,"WR"),et(["WR","TE","RB"],-15,-2.75,"WR"),et(["WR","TE","RB"],15,-2.75,"WR")]},{name:"Trips right",side:"offense",qbDepth:4,linemen:5,slots:[et(["RB","FB","WR"],-4.5,-8.5,"RB"),et(["WR","TE","RB"],-24,-1.25,"WR"),et(["WR","TE","RB"],24,-1.25,"WR"),et(["WR","TE","RB"],18,-2.75,"WR"),et(["TE","WR","RB"],12,-4,"TE")]},{name:"Empty",side:"offense",qbDepth:4,linemen:5,slots:[et(["WR","TE","RB"],-25,-1.25,"WR"),et(["WR","TE","RB"],25,-1.25,"WR"),et(["WR","TE","RB"],-16,-2.75,"WR"),et(["WR","TE","RB"],16,-2.75,"WR"),et(["TE","RB","WR"],9,-4,"TE")]},{name:"Jumbo (6 linemen)",side:"offense",qbDepth:0,linemen:6,extraLinemanSide:"right",slots:[et(["FB","RB","TE"],0,-6.5,"FB"),et(["RB","FB","WR"],0,-10,"RB"),et(["TE","WR","FB"],11.25,-1.25,"TE"),et(["TE","WR","RB"],-8.75,-1.25,"TE")]}],he=et,Sf=[{name:"4-3",side:"defense",slots:[he(["DL"],-7.5,1.25,"DE"),he(["DL"],-2.5,1.25,"DT"),he(["DL"],2.5,1.25,"DT"),he(["DL"],7.5,1.25,"DE"),he(["LB","S"],-7,6,"WLB"),he(["LB"],0,6,"MLB"),he(["LB","S"],7,6,"SLB"),he(["CB","S"],-22,6,"CB"),he(["CB","S"],22,6,"CB"),he(["S","CB"],-10,14,"FS"),he(["S","CB"],10,14,"SS")]},{name:"3-4",side:"defense",slots:[he(["DL"],-5,1.25,"DE"),he(["DL"],0,1.25,"NT"),he(["DL"],5,1.25,"DE"),he(["LB","S"],-10,3,"OLB"),he(["LB"],-3.5,6,"ILB"),he(["LB","S"],3.5,6,"ILB"),he(["LB","S"],10,3,"OLB"),he(["CB","S"],-22,6,"CB"),he(["CB","S"],22,6,"CB"),he(["S","CB"],-9,14,"FS"),he(["S","CB"],9,14,"SS")]},{name:"Nickel 4-2-5",side:"defense",slots:[he(["DL"],-7.5,1.25,"DE"),he(["DL"],-2.5,1.25,"DT"),he(["DL"],2.5,1.25,"DT"),he(["DL"],7.5,1.25,"DE"),he(["LB"],-4,6,"LB"),he(["LB","S"],4,6,"LB"),he(["CB","S"],-23,6,"CB"),he(["CB","S"],23,6,"CB"),he(["CB","S"],-14,6,"NB"),he(["S","CB"],-8,15,"FS"),he(["S","CB"],10,14,"SS")]},{name:"Dime 4-1-6",side:"defense",slots:[he(["DL"],-7.5,1.25,"DE"),he(["DL"],-2.5,1.25,"DT"),he(["DL"],2.5,1.25,"DT"),he(["DL"],7.5,1.25,"DE"),he(["LB"],0,6,"LB"),he(["CB","S"],-23,6,"CB"),he(["CB","S"],23,6,"CB"),he(["CB","S"],-14,6,"NB"),he(["CB","S"],14,6,"DB"),he(["S","CB"],-8,16,"FS"),he(["S","CB"],8,16,"SS")]},{name:"Goal line 5-3",side:"defense",slots:[he(["DL"],-10,1.25,"DE"),he(["DL"],-5,1.25,"DT"),he(["DL"],0,1.25,"NT"),he(["DL"],5,1.25,"DT"),he(["DL","LB"],10,1.25,"DE"),he(["LB"],-6,5,"LB"),he(["LB","S"],0,5,"MLB"),he(["LB","S"],6,5,"LB"),he(["CB","S"],-20,3,"CB"),he(["CB","S"],20,3,"CB"),he(["S","CB"],0,10,"S")]},{name:"Prevent 3-1-7",side:"defense",slots:[he(["DL"],-5,1.25,"DE"),he(["DL"],0,1.25,"NT"),he(["DL"],5,1.25,"DE"),he(["LB"],0,7,"LB"),he(["CB","S"],-24,8,"CB"),he(["CB","S"],24,8,"CB"),he(["CB","S"],-14,9,"NB"),he(["CB","S","LB"],14,9,"DB"),he(["S","CB"],-14,20,"S"),he(["S","CB"],0,22,"S"),he(["S","CB"],14,20,"S")]}];function xf(n,e,t,i){const s=new Set,r=c=>{for(const l of c){const u=e.find(d=>d.position===l&&!s.has(d.id));if(u)return s.add(u.id),u}},o=[],a={x:vn,y:t};if(n.side==="offense"){const c=n.linemen??5,l=No(t,c,n.extraLinemanSide??"right");for(const d of l){const h=r(["OL"]);h&&o.push({id:h.id,pos:d})}const u=r(["QB"]);u&&o.push({id:u.id,pos:Cc(t,n.qbDepth??0)})}for(const c of n.slots){const l=r(c.positions);if(!l)continue;let u={x:a.x+c.dx,y:a.y+c.dy};u={x:Math.min(ct-ye,Math.max(ye,u.x)),y:Math.min(Jt-ye,Math.max(i+ye,u.y))},o.push({id:l.id,pos:u})}return o}function _x(n,e){const t=new Set(e);return n.filter(i=>!t.has(i.id))}function vx(n,e){return n.offensePlayers().filter(t=>t.id!==e&&t.pancakedSlice===null&&!n.isEngaged(t.id)).map(t=>t.id)}function yx(n){const e=n.play,t=e.ball.carrier;return t?n.def(t).position!=="QB"?{ok:!1,reason:"Only the quarterback passes."}:e.ball.passed?{ok:!1,reason:"The ball has already been thrown."}:e.ball.inPlay?{ok:!1,reason:"The ball is in play."}:e.slice===1&&n.marker(t,2).t==="handoff"?{ok:!1,reason:"A draw play may not pass in timeslice 1 (p. 53)."}:n.handoffPending()?{ok:!1,reason:"The ball is being handed off."}:n.f(t).pos.y>=e.los?{ok:!1,reason:"The quarterback is past the line of scrimmage."}:n.canAct(t)?{ok:!0}:{ok:!1,reason:"The quarterback is down."}:{ok:!1,reason:"Nobody has the ball."}}function Sx(n){const e=n.play,t=e.ball.carrier,i=n.f(t),s=e.slice<=4?n.offMarker(t):{t:"filler"},r=s.t==="read"?s.target:null,o=n.skill(t,"arm"),a=n.skill(t,"poise"),c=n.defendersWithin(t,jd).length,l=Math.max(0,c-a),u=i.s.movedCm,d=[];for(const h of vx(n,t)){const f=n.f(h),m=it(i.pos,f.pos)-We,v=yS(m),g=Math.max(0,v-o),p=[],T=r===h;T||p.push({label:e.slice>4?"No read (play broke down)":"Not the read",value:Zy}),oh(g)!==0?p.push({label:`Range group ${v}${o?` -${Math.min(o,v)} arm = ${g}`:""}`,value:oh(g)}):v>0&&p.push({label:`Range group ${v} - ${o} arm = 0`,value:0}),l>0&&p.push({label:`Pressure: ${c} defender${c>1?"s":""} within 3 cm${a?`, ${a} ignored (poise)`:""}`,value:l*Jy}),u>=.05&&p.push({label:`Moved ${Math.round(u*10)/10} cm`,value:Math.round(u*10)/10*jy});const S=p.reduce((x,w)=>x+w.value,0);d.push({target:h,distanceCm:Math.round(m*100)/100,modifiers:p,total:Math.round(S*100)/100,isRead:T})}return d}function xx(n,e,t){const i=n.f(e),s=[];i.cutSlice===null&&s.push({label:"Before his cut",value:Qy}),t||s.push({label:"Inaccurate pass",value:eS});const r=n.defendersWithin(e,Wy).length;return r===0?s.push({label:"Open receiver",value:tS}):s.push({label:`Traffic: ${r} defender${r>1?"s":""} within 3 cm`,value:r*nS}),s}function*Mf(n){const e=n.play,t=yx(n);if(!t.ok)return;const i=Sx(n),s=yield*n.ask({kind:"pass",coach:e.offense,options:i,mayPass:t.ok,reason:t.reason},"pass");if(s.target===null){n.log(t.ok?"The quarterback holds the ball.":`No pass: ${t.reason}`,"info");return}const r=i.find(o=>o.target===s.target);if(!r)return n.log("That receiver cannot be thrown to.","warning"),yield*Mf(n);yield*Mx(n,r)}function*Mx(n,e){const t=n.play,i=t.ball.carrier,s=e.target;t.ball.passed=!0;const r=`ACCURACY (${e.modifiers.map(w=>`${w.label} ${w.value>=0?"+":""}${w.value}`).join("; ")||"no modifiers"})`,a=n.roll(i,"accuracy",Math.round(e.total),r).success;n.log(`${n.short(i)} throws to ${n.short(s)} (${e.distanceCm} cm): ${a?"an accurate pass":"an INACCURATE pass"}.`,"event");const c=n.defendersWithin(s,Qd).filter(w=>n.canAct(w.id)&&!n.isEngaged(w.id)).map(w=>w.id);let l={};if(c.length>0){const w=yield*n.ask({kind:"contest",coach:t.defense,receiver:s,defenders:c},"contest");for(const R of c)l[R]=w.choices[R]==="cleanShot"?"cleanShot":"contest"}const u=c.filter(w=>l[w]==="contest"),d=c.filter(w=>l[w]==="cleanShot"),h=xx(n,s,a),f=h.reduce((w,R)=>w+R.value,0),m=n.roll(s,"catching",f,`CATCHING (${h.map(w=>`${w.label} ${w.value>=0?"+":""}${w.value}`).join("; ")})`);let v=m.successRate;m.perfect&&(v=n.skill(s,"catching")+rS,n.log(`A PERFECT catch: his successrate counts as ${v}.`,"event"));const g=m.critical;g&&n.log(`${n.short(s)} bats the ball up in the air!`,"event");let p=m.success,T=null;if(u.length>0){let w=0,R=null,A=m.perfect;for(const D of u){const M=n.f(D),b=n.roll(D,"cover",M.s.contestModifier,M.s.contestModifier?`COVER (coverage check ${M.s.contestModifier})`:"COVER");b.critical&&(t.dpi=!0,n.log(`${n.short(D)} commits DEFENSIVE PASS INTERFERENCE.`,"event")),w+=b.successRate;const P=g?ih/2:ih;(b.perfect||b.success&&b.successRate>=v+P)&&!(b.perfect&&A)?(!R||b.successRate>R.sr)&&(R={id:D,sr:b.successRate}):b.perfect&&A&&(n.log("Both rolled a PERFECT: the ball falls incomplete.","event"),p=!1,w=Math.max(w,v))}R?(T=R.id,p=!1):w>=v?(p=!1,n.log(`The pass is defended (${w} vs ${v}).`,"event")):(p=!0,n.log(`${n.short(s)} wins the contested catch (${v} vs ${w}).`,"event"))}if(T){const w=n.f(T);n.log(`INTERCEPTION by ${n.short(T)}!`,"event");const R=mf(n,T,w.pos.y);Sn(n,{kind:"interception",by:T,returnYards:R.yards,touchdown:R.touchdown},R.spotY);return}if(!p){const w=n.f(s);Sn(n,{kind:"incomplete"},w.pos.y);return}const S=n.f(s);if(t.ball.carrier=s,n.ballNowInPlay(),n.log(`${n.short(s)} catches the ball.`,"event"),n.sidelineGap(S.pos)<=$y+1e-6){const w=n.roll(s,"agility",0,"AGILITY (feet in bounds)");if(!w.success){n.log(`${n.short(s)} does not get both feet down: incomplete.`,"event"),t.ball.carrier=i,t.ball.inPlay=!1,t.ball.inPlaySlice=null,Sn(n,{kind:"incomplete"},S.pos.y);return}if(w.successRate<=5){n.log(`${n.short(s)} gets both feet down before going out: the ball is spotted where he caught it.`,"event"),Sn(n,{kind:"outOfBounds"},S.pos.y);return}}if(S.pos.y>=Cn){Sn(n,{kind:"touchdown",by:s},S.pos.y);return}let x=d.filter(w=>n.canAct(w)&&!n.f(w).s.tackled);for(;x.length>0&&!t.result;){const w=yield*n.ask({kind:"cleanShot",coach:t.defense,carrier:s,tacklers:x},"cleanShot");if(w.tackler===null||!x.includes(w.tackler))break;const R=yield*Mr(n,w.tackler,s,{cleanShot:!0});if(x=x.filter(A=>A!==w.tackler),R==="down"||R==="fumble")break}}function bx(n){const e=n.play.ball.loose;return e?!Object.values(n.play.players).some(t=>t.pancakedSlice===null&&it(t.pos,e)-ye<=ef+1e-6):!0}function Ex(n){return{kind:n.kind,offense:n.offense,defense:dn(n.offense),los:n.los,lineToGainY:n.lineToGainY,boardMinY:n.boardMinY,slice:0,phase:"lineupOffense",players:{},markers:{},revealed:{offense:0,defense:0},ball:{carrier:null,apparent:null,inPlay:!1,inPlaySlice:null,loose:null,passed:!1},engagements:[],nextEngagementId:1,designations:{},assignments:{},switchDecided:{},spyBlitz:{},handoff:null,dpi:!1,result:null,trails:{}}}function Tx(n,e,t){return{id:n,side:e,pos:{...t},facing:e==="offense"?0:180,pancakedSlice:null,sidelineSlice:null,routeDir:null,cutSlice:null,cannotTackleUntil:{},draggedBy:[],halvedNext:!1,nextSlicePenalty:0,cannotEngageUntil:{},freeSince:null,s:of()}}function*Rh(n,e){const t=n.play,i=n.coachOf(e),s=e==="offense"?n.team(i).offense:n.team(i).defense;t.phase=e==="offense"?"lineupOffense":"lineupDefense";let r;for(;;){const o=yield*n.ask({kind:"lineup",coach:i,side:e,los:t.los,error:r},"lineup"),a=n.offensePlayers().map(l=>l.pos),c=vf(e,s,o.placements,t.los,t.boardMinY,a);if(c.length>0){r=c.slice(0,3).map(l=>l.text).join(" ");continue}for(const l of o.placements)t.players[l.id]=Tx(l.id,e,l.pos);n.log(`${n.team(i).name} ${e} lines up.`,"phase");return}}function*Ph(n,e){const t=n.play,i=n.coachOf(e),s=e==="offense"?Vi:qo,r=n.onField(e).map(a=>n.def(a.id));t.phase="markers";let o;for(;;){const a=yield*n.ask({kind:"markers",coach:i,side:e,slots:s,error:o},"markers"),c=lf(e,r,a.markers);if(VS(c)){o=c.filter(l=>l.severity==="error").slice(0,3).map(l=>l.text).join(" ");continue}for(const l of r)t.markers[l.id]=yn(a.markers[l.id],s);n.log(`${n.team(i).name} ${e} has placed its markers.`,"phase");return}}function*wx(n){const e=n.play;if(e.phase="defenseReveal",e.slice>qo)return;e.revealed.defense=e.slice,n.log(`Timeslice ${e.slice}: the defense reveals its markers.`,"phase");const t=n.offensePlayers().filter(i=>n.def(i.id).position!=="QB").map(i=>i.id);for(const i of n.defensePlayers().sort((s,r)=>s.id.localeCompare(r.id))){const s=n.marker(i.id);switch(s.t){case"filler":break;case"man":{let r;for(;;){const o=yield*n.ask({kind:"manTarget",coach:e.defense,defender:i.id,options:t,error:r},"manTarget");if(!t.includes(o.target)){r="Designate an offensive player other than the quarterback.";continue}n.setAssignment(i.id,{t:"man",target:o.target}),n.log(`${n.short(i.id)} is in MAN coverage on ${n.short(o.target)}.`,"event");break}break}case"zone":{const r=s.zone==="flat"||s.zone==="curl"?{zone:s.zone,side:s.side}:{zone:s.zone};n.setAssignment(i.id,{t:"zone",zone:r}),n.log(`${n.short(i.id)} drops into the ${n.zoneLabel(r)} zone.`,"event");break}case"spy":n.setAssignment(i.id,{t:"spy"}),n.log(`${n.short(i.id)} spies the backfield.`,"event");break;case"blitz":n.setAssignment(i.id,{t:"blitz"}),n.log(`${n.short(i.id)} BLITZES.`,"event");break}}e.slice===1&&(yield*nx(n))}function*Ax(n){const e=n.play;e.phase="offenseReveal",e.slice<=Vi&&(e.revealed.offense=e.slice,n.log(`Timeslice ${e.slice}: the offense reveals its markers.`,"phase")),e.ball.apparent!==null&&e.handoff&&e.handoff.fake&&e.slice>e.handoff.slice&&(n.revealFake(),n.log(`PLAY ACTION: ${n.short(e.ball.carrier)} still has the ball!`,"event"));const t=n.qb(),i=n.marker(t.id);if(i.t==="handoff"&&e.slice<=2){const s=n.marker(i.target),r=e.slice<Vi&&n.marker(t.id,e.slice+1).t!=="filler";e.handoff={slice:e.slice,runner:i.target,fake:r,done:!1,fumbled:!1};const o=n.f(i.target);if(s.t!=="run"){e.handoff.fumbled=!0,n.log(`${n.short(t.id)} hands off to ${n.short(i.target)}, who was not expecting it: FUMBLE!`,"event"),Uo(n,o.pos);return}o.routeDir=n.dirTo(o.pos,n.runLaneTarget(s.side,s.lane)),n.log(`${n.short(t.id)} turns to hand the ball to ${n.short(i.target)}.`,"event")}for(const s of n.offensePlayers()){if(e.ball.loose)break;n.marker(s.id).t==="run"&&e.slice<=2&&!(i.t==="handoff"&&i.target===s.id)&&(n.log(`${n.short(s.id)} runs for a hand-off that never comes: FUMBLE!`,"event"),Uo(n,s.pos))}if(!e.ball.loose)for(const s of n.offensePlayers()){const r=n.effectiveOffMarker(s.id);if(!(r.t!=="passblock"&&r.t!=="runblock"))for(const o of n.defensePlayers()){const a=n.markerAssignment(o.id);if(a.t!=="man"||a.target!==s.id)continue;if(r.t==="runblock"){n.freeDefender(o.id,"his man run blocks");continue}if(e.switchDecided[o.id]||n.f(o.id).freeSince!==null)continue;const c=yield*n.ask({kind:"switchOption",coach:e.defense,defender:o.id,target:s.id},"switchOption");e.switchDecided[o.id]=!0,c.choice.t==="blitz"?(n.setAssignment(o.id,{t:"blitz"}),n.log(`${n.short(o.id)} switches from man coverage to a BLITZ.`,"event")):c.choice.t==="zone"?(n.setAssignment(o.id,{t:"zone",zone:c.choice.zone}),n.log(`${n.short(o.id)} switches from man coverage to the ${n.zoneLabel(c.choice.zone)} zone.`,"event")):n.log(`${n.short(o.id)} stays in man coverage on the pass blocker.`,"event")}}}function*Ys(n){const e=n.play;if(e.result)return"over";if(!e.ball.loose)return"continue";const t=yield*pf(n);return e.result?"over":t==="none"?"skipSlice":"continue"}function*Lh(n,e,t){const i=Ex(t);n.play=i;const s=new Ac(n,i,e);for(yield*Rh(s,"offense"),yield*Rh(s,"defense"),i.ball.carrier=s.qb().id,yield*Ph(s,"offense"),yield*Ph(s,"defense"),s.log("The ball is snapped.","phase");!i.result;){if(s.startSlice(),i.ball.loose){if(i.phase="looseBall",yield*px(s),i.result)break;const o=yield*pf(s);if(i.result)break;if(o==="offense"&&s.log(`${s.short(i.ball.carrier)} has the ball; play on.`,"event"),o==="none"&&bx(s)){s.log("Nobody can get to the loose ball: it is dead where it lies.","event");const a=i.ball.loose;i.ball.loose=null,Sn(s,{kind:"outOfBounds"},a.y);break}continue}yield*wx(s),yield*Ax(s);let r=yield*Ys(s);if(r!=="continue"){if(r==="over")break;continue}if(i.phase="freeBlockers",yield*ix(s),i.phase="resolveBlocks",yield*sx(s),i.result)break;if(i.phase="ballCarrier",yield*ax(s),r=yield*Ys(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="defenders",yield*cx(s),r=yield*Ys(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="receivers",yield*dx(s),r=yield*Ys(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="zones",yield*fx(s),i.result||(i.phase="pass",yield*Mf(s),r=yield*Ys(s),r==="over"))break}return i.phase="over",i.result}function Cx(n){return{config:n,score:{home:0,away:0},stage:"pregame",possession:"home",ballOn:75,down:1,lineToGain:65,drive:null,drives:{home:0,away:0},clock:{drivesCompleted:0,mode:n.gameType==="full"?"drives":"none",snapsLeft:null},overtime:{active:!1,possessions:{home:0,away:0},classic:!1},kickoffBy:null,receivedFirst:null,play:null,lastResult:null,log:[],winner:null,snaps:0}}class Rx{constructor(e,t){this.s=e,this.rng=t}s;rng;log(e,t="info",i){this.s.log.push({n:this.s.log.length+1,text:e,kind:t,coach:i})}team(e){return this.s.config.teams[e]}name(e){return this.team(e).name}boardMinY(e){switch(this.s.config.fieldSize){case"full":return 0;case"half":return Math.min(vs(ph),e??1/0)-gh;case"redzone":return Math.min(vs(mh),e??1/0)-gh}}startSpot(){switch(this.s.config.fieldSize){case"full":return NS;case"half":return ph;case"redzone":return mh}}kicksAllowed(){return this.s.config.fieldSize==="full"}*ask(e,t){let i=e;for(;;){const s=yield i;if(s.kind===t)return s;i={...e,error:`Expected ${t}, got ${s.kind}.`}}}roll(e,t,i,s=0){const r=Yl(this.rng,i,this.team(e).special[t],s);return this.log(`${this.team(e).abbreviation} special teams ${ql(r)}`,"roll",e),r}lastDriveScore=null;score(e,t,i){this.s.score[e]+=t,i.includes("touchdown")||i.includes("two-point")?this.lastDriveScore="touchdown":i==="safety"?this.lastDriveScore="safety":i.includes("field goal")&&(this.lastDriveScore="fieldGoal"),this.log(`${this.name(e)} scores: ${i} (${t}). ${this.name("home")} ${this.s.score.home} - ${this.s.score.away} ${this.name("away")}.`,"score",e)}firstDown(e,t){this.s.possession=e,this.s.ballOn=Math.max(.5,Math.min(99.5,t)),this.s.down=1,this.s.lineToGain=Math.max(0,this.s.ballOn-CS)}countSnap(){this.s.snaps+=1,this.s.clock.mode==="twoMinute"&&this.s.clock.snapsLeft!==null&&(this.s.clock.snapsLeft-=1,this.log(`${this.s.clock.snapsLeft} snap${this.s.clock.snapsLeft===1?"":"s"} left.`,"info"))}*coinToss(){const e=yield*this.ask({kind:"callToss",coach:"away"},"callToss"),t=this.rng.die(2)===1?"heads":"tails",i=t===e.call?"away":"home";this.log(`The toss comes up ${t}; ${this.name("away")} called ${e.call}. ${this.name(i)} wins the toss.`,"event");const s=yield*this.ask({kind:"tossChoice",coach:i,options:["receive","kick"]},"tossChoice"),r=s.choice==="receive"?i:dn(i);this.s.receivedFirst=r,this.log(`${this.name(i)} elects to ${s.choice}. ${this.name(r)} receives.`,"event"),this.kicksAllowed()?this.s.kickoffBy=dn(r):this.firstDown(r,this.startSpot())}*kickoff(e){const t=dn(e);this.s.stage="kickoff",this.s.kickoffBy=null;const i=yield*this.ask({kind:"kickoffType",coach:e,options:["normal","onside"]},"kickoffType");if(this.countSnap(),i.type==="onside"){const a=this.roll(e,"kicking","KICKING (onside)"),c=this.roll(t,"coverage","COVERAGE (onside, +10)",0),l=a.successRate,u=c.successRate+PS;l>u?(this.log(`ONSIDE KICK recovered by ${this.name(e)}!`,"event",e),this.firstDown(e,100-fh)):(this.log(`${this.name(t)} recovers the onside kick.`,"event",t),this.firstDown(t,fh));return}const s=this.roll(e,"kicking","KICKING (kick-off)");if(s.critical){this.log(`The kick-off sails out of bounds: ${this.name(t)} takes it at its own 40.`,"event"),this.firstDown(t,100-RS);return}let r;if(s.perfect){const a=yield*this.ask({kind:"puntPerfect",coach:e},"puntPerfect");r=a.choice==="touchback"?Ba+5:Ba-1,this.log(`A PERFECT kick: the kicker places it ${a.choice==="touchback"?"in the endzone":"on the 1 yard line"}.`,"event")}else{const a=this.rng.die(20),c=this.rng.die(20);r=a+c+s.rawRate,this.log(`The kick travels ${a} + ${c} ${s.rawRate>=0?"+":"-"} ${Math.abs(s.rawRate)} = ${r} yards beyond the 30.`,"event")}const o=Ba-r;yield*this.returnKick(e,t,o,"kick-off")}*returnKick(e,t,i,s){const r=i<=0,o=100-i;if((yield*this.ask({kind:"fairCatch",coach:t,spotYtg:Math.round(o),inEndzone:r},"fairCatch")).fairCatch){const u=r?100-Ni:o;this.log(`${this.name(t)} calls a fair catch${r?" in the endzone: touchback":""}; first down at the ${Math.round(100-u)}.`,"event"),this.firstDown(t,u);return}let c=o,l=0;for(;;){const u=this.roll(t,"return","RETURN"),d=this.roll(e,"coverage","COVERAGE");if(u.critical||d.perfect){this.log("The returner DROPS the ball!","event");const h=this.roll(t,"return","RETURN (loose ball)"),f=this.roll(e,"coverage","COVERAGE (loose ball)");h.successRate>f.successRate?(this.log(`${this.name(t)} falls on it.`,"event"),this.firstDown(t,c)):(this.log(`${this.name(e)} recovers the muffed ${s}!`,"event",e),this.firstDown(e,100-c));return}if(u.successRate>d.successRate){l+=1;let h=this.rng.die(20);if((u.perfect||d.critical)&&(h*=2,this.log("A big return: the yards are doubled.","event")),c-=h,this.log(`The ${s} is returned ${h} yards${c<=0?"":` to ${gr(c)}`}.`,"event"),c<=0||l>=kS){this.log(`${this.name(t)} returns the ${s} for a TOUCHDOWN!`,"score",t),this.score(t,_o,`${s} return touchdown`),yield*this.tryAfterTouchdown(t),this.s.kickoffBy=t;return}continue}c>=100?(this.log("The returner is brought down in the endzone: touchback.","event"),c=100-Ni):this.log(`The returner is tackled at the ${Math.round(100-c)}.`,"event"),this.firstDown(t,c);return}}*punt(){const e=this.s.possession,t=dn(e);this.countSnap();const i=this.s.ballOn,s=this.roll(e,"punting","PUNTING");let r;if(s.critical){const a=this.rng.die(20),c=this.rng.die(20);r=a+c,this.log(`A shanked punt out of bounds after ${a} + ${c} = ${r} yards.`,"event");const l=i-r;l<=0?(this.log("It still reaches the endzone: touchback.","event"),this.firstDown(t,100-Ni)):this.firstDown(t,100-l);return}if(s.perfect){const a=this.rng.die(20);if(r=a+DS,this.log(`A PERFECT punt of ${a} + 50 = ${r} yards.`,"event"),i-r<=0){if((yield*this.ask({kind:"puntPerfect",coach:e},"puntPerfect")).choice==="touchback"){this.log("The punter forces a fair catch in the endzone: touchback.","event"),this.firstDown(t,100-Ni);return}this.log("The punt is placed on the 1 yard line.","event"),yield*this.returnKick(e,t,1,"punt");return}}else r=LS+2*s.rawRate,this.log(`The punt travels 30 ${s.rawRate>=0?"+":"-"} 2 x ${Math.abs(s.rawRate)} = ${r} yards.`,"event");const o=i-r;if(o<=0){this.log("The punt reaches the endzone: touchback.","event"),this.firstDown(t,100-Ni);return}yield*this.returnKick(e,t,o,"punt")}*fieldGoal(){const e=this.s.possession;this.countSnap();const t=Math.round(this.s.ballOn+Fa),i=ah(t);if(this.roll(e,"kicking",`KICKING (${t} yard field goal, ${i>=0?"+":""}${i})`,i).success)return this.score(e,bS,`${t} yard field goal`),!0;this.log(`The ${t} yard field goal is NO GOOD.`,"event");const r=this.s.ballOn+Fa,o=dn(e),a=Math.min(100-Ni,100-r);return this.firstDown(o,a),!1}*tryAfterTouchdown(e){if(this.s.stage="try",(yield*this.ask({kind:"tryChoice",coach:e},"tryChoice")).choice==="kick"){this.roll(e,"kicking","KICKING (extra point)").critical?this.log("The extra point is missed!","event"):this.score(e,TS,"extra point");return}this.log(`${this.name(e)} goes for two.`,"event");const i=yield*Lh(this.s,this.rng,{kind:"try",offense:e,los:vs(dh),lineToGainY:null,boardMinY:this.boardMinY(vs(dh))});this.s.lastResult=i,i.ending.kind==="touchdown"?this.score(e,wS,"two-point conversion"):this.log("The two-point attempt fails.","event")}*scrimmage(){const e=this.s,t=e.possession,i=dn(t);this.countSnap();const s=vs(e.ballOn),r=yield*Lh(e,this.rng,{kind:"scrimmage",offense:t,los:s,lineToGainY:e.lineToGain>0?vs(e.lineToGain):null,boardMinY:this.boardMinY(s)});e.lastResult=r,e.drive&&(e.drive.plays+=1);const o=r.ending;switch(o.kind){case"touchdown":return this.score(t,_o,"touchdown"),yield*this.tryAfterTouchdown(t),"touchdown";case"safety":return this.score(i,ES,"safety"),"safety";case"interception":case"fumbleLost":{if(o.touchdown)return this.score(i,_o,o.kind==="interception"?"interception return":"fumble return"),yield*this.tryAfterTouchdown(i),"touchdown";const a=(r.spotY-Un)/1.2;return this.firstDown(i,a),"turnover"}default:{const a=OS(r.spotY),c=e.ballOn-a,l=r.autoFirstDown||a<=e.lineToGain+1e-9;return r.autoFirstDown&&this.log("Defensive pass interference: automatic first down.","event"),l?(this.log(`${c>=0?"Gain":"Loss"} of ${Math.abs(Math.round(c*10)/10)}: FIRST DOWN.`,"event"),this.firstDown(t,a),"continue"):(e.ballOn=Math.max(.5,a),e.down+=1,e.down>AS?(this.log(`Turnover on downs at the ${Math.round(100-e.ballOn)}.`,"event"),this.firstDown(i,100-e.ballOn),"downs"):(this.log(`${c>=0?"Gain":"Loss"} of ${Math.abs(Math.round(c*10)/10)}. ${Px(e.down)} and ${e.lineToGain<=0?"goal":Math.round(e.ballOn-e.lineToGain)}.`,"event"),"continue"))}}}*drive(){const e=this.s;e.stage="drive";const t=e.possession;for(e.drives[t]+=1,this.lastDriveScore=null,e.drive={number:e.clock.drivesCompleted+1,offense:t,startYtg:e.ballOn,plays:0},this.log(`${this.name(t)} starts a drive at ${gr(e.ballOn)}.`,"phase",t);;){if(this.gameClockExpired())return"downs";const i=Math.round(e.ballOn+Fa),s=["scrimmage"];this.kicksAllowed()&&e.config.gameType!=="collegeOT"&&s.push("punt"),s.push("fieldGoal");const r=yield*this.ask({kind:"playCall",coach:t,options:s,fieldGoalLength:i,fieldGoalModifier:ah(i)},"playCall");if(r.call==="punt"&&s.includes("punt"))return yield*this.punt(),"punt";if(r.call==="fieldGoal")return(yield*this.fieldGoal())?"fieldGoal":"missedFieldGoal";const o=yield*this.scrimmage();if(o!=="continue")return o;if(this.gameClockExpired())return"downs"}}gameClockExpired(){return this.s.clock.mode==="twoMinute"&&this.s.clock.snapsLeft!==null&&this.s.clock.snapsLeft<=0}*run(){const e=this.s;for(yield*this.coinToss();;){if(e.kickoffBy){const o=e.kickoffBy;if(yield*this.kickoff(o),e.kickoffBy)continue;if(this.gameClockExpired()&&this.endIfOver())return}const t=e.possession,i=yield*this.drive();e.clock.drivesCompleted+=1,e.overtime.active&&(e.overtime.possessions[t]+=1);const s=i==="touchdown"||i==="fieldGoal",r=this.kicksAllowed();if(i==="safety"?r?(this.log(`${this.name(t)} free kicks after the safety.`,"event"),e.ballOn,e.ballOn=100-US,yield*this.punt()):this.firstDown(dn(t),this.startSpot()):s?r?e.kickoffBy=t:this.firstDown(dn(t),this.startSpot()):(!r||e.config.gameType==="collegeOT")&&this.firstDown(dn(t),this.startSpot()),this.endIfOver()||(this.clockAfterDrive(),this.endIfOver()))return}}clockAfterDrive(){const e=this.s;if(e.config.gameType!=="full"||e.overtime.active||e.clock.mode!=="drives")return;const t=e.clock.drivesCompleted;if(t<IS)return;const i=t===8?4:t===9?5:6,s=this.rng.die(6);if(s>=i){this.log(`After ${t} drives the d6 shows ${s} (needed ${i}+): there is time for another drive.`,"event");return}const r=this.rng.die(20);e.clock.mode="twoMinute",e.clock.snapsLeft=r,this.log(`After ${t} drives the d6 shows ${s} (needed ${i}+): TWO MINUTE MODE, ${r} snaps left.`,"event")}endIfOver(){const e=this.s,t=e.score.home===e.score.away,i=e.score.home>e.score.away?"home":"away",s=a=>(e.winner=a,e.stage="over",e.kickoffBy=null,this.log(a==="tie"?"The game ends in a tie.":`FINAL: ${this.name(a)} wins ${e.score[a]} - ${e.score[dn(a)]}.`,"score"),!0),r=e.overtime.active?e.overtime.possessions.home===e.overtime.possessions.away:e.drives.home===e.drives.away;switch(e.overtime.active?e.overtime.classic?"suddenDeathClassic":"suddenDeathModern":e.config.gameType){case"full":{if(this.gameClockExpired()){if(!t)return s(i);this.startOvertime()}return!1}case"collegeOT":return r&&!t?s(i):!1;case"suddenDeathClassic":return t?!1:s(i);case"suddenDeathModern":{const a=e.overtime.active?e.overtime.possessions:e.drives;if(a.home+a.away===1&&this.lastDriveScoredTouchdownOrSafety())return s(i);if(a.home>=1&&a.away>=1){if(!t)return s(i);e.overtime.active?e.overtime.classic=!0:(e.overtime.active=!0,e.overtime.classic=!0,this.log("Both teams have had a possession: sudden death.","event"))}return!1}}}lastDriveScoredTouchdownOrSafety(){return this.lastDriveScore==="touchdown"||this.lastDriveScore==="safety"}startOvertime(){const e=this.s;e.overtime.active=!0,e.overtime.classic=!1,e.overtime.possessions={home:0,away:0},e.clock.mode="none",e.clock.snapsLeft=null,this.log("The game is tied: OVERTIME (modern sudden death).","event"),this.kicksAllowed()?e.kickoffBy=e.receivedFirst??"home":this.firstDown(dn(e.receivedFirst??"home"),this.startSpot())}}function Px(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function gr(n){const e=Math.round(n);return e===50?"midfield":e>50?`its own ${100-e}`:`the opponent's ${e}`}function*Lx(n,e){yield*new Rx(n,e).run()}class sr{state;pending=null;actions=[];gen;rng;constructor(e,t){this.rng=t??new KS(e.seed),this.state=Cx(e),this.gen=Lx(this.state,this.rng);const i=this.gen.next();this.pending=i.done?null:i.value}get over(){return this.pending===null||this.state.stage==="over"}apply(e){if(!this.pending)return{ok:!1,error:"The game is over."};const t=this.pending;let i;try{i=this.gen.next(e)}catch(s){return{ok:!1,error:s instanceof Error?s.message:String(s)}}return this.actions.push(e),this.pending=i.done?null:i.value,this.pending&&this.pending.error&&Dx(t,this.pending)?{ok:!1,error:this.pending.error}:{ok:!0}}save(){return{config:this.state.config,actions:[...this.actions]}}static replay(e,t){const i=new sr(e.config),s=t??e.actions.length;for(let r=0;r<s;r++)i.apply(e.actions[r]);return i}view(e){const t=structuredClone(this.state),i=t.play;if(!i)return t;const s=(l,u)=>{for(const d of l){const h=i.markers[d];h&&(i.markers[d]=h.map((f,m)=>m<u?f:{t:"hidden"}))}},r=Object.values(i.players).filter(l=>l.side==="offense").map(l=>l.id),o=Object.values(i.players).filter(l=>l.side==="defense").map(l=>l.id),a=e===i.offense,c=e===i.defense;return a||s(r,i.revealed.offense),c||s(o,i.revealed.defense),!a&&i.ball.apparent&&(i.ball.carrier=i.ball.apparent,i.ball.inPlay=!0,i.handoff&&(i.handoff={...i.handoff,fake:!1,done:!0,fumbled:!1})),t}}function Dx(n,e){return n.kind===e.kind&&n.coach===e.coach}class kx{controls=["home","away"];view=tt(null);pending=tt(null);connected=tt(!0);status=tt("hot-seat");newLog=tt([]);engine;logSeen=0;constructor(e,t){this.engine=t?sr.replay(t):new sr(e),this.publish()}perspective(){const e=this.engine.pending;return e&&e.kind==="markers"?e.coach:(e&&e.kind==="lineup","spectator")}publish(){const e=this.engine.state.log;this.newLog.value=e.slice(this.logSeen),this.logSeen=e.length,this.view.value=this.engine.view(this.perspective()),this.pending.value=this.engine.pending?structuredClone(this.engine.pending):null}async apply(e){const t=this.engine.apply(e);return this.publish(),t}async undo(){const e=this.engine.save();e.actions.length!==0&&(this.engine=sr.replay(e,e.actions.length-1),this.logSeen=this.engine.state.log.length,this.publish())}save(){return this.engine.save()}dispose(){}}class Ix{controls=[];view=tt(null);pending=tt(null);connected=tt(!1);status=tt("connecting…");newLog=tt([]);ws;waiting=[];logSeen=0;constructor(e,t,i,s){this.ws=new WebSocket(e),this.ws.onopen=()=>{this.connected.value=!0,this.ws.send(JSON.stringify({t:"join",room:t,coach:i,config:s}))},this.ws.onclose=()=>{this.connected.value=!1,this.status.value="disconnected"},this.ws.onmessage=r=>{const o=JSON.parse(r.data);if(o.t==="joined")this.controls=o.coach?[o.coach]:[],this.status.value=o.coach?`online as ${o.coach}`:"spectating";else if(o.t==="state"){const a=o.view;this.newLog.value=a.log.slice(this.logSeen),this.logSeen=a.log.length,this.view.value=a,this.pending.value=o.pending}else if(o.t==="result"){const a=this.waiting.shift();a&&a({ok:o.ok,error:o.error})}else o.t==="error"&&(this.status.value=o.text)}}apply(e){return new Promise(t=>{this.waiting.push(t),this.ws.send(JSON.stringify({t:"action",action:e}))})}async undo(){this.ws.send(JSON.stringify({t:"undo"}))}save(){return null}dispose(){this.ws.close()}}const ln=tt(null),At=si(()=>ln.value?.view.value??null),Qt=si(()=>ln.value?.pending.value??null),Ux=si(()=>ln.value?.controls??[]),Os=si(()=>{const n=Qt.value,e=Ux.value;return n?n.coach==="both"?!0:e.includes(n.coach):!1});async function Nx(n){const e=ln.value;return e?e.apply(n):{ok:!1,error:"no game"}}const Ft=tt(null),Ql=tt(null),ec=tt(null),Ox=tt(null),Oo=tt(null),tc=tt(null),Dh=tt("all"),xn=tt(null),vi=tt(null),Zs=tt(null),Lt=tt(null),Nn=tt("move"),Mn=tt("move"),Jn=tt({push:2,turn:0,follow:!0,anchor:null}),Ls=tt(null),Wi=tt({}),$a=tt("hook");let Xa=null;function Fx(n){Oo.value=n,Xa&&clearTimeout(Xa),Xa=setTimeout(()=>Oo.value=null,3500)}function Bx(){Lt.value=null,Nn.value="move",Mn.value="move",Ls.value=null,Wi.value={},Jn.value={push:2,turn:0,follow:!0,anchor:null}}const zx={die(){throw new Error("the client never rolls dice")}};function Jo(n=At.value){return!n||!n.play?null:new Ac(n,n.play,zx)}const Hx=si(()=>{const n=At.value,e=new Map;if(!n)return e;for(const t of["home","away"])for(const i of[...n.config.teams[t].offense,...n.config.teams[t].defense])e.set(i.id,i);return e});function Fo(n){return Hx.value.get(n)}function bf(n){const e=Fo(n);return e?`${e.position} #${e.number} ${e.name.split(" ").slice(-1)[0]}`:n}function Bo(n){const e=At.value;return e?e.config.teams[n].colors.primary:n==="home"?"#1f6feb":"#c0392b"}function nc(n){const e=At.value;return e?e.config.teams[n].name:n}const Gx=si(()=>{const n=Qt.value,e=At.value;return!n||!e?"":`${n.kind}|${n.coach}|${e.snaps}|${e.play?.slice??0}|${e.play?.phase??""}|${e.log.length}`});function _r(n,e){if(!e)return null;if(n.kind==="move")return n.movers.find(t=>t.id===e)??null;if(n.kind==="freeBlockers"){const t=n.blockers.find(i=>i.id===e);return t?{id:e,allowance:t.allowance,mode:{t:"free"},done:t.done}:null}return null}function kh(n,e,t,i){const s=n.f(e).pos,r=[];for(let o=0;o<360;o+=15){const a=Fn(s,ai(Tn(o),We));mr(n.moveCtx(),a,[t])&&(i&&!i(a)||r.push({key:String(o),pos:a}))}return r}const Ih=si(()=>{const n=At.value,e=Qt.value,t={selected:Ft.value,highlights:{},showTrails:!0};if(!n)return t;const i=n.play,s=Jo(n),r=ec.value;if(r&&!t.highlights[r]&&(t.highlights[r]="hover"),!e||!i||!s)return t;const o=[];for(const[c,l]of Object.entries(i.assignments)){if(l.t!=="zone"||i.ball.inPlay&&i.phase!=="defenseReveal")continue;const u=l.zone,d=s.zoneLabel(u);o.some(h=>h.label===d)||o.push({zone:u,rect:s.zoneRect(u),label:d})}t.zones=o;const a=Os.value;switch(e.kind){case"lineup":{const c=xn.value;if(c&&a){t.positions=Object.fromEntries(c.placements.map(d=>[d.id,d.pos])),t.extraTokens=c.placements.map(d=>({id:d.id,side:c.side,pos:d.pos}));const l=new Set,u=n.config.teams[c.coach][c.side];for(const d of c.placements){const h=u.find(f=>f.id===d.id);h&&((c.side==="defense"||h.position!=="OL"&&h.position!=="QB")&&l.add(d.id),h.position==="QB"&&l.add(d.id))}t.draggable=l}break}case"markers":{const c=vi.value;c&&a&&(t.markerOverride=c.markers);break}case"manTarget":{for(const c of e.options)t.highlights[c]="option";t.highlights[e.defender]="selected";break}case"switchOption":{t.highlights[e.defender]="selected",t.highlights[e.target]="target";break}case"freeBlockers":{for(const u of e.blockers)u.done||(t.highlights[u.id]="option");const c=Lt.value,l=e.blockers.find(u=>u.id===c);if(l){t.highlights[l.id]="selected";for(const d of l.engageable)t.highlights[d]="engageable";if(l.designated&&(t.highlights[l.designated]="designated"),Mn.value==="move"&&!l.done){const d=_r(e,l.id);t.mover={id:l.id,spec:d};const h=Ql.value;h&&(t.preview=Uh(s,d,h))}t.rings=[{id:l.id,radius:ye+Yo,color:"#58c27d",dashed:!0}]}break}case"move":{for(const u of e.movers)!u.done&&u.mode.t!=="none"&&(t.highlights[u.id]="option");for(const u of e.movers)!u.done&&(u.mayDisengage||u.mayBlitz)&&(t.highlights[u.id]="option");const c=Lt.value,l=_r(e,c);if(l&&!l.done){t.highlights[l.id]="selected";const u=Nn.value==="disengage"?{...l,mode:{t:"free"}}:l;t.mover={id:l.id,spec:u};const d=Ql.value;d&&u.mode.t!=="none"&&(t.preview=Uh(s,u,d)),t.rings=Vx(s,l.id)}break}case"engageOffer":{t.highlights[e.blocker]="engageable",t.highlights[e.defender]="danger";break}case"pushAround":{t.highlights[e.winner]="selected",t.highlights[e.loser]="target";const c=Jn.value,l=c.anchor&&e.blockers.includes(c.anchor)?c.anchor:e.winner,u=Wx(n,l,e.loser,c.push,c.turn,c.follow,e.blockers);u&&(t.ghosts=u);break}case"pancakeChoice":{for(const c of e.blockers)t.highlights[c]="option";t.highlights[e.defender]="selected";break}case"breakThrough":{t.highlights[e.defender]="selected",t.highlights[e.blocker]="target",t.ghosts=kh(s,e.blocker,e.defender).map(c=>({...c,color:"#ef6461"}));break}case"clutchTackle":{t.highlights[e.defender]="danger",t.highlights[e.carrier]="target";break}case"jumpTackle":{for(const c of e.candidates)t.highlights[c]="option";t.highlights[e.carrier]="target";break}case"tackleStyle":{t.highlights[e.tackler]="danger",t.highlights[e.carrier]="target";break}case"missedTackle":{t.highlights[e.tackler]="danger",t.highlights[e.carrier]="selected";const c=s.f(e.tackler).pos;t.ghosts=kh(s,e.tackler,e.carrier,l=>l.y<=c.y+1e-6).map(l=>({...l,color:"#58c27d"}));break}case"pass":{const c=i.ball.carrier;for(const u of e.options)t.highlights[u.target]=u.isRead?"target":"option";const l=Ls.value??ec.value;c&&(t.rings=[{id:c,radius:ye+jd,color:"#ef6461",dashed:!0}],l&&e.options.some(u=>u.target===l)&&(t.highlights[l]="selected",t.passLine={from:s.f(c).pos,to:s.f(l).pos},t.rings.push({id:l,radius:ye+Qd,color:"#9fd4ff",dashed:!0})));break}case"contest":{t.highlights[e.receiver]="target";const c=Wi.value;for(const l of e.defenders)t.highlights[l]=c[l]==="cleanShot"?"danger":"option";break}case"cleanShot":{t.highlights[e.carrier]="target";for(const c of e.tacklers)t.highlights[c]="danger";break}}return t});function Uh(n,e,t){const i=n.f(e.id).pos,s=tx(n,e,t);if("error"in s)return{from:i,to:t,ok:!1,marks:[],text:s.error};const r=s.plan,o=[];for(const c of r.events)c.kind==="hole"&&o.push({at:c.at,kind:"hole"});r.clipped&&r.clipped.reason!=="allowance"&&o.push({at:r.to,kind:"stop"});const a=r.clipped?.reason==="blocked"?`Blocked by ${r.clipped.by?n.short(r.clipped.by):"a player"}`:r.clipped?.reason==="bounds"?"Reaches the boundary":r.clipped?.reason==="line"?"Linemen stay behind the line until the ball is in play":r.clipped?.reason==="overlap"?"Cannot end on another base":`${r.distance.toFixed(1)} cm`;return{from:i,to:r.to,ok:!0,marks:o,text:a}}function Vx(n,e){const t=n.play,i=[],s=n.f(e),r=n.effectiveCarrier();if(s.side==="offense"&&e===r)for(const o of n.defensePlayers())!n.canAct(o.id)||o.s.tackled||(s.cannotTackleUntil[o.id]??0)>t.slice||(n.isEngaged(o.id)?o.s.clutchEligible&&i.push({id:o.id,radius:ye+ko,color:"#f5a524"}):i.push({id:o.id,radius:ye+Tc,color:"#ef6461",dashed:!0}));else if(s.side==="defense"){for(const[o,a]of Object.entries(t.designations))a!==e||!t.players[o]||i.push({id:o,radius:ye+Yo,color:"#58c27d",dashed:!0});r&&n.has(r)&&i.push({id:r,radius:ye+.05,color:"#ffffff",dashed:!0})}else s.side;return i}function Wx(n,e,t,i,s,r,o){const a=structuredClone(n),c=Jo(a);if(!c)return null;const l=o.includes(e)?t:e,u=o.filter(h=>h!==e&&h!==t);try{hf(c,e,t,i,s,r,u,l)}catch{return null}const d=[];for(const h of[e,t,...u]){const f=n.play.players[h].pos,m=a.play.players[h].pos;it(f,m)>1e-6&&d.push({key:`push-${h}`,pos:m,color:h===t?"#ef6461":"#f2c14e",label:String(c.def(h).number)})}return d}async function be(n){const e=await Nx(n);!e.ok&&e.error&&Fx(e.error)}function $x(n,e=null){const t=Qt.value,i=At.value;if(!t||!i||!Os.value){Ft.value=n;return}if((t.kind==="move"||t.kind==="freeBlockers")&&n===Lt.value&&e){const s=_r(t,n);if(s&&!s.done&&(t.kind==="move"?s.mode.t!=="none"||Nn.value==="disengage":Mn.value==="move")){ic(e);return}}switch(t.kind){case"manTarget":t.options.includes(n)?be({kind:"manTarget",target:n}):Ft.value=n;return;case"freeBlockers":{if(t.blockers.find(o=>o.id===n)){Lt.value=n,Mn.value="move",Ft.value=n;return}const r=t.blockers.find(o=>o.id===Lt.value);if(r&&i.play?.players[n]?.side==="defense"){r.engageable.includes(n)&&r.mayEngage&&Mn.value!=="designate"?be({kind:"engage",blocker:r.id,defender:n}):be({kind:"designate",blocker:r.id,defender:n});return}Ft.value=n;return}case"move":{const s=t.movers.find(o=>o.id===n);if(s&&!s.done){Lt.value=n,Nn.value="move",Ft.value=n;return}if(_r(t,Lt.value)&&i.play?.players[n]){ic(i.play.players[n].pos);return}Ft.value=n;return}case"jumpTackle":t.candidates.includes(n)&&be({kind:"jumpTackle",defender:n});return;case"pancakeChoice":t.blockers.includes(n)&&be({kind:"pancakeChoice",blocker:n});return;case"pushAround":t.blockers.includes(n)&&t.blockers.includes(t.winner)&&(Jn.value={...Jn.value,anchor:n});return;case"pass":{t.options.some(s=>s.target===n)?Ls.value===n?be({kind:"pass",target:n}):Ls.value=n:Ft.value=n;return}case"contest":{if(t.defenders.includes(n)){const s=Wi.value[n]??"contest";Wi.value={...Wi.value,[n]:s==="contest"?"cleanShot":"contest"}}return}case"cleanShot":t.tacklers.includes(n)&&be({kind:"cleanShot",tackler:n});return;default:Ft.value=n}}function ic(n){const e=Qt.value,t=At.value;if(!e||!t||!Os.value){Ft.value=null;return}if(e.kind==="move"){const i=_r(e,Lt.value);if(!i||i.done)return;Nn.value==="disengage"?be({kind:"disengage",id:i.id,to:n}):i.mode.t!=="none"&&be({kind:"move",id:i.id,to:n});return}if(e.kind==="freeBlockers"){const i=e.blockers.find(s=>s.id===Lt.value);i&&!i.done&&Mn.value==="move"&&be({kind:"move",id:i.id,to:n});return}e.kind!=="lineup"&&e.kind!=="markers"&&(Ft.value=null)}function Xx(n){const e=Qt.value;!e||!Os.value||(e.kind==="breakThrough"?be({kind:"breakThrough",angle:Number(n)}):e.kind==="missedTackle"&&be({kind:"missedTackle",angle:Number(n)}))}function Yx(n,e){Ql.value=n,ec.value=e}function qx(n,e,t){const i=xn.value,s=At.value,r=Qt.value;if(!i||!s||!r||r.kind!=="lineup")return;const a=s.config.teams[i.coach][i.side].find(u=>u.id===n);if(!a)return;let c={x:e.x,y:e.y};const l=r.los;if(i.side==="offense"){if(a.position==="OL")return;if(a.position==="QB"){const u=l-ye-We;c={x:(s.config,31),y:Math.max(u-4,Math.min(u,e.y))},i.qbDepth=Math.round((u-c.y)*10)/10}else c.y=Math.min(c.y,l-ye)}else c.y=Math.max(c.y,l+ye);c.x=Math.max(ye,Math.min(62-ye,c.x)),c={x:Math.round(c.x*10)/10,y:Math.round(c.y*10)/10},xn.value={...i,placements:i.placements.map(u=>u.id===n?{id:n,pos:c}:u)}}function Kx(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function Zx(n){const e=At.value;if(!e)return _("div",{class:"scoreboard"});const t=Qt.value,i=e.play,s=i&&!i.result?i.offense:e.possession,r=({c:l})=>_("div",{class:`team-score ${s===l?"has-ball":""}`,children:[_("div",{class:"swatch",style:{background:Bo(l)}}),_("div",{class:"name",children:e.config.teams[l].name}),_("div",{class:"pts",children:e.score[l]})]}),o=e.lineToGain<=0?"goal":Math.max(0,Math.round(e.ballOn-e.lineToGain)),a=gr(e.ballOn),c=e.clock.mode==="twoMinute"?`Two-minute mode: ${e.clock.snapsLeft} snap${e.clock.snapsLeft===1?"":"s"} left`:e.config.gameType==="full"?`Drive ${e.clock.drivesCompleted+1}`:e.overtime.active?"Overtime":Jx(e.config.gameType);return _("div",{class:"scoreboard",children:[_(r,{c:"home"}),_(r,{c:"away"}),_("div",{class:"situation",children:[e.stage==="over"?_("span",{class:"big",children:"FINAL"}):e.stage==="kickoff"?_("span",{class:"big",children:"Kick-off"}):e.stage==="try"?_("span",{class:"big",children:"Try"}):_(Pt,{children:[_("span",{class:"big",children:[Kx(e.down)," & ",o]}),_("span",{class:"muted",children:["at ",a]})]}),_("span",{class:"muted",children:c}),i&&i.slice>0&&!i.result&&_("span",{class:"chip",children:["Timeslice ",i.slice]})]}),_("div",{class:"spacer"}),_("span",{class:"muted",children:ln.value?.status.value}),t&&t.coach!=="both"&&_("span",{class:"coachtag",style:{background:Bo(t.coach)},children:[e.config.teams[t.coach].abbreviation," to act"]}),_("button",{class:"small",onClick:()=>{ln.value?.undo()},title:"Undo the last action",children:"Undo"}),_("button",{class:"small",onClick:()=>jx(),title:"Download the game (seed and actions)",children:"Save"}),_("button",{class:"small",onClick:n.onNewGame,children:"New game"})]})}function Jx(n){switch(n){case"full":return"Full game";case"collegeOT":return"College overtime";case"suddenDeathClassic":return"Sudden death (classic)";case"suddenDeathModern":return"Sudden death (modern)";default:return n}}function jx(){const n=ln.value?.save();if(!n)return;const e=new Blob([JSON.stringify(n)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=`afm-game-${Date.now()}.json`,t.click()}const Ya=["defenseReveal","offenseReveal","freeBlockers","resolveBlocks","ballCarrier","defenders","receivers","zones","pass"];function Qx(){const e=At.value?.play;if(!e)return null;if(e.phase==="lineupOffense"||e.phase==="lineupDefense"||e.phase==="markers")return _("div",{class:"panel",children:[_("h3",{children:"Preparing the play"}),_("div",{class:"phasebar",children:["lineupOffense","lineupDefense","markers"].map(s=>_("span",{class:`ph ${s===e.phase?"now":Ya.indexOf(s)<0&&Nh(s)<Nh(e.phase)?"done":""}`,children:Mh[s]}))})]});const i=Ya.indexOf(e.phase);return _("div",{class:"panel",children:[_("h3",{children:["Timeslice ",e.slice,e.slice>4?" (play has broken down)":"",e.ball.inPlay?" · ball in play":"",e.ball.loose?" · LOOSE BALL":""]}),_("div",{class:"phasebar",children:[Ya.map((s,r)=>_("span",{class:`ph ${s===e.phase?"now":r<i?"done":""}`,children:Mh[s]})),e.phase==="looseBall"&&_("span",{class:"ph now",children:"Loose ball"}),e.phase==="over"&&_("span",{class:"ph now",children:"Play over"})]})]})}function Nh(n){return["lineupOffense","lineupDefense","markers"].indexOf(n)}function eM(n){const e=At.value;if(!e)return;const t=e.config.teams[n.coach][n.side],i=xn.value,s=n.side==="offense"?yf:Sf,r=localStorage.getItem(`afm-formation-${n.coach}-${n.side}`),o=s.find(c=>c.name===(i&&i.side===n.side&&i.coach===n.coach?i.formation:r))??s[0],a=e.play?.boardMinY??0;xn.value={coach:n.coach,side:n.side,formation:o.name,qbDepth:o.qbDepth??0,linemen:o.linemen??5,extraSide:o.extraLinemanSide??"right",placements:xf(o,t,n.los,a)}}function tM(){const n=Qt.value,e=At.value,t=xn.value;if(!n||n.kind!=="lineup"||!e||!t)return null;const i=e.config.teams[n.coach][n.side],s=n.side==="offense"?yf:Sf,r=e.play?.boardMinY??0,o=e.play?Object.values(e.play.players).filter(p=>p.side==="offense").map(p=>p.pos):[],a=vf(n.side,i,t.placements,n.los,r,o),c=t.placements.map(p=>p.id),l=_x(i,c),u=Ft.value&&c.includes(Ft.value)?Ft.value:null,d=u?i.find(p=>p.id===u):null,h=p=>{const T=s.find(S=>S.name===p);localStorage.setItem(`afm-formation-${n.coach}-${n.side}`,p),xn.value={...t,formation:p,qbDepth:T.qbDepth??0,linemen:T.linemen??5,extraSide:T.extraLinemanSide??"right",placements:xf(T,i,n.los,r)}},f=p=>{const T=i.find(S=>S.position==="QB"&&c.includes(S.id));T&&(xn.value={...t,qbDepth:p,placements:t.placements.map(S=>S.id===T.id?{id:S.id,pos:Cc(n.los,p)}:S)})},m=(p,T)=>{const S=i.filter(M=>M.position==="OL"),x=t.placements.filter(M=>S.some(b=>b.id===M.id)),w=t.placements.filter(M=>!S.some(b=>b.id===M.id)),R=No(n.los,p,T),A=[...x.map(M=>M.id),...S.filter(M=>!x.some(b=>b.id===M.id)).map(M=>M.id)].slice(0,p);let D=w;if(p===6&&D.length>5){const M=i.find(P=>P.position==="QB"),b=D.filter(P=>P.id!==M?.id);D=D.filter(P=>P.id!==b[b.length-1]?.id)}xn.value={...t,linemen:p,extraSide:T,placements:[...A.map((M,b)=>({id:M,pos:R[b]})),...D]}},v=(p,T)=>{xn.value={...t,placements:t.placements.map(S=>S.id===p?{id:T.id,pos:S.pos}:S)},Ft.value=T.id},g=t.placements.length-(n.side==="offense"?t.linemen+1:0);return _("div",{class:"col",children:[_("div",{class:"row",children:[_("select",{value:t.formation,onChange:p=>h(p.target.value),children:s.map(p=>_("option",{value:p.name,children:p.name}))}),n.side==="offense"&&_(Pt,{children:[_("button",{class:`small ${t.linemen===5?"active":""}`,onClick:()=>m(5,t.extraSide),children:"5 OL"}),_("button",{class:`small ${t.linemen===6&&t.extraSide==="left"?"active":""}`,onClick:()=>m(6,"left"),children:"6 OL (left)"}),_("button",{class:`small ${t.linemen===6&&t.extraSide==="right"?"active":""}`,onClick:()=>m(6,"right"),children:"6 OL (right)"})]})]}),n.side==="offense"&&_("label",{class:"row",children:[_("span",{style:{minWidth:120},children:["QB depth ",t.qbDepth.toFixed(1)," cm"]}),_("input",{type:"range",min:0,max:4,step:.5,value:t.qbDepth,onInput:p=>f(Number(p.target.value))}),_("span",{class:"muted",children:t.qbDepth===0?"under centre":"shotgun"})]}),_("div",{class:"muted",children:["Drag ",n.side==="offense"?"skill players":"defenders"," on the board. ",n.side==="offense"?`${g} skill players.`:""," Click a player to substitute."]}),d&&_("div",{class:"col",children:[_("div",{children:["Substitute ",_("b",{children:bf(d.id)})," with:"]}),_("div",{class:"row",children:l.filter(p=>n.side==="offense"?d.position==="OL"?p.position==="OL":d.position==="QB"?p.position==="QB":p.position!=="OL"&&p.position!=="QB":!0).map(p=>_("button",{class:"small",onClick:()=>v(d.id,p),children:[p.position," #",p.number," ",p.name.split(" ").slice(-1)[0]]}))})]}),a.length>0&&_("div",{class:"error",children:a.slice(0,4).map(p=>_("div",{children:p.text}))}),_("div",{class:"row",children:[_("span",{class:"spacer"}),_("button",{class:"primary",disabled:a.length>0,onClick:()=>be({kind:"lineup",placements:t.placements}),children:n.side==="offense"?"Set: defense lines up next":"Set: place markers"})]})]})}function nM(n){const e=At.value;if(!e||!e.play)return;const t=Object.values(e.play.players).filter(s=>s.side===n.side).map(s=>s.id),i={};for(const s of t)i[s]=yn([],n.slots);vi.value={coach:n.coach,side:n.side,markers:i},Zs.value=t.length?{id:t[0],slot:0}:null}function ro(n,e){const t=n.find(s=>s.id===e),i=n.filter(s=>s.position===t.position);return`${t.position}${i.indexOf(t)+1}`}function iM(n){try{return JSON.parse(localStorage.getItem(`afm-playbook-${n}`)??"[]").filter(e=>e.side===n)}catch{return[]}}function Oh(n,e){localStorage.setItem(`afm-playbook-${n}`,JSON.stringify(e))}function sM(){const n=Qt.value,e=At.value,t=vi.value,[i,s]=fn(""),[r,o]=fn(()=>n&&n.kind==="markers"?iM(n.side):[]);if(!n||n.kind!=="markers"||!e||!e.play||!t)return null;const a=e.config.teams[n.coach][n.side],c=Object.values(e.play.players).filter(A=>A.side===n.side).map(A=>a.find(D=>D.id===A.id)).sort((A,D)=>Fh(A.position)-Fh(D.position)||A.number-D.number),l=lf(n.side,c,t.markers),u=l.filter(A=>A.severity==="error"),d=l.filter(A=>A.severity==="warning"),h=Zs.value&&t.markers[Zs.value.id]?Zs.value:null,f=h?c.find(A=>A.id===h.id):null,m=h?t.markers[h.id][h.slot]:null,v=(A,D,M)=>{const b=[...t.markers[A]??yn([],n.slots)];b[D]=M,vi.value={...t,markers:{...t.markers,[A]:b}}},g=(A,D)=>{const M={...t.markers};for(const b of c.filter(P=>P.position==="OL")){const P=[...M[b.id]??yn([],n.slots)];if(D===null)for(let k=0;k<n.slots;k++)P[k]=A;else P[D]=A;M[b.id]=P}vi.value={...t,markers:M}},p=(A,D,M)=>{const b=[...t.markers[A]??yn([],n.slots)];for(let P=D;P<n.slots;P++)b[P]=M;vi.value={...t,markers:{...t.markers,[A]:b}}},T=c.filter(A=>A.id!==h?.id),S=(A,D)=>{Zs.value={id:A,slot:D},Ft.value=A},x=()=>{if(!i.trim())return;const A={};for(const M of c){const b=(t.markers[M.id]??[]).map(P=>(P.t==="read"||P.t==="handoff")&&P.target?{...P,target:ro(c,P.target)}:P);A[ro(c,M.id)]=b}const D=[...r.filter(M=>M.name!==i.trim()),{name:i.trim(),side:n.side,markers:A}];o(D),Oh(n.side,D)},w=A=>{const D={};for(const M of c){const b=ro(c,M.id),P=A.markers[b]??yn([],n.slots);D[M.id]=P.map(k=>{if((k.t==="read"||k.t==="handoff")&&typeof k.target=="string"){const B=c.find(Y=>ro(c,Y.id)===k.target);return B?{...k,target:B.id}:{t:"filler"}}return k})}vi.value={...t,markers:D}},R=A=>{const D=r.filter(M=>M.name!==A);o(D),Oh(n.side,D)};return _("div",{class:"col",children:[_("div",{class:"muted",children:"Markers are placed face down: the opponent sees only that a marker exists. Click a slot, then a marker type."}),_("div",{class:"list",children:c.map(A=>_("div",{class:"row",style:{gap:4},children:[_("span",{class:"num",style:{minWidth:68,fontSize:12},onClick:()=>S(A.id,0),children:[A.position," #",A.number]}),_("div",{class:"slots",style:{flex:1},children:yn(t.markers[A.id],n.slots).map((D,M)=>_("div",{class:`slot ${D.t} ${h&&h.id===A.id&&h.slot===M?"sel":""}`,onClick:()=>S(A.id,M),title:`Timeslice ${M+1}`,children:[_("span",{class:"muted",style:{fontSize:9},children:["T",M+1]}),_("span",{class:"t",children:D.t==="filler"?"filler":aM(D,c)})]}))})]}))}),h&&f&&m&&_("div",{class:"panel",children:[_("div",{class:"row",children:[_("b",{children:[f.position," #",f.number," ",f.name]}),_("span",{class:"muted",children:["timeslice ",h.slot+1]}),_("span",{class:"spacer"}),_("span",{class:"muted",children:Ko(m)})]}),_(rM,{def:f,slotIndex:h.slot,current:m,teammates:T,onSet:A=>v(h.id,h.slot,A),onFillRest:A=>p(h.id,h.slot,A),onAllLinemen:f.position==="OL"?(A,D)=>g(A,D?null:h.slot):void 0}),_("div",{class:"row",children:[_("button",{class:"small",disabled:h.slot>=n.slots-1,onClick:()=>S(h.id,h.slot+1),children:"Next slot →"}),_("button",{class:"small",onClick:()=>{const A=c.findIndex(M=>M.id===h.id),D=c[(A+1)%c.length];S(D.id,0)},children:"Next player ↓"})]})]}),_("div",{class:"panel",children:[_("h3",{children:"Playbook"}),_("div",{class:"row",children:[_("input",{placeholder:"play name",value:i,onInput:A=>s(A.target.value),style:{flex:1}}),_("button",{class:"small",onClick:x,disabled:!i.trim(),children:"Save"})]}),r.length>0&&_("div",{class:"row",children:r.map(A=>_("span",{class:"row",style:{gap:2},children:[_("button",{class:"small",onClick:()=>w(A),children:A.name}),_("button",{class:"small danger",onClick:()=>R(A.name),title:"delete",children:"×"})]}))})]}),u.length>0&&_("div",{class:"error",children:u.slice(0,4).map(A=>_("div",{children:A.text}))}),d.length>0&&_("div",{class:"chip warn",style:{whiteSpace:"normal"},children:d.map(A=>_("div",{children:A.text}))}),_("div",{class:"row",children:[_("span",{class:"spacer"}),_("button",{class:"primary",disabled:u.length>0,onClick:()=>be({kind:"markers",markers:t.markers}),children:"Place markers face down"})]})]})}function rM(n){const e=af(n.def.position),t=n.current,[i,s]=fn(t.t==="dir"&&t.dir!=="up"?t.angle:45),[r,o]=fn(t.t==="read"||t.t==="handoff"?t.target:n.teammates.find(c=>c.position!=="OL")?.id??""),a=(c,l,u="")=>_("button",{class:`small ${u} ${oM(t,l)?"active":""}`,onClick:()=>n.onSet(l),children:c});return _("div",{class:"col",children:[_("div",{class:"markerbtns",children:[e.includes("filler")&&a("Filler",{t:"filler"}),e.includes("passblock")&&a("Pass block",{t:"passblock"}),e.includes("runblock")&&a("Run block",{t:"runblock"}),e.includes("spy")&&a("Spy",{t:"spy"}),e.includes("blitz")&&a("Blitz",{t:"blitz"}),e.includes("man")&&a("Man",{t:"man"}),e.includes("continue")&&a("Continue",{t:"continue"}),e.includes("delay")&&a("Delay",{t:"delay"})]}),(e.includes("read")||e.includes("handoff"))&&_("div",{class:"row",children:[_("select",{value:r,onChange:c=>o(c.target.value),children:n.teammates.map(c=>_("option",{value:c.id,children:[c.position," #",c.number," ",c.name]}))}),e.includes("read")&&a("Read",{t:"read",target:r||n.teammates[0].id}),e.includes("handoff")&&n.slotIndex<2&&a("Hand off",{t:"handoff",target:r||n.teammates[0].id})]}),e.includes("run")&&n.slotIndex<2&&_("div",{class:"markerbtns",children:["left","right"].map(c=>["dive","offtackle","sprint"].map(l=>a(`${l==="dive"?"Dive":l==="offtackle"?"Off tackle":"Sprint"} ${c}`,{t:"run",side:c,lane:l})))}),e.includes("dir")&&_("div",{class:"col",children:[_("div",{class:"row",children:[a("Up",{t:"dir",dir:"up"}),a(`Left ${i}°`,{t:"dir",dir:"left",angle:i}),a(`Right ${i}°`,{t:"dir",dir:"right",angle:i})]}),_("label",{class:"row",children:[_("span",{class:"muted",style:{minWidth:70},children:["angle ",i,"°"]}),_("input",{type:"range",min:10,max:170,step:5,value:i,onInput:c=>s(Number(c.target.value))})]})]}),e.includes("cut")&&_("div",{class:"markerbtns",children:[a("Cut in",{t:"cut",cut:"in"}),a("Cut out",{t:"cut",cut:"out"}),a("Cut hook",{t:"cut",cut:"hook"}),a("Cut fly",{t:"cut",cut:"fly"})]}),e.includes("zone")&&_("div",{class:"markerbtns",children:[a("Flat L",{t:"zone",zone:"flat",side:"left"}),a("Flat R",{t:"zone",zone:"flat",side:"right"}),a("Hook",{t:"zone",zone:"hook"}),a("Curl L",{t:"zone",zone:"curl",side:"left"}),a("Curl R",{t:"zone",zone:"curl",side:"right"}),a("Deep",{t:"zone",zone:"deep"})]}),_("div",{class:"row",children:[_("button",{class:"small",onClick:()=>n.onFillRest(t),children:"Fill remaining slots with this"}),n.onAllLinemen&&_(Pt,{children:[_("button",{class:"small",onClick:()=>n.onAllLinemen(t,!1),children:"All linemen, this slot"}),_("button",{class:"small",onClick:()=>n.onAllLinemen(t,!0),children:"All linemen, all slots"})]})]})]})}function oM(n,e){return JSON.stringify(n)===JSON.stringify(e)}function aM(n,e){if(n.t==="read"||n.t==="handoff"){const t=e.find(i=>i.id===n.target);return`${n.t==="read"?"Read":"Hand"} #${t?.number??"?"}`}return Ko(n)}function Fh(n){return["QB","RB","FB","WR","TE","OL","DL","LB","CB","S"].indexOf(n)}function dt(n){const e=Os.value;return _("div",{class:`panel prompt ${e?"":"other"}`,children:[_("div",{class:"row",children:[n.d.coach!=="both"&&_("span",{class:"coachtag",style:{background:Bo(n.d.coach)},children:nc(n.d.coach)}),_("span",{class:"prompt-title",children:n.title})]}),n.hint&&_("div",{class:"muted",children:n.hint}),n.d.error&&_("div",{class:"error",children:n.d.error}),e?n.children:_("div",{class:"muted",children:"Waiting for the other coach…"})]})}function lM(n){switch(n.mode.t){case"free":return"any direction";case"fixed":return`straight ahead (${Math.round(n.mode.angle)}°)`;case"sector":return n.mode.label;case"closer":return`towards the ${n.mode.label}`;case"zone":return`within the ${n.mode.label} zone`;case"along":return n.mode.label;case"none":return n.mode.reason}}function cM(){const n=Qt.value,e=At.value;if(!n||!e)return null;const t=Jo(e),i=s=>bf(s);switch(n.kind){case"callToss":return _(dt,{d:n,title:"Call the toss",hint:"The visiting coach calls heads or tails.",children:_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"callToss",call:"heads"}),children:"Heads"}),_("button",{class:"primary",onClick:()=>be({kind:"callToss",call:"tails"}),children:"Tails"})]})});case"tossChoice":return _(dt,{d:n,title:"You won the toss",children:_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"tossChoice",choice:"receive"}),children:"Receive"}),_("button",{onClick:()=>be({kind:"tossChoice",choice:"kick"}),children:"Kick"})]})});case"kickoffType":return _(dt,{d:n,title:"Kick-off",hint:"A normal kick travels 2d20 plus the kicker's successrate beyond the 30. An onside kick is KICKING against COVERAGE +10; the winner has the ball at the kicking team's 40.",children:_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"kickoffType",type:"normal"}),children:"Kick deep"}),_("button",{onClick:()=>be({kind:"kickoffType",type:"onside"}),children:"Onside kick"})]})});case"fairCatch":return _(dt,{d:n,title:n.inEndzone?"The kick reaches the endzone":`The kick comes down at ${gr(n.spotYtg)}`,hint:"A fair catch takes the ball where it is (the 20 from the endzone). A return is RETURN against COVERAGE, d20 yards per win; five wins in a row is a touchdown.",children:_("div",{class:"row",children:[_("button",{onClick:()=>be({kind:"fairCatch",fairCatch:!0}),children:n.inEndzone?"Take the touchback":"Fair catch"}),_("button",{class:"primary",onClick:()=>be({kind:"fairCatch",fairCatch:!1}),children:"Return it"})]})});case"puntPerfect":return _(dt,{d:n,title:"A PERFECT kick: where do you put it?",children:_("div",{class:"row",children:[_("button",{onClick:()=>be({kind:"puntPerfect",choice:"touchback"}),children:"Into the endzone (touchback, their 20)"}),_("button",{class:"primary",onClick:()=>be({kind:"puntPerfect",choice:"oneYardLine"}),children:"On the 1 yard line (returnable)"})]})});case"playCall":return _(dt,{d:n,title:`${uM(e.down)} and ${e.lineToGain<=0?"goal":Math.round(e.ballOn-e.lineToGain)} at ${gr(e.ballOn)}`,children:_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"playCall",call:"scrimmage"}),children:"Run a play"}),n.options.includes("punt")&&_("button",{onClick:()=>be({kind:"playCall",call:"punt"}),children:"Punt"}),n.options.includes("fieldGoal")&&_("button",{onClick:()=>be({kind:"playCall",call:"fieldGoal"}),children:["Field goal (",n.fieldGoalLength," yd, ",n.fieldGoalModifier>=0?"+":"",n.fieldGoalModifier,")"]})]})});case"tryChoice":return _(dt,{d:n,title:"Touchdown! The try",hint:"An extra point is good on anything but a critical failure. A two-point attempt is one play from the 2 yard line.",children:_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"tryChoice",choice:"kick"}),children:"Kick the extra point"}),_("button",{onClick:()=>be({kind:"tryChoice",choice:"two"}),children:"Go for two"})]})});case"lineup":return _(dt,{d:n,title:`${n.side==="offense"?"Offense":"Defense"} lines up`,children:_(tM,{})});case"markers":return _(dt,{d:n,title:`${n.side==="offense"?"Offense":"Defense"} places markers`,children:_(sM,{})});case"manTarget":return _(dt,{d:n,title:`${i(n.defender)}: man coverage on whom?`,hint:"Click an offensive player on the board or below. The assignment cannot be changed later.",children:_("div",{class:"list",children:n.options.map(s=>_("div",{class:"item",onClick:()=>be({kind:"manTarget",target:s}),children:i(s)}))})});case"switchOption":return _(dt,{d:n,title:`${i(n.defender)} is in man coverage on a pass blocker`,hint:`${i(n.target)} revealed a pass block. The defender may switch to a blitz (no pre-snap move) or a zone, or stay (p. 37).`,children:_("div",{class:"row",children:[_("button",{onClick:()=>be({kind:"switchOption",choice:{t:"stay"}}),children:"Stay in man"}),_("button",{class:"primary",onClick:()=>be({kind:"switchOption",choice:{t:"blitz"}}),children:"Blitz"}),_("select",{value:$a.value,onChange:s=>$a.value=s.target.value,children:[_("option",{value:"flat-left",children:"Flat left"}),_("option",{value:"flat-right",children:"Flat right"}),_("option",{value:"hook",children:"Hook"}),_("option",{value:"curl-left",children:"Curl left"}),_("option",{value:"curl-right",children:"Curl right"}),_("option",{value:"deep",children:"Deep"})]}),_("button",{onClick:()=>be({kind:"switchOption",choice:{t:"zone",zone:hM($a.value)}}),children:"Zone"})]})});case"freeBlockers":{const s=n.blockers.find(r=>r.id===Lt.value);return _(dt,{d:n,title:"Move free blockers and designate blocks",hint:"Pick a blocker. Move him (click the field), designate the defender he will pick up (click a defender), or engage a defender within 2 cm now (green).",children:[_("div",{class:"list",children:n.blockers.map(r=>_("div",{class:`item ${r.id===Lt.value?"sel":""} ${r.done?"done":""}`,onClick:()=>(Lt.value=r.id,Mn.value="move"),children:[_("span",{class:"num",children:i(r.id).split(" ")[1]}),_("span",{class:"pos",children:i(r.id).split(" ")[0]}),_("span",{class:"chip",children:[r.kind," block"]}),_("span",{class:"muted",children:r.mayRelease?"double team":`${r.allowance.toFixed(1)} cm`}),r.designated&&_("span",{class:"chip warn",children:["→ ",i(r.designated).split(" ").slice(0,2).join(" ")]}),r.engageable.length>0&&r.mayEngage&&!r.done&&_("span",{class:"chip good",children:"can engage"}),r.done&&_("span",{class:"muted",children:"moved"})]}))}),s&&_("div",{class:"row",children:[!s.done&&!s.mayRelease&&_("button",{class:Mn.value==="move"?"active":"",onClick:()=>Mn.value="move",children:"Move: click the field"}),!s.mayRelease&&_("button",{class:Mn.value==="designate"?"active":"",onClick:()=>Mn.value="designate",children:"Designate: click a defender"}),s.designated&&_("button",{onClick:()=>be({kind:"designate",blocker:s.id,defender:null}),children:"Clear designation"}),s.engageable.map(r=>_("button",{class:"primary",disabled:!s.mayEngage,onClick:()=>be({kind:"engage",blocker:s.id,defender:r}),children:["Engage ",i(r)]})),s.mayRelease&&_("button",{onClick:()=>be({kind:"release",blocker:s.id}),children:"Leave the double team"}),!s.mayEngage&&s.kind==="run"&&_("span",{class:"muted",children:"Run blocks engage only once the ball is in play."})]}),_("div",{class:"row",children:[_("span",{class:"spacer"}),_("button",{class:"primary",onClick:()=>be({kind:"finish"}),children:"Done with blockers"})]})]})}case"move":{const s=n.movers.find(o=>o.id===Lt.value),r=n.movers.filter(o=>!o.done);return _(dt,{d:n,title:n.title,hint:"Pick a player, then click where he goes. Moves are straight lines up to his movement allowance.",children:[_("div",{class:"list",children:n.movers.map(o=>_("div",{class:`item ${o.id===Lt.value?"sel":""} ${o.done?"done":""}`,onClick:()=>(Lt.value=o.id,Nn.value="move"),children:[_("span",{class:"num",children:i(o.id).split(" ")[1]}),_("span",{class:"pos",children:i(o.id).split(" ")[0]}),_("span",{class:"muted",children:[o.allowance.toFixed(1)," cm"]}),_("span",{class:"muted",style:{fontSize:11},children:o.done?"done":lM(o)}),o.cutPending&&_("span",{class:"chip warn",children:"cut: ROUTES roll"}),o.mayDisengage&&_("span",{class:"chip",children:"may disengage"}),o.mayBlitz&&_("span",{class:"chip",children:"spy"}),o.mandatory&&_("span",{class:"chip warn",children:"run lane"})]}))}),s&&!s.done&&_("div",{class:"col",children:[s.note&&_("div",{class:"muted",children:s.note}),_("div",{class:"row",children:[s.mode.t!=="none"&&_("button",{class:Nn.value==="move"?"active":"",onClick:()=>Nn.value="move",children:"Move: click the field"}),s.mayDisengage&&_("button",{class:Nn.value==="disengage"?"active":"",onClick:()=>Nn.value="disengage",children:"Disengage (−1 cm): click the field"}),s.mayBlitz&&_("button",{onClick:()=>be({kind:"declareBlitz",id:s.id}),children:"Declare blitz"}),_("button",{onClick:()=>be({kind:"skipMove",id:s.id}),children:"Stay where he is"})]})]}),_("div",{class:"row",children:[_("span",{class:"muted",children:[r.length," left"]}),_("span",{class:"spacer"}),n.canFinish&&_("button",{class:"primary",onClick:()=>be({kind:"finish"}),children:"End phase"})]})]})}case"engageOffer":return _(dt,{d:n,title:`${i(n.defender)} comes within 2 cm of ${i(n.blocker)}`,hint:`${i(n.blocker)} designated him: he may step into contact and ${n.kind2} block him now (the block is resolved at once).`,children:_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"engageOffer",accept:!0}),children:"Block him"}),_("button",{onClick:()=>be({kind:"engageOffer",accept:!1}),children:"Let him go"})]})});case"pushAround":{const s=Jn.value,r=n.blockers.includes(n.winner);return _(dt,{d:n,title:`${i(n.winner)} won the block: push around?`,hint:"Push the loser up to 2 cm back and/or turn him up to 45°. If you turn you must follow; if you only push you may stay.",children:_("div",{class:"col",children:[r&&n.blockers.length>1&&_("div",{class:"row",children:[_("span",{class:"muted",children:"Push from"}),n.blockers.map(o=>_("button",{class:`small ${(s.anchor??n.winner)===o?"active":""}`,onClick:()=>Jn.value={...s,anchor:o},children:i(o)}))]}),_("label",{class:"row",children:[_("span",{style:{minWidth:90},children:["Push ",s.push.toFixed(1)," cm"]}),_("input",{type:"range",min:0,max:2,step:.25,value:s.push,onInput:o=>Jn.value={...s,push:Number(o.target.value)}})]}),_("label",{class:"row",children:[_("span",{style:{minWidth:90},children:["Turn ",s.turn,"°"]}),_("input",{type:"range",min:-45,max:45,step:5,value:s.turn,onInput:o=>Jn.value={...s,turn:Number(o.target.value)}})]}),_("label",{class:"row",children:[_("input",{type:"checkbox",checked:s.follow||s.turn!==0,disabled:s.turn!==0,onChange:o=>Jn.value={...s,follow:o.target.checked}}),_("span",{children:"Follow him (stay in contact)"})]}),_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"pushAround",push:s.push,turn:s.turn,follow:s.follow||s.turn!==0,anchor:s.anchor??void 0}),children:"Apply"}),_("button",{onClick:()=>be({kind:"pushAround",push:0,turn:0,follow:!1}),children:"No push"})]})]})})}case"pancakeChoice":return _(dt,{d:n,title:`${i(n.defender)} pancakes a blocker: which one?`,children:_("div",{class:"row",children:n.blockers.map(s=>_("button",{class:"primary",onClick:()=>be({kind:"pancakeChoice",blocker:s}),children:i(s)}))})});case"breakThrough":return _(dt,{d:n,title:`${i(n.defender)} breaks through!`,hint:`Place him anywhere in contact with ${i(n.blocker)}: click one of the red spots on the board. He acts normally next timeslice.`});case"clutchTackle":return _(dt,{d:n,title:`${i(n.defender)} may clutch tackle ${i(n.carrier)}`,hint:"A clutch tackle is made while being blocked: TACKLE at a penalty of half the tackling skill (rounded up).",children:_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"clutchTackle",attempt:!0}),children:"Attempt it"}),_("button",{onClick:()=>be({kind:"clutchTackle",attempt:!1}),children:"Let him pass"})]})});case"jumpTackle":return _(dt,{d:n,title:`${i(n.carrier)} runs within 2 cm of a defender`,hint:"He must stop here. One unblocked defender may step into contact and tackle (click him), or let him continue.",children:_("div",{class:"row",children:[n.candidates.map(s=>_("button",{class:"primary",onClick:()=>be({kind:"jumpTackle",defender:s}),children:[i(s)," tackles"]})),_("button",{onClick:()=>be({kind:"jumpTackle",defender:null}),children:"Let him run"})]})});case"tackleStyle":return _(dt,{d:n,title:`${i(n.tackler)} tackles near the sideline`,hint:"Pushing him out of bounds gives TACKLE +5 but cannot force a fumble.",children:_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>be({kind:"tackleStyle",style:"outOfBounds"}),children:"Out of bounds (+5)"}),_("button",{onClick:()=>be({kind:"tackleStyle",style:"normal"}),children:"Normal tackle"})]})});case"missedTackle":return _(dt,{d:n,title:`${i(n.tackler)} missed the tackle`,hint:`${i(n.carrier)} may be placed anywhere in contact with the tackler, no closer to the endzone than he is: click a green spot, or stay.`,children:_("div",{class:"row",children:_("button",{onClick:()=>be({kind:"missedTackle",angle:null}),children:"Stay where he is"})})});case"pass":{const s=Ls.value,r=n.options.find(o=>o.target===s);return _(dt,{d:n,title:"Pass the ball?",hint:n.mayPass?"Click a receiver (twice to throw), or hold the ball and go to the next timeslice.":n.reason,children:[_("div",{class:"list",children:[...n.options].sort((o,a)=>a.total-o.total).map(o=>_("div",{class:`item ${o.target===s?"sel":""}`,onClick:()=>Ls.value=o.target,children:[_("span",{class:"num",children:i(o.target).split(" ")[1]}),_("span",{class:"pos",children:i(o.target).split(" ")[0]}),_("span",{class:"muted",children:[o.distanceCm.toFixed(0)," cm"]}),o.isRead&&_("span",{class:"chip good",children:"read"}),_("span",{class:"spacer"}),_("span",{class:`mono ${o.total<0?"neg":""}`,children:o.total>=0?`+${o.total}`:o.total})]}))}),r&&_("div",{class:"modifiers",children:[r.modifiers.map(o=>_(Pt,{children:[_("span",{children:o.label}),_("span",{class:`mono ${o.value<0?"neg":o.value>0?"posv":""}`,children:o.value>=0?`+${o.value}`:o.value})]})),_("span",{style:{fontWeight:600},children:"ACCURACY target"}),_("span",{class:"mono",style:{fontWeight:600},children:(t?.skill(e.play.ball.carrier,"accuracy")??0)+Math.round(r.total)})]}),_("div",{class:"row",children:[_("button",{class:"primary",disabled:!r,onClick:()=>r&&be({kind:"pass",target:r.target}),children:["Throw",r?` to ${i(r.target).split(" ").slice(0,2).join(" ")}`:""]}),_("button",{onClick:()=>be({kind:"pass",target:null}),children:"Hold the ball"})]})]})}case"contest":{const s=Wi.value;return _(dt,{d:n,title:`Pass to ${i(n.receiver)}: contest or clean shot?`,hint:"Contest: COVER vs CATCHING, a chance to defend or intercept, but no tackle if he catches it. Clean shot: let him catch and hit him with TACKLE +5.",children:[_("div",{class:"list",children:n.defenders.map(r=>_("div",{class:"item",onClick:()=>Wi.value={...s,[r]:(s[r]??"contest")==="contest"?"cleanShot":"contest"},children:[_("span",{children:i(r)}),_("span",{class:"spacer"}),_("span",{class:`chip ${(s[r]??"contest")==="contest"?"good":"bad"}`,children:(s[r]??"contest")==="contest"?"CONTEST":"CLEAN SHOT"})]}))}),_("div",{class:"row",children:_("button",{class:"primary",onClick:()=>be({kind:"contest",choices:Object.fromEntries(n.defenders.map(r=>[r,s[r]??"contest"]))}),children:"Resolve the catch"})})]})}case"cleanShot":return _(dt,{d:n,title:`${i(n.carrier)} caught it: clean shot tackles`,hint:"Each defender who waited may tackle with +5, one at a time.",children:_("div",{class:"row",children:[n.tacklers.map(s=>_("button",{class:"primary",onClick:()=>be({kind:"cleanShot",tackler:s}),children:[i(s)," hits him"]})),_("button",{onClick:()=>be({kind:"cleanShot",tackler:null}),children:"No tackle"})]})});case"acknowledge":return _(dt,{d:n,title:n.title,hint:n.text,children:_("button",{class:"primary",onClick:()=>be({kind:"acknowledge"}),children:"Continue"})});case"gameOver":return _(dt,{d:n,title:"Game over"})}}function uM(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function hM(n){switch(n){case"flat-left":return{zone:"flat",side:"left"};case"flat-right":return{zone:"flat",side:"right"};case"curl-left":return{zone:"curl",side:"left"};case"curl-right":return{zone:"curl",side:"right"};case"deep":return{zone:"deep"};default:return{zone:"hook"}}}const dM=["QB","RB","FB","WR","TE","OL"],Ef=["speed","agility","running","tackle","cover","passrush","catching","routes","runblock","passblock","accuracy","poise","arm"],fM={speed:"SPEED",agility:"AGILITY",running:"RUNNING",tackle:"TACKLE",cover:"COVER",passrush:"RUSH",catching:"CATCHING",routes:"ROUTES",runblock:"RUNBLOCK",passblock:"PASSBLOCK",accuracy:"ACCURACY",poise:"POISE",arm:"ARM"},pM=["kicking","punting","coverage","return"];function mM(n){switch(n){case"speed":return 10;case"running":case"poise":case"arm":return 5;default:return 20}}const gM={QB:[4,8,0,0,0,0,0,0,0,0,10,0,0],RB:[5,10,1,0,0,0,8,8,6,6,0,0,0],FB:[4,8,0,0,0,0,6,8,10,8,0,0,0],WR:[6,10,0,0,0,0,10,10,4,4,0,0,0],TE:[5,8,0,0,0,0,10,10,8,8,0,0,0],OL:[3,6,0,0,0,0,0,0,10,10,0,0,0],DL:[3,8,0,10,4,10,0,0,0,0,0,0,0],LB:[4,10,0,10,8,8,0,0,0,0,0,0,0],CB:[6,10,0,8,10,6,0,0,0,0,0,0,0],S:[5,10,0,10,10,6,0,0,0,0,0,0,0]};function Tf(n){const e=gM[n],t={};return Ef.forEach((i,s)=>t[i]=e[s]),t}function _M(){return{kicking:10,punting:10,coverage:10,return:10}}function vM(n){const e=["speed","agility"];return n==="QB"?[...e,"accuracy","poise","arm"]:dM.includes(n)?[...e,"running","catching","routes","runblock","passblock"]:[...e,"tackle","cover","passrush"]}const yM={QB:[],RB:["agility","running"],FB:["runblock"],WR:["catching","routes"],TE:[],OL:["runblock","passblock"],DL:["passrush"],LB:["tackle"],CB:["cover"],S:[]},SM={QB:[],RB:[],FB:[],WR:["runblock","passblock"],TE:[],OL:["agility"],DL:["cover"],LB:[],CB:["passrush"],S:[]};function xM(n,e){return yM[n].includes(e)?"easy":SM[n].includes(e)?"hard":"normal"}function wf(n,e){return e==="normal"?n<=10?1:[2,3,4,5,8,10,12,14,16,20][n-11]:e==="easy"?n<=12?1:[2,2,4,6,8,10,12,16][n-13]:n<=7?1:[2,2,3,4,5,7,9,12,13,15,18,20,25][n-8]}function MM(n,e){return e==="easy"?[4,4,7,7,10][n-1]:[8,8,10,14,20][n-1]}function bM(n){return n<=5?8:[10,10,15,20,25][n-6]}function EM(n){return[5,5,10,15,20][n-1]}function TM(n,e,t){if(t<1||t>mM(e))throw new Error(`level ${t} out of range for ${e}`);const i=xM(n,e);switch(e){case"speed":return bM(t);case"running":return MM(t,i);case"poise":case"arm":return EM(t);default:return wf(t,i)}}function wM(n,e,t,i){if(i<=t)return 0;let s=0;for(let r=t+1;r<=i;r++)s+=TM(n,e,r);return s}function AM(n,e){let t=0;for(let i=n+1;i<=e;i++)t+=wf(i,"normal");return t}function Bh(n){let e=0;for(const i of[...n.offense,...n.defense]){const s=Tf(i.position);for(const r of Ef)e+=wM(i.position,r,s[r],i.skills[r])}const t=_M();for(const i of pM)e+=AM(t[i],n.special[i]);return e}function CM(n,e,t,i,s={}){const r={...Tf(i),...s};return{id:n,name:e,number:t,position:i,skills:r}}function RM(){const n=At.value,e=Ft.value;if(!n||!e)return _("div",{class:"panel",children:[_("h3",{children:"Inspector"}),_("div",{class:"muted",children:"Click a player to see his attributes, skills and state."})]});const t=Fo(e);if(!t)return null;const i=n.play,s=i?.players[e],r=Jo(n),o=i?.markers[e]??[],a=i?.engagements.find(u=>u.defender===e||u.blockers.includes(e)),c=i?.assignments[e],l=n.config.teams.home.offense.concat(n.config.teams.home.defense).some(u=>u.id===e)?n.config.teams.home.name:n.config.teams.away.name;return _("div",{class:"panel",children:[_("h3",{children:"Inspector"}),_("div",{children:[_("div",{style:{fontSize:15,fontWeight:600},children:["#",t.number," ",t.name]}),_("div",{class:"muted",children:[t.position," · ",l]})]}),_("div",{class:"skills",children:vM(t.position).map(u=>_("div",{children:[_("div",{class:"k",children:fM[u]}),_("div",{class:"v",children:t.skills[u]})]}))}),s&&r&&_("div",{class:"kv",children:[_("span",{class:"k",children:"Position"}),_("span",{class:"mono",children:[s.pos.x.toFixed(1),", ",s.pos.y.toFixed(1)," cm"]}),_("span",{class:"k",children:"Movement"}),_("span",{children:[r.allowance(e).toFixed(1)," cm this timeslice",s.s.speedPenalty?` (-${s.s.speedPenalty})`:"",s.s.halved?" (halved)":""]}),s.pancakedSlice!==null&&_(Pt,{children:[_("span",{class:"k",children:"Status"}),_("span",{class:"chip bad",children:"Pancaked"})]}),s.s.noAction&&s.pancakedSlice===null&&_(Pt,{children:[_("span",{class:"k",children:"Status"}),_("span",{class:"chip warn",children:"Getting up: no action"})]}),s.s.stranded&&_(Pt,{children:[_("span",{class:"k",children:"Status"}),_("span",{class:"chip warn",children:"Stranded before a hole"})]}),s.draggedBy.length>0&&_(Pt,{children:[_("span",{class:"k",children:"Dragging"}),_("span",{children:s.draggedBy.map(u=>r.short(u)).join(", ")})]}),s.cutSlice!==null&&_(Pt,{children:[_("span",{class:"k",children:"Cut"}),_("span",{children:["made in timeslice ",s.cutSlice]})]}),s.sidelineSlice!==null&&_(Pt,{children:[_("span",{class:"k",children:"Sideline"}),_("span",{children:["reached in timeslice ",s.sidelineSlice]})]}),c&&c.t!=="none"&&_(Pt,{children:[_("span",{class:"k",children:"Assignment"}),_("span",{children:[c.t==="man"?`Man on ${r.short(c.target)}`:c.t==="zone"?`Zone ${r.zoneLabel(c.zone)}`:c.t,s.freeSince!==null&&s.freeSince<=i.slice?" (now free)":""]})]}),a&&_(Pt,{children:[_("span",{class:"k",children:"Blocking"}),_("span",{children:[a.blockers.map(u=>r.short(u)).join(" + ")," vs ",r.short(a.defender)," · dominance ",a.dominance,s.s.clutchEligible?" · may clutch tackle":"",a.mayDisengage&&a.defender===e?" · may disengage":""]})]}),i&&i.designations[e]&&_(Pt,{children:[_("span",{class:"k",children:"Designates"}),_("span",{children:r.short(i.designations[e])})]})]}),o.length>0&&_("div",{children:[_("h3",{children:"Markers"}),_("div",{class:"slots",children:o.map((u,d)=>_("div",{class:`slot ${u.t}`,children:[_("span",{class:"muted",children:["T",d+1]}),_("span",{class:"t",children:u.t==="hidden"?"face down":Ko(u)})]}))})]})]})}function PM(){const n=At.value,e=Za(null),t=Dh.value,i=(n?.log??[]).filter(s=>t==="all"?!0:t==="rolls"?s.kind==="roll":s.kind!=="roll"&&s.kind!=="decision");return lo(()=>{const s=e.current;s&&(s.scrollTop=s.scrollHeight)},[i.length,t]),_("div",{class:"logpanel",children:[_("div",{class:"loghead",children:[_("h3",{children:"Log"}),_("div",{class:"tabs",children:["all","events","rolls"].map(s=>_("button",{class:`small ${t===s?"active":""}`,onClick:()=>Dh.value=s,children:s}))}),_("span",{class:"spacer"}),_("span",{class:"muted",children:[i.length," entries"]})]}),_("div",{class:"logbody",ref:e,children:i.slice(-400).map(s=>_("div",{class:`logline ${s.kind}`,children:[s.slice?_("span",{class:"muted",children:`T${s.slice} `}):null,s.text]},s.n))})]})}function LM(n){return _("div",{class:"curtain",onClick:n.onContinue,children:_("div",{class:"card",children:[_("div",{class:"muted",children:"Hidden information"}),_("h1",{children:["Pass the screen to ",_("span",{style:{color:Bo(n.coach)},children:nc(n.coach)})]}),_("div",{children:n.what}),_("button",{class:"primary",onClick:n.onContinue,children:["I am the ",nc(n.coach)," coach"]})]})})}function zo(n,e){return e.map((t,i)=>CM(`${n}-${t.position}-${i+1}-${t.number}`,t.name,t.number,t.position,t.up??{}))}function DM(){const n=zo("home",[{name:"Tobias Lund",number:12,position:"QB",up:{accuracy:15,arm:3,poise:2}},{name:"Mikkel Friis",number:7,position:"QB"},{name:"Jonas Berg",number:28,position:"RB",up:{running:4,speed:6,agility:12}},{name:"Emil Dahl",number:33,position:"RB",up:{running:2}},{name:"Rasmus Kjær",number:44,position:"FB",up:{runblock:12}},{name:"Simon Holm",number:81,position:"WR",up:{catching:15,routes:15,speed:8}},{name:"Anders Vang",number:84,position:"WR",up:{catching:12,routes:12,speed:7}},{name:"Casper Nygaard",number:19,position:"WR"},{name:"Mads Toft",number:11,position:"WR"},{name:"Frederik Juhl",number:87,position:"TE",up:{catching:12,runblock:10}},{name:"Oliver Brandt",number:88,position:"TE"},{name:"Henrik Mørk",number:72,position:"OL",up:{passblock:13,runblock:13}},{name:"Lars Winther",number:66,position:"OL",up:{passblock:13,runblock:13}},{name:"Peter Østergaard",number:55,position:"OL",up:{passblock:13,runblock:13}},{name:"Søren Bak",number:64,position:"OL",up:{passblock:13,runblock:13}},{name:"Niels Hvid",number:78,position:"OL",up:{passblock:13,runblock:13}},{name:"Jesper Riis",number:76,position:"OL"},{name:"Thomas Krog",number:70,position:"OL"}]),e=zo("home",[{name:"Kasper Lindgren",number:91,position:"DL",up:{passrush:15,tackle:11}},{name:"Daniel Skov",number:97,position:"DL",up:{passrush:14,tackle:11}},{name:"Martin Bruun",number:93,position:"DL",up:{passrush:14,tackle:11}},{name:"Jakob Ravn",number:99,position:"DL",up:{passrush:15}},{name:"Nikolaj Steen",number:95,position:"DL"},{name:"Christian Poulsen",number:52,position:"LB",up:{tackle:14,cover:10,speed:5}},{name:"Morten Høj",number:54,position:"LB",up:{tackle:14,cover:10}},{name:"Magnus Eriksen",number:56,position:"LB",up:{tackle:14}},{name:"Kristian Lauritsen",number:58,position:"LB"},{name:"Victor Hald",number:21,position:"CB",up:{cover:14,speed:8,agility:12}},{name:"William Fogh",number:24,position:"CB",up:{cover:14,speed:8,agility:12}},{name:"Lucas Thorsen",number:26,position:"CB"},{name:"Noah Enevoldsen",number:29,position:"CB"},{name:"Sebastian Krarup",number:31,position:"S",up:{tackle:12,cover:13,speed:6}},{name:"Alexander Dam",number:36,position:"S",up:{tackle:12,cover:13}},{name:"Marcus Ipsen",number:38,position:"S"}]);return{name:"Copenhagen Towers",abbreviation:"CPH",colors:{primary:"#1f6feb",secondary:"#e6edf3"},offense:n,defense:e,special:{kicking:14,punting:12,coverage:11,return:11}}}function kM(){const n=zo("away",[{name:"Bjørn Halvorsen",number:9,position:"QB",up:{accuracy:14,arm:2,poise:3}},{name:"Erik Sand",number:16,position:"QB"},{name:"Aksel Rønne",number:22,position:"RB",up:{running:5,speed:7,agility:13}},{name:"Viggo Strand",number:30,position:"RB",up:{running:3,speed:6}},{name:"Gorm Bjerre",number:42,position:"FB",up:{runblock:14,running:1}},{name:"Ivar Lykke",number:80,position:"WR",up:{catching:13,routes:13,speed:8}},{name:"Hjalte Mose",number:83,position:"WR",up:{catching:12,routes:12}},{name:"Troels Kamp",number:15,position:"WR"},{name:"Esben Gram",number:18,position:"WR"},{name:"Leif Thygesen",number:85,position:"TE",up:{runblock:12,catching:11}},{name:"Ulrik Foss",number:89,position:"TE",up:{runblock:11}},{name:"Knud Vestergaard",number:71,position:"OL",up:{runblock:14,passblock:12}},{name:"Arne Buhl",number:65,position:"OL",up:{runblock:14,passblock:12}},{name:"Sten Clausen",number:57,position:"OL",up:{runblock:14,passblock:12}},{name:"Palle Dyhr",number:63,position:"OL",up:{runblock:14,passblock:12}},{name:"Ole Munch",number:74,position:"OL",up:{runblock:14,passblock:12}},{name:"Carl Agerskov",number:77,position:"OL",up:{runblock:12}},{name:"Finn Hededal",number:60,position:"OL"}]),e=zo("away",[{name:"Rolf Kjeldsen",number:90,position:"DL",up:{passrush:14,tackle:12}},{name:"Svend Ottesen",number:94,position:"DL",up:{passrush:13,tackle:12}},{name:"Gunnar Lang",number:96,position:"DL",up:{passrush:13,tackle:12}},{name:"Thor Bisgaard",number:92,position:"DL",up:{passrush:13}},{name:"Helge Nørby",number:98,position:"DL"},{name:"Einar Vold",number:50,position:"LB",up:{tackle:15,cover:11,speed:5}},{name:"Asger Lind",number:51,position:"LB",up:{tackle:15,cover:11}},{name:"Vagn Primdahl",number:53,position:"LB",up:{tackle:13}},{name:"Birger Storm",number:59,position:"LB"},{name:"Jens Aagaard",number:20,position:"CB",up:{cover:13,speed:7}},{name:"Poul Rask",number:23,position:"CB",up:{cover:13,speed:7}},{name:"Kaj Wulff",number:25,position:"CB"},{name:"Bent Haugaard",number:27,position:"CB"},{name:"Hans Kyed",number:32,position:"S",up:{tackle:13,cover:12,speed:7}},{name:"Egon Lehmann",number:35,position:"S",up:{tackle:13,cover:12}},{name:"Villy Brix",number:39,position:"S"}]);return{name:"Aarhus Wolves",abbreviation:"AAR",colors:{primary:"#c0392b",secondary:"#f6f1e7"},offense:n,defense:e,special:{kicking:12,punting:13,coverage:12,return:12}}}function IM(n){const[e,t]=fn("redzone"),[i,s]=fn("collegeOT"),[r,o]=fn(()=>Math.floor(Math.random()*1e9)),[a,c]=fn("hotseat"),l=/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||new URLSearchParams(location.search).has("online"),[u,d]=fn("table-1"),[h,f]=fn("home"),m=DM(),v=kM(),g={fieldSize:e,gameType:i,seed:r,teams:{home:m,away:v}},p=async T=>{const S=await T.text(),x=JSON.parse(S);n.onStart({mode:"hotseat",config:x.config,room:u,coach:null,saved:x})};return _("div",{class:"newgame",children:_("div",{class:"card",children:[_("div",{children:[_("h1",{children:"American Football: The Board Game"}),_("div",{class:"muted",children:"Community Edition rules, played on a digital table by two coaches."})]}),_("div",{class:"grid",children:[_("label",{children:["Field",_("select",{value:e,onChange:T=>t(T.target.value),children:[_("option",{value:"full",children:"Full field (kick-offs and punts)"}),_("option",{value:"half",children:"Half field (drives start at the 50)"}),_("option",{value:"redzone",children:"Red zone only (drives start at the 20)"})]})]}),_("label",{children:["Game type",_("select",{value:i,onChange:T=>s(T.target.value),children:[_("option",{value:"full",children:"Full game (8+ drives, then two-minute mode)"}),_("option",{value:"collegeOT",children:"College overtime (alternate until not tied)"}),_("option",{value:"suddenDeathClassic",children:"Sudden death, classic (first score wins)"}),_("option",{value:"suddenDeathModern",children:"Sudden death, modern (each team one possession)"})]})]}),_("label",{children:["Seed (dice)",_("input",{type:"number",value:r,onInput:T=>o(Number(T.target.value))})]}),_("label",{children:["How to play",_("select",{value:a,onChange:T=>c(T.target.value),children:[_("option",{value:"hotseat",children:"Hot-seat: both coaches at this screen"}),l&&_("option",{value:"host",children:"Online: host a table on this server"}),l&&_("option",{value:"join",children:"Online: join a table"})]})]}),a!=="hotseat"&&_(Pt,{children:[_("label",{children:["Table name",_("input",{value:u,onInput:T=>d(T.target.value)})]}),_("label",{children:["You coach",_("select",{value:h,onChange:T=>f(T.target.value),children:[_("option",{value:"home",children:[m.name," (home)"]}),_("option",{value:"away",children:[v.name," (away)"]})]})]})]})]}),_("div",{class:"desc",children:[_("b",{children:m.name})," (",Bh(m)," skillpoints, pass-leaning) against ",_("b",{children:v.name})," (",Bh(v)," skillpoints, run-heavy). The rulebook recommends starting on a small field with a quick game type. Markers are hidden: in hot-seat play a curtain asks you to pass the screen between the coaches while they place markers."]}),_("div",{class:"row",children:[_("button",{class:"primary",onClick:()=>n.onStart({mode:a,config:g,room:u,coach:a==="hotseat"?null:h}),children:a==="hotseat"?"Start the game":a==="host"?"Host the table":"Join the table"}),_("label",{class:"row",style:{cursor:"pointer"},children:[_("span",{class:"muted",children:"or load a saved game"}),_("input",{type:"file",accept:"application/json",onChange:T=>T.target.files?.[0]&&p(T.target.files[0])})]})]}),_("div",{class:"desc",children:["Board: drag with the mouse to pan, wheel to zoom, ",_("kbd",{children:"F"})," fits the field, ",_("kbd",{children:"P"})," frames the play, ",_("kbd",{children:"B"})," centres on the ball, double-click frames the play."]})]})})}function UM(){const[n,e]=fn(!1),t=i=>{if(ln.value?.dispose(),i.mode==="hotseat")ln.value=new kx(i.config,i.saved);else{const r=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;ln.value=new Ix(r,i.room,i.coach,i.mode==="host"?i.config:null)}tc.value=null,e(!0)};return n?_(NM,{onNewGame:()=>e(!1)}):_(IM,{onStart:t})}function NM(n){const e=Za(null),t=Za(null),[i,s]=fn(null);lo(()=>{const d=e.current,h=new $S(d,{onClickPlayer:(m,v,g)=>$x(m,g),onClickField:m=>ic(m),onClickGhost:m=>Xx(m),onHover:(m,v,g)=>{Yx(m,v),Ox.value=g},onDrag:(m,v,g)=>qx(m,v)});t.current=h,window.afm={board:h,act:m=>ln.value?.apply(m),view:()=>At.value,pending:()=>Qt.value,toScreen:m=>h.toScreen(m)};const f=m=>{m.target.tagName==="INPUT"||m.target.tagName==="SELECT"||((m.key==="f"||m.key==="F")&&h.fitField(),(m.key==="p"||m.key==="P")&&h.fitPlay(),(m.key==="b"||m.key==="B")&&h.focusBall(),m.key==="Escape"&&(Ft.value=null,Lt.value=null))};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f),h.dispose()}},[]),lo(()=>{const d=yi(()=>{const f=At.value,m=t.current;if(!f||!m)return;const v=[...f.config.teams.home.offense,...f.config.teams.home.defense,...f.config.teams.away.offense,...f.config.teams.away.defense],g=f.play?.offense??f.possession,p=g==="home"?"away":"home";m.setTeams(v,{offense:f.config.teams[g].colors,defense:f.config.teams[p].colors});const S=(ln.value?.newLog.value??[]).find(w=>/ throws to /.test(w.text));let x;if(S&&f.play){const w=[...S.text.matchAll(/#(\d+)/g)].map(M=>Number(M[1])),R=Object.values(f.play.players).filter(M=>M.side==="offense"),A=R.find(M=>Fo(M.id)?.number===w[0]),D=R.find(M=>Fo(M.id)?.number===w[1]);A&&D&&(x={from:A.pos,to:D.pos})}Gi(()=>m.setView(f,Ih.value,{pass:x}))}),h=yi(()=>{const f=Ih.value;Gi(()=>{t.current?.setUi(f),s(f.preview?.text??null)})});return()=>{d(),h()}},[]),lo(()=>{let d="";return yi(()=>{const f=Gx.value,m=Qt.value;Gi(()=>{const v=f.split("|").slice(0,2).join("|")===d.split("|").slice(0,2).join("|")&&m&&(m.kind==="lineup"||m.kind==="markers");if(d=f,!v&&(Bx(),!!m)){if(m.kind==="lineup"?eM(m):xn.value=null,m.kind==="markers"?nM(m):vi.value=null,m.kind==="move"){const g=m.movers.filter(p=>!p.done&&(p.mode.t!=="none"||p.mayDisengage||p.mayBlitz));g.length===1&&(Lt.value=g[0].id)}if(m.kind==="freeBlockers"){const g=m.blockers.filter(p=>!p.done);g.length>=1&&(Lt.value=g[0].id)}}})})},[]);const r=Qt.value,o=At.value,c=(ln.value?.controls.length??0)===2,l=r&&r.kind==="markers"?`${r.coach}-${o?.snaps}-${o?.play?.los}`:null,u=c&&l!==null&&tc.value!==l&&Os.value;return _("div",{class:"layout",children:[_(Zx,{onNewGame:n.onNewGame}),_("div",{class:"left",children:[_(cM,{}),_(Qx,{})]}),_("div",{class:"boardwrap",children:[_("canvas",{ref:e}),_("div",{class:"board-hud",children:[_("button",{class:"small",onClick:()=>t.current?.fitPlay(),title:"Frame the play (P)",children:"Frame play"}),_("button",{class:"small",onClick:()=>t.current?.fitField(),title:"Fit the field (F)",children:"Whole field"}),_("button",{class:"small",onClick:()=>t.current?.focusBall(),title:"Centre on the ball (B)",children:"Ball"})]}),i&&_("div",{class:"board-tip",children:i})]}),_("div",{class:"right",children:[_(RM,{}),o&&o.stage==="over"&&_("div",{class:"panel",children:[_("h2",{children:"Final"}),_("div",{children:[o.config.teams.home.name," ",o.score.home," – ",o.score.away," ",o.config.teams.away.name]})]})]}),_(PM,{}),Oo.value&&_("div",{class:"toast",children:Oo.value}),u&&r&&r.kind==="markers"&&_(LM,{coach:r.coach,what:`${r.side==="offense"?"The offense":"The defense"} places its markers face down.`,onContinue:()=>tc.value=l})]})}Bf(_(UM,{}),document.getElementById("app"));
