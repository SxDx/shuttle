import{p as e,a as n,u as l,o as a,c as t,b as o,t as s,r,n as d,d as i,e as c,w as u,f as m,g as p,h as g,S as h,F as f,i as b,j as v}from"./vendor.9ddded77.js";e("data-v-80c9a4f0");const w=["href","data-hover-color"];n();const x={props:{config:Object},setup:e=>(l((n=>({"061de818":e.config.color}))),(n,l)=>(a(),t("div",null,[o("a",{href:e.config.url,class:"font-light dark:text-white/70 underline text-sm lg:text-base",target:"_blank",rel:"noopener noreferer","data-hover-color":e.config.color},s(e.config.name),9,w)]))),__scopeId:"data-v-80c9a4f0"},k={key:0,class:"\n      absolute\n      top-2\n      right-2\n      text-lg\n      font-light\n      text-white/70\n      flex\n      items-center\n    "},y=c(),F={setup(e){const n=r(!1),l=r(0),c=r(0);fetch(`${"https://api.openweathermap.org/data/2.5/weather"}?q=${"Vienna"},${"AT"}&appid=ff50602dd6f100d3182352d7e3f15a70&units=metric`).then((e=>e.json())).then((e=>{l.value=Math.round(e.main.temp),c.value=`wi-owm-${e.weather[0].id}`,n.value=!0}));return(e,r)=>n.value?(a(),t("div",k,[o("i",{class:d(["wi mr-2",c.value])},null,2),y,o("span",null,s(l.value)+"°C",1)])):i("",!0)}},E={class:"absolute top-2 right-2 opacity-0 hover:opacity-100 transition-opacity"},A=o("span",{class:"sr-only"},"Enable notifications",-1),_={setup(e){let n=!0;"darkMode"in localStorage&&(n="true"===localStorage.darkMode);const l=r(n);return u((()=>{localStorage.darkMode=l.value,l.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")})),(e,n)=>(a(),t("div",E,[m(g(h),{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),class:"\n        relative\n        inline-flex\n        items-center\n        h-6\n        rounded-full\n        w-11\n        dark:bg-yellow-400\n        bg-gray-700\n      "},{default:p((()=>[A,o("span",{class:d([l.value?"translate-x-6":"translate-x-1","inline-block w-4 h-4 transform bg-white rounded-full"])},null,2)])),_:1},8,["modelValue"])]))}};e("data-v-e1560370");const j={class:"\n      flex\n      justify-center\n      items-center\n      w-screen\n      h-screen\n      font-mono\n      relative\n    "},M=o("div",{id:"blob1",class:"\n        absolute\n        animate-blob\n        filter\n        blur-xl\n        opacity-50\n        w-96\n        h-96\n        rounded-full\n        left-[45%]\n        top-[25%]\n      "},null,-1),S=o("div",{id:"blob2",class:"\n        absolute\n        animate-blob\n        animation-delay-2000\n        filter\n        blur-xl\n        opacity-50\n        w-96\n        h-96\n        rounded-full\n        right-[45%]\n        top-[25%]\n      "},null,-1),D=o("div",{id:"blob3",class:"\n        absolute\n        animate-blob\n        animation-delay-4000\n        filter\n        blur-xl\n        opacity-50\n        w-96\n        h-96\n        rounded-full\n        right-[30%]\n        top-[45%]\n      "},null,-1),T={class:"\n        bg-white/70\n        dark:bg-primary-400/90\n        rounded-2xl\n        shadow-xl\n        w-5/6\n        lg:w-2/3\n        flex\n        overflow-hidden\n        relative\n      "},V={class:"hidden md:block w-0 md:w-4/12 relative"},$=o("img",{src:"/shuttle/assets/bg.e75d8209.gif",role:"presentation"},null,-1),q={class:"w-full lg:w-8/12 p-8 flex flex-col"},C=o("h1",{class:"font-semibold text-2xl lg:text-3xl mb-6"},"Welc0me René",-1),G={class:"flex items-center flex-grow-1 h-full backdrop-blur-xl"},N={class:"\n              grid grid-cols-1\n              md:grid-cols-2\n              lg:grid-cols-3\n              w-full\n              gap-y-5\n              lg:gap-y-11\n            "};n();const H={setup(e){const n=[{name:"Github",url:"https://github.com",color:"#FFFFFF"},{name:"Google Cloud",url:"https://console.cloud.google.com",color:"#1A73E8"},{name:"Timekeep",url:"https://docs.google.com/spreadsheets/d/1qhXNYuYdErDruEBqWiw4NGg2eTTou12EupbO4hF1pb8/edit#gid=1565546804",color:"#2DA363"},{name:"Mongodb Atlas",url:"https://cloud.mongodb.com",color:"#13AA53"},{name:"Hacker News",url:"https://vue-hn.herokuapp.com/top",color:"#CD201F"},{name:"Product Hunt",url:"https://www.producthunt.com",color:"#DA552F"},{name:"Standard",url:"https://www.derstandard.at/",color:"#E54463"},{name:"Presse",url:"https://diepresse.com/",color:"#01649E"}];return(e,l)=>(a(),t("div",j,[M,S,D,o("div",T,[o("div",V,[$,m(F)]),o("div",q,[C,o("div",G,[o("div",N,[(a(),t(f,null,b(n,(e=>o("div",{key:e.name},[m(x,{config:e},null,8,["config"])]))),64))])])])]),m(_)]))},__scopeId:"data-v-e1560370"};v(H).mount("#app");