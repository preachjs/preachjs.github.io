const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/introduction-DLmNaGs7.js","assets/main-C9588_D4.js","assets/main-DFpbPTAQ.css","assets/essentials-XCetJKWA.js","assets/aesthetics-vvQnIm3f.js","assets/developer-experience-DPBBmu-1.js","assets/frameworks-C_2IOddQ.js","assets/templates-DKAGpAGw.js"])))=>i.map(i=>d[i]);
import{b as t,_ as a,h as c,y as n,a as e}from"./main-C9588_D4.js";const p={introduction:{order:1,label:"Introduction",source:t(()=>a(()=>import("./introduction-DLmNaGs7.js"),__vite__mapDeps([0,1,2]))),key:"introduction"},essentials:{order:2,label:"Essentials",source:t(()=>a(()=>import("./essentials-XCetJKWA.js"),__vite__mapDeps([3,1,2]))),key:"essentials"},aesthetics:{order:3,label:"Aesthetics",source:t(()=>a(()=>import("./aesthetics-vvQnIm3f.js"),__vite__mapDeps([4,1,2]))),key:"aesthetics"},"developer-experience":{order:4,label:"Developer Experience",source:t(()=>a(()=>import("./developer-experience-DPBBmu-1.js"),__vite__mapDeps([5,1,2]))),key:"developer-experience"},frameworks:{order:5,label:"Frameworks",source:t(()=>a(()=>import("./frameworks-C_2IOddQ.js"),__vite__mapDeps([6,1,2]))),key:"frameworks"},templates:{order:6,label:"Templates",source:t(()=>a(()=>import("./templates-DKAGpAGw.js"),__vite__mapDeps([7,1,2]))),key:"templates"}};function d({items:r=[],initialValue:l=""}={}){const[s,o]=c(l);return n(()=>{const i=window.location.hash.replace(/^#/,"");i!=s&&o(i.replace(/^#/,""))},[]),e("ul",{class:"sticky top-[50px] flex flex-col gap-4",children:r.map(i=>e(h,{item:i,active:i.key==s,onPress:()=>o(i.key)}))})}function h({item:r,active:l,onPress:s}){return e("li",{class:"w-fit",children:e("a",{href:"/"+r.key,onClick:s,class:"group text-zinc-600",children:[r.label,e("span",{class:`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black ${l?"max-w-full !bg-zinc-600":""}`})]})})}function _({children:r,sideBarItems:l=[]}){return e("div",{children:[e("div",{class:"min-h-[80vh] mx-auto max-w-4xl p-2",children:[e("header",{class:"flex flex-col justify-center h-[400px]",children:[e("h1",{class:"text-2xl font-semibold",children:e("a",{href:"/",class:"hover:underline hover:underline-offset-4",children:"PreachJS"})}),e("p",{children:e("small",{children:"We make tiny things"})})]}),e("main",{class:"flex gap-10",children:[e("aside",{id:"sidebar",class:"flex-none text-sm",children:e(d,{items:Object.values(l).sort((s,o)=>s.order-o.order),initialValue:Object.keys(l)[0]})}),e("article",{class:"flex-1 prose text-zinc-700",children:r})]})]}),e("footer",{class:"p-2 mx-auto max-w-4xl border-t border-t-zinc",children:e("ul",{class:"flex gap-4 justify-end",children:e("li",{class:"text-xs",children:e("a",{class:"w-full hover:underline hover:underline-offset-4",href:"https://github.com/preachjs/preachjs.github.io",children:"Github"})})})})]})}export{_ as B,p as s};
