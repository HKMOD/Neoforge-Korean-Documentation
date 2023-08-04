"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[6876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},C="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,k=r(e,["components","mdxType","originalType","parentName"]),C=d(n),c=i,u=C["".concat(o,".").concat(c)]||C[c]||m[c]||l;return n?a.createElement(u,p(p({ref:t},k),{},{components:n})):a.createElement(u,p({ref:t},k))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,p=new Array(l);p[0]=c;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[C]="string"==typeof e?e:i,p[1]=r;for(var d=2;d<l;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={},p="\uce90\ud328\ube4c\ub9ac\ud2f0",r={unversionedId:"datastorage/capabilities",id:"datastorage/capabilities",title:"\uce90\ud328\ube4c\ub9ac\ud2f0",description:"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc2dc\uc2a4\ud15c\uc740 \ud074\ub798\uc2a4 \ucc38\uc870\ub85c \uc778\ud55c \uac15\uc81c \uc885\uc18d\uc131\uc744 \ud53c\ud558\uba74\uc11c\ub3c4 \uc120\ud0dd\uc801\uc73c\ub85c \uae30\ub2a5\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/datastorage/capabilities.md",sourceDirName:"datastorage",slug:"/datastorage/capabilities",permalink:"/Neoforge-Korean-Documentation/en/docs/datastorage/capabilities",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Tag Generation",permalink:"/Neoforge-Korean-Documentation/en/docs/datagen/server/tags"},next:{title:"Codecs",permalink:"/Neoforge-Korean-Documentation/en/docs/datastorage/codecs"}},o={},d=[{value:"\ud3ec\uc9c0\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uce90\ud328\ube4c\ub9ac\ud2f0",id:"\ud3ec\uc9c0\uc5d0\uc11c-\uc81c\uacf5\ud558\ub294-\uce90\ud328\ube4c\ub9ac\ud2f0",level:2},{value:"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc0ac\uc6a9\ud558\uae30",id:"\uce90\ud328\ube4c\ub9ac\ud2f0-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c0\uc6d0\ud558\uae30",id:"\uce90\ud328\ube4c\ub9ac\ud2f0-\uc9c0\uc6d0\ud558\uae30",level:2},{value:"\uce90\ud328\ube4c\ub9ac\ud2f0 \ubd80\ucc29\ud558\uae30",id:"\uce90\ud328\ube4c\ub9ac\ud2f0-\ubd80\ucc29\ud558\uae30",level:2},{value:"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c1\uc811 \ub9cc\ub4e4\uae30",id:"\uce90\ud328\ube4c\ub9ac\ud2f0-\uc9c1\uc811-\ub9cc\ub4e4\uae30",level:2},{value:"RegisterCapabilitiesEvent",id:"registercapabilitiesevent",level:3},{value:"@AutoRegisterCapability",id:"autoregistercapability",level:3},{value:"LevelChunk \uc640 BlockEntity \uce90\ud328\ube4c\ub9ac\ud2f0 \ub370\uc774\ud130 \uc720\uc9c0\uc2dc\ud0a4\uc9c0",id:"levelchunk-\uc640-blockentity-\uce90\ud328\ube4c\ub9ac\ud2f0-\ub370\uc774\ud130-\uc720\uc9c0\uc2dc\ud0a4\uc9c0",level:2},{value:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \ub370\uc774\ud130 \ub3d9\uae30\ud654 \ud558\uae30",id:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc640-\ub370\uc774\ud130-\ub3d9\uae30\ud654-\ud558\uae30",level:2},{value:"\ud50c\ub808\uc774\uc5b4\uac00 \uc8fd\uc5b4\ub3c4 \ub370\uc774\ud130 \uc720\uc9c0\uc2dc\ud0a4\uae30",id:"\ud50c\ub808\uc774\uc5b4\uac00-\uc8fd\uc5b4\ub3c4-\ub370\uc774\ud130-\uc720\uc9c0\uc2dc\ud0a4\uae30",level:2}],k={toc:d},C="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(C,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\uce90\ud328\ube4c\ub9ac\ud2f0"},"\uce90\ud328\ube4c\ub9ac\ud2f0"),(0,i.kt)("p",null,"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc2dc\uc2a4\ud15c\uc740 \ud074\ub798\uc2a4 \ucc38\uc870\ub85c \uc778\ud55c \uac15\uc81c \uc885\uc18d\uc131\uc744 \ud53c\ud558\uba74\uc11c\ub3c4 \uc120\ud0dd\uc801\uc73c\ub85c \uae30\ub2a5\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub807\uac8c \uc81c\uacf5\ub418\ub294 \ub3d9\uc791 \ub610\ub294 \uae30\ub2a5\uc744 \uce90\ud328\ube4c\ub9ac\ud2f0\ub77c\uace0 \ud558\uba70, \uc774\ub97c \uc778\ud130\ud398\uc774\uc2a4 \ud615\ud0dc\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud3ec\uc9c0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Level"),", \uadf8\ub9ac\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"LevelChunk"),"\uc5d0 \uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c0\uc6d0\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4, \uc774 \uac1d\uccb4\ub4e4\uc5d0\ub294 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \uc0ac\uc6a9 \ub610\ub294 \uad00\ub828 \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758\ud558\uc5ec \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub300\ud574\uc11c\ub294 \uc544\ub798 \ub354 \uc790\uc138\ud788 \ub2e4\ub8e8\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\ud3ec\uc9c0\uc5d0\uc11c-\uc81c\uacf5\ud558\ub294-\uce90\ud328\ube4c\ub9ac\ud2f0"},"\ud3ec\uc9c0\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uce90\ud328\ube4c\ub9ac\ud2f0"),(0,i.kt)("p",null,"\ud3ec\uc9c0\uc5d0\uc11c\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc138\uac00\uc9c0 \uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \uc788\uc2b5\ub2c8\ub2e4: ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemHandler"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IFluidHandler")," ",(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"IItemHandler"),"\ub294 \uc778\ubca4\ud1a0\ub9ac\ub97c \uad00\ub9ac\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. BlockEntity, Entity, \ub610\ub294 ItemStack \uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"Container"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WorldlyContainer")," \ub300\uc2e0 \uc0ac\uc6a9\ud558\uc138\uc694."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IFluidHandler"),"\ub294 \uc561\uccb4\ub97c \uc800\uc7a5\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. BlockEntity, Entity, \ub610\ub294 ItemStack \uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IEnergyStorage"),"\ub294 \uc5d0\ub108\uc9c0\ub97c \uc800\uc7a5\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. BlockEntity, Entity, \ub610\ub294 ItemStack \uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. TeamCoFH \uc758 RedstoneFlux API\ub97c \uae30\ubc18\uc73c\ub85c \ud558\uc5ec \ub9cc\ub4e4\uc5b4 \uc84c\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uce90\ud328\ube4c\ub9ac\ud2f0-\uc0ac\uc6a9\ud558\uae30"},"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc0ac\uc6a9\ud558\uae30"),(0,i.kt)("p",null,"\uac01 \uce90\ud328\ube4c\ub9ac\ud2f0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability"),"\ub77c\ub294 \uace0\uc720\ud55c \uc778\uc2a4\ud134\uc2a4\ub85c \uad6c\ubd84\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uac01 ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability")," \uc778\uc2a4\ud134\uc2a4\ub4e4\uc740 \ud3ec\uc9c0\uc5d0\uc11c \uc0dd\uc131\ud558\uace0 \uad00\ub9ac\ud569\ub2c8\ub2e4. \uc774\ub4e4\uc744 \ucc38\uc870\ud558\ub824\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityManager#get"),"\uc744 \uc0ac\uc6a9\ud558\uc138\uc694. "),(0,i.kt)("p",null,"::tip\n\uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uc138\uac00\uc9c0 \uce90\ud328\ube4c\ub9ac\ud2f0\ub4e4\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeCapabilities"),"\ub97c \ud1b5\ud574\uc11c\ub3c4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability"),"\ub97c \ucc38\uc870\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n:::"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"static Capability<IItemHandler> ITEM_HANDLER_CAPABILITY = CapabilityManager.get(new CapabilityToken<IItemHandler>(){});\n\nstatic Capability<IItemHandler> STATIC_REFERENCE = ForgeCapabilities#ITEM_HANDLER;\n// \uc704 \ub450\uac00\uc9c0 \ub2e4 \ub3d9\uc77c\ud55c \uce90\ud328\ube4c\ub9ac\ud2f0\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ucc38\uc870\ud569\ub2c8\ub2e4\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityManager#get"),"\uc740 \uc5b8\uc81c\ub098 ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uc774 \uc544\ub2cc \uc694\uccad\ub41c ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n\uc5ec\uae30\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityToken"),"\uc758 \uc81c\ub108\ub9ad \ud0c0\uc785 \uc778\uc790\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability"),"\uac00 \uc81c\uacf5\ud558\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"CapabilityManager#get"),"\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uc774 \uac12\uc744 \ubc18\ud658\ud558\uc600\uc5b4\ub3c4 \ud574\ub2f9 \uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \uc0ac\uc6a9\uac00\ub2a5\ud55c\uc9c0 \ud655\uc778\ud558\ub824\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability#isRegistered"),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694.")),(0,i.kt)("p",null,"BlockEntity, Entity, \uadf8\ub9ac\uace0 ItemStack\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider"),"\ub97c \uad6c\ud604\ud558\uc5ec \uce90\ud328\ube4c\ub9ac\ud2f0 \uc2dc\uc2a4\ud15c\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider#getCapability"),"\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability"),"\ub97c \uc778\uc790\ub85c \ub118\uaca8 \uc6d0\ud558\uc2dc\ub294 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \uc694\uccad\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,'\uc5ec\uae30\uc11c "\uc694\uccad"\uc774\ub77c\uace0 \ud588\ub294\ub370, \uac1d\uccb4\uac00 \uc694\uccad\ubc1b\uc740 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub9cc\uc57d \uac1d\uccb4\uac00 \uc694\uccad\ubc1b\uc740 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 ',(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional.empty()"),"\uac00 \ubc18\ud658\ub418\uace0, \uc9c0\uc6d0\ud55c\ub2e4\uba74 \uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \uc81c\uacf5\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"#getCapability")," \uba54\uc11c\ub4dc\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"Direction"),"\ub97c \ub450\ubc88\uc9f8 \uc778\uc790\ub85c \ubc1b\ub294\ub370, \uc774\ub294 \ubc29\ud5a5(\ub610\ub294 \uba74)\uc5d0 \ub530\ub77c \ub2e4\ub978 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4. \uc774\ub54c \ubc29\ud5a5\uc774 \ud544\uc694 \uc5c6\ub294 \uc0c1\ud669\uc774\ub77c\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \uc804\ub2ec\ud558\uc2e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uce90\ud328\ube4c\ub9ac\ud2f0-\uc9c0\uc6d0\ud558\uae30"},"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c0\uc6d0\ud558\uae30"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider"),"\ub97c \uc9c0\uc6d0\ud558\ub294 \uac1d\uccb4\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \uc9c0\uc6d0\ud558\uae30 \uc704\ud574\uc11c\ub294 \uba3c\uc800 \uc9c0\uc6d0\ud560 \uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \uc874\uc7ac\ud558\ub294\uc9c0 \uba3c\uc800 \ud655\uc778\ud574\uc57c \ud569\ub2c8\ub2e4. \uce90\ud328\ube4c\ub9ac\ud2f0\ub294 \ub2e4\ub978 \ubaa8\ub4dc\uc5d0\uc11c\ub3c4 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadfc\ub370 \ud574\ub2f9 \ubaa8\ub4dc\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub2e4\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc704\ucc98\ub7fc ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability#isRegistered"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ud6c4 \uc9c0\uc6d0\ud560 \uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \uc81c\uacf5\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc9c1\uc811 \uad6c\ud604\ud574\uc11c \ub9cc\ub4dc\uc154\ub3c4 \ub418\uace0, ",(0,i.kt)("inlineCode",{parentName:"p"},"IItemHandler"),"\ub97c \uad6c\ud604\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStackHandler"),"\ucc98\ub7fc \uc774\ubbf8 \uc874\uc7ac\ud558\uc2dc\ub294\uac78 \uc4f0\uc154\ub3c4 \ub429\ub2c8\ub2e4. \uc774\uc81c \uc774 \uc778\uc2a4\ud134\uc2a4\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional#of"),"\ub85c \uac10\uc2f8\uc8fc\uc138\uc694."),(0,i.kt)("p",null,"\uc774\uc81c ",(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider#getCapability"),"\uc5d0\uc11c \uc9c0\uc6d0\ud560 \uce90\ud328\ube4c\ub9ac\ud2f0\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"Capability"),"\uac00 \uc804\ub2ec\ub418\uba74 \uac10\uc2fc ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional"),"\uc744 \ubc18\ud658\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. \ubc29\ud5a5\uc5d0 \ub530\ub77c \ub2e4\ub978 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \ubc18\ud658\ud55c\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"side")," \uc778\uc790\ub97c \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c, ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," \uba54\uc11c\ub4dc \ud638\ucd9c\uc744 \ud558\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9c8\uc138\uc694, \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \uae30\uc874\uc5d0 \uc774\ubbf8 \uc9c0\uc6d0\ub418\ub358 \uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \uc624\uc791\ub3d9 \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uac1d\uccb4\uac00 \uac8c\uc784\uc5d0\uc11c \uc81c\uac70\ub418\uac70\ub098, \ud2b9\uc815 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \uc911\uac04\uc5d0 \ube44\ud65c\uc131\ud654 \ud558\uc2e0\ub2e4\uba74 \uc704\uc5d0\uc11c \ub9cc\ub4e0 ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional"),"\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"#invalidate"),"\ub97c \ud638\ucd9c\ud574 \ubb34\ud6a8\ud654 \ud574\uc57c \ud569\ub2c8\ub2e4, \uc774\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"#getCapability"),"\uc5d0\uc11c \ubc18\ud658\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional"),"\uc744 \ub2e4\ub978 \uacf3\uc5d0\uc11c \uc800\uc7a5\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc5d4\ud2f0\ud2f0\uc640 \ube14\ub85d \uc5d4\ud2f0\ud2f0\uc758 \uacbd\uc6b0 \uc6d4\ub4dc\uc5d0\uc11c \uc81c\uac70\ub420 \ub54c \uc790\ub3d9\uc73c\ub85c \ud638\ucd9c\ub418\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"#invalidateCaps"),"\uc5d0\uc11c \ubb34\ud6a8\ud654 \ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// \uc544\ub798 \ucf54\ub4dc\uac00 \ube14\ub85d \uc5d4\ud2f0\ud2f0\uc758 \uc77c\ubd80\ub77c\uace0 \ud560 \ub54c:\nLazyOptional<IItemHandler> inventoryHandlerLazyOptional;\n\n// inventoryHandlerSupplier\ub294 IItemHandler\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc18\ud658\ud558\ub294 Supplier \uc785\ub2c8\ub2e4 (\uc608: () -> inventoryHandler).\ninventoryHandlerLazyOptional = LazyOptional.of(inventoryHandlerSupplier);\n\n@Override\npublic <T> LazyOptional<T> getCapability(Capability<T> cap, Direction side) {\n  if (cap == CapabilityItemHandler.ITEM_HANDLER_CAPABILITY) {\n    return inventoryHandlerLazyOptional.cast();\n  }\n  return super.getCapability(cap, side);\n}\n\n@Override\npublic void invalidateCaps() {\n  super.invalidateCaps();\n  inventoryHandlerLazyOptional.invalidate();\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"\uc740 \ubc29\uc2dd\uc774 \uc870\uae08 \ub2e4\ub978\ub370, ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"\uc758 \uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c0\uc6d0\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"Item#initCapabilities"),"\uc5d0\uc11c \ucd94\uac00\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc120 \uc704\ucc98\ub7fc ",(0,i.kt)("inlineCode",{parentName:"p"},"#getCapability"),"\ub97c \uad6c\ud604\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider"),"\ub97c \ubc18\ud658\ud558\uc5ec, ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"\uc5d0 \uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c0\uc6d0\uc744 ",(0,i.kt)("a",{parentName:"p",href:"#%EC%BA%90%ED%8C%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EB%B6%80%EC%B0%A9%ED%95%98%EA%B8%B0"},'"\ubd80\ucc29"'),"\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc694\uccad\uc740 \ub9e4 \ud2f1\ub9c8\ub2e4, \uc218\uc2ed\ubc88\uc529 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\ub2c8, ",(0,i.kt)("inlineCode",{parentName:"p"},"#getCapability")," \ud568\uc218\ub294 \ub9e4\uc6b0 \ube68\ub77c\uc57c\ub9cc \ud569\ub2c8\ub2e4. \uc678\ubd80 \uc790\ub8cc\uad6c\uc870 \ub9d0\uace0 \uc704\ucc98\ub7fc \uc9c1\uc811 \ucf54\ub4dc\ub85c \ud655\uc778\ud574 \uc8fc\uc138\uc694."),(0,i.kt)("h2",{id:"\uce90\ud328\ube4c\ub9ac\ud2f0-\ubd80\ucc29\ud558\uae30"},"\uce90\ud328\ube4c\ub9ac\ud2f0 \ubd80\ucc29\ud558\uae30"),(0,i.kt)("p",null,"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc2dc\uc2a4\ud15c\uc744 \uc9c0\uc6d0\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Level"),'\uacfc \uac19\uc740 \uac1d\uccb4\uc5d0\ub294 \uc0c8\ub85c\uc6b4 \uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c0\uc6d0\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 "\ubd80\ucc29"\uc774\ub77c\uace0 \ud558\uba70, ',(0,i.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent"),"\uac00 \ubc29\uc1a1\ub420 \ub54c \ub610 \ub2e4\ub978 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider"),"\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ubd80\ucc29\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4.\n\uac8c\uc784\uc18d \uc5ec\ub7ec \uac1d\uccb4\ub4e4\uc740 \ucd08\uae30\ud654 \ub3c4\uc911 \uc774 \uc774\ubca4\ud2b8\ub97c \ubc29\uc1a1\ud558\uc5ec \ub2e4\ub978 \uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \ubd80\ucc29\ub420 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<Entity>"),": \uc5d4\ud2f0\ud2f0 \ucd08\uae30\ud654\uc2dc \ubc29\uc1a1\ub428."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<BlockEntity>"),": \ube14\ub85d \uc5d4\ud2f0\ud2f0 \ucd08\uae30\ud654\uc2dc \ubc29\uc1a1\ub428."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<ItemStack>"),": \uc544\uc774\ud15c \uc2a4\ud0dd \ucd08\uae30\ud654\uc2dc \ubc29\uc1a1\ub428."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<Level>"),": \ub808\ubca8 \ucd08\uae30\ud654\uc2dc \ubc29\uc1a1\ub428."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AttachCapabilitiesEvent<LevelChunk>"),": \uccad\ud06c \ucd08\uae30\ud654\uc2dc \ubc29\uc1a1\ub428.")),(0,i.kt)("p",null,"\uc774\ub54c \uc774\ubca4\ud2b8\uc758 \uc81c\ub108\ub9ad \ud0c0\uc785\uc740 \uc704\uc5d0 \ub098\uc5f4\ub41c \uac83\ub9cc \uc4f0\uc138\uc694, \uc608\ub97c \ub4e4\uc5b4, ",(0,i.kt)("inlineCode",{parentName:"p"},"Player"),"\uc5d0 \uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \ubd80\ucc29\ud55c\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"AttachCapabilitiesEvent<Entity>"),"\ub97c \uad6c\ub3c5\ud558\uace0, \uac1d\uccb4\uac00 ",(0,i.kt)("inlineCode",{parentName:"p"},"Player"),"\uc778\uc9c0 \ud655\uc778\ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uce90\ud328\ube4c\ub9ac\ud2f0\ub97c \ubd80\ucc29\ud558\ub824\uba74 \ud574\ub2f9 \uc774\ubca4\ud2b8\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"#addCapability"),"\ub97c \ud638\ucd9c\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. \uc774\ub54c \ubd80\ucc29\ud560 \uce90\ud328\ube4c\ub9ac\ud2f0\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \ud544\uc694\uac00 \uc5c6\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider"),"\ub9cc \uad6c\ud604\ud574\ub3c4 \ub418\uc9c0\ub9cc, \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud574\uc57c \ud560 \uacbd\uc6b0, ",(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilitySerializable<T extends Tag>"),"\ub97c \ub300\uc2e0 \uad6c\ud604\ud558\uc138\uc694, \uc774 \uc778\ud130\ud398\uc774\uc2a4\ub294 NBT\ub97c \uc800\uc7a5\ud558\uace0 \ubd88\ub7ec\uc624\ub294 \uba54\uc11c\ub4dc\ub3c4 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ubd80\ucc29\ud558\uc2dc\ub294 \uce90\ud328\ube4c\ub9ac\ud2f0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"LazyOptional"),"\uc744 \ubb34\ud6a8\ud654\uc2dc\ud0ac \ub78c\ub2e4 \ud568\uc218\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"#addListener"),"\uc5d0 \uc804\ub2ec\ud574\uc57c \ud558\uc154\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ICapabilityProvider")," \uad6c\ud604\uc5d0 \uad00\ud574\uc11c\ub294 ",(0,i.kt)("a",{parentName:"p",href:"#%EC%BA%90%ED%8C%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EC%A7%80%EC%9B%90%ED%95%98%EA%B8%B0"},"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c0\uc6d0\ud558\uae30"),"\ub97c \ucc38\uace0\ud558\uc138\uc694."),(0,i.kt)("h2",{id:"\uce90\ud328\ube4c\ub9ac\ud2f0-\uc9c1\uc811-\ub9cc\ub4e4\uae30"},"\uce90\ud328\ube4c\ub9ac\ud2f0 \uc9c1\uc811 \ub9cc\ub4e4\uae30"),(0,i.kt)("p",null,"\uce90\ud328\ube4c\ub9ac\ud2f0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterCapabilitiesEvent")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoRegisterCapability"),"\ub85c \ub4f1\ub85d\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"registercapabilitiesevent"},"RegisterCapabilitiesEvent"),(0,i.kt)("p",null,"\uce90\ud53c\ube4c\ub9ac\ud2f0\uac00 \uc81c\uacf5\ud560 \uc778\ud130\ud398\uc774\uc2a4\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterCapabilitiesEvent#register"),"\uc5d0 \uc804\ub2ec\ud558\ub294 \uac83\uc73c\ub85c \ub4f1\ub85d\ud569\ub2c8\ub2e4. \uc774 \uc774\ubca4\ud2b8\ub294 ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/events#creating-an-event-handler"},"\ubaa8\ub4dc \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub429\ub2c8\ub2e4"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@SubscribeEvent\npublic void registerCaps(RegisterCapabilitiesEvent event) {\n  event.register(IExampleCapability.class);\n}\n")),(0,i.kt)("h3",{id:"autoregistercapability"},"@AutoRegisterCapability"),(0,i.kt)("p",null,"\uce90\ud328\ube4c\ub9ac\ud2f0\uac00 \uc81c\uacf5\ud560 \uc778\ud130\ud398\uc774\uc2a4\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"@AutoRegisterCapability"),"\ub85c \ud45c\uc2dc\ud558\uba74 \ud3ec\uc9c0\uac00 \uc54c\uc544\uc11c \ub4f1\ub85d\ud574 \uc90d\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@AutoRegisterCapability\npublic interface IExampleCapability {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"levelchunk-\uc640-blockentity-\uce90\ud328\ube4c\ub9ac\ud2f0-\ub370\uc774\ud130-\uc720\uc9c0\uc2dc\ud0a4\uc9c0"},"LevelChunk \uc640 BlockEntity \uce90\ud328\ube4c\ub9ac\ud2f0 \ub370\uc774\ud130 \uc720\uc9c0\uc2dc\ud0a4\uc9c0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LevelChunk"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntity"),"\ub294 \ub370\uc774\ud130\uac00 \uc218\uc815\ub418\uc5c8\ub2e4\uace0 \ud45c\uae30\ub418\uc5c8\uc744 \uacbd\uc6b0\uc5d0\ub9cc \ub514\uc2a4\ud06c\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uc774\ub4e4\uc758 \uce90\ud328\ube4c\ub9ac\ud2f0\uc758 \ub370\uc774\ud130\ub97c \uc62c\ubc14\ub974\uac8c \uc720\uc9c0\uc2dc\ud0a4\uc9c0 \uc704\ud574\uc11c\ub294 \ub370\uc774\ud130\uac00 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c \uc218\uc815\ub418\uc5c8\ub2e4\uace0 \ud45c\uae30\ud558\uc5ec\uc57c\ub9cc \ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"LevelChunk"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"#setUnsaved"),"\ub85c, ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntity"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"#setChanged"),"\ub85c \ub370\uc774\ud130 \ubcc0\uacbd\uc744 \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ube14\ub85d \uc5d4\ud2f0\ud2f0\uc5d0\uc11c \ub9ce\uc774 \uc4f0\uc774\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStackHandler"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"void onContentsChanged(int slot)"),"\uc5d0\uc11c \ub370\uc774\ud130\uac00 \uc218\uc815\ub418\uc5c8\ub2e4\uace0 \ud45c\uae30\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class MyBlockEntity extends BlockEntity {\n\n  private final IItemHandler inventory = new ItemStackHandler(...) {\n    @Override\n    protected void onContentsChanged(int slot) {\n      super.onContentsChanged(slot);\n      setChanged(); // BlockEntity\uc5d0\uc11c \ub370\uc774\ud130 \uc218\uc815 \ud45c\uc2dc\n    }\n  }\n\n  // ...\n}\n")),(0,i.kt)("h2",{id:"\ud074\ub77c\uc774\uc5b8\ud2b8\uc640-\ub370\uc774\ud130-\ub3d9\uae30\ud654-\ud558\uae30"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \ub370\uc774\ud130 \ub3d9\uae30\ud654 \ud558\uae30"),(0,i.kt)("p",null,"\uce90\ud328\ube4c\ub9ac\ud2f0\uc758 \ub370\uc774\ud130\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \uc804\uc1a1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubaa8\ub4dc\ub97c \ub9cc\ub4dc\uc2e4 \ub54c \uc9c1\uc811 \ud328\ud0b7\uc744 \uc0ac\uc6a9\ud574\uc11c \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654 \ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654 \ud560\ub9cc\ud55c \ud06c\uac8c \uc544\ub798 3\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc5d4\ud2f0\ud2f0\uac00 \ub808\ubca8\uc5d0 \uc2a4\ud3f0\ub420\ub54c\ub098, \ube14\ub85d\uc774 \uc124\uce58\ub418\ub294 \uacbd\uc6b0. \uc774\ub7f4\ub550 \ud074\ub77c\uc774\uc5b8\ud2b8\ub4e4\uc5d0 \ucd08\uae30 \uac12\uc744 \ubcf4\ub0b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc800\uc7a5\ub41c \ub370\uc774\ud130\uac00 \uc218\uc815\ub418\ub294 \uacbd\uc6b0, \uc774\uacbd\uc6b0 \ub370\uc774\ud130\uac00 \ud544\uc694\ud55c \ud074\ub77c\uc774\uc5b8\ud2b8\ub4e4\uc5d0 \ub370\uc774\ud130\ub97c \ubcf4\ub0b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ud2b9\uc815 \uc5d4\ud2f0\ud2f0\ub098 \ube14\ub85d\uc744 \ucc98\ub2e4\ubcf4\uae30 \uc2dc\uc791\ud560 \ub54c, \uc774 \uacbd\uc6b0 \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \ub370\uc774\ud130\ub97c \ubcf4\ub0b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/networking/"},"\ub124\ud2b8\uc6cc\ud0b9"),"\uc744 \ucc38\uace0\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c \ud328\ud0b7\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."),(0,i.kt)("h2",{id:"\ud50c\ub808\uc774\uc5b4\uac00-\uc8fd\uc5b4\ub3c4-\ub370\uc774\ud130-\uc720\uc9c0\uc2dc\ud0a4\uae30"},"\ud50c\ub808\uc774\uc5b4\uac00 \uc8fd\uc5b4\ub3c4 \ub370\uc774\ud130 \uc720\uc9c0\uc2dc\ud0a4\uae30"),(0,i.kt)("p",null,"\uce90\ud328\ube4c\ub9ac\ud2f0\uc758 \ub370\uc774\ud130\ub294 \uc5d4\ud2f0\ud2f0\uac00 \uc0ac\ub9dd\ud558\uba74 \ub2e4 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4. \ud50c\ub808\uc774\uc5b4 \uc0ac\ub9dd\uc2dc \uce90\ud328\ube4c\ub9ac\ud2f0\uc758 \ub370\uc774\ud130\ub97c \ub9ac\uc2a4\ud3f0 \uacfc\uc815\uc5d0\uc11c \uc9c1\uc811 \ubcf5\uc0ac\ud558\uc5ec\uc57c\ub9cc \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PlayerEvent$Clone"),"\uc744 \ud1b5\ud574 \uc774\ub97c \uad6c\ud604\ud560 \uc218 \uc788\ub294\ub370, \uc8fd\uae30 \uc804 \ud50c\ub808\uc774\uc5b4 \uc5d4\ud2f0\ud2f0\uc758 \ub370\uc774\ud130\ub97c \uc0c8\ub85c\uc6b4 \ud50c\ub808\uc774\uc5b4 \uc5d4\ud2f0\ud2f0\uc5d0 \ub370\uc774\ud130\ub85c \ubcf5\uc0ac\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774 \uc774\ubca4\ud2b8\ub294 \ud50c\ub808\uc774\uc5b4\uac00 \uc5d4\ub4dc\uc5d0\uc11c \ub3cc\uc544\uc62c \ub54c\ub3c4 \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uc774\ub54c\ub294 \ub370\uc774\ud130\uac00 \uc720\uc9c0\ub418\uae30 \ub54c\ubb38\uc5d0 \ubcf5\uc0ac\ud558\uba74 \uc548\ub418\ub294\ub370, ",(0,i.kt)("inlineCode",{parentName:"p"},"#isWasDead"),"\ub85c \ud50c\ub808\uc774\uc5b4\uac00 \uc9c4\uc9dc \uc8fd\uc740 \uac83\uc778\uc9c0, \uc544\ub2c8\uba74 \uc5d4\ub4dc\uc5d0\uc11c \ub3cc\uc544\uc624\ub294 \uac83\uc778\uc9c0 \uad6c\ubd84\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0}}]);