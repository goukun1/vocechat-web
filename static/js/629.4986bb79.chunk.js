"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[629],{79884:(e,n,l)=>{l.d(n,{Z:()=>c});var s,t=l(70537);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e},a.apply(this,arguments)}const i=(e,n)=>{let{title:l,titleId:i,...c}=e;return t.createElement("svg",a({width:20,height:20,viewBox:"0 0 20 20",fill:"#616161",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},c),l?t.createElement("title",{id:i},l):null,s||(s=t.createElement("path",{d:"M6.48667 11.6667L6.83667 8.33333H3.325V6.66667H7L7.43333 2.5H9.10833L8.66667 6.66667H11.9833L12.4167 2.5H14.0917L13.65 6.66667H16.625V8.33333H13.4667L13.1167 11.6667H16.6167V13.3333H12.9333L12.4917 17.5H10.8083L11.2417 13.3333H7.91667L7.475 17.5H5.8L6.23333 13.3333H3.25V11.6667H6.4H6.48667ZM8.1625 11.6667H11.4875L11.8375 8.33333H8.5125L8.1625 11.6667Z"})))},c=(0,t.forwardRef)(i)},13706:(e,n,l)=>{l.d(n,{Z:()=>h});var s=l(70537),t=l(27418),a=l(14566),i=l(52334),c=l(6144),r=l(66160),d=l(78806),o=l(4472),u=l(27459),v=l(80683);const h=e=>{var n,l;let{id:h,type:m="channel"}=e;const{setting:x,channel:g,loginUser:p}=(0,r.CG)((e=>({setting:"channel"==m?e.footprint.autoDeleteMsgChannels.find((e=>e.gid==h)):e.footprint.autoDeleteMsgUsers.find((e=>e.uid==h)),loginUser:e.authData.user,channel:"channel"==m?e.channels.byId[h]:null}))),[f,{isSuccess:j}]=(0,i.ar)(),[b,{isSuccess:Z}]=(0,c.cF)(),[w,_]=(0,s.useState)(null!==(n=null===x||void 0===x?void 0:x.expires_in)&&void 0!==n?n:0),{t:N}=(0,a.$G)("setting",{keyPrefix:"auto_delete_msg"}),{t:y}=(0,a.$G)(),C=[{title:N("off"),value:0},{title:N("5_min"),value:300},{title:N("10_min"),value:600},{title:N("1_hour"),value:3600},{title:N("1_day"),value:86400},{title:N("1_week"),value:604800}];(0,s.useEffect)((()=>{j&&t.Am.success(y("tip.update"))}),[j]),(0,s.useEffect)((()=>{Z&&t.Am.success("Cleared!")}),[Z]);const S=null!==(l=null===x||void 0===x?void 0:x.expires_in)&&void 0!==l?l:0,L="channel"==m&&((null===g||void 0===g?void 0:g.owner)==(null===p||void 0===p?void 0:p.uid)||(null===p||void 0===p?void 0:p.is_admin));return(0,v.jsxs)("section",{className:"max-w-[512px] h-full relative",children:[(0,v.jsxs)("div",{className:"text-sm",children:[(0,v.jsx)("h2",{className:"dark:text-white",children:N("title")}),(0,v.jsx)("p",{className:"text-gray-400 text-xs",children:N("desc")})]}),(0,v.jsx)("div",{className:"mt-4",children:(0,v.jsx)(u.Z,{options:C.map((e=>{let{title:n}=e;return n})),values:C.map((e=>{let{value:n}=e;return n})),value:w||0,onChange:e=>{_(e)}})}),S!==w&&(0,v.jsx)(d.Z,{saveHandler:()=>{f("dm"==m?{users:[{uid:h,expires_in:w}]}:{groups:[{gid:h,expires_in:w}]})},resetHandler:()=>{var e;_(null!==(e=null===x||void 0===x?void 0:x.expires_in)&&void 0!==e?e:0)}}),L&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"text-sm mt-8",children:[(0,v.jsx)("h2",{className:"dark:text-white",children:N("clear_title")}),(0,v.jsx)("p",{className:"text-gray-400 text-xs",children:N("clear_desc")})]}),(0,v.jsx)("div",{className:"mt-4",children:(0,v.jsx)(o.Z,{className:"danger",onClick:()=>{confirm("are you sure?")&&b(h)},children:N("clear")})})]})]})}},77493:(e,n,l)=>{l.d(n,{Z:()=>v});var s=l(70537),t=l(27418),a=l(14566),i=l(15924),c=l(6144),r=l(97601),d=l(4472),o=l(70254),u=l(80683);const v=e=>{let{id:n,closeModal:l}=e;const{t:v}=(0,a.$G)("setting"),{t:h}=(0,a.$G)(),m=(0,i.s0)(),[x,{isLoading:g,isSuccess:p}]=(0,c.kE)();return(0,s.useEffect)((()=>{p&&(t.ZP.success(h("tip.delete")),l(),m("/chat"))}),[p]),n?(0,u.jsx)(r.Z,{id:"modal-modal",children:(0,u.jsx)(o.Z,{compact:!0,title:v("channel.delete"),description:v("channel.delete_desc"),buttons:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{onClick:l.bind(null,void 0),className:"cancel",children:h("action.cancel")}),(0,u.jsx)(d.Z,{onClick:()=>{x(n)},className:"danger",children:g?"Deleting":h("action.remove")})]})})}):null}},24629:(e,n,l)=>{l.r(n),l.d(n,{default:()=>O});var s=l(70537),t=l(14566),a=l(15924),i=l(64084),c=l(66160),r=l(27418),d=l(6144);function o(e){const{channel:n,loginUid:l}=(0,c.CG)((n=>{var l;return{channel:n.channels.byId[e],loginUid:null===(l=n.authData.user)||void 0===l?void 0:l.uid}})),[s,{isLoading:t,isSuccess:a}]=(0,d.tW)(),[i,{isLoading:r,isSuccess:o}]=(0,d.VJ)(),u=l==(null===n||void 0===n?void 0:n.owner);return{otherMembers:(null===n||void 0===n?void 0:n.members.filter((e=>e!=l)))||[],transferOwner:n=>{n&&s({id:e,owner:n})},leaveChannel:()=>{e&&i(e)},leaving:r,leaveSuccess:o,isOwner:u,transferring:t,transferSuccess:a}}var u=l(97601),v=l(4472),h=l(70254),m=l(80683);const x=e=>{let{id:n,closeModal:l,handleNextStep:i}=e;const{t:c}=(0,t.$G)("setting"),d=(0,a.s0)(),{isOwner:x,leaving:g,leaveChannel:p,leaveSuccess:f}=o(n);return(0,s.useEffect)((()=>{f&&(r.ZP.success("Leave channel successfully!"),l(),d("/chat"))}),[f]),n?(0,m.jsx)(u.Z,{id:"modal-modal",children:(0,m.jsx)(h.Z,{compact:!0,title:c("channel.leave"),description:c(x?"channel.transfer_desc":"channel.leave_desc"),buttons:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v.Z,{onClick:l.bind(null,void 0),className:"cancel",children:c("action.cancel",{ns:"common"})}),x?(0,m.jsx)(v.Z,{onClick:i,className:"main",children:"Next"}):(0,m.jsx)(v.Z,{onClick:p,className:"danger",children:g?"Leaving":"Leave"})]})})}):null};var g=l(57425),p=l(65487);const f=e=>{let{id:n,closeModal:l,withLeave:i=!0}=e;const{t:c}=(0,t.$G)(),{transferOwner:d,otherMembers:x,leaving:f,leaveChannel:j,leaveSuccess:b,transferSuccess:Z,transferring:w}=o(n),[_,N]=(0,s.useState)(null),y=(0,a.s0)(),C=e=>{N(e)};if((0,s.useEffect)((()=>{Z&&b&&(r.ZP.success("Leave channel successfully!"),l(),y("/chat"))}),[b,Z,i]),!n)return null;const S=f||w;return(0,m.jsx)(u.Z,{id:"modal-modal",children:(0,m.jsx)(h.Z,{compact:!0,title:"Transfer Ownership",description:"This cannot be undone.",buttons:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v.Z,{onClick:l.bind(null,void 0),className:"cancel",children:c("action.cancel")}),(0,m.jsx)(v.Z,{disabled:!_,onClick:async()=>{_&&(await d(_),i&&await j())},className:"danger",children:S?"Assigning":"Assign and Leave"})]}),children:(0,m.jsx)("ul",{className:"flex flex-col max-h-[260px] py-4 overflow-y-scroll",children:x.map((e=>(0,m.jsx)("li",{className:(0,g.Z)("cursor-pointer flex items-center px-2 md:hover:bg-gray-500/10",_==e?"bg-gray-500/10":""),onClick:C.bind(null,e),children:(0,m.jsx)(p.Z,{uid:e,interactive:!1})},e)))})})})},j=e=>{let{id:n,isOwner:l=!1,closeModal:t}=e;const[a,i]=(0,s.useState)(l);return a?(0,m.jsx)(f,{id:n,closeModal:t}):(0,m.jsx)(x,{id:n,closeModal:t,handleNextStep:()=>{i(!0)}})};var b=l(37954),Z=l(77493),w=l(85225),_=l(13706),N=l(87808),y=l(78806),C=l(99487),S=l(54443),L=l(27459),k=l(96825),H=l(79884);function G(e){let{id:n=0}=e;const{t:l}=(0,t.$G)("setting",{keyPrefix:"channel"}),{t:a}=(0,t.$G)(),{loginUser:i,channel:o}=(0,c.CG)((e=>({loginUser:e.authData.user,channel:e.channels.byId[n]}))),{data:u,refetch:v}=(0,d.aw)(n),[h,x]=(0,s.useState)(!1),[g,p]=(0,s.useState)(),[f]=(0,d.kG)(),[j,{isSuccess:b}]=(0,d.tW)(),[Z,{isSuccess:w}]=(0,d.Cl)(),_=e=>{const n=e.target.value,{type:l=""}=e.target.dataset;p((e=>e?{...e,[l]:n}:e))};if((0,s.useEffect)((()=>{u&&p(u)}),[u]),(0,s.useEffect)((()=>{if(u&&g){const{name:e,description:n}=g,{name:l,description:s}=u;x(l!==e||s!==n)}}),[u,g]),(0,s.useEffect)((()=>{b&&(r.ZP.success(a("tip.update")),v())}),[b]),(0,s.useEffect)((()=>{w&&r.ZP.success(a("tip.update"))}),[w]),!g||!n||!o)return null;const{name:G,description:M}=g,E=!(null!==i&&void 0!==i&&i.is_admin)&&(null===o||void 0===o?void 0:o.owner)!=(null===i||void 0===i?void 0:i.uid),O="w-full flex flex-col items-start gap-2 relative";return(0,m.jsxs)("div",{className:"relative w-[512px] flex flex-col gap-6 h-full",children:[(0,m.jsx)(N.Z,{type:"channel",url:null===o||void 0===o?void 0:o.icon,name:G,uploadImage:e=>{f({gid:n,image:e})}}),(0,m.jsxs)("div",{className:"flex flex-col gap-6 items-start",children:[(0,m.jsxs)("div",{className:O,children:[(0,m.jsx)(S.Z,{htmlFor:"name",children:l("name")}),(0,m.jsx)(C.Z,{disabled:E,className:"!pl-8","data-type":"name",onChange:_,value:G,name:"name",id:"name",placeholder:l("name")}),(0,m.jsx)(H.Z,{className:"absolute bottom-2.5 left-2 dark:fill-gray-300"})]}),(0,m.jsxs)("div",{className:O,children:[(0,m.jsx)(S.Z,{htmlFor:"desc",children:l("topic")}),(0,m.jsx)(k.Z,{disabled:E,"data-type":"description",onChange:_,value:null!==M&&void 0!==M?M:"",rows:4,name:"name",id:"name",placeholder:l("topic_placeholder")})]}),!E&&i.is_admin&&(0,m.jsxs)("div",{className:O,children:[(0,m.jsx)(S.Z,{htmlFor:"desc",children:l("visibility")}),(0,m.jsx)(L.Z,{options:[l("public"),l("private")],values:["true","false"],value:String(o.is_public),onChange:e=>{Z({is_public:"true"===e.toLowerCase(),id:n})}})]})]}),h&&(0,m.jsx)(y.Z,{saveHandler:()=>{if(!g)return;const{name:e,description:l}=g;j({id:n,name:e,description:l})},resetHandler:()=>{p(u)}})]})}const M=e=>{const{t:n}=(0,t.$G)("setting");return[{title:n("nav.general"),items:[{name:"overview",title:n("nav.overview"),component:(0,m.jsx)(G,{id:e})},{name:"auto_delete_msg",title:n("nav.auto_delete_msg"),component:(0,m.jsx)(_.Z,{id:e})},{name:"members",title:n("nav.members"),component:(0,m.jsx)(w.Z,{cid:e})}]}]};let E="";function O(){const{t:e}=(0,t.$G)("setting"),{cid:n=0,nav:l}=(0,a.UO)(),{loginUser:r,channel:d}=(0,c.CG)((e=>({loginUser:e.authData.user,channel:n?e.channels.byId[+n]:void 0}))),o=(0,a.s0)(),[u]=(0,i.lr)(),v=M(+n),h=v.map((e=>{let{items:n}=e;return n})).flat();E=E||(u.get("f")||"/");const[x,g]=(0,s.useState)(!1),[p,f]=(0,s.useState)(!1),w=()=>{g((e=>!e))},_=()=>{f((e=>!e))};if(!n)return null;const N=h.find((e=>e.name==l)),y=(null===r||void 0===r?void 0:r.is_admin)||(null===d||void 0===d?void 0:d.owner)==(null===r||void 0===r?void 0:r.uid),C=!(null!==d&&void 0!==d&&d.is_public);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b.Z,{pathPrefix:`/setting/channel/${n}`,nav:N,closeModal:()=>{o(E),E=""},title:"Channel Settings",navs:v,dangers:[C&&{title:e("channel.leave"),handler:_},y&&{title:e("channel.delete"),handler:w}],children:l?null===N||void 0===N?void 0:N.component:null}),x&&(0,m.jsx)(Z.Z,{closeModal:w,id:+n}),p&&(0,m.jsx)(j,{closeModal:_,id:+n})]})}}}]);