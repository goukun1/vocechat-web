"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[864],{18697:(e,t,i)=>{i.d(t,{Z:()=>o});var l,s,n=i(70537);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},a.apply(this,arguments)}const r=(e,t)=>{let{title:i,titleId:r,...o}=e;return n.createElement("svg",a({width:16,height:12,viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},o),i?n.createElement("title",{id:r},i):null,l||(l=n.createElement("g",{clipPath:"url(#clip0_9046_23916)"},n.createElement("path",{d:"M4.93942 9.69781L1.62578 6.38648C1.25336 6.01431 0.651746 6.01431 0.27932 6.38648C-0.0931066 6.75865 -0.0931066 7.35984 0.27932 7.73201L4.27096 11.7209C4.64339 12.093 5.245 12.093 5.61743 11.7209L15.7207 1.62465C16.0931 1.25248 16.0931 0.651292 15.7207 0.279125C15.3483 -0.0930417 14.7466 -0.0930417 14.3742 0.279125L4.93942 9.69781Z",fill:"#78787C"}))),s||(s=n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_9046_23916"},n.createElement("rect",{width:16,height:12,fill:"white"})))))},o=(0,n.forwardRef)(r)},95727:(e,t,i)=>{i.d(t,{Z:()=>d});var l=i(70537),s=i(64631);const n=i.p+"static/media/upload.image.9f8c7fc90042d2ff4eb7.svg";var a=i(14566),r=i(57425),o=i(80683);const d=e=>{let{size:t=96,uid:i,className:d="",url:c="",name:p="",type:x="user",uploadImage:m,disabled:h=!1}=e;const{t:f}=(0,a.$G)(),[u,g]=(0,l.useState)(!1);return(0,o.jsxs)("div",{style:{width:`${t}px`,height:`${t}px`},className:(0,r.Z)(d,"relative group"),children:[(0,o.jsxs)("div",{className:"group overflow-hidden relative w-full h-full rounded-full bg-gray-50",children:[(0,o.jsx)(s.Z,{width:t,height:t,type:x,src:c,name:p,className:`${d} object-cover w-full h-full`}),!h&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"flex-center flex-col whitespace-nowrap hidden group-hover:flex p-1 absolute top-0 left-0 right-0 bottom-0 bg-black/50 text-white font-bold text-xs",children:f(u?"status.uploading":"action.change_avatar")}),(0,o.jsx)("input",{className:"opacity-0 absolute top-0 left-0 right-0 bottom-0 block cursor-pointer",multiple:!1,onChange:async e=>{if(u)return;if(!e.target.files)return;const[t]=Array.from(e.target.files);g(!0),i?await m({uid:i,file:t}):await m(t),g(!1)},type:"file",accept:"image/*",name:"avatar",id:"avatar"})]})]}),!h&&(0,o.jsx)("img",{src:n,alt:"icon",className:"hidden w-7 h-7 absolute top-0 right-0 group-hover:block"})]})}},93826:(e,t,i)=>{i.d(t,{Z:()=>$});var l=i(70537),s=i(7829),n=i(69195),a=i(27418),r=i(52334),o=i(33941);const d=i(57889).ZP.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .intro {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    .title {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #374151;
    }
    .desc {
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
    }
  }
  .members {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 512px;
    margin-bottom: 176px;
    .member {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      border-radius: var(--br);
      &:hover {
        background: #f9fafb;
      }
      .left {
        display: flex;
        gap: 8px;
        .info {
          display: flex;
          flex-direction: column;
          .name {
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;
            color: #52525b;
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .email {
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: #52525b;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        gap: 28px;
        .role {
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          text-align: right;
          color: #616161;
          display: flex;
          align-items: center;
          gap: 4px;
          > .icon {
            cursor: pointer;
          }
          /* override */
          .menu {
            min-width: 120px;
            .item .icon {
              width: 16px;
              height: 12px;
            }
          }
        }
        .opts {
          position: relative;
          width: 24px;
          height: 24px;
          .dots {
            cursor: pointer;
          }
          .menu {
            position: absolute;
          }
        }
      }
    }
  }
`;var c=i(63211),p=i(4884),x=i(17237),m=i(69885),h=i(14566),f=i(43764),u=i(80683);const g=()=>{const{t:e}=(0,h.$G)("chat"),{generating:t,link:i,linkCopied:l,copyLink:s,generateNewLink:n}=(0,p.Z)();return(0,u.jsxs)("div",{className:"flex flex-col items-start pb-8",children:[(0,u.jsx)("span",{className:"font-semibold text-sm mb-2 text-gray-500",children:e("share_invite_link")}),(0,u.jsxs)("div",{className:"w-[512px] mb-3 relative",children:[(0,u.jsx)(x.Z,{readOnly:!0,className:"large !pr-16",placeholder:"Generating",value:i}),(0,u.jsx)(m.Z,{onClick:s,className:"ghost small border_less absolute right-1 top-1/2 -translate-y-1/2",children:l?"Copied":e("action.copy",{ns:"common"})})]}),(0,u.jsx)("span",{className:"text-xs text-gray-600",children:e("invite_link_expire")}),(0,u.jsx)("div",{className:"w-44 h-44 my-2",children:(0,u.jsx)(f.Z,{link:i})}),(0,u.jsx)(m.Z,{className:"ghost",disabled:t,onClick:()=>{n()},children:t?"Generating":e("generate_new_link")})]})};var b,v,w=i(80169),j=i(87826);function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},N.apply(this,arguments)}const y=(e,t)=>{let{title:i,titleId:s,...n}=e;return l.createElement("svg",N({width:6,height:6,viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},n),i?l.createElement("title",{id:s},i):null,b||(b=l.createElement("rect",{opacity:.01,width:6,height:6,fill:"#D8D8D8"})),v||(v=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.62506 1.64911C5.41795 1.4503 5.08216 1.45029 4.87506 1.64911L3.00003 3.44911L1.12506 1.64916C0.917951 1.45034 0.582164 1.45034 0.375057 1.64916C0.16795 1.84798 0.16795 2.17033 0.375057 2.36915L2.62506 4.52912C2.83217 4.72794 3.16795 4.72794 3.37506 4.52912C3.37665 4.5276 3.37822 4.52608 3.37977 4.52454L5.62506 2.36911C5.83216 2.17029 5.83216 1.84793 5.62506 1.64911Z",fill:"black",fillOpacity:.5})))},k=(0,l.forwardRef)(y);var C=i(18697),Z=i(50911),_=i(66160);const $=e=>{let{cid:t}=e;const{t:i}=(0,h.$G)("member"),{t:p}=(0,h.$G)(),{users:x,channels:m,loginUser:f}=(0,_.CG)((e=>({users:e.users,channels:e.channels,loginUser:e.authData.user}))),{copyEmail:b,removeFromChannel:v,removeUser:N}=(0,Z.Z)({cid:t}),[y,{isSuccess:$}]=(0,r.kD)();(0,l.useEffect)((()=>{$&&a.ZP.success(p("tip.update"))}),[$]);const E=e=>{let{ignore:t=!1,uid:i,isAdmin:l=!0}=e;(0,n.Bn)(),t||y({id:i,is_admin:l})},z=t?m.byId[t]:null,L=z?z.is_public?x.ids:z.members:x.ids;return(0,u.jsxs)(d,{children:[(null===f||void 0===f?void 0:f.is_admin)&&(0,u.jsx)(g,{}),(0,u.jsxs)("div",{className:"intro",children:[(0,u.jsx)("h4",{className:"title",children:i("manage_members")}),(0,u.jsx)("p",{className:"desc",children:i("manage_tip")})]}),(0,u.jsx)("ul",{className:"members",children:L.map((e=>{const t=x.byId[e];if(!t)return null;const{name:l,email:n,is_admin:a}=t,r=z&&z.owner==e,d=(null===f||void 0===f?void 0:f.is_admin)&&f.uid!==e&&1!==e,m=n||(null===f||void 0===f?void 0:f.is_admin),h=(null===f||void 0===f?void 0:f.is_admin)&&(null===f||void 0===f?void 0:f.uid)!=e&&1!==e,g=z&&z.owner==(null===f||void 0===f?void 0:f.uid)&&(null===f||void 0===f?void 0:f.uid)!=e;return(0,u.jsxs)("li",{className:"member",children:[(0,u.jsxs)("div",{className:"left",children:[(0,u.jsx)(o.Z,{compact:!0,uid:e,interactive:!1}),(0,u.jsxs)("div",{className:"info",children:[(0,u.jsxs)("span",{className:"name",children:[l," ",r&&(0,u.jsx)(j.Z,{})]}),(0,u.jsx)("span",{className:"email",children:n})]})]}),(0,u.jsxs)("div",{className:"right",children:[(0,u.jsxs)("span",{className:"role",children:[i(a?"admin":"user"),d&&(0,u.jsx)(s.ZP,{interactive:!0,placement:"bottom-end",trigger:"click",content:(0,u.jsxs)(c.Z,{className:"menu",children:[(0,u.jsxs)("li",{className:"item sb",onClick:E.bind(null,{ignore:a,uid:e,isAdmin:!0}),children:[i("admin"),a&&(0,u.jsx)(C.Z,{className:"icon"})]}),(0,u.jsxs)("li",{className:"item sb",onClick:E.bind(null,{ignore:!a,uid:e,isAdmin:!1}),children:[i("user"),!a&&(0,u.jsx)(C.Z,{className:"icon"})]})]}),children:(0,u.jsx)(k,{className:"icon"})})]}),m&&(0,u.jsx)(s.ZP,{interactive:!0,placement:"right-start",trigger:"click",content:(0,u.jsxs)(c.Z,{className:"menu",children:[n&&(0,u.jsx)("li",{className:"item",onClick:b.bind(null,n),children:p("action.copy_email")}),g&&(0,u.jsx)("li",{className:"item danger",onClick:v.bind(null,e),children:i("remove_from_channel")}),h&&(0,u.jsx)("li",{className:"item danger",onClick:N.bind(null,e),children:p("action.remove")})]}),children:(0,u.jsx)("div",{className:"opts",children:(0,u.jsx)("img",{className:"dots",src:w,alt:"dots icon"})})})]})]},e)}))})]})}},80874:(e,t,i)=>{i.d(t,{Z:()=>n});var l=i(70537),s=i(10336);const n=e=>{let{id:t="root-modal",mask:i=!0,children:n}=e;const[a,r]=(0,l.useState)(null);return(0,l.useEffect)((()=>{const e=document.getElementById(t);if(!e)return;i&&e.classList.add("mask");const l=document.createElement("div");return l.classList.add("wrapper"),e.appendChild(l),r(l),()=>{e.removeChild(l)}}),[t,i]),a?(0,s.createPortal)(n,a):null}},43764:(e,t,i)=>{i.d(t,{Z:()=>a});var l=i(36185),s=i(66160),n=i(80683);const a=e=>{let{link:t}=e;const i=(0,s.CG)((e=>e.server.logo));return(0,n.jsx)(l.Qd,{value:t,className:"rounded border border-solid border-gray-200 p-1 !w-full !h-full",size:512,bgColor:"#fff",fgColor:"#22ccee",level:"L",includeMargin:!1,imageSettings:{src:i,x:void 0,y:void 0,height:80,width:80,excavate:!0}})}},24563:(e,t,i)=>{i.d(t,{Z:()=>a});var l=i(14566),s=i(69885),n=i(80683);const a=e=>{let{saveHandler:t,resetHandler:i}=e;const{t:a}=(0,l.$G)("setting");return(0,n.jsxs)("div",{className:"w-full p-2 absolute bottom-16 left-0 flex items-center justify-between text-gray-500 border border-solid border-gray-200 shadow-md rounded-full",children:[(0,n.jsx)("span",{className:"p-2 text-sm",children:a("save_tip")}),(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(s.Z,{className:"small ghost !border-none !text-gray-500 !shadow-none",onClick:i,children:a("reset")}),(0,n.jsx)(s.Z,{className:"small !rounded-full",onClick:t,children:a("save_change")})]})]})}},7477:(e,t,i)=>{i.d(t,{Z:()=>d});var l=i(57889),s=i(15924),n=i(64084);const a=i.p+"static/media/arrow.left.92fbb139607631555459.svg";var r=i(80683);const o=l.ZP.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  > .left {
    max-height: 100vh;
    overflow: scroll;
    padding: 32px 16px;
    min-width: 212px;
    background-color: #f5f6f7;

    > .title {
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #1c1c1e;
      margin-bottom: 32px;
      padding-left: 24px;
      background-size: 16px;
      background: url(${a}) no-repeat left;
    }

    > .items {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 36px;

      &:before {
        padding-left: 12px;
        content: attr(data-title);
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        color: #6b7280;
        margin-bottom: 2px;
      }

      .item {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #44494f;
        border-radius: 4px;

        &:hover,
        &.curr {
          background: #e7e5e4;
        }

        > a {
          display: block;
          padding: 4px 12px;
        }
      }

      &.danger .item {
        cursor: pointer;
        padding: 4px 12px;
        color: #ef4444;

        &:hover {
          background: none;
        }
      }
    }
  }

  > .right {
    background-color: #fff;
    width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 32px;

    > .title {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #374151;
      margin-bottom: 32px;
    }
  }
`,d=e=>{let{closeModal:t,title:i="Settings",navs:l=[],dangers:a=[],nav:d,children:c}=e;const{pathname:p}=(0,s.TH)();return(0,r.jsxs)(o,{children:[(0,r.jsxs)("div",{className:"left",children:[(0,r.jsx)("h2",{onClick:t,className:"title",children:i}),l.map((e=>{let{title:t,items:i}=e;return(0,r.jsx)("ul",{"data-title":t,className:"items",children:i.map((e=>{let{name:t,title:i}=e;return(0,r.jsx)("li",{className:"item "+(t==(null===d||void 0===d?void 0:d.name)?"curr":""),children:(0,r.jsx)(n.OL,{to:`${p}?nav=${t}`,children:i})},t)}))},t)})),a.length?(0,r.jsx)("ul",{className:"items danger",children:a.map((e=>{if("boolean"===typeof e||!e)return null;const{title:t,handler:i}=e;return(0,r.jsx)("li",{onClick:i,className:"item",children:t},t)}))}):null]}),(0,r.jsxs)("div",{className:"right",children:[d&&(0,r.jsx)("h4",{className:"title",children:d.title}),c]})]})}},17237:(e,t,i)=>{i.d(t,{Z:()=>d});var l=i(70537),s=i(40182),n=i(57889),a=i(80683);const r=n.ZP.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);

  .prefix {
    padding: 8px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ca3af;
    background: #f3f4f6;
    border-right: 1px solid #e5e7eb;
  }

  .view {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`,o=n.ZP.input`
  width: 100%;
  background: #ffffff;

  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  padding: 8px;
  outline: none;

  &:not(.inner) {
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  }

  &.large {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    padding: 11px 8px;
  }

  &.none {
    outline: none;
    border: none;
    background: none;
    box-shadow: none;
  }

  &:disabled {
    color: #78787c;
    background-color: #f9fafb;
  }

  &::placeholder {
    color: #d1d5db;
  }

  &[type="password"] {
    padding-right: 30px;
  }
`,d=e=>{let{type:t="text",prefix:i="",className:n,...d}=e;const[c,p]=(0,l.useState)(t);return"password"==t?(0,a.jsxs)(r,{className:n,children:[(0,a.jsx)(o,{type:c,autoComplete:"password"==c?"current-password":"on",className:`inner ${n}`,...d}),(0,a.jsx)("div",{className:"view",onClick:()=>{p((e=>"password"==e?"text":"password"))},children:"password"==c?(0,a.jsx)(s.MBb,{color:"#78787c"}):(0,a.jsx)(s.Rbo,{color:"#78787c"})})]}):i?(0,a.jsxs)(r,{className:n,children:[(0,a.jsx)("span",{className:"prefix",children:i}),(0,a.jsx)(o,{className:`inner ${n}`,type:c,...d})]}):(0,a.jsx)(o,{type:c,className:n,...d})}},48540:(e,t,i)=>{i.d(t,{Z:()=>s});var l=i(80683);const s=e=>{let{children:t,className:i="",...s}=e;return(0,l.jsx)("label",{className:`text-gray-500 text-sm ${i}`,...s,children:t})}},40698:(e,t,i)=>{i.d(t,{Z:()=>n});var l=i(57425),s=i(80683);const n=e=>{let{compact:t=!1,title:i="",description:n="",buttons:a,children:r,className:o}=e;return(0,s.jsxs)("div",{className:(0,l.Z)("rounded-lg bg-white drop-shadow",t?"p-4 min-w-[406px] text-left":"p-8 min-w-[440px] text-center",o),children:[i&&(0,s.jsx)("h3",{className:"text-xl text-gray-600 mb-4 font-semibold",children:i}),n&&(0,s.jsx)("p",{className:"text-sm text-gray-400 mb-2",children:n}),r,a&&(0,s.jsx)("div",{className:"pt-4 w-full flex justify-end gap-4 items-center",children:a})]})}},15621:(e,t,i)=>{i.d(t,{Z:()=>d});var l=i(70537),s=i(57889),n=i(80683);const a=s.ZP.form`
  width: 100%;
  > .option {
    &:not(:last-child) {
      margin-bottom: 8px;
    }

    > input[type="radio"] {
      display: none;

      & + .box {
        background: #ffffff;
        border: 1px solid #d0d5dd;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        transition: all ease-in-out 250ms;

        & > label {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #667085;
          cursor: pointer;
          user-select: none;
          transition: all ease-in-out 250ms;

          &:before {
            content: "";
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 8px;
            background: #ffffff;
            box-shadow: inset 0 0 0 4px #ffffff;
            border: 1px solid #d0d5dd;
            margin: 14px 8px 14px 14px;
            transition: all ease-in-out 500ms;
          }
        }
      }

      &:checked + .box {
        background: #22ccee;
        border: 1px solid #d0d5dd;

        & > label {
          color: #ffffff;

          &:before {
            background: #ffffff;
            box-shadow: inset 0 0 0 4px #22ccee;
            border: 1px solid #ffffff;
          }
        }
      }
    }
  }
`,r="",o=[],d=e=>{let{options:t,values:i=o,value:s=r,defaultValue:d="",onChange:c}=e;const p=(0,l.useId)(),[x,m]=(0,l.useState)(d),h=s!==r?s:x;return(0,n.jsx)(a,{children:t.map(((e,t)=>(0,n.jsxs)("div",{className:"option",children:[(0,n.jsx)("input",{type:"radio",checked:(i!==o?i.indexOf(h):h)===t,onChange:()=>{const e=i===o?t:i[t];s===r&&m(e),c&&c(e)},id:`${p}-${t}`}),(0,n.jsx)("div",{className:"box",children:(0,n.jsx)("label",{htmlFor:`${p}-${t}`,children:e})})]},t)))})}},64884:(e,t,i)=>{i.d(t,{Z:()=>s});var l=i(80683);const s=e=>{let{className:t,...i}=e;return(0,l.jsx)("textarea",{className:`rounded text-sm p-2 bg-white text-gray-700 resize-none w-full shadow border border-solid border-gray-200 disabled:bg-[#f9fafb] disabled:text-gray-400 disabled:pointer-events-none placeholder:text-gray-400 ${t}`,...i})}},4884:(e,t,i)=>{i.d(t,{Z:()=>r});var l=i(70537),s=i(26209),n=i(65809),a=i(6144);function r(e){const[t,i]=(0,l.useState)(""),{data:r,isSuccess:o}=(0,n.n8)(),[d,{data:c,isLoading:p}]=(0,a.CU)(),{copied:x,copy:m}=(0,s.Z)({enableToast:!1});(0,l.useEffect)((()=>{d(e)}),[e]),(0,l.useEffect)((()=>{c&&o&&i(c)}),[c,o]);return{enableSMTP:r,generating:p,generateNewLink:e?d.bind(null,e):()=>{d()},link:t,linkCopied:x,copyLink:()=>{m(t)}}}},80169:(e,t,i)=>{e.exports=i.p+"static/media/more.d35b0228affb89f48593.svg"}}]);