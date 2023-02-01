"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[286],{66286:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var t=a(70537),i=a(27418),n=a(80308),c=a(64813),r=a(17237),o=a(69885),l=a(15924),d=a(80683);function g(){const e=(0,l.s0)();return(0,d.jsx)(o.Z,{className:"w-full mb-4",onClick:()=>{e("/send_magic_link")},children:"Sign in with Magic Link"})}var u=a(14566);function m(e){let{smtp:s=!1}=e;const{t:a}=(0,u.$G)("auth"),t=(0,l.s0)();return(0,d.jsxs)("div",{className:"flex gap-1 mt-7 text-sm text-[#667085] justify-center",children:[(0,d.jsx)("span",{children:a("login.no_account")}),(0,d.jsx)("a",{className:"text-[#22d3ee] cursor-pointer",onClick:()=>{t(s?"/send_magic_link":"/register")},children:a("sign_up")})]})}var h=a(15312),p=a(65809),f=a(25089),x=a(44917);function j(){const{t:e}=(0,u.$G)("auth"),{t:s}=(0,u.$G)(),{data:a}=(0,p.n8)(),[l,{isSuccess:j,isLoading:_,error:k}]=(0,h.YA)(),{clientId:w}=(0,f.Z)(),{data:b,isSuccess:v}=(0,p.ww)(),[N,y]=(0,t.useState)({email:"",password:""});(0,t.useEffect)((()=>{const e=new URLSearchParams(location.search),s=e.get("code"),a=e.get("state"),t=e.get("magic_token"),i=e.get("exists");if(s&&a&&l({code:s,state:a,type:"oidc"}),t&&"undefined"!==typeof i){"true"==i?l({magic_token:t,type:"magiclink"}):location.href=`?magic_token=${t}#/register/set_name/login`}}),[]),(0,t.useEffect)((()=>{if(k)switch(k.status){case 401:case 404:i.ZP.error("Username or Password incorrect");break;case 410:i.ZP.error("No associated account found, please contact user admin for an invitation link to join.");break;case"PARSING_ERROR":break;default:i.ZP.error("Something Error")}else;}),[k]),(0,t.useEffect)((()=>{j&&i.ZP.success(s("tip.login"))}),[j]);const Z=e=>{const{type:s}=e.target.dataset,{value:a}=e.target;s&&y((e=>(e[s]=a,{...e})))},{email:S,password:P}=N;if(!v)return null;const{magic_link:C,github:E,google:R,metamask:$,oidc:G=[],who_can_sign_up:L}=b,q=a&&C,A=q||R&&w||$||G.length>0||E;return(0,d.jsx)(c.Z,{children:(0,d.jsxs)("div",{className:"form",children:[(0,d.jsxs)("div",{className:"tips",children:[(0,d.jsx)("img",{src:`${n.ZP}/resource/organization/logo`,alt:"logo",className:"logo"}),(0,d.jsx)("h2",{className:"title",children:e("login.title")}),(0,d.jsx)("span",{className:"desc",children:e("login.desc")})]}),(0,d.jsxs)("form",{onSubmit:e=>{e.preventDefault(),l({...N,type:"password"})},children:[(0,d.jsx)(r.Z,{className:"large",name:"email",value:S,type:"email",required:!0,placeholder:e("placeholder_email"),"data-type":"email",onChange:Z}),(0,d.jsx)(r.Z,{className:"large",type:"password",value:P,name:"password",required:!0,"data-type":"password",onChange:Z,placeholder:e("placeholder_pwd")}),(0,d.jsx)(o.Z,{type:"submit",disabled:_,children:_?"Signing":e("sign_in")})]}),A&&(0,d.jsx)("hr",{className:"or"}),(0,d.jsxs)("div",{className:"btns",children:[q&&(0,d.jsx)(g,{}),(0,d.jsx)(x.Z,{})]}),"EveryOne"===L&&(0,d.jsx)(m,{smtp:a})]})})}}}]);