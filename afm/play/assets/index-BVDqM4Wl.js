(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Aa,ht,Xh,Yh,Wi,zu,qh,Kh,Ga,zo,wr,Zh,nu,Fl,Bl,Jo={},jo=[],hm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ca=Array.isArray;function Ti(n,e){for(var t in e)n[t]=e[t];return n}function iu(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Jh(n,e,t){var i,s,r,o={};for(r in e)r=="key"?i=e[r]:r=="ref"?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?Aa.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)o[r]===void 0&&(o[r]=n.defaultProps[r]);return Ho(n,o,i,s,null)}function Ho(n,e,t,i,s){var r={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Xh,__i:-1,__u:0};return s==null&&ht.vnode!=null&&ht.vnode(r),r}function Wt(n){return n.children}function Ar(n,e){this.props=n,this.context=e}function gs(n,e){if(e==null)return n.__?gs(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?gs(n):null}function fm(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],s=[],r=Ti({},e);r.__v=e.__v+1,ht.vnode&&ht.vnode(r),su(n.__P,r,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??gs(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,nf(i,r,s),e.__e=e.__=null,r.__e!=t&&jh(r)}}function jh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),jh(n)}function Hu(n){(!n.__d&&(n.__d=!0)&&Wi.push(n)&&!Qo.__r++||zu!=ht.debounceRendering)&&((zu=ht.debounceRendering)||qh)(Qo)}function Qo(){try{for(var n,e=1;Wi.length;)Wi.length>e&&Wi.sort(Kh),n=Wi.shift(),e=Wi.length,fm(n)}finally{Wi.length=Qo.__r=0}}function Qh(n,e,t,i,s,r,o,a,c,l,u){var h,d,f,g,_,v,p=i&&i.__k||jo,b=e.length;for(c=pm(t,e,p,c,b),h=0;h<b;h++)(f=t.__k[h])!=null&&(d=f.__i!=-1&&p[f.__i]||Jo,f.__i=h,v=su(n,f,d,s,r,o,a,c,l,u),g=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&ru(d.ref,null,f),u.push(f.ref,f.__c||g,f)),_==null&&g!=null&&(_=g),4&f.__u?(c=ef(f,c,n),d.__e&&(d.__e=null)):typeof f.type=="function"&&v!==void 0?c=v:g&&(c=g.nextSibling),f.__u&=-7);return t.__e=_,c}function pm(n,e,t,i,s){var r,o,a,c,l,u=t.length,h=u,d=0;for(n.__k=new Array(s),r=0;r<s;r++)(o=e[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=n.__k[r]=Ho(null,o,null,null,null):Ca(o)?o=n.__k[r]=Ho(Wt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=n.__k[r]=Ho(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,c=r+d,o.__=n,o.__b=n.__b+1,a=null,(l=o.__i=mm(o,t,c,h))!=-1&&(h--,(a=t[l])&&(a.__u|=2)),a==null||a.__v==null?(l==-1&&(s>u?d--:s<u&&d++),typeof o.type!="function"&&(o.__u|=4)):l!=c&&(l==c-1?d--:l==c+1?d++:(l>c?d--:d++,o.__u|=4))):n.__k[r]=null;if(h)for(r=0;r<u;r++)(a=t[r])!=null&&(2&a.__u)==0&&(a.__e==i&&(i=gs(a)),rf(a,a));return i}function ef(n,e,t){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=ef(i[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=gs(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function mm(n,e,t,i){var s,r,o,a=n.key,c=n.type,l=e[t],u=l!=null&&(2&l.__u)==0;if(l===null&&a==null||u&&a==l.key&&c==l.type)return t;if(i>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((l=e[o=s>=0?s--:r++])!=null&&(2&l.__u)==0&&a==l.key&&c==l.type)return o}return-1}function Gu(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||hm.test(e)?t:t+"px"}function io(n,e,t,i,s){var r,o;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Gu(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Gu(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Zh,"$1")),o=e.toLowerCase(),e=o in n||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?i?t[wr]=i[wr]:(t[wr]=nu,n.addEventListener(e,r?Bl:Fl,r)):n.removeEventListener(e,r?Bl:Fl,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Vu(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[zo]==null)e[zo]=nu++;else if(e[zo]<t[wr])return;return t(ht.event?ht.event(e):e)}}}function su(n,e,t,i,s,r,o,a,c,l){var u,h,d,f,g,_,v,p,b,S,x,A,w,k,I,T,E=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[a=e.__e=t.__e]),(u=ht.__b)&&u(e);e:if(typeof E=="function"){h=o.length;try{if(b=e.props,S=E.prototype&&E.prototype.render,x=(u=E.contextType)&&i[u.__c],A=u?x?x.props.value:u.__:i,t.__c?p=(d=e.__c=t.__c).__=d.__E:(S?e.__c=d=new E(b,A):(e.__c=d=new Ar(b,A),d.constructor=E,d.render=vm),x&&x.sub(d),d.state||(d.state={}),d.__n=i,f=d.__d=!0,d.__h=[],d._sb=[]),S&&d.__s==null&&(d.__s=d.state),S&&E.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Ti({},d.__s)),Ti(d.__s,E.getDerivedStateFromProps(b,d.__s))),g=d.props,_=d.state,d.__v=e,f)S&&E.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),S&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(S&&E.getDerivedStateFromProps==null&&b!==g&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(b,A),e.__v==t.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(b,d.__s,A)===!1){e.__v!=t.__v&&(d.props=b,d.state=d.__s,d.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(D){D&&(D.__=e)}),jo.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d),a=gs(t);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(b,d.__s,A),S&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(g,_,v)})}if(d.context=A,d.props=b,d.__P=n,d.__e=!1,w=ht.__r,k=0,S)d.state=d.__s,d.__d=!1,w&&w(e),u=d.render(d.props,d.state,d.context),jo.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,w&&w(e),u=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++k<25);d.state=d.__s,d.getChildContext!=null&&(i=Ti(Ti({},i),d.getChildContext())),S&&!f&&d.getSnapshotBeforeUpdate!=null&&(v=d.getSnapshotBeforeUpdate(g,_)),I=u!=null&&u.type===Wt&&u.key==null?sf(u.props.children):u,a=Qh(n,Ca(I)?I:[I],e,t,i,s,r,o,a,c,l),d.base=e.__e,e.__u&=-161,d.__h.length&&o.push(d),p&&(d.__E=d.__=null)}catch(D){if(o.length=h,e.__v=null,c||r!=null){if(D.then){for(e.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;r!=null&&(r[r.indexOf(a)]=null),e.__e=a}else if(r!=null)for(T=r.length;T--;)iu(r[T])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),D.then||tf(e),ht.__e(D,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):a=e.__e=gm(t.__e,e,t,i,s,r,o,c,l);return(u=ht.diffed)&&u(e),128&e.__u?void 0:a}function tf(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(tf))}function nf(n,e,t){for(var i=0;i<t.length;i++)ru(t[i],t[++i],t[++i]);ht.__c&&ht.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(r){r.call(s)})}catch(r){ht.__e(r,s.__v)}})}function sf(n){return typeof n!="object"||n==null||n.__b>0?n:Ca(n)?n.map(sf):n.constructor!==void 0?null:Ti({},n)}function gm(n,e,t,i,s,r,o,a,c){var l,u,h,d,f,g,_,v=t.props||Jo,p=e.props,b=e.type;if(b=="svg"?s="http://www.w3.org/2000/svg":b=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((f=r[l])&&"setAttribute"in f==!!b&&(b?f.localName==b:f.nodeType==3)){n=f,r[l]=null;break}}if(n==null){if(b==null)return document.createTextNode(p);n=document.createElementNS(s,b,p.is&&p),a&&(ht.__m&&ht.__m(e,r),a=!1),r=null}if(b==null)v===p||a&&n.data==p||(n.data=p);else{if(r=b=="textarea"&&p.defaultValue!=null?null:r&&Aa.call(n.childNodes),!a&&r!=null)for(v={},l=0;l<n.attributes.length;l++)v[(f=n.attributes[l]).name]=f.value;for(l in v)f=v[l],l=="dangerouslySetInnerHTML"?h=f:l=="children"||l in p||l=="value"&&"defaultValue"in p||l=="checked"&&"defaultChecked"in p||io(n,l,null,f,s);for(l in p)f=p[l],l=="children"?d=f:l=="dangerouslySetInnerHTML"?u=f:l=="value"?g=f:l=="checked"?_=f:a&&typeof f!="function"||v[l]===f||io(n,l,f,v[l],s);if(u)a||h&&(u.__html==h.__html||u.__html==n.innerHTML)||(n.innerHTML=u.__html),e.__k=[];else if(h&&(n.innerHTML=""),Qh(e.type=="template"?n.content:n,Ca(d)?d:[d],e,t,i,b=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,o,r?r[0]:t.__k&&gs(t,0),a,c),r!=null)for(l=r.length;l--;)iu(r[l]);a&&b!="textarea"||(l="value",b=="progress"&&g==null?n.removeAttribute("value"):g!=null&&(g!==n[l]||b=="progress"&&!g||b=="option"&&g!=v[l])&&io(n,l,g,v[l],s),l="checked",_!=null&&_!=n[l]&&io(n,l,_,v[l],s))}return n}function ru(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){ht.__e(s,t)}}function rf(n,e,t){var i,s;if(ht.unmount&&ht.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||ru(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){ht.__e(r,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&rf(i[s],e,t||typeof n.type!="function");t||iu(n.__e),n.__c=n.__=n.__e=void 0}function vm(n,e,t){return this.constructor(n,t)}function _m(n,e,t){var i,s,r,o;e==document&&(e=document.documentElement),ht.__&&ht.__(n,e),s=(i=!1)?null:e.__k,r=[],o=[],su(e,n=e.__k=Jh(Wt,null,[n]),s||Jo,Jo,e.namespaceURI,s?null:e.firstChild?Aa.call(e.childNodes):null,r,s?s.__e:e.firstChild,i,o),nf(r,n,o),n.props.children=null}Aa=jo.slice,ht={__e:function(n,e,t,i){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},Xh=0,Yh=function(n){return n!=null&&n.constructor===void 0},Ar.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ti({},this.state),typeof n=="function"&&(n=n(Ti({},t),this.props)),n&&Ti(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Hu(this))},Ar.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Hu(this))},Ar.prototype.render=Wt,Wi=[],qh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Kh=function(n,e){return n.__v.__b-e.__v.__b},Qo.__r=0,Ga=Math.random().toString(8),zo="__d"+Ga,wr="__a"+Ga,Zh=/(PointerCapture)$|Capture$/i,nu=0,Fl=Vu(!1),Bl=Vu(!0);var ym=0;function m(n,e,t,i,s,r){e||(e={});var o,a,c=e;if("ref"in c)for(a in c={},e)a=="ref"?o=e[a]:c[a]=e[a];var l={type:n,props:c,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ym,__i:-1,__u:0,__source:s,__self:r};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)c[a]===void 0&&(c[a]=o[a]);return ht.vnode&&ht.vnode(l),l}var Nr,Bt,Va,Wu,ea=0,of=[],Vt=ht,$u=Vt.__b,Xu=Vt.__r,Yu=Vt.diffed,qu=Vt.__c,Ku=Vt.unmount,Zu=Vt.__;function ou(n,e){Vt.__h&&Vt.__h(Bt,n,ea||e),ea=0;var t=Bt.__H||(Bt.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function Pt(n){return ea=1,bm(lf,n)}function bm(n,e,t){var i=ou(Nr++,2);if(i.t=n,!i.__c&&(i.__=[lf(void 0,e),function(a){var c=i.__N?i.__N[0]:i.__[0],l=i.t(c,a);c!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=Bt,!Bt.__f)){var s=function(a,c,l){if(!i.__c.__H)return!0;var u=!1,h=i.__c.props!==a;if(i.__c.__H.__.some(function(f){if(f.__N){u=!0;var g=f.__[0];f.__=f.__N,f.__N=void 0,g!==f.__[0]&&(h=!0)}}),r){var d=r.call(this,a,c,l);return u?d||h:d}return!u||h};Bt.__f=!0;var r=Bt.shouldComponentUpdate,o=Bt.componentWillUpdate;Bt.componentWillUpdate=function(a,c,l){if(this.__e){var u=r;r=void 0,s(a,c,l),r=u}o&&o.call(this,a,c,l)},Bt.shouldComponentUpdate=s}return i.__N||i.__}function Ys(n,e){var t=ou(Nr++,3);!Vt.__s&&af(t.__H,e)&&(t.__=n,t.u=e,Bt.__H.__h.push(t))}function qs(n){return ea=5,Ks(function(){return{current:n}},[])}function Ks(n,e){var t=ou(Nr++,7);return af(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Sm(){for(var n;n=of.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(Go),e.__h.some(zl),e.__h=[]}catch(t){e.__h=[],Vt.__e(t,n.__v)}}}Vt.__b=function(n){Bt=null,$u&&$u(n)},Vt.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Zu&&Zu(n,e)},Vt.__r=function(n){Xu&&Xu(n),Nr=0;var e=(Bt=n.__c).__H;e&&(Va===Bt?(e.__h=[],Bt.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(Go),e.__h.some(zl),e.__h=[],Nr=0)),Va=Bt},Vt.diffed=function(n){Yu&&Yu(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(of.push(e)!==1&&Wu===Vt.requestAnimationFrame||((Wu=Vt.requestAnimationFrame)||xm)(Sm)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Va=Bt=null},Vt.__c=function(n,e){e.some(function(t){try{t.__h.some(Go),t.__h=t.__h.filter(function(i){return!i.__||zl(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Vt.__e(i,t.__v)}}),qu&&qu(n,e)},Vt.unmount=function(n){Ku&&Ku(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(i){try{Go(i)}catch(s){e=s}}),t.__H=void 0,e&&Vt.__e(e,t.__v))};var Ju=typeof requestAnimationFrame=="function";function xm(n){var e,t=function(){clearTimeout(i),Ju&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);Ju&&(e=requestAnimationFrame(t))}function Go(n){var e=Bt,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Bt=e}function zl(n){var e=Bt;n.__c=n.__(),Bt=e}function af(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function lf(n,e){return typeof e=="function"?e(n):e}var Mm=Symbol.for("preact-signals");function Ra(){if(Ri>1)Ri--;else{var n,e=!1;for((function(){var s=na;for(na=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var o=r.t;o!==void 0;o=o.x)o.i===s.i&&(o.i=r.i);s=s.o}})();Rr!==void 0;){var t=Rr;for(Rr=void 0,ta++;t!==void 0;){var i=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&uf(t))try{t.c()}catch(s){e||(n=s,e=!0)}t=i}}if(ta=0,Ri--,e)throw n}}function Em(n){if(Ri>0)return n();Hl=++Tm,Ri++;try{return n()}finally{Ra()}}var Cr,wt=void 0;function fs(n){var e=wt,t=Cr;wt=void 0,Cr=void 0;try{return n()}finally{wt=e,Cr=t}}var Rr=void 0,Ri=0,ta=0,Tm=0,Hl=0,na=void 0,ia=0;function cf(n){if(wt!==void 0){var e=n.n;if(e===void 0||e.t!==wt)return e={i:0,S:n,p:wt.s,n:void 0,t:wt,e:void 0,x:void 0,r:e},wt.s!==void 0&&(wt.s.n=e),wt.s=e,n.n=e,32&wt.f&&n.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=wt.s,e.n=void 0,wt.s.n=e,wt.s=e),e}}function tn(n,e){this.v=n,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}tn.prototype.brand=Mm;tn.prototype.h=function(){return!0};tn.prototype.S=function(n){var e=this,t=this.t;t!==n&&n.e===void 0&&(n.x=t,this.t=n,t!==void 0?t.e=n:fs(function(){var i;(i=e.W)==null||i.call(e)}))};tn.prototype.U=function(n){var e=this;if(this.t!==void 0){var t=n.e,i=n.x;t!==void 0&&(t.x=i,n.e=void 0),i!==void 0&&(i.e=t,n.x=void 0),n===this.t&&(this.t=i,i===void 0&&fs(function(){var s;(s=e.Z)==null||s.call(e)}))}};tn.prototype.subscribe=function(n){var e=this;return ki(function(){var t=e.value;fs(function(){return n(t)})},{name:"sub"})};tn.prototype.valueOf=function(){return this.value};tn.prototype.toString=function(){return this.value+""};tn.prototype.toJSON=function(){return this.value};tn.prototype.peek=function(){var n=this;return fs(function(){return n.value})};Object.defineProperty(tn.prototype,"value",{get:function(){var n=cf(this);return n!==void 0&&(n.i=this.i),this.v},set:function(n){if(n!==this.v){if(ta>100)throw new Error("Cycle detected");(function(t){Ri!==0&&ta===0&&t.l!==Hl&&(t.l=Hl,na={S:t,v:t.v,i:t.i,o:na})})(this),this.v=n,this.i++,ia++,Ri++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Ra()}}}});function tt(n,e){return new tn(n,e)}function uf(n){for(var e=n.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function df(n){for(var e=n.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){n.s=e;break}}}function hf(n){for(var e=n.s,t=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}n.s=t}function bs(n,e){tn.call(this,void 0,e),this.x=n,this.s=void 0,this.g=ia-1,this.f=4}bs.prototype=new tn;bs.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ia))return!0;if(this.g=ia,this.f|=1,this.i>0&&!uf(this))return this.f&=-2,!0;var n=wt;try{df(this),wt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return wt=n,hf(this),this.f&=-2,!0};bs.prototype.S=function(n){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}tn.prototype.S.call(this,n)};bs.prototype.U=function(n){if(this.t!==void 0&&(tn.prototype.U.call(this,n),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};bs.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;n!==void 0;n=n.x)n.t.N()}};Object.defineProperty(bs.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var n=cf(this);if(this.h(),n!==void 0&&(n.i=this.i),16&this.f)throw this.v;return this.v}});function Di(n,e){return new bs(n,e)}function ff(n){var e=n.j;if(n.j=void 0,typeof e=="function"){Ri++;var t=wt;wt=void 0;try{e()}catch(i){throw n.f&=-2,n.f|=8,au(n),i}finally{wt=t,Ra()}}}function au(n){for(var e=n.s;e!==void 0;e=e.n)e.S.U(e);n.x=void 0,n.s=void 0,ff(n)}function wm(n){if(wt!==this)throw new Error("Out-of-order effect");hf(this),wt=n,this.f&=-2;try{8&this.f&&au(this)}finally{Ra()}}function lr(n,e){this.x=n,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,Cr&&Cr.push(this)}lr.prototype.c=function(){var n=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.j=e)}finally{n()}};lr.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,ff(this),df(this),Ri++;var n=wt;return wt=this,wm.bind(this,n)};lr.prototype.N=function(){2&this.f||(this.f|=2,this.u=Rr,Rr=this)};lr.prototype.d=function(){this.f|=8,1&this.f||au(this)};lr.prototype.dispose=function(){this.d()};function ki(n,e){var t=new lr(n,e);try{t.c()}catch(s){throw t.d(),s}var i=t.d.bind(t);return i[Symbol.dispose]=i,i}var pf,so,Am=typeof window<"u"&&!!window.__PREACT_SIGNALS_DEVTOOLS__,mf=[];ki(function(){pf=this.N})();function cr(n,e){ht[n]=e.bind(null,ht[n]||function(){})}function Ur(n){if(so){var e=so;so=void 0,e()}so=n&&n.S()}function gf(n){var e=this,t=n.data,i=Rm(t);i.name="ReactiveDom",i.value=t;var s=Ks(function(){for(var a=e,c=e.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}var l=Di(function(){var f=i.value.value;return f===0?0:f===!0?"":f||""}),u=Di(function(){return!Array.isArray(l.value)&&!Yh(l.value)}),h=ki(function(){if(this.N=vf,u.value){var f=l.value;a.__v&&a.__v.__e&&a.__v.__e.nodeType===3&&(a.__v.__e.data=f)}}),d=e.__$u.d;return e.__$u.d=function(){h(),d.call(this)},[u,l]},[]),r=s[0],o=s[1];return r.value?o.peek():o.value}gf.displayName="ReactiveTextNode";Object.defineProperties(tn.prototype,{constructor:{configurable:!0,value:Jh(Wt,null).constructor},type:{configurable:!0,value:gf},props:{configurable:!0,get:function(){var n=this;return{data:{get value(){return n.value}}}}},__b:{configurable:!0,value:1}});cr("__b",function(n,e){if(Ur(),typeof e.type=="string"){var t,i=e.props;for(var s in i)if(s!=="children"){var r=i[s];r instanceof tn&&(t||(e.__np=t={}),t[s]=r,i[s]=r.peek())}}n(e)});cr("__r",function(n,e){if(n(e),e.type!==Wt){Ur();var t,i=e.__c;i&&(i.__$f&=-2,(t=i.__$u)===void 0&&(i.__$u=t=(function(s,r){var o;return ki(function(){o=this},{name:r}),o.c=s,o})((function(s){return function(){var r;Am&&((r=this.y)==null||r.call(this)),s.__$f|=1,s.setState({})}})(i),typeof e.type=="function"?e.type.displayName||e.type.name:""))),Ur(t)}});cr("__e",function(n,e,t,i){Ur(),n(e,t,i)});cr("diffed",function(n,e){Ur();var t;if(typeof e.type=="string"&&(t=e.__e)){var i=e.__np,s=e.props,r=t.U;if(r)for(var o in r){var a=r[o];a===void 0||i&&o in i||(a.d(),r[o]=void 0)}if(i){r||(r={},t.U=r);for(var c in i){var l=r[c],u=i[c];l===void 0?(l=Cm(t,c,u,s),r[c]=l):l.o(u,s)}}}n(e)});function Cm(n,e,t,i){var s=e in n&&n.ownerSVGElement===void 0,r=tt(t);return{o:function(o,a){r.value=o,i=a},d:ki(function(){this.N=vf;var o=r.value.value;i[e]!==o&&(i[e]=o,s?n[e]=o:o!=null&&(o!==!1||e[4]==="-")?n.setAttribute(e,o):n.removeAttribute(e))})}}cr("unmount",function(n,e){if(typeof e.type=="string"){var t=e.__e;if(t){var i=t.U;if(i){t.U=void 0;for(var s in i){var r=i[s];r&&r.d()}}}var o=e.__np;if(o){var a=e.props;for(var c in o)a[c]=o[c]}e.__np=void 0}else{var l=e.__c;if(l){l.__$f|=8;var u=l.__$u;u&&(l.__$u=void 0,u.d())}}n(e)});cr("__h",function(n,e,t,i){i<3&&(e.__$f|=2),n(e,t,i)});Ar.prototype.shouldComponentUpdate=function(n,e){if(this.__R)return!0;var t=this.__$u,i=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var r=2&this.__$f;if(!(i||r||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var o in n)if(o!=="__source"&&n[o]!==this.props[o])return!0;for(var a in this.props)if(!(a in n))return!0;return!1};function Rm(n,e){return Ks(function(){return tt(n,e)},[])}var km=function(n){queueMicrotask(function(){queueMicrotask(n)})};function Pm(){Em(function(){for(var n;n=mf.shift();)pf.call(n)})}function vf(){mf.push(this)===1&&(ht.requestAnimationFrame||km)(Pm)}const lu="180",Lm=0,ju=1,Dm=2,_f=1,Im=2,bi=3,qi=0,_n=1,Mi=2,Xi=0,Zs=1,Qu=2,ed=3,td=4,Nm=5,ls=100,Um=101,Om=102,Fm=103,Bm=104,zm=200,Hm=201,Gm=202,Vm=203,Gl=204,Vl=205,Wm=206,$m=207,Xm=208,Ym=209,qm=210,Km=211,Zm=212,Jm=213,jm=214,Wl=0,$l=1,Xl=2,er=3,Yl=4,ql=5,Kl=6,Zl=7,yf=0,Qm=1,eg=2,Yi=0,tg=1,ng=2,ig=3,sg=4,rg=5,og=6,ag=7,bf=300,tr=301,nr=302,Jl=303,jl=304,ka=306,Ql=1e3,ds=1001,ec=1002,Xn=1003,lg=1004,ro=1005,Wn=1006,Wa=1007,hs=1008,Ii=1009,Sf=1010,xf=1011,Or=1012,cu=1013,vs=1014,wi=1015,Kr=1016,uu=1017,du=1018,Fr=1020,Mf=35902,Ef=35899,Tf=1021,wf=1022,$n=1023,Br=1026,zr=1027,Af=1028,hu=1029,Cf=1030,fu=1031,pu=1033,Vo=33776,Wo=33777,$o=33778,Xo=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,lc=37808,cc=37809,uc=37810,dc=37811,hc=37812,fc=37813,pc=37814,mc=37815,gc=37816,vc=37817,_c=37818,yc=37819,bc=37820,Sc=37821,xc=36492,Mc=36494,Ec=36495,Tc=36283,wc=36284,Ac=36285,Cc=36286,cg=3200,ug=3201,dg=0,hg=1,$i="",gn="srgb",ir="srgb-linear",sa="linear",pt="srgb",Ts=7680,nd=519,fg=512,pg=513,mg=514,Rf=515,gg=516,vg=517,_g=518,yg=519,Rc=35044,id="300 es",oi=2e3,ra=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,kc=180/Math.PI;function Pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function bg(n,e){return(n%e+e)%e}function $a(n,e,t){return(1-t)*n+t*e}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let v=1-a;const p=c*d+l*f+u*g+h*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,p*b);v=Math.sin(v*w)/A,a=Math.sin(a*w)/A}const x=a*b;if(c=c*v+d*x,l=l*v+f*x,u=u*v+g*x,h=h*v+_*x,v===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new O,sd=new Zr;class Xe{constructor(e,t,i,s,r,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=s[0],v=s[3],p=s[6],b=s[1],S=s[4],x=s[7],A=s[2],w=s[5],k=s[8];return r[0]=o*_+a*b+c*A,r[3]=o*v+a*S+c*w,r[6]=o*p+a*x+c*k,r[1]=l*_+u*b+h*A,r[4]=l*v+u*S+h*w,r[7]=l*p+u*x+h*k,r[2]=d*_+f*b+g*A,r[5]=d*v+f*S+g*w,r[8]=d*p+f*x+g*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new Xe;function kf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sg(){const n=oa("canvas");return n.style.display="block",n}const rd={};function Hr(n){n in rd||(rd[n]=!0,console.warn(n))}function xg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const od=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){const n={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ir]:{primaries:e,whitePoint:i,transfer:sa,toXYZ:od,fromXYZ:ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:od,fromXYZ:ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}const rt=Mg();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ws;class Eg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=oa("canvas")),ws.width=e.width,ws.height=e.height;const s=ws.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tg=0;class mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wg=0;const Ka=new O;class fn extends ur{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=ds,s=ds,r=Wn,o=hs,a=$n,c=Ii,l=fn.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Pi(),this.name="",this.source=new mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=bf;fn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,s=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],v=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+v)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(f+1)/2,A=(p+1)/2,w=(u+d)/4,k=(h+_)/4,I=(g+v)/4;return S>x&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=k/i):x>A?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=I/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=k/r,s=I/r),this.set(i,s,r,t),this}let b=Math.sqrt((v-g)*(v-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(v-g)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ag extends ur{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new fn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends Ag{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pf extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cg extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),ao.subVectors(this.max,mr),As.subVectors(e.a,mr),Cs.subVectors(e.b,mr),Rs.subVectors(e.c,mr),Fi.subVectors(Cs,As),Bi.subVectors(Rs,Cs),Qi.subVectors(As,Rs);let t=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-Qi.z,Qi.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,Qi.z,0,-Qi.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-Qi.y,Qi.x,0];return!Za(t,As,Cs,Rs,ao)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,As,Cs,Rs,ao))?!1:(lo.crossVectors(Fi,Bi),t=[lo.x,lo.y,lo.z],Za(t,As,Cs,Rs,ao))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new O,new O,new O,new O,new O,new O,new O,new O],In=new O,oo=new Jr,As=new O,Cs=new O,Rs=new O,Fi=new O,Bi=new O,Qi=new O,mr=new O,ao=new O,lo=new O,es=new O;function Za(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),u=i.dot(es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Rg=new Jr,gr=new O,Ja=new O;class Pa{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Ja)),this.expandByPoint(gr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pi=new O,ja=new O,co=new O,zi=new O,Qa=new O,uo=new O,el=new O;class gu{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ja.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(co),a=zi.dot(this.direction),c=-zi.dot(co),l=zi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ja).addScaledVector(co,d),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){Qa.subVectors(t,e),uo.subVectors(i,e),el.crossVectors(Qa,uo);let o=this.direction.dot(el),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const c=a*this.direction.dot(uo.crossVectors(zi,uo));if(c<0)return null;const l=a*this.direction.dot(Qa.cross(zi));if(l<0||c+l>o)return null;const u=-a*zi.dot(el);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,v){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,v)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,g,_,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kg,e,Pg)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Hi.crossVectors(i,Sn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Hi.crossVectors(i,Sn)),Hi.normalize(),ho.crossVectors(Sn,Hi),s[0]=Hi.x,s[4]=ho.x,s[8]=Sn.x,s[1]=Hi.y,s[5]=ho.y,s[9]=Sn.y,s[2]=Hi.z,s[6]=ho.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],v=i[10],p=i[14],b=i[3],S=i[7],x=i[11],A=i[15],w=s[0],k=s[4],I=s[8],T=s[12],E=s[1],D=s[5],F=s[9],G=s[13],q=s[2],W=s[6],P=s[10],$=s[14],H=s[3],ee=s[7],oe=s[11],pe=s[15];return r[0]=o*w+a*E+c*q+l*H,r[4]=o*k+a*D+c*W+l*ee,r[8]=o*I+a*F+c*P+l*oe,r[12]=o*T+a*G+c*$+l*pe,r[1]=u*w+h*E+d*q+f*H,r[5]=u*k+h*D+d*W+f*ee,r[9]=u*I+h*F+d*P+f*oe,r[13]=u*T+h*G+d*$+f*pe,r[2]=g*w+_*E+v*q+p*H,r[6]=g*k+_*D+v*W+p*ee,r[10]=g*I+_*F+v*P+p*oe,r[14]=g*T+_*G+v*$+p*pe,r[3]=b*w+S*E+x*q+A*H,r[7]=b*k+S*D+x*W+A*ee,r[11]=b*I+S*F+x*P+A*oe,r[15]=b*T+S*G+x*$+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],v=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+v*(+t*l*h-t*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],v=e[14],p=e[15],b=h*v*l-_*d*l+_*c*f-a*v*f-h*c*p+a*d*p,S=g*d*l-u*v*l-g*c*f+o*v*f+u*c*p-o*d*p,x=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,A=g*h*c-u*_*c-g*a*d+o*_*d+u*a*v-o*h*v,w=t*b+i*S+s*x+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/w;return e[0]=b*k,e[1]=(_*d*r-h*v*r-_*s*f+i*v*f+h*s*p-i*d*p)*k,e[2]=(a*v*r-_*c*r+_*s*l-i*v*l-a*s*p+i*c*p)*k,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*k,e[4]=S*k,e[5]=(u*v*r-g*d*r+g*s*f-t*v*f-u*s*p+t*d*p)*k,e[6]=(g*c*r-o*v*r-g*s*l+t*v*l+o*s*p-t*c*p)*k,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*k,e[8]=x*k,e[9]=(g*h*r-u*_*r-g*i*f+t*_*f+u*i*p-t*h*p)*k,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*k,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*f-t*a*f)*k,e[12]=A*k,e[13]=(u*_*s-g*h*s+g*i*d-t*_*d-u*i*v+t*h*v)*k,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*v-t*a*v)*k,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*k,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,v=o*h,p=a*h,b=c*l,S=c*u,x=c*h,A=i.x,w=i.y,k=i.z;return s[0]=(1-(_+p))*A,s[1]=(f+x)*A,s[2]=(g-S)*A,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(v+b)*w,s[7]=0,s[8]=(g+S)*k,s[9]=(v-b)*k,s[10]=(1-(d+_))*k,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ks.set(s[0],s[1],s[2]).length();const o=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);const l=1/r,u=1/o,h=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,t.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=oi,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===oi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ra)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===oi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ra)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ks=new O,Nn=new Dt,kg=new O(0,0,0),Pg=new O(1,1,1),Hi=new O,ho=new O,Sn=new O,ld=new Dt,cd=new Zr;class Ni{constructor(e=0,t=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lg=0;const ud=new O,Ps=new Zr,mi=new Dt,fo=new O,vr=new O,Dg=new O,Ig=new Zr,dd=new O(1,0,0),hd=new O(0,1,0),fd=new O(0,0,1),pd={type:"added"},Ng={type:"removed"},Ls={type:"childadded",child:null},tl={type:"childremoved",child:null};class pn extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new O,t=new Ni,i=new Zr,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Xe}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return ud.copy(e).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fo.copy(e):fo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(vr,fo,this.up):mi.lookAt(fo,vr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(mi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ng),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pn.DEFAULT_UP=new O(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new O,gi=new O,nl=new O,vi=new O,Ds=new O,Is=new O,md=new O,il=new O,sl=new O,rl=new O,ol=new zt,al=new zt,ll=new zt;class Mn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Un.subVectors(s,t),gi.subVectors(i,t),nl.subVectors(e,t);const o=Un.dot(Un),a=Un.dot(gi),c=Un.dot(nl),l=gi.dot(gi),u=gi.dot(nl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ol.setScalar(0),al.setScalar(0),ll.setScalar(0),ol.fromBufferAttribute(e,t),al.fromBufferAttribute(e,i),ll.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ol,r.x),o.addScaledVector(al,r.y),o.addScaledVector(ll,r.z),o}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),gi.subVectors(e,t),Un.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Un.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,i),Is.subVectors(r,i),il.subVectors(e,i);const c=Ds.dot(il),l=Is.dot(il);if(c<=0&&l<=0)return t.copy(i);sl.subVectors(e,s);const u=Ds.dot(sl),h=Is.dot(sl);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ds,o);rl.subVectors(e,r);const f=Ds.dot(rl),g=Is.dot(rl);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Is,a);const v=u*g-f*h;if(v<=0&&h-u>=0&&f-g>=0)return md.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(md,a);const p=1/(v+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Ds,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},po={h:0,s:0,l:0};function cl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=bg(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=cl(o,r,e+1/3),this.g=cl(o,r,e),this.b=cl(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const i=Lf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return rt.workingToColorSpace(sn.copy(this),e),Math.round(Ze(sn.r*255,0,255))*65536+Math.round(Ze(sn.g*255,0,255))*256+Math.round(Ze(sn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=gn){rt.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(po);const i=$a(Gi.h,po.h,t),s=$a(Gi.s,po.s,t),r=$a(Gi.l,po.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new et;et.NAMES=Lf;let Ug=0;class dr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Zs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Vl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gl&&(i.blendSrc=this.blendSrc),this.blendDst!==Vl&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class St extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new O,mo=new ve;let Og=0;class Yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Og++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class Df extends Yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class If extends Yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends Yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fg=0;const Rn=new Dt,ul=new pn,Ns=new O,xn=new Jr,_r=new Jr,jt=new O;class on extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?If:Df)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(xn.min,_r.min),xn.expandByPoint(jt),jt.addVectors(xn.max,_r.max),xn.expandByPoint(jt)):(xn.expandByPoint(_r.min),xn.expandByPoint(_r.max))}xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(Ns.fromBufferAttribute(e,l),jt.add(Ns)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new O,c[I]=new O;const l=new O,u=new O,h=new O,d=new ve,f=new ve,g=new ve,_=new O,v=new O;function p(I,T,E){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),v.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(_),a[T].add(_),a[E].add(_),c[I].add(v),c[T].add(v),c[E].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,T=b.length;I<T;++I){const E=b[I],D=E.start,F=E.count;for(let G=D,q=D+F;G<q;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new O,x=new O,A=new O,w=new O;function k(I){A.fromBufferAttribute(s,I),w.copy(A);const T=a[I];S.copy(T),S.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(w,T);const D=x.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,D)}for(let I=0,T=b.length;I<T;++I){const E=b[I],D=E.start,F=E.count;for(let G=D,q=D+F;G<q;G+=3)k(e.getX(G+0)),k(e.getX(G+1)),k(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,v=c.length;_<v;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Yn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gd=new Dt,ts=new gu,go=new Pa,vd=new O,vo=new O,_o=new O,yo=new O,dl=new O,bo=new O,_d=new O,So=new O;class nt extends pn{constructor(e=new on,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(dl.fromBufferAttribute(h,e),o?bo.addScaledVector(dl,u):bo.addScaledVector(dl.sub(t),u))}t.add(bo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(go.containsPoint(ts.origin)===!1&&(ts.intersectSphere(go,vd)===null||ts.origin.distanceToSquared(vd)>(e.far-e.near)**2))&&(gd.copy(r).invert(),ts.copy(e.ray).applyMatrix4(gd),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const v=d[g],p=o[v.materialIndex],b=Math.max(v.start,f.start),S=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let x=b,A=S;x<A;x+=3){const w=a.getX(x),k=a.getX(x+1),I=a.getX(x+2);s=xo(this,p,e,i,l,u,h,w,k,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let v=g,p=_;v<p;v+=3){const b=a.getX(v),S=a.getX(v+1),x=a.getX(v+2);s=xo(this,o,e,i,l,u,h,b,S,x),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const v=d[g],p=o[v.materialIndex],b=Math.max(v.start,f.start),S=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let x=b,A=S;x<A;x+=3){const w=x,k=x+1,I=x+2;s=xo(this,p,e,i,l,u,h,w,k,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let v=g,p=_;v<p;v+=3){const b=v,S=v+1,x=v+2;s=xo(this,o,e,i,l,u,h,b,S,x),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function Bg(n,e,t,i,s,r,o,a){let c;if(e.side===_n?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===qi,a),c===null)return null;So.copy(a),So.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(So);return l<t.near||l>t.far?null:{distance:l,point:So.clone(),object:n}}function xo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,vo),n.getVertexPosition(c,_o),n.getVertexPosition(l,yo);const u=Bg(n,e,t,i,vo,_o,yo,_d);if(u){const h=new O;Mn.getBarycoord(_d,vo,_o,yo,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,a,c,l,h,new ve)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,a,c,l,h,new ve)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new O,materialIndex:0};Mn.getNormal(vo,_o,yo,d.normal),u.face=d,u.barycoord=h}return u}class jr extends on{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function g(_,v,p,b,S,x,A,w,k,I,T){const E=x/k,D=A/I,F=x/2,G=A/2,q=w/2,W=k+1,P=I+1;let $=0,H=0;const ee=new O;for(let oe=0;oe<P;oe++){const pe=oe*D-G;for(let Be=0;Be<W;Be++){const Pe=Be*E-F;ee[_]=Pe*b,ee[v]=pe*S,ee[p]=q,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[v]=0,ee[p]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Be/k),h.push(1-oe/I),$+=1}}for(let oe=0;oe<I;oe++)for(let pe=0;pe<k;pe++){const Be=d+pe+W*oe,Pe=d+pe+W*(oe+1),lt=d+(pe+1)+W*(oe+1),it=d+(pe+1)+W*oe;c.push(Be,Pe,it),c.push(Pe,lt,it),H+=6}a.addGroup(f,H,T),f+=H,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=sr(n[t]);for(const s in i)e[s]=i[s]}return e}function zg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Hg={clone:sr,merge:dn};var Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Uf extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new O,yd=new ve,bd=new ve;class Bn extends Uf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,yd,bd),t.subVectors(bd,yd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Os=1;class Wg extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bn(Us,Os,e,t);s.layers=this.layers,this.add(s);const r=new Bn(Us,Os,e,t);r.layers=this.layers,this.add(r);const o=new Bn(Us,Os,e,t);o.layers=this.layers,this.add(o);const a=new Bn(Us,Os,e,t);a.layers=this.layers,this.add(a);const c=new Bn(Us,Os,e,t);c.layers=this.layers,this.add(c);const l=new Bn(Us,Os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Of extends fn{constructor(e=[],t=tr,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $g extends _s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Of(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jr(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Xi});r.uniforms.tEquirect.value=t;const o=new nt(s,r),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=Wn),new Wg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ln extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xg={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,i),p=this._getHandJoint(l,_);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Yg extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new O;class aa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ff extends dr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Fs;const yr=new O,Bs=new O,zs=new O,Hs=new ve,br=new ve,Bf=new Dt,Mo=new O,Sr=new O,Eo=new O,Sd=new ve,fl=new ve,xd=new ve;class Kg extends pn{constructor(e=new Ff){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qg(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new aa(i,3,0,!1)),Fs.setAttribute("uv",new aa(i,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),Bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-zs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;To(Mo.set(-.5,-.5,0),zs,o,Bs,s,r),To(Sr.set(.5,-.5,0),zs,o,Bs,s,r),To(Eo.set(.5,.5,0),zs,o,Bs,s,r),Sd.set(0,0),fl.set(1,0),xd.set(1,1);let a=e.ray.intersectTriangle(Mo,Sr,Eo,!1,yr);if(a===null&&(To(Sr.set(-.5,.5,0),zs,o,Bs,s,r),fl.set(0,1),a=e.ray.intersectTriangle(Mo,Eo,Sr,!1,yr),a===null))return;const c=e.ray.origin.distanceTo(yr);c<e.near||c>e.far||t.push({distance:c,point:yr.clone(),uv:Mn.getInterpolation(yr,Mo,Sr,Eo,Sd,fl,xd,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function To(n,e,t,i,s,r){Hs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(br.x=r*Hs.x-s*Hs.y,br.y=s*Hs.x+r*Hs.y):br.copy(Hs),n.copy(e),n.x+=br.x,n.y+=br.y,n.applyMatrix4(Bf)}const pl=new O,Zg=new O,Jg=new Xe;class rs{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=pl.subVectors(i,t).cross(Zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jg.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Pa,jg=new ve(.5,.5),wo=new O;class zf{constructor(e=new rs,t=new rs,i=new rs,s=new rs,r=new rs,o=new rs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],v=r[10],p=r[11],b=r[12],S=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-o,f-u,p-g,A-b).normalize(),s[1].setComponents(l+o,f+u,p+g,A+b).normalize(),s[2].setComponents(l+a,f+h,p+_,A+S).normalize(),s[3].setComponents(l-a,f-h,p-_,A-S).normalize(),i)s[4].setComponents(c,d,v,x).normalize(),s[5].setComponents(l-c,f-d,p-v,A-x).normalize();else if(s[4].setComponents(l-c,f-d,p-v,A-x).normalize(),t===oi)s[5].setComponents(l+c,f+d,p+v,A+x).normalize();else if(t===ra)s[5].setComponents(c,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=jg.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(wo.x=s.normal.x>0?e.max.x:e.min.x,wo.y=s.normal.y>0?e.max.y:e.min.y,wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class js extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const la=new O,ca=new O,Md=new Dt,xr=new gu,Ao=new Pa,ml=new O,Ed=new O;class ua extends pn{constructor(e=new on,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)la.fromBufferAttribute(t,s-1),ca.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=la.distanceTo(ca);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Md.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Md);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,v=g-1;_<v;_+=l){const p=u.getX(_),b=u.getX(_+1),S=Co(this,e,xr,c,p,b,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),v=u.getX(f),p=Co(this,e,xr,c,_,v,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,v=g-1;_<v;_+=l){const p=Co(this,e,xr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Co(this,e,xr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Co(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(la.fromBufferAttribute(a,s),ca.fromBufferAttribute(a,r),t.distanceSqToSegment(la,ca,ml,Ed)>i)return;ml.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ml);if(!(l<e.near||l>e.far))return{distance:l,point:Ed.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Td=new O,wd=new O;class Qg extends ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Td.fromBufferAttribute(t,s),wd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Td.distanceTo(wd);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hf extends fn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gf extends fn{constructor(e,t,i=vs,s,r,o,a=Xn,c=Xn,l,u=Br,h=1){if(u!==Br&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vf extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pn extends on{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new O,u=new ve;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Ro=new O,ko=new O,gl=new O,Po=new Mn;class ev extends on{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Yo*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:v,c:p}=Po;if(_.fromBufferAttribute(a,l[0]),v.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Po.getNormal(gl),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const S=(b+1)%3,x=h[b],A=h[S],w=Po[u[b]],k=Po[u[S]],I=`${x}_${A}`,T=`${A}_${x}`;T in d&&d[T]?(gl.dot(d[T].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(k.x,k.y,k.z)),d[T]=null):I in d||(d[I]={index0:l[b],index1:l[S],normal:gl.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:v}=d[g];Ro.fromBufferAttribute(a,_),ko.fromBufferAttribute(a,v),f.push(Ro.x,Ro.y,Ro.z),f.push(ko.x,ko.y,ko.z)}this.setAttribute("position",new qt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ve:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,s=[],r=[],o=[],a=new O,c=new Dt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class _u extends di{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ve){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tv extends _u{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yu(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Lo=new O,vl=new yu,_l=new yu,yl=new yu;class nv extends di{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Lo.subVectors(s[0],s[1]).add(s[0]),l=Lo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Lo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),v<1e-4&&(v=_),vl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,v),_l.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,v),yl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,v)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),_l.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),yl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(vl.calc(c),_l.calc(c),yl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ad(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function iv(n,e){const t=1-n;return t*t*e}function sv(n,e){return 2*(1-n)*n*e}function rv(n,e){return n*n*e}function kr(n,e,t,i){return iv(n,e)+sv(n,t)+rv(n,i)}function ov(n,e){const t=1-n;return t*t*t*e}function av(n,e){const t=1-n;return 3*t*t*n*e}function lv(n,e){return 3*(1-n)*n*n*e}function cv(n,e){return n*n*n*e}function Pr(n,e,t,i,s){return ov(n,e)+av(n,t)+lv(n,i)+cv(n,s)}class Wf extends di{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Pr(e,s.x,r.x,o.x,a.x),Pr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uv extends di{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Pr(e,s.x,r.x,o.x,a.x),Pr(e,s.y,r.y,o.y,a.y),Pr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $f extends di{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dv extends di{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xf extends di{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(kr(e,s.x,r.x,o.x),kr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hv extends di{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(kr(e,s.x,r.x,o.x),kr(e,s.y,r.y,o.y),kr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yf extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Ad(a,c.x,l.x,u.x,h.x),Ad(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var Cd=Object.freeze({__proto__:null,ArcCurve:tv,CatmullRomCurve3:nv,CubicBezierCurve:Wf,CubicBezierCurve3:uv,EllipseCurve:_u,LineCurve:$f,LineCurve3:dv,QuadraticBezierCurve:Xf,QuadraticBezierCurve3:hv,SplineCurve:Yf});class fv extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cd[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Cd[s.type]().fromJSON(s))}return this}}class Rd extends fv{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new $f(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Xf(this.currentPoint.clone(),new ve(e,t),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Wf(this.currentPoint.clone(),new ve(e,t),new ve(i,s),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Yf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new _u(e,t,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class bu extends Rd{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Rd().fromJSON(s))}return this}}function pv(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=qf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=yv(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){const f=n[d],g=n[d+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Gr(r,o,t,a,c,l,0),o}function qf(n,e,t,i,s){let r;if(s===kv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=kd(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=kd(o/i|0,n[o],n[o+1],r);return r&&rr(r,r.next)&&(Wr(r),r=r.next),r}function ys(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(rr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Wr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Gr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Ev(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?gv(n,i,s,r):mv(n)){e.push(c.i,n.i,l.i),Wr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=vv(ys(n),e),Gr(n,e,t,i,s,r,2)):o===2&&_v(n,e,t,i,s,r):Gr(ys(n),e,t,i,s,r,1);break}}}function mv(n){const e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Er(s,a,r,c,o,l,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gv(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Lt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(u,h,d),_=Math.max(a,c,l),v=Math.max(u,h,d),p=Pc(f,g,e,t,i),b=Pc(_,v,e,t,i);let S=n.prevZ,x=n.nextZ;for(;S&&S.z>=p&&x&&x.z<=b;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=v&&S!==s&&S!==o&&Er(a,u,c,h,l,d,S.x,S.y)&&Lt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=v&&x!==s&&x!==o&&Er(a,u,c,h,l,d,x.x,x.y)&&Lt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=v&&S!==s&&S!==o&&Er(a,u,c,h,l,d,S.x,S.y)&&Lt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=v&&x!==s&&x!==o&&Er(a,u,c,h,l,d,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function vv(n,e){let t=n;do{const i=t.prev,s=t.next.next;!rr(i,s)&&Zf(i,t,t.next,s)&&Vr(i,s)&&Vr(s,i)&&(e.push(i.i,t.i,s.i),Wr(t),Wr(t.next),t=n=s),t=t.next}while(t!==n);return ys(t)}function _v(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Av(o,a)){let c=Jf(o,a);o=ys(o,o.next),c=ys(c,c.next),Gr(o,e,t,i,s,r,0),Gr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function yv(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=qf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(wv(l))}s.sort(bv);for(let r=0;r<s.length;r++)t=Sv(s[r],t);return t}function bv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Sv(n,e){const t=xv(n,e);if(!t)return e;const i=Jf(t,n);return ys(i,i.next),ys(t,t.next)}function xv(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(rr(n,t))return t;do{if(rr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Kf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);Vr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Mv(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Mv(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function Ev(n,e,t,i){let s=n;do s.z===0&&(s.z=Pc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Tv(s)}function Tv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Pc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function wv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Kf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Er(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Kf(n,e,t,i,s,r,o,a)}function Av(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Cv(n,e)&&(Vr(n,e)&&Vr(e,n)&&Rv(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||rr(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function rr(n,e){return n.x===e.x&&n.y===e.y}function Zf(n,e,t,i){const s=Io(Lt(n,e,t)),r=Io(Lt(n,e,i)),o=Io(Lt(t,i,n)),a=Io(Lt(t,i,e));return!!(s!==r&&o!==a||s===0&&Do(n,t,e)||r===0&&Do(n,i,e)||o===0&&Do(t,n,i)||a===0&&Do(t,e,i))}function Do(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Io(n){return n>0?1:n<0?-1:0}function Cv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Zf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Vr(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function Rv(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Jf(n,e){const t=Lc(n.i,n.x,n.y),i=Lc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function kd(n,e,t,i){const s=Lc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Lc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Pv{static triangulate(e,t,i=2){return pv(e,t,i)}}class Lr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Lr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Pd(e),Ld(i,e);let o=e.length;t.forEach(Pd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ld(i,t[c]);const a=Pv.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Pd(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ld(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class si extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],v=[];for(let p=0;p<u;p++){const b=p*d-o;for(let S=0;S<l;S++){const x=S*h-r;g.push(x,-b,0),_.push(0,0,1),v.push(S/a),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const S=b+l*p,x=b+l*(p+1),A=b+1+l*(p+1),w=b+1+l*p;f.push(S,x,w),f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qn extends on{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new O,g=new ve;for(let _=0;_<=s;_++){for(let v=0;v<=i;v++){const p=r+v/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const v=_*(i+1);for(let p=0;p<i;p++){const b=p+v,S=b,x=b+i+1,A=b+i+2,w=b+1;a.push(S,x,w),a.push(x,A,w)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class La extends on{constructor(e=new bu([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(o,2));function l(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;Lr.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,p=g.length;v<p;v++){const b=g[v];Lr.isClockWise(b)===!0&&(g[v]=b.reverse())}const _=Lr.triangulateShape(f,g);for(let v=0,p=g.length;v<p;v++){const b=g[v];f=f.concat(b)}for(let v=0,p=f.length;v<p;v++){const b=f[v];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let v=0,p=_.length;v<p;v++){const b=_[v],S=b[0]+h,x=b[1]+h,A=b[2]+h;i.push(S,x,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Lv(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new La(i,e.curveSegments)}}function Lv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Dv extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iv extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nv extends js{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class jf extends Uf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uv extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dd=new Dt;class Ov{constructor(e,t,i=0,s=1/0){this.ray=new gu(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new vu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dd),this}intersectObject(e,t=!0,i=[]){return Dc(e,this,i,t),i.sort(Id),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Dc(e[s],this,i,t);return i.sort(Id),i}}function Id(n,e){return n.distance-e.distance}function Dc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Dc(r[o],e,t,!0)}}function Nd(n,e,t,i){const s=Fv(i);switch(t){case Tf:return n*e;case Af:return n*e/s.components*s.byteLength;case hu:return n*e/s.components*s.byteLength;case Cf:return n*e*2/s.components*s.byteLength;case fu:return n*e*2/s.components*s.byteLength;case wf:return n*e*3/s.components*s.byteLength;case $n:return n*e*4/s.components*s.byteLength;case pu:return n*e*4/s.components*s.byteLength;case Vo:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case rc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xc:case Mc:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tc:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ac:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fv(n){switch(n){case Ii:case Sf:return{byteLength:1,components:1};case Or:case xf:case Kr:return{byteLength:2,components:1};case uu:case du:return{byteLength:2,components:4};case vs:case cu:case wi:return{byteLength:4,components:1};case Mf:case Ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);function Qf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Bv(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hv=`#ifdef USE_ALPHAHASH
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
#endif`,Gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
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
#endif`,Kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
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
#endif`,e_=`#ifdef USE_BUMPMAP
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
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,c_=`#define PI 3.141592653589793
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
} // validated`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d_=`vec3 transformedNormal = objectNormal;
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
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,__=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A_=`#ifdef USE_GRADIENTMAP
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
}`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
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
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,D_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O_=`PhysicalMaterial material;
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
#endif`,F_=`struct PhysicalMaterial {
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
}`,B_=`
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
#endif`,z_=`#if defined( RE_IndirectDiffuse )
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K_=`#if defined( USE_POINTS_UV )
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
#endif`,Z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E0=`float getShadowMask() {
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
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,Y0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#define LAMBERT
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define MATCAP
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
}`,sy=`#define MATCAP
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
}`,ry=`#define NORMAL
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
}`,oy=`#define NORMAL
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
}`,ay=`#define PHONG
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
}`,ly=`#define PHONG
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
}`,cy=`#define STANDARD
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
}`,uy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,hy=`#define TOON
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
}`,fy=`uniform float size;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 color;
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
}`,vy=`uniform float rotation;
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
}`,_y=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:zv,alphahash_pars_fragment:Hv,alphamap_fragment:Gv,alphamap_pars_fragment:Vv,alphatest_fragment:Wv,alphatest_pars_fragment:$v,aomap_fragment:Xv,aomap_pars_fragment:Yv,batching_pars_vertex:qv,batching_vertex:Kv,begin_vertex:Zv,beginnormal_vertex:Jv,bsdfs:jv,iridescence_fragment:Qv,bumpmap_pars_fragment:e_,clipping_planes_fragment:t_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:s_,color_fragment:r_,color_pars_fragment:o_,color_pars_vertex:a_,color_vertex:l_,common:c_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:d_,displacementmap_pars_vertex:h_,displacementmap_vertex:f_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,colorspace_fragment:g_,colorspace_pars_fragment:v_,envmap_fragment:__,envmap_common_pars_fragment:y_,envmap_pars_fragment:b_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:L_,envmap_vertex:x_,fog_vertex:M_,fog_pars_vertex:E_,fog_fragment:T_,fog_pars_fragment:w_,gradientmap_pars_fragment:A_,lightmap_pars_fragment:C_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:k_,lights_pars_begin:P_,lights_toon_fragment:D_,lights_toon_pars_fragment:I_,lights_phong_fragment:N_,lights_phong_pars_fragment:U_,lights_physical_fragment:O_,lights_physical_pars_fragment:F_,lights_fragment_begin:B_,lights_fragment_maps:z_,lights_fragment_end:H_,logdepthbuf_fragment:G_,logdepthbuf_pars_fragment:V_,logdepthbuf_pars_vertex:W_,logdepthbuf_vertex:$_,map_fragment:X_,map_pars_fragment:Y_,map_particle_fragment:q_,map_particle_pars_fragment:K_,metalnessmap_fragment:Z_,metalnessmap_pars_fragment:J_,morphinstance_vertex:j_,morphcolor_vertex:Q_,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:o0,normal_vertex:a0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:h0,opaque_fragment:f0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:v0,dithering_pars_fragment:_0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:x0,shadowmap_vertex:M0,shadowmask_pars_fragment:E0,skinbase_vertex:T0,skinning_pars_vertex:w0,skinning_vertex:A0,skinnormal_vertex:C0,specularmap_fragment:R0,specularmap_pars_fragment:k0,tonemapping_fragment:P0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:I0,uv_pars_fragment:N0,uv_pars_vertex:U0,uv_vertex:O0,worldpos_vertex:F0,background_vert:B0,background_frag:z0,backgroundCube_vert:H0,backgroundCube_frag:G0,cube_vert:V0,cube_frag:W0,depth_vert:$0,depth_frag:X0,distanceRGBA_vert:Y0,distanceRGBA_frag:q0,equirect_vert:K0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:j0,meshbasic_vert:Q0,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:uy,meshtoon_vert:dy,meshtoon_frag:hy,points_vert:fy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:vy,sprite_frag:_y},fe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ei={basic:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:dn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:dn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:dn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:dn([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:dn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:dn([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:dn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:dn([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:dn([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:dn([fe.lights,fe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ei.physical={uniforms:dn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const No={r:0,b:0,g:0},is=new Ni,yy=new Dt;function by(n,e,t,i,s,r,o){const a=new et(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const A=g(S);A===null?p(a,c):A&&A.isColor&&(p(A,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===ka)?(u===void 0&&(u=new nt(new jr(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:sr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,k,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),is.copy(x.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler(is)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==pt,(h!==A||d!==A.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new nt(new si(2,2),new Ki({name:"BackgroundMaterial",uniforms:sr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=rt.getTransfer(A.colorSpace)!==pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(No,Nf(n)),i.buffers.color.setClear(No.r,No.g,No.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:v,dispose:b}}function Sy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,D,F,G,q){let W=!1;const P=h(G,F,D);r!==P&&(r=P,l(r.object)),W=f(E,G,F,q),W&&g(E,G,F,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(E,D,F,G),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,D,F){const G=F.wireframe===!0;let q=i[E.id];q===void 0&&(q={},i[E.id]=q);let W=q[D.id];W===void 0&&(W={},q[D.id]=W);let P=W[G];return P===void 0&&(P=d(c()),W[G]=P),P}function d(E){const D=[],F=[],G=[];for(let q=0;q<t;q++)D[q]=0,F[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:G,object:E,attributes:{},index:null}}function f(E,D,F,G){const q=r.attributes,W=D.attributes;let P=0;const $=F.getAttributes();for(const H in $)if($[H].location>=0){const oe=q[H];let pe=W[H];if(pe===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),oe===void 0||oe.attribute!==pe||pe&&oe.data!==pe.data)return!0;P++}return r.attributesNum!==P||r.index!==G}function g(E,D,F,G){const q={},W=D.attributes;let P=0;const $=F.getAttributes();for(const H in $)if($[H].location>=0){let oe=W[H];oe===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor));const pe={};pe.attribute=oe,oe&&oe.data&&(pe.data=oe.data),q[H]=pe,P++}r.attributes=q,r.attributesNum=P,r.index=G}function _(){const E=r.newAttributes;for(let D=0,F=E.length;D<F;D++)E[D]=0}function v(E){p(E,0)}function p(E,D){const F=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;F[E]=1,G[E]===0&&(n.enableVertexAttribArray(E),G[E]=1),q[E]!==D&&(n.vertexAttribDivisor(E,D),q[E]=D)}function b(){const E=r.newAttributes,D=r.enabledAttributes;for(let F=0,G=D.length;F<G;F++)D[F]!==E[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function S(E,D,F,G,q,W,P){P===!0?n.vertexAttribIPointer(E,D,F,q,W):n.vertexAttribPointer(E,D,F,G,q,W)}function x(E,D,F,G){_();const q=G.attributes,W=F.getAttributes(),P=D.defaultAttributeValues;for(const $ in W){const H=W[$];if(H.location>=0){let ee=q[$];if(ee===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ee=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ee=E.instanceColor)),ee!==void 0){const oe=ee.normalized,pe=ee.itemSize,Be=e.get(ee);if(Be===void 0)continue;const Pe=Be.buffer,lt=Be.type,it=Be.bytesPerElement,Q=lt===n.INT||lt===n.UNSIGNED_INT||ee.gpuType===cu;if(ee.isInterleavedBufferAttribute){const se=ee.data,_e=se.stride,Ue=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<H.locationSize;Re++)p(H.location+Re,se.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<H.locationSize;Re++)v(H.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Re=0;Re<H.locationSize;Re++)S(H.location+Re,pe/H.locationSize,lt,oe,_e*it,(Ue+pe/H.locationSize*Re)*it,Q)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,ee.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<H.locationSize;se++)v(H.location+se);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let se=0;se<H.locationSize;se++)S(H.location+se,pe/H.locationSize,lt,oe,pe*it,pe/H.locationSize*se*it,Q)}}else if(P!==void 0){const oe=P[$];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(H.location,oe);break;case 3:n.vertexAttrib3fv(H.location,oe);break;case 4:n.vertexAttrib4fv(H.location,oe);break;default:n.vertexAttrib1fv(H.location,oe)}}}}b()}function A(){I();for(const E in i){const D=i[E];for(const F in D){const G=D[F];for(const q in G)u(G[q].object),delete G[q];delete D[F]}delete i[E]}}function w(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const F in D){const G=D[F];for(const q in G)u(G[q].object),delete G[q];delete D[F]}delete i[E.id]}function k(E){for(const D in i){const F=i[D];if(F[E.id]===void 0)continue;const G=F[E.id];for(const q in G)u(G[q].object),delete G[q];delete F[E.id]}}function I(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:v,disableUnusedAttributes:b}}function xy(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function My(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(k){return!(k!==$n&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(k){const I=k===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Ii&&i.convert(k)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==wi&&!I)}function c(k){if(k==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function Ey(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new rs,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!v)r?u(null):l();else{const b=r?0:i,S=b*4;let x=p.clippingState||null;c.value=x,x=u(g,d,S,f);for(let A=0;A!==S;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let v=null;if(_!==0){if(v=c.value,g!==!0||v===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(v===null||v.length<p)&&(v=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(v,x),v[x+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function Ty(n){let e=new WeakMap;function t(o,a){return a===Jl?o.mapping=tr:a===jl&&(o.mapping=nr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jl||a===jl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $g(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const $s=4,Ud=[.125,.215,.35,.446,.526,.582],cs=20,bl=new jf,Od=new et;let Sl=null,xl=0,Ml=0,El=!1;const os=(1+Math.sqrt(5))/2,Gs=1/os,Fd=[new O(-os,Gs,0),new O(os,Gs,0),new O(-Gs,0,os),new O(Gs,0,os),new O(0,os,-Gs),new O(0,os,Gs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],wy=new O;class Bd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=wy}=r;Sl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,xl,Ml),this._renderer.xr.enabled=El,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Kr,format:$n,colorSpace:ir,depthBuffer:!1},s=zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ay(r)),this._blurMaterial=Cy(r,e,t)}return s}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,bl)}_sceneToCubeUV(e,t,i,s,r){const c=new Bn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Od),h.toneMapping=Yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new St({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),v=new nt(new jr,_);let p=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(Od),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));const A=this._cubeSize;Uo(s,x*A,S>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(v,c),h.render(e,c)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===tr||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Uo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,bl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fd[(s-r-1)%Fd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cs-1),_=r/g,v=isFinite(r)?1+Math.floor(u*_):cs;v>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${cs}`);const p=[];let b=0;for(let k=0;k<cs;++k){const I=k/_,T=Math.exp(-I*I/2);p.push(T),k===0?b+=T:k<v&&(b+=2*T)}for(let k=0;k<p.length;k++)p[k]=p[k]/b;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const x=this._sizeLods[s],A=3*x*(s>S-$s?s-S+$s:0),w=4*(this._cubeSize-x);Uo(t,A,w,3*x,2*x),c.setRenderTarget(t),c.render(h,bl)}}function Ay(n){const e=[],t=[],i=[];let s=n;const r=n-$s+1+Ud.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-$s?c=Ud[o-n+$s-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,v=2,p=1,b=new Float32Array(_*g*f),S=new Float32Array(v*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){const k=w%3*2/3-1,I=w>2?0:-1,T=[k,I,0,k+2/3,I,0,k+2/3,I+1,0,k,I,0,k+2/3,I+1,0,k,I+1,0];b.set(T,_*g*w),S.set(d,v*g*w);const E=[w,w,w,w,w,w];x.set(E,p*g*w)}const A=new on;A.setAttribute("position",new Yn(b,_)),A.setAttribute("uv",new Yn(S,v)),A.setAttribute("faceIndex",new Yn(x,p)),e.push(A),s>$s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zd(n,e,t){const i=new _s(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Cy(n,e,t){const i=new Float32Array(cs),s=new O(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Hd(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Gd(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function Ry(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jl||c===jl,u=c===tr||c===nr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Bd(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Bd(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ky(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Hr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Py(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let S=0,x=b.length;S<x;S+=3){const A=b[S+0],w=b[S+1],k=b[S+2];d.push(A,w,w,k,k,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const A=S+0,w=S+1,k=S+2;d.push(A,w,w,k,k,A)}}else return;const v=new(kf(d)?If:Df)(d,1);v.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,v)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Ly(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let v=0;for(let p=0;p<g;p++)v+=f[p];t.update(v,i,1)}function h(d,f,g,_){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Dy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Iy(n,e,t){const i=new WeakMap,s=new zt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let A=a.attributes.position.count*x,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const k=new Float32Array(A*w*4*h),I=new Pf(k,A,w,h);I.type=wi,I.needsUpdate=!0;const T=x*4;for(let D=0;D<h;D++){const F=p[D],G=b[D],q=S[D],W=A*w*4*D;for(let P=0;P<F.count;P++){const $=P*T;g===!0&&(s.fromBufferAttribute(F,P),k[W+$+0]=s.x,k[W+$+1]=s.y,k[W+$+2]=s.z,k[W+$+3]=0),_===!0&&(s.fromBufferAttribute(G,P),k[W+$+4]=s.x,k[W+$+5]=s.y,k[W+$+6]=s.z,k[W+$+7]=0),v===!0&&(s.fromBufferAttribute(q,P),k[W+$+8]=s.x,k[W+$+9]=s.y,k[W+$+10]=s.z,k[W+$+11]=q.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new ve(A,w)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let v=0;v<l.length;v++)g+=l[v];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ny(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const ep=new fn,Vd=new Gf(1,1),tp=new Pf,np=new Cg,ip=new Of,Wd=[],$d=[],Xd=new Float32Array(16),Yd=new Float32Array(9),qd=new Float32Array(4);function hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Wd[s];if(r===void 0&&(r=new Float32Array(s),Wd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Da(n,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Uy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function zy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;qd.set(i),n.uniformMatrix2fv(this.addr,!1,qd),Zt(t,i)}}function Hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Yd.set(i),n.uniformMatrix3fv(this.addr,!1,Yd),Zt(t,i)}}function Gy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Xd.set(i),n.uniformMatrix4fv(this.addr,!1,Xd),Zt(t,i)}}function Vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function Yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function Jy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Vd.compareFunction=Rf,r=Vd):r=ep,t.setTexture2D(e||r,s)}function jy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||np,s)}function Qy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ip,s)}function eb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tp,s)}function tb(n){switch(n){case 5126:return Uy;case 35664:return Oy;case 35665:return Fy;case 35666:return By;case 35674:return zy;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return Vy;case 35667:case 35671:return Wy;case 35668:case 35672:return $y;case 35669:case 35673:return Xy;case 5125:return Yy;case 36294:return qy;case 36295:return Ky;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return eb}}function nb(n,e){n.uniform1fv(this.addr,e)}function ib(n,e){const t=hr(e,this.size,2);n.uniform2fv(this.addr,t)}function sb(n,e){const t=hr(e,this.size,3);n.uniform3fv(this.addr,t)}function rb(n,e){const t=hr(e,this.size,4);n.uniform4fv(this.addr,t)}function ob(n,e){const t=hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ab(n,e){const t=hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lb(n,e){const t=hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cb(n,e){n.uniform1iv(this.addr,e)}function ub(n,e){n.uniform2iv(this.addr,e)}function db(n,e){n.uniform3iv(this.addr,e)}function hb(n,e){n.uniform4iv(this.addr,e)}function fb(n,e){n.uniform1uiv(this.addr,e)}function pb(n,e){n.uniform2uiv(this.addr,e)}function mb(n,e){n.uniform3uiv(this.addr,e)}function gb(n,e){n.uniform4uiv(this.addr,e)}function vb(n,e,t){const i=this.cache,s=e.length,r=Da(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ep,r[o])}function _b(n,e,t){const i=this.cache,s=e.length,r=Da(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||np,r[o])}function yb(n,e,t){const i=this.cache,s=e.length,r=Da(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ip,r[o])}function bb(n,e,t){const i=this.cache,s=e.length,r=Da(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tp,r[o])}function Sb(n){switch(n){case 5126:return nb;case 35664:return ib;case 35665:return sb;case 35666:return rb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return db;case 35669:case 35673:return hb;case 5125:return fb;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return bb}}class xb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tb(t.type)}}class Mb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sb(t.type)}}class Eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function Kd(n,e){n.seq.push(e),n.map[e.id]=e}function Tb(n,e,t){const i=n.name,s=i.length;for(Tl.lastIndex=0;;){const r=Tl.exec(i),o=Tl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kd(t,l===void 0?new xb(a,n,e):new Mb(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Eb(a),Kd(t,h)),t=h}}}class qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Zd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const wb=37297;let Ab=0;function Cb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Jd=new Xe;function Rb(n){rt._getMatrix(Jd,rt.workingColorSpace,n);const e=`mat3( ${Jd.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case sa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Cb(n.getShaderSource(e),a)}else return r}function kb(n,e){const t=Rb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pb(n,e){let t;switch(e){case tg:t="Linear";break;case ng:t="Reinhard";break;case ig:t="Cineon";break;case sg:t="ACESFilmic";break;case og:t="AgX";break;case ag:t="Neutral";break;case rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oo=new O;function Lb(){rt.getLuminanceCoefficients(Oo);const n=Oo.x.toFixed(4),e=Oo.y.toFixed(4),t=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function Ib(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Nb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Tr(n){return n!==""}function Qd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(Ub,Fb)}const Ob=new Map;function Fb(n,e){let t=Ye[e];if(t===void 0){const i=Ob.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(n){return n.replace(Bb,zb)}function zb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Hb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Im?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===nr&&(e="ENVMAP_MODE_REFRACTION"),e}function Wb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case Qm:e="ENVMAP_BLENDING_MIX";break;case eg:e="ENVMAP_BLENDING_ADD";break}return e}function $b(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Xb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Hb(t),l=Gb(t),u=Vb(t),h=Wb(t),d=$b(t),f=Db(t),g=Ib(r),_=s.createProgram();let v,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(v=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Yi?Pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,kb("linearToOutputTexel",t.outputColorSpace),Lb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=Ic(o),o=Qd(o,t),o=eh(o,t),a=Ic(a),a=Qd(a,t),a=eh(a,t),o=th(o),a=th(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+v+o,x=b+p+a,A=Zd(s,s.VERTEX_SHADER,S),w=Zd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function k(D){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(A)||"",q=s.getShaderInfoLog(w)||"",W=F.trim(),P=G.trim(),$=q.trim();let H=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,w);else{const oe=jd(s,A,"vertex"),pe=jd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+oe+`
`+pe)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||$==="")&&(ee=!1);ee&&(D.diagnostics={runnable:H,programLog:W,vertexShader:{log:P,prefix:v},fragmentShader:{log:$,prefix:p}})}s.deleteShader(A),s.deleteShader(w),I=new qo(s,_),T=Nb(s,_)}let I;this.getUniforms=function(){return I===void 0&&k(this),I};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,wb)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Yb=0;class qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kb(e),t.set(e,i)),i}}class Kb{constructor(e){this.id=Yb++,this.code=e,this.usedTimes=0}}function Zb(n,e,t,i,s,r,o){const a=new vu,c=new qb,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function v(T,E,D,F,G){const q=F.fog,W=G.geometry,P=T.isMeshStandardMaterial?F.environment:null,$=(T.isMeshStandardMaterial?t:e).get(T.envMap||P),H=$&&$.mapping===ka?$.image.height:null,ee=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const oe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=oe!==void 0?oe.length:0;let Be=0;W.morphAttributes.position!==void 0&&(Be=1),W.morphAttributes.normal!==void 0&&(Be=2),W.morphAttributes.color!==void 0&&(Be=3);let Pe,lt,it,Q;if(ee){const ut=ei[ee];Pe=ut.vertexShader,lt=ut.fragmentShader}else Pe=T.vertexShader,lt=T.fragmentShader,c.update(T),it=c.getVertexShaderID(T),Q=c.getFragmentShaderID(T);const se=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ue=G.isInstancedMesh===!0,Re=G.isBatchedMesh===!0,Je=!!T.map,Jt=!!T.matcap,L=!!$,gt=!!T.aoMap,Oe=!!T.lightMap,De=!!T.bumpMap,Me=!!T.normalMap,ct=!!T.displacementMap,Ee=!!T.emissiveMap,He=!!T.metalnessMap,Ht=!!T.roughnessMap,At=T.anisotropy>0,C=T.clearcoat>0,y=T.dispersion>0,V=T.iridescence>0,Z=T.sheen>0,ie=T.transmission>0,j=At&&!!T.anisotropyMap,Te=C&&!!T.clearcoatMap,R=C&&!!T.clearcoatNormalMap,X=C&&!!T.clearcoatRoughnessMap,ne=V&&!!T.iridescenceMap,J=V&&!!T.iridescenceThicknessMap,re=Z&&!!T.sheenColorMap,Se=Z&&!!T.sheenRoughnessMap,he=!!T.specularMap,ue=!!T.specularColorMap,Ne=!!T.specularIntensityMap,U=ie&&!!T.transmissionMap,ce=ie&&!!T.thicknessMap,de=!!T.gradientMap,xe=!!T.alphaMap,ae=T.alphaTest>0,te=!!T.alphaHash,Ae=!!T.extensions;let ze=Yi;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ze=n.toneMapping);const _t={shaderID:ee,shaderType:T.type,shaderName:T.name,vertexShader:Pe,fragmentShader:lt,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Re,batchingColor:Re&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ir,alphaToCoverage:!!T.alphaToCoverage,map:Je,matcap:Jt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:H,aoMap:gt,lightMap:Oe,bumpMap:De,normalMap:Me,displacementMap:d&&ct,emissiveMap:Ee,normalMapObjectSpace:Me&&T.normalMapType===hg,normalMapTangentSpace:Me&&T.normalMapType===dg,metalnessMap:He,roughnessMap:Ht,anisotropy:At,anisotropyMap:j,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:R,clearcoatRoughnessMap:X,dispersion:y,iridescence:V,iridescenceMap:ne,iridescenceThicknessMap:J,sheen:Z,sheenColorMap:re,sheenRoughnessMap:Se,specularMap:he,specularColorMap:ue,specularIntensityMap:Ne,transmission:ie,transmissionMap:U,thicknessMap:ce,gradientMap:de,opaque:T.transparent===!1&&T.blending===Zs&&T.alphaToCoverage===!1,alphaMap:xe,alphaTest:ae,alphaHash:te,combine:T.combine,mapUv:Je&&_(T.map.channel),aoMapUv:gt&&_(T.aoMap.channel),lightMapUv:Oe&&_(T.lightMap.channel),bumpMapUv:De&&_(T.bumpMap.channel),normalMapUv:Me&&_(T.normalMap.channel),displacementMapUv:ct&&_(T.displacementMap.channel),emissiveMapUv:Ee&&_(T.emissiveMap.channel),metalnessMapUv:He&&_(T.metalnessMap.channel),roughnessMapUv:Ht&&_(T.roughnessMap.channel),anisotropyMapUv:j&&_(T.anisotropyMap.channel),clearcoatMapUv:Te&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:R&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(T.sheenRoughnessMap.channel),specularMapUv:he&&_(T.specularMap.channel),specularColorMapUv:ue&&_(T.specularColorMap.channel),specularIntensityMapUv:Ne&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:ce&&_(T.thicknessMap.channel),alphaMapUv:xe&&_(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Me||At),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Je||xe),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&rt.getTransfer(T.map.colorSpace)===pt,decodeVideoTextureEmissive:Ee&&T.emissiveMap.isVideoTexture===!0&&rt.getTransfer(T.emissiveMap.colorSpace)===pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Mi,flipSided:T.side===_n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ae&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&T.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function p(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(b(E,T),S(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function b(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function S(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const E=g[T.type];let D;if(E){const F=ei[E];D=Hg.clone(F.uniforms)}else D=T.uniforms;return D}function A(T,E){let D;for(let F=0,G=u.length;F<G;F++){const q=u[F];if(q.cacheKey===E){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Xb(n,E,T,r),u.push(D)),D}function w(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function k(T){c.remove(T)}function I(){c.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:k,programs:u,dispose:I}}function Jb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function jb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ih(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,_,v){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:v},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=v),e++,p}function a(h,d,f,g,_,v){const p=o(h,d,f,g,_,v);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,v){const p=o(h,d,f,g,_,v);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||jb),i.length>1&&i.sort(d||ih),s.length>1&&s.sort(d||ih)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Qb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new sh,n.set(i,[o])):s>=r.length?(o=new sh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new et};break;case"SpotLight":t={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nS=0;function iS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sS(n){const e=new eS,t=tS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const s=new O,r=new Dt,o=new Dt;function a(l){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,_=0,v=0,p=0,b=0,S=0,x=0,A=0,w=0,k=0;l.sort(iS);for(let T=0,E=l.length;T<E;T++){const D=l[T],F=D.color,G=D.intensity,q=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*G,h+=F.g*G,d+=F.b*G;else if(D.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],G);k++}else if(D.isDirectionalLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=D.shadow.matrix,b++}i.directional[f]=P,f++}else if(D.isSpotLight){const P=e.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(F).multiplyScalar(G),P.distance=q,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,i.spot[_]=P;const $=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,$.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=$.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=W,x++}_++}else if(D.isRectAreaLight){const P=e.get(D);P.color.copy(F).multiplyScalar(G),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=P,v++}else if(D.isPointLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),P.distance=D.distance,P.decay=D.decay,D.castShadow){const $=D.shadow,H=t.get(D);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=P,g++}else if(D.isHemisphereLight){const P=e.get(D);P.skyColor.copy(D.color).multiplyScalar(G),P.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[p]=P,p++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==A||I.numLightProbes!==k)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=k,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=A,I.numLightProbes=k,i.version=nS++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const v=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const S=l[p];if(S.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),h++}else if(S.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),f++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(v),o.identity(),r.copy(S.matrixWorld),r.premultiply(v),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(v),d++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:a,setupView:c,state:i}}function rh(n){const e=new sS(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function rS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new rh(n),e.set(s,[a])):r>=o.length?(a=new rh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const oS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aS=`uniform sampler2D shadow_pass;
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
}`;function lS(n,e,t){let i=new zf;const s=new ve,r=new ve,o=new zt,a=new Dv({depthPacking:ug}),c=new Iv,l={},u=t.maxTextureSize,h={[qi]:_n,[_n]:qi,[Mi]:Mi},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:oS,fragmentShader:aS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_f;let p=this.type;this.render=function(w,k,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Xi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=p!==bi&&this.type===bi,q=p===bi&&this.type!==bi;for(let W=0,P=w.length;W<P;W++){const $=w[W],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ee=H.getFrameExtents();if(s.multiply(ee),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,H.mapSize.y=r.y)),H.map===null||G===!0||q===!0){const pe=this.type!==bi?{minFilter:Xn,magFilter:Xn}:{};H.map!==null&&H.map.dispose(),H.map=new _s(s.x,s.y,pe),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const oe=H.getViewportCount();for(let pe=0;pe<oe;pe++){const Be=H.getViewport(pe);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),F.viewport(o),H.updateMatrices($,pe),i=H.getFrustum(),x(k,I,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===bi&&b(H,I),H.needsUpdate=!1}p=this.type,v.needsUpdate=!1,n.setRenderTarget(T,E,D)};function b(w,k){const I=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new _s(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(k,null,I,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(k,null,I,f,_,null)}function S(w,k,I,T){let E=null;const D=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)E=D;else if(E=I.isPointLight===!0?c:a,n.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const F=E.uuid,G=k.uuid;let q=l[F];q===void 0&&(q={},l[F]=q);let W=q[G];W===void 0&&(W=E.clone(),q[G]=W,k.addEventListener("dispose",A)),E=W}if(E.visible=k.visible,E.wireframe=k.wireframe,T===bi?E.side=k.shadowSide!==null?k.shadowSide:k.side:E.side=k.shadowSide!==null?k.shadowSide:h[k.side],E.alphaMap=k.alphaMap,E.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,E.map=k.map,E.clipShadows=k.clipShadows,E.clippingPlanes=k.clippingPlanes,E.clipIntersection=k.clipIntersection,E.displacementMap=k.displacementMap,E.displacementScale=k.displacementScale,E.displacementBias=k.displacementBias,E.wireframeLinewidth=k.wireframeLinewidth,E.linewidth=k.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=n.properties.get(E);F.light=I}return E}function x(w,k,I,T,E){if(w.visible===!1)return;if(w.layers.test(k.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===bi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const G=e.update(w),q=w.material;if(Array.isArray(q)){const W=G.groups;for(let P=0,$=W.length;P<$;P++){const H=W[P],ee=q[H.materialIndex];if(ee&&ee.visible){const oe=S(w,ee,T,E);w.onBeforeShadow(n,w,k,I,G,oe,H),n.renderBufferDirect(I,null,G,oe,w,H),w.onAfterShadow(n,w,k,I,G,oe,H)}}}else if(q.visible){const W=S(w,q,T,E);w.onBeforeShadow(n,w,k,I,G,W,null),n.renderBufferDirect(I,null,G,W,w,null),w.onAfterShadow(n,w,k,I,G,W,null)}}const F=w.children;for(let G=0,q=F.length;G<q;G++)x(F[G],k,I,T,E)}function A(w){w.target.removeEventListener("dispose",A);for(const I in l){const T=l[I],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const cS={[Wl]:$l,[Xl]:Kl,[Yl]:Zl,[er]:ql,[$l]:Wl,[Kl]:Xl,[Zl]:Yl,[ql]:er};function uS(n,e){function t(){let U=!1;const ce=new zt;let de=null;const xe=new zt(0,0,0,0);return{setMask:function(ae){de!==ae&&!U&&(n.colorMask(ae,ae,ae,ae),de=ae)},setLocked:function(ae){U=ae},setClear:function(ae,te,Ae,ze,_t){_t===!0&&(ae*=ze,te*=ze,Ae*=ze),ce.set(ae,te,Ae,ze),xe.equals(ce)===!1&&(n.clearColor(ae,te,Ae,ze),xe.copy(ce))},reset:function(){U=!1,de=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,de=null,xe=null,ae=null;return{setReversed:function(te){if(ce!==te){const Ae=e.get("EXT_clip_control");te?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const ze=ae;ae=null,this.setClear(ze)}},getReversed:function(){return ce},setTest:function(te){te?se(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(te){de!==te&&!U&&(n.depthMask(te),de=te)},setFunc:function(te){if(ce&&(te=cS[te]),xe!==te){switch(te){case Wl:n.depthFunc(n.NEVER);break;case $l:n.depthFunc(n.ALWAYS);break;case Xl:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case Yl:n.depthFunc(n.EQUAL);break;case ql:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case Zl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=te}},setLocked:function(te){U=te},setClear:function(te){ae!==te&&(ce&&(te=1-te),n.clearDepth(te),ae=te)},reset:function(){U=!1,de=null,xe=null,ae=null,ce=!1}}}function s(){let U=!1,ce=null,de=null,xe=null,ae=null,te=null,Ae=null,ze=null,_t=null;return{setTest:function(ut){U||(ut?se(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(ut){ce!==ut&&!U&&(n.stencilMask(ut),ce=ut)},setFunc:function(ut,hi,Kn){(de!==ut||xe!==hi||ae!==Kn)&&(n.stencilFunc(ut,hi,Kn),de=ut,xe=hi,ae=Kn)},setOp:function(ut,hi,Kn){(te!==ut||Ae!==hi||ze!==Kn)&&(n.stencilOp(ut,hi,Kn),te=ut,Ae=hi,ze=Kn)},setLocked:function(ut){U=ut},setClear:function(ut){_t!==ut&&(n.clearStencil(ut),_t=ut)},reset:function(){U=!1,ce=null,de=null,xe=null,ae=null,te=null,Ae=null,ze=null,_t=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,v=null,p=null,b=null,S=null,x=null,A=null,w=null,k=new et(0,0,0),I=0,T=!1,E=null,D=null,F=null,G=null,q=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,$=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),P=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),P=$>=2);let ee=null,oe={};const pe=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Pe=new zt().fromArray(pe),lt=new zt().fromArray(Be);function it(U,ce,de,xe){const ae=new Uint8Array(4),te=n.createTexture();n.bindTexture(U,te),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<de;Ae++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ce+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return te}const Q={};Q[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(er),De(!1),Me(ju),se(n.CULL_FACE),gt(Xi);function se(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ue(U,ce){return h[U]!==ce?(n.bindFramebuffer(U,ce),h[U]=ce,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ce),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Re(U,ce){let de=f,xe=!1;if(U){de=d.get(ce),de===void 0&&(de=[],d.set(ce,de));const ae=U.textures;if(de.length!==ae.length||de[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ae=ae.length;te<Ae;te++)de[te]=n.COLOR_ATTACHMENT0+te;de.length=ae.length,xe=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,xe=!0);xe&&n.drawBuffers(de)}function Je(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const Jt={[ls]:n.FUNC_ADD,[Um]:n.FUNC_SUBTRACT,[Om]:n.FUNC_REVERSE_SUBTRACT};Jt[Fm]=n.MIN,Jt[Bm]=n.MAX;const L={[zm]:n.ZERO,[Hm]:n.ONE,[Gm]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[qm]:n.SRC_ALPHA_SATURATE,[Xm]:n.DST_COLOR,[Wm]:n.DST_ALPHA,[Vm]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[Ym]:n.ONE_MINUS_DST_COLOR,[$m]:n.ONE_MINUS_DST_ALPHA,[Km]:n.CONSTANT_COLOR,[Zm]:n.ONE_MINUS_CONSTANT_COLOR,[Jm]:n.CONSTANT_ALPHA,[jm]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(U,ce,de,xe,ae,te,Ae,ze,_t,ut){if(U===Xi){_===!0&&(_e(n.BLEND),_=!1);return}if(_===!1&&(se(n.BLEND),_=!0),U!==Nm){if(U!==v||ut!==T){if((p!==ls||x!==ls)&&(n.blendEquation(n.FUNC_ADD),p=ls,x=ls),ut)switch(U){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qu:n.blendFunc(n.ONE,n.ONE);break;case ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case td:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ed:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case td:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,A=null,w=null,k.set(0,0,0),I=0,v=U,T=ut}return}ae=ae||ce,te=te||de,Ae=Ae||xe,(ce!==p||ae!==x)&&(n.blendEquationSeparate(Jt[ce],Jt[ae]),p=ce,x=ae),(de!==b||xe!==S||te!==A||Ae!==w)&&(n.blendFuncSeparate(L[de],L[xe],L[te],L[Ae]),b=de,S=xe,A=te,w=Ae),(ze.equals(k)===!1||_t!==I)&&(n.blendColor(ze.r,ze.g,ze.b,_t),k.copy(ze),I=_t),v=U,T=!1}function Oe(U,ce){U.side===Mi?_e(n.CULL_FACE):se(n.CULL_FACE);let de=U.side===_n;ce&&(de=!de),De(de),U.blending===Zs&&U.transparent===!1?gt(Xi):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const xe=U.stencilWrite;a.setTest(xe),xe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function Me(U){U!==Lm?(se(n.CULL_FACE),U!==D&&(U===ju?n.cullFace(n.BACK):U===Dm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),D=U}function ct(U){U!==F&&(P&&n.lineWidth(U),F=U)}function Ee(U,ce,de){U?(se(n.POLYGON_OFFSET_FILL),(G!==ce||q!==de)&&(n.polygonOffset(ce,de),G=ce,q=de)):_e(n.POLYGON_OFFSET_FILL)}function He(U){U?se(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Ht(U){U===void 0&&(U=n.TEXTURE0+W-1),ee!==U&&(n.activeTexture(U),ee=U)}function At(U,ce,de){de===void 0&&(ee===null?de=n.TEXTURE0+W-1:de=ee);let xe=oe[de];xe===void 0&&(xe={type:void 0,texture:void 0},oe[de]=xe),(xe.type!==U||xe.texture!==ce)&&(ee!==de&&(n.activeTexture(de),ee=de),n.bindTexture(U,ce||Q[U]),xe.type=U,xe.texture=ce)}function C(){const U=oe[ee];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(U){Pe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Pe.copy(U))}function Se(U){lt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),lt.copy(U))}function he(U,ce){let de=l.get(ce);de===void 0&&(de=new WeakMap,l.set(ce,de));let xe=de.get(U);xe===void 0&&(xe=n.getUniformBlockIndex(ce,U.name),de.set(U,xe))}function ue(U,ce){const xe=l.get(ce).get(U);c.get(ce)!==xe&&(n.uniformBlockBinding(ce,xe,U.__bindingPointIndex),c.set(ce,xe))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,oe={},h={},d=new WeakMap,f=[],g=null,_=!1,v=null,p=null,b=null,S=null,x=null,A=null,w=null,k=new et(0,0,0),I=0,T=!1,E=null,D=null,F=null,G=null,q=null,Pe.set(0,0,n.canvas.width,n.canvas.height),lt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:_e,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Je,setBlending:gt,setMaterial:Oe,setFlipSided:De,setCullFace:Me,setLineWidth:ct,setPolygonOffset:Ee,setScissorTest:He,activeTexture:Ht,bindTexture:At,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:ne,texImage3D:J,updateUBOMapping:he,uniformBlockBinding:ue,texStorage2D:R,texStorage3D:X,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:re,viewport:Se,reset:Ne}}function dS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):oa("canvas")}function _(C,y,V){let Z=1;const ie=At(C);if((ie.width>V||ie.height>V)&&(Z=V/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Z*ie.width),Te=Math.floor(Z*ie.height);h===void 0&&(h=g(j,Te));const R=y?g(j,Te):h;return R.width=j,R.height=Te,R.getContext("2d").drawImage(C,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Te+")."),R}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function v(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,y,V,Z,ie=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=y;if(y===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),y===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){const Te=ie?sa:rt.getTransfer(Z);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Te===pt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,y){let V;return C?y===null||y===vs||y===Fr?V=n.DEPTH24_STENCIL8:y===wi?V=n.DEPTH32F_STENCIL8:y===Or&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vs||y===Fr?V=n.DEPTH_COMPONENT24:y===wi?V=n.DEPTH_COMPONENT32F:y===Or&&(V=n.DEPTH_COMPONENT16),V}function A(C,y){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xn&&C.minFilter!==Wn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){const y=C.target;y.removeEventListener("dispose",w),I(y),y.isVideoTexture&&u.delete(y)}function k(C){const y=C.target;y.removeEventListener("dispose",k),E(y)}function I(C){const y=i.get(C);if(y.__webglInit===void 0)return;const V=C.source,Z=d.get(V);if(Z){const ie=Z[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(C),Object.keys(Z).length===0&&d.delete(V)}i.remove(C)}function T(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const V=C.source,Z=d.get(V);delete Z[y.__cacheKey],o.memory.textures--}function E(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ie=0;ie<y.__webglFramebuffer[Z].length;ie++)n.deleteFramebuffer(y.__webglFramebuffer[Z][ie]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=C.textures;for(let Z=0,ie=V.length;Z<ie;Z++){const j=i.get(V[Z]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(V[Z])}i.remove(C)}let D=0;function F(){D=0}function G(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function q(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function W(C,y){const V=i.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,C,y);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function P(C,y){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Q(V,C,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function $(C,y){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Q(V,C,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function H(C,y){const V=i.get(C);if(C.version>0&&V.__version!==C.version){se(V,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const ee={[Ql]:n.REPEAT,[ds]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},oe={[Xn]:n.NEAREST,[lg]:n.NEAREST_MIPMAP_NEAREST,[ro]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},pe={[fg]:n.NEVER,[yg]:n.ALWAYS,[pg]:n.LESS,[Rf]:n.LEQUAL,[mg]:n.EQUAL,[_g]:n.GEQUAL,[gg]:n.GREATER,[vg]:n.NOTEQUAL};function Be(C,y){if(y.type===wi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wn||y.magFilter===Wa||y.magFilter===ro||y.magFilter===hs||y.minFilter===Wn||y.minFilter===Wa||y.minFilter===ro||y.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ee[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ee[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ee[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,oe[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xn||y.minFilter!==ro&&y.minFilter!==hs||y.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Pe(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));const Z=y.source;let ie=d.get(Z);ie===void 0&&(ie={},d.set(Z,ie));const j=q(y);if(j!==C.__cacheKey){ie[j]===void 0&&(ie[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[j].usedTimes++;const Te=ie[C.__cacheKey];Te!==void 0&&(ie[C.__cacheKey].usedTimes--,Te.usedTimes===0&&T(y)),C.__cacheKey=j,C.__webglTexture=ie[j].texture}return V}function lt(C,y,V){return Math.floor(Math.floor(C/V)/y)}function it(C,y,V,Z){const j=C.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,Z,y.data);else{j.sort((J,re)=>J.start-re.start);let Te=0;for(let J=1;J<j.length;J++){const re=j[Te],Se=j[J],he=re.start+re.count,ue=lt(Se.start,y.width,4),Ne=lt(re.start,y.width,4);Se.start<=he+1&&ue===Ne&&lt(Se.start+Se.count-1,y.width,4)===ue?re.count=Math.max(re.count,Se.start+Se.count-re.start):(++Te,j[Te]=Se)}j.length=Te+1;const R=n.getParameter(n.UNPACK_ROW_LENGTH),X=n.getParameter(n.UNPACK_SKIP_PIXELS),ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let J=0,re=j.length;J<re;J++){const Se=j[J],he=Math.floor(Se.start/4),ue=Math.ceil(Se.count/4),Ne=he%y.width,U=Math.floor(he/y.width),ce=ue,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ne,U,ce,de,V,Z,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,R),n.pixelStorei(n.UNPACK_SKIP_PIXELS,X),n.pixelStorei(n.UNPACK_SKIP_ROWS,ne)}}function Q(C,y,V){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);const ie=Pe(C,y),j=y.source;t.bindTexture(Z,C.__webglTexture,n.TEXTURE0+V);const Te=i.get(j);if(j.version!==Te.__version||ie===!0){t.activeTexture(n.TEXTURE0+V);const R=rt.getPrimaries(rt.workingColorSpace),X=y.colorSpace===$i?null:rt.getPrimaries(y.colorSpace),ne=y.colorSpace===$i||R===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let J=_(y.image,!1,s.maxTextureSize);J=Ht(y,J);const re=r.convert(y.format,y.colorSpace),Se=r.convert(y.type);let he=S(y.internalFormat,re,Se,y.colorSpace,y.isVideoTexture);Be(Z,y);let ue;const Ne=y.mipmaps,U=y.isVideoTexture!==!0,ce=Te.__version===void 0||ie===!0,de=j.dataReady,xe=A(y,J);if(y.isDepthTexture)he=x(y.format===zr,y.type),ce&&(U?t.texStorage2D(n.TEXTURE_2D,1,he,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,he,J.width,J.height,0,re,Se,null));else if(y.isDataTexture)if(Ne.length>0){U&&ce&&t.texStorage2D(n.TEXTURE_2D,xe,he,Ne[0].width,Ne[0].height);for(let ae=0,te=Ne.length;ae<te;ae++)ue=Ne[ae],U?de&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ue.width,ue.height,re,Se,ue.data):t.texImage2D(n.TEXTURE_2D,ae,he,ue.width,ue.height,0,re,Se,ue.data);y.generateMipmaps=!1}else U?(ce&&t.texStorage2D(n.TEXTURE_2D,xe,he,J.width,J.height),de&&it(y,J,re,Se)):t.texImage2D(n.TEXTURE_2D,0,he,J.width,J.height,0,re,Se,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,he,Ne[0].width,Ne[0].height,J.depth);for(let ae=0,te=Ne.length;ae<te;ae++)if(ue=Ne[ae],y.format!==$n)if(re!==null)if(U){if(de)if(y.layerUpdates.size>0){const Ae=Nd(ue.width,ue.height,y.format,y.type);for(const ze of y.layerUpdates){const _t=ue.data.subarray(ze*Ae/ue.data.BYTES_PER_ELEMENT,(ze+1)*Ae/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,ze,ue.width,ue.height,1,re,_t)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ue.width,ue.height,J.depth,re,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,he,ue.width,ue.height,J.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ue.width,ue.height,J.depth,re,Se,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,he,ue.width,ue.height,J.depth,0,re,Se,ue.data)}else{U&&ce&&t.texStorage2D(n.TEXTURE_2D,xe,he,Ne[0].width,Ne[0].height);for(let ae=0,te=Ne.length;ae<te;ae++)ue=Ne[ae],y.format!==$n?re!==null?U?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ue.width,ue.height,re,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,he,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?de&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ue.width,ue.height,re,Se,ue.data):t.texImage2D(n.TEXTURE_2D,ae,he,ue.width,ue.height,0,re,Se,ue.data)}else if(y.isDataArrayTexture)if(U){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,he,J.width,J.height,J.depth),de)if(y.layerUpdates.size>0){const ae=Nd(J.width,J.height,y.format,y.type);for(const te of y.layerUpdates){const Ae=J.data.subarray(te*ae/J.data.BYTES_PER_ELEMENT,(te+1)*ae/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,J.width,J.height,1,re,Se,Ae)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,re,Se,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,J.width,J.height,J.depth,0,re,Se,J.data);else if(y.isData3DTexture)U?(ce&&t.texStorage3D(n.TEXTURE_3D,xe,he,J.width,J.height,J.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,re,Se,J.data)):t.texImage3D(n.TEXTURE_3D,0,he,J.width,J.height,J.depth,0,re,Se,J.data);else if(y.isFramebufferTexture){if(ce)if(U)t.texStorage2D(n.TEXTURE_2D,xe,he,J.width,J.height);else{let ae=J.width,te=J.height;for(let Ae=0;Ae<xe;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,he,ae,te,0,re,Se,null),ae>>=1,te>>=1}}else if(Ne.length>0){if(U&&ce){const ae=At(Ne[0]);t.texStorage2D(n.TEXTURE_2D,xe,he,ae.width,ae.height)}for(let ae=0,te=Ne.length;ae<te;ae++)ue=Ne[ae],U?de&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,re,Se,ue):t.texImage2D(n.TEXTURE_2D,ae,he,re,Se,ue);y.generateMipmaps=!1}else if(U){if(ce){const ae=At(J);t.texStorage2D(n.TEXTURE_2D,xe,he,ae.width,ae.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re,Se,J)}else t.texImage2D(n.TEXTURE_2D,0,he,re,Se,J);v(y)&&p(Z),Te.__version=j.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function se(C,y,V){if(y.image.length!==6)return;const Z=Pe(C,y),ie=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const j=i.get(ie);if(ie.version!==j.__version||Z===!0){t.activeTexture(n.TEXTURE0+V);const Te=rt.getPrimaries(rt.workingColorSpace),R=y.colorSpace===$i?null:rt.getPrimaries(y.colorSpace),X=y.colorSpace===$i||Te===R?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const ne=y.isCompressedTexture||y.image[0].isCompressedTexture,J=y.image[0]&&y.image[0].isDataTexture,re=[];for(let te=0;te<6;te++)!ne&&!J?re[te]=_(y.image[te],!0,s.maxCubemapSize):re[te]=J?y.image[te].image:y.image[te],re[te]=Ht(y,re[te]);const Se=re[0],he=r.convert(y.format,y.colorSpace),ue=r.convert(y.type),Ne=S(y.internalFormat,he,ue,y.colorSpace),U=y.isVideoTexture!==!0,ce=j.__version===void 0||Z===!0,de=ie.dataReady;let xe=A(y,Se);Be(n.TEXTURE_CUBE_MAP,y);let ae;if(ne){U&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ne,Se.width,Se.height);for(let te=0;te<6;te++){ae=re[te].mipmaps;for(let Ae=0;Ae<ae.length;Ae++){const ze=ae[Ae];y.format!==$n?he!==null?U?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,ze.width,ze.height,he,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Ne,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,0,0,ze.width,ze.height,he,ue,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae,Ne,ze.width,ze.height,0,he,ue,ze.data)}}}else{if(ae=y.mipmaps,U&&ce){ae.length>0&&xe++;const te=At(re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ne,te.width,te.height)}for(let te=0;te<6;te++)if(J){U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,re[te].width,re[te].height,he,ue,re[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ne,re[te].width,re[te].height,0,he,ue,re[te].data);for(let Ae=0;Ae<ae.length;Ae++){const _t=ae[Ae].image[te].image;U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,_t.width,_t.height,he,ue,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Ne,_t.width,_t.height,0,he,ue,_t.data)}}else{U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he,ue,re[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ne,he,ue,re[te]);for(let Ae=0;Ae<ae.length;Ae++){const ze=ae[Ae];U?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,0,0,he,ue,ze.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ae+1,Ne,he,ue,ze.image[te])}}}v(y)&&p(n.TEXTURE_CUBE_MAP),j.__version=ie.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function _e(C,y,V,Z,ie,j){const Te=r.convert(V.format,V.colorSpace),R=r.convert(V.type),X=S(V.internalFormat,Te,R,V.colorSpace),ne=i.get(y),J=i.get(V);if(J.__renderTarget=y,!ne.__hasExternalTextures){const re=Math.max(1,y.width>>j),Se=Math.max(1,y.height>>j);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,j,X,re,Se,y.depth,0,Te,R,null):t.texImage2D(ie,j,X,re,Se,0,Te,R,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ie,J.__webglTexture,0,ct(y)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ie,J.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const Z=y.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,j=x(y.stencilBuffer,ie),Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=ct(y);Ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,j,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{const Z=y.textures;for(let ie=0;ie<Z.length;ie++){const j=Z[ie],Te=r.convert(j.format,j.colorSpace),R=r.convert(j.type),X=S(j.internalFormat,Te,R,j.colorSpace),ne=ct(y);V&&Ee(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,X,y.width,y.height):Ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const ie=Z.__webglTexture,j=ct(y);if(y.depthTexture.format===Br)Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(y.depthTexture.format===zr)Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Je(C){const y=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Z=C.texture.mipmaps;Z&&Z.length>0?Re(y.__webglFramebuffer[0],C):Re(y.__webglFramebuffer,C)}else if(V){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ue(y.__webglDepthbuffer[Z],C,!1);else{const ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,j)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ue(y.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(C,y,V){const Z=i.get(C);y!==void 0&&_e(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Je(C)}function L(C){const y=C.texture,V=i.get(C),Z=i.get(y);C.addEventListener("dispose",k);const ie=C.textures,j=C.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let R=0;R<6;R++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[R]=[];for(let X=0;X<y.mipmaps.length;X++)V.__webglFramebuffer[R][X]=n.createFramebuffer()}else V.__webglFramebuffer[R]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let R=0;R<y.mipmaps.length;R++)V.__webglFramebuffer[R]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Te)for(let R=0,X=ie.length;R<X;R++){const ne=i.get(ie[R]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let R=0;R<ie.length;R++){const X=ie[R];V.__webglColorRenderbuffer[R]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[R]);const ne=r.convert(X.format,X.colorSpace),J=r.convert(X.type),re=S(X.internalFormat,ne,J,X.colorSpace,C.isXRRenderTarget===!0),Se=ct(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,re,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,V.__webglColorRenderbuffer[R])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(n.TEXTURE_CUBE_MAP,y);for(let R=0;R<6;R++)if(y.mipmaps&&y.mipmaps.length>0)for(let X=0;X<y.mipmaps.length;X++)_e(V.__webglFramebuffer[R][X],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+R,X);else _e(V.__webglFramebuffer[R],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0);v(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let R=0,X=ie.length;R<X;R++){const ne=ie[R],J=i.get(ne);let re=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),Be(re,ne),_e(V.__webglFramebuffer,C,ne,n.COLOR_ATTACHMENT0+R,re,0),v(ne)&&p(re)}t.unbindTexture()}else{let R=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(R=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(R,Z.__webglTexture),Be(R,y),y.mipmaps&&y.mipmaps.length>0)for(let X=0;X<y.mipmaps.length;X++)_e(V.__webglFramebuffer[X],C,y,n.COLOR_ATTACHMENT0,R,X);else _e(V.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,R,0);v(y)&&p(R),t.unbindTexture()}C.depthBuffer&&Je(C)}function gt(C){const y=C.textures;for(let V=0,Z=y.length;V<Z;V++){const ie=y[V];if(v(ie)){const j=b(C),Te=i.get(ie).__webglTexture;t.bindTexture(j,Te),p(j),t.unbindTexture()}}}const Oe=[],De=[];function Me(C){if(C.samples>0){if(Ee(C)===!1){const y=C.textures,V=C.width,Z=C.height;let ie=n.COLOR_BUFFER_BIT;const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),R=y.length>1;if(R)for(let ne=0;ne<y.length;ne++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const X=C.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ne=0;ne<y.length;ne++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),R){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ne]);const J=i.get(y[ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,V,Z,0,0,V,Z,ie,n.NEAREST),c===!0&&(Oe.length=0,De.length=0,Oe.push(n.COLOR_ATTACHMENT0+ne),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Oe.push(j),De.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),R)for(let ne=0;ne<y.length;ne++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ne]);const J=i.get(y[ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ct(C){return Math.min(s.maxSamples,C.samples)}function Ee(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function He(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Ht(C,y){const V=C.colorSpace,Z=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==ir&&V!==$i&&(rt.getTransfer(V)===pt?(Z!==$n||ie!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function At(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=P,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Jt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ee}function hS(n,e){function t(i,s=$i){let r;const o=rt.getTransfer(s);if(i===Ii)return n.UNSIGNED_BYTE;if(i===uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===du)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ef)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sf)return n.BYTE;if(i===xf)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===cu)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===Tf)return n.ALPHA;if(i===wf)return n.RGB;if(i===$n)return n.RGBA;if(i===Br)return n.DEPTH_COMPONENT;if(i===zr)return n.DEPTH_STENCIL;if(i===Af)return n.RED;if(i===hu)return n.RED_INTEGER;if(i===Cf)return n.RG;if(i===fu)return n.RG_INTEGER;if(i===pu)return n.RGBA_INTEGER;if(i===Vo||i===Wo||i===$o||i===Xo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rc||i===oc||i===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rc||i===oc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===cc||i===uc||i===dc||i===hc||i===fc||i===pc||i===mc||i===gc||i===vc||i===_c||i===yc||i===bc||i===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xc||i===Mc||i===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===wc||i===Ac||i===Cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const fS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pS=`
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

}`;class mS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ki({vertexShader:fS,fragmentShader:pS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gS extends ur{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",v=new mS,p={},b=t.getContextAttributes();let S=null,x=null;const A=[],w=[],k=new ve;let I=null;const T=new Bn;T.viewport=new zt;const E=new Bn;E.viewport=new zt;const D=[T,E],F=new Uv;let G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=A[Q];return se===void 0&&(se=new hl,A[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=A[Q];return se===void 0&&(se=new hl,A[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=A[Q];return se===void 0&&(se=new hl,A[Q]=se),se.getHandSpace()};function W(Q){const se=w.indexOf(Q.inputSource);if(se===-1)return;const _e=A[se];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,l||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",$);for(let Q=0;Q<A.length;Q++){const se=w[Q];se!==null&&(w[Q]=null,A[Q].disconnect(se))}G=null,q=null,v.reset();for(const Q in p)delete p[Q];e.setRenderTarget(S),f=null,d=null,h=null,s=null,x=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",P),s.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(k),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,Re=null;b.depth&&(Re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?zr:Br,Ue=b.stencil?Fr:vs);const Je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new _s(d.textureWidth,d.textureHeight,{format:$n,type:Ii,depthTexture:new Gf(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new _s(f.framebufferWidth,f.framebufferHeight,{format:$n,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(Q){for(let se=0;se<Q.removed.length;se++){const _e=Q.removed[se],Ue=w.indexOf(_e);Ue>=0&&(w[Ue]=null,A[Ue].disconnect(_e))}for(let se=0;se<Q.added.length;se++){const _e=Q.added[se];let Ue=w.indexOf(_e);if(Ue===-1){for(let Je=0;Je<A.length;Je++)if(Je>=w.length){w.push(_e),Ue=Je;break}else if(w[Je]===null){w[Je]=_e,Ue=Je;break}if(Ue===-1)break}const Re=A[Ue];Re&&Re.connect(_e)}}const H=new O,ee=new O;function oe(Q,se,_e){H.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const Ue=H.distanceTo(ee),Re=se.projectionMatrix.elements,Je=_e.projectionMatrix.elements,Jt=Re[14]/(Re[10]-1),L=Re[14]/(Re[10]+1),gt=(Re[9]+1)/Re[5],Oe=(Re[9]-1)/Re[5],De=(Re[8]-1)/Re[0],Me=(Je[8]+1)/Je[0],ct=Jt*De,Ee=Jt*Me,He=Ue/(-De+Me),Ht=He*-De;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ht),Q.translateZ(He),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Re[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const At=Jt+He,C=L+He,y=ct-Ht,V=Ee+(Ue-Ht),Z=gt*L/C*At,ie=Oe*L/C*At;Q.projectionMatrix.makePerspective(y,V,Z,ie,At,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pe(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let se=Q.near,_e=Q.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),F.near=E.near=T.near=se,F.far=E.far=T.far=_e,(G!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,q=F.far),F.layers.mask=Q.layers.mask|6,T.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const Ue=Q.parent,Re=F.cameras;pe(F,Ue);for(let Je=0;Je<Re.length;Je++)pe(Re[Je],Ue);Re.length===2?oe(F,T,E):F.projectionMatrix.copy(T.projectionMatrix),Be(Q,F,Ue)};function Be(Q,se,_e){_e===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=kc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let Pe=null;function lt(Q,se){if(u=se.getViewerPose(l||o),g=se,u!==null){const _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ue=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let L=0;L<_e.length;L++){const gt=_e[L];let Oe=null;if(f!==null)Oe=f.getViewport(gt);else{const Me=h.getViewSubImage(d,gt);Oe=Me.viewport,L===0&&(e.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(x))}let De=D[L];De===void 0&&(De=new Bn,De.layers.enable(L),De.viewport=new zt,D[L]=De),De.matrix.fromArray(gt.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(gt.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),L===0&&(F.matrix.copy(De.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(De)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const L=h.getDepthInformation(_e[0]);L&&L.isValid&&L.texture&&v.init(L,s.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let L=0;L<_e.length;L++){const gt=_e[L].camera;if(gt){let Oe=p[gt];Oe||(Oe=new Vf,p[gt]=Oe);const De=h.getCameraImage(gt);Oe.sourceTexture=De}}}}for(let _e=0;_e<A.length;_e++){const Ue=w[_e],Re=A[_e];Ue!==null&&Re!==void 0&&Re.update(Ue,se,l||o)}Pe&&Pe(Q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const it=new Qf;it.setAnimationLoop(lt),this.setAnimationLoop=function(Q){Pe=Q},this.dispose=function(){}}}const ss=new Ni,vS=new Dt;function _S(n,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function i(v,p){p.color.getRGB(v.fogColor.value,Nf(n)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(v,p):p.isMeshToonMaterial?(r(v,p),h(v,p)):p.isMeshPhongMaterial?(r(v,p),u(v,p)):p.isMeshStandardMaterial?(r(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,x)):p.isMeshMatcapMaterial?(r(v,p),g(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),_(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?c(v,p,b,S):p.isSpriteMaterial?l(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===_n&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===_n&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,x=b.envMapRotation;S&&(v.envMap.value=S,ss.copy(x),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),v.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(ss)),v.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function c(v,p,b,S){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*b,v.scale.value=S*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function l(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function u(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function h(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,b){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,p){p.matcap&&(v.matcap.value=p.matcap)}function _(v,p){const b=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const x=S.program;i.uniformBlockBinding(b,x)}function l(b,S){let x=s[b.id];x===void 0&&(g(b),x=u(b),s[b.id]=x,b.addEventListener("dispose",v));const A=S.program;i.updateUBOMapping(b,A);const w=e.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function u(b){const S=h();b.__bindingPointIndex=S;const x=n.createBuffer(),A=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],x=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,k=x.length;w<k;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,E=I.length;T<E;T++){const D=I[T];if(f(D,w,T,A)===!0){const F=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let W=0;W<G.length;W++){const P=G[W],$=_(P);typeof P=="number"||typeof P=="boolean"?(D.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,F+q,D.__data)):P.isMatrix3?(D.__data[0]=P.elements[0],D.__data[1]=P.elements[1],D.__data[2]=P.elements[2],D.__data[3]=0,D.__data[4]=P.elements[3],D.__data[5]=P.elements[4],D.__data[6]=P.elements[5],D.__data[7]=0,D.__data[8]=P.elements[6],D.__data[9]=P.elements[7],D.__data[10]=P.elements[8],D.__data[11]=0):(P.toArray(D.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,S,x,A){const w=b.value,k=S+"_"+x;if(A[k]===void 0)return typeof w=="number"||typeof w=="boolean"?A[k]=w:A[k]=w.clone(),!0;{const I=A[k];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[k]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(b){const S=b.uniforms;let x=0;const A=16;for(let k=0,I=S.length;k<I;k++){const T=Array.isArray(S[k])?S[k]:[S[k]];for(let E=0,D=T.length;E<D;E++){const F=T[E],G=Array.isArray(F.value)?F.value:[F.value];for(let q=0,W=G.length;q<W;q++){const P=G[q],$=_(P),H=x%A,ee=H%$.boundary,oe=H+ee;x+=ee,oe!==0&&A-oe<$.storage&&(x+=A-oe),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=$.storage}}}const w=x%A;return w>0&&(x+=A-w),b.__size=x,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function v(b){const S=b.target;S.removeEventListener("dispose",v);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class bS{constructor(e={}){const{canvas:t=Sg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=gn;let w=0,k=0,I=null,T=-1,E=null;const D=new zt,F=new zt;let G=null;const q=new et(0);let W=0,P=t.width,$=t.height,H=1,ee=null,oe=null;const pe=new zt(0,0,P,$),Be=new zt(0,0,P,$);let Pe=!1;const lt=new zf;let it=!1,Q=!1;const se=new Dt,_e=new O,Ue=new zt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Jt(){return I===null?H:1}let L=i;function gt(M,B){return t.getContext(M,B)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const B="webgl2";if(L=gt(B,M),L===null)throw gt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Oe,De,Me,ct,Ee,He,Ht,At,C,y,V,Z,ie,j,Te,R,X,ne,J,re,Se,he,ue,Ne;function U(){Oe=new ky(L),Oe.init(),he=new hS(L,Oe),De=new My(L,Oe,e,he),Me=new uS(L,Oe),De.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),ct=new Dy(L),Ee=new Jb,He=new dS(L,Oe,Me,Ee,De,he,ct),Ht=new Ty(x),At=new Ry(x),C=new Bv(L),ue=new Sy(L,C),y=new Py(L,C,ct,ue),V=new Ny(L,y,C,ct),J=new Iy(L,De,He),R=new Ey(Ee),Z=new Zb(x,Ht,At,Oe,De,ue,R),ie=new _S(x,Ee),j=new Qb,Te=new rS(Oe),ne=new by(x,Ht,At,Me,V,f,c),X=new lS(x,V,De),Ne=new yS(L,ct,De,Me),re=new xy(L,Oe,ct),Se=new Ly(L,Oe,ct),ct.programs=Z.programs,x.capabilities=De,x.extensions=Oe,x.properties=Ee,x.renderLists=j,x.shadowMap=X,x.state=Me,x.info=ct}U();const ce=new gS(x,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(P,$,!1))},this.getSize=function(M){return M.set(P,$)},this.setSize=function(M,B,Y=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=M,$=B,t.width=Math.floor(M*H),t.height=Math.floor(B*H),Y===!0&&(t.style.width=M+"px",t.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(P*H,$*H).floor()},this.setDrawingBufferSize=function(M,B,Y){P=M,$=B,H=Y,t.width=Math.floor(M*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(pe)},this.setViewport=function(M,B,Y,K){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,B,Y,K),Me.viewport(D.copy(pe).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,B,Y,K){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,B,Y,K),Me.scissor(F.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(M){Me.setScissorTest(Pe=M)},this.setOpaqueSort=function(M){ee=M},this.setTransparentSort=function(M){oe=M},this.getClearColor=function(M){return M.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,Y=!0){let K=0;if(M){let z=!1;if(I!==null){const le=I.texture.format;z=le===pu||le===fu||le===hu}if(z){const le=I.texture.type,me=le===Ii||le===vs||le===Or||le===Fr||le===uu||le===du,we=ne.getClearColor(),be=ne.getClearAlpha(),Ie=we.r,Fe=we.g,ke=we.b;me?(g[0]=Ie,g[1]=Fe,g[2]=ke,g[3]=be,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ie,_[1]=Fe,_[2]=ke,_[3]=be,L.clearBufferiv(L.COLOR,0,_))}else K|=L.COLOR_BUFFER_BIT}B&&(K|=L.DEPTH_BUFFER_BIT),Y&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ne.dispose(),j.dispose(),Te.dispose(),Ee.dispose(),Ht.dispose(),At.dispose(),V.dispose(),ue.dispose(),Ne.dispose(),Z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Kn),ce.removeEventListener("sessionend",Iu),Ji.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=ct.autoReset,B=X.enabled,Y=X.autoUpdate,K=X.needsUpdate,z=X.type;U(),ct.autoReset=M,X.enabled=B,X.autoUpdate=Y,X.needsUpdate=K,X.type=z}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function te(M){const B=M.target;B.removeEventListener("dispose",te),Ae(B)}function Ae(M){ze(M),Ee.remove(M)}function ze(M){const B=Ee.get(M).programs;B!==void 0&&(B.forEach(function(Y){Z.releaseProgram(Y)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,Y,K,z,le){B===null&&(B=Re);const me=z.isMesh&&z.matrixWorld.determinant()<0,we=om(M,B,Y,K,z);Me.setMaterial(K,me);let be=Y.index,Ie=1;if(K.wireframe===!0){if(be=y.getWireframeAttribute(Y),be===void 0)return;Ie=2}const Fe=Y.drawRange,ke=Y.attributes.position;let je=Fe.start*Ie,ft=(Fe.start+Fe.count)*Ie;le!==null&&(je=Math.max(je,le.start*Ie),ft=Math.min(ft,(le.start+le.count)*Ie)),be!==null?(je=Math.max(je,0),ft=Math.min(ft,be.count)):ke!=null&&(je=Math.max(je,0),ft=Math.min(ft,ke.count));const It=ft-je;if(It<0||It===1/0)return;ue.setup(z,K,we,Y,be);let Mt,vt=re;if(be!==null&&(Mt=C.get(be),vt=Se,vt.setIndex(Mt)),z.isMesh)K.wireframe===!0?(Me.setLineWidth(K.wireframeLinewidth*Jt()),vt.setMode(L.LINES)):vt.setMode(L.TRIANGLES);else if(z.isLine){let Le=K.linewidth;Le===void 0&&(Le=1),Me.setLineWidth(Le*Jt()),z.isLineSegments?vt.setMode(L.LINES):z.isLineLoop?vt.setMode(L.LINE_LOOP):vt.setMode(L.LINE_STRIP)}else z.isPoints?vt.setMode(L.POINTS):z.isSprite&&vt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Ct=z._multiDrawCounts,st=z._multiDrawCount,yn=be?C.get(be).bytesPerElement:1,Es=Ee.get(K).currentProgram.getUniforms();for(let bn=0;bn<st;bn++)Es.setValue(L,"_gl_DrawID",bn),vt.render(Le[bn]/yn,Ct[bn])}else if(z.isInstancedMesh)vt.renderInstances(je,It,z.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,Le);vt.renderInstances(je,It,Ct)}else vt.render(je,It)};function _t(M,B,Y){M.transparent===!0&&M.side===Mi&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,no(M,B,Y),M.side=qi,M.needsUpdate=!0,no(M,B,Y),M.side=Mi):no(M,B,Y)}this.compile=function(M,B,Y=null){Y===null&&(Y=M),p=Te.get(Y),p.init(B),S.push(p),Y.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),M!==Y&&M.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const K=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const we=le[me];_t(we,Y,z),K.add(we)}else _t(le,Y,z),K.add(le)}),p=S.pop(),K},this.compileAsync=function(M,B,Y=null){const K=this.compile(M,B,Y);return new Promise(z=>{function le(){if(K.forEach(function(me){Ee.get(me).currentProgram.isReady()&&K.delete(me)}),K.size===0){z(M);return}setTimeout(le,10)}Oe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ut=null;function hi(M){ut&&ut(M)}function Kn(){Ji.stop()}function Iu(){Ji.start()}const Ji=new Qf;Ji.setAnimationLoop(hi),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(M){ut=M,ce.setAnimationLoop(M),M===null?Ji.stop():Ji.start()},ce.addEventListener("sessionstart",Kn),ce.addEventListener("sessionend",Iu),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,B,I),p=Te.get(M,S.length),p.init(B),S.push(p),se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),lt.setFromProjectionMatrix(se,oi,B.reversedDepth),Q=this.localClippingEnabled,it=R.init(this.clippingPlanes,Q),v=j.get(M,b.length),v.init(),b.push(v),ce.enabled===!0&&ce.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&za(le,B,-1/0,x.sortObjects)}za(M,B,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(ee,oe),Je=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Je&&ne.addToRenderList(v,M),this.info.render.frame++,it===!0&&R.beginShadows();const Y=p.state.shadowsArray;X.render(Y,M,B),it===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,z=v.transmissive;if(p.setupLights(),B.isArrayCamera){const le=B.cameras;if(z.length>0)for(let me=0,we=le.length;me<we;me++){const be=le[me];Uu(K,z,M,be)}Je&&ne.render(M);for(let me=0,we=le.length;me<we;me++){const be=le[me];Nu(v,M,be,be.viewport)}}else z.length>0&&Uu(K,z,M,B),Je&&ne.render(M),Nu(v,M,B);I!==null&&k===0&&(He.updateMultisampleRenderTarget(I),He.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(x,M,B),ue.resetDefaultState(),T=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&R.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function za(M,B,Y,K){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||lt.intersectsSprite(M)){K&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(se);const me=V.update(M),we=M.material;we.visible&&v.push(M,me,we,Y,Ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||lt.intersectsObject(M))){const me=V.update(M),we=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ue.copy(me.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(se)),Array.isArray(we)){const be=me.groups;for(let Ie=0,Fe=be.length;Ie<Fe;Ie++){const ke=be[Ie],je=we[ke.materialIndex];je&&je.visible&&v.push(M,me,je,Y,Ue.z,ke)}}else we.visible&&v.push(M,me,we,Y,Ue.z,null)}}const le=M.children;for(let me=0,we=le.length;me<we;me++)za(le[me],B,Y,K)}function Nu(M,B,Y,K){const z=M.opaque,le=M.transmissive,me=M.transparent;p.setupLightsView(Y),it===!0&&R.setGlobalState(x.clippingPlanes,Y),K&&Me.viewport(D.copy(K)),z.length>0&&to(z,B,Y),le.length>0&&to(le,B,Y),me.length>0&&to(me,B,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Uu(M,B,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new _s(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Kr:Ii,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const le=p.state.transmissionRenderTarget[K.id],me=K.viewport||D;le.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),be=x.getActiveCubeFace(),Ie=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(q),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Je&&ne.render(Y);const Fe=x.toneMapping;x.toneMapping=Yi;const ke=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),it===!0&&R.setGlobalState(x.clippingPlanes,K),to(M,Y,K),He.updateMultisampleRenderTarget(le),He.updateRenderTargetMipmap(le),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ft=0,It=B.length;ft<It;ft++){const Mt=B[ft],vt=Mt.object,Le=Mt.geometry,Ct=Mt.material,st=Mt.group;if(Ct.side===Mi&&vt.layers.test(K.layers)){const yn=Ct.side;Ct.side=_n,Ct.needsUpdate=!0,Ou(vt,Y,K,Le,Ct,st),Ct.side=yn,Ct.needsUpdate=!0,je=!0}}je===!0&&(He.updateMultisampleRenderTarget(le),He.updateRenderTargetMipmap(le))}x.setRenderTarget(we,be,Ie),x.setClearColor(q,W),ke!==void 0&&(K.viewport=ke),x.toneMapping=Fe}function to(M,B,Y){const K=B.isScene===!0?B.overrideMaterial:null;for(let z=0,le=M.length;z<le;z++){const me=M[z],we=me.object,be=me.geometry,Ie=me.group;let Fe=me.material;Fe.allowOverride===!0&&K!==null&&(Fe=K),we.layers.test(Y.layers)&&Ou(we,B,Y,be,Fe,Ie)}}function Ou(M,B,Y,K,z,le){M.onBeforeRender(x,B,Y,K,z,le),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(x,B,Y,K,M,le),z.transparent===!0&&z.side===Mi&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,x.renderBufferDirect(Y,B,K,z,M,le),z.side=qi,z.needsUpdate=!0,x.renderBufferDirect(Y,B,K,z,M,le),z.side=Mi):x.renderBufferDirect(Y,B,K,z,M,le),M.onAfterRender(x,B,Y,K,z,le)}function no(M,B,Y){B.isScene!==!0&&(B=Re);const K=Ee.get(M),z=p.state.lights,le=p.state.shadowsArray,me=z.state.version,we=Z.getParameters(M,z.state,le,B,Y),be=Z.getProgramCacheKey(we);let Ie=K.programs;K.environment=M.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(M.isMeshStandardMaterial?At:Ht).get(M.envMap||K.environment),K.envMapRotation=K.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",te),Ie=new Map,K.programs=Ie);let Fe=Ie.get(be);if(Fe!==void 0){if(K.currentProgram===Fe&&K.lightsStateVersion===me)return Bu(M,we),Fe}else we.uniforms=Z.getUniforms(M),M.onBeforeCompile(we,x),Fe=Z.acquireProgram(we,be),Ie.set(be,Fe),K.uniforms=we.uniforms;const ke=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=R.uniform),Bu(M,we),K.needsLights=lm(M),K.lightsStateVersion=me,K.needsLights&&(ke.ambientLightColor.value=z.state.ambient,ke.lightProbe.value=z.state.probe,ke.directionalLights.value=z.state.directional,ke.directionalLightShadows.value=z.state.directionalShadow,ke.spotLights.value=z.state.spot,ke.spotLightShadows.value=z.state.spotShadow,ke.rectAreaLights.value=z.state.rectArea,ke.ltc_1.value=z.state.rectAreaLTC1,ke.ltc_2.value=z.state.rectAreaLTC2,ke.pointLights.value=z.state.point,ke.pointLightShadows.value=z.state.pointShadow,ke.hemisphereLights.value=z.state.hemi,ke.directionalShadowMap.value=z.state.directionalShadowMap,ke.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ke.spotShadowMap.value=z.state.spotShadowMap,ke.spotLightMatrix.value=z.state.spotLightMatrix,ke.spotLightMap.value=z.state.spotLightMap,ke.pointShadowMap.value=z.state.pointShadowMap,ke.pointShadowMatrix.value=z.state.pointShadowMatrix),K.currentProgram=Fe,K.uniformsList=null,Fe}function Fu(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=qo.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Bu(M,B){const Y=Ee.get(M);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function om(M,B,Y,K,z){B.isScene!==!0&&(B=Re),He.resetTextureUnits();const le=B.fog,me=K.isMeshStandardMaterial?B.environment:null,we=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ir,be=(K.isMeshStandardMaterial?At:Ht).get(K.envMap||me),Ie=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!Y.morphAttributes.position,je=!!Y.morphAttributes.normal,ft=!!Y.morphAttributes.color;let It=Yi;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(It=x.toneMapping);const Mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=Mt!==void 0?Mt.length:0,Le=Ee.get(K),Ct=p.state.lights;if(it===!0&&(Q===!0||M!==E)){const an=M===E&&K.id===T;R.setState(K,M,an)}let st=!1;K.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ct.state.version||Le.outputColorSpace!==we||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==be||K.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==R.numPlanes||Le.numIntersection!==R.numIntersection)||Le.vertexAlphas!==Ie||Le.vertexTangents!==Fe||Le.morphTargets!==ke||Le.morphNormals!==je||Le.morphColors!==ft||Le.toneMapping!==It||Le.morphTargetsCount!==vt)&&(st=!0):(st=!0,Le.__version=K.version);let yn=Le.currentProgram;st===!0&&(yn=no(K,B,z));let Es=!1,bn=!1,pr=!1;const Rt=yn.getUniforms(),An=Le.uniforms;if(Me.useProgram(yn.program)&&(Es=!0,bn=!0,pr=!0),K.id!==T&&(T=K.id,bn=!0),Es||E!==M){Me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Rt.setValue(L,"projectionMatrix",M.projectionMatrix),Rt.setValue(L,"viewMatrix",M.matrixWorldInverse);const mn=Rt.map.cameraPosition;mn!==void 0&&mn.setValue(L,_e.setFromMatrixPosition(M.matrixWorld)),De.logarithmicDepthBuffer&&Rt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Rt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,bn=!0,pr=!0)}if(z.isSkinnedMesh){Rt.setOptional(L,z,"bindMatrix"),Rt.setOptional(L,z,"bindMatrixInverse");const an=z.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Rt.setValue(L,"boneTexture",an.boneTexture,He))}z.isBatchedMesh&&(Rt.setOptional(L,z,"batchingTexture"),Rt.setValue(L,"batchingTexture",z._matricesTexture,He),Rt.setOptional(L,z,"batchingIdTexture"),Rt.setValue(L,"batchingIdTexture",z._indirectTexture,He),Rt.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Rt.setValue(L,"batchingColorTexture",z._colorsTexture,He));const Cn=Y.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&J.update(z,Y,yn),(bn||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,Rt.setValue(L,"receiveShadow",z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(An.envMap.value=be,An.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(An.envMapIntensity.value=B.environmentIntensity),bn&&(Rt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&am(An,pr),le&&K.fog===!0&&ie.refreshFogUniforms(An,le),ie.refreshMaterialUniforms(An,K,H,$,p.state.transmissionRenderTarget[M.id]),qo.upload(L,Fu(Le),An,He)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(qo.upload(L,Fu(Le),An,He),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Rt.setValue(L,"center",z.center),Rt.setValue(L,"modelViewMatrix",z.modelViewMatrix),Rt.setValue(L,"normalMatrix",z.normalMatrix),Rt.setValue(L,"modelMatrix",z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const an=K.uniformsGroups;for(let mn=0,Ha=an.length;mn<Ha;mn++){const ji=an[mn];Ne.update(ji,yn),Ne.bind(ji,yn)}}return yn}function am(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function lm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,B,Y){const K=Ee.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ee.get(M.texture).__webglTexture=B,Ee.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const Y=Ee.get(M);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const cm=L.createFramebuffer();this.setRenderTarget=function(M,B=0,Y=0){I=M,w=B,k=Y;let K=!0,z=null,le=!1,me=!1;if(M){const be=Ee.get(M);if(be.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(be.__webglFramebuffer===void 0)He.setupRenderTarget(M);else if(be.__hasExternalTextures)He.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ke=M.depthTexture;if(be.__boundDepthTexture!==ke){if(ke!==null&&Ee.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(me=!0);const Fe=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?z=Fe[B][Y]:z=Fe[B],le=!0):M.samples>0&&He.useMultisampledRTT(M)===!1?z=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?z=Fe[Y]:z=Fe,D.copy(M.viewport),F.copy(M.scissor),G=M.scissorTest}else D.copy(pe).multiplyScalar(H).floor(),F.copy(Be).multiplyScalar(H).floor(),G=Pe;if(Y!==0&&(z=cm),Me.bindFramebuffer(L.FRAMEBUFFER,z)&&K&&Me.drawBuffers(M,z),Me.viewport(D),Me.scissor(F),Me.setScissorTest(G),le){const be=Ee.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,Y)}else if(me){const be=B;for(let Ie=0;Ie<M.textures.length;Ie++){const Fe=Ee.get(M.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,Y,be)}}else if(M!==null&&Y!==0){const be=Ee.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,Y)}T=-1},this.readRenderTargetPixels=function(M,B,Y,K,z,le,me,we=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Me.bindFramebuffer(L.FRAMEBUFFER,be);try{const Ie=M.textures[we],Fe=Ie.format,ke=Ie.type;if(!De.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-K&&Y>=0&&Y<=M.height-z&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(B,Y,K,z,he.convert(Fe),he.convert(ke),le))}finally{const Ie=I!==null?Ee.get(I).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,B,Y,K,z,le,me,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be)if(B>=0&&B<=M.width-K&&Y>=0&&Y<=M.height-z){Me.bindFramebuffer(L.FRAMEBUFFER,be);const Ie=M.textures[we],Fe=Ie.format,ke=Ie.type;if(!De.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,le.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(B,Y,K,z,he.convert(Fe),he.convert(ke),0);const ft=I!==null?Ee.get(I).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ft);const It=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await xg(L,It,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,le),L.deleteBuffer(je),L.deleteSync(It),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,Y=0){const K=Math.pow(2,-Y),z=Math.floor(M.image.width*K),le=Math.floor(M.image.height*K),me=B!==null?B.x:0,we=B!==null?B.y:0;He.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,me,we,z,le),Me.unbindTexture()};const um=L.createFramebuffer(),dm=L.createFramebuffer();this.copyTextureToTexture=function(M,B,Y=null,K=null,z=0,le=null){le===null&&(z!==0?(Hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=z,z=0):le=0);let me,we,be,Ie,Fe,ke,je,ft,It;const Mt=M.isCompressedTexture?M.mipmaps[le]:M.image;if(Y!==null)me=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,Fe=Y.min.y,ke=Y.isBox3?Y.min.z:0;else{const Cn=Math.pow(2,-z);me=Math.floor(Mt.width*Cn),we=Math.floor(Mt.height*Cn),M.isDataArrayTexture?be=Mt.depth:M.isData3DTexture?be=Math.floor(Mt.depth*Cn):be=1,Ie=0,Fe=0,ke=0}K!==null?(je=K.x,ft=K.y,It=K.z):(je=0,ft=0,It=0);const vt=he.convert(B.format),Le=he.convert(B.type);let Ct;B.isData3DTexture?(He.setTexture3D(B,0),Ct=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(He.setTexture2DArray(B,0),Ct=L.TEXTURE_2D_ARRAY):(He.setTexture2D(B,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),yn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Es=L.getParameter(L.UNPACK_SKIP_PIXELS),bn=L.getParameter(L.UNPACK_SKIP_ROWS),pr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const Rt=M.isDataArrayTexture||M.isData3DTexture,An=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const Cn=Ee.get(M),an=Ee.get(B),mn=Ee.get(Cn.__renderTarget),Ha=Ee.get(an.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,mn.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let ji=0;ji<be;ji++)Rt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,z,ke+ji),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(B).__webglTexture,le,It+ji)),L.blitFramebuffer(Ie,Fe,me,we,je,ft,me,we,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||Ee.has(M)){const Cn=Ee.get(M),an=Ee.get(B);Me.bindFramebuffer(L.READ_FRAMEBUFFER,um),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,dm);for(let mn=0;mn<be;mn++)Rt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Cn.__webglTexture,z,ke+mn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Cn.__webglTexture,z),An?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,le,It+mn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,le),z!==0?L.blitFramebuffer(Ie,Fe,me,we,je,ft,me,we,L.COLOR_BUFFER_BIT,L.NEAREST):An?L.copyTexSubImage3D(Ct,le,je,ft,It+mn,Ie,Fe,me,we):L.copyTexSubImage2D(Ct,le,je,ft,Ie,Fe,me,we);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else An?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Ct,le,je,ft,It,me,we,be,vt,Le,Mt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,le,je,ft,It,me,we,be,vt,Mt.data):L.texSubImage3D(Ct,le,je,ft,It,me,we,be,vt,Le,Mt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,le,je,ft,me,we,vt,Le,Mt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,le,je,ft,Mt.width,Mt.height,vt,Mt.data):L.texSubImage2D(L.TEXTURE_2D,le,je,ft,me,we,vt,Le,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Es),L.pixelStorei(L.UNPACK_SKIP_ROWS,bn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pr),le===0&&B.generateMipmaps&&L.generateMipmap(Ct),Me.unbindTexture()},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&He.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?He.setTextureCube(M,0):M.isData3DTexture?He.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?He.setTexture2DArray(M,0):He.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){w=0,k=0,I=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const ti=1.2,Yt=144,Ke=62,us=12,Nt=Ke/2,zn=us,qn=Yt-us,qe=2.5,ge=qe/2,sp=4,Ia=2,SS=3,rp=3,xS=3,op=3,MS=3,ES=3,ap=5,da=1,xu=2,TS=1,lp=1,wS=2,oh=45,ah=5,AS=-3,CS=-2,RS=-1,kS=-5,PS=-5,LS=2,DS=-2,IS=5,NS=5,lh=10,US=5,OS=1,FS=1,BS=2,zS=-2,HS=-5,GS=2,VS=1,ch=2,WS=12,cp=0,$S=10,XS=5,YS=10,uh=10,qS=11,KS=5,up=[{group:0,maxCm:12,penalty:0},{group:1,maxCm:20,penalty:-2},{group:2,maxCm:28,penalty:-4},{group:3,maxCm:34,penalty:-6},{group:4,maxCm:40,penalty:-8},{group:5,maxCm:1/0,penalty:-10}];function ZS(n){for(const e of up)if(n<=e.maxCm)return e.group;return 5}function dh(n){return up[Math.max(0,Math.min(5,n))].penalty}function hh(n){return n<30?5:n<35?3:n<40?0:n<=50?-2:-5}const wl=8,ha=6,dp=6,hp=14,fa=12,pa=24,fp=24,ma=2.5*qe,Si=22.5,xi=112.5,Ko=6,JS=3,jS=2,QS=1,ex=2,tx=4,nx=10,fh=2,as=20,ix=40,ph=40,sx=10,Al=30,rx=30,ox=50,ax=5,lx=8,cx=20,ux=25,mh=50,gh=20,vh=15;function Zo(n){return n*ti}function pp(n){return n/ti}function Vs(n){return qn-Zo(n)}function dx(n){return pp(qn-n)}const Zn=10;function hx(n){const e=Ke*Zn,t=Yt*Zn,i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d"),r=c=>t-c*Zn,o=c=>c*Zn;for(let c=0;c<120;c+=5){const l=us+(c-10)*ti,u=c/5%2===0;s.fillStyle=u?"#2f7a3c":"#358a44",s.fillRect(0,r(l+5*ti),e,5*ti*Zn)}s.fillStyle=_h(n.bottomColor,.55),s.fillRect(0,r(zn),e,us*Zn),s.fillStyle=_h(n.topColor,.55),s.fillRect(0,r(Yt),e,us*Zn),s.strokeStyle="rgba(255,255,255,0.85)",s.lineWidth=2;for(let c=0;c<=100;c+=5){const l=zn+c*ti;s.beginPath(),s.moveTo(0,r(l)),s.lineTo(e,r(l)),s.stroke()}s.lineWidth=1.5,s.strokeStyle="rgba(255,255,255,0.7)";for(let c=1;c<100;c++){if(c%5===0)continue;const l=zn+c*ti;for(const u of[0,Ke*.37,Ke*.63,Ke]){s.beginPath();const h=.6*Zn,d=o(u);s.moveTo(Math.max(0,d-h),r(l)),s.lineTo(Math.min(e,d+h),r(l)),s.stroke()}}s.fillStyle="rgba(255,255,255,0.8)",s.font=`bold ${3.2*Zn}px ${getComputedStyle(document.body).fontFamily||"sans-serif"}`,s.textAlign="center",s.textBaseline="middle";for(let c=10;c<=90;c+=10){const l=c<=50?c:100-c,u=zn+c*ti;for(const h of[Ke*.2,Ke*.8])s.save(),s.translate(o(h),r(u)),s.rotate(h<Ke/2?Math.PI/2:-Math.PI/2),s.fillText(String(l),0,0),s.restore()}s.strokeStyle="#ffffff",s.lineWidth=3;for(const c of[zn,qn])s.beginPath(),s.moveTo(0,r(c)),s.lineTo(e,r(c)),s.stroke();s.fillStyle="rgba(255,255,255,0.9)",s.font=`bold ${5*Zn}px ${getComputedStyle(document.body).fontFamily||"sans-serif"}`,s.fillText(n.topName.toUpperCase(),e/2,r(Yt-us/2)),s.save(),s.translate(e/2,r(us/2)),s.rotate(Math.PI),s.fillText(n.bottomName.toUpperCase(),0,0),s.restore(),s.strokeStyle="#ffffff",s.lineWidth=4,s.strokeRect(2,2,e-4,t-4),n.boardMinY>0&&(s.fillStyle="rgba(5,8,10,0.75)",s.fillRect(0,r(n.boardMinY),e,t-r(n.boardMinY)),s.strokeStyle="rgba(255,255,255,0.5)",s.setLineDash([12,8]),s.lineWidth=3,s.beginPath(),s.moveTo(0,r(n.boardMinY)),s.lineTo(e,r(n.boardMinY)),s.stroke(),s.setLineDash([]));const a=new Hf(i);return a.colorSpace=gn,a.anisotropy=4,a}function _h(n,e){const t=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(n);if(!t)return n;const i=Math.round(parseInt(t[1],16)*e),s=Math.round(parseInt(t[2],16)*e),r=Math.round(parseInt(t[3],16)*e);return`rgb(${i},${s},${r})`}const yh=new Map;function mp(n,e={}){const t=JSON.stringify([n,e]),i=yh.get(t);if(i)return i;const s=e.width??128,r=e.height??128,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");e.bg&&(a.fillStyle=e.bg,bh(a,2,2,s-4,r-4,e.radius??18),a.fill()),e.border&&(a.strokeStyle=e.border,a.lineWidth=6,bh(a,4,4,s-8,r-8,e.radius??18),a.stroke()),a.fillStyle=e.color??"#fff",a.textAlign="center",a.textBaseline="middle";const c=getComputedStyle(document.body).fontFamily||"sans-serif",l=e.size??60;a.font=`${e.bold===!1?"":"bold "}${l}px ${c}`,e.sub?(a.fillText(n,s/2,r/2-l*.22),a.font=`${l*.5}px ${c}`,a.fillStyle=e.color??"#fff",a.globalAlpha=.85,a.fillText(e.sub,s/2,r/2+l*.45),a.globalAlpha=1):a.fillText(n,s/2,r/2);const u=new Hf(o);return u.colorSpace=gn,u.minFilter=Wn,yh.set(t,u),u}function bh(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function _i(n,e,t,i=1){const s=new Ff({map:mp(n,e),transparent:!0,depthTest:!1}),r=new Kg(s);return r.scale.set(t*i,t,1),r}function Sh(n,e,t){const i=mp(e,t),s=n.material;s.map!==i&&(s.map=i,s.needsUpdate=!0)}const en=1e-6,li=(n,e)=>({x:n.x+e.x,y:n.y+e.y}),ot=(n,e)=>({x:n.x-e.x,y:n.y-e.y}),Ui=(n,e)=>({x:n.x*e,y:n.y*e}),En=(n,e)=>n.x*e.x+n.y*e.y,fx=(n,e)=>n.x*e.y-n.y*e.x,Mu=n=>Math.hypot(n.x,n.y),at=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function Nc(n){const e=Mu(n);return e<en?{x:0,y:1}:{x:n.x/e,y:n.y/e}}function vn(n){const e=n*Math.PI/180;return{x:Math.sin(e),y:Math.cos(e)}}function Tn(n){if(Mu(n)<en)return 0;let e=Math.atan2(n.x,n.y)*180/Math.PI;return e<=-180&&(e+=360),e}function px(n,e){let t=e-n;for(;t>180;)t-=360;for(;t<=-180;)t+=360;return t}function mx(n,e){const t=e*Math.PI/180,i=Math.cos(t),s=Math.sin(t);return{x:n.x*i-n.y*s,y:n.x*s+n.y*i}}function gx(n,e,t){return li(e,mx(ot(n,e),t))}function Cl(n,e,t){return{x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t}}function or(n,e,t){return n<e?e:n>t?t:n}function Rl(n,e,t,i){const s=ot(e,n),r=ot(n,t),o=En(s,s),a=2*En(r,s),c=En(r,r)-i*i;if(c<=en)return 0;if(o<en)return null;const l=a*a-4*o*c;if(l<0)return null;const u=(-a-Math.sqrt(l))/(2*o);return u<-en||u>1+en?null:or(u,0,1)}function xh(n,e,t){return fx(ot(e,n),ot(t,n))}const kn=n=>n==="home"?"away":"home",ai=4,fr=2;function gp(){return{movedCm:0,moved:!1,stranded:!1,speedPenalty:0,halved:!1,noMove:!1,noAction:!1,contestModifier:0,rushPerfect:!1,clutchEligible:!1,tackled:!1,engagedThisSlice:!1,disengagedFrom:[],brokeThrough:!1,declinedJump:!1}}const Mh={lineupOffense:"Offense lines up",lineupDefense:"Defense lines up",markers:"Markers",defenseReveal:"1. Defense reveals",offenseReveal:"2. Offense reveals",freeBlockers:"3. Free blockers",resolveBlocks:"4. Blocking",ballCarrier:"5. Ball carrier",defenders:"6. Blitzers & free defenders",receivers:"7. Receivers & man coverage",zones:"8. Spies & zones",pass:"9. Pass",looseBall:"Loose ball",over:"Play over"};class kl extends Error{}function Na(n){switch(n){case"QB":return["read","handoff","filler"];case"RB":case"FB":return["run","dir","continue","delay","cut","passblock","runblock","filler"];case"WR":case"TE":return["dir","continue","delay","cut","passblock","runblock","filler"];case"OL":return["passblock","runblock","filler"];default:return["man","zone","spy","blitz","filler"]}}function xt(n,e){const t=n?n.slice(0,e):[];for(;t.length<e;)t.push({t:"filler"});return t}function Ss(n){switch(n.t){case"filler":return"Filler";case"read":return"Read";case"handoff":return"Hand off";case"run":return`${n.lane==="dive"?"Dive":n.lane==="offtackle"?"Off tackle":"Sprint"} ${n.side}`;case"passblock":return"Pass block";case"runblock":return"Run block";case"dir":return n.dir==="up"?"Up":`${n.dir==="left"?"Left":"Right"} ${n.angle}°`;case"continue":return"Continue";case"delay":return"Delay";case"cut":return`Cut ${n.cut}`;case"man":return"Man";case"zone":return n.zone==="flat"||n.zone==="curl"?`Zone ${n.zone} ${n.side}`:`Zone ${n.zone}`;case"spy":return"Spy";case"blitz":return"Blitz"}}function Eu(n,e,t){const i=[],s=n==="offense"?ai:fr,r=new Set(e.map(l=>l.id));for(const l of Object.keys(t))r.has(l)||i.push({player:l,slot:null,text:`${l} is not on the field.`,severity:"error"});const o=[],a=[],c=e.filter(l=>l.position==="QB");for(const l of e){const u=xt(t[l.id],s);(t[l.id]?.length??0)>s&&i.push({player:l.id,slot:null,text:`${l.name} may have at most ${s} markers.`,severity:"error"});const h=Na(l.position);let d=!1,f=!1,g=!1,_=!1,v=!1,p=!1;for(let b=0;b<u.length;b++){const S=u[b],x=b+1,A=w=>i.push({player:l.id,slot:b,text:`${l.name}, timeslice ${x}: ${w}`,severity:"error"});if(!h.includes(S.t)){A(`a ${l.position} cannot use the ${Ss(S)} marker.`);continue}if(d&&S.t!=="filler"&&A("once a filler marker is placed every later marker must be a filler."),S.t==="filler"){d=!0;continue}switch(g&&S.t!=="runblock"&&A("after a cut only filler or run block markers may follow."),S.t){case"handoff":x>2&&A("hand-off markers must be in one of the first two timeslices."),a.some(w=>w.id===l.id)&&A("only one hand-off marker per play."),(!r.has(S.target)||S.target===l.id)&&A("the hand-off target must be a team mate on the field."),a.push({id:l.id,target:S.target,slice:x});break;case"read":(!r.has(S.target)||S.target===l.id)&&A("the read target must be a team mate on the field.");break;case"run":x>2&&A("running markers may only be placed in timeslice 1 (run) or 2 (draw)."),_&&A("only one running marker per play."),_=!0,v=!0,o.push({id:l.id,slice:x});break;case"dir":{f&&A("a receiver may have only one direction marker."),u.slice(0,b).every(k=>k.t==="delay")||A("direction markers go in timeslice 1 (or right after delay markers)."),S.dir!=="up"&&!(S.angle>5&&S.angle<180)&&A("a left or right direction needs an angle between 5 and 180 degrees."),f=!0,v=!0;break}case"continue":v||A("continue needs an earlier direction to continue in.");break;case"delay":break;case"cut":g&&A("a receiver may only cut once on a play."),g=!0;break;case"passblock":case"runblock":break;case"man":p&&A("a defender may not have two man coverage markers."),p=!0;break}}}if(n==="offense"){o.length>1&&i.push({player:null,slot:null,text:"Only one player can have running markers on a given play.",severity:"error"});const l=c[0];if(l){const u=xt(t[l.id],s);for(const d of a)o.find(g=>g.id===d.target&&g.slice===d.slice)||i.push({player:l.id,slot:d.slice-1,text:`The hand-off in timeslice ${d.slice} has no matching running marker on the target: that is an automatic fumble.`,severity:"warning"});for(const d of o)a.find(g=>g.target===d.id&&g.slice===d.slice)||i.push({player:d.id,slot:d.slice-1,text:`The running marker in timeslice ${d.slice} has no matching hand-off from the QB: that is an automatic fumble.`,severity:"warning"});a.find(d=>d.slice===1)&&u[1].t!=="filler"&&i.push({player:l.id,slot:1,text:"A read marker after a hand-off in timeslice 1 makes this a play-action fake.",severity:"warning"})}}return i}function vx(n){return n.some(e=>e.severity==="error")}const Ge={field:0,zone:.2,link:.4,ring:.5,trail:.6,chip:.7,token:1,label:1.2,overlay:2,ghost:1.5},_x={option:15909198,target:5223423,danger:15688801,engageable:5816957,designated:16098596,selected:16777215,muted:3355443,hover:16777215};class vp{renderer;scene=new Yg;camera;fieldMesh;fieldKey="";tokens=new Map;overlay=new Ln;links=new Ln;zonesGroup=new Ln;ghostGroup=new Ln;routesGroup=new Ln;ghostMeshes=new Map;losLine;ltgLine;raycaster=new Ov;pointer=new ve;canvas;handlers;view=null;ui={selected:null,highlights:{}};defs=new Map;teamColors={offense:{primary:"#1f6feb",secondary:"#fff"},defense:{primary:"#c0392b",secondary:"#fff"}};dragging=null;panning=null;downAt=null;raf=0;disposed=!1;ballFlight=null;hoverGhost=null;constructor(e,t){this.canvas=e,this.handlers=t,this.renderer=new bS({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.renderer.setClearColor(724754),this.camera=new jf(-10,10,10,-10,.1,100),this.camera.position.set(Ke/2,Yt/2,50),this.camera.up.set(0,1,0),this.camera.lookAt(Ke/2,Yt/2,0),this.camera.zoom=1;const i=new si(Ke,Yt);this.fieldMesh=new nt(i,new St({color:3111484})),this.fieldMesh.position.set(Ke/2,Yt/2,Ge.field),this.fieldMesh.name="field",this.scene.add(this.fieldMesh),this.losLine=this.makeLine(5223423,.9),this.ltgLine=this.makeLine(15909198,.9),this.scene.add(this.losLine,this.ltgLine,this.zonesGroup,this.routesGroup,this.links,this.overlay,this.ghostGroup),this.bindEvents(),this.resize(),this.fitField();const s=()=>{this.disposed||(this.animate(),this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(s))};this.raf=requestAnimationFrame(s),new ResizeObserver(()=>this.resize()).observe(e.parentElement??e)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.dispose()}resize(){const e=this.canvas.parentElement??this.canvas,t=Math.max(1,e.clientWidth),i=Math.max(1,e.clientHeight);this.renderer.setSize(t,i,!1);const s=t/i,r=10;this.camera.left=-r*s,this.camera.right=r*s,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix()}fitRegion(e,t,i,s,r=2){const o=i-e+r*2,a=s-t+r*2,c=this.camera.right-this.camera.left,l=this.camera.top-this.camera.bottom;this.camera.zoom=Math.min(c/o,l/a),this.camera.position.x=(e+i)/2,this.camera.position.y=(t+s)/2,this.camera.updateProjectionMatrix()}fitField(){const e=this.view?.play?.boardMinY??0;this.fitRegion(0,e,Ke,Yt,1)}fitPlay(){const e=this.view?.play;if(!e)return this.fitField();const t=Object.values(e.players);if(t.length===0){this.fitRegion(0,e.los-20,Ke,e.los+30,1);return}let i=1/0,s=-1/0;for(const r of t)i=Math.min(i,r.pos.y),s=Math.max(s,r.pos.y);i=Math.min(i,e.los-12),s=Math.max(s,e.los+28),this.fitRegion(0,i,Ke,s,2)}focusBall(){const e=this.view?.play;if(!e)return;const t=e.ball.carrier,i=t?e.players[t]:null,s=e.ball.loose??i?.pos??{x:Ke/2,y:e.los};this.camera.position.x=s.x,this.camera.position.y=s.y,this.camera.updateProjectionMatrix()}zoomBy(e,t){const i=t?this.toWorld(t.x,t.y):null;if(this.camera.zoom=Math.max(.3,Math.min(12,this.camera.zoom*e)),this.camera.updateProjectionMatrix(),i&&t){const s=this.toWorld(t.x,t.y);this.camera.position.x+=i.x-s.x,this.camera.position.y+=i.y-s.y,this.camera.updateProjectionMatrix()}}toScreen(e){const t=this.canvas.getBoundingClientRect(),i=new O(e.x,e.y,0).project(this.camera);return{x:t.left+(i.x+1)/2*t.width,y:t.top+(1-i.y)/2*t.height}}toWorld(e,t){const i=this.canvas.getBoundingClientRect(),s=(e-i.left)/i.width*2-1,r=-((t-i.top)/i.height)*2+1,o=new O(s,r,0).unproject(this.camera);return{x:o.x,y:o.y}}bindEvents(){const e=this.canvas;e.addEventListener("contextmenu",i=>i.preventDefault()),e.addEventListener("wheel",i=>{i.preventDefault(),this.zoomBy(i.deltaY<0?1.15:1/1.15,{x:i.clientX,y:i.clientY})},{passive:!1}),e.addEventListener("pointerdown",i=>{e.setPointerCapture(i.pointerId),this.downAt={x:i.clientX,y:i.clientY,t:performance.now()};const s=this.pick(i.clientX,i.clientY);if(i.button===0&&s.player&&this.ui.draggable?.has(s.player)){this.dragging={id:s.player};return}(i.button===1||i.button===2||i.button===0&&!s.player&&!s.ghost)&&(this.panning={x:i.clientX,y:i.clientY,cx:this.camera.position.x,cy:this.camera.position.y})}),e.addEventListener("pointermove",i=>{if(this.dragging){const r=this.toWorld(i.clientX,i.clientY);this.handlers.onDrag(this.dragging.id,r,!1);return}if(this.panning){const r=e.getBoundingClientRect(),o=(this.camera.right-this.camera.left)/this.camera.zoom,a=(this.camera.top-this.camera.bottom)/this.camera.zoom,c=(i.clientX-this.panning.x)/r.width*o,l=(i.clientY-this.panning.y)/r.height*a;this.camera.position.x=this.panning.cx-c,this.camera.position.y=this.panning.cy+l,this.camera.updateProjectionMatrix();return}const s=this.pick(i.clientX,i.clientY);this.hoverGhost=s.ghost,this.handlers.onHover(s.field,s.player,s.ghost)});const t=i=>{const s=this.dragging;if(this.panning,this.dragging=null,this.panning=null,s){const c=this.toWorld(i.clientX,i.clientY);this.handlers.onDrag(s.id,c,!0);return}const r=this.downAt;if(this.downAt=null,!r||Math.hypot(i.clientX-r.x,i.clientY-r.y)>4||i.button!==0)return;const a=this.pick(i.clientX,i.clientY);a.ghost?this.handlers.onClickGhost(a.ghost):a.player?this.handlers.onClickPlayer(a.player,i,a.field):a.field&&this.handlers.onClickField(a.field,i)};e.addEventListener("pointerup",t),e.addEventListener("pointerleave",()=>{this.handlers.onHover(null,null,null)}),e.addEventListener("dblclick",()=>this.fitPlay())}pick(e,t){const i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const s=[...this.ghostMeshes.values()],r=this.raycaster.intersectObjects(s,!0)[0];if(r){let u=r.object;for(;u&&!u.userData.ghostKey;)u=u.parent;if(u)return{player:null,field:null,ghost:u.userData.ghostKey}}const o=this.raycaster.intersectObjects([...this.tokens.values()].map(u=>u.hit),!1),a=o.length?o[0].object.userData.id:null,c=this.raycaster.intersectObject(this.fieldMesh,!1)[0],l=c?{x:c.point.x,y:c.point.y}:null;return{player:a,field:l,ghost:null}}setTeams(e,t){this.defs=new Map(e.map(i=>[i.id,i])),this.teamColors=t}setView(e,t,i={}){const s=!this.view?.play&&!!e.play,r=this.view?.play&&e.play&&(this.view.play.los!==e.play.los||this.view.play.offense!==e.play.offense||Object.keys(this.view.play.players).length===0);this.view=e,this.ui=t,this.updateField(),this.updateTokens(),this.updateLinks(),this.updateOverlay(),this.updateRoutes(),this.updateGhosts(),i.pass&&this.flyBall(i.pass.from,i.pass.to),(s||r)&&this.fitPlay()}setUi(e){this.ui=e,this.view&&(this.updateTokens(),this.updateLinks(),this.updateOverlay(),this.updateRoutes(),this.updateGhosts())}updateField(){const e=this.view,t=e.play,i=t?.offense??e.possession,s=i==="home"?"away":"home",r=t?.boardMinY??0,o=`${i}|${r}`;if(o!==this.fieldKey){this.fieldKey=o;const a=e.config.teams[i],c=e.config.teams[s],l=hx({bottomName:a.name,bottomColor:a.colors.primary,topName:c.name,topColor:c.colors.primary,boardMinY:r}),u=this.fieldMesh.material;u.map?.dispose(),u.map=l,u.color.set(16777215),u.needsUpdate=!0}t?(this.setLine(this.losLine,t.los),this.losLine.visible=!0,t.lineToGainY!==null?(this.setLine(this.ltgLine,t.lineToGainY),this.ltgLine.visible=!0):this.ltgLine.visible=!1):(this.losLine.visible=!1,this.ltgLine.visible=!1)}makeLine(e,t){const i=new si(Ke,.3),s=new St({color:e,transparent:!0,opacity:t}),r=new nt(i,s);return r.position.set(Ke/2,0,Ge.ring),r}setLine(e,t){e.position.y=t}tokenColors(e){const t=this.teamColors[e];return{primary:new et(t.primary).getHex(),secondary:new et(t.secondary).getHex()}}makeToken(e,t){const i=new Ln,s=this.tokenColors(t),r=new nt(new Pn(ge,40),new St({color:s.primary}));r.position.z=Ge.token;const o=new nt(new Qn(ge,ge+.28,48),new St({color:s.secondary,transparent:!0,opacity:.9}));o.position.z=Ge.token+.01;const a=this.defs.get(e),c=_i(String(a?.number??"?"),{color:"#fff",size:64,sub:a?.position??""},2.2);c.position.z=Ge.label;const l=new nt(new si(.35,.9),new St({color:s.secondary,transparent:!0,opacity:.9}));l.position.set(0,ge-.3,Ge.token+.02);const u=new nt(new Pn(.42,16),new St({color:9127187}));u.scale.set(1.5,1,1),u.position.set(.9,-.9,Ge.label+.1),u.visible=!1;const h=_i("",{color:"#fff",size:50},1.6);h.position.set(0,1.9,Ge.label+.2),h.visible=!1;const d=new nt(new Pn(ge+.4,16),new St({visible:!1}));return d.userData.id=e,d.position.z=Ge.label+.5,i.add(r,o,c,l,u,h,d),this.scene.add(i),{group:i,base:r,ring:o,label:c,facing:l,ball:u,status:h,hit:d,target:new O,side:t,markerSprites:[]}}updateTokens(){const t=this.view.play,i=new Map;if(t)for(const r of Object.values(t.players))i.set(r.id,{side:r.side,pos:r.pos,f:r});for(const r of this.ui.extraTokens??[])i.has(r.id)||i.set(r.id,{side:r.side,pos:r.pos,f:null});for(const[r,o]of this.tokens)i.has(r)||(this.scene.remove(o.group),this.tokens.delete(r));const s=t?.ball.carrier??null;for(const[r,o]of i){let a=this.tokens.get(r);(!a||a.side!==o.side)&&(a&&this.scene.remove(a.group),a=this.makeToken(r,o.side),this.tokens.set(r,a),a.group.position.set(o.pos.x,o.pos.y,0));const c=this.ui.positions?.[r]??o.pos;a.target.set(c.x,c.y,0),this.ui.positions?.[r]&&a.group.position.set(c.x,c.y,0);const l=o.f,u=!!l&&l.pancakedSlice!==null;if(a.base.material.color.setHex(this.tokenColors(o.side).primary),a.base.material.opacity=u?.45:1,a.base.material.transparent=u,a.label.material.opacity=u?.5:1,a.facing.visible=!u,l){const _=vn(l.facing);a.facing.position.set(_.x*(ge-.3),_.y*(ge-.3),Ge.token+.02),a.facing.rotation.z=-(l.facing*Math.PI)/180}a.ball.visible=r===s;const h=this.ui.highlights[r]??(r===this.ui.selected?"selected":null),d=a.ring.material;h?(d.color.setHex(_x[h]),a.ring.scale.setScalar(h==="selected"||h==="hover"?1.18:1.12),d.opacity=1):(d.color.setHex(this.tokenColors(o.side).secondary),a.ring.scale.setScalar(1),d.opacity=.9);let f="",g="#333";l&&(l.pancakedSlice!==null?(f="DOWN",g="#5a1e1e"):l.s.noAction?(f="UP",g="#4a3a14"):l.s.stranded?(f="STUCK",g="#4a3a14"):l.draggedBy.length>0?(f="DRAG",g="#4a3a14"):t&&l.sidelineSlice!==null&&l.sidelineSlice===t.slice&&(f="SIDELINE",g="#2a3a4a")),f?(Sh(a.status,f,{color:"#fff",size:40,bg:g,width:256,height:96,radius:30}),a.status.scale.set(3.2,1.2,1),a.status.visible=!0):a.status.visible=!1,this.updateMarkerSprites(a,r,o.side)}}updateMarkerSprites(e,t,i){const s=this.view?.play,r=this.ui.markerOverride?.[t]??s?.markers[t],o=r?r.length:0;for(;e.markerSprites.length>o;){const l=e.markerSprites.pop();e.group.remove(l)}for(;e.markerSprites.length<o;){const l=_i("",{color:"#fff",size:40,bg:"#222",width:256,height:96,radius:24},.85,2.6);l.position.z=Ge.chip,e.group.add(l),e.markerSprites.push(l)}if(!r)return;const a=i==="offense"?-1:1,c=s?i==="offense"?s.revealed.offense:s.revealed.defense:0;r.forEach((l,u)=>{const h=e.markerSprites[u],d=l.t==="hidden",f=d?"?":Sx(l,this.defs),g=s&&s.slice===u+1&&s.slice>0,_=d?"#2a2a2a":xx(l);Sh(h,f,{color:d?"#777":"#fff",size:40,bg:_,width:256,height:96,radius:24,border:g?"#f2c14e":null});const v=s?u+1<s.slice&&u+1<=c:!1;h.material.opacity=v?.4:.9,h.position.set(0,a*(ge+.75+u*.95),Ge.chip)})}updateLinks(){const t=this.view.play;if(Fo(this.links),!!t){for(const i of t.engagements){const s=t.players[i.defender];if(!s)continue;for(const c of i.blockers){const l=t.players[c];if(!l)continue;const u=yi(l.pos,s.pos,16777215,.35,Ge.link);this.links.add(u)}const r=t.players[i.blockers[0]];if(!r)continue;const o={x:(r.pos.x+s.pos.x)/2,y:(r.pos.y+s.pos.y)/2},a=_i(String(i.dominance),{color:i.dominance>=5?"#ffd98a":"#fff",size:60,bg:i.dominance>=10?"#7a2020":i.dominance>=5?"#5a3a10":"#1b2a35",border:"#dfe7ee"},1.3);a.position.set(o.x,o.y,Ge.label+.6),this.links.add(a)}for(const[i,s]of Object.entries(t.designations)){const r=t.players[i],o=t.players[s];!r||!o||this.links.add(yi(r.pos,o.pos,16098596,.6,Ge.link,!0))}for(const[i,s]of Object.entries(t.assignments)){if(s.t!=="man")continue;const r=t.players[i],o=t.players[s.target];if(!r||!o)continue;const a=t.players[i];a.freeSince!==null&&a.freeSince<=t.slice||this.links.add(yi(r.pos,o.pos,11566335,.5,Ge.link,!0))}if(this.ui.showTrails!==!1)for(const[i,s]of Object.entries(t.trails)){if(s.length<2)continue;const o=t.players[i]?.side==="offense"?10474751:16757681,a=new on().setFromPoints(s.map(c=>new O(c.x,c.y,Ge.trail)));this.links.add(new ua(a,new js({color:o,transparent:!0,opacity:.5})))}if(t.ball.loose){const i=new nt(new Pn(.5,16),new St({color:9127187}));i.scale.set(1.5,1,1),i.position.set(t.ball.loose.x,t.ball.loose.y,Ge.label),this.links.add(i);const s=new nt(new Qn(5+ge-.06,5+ge+.06,64),new St({color:16767370,transparent:!0,opacity:.5}));s.position.set(t.ball.loose.x,t.ball.loose.y,Ge.ring),this.links.add(s)}}}updateOverlay(){Fo(this.overlay),Fo(this.zonesGroup);const e=this.view?.play;for(const r of this.ui.zones??[]){const o=r.rect.x1-r.rect.x0,a=r.rect.y1-r.rect.y0,c=Mx(r.zone),l=new nt(new si(o,a),new St({color:c,transparent:!0,opacity:.16}));l.position.set(r.rect.x0+o/2,r.rect.y0+a/2,Ge.zone),this.zonesGroup.add(l);const u=new Qg(new ev(new si(o,a)),new js({color:c,transparent:!0,opacity:.6}));u.position.copy(l.position),this.zonesGroup.add(u);const h=_i(r.label.toUpperCase(),{color:"#fff",size:36,bg:"rgba(0,0,0,0.35)",width:512,height:96,radius:24},1.6,5.3);h.position.set(r.rect.x0+o/2,r.rect.y1-1.3,Ge.zone+.1),this.zonesGroup.add(h)}for(const r of this.ui.rings??[]){const a=e?.players[r.id]?.pos??this.ui.positions?.[r.id];if(!a)continue;const c=new nt(new Qn(r.radius-.05,r.radius+.05,64),new St({color:new et(r.color),transparent:!0,opacity:r.dashed?.35:.6}));c.position.set(a.x,a.y,Ge.ring),this.overlay.add(c)}const t=this.ui.mover;if(t&&e){const r=e.players[t.id];if(r){const o=Math.max(.01,t.spec.allowance),a=new nt(new Pn(o,64),new St({color:15909198,transparent:!0,opacity:.1}));a.position.set(r.pos.x,r.pos.y,Ge.ring);const c=new nt(new Qn(o-.06,o+.06,64),new St({color:15909198,transparent:!0,opacity:.8}));c.position.set(r.pos.x,r.pos.y,Ge.ring+.01),this.overlay.add(a,c);const l=t.spec.mode;if(l.t==="fixed"){const u=vn(l.angle);this.overlay.add(yi(r.pos,{x:r.pos.x+u.x*o,y:r.pos.y+u.y*o},15909198,.9,Ge.ring+.02))}else if(l.t==="along"){const u=vn(l.angle);this.overlay.add(yi({x:r.pos.x-u.x*o,y:r.pos.y-u.y*o},{x:r.pos.x+u.x*o,y:r.pos.y+u.y*o},15909198,.9,Ge.ring+.02))}else if(l.t==="sector"){const u=((l.to-l.from)%360+360)%360||360,h=Math.max(2,Math.ceil(u/6)),d=[new O(r.pos.x,r.pos.y,Ge.ring+.02)];for(let _=0;_<=h;_++){const v=l.from+u*_/h,p=vn(v);d.push(new O(r.pos.x+p.x*o,r.pos.y+p.y*o,Ge.ring+.02))}d.push(d[0].clone());const f=new bu(d.map(_=>new ve(_.x,_.y))),g=new nt(new La(f),new St({color:15909198,transparent:!0,opacity:.18}));g.position.z=Ge.ring+.015,this.overlay.add(g),this.overlay.add(new ua(new on().setFromPoints(d),new js({color:15909198,transparent:!0,opacity:.8})))}}}const i=this.ui.preview;if(i){const r=i.ok?16777215:15688801;this.overlay.add(yi(i.from,i.to,r,.95,Ge.overlay));const o=new nt(new Qn(ge-.08,ge+.08,48),new St({color:r,transparent:!0,opacity:.9}));o.position.set(i.to.x,i.to.y,Ge.overlay),this.overlay.add(o);for(const a of i.marks){const c=a.kind==="hole"?16098596:a.kind==="jump"||a.kind==="clutch"?15688801:a.kind==="engage"?5816957:16777215,l=new nt(new Pn(.45,16),new St({color:c}));l.position.set(a.at.x,a.at.y,Ge.overlay+.05),this.overlay.add(l);const u=a.kind==="hole"?"HOLE":a.kind==="jump"?"JUMP":a.kind==="clutch"?"CLUTCH":a.kind==="engage"?"BLOCK":a.kind==="carrier"?"TACKLE":"STOP",h=_i(u,{color:"#fff",size:40,bg:"rgba(0,0,0,0.6)",width:256,height:96,radius:24},1.1,2.6);h.position.set(a.at.x+1.9,a.at.y+1.1,Ge.overlay+.1),this.overlay.add(h)}}const s=this.ui.passLine;s&&this.overlay.add(yi(s.from,s.to,10474751,.95,Ge.overlay,!0))}updateRoutes(){Fo(this.routesGroup);const e=this.ui.routes??[];for(const t of e){if(t.points.length<2)continue;const i=new et(t.color),s=t.dim?.28:.95,r=Ge.trail+(t.dim?0:.05),o=t.dim?.3:.45;this.routesGroup.add(Eh(t.points,o+.22,0,s*.45,r-.01)),this.routesGroup.add(Eh(t.points,o,i.getHex(),s,r));for(let d=1;d<t.points.length;d++){const f=t.points[d],g=new nt(new Qn(.28,.5,20),new St({color:0,transparent:!0,opacity:s*.6}));g.position.set(f.x,f.y,r+.01),this.routesGroup.add(g);const _=new nt(new Pn(.28,20),new St({color:i.getHex(),transparent:!0,opacity:s}));_.position.set(f.x,f.y,r+.02),this.routesGroup.add(_)}if(t.cutAt){const d=new nt(new Qn(.55,.85,24),new St({color:16777215,transparent:!0,opacity:s}));d.position.set(t.cutAt.x,t.cutAt.y,r+.03),this.routesGroup.add(d)}const a=t.points[t.points.length-1];let l=t.points[t.points.length-2],u=a;if(t.tail&&!t.sideline){const d=yi(a,t.tail,i.getHex(),s*.7,r,!0);this.routesGroup.add(d),l=a,u=t.tail}const h=yx(l,u,t.dim?.9:1.3,i.getHex(),s,r+.02);if(h&&this.routesGroup.add(h),t.sideline){const d=_i("SIDELINE",{color:"#fff",size:40,bg:"rgba(0,0,0,0.6)",width:320,height:96,radius:24},1.1,3.3);d.position.set(a.x<Ke/2?a.x+2.4:a.x-2.4,a.y-1.7,r+.1),this.routesGroup.add(d)}if(t.label&&!t.dim){const f=64+Math.max(4,t.label.length)*30,g=f/96,_=1.25,v=u.x<7||u.x>Ke-7,p=(u.x<Ke/2?-1:1)*(v?-1:1),b=Math.max(_*g*.5+.5,Math.min(Ke-_*g*.5-.5,u.x+p*(_*g*.5+.9))),S=_i(t.label,{color:"#fff",size:46,bg:bx(t.color,.22),border:t.color,width:f,height:96,radius:28},_,g);S.position.set(b,u.y+.2,Ge.label+.3),this.routesGroup.add(S),this.routesGroup.add(yi({x:b-p*_*g*.5,y:u.y+.2},u,i.getHex(),s*.8,r+.01))}}}updateGhosts(){const e=new Map((this.ui.ghosts??[]).map(t=>[t.key,t]));for(const[t,i]of this.ghostMeshes)e.has(t)||(this.ghostGroup.remove(i),this.ghostMeshes.delete(t));for(const[t,i]of e){let s=this.ghostMeshes.get(t);if(!s){const o=new Ln;o.userData.ghostKey=t;const a=new nt(new Pn(ge,32),new St({color:new et(i.color??"#ffffff"),transparent:!0,opacity:.35}));a.position.z=Ge.ghost;const c=new nt(new Qn(ge-.08,ge+.08,32),new St({color:new et(i.color??"#ffffff"),transparent:!0,opacity:.9}));if(c.position.z=Ge.ghost+.01,o.add(a,c),i.label){const l=_i(i.label,{color:"#fff",size:56},1.6);l.position.z=Ge.ghost+.1,o.add(l)}this.ghostGroup.add(o),this.ghostMeshes.set(t,o),s=o}s.position.set(i.pos.x,i.pos.y,0);const r=this.hoverGhost===t;s.scale.setScalar(r?1.15:1)}}flyBall(e,t){this.ballFlight&&this.scene.remove(this.ballFlight.mesh);const i=new nt(new Pn(.55,16),new St({color:9127187}));i.scale.set(1.5,1,1),this.scene.add(i);const s=Math.hypot(t.x-e.x,t.y-e.y);this.ballFlight={from:new O(e.x,e.y,Ge.overlay+1),to:new O(t.x,t.y,Ge.overlay+1),t0:performance.now(),dur:350+s*18,mesh:i}}animate(){const e=performance.now();for(const i of this.tokens.values()){const s=i.group.position,r=i.target,o=r.x-s.x,a=r.y-s.y;if(Math.abs(o)+Math.abs(a)<.002){s.x=r.x,s.y=r.y;continue}s.x+=o*.16,s.y+=a*.16}const t=this.ballFlight;if(t){const i=Math.min(1,(e-t.t0)/t.dur),s=t.from.clone().lerp(t.to,i);t.mesh.position.copy(s);const r=1+Math.sin(Math.PI*i)*1.4;t.mesh.scale.set(1.5*r,r,1),i>=1&&(this.scene.remove(t.mesh),this.ballFlight=null)}}}function Eh(n,e,t,i,s){const r=new Ln,o=new St({color:t,transparent:!0,opacity:i,depthWrite:!1});for(let a=1;a<n.length;a++){const c=n[a-1],l=n[a],u=Math.hypot(l.x-c.x,l.y-c.y);if(u<1e-6)continue;const h=new nt(new si(u,e),o);if(h.position.set((c.x+l.x)/2,(c.y+l.y)/2,s),h.rotation.z=Math.atan2(l.y-c.y,l.x-c.x),r.add(h),a<n.length-1){const d=new nt(new Pn(e/2,16),o);d.position.set(l.x,l.y,s),r.add(d)}}return r}function yx(n,e,t,i,s,r){const o=e.x-n.x,a=e.y-n.y,c=Math.hypot(o,a);if(c<1e-6)return null;const l=o/c,u=a/c,h=-u,d=l,f=new bu([new ve(e.x+l*t*.9,e.y+u*t*.9),new ve(e.x-l*t*.5+h*t*.6,e.y-u*t*.5+d*t*.6),new ve(e.x-l*t*.5-h*t*.6,e.y-u*t*.5-d*t*.6)]),g=new nt(new La(f),new St({color:i,transparent:!0,opacity:s,depthWrite:!1}));return g.position.z=r,g}function bx(n,e){const t=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(n);return t?"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+","+e+")":"rgba(0,0,0,"+e+")"}function Fo(n){for(;n.children.length;){const e=n.children.pop();n.remove(e)}}function yi(n,e,t,i,s,r=!1){const o=new on().setFromPoints([new O(n.x,n.y,s),new O(e.x,e.y,s)]),a=r?new Nv({color:t,transparent:!0,opacity:i,dashSize:.6,gapSize:.4}):new js({color:t,transparent:!0,opacity:i}),c=new ua(o,a);return r&&c.computeLineDistances(),c}function Sx(n,e){switch(n.t){case"filler":return"—";case"read":return`READ ${e.get(n.target)?.number??"?"}`;case"handoff":return`HAND ${e.get(n.target)?.number??"?"}`;case"run":return`${n.lane==="dive"?"DIVE":n.lane==="offtackle"?"OFF-T":"SPRINT"} ${n.side==="left"?"L":"R"}`;case"passblock":return"PASS BLK";case"runblock":return"RUN BLK";case"dir":return n.dir==="up"?"UP":`${n.dir==="left"?"L":"R"} ${n.angle}°`;case"continue":return"CONT";case"delay":return"DELAY";case"cut":return`CUT ${n.cut.toUpperCase()}`;case"man":return"MAN";case"zone":return n.zone==="flat"||n.zone==="curl"?`${n.zone.toUpperCase()} ${n.side==="left"?"L":"R"}`:n.zone.toUpperCase();case"spy":return"SPY";case"blitz":return"BLITZ"}}function xx(n){switch(n.t){case"filler":return"#2a2f35";case"read":case"handoff":return"#1f4a73";case"run":return"#7a4a12";case"passblock":case"runblock":return"#3d4147";case"dir":case"continue":case"delay":return"#245a35";case"cut":return"#7a2a2a";case"man":return"#4a2a7a";case"zone":return"#1f5a6a";case"spy":return"#5a5a1a";case"blitz":return"#7a1f1f"}}function Mx(n){switch(n.zone){case"flat":return 5230847;case"curl":return 11566335;case"hook":return 15917390;case"deep":return 5209087}}class Ex{s;constructor(e){this.s=e>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}die(e){return 1+Math.floor(this.next()*e)}}function Pl(n,e){return n===1?!0:n===20?!1:n<=e}function Uc(n,e,t,i=0){const s=t+i,r=n.die(20),o={skill:e,base:t,modifier:i,target:s,roll:r,success:Pl(r,s),successRate:0,rawRate:s-r,perfect:!1,critical:!1};return r===1?(o.confirm=n.die(20),o.perfect=Pl(o.confirm,s)):r===20&&(o.confirm=n.die(20),o.critical=!Pl(o.confirm,s)),o.successRate=o.success?Math.max(0,s-r):0,o}function Oc(n){const e=n.modifier===0?"":n.modifier>0?` +${n.modifier}`:` ${n.modifier}`,t=n.perfect?" PERFECT":n.critical?" CRITICAL FAILURE":n.success?` SR ${n.successRate}`:" fail",i=n.confirm!==void 0?` (confirm ${n.confirm})`:"";return`${n.skill} ${n.base}${e} = ${n.target}: rolled ${n.roll}${i}${t}`}const _p={quick:"Quick (breaks within 5 yards)",intermediate:"Intermediate (breaks at 10-12 yards)",deep:"Deep",double:"Double moves",backfield:"Backfield (backs and tight ends)",delayed:"Delayed"},kt={t:"up"},yt={t:"continue"},Ws={t:"delay"},Ve=n=>({t:"cut",cut:n}),Jn=(n,e)=>({t:"angle",toward:n,angle:e}),We=(n,e)=>({toward:n,angle:e});function $e(n,e,t,i,s,r,o){return o===void 0?{id:n,name:e,group:t,steps:i,break:s,note:r}:{id:n,name:e,tree:o,group:t,steps:i,break:s,note:r}}const Ua=[$e("slant","Slant","quick",[kt,Ve("in")],We("in",45),"Three steps upfield, then break inside at 45 degrees.",2),$e("quick-slant","Quick slant","quick",[Ve("in")],We("in",45),"Break inside at the snap.",2),$e("flat","Flat","quick",[Ve("out")],We("out",80),"Run to the flat at the snap, almost parallel to the line.",1),$e("arrow","Arrow (speed out)","quick",[kt,Ve("out")],We("out",85),"Three steps, then straight to the sideline.",1),$e("hitch","Hitch","quick",[kt,yt,Ve("hook")],We("in",170),"Five yards, then turn back to the quarterback.",0),$e("stick","Stick","quick",[kt,Ve("out")],We("out",100),"A tight end's hitch: three steps, then turn outside and sit down.",3),$e("drag","Drag (shallow cross)","quick",[Ve("in")],We("in",80),"Cross the field just beyond the line at the snap.",4),$e("shallow","Shallow","quick",[kt,Ve("in")],We("in",80),"A step upfield, then across the field under the linebackers.",4),$e("quick-out","Quick out","intermediate",[kt,yt,Ve("out")],We("out",90),"Five to seven yards, then square out to the sideline.",3),$e("out","Out","intermediate",[kt,yt,yt,Ve("out")],We("out",90),"Ten to twelve yards, then square out to the sideline.",3),$e("in","In (square-in)","intermediate",[kt,yt,Ve("in")],We("in",90),"Five to seven yards, then square in across the field.",6),$e("dig","Dig","intermediate",[kt,yt,yt,Ve("in")],We("in",90),"Ten to twelve yards, then square in across the field.",6),$e("curl","Curl","intermediate",[kt,yt,yt,Ve("hook")],We("in",165),"Ten to twelve yards, then turn back towards the quarterback.",0),$e("comeback","Comeback","intermediate",[kt,yt,yt,Ve("hook")],We("out",150),"Twelve yards, then come back towards the sideline.",5),$e("cross","Deep cross (over)","intermediate",[kt,yt,Ve("in")],We("in",60),"Seven yards, then cross the field on a diagonal.",6),$e("sail","Sail","intermediate",[kt,yt,yt,Ve("out")],We("out",60),"Twelve yards, then break to the sideline on a diagonal.",7),$e("corner","Corner","intermediate",[kt,yt,Ve("out")],We("out",45),"Seven yards, then break for the corner at 45 degrees.",7),$e("flag","Flag (deep corner)","deep",[kt,yt,yt,Ve("out")],We("out",40),"Twelve yards, then break for the pylon.",7),$e("post","Post","deep",[kt,yt,yt,Ve("in")],We("in",40),"Twelve yards, then break for the goal post.",8),$e("skinny-post","Skinny post","deep",[kt,yt,yt,Ve("in")],We("in",25),"Twelve yards, then a shallow break inside; stays in the seam.",8),$e("go","Go (fly)","deep",[kt,Ve("fly")],We("in",0),"Three steps, then burn straight upfield.",9),$e("streak","Streak","deep",[Ve("fly")],We("in",0),"Straight upfield from the snap.",9),$e("fade","Fade","deep",[Jn("out",25),Ve("fly")],We("in",0),"An outside release, then straight up the sideline.",9),$e("seam","Seam","deep",[Jn("in",15),Ve("fly")],We("in",0),"A slight inside release, then straight up the seam between the zones.",9),$e("deep-post","Deep post","deep",[kt,yt,yt,Ve("in")],We("in",30),"Fifteen yards, then bend to the post.",8),$e("sluggo","Sluggo (slant and go)","double",[Jn("in",45),Ve("fly")],We("in",0),"Sell the slant, then take off upfield.",9),$e("out-and-up","Out and up","double",[Jn("out",60),Ve("fly")],We("in",0),"Sell the out, then take off up the sideline.",9),$e("post-corner","Post-corner","double",[Jn("in",30),yt,Ve("out")],We("out",45),"Sell the post, then break for the corner.",7),$e("whip","Whip (pivot)","double",[Jn("in",50),Ve("out")],We("out",95),"Sell the slant, then pivot back to the outside.",2),$e("hitch-and-go","Hitch and go","double",[kt,yt,Ve("fly")],We("in",0),"Sell the hitch at five yards, then go.",9),$e("rb-flat","Back flat","backfield",[Jn("out",75),Ve("out")],We("out",85),"Out of the backfield to the flat.",1),$e("swing","Swing","backfield",[Jn("out",110),Ve("out")],We("out",75),"Swing wide behind the line, then turn up the sideline.",1),$e("angle","Angle (Texas)","backfield",[Jn("out",50),Ve("in")],We("in",60),"Start to the flat, then angle back inside behind the linebackers.",6),$e("wheel","Wheel","backfield",[Jn("out",80),yt,Ve("fly")],We("in",0),"Run to the flat, then wheel up the sideline.",9),$e("check-release","Check release","backfield",[Ws,Ve("out")],We("out",85),"Look for a blitzer first, then release to the flat.",1),$e("te-seam","Tight end seam","backfield",[kt,Ve("fly")],We("in",0),"A tight end straight up the seam.",9),$e("te-cross","Tight end cross","backfield",[kt,Ve("in")],We("in",65),"A tight end across the formation behind the linebackers.",6),$e("screen","Screen","delayed",[Ws,Ve("out")],We("out",95),"Wait behind the line, then slip outside for the screen pass.",1),$e("delay-in","Delay in","delayed",[Ws,Ve("in")],We("in",70),"Wait a count, then slip inside across the middle.",6),$e("delay-out","Delay out","delayed",[Ws,kt,Ve("out")],We("out",90),"Wait a count, then release and square out.",3),$e("delay-seam","Delay seam","delayed",[Ws,Ws,Ve("fly")],We("in",0),"Chip for two counts, then release up the seam.",9)];function Zi(n){return Ua.find(e=>e.id===n)}function Oa(n){return n<=Nt?"left":"right"}function yp(n,e){return n==="out"?e:e==="left"?"right":"left"}function ga(n,e){return n.steps.map(t=>{switch(t.t){case"up":return{t:"dir",dir:"up"};case"angle":return{t:"dir",dir:yp(t.toward,e),angle:t.angle};case"continue":return{t:"continue"};case"delay":return{t:"delay"};case"cut":return{t:"cut",cut:t.cut}}})}function bp(n,e){return ga(n,Oa(e))}function Tx(n,e){return JSON.stringify(n)===JSON.stringify(e)}function $r(n,e,t){const i=(n??[]).filter(o=>o.t!=="filler");if(i.length===0||i[i.length-1].t!=="cut")return null;const s=Oa(e),r=o=>{const a=ga(o,s);return a.length===i.length&&a.every((c,l)=>Tx(c,i[l]))};if(t){const o=Zi(t);if(o&&r(o))return o}return Ua.find(r)??null}function wx(n){switch(n){case"fly":return{toward:"in",angle:0};case"in":return{toward:"in",angle:60};case"out":return{toward:"out",angle:60};case"hook":return{toward:"in",angle:160}}}function Ax(n,e){const t=Math.abs(e.angle);switch(n){case"fly":return t<=Si;case"hook":return t>=xi;case"in":return e.toward==="in"&&t>=Si&&t<=xi;case"out":return e.toward==="out"&&t>=Si&&t<=xi}}function Sp(n,e){const t=Oa(e);return yp(n.toward,t)==="right"?n.angle:-n.angle}function Cx(n,e,t,i={}){const s=xt(t,ai),r=[{...n}],o=[];let a={...n},c=null,l=null,u=!1,h=!1;const d=i.boardMinY??0,f=v=>{const p=Math.max(ge,Math.min(Ke-ge,v.x)),b=Math.max(d+ge,Math.min(Yt-ge,v.y));return{p:{x:p,y:b},stopped:p!==v.x}},g=(v,p,b,S)=>{if(b<=0)return;const x=vn(p),A={x:a.x+x.x*b,y:a.y+x.y*b},w=f(A);w.stopped&&(h=!0),o.push({slice:v,from:a,to:w.p,marker:S}),a=w.p,r.push(a)};for(let v=0;v<s.length;v++){const p=v+1,b=s[v],S=p===1?e/2:e;if(h)break;if(u){b.t==="filler"&&c!==null&&g(p,c,S,b);continue}switch(b.t){case"dir":c=b.dir==="up"?0:b.dir==="left"?-b.angle:b.angle,g(p,c,S,b);break;case"continue":c!==null&&g(p,c,S,b);break;case"delay":g(p,c??0,Math.min(lp,S),b);break;case"cut":{const x=i.break&&Ax(b.cut,i.break)?i.break:wx(b.cut);l={...a},c=Sp(x,a.x),u=!0,g(p,c,S,b);break}case"run":{const x=i.laneTarget?i.laneTarget(b.side,b.lane):{x:a.x+(b.side==="left"?-4:4)*(b.lane==="dive"?1:b.lane==="offtackle"?2:3),y:a.y+8};c=Math.atan2(x.x-a.x,x.y-a.y)*180/Math.PI,g(p,c,S,b),u=!0;break}}}let _=null;if(c!==null&&!h&&o.length>0&&(u||s[s.length-1].t==="continue"||s[s.length-1].t==="dir")){const v=vn(c);_=f({x:a.x+v.x*e,y:a.y+v.y*e}).p}return{points:r,slices:o,cutAt:l,tail:_,sideline:h}}function xp(n,e,t){const i=n.length;if(i===0)return{x:Nt+(e==="left"?-4:4),y:0};const s=Math.floor(i/2),r=l=>n[Math.max(0,Math.min(i-1,l))],o=r(s),a=r(e==="left"?s-1:s+1),c=r(e==="left"?s-2:s+2);switch(t){case"dive":return{x:(o.x+a.x)/2,y:(o.y+a.y)/2};case"offtackle":return{x:(a.x+c.x)/2,y:(a.y+c.y)/2};case"sprint":{const l=e==="left"?n[0]:n[i-1];return{x:l.x+(e==="left"?-qe:qe),y:l.y}}}}class Tu{state;play;rng;defs;constructor(e,t,i){this.state=e,this.play=t,this.rng=i,this.defs=new Map;for(const s of["home","away"]){const r=e.config.teams[s];for(const o of[...r.offense,...r.defense])this.defs.set(o.id,o)}}def(e){const t=this.defs.get(e);if(!t)throw new kl(`unknown player ${e}`);return t}f(e){const t=this.play.players[e];if(!t)throw new kl(`${e} is not on the field`);return t}has(e){return e in this.play.players}name(e){const t=this.def(e);return`${t.position} ${t.name} (#${t.number})`}short(e){const t=this.def(e);return`${t.position} #${t.number}`}skill(e,t){return this.def(e).skills[t]}team(e){return this.state.config.teams[e]}coachOf(e){return e==="offense"?this.play.offense:this.play.defense}sideOf(e){return this.f(e).side}coachOfPlayer(e){return this.coachOf(this.sideOf(e))}onField(e){return Object.values(this.play.players).filter(t=>t.side===e)}offensePlayers(){return this.onField("offense")}defensePlayers(){return this.onField("defense")}qb(){const e=this.offensePlayers().find(t=>this.def(t.id).position==="QB");if(!e)throw new kl("no quarterback on the field");return e}marker(e,t=this.play.slice){const i=this.sideOf(e)==="offense"?ai:fr,s=xt(this.play.markers[e],i);return t>i?{t:"filler"}:s[t-1]}offMarker(e,t=this.play.slice){return this.marker(e,t)}blockKind(e,t=this.play.slice){const i=this.effectiveOffMarker(e,t);return i.t==="passblock"?"pass":i.t==="runblock"?"run":null}effectiveOffMarker(e,t=this.play.slice){if(t<=ai)return this.offMarker(e,t);const i=xt(this.play.markers[e],ai);for(let s=i.length-1;s>=0;s--)if(i[s].t!=="filler")return i[s];return{t:"filler"}}effectiveCarrier(){return this.play.ball.apparent??this.play.ball.carrier}handoffPending(){const e=this.play.handoff;return!!e&&!e.done&&!e.fumbled&&e.slice===this.play.slice}effectiveInPlay(){return this.play.ball.inPlay||this.play.ball.apparent!==null||this.handoffPending()}isCarrier(e){return this.effectiveCarrier()===e}ballNowInPlay(){const e=this.play.ball;e.inPlay||(e.inPlay=!0,e.inPlaySlice=this.play.slice),e.apparent=null}fakeHandoff(e){this.play.ball.apparent=e}revealFake(){this.play.ball.apparent=null}engagementOf(e){return this.play.engagements.find(t=>t.defender===e||t.blockers.includes(e))}isEngaged(e){return this.engagementOf(e)!==void 0}engagedSet(){const e=new Set;for(const t of this.play.engagements){e.add(t.defender);for(const i of t.blockers)e.add(i)}return e}removeEngagement(e){this.play.engagements=this.play.engagements.filter(t=>t.id!==e.id)}moveCtx(){return{players:this.play.players,engaged:this.engagedSet(),boardMinY:this.play.boardMinY}}isLying(e){return this.f(e).pancakedSlice!==null}canAct(e){const t=this.f(e);return t.pancakedSlice===null&&!t.s.noAction}markerAssignment(e){return this.play.assignments[e]??{t:"none"}}assignment(e){const t=this.markerAssignment(e),i=this.f(e);return i.freeSince!==null&&i.freeSince<=this.play.slice?{t:"free"}:this.effectiveInPlay()&&t.t!=="man"?{t:"free"}:t}setAssignment(e,t){this.play.assignments[e]=t}freeDefender(e,t){const i=this.f(e);i.freeSince===null&&(i.freeSince=this.play.slice,this.log(`${this.short(e)} becomes a free defender (${t}).`,"event"))}isFreeDefender(e){return this.assignment(e).t==="free"}isBlitzer(e){return this.assignment(e).t==="blitz"}allowance(e,t={}){const i=this.f(e);if(i.pancakedSlice!==null||i.s.noAction||i.s.noMove)return 0;let s=this.skill(e,"speed");return this.play.slice===1?s/=2:t.zone&&(s-=OS),s-=i.s.speedPenalty,i.s.halved&&(s/=2),Math.max(0,s)}gap(e,t){return at(this.f(e).pos,this.f(t).pos)-qe}defendersWithin(e,t){const i=this.f(e);return this.defensePlayers().filter(s=>s.pancakedSlice===null&&at(s.pos,i.pos)-qe<=t+1e-6)}sidelineGap(e){return Math.min(e.x,Ke-e.x)-ge}zoneRect(e){const t=this.play.los,i=Yt;switch(e.zone){case"flat":return e.side==="left"?{x0:0,y0:t,x1:Nt-ma,y1:t+ha}:{x0:Nt+ma,y0:t,x1:Ke,y1:t+ha};case"curl":return e.side==="left"?{x0:0,y0:t+fa,x1:Nt,y1:Math.min(i,t+pa)}:{x0:Nt,y0:t+fa,x1:Ke,y1:Math.min(i,t+pa)};case"hook":return{x0:0,y0:t+dp,x1:Ke,y1:Math.min(i,t+hp)};case"deep":return{x0:0,y0:Math.min(i-qe,t+fp),x1:Ke,y1:i}}}inZone(e,t){const i=this.zoneRect(t);return e.x>=i.x0-1e-6&&e.x<=i.x1+1e-6&&e.y>=i.y0-1e-6&&e.y<=i.y1+1e-6}nearestInZone(e,t){const i=this.zoneRect(t);return{x:or(e.x,i.x0+ge,i.x1-ge),y:or(e.y,i.y0+ge,Math.max(i.y0+ge,i.y1-ge))}}zoneLabel(e){return e.zone==="flat"||e.zone==="curl"?`${e.zone} ${e.side}`:e.zone}log(e,t="info",i={}){const s=this.state.log.length+1;this.state.log.push({n:s,text:e,kind:t,slice:this.play.slice,...i})}roll(e,t,i=0,s){const r=Uc(this.rng,s??t.toUpperCase(),this.skill(e,t),i);return this.log(`${this.short(e)} ${Oc(r)}`,"roll",{roll:r}),r}rollValue(e,t,i,s=0){const r=Uc(this.rng,t,i,s);return this.log(`${this.short(e)} ${Oc(r)}`,"roll",{roll:r}),r}*ask(e,t){const i=Array.isArray(t)?t:[t];let s=e;for(;;){const r=yield s;if(i.includes(r.kind))return r;s={...e,error:`Expected ${i.join(" or ")}, got ${r.kind}.`}}}startSlice(){const e=this.play;e.slice+=1,e.trails={},e.designations={};for(const t of Object.values(e.players))t.s,t.s=gp(),t.halvedNext&&(t.s.halved=!0,t.halvedNext=!1),t.nextSlicePenalty>0&&(t.s.speedPenalty+=t.nextSlicePenalty,t.nextSlicePenalty=0),t.pancakedSlice!==null&&t.pancakedSlice<e.slice&&(this.skill(t.id,"agility")>=WS?(t.pancakedSlice=null,t.s.speedPenalty+=ch,this.log(`${this.short(t.id)} gets back on his feet (-${ch} movement).`,"event")):(t.pancakedSlice=null,t.s.noAction=!0,t.s.noMove=!0,this.log(`${this.short(t.id)} gets up slowly and can do nothing this timeslice.`,"event")));if(e.ball.inPlay&&e.ball.inPlaySlice!==null&&e.slice>=e.ball.inPlaySlice+2)for(const t of this.defensePlayers())this.markerAssignment(t.id).t==="man"&&t.freeSince===null&&(t.freeSince=e.slice);for(const t of e.engagements)t.mayDisengage=t.dominance>=1||t.lastResult!==null&&t.lastResult>0,t.blockersWonLast=t.lastResult!==null&&t.lastResult<0}setPos(e,t,i){const s=this.f(e),r=s.pos;s.pos={x:Math.round(t.x*1e3)/1e3,y:Math.round(t.y*1e3)/1e3},i!==void 0?s.facing=i:at(r,t)>1e-6&&(s.facing=Tn(ot(t,r))),(this.play.trails[e]??=[r]).push(s.pos)}faceEachOther(e,t){const i=this.f(e),s=this.f(t);i.facing=Tn(ot(s.pos,i.pos)),s.facing=Tn(ot(i.pos,s.pos))}static inSector(e,t,i){const s=((i-t)%360+360)%360,r=((e-t)%360+360)%360;return s===0?Math.abs(px(t,e))<1e-6:r<=s+1e-6}towardsCenterSign(e){return e.x<=Nt?1:-1}runLaneTarget(e,t){const i=this.offensePlayers().filter(s=>this.def(s.id).position==="OL").sort((s,r)=>s.pos.x-r.pos.x).map(s=>s.pos);return xp(i,e,t)}dirTo(e,t){return Tn(ot(t,e))}pointAt(e,t,i){return li(e,{x:vn(t).x*i,y:vn(t).y*i})}}function Rx(n,e,t){return t?qe:e.side===n?ge:ge*1.5}function Th(n,e,t,i){const s=ot(e,n),r=ot(n,t),o=En(s,s),a=2*En(r,s),c=En(r,r)-i*i;if(o<en)return c<0?[0,1]:null;const l=a*a-4*o*c;if(l<=0)return null;const u=Math.sqrt(l),h=(-a-u)/(2*o),d=(-a+u)/(2*o);return d<0||h>1?null:[Math.max(0,h),Math.min(1,d)]}function Mp(n,e,t,i){const s=n.players[e],r=s.pos,o=new Set(i.ignore??[]),a=new Set(i.passThrough??[]);let c=ot(t,r),l=Mu(c);const u={from:r,to:r,requested:t,distance:0,clipped:null,boundary:null,events:[]};if(l<en||i.allowance<=en)return l>en&&(u.clipped={reason:"allowance"}),u;c=Ui(c,1/l);let h=l;h>i.allowance+en&&(h=i.allowance,u.clipped={reason:"allowance"});const d=ge,f=Ke-ge,g=n.boardMinY+ge,_=Yt-ge,v=(F,G,q,W)=>{if(G>en){const P=(W-F)/G;if(P<h)return{L:Math.max(0,P),which:"hi"}}else if(G<-en){const P=(q-F)/G;if(P<h)return{L:Math.max(0,P),which:"lo"}}return null},p=v(r.x,c.x,d,f);p&&(h=p.L,u.clipped={reason:"bounds"},u.boundary=p.which==="lo"?"left":"right");const b=v(r.y,c.y,g,_);if(b&&(h=b.L,u.clipped={reason:"bounds"},u.boundary=b.which==="lo"?"back":"end"),i.maxY!==void 0&&c.y>en){const F=(i.maxY-ge-r.y)/c.y;F<h&&(h=Math.max(0,F),u.clipped={reason:"line"},u.boundary=null)}if(i.stopY!==void 0&&c.y>en){const F=(i.stopY-r.y)/c.y;F<h&&F>=0&&(h=F,u.clipped={reason:"stopY"},u.boundary=null)}if(h<=en)return u.to=r,u;let S=li(r,Ui(c,h));const x=Object.values(n.players).filter(F=>F.id!==e&&!o.has(F.id)),A=F=>n.engaged.has(F.id)&&!a.has(F.id),w=[];let k=1,I;const T=new Set;for(const F of x){const G=Rx(s.side,F,A(F)),q=Th(r,S,F.pos,G-1e-5);if(!q)continue;const[W]=q;if(!(W>=k)){if(A(F)){const P=xh(r,S,F.pos),$=or(En(ot(F.pos,r),ot(S,r))/Math.max(en,En(ot(S,r),ot(S,r))),0,1);let H=null,ee=1/0;for(const pe of x){if(pe.id===F.id||!A(pe))continue;const Be=xh(r,S,pe.pos);if(P*Be>=0)continue;const Pe=at(F.pos,pe.pos)-qe;if(Pe<TS-1e-6||Pe>=qe-1e-6)continue;const lt=or(En(ot(pe.pos,r),ot(S,r))/Math.max(en,En(ot(S,r),ot(S,r))),0,1);Math.abs(lt-$)*h>qe+Pe||Pe<ee&&(ee=Pe,H=pe)}if(H){const pe=[F.id,H.id].sort().join("|");if(!T.has(pe)){T.add(pe);const Be=Rl(r,S,H.pos,qe-1e-5),Pe=Math.min(W,Be??1);w.push({t:Pe,at:Cl(r,S,Pe),kind:"hole",pair:[F.id,H.id],gap:ee})}continue}const oe=Math.max(0,Rl(r,S,F.pos,qe)??0);oe<k&&(k=oe,I=F.id);continue}W<k&&(k=W,I=F.id)}}I!==void 0&&(u.clipped={reason:"blocked",by:I});const E=[];for(const F of x){const G=Th(r,S,F.pos,qe-1e-5);G&&E.push(G)}let D=!1;for(let F=0;F<50;F++){const G=E.find(([q,W])=>k>q&&k<W);if(!G)break;k=G[0],D=!0}D&&u.clipped?.reason!=="blocked"&&(u.clipped={reason:"overlap"}),D&&(u.boundary=null),u.events=w.filter(F=>F.t<=k+1e-9).sort((F,G)=>F.t-G.t);for(const F of i.watches??[]){const G=n.players[F.id];if(!G||G.id===e)continue;const q=Rl(r,S,G.pos,F.reach);q!==null&&q<=k+1e-9&&u.events.push({t:q,at:Cl(r,S,q),kind:"watch",id:F.id,tag:F.tag})}return u.events.sort((F,G)=>F.t-G.t),S=Cl(r,S,k),u.to=S,u.distance=at(r,S),u}function Xr(n,e,t=[]){const i=new Set(t);if(e.x<ge-1e-6||e.x>Ke-ge+1e-6||e.y<n.boardMinY+ge-1e-6||e.y>Yt-ge+1e-6)return!1;for(const s of Object.values(n.players))if(!i.has(s.id)&&at(s.pos,e)<qe-1e-5)return!1;return!0}function Fa(n,e,t,i,s=[]){for(let r=0;r<=36;r++)for(const o of r===0?[1]:[1,-1]){const a=t+o*r*5,c=li(e,Ui(vn(a),qe));if(Xr(n,c,[i,...s]))return c}return null}function kx(n,e,t){const i=n.players[e],s=n.players[t];return Fa(n,s.pos,Tn(ot(i.pos,s.pos)),e)}function Px(n,e){return at(n.pos,e.pos)-qe}function Ep(n,e,t,i,s){n.setPos(e,s);const r=n.f(e);r.s.moved=!0,r.s.engagedThisSlice=!0,n.faceEachOther(e,t),i==="run"&&n.markerAssignment(t).t==="man"&&n.freeDefender(t,"run blocked");let o=n.play.engagements.find(a=>a.defender===t);return o?(o.blockers.includes(e)||o.blockers.push(e),n.log(`${n.short(e)} joins the block on ${n.short(t)}: double team.`,"event"),o):(o={id:n.play.nextEngagementId++,defender:t,blockers:[e],kind:i,dominance:cp,formedSlice:n.play.slice,lastResult:null,mayDisengage:!1,blockersWonLast:!1,resolvedSlice:0},n.play.engagements.push(o),n.log(`${n.short(e)} ${i} blocks ${n.short(t)}.`,"event"),o)}function wh(n,e,t){const i=n.f(e);i.pancakedSlice=n.play.slice,i.s.noAction=!0,i.s.noMove=!0,i.s.clutchEligible=!1,delete n.play.designations[e],n.log(`${n.short(e)} is PANCAKED by ${n.short(t)}!`,"event")}function*Ah(n,e,t){const i=n.f(e.defender),s=n.f(t),r=n.play.defense,o=Tn(ot(s.pos,i.pos));for(;;){const a=yield*n.ask({kind:"breakThrough",coach:r,defender:e.defender,blocker:t},"breakThrough"),c=Number.isFinite(a.angle)?a.angle:o,l=Fa(n.moveCtx(),s.pos,c,e.defender);if(!l)break;n.setPos(e.defender,l);break}n.removeEngagement(e),i.s.moved=!0,i.s.brokeThrough=!0,i.s.clutchEligible=!0,i.facing=Tn(ot(n.qb().pos,i.pos));for(const a of e.blockers)n.f(a).cannotEngageUntil[e.defender]=n.play.slice+2;n.log(`${n.short(e.defender)} has BROKEN THROUGH the block of ${n.short(t)}.`,"event")}function Tp(n,e,t,i,s,r,o,a){const c=n.f(e),l=n.f(t),u=Nc(ot(l.pos,c.pos)),h=n.moveCtx(),d=[e,t,...o],f=(p,b)=>{let S=li(l.pos,Ui(u,p));const x=r||Math.abs(b)>1e-9?li(c.pos,Ui(u,p)):c.pos;return S=gx(S,x,b),!Xr(h,S,d)||!Xr(h,x,d)||at(S,x)<qe-1e-6?null:{w:x,l:S}};let g=Math.max(0,Math.min(wS,i)),_=Math.max(-oh,Math.min(oh,s)),v=f(g,_);for(let p=9;p>=0&&!v;p--)v=f(g*p/10,_*p/10),v&&(g=g*p/10,_=_*p/10);if(!v)return{push:0,turn:0};n.setPos(t,v.l),n.setPos(e,v.w),n.faceEachOther(e,t);for(const p of o){const b=n.f(p),S=n.f(a);if(at(b.pos,S.pos)>qe+.05){const x=Fa(h,S.pos,Tn(ot(b.pos,S.pos)),p,[e,t]);x&&n.setPos(p,x)}}return{push:Math.round(g*100)/100,turn:Math.round(_)}}function*wp(n,e){const t=n.play;e.resolvedSlice=t.slice;const i=n.blockKind(e.blockers[0])??e.kind;e.kind=i;let s=0,r=!1;for(const f of e.blockers){if(!n.canAct(f)){n.log(`${n.short(f)} is still getting up and cannot block properly (successrate 0).`,"event");continue}const g=n.blockKind(f)??e.kind,_=n.roll(f,g==="pass"?"passblock":"runblock");s+=_.successRate,_.perfect&&(r=!0)}const o=n.f(e.defender);let a=0,c=!1;if(n.canAct(e.defender)){const f=n.roll(e.defender,"passrush",0,"RUSH");a=f.successRate,c=f.perfect}else n.log(`${n.short(e.defender)} is still getting up and cannot rush (successrate 0).`,"event");const l={perfect:c};o.s.rushPerfect=l.perfect;const u=a-s;e.lastResult=u,e.dominance=Math.max(cp,Math.min($S,e.dominance+u)),n.log(`${e.kind==="pass"?"Pass":"Run"} block ${e.blockers.map(f=>n.short(f)).join(" + ")} vs ${n.short(e.defender)}: timeslice result ${u>=0?"+":""}${u}, dominance ${e.dominance}.`,"event");let h,d;if(e.kind==="pass"?(h=u<=-uh||r,d=u>=uh||l.perfect):(h=u<=-10||r,d=u>=qS||l.perfect),h&&d&&(h=d=!1,n.log("Both sides rolled a PERFECT: the pancakes cancel out.","event")),h){wh(n,e.defender,e.blockers[0]),n.removeEngagement(e);return}if(d){let f=e.blockers[0];if(e.blockers.length>1){const g=yield*n.ask({kind:"pancakeChoice",coach:t.defense,defender:e.defender,blockers:[...e.blockers]},"pancakeChoice");e.blockers.includes(g.blocker)&&(f=g.blocker)}wh(n,f,e.defender),yield*Ah(n,e,f);return}if(e.dominance>=YS){yield*Ah(n,e,e.blockers[0]);return}if((e.dominance>=XS||e.kind==="run"&&u>=KS)&&(o.s.clutchEligible=!0),u!==0){const f=u>0,g=f?t.defense:t.offense,_=f?[e.defender]:[...e.blockers],v=f?e.blockers[0]:e.defender,p=yield*n.ask({kind:"pushAround",coach:g,winner:_[0],loser:v,blockers:[...e.blockers]},"pushAround"),b=p.anchor&&_.includes(p.anchor)?p.anchor:_[0],S=f?v:e.defender;if(Math.abs(p.push)>1e-9||Math.abs(p.turn)>1e-9){const x=f?e.blockers.slice(1):e.blockers.filter(w=>w!==b),A=Tp(n,b,S,p.push,p.turn,p.follow,x,e.defender);(A.push>0||A.turn!==0)&&n.log(`${n.short(b)} pushes ${n.short(S)} around: ${A.push>0?`${A.push} cm back`:""}${A.push>0&&A.turn!==0?", ":""}${A.turn!==0?`turned ${A.turn}°`:""}.`,"event")}}}function Fc(n,e,t,i){const s=n.f(t),r=n.f(e),o=Tn(ot(r.pos,s.pos)),a=n.moveCtx();for(let c=0;c<=36;c++)for(const l of c===0?[1]:[1,-1]){const u=o+l*c*5,h=li(s.pos,Ui(vn(u),qe));if(Xr(a,h,[e])&&!(i!==void 0&&h.y>i-ge+1e-6))return h}return null}function va(n,e,t){const i=n.f(e),s=n.f(t);if(!n.canAct(e))return{ok:!1,reason:"The blocker is down."};if(n.isLying(t))return{ok:!1,reason:"The defender is lying on the ground."};if(n.isEngaged(e))return{ok:!1,reason:"The blocker is already engaged."};if((i.cannotEngageUntil[t]??0)>n.play.slice)return{ok:!1,reason:"The defender broke through this blocker: he may not engage him this timeslice."};if(s.s.disengagedFrom.includes(e))return{ok:!1,reason:"The defender disengaged from this blocker this timeslice."};const r=n.blockKind(e);if(!r)return{ok:!1,reason:"The player has no blocking marker this timeslice."};if(r==="run"&&!n.effectiveInPlay())return{ok:!1,reason:"Run blocking is only allowed once the ball is in play."};if(n.isCarrier(t))return{ok:!1,reason:"Cannot block the ball carrier."};const o=n.play.engagements.find(a=>a.defender===t);return o&&o.blockers.length>=2?{ok:!1,reason:"At most two blockers may double team a defender."}:{ok:!0}}function Lx(n,e){switch(e.kind){case"tackled":return`Tackled by ${n.short(e.by)}.`;case"sacked":return`Sacked by ${n.short(e.by)}!`;case"outOfBounds":return"Out of bounds.";case"incomplete":return"Incomplete pass.";case"interception":return`Intercepted by ${n.short(e.by)}${e.touchdown?" and returned for a touchdown!":e.returnYards>0?`, returned ${e.returnYards} yards.`:"."}`;case"fumbleLost":return`Fumble recovered by ${n.short(e.by)}${e.touchdown?" and returned for a touchdown!":e.returnYards>0?`, returned ${e.returnYards} yards.`:"."}`;case"touchdown":return`TOUCHDOWN ${n.short(e.by)}!`;case"safety":return"SAFETY!";case"fakeTackled":return"The fake runner is tackled; he never had the ball."}}function Hn(n,e,t){const i=n.play;if(i.result)return;let s=e;(s.kind==="tackled"||s.kind==="sacked"||s.kind==="outOfBounds"||s.kind==="touchdown")&&s.kind!=="touchdown"&&t>=qn&&(s={kind:"touchdown",by:i.ball.carrier??""}),(s.kind==="tackled"||s.kind==="sacked"||s.kind==="outOfBounds")&&t<zn&&i.boardMinY<zn&&(s={kind:"safety"});const o=s.kind==="interception"||s.kind==="fumbleLost",a=s.kind==="touchdown",c=s.kind==="incomplete"&&!i.dpi?i.los:or(t,i.boardMinY,qn);i.result={ending:s,spotY:c,yards:Math.round(pp(c-i.los)*10)/10,turnover:o,autoFirstDown:i.dpi&&!o,scored:a},i.phase="over",n.log(Lx(n,s),s.kind==="touchdown"||s.kind==="safety"?"score":"event"),a&&n.log(`${Ko} points.`,"score")}function Ap(n,e,t){const i=n.f(e),s=n.f(t);if(at(i.pos,s.pos)<=qe+.05){n.faceEachOther(e,t);return}const r=kx(n.moveCtx(),e,t);r&&n.setPos(e,r),n.faceEachOther(e,t)}function*Qr(n,e,t,i={}){const s=n.play,r=n.f(e),o=n.f(t);r.s.tackled=!0,Ap(n,e,t);const a=s.ball.apparent===t&&s.ball.carrier!==t;a&&(s.ball.apparent=null,n.log(`${n.short(e)} hits ${n.short(t)}: he does not have the ball! The quarterback kept it.`,"event"));let c=0;const l=[];i.cleanShot&&(c+=IS,l.push("clean shot +5"));let u=!1;if(i.allowOutOfBounds!==!1&&n.sidelineGap(o.pos)<=ES+1e-6&&!a&&(yield*n.ask({kind:"tackleStyle",coach:s.defense,tackler:e,carrier:t},"tackleStyle")).style==="outOfBounds"&&(c+=NS,u=!0,l.push("out of bounds +5")),i.clutch){const g=Math.ceil(n.skill(e,"tackle")/2);c-=g,l.push(`clutch -${g}`)}const h=a?0:n.skill(t,"running"),d=n.roll(e,"tackle",c,l.length?`TACKLE (${l.join(", ")})`:"TACKLE");if(a)return d.success&&d.roll<d.target-h&&(o.pancakedSlice=s.slice,o.s.noAction=!0,o.s.noMove=!0,n.log(`${n.short(t)} is brought down anyway.`,"event")),"fakeRevealed";if(d.perfect&&!u)return n.log(`${n.short(e)} rolls a PERFECT tackle: ${n.short(t)} FUMBLES!`,"event"),_a(n,o.pos),"fumble";if(d.success&&d.roll<d.target-h){const g=n.def(t).position==="QB"&&!s.ball.inPlay&&o.pos.y<s.los?{kind:"sacked",by:e}:{kind:"tackled",by:e};return Hn(n,u?{kind:"outOfBounds"}:g,o.pos.y),"down"}if(d.success)return o.draggedBy.includes(e)||o.draggedBy.push(e),o.halvedNext=!0,n.log(`${n.short(t)} drags ${n.short(e)} along: stopped in his tracks.`,"event"),"dragging";n.log(`${n.short(e)} MISSES the tackle on ${n.short(t)}.`,"event"),r.halvedNext=!0,o.cannotTackleUntil[e]=s.slice+2;const f=yield*n.ask({kind:"missedTackle",coach:s.offense,carrier:t,tackler:e},"missedTackle");if(f.angle!==null&&Number.isFinite(f.angle)){const g=Fa(n.moveCtx(),r.pos,f.angle,t);g&&g.y<=r.pos.y+1e-6&&(n.setPos(t,g),n.log(`${n.short(t)} steps around ${n.short(e)}.`,"event"))}return"missed"}function _a(n,e){const t=n.play;t.ball.loose={...e},t.ball.carrier=null,t.ball.apparent=null,t.ball.inPlay||(t.ball.inPlay=!0,t.ball.inPlaySlice=t.slice);for(const i of Object.values(t.players))i.draggedBy=[]}function*Cp(n){const e=n.play,t=e.ball.loose,i=Object.values(e.players).filter(g=>g.pancakedSlice===null&&at(g.pos,t)-ge<=ap+1e-6);if(i.length===0)return n.log("Nobody is near the loose ball.","event"),"none";const r=i.map(g=>({p:g,r:n.rollValue(g.id,"AGILITY/2",Math.ceil(n.skill(g.id,"agility")/2))})).filter(g=>g.r.success);if(r.length===0)return n.log("Nobody comes up with the ball.","event"),"none";const o=Math.max(...r.map(g=>g.r.successRate)),a=r.filter(g=>g.r.successRate===o);let c=a[0];const l=a.find(g=>g.p.side==="offense"),u=a.find(g=>g.p.side==="defense");if(l&&u){n.log(`${n.short(l.p.id)} and ${n.short(u.p.id)} are tied: one more roll each.`,"event");for(let g=0;g<100;g++){const _=n.rollValue(l.p.id,"AGILITY/2",Math.ceil(n.skill(l.p.id,"agility")/2)),v=n.rollValue(u.p.id,"AGILITY/2",Math.ceil(n.skill(u.p.id,"agility")/2));if(_.rawRate>v.rawRate){c=l;break}if(v.rawRate>_.rawRate){c=u;break}}}const h=c.p.id;n.log(`${n.short(h)} recovers the ball!`,"event");const d=n.engagementOf(h);if(d&&n.removeEngagement(d),e.ball.loose=null,c.p.side==="offense")return e.ball.carrier=h,e.ball.inPlay=!0,"offense";const f=Rp(n,h,c.p.pos.y);return Hn(n,{kind:"fumbleLost",by:h,returnYards:f.yards,touchdown:f.touchdown},f.spotY),"defense"}function Rp(n,e,t){let i=0,s=!1;for(let o=0;o<50;o++){const a=n.roll(e,"agility");if(!a.success)break;if(a.perfect){s=!0,n.log(`${n.short(e)} rolls a PERFECT return: touchdown!`,"score");break}const c=n.rng.die(20);if(i+=c,n.log(`${n.short(e)} returns it ${c} yards (${i} in total).`,"event"),t-Zo(i)<=zn){s=!0;break}if(c!==20)break;n.log("A 20 on the return: he keeps going.","event")}let r=t-Zo(i);return s?r=zn:r>=qn&&(r=qn-Zo(as)),{yards:i,touchdown:s,spotY:r}}function kp(n,e,t,i){const s=ot(i,t);if(Math.hypot(s.x,s.y)<1e-6)return{to:t};const o=e.mode;switch(o.t){case"none":return{error:o.reason};case"free":case"closer":case"zone":return{to:i};case"fixed":{const a=vn(o.angle),c=Math.max(0,En(s,a));return{to:li(t,Ui(a,c))}}case"along":{const a=vn(o.angle),c=En(s,a);return{to:li(t,Ui(a,c))}}case"sector":{const a=Tn(s);return Tu.inSector(a,o.from,o.to)?{to:i}:{error:`That direction is outside the allowed ${o.label} (${a.toFixed(0)}°).`}}}}function Dx(n,e,t,i){const s=e.mode;if(s.t==="closer"&&at(i,s.target)>at(t,s.target)-1e-6&&at(t,i)>1e-6)return`The move must end closer to the ${s.label}.`;if(s.t==="zone"){const r=n.inZone(t,s.zone);if(r&&!n.inZone(i,s.zone))return`A defender in zone coverage stays inside his ${n.zoneLabel(s.zone)} zone.`;if(!r){const o=n.nearestInZone(t,s.zone);if(at(i,o)>at(t,o)-1e-6&&at(t,i)>1e-6)return`Outside his zone the defender must move towards his ${n.zoneLabel(s.zone)} zone.`}}if(e.notFartherFrom){const r=n.f(e.notFartherFrom).pos;if(at(i,r)>at(t,r)+1e-6&&at(i,r)>qe+.5)return`The move may not end farther from ${n.short(e.notFartherFrom)}.`}return null}function*ci(n,e,t,i){const s=n.f(e),r=s.pos,o=a=>{n.setPos(e,a),s.s.movedCm=at(r,a)};s.s.moved=!0;for(const a of t.events){if(a.kind==="hole"){if(o(a.at),!n.roll(e,"agility",0,`AGILITY (hit the hole between ${n.short(a.pair[0])} and ${n.short(a.pair[1])}, ${a.gap.toFixed(1)} cm)`).success)return s.s.stranded=!0,n.log(`${n.short(e)} is stranded in front of the hole.`,"event"),{stopped:!0};n.log(`${n.short(e)} hits the hole.`,"event");continue}if(i){if(o(a.at),(yield*i(a))==="stop")return{stopped:!0};if(n.play.result)return{stopped:!0}}}return o(t.to),{stopped:!1}}function ui(n,e,t,i={}){const s=n.f(e.id).pos,r=kp(n,e,s,t);if("error"in r)return r;const o=Mp(n.moveCtx(),e.id,r.to,{allowance:e.allowance,...i}),a=Dx(n,e,s,o.to);return a?{error:a}:{plan:o}}function Bc(n,e,t){return ui(n,e,t,{watches:[],stopY:e.id===n.effectiveCarrier()?qn:void 0,maxY:Xs(n,e.id)})}function Xs(n,e){if(n.def(e).position==="OL"&&!n.effectiveInPlay())return n.play.los}function*xs(n,e){let t;for(;;){if(n.play.result)return;const i=e.specs(),s=i.filter(l=>!l.done);if(s.length===0)return;if(s.every(l=>l.mode.t==="none"&&!l.mayDisengage&&!l.mayBlitz)){if(e.finishRemaining)yield*e.finishRemaining(s);else for(const l of s)n.f(l.id).s.moved=!0;return}const r={kind:"move",coach:e.coach,phase:e.phase,movers:i,canFinish:!0,title:e.title,error:t};t=void 0;const o=yield*n.ask(r,["move","skipMove","disengage","declareBlitz","finish"]);if(o.kind==="finish"){e.finishRemaining&&(yield*e.finishRemaining(s));return}const a=s.find(l=>l.id===o.id);if(!a){t="That player cannot move now.";continue}if(o.kind==="skipMove"){e.skip&&(yield*e.skip(a)),a.done=!0,n.f(a.id).s.moved=!0;continue}if(o.kind==="declareBlitz"){if(!a.mayBlitz||!e.declareBlitz){t="That player cannot declare a blitz.";continue}e.declareBlitz(a);continue}if(o.kind==="disengage"){if(!a.mayDisengage||!e.disengage){t="That player may not disengage.";continue}const l=yield*e.disengage(a,o.to);l&&(t=l);continue}if(a.mode.t==="none"){t=a.mode.reason;continue}const c=yield*e.run(a,o.to);c&&(t=c)}}function Et(n,e,t,i){const s=n.f(e),r=s.s.moved;return n.canAct(e)?s.s.noMove?{id:e,allowance:0,mode:{t:"none",reason:"May not move this timeslice."},done:r}:s.s.stranded?{id:e,allowance:0,mode:{t:"none",reason:"Stranded in front of a hole."},done:r}:t<=1e-9&&i.t!=="none"?{id:e,allowance:0,mode:{t:"none",reason:"No movement available."},done:r}:{id:e,allowance:t,mode:i,done:r}:{id:e,allowance:0,mode:{t:"none",reason:s.pancakedSlice!==null?"Lying on the ground.":"Getting up: may do nothing this timeslice."},done:r}}function*Ix(n){const e=n.play,t=()=>n.defensePlayers().filter(i=>n.assignment(i.id).t==="blitz").map(i=>{const s=i.pos.y-ge-e.los,r=Et(n,i.id,Math.max(0,s/2),{t:"sector",from:90,to:-90,label:"approach to the line of scrimmage"});return r.note="Pre-snap: up to half the distance to the line, approaching it.",r});if(t().length!==0){yield*xs(n,{coach:e.defense,phase:"defenseReveal",title:"Pre-snap movement: blitzers may creep towards the line",specs:t,*run(i,s){const r=ui(n,i,s,{});if("error"in r)return r.error;const o=n.f(i.id).pos;return r.plan.to.y>=o.y-1e-6&&at(o,r.plan.to)>1e-6?"Pre-snap movement must approach the line of scrimmage.":(yield*ci(n,i.id,r.plan),n.log(`${n.short(i.id)} creeps up before the snap.`,"event"),null)}});for(const i of n.defensePlayers())i.s.moved=!1,i.s.movedCm=0}}function*Nx(n){const e=n.play,t=()=>{const s=[];for(const r of n.offensePlayers()){const o=n.blockKind(r.id);if(!o||n.isCarrier(r.id))continue;const a=n.engagementOf(r.id);if(a){a.blockers.length>1&&a.blockersWonLast&&a.blockers.includes(r.id)&&s.push({id:r.id,allowance:0,designated:null,engageable:[],mayEngage:!1,kind:o,done:r.s.moved,mayRelease:!0,crossesLosForbidden:!1});continue}const c=r.s.moved?[]:n.defensePlayers().filter(u=>Px(r,u)<=Ia+1e-6&&va(n,r.id,u.id).ok&&Fc(n,r.id,u.id,Xs(n,r.id))!==null).map(u=>u.id),l=o==="pass"||n.effectiveInPlay();s.push({id:r.id,allowance:n.allowance(r.id),designated:e.designations[r.id]??null,engageable:c,mayEngage:l&&n.canAct(r.id),kind:o,done:r.s.moved,mayRelease:!1,crossesLosForbidden:Xs(n,r.id)!==void 0})}return s};let i;for(;;){if(e.result)return;const s=t();if(s.length===0)return;const r=yield*n.ask({kind:"freeBlockers",coach:e.offense,blockers:s,error:i},["move","designate","engage","release","finish"]);if(i=void 0,r.kind==="finish")return;const o=s.find(l=>l.id===(r.kind==="move"?r.id:r.blocker));if(!o){i="That player is not a free blocker.";continue}if(r.kind==="release"){const l=n.engagementOf(o.id);if(!l||!o.mayRelease){i="That blocker may not leave the double team.";continue}l.blockers=l.blockers.filter(u=>u!==o.id),n.log(`${n.short(o.id)} leaves the double team on ${n.short(l.defender)}.`,"event");continue}if(r.kind==="designate"){if(r.defender===null)delete e.designations[o.id];else{if(!n.has(r.defender)||n.sideOf(r.defender)!=="defense"){i="Designate a defender.";continue}e.designations[o.id]=r.defender,n.log(`${n.short(o.id)} designates ${n.short(r.defender)}.`,"decision")}continue}if(r.kind==="engage"){if(!o.engageable.includes(r.defender)||!o.mayEngage){const u=va(n,o.id,r.defender);i=u.ok?"The defender is not within 2 cm.":u.reason;continue}const l=Fc(n,o.id,r.defender,Xs(n,o.id));if(!l){i="There is no room to engage that defender.";continue}e.designations[o.id]=r.defender,Ep(n,o.id,r.defender,o.kind,l);continue}if(o.done){i="That blocker has already moved.";continue}const a=Et(n,o.id,o.allowance,{t:"free"}),c=ui(n,a,r.to,{maxY:Xs(n,o.id)});if("error"in c){i=c.error;continue}yield*ci(n,o.id,c.plan),n.log(`${n.short(o.id)} moves ${c.plan.distance.toFixed(1)} cm.`,"event")}}function*Ux(n){const e=n.play;for(const t of[...e.engagements].sort((i,s)=>i.id-s.id)){if(e.result)return;e.engagements.includes(t)&&t.resolvedSlice!==e.slice&&(yield*wp(n,t))}}function Ox(n,e){const t=[],i=n.f(e);for(const s of n.defensePlayers())!n.canAct(s.id)||s.s.tackled||(i.cannotTackleUntil[s.id]??0)>n.play.slice||i.draggedBy.includes(s.id)||(n.isEngaged(s.id)?s.s.clutchEligible&&t.push({id:s.id,reach:qe+da,tag:"clutch"}):(t.push({id:s.id,reach:qe+xu,tag:"jump"}),s.s.brokeThrough&&s.s.clutchEligible&&t.push({id:s.id,reach:qe+da,tag:"clutch"})));return t}function*Ch(n,e,t){const i=n.play,s=n.f(e);if(!s.s.clutchEligible||s.s.tackled||!n.canAct(e))return"continue";if(n.def(t).position==="QB"&&i.ball.carrier===t&&i.slice===1&&!s.s.rushPerfect)return n.log(`${n.short(e)} could clutch tackle the QB but did not roll a PERFECT rush in timeslice 1.`,"info"),"continue";if(!(yield*n.ask({kind:"clutchTackle",coach:i.defense,defender:e,carrier:t},"clutchTackle")).attempt)return"continue";const a=yield*Qr(n,e,t,{clutch:!0,allowOutOfBounds:!0});return a==="down"||a==="fumble"||a==="dragging"?"stop":"continue"}function*Fx(n,e,t){const i=n.play,s=n.f(e),r=n.defensePlayers().filter(a=>n.canAct(a.id)&&!a.s.tackled&&!a.s.declinedJump&&!n.isEngaged(a.id)&&(s.cannotTackleUntil[a.id]??0)<=i.slice&&!s.draggedBy.includes(a.id)&&at(a.pos,t)-qe<=xu+1e-6).map(a=>a.id);if(r.length===0)return"continue";const o=yield*n.ask({kind:"jumpTackle",coach:i.defense,carrier:e,candidates:r},"jumpTackle");if(o.defender===null||!r.includes(o.defender)){for(const a of r)n.f(a).s.declinedJump=!0;return"continue"}return n.log(`${n.short(o.defender)} jumps the ball carrier.`,"event"),yield*Qr(n,o.defender,e,{allowOutOfBounds:!0}),"stop"}function*Bx(n){const e=n.play;if(e.ball.loose)return;if(n.handoffPending()){const i=n.qb().id,s=e.handoff;if(yield*Rh(n,i,`Move the quarterback to hand off to ${n.short(s.runner)}`),e.result||e.ball.loose)return;if(n.gap(i,s.runner)>SS+1e-6){s.fumbled=!0,n.log(`${n.short(s.runner)} is more than 3 cm from the quarterback at the hand-off: FUMBLE!`,"event"),_a(n,n.f(s.runner).pos);return}n.log(`${n.short(i)} hands the ball to ${n.short(s.runner)}.`,"event"),s.fake?n.fakeHandoff(s.runner):(e.ball.carrier=s.runner,n.ballNowInPlay()),s.done=!0}const t=n.effectiveCarrier();t&&(yield*Rh(n,t,`Move the ball carrier ${n.short(t)}`))}function*Rh(n,e,t){const i=n.play,s=n.f(e);for(const c of n.defensePlayers())c.s.declinedJump=!1;for(const c of n.defensePlayers()){if(i.result)return;if(!(!c.s.clutchEligible||c.s.tackled)&&at(c.pos,s.pos)-qe<=da+1e-6&&(yield*Ch(n,c.id,e))==="stop")return}if(i.result||i.ball.loose)return;const r=i.handoff&&i.handoff.done&&i.handoff.slice===i.slice&&i.handoff.runner===e,o=()=>{let c;if(r){const l=n.offMarker(e);if(l.t==="run"){const u=n.runLaneTarget(l.side,l.lane);c=Et(n,e,n.allowance(e),{t:"fixed",angle:n.dirTo(n.f(e).pos,u)}),c.mandatory=!0,c.note=`Runs ${l.lane==="dive"?"the dive":l.lane==="offtackle"?"off tackle":"the sprint"} ${l.side}.`}else c=Et(n,e,n.allowance(e),{t:"free"})}else c=Et(n,e,n.allowance(e),{t:"free"});return s.draggedBy.length>0&&(c.note=`Dragging ${s.draggedBy.map(l=>n.short(l)).join(", ")}: movement halved.`),c};if(o().mode.t==="none"?n.log(`${n.short(e)} cannot move this timeslice.`,"info"):yield*xs(n,{coach:i.offense,phase:"ballCarrier",title:t,specs:()=>[o()],*run(c,l){const u=ui(n,c,l,{watches:Ox(n,e),stopY:qn,ignore:n.f(e).draggedBy});if("error"in u)return u.error;const h=u.plan,d=yield*ci(n,e,h,function*(g){return g.tag==="clutch"?yield*Ch(n,g.id,e):g.tag==="jump"?yield*Fx(n,e,n.f(e).pos):"continue"});if(i.result||i.ball.loose)return null;const f=n.f(e).pos;if(n.log(`${n.short(e)} runs ${n.f(e).s.movedCm.toFixed(1)} cm.`,"event"),!d.stopped){if(h.boundary==="left"||h.boundary==="right")return i.ball.apparent===e?(n.revealFake(),n.log(`${n.short(e)} runs out of bounds: he never had the ball.`,"event")):Hn(n,{kind:"outOfBounds"},f.y),null;if(h.boundary==="back")return i.ball.apparent!==e&&Hn(n,{kind:"outOfBounds"},f.y),null}return f.y>=qn-1e-6&&i.ball.carrier===e&&Hn(n,{kind:"touchdown",by:e},f.y),null}}),i.result||i.ball.loose)return;const a=n.f(e);for(const c of[...a.draggedBy]){if(i.result||i.ball.loose)return;if(!n.canAct(c)){a.draggedBy=a.draggedBy.filter(l=>l!==c);continue}Ap(n,c,e),n.f(c).s.tackled=!1,a.draggedBy=a.draggedBy.filter(l=>l!==c),n.log(`${n.short(c)}, dragged along, tries again.`,"event"),yield*Qr(n,c,e,{allowOutOfBounds:!0})}}function zc(n,e,t){const i=n.play,s=[],r=n.effectiveCarrier(),o=n.f(e);r&&t&&(n.f(r).cannotTackleUntil[e]??0)<=i.slice&&s.push({id:r,reach:qe+.05,tag:"carrier"});for(const[a,c]of Object.entries(i.designations))c===e&&(!n.has(a)||!va(n,a,e).ok||o.s.disengagedFrom.includes(a)||s.push({id:a,reach:qe+Ia,tag:"engage"}));return s}function*zx(n,e,t){const i=n.play;if(!va(n,e,t).ok)return"continue";const r=n.blockKind(e),o=n.f(t),a=Fc(n,e,t,Xs(n,e));if(!a||!(yield*n.ask({kind:"engageOffer",coach:i.offense,blocker:e,defender:t,stopAt:o.pos,kind2:r},"engageOffer")).accept)return"continue";const l=Ep(n,e,t,r,a);return yield*wp(n,l),"stop"}function*Hx(n){const e=n.play,t=n.effectiveInPlay(),i=n.effectiveCarrier(),s=()=>{const r=[];for(const o of n.defensePlayers()){const a=n.assignment(o.id),c=n.engagementOf(o.id);if(c){if(c.mayDisengage&&n.canAct(o.id)){const l=Et(n,o.id,Math.max(0,n.allowance(o.id)-FS),{t:"none",reason:"Engaged in a block; may disengage."});l.mayDisengage=!0,l.note="May disengage (-1 movement, not towards the blocker).",r.push(l)}continue}if(a.t==="blitz"){const l=Et(n,o.id,n.allowance(o.id),{t:"free"});!t&&i&&(l.notFartherFrom=i),l.mayTackle=!0,l.note=t?"Free defender.":"Blitzing: rushes the quarterback.",r.push(l)}else if(a.t==="free"){const l=Et(n,o.id,n.allowance(o.id),{t:"free"});l.mayTackle=!0,l.note="Free defender.",r.push(l)}else if(a.t==="spy"&&!t){const l=Et(n,o.id,n.allowance(o.id),{t:"none",reason:"A spy moves in the spy & zone phase unless he declares a blitz."});l.mayBlitz=!0,r.push(l)}}return r};yield*xs(n,{coach:e.defense,phase:"defenders",title:t?"Move free defenders":"Move blitzers",specs:s,declareBlitz(r){n.setAssignment(r.id,{t:"blitz"}),e.spyBlitz[r.id]=!0,n.f(r.id).s.moved=!1,n.log(`${n.short(r.id)} abandons the spy and blitzes.`,"event")},*disengage(r,o){const a=n.engagementOf(r.id),c=n.f(r.id),l=Nc(ot(c.pos,n.f(a.blockers[0]).pos)),u=ot(o,c.pos);if(Math.hypot(u.x,u.y)>1e-6&&En(Nc(u),l)<-1e-6)return"A disengaging defender may not move closer to the blocker.";const h=[...a.blockers];n.removeEngagement(a),c.s.disengagedFrom=h,n.log(`${n.short(r.id)} disengages from ${h.map(g=>n.short(g)).join(" and ")}.`,"event");const d={...r,mode:{t:"free"}},f=ui(n,d,o,{watches:zc(n,r.id,!0),passThrough:h});return"error"in f?f.error:(yield*ci(n,r.id,f.plan,function*(g){return yield*Hc(n,r.id,g)}),null)},*run(r,o){const a=ui(n,r,o,{watches:zc(n,r.id,r.mayTackle??!1)});return"error"in a?a.error:(yield*ci(n,r.id,a.plan,function*(c){return yield*Hc(n,r.id,c)}),e.result||n.log(`${n.short(r.id)} moves ${n.f(r.id).s.movedCm.toFixed(1)} cm.`,"event"),null)}})}function*Hc(n,e,t){if(t.tag==="engage")return yield*zx(n,t.id,e);if(t.tag==="carrier"){const i=n.effectiveCarrier();return!i||i!==t.id?"continue":(yield*Qr(n,e,i,{allowOutOfBounds:!0}),"stop")}return"continue"}function Gx(n,e,t){const i=n.towardsCenterSign(e);switch(t){case"fly":return{from:-Si,to:Si,label:"fly cut (straight upfield)"};case"hook":return{from:xi,to:-xi,label:"hook cut (back towards the quarterback)"};case"in":return i>0?{from:Si,to:xi,label:"cut in (towards the middle)"}:{from:-xi,to:-Si,label:"cut in (towards the middle)"};case"out":return i>0?{from:-xi,to:-Si,label:"cut out (towards the sideline)"}:{from:Si,to:xi,label:"cut out (towards the sideline)"}}}function Vx(n,e){const t=n.play,i=n.f(e),s=n.effectiveOffMarker(e),r=n.allowance(e),o=i.sidelineSlice!==null&&i.sidelineSlice===t.slice-1,a=i.sidelineSlice!==null&&i.sidelineSlice<t.slice-1,c=s.t==="cut"||s.t==="runblock";if(o&&!c)return Et(n,e,0,{t:"none",reason:"Reached the sideline last timeslice: waits here."});if(i.cutSlice!==null&&i.cutSlice<t.slice)return a?Et(n,e,r,{t:"along",angle:0,label:"along the sideline"}):Et(n,e,r,{t:"fixed",angle:i.routeDir??0});switch(s.t){case"dir":return s.dir==="up"?Et(n,e,r,{t:"sector",from:-ah,to:ah,label:"up (within 5°)"}):Et(n,e,r,{t:"fixed",angle:s.dir==="left"?-s.angle:s.angle});case"continue":return a?Et(n,e,r,{t:"along",angle:0,label:"along the sideline"}):i.routeDir===null?Et(n,e,0,{t:"none",reason:"No direction to continue in."}):Et(n,e,r,{t:"fixed",angle:i.routeDir});case"delay":return Et(n,e,Math.min(lp,r),{t:"free"});case"cut":{const l=Et(n,e,r,{t:"sector",...Gx(n,i.pos,s.cut)});return l.cutPending=!0,l}case"run":return Et(n,e,r,{t:"fixed",angle:i.routeDir??0});default:return a&&i.routeDir!==null?Et(n,e,r,{t:"along",angle:0,label:"along the sideline"}):Et(n,e,0,{t:"none",reason:t.slice>4?"No route to follow.":"No movement marker this timeslice."})}}function*kh(n,e,t){const i=n.play;for(const s of n.defensePlayers()){if(i.result)return;const r=n.assignment(s.id);if(r.t!=="man"||r.target!==e||!n.canAct(s.id)||n.isEngaged(s.id)||s.s.moved)continue;const o=n.roll(s.id,"cover",0,"COVER (coverage movement)");if(o.critical){s.s.noMove=!0,s.s.contestModifier+=HS,n.log(`${n.short(s.id)} loses his man completely: no movement, -5 to contest.`,"event"),s.s.moved=!0;continue}o.success||(s.s.speedPenalty+=BS,s.s.contestModifier+=zS,n.log(`${n.short(s.id)} has trouble following: -2 movement, -2 to contest.`,"event")),t&&(s.s.speedPenalty+=VS);const a=()=>{const c=Et(n,s.id,n.allowance(s.id),{t:"free"});return c.notFartherFrom=e,c.mayTackle=n.effectiveCarrier()===e,c.note=`Man coverage on ${n.short(e)}.`,[c]};yield*xs(n,{coach:i.defense,phase:"receivers",title:`Man coverage: ${n.short(s.id)} follows ${n.short(e)}`,specs:a,*run(c,l){const u=ui(n,c,l,{watches:zc(n,s.id,c.mayTackle??!1)});return"error"in u?u.error:(yield*ci(n,s.id,u.plan,function*(h){return yield*Hc(n,s.id,h)}),null)},*finishRemaining(c){for(const l of c)n.f(l.id).s.moved=!0}}),s.s.moved=!0}}function*Wx(n){const e=n.play,t=n.effectiveCarrier(),i=o=>n.def(o).position!=="QB"&&o!==t&&!n.blockKind(o)&&!n.isEngaged(o)&&e.ball.carrier!==o,s=()=>n.offensePlayers().filter(o=>i(o.id)).map(o=>Vx(n,o.id)),r=function*(o,a){const c=n.f(o.id);let l=!1,u=o;if(a!==null&&u.mode.t!=="none"){const h=n.effectiveOffMarker(o.id);if(u.cutPending&&h.t==="cut"){const _=c.pos,v=kp(n,u,_,a);if("error"in v)return v.error;const p=n.roll(o.id,"routes",0,`ROUTES (cut ${h.cut})`);if(c.cutSlice=e.slice,c.sidelineSlice=null,p.critical)return c.s.noMove=!0,n.log(`${n.short(o.id)} stumbles on his cut and may not move.`,"event"),c.s.moved=!0,c.routeDir=Tn(ot(v.to,_)),yield*kh(n,o.id,!1),null;p.success||(c.s.speedPenalty+=GS,n.log(`${n.short(o.id)} makes a sloppy cut: -2 movement.`,"event")),p.perfect&&(l=!0,n.log(`${n.short(o.id)} makes a PERFECT cut: his man loses a step.`,"event")),u={...u,allowance:n.allowance(o.id)}}const d=ui(n,u,a,{});if("error"in d)return d.error;const f=c.pos;yield*ci(n,o.id,d.plan);const g=ot(c.pos,f);Math.hypot(g.x,g.y)>1e-6&&u.mode.t!=="free"?c.routeDir=Tn(g):u.mode.t==="fixed"?c.routeDir=u.mode.angle:u.mode.t==="sector"&&Math.hypot(g.x,g.y)>1e-6&&(c.routeDir=Tn(g)),(d.plan.boundary==="left"||d.plan.boundary==="right")&&(c.sidelineSlice=e.slice,n.log(`${n.short(o.id)} reaches the sideline and stops.`,"event")),n.log(`${n.short(o.id)} runs ${c.s.movedCm.toFixed(1)} cm.`,"event")}return c.s.moved=!0,yield*kh(n,o.id,l),null};yield*xs(n,{coach:e.offense,phase:"receivers",title:"Move receivers (any order); man coverage follows each",specs:s,*run(o,a){return yield*r(o,a)},*skip(o){yield*r(o,null)},*finishRemaining(o){for(const a of o)yield*r(a,null)}});for(const o of s())o.done||(yield*r(o,null))}function*$x(n){const e=n.play;if(n.effectiveInPlay())return;const t=n.effectiveCarrier();for(const r of n.defensePlayers()){if(n.assignment(r.id).t!=="spy"||n.isEngaged(r.id)||r.s.moved||!n.canAct(r.id))continue;const a={x:t?n.f(t).pos.x:n.qb().pos.x,y:e.los+4},c=Mp(n.moveCtx(),r.id,a,{allowance:n.allowance(r.id)});c.events=c.events.filter(l=>l.kind!=="hole"),yield*ci(n,r.id,c),n.log(`${n.short(r.id)} spies the backfield.`,"event")}const i=r=>n.defensePlayers().filter(o=>{const a=n.assignment(o.id);return a.t==="zone"&&a.zone.zone===r.zone&&(r.zone==="hook"||r.zone==="deep")}).sort((o,a)=>o.pos.x-a.pos.x).map(o=>o.id),s=()=>n.defensePlayers().filter(r=>n.assignment(r.id).t==="zone"&&!n.isEngaged(r.id)).map(r=>{const o=n.assignment(r.id),a=Et(n,r.id,n.allowance(r.id,{zone:!0}),{t:"zone",zone:o.zone,label:n.zoneLabel(o.zone)});return a.note=n.inZone(r.pos,o.zone)?`In his ${n.zoneLabel(o.zone)} zone.`:`Moving to his ${n.zoneLabel(o.zone)} zone.`,a});yield*xs(n,{coach:e.defense,phase:"zones",title:"Zone coverage: move defenders within (or towards) their zones",specs:s,*run(r,o){const a=n.assignment(r.id),c=i(a.zone),l=ui(n,r,o,{});if("error"in l)return l.error;if(c.length>1){const u=c.indexOf(r.id),h=u>0?n.f(c[u-1]).pos.x:-1/0,d=u<c.length-1?n.f(c[u+1]).pos.x:1/0;if(l.plan.to.x<h||l.plan.to.x>d)return`Defenders sharing the ${a.zone} zone may not cross each other laterally.`}return yield*ci(n,r.id,l.plan),null}})}function*Xx(n){const e=n.play;for(const t of["defense","offense"]){const i=n.coachOf(t),s=()=>n.onField(t).filter(r=>!n.isEngaged(r.id)).map(r=>Et(n,r.id,n.allowance(r.id),{t:"free"}));if(yield*xs(n,{coach:i,phase:"looseBall",title:`Loose ball: ${t} moves players towards it`,specs:s,*run(r,o){const a=ui(n,r,o,{});return"error"in a?a.error:(yield*ci(n,r.id,a.plan),null)}}),e.result)return}}const Ai=1e-4;function ya(n,e,t="right"){const i=n-ge,s=[];for(let r=0;r<5;r++)s.push({x:Nt+(r-2)*qe,y:i});return e===6&&(t==="left"?s.unshift({x:Nt-3*qe,y:i}):s.push({x:Nt+3*qe,y:i})),s}function Ba(n,e){return{x:Nt,y:n-ge-qe-e}}function Pp(n,e){return n.x>=ge-Ai&&n.x<=Ke-ge+Ai&&n.y>=e+ge-Ai&&n.y<=Yt-ge+Ai}function Gc(n,e){return at(n,e)<qe-Ai}function Yx(n,e,t,i){const s=[],r=new Map(n.map(d=>[d.id,d]));e.length!==11&&s.push({player:null,text:`The offense must field exactly 11 players (${e.length} placed).`});const o=new Set,a=[];for(const d of e){const f=r.get(d.id);if(!f){s.push({player:d.id,text:`${d.id} is not on the offensive roster.`});continue}o.has(d.id)&&s.push({player:d.id,text:`${f.name} is placed twice.`}),o.add(d.id),a.push({def:f,pos:d.pos})}const c=d=>a.filter(f=>f.def.position===d).length;c("QB")!==1&&s.push({player:null,text:"Exactly one quarterback must be on the field."});const l=c("OL");l!==5&&l!==6&&s.push({player:null,text:"Five offensive linemen must be on the field (six at most)."});const u=a.filter(d=>d.def.position==="OL").sort((d,f)=>d.pos.x-f.pos.x);if(l===5||l===6){const d=ya(t,l,"left"),f=ya(t,l,"right"),g=_=>u.every((v,p)=>at(v.pos,_[p])<.05);!g(d)&&!g(f)&&s.push({player:null,text:"The offensive line must stand touching, centred on the field, with their front edge on the line of scrimmage."})}const h=a.find(d=>d.def.position==="QB");if(h){const f=Ba(t,0).y-h.pos.y;Math.abs(h.pos.x-Nt)>.05&&s.push({player:h.def.id,text:"The quarterback must line up directly behind the centre."}),(f<-Ai||f>sp+Ai)&&s.push({player:h.def.id,text:"The quarterback may be under centre or up to 4 cm behind the line."})}for(const d of a)d.pos.y>t-ge+Ai&&s.push({player:d.def.id,text:`${d.def.name} must be behind the line of scrimmage.`}),Pp(d.pos,i)||s.push({player:d.def.id,text:`${d.def.name} is out of bounds.`});for(let d=0;d<a.length;d++)for(let f=d+1;f<a.length;f++)Gc(a[d].pos,a[f].pos)&&s.push({player:a[d].def.id,text:`${a[d].def.name} overlaps ${a[f].def.name}.`});return s}function qx(n,e,t,i){const s=[],r=new Map(n.map(l=>[l.id,l]));e.length!==11&&s.push({player:null,text:`The defense must field exactly 11 players (${e.length} placed).`});const o=new Set,a=[];for(const l of e){const u=r.get(l.id);if(!u){s.push({player:l.id,text:`${l.id} is not on the defensive roster.`});continue}o.has(l.id)&&s.push({player:l.id,text:`${u.name} is placed twice.`}),o.add(l.id),a.push({def:u,pos:l.pos})}const c=l=>a.filter(u=>u.def.position===l).length;c("DL")<3&&s.push({player:null,text:"At least three defensive linemen must be on the field."}),c("LB")<1&&s.push({player:null,text:"At least one linebacker must be on the field."});for(const l of a){l.pos.y<t+ge-Ai&&s.push({player:l.def.id,text:`${l.def.name} must be on the defensive side of the line of scrimmage.`}),Pp(l.pos,0)||s.push({player:l.def.id,text:`${l.def.name} is out of bounds.`});for(const u of i)Gc(l.pos,u)&&s.push({player:l.def.id,text:`${l.def.name} overlaps an offensive player.`})}for(let l=0;l<a.length;l++)for(let u=l+1;u<a.length;u++)Gc(a[l].pos,a[u].pos)&&s.push({player:a[l].def.id,text:`${a[l].def.name} overlaps ${a[u].def.name}.`});return s}function Lp(n,e,t,i,s,r){return n==="offense"?Yx(e,t,i,s):qx(e,t,i,r)}const dt=(n,e,t,i)=>({positions:n,dx:e,dy:t,label:i}),ni=[{name:"I formation",side:"offense",qbDepth:0,linemen:5,slots:[dt(["FB","RB","TE"],0,-7.5,"FB"),dt(["RB","FB","WR"],0,-11,"RB"),dt(["TE","WR","FB"],8.75,-1.25,"TE"),dt(["WR","TE","RB"],-22,-1.25,"WR"),dt(["WR","TE","RB"],22,-2.75,"WR")]},{name:"Singleback",side:"offense",qbDepth:0,linemen:5,slots:[dt(["RB","FB","WR"],0,-9.5,"RB"),dt(["TE","WR","FB"],8.75,-1.25,"TE"),dt(["WR","TE","RB"],-23,-1.25,"WR"),dt(["WR","TE","RB"],23,-2.75,"WR"),dt(["WR","TE","RB"],-14,-2.75,"WR")]},{name:"Shotgun spread",side:"offense",qbDepth:4,linemen:5,slots:[dt(["RB","FB","WR"],4.5,-8.5,"RB"),dt(["WR","TE","RB"],-24,-1.25,"WR"),dt(["WR","TE","RB"],24,-1.25,"WR"),dt(["WR","TE","RB"],-15,-2.75,"WR"),dt(["WR","TE","RB"],15,-2.75,"WR")]},{name:"Trips right",side:"offense",qbDepth:4,linemen:5,slots:[dt(["RB","FB","WR"],-4.5,-8.5,"RB"),dt(["WR","TE","RB"],-24,-1.25,"WR"),dt(["WR","TE","RB"],24,-1.25,"WR"),dt(["WR","TE","RB"],18,-2.75,"WR"),dt(["TE","WR","RB"],12,-4,"TE")]},{name:"Empty",side:"offense",qbDepth:4,linemen:5,slots:[dt(["WR","TE","RB"],-25,-1.25,"WR"),dt(["WR","TE","RB"],25,-1.25,"WR"),dt(["WR","TE","RB"],-16,-2.75,"WR"),dt(["WR","TE","RB"],16,-2.75,"WR"),dt(["TE","RB","WR"],9,-4,"TE")]},{name:"Jumbo (6 linemen)",side:"offense",qbDepth:0,linemen:6,extraLinemanSide:"right",slots:[dt(["FB","RB","TE"],0,-6.5,"FB"),dt(["RB","FB","WR"],0,-10,"RB"),dt(["TE","WR","FB"],11.25,-1.25,"TE"),dt(["TE","WR","RB"],-8.75,-1.25,"TE")]}],ye=dt,Fn=[{name:"4-3",side:"defense",slots:[ye(["DL"],-7.5,1.25,"DE"),ye(["DL"],-2.5,1.25,"DT"),ye(["DL"],2.5,1.25,"DT"),ye(["DL"],7.5,1.25,"DE"),ye(["LB","S"],-7,6,"WLB"),ye(["LB"],0,6,"MLB"),ye(["LB","S"],7,6,"SLB"),ye(["CB","S"],-22,6,"CB"),ye(["CB","S"],22,6,"CB"),ye(["S","CB"],-10,14,"FS"),ye(["S","CB"],10,14,"SS")]},{name:"3-4",side:"defense",slots:[ye(["DL"],-5,1.25,"DE"),ye(["DL"],0,1.25,"NT"),ye(["DL"],5,1.25,"DE"),ye(["LB","S"],-10,3,"OLB"),ye(["LB"],-3.5,6,"ILB"),ye(["LB","S"],3.5,6,"ILB"),ye(["LB","S"],10,3,"OLB"),ye(["CB","S"],-22,6,"CB"),ye(["CB","S"],22,6,"CB"),ye(["S","CB"],-9,14,"FS"),ye(["S","CB"],9,14,"SS")]},{name:"Nickel 4-2-5",side:"defense",slots:[ye(["DL"],-7.5,1.25,"DE"),ye(["DL"],-2.5,1.25,"DT"),ye(["DL"],2.5,1.25,"DT"),ye(["DL"],7.5,1.25,"DE"),ye(["LB"],-4,6,"LB"),ye(["LB","S"],4,6,"LB"),ye(["CB","S"],-23,6,"CB"),ye(["CB","S"],23,6,"CB"),ye(["CB","S"],-14,6,"NB"),ye(["S","CB"],-8,15,"FS"),ye(["S","CB"],10,14,"SS")]},{name:"Dime 4-1-6",side:"defense",slots:[ye(["DL"],-7.5,1.25,"DE"),ye(["DL"],-2.5,1.25,"DT"),ye(["DL"],2.5,1.25,"DT"),ye(["DL"],7.5,1.25,"DE"),ye(["LB"],0,6,"LB"),ye(["CB","S"],-23,6,"CB"),ye(["CB","S"],23,6,"CB"),ye(["CB","S"],-14,6,"NB"),ye(["CB","S"],14,6,"DB"),ye(["S","CB"],-8,16,"FS"),ye(["S","CB"],8,16,"SS")]},{name:"Goal line 5-3",side:"defense",slots:[ye(["DL"],-10,1.25,"DE"),ye(["DL"],-5,1.25,"DT"),ye(["DL"],0,1.25,"NT"),ye(["DL"],5,1.25,"DT"),ye(["DL","LB"],10,1.25,"DE"),ye(["LB"],-6,5,"LB"),ye(["LB","S"],0,5,"MLB"),ye(["LB","S"],6,5,"LB"),ye(["CB","S"],-20,3,"CB"),ye(["CB","S"],20,3,"CB"),ye(["S","CB"],0,10,"S")]},{name:"Prevent 3-1-7",side:"defense",slots:[ye(["DL"],-5,1.25,"DE"),ye(["DL"],0,1.25,"NT"),ye(["DL"],5,1.25,"DE"),ye(["LB"],0,7,"LB"),ye(["CB","S"],-24,8,"CB"),ye(["CB","S"],24,8,"CB"),ye(["CB","S"],-14,9,"NB"),ye(["CB","S","LB"],14,9,"DB"),ye(["S","CB"],-14,20,"S"),ye(["S","CB"],0,22,"S"),ye(["S","CB"],14,20,"S")]}];function ba(n,e,t,i){const s=new Set,r=c=>{for(const l of c){const u=e.find(h=>h.position===l&&!s.has(h.id));if(u)return s.add(u.id),u}},o=[],a={x:Nt,y:t};if(n.side==="offense"){const c=n.linemen??5,l=ya(t,c,n.extraLinemanSide??"right");for(const h of l){const d=r(["OL"]);d&&o.push({id:d.id,pos:h})}const u=r(["QB"]);u&&o.push({id:u.id,pos:Ba(t,n.qbDepth??0)})}for(const c of n.slots){const l=r(c.positions);if(!l)continue;let u={x:a.x+c.dx,y:a.y+c.dy};u={x:Math.min(Ke-ge,Math.max(ge,u.x)),y:Math.min(Yt-ge,Math.max(i+ge,u.y))},o.push({id:l.id,pos:u})}return o}function Kx(n,e){const t=new Set(e);return n.filter(i=>!t.has(i.id))}function Zx(n,e){return n.offensePlayers().filter(t=>t.id!==e&&t.pancakedSlice===null&&!n.isEngaged(t.id)).map(t=>t.id)}function Jx(n){const e=n.play,t=e.ball.carrier;return t?n.def(t).position!=="QB"?{ok:!1,reason:"Only the quarterback passes."}:e.ball.passed?{ok:!1,reason:"The ball has already been thrown."}:e.ball.inPlay?{ok:!1,reason:"The ball is in play."}:e.slice===1&&n.marker(t,2).t==="handoff"?{ok:!1,reason:"A draw play may not pass in timeslice 1 (p. 53)."}:n.handoffPending()?{ok:!1,reason:"The ball is being handed off."}:n.f(t).pos.y>=e.los?{ok:!1,reason:"The quarterback is past the line of scrimmage."}:n.canAct(t)?{ok:!0}:{ok:!1,reason:"The quarterback is down."}:{ok:!1,reason:"Nobody has the ball."}}function jx(n){const e=n.play,t=e.ball.carrier,i=n.f(t),s=e.slice<=4?n.offMarker(t):{t:"filler"},r=s.t==="read"?s.target:null,o=n.skill(t,"arm"),a=n.skill(t,"poise"),c=n.defendersWithin(t,rp).length,l=Math.max(0,c-a),u=i.s.movedCm,h=[];for(const d of Zx(n,t)){const f=n.f(d),g=at(i.pos,f.pos)-qe,_=ZS(g),v=Math.max(0,_-o),p=[],b=r===d;b||p.push({label:e.slice>4?"No read (play broke down)":"Not the read",value:AS}),dh(v)!==0?p.push({label:`Range group ${_}${o?` -${Math.min(o,_)} arm = ${v}`:""}`,value:dh(v)}):_>0&&p.push({label:`Range group ${_} - ${o} arm = 0`,value:0}),l>0&&p.push({label:`Pressure: ${c} defender${c>1?"s":""} within 3 cm${a?`, ${a} ignored (poise)`:""}`,value:l*CS}),u>=.05&&p.push({label:`Moved ${Math.round(u*10)/10} cm`,value:Math.round(u*10)/10*RS});const S=p.reduce((x,A)=>x+A.value,0);h.push({target:d,distanceCm:Math.round(g*100)/100,modifiers:p,total:Math.round(S*100)/100,isRead:b})}return h}function Qx(n,e,t){const i=n.f(e),s=[];i.cutSlice===null&&s.push({label:"Before his cut",value:kS}),t||s.push({label:"Inaccurate pass",value:PS});const r=n.defendersWithin(e,xS).length;return r===0?s.push({label:"Open receiver",value:LS}):s.push({label:`Traffic: ${r} defender${r>1?"s":""} within 3 cm`,value:r*DS}),s}function*Dp(n){const e=n.play,t=Jx(n);if(!t.ok)return;const i=jx(n),s=yield*n.ask({kind:"pass",coach:e.offense,options:i,mayPass:t.ok,reason:t.reason},"pass");if(s.target===null){n.log(t.ok?"The quarterback holds the ball.":`No pass: ${t.reason}`,"info");return}const r=i.find(o=>o.target===s.target);if(!r)return n.log("That receiver cannot be thrown to.","warning"),yield*Dp(n);yield*eM(n,r)}function*eM(n,e){const t=n.play,i=t.ball.carrier,s=e.target;t.ball.passed=!0;const r=`ACCURACY (${e.modifiers.map(A=>`${A.label} ${A.value>=0?"+":""}${A.value}`).join("; ")||"no modifiers"})`,a=n.roll(i,"accuracy",Math.round(e.total),r).success;n.log(`${n.short(i)} throws to ${n.short(s)} (${e.distanceCm} cm): ${a?"an accurate pass":"an INACCURATE pass"}.`,"event");const c=n.defendersWithin(s,op).filter(A=>n.canAct(A.id)&&!n.isEngaged(A.id)).map(A=>A.id);let l={};if(c.length>0){const A=yield*n.ask({kind:"contest",coach:t.defense,receiver:s,defenders:c},"contest");for(const w of c)l[w]=A.choices[w]==="cleanShot"?"cleanShot":"contest"}const u=c.filter(A=>l[A]==="contest"),h=c.filter(A=>l[A]==="cleanShot"),d=Qx(n,s,a),f=d.reduce((A,w)=>A+w.value,0),g=n.roll(s,"catching",f,`CATCHING (${d.map(A=>`${A.label} ${A.value>=0?"+":""}${A.value}`).join("; ")})`);let _=g.successRate;g.perfect&&(_=n.skill(s,"catching")+US,n.log(`A PERFECT catch: his successrate counts as ${_}.`,"event"));const v=g.critical;v&&n.log(`${n.short(s)} bats the ball up in the air!`,"event");let p=g.success,b=null;if(u.length>0){let A=0,w=null,k=g.perfect;for(const I of u){const T=n.f(I),E=n.roll(I,"cover",T.s.contestModifier,T.s.contestModifier?`COVER (coverage check ${T.s.contestModifier})`:"COVER");E.critical&&(t.dpi=!0,n.log(`${n.short(I)} commits DEFENSIVE PASS INTERFERENCE.`,"event")),A+=E.successRate;const D=v?lh/2:lh;(E.perfect||E.success&&E.successRate>=_+D)&&!(E.perfect&&k)?(!w||E.successRate>w.sr)&&(w={id:I,sr:E.successRate}):E.perfect&&k&&(n.log("Both rolled a PERFECT: the ball falls incomplete.","event"),p=!1,A=Math.max(A,_))}w?(b=w.id,p=!1):A>=_?(p=!1,n.log(`The pass is defended (${A} vs ${_}).`,"event")):(p=!0,n.log(`${n.short(s)} wins the contested catch (${_} vs ${A}).`,"event"))}if(b){const A=n.f(b);n.log(`INTERCEPTION by ${n.short(b)}!`,"event");const w=Rp(n,b,A.pos.y);Hn(n,{kind:"interception",by:b,returnYards:w.yards,touchdown:w.touchdown},w.spotY);return}if(!p){const A=n.f(s);Hn(n,{kind:"incomplete"},A.pos.y);return}const S=n.f(s);if(t.ball.carrier=s,n.ballNowInPlay(),n.log(`${n.short(s)} catches the ball.`,"event"),n.sidelineGap(S.pos)<=MS+1e-6){const A=n.roll(s,"agility",0,"AGILITY (feet in bounds)");if(!A.success){n.log(`${n.short(s)} does not get both feet down: incomplete.`,"event"),t.ball.carrier=i,t.ball.inPlay=!1,t.ball.inPlaySlice=null,Hn(n,{kind:"incomplete"},S.pos.y);return}if(A.successRate<=5){n.log(`${n.short(s)} gets both feet down before going out: the ball is spotted where he caught it.`,"event"),Hn(n,{kind:"outOfBounds"},S.pos.y);return}}if(S.pos.y>=qn){Hn(n,{kind:"touchdown",by:s},S.pos.y);return}let x=h.filter(A=>n.canAct(A)&&!n.f(A).s.tackled);for(;x.length>0&&!t.result;){const A=yield*n.ask({kind:"cleanShot",coach:t.defense,carrier:s,tacklers:x},"cleanShot");if(A.tackler===null||!x.includes(A.tackler))break;const w=yield*Qr(n,A.tackler,s,{cleanShot:!0});if(x=x.filter(k=>k!==A.tackler),w==="down"||w==="fumble")break}}function tM(n){const e=n.play.ball.loose;return e?!Object.values(n.play.players).some(t=>t.pancakedSlice===null&&at(t.pos,e)-ge<=ap+1e-6):!0}function Ip(n){return{kind:n.kind,offense:n.offense,defense:kn(n.offense),los:n.los,lineToGainY:n.lineToGainY,boardMinY:n.boardMinY,slice:0,phase:"lineupOffense",players:{},markers:{},revealed:{offense:0,defense:0},ball:{carrier:null,apparent:null,inPlay:!1,inPlaySlice:null,loose:null,passed:!1},engagements:[],nextEngagementId:1,designations:{},assignments:{},switchDecided:{},spyBlitz:{},handoff:null,dpi:!1,result:null,trails:{}}}function Vc(n,e,t){return{id:n,side:e,pos:{...t},facing:e==="offense"?0:180,pancakedSlice:null,sidelineSlice:null,routeDir:null,cutSlice:null,cannotTackleUntil:{},draggedBy:[],halvedNext:!1,nextSlicePenalty:0,cannotEngageUntil:{},freeSince:null,s:gp()}}function*Ph(n,e){const t=n.play,i=n.coachOf(e),s=e==="offense"?n.team(i).offense:n.team(i).defense;t.phase=e==="offense"?"lineupOffense":"lineupDefense";let r;for(;;){const o=yield*n.ask({kind:"lineup",coach:i,side:e,los:t.los,error:r},"lineup"),a=n.offensePlayers().map(l=>l.pos),c=Lp(e,s,o.placements,t.los,t.boardMinY,a);if(c.length>0){r=c.slice(0,3).map(l=>l.text).join(" ");continue}for(const l of o.placements)t.players[l.id]=Vc(l.id,e,l.pos);n.log(`${n.team(i).name} ${e} lines up.`,"phase");return}}function*Lh(n,e){const t=n.play,i=n.coachOf(e),s=e==="offense"?ai:fr,r=n.onField(e).map(a=>n.def(a.id));t.phase="markers";let o;for(;;){const a=yield*n.ask({kind:"markers",coach:i,side:e,slots:s,error:o},"markers"),c=Eu(e,r,a.markers);if(vx(c)){o=c.filter(l=>l.severity==="error").slice(0,3).map(l=>l.text).join(" ");continue}for(const l of r)t.markers[l.id]=xt(a.markers[l.id],s);n.log(`${n.team(i).name} ${e} has placed its markers.`,"phase");return}}function*nM(n){const e=n.play;if(e.phase="defenseReveal",e.slice>fr)return;e.revealed.defense=e.slice,n.log(`Timeslice ${e.slice}: the defense reveals its markers.`,"phase");const t=n.offensePlayers().filter(i=>n.def(i.id).position!=="QB").map(i=>i.id);for(const i of n.defensePlayers().sort((s,r)=>s.id.localeCompare(r.id))){const s=n.marker(i.id);switch(s.t){case"filler":break;case"man":{let r;for(;;){const o=yield*n.ask({kind:"manTarget",coach:e.defense,defender:i.id,options:t,error:r},"manTarget");if(!t.includes(o.target)){r="Designate an offensive player other than the quarterback.";continue}n.setAssignment(i.id,{t:"man",target:o.target}),n.log(`${n.short(i.id)} is in MAN coverage on ${n.short(o.target)}.`,"event");break}break}case"zone":{const r=s.zone==="flat"||s.zone==="curl"?{zone:s.zone,side:s.side}:{zone:s.zone};n.setAssignment(i.id,{t:"zone",zone:r}),n.log(`${n.short(i.id)} drops into the ${n.zoneLabel(r)} zone.`,"event");break}case"spy":n.setAssignment(i.id,{t:"spy"}),n.log(`${n.short(i.id)} spies the backfield.`,"event");break;case"blitz":n.setAssignment(i.id,{t:"blitz"}),n.log(`${n.short(i.id)} BLITZES.`,"event");break}}e.slice===1&&(yield*Ix(n))}function*iM(n){const e=n.play;e.phase="offenseReveal",e.slice<=ai&&(e.revealed.offense=e.slice,n.log(`Timeslice ${e.slice}: the offense reveals its markers.`,"phase")),e.ball.apparent!==null&&e.handoff&&e.handoff.fake&&e.slice>e.handoff.slice&&(n.revealFake(),n.log(`PLAY ACTION: ${n.short(e.ball.carrier)} still has the ball!`,"event"));const t=n.qb(),i=n.marker(t.id);if(i.t==="handoff"&&e.slice<=2){const s=n.marker(i.target),r=e.slice<ai&&n.marker(t.id,e.slice+1).t!=="filler";e.handoff={slice:e.slice,runner:i.target,fake:r,done:!1,fumbled:!1};const o=n.f(i.target);if(s.t!=="run"){e.handoff.fumbled=!0,n.log(`${n.short(t.id)} hands off to ${n.short(i.target)}, who was not expecting it: FUMBLE!`,"event"),_a(n,o.pos);return}o.routeDir=n.dirTo(o.pos,n.runLaneTarget(s.side,s.lane)),n.log(`${n.short(t.id)} turns to hand the ball to ${n.short(i.target)}.`,"event")}for(const s of n.offensePlayers()){if(e.ball.loose)break;n.marker(s.id).t==="run"&&e.slice<=2&&!(i.t==="handoff"&&i.target===s.id)&&(n.log(`${n.short(s.id)} runs for a hand-off that never comes: FUMBLE!`,"event"),_a(n,s.pos))}if(!e.ball.loose)for(const s of n.offensePlayers()){const r=n.effectiveOffMarker(s.id);if(!(r.t!=="passblock"&&r.t!=="runblock"))for(const o of n.defensePlayers()){const a=n.markerAssignment(o.id);if(a.t!=="man"||a.target!==s.id)continue;if(r.t==="runblock"){n.freeDefender(o.id,"his man run blocks");continue}if(e.switchDecided[o.id]||n.f(o.id).freeSince!==null)continue;const c=yield*n.ask({kind:"switchOption",coach:e.defense,defender:o.id,target:s.id},"switchOption");e.switchDecided[o.id]=!0,c.choice.t==="blitz"?(n.setAssignment(o.id,{t:"blitz"}),n.log(`${n.short(o.id)} switches from man coverage to a BLITZ.`,"event")):c.choice.t==="zone"?(n.setAssignment(o.id,{t:"zone",zone:c.choice.zone}),n.log(`${n.short(o.id)} switches from man coverage to the ${n.zoneLabel(c.choice.zone)} zone.`,"event")):n.log(`${n.short(o.id)} stays in man coverage on the pass blocker.`,"event")}}}function*Mr(n){const e=n.play;if(e.result)return"over";if(!e.ball.loose)return"continue";const t=yield*Cp(n);return e.result?"over":t==="none"?"skipSlice":"continue"}function*Dh(n,e,t){const i=Ip(t);n.play=i;const s=new Tu(n,i,e);for(yield*Ph(s,"offense"),yield*Ph(s,"defense"),i.ball.carrier=s.qb().id,yield*Lh(s,"offense"),yield*Lh(s,"defense"),s.log("The ball is snapped.","phase");!i.result;){if(s.startSlice(),i.ball.loose){if(i.phase="looseBall",yield*Xx(s),i.result)break;const o=yield*Cp(s);if(i.result)break;if(o==="offense"&&s.log(`${s.short(i.ball.carrier)} has the ball; play on.`,"event"),o==="none"&&tM(s)){s.log("Nobody can get to the loose ball: it is dead where it lies.","event");const a=i.ball.loose;i.ball.loose=null,Hn(s,{kind:"outOfBounds"},a.y);break}continue}yield*nM(s),yield*iM(s);let r=yield*Mr(s);if(r!=="continue"){if(r==="over")break;continue}if(i.phase="freeBlockers",yield*Nx(s),i.phase="resolveBlocks",yield*Ux(s),i.result)break;if(i.phase="ballCarrier",yield*Bx(s),r=yield*Mr(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="defenders",yield*Hx(s),r=yield*Mr(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="receivers",yield*Wx(s),r=yield*Mr(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="zones",yield*$x(s),i.result||(i.phase="pass",yield*Dp(s),r=yield*Mr(s),r==="over"))break}return i.phase="over",i.result}function Np(n){return{config:n,score:{home:0,away:0},stage:"pregame",possession:"home",ballOn:75,down:1,lineToGain:65,drive:null,drives:{home:0,away:0},clock:{drivesCompleted:0,mode:n.gameType==="full"?"drives":"none",snapsLeft:null},overtime:{active:!1,possessions:{home:0,away:0},classic:!1},kickoffBy:null,receivedFirst:null,play:null,lastResult:null,log:[],winner:null,snaps:0}}class sM{constructor(e,t){this.s=e,this.rng=t}s;rng;log(e,t="info",i){this.s.log.push({n:this.s.log.length+1,text:e,kind:t,coach:i})}team(e){return this.s.config.teams[e]}name(e){return this.team(e).name}boardMinY(e){switch(this.s.config.fieldSize){case"full":return 0;case"half":return Math.min(Vs(mh),e??1/0)-vh;case"redzone":return Math.min(Vs(gh),e??1/0)-vh}}startSpot(){switch(this.s.config.fieldSize){case"full":return ux;case"half":return mh;case"redzone":return gh}}kicksAllowed(){return this.s.config.fieldSize==="full"}*ask(e,t){let i=e;for(;;){const s=yield i;if(s.kind===t)return s;i={...e,error:`Expected ${t}, got ${s.kind}.`}}}roll(e,t,i,s=0){const r=Uc(this.rng,i,this.team(e).special[t],s);return this.log(`${this.team(e).abbreviation} special teams ${Oc(r)}`,"roll",e),r}lastDriveScore=null;score(e,t,i){this.s.score[e]+=t,i.includes("touchdown")||i.includes("two-point")?this.lastDriveScore="touchdown":i==="safety"?this.lastDriveScore="safety":i.includes("field goal")&&(this.lastDriveScore="fieldGoal"),this.log(`${this.name(e)} scores: ${i} (${t}). ${this.name("home")} ${this.s.score.home} - ${this.s.score.away} ${this.name("away")}.`,"score",e)}firstDown(e,t){this.s.possession=e,this.s.ballOn=Math.max(.5,Math.min(99.5,t)),this.s.down=1,this.s.lineToGain=Math.max(0,this.s.ballOn-nx)}countSnap(){this.s.snaps+=1,this.s.clock.mode==="twoMinute"&&this.s.clock.snapsLeft!==null&&(this.s.clock.snapsLeft-=1,this.log(`${this.s.clock.snapsLeft} snap${this.s.clock.snapsLeft===1?"":"s"} left.`,"info"))}*coinToss(){const e=yield*this.ask({kind:"callToss",coach:"away"},"callToss"),t=this.rng.die(2)===1?"heads":"tails",i=t===e.call?"away":"home";this.log(`The toss comes up ${t}; ${this.name("away")} called ${e.call}. ${this.name(i)} wins the toss.`,"event");const s=yield*this.ask({kind:"tossChoice",coach:i,options:["receive","kick"]},"tossChoice"),r=s.choice==="receive"?i:kn(i);this.s.receivedFirst=r,this.log(`${this.name(i)} elects to ${s.choice}. ${this.name(r)} receives.`,"event"),this.kicksAllowed()?this.s.kickoffBy=kn(r):this.firstDown(r,this.startSpot())}*kickoff(e){const t=kn(e);this.s.stage="kickoff",this.s.kickoffBy=null;const i=yield*this.ask({kind:"kickoffType",coach:e,options:["normal","onside"]},"kickoffType");if(this.countSnap(),i.type==="onside"){const a=this.roll(e,"kicking","KICKING (onside)"),c=this.roll(t,"coverage","COVERAGE (onside, +10)",0),l=a.successRate,u=c.successRate+sx;l>u?(this.log(`ONSIDE KICK recovered by ${this.name(e)}!`,"event",e),this.firstDown(e,100-ph)):(this.log(`${this.name(t)} recovers the onside kick.`,"event",t),this.firstDown(t,ph));return}const s=this.roll(e,"kicking","KICKING (kick-off)");if(s.critical){this.log(`The kick-off sails out of bounds: ${this.name(t)} takes it at its own 40.`,"event"),this.firstDown(t,100-ix);return}let r;if(s.perfect){const a=yield*this.ask({kind:"puntPerfect",coach:e},"puntPerfect");r=a.choice==="touchback"?Al+5:Al-1,this.log(`A PERFECT kick: the kicker places it ${a.choice==="touchback"?"in the endzone":"on the 1 yard line"}.`,"event")}else{const a=this.rng.die(20),c=this.rng.die(20);r=a+c+s.rawRate,this.log(`The kick travels ${a} + ${c} ${s.rawRate>=0?"+":"-"} ${Math.abs(s.rawRate)} = ${r} yards beyond the 30.`,"event")}const o=Al-r;yield*this.returnKick(e,t,o,"kick-off")}*returnKick(e,t,i,s){const r=i<=0,o=100-i;if((yield*this.ask({kind:"fairCatch",coach:t,spotYtg:Math.round(o),inEndzone:r},"fairCatch")).fairCatch){const u=r?100-as:o;this.log(`${this.name(t)} calls a fair catch${r?" in the endzone: touchback":""}; first down at the ${Math.round(100-u)}.`,"event"),this.firstDown(t,u);return}let c=o,l=0;for(;;){const u=this.roll(t,"return","RETURN"),h=this.roll(e,"coverage","COVERAGE");if(u.critical||h.perfect){this.log("The returner DROPS the ball!","event");const d=this.roll(t,"return","RETURN (loose ball)"),f=this.roll(e,"coverage","COVERAGE (loose ball)");d.successRate>f.successRate?(this.log(`${this.name(t)} falls on it.`,"event"),this.firstDown(t,c)):(this.log(`${this.name(e)} recovers the muffed ${s}!`,"event",e),this.firstDown(e,100-c));return}if(u.successRate>h.successRate){l+=1;let d=this.rng.die(20);if((u.perfect||h.critical)&&(d*=2,this.log("A big return: the yards are doubled.","event")),c-=d,this.log(`The ${s} is returned ${d} yards${c<=0?"":` to ${Yr(c)}`}.`,"event"),c<=0||l>=ax){this.log(`${this.name(t)} returns the ${s} for a TOUCHDOWN!`,"score",t),this.score(t,Ko,`${s} return touchdown`),yield*this.tryAfterTouchdown(t),this.s.kickoffBy=t;return}continue}c>=100?(this.log("The returner is brought down in the endzone: touchback.","event"),c=100-as):this.log(`The returner is tackled at the ${Math.round(100-c)}.`,"event"),this.firstDown(t,c);return}}*punt(){const e=this.s.possession,t=kn(e);this.countSnap();const i=this.s.ballOn,s=this.roll(e,"punting","PUNTING");let r;if(s.critical){const a=this.rng.die(20),c=this.rng.die(20);r=a+c,this.log(`A shanked punt out of bounds after ${a} + ${c} = ${r} yards.`,"event");const l=i-r;l<=0?(this.log("It still reaches the endzone: touchback.","event"),this.firstDown(t,100-as)):this.firstDown(t,100-l);return}if(s.perfect){const a=this.rng.die(20);if(r=a+ox,this.log(`A PERFECT punt of ${a} + 50 = ${r} yards.`,"event"),i-r<=0){if((yield*this.ask({kind:"puntPerfect",coach:e},"puntPerfect")).choice==="touchback"){this.log("The punter forces a fair catch in the endzone: touchback.","event"),this.firstDown(t,100-as);return}this.log("The punt is placed on the 1 yard line.","event"),yield*this.returnKick(e,t,1,"punt");return}}else r=rx+2*s.rawRate,this.log(`The punt travels 30 ${s.rawRate>=0?"+":"-"} 2 x ${Math.abs(s.rawRate)} = ${r} yards.`,"event");const o=i-r;if(o<=0){this.log("The punt reaches the endzone: touchback.","event"),this.firstDown(t,100-as);return}yield*this.returnKick(e,t,o,"punt")}*fieldGoal(){const e=this.s.possession;this.countSnap();const t=Math.round(this.s.ballOn+wl),i=hh(t);if(this.roll(e,"kicking",`KICKING (${t} yard field goal, ${i>=0?"+":""}${i})`,i).success)return this.score(e,JS,`${t} yard field goal`),!0;this.log(`The ${t} yard field goal is NO GOOD.`,"event");const r=this.s.ballOn+wl,o=kn(e),a=Math.min(100-as,100-r);return this.firstDown(o,a),!1}*tryAfterTouchdown(e){if(this.s.stage="try",(yield*this.ask({kind:"tryChoice",coach:e},"tryChoice")).choice==="kick"){this.roll(e,"kicking","KICKING (extra point)").critical?this.log("The extra point is missed!","event"):this.score(e,QS,"extra point");return}this.log(`${this.name(e)} goes for two.`,"event");const i=yield*Dh(this.s,this.rng,{kind:"try",offense:e,los:Vs(fh),lineToGainY:null,boardMinY:this.boardMinY(Vs(fh))});this.s.lastResult=i,i.ending.kind==="touchdown"?this.score(e,ex,"two-point conversion"):this.log("The two-point attempt fails.","event")}*scrimmage(){const e=this.s,t=e.possession,i=kn(t);this.countSnap();const s=Vs(e.ballOn),r=yield*Dh(e,this.rng,{kind:"scrimmage",offense:t,los:s,lineToGainY:e.lineToGain>0?Vs(e.lineToGain):null,boardMinY:this.boardMinY(s)});e.lastResult=r,e.drive&&(e.drive.plays+=1);const o=r.ending;switch(o.kind){case"touchdown":return this.score(t,Ko,"touchdown"),yield*this.tryAfterTouchdown(t),"touchdown";case"safety":return this.score(i,jS,"safety"),"safety";case"interception":case"fumbleLost":{if(o.touchdown)return this.score(i,Ko,o.kind==="interception"?"interception return":"fumble return"),yield*this.tryAfterTouchdown(i),"touchdown";const a=(r.spotY-zn)/1.2;return this.firstDown(i,a),"turnover"}default:{const a=dx(r.spotY),c=e.ballOn-a,l=r.autoFirstDown||a<=e.lineToGain+1e-9;return r.autoFirstDown&&this.log("Defensive pass interference: automatic first down.","event"),l?(this.log(`${c>=0?"Gain":"Loss"} of ${Math.abs(Math.round(c*10)/10)}: FIRST DOWN.`,"event"),this.firstDown(t,a),"continue"):(e.ballOn=Math.max(.5,a),e.down+=1,e.down>tx?(this.log(`Turnover on downs at the ${Math.round(100-e.ballOn)}.`,"event"),this.firstDown(i,100-e.ballOn),"downs"):(this.log(`${c>=0?"Gain":"Loss"} of ${Math.abs(Math.round(c*10)/10)}. ${rM(e.down)} and ${e.lineToGain<=0?"goal":Math.round(e.ballOn-e.lineToGain)}.`,"event"),"continue"))}}}*drive(){const e=this.s;e.stage="drive";const t=e.possession;for(e.drives[t]+=1,this.lastDriveScore=null,e.drive={number:e.clock.drivesCompleted+1,offense:t,startYtg:e.ballOn,plays:0},this.log(`${this.name(t)} starts a drive at ${Yr(e.ballOn)}.`,"phase",t);;){if(this.gameClockExpired())return"downs";const i=Math.round(e.ballOn+wl),s=["scrimmage"];this.kicksAllowed()&&e.config.gameType!=="collegeOT"&&s.push("punt"),s.push("fieldGoal");const r=yield*this.ask({kind:"playCall",coach:t,options:s,fieldGoalLength:i,fieldGoalModifier:hh(i)},"playCall");if(r.call==="punt"&&s.includes("punt"))return yield*this.punt(),"punt";if(r.call==="fieldGoal")return(yield*this.fieldGoal())?"fieldGoal":"missedFieldGoal";const o=yield*this.scrimmage();if(o!=="continue")return o;if(this.gameClockExpired())return"downs"}}gameClockExpired(){return this.s.clock.mode==="twoMinute"&&this.s.clock.snapsLeft!==null&&this.s.clock.snapsLeft<=0}*run(){const e=this.s;for(yield*this.coinToss();;){if(e.kickoffBy){const o=e.kickoffBy;if(yield*this.kickoff(o),e.kickoffBy)continue;if(this.gameClockExpired()&&this.endIfOver())return}const t=e.possession,i=yield*this.drive();e.clock.drivesCompleted+=1,e.overtime.active&&(e.overtime.possessions[t]+=1);const s=i==="touchdown"||i==="fieldGoal",r=this.kicksAllowed();if(i==="safety"?r?(this.log(`${this.name(t)} free kicks after the safety.`,"event"),e.ballOn,e.ballOn=100-cx,yield*this.punt()):this.firstDown(kn(t),this.startSpot()):s?r?e.kickoffBy=t:this.firstDown(kn(t),this.startSpot()):(!r||e.config.gameType==="collegeOT")&&this.firstDown(kn(t),this.startSpot()),this.endIfOver()||(this.clockAfterDrive(),this.endIfOver()))return}}clockAfterDrive(){const e=this.s;if(e.config.gameType!=="full"||e.overtime.active||e.clock.mode!=="drives")return;const t=e.clock.drivesCompleted;if(t<lx)return;const i=t===8?4:t===9?5:6,s=this.rng.die(6);if(s>=i){this.log(`After ${t} drives the d6 shows ${s} (needed ${i}+): there is time for another drive.`,"event");return}const r=this.rng.die(20);e.clock.mode="twoMinute",e.clock.snapsLeft=r,this.log(`After ${t} drives the d6 shows ${s} (needed ${i}+): TWO MINUTE MODE, ${r} snaps left.`,"event")}endIfOver(){const e=this.s,t=e.score.home===e.score.away,i=e.score.home>e.score.away?"home":"away",s=a=>(e.winner=a,e.stage="over",e.kickoffBy=null,this.log(a==="tie"?"The game ends in a tie.":`FINAL: ${this.name(a)} wins ${e.score[a]} - ${e.score[kn(a)]}.`,"score"),!0),r=e.overtime.active?e.overtime.possessions.home===e.overtime.possessions.away:e.drives.home===e.drives.away;switch(e.overtime.active?e.overtime.classic?"suddenDeathClassic":"suddenDeathModern":e.config.gameType){case"full":{if(this.gameClockExpired()){if(!t)return s(i);this.startOvertime()}return!1}case"collegeOT":return r&&!t?s(i):!1;case"suddenDeathClassic":return t?!1:s(i);case"suddenDeathModern":{const a=e.overtime.active?e.overtime.possessions:e.drives;if(a.home+a.away===1&&this.lastDriveScoredTouchdownOrSafety())return s(i);if(a.home>=1&&a.away>=1){if(!t)return s(i);e.overtime.active?e.overtime.classic=!0:(e.overtime.active=!0,e.overtime.classic=!0,this.log("Both teams have had a possession: sudden death.","event"))}return!1}}}lastDriveScoredTouchdownOrSafety(){return this.lastDriveScore==="touchdown"||this.lastDriveScore==="safety"}startOvertime(){const e=this.s;e.overtime.active=!0,e.overtime.classic=!1,e.overtime.possessions={home:0,away:0},e.clock.mode="none",e.clock.snapsLeft=null,this.log("The game is tied: OVERTIME (modern sudden death).","event"),this.kicksAllowed()?e.kickoffBy=e.receivedFirst??"home":this.firstDown(kn(e.receivedFirst??"home"),this.startSpot())}}function rM(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function Yr(n){const e=Math.round(n);return e===50?"midfield":e>50?`its own ${100-e}`:`the opponent's ${e}`}function*oM(n,e){yield*new sM(n,e).run()}class Dr{state;pending=null;actions=[];gen;rng;constructor(e,t){this.rng=t??new Ex(e.seed),this.state=Np(e),this.gen=oM(this.state,this.rng);const i=this.gen.next();this.pending=i.done?null:i.value}get over(){return this.pending===null||this.state.stage==="over"}apply(e){if(!this.pending)return{ok:!1,error:"The game is over."};const t=this.pending;let i;try{i=this.gen.next(e)}catch(s){return{ok:!1,error:s instanceof Error?s.message:String(s)}}return this.actions.push(e),this.pending=i.done?null:i.value,this.pending&&this.pending.error&&aM(t,this.pending)?{ok:!1,error:this.pending.error}:{ok:!0}}save(){return{config:this.state.config,actions:[...this.actions]}}static replay(e,t){const i=new Dr(e.config),s=t??e.actions.length;for(let r=0;r<s;r++)i.apply(e.actions[r]);return i}view(e){const t=structuredClone(this.state),i=t.play;if(!i)return t;const s=(l,u)=>{for(const h of l){const d=i.markers[h];d&&(i.markers[h]=d.map((f,g)=>g<u?f:{t:"hidden"}))}},r=Object.values(i.players).filter(l=>l.side==="offense").map(l=>l.id),o=Object.values(i.players).filter(l=>l.side==="defense").map(l=>l.id),a=e===i.offense,c=e===i.defense;return a||s(r,i.revealed.offense),c||s(o,i.revealed.defense),!a&&i.ball.apparent&&(i.ball.carrier=i.ball.apparent,i.ball.inPlay=!0,i.handoff&&(i.handoff={...i.handoff,fake:!1,done:!0,fumbled:!1})),t}}function aM(n,e){return n.kind===e.kind&&n.coach===e.coach}class lM{controls=["home","away"];view=tt(null);pending=tt(null);connected=tt(!0);status=tt("hot-seat");newLog=tt([]);engine;logSeen=0;constructor(e,t){this.engine=t?Dr.replay(t):new Dr(e),this.publish()}perspective(){const e=this.engine.pending;return e&&e.kind==="markers"?e.coach:(e&&e.kind==="lineup","spectator")}publish(){const e=this.engine.state.log;this.newLog.value=e.slice(this.logSeen),this.logSeen=e.length,this.view.value=this.engine.view(this.perspective()),this.pending.value=this.engine.pending?structuredClone(this.engine.pending):null}async apply(e){const t=this.engine.apply(e);return this.publish(),t}async undo(){const e=this.engine.save();e.actions.length!==0&&(this.engine=Dr.replay(e,e.actions.length-1),this.logSeen=this.engine.state.log.length,this.publish())}save(){return this.engine.save()}dispose(){}}class cM{controls=[];view=tt(null);pending=tt(null);connected=tt(!1);status=tt("connecting…");newLog=tt([]);ws;waiting=[];logSeen=0;constructor(e,t,i,s){this.ws=new WebSocket(e),this.ws.onopen=()=>{this.connected.value=!0,this.ws.send(JSON.stringify({t:"join",room:t,coach:i,config:s}))},this.ws.onclose=()=>{this.connected.value=!1,this.status.value="disconnected"},this.ws.onmessage=r=>{const o=JSON.parse(r.data);if(o.t==="joined")this.controls=o.coach?[o.coach]:[],this.status.value=o.coach?`online as ${o.coach}`:"spectating";else if(o.t==="state"){const a=o.view;this.newLog.value=a.log.slice(this.logSeen),this.logSeen=a.log.length,this.view.value=a,this.pending.value=o.pending}else if(o.t==="result"){const a=this.waiting.shift();a&&a({ok:o.ok,error:o.error})}else o.t==="error"&&(this.status.value=o.text)}}apply(e){return new Promise(t=>{this.waiting.push(t),this.ws.send(JSON.stringify({t:"action",action:e}))})}async undo(){this.ws.send(JSON.stringify({t:"undo"}))}save(){return null}dispose(){this.ws.close()}}const wn=tt(null),Tt=Di(()=>wn.value?.view.value??null),rn=Di(()=>wn.value?.pending.value??null),wu=Di(()=>wn.value?.controls??[]),Ms=Di(()=>{const n=rn.value,e=wu.value;return n?n.coach==="both"?!0:e.includes(n.coach):!1});async function uM(n){const e=wn.value;return e?e.apply(n):{ok:!1,error:"no game"}}const $t=tt(null),Wc=tt(null),$c=tt(null),dM=tt(null),Sa=tt(null),Xc=tt(null),Ih=tt("all"),Gn=tt(null),ps=tt(null),Yc=tt({});function Au(n,e){return Yc.value[`${n}-${e}`]??null}function Cu(n,e,t){const i={...Yc.value};t?i[`${n}-${e}`]=t:delete i[`${n}-${e}`],Yc.value=i}const Ci=tt(null),Xt=tt(null),ri=tt("move"),Vn=tt("move"),Ei=tt({push:2,turn:0,follow:!0,anchor:null}),ar=tt(null),ms=tt({}),Ll=tt("hook");let Dl=null;function Ru(n){Sa.value=n,Dl&&clearTimeout(Dl),Dl=setTimeout(()=>Sa.value=null,3500)}function hM(){Xt.value=null,ri.value="move",Vn.value="move",ar.value=null,ms.value={},Ei.value={push:2,turn:0,follow:!0,anchor:null}}const fM={die(){throw new Error("the client never rolls dice")}};function eo(n=Tt.value){return!n||!n.play?null:new Tu(n,n.play,fM)}const pM=Di(()=>{const n=Tt.value,e=new Map;if(!n)return e;for(const t of["home","away"])for(const i of[...n.config.teams[t].offense,...n.config.teams[t].defense])e.set(i.id,i);return e});function xa(n){return pM.value.get(n)}function Up(n){const e=xa(n);return e?`${e.position} #${e.number} ${e.name.split(" ").slice(-1)[0]}`:n}function Ma(n){const e=Tt.value;return e?e.config.teams[n].colors.primary:n==="home"?"#1f6feb":"#c0392b"}function qc(n){const e=Tt.value;return e?e.config.teams[n].name:n}const Kc=Di(()=>{const n=rn.value,e=Tt.value;return!n||!e?"":`${n.kind}|${n.coach}|${e.snaps}|${e.play?.slice??0}|${e.play?.phase??""}|${e.log.length}`}),Qs=tt(!1),Ir={pass:"Pass",run:"Run",playAction:"Play action",screen:"Screen",zone:"Zone",man:"Man",blitz:"Blitz"},Zc=n=>`S${n}`;function Op(n){const e={name:n.formation,side:n.side,slots:n.slots.map(t=>({positions:t.positions,dx:t.dx,dy:t.dy,label:t.label}))};return n.side==="offense"&&(e.qbDepth=n.qbDepth,e.linemen=n.linemen,e.extraLinemanSide=n.extraSide),e}const mM=12;function ku(n,e,t){const i=n.side==="offense"?ai:fr,s={markers:{},slotOf:{},routes:{},unassigned:[]},r={},o=[];for(const h of e)n.side==="offense"&&h.position==="QB"?(s.slotOf[h.id]="QB",r.QB=h.id):n.side==="offense"&&h.position==="OL"?(s.slotOf[h.id]="OL",s.markers[h.id]=xt(n.ol,i)):o.push(h);const a=[];for(const h of o)for(let d=0;d<n.slots.length;d++){const f=n.slots[d],g={x:Nt+f.dx,y:t+f.dy},_=Math.hypot(g.x-h.pos.x,g.y-h.pos.y)+(f.positions.includes(h.position)?0:mM);a.push({p:h,i:d,cost:_})}a.sort((h,d)=>h.cost-d.cost);const c=new Set,l=new Set;for(const h of a){if(c.has(h.i)||l.has(h.p.id))continue;c.add(h.i),l.add(h.p.id);const d=n.slots[h.i];s.slotOf[h.p.id]=Zc(h.i),r[Zc(h.i)]=h.p.id,s.markers[h.p.id]=xt(d.markers,i),d.route&&(s.routes[h.p.id]=d.route)}for(const h of o)l.has(h.id)||(s.unassigned.push(h.id),s.markers[h.id]=xt([],i));const u=h=>h.map(d=>(d.t==="read"||d.t==="handoff")&&d.target in r?{...d,target:r[d.target]}:d.t==="read"||d.t==="handoff"?{t:"filler"}:d);r.QB&&(s.markers[r.QB]=xt(n.qb,i));for(const h of Object.keys(s.markers))s.markers[h]=u(s.markers[h]);return s}function Il(n){const e=t=>t==="left"?"right":"left";switch(n.t){case"dir":return n.dir==="up"?n:{...n,dir:e(n.dir)};case"run":return{...n,side:e(n.side)};case"zone":return n.zone==="flat"||n.zone==="curl"?{...n,side:e(n.side)}:n;default:return n}}function Jc(n){const e=n.formation.endsWith(" (flipped)");return{...n,formation:e?n.formation.slice(0,-10):`${n.formation} (flipped)`,extraSide:n.extraSide==="left"?"right":"left",qb:n.qb.map(Il),ol:n.ol.map(Il),slots:n.slots.map(t=>({...t,dx:-t.dx,markers:t.markers.map(Il)}))}}function gM(n,e,t){const i=n.side==="offense"?ai:fr,s=e.find(u=>n.side==="offense"&&u.position==="QB"),r=e.find(u=>n.side==="offense"&&u.position==="OL"),o=e.filter(u=>u!==s&&!(n.side==="offense"&&u.position==="OL")).sort((u,h)=>u.pos.x-h.pos.x||h.pos.y-u.pos.y),a={};o.forEach((u,h)=>a[u.id]=Zc(h));const c=u=>u.map(h=>(h.t==="read"||h.t==="handoff")&&h.target in a?{...h,target:a[h.target]}:h.t==="read"||h.t==="handoff"?{t:"filler"}:h),l=u=>{const h=xt(u,i);let d=h.length;for(;d>0&&h[d-1].t==="filler";)d--;return h.slice(0,d)};return{...n,qb:s?c(l(s.markers)):[],ol:r?l(r.markers):[],slots:o.map(u=>{const h={positions:[u.position],dx:Nh(u.pos.x-Nt),dy:Nh(u.pos.y-t),label:u.position,markers:c(l(u.markers))};return u.route&&(h.route=u.route),h}),stock:!1}}function Nh(n){return Math.round(n*100)/100}function Pu(){return`custom-${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`}const Ft=[{t:"passblock"},{t:"passblock"},{t:"passblock"},{t:"passblock"}],On=[{t:"runblock"},{t:"runblock"},{t:"runblock"},{t:"runblock"}],Bo=[{t:"runblock"},{t:"passblock"},{t:"passblock"},{t:"passblock"}],vM=[{t:"passblock"},{t:"passblock"},{t:"runblock"},{t:"runblock"}],un=n=>({t:"read",target:n}),Ot=(...n)=>n.map(un),cn=n=>({t:"handoff",target:n});function _M(n,e){if(n==="pass")return{markers:Ft};if(n==="run")return{markers:On};if(Array.isArray(n))return{markers:n};if(typeof n=="string"){const t=Zi(n);if(!t)throw new Error(`unknown route ${n}`);return{markers:ga(t,e===0?"right":Oa(Nt+e)),route:n}}if("route"in n){const t=Zi(n.route);if(!t)throw new Error(`unknown route ${n.route}`);return{markers:ga(t,n.out),route:n.route}}return{markers:[{t:"run",side:n.side,lane:n.run}]}}function Qe(n,e,t,i,s,r,o,a){const c=ni.find(l=>l.name===t);if(!c)throw new Error(`unknown formation ${t}`);if(a.length!==c.slots.length)throw new Error(`${e}: ${c.slots.length} slots in ${t}, ${a.length} given`);return{id:`stock-${n}`,name:e,side:"offense",kind:i,description:s,formation:t,qbDepth:c.qbDepth??0,linemen:c.linemen??5,extraSide:c.extraLinemanSide??"right",qb:r,ol:o,slots:c.slots.map((l,u)=>{const h=_M(a[u],l.dx),d={...l,markers:h.markers};return h.route&&(d.route=h.route),d}),stock:!0}}const N={blitz:[{t:"blitz"}],man:[{t:"man"}],spy:[{t:"spy"}],flatL:[{t:"zone",zone:"flat",side:"left"}],flatR:[{t:"zone",zone:"flat",side:"right"}],curlL:[{t:"zone",zone:"curl",side:"left"}],curlR:[{t:"zone",zone:"curl",side:"right"}],hook:[{t:"zone",zone:"hook"}],deep:[{t:"zone",zone:"deep"}],fakeBlitz:[{t:"blitz"},{t:"zone",zone:"hook"}]};function Qt(n,e,t,i,s,r){const o=Fn.find(a=>a.name===t);if(!o)throw new Error(`unknown formation ${t}`);if(r.length!==o.slots.length)throw new Error(`${e}: ${o.slots.length} slots in ${t}, ${r.length} given`);return{id:`stock-${n}`,name:e,side:"defense",kind:i,description:s,formation:t,qbDepth:0,linemen:5,extraSide:"right",qb:[],ol:[],slots:o.slots.map((a,c)=>({...a,markers:r[c]})),stock:!0}}const Fp=[Qe("four-verticals","Four Verticals","Shotgun spread","pass","All four receivers go deep; the slots run the seams. Read the seams first, then the outside.",Ot("S3","S4","S1","S2"),Ft,["check-release","go","go","seam","seam"]),Qe("mesh","Mesh","Shotgun spread","pass","The two slots cross just beyond the line to rub off man coverage; a corner and a curl outside, the back on an angle.",Ot("S3","S4","S0","S1"),Ft,["angle","corner","curl","drag","drag"]),Qe("smash","Smash","Shotgun spread","pass","Hitch outside and corner from the slot on both sides: a high-low on the cornerback.",Ot("S3","S1","S4","S2"),Ft,["rb-flat","hitch","hitch","corner","corner"]),Qe("curl-flat","Curl-Flat","Shotgun spread","pass","Curls outside, flats from the slots: a high-low on the flat defender on both sides.",Ot("S1","S3","S2","S4"),Ft,["pass","curl","curl","flat","flat"]),Qe("slant-flat","Slant-Flat","Shotgun spread","pass","Quick slants outside with the slots to the flat. The ball is out in timeslice 2.",Ot("S1","S2","S3","S4"),Ft,["pass","slant","slant","flat","flat"]),Qe("levels","Levels","Shotgun spread","pass","A dig over a shallow and a square-in: three receivers at three depths across the middle.",Ot("S3","S4","S1","S0"),Ft,["check-release","dig","go","shallow","in"]),Qe("dagger","Dagger","Shotgun spread","pass","The slot clears the middle up the seam; the outside receiver digs in behind him.",Ot("S3","S1","S4","S2"),Ft,["pass","dig","go","seam","curl"]),Qe("drive","Drive","Shotgun spread","pass","A drag under a dig from the same side, a post and a comeback away from it.",Ot("S3","S1","S4","S0"),Ft,["swing","dig","post","drag","comeback"]),Qe("all-hitches","All Hitches","Shotgun spread","pass","Every receiver hitches at five yards; throw to whoever is uncovered.",Ot("S1","S2","S3","S4"),Ft,["rb-flat","hitch","hitch","hitch","hitch"]),Qe("rb-screen","Back Screen","Shotgun spread","screen","The back slips out after a count while the receivers clear out; the linemen release to block after the catch.",Ot("S0","S0","S0","S0"),vM,["screen","go","go","go","go"]),Qe("draw","Draw","Shotgun spread","run","The quarterback shows pass; the back blocks a count, then takes the hand-off in timeslice 2.",[un("S1"),cn("S0")],[{t:"passblock"},{t:"runblock"},{t:"runblock"},{t:"runblock"}],[[{t:"passblock"},{t:"run",side:"right",lane:"dive"}],"go","go","seam","seam"]),Qe("gun-inside-zone","Inside Zone","Shotgun spread","run","The back takes the hand-off across the quarterback and dives into the left A gap; receivers block.",[cn("S0")],On,[{run:"dive",side:"left"},"run","run","run","run"]),Qe("gun-sprint","Outside Zone","Shotgun spread","run","The back takes the ball wide to the right behind the line.",[cn("S0")],On,[{run:"sprint",side:"right"},"run","run","run","run"]),Qe("gun-pa-seams","Play Action Seams","Shotgun spread","playAction","A fake inside zone, then the slots up the seams.",[cn("S0"),un("S3"),un("S4"),un("S1")],Bo,[{run:"dive",side:"left"},"go","comeback","seam","seam"]),Qe("flood","Flood (Sail)","Trips right","pass","Three levels to the right: a go, a sail and a flat. The backside receiver digs.",Ot("S2","S3","S4","S1"),Ft,["pass","dig","go","sail","flat"]),Qe("stick","Stick","Trips right","pass","The slot sticks at five yards with the tight end in the flat; the outside receiver clears.",Ot("S3","S4","S1","S0"),Ft,["check-release","slant","go","stick","flat"]),Qe("y-cross","Y-Cross","Trips right","pass","The tight end crosses deep; the backside receiver posts; the slot runs an arrow underneath.",Ot("S4","S1","S3","S2"),Ft,["pass","post","go","arrow","cross"]),Qe("trips-spacing","Spacing","Trips right","pass","Quick throws: a stick, a hitch and a flat to the trips side, a slant backside.",Ot("S3","S4","S2","S1"),Ft,["check-release","slant","hitch","stick","flat"]),Qe("trips-verts","Trips Verticals","Trips right","pass","All three to the right go deep; the backside receiver runs a post.",Ot("S3","S4","S2","S1"),Ft,["pass","post","go","seam","te-seam"]),Qe("post-wheel","Post-Wheel","Singleback","pass","The right receiver posts to pull the safety; the back wheels up the sideline behind him.",Ot("S0","S3","S2","S4"),Ft,[{route:"wheel",out:"right"},"te-seam","dig","post","drag"]),Qe("single-zone-right","Zone Right","Singleback","run","The back dives into the right A gap behind zone blocking.",[cn("S0")],On,[{run:"dive",side:"right"},"run","run","run","run"]),Qe("single-stretch","Stretch","Singleback","run","The back takes the ball wide to the right behind the tight end.",[cn("S0")],On,[{run:"sprint",side:"right"},"run","run","run","run"]),Qe("single-pa-post","Play Action Post","Singleback","playAction","A fake dive to freeze the linebackers, then the post behind them.",[cn("S0"),un("S3"),un("S1"),un("S4")],Bo,[{run:"dive",side:"left"},"corner","go","post","drag"]),Qe("single-curls","Curls","Singleback","pass","Curls outside with the slot and tight end in the flats; the back checks and releases.",Ot("S2","S3","S4","S1"),Ft,[{route:"check-release",out:"right"},"flat","curl","curl","flat"]),Qe("iso","Iso","I formation","run","The fullback leads through the right A gap and the back follows him.",[cn("S1")],On,["run",{run:"dive",side:"right"},"run","run","run"]),Qe("power","Power","I formation","run","The back runs off tackle to the left behind the fullback and the line.",[cn("S1")],On,["run",{run:"offtackle",side:"left"},"run","run","run"]),Qe("toss","Toss Sweep","I formation","run","The back sprints wide to the right with the fullback and tight end leading.",[cn("S1")],On,["run",{run:"sprint",side:"right"},"run","run","run"]),Qe("fb-dive","Fullback Dive","I formation","run","The fullback takes the quick hand-off into the left A gap.",[cn("S0")],On,[{run:"dive",side:"left"},"run","run","run","run"]),Qe("counter","Counter","I formation","run","The back delays a count, then takes the hand-off off tackle to the left.",[un("S4"),cn("S1")],On,["run",[{t:"delay"},{t:"run",side:"left",lane:"offtackle"}],"run","run","run"]),Qe("i-pa-post","Play Action Post","I formation","playAction","A fake iso, then the post over the top; the tight end runs the corner.",[cn("S1"),un("S3"),un("S2"),un("S4")],Bo,["pass",{run:"dive",side:"right"},"corner","post","go"]),Qe("i-flood","Flood","I formation","pass","A go, the tight end on a corner and the fullback in the flat to the right.",Ot("S2","S0","S4","S3"),Ft,[{route:"rb-flat",out:"right"},"pass","corner","dig","go"]),Qe("empty-verts","Empty Verticals","Empty","pass","Five receivers deep: goes outside, seams inside, the tight end up the middle.",Ot("S2","S3","S4","S0"),Ft,["go","go","seam","seam","te-seam"]),Qe("empty-spacing","Empty Spacing","Empty","pass","Quick throws everywhere: hitches outside, flats from the slots, the tight end sticks.",Ot("S4","S2","S3","S0"),Ft,["hitch","hitch","flat","flat","stick"]),Qe("empty-mesh","Empty Mesh","Empty","pass","The slots mesh under a dig and a corner; the tight end crosses.",Ot("S2","S3","S4","S0"),Ft,["dig","corner","drag","drag","te-cross"]),Qe("jumbo-dive","Jumbo Dive","Jumbo (6 linemen)","run","Six linemen and two tight ends: the back dives into the right A gap.",[cn("S1")],On,["run",{run:"dive",side:"right"},"run","run"]),Qe("jumbo-pa-te","Jumbo Play Action","Jumbo (6 linemen)","playAction","A fake dive, then the tight ends release: one up the seam, one across.",[cn("S1"),un("S2"),un("S3"),un("S0")],Bo,[{route:"rb-flat",out:"right"},{run:"dive",side:"left"},"te-seam","te-cross"])],Bp=[Qt("cover1","Cover 1","4-3","man","Man coverage everywhere with the free safety deep; the middle linebacker spies the quarterback.",[N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.spy,N.man,N.man,N.man,N.deep,N.man]),Qt("cover2","Cover 2","4-3","zone","Corners in the flats, linebackers in the curls and the hook, both safeties deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.hook,N.curlR,N.flatL,N.flatR,N.deep,N.deep]),Qt("cover3","Cover 3","4-3","zone","Three deep (both corners and the free safety); the strong safety rolls down to the flat.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.hook,N.curlR,N.deep,N.deep,N.deep,N.flatR]),Qt("cover4","Cover 4 (Quarters)","4-3","zone","Four deep; the linebackers cover the flats and the hook.",[N.blitz,N.blitz,N.blitz,N.blitz,N.flatL,N.hook,N.flatR,N.deep,N.deep,N.deep,N.deep]),Qt("cover0","Cover 0 Blitz","4-3","blitz","Six rushers and man coverage with nobody deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.man,N.man,N.man,N.man]),Qt("tampa2","Tampa 2","4-3","zone","Cover 2 with the middle linebacker dropping deep down the middle.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.deep,N.curlR,N.flatL,N.flatR,N.deep,N.deep]),Qt("fire-zone","Fire Zone","4-3","blitz","The left end drops to the flat while both outside linebackers blitz; three deep behind it.",[N.flatL,N.blitz,N.blitz,N.blitz,N.blitz,N.hook,N.blitz,N.deep,N.deep,N.deep,N.flatR]),Qt("spy","Cover 2 Spy","4-3","zone","Cover 2 with the middle linebacker spying a running quarterback.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.spy,N.curlR,N.flatL,N.flatR,N.deep,N.deep]),Qt("fake-blitz","Show Blitz","4-3","zone","The linebackers show blitz, then drop into the hook zone in timeslice 2 behind a cover 2 shell.",[N.blitz,N.blitz,N.blitz,N.blitz,N.fakeBlitz,N.fakeBlitz,N.fakeBlitz,N.flatL,N.flatR,N.deep,N.deep]),Qt("34-cover2","3-4 Cover 2","3-4","zone","The outside linebackers rush with the three linemen; cover 2 behind.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.curlR,N.blitz,N.flatL,N.flatR,N.deep,N.deep]),Qt("34-cover3","3-4 Cover 3","3-4","zone","Three deep with the inside linebackers in the curls and the outside linebackers in the flats.",[N.blitz,N.blitz,N.blitz,N.flatL,N.curlL,N.curlR,N.flatR,N.deep,N.deep,N.deep,N.hook]),Qt("34-man-blitz","3-4 Man Blitz","3-4","blitz","Both outside linebackers come; man coverage with one safety deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.spy,N.blitz,N.man,N.man,N.deep,N.man]),Qt("nickel-2man","Nickel 2-Man","Nickel 4-2-5","man","Man coverage underneath with both safeties deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.man,N.man,N.man,N.man,N.deep,N.deep]),Qt("nickel-cover3","Nickel Cover 3","Nickel 4-2-5","zone","Three deep; the nickel back and the strong safety take the flats.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.curlR,N.deep,N.deep,N.flatL,N.deep,N.flatR]),Qt("nickel-blitz","Nickel Blitz","Nickel 4-2-5","blitz","The nickel back and a linebacker blitz; man coverage with the free safety deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.man,N.man,N.blitz,N.deep,N.man]),Qt("dime-quarters","Dime Quarters","Dime 4-1-6","zone","Four deep with the lone linebacker in the hook and the extra backs in the flats.",[N.blitz,N.blitz,N.blitz,N.blitz,N.hook,N.deep,N.deep,N.flatL,N.flatR,N.deep,N.deep]),Qt("goal-line","Goal Line Pinch","Goal line 5-3","blitz","Everyone up front comes; the corners and the safety play man.",[N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.man,N.man]),Qt("prevent","Prevent","Prevent 3-1-7","zone","Three deep, curls and flats underneath: nothing over the top.",[N.blitz,N.blitz,N.blitz,N.hook,N.curlL,N.curlR,N.flatL,N.flatR,N.deep,N.deep,N.deep])],yM=[...Fp,...Bp];function bM(n){return n==="offense"?Fp:Bp}const Uh=["#ffd166","#9fd4ff","#b1ffc9","#ffb3b1","#e0b0ff","#ffffff","#f5a524","#4fd0ff"];function Lu(n,e,t){const i=$r(n,e,t);if(i)return i.name;const s=(n??[]).filter(a=>a.t!=="filler");if(s.length===0)return"—";const r=s.map(a=>a.t==="read"||a.t==="handoff"?a.t==="read"?"Read":"Hand off":Ss(a));return r.filter((a,c)=>r.indexOf(a)===c).join(" · ")}function SM(n,e){switch(n.zone){case"flat":return n.side==="left"?{x0:0,x1:Nt-ma,y0:e,y1:e+ha}:{x0:Nt+ma,x1:Ke,y0:e,y1:e+ha};case"curl":return n.side==="left"?{x0:0,x1:Nt,y0:e+fa,y1:Math.min(Yt,e+pa)}:{x0:Nt,x1:Ke,y0:e+fa,y1:Math.min(Yt,e+pa)};case"hook":return{x0:0,x1:Ke,y0:e+dp,y1:Math.min(Yt,e+hp)};case"deep":return{x0:0,x1:Ke,y0:e+fp,y1:Yt}}}function xM(n){return n.zone==="flat"||n.zone==="curl"?`${n.zone} ${n.side}`:n.zone}function jc(n){const e=[],t=[],i=n.players.filter(r=>r.def.position==="OL").map(r=>r.pos).sort((r,o)=>r.x-o.x);let s=0;if(n.side==="offense")for(const r of n.players){const o=n.markers[r.id];if(!o)continue;const a=n.routes[r.id]?Zi(n.routes[r.id]):null,c={laneTarget:(d,f)=>xp(i,d,f),boardMinY:n.boardMinY,...a?{break:a.break}:{}},l=Cx(r.pos,r.def.skills.speed,o,c);if(l.slices.length===0)continue;const h=o.some(d=>d.t==="run")?"#ff9f43":Uh[s++%Uh.length];e.push({id:r.id,points:l.points,tail:l.tail,cutAt:l.cutAt,color:h,label:Lu(o,r.pos.x,n.routes[r.id]),dim:n.selected!==null&&n.selected!==r.id,sideline:l.sideline})}else for(const r of n.players){const o=n.markers[r.id];if(o)for(let a=0;a<o.length;a++){const c=o[a];if(c.t==="zone"){const l=c.zone==="flat"||c.zone==="curl"?{zone:c.zone,side:c.side}:{zone:c.zone},u=xM(l);t.some(h=>h.label===u)||t.push({zone:l,rect:SM(l,n.los),label:u})}if(c.t==="blitz"&&a===0){const l={x:r.pos.x+(Nt-r.pos.x)*.35,y:Math.max(n.boardMinY+ge,r.pos.y-5)};e.push({id:r.id,points:[r.pos,l],tail:null,cutAt:null,color:"#ff6b6b",label:o[1]&&o[1].t!=="filler"&&o[1].t!=="blitz"?`Blitz, then ${Ss(o[1])}`:void 0,dim:n.selected!==null&&n.selected!==r.id,sideline:!1})}}}return{routes:e,zones:t}}function qr(n,e){if(!e)return null;if(n.kind==="move")return n.movers.find(t=>t.id===e)??null;if(n.kind==="freeBlockers"){const t=n.blockers.find(i=>i.id===e);return t?{id:e,allowance:t.allowance,mode:{t:"free"},done:t.done}:null}return null}function Oh(n,e,t,i){const s=n.f(e).pos,r=[];for(let o=0;o<360;o+=15){const a=li(s,Ui(vn(o),qe));Xr(n.moveCtx(),a,[t])&&(i&&!i(a)||r.push({key:String(o),pos:a}))}return r}const Fh=Di(()=>{const n=Tt.value,e=rn.value,t={selected:$t.value,highlights:{},showTrails:!0};if(!n)return t;const i=n.play,s=eo(n),r=$c.value;if(r&&!t.highlights[r]&&(t.highlights[r]="hover"),!e||!i||!s)return t;const o=[];for(const[c,l]of Object.entries(i.assignments)){if(l.t!=="zone"||i.ball.inPlay&&i.phase!=="defenseReveal")continue;const u=l.zone,h=s.zoneLabel(u);o.some(d=>d.label===h)||o.push({zone:u,rect:s.zoneRect(u),label:h})}t.zones=o;const a=Ms.value;switch(e.kind){case"lineup":{const c=Gn.value;if(c&&a){t.positions=Object.fromEntries(c.placements.map(d=>[d.id,d.pos])),t.extraTokens=c.placements.map(d=>({id:d.id,side:c.side,pos:d.pos}));const l=new Set,u=n.config.teams[c.coach][c.side];for(const d of c.placements){const f=u.find(g=>g.id===d.id);f&&((c.side==="defense"||f.position!=="OL"&&f.position!=="QB")&&l.add(d.id),f.position==="QB"&&l.add(d.id))}t.draggable=l;const h=Au(c.coach,c.side);if(h&&wu.value.length<2){const d=c.placements.map(_=>({id:_.id,position:u.find(v=>v.id===_.id).position,pos:_.pos})),f=ku(h,d,e.los),g=jc({side:c.side,players:d.map(_=>({id:_.id,def:u.find(v=>v.id===_.id),pos:_.pos})),markers:f.markers,routes:f.routes,selected:null,los:e.los,boardMinY:i.boardMinY});t.routes=g.routes,t.zones=[...o,...g.zones]}}break}case"markers":{const c=ps.value;if(c&&a){t.markerOverride=c.markers;const l=n.config.teams[c.coach][c.side],u=Object.values(i.players).filter(d=>d.side===c.side).map(d=>({id:d.id,def:l.find(f=>f.id===d.id),pos:d.pos})),h=jc({side:c.side,players:u,markers:c.markers,routes:c.routes,selected:Qs.value?Ci.value?.id??null:null,los:i.los,boardMinY:i.boardMinY});t.routes=h.routes,t.zones=[...o,...h.zones]}break}case"manTarget":{for(const c of e.options)t.highlights[c]="option";t.highlights[e.defender]="selected";break}case"switchOption":{t.highlights[e.defender]="selected",t.highlights[e.target]="target";break}case"freeBlockers":{for(const u of e.blockers)u.done||(t.highlights[u.id]="option");const c=Xt.value,l=e.blockers.find(u=>u.id===c);if(l){t.highlights[l.id]="selected";for(const h of l.engageable)t.highlights[h]="engageable";if(l.designated&&(t.highlights[l.designated]="designated"),Vn.value==="move"&&!l.done){const h=qr(e,l.id);t.mover={id:l.id,spec:h};const d=Wc.value;d&&(t.preview=Bh(s,h,d))}t.rings=[{id:l.id,radius:ge+Ia,color:"#58c27d",dashed:!0}]}break}case"move":{for(const u of e.movers)!u.done&&u.mode.t!=="none"&&(t.highlights[u.id]="option");for(const u of e.movers)!u.done&&(u.mayDisengage||u.mayBlitz)&&(t.highlights[u.id]="option");const c=Xt.value,l=qr(e,c);if(l&&!l.done){t.highlights[l.id]="selected";const u=ri.value==="disengage"?{...l,mode:{t:"free"}}:l;t.mover={id:l.id,spec:u};const h=Wc.value;h&&u.mode.t!=="none"&&(t.preview=Bh(s,u,h)),t.rings=MM(s,l.id)}break}case"engageOffer":{t.highlights[e.blocker]="engageable",t.highlights[e.defender]="danger";break}case"pushAround":{t.highlights[e.winner]="selected",t.highlights[e.loser]="target";const c=Ei.value,l=c.anchor&&e.blockers.includes(c.anchor)?c.anchor:e.winner,u=EM(n,l,e.loser,c.push,c.turn,c.follow,e.blockers);u&&(t.ghosts=u);break}case"pancakeChoice":{for(const c of e.blockers)t.highlights[c]="option";t.highlights[e.defender]="selected";break}case"breakThrough":{t.highlights[e.defender]="selected",t.highlights[e.blocker]="target",t.ghosts=Oh(s,e.blocker,e.defender).map(c=>({...c,color:"#ef6461"}));break}case"clutchTackle":{t.highlights[e.defender]="danger",t.highlights[e.carrier]="target";break}case"jumpTackle":{for(const c of e.candidates)t.highlights[c]="option";t.highlights[e.carrier]="target";break}case"tackleStyle":{t.highlights[e.tackler]="danger",t.highlights[e.carrier]="target";break}case"missedTackle":{t.highlights[e.tackler]="danger",t.highlights[e.carrier]="selected";const c=s.f(e.tackler).pos;t.ghosts=Oh(s,e.tackler,e.carrier,l=>l.y<=c.y+1e-6).map(l=>({...l,color:"#58c27d"}));break}case"pass":{const c=i.ball.carrier;for(const u of e.options)t.highlights[u.target]=u.isRead?"target":"option";const l=ar.value??$c.value;c&&(t.rings=[{id:c,radius:ge+rp,color:"#ef6461",dashed:!0}],l&&e.options.some(u=>u.target===l)&&(t.highlights[l]="selected",t.passLine={from:s.f(c).pos,to:s.f(l).pos},t.rings.push({id:l,radius:ge+op,color:"#9fd4ff",dashed:!0})));break}case"contest":{t.highlights[e.receiver]="target";const c=ms.value;for(const l of e.defenders)t.highlights[l]=c[l]==="cleanShot"?"danger":"option";break}case"cleanShot":{t.highlights[e.carrier]="target";for(const c of e.tacklers)t.highlights[c]="danger";break}}return t});function Bh(n,e,t){const i=n.f(e.id).pos,s=Bc(n,e,t);if("error"in s)return{from:i,to:t,ok:!1,marks:[],text:s.error};const r=s.plan,o=[];for(const c of r.events)c.kind==="hole"&&o.push({at:c.at,kind:"hole"});r.clipped&&r.clipped.reason!=="allowance"&&o.push({at:r.to,kind:"stop"});const a=r.clipped?.reason==="blocked"?`Blocked by ${r.clipped.by?n.short(r.clipped.by):"a player"}`:r.clipped?.reason==="bounds"?"Reaches the boundary":r.clipped?.reason==="line"?"Linemen stay behind the line until the ball is in play":r.clipped?.reason==="overlap"?"Cannot end on another base":`${r.distance.toFixed(1)} cm`;return{from:i,to:r.to,ok:!0,marks:o,text:a}}function MM(n,e){const t=n.play,i=[],s=n.f(e),r=n.effectiveCarrier();if(s.side==="offense"&&e===r)for(const o of n.defensePlayers())!n.canAct(o.id)||o.s.tackled||(s.cannotTackleUntil[o.id]??0)>t.slice||(n.isEngaged(o.id)?o.s.clutchEligible&&i.push({id:o.id,radius:ge+da,color:"#f5a524"}):i.push({id:o.id,radius:ge+xu,color:"#ef6461",dashed:!0}));else if(s.side==="defense"){for(const[o,a]of Object.entries(t.designations))a!==e||!t.players[o]||i.push({id:o,radius:ge+Ia,color:"#58c27d",dashed:!0});r&&n.has(r)&&i.push({id:r,radius:ge+.05,color:"#ffffff",dashed:!0})}else s.side;return i}function EM(n,e,t,i,s,r,o){const a=structuredClone(n),c=eo(a);if(!c)return null;const l=o.includes(e)?t:e,u=o.filter(d=>d!==e&&d!==t);try{Tp(c,e,t,i,s,r,u,l)}catch{return null}const h=[];for(const d of[e,t,...u]){const f=n.play.players[d].pos,g=a.play.players[d].pos;at(f,g)>1e-6&&h.push({key:`push-${d}`,pos:g,color:d===t?"#ef6461":"#f2c14e",label:String(c.def(d).number)})}return h}async function Ce(n){const e=await uM(n);!e.ok&&e.error&&Ru(e.error)}function TM(n,e=null){const t=rn.value,i=Tt.value;if(!t||!i||!Ms.value){$t.value=n;return}if((t.kind==="move"||t.kind==="freeBlockers")&&n===Xt.value&&e){const s=qr(t,n);if(s&&!s.done&&(t.kind==="move"?s.mode.t!=="none"||ri.value==="disengage":Vn.value==="move")){Qc(e);return}}switch(t.kind){case"manTarget":t.options.includes(n)?Ce({kind:"manTarget",target:n}):$t.value=n;return;case"freeBlockers":{if(t.blockers.find(o=>o.id===n)){Xt.value=n,Vn.value="move",$t.value=n;return}const r=t.blockers.find(o=>o.id===Xt.value);if(r&&i.play?.players[n]?.side==="defense"){r.engageable.includes(n)&&r.mayEngage&&Vn.value!=="designate"?Ce({kind:"engage",blocker:r.id,defender:n}):Ce({kind:"designate",blocker:r.id,defender:n});return}$t.value=n;return}case"move":{const s=t.movers.find(o=>o.id===n);if(s&&!s.done){Xt.value=n,ri.value="move",$t.value=n;return}if(qr(t,Xt.value)&&i.play?.players[n]){Qc(i.play.players[n].pos);return}$t.value=n;return}case"jumpTackle":t.candidates.includes(n)&&Ce({kind:"jumpTackle",defender:n});return;case"pancakeChoice":t.blockers.includes(n)&&Ce({kind:"pancakeChoice",blocker:n});return;case"pushAround":t.blockers.includes(n)&&t.blockers.includes(t.winner)&&(Ei.value={...Ei.value,anchor:n});return;case"pass":{t.options.some(s=>s.target===n)?ar.value===n?Ce({kind:"pass",target:n}):ar.value=n:$t.value=n;return}case"contest":{if(t.defenders.includes(n)){const s=ms.value[n]??"contest";ms.value={...ms.value,[n]:s==="contest"?"cleanShot":"contest"}}return}case"cleanShot":t.tacklers.includes(n)&&Ce({kind:"cleanShot",tackler:n});return;case"markers":{$t.value=n;const s=ps.value;s&&s.markers[n]&&(Ci.value={id:n,slot:Ci.value?.id===n?Ci.value.slot:0},Qs.value=!0);return}default:$t.value=n}}function Qc(n){const e=rn.value,t=Tt.value;if(!e||!t||!Ms.value){$t.value=null;return}if(e.kind==="move"){const i=qr(e,Xt.value);if(!i||i.done)return;ri.value==="disengage"?Ce({kind:"disengage",id:i.id,to:n}):i.mode.t!=="none"&&Ce({kind:"move",id:i.id,to:n});return}if(e.kind==="freeBlockers"){const i=e.blockers.find(s=>s.id===Xt.value);i&&!i.done&&Vn.value==="move"&&Ce({kind:"move",id:i.id,to:n});return}e.kind!=="lineup"&&e.kind!=="markers"&&($t.value=null)}function wM(n){const e=rn.value;!e||!Ms.value||(e.kind==="breakThrough"?Ce({kind:"breakThrough",angle:Number(n)}):e.kind==="missedTackle"&&Ce({kind:"missedTackle",angle:Number(n)}))}function AM(n,e){Wc.value=n,$c.value=e}function CM(n,e,t){const i=Gn.value,s=Tt.value,r=rn.value;if(!i||!s||!r||r.kind!=="lineup")return;const a=s.config.teams[i.coach][i.side].find(u=>u.id===n);if(!a)return;let c={x:e.x,y:e.y};const l=r.los;if(i.side==="offense"){if(a.position==="OL")return;if(a.position==="QB"){const u=l-ge-qe;c={x:(s.config,31),y:Math.max(u-4,Math.min(u,e.y))},i.qbDepth=Math.round((u-c.y)*10)/10}else c.y=Math.min(c.y,l-ge)}else c.y=Math.max(c.y,l+ge);c.x=Math.max(ge,Math.min(62-ge,c.x)),c={x:Math.round(c.x*10)/10,y:Math.round(c.y*10)/10},Gn.value={...i,placements:i.placements.map(u=>u.id===n?{id:n,pos:c}:u)}}function RM(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function kM(n){const e=Tt.value;if(!e)return m("div",{class:"scoreboard"});const t=rn.value,i=e.play,s=i&&!i.result?i.offense:e.possession,r=({c:l})=>m("div",{class:`team-score ${s===l?"has-ball":""}`,children:[m("div",{class:"swatch",style:{background:Ma(l)}}),m("div",{class:"name",children:e.config.teams[l].name}),m("div",{class:"pts",children:e.score[l]})]}),o=e.lineToGain<=0?"goal":Math.max(0,Math.round(e.ballOn-e.lineToGain)),a=Yr(e.ballOn),c=e.clock.mode==="twoMinute"?`Two-minute mode: ${e.clock.snapsLeft} snap${e.clock.snapsLeft===1?"":"s"} left`:e.config.gameType==="full"?`Drive ${e.clock.drivesCompleted+1}`:e.overtime.active?"Overtime":PM(e.config.gameType);return m("div",{class:"scoreboard",children:[m(r,{c:"home"}),m(r,{c:"away"}),m("div",{class:"situation",children:[e.stage==="over"?m("span",{class:"big",children:"FINAL"}):e.stage==="kickoff"?m("span",{class:"big",children:"Kick-off"}):e.stage==="try"?m("span",{class:"big",children:"Try"}):m(Wt,{children:[m("span",{class:"big",children:[RM(e.down)," & ",o]}),m("span",{class:"muted",children:["at ",a]})]}),m("span",{class:"muted",children:c}),i&&i.slice>0&&!i.result&&m("span",{class:"chip",children:["Timeslice ",i.slice]})]}),m("div",{class:"spacer"}),m("span",{class:"muted",children:wn.value?.status.value}),t&&t.coach!=="both"&&m("span",{class:"coachtag",style:{background:Ma(t.coach)},children:[e.config.teams[t.coach].abbreviation," to act"]}),m("button",{class:"small",onClick:()=>{wn.value?.undo()},title:"Undo the last action",children:"Undo"}),m("button",{class:"small",onClick:()=>LM(),title:"Download the game (seed and actions)",children:"Save"}),m("button",{class:"small",onClick:n.onNewGame,children:"New game"})]})}function PM(n){switch(n){case"full":return"Full game";case"collegeOT":return"College overtime";case"suddenDeathClassic":return"Sudden death (classic)";case"suddenDeathModern":return"Sudden death (modern)";default:return n}}function LM(){const n=wn.value?.save();if(!n)return;const e=new Blob([JSON.stringify(n)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=`afm-game-${Date.now()}.json`,t.click()}const Nl=["defenseReveal","offenseReveal","freeBlockers","resolveBlocks","ballCarrier","defenders","receivers","zones","pass"];function DM(){const e=Tt.value?.play;if(!e)return null;if(e.phase==="lineupOffense"||e.phase==="lineupDefense"||e.phase==="markers")return m("div",{class:"panel",children:[m("h3",{children:"Preparing the play"}),m("div",{class:"phasebar",children:["lineupOffense","lineupDefense","markers"].map(s=>m("span",{class:`ph ${s===e.phase?"now":Nl.indexOf(s)<0&&zh(s)<zh(e.phase)?"done":""}`,children:Mh[s]}))})]});const i=Nl.indexOf(e.phase);return m("div",{class:"panel",children:[m("h3",{children:["Timeslice ",e.slice,e.slice>4?" (play has broken down)":"",e.ball.inPlay?" · ball in play":"",e.ball.loose?" · LOOSE BALL":""]}),m("div",{class:"phasebar",children:[Nl.map((s,r)=>m("span",{class:`ph ${s===e.phase?"now":r<i?"done":""}`,children:Mh[s]})),e.phase==="looseBall"&&m("span",{class:"ph now",children:"Loose ball"}),e.phase==="over"&&m("span",{class:"ph now",children:"Play over"})]})]})}function zh(n){return["lineupOffense","lineupDefense","markers"].indexOf(n)}const zp="afm-playbooks";function IM(){try{const n=JSON.parse(localStorage.getItem(zp)??"null");if(n&&Array.isArray(n.plays)&&Array.isArray(n.playbooks))return n}catch{}return{plays:[],playbooks:[]}}const Hp=IM(),hn=tt(Hp.plays),Ut=tt(Hp.playbooks);function Oi(){try{localStorage.setItem(zp,JSON.stringify({plays:hn.value,playbooks:Ut.value}))}catch{}}function NM(n){return yM.find(e=>e.id===n)??hn.value.find(e=>e.id===n)}function eu(n){const e={...n,stock:!1};hn.value=[...hn.value.filter(t=>t.id!==e.id),e],Oi()}function UM(n){hn.value=hn.value.filter(e=>e.id!==n),Ut.value=Ut.value.map(e=>({...e,plays:e.plays.filter(t=>t!==n)})),Oi()}const Gp={offense:"stock-offense",defense:"stock-defense"},OM={offense:"custom-offense",defense:"custom-defense"};function Vp(n){const e=[{id:Gp[n],name:"Stock plays",side:n,plays:bM(n).map(i=>i.id)}],t=hn.value.filter(i=>i.side===n);return t.length&&e.push({id:OM[n],name:"My plays",side:n,plays:t.map(i=>i.id)}),[...e,...Ut.value.filter(i=>i.side===n)]}function Wp(n,e){return Vp(e).find(t=>t.id===n)}function FM(n,e){const t={id:`book-${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:n,side:e,plays:[]};return Ut.value=[...Ut.value,t],Oi(),t}function BM(n,e){Ut.value=Ut.value.map(t=>t.id===n?{...t,name:e}:t),Oi()}function zM(n){Ut.value=Ut.value.filter(e=>e.id!==n),Oi()}function tu(n,e){Ut.value=Ut.value.map(t=>t.id===n&&!t.plays.includes(e)?{...t,plays:[...t.plays,e]}:t),Oi()}function HM(n,e){Ut.value=Ut.value.map(t=>t.id===n?{...t,plays:t.plays.filter(i=>i!==e)}:t),Oi()}function Hh(n,e,t){Ut.value=Ut.value.map(i=>{if(i.id!==n)return i;const s=i.plays.indexOf(e),r=s+t;if(s<0||r<0||r>=i.plays.length)return i;const o=[...i.plays];return[o[s],o[r]]=[o[r],o[s]],{...i,plays:o}}),Oi()}function $p(n){return n.plays.map(NM).filter(e=>!!e)}function GM(n,e){try{localStorage.setItem(`afm-playbook-last-${n}`,e)}catch{}}function VM(n){try{const e=localStorage.getItem(`afm-playbook-last-${n}`);if(e&&Wp(e,n))return e}catch{}return Gp[n]}function WM(){return JSON.stringify({plays:hn.value,playbooks:Ut.value},null,2)}function $M(n){const e=JSON.parse(n),t=(e.plays??[]).filter(o=>o&&typeof o.id=="string"&&Array.isArray(o.slots)),i=(e.playbooks??[]).filter(o=>o&&typeof o.id=="string"&&Array.isArray(o.plays)),s=new Set(t.map(o=>o.id));hn.value=[...hn.value.filter(o=>!s.has(o.id)),...t.map(o=>({...o,stock:!1}))];const r=new Set(i.map(o=>o.id));return Ut.value=[...Ut.value.filter(o=>!r.has(o.id)),...i],Oi(),{plays:t.length,playbooks:i.length}}function Du(n){const[e,t]=Pt(()=>VM(n.side)),[i,s]=Pt(!1),r=Vp(n.side),o=r.find(f=>f.id===e)??r[0],a=$p(o),c=n.value?.formation.endsWith(" (flipped)")??!1,l=n.value&&a.some(f=>f.id===n.value.id)?n.value.id:"",u=f=>{t(f),GM(n.side,f)},h=f=>{const g=a.find(_=>_.id===f);if(!g)return n.onPick(null);n.onPick(c?Jc(g):g)};if(n.hideValue&&n.value&&!i)return m("div",{class:"row playpicker",children:[n.label&&m("span",{class:"muted",children:n.label}),m("span",{class:"chip good",children:"play called (hidden)"}),m("button",{class:"small",onClick:()=>s(!0),children:"Change"}),m("button",{class:"small",onClick:()=>n.onPick(null),title:"Clear the play",children:"×"})]});const d=f=>{h(f),s(!1)};return m("div",{class:"col playpicker",children:[m("div",{class:"row",children:[n.label&&m("span",{class:"muted",children:n.label}),m("select",{value:o.id,onChange:f=>u(f.target.value),title:"Playbook",children:r.map(f=>m("option",{value:f.id,children:[f.name," (",f.plays.length,")"]}))}),m("select",{value:l,onChange:f=>d(f.target.value),style:{flex:1,minWidth:140},title:"Play",children:[m("option",{value:"",children:"— choose a play —"}),a.map(f=>m("option",{value:f.id,children:[f.name," · ",Ir[f.kind],f.stock?"":" ★"]}))]}),!n.noFlip&&m("button",{class:`small ${c?"active":""}`,disabled:!n.value,onClick:()=>n.value&&n.onPick(Jc(n.value)),title:"Mirror the play left to right",children:"Flip"}),n.value&&m("button",{class:"small",onClick:()=>n.onPick(null),title:"Clear the play",children:"×"})]}),!n.compact&&!n.hideValue&&n.value&&m("div",{class:"muted playdesc",children:[m("b",{children:n.value.name}),c?" (flipped)":""," · ",n.value.formation.replace(" (flipped)","")," · ",Ir[n.value.kind],m("div",{children:n.value.description})]})]})}function XM(n){const e=Tt.value;if(!e)return;const t=e.config.teams[n.coach][n.side],i=Gn.value,s=n.side==="offense"?ni:Fn,r=localStorage.getItem(`afm-formation-${n.coach}-${n.side}`),o=s.find(c=>c.name===(i&&i.side===n.side&&i.coach===n.coach?i.formation:r))??s[0],a=e.play?.boardMinY??0;Cu(n.coach,n.side,null),Gn.value={coach:n.coach,side:n.side,formation:o.name,qbDepth:o.qbDepth??0,linemen:o.linemen??5,extraSide:o.extraLinemanSide??"right",placements:ba(o,t,n.los,a)}}function YM(){const n=rn.value,e=Tt.value,t=Gn.value;if(!n||n.kind!=="lineup"||!e||!t)return null;const i=e.config.teams[n.coach][n.side],s=n.side==="offense"?ni:Fn,r=e.play?.boardMinY??0,o=e.play?Object.values(e.play.players).filter(w=>w.side==="offense").map(w=>w.pos):[],a=Lp(n.side,i,t.placements,n.los,r,o),c=t.placements.map(w=>w.id),l=Kx(i,c),u=$t.value&&c.includes($t.value)?$t.value:null,h=u?i.find(w=>w.id===u):null,d=Au(n.coach,n.side),f=wu.value.length===2,g=(w,k)=>{Gn.value={...t,formation:k,qbDepth:w.qbDepth??0,linemen:w.linemen??5,extraSide:w.extraLinemanSide??"right",placements:ba(w,i,n.los,r)}},_=w=>{const k=s.find(I=>I.name===w);localStorage.setItem(`afm-formation-${n.coach}-${n.side}`,w),g(k,w)},v=w=>{Cu(n.coach,n.side,w),w&&g(Op(w),w.formation)},p=w=>{const k=i.find(I=>I.position==="QB"&&c.includes(I.id));k&&(Gn.value={...t,qbDepth:w,placements:t.placements.map(I=>I.id===k.id?{id:I.id,pos:Ba(n.los,w)}:I)})},b=(w,k)=>{const I=i.filter(q=>q.position==="OL"),T=t.placements.filter(q=>I.some(W=>W.id===q.id)),E=t.placements.filter(q=>!I.some(W=>W.id===q.id)),D=ya(n.los,w,k),F=[...T.map(q=>q.id),...I.filter(q=>!T.some(W=>W.id===q.id)).map(q=>q.id)].slice(0,w);let G=E;if(w===6&&G.length>5){const q=i.find(P=>P.position==="QB"),W=G.filter(P=>P.id!==q?.id);G=G.filter(P=>P.id!==W[W.length-1]?.id)}Gn.value={...t,linemen:w,extraSide:k,placements:[...F.map((q,W)=>({id:q,pos:D[W]})),...G]}},S=(w,k)=>{Gn.value={...t,placements:t.placements.map(I=>I.id===w?{id:k.id,pos:I.pos}:I)},$t.value=k.id},x=t.placements.length-(n.side==="offense"?t.linemen+1:0),A=s.some(w=>w.name===t.formation);return m("div",{class:"col",children:[m(Du,{side:n.side,value:d,onPick:v,label:"Play",hideValue:f}),d&&m("div",{class:"muted",children:f?"The play's formation is lined up. Its markers load behind the curtain in the next step, where you can still adjust them.":"The play's formation is lined up and its routes are drawn. Its markers load in the next step, where you can still adjust them."}),m("div",{class:"row",children:[m("span",{class:"muted",children:"Formation"}),m("select",{value:A?t.formation:"",onChange:w=>_(w.target.value),children:[!A&&m("option",{value:"",children:t.formation}),s.map(w=>m("option",{value:w.name,children:w.name}))]}),n.side==="offense"&&m(Wt,{children:[m("button",{class:`small ${t.linemen===5?"active":""}`,onClick:()=>b(5,t.extraSide),children:"5 OL"}),m("button",{class:`small ${t.linemen===6&&t.extraSide==="left"?"active":""}`,onClick:()=>b(6,"left"),children:"6 OL (left)"}),m("button",{class:`small ${t.linemen===6&&t.extraSide==="right"?"active":""}`,onClick:()=>b(6,"right"),children:"6 OL (right)"})]})]}),n.side==="offense"&&m("label",{class:"row",children:[m("span",{style:{minWidth:120},children:["QB depth ",t.qbDepth.toFixed(1)," cm"]}),m("input",{type:"range",min:0,max:4,step:.5,value:t.qbDepth,onInput:w=>p(Number(w.target.value))}),m("span",{class:"muted",children:t.qbDepth===0?"under centre":"shotgun"})]}),m("div",{class:"muted",children:["Drag ",n.side==="offense"?"skill players":"defenders"," on the board. ",n.side==="offense"?`${x} skill players.`:""," Click a player to substitute."]}),h&&m("div",{class:"col",children:[m("div",{children:["Substitute ",m("b",{children:Up(h.id)})," with:"]}),m("div",{class:"row",children:l.filter(w=>n.side==="offense"?h.position==="OL"?w.position==="OL":h.position==="QB"?w.position==="QB":w.position!=="OL"&&w.position!=="QB":!0).map(w=>m("button",{class:"small",onClick:()=>S(h.id,w),children:[w.position," #",w.number," ",w.name.split(" ").slice(-1)[0]]}))})]}),a.length>0&&m("div",{class:"error",children:a.slice(0,4).map(w=>m("div",{children:w.text}))}),m("div",{class:"row",children:[m("span",{class:"spacer"}),m("button",{class:"primary",disabled:a.length>0,onClick:()=>Ce({kind:"lineup",placements:t.placements}),children:n.side==="offense"?"Set: defense lines up next":"Set: place markers"})]})]})}function Xp(n,e){return((e-n)%360+360)%360||360}function Yp(n,e,t){const i=Xp(e,t),s=((n-e)%360+360)%360;return i===360||s<=i+1e-6}function qM(n,e,t){const i=n.f(e.id),s=e.allowance;if(s<=0)return null;switch(e.mode.t){case"fixed":return{angle:e.mode.angle,distance:s};case"along":return{angle:e.mode.angle,distance:s};case"sector":{const{from:r,to:o}=e.mode;if(t){const a=Sp(t.break,i.pos.x);if(Yp(a,r,o))return{angle:a,distance:s}}return{angle:r+Xp(r,o)/2,distance:s}}case"closer":{const r=e.mode.target,o=at(i.pos,r);return o<1e-6?null:{angle:Math.atan2(r.x-i.pos.x,r.y-i.pos.y)*180/Math.PI,distance:Math.min(s,o)}}case"free":{if(e.notFartherFrom&&n.has(e.notFartherFrom)){const r=n.f(e.notFartherFrom).pos,o=at(i.pos,r)-qe-.3;return o<=.05?null:{angle:Math.atan2(r.x-i.pos.x,r.y-i.pos.y)*180/Math.PI,distance:Math.min(s,o)}}return null}default:return null}}function KM(n,e){if(n.mode.t!=="sector")return[e];const{from:t,to:i}=n.mode,s=[e];for(let r=7.5;r<=180;r+=7.5)for(const o of[1,-1]){const a=e+o*r;Yp(a,t,i)&&s.push(a)}return s}function ZM(n,e,t){const i=qM(n,e,t);if(!i)return null;const s=n.f(e.id).pos,r=KM(e,i.angle),o=(c,l)=>{const u=vn(c);return{x:s.x+u.x*i.distance*l,y:s.y+u.y*i.distance*l}};for(const c of r){const l=o(c,1),u=Bc(n,e,l);if("plan"in u&&u.plan.distance>=i.distance-.05)return l}let a=null;for(const c of r)for(const l of[1,.75,.5,.25]){const u=o(c,l),h=Bc(n,e,u);"plan"in h&&h.plan.distance>.05&&(!a||h.plan.distance>a.distance+.05)&&(a={to:u,distance:h.plan.distance})}return a?.to??null}const Dn=tt({home:{auto:{},routes:{}},away:{auto:{},routes:{}}});function JM(n,e){return!!Dn.value[n].auto[e]}function Gh(n,e,t){const i=Dn.value[n];Dn.value={...Dn.value,[n]:{...i,auto:{...i.auto,[e]:t}}}}function jM(n,e){Dn.value={...Dn.value,[n]:e}}function Ea(n,e){const t=n?.play;return!t||t.ball.passed?!1:t.assignments[e.id]?.t==="man"&&!!e.notFartherFrom}function Ul(n,e,t){return Ea(n,t)||JM(e,t.id)}const qp="afm-automove";function QM(){try{return localStorage.getItem(qp)!=="off"}catch{return!0}}function eE(n){try{localStorage.setItem(qp,n?"on":"off")}catch{}}const tE=400;function Vh(n,e){if(!n||!e||!e.play||n.kind!=="move"||n.error)return null;const t=Dn.value[n.coach],i=e.play.ball.apparent??e.play.ball.carrier;return n.movers.find(s=>!s.done&&(t.auto[s.id]||Ea(e,s))&&s.id!==i&&s.mode.t!=="none"&&!s.mayDisengage&&!s.mayBlitz)??null}function nE(){let n=null,e="",t=Dn.value;const i=ki(()=>{const s=rn.value,r=Tt.value,o=Kc.value,a=Ms.value;Dn.value!==t&&(t=Dn.value,e=""),!(!a||o===e||!Vh(s,r))&&(e=o,n&&clearTimeout(n),n=setTimeout(()=>{if(n=null,Kc.value!==o)return;const c=rn.value,l=Vh(c,Tt.value);if(!c||c.kind!=="move"||!l)return;const u=eo(Tt.value);if(!u)return;const h=Dn.value[c.coach],d=h.routes[l.id]?Zi(h.routes[l.id])??null:null;let f=null;try{f=ZM(u,l,d)}catch(g){Ru(`Auto-move: ${g.message}`);return}Ce(f?{kind:"move",id:l.id,to:f}:{kind:"skipMove",id:l.id})},tE))});return()=>{i(),n&&clearTimeout(n)}}const iE=["quick","intermediate","deep","double","backfield","delayed"];function sE(n){const e=Tt.value;if(!e||!e.play)return;const t=Object.values(e.play.players).filter(c=>c.side===n.side).map(c=>c.id),i={},s={},r=QM();for(const c of t)i[c]=xt([],n.slots),s[c]=r;let o={coach:n.coach,side:n.side,markers:i,routes:{},play:null,auto:s};const a=Au(n.coach,n.side);a&&(o=Kp(o,a,n)),ps.value=o,Ci.value=t.length?{id:t[0],slot:0}:null,Qs.value=!1}function Kp(n,e,t){const i=Tt.value;if(!i||!i.play)return n;const s=i.config.teams[t.coach][t.side],r=Object.values(i.play.players).filter(c=>c.side===t.side).map(c=>({id:c.id,position:s.find(l=>l.id===c.id).position,pos:c.pos})),o=ku(e,r,i.play.los),a={...n.markers};for(const c of Object.keys(o.markers))a[c]=xt(o.markers[c],t.slots);return{...n,markers:a,routes:o.routes,play:e}}function rE(){const n=rn.value,e=Tt.value,t=ps.value,[i,s]=Pt(""),[r,o]=Pt(""),a=Qs.value;if(!n||n.kind!=="markers"||!e||!e.play||!t)return null;const c=e.config.teams[n.coach][n.side],l=Object.values(e.play.players).filter(P=>P.side===n.side).map(P=>c.find($=>$.id===P.id)).sort((P,$)=>Ta(P.position)-Ta($.position)||P.number-$.number),u=P=>e.play.players[P].pos,h=Eu(n.side,l,t.markers),d=h.filter(P=>P.severity==="error"),f=h.filter(P=>P.severity==="warning"),g=Ci.value&&t.markers[Ci.value.id]?Ci.value:null,_=g?l.find(P=>P.id===g.id):null,v=g?t.markers[g.id][g.slot]:null,p=Ut.value.filter(P=>P.side===n.side),b=P=>ps.value={...t,...P},S=(P,$,H)=>{const ee={...t.routes};H?ee[P]=H:delete ee[P],b({markers:{...t.markers,[P]:xt($,n.slots)},routes:ee})},x=(P,$,H)=>{const ee=[...t.markers[P]??xt([],n.slots)];ee[$]=H;const oe=$r(ee,u(P).x,t.routes[P]);S(P,ee,oe?.id)},A=(P,$)=>{const H={...t.markers};for(const ee of l.filter(oe=>oe.position==="OL")){const oe=[...H[ee.id]??xt([],n.slots)];if($===null)for(let pe=0;pe<n.slots;pe++)oe[pe]=P;else oe[$]=P;H[ee.id]=oe}b({markers:H})},w=(P,$,H)=>{const ee=[...t.markers[P]??xt([],n.slots)];for(let oe=$;oe<n.slots;oe++)ee[oe]=H;S(P,ee)},k=(P,$)=>{const H=Zi($);if(!H)return S(P,[]);S(P,bp(H,u(P).x),H.id)},I=(P,$)=>{Ci.value={id:P,slot:$},$t.value=P,Qs.value=!0},T=l.every(P=>t.auto[P.id]),E=P=>{const $={};for(const H of l)$[H.id]=P;eE(P),b({auto:$})},D=()=>{jM(n.coach,{auto:t.auto,routes:t.routes}),Ce({kind:"markers",markers:t.markers})},F=P=>{if(!P){const $={};for(const H of l)$[H.id]=xt([],n.slots);b({markers:$,routes:{},play:null});return}ps.value=Kp(t,P,n),Cu(n.coach,n.side,P)},G=()=>{const P=i.trim();if(!P)return;const $=t.play,H=$?.kind??oE(n.side,t.markers),ee=gM({id:Pu(),name:P,side:n.side,kind:H,description:$?`From ${$.name}.`:"",formation:$?.formation??"Custom",qbDepth:$?.qbDepth??0,linemen:l.filter(oe=>oe.position==="OL").length===6?6:5,extraSide:$?.extraSide??"right"},l.map(oe=>({id:oe.id,position:oe.position,pos:u(oe.id),markers:t.markers[oe.id]??[],route:t.routes[oe.id]})),e.play.los);eu(ee),r&&tu(r,ee.id),b({play:ee}),s(""),Ru(`Saved "${P}" to your plays${r?" and the playbook":""}.`)},q=l.filter(P=>P.id!==g?.id),W=P=>$r(t.markers[P.id],u(P.id).x,t.routes[P.id]);return m("div",{class:"col",children:[m(Du,{side:n.side,value:t.play,onPick:F,label:"Play"}),m("div",{class:"muted",children:t.play?"The play is drawn on the board. Click a player to adjust his markers.":"Pick a play, or click a player and give him a route or markers. The board shows what the markers do."}),m("div",{class:"row",children:[m("label",{class:"row autotoggle",title:"Players on auto follow their diagram at each move decision; the others are moved by hand. Toggle any player in his row, or during the play.",children:[m("input",{type:"checkbox",checked:T,onChange:P=>E(P.target.checked)}),m("span",{children:"Auto-move all"})]}),m("span",{class:"muted",style:{fontSize:12},children:[l.filter(P=>t.auto[P.id]).length," of ",l.length," on auto"]})]}),m("div",{class:"list",children:l.map(P=>{const $=W(P),H=g&&g.id===P.id;return m("div",{class:`item playrow ${H?"sel":""}`,onClick:()=>I(P.id,H&&a?g.slot:0),children:[m("input",{type:"checkbox",class:"autobox",title:t.auto[P.id]?"Auto-move on: follows his diagram":"Auto-move off: moved by hand",checked:!!t.auto[P.id],onClick:ee=>ee.stopPropagation(),onChange:ee=>b({auto:{...t.auto,[P.id]:ee.target.checked}})}),m("span",{class:"num",children:["#",P.number]}),m("span",{class:"pos",children:P.position}),m("span",{class:"rsum",title:$?.note??"",children:Lu(t.markers[P.id],u(P.id).x,t.routes[P.id])}),m("span",{class:"spacer"}),m("span",{class:"minislots",children:xt(t.markers[P.id],n.slots).map((ee,oe)=>m("span",{class:`mini ${ee.t} ${H&&g.slot===oe?"sel":""}`,title:`Timeslice ${oe+1}: ${Ss(ee)}`,onClick:pe=>{pe.stopPropagation(),I(P.id,oe)},children:em(ee,l)}))})]})})}),g&&_&&v&&a&&m("div",{class:"panel markermenu",children:[m("div",{class:"row",children:[m("b",{children:[_.position," #",_.number," ",_.name]}),m("span",{class:"spacer"}),m("button",{class:"small",onClick:()=>Qs.value=!1,title:"Close the marker menu",children:"×"})]}),n.side==="offense"&&Na(_.position).includes("cut")&&m("label",{class:"row",children:[m("span",{class:"muted",style:{minWidth:44},children:"Route"}),m(Zp,{value:W(_)?.id??"",onChange:P=>k(g.id,P)})]}),m("div",{class:"slots",children:xt(t.markers[g.id],n.slots).map((P,$)=>m("div",{class:`slot ${P.t} ${g.slot===$?"sel":""}`,onClick:()=>I(g.id,$),title:`Timeslice ${$+1}`,children:[m("span",{class:"muted",style:{fontSize:9},children:["T",$+1]}),m("span",{class:"t",children:P.t==="filler"?"filler":Qp(P,l)})]}))}),m(jp,{def:_,slotIndex:g.slot,current:v,teammates:q,onSet:P=>x(g.id,g.slot,P),onFillRest:P=>w(g.id,g.slot,P),onAllLinemen:_.position==="OL"?(P,$)=>A(P,$?null:g.slot):void 0}),m("div",{class:"row",children:[m("button",{class:"small",disabled:g.slot>=n.slots-1,onClick:()=>I(g.id,g.slot+1),children:"Next slot →"}),m("button",{class:"small",onClick:()=>{const P=l.findIndex(H=>H.id===g.id),$=l[(P+1)%l.length];I($.id,0)},children:"Next player ↓"})]})]}),m("details",{class:"panel saveplay",children:[m("summary",{children:"Save as a custom play"}),m("div",{class:"row",children:[m("input",{placeholder:"play name",value:i,onInput:P=>s(P.target.value),style:{flex:1}}),m("select",{value:r,onChange:P=>o(P.target.value),title:"Also add it to a playbook",children:[m("option",{value:"",children:"my plays only"}),p.map(P=>m("option",{value:P.id,children:["+ ",P.name]}))]}),m("button",{class:"small",onClick:G,disabled:!i.trim(),children:"Save"})]}),m("div",{class:"muted",children:"Saves the players' spots and markers as a play you can call again and edit in the play creator."})]}),d.length>0&&m("div",{class:"error",children:d.slice(0,4).map(P=>m("div",{children:P.text}))}),f.length>0&&m("div",{class:"chip warn",style:{whiteSpace:"normal"},children:f.map(P=>m("div",{children:P.text}))}),m("div",{class:"row",children:[m("span",{class:"spacer"}),m("button",{class:"primary",disabled:d.length>0,onClick:D,children:"Place markers face down"})]})]})}function Zp(n){return m("select",{value:n.value,onChange:e=>n.onChange(e.target.value),style:{flex:1},children:[m("option",{value:"",children:"— no route (markers by hand) —"}),iE.map(e=>m("optgroup",{label:_p[e],children:Ua.filter(t=>t.group===e).map(t=>m("option",{value:t.id,title:t.note,children:[t.name,t.tree!==void 0?` (${t.tree})`:""," · ",Jp(t.id)]}))}))]})}function Jp(n){const e=Zi(n);return e?e.steps.map(t=>{switch(t.t){case"up":return"Up";case"angle":return`${t.toward==="in"?"In":"Out"} ${t.angle}°`;case"continue":return"Cont";case"delay":return"Delay";case"cut":return`Cut ${t.cut}`}}).join(" › "):""}function oE(n,e){const t=Object.values(e).flat();if(n==="defense")return t.some(r=>r.t==="man")?"man":t.filter(r=>r.t==="blitz").length>5?"blitz":"zone";const i=t.some(r=>r.t==="handoff"),s=t.some(r=>r.t==="read");return i&&s?"playAction":i?"run":t.some(r=>r.t==="delay")&&t.some(r=>r.t==="runblock")?"screen":"pass"}function jp(n){const e=Na(n.def.position),t=n.current,[i,s]=Pt(t.t==="dir"&&t.dir!=="up"?t.angle:45),[r,o]=Pt(t.t==="read"||t.t==="handoff"?t.target:n.teammates.find(u=>u.position!=="OL")?.id??""),a=(u,h,d="")=>m("button",{class:`small ${d} ${aE(t,h)?"active":""}`,onClick:()=>n.onSet(h),children:u}),c=n.teammates.filter(u=>u.position!=="OL"),l=u=>r||u?.id||"";return m("div",{class:"col",children:[m("div",{class:"markerbtns",children:[e.includes("filler")&&a("Filler",{t:"filler"}),e.includes("passblock")&&a("Pass block",{t:"passblock"}),e.includes("runblock")&&a("Run block",{t:"runblock"}),e.includes("spy")&&a("Spy",{t:"spy"}),e.includes("blitz")&&a("Blitz",{t:"blitz"}),e.includes("man")&&a("Man",{t:"man"}),e.includes("continue")&&a("Continue",{t:"continue"}),e.includes("delay")&&a("Delay",{t:"delay"})]}),(e.includes("read")||e.includes("handoff"))&&c.length>0&&m("div",{class:"row",children:[m("select",{value:r,onChange:u=>o(u.target.value),children:c.map(u=>m("option",{value:u.id,children:[u.position," #",u.number," ",u.name]}))}),e.includes("read")&&a("Read",{t:"read",target:l(c[0])}),e.includes("handoff")&&n.slotIndex<2&&a("Hand off",{t:"handoff",target:l(c[0])})]}),e.includes("run")&&n.slotIndex<2&&m("div",{class:"markerbtns",children:["left","right"].map(u=>["dive","offtackle","sprint"].map(h=>a(`${h==="dive"?"Dive":h==="offtackle"?"Off tackle":"Sprint"} ${u}`,{t:"run",side:u,lane:h})))}),e.includes("dir")&&m("div",{class:"col",children:[m("div",{class:"row",children:[a("Up",{t:"dir",dir:"up"}),a(`Left ${i}°`,{t:"dir",dir:"left",angle:i}),a(`Right ${i}°`,{t:"dir",dir:"right",angle:i})]}),m("label",{class:"row",children:[m("span",{class:"muted",style:{minWidth:70},children:["angle ",i,"°"]}),m("input",{type:"range",min:10,max:170,step:5,value:i,onInput:u=>s(Number(u.target.value))})]})]}),e.includes("cut")&&m("div",{class:"markerbtns",children:[a("Cut in",{t:"cut",cut:"in"}),a("Cut out",{t:"cut",cut:"out"}),a("Cut hook",{t:"cut",cut:"hook"}),a("Cut fly",{t:"cut",cut:"fly"})]}),e.includes("zone")&&m("div",{class:"markerbtns",children:[a("Flat L",{t:"zone",zone:"flat",side:"left"}),a("Flat R",{t:"zone",zone:"flat",side:"right"}),a("Hook",{t:"zone",zone:"hook"}),a("Curl L",{t:"zone",zone:"curl",side:"left"}),a("Curl R",{t:"zone",zone:"curl",side:"right"}),a("Deep",{t:"zone",zone:"deep"})]}),m("div",{class:"row",children:[m("button",{class:"small",onClick:()=>n.onFillRest(t),children:"Fill remaining slots with this"}),n.onAllLinemen&&m(Wt,{children:[m("button",{class:"small",onClick:()=>n.onAllLinemen(t,!1),children:"All linemen, this slot"}),m("button",{class:"small",onClick:()=>n.onAllLinemen(t,!0),children:"All linemen, all slots"})]})]})]})}function aE(n,e){return JSON.stringify(n)===JSON.stringify(e)}function Qp(n,e){if(n.t==="read"||n.t==="handoff"){const t=e.find(i=>i.id===n.target);return`${n.t==="read"?"Read":"Hand"} #${t?.number??"?"}`}return Ss(n)}function em(n,e){switch(n.t){case"filler":return"·";case"read":return`R${e.find(t=>t.id===n.target)?.number??"?"}`;case"handoff":return`H${e.find(t=>t.id===n.target)?.number??"?"}`;case"run":return`${n.lane==="dive"?"DV":n.lane==="offtackle"?"OT":"SP"}${n.side==="left"?"L":"R"}`;case"passblock":return"PB";case"runblock":return"RB";case"dir":return n.dir==="up"?"UP":`${n.dir==="left"?"L":"R"}${n.angle}`;case"continue":return"CO";case"delay":return"DL";case"cut":return`C${n.cut==="in"?"I":n.cut==="out"?"O":n.cut==="hook"?"H":"F"}`;case"man":return"MAN";case"zone":return n.zone==="flat"?`FL${n.side==="left"?"L":"R"}`:n.zone==="curl"?`CU${n.side==="left"?"L":"R"}`:n.zone==="hook"?"HK":"DP";case"spy":return"SPY";case"blitz":return"BLZ"}}function Ta(n){return["QB","RB","FB","WR","TE","OL","DL","LB","CB","S"].indexOf(n)}function bt(n){const e=Ms.value;return m("div",{class:`panel prompt ${e?"":"other"}`,children:[m("div",{class:"row",children:[n.d.coach!=="both"&&m("span",{class:"coachtag",style:{background:Ma(n.d.coach)},children:qc(n.d.coach)}),m("span",{class:"prompt-title",children:n.title})]}),n.hint&&m("div",{class:"muted",children:n.hint}),n.d.error&&m("div",{class:"error",children:n.d.error}),e?n.children:m("div",{class:"muted",children:"Waiting for the other coach…"})]})}function lE(n){switch(n.mode.t){case"free":return"any direction";case"fixed":return`straight ahead (${Math.round(n.mode.angle)}°)`;case"sector":return n.mode.label;case"closer":return`towards the ${n.mode.label}`;case"zone":return`within the ${n.mode.label} zone`;case"along":return n.mode.label;case"none":return n.mode.reason}}function cE(){const n=rn.value,e=Tt.value;if(!n||!e)return null;const t=eo(e),i=s=>Up(s);switch(n.kind){case"callToss":return m(bt,{d:n,title:"Call the toss",hint:"The visiting coach calls heads or tails.",children:m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"callToss",call:"heads"}),children:"Heads"}),m("button",{class:"primary",onClick:()=>Ce({kind:"callToss",call:"tails"}),children:"Tails"})]})});case"tossChoice":return m(bt,{d:n,title:"You won the toss",children:m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"tossChoice",choice:"receive"}),children:"Receive"}),m("button",{onClick:()=>Ce({kind:"tossChoice",choice:"kick"}),children:"Kick"})]})});case"kickoffType":return m(bt,{d:n,title:"Kick-off",hint:"A normal kick travels 2d20 plus the kicker's successrate beyond the 30. An onside kick is KICKING against COVERAGE +10; the winner has the ball at the kicking team's 40.",children:m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"kickoffType",type:"normal"}),children:"Kick deep"}),m("button",{onClick:()=>Ce({kind:"kickoffType",type:"onside"}),children:"Onside kick"})]})});case"fairCatch":return m(bt,{d:n,title:n.inEndzone?"The kick reaches the endzone":`The kick comes down at ${Yr(n.spotYtg)}`,hint:"A fair catch takes the ball where it is (the 20 from the endzone). A return is RETURN against COVERAGE, d20 yards per win; five wins in a row is a touchdown.",children:m("div",{class:"row",children:[m("button",{onClick:()=>Ce({kind:"fairCatch",fairCatch:!0}),children:n.inEndzone?"Take the touchback":"Fair catch"}),m("button",{class:"primary",onClick:()=>Ce({kind:"fairCatch",fairCatch:!1}),children:"Return it"})]})});case"puntPerfect":return m(bt,{d:n,title:"A PERFECT kick: where do you put it?",children:m("div",{class:"row",children:[m("button",{onClick:()=>Ce({kind:"puntPerfect",choice:"touchback"}),children:"Into the endzone (touchback, their 20)"}),m("button",{class:"primary",onClick:()=>Ce({kind:"puntPerfect",choice:"oneYardLine"}),children:"On the 1 yard line (returnable)"})]})});case"playCall":return m(bt,{d:n,title:`${uE(e.down)} and ${e.lineToGain<=0?"goal":Math.round(e.ballOn-e.lineToGain)} at ${Yr(e.ballOn)}`,children:m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"playCall",call:"scrimmage"}),children:"Run a play"}),n.options.includes("punt")&&m("button",{onClick:()=>Ce({kind:"playCall",call:"punt"}),children:"Punt"}),n.options.includes("fieldGoal")&&m("button",{onClick:()=>Ce({kind:"playCall",call:"fieldGoal"}),children:["Field goal (",n.fieldGoalLength," yd, ",n.fieldGoalModifier>=0?"+":"",n.fieldGoalModifier,")"]})]})});case"tryChoice":return m(bt,{d:n,title:"Touchdown! The try",hint:"An extra point is good on anything but a critical failure. A two-point attempt is one play from the 2 yard line.",children:m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"tryChoice",choice:"kick"}),children:"Kick the extra point"}),m("button",{onClick:()=>Ce({kind:"tryChoice",choice:"two"}),children:"Go for two"})]})});case"lineup":return m(bt,{d:n,title:`${n.side==="offense"?"Offense":"Defense"} lines up`,children:m(YM,{})});case"markers":return m(bt,{d:n,title:`${n.side==="offense"?"Offense":"Defense"} places markers`,children:m(rE,{})});case"manTarget":return m(bt,{d:n,title:`${i(n.defender)}: man coverage on whom?`,hint:"Click an offensive player on the board or below. The assignment cannot be changed later.",children:m("div",{class:"list",children:n.options.map(s=>m("div",{class:"item",onClick:()=>Ce({kind:"manTarget",target:s}),children:i(s)}))})});case"switchOption":return m(bt,{d:n,title:`${i(n.defender)} is in man coverage on a pass blocker`,hint:`${i(n.target)} revealed a pass block. The defender may switch to a blitz (no pre-snap move) or a zone, or stay (p. 37).`,children:m("div",{class:"row",children:[m("button",{onClick:()=>Ce({kind:"switchOption",choice:{t:"stay"}}),children:"Stay in man"}),m("button",{class:"primary",onClick:()=>Ce({kind:"switchOption",choice:{t:"blitz"}}),children:"Blitz"}),m("select",{value:Ll.value,onChange:s=>Ll.value=s.target.value,children:[m("option",{value:"flat-left",children:"Flat left"}),m("option",{value:"flat-right",children:"Flat right"}),m("option",{value:"hook",children:"Hook"}),m("option",{value:"curl-left",children:"Curl left"}),m("option",{value:"curl-right",children:"Curl right"}),m("option",{value:"deep",children:"Deep"})]}),m("button",{onClick:()=>Ce({kind:"switchOption",choice:{t:"zone",zone:dE(Ll.value)}}),children:"Zone"})]})});case"freeBlockers":{const s=n.blockers.find(r=>r.id===Xt.value);return m(bt,{d:n,title:"Move free blockers and designate blocks",hint:"Pick a blocker. Move him (click the field), designate the defender he will pick up (click a defender), or engage a defender within 2 cm now (green).",children:[m("div",{class:"list",children:n.blockers.map(r=>m("div",{class:`item ${r.id===Xt.value?"sel":""} ${r.done?"done":""}`,onClick:()=>(Xt.value=r.id,Vn.value="move"),children:[m("span",{class:"num",children:i(r.id).split(" ")[1]}),m("span",{class:"pos",children:i(r.id).split(" ")[0]}),m("span",{class:"chip",children:[r.kind," block"]}),m("span",{class:"muted",children:r.mayRelease?"double team":`${r.allowance.toFixed(1)} cm`}),r.designated&&m("span",{class:"chip warn",children:["→ ",i(r.designated).split(" ").slice(0,2).join(" ")]}),r.engageable.length>0&&r.mayEngage&&!r.done&&m("span",{class:"chip good",children:"can engage"}),r.done&&m("span",{class:"muted",children:"moved"})]}))}),s&&m("div",{class:"row",children:[!s.done&&!s.mayRelease&&m("button",{class:Vn.value==="move"?"active":"",onClick:()=>Vn.value="move",children:"Move: click the field"}),!s.mayRelease&&m("button",{class:Vn.value==="designate"?"active":"",onClick:()=>Vn.value="designate",children:"Designate: click a defender"}),s.designated&&m("button",{onClick:()=>Ce({kind:"designate",blocker:s.id,defender:null}),children:"Clear designation"}),s.engageable.map(r=>m("button",{class:"primary",disabled:!s.mayEngage,onClick:()=>Ce({kind:"engage",blocker:s.id,defender:r}),children:["Engage ",i(r)]})),s.mayRelease&&m("button",{onClick:()=>Ce({kind:"release",blocker:s.id}),children:"Leave the double team"}),!s.mayEngage&&s.kind==="run"&&m("span",{class:"muted",children:"Run blocks engage only once the ball is in play."})]}),m("div",{class:"row",children:[m("span",{class:"spacer"}),m("button",{class:"primary",onClick:()=>Ce({kind:"finish"}),children:"Done with blockers"})]})]})}case"move":{const s=n.movers.find(c=>c.id===Xt.value),r=n.movers.filter(c=>!c.done);Dn.value;const o=n.movers.filter(c=>Ul(e,n.coach,c)).length,a=c=>{for(const l of n.movers)Gh(n.coach,l.id,c)};return m(bt,{d:n,title:n.title,hint:"Pick a player, then click where he goes. Moves are straight lines up to his movement allowance. Players on auto follow their diagram; man coverage follows its man until the ball is passed.",children:[m("div",{class:"row",children:[m("label",{class:"row autotoggle",title:"Auto players follow their diagram; untick one to move him by hand.",children:[m("input",{type:"checkbox",checked:o===n.movers.length&&n.movers.length>0,onChange:c=>a(c.target.checked)}),m("span",{children:"Auto-move all"})]}),m("span",{class:"muted",style:{fontSize:12},children:[o," on auto"]})]}),m("div",{class:"list",children:n.movers.map(c=>m("div",{class:`item ${c.id===Xt.value?"sel":""} ${c.done?"done":""}`,onClick:()=>(Xt.value=c.id,ri.value="move"),children:[m("input",{type:"checkbox",class:"autobox",title:Ea(e,c)?"Man coverage follows his man automatically until the ball is passed":Ul(e,n.coach,c)?"Auto-move on":"Auto-move off",checked:Ul(e,n.coach,c),disabled:c.done||Ea(e,c),onClick:l=>l.stopPropagation(),onChange:l=>Gh(n.coach,c.id,l.target.checked)}),m("span",{class:"num",children:i(c.id).split(" ")[1]}),m("span",{class:"pos",children:i(c.id).split(" ")[0]}),m("span",{class:"muted",children:[c.allowance.toFixed(1)," cm"]}),m("span",{class:"muted",style:{fontSize:11},children:c.done?"done":lE(c)}),c.cutPending&&m("span",{class:"chip warn",children:"cut: ROUTES roll"}),c.mayDisengage&&m("span",{class:"chip",children:"may disengage"}),c.mayBlitz&&m("span",{class:"chip",children:"spy"}),c.mandatory&&m("span",{class:"chip warn",children:"run lane"})]}))}),s&&!s.done&&m("div",{class:"col",children:[s.note&&m("div",{class:"muted",children:s.note}),m("div",{class:"row",children:[s.mode.t!=="none"&&m("button",{class:ri.value==="move"?"active":"",onClick:()=>ri.value="move",children:"Move: click the field"}),s.mayDisengage&&m("button",{class:ri.value==="disengage"?"active":"",onClick:()=>ri.value="disengage",children:"Disengage (−1 cm): click the field"}),s.mayBlitz&&m("button",{onClick:()=>Ce({kind:"declareBlitz",id:s.id}),children:"Declare blitz"}),m("button",{onClick:()=>Ce({kind:"skipMove",id:s.id}),children:"Stay where he is"})]})]}),m("div",{class:"row",children:[m("span",{class:"muted",children:[r.length," left"]}),m("span",{class:"spacer"}),n.canFinish&&m("button",{class:"primary",onClick:()=>Ce({kind:"finish"}),children:"End phase"})]})]})}case"engageOffer":return m(bt,{d:n,title:`${i(n.defender)} comes within 2 cm of ${i(n.blocker)}`,hint:`${i(n.blocker)} designated him: he may step into contact and ${n.kind2} block him now (the block is resolved at once).`,children:m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"engageOffer",accept:!0}),children:"Block him"}),m("button",{onClick:()=>Ce({kind:"engageOffer",accept:!1}),children:"Let him go"})]})});case"pushAround":{const s=Ei.value,r=n.blockers.includes(n.winner);return m(bt,{d:n,title:`${i(n.winner)} won the block: push around?`,hint:"Push the loser up to 2 cm back and/or turn him up to 45°. If you turn you must follow; if you only push you may stay.",children:m("div",{class:"col",children:[r&&n.blockers.length>1&&m("div",{class:"row",children:[m("span",{class:"muted",children:"Push from"}),n.blockers.map(o=>m("button",{class:`small ${(s.anchor??n.winner)===o?"active":""}`,onClick:()=>Ei.value={...s,anchor:o},children:i(o)}))]}),m("label",{class:"row",children:[m("span",{style:{minWidth:90},children:["Push ",s.push.toFixed(1)," cm"]}),m("input",{type:"range",min:0,max:2,step:.25,value:s.push,onInput:o=>Ei.value={...s,push:Number(o.target.value)}})]}),m("label",{class:"row",children:[m("span",{style:{minWidth:90},children:["Turn ",s.turn,"°"]}),m("input",{type:"range",min:-45,max:45,step:5,value:s.turn,onInput:o=>Ei.value={...s,turn:Number(o.target.value)}})]}),m("label",{class:"row",children:[m("input",{type:"checkbox",checked:s.follow||s.turn!==0,disabled:s.turn!==0,onChange:o=>Ei.value={...s,follow:o.target.checked}}),m("span",{children:"Follow him (stay in contact)"})]}),m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"pushAround",push:s.push,turn:s.turn,follow:s.follow||s.turn!==0,anchor:s.anchor??void 0}),children:"Apply"}),m("button",{onClick:()=>Ce({kind:"pushAround",push:0,turn:0,follow:!1}),children:"No push"})]})]})})}case"pancakeChoice":return m(bt,{d:n,title:`${i(n.defender)} pancakes a blocker: which one?`,children:m("div",{class:"row",children:n.blockers.map(s=>m("button",{class:"primary",onClick:()=>Ce({kind:"pancakeChoice",blocker:s}),children:i(s)}))})});case"breakThrough":return m(bt,{d:n,title:`${i(n.defender)} breaks through!`,hint:`Place him anywhere in contact with ${i(n.blocker)}: click one of the red spots on the board. He acts normally next timeslice.`});case"clutchTackle":return m(bt,{d:n,title:`${i(n.defender)} may clutch tackle ${i(n.carrier)}`,hint:"A clutch tackle is made while being blocked: TACKLE at a penalty of half the tackling skill (rounded up).",children:m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"clutchTackle",attempt:!0}),children:"Attempt it"}),m("button",{onClick:()=>Ce({kind:"clutchTackle",attempt:!1}),children:"Let him pass"})]})});case"jumpTackle":return m(bt,{d:n,title:`${i(n.carrier)} runs within 2 cm of a defender`,hint:"He must stop here. One unblocked defender may step into contact and tackle (click him), or let him continue.",children:m("div",{class:"row",children:[n.candidates.map(s=>m("button",{class:"primary",onClick:()=>Ce({kind:"jumpTackle",defender:s}),children:[i(s)," tackles"]})),m("button",{onClick:()=>Ce({kind:"jumpTackle",defender:null}),children:"Let him run"})]})});case"tackleStyle":return m(bt,{d:n,title:`${i(n.tackler)} tackles near the sideline`,hint:"Pushing him out of bounds gives TACKLE +5 but cannot force a fumble.",children:m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>Ce({kind:"tackleStyle",style:"outOfBounds"}),children:"Out of bounds (+5)"}),m("button",{onClick:()=>Ce({kind:"tackleStyle",style:"normal"}),children:"Normal tackle"})]})});case"missedTackle":return m(bt,{d:n,title:`${i(n.tackler)} missed the tackle`,hint:`${i(n.carrier)} may be placed anywhere in contact with the tackler, no closer to the endzone than he is: click a green spot, or stay.`,children:m("div",{class:"row",children:m("button",{onClick:()=>Ce({kind:"missedTackle",angle:null}),children:"Stay where he is"})})});case"pass":{const s=ar.value,r=n.options.find(o=>o.target===s);return m(bt,{d:n,title:"Pass the ball?",hint:n.mayPass?"Click a receiver (twice to throw), or hold the ball and go to the next timeslice.":n.reason,children:[m("div",{class:"list",children:[...n.options].sort((o,a)=>a.total-o.total).map(o=>m("div",{class:`item ${o.target===s?"sel":""}`,onClick:()=>ar.value=o.target,children:[m("span",{class:"num",children:i(o.target).split(" ")[1]}),m("span",{class:"pos",children:i(o.target).split(" ")[0]}),m("span",{class:"muted",children:[o.distanceCm.toFixed(0)," cm"]}),o.isRead&&m("span",{class:"chip good",children:"read"}),m("span",{class:"spacer"}),m("span",{class:`mono ${o.total<0?"neg":""}`,children:o.total>=0?`+${o.total}`:o.total})]}))}),r&&m("div",{class:"modifiers",children:[r.modifiers.map(o=>m(Wt,{children:[m("span",{children:o.label}),m("span",{class:`mono ${o.value<0?"neg":o.value>0?"posv":""}`,children:o.value>=0?`+${o.value}`:o.value})]})),m("span",{style:{fontWeight:600},children:"ACCURACY target"}),m("span",{class:"mono",style:{fontWeight:600},children:(t?.skill(e.play.ball.carrier,"accuracy")??0)+Math.round(r.total)})]}),m("div",{class:"row",children:[m("button",{class:"primary",disabled:!r,onClick:()=>r&&Ce({kind:"pass",target:r.target}),children:["Throw",r?` to ${i(r.target).split(" ").slice(0,2).join(" ")}`:""]}),m("button",{onClick:()=>Ce({kind:"pass",target:null}),children:"Hold the ball"})]})]})}case"contest":{const s=ms.value;return m(bt,{d:n,title:`Pass to ${i(n.receiver)}: contest or clean shot?`,hint:"Contest: COVER vs CATCHING, a chance to defend or intercept, but no tackle if he catches it. Clean shot: let him catch and hit him with TACKLE +5.",children:[m("div",{class:"list",children:n.defenders.map(r=>m("div",{class:"item",onClick:()=>ms.value={...s,[r]:(s[r]??"contest")==="contest"?"cleanShot":"contest"},children:[m("span",{children:i(r)}),m("span",{class:"spacer"}),m("span",{class:`chip ${(s[r]??"contest")==="contest"?"good":"bad"}`,children:(s[r]??"contest")==="contest"?"CONTEST":"CLEAN SHOT"})]}))}),m("div",{class:"row",children:m("button",{class:"primary",onClick:()=>Ce({kind:"contest",choices:Object.fromEntries(n.defenders.map(r=>[r,s[r]??"contest"]))}),children:"Resolve the catch"})})]})}case"cleanShot":return m(bt,{d:n,title:`${i(n.carrier)} caught it: clean shot tackles`,hint:"Each defender who waited may tackle with +5, one at a time.",children:m("div",{class:"row",children:[n.tacklers.map(s=>m("button",{class:"primary",onClick:()=>Ce({kind:"cleanShot",tackler:s}),children:[i(s)," hits him"]})),m("button",{onClick:()=>Ce({kind:"cleanShot",tackler:null}),children:"No tackle"})]})});case"acknowledge":return m(bt,{d:n,title:n.title,hint:n.text,children:m("button",{class:"primary",onClick:()=>Ce({kind:"acknowledge"}),children:"Continue"})});case"gameOver":return m(bt,{d:n,title:"Game over"})}}function uE(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function dE(n){switch(n){case"flat-left":return{zone:"flat",side:"left"};case"flat-right":return{zone:"flat",side:"right"};case"curl-left":return{zone:"curl",side:"left"};case"curl-right":return{zone:"curl",side:"right"};case"deep":return{zone:"deep"};default:return{zone:"hook"}}}const hE=["QB","RB","FB","WR","TE","OL"],tm=["speed","agility","running","tackle","cover","passrush","catching","routes","runblock","passblock","accuracy","poise","arm"],fE={speed:"SPEED",agility:"AGILITY",running:"RUNNING",tackle:"TACKLE",cover:"COVER",passrush:"RUSH",catching:"CATCHING",routes:"ROUTES",runblock:"RUNBLOCK",passblock:"PASSBLOCK",accuracy:"ACCURACY",poise:"POISE",arm:"ARM"},pE=["kicking","punting","coverage","return"];function mE(n){switch(n){case"speed":return 10;case"running":case"poise":case"arm":return 5;default:return 20}}const gE={QB:[4,8,0,0,0,0,0,0,0,0,10,0,0],RB:[5,10,1,0,0,0,8,8,6,6,0,0,0],FB:[4,8,0,0,0,0,6,8,10,8,0,0,0],WR:[6,10,0,0,0,0,10,10,4,4,0,0,0],TE:[5,8,0,0,0,0,10,10,8,8,0,0,0],OL:[3,6,0,0,0,0,0,0,10,10,0,0,0],DL:[3,8,0,10,4,10,0,0,0,0,0,0,0],LB:[4,10,0,10,8,8,0,0,0,0,0,0,0],CB:[6,10,0,8,10,6,0,0,0,0,0,0,0],S:[5,10,0,10,10,6,0,0,0,0,0,0,0]};function nm(n){const e=gE[n],t={};return tm.forEach((i,s)=>t[i]=e[s]),t}function vE(){return{kicking:10,punting:10,coverage:10,return:10}}function _E(n){const e=["speed","agility"];return n==="QB"?[...e,"accuracy","poise","arm"]:hE.includes(n)?[...e,"running","catching","routes","runblock","passblock"]:[...e,"tackle","cover","passrush"]}const yE={QB:[],RB:["agility","running"],FB:["runblock"],WR:["catching","routes"],TE:[],OL:["runblock","passblock"],DL:["passrush"],LB:["tackle"],CB:["cover"],S:[]},bE={QB:[],RB:[],FB:[],WR:["runblock","passblock"],TE:[],OL:["agility"],DL:["cover"],LB:[],CB:["passrush"],S:[]};function SE(n,e){return yE[n].includes(e)?"easy":bE[n].includes(e)?"hard":"normal"}function im(n,e){return e==="normal"?n<=10?1:[2,3,4,5,8,10,12,14,16,20][n-11]:e==="easy"?n<=12?1:[2,2,4,6,8,10,12,16][n-13]:n<=7?1:[2,2,3,4,5,7,9,12,13,15,18,20,25][n-8]}function xE(n,e){return e==="easy"?[4,4,7,7,10][n-1]:[8,8,10,14,20][n-1]}function ME(n){return n<=5?8:[10,10,15,20,25][n-6]}function EE(n){return[5,5,10,15,20][n-1]}function TE(n,e,t){if(t<1||t>mE(e))throw new Error(`level ${t} out of range for ${e}`);const i=SE(n,e);switch(e){case"speed":return ME(t);case"running":return xE(t,i);case"poise":case"arm":return EE(t);default:return im(t,i)}}function wE(n,e,t,i){if(i<=t)return 0;let s=0;for(let r=t+1;r<=i;r++)s+=TE(n,e,r);return s}function AE(n,e){let t=0;for(let i=n+1;i<=e;i++)t+=im(i,"normal");return t}function Wh(n){let e=0;for(const i of[...n.offense,...n.defense]){const s=nm(i.position);for(const r of tm)e+=wE(i.position,r,s[r],i.skills[r])}const t=vE();for(const i of pE)e+=AE(t[i],n.special[i]);return e}function CE(n,e,t,i,s={}){const r={...nm(i),...s};return{id:n,name:e,number:t,position:i,skills:r}}function RE(){const n=Tt.value,e=$t.value;if(!n||!e)return m("div",{class:"panel",children:[m("h3",{children:"Inspector"}),m("div",{class:"muted",children:"Click a player to see his attributes, skills and state."})]});const t=xa(e);if(!t)return null;const i=n.play,s=i?.players[e],r=eo(n),o=i?.markers[e]??[],a=i?.engagements.find(u=>u.defender===e||u.blockers.includes(e)),c=i?.assignments[e],l=n.config.teams.home.offense.concat(n.config.teams.home.defense).some(u=>u.id===e)?n.config.teams.home.name:n.config.teams.away.name;return m("div",{class:"panel",children:[m("h3",{children:"Inspector"}),m("div",{children:[m("div",{style:{fontSize:15,fontWeight:600},children:["#",t.number," ",t.name]}),m("div",{class:"muted",children:[t.position," · ",l]})]}),m("div",{class:"skills",children:_E(t.position).map(u=>m("div",{children:[m("div",{class:"k",children:fE[u]}),m("div",{class:"v",children:t.skills[u]})]}))}),s&&r&&m("div",{class:"kv",children:[m("span",{class:"k",children:"Position"}),m("span",{class:"mono",children:[s.pos.x.toFixed(1),", ",s.pos.y.toFixed(1)," cm"]}),m("span",{class:"k",children:"Movement"}),m("span",{children:[r.allowance(e).toFixed(1)," cm this timeslice",s.s.speedPenalty?` (-${s.s.speedPenalty})`:"",s.s.halved?" (halved)":""]}),s.pancakedSlice!==null&&m(Wt,{children:[m("span",{class:"k",children:"Status"}),m("span",{class:"chip bad",children:"Pancaked"})]}),s.s.noAction&&s.pancakedSlice===null&&m(Wt,{children:[m("span",{class:"k",children:"Status"}),m("span",{class:"chip warn",children:"Getting up: no action"})]}),s.s.stranded&&m(Wt,{children:[m("span",{class:"k",children:"Status"}),m("span",{class:"chip warn",children:"Stranded before a hole"})]}),s.draggedBy.length>0&&m(Wt,{children:[m("span",{class:"k",children:"Dragging"}),m("span",{children:s.draggedBy.map(u=>r.short(u)).join(", ")})]}),s.cutSlice!==null&&m(Wt,{children:[m("span",{class:"k",children:"Cut"}),m("span",{children:["made in timeslice ",s.cutSlice]})]}),s.sidelineSlice!==null&&m(Wt,{children:[m("span",{class:"k",children:"Sideline"}),m("span",{children:["reached in timeslice ",s.sidelineSlice]})]}),c&&c.t!=="none"&&m(Wt,{children:[m("span",{class:"k",children:"Assignment"}),m("span",{children:[c.t==="man"?`Man on ${r.short(c.target)}`:c.t==="zone"?`Zone ${r.zoneLabel(c.zone)}`:c.t,s.freeSince!==null&&s.freeSince<=i.slice?" (now free)":""]})]}),a&&m(Wt,{children:[m("span",{class:"k",children:"Blocking"}),m("span",{children:[a.blockers.map(u=>r.short(u)).join(" + ")," vs ",r.short(a.defender)," · dominance ",a.dominance,s.s.clutchEligible?" · may clutch tackle":"",a.mayDisengage&&a.defender===e?" · may disengage":""]})]}),i&&i.designations[e]&&m(Wt,{children:[m("span",{class:"k",children:"Designates"}),m("span",{children:r.short(i.designations[e])})]})]}),o.length>0&&m("div",{children:[m("h3",{children:"Markers"}),m("div",{class:"slots",children:o.map((u,h)=>m("div",{class:`slot ${u.t}`,children:[m("span",{class:"muted",children:["T",h+1]}),m("span",{class:"t",children:u.t==="hidden"?"face down":Ss(u)})]}))})]})]})}function kE(){const n=Tt.value,e=qs(null),t=Ih.value,i=(n?.log??[]).filter(s=>t==="all"?!0:t==="rolls"?s.kind==="roll":s.kind!=="roll"&&s.kind!=="decision");return Ys(()=>{const s=e.current;s&&(s.scrollTop=s.scrollHeight)},[i.length,t]),m("div",{class:"logpanel",children:[m("div",{class:"loghead",children:[m("h3",{children:"Log"}),m("div",{class:"tabs",children:["all","events","rolls"].map(s=>m("button",{class:`small ${t===s?"active":""}`,onClick:()=>Ih.value=s,children:s}))}),m("span",{class:"spacer"}),m("span",{class:"muted",children:[i.length," entries"]})]}),m("div",{class:"logbody",ref:e,children:i.slice(-400).map(s=>m("div",{class:`logline ${s.kind}`,children:[s.slice?m("span",{class:"muted",children:`T${s.slice} `}):null,s.text]},s.n))})]})}function PE(n){return m("div",{class:"curtain",onClick:n.onContinue,children:m("div",{class:"card",children:[m("div",{class:"muted",children:"Hidden information"}),m("h1",{children:["Pass the screen to ",m("span",{style:{color:Ma(n.coach)},children:qc(n.coach)})]}),m("div",{children:n.what}),m("button",{class:"primary",onClick:n.onContinue,children:["I am the ",qc(n.coach)," coach"]})]})})}function wa(n,e){return e.map((t,i)=>CE(`${n}-${t.position}-${i+1}-${t.number}`,t.name,t.number,t.position,t.up??{}))}function sm(){const n=wa("home",[{name:"Tobias Lund",number:12,position:"QB",up:{accuracy:15,arm:3,poise:2}},{name:"Mikkel Friis",number:7,position:"QB"},{name:"Jonas Berg",number:28,position:"RB",up:{running:4,speed:6,agility:12}},{name:"Emil Dahl",number:33,position:"RB",up:{running:2}},{name:"Rasmus Kjær",number:44,position:"FB",up:{runblock:12}},{name:"Simon Holm",number:81,position:"WR",up:{catching:15,routes:15,speed:8}},{name:"Anders Vang",number:84,position:"WR",up:{catching:12,routes:12,speed:7}},{name:"Casper Nygaard",number:19,position:"WR"},{name:"Mads Toft",number:11,position:"WR"},{name:"Frederik Juhl",number:87,position:"TE",up:{catching:12,runblock:10}},{name:"Oliver Brandt",number:88,position:"TE"},{name:"Henrik Mørk",number:72,position:"OL",up:{passblock:13,runblock:13}},{name:"Lars Winther",number:66,position:"OL",up:{passblock:13,runblock:13}},{name:"Peter Østergaard",number:55,position:"OL",up:{passblock:13,runblock:13}},{name:"Søren Bak",number:64,position:"OL",up:{passblock:13,runblock:13}},{name:"Niels Hvid",number:78,position:"OL",up:{passblock:13,runblock:13}},{name:"Jesper Riis",number:76,position:"OL"},{name:"Thomas Krog",number:70,position:"OL"}]),e=wa("home",[{name:"Kasper Lindgren",number:91,position:"DL",up:{passrush:15,tackle:11}},{name:"Daniel Skov",number:97,position:"DL",up:{passrush:14,tackle:11}},{name:"Martin Bruun",number:93,position:"DL",up:{passrush:14,tackle:11}},{name:"Jakob Ravn",number:99,position:"DL",up:{passrush:15}},{name:"Nikolaj Steen",number:95,position:"DL"},{name:"Christian Poulsen",number:52,position:"LB",up:{tackle:14,cover:10,speed:5}},{name:"Morten Høj",number:54,position:"LB",up:{tackle:14,cover:10}},{name:"Magnus Eriksen",number:56,position:"LB",up:{tackle:14}},{name:"Kristian Lauritsen",number:58,position:"LB"},{name:"Victor Hald",number:21,position:"CB",up:{cover:14,speed:8,agility:12}},{name:"William Fogh",number:24,position:"CB",up:{cover:14,speed:8,agility:12}},{name:"Lucas Thorsen",number:26,position:"CB"},{name:"Noah Enevoldsen",number:29,position:"CB"},{name:"Sebastian Krarup",number:31,position:"S",up:{tackle:12,cover:13,speed:6}},{name:"Alexander Dam",number:36,position:"S",up:{tackle:12,cover:13}},{name:"Marcus Ipsen",number:38,position:"S"}]);return{name:"Copenhagen Towers",abbreviation:"CPH",colors:{primary:"#1f6feb",secondary:"#e6edf3"},offense:n,defense:e,special:{kicking:14,punting:12,coverage:11,return:11}}}function rm(){const n=wa("away",[{name:"Bjørn Halvorsen",number:9,position:"QB",up:{accuracy:14,arm:2,poise:3}},{name:"Erik Sand",number:16,position:"QB"},{name:"Aksel Rønne",number:22,position:"RB",up:{running:5,speed:7,agility:13}},{name:"Viggo Strand",number:30,position:"RB",up:{running:3,speed:6}},{name:"Gorm Bjerre",number:42,position:"FB",up:{runblock:14,running:1}},{name:"Ivar Lykke",number:80,position:"WR",up:{catching:13,routes:13,speed:8}},{name:"Hjalte Mose",number:83,position:"WR",up:{catching:12,routes:12}},{name:"Troels Kamp",number:15,position:"WR"},{name:"Esben Gram",number:18,position:"WR"},{name:"Leif Thygesen",number:85,position:"TE",up:{runblock:12,catching:11}},{name:"Ulrik Foss",number:89,position:"TE",up:{runblock:11}},{name:"Knud Vestergaard",number:71,position:"OL",up:{runblock:14,passblock:12}},{name:"Arne Buhl",number:65,position:"OL",up:{runblock:14,passblock:12}},{name:"Sten Clausen",number:57,position:"OL",up:{runblock:14,passblock:12}},{name:"Palle Dyhr",number:63,position:"OL",up:{runblock:14,passblock:12}},{name:"Ole Munch",number:74,position:"OL",up:{runblock:14,passblock:12}},{name:"Carl Agerskov",number:77,position:"OL",up:{runblock:12}},{name:"Finn Hededal",number:60,position:"OL"}]),e=wa("away",[{name:"Rolf Kjeldsen",number:90,position:"DL",up:{passrush:14,tackle:12}},{name:"Svend Ottesen",number:94,position:"DL",up:{passrush:13,tackle:12}},{name:"Gunnar Lang",number:96,position:"DL",up:{passrush:13,tackle:12}},{name:"Thor Bisgaard",number:92,position:"DL",up:{passrush:13}},{name:"Helge Nørby",number:98,position:"DL"},{name:"Einar Vold",number:50,position:"LB",up:{tackle:15,cover:11,speed:5}},{name:"Asger Lind",number:51,position:"LB",up:{tackle:15,cover:11}},{name:"Vagn Primdahl",number:53,position:"LB",up:{tackle:13}},{name:"Birger Storm",number:59,position:"LB"},{name:"Jens Aagaard",number:20,position:"CB",up:{cover:13,speed:7}},{name:"Poul Rask",number:23,position:"CB",up:{cover:13,speed:7}},{name:"Kaj Wulff",number:25,position:"CB"},{name:"Bent Haugaard",number:27,position:"CB"},{name:"Hans Kyed",number:32,position:"S",up:{tackle:13,cover:12,speed:7}},{name:"Egon Lehmann",number:35,position:"S",up:{tackle:13,cover:12}},{name:"Villy Brix",number:39,position:"S"}]);return{name:"Aarhus Wolves",abbreviation:"AAR",colors:{primary:"#c0392b",secondary:"#f6f1e7"},offense:n,defense:e,special:{kicking:12,punting:13,coverage:12,return:12}}}function LE(n){const[e,t]=Pt("redzone"),[i,s]=Pt("collegeOT"),[r,o]=Pt(()=>Math.floor(Math.random()*1e9)),[a,c]=Pt("hotseat"),l=/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||new URLSearchParams(location.search).has("online"),[u,h]=Pt("table-1"),[d,f]=Pt("home"),g=sm(),_=rm(),v={fieldSize:e,gameType:i,seed:r,teams:{home:g,away:_}},p=async b=>{const S=await b.text(),x=JSON.parse(S);n.onStart({mode:"hotseat",config:x.config,room:u,coach:null,saved:x})};return m("div",{class:"newgame",children:m("div",{class:"card",children:[m("div",{children:[m("h1",{children:"American Football: The Board Game"}),m("div",{class:"muted",children:"Community Edition rules, played on a digital table by two coaches."})]}),m("div",{class:"grid",children:[m("label",{children:["Field",m("select",{value:e,onChange:b=>t(b.target.value),children:[m("option",{value:"full",children:"Full field (kick-offs and punts)"}),m("option",{value:"half",children:"Half field (drives start at the 50)"}),m("option",{value:"redzone",children:"Red zone only (drives start at the 20)"})]})]}),m("label",{children:["Game type",m("select",{value:i,onChange:b=>s(b.target.value),children:[m("option",{value:"full",children:"Full game (8+ drives, then two-minute mode)"}),m("option",{value:"collegeOT",children:"College overtime (alternate until not tied)"}),m("option",{value:"suddenDeathClassic",children:"Sudden death, classic (first score wins)"}),m("option",{value:"suddenDeathModern",children:"Sudden death, modern (each team one possession)"})]})]}),m("label",{children:["Seed (dice)",m("input",{type:"number",value:r,onInput:b=>o(Number(b.target.value))})]}),m("label",{children:["How to play",m("select",{value:a,onChange:b=>c(b.target.value),children:[m("option",{value:"hotseat",children:"Hot-seat: both coaches at this screen"}),l&&m("option",{value:"host",children:"Online: host a table on this server"}),l&&m("option",{value:"join",children:"Online: join a table"})]})]}),a!=="hotseat"&&m(Wt,{children:[m("label",{children:["Table name",m("input",{value:u,onInput:b=>h(b.target.value)})]}),m("label",{children:["You coach",m("select",{value:d,onChange:b=>f(b.target.value),children:[m("option",{value:"home",children:[g.name," (home)"]}),m("option",{value:"away",children:[_.name," (away)"]})]})]})]})]}),m("div",{class:"desc",children:[m("b",{children:g.name})," (",Wh(g)," skillpoints, pass-leaning) against ",m("b",{children:_.name})," (",Wh(_)," skillpoints, run-heavy). The rulebook recommends starting on a small field with a quick game type. Markers are hidden: in hot-seat play a curtain asks you to pass the screen between the coaches while they place markers. At the table you call plays from a playbook: the stock playbook has the classic plays, and the play creator lets you draw your own."]}),m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>n.onStart({mode:a,config:v,room:u,coach:a==="hotseat"?null:d}),children:a==="hotseat"?"Start the game":a==="host"?"Host the table":"Join the table"}),m("button",{onClick:n.onCreator,title:"Design plays and playbooks to call at the table",children:"Play creator"}),m("label",{class:"row",style:{cursor:"pointer"},children:[m("span",{class:"muted",children:"or load a saved game"}),m("input",{type:"file",accept:"application/json",onChange:b=>b.target.files?.[0]&&p(b.target.files[0])})]})]}),m("div",{class:"desc",children:["Board: drag with the mouse to pan, wheel to zoom, ",m("kbd",{children:"F"})," fits the field, ",m("kbd",{children:"P"})," frames the play, ",m("kbd",{children:"B"})," centres on the ball, double-click frames the play."]})]})})}const jn=zn+40*ti,DE=["quick","intermediate","deep","double","backfield","delayed"];function Ol(n){const e=(n==="offense"?ni:Fn)[0];return{id:Pu(),name:"New play",side:n,kind:n==="offense"?"pass":"zone",description:"",formation:e.name,qbDepth:e.qbDepth??0,linemen:e.linemen??5,extraSide:e.extraLinemanSide??"right",qb:[],ol:n==="offense"?[{t:"passblock"},{t:"passblock"},{t:"passblock"},{t:"passblock"}]:[],slots:e.slots.map(t=>({...t,markers:[]})),stock:!1}}function $h(n){let e=n.length;for(;e>0&&n[e-1].t==="filler";)e--;return n.slice(0,e)}function IE(n){const e=Ks(()=>({home:sm(),away:rm()}),[]),[t,i]=Pt("offense"),[s,r]=Pt("home"),[o,a]=Pt(()=>Ol("offense")),[c,l]=Pt(null),[u,h]=Pt(0),[d,f]=Pt(""),[g,_]=Pt(""),[v,p]=Pt(Fn[0].name),[b,S]=Pt(null),x=qs(null),A=qs(null);hn.value,Ut.value;const w=s==="home"?"away":"home",k=t==="offense"?s:w,I=e[s][t],T=t==="offense"?"defense":"offense",E=e[w][T],D=T==="offense"?ni:Fn,F=D.find(R=>R.name===v)??D[0],G=t==="offense"?4:2,q=Ks(()=>{const X=Np({fieldSize:"full",gameType:"collegeOT",seed:1,teams:e}),ne=Ip({kind:"scrimmage",offense:k,los:jn,lineToGainY:jn+10*ti,boardMinY:0});X.play=ne,X.possession=k,X.stage="drive";const J=ba(Op(o),I,jn,0);for(const he of J)ne.players[he.id]=Vc(he.id,t,he.pos);for(const he of ba(F,E,jn,0))ne.players[he.id]||(ne.players[he.id]=Vc(he.id,T,he.pos));const re=J.map(he=>({id:he.id,position:I.find(ue=>ue.id===he.id).position,pos:he.pos})),Se=ku(o,re,jn);return{state:X,players:re,assignment:Se}},[o,t,s,v]),{assignment:W}=q,P=q.players,$=R=>I.find(X=>X.id===R),H=R=>q.state.play.players[R].pos,ee=P.map(R=>$(R.id)).sort((R,X)=>Ta(R.position)-Ta(X.position)||R.number-X.number),oe=Eu(t,ee,W.markers),pe=oe.filter(R=>R.severity==="error"),Be=oe.filter(R=>R.severity==="warning"),Pe=c&&W.slotOf[c]?$(c):null,lt=c?xt(W.markers[c],G):null,it=Ks(()=>{const R=new Set;for(const ne of P)(t==="defense"||ne.position!=="OL")&&R.add(ne.id);const X=jc({side:t,players:P.map(ne=>({id:ne.id,def:$(ne.id),pos:ne.pos})),markers:W.markers,routes:W.routes,selected:c,los:jn,boardMinY:0});return{selected:c,highlights:{},markerOverride:W.markers,routes:X.routes,zones:X.zones,draggable:R,showTrails:!1}},[q,c]),Q=R=>W.slotOf[R],se=R=>R.map(X=>(X.t==="read"||X.t==="handoff")&&W.slotOf[X.target]?.startsWith("S")?{...X,target:W.slotOf[X.target]}:X.t==="read"||X.t==="handoff"?{t:"filler"}:X),_e=(R,X,ne)=>{const J=Q(R);if(!J)return;const re=$h(xt(X,G));if(J==="QB")a({...o,qb:se(re)});else if(J==="OL")a({...o,ol:re});else{const Se=Number(J.slice(1)),he=ne===void 0?$r(re,H(R).x,o.slots[Se].route)?.id:ne;a({...o,slots:o.slots.map((ue,Ne)=>Ne===Se?{...ue,markers:se(re),...he?{route:he}:{route:void 0}}:ue)})}},Ue=(R,X,ne)=>{const J=[...xt(W.markers[R],G)];J[X]=ne,_e(R,J)},Re=(R,X,ne)=>{const J=[...xt(W.markers[R],G)];for(let re=X;re<G;re++)J[re]=ne;_e(R,J)},Je=(R,X)=>{const ne=[...xt(o.ol,G)];if(X===null)for(let J=0;J<G;J++)ne[J]=R;else ne[X]=R;a({...o,ol:$h(ne)})},Jt=(R,X)=>{const ne=Zi(X);if(!ne)return _e(R,[],null);_e(R,bp(ne,H(R).x),ne.id)},L=R=>{const ne=(t==="offense"?ni:Fn).find(J=>J.name===R);ne&&(a({...o,formation:ne.name,qbDepth:ne.qbDepth??o.qbDepth,linemen:ne.linemen??o.linemen,extraSide:ne.extraLinemanSide??o.extraSide,slots:ne.slots.map((J,re)=>{const Se=o.slots[re],he=Se&&Se.positions.some(ue=>J.positions.includes(ue));return{...J,markers:he?Se.markers:[],...he&&Se.route?{route:Se.route}:{}}})}),l(null))},gt=R=>{R!==t&&(i(R),a(Ol(R)),p((R==="offense"?Fn:ni)[0].name),l(null),f(""))},Oe=R=>{a(R?structuredClone(R):Ol(t)),l(null)},De=R=>{const X=o.stock||R?{...o,id:Pu(),stock:!1,name:R&&!o.stock?`${o.name} (copy)`:o.name}:o;eu(X),d&&!d.startsWith("stock-")&&!d.startsWith("custom-")&&tu(d,X.id),a(X),ct(`Saved "${X.name}" to your plays.`)},Me=()=>{o.stock||(UM(o.id),Oe(null),ct("Play deleted."))},ct=R=>{S(R),setTimeout(()=>S(null),2500)},Ee=()=>{d&&(!o.stock&&!hn.value.some(R=>R.id===o.id)&&eu(o),tu(d,o.id),ct(`Added "${o.name}" to the playbook.`))},He=()=>{const R=g.trim();if(!R)return;const X=FM(R,t);f(X.id),_("")},Ht=()=>{const R=new Blob([WM()],{type:"application/json"}),X=document.createElement("a");X.href=URL.createObjectURL(R),X.download=`afm-playbooks-${Date.now()}.json`,X.click()},At=async R=>{try{const X=$M(await R.text());ct(`Imported ${X.plays} plays and ${X.playbooks} playbooks.`)}catch{ct("That file is not a playbook export.")}},C=(R,X)=>{const ne=Q(R);if(!ne||ne==="OL")return;if(ne==="QB"){const Ne=Ba(jn,0).y,U=Math.round(Math.max(0,Math.min(sp,Ne-X.y))*2)/2;a({...o,qbDepth:U});return}const J=Number(ne.slice(1)),re=Math.max(ge,Math.min(Ke-ge,X.x)),Se=t==="offense"?Math.min(X.y,jn-ge):Math.max(X.y,jn+ge),he=Math.round((re-Nt)*10)/10,ue=Math.round((Se-jn)*10)/10;a({...o,slots:o.slots.map((Ne,U)=>U===J?{...Ne,dx:he,dy:ue}:Ne)})},y=qs({click:R=>{},field:()=>{},drag:(R,X)=>{}});y.current={click:R=>{W.slotOf[R]?(l(R),h(0)):l(null)},field:()=>l(null),drag:C},Ys(()=>{const R=x.current,X=new vp(R,{onClickPlayer:J=>y.current.click(J),onClickField:()=>y.current.field(),onClickGhost:()=>{},onHover:()=>{},onDrag:(J,re)=>y.current.drag(J,re)});A.current=X;const ne=J=>{const re=J.target.tagName;re==="INPUT"||re==="SELECT"||re==="TEXTAREA"||(J.key==="Escape"&&l(null),(J.key==="p"||J.key==="P")&&X.fitPlay(),(J.key==="f"||J.key==="F")&&X.fitField())};return window.addEventListener("keydown",ne),()=>{window.removeEventListener("keydown",ne),X.dispose()}},[]),Ys(()=>{const R=A.current;if(!R)return;const X=[...e.home.offense,...e.home.defense,...e.away.offense,...e.away.defense];R.setTeams(X,{offense:e[k].colors,defense:e[k==="home"?"away":"home"].colors}),R.setView(q.state,it)},[q,it]);const V=Ut.value.filter(R=>R.side===t),Z=d?Wp(d,t):void 0,ie=!!Z&&V.some(R=>R.id===Z.id),j=ee.filter(R=>R.id!==c),Te=R=>$r(W.markers[R],H(R).x,W.routes[R]);return m("div",{class:"creator",children:[m("div",{class:"creator-top",children:[m("button",{class:"small",onClick:n.onBack,children:"← Back"}),m("h2",{children:"Play creator"}),m("div",{class:"tabs",children:[m("button",{class:t==="offense"?"active":"",onClick:()=>gt("offense"),children:"Offense"}),m("button",{class:t==="defense"?"active":"",onClick:()=>gt("defense"),children:"Defense"})]}),m("label",{class:"row",children:[m("span",{class:"muted",children:"Team"}),m("select",{value:s,onChange:R=>r(R.target.value),children:[m("option",{value:"home",children:e.home.name}),m("option",{value:"away",children:e.away.name})]})]}),m("label",{class:"row",children:[m("span",{class:"muted",children:"Against"}),m("select",{value:F.name,onChange:R=>p(R.target.value),children:D.map(R=>m("option",{value:R.name,children:R.name}))})]}),m("span",{class:"spacer"}),b&&m("span",{class:"chip good",children:b}),m("button",{class:"small",onClick:Ht,title:"Download your plays and playbooks as JSON",children:"Export"}),m("label",{class:"small btnlike",title:"Load a playbook export",children:["Import",m("input",{type:"file",accept:"application/json",style:{display:"none"},onChange:R=>R.target.files?.[0]&&At(R.target.files[0])})]})]}),m("div",{class:"creator-left",children:[m("div",{class:"panel",children:[m("h3",{children:"Load a play"}),m(Du,{side:t,value:o.stock||hn.value.some(R=>R.id===o.id)?o:null,onPick:Oe,compact:!0,noFlip:!0}),m("div",{class:"row",children:[m("button",{class:"small",onClick:()=>Oe(null),children:"New play"}),m("button",{class:"small",onClick:()=>a(Jc(o)),children:"Flip"}),m("button",{class:"small",onClick:()=>De(!0),title:"Save a copy as a new custom play",children:"Duplicate"})]})]}),m("div",{class:"panel",children:[m("h3",{children:"Formation"}),m("div",{class:"row",children:m("select",{value:(t==="offense"?ni:Fn).some(R=>R.name===o.formation)?o.formation:"",onChange:R=>L(R.target.value),style:{flex:1},children:[!(t==="offense"?ni:Fn).some(R=>R.name===o.formation)&&m("option",{value:"",children:o.formation}),(t==="offense"?ni:Fn).map(R=>m("option",{value:R.name,children:R.name}))]})}),t==="offense"&&m("label",{class:"row",children:[m("span",{style:{minWidth:110},children:["QB depth ",o.qbDepth.toFixed(1)," cm"]}),m("input",{type:"range",min:0,max:4,step:.5,value:o.qbDepth,onInput:R=>a({...o,qbDepth:Number(R.target.value)})})]}),m("div",{class:"muted",children:"Drag players on the board to align them. Click a player to set his route or markers."})]}),m("div",{class:"panel",children:[m("h3",{children:"Players"}),m("div",{class:"list",children:ee.map(R=>{const X=Te(R.id),ne=c===R.id;return m("div",{class:`item playrow ${ne?"sel":""}`,onClick:()=>{l(R.id),h(0)},children:[m("span",{class:"num",children:["#",R.number]}),m("span",{class:"pos",children:R.position}),m("span",{class:"rsum",title:X?.note??"",children:Lu(W.markers[R.id],H(R.id).x,W.routes[R.id])}),m("span",{class:"spacer"}),m("span",{class:"minislots",children:xt(W.markers[R.id],G).map((J,re)=>m("span",{class:`mini ${J.t} ${ne&&u===re?"sel":""}`,title:`Timeslice ${re+1}: ${Ss(J)}`,onClick:Se=>{Se.stopPropagation(),l(R.id),h(re)},children:em(J,ee)}))})]})})})]}),Pe&&lt&&m("div",{class:"panel markermenu",children:[m("div",{class:"row",children:[m("b",{children:[Pe.position," #",Pe.number," ",Pe.name]}),m("span",{class:"muted",children:W.slotOf[Pe.id]==="OL"?"all linemen":""}),m("span",{class:"spacer"}),m("button",{class:"small",onClick:()=>l(null),children:"×"})]}),t==="offense"&&Na(Pe.position).includes("cut")&&m("label",{class:"row",children:[m("span",{class:"muted",style:{minWidth:44},children:"Route"}),m(Zp,{value:Te(Pe.id)?.id??"",onChange:R=>Jt(Pe.id,R)})]}),Te(Pe.id)&&m("div",{class:"muted",children:Te(Pe.id).note}),m("div",{class:"slots",children:lt.map((R,X)=>m("div",{class:`slot ${R.t} ${u===X?"sel":""}`,onClick:()=>h(X),title:`Timeslice ${X+1}`,children:[m("span",{class:"muted",style:{fontSize:9},children:["T",X+1]}),m("span",{class:"t",children:R.t==="filler"?"filler":Qp(R,ee)})]}))}),m(jp,{def:Pe,slotIndex:u,current:lt[u],teammates:j,onSet:R=>Ue(Pe.id,u,R),onFillRest:R=>Re(Pe.id,u,R),onAllLinemen:Pe.position==="OL"?(R,X)=>Je(R,X?null:u):void 0},`${Pe.id}-${u}`),m("div",{class:"row",children:[m("button",{class:"small",disabled:u>=G-1,onClick:()=>h(u+1),children:"Next slot →"}),m("button",{class:"small",onClick:()=>{const R=ee.findIndex(X=>X.id===Pe.id);l(ee[(R+1)%ee.length].id),h(0)},children:"Next player ↓"})]})]})]}),m("div",{class:"creator-board",children:[m("canvas",{ref:x}),m("div",{class:"board-hud",children:[m("button",{class:"small",onClick:()=>A.current?.fitPlay(),title:"Frame the play (P)",children:"Frame play"}),m("button",{class:"small",onClick:()=>A.current?.fitField(),title:"Fit the field (F)",children:"Whole field"})]}),m("div",{class:"board-tip creator-legend",children:[m("b",{children:o.name}),o.formation.endsWith(" (flipped)")?" (flipped)":""," · ",Ir[o.kind]," · ",o.formation.replace(" (flipped)",""),m("div",{class:"muted",children:"Lines show each player's path per timeslice (dot = timeslice end, ring = cut, dashed = beyond the markers), with the receiver at his SPEED."})]})]}),m("div",{class:"creator-right",children:[m("div",{class:"panel",children:[m("h3",{children:"This play"}),m("label",{class:"col",children:[m("span",{class:"muted",children:"Name"}),m("input",{value:o.name,onInput:R=>a({...o,name:R.target.value})})]}),m("div",{class:"row",children:[m("label",{class:"col",style:{flex:1},children:[m("span",{class:"muted",children:"Kind"}),m("select",{value:o.kind,onChange:R=>a({...o,kind:R.target.value}),children:(t==="offense"?["pass","run","playAction","screen"]:["zone","man","blitz"]).map(R=>m("option",{value:R,children:Ir[R]}))})]}),m("span",{class:"chip",children:o.stock?"stock":hn.value.some(R=>R.id===o.id)?"custom ★":"unsaved"})]}),m("label",{class:"col",children:[m("span",{class:"muted",children:"Description"}),m("textarea",{rows:3,value:o.description,onInput:R=>a({...o,description:R.target.value})})]}),pe.length>0&&m("div",{class:"error",children:pe.slice(0,4).map(R=>m("div",{children:R.text}))}),Be.length>0&&m("div",{class:"chip warn",style:{whiteSpace:"normal"},children:Be.map(R=>m("div",{children:R.text}))}),m("div",{class:"row",children:[m("button",{class:"primary",onClick:()=>De(!1),disabled:pe.length>0,children:o.stock?"Save as custom play":"Save play"}),!o.stock&&hn.value.some(R=>R.id===o.id)&&m("button",{class:"small danger",onClick:Me,children:"Delete"})]})]}),m("div",{class:"panel",children:[m("h3",{children:"Playbooks"}),m("div",{class:"row",children:[m("select",{value:d,onChange:R=>f(R.target.value),style:{flex:1},children:[m("option",{value:"",children:"— choose a playbook —"}),V.map(R=>m("option",{value:R.id,children:[R.name," (",R.plays.length,")"]}))]}),m("button",{class:"small",disabled:!ie,onClick:Ee,title:"Add this play to the playbook (an unsaved play is saved first)",children:"+ Add this play"})]}),m("div",{class:"row",children:[m("input",{placeholder:"new playbook name",value:g,onInput:R=>_(R.target.value),style:{flex:1}}),m("button",{class:"small",onClick:He,disabled:!g.trim(),children:"Create"})]}),Z&&ie&&m("div",{class:"col",children:[m("div",{class:"row",children:[m("input",{value:Z.name,onChange:R=>BM(Z.id,R.target.value),style:{flex:1},title:"Rename"}),m("button",{class:"small danger",onClick:()=>{zM(Z.id),f("")},children:"Delete book"})]}),m("div",{class:"list",children:[$p(Z).map(R=>m("div",{class:`item ${R.id===o.id?"sel":""}`,onClick:()=>Oe(R),children:[m("span",{style:{flex:1},children:[R.name,R.stock?"":" ★"," ",m("span",{class:"muted",children:["· ",Ir[R.kind]]})]}),m("button",{class:"small",onClick:X=>{X.stopPropagation(),Hh(Z.id,R.id,-1)},title:"Move up",children:"↑"}),m("button",{class:"small",onClick:X=>{X.stopPropagation(),Hh(Z.id,R.id,1)},title:"Move down",children:"↓"}),m("button",{class:"small danger",onClick:X=>{X.stopPropagation(),HM(Z.id,R.id)},title:"Remove from the playbook",children:"×"})]})),Z.plays.length===0&&m("div",{class:"muted",children:"Empty. Load a stock or custom play and add it."})]})]}),m("div",{class:"muted",children:"At the table, the lineup and marker steps offer every playbook; a custom play (★) can be added to any of them."})]}),m("details",{class:"panel",children:[m("summary",{children:"Route library"}),m("div",{class:"muted",children:'Fillers are implicit: a route ends with its cut and the receiver keeps running on that line. "In" and "out" resolve to left or right for the side he lines up on.'}),DE.map(R=>m("div",{class:"col",children:[m("h4",{class:"muted",children:_p[R]}),m("table",{class:"stats",children:Ua.filter(X=>X.group===R).map(X=>m("tr",{title:X.note,children:[m("td",{children:[X.name,X.tree!==void 0?m("span",{class:"muted",children:[" (",X.tree,")"]}):null]}),m("td",{class:"mono muted",children:Jp(X.id)})]}))})]}))]})]})]})}function NE(){const[n,e]=Pt("start"),t=i=>{if(wn.value?.dispose(),i.mode==="hotseat")wn.value=new lM(i.config,i.saved);else{const r=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;wn.value=new cM(r,i.room,i.coach,i.mode==="host"?i.config:null)}Xc.value=null,e("game")};return n==="creator"?m(IE,{onBack:()=>e("start")}):n==="start"?m(LE,{onStart:t,onCreator:()=>e("creator")}):m(UE,{onNewGame:()=>e("start")})}function UE(n){const e=qs(null),t=qs(null),[i,s]=Pt(null);Ys(()=>{const h=e.current,d=new vp(h,{onClickPlayer:(_,v,p)=>TM(_,p),onClickField:_=>Qc(_),onClickGhost:_=>wM(_),onHover:(_,v,p)=>{AM(_,v),dM.value=p},onDrag:(_,v,p)=>CM(_,v)});t.current=d,window.afm={board:d,act:_=>wn.value?.apply(_),view:()=>Tt.value,pending:()=>rn.value,toScreen:_=>d.toScreen(_)};const f=_=>{_.target.tagName==="INPUT"||_.target.tagName==="SELECT"||((_.key==="f"||_.key==="F")&&d.fitField(),(_.key==="p"||_.key==="P")&&d.fitPlay(),(_.key==="b"||_.key==="B")&&d.focusBall(),_.key==="Escape"&&($t.value=null,Xt.value=null))};window.addEventListener("keydown",f);const g=nE();return()=>{window.removeEventListener("keydown",f),g(),d.dispose()}},[]),Ys(()=>{const h=ki(()=>{const f=Tt.value,g=t.current;if(!f||!g)return;const _=[...f.config.teams.home.offense,...f.config.teams.home.defense,...f.config.teams.away.offense,...f.config.teams.away.defense],v=f.play?.offense??f.possession,p=v==="home"?"away":"home";g.setTeams(_,{offense:f.config.teams[v].colors,defense:f.config.teams[p].colors});const S=(wn.value?.newLog.value??[]).find(A=>/ throws to /.test(A.text));let x;if(S&&f.play){const A=[...S.text.matchAll(/#(\d+)/g)].map(T=>Number(T[1])),w=Object.values(f.play.players).filter(T=>T.side==="offense"),k=w.find(T=>xa(T.id)?.number===A[0]),I=w.find(T=>xa(T.id)?.number===A[1]);k&&I&&(x={from:k.pos,to:I.pos})}fs(()=>g.setView(f,Fh.value,{pass:x}))}),d=ki(()=>{const f=Fh.value;fs(()=>{t.current?.setUi(f),s(f.preview?.text??null)})});return()=>{h(),d()}},[]),Ys(()=>{let h="";return ki(()=>{const f=Kc.value,g=rn.value;fs(()=>{const _=f.split("|").slice(0,2).join("|")===h.split("|").slice(0,2).join("|")&&g&&(g.kind==="lineup"||g.kind==="markers");if(h=f,!_&&(hM(),!!g)){if(g.kind==="lineup"?XM(g):Gn.value=null,g.kind==="markers"?sE(g):ps.value=null,g.kind==="move"){const v=g.movers.filter(p=>!p.done&&(p.mode.t!=="none"||p.mayDisengage||p.mayBlitz));v.length===1&&(Xt.value=v[0].id)}if(g.kind==="freeBlockers"){const v=g.blockers.filter(p=>!p.done);v.length>=1&&(Xt.value=v[0].id)}}})})},[]);const r=rn.value,o=Tt.value,c=(wn.value?.controls.length??0)===2,l=r&&r.kind==="markers"?`${r.coach}-${o?.snaps}-${o?.play?.los}`:null,u=c&&l!==null&&Xc.value!==l&&Ms.value;return m("div",{class:"layout",children:[m(kM,{onNewGame:n.onNewGame}),m("div",{class:"left",children:[m(cE,{}),m(DM,{})]}),m("div",{class:"boardwrap",children:[m("canvas",{ref:e}),m("div",{class:"board-hud",children:[m("button",{class:"small",onClick:()=>t.current?.fitPlay(),title:"Frame the play (P)",children:"Frame play"}),m("button",{class:"small",onClick:()=>t.current?.fitField(),title:"Fit the field (F)",children:"Whole field"}),m("button",{class:"small",onClick:()=>t.current?.focusBall(),title:"Centre on the ball (B)",children:"Ball"})]}),i&&m("div",{class:"board-tip",children:i})]}),m("div",{class:"right",children:[m(RE,{}),o&&o.stage==="over"&&m("div",{class:"panel",children:[m("h2",{children:"Final"}),m("div",{children:[o.config.teams.home.name," ",o.score.home," – ",o.score.away," ",o.config.teams.away.name]})]})]}),m(kE,{}),Sa.value&&m("div",{class:"toast",children:Sa.value}),u&&r&&r.kind==="markers"&&m(PE,{coach:r.coach,what:`${r.side==="offense"?"The offense":"The defense"} places its markers face down.`,onContinue:()=>Xc.value=l})]})}_m(m(NE,{}),document.getElementById("app"));
