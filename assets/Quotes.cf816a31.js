import{_ as t,a as n,L as d,r as m,j as o,b as r,e as g,F as h}from"./vendor.1491be31.js";import{m as c,a as f,T as _,C as v,S as l}from"./index.ecf8f984.js";const $=({textAlign:e="left",data:s})=>{const[a,p]=m.exports.useState(!1),i=e==="left"?"right":"left";return o(u,{$_css:c.vertical,children:r(k,{children:[!a&&o(g,{offset:500,once:!0,children:o(b,{onLoad:()=>p(!0),src:s.image})}),a&&r(h,{children:[o(x,{"data-aos":`fade-${e}`,$_css2:s.image}),o(w,{"data-aos":`fade-slide-${i}`,$_css3:e,$_css4:i,$_css5:c.vertical,$_css6:i,children:r(y,{$_css7:e==="right"&&"row-reverse",$_css8:`padding-${i}`,children:[o(S,{to:`/${s.slug}`,$_css9:`margin-${e}`,$_css10:e==="right"?"-":"",children:e==="right"?"\u276F":"\u276E"}),o(j,{$_css11:e,$_css12:c.up("lg"),children:s.quote})]})})]})]})})};var u=t("div").withConfig({componentId:"sc-ckxjpo-0"})(["position:relative;padding-top:min(calc(100% / (16 / 9)),calc(100vh - 6rem));","{padding-top:min(100%,calc(100vh - 6rem));}"],e=>e.$_css),k=t("div").withConfig({componentId:"sc-ckxjpo-1"})(["position:absolute;top:0;bottom:0;width:100%;"]),b=t("img").withConfig({componentId:"sc-ckxjpo-2"})(["display:none;"]),x=t("div").withConfig({componentId:"sc-ckxjpo-3"})(["position:absolute;top:0;bottom:0;width:100%;background-image:url(",");background-position:center;background-repeat:no-repeat;background-size:cover;"],e=>e.$_css2),w=t("div").withConfig({componentId:"sc-ckxjpo-4"})(["position:absolute;backdrop-filter:blur(2px);background:",";max-height:80%;overflow:hidden;bottom:10%;",":0;",":25%;","{",":15%;}"],({theme:e})=>n(e.palette.dark[2]).alpha(.3).hex(),e=>e.$_css3,e=>e.$_css4,e=>e.$_css5,e=>e.$_css6),y=t("div").withConfig({componentId:"sc-ckxjpo-5"})(["display:flex;flex-direction:",";gap:1rem;",":1.5rem;"],e=>e.$_css7,e=>e.$_css8),S=t(d).withConfig({componentId:"sc-ckxjpo-6"})(["padding:1rem;",":-0.5rem;display:grid;place-items:center;background:",";font-size:1.5rem;color:",";:hover{color:",";}&,+ p{transition:transform 0.3s ease,color 0.1s;}:hover,:hover + p{transform:translateX( ","0.5rem );}"],e=>e.$_css9,({theme:e})=>n(e.palette.dark[2]).alpha(.1).hex(),({theme:e})=>e.palette.light[1],({theme:e})=>e.palette.light[2],e=>e.$_css10),j=t("p").withConfig({componentId:"sc-ckxjpo-7"})(["color:",";font-weight:600;text-align:",";font-size:max(2vw,1rem);padding-top:0.5rem;padding-bottom:0.5rem;","{font-size:1.5rem;}"],({theme:e})=>e.palette.light[1],e=>e.$_css11,e=>e.$_css12);const D=()=>{const e=f.filter(s=>s.tags.some(a=>a===_.Quote));return r(v,{children:[o(l,{gap:"2rem",children:e.map((s,a)=>o($,{data:s,textAlign:a%2==0?"right":"left"},s.slug))}),o(C,{children:o("div",{"data-aos":"fade-right","data-aos-offset":0,children:o(I,{to:"/blog#top",children:"Go to Blog \u276F"})})})]})};var C=t(l).withConfig({componentId:"sc-1s7tipf-0"})(["padding:4rem 0 4rem;align-items:flex-end;"]),I=t(d).withConfig({componentId:"sc-1s7tipf-1"})(["margin:0 2rem;font-size:1.25rem;"]);export{D as default};