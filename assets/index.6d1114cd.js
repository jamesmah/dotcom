var Z=Object.defineProperty,G=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var $=(e,o,a)=>o in e?Z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,y=(e,o)=>{for(var a in o||(o={}))Q.call(o,a)&&$(e,a,o[a]);if(D)for(var a of D(o))H.call(o,a)&&$(e,a,o[a]);return e},b=(e,o)=>G(e,W(o));import{_ as r,r as s,U as w,j as t,c as U,L as u,a as Y,u as P,b as c,F as p,d as I,e as J,A as j,q as v,R as z,S as K,f,W as X,g as ee,B as te,h as oe,i as ae}from"./vendor.522b45a9.js";const ie=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const m of n)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function a(n){const m={};return n.integrity&&(m.integrity=n.integrity),n.referrerpolicy&&(m.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?m.credentials="include":n.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function i(n){if(n.ep)return;n.ep=!0;const m=a(n);fetch(n.href,m)}};ie();const h=r.div.withConfig({componentId:"sc-12cpbj8-0"})(["display:flex !important;flex-direction:"," !important;gap:"," !important;"],({direction:e})=>e||"column",({gap:e})=>e),ne=e=>{const[o,a]=s.exports.useState(!!e);return[o,()=>a(!o)]},re=w(["to{transform:rotate(360deg);}"]),x=w(["from{opacity:0;}to{opacity:1;}"]),se=w(["from{opacity:0;transform:translateY(-16px);}to{opacity:1;transform:translateX(0);}"]),k=w(["from{opacity:0;transform:translateX(16px);}to{opacity:1;transform:translateX(0);}"]),E=e=>o=>{var i;const a=(i=o==null?void 0:o.theme)==null?void 0:i.breakpoints;return a?`@media (min-width:${typeof e=="number"?e:a[e]+.02}px)`:"&"},le=e=>o=>{var i;const a=(i=o==null?void 0:o.theme)==null?void 0:i.breakpoints;return a?`@media (max-width:${typeof e=="number"?e:a[e]}px)`:"&"},C=(e,o)=>a=>{var n;const i=(n=a==null?void 0:a.theme)==null?void 0:n.breakpoints;return i?`@media (min-width:${typeof e=="number"?e:i[e]+.02}px) and (max-width:${typeof o=="number"?o:i[o]}px)`:"&"},de=e=>o=>{var n;const a=(n=o==null?void 0:o.theme)==null?void 0:n.breakpoints;if(!a)return"&";const i=Object.keys(a);return i.indexOf(e)+1<i.length?C(e,i[i.indexOf(e)+1]):E(e)},ce=()=>"@media (min-aspect-ratio: 10000/10000)",me=()=>"@media (max-aspect-ratio: 9999/10000)",O={up:E,down:le,between:C,only:de,horizontal:ce,vertical:me},_=r.div.withConfig({componentId:"sc-1jpycsc-0"})(["width:100% !important;max-width:","px !important;margin-left:auto !important;margin-right:auto !important;padding-left:1rem !important;padding-right:1rem !important;","{padding-left:1.5rem !important;padding-right:1.5rem !important;}"],({theme:e,$width:o="lg"})=>e.breakpoints[o],O.up("sm"));const ge=({toggleIsActive:e,isActive:o})=>t("button",{className:U("hamburger",o&&"is-active"),onClick:e,type:"button",children:t("span",{className:"hamburger-box",children:t("span",{className:"hamburger-inner"})})}),pe=()=>{const[e,o]=ne(),a=P();return s.exports.useEffect(()=>{e&&window.scrollTo({top:0,behavior:"smooth"})},[e]),s.exports.useEffect(()=>{e&&o()},[a]),c(p,{children:[t(he,{children:t(ue,{$_css:e?"fixed":"absolute",children:c(fe,{children:[t(_e,{to:"/#top",children:"JM"}),t(ge,{isActive:e,toggleIsActive:o})]})})}),e&&t(we,{onClick:o,children:c(ye,{gap:"0.5rem",children:[t("div",{children:"Links"}),c(h,{as:"ul",className:"list-reset",children:[t("li",{children:t(S,{to:"/blog#top",children:"Blog"})}),t("li",{children:t(S,{to:"/about#top",children:"About"})}),t("li",{children:t(S,{to:"/credits#top",children:"Credits"})})]})]})})]})},S=r(u).withConfig({componentId:"sc-f90655-0"})(["font-size:1.5rem;display:block;padding:0.5rem;"]);var he=r("header").withConfig({componentId:"sc-f90655-1"})(["position:relative;height:5rem;"]),ue=r("div").withConfig({componentId:"sc-f90655-2"})(["position:",";z-index:1000;top:0;width:100%;"],e=>e.$_css),fe=r(_).withConfig({componentId:"sc-f90655-3"})(["display:flex;justify-content:space-between;align-items:center;height:5rem;animation:"," 1s ease;"],x),_e=r(u).withConfig({componentId:"sc-f90655-4"})(["padding:0.5rem;margin:-0.5rem;font-size:1.5rem;font-weight:600;color:",";"],({theme:e})=>e.palette.light[1]),we=r("nav").withConfig({componentId:"sc-f90655-5"})(["position:fixed;top:0;bottom:-20vh;padding-top:5rem;padding-bottom:20vh;width:100%;z-index:999;background:",";display:grid;place-items:center;animation:"," 0.3s ease;"],({theme:e})=>Y(e.palette.dark[1]).alpha(.97).hex(),se),ye=r(h).withConfig({componentId:"sc-f90655-6"})(["text-align:center;padding-bottom:4rem;"]),be="/assets/layout-background.11d43bb3.svg";const ve=({children:e})=>c(xe,{children:[t(pe,{}),t(ke,{children:e})]});var xe=r(h).withConfig({componentId:"sc-1jebfhe-0"})(['flex-grow:1;position:relative;::before{content:"";position:absolute;top:0;bottom:0;width:100%;background-image:url(',");background-repeat:no-repeat;background-position:top;pointer-events:none;}"],be),ke=r(h).withConfig({componentId:"sc-1jebfhe-1"})(["flex-grow:1;"]);const Se="modulepreload",A={},Te="/",d=function(o,a){return!a||a.length===0?o():Promise.all(a.map(i=>{if(i=`${Te}${i}`,i in A)return;A[i]=!0;const n=i.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${m}`))return;const g=document.createElement("link");if(g.rel=n?"stylesheet":Se,n||(g.as="script",g.crossOrigin=""),g.href=i,document.head.appendChild(g),n)return new Promise((B,N)=>{g.addEventListener("load",B),g.addEventListener("error",N)})})).then(()=>o())},De=r.div.withConfig({componentId:"sc-55qtz4-0"})(["margin:1rem 0 2rem;cursor:pointer;display:flex;align-items:center;color:",";:hover{color:",";}"],({theme:e})=>e.palette.light[2],({theme:e})=>e.palette.light[1]),$e=({width:e})=>{const o=I(),a=o.action!=="POP";return t(Pe,{$width:e,children:t(De,{as:a?void 0:u,onClick:a?o.goBack:void 0,to:a?void 0:"/blog",children:"\u276E Back"})})};var Pe=r(_).withConfig({componentId:"sc-55qtz4-1"})(["display:flex;animation:"," 1s ease;"],x),l;(function(e){e.Quote="Quotes",e.Growth="Growth",e.Ideas="Ideas",e.Dev="Dev"})(l||(l={}));const Ie=Object.entries(l),L=Object.values(l),R=({tags:e})=>t(h,{direction:"row",gap:"1rem",children:e.slice().sort((o,a)=>L.indexOf(o)-L.indexOf(a)).map((o,a,i)=>{var n;return t(je,{"data-aos":"fade","data-aos-delay":(i.length-a)*100,children:(n=Ie.find(([m,g])=>o===g))==null?void 0:n[0]},a)})});var je=r("div").withConfig({componentId:"sc-nz330x-0"})(["color:",";background:",";font-size:0.75rem;padding:0.125rem 0.375rem;border-radius:0.5rem;font-weight:600;"],({theme:e})=>e.palette.light[2],({theme:e})=>e.palette.dark[2]),ze="/assets/image.fcacb45d.jpg";const Ee={slug:"a-schedule-is-not-a-prison",timeStamp:new Date("2021-10-21T10:26:18.737Z"),tags:[l.Quote],title:"",quote:t(p,{children:"A schedule is not a prison. Set the schedule so that you have the day that you want. Set it up so it's the best possible day you could have."}),originator:"Jordan Peterson",image:ze,imageDetails:{author:{name:"Giallo",link:"https://www.pexels.com/@giallo"},link:"https://www.pexels.com/photo/assorted-silver-colored-pocket-watch-lot-selective-focus-photo-859895/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.fef15013.js"),["assets/Page.fef15013.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ee}),Oe="/assets/image.4e9534a8.jpg";const Ae={slug:"anyone-can-work-hard-when-they-feel-motivated",timeStamp:new Date("2021-12-16T09:41:09.133Z"),tags:[l.Quote],title:"",quote:t(p,{children:"Anyone can work hard when they feel motivated. It's the ability to keep going when work isn't exciting that makes the difference."}),originator:"James Clear",image:Oe,imageDetails:{author:{name:"Pixabay",link:"https://www.pexels.com/@pixabay"},link:"https://www.pexels.com/photo/brown-and-white-stallions-running-in-a-field-52500/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.b2c00ef3.js"),["assets/Page.b2c00ef3.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var Le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ae}),Re="/assets/image.b37e9754.jpg";const Me={slug:"breaks-to-take-every-day",timeStamp:new Date("2021-12-05T11:48:53.206Z"),tags:[l.Growth],title:"Four Breaks To Take Every Day",quote:"",originator:"",image:Re,imageDetails:{author:{name:"Tyler Lastovich",link:"https://www.pexels.com/@lastly"},link:"https://www.pexels.com/photo/person-standing-on-dock-with-water-396947/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.b490b1ec.js"),["assets/Page.b490b1ec.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js"]))};var qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me}),Fe="/assets/image.85f2f72c.jpg";const Ve={slug:"effective-ways-to-wind-down",timeStamp:new Date("2021-11-14T20:45:16.404Z"),tags:[l.Growth],title:"Effective Ways To Wind Down",quote:"",originator:"",image:Fe,imageDetails:{author:{name:"Pixabay",link:"https://www.pexels.com/@pixabay"},link:"https://www.pexels.com/photo/green-tree-268533/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.acc0a871.js"),["assets/Page.acc0a871.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js"]))};var Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ve}),Ne="/assets/image.ef103d9c.jpg";const Ze={slug:"everything-around-you-that-you-call-life",timeStamp:new Date("2021-12-16T08:58:06.831Z"),tags:[l.Quote],title:"",quote:t(p,{children:"Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it\u2026 Once you learn that, you'll never be the same again."}),originator:"Steve Jobs",image:Ne,imageDetails:{author:{name:"Pixabay",link:"https://www.pexels.com/@pixabay"},link:"https://www.pexels.com/photo/planet-earth-220201/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.fe7969a0.js"),["assets/Page.fe7969a0.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ze}),We="/assets/image.8c624362.jpg";const Qe={slug:"free-online-team-building-games",timeStamp:new Date("2021-11-05T21:46:52.327Z"),tags:[l.Ideas],title:"Free Online Team Building Games",quote:"",originator:"",image:We,imageDetails:{author:{name:"Pavel Chernonogov",link:"https://www.pexels.com/@watorious"},link:"https://www.pexels.com/photo/man-welding-metal-bars-2381463/"},excerpt:t(p,{children:"Here's some high quality online games for team building or just catching up with friends."}),Page:s.exports.lazy(()=>d(()=>import("./Page.de0d7d67.js"),["assets/Page.de0d7d67.js","assets/PageContainer.e0156458.js","assets/vendor.522b45a9.js","assets/ExternalLink.3172088c.js"]))};var He=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe}),Ue="/assets/image.b5fb935e.jpg";const Ye={slug:"genes-do-not-eliminate",timeStamp:new Date("2022-04-19T13:21:11.233Z"),tags:[l.Quote],title:"",quote:t(p,{children:"Genes do not eliminate the need for hard work. They clarify it. They tell us what to work hard on."}),originator:"James Clear",image:Ue,imageDetails:{author:{name:"Kammeran Gonzalez-Keola",link:"https://www.pexels.com/@kammeran-gonzalez-keola-3137381"},link:"https://www.pexels.com/photo/unrecognizable-energetic-surfer-riding-azure-sea-wave-8258043/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.5e71e99e.js"),["assets/Page.5e71e99e.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var Je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ye}),Ke="/assets/image.9117dbba.jpg";const Xe={slug:"hello-world",timeStamp:new Date("2021-10-12T11:05:17.766Z"),tags:[],title:"Hello World!",quote:"",originator:"",image:Ke,imageDetails:{author:{name:"Pixabay",link:"https://www.pexels.com/@pixabay"},link:"https://www.pexels.com/photo/sky-earth-space-working-2156/"},excerpt:t(p,{children:"Welcome to the first post on my website blog. Hope to see you again in the future."}),Page:s.exports.lazy(()=>d(()=>import("./Page.6d7cac6d.js"),["assets/Page.6d7cac6d.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js"]))};var et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xe}),tt="/assets/image.0787711c.jpg";const ot={slug:"if-you-want-better-results",timeStamp:new Date("2022-11-08T06:19:23.090Z"),tags:[l.Growth],title:"If you want better results, forget about setting goals",quote:"",originator:"James Clear",image:tt,imageDetails:{author:{name:"Akil Mazumder",link:"https://www.pexels.com/@akilmazumder/"},link:"https://www.pexels.com/photo/person-holding-a-green-plant-1072824/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.4be3355a.js"),["assets/Page.4be3355a.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js"]))};var at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ot}),it="/assets/image.07971b91.jpg";const nt={slug:"most-of-the-mistakes-i-made",timeStamp:new Date("2021-11-30T19:58:21.940Z"),tags:[l.Quote],title:"",quote:t(p,{children:"Most of the mistakes I made, I made when I was too tired, because I tried too hard and worked too hard. You make better decisions when you're not too tired. So that would be my only advice."}),originator:"Bill Clinton to Obama",image:it,imageDetails:{author:{name:"Martins Krastins",link:"https://www.pexels.com/@martinskrastins"},link:"https://www.pexels.com/photo/cracked-stone-wall-838981/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.b580d441.js"),["assets/Page.b580d441.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt}),st="/assets/image.01696afb.jpg";const lt={slug:"nonviolent-communication",timeStamp:new Date("2021-12-16T08:47:09.763Z"),tags:[l.Growth],title:"Nonviolent Communication",quote:"",originator:"Marshall B. Rosenberg",image:st,imageDetails:{author:{name:"Min An",link:"https://www.pexels.com/@minan1398"},link:"https://www.pexels.com/photo/monochrome-photo-of-couple-holding-hands-1004014/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.973e8fa8.js"),["assets/Page.973e8fa8.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js"]))};var dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lt}),ct="/assets/image.8a72f9dd.jpg";const mt={slug:"one-of-the-chief-things",timeStamp:new Date("2022-10-30T21:28:43.717Z"),tags:[l.Quote],title:"",quote:t(p,{children:"One of the chief things which my typical man has to learn is that the mental faculties are capable of a continuous hard activity; they do not tire like an arm or a leg. All they want is change - not rest, except in sleep."}),originator:"Arnold Bennett",image:ct,imageDetails:{author:{name:"Kateryna Babaieva",link:"https://www.pexels.com/@kateryna-babaieva-1423213/"},link:"https://www.pexels.com/photo/person-welding-wearing-a-prootective-metal-mask-3158651/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.5d262c22.js"),["assets/Page.5d262c22.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var gt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt}),pt="/assets/image.7e4a2929.jpg";const ht={slug:"remember-why-you-started",timeStamp:new Date("2022-04-19T13:21:11.233Z"),tags:[l.Quote],title:"",quote:t(p,{children:"Remember why you started, remember where you're headed, think of how great it will be to get there, and keep going."}),originator:"Ralph Marston",image:pt,imageDetails:{author:{name:"Pixabay",link:"https://www.pexels.com/@pixabay"},link:"https://www.pexels.com/photo/road-landscape-nature-sky-56832/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.87296cab.js"),["assets/Page.87296cab.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ht}),ft="/assets/image.4ab80223.jpg";const _t={slug:"the-better-way-to-style-your-react-components",timeStamp:new Date("2021-10-25T09:54:16.735Z"),tags:[l.Dev],title:"The Better Way To Style Your React Components",quote:"",originator:"",image:ft,imageDetails:{author:{name:"Steve Johnson",link:"https://www.pexels.com/@steve"},link:"https://www.pexels.com/photo/multicolored-abstract-painting-1269968/"},excerpt:t(p,{children:"There are probably too many ways to style your React components, and if you haven't had enough of them, here's yet another one to add to your list. It is far from being mainstream but might just be perfect for your smaller projects."}),Page:s.exports.lazy(()=>d(()=>import("./Page.916efb95.js"),["assets/Page.916efb95.js","assets/PageContainer.e0156458.js","assets/vendor.522b45a9.js","assets/ExternalLink.3172088c.js"]))};var wt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_t}),yt="/assets/image.59507aef.jpg";const bt={slug:"the-biggest-mistake-that-you-can-make",timeStamp:new Date("2021-11-05T10:46:50.483Z"),tags:[l.Quote],title:"",quote:t(p,{children:"The biggest mistake that you can make is to believe that you are working for somebody else."}),originator:"Earl Nightingale",image:yt,imageDetails:{author:{name:"Anders Kristensen",link:"https://www.pexels.com/@andersbk"},link:"https://www.pexels.com/photo/man-wearing-watch-with-hand-on-pocket-447570/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.0f13cf25.js"),["assets/Page.0f13cf25.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt}),xt="/assets/image.3803cd36.jpg";const kt={slug:"there-isnt-time-so-brief-is-life",timeStamp:new Date("2021-10-15T00:19:16.790Z"),tags:[l.Quote],title:"",quote:t(p,{children:"There isn't time, so brief is life, for bickerings, apologies, heartburnings, callings to account. There is only time for loving, and but an instant, so to speak, for that."}),originator:"Mark Twain",image:xt,imageDetails:{author:{name:"Francesco Ungaro",link:"https://www.pexels.com/@francesco-ungaro"},link:"https://www.pexels.com/photo/hot-air-ballons-in-the-sky-2325446/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.d15318f9.js"),["assets/Page.d15318f9.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kt}),Tt="/assets/image.fa3f57bb.jpg";const Dt={slug:"three-secrets-of-resilient-people",timeStamp:new Date("2021-11-09T05:03:07.298Z"),tags:[l.Growth],title:"Three Secrets Of Resilient People",quote:"",originator:"Lucy Hone",image:Tt,imageDetails:{author:{name:"Francesco Ungaro",link:"https://www.pexels.com/@francesco-ungaro"},link:"https://www.pexels.com/photo/grayscale-photo-of-gray-man-statue-96446/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.840b1823.js"),["assets/Page.840b1823.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js"]))};var $t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dt}),Pt="/assets/image.42d1ba6d.jpg";const It={slug:"top-visual-studio-code-extensions",timeStamp:new Date("2021-10-16T04:24:17.209Z"),tags:[l.Dev],title:"My Top 10 Visual Studio Code Extensions",quote:"",originator:"",image:Pt,imageDetails:{author:{name:"Jos\xE9 Oliveira",link:"https://www.pexels.com/@jose-oliveira-32884059"},link:"https://www.pexels.com/photo/wood-landscape-water-summer-7028840/"},excerpt:t(p,{children:"Here's my list of the most useful Visual Studio Code extensions that you can find today to improve your efficiency and productivity for frontend web development."}),Page:s.exports.lazy(()=>d(()=>import("./Page.1bf12c83.js"),["assets/Page.1bf12c83.js","assets/PageContainer.e0156458.js","assets/vendor.522b45a9.js","assets/ExternalLink.3172088c.js"]))};var jt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:It});const zt={"./AScheduleIsNotAPrison/index.tsx":Ce,"./AnyoneCanWorkHard/index.tsx":Le,"./BreaksToTakeEveryDay/index.tsx":qe,"./EffectiveWaysToWindDown/index.tsx":Be,"./EverythingAroundYouThatYouCallLife/index.tsx":Ge,"./FreeOnlineTeamBuildingGames/index.tsx":He,"./GenesDoNotEliminate/index.tsx":Je,"./HelloWorld/index.tsx":et,"./IfYouWantBetterResults/index.tsx":at,"./MostOfTheMistakeIMade/index.tsx":rt,"./NonViolentCommunication/index.tsx":dt,"./OneOfTheChiefThings/index.tsx":gt,"./RememberWhyYouStarted/index.tsx":ut,"./StyledComponentsCssProps/index.tsx":wt,"./TheBiggestMistakeThatYouCanMake/index.tsx":vt,"./ThereIsntTimeSoBriefIsLife/index.tsx":St,"./ThreeSecretsOfResilientPeople/index.tsx":$t,"./TopVsCodeExtensions/index.tsx":jt},Et=Object.values(zt).map(e=>e.default).sort((e,o)=>o.timeStamp.getTime()-e.timeStamp.getTime()),T=Et.filter(e=>!e.tags.includes(l.Dev));var Ct="/assets/image.684cc6d0.jpg";const Ot={slug:"i-used-to-think-my-edge-in-life",timeStamp:new Date("2022-12-19T08:27:13.202Z"),tags:[l.Quote],title:"",quote:t(p,{children:"I used to think my edge in life was being smart, but it really isn't. My edge is being not stupid. There's a big difference."}),originator:"Warren Buffet",image:Ct,imageDetails:{author:{name:"Burak The Weekender",link:"https://www.pexels.com/@weekendplayer/"},link:"https://www.pexels.com/photo/hanging-light-bulb-132340/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.70a5b945.js"),["assets/Page.70a5b945.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var At=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ot}),Lt="/assets/image.256e681a.jpg";const Rt={slug:"pay-yourself-first",timeStamp:new Date("2022-12-19T08:27:13.202Z"),tags:[l.Growth],title:"Pay yourself first.",quote:"",originator:"Unknown",image:Lt,imageDetails:{author:{name:"cottonbro studio",link:"https://www.pexels.com/@cottonbro/"},link:"https://www.pexels.com/photo/person-putting-coin-in-a-piggy-bank-3943716/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.0434489c.js"),["assets/Page.0434489c.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rt}),qt="/assets/image.18558056.jpg";const Ft={slug:"the-key-is-not-to-prioritize",timeStamp:new Date("2022-12-19T08:27:13.202Z"),tags:[l.Quote],title:"",quote:t(p,{children:"The key is not to prioritize what's on your schedule, but to schedule your priorities."}),originator:"Stephen Covey",image:qt,imageDetails:{author:{name:"Sergij",link:"https://www.pexels.com/@sergij-59618/"},link:"https://www.pexels.com/photo/selective-photography-of-skeleton-key-hanging-217316/"},excerpt:"",Page:s.exports.lazy(()=>d(()=>import("./Page.1ebf1857.js"),["assets/Page.1ebf1857.js","assets/ImageAuthor.14beaafb.js","assets/ExternalLink.3172088c.js","assets/vendor.522b45a9.js","assets/PageContainer.e0156458.js","assets/BlockQuote.c3eda74a.js"]))};var Vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ft});const Bt={"./IUsedToThinkMyEdgeInLife/index.tsx":At,"./PayYourselfFirst/index.tsx":Mt,"./TheKeyIsNotToPrioritize/index.tsx":Vt},M=Object.values(Bt).map(e=>e.default).sort((e,o)=>o.timeStamp.getTime()-e.timeStamp.getTime()),q=()=>c(Nt,{"data-aos":"fade-up",children:[t("h1",{children:"404"}),t("p",{children:"Page not found"})]});var Nt=r(_).withConfig({componentId:"sc-amqm9p-0"})(["flex-grow:1;display:flex;flex-direction:column;justify-content:center;text-align:center;"]),Zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const Gt=({match:e})=>{const o=T.find(i=>i.slug===e.params.id)||M.find(i=>i.slug===e.params.id);if(!(o==null?void 0:o.Page))return t(q,{});const{Page:a}=o;return c(p,{children:[t($e,{width:"md"}),c(_,{$width:"md",children:[c(h,{gap:"1rem",children:[c(Wt,{children:[t(Qt,{"data-aos":"fade",children:o.timeStamp.toDateString()}),t(R,{tags:o.tags})]}),o.title&&t("h3",{"data-aos":"fade",children:o.title}),t(s.exports.Suspense,{fallback:null,children:t(a,{})})]}),t(Ht,{})]})]})};var Wt=r("div").withConfig({componentId:"sc-w5vsh7-0"})(["display:flex;justify-content:space-between;"]),Qt=r("div").withConfig({componentId:"sc-w5vsh7-1"})(["color:",";"],({theme:e})=>e.palette.light[2]),Ht=r("div").withConfig({componentId:"sc-w5vsh7-2"})(["padding-bottom:4rem;"]);const Ut=({fadeDuration:e=1})=>t(Yt,{children:t(Jt,{$_css:e})});var Yt=r("div").withConfig({componentId:"sc-c36gk4-0"})(["width:6rem;height:6rem;position:relative;filter:blur(1px);animation:"," 2s linear infinite;"],re),Jt=r("div").withConfig({componentId:"sc-c36gk4-1"})(["border:4px solid #717d86;border-width:4px 0 0 0;border-radius:50%;position:absolute;width:100%;height:100%;animation:"," ","s ease;"],x,e=>e.$_css);const Kt=({src:e,placeholderAspectRatio:o="3 / 2"})=>{const[a,i]=s.exports.useState(!1);return s.exports.useEffect(()=>{j.refresh()},[a]),c(p,{children:[!a&&c(Xt,{offset:500,once:!0,$_css:o,children:[t(eo,{onLoad:()=>i(!0),src:e}),t(to,{children:t(Ut,{fadeDuration:5})})]}),a&&t(oo,{"data-aos":"fade","data-aos-offset":0,src:e})]})};var Xt=r(J).withConfig({componentId:"sc-19024p9-0"})(["width:100%;padding-top:calc(100% / (","));position:relative;"],e=>e.$_css),eo=r("img").withConfig({componentId:"sc-19024p9-1"})(["display:none;"]),to=r("div").withConfig({componentId:"sc-19024p9-2"})(["display:grid;place-items:center;position:absolute;top:0;width:100%;height:100%;"]),oo=r("img").withConfig({componentId:"sc-19024p9-3"})(["width:100%;"]);const F=({article:e})=>c(h,{"data-aos":"fade",gap:"0.5rem",children:[c(ao,{children:[t(io,{children:e.timeStamp.toDateString()}),t(R,{tags:e.tags})]}),e.title&&t("h3",{children:t(no,{to:`/${e.slug}#top`,children:e.title})}),e.quote&&t(ro,{to:`/${e.slug}#top`,children:t("blockquote",{children:t("q",{children:e.quote})})}),t(u,{to:`/${e.slug}#top`,children:t(so,{children:t(lo,{children:t(Kt,{src:e.image})})})}),e.excerpt&&t("div",{children:e.excerpt}),t("div",{"data-aos":"fade-left","data-aos-offset":0,children:t(u,{to:`/${e.slug}#top`,children:"Read more \u276F"})})]});var ao=r("div").withConfig({componentId:"sc-gyzctb-0"})(["display:flex;justify-content:space-between;"]),io=r("div").withConfig({componentId:"sc-gyzctb-1"})(["color:",";"],({theme:e})=>e.palette.light[2]),no=r(u).withConfig({componentId:"sc-gyzctb-2"})(["color:",";"],({theme:e})=>e.palette.light[1]),ro=r(u).withConfig({componentId:"sc-gyzctb-3"})(["color:",";"],({theme:e})=>e.palette.light[1]),so=r("div").withConfig({componentId:"sc-gyzctb-4"})(["position:relative;padding-top:40%;overflow:hidden;"]),lo=r("div").withConfig({componentId:"sc-gyzctb-5"})(["position:absolute;top:0;bottom:0;width:100%;display:flex;align-items:center;justify-content:center;"]);const V=({location:e,history:o})=>{const a=v.parse(e.search),i=typeof a.tag=="string"?a.tag:void 0;return c(co,{$width:"md",children:[c(h,{gap:"5rem",children:[t(h,{gap:"1rem",children:c(mo,{children:[t(go,{className:i?void 0:"active",to:v.stringifyUrl({url:e.pathname,query:b(y({},a),{tag:void 0})}),children:"All"}),Object.entries(l).filter(([n,m])=>T.some(g=>g.tags.includes(m))).map(([n,m],g)=>c(s.exports.Fragment,{children:[t(po,{onClick:g===0?()=>o.push("/drafts"):void 0,$_css:(g*2+1)*50,children:"|"}),t(ho,{className:i===n?"active":void 0,to:v.stringifyUrl({url:e.pathname,query:b(y({},a),{tag:n})}),$_css2:(g+1)*2*50,children:m})]},n))]})}),t(s.exports.Fragment,{children:T.filter(n=>!i||typeof i=="string"&&n.tags.some(m=>m===l[i])).map(n=>t(F,{article:n},n.slug))},e.search)]}),t(uo,{children:"\u2022\u2022\u2022"})]})};var co=r(_).withConfig({componentId:"sc-428e5z-0"})(["padding-top:1rem;"]),mo=r("div").withConfig({componentId:"sc-428e5z-1"})(["display:flex;gap:1rem;color:",";flex-wrap:wrap;> a{color:inherit;&:hover{color:",";}&.active{color:",";}}"],({theme:e})=>e.palette.light[3],({theme:e})=>e.palette.light[2],({theme:e})=>e.palette.light[1]),go=r(u).withConfig({componentId:"sc-428e5z-2"})(["opacity:0;animation:"," 1s ease forwards;"],k),po=r("div").withConfig({componentId:"sc-428e5z-3"})(["opacity:0;animation:"," 1s ease ","ms forwards;"],k,e=>e.$_css),ho=r(u).withConfig({componentId:"sc-428e5z-4"})(["opacity:0;animation:"," 1s ease ","ms forwards;"],k,e=>e.$_css2),uo=r("div").withConfig({componentId:"sc-428e5z-5"})(["padding:6rem 0;text-align:center;"]);const fo=({location:e})=>c(_o,{$width:"md",children:[c(h,{gap:"5rem",children:[t("h2",{children:"Drafts"}),t(s.exports.Fragment,{children:M.map(o=>t(F,{article:o},o.slug))},e.search)]}),t(wo,{children:"\u2022\u2022\u2022"})]});var _o=r(_).withConfig({componentId:"sc-7f8fd1-0"})(["padding-top:1rem;"]),wo=r("div").withConfig({componentId:"sc-7f8fd1-1"})(["padding:6rem 0;text-align:center;"]);const yo=s.exports.lazy(()=>d(()=>import("./Quotes.dd9ef94d.js"),["assets/Quotes.dd9ef94d.js","assets/vendor.522b45a9.js"])),bo=s.exports.lazy(()=>d(()=>import("./ComingSoon.c74fcb61.js"),["assets/ComingSoon.c74fcb61.js","assets/vendor.522b45a9.js"])),vo=s.exports.lazy(()=>d(()=>import("./Credits.24661b7e.js"),["assets/Credits.24661b7e.js","assets/vendor.522b45a9.js","assets/ExternalLink.3172088c.js"])),xo=s.exports.lazy(()=>d(()=>Promise.resolve().then(function(){return Zt}),void 0)),ko=()=>{const e=P(),o=I();return s.exports.useEffect(()=>{z.pageview(e.pathname+e.search)},[e]),s.exports.useEffect(()=>{e.hash.slice(1)==="top"&&(window.scrollTo(0,0),o.replace(`${e.pathname}${e.search}`))},[e.hash]),c(K,{children:[t(f,{component:V,exact:!0,path:"/"}),t(f,{component:V,exact:!0,path:"/blog"}),t(f,{component:fo,exact:!0,path:"/drafts"}),t(f,{component:yo,exact:!0,path:"/quotes"}),t(f,{component:bo,exact:!0,path:"/about"}),t(f,{component:vo,exact:!0,path:"/credits"}),t(f,{component:Gt,exact:!0,path:"/:id"}),t(f,{component:xo})]})};z.initialize("UA-212302378-1");const So=()=>{const[e,o]=s.exports.useState(!1);return s.exports.useEffect(()=>{Promise.all([document.fonts.load("400 1rem 'Inter'"),document.fonts.load("500 1rem 'Inter'"),document.fonts.load("600 1rem 'Inter'"),document.fonts.load("700 1rem 'Inter'"),document.fonts.load("800 1rem 'Inter'")]).then(()=>o(!0)),j.init({duration:800,once:!0,offset:50})},[]),e?t(ve,{children:t(s.exports.Suspense,{fallback:t(To,{}),children:t(ko,{})})}):null};var To=r("div").withConfig({componentId:"sc-rmve8c-0"})(["flex-grow:1;"]);const Do={breakpoints:{xs:0,sm:480,md:760,lg:1200,xl:1440},palette:{light:{1:"#ECEDED",2:"#9CA9B3",3:"#717D86"},dark:{1:"#151719",2:"#25282C",3:"#33363A"},primary:{1:"#6163FF",2:"#ACADFF",3:"#5658DD",4:"#E9E9FF"},secondary:{1:"#24E5AF",2:"#73EFCC",3:"#1CB68B",4:"#D2F9EE"},alert:{error:"#FF6171",warning:"#FFA173",success:"#24E5AF"}}},$o=X`
  html,
  body {
    overflow-x: hidden;
  }

  html {
    height: fill-available;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-height: fill-available;
    background: ${({theme:e})=>e.palette.dark[1]};
    color: ${({theme:e})=>e.palette.light[1]};
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    line-height: 1.3;

    * {
      transition: all 0.2s;
    }
  }

  #root {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  img,
  svg,
  video {
    display: block;
    height: auto;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({theme:e})=>e.palette.light[1]};
  }

  h1,
  .h1 {
    font-size: 1.75rem;
  }

  h2,
  .h2 {
    font-size: 1.625rem;
  }

  h3,
  .h3 {
    font-size: 1.5rem;
  }

  h4,
  .h4 {
    font-size: 1.375rem;
  }

  h5,
  .h5 {
    font-size: 1.25rem;
  }

  h6,
  .h6 {
    font-size: 1.125rem;
  }

  blockquote {
    font-size: 1.25rem;

    ${O.down("sm")} {
      margin-left: 32px;
      margin-right: 32px;
    }
  }

  a {
    text-decoration: none;
    color: ${({theme:e})=>e.palette.light[2]};

    :hover {
      color: ${({theme:e})=>e.palette.light[3]};
    }
  }

  code {
    font-size: 0.875rem;
    padding: 0.125rem;
    border-radius: 3px;
    background-color: ${({theme:e})=>e.palette.dark[3]};
  }

  ul,
  ol {
    margin: 0;
  }

  .list-reset {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
    }
  }

  .button-reset {
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    cursor: pointer;
    color: inherit;
  }
`,Po=({children:e})=>c(ee,{theme:Do,children:[t($o,{}),t(te,{basename:"/",children:e})]});oe.render(t(ae.StrictMode,{children:t(Po,{children:t(So,{})})}),document.getElementById("root"));export{_ as C,Kt as I,h as S,l as T,T as a,Ae as b,Me as c,Ee as d,Ve as e,x as f,Ze as g,Ye as h,Xe as i,ot as j,nt as k,lt as l,O as m,mt as n,ht as o,_t as p,bt as q,kt as r,Dt as s,It as t,Ot as u,Rt as v,Ft as w};
