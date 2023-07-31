"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),k=i,g=s["".concat(o,".").concat(k)]||s[k]||d[k]||a;return n?r.createElement(g,p(p({ref:t},m),{},{components:n})):r.createElement(g,p({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:i,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},p="\ub808\uc9c0\uc2a4\ud2b8\ub9ac",l={unversionedId:"concepts/registries",id:"concepts/registries",title:"\ub808\uc9c0\uc2a4\ud2b8\ub9ac",description:"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \uc774\uc6a9\ud574 \ube14\ub85d \ubc0f \uc544\uc774\ud15c\uacfc \uac19\uc740 \uac1d\uccb4\ub4e4\uc5d0 \uc811\uadfc\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uac1d\uccb4\ub4e4\uc740 \ubaa8\ub450 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub4f1\ub85d\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4; \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 \uac1d\uccb4\ub4e4\uc740 \uac8c\uc784\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",source:"@site/docs/concepts/registries.md",sourceDirName:"concepts",slug:"/concepts/registries",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/registries",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\ubaa8\ub4dc \uc0dd\uba85\uc8fc\uae30",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/lifecycle"},next:{title:"\ub9ac\uc18c\uc2a4\ub780",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/resources"}},o={},c=[{value:"\uac1d\uccb4 \ub4f1\ub85d\ud558\uae30",id:"\uac1d\uccb4-\ub4f1\ub85d\ud558\uae30",level:2},{value:"DeferredRegister",id:"deferredregister",level:3},{value:"<code>RegisterEvent</code>",id:"registerevent",level:3},{value:"\ud3ec\uc9c0\uac00 \ud655\uc7a5\ud558\uc9c0 \uc54a\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub4e4",id:"\ud3ec\uc9c0\uac00-\ud655\uc7a5\ud558\uc9c0-\uc54a\ub294-\ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub4e4",level:3},{value:"\ub4f1\ub85d\ub41c \uac1d\uccb4 \ucc38\uc870\ud558\uae30",id:"\ub4f1\ub85d\ub41c-\uac1d\uccb4-\ucc38\uc870\ud558\uae30",level:2},{value:"RegistryObject \ub85c \ucc38\uc870\ud558\uae30",id:"registryobject-\ub85c-\ucc38\uc870\ud558\uae30",level:3},{value:"@ObjectHolder \uc0ac\uc6a9\ud558\uae30",id:"objectholder-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"\uc0c8\ub85c\uc6b4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc815\uc758\ud558\uae30",id:"\uc0c8\ub85c\uc6b4-\ub808\uc9c0\uc2a4\ud2b8\ub9ac-\uc815\uc758\ud558\uae30",level:2},{value:"NewRegistryEvent \uc4f0\uae30",id:"newregistryevent-\uc4f0\uae30",level:3},{value:"DeferredRegister \uc4f0\uae30",id:"deferredregister-\uc4f0\uae30",level:3},{value:"\ub204\ub77d\ub41c \ud56d\ubaa9 \ucc98\ub9ac\ud558\uae30",id:"\ub204\ub77d\ub41c-\ud56d\ubaa9-\ucc98\ub9ac\ud558\uae30",level:2}],m={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ub808\uc9c0\uc2a4\ud2b8\ub9ac"},"\ub808\uc9c0\uc2a4\ud2b8\ub9ac"),(0,i.kt)("p",null,"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \uc774\uc6a9\ud574 \ube14\ub85d \ubc0f \uc544\uc774\ud15c\uacfc \uac19\uc740 \uac1d\uccb4\ub4e4\uc5d0 \uc811\uadfc\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uac1d\uccb4\ub4e4\uc740 \ubaa8\ub450 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub4f1\ub85d\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4; \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 \uac1d\uccb4\ub4e4\uc740 \uac8c\uc784\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub294 Map<",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/resources#resourcelocation"},"ResourceLocation"),", V>\uc758 \ud615\ud0dc\ub97c \uac00\uc9c0\uba70, \ub300\uac1c \ud3ec\uc9c0\uc5d0\uc11c \uad00\ub9ac\ud569\ub2c8\ub2e4, \ud3ec\uc9c0\uc5d0\uc11c \ud655\uc7a5\ud558\ub294 \ubaa8\ub4e0 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \ubcf4\ub824\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeRegistries")," \ud074\ub798\uc2a4\ub97c \ucc38\uc870\ud558\uc138\uc694. \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub294 \ud0a4\ub85c ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/resources#resourcelocation"},"\ub9ac\uc18c\uc2a4 \uc704\uce58"),"\ub97c \uc0ac\uc6a9\ud558\ub294\ub370, \uc774\ub97c \ud1b5\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),"\uc744 \uac1d\uccb4\uc758 ",(0,i.kt)("strong",{parentName:"p"},"\ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984"),"\ucc98\ub7fc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ube14\ub85d, \uc544\uc774\ud15c \ub4f1 \uac1d\uccb4\uc758 \uc885\ub958\ub9c8\ub2e4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uac00 \ub530\ub85c \uc874\uc7ac\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uac01 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceKey"),"\ub85c \uad6c\ubd84\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud55c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc758 \uac1d\uccb4\ub4e4\uc758 \uc774\ub984\uc740 \uacb9\uce58\uba74 \uc548\ub429\ub2c8\ub2e4, \ub098\uc911\uc5d0 \ub4f1\ub85d\ub41c \uac1d\uccb4\uac00 \uae30\uc874 \uac83\uc744 \ub36e\uc5b4 \uc50c\uc6c1\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc11c\ub85c \ub2e4\ub978 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uc788\ub294 \uac1d\uccb4\ub4e4\uc740 \uac19\uc740 \uc774\ub984\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4\ub3c4 \ub429\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uac1d\uccb4-\ub4f1\ub85d\ud558\uae30"},"\uac1d\uccb4 \ub4f1\ub85d\ud558\uae30"),(0,i.kt)("p",null,"\uac1d\uccb4\ub97c \uc62c\ubc14\ub974\uac8c \ub4f1\ub85d\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 2\uac00\uc9c0\uac00 \uc788\ub294\ub370, ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\uc640 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryEvent")," \uc785\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"deferredregister"},"DeferredRegister"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\ub294 \uc704 \ub450 \uac00\uc9c0\uc911 \uad8c\uc7a5\ub418\ub294 \uac83\uc73c\ub85c, \uc815\uc801 \ucd08\uae30\ud654\ub85c \ub2e8\uc21c\ud558\uac8c \uac1d\uccb4\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc8fc\ub294 \uc720\ud2f8\ub9ac\ud2f0 \uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"#create"),"\ub97c \uc0ac\uc6a9\ud574 \uc0dd\uc131\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\ub97c \uc0ac\uc6a9\ud560 \ub808\uc9c0\uc2a4\ud2b8\ub9ac, \uadf8\ub9ac\uace0 \ub4f1\ub85d\ud560 \uac1d\uccb4\ub4e4\uc758 \ub124\uc784 \uc2a4\ud398\uc774\uc2a4\ub85c \uc0ac\uc6a9\ud560 MODID\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4.\n\uc774\ud6c4 ",(0,i.kt)("inlineCode",{parentName:"p"},"#register"),"\uc5d0 \ub4f1\ub85d\uc2dc\ud0ac \uac1d\uccb4\uc758 \uc774\ub984\uacfc \ud574\ub2f9 \uac1d\uccb4\ub97c \uacf5\uae09\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier<T>"),"\ub97c \ub118\uaca8 \ub098\uc911\uc5d0 \ud574\ub2f9 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryEvent"),"\uac00 \ubc29\uc1a1\ub420 \ub54c \uc790\ub3d9\uc73c\ub85c \ub4f1\ub85d\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// \ube14\ub85d\ub4e4\uc744 \ub4f1\ub85d\ud558\ub294 DeferredRegister \uc778\uc2a4\ud134\uc2a4 \ub9cc\ub4e4\uae30\nprivate static final DeferredRegister<Block> BLOCKS = DeferredRegister.create(ForgeRegistries.BLOCKS, "examplemod");\n\n// DeferredRegister \uc778\uc2a4\ud134\uc2a4\ub97c \ud1b5\ud574 \ube14\ub85d \ub4f1\ub85d\ud558\uae30\npublic static final RegistryObject<Block> ROCK_BLOCK = BLOCKS.register(\n    "rock", // \uc774 \ubb38\uc790\uc5f4\uc740 BLOCK\uc5d0 \uc804\ub2ec\ud55c \ub124\uc784 \uc2a4\ud398\uc774\uc2a4\uc640 \ud569\uccd0\uc838 \ub098\uc911\uc5d0 "examplemod:rock"\uc774\ub780 \uc774\ub984\uc73c\ub85c \ub4f1\ub85d\ub428\n    () -> new Block(BlockBehaviour.Properties.of().mapColor(MapColor.STONE))\n);\n\npublic ExampleMod() {\n    // DeferredRegister\uac00 RegistryEvent\uc5d0 \ubc18\uc751\ud560 \uc218 \uc788\ub3c4\ub85d \ubaa8\ub4dc \ubc84\uc2a4\uc5d0 \ub4f1\ub85d\uc2dc\ud0a4\uae30\n    BLOCKS.register(FMLJavaModLoadingContext.get().getModEventBus());\n}\n')),(0,i.kt)("h3",{id:"registerevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"RegisterEvent")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RegistryEvent"),"\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uc9c1\uc811 \uac1d\uccb4\ub97c \ub4f1\ub85d\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/concepts/events"},"\uc774\ubca4\ud2b8")," \uc785\ub2c8\ub2e4. \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc5d0\uc11c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceKey"),", \ub4f1\ub85d\ud560 \uac1d\uccb4\uc758 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984\uacfc \uac1d\uccb4 \uc790\uccb4\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"#register"),"\uc5d0 \uc804\ub2ec\ud558\uc5ec \ub4f1\ub85d\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud574\ub2f9 \uc774\ubca4\ud2b8\ub294 \ubaa8\ub4e0 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub9c8\ub2e4 \ubc29\uc1a1\ub418\ub294\ub370, ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryEvent#getRegistryKey"),"\ub85c \uc6d0\ud558\uc2dc\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uac00 \ub9de\ub294\uc9c0 \uba3c\uc800 \ud655\uc778\ud558\uc2dc\ub294 \uac83\uc744 \uad8c\uc7a5\ub4dc\ub9bd\ub2c8\ub2e4, \uc774 \uc774\ubca4\ud2b8\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"#register"),"\uc5d0 \uc804\ub2ec\ub41c ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceKey"),"\uc640 \uc774\ubca4\ud2b8\uac00 \ubc29\uc1a1\ub41c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc73c\uba74 \uc544\ubb34\ub7f0 \ub3d9\uc791\ub3c4 \ud558\uc9c0 \uc54a\uc9c0\ub9cc, \uadf8\ub798\ub3c4 \ubd88\ud544\uc694\ud55c \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ucd94\uac00\uc801\uc73c\ub85c, \uc544\ub798 \uc608\uc2dc\uc640 \uac19\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceKey"),"\uc640 \ub78c\ub2e4 \ud568\uc218\ub97c \ub300\uc2e0 \uc778\uc790\ub85c \ub118\uae38 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc804\ub2ec\ud558\ub294 \ub78c\ub2e4 \ud568\uc218\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceKey"),"\uac00 \uc77c\uce58\ud558\ub294 \uacbd\uc6b0\uc5d0\ub9cc \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc608\uc2dc(\uc774 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \ubb34\uc870\uac74 ",(0,i.kt)("em",{parentName:"p"},"\ubaa8\ub4dc \ubc84\uc2a4"),"\uc5d0 \ub4f1\ub85d\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// \uc9c1\uc811 RegistryKey \ud655\uc778\ud558\uae30\n@SubscribeEvent\npublic void registerA(RegisterEvent event) {\n    if (event.getResourceKey().equals(Registries.BLOCK)) {\n        helper.register(new ResourceLocation(MODID, "example_block_1"), new Block(...));\n        helper.register(new ResourceLocation(MODID, "example_block_2"), new Block(...));\n        helper.register(new ResourceLocation(MODID, "example_block_3"), new Block(...));\n        // ...  \n    }\n}\n\n// \ub78c\ub2e4 \ud568\uc218 \uc0ac\uc6a9\ud558\uae30\n@SubscribeEvent\npublic void registerB(RegisterEvent event) {\n    event.register(ForgeRegistries.Keys.BLOCKS,  helper -> {\n        helper.register(new ResourceLocation(MODID, "example_block_1"), new Block(...));\n        helper.register(new ResourceLocation(MODID, "example_block_2"), new Block(...));\n        helper.register(new ResourceLocation(MODID, "example_block_3"), new Block(...));\n        // ...\n    });\n}\n')),(0,i.kt)("h3",{id:"\ud3ec\uc9c0\uac00-\ud655\uc7a5\ud558\uc9c0-\uc54a\ub294-\ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub4e4"},"\ud3ec\uc9c0\uac00 \ud655\uc7a5\ud558\uc9c0 \uc54a\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub4e4"),(0,i.kt)("p",null,"\ud3ec\uc9c0\uac00 \ubaa8\ub4e0 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \ud655\uc7a5\ud558\uc9c4 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\ud45c\uc801\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"LootItemConditionType")," \uacfc \uac19\uc740 \uc815\uc801 \ub808\uc9c0\uc2a4\ud2b8\ub9ac, \ub300\uac1c JSON\uc73c\ub85c \ud45c\ud604\ub418\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfiguredFeature"),"\uc640 \uac19\uc740 \uc6d4\ub4dc \uc0dd\uc131 \uad00\ub828 \ub3d9\uc801 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub7ec\ud55c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ForgeRegistries"),"\uc5d0 \uc218\ub85d\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\ub97c \uc0ac\uc6a9\ud558\uc2dc\ub824\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister#create"),"\uc5d0 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \ub300\uc2e0 ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceKey"),"\ub97c \uc804\ub2ec\ud558\uc154\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\ub3d9\uc801 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\uc624\uc9c1")," JSON\uacfc \uac19\uc740 \ub370\uc774\ud130 \ud30c\uc77c\ub85c\ub9cc \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4, \ucf54\ub4dc\ub85c\ub294 \uc5ec\uae30\uc5d0 \uac1d\uccb4\ub97c \ub4f1\ub85d\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Registries.LOOT_CONDITION_TYPE\ub294 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8\uc5d0\uc11c \uc0ac\uc804 \uc815\uc758\ud574\ub454 ResourceKey \nprivate static final DeferredRegister<LootItemConditionType> REGISTER = DeferredRegister.create(Registries.LOOT_CONDITION_TYPE, "examplemod");\n\npublic static final RegistryObject<LootItemConditionType> EXAMPLE_LOOT_ITEM_CONDITION_TYPE = REGISTER.register("example_loot_item_condition_type", () -> new LootItemConditionType(...));\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub294 \uc624\uc9c1 \uac8c\uc784\uc5d0 \uc874\uc7ac\ud558\ub294 \uac1d\uccb4\ub4e4\uc758 \uc885\ub958\ub9cc\uc744 \uc218\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4, ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"\uc774\ub098 ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"\uc640 \uac19\uc740 \ud074\ub798\uc2a4\ub294 \uac19\uc740 \uc885\ub958\uc758 \uac1d\uccb4\uac00 \ub2e4\uc218 \uc874\uc7ac\ud560 \uc218 \uc788\uc5b4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub4f1\ub85d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"admonition"},"\uadf8 \ub300\uc2e0, \uc774\ub4e4\uc758 \uc885\ub958\ub97c \uc0c1\uc9d5\ud558\ub294 \ud074\ub798\uc2a4\ub97c \ub300\uc2e0 \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemStack"),"\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityType"),", ",(0,i.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/blockentities/"},(0,i.kt)("inlineCode",{parentName:"a"},"BlockEntity")),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntityType"),"\uc774 \ub300\uc2e0 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub4f1\ub85d\ub429\ub2c8\ub2e4."),(0,i.kt)("p",{parentName:"admonition"},"\uc774\uc911 ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntityType"),"\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityType"),"\uc740 \ub0b4\ubd80 \ud074\ub798\uc2a4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Builder"),"\ub85c \uc0dd\uc131\ud558\uba70, \ud574\ub2f9\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockEntity")," \ubc0f ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity"),"\ub97c \uc0dd\uc131\ud560 \ub78c\ub2e4 \ud568\uc218\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static final DeferredRegister<BlockEntityType> REGISTER = // ...\n\npublic static final RegistryObject<BlockEntityType<ExampleBlockEntity>> EXAMPLE_BLOCK_ENTITY = REGISTER.register(\n    "example_block_entity",\n    () -> BlockEntityType.Builder.of(\n        (type, level) -> new ExampleBlockEntity(type, level), // ExampleBlockEntity\ub97c \uc0dd\uc131\ud558\ub294 \ub78c\ub2e4 \ud568\uc218 \uc804\ub2ec\n        EXAMPLE_BLOCK.get()\n    ).build(null)\n);\n'))),(0,i.kt)("h2",{id:"\ub4f1\ub85d\ub41c-\uac1d\uccb4-\ucc38\uc870\ud558\uae30"},"\ub4f1\ub85d\ub41c \uac1d\uccb4 \ucc38\uc870\ud558\uae30"),(0,i.kt)("p",null,"\ub4f1\ub85d\ub41c \uac1d\uccb4\ub97c \ucc38\uc870\ud558\uc2e4 \ub550 \uc774\ub97c \ud2b9\uc815 \ud544\ub4dc\uc5d0 \uc800\uc7a5\ud558\uba74 \uc548\ub429\ub2c8\ub2e4, ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryEvent")," \uc774\ubca4\ud2b8\uac00 \ubc29\uc1a1\ub420 \ub54c \ub2e4\uc2dc \ub9cc\ub4e4\uc5b4 \uc9c8 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc774\ub294 \ucd94\ud6c4\uc5d0 \ud3ec\uc9c0\uc5d0\uc11c \ub3d9\uc801\uc73c\ub85c \ubaa8\ub4dc\ub97c \ud65c\uc131\ud654/\ube44\ud65c\uc131\ud654\ud558\uae30 \uc704\ud568\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub4f1\ub85d\ub418\ub294 \uac1d\uccb4\ub4e4\uc740 \ubb34\uc870\uac74 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryObject")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ObjectHolder")," \uc5b4\ub178\ud14c\uc774\uc158\uc774 \uc788\ub294 \ud544\ub4dc\ub97c \ud1b5\ud558\uc5ec \ucc38\uc870\ub418\uc5b4\uc57c\ub9cc \ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"@ObjectHolder")," \uc5b4\ub178\ud14c\uc774\uc158\uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryObject"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryEvent")," \uac00 \ubc29\uc1a1\ub420 \ub54c \uc790\ub3d9\uc73c\ub85c \uac31\uc2e0\ub429\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"registryobject-\ub85c-\ucc38\uc870\ud558\uae30"},"RegistryObject \ub85c \ucc38\uc870\ud558\uae30"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RegistryObject"),"\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub4f1\ub85d\ub41c \uac1d\uccb4\ub97c \uac10\uc2f8\ub294 \ud074\ub798\uc2a4\ub85c, \ub300\ud45c\uc801\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\uac00 \uac1d\uccb4\ub97c \ub4f1\ub85d\ud558\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryObject"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub4f1\ub85d\ub41c \uac1d\uccb4\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryObject#get"),"\uc73c\ub85c \ucc38\uc870\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \uc544\uc9c1 \uac1d\uccb4\uac00 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc558\uac70\ub098 \ub4f1\ub85d \uacfc\uc815\uc5d0\uc11c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc73c\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ubbf8 \ub4f1\ub85d\ub41c \uac1d\uccb4\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryObject"),"\ub97c \uc5bb\uae30 \uc704\ud574\uc120 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryObject#create"),"\uc5d0 \ucc38\uc870\ud560 \uac1d\uccb4\uc758 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984, \uadf8\ub9ac\uace0 \uc54c\ub9de\uc740 \ub808\uc9c0\uc2a4\ud2b8\ub9ac(\ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceKey"),")\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud638\ucd9c\ud558\uc138\uc694."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RegistryObject")," \uc0ac\uc6a9 \uc608\uc2dc:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static final RegistryObject<Item> BOW = RegistryObject.create(new ResourceLocation("minecraft:bow"), ForgeRegistries.ITEMS);\n\n// \uc544\ub798 \uc608\uc2dc\uc5d0\uc11c\ub294 \'neomagicae:mana_type\'\uc740 \ub808\uc9c0\uc2a4\ud2b8\ub9ac, \'neomagicae:coffeinum\'\uc740 \uac1d\uccb4\uc758 \uc774\ub984\uc774\ub77c \uac00\uc815\ud569\ub2c8\ub2e4\npublic static final RegistryObject<ManaType> COFFEINUM = RegistryObject.create(new ResourceLocation("neomagicae", "coffeinum"), new ResourceLocation("neomagicae", "mana_type"), "neomagicae");\n')),(0,i.kt)("h3",{id:"objectholder-\uc0ac\uc6a9\ud558\uae30"},"@ObjectHolder \uc0ac\uc6a9\ud558\uae30"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@ObjectHolder"),"\ub294 \ud2b9\uc815 \ud544\ub4dc\uc5d0 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub4f1\ub85d\ub41c \uac1d\uccb4\ub97c \uc8fc\uc785\ud558\ub294 \uc5b4\ub178\ud14c\uc774\uc158\uc785\ub2c8\ub2e4. \uc774\ub97c \ud074\ub798\uc2a4 \ub610\ub294 \ud544\ub4dc\uc5d0 \ud45c\uc2dc\ud558\uace0 \uc544\ub798\uc640 \uac19\uc774 \uc8fc\uc785\ub420 \uac1d\uccb4\uc758 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984\uc744 \uc9c0\uc815\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub9cc\uc57d \ud074\ub798\uc2a4\uac00 ",(0,i.kt)("inlineCode",{parentName:"li"},"@Mod"),"\ub85c \ud45c\uc2dc\ub418\uc5b4 \uc788\ub2e4\uba74, ",(0,i.kt)("inlineCode",{parentName:"li"},"modid"),"\ub97c \uadf8 \ud074\ub798\uc2a4\uc758 \ub124\uc784 \uc2a4\ud398\uc774\uc2a4 \uae30\ubcf8\uac12\uc73c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud544\ub4dc\uac00 \ub2e4\uc74c \uc870\uac74\ub4e4\uc744 \uc804\ubd80 \ucda9\uc871\uc2dc\ud0a8\ub2e4\uba74 \uc8fc\uc785\uc774 \uc774\ub8e8\uc5b4 \uc9d1\ub2c8\ub2e4:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ucd5c\uc18c\ud55c ",(0,i.kt)("inlineCode",{parentName:"li"},"public static")," \ud0a4\uc6cc\ub4dc\uac00 \uc788\uc74c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud544\ub4dc"),"\uac00 ",(0,i.kt)("inlineCode",{parentName:"li"},"@ObjectHolder"),"\ub85c \ud45c\uc2dc\ub418\uc5b4 \uc788\uace0,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ucc38\uc870\ud560 \uac1d\uccb4\uc758 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984\uc774 \uba85\uc2dc\ub418\uc5b4 \uc788\uace0,"),(0,i.kt)("li",{parentName:"ul"},"\ucc38\uc870\ud560 \uac1d\uccb4\uac00 \ub4e4\uc5b4\uc788\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uac00 \uba85\uc2dc\ub418\uc5b4 \uc788\uc74c."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\ub9cc\uc57d \ud544\ub4dc\uc5d0 \uc704 \ub450\uac00\uc9c0\uac00 \uc9c0\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\ub2e4\uba74 \ucef4\ud30c\uc77c \uc624\ub958\uac00 \ubc1c\uc0dd\ud568.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\ub9cc\uc57d \uc9c0\uc815\ub41c \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984 \ub610\ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\ub2e4\uba74 \uc608\uc678\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\ub9cc\uc57d \uc8fc\uc785\ub420 \uac1d\uccb4\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \uc774\uc5d0 \uad00\ud55c \uba54\uc138\uc9c0\uac00 \ucd9c\ub825\ub418\uace0 \ud544\ub4dc\uc5d0\ub294 \uac12\uc774 \uc8fc\uc785\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\uc704\uc5d0 \uae30\uc220\ub41c \uaddc\uce59\ub4e4\uc774 \ubcf5\uc7a1\ud574 \ubcf4\uc774\uc2e4 \uc218 \uc788\uc73c\ub2c8, \uc544\ub798 \uc608\uc81c\ub97c \uc900\ube44\ud574 \ubcf4\uc558\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class Holder {\n  @ObjectHolder(registryName = "minecraft:enchantment", value = "minecraft:flame")\n  public static final Enchantment flame = null;     // \uc5b4\ub178\ud14c\uc774\uc158 \uc788\uc74c. [public static] \uc694\uad6c\ub428. [final] \uc120\ud0dd\uc0ac\ud56d.\n                                                    // \uc9c0\uc815\ub41c \ub808\uc9c0\uc2a4\ud2b8\ub9ac: "minecraft:enchantment"\n                                                    // \uc9c0\uc815\ub41c \uac1d\uccb4: "minecraft:flame"\n                                                    // \uc8fc\uc785\ub420 \uac1d\uccb4: \ud654\uc5fc \uc778\uccb8\ud2b8\n\n  public static final Biome ice_flat = null;        // \uc5b4\ub178\ud14c\uc774\uc158 \uc5c6\uc74c.\n                                                    // \uc774 \ud544\ub4dc\ub294 \ubb34\uc2dc\ub428.\n\n  @ObjectHolder("minecraft:creeper")\n  public static Entity creeper = null;              // \uc5b4\ub178\ud14c\uc774\uc158 \uc788\uc74c. [public static] \uc694\uad6c\ub428.\n                                                    // \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc9c0\uc815 \uc548\ub428.\n                                                    // \ucef4\ud30c\uc77c \uc624\ub958 \ubc1c\uc0dd.\n\n  @ObjectHolder(registryName = "potion")\n  public static final Potion levitation = null;     // \uc5b4\ub178\ud14c\uc774\uc158 \uc788\uc74c. [public static] \uc694\uad6c\ub428. [final] \uc120\ud0dd\uc0ac\ud56d.\n                                                    // \uc9c0\uc815\ub41c \ub808\uc9c0\uc2a4\ud2b8\ub9ac: "minecraft:potion"\n                                                    // \uac1d\uccb4 \uc9c0\uc815 \uc548\ub428.\n                                                    // \ucef4\ud30c\uc77c \uc624\ub958 \ubc1c\uc0dd.\n}\n')),(0,i.kt)("h2",{id:"\uc0c8\ub85c\uc6b4-\ub808\uc9c0\uc2a4\ud2b8\ub9ac-\uc815\uc758\ud558\uae30"},"\uc0c8\ub85c\uc6b4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc815\uc758\ud558\uae30"),(0,i.kt)("p",null,"\ubaa8\ub4dc\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \uc815\uc758\ud560 \ub54c Map\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub9cc\ub4dc\ub294 \uacbd\uc6b0\ub294 \uaf64\ub098 \ud754\ud569\ub2c8\ub2e4; \uadf8\ub7ec\ub098 \uc774\ub294 \uac15\uc81c\uc801\uc73c\ub85c \ucf54\ub4dc\uc0c1 \uc758\uc874\uc131\uc744 \ub9cc\ub4e4\uc5b4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc624\ub958 \ucc98\ub9ac\ub3c4 \ubabb\ud558\uace0 \ubc14\ub85c \uac8c\uc784\uc774 \ucda9\ub3cc\ud569\ub2c8\ub2e4. \ub610\ud55c \uc0ac\uc774\ub4dc\uac04\uc758 \ub370\uc774\ud130 \ub3d9\uae30\ud654\ub97c \uc218\ub3d9\uc73c\ub85c \ud574\uc57c \ud55c\ub2e4\ub294 \ub2e8\uc810 \ub610\ud55c \uc788\uc2b5\ub2c8\ub2e4. \ud3ec\uc9c0\uc5d0\uc120 \uc774\ub7ec\ud55c \uc758\uc874\uc131\uc744 \ud53c\ud558\uace0, \uc790\ub3d9\uc73c\ub85c \ub3d9\uae30\ud654\ub97c \ud574 \uc8fc\uba70(\uc124\uc815\uc2dc \ubcc0\uacbd \uac00\ub2a5) \uad00\ub9ac\ub610\ud55c \uc790\ub3d9\uc73c\ub85c \ud558\ub294 \ub300\uc548\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc0c8\ub85c\uc6b4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent")," \ub610\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\ub97c \ud1b5\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryBuilder"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9cc\ub4ed\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryBuilder")," \ub294 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc758 \uc774\ub984, \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \ub4f1\ub85d\ub420 \uac1d\uccb4\ub4e4\uc758 \ud074\ub798\uc2a4, \uc5ec\ub7ec \uc774\ubca4\ud2b8\ub4e4\uc5d0 \ubc18\uc751\ud560 \ucf5c\ubc31\ub4e4 \ub4f1 \uc5ec\ub7ec\uac00\uc9c0 \uc124\uc815 \uac00\ub2a5\ud55c \uc18d\uc131\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc0c8\ub86d\uac8c \ub9cc\ub4e4\uc5b4\uc9c4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub4e4\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryManager")," \uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent")," \uac00 \ub05d\ub098\uace0 \ub4f1\ub85d\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc0c8\ub86d\uac8c \uc0dd\uc131\ub41c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc758 \uc0ac\uc6a9 \ubc29\ubc95\uc740 \ub3d9\uc77c\ud558\uae30 \ub54c\ubb38\uc5d0 ",(0,i.kt)("a",{parentName:"p",href:"#%EA%B0%9D%EC%B2%B4-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B8%B0"},"\uae30\uc874 \ubc29\ubc95\ub4e4"),"\ub85c \ub3d9\uc77c\ud558\uac8c \uac1d\uccb4\ub4e4\uc744 \ub4f1\ub85d\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"newregistryevent-\uc4f0\uae30"},"NewRegistryEvent \uc4f0\uae30"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent"),"\ub97c \uc0ac\uc6a9\ud560 \ub54c, ",(0,i.kt)("inlineCode",{parentName:"p"},"#create"),"\ub97c \ud638\ucd9c\ud558\uba74 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \uac10\uc2f8\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier<IForgeRegistry<V>>"),"\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4. \uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent"),"\uac00 \ub05d\ub098\uae30 \uc804\uc5d0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uc744, \ub05d\ub09c \uc774\ud6c4\uc5d0\ub294 \uc0dd\uc131\ub41c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"deferredregister-\uc4f0\uae30"},"DeferredRegister \uc4f0\uae30"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\ub294 \uc774\ubc88\uc5d0\ub3c4 \uc704 \uc774\ubca4\ud2b8\ub97c \uc751\uc6a9\ud574 \uc0c8\ub85c\uc6b4 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister"),"\ub97c \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984\uacfc \ubaa8\ub4dc \uc544\uc774\ub514\ub97c \uc778\uc790\ub85c \ubc1b\ub294 \uc624\ubc84\ub85c\ub4dc \uba54\uc11c\ub4dc ",(0,i.kt)("inlineCode",{parentName:"p"},"#create"),"\ub97c \ud1b5\ud574 \uc0dd\uc131\ud558\uace0, ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister#makeRegistry"),"\ub97c \ud1b5\ud574 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub97c \uc0dd\uc131\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryBuilder"),"\ub97c \uac10\uc2f8\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier"),"\ub97c \uc778\uc790\ub85c \ubc1b\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"#makeRegistry"),"\ub294 \uc790\ub3d9\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryBuilder#setName"),"\uc744 \ud638\ucd9c\ud569\ub2c8\ub2e4. \ub610\ud55c \uc704\ucc98\ub7fc ",(0,i.kt)("inlineCode",{parentName:"p"},"Supplier<IForgeRegistry<V>>"),"\ub97c \ub300\uc2e0 \ubc18\ud658\ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"NewRegistryEvent"),"\uac00 \ub05d\ub098\uae30 \uc774\uc804 ",(0,i.kt)("inlineCode",{parentName:"p"},"#get"),"\uc744 \ud638\ucd9c\ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uc774 \ub300\uc2e0 \ubc18\ud658\ub429\ub2c8\ub2e4."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister#makeRegistry"),"\ub294 \ubb34\uc870\uac74 ",(0,i.kt)("inlineCode",{parentName:"p"},"DeferredRegister#register"),"\ub97c \ud1b5\ud574 \ubaa8\ub4dc \ubc84\uc2a4\uc5d0 \ub4f1\ub85d\ub418\uae30 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc5b4\uc57c\ub9cc \ud569\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"\ub204\ub77d\ub41c-\ud56d\ubaa9-\ucc98\ub9ac\ud558\uae30"},"\ub204\ub77d\ub41c \ud56d\ubaa9 \ucc98\ub9ac\ud558\uae30"),(0,i.kt)("p",null,"\ubaa8\ub4dc\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uac70\ub098 \uc81c\uac70\ub418\uc5c8\uc744 \ub54c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc758 \uac1d\uccb4\uac00 \ub204\ub77d\ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c ",(0,i.kt)("inlineCode",{parentName:"p"},"MissingMappingsEvent"),"\uac00 \ubc29\uc1a1\ub418\ub294\ub370, ",(0,i.kt)("inlineCode",{parentName:"p"},"#getMappings"),"\uc5d0 \ub9e4\ud551\uc744 \ubc1b\uc544\uc62c \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc758 \ud0a4\uc640 \ubaa8\ub4dc \uc544\uc774\ub514\ub97c \uc804\ub2ec\ud574 \ub204\ub77d\ub41c \ub9e4\ud551 \ub9ac\uc2a4\ud2b8\ub97c \ubc1b\uc544\uc62c \uc218 \uc788\uc73c\uba70, ",(0,i.kt)("inlineCode",{parentName:"p"},"#getAllMappings"),"\ub97c \ud1b5\ud574 \ubaa8\ub4dc \uc544\uc774\ub514\uc640 \uad00\ub828 \uc5c6\uc774 \ub204\ub77d\ub41c \ubaa8\ub4e0 \ub9e4\ud551\ub4e4\uc744 \ubc1b\uc544\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"MissingMappingsEvent"),"\ub294 \ub2e4\ub978 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ubca4\ud2b8\uc640 \ub2e4\ub974\uac8c ",(0,i.kt)("strong",{parentName:"p"},"\ud3ec\uc9c0")," \ubc84\uc2a4\uc5d0\uc11c \ubc29\uc1a1\ub429\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\uac01 \ub9e4\ud551\ub9c8\ub2e4 \uc544\ub798 4\uac00\uc9c0 \uba54\uc11c\ub4dc\uc911 \ud558\ub098\ub97c \ud638\ucd9c\ud558\uc5ec \ub204\ub77d\ub41c \ud56d\ubaa9\uc744 \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560\uc9c0 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\uba54\uc11c\ub4dc"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\uc124\uba85"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Mapping#ignore")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ub204\ub77d\ub41c \ud56d\ubaa9\uc744 \ubc84\ub9bd\ub2c8\ub2e4.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Mapping#warn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ub85c\uadf8\uc5d0 \uacbd\uace0\ub97c \ub744\uc6c1\ub2c8\ub2e4.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Mapping#fail")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\uc6d4\ub4dc\ub97c \ubd88\ub7ec\uc624\ub294 \uac83\uc744 \ub9c9\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Mapping#remap(T target)")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ub2e4\ub978 \ud56d\ubaa9\uc73c\ub85c \ub300\uccb4\ud569\ub2c8\ub2e4.")))),(0,i.kt)("p",null,"\ub9cc\uc57d \ub204\ub77d\ub41c \ud56d\ubaa9\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc774 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74 \ud50c\ub808\uc774\uc5b4\uc5d0\uac8c \uc774\uc5d0 \ub300\ud574 \uc54c\ub9ac\uace0 \uc6d4\ub4dc\ub97c \uacc4\uc18d \ubd88\ub7ec\uc62c \uac83\uc778\uc9c0 \ubb3c\uc5b4\ubd05\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"remap"),"\uc81c\uc678\ud55c \ub2e4\ub978 \ub3d9\uc791\uc758 \uacbd\uc6b0 \ub204\ub77d\ub41c \ud56d\ubaa9\uc774 \ub2e4\uc2dc \ucd94\uac00\ub420 \uc218 \uc788\uc73c\ub2c8 \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc774 \ub204\ub77d\ub41c \ud56d\ubaa9\uc758 id\ub97c \ub300\uccb4\ud558\ub294 \uac83\uc744 \ub9c9\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);