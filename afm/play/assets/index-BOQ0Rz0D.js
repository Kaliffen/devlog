(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Ea,dt,Fh,Bh,Gi,Iu,zh,Hh,za,Fo,Tr,Gh,Jc,Nl,Ul,Ko={},Zo=[],tm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ta=Array.isArray;function Ei(n,e){for(var t in e)n[t]=e[t];return n}function jc(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Vh(n,e,t){var i,s,r,o={};for(r in e)r=="key"?i=e[r]:r=="ref"?s=e[r]:o[r]=e[r];if(arguments.length>2&&(o.children=arguments.length>3?Ea.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)o[r]===void 0&&(o[r]=n.defaultProps[r]);return Bo(n,o,i,s,null)}function Bo(n,e,t,i,s){var r={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Fh,__i:-1,__u:0};return s==null&&dt.vnode!=null&&dt.vnode(r),r}function Wt(n){return n.children}function wr(n,e){this.props=n,this.context=e}function ps(n,e){if(e==null)return n.__?ps(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?ps(n):null}function nm(n){if(n.__P&&n.__d){var e=n.__v,t=e.__e,i=[],s=[],r=Ei({},e);r.__v=e.__v+1,dt.vnode&&dt.vnode(r),Qc(n.__P,r,e,n.__n,n.__P.namespaceURI,32&e.__u?[t]:null,i,t??ps(e),!!(32&e.__u),s),r.__v=e.__v,r.__.__k[r.__i]=r,qh(i,r,s),e.__e=e.__=null,r.__e!=t&&Wh(r)}}function Wh(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(e){if(e!=null&&e.__e!=null)return n.__e=n.__c.base=e.__e}),Wh(n)}function Nu(n){(!n.__d&&(n.__d=!0)&&Gi.push(n)&&!Jo.__r++||Iu!=dt.debounceRendering)&&((Iu=dt.debounceRendering)||zh)(Jo)}function Jo(){try{for(var n,e=1;Gi.length;)Gi.length>e&&Gi.sort(Hh),n=Gi.shift(),e=Gi.length,nm(n)}finally{Gi.length=Jo.__r=0}}function $h(n,e,t,i,s,r,o,a,c,l,u){var h,d,f,m,_,v,p=i&&i.__k||Zo,b=e.length;for(c=im(t,e,p,c,b),h=0;h<b;h++)(f=t.__k[h])!=null&&(d=f.__i!=-1&&p[f.__i]||Ko,f.__i=h,v=Qc(n,f,d,s,r,o,a,c,l,u),m=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&eu(d.ref,null,f),u.push(f.ref,f.__c||m,f)),_==null&&m!=null&&(_=m),4&f.__u?(c=Xh(f,c,n),d.__e&&(d.__e=null)):typeof f.type=="function"&&v!==void 0?c=v:m&&(c=m.nextSibling),f.__u&=-7);return t.__e=_,c}function im(n,e,t,i,s){var r,o,a,c,l,u=t.length,h=u,d=0;for(n.__k=new Array(s),r=0;r<s;r++)(o=e[r])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=n.__k[r]=Bo(null,o,null,null,null):Ta(o)?o=n.__k[r]=Bo(Wt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=n.__k[r]=Bo(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,c=r+d,o.__=n,o.__b=n.__b+1,a=null,(l=o.__i=sm(o,t,c,h))!=-1&&(h--,(a=t[l])&&(a.__u|=2)),a==null||a.__v==null?(l==-1&&(s>u?d--:s<u&&d++),typeof o.type!="function"&&(o.__u|=4)):l!=c&&(l==c-1?d--:l==c+1?d++:(l>c?d--:d++,o.__u|=4))):n.__k[r]=null;if(h)for(r=0;r<u;r++)(a=t[r])!=null&&(2&a.__u)==0&&(a.__e==i&&(i=ps(a)),Zh(a,a));return i}function Xh(n,e,t){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=Xh(i[s],e,t));return e}n.__e!=e&&(e&&n.type&&!e.parentNode&&(e=ps(n)),e=t.insertBefore(n.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function sm(n,e,t,i){var s,r,o,a=n.key,c=n.type,l=e[t],u=l!=null&&(2&l.__u)==0;if(l===null&&a==null||u&&a==l.key&&c==l.type)return t;if(i>(u?1:0)){for(s=t-1,r=t+1;s>=0||r<e.length;)if((l=e[o=s>=0?s--:r++])!=null&&(2&l.__u)==0&&a==l.key&&c==l.type)return o}return-1}function Uu(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||tm.test(e)?t:t+"px"}function to(n,e,t,i,s){var r,o;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||Uu(n.style,e,"");if(t)for(e in t)i&&t[e]==i[e]||Uu(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Gh,"$1")),o=e.toLowerCase(),e=o in n||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?i?t[Tr]=i[Tr]:(t[Tr]=Jc,n.addEventListener(e,r?Ul:Nl,r)):n.removeEventListener(e,r?Ul:Nl,r);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Ou(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e[Fo]==null)e[Fo]=Jc++;else if(e[Fo]<t[Tr])return;return t(dt.event?dt.event(e):e)}}}function Qc(n,e,t,i,s,r,o,a,c,l){var u,h,d,f,m,_,v,p,b,S,x,A,w,P,I,T,E=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[a=e.__e=t.__e]),(u=dt.__b)&&u(e);e:if(typeof E=="function"){h=o.length;try{if(b=e.props,S=E.prototype&&E.prototype.render,x=(u=E.contextType)&&i[u.__c],A=u?x?x.props.value:u.__:i,t.__c?p=(d=e.__c=t.__c).__=d.__E:(S?e.__c=d=new E(b,A):(e.__c=d=new wr(b,A),d.constructor=E,d.render=om),x&&x.sub(d),d.state||(d.state={}),d.__n=i,f=d.__d=!0,d.__h=[],d._sb=[]),S&&d.__s==null&&(d.__s=d.state),S&&E.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Ei({},d.__s)),Ei(d.__s,E.getDerivedStateFromProps(b,d.__s))),m=d.props,_=d.state,d.__v=e,f)S&&E.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),S&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(S&&E.getDerivedStateFromProps==null&&b!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(b,A),e.__v==t.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(b,d.__s,A)===!1){e.__v!=t.__v&&(d.props=b,d.state=d.__s,d.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(D){D&&(D.__=e)}),Zo.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d),a=ps(t);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(b,d.__s,A),S&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,_,v)})}if(d.context=A,d.props=b,d.__P=n,d.__e=!1,w=dt.__r,P=0,S)d.state=d.__s,d.__d=!1,w&&w(e),u=d.render(d.props,d.state,d.context),Zo.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,w&&w(e),u=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++P<25);d.state=d.__s,d.getChildContext!=null&&(i=Ei(Ei({},i),d.getChildContext())),S&&!f&&d.getSnapshotBeforeUpdate!=null&&(v=d.getSnapshotBeforeUpdate(m,_)),I=u!=null&&u.type===Wt&&u.key==null?Kh(u.props.children):u,a=$h(n,Ta(I)?I:[I],e,t,i,s,r,o,a,c,l),d.base=e.__e,e.__u&=-161,d.__h.length&&o.push(d),p&&(d.__E=d.__=null)}catch(D){if(o.length=h,e.__v=null,c||r!=null){if(D.then){for(e.__u|=c?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;r!=null&&(r[r.indexOf(a)]=null),e.__e=a}else if(r!=null)for(T=r.length;T--;)jc(r[T])}else e.__e=t.__e;e.__k==null&&(e.__k=t.__k||[]),D.then||Yh(e),dt.__e(D,e,t)}}else r==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):a=e.__e=rm(t.__e,e,t,i,s,r,o,c,l);return(u=dt.diffed)&&u(e),128&e.__u?void 0:a}function Yh(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Yh))}function qh(n,e,t){for(var i=0;i<t.length;i++)eu(t[i],t[++i],t[++i]);dt.__c&&dt.__c(e,n),n.some(function(s){try{n=s.__h,s.__h=[],n.some(function(r){r.call(s)})}catch(r){dt.__e(r,s.__v)}})}function Kh(n){return typeof n!="object"||n==null||n.__b>0?n:Ta(n)?n.map(Kh):n.constructor!==void 0?null:Ei({},n)}function rm(n,e,t,i,s,r,o,a,c){var l,u,h,d,f,m,_,v=t.props||Ko,p=e.props,b=e.type;if(b=="svg"?s="http://www.w3.org/2000/svg":b=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),r!=null){for(l=0;l<r.length;l++)if((f=r[l])&&"setAttribute"in f==!!b&&(b?f.localName==b:f.nodeType==3)){n=f,r[l]=null;break}}if(n==null){if(b==null)return document.createTextNode(p);n=document.createElementNS(s,b,p.is&&p),a&&(dt.__m&&dt.__m(e,r),a=!1),r=null}if(b==null)v===p||a&&n.data==p||(n.data=p);else{if(r=b=="textarea"&&p.defaultValue!=null?null:r&&Ea.call(n.childNodes),!a&&r!=null)for(v={},l=0;l<n.attributes.length;l++)v[(f=n.attributes[l]).name]=f.value;for(l in v)f=v[l],l=="dangerouslySetInnerHTML"?h=f:l=="children"||l in p||l=="value"&&"defaultValue"in p||l=="checked"&&"defaultChecked"in p||to(n,l,null,f,s);for(l in p)f=p[l],l=="children"?d=f:l=="dangerouslySetInnerHTML"?u=f:l=="value"?m=f:l=="checked"?_=f:a&&typeof f!="function"||v[l]===f||to(n,l,f,v[l],s);if(u)a||h&&(u.__html==h.__html||u.__html==n.innerHTML)||(n.innerHTML=u.__html),e.__k=[];else if(h&&(n.innerHTML=""),$h(e.type=="template"?n.content:n,Ta(d)?d:[d],e,t,i,b=="foreignObject"?"http://www.w3.org/1999/xhtml":s,r,o,r?r[0]:t.__k&&ps(t,0),a,c),r!=null)for(l=r.length;l--;)jc(r[l]);a&&b!="textarea"||(l="value",b=="progress"&&m==null?n.removeAttribute("value"):m!=null&&(m!==n[l]||b=="progress"&&!m||b=="option"&&m!=v[l])&&to(n,l,m,v[l],s),l="checked",_!=null&&_!=n[l]&&to(n,l,_,v[l],s))}return n}function eu(n,e,t){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&e==null||(n.__u=n(e))}else n.current=e}catch(s){dt.__e(s,t)}}function Zh(n,e,t){var i,s;if(dt.unmount&&dt.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||eu(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){dt.__e(r,e)}i.base=i.__P=i.__n=null}if(i=n.__k)for(s=0;s<i.length;s++)i[s]&&Zh(i[s],e,t||typeof n.type!="function");t||jc(n.__e),n.__c=n.__=n.__e=void 0}function om(n,e,t){return this.constructor(n,t)}function am(n,e,t){var i,s,r,o;e==document&&(e=document.documentElement),dt.__&&dt.__(n,e),s=(i=!1)?null:e.__k,r=[],o=[],Qc(e,n=e.__k=Vh(Wt,null,[n]),s||Ko,Ko,e.namespaceURI,s?null:e.firstChild?Ea.call(e.childNodes):null,r,s?s.__e:e.firstChild,i,o),qh(r,n,o),n.props.children=null}Ea=Zo.slice,dt={__e:function(n,e,t,i){for(var s,r,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((r=s.constructor)&&r.getDerivedStateFromError!=null&&(s.setState(r.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,i||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},Fh=0,Bh=function(n){return n!=null&&n.constructor===void 0},wr.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ei({},this.state),typeof n=="function"&&(n=n(Ei({},t),this.props)),n&&Ei(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Nu(this))},wr.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Nu(this))},wr.prototype.render=Wt,Gi=[],zh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Hh=function(n,e){return n.__v.__b-e.__v.__b},Jo.__r=0,za=Math.random().toString(8),Fo="__d"+za,Tr="__a"+za,Gh=/(PointerCapture)$|Capture$/i,Jc=0,Nl=Ou(!1),Ul=Ou(!0);var lm=0;function g(n,e,t,i,s,r){e||(e={});var o,a,c=e;if("ref"in c)for(a in c={},e)a=="ref"?o=e[a]:c[a]=e[a];var l={type:n,props:c,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--lm,__i:-1,__u:0,__source:s,__self:r};if(typeof n=="function"&&(o=n.defaultProps))for(a in o)c[a]===void 0&&(c[a]=o[a]);return dt.vnode&&dt.vnode(l),l}var Ir,Bt,Ha,Fu,jo=0,Jh=[],Vt=dt,Bu=Vt.__b,zu=Vt.__r,Hu=Vt.diffed,Gu=Vt.__c,Vu=Vt.unmount,Wu=Vt.__;function tu(n,e){Vt.__h&&Vt.__h(Bt,n,jo||e),jo=0;var t=Bt.__H||(Bt.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function kt(n){return jo=1,cm(Qh,n)}function cm(n,e,t){var i=tu(Ir++,2);if(i.t=n,!i.__c&&(i.__=[Qh(void 0,e),function(a){var c=i.__N?i.__N[0]:i.__[0],l=i.t(c,a);c!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=Bt,!Bt.__f)){var s=function(a,c,l){if(!i.__c.__H)return!0;var u=!1,h=i.__c.props!==a;if(i.__c.__H.__.some(function(f){if(f.__N){u=!0;var m=f.__[0];f.__=f.__N,f.__N=void 0,m!==f.__[0]&&(h=!0)}}),r){var d=r.call(this,a,c,l);return u?d||h:d}return!u||h};Bt.__f=!0;var r=Bt.shouldComponentUpdate,o=Bt.componentWillUpdate;Bt.componentWillUpdate=function(a,c,l){if(this.__e){var u=r;r=void 0,s(a,c,l),r=u}o&&o.call(this,a,c,l)},Bt.shouldComponentUpdate=s}return i.__N||i.__}function $s(n,e){var t=tu(Ir++,3);!Vt.__s&&jh(t.__H,e)&&(t.__=n,t.u=e,Bt.__H.__h.push(t))}function Xs(n){return jo=5,Ys(function(){return{current:n}},[])}function Ys(n,e){var t=tu(Ir++,7);return jh(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function um(){for(var n;n=Jh.shift();){var e=n.__H;if(n.__P&&e)try{e.__h.some(zo),e.__h.some(Ol),e.__h=[]}catch(t){e.__h=[],Vt.__e(t,n.__v)}}}Vt.__b=function(n){Bt=null,Bu&&Bu(n)},Vt.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Wu&&Wu(n,e)},Vt.__r=function(n){zu&&zu(n),Ir=0;var e=(Bt=n.__c).__H;e&&(Ha===Bt?(e.__h=[],Bt.__h=[],e.__.some(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.some(zo),e.__h.some(Ol),e.__h=[],Ir=0)),Ha=Bt},Vt.diffed=function(n){Hu&&Hu(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Jh.push(e)!==1&&Fu===Vt.requestAnimationFrame||((Fu=Vt.requestAnimationFrame)||dm)(um)),e.__H.__.some(function(t){t.u&&(t.__H=t.u,t.u=void 0)})),Ha=Bt=null},Vt.__c=function(n,e){e.some(function(t){try{t.__h.some(zo),t.__h=t.__h.filter(function(i){return!i.__||Ol(i)})}catch(i){e.some(function(s){s.__h&&(s.__h=[])}),e=[],Vt.__e(i,t.__v)}}),Gu&&Gu(n,e)},Vt.unmount=function(n){Vu&&Vu(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.some(function(i){try{zo(i)}catch(s){e=s}}),t.__H=void 0,e&&Vt.__e(e,t.__v))};var $u=typeof requestAnimationFrame=="function";function dm(n){var e,t=function(){clearTimeout(i),$u&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,35);$u&&(e=requestAnimationFrame(t))}function zo(n){var e=Bt,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Bt=e}function Ol(n){var e=Bt;n.__c=n.__(),Bt=e}function jh(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function Qh(n,e){return typeof e=="function"?e(n):e}var hm=Symbol.for("preact-signals");function wa(){if(Ci>1)Ci--;else{var n,e=!1;for((function(){var s=ea;for(ea=void 0;s!==void 0;){var r=s.S;if(r.v===s.v)for(var o=r.t;o!==void 0;o=o.x)o.i===s.i&&(o.i=r.i);s=s.o}})();Cr!==void 0;){var t=Cr;for(Cr=void 0,Qo++;t!==void 0;){var i=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&tf(t))try{t.c()}catch(s){e||(n=s,e=!0)}t=i}}if(Qo=0,Ci--,e)throw n}}function fm(n){if(Ci>0)return n();Fl=++pm,Ci++;try{return n()}finally{wa()}}var Ar,Tt=void 0;function ds(n){var e=Tt,t=Ar;Tt=void 0,Ar=void 0;try{return n()}finally{Tt=e,Ar=t}}var Cr=void 0,Ci=0,Qo=0,pm=0,Fl=0,ea=void 0,ta=0;function ef(n){if(Tt!==void 0){var e=n.n;if(e===void 0||e.t!==Tt)return e={i:0,S:n,p:Tt.s,n:void 0,t:Tt,e:void 0,x:void 0,r:e},Tt.s!==void 0&&(Tt.s.n=e),Tt.s=e,n.n=e,32&Tt.f&&n.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=Tt.s,e.n=void 0,Tt.s.n=e,Tt.s=e),e}}function tn(n,e){this.v=n,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}tn.prototype.brand=hm;tn.prototype.h=function(){return!0};tn.prototype.S=function(n){var e=this,t=this.t;t!==n&&n.e===void 0&&(n.x=t,this.t=n,t!==void 0?t.e=n:ds(function(){var i;(i=e.W)==null||i.call(e)}))};tn.prototype.U=function(n){var e=this;if(this.t!==void 0){var t=n.e,i=n.x;t!==void 0&&(t.x=i,n.e=void 0),i!==void 0&&(i.e=t,n.x=void 0),n===this.t&&(this.t=i,i===void 0&&ds(function(){var s;(s=e.Z)==null||s.call(e)}))}};tn.prototype.subscribe=function(n){var e=this;return Wi(function(){var t=e.value;ds(function(){return n(t)})},{name:"sub"})};tn.prototype.valueOf=function(){return this.value};tn.prototype.toString=function(){return this.value+""};tn.prototype.toJSON=function(){return this.value};tn.prototype.peek=function(){var n=this;return ds(function(){return n.value})};Object.defineProperty(tn.prototype,"value",{get:function(){var n=ef(this);return n!==void 0&&(n.i=this.i),this.v},set:function(n){if(n!==this.v){if(Qo>100)throw new Error("Cycle detected");(function(t){Ci!==0&&Qo===0&&t.l!==Fl&&(t.l=Fl,ea={S:t,v:t.v,i:t.i,o:ea})})(this),this.v=n,this.i++,ta++,Ci++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{wa()}}}});function nt(n,e){return new tn(n,e)}function tf(n){for(var e=n.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function nf(n){for(var e=n.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){n.s=e;break}}}function sf(n){for(var e=n.s,t=void 0;e!==void 0;){var i=e.p;e.i===-1?(e.S.U(e),i!==void 0&&(i.n=e.n),e.n!==void 0&&(e.n.p=i)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=i}n.s=t}function ys(n,e){tn.call(this,void 0,e),this.x=n,this.s=void 0,this.g=ta-1,this.f=4}ys.prototype=new tn;ys.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ta))return!0;if(this.g=ta,this.f|=1,this.i>0&&!tf(this))return this.f&=-2,!0;var n=Tt;try{nf(this),Tt=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Tt=n,sf(this),this.f&=-2,!0};ys.prototype.S=function(n){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}tn.prototype.S.call(this,n)};ys.prototype.U=function(n){if(this.t!==void 0&&(tn.prototype.U.call(this,n),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};ys.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;n!==void 0;n=n.x)n.t.N()}};Object.defineProperty(ys.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var n=ef(this);if(this.h(),n!==void 0&&(n.i=this.i),16&this.f)throw this.v;return this.v}});function Pi(n,e){return new ys(n,e)}function rf(n){var e=n.j;if(n.j=void 0,typeof e=="function"){Ci++;var t=Tt;Tt=void 0;try{e()}catch(i){throw n.f&=-2,n.f|=8,nu(n),i}finally{Tt=t,wa()}}}function nu(n){for(var e=n.s;e!==void 0;e=e.n)e.S.U(e);n.x=void 0,n.s=void 0,rf(n)}function mm(n){if(Tt!==this)throw new Error("Out-of-order effect");sf(this),Tt=n,this.f&=-2;try{8&this.f&&nu(this)}finally{wa()}}function or(n,e){this.x=n,this.j=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,Ar&&Ar.push(this)}or.prototype.c=function(){var n=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.j=e)}finally{n()}};or.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,rf(this),nf(this),Ci++;var n=Tt;return Tt=this,mm.bind(this,n)};or.prototype.N=function(){2&this.f||(this.f|=2,this.u=Cr,Cr=this)};or.prototype.d=function(){this.f|=8,1&this.f||nu(this)};or.prototype.dispose=function(){this.d()};function Wi(n,e){var t=new or(n,e);try{t.c()}catch(s){throw t.d(),s}var i=t.d.bind(t);return i[Symbol.dispose]=i,i}var of,no,gm=typeof window<"u"&&!!window.__PREACT_SIGNALS_DEVTOOLS__,af=[];Wi(function(){of=this.N})();function ar(n,e){dt[n]=e.bind(null,dt[n]||function(){})}function Nr(n){if(no){var e=no;no=void 0,e()}no=n&&n.S()}function lf(n){var e=this,t=n.data,i=_m(t);i.name="ReactiveDom",i.value=t;var s=Ys(function(){for(var a=e,c=e.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}var l=Pi(function(){var f=i.value.value;return f===0?0:f===!0?"":f||""}),u=Pi(function(){return!Array.isArray(l.value)&&!Bh(l.value)}),h=Wi(function(){if(this.N=cf,u.value){var f=l.value;a.__v&&a.__v.__e&&a.__v.__e.nodeType===3&&(a.__v.__e.data=f)}}),d=e.__$u.d;return e.__$u.d=function(){h(),d.call(this)},[u,l]},[]),r=s[0],o=s[1];return r.value?o.peek():o.value}lf.displayName="ReactiveTextNode";Object.defineProperties(tn.prototype,{constructor:{configurable:!0,value:Vh(Wt,null).constructor},type:{configurable:!0,value:lf},props:{configurable:!0,get:function(){var n=this;return{data:{get value(){return n.value}}}}},__b:{configurable:!0,value:1}});ar("__b",function(n,e){if(Nr(),typeof e.type=="string"){var t,i=e.props;for(var s in i)if(s!=="children"){var r=i[s];r instanceof tn&&(t||(e.__np=t={}),t[s]=r,i[s]=r.peek())}}n(e)});ar("__r",function(n,e){if(n(e),e.type!==Wt){Nr();var t,i=e.__c;i&&(i.__$f&=-2,(t=i.__$u)===void 0&&(i.__$u=t=(function(s,r){var o;return Wi(function(){o=this},{name:r}),o.c=s,o})((function(s){return function(){var r;gm&&((r=this.y)==null||r.call(this)),s.__$f|=1,s.setState({})}})(i),typeof e.type=="function"?e.type.displayName||e.type.name:""))),Nr(t)}});ar("__e",function(n,e,t,i){Nr(),n(e,t,i)});ar("diffed",function(n,e){Nr();var t;if(typeof e.type=="string"&&(t=e.__e)){var i=e.__np,s=e.props,r=t.U;if(r)for(var o in r){var a=r[o];a===void 0||i&&o in i||(a.d(),r[o]=void 0)}if(i){r||(r={},t.U=r);for(var c in i){var l=r[c],u=i[c];l===void 0?(l=vm(t,c,u,s),r[c]=l):l.o(u,s)}}}n(e)});function vm(n,e,t,i){var s=e in n&&n.ownerSVGElement===void 0,r=nt(t);return{o:function(o,a){r.value=o,i=a},d:Wi(function(){this.N=cf;var o=r.value.value;i[e]!==o&&(i[e]=o,s?n[e]=o:o!=null&&(o!==!1||e[4]==="-")?n.setAttribute(e,o):n.removeAttribute(e))})}}ar("unmount",function(n,e){if(typeof e.type=="string"){var t=e.__e;if(t){var i=t.U;if(i){t.U=void 0;for(var s in i){var r=i[s];r&&r.d()}}}var o=e.__np;if(o){var a=e.props;for(var c in o)a[c]=o[c]}e.__np=void 0}else{var l=e.__c;if(l){l.__$f|=8;var u=l.__$u;u&&(l.__$u=void 0,u.d())}}n(e)});ar("__h",function(n,e,t,i){i<3&&(e.__$f|=2),n(e,t,i)});wr.prototype.shouldComponentUpdate=function(n,e){if(this.__R)return!0;var t=this.__$u,i=t&&t.s!==void 0;for(var s in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var r=2&this.__$f;if(!(i||r||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var o in n)if(o!=="__source"&&n[o]!==this.props[o])return!0;for(var a in this.props)if(!(a in n))return!0;return!1};function _m(n,e){return Ys(function(){return nt(n,e)},[])}var ym=function(n){queueMicrotask(function(){queueMicrotask(n)})};function bm(){fm(function(){for(var n;n=af.shift();)of.call(n)})}function cf(){af.push(this)===1&&(dt.requestAnimationFrame||ym)(bm)}const iu="180",Sm=0,Xu=1,xm=2,uf=1,Mm=2,yi=3,Yi=0,gn=1,xi=2,$i=0,qs=1,Yu=2,qu=3,Ku=4,Em=5,os=100,Tm=101,wm=102,Am=103,Cm=104,Rm=200,km=201,Pm=202,Lm=203,Bl=204,zl=205,Dm=206,Im=207,Nm=208,Um=209,Om=210,Fm=211,Bm=212,zm=213,Hm=214,Hl=0,Gl=1,Vl=2,js=3,Wl=4,$l=5,Xl=6,Yl=7,df=0,Gm=1,Vm=2,Xi=0,Wm=1,$m=2,Xm=3,Ym=4,qm=5,Km=6,Zm=7,hf=300,Qs=301,er=302,ql=303,Kl=304,Aa=306,Zl=1e3,cs=1001,Jl=1002,$n=1003,Jm=1004,io=1005,Vn=1006,Ga=1007,us=1008,Li=1009,ff=1010,pf=1011,Ur=1012,su=1013,ms=1014,Ti=1015,qr=1016,ru=1017,ou=1018,Or=1020,mf=35902,gf=35899,vf=1021,_f=1022,Wn=1023,Fr=1026,Br=1027,yf=1028,au=1029,bf=1030,lu=1031,cu=1033,Ho=33776,Go=33777,Vo=33778,Wo=33779,jl=35840,Ql=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,lc=37811,cc=37812,uc=37813,dc=37814,hc=37815,fc=37816,pc=37817,mc=37818,gc=37819,vc=37820,_c=37821,yc=36492,bc=36494,Sc=36495,xc=36283,Mc=36284,Ec=36285,Tc=36286,jm=3200,Qm=3201,eg=0,tg=1,Vi="",mn="srgb",tr="srgb-linear",na="linear",pt="srgb",Ms=7680,Zu=519,ng=512,ig=513,sg=514,Sf=515,rg=516,og=517,ag=518,lg=519,wc=35044,Ju="300 es",ri=2e3,ia=2001;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$o=Math.PI/180,Ac=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function cg(n,e){return(n%e+e)%e}function Va(n,e,t){return(1-t)*n+t*e}function ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==m){let v=1-a;const p=c*d+l*f+u*m+h*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,p*b);v=Math.sin(v*w)/A,a=Math.sin(a*w)/A}const x=a*b;if(c=c*v+d*x,l=l*v+f*x,u=u*v+m*x,h=h*v+_*x,v===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new O,ju=new Kr;class Xe{constructor(e,t,i,s,r,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],_=s[0],v=s[3],p=s[6],b=s[1],S=s[4],x=s[7],A=s[2],w=s[5],P=s[8];return r[0]=o*_+a*b+c*A,r[3]=o*v+a*S+c*w,r[6]=o*p+a*x+c*P,r[1]=l*_+u*b+h*A,r[4]=l*v+u*S+h*w,r[7]=l*p+u*x+h*P,r[2]=d*_+f*b+m*A,r[5]=d*v+f*S+m*w,r[8]=d*p+f*x+m*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(s*l-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Xe;function xf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ug(){const n=sa("canvas");return n.style.display="block",n}const Qu={};function zr(n){n in Qu||(Qu[n]=!0,console.warn(n))}function dg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ed=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){const n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:e,whitePoint:i,transfer:na,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:ed,fromXYZ:td,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const rt=hg();function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Es;class fg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=sa("canvas")),Es.width=e.width,Es.height=e.height;const s=Es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pg=0;class uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xa(s[o].image)):r.push(Xa(s[o]))}else r=Xa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mg=0;const Ya=new O;class hn extends lr{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=cs,s=cs,r=Vn,o=us,a=Wn,c=Li,l=hn.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Ri(),this.name="",this.source=new uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zl:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zl:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=hf;hn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,s=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],v=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+v)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,x=(f+1)/2,A=(p+1)/2,w=(u+d)/4,P=(h+_)/4,I=(m+v)/4;return S>x&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=P/i):x>A?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=I/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=I/r),this.set(i,s,r,t),this}let b=Math.sqrt((v-m)*(v-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(v-m)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gg extends lr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new hn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new uu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends gg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mf extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vg extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$n,this.minFilter=$n,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),ro.subVectors(this.max,pr),Ts.subVectors(e.a,pr),ws.subVectors(e.b,pr),As.subVectors(e.c,pr),Ui.subVectors(ws,Ts),Oi.subVectors(As,ws),Ji.subVectors(Ts,As);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-Ji.z,Ji.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,Ji.z,0,-Ji.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-Ji.y,Ji.x,0];return!qa(t,Ts,ws,As,ro)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Ts,ws,As,ro))?!1:(oo.crossVectors(Ui,Oi),t=[oo.x,oo.y,oo.z],qa(t,Ts,ws,As,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new O,new O,new O,new O,new O,new O,new O,new O],Dn=new O,so=new Zr,Ts=new O,ws=new O,As=new O,Ui=new O,Oi=new O,Ji=new O,pr=new O,ro=new O,oo=new O,ji=new O;function qa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=e.dot(ji),l=t.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const _g=new Zr,mr=new O,Ka=new O;class Ca{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_g.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Ka)),this.expandByPoint(mr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new O,Za=new O,ao=new O,Fi=new O,Ja=new O,lo=new O,ja=new O;class du{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Za.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=Fi.dot(this.direction),c=-Fi.dot(ao),l=Fi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Za).addScaledVector(ao,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,i,s,r){Ja.subVectors(t,e),lo.subVectors(i,e),ja.crossVectors(Ja,lo);let o=this.direction.dot(ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const c=a*this.direction.dot(lo.crossVectors(Fi,lo));if(c<0)return null;const l=a*this.direction.dot(Ja.cross(Fi));if(l<0||c+l>o)return null;const u=-a*Fi.dot(ja);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,s,r,o,a,c,l,u,h,d,f,m,_,v){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,d,f,m,_,v)}set(e,t,i,s,r,o,a,c,l,u,h,d,f,m,_,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,bg)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Bi.crossVectors(i,bn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Bi.crossVectors(i,bn)),Bi.normalize(),co.crossVectors(bn,Bi),s[0]=Bi.x,s[4]=co.x,s[8]=bn.x,s[1]=Bi.y,s[5]=co.y,s[9]=bn.y,s[2]=Bi.z,s[6]=co.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],_=i[6],v=i[10],p=i[14],b=i[3],S=i[7],x=i[11],A=i[15],w=s[0],P=s[4],I=s[8],T=s[12],E=s[1],D=s[5],F=s[9],k=s[13],B=s[2],z=s[6],W=s[10],J=s[14],X=s[3],le=s[7],fe=s[11],ve=s[15];return r[0]=o*w+a*E+c*B+l*X,r[4]=o*P+a*D+c*z+l*le,r[8]=o*I+a*F+c*W+l*fe,r[12]=o*T+a*k+c*J+l*ve,r[1]=u*w+h*E+d*B+f*X,r[5]=u*P+h*D+d*z+f*le,r[9]=u*I+h*F+d*W+f*fe,r[13]=u*T+h*k+d*J+f*ve,r[2]=m*w+_*E+v*B+p*X,r[6]=m*P+_*D+v*z+p*le,r[10]=m*I+_*F+v*W+p*fe,r[14]=m*T+_*k+v*J+p*ve,r[3]=b*w+S*E+x*B+A*X,r[7]=b*P+S*D+x*z+A*le,r[11]=b*I+S*F+x*W+A*fe,r[15]=b*T+S*k+x*J+A*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],v=e[11],p=e[15];return m*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+v*(+t*l*h-t*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],v=e[14],p=e[15],b=h*v*l-_*d*l+_*c*f-a*v*f-h*c*p+a*d*p,S=m*d*l-u*v*l-m*c*f+o*v*f+u*c*p-o*d*p,x=u*_*l-m*h*l+m*a*f-o*_*f-u*a*p+o*h*p,A=m*h*c-u*_*c-m*a*d+o*_*d+u*a*v-o*h*v,w=t*b+i*S+s*x+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=b*P,e[1]=(_*d*r-h*v*r-_*s*f+i*v*f+h*s*p-i*d*p)*P,e[2]=(a*v*r-_*c*r+_*s*l-i*v*l-a*s*p+i*c*p)*P,e[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*P,e[4]=S*P,e[5]=(u*v*r-m*d*r+m*s*f-t*v*f-u*s*p+t*d*p)*P,e[6]=(m*c*r-o*v*r-m*s*l+t*v*l+o*s*p-t*c*p)*P,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*P,e[8]=x*P,e[9]=(m*h*r-u*_*r-m*i*f+t*_*f+u*i*p-t*h*p)*P,e[10]=(o*_*r-m*a*r+m*i*l-t*_*l-o*i*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*l+t*h*l+o*i*f-t*a*f)*P,e[12]=A*P,e[13]=(u*_*s-m*h*s+m*i*d-t*_*d-u*i*v+t*h*v)*P,e[14]=(m*a*s-o*_*s-m*i*c+t*_*c+o*i*v-t*a*v)*P,e[15]=(o*h*s-u*a*s+u*i*c-t*h*c-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,_=o*u,v=o*h,p=a*h,b=c*l,S=c*u,x=c*h,A=i.x,w=i.y,P=i.z;return s[0]=(1-(_+p))*A,s[1]=(f+x)*A,s[2]=(m-S)*A,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+p))*w,s[6]=(v+b)*w,s[7]=0,s[8]=(m+S)*P,s[9]=(v-b)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const l=1/r,u=1/o,h=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ri,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===ri)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ia)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ri,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===ri)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===ia)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Cs=new O,In=new Lt,yg=new O(0,0,0),bg=new O(1,1,1),Bi=new O,co=new O,bn=new O,nd=new Lt,id=new Kr;class Di{constructor(e=0,t=0,i=0,s=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return id.setFromEuler(this),this.setFromQuaternion(id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sg=0;const sd=new O,Rs=new Kr,pi=new Lt,uo=new O,gr=new O,xg=new O,Mg=new Kr,rd=new O(1,0,0),od=new O(0,1,0),ad=new O(0,0,1),ld={type:"added"},Eg={type:"removed"},ks={type:"childadded",child:null},Qa={type:"childremoved",child:null};class fn extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new O,t=new Di,i=new Kr,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Xe}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(rd,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rd,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uo.copy(e):uo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(gr,uo,this.up):pi.lookAt(uo,gr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(pi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ld),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ld),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}fn.DEFAULT_UP=new O(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new O,mi=new O,el=new O,gi=new O,Ps=new O,Ls=new O,cd=new O,tl=new O,nl=new O,il=new O,sl=new zt,rl=new zt,ol=new zt;class xn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),mi.subVectors(i,t),el.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(mi),c=Nn.dot(el),l=mi.dot(mi),u=mi.dot(el),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,i),ol.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sl,r.x),o.addScaledVector(rl,r.y),o.addScaledVector(ol,r.z),o}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),mi.subVectors(e,t),Nn.cross(mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Nn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Ls.subVectors(r,i),tl.subVectors(e,i);const c=Ps.dot(tl),l=Ls.dot(tl);if(c<=0&&l<=0)return t.copy(i);nl.subVectors(e,s);const u=Ps.dot(nl),h=Ls.dot(nl);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ps,o);il.subVectors(e,r);const f=Ps.dot(il),m=Ls.dot(il);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Ls,a);const v=u*m-f*h;if(v<=0&&h-u>=0&&f-m>=0)return cd.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(cd,a);const p=1/(v+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=cg(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=Ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return rt.workingToColorSpace(sn.copy(this),e),Math.round(Ke(sn.r*255,0,255))*65536+Math.round(Ke(sn.g*255,0,255))*256+Math.round(Ke(sn.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=mn){rt.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ho);const i=Va(zi.h,ho.h,t),s=Va(zi.s,ho.s,t),r=Va(zi.l,ho.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new et;et.NAMES=Ef;let Tg=0;class cr extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=qs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class St extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new O,fo=new ge;let wg=0;class Xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wc,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}}class Tf extends Xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wf extends Xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends Xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ag=0;const Rn=new Lt,ll=new fn,Ds=new O,Sn=new Zr,vr=new Zr,jt=new O;class rn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?wf:Tf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Sn.min,vr.min),Sn.expandByPoint(jt),jt.addVectors(Sn.max,vr.max),Sn.expandByPoint(jt)):(Sn.expandByPoint(vr.min),Sn.expandByPoint(vr.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(e,l),jt.add(Ds)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new O,c[I]=new O;const l=new O,u=new O,h=new O,d=new ge,f=new ge,m=new ge,_=new O,v=new O;function p(I,T,E){l.fromBufferAttribute(i,I),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,E),u.sub(l),h.sub(l),f.sub(d),m.sub(d);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(D),v.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(D),a[I].add(_),a[T].add(_),a[E].add(_),c[I].add(v),c[T].add(v),c[E].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,T=b.length;I<T;++I){const E=b[I],D=E.start,F=E.count;for(let k=D,B=D+F;k<B;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new O,x=new O,A=new O,w=new O;function P(I){A.fromBufferAttribute(s,I),w.copy(A);const T=a[I];S.copy(T),S.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(w,T);const D=x.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,D)}for(let I=0,T=b.length;I<T;++I){const E=b[I],D=E.start,F=E.count;for(let k=D,B=D+F;k<B;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),v=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,v),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,v=c.length;_<v;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Xn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new Lt,Qi=new du,po=new Ca,dd=new O,mo=new O,go=new O,vo=new O,cl=new O,_o=new O,hd=new O,yo=new O;class tt extends fn{constructor(e=new rn,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(cl.fromBufferAttribute(h,e),o?_o.addScaledVector(cl,u):_o.addScaledVector(cl.sub(t),u))}t.add(_o)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(po.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(po,dd)===null||Qi.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(ud.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(ud),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const v=d[m],p=o[v.materialIndex],b=Math.max(v.start,f.start),S=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let x=b,A=S;x<A;x+=3){const w=a.getX(x),P=a.getX(x+1),I=a.getX(x+2);s=bo(this,p,e,i,l,u,h,w,P,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let v=m,p=_;v<p;v+=3){const b=a.getX(v),S=a.getX(v+1),x=a.getX(v+2);s=bo(this,o,e,i,l,u,h,b,S,x),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const v=d[m],p=o[v.materialIndex],b=Math.max(v.start,f.start),S=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let x=b,A=S;x<A;x+=3){const w=x,P=x+1,I=x+2;s=bo(this,p,e,i,l,u,h,w,P,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let v=m,p=_;v<p;v+=3){const b=v,S=v+1,x=v+2;s=bo(this,o,e,i,l,u,h,b,S,x),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function Cg(n,e,t,i,s,r,o,a){let c;if(e.side===gn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Yi,a),c===null)return null;yo.copy(a),yo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:n}}function bo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,mo),n.getVertexPosition(c,go),n.getVertexPosition(l,vo);const u=Cg(n,e,t,i,mo,go,vo,hd);if(u){const h=new O;xn.getBarycoord(hd,mo,go,vo,h),s&&(u.uv=xn.getInterpolatedAttribute(s,a,c,l,h,new ge)),r&&(u.uv1=xn.getInterpolatedAttribute(r,a,c,l,h,new ge)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new O,materialIndex:0};xn.getNormal(mo,go,vo,d.normal),u.face=d,u.barycoord=h}return u}class Jr extends rn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function m(_,v,p,b,S,x,A,w,P,I,T){const E=x/P,D=A/I,F=x/2,k=A/2,B=w/2,z=P+1,W=I+1;let J=0,X=0;const le=new O;for(let fe=0;fe<W;fe++){const ve=fe*D-k;for(let Be=0;Be<z;Be++){const Pe=Be*E-F;le[_]=Pe*b,le[v]=ve*S,le[p]=B,l.push(le.x,le.y,le.z),le[_]=0,le[v]=0,le[p]=w>0?1:-1,u.push(le.x,le.y,le.z),h.push(Be/P),h.push(1-fe/I),J+=1}}for(let fe=0;fe<I;fe++)for(let ve=0;ve<P;ve++){const Be=d+ve+z*fe,Pe=d+ve+z*(fe+1),at=d+(ve+1)+z*(fe+1),it=d+(ve+1)+z*fe;c.push(Be,Pe,it),c.push(Pe,at,it),X+=6}a.addGroup(f,X,T),f+=X,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=nr(n[t]);for(const s in i)e[s]=i[s]}return e}function Rg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Af(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const kg={clone:nr,merge:un};var Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cf extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new O,fd=new ge,pd=new ge;class Fn extends Cf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,fd,pd),t.subVectors(pd,fd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Ns=1;class Dg extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(Is,Ns,e,t);s.layers=this.layers,this.add(s);const r=new Fn(Is,Ns,e,t);r.layers=this.layers,this.add(r);const o=new Fn(Is,Ns,e,t);o.layers=this.layers,this.add(o);const a=new Fn(Is,Ns,e,t);a.layers=this.layers,this.add(a);const c=new Fn(Is,Ns,e,t);c.layers=this.layers,this.add(c);const l=new Fn(Is,Ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Rf extends hn{constructor(e=[],t=Qs,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ig extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Rf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jr(5,5,5),r=new qi({name:"CubemapFromEquirect",uniforms:nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:$i});r.uniforms.tEquirect.value=t;const o=new tt(s,r),a=t.minFilter;return t.minFilter===us&&(t.minFilter=Vn),new Dg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ln extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ng={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,i),p=this._getHandJoint(l,_);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ug extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Og{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new O;class ra{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),i=mt(i,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kf extends cr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const _r=new O,Os=new O,Fs=new O,Bs=new ge,yr=new ge,Pf=new Lt,So=new O,br=new O,xo=new O,md=new ge,dl=new ge,gd=new ge;class Fg extends fn{constructor(e=new kf){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Og(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new ra(i,3,0,!1)),Us.setAttribute("uv",new ra(i,2,3,!1))}this.geometry=Us,this.material=e,this.center=new ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),Pf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Fs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Mo(So.set(-.5,-.5,0),Fs,o,Os,s,r),Mo(br.set(.5,-.5,0),Fs,o,Os,s,r),Mo(xo.set(.5,.5,0),Fs,o,Os,s,r),md.set(0,0),dl.set(1,0),gd.set(1,1);let a=e.ray.intersectTriangle(So,br,xo,!1,_r);if(a===null&&(Mo(br.set(-.5,.5,0),Fs,o,Os,s,r),dl.set(0,1),a=e.ray.intersectTriangle(So,xo,br,!1,_r),a===null))return;const c=e.ray.origin.distanceTo(_r);c<e.near||c>e.far||t.push({distance:c,point:_r.clone(),uv:xn.getInterpolation(_r,So,br,xo,md,dl,gd,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Mo(n,e,t,i,s,r){Bs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(yr.x=r*Bs.x-s*Bs.y,yr.y=s*Bs.x+r*Bs.y):yr.copy(Bs),n.copy(e),n.x+=yr.x,n.y+=yr.y,n.applyMatrix4(Pf)}const hl=new O,Bg=new O,zg=new Xe;class is{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=hl.subVectors(i,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zg.getNormalMatrix(e),s=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Ca,Hg=new ge(.5,.5),Eo=new O;class Lf{constructor(e=new is,t=new is,i=new is,s=new is,r=new is,o=new is){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],b=r[12],S=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-o,f-u,p-m,A-b).normalize(),s[1].setComponents(l+o,f+u,p+m,A+b).normalize(),s[2].setComponents(l+a,f+h,p+_,A+S).normalize(),s[3].setComponents(l-a,f-h,p-_,A-S).normalize(),i)s[4].setComponents(c,d,v,x).normalize(),s[5].setComponents(l-c,f-d,p-v,A-x).normalize();else if(s[4].setComponents(l-c,f-d,p-v,A-x).normalize(),t===ri)s[5].setComponents(l+c,f+d,p+v,A+x).normalize();else if(t===ia)s[5].setComponents(c,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=Hg.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Eo.x=s.normal.x>0?e.max.x:e.min.x,Eo.y=s.normal.y>0?e.max.y:e.min.y,Eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zs extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new O,aa=new O,vd=new Lt,Sr=new du,To=new Ca,fl=new O,_d=new O;class la extends fn{constructor(e=new rn,t=new Zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)oa.fromBufferAttribute(t,s-1),aa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=oa.distanceTo(aa);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;vd.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(vd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,v=m-1;_<v;_+=l){const p=u.getX(_),b=u.getX(_+1),S=wo(this,e,Sr,c,p,b,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(m-1),v=u.getX(f),p=wo(this,e,Sr,c,_,v,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,v=m-1;_<v;_+=l){const p=wo(this,e,Sr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=wo(this,e,Sr,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(oa.fromBufferAttribute(a,s),aa.fromBufferAttribute(a,r),t.distanceSqToSegment(oa,aa,fl,_d)>i)return;fl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(fl);if(!(l<e.near||l>e.far))return{distance:l,point:_d.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const yd=new O,bd=new O;class Gg extends la{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)yd.fromBufferAttribute(t,s),bd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+yd.distanceTo(bd);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Df extends hn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class If extends hn{constructor(e,t,i=ms,s,r,o,a=$n,c=$n,l,u=Fr,h=1){if(u!==Fr&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nf extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pn extends rn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new O,u=new ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Ao=new O,Co=new O,pl=new O,Ro=new xn;class Vg extends rn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos($o*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:_,b:v,c:p}=Ro;if(_.fromBufferAttribute(a,l[0]),v.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Ro.getNormal(pl),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const S=(b+1)%3,x=h[b],A=h[S],w=Ro[u[b]],P=Ro[u[S]],I=`${x}_${A}`,T=`${A}_${x}`;T in d&&d[T]?(pl.dot(d[T].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(P.x,P.y,P.z)),d[T]=null):I in d||(d[I]={index0:l[b],index1:l[S],normal:pl.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:v}=d[m];Ao.fromBufferAttribute(a,_),Co.fromBufferAttribute(a,v),f.push(Ao.x,Ao.y,Ao.z),f.push(Co.x,Co.y,Co.z)}this.setAttribute("position",new qt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ge:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,s=[],r=[],o=[],a=new O,c=new Lt;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fu extends ui{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ge){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wg extends fu{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pu(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const ko=new O,ml=new pu,gl=new pu,vl=new pu;class $g extends ui{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ko.subVectors(s[0],s[1]).add(s[0]),l=ko);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ko.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ko),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),v<1e-4&&(v=_),ml.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,_,v),gl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,_,v),vl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,_,v)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),gl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),vl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(ml.calc(c),gl.calc(c),vl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sd(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Xg(n,e){const t=1-n;return t*t*e}function Yg(n,e){return 2*(1-n)*n*e}function qg(n,e){return n*n*e}function Rr(n,e,t,i){return Xg(n,e)+Yg(n,t)+qg(n,i)}function Kg(n,e){const t=1-n;return t*t*t*e}function Zg(n,e){const t=1-n;return 3*t*t*n*e}function Jg(n,e){return 3*(1-n)*n*n*e}function jg(n,e){return n*n*n*e}function kr(n,e,t,i,s){return Kg(n,e)+Zg(n,t)+Jg(n,i)+jg(n,s)}class Uf extends ui{constructor(e=new ge,t=new ge,i=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ge){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qg extends ui{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Of extends ui{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ev extends ui{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ff extends ui{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tv extends ui{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y),Rr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bf extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Sd(a,c.x,l.x,u.x,h.x),Sd(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ge().fromArray(s))}return this}}var xd=Object.freeze({__proto__:null,ArcCurve:Wg,CatmullRomCurve3:$g,CubicBezierCurve:Uf,CubicBezierCurve3:Qg,EllipseCurve:fu,LineCurve:Of,LineCurve3:ev,QuadraticBezierCurve:Ff,QuadraticBezierCurve3:tv,SplineCurve:Bf});class nv extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xd[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new xd[s.type]().fromJSON(s))}return this}}class Md extends nv{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Of(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Ff(this.currentPoint.clone(),new ge(e,t),new ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Uf(this.currentPoint.clone(),new ge(e,t),new ge(i,s),new ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Bf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new fu(e,t,i,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mu extends Md{constructor(e){super(e),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Md().fromJSON(s))}return this}}function iv(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=zf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=lv(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){const f=n[d],m=n[d+1];f<a&&(a=f),m<c&&(c=m),f>u&&(u=f),m>h&&(h=m)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Hr(r,o,t,a,c,l,0),o}function zf(n,e,t,i,s){let r;if(s===yv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ed(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ed(o/i|0,n[o],n[o+1],r);return r&&ir(r,r.next)&&(Vr(r),r=r.next),r}function vs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ir(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Hr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&fv(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?rv(n,i,s,r):sv(n)){e.push(c.i,n.i,l.i),Vr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=ov(vs(n),e),Hr(n,e,t,i,s,r,2)):o===2&&av(n,e,t,i,s,r):Hr(vs(n),e,t,i,s,r,1);break}}}function sv(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(s,r,o),h=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Mr(s,a,r,c,o,l,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function rv(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(u,h,d),_=Math.max(a,c,l),v=Math.max(u,h,d),p=Cc(f,m,e,t,i),b=Cc(_,v,e,t,i);let S=n.prevZ,x=n.nextZ;for(;S&&S.z>=p&&x&&x.z<=b;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=v&&S!==s&&S!==o&&Mr(a,u,c,h,l,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=v&&x!==s&&x!==o&&Mr(a,u,c,h,l,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=v&&S!==s&&S!==o&&Mr(a,u,c,h,l,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=v&&x!==s&&x!==o&&Mr(a,u,c,h,l,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ov(n,e){let t=n;do{const i=t.prev,s=t.next.next;!ir(i,s)&&Gf(i,t,t.next,s)&&Gr(i,s)&&Gr(s,i)&&(e.push(i.i,t.i,s.i),Vr(t),Vr(t.next),t=n=s),t=t.next}while(t!==n);return vs(t)}function av(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gv(o,a)){let c=Vf(o,a);o=vs(o,o.next),c=vs(c,c.next),Hr(o,e,t,i,s,r,0),Hr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function lv(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=zf(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(mv(l))}s.sort(cv);for(let r=0;r<s.length;r++)t=uv(s[r],t);return t}function cv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function uv(n,e){const t=dv(n,e);if(!t)return e;const i=Vf(t,n);return vs(i,i.next),vs(t,t.next)}function dv(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(ir(n,t))return t;do{if(ir(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Hf(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);Gr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&hv(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function hv(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function fv(n,e,t,i){let s=n;do s.z===0&&(s.z=Cc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,pv(s)}function pv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Cc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function mv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hf(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Mr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Hf(n,e,t,i,s,r,o,a)}function gv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!vv(n,e)&&(Gr(n,e)&&Gr(e,n)&&_v(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||ir(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ir(n,e){return n.x===e.x&&n.y===e.y}function Gf(n,e,t,i){const s=Lo(Pt(n,e,t)),r=Lo(Pt(n,e,i)),o=Lo(Pt(t,i,n)),a=Lo(Pt(t,i,e));return!!(s!==r&&o!==a||s===0&&Po(n,t,e)||r===0&&Po(n,i,e)||o===0&&Po(t,n,i)||a===0&&Po(t,e,i))}function Po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lo(n){return n>0?1:n<0?-1:0}function vv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Gf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Gr(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function _v(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Vf(n,e){const t=Rc(n.i,n.x,n.y),i=Rc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ed(n,e,t,i){const s=Rc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Rc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class bv{static triangulate(e,t,i=2){return iv(e,t,i)}}class Pr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Pr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Td(e),wd(i,e);let o=e.length;t.forEach(Td);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,wd(i,t[c]);const a=bv.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Td(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function wd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ii extends rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],_=[],v=[];for(let p=0;p<u;p++){const b=p*d-o;for(let S=0;S<l;S++){const x=S*h-r;m.push(x,-b,0),_.push(0,0,1),v.push(S/a),v.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const S=b+l*p,x=b+l*(p+1),A=b+1+l*(p+1),w=b+1+l*p;f.push(S,x,w),f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class jn extends rn{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new O,m=new ge;for(let _=0;_<=s;_++){for(let v=0;v<=i;v++){const p=r+v/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<s;_++){const v=_*(i+1);for(let p=0;p<i;p++){const b=p+v,S=b,x=b+i+1,A=b+i+2,w=b+1;a.push(S,x,w),a.push(x,A,w)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ra extends rn{constructor(e=new mu([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(o,2));function l(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const m=d.holes;Pr.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,p=m.length;v<p;v++){const b=m[v];Pr.isClockWise(b)===!0&&(m[v]=b.reverse())}const _=Pr.triangulateShape(f,m);for(let v=0,p=m.length;v<p;v++){const b=m[v];f=f.concat(b)}for(let v=0,p=f.length;v<p;v++){const b=f[v];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let v=0,p=_.length;v<p;v++){const b=_[v],S=b[0]+h,x=b[1]+h,A=b[2]+h;i.push(S,x,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Sv(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new Ra(i,e.curveSegments)}}function Sv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class xv extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mv extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ev extends Zs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Wf extends Cf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tv extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ad=new Lt;class wv{constructor(e,t,i=0,s=1/0){this.ray=new du(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(e,t=!0,i=[]){return kc(e,this,i,t),i.sort(Cd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)kc(e[s],this,i,t);return i.sort(Cd),i}}function Cd(n,e){return n.distance-e.distance}function kc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)kc(r[o],e,t,!0)}}function Rd(n,e,t,i){const s=Av(i);switch(t){case vf:return n*e;case yf:return n*e/s.components*s.byteLength;case au:return n*e/s.components*s.byteLength;case bf:return n*e*2/s.components*s.byteLength;case lu:return n*e*2/s.components*s.byteLength;case _f:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case cu:return n*e*4/s.components*s.byteLength;case Ho:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:case tc:return Math.max(n,16)*Math.max(e,8)/4;case jl:case ec:return Math.max(n,8)*Math.max(e,8)/2;case nc:case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yc:case bc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xc:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ec:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Av(n){switch(n){case Li:case ff:return{byteLength:1,components:1};case Ur:case pf:case qr:return{byteLength:2,components:1};case ru:case ou:return{byteLength:2,components:4};case ms:case su:case Ti:return{byteLength:4,components:1};case mf:case gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);function $f(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Cv(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kv=`#ifdef USE_ALPHAHASH
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
#endif`,Pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nv=`#ifdef USE_AOMAP
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
#endif`,Uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ov=`#ifdef USE_BATCHING
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
#endif`,Fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gv=`#ifdef USE_IRIDESCENCE
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
#endif`,Vv=`#ifdef USE_BUMPMAP
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
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jv=`#define PI 3.141592653589793
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
} // validated`,Qv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e_=`vec3 transformedNormal = objectNormal;
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
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g_=`#ifdef USE_GRADIENTMAP
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
}`,v_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b_=`uniform bool receiveShadow;
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
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,A_=`struct PhysicalMaterial {
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
}`,C_=`
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
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
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F_=`#if defined( USE_POINTS_UV )
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
#endif`,B_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`#ifdef USE_MORPHTARGETS
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
#endif`,$_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
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
#endif`,j_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,$0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ry=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ay=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Rv,alphahash_pars_fragment:kv,alphamap_fragment:Pv,alphamap_pars_fragment:Lv,alphatest_fragment:Dv,alphatest_pars_fragment:Iv,aomap_fragment:Nv,aomap_pars_fragment:Uv,batching_pars_vertex:Ov,batching_vertex:Fv,begin_vertex:Bv,beginnormal_vertex:zv,bsdfs:Hv,iridescence_fragment:Gv,bumpmap_pars_fragment:Vv,clipping_planes_fragment:Wv,clipping_planes_pars_fragment:$v,clipping_planes_pars_vertex:Xv,clipping_planes_vertex:Yv,color_fragment:qv,color_pars_fragment:Kv,color_pars_vertex:Zv,color_vertex:Jv,common:jv,cube_uv_reflection_fragment:Qv,defaultnormal_vertex:e_,displacementmap_pars_vertex:t_,displacementmap_vertex:n_,emissivemap_fragment:i_,emissivemap_pars_fragment:s_,colorspace_fragment:r_,colorspace_pars_fragment:o_,envmap_fragment:a_,envmap_common_pars_fragment:l_,envmap_pars_fragment:c_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:S_,envmap_vertex:d_,fog_vertex:h_,fog_pars_vertex:f_,fog_fragment:p_,fog_pars_fragment:m_,gradientmap_pars_fragment:g_,lightmap_pars_fragment:v_,lights_lambert_fragment:__,lights_lambert_pars_fragment:y_,lights_pars_begin:b_,lights_toon_fragment:x_,lights_toon_pars_fragment:M_,lights_phong_fragment:E_,lights_phong_pars_fragment:T_,lights_physical_fragment:w_,lights_physical_pars_fragment:A_,lights_fragment_begin:C_,lights_fragment_maps:R_,lights_fragment_end:k_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:D_,logdepthbuf_vertex:I_,map_fragment:N_,map_pars_fragment:U_,map_particle_fragment:O_,map_particle_pars_fragment:F_,metalnessmap_fragment:B_,metalnessmap_pars_fragment:z_,morphinstance_vertex:H_,morphcolor_vertex:G_,morphnormal_vertex:V_,morphtarget_pars_vertex:W_,morphtarget_vertex:$_,normal_fragment_begin:X_,normal_fragment_maps:Y_,normal_pars_fragment:q_,normal_pars_vertex:K_,normal_vertex:Z_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:j_,clearcoat_normal_fragment_maps:Q_,clearcoat_pars_fragment:e0,iridescence_pars_fragment:t0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:u0,shadowmap_pars_vertex:d0,shadowmap_vertex:h0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:v0,specularmap_fragment:_0,specularmap_pars_fragment:y0,tonemapping_fragment:b0,tonemapping_pars_fragment:S0,transmission_fragment:x0,transmission_pars_fragment:M0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:w0,worldpos_vertex:A0,background_vert:C0,background_frag:R0,backgroundCube_vert:k0,backgroundCube_frag:P0,cube_vert:L0,cube_frag:D0,depth_vert:I0,depth_frag:N0,distanceRGBA_vert:U0,distanceRGBA_frag:O0,equirect_vert:F0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:H0,meshbasic_vert:G0,meshbasic_frag:V0,meshlambert_vert:W0,meshlambert_frag:$0,meshmatcap_vert:X0,meshmatcap_frag:Y0,meshnormal_vert:q0,meshnormal_frag:K0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:j0,meshphysical_frag:Q0,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:sy,shadow_frag:ry,sprite_vert:oy,sprite_frag:ay},he={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Qn={basic:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:un([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:un([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:un([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:un([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:un([he.points,he.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:un([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:un([he.common,he.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:un([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:un([he.sprite,he.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:un([he.common,he.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:un([he.lights,he.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Qn.physical={uniforms:un([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Do={r:0,b:0,g:0},ts=new Di,ly=new Lt;function cy(n,e,t,i,s,r,o){const a=new et(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const A=m(S);A===null?p(a,c):A&&A.isColor&&(p(A,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,x){const A=m(x);A&&(A.isCubeTexture||A.mapping===Aa)?(u===void 0&&(u=new tt(new Jr(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:nr(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(x.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ly.makeRotationFromEuler(ts)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==pt,(h!==A||d!==A.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new tt(new ii(2,2),new qi({name:"BackgroundMaterial",uniforms:nr(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=rt.getTransfer(A.colorSpace)!==pt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(Do,Af(n)),i.buffers.color.setClear(Do.r,Do.g,Do.b,x,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:v,dispose:b}}function uy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,D,F,k,B){let z=!1;const W=h(k,F,D);r!==W&&(r=W,l(r.object)),z=f(E,k,F,B),z&&m(E,k,F,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(E,D,F,k),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,D,F){const k=F.wireframe===!0;let B=i[E.id];B===void 0&&(B={},i[E.id]=B);let z=B[D.id];z===void 0&&(z={},B[D.id]=z);let W=z[k];return W===void 0&&(W=d(c()),z[k]=W),W}function d(E){const D=[],F=[],k=[];for(let B=0;B<t;B++)D[B]=0,F[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:E,attributes:{},index:null}}function f(E,D,F,k){const B=r.attributes,z=D.attributes;let W=0;const J=F.getAttributes();for(const X in J)if(J[X].location>=0){const fe=B[X];let ve=z[X];if(ve===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),fe===void 0||fe.attribute!==ve||ve&&fe.data!==ve.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function m(E,D,F,k){const B={},z=D.attributes;let W=0;const J=F.getAttributes();for(const X in J)if(J[X].location>=0){let fe=z[X];fe===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const ve={};ve.attribute=fe,fe&&fe.data&&(ve.data=fe.data),B[X]=ve,W++}r.attributes=B,r.attributesNum=W,r.index=k}function _(){const E=r.newAttributes;for(let D=0,F=E.length;D<F;D++)E[D]=0}function v(E){p(E,0)}function p(E,D){const F=r.newAttributes,k=r.enabledAttributes,B=r.attributeDivisors;F[E]=1,k[E]===0&&(n.enableVertexAttribArray(E),k[E]=1),B[E]!==D&&(n.vertexAttribDivisor(E,D),B[E]=D)}function b(){const E=r.newAttributes,D=r.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==E[F]&&(n.disableVertexAttribArray(F),D[F]=0)}function S(E,D,F,k,B,z,W){W===!0?n.vertexAttribIPointer(E,D,F,B,z):n.vertexAttribPointer(E,D,F,k,B,z)}function x(E,D,F,k){_();const B=k.attributes,z=F.getAttributes(),W=D.defaultAttributeValues;for(const J in z){const X=z[J];if(X.location>=0){let le=B[J];if(le===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),le!==void 0){const fe=le.normalized,ve=le.itemSize,Be=e.get(le);if(Be===void 0)continue;const Pe=Be.buffer,at=Be.type,it=Be.bytesPerElement,Q=at===n.INT||at===n.UNSIGNED_INT||le.gpuType===su;if(le.isInterleavedBufferAttribute){const ie=le.data,_e=ie.stride,Ue=le.offset;if(ie.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,ie.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Re=0;Re<X.locationSize;Re++)v(X.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Re=0;Re<X.locationSize;Re++)S(X.location+Re,ve/X.locationSize,at,fe,_e*it,(Ue+ve/X.locationSize*Re)*it,Q)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)p(X.location+ie,le.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<X.locationSize;ie++)v(X.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let ie=0;ie<X.locationSize;ie++)S(X.location+ie,ve/X.locationSize,at,fe,ve*it,ve/X.locationSize*ie*it,Q)}}else if(W!==void 0){const fe=W[J];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(X.location,fe);break;case 3:n.vertexAttrib3fv(X.location,fe);break;case 4:n.vertexAttrib4fv(X.location,fe);break;default:n.vertexAttrib1fv(X.location,fe)}}}}b()}function A(){I();for(const E in i){const D=i[E];for(const F in D){const k=D[F];for(const B in k)u(k[B].object),delete k[B];delete D[F]}delete i[E]}}function w(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const F in D){const k=D[F];for(const B in k)u(k[B].object),delete k[B];delete D[F]}delete i[E.id]}function P(E){for(const D in i){const F=i[D];if(F[E.id]===void 0)continue;const k=F[E.id];for(const B in k)u(k[B].object),delete k[B];delete F[E.id]}}function I(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:v,disableUnusedAttributes:b}}function dy(n,e,t){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function hy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Wn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Li&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ti&&!I)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function fy(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new is,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!v)r?u(null):l();else{const b=r?0:i,S=b*4;let x=p.clippingState||null;c.value=x,x=u(m,d,S,f);for(let A=0;A!==S;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let v=null;if(_!==0){if(v=c.value,m!==!0||v===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(v===null||v.length<p)&&(v=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(v,x),v[x+3]=o.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}function py(n){let e=new WeakMap;function t(o,a){return a===ql?o.mapping=Qs:a===Kl&&(o.mapping=er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ql||a===Kl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ig(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Vs=4,kd=[.125,.215,.35,.446,.526,.582],as=20,_l=new Wf,Pd=new et;let yl=null,bl=0,Sl=0,xl=!1;const ss=(1+Math.sqrt(5))/2,zs=1/ss,Ld=[new O(-ss,zs,0),new O(ss,zs,0),new O(-zs,0,ss),new O(zs,0,ss),new O(0,ss,-zs),new O(0,ss,zs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],my=new O;class Dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=my}=r;yl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl,bl,Sl),this._renderer.xr.enabled=xl,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:qr,format:Wn,colorSpace:tr,depthBuffer:!1},s=Id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gy(r)),this._blurMaterial=vy(r,e,t)}return s}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,i,s,r){const c=new Fn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Pd),h.toneMapping=Xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new St({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),v=new tt(new Jr,_);let p=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(Pd),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));const A=this._cubeSize;Io(s,x*A,S>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(v,c),h.render(e,c)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Qs||e.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Io(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,_l)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ld[(s-r-1)%Ld.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new tt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*as-1),_=r/m,v=isFinite(r)?1+Math.floor(u*_):as;v>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${as}`);const p=[];let b=0;for(let P=0;P<as;++P){const I=P/_,T=Math.exp(-I*I/2);p.push(T),P===0?b+=T:P<v&&(b+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-i;const x=this._sizeLods[s],A=3*x*(s>S-Vs?s-S+Vs:0),w=4*(this._cubeSize-x);Io(t,A,w,3*x,2*x),c.setRenderTarget(t),c.render(h,_l)}}function gy(n){const e=[],t=[],i=[];let s=n;const r=n-Vs+1+kd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Vs?c=kd[o-n+Vs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,v=2,p=1,b=new Float32Array(_*m*f),S=new Float32Array(v*m*f),x=new Float32Array(p*m*f);for(let w=0;w<f;w++){const P=w%3*2/3-1,I=w>2?0:-1,T=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(T,_*m*w),S.set(d,v*m*w);const E=[w,w,w,w,w,w];x.set(E,p*m*w)}const A=new rn;A.setAttribute("position",new Xn(b,_)),A.setAttribute("uv",new Xn(S,v)),A.setAttribute("faceIndex",new Xn(x,p)),e.push(A),s>Vs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Id(n,e,t){const i=new gs(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function vy(n,e,t){const i=new Float32Array(as),s=new O(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Nd(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ud(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function _y(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ql||c===Kl,u=c===Qs||c===er;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Dd(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Dd(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function by(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let S=0,x=b.length;S<x;S+=3){const A=b[S+0],w=b[S+1],P=b[S+2];d.push(A,w,w,P,P,A)}}else if(m!==void 0){const b=m.array;_=m.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const A=S+0,w=S+1,P=S+2;d.push(A,w,w,P,P,A)}}else return;const v=new(xf(d)?wf:Tf)(d,1);v.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,v)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Sy(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*o,m),t.update(f,i,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let v=0;for(let p=0;p<m;p++)v+=f[p];t.update(v,i,1)}function h(d,f,m,_){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{v.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*_[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function My(n,e,t){const i=new WeakMap,s=new zt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let A=a.attributes.position.count*x,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*w*4*h),I=new Mf(P,A,w,h);I.type=Ti,I.needsUpdate=!0;const T=x*4;for(let D=0;D<h;D++){const F=p[D],k=b[D],B=S[D],z=A*w*4*D;for(let W=0;W<F.count;W++){const J=W*T;m===!0&&(s.fromBufferAttribute(F,W),P[z+J+0]=s.x,P[z+J+1]=s.y,P[z+J+2]=s.z,P[z+J+3]=0),_===!0&&(s.fromBufferAttribute(k,W),P[z+J+4]=s.x,P[z+J+5]=s.y,P[z+J+6]=s.z,P[z+J+7]=0),v===!0&&(s.fromBufferAttribute(B,W),P[z+J+8]=s.x,P[z+J+9]=s.y,P[z+J+10]=s.z,P[z+J+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new ge(A,w)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Ey(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Xf=new hn,Od=new If(1,1),Yf=new Mf,qf=new vg,Kf=new Rf,Fd=[],Bd=[],zd=new Float32Array(16),Hd=new Float32Array(9),Gd=new Float32Array(4);function ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ka(n,e){let t=Bd[e];t===void 0&&(t=new Int32Array(e),Bd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ty(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function Ry(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Gd.set(i),n.uniformMatrix2fv(this.addr,!1,Gd),Zt(t,i)}}function ky(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;Hd.set(i),n.uniformMatrix3fv(this.addr,!1,Hd),Zt(t,i)}}function Py(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,i))return;zd.set(i),n.uniformMatrix4fv(this.addr,!1,zd),Zt(t,i)}}function Ly(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function Uy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function zy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Od.compareFunction=Sf,r=Od):r=Xf,t.setTexture2D(e||r,s)}function Hy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||qf,s)}function Gy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Kf,s)}function Vy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Yf,s)}function Wy(n){switch(n){case 5126:return Ty;case 35664:return wy;case 35665:return Ay;case 35666:return Cy;case 35674:return Ry;case 35675:return ky;case 35676:return Py;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Iy;case 35669:case 35673:return Ny;case 5125:return Uy;case 36294:return Oy;case 36295:return Fy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Vy}}function $y(n,e){n.uniform1fv(this.addr,e)}function Xy(n,e){const t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function Yy(n,e){const t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function qy(n,e){const t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function Ky(n,e){const t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zy(n,e){const t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jy(n,e){const t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jy(n,e){n.uniform1iv(this.addr,e)}function Qy(n,e){n.uniform2iv(this.addr,e)}function eb(n,e){n.uniform3iv(this.addr,e)}function tb(n,e){n.uniform4iv(this.addr,e)}function nb(n,e){n.uniform1uiv(this.addr,e)}function ib(n,e){n.uniform2uiv(this.addr,e)}function sb(n,e){n.uniform3uiv(this.addr,e)}function rb(n,e){n.uniform4uiv(this.addr,e)}function ob(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Xf,r[o])}function ab(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||qf,r[o])}function lb(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kf,r[o])}function cb(n,e,t){const i=this.cache,s=e.length,r=ka(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Yf,r[o])}function ub(n){switch(n){case 5126:return $y;case 35664:return Xy;case 35665:return Yy;case 35666:return qy;case 35674:return Ky;case 35675:return Zy;case 35676:return Jy;case 5124:case 35670:return jy;case 35667:case 35671:return Qy;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}class db{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Wy(t.type)}}class hb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ub(t.type)}}class fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function Vd(n,e){n.seq.push(e),n.map[e.id]=e}function pb(n,e,t){const i=n.name,s=i.length;for(Ml.lastIndex=0;;){const r=Ml.exec(i),o=Ml.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Vd(t,l===void 0?new db(a,n,e):new hb(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new fb(a),Vd(t,h)),t=h}}}class Xo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);pb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Wd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const mb=37297;let gb=0;function vb(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $d=new Xe;function _b(n){rt._getMatrix($d,rt.workingColorSpace,n);const e=`mat3( ${$d.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case na:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+vb(n.getShaderSource(e),a)}else return r}function yb(n,e){const t=_b(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bb(n,e){let t;switch(e){case Wm:t="Linear";break;case $m:t="Reinhard";break;case Xm:t="Cineon";break;case Ym:t="ACESFilmic";break;case Km:t="AgX";break;case Zm:t="Neutral";break;case qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const No=new O;function Sb(){rt.getLuminanceCoefficients(No);const n=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function Mb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Eb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Er(n){return n!==""}function Yd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pc(n){return n.replace(Tb,Ab)}const wb=new Map;function Ab(n,e){let t=Ye[e];if(t===void 0){const i=wb.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}const Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace(Cb,Rb)}function Rb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function kb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Pb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case er:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===er&&(e="ENVMAP_MODE_REFRACTION"),e}function Db(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case df:e="ENVMAP_BLENDING_MULTIPLY";break;case Gm:e="ENVMAP_BLENDING_MIX";break;case Vm:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Nb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=kb(t),l=Pb(t),u=Lb(t),h=Db(t),d=Ib(t),f=xb(t),m=Mb(r),_=s.createProgram();let v,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Er).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(v=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[Zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Xi?bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,yb("linearToOutputTexel",t.outputColorSpace),Sb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=Pc(o),o=Yd(o,t),o=qd(o,t),a=Pc(a),a=Yd(a,t),a=qd(a,t),o=Kd(o),a=Kd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+v+o,x=b+p+a,A=Wd(s,s.VERTEX_SHADER,S),w=Wd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(A)||"",B=s.getShaderInfoLog(w)||"",z=F.trim(),W=k.trim(),J=B.trim();let X=!0,le=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,w);else{const fe=Xd(s,A,"vertex"),ve=Xd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+fe+`
`+ve)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(W===""||J==="")&&(le=!1);le&&(D.diagnostics={runnable:X,programLog:z,vertexShader:{log:W,prefix:v},fragmentShader:{log:J,prefix:p}})}s.deleteShader(A),s.deleteShader(w),I=new Xo(s,_),T=Eb(s,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,mb)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Ub=0;class Ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Fb(e),t.set(e,i)),i}}class Fb{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}}function Bb(n,e,t,i,s,r,o){const a=new hu,c=new Ob,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function v(T,E,D,F,k){const B=F.fog,z=k.geometry,W=T.isMeshStandardMaterial?F.environment:null,J=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),X=J&&J.mapping===Aa?J.image.height:null,le=m[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ve=fe!==void 0?fe.length:0;let Be=0;z.morphAttributes.position!==void 0&&(Be=1),z.morphAttributes.normal!==void 0&&(Be=2),z.morphAttributes.color!==void 0&&(Be=3);let Pe,at,it,Q;if(le){const ct=Qn[le];Pe=ct.vertexShader,at=ct.fragmentShader}else Pe=T.vertexShader,at=T.fragmentShader,c.update(T),it=c.getVertexShaderID(T),Q=c.getFragmentShaderID(T);const ie=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,Je=!!T.map,Jt=!!T.matcap,L=!!J,gt=!!T.aoMap,Oe=!!T.lightMap,De=!!T.bumpMap,Me=!!T.normalMap,lt=!!T.displacementMap,Ee=!!T.emissiveMap,He=!!T.metalnessMap,Ht=!!T.roughnessMap,wt=T.anisotropy>0,C=T.clearcoat>0,y=T.dispersion>0,V=T.iridescence>0,K=T.sheen>0,ne=T.transmission>0,j=wt&&!!T.anisotropyMap,Te=C&&!!T.clearcoatMap,R=C&&!!T.clearcoatNormalMap,$=C&&!!T.clearcoatRoughnessMap,te=V&&!!T.iridescenceMap,Z=V&&!!T.iridescenceThicknessMap,se=K&&!!T.sheenColorMap,Se=K&&!!T.sheenRoughnessMap,de=!!T.specularMap,ce=!!T.specularColorMap,Ne=!!T.specularIntensityMap,U=ne&&!!T.transmissionMap,ae=ne&&!!T.thicknessMap,ue=!!T.gradientMap,xe=!!T.alphaMap,re=T.alphaTest>0,ee=!!T.alphaHash,Ae=!!T.extensions;let ze=Xi;T.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ze=n.toneMapping);const _t={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Pe,fragmentShader:at,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:tr,alphaToCoverage:!!T.alphaToCoverage,map:Je,matcap:Jt,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:X,aoMap:gt,lightMap:Oe,bumpMap:De,normalMap:Me,displacementMap:d&&lt,emissiveMap:Ee,normalMapObjectSpace:Me&&T.normalMapType===tg,normalMapTangentSpace:Me&&T.normalMapType===eg,metalnessMap:He,roughnessMap:Ht,anisotropy:wt,anisotropyMap:j,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:R,clearcoatRoughnessMap:$,dispersion:y,iridescence:V,iridescenceMap:te,iridescenceThicknessMap:Z,sheen:K,sheenColorMap:se,sheenRoughnessMap:Se,specularMap:de,specularColorMap:ce,specularIntensityMap:Ne,transmission:ne,transmissionMap:U,thicknessMap:ae,gradientMap:ue,opaque:T.transparent===!1&&T.blending===qs&&T.alphaToCoverage===!1,alphaMap:xe,alphaTest:re,alphaHash:ee,combine:T.combine,mapUv:Je&&_(T.map.channel),aoMapUv:gt&&_(T.aoMap.channel),lightMapUv:Oe&&_(T.lightMap.channel),bumpMapUv:De&&_(T.bumpMap.channel),normalMapUv:Me&&_(T.normalMap.channel),displacementMapUv:lt&&_(T.displacementMap.channel),emissiveMapUv:Ee&&_(T.emissiveMap.channel),metalnessMapUv:He&&_(T.metalnessMap.channel),roughnessMapUv:Ht&&_(T.roughnessMap.channel),anisotropyMapUv:j&&_(T.anisotropyMap.channel),clearcoatMapUv:Te&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:R&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(T.sheenRoughnessMap.channel),specularMapUv:de&&_(T.specularMap.channel),specularColorMapUv:ce&&_(T.specularColorMap.channel),specularIntensityMapUv:Ne&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:ae&&_(T.thicknessMap.channel),alphaMapUv:xe&&_(T.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Me||wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!z.attributes.uv&&(Je||xe),fog:!!B,useFog:T.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:k.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&rt.getTransfer(T.map.colorSpace)===pt,decodeVideoTextureEmissive:Ee&&T.emissiveMap.isVideoTexture===!0&&rt.getTransfer(T.emissiveMap.colorSpace)===pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xi,flipSided:T.side===gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ae&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&T.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return _t.vertexUv1s=l.has(1),_t.vertexUv2s=l.has(2),_t.vertexUv3s=l.has(3),l.clear(),_t}function p(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(b(E,T),S(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function b(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function S(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const E=m[T.type];let D;if(E){const F=Qn[E];D=kg.clone(F.uniforms)}else D=T.uniforms;return D}function A(T,E){let D;for(let F=0,k=u.length;F<k;F++){const B=u[F];if(B.cacheKey===E){D=B,++D.usedTimes;break}}return D===void 0&&(D=new Nb(n,E,T,r),u.push(D)),D}function w(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function P(T){c.remove(T)}function I(){c.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:u,dispose:I}}function zb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Hb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,m,_,v){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:v},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=v),e++,p}function a(h,d,f,m,_,v){const p=o(h,d,f,m,_,v);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,m,_,v){const p=o(h,d,f,m,_,v);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Hb),i.length>1&&i.sort(d||Jd),s.length>1&&s.sort(d||Jd)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Gb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new jd,n.set(i,[o])):s>=r.length?(o=new jd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new et};break;case"SpotLight":t={position:new O,direction:new O,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Wb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $b=0;function Xb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Yb(n){const e=new Vb,t=Wb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const s=new O,r=new Lt,o=new Lt;function a(l){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,m=0,_=0,v=0,p=0,b=0,S=0,x=0,A=0,w=0,P=0;l.sort(Xb);for(let T=0,E=l.length;T<E;T++){const D=l[T],F=D.color,k=D.intensity,B=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*k,h+=F.g*k,d+=F.b*k;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],k);P++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,X=t.get(D);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=D.shadow.matrix,b++}i.directional[f]=W,f++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(k),W.distance=B,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[_]=W;const J=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,J.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=J.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=z,x++}_++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[v]=W,v++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const J=D.shadow,X=t.get(D);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=W,m++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(k),W.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[p]=W,p++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==A||I.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=A,I.numLightProbes=P,i.version=$b++)}function c(l,u){let h=0,d=0,f=0,m=0,_=0;const v=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const S=l[p];if(S.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),h++}else if(S.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(v),f++}else if(S.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(v),o.identity(),r.copy(S.matrixWorld),r.premultiply(v),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(v),d++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:a,setupView:c,state:i}}function Qd(n){const e=new Yb(n),t=[],i=[];function s(u){l.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qb(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Qd(n),e.set(s,[a])):r>=o.length?(a=new Qd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
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
}`;function Jb(n,e,t){let i=new Lf;const s=new ge,r=new ge,o=new zt,a=new xv({depthPacking:Qm}),c=new Mv,l={},u=t.maxTextureSize,h={[Yi]:gn,[gn]:Yi,[xi]:xi},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Kb,fragmentShader:Zb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new rn;m.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new tt(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uf;let p=this.type;this.render=function(w,P,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending($i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==yi&&this.type===yi,B=p===yi&&this.type!==yi;for(let z=0,W=w.length;z<W;z++){const J=w[z],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const le=X.getFrameExtents();if(s.multiply(le),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,X.mapSize.y=r.y)),X.map===null||k===!0||B===!0){const ve=this.type!==yi?{minFilter:$n,magFilter:$n}:{};X.map!==null&&X.map.dispose(),X.map=new gs(s.x,s.y,ve),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const fe=X.getViewportCount();for(let ve=0;ve<fe;ve++){const Be=X.getViewport(ve);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),F.viewport(o),X.updateMatrices(J,ve),i=X.getFrustum(),x(P,I,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===yi&&b(X,I),X.needsUpdate=!1}p=this.type,v.needsUpdate=!1,n.setRenderTarget(T,E,D)};function b(w,P){const I=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gs(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,I,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,I,f,_,null)}function S(w,P,I,T){let E=null;const D=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)E=D;else if(E=I.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=E.uuid,k=P.uuid;let B=l[F];B===void 0&&(B={},l[F]=B);let z=B[k];z===void 0&&(z=E.clone(),B[k]=z,P.addEventListener("dispose",A)),E=z}if(E.visible=P.visible,E.wireframe=P.wireframe,T===yi?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:h[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=n.properties.get(E);F.light=I}return E}function x(w,P,I,T,E){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const k=e.update(w),B=w.material;if(Array.isArray(B)){const z=k.groups;for(let W=0,J=z.length;W<J;W++){const X=z[W],le=B[X.materialIndex];if(le&&le.visible){const fe=S(w,le,T,E);w.onBeforeShadow(n,w,P,I,k,fe,X),n.renderBufferDirect(I,null,k,fe,w,X),w.onAfterShadow(n,w,P,I,k,fe,X)}}}else if(B.visible){const z=S(w,B,T,E);w.onBeforeShadow(n,w,P,I,k,z,null),n.renderBufferDirect(I,null,k,z,w,null),w.onAfterShadow(n,w,P,I,k,z,null)}}const F=w.children;for(let k=0,B=F.length;k<B;k++)x(F[k],P,I,T,E)}function A(w){w.target.removeEventListener("dispose",A);for(const I in l){const T=l[I],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const jb={[Hl]:Gl,[Vl]:Xl,[Wl]:Yl,[js]:$l,[Gl]:Hl,[Xl]:Vl,[Yl]:Wl,[$l]:js};function Qb(n,e){function t(){let U=!1;const ae=new zt;let ue=null;const xe=new zt(0,0,0,0);return{setMask:function(re){ue!==re&&!U&&(n.colorMask(re,re,re,re),ue=re)},setLocked:function(re){U=re},setClear:function(re,ee,Ae,ze,_t){_t===!0&&(re*=ze,ee*=ze,Ae*=ze),ae.set(re,ee,Ae,ze),xe.equals(ae)===!1&&(n.clearColor(re,ee,Ae,ze),xe.copy(ae))},reset:function(){U=!1,ue=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,ae=!1,ue=null,xe=null,re=null;return{setReversed:function(ee){if(ae!==ee){const Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;const ze=re;re=null,this.setClear(ze)}},getReversed:function(){return ae},setTest:function(ee){ee?ie(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ee){ue!==ee&&!U&&(n.depthMask(ee),ue=ee)},setFunc:function(ee){if(ae&&(ee=jb[ee]),xe!==ee){switch(ee){case Hl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Vl:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case Wl:n.depthFunc(n.EQUAL);break;case $l:n.depthFunc(n.GEQUAL);break;case Xl:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ee}},setLocked:function(ee){U=ee},setClear:function(ee){re!==ee&&(ae&&(ee=1-ee),n.clearDepth(ee),re=ee)},reset:function(){U=!1,ue=null,xe=null,re=null,ae=!1}}}function s(){let U=!1,ae=null,ue=null,xe=null,re=null,ee=null,Ae=null,ze=null,_t=null;return{setTest:function(ct){U||(ct?ie(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(ct){ae!==ct&&!U&&(n.stencilMask(ct),ae=ct)},setFunc:function(ct,di,qn){(ue!==ct||xe!==di||re!==qn)&&(n.stencilFunc(ct,di,qn),ue=ct,xe=di,re=qn)},setOp:function(ct,di,qn){(ee!==ct||Ae!==di||ze!==qn)&&(n.stencilOp(ct,di,qn),ee=ct,Ae=di,ze=qn)},setLocked:function(ct){U=ct},setClear:function(ct){_t!==ct&&(n.clearStencil(ct),_t=ct)},reset:function(){U=!1,ae=null,ue=null,xe=null,re=null,ee=null,Ae=null,ze=null,_t=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,v=null,p=null,b=null,S=null,x=null,A=null,w=null,P=new et(0,0,0),I=0,T=!1,E=null,D=null,F=null,k=null,B=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=J>=2);let le=null,fe={};const ve=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Pe=new zt().fromArray(ve),at=new zt().fromArray(Be);function it(U,ae,ue,xe){const re=new Uint8Array(4),ee=n.createTexture();n.bindTexture(U,ee),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<ue;Ae++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ae+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return ee}const Q={};Q[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(js),De(!1),Me(Xu),ie(n.CULL_FACE),gt($i);function ie(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Ue(U,ae){return h[U]!==ae?(n.bindFramebuffer(U,ae),h[U]=ae,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(U,ae){let ue=f,xe=!1;if(U){ue=d.get(ae),ue===void 0&&(ue=[],d.set(ae,ue));const re=U.textures;if(ue.length!==re.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ae=re.length;ee<Ae;ee++)ue[ee]=n.COLOR_ATTACHMENT0+ee;ue.length=re.length,xe=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ue)}function Je(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const Jt={[os]:n.FUNC_ADD,[Tm]:n.FUNC_SUBTRACT,[wm]:n.FUNC_REVERSE_SUBTRACT};Jt[Am]=n.MIN,Jt[Cm]=n.MAX;const L={[Rm]:n.ZERO,[km]:n.ONE,[Pm]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[Om]:n.SRC_ALPHA_SATURATE,[Nm]:n.DST_COLOR,[Dm]:n.DST_ALPHA,[Lm]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[Um]:n.ONE_MINUS_DST_COLOR,[Im]:n.ONE_MINUS_DST_ALPHA,[Fm]:n.CONSTANT_COLOR,[Bm]:n.ONE_MINUS_CONSTANT_COLOR,[zm]:n.CONSTANT_ALPHA,[Hm]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(U,ae,ue,xe,re,ee,Ae,ze,_t,ct){if(U===$i){_===!0&&(_e(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),U!==Em){if(U!==v||ct!==T){if((p!==os||x!==os)&&(n.blendEquation(n.FUNC_ADD),p=os,x=os),ct)switch(U){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yu:n.blendFunc(n.ONE,n.ONE);break;case qu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ku:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ku:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,A=null,w=null,P.set(0,0,0),I=0,v=U,T=ct}return}re=re||ae,ee=ee||ue,Ae=Ae||xe,(ae!==p||re!==x)&&(n.blendEquationSeparate(Jt[ae],Jt[re]),p=ae,x=re),(ue!==b||xe!==S||ee!==A||Ae!==w)&&(n.blendFuncSeparate(L[ue],L[xe],L[ee],L[Ae]),b=ue,S=xe,A=ee,w=Ae),(ze.equals(P)===!1||_t!==I)&&(n.blendColor(ze.r,ze.g,ze.b,_t),P.copy(ze),I=_t),v=U,T=!1}function Oe(U,ae){U.side===xi?_e(n.CULL_FACE):ie(n.CULL_FACE);let ue=U.side===gn;ae&&(ue=!ue),De(ue),U.blending===qs&&U.transparent===!1?gt($i):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const xe=U.stencilWrite;a.setTest(xe),xe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function Me(U){U!==Sm?(ie(n.CULL_FACE),U!==D&&(U===Xu?n.cullFace(n.BACK):U===xm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),D=U}function lt(U){U!==F&&(W&&n.lineWidth(U),F=U)}function Ee(U,ae,ue){U?(ie(n.POLYGON_OFFSET_FILL),(k!==ae||B!==ue)&&(n.polygonOffset(ae,ue),k=ae,B=ue)):_e(n.POLYGON_OFFSET_FILL)}function He(U){U?ie(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Ht(U){U===void 0&&(U=n.TEXTURE0+z-1),le!==U&&(n.activeTexture(U),le=U)}function wt(U,ae,ue){ue===void 0&&(le===null?ue=n.TEXTURE0+z-1:ue=le);let xe=fe[ue];xe===void 0&&(xe={type:void 0,texture:void 0},fe[ue]=xe),(xe.type!==U||xe.texture!==ae)&&(le!==ue&&(n.activeTexture(ue),le=ue),n.bindTexture(U,ae||Q[U]),xe.type=U,xe.texture=ae)}function C(){const U=fe[le];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(U){Pe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Pe.copy(U))}function Se(U){at.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),at.copy(U))}function de(U,ae){let ue=l.get(ae);ue===void 0&&(ue=new WeakMap,l.set(ae,ue));let xe=ue.get(U);xe===void 0&&(xe=n.getUniformBlockIndex(ae,U.name),ue.set(U,xe))}function ce(U,ae){const xe=l.get(ae).get(U);c.get(ae)!==xe&&(n.uniformBlockBinding(ae,xe,U.__bindingPointIndex),c.set(ae,xe))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,fe={},h={},d=new WeakMap,f=[],m=null,_=!1,v=null,p=null,b=null,S=null,x=null,A=null,w=null,P=new et(0,0,0),I=0,T=!1,E=null,D=null,F=null,k=null,B=null,Pe.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:_e,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Je,setBlending:gt,setMaterial:Oe,setFlipSided:De,setCullFace:Me,setLineWidth:lt,setPolygonOffset:Ee,setScissorTest:He,activeTexture:Ht,bindTexture:wt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:te,texImage3D:Z,updateUBOMapping:de,uniformBlockBinding:ce,texStorage2D:R,texStorage3D:$,texSubImage2D:K,texSubImage3D:ne,compressedTexSubImage2D:j,compressedTexSubImage3D:Te,scissor:se,viewport:Se,reset:Ne}}function eS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,y){return f?new OffscreenCanvas(C,y):sa("canvas")}function _(C,y,V){let K=1;const ne=wt(C);if((ne.width>V||ne.height>V)&&(K=V/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*ne.width),Te=Math.floor(K*ne.height);h===void 0&&(h=m(j,Te));const R=y?m(j,Te):h;return R.width=j,R.height=Te,R.getContext("2d").drawImage(C,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Te+")."),R}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function v(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,y,V,K,ne=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=y;if(y===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),y===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){const Te=ne?na:rt.getTransfer(K);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=Te===pt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,y){let V;return C?y===null||y===ms||y===Or?V=n.DEPTH24_STENCIL8:y===Ti?V=n.DEPTH32F_STENCIL8:y===Ur&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ms||y===Or?V=n.DEPTH_COMPONENT24:y===Ti?V=n.DEPTH_COMPONENT32F:y===Ur&&(V=n.DEPTH_COMPONENT16),V}function A(C,y){return v(C)===!0||C.isFramebufferTexture&&C.minFilter!==$n&&C.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){const y=C.target;y.removeEventListener("dispose",w),I(y),y.isVideoTexture&&u.delete(y)}function P(C){const y=C.target;y.removeEventListener("dispose",P),E(y)}function I(C){const y=i.get(C);if(y.__webglInit===void 0)return;const V=C.source,K=d.get(V);if(K){const ne=K[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(C),Object.keys(K).length===0&&d.delete(V)}i.remove(C)}function T(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const V=C.source,K=d.get(V);delete K[y.__cacheKey],o.memory.textures--}function E(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let ne=0;ne<y.__webglFramebuffer[K].length;ne++)n.deleteFramebuffer(y.__webglFramebuffer[K][ne]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=C.textures;for(let K=0,ne=V.length;K<ne;K++){const j=i.get(V[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(V[K])}i.remove(C)}let D=0;function F(){D=0}function k(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function B(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function z(C,y){const V=i.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,C,y);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function W(C,y){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Q(V,C,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function J(C,y){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Q(V,C,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function X(C,y){const V=i.get(C);if(C.version>0&&V.__version!==C.version){ie(V,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const le={[Zl]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[Jl]:n.MIRRORED_REPEAT},fe={[$n]:n.NEAREST,[Jm]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[Ga]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},ve={[ng]:n.NEVER,[lg]:n.ALWAYS,[ig]:n.LESS,[Sf]:n.LEQUAL,[sg]:n.EQUAL,[ag]:n.GEQUAL,[rg]:n.GREATER,[og]:n.NOTEQUAL};function Be(C,y){if(y.type===Ti&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===Ga||y.magFilter===io||y.magFilter===us||y.minFilter===Vn||y.minFilter===Ga||y.minFilter===io||y.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,le[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,le[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,le[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,fe[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$n||y.minFilter!==io&&y.minFilter!==us||y.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Pe(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));const K=y.source;let ne=d.get(K);ne===void 0&&(ne={},d.set(K,ne));const j=B(y);if(j!==C.__cacheKey){ne[j]===void 0&&(ne[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[j].usedTimes++;const Te=ne[C.__cacheKey];Te!==void 0&&(ne[C.__cacheKey].usedTimes--,Te.usedTimes===0&&T(y)),C.__cacheKey=j,C.__webglTexture=ne[j].texture}return V}function at(C,y,V){return Math.floor(Math.floor(C/V)/y)}function it(C,y,V,K){const j=C.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,K,y.data);else{j.sort((Z,se)=>Z.start-se.start);let Te=0;for(let Z=1;Z<j.length;Z++){const se=j[Te],Se=j[Z],de=se.start+se.count,ce=at(Se.start,y.width,4),Ne=at(se.start,y.width,4);Se.start<=de+1&&ce===Ne&&at(Se.start+Se.count-1,y.width,4)===ce?se.count=Math.max(se.count,Se.start+Se.count-se.start):(++Te,j[Te]=Se)}j.length=Te+1;const R=n.getParameter(n.UNPACK_ROW_LENGTH),$=n.getParameter(n.UNPACK_SKIP_PIXELS),te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Z=0,se=j.length;Z<se;Z++){const Se=j[Z],de=Math.floor(Se.start/4),ce=Math.ceil(Se.count/4),Ne=de%y.width,U=Math.floor(de/y.width),ae=ce,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ne,U,ae,ue,V,K,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,R),n.pixelStorei(n.UNPACK_SKIP_PIXELS,$),n.pixelStorei(n.UNPACK_SKIP_ROWS,te)}}function Q(C,y,V){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const ne=Pe(C,y),j=y.source;t.bindTexture(K,C.__webglTexture,n.TEXTURE0+V);const Te=i.get(j);if(j.version!==Te.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const R=rt.getPrimaries(rt.workingColorSpace),$=y.colorSpace===Vi?null:rt.getPrimaries(y.colorSpace),te=y.colorSpace===Vi||R===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Z=_(y.image,!1,s.maxTextureSize);Z=Ht(y,Z);const se=r.convert(y.format,y.colorSpace),Se=r.convert(y.type);let de=S(y.internalFormat,se,Se,y.colorSpace,y.isVideoTexture);Be(K,y);let ce;const Ne=y.mipmaps,U=y.isVideoTexture!==!0,ae=Te.__version===void 0||ne===!0,ue=j.dataReady,xe=A(y,Z);if(y.isDepthTexture)de=x(y.format===Br,y.type),ae&&(U?t.texStorage2D(n.TEXTURE_2D,1,de,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,de,Z.width,Z.height,0,se,Se,null));else if(y.isDataTexture)if(Ne.length>0){U&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,de,Ne[0].width,Ne[0].height);for(let re=0,ee=Ne.length;re<ee;re++)ce=Ne[re],U?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce.width,ce.height,se,Se,ce.data):t.texImage2D(n.TEXTURE_2D,re,de,ce.width,ce.height,0,se,Se,ce.data);y.generateMipmaps=!1}else U?(ae&&t.texStorage2D(n.TEXTURE_2D,xe,de,Z.width,Z.height),ue&&it(y,Z,se,Se)):t.texImage2D(n.TEXTURE_2D,0,de,Z.width,Z.height,0,se,Se,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,de,Ne[0].width,Ne[0].height,Z.depth);for(let re=0,ee=Ne.length;re<ee;re++)if(ce=Ne[re],y.format!==Wn)if(se!==null)if(U){if(ue)if(y.layerUpdates.size>0){const Ae=Rd(ce.width,ce.height,y.format,y.type);for(const ze of y.layerUpdates){const _t=ce.data.subarray(ze*Ae/ce.data.BYTES_PER_ELEMENT,(ze+1)*Ae/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ze,ce.width,ce.height,1,se,_t)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,Z.depth,se,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,de,ce.width,ce.height,Z.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,Z.depth,se,Se,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,de,ce.width,ce.height,Z.depth,0,se,Se,ce.data)}else{U&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,de,Ne[0].width,Ne[0].height);for(let re=0,ee=Ne.length;re<ee;re++)ce=Ne[re],y.format!==Wn?se!==null?U?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ce.width,ce.height,se,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,re,de,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce.width,ce.height,se,Se,ce.data):t.texImage2D(n.TEXTURE_2D,re,de,ce.width,ce.height,0,se,Se,ce.data)}else if(y.isDataArrayTexture)if(U){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,de,Z.width,Z.height,Z.depth),ue)if(y.layerUpdates.size>0){const re=Rd(Z.width,Z.height,y.format,y.type);for(const ee of y.layerUpdates){const Ae=Z.data.subarray(ee*re/Z.data.BYTES_PER_ELEMENT,(ee+1)*re/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,Z.width,Z.height,1,se,Se,Ae)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,se,Se,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,Z.width,Z.height,Z.depth,0,se,Se,Z.data);else if(y.isData3DTexture)U?(ae&&t.texStorage3D(n.TEXTURE_3D,xe,de,Z.width,Z.height,Z.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,se,Se,Z.data)):t.texImage3D(n.TEXTURE_3D,0,de,Z.width,Z.height,Z.depth,0,se,Se,Z.data);else if(y.isFramebufferTexture){if(ae)if(U)t.texStorage2D(n.TEXTURE_2D,xe,de,Z.width,Z.height);else{let re=Z.width,ee=Z.height;for(let Ae=0;Ae<xe;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,de,re,ee,0,se,Se,null),re>>=1,ee>>=1}}else if(Ne.length>0){if(U&&ae){const re=wt(Ne[0]);t.texStorage2D(n.TEXTURE_2D,xe,de,re.width,re.height)}for(let re=0,ee=Ne.length;re<ee;re++)ce=Ne[re],U?ue&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,se,Se,ce):t.texImage2D(n.TEXTURE_2D,re,de,se,Se,ce);y.generateMipmaps=!1}else if(U){if(ae){const re=wt(Z);t.texStorage2D(n.TEXTURE_2D,xe,de,re.width,re.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,Se,Z)}else t.texImage2D(n.TEXTURE_2D,0,de,se,Se,Z);v(y)&&p(K),Te.__version=j.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ie(C,y,V){if(y.image.length!==6)return;const K=Pe(C,y),ne=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const j=i.get(ne);if(ne.version!==j.__version||K===!0){t.activeTexture(n.TEXTURE0+V);const Te=rt.getPrimaries(rt.workingColorSpace),R=y.colorSpace===Vi?null:rt.getPrimaries(y.colorSpace),$=y.colorSpace===Vi||Te===R?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const te=y.isCompressedTexture||y.image[0].isCompressedTexture,Z=y.image[0]&&y.image[0].isDataTexture,se=[];for(let ee=0;ee<6;ee++)!te&&!Z?se[ee]=_(y.image[ee],!0,s.maxCubemapSize):se[ee]=Z?y.image[ee].image:y.image[ee],se[ee]=Ht(y,se[ee]);const Se=se[0],de=r.convert(y.format,y.colorSpace),ce=r.convert(y.type),Ne=S(y.internalFormat,de,ce,y.colorSpace),U=y.isVideoTexture!==!0,ae=j.__version===void 0||K===!0,ue=ne.dataReady;let xe=A(y,Se);Be(n.TEXTURE_CUBE_MAP,y);let re;if(te){U&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ne,Se.width,Se.height);for(let ee=0;ee<6;ee++){re=se[ee].mipmaps;for(let Ae=0;Ae<re.length;Ae++){const ze=re[Ae];y.format!==Wn?de!==null?U?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,ze.width,ze.height,de,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Ne,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,ze.width,ze.height,de,ce,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Ne,ze.width,ze.height,0,de,ce,ze.data)}}}else{if(re=y.mipmaps,U&&ae){re.length>0&&xe++;const ee=wt(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ne,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Z){U?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,se[ee].width,se[ee].height,de,ce,se[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,se[ee].width,se[ee].height,0,de,ce,se[ee].data);for(let Ae=0;Ae<re.length;Ae++){const _t=re[Ae].image[ee].image;U?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,_t.width,_t.height,de,ce,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Ne,_t.width,_t.height,0,de,ce,_t.data)}}else{U?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de,ce,se[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,de,ce,se[ee]);for(let Ae=0;Ae<re.length;Ae++){const ze=re[Ae];U?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,de,ce,ze.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Ne,de,ce,ze.image[ee])}}}v(y)&&p(n.TEXTURE_CUBE_MAP),j.__version=ne.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function _e(C,y,V,K,ne,j){const Te=r.convert(V.format,V.colorSpace),R=r.convert(V.type),$=S(V.internalFormat,Te,R,V.colorSpace),te=i.get(y),Z=i.get(V);if(Z.__renderTarget=y,!te.__hasExternalTextures){const se=Math.max(1,y.width>>j),Se=Math.max(1,y.height>>j);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,$,se,Se,y.depth,0,Te,R,null):t.texImage2D(ne,j,$,se,Se,0,Te,R,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ne,Z.__webglTexture,0,lt(y)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ne,Z.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const K=y.depthTexture,ne=K&&K.isDepthTexture?K.type:null,j=x(y.stencilBuffer,ne),Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=lt(y);Ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,j,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,R,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{const K=y.textures;for(let ne=0;ne<K.length;ne++){const j=K[ne],Te=r.convert(j.format,j.colorSpace),R=r.convert(j.type),$=S(j.internalFormat,Te,R,j.colorSpace),te=lt(y);V&&Ee(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,$,y.width,y.height):Ee(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const ne=K.__webglTexture,j=lt(y);if(y.depthTexture.format===Fr)Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(y.depthTexture.format===Br)Ee(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Je(C){const y=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=K}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const K=C.texture.mipmaps;K&&K.length>0?Re(y.__webglFramebuffer[0],C):Re(y.__webglFramebuffer,C)}else if(V){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),Ue(y.__webglDepthbuffer[K],C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,j)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ue(y.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(C,y,V){const K=i.get(C);y!==void 0&&_e(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Je(C)}function L(C){const y=C.texture,V=i.get(C),K=i.get(y);C.addEventListener("dispose",P);const ne=C.textures,j=C.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let R=0;R<6;R++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[R]=[];for(let $=0;$<y.mipmaps.length;$++)V.__webglFramebuffer[R][$]=n.createFramebuffer()}else V.__webglFramebuffer[R]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let R=0;R<y.mipmaps.length;R++)V.__webglFramebuffer[R]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Te)for(let R=0,$=ne.length;R<$;R++){const te=i.get(ne[R]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let R=0;R<ne.length;R++){const $=ne[R];V.__webglColorRenderbuffer[R]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[R]);const te=r.convert($.format,$.colorSpace),Z=r.convert($.type),se=S($.internalFormat,te,Z,$.colorSpace,C.isXRRenderTarget===!0),Se=lt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,se,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+R,n.RENDERBUFFER,V.__webglColorRenderbuffer[R])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Be(n.TEXTURE_CUBE_MAP,y);for(let R=0;R<6;R++)if(y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)_e(V.__webglFramebuffer[R][$],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+R,$);else _e(V.__webglFramebuffer[R],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+R,0);v(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let R=0,$=ne.length;R<$;R++){const te=ne[R],Z=i.get(te);let se=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),Be(se,te),_e(V.__webglFramebuffer,C,te,n.COLOR_ATTACHMENT0+R,se,0),v(te)&&p(se)}t.unbindTexture()}else{let R=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(R=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(R,K.__webglTexture),Be(R,y),y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)_e(V.__webglFramebuffer[$],C,y,n.COLOR_ATTACHMENT0,R,$);else _e(V.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,R,0);v(y)&&p(R),t.unbindTexture()}C.depthBuffer&&Je(C)}function gt(C){const y=C.textures;for(let V=0,K=y.length;V<K;V++){const ne=y[V];if(v(ne)){const j=b(C),Te=i.get(ne).__webglTexture;t.bindTexture(j,Te),p(j),t.unbindTexture()}}}const Oe=[],De=[];function Me(C){if(C.samples>0){if(Ee(C)===!1){const y=C.textures,V=C.width,K=C.height;let ne=n.COLOR_BUFFER_BIT;const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),R=y.length>1;if(R)for(let te=0;te<y.length;te++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const $=C.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let te=0;te<y.length;te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),R){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[te]);const Z=i.get(y[te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,V,K,0,0,V,K,ne,n.NEAREST),c===!0&&(Oe.length=0,De.length=0,Oe.push(n.COLOR_ATTACHMENT0+te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Oe.push(j),De.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),R)for(let te=0;te<y.length;te++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,Te.__webglColorRenderbuffer[te]);const Z=i.get(y[te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function lt(C){return Math.min(s.maxSamples,C.samples)}function Ee(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function He(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Ht(C,y){const V=C.colorSpace,K=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==tr&&V!==Vi&&(rt.getTransfer(V)===pt?(K!==Wn||ne!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=Jt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ee}function tS(n,e){function t(i,s=Vi){let r;const o=rt.getTransfer(s);if(i===Li)return n.UNSIGNED_BYTE;if(i===ru)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ou)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ff)return n.BYTE;if(i===pf)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===su)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===Ti)return n.FLOAT;if(i===qr)return n.HALF_FLOAT;if(i===vf)return n.ALPHA;if(i===_f)return n.RGB;if(i===Wn)return n.RGBA;if(i===Fr)return n.DEPTH_COMPONENT;if(i===Br)return n.DEPTH_STENCIL;if(i===yf)return n.RED;if(i===au)return n.RED_INTEGER;if(i===bf)return n.RG;if(i===lu)return n.RG_INTEGER;if(i===cu)return n.RGBA_INTEGER;if(i===Ho||i===Go||i===Vo||i===Wo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Ql||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===ic||i===sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nc||i===ic)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===dc||i===hc||i===fc||i===pc||i===mc||i===gc||i===vc||i===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_c)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===bc||i===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===yc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===Mc||i===Ec||i===Tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const nS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iS=`
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

}`;class sS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qi({vertexShader:nS,fragmentShader:iS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rS extends lr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",v=new sS,p={},b=t.getContextAttributes();let S=null,x=null;const A=[],w=[],P=new ge;let I=null;const T=new Fn;T.viewport=new zt;const E=new Fn;E.viewport=new zt;const D=[T,E],F=new Tv;let k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=A[Q];return ie===void 0&&(ie=new ul,A[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=A[Q];return ie===void 0&&(ie=new ul,A[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=A[Q];return ie===void 0&&(ie=new ul,A[Q]=ie),ie.getHandSpace()};function z(Q){const ie=w.indexOf(Q.inputSource);if(ie===-1)return;const _e=A[ie];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,l||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",J);for(let Q=0;Q<A.length;Q++){const ie=w[Q];ie!==null&&(w[Q]=null,A[Q].disconnect(ie))}k=null,B=null,v.reset();for(const Q in p)delete p[Q];e.setRenderTarget(S),f=null,d=null,h=null,s=null,x=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,Re=null;b.depth&&(Re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Br:Fr,Ue=b.stencil?Or:ms);const Je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new gs(d.textureWidth,d.textureHeight,{format:Wn,type:Li,depthTexture:new If(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new gs(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(Q){for(let ie=0;ie<Q.removed.length;ie++){const _e=Q.removed[ie],Ue=w.indexOf(_e);Ue>=0&&(w[Ue]=null,A[Ue].disconnect(_e))}for(let ie=0;ie<Q.added.length;ie++){const _e=Q.added[ie];let Ue=w.indexOf(_e);if(Ue===-1){for(let Je=0;Je<A.length;Je++)if(Je>=w.length){w.push(_e),Ue=Je;break}else if(w[Je]===null){w[Je]=_e,Ue=Je;break}if(Ue===-1)break}const Re=A[Ue];Re&&Re.connect(_e)}}const X=new O,le=new O;function fe(Q,ie,_e){X.setFromMatrixPosition(ie.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);const Ue=X.distanceTo(le),Re=ie.projectionMatrix.elements,Je=_e.projectionMatrix.elements,Jt=Re[14]/(Re[10]-1),L=Re[14]/(Re[10]+1),gt=(Re[9]+1)/Re[5],Oe=(Re[9]-1)/Re[5],De=(Re[8]-1)/Re[0],Me=(Je[8]+1)/Je[0],lt=Jt*De,Ee=Jt*Me,He=Ue/(-De+Me),Ht=He*-De;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ht),Q.translateZ(He),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Re[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const wt=Jt+He,C=L+He,y=lt-Ht,V=Ee+(Ue-Ht),K=gt*L/C*wt,ne=Oe*L/C*wt;Q.projectionMatrix.makePerspective(y,V,K,ne,wt,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ve(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,_e=Q.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),F.near=E.near=T.near=ie,F.far=E.far=T.far=_e,(k!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,B=F.far),F.layers.mask=Q.layers.mask|6,T.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const Ue=Q.parent,Re=F.cameras;ve(F,Ue);for(let Je=0;Je<Re.length;Je++)ve(Re[Je],Ue);Re.length===2?fe(F,T,E):F.projectionMatrix.copy(T.projectionMatrix),Be(Q,F,Ue)};function Be(Q,ie,_e){_e===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ac*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let Pe=null;function at(Q,ie){if(u=ie.getViewerPose(l||o),m=ie,u!==null){const _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ue=!1;_e.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let L=0;L<_e.length;L++){const gt=_e[L];let Oe=null;if(f!==null)Oe=f.getViewport(gt);else{const Me=h.getViewSubImage(d,gt);Oe=Me.viewport,L===0&&(e.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(x))}let De=D[L];De===void 0&&(De=new Fn,De.layers.enable(L),De.viewport=new zt,D[L]=De),De.matrix.fromArray(gt.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(gt.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),L===0&&(F.matrix.copy(De.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(De)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const L=h.getDepthInformation(_e[0]);L&&L.isValid&&L.texture&&v.init(L,s.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let L=0;L<_e.length;L++){const gt=_e[L].camera;if(gt){let Oe=p[gt];Oe||(Oe=new Nf,p[gt]=Oe);const De=h.getCameraImage(gt);Oe.sourceTexture=De}}}}for(let _e=0;_e<A.length;_e++){const Ue=w[_e],Re=A[_e];Ue!==null&&Re!==void 0&&Re.update(Ue,ie,l||o)}Pe&&Pe(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const it=new $f;it.setAnimationLoop(at),this.setAnimationLoop=function(Q){Pe=Q},this.dispose=function(){}}}const ns=new Di,oS=new Lt;function aS(n,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function i(v,p){p.color.getRGB(v.fogColor.value,Af(n)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(v,p):p.isMeshToonMaterial?(r(v,p),h(v,p)):p.isMeshPhongMaterial?(r(v,p),u(v,p)):p.isMeshStandardMaterial?(r(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,x)):p.isMeshMatcapMaterial?(r(v,p),m(v,p)):p.isMeshDepthMaterial?r(v,p):p.isMeshDistanceMaterial?(r(v,p),_(v,p)):p.isMeshNormalMaterial?r(v,p):p.isLineBasicMaterial?(o(v,p),p.isLineDashedMaterial&&a(v,p)):p.isPointsMaterial?c(v,p,b,S):p.isSpriteMaterial?l(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===gn&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===gn&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,x=b.envMapRotation;S&&(v.envMap.value=S,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),v.envMapRotation.value.setFromMatrix4(oS.makeRotationFromEuler(ns)),v.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function o(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function a(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function c(v,p,b,S){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*b,v.scale.value=S*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function l(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function u(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function h(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,b){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=b.texture,v.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,p){p.matcap&&(v.matcap.value=p.matcap)}function _(v,p){const b=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(b.matrixWorld),v.nearDistance.value=b.shadow.camera.near,v.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const x=S.program;i.uniformBlockBinding(b,x)}function l(b,S){let x=s[b.id];x===void 0&&(m(b),x=u(b),s[b.id]=x,b.addEventListener("dispose",v));const A=S.program;i.updateUBOMapping(b,A);const w=e.render.frame;r[b.id]!==w&&(d(b),r[b.id]=w)}function u(b){const S=h();b.__bindingPointIndex=S;const x=n.createBuffer(),A=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=s[b.id],x=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,P=x.length;w<P;w++){const I=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,E=I.length;T<E;T++){const D=I[T];if(f(D,w,T,A)===!0){const F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let z=0;z<k.length;z++){const W=k[z],J=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+B,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,B),B+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,S,x,A){const w=b.value,P=S+"_"+x;if(A[P]===void 0)return typeof w=="number"||typeof w=="boolean"?A[P]=w:A[P]=w.clone(),!0;{const I=A[P];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[P]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function m(b){const S=b.uniforms;let x=0;const A=16;for(let P=0,I=S.length;P<I;P++){const T=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,D=T.length;E<D;E++){const F=T[E],k=Array.isArray(F.value)?F.value:[F.value];for(let B=0,z=k.length;B<z;B++){const W=k[B],J=_(W),X=x%A,le=X%J.boundary,fe=X+le;x+=le,fe!==0&&A-fe<J.storage&&(x+=A-fe),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=J.storage}}}const w=x%A;return w>0&&(x+=A-w),b.__size=x,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function v(b){const S=b.target;S.removeEventListener("dispose",v);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class cS{constructor(e={}){const{canvas:t=ug(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=mn;let w=0,P=0,I=null,T=-1,E=null;const D=new zt,F=new zt;let k=null;const B=new et(0);let z=0,W=t.width,J=t.height,X=1,le=null,fe=null;const ve=new zt(0,0,W,J),Be=new zt(0,0,W,J);let Pe=!1;const at=new Lf;let it=!1,Q=!1;const ie=new Lt,_e=new O,Ue=new zt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Jt(){return I===null?X:1}let L=i;function gt(M,H){return t.getContext(M,H)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${iu}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",re,!1),L===null){const H="webgl2";if(L=gt(H,M),L===null)throw gt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Oe,De,Me,lt,Ee,He,Ht,wt,C,y,V,K,ne,j,Te,R,$,te,Z,se,Se,de,ce,Ne;function U(){Oe=new yy(L),Oe.init(),de=new tS(L,Oe),De=new hy(L,Oe,e,de),Me=new Qb(L,Oe),De.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),lt=new xy(L),Ee=new zb,He=new eS(L,Oe,Me,Ee,De,de,lt),Ht=new py(x),wt=new _y(x),C=new Cv(L),ce=new uy(L,C),y=new by(L,C,lt,ce),V=new Ey(L,y,C,lt),Z=new My(L,De,He),R=new fy(Ee),K=new Bb(x,Ht,wt,Oe,De,ce,R),ne=new aS(x,Ee),j=new Gb,Te=new qb(Oe),te=new cy(x,Ht,wt,Me,V,f,c),$=new Jb(x,V,De),Ne=new lS(L,lt,De,Me),se=new dy(L,Oe,lt),Se=new Sy(L,Oe,lt),lt.programs=K.programs,x.capabilities=De,x.extensions=Oe,x.properties=Ee,x.renderLists=j,x.shadowMap=$,x.state=Me,x.info=lt}U();const ae=new rS(x,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(W,J,!1))},this.getSize=function(M){return M.set(W,J)},this.setSize=function(M,H,Y=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,J=H,t.width=Math.floor(M*X),t.height=Math.floor(H*X),Y===!0&&(t.style.width=M+"px",t.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(W*X,J*X).floor()},this.setDrawingBufferSize=function(M,H,Y){W=M,J=H,X=Y,t.width=Math.floor(M*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,H,Y,q){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,H,Y,q),Me.viewport(D.copy(ve).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,H,Y,q){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,H,Y,q),Me.scissor(F.copy(Be).multiplyScalar(X).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(M){Me.setScissorTest(Pe=M)},this.setOpaqueSort=function(M){le=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,Y=!0){let q=0;if(M){let G=!1;if(I!==null){const oe=I.texture.format;G=oe===cu||oe===lu||oe===au}if(G){const oe=I.texture.type,pe=oe===Li||oe===ms||oe===Ur||oe===Or||oe===ru||oe===ou,we=te.getClearColor(),be=te.getClearAlpha(),Ie=we.r,Fe=we.g,ke=we.b;pe?(m[0]=Ie,m[1]=Fe,m[2]=ke,m[3]=be,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ie,_[1]=Fe,_[2]=ke,_[3]=be,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}H&&(q|=L.DEPTH_BUFFER_BIT),Y&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",re,!1),te.dispose(),j.dispose(),Te.dispose(),Ee.dispose(),Ht.dispose(),wt.dispose(),V.dispose(),ce.dispose(),Ne.dispose(),K.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",qn),ae.removeEventListener("sessionend",Cu),Ki.stop()};function ue(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=lt.autoReset,H=$.enabled,Y=$.autoUpdate,q=$.needsUpdate,G=$.type;U(),lt.autoReset=M,$.enabled=H,$.autoUpdate=Y,$.needsUpdate=q,$.type=G}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ee(M){const H=M.target;H.removeEventListener("dispose",ee),Ae(H)}function Ae(M){ze(M),Ee.remove(M)}function ze(M){const H=Ee.get(M).programs;H!==void 0&&(H.forEach(function(Y){K.releaseProgram(Y)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,Y,q,G,oe){H===null&&(H=Re);const pe=G.isMesh&&G.matrixWorld.determinant()<0,we=Kp(M,H,Y,q,G);Me.setMaterial(q,pe);let be=Y.index,Ie=1;if(q.wireframe===!0){if(be=y.getWireframeAttribute(Y),be===void 0)return;Ie=2}const Fe=Y.drawRange,ke=Y.attributes.position;let je=Fe.start*Ie,ft=(Fe.start+Fe.count)*Ie;oe!==null&&(je=Math.max(je,oe.start*Ie),ft=Math.min(ft,(oe.start+oe.count)*Ie)),be!==null?(je=Math.max(je,0),ft=Math.min(ft,be.count)):ke!=null&&(je=Math.max(je,0),ft=Math.min(ft,ke.count));const Dt=ft-je;if(Dt<0||Dt===1/0)return;ce.setup(G,q,we,Y,be);let Mt,vt=se;if(be!==null&&(Mt=C.get(be),vt=Se,vt.setIndex(Mt)),G.isMesh)q.wireframe===!0?(Me.setLineWidth(q.wireframeLinewidth*Jt()),vt.setMode(L.LINES)):vt.setMode(L.TRIANGLES);else if(G.isLine){let Le=q.linewidth;Le===void 0&&(Le=1),Me.setLineWidth(Le*Jt()),G.isLineSegments?vt.setMode(L.LINES):G.isLineLoop?vt.setMode(L.LINE_LOOP):vt.setMode(L.LINE_STRIP)}else G.isPoints?vt.setMode(L.POINTS):G.isSprite&&vt.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))vt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Le=G._multiDrawStarts,At=G._multiDrawCounts,st=G._multiDrawCount,_n=be?C.get(be).bytesPerElement:1,xs=Ee.get(q).currentProgram.getUniforms();for(let yn=0;yn<st;yn++)xs.setValue(L,"_gl_DrawID",yn),vt.render(Le[yn]/_n,At[yn])}else if(G.isInstancedMesh)vt.renderInstances(je,Dt,G.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,At=Math.min(Y.instanceCount,Le);vt.renderInstances(je,Dt,At)}else vt.render(je,Dt)};function _t(M,H,Y){M.transparent===!0&&M.side===xi&&M.forceSinglePass===!1?(M.side=gn,M.needsUpdate=!0,eo(M,H,Y),M.side=Yi,M.needsUpdate=!0,eo(M,H,Y),M.side=xi):eo(M,H,Y)}this.compile=function(M,H,Y=null){Y===null&&(Y=M),p=Te.get(Y),p.init(H),S.push(p),Y.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),M!==Y&&M.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const q=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const oe=G.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const we=oe[pe];_t(we,Y,G),q.add(we)}else _t(oe,Y,G),q.add(oe)}),p=S.pop(),q},this.compileAsync=function(M,H,Y=null){const q=this.compile(M,H,Y);return new Promise(G=>{function oe(){if(q.forEach(function(pe){Ee.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){G(M);return}setTimeout(oe,10)}Oe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ct=null;function di(M){ct&&ct(M)}function qn(){Ki.stop()}function Cu(){Ki.start()}const Ki=new $f;Ki.setAnimationLoop(di),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(M){ct=M,ae.setAnimationLoop(M),M===null?Ki.stop():Ki.start()},ae.addEventListener("sessionstart",qn),ae.addEventListener("sessionend",Cu),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(H),H=ae.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,H,I),p=Te.get(M,S.length),p.init(H),S.push(p),ie.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),at.setFromProjectionMatrix(ie,ri,H.reversedDepth),Q=this.localClippingEnabled,it=R.init(this.clippingPlanes,Q),v=j.get(M,b.length),v.init(),b.push(v),ae.enabled===!0&&ae.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Fa(oe,H,-1/0,x.sortObjects)}Fa(M,H,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(le,fe),Je=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Je&&te.addToRenderList(v,M),this.info.render.frame++,it===!0&&R.beginShadows();const Y=p.state.shadowsArray;$.render(Y,M,H),it===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,G=v.transmissive;if(p.setupLights(),H.isArrayCamera){const oe=H.cameras;if(G.length>0)for(let pe=0,we=oe.length;pe<we;pe++){const be=oe[pe];ku(q,G,M,be)}Je&&te.render(M);for(let pe=0,we=oe.length;pe<we;pe++){const be=oe[pe];Ru(v,M,be,be.viewport)}}else G.length>0&&ku(q,G,M,H),Je&&te.render(M),Ru(v,M,H);I!==null&&P===0&&(He.updateMultisampleRenderTarget(I),He.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(x,M,H),ce.resetDefaultState(),T=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&R.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?v=b[b.length-1]:v=null};function Fa(M,H,Y,q){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||at.intersectsSprite(M)){q&&Ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ie);const pe=V.update(M),we=M.material;we.visible&&v.push(M,pe,we,Y,Ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||at.intersectsObject(M))){const pe=V.update(M),we=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ue.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ue.copy(pe.boundingSphere.center)),Ue.applyMatrix4(M.matrixWorld).applyMatrix4(ie)),Array.isArray(we)){const be=pe.groups;for(let Ie=0,Fe=be.length;Ie<Fe;Ie++){const ke=be[Ie],je=we[ke.materialIndex];je&&je.visible&&v.push(M,pe,je,Y,Ue.z,ke)}}else we.visible&&v.push(M,pe,we,Y,Ue.z,null)}}const oe=M.children;for(let pe=0,we=oe.length;pe<we;pe++)Fa(oe[pe],H,Y,q)}function Ru(M,H,Y,q){const G=M.opaque,oe=M.transmissive,pe=M.transparent;p.setupLightsView(Y),it===!0&&R.setGlobalState(x.clippingPlanes,Y),q&&Me.viewport(D.copy(q)),G.length>0&&Qr(G,H,Y),oe.length>0&&Qr(oe,H,Y),pe.length>0&&Qr(pe,H,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ku(M,H,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new gs(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?qr:Li,minFilter:us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[q.id],pe=q.viewport||D;oe.setSize(pe.z*x.transmissionResolutionScale,pe.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),be=x.getActiveCubeFace(),Ie=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(B),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Je&&te.render(Y);const Fe=x.toneMapping;x.toneMapping=Xi;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),it===!0&&R.setGlobalState(x.clippingPlanes,q),Qr(M,Y,q),He.updateMultisampleRenderTarget(oe),He.updateRenderTargetMipmap(oe),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ft=0,Dt=H.length;ft<Dt;ft++){const Mt=H[ft],vt=Mt.object,Le=Mt.geometry,At=Mt.material,st=Mt.group;if(At.side===xi&&vt.layers.test(q.layers)){const _n=At.side;At.side=gn,At.needsUpdate=!0,Pu(vt,Y,q,Le,At,st),At.side=_n,At.needsUpdate=!0,je=!0}}je===!0&&(He.updateMultisampleRenderTarget(oe),He.updateRenderTargetMipmap(oe))}x.setRenderTarget(we,be,Ie),x.setClearColor(B,z),ke!==void 0&&(q.viewport=ke),x.toneMapping=Fe}function Qr(M,H,Y){const q=H.isScene===!0?H.overrideMaterial:null;for(let G=0,oe=M.length;G<oe;G++){const pe=M[G],we=pe.object,be=pe.geometry,Ie=pe.group;let Fe=pe.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),we.layers.test(Y.layers)&&Pu(we,H,Y,be,Fe,Ie)}}function Pu(M,H,Y,q,G,oe){M.onBeforeRender(x,H,Y,q,G,oe),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(x,H,Y,q,M,oe),G.transparent===!0&&G.side===xi&&G.forceSinglePass===!1?(G.side=gn,G.needsUpdate=!0,x.renderBufferDirect(Y,H,q,G,M,oe),G.side=Yi,G.needsUpdate=!0,x.renderBufferDirect(Y,H,q,G,M,oe),G.side=xi):x.renderBufferDirect(Y,H,q,G,M,oe),M.onAfterRender(x,H,Y,q,G,oe)}function eo(M,H,Y){H.isScene!==!0&&(H=Re);const q=Ee.get(M),G=p.state.lights,oe=p.state.shadowsArray,pe=G.state.version,we=K.getParameters(M,G.state,oe,H,Y),be=K.getProgramCacheKey(we);let Ie=q.programs;q.environment=M.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(M.isMeshStandardMaterial?wt:Ht).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",ee),Ie=new Map,q.programs=Ie);let Fe=Ie.get(be);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===pe)return Du(M,we),Fe}else we.uniforms=K.getUniforms(M),M.onBeforeCompile(we,x),Fe=K.acquireProgram(we,be),Ie.set(be,Fe),q.uniforms=we.uniforms;const ke=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=R.uniform),Du(M,we),q.needsLights=Jp(M),q.lightsStateVersion=pe,q.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function Lu(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=Xo.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function Du(M,H){const Y=Ee.get(M);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Kp(M,H,Y,q,G){H.isScene!==!0&&(H=Re),He.resetTextureUnits();const oe=H.fog,pe=q.isMeshStandardMaterial?H.environment:null,we=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:tr,be=(q.isMeshStandardMaterial?wt:Ht).get(q.envMap||pe),Ie=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ke=!!Y.morphAttributes.position,je=!!Y.morphAttributes.normal,ft=!!Y.morphAttributes.color;let Dt=Xi;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const Mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=Mt!==void 0?Mt.length:0,Le=Ee.get(q),At=p.state.lights;if(it===!0&&(Q===!0||M!==E)){const on=M===E&&q.id===T;R.setState(q,M,on)}let st=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==At.state.version||Le.outputColorSpace!==we||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==be||q.fog===!0&&Le.fog!==oe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==R.numPlanes||Le.numIntersection!==R.numIntersection)||Le.vertexAlphas!==Ie||Le.vertexTangents!==Fe||Le.morphTargets!==ke||Le.morphNormals!==je||Le.morphColors!==ft||Le.toneMapping!==Dt||Le.morphTargetsCount!==vt)&&(st=!0):(st=!0,Le.__version=q.version);let _n=Le.currentProgram;st===!0&&(_n=eo(q,H,G));let xs=!1,yn=!1,fr=!1;const Ct=_n.getUniforms(),An=Le.uniforms;if(Me.useProgram(_n.program)&&(xs=!0,yn=!0,fr=!0),q.id!==T&&(T=q.id,yn=!0),xs||E!==M){Me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ct.setValue(L,"projectionMatrix",M.projectionMatrix),Ct.setValue(L,"viewMatrix",M.matrixWorldInverse);const pn=Ct.map.cameraPosition;pn!==void 0&&pn.setValue(L,_e.setFromMatrixPosition(M.matrixWorld)),De.logarithmicDepthBuffer&&Ct.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ct.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,yn=!0,fr=!0)}if(G.isSkinnedMesh){Ct.setOptional(L,G,"bindMatrix"),Ct.setOptional(L,G,"bindMatrixInverse");const on=G.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ct.setValue(L,"boneTexture",on.boneTexture,He))}G.isBatchedMesh&&(Ct.setOptional(L,G,"batchingTexture"),Ct.setValue(L,"batchingTexture",G._matricesTexture,He),Ct.setOptional(L,G,"batchingIdTexture"),Ct.setValue(L,"batchingIdTexture",G._indirectTexture,He),Ct.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Ct.setValue(L,"batchingColorTexture",G._colorsTexture,He));const Cn=Y.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Z.update(G,Y,_n),(yn||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,Ct.setValue(L,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(An.envMap.value=be,An.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(An.envMapIntensity.value=H.environmentIntensity),yn&&(Ct.setValue(L,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Zp(An,fr),oe&&q.fog===!0&&ne.refreshFogUniforms(An,oe),ne.refreshMaterialUniforms(An,q,X,J,p.state.transmissionRenderTarget[M.id]),Xo.upload(L,Lu(Le),An,He)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xo.upload(L,Lu(Le),An,He),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ct.setValue(L,"center",G.center),Ct.setValue(L,"modelViewMatrix",G.modelViewMatrix),Ct.setValue(L,"normalMatrix",G.normalMatrix),Ct.setValue(L,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const on=q.uniformsGroups;for(let pn=0,Ba=on.length;pn<Ba;pn++){const Zi=on[pn];Ne.update(Zi,_n),Ne.bind(Zi,_n)}}return _n}function Zp(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function Jp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,H,Y){const q=Ee.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ee.get(M.texture).__webglTexture=H,Ee.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){const Y=Ee.get(M);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const jp=L.createFramebuffer();this.setRenderTarget=function(M,H=0,Y=0){I=M,w=H,P=Y;let q=!0,G=null,oe=!1,pe=!1;if(M){const be=Ee.get(M);if(be.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(be.__webglFramebuffer===void 0)He.setupRenderTarget(M);else if(be.__hasExternalTextures)He.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ke=M.depthTexture;if(be.__boundDepthTexture!==ke){if(ke!==null&&Ee.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const Fe=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?G=Fe[H][Y]:G=Fe[H],oe=!0):M.samples>0&&He.useMultisampledRTT(M)===!1?G=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[Y]:G=Fe,D.copy(M.viewport),F.copy(M.scissor),k=M.scissorTest}else D.copy(ve).multiplyScalar(X).floor(),F.copy(Be).multiplyScalar(X).floor(),k=Pe;if(Y!==0&&(G=jp),Me.bindFramebuffer(L.FRAMEBUFFER,G)&&q&&Me.drawBuffers(M,G),Me.viewport(D),Me.scissor(F),Me.setScissorTest(k),oe){const be=Ee.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,be.__webglTexture,Y)}else if(pe){const be=H;for(let Ie=0;Ie<M.textures.length;Ie++){const Fe=Ee.get(M.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,Y,be)}}else if(M!==null&&Y!==0){const be=Ee.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,Y)}T=-1},this.readRenderTargetPixels=function(M,H,Y,q,G,oe,pe,we=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be){Me.bindFramebuffer(L.FRAMEBUFFER,be);try{const Ie=M.textures[we],Fe=Ie.format,ke=Ie.type;if(!De.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-q&&Y>=0&&Y<=M.height-G&&(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(H,Y,q,G,de.convert(Fe),de.convert(ke),oe))}finally{const Ie=I!==null?Ee.get(I).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,H,Y,q,G,oe,pe,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(be=be[pe]),be)if(H>=0&&H<=M.width-q&&Y>=0&&Y<=M.height-G){Me.bindFramebuffer(L.FRAMEBUFFER,be);const Ie=M.textures[we],Fe=Ie.format,ke=Ie.type;if(!De.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.bufferData(L.PIXEL_PACK_BUFFER,oe.byteLength,L.STREAM_READ),M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),L.readPixels(H,Y,q,G,de.convert(Fe),de.convert(ke),0);const ft=I!==null?Ee.get(I).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ft);const Dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await dg(L,Dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,oe),L.deleteBuffer(je),L.deleteSync(Dt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,Y=0){const q=Math.pow(2,-Y),G=Math.floor(M.image.width*q),oe=Math.floor(M.image.height*q),pe=H!==null?H.x:0,we=H!==null?H.y:0;He.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,pe,we,G,oe),Me.unbindTexture()};const Qp=L.createFramebuffer(),em=L.createFramebuffer();this.copyTextureToTexture=function(M,H,Y=null,q=null,G=0,oe=null){oe===null&&(G!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=G,G=0):oe=0);let pe,we,be,Ie,Fe,ke,je,ft,Dt;const Mt=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(Y!==null)pe=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,be=Y.isBox3?Y.max.z-Y.min.z:1,Ie=Y.min.x,Fe=Y.min.y,ke=Y.isBox3?Y.min.z:0;else{const Cn=Math.pow(2,-G);pe=Math.floor(Mt.width*Cn),we=Math.floor(Mt.height*Cn),M.isDataArrayTexture?be=Mt.depth:M.isData3DTexture?be=Math.floor(Mt.depth*Cn):be=1,Ie=0,Fe=0,ke=0}q!==null?(je=q.x,ft=q.y,Dt=q.z):(je=0,ft=0,Dt=0);const vt=de.convert(H.format),Le=de.convert(H.type);let At;H.isData3DTexture?(He.setTexture3D(H,0),At=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(He.setTexture2DArray(H,0),At=L.TEXTURE_2D_ARRAY):(He.setTexture2D(H,0),At=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),_n=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xs=L.getParameter(L.UNPACK_SKIP_PIXELS),yn=L.getParameter(L.UNPACK_SKIP_ROWS),fr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const Ct=M.isDataArrayTexture||M.isData3DTexture,An=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){const Cn=Ee.get(M),on=Ee.get(H),pn=Ee.get(Cn.__renderTarget),Ba=Ee.get(on.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,pn.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ba.__webglFramebuffer);for(let Zi=0;Zi<be;Zi++)Ct&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,G,ke+Zi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(H).__webglTexture,oe,Dt+Zi)),L.blitFramebuffer(Ie,Fe,pe,we,je,ft,pe,we,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||Ee.has(M)){const Cn=Ee.get(M),on=Ee.get(H);Me.bindFramebuffer(L.READ_FRAMEBUFFER,Qp),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,em);for(let pn=0;pn<be;pn++)Ct?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Cn.__webglTexture,G,ke+pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Cn.__webglTexture,G),An?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,oe,Dt+pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,oe),G!==0?L.blitFramebuffer(Ie,Fe,pe,we,je,ft,pe,we,L.COLOR_BUFFER_BIT,L.NEAREST):An?L.copyTexSubImage3D(At,oe,je,ft,Dt+pn,Ie,Fe,pe,we):L.copyTexSubImage2D(At,oe,je,ft,Ie,Fe,pe,we);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else An?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(At,oe,je,ft,Dt,pe,we,be,vt,Le,Mt.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(At,oe,je,ft,Dt,pe,we,be,vt,Mt.data):L.texSubImage3D(At,oe,je,ft,Dt,pe,we,be,vt,Le,Mt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,oe,je,ft,pe,we,vt,Le,Mt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,oe,je,ft,Mt.width,Mt.height,vt,Mt.data):L.texSubImage2D(L.TEXTURE_2D,oe,je,ft,pe,we,vt,Le,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_n),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xs),L.pixelStorei(L.UNPACK_SKIP_ROWS,yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fr),oe===0&&H.generateMipmaps&&L.generateMipmap(At),Me.unbindTexture()},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&He.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?He.setTextureCube(M,0):M.isData3DTexture?He.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?He.setTexture2DArray(M,0):He.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){w=0,P=0,I=null,Me.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const ei=1.2,Yt=144,qe=62,ls=12,It=qe/2,Bn=ls,Yn=Yt-ls,Ze=2.5,me=Ze/2,Zf=4,Pa=2,uS=3,Jf=3,dS=3,jf=3,hS=3,fS=3,Qf=5,ca=1,vu=2,pS=1,ep=1,mS=2,eh=45,th=5,gS=-3,vS=-2,_S=-1,yS=-5,bS=-5,SS=2,xS=-2,MS=5,ES=5,nh=10,TS=5,wS=1,AS=1,CS=2,RS=-2,kS=-5,PS=2,LS=1,ih=2,DS=12,tp=0,IS=10,NS=5,US=10,sh=10,OS=11,FS=5,np=[{group:0,maxCm:12,penalty:0},{group:1,maxCm:20,penalty:-2},{group:2,maxCm:28,penalty:-4},{group:3,maxCm:34,penalty:-6},{group:4,maxCm:40,penalty:-8},{group:5,maxCm:1/0,penalty:-10}];function BS(n){for(const e of np)if(n<=e.maxCm)return e.group;return 5}function rh(n){return np[Math.max(0,Math.min(5,n))].penalty}function oh(n){return n<30?5:n<35?3:n<40?0:n<=50?-2:-5}const El=8,ua=6,ip=6,sp=14,da=12,ha=24,rp=24,fa=2.5*Ze,bi=22.5,Si=112.5,Yo=6,zS=3,HS=2,GS=1,VS=2,WS=4,$S=10,ah=2,rs=20,XS=40,lh=40,YS=10,Tl=30,qS=30,KS=50,ZS=5,JS=8,jS=20,QS=25,ch=50,uh=20,dh=15;function qo(n){return n*ei}function op(n){return n/ei}function Hs(n){return Yn-qo(n)}function ex(n){return op(Yn-n)}const Kn=10;function tx(n){const e=qe*Kn,t=Yt*Kn,i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d"),r=c=>t-c*Kn,o=c=>c*Kn;for(let c=0;c<120;c+=5){const l=ls+(c-10)*ei,u=c/5%2===0;s.fillStyle=u?"#2f7a3c":"#358a44",s.fillRect(0,r(l+5*ei),e,5*ei*Kn)}s.fillStyle=hh(n.bottomColor,.55),s.fillRect(0,r(Bn),e,ls*Kn),s.fillStyle=hh(n.topColor,.55),s.fillRect(0,r(Yt),e,ls*Kn),s.strokeStyle="rgba(255,255,255,0.85)",s.lineWidth=2;for(let c=0;c<=100;c+=5){const l=Bn+c*ei;s.beginPath(),s.moveTo(0,r(l)),s.lineTo(e,r(l)),s.stroke()}s.lineWidth=1.5,s.strokeStyle="rgba(255,255,255,0.7)";for(let c=1;c<100;c++){if(c%5===0)continue;const l=Bn+c*ei;for(const u of[0,qe*.37,qe*.63,qe]){s.beginPath();const h=.6*Kn,d=o(u);s.moveTo(Math.max(0,d-h),r(l)),s.lineTo(Math.min(e,d+h),r(l)),s.stroke()}}s.fillStyle="rgba(255,255,255,0.8)",s.font=`bold ${3.2*Kn}px ${getComputedStyle(document.body).fontFamily||"sans-serif"}`,s.textAlign="center",s.textBaseline="middle";for(let c=10;c<=90;c+=10){const l=c<=50?c:100-c,u=Bn+c*ei;for(const h of[qe*.2,qe*.8])s.save(),s.translate(o(h),r(u)),s.rotate(h<qe/2?Math.PI/2:-Math.PI/2),s.fillText(String(l),0,0),s.restore()}s.strokeStyle="#ffffff",s.lineWidth=3;for(const c of[Bn,Yn])s.beginPath(),s.moveTo(0,r(c)),s.lineTo(e,r(c)),s.stroke();s.fillStyle="rgba(255,255,255,0.9)",s.font=`bold ${5*Kn}px ${getComputedStyle(document.body).fontFamily||"sans-serif"}`,s.fillText(n.topName.toUpperCase(),e/2,r(Yt-ls/2)),s.save(),s.translate(e/2,r(ls/2)),s.rotate(Math.PI),s.fillText(n.bottomName.toUpperCase(),0,0),s.restore(),s.strokeStyle="#ffffff",s.lineWidth=4,s.strokeRect(2,2,e-4,t-4),n.boardMinY>0&&(s.fillStyle="rgba(5,8,10,0.75)",s.fillRect(0,r(n.boardMinY),e,t-r(n.boardMinY)),s.strokeStyle="rgba(255,255,255,0.5)",s.setLineDash([12,8]),s.lineWidth=3,s.beginPath(),s.moveTo(0,r(n.boardMinY)),s.lineTo(e,r(n.boardMinY)),s.stroke(),s.setLineDash([]));const a=new Df(i);return a.colorSpace=mn,a.anisotropy=4,a}function hh(n,e){const t=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(n);if(!t)return n;const i=Math.round(parseInt(t[1],16)*e),s=Math.round(parseInt(t[2],16)*e),r=Math.round(parseInt(t[3],16)*e);return`rgb(${i},${s},${r})`}const fh=new Map;function ap(n,e={}){const t=JSON.stringify([n,e]),i=fh.get(t);if(i)return i;const s=e.width??128,r=e.height??128,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");e.bg&&(a.fillStyle=e.bg,ph(a,2,2,s-4,r-4,e.radius??18),a.fill()),e.border&&(a.strokeStyle=e.border,a.lineWidth=6,ph(a,4,4,s-8,r-8,e.radius??18),a.stroke()),a.fillStyle=e.color??"#fff",a.textAlign="center",a.textBaseline="middle";const c=getComputedStyle(document.body).fontFamily||"sans-serif",l=e.size??60;a.font=`${e.bold===!1?"":"bold "}${l}px ${c}`,e.sub?(a.fillText(n,s/2,r/2-l*.22),a.font=`${l*.5}px ${c}`,a.fillStyle=e.color??"#fff",a.globalAlpha=.85,a.fillText(e.sub,s/2,r/2+l*.45),a.globalAlpha=1):a.fillText(n,s/2,r/2);const u=new Df(o);return u.colorSpace=mn,u.minFilter=Vn,fh.set(t,u),u}function ph(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function vi(n,e,t,i=1){const s=new kf({map:ap(n,e),transparent:!0,depthTest:!1}),r=new Fg(s);return r.scale.set(t*i,t,1),r}function mh(n,e,t){const i=ap(e,t),s=n.material;s.map!==i&&(s.map=i,s.needsUpdate=!0)}const en=1e-6,ai=(n,e)=>({x:n.x+e.x,y:n.y+e.y}),ot=(n,e)=>({x:n.x-e.x,y:n.y-e.y}),Ii=(n,e)=>({x:n.x*e,y:n.y*e}),Mn=(n,e)=>n.x*e.x+n.y*e.y,nx=(n,e)=>n.x*e.y-n.y*e.x,_u=n=>Math.hypot(n.x,n.y),ht=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function Lc(n){const e=_u(n);return e<en?{x:0,y:1}:{x:n.x/e,y:n.y/e}}function En(n){const e=n*Math.PI/180;return{x:Math.sin(e),y:Math.cos(e)}}function Tn(n){if(_u(n)<en)return 0;let e=Math.atan2(n.x,n.y)*180/Math.PI;return e<=-180&&(e+=360),e}function ix(n,e){let t=e-n;for(;t>180;)t-=360;for(;t<=-180;)t+=360;return t}function sx(n,e){const t=e*Math.PI/180,i=Math.cos(t),s=Math.sin(t);return{x:n.x*i-n.y*s,y:n.x*s+n.y*i}}function rx(n,e,t){return ai(e,sx(ot(n,e),t))}function wl(n,e,t){return{x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t}}function sr(n,e,t){return n<e?e:n>t?t:n}function Al(n,e,t,i){const s=ot(e,n),r=ot(n,t),o=Mn(s,s),a=2*Mn(r,s),c=Mn(r,r)-i*i;if(c<=en)return 0;if(o<en)return null;const l=a*a-4*o*c;if(l<0)return null;const u=(-a-Math.sqrt(l))/(2*o);return u<-en||u>1+en?null:sr(u,0,1)}function gh(n,e,t){return nx(ot(e,n),ot(t,n))}const kn=n=>n==="home"?"away":"home",oi=4,dr=2;function lp(){return{movedCm:0,moved:!1,stranded:!1,speedPenalty:0,halved:!1,noMove:!1,noAction:!1,contestModifier:0,rushPerfect:!1,clutchEligible:!1,tackled:!1,engagedThisSlice:!1,disengagedFrom:[],brokeThrough:!1,declinedJump:!1}}const vh={lineupOffense:"Offense lines up",lineupDefense:"Defense lines up",markers:"Markers",defenseReveal:"1. Defense reveals",offenseReveal:"2. Offense reveals",freeBlockers:"3. Free blockers",resolveBlocks:"4. Blocking",ballCarrier:"5. Ball carrier",defenders:"6. Blitzers & free defenders",receivers:"7. Receivers & man coverage",zones:"8. Spies & zones",pass:"9. Pass",looseBall:"Loose ball",over:"Play over"};class Cl extends Error{}function La(n){switch(n){case"QB":return["read","handoff","filler"];case"RB":case"FB":return["run","dir","continue","delay","cut","passblock","runblock","filler"];case"WR":case"TE":return["dir","continue","delay","cut","passblock","runblock","filler"];case"OL":return["passblock","runblock","filler"];default:return["man","zone","spy","blitz","filler"]}}function xt(n,e){const t=n?n.slice(0,e):[];for(;t.length<e;)t.push({t:"filler"});return t}function bs(n){switch(n.t){case"filler":return"Filler";case"read":return"Read";case"handoff":return"Hand off";case"run":return`${n.lane==="dive"?"Dive":n.lane==="offtackle"?"Off tackle":"Sprint"} ${n.side}`;case"passblock":return"Pass block";case"runblock":return"Run block";case"dir":return n.dir==="up"?"Up":`${n.dir==="left"?"Left":"Right"} ${n.angle}°`;case"continue":return"Continue";case"delay":return"Delay";case"cut":return`Cut ${n.cut}`;case"man":return"Man";case"zone":return n.zone==="flat"||n.zone==="curl"?`Zone ${n.zone} ${n.side}`:`Zone ${n.zone}`;case"spy":return"Spy";case"blitz":return"Blitz"}}function yu(n,e,t){const i=[],s=n==="offense"?oi:dr,r=new Set(e.map(l=>l.id));for(const l of Object.keys(t))r.has(l)||i.push({player:l,slot:null,text:`${l} is not on the field.`,severity:"error"});const o=[],a=[],c=e.filter(l=>l.position==="QB");for(const l of e){const u=xt(t[l.id],s);(t[l.id]?.length??0)>s&&i.push({player:l.id,slot:null,text:`${l.name} may have at most ${s} markers.`,severity:"error"});const h=La(l.position);let d=!1,f=!1,m=!1,_=!1,v=!1,p=!1;for(let b=0;b<u.length;b++){const S=u[b],x=b+1,A=w=>i.push({player:l.id,slot:b,text:`${l.name}, timeslice ${x}: ${w}`,severity:"error"});if(!h.includes(S.t)){A(`a ${l.position} cannot use the ${bs(S)} marker.`);continue}if(d&&S.t!=="filler"&&A("once a filler marker is placed every later marker must be a filler."),S.t==="filler"){d=!0;continue}switch(m&&S.t!=="runblock"&&A("after a cut only filler or run block markers may follow."),S.t){case"handoff":x>2&&A("hand-off markers must be in one of the first two timeslices."),a.some(w=>w.id===l.id)&&A("only one hand-off marker per play."),(!r.has(S.target)||S.target===l.id)&&A("the hand-off target must be a team mate on the field."),a.push({id:l.id,target:S.target,slice:x});break;case"read":(!r.has(S.target)||S.target===l.id)&&A("the read target must be a team mate on the field.");break;case"run":x>2&&A("running markers may only be placed in timeslice 1 (run) or 2 (draw)."),_&&A("only one running marker per play."),_=!0,v=!0,o.push({id:l.id,slice:x});break;case"dir":{f&&A("a receiver may have only one direction marker."),u.slice(0,b).every(P=>P.t==="delay")||A("direction markers go in timeslice 1 (or right after delay markers)."),S.dir!=="up"&&!(S.angle>5&&S.angle<180)&&A("a left or right direction needs an angle between 5 and 180 degrees."),f=!0,v=!0;break}case"continue":v||A("continue needs an earlier direction to continue in.");break;case"delay":break;case"cut":m&&A("a receiver may only cut once on a play."),m=!0;break;case"passblock":case"runblock":break;case"man":p&&A("a defender may not have two man coverage markers."),p=!0;break}}}if(n==="offense"){o.length>1&&i.push({player:null,slot:null,text:"Only one player can have running markers on a given play.",severity:"error"});const l=c[0];if(l){const u=xt(t[l.id],s);for(const d of a)o.find(m=>m.id===d.target&&m.slice===d.slice)||i.push({player:l.id,slot:d.slice-1,text:`The hand-off in timeslice ${d.slice} has no matching running marker on the target: that is an automatic fumble.`,severity:"warning"});for(const d of o)a.find(m=>m.target===d.id&&m.slice===d.slice)||i.push({player:d.id,slot:d.slice-1,text:`The running marker in timeslice ${d.slice} has no matching hand-off from the QB: that is an automatic fumble.`,severity:"warning"});a.find(d=>d.slice===1)&&u[1].t!=="filler"&&i.push({player:l.id,slot:1,text:"A read marker after a hand-off in timeslice 1 makes this a play-action fake.",severity:"warning"})}}return i}function ox(n){return n.some(e=>e.severity==="error")}const Ge={field:0,zone:.2,link:.4,ring:.5,trail:.6,chip:.7,token:1,label:1.2,overlay:2,ghost:1.5},ax={option:15909198,target:5223423,danger:15688801,engageable:5816957,designated:16098596,selected:16777215,muted:3355443,hover:16777215};class cp{renderer;scene=new Ug;camera;fieldMesh;fieldKey="";tokens=new Map;overlay=new Ln;links=new Ln;zonesGroup=new Ln;ghostGroup=new Ln;routesGroup=new Ln;ghostMeshes=new Map;losLine;ltgLine;raycaster=new wv;pointer=new ge;canvas;handlers;view=null;ui={selected:null,highlights:{}};defs=new Map;teamColors={offense:{primary:"#1f6feb",secondary:"#fff"},defense:{primary:"#c0392b",secondary:"#fff"}};dragging=null;panning=null;downAt=null;raf=0;disposed=!1;ballFlight=null;hoverGhost=null;constructor(e,t){this.canvas=e,this.handlers=t,this.renderer=new cS({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),this.renderer.setClearColor(724754),this.camera=new Wf(-10,10,10,-10,.1,100),this.camera.position.set(qe/2,Yt/2,50),this.camera.up.set(0,1,0),this.camera.lookAt(qe/2,Yt/2,0),this.camera.zoom=1;const i=new ii(qe,Yt);this.fieldMesh=new tt(i,new St({color:3111484})),this.fieldMesh.position.set(qe/2,Yt/2,Ge.field),this.fieldMesh.name="field",this.scene.add(this.fieldMesh),this.losLine=this.makeLine(5223423,.9),this.ltgLine=this.makeLine(15909198,.9),this.scene.add(this.losLine,this.ltgLine,this.zonesGroup,this.routesGroup,this.links,this.overlay,this.ghostGroup),this.bindEvents(),this.resize(),this.fitField();const s=()=>{this.disposed||(this.animate(),this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(s))};this.raf=requestAnimationFrame(s),new ResizeObserver(()=>this.resize()).observe(e.parentElement??e)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.renderer.dispose()}resize(){const e=this.canvas.parentElement??this.canvas,t=Math.max(1,e.clientWidth),i=Math.max(1,e.clientHeight);this.renderer.setSize(t,i,!1);const s=t/i,r=10;this.camera.left=-r*s,this.camera.right=r*s,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix()}fitRegion(e,t,i,s,r=2){const o=i-e+r*2,a=s-t+r*2,c=this.camera.right-this.camera.left,l=this.camera.top-this.camera.bottom;this.camera.zoom=Math.min(c/o,l/a),this.camera.position.x=(e+i)/2,this.camera.position.y=(t+s)/2,this.camera.updateProjectionMatrix()}fitField(){const e=this.view?.play?.boardMinY??0;this.fitRegion(0,e,qe,Yt,1)}fitPlay(){const e=this.view?.play;if(!e)return this.fitField();const t=Object.values(e.players);if(t.length===0){this.fitRegion(0,e.los-20,qe,e.los+30,1);return}let i=1/0,s=-1/0;for(const r of t)i=Math.min(i,r.pos.y),s=Math.max(s,r.pos.y);i=Math.min(i,e.los-12),s=Math.max(s,e.los+28),this.fitRegion(0,i,qe,s,2)}focusBall(){const e=this.view?.play;if(!e)return;const t=e.ball.carrier,i=t?e.players[t]:null,s=e.ball.loose??i?.pos??{x:qe/2,y:e.los};this.camera.position.x=s.x,this.camera.position.y=s.y,this.camera.updateProjectionMatrix()}zoomBy(e,t){const i=t?this.toWorld(t.x,t.y):null;if(this.camera.zoom=Math.max(.3,Math.min(12,this.camera.zoom*e)),this.camera.updateProjectionMatrix(),i&&t){const s=this.toWorld(t.x,t.y);this.camera.position.x+=i.x-s.x,this.camera.position.y+=i.y-s.y,this.camera.updateProjectionMatrix()}}toScreen(e){const t=this.canvas.getBoundingClientRect(),i=new O(e.x,e.y,0).project(this.camera);return{x:t.left+(i.x+1)/2*t.width,y:t.top+(1-i.y)/2*t.height}}toWorld(e,t){const i=this.canvas.getBoundingClientRect(),s=(e-i.left)/i.width*2-1,r=-((t-i.top)/i.height)*2+1,o=new O(s,r,0).unproject(this.camera);return{x:o.x,y:o.y}}bindEvents(){const e=this.canvas;e.addEventListener("contextmenu",i=>i.preventDefault()),e.addEventListener("wheel",i=>{i.preventDefault(),this.zoomBy(i.deltaY<0?1.15:1/1.15,{x:i.clientX,y:i.clientY})},{passive:!1}),e.addEventListener("pointerdown",i=>{e.setPointerCapture(i.pointerId),this.downAt={x:i.clientX,y:i.clientY,t:performance.now()};const s=this.pick(i.clientX,i.clientY);if(i.button===0&&s.player&&this.ui.draggable?.has(s.player)){this.dragging={id:s.player};return}(i.button===1||i.button===2||i.button===0&&!s.player&&!s.ghost)&&(this.panning={x:i.clientX,y:i.clientY,cx:this.camera.position.x,cy:this.camera.position.y})}),e.addEventListener("pointermove",i=>{if(this.dragging){const r=this.toWorld(i.clientX,i.clientY);this.handlers.onDrag(this.dragging.id,r,!1);return}if(this.panning){const r=e.getBoundingClientRect(),o=(this.camera.right-this.camera.left)/this.camera.zoom,a=(this.camera.top-this.camera.bottom)/this.camera.zoom,c=(i.clientX-this.panning.x)/r.width*o,l=(i.clientY-this.panning.y)/r.height*a;this.camera.position.x=this.panning.cx-c,this.camera.position.y=this.panning.cy+l,this.camera.updateProjectionMatrix();return}const s=this.pick(i.clientX,i.clientY);this.hoverGhost=s.ghost,this.handlers.onHover(s.field,s.player,s.ghost)});const t=i=>{const s=this.dragging;if(this.panning,this.dragging=null,this.panning=null,s){const c=this.toWorld(i.clientX,i.clientY);this.handlers.onDrag(s.id,c,!0);return}const r=this.downAt;if(this.downAt=null,!r||Math.hypot(i.clientX-r.x,i.clientY-r.y)>4||i.button!==0)return;const a=this.pick(i.clientX,i.clientY);a.ghost?this.handlers.onClickGhost(a.ghost):a.player?this.handlers.onClickPlayer(a.player,i,a.field):a.field&&this.handlers.onClickField(a.field,i)};e.addEventListener("pointerup",t),e.addEventListener("pointerleave",()=>{this.handlers.onHover(null,null,null)}),e.addEventListener("dblclick",()=>this.fitPlay())}pick(e,t){const i=this.canvas.getBoundingClientRect();this.pointer.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const s=[...this.ghostMeshes.values()],r=this.raycaster.intersectObjects(s,!0)[0];if(r){let u=r.object;for(;u&&!u.userData.ghostKey;)u=u.parent;if(u)return{player:null,field:null,ghost:u.userData.ghostKey}}const o=this.raycaster.intersectObjects([...this.tokens.values()].map(u=>u.hit),!1),a=o.length?o[0].object.userData.id:null,c=this.raycaster.intersectObject(this.fieldMesh,!1)[0],l=c?{x:c.point.x,y:c.point.y}:null;return{player:a,field:l,ghost:null}}setTeams(e,t){this.defs=new Map(e.map(i=>[i.id,i])),this.teamColors=t}setView(e,t,i={}){const s=!this.view?.play&&!!e.play,r=this.view?.play&&e.play&&(this.view.play.los!==e.play.los||this.view.play.offense!==e.play.offense||Object.keys(this.view.play.players).length===0);this.view=e,this.ui=t,this.updateField(),this.updateTokens(),this.updateLinks(),this.updateOverlay(),this.updateRoutes(),this.updateGhosts(),i.pass&&this.flyBall(i.pass.from,i.pass.to),(s||r)&&this.fitPlay()}setUi(e){this.ui=e,this.view&&(this.updateTokens(),this.updateLinks(),this.updateOverlay(),this.updateRoutes(),this.updateGhosts())}updateField(){const e=this.view,t=e.play,i=t?.offense??e.possession,s=i==="home"?"away":"home",r=t?.boardMinY??0,o=`${i}|${r}`;if(o!==this.fieldKey){this.fieldKey=o;const a=e.config.teams[i],c=e.config.teams[s],l=tx({bottomName:a.name,bottomColor:a.colors.primary,topName:c.name,topColor:c.colors.primary,boardMinY:r}),u=this.fieldMesh.material;u.map?.dispose(),u.map=l,u.color.set(16777215),u.needsUpdate=!0}t?(this.setLine(this.losLine,t.los),this.losLine.visible=!0,t.lineToGainY!==null?(this.setLine(this.ltgLine,t.lineToGainY),this.ltgLine.visible=!0):this.ltgLine.visible=!1):(this.losLine.visible=!1,this.ltgLine.visible=!1)}makeLine(e,t){const i=new ii(qe,.3),s=new St({color:e,transparent:!0,opacity:t}),r=new tt(i,s);return r.position.set(qe/2,0,Ge.ring),r}setLine(e,t){e.position.y=t}tokenColors(e){const t=this.teamColors[e];return{primary:new et(t.primary).getHex(),secondary:new et(t.secondary).getHex()}}makeToken(e,t){const i=new Ln,s=this.tokenColors(t),r=new tt(new Pn(me,40),new St({color:s.primary}));r.position.z=Ge.token;const o=new tt(new jn(me,me+.28,48),new St({color:s.secondary,transparent:!0,opacity:.9}));o.position.z=Ge.token+.01;const a=this.defs.get(e),c=vi(String(a?.number??"?"),{color:"#fff",size:64,sub:a?.position??""},2.2);c.position.z=Ge.label;const l=new tt(new ii(.35,.9),new St({color:s.secondary,transparent:!0,opacity:.9}));l.position.set(0,me-.3,Ge.token+.02);const u=new tt(new Pn(.42,16),new St({color:9127187}));u.scale.set(1.5,1,1),u.position.set(.9,-.9,Ge.label+.1),u.visible=!1;const h=vi("",{color:"#fff",size:50},1.6);h.position.set(0,1.9,Ge.label+.2),h.visible=!1;const d=new tt(new Pn(me+.4,16),new St({visible:!1}));return d.userData.id=e,d.position.z=Ge.label+.5,i.add(r,o,c,l,u,h,d),this.scene.add(i),{group:i,base:r,ring:o,label:c,facing:l,ball:u,status:h,hit:d,target:new O,side:t,markerSprites:[]}}updateTokens(){const t=this.view.play,i=new Map;if(t)for(const r of Object.values(t.players))i.set(r.id,{side:r.side,pos:r.pos,f:r});for(const r of this.ui.extraTokens??[])i.has(r.id)||i.set(r.id,{side:r.side,pos:r.pos,f:null});for(const[r,o]of this.tokens)i.has(r)||(this.scene.remove(o.group),this.tokens.delete(r));const s=t?.ball.carrier??null;for(const[r,o]of i){let a=this.tokens.get(r);(!a||a.side!==o.side)&&(a&&this.scene.remove(a.group),a=this.makeToken(r,o.side),this.tokens.set(r,a),a.group.position.set(o.pos.x,o.pos.y,0));const c=this.ui.positions?.[r]??o.pos;a.target.set(c.x,c.y,0),this.ui.positions?.[r]&&a.group.position.set(c.x,c.y,0);const l=o.f,u=!!l&&l.pancakedSlice!==null;if(a.base.material.color.setHex(this.tokenColors(o.side).primary),a.base.material.opacity=u?.45:1,a.base.material.transparent=u,a.label.material.opacity=u?.5:1,a.facing.visible=!u,l){const _=En(l.facing);a.facing.position.set(_.x*(me-.3),_.y*(me-.3),Ge.token+.02),a.facing.rotation.z=-(l.facing*Math.PI)/180}a.ball.visible=r===s;const h=this.ui.highlights[r]??(r===this.ui.selected?"selected":null),d=a.ring.material;h?(d.color.setHex(ax[h]),a.ring.scale.setScalar(h==="selected"||h==="hover"?1.18:1.12),d.opacity=1):(d.color.setHex(this.tokenColors(o.side).secondary),a.ring.scale.setScalar(1),d.opacity=.9);let f="",m="#333";l&&(l.pancakedSlice!==null?(f="DOWN",m="#5a1e1e"):l.s.noAction?(f="UP",m="#4a3a14"):l.s.stranded?(f="STUCK",m="#4a3a14"):l.draggedBy.length>0?(f="DRAG",m="#4a3a14"):t&&l.sidelineSlice!==null&&l.sidelineSlice===t.slice&&(f="SIDELINE",m="#2a3a4a")),f?(mh(a.status,f,{color:"#fff",size:40,bg:m,width:256,height:96,radius:30}),a.status.scale.set(3.2,1.2,1),a.status.visible=!0):a.status.visible=!1,this.updateMarkerSprites(a,r,o.side)}}updateMarkerSprites(e,t,i){const s=this.view?.play,r=this.ui.markerOverride?.[t]??s?.markers[t],o=r?r.length:0;for(;e.markerSprites.length>o;){const l=e.markerSprites.pop();e.group.remove(l)}for(;e.markerSprites.length<o;){const l=vi("",{color:"#fff",size:40,bg:"#222",width:256,height:96,radius:24},.85,2.6);l.position.z=Ge.chip,e.group.add(l),e.markerSprites.push(l)}if(!r)return;const a=i==="offense"?-1:1,c=s?i==="offense"?s.revealed.offense:s.revealed.defense:0;r.forEach((l,u)=>{const h=e.markerSprites[u],d=l.t==="hidden",f=d?"?":ux(l,this.defs),m=s&&s.slice===u+1&&s.slice>0,_=d?"#2a2a2a":dx(l);mh(h,f,{color:d?"#777":"#fff",size:40,bg:_,width:256,height:96,radius:24,border:m?"#f2c14e":null});const v=s?u+1<s.slice&&u+1<=c:!1;h.material.opacity=v?.4:.9,h.position.set(0,a*(me+.75+u*.95),Ge.chip)})}updateLinks(){const t=this.view.play;if(Uo(this.links),!!t){for(const i of t.engagements){const s=t.players[i.defender];if(!s)continue;for(const c of i.blockers){const l=t.players[c];if(!l)continue;const u=_i(l.pos,s.pos,16777215,.35,Ge.link);this.links.add(u)}const r=t.players[i.blockers[0]];if(!r)continue;const o={x:(r.pos.x+s.pos.x)/2,y:(r.pos.y+s.pos.y)/2},a=vi(String(i.dominance),{color:i.dominance>=5?"#ffd98a":"#fff",size:60,bg:i.dominance>=10?"#7a2020":i.dominance>=5?"#5a3a10":"#1b2a35",border:"#dfe7ee"},1.3);a.position.set(o.x,o.y,Ge.label+.6),this.links.add(a)}for(const[i,s]of Object.entries(t.designations)){const r=t.players[i],o=t.players[s];!r||!o||this.links.add(_i(r.pos,o.pos,16098596,.6,Ge.link,!0))}for(const[i,s]of Object.entries(t.assignments)){if(s.t!=="man")continue;const r=t.players[i],o=t.players[s.target];if(!r||!o)continue;const a=t.players[i];a.freeSince!==null&&a.freeSince<=t.slice||this.links.add(_i(r.pos,o.pos,11566335,.5,Ge.link,!0))}if(this.ui.showTrails!==!1)for(const[i,s]of Object.entries(t.trails)){if(s.length<2)continue;const o=t.players[i]?.side==="offense"?10474751:16757681,a=new rn().setFromPoints(s.map(c=>new O(c.x,c.y,Ge.trail)));this.links.add(new la(a,new Zs({color:o,transparent:!0,opacity:.5})))}if(t.ball.loose){const i=new tt(new Pn(.5,16),new St({color:9127187}));i.scale.set(1.5,1,1),i.position.set(t.ball.loose.x,t.ball.loose.y,Ge.label),this.links.add(i);const s=new tt(new jn(5+me-.06,5+me+.06,64),new St({color:16767370,transparent:!0,opacity:.5}));s.position.set(t.ball.loose.x,t.ball.loose.y,Ge.ring),this.links.add(s)}}}updateOverlay(){Uo(this.overlay),Uo(this.zonesGroup);const e=this.view?.play;for(const r of this.ui.zones??[]){const o=r.rect.x1-r.rect.x0,a=r.rect.y1-r.rect.y0,c=hx(r.zone),l=new tt(new ii(o,a),new St({color:c,transparent:!0,opacity:.16}));l.position.set(r.rect.x0+o/2,r.rect.y0+a/2,Ge.zone),this.zonesGroup.add(l);const u=new Gg(new Vg(new ii(o,a)),new Zs({color:c,transparent:!0,opacity:.6}));u.position.copy(l.position),this.zonesGroup.add(u);const h=vi(r.label.toUpperCase(),{color:"#fff",size:36,bg:"rgba(0,0,0,0.35)",width:512,height:96,radius:24},1.6,5.3);h.position.set(r.rect.x0+o/2,r.rect.y1-1.3,Ge.zone+.1),this.zonesGroup.add(h)}for(const r of this.ui.rings??[]){const a=e?.players[r.id]?.pos??this.ui.positions?.[r.id];if(!a)continue;const c=new tt(new jn(r.radius-.05,r.radius+.05,64),new St({color:new et(r.color),transparent:!0,opacity:r.dashed?.35:.6}));c.position.set(a.x,a.y,Ge.ring),this.overlay.add(c)}const t=this.ui.mover;if(t&&e){const r=e.players[t.id];if(r){const o=Math.max(.01,t.spec.allowance),a=new tt(new Pn(o,64),new St({color:15909198,transparent:!0,opacity:.1}));a.position.set(r.pos.x,r.pos.y,Ge.ring);const c=new tt(new jn(o-.06,o+.06,64),new St({color:15909198,transparent:!0,opacity:.8}));c.position.set(r.pos.x,r.pos.y,Ge.ring+.01),this.overlay.add(a,c);const l=t.spec.mode;if(l.t==="fixed"){const u=En(l.angle);this.overlay.add(_i(r.pos,{x:r.pos.x+u.x*o,y:r.pos.y+u.y*o},15909198,.9,Ge.ring+.02))}else if(l.t==="along"){const u=En(l.angle);this.overlay.add(_i({x:r.pos.x-u.x*o,y:r.pos.y-u.y*o},{x:r.pos.x+u.x*o,y:r.pos.y+u.y*o},15909198,.9,Ge.ring+.02))}else if(l.t==="sector"){const u=((l.to-l.from)%360+360)%360||360,h=Math.max(2,Math.ceil(u/6)),d=[new O(r.pos.x,r.pos.y,Ge.ring+.02)];for(let _=0;_<=h;_++){const v=l.from+u*_/h,p=En(v);d.push(new O(r.pos.x+p.x*o,r.pos.y+p.y*o,Ge.ring+.02))}d.push(d[0].clone());const f=new mu(d.map(_=>new ge(_.x,_.y))),m=new tt(new Ra(f),new St({color:15909198,transparent:!0,opacity:.18}));m.position.z=Ge.ring+.015,this.overlay.add(m),this.overlay.add(new la(new rn().setFromPoints(d),new Zs({color:15909198,transparent:!0,opacity:.8})))}}}const i=this.ui.preview;if(i){const r=i.ok?16777215:15688801;this.overlay.add(_i(i.from,i.to,r,.95,Ge.overlay));const o=new tt(new jn(me-.08,me+.08,48),new St({color:r,transparent:!0,opacity:.9}));o.position.set(i.to.x,i.to.y,Ge.overlay),this.overlay.add(o);for(const a of i.marks){const c=a.kind==="hole"?16098596:a.kind==="jump"||a.kind==="clutch"?15688801:a.kind==="engage"?5816957:16777215,l=new tt(new Pn(.45,16),new St({color:c}));l.position.set(a.at.x,a.at.y,Ge.overlay+.05),this.overlay.add(l);const u=a.kind==="hole"?"HOLE":a.kind==="jump"?"JUMP":a.kind==="clutch"?"CLUTCH":a.kind==="engage"?"BLOCK":a.kind==="carrier"?"TACKLE":"STOP",h=vi(u,{color:"#fff",size:40,bg:"rgba(0,0,0,0.6)",width:256,height:96,radius:24},1.1,2.6);h.position.set(a.at.x+1.9,a.at.y+1.1,Ge.overlay+.1),this.overlay.add(h)}}const s=this.ui.passLine;s&&this.overlay.add(_i(s.from,s.to,10474751,.95,Ge.overlay,!0))}updateRoutes(){Uo(this.routesGroup);const e=this.ui.routes??[];for(const t of e){if(t.points.length<2)continue;const i=new et(t.color),s=t.dim?.28:.95,r=Ge.trail+(t.dim?0:.05),o=t.dim?.3:.45;this.routesGroup.add(_h(t.points,o+.22,0,s*.45,r-.01)),this.routesGroup.add(_h(t.points,o,i.getHex(),s,r));for(let d=1;d<t.points.length;d++){const f=t.points[d],m=new tt(new jn(.28,.5,20),new St({color:0,transparent:!0,opacity:s*.6}));m.position.set(f.x,f.y,r+.01),this.routesGroup.add(m);const _=new tt(new Pn(.28,20),new St({color:i.getHex(),transparent:!0,opacity:s}));_.position.set(f.x,f.y,r+.02),this.routesGroup.add(_)}if(t.cutAt){const d=new tt(new jn(.55,.85,24),new St({color:16777215,transparent:!0,opacity:s}));d.position.set(t.cutAt.x,t.cutAt.y,r+.03),this.routesGroup.add(d)}const a=t.points[t.points.length-1];let l=t.points[t.points.length-2],u=a;if(t.tail&&!t.sideline){const d=_i(a,t.tail,i.getHex(),s*.7,r,!0);this.routesGroup.add(d),l=a,u=t.tail}const h=lx(l,u,t.dim?.9:1.3,i.getHex(),s,r+.02);if(h&&this.routesGroup.add(h),t.sideline){const d=vi("SIDELINE",{color:"#fff",size:40,bg:"rgba(0,0,0,0.6)",width:320,height:96,radius:24},1.1,3.3);d.position.set(a.x<qe/2?a.x+2.4:a.x-2.4,a.y-1.7,r+.1),this.routesGroup.add(d)}if(t.label&&!t.dim){const f=64+Math.max(4,t.label.length)*30,m=f/96,_=1.25,v=u.x<7||u.x>qe-7,p=(u.x<qe/2?-1:1)*(v?-1:1),b=Math.max(_*m*.5+.5,Math.min(qe-_*m*.5-.5,u.x+p*(_*m*.5+.9))),S=vi(t.label,{color:"#fff",size:46,bg:cx(t.color,.22),border:t.color,width:f,height:96,radius:28},_,m);S.position.set(b,u.y+.2,Ge.label+.3),this.routesGroup.add(S),this.routesGroup.add(_i({x:b-p*_*m*.5,y:u.y+.2},u,i.getHex(),s*.8,r+.01))}}}updateGhosts(){const e=new Map((this.ui.ghosts??[]).map(t=>[t.key,t]));for(const[t,i]of this.ghostMeshes)e.has(t)||(this.ghostGroup.remove(i),this.ghostMeshes.delete(t));for(const[t,i]of e){let s=this.ghostMeshes.get(t);if(!s){const o=new Ln;o.userData.ghostKey=t;const a=new tt(new Pn(me,32),new St({color:new et(i.color??"#ffffff"),transparent:!0,opacity:.35}));a.position.z=Ge.ghost;const c=new tt(new jn(me-.08,me+.08,32),new St({color:new et(i.color??"#ffffff"),transparent:!0,opacity:.9}));if(c.position.z=Ge.ghost+.01,o.add(a,c),i.label){const l=vi(i.label,{color:"#fff",size:56},1.6);l.position.z=Ge.ghost+.1,o.add(l)}this.ghostGroup.add(o),this.ghostMeshes.set(t,o),s=o}s.position.set(i.pos.x,i.pos.y,0);const r=this.hoverGhost===t;s.scale.setScalar(r?1.15:1)}}flyBall(e,t){this.ballFlight&&this.scene.remove(this.ballFlight.mesh);const i=new tt(new Pn(.55,16),new St({color:9127187}));i.scale.set(1.5,1,1),this.scene.add(i);const s=Math.hypot(t.x-e.x,t.y-e.y);this.ballFlight={from:new O(e.x,e.y,Ge.overlay+1),to:new O(t.x,t.y,Ge.overlay+1),t0:performance.now(),dur:350+s*18,mesh:i}}animate(){const e=performance.now();for(const i of this.tokens.values()){const s=i.group.position,r=i.target,o=r.x-s.x,a=r.y-s.y;if(Math.abs(o)+Math.abs(a)<.002){s.x=r.x,s.y=r.y;continue}s.x+=o*.16,s.y+=a*.16}const t=this.ballFlight;if(t){const i=Math.min(1,(e-t.t0)/t.dur),s=t.from.clone().lerp(t.to,i);t.mesh.position.copy(s);const r=1+Math.sin(Math.PI*i)*1.4;t.mesh.scale.set(1.5*r,r,1),i>=1&&(this.scene.remove(t.mesh),this.ballFlight=null)}}}function _h(n,e,t,i,s){const r=new Ln,o=new St({color:t,transparent:!0,opacity:i,depthWrite:!1});for(let a=1;a<n.length;a++){const c=n[a-1],l=n[a],u=Math.hypot(l.x-c.x,l.y-c.y);if(u<1e-6)continue;const h=new tt(new ii(u,e),o);if(h.position.set((c.x+l.x)/2,(c.y+l.y)/2,s),h.rotation.z=Math.atan2(l.y-c.y,l.x-c.x),r.add(h),a<n.length-1){const d=new tt(new Pn(e/2,16),o);d.position.set(l.x,l.y,s),r.add(d)}}return r}function lx(n,e,t,i,s,r){const o=e.x-n.x,a=e.y-n.y,c=Math.hypot(o,a);if(c<1e-6)return null;const l=o/c,u=a/c,h=-u,d=l,f=new mu([new ge(e.x+l*t*.9,e.y+u*t*.9),new ge(e.x-l*t*.5+h*t*.6,e.y-u*t*.5+d*t*.6),new ge(e.x-l*t*.5-h*t*.6,e.y-u*t*.5-d*t*.6)]),m=new tt(new Ra(f),new St({color:i,transparent:!0,opacity:s,depthWrite:!1}));return m.position.z=r,m}function cx(n,e){const t=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(n);return t?"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+","+e+")":"rgba(0,0,0,"+e+")"}function Uo(n){for(;n.children.length;){const e=n.children.pop();n.remove(e)}}function _i(n,e,t,i,s,r=!1){const o=new rn().setFromPoints([new O(n.x,n.y,s),new O(e.x,e.y,s)]),a=r?new Ev({color:t,transparent:!0,opacity:i,dashSize:.6,gapSize:.4}):new Zs({color:t,transparent:!0,opacity:i}),c=new la(o,a);return r&&c.computeLineDistances(),c}function ux(n,e){switch(n.t){case"filler":return"—";case"read":return`READ ${e.get(n.target)?.number??"?"}`;case"handoff":return`HAND ${e.get(n.target)?.number??"?"}`;case"run":return`${n.lane==="dive"?"DIVE":n.lane==="offtackle"?"OFF-T":"SPRINT"} ${n.side==="left"?"L":"R"}`;case"passblock":return"PASS BLK";case"runblock":return"RUN BLK";case"dir":return n.dir==="up"?"UP":`${n.dir==="left"?"L":"R"} ${n.angle}°`;case"continue":return"CONT";case"delay":return"DELAY";case"cut":return`CUT ${n.cut.toUpperCase()}`;case"man":return"MAN";case"zone":return n.zone==="flat"||n.zone==="curl"?`${n.zone.toUpperCase()} ${n.side==="left"?"L":"R"}`:n.zone.toUpperCase();case"spy":return"SPY";case"blitz":return"BLITZ"}}function dx(n){switch(n.t){case"filler":return"#2a2f35";case"read":case"handoff":return"#1f4a73";case"run":return"#7a4a12";case"passblock":case"runblock":return"#3d4147";case"dir":case"continue":case"delay":return"#245a35";case"cut":return"#7a2a2a";case"man":return"#4a2a7a";case"zone":return"#1f5a6a";case"spy":return"#5a5a1a";case"blitz":return"#7a1f1f"}}function hx(n){switch(n.zone){case"flat":return 5230847;case"curl":return 11566335;case"hook":return 15917390;case"deep":return 5209087}}class fx{s;constructor(e){this.s=e>>>0}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}die(e){return 1+Math.floor(this.next()*e)}}function Rl(n,e){return n===1?!0:n===20?!1:n<=e}function Dc(n,e,t,i=0){const s=t+i,r=n.die(20),o={skill:e,base:t,modifier:i,target:s,roll:r,success:Rl(r,s),successRate:0,rawRate:s-r,perfect:!1,critical:!1};return r===1?(o.confirm=n.die(20),o.perfect=Rl(o.confirm,s)):r===20&&(o.confirm=n.die(20),o.critical=!Rl(o.confirm,s)),o.successRate=o.success?Math.max(0,s-r):0,o}function Ic(n){const e=n.modifier===0?"":n.modifier>0?` +${n.modifier}`:` ${n.modifier}`,t=n.perfect?" PERFECT":n.critical?" CRITICAL FAILURE":n.success?` SR ${n.successRate}`:" fail",i=n.confirm!==void 0?` (confirm ${n.confirm})`:"";return`${n.skill} ${n.base}${e} = ${n.target}: rolled ${n.roll}${i}${t}`}const up={quick:"Quick (breaks within 5 yards)",intermediate:"Intermediate (breaks at 10-12 yards)",deep:"Deep",double:"Double moves",backfield:"Backfield (backs and tight ends)",delayed:"Delayed"},Rt={t:"up"},yt={t:"continue"},Gs={t:"delay"},Ve=n=>({t:"cut",cut:n}),Zn=(n,e)=>({t:"angle",toward:n,angle:e}),We=(n,e)=>({toward:n,angle:e});function $e(n,e,t,i,s,r,o){return o===void 0?{id:n,name:e,group:t,steps:i,break:s,note:r}:{id:n,name:e,tree:o,group:t,steps:i,break:s,note:r}}const Da=[$e("slant","Slant","quick",[Rt,Ve("in")],We("in",45),"Three steps upfield, then break inside at 45 degrees.",2),$e("quick-slant","Quick slant","quick",[Ve("in")],We("in",45),"Break inside at the snap.",2),$e("flat","Flat","quick",[Ve("out")],We("out",80),"Run to the flat at the snap, almost parallel to the line.",1),$e("arrow","Arrow (speed out)","quick",[Rt,Ve("out")],We("out",85),"Three steps, then straight to the sideline.",1),$e("hitch","Hitch","quick",[Rt,yt,Ve("hook")],We("in",170),"Five yards, then turn back to the quarterback.",0),$e("stick","Stick","quick",[Rt,Ve("out")],We("out",100),"A tight end's hitch: three steps, then turn outside and sit down.",3),$e("drag","Drag (shallow cross)","quick",[Ve("in")],We("in",80),"Cross the field just beyond the line at the snap.",4),$e("shallow","Shallow","quick",[Rt,Ve("in")],We("in",80),"A step upfield, then across the field under the linebackers.",4),$e("quick-out","Quick out","intermediate",[Rt,yt,Ve("out")],We("out",90),"Five to seven yards, then square out to the sideline.",3),$e("out","Out","intermediate",[Rt,yt,yt,Ve("out")],We("out",90),"Ten to twelve yards, then square out to the sideline.",3),$e("in","In (square-in)","intermediate",[Rt,yt,Ve("in")],We("in",90),"Five to seven yards, then square in across the field.",6),$e("dig","Dig","intermediate",[Rt,yt,yt,Ve("in")],We("in",90),"Ten to twelve yards, then square in across the field.",6),$e("curl","Curl","intermediate",[Rt,yt,yt,Ve("hook")],We("in",165),"Ten to twelve yards, then turn back towards the quarterback.",0),$e("comeback","Comeback","intermediate",[Rt,yt,yt,Ve("hook")],We("out",150),"Twelve yards, then come back towards the sideline.",5),$e("cross","Deep cross (over)","intermediate",[Rt,yt,Ve("in")],We("in",60),"Seven yards, then cross the field on a diagonal.",6),$e("sail","Sail","intermediate",[Rt,yt,yt,Ve("out")],We("out",60),"Twelve yards, then break to the sideline on a diagonal.",7),$e("corner","Corner","intermediate",[Rt,yt,Ve("out")],We("out",45),"Seven yards, then break for the corner at 45 degrees.",7),$e("flag","Flag (deep corner)","deep",[Rt,yt,yt,Ve("out")],We("out",40),"Twelve yards, then break for the pylon.",7),$e("post","Post","deep",[Rt,yt,yt,Ve("in")],We("in",40),"Twelve yards, then break for the goal post.",8),$e("skinny-post","Skinny post","deep",[Rt,yt,yt,Ve("in")],We("in",25),"Twelve yards, then a shallow break inside; stays in the seam.",8),$e("go","Go (fly)","deep",[Rt,Ve("fly")],We("in",0),"Three steps, then burn straight upfield.",9),$e("streak","Streak","deep",[Ve("fly")],We("in",0),"Straight upfield from the snap.",9),$e("fade","Fade","deep",[Zn("out",25),Ve("fly")],We("in",0),"An outside release, then straight up the sideline.",9),$e("seam","Seam","deep",[Zn("in",15),Ve("fly")],We("in",0),"A slight inside release, then straight up the seam between the zones.",9),$e("deep-post","Deep post","deep",[Rt,yt,yt,Ve("in")],We("in",30),"Fifteen yards, then bend to the post.",8),$e("sluggo","Sluggo (slant and go)","double",[Zn("in",45),Ve("fly")],We("in",0),"Sell the slant, then take off upfield.",9),$e("out-and-up","Out and up","double",[Zn("out",60),Ve("fly")],We("in",0),"Sell the out, then take off up the sideline.",9),$e("post-corner","Post-corner","double",[Zn("in",30),yt,Ve("out")],We("out",45),"Sell the post, then break for the corner.",7),$e("whip","Whip (pivot)","double",[Zn("in",50),Ve("out")],We("out",95),"Sell the slant, then pivot back to the outside.",2),$e("hitch-and-go","Hitch and go","double",[Rt,yt,Ve("fly")],We("in",0),"Sell the hitch at five yards, then go.",9),$e("rb-flat","Back flat","backfield",[Zn("out",75),Ve("out")],We("out",85),"Out of the backfield to the flat.",1),$e("swing","Swing","backfield",[Zn("out",110),Ve("out")],We("out",75),"Swing wide behind the line, then turn up the sideline.",1),$e("angle","Angle (Texas)","backfield",[Zn("out",50),Ve("in")],We("in",60),"Start to the flat, then angle back inside behind the linebackers.",6),$e("wheel","Wheel","backfield",[Zn("out",80),yt,Ve("fly")],We("in",0),"Run to the flat, then wheel up the sideline.",9),$e("check-release","Check release","backfield",[Gs,Ve("out")],We("out",85),"Look for a blitzer first, then release to the flat.",1),$e("te-seam","Tight end seam","backfield",[Rt,Ve("fly")],We("in",0),"A tight end straight up the seam.",9),$e("te-cross","Tight end cross","backfield",[Rt,Ve("in")],We("in",65),"A tight end across the formation behind the linebackers.",6),$e("screen","Screen","delayed",[Gs,Ve("out")],We("out",95),"Wait behind the line, then slip outside for the screen pass.",1),$e("delay-in","Delay in","delayed",[Gs,Ve("in")],We("in",70),"Wait a count, then slip inside across the middle.",6),$e("delay-out","Delay out","delayed",[Gs,Rt,Ve("out")],We("out",90),"Wait a count, then release and square out.",3),$e("delay-seam","Delay seam","delayed",[Gs,Gs,Ve("fly")],We("in",0),"Chip for two counts, then release up the seam.",9)];function _s(n){return Da.find(e=>e.id===n)}function Ia(n){return n<=It?"left":"right"}function dp(n,e){return n==="out"?e:e==="left"?"right":"left"}function pa(n,e){return n.steps.map(t=>{switch(t.t){case"up":return{t:"dir",dir:"up"};case"angle":return{t:"dir",dir:dp(t.toward,e),angle:t.angle};case"continue":return{t:"continue"};case"delay":return{t:"delay"};case"cut":return{t:"cut",cut:t.cut}}})}function hp(n,e){return pa(n,Ia(e))}function px(n,e){return JSON.stringify(n)===JSON.stringify(e)}function Wr(n,e,t){const i=(n??[]).filter(o=>o.t!=="filler");if(i.length===0||i[i.length-1].t!=="cut")return null;const s=Ia(e),r=o=>{const a=pa(o,s);return a.length===i.length&&a.every((c,l)=>px(c,i[l]))};if(t){const o=_s(t);if(o&&r(o))return o}return Da.find(r)??null}function mx(n){switch(n){case"fly":return{toward:"in",angle:0};case"in":return{toward:"in",angle:60};case"out":return{toward:"out",angle:60};case"hook":return{toward:"in",angle:160}}}function gx(n,e){const t=Math.abs(e.angle);switch(n){case"fly":return t<=bi;case"hook":return t>=Si;case"in":return e.toward==="in"&&t>=bi&&t<=Si;case"out":return e.toward==="out"&&t>=bi&&t<=Si}}function vx(n,e){const t=Ia(e);return dp(n.toward,t)==="right"?n.angle:-n.angle}function _x(n,e,t,i={}){const s=xt(t,oi),r=[{...n}],o=[];let a={...n},c=null,l=null,u=!1,h=!1;const d=i.boardMinY??0,f=v=>{const p=Math.max(me,Math.min(qe-me,v.x)),b=Math.max(d+me,Math.min(Yt-me,v.y));return{p:{x:p,y:b},stopped:p!==v.x}},m=(v,p,b,S)=>{if(b<=0)return;const x=En(p),A={x:a.x+x.x*b,y:a.y+x.y*b},w=f(A);w.stopped&&(h=!0),o.push({slice:v,from:a,to:w.p,marker:S}),a=w.p,r.push(a)};for(let v=0;v<s.length;v++){const p=v+1,b=s[v],S=p===1?e/2:e;if(h)break;if(u){b.t==="filler"&&c!==null&&m(p,c,S,b);continue}switch(b.t){case"dir":c=b.dir==="up"?0:b.dir==="left"?-b.angle:b.angle,m(p,c,S,b);break;case"continue":c!==null&&m(p,c,S,b);break;case"delay":m(p,c??0,Math.min(ep,S),b);break;case"cut":{const x=i.break&&gx(b.cut,i.break)?i.break:mx(b.cut);l={...a},c=vx(x,a.x),u=!0,m(p,c,S,b);break}case"run":{const x=i.laneTarget?i.laneTarget(b.side,b.lane):{x:a.x+(b.side==="left"?-4:4)*(b.lane==="dive"?1:b.lane==="offtackle"?2:3),y:a.y+8};c=Math.atan2(x.x-a.x,x.y-a.y)*180/Math.PI,m(p,c,S,b),u=!0;break}}}let _=null;if(c!==null&&!h&&o.length>0&&(u||s[s.length-1].t==="continue"||s[s.length-1].t==="dir")){const v=En(c);_=f({x:a.x+v.x*e,y:a.y+v.y*e}).p}return{points:r,slices:o,cutAt:l,tail:_,sideline:h}}function fp(n,e,t){const i=n.length;if(i===0)return{x:It+(e==="left"?-4:4),y:0};const s=Math.floor(i/2),r=l=>n[Math.max(0,Math.min(i-1,l))],o=r(s),a=r(e==="left"?s-1:s+1),c=r(e==="left"?s-2:s+2);switch(t){case"dive":return{x:(o.x+a.x)/2,y:(o.y+a.y)/2};case"offtackle":return{x:(a.x+c.x)/2,y:(a.y+c.y)/2};case"sprint":{const l=e==="left"?n[0]:n[i-1];return{x:l.x+(e==="left"?-Ze:Ze),y:l.y}}}}class bu{state;play;rng;defs;constructor(e,t,i){this.state=e,this.play=t,this.rng=i,this.defs=new Map;for(const s of["home","away"]){const r=e.config.teams[s];for(const o of[...r.offense,...r.defense])this.defs.set(o.id,o)}}def(e){const t=this.defs.get(e);if(!t)throw new Cl(`unknown player ${e}`);return t}f(e){const t=this.play.players[e];if(!t)throw new Cl(`${e} is not on the field`);return t}has(e){return e in this.play.players}name(e){const t=this.def(e);return`${t.position} ${t.name} (#${t.number})`}short(e){const t=this.def(e);return`${t.position} #${t.number}`}skill(e,t){return this.def(e).skills[t]}team(e){return this.state.config.teams[e]}coachOf(e){return e==="offense"?this.play.offense:this.play.defense}sideOf(e){return this.f(e).side}coachOfPlayer(e){return this.coachOf(this.sideOf(e))}onField(e){return Object.values(this.play.players).filter(t=>t.side===e)}offensePlayers(){return this.onField("offense")}defensePlayers(){return this.onField("defense")}qb(){const e=this.offensePlayers().find(t=>this.def(t.id).position==="QB");if(!e)throw new Cl("no quarterback on the field");return e}marker(e,t=this.play.slice){const i=this.sideOf(e)==="offense"?oi:dr,s=xt(this.play.markers[e],i);return t>i?{t:"filler"}:s[t-1]}offMarker(e,t=this.play.slice){return this.marker(e,t)}blockKind(e,t=this.play.slice){const i=this.effectiveOffMarker(e,t);return i.t==="passblock"?"pass":i.t==="runblock"?"run":null}effectiveOffMarker(e,t=this.play.slice){if(t<=oi)return this.offMarker(e,t);const i=xt(this.play.markers[e],oi);for(let s=i.length-1;s>=0;s--)if(i[s].t!=="filler")return i[s];return{t:"filler"}}effectiveCarrier(){return this.play.ball.apparent??this.play.ball.carrier}handoffPending(){const e=this.play.handoff;return!!e&&!e.done&&!e.fumbled&&e.slice===this.play.slice}effectiveInPlay(){return this.play.ball.inPlay||this.play.ball.apparent!==null||this.handoffPending()}isCarrier(e){return this.effectiveCarrier()===e}ballNowInPlay(){const e=this.play.ball;e.inPlay||(e.inPlay=!0,e.inPlaySlice=this.play.slice),e.apparent=null}fakeHandoff(e){this.play.ball.apparent=e}revealFake(){this.play.ball.apparent=null}engagementOf(e){return this.play.engagements.find(t=>t.defender===e||t.blockers.includes(e))}isEngaged(e){return this.engagementOf(e)!==void 0}engagedSet(){const e=new Set;for(const t of this.play.engagements){e.add(t.defender);for(const i of t.blockers)e.add(i)}return e}removeEngagement(e){this.play.engagements=this.play.engagements.filter(t=>t.id!==e.id)}moveCtx(){return{players:this.play.players,engaged:this.engagedSet(),boardMinY:this.play.boardMinY}}isLying(e){return this.f(e).pancakedSlice!==null}canAct(e){const t=this.f(e);return t.pancakedSlice===null&&!t.s.noAction}markerAssignment(e){return this.play.assignments[e]??{t:"none"}}assignment(e){const t=this.markerAssignment(e),i=this.f(e);return i.freeSince!==null&&i.freeSince<=this.play.slice?{t:"free"}:this.effectiveInPlay()&&t.t!=="man"?{t:"free"}:t}setAssignment(e,t){this.play.assignments[e]=t}freeDefender(e,t){const i=this.f(e);i.freeSince===null&&(i.freeSince=this.play.slice,this.log(`${this.short(e)} becomes a free defender (${t}).`,"event"))}isFreeDefender(e){return this.assignment(e).t==="free"}isBlitzer(e){return this.assignment(e).t==="blitz"}allowance(e,t={}){const i=this.f(e);if(i.pancakedSlice!==null||i.s.noAction||i.s.noMove)return 0;let s=this.skill(e,"speed");return this.play.slice===1?s/=2:t.zone&&(s-=wS),s-=i.s.speedPenalty,i.s.halved&&(s/=2),Math.max(0,s)}gap(e,t){return ht(this.f(e).pos,this.f(t).pos)-Ze}defendersWithin(e,t){const i=this.f(e);return this.defensePlayers().filter(s=>s.pancakedSlice===null&&ht(s.pos,i.pos)-Ze<=t+1e-6)}sidelineGap(e){return Math.min(e.x,qe-e.x)-me}zoneRect(e){const t=this.play.los,i=Yt;switch(e.zone){case"flat":return e.side==="left"?{x0:0,y0:t,x1:It-fa,y1:t+ua}:{x0:It+fa,y0:t,x1:qe,y1:t+ua};case"curl":return e.side==="left"?{x0:0,y0:t+da,x1:It,y1:Math.min(i,t+ha)}:{x0:It,y0:t+da,x1:qe,y1:Math.min(i,t+ha)};case"hook":return{x0:0,y0:t+ip,x1:qe,y1:Math.min(i,t+sp)};case"deep":return{x0:0,y0:Math.min(i-Ze,t+rp),x1:qe,y1:i}}}inZone(e,t){const i=this.zoneRect(t);return e.x>=i.x0-1e-6&&e.x<=i.x1+1e-6&&e.y>=i.y0-1e-6&&e.y<=i.y1+1e-6}nearestInZone(e,t){const i=this.zoneRect(t);return{x:sr(e.x,i.x0+me,i.x1-me),y:sr(e.y,i.y0+me,Math.max(i.y0+me,i.y1-me))}}zoneLabel(e){return e.zone==="flat"||e.zone==="curl"?`${e.zone} ${e.side}`:e.zone}log(e,t="info",i={}){const s=this.state.log.length+1;this.state.log.push({n:s,text:e,kind:t,slice:this.play.slice,...i})}roll(e,t,i=0,s){const r=Dc(this.rng,s??t.toUpperCase(),this.skill(e,t),i);return this.log(`${this.short(e)} ${Ic(r)}`,"roll",{roll:r}),r}rollValue(e,t,i,s=0){const r=Dc(this.rng,t,i,s);return this.log(`${this.short(e)} ${Ic(r)}`,"roll",{roll:r}),r}*ask(e,t){const i=Array.isArray(t)?t:[t];let s=e;for(;;){const r=yield s;if(i.includes(r.kind))return r;s={...e,error:`Expected ${i.join(" or ")}, got ${r.kind}.`}}}startSlice(){const e=this.play;e.slice+=1,e.trails={},e.designations={};for(const t of Object.values(e.players))t.s,t.s=lp(),t.halvedNext&&(t.s.halved=!0,t.halvedNext=!1),t.nextSlicePenalty>0&&(t.s.speedPenalty+=t.nextSlicePenalty,t.nextSlicePenalty=0),t.pancakedSlice!==null&&t.pancakedSlice<e.slice&&(this.skill(t.id,"agility")>=DS?(t.pancakedSlice=null,t.s.speedPenalty+=ih,this.log(`${this.short(t.id)} gets back on his feet (-${ih} movement).`,"event")):(t.pancakedSlice=null,t.s.noAction=!0,t.s.noMove=!0,this.log(`${this.short(t.id)} gets up slowly and can do nothing this timeslice.`,"event")));if(e.ball.inPlay&&e.ball.inPlaySlice!==null&&e.slice>=e.ball.inPlaySlice+2)for(const t of this.defensePlayers())this.markerAssignment(t.id).t==="man"&&t.freeSince===null&&(t.freeSince=e.slice);for(const t of e.engagements)t.mayDisengage=t.dominance>=1||t.lastResult!==null&&t.lastResult>0,t.blockersWonLast=t.lastResult!==null&&t.lastResult<0}setPos(e,t,i){const s=this.f(e),r=s.pos;s.pos={x:Math.round(t.x*1e3)/1e3,y:Math.round(t.y*1e3)/1e3},i!==void 0?s.facing=i:ht(r,t)>1e-6&&(s.facing=Tn(ot(t,r))),(this.play.trails[e]??=[r]).push(s.pos)}faceEachOther(e,t){const i=this.f(e),s=this.f(t);i.facing=Tn(ot(s.pos,i.pos)),s.facing=Tn(ot(i.pos,s.pos))}static inSector(e,t,i){const s=((i-t)%360+360)%360,r=((e-t)%360+360)%360;return s===0?Math.abs(ix(t,e))<1e-6:r<=s+1e-6}towardsCenterSign(e){return e.x<=It?1:-1}runLaneTarget(e,t){const i=this.offensePlayers().filter(s=>this.def(s.id).position==="OL").sort((s,r)=>s.pos.x-r.pos.x).map(s=>s.pos);return fp(i,e,t)}dirTo(e,t){return Tn(ot(t,e))}pointAt(e,t,i){return ai(e,{x:En(t).x*i,y:En(t).y*i})}}function yx(n,e,t){return t?Ze:e.side===n?me:me*1.5}function yh(n,e,t,i){const s=ot(e,n),r=ot(n,t),o=Mn(s,s),a=2*Mn(r,s),c=Mn(r,r)-i*i;if(o<en)return c<0?[0,1]:null;const l=a*a-4*o*c;if(l<=0)return null;const u=Math.sqrt(l),h=(-a-u)/(2*o),d=(-a+u)/(2*o);return d<0||h>1?null:[Math.max(0,h),Math.min(1,d)]}function pp(n,e,t,i){const s=n.players[e],r=s.pos,o=new Set(i.ignore??[]),a=new Set(i.passThrough??[]);let c=ot(t,r),l=_u(c);const u={from:r,to:r,requested:t,distance:0,clipped:null,boundary:null,events:[]};if(l<en||i.allowance<=en)return l>en&&(u.clipped={reason:"allowance"}),u;c=Ii(c,1/l);let h=l;h>i.allowance+en&&(h=i.allowance,u.clipped={reason:"allowance"});const d=me,f=qe-me,m=n.boardMinY+me,_=Yt-me,v=(F,k,B,z)=>{if(k>en){const W=(z-F)/k;if(W<h)return{L:Math.max(0,W),which:"hi"}}else if(k<-en){const W=(B-F)/k;if(W<h)return{L:Math.max(0,W),which:"lo"}}return null},p=v(r.x,c.x,d,f);p&&(h=p.L,u.clipped={reason:"bounds"},u.boundary=p.which==="lo"?"left":"right");const b=v(r.y,c.y,m,_);if(b&&(h=b.L,u.clipped={reason:"bounds"},u.boundary=b.which==="lo"?"back":"end"),i.maxY!==void 0&&c.y>en){const F=(i.maxY-me-r.y)/c.y;F<h&&(h=Math.max(0,F),u.clipped={reason:"line"},u.boundary=null)}if(i.stopY!==void 0&&c.y>en){const F=(i.stopY-r.y)/c.y;F<h&&F>=0&&(h=F,u.clipped={reason:"stopY"},u.boundary=null)}if(h<=en)return u.to=r,u;let S=ai(r,Ii(c,h));const x=Object.values(n.players).filter(F=>F.id!==e&&!o.has(F.id)),A=F=>n.engaged.has(F.id)&&!a.has(F.id),w=[];let P=1,I;const T=new Set;for(const F of x){const k=yx(s.side,F,A(F)),B=yh(r,S,F.pos,k-1e-5);if(!B)continue;const[z]=B;if(!(z>=P)){if(A(F)){const W=gh(r,S,F.pos),J=sr(Mn(ot(F.pos,r),ot(S,r))/Math.max(en,Mn(ot(S,r),ot(S,r))),0,1);let X=null,le=1/0;for(const ve of x){if(ve.id===F.id||!A(ve))continue;const Be=gh(r,S,ve.pos);if(W*Be>=0)continue;const Pe=ht(F.pos,ve.pos)-Ze;if(Pe<pS-1e-6||Pe>=Ze-1e-6)continue;const at=sr(Mn(ot(ve.pos,r),ot(S,r))/Math.max(en,Mn(ot(S,r),ot(S,r))),0,1);Math.abs(at-J)*h>Ze+Pe||Pe<le&&(le=Pe,X=ve)}if(X){const ve=[F.id,X.id].sort().join("|");if(!T.has(ve)){T.add(ve);const Be=Al(r,S,X.pos,Ze-1e-5),Pe=Math.min(z,Be??1);w.push({t:Pe,at:wl(r,S,Pe),kind:"hole",pair:[F.id,X.id],gap:le})}continue}const fe=Math.max(0,Al(r,S,F.pos,Ze)??0);fe<P&&(P=fe,I=F.id);continue}z<P&&(P=z,I=F.id)}}I!==void 0&&(u.clipped={reason:"blocked",by:I});const E=[];for(const F of x){const k=yh(r,S,F.pos,Ze-1e-5);k&&E.push(k)}let D=!1;for(let F=0;F<50;F++){const k=E.find(([B,z])=>P>B&&P<z);if(!k)break;P=k[0],D=!0}D&&u.clipped?.reason!=="blocked"&&(u.clipped={reason:"overlap"}),D&&(u.boundary=null),u.events=w.filter(F=>F.t<=P+1e-9).sort((F,k)=>F.t-k.t);for(const F of i.watches??[]){const k=n.players[F.id];if(!k||k.id===e)continue;const B=Al(r,S,k.pos,F.reach);B!==null&&B<=P+1e-9&&u.events.push({t:B,at:wl(r,S,B),kind:"watch",id:F.id,tag:F.tag})}return u.events.sort((F,k)=>F.t-k.t),S=wl(r,S,P),u.to=S,u.distance=ht(r,S),u}function $r(n,e,t=[]){const i=new Set(t);if(e.x<me-1e-6||e.x>qe-me+1e-6||e.y<n.boardMinY+me-1e-6||e.y>Yt-me+1e-6)return!1;for(const s of Object.values(n.players))if(!i.has(s.id)&&ht(s.pos,e)<Ze-1e-5)return!1;return!0}function Na(n,e,t,i,s=[]){for(let r=0;r<=36;r++)for(const o of r===0?[1]:[1,-1]){const a=t+o*r*5,c=ai(e,Ii(En(a),Ze));if($r(n,c,[i,...s]))return c}return null}function bx(n,e,t){const i=n.players[e],s=n.players[t];return Na(n,s.pos,Tn(ot(i.pos,s.pos)),e)}function Sx(n,e){return ht(n.pos,e.pos)-Ze}function mp(n,e,t,i,s){n.setPos(e,s);const r=n.f(e);r.s.moved=!0,r.s.engagedThisSlice=!0,n.faceEachOther(e,t),i==="run"&&n.markerAssignment(t).t==="man"&&n.freeDefender(t,"run blocked");let o=n.play.engagements.find(a=>a.defender===t);return o?(o.blockers.includes(e)||o.blockers.push(e),n.log(`${n.short(e)} joins the block on ${n.short(t)}: double team.`,"event"),o):(o={id:n.play.nextEngagementId++,defender:t,blockers:[e],kind:i,dominance:tp,formedSlice:n.play.slice,lastResult:null,mayDisengage:!1,blockersWonLast:!1,resolvedSlice:0},n.play.engagements.push(o),n.log(`${n.short(e)} ${i} blocks ${n.short(t)}.`,"event"),o)}function bh(n,e,t){const i=n.f(e);i.pancakedSlice=n.play.slice,i.s.noAction=!0,i.s.noMove=!0,i.s.clutchEligible=!1,delete n.play.designations[e],n.log(`${n.short(e)} is PANCAKED by ${n.short(t)}!`,"event")}function*Sh(n,e,t){const i=n.f(e.defender),s=n.f(t),r=n.play.defense,o=Tn(ot(s.pos,i.pos));for(;;){const a=yield*n.ask({kind:"breakThrough",coach:r,defender:e.defender,blocker:t},"breakThrough"),c=Number.isFinite(a.angle)?a.angle:o,l=Na(n.moveCtx(),s.pos,c,e.defender);if(!l)break;n.setPos(e.defender,l);break}n.removeEngagement(e),i.s.moved=!0,i.s.brokeThrough=!0,i.s.clutchEligible=!0,i.facing=Tn(ot(n.qb().pos,i.pos));for(const a of e.blockers)n.f(a).cannotEngageUntil[e.defender]=n.play.slice+2;n.log(`${n.short(e.defender)} has BROKEN THROUGH the block of ${n.short(t)}.`,"event")}function gp(n,e,t,i,s,r,o,a){const c=n.f(e),l=n.f(t),u=Lc(ot(l.pos,c.pos)),h=n.moveCtx(),d=[e,t,...o],f=(p,b)=>{let S=ai(l.pos,Ii(u,p));const x=r||Math.abs(b)>1e-9?ai(c.pos,Ii(u,p)):c.pos;return S=rx(S,x,b),!$r(h,S,d)||!$r(h,x,d)||ht(S,x)<Ze-1e-6?null:{w:x,l:S}};let m=Math.max(0,Math.min(mS,i)),_=Math.max(-eh,Math.min(eh,s)),v=f(m,_);for(let p=9;p>=0&&!v;p--)v=f(m*p/10,_*p/10),v&&(m=m*p/10,_=_*p/10);if(!v)return{push:0,turn:0};n.setPos(t,v.l),n.setPos(e,v.w),n.faceEachOther(e,t);for(const p of o){const b=n.f(p),S=n.f(a);if(ht(b.pos,S.pos)>Ze+.05){const x=Na(h,S.pos,Tn(ot(b.pos,S.pos)),p,[e,t]);x&&n.setPos(p,x)}}return{push:Math.round(m*100)/100,turn:Math.round(_)}}function*vp(n,e){const t=n.play;e.resolvedSlice=t.slice;const i=n.blockKind(e.blockers[0])??e.kind;e.kind=i;let s=0,r=!1;for(const f of e.blockers){if(!n.canAct(f)){n.log(`${n.short(f)} is still getting up and cannot block properly (successrate 0).`,"event");continue}const m=n.blockKind(f)??e.kind,_=n.roll(f,m==="pass"?"passblock":"runblock");s+=_.successRate,_.perfect&&(r=!0)}const o=n.f(e.defender);let a=0,c=!1;if(n.canAct(e.defender)){const f=n.roll(e.defender,"passrush",0,"RUSH");a=f.successRate,c=f.perfect}else n.log(`${n.short(e.defender)} is still getting up and cannot rush (successrate 0).`,"event");const l={perfect:c};o.s.rushPerfect=l.perfect;const u=a-s;e.lastResult=u,e.dominance=Math.max(tp,Math.min(IS,e.dominance+u)),n.log(`${e.kind==="pass"?"Pass":"Run"} block ${e.blockers.map(f=>n.short(f)).join(" + ")} vs ${n.short(e.defender)}: timeslice result ${u>=0?"+":""}${u}, dominance ${e.dominance}.`,"event");let h,d;if(e.kind==="pass"?(h=u<=-sh||r,d=u>=sh||l.perfect):(h=u<=-10||r,d=u>=OS||l.perfect),h&&d&&(h=d=!1,n.log("Both sides rolled a PERFECT: the pancakes cancel out.","event")),h){bh(n,e.defender,e.blockers[0]),n.removeEngagement(e);return}if(d){let f=e.blockers[0];if(e.blockers.length>1){const m=yield*n.ask({kind:"pancakeChoice",coach:t.defense,defender:e.defender,blockers:[...e.blockers]},"pancakeChoice");e.blockers.includes(m.blocker)&&(f=m.blocker)}bh(n,f,e.defender),yield*Sh(n,e,f);return}if(e.dominance>=US){yield*Sh(n,e,e.blockers[0]);return}if((e.dominance>=NS||e.kind==="run"&&u>=FS)&&(o.s.clutchEligible=!0),u!==0){const f=u>0,m=f?t.defense:t.offense,_=f?[e.defender]:[...e.blockers],v=f?e.blockers[0]:e.defender,p=yield*n.ask({kind:"pushAround",coach:m,winner:_[0],loser:v,blockers:[...e.blockers]},"pushAround"),b=p.anchor&&_.includes(p.anchor)?p.anchor:_[0],S=f?v:e.defender;if(Math.abs(p.push)>1e-9||Math.abs(p.turn)>1e-9){const x=f?e.blockers.slice(1):e.blockers.filter(w=>w!==b),A=gp(n,b,S,p.push,p.turn,p.follow,x,e.defender);(A.push>0||A.turn!==0)&&n.log(`${n.short(b)} pushes ${n.short(S)} around: ${A.push>0?`${A.push} cm back`:""}${A.push>0&&A.turn!==0?", ":""}${A.turn!==0?`turned ${A.turn}°`:""}.`,"event")}}}function Nc(n,e,t,i){const s=n.f(t),r=n.f(e),o=Tn(ot(r.pos,s.pos)),a=n.moveCtx();for(let c=0;c<=36;c++)for(const l of c===0?[1]:[1,-1]){const u=o+l*c*5,h=ai(s.pos,Ii(En(u),Ze));if($r(a,h,[e])&&!(i!==void 0&&h.y>i-me+1e-6))return h}return null}function ma(n,e,t){const i=n.f(e),s=n.f(t);if(!n.canAct(e))return{ok:!1,reason:"The blocker is down."};if(n.isLying(t))return{ok:!1,reason:"The defender is lying on the ground."};if(n.isEngaged(e))return{ok:!1,reason:"The blocker is already engaged."};if((i.cannotEngageUntil[t]??0)>n.play.slice)return{ok:!1,reason:"The defender broke through this blocker: he may not engage him this timeslice."};if(s.s.disengagedFrom.includes(e))return{ok:!1,reason:"The defender disengaged from this blocker this timeslice."};const r=n.blockKind(e);if(!r)return{ok:!1,reason:"The player has no blocking marker this timeslice."};if(r==="run"&&!n.effectiveInPlay())return{ok:!1,reason:"Run blocking is only allowed once the ball is in play."};if(n.isCarrier(t))return{ok:!1,reason:"Cannot block the ball carrier."};const o=n.play.engagements.find(a=>a.defender===t);return o&&o.blockers.length>=2?{ok:!1,reason:"At most two blockers may double team a defender."}:{ok:!0}}function xx(n,e){switch(e.kind){case"tackled":return`Tackled by ${n.short(e.by)}.`;case"sacked":return`Sacked by ${n.short(e.by)}!`;case"outOfBounds":return"Out of bounds.";case"incomplete":return"Incomplete pass.";case"interception":return`Intercepted by ${n.short(e.by)}${e.touchdown?" and returned for a touchdown!":e.returnYards>0?`, returned ${e.returnYards} yards.`:"."}`;case"fumbleLost":return`Fumble recovered by ${n.short(e.by)}${e.touchdown?" and returned for a touchdown!":e.returnYards>0?`, returned ${e.returnYards} yards.`:"."}`;case"touchdown":return`TOUCHDOWN ${n.short(e.by)}!`;case"safety":return"SAFETY!";case"fakeTackled":return"The fake runner is tackled; he never had the ball."}}function zn(n,e,t){const i=n.play;if(i.result)return;let s=e;(s.kind==="tackled"||s.kind==="sacked"||s.kind==="outOfBounds"||s.kind==="touchdown")&&s.kind!=="touchdown"&&t>=Yn&&(s={kind:"touchdown",by:i.ball.carrier??""}),(s.kind==="tackled"||s.kind==="sacked"||s.kind==="outOfBounds")&&t<Bn&&i.boardMinY<Bn&&(s={kind:"safety"});const o=s.kind==="interception"||s.kind==="fumbleLost",a=s.kind==="touchdown",c=s.kind==="incomplete"&&!i.dpi?i.los:sr(t,i.boardMinY,Yn);i.result={ending:s,spotY:c,yards:Math.round(op(c-i.los)*10)/10,turnover:o,autoFirstDown:i.dpi&&!o,scored:a},i.phase="over",n.log(xx(n,s),s.kind==="touchdown"||s.kind==="safety"?"score":"event"),a&&n.log(`${Yo} points.`,"score")}function _p(n,e,t){const i=n.f(e),s=n.f(t);if(ht(i.pos,s.pos)<=Ze+.05){n.faceEachOther(e,t);return}const r=bx(n.moveCtx(),e,t);r&&n.setPos(e,r),n.faceEachOther(e,t)}function*jr(n,e,t,i={}){const s=n.play,r=n.f(e),o=n.f(t);r.s.tackled=!0,_p(n,e,t);const a=s.ball.apparent===t&&s.ball.carrier!==t;a&&(s.ball.apparent=null,n.log(`${n.short(e)} hits ${n.short(t)}: he does not have the ball! The quarterback kept it.`,"event"));let c=0;const l=[];i.cleanShot&&(c+=MS,l.push("clean shot +5"));let u=!1;if(i.allowOutOfBounds!==!1&&n.sidelineGap(o.pos)<=fS+1e-6&&!a&&(yield*n.ask({kind:"tackleStyle",coach:s.defense,tackler:e,carrier:t},"tackleStyle")).style==="outOfBounds"&&(c+=ES,u=!0,l.push("out of bounds +5")),i.clutch){const m=Math.ceil(n.skill(e,"tackle")/2);c-=m,l.push(`clutch -${m}`)}const h=a?0:n.skill(t,"running"),d=n.roll(e,"tackle",c,l.length?`TACKLE (${l.join(", ")})`:"TACKLE");if(a)return d.success&&d.roll<d.target-h&&(o.pancakedSlice=s.slice,o.s.noAction=!0,o.s.noMove=!0,n.log(`${n.short(t)} is brought down anyway.`,"event")),"fakeRevealed";if(d.perfect&&!u)return n.log(`${n.short(e)} rolls a PERFECT tackle: ${n.short(t)} FUMBLES!`,"event"),ga(n,o.pos),"fumble";if(d.success&&d.roll<d.target-h){const m=n.def(t).position==="QB"&&!s.ball.inPlay&&o.pos.y<s.los?{kind:"sacked",by:e}:{kind:"tackled",by:e};return zn(n,u?{kind:"outOfBounds"}:m,o.pos.y),"down"}if(d.success)return o.draggedBy.includes(e)||o.draggedBy.push(e),o.halvedNext=!0,n.log(`${n.short(t)} drags ${n.short(e)} along: stopped in his tracks.`,"event"),"dragging";n.log(`${n.short(e)} MISSES the tackle on ${n.short(t)}.`,"event"),r.halvedNext=!0,o.cannotTackleUntil[e]=s.slice+2;const f=yield*n.ask({kind:"missedTackle",coach:s.offense,carrier:t,tackler:e},"missedTackle");if(f.angle!==null&&Number.isFinite(f.angle)){const m=Na(n.moveCtx(),r.pos,f.angle,t);m&&m.y<=r.pos.y+1e-6&&(n.setPos(t,m),n.log(`${n.short(t)} steps around ${n.short(e)}.`,"event"))}return"missed"}function ga(n,e){const t=n.play;t.ball.loose={...e},t.ball.carrier=null,t.ball.apparent=null,t.ball.inPlay||(t.ball.inPlay=!0,t.ball.inPlaySlice=t.slice);for(const i of Object.values(t.players))i.draggedBy=[]}function*yp(n){const e=n.play,t=e.ball.loose,i=Object.values(e.players).filter(m=>m.pancakedSlice===null&&ht(m.pos,t)-me<=Qf+1e-6);if(i.length===0)return n.log("Nobody is near the loose ball.","event"),"none";const r=i.map(m=>({p:m,r:n.rollValue(m.id,"AGILITY/2",Math.ceil(n.skill(m.id,"agility")/2))})).filter(m=>m.r.success);if(r.length===0)return n.log("Nobody comes up with the ball.","event"),"none";const o=Math.max(...r.map(m=>m.r.successRate)),a=r.filter(m=>m.r.successRate===o);let c=a[0];const l=a.find(m=>m.p.side==="offense"),u=a.find(m=>m.p.side==="defense");if(l&&u){n.log(`${n.short(l.p.id)} and ${n.short(u.p.id)} are tied: one more roll each.`,"event");for(let m=0;m<100;m++){const _=n.rollValue(l.p.id,"AGILITY/2",Math.ceil(n.skill(l.p.id,"agility")/2)),v=n.rollValue(u.p.id,"AGILITY/2",Math.ceil(n.skill(u.p.id,"agility")/2));if(_.rawRate>v.rawRate){c=l;break}if(v.rawRate>_.rawRate){c=u;break}}}const h=c.p.id;n.log(`${n.short(h)} recovers the ball!`,"event");const d=n.engagementOf(h);if(d&&n.removeEngagement(d),e.ball.loose=null,c.p.side==="offense")return e.ball.carrier=h,e.ball.inPlay=!0,"offense";const f=bp(n,h,c.p.pos.y);return zn(n,{kind:"fumbleLost",by:h,returnYards:f.yards,touchdown:f.touchdown},f.spotY),"defense"}function bp(n,e,t){let i=0,s=!1;for(let o=0;o<50;o++){const a=n.roll(e,"agility");if(!a.success)break;if(a.perfect){s=!0,n.log(`${n.short(e)} rolls a PERFECT return: touchdown!`,"score");break}const c=n.rng.die(20);if(i+=c,n.log(`${n.short(e)} returns it ${c} yards (${i} in total).`,"event"),t-qo(i)<=Bn){s=!0;break}if(c!==20)break;n.log("A 20 on the return: he keeps going.","event")}let r=t-qo(i);return s?r=Bn:r>=Yn&&(r=Yn-qo(rs)),{yards:i,touchdown:s,spotY:r}}function Sp(n,e,t,i){const s=ot(i,t);if(Math.hypot(s.x,s.y)<1e-6)return{to:t};const o=e.mode;switch(o.t){case"none":return{error:o.reason};case"free":case"closer":case"zone":return{to:i};case"fixed":{const a=En(o.angle),c=Math.max(0,Mn(s,a));return{to:ai(t,Ii(a,c))}}case"along":{const a=En(o.angle),c=Mn(s,a);return{to:ai(t,Ii(a,c))}}case"sector":{const a=Tn(s);return bu.inSector(a,o.from,o.to)?{to:i}:{error:`That direction is outside the allowed ${o.label} (${a.toFixed(0)}°).`}}}}function Mx(n,e,t,i){const s=e.mode;if(s.t==="closer"&&ht(i,s.target)>ht(t,s.target)-1e-6&&ht(t,i)>1e-6)return`The move must end closer to the ${s.label}.`;if(s.t==="zone"){const r=n.inZone(t,s.zone);if(r&&!n.inZone(i,s.zone))return`A defender in zone coverage stays inside his ${n.zoneLabel(s.zone)} zone.`;if(!r){const o=n.nearestInZone(t,s.zone);if(ht(i,o)>ht(t,o)-1e-6&&ht(t,i)>1e-6)return`Outside his zone the defender must move towards his ${n.zoneLabel(s.zone)} zone.`}}if(e.notFartherFrom){const r=n.f(e.notFartherFrom).pos;if(ht(i,r)>ht(t,r)+1e-6&&ht(i,r)>Ze+.5)return`The move may not end farther from ${n.short(e.notFartherFrom)}.`}return null}function*li(n,e,t,i){const s=n.f(e),r=s.pos,o=a=>{n.setPos(e,a),s.s.movedCm=ht(r,a)};s.s.moved=!0;for(const a of t.events){if(a.kind==="hole"){if(o(a.at),!n.roll(e,"agility",0,`AGILITY (hit the hole between ${n.short(a.pair[0])} and ${n.short(a.pair[1])}, ${a.gap.toFixed(1)} cm)`).success)return s.s.stranded=!0,n.log(`${n.short(e)} is stranded in front of the hole.`,"event"),{stopped:!0};n.log(`${n.short(e)} hits the hole.`,"event");continue}if(i){if(o(a.at),(yield*i(a))==="stop")return{stopped:!0};if(n.play.result)return{stopped:!0}}}return o(t.to),{stopped:!1}}function ci(n,e,t,i={}){const s=n.f(e.id).pos,r=Sp(n,e,s,t);if("error"in r)return r;const o=pp(n.moveCtx(),e.id,r.to,{allowance:e.allowance,...i}),a=Mx(n,e,s,o.to);return a?{error:a}:{plan:o}}function Ex(n,e,t){return ci(n,e,t,{watches:[],stopY:e.id===n.effectiveCarrier()?Yn:void 0,maxY:Ws(n,e.id)})}function Ws(n,e){if(n.def(e).position==="OL"&&!n.effectiveInPlay())return n.play.los}function*Ss(n,e){let t;for(;;){if(n.play.result)return;const i=e.specs(),s=i.filter(l=>!l.done);if(s.length===0)return;if(s.every(l=>l.mode.t==="none"&&!l.mayDisengage&&!l.mayBlitz)){if(e.finishRemaining)yield*e.finishRemaining(s);else for(const l of s)n.f(l.id).s.moved=!0;return}const r={kind:"move",coach:e.coach,phase:e.phase,movers:i,canFinish:!0,title:e.title,error:t};t=void 0;const o=yield*n.ask(r,["move","skipMove","disengage","declareBlitz","finish"]);if(o.kind==="finish"){e.finishRemaining&&(yield*e.finishRemaining(s));return}const a=s.find(l=>l.id===o.id);if(!a){t="That player cannot move now.";continue}if(o.kind==="skipMove"){e.skip&&(yield*e.skip(a)),a.done=!0,n.f(a.id).s.moved=!0;continue}if(o.kind==="declareBlitz"){if(!a.mayBlitz||!e.declareBlitz){t="That player cannot declare a blitz.";continue}e.declareBlitz(a);continue}if(o.kind==="disengage"){if(!a.mayDisengage||!e.disengage){t="That player may not disengage.";continue}const l=yield*e.disengage(a,o.to);l&&(t=l);continue}if(a.mode.t==="none"){t=a.mode.reason;continue}const c=yield*e.run(a,o.to);c&&(t=c)}}function Et(n,e,t,i){const s=n.f(e),r=s.s.moved;return n.canAct(e)?s.s.noMove?{id:e,allowance:0,mode:{t:"none",reason:"May not move this timeslice."},done:r}:s.s.stranded?{id:e,allowance:0,mode:{t:"none",reason:"Stranded in front of a hole."},done:r}:t<=1e-9&&i.t!=="none"?{id:e,allowance:0,mode:{t:"none",reason:"No movement available."},done:r}:{id:e,allowance:t,mode:i,done:r}:{id:e,allowance:0,mode:{t:"none",reason:s.pancakedSlice!==null?"Lying on the ground.":"Getting up: may do nothing this timeslice."},done:r}}function*Tx(n){const e=n.play,t=()=>n.defensePlayers().filter(i=>n.assignment(i.id).t==="blitz").map(i=>{const s=i.pos.y-me-e.los,r=Et(n,i.id,Math.max(0,s/2),{t:"sector",from:90,to:-90,label:"approach to the line of scrimmage"});return r.note="Pre-snap: up to half the distance to the line, approaching it.",r});if(t().length!==0){yield*Ss(n,{coach:e.defense,phase:"defenseReveal",title:"Pre-snap movement: blitzers may creep towards the line",specs:t,*run(i,s){const r=ci(n,i,s,{});if("error"in r)return r.error;const o=n.f(i.id).pos;return r.plan.to.y>=o.y-1e-6&&ht(o,r.plan.to)>1e-6?"Pre-snap movement must approach the line of scrimmage.":(yield*li(n,i.id,r.plan),n.log(`${n.short(i.id)} creeps up before the snap.`,"event"),null)}});for(const i of n.defensePlayers())i.s.moved=!1,i.s.movedCm=0}}function*wx(n){const e=n.play,t=()=>{const s=[];for(const r of n.offensePlayers()){const o=n.blockKind(r.id);if(!o||n.isCarrier(r.id))continue;const a=n.engagementOf(r.id);if(a){a.blockers.length>1&&a.blockersWonLast&&a.blockers.includes(r.id)&&s.push({id:r.id,allowance:0,designated:null,engageable:[],mayEngage:!1,kind:o,done:r.s.moved,mayRelease:!0,crossesLosForbidden:!1});continue}const c=r.s.moved?[]:n.defensePlayers().filter(u=>Sx(r,u)<=Pa+1e-6&&ma(n,r.id,u.id).ok&&Nc(n,r.id,u.id,Ws(n,r.id))!==null).map(u=>u.id),l=o==="pass"||n.effectiveInPlay();s.push({id:r.id,allowance:n.allowance(r.id),designated:e.designations[r.id]??null,engageable:c,mayEngage:l&&n.canAct(r.id),kind:o,done:r.s.moved,mayRelease:!1,crossesLosForbidden:Ws(n,r.id)!==void 0})}return s};let i;for(;;){if(e.result)return;const s=t();if(s.length===0)return;const r=yield*n.ask({kind:"freeBlockers",coach:e.offense,blockers:s,error:i},["move","designate","engage","release","finish"]);if(i=void 0,r.kind==="finish")return;const o=s.find(l=>l.id===(r.kind==="move"?r.id:r.blocker));if(!o){i="That player is not a free blocker.";continue}if(r.kind==="release"){const l=n.engagementOf(o.id);if(!l||!o.mayRelease){i="That blocker may not leave the double team.";continue}l.blockers=l.blockers.filter(u=>u!==o.id),n.log(`${n.short(o.id)} leaves the double team on ${n.short(l.defender)}.`,"event");continue}if(r.kind==="designate"){if(r.defender===null)delete e.designations[o.id];else{if(!n.has(r.defender)||n.sideOf(r.defender)!=="defense"){i="Designate a defender.";continue}e.designations[o.id]=r.defender,n.log(`${n.short(o.id)} designates ${n.short(r.defender)}.`,"decision")}continue}if(r.kind==="engage"){if(!o.engageable.includes(r.defender)||!o.mayEngage){const u=ma(n,o.id,r.defender);i=u.ok?"The defender is not within 2 cm.":u.reason;continue}const l=Nc(n,o.id,r.defender,Ws(n,o.id));if(!l){i="There is no room to engage that defender.";continue}e.designations[o.id]=r.defender,mp(n,o.id,r.defender,o.kind,l);continue}if(o.done){i="That blocker has already moved.";continue}const a=Et(n,o.id,o.allowance,{t:"free"}),c=ci(n,a,r.to,{maxY:Ws(n,o.id)});if("error"in c){i=c.error;continue}yield*li(n,o.id,c.plan),n.log(`${n.short(o.id)} moves ${c.plan.distance.toFixed(1)} cm.`,"event")}}function*Ax(n){const e=n.play;for(const t of[...e.engagements].sort((i,s)=>i.id-s.id)){if(e.result)return;e.engagements.includes(t)&&t.resolvedSlice!==e.slice&&(yield*vp(n,t))}}function Cx(n,e){const t=[],i=n.f(e);for(const s of n.defensePlayers())!n.canAct(s.id)||s.s.tackled||(i.cannotTackleUntil[s.id]??0)>n.play.slice||i.draggedBy.includes(s.id)||(n.isEngaged(s.id)?s.s.clutchEligible&&t.push({id:s.id,reach:Ze+ca,tag:"clutch"}):(t.push({id:s.id,reach:Ze+vu,tag:"jump"}),s.s.brokeThrough&&s.s.clutchEligible&&t.push({id:s.id,reach:Ze+ca,tag:"clutch"})));return t}function*xh(n,e,t){const i=n.play,s=n.f(e);if(!s.s.clutchEligible||s.s.tackled||!n.canAct(e))return"continue";if(n.def(t).position==="QB"&&i.ball.carrier===t&&i.slice===1&&!s.s.rushPerfect)return n.log(`${n.short(e)} could clutch tackle the QB but did not roll a PERFECT rush in timeslice 1.`,"info"),"continue";if(!(yield*n.ask({kind:"clutchTackle",coach:i.defense,defender:e,carrier:t},"clutchTackle")).attempt)return"continue";const a=yield*jr(n,e,t,{clutch:!0,allowOutOfBounds:!0});return a==="down"||a==="fumble"||a==="dragging"?"stop":"continue"}function*Rx(n,e,t){const i=n.play,s=n.f(e),r=n.defensePlayers().filter(a=>n.canAct(a.id)&&!a.s.tackled&&!a.s.declinedJump&&!n.isEngaged(a.id)&&(s.cannotTackleUntil[a.id]??0)<=i.slice&&!s.draggedBy.includes(a.id)&&ht(a.pos,t)-Ze<=vu+1e-6).map(a=>a.id);if(r.length===0)return"continue";const o=yield*n.ask({kind:"jumpTackle",coach:i.defense,carrier:e,candidates:r},"jumpTackle");if(o.defender===null||!r.includes(o.defender)){for(const a of r)n.f(a).s.declinedJump=!0;return"continue"}return n.log(`${n.short(o.defender)} jumps the ball carrier.`,"event"),yield*jr(n,o.defender,e,{allowOutOfBounds:!0}),"stop"}function*kx(n){const e=n.play;if(e.ball.loose)return;if(n.handoffPending()){const i=n.qb().id,s=e.handoff;if(yield*Mh(n,i,`Move the quarterback to hand off to ${n.short(s.runner)}`),e.result||e.ball.loose)return;if(n.gap(i,s.runner)>uS+1e-6){s.fumbled=!0,n.log(`${n.short(s.runner)} is more than 3 cm from the quarterback at the hand-off: FUMBLE!`,"event"),ga(n,n.f(s.runner).pos);return}n.log(`${n.short(i)} hands the ball to ${n.short(s.runner)}.`,"event"),s.fake?n.fakeHandoff(s.runner):(e.ball.carrier=s.runner,n.ballNowInPlay()),s.done=!0}const t=n.effectiveCarrier();t&&(yield*Mh(n,t,`Move the ball carrier ${n.short(t)}`))}function*Mh(n,e,t){const i=n.play,s=n.f(e);for(const c of n.defensePlayers())c.s.declinedJump=!1;for(const c of n.defensePlayers()){if(i.result)return;if(!(!c.s.clutchEligible||c.s.tackled)&&ht(c.pos,s.pos)-Ze<=ca+1e-6&&(yield*xh(n,c.id,e))==="stop")return}if(i.result||i.ball.loose)return;const r=i.handoff&&i.handoff.done&&i.handoff.slice===i.slice&&i.handoff.runner===e,o=()=>{let c;if(r){const l=n.offMarker(e);if(l.t==="run"){const u=n.runLaneTarget(l.side,l.lane);c=Et(n,e,n.allowance(e),{t:"fixed",angle:n.dirTo(n.f(e).pos,u)}),c.mandatory=!0,c.note=`Runs ${l.lane==="dive"?"the dive":l.lane==="offtackle"?"off tackle":"the sprint"} ${l.side}.`}else c=Et(n,e,n.allowance(e),{t:"free"})}else c=Et(n,e,n.allowance(e),{t:"free"});return s.draggedBy.length>0&&(c.note=`Dragging ${s.draggedBy.map(l=>n.short(l)).join(", ")}: movement halved.`),c};if(o().mode.t==="none"?n.log(`${n.short(e)} cannot move this timeslice.`,"info"):yield*Ss(n,{coach:i.offense,phase:"ballCarrier",title:t,specs:()=>[o()],*run(c,l){const u=ci(n,c,l,{watches:Cx(n,e),stopY:Yn,ignore:n.f(e).draggedBy});if("error"in u)return u.error;const h=u.plan,d=yield*li(n,e,h,function*(m){return m.tag==="clutch"?yield*xh(n,m.id,e):m.tag==="jump"?yield*Rx(n,e,n.f(e).pos):"continue"});if(i.result||i.ball.loose)return null;const f=n.f(e).pos;if(n.log(`${n.short(e)} runs ${n.f(e).s.movedCm.toFixed(1)} cm.`,"event"),!d.stopped){if(h.boundary==="left"||h.boundary==="right")return i.ball.apparent===e?(n.revealFake(),n.log(`${n.short(e)} runs out of bounds: he never had the ball.`,"event")):zn(n,{kind:"outOfBounds"},f.y),null;if(h.boundary==="back")return i.ball.apparent!==e&&zn(n,{kind:"outOfBounds"},f.y),null}return f.y>=Yn-1e-6&&i.ball.carrier===e&&zn(n,{kind:"touchdown",by:e},f.y),null}}),i.result||i.ball.loose)return;const a=n.f(e);for(const c of[...a.draggedBy]){if(i.result||i.ball.loose)return;if(!n.canAct(c)){a.draggedBy=a.draggedBy.filter(l=>l!==c);continue}_p(n,c,e),n.f(c).s.tackled=!1,a.draggedBy=a.draggedBy.filter(l=>l!==c),n.log(`${n.short(c)}, dragged along, tries again.`,"event"),yield*jr(n,c,e,{allowOutOfBounds:!0})}}function Uc(n,e,t){const i=n.play,s=[],r=n.effectiveCarrier(),o=n.f(e);r&&t&&(n.f(r).cannotTackleUntil[e]??0)<=i.slice&&s.push({id:r,reach:Ze+.05,tag:"carrier"});for(const[a,c]of Object.entries(i.designations))c===e&&(!n.has(a)||!ma(n,a,e).ok||o.s.disengagedFrom.includes(a)||s.push({id:a,reach:Ze+Pa,tag:"engage"}));return s}function*Px(n,e,t){const i=n.play;if(!ma(n,e,t).ok)return"continue";const r=n.blockKind(e),o=n.f(t),a=Nc(n,e,t,Ws(n,e));if(!a||!(yield*n.ask({kind:"engageOffer",coach:i.offense,blocker:e,defender:t,stopAt:o.pos,kind2:r},"engageOffer")).accept)return"continue";const l=mp(n,e,t,r,a);return yield*vp(n,l),"stop"}function*Lx(n){const e=n.play,t=n.effectiveInPlay(),i=n.effectiveCarrier(),s=()=>{const r=[];for(const o of n.defensePlayers()){const a=n.assignment(o.id),c=n.engagementOf(o.id);if(c){if(c.mayDisengage&&n.canAct(o.id)){const l=Et(n,o.id,Math.max(0,n.allowance(o.id)-AS),{t:"none",reason:"Engaged in a block; may disengage."});l.mayDisengage=!0,l.note="May disengage (-1 movement, not towards the blocker).",r.push(l)}continue}if(a.t==="blitz"){const l=Et(n,o.id,n.allowance(o.id),{t:"free"});!t&&i&&(l.notFartherFrom=i),l.mayTackle=!0,l.note=t?"Free defender.":"Blitzing: rushes the quarterback.",r.push(l)}else if(a.t==="free"){const l=Et(n,o.id,n.allowance(o.id),{t:"free"});l.mayTackle=!0,l.note="Free defender.",r.push(l)}else if(a.t==="spy"&&!t){const l=Et(n,o.id,n.allowance(o.id),{t:"none",reason:"A spy moves in the spy & zone phase unless he declares a blitz."});l.mayBlitz=!0,r.push(l)}}return r};yield*Ss(n,{coach:e.defense,phase:"defenders",title:t?"Move free defenders":"Move blitzers",specs:s,declareBlitz(r){n.setAssignment(r.id,{t:"blitz"}),e.spyBlitz[r.id]=!0,n.f(r.id).s.moved=!1,n.log(`${n.short(r.id)} abandons the spy and blitzes.`,"event")},*disengage(r,o){const a=n.engagementOf(r.id),c=n.f(r.id),l=Lc(ot(c.pos,n.f(a.blockers[0]).pos)),u=ot(o,c.pos);if(Math.hypot(u.x,u.y)>1e-6&&Mn(Lc(u),l)<-1e-6)return"A disengaging defender may not move closer to the blocker.";const h=[...a.blockers];n.removeEngagement(a),c.s.disengagedFrom=h,n.log(`${n.short(r.id)} disengages from ${h.map(m=>n.short(m)).join(" and ")}.`,"event");const d={...r,mode:{t:"free"}},f=ci(n,d,o,{watches:Uc(n,r.id,!0),passThrough:h});return"error"in f?f.error:(yield*li(n,r.id,f.plan,function*(m){return yield*Oc(n,r.id,m)}),null)},*run(r,o){const a=ci(n,r,o,{watches:Uc(n,r.id,r.mayTackle??!1)});return"error"in a?a.error:(yield*li(n,r.id,a.plan,function*(c){return yield*Oc(n,r.id,c)}),e.result||n.log(`${n.short(r.id)} moves ${n.f(r.id).s.movedCm.toFixed(1)} cm.`,"event"),null)}})}function*Oc(n,e,t){if(t.tag==="engage")return yield*Px(n,t.id,e);if(t.tag==="carrier"){const i=n.effectiveCarrier();return!i||i!==t.id?"continue":(yield*jr(n,e,i,{allowOutOfBounds:!0}),"stop")}return"continue"}function Dx(n,e,t){const i=n.towardsCenterSign(e);switch(t){case"fly":return{from:-bi,to:bi,label:"fly cut (straight upfield)"};case"hook":return{from:Si,to:-Si,label:"hook cut (back towards the quarterback)"};case"in":return i>0?{from:bi,to:Si,label:"cut in (towards the middle)"}:{from:-Si,to:-bi,label:"cut in (towards the middle)"};case"out":return i>0?{from:-Si,to:-bi,label:"cut out (towards the sideline)"}:{from:bi,to:Si,label:"cut out (towards the sideline)"}}}function Ix(n,e){const t=n.play,i=n.f(e),s=n.effectiveOffMarker(e),r=n.allowance(e),o=i.sidelineSlice!==null&&i.sidelineSlice===t.slice-1,a=i.sidelineSlice!==null&&i.sidelineSlice<t.slice-1,c=s.t==="cut"||s.t==="runblock";if(o&&!c)return Et(n,e,0,{t:"none",reason:"Reached the sideline last timeslice: waits here."});if(i.cutSlice!==null&&i.cutSlice<t.slice)return a?Et(n,e,r,{t:"along",angle:0,label:"along the sideline"}):Et(n,e,r,{t:"fixed",angle:i.routeDir??0});switch(s.t){case"dir":return s.dir==="up"?Et(n,e,r,{t:"sector",from:-th,to:th,label:"up (within 5°)"}):Et(n,e,r,{t:"fixed",angle:s.dir==="left"?-s.angle:s.angle});case"continue":return a?Et(n,e,r,{t:"along",angle:0,label:"along the sideline"}):i.routeDir===null?Et(n,e,0,{t:"none",reason:"No direction to continue in."}):Et(n,e,r,{t:"fixed",angle:i.routeDir});case"delay":return Et(n,e,Math.min(ep,r),{t:"free"});case"cut":{const l=Et(n,e,r,{t:"sector",...Dx(n,i.pos,s.cut)});return l.cutPending=!0,l}case"run":return Et(n,e,r,{t:"fixed",angle:i.routeDir??0});default:return a&&i.routeDir!==null?Et(n,e,r,{t:"along",angle:0,label:"along the sideline"}):Et(n,e,0,{t:"none",reason:t.slice>4?"No route to follow.":"No movement marker this timeslice."})}}function*Eh(n,e,t){const i=n.play;for(const s of n.defensePlayers()){if(i.result)return;const r=n.assignment(s.id);if(r.t!=="man"||r.target!==e||!n.canAct(s.id)||n.isEngaged(s.id)||s.s.moved)continue;const o=n.roll(s.id,"cover",0,"COVER (coverage movement)");if(o.critical){s.s.noMove=!0,s.s.contestModifier+=kS,n.log(`${n.short(s.id)} loses his man completely: no movement, -5 to contest.`,"event"),s.s.moved=!0;continue}o.success||(s.s.speedPenalty+=CS,s.s.contestModifier+=RS,n.log(`${n.short(s.id)} has trouble following: -2 movement, -2 to contest.`,"event")),t&&(s.s.speedPenalty+=LS);const a=()=>{const c=Et(n,s.id,n.allowance(s.id),{t:"free"});return c.notFartherFrom=e,c.mayTackle=n.effectiveCarrier()===e,c.note=`Man coverage on ${n.short(e)}.`,[c]};yield*Ss(n,{coach:i.defense,phase:"receivers",title:`Man coverage: ${n.short(s.id)} follows ${n.short(e)}`,specs:a,*run(c,l){const u=ci(n,c,l,{watches:Uc(n,s.id,c.mayTackle??!1)});return"error"in u?u.error:(yield*li(n,s.id,u.plan,function*(h){return yield*Oc(n,s.id,h)}),null)},*finishRemaining(c){for(const l of c)n.f(l.id).s.moved=!0}}),s.s.moved=!0}}function*Nx(n){const e=n.play,t=n.effectiveCarrier(),i=o=>n.def(o).position!=="QB"&&o!==t&&!n.blockKind(o)&&!n.isEngaged(o)&&e.ball.carrier!==o,s=()=>n.offensePlayers().filter(o=>i(o.id)).map(o=>Ix(n,o.id)),r=function*(o,a){const c=n.f(o.id);let l=!1,u=o;if(a!==null&&u.mode.t!=="none"){const h=n.effectiveOffMarker(o.id);if(u.cutPending&&h.t==="cut"){const _=c.pos,v=Sp(n,u,_,a);if("error"in v)return v.error;const p=n.roll(o.id,"routes",0,`ROUTES (cut ${h.cut})`);if(c.cutSlice=e.slice,c.sidelineSlice=null,p.critical)return c.s.noMove=!0,n.log(`${n.short(o.id)} stumbles on his cut and may not move.`,"event"),c.s.moved=!0,c.routeDir=Tn(ot(v.to,_)),yield*Eh(n,o.id,!1),null;p.success||(c.s.speedPenalty+=PS,n.log(`${n.short(o.id)} makes a sloppy cut: -2 movement.`,"event")),p.perfect&&(l=!0,n.log(`${n.short(o.id)} makes a PERFECT cut: his man loses a step.`,"event")),u={...u,allowance:n.allowance(o.id)}}const d=ci(n,u,a,{});if("error"in d)return d.error;const f=c.pos;yield*li(n,o.id,d.plan);const m=ot(c.pos,f);Math.hypot(m.x,m.y)>1e-6&&u.mode.t!=="free"?c.routeDir=Tn(m):u.mode.t==="fixed"?c.routeDir=u.mode.angle:u.mode.t==="sector"&&Math.hypot(m.x,m.y)>1e-6&&(c.routeDir=Tn(m)),(d.plan.boundary==="left"||d.plan.boundary==="right")&&(c.sidelineSlice=e.slice,n.log(`${n.short(o.id)} reaches the sideline and stops.`,"event")),n.log(`${n.short(o.id)} runs ${c.s.movedCm.toFixed(1)} cm.`,"event")}return c.s.moved=!0,yield*Eh(n,o.id,l),null};yield*Ss(n,{coach:e.offense,phase:"receivers",title:"Move receivers (any order); man coverage follows each",specs:s,*run(o,a){return yield*r(o,a)},*skip(o){yield*r(o,null)},*finishRemaining(o){for(const a of o)yield*r(a,null)}});for(const o of s())o.done||(yield*r(o,null))}function*Ux(n){const e=n.play;if(n.effectiveInPlay())return;const t=n.effectiveCarrier();for(const r of n.defensePlayers()){if(n.assignment(r.id).t!=="spy"||n.isEngaged(r.id)||r.s.moved||!n.canAct(r.id))continue;const a={x:t?n.f(t).pos.x:n.qb().pos.x,y:e.los+4},c=pp(n.moveCtx(),r.id,a,{allowance:n.allowance(r.id)});c.events=c.events.filter(l=>l.kind!=="hole"),yield*li(n,r.id,c),n.log(`${n.short(r.id)} spies the backfield.`,"event")}const i=r=>n.defensePlayers().filter(o=>{const a=n.assignment(o.id);return a.t==="zone"&&a.zone.zone===r.zone&&(r.zone==="hook"||r.zone==="deep")}).sort((o,a)=>o.pos.x-a.pos.x).map(o=>o.id),s=()=>n.defensePlayers().filter(r=>n.assignment(r.id).t==="zone"&&!n.isEngaged(r.id)).map(r=>{const o=n.assignment(r.id),a=Et(n,r.id,n.allowance(r.id,{zone:!0}),{t:"zone",zone:o.zone,label:n.zoneLabel(o.zone)});return a.note=n.inZone(r.pos,o.zone)?`In his ${n.zoneLabel(o.zone)} zone.`:`Moving to his ${n.zoneLabel(o.zone)} zone.`,a});yield*Ss(n,{coach:e.defense,phase:"zones",title:"Zone coverage: move defenders within (or towards) their zones",specs:s,*run(r,o){const a=n.assignment(r.id),c=i(a.zone),l=ci(n,r,o,{});if("error"in l)return l.error;if(c.length>1){const u=c.indexOf(r.id),h=u>0?n.f(c[u-1]).pos.x:-1/0,d=u<c.length-1?n.f(c[u+1]).pos.x:1/0;if(l.plan.to.x<h||l.plan.to.x>d)return`Defenders sharing the ${a.zone} zone may not cross each other laterally.`}return yield*li(n,r.id,l.plan),null}})}function*Ox(n){const e=n.play;for(const t of["defense","offense"]){const i=n.coachOf(t),s=()=>n.onField(t).filter(r=>!n.isEngaged(r.id)).map(r=>Et(n,r.id,n.allowance(r.id),{t:"free"}));if(yield*Ss(n,{coach:i,phase:"looseBall",title:`Loose ball: ${t} moves players towards it`,specs:s,*run(r,o){const a=ci(n,r,o,{});return"error"in a?a.error:(yield*li(n,r.id,a.plan),null)}}),e.result)return}}const wi=1e-4;function va(n,e,t="right"){const i=n-me,s=[];for(let r=0;r<5;r++)s.push({x:It+(r-2)*Ze,y:i});return e===6&&(t==="left"?s.unshift({x:It-3*Ze,y:i}):s.push({x:It+3*Ze,y:i})),s}function Ua(n,e){return{x:It,y:n-me-Ze-e}}function xp(n,e){return n.x>=me-wi&&n.x<=qe-me+wi&&n.y>=e+me-wi&&n.y<=Yt-me+wi}function Fc(n,e){return ht(n,e)<Ze-wi}function Fx(n,e,t,i){const s=[],r=new Map(n.map(d=>[d.id,d]));e.length!==11&&s.push({player:null,text:`The offense must field exactly 11 players (${e.length} placed).`});const o=new Set,a=[];for(const d of e){const f=r.get(d.id);if(!f){s.push({player:d.id,text:`${d.id} is not on the offensive roster.`});continue}o.has(d.id)&&s.push({player:d.id,text:`${f.name} is placed twice.`}),o.add(d.id),a.push({def:f,pos:d.pos})}const c=d=>a.filter(f=>f.def.position===d).length;c("QB")!==1&&s.push({player:null,text:"Exactly one quarterback must be on the field."});const l=c("OL");l!==5&&l!==6&&s.push({player:null,text:"Five offensive linemen must be on the field (six at most)."});const u=a.filter(d=>d.def.position==="OL").sort((d,f)=>d.pos.x-f.pos.x);if(l===5||l===6){const d=va(t,l,"left"),f=va(t,l,"right"),m=_=>u.every((v,p)=>ht(v.pos,_[p])<.05);!m(d)&&!m(f)&&s.push({player:null,text:"The offensive line must stand touching, centred on the field, with their front edge on the line of scrimmage."})}const h=a.find(d=>d.def.position==="QB");if(h){const f=Ua(t,0).y-h.pos.y;Math.abs(h.pos.x-It)>.05&&s.push({player:h.def.id,text:"The quarterback must line up directly behind the centre."}),(f<-wi||f>Zf+wi)&&s.push({player:h.def.id,text:"The quarterback may be under centre or up to 4 cm behind the line."})}for(const d of a)d.pos.y>t-me+wi&&s.push({player:d.def.id,text:`${d.def.name} must be behind the line of scrimmage.`}),xp(d.pos,i)||s.push({player:d.def.id,text:`${d.def.name} is out of bounds.`});for(let d=0;d<a.length;d++)for(let f=d+1;f<a.length;f++)Fc(a[d].pos,a[f].pos)&&s.push({player:a[d].def.id,text:`${a[d].def.name} overlaps ${a[f].def.name}.`});return s}function Bx(n,e,t,i){const s=[],r=new Map(n.map(l=>[l.id,l]));e.length!==11&&s.push({player:null,text:`The defense must field exactly 11 players (${e.length} placed).`});const o=new Set,a=[];for(const l of e){const u=r.get(l.id);if(!u){s.push({player:l.id,text:`${l.id} is not on the defensive roster.`});continue}o.has(l.id)&&s.push({player:l.id,text:`${u.name} is placed twice.`}),o.add(l.id),a.push({def:u,pos:l.pos})}const c=l=>a.filter(u=>u.def.position===l).length;c("DL")<3&&s.push({player:null,text:"At least three defensive linemen must be on the field."}),c("LB")<1&&s.push({player:null,text:"At least one linebacker must be on the field."});for(const l of a){l.pos.y<t+me-wi&&s.push({player:l.def.id,text:`${l.def.name} must be on the defensive side of the line of scrimmage.`}),xp(l.pos,0)||s.push({player:l.def.id,text:`${l.def.name} is out of bounds.`});for(const u of i)Fc(l.pos,u)&&s.push({player:l.def.id,text:`${l.def.name} overlaps an offensive player.`})}for(let l=0;l<a.length;l++)for(let u=l+1;u<a.length;u++)Fc(a[l].pos,a[u].pos)&&s.push({player:a[l].def.id,text:`${a[l].def.name} overlaps ${a[u].def.name}.`});return s}function Mp(n,e,t,i,s,r){return n==="offense"?Fx(e,t,i,s):Bx(e,t,i,r)}const ut=(n,e,t,i)=>({positions:n,dx:e,dy:t,label:i}),ti=[{name:"I formation",side:"offense",qbDepth:0,linemen:5,slots:[ut(["FB","RB","TE"],0,-7.5,"FB"),ut(["RB","FB","WR"],0,-11,"RB"),ut(["TE","WR","FB"],8.75,-1.25,"TE"),ut(["WR","TE","RB"],-22,-1.25,"WR"),ut(["WR","TE","RB"],22,-2.75,"WR")]},{name:"Singleback",side:"offense",qbDepth:0,linemen:5,slots:[ut(["RB","FB","WR"],0,-9.5,"RB"),ut(["TE","WR","FB"],8.75,-1.25,"TE"),ut(["WR","TE","RB"],-23,-1.25,"WR"),ut(["WR","TE","RB"],23,-2.75,"WR"),ut(["WR","TE","RB"],-14,-2.75,"WR")]},{name:"Shotgun spread",side:"offense",qbDepth:4,linemen:5,slots:[ut(["RB","FB","WR"],4.5,-8.5,"RB"),ut(["WR","TE","RB"],-24,-1.25,"WR"),ut(["WR","TE","RB"],24,-1.25,"WR"),ut(["WR","TE","RB"],-15,-2.75,"WR"),ut(["WR","TE","RB"],15,-2.75,"WR")]},{name:"Trips right",side:"offense",qbDepth:4,linemen:5,slots:[ut(["RB","FB","WR"],-4.5,-8.5,"RB"),ut(["WR","TE","RB"],-24,-1.25,"WR"),ut(["WR","TE","RB"],24,-1.25,"WR"),ut(["WR","TE","RB"],18,-2.75,"WR"),ut(["TE","WR","RB"],12,-4,"TE")]},{name:"Empty",side:"offense",qbDepth:4,linemen:5,slots:[ut(["WR","TE","RB"],-25,-1.25,"WR"),ut(["WR","TE","RB"],25,-1.25,"WR"),ut(["WR","TE","RB"],-16,-2.75,"WR"),ut(["WR","TE","RB"],16,-2.75,"WR"),ut(["TE","RB","WR"],9,-4,"TE")]},{name:"Jumbo (6 linemen)",side:"offense",qbDepth:0,linemen:6,extraLinemanSide:"right",slots:[ut(["FB","RB","TE"],0,-6.5,"FB"),ut(["RB","FB","WR"],0,-10,"RB"),ut(["TE","WR","FB"],11.25,-1.25,"TE"),ut(["TE","WR","RB"],-8.75,-1.25,"TE")]}],ye=ut,On=[{name:"4-3",side:"defense",slots:[ye(["DL"],-7.5,1.25,"DE"),ye(["DL"],-2.5,1.25,"DT"),ye(["DL"],2.5,1.25,"DT"),ye(["DL"],7.5,1.25,"DE"),ye(["LB","S"],-7,6,"WLB"),ye(["LB"],0,6,"MLB"),ye(["LB","S"],7,6,"SLB"),ye(["CB","S"],-22,6,"CB"),ye(["CB","S"],22,6,"CB"),ye(["S","CB"],-10,14,"FS"),ye(["S","CB"],10,14,"SS")]},{name:"3-4",side:"defense",slots:[ye(["DL"],-5,1.25,"DE"),ye(["DL"],0,1.25,"NT"),ye(["DL"],5,1.25,"DE"),ye(["LB","S"],-10,3,"OLB"),ye(["LB"],-3.5,6,"ILB"),ye(["LB","S"],3.5,6,"ILB"),ye(["LB","S"],10,3,"OLB"),ye(["CB","S"],-22,6,"CB"),ye(["CB","S"],22,6,"CB"),ye(["S","CB"],-9,14,"FS"),ye(["S","CB"],9,14,"SS")]},{name:"Nickel 4-2-5",side:"defense",slots:[ye(["DL"],-7.5,1.25,"DE"),ye(["DL"],-2.5,1.25,"DT"),ye(["DL"],2.5,1.25,"DT"),ye(["DL"],7.5,1.25,"DE"),ye(["LB"],-4,6,"LB"),ye(["LB","S"],4,6,"LB"),ye(["CB","S"],-23,6,"CB"),ye(["CB","S"],23,6,"CB"),ye(["CB","S"],-14,6,"NB"),ye(["S","CB"],-8,15,"FS"),ye(["S","CB"],10,14,"SS")]},{name:"Dime 4-1-6",side:"defense",slots:[ye(["DL"],-7.5,1.25,"DE"),ye(["DL"],-2.5,1.25,"DT"),ye(["DL"],2.5,1.25,"DT"),ye(["DL"],7.5,1.25,"DE"),ye(["LB"],0,6,"LB"),ye(["CB","S"],-23,6,"CB"),ye(["CB","S"],23,6,"CB"),ye(["CB","S"],-14,6,"NB"),ye(["CB","S"],14,6,"DB"),ye(["S","CB"],-8,16,"FS"),ye(["S","CB"],8,16,"SS")]},{name:"Goal line 5-3",side:"defense",slots:[ye(["DL"],-10,1.25,"DE"),ye(["DL"],-5,1.25,"DT"),ye(["DL"],0,1.25,"NT"),ye(["DL"],5,1.25,"DT"),ye(["DL","LB"],10,1.25,"DE"),ye(["LB"],-6,5,"LB"),ye(["LB","S"],0,5,"MLB"),ye(["LB","S"],6,5,"LB"),ye(["CB","S"],-20,3,"CB"),ye(["CB","S"],20,3,"CB"),ye(["S","CB"],0,10,"S")]},{name:"Prevent 3-1-7",side:"defense",slots:[ye(["DL"],-5,1.25,"DE"),ye(["DL"],0,1.25,"NT"),ye(["DL"],5,1.25,"DE"),ye(["LB"],0,7,"LB"),ye(["CB","S"],-24,8,"CB"),ye(["CB","S"],24,8,"CB"),ye(["CB","S"],-14,9,"NB"),ye(["CB","S","LB"],14,9,"DB"),ye(["S","CB"],-14,20,"S"),ye(["S","CB"],0,22,"S"),ye(["S","CB"],14,20,"S")]}];function _a(n,e,t,i){const s=new Set,r=c=>{for(const l of c){const u=e.find(h=>h.position===l&&!s.has(h.id));if(u)return s.add(u.id),u}},o=[],a={x:It,y:t};if(n.side==="offense"){const c=n.linemen??5,l=va(t,c,n.extraLinemanSide??"right");for(const h of l){const d=r(["OL"]);d&&o.push({id:d.id,pos:h})}const u=r(["QB"]);u&&o.push({id:u.id,pos:Ua(t,n.qbDepth??0)})}for(const c of n.slots){const l=r(c.positions);if(!l)continue;let u={x:a.x+c.dx,y:a.y+c.dy};u={x:Math.min(qe-me,Math.max(me,u.x)),y:Math.min(Yt-me,Math.max(i+me,u.y))},o.push({id:l.id,pos:u})}return o}function zx(n,e){const t=new Set(e);return n.filter(i=>!t.has(i.id))}function Hx(n,e){return n.offensePlayers().filter(t=>t.id!==e&&t.pancakedSlice===null&&!n.isEngaged(t.id)).map(t=>t.id)}function Gx(n){const e=n.play,t=e.ball.carrier;return t?n.def(t).position!=="QB"?{ok:!1,reason:"Only the quarterback passes."}:e.ball.passed?{ok:!1,reason:"The ball has already been thrown."}:e.ball.inPlay?{ok:!1,reason:"The ball is in play."}:e.slice===1&&n.marker(t,2).t==="handoff"?{ok:!1,reason:"A draw play may not pass in timeslice 1 (p. 53)."}:n.handoffPending()?{ok:!1,reason:"The ball is being handed off."}:n.f(t).pos.y>=e.los?{ok:!1,reason:"The quarterback is past the line of scrimmage."}:n.canAct(t)?{ok:!0}:{ok:!1,reason:"The quarterback is down."}:{ok:!1,reason:"Nobody has the ball."}}function Vx(n){const e=n.play,t=e.ball.carrier,i=n.f(t),s=e.slice<=4?n.offMarker(t):{t:"filler"},r=s.t==="read"?s.target:null,o=n.skill(t,"arm"),a=n.skill(t,"poise"),c=n.defendersWithin(t,Jf).length,l=Math.max(0,c-a),u=i.s.movedCm,h=[];for(const d of Hx(n,t)){const f=n.f(d),m=ht(i.pos,f.pos)-Ze,_=BS(m),v=Math.max(0,_-o),p=[],b=r===d;b||p.push({label:e.slice>4?"No read (play broke down)":"Not the read",value:gS}),rh(v)!==0?p.push({label:`Range group ${_}${o?` -${Math.min(o,_)} arm = ${v}`:""}`,value:rh(v)}):_>0&&p.push({label:`Range group ${_} - ${o} arm = 0`,value:0}),l>0&&p.push({label:`Pressure: ${c} defender${c>1?"s":""} within 3 cm${a?`, ${a} ignored (poise)`:""}`,value:l*vS}),u>=.05&&p.push({label:`Moved ${Math.round(u*10)/10} cm`,value:Math.round(u*10)/10*_S});const S=p.reduce((x,A)=>x+A.value,0);h.push({target:d,distanceCm:Math.round(m*100)/100,modifiers:p,total:Math.round(S*100)/100,isRead:b})}return h}function Wx(n,e,t){const i=n.f(e),s=[];i.cutSlice===null&&s.push({label:"Before his cut",value:yS}),t||s.push({label:"Inaccurate pass",value:bS});const r=n.defendersWithin(e,dS).length;return r===0?s.push({label:"Open receiver",value:SS}):s.push({label:`Traffic: ${r} defender${r>1?"s":""} within 3 cm`,value:r*xS}),s}function*Ep(n){const e=n.play,t=Gx(n);if(!t.ok)return;const i=Vx(n),s=yield*n.ask({kind:"pass",coach:e.offense,options:i,mayPass:t.ok,reason:t.reason},"pass");if(s.target===null){n.log(t.ok?"The quarterback holds the ball.":`No pass: ${t.reason}`,"info");return}const r=i.find(o=>o.target===s.target);if(!r)return n.log("That receiver cannot be thrown to.","warning"),yield*Ep(n);yield*$x(n,r)}function*$x(n,e){const t=n.play,i=t.ball.carrier,s=e.target;t.ball.passed=!0;const r=`ACCURACY (${e.modifiers.map(A=>`${A.label} ${A.value>=0?"+":""}${A.value}`).join("; ")||"no modifiers"})`,a=n.roll(i,"accuracy",Math.round(e.total),r).success;n.log(`${n.short(i)} throws to ${n.short(s)} (${e.distanceCm} cm): ${a?"an accurate pass":"an INACCURATE pass"}.`,"event");const c=n.defendersWithin(s,jf).filter(A=>n.canAct(A.id)&&!n.isEngaged(A.id)).map(A=>A.id);let l={};if(c.length>0){const A=yield*n.ask({kind:"contest",coach:t.defense,receiver:s,defenders:c},"contest");for(const w of c)l[w]=A.choices[w]==="cleanShot"?"cleanShot":"contest"}const u=c.filter(A=>l[A]==="contest"),h=c.filter(A=>l[A]==="cleanShot"),d=Wx(n,s,a),f=d.reduce((A,w)=>A+w.value,0),m=n.roll(s,"catching",f,`CATCHING (${d.map(A=>`${A.label} ${A.value>=0?"+":""}${A.value}`).join("; ")})`);let _=m.successRate;m.perfect&&(_=n.skill(s,"catching")+TS,n.log(`A PERFECT catch: his successrate counts as ${_}.`,"event"));const v=m.critical;v&&n.log(`${n.short(s)} bats the ball up in the air!`,"event");let p=m.success,b=null;if(u.length>0){let A=0,w=null,P=m.perfect;for(const I of u){const T=n.f(I),E=n.roll(I,"cover",T.s.contestModifier,T.s.contestModifier?`COVER (coverage check ${T.s.contestModifier})`:"COVER");E.critical&&(t.dpi=!0,n.log(`${n.short(I)} commits DEFENSIVE PASS INTERFERENCE.`,"event")),A+=E.successRate;const D=v?nh/2:nh;(E.perfect||E.success&&E.successRate>=_+D)&&!(E.perfect&&P)?(!w||E.successRate>w.sr)&&(w={id:I,sr:E.successRate}):E.perfect&&P&&(n.log("Both rolled a PERFECT: the ball falls incomplete.","event"),p=!1,A=Math.max(A,_))}w?(b=w.id,p=!1):A>=_?(p=!1,n.log(`The pass is defended (${A} vs ${_}).`,"event")):(p=!0,n.log(`${n.short(s)} wins the contested catch (${_} vs ${A}).`,"event"))}if(b){const A=n.f(b);n.log(`INTERCEPTION by ${n.short(b)}!`,"event");const w=bp(n,b,A.pos.y);zn(n,{kind:"interception",by:b,returnYards:w.yards,touchdown:w.touchdown},w.spotY);return}if(!p){const A=n.f(s);zn(n,{kind:"incomplete"},A.pos.y);return}const S=n.f(s);if(t.ball.carrier=s,n.ballNowInPlay(),n.log(`${n.short(s)} catches the ball.`,"event"),n.sidelineGap(S.pos)<=hS+1e-6){const A=n.roll(s,"agility",0,"AGILITY (feet in bounds)");if(!A.success){n.log(`${n.short(s)} does not get both feet down: incomplete.`,"event"),t.ball.carrier=i,t.ball.inPlay=!1,t.ball.inPlaySlice=null,zn(n,{kind:"incomplete"},S.pos.y);return}if(A.successRate<=5){n.log(`${n.short(s)} gets both feet down before going out: the ball is spotted where he caught it.`,"event"),zn(n,{kind:"outOfBounds"},S.pos.y);return}}if(S.pos.y>=Yn){zn(n,{kind:"touchdown",by:s},S.pos.y);return}let x=h.filter(A=>n.canAct(A)&&!n.f(A).s.tackled);for(;x.length>0&&!t.result;){const A=yield*n.ask({kind:"cleanShot",coach:t.defense,carrier:s,tacklers:x},"cleanShot");if(A.tackler===null||!x.includes(A.tackler))break;const w=yield*jr(n,A.tackler,s,{cleanShot:!0});if(x=x.filter(P=>P!==A.tackler),w==="down"||w==="fumble")break}}function Xx(n){const e=n.play.ball.loose;return e?!Object.values(n.play.players).some(t=>t.pancakedSlice===null&&ht(t.pos,e)-me<=Qf+1e-6):!0}function Tp(n){return{kind:n.kind,offense:n.offense,defense:kn(n.offense),los:n.los,lineToGainY:n.lineToGainY,boardMinY:n.boardMinY,slice:0,phase:"lineupOffense",players:{},markers:{},revealed:{offense:0,defense:0},ball:{carrier:null,apparent:null,inPlay:!1,inPlaySlice:null,loose:null,passed:!1},engagements:[],nextEngagementId:1,designations:{},assignments:{},switchDecided:{},spyBlitz:{},handoff:null,dpi:!1,result:null,trails:{}}}function Bc(n,e,t){return{id:n,side:e,pos:{...t},facing:e==="offense"?0:180,pancakedSlice:null,sidelineSlice:null,routeDir:null,cutSlice:null,cannotTackleUntil:{},draggedBy:[],halvedNext:!1,nextSlicePenalty:0,cannotEngageUntil:{},freeSince:null,s:lp()}}function*Th(n,e){const t=n.play,i=n.coachOf(e),s=e==="offense"?n.team(i).offense:n.team(i).defense;t.phase=e==="offense"?"lineupOffense":"lineupDefense";let r;for(;;){const o=yield*n.ask({kind:"lineup",coach:i,side:e,los:t.los,error:r},"lineup"),a=n.offensePlayers().map(l=>l.pos),c=Mp(e,s,o.placements,t.los,t.boardMinY,a);if(c.length>0){r=c.slice(0,3).map(l=>l.text).join(" ");continue}for(const l of o.placements)t.players[l.id]=Bc(l.id,e,l.pos);n.log(`${n.team(i).name} ${e} lines up.`,"phase");return}}function*wh(n,e){const t=n.play,i=n.coachOf(e),s=e==="offense"?oi:dr,r=n.onField(e).map(a=>n.def(a.id));t.phase="markers";let o;for(;;){const a=yield*n.ask({kind:"markers",coach:i,side:e,slots:s,error:o},"markers"),c=yu(e,r,a.markers);if(ox(c)){o=c.filter(l=>l.severity==="error").slice(0,3).map(l=>l.text).join(" ");continue}for(const l of r)t.markers[l.id]=xt(a.markers[l.id],s);n.log(`${n.team(i).name} ${e} has placed its markers.`,"phase");return}}function*Yx(n){const e=n.play;if(e.phase="defenseReveal",e.slice>dr)return;e.revealed.defense=e.slice,n.log(`Timeslice ${e.slice}: the defense reveals its markers.`,"phase");const t=n.offensePlayers().filter(i=>n.def(i.id).position!=="QB").map(i=>i.id);for(const i of n.defensePlayers().sort((s,r)=>s.id.localeCompare(r.id))){const s=n.marker(i.id);switch(s.t){case"filler":break;case"man":{let r;for(;;){const o=yield*n.ask({kind:"manTarget",coach:e.defense,defender:i.id,options:t,error:r},"manTarget");if(!t.includes(o.target)){r="Designate an offensive player other than the quarterback.";continue}n.setAssignment(i.id,{t:"man",target:o.target}),n.log(`${n.short(i.id)} is in MAN coverage on ${n.short(o.target)}.`,"event");break}break}case"zone":{const r=s.zone==="flat"||s.zone==="curl"?{zone:s.zone,side:s.side}:{zone:s.zone};n.setAssignment(i.id,{t:"zone",zone:r}),n.log(`${n.short(i.id)} drops into the ${n.zoneLabel(r)} zone.`,"event");break}case"spy":n.setAssignment(i.id,{t:"spy"}),n.log(`${n.short(i.id)} spies the backfield.`,"event");break;case"blitz":n.setAssignment(i.id,{t:"blitz"}),n.log(`${n.short(i.id)} BLITZES.`,"event");break}}e.slice===1&&(yield*Tx(n))}function*qx(n){const e=n.play;e.phase="offenseReveal",e.slice<=oi&&(e.revealed.offense=e.slice,n.log(`Timeslice ${e.slice}: the offense reveals its markers.`,"phase")),e.ball.apparent!==null&&e.handoff&&e.handoff.fake&&e.slice>e.handoff.slice&&(n.revealFake(),n.log(`PLAY ACTION: ${n.short(e.ball.carrier)} still has the ball!`,"event"));const t=n.qb(),i=n.marker(t.id);if(i.t==="handoff"&&e.slice<=2){const s=n.marker(i.target),r=e.slice<oi&&n.marker(t.id,e.slice+1).t!=="filler";e.handoff={slice:e.slice,runner:i.target,fake:r,done:!1,fumbled:!1};const o=n.f(i.target);if(s.t!=="run"){e.handoff.fumbled=!0,n.log(`${n.short(t.id)} hands off to ${n.short(i.target)}, who was not expecting it: FUMBLE!`,"event"),ga(n,o.pos);return}o.routeDir=n.dirTo(o.pos,n.runLaneTarget(s.side,s.lane)),n.log(`${n.short(t.id)} turns to hand the ball to ${n.short(i.target)}.`,"event")}for(const s of n.offensePlayers()){if(e.ball.loose)break;n.marker(s.id).t==="run"&&e.slice<=2&&!(i.t==="handoff"&&i.target===s.id)&&(n.log(`${n.short(s.id)} runs for a hand-off that never comes: FUMBLE!`,"event"),ga(n,s.pos))}if(!e.ball.loose)for(const s of n.offensePlayers()){const r=n.effectiveOffMarker(s.id);if(!(r.t!=="passblock"&&r.t!=="runblock"))for(const o of n.defensePlayers()){const a=n.markerAssignment(o.id);if(a.t!=="man"||a.target!==s.id)continue;if(r.t==="runblock"){n.freeDefender(o.id,"his man run blocks");continue}if(e.switchDecided[o.id]||n.f(o.id).freeSince!==null)continue;const c=yield*n.ask({kind:"switchOption",coach:e.defense,defender:o.id,target:s.id},"switchOption");e.switchDecided[o.id]=!0,c.choice.t==="blitz"?(n.setAssignment(o.id,{t:"blitz"}),n.log(`${n.short(o.id)} switches from man coverage to a BLITZ.`,"event")):c.choice.t==="zone"?(n.setAssignment(o.id,{t:"zone",zone:c.choice.zone}),n.log(`${n.short(o.id)} switches from man coverage to the ${n.zoneLabel(c.choice.zone)} zone.`,"event")):n.log(`${n.short(o.id)} stays in man coverage on the pass blocker.`,"event")}}}function*xr(n){const e=n.play;if(e.result)return"over";if(!e.ball.loose)return"continue";const t=yield*yp(n);return e.result?"over":t==="none"?"skipSlice":"continue"}function*Ah(n,e,t){const i=Tp(t);n.play=i;const s=new bu(n,i,e);for(yield*Th(s,"offense"),yield*Th(s,"defense"),i.ball.carrier=s.qb().id,yield*wh(s,"offense"),yield*wh(s,"defense"),s.log("The ball is snapped.","phase");!i.result;){if(s.startSlice(),i.ball.loose){if(i.phase="looseBall",yield*Ox(s),i.result)break;const o=yield*yp(s);if(i.result)break;if(o==="offense"&&s.log(`${s.short(i.ball.carrier)} has the ball; play on.`,"event"),o==="none"&&Xx(s)){s.log("Nobody can get to the loose ball: it is dead where it lies.","event");const a=i.ball.loose;i.ball.loose=null,zn(s,{kind:"outOfBounds"},a.y);break}continue}yield*Yx(s),yield*qx(s);let r=yield*xr(s);if(r!=="continue"){if(r==="over")break;continue}if(i.phase="freeBlockers",yield*wx(s),i.phase="resolveBlocks",yield*Ax(s),i.result)break;if(i.phase="ballCarrier",yield*kx(s),r=yield*xr(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="defenders",yield*Lx(s),r=yield*xr(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="receivers",yield*Nx(s),r=yield*xr(s),r!=="continue"){if(r==="over")break;continue}if(i.phase="zones",yield*Ux(s),i.result||(i.phase="pass",yield*Ep(s),r=yield*xr(s),r==="over"))break}return i.phase="over",i.result}function wp(n){return{config:n,score:{home:0,away:0},stage:"pregame",possession:"home",ballOn:75,down:1,lineToGain:65,drive:null,drives:{home:0,away:0},clock:{drivesCompleted:0,mode:n.gameType==="full"?"drives":"none",snapsLeft:null},overtime:{active:!1,possessions:{home:0,away:0},classic:!1},kickoffBy:null,receivedFirst:null,play:null,lastResult:null,log:[],winner:null,snaps:0}}class Kx{constructor(e,t){this.s=e,this.rng=t}s;rng;log(e,t="info",i){this.s.log.push({n:this.s.log.length+1,text:e,kind:t,coach:i})}team(e){return this.s.config.teams[e]}name(e){return this.team(e).name}boardMinY(e){switch(this.s.config.fieldSize){case"full":return 0;case"half":return Math.min(Hs(ch),e??1/0)-dh;case"redzone":return Math.min(Hs(uh),e??1/0)-dh}}startSpot(){switch(this.s.config.fieldSize){case"full":return QS;case"half":return ch;case"redzone":return uh}}kicksAllowed(){return this.s.config.fieldSize==="full"}*ask(e,t){let i=e;for(;;){const s=yield i;if(s.kind===t)return s;i={...e,error:`Expected ${t}, got ${s.kind}.`}}}roll(e,t,i,s=0){const r=Dc(this.rng,i,this.team(e).special[t],s);return this.log(`${this.team(e).abbreviation} special teams ${Ic(r)}`,"roll",e),r}lastDriveScore=null;score(e,t,i){this.s.score[e]+=t,i.includes("touchdown")||i.includes("two-point")?this.lastDriveScore="touchdown":i==="safety"?this.lastDriveScore="safety":i.includes("field goal")&&(this.lastDriveScore="fieldGoal"),this.log(`${this.name(e)} scores: ${i} (${t}). ${this.name("home")} ${this.s.score.home} - ${this.s.score.away} ${this.name("away")}.`,"score",e)}firstDown(e,t){this.s.possession=e,this.s.ballOn=Math.max(.5,Math.min(99.5,t)),this.s.down=1,this.s.lineToGain=Math.max(0,this.s.ballOn-$S)}countSnap(){this.s.snaps+=1,this.s.clock.mode==="twoMinute"&&this.s.clock.snapsLeft!==null&&(this.s.clock.snapsLeft-=1,this.log(`${this.s.clock.snapsLeft} snap${this.s.clock.snapsLeft===1?"":"s"} left.`,"info"))}*coinToss(){const e=yield*this.ask({kind:"callToss",coach:"away"},"callToss"),t=this.rng.die(2)===1?"heads":"tails",i=t===e.call?"away":"home";this.log(`The toss comes up ${t}; ${this.name("away")} called ${e.call}. ${this.name(i)} wins the toss.`,"event");const s=yield*this.ask({kind:"tossChoice",coach:i,options:["receive","kick"]},"tossChoice"),r=s.choice==="receive"?i:kn(i);this.s.receivedFirst=r,this.log(`${this.name(i)} elects to ${s.choice}. ${this.name(r)} receives.`,"event"),this.kicksAllowed()?this.s.kickoffBy=kn(r):this.firstDown(r,this.startSpot())}*kickoff(e){const t=kn(e);this.s.stage="kickoff",this.s.kickoffBy=null;const i=yield*this.ask({kind:"kickoffType",coach:e,options:["normal","onside"]},"kickoffType");if(this.countSnap(),i.type==="onside"){const a=this.roll(e,"kicking","KICKING (onside)"),c=this.roll(t,"coverage","COVERAGE (onside, +10)",0),l=a.successRate,u=c.successRate+YS;l>u?(this.log(`ONSIDE KICK recovered by ${this.name(e)}!`,"event",e),this.firstDown(e,100-lh)):(this.log(`${this.name(t)} recovers the onside kick.`,"event",t),this.firstDown(t,lh));return}const s=this.roll(e,"kicking","KICKING (kick-off)");if(s.critical){this.log(`The kick-off sails out of bounds: ${this.name(t)} takes it at its own 40.`,"event"),this.firstDown(t,100-XS);return}let r;if(s.perfect){const a=yield*this.ask({kind:"puntPerfect",coach:e},"puntPerfect");r=a.choice==="touchback"?Tl+5:Tl-1,this.log(`A PERFECT kick: the kicker places it ${a.choice==="touchback"?"in the endzone":"on the 1 yard line"}.`,"event")}else{const a=this.rng.die(20),c=this.rng.die(20);r=a+c+s.rawRate,this.log(`The kick travels ${a} + ${c} ${s.rawRate>=0?"+":"-"} ${Math.abs(s.rawRate)} = ${r} yards beyond the 30.`,"event")}const o=Tl-r;yield*this.returnKick(e,t,o,"kick-off")}*returnKick(e,t,i,s){const r=i<=0,o=100-i;if((yield*this.ask({kind:"fairCatch",coach:t,spotYtg:Math.round(o),inEndzone:r},"fairCatch")).fairCatch){const u=r?100-rs:o;this.log(`${this.name(t)} calls a fair catch${r?" in the endzone: touchback":""}; first down at the ${Math.round(100-u)}.`,"event"),this.firstDown(t,u);return}let c=o,l=0;for(;;){const u=this.roll(t,"return","RETURN"),h=this.roll(e,"coverage","COVERAGE");if(u.critical||h.perfect){this.log("The returner DROPS the ball!","event");const d=this.roll(t,"return","RETURN (loose ball)"),f=this.roll(e,"coverage","COVERAGE (loose ball)");d.successRate>f.successRate?(this.log(`${this.name(t)} falls on it.`,"event"),this.firstDown(t,c)):(this.log(`${this.name(e)} recovers the muffed ${s}!`,"event",e),this.firstDown(e,100-c));return}if(u.successRate>h.successRate){l+=1;let d=this.rng.die(20);if((u.perfect||h.critical)&&(d*=2,this.log("A big return: the yards are doubled.","event")),c-=d,this.log(`The ${s} is returned ${d} yards${c<=0?"":` to ${Xr(c)}`}.`,"event"),c<=0||l>=ZS){this.log(`${this.name(t)} returns the ${s} for a TOUCHDOWN!`,"score",t),this.score(t,Yo,`${s} return touchdown`),yield*this.tryAfterTouchdown(t),this.s.kickoffBy=t;return}continue}c>=100?(this.log("The returner is brought down in the endzone: touchback.","event"),c=100-rs):this.log(`The returner is tackled at the ${Math.round(100-c)}.`,"event"),this.firstDown(t,c);return}}*punt(){const e=this.s.possession,t=kn(e);this.countSnap();const i=this.s.ballOn,s=this.roll(e,"punting","PUNTING");let r;if(s.critical){const a=this.rng.die(20),c=this.rng.die(20);r=a+c,this.log(`A shanked punt out of bounds after ${a} + ${c} = ${r} yards.`,"event");const l=i-r;l<=0?(this.log("It still reaches the endzone: touchback.","event"),this.firstDown(t,100-rs)):this.firstDown(t,100-l);return}if(s.perfect){const a=this.rng.die(20);if(r=a+KS,this.log(`A PERFECT punt of ${a} + 50 = ${r} yards.`,"event"),i-r<=0){if((yield*this.ask({kind:"puntPerfect",coach:e},"puntPerfect")).choice==="touchback"){this.log("The punter forces a fair catch in the endzone: touchback.","event"),this.firstDown(t,100-rs);return}this.log("The punt is placed on the 1 yard line.","event"),yield*this.returnKick(e,t,1,"punt");return}}else r=qS+2*s.rawRate,this.log(`The punt travels 30 ${s.rawRate>=0?"+":"-"} 2 x ${Math.abs(s.rawRate)} = ${r} yards.`,"event");const o=i-r;if(o<=0){this.log("The punt reaches the endzone: touchback.","event"),this.firstDown(t,100-rs);return}yield*this.returnKick(e,t,o,"punt")}*fieldGoal(){const e=this.s.possession;this.countSnap();const t=Math.round(this.s.ballOn+El),i=oh(t);if(this.roll(e,"kicking",`KICKING (${t} yard field goal, ${i>=0?"+":""}${i})`,i).success)return this.score(e,zS,`${t} yard field goal`),!0;this.log(`The ${t} yard field goal is NO GOOD.`,"event");const r=this.s.ballOn+El,o=kn(e),a=Math.min(100-rs,100-r);return this.firstDown(o,a),!1}*tryAfterTouchdown(e){if(this.s.stage="try",(yield*this.ask({kind:"tryChoice",coach:e},"tryChoice")).choice==="kick"){this.roll(e,"kicking","KICKING (extra point)").critical?this.log("The extra point is missed!","event"):this.score(e,GS,"extra point");return}this.log(`${this.name(e)} goes for two.`,"event");const i=yield*Ah(this.s,this.rng,{kind:"try",offense:e,los:Hs(ah),lineToGainY:null,boardMinY:this.boardMinY(Hs(ah))});this.s.lastResult=i,i.ending.kind==="touchdown"?this.score(e,VS,"two-point conversion"):this.log("The two-point attempt fails.","event")}*scrimmage(){const e=this.s,t=e.possession,i=kn(t);this.countSnap();const s=Hs(e.ballOn),r=yield*Ah(e,this.rng,{kind:"scrimmage",offense:t,los:s,lineToGainY:e.lineToGain>0?Hs(e.lineToGain):null,boardMinY:this.boardMinY(s)});e.lastResult=r,e.drive&&(e.drive.plays+=1);const o=r.ending;switch(o.kind){case"touchdown":return this.score(t,Yo,"touchdown"),yield*this.tryAfterTouchdown(t),"touchdown";case"safety":return this.score(i,HS,"safety"),"safety";case"interception":case"fumbleLost":{if(o.touchdown)return this.score(i,Yo,o.kind==="interception"?"interception return":"fumble return"),yield*this.tryAfterTouchdown(i),"touchdown";const a=(r.spotY-Bn)/1.2;return this.firstDown(i,a),"turnover"}default:{const a=ex(r.spotY),c=e.ballOn-a,l=r.autoFirstDown||a<=e.lineToGain+1e-9;return r.autoFirstDown&&this.log("Defensive pass interference: automatic first down.","event"),l?(this.log(`${c>=0?"Gain":"Loss"} of ${Math.abs(Math.round(c*10)/10)}: FIRST DOWN.`,"event"),this.firstDown(t,a),"continue"):(e.ballOn=Math.max(.5,a),e.down+=1,e.down>WS?(this.log(`Turnover on downs at the ${Math.round(100-e.ballOn)}.`,"event"),this.firstDown(i,100-e.ballOn),"downs"):(this.log(`${c>=0?"Gain":"Loss"} of ${Math.abs(Math.round(c*10)/10)}. ${Zx(e.down)} and ${e.lineToGain<=0?"goal":Math.round(e.ballOn-e.lineToGain)}.`,"event"),"continue"))}}}*drive(){const e=this.s;e.stage="drive";const t=e.possession;for(e.drives[t]+=1,this.lastDriveScore=null,e.drive={number:e.clock.drivesCompleted+1,offense:t,startYtg:e.ballOn,plays:0},this.log(`${this.name(t)} starts a drive at ${Xr(e.ballOn)}.`,"phase",t);;){if(this.gameClockExpired())return"downs";const i=Math.round(e.ballOn+El),s=["scrimmage"];this.kicksAllowed()&&e.config.gameType!=="collegeOT"&&s.push("punt"),s.push("fieldGoal");const r=yield*this.ask({kind:"playCall",coach:t,options:s,fieldGoalLength:i,fieldGoalModifier:oh(i)},"playCall");if(r.call==="punt"&&s.includes("punt"))return yield*this.punt(),"punt";if(r.call==="fieldGoal")return(yield*this.fieldGoal())?"fieldGoal":"missedFieldGoal";const o=yield*this.scrimmage();if(o!=="continue")return o;if(this.gameClockExpired())return"downs"}}gameClockExpired(){return this.s.clock.mode==="twoMinute"&&this.s.clock.snapsLeft!==null&&this.s.clock.snapsLeft<=0}*run(){const e=this.s;for(yield*this.coinToss();;){if(e.kickoffBy){const o=e.kickoffBy;if(yield*this.kickoff(o),e.kickoffBy)continue;if(this.gameClockExpired()&&this.endIfOver())return}const t=e.possession,i=yield*this.drive();e.clock.drivesCompleted+=1,e.overtime.active&&(e.overtime.possessions[t]+=1);const s=i==="touchdown"||i==="fieldGoal",r=this.kicksAllowed();if(i==="safety"?r?(this.log(`${this.name(t)} free kicks after the safety.`,"event"),e.ballOn,e.ballOn=100-jS,yield*this.punt()):this.firstDown(kn(t),this.startSpot()):s?r?e.kickoffBy=t:this.firstDown(kn(t),this.startSpot()):(!r||e.config.gameType==="collegeOT")&&this.firstDown(kn(t),this.startSpot()),this.endIfOver()||(this.clockAfterDrive(),this.endIfOver()))return}}clockAfterDrive(){const e=this.s;if(e.config.gameType!=="full"||e.overtime.active||e.clock.mode!=="drives")return;const t=e.clock.drivesCompleted;if(t<JS)return;const i=t===8?4:t===9?5:6,s=this.rng.die(6);if(s>=i){this.log(`After ${t} drives the d6 shows ${s} (needed ${i}+): there is time for another drive.`,"event");return}const r=this.rng.die(20);e.clock.mode="twoMinute",e.clock.snapsLeft=r,this.log(`After ${t} drives the d6 shows ${s} (needed ${i}+): TWO MINUTE MODE, ${r} snaps left.`,"event")}endIfOver(){const e=this.s,t=e.score.home===e.score.away,i=e.score.home>e.score.away?"home":"away",s=a=>(e.winner=a,e.stage="over",e.kickoffBy=null,this.log(a==="tie"?"The game ends in a tie.":`FINAL: ${this.name(a)} wins ${e.score[a]} - ${e.score[kn(a)]}.`,"score"),!0),r=e.overtime.active?e.overtime.possessions.home===e.overtime.possessions.away:e.drives.home===e.drives.away;switch(e.overtime.active?e.overtime.classic?"suddenDeathClassic":"suddenDeathModern":e.config.gameType){case"full":{if(this.gameClockExpired()){if(!t)return s(i);this.startOvertime()}return!1}case"collegeOT":return r&&!t?s(i):!1;case"suddenDeathClassic":return t?!1:s(i);case"suddenDeathModern":{const a=e.overtime.active?e.overtime.possessions:e.drives;if(a.home+a.away===1&&this.lastDriveScoredTouchdownOrSafety())return s(i);if(a.home>=1&&a.away>=1){if(!t)return s(i);e.overtime.active?e.overtime.classic=!0:(e.overtime.active=!0,e.overtime.classic=!0,this.log("Both teams have had a possession: sudden death.","event"))}return!1}}}lastDriveScoredTouchdownOrSafety(){return this.lastDriveScore==="touchdown"||this.lastDriveScore==="safety"}startOvertime(){const e=this.s;e.overtime.active=!0,e.overtime.classic=!1,e.overtime.possessions={home:0,away:0},e.clock.mode="none",e.clock.snapsLeft=null,this.log("The game is tied: OVERTIME (modern sudden death).","event"),this.kicksAllowed()?e.kickoffBy=e.receivedFirst??"home":this.firstDown(kn(e.receivedFirst??"home"),this.startSpot())}}function Zx(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function Xr(n){const e=Math.round(n);return e===50?"midfield":e>50?`its own ${100-e}`:`the opponent's ${e}`}function*Jx(n,e){yield*new Kx(n,e).run()}class Lr{state;pending=null;actions=[];gen;rng;constructor(e,t){this.rng=t??new fx(e.seed),this.state=wp(e),this.gen=Jx(this.state,this.rng);const i=this.gen.next();this.pending=i.done?null:i.value}get over(){return this.pending===null||this.state.stage==="over"}apply(e){if(!this.pending)return{ok:!1,error:"The game is over."};const t=this.pending;let i;try{i=this.gen.next(e)}catch(s){return{ok:!1,error:s instanceof Error?s.message:String(s)}}return this.actions.push(e),this.pending=i.done?null:i.value,this.pending&&this.pending.error&&jx(t,this.pending)?{ok:!1,error:this.pending.error}:{ok:!0}}save(){return{config:this.state.config,actions:[...this.actions]}}static replay(e,t){const i=new Lr(e.config),s=t??e.actions.length;for(let r=0;r<s;r++)i.apply(e.actions[r]);return i}view(e){const t=structuredClone(this.state),i=t.play;if(!i)return t;const s=(l,u)=>{for(const h of l){const d=i.markers[h];d&&(i.markers[h]=d.map((f,m)=>m<u?f:{t:"hidden"}))}},r=Object.values(i.players).filter(l=>l.side==="offense").map(l=>l.id),o=Object.values(i.players).filter(l=>l.side==="defense").map(l=>l.id),a=e===i.offense,c=e===i.defense;return a||s(r,i.revealed.offense),c||s(o,i.revealed.defense),!a&&i.ball.apparent&&(i.ball.carrier=i.ball.apparent,i.ball.inPlay=!0,i.handoff&&(i.handoff={...i.handoff,fake:!1,done:!0,fumbled:!1})),t}}function jx(n,e){return n.kind===e.kind&&n.coach===e.coach}class Qx{controls=["home","away"];view=nt(null);pending=nt(null);connected=nt(!0);status=nt("hot-seat");newLog=nt([]);engine;logSeen=0;constructor(e,t){this.engine=t?Lr.replay(t):new Lr(e),this.publish()}perspective(){const e=this.engine.pending;return e&&e.kind==="markers"?e.coach:(e&&e.kind==="lineup","spectator")}publish(){const e=this.engine.state.log;this.newLog.value=e.slice(this.logSeen),this.logSeen=e.length,this.view.value=this.engine.view(this.perspective()),this.pending.value=this.engine.pending?structuredClone(this.engine.pending):null}async apply(e){const t=this.engine.apply(e);return this.publish(),t}async undo(){const e=this.engine.save();e.actions.length!==0&&(this.engine=Lr.replay(e,e.actions.length-1),this.logSeen=this.engine.state.log.length,this.publish())}save(){return this.engine.save()}dispose(){}}class eM{controls=[];view=nt(null);pending=nt(null);connected=nt(!1);status=nt("connecting…");newLog=nt([]);ws;waiting=[];logSeen=0;constructor(e,t,i,s){this.ws=new WebSocket(e),this.ws.onopen=()=>{this.connected.value=!0,this.ws.send(JSON.stringify({t:"join",room:t,coach:i,config:s}))},this.ws.onclose=()=>{this.connected.value=!1,this.status.value="disconnected"},this.ws.onmessage=r=>{const o=JSON.parse(r.data);if(o.t==="joined")this.controls=o.coach?[o.coach]:[],this.status.value=o.coach?`online as ${o.coach}`:"spectating";else if(o.t==="state"){const a=o.view;this.newLog.value=a.log.slice(this.logSeen),this.logSeen=a.log.length,this.view.value=a,this.pending.value=o.pending}else if(o.t==="result"){const a=this.waiting.shift();a&&a({ok:o.ok,error:o.error})}else o.t==="error"&&(this.status.value=o.text)}}apply(e){return new Promise(t=>{this.waiting.push(t),this.ws.send(JSON.stringify({t:"action",action:e}))})}async undo(){this.ws.send(JSON.stringify({t:"undo"}))}save(){return null}dispose(){this.ws.close()}}const wn=nt(null),Nt=Pi(()=>wn.value?.view.value??null),vn=Pi(()=>wn.value?.pending.value??null),Su=Pi(()=>wn.value?.controls??[]),hr=Pi(()=>{const n=vn.value,e=Su.value;return n?n.coach==="both"?!0:e.includes(n.coach):!1});async function tM(n){const e=wn.value;return e?e.apply(n):{ok:!1,error:"no game"}}const $t=nt(null),zc=nt(null),Hc=nt(null),nM=nt(null),ya=nt(null),Gc=nt(null),Ch=nt("all"),Hn=nt(null),hs=nt(null),Vc=nt({});function xu(n,e){return Vc.value[`${n}-${e}`]??null}function Mu(n,e,t){const i={...Vc.value};t?i[`${n}-${e}`]=t:delete i[`${n}-${e}`],Vc.value=i}const Ai=nt(null),Xt=nt(null),si=nt("move"),Gn=nt("move"),Mi=nt({push:2,turn:0,follow:!0,anchor:null}),rr=nt(null),fs=nt({}),kl=nt("hook");let Pl=null;function Ap(n){ya.value=n,Pl&&clearTimeout(Pl),Pl=setTimeout(()=>ya.value=null,3500)}function iM(){Xt.value=null,si.value="move",Gn.value="move",rr.value=null,fs.value={},Mi.value={push:2,turn:0,follow:!0,anchor:null}}const sM={die(){throw new Error("the client never rolls dice")}};function Oa(n=Nt.value){return!n||!n.play?null:new bu(n,n.play,sM)}const rM=Pi(()=>{const n=Nt.value,e=new Map;if(!n)return e;for(const t of["home","away"])for(const i of[...n.config.teams[t].offense,...n.config.teams[t].defense])e.set(i.id,i);return e});function ba(n){return rM.value.get(n)}function Cp(n){const e=ba(n);return e?`${e.position} #${e.number} ${e.name.split(" ").slice(-1)[0]}`:n}function Sa(n){const e=Nt.value;return e?e.config.teams[n].colors.primary:n==="home"?"#1f6feb":"#c0392b"}function Wc(n){const e=Nt.value;return e?e.config.teams[n].name:n}const oM=Pi(()=>{const n=vn.value,e=Nt.value;return!n||!e?"":`${n.kind}|${n.coach}|${e.snaps}|${e.play?.slice??0}|${e.play?.phase??""}|${e.log.length}`}),Js=nt(!1),Dr={pass:"Pass",run:"Run",playAction:"Play action",screen:"Screen",zone:"Zone",man:"Man",blitz:"Blitz"},$c=n=>`S${n}`;function Rp(n){const e={name:n.formation,side:n.side,slots:n.slots.map(t=>({positions:t.positions,dx:t.dx,dy:t.dy,label:t.label}))};return n.side==="offense"&&(e.qbDepth=n.qbDepth,e.linemen=n.linemen,e.extraLinemanSide=n.extraSide),e}const aM=12;function Eu(n,e,t){const i=n.side==="offense"?oi:dr,s={markers:{},slotOf:{},routes:{},unassigned:[]},r={},o=[];for(const h of e)n.side==="offense"&&h.position==="QB"?(s.slotOf[h.id]="QB",r.QB=h.id):n.side==="offense"&&h.position==="OL"?(s.slotOf[h.id]="OL",s.markers[h.id]=xt(n.ol,i)):o.push(h);const a=[];for(const h of o)for(let d=0;d<n.slots.length;d++){const f=n.slots[d],m={x:It+f.dx,y:t+f.dy},_=Math.hypot(m.x-h.pos.x,m.y-h.pos.y)+(f.positions.includes(h.position)?0:aM);a.push({p:h,i:d,cost:_})}a.sort((h,d)=>h.cost-d.cost);const c=new Set,l=new Set;for(const h of a){if(c.has(h.i)||l.has(h.p.id))continue;c.add(h.i),l.add(h.p.id);const d=n.slots[h.i];s.slotOf[h.p.id]=$c(h.i),r[$c(h.i)]=h.p.id,s.markers[h.p.id]=xt(d.markers,i),d.route&&(s.routes[h.p.id]=d.route)}for(const h of o)l.has(h.id)||(s.unassigned.push(h.id),s.markers[h.id]=xt([],i));const u=h=>h.map(d=>(d.t==="read"||d.t==="handoff")&&d.target in r?{...d,target:r[d.target]}:d.t==="read"||d.t==="handoff"?{t:"filler"}:d);r.QB&&(s.markers[r.QB]=xt(n.qb,i));for(const h of Object.keys(s.markers))s.markers[h]=u(s.markers[h]);return s}function Ll(n){const e=t=>t==="left"?"right":"left";switch(n.t){case"dir":return n.dir==="up"?n:{...n,dir:e(n.dir)};case"run":return{...n,side:e(n.side)};case"zone":return n.zone==="flat"||n.zone==="curl"?{...n,side:e(n.side)}:n;default:return n}}function Xc(n){const e=n.formation.endsWith(" (flipped)");return{...n,formation:e?n.formation.slice(0,-10):`${n.formation} (flipped)`,extraSide:n.extraSide==="left"?"right":"left",qb:n.qb.map(Ll),ol:n.ol.map(Ll),slots:n.slots.map(t=>({...t,dx:-t.dx,markers:t.markers.map(Ll)}))}}function lM(n,e,t){const i=n.side==="offense"?oi:dr,s=e.find(u=>n.side==="offense"&&u.position==="QB"),r=e.find(u=>n.side==="offense"&&u.position==="OL"),o=e.filter(u=>u!==s&&!(n.side==="offense"&&u.position==="OL")).sort((u,h)=>u.pos.x-h.pos.x||h.pos.y-u.pos.y),a={};o.forEach((u,h)=>a[u.id]=$c(h));const c=u=>u.map(h=>(h.t==="read"||h.t==="handoff")&&h.target in a?{...h,target:a[h.target]}:h.t==="read"||h.t==="handoff"?{t:"filler"}:h),l=u=>{const h=xt(u,i);let d=h.length;for(;d>0&&h[d-1].t==="filler";)d--;return h.slice(0,d)};return{...n,qb:s?c(l(s.markers)):[],ol:r?l(r.markers):[],slots:o.map(u=>{const h={positions:[u.position],dx:Rh(u.pos.x-It),dy:Rh(u.pos.y-t),label:u.position,markers:c(l(u.markers))};return u.route&&(h.route=u.route),h}),stock:!1}}function Rh(n){return Math.round(n*100)/100}function Tu(){return`custom-${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`}const Ft=[{t:"passblock"},{t:"passblock"},{t:"passblock"},{t:"passblock"}],Un=[{t:"runblock"},{t:"runblock"},{t:"runblock"},{t:"runblock"}],Oo=[{t:"runblock"},{t:"passblock"},{t:"passblock"},{t:"passblock"}],cM=[{t:"passblock"},{t:"passblock"},{t:"runblock"},{t:"runblock"}],cn=n=>({t:"read",target:n}),Ot=(...n)=>n.map(cn),ln=n=>({t:"handoff",target:n});function uM(n,e){if(n==="pass")return{markers:Ft};if(n==="run")return{markers:Un};if(Array.isArray(n))return{markers:n};if(typeof n=="string"){const t=_s(n);if(!t)throw new Error(`unknown route ${n}`);return{markers:pa(t,e===0?"right":Ia(It+e)),route:n}}if("route"in n){const t=_s(n.route);if(!t)throw new Error(`unknown route ${n.route}`);return{markers:pa(t,n.out),route:n.route}}return{markers:[{t:"run",side:n.side,lane:n.run}]}}function Qe(n,e,t,i,s,r,o,a){const c=ti.find(l=>l.name===t);if(!c)throw new Error(`unknown formation ${t}`);if(a.length!==c.slots.length)throw new Error(`${e}: ${c.slots.length} slots in ${t}, ${a.length} given`);return{id:`stock-${n}`,name:e,side:"offense",kind:i,description:s,formation:t,qbDepth:c.qbDepth??0,linemen:c.linemen??5,extraSide:c.extraLinemanSide??"right",qb:r,ol:o,slots:c.slots.map((l,u)=>{const h=uM(a[u],l.dx),d={...l,markers:h.markers};return h.route&&(d.route=h.route),d}),stock:!0}}const N={blitz:[{t:"blitz"}],man:[{t:"man"}],spy:[{t:"spy"}],flatL:[{t:"zone",zone:"flat",side:"left"}],flatR:[{t:"zone",zone:"flat",side:"right"}],curlL:[{t:"zone",zone:"curl",side:"left"}],curlR:[{t:"zone",zone:"curl",side:"right"}],hook:[{t:"zone",zone:"hook"}],deep:[{t:"zone",zone:"deep"}],fakeBlitz:[{t:"blitz"},{t:"zone",zone:"hook"}]};function Qt(n,e,t,i,s,r){const o=On.find(a=>a.name===t);if(!o)throw new Error(`unknown formation ${t}`);if(r.length!==o.slots.length)throw new Error(`${e}: ${o.slots.length} slots in ${t}, ${r.length} given`);return{id:`stock-${n}`,name:e,side:"defense",kind:i,description:s,formation:t,qbDepth:0,linemen:5,extraSide:"right",qb:[],ol:[],slots:o.slots.map((a,c)=>({...a,markers:r[c]})),stock:!0}}const kp=[Qe("four-verticals","Four Verticals","Shotgun spread","pass","All four receivers go deep; the slots run the seams. Read the seams first, then the outside.",Ot("S3","S4","S1","S2"),Ft,["check-release","go","go","seam","seam"]),Qe("mesh","Mesh","Shotgun spread","pass","The two slots cross just beyond the line to rub off man coverage; a corner and a curl outside, the back on an angle.",Ot("S3","S4","S0","S1"),Ft,["angle","corner","curl","drag","drag"]),Qe("smash","Smash","Shotgun spread","pass","Hitch outside and corner from the slot on both sides: a high-low on the cornerback.",Ot("S3","S1","S4","S2"),Ft,["rb-flat","hitch","hitch","corner","corner"]),Qe("curl-flat","Curl-Flat","Shotgun spread","pass","Curls outside, flats from the slots: a high-low on the flat defender on both sides.",Ot("S1","S3","S2","S4"),Ft,["pass","curl","curl","flat","flat"]),Qe("slant-flat","Slant-Flat","Shotgun spread","pass","Quick slants outside with the slots to the flat. The ball is out in timeslice 2.",Ot("S1","S2","S3","S4"),Ft,["pass","slant","slant","flat","flat"]),Qe("levels","Levels","Shotgun spread","pass","A dig over a shallow and a square-in: three receivers at three depths across the middle.",Ot("S3","S4","S1","S0"),Ft,["check-release","dig","go","shallow","in"]),Qe("dagger","Dagger","Shotgun spread","pass","The slot clears the middle up the seam; the outside receiver digs in behind him.",Ot("S3","S1","S4","S2"),Ft,["pass","dig","go","seam","curl"]),Qe("drive","Drive","Shotgun spread","pass","A drag under a dig from the same side, a post and a comeback away from it.",Ot("S3","S1","S4","S0"),Ft,["swing","dig","post","drag","comeback"]),Qe("all-hitches","All Hitches","Shotgun spread","pass","Every receiver hitches at five yards; throw to whoever is uncovered.",Ot("S1","S2","S3","S4"),Ft,["rb-flat","hitch","hitch","hitch","hitch"]),Qe("rb-screen","Back Screen","Shotgun spread","screen","The back slips out after a count while the receivers clear out; the linemen release to block after the catch.",Ot("S0","S0","S0","S0"),cM,["screen","go","go","go","go"]),Qe("draw","Draw","Shotgun spread","run","The quarterback shows pass; the back blocks a count, then takes the hand-off in timeslice 2.",[cn("S1"),ln("S0")],[{t:"passblock"},{t:"runblock"},{t:"runblock"},{t:"runblock"}],[[{t:"passblock"},{t:"run",side:"right",lane:"dive"}],"go","go","seam","seam"]),Qe("gun-inside-zone","Inside Zone","Shotgun spread","run","The back takes the hand-off across the quarterback and dives into the left A gap; receivers block.",[ln("S0")],Un,[{run:"dive",side:"left"},"run","run","run","run"]),Qe("gun-sprint","Outside Zone","Shotgun spread","run","The back takes the ball wide to the right behind the line.",[ln("S0")],Un,[{run:"sprint",side:"right"},"run","run","run","run"]),Qe("gun-pa-seams","Play Action Seams","Shotgun spread","playAction","A fake inside zone, then the slots up the seams.",[ln("S0"),cn("S3"),cn("S4"),cn("S1")],Oo,[{run:"dive",side:"left"},"go","comeback","seam","seam"]),Qe("flood","Flood (Sail)","Trips right","pass","Three levels to the right: a go, a sail and a flat. The backside receiver digs.",Ot("S2","S3","S4","S1"),Ft,["pass","dig","go","sail","flat"]),Qe("stick","Stick","Trips right","pass","The slot sticks at five yards with the tight end in the flat; the outside receiver clears.",Ot("S3","S4","S1","S0"),Ft,["check-release","slant","go","stick","flat"]),Qe("y-cross","Y-Cross","Trips right","pass","The tight end crosses deep; the backside receiver posts; the slot runs an arrow underneath.",Ot("S4","S1","S3","S2"),Ft,["pass","post","go","arrow","cross"]),Qe("trips-spacing","Spacing","Trips right","pass","Quick throws: a stick, a hitch and a flat to the trips side, a slant backside.",Ot("S3","S4","S2","S1"),Ft,["check-release","slant","hitch","stick","flat"]),Qe("trips-verts","Trips Verticals","Trips right","pass","All three to the right go deep; the backside receiver runs a post.",Ot("S3","S4","S2","S1"),Ft,["pass","post","go","seam","te-seam"]),Qe("post-wheel","Post-Wheel","Singleback","pass","The right receiver posts to pull the safety; the back wheels up the sideline behind him.",Ot("S0","S3","S2","S4"),Ft,[{route:"wheel",out:"right"},"te-seam","dig","post","drag"]),Qe("single-zone-right","Zone Right","Singleback","run","The back dives into the right A gap behind zone blocking.",[ln("S0")],Un,[{run:"dive",side:"right"},"run","run","run","run"]),Qe("single-stretch","Stretch","Singleback","run","The back takes the ball wide to the right behind the tight end.",[ln("S0")],Un,[{run:"sprint",side:"right"},"run","run","run","run"]),Qe("single-pa-post","Play Action Post","Singleback","playAction","A fake dive to freeze the linebackers, then the post behind them.",[ln("S0"),cn("S3"),cn("S1"),cn("S4")],Oo,[{run:"dive",side:"left"},"corner","go","post","drag"]),Qe("single-curls","Curls","Singleback","pass","Curls outside with the slot and tight end in the flats; the back checks and releases.",Ot("S2","S3","S4","S1"),Ft,[{route:"check-release",out:"right"},"flat","curl","curl","flat"]),Qe("iso","Iso","I formation","run","The fullback leads through the right A gap and the back follows him.",[ln("S1")],Un,["run",{run:"dive",side:"right"},"run","run","run"]),Qe("power","Power","I formation","run","The back runs off tackle to the left behind the fullback and the line.",[ln("S1")],Un,["run",{run:"offtackle",side:"left"},"run","run","run"]),Qe("toss","Toss Sweep","I formation","run","The back sprints wide to the right with the fullback and tight end leading.",[ln("S1")],Un,["run",{run:"sprint",side:"right"},"run","run","run"]),Qe("fb-dive","Fullback Dive","I formation","run","The fullback takes the quick hand-off into the left A gap.",[ln("S0")],Un,[{run:"dive",side:"left"},"run","run","run","run"]),Qe("counter","Counter","I formation","run","The back delays a count, then takes the hand-off off tackle to the left.",[cn("S4"),ln("S1")],Un,["run",[{t:"delay"},{t:"run",side:"left",lane:"offtackle"}],"run","run","run"]),Qe("i-pa-post","Play Action Post","I formation","playAction","A fake iso, then the post over the top; the tight end runs the corner.",[ln("S1"),cn("S3"),cn("S2"),cn("S4")],Oo,["pass",{run:"dive",side:"right"},"corner","post","go"]),Qe("i-flood","Flood","I formation","pass","A go, the tight end on a corner and the fullback in the flat to the right.",Ot("S2","S0","S4","S3"),Ft,[{route:"rb-flat",out:"right"},"pass","corner","dig","go"]),Qe("empty-verts","Empty Verticals","Empty","pass","Five receivers deep: goes outside, seams inside, the tight end up the middle.",Ot("S2","S3","S4","S0"),Ft,["go","go","seam","seam","te-seam"]),Qe("empty-spacing","Empty Spacing","Empty","pass","Quick throws everywhere: hitches outside, flats from the slots, the tight end sticks.",Ot("S4","S2","S3","S0"),Ft,["hitch","hitch","flat","flat","stick"]),Qe("empty-mesh","Empty Mesh","Empty","pass","The slots mesh under a dig and a corner; the tight end crosses.",Ot("S2","S3","S4","S0"),Ft,["dig","corner","drag","drag","te-cross"]),Qe("jumbo-dive","Jumbo Dive","Jumbo (6 linemen)","run","Six linemen and two tight ends: the back dives into the right A gap.",[ln("S1")],Un,["run",{run:"dive",side:"right"},"run","run"]),Qe("jumbo-pa-te","Jumbo Play Action","Jumbo (6 linemen)","playAction","A fake dive, then the tight ends release: one up the seam, one across.",[ln("S1"),cn("S2"),cn("S3"),cn("S0")],Oo,[{route:"rb-flat",out:"right"},{run:"dive",side:"left"},"te-seam","te-cross"])],Pp=[Qt("cover1","Cover 1","4-3","man","Man coverage everywhere with the free safety deep; the middle linebacker spies the quarterback.",[N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.spy,N.man,N.man,N.man,N.deep,N.man]),Qt("cover2","Cover 2","4-3","zone","Corners in the flats, linebackers in the curls and the hook, both safeties deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.hook,N.curlR,N.flatL,N.flatR,N.deep,N.deep]),Qt("cover3","Cover 3","4-3","zone","Three deep (both corners and the free safety); the strong safety rolls down to the flat.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.hook,N.curlR,N.deep,N.deep,N.deep,N.flatR]),Qt("cover4","Cover 4 (Quarters)","4-3","zone","Four deep; the linebackers cover the flats and the hook.",[N.blitz,N.blitz,N.blitz,N.blitz,N.flatL,N.hook,N.flatR,N.deep,N.deep,N.deep,N.deep]),Qt("cover0","Cover 0 Blitz","4-3","blitz","Six rushers and man coverage with nobody deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.man,N.man,N.man,N.man]),Qt("tampa2","Tampa 2","4-3","zone","Cover 2 with the middle linebacker dropping deep down the middle.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.deep,N.curlR,N.flatL,N.flatR,N.deep,N.deep]),Qt("fire-zone","Fire Zone","4-3","blitz","The left end drops to the flat while both outside linebackers blitz; three deep behind it.",[N.flatL,N.blitz,N.blitz,N.blitz,N.blitz,N.hook,N.blitz,N.deep,N.deep,N.deep,N.flatR]),Qt("spy","Cover 2 Spy","4-3","zone","Cover 2 with the middle linebacker spying a running quarterback.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.spy,N.curlR,N.flatL,N.flatR,N.deep,N.deep]),Qt("fake-blitz","Show Blitz","4-3","zone","The linebackers show blitz, then drop into the hook zone in timeslice 2 behind a cover 2 shell.",[N.blitz,N.blitz,N.blitz,N.blitz,N.fakeBlitz,N.fakeBlitz,N.fakeBlitz,N.flatL,N.flatR,N.deep,N.deep]),Qt("34-cover2","3-4 Cover 2","3-4","zone","The outside linebackers rush with the three linemen; cover 2 behind.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.curlR,N.blitz,N.flatL,N.flatR,N.deep,N.deep]),Qt("34-cover3","3-4 Cover 3","3-4","zone","Three deep with the inside linebackers in the curls and the outside linebackers in the flats.",[N.blitz,N.blitz,N.blitz,N.flatL,N.curlL,N.curlR,N.flatR,N.deep,N.deep,N.deep,N.hook]),Qt("34-man-blitz","3-4 Man Blitz","3-4","blitz","Both outside linebackers come; man coverage with one safety deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.spy,N.blitz,N.man,N.man,N.deep,N.man]),Qt("nickel-2man","Nickel 2-Man","Nickel 4-2-5","man","Man coverage underneath with both safeties deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.man,N.man,N.man,N.man,N.deep,N.deep]),Qt("nickel-cover3","Nickel Cover 3","Nickel 4-2-5","zone","Three deep; the nickel back and the strong safety take the flats.",[N.blitz,N.blitz,N.blitz,N.blitz,N.curlL,N.curlR,N.deep,N.deep,N.flatL,N.deep,N.flatR]),Qt("nickel-blitz","Nickel Blitz","Nickel 4-2-5","blitz","The nickel back and a linebacker blitz; man coverage with the free safety deep.",[N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.man,N.man,N.blitz,N.deep,N.man]),Qt("dime-quarters","Dime Quarters","Dime 4-1-6","zone","Four deep with the lone linebacker in the hook and the extra backs in the flats.",[N.blitz,N.blitz,N.blitz,N.blitz,N.hook,N.deep,N.deep,N.flatL,N.flatR,N.deep,N.deep]),Qt("goal-line","Goal Line Pinch","Goal line 5-3","blitz","Everyone up front comes; the corners and the safety play man.",[N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.blitz,N.man,N.man,N.man]),Qt("prevent","Prevent","Prevent 3-1-7","zone","Three deep, curls and flats underneath: nothing over the top.",[N.blitz,N.blitz,N.blitz,N.hook,N.curlL,N.curlR,N.flatL,N.flatR,N.deep,N.deep,N.deep])],dM=[...kp,...Pp];function hM(n){return n==="offense"?kp:Pp}const kh=["#ffd166","#9fd4ff","#b1ffc9","#ffb3b1","#e0b0ff","#ffffff","#f5a524","#4fd0ff"];function wu(n,e,t){const i=Wr(n,e,t);if(i)return i.name;const s=(n??[]).filter(a=>a.t!=="filler");if(s.length===0)return"—";const r=s.map(a=>a.t==="read"||a.t==="handoff"?a.t==="read"?"Read":"Hand off":bs(a));return r.filter((a,c)=>r.indexOf(a)===c).join(" · ")}function fM(n,e){switch(n.zone){case"flat":return n.side==="left"?{x0:0,x1:It-fa,y0:e,y1:e+ua}:{x0:It+fa,x1:qe,y0:e,y1:e+ua};case"curl":return n.side==="left"?{x0:0,x1:It,y0:e+da,y1:Math.min(Yt,e+ha)}:{x0:It,x1:qe,y0:e+da,y1:Math.min(Yt,e+ha)};case"hook":return{x0:0,x1:qe,y0:e+ip,y1:Math.min(Yt,e+sp)};case"deep":return{x0:0,x1:qe,y0:e+rp,y1:Yt}}}function pM(n){return n.zone==="flat"||n.zone==="curl"?`${n.zone} ${n.side}`:n.zone}function Yc(n){const e=[],t=[],i=n.players.filter(r=>r.def.position==="OL").map(r=>r.pos).sort((r,o)=>r.x-o.x);let s=0;if(n.side==="offense")for(const r of n.players){const o=n.markers[r.id];if(!o)continue;const a=n.routes[r.id]?_s(n.routes[r.id]):null,c={laneTarget:(d,f)=>fp(i,d,f),boardMinY:n.boardMinY,...a?{break:a.break}:{}},l=_x(r.pos,r.def.skills.speed,o,c);if(l.slices.length===0)continue;const h=o.some(d=>d.t==="run")?"#ff9f43":kh[s++%kh.length];e.push({id:r.id,points:l.points,tail:l.tail,cutAt:l.cutAt,color:h,label:wu(o,r.pos.x,n.routes[r.id]),dim:n.selected!==null&&n.selected!==r.id,sideline:l.sideline})}else for(const r of n.players){const o=n.markers[r.id];if(o)for(let a=0;a<o.length;a++){const c=o[a];if(c.t==="zone"){const l=c.zone==="flat"||c.zone==="curl"?{zone:c.zone,side:c.side}:{zone:c.zone},u=pM(l);t.some(h=>h.label===u)||t.push({zone:l,rect:fM(l,n.los),label:u})}if(c.t==="blitz"&&a===0){const l={x:r.pos.x+(It-r.pos.x)*.35,y:Math.max(n.boardMinY+me,r.pos.y-5)};e.push({id:r.id,points:[r.pos,l],tail:null,cutAt:null,color:"#ff6b6b",label:o[1]&&o[1].t!=="filler"&&o[1].t!=="blitz"?`Blitz, then ${bs(o[1])}`:void 0,dim:n.selected!==null&&n.selected!==r.id,sideline:!1})}}}return{routes:e,zones:t}}function Yr(n,e){if(!e)return null;if(n.kind==="move")return n.movers.find(t=>t.id===e)??null;if(n.kind==="freeBlockers"){const t=n.blockers.find(i=>i.id===e);return t?{id:e,allowance:t.allowance,mode:{t:"free"},done:t.done}:null}return null}function Ph(n,e,t,i){const s=n.f(e).pos,r=[];for(let o=0;o<360;o+=15){const a=ai(s,Ii(En(o),Ze));$r(n.moveCtx(),a,[t])&&(i&&!i(a)||r.push({key:String(o),pos:a}))}return r}const Lh=Pi(()=>{const n=Nt.value,e=vn.value,t={selected:$t.value,highlights:{},showTrails:!0};if(!n)return t;const i=n.play,s=Oa(n),r=Hc.value;if(r&&!t.highlights[r]&&(t.highlights[r]="hover"),!e||!i||!s)return t;const o=[];for(const[c,l]of Object.entries(i.assignments)){if(l.t!=="zone"||i.ball.inPlay&&i.phase!=="defenseReveal")continue;const u=l.zone,h=s.zoneLabel(u);o.some(d=>d.label===h)||o.push({zone:u,rect:s.zoneRect(u),label:h})}t.zones=o;const a=hr.value;switch(e.kind){case"lineup":{const c=Hn.value;if(c&&a){t.positions=Object.fromEntries(c.placements.map(d=>[d.id,d.pos])),t.extraTokens=c.placements.map(d=>({id:d.id,side:c.side,pos:d.pos}));const l=new Set,u=n.config.teams[c.coach][c.side];for(const d of c.placements){const f=u.find(m=>m.id===d.id);f&&((c.side==="defense"||f.position!=="OL"&&f.position!=="QB")&&l.add(d.id),f.position==="QB"&&l.add(d.id))}t.draggable=l;const h=xu(c.coach,c.side);if(h&&Su.value.length<2){const d=c.placements.map(_=>({id:_.id,position:u.find(v=>v.id===_.id).position,pos:_.pos})),f=Eu(h,d,e.los),m=Yc({side:c.side,players:d.map(_=>({id:_.id,def:u.find(v=>v.id===_.id),pos:_.pos})),markers:f.markers,routes:f.routes,selected:null,los:e.los,boardMinY:i.boardMinY});t.routes=m.routes,t.zones=[...o,...m.zones]}}break}case"markers":{const c=hs.value;if(c&&a){t.markerOverride=c.markers;const l=n.config.teams[c.coach][c.side],u=Object.values(i.players).filter(d=>d.side===c.side).map(d=>({id:d.id,def:l.find(f=>f.id===d.id),pos:d.pos})),h=Yc({side:c.side,players:u,markers:c.markers,routes:c.routes,selected:Js.value?Ai.value?.id??null:null,los:i.los,boardMinY:i.boardMinY});t.routes=h.routes,t.zones=[...o,...h.zones]}break}case"manTarget":{for(const c of e.options)t.highlights[c]="option";t.highlights[e.defender]="selected";break}case"switchOption":{t.highlights[e.defender]="selected",t.highlights[e.target]="target";break}case"freeBlockers":{for(const u of e.blockers)u.done||(t.highlights[u.id]="option");const c=Xt.value,l=e.blockers.find(u=>u.id===c);if(l){t.highlights[l.id]="selected";for(const h of l.engageable)t.highlights[h]="engageable";if(l.designated&&(t.highlights[l.designated]="designated"),Gn.value==="move"&&!l.done){const h=Yr(e,l.id);t.mover={id:l.id,spec:h};const d=zc.value;d&&(t.preview=Dh(s,h,d))}t.rings=[{id:l.id,radius:me+Pa,color:"#58c27d",dashed:!0}]}break}case"move":{for(const u of e.movers)!u.done&&u.mode.t!=="none"&&(t.highlights[u.id]="option");for(const u of e.movers)!u.done&&(u.mayDisengage||u.mayBlitz)&&(t.highlights[u.id]="option");const c=Xt.value,l=Yr(e,c);if(l&&!l.done){t.highlights[l.id]="selected";const u=si.value==="disengage"?{...l,mode:{t:"free"}}:l;t.mover={id:l.id,spec:u};const h=zc.value;h&&u.mode.t!=="none"&&(t.preview=Dh(s,u,h)),t.rings=mM(s,l.id)}break}case"engageOffer":{t.highlights[e.blocker]="engageable",t.highlights[e.defender]="danger";break}case"pushAround":{t.highlights[e.winner]="selected",t.highlights[e.loser]="target";const c=Mi.value,l=c.anchor&&e.blockers.includes(c.anchor)?c.anchor:e.winner,u=gM(n,l,e.loser,c.push,c.turn,c.follow,e.blockers);u&&(t.ghosts=u);break}case"pancakeChoice":{for(const c of e.blockers)t.highlights[c]="option";t.highlights[e.defender]="selected";break}case"breakThrough":{t.highlights[e.defender]="selected",t.highlights[e.blocker]="target",t.ghosts=Ph(s,e.blocker,e.defender).map(c=>({...c,color:"#ef6461"}));break}case"clutchTackle":{t.highlights[e.defender]="danger",t.highlights[e.carrier]="target";break}case"jumpTackle":{for(const c of e.candidates)t.highlights[c]="option";t.highlights[e.carrier]="target";break}case"tackleStyle":{t.highlights[e.tackler]="danger",t.highlights[e.carrier]="target";break}case"missedTackle":{t.highlights[e.tackler]="danger",t.highlights[e.carrier]="selected";const c=s.f(e.tackler).pos;t.ghosts=Ph(s,e.tackler,e.carrier,l=>l.y<=c.y+1e-6).map(l=>({...l,color:"#58c27d"}));break}case"pass":{const c=i.ball.carrier;for(const u of e.options)t.highlights[u.target]=u.isRead?"target":"option";const l=rr.value??Hc.value;c&&(t.rings=[{id:c,radius:me+Jf,color:"#ef6461",dashed:!0}],l&&e.options.some(u=>u.target===l)&&(t.highlights[l]="selected",t.passLine={from:s.f(c).pos,to:s.f(l).pos},t.rings.push({id:l,radius:me+jf,color:"#9fd4ff",dashed:!0})));break}case"contest":{t.highlights[e.receiver]="target";const c=fs.value;for(const l of e.defenders)t.highlights[l]=c[l]==="cleanShot"?"danger":"option";break}case"cleanShot":{t.highlights[e.carrier]="target";for(const c of e.tacklers)t.highlights[c]="danger";break}}return t});function Dh(n,e,t){const i=n.f(e.id).pos,s=Ex(n,e,t);if("error"in s)return{from:i,to:t,ok:!1,marks:[],text:s.error};const r=s.plan,o=[];for(const c of r.events)c.kind==="hole"&&o.push({at:c.at,kind:"hole"});r.clipped&&r.clipped.reason!=="allowance"&&o.push({at:r.to,kind:"stop"});const a=r.clipped?.reason==="blocked"?`Blocked by ${r.clipped.by?n.short(r.clipped.by):"a player"}`:r.clipped?.reason==="bounds"?"Reaches the boundary":r.clipped?.reason==="line"?"Linemen stay behind the line until the ball is in play":r.clipped?.reason==="overlap"?"Cannot end on another base":`${r.distance.toFixed(1)} cm`;return{from:i,to:r.to,ok:!0,marks:o,text:a}}function mM(n,e){const t=n.play,i=[],s=n.f(e),r=n.effectiveCarrier();if(s.side==="offense"&&e===r)for(const o of n.defensePlayers())!n.canAct(o.id)||o.s.tackled||(s.cannotTackleUntil[o.id]??0)>t.slice||(n.isEngaged(o.id)?o.s.clutchEligible&&i.push({id:o.id,radius:me+ca,color:"#f5a524"}):i.push({id:o.id,radius:me+vu,color:"#ef6461",dashed:!0}));else if(s.side==="defense"){for(const[o,a]of Object.entries(t.designations))a!==e||!t.players[o]||i.push({id:o,radius:me+Pa,color:"#58c27d",dashed:!0});r&&n.has(r)&&i.push({id:r,radius:me+.05,color:"#ffffff",dashed:!0})}else s.side;return i}function gM(n,e,t,i,s,r,o){const a=structuredClone(n),c=Oa(a);if(!c)return null;const l=o.includes(e)?t:e,u=o.filter(d=>d!==e&&d!==t);try{gp(c,e,t,i,s,r,u,l)}catch{return null}const h=[];for(const d of[e,t,...u]){const f=n.play.players[d].pos,m=a.play.players[d].pos;ht(f,m)>1e-6&&h.push({key:`push-${d}`,pos:m,color:d===t?"#ef6461":"#f2c14e",label:String(c.def(d).number)})}return h}async function Ce(n){const e=await tM(n);!e.ok&&e.error&&Ap(e.error)}function vM(n,e=null){const t=vn.value,i=Nt.value;if(!t||!i||!hr.value){$t.value=n;return}if((t.kind==="move"||t.kind==="freeBlockers")&&n===Xt.value&&e){const s=Yr(t,n);if(s&&!s.done&&(t.kind==="move"?s.mode.t!=="none"||si.value==="disengage":Gn.value==="move")){qc(e);return}}switch(t.kind){case"manTarget":t.options.includes(n)?Ce({kind:"manTarget",target:n}):$t.value=n;return;case"freeBlockers":{if(t.blockers.find(o=>o.id===n)){Xt.value=n,Gn.value="move",$t.value=n;return}const r=t.blockers.find(o=>o.id===Xt.value);if(r&&i.play?.players[n]?.side==="defense"){r.engageable.includes(n)&&r.mayEngage&&Gn.value!=="designate"?Ce({kind:"engage",blocker:r.id,defender:n}):Ce({kind:"designate",blocker:r.id,defender:n});return}$t.value=n;return}case"move":{const s=t.movers.find(o=>o.id===n);if(s&&!s.done){Xt.value=n,si.value="move",$t.value=n;return}if(Yr(t,Xt.value)&&i.play?.players[n]){qc(i.play.players[n].pos);return}$t.value=n;return}case"jumpTackle":t.candidates.includes(n)&&Ce({kind:"jumpTackle",defender:n});return;case"pancakeChoice":t.blockers.includes(n)&&Ce({kind:"pancakeChoice",blocker:n});return;case"pushAround":t.blockers.includes(n)&&t.blockers.includes(t.winner)&&(Mi.value={...Mi.value,anchor:n});return;case"pass":{t.options.some(s=>s.target===n)?rr.value===n?Ce({kind:"pass",target:n}):rr.value=n:$t.value=n;return}case"contest":{if(t.defenders.includes(n)){const s=fs.value[n]??"contest";fs.value={...fs.value,[n]:s==="contest"?"cleanShot":"contest"}}return}case"cleanShot":t.tacklers.includes(n)&&Ce({kind:"cleanShot",tackler:n});return;case"markers":{$t.value=n;const s=hs.value;s&&s.markers[n]&&(Ai.value={id:n,slot:Ai.value?.id===n?Ai.value.slot:0},Js.value=!0);return}default:$t.value=n}}function qc(n){const e=vn.value,t=Nt.value;if(!e||!t||!hr.value){$t.value=null;return}if(e.kind==="move"){const i=Yr(e,Xt.value);if(!i||i.done)return;si.value==="disengage"?Ce({kind:"disengage",id:i.id,to:n}):i.mode.t!=="none"&&Ce({kind:"move",id:i.id,to:n});return}if(e.kind==="freeBlockers"){const i=e.blockers.find(s=>s.id===Xt.value);i&&!i.done&&Gn.value==="move"&&Ce({kind:"move",id:i.id,to:n});return}e.kind!=="lineup"&&e.kind!=="markers"&&($t.value=null)}function _M(n){const e=vn.value;!e||!hr.value||(e.kind==="breakThrough"?Ce({kind:"breakThrough",angle:Number(n)}):e.kind==="missedTackle"&&Ce({kind:"missedTackle",angle:Number(n)}))}function yM(n,e){zc.value=n,Hc.value=e}function bM(n,e,t){const i=Hn.value,s=Nt.value,r=vn.value;if(!i||!s||!r||r.kind!=="lineup")return;const a=s.config.teams[i.coach][i.side].find(u=>u.id===n);if(!a)return;let c={x:e.x,y:e.y};const l=r.los;if(i.side==="offense"){if(a.position==="OL")return;if(a.position==="QB"){const u=l-me-Ze;c={x:(s.config,31),y:Math.max(u-4,Math.min(u,e.y))},i.qbDepth=Math.round((u-c.y)*10)/10}else c.y=Math.min(c.y,l-me)}else c.y=Math.max(c.y,l+me);c.x=Math.max(me,Math.min(62-me,c.x)),c={x:Math.round(c.x*10)/10,y:Math.round(c.y*10)/10},Hn.value={...i,placements:i.placements.map(u=>u.id===n?{id:n,pos:c}:u)}}function SM(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function xM(n){const e=Nt.value;if(!e)return g("div",{class:"scoreboard"});const t=vn.value,i=e.play,s=i&&!i.result?i.offense:e.possession,r=({c:l})=>g("div",{class:`team-score ${s===l?"has-ball":""}`,children:[g("div",{class:"swatch",style:{background:Sa(l)}}),g("div",{class:"name",children:e.config.teams[l].name}),g("div",{class:"pts",children:e.score[l]})]}),o=e.lineToGain<=0?"goal":Math.max(0,Math.round(e.ballOn-e.lineToGain)),a=Xr(e.ballOn),c=e.clock.mode==="twoMinute"?`Two-minute mode: ${e.clock.snapsLeft} snap${e.clock.snapsLeft===1?"":"s"} left`:e.config.gameType==="full"?`Drive ${e.clock.drivesCompleted+1}`:e.overtime.active?"Overtime":MM(e.config.gameType);return g("div",{class:"scoreboard",children:[g(r,{c:"home"}),g(r,{c:"away"}),g("div",{class:"situation",children:[e.stage==="over"?g("span",{class:"big",children:"FINAL"}):e.stage==="kickoff"?g("span",{class:"big",children:"Kick-off"}):e.stage==="try"?g("span",{class:"big",children:"Try"}):g(Wt,{children:[g("span",{class:"big",children:[SM(e.down)," & ",o]}),g("span",{class:"muted",children:["at ",a]})]}),g("span",{class:"muted",children:c}),i&&i.slice>0&&!i.result&&g("span",{class:"chip",children:["Timeslice ",i.slice]})]}),g("div",{class:"spacer"}),g("span",{class:"muted",children:wn.value?.status.value}),t&&t.coach!=="both"&&g("span",{class:"coachtag",style:{background:Sa(t.coach)},children:[e.config.teams[t.coach].abbreviation," to act"]}),g("button",{class:"small",onClick:()=>{wn.value?.undo()},title:"Undo the last action",children:"Undo"}),g("button",{class:"small",onClick:()=>EM(),title:"Download the game (seed and actions)",children:"Save"}),g("button",{class:"small",onClick:n.onNewGame,children:"New game"})]})}function MM(n){switch(n){case"full":return"Full game";case"collegeOT":return"College overtime";case"suddenDeathClassic":return"Sudden death (classic)";case"suddenDeathModern":return"Sudden death (modern)";default:return n}}function EM(){const n=wn.value?.save();if(!n)return;const e=new Blob([JSON.stringify(n)],{type:"application/json"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=`afm-game-${Date.now()}.json`,t.click()}const Dl=["defenseReveal","offenseReveal","freeBlockers","resolveBlocks","ballCarrier","defenders","receivers","zones","pass"];function TM(){const e=Nt.value?.play;if(!e)return null;if(e.phase==="lineupOffense"||e.phase==="lineupDefense"||e.phase==="markers")return g("div",{class:"panel",children:[g("h3",{children:"Preparing the play"}),g("div",{class:"phasebar",children:["lineupOffense","lineupDefense","markers"].map(s=>g("span",{class:`ph ${s===e.phase?"now":Dl.indexOf(s)<0&&Ih(s)<Ih(e.phase)?"done":""}`,children:vh[s]}))})]});const i=Dl.indexOf(e.phase);return g("div",{class:"panel",children:[g("h3",{children:["Timeslice ",e.slice,e.slice>4?" (play has broken down)":"",e.ball.inPlay?" · ball in play":"",e.ball.loose?" · LOOSE BALL":""]}),g("div",{class:"phasebar",children:[Dl.map((s,r)=>g("span",{class:`ph ${s===e.phase?"now":r<i?"done":""}`,children:vh[s]})),e.phase==="looseBall"&&g("span",{class:"ph now",children:"Loose ball"}),e.phase==="over"&&g("span",{class:"ph now",children:"Play over"})]})]})}function Ih(n){return["lineupOffense","lineupDefense","markers"].indexOf(n)}const Lp="afm-playbooks";function wM(){try{const n=JSON.parse(localStorage.getItem(Lp)??"null");if(n&&Array.isArray(n.plays)&&Array.isArray(n.playbooks))return n}catch{}return{plays:[],playbooks:[]}}const Dp=wM(),dn=nt(Dp.plays),Ut=nt(Dp.playbooks);function Ni(){try{localStorage.setItem(Lp,JSON.stringify({plays:dn.value,playbooks:Ut.value}))}catch{}}function AM(n){return dM.find(e=>e.id===n)??dn.value.find(e=>e.id===n)}function Kc(n){const e={...n,stock:!1};dn.value=[...dn.value.filter(t=>t.id!==e.id),e],Ni()}function CM(n){dn.value=dn.value.filter(e=>e.id!==n),Ut.value=Ut.value.map(e=>({...e,plays:e.plays.filter(t=>t!==n)})),Ni()}const Ip={offense:"stock-offense",defense:"stock-defense"},RM={offense:"custom-offense",defense:"custom-defense"};function Np(n){const e=[{id:Ip[n],name:"Stock plays",side:n,plays:hM(n).map(i=>i.id)}],t=dn.value.filter(i=>i.side===n);return t.length&&e.push({id:RM[n],name:"My plays",side:n,plays:t.map(i=>i.id)}),[...e,...Ut.value.filter(i=>i.side===n)]}function Up(n,e){return Np(e).find(t=>t.id===n)}function kM(n,e){const t={id:`book-${Date.now().toString(36)}-${Math.floor(Math.random()*1e6).toString(36)}`,name:n,side:e,plays:[]};return Ut.value=[...Ut.value,t],Ni(),t}function PM(n,e){Ut.value=Ut.value.map(t=>t.id===n?{...t,name:e}:t),Ni()}function LM(n){Ut.value=Ut.value.filter(e=>e.id!==n),Ni()}function Zc(n,e){Ut.value=Ut.value.map(t=>t.id===n&&!t.plays.includes(e)?{...t,plays:[...t.plays,e]}:t),Ni()}function DM(n,e){Ut.value=Ut.value.map(t=>t.id===n?{...t,plays:t.plays.filter(i=>i!==e)}:t),Ni()}function Nh(n,e,t){Ut.value=Ut.value.map(i=>{if(i.id!==n)return i;const s=i.plays.indexOf(e),r=s+t;if(s<0||r<0||r>=i.plays.length)return i;const o=[...i.plays];return[o[s],o[r]]=[o[r],o[s]],{...i,plays:o}}),Ni()}function Op(n){return n.plays.map(AM).filter(e=>!!e)}function IM(n,e){try{localStorage.setItem(`afm-playbook-last-${n}`,e)}catch{}}function NM(n){try{const e=localStorage.getItem(`afm-playbook-last-${n}`);if(e&&Up(e,n))return e}catch{}return Ip[n]}function UM(){return JSON.stringify({plays:dn.value,playbooks:Ut.value},null,2)}function OM(n){const e=JSON.parse(n),t=(e.plays??[]).filter(o=>o&&typeof o.id=="string"&&Array.isArray(o.slots)),i=(e.playbooks??[]).filter(o=>o&&typeof o.id=="string"&&Array.isArray(o.plays)),s=new Set(t.map(o=>o.id));dn.value=[...dn.value.filter(o=>!s.has(o.id)),...t.map(o=>({...o,stock:!1}))];const r=new Set(i.map(o=>o.id));return Ut.value=[...Ut.value.filter(o=>!r.has(o.id)),...i],Ni(),{plays:t.length,playbooks:i.length}}function Au(n){const[e,t]=kt(()=>NM(n.side)),[i,s]=kt(!1),r=Np(n.side),o=r.find(f=>f.id===e)??r[0],a=Op(o),c=n.value?.formation.endsWith(" (flipped)")??!1,l=n.value&&a.some(f=>f.id===n.value.id)?n.value.id:"",u=f=>{t(f),IM(n.side,f)},h=f=>{const m=a.find(_=>_.id===f);if(!m)return n.onPick(null);n.onPick(c?Xc(m):m)};if(n.hideValue&&n.value&&!i)return g("div",{class:"row playpicker",children:[n.label&&g("span",{class:"muted",children:n.label}),g("span",{class:"chip good",children:"play called (hidden)"}),g("button",{class:"small",onClick:()=>s(!0),children:"Change"}),g("button",{class:"small",onClick:()=>n.onPick(null),title:"Clear the play",children:"×"})]});const d=f=>{h(f),s(!1)};return g("div",{class:"col playpicker",children:[g("div",{class:"row",children:[n.label&&g("span",{class:"muted",children:n.label}),g("select",{value:o.id,onChange:f=>u(f.target.value),title:"Playbook",children:r.map(f=>g("option",{value:f.id,children:[f.name," (",f.plays.length,")"]}))}),g("select",{value:l,onChange:f=>d(f.target.value),style:{flex:1,minWidth:140},title:"Play",children:[g("option",{value:"",children:"— choose a play —"}),a.map(f=>g("option",{value:f.id,children:[f.name," · ",Dr[f.kind],f.stock?"":" ★"]}))]}),!n.noFlip&&g("button",{class:`small ${c?"active":""}`,disabled:!n.value,onClick:()=>n.value&&n.onPick(Xc(n.value)),title:"Mirror the play left to right",children:"Flip"}),n.value&&g("button",{class:"small",onClick:()=>n.onPick(null),title:"Clear the play",children:"×"})]}),!n.compact&&!n.hideValue&&n.value&&g("div",{class:"muted playdesc",children:[g("b",{children:n.value.name}),c?" (flipped)":""," · ",n.value.formation.replace(" (flipped)","")," · ",Dr[n.value.kind],g("div",{children:n.value.description})]})]})}function FM(n){const e=Nt.value;if(!e)return;const t=e.config.teams[n.coach][n.side],i=Hn.value,s=n.side==="offense"?ti:On,r=localStorage.getItem(`afm-formation-${n.coach}-${n.side}`),o=s.find(c=>c.name===(i&&i.side===n.side&&i.coach===n.coach?i.formation:r))??s[0],a=e.play?.boardMinY??0;Mu(n.coach,n.side,null),Hn.value={coach:n.coach,side:n.side,formation:o.name,qbDepth:o.qbDepth??0,linemen:o.linemen??5,extraSide:o.extraLinemanSide??"right",placements:_a(o,t,n.los,a)}}function BM(){const n=vn.value,e=Nt.value,t=Hn.value;if(!n||n.kind!=="lineup"||!e||!t)return null;const i=e.config.teams[n.coach][n.side],s=n.side==="offense"?ti:On,r=e.play?.boardMinY??0,o=e.play?Object.values(e.play.players).filter(w=>w.side==="offense").map(w=>w.pos):[],a=Mp(n.side,i,t.placements,n.los,r,o),c=t.placements.map(w=>w.id),l=zx(i,c),u=$t.value&&c.includes($t.value)?$t.value:null,h=u?i.find(w=>w.id===u):null,d=xu(n.coach,n.side),f=Su.value.length===2,m=(w,P)=>{Hn.value={...t,formation:P,qbDepth:w.qbDepth??0,linemen:w.linemen??5,extraSide:w.extraLinemanSide??"right",placements:_a(w,i,n.los,r)}},_=w=>{const P=s.find(I=>I.name===w);localStorage.setItem(`afm-formation-${n.coach}-${n.side}`,w),m(P,w)},v=w=>{Mu(n.coach,n.side,w),w&&m(Rp(w),w.formation)},p=w=>{const P=i.find(I=>I.position==="QB"&&c.includes(I.id));P&&(Hn.value={...t,qbDepth:w,placements:t.placements.map(I=>I.id===P.id?{id:I.id,pos:Ua(n.los,w)}:I)})},b=(w,P)=>{const I=i.filter(B=>B.position==="OL"),T=t.placements.filter(B=>I.some(z=>z.id===B.id)),E=t.placements.filter(B=>!I.some(z=>z.id===B.id)),D=va(n.los,w,P),F=[...T.map(B=>B.id),...I.filter(B=>!T.some(z=>z.id===B.id)).map(B=>B.id)].slice(0,w);let k=E;if(w===6&&k.length>5){const B=i.find(W=>W.position==="QB"),z=k.filter(W=>W.id!==B?.id);k=k.filter(W=>W.id!==z[z.length-1]?.id)}Hn.value={...t,linemen:w,extraSide:P,placements:[...F.map((B,z)=>({id:B,pos:D[z]})),...k]}},S=(w,P)=>{Hn.value={...t,placements:t.placements.map(I=>I.id===w?{id:P.id,pos:I.pos}:I)},$t.value=P.id},x=t.placements.length-(n.side==="offense"?t.linemen+1:0),A=s.some(w=>w.name===t.formation);return g("div",{class:"col",children:[g(Au,{side:n.side,value:d,onPick:v,label:"Play",hideValue:f}),d&&g("div",{class:"muted",children:f?"The play's formation is lined up. Its markers load behind the curtain in the next step, where you can still adjust them.":"The play's formation is lined up and its routes are drawn. Its markers load in the next step, where you can still adjust them."}),g("div",{class:"row",children:[g("span",{class:"muted",children:"Formation"}),g("select",{value:A?t.formation:"",onChange:w=>_(w.target.value),children:[!A&&g("option",{value:"",children:t.formation}),s.map(w=>g("option",{value:w.name,children:w.name}))]}),n.side==="offense"&&g(Wt,{children:[g("button",{class:`small ${t.linemen===5?"active":""}`,onClick:()=>b(5,t.extraSide),children:"5 OL"}),g("button",{class:`small ${t.linemen===6&&t.extraSide==="left"?"active":""}`,onClick:()=>b(6,"left"),children:"6 OL (left)"}),g("button",{class:`small ${t.linemen===6&&t.extraSide==="right"?"active":""}`,onClick:()=>b(6,"right"),children:"6 OL (right)"})]})]}),n.side==="offense"&&g("label",{class:"row",children:[g("span",{style:{minWidth:120},children:["QB depth ",t.qbDepth.toFixed(1)," cm"]}),g("input",{type:"range",min:0,max:4,step:.5,value:t.qbDepth,onInput:w=>p(Number(w.target.value))}),g("span",{class:"muted",children:t.qbDepth===0?"under centre":"shotgun"})]}),g("div",{class:"muted",children:["Drag ",n.side==="offense"?"skill players":"defenders"," on the board. ",n.side==="offense"?`${x} skill players.`:""," Click a player to substitute."]}),h&&g("div",{class:"col",children:[g("div",{children:["Substitute ",g("b",{children:Cp(h.id)})," with:"]}),g("div",{class:"row",children:l.filter(w=>n.side==="offense"?h.position==="OL"?w.position==="OL":h.position==="QB"?w.position==="QB":w.position!=="OL"&&w.position!=="QB":!0).map(w=>g("button",{class:"small",onClick:()=>S(h.id,w),children:[w.position," #",w.number," ",w.name.split(" ").slice(-1)[0]]}))})]}),a.length>0&&g("div",{class:"error",children:a.slice(0,4).map(w=>g("div",{children:w.text}))}),g("div",{class:"row",children:[g("span",{class:"spacer"}),g("button",{class:"primary",disabled:a.length>0,onClick:()=>Ce({kind:"lineup",placements:t.placements}),children:n.side==="offense"?"Set: defense lines up next":"Set: place markers"})]})]})}const zM=["quick","intermediate","deep","double","backfield","delayed"];function HM(n){const e=Nt.value;if(!e||!e.play)return;const t=Object.values(e.play.players).filter(o=>o.side===n.side).map(o=>o.id),i={};for(const o of t)i[o]=xt([],n.slots);let s={coach:n.coach,side:n.side,markers:i,routes:{},play:null};const r=xu(n.coach,n.side);r&&(s=Fp(s,r,n)),hs.value=s,Ai.value=t.length?{id:t[0],slot:0}:null,Js.value=!1}function Fp(n,e,t){const i=Nt.value;if(!i||!i.play)return n;const s=i.config.teams[t.coach][t.side],r=Object.values(i.play.players).filter(c=>c.side===t.side).map(c=>({id:c.id,position:s.find(l=>l.id===c.id).position,pos:c.pos})),o=Eu(e,r,i.play.los),a={...n.markers};for(const c of Object.keys(o.markers))a[c]=xt(o.markers[c],t.slots);return{...n,markers:a,routes:o.routes,play:e}}function GM(){const n=vn.value,e=Nt.value,t=hs.value,[i,s]=kt(""),[r,o]=kt(""),a=Js.value;if(!n||n.kind!=="markers"||!e||!e.play||!t)return null;const c=e.config.teams[n.coach][n.side],l=Object.values(e.play.players).filter(k=>k.side===n.side).map(k=>c.find(B=>B.id===k.id)).sort((k,B)=>xa(k.position)-xa(B.position)||k.number-B.number),u=k=>e.play.players[k].pos,h=yu(n.side,l,t.markers),d=h.filter(k=>k.severity==="error"),f=h.filter(k=>k.severity==="warning"),m=Ai.value&&t.markers[Ai.value.id]?Ai.value:null,_=m?l.find(k=>k.id===m.id):null,v=m?t.markers[m.id][m.slot]:null,p=Ut.value.filter(k=>k.side===n.side),b=k=>hs.value={...t,...k},S=(k,B,z)=>{const W={...t.routes};z?W[k]=z:delete W[k],b({markers:{...t.markers,[k]:xt(B,n.slots)},routes:W})},x=(k,B,z)=>{const W=[...t.markers[k]??xt([],n.slots)];W[B]=z;const J=Wr(W,u(k).x,t.routes[k]);S(k,W,J?.id)},A=(k,B)=>{const z={...t.markers};for(const W of l.filter(J=>J.position==="OL")){const J=[...z[W.id]??xt([],n.slots)];if(B===null)for(let X=0;X<n.slots;X++)J[X]=k;else J[B]=k;z[W.id]=J}b({markers:z})},w=(k,B,z)=>{const W=[...t.markers[k]??xt([],n.slots)];for(let J=B;J<n.slots;J++)W[J]=z;S(k,W)},P=(k,B)=>{const z=_s(B);if(!z)return S(k,[]);S(k,hp(z,u(k).x),z.id)},I=(k,B)=>{Ai.value={id:k,slot:B},$t.value=k,Js.value=!0},T=k=>{if(!k){const B={};for(const z of l)B[z.id]=xt([],n.slots);b({markers:B,routes:{},play:null});return}hs.value=Fp(t,k,n),Mu(n.coach,n.side,k)},E=()=>{const k=i.trim();if(!k)return;const B=t.play,z=B?.kind??VM(n.side,t.markers),W=lM({id:Tu(),name:k,side:n.side,kind:z,description:B?`From ${B.name}.`:"",formation:B?.formation??"Custom",qbDepth:B?.qbDepth??0,linemen:l.filter(J=>J.position==="OL").length===6?6:5,extraSide:B?.extraSide??"right"},l.map(J=>({id:J.id,position:J.position,pos:u(J.id),markers:t.markers[J.id]??[],route:t.routes[J.id]})),e.play.los);Kc(W),r&&Zc(r,W.id),b({play:W}),s(""),Ap(`Saved "${k}" to your plays${r?" and the playbook":""}.`)},D=l.filter(k=>k.id!==m?.id),F=k=>Wr(t.markers[k.id],u(k.id).x,t.routes[k.id]);return g("div",{class:"col",children:[g(Au,{side:n.side,value:t.play,onPick:T,label:"Play"}),g("div",{class:"muted",children:t.play?"The play is drawn on the board. Click a player to adjust his markers.":"Pick a play, or click a player and give him a route or markers. The board shows what the markers do."}),g("div",{class:"list",children:l.map(k=>{const B=F(k),z=m&&m.id===k.id;return g("div",{class:`item playrow ${z?"sel":""}`,onClick:()=>I(k.id,z&&a?m.slot:0),children:[g("span",{class:"num",children:["#",k.number]}),g("span",{class:"pos",children:k.position}),g("span",{class:"rsum",title:B?.note??"",children:wu(t.markers[k.id],u(k.id).x,t.routes[k.id])}),g("span",{class:"spacer"}),g("span",{class:"minislots",children:xt(t.markers[k.id],n.slots).map((W,J)=>g("span",{class:`mini ${W.t} ${z&&m.slot===J?"sel":""}`,title:`Timeslice ${J+1}: ${bs(W)}`,onClick:X=>{X.stopPropagation(),I(k.id,J)},children:Vp(W,l)}))})]})})}),m&&_&&v&&a&&g("div",{class:"panel markermenu",children:[g("div",{class:"row",children:[g("b",{children:[_.position," #",_.number," ",_.name]}),g("span",{class:"spacer"}),g("button",{class:"small",onClick:()=>Js.value=!1,title:"Close the marker menu",children:"×"})]}),n.side==="offense"&&La(_.position).includes("cut")&&g("label",{class:"row",children:[g("span",{class:"muted",style:{minWidth:44},children:"Route"}),g(Bp,{value:F(_)?.id??"",onChange:k=>P(m.id,k)})]}),g("div",{class:"slots",children:xt(t.markers[m.id],n.slots).map((k,B)=>g("div",{class:`slot ${k.t} ${m.slot===B?"sel":""}`,onClick:()=>I(m.id,B),title:`Timeslice ${B+1}`,children:[g("span",{class:"muted",style:{fontSize:9},children:["T",B+1]}),g("span",{class:"t",children:k.t==="filler"?"filler":Gp(k,l)})]}))}),g(Hp,{def:_,slotIndex:m.slot,current:v,teammates:D,onSet:k=>x(m.id,m.slot,k),onFillRest:k=>w(m.id,m.slot,k),onAllLinemen:_.position==="OL"?(k,B)=>A(k,B?null:m.slot):void 0}),g("div",{class:"row",children:[g("button",{class:"small",disabled:m.slot>=n.slots-1,onClick:()=>I(m.id,m.slot+1),children:"Next slot →"}),g("button",{class:"small",onClick:()=>{const k=l.findIndex(z=>z.id===m.id),B=l[(k+1)%l.length];I(B.id,0)},children:"Next player ↓"})]})]}),g("details",{class:"panel saveplay",children:[g("summary",{children:"Save as a custom play"}),g("div",{class:"row",children:[g("input",{placeholder:"play name",value:i,onInput:k=>s(k.target.value),style:{flex:1}}),g("select",{value:r,onChange:k=>o(k.target.value),title:"Also add it to a playbook",children:[g("option",{value:"",children:"my plays only"}),p.map(k=>g("option",{value:k.id,children:["+ ",k.name]}))]}),g("button",{class:"small",onClick:E,disabled:!i.trim(),children:"Save"})]}),g("div",{class:"muted",children:"Saves the players' spots and markers as a play you can call again and edit in the play creator."})]}),d.length>0&&g("div",{class:"error",children:d.slice(0,4).map(k=>g("div",{children:k.text}))}),f.length>0&&g("div",{class:"chip warn",style:{whiteSpace:"normal"},children:f.map(k=>g("div",{children:k.text}))}),g("div",{class:"row",children:[g("span",{class:"spacer"}),g("button",{class:"primary",disabled:d.length>0,onClick:()=>Ce({kind:"markers",markers:t.markers}),children:"Place markers face down"})]})]})}function Bp(n){return g("select",{value:n.value,onChange:e=>n.onChange(e.target.value),style:{flex:1},children:[g("option",{value:"",children:"— no route (markers by hand) —"}),zM.map(e=>g("optgroup",{label:up[e],children:Da.filter(t=>t.group===e).map(t=>g("option",{value:t.id,title:t.note,children:[t.name,t.tree!==void 0?` (${t.tree})`:""," · ",zp(t.id)]}))}))]})}function zp(n){const e=_s(n);return e?e.steps.map(t=>{switch(t.t){case"up":return"Up";case"angle":return`${t.toward==="in"?"In":"Out"} ${t.angle}°`;case"continue":return"Cont";case"delay":return"Delay";case"cut":return`Cut ${t.cut}`}}).join(" › "):""}function VM(n,e){const t=Object.values(e).flat();if(n==="defense")return t.some(r=>r.t==="man")?"man":t.filter(r=>r.t==="blitz").length>5?"blitz":"zone";const i=t.some(r=>r.t==="handoff"),s=t.some(r=>r.t==="read");return i&&s?"playAction":i?"run":t.some(r=>r.t==="delay")&&t.some(r=>r.t==="runblock")?"screen":"pass"}function Hp(n){const e=La(n.def.position),t=n.current,[i,s]=kt(t.t==="dir"&&t.dir!=="up"?t.angle:45),[r,o]=kt(t.t==="read"||t.t==="handoff"?t.target:n.teammates.find(u=>u.position!=="OL")?.id??""),a=(u,h,d="")=>g("button",{class:`small ${d} ${WM(t,h)?"active":""}`,onClick:()=>n.onSet(h),children:u}),c=n.teammates.filter(u=>u.position!=="OL"),l=u=>r||u?.id||"";return g("div",{class:"col",children:[g("div",{class:"markerbtns",children:[e.includes("filler")&&a("Filler",{t:"filler"}),e.includes("passblock")&&a("Pass block",{t:"passblock"}),e.includes("runblock")&&a("Run block",{t:"runblock"}),e.includes("spy")&&a("Spy",{t:"spy"}),e.includes("blitz")&&a("Blitz",{t:"blitz"}),e.includes("man")&&a("Man",{t:"man"}),e.includes("continue")&&a("Continue",{t:"continue"}),e.includes("delay")&&a("Delay",{t:"delay"})]}),(e.includes("read")||e.includes("handoff"))&&c.length>0&&g("div",{class:"row",children:[g("select",{value:r,onChange:u=>o(u.target.value),children:c.map(u=>g("option",{value:u.id,children:[u.position," #",u.number," ",u.name]}))}),e.includes("read")&&a("Read",{t:"read",target:l(c[0])}),e.includes("handoff")&&n.slotIndex<2&&a("Hand off",{t:"handoff",target:l(c[0])})]}),e.includes("run")&&n.slotIndex<2&&g("div",{class:"markerbtns",children:["left","right"].map(u=>["dive","offtackle","sprint"].map(h=>a(`${h==="dive"?"Dive":h==="offtackle"?"Off tackle":"Sprint"} ${u}`,{t:"run",side:u,lane:h})))}),e.includes("dir")&&g("div",{class:"col",children:[g("div",{class:"row",children:[a("Up",{t:"dir",dir:"up"}),a(`Left ${i}°`,{t:"dir",dir:"left",angle:i}),a(`Right ${i}°`,{t:"dir",dir:"right",angle:i})]}),g("label",{class:"row",children:[g("span",{class:"muted",style:{minWidth:70},children:["angle ",i,"°"]}),g("input",{type:"range",min:10,max:170,step:5,value:i,onInput:u=>s(Number(u.target.value))})]})]}),e.includes("cut")&&g("div",{class:"markerbtns",children:[a("Cut in",{t:"cut",cut:"in"}),a("Cut out",{t:"cut",cut:"out"}),a("Cut hook",{t:"cut",cut:"hook"}),a("Cut fly",{t:"cut",cut:"fly"})]}),e.includes("zone")&&g("div",{class:"markerbtns",children:[a("Flat L",{t:"zone",zone:"flat",side:"left"}),a("Flat R",{t:"zone",zone:"flat",side:"right"}),a("Hook",{t:"zone",zone:"hook"}),a("Curl L",{t:"zone",zone:"curl",side:"left"}),a("Curl R",{t:"zone",zone:"curl",side:"right"}),a("Deep",{t:"zone",zone:"deep"})]}),g("div",{class:"row",children:[g("button",{class:"small",onClick:()=>n.onFillRest(t),children:"Fill remaining slots with this"}),n.onAllLinemen&&g(Wt,{children:[g("button",{class:"small",onClick:()=>n.onAllLinemen(t,!1),children:"All linemen, this slot"}),g("button",{class:"small",onClick:()=>n.onAllLinemen(t,!0),children:"All linemen, all slots"})]})]})]})}function WM(n,e){return JSON.stringify(n)===JSON.stringify(e)}function Gp(n,e){if(n.t==="read"||n.t==="handoff"){const t=e.find(i=>i.id===n.target);return`${n.t==="read"?"Read":"Hand"} #${t?.number??"?"}`}return bs(n)}function Vp(n,e){switch(n.t){case"filler":return"·";case"read":return`R${e.find(t=>t.id===n.target)?.number??"?"}`;case"handoff":return`H${e.find(t=>t.id===n.target)?.number??"?"}`;case"run":return`${n.lane==="dive"?"DV":n.lane==="offtackle"?"OT":"SP"}${n.side==="left"?"L":"R"}`;case"passblock":return"PB";case"runblock":return"RB";case"dir":return n.dir==="up"?"UP":`${n.dir==="left"?"L":"R"}${n.angle}`;case"continue":return"CO";case"delay":return"DL";case"cut":return`C${n.cut==="in"?"I":n.cut==="out"?"O":n.cut==="hook"?"H":"F"}`;case"man":return"MAN";case"zone":return n.zone==="flat"?`FL${n.side==="left"?"L":"R"}`:n.zone==="curl"?`CU${n.side==="left"?"L":"R"}`:n.zone==="hook"?"HK":"DP";case"spy":return"SPY";case"blitz":return"BLZ"}}function xa(n){return["QB","RB","FB","WR","TE","OL","DL","LB","CB","S"].indexOf(n)}function bt(n){const e=hr.value;return g("div",{class:`panel prompt ${e?"":"other"}`,children:[g("div",{class:"row",children:[n.d.coach!=="both"&&g("span",{class:"coachtag",style:{background:Sa(n.d.coach)},children:Wc(n.d.coach)}),g("span",{class:"prompt-title",children:n.title})]}),n.hint&&g("div",{class:"muted",children:n.hint}),n.d.error&&g("div",{class:"error",children:n.d.error}),e?n.children:g("div",{class:"muted",children:"Waiting for the other coach…"})]})}function $M(n){switch(n.mode.t){case"free":return"any direction";case"fixed":return`straight ahead (${Math.round(n.mode.angle)}°)`;case"sector":return n.mode.label;case"closer":return`towards the ${n.mode.label}`;case"zone":return`within the ${n.mode.label} zone`;case"along":return n.mode.label;case"none":return n.mode.reason}}function XM(){const n=vn.value,e=Nt.value;if(!n||!e)return null;const t=Oa(e),i=s=>Cp(s);switch(n.kind){case"callToss":return g(bt,{d:n,title:"Call the toss",hint:"The visiting coach calls heads or tails.",children:g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"callToss",call:"heads"}),children:"Heads"}),g("button",{class:"primary",onClick:()=>Ce({kind:"callToss",call:"tails"}),children:"Tails"})]})});case"tossChoice":return g(bt,{d:n,title:"You won the toss",children:g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"tossChoice",choice:"receive"}),children:"Receive"}),g("button",{onClick:()=>Ce({kind:"tossChoice",choice:"kick"}),children:"Kick"})]})});case"kickoffType":return g(bt,{d:n,title:"Kick-off",hint:"A normal kick travels 2d20 plus the kicker's successrate beyond the 30. An onside kick is KICKING against COVERAGE +10; the winner has the ball at the kicking team's 40.",children:g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"kickoffType",type:"normal"}),children:"Kick deep"}),g("button",{onClick:()=>Ce({kind:"kickoffType",type:"onside"}),children:"Onside kick"})]})});case"fairCatch":return g(bt,{d:n,title:n.inEndzone?"The kick reaches the endzone":`The kick comes down at ${Xr(n.spotYtg)}`,hint:"A fair catch takes the ball where it is (the 20 from the endzone). A return is RETURN against COVERAGE, d20 yards per win; five wins in a row is a touchdown.",children:g("div",{class:"row",children:[g("button",{onClick:()=>Ce({kind:"fairCatch",fairCatch:!0}),children:n.inEndzone?"Take the touchback":"Fair catch"}),g("button",{class:"primary",onClick:()=>Ce({kind:"fairCatch",fairCatch:!1}),children:"Return it"})]})});case"puntPerfect":return g(bt,{d:n,title:"A PERFECT kick: where do you put it?",children:g("div",{class:"row",children:[g("button",{onClick:()=>Ce({kind:"puntPerfect",choice:"touchback"}),children:"Into the endzone (touchback, their 20)"}),g("button",{class:"primary",onClick:()=>Ce({kind:"puntPerfect",choice:"oneYardLine"}),children:"On the 1 yard line (returnable)"})]})});case"playCall":return g(bt,{d:n,title:`${YM(e.down)} and ${e.lineToGain<=0?"goal":Math.round(e.ballOn-e.lineToGain)} at ${Xr(e.ballOn)}`,children:g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"playCall",call:"scrimmage"}),children:"Run a play"}),n.options.includes("punt")&&g("button",{onClick:()=>Ce({kind:"playCall",call:"punt"}),children:"Punt"}),n.options.includes("fieldGoal")&&g("button",{onClick:()=>Ce({kind:"playCall",call:"fieldGoal"}),children:["Field goal (",n.fieldGoalLength," yd, ",n.fieldGoalModifier>=0?"+":"",n.fieldGoalModifier,")"]})]})});case"tryChoice":return g(bt,{d:n,title:"Touchdown! The try",hint:"An extra point is good on anything but a critical failure. A two-point attempt is one play from the 2 yard line.",children:g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"tryChoice",choice:"kick"}),children:"Kick the extra point"}),g("button",{onClick:()=>Ce({kind:"tryChoice",choice:"two"}),children:"Go for two"})]})});case"lineup":return g(bt,{d:n,title:`${n.side==="offense"?"Offense":"Defense"} lines up`,children:g(BM,{})});case"markers":return g(bt,{d:n,title:`${n.side==="offense"?"Offense":"Defense"} places markers`,children:g(GM,{})});case"manTarget":return g(bt,{d:n,title:`${i(n.defender)}: man coverage on whom?`,hint:"Click an offensive player on the board or below. The assignment cannot be changed later.",children:g("div",{class:"list",children:n.options.map(s=>g("div",{class:"item",onClick:()=>Ce({kind:"manTarget",target:s}),children:i(s)}))})});case"switchOption":return g(bt,{d:n,title:`${i(n.defender)} is in man coverage on a pass blocker`,hint:`${i(n.target)} revealed a pass block. The defender may switch to a blitz (no pre-snap move) or a zone, or stay (p. 37).`,children:g("div",{class:"row",children:[g("button",{onClick:()=>Ce({kind:"switchOption",choice:{t:"stay"}}),children:"Stay in man"}),g("button",{class:"primary",onClick:()=>Ce({kind:"switchOption",choice:{t:"blitz"}}),children:"Blitz"}),g("select",{value:kl.value,onChange:s=>kl.value=s.target.value,children:[g("option",{value:"flat-left",children:"Flat left"}),g("option",{value:"flat-right",children:"Flat right"}),g("option",{value:"hook",children:"Hook"}),g("option",{value:"curl-left",children:"Curl left"}),g("option",{value:"curl-right",children:"Curl right"}),g("option",{value:"deep",children:"Deep"})]}),g("button",{onClick:()=>Ce({kind:"switchOption",choice:{t:"zone",zone:qM(kl.value)}}),children:"Zone"})]})});case"freeBlockers":{const s=n.blockers.find(r=>r.id===Xt.value);return g(bt,{d:n,title:"Move free blockers and designate blocks",hint:"Pick a blocker. Move him (click the field), designate the defender he will pick up (click a defender), or engage a defender within 2 cm now (green).",children:[g("div",{class:"list",children:n.blockers.map(r=>g("div",{class:`item ${r.id===Xt.value?"sel":""} ${r.done?"done":""}`,onClick:()=>(Xt.value=r.id,Gn.value="move"),children:[g("span",{class:"num",children:i(r.id).split(" ")[1]}),g("span",{class:"pos",children:i(r.id).split(" ")[0]}),g("span",{class:"chip",children:[r.kind," block"]}),g("span",{class:"muted",children:r.mayRelease?"double team":`${r.allowance.toFixed(1)} cm`}),r.designated&&g("span",{class:"chip warn",children:["→ ",i(r.designated).split(" ").slice(0,2).join(" ")]}),r.engageable.length>0&&r.mayEngage&&!r.done&&g("span",{class:"chip good",children:"can engage"}),r.done&&g("span",{class:"muted",children:"moved"})]}))}),s&&g("div",{class:"row",children:[!s.done&&!s.mayRelease&&g("button",{class:Gn.value==="move"?"active":"",onClick:()=>Gn.value="move",children:"Move: click the field"}),!s.mayRelease&&g("button",{class:Gn.value==="designate"?"active":"",onClick:()=>Gn.value="designate",children:"Designate: click a defender"}),s.designated&&g("button",{onClick:()=>Ce({kind:"designate",blocker:s.id,defender:null}),children:"Clear designation"}),s.engageable.map(r=>g("button",{class:"primary",disabled:!s.mayEngage,onClick:()=>Ce({kind:"engage",blocker:s.id,defender:r}),children:["Engage ",i(r)]})),s.mayRelease&&g("button",{onClick:()=>Ce({kind:"release",blocker:s.id}),children:"Leave the double team"}),!s.mayEngage&&s.kind==="run"&&g("span",{class:"muted",children:"Run blocks engage only once the ball is in play."})]}),g("div",{class:"row",children:[g("span",{class:"spacer"}),g("button",{class:"primary",onClick:()=>Ce({kind:"finish"}),children:"Done with blockers"})]})]})}case"move":{const s=n.movers.find(o=>o.id===Xt.value),r=n.movers.filter(o=>!o.done);return g(bt,{d:n,title:n.title,hint:"Pick a player, then click where he goes. Moves are straight lines up to his movement allowance.",children:[g("div",{class:"list",children:n.movers.map(o=>g("div",{class:`item ${o.id===Xt.value?"sel":""} ${o.done?"done":""}`,onClick:()=>(Xt.value=o.id,si.value="move"),children:[g("span",{class:"num",children:i(o.id).split(" ")[1]}),g("span",{class:"pos",children:i(o.id).split(" ")[0]}),g("span",{class:"muted",children:[o.allowance.toFixed(1)," cm"]}),g("span",{class:"muted",style:{fontSize:11},children:o.done?"done":$M(o)}),o.cutPending&&g("span",{class:"chip warn",children:"cut: ROUTES roll"}),o.mayDisengage&&g("span",{class:"chip",children:"may disengage"}),o.mayBlitz&&g("span",{class:"chip",children:"spy"}),o.mandatory&&g("span",{class:"chip warn",children:"run lane"})]}))}),s&&!s.done&&g("div",{class:"col",children:[s.note&&g("div",{class:"muted",children:s.note}),g("div",{class:"row",children:[s.mode.t!=="none"&&g("button",{class:si.value==="move"?"active":"",onClick:()=>si.value="move",children:"Move: click the field"}),s.mayDisengage&&g("button",{class:si.value==="disengage"?"active":"",onClick:()=>si.value="disengage",children:"Disengage (−1 cm): click the field"}),s.mayBlitz&&g("button",{onClick:()=>Ce({kind:"declareBlitz",id:s.id}),children:"Declare blitz"}),g("button",{onClick:()=>Ce({kind:"skipMove",id:s.id}),children:"Stay where he is"})]})]}),g("div",{class:"row",children:[g("span",{class:"muted",children:[r.length," left"]}),g("span",{class:"spacer"}),n.canFinish&&g("button",{class:"primary",onClick:()=>Ce({kind:"finish"}),children:"End phase"})]})]})}case"engageOffer":return g(bt,{d:n,title:`${i(n.defender)} comes within 2 cm of ${i(n.blocker)}`,hint:`${i(n.blocker)} designated him: he may step into contact and ${n.kind2} block him now (the block is resolved at once).`,children:g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"engageOffer",accept:!0}),children:"Block him"}),g("button",{onClick:()=>Ce({kind:"engageOffer",accept:!1}),children:"Let him go"})]})});case"pushAround":{const s=Mi.value,r=n.blockers.includes(n.winner);return g(bt,{d:n,title:`${i(n.winner)} won the block: push around?`,hint:"Push the loser up to 2 cm back and/or turn him up to 45°. If you turn you must follow; if you only push you may stay.",children:g("div",{class:"col",children:[r&&n.blockers.length>1&&g("div",{class:"row",children:[g("span",{class:"muted",children:"Push from"}),n.blockers.map(o=>g("button",{class:`small ${(s.anchor??n.winner)===o?"active":""}`,onClick:()=>Mi.value={...s,anchor:o},children:i(o)}))]}),g("label",{class:"row",children:[g("span",{style:{minWidth:90},children:["Push ",s.push.toFixed(1)," cm"]}),g("input",{type:"range",min:0,max:2,step:.25,value:s.push,onInput:o=>Mi.value={...s,push:Number(o.target.value)}})]}),g("label",{class:"row",children:[g("span",{style:{minWidth:90},children:["Turn ",s.turn,"°"]}),g("input",{type:"range",min:-45,max:45,step:5,value:s.turn,onInput:o=>Mi.value={...s,turn:Number(o.target.value)}})]}),g("label",{class:"row",children:[g("input",{type:"checkbox",checked:s.follow||s.turn!==0,disabled:s.turn!==0,onChange:o=>Mi.value={...s,follow:o.target.checked}}),g("span",{children:"Follow him (stay in contact)"})]}),g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"pushAround",push:s.push,turn:s.turn,follow:s.follow||s.turn!==0,anchor:s.anchor??void 0}),children:"Apply"}),g("button",{onClick:()=>Ce({kind:"pushAround",push:0,turn:0,follow:!1}),children:"No push"})]})]})})}case"pancakeChoice":return g(bt,{d:n,title:`${i(n.defender)} pancakes a blocker: which one?`,children:g("div",{class:"row",children:n.blockers.map(s=>g("button",{class:"primary",onClick:()=>Ce({kind:"pancakeChoice",blocker:s}),children:i(s)}))})});case"breakThrough":return g(bt,{d:n,title:`${i(n.defender)} breaks through!`,hint:`Place him anywhere in contact with ${i(n.blocker)}: click one of the red spots on the board. He acts normally next timeslice.`});case"clutchTackle":return g(bt,{d:n,title:`${i(n.defender)} may clutch tackle ${i(n.carrier)}`,hint:"A clutch tackle is made while being blocked: TACKLE at a penalty of half the tackling skill (rounded up).",children:g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"clutchTackle",attempt:!0}),children:"Attempt it"}),g("button",{onClick:()=>Ce({kind:"clutchTackle",attempt:!1}),children:"Let him pass"})]})});case"jumpTackle":return g(bt,{d:n,title:`${i(n.carrier)} runs within 2 cm of a defender`,hint:"He must stop here. One unblocked defender may step into contact and tackle (click him), or let him continue.",children:g("div",{class:"row",children:[n.candidates.map(s=>g("button",{class:"primary",onClick:()=>Ce({kind:"jumpTackle",defender:s}),children:[i(s)," tackles"]})),g("button",{onClick:()=>Ce({kind:"jumpTackle",defender:null}),children:"Let him run"})]})});case"tackleStyle":return g(bt,{d:n,title:`${i(n.tackler)} tackles near the sideline`,hint:"Pushing him out of bounds gives TACKLE +5 but cannot force a fumble.",children:g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>Ce({kind:"tackleStyle",style:"outOfBounds"}),children:"Out of bounds (+5)"}),g("button",{onClick:()=>Ce({kind:"tackleStyle",style:"normal"}),children:"Normal tackle"})]})});case"missedTackle":return g(bt,{d:n,title:`${i(n.tackler)} missed the tackle`,hint:`${i(n.carrier)} may be placed anywhere in contact with the tackler, no closer to the endzone than he is: click a green spot, or stay.`,children:g("div",{class:"row",children:g("button",{onClick:()=>Ce({kind:"missedTackle",angle:null}),children:"Stay where he is"})})});case"pass":{const s=rr.value,r=n.options.find(o=>o.target===s);return g(bt,{d:n,title:"Pass the ball?",hint:n.mayPass?"Click a receiver (twice to throw), or hold the ball and go to the next timeslice.":n.reason,children:[g("div",{class:"list",children:[...n.options].sort((o,a)=>a.total-o.total).map(o=>g("div",{class:`item ${o.target===s?"sel":""}`,onClick:()=>rr.value=o.target,children:[g("span",{class:"num",children:i(o.target).split(" ")[1]}),g("span",{class:"pos",children:i(o.target).split(" ")[0]}),g("span",{class:"muted",children:[o.distanceCm.toFixed(0)," cm"]}),o.isRead&&g("span",{class:"chip good",children:"read"}),g("span",{class:"spacer"}),g("span",{class:`mono ${o.total<0?"neg":""}`,children:o.total>=0?`+${o.total}`:o.total})]}))}),r&&g("div",{class:"modifiers",children:[r.modifiers.map(o=>g(Wt,{children:[g("span",{children:o.label}),g("span",{class:`mono ${o.value<0?"neg":o.value>0?"posv":""}`,children:o.value>=0?`+${o.value}`:o.value})]})),g("span",{style:{fontWeight:600},children:"ACCURACY target"}),g("span",{class:"mono",style:{fontWeight:600},children:(t?.skill(e.play.ball.carrier,"accuracy")??0)+Math.round(r.total)})]}),g("div",{class:"row",children:[g("button",{class:"primary",disabled:!r,onClick:()=>r&&Ce({kind:"pass",target:r.target}),children:["Throw",r?` to ${i(r.target).split(" ").slice(0,2).join(" ")}`:""]}),g("button",{onClick:()=>Ce({kind:"pass",target:null}),children:"Hold the ball"})]})]})}case"contest":{const s=fs.value;return g(bt,{d:n,title:`Pass to ${i(n.receiver)}: contest or clean shot?`,hint:"Contest: COVER vs CATCHING, a chance to defend or intercept, but no tackle if he catches it. Clean shot: let him catch and hit him with TACKLE +5.",children:[g("div",{class:"list",children:n.defenders.map(r=>g("div",{class:"item",onClick:()=>fs.value={...s,[r]:(s[r]??"contest")==="contest"?"cleanShot":"contest"},children:[g("span",{children:i(r)}),g("span",{class:"spacer"}),g("span",{class:`chip ${(s[r]??"contest")==="contest"?"good":"bad"}`,children:(s[r]??"contest")==="contest"?"CONTEST":"CLEAN SHOT"})]}))}),g("div",{class:"row",children:g("button",{class:"primary",onClick:()=>Ce({kind:"contest",choices:Object.fromEntries(n.defenders.map(r=>[r,s[r]??"contest"]))}),children:"Resolve the catch"})})]})}case"cleanShot":return g(bt,{d:n,title:`${i(n.carrier)} caught it: clean shot tackles`,hint:"Each defender who waited may tackle with +5, one at a time.",children:g("div",{class:"row",children:[n.tacklers.map(s=>g("button",{class:"primary",onClick:()=>Ce({kind:"cleanShot",tackler:s}),children:[i(s)," hits him"]})),g("button",{onClick:()=>Ce({kind:"cleanShot",tackler:null}),children:"No tackle"})]})});case"acknowledge":return g(bt,{d:n,title:n.title,hint:n.text,children:g("button",{class:"primary",onClick:()=>Ce({kind:"acknowledge"}),children:"Continue"})});case"gameOver":return g(bt,{d:n,title:"Game over"})}}function YM(n){return n===1?"1st":n===2?"2nd":n===3?"3rd":`${n}th`}function qM(n){switch(n){case"flat-left":return{zone:"flat",side:"left"};case"flat-right":return{zone:"flat",side:"right"};case"curl-left":return{zone:"curl",side:"left"};case"curl-right":return{zone:"curl",side:"right"};case"deep":return{zone:"deep"};default:return{zone:"hook"}}}const KM=["QB","RB","FB","WR","TE","OL"],Wp=["speed","agility","running","tackle","cover","passrush","catching","routes","runblock","passblock","accuracy","poise","arm"],ZM={speed:"SPEED",agility:"AGILITY",running:"RUNNING",tackle:"TACKLE",cover:"COVER",passrush:"RUSH",catching:"CATCHING",routes:"ROUTES",runblock:"RUNBLOCK",passblock:"PASSBLOCK",accuracy:"ACCURACY",poise:"POISE",arm:"ARM"},JM=["kicking","punting","coverage","return"];function jM(n){switch(n){case"speed":return 10;case"running":case"poise":case"arm":return 5;default:return 20}}const QM={QB:[4,8,0,0,0,0,0,0,0,0,10,0,0],RB:[5,10,1,0,0,0,8,8,6,6,0,0,0],FB:[4,8,0,0,0,0,6,8,10,8,0,0,0],WR:[6,10,0,0,0,0,10,10,4,4,0,0,0],TE:[5,8,0,0,0,0,10,10,8,8,0,0,0],OL:[3,6,0,0,0,0,0,0,10,10,0,0,0],DL:[3,8,0,10,4,10,0,0,0,0,0,0,0],LB:[4,10,0,10,8,8,0,0,0,0,0,0,0],CB:[6,10,0,8,10,6,0,0,0,0,0,0,0],S:[5,10,0,10,10,6,0,0,0,0,0,0,0]};function $p(n){const e=QM[n],t={};return Wp.forEach((i,s)=>t[i]=e[s]),t}function eE(){return{kicking:10,punting:10,coverage:10,return:10}}function tE(n){const e=["speed","agility"];return n==="QB"?[...e,"accuracy","poise","arm"]:KM.includes(n)?[...e,"running","catching","routes","runblock","passblock"]:[...e,"tackle","cover","passrush"]}const nE={QB:[],RB:["agility","running"],FB:["runblock"],WR:["catching","routes"],TE:[],OL:["runblock","passblock"],DL:["passrush"],LB:["tackle"],CB:["cover"],S:[]},iE={QB:[],RB:[],FB:[],WR:["runblock","passblock"],TE:[],OL:["agility"],DL:["cover"],LB:[],CB:["passrush"],S:[]};function sE(n,e){return nE[n].includes(e)?"easy":iE[n].includes(e)?"hard":"normal"}function Xp(n,e){return e==="normal"?n<=10?1:[2,3,4,5,8,10,12,14,16,20][n-11]:e==="easy"?n<=12?1:[2,2,4,6,8,10,12,16][n-13]:n<=7?1:[2,2,3,4,5,7,9,12,13,15,18,20,25][n-8]}function rE(n,e){return e==="easy"?[4,4,7,7,10][n-1]:[8,8,10,14,20][n-1]}function oE(n){return n<=5?8:[10,10,15,20,25][n-6]}function aE(n){return[5,5,10,15,20][n-1]}function lE(n,e,t){if(t<1||t>jM(e))throw new Error(`level ${t} out of range for ${e}`);const i=sE(n,e);switch(e){case"speed":return oE(t);case"running":return rE(t,i);case"poise":case"arm":return aE(t);default:return Xp(t,i)}}function cE(n,e,t,i){if(i<=t)return 0;let s=0;for(let r=t+1;r<=i;r++)s+=lE(n,e,r);return s}function uE(n,e){let t=0;for(let i=n+1;i<=e;i++)t+=Xp(i,"normal");return t}function Uh(n){let e=0;for(const i of[...n.offense,...n.defense]){const s=$p(i.position);for(const r of Wp)e+=cE(i.position,r,s[r],i.skills[r])}const t=eE();for(const i of JM)e+=uE(t[i],n.special[i]);return e}function dE(n,e,t,i,s={}){const r={...$p(i),...s};return{id:n,name:e,number:t,position:i,skills:r}}function hE(){const n=Nt.value,e=$t.value;if(!n||!e)return g("div",{class:"panel",children:[g("h3",{children:"Inspector"}),g("div",{class:"muted",children:"Click a player to see his attributes, skills and state."})]});const t=ba(e);if(!t)return null;const i=n.play,s=i?.players[e],r=Oa(n),o=i?.markers[e]??[],a=i?.engagements.find(u=>u.defender===e||u.blockers.includes(e)),c=i?.assignments[e],l=n.config.teams.home.offense.concat(n.config.teams.home.defense).some(u=>u.id===e)?n.config.teams.home.name:n.config.teams.away.name;return g("div",{class:"panel",children:[g("h3",{children:"Inspector"}),g("div",{children:[g("div",{style:{fontSize:15,fontWeight:600},children:["#",t.number," ",t.name]}),g("div",{class:"muted",children:[t.position," · ",l]})]}),g("div",{class:"skills",children:tE(t.position).map(u=>g("div",{children:[g("div",{class:"k",children:ZM[u]}),g("div",{class:"v",children:t.skills[u]})]}))}),s&&r&&g("div",{class:"kv",children:[g("span",{class:"k",children:"Position"}),g("span",{class:"mono",children:[s.pos.x.toFixed(1),", ",s.pos.y.toFixed(1)," cm"]}),g("span",{class:"k",children:"Movement"}),g("span",{children:[r.allowance(e).toFixed(1)," cm this timeslice",s.s.speedPenalty?` (-${s.s.speedPenalty})`:"",s.s.halved?" (halved)":""]}),s.pancakedSlice!==null&&g(Wt,{children:[g("span",{class:"k",children:"Status"}),g("span",{class:"chip bad",children:"Pancaked"})]}),s.s.noAction&&s.pancakedSlice===null&&g(Wt,{children:[g("span",{class:"k",children:"Status"}),g("span",{class:"chip warn",children:"Getting up: no action"})]}),s.s.stranded&&g(Wt,{children:[g("span",{class:"k",children:"Status"}),g("span",{class:"chip warn",children:"Stranded before a hole"})]}),s.draggedBy.length>0&&g(Wt,{children:[g("span",{class:"k",children:"Dragging"}),g("span",{children:s.draggedBy.map(u=>r.short(u)).join(", ")})]}),s.cutSlice!==null&&g(Wt,{children:[g("span",{class:"k",children:"Cut"}),g("span",{children:["made in timeslice ",s.cutSlice]})]}),s.sidelineSlice!==null&&g(Wt,{children:[g("span",{class:"k",children:"Sideline"}),g("span",{children:["reached in timeslice ",s.sidelineSlice]})]}),c&&c.t!=="none"&&g(Wt,{children:[g("span",{class:"k",children:"Assignment"}),g("span",{children:[c.t==="man"?`Man on ${r.short(c.target)}`:c.t==="zone"?`Zone ${r.zoneLabel(c.zone)}`:c.t,s.freeSince!==null&&s.freeSince<=i.slice?" (now free)":""]})]}),a&&g(Wt,{children:[g("span",{class:"k",children:"Blocking"}),g("span",{children:[a.blockers.map(u=>r.short(u)).join(" + ")," vs ",r.short(a.defender)," · dominance ",a.dominance,s.s.clutchEligible?" · may clutch tackle":"",a.mayDisengage&&a.defender===e?" · may disengage":""]})]}),i&&i.designations[e]&&g(Wt,{children:[g("span",{class:"k",children:"Designates"}),g("span",{children:r.short(i.designations[e])})]})]}),o.length>0&&g("div",{children:[g("h3",{children:"Markers"}),g("div",{class:"slots",children:o.map((u,h)=>g("div",{class:`slot ${u.t}`,children:[g("span",{class:"muted",children:["T",h+1]}),g("span",{class:"t",children:u.t==="hidden"?"face down":bs(u)})]}))})]})]})}function fE(){const n=Nt.value,e=Xs(null),t=Ch.value,i=(n?.log??[]).filter(s=>t==="all"?!0:t==="rolls"?s.kind==="roll":s.kind!=="roll"&&s.kind!=="decision");return $s(()=>{const s=e.current;s&&(s.scrollTop=s.scrollHeight)},[i.length,t]),g("div",{class:"logpanel",children:[g("div",{class:"loghead",children:[g("h3",{children:"Log"}),g("div",{class:"tabs",children:["all","events","rolls"].map(s=>g("button",{class:`small ${t===s?"active":""}`,onClick:()=>Ch.value=s,children:s}))}),g("span",{class:"spacer"}),g("span",{class:"muted",children:[i.length," entries"]})]}),g("div",{class:"logbody",ref:e,children:i.slice(-400).map(s=>g("div",{class:`logline ${s.kind}`,children:[s.slice?g("span",{class:"muted",children:`T${s.slice} `}):null,s.text]},s.n))})]})}function pE(n){return g("div",{class:"curtain",onClick:n.onContinue,children:g("div",{class:"card",children:[g("div",{class:"muted",children:"Hidden information"}),g("h1",{children:["Pass the screen to ",g("span",{style:{color:Sa(n.coach)},children:Wc(n.coach)})]}),g("div",{children:n.what}),g("button",{class:"primary",onClick:n.onContinue,children:["I am the ",Wc(n.coach)," coach"]})]})})}function Ma(n,e){return e.map((t,i)=>dE(`${n}-${t.position}-${i+1}-${t.number}`,t.name,t.number,t.position,t.up??{}))}function Yp(){const n=Ma("home",[{name:"Tobias Lund",number:12,position:"QB",up:{accuracy:15,arm:3,poise:2}},{name:"Mikkel Friis",number:7,position:"QB"},{name:"Jonas Berg",number:28,position:"RB",up:{running:4,speed:6,agility:12}},{name:"Emil Dahl",number:33,position:"RB",up:{running:2}},{name:"Rasmus Kjær",number:44,position:"FB",up:{runblock:12}},{name:"Simon Holm",number:81,position:"WR",up:{catching:15,routes:15,speed:8}},{name:"Anders Vang",number:84,position:"WR",up:{catching:12,routes:12,speed:7}},{name:"Casper Nygaard",number:19,position:"WR"},{name:"Mads Toft",number:11,position:"WR"},{name:"Frederik Juhl",number:87,position:"TE",up:{catching:12,runblock:10}},{name:"Oliver Brandt",number:88,position:"TE"},{name:"Henrik Mørk",number:72,position:"OL",up:{passblock:13,runblock:13}},{name:"Lars Winther",number:66,position:"OL",up:{passblock:13,runblock:13}},{name:"Peter Østergaard",number:55,position:"OL",up:{passblock:13,runblock:13}},{name:"Søren Bak",number:64,position:"OL",up:{passblock:13,runblock:13}},{name:"Niels Hvid",number:78,position:"OL",up:{passblock:13,runblock:13}},{name:"Jesper Riis",number:76,position:"OL"},{name:"Thomas Krog",number:70,position:"OL"}]),e=Ma("home",[{name:"Kasper Lindgren",number:91,position:"DL",up:{passrush:15,tackle:11}},{name:"Daniel Skov",number:97,position:"DL",up:{passrush:14,tackle:11}},{name:"Martin Bruun",number:93,position:"DL",up:{passrush:14,tackle:11}},{name:"Jakob Ravn",number:99,position:"DL",up:{passrush:15}},{name:"Nikolaj Steen",number:95,position:"DL"},{name:"Christian Poulsen",number:52,position:"LB",up:{tackle:14,cover:10,speed:5}},{name:"Morten Høj",number:54,position:"LB",up:{tackle:14,cover:10}},{name:"Magnus Eriksen",number:56,position:"LB",up:{tackle:14}},{name:"Kristian Lauritsen",number:58,position:"LB"},{name:"Victor Hald",number:21,position:"CB",up:{cover:14,speed:8,agility:12}},{name:"William Fogh",number:24,position:"CB",up:{cover:14,speed:8,agility:12}},{name:"Lucas Thorsen",number:26,position:"CB"},{name:"Noah Enevoldsen",number:29,position:"CB"},{name:"Sebastian Krarup",number:31,position:"S",up:{tackle:12,cover:13,speed:6}},{name:"Alexander Dam",number:36,position:"S",up:{tackle:12,cover:13}},{name:"Marcus Ipsen",number:38,position:"S"}]);return{name:"Copenhagen Towers",abbreviation:"CPH",colors:{primary:"#1f6feb",secondary:"#e6edf3"},offense:n,defense:e,special:{kicking:14,punting:12,coverage:11,return:11}}}function qp(){const n=Ma("away",[{name:"Bjørn Halvorsen",number:9,position:"QB",up:{accuracy:14,arm:2,poise:3}},{name:"Erik Sand",number:16,position:"QB"},{name:"Aksel Rønne",number:22,position:"RB",up:{running:5,speed:7,agility:13}},{name:"Viggo Strand",number:30,position:"RB",up:{running:3,speed:6}},{name:"Gorm Bjerre",number:42,position:"FB",up:{runblock:14,running:1}},{name:"Ivar Lykke",number:80,position:"WR",up:{catching:13,routes:13,speed:8}},{name:"Hjalte Mose",number:83,position:"WR",up:{catching:12,routes:12}},{name:"Troels Kamp",number:15,position:"WR"},{name:"Esben Gram",number:18,position:"WR"},{name:"Leif Thygesen",number:85,position:"TE",up:{runblock:12,catching:11}},{name:"Ulrik Foss",number:89,position:"TE",up:{runblock:11}},{name:"Knud Vestergaard",number:71,position:"OL",up:{runblock:14,passblock:12}},{name:"Arne Buhl",number:65,position:"OL",up:{runblock:14,passblock:12}},{name:"Sten Clausen",number:57,position:"OL",up:{runblock:14,passblock:12}},{name:"Palle Dyhr",number:63,position:"OL",up:{runblock:14,passblock:12}},{name:"Ole Munch",number:74,position:"OL",up:{runblock:14,passblock:12}},{name:"Carl Agerskov",number:77,position:"OL",up:{runblock:12}},{name:"Finn Hededal",number:60,position:"OL"}]),e=Ma("away",[{name:"Rolf Kjeldsen",number:90,position:"DL",up:{passrush:14,tackle:12}},{name:"Svend Ottesen",number:94,position:"DL",up:{passrush:13,tackle:12}},{name:"Gunnar Lang",number:96,position:"DL",up:{passrush:13,tackle:12}},{name:"Thor Bisgaard",number:92,position:"DL",up:{passrush:13}},{name:"Helge Nørby",number:98,position:"DL"},{name:"Einar Vold",number:50,position:"LB",up:{tackle:15,cover:11,speed:5}},{name:"Asger Lind",number:51,position:"LB",up:{tackle:15,cover:11}},{name:"Vagn Primdahl",number:53,position:"LB",up:{tackle:13}},{name:"Birger Storm",number:59,position:"LB"},{name:"Jens Aagaard",number:20,position:"CB",up:{cover:13,speed:7}},{name:"Poul Rask",number:23,position:"CB",up:{cover:13,speed:7}},{name:"Kaj Wulff",number:25,position:"CB"},{name:"Bent Haugaard",number:27,position:"CB"},{name:"Hans Kyed",number:32,position:"S",up:{tackle:13,cover:12,speed:7}},{name:"Egon Lehmann",number:35,position:"S",up:{tackle:13,cover:12}},{name:"Villy Brix",number:39,position:"S"}]);return{name:"Aarhus Wolves",abbreviation:"AAR",colors:{primary:"#c0392b",secondary:"#f6f1e7"},offense:n,defense:e,special:{kicking:12,punting:13,coverage:12,return:12}}}function mE(n){const[e,t]=kt("redzone"),[i,s]=kt("collegeOT"),[r,o]=kt(()=>Math.floor(Math.random()*1e9)),[a,c]=kt("hotseat"),l=/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)||new URLSearchParams(location.search).has("online"),[u,h]=kt("table-1"),[d,f]=kt("home"),m=Yp(),_=qp(),v={fieldSize:e,gameType:i,seed:r,teams:{home:m,away:_}},p=async b=>{const S=await b.text(),x=JSON.parse(S);n.onStart({mode:"hotseat",config:x.config,room:u,coach:null,saved:x})};return g("div",{class:"newgame",children:g("div",{class:"card",children:[g("div",{children:[g("h1",{children:"American Football: The Board Game"}),g("div",{class:"muted",children:"Community Edition rules, played on a digital table by two coaches."})]}),g("div",{class:"grid",children:[g("label",{children:["Field",g("select",{value:e,onChange:b=>t(b.target.value),children:[g("option",{value:"full",children:"Full field (kick-offs and punts)"}),g("option",{value:"half",children:"Half field (drives start at the 50)"}),g("option",{value:"redzone",children:"Red zone only (drives start at the 20)"})]})]}),g("label",{children:["Game type",g("select",{value:i,onChange:b=>s(b.target.value),children:[g("option",{value:"full",children:"Full game (8+ drives, then two-minute mode)"}),g("option",{value:"collegeOT",children:"College overtime (alternate until not tied)"}),g("option",{value:"suddenDeathClassic",children:"Sudden death, classic (first score wins)"}),g("option",{value:"suddenDeathModern",children:"Sudden death, modern (each team one possession)"})]})]}),g("label",{children:["Seed (dice)",g("input",{type:"number",value:r,onInput:b=>o(Number(b.target.value))})]}),g("label",{children:["How to play",g("select",{value:a,onChange:b=>c(b.target.value),children:[g("option",{value:"hotseat",children:"Hot-seat: both coaches at this screen"}),l&&g("option",{value:"host",children:"Online: host a table on this server"}),l&&g("option",{value:"join",children:"Online: join a table"})]})]}),a!=="hotseat"&&g(Wt,{children:[g("label",{children:["Table name",g("input",{value:u,onInput:b=>h(b.target.value)})]}),g("label",{children:["You coach",g("select",{value:d,onChange:b=>f(b.target.value),children:[g("option",{value:"home",children:[m.name," (home)"]}),g("option",{value:"away",children:[_.name," (away)"]})]})]})]})]}),g("div",{class:"desc",children:[g("b",{children:m.name})," (",Uh(m)," skillpoints, pass-leaning) against ",g("b",{children:_.name})," (",Uh(_)," skillpoints, run-heavy). The rulebook recommends starting on a small field with a quick game type. Markers are hidden: in hot-seat play a curtain asks you to pass the screen between the coaches while they place markers. At the table you call plays from a playbook: the stock playbook has the classic plays, and the play creator lets you draw your own."]}),g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>n.onStart({mode:a,config:v,room:u,coach:a==="hotseat"?null:d}),children:a==="hotseat"?"Start the game":a==="host"?"Host the table":"Join the table"}),g("button",{onClick:n.onCreator,title:"Design plays and playbooks to call at the table",children:"Play creator"}),g("label",{class:"row",style:{cursor:"pointer"},children:[g("span",{class:"muted",children:"or load a saved game"}),g("input",{type:"file",accept:"application/json",onChange:b=>b.target.files?.[0]&&p(b.target.files[0])})]})]}),g("div",{class:"desc",children:["Board: drag with the mouse to pan, wheel to zoom, ",g("kbd",{children:"F"})," fits the field, ",g("kbd",{children:"P"})," frames the play, ",g("kbd",{children:"B"})," centres on the ball, double-click frames the play."]})]})})}const Jn=Bn+40*ei,gE=["quick","intermediate","deep","double","backfield","delayed"];function Il(n){const e=(n==="offense"?ti:On)[0];return{id:Tu(),name:"New play",side:n,kind:n==="offense"?"pass":"zone",description:"",formation:e.name,qbDepth:e.qbDepth??0,linemen:e.linemen??5,extraSide:e.extraLinemanSide??"right",qb:[],ol:n==="offense"?[{t:"passblock"},{t:"passblock"},{t:"passblock"},{t:"passblock"}]:[],slots:e.slots.map(t=>({...t,markers:[]})),stock:!1}}function Oh(n){let e=n.length;for(;e>0&&n[e-1].t==="filler";)e--;return n.slice(0,e)}function vE(n){const e=Ys(()=>({home:Yp(),away:qp()}),[]),[t,i]=kt("offense"),[s,r]=kt("home"),[o,a]=kt(()=>Il("offense")),[c,l]=kt(null),[u,h]=kt(0),[d,f]=kt(""),[m,_]=kt(""),[v,p]=kt(On[0].name),[b,S]=kt(null),x=Xs(null),A=Xs(null);dn.value,Ut.value;const w=s==="home"?"away":"home",P=t==="offense"?s:w,I=e[s][t],T=t==="offense"?"defense":"offense",E=e[w][T],D=T==="offense"?ti:On,F=D.find(R=>R.name===v)??D[0],k=t==="offense"?4:2,B=Ys(()=>{const $=wp({fieldSize:"full",gameType:"collegeOT",seed:1,teams:e}),te=Tp({kind:"scrimmage",offense:P,los:Jn,lineToGainY:Jn+10*ei,boardMinY:0});$.play=te,$.possession=P,$.stage="drive";const Z=_a(Rp(o),I,Jn,0);for(const de of Z)te.players[de.id]=Bc(de.id,t,de.pos);for(const de of _a(F,E,Jn,0))te.players[de.id]||(te.players[de.id]=Bc(de.id,T,de.pos));const se=Z.map(de=>({id:de.id,position:I.find(ce=>ce.id===de.id).position,pos:de.pos})),Se=Eu(o,se,Jn);return{state:$,players:se,assignment:Se}},[o,t,s,v]),{assignment:z}=B,W=B.players,J=R=>I.find($=>$.id===R),X=R=>B.state.play.players[R].pos,le=W.map(R=>J(R.id)).sort((R,$)=>xa(R.position)-xa($.position)||R.number-$.number),fe=yu(t,le,z.markers),ve=fe.filter(R=>R.severity==="error"),Be=fe.filter(R=>R.severity==="warning"),Pe=c&&z.slotOf[c]?J(c):null,at=c?xt(z.markers[c],k):null,it=Ys(()=>{const R=new Set;for(const te of W)(t==="defense"||te.position!=="OL")&&R.add(te.id);const $=Yc({side:t,players:W.map(te=>({id:te.id,def:J(te.id),pos:te.pos})),markers:z.markers,routes:z.routes,selected:c,los:Jn,boardMinY:0});return{selected:c,highlights:{},markerOverride:z.markers,routes:$.routes,zones:$.zones,draggable:R,showTrails:!1}},[B,c]),Q=R=>z.slotOf[R],ie=R=>R.map($=>($.t==="read"||$.t==="handoff")&&z.slotOf[$.target]?.startsWith("S")?{...$,target:z.slotOf[$.target]}:$.t==="read"||$.t==="handoff"?{t:"filler"}:$),_e=(R,$,te)=>{const Z=Q(R);if(!Z)return;const se=Oh(xt($,k));if(Z==="QB")a({...o,qb:ie(se)});else if(Z==="OL")a({...o,ol:se});else{const Se=Number(Z.slice(1)),de=te===void 0?Wr(se,X(R).x,o.slots[Se].route)?.id:te;a({...o,slots:o.slots.map((ce,Ne)=>Ne===Se?{...ce,markers:ie(se),...de?{route:de}:{route:void 0}}:ce)})}},Ue=(R,$,te)=>{const Z=[...xt(z.markers[R],k)];Z[$]=te,_e(R,Z)},Re=(R,$,te)=>{const Z=[...xt(z.markers[R],k)];for(let se=$;se<k;se++)Z[se]=te;_e(R,Z)},Je=(R,$)=>{const te=[...xt(o.ol,k)];if($===null)for(let Z=0;Z<k;Z++)te[Z]=R;else te[$]=R;a({...o,ol:Oh(te)})},Jt=(R,$)=>{const te=_s($);if(!te)return _e(R,[],null);_e(R,hp(te,X(R).x),te.id)},L=R=>{const te=(t==="offense"?ti:On).find(Z=>Z.name===R);te&&(a({...o,formation:te.name,qbDepth:te.qbDepth??o.qbDepth,linemen:te.linemen??o.linemen,extraSide:te.extraLinemanSide??o.extraSide,slots:te.slots.map((Z,se)=>{const Se=o.slots[se],de=Se&&Se.positions.some(ce=>Z.positions.includes(ce));return{...Z,markers:de?Se.markers:[],...de&&Se.route?{route:Se.route}:{}}})}),l(null))},gt=R=>{R!==t&&(i(R),a(Il(R)),p((R==="offense"?On:ti)[0].name),l(null),f(""))},Oe=R=>{a(R?structuredClone(R):Il(t)),l(null)},De=R=>{const $=o.stock||R?{...o,id:Tu(),stock:!1,name:R&&!o.stock?`${o.name} (copy)`:o.name}:o;Kc($),d&&!d.startsWith("stock-")&&!d.startsWith("custom-")&&Zc(d,$.id),a($),lt(`Saved "${$.name}" to your plays.`)},Me=()=>{o.stock||(CM(o.id),Oe(null),lt("Play deleted."))},lt=R=>{S(R),setTimeout(()=>S(null),2500)},Ee=()=>{d&&(!o.stock&&!dn.value.some(R=>R.id===o.id)&&Kc(o),Zc(d,o.id),lt(`Added "${o.name}" to the playbook.`))},He=()=>{const R=m.trim();if(!R)return;const $=kM(R,t);f($.id),_("")},Ht=()=>{const R=new Blob([UM()],{type:"application/json"}),$=document.createElement("a");$.href=URL.createObjectURL(R),$.download=`afm-playbooks-${Date.now()}.json`,$.click()},wt=async R=>{try{const $=OM(await R.text());lt(`Imported ${$.plays} plays and ${$.playbooks} playbooks.`)}catch{lt("That file is not a playbook export.")}},C=(R,$)=>{const te=Q(R);if(!te||te==="OL")return;if(te==="QB"){const Ne=Ua(Jn,0).y,U=Math.round(Math.max(0,Math.min(Zf,Ne-$.y))*2)/2;a({...o,qbDepth:U});return}const Z=Number(te.slice(1)),se=Math.max(me,Math.min(qe-me,$.x)),Se=t==="offense"?Math.min($.y,Jn-me):Math.max($.y,Jn+me),de=Math.round((se-It)*10)/10,ce=Math.round((Se-Jn)*10)/10;a({...o,slots:o.slots.map((Ne,U)=>U===Z?{...Ne,dx:de,dy:ce}:Ne)})},y=Xs({click:R=>{},field:()=>{},drag:(R,$)=>{}});y.current={click:R=>{z.slotOf[R]?(l(R),h(0)):l(null)},field:()=>l(null),drag:C},$s(()=>{const R=x.current,$=new cp(R,{onClickPlayer:Z=>y.current.click(Z),onClickField:()=>y.current.field(),onClickGhost:()=>{},onHover:()=>{},onDrag:(Z,se)=>y.current.drag(Z,se)});A.current=$;const te=Z=>{const se=Z.target.tagName;se==="INPUT"||se==="SELECT"||se==="TEXTAREA"||(Z.key==="Escape"&&l(null),(Z.key==="p"||Z.key==="P")&&$.fitPlay(),(Z.key==="f"||Z.key==="F")&&$.fitField())};return window.addEventListener("keydown",te),()=>{window.removeEventListener("keydown",te),$.dispose()}},[]),$s(()=>{const R=A.current;if(!R)return;const $=[...e.home.offense,...e.home.defense,...e.away.offense,...e.away.defense];R.setTeams($,{offense:e[P].colors,defense:e[P==="home"?"away":"home"].colors}),R.setView(B.state,it)},[B,it]);const V=Ut.value.filter(R=>R.side===t),K=d?Up(d,t):void 0,ne=!!K&&V.some(R=>R.id===K.id),j=le.filter(R=>R.id!==c),Te=R=>Wr(z.markers[R],X(R).x,z.routes[R]);return g("div",{class:"creator",children:[g("div",{class:"creator-top",children:[g("button",{class:"small",onClick:n.onBack,children:"← Back"}),g("h2",{children:"Play creator"}),g("div",{class:"tabs",children:[g("button",{class:t==="offense"?"active":"",onClick:()=>gt("offense"),children:"Offense"}),g("button",{class:t==="defense"?"active":"",onClick:()=>gt("defense"),children:"Defense"})]}),g("label",{class:"row",children:[g("span",{class:"muted",children:"Team"}),g("select",{value:s,onChange:R=>r(R.target.value),children:[g("option",{value:"home",children:e.home.name}),g("option",{value:"away",children:e.away.name})]})]}),g("label",{class:"row",children:[g("span",{class:"muted",children:"Against"}),g("select",{value:F.name,onChange:R=>p(R.target.value),children:D.map(R=>g("option",{value:R.name,children:R.name}))})]}),g("span",{class:"spacer"}),b&&g("span",{class:"chip good",children:b}),g("button",{class:"small",onClick:Ht,title:"Download your plays and playbooks as JSON",children:"Export"}),g("label",{class:"small btnlike",title:"Load a playbook export",children:["Import",g("input",{type:"file",accept:"application/json",style:{display:"none"},onChange:R=>R.target.files?.[0]&&wt(R.target.files[0])})]})]}),g("div",{class:"creator-left",children:[g("div",{class:"panel",children:[g("h3",{children:"Load a play"}),g(Au,{side:t,value:o.stock||dn.value.some(R=>R.id===o.id)?o:null,onPick:Oe,compact:!0,noFlip:!0}),g("div",{class:"row",children:[g("button",{class:"small",onClick:()=>Oe(null),children:"New play"}),g("button",{class:"small",onClick:()=>a(Xc(o)),children:"Flip"}),g("button",{class:"small",onClick:()=>De(!0),title:"Save a copy as a new custom play",children:"Duplicate"})]})]}),g("div",{class:"panel",children:[g("h3",{children:"Formation"}),g("div",{class:"row",children:g("select",{value:(t==="offense"?ti:On).some(R=>R.name===o.formation)?o.formation:"",onChange:R=>L(R.target.value),style:{flex:1},children:[!(t==="offense"?ti:On).some(R=>R.name===o.formation)&&g("option",{value:"",children:o.formation}),(t==="offense"?ti:On).map(R=>g("option",{value:R.name,children:R.name}))]})}),t==="offense"&&g("label",{class:"row",children:[g("span",{style:{minWidth:110},children:["QB depth ",o.qbDepth.toFixed(1)," cm"]}),g("input",{type:"range",min:0,max:4,step:.5,value:o.qbDepth,onInput:R=>a({...o,qbDepth:Number(R.target.value)})})]}),g("div",{class:"muted",children:"Drag players on the board to align them. Click a player to set his route or markers."})]}),g("div",{class:"panel",children:[g("h3",{children:"Players"}),g("div",{class:"list",children:le.map(R=>{const $=Te(R.id),te=c===R.id;return g("div",{class:`item playrow ${te?"sel":""}`,onClick:()=>{l(R.id),h(0)},children:[g("span",{class:"num",children:["#",R.number]}),g("span",{class:"pos",children:R.position}),g("span",{class:"rsum",title:$?.note??"",children:wu(z.markers[R.id],X(R.id).x,z.routes[R.id])}),g("span",{class:"spacer"}),g("span",{class:"minislots",children:xt(z.markers[R.id],k).map((Z,se)=>g("span",{class:`mini ${Z.t} ${te&&u===se?"sel":""}`,title:`Timeslice ${se+1}: ${bs(Z)}`,onClick:Se=>{Se.stopPropagation(),l(R.id),h(se)},children:Vp(Z,le)}))})]})})})]}),Pe&&at&&g("div",{class:"panel markermenu",children:[g("div",{class:"row",children:[g("b",{children:[Pe.position," #",Pe.number," ",Pe.name]}),g("span",{class:"muted",children:z.slotOf[Pe.id]==="OL"?"all linemen":""}),g("span",{class:"spacer"}),g("button",{class:"small",onClick:()=>l(null),children:"×"})]}),t==="offense"&&La(Pe.position).includes("cut")&&g("label",{class:"row",children:[g("span",{class:"muted",style:{minWidth:44},children:"Route"}),g(Bp,{value:Te(Pe.id)?.id??"",onChange:R=>Jt(Pe.id,R)})]}),Te(Pe.id)&&g("div",{class:"muted",children:Te(Pe.id).note}),g("div",{class:"slots",children:at.map((R,$)=>g("div",{class:`slot ${R.t} ${u===$?"sel":""}`,onClick:()=>h($),title:`Timeslice ${$+1}`,children:[g("span",{class:"muted",style:{fontSize:9},children:["T",$+1]}),g("span",{class:"t",children:R.t==="filler"?"filler":Gp(R,le)})]}))}),g(Hp,{def:Pe,slotIndex:u,current:at[u],teammates:j,onSet:R=>Ue(Pe.id,u,R),onFillRest:R=>Re(Pe.id,u,R),onAllLinemen:Pe.position==="OL"?(R,$)=>Je(R,$?null:u):void 0},`${Pe.id}-${u}`),g("div",{class:"row",children:[g("button",{class:"small",disabled:u>=k-1,onClick:()=>h(u+1),children:"Next slot →"}),g("button",{class:"small",onClick:()=>{const R=le.findIndex($=>$.id===Pe.id);l(le[(R+1)%le.length].id),h(0)},children:"Next player ↓"})]})]})]}),g("div",{class:"creator-board",children:[g("canvas",{ref:x}),g("div",{class:"board-hud",children:[g("button",{class:"small",onClick:()=>A.current?.fitPlay(),title:"Frame the play (P)",children:"Frame play"}),g("button",{class:"small",onClick:()=>A.current?.fitField(),title:"Fit the field (F)",children:"Whole field"})]}),g("div",{class:"board-tip creator-legend",children:[g("b",{children:o.name}),o.formation.endsWith(" (flipped)")?" (flipped)":""," · ",Dr[o.kind]," · ",o.formation.replace(" (flipped)",""),g("div",{class:"muted",children:"Lines show each player's path per timeslice (dot = timeslice end, ring = cut, dashed = beyond the markers), with the receiver at his SPEED."})]})]}),g("div",{class:"creator-right",children:[g("div",{class:"panel",children:[g("h3",{children:"This play"}),g("label",{class:"col",children:[g("span",{class:"muted",children:"Name"}),g("input",{value:o.name,onInput:R=>a({...o,name:R.target.value})})]}),g("div",{class:"row",children:[g("label",{class:"col",style:{flex:1},children:[g("span",{class:"muted",children:"Kind"}),g("select",{value:o.kind,onChange:R=>a({...o,kind:R.target.value}),children:(t==="offense"?["pass","run","playAction","screen"]:["zone","man","blitz"]).map(R=>g("option",{value:R,children:Dr[R]}))})]}),g("span",{class:"chip",children:o.stock?"stock":dn.value.some(R=>R.id===o.id)?"custom ★":"unsaved"})]}),g("label",{class:"col",children:[g("span",{class:"muted",children:"Description"}),g("textarea",{rows:3,value:o.description,onInput:R=>a({...o,description:R.target.value})})]}),ve.length>0&&g("div",{class:"error",children:ve.slice(0,4).map(R=>g("div",{children:R.text}))}),Be.length>0&&g("div",{class:"chip warn",style:{whiteSpace:"normal"},children:Be.map(R=>g("div",{children:R.text}))}),g("div",{class:"row",children:[g("button",{class:"primary",onClick:()=>De(!1),disabled:ve.length>0,children:o.stock?"Save as custom play":"Save play"}),!o.stock&&dn.value.some(R=>R.id===o.id)&&g("button",{class:"small danger",onClick:Me,children:"Delete"})]})]}),g("div",{class:"panel",children:[g("h3",{children:"Playbooks"}),g("div",{class:"row",children:[g("select",{value:d,onChange:R=>f(R.target.value),style:{flex:1},children:[g("option",{value:"",children:"— choose a playbook —"}),V.map(R=>g("option",{value:R.id,children:[R.name," (",R.plays.length,")"]}))]}),g("button",{class:"small",disabled:!ne,onClick:Ee,title:"Add this play to the playbook (an unsaved play is saved first)",children:"+ Add this play"})]}),g("div",{class:"row",children:[g("input",{placeholder:"new playbook name",value:m,onInput:R=>_(R.target.value),style:{flex:1}}),g("button",{class:"small",onClick:He,disabled:!m.trim(),children:"Create"})]}),K&&ne&&g("div",{class:"col",children:[g("div",{class:"row",children:[g("input",{value:K.name,onChange:R=>PM(K.id,R.target.value),style:{flex:1},title:"Rename"}),g("button",{class:"small danger",onClick:()=>{LM(K.id),f("")},children:"Delete book"})]}),g("div",{class:"list",children:[Op(K).map(R=>g("div",{class:`item ${R.id===o.id?"sel":""}`,onClick:()=>Oe(R),children:[g("span",{style:{flex:1},children:[R.name,R.stock?"":" ★"," ",g("span",{class:"muted",children:["· ",Dr[R.kind]]})]}),g("button",{class:"small",onClick:$=>{$.stopPropagation(),Nh(K.id,R.id,-1)},title:"Move up",children:"↑"}),g("button",{class:"small",onClick:$=>{$.stopPropagation(),Nh(K.id,R.id,1)},title:"Move down",children:"↓"}),g("button",{class:"small danger",onClick:$=>{$.stopPropagation(),DM(K.id,R.id)},title:"Remove from the playbook",children:"×"})]})),K.plays.length===0&&g("div",{class:"muted",children:"Empty. Load a stock or custom play and add it."})]})]}),g("div",{class:"muted",children:"At the table, the lineup and marker steps offer every playbook; a custom play (★) can be added to any of them."})]}),g("details",{class:"panel",children:[g("summary",{children:"Route library"}),g("div",{class:"muted",children:'Fillers are implicit: a route ends with its cut and the receiver keeps running on that line. "In" and "out" resolve to left or right for the side he lines up on.'}),gE.map(R=>g("div",{class:"col",children:[g("h4",{class:"muted",children:up[R]}),g("table",{class:"stats",children:Da.filter($=>$.group===R).map($=>g("tr",{title:$.note,children:[g("td",{children:[$.name,$.tree!==void 0?g("span",{class:"muted",children:[" (",$.tree,")"]}):null]}),g("td",{class:"mono muted",children:zp($.id)})]}))})]}))]})]})]})}function _E(){const[n,e]=kt("start"),t=i=>{if(wn.value?.dispose(),i.mode==="hotseat")wn.value=new Qx(i.config,i.saved);else{const r=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;wn.value=new eM(r,i.room,i.coach,i.mode==="host"?i.config:null)}Gc.value=null,e("game")};return n==="creator"?g(vE,{onBack:()=>e("start")}):n==="start"?g(mE,{onStart:t,onCreator:()=>e("creator")}):g(yE,{onNewGame:()=>e("start")})}function yE(n){const e=Xs(null),t=Xs(null),[i,s]=kt(null);$s(()=>{const h=e.current,d=new cp(h,{onClickPlayer:(m,_,v)=>vM(m,v),onClickField:m=>qc(m),onClickGhost:m=>_M(m),onHover:(m,_,v)=>{yM(m,_),nM.value=v},onDrag:(m,_,v)=>bM(m,_)});t.current=d,window.afm={board:d,act:m=>wn.value?.apply(m),view:()=>Nt.value,pending:()=>vn.value,toScreen:m=>d.toScreen(m)};const f=m=>{m.target.tagName==="INPUT"||m.target.tagName==="SELECT"||((m.key==="f"||m.key==="F")&&d.fitField(),(m.key==="p"||m.key==="P")&&d.fitPlay(),(m.key==="b"||m.key==="B")&&d.focusBall(),m.key==="Escape"&&($t.value=null,Xt.value=null))};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f),d.dispose()}},[]),$s(()=>{const h=Wi(()=>{const f=Nt.value,m=t.current;if(!f||!m)return;const _=[...f.config.teams.home.offense,...f.config.teams.home.defense,...f.config.teams.away.offense,...f.config.teams.away.defense],v=f.play?.offense??f.possession,p=v==="home"?"away":"home";m.setTeams(_,{offense:f.config.teams[v].colors,defense:f.config.teams[p].colors});const S=(wn.value?.newLog.value??[]).find(A=>/ throws to /.test(A.text));let x;if(S&&f.play){const A=[...S.text.matchAll(/#(\d+)/g)].map(T=>Number(T[1])),w=Object.values(f.play.players).filter(T=>T.side==="offense"),P=w.find(T=>ba(T.id)?.number===A[0]),I=w.find(T=>ba(T.id)?.number===A[1]);P&&I&&(x={from:P.pos,to:I.pos})}ds(()=>m.setView(f,Lh.value,{pass:x}))}),d=Wi(()=>{const f=Lh.value;ds(()=>{t.current?.setUi(f),s(f.preview?.text??null)})});return()=>{h(),d()}},[]),$s(()=>{let h="";return Wi(()=>{const f=oM.value,m=vn.value;ds(()=>{const _=f.split("|").slice(0,2).join("|")===h.split("|").slice(0,2).join("|")&&m&&(m.kind==="lineup"||m.kind==="markers");if(h=f,!_&&(iM(),!!m)){if(m.kind==="lineup"?FM(m):Hn.value=null,m.kind==="markers"?HM(m):hs.value=null,m.kind==="move"){const v=m.movers.filter(p=>!p.done&&(p.mode.t!=="none"||p.mayDisengage||p.mayBlitz));v.length===1&&(Xt.value=v[0].id)}if(m.kind==="freeBlockers"){const v=m.blockers.filter(p=>!p.done);v.length>=1&&(Xt.value=v[0].id)}}})})},[]);const r=vn.value,o=Nt.value,c=(wn.value?.controls.length??0)===2,l=r&&r.kind==="markers"?`${r.coach}-${o?.snaps}-${o?.play?.los}`:null,u=c&&l!==null&&Gc.value!==l&&hr.value;return g("div",{class:"layout",children:[g(xM,{onNewGame:n.onNewGame}),g("div",{class:"left",children:[g(XM,{}),g(TM,{})]}),g("div",{class:"boardwrap",children:[g("canvas",{ref:e}),g("div",{class:"board-hud",children:[g("button",{class:"small",onClick:()=>t.current?.fitPlay(),title:"Frame the play (P)",children:"Frame play"}),g("button",{class:"small",onClick:()=>t.current?.fitField(),title:"Fit the field (F)",children:"Whole field"}),g("button",{class:"small",onClick:()=>t.current?.focusBall(),title:"Centre on the ball (B)",children:"Ball"})]}),i&&g("div",{class:"board-tip",children:i})]}),g("div",{class:"right",children:[g(hE,{}),o&&o.stage==="over"&&g("div",{class:"panel",children:[g("h2",{children:"Final"}),g("div",{children:[o.config.teams.home.name," ",o.score.home," – ",o.score.away," ",o.config.teams.away.name]})]})]}),g(fE,{}),ya.value&&g("div",{class:"toast",children:ya.value}),u&&r&&r.kind==="markers"&&g(pE,{coach:r.coach,what:`${r.side==="offense"?"The offense":"The defense"} places its markers face down.`,onContinue:()=>Gc.value=l})]})}am(g(_E,{}),document.getElementById("app"));
