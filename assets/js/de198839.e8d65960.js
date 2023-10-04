"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,k=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="\ubaa8\ub4dc \uc0dd\uba85\uc8fc\uae30",p={unversionedId:"concepts/lifecycle",id:"concepts/lifecycle",title:"\ubaa8\ub4dc \uc0dd\uba85\uc8fc\uae30",description:"\ubaa8\ub4dc\ub97c \ubd88\ub7ec\uc624\ub294 \uacfc\uc815\uc740 \uc0dd\uba85\uc8fc\uae30\ub77c\uace0 \ud558\ub294 \uc5ec\ub7ec \ub2e8\uacc4\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\ub4e4\uc744 \ub300\ud45c\ud558\ub294 \uc774\ubca4\ud2b8\ub4e4\uc740 \uac01 \ubaa8\ub4dc\ubcc4 \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub418\uc5b4 \ubb34\uc5c7\uc744 \ucd08\uae30\ud654\ud574\uc57c \ud558\ub294\uc9c0 \uc54c\ub9bd\ub2c8\ub2e4. \uc774\ub54c \uc9c4\ud589\ub418\ub294 \ucd08\uae30\ud654\ub85c, \uac1d\uccb4 \ub4f1\ub85d\ud558\uae30, \ub370\uc774\ud130 \uc0dd\uc131 \uc900\ube44, \ub610\ub294 \ub2e4\ub978 \ubaa8\ub4dc\uc640\uc758 \ud1b5\uc2e0 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/concepts/lifecycle.md",sourceDirName:"concepts",slug:"/concepts/lifecycle",permalink:"/Neoforge-Korean-Documentation/docs/concepts/lifecycle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0",permalink:"/Neoforge-Korean-Documentation/docs/concepts/internationalization"},next:{title:"\ub808\uc9c0\uc2a4\ud2b8\ub9ac",permalink:"/Neoforge-Korean-Documentation/docs/concepts/registries"}},l={},c=[{value:"\ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ubca4\ud2b8",id:"\ub808\uc9c0\uc2a4\ud2b8\ub9ac-\uc774\ubca4\ud2b8",level:2},{value:"\ub370\uc774\ud130 \uc0dd\uc131",id:"\ub370\uc774\ud130-\uc0dd\uc131",level:2},{value:"\uacf5\ud1b5 \ucd08\uae30\ud654",id:"\uacf5\ud1b5-\ucd08\uae30\ud654",level:2},{value:"\uc0ac\uc774\ub4dc \ucd08\uae30\ud654",id:"\uc0ac\uc774\ub4dc-\ucd08\uae30\ud654",level:2},{value:"InterModComms",id:"intermodcomms",level:2}],m={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ubaa8\ub4dc-\uc0dd\uba85\uc8fc\uae30"},"\ubaa8\ub4dc \uc0dd\uba85\uc8fc\uae30"),(0,o.kt)("p",null,"\ubaa8\ub4dc\ub97c \ubd88\ub7ec\uc624\ub294 \uacfc\uc815\uc740 \uc0dd\uba85\uc8fc\uae30\ub77c\uace0 \ud558\ub294 \uc5ec\ub7ec \ub2e8\uacc4\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\ub4e4\uc744 \ub300\ud45c\ud558\ub294 \uc774\ubca4\ud2b8\ub4e4\uc740 \uac01 \ubaa8\ub4dc\ubcc4 \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub418\uc5b4 \ubb34\uc5c7\uc744 \ucd08\uae30\ud654\ud574\uc57c \ud558\ub294\uc9c0 \uc54c\ub9bd\ub2c8\ub2e4. \uc774\ub54c \uc9c4\ud589\ub418\ub294 \ucd08\uae30\ud654\ub85c, ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/registries#%EA%B0%9D%EC%B2%B4-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B8%B0"},"\uac1d\uccb4 \ub4f1\ub85d\ud558\uae30"),", ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datagen/"},"\ub370\uc774\ud130 \uc0dd\uc131 \uc900\ube44"),", \ub610\ub294 ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/lifecycle#intermodcomms"},"\ub2e4\ub978 \ubaa8\ub4dc\uc640\uc758 \ud1b5\uc2e0")," \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\uba87\uba87 \uc0dd\uba85\uc8fc\uae30 \uc774\ubca4\ud2b8\ub4e4\uc740 \ubcd1\ub82c\uc801\uc73c\ub85c \ubc29\uc1a1\ub429\ub2c8\ub2e4: \ubaa8\ub4dc\ub4e4\uc774 \uc5ec\ub7ec \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub3d9\uc2dc\uc5d0 \ubc18\uc751\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"admonition"},"\uc774\ub7ec\ud55c \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"ParallelDispatchEvent"),"\uc758 \ud558\uc704 \ud074\ub798\uc2a4\uc774\uba70, \uc798\ubabb\ud558\uba74 \uacbd\uc7c1 \uc0c1\ud0dc\ub97c \uc720\ubc1c\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \ubaa8\ub4dc\uc758 API \ub610\ub294 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8 \uc2dc\uc2a4\ud15c\uc5d0 \uc811\uadfc\ud558\ub294 \ucf54\ub4dc\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"ParallelDispatchEvent#enqueueWork"),"\ub97c \uc774\uc6a9\ud574 \uba54\uc778 \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud558\uc138\uc694.")),(0,o.kt)("h2",{id:"\ub808\uc9c0\uc2a4\ud2b8\ub9ac-\uc774\ubca4\ud2b8"},"\ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ubca4\ud2b8"),(0,o.kt)("p",null,"\ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ubca4\ud2b8\ub4e4\uc740 \ubaa8\ub4dc \uba54\uc778 \ud074\ub798\uc2a4 \ucd08\uae30\ud654 \uc774\ud6c4 \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uc774 \uc774\ubca4\ud2b8\ub4e4\uc758 \uc885\ub958\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DataPackRegistryEvent$NewRegistry"),", \uadf8\ub9ac\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"RegistryEvent"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"RegistryBuilder"),"\ub97c \uc0ac\uc6a9\ud574 \uc9c1\uc811 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \ub9cc\ub4e4\uace0 \ub4f1\ub85d\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DataPackRegistryEvent$NewRegistry"),"\ub294 JSON\uc73c\ub85c\ubd80\ud130 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uac1d\uccb4\ub97c \uc77d\uace0 \uc4f8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Codec"),"\uc73c\ub85c \uc0c8\ub85c\uc6b4 \ub370\uc774\ud130\ud329 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RegistryEvent"),"\ub294 ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/registries#%EA%B0%9D%EC%B2%B4-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B8%B0"},"\uac1d\uccb4\ub4e4\uc744 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub4f1\ub85d\ud560 \ub54c")," \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 \uc774\ubca4\ud2b8\ub294 \uac01 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub2f9 \ubc29\uc1a1\ub429\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ub370\uc774\ud130-\uc0dd\uc131"},"\ub370\uc774\ud130 \uc0dd\uc131"),(0,o.kt)("p",null,"\ub9cc\uc57d \uac8c\uc784\uc774 ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datagen/"},"\ub370\uc774\ud130 \uc0dd\uc131 \ubaa8\ub4dc"),"\ub85c \uc2e4\ud589\ub418\uc5c8\ub2e4\uba74, ",(0,o.kt)("inlineCode",{parentName:"p"},"GatherDataEvent"),"\uac00 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9\uc5d0 \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uc774 \uc774\ubca4\ud2b8\ub294 \ubaa8\ub4dc\ub4e4\uc758 \ub370\uc774\ud130 \uc81c\uacf5\uc790\ub97c \ub4f1\ub85d\ud560\ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uacf5\ud1b5-\ucd08\uae30\ud654"},"\uacf5\ud1b5 \ucd08\uae30\ud654"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac8c\uc784\uc744 \ubd88\ub7ec\uc62c \ub54c \uc0ac\uc774\ub4dc \uc0c1\uad00 \uc5c6\uc774 \uc2e4\ud589\ud560 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \uc608\ub85c ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datastorage/capabilities"},"\uce90\ud328\ube4c\ub9ac\ud2f0")," \ub4f1\ub85d\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uc0ac\uc774\ub4dc-\ucd08\uae30\ud654"},"\uc0ac\uc774\ub4dc \ucd08\uae30\ud654"),(0,o.kt)("p",null,"\uc0ac\uc774\ub4dc \ucd08\uae30\ud654 \uc774\ubca4\ud2b8\ub294 \uc54c\ub9de\ub294 ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/sides"},"\ubb3c\ub9ac \uc0ac\uc774\ub4dc"),"\uc5d0\uc11c\ub9cc \ubc29\uc1a1\ub418\ub294 \uc774\ubca4\ud2b8 \uc785\ub2c8\ub2e4: ",(0,o.kt)("inlineCode",{parentName:"p"},"FMLClientSetupEvent"),"\ub294 \ubb3c\ub9ac \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c, ",(0,o.kt)("inlineCode",{parentName:"p"},"FMLDedicatedServerSetupEvent"),"\ub294 \uc804\uc6a9 \uc11c\ubc84\uc5d0\uc11c\ub9cc \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uc774 \uc774\ubca4\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud0a4\ubc14\uc778\ub4dc \ub4f1\ub85d\uacfc \uac19\uc740 \uc0ac\uc774\ub4dc \uc804\uc6a9 \ucd08\uae30\ud654\ub97c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"intermodcomms"},"InterModComms"),(0,o.kt)("p",null,"\uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ubaa8\ub4dc\ub07c\ub9ac \uba54\uc138\uc9c0\ub97c \ubcf4\ub0b4 \ud1b5\uc2e0\ud558\uc5ec \uc11c\ub85c \uc5f0\ub3d9\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc774\ub54c \ubc29\uc1a1\ub418\ub294 \uc774\ubca4\ud2b8\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModEnqueueEvent"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModProcessEvent"),"\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uba54\uc138\uc9c0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"IMCMessage"),"\ub85c \ud45c\ud604\ub418\ub294\ub370, \uc774\ub294 \uba54\uc138\uc9c0\uc758 \uc1a1\uc2e0\uc790\uc640 \uc218\uc2e0\uc790\uc758 \ubaa8\ub4dc \uc544\uc774\ub514, \uba54\uc138\uc9c0\uc758 \ub370\uc774\ud130, \ub9c8\uc9c0\ub9c9\uc73c\ub85c \ub370\uc774\ud130\uc758 \ud0a4\ub97c \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"InterModEnqueueEvent"),"\ub294 \uba54\uc138\uc9c0\ub97c \ubcf4\ub0b4\ub294 \uc774\ubca4\ud2b8\ub85c, ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModComms#sendTo"),"\ub97c \uc0ac\uc6a9\ud574 \ub2e4\ub978 \ubaa8\ub4dc\uc5d0 \uba54\uc138\uc9c0\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 \uba54\uc138\uc9c0\ub97c \ubc1b\uc744 \ubaa8\ub4dc\uc758 \uc544\uc774\ub514, \uba54\uc138\uc9c0\ub4e4\uc744 \uad6c\ubd84\ud558\uae30 \uc704\ud55c \ud0a4, \uba54\uc138\uc9c0\uc758 \ub370\uc774\ud130\ub97c \uacf5\uae09\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"Supplier"),"\ub97c \uc778\uc790\ub85c \ubc1b\uc2b5\ub2c8\ub2e4. \ucd94\uac00\uc801\uc73c\ub85c \uba54\uc138\uc9c0 \uc1a1\uc2e0\uc790\ub97c \uc9c0\uc815\ud560 \uc218\ub3c4 \uc788\uc73c\ub098, \uae30\ubcf8\uac12\uc73c\ub85c\ub294 \uba54\uc138\uc9c0\ub97c \ubcf4\ub0b4\ub294 \ubaa8\ub4dc\uc758 \uc544\uc774\ub514 \uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"InterModProcessEvent"),"\ub294 \uba54\uc138\uc9c0\ub97c \ubc1b\uace0 \ucc98\ub9ac\ud558\ub294 \uc774\ubca4\ud2b8\ub85c, ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModComms#getMessages"),"\ub97c \uc0ac\uc6a9\ud574 \ubaa8\ub4e0 \uba54\uc138\uc9c0\ub4e4\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 \ubaa8\ub4dc \uc544\uc774\ub514\ub97c \uc778\uc790\ub85c \ubc1b\ub294\ub370 \ud604\uc7ac \ubaa8\ub4dc\uc758 \uc544\uc774\ub514\ub97c \ub118\uae30\uc2dc\uba74 \ub429\ub2c8\ub2e4. \ucd94\uac00\uc801\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"Predicate"),"\ub97c \uc804\ub2ec\ud558\uc5ec \uba87\uba87 \uba54\uc138\uc9c0\ub9cc \ud544\ud130\ub9c1 \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub54c \ubcf4\ub0b4\uc9c4 \uba54\uc138\uc9c0\ub4e4\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModComms"),"\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),"\uc5d0 \uc800\uc7a5\ud558\ub294\ub370, \uba54\uc778 \uc2a4\ub808\ub4dc \uc678 \ub2e4\ub978 \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc154\ub3c4 \uacbd\uc7c1 \uc0c1\ud0dc\ub97c \uc720\ubc1c\ud558\uc9c0 \uc54a\uc544 \uc548\uc804\ud569\ub2c8\ub2e4."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\uadf8\uc678\uc5d0\ub3c4 \ubaa8\ub4dc \uba54\uc778 \ud074\ub798\uc2a4 \ucd08\uae30\ud654 \uc9c1\ud6c4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ubca4\ud2b8\ubcf4\ub2e4 \uba3c\uc800 \ubc29\uc1a1\ub418\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"FMLConstructModEvent"),", \uadf8\ub9ac\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"InterModComms")," \uc774\ud6c4 \ubaa8\ub4dc\ub97c \uc644\uc804\ud788 \ubd88\ub7ec\uc654\uc74c\uc744 \uc54c\ub9ac\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"FMLLoadCompleteEvent")," \uc0dd\uba85\uc8fc\uae30 \uc774\ubca4\ud2b8\uac00 \uc788\uc2b5\ub2c8\ub2e4.")))}s.isMDXComponent=!0}}]);