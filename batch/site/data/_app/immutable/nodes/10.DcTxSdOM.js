import{s as V,a as g,e as T,b as H,c as y,h as W,d as E,f as c,g as R,i as p,j as u,k as Q,l as P,m as Z,n as U,o as tt,p as G,q as M,t as Y,u as z,r as et}from"../chunks/scheduler.DRrzQYjJ.js";import{S as it,i as nt,c as D,a as j,m as I,t as N,b as O,d as q}from"../chunks/index.w6xic4KS.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.0gk5kx2T.js";import{w as at}from"../chunks/entry.XWsXN8o7.js";import{s as rt,p as ot,r as K,Q as F,t as X}from"../chunks/index.YXprRT2n.js";import{I as st,C as lt}from"../chunks/globalContexts.1hDlTDmj.js";import{p as ct}from"../chunks/stores.DeDh1A9l.js";import{C as mt}from"../chunks/CodeBlock.DeShEjja.js";import{L as ut}from"../chunks/LinkButton.D3Zb0j5D.js";import{L as pt}from"../chunks/LineBreak.CCquxt7p.js";import{p as ft}from"../chunks/profile.BW8tN6E9.js";function dt(f){let a,r=l.title+"",e;return{c(){a=T("h1"),e=Y(r),this.h()},l(i){a=E(i,"H1",{class:!0});var s=et(a);e=z(s,r),s.forEach(c),this.h()},h(){p(a,"class","title")},m(i,s){u(i,a,s),Q(a,e)},p:M,d(i){i&&c(a)}}}function _t(f){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:M,p:M,d:M}}function ht(f){let a,r,e,i,s;return document.title=a=l.title,{c(){r=g(),e=T("meta"),i=g(),s=T("meta"),this.h()},l(t){r=y(t),e=E(t,"META",{property:!0,content:!0}),i=y(t),s=E(t,"META",{name:!0,content:!0}),this.h()},h(){var t,o;p(e,"property","og:title"),p(e,"content",((t=l.og)==null?void 0:t.title)??l.title),p(s,"name","twitter:title"),p(s,"content",((o=l.og)==null?void 0:o.title)??l.title)},m(t,o){u(t,r,o),u(t,e,o),u(t,i,o),u(t,s,o)},p(t,o){o&0&&a!==(a=l.title)&&(document.title=a)},d(t){t&&(c(r),c(e),c(i),c(s))}}}function bt(f){var s,t;let a,r,e=(l.description||((s=l.og)==null?void 0:s.description))&&gt(),i=((t=l.og)==null?void 0:t.image)&&yt();return{c(){e&&e.c(),a=g(),i&&i.c(),r=H()},l(o){e&&e.l(o),a=y(o),i&&i.l(o),r=H()},m(o,d){e&&e.m(o,d),u(o,a,d),i&&i.m(o,d),u(o,r,d)},p(o,d){var h,k;(l.description||(h=l.og)!=null&&h.description)&&e.p(o,d),(k=l.og)!=null&&k.image&&i.p(o,d)},d(o){o&&(c(a),c(r)),e&&e.d(o),i&&i.d(o)}}}function gt(f){let a,r,e,i,s;return{c(){a=T("meta"),r=g(),e=T("meta"),i=g(),s=T("meta"),this.h()},l(t){a=E(t,"META",{name:!0,content:!0}),r=y(t),e=E(t,"META",{property:!0,content:!0}),i=y(t),s=E(t,"META",{name:!0,content:!0}),this.h()},h(){var t,o,d;p(a,"name","description"),p(a,"content",l.description??((t=l.og)==null?void 0:t.description)),p(e,"property","og:description"),p(e,"content",((o=l.og)==null?void 0:o.description)??l.description),p(s,"name","twitter:description"),p(s,"content",((d=l.og)==null?void 0:d.description)??l.description)},m(t,o){u(t,a,o),u(t,r,o),u(t,e,o),u(t,i,o),u(t,s,o)},p:M,d(t){t&&(c(a),c(r),c(e),c(i),c(s))}}}function yt(f){let a,r,e;return{c(){a=T("meta"),r=g(),e=T("meta"),this.h()},l(i){a=E(i,"META",{property:!0,content:!0}),r=y(i),e=E(i,"META",{name:!0,content:!0}),this.h()},h(){var i,s;p(a,"property","og:image"),p(a,"content",(i=l.og)==null?void 0:i.image),p(e,"name","twitter:image"),p(e,"content",(s=l.og)==null?void 0:s.image)},m(i,s){u(i,a,s),u(i,r,s),u(i,e,s)},p:M,d(i){i&&(c(a),c(r),c(e))}}}function Tt(f){let a;return{c(){a=Y("Next: Transform Data")},l(r){a=z(r,"Next: Transform Data")},m(r,e){u(r,a,e)},d(r){r&&c(a)}}}function Et(f){let a,r,e,i,s,t,o='<a href="#ingesting-the-data">Ingesting the Data</a>',d,h,k,w,v,b,L='(view <a href="https://github.com/thedatadavis/batch-analytics/blob/main/batch/analytics/scripts/init_duckdb.py" rel="nofollow" class="markdown">file</a>)',_,C,S,$=typeof l<"u"&&l.title&&l.hide_title!==!0&&dt();function J(n,m){return typeof l<"u"&&l.title?ht:_t}let A=J()(f),x=typeof l=="object"&&bt();return h=new pt({props:{lines:"1"}}),w=new mt({props:{source:`# init_duckdb.py
import os

import duckdb

# Set relative paths the script
script_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(script_dir)

# Construct the relative path to the database
data_dir = os.path.join(parent_dir, 'data')
db_path = os.path.join(data_dir, 'batch.duckdb')

file_imports = [
    # File name, table name
    ('raw_orders.csv', 'orders'),
    ('regions.csv', 'regions'),
    ('exceptions.csv', 'exceptions')
]

# Delete the DuckDb file if it exists
# Use os for relative pathing
try:
    os.remove(db_path)
except FileNotFoundError:
    pass

# Create to base DuckDB database
con = duckdb.connect(database=db_path)

# Create a new schema
con.execute('CREATE SCHEMA manual_imports')
con.execute('CREATE SCHEMA analytics')

# Create a new table
for tbl in file_imports:
    con.execute(f'CREATE TABLE manual_imports.{tbl[1]} AS SELECT * FROM "{os.path.join(data_dir, tbl[0])}"')
    print(f'Created table {tbl[1]}')

# Close the connection
con.close()`,copyToClipboard:"true",language:"python"}}),C=new ut({props:{url:"../transform",label:"Transform Data",$$slots:{default:[Tt]},$$scope:{ctx:f}}}),{c(){$&&$.c(),a=g(),A.c(),r=T("meta"),e=T("meta"),x&&x.c(),i=H(),s=g(),t=T("h2"),t.innerHTML=o,d=g(),D(h.$$.fragment),k=g(),D(w.$$.fragment),v=g(),b=T("p"),b.innerHTML=L,_=g(),D(C.$$.fragment),this.h()},l(n){$&&$.l(n),a=y(n);const m=W("svelte-1j2izld",document.head);A.l(m),r=E(m,"META",{name:!0,content:!0}),e=E(m,"META",{name:!0,content:!0}),x&&x.l(m),i=H(),m.forEach(c),s=y(n),t=E(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),R(t)!=="svelte-1cdpj9r"&&(t.innerHTML=o),d=y(n),j(h.$$.fragment,n),k=y(n),j(w.$$.fragment,n),v=y(n),b=E(n,"P",{class:!0,"data-svelte-h":!0}),R(b)!=="svelte-2w69ba"&&(b.innerHTML=L),_=y(n),j(C.$$.fragment,n),this.h()},h(){p(r,"name","twitter:card"),p(r,"content","summary"),p(e,"name","twitter:site"),p(e,"content","@evidence_dev"),p(t,"class","markdown"),p(t,"id","ingesting-the-data"),p(b,"class","markdown")},m(n,m){$&&$.m(n,m),u(n,a,m),A.m(document.head,null),Q(document.head,r),Q(document.head,e),x&&x.m(document.head,null),Q(document.head,i),u(n,s,m),u(n,t,m),u(n,d,m),I(h,n,m),u(n,k,m),I(w,n,m),u(n,v,m),u(n,b,m),u(n,_,m),I(C,n,m),S=!0},p(n,[m]){typeof l<"u"&&l.title&&l.hide_title!==!0&&$.p(n,m),A.p(n,m),typeof l=="object"&&x.p(n,m);const B={};m&32768&&(B.$$scope={dirty:m,ctx:n}),C.$set(B)},i(n){S||(N(h.$$.fragment,n),N(w.$$.fragment,n),N(C.$$.fragment,n),S=!0)},o(n){O(h.$$.fragment,n),O(w.$$.fragment,n),O(C.$$.fragment,n),S=!1},d(n){n&&(c(a),c(s),c(t),c(d),c(k),c(v),c(b),c(_)),$&&$.d(n),A.d(n),c(r),c(e),x&&x.d(n),c(i),q(h,n),q(w,n),q(C,n)}}}const l={title:"Ingesting",hide_title:!0,sidebar_position:11};function kt(f,a,r){let e,i;P(f,ct,_=>r(2,e=_)),P(f,K,_=>r(9,i=_));let{data:s}=a,{data:t={},customFormattingSettings:o,__db:d,inputs:h}=s;Z(K,i="261fa55435589ca663c6d500315f5ec3",i);let k=at(h);U(st,k),tt(k.subscribe(_=>h=_)),U(lt,{getCustomFormats:()=>o.customFormats||[]}),rt((_,C)=>ft(d.query,_,{query_name:C}));let v;const b=()=>{v||(v=setTimeout(()=>{X.add({id:"LoadingToast",title:"",message:"Loading...",status:"info"},0)},3e3))},L=()=>{v?(clearTimeout(v),v=null):X.dismiss("LoadingToast")};return G(()=>(F.addEventListener("inFlightQueryStart",b),F.addEventListener("inFlightQueryEnd",L),F.QueriesLoading&&b(),()=>{F.removeEventListener("inFlightQueryStart",b),F.removeEventListener("inFlightQueryEnd",L)})),e.params,G(()=>!0),f.$$set=_=>{"data"in _&&r(0,s=_.data)},f.$$.update=()=>{f.$$.dirty&1&&r(1,{data:t={},customFormattingSettings:o,__db:d}=s,t),f.$$.dirty&2&&ot.set(Object.keys(t).length>0),f.$$.dirty&4&&e.params},[s,t,e]}class Dt extends it{constructor(a){super(),nt(this,a,kt,Et,V,{data:0})}}export{Dt as component};
