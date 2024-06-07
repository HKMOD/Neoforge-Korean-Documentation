"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[9550],{1402:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=i(5893),r=i(1151);const o={},s="Debug Profiler",l={id:"misc/debugprofiler",title:"Debug Profiler",description:"Minecraft provides a Debug Profiler that provides system data, current game settings, JVM data, level data, and sided tick information to find time consuming code. Considering things like TickEvents and ticking BlockEntities, this can be very useful for modders and server owners that want to find a lag source.",source:"@site/versioned_docs/version-1.20.4/misc/debugprofiler.md",sourceDirName:"misc",slug:"/misc/debugprofiler",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/misc/debugprofiler",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Configuration",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/misc/config"},next:{title:"Game Tests",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/misc/gametest"}},d={},a=[{value:"Using the Debug Profiler",id:"using-the-debug-profiler",level:2},{value:"Reading a Profiling result",id:"reading-a-profiling-result",level:2},{value:"Profiling your own code",id:"profiling-your-own-code",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"debug-profiler",children:"Debug Profiler"}),"\n",(0,n.jsxs)(t.p,{children:["Minecraft provides a Debug Profiler that provides system data, current game settings, JVM data, level data, and sided tick information to find time consuming code. Considering things like ",(0,n.jsx)(t.code,{children:"TickEvent"}),"s and ticking ",(0,n.jsx)(t.code,{children:"BlockEntities"}),", this can be very useful for modders and server owners that want to find a lag source."]}),"\n",(0,n.jsx)(t.h2,{id:"using-the-debug-profiler",children:"Using the Debug Profiler"}),"\n",(0,n.jsxs)(t.p,{children:["The Debug Profiler is very simple to use. It requires the debug keybind ",(0,n.jsx)(t.code,{children:"F3 + L"})," to start the profiler. After 10 seconds, it will automatically stop; however, it can be stopped earlier by pressing the keybind again."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Naturally, you can only profile code paths that are actually being reached. ",(0,n.jsx)(t.code,{children:"Entities"})," and ",(0,n.jsx)(t.code,{children:"BlockEntities"})," that you want to profile must exist in the level to show up in the results."]})}),"\n",(0,n.jsxs)(t.p,{children:["After you have stopped the debugger, it will create a new zip within the ",(0,n.jsx)(t.code,{children:"debug/profiling"})," subdirectory in your run directory.\nThe file name will be formatted with the date and time as ",(0,n.jsx)(t.code,{children:"yyyy-mm-dd_hh_mi_ss-WorldName-VersionNumber.zip"})]}),"\n",(0,n.jsx)(t.h2,{id:"reading-a-profiling-result",children:"Reading a Profiling result"}),"\n",(0,n.jsxs)(t.p,{children:["Within each sided folder (",(0,n.jsx)(t.code,{children:"client"})," and ",(0,n.jsx)(t.code,{children:"server"}),"), you will find a ",(0,n.jsx)(t.code,{children:"profiling.txt"})," file containing the result data. At the top, it first tells you how long in milliseconds it was running and how many ticks ran in that time."]}),"\n",(0,n.jsx)(t.p,{children:"Below that, you will find information similar to the snippet below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"[00] levels - 96.70%/96.70%\n[01] |   Level Name - 99.76%/96.47%\n[02] |   |   tick - 99.31%/95.81%\n[03] |   |   |   entities - 47.72%/45.72%\n[04] |   |   |   |   regular - 98.32%/44.95%\n[04] |   |   |   |   blockEntities - 0.90%/0.41%\n[05] |   |   |   |   |   unspecified - 64.26%/0.26%\n[05] |   |   |   |   |   minecraft:furnace - 33.35%/0.14%\n[05] |   |   |   |   |   minecraft:chest - 2.39%/0.01%\n"})}),"\n",(0,n.jsx)(t.p,{children:"Here is a small explanation of what each part means"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"[02]"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"tick"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"99.31%"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"95.81%"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The Depth of the section"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The Name of the Section"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The percentage of time it took in relation to it's parent. For Layer 0, it is the percentage of the time a tick takes. For Layer 1, it is the percentage of the time its parent takes."}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The second percentage tells you how much time it took from the entire tick."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"profiling-your-own-code",children:"Profiling your own code"}),"\n",(0,n.jsxs)(t.p,{children:["The Debug Profiler has basic support for ",(0,n.jsx)(t.code,{children:"Entity"})," and ",(0,n.jsx)(t.code,{children:"BlockEntity"}),". If you would like to profile something else, you may need to manually create your sections like so:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"ProfilerFiller#push(yourSectionName : String);\n//The code you want to profile\nProfilerFiller#pop();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can obtain the ",(0,n.jsx)(t.code,{children:"ProfilerFiller"})," instance from a ",(0,n.jsx)(t.code,{children:"Level"}),", ",(0,n.jsx)(t.code,{children:"MinecraftServer"}),", or ",(0,n.jsx)(t.code,{children:"Minecraft"})," instance.\nNow you just need to search the results file for your section name."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>s});var n=i(7294);const r={},o=n.createContext(r);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);