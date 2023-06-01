"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[656,558],{94727:(e,r,t)=>{t.d(r,{Z:()=>d});var a,s,n=t(70537);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}const o=(e,r)=>{let{title:t,titleId:o,...d}=e;return n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:r,"aria-labelledby":o},d),t?n.createElement("title",{id:o},t):null,a||(a=n.createElement("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"})),s||(s=n.createElement("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})))},d=(0,n.forwardRef)(o)},19747:(e,r,t)=>{t.d(r,{Z:()=>d});var a,s,n=t(70537);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}const o=(e,r)=>{let{title:t,titleId:o,...d}=e;return n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:r,"aria-labelledby":o},d),t?n.createElement("title",{id:o},t):null,a||(a=n.createElement("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"})),s||(s=n.createElement("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})))},d=(0,n.forwardRef)(o)},99487:(e,r,t)=>{t.d(r,{Z:()=>d});var a=t(70537),s=t(57425),n=t(94727),l=t(19747),o=t(80683);const d=e=>{let{type:r="text",prefix:t="",className:d="",...i}=e;const[c,g]=(0,a.useState)(r),u=d.includes("large"),x=d.includes("none"),m="password"==r,h=(0,s.Z)("w-full text-sm text-gray-800 dark:text-gray-200 p-2 outline-none \n    bg-inherit\n  disabled:text-gray-500 disabled:bg-gray-100 \n  dark:disabled:text-gray-500 \n  dark:disabled:bg-gray-800/50\n  dark:disabled:border-gray-600 \n  placeholder:text-gray-400",u&&"py-3",x&&"!border-none bg-transparent shadow-none",m&&"pr-[30px]");return"password"==r?(0,o.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${d}`,children:[(0,o.jsx)("input",{type:c,autoComplete:"password"==c?"current-password":"on",className:`${h} ${d}`,...i}),(0,o.jsx)("div",{className:"absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",onClick:()=>{g((e=>"password"==e?"text":"password"))},children:"password"==c?(0,o.jsx)(n.Z,{className:"fill-gray-500"}):(0,o.jsx)(l.Z,{className:"fill-gray-500"})})]}):t?(0,o.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm bg-white dark:bg-gray-800 ${d}`,children:["string"===typeof t?(0,o.jsx)("span",{className:"px-4 py-2 text-sm text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 shadow-[rgb(0_0_0_/_10%)_-1px_0px_0px_inset]",children:t}):(0,o.jsx)("span",{className:"flex-center p-2 bg-transparent",children:t}),(0,o.jsx)("input",{className:`${h} ${d}`,type:r,...i})]}):(0,o.jsx)("input",{type:c,className:`${h} rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${d}`,...i})}},99656:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});var a=t(70537),s=t(27418),n=t(14566),l=t(3074),o=t(15924),d=t(15312),i=t(21645),c=t(4472),g=t(99487),u=t(80683);function x(){const{t:e}=(0,n.$G)("auth",{keyPrefix:"magic_link_expire"});return(0,u.jsxs)("div",{className:"flex flex-col items-center",children:[(0,u.jsx)("div",{className:"font-bold text-3xl text-gray-800 dark:text-white mt-3",children:e("title")}),(0,u.jsx)("p",{className:"text-center text-gray-400 mb-6",children:e("desc")}),(0,u.jsx)("p",{className:"text-center text-gray-400",children:e("desc_close")})]})}var m=t(79558);const h=()=>{const{t:e}=(0,n.$G)(),{t:r}=(0,n.$G)("auth"),{token:t}=(0,m.useMagicToken)(),[h,{data:p,isLoading:f}]=(0,d.v5)(),[b,{isLoading:y,error:v,isSuccess:w,data:k}]=(0,d.YA)(),[j,{isLoading:N,isSuccess:_,data:C,error:E}]=(0,d.l4)(),{from:Z="reg"}=(0,o.UO)(),$=(0,l.I0)(),[O,S]=(0,a.useState)("");(0,a.useEffect)((()=>{t&&h(t)}),[t]),(0,a.useEffect)((()=>{if(v&&"status"in v&&401===v.status)s.ZP.error("Invalided Token")}),[v]),(0,a.useEffect)((()=>{if(E&&"status"in E&&409===E.status)s.ZP.error("Something Conflicted!")}),[E]),(0,a.useEffect)((()=>{const r=k||C;(w||_)&&r&&(s.ZP.success(e("tip.login")),$((0,i.A3)(r)),location.href="/#/")}),[w,_,k,C]);if(!t)return(0,u.jsx)("span",{className:"dark:text-white",children:"No Token"});if(f)return(0,u.jsx)("div",{className:"dark:text-gray-100",children:"Checking Magic Link..."});if(!p)return(0,u.jsx)(x,{});const L=y||N,M=w||_;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"flex-center flex-col pb-6 max-w-md",children:[(0,u.jsx)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-gray-100 mb-2",children:r("reg.input_name")}),(0,u.jsx)("span",{className:"text-gray-400 text-center dark:text-gray-100",children:r("reg.input_name_tip")})]}),(0,u.jsxs)("form",{className:"flex flex-col m-auto gap-5 w-80 md:min-w-[360px]",onSubmit:e=>{e.preventDefault(),"reg"==Z?j({magic_token:t,name:O}):b({magic_token:t,extra_name:O,type:"magiclink"})},children:[(0,u.jsx)(g.Z,{className:"large",name:"username",value:O,required:!0,placeholder:"Type a name",onChange:e=>{S(e.target.value)}}),(0,u.jsx)(c.Z,{type:"submit",disabled:L||!O||M,children:L?"Logging in":"Continue"})]})]})}},79558:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o,useMagicToken:()=>d});var a=t(70537),s=t(64084),n=t(15924),l=t(80683);function o(){var e;const[r,t]=(0,a.useState)("");let[o]=(0,s.lr)(new URLSearchParams(location.search));const d=null!==(e=o.get("magic_token"))&&void 0!==e?e:"";return(0,a.useEffect)((()=>{t(d)}),[d]),(0,l.jsx)("div",{className:"flex-center h-screen overflow-x-hidden overflow-y-auto dark:bg-gray-700",children:(0,l.jsx)("div",{className:"py-8 px-10 shadow-md rounded-xl max-h-[95vh] overflow-y-auto overflow-x-hidden",children:(0,l.jsx)(n.j3,{context:{token:r}})})})}function d(){return(0,n.bx)()}}}]);