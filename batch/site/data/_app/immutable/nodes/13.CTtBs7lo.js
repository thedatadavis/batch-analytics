import{s as j,a as E,e as h,b as F,c as T,h as q,d as y,f as u,g as N,i as m,j as p,k as Q,q as g,l as A,m as O,n as C,o as H,p as S,t as P,r as G,u as K}from"../chunks/scheduler.DRrzQYjJ.js";import{S as R,i as U}from"../chunks/index.w6xic4KS.js";import{p as X}from"../chunks/stores.DeDh1A9l.js";import{s as Y,p as z,r as w,Q as M,t as L}from"../chunks/index.YXprRT2n.js";import{w as B}from"../chunks/entry.XWsXN8o7.js";import{I as D,C as J}from"../chunks/globalContexts.1hDlTDmj.js";import{p as V}from"../chunks/profile.BW8tN6E9.js";function W(d){let n,a=s.title+"",i;return{c(){n=h("h1"),i=P(a),this.h()},l(e){n=y(e,"H1",{class:!0});var r=G(n);i=K(r,a),r.forEach(u),this.h()},h(){m(n,"class","title")},m(e,r){p(e,n,r),Q(n,i)},p:g,d(e){e&&u(n)}}}function Z(d){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:g,p:g,d:g}}function $(d){let n,a,i,e,r;return document.title=n=s.title,{c(){a=E(),i=h("meta"),e=E(),r=h("meta"),this.h()},l(t){a=T(t),i=y(t,"META",{property:!0,content:!0}),e=T(t),r=y(t,"META",{name:!0,content:!0}),this.h()},h(){var t,o;m(i,"property","og:title"),m(i,"content",((t=s.og)==null?void 0:t.title)??s.title),m(r,"name","twitter:title"),m(r,"content",((o=s.og)==null?void 0:o.title)??s.title)},m(t,o){p(t,a,o),p(t,i,o),p(t,e,o),p(t,r,o)},p(t,o){o&0&&n!==(n=s.title)&&(document.title=n)},d(t){t&&(u(a),u(i),u(e),u(r))}}}function tt(d){var r,t;let n,a,i=(s.description||((r=s.og)==null?void 0:r.description))&&et(),e=((t=s.og)==null?void 0:t.image)&&it();return{c(){i&&i.c(),n=E(),e&&e.c(),a=F()},l(o){i&&i.l(o),n=T(o),e&&e.l(o),a=F()},m(o,l){i&&i.m(o,l),p(o,n,l),e&&e.m(o,l),p(o,a,l)},p(o,l){var k,v;(s.description||(k=s.og)!=null&&k.description)&&i.p(o,l),(v=s.og)!=null&&v.image&&e.p(o,l)},d(o){o&&(u(n),u(a)),i&&i.d(o),e&&e.d(o)}}}function et(d){let n,a,i,e,r;return{c(){n=h("meta"),a=E(),i=h("meta"),e=E(),r=h("meta"),this.h()},l(t){n=y(t,"META",{name:!0,content:!0}),a=T(t),i=y(t,"META",{property:!0,content:!0}),e=T(t),r=y(t,"META",{name:!0,content:!0}),this.h()},h(){var t,o,l;m(n,"name","description"),m(n,"content",s.description??((t=s.og)==null?void 0:t.description)),m(i,"property","og:description"),m(i,"content",((o=s.og)==null?void 0:o.description)??s.description),m(r,"name","twitter:description"),m(r,"content",((l=s.og)==null?void 0:l.description)??s.description)},m(t,o){p(t,n,o),p(t,a,o),p(t,i,o),p(t,e,o),p(t,r,o)},p:g,d(t){t&&(u(n),u(a),u(i),u(e),u(r))}}}function it(d){let n,a,i;return{c(){n=h("meta"),a=E(),i=h("meta"),this.h()},l(e){n=y(e,"META",{property:!0,content:!0}),a=T(e),i=y(e,"META",{name:!0,content:!0}),this.h()},h(){var e,r;m(n,"property","og:image"),m(n,"content",(e=s.og)==null?void 0:e.image),m(i,"name","twitter:image"),m(i,"content",(r=s.og)==null?void 0:r.image)},m(e,r){p(e,n,r),p(e,a,r),p(e,i,r)},p:g,d(e){e&&(u(n),u(a),u(i))}}}function nt(d){let n,a,i,e,r,t,o="Break downs of experiences by region",l=typeof s<"u"&&s.title&&s.hide_title!==!0&&W();function k(c,f){return typeof s<"u"&&s.title?$:Z}let x=k()(d),_=typeof s=="object"&&tt();return{c(){l&&l.c(),n=E(),x.c(),a=h("meta"),i=h("meta"),_&&_.c(),e=F(),r=E(),t=h("p"),t.textContent=o,this.h()},l(c){l&&l.l(c),n=T(c);const f=q("svelte-1j2izld",document.head);x.l(f),a=y(f,"META",{name:!0,content:!0}),i=y(f,"META",{name:!0,content:!0}),_&&_.l(f),e=F(),f.forEach(u),r=T(c),t=y(c,"P",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-133h8b1"&&(t.textContent=o),this.h()},h(){m(a,"name","twitter:card"),m(a,"content","summary"),m(i,"name","twitter:site"),m(i,"content","@evidence_dev"),m(t,"class","markdown")},m(c,f){l&&l.m(c,f),p(c,n,f),x.m(document.head,null),Q(document.head,a),Q(document.head,i),_&&_.m(document.head,null),Q(document.head,e),p(c,r,f),p(c,t,f)},p(c,[f]){typeof s<"u"&&s.title&&s.hide_title!==!0&&l.p(c,f),x.p(c,f),typeof s=="object"&&_.p(c,f)},i:g,o:g,d(c){c&&(u(n),u(r),u(t)),l&&l.d(c),x.d(c),u(a),u(i),_&&_.d(c),u(e)}}}const s={title:"Regional",sidebar_position:4};function ot(d,n,a){let i,e;A(d,X,b=>a(2,i=b)),A(d,w,b=>a(9,e=b));let{data:r}=n,{data:t={},customFormattingSettings:o,__db:l,inputs:k}=r;O(w,e="36a9a17f2f25c40e261578afe03e4b60",e);let v=B(k);C(D,v),H(v.subscribe(b=>k=b)),C(J,{getCustomFormats:()=>o.customFormats||[]}),Y((b,I)=>V(l.query,b,{query_name:I}));let _;const c=()=>{_||(_=setTimeout(()=>{L.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},f=()=>{_?(clearTimeout(_),_=null):L.dismiss("LoadingToast")};return S(()=>(M.addEventListener("inFlightQueryStart",c),M.addEventListener("inFlightQueryEnd",f),M.QueriesLoading&&c(),()=>{M.removeEventListener("inFlightQueryStart",c),M.removeEventListener("inFlightQueryEnd",f)})),i.params,S(()=>!0),d.$$set=b=>{"data"in b&&a(0,r=b.data)},d.$$.update=()=>{d.$$.dirty&1&&a(1,{data:t={},customFormattingSettings:o,__db:l}=r,t),d.$$.dirty&2&&z.set(Object.keys(t).length>0),d.$$.dirty&4&&i.params},[r,t,i]}class ft extends R{constructor(n){super(),U(this,n,ot,nt,j,{data:0})}}export{ft as component};
