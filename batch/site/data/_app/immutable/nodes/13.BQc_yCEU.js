import{s as P,a as E,e as y,b as A,c as k,h as z,d as T,f as c,g as S,i as m,j as u,k as F,n as x,l as I,m as D,o as j,p as G,q,t as K,r as U,u as X}from"../chunks/scheduler.BsJltLB7.js";import{S as Y,i as R}from"../chunks/index.BaH_hzA2.js";import{p as B}from"../chunks/stores.D7EH0TxZ.js";import{s as J,p as V,r as N,Q,t as O}from"../chunks/index.B9PCpeuL.js";import{w as W}from"../chunks/entry.De7pHzrz.js";import{I as Z,C as $}from"../chunks/globalContexts.1hDlTDmj.js";import{p as tt}from"../chunks/profile.BW8tN6E9.js";function et(d){let n,o=s.title+"",i;return{c(){n=y("h1"),i=K(o),this.h()},l(e){n=T(e,"H1",{class:!0});var a=U(n);i=X(a,o),a.forEach(c),this.h()},h(){m(n,"class","title")},m(e,a){u(e,n,a),F(n,i)},p:x,d(e){e&&c(n)}}}function it(d){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:x,p:x,d:x}}function nt(d){let n,o,i,e,a;return document.title=n=s.title,{c(){o=E(),i=y("meta"),e=E(),a=y("meta"),this.h()},l(t){o=k(t),i=T(t,"META",{property:!0,content:!0}),e=k(t),a=T(t,"META",{name:!0,content:!0}),this.h()},h(){var t,r;m(i,"property","og:title"),m(i,"content",((t=s.og)==null?void 0:t.title)??s.title),m(a,"name","twitter:title"),m(a,"content",((r=s.og)==null?void 0:r.title)??s.title)},m(t,r){u(t,o,r),u(t,i,r),u(t,e,r),u(t,a,r)},p(t,r){r&0&&n!==(n=s.title)&&(document.title=n)},d(t){t&&(c(o),c(i),c(e),c(a))}}}function rt(d){var a,t;let n,o,i=(s.description||((a=s.og)==null?void 0:a.description))&&at(),e=((t=s.og)==null?void 0:t.image)&&ot();return{c(){i&&i.c(),n=E(),e&&e.c(),o=A()},l(r){i&&i.l(r),n=k(r),e&&e.l(r),o=A()},m(r,p){i&&i.m(r,p),u(r,n,p),e&&e.m(r,p),u(r,o,p)},p(r,p){var _,M;(s.description||(_=s.og)!=null&&_.description)&&i.p(r,p),(M=s.og)!=null&&M.image&&e.p(r,p)},d(r){r&&(c(n),c(o)),i&&i.d(r),e&&e.d(r)}}}function at(d){let n,o,i,e,a;return{c(){n=y("meta"),o=E(),i=y("meta"),e=E(),a=y("meta"),this.h()},l(t){n=T(t,"META",{name:!0,content:!0}),o=k(t),i=T(t,"META",{property:!0,content:!0}),e=k(t),a=T(t,"META",{name:!0,content:!0}),this.h()},h(){var t,r,p;m(n,"name","description"),m(n,"content",s.description??((t=s.og)==null?void 0:t.description)),m(i,"property","og:description"),m(i,"content",((r=s.og)==null?void 0:r.description)??s.description),m(a,"name","twitter:description"),m(a,"content",((p=s.og)==null?void 0:p.description)??s.description)},m(t,r){u(t,n,r),u(t,o,r),u(t,i,r),u(t,e,r),u(t,a,r)},p:x,d(t){t&&(c(n),c(o),c(i),c(e),c(a))}}}function ot(d){let n,o,i;return{c(){n=y("meta"),o=E(),i=y("meta"),this.h()},l(e){n=T(e,"META",{property:!0,content:!0}),o=k(e),i=T(e,"META",{name:!0,content:!0}),this.h()},h(){var e,a;m(n,"property","og:image"),m(n,"content",(e=s.og)==null?void 0:e.image),m(i,"name","twitter:image"),m(i,"content",(a=s.og)==null?void 0:a.image)},m(e,a){u(e,n,a),u(e,o,a),u(e,i,a)},p:x,d(e){e&&(c(n),c(o),c(i))}}}function st(d){let n,o,i,e,a,t,r='<a href="#transforming-the-data">Transforming the Data</a>',p,_,M="This is where we pick up with dbt.",C,h,w='<img src="/dbt_dag.png" alt="image_name" class="markdown"/>',b=typeof s<"u"&&s.title&&s.hide_title!==!0&&et();function g(l,f){return typeof s<"u"&&s.title?nt:it}let L=g()(d),v=typeof s=="object"&&rt();return{c(){b&&b.c(),n=E(),L.c(),o=y("meta"),i=y("meta"),v&&v.c(),e=A(),a=E(),t=y("h2"),t.innerHTML=r,p=E(),_=y("p"),_.textContent=M,C=E(),h=y("p"),h.innerHTML=w,this.h()},l(l){b&&b.l(l),n=k(l);const f=z("svelte-1j2izld",document.head);L.l(f),o=T(f,"META",{name:!0,content:!0}),i=T(f,"META",{name:!0,content:!0}),v&&v.l(f),e=A(),f.forEach(c),a=k(l),t=T(l,"H2",{class:!0,id:!0,"data-svelte-h":!0}),S(t)!=="svelte-1u7tszn"&&(t.innerHTML=r),p=k(l),_=T(l,"P",{class:!0,"data-svelte-h":!0}),S(_)!=="svelte-pos79r"&&(_.textContent=M),C=k(l),h=T(l,"P",{class:!0,"data-svelte-h":!0}),S(h)!=="svelte-e21mc8"&&(h.innerHTML=w),this.h()},h(){m(o,"name","twitter:card"),m(o,"content","summary"),m(i,"name","twitter:site"),m(i,"content","@evidence_dev"),m(t,"class","markdown"),m(t,"id","transforming-the-data"),m(_,"class","markdown"),m(h,"class","markdown")},m(l,f){b&&b.m(l,f),u(l,n,f),L.m(document.head,null),F(document.head,o),F(document.head,i),v&&v.m(document.head,null),F(document.head,e),u(l,a,f),u(l,t,f),u(l,p,f),u(l,_,f),u(l,C,f),u(l,h,f)},p(l,[f]){typeof s<"u"&&s.title&&s.hide_title!==!0&&b.p(l,f),L.p(l,f),typeof s=="object"&&v.p(l,f)},i:x,o:x,d(l){l&&(c(n),c(a),c(t),c(p),c(_),c(C),c(h)),b&&b.d(l),L.d(l),c(o),c(i),v&&v.d(l),c(e)}}}const s={title:"Transforming",hide_title:!0,sidebar_position:12};function lt(d,n,o){let i,e;I(d,B,g=>o(2,i=g)),I(d,N,g=>o(9,e=g));let{data:a}=n,{data:t={},customFormattingSettings:r,__db:p,inputs:_}=a;D(N,e="ef73f7ad6619be69502684cc0f52e8df",e);let M=W(_);j(Z,M),G(M.subscribe(g=>_=g)),j($,{getCustomFormats:()=>r.customFormats||[]}),J((g,H)=>tt(p.query,g,{query_name:H}));let h;const w=()=>{h||(h=setTimeout(()=>{O.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},b=()=>{h?(clearTimeout(h),h=null):O.dismiss("LoadingToast")};return q(()=>(Q.addEventListener("inFlightQueryStart",w),Q.addEventListener("inFlightQueryEnd",b),Q.QueriesLoading&&w(),()=>{Q.removeEventListener("inFlightQueryStart",w),Q.removeEventListener("inFlightQueryEnd",b)})),i.params,q(()=>!0),d.$$set=g=>{"data"in g&&o(0,a=g.data)},d.$$.update=()=>{d.$$.dirty&1&&o(1,{data:t={},customFormattingSettings:r,__db:p}=a,t),d.$$.dirty&2&&V.set(Object.keys(t).length>0),d.$$.dirty&4&&i.params},[a,t,i]}class ht extends Y{constructor(n){super(),R(this,n,lt,st,P,{data:0})}}export{ht as component};
