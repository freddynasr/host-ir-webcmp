const t="ir-webcmp";let e;let n;let s;let l=false;let o=false;let c=false;let i=false;let f=false;const r=(t,e="")=>{{return()=>{}}};const u=(t,e)=>{{return()=>{}}};const a="{visibility:hidden}.hydrated{visibility:inherit}";const d={};const p=t=>t!=null;const h=t=>{t=typeof t;return t==="object"||t==="function"};function y(t){var e,n,s;return(s=(n=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:undefined}const $=(t,e,...n)=>{let s=null;let l=null;let o=false;let c=false;const i=[];const f=e=>{for(let n=0;n<e.length;n++){s=e[n];if(Array.isArray(s)){f(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!h(s)){s=String(s)}if(o&&c){i[i.length-1].t+=s}else{i.push(o?m(null,s):s)}c=o}}};f(n);if(e){if(e.name){l=e.name}{const t=e.className||e.class;if(t){e.class=typeof t!=="object"?t:Object.keys(t).filter((e=>t[e])).join(" ")}}}const r=m(t,null);r.l=e;if(i.length>0){r.o=i}{r.i=l}return r};const m=(t,e)=>{const n={u:0,p:t,t:e,h:null,o:null};{n.l=null}{n.i=null}return n};const b={};const w=t=>t&&t.p===b;const v=(t,e)=>{if(t!=null&&!h(t)){if(e&4){return t==="false"?false:t===""||!!t}if(e&2){return parseFloat(t)}if(e&1){return String(t)}return t}return t};const S=t=>wt(t).$;const g=(t,e,n)=>{const s=S(t);return{emit:t=>k(s,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:t})}};const k=(t,e,n)=>{const s=Rt.ce(e,n);t.dispatchEvent(s);return s};const j=new WeakMap;const C=(t,e,n)=>{let s=Mt.get(t);if(Ut&&n){s=s||new CSSStyleSheet;if(typeof s==="string"){s=e}else{s.replaceSync(e)}}else{s=e}Mt.set(t,s)};const M=(t,e,n)=>{var s;const l=P(e);const o=Mt.get(l);t=t.nodeType===11?t:Pt;if(o){if(typeof o==="string"){t=t.head||t;let e=j.get(t);let n;if(!e){j.set(t,e=new Set)}if(!e.has(l)){{n=Pt.createElement("style");n.innerHTML=o;const e=(s=Rt.m)!==null&&s!==void 0?s:y(Pt);if(e!=null){n.setAttribute("nonce",e)}t.insertBefore(n,t.querySelector("link"))}if(e){e.add(l)}}}else if(!t.adoptedStyleSheets.includes(o)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]}}return l};const O=t=>{const e=t.v;const n=t.$;const s=e.u;const l=r("attachStyles",e.S);const o=M(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);if(s&10){n["s-sc"]=o;n.classList.add(o+"-h")}l()};const P=(t,e)=>"sc-"+t.S;const R=(t,e,n,s,l,o)=>{if(n!==s){let c=gt(t,e);let i=e.toLowerCase();if(e==="class"){const e=t.classList;const l=U(n);const o=U(s);e.remove(...l.filter((t=>t&&!o.includes(t))));e.add(...o.filter((t=>t&&!l.includes(t))))}else if(e==="style"){{for(const e in n){if(!s||s[e]==null){if(e.includes("-")){t.style.removeProperty(e)}else{t.style[e]=""}}}}for(const e in s){if(!n||s[e]!==n[e]){if(e.includes("-")){t.style.setProperty(e,s[e])}else{t.style[e]=s[e]}}}}else if(!c&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(gt(Ot,i)){e=i.slice(2)}else{e=i[2]+e.slice(3)}if(n){Rt.rel(t,e,n,false)}if(s){Rt.ael(t,e,s,false)}}else{const i=h(s);if((c||i&&s!==null)&&!l){try{if(!t.tagName.includes("-")){const l=s==null?"":s;if(e==="list"){c=false}else if(n==null||t[e]!=l){t[e]=l}}else{t[e]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(e)===""){{t.removeAttribute(e)}}}else if((!c||o&4||l)&&!i){s=s===true?"":s;{t.setAttribute(e,s)}}}}};const T=/\s/;const U=t=>!t?[]:t.split(T);const L=(t,e,n,s)=>{const l=e.h.nodeType===11&&e.h.host?e.h.host:e.h;const o=t&&t.l||d;const c=e.l||d;{for(s in o){if(!(s in c)){R(l,s,o[s],undefined,n,e.u)}}}for(s in c){R(l,s,o[s],c[s],n,e.u)}};const N=(t,o,f,r)=>{const u=o.o[f];let a=0;let d;let h;let y;if(!l){c=true;if(u.p==="slot"){if(e){r.classList.add(e+"-s")}u.u|=u.o?2:1}}if(u.t!==null){d=u.h=Pt.createTextNode(u.t)}else if(u.u&1){d=u.h=Pt.createTextNode("")}else{d=u.h=Pt.createElement(u.u&2?"slot-fb":u.p);{L(null,u,i)}if(p(e)&&d["s-si"]!==e){d.classList.add(d["s-si"]=e)}if(u.o){for(a=0;a<u.o.length;++a){h=N(t,u,a,d);if(h){d.appendChild(h)}}}}{d["s-hn"]=s;if(u.u&(2|1)){d["s-sr"]=true;d["s-cr"]=n;d["s-sn"]=u.i||"";y=t&&t.o&&t.o[f];if(y&&y.p===u.p&&t.h){x(t.h,false)}}}return d};const x=(t,e)=>{Rt.u|=1;const n=t.childNodes;for(let t=n.length-1;t>=0;t--){const l=n[t];if(l["s-hn"]!==s&&l["s-ol"]){q(l).insertBefore(l,F(l));l["s-ol"].remove();l["s-ol"]=undefined;c=true}if(e){x(l,e)}}Rt.u&=~1};const E=(t,e,n,l,o,c)=>{let i=t["s-cr"]&&t["s-cr"].parentNode||t;let f;if(i.shadowRoot&&i.tagName===s){i=i.shadowRoot}for(;o<=c;++o){if(l[o]){f=N(null,n,o,t);if(f){l[o].h=f;i.insertBefore(f,F(e))}}}};const W=(t,e,n)=>{for(let s=e;s<=n;++s){const e=t[s];if(e){const t=e.h;if(t){{o=true;if(t["s-ol"]){t["s-ol"].remove()}else{x(t,true)}}t.remove()}}}};const A=(t,e,n,s)=>{let l=0;let o=0;let c=e.length-1;let i=e[0];let f=e[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(l<=c&&o<=r){if(i==null){i=e[++l]}else if(f==null){f=e[--c]}else if(u==null){u=s[++o]}else if(a==null){a=s[--r]}else if(D(i,u)){H(i,u);i=e[++l];u=s[++o]}else if(D(f,a)){H(f,a);f=e[--c];a=s[--r]}else if(D(i,a)){if(i.p==="slot"||a.p==="slot"){x(i.h.parentNode,false)}H(i,a);t.insertBefore(i.h,f.h.nextSibling);i=e[++l];a=s[--r]}else if(D(f,u)){if(i.p==="slot"||a.p==="slot"){x(f.h.parentNode,false)}H(f,u);t.insertBefore(f.h,i.h);f=e[--c];u=s[++o]}else{{d=N(e&&e[o],n,o,t);u=s[++o]}if(d){{q(i.h).insertBefore(d,F(i.h))}}}}if(l>c){E(t,s[r+1]==null?null:s[r+1].h,n,s,o,r)}else if(o>r){W(e,l,c)}};const D=(t,e)=>{if(t.p===e.p){if(t.p==="slot"){return t.i===e.i}return true}return false};const F=t=>t&&t["s-ol"]||t;const q=t=>(t["s-ol"]?t["s-ol"]:t).parentNode;const H=(t,e)=>{const n=e.h=t.h;const s=t.o;const l=e.o;const o=e.p;const c=e.t;let f;if(c===null){{if(o==="slot");else{L(t,e,i)}}if(s!==null&&l!==null){A(n,s,e,l)}else if(l!==null){if(t.t!==null){n.textContent=""}E(n,null,e,l,0,l.length-1)}else if(s!==null){W(s,0,s.length-1)}}else if(f=n["s-cr"]){f.parentNode.textContent=c}else if(t.t!==c){n.data=c}};const I=t=>{const e=t.childNodes;let n;let s;let l;let o;let c;let i;for(s=0,l=e.length;s<l;s++){n=e[s];if(n.nodeType===1){if(n["s-sr"]){c=n["s-sn"];n.hidden=false;for(o=0;o<l;o++){i=e[o].nodeType;if(e[o]["s-hn"]!==n["s-hn"]||c!==""){if(i===1&&c===e[o].getAttribute("slot")){n.hidden=true;break}}else{if(i===1||i===3&&e[o].textContent.trim()!==""){n.hidden=true;break}}}}I(n)}}};const V=[];const _=t=>{let e;let n;let s;let l;let c;let i;let f=0;const r=t.childNodes;const u=r.length;for(;f<u;f++){e=r[f];if(e["s-sr"]&&(n=e["s-cr"])&&n.parentNode){s=n.parentNode.childNodes;l=e["s-sn"];for(i=s.length-1;i>=0;i--){n=s[i];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==e["s-hn"]){if(z(n,l)){c=V.find((t=>t.g===n));o=true;n["s-sn"]=n["s-sn"]||l;if(c){c.k=e}else{V.push({k:e,g:n})}if(n["s-sr"]){V.map((t=>{if(z(t.g,n["s-sn"])){c=V.find((t=>t.g===n));if(c&&!t.k){t.k=c.k}}}))}}else if(!V.some((t=>t.g===n))){V.push({g:n})}}}}if(e.nodeType===1){_(e)}}};const z=(t,e)=>{if(t.nodeType===1){if(t.getAttribute("slot")===null&&e===""){return true}if(t.getAttribute("slot")===e){return true}return false}if(t["s-sn"]===e){return true}return e===""};const B=(t,i,f=false)=>{const r=t.$;const u=t.v;const a=t.j||m(null,null);const d=w(i)?i:$(null,null,i);s=r.tagName;if(u.C){d.l=d.l||{};u.C.map((([t,e])=>d.l[e]=r[t]))}if(f&&d.l){for(const t of Object.keys(d.l)){if(r.hasAttribute(t)&&!["key","ref","style","class"].includes(t)){d.l[t]=r[t]}}}d.p=null;d.u|=4;t.j=d;d.h=a.h=r.shadowRoot||r;{e=r["s-sc"]}{n=r["s-cr"];l=(u.u&1)!==0;o=false}H(a,d);{Rt.u|=1;if(c){_(d.h);let t;let e;let n;let s;let l;let o;let c=0;for(;c<V.length;c++){t=V[c];e=t.g;if(!e["s-ol"]){n=Pt.createTextNode("");n["s-nr"]=e;e.parentNode.insertBefore(e["s-ol"]=n,e)}}for(c=0;c<V.length;c++){t=V[c];e=t.g;if(t.k){s=t.k.parentNode;l=t.k.nextSibling;n=e["s-ol"];while(n=n.previousSibling){o=n["s-nr"];if(o&&o["s-sn"]===e["s-sn"]&&s===o.parentNode){o=o.nextSibling;if(!o||!o["s-nr"]){l=o;break}}}if(!l&&s!==e.parentNode||e.nextSibling!==l){if(e!==l){if(!e["s-hn"]&&e["s-ol"]){e["s-hn"]=e["s-ol"].parentNode.nodeName}s.insertBefore(e,l)}}}else{if(e.nodeType===1){e.hidden=true}}}}if(o){I(d.h)}Rt.u&=~1;V.length=0}};const G=(t,e)=>{if(e&&!t.M&&e["s-p"]){e["s-p"].push(new Promise((e=>t.M=e)))}};const J=(t,e)=>{{t.u|=16}if(t.u&4){t.u|=512;return}G(t,t.O);const n=()=>K(t,e);return Dt(n)};const K=(t,e)=>{const n=r("scheduleUpdate",t.v.S);const s=t.P;let l;if(e){{t.u|=256;if(t.R){t.R.map((([t,e])=>nt(s,t,e)));t.R=undefined}}{l=nt(s,"componentWillLoad")}}n();return Q(l,(()=>Y(t,s,e)))};const Q=(t,e)=>X(t)?t.then(e):e();const X=t=>t instanceof Promise||t&&t.then&&typeof t.then==="function";const Y=async(t,e,n)=>{var s;const l=t.$;const o=r("update",t.v.S);const c=l["s-rc"];if(n){O(t)}const i=r("render",t.v.S);{Z(t,e,l,n)}if(c){c.map((t=>t()));l["s-rc"]=undefined}i();o();{const e=(s=l["s-p"])!==null&&s!==void 0?s:[];const n=()=>tt(t);if(e.length===0){n()}else{Promise.all(e).then(n);t.u|=4;e.length=0}}};const Z=(t,e,n,s)=>{try{e=e.render();{t.u&=~16}{t.u|=2}{{{B(t,e,s)}}}}catch(e){kt(e,t.$)}return null};const tt=t=>{const e=t.v.S;const n=t.$;const s=r("postUpdate",e);const l=t.P;const o=t.O;if(!(t.u&64)){t.u|=64;{st(n)}{nt(l,"componentDidLoad")}s();{t.T(n);if(!o){et()}}}else{{nt(l,"componentDidUpdate")}s()}{t.U(n)}{if(t.M){t.M();t.M=undefined}if(t.u&512){At((()=>J(t,false)))}t.u&=~(4|512)}};const et=e=>{{st(Pt.documentElement)}At((()=>k(Ot,"appload",{detail:{namespace:t}})))};const nt=(t,e,n)=>{if(t&&t[e]){try{return t[e](n)}catch(t){kt(t)}}return undefined};const st=t=>t.classList.add("hydrated");const lt=(t,e)=>wt(t).L.get(e);const ot=(t,e,n,s)=>{const l=wt(t);const o=l.$;const c=l.L.get(e);const i=l.u;const f=l.P;n=v(n,s.N[e][0]);const r=Number.isNaN(c)&&Number.isNaN(n);const u=n!==c&&!r;if((!(i&8)||c===undefined)&&u){l.L.set(e,n);if(f){if(s.W&&i&128){const t=s.W[e];if(t){t.map((t=>{try{f[t](n,c,e)}catch(t){kt(t,o)}}))}}if((i&(2|16))===2){J(l,false)}}}};const ct=(t,e,n)=>{if(e.N){if(t.watchers){e.W=t.watchers}const s=Object.entries(e.N);const l=t.prototype;s.map((([t,[s]])=>{if(s&31||n&2&&s&32){Object.defineProperty(l,t,{get(){return lt(this,t)},set(n){ot(this,t,n,e)},configurable:true,enumerable:true})}else if(n&1&&s&64){Object.defineProperty(l,t,{value(...e){const n=wt(this);return n.A.then((()=>n.P[t](...e)))}})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(t,e,s){Rt.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(l.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,e])=>e[0]&15)).map((([t,s])=>{const l=s[1]||t;n.set(l,t);if(s[0]&512){e.C.push([t,l])}return l}))}}return t};const it=async(t,e,n,s,l)=>{if((e.u&32)===0){e.u|=32;{l=Ct(n);if(l.then){const t=u();l=await l;t()}if(!l.isProxied){{n.W=l.watchers}ct(l,n,2);l.isProxied=true}const t=r("createInstance",n.S);{e.u|=8}try{new l(e)}catch(t){kt(t)}{e.u&=~8}{e.u|=128}t();ft(e.P)}if(l.style){let t=l.style;const e=P(n);if(!Mt.has(e)){const s=r("registerStyles",n.S);C(e,t,!!(n.u&1));s()}}}const o=e.O;const c=()=>J(e,true);if(o&&o["s-rc"]){o["s-rc"].push(c)}else{c()}};const ft=t=>{{nt(t,"connectedCallback")}};const rt=t=>{if((Rt.u&1)===0){const e=wt(t);const n=e.v;const s=r("connectedCallback",n.S);if(!(e.u&1)){e.u|=1;{if(n.u&(4|8)){ut(t)}}{let n=t;while(n=n.parentNode||n.host){if(n["s-p"]){G(e,e.O=n);break}}}if(n.N){Object.entries(n.N).map((([e,[n]])=>{if(n&31&&t.hasOwnProperty(e)){const n=t[e];delete t[e];t[e]=n}}))}{it(t,e,n)}}else{ht(t,e,n.D);if(e===null||e===void 0?void 0:e.P){ft(e.P)}else if(e===null||e===void 0?void 0:e.F){e.F.then((()=>ft(e.P)))}}s()}};const ut=t=>{const e=t["s-cr"]=Pt.createComment("");e["s-cn"]=true;t.insertBefore(e,t.firstChild)};const at=t=>{{nt(t,"disconnectedCallback")}};const dt=async t=>{if((Rt.u&1)===0){const e=wt(t);{if(e.q){e.q.map((t=>t()));e.q=undefined}}if(e===null||e===void 0?void 0:e.P){at(e.P)}else if(e===null||e===void 0?void 0:e.F){e.F.then((()=>at(e.P)))}}};const pt=(t,e={})=>{var n;const s=r();const l=[];const o=e.exclude||[];const c=Ot.customElements;const i=Pt.head;const f=i.querySelector("meta[charset]");const u=Pt.createElement("style");const d=[];let p;let h=true;Object.assign(Rt,e);Rt.H=new URL(e.resourcesUrl||"./",Pt.baseURI).href;t.map((t=>{t[1].map((e=>{const n={u:e[0],S:e[1],N:e[2],D:e[3]};{n.N=e[2]}{n.D=e[3]}{n.C=[]}{n.W={}}const s=n.S;const i=class extends HTMLElement{constructor(t){super(t);t=this;St(t,n);if(n.u&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(h){d.push(this)}else{Rt.jmp((()=>rt(this)))}}disconnectedCallback(){Rt.jmp((()=>dt(this)))}componentOnReady(){return wt(this).F}};n.I=t[0];if(!o.includes(s)&&!c.get(s)){l.push(s);c.define(s,ct(i,n,1))}}))}));{u.innerHTML=l+a;u.setAttribute("data-styles","");const t=(n=Rt.m)!==null&&n!==void 0?n:y(Pt);if(t!=null){u.setAttribute("nonce",t)}i.insertBefore(u,f?f.nextSibling:i.firstChild)}h=false;if(d.length){d.map((t=>t.connectedCallback()))}else{{Rt.jmp((()=>p=setTimeout(et,30)))}}s()};const ht=(t,e,n,s)=>{if(n){n.map((([n,s,l])=>{const o=t;const c=yt(e,l);const i=$t(n);Rt.ael(o,s,c,i);(e.q=e.q||[]).push((()=>Rt.rel(o,s,c,i)))}))}};const yt=(t,e)=>n=>{try{{if(t.u&256){t.P[e](n)}else{(t.R=t.R||[]).push([e,n])}}}catch(t){kt(t)}};const $t=t=>(t&2)!==0;const mt=t=>Rt.m=t;const bt=new WeakMap;const wt=t=>bt.get(t);const vt=(t,e)=>bt.set(e.P=t,e);const St=(t,e)=>{const n={u:0,$:t,v:e,L:new Map};{n.A=new Promise((t=>n.U=t))}{n.F=new Promise((t=>n.T=t));t["s-p"]=[];t["s-rc"]=[]}ht(t,n,e.D);return bt.set(t,n)};const gt=(t,e)=>e in t;const kt=(t,e)=>(0,console.error)(t,e);const jt=new Map;const Ct=(t,e,n)=>{const s=t.S.replace(/-/g,"_");const l=t.I;const o=jt.get(l);if(o){return o[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((t=>{{jt.set(l,t)}return t[s]}),kt)};const Mt=new Map;const Ot=typeof window!=="undefined"?window:{};const Pt=Ot.document||{head:{}};const Rt={u:0,H:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s),ce:(t,e)=>new CustomEvent(t,e)};const Tt=t=>Promise.resolve(t);const Ut=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const Lt=[];const Nt=[];const xt=(t,e)=>n=>{t.push(n);if(!f){f=true;if(e&&Rt.u&4){At(Wt)}else{Rt.raf(Wt)}}};const Et=t=>{for(let e=0;e<t.length;e++){try{t[e](performance.now())}catch(t){kt(t)}}t.length=0};const Wt=()=>{Et(Lt);{Et(Nt);if(f=Lt.length>0){Rt.raf(Wt)}}};const At=t=>Tt().then(t);const Dt=xt(Nt,true);export{pt as b,g as c,$ as h,Tt as p,vt as r,mt as s};
//# sourceMappingURL=p-e56e81c3.js.map