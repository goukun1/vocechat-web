"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[59],{19059:(e,t,s)=>{s.r(t),s.d(t,{default:()=>$});var l=s(21600),a=s(36646),r=s(78004),i=s.n(r),n=s(35160),c=s(53910),o=s(37196),d=s(33054),m=s(30320),x=s(47815),u=s(8839),p=s(77544),h=s(2982),g=s(117),b=s(9812),f=s(10364);const j=({value:e="",updateSearchValue:t=null,embed:s=!1})=>{const{t:l}=(0,d.Bd)();return(0,f.jsxs)("div",{className:(0,a.A)("hidden md:block relative w-full py-1.5 px-4 shadow",s&&"py-2 shadow-none"),children:[(0,f.jsx)(b.A,{className:"absolute left-6 top-1/2 -translate-y-1/2"}),(0,f.jsx)("input",{value:e,onChange:e=>{t&&t(e.target.value)},className:"bg-black/5 dark:bg-black/20 rounded-full text-sm text-gray-500 py-2.5 pl-9",placeholder:`${l("action.search")}...`})]})},y=({select:e=0,updateFilter:t})=>{const{input:s,updateInput:l,channels:a}=(0,h.A)(),r=e=>{t({channel:e})};return(0,f.jsxs)("div",{className:"rounded-lg p-1 pt-0 bg-white dark:bg-gray-800 overflow-auto max-h-[400px] flex flex-col items-start relative drop-shadow",children:[(0,f.jsx)("div",{className:" bg-white dark:bg-gray-800 sticky top-0 z-10 w-full",children:(0,f.jsx)(j,{embed:!0,value:s,updateSearchValue:l})}),(0,f.jsxs)("ul",{className:"w-full flex flex-col gap-4 p-2",children:[(0,f.jsxs)("li",{className:"relative cursor-pointer flex items-center gap-2",onClick:r.bind(null,void 0),children:[(0,f.jsx)(p.A,{}),(0,f.jsx)("span",{className:"text-gray-500 dark:text-gray-100 font-semibold text-sm",children:"Any Channel"}),!e&&(0,f.jsx)(g.A,{className:"absolute right-0 top-1/2 -translate-y-1/2"})]}),a.map((({gid:t,is_public:s,name:l})=>(0,f.jsxs)("li",{className:"relative cursor-pointer flex items-center gap-2",onClick:r.bind(null,t),children:[(0,f.jsx)(p.A,{personal:!s}),(0,f.jsx)("span",{className:"text-gray-500 dark:text-gray-100 font-semibold text-sm",children:l}),e==t&&(0,f.jsx)(g.A,{className:"absolute right-0 top-1/2 -translate-y-1/2"})]},t)))]})]})},v={today:{title:"Today",duration:2222},in7d:{title:"Last 7 Days"},in30d:{title:"Last 30 Days"},in3m:{title:"Last 3 months"},in12m:{title:"Last 12 months"}},N=({select:e="",updateFilter:t})=>{const s=e=>{t({date:e})};return(0,f.jsx)("div",{className:"p-3 bg-white dark:bg-gray-800 min-w-[200px] overflow-auto rounded-lg flex flex-col items-start relative drop-shadow",children:(0,f.jsxs)("ul",{className:"w-full flex flex-col gap-4",children:[(0,f.jsxs)("li",{className:"relative cursor-pointer flex items-center gap-4 text-gray-500 dark:text-gray-300 font-semibold text-sm",onClick:s.bind(null,void 0),children:["Any Time",!e&&(0,f.jsx)(g.A,{className:"absolute right-0 top-1/2 -translate-y-1/2"})]}),Object.entries(v).map((([t,{title:l}])=>(0,f.jsxs)("li",{className:"relative cursor-pointer flex items-center gap-4 text-gray-500 dark:text-gray-300 font-semibold text-sm",onClick:s.bind(null,t),children:[l,e==t&&(0,f.jsx)(g.A,{className:"absolute right-0 -top-1/2 -translate-y-1/2"})]},l)))]})})};var w=s(29615),k=s(69084);const A=({select:e="",updateFilter:t})=>{const{input:s,updateInput:l,users:a}=(0,k.A)(),r=e=>{t({from:e})};return(0,f.jsxs)("div",{className:"rounded-lg p-1 pt-0 bg-white dark:bg-gray-800 overflow-auto max-h-[300px] flex flex-col items-start relative drop-shadow",children:[(0,f.jsx)("div",{className:"bg-white dark:bg-gray-800 sticky top-0 z-10 w-full",children:(0,f.jsx)(j,{embed:!0,value:s,updateSearchValue:l})}),(0,f.jsxs)("ul",{className:"w-full flex flex-col",children:[(0,f.jsxs)("li",{className:"relative cursor-pointer p-2.5 font-semibold text-sm text-gray-500",onClick:r.bind(null,void 0),children:["Anyone",!e&&(0,f.jsx)(g.A,{className:"absolute right-1.5 top-1/2 -translate-y-1/2"})]}),a.map((({uid:t})=>(0,f.jsxs)("li",{className:"relative cursor-pointer",onClick:r.bind(null,t),children:[(0,f.jsx)(w.A,{uid:t,interactive:!0}),e==t&&(0,f.jsx)(g.A,{className:"absolute right-1.5 top-1/2 -translate-y-1/2"})]},t)))]})]})};var C=s(7174),F=s(52287),V=s(99994),_=s(22759),S=s(14138),I=s(90694),O=s(44081);const G={doc:{title:"Documents",icon:(0,f.jsx)(V.A,{className:"w-4 h-auto"})},pdf:{title:"PDFs",icon:(0,f.jsx)(S.A,{className:"w-4 h-auto"})},image:{title:"Images",icon:(0,f.jsx)(_.A,{className:"w-4 h-auto"})},audio:{title:"Audio",icon:(0,f.jsx)(C.A,{className:"w-4 h-auto"})},video:{title:"Videos",icon:(0,f.jsx)(O.A,{className:"w-4 h-auto"})},code:{title:"Code Snippets",icon:(0,f.jsx)(F.A,{className:"w-4 h-auto"})},unknown:{title:"Unknown Files",icon:(0,f.jsx)(I.A,{className:"w-4 h-auto"})}},L=({select:e="",updateFilter:t})=>{const s=e=>{t({type:e})};return(0,f.jsx)("div",{className:"p-3 bg-white dark:bg-gray-800 min-w-[180px] overflow-auto shadow-md rounded-lg flex flex-col items-start relative",children:(0,f.jsxs)("ul",{className:"w-full flex flex-col gap-4",children:[(0,f.jsxs)("li",{className:"relative cursor-pointer flex items-center gap-4 text-gray-500 dark:text-gray-300 font-semibold text-sm",onClick:s.bind(null,void 0),children:["Any Type",!e&&(0,f.jsx)(g.A,{className:"absolute right-0 top-1/2 -translate-y-1/2"})]}),Object.entries(G).map((([t,{title:l,icon:a}])=>(0,f.jsxs)("li",{className:"relative cursor-pointer flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-semibold",onClick:s.bind(null,t),children:[a," ",l,e==t&&(0,f.jsx)(g.A,{className:"absolute right-0 top-1/2 -translate-y-1/2"})]},l)))]})})};var T=s(1807);const M=e=>(0,a.A)("cursor-pointer flex items-center gap-1 md:gap-2 shadow rounded-lg p-1 md:py-2 md:px-3 text-xs text-gray-900 dark:text-gray-200",e?"text-white bg-primary-400":"border border-solid border-gray-300 dark:border-gray-400 ");function z({filter:e,updateFilter:t}){const{t:s}=(0,d.Bd)("file"),[a,r]=(0,l.useState)({channel:!1,date:!1,from:!1,type:!1}),i=e=>{r((t=>({...t,...e})))},c=e=>{t(e);let s=Object.keys(e)[0];i({[s]:!1})},o=(0,n.GV)((e=>e.users.byId),T.bN),p=(0,n.GV)((e=>e.channels.byId),T.bN),{from:h,channel:g,type:b,date:j}=e,{channel:w,date:k,type:C,from:F}=a;return(0,f.jsxs)("div",{className:"flex items-center gap-2",children:[(0,f.jsx)(m.Ay,{interactive:!0,onClickOutside:i.bind(null,{from:!1}),visible:F,placement:"bottom-start",content:(0,f.jsx)(A,{select:e.from,updateFilter:c}),children:(0,f.jsxs)("div",{className:M(h),onClick:i.bind(null,{from:!0}),children:[h&&(0,f.jsx)(x.A,{width:16,height:16,className:"rounded-full w-4 h-4",name:o[h].name,src:o[h].avatar}),(0,f.jsxs)("span",{className:"txt",children:[s("from")," ",h&&o[h].name]}),(0,f.jsx)(u.A,{className:"dark:stroke-gray-100"})]})}),(0,f.jsx)(m.Ay,{interactive:!0,onClickOutside:i.bind(null,{channel:!1}),visible:w,placement:"bottom-start",content:(0,f.jsx)(y,{select:e.channel,updateFilter:c}),children:(0,f.jsxs)("div",{className:M(g),onClick:i.bind(null,{channel:!0}),children:[(0,f.jsx)("span",{className:"txt",children:g?`In ${p[g].name}`:s("channel")}),(0,f.jsx)(u.A,{className:"dark:stroke-gray-100"})]})}),(0,f.jsx)(m.Ay,{interactive:!0,onClickOutside:i.bind(null,{type:!1}),visible:C,placement:"bottom-start",content:(0,f.jsx)(L,{select:e.type,updateFilter:c}),children:(0,f.jsxs)("div",{className:M(b),onClick:i.bind(null,{type:!0}),children:[(0,f.jsx)("span",{className:"txt",children:b?G[b].title:s("type")}),(0,f.jsx)(u.A,{className:"dark:stroke-gray-100"})]})}),(0,f.jsx)(m.Ay,{interactive:!0,onClickOutside:i.bind(null,{date:!1}),visible:k,placement:"bottom-start",content:(0,f.jsx)(N,{select:e.date,updateFilter:c}),children:(0,f.jsxs)("div",{className:M(j),onClick:i.bind(null,{date:!0}),children:[(0,f.jsx)("span",{className:"txt",children:j?v[j].title:s("date")}),(0,f.jsx)(u.A,{className:"dark:stroke-gray-100"})]})})]})}var D=s(64599),B=s(72192),E=s(12696);const R=e=>(0,a.A)("cursor-pointer p-2 box-border flex-center",e&&"border border-solid border-primary-400 shadow rounded-lg");function P({view:e="item"}){const t=(0,T.wA)(),s=s=>{const{view:l}=s.currentTarget.dataset;l!=e&&t((0,D.PU)("item"==e?"grid":"item"))},l="grid"==e;return(0,f.jsxs)("ul",{className:"hidden md:flex border border-solid dark:border-gray-400 shadow rounded-lg box-border",children:[(0,f.jsx)("li",{className:R(!l),"data-view":"item",onClick:s,children:(0,f.jsx)(E.A,{className:(l?"":"fill-primary-400")+" dark:fill-gray-400"})}),(0,f.jsx)("li",{className:R(l),"data-view":"grid",onClick:s,children:(0,f.jsx)(B.A,{className:(l?"fill-primary-400":"")+" dark:fill-gray-400"})})]})}let U;const $=function(){const{isExpired:e}=(0,o.A)(),t=(0,l.useRef)(),[s,r]=(0,l.useState)({}),d=(0,n.GV)((e=>e.ui.fileListView.view),T.bN),m=(0,n.GV)((e=>e.message),T.bN),x=(0,n.GV)((e=>e.fileMessage),T.bN),u=(0,n.GV)((e=>e.channelMessage),T.bN);return(0,l.useEffect)((()=>{if("grid"==d&&t){const e=t.current;if(!e)return;const s=e.getBoundingClientRect().width-32,l=Math.floor(s/368),a=s%368,r=Math.max(Math.floor(a/(l-1)),8);U=new(i())(e,{fitWidth:!0,gutter:r,itemSelector:".grid-box"})}else U&&U.destroy()}),[d,s]),(0,f.jsxs)("div",{className:"h-screen md:overflow-y-scroll flex flex-col items-start my-2 mr-6 rounded-2xl bg-white dark:bg-gray-700",children:[(0,f.jsx)(j,{value:s.name,updateSearchValue:e=>{r((t=>({...t,name:e})))}}),(0,f.jsxs)("div",{className:"flex justify-between w-full px-4 py-5",children:[(0,f.jsx)(z,{filter:s,updateFilter:e=>{r((t=>({...t,...e})))}}),(0,f.jsx)(P,{view:d})]}),(0,f.jsx)("div",{className:(0,a.A)("w-full h-full px-4 overflow-scroll flex","item"==d&&"gap-2 flex-col","grid"==d&&"flex-wrap"),ref:t,children:x.map((t=>{const l=m[t];if(!l)return null;const a=((e,t,s)=>{let l=!0;const{mid:a,from_uid:r,properties:i}=e,{name:n,from:c,channel:o}=t,d=i?i.name:"";if(c&&c!=r&&(l=!1),o&&-1==s[o].findIndex((e=>e==a))&&(l=!1),n){let e=["",...n.toLowerCase(),""].join(".*");new RegExp(e).test(d)||(l=!1)}return l})(l,s,u);if(!a)return null;const{mid:r,thumbnail:i,content:n,created_at:o,from_uid:x,properties:p}=l,{name:h,content_type:g,size:b}=null!==p&&void 0!==p?p:{};return e(i||n)?null:(0,f.jsx)("div",{className:"grid-box mb-2",children:(0,f.jsx)(c.A,{preview:"grid"==d,flex:"item"==d,file_type:g,content:i||n,created_at:o,from_uid:x,size:b,name:h},r)},r)}))})]})}}}]);