"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[8757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,s=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(s,o(o({ref:t},m),{},{components:n})):r.createElement(s,o({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="\ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec",l={unversionedId:"misc/debugprofiler",id:"misc/debugprofiler",title:"\ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec",description:"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub294 \ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2dc\uc2a4\ud15c \ub370\uc774\ud130, \ud604\uc7ac \uac8c\uc784 \uc124\uc815, JVM \ub370\uc774\ud130, \ub808\ubca8 \ub370\uc774\ud130, \uc0ac\uc774\ub4dc \ud2f1 \uc815\ubcf4 \ub4f1\uc744 \ud65c\uc6a9\ud574 \ud2b9\uc815 \ucf54\ub4dc\uac00 \uc5bc\ub9c8\ub098 \uc2dc\uac04\uc744 \uc18c\uc694\ud558\ub294\uc9c0 \uce21\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. TickEvent\ub098 \ube14\ub85d \uc5d4\ud2f0\ud2f0 tick \ucc98\ub9ac \ub4f1\uc5d0\uc11c \uc774\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc720\uc6a9\ud560 \uc218 \uc788\ub294\ub370, \ubaa8\ub4dc \uac1c\ubc1c\uc790 \ub610\ub294 \uc11c\ubc84 \uc5b4\ub4dc\ubbfc\uc774 \ub799\uc758 \uc6d0\uc778\uc744 \uc27d\uac8c \ud30c\uc545\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4.",source:"@site/docs/misc/debugprofiler.md",sourceDirName:"misc",slug:"/misc/debugprofiler",permalink:"/Neoforge-Korean-Documentation/docs/misc/debugprofiler",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\ubaa8\ub4dc \uc124\uc815 \ud30c\uc77c",permalink:"/Neoforge-Korean-Documentation/docs/misc/config"},next:{title:"\uac8c\uc784 \ud14c\uc2a4\ud2b8",permalink:"/Neoforge-Korean-Documentation/docs/misc/gametest"}},p={},c=[{value:"\ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec \uc0ac\uc6a9\ud558\uae30",id:"\ub514\ubc84\uadf8-\ud504\ub85c\ud30c\uc77c\ub7ec-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\ud504\ub85c\ud30c\uc77c\ub7ec \uacb0\uacfc \ubcf4\uae30",id:"\ud504\ub85c\ud30c\uc77c\ub7ec-\uacb0\uacfc-\ubcf4\uae30",level:2},{value:"\uc9c1\uc811 \uc9e0 \ucf54\ub4dc \ud504\ub85c\ud30c\uc77c\ub9c1 \ud558\uae30",id:"\uc9c1\uc811-\uc9e0-\ucf54\ub4dc-\ud504\ub85c\ud30c\uc77c\ub9c1-\ud558\uae30",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ub514\ubc84\uadf8-\ud504\ub85c\ud30c\uc77c\ub7ec"},"\ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec"),(0,a.kt)("p",null,"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub294 \ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2dc\uc2a4\ud15c \ub370\uc774\ud130, \ud604\uc7ac \uac8c\uc784 \uc124\uc815, JVM \ub370\uc774\ud130, \ub808\ubca8 \ub370\uc774\ud130, \uc0ac\uc774\ub4dc \ud2f1 \uc815\ubcf4 \ub4f1\uc744 \ud65c\uc6a9\ud574 \ud2b9\uc815 \ucf54\ub4dc\uac00 \uc5bc\ub9c8\ub098 \uc2dc\uac04\uc744 \uc18c\uc694\ud558\ub294\uc9c0 \uce21\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"TickEvent"),"\ub098 \ube14\ub85d \uc5d4\ud2f0\ud2f0 tick \ucc98\ub9ac \ub4f1\uc5d0\uc11c \uc774\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc720\uc6a9\ud560 \uc218 \uc788\ub294\ub370, \ubaa8\ub4dc \uac1c\ubc1c\uc790 \ub610\ub294 \uc11c\ubc84 \uc5b4\ub4dc\ubbfc\uc774 \ub799\uc758 \uc6d0\uc778\uc744 \uc27d\uac8c \ud30c\uc545\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub514\ubc84\uadf8-\ud504\ub85c\ud30c\uc77c\ub7ec-\uc0ac\uc6a9\ud558\uae30"},"\ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"\ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec\ub294 \uc4f0\uae30 \uac04\ub2e8\ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"F3 + L"),"\uc744 \ub20c\ub7ec \ud504\ub85c\ud30c\uc77c\ub7ec\ub97c \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\ud30c\uc77c\ub9c1\uc740 10\ucd08 \uc774\ud6c4 \uc790\ub3d9\uc73c\ub85c \uc885\ub8cc\ub418\uc9c0\ub9cc, \ud0a4\ubc14\uc778\ub4dc\ub97c \ub2e4\uc2dc \ub204\ub974\ub294 \uac83\uc73c\ub85c \ub354 \ube68\ub9ac \uc911\ub2e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\ub2f9\uc5f0\ud558\uac8c\ub3c4, \ud504\ub85c\ud30c\uc77c\ub9c1\uc744 \uc9c4\ud589\ud560 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud574\uc57c \uc801\uc808\ud55c \ub370\uc774\ud130\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5d4\ud2f0\ud2f0\ub098 \ube14\ub85d \uc5d4\ud2f0\ud2f0\uc5d0 \ud504\ub85c\ud30c\uc77c\ub7ec\ub97c \uc0ac\uc6a9\ud558\uc2e4\ub824\uba74 \ub808\ubca8\uc5d0 \uba3c\uc800 \uc0dd\uc131\ud558\ub3c4\ub85d \ud558\uc138\uc694.")),(0,a.kt)("p",null,"\ud504\ub85c\ud30c\uc77c\ub7ec\uac00 \uc885\ub8cc\ub418\uba74 \uac8c\uc784\uc744 \uc2e4\ud589\ud55c \ub514\ub809\ud1a0\ub9ac \uc544\ub798 ",(0,a.kt)("inlineCode",{parentName:"p"},"debug/profiling")," \ud3f4\ub354\uc5d0 \uc0c8\ub85c\uc6b4 zip \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4.\n\ud30c\uc77c\uc758 \uc774\ub984\uc740 \ud604\uc7ac \uc2dc\uac04\uc73c\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \ud3ec\ub9e4\ud305 \ub429\ub2c8\ub2e4: ",(0,a.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd_hh_mi_ss-\uc6d4\ub4dc\uc774\ub984-\uac8c\uc784\ubc84\uc804.zip")),(0,a.kt)("h2",{id:"\ud504\ub85c\ud30c\uc77c\ub7ec-\uacb0\uacfc-\ubcf4\uae30"},"\ud504\ub85c\ud30c\uc77c\ub7ec \uacb0\uacfc \ubcf4\uae30"),(0,a.kt)("p",null,"\uac01 \uc0ac\uc774\ub4dc\ub97c \ub300\ud45c\ud558\ub294 \ud3f4\ub354(",(0,a.kt)("inlineCode",{parentName:"p"},"client"),"\ub791 ",(0,a.kt)("inlineCode",{parentName:"p"},"server"),")\uc5d0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"profiling.txt"),"\ub77c\ub294 \ud30c\uc77c\uc774 \uc788\uc744\ud150\ub370, \uc774 \ud30c\uc77c\uc740 \ud504\ub85c\ud30c\uc77c\ub9c1 \uacb0\uacfc\ub97c \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud30c\uc77c \ub9e8 \uc704\uc5d0\ub294 \uac8c\uc784 \ubc84\uc804\uacfc \ud504\ub85c\ud30c\uc77c\ub9c1\uc774 \uc9c4\ud589\ub41c \uc2dc\uac04\uc774 \ubc00\ub9ac\uc138\ucee8\ub4dc\ub85c \ud45c\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uadf8 \uc544\ub798\ub294 \ud558\uc704\uc640 \ube44\uc2b7\ud55c \ud615\uc2dd\uc73c\ub85c \ud504\ub85c\ud30c\uc77c\ub9c1 \uacb0\uacfc\uac00 \ud45c\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[00] levels - 96.70%/96.70%\n[01] |   Level Name - 99.76%/96.47%\n[02] |   |   tick - 99.31%/95.81%\n[03] |   |   |   entities - 47.72%/45.72%\n[04] |   |   |   |   regular - 98.32%/44.95%\n[04] |   |   |   |   blockEntities - 0.90%/0.41%\n[05] |   |   |   |   |   unspecified - 64.26%/0.26%\n[05] |   |   |   |   |   minecraft:furnace - 33.35%/0.14%\n[05] |   |   |   |   |   minecraft:chest - 2.39%/0.01%\n")),(0,a.kt)("p",null,"\uac01 \ubd80\ubd84\uc774 \ubb34\uc2a8 \ub73b\uc744 \uac00\uc9c0\ub294\uc9c0 \uac04\ub7b5\ud558\uac8c \uc124\uba85\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"[02]"),(0,a.kt)("th",{parentName:"tr",align:"left"},"tick"),(0,a.kt)("th",{parentName:"tr",align:"left"},"99.31%"),(0,a.kt)("th",{parentName:"tr",align:"left"},"95.81%"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"\ubd80\ubd84\uc758 \uae4a\uc774"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\ubd80\ubd84\uc758 \uc774\ub984"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\ubd80\ubaa8 \uae30\uc900\uc73c\ub85c \ubd80\ubd84\uc774 \uc18c\uc694\ud55c \uc2dc\uac04\uc758 \ubc31\ubd84\uc728. \uae4a\uc774 0\uc740 \ud2f1 \uc804\uccb4\uc5d0\uc11c \uc18c\uc694\ud55c \uc2dc\uac04\uc758 \ubc31\ubd84\uc728. \uae4a\uc774 1\uc740 \uadf8 \ubd80\ubaa8(\uae4a\uc774 0)\uc5d0\uc11c \uc18c\uc694\ub41c \uc2dc\uac04\uc911 \uc18c\uc694\ud55c \uc2dc\uac04\uc758 \ubc31\ubd84\uc728"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\ud2f1 \uc804\uccb4\uc5d0\uc11c \uc18c\uc694\ud55c \uc2dc\uac04\uc758 \ubc31\ubd84\uc728.")))),(0,a.kt)("h2",{id:"\uc9c1\uc811-\uc9e0-\ucf54\ub4dc-\ud504\ub85c\ud30c\uc77c\ub9c1-\ud558\uae30"},"\uc9c1\uc811 \uc9e0 \ucf54\ub4dc \ud504\ub85c\ud30c\uc77c\ub9c1 \ud558\uae30"),(0,a.kt)("p",null,"\ub514\ubc84\uadf8 \ud504\ub85c\ud30c\uc77c\ub7ec\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity"),"\ub294 \ud504\ub85c\ud30c\uc77c\ub9c1\uc744 \uc790\ub3d9\uc73c\ub85c \ud574\uc8fc\uc9c0\ub9cc \uadf8\uac83 \uc774\uc678\uc5d0 \ub2e4\ub978 \uac83\uc5d0 \ud504\ub85c\ud30c\uc77c\ub7ec\ub97c \uc4f0\uace0 \uc2f6\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ubd80\ubd84\uc744 \uc9c1\uc811 \ub9cc\ub4dc\uc154\uc57c \ud569\ub2c8\ub2e4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"ProfilerFiller#push(\uc139\uc158 \uc774\ub984 : String);\n// \ud504\ub85c\ud30c\uc77c\ub9c1\ud560 \ucf54\ub4dc\nProfilerFiller#pop();\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ProfilerFiller")," \uc778\uc2a4\ud134\uc2a4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Level"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MinecraftServer")," \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Minecraft")," \uc778\uc2a4\ud134\uc2a4\uc5d0\uc11c \uc811\uadfc\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\uc81c \uc0ac\uc6a9\ud558\uc2e0 \ubd80\ubd84 \uc774\ub984\uc744 \ud504\ub85c\ud30c\uc77c\ub9c1 \uacb0\uacfc\uc5d0\uc11c \ucc3e\uc544\ubcf4\uc2dc\uba74 \ub429\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);