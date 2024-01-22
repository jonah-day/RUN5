document.addEventListener("astro:page-load",()=>{let e=document.querySelector(".main-dropdown"),t=document.querySelector(".logo-container"),n=document.querySelector(".menu-layer");document.querySelector(".middle-bar");let o=!1;function r(){o?(document.documentElement.style.setProperty("--menu-box-desk-width","54px"),document.documentElement.style.setProperty("--menu-box-width","40.5px"),document.documentElement.style.setProperty("--menu-bar-desk-width","30px"),document.documentElement.style.setProperty("--menu-bar-width","24px"),t.style.visibility="visible",t.style.opacity="1",n.style.visibility="hidden",n.style.opacity="0",o=!1):(document.documentElement.style.setProperty("--menu-box-desk-width","100%"),document.documentElement.style.setProperty("--menu-box-width","100%"),document.documentElement.style.setProperty("--menu-bar-desk-width","20px"),document.documentElement.style.setProperty("--menu-bar-width","16px"),t.style.opacity="0",t.style.visibility="hidden",n.style.opacity="1",n.style.visibility="visible",o=!0)}e.addEventListener("click",r)});const Q="astro:before-preparation",Z="astro:after-preparation",ee="astro:before-swap",te="astro:after-swap",ne=e=>document.dispatchEvent(new Event(e));class C extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,a,u,d,i,m){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=u,this.sourceElement=d,this.info=i,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class oe extends C{formData;loader;constructor(t,n,o,r,a,u,d,i,m){super(Q,{cancelable:!0},t,n,o,r,a,u,d),this.formData=i,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class re extends C{direction;viewTransition;swap;constructor(t,n,o){super(ee,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ie(e,t,n,o,r,a,u,d){const i=new oe(e,t,n,o,r,a,window.document,u,d);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(ne(Z),i.navigationType!=="traverse"&&D({scrollX,scrollY}))),i}async function se(e,t,n){const o=new re(e,t,n);return document.dispatchEvent(o),o.swap(),o}const ae=history.pushState.bind(history),v=history.replaceState.bind(history),D=e=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...e},""))},R=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),_=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let L,p,A=!1,B;const U=e=>document.dispatchEvent(new Event(e)),V=()=>U("astro:page-load"),ce=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},y="data-astro-transition-persist",W="data-astro-transition",X="data-astro-transition-fallback";let M,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(v({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");const le=(e,t)=>{let n=!1,o=!1;return(...r)=>{if(n){o=!0;return}e(...r),n=!0,setTimeout(()=>{o&&(o=!1,e(...r)),n=!1},t)}};async function ue(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function Y(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function de(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const o of t.attributes){if(o.name==="src"){const r=new Promise(a=>{n.onload=a});e=e.then(()=>r)}n.setAttribute(o.name,o.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}const K=(e,t,n,o,r)=>{const a=_(t,e),u=document.title;document.title=o;let d=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const i=history.state;v({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",e.href)}else ae({...n.state,index:++T,scrollX:0,scrollY:0},"",e.href);if(L=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),d=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const i=history.state;location.href=e.href,history.state||v(i,"")}else d||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=u};function fe(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${y}="${n.getAttribute(y)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function H(e,t,n,o){const r=(s,f)=>{const h=s.getAttribute(y),b=h&&f.head.querySelector(`[${y}="${h}"]`);if(b)return b;if(s.matches("link[rel=stylesheet]")){const g=s.getAttribute("href");return f.head.querySelector(`link[rel=stylesheet][href="${g}"]`)}return null},a=()=>{const s=document.activeElement;if(s?.closest(`[${y}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const f=s.selectionStart,h=s.selectionEnd;return{activeElement:s,start:f,end:h}}return{activeElement:s}}else return{activeElement:null}},u=({activeElement:s,start:f,end:h})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=f,s.selectionEnd=h))},d=s=>{const f=document.documentElement,h=[...f.attributes].filter(({name:c})=>(f.removeAttribute(c),c.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...h].forEach(({name:c,value:l})=>f.setAttribute(c,l));for(const c of document.scripts)for(const l of s.newDocument.scripts)if(!c.src&&c.textContent===l.textContent||c.src&&c.type===l.type&&c.src===l.src){l.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const l=r(c,s.newDocument);l?l.remove():c.remove()}document.head.append(...s.newDocument.head.children);const b=document.body,g=a();document.body.replaceWith(s.newDocument.body);for(const c of b.querySelectorAll(`[${y}]`)){const l=c.getAttribute(y),P=document.querySelector(`[${y}="${l}"]`);P&&P.replaceWith(c)}u(g)};async function i(s){function f(c){const l=c.effect;return!l||!(l instanceof KeyframeEffect)||!l.target?!1:window.getComputedStyle(l.target,l.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(X,s);const g=document.getAnimations().filter(c=>!h.includes(c)&&!f(c));return Promise.all(g.map(c=>c.finished))}if(!A)document.documentElement.setAttribute(W,e.direction),o==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const m=document.title,w=await se(e,p,d);K(w.to,w.from,t,m,n),U(te),o==="animate"&&!A&&i("new").then(()=>B())}async function j(e,t,n,o,r){if(!I()||location.origin!==n.origin){location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&D({scrollX,scrollY}),_(t,n)&&n.hash){K(n,t,o,document.title,r);return}const u=await ie(t,n,e,a,o.sourceElement,o.info,o.formData,d);if(u.defaultPrevented){location.href=n.href;return}async function d(i){const m=i.to.href,w={};if(i.formData){w.method="POST";const h=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");w.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const s=await ue(m,w);if(s===null){i.preventDefault();return}if(s.redirected&&(i.to=new URL(s.redirected)),M??=new DOMParser,i.newDocument=M.parseFromString(s.html,s.mediaType),i.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const f=fe(i.newDocument);f.length&&await Promise.all(f)}if(A=!1,R)p=document.startViewTransition(async()=>await H(u,o,r));else{const i=(async()=>{await new Promise(m=>setTimeout(m)),await H(u,o,r,Y())})();p={updateCallbackDone:i,ready:i,finished:new Promise(m=>B=m),skipTransition:()=>{A=!0}}}p.ready.then(async()=>{await de(),V(),ce()}),p.finished.then(()=>{document.documentElement.removeAttribute(W),document.documentElement.removeAttribute(X)}),await p.ready}async function N(e,t){await j("forward",L,new URL(e,location.href),t??{})}function me(e){if(!I()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>T?"forward":"back";T=n,j(o,L,new URL(location.href),{},t)}const q=()=>{D({scrollX,scrollY})};{(R||Y()!=="none")&&(L=new URL(location.href),addEventListener("popstate",me),addEventListener("load",V),"onscrollend"in window?addEventListener("scrollend",q):addEventListener("scroll",le(q,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const G=new Set,S=new WeakSet;let k,z,F=!1;function he(e){F||(F=!0,k??=e?.prefetchAll??!1,z??=e?.defaultStrategy??"hover",ye(),we(),pe(),ge())}function ye(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{E(t.target,"tap")&&x(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function we(){let e;document.body.addEventListener("focusin",o=>{E(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),O(()=>{for(const o of document.getElementsByTagName("a"))S.has(o)||E(o,"hover")&&(S.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{x(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function pe(){let e;O(()=>{for(const t of document.getElementsByTagName("a"))S.has(t)||E(t,"viewport")&&(S.add(t),e??=be(),e.observe(t))})}function be(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),x(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function ge(){O(()=>{for(const e of document.getElementsByTagName("a"))E(e,"load")&&x(e.href,{with:"link"})})}function x(e,t){const n=t?.ignoreSlowConnection??!1;if(!Te(e,n))return;if(G.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function Te(e,t){if(!navigator.onLine||!t&&J())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!G.has(e)}catch{}return!1}function E(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||k)&&J()?!0:n==null&&k||n===""?t===z:n===t}function J(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function O(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ee(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function $(e){return e.dataset.astroReload!==void 0}(R||Ee()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;$(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),N(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||$(t))return;const n=t,o=e.submitter,r=new FormData(n,o);let a=o?.getAttribute("formaction")??n.action??location.pathname;const u=o?.getAttribute("formmethod")??n.method;if(u==="dialog")return;const d={sourceElement:o??n};if(u==="get"){const i=new URLSearchParams(r),m=new URL(a);m.search=i.toString(),a=m.toString()}else d.formData=r;e.preventDefault(),N(a,d)}),he({prefetchAll:!0}));
