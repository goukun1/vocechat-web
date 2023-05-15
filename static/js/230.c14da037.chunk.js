"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[230],{94727:(e,t,r)=>{r.d(t,{Z:()=>o});var a,s,l=r(70537);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}const i=(e,t)=>{let{title:r,titleId:i,...o}=e;return l.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:t,"aria-labelledby":i},o),r?l.createElement("title",{id:i},r):null,a||(a=l.createElement("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"})),s||(s=l.createElement("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})))},o=(0,l.forwardRef)(i)},19747:(e,t,r)=>{r.d(t,{Z:()=>o});var a,s,l=r(70537);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}const i=(e,t)=>{let{title:r,titleId:i,...o}=e;return l.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:t,"aria-labelledby":i},o),r?l.createElement("title",{id:i},r):null,a||(a=l.createElement("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"})),s||(s=l.createElement("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})))},o=(0,l.forwardRef)(i)},51285:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(57425),s=r(80683);const l=e=>{let{content:t,className:r=""}=e;return(0,s.jsx)("div",{className:(0,a.Z)("relative border-none h-[1px] bg-slate-200 dark:bg-gray-500 my-6 overflow-visible",r),children:(0,s.jsx)("span",{className:"p-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-gray-500 dark:text-gray-300 font-semibold bg-white dark:bg-gray-700",children:t})})}},97601:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(70537),s=r(10336);const l=e=>{let{id:t="root-modal",mask:r=!0,children:l}=e;const[n,i]=(0,a.useState)(null);return(0,a.useEffect)((()=>{const e=document.getElementById(t);if(!e)return;r&&e.classList.add("mask");const a=document.createElement("div");return a.classList.add("wrapper"),e.appendChild(a),i(a),()=>{e.removeChild(a)}}),[t,r]),n?(0,s.createPortal)(l,n):null}},99487:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(57425),s=r(70537),l=r(19747),n=r(94727),i=r(80683);const o=e=>{let{type:t="text",prefix:r="",className:o="",...c}=e;const[d,u]=(0,s.useState)(t),g=o.includes("large"),h=o.includes("none"),p="password"==t,f=(0,a.Z)("w-full bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 p-2 outline-none \n  disabled:text-gray-500 disabled:bg-gray-100 \n  dark:disabled:text-gray-500 \n  dark:disabled:bg-gray-800/50\n  dark:disabled:border-gray-600 \n  placeholder:text-gray-400",g&&"py-3",h&&"!border-none bg-transparent shadow-none",p&&"pr-[30px]");return"password"==t?(0,i.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${o}`,children:[(0,i.jsx)("input",{type:d,autoComplete:"password"==d?"current-password":"on",className:`${f} ${o}`,...c}),(0,i.jsx)("div",{className:"absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",onClick:()=>{u((e=>"password"==e?"text":"password"))},children:"password"==d?(0,i.jsx)(n.Z,{className:"fill-gray-500"}):(0,i.jsx)(l.Z,{className:"fill-gray-500"})})]}):r?(0,i.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${o}`,children:["string"===typeof r?(0,i.jsx)("span",{className:"px-4 py-2 text-sm text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 shadow-[rgb(0_0_0_/_10%)_-1px_0px_0px_inset]",children:r}):(0,i.jsx)("span",{className:"flex-center p-2 bg-gray-100 dark:bg-gray-800 ",children:r}),(0,i.jsx)("input",{className:`${f} ${o}`,type:t,...c})]}):(0,i.jsx)("input",{type:d,className:`${f} rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${o}`,...c})}},70254:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(57425),s=r(80683);const l=e=>{let{compact:t=!1,title:r="",description:l="",buttons:n,children:i,className:o}=e;return(0,s.jsxs)("div",{className:(0,a.Z)("rounded-lg bg-white dark:bg-gray-900 drop-shadow",t?"p-4 md:min-w-[406px] text-left":"p-5 md:p-8 md:min-w-[440px] text-center",o),children:[r&&(0,s.jsx)("h3",{className:"text-xl text-gray-600 dark:text-white mb-4 font-semibold",children:r}),l&&(0,s.jsx)("p",{className:"text-sm text-gray-400 dark:text-gray-100 mb-2",children:l}),i,n&&(0,s.jsx)("div",{className:"pt-4 w-full flex justify-end gap-4 items-center",children:n})]})}},30585:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(70537),s=r(65809);function l(){const[e,t]=(0,a.useState)(!1),[r,l]=(0,a.useState)(),{data:n}=(0,s.R)(void 0,{refetchOnMountOrArgChange:!0}),[i,{isSuccess:o}]=(0,s.Ku)();(0,a.useEffect)((()=>{n&&l(n)}),[n]),(0,a.useEffect)((()=>{t(!o&&JSON.stringify(n)!==JSON.stringify(r))}),[n,r,o]);return{config:r,changed:e,updateGithubAuthConfig:e=>{l((t=>t?{...t,...e}:e))},updateGithubAuthConfigToServer:async()=>{r&&await i(r)},isSuccess:o}}},44992:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(70537),s=r(65809);function l(){const[e,t]=(0,a.useState)(!1),[r,l]=(0,a.useState)(""),{data:n}=(0,s.eM)(void 0,{refetchOnMountOrArgChange:!0}),[i,{isSuccess:o}]=(0,s.Vr)();(0,a.useEffect)((()=>{n&&l(n.client_id)}),[n]),(0,a.useEffect)((()=>{t(!o&&(null===n||void 0===n?void 0:n.client_id)!==r)}),[n,r,o]);return{config:n,changed:e,clientId:r,updateClientId:l,updateClientIdToServer:async()=>{r&&await i({client_id:r})},updateGoogleAuthConfig:i,isSuccess:o}}},67093:(e,t,r)=>{r.d(t,{Z:()=>A});var a,s,l,n,i=r(70537),o=r(27418),c=r(65809),d=r(30585),u=r(44992),g=r(89156),h=r(80308);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}const f=(e,t)=>{let{title:r,titleId:o,...c}=e;return i.createElement("svg",p({width:2443,height:2500,viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":o},c),r?i.createElement("title",{id:o},r):null,a||(a=i.createElement("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"})),s||(s=i.createElement("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"})),l||(l=i.createElement("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"})),n||(n=i.createElement("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})))},m=(0,i.forwardRef)(f);var w=r(4472),b=r(15312),x=r(14566),v=r(80683);const y=e=>{let{type:t="login",loaded:r,loadError:a}=e;const{t:s}=(0,x.$G)("auth"),{t:l}=(0,x.$G)(),[n,{isSuccess:c,isLoading:d,error:u}]=(0,b.YA)(),p=localStorage.getItem(h.LJ);return(0,i.useEffect)((()=>{c&&o.ZP.success(l("tip.login"))}),[c]),(0,i.useEffect)((()=>{if(u&&"status"in u)if(410===u.status)o.ZP.error("No associated account found, please contact user admin for an invitation link to join.");else o.ZP.error("Something Error")}),[u]),(0,v.jsxs)(w.Z,{className:" group relative w-full !bg-white dark:!bg-gray-700 !text-gray-600 dark:!text-gray-200 overflow-hidden border border-solid border-gray-300 dark:border-gray-500",disabled:!r||d,children:[(0,v.jsxs)("div",{className:"absolute left-0 top-0 w-full h-full flex-center gap-3 z-[998] bg-inherit",children:[(0,v.jsx)(m,{className:"w-6 h-6"}),a?"Script Load Error!":r?`${s("login"===t?"login.google":"reg.google")}`:"Initializing"]}),(0,v.jsx)("div",{className:"absolute left-0 top-0 w-full h-full group-hover:opacity-0 group-hover:z-[999]",children:(0,v.jsx)(g.kZ,{width:"360px",onSuccess:e=>{n({magic_token:p,id_token:e.credential||"",type:"google"})}})})]})},C=e=>{let{type:t="login",clientId:r}=e;const[a,s]=(0,i.useState)(!1),[l,n]=(0,i.useState)(!1);return r?(0,v.jsx)(i.Suspense,{fallback:(0,v.jsx)("span",{children:"loading..."}),children:(0,v.jsx)(g.rg,{onScriptLoadError:()=>{n(!0)},onScriptLoadSuccess:()=>{s(!0)},clientId:r,children:(0,v.jsx)(y,{type:t,loaded:a,loadError:l})})}):null};var j,k;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},E.apply(this,arguments)}const N=(e,t)=>{let{title:r,titleId:a,...s}=e;return i.createElement("svg",E({width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},s),r?i.createElement("title",{id:a},r):null,j||(j=i.createElement("g",{clipPath:"url(#clip0_14990_39524)"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 0C5.8724 0 0.5 5.3808 0.5 12.0204C0.5 17.3304 3.938 21.8364 8.7068 23.4252C9.3068 23.5356 9.5252 23.1648 9.5252 22.8456C9.5252 22.5612 9.5156 21.804 9.5096 20.802C6.1712 21.528 5.4668 19.1904 5.4668 19.1904C4.922 17.8008 4.1348 17.4312 4.1348 17.4312C3.0452 16.6872 4.2176 16.7016 4.2176 16.7016C5.4212 16.7856 6.0548 17.94 6.0548 17.94C7.1252 19.776 8.864 19.2456 9.5468 18.9384C9.6572 18.162 9.9668 17.6328 10.31 17.3328C7.646 17.0292 4.844 15.9972 4.844 11.3916C4.844 10.08 5.312 9.006 6.0788 8.166C5.9552 7.8624 5.5436 6.6396 6.1964 4.986C6.1964 4.986 7.2044 4.662 9.4964 6.2172C10.4753 5.95022 11.4853 5.81423 12.5 5.8128C13.52 5.8176 14.546 5.9508 15.5048 6.2172C17.7956 4.662 18.8012 4.9848 18.8012 4.9848C19.4564 6.6396 19.0436 7.8624 18.9212 8.166C19.6892 9.006 20.1548 10.08 20.1548 11.3916C20.1548 16.0092 17.348 17.0256 14.6756 17.3232C15.1064 17.694 15.4892 18.4272 15.4892 19.5492C15.4892 21.1548 15.4748 22.452 15.4748 22.8456C15.4748 23.1672 15.6908 23.5416 16.3004 23.424C18.69 22.6225 20.7672 21.0904 22.2386 19.0441C23.7099 16.9977 24.501 14.5408 24.5 12.0204C24.5 5.3808 19.1264 0 12.5 0Z",fill:"black"}))),k||(k=i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_14990_39524"},i.createElement("rect",{width:24,height:24,fill:"white",transform:"translate(0.5)"})))))},Z=(0,i.forwardRef)(N),S=e=>{let{type:t="login",source:r="webapp",client_id:a}=e;const{t:s}=(0,x.$G)("auth");(0,i.useEffect)((()=>{const e=e=>{const{key:t,newValue:r}=e;if("widget"==t&&r)if(localStorage.removeItem("widget"),window.location!==window.parent.location){const e=window.parent;e&&e.postMessage("RELOAD_WITH_OPEN","*")}else location.reload()};return"widget"==r&&window.addEventListener("storage",e),()=>{"widget"==r&&window.removeEventListener("storage",e)}}),[r]);return(0,v.jsxs)(w.Z,{className:"flex-center gap-3 ghost",onClick:()=>{const e=`https://github.com/login/oauth/authorize?client_id=${a}&redirect_uri=${location.origin}/github/cb/${r}.html`;"webapp"==r?location.href=e:window.open(e)},children:[(0,v.jsx)(Z,{className:"w-6 h-6"}),` ${s("login"===t?"login.github":"reg.github")}`]})};var _=r(70479);const O=r.p+"static/media/metamask.f04d5fb63394197766d0.svg";function M(e){let{login:t,type:r="login"}=e;const{t:a}=(0,x.$G)("auth"),[s,l]=(0,i.useState)(!1),[n,o]=(0,i.useState)([]),[c]=(0,b.sZ)(),d=(0,i.useRef)();(0,i.useEffect)((()=>{function e(e){o(e)}return d.current||(d.current=new _.Z),_.Z.isMetaMaskInstalled()&&window.ethereum.on("accountsChanged",e),()=>{_.Z.isMetaMaskInstalled()&&window.ethereum.removeListener("accountsChanged",e)}}),[]),(0,i.useEffect)((()=>{if(_.Z.isMetaMaskInstalled())if(n.length>0){var e;const[r]=n;(async e=>{const{data:r,isSuccess:a}=await c(e);if(a){const a=await u(e,r);t({public_address:e,nonce:r,signature:a,type:"metamask"})}})(r),l(!0),null===(e=d.current)||void 0===e||e.stopOnboarding()}else l(!1)}),[n]);const u=async(e,t)=>await window.ethereum.request({method:"personal_sign",params:[t,e,"hello from "]});return(0,v.jsxs)(w.Z,{className:"flex ghost flex-center gap-2",disabled:s,onClick:async()=>{if(_.Z.isMetaMaskInstalled()){l(!0);try{const e=await window.ethereum.request({method:"eth_requestAccounts"});o(e)}catch(t){window.ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}l(!1)}else{var e;null===(e=d.current)||void 0===e||e.startOnboarding()}},children:[(0,v.jsx)("img",{className:"w-6 h-6",src:O,alt:"meta mask icon"}),a("login"==r?"login.metamask":"reg.metamask")]})}var $=r(70254),I=r(97601);const L=e=>{let{issuer:t}=e;const[r,{data:a,isLoading:s,isSuccess:l}]=(0,b.CB)();return(0,i.useEffect)((()=>{if(l&&a){const{url:e}=a;location.href=e}}),[a,l]),(0,v.jsxs)(w.Z,{className:"flex flex-center gap-3",disabled:s||l,onClick:()=>{r({issuer:t.domain,redirect_uri:`${location.origin}/#/login`})},children:[!!t.favicon&&(0,v.jsx)("img",{src:t.favicon,className:"w-6 h-6",alt:"icon"}),s?"Loading...":`Login with ${t.domain}`]})},R=e=>{let{issuers:t,type:r="login"}=e;const{t:a}=(0,x.$G)("auth"),{t:s}=(0,x.$G)(),[l,n]=(0,i.useState)(!1);return t?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w.Z,{className:"flex ghost flex-center gap-2",onClick:()=>{n(!0)},children:a("login"==r?"login.oidc":"reg.oidc")}),l&&(0,v.jsx)(I.Z,{id:"modal-modal",children:(0,v.jsxs)($.Z,{className:"text-center ",title:"Login with OIDC",children:[(0,v.jsx)("div",{className:"flex flex-col gap-2",children:t.filter((e=>e.enable)).map(((e,t)=>(0,v.jsx)(L,{issuer:e},t)))}),(0,v.jsx)(w.Z,{className:"border_less ghost",onClick:()=>{n(!1)},children:s("action.close")})]})})]}):null},A=e=>{let{type:t="login"}=e;const{t:r}=(0,x.$G)(),[a,{isSuccess:s}]=(0,b.YA)(),{config:l}=(0,d.Z)(),{data:n,isSuccess:g}=(0,c.ww)(),{clientId:h}=(0,u.Z)();if((0,i.useEffect)((()=>{s&&o.ZP.success(r("tip.login"))}),[s]),!g)return null;const{github:p,google:f,metamask:m,oidc:w=[]}=n,y=f&&!!h;return(0,v.jsxs)(v.Fragment,{children:[y&&(0,v.jsx)(C,{type:t,clientId:h}),p&&(0,v.jsx)(S,{type:t,client_id:null===l||void 0===l?void 0:l.client_id}),m&&(0,v.jsx)(M,{type:t,login:a}),w.length>0&&(0,v.jsx)(R,{type:t,issuers:w})]})}}}]);