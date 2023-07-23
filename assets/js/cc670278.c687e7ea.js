"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[8757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="Debug Profiler",l={unversionedId:"misc/debugprofiler",id:"misc/debugprofiler",title:"Debug Profiler",description:"Minecraft provides a Debug Profiler that provides system data, current game settings, JVM data, level data, and sided tick information to find time consuming code. Considering things like TickEvents and ticking BlockEntities, this can be very useful for modders and server owners that want to find a lag source.",source:"@site/docs/misc/debugprofiler.md",sourceDirName:"misc",slug:"/misc/debugprofiler",permalink:"/Neoforge-Korean-Documentation/docs/misc/debugprofiler",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/Neoforge-Korean-Documentation/docs/misc/config"},next:{title:"Game Tests",permalink:"/Neoforge-Korean-Documentation/docs/misc/gametest"}},s={},p=[{value:"Using the Debug Profiler",id:"using-the-debug-profiler",level:2},{value:"Reading a Profiling result",id:"reading-a-profiling-result",level:2},{value:"Profiling your own code",id:"profiling-your-own-code",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debug-profiler"},"Debug Profiler"),(0,i.kt)("p",null,"Minecraft provides a Debug Profiler that provides system data, current game settings, JVM data, level data, and sided tick information to find time consuming code. Considering things like ",(0,i.kt)("inlineCode",{parentName:"p"},"TickEvent"),"s and ticking ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntities"),", this can be very useful for modders and server owners that want to find a lag source."),(0,i.kt)("h2",{id:"using-the-debug-profiler"},"Using the Debug Profiler"),(0,i.kt)("p",null,"The Debug Profiler is very simple to use. It requires the debug keybind ",(0,i.kt)("inlineCode",{parentName:"p"},"F3 + L")," to start the profiler. After 10 seconds, it will automatically stop; however, it can be stopped earlier by pressing the keybind again."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Naturally, you can only profile code paths that are actually being reached. ",(0,i.kt)("inlineCode",{parentName:"p"},"Entities")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntities")," that you want to profile must exist in the level to show up in the results.")),(0,i.kt)("p",null,"After you have stopped the debugger, it will create a new zip within the ",(0,i.kt)("inlineCode",{parentName:"p"},"debug/profiling")," subdirectory in your run directory.\nThe file name will be formatted with the date and time as ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd_hh_mi_ss-WorldName-VersionNumber.zip")),(0,i.kt)("h2",{id:"reading-a-profiling-result"},"Reading a Profiling result"),(0,i.kt)("p",null,"Within each sided folder (",(0,i.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"server"),"), you will find a ",(0,i.kt)("inlineCode",{parentName:"p"},"profiling.txt")," file containing the result data. At the top, it first tells you how long in milliseconds it was running and how many ticks ran in that time."),(0,i.kt)("p",null,"Below that, you will find information similar to the snippet below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[00] levels - 96.70%/96.70%\n[01] |   Level Name - 99.76%/96.47%\n[02] |   |   tick - 99.31%/95.81%\n[03] |   |   |   entities - 47.72%/45.72%\n[04] |   |   |   |   regular - 98.32%/44.95%\n[04] |   |   |   |   blockEntities - 0.90%/0.41%\n[05] |   |   |   |   |   unspecified - 64.26%/0.26%\n[05] |   |   |   |   |   minecraft:furnace - 33.35%/0.14%\n[05] |   |   |   |   |   minecraft:chest - 2.39%/0.01%\n")),(0,i.kt)("p",null,"Here is a small explanation of what each part means"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"[02]"),(0,i.kt)("th",{parentName:"tr",align:"left"},"tick"),(0,i.kt)("th",{parentName:"tr",align:"left"},"99.31%"),(0,i.kt)("th",{parentName:"tr",align:"left"},"95.81%"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"The Depth of the section"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Name of the Section"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The percentage of time it took in relation to it's parent. For Layer 0, it is the percentage of the time a tick takes. For Layer 1, it is the percentage of the time its parent takes."),(0,i.kt)("td",{parentName:"tr",align:"left"},"The second percentage tells you how much time it took from the entire tick.")))),(0,i.kt)("h2",{id:"profiling-your-own-code"},"Profiling your own code"),(0,i.kt)("p",null,"The Debug Profiler has basic support for ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntity"),". If you would like to profile something else, you may need to manually create your sections like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ProfilerFiller#push(yourSectionName : String);\n//The code you want to profile\nProfilerFiller#pop();\n")),(0,i.kt)("p",null,"You can obtain the ",(0,i.kt)("inlineCode",{parentName:"p"},"ProfilerFiller")," instance from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Level"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MinecraftServer"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Minecraft")," instance.\nNow you just need to search the results file for your section name."))}u.isMDXComponent=!0}}]);