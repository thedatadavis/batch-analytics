const r=self;r.addEventListener("fetch",async e=>{if(!e.request.url.endsWith(".parquet"))return;const s=e.request.headers.get("User-Agent");if(!(s==null?void 0:s.includes("Windows")))return;const t=new Headers(e.request.headers);t.set("Cache-Control","no-cache"),t.set("X-Evidence-Windows-Cache-Disable","true");const n=new Request(e.request.url,{headers:t});e.respondWith(fetch(n))});
