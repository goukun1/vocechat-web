"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[493],{79884:(e,t,a)=>{a.d(t,{Z:()=>n});var r,s=a(70537);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}const i=(e,t)=>{let{title:a,titleId:i,...n}=e;return s.createElement("svg",l({width:20,height:20,viewBox:"0 0 20 20",fill:"#616161",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},n),a?s.createElement("title",{id:i},a):null,r||(r=s.createElement("path",{d:"M6.48667 11.6667L6.83667 8.33333H3.325V6.66667H7L7.43333 2.5H9.10833L8.66667 6.66667H11.9833L12.4167 2.5H14.0917L13.65 6.66667H16.625V8.33333H13.4667L13.1167 11.6667H16.6167V13.3333H12.9333L12.4917 17.5H10.8083L11.2417 13.3333H7.91667L7.475 17.5H5.8L6.23333 13.3333H3.25V11.6667H6.4H6.48667ZM8.1625 11.6667H11.4875L11.8375 8.33333H8.5125L8.1625 11.6667Z"})))},n=(0,s.forwardRef)(i)},25552:(e,t,a)=>{a.d(t,{Z:()=>n});var r,s=a(70537);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}const i=(e,t)=>{let{title:a,titleId:i,...n}=e;return s.createElement("svg",l({width:14,height:15,viewBox:"0 0 14 15",fill:"black",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},n),a?s.createElement("title",{id:i},a):null,r||(r=s.createElement("path",{d:"M7 6.7929L10.5355 3.25736C10.7308 3.0621 11.0474 3.0621 11.2426 3.25736C11.4379 3.45262 11.4379 3.76921 11.2426 3.96447L7.70711 7.5L11.2426 11.0355C11.4379 11.2308 11.4379 11.5474 11.2426 11.7426C11.0474 11.9379 10.7308 11.9379 10.5355 11.7426L7 8.20711L3.46447 11.7426C3.26921 11.9379 2.95262 11.9379 2.75736 11.7426C2.5621 11.5474 2.5621 11.2308 2.75736 11.0355L6.2929 7.5L2.75736 3.96447C2.5621 3.76921 2.5621 3.45262 2.75736 3.25736C2.95262 3.0621 3.26921 3.0621 3.46447 3.25736L7 6.7929Z",fillOpacity:.8})))},n=(0,s.forwardRef)(i)},7499:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(70537),s=a(2632),l=a(16956),i=a(43563),n=a(80683);const o=e=>{let{id:t=""}=e;const{favorites:a}=(0,s.Z)({}),[o,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=a.find((e=>e.id==t)),{messages:r}=e||{};if(!r)return;const s=r.map((e=>{let{from_mid:t}=e;return+t}))||[];c((0,n.jsx)("div",{"data-favorite-mids":s.join(","),className:"favorite flex flex-col rounded-md bg-slate-50 dark:bg-slate-800",children:(0,n.jsx)("div",{className:"list",children:r.map(((e,t)=>{const{user:a={},download:r,content:s,content_type:o,properties:c,thumbnail:d}=e;return(0,n.jsxs)("div",{className:"w-full relative flex items-start gap-3 px-2 py-1 my-2 rounded-lg md:dark:hover:bg-gray-800",children:[a&&(0,n.jsx)("div",{className:"shrink-0 w-10 h-10 flex",children:(0,n.jsx)(l.Z,{width:40,height:40,className:"rounded-full object-cover",src:a.avatar,name:a.name})}),(0,n.jsxs)("div",{className:"w-full flex flex-col gap-2 text-sm",children:[(0,n.jsx)("div",{className:"flex items-center gap-2 font-semibold",children:(0,n.jsx)("span",{className:"text-gray-600 dark:text-gray-400",children:(null===a||void 0===a?void 0:a.name)||"Deleted User"})}),(0,n.jsx)("div",{className:"select-text text-gray-800 break-all whitespace-pre-wrap dark:text-white",children:(0,i.Z)({download:r,content:s,content_type:o,properties:c,thumbnail:d})})]})]},t)}))})}))}),[a,t]),t?o:null}},97601:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(70537),s=a(10336);const l=e=>{let{id:t="root-modal",mask:a=!0,children:l}=e;const[i,n]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=document.getElementById(t);if(!e)return;a&&e.classList.add("mask");const r=document.createElement("div");return r.classList.add("wrapper"),e.appendChild(r),n(r),()=>{e.removeChild(r)}}),[t,a]),i?(0,s.createPortal)(l,i):null}},32102:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(70537),s=a(14566),l=a(57425),i=a(7699),n=a.n(i),o=a(80308),c=a(66160),d=a(7499),m=a(2632),u=a(79884),h=a(25552),f=a(20814),x=a(31271),p=a(26906),v=a(8969),g=a(80683);const b=function(){const{t:e}=(0,s.$G)("fav"),[t,a]=(0,r.useState)(""),[i,b]=(0,r.useState)([]),{removeFavorite:w}=(0,m.Z)({}),j=[{icon:(0,g.jsx)(p.Z,{className:"w-[15px] h-5"}),title:e("all_items"),filter:""},{icon:(0,g.jsx)(x.Z,{className:"w-[15px] h-5"}),title:e("image"),filter:"image"},{icon:(0,g.jsx)(v.Z,{className:"w-[15px] h-5"}),title:e("video"),filter:"video"},{icon:(0,g.jsx)(f.Z,{className:"w-[15px] h-5"}),title:e("audio"),filter:"audio"}],{favorites:y,channelData:N,userData:_}=(0,c.CG)((e=>({favorites:e.favorites,userData:e.users.byId,channelData:e.channels.byId}))),k=e=>{a(e)};(0,r.useEffect)((()=>{if(t)switch(t){case"audio":b(y.filter((e=>(e.messages||[]).every((e=>{var t;const a=null===(t=e.properties)||void 0===t?void 0:t.content_type;return e.content_type==o.bT.file&&a.startsWith("audio")})))));break;case"video":b(y.filter((e=>(e.messages||[]).every((e=>{var t;const a=null===(t=e.properties)||void 0===t?void 0:t.content_type;return e.content_type==o.bT.file&&a.startsWith("video")})))));break;case"image":{const e=y.filter((e=>(e.messages||[]).every((e=>{var t;const a=null===(t=e.properties)||void 0===t?void 0:t.content_type;return e.content_type==o.bT.file&&a.startsWith("image")}))));b(e)}}else b(y)}),[t,y]);const L=e=>{const{id:t=""}=e.currentTarget.dataset;w(t)};return(0,g.jsxs)("div",{className:"h-screen flex bg-white mt-2 mr-6 mb-2.5 overflow-auto dark:bg-gray-700 rounded-2xl",children:[(0,g.jsx)("div",{className:" md:min-w-[268px] p-2 shadow-inner-[-1px_0px_0px_rgba(0,_0,_0,_0.1)]",children:(0,g.jsx)("ul",{className:"flex flex-col gap-0.5",children:j.map((e=>{let{icon:a,title:r,filter:s}=e;return(0,g.jsxs)("li",{className:(0,l.Z)(s==t&&"bg-[rgba(116,_127,_141,_0.2)]","cursor-pointer flex items-center gap-2 p-2 rounded-lg md:hover:bg-[rgba(116,_127,_141,_0.2)]"),onClick:k.bind(null,s),children:[a,(0,g.jsx)("span",{className:"hidden md:block font-bold text-sm text-gray-600 dark:text-gray-100",children:r})]},s)}))})}),(0,g.jsx)("div",{className:"w-full p-4 flex flex-col overflow-y-scroll gap-8",children:i.map((e=>{var t,a;let{id:r,created_at:s,messages:i}=e;if(!i||0==i.length)return null;const[{source:{gid:o,uid:c}}]=i,m=(0,g.jsx)("span",{className:(0,l.Z)("inline-flex items-center gap-1 mr-2"),children:o?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.Z,{className:"w-3 h-3"})," ",null===(t=N[o])||void 0===t?void 0:t.name]}):(0,g.jsxs)(g.Fragment,{children:["From"," ",(0,g.jsx)("strong",{className:"font-bold text-gray-800 dark:text-gray-100",children:null===(a=_[c])||void 0===a?void 0:a.name})]})});return(0,g.jsxs)("div",{className:"max-w-[600px] flex flex-col gap-1",children:[(0,g.jsxs)("h4",{className:"inline-flex items-center text-xs text-gray-400",children:[m,n()(s).format("YYYY-MM-DD")]}),(0,g.jsxs)("div",{className:"relative group",children:[(0,g.jsx)(d.Z,{id:r},r),(0,g.jsx)("button",{className:"absolute top-2 right-2 flex-center w-6 h-6 p-1 border border-solid border-slate-200 dark:border-slate-700 rounded invisible group-hover:visible","data-id":r,onClick:L,children:(0,g.jsx)(h.Z,{className:"fill-slate-900 dark:fill-slate-100"})})]})]},r)}))})]})}}}]);