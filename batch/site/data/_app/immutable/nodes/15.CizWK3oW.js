import{s as O,a as g,e as b,b as C,c as E,h as j,d as y,f as c,g as F,i as m,j as d,k as A,q as M,l as L,m as N,n as S,o as P,p as q,t as G,r as K,u as U}from"../chunks/scheduler.DRrzQYjJ.js";import{S as X,i as Y}from"../chunks/index.w6xic4KS.js";import{p as z}from"../chunks/stores.DeDh1A9l.js";import{s as D,p as R,r as H,Q as w,t as I}from"../chunks/index.YXprRT2n.js";import{w as W}from"../chunks/entry.XWsXN8o7.js";import{I as B,C as J}from"../chunks/globalContexts.1hDlTDmj.js";import{p as V}from"../chunks/profile.BW8tN6E9.js";function Z(_){let n,s=a.title+"",i;return{c(){n=b("h1"),i=G(s),this.h()},l(e){n=y(e,"H1",{class:!0});var r=K(n);i=U(r,s),r.forEach(c),this.h()},h(){m(n,"class","title")},m(e,r){d(e,n,r),A(n,i)},p:M,d(e){e&&c(n)}}}function $(_){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:M,p:M,d:M}}function tt(_){let n,s,i,e,r;return document.title=n=a.title,{c(){s=g(),i=b("meta"),e=g(),r=b("meta"),this.h()},l(t){s=E(t),i=y(t,"META",{property:!0,content:!0}),e=E(t),r=y(t,"META",{name:!0,content:!0}),this.h()},h(){var t,o;m(i,"property","og:title"),m(i,"content",((t=a.og)==null?void 0:t.title)??a.title),m(r,"name","twitter:title"),m(r,"content",((o=a.og)==null?void 0:o.title)??a.title)},m(t,o){d(t,s,o),d(t,i,o),d(t,e,o),d(t,r,o)},p(t,o){o&0&&n!==(n=a.title)&&(document.title=n)},d(t){t&&(c(s),c(i),c(e),c(r))}}}function et(_){var r,t;let n,s,i=(a.description||((r=a.og)==null?void 0:r.description))&&it(),e=((t=a.og)==null?void 0:t.image)&&nt();return{c(){i&&i.c(),n=g(),e&&e.c(),s=C()},l(o){i&&i.l(o),n=E(o),e&&e.l(o),s=C()},m(o,f){i&&i.m(o,f),d(o,n,f),e&&e.m(o,f),d(o,s,f)},p(o,f){var h,k;(a.description||(h=a.og)!=null&&h.description)&&i.p(o,f),(k=a.og)!=null&&k.image&&e.p(o,f)},d(o){o&&(c(n),c(s)),i&&i.d(o),e&&e.d(o)}}}function it(_){let n,s,i,e,r;return{c(){n=b("meta"),s=g(),i=b("meta"),e=g(),r=b("meta"),this.h()},l(t){n=y(t,"META",{name:!0,content:!0}),s=E(t),i=y(t,"META",{property:!0,content:!0}),e=E(t),r=y(t,"META",{name:!0,content:!0}),this.h()},h(){var t,o,f;m(n,"name","description"),m(n,"content",a.description??((t=a.og)==null?void 0:t.description)),m(i,"property","og:description"),m(i,"content",((o=a.og)==null?void 0:o.description)??a.description),m(r,"name","twitter:description"),m(r,"content",((f=a.og)==null?void 0:f.description)??a.description)},m(t,o){d(t,n,o),d(t,s,o),d(t,i,o),d(t,e,o),d(t,r,o)},p:M,d(t){t&&(c(n),c(s),c(i),c(e),c(r))}}}function nt(_){let n,s,i;return{c(){n=b("meta"),s=g(),i=b("meta"),this.h()},l(e){n=y(e,"META",{property:!0,content:!0}),s=E(e),i=y(e,"META",{name:!0,content:!0}),this.h()},h(){var e,r;m(n,"property","og:image"),m(n,"content",(e=a.og)==null?void 0:e.image),m(i,"name","twitter:image"),m(i,"content",(r=a.og)==null?void 0:r.image)},m(e,r){d(e,n,r),d(e,s,r),d(e,i,r)},p:M,d(e){e&&(c(n),c(s),c(i))}}}function ot(_){let n,s,i,e,r,t,o="We're going to look at some metrics that give an overview of the business.",f,h,k='<a href="#orders-by-month">Orders by Month</a>',T=typeof a<"u"&&a.title&&a.hide_title!==!0&&Z();function x(l,p){return typeof a<"u"&&a.title?tt:$}let v=x()(_),u=typeof a=="object"&&et();return{c(){T&&T.c(),n=g(),v.c(),s=b("meta"),i=b("meta"),u&&u.c(),e=C(),r=g(),t=b("p"),t.textContent=o,f=g(),h=b("h2"),h.innerHTML=k,this.h()},l(l){T&&T.l(l),n=E(l);const p=j("svelte-1j2izld",document.head);v.l(p),s=y(p,"META",{name:!0,content:!0}),i=y(p,"META",{name:!0,content:!0}),u&&u.l(p),e=C(),p.forEach(c),r=E(l),t=y(l,"P",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-1mmwfm6"&&(t.textContent=o),f=E(l),h=y(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(h)!=="svelte-wqlpqc"&&(h.innerHTML=k),this.h()},h(){m(s,"name","twitter:card"),m(s,"content","summary"),m(i,"name","twitter:site"),m(i,"content","@evidence_dev"),m(t,"class","markdown"),m(h,"class","markdown"),m(h,"id","orders-by-month")},m(l,p){T&&T.m(l,p),d(l,n,p),v.m(document.head,null),A(document.head,s),A(document.head,i),u&&u.m(document.head,null),A(document.head,e),d(l,r,p),d(l,t,p),d(l,f,p),d(l,h,p)},p(l,[p]){typeof a<"u"&&a.title&&a.hide_title!==!0&&T.p(l,p),v.p(l,p),typeof a=="object"&&u.p(l,p)},i:M,o:M,d(l){l&&(c(n),c(r),c(t),c(f),c(h)),T&&T.d(l),v.d(l),c(s),c(i),u&&u.d(l),c(e)}}}const a={title:"Trend Analysis",sidebar_position:2};function rt(_,n,s){let i,e;L(_,z,u=>s(2,i=u)),L(_,H,u=>s(9,e=u));let{data:r}=n,{data:t={},customFormattingSettings:o,__db:f,inputs:h}=r;N(H,e="77babbf1a523791bd08c45361ddd90c7",e);let k=W(h);S(B,k),P(k.subscribe(u=>h=u)),S(J,{getCustomFormats:()=>o.customFormats||[]}),D((u,l)=>V(f.query,u,{query_name:l}));let x;const Q=()=>{x||(x=setTimeout(()=>{I.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},v=()=>{x?(clearTimeout(x),x=null):I.dismiss("LoadingToast")};return q(()=>(w.addEventListener("inFlightQueryStart",Q),w.addEventListener("inFlightQueryEnd",v),w.QueriesLoading&&Q(),()=>{w.removeEventListener("inFlightQueryStart",Q),w.removeEventListener("inFlightQueryEnd",v)})),i.params,q(()=>!0),_.$$set=u=>{"data"in u&&s(0,r=u.data)},_.$$.update=()=>{_.$$.dirty&1&&s(1,{data:t={},customFormattingSettings:o,__db:f}=r,t),_.$$.dirty&2&&R.set(Object.keys(t).length>0),_.$$.dirty&4&&i.params},[r,t,i]}class ft extends X{constructor(n){super(),Y(this,n,rt,ot,O,{data:0})}}export{ft as component};
