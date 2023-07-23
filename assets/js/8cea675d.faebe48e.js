"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2895],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={},o="\uc774\ubca4\ud2b8",l={unversionedId:"concepts/events",id:"concepts/events",title:"\uc774\ubca4\ud2b8",description:"\ud3ec\uc9c0\ub294 \uc774\ubca4\ud2b8 \ubc84\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \uc5ec\ub7ec \ubaa8\ub4dc\ub4e4\uc774 \ubc14\ub2d0\ub77c \ub9c8\uc778\ud06c\ub798\ud504\ud2b8\uc758 \uc5ec\ub7ec \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4.",source:"@site/docs/concepts/events.md",sourceDirName:"concepts",slug:"/concepts/events",permalink:"/Neoforge-Korean-Documentation/docs/concepts/events",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\ube14\ub85d\uc758 \uc0c1\ud0dc",permalink:"/Neoforge-Korean-Documentation/docs/blocks/states"},next:{title:"\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0",permalink:"/Neoforge-Korean-Documentation/docs/concepts/internationalization"}},p={},d=[{value:"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ub9cc\ub4e4\uae30",id:"\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec-\ub9cc\ub4e4\uae30",level:2},{value:"\uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud65c\uc6a9\ud55c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec",id:"\uc5b4\ub178\ud14c\uc774\uc158\uc744-\ud65c\uc6a9\ud55c-\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec",level:3},{value:"\uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud65c\uc6a9\ud55c \uc815\uc801 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec",id:"\uc5b4\ub178\ud14c\uc774\uc158\uc744-\ud65c\uc6a9\ud55c-\uc815\uc801-\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec",level:3},{value:"\uc790\ub3d9\uc73c\ub85c \uc815\uc801 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ub4f1\ub85d\ud558\uae30",id:"\uc790\ub3d9\uc73c\ub85c-\uc815\uc801-\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec-\ub4f1\ub85d\ud558\uae30",level:3},{value:"\uc774\ubca4\ud2b8 \ucde8\uc18c\ud558\uae30",id:"\uc774\ubca4\ud2b8-\ucde8\uc18c\ud558\uae30",level:2},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:2},{value:"\uc6b0\uc120\uc21c\uc704",id:"\uc6b0\uc120\uc21c\uc704",level:2},{value:"\uc774\ubca4\ud2b8 \uc0c1\uc18d",id:"\uc774\ubca4\ud2b8-\uc0c1\uc18d",level:2},{value:"\ubaa8\ub4dc \uc774\ubca4\ud2b8 \ubc84\uc2a4",id:"\ubaa8\ub4dc-\uc774\ubca4\ud2b8-\ubc84\uc2a4",level:2}],c={toc:d},u="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc774\ubca4\ud2b8"},"\uc774\ubca4\ud2b8"),(0,r.kt)("p",null,"\ud3ec\uc9c0\ub294 \uc774\ubca4\ud2b8 \ubc84\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \uc5ec\ub7ec \ubaa8\ub4dc\ub4e4\uc774 \ubc14\ub2d0\ub77c \ub9c8\uc778\ud06c\ub798\ud504\ud2b8\uc758 \uc5ec\ub7ec \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \ub9c9\ub300\uae30\ub97c \uc6b0\ud074\ub9ad \ud558\uc600\uc744\ub54c \uc774\ubca4\ud2b8\uac00 \ubc29\uc1a1\ub418\uace0 \ubaa8\ub4dc\ub294 \uc774\uc5d0 \ubc18\uc751\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uac8c\uc784\uc18d \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"MinecraftForge#EVENT_BUS"),"\uc5d0 \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uc774 \ubc84\uc2a4\ub294 \ubaa8\ub4e0 \ubaa8\ub4dc\uac00 \uacf5\uc720\ud569\ub2c8\ub2e4. \uac00\ub054 \ubaa8\ub4dc \uac01\uac01\uc5d0\ub9cc \uc774\ubca4\ud2b8\ub97c \ubc29\uc1a1\ud574\uc57c \ud560 \ub54c\ub3c4 \uc788\ub294\ub370, \uc774\ub550 \uac01 \ubaa8\ub4dc\ubcc4\ub85c \ud3ec\uc9c0\uac00 \uc0dd\uc131\ud558\ub294 ",(0,r.kt)("a",{parentName:"p",href:"#%EB%AA%A8%EB%93%9C-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EC%8A%A4"},"\ubaa8\ub4dc \uc774\ubca4\ud2b8 \ubc84\uc2a4")," ",(0,r.kt)("inlineCode",{parentName:"p"},"FMLJavaModLoadingContext#getModEventBus"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubaa8\ub4e0 \uc774\ubca4\ud2b8\ub294 \uc774 \ub450\uac00\uc9c0 \ubc84\uc2a4\uc911 \ud558\ub098\uc5d0 \ubc29\uc1a1\ub429\ub2c8\ub2e4: \ub300\ubd80\ubd84\uc758 \uc774\ubca4\ud2b8\ub294 \uc8fc \ud3ec\uc9c0 \ubc84\uc2a4\uc5d0\uc11c \ubc29\uc1a1\ub418\uc9c0\ub9cc, \uadf8\uc911 \uc77c\ubd80\ub294 \ubaa8\ub4dc\ubcc4 \ubc84\uc2a4\uc5d0\uc11c \ubc29\uc1a1\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \uc774\ubca4\ud2b8 \ubc84\uc2a4\uc5d0 \ub4f1\ub85d\ub418\uc5b4, \ud2b9\uc815 \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud558\ub294 \uba54\uc11c\ub4dc \uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec-\ub9cc\ub4e4\uae30"},"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ub9cc\ub4e4\uae30"),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \uba54\uc11c\ub4dc\ub4e4\uc740 \uacb0\uacfc\ub97c \ubc18\ud658\ud558\uc9c0 \uc54a\uace0 \uc778\uc790\uac00 \ud558\ub098\ub9cc \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub4e4\uc740 \uc815\uc801\uc774\uc5b4\ub3c4 \ub418\uace0 \uc544\ub2c8\uc5b4\ub3c4 \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub4e4\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"IEventBus#addListener"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc14\ub85c \ub4f1\ub85d\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \uc774\ubca4\ud2b8\uac00 \uc81c\ub108\ub9ad \ud074\ub798\uc2a4\uc774\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericEvent<T>")," \uc758 \uc790\uc2dd \ud074\ub798\uc2a4\uc77c \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"IEventBus#addGenericListener"),"\ub97c \ub300\uc2e0 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4, \ub458 \ub2e4 \uc804\ub2ec\ub420 \uba54\uc11c\ub4dc\ub97c \ud45c\ud604\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer"),"\ub97c \uc778\uc790\ub85c \ubc1b\uc2b5\ub2c8\ub2e4. \uc81c\ub108\ub9ad \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud560 \ud578\ub4e4\ub7ec\ub4e4\uc740 \ud0c0\uc785 \uc778\uc790\ub610\ud55c \uc804\ub2ec\ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4. \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub4e4\uc740 \ubb34\uc870\uac74 \ubaa8\ub4dc\uc758 \uba54\uc778 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790\uc5d0\uc11c \ub4f1\ub85d\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// ExampleMod\ub77c\ub294 \ubaa8\ub4dc \uba54\uc778 \ud074\ub798\uc2a4\n\n// \uc774 \uc774\ubca4\ud2b8\ub294 \ubaa8\ub4dc \ubc84\uc2a4\uc5d0\uc11c \ubc29\uc1a1\ub429\ub2c8\ub2e4\nprivate void modEventHandler(RegisterEvent event) {\n    // Do things here\n}\n\n// \uc774 \uc774\ubca4\ud2b8\ub294 \ud3ec\uc9c0 \ubc84\uc2a4\uc5d0\uc11c \ubc29\uc1a1\ub429\ub2c8\ub2e4\nprivate static void forgeEventHandler(AttachCapabilitiesEvent<Entity> event) {\n    // ...\n}\n\n// \ubaa8\ub4dc\uc758 \uc0dd\uc131\uc790\nmodEventBus.addListener(this::modEventHandler);\nforgeEventBus.addGenericListener(Entity.class, ExampleMod::forgeEventHandler);\n")),(0,r.kt)("h3",{id:"\uc5b4\ub178\ud14c\uc774\uc158\uc744-\ud65c\uc6a9\ud55c-\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec"},"\uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud65c\uc6a9\ud55c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,"\uc774 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityItemPickupEvent")," \uc5d0 \ubc18\uc751\ud569\ub2c8\ub2e4, \uc774\ub984\uc5d0\uc11c \uc54c \uc218 \uc788\ub2e4\uc2f6\uc774, ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," \uac00 \uc544\uc774\ud15c\uc744 \uc8fc\uc6b8 \ub54c \ubaa8\ub4dc \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class MyForgeEventHandler {\n    @SubscribeEvent\n    public void pickupItem(EntityItemPickupEvent event) {\n        System.out.println("\uc544\uc774\ud15c\uc744 \uc8fc\uc6e0\uc2b5\ub2c8\ub2e4!!");\n    }\n}\n')),(0,r.kt)("p",null,"\uc774 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ub4f1\ub85d\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MinecraftForge.EVENT_BUS.register(...)"),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694. \uadf8\ub9ac\uace0 \uc774 \uba54\uc11c\ub4dc\uc5d0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \uba54\uc11c\ub4dc\uac00 \uc788\ub294 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \uc804\ub2ec\ud558\uc138\uc694. \ub9cc\uc57d \ud578\ub4e4\ub7ec\ub97c \ubaa8\ub4dc\ubcc4 \ubc84\uc2a4\uc5d0 \ub4f1\ub85d\ud558\uace0 \uc2f6\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"FMLJavaModLoadingContext.get().getModEventBus().register(...)"),"\ub97c \ub300\uc2e0 \uc0ac\uc6a9\ud558\uc138\uc694."),(0,r.kt)("h3",{id:"\uc5b4\ub178\ud14c\uc774\uc158\uc744-\ud65c\uc6a9\ud55c-\uc815\uc801-\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec"},"\uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud65c\uc6a9\ud55c \uc815\uc801 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc815\uc801\uc73c\ub85c \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\uc5d0\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"@SubscribeEvent")," \uc5b4\ub178\ud14c\uc774\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc704\uc5d0\uc11c \uc0ac\uc6a9\ud55c \uc778\uc2a4\ud134\uc2a4\ub97c \ud1b5\ud55c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc640\uc758 \ucc28\uc774\uc810\uc740 \uba54\uc11c\ub4dc\uac00 \uc815\uc801\uc774\ub77c\ub294 \uac83\uc785\ub2c8\ub2e4. \uc815\uc801 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ub4f1\ub85d\ud558\uae30 \uc704\ud574\uc11c\ub294 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \uc544\ub2c8\uace0, \ud074\ub798\uc2a4 \uadf8 \uc790\uccb4\uac00 \uc804\ub2ec\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uadf8 \uc608\ub85c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class MyStaticForgeEventHandler {\n    @SubscribeEvent\n    public static void arrowNocked(ArrowNockEvent event) {\n        System.out.println("\ud654\uc0b4 \ub2f9\uaca8\uc9d0!");\n    }\n}\n')),(0,r.kt)("p",null,"\uc774\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MinecraftForge.EVENT_BUS.register(MyStaticForgeEventHandler.class)"),"\ub97c \ud1b5\ud574 \ub4f1\ub85d\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc790\ub3d9\uc73c\ub85c-\uc815\uc801-\uc774\ubca4\ud2b8-\ud578\ub4e4\ub7ec-\ub4f1\ub85d\ud558\uae30"},"\uc790\ub3d9\uc73c\ub85c \uc815\uc801 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ub4f1\ub85d\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Mod$EventBusSubscriber")," \uc5b4\ub178\ud14c\uc774\uc158\uc740 \ud074\ub798\uc2a4\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \uc774\ub97c \uc0ac\uc6a9\ud560 \uc2dc, \uadf8 \ud074\ub798\uc2a4\ub294 \uc790\ub3d9\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"MinecraftForge#EVENT_BUS")," \uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Mod")," \ud074\ub798\uc2a4\uac00 \ucd08\uae30\ud654\ub420 \ub54c \ub4f1\ub85d\ub429\ub2c8\ub2e4. \uc774\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"MinecraftForge.EVENT_BUS.register(AnnotatedClass.class)")," \uad6c\ubb38\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Mod")," \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Mod$EventBusSubscriber")," \ub294 \uc544\ubb34 \ubc84\uc2a4\ub098 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc0ac\uc6a9\ud560 \ub54c \ubaa8\ub4dc\uc758 \uc544\uc774\ub514\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc774 \uad8c\uc7a5\ub418\ub294\ub370, \uc774\ub294 \uc5b4\ub178\ud14c\uc774\uc158\ub9cc\uc73c\ub85c\ub294 \ubb34\uc2a8 \ubaa8\ub4dc\uc758 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc778\uc9c0 \uad6c\ubcc4\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub610, \uc774\ubca4\ud2b8\ub97c \ub4e4\uc744 \ubc84\uc2a4\ub97c \uc804\ub2ec\ud558\ub294 \uac83 \ub610\ud55c \uad8c\uc7a5\ub418\ub294\ub370, \ubb34\uc2a8 \ubc84\uc2a4\uc758 \uc774\ubca4\ud2b8\ub97c \ub4e3\ub294\uc9c0 \ud45c\uc2dc\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub610, ",(0,r.kt)("inlineCode",{parentName:"p"},"Dist")," \uac12\uc744 \uc9c0\uc815\ud558\uc5ec \uc5b4\ub5a4 \ubb3c\ub9ac \uc0ac\uc774\ub4dc\uc5d0\uc11c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \ub3d9\uc791\ud560 \uac83\uc778\uc9c0\ub97c \uc124\uc815\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ud2b9\uc815 \ubb3c\ub9ac \uc0ac\uc774\ub4dc\uc5d0\uc11c\ub294 \uc544\uc608 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \ub4f1\ub85d\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \uc774\uc6a9\ud55c, ",(0,r.kt)("inlineCode",{parentName:"p"},"RenderLevelStageEvent")," \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud558\ub294, \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\ub9cc \uc874\uc7ac\ud558\ub294 \uc815\uc801 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Mod.EventBusSubscriber(modid = "mymod", bus = Bus.FORGE, value = Dist.CLIENT)\npublic class MyStaticClientOnlyEventHandler {\n    @SubscribeEvent\n    public static void drawLast(RenderLevelStageEvent event) {\n        System.out.println("\uc6d4\ub4dc \uadf8\ub9ac\ub294\uc911!");\n    }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\uc774\ub97c \uc774\uc6a9\ud558\uba74 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \uc544\ub2cc \ud074\ub798\uc2a4 \uadf8 \uc790\uccb4\uac00 \ub4f1\ub85d\ub429\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 \ub4f1\ub85d\ub418\ub294 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \uc815\uc801\uc774\uc5b4\uc57c \uc81c\ub300\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4!")),(0,r.kt)("h2",{id:"\uc774\ubca4\ud2b8-\ucde8\uc18c\ud558\uae30"},"\uc774\ubca4\ud2b8 \ucde8\uc18c\ud558\uae30"),(0,r.kt)("p",null,"\ucde8\uc18c\ud560 \uc218 \uc788\ub294 \uc774\ubca4\ud2b8\ub294 \ud074\ub798\uc2a4 \uc815\uc758\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Cancelable"),"\ub85c \ud45c\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\ubca4\ud2b8\ub4e4\uc740 \ud3ec\uc9c0\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Event#isCancelable"),"\uc758 \ud568\uc218 \ubcf8\ubb38\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"return true"),"\ub97c \uc8fc\uc785\ud558\uc5ec \uc5b8\uc81c\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\ub97c \ubc18\ud658\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc774\ubca4\ud2b8\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event#setCanceled(boolean canceled)"),"\ub97c \ud1b5\ud574 \ucde8\uc18c\ud560 \uc218 \uc788\uc73c\uba70, ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),'\ub97c \uc778\uc790\ub85c \uc804\ub2ec\ud558\ub294 \uac83\uc73c\ub85c "\ucde8\uc18c\ub97c \ucde8\uc18c"\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@Cancelable"),"\uc774 \uc5c6\ub294 \uc774\ubca4\ud2b8\ub97c \ucde8\uc18c\ud558\ub824\uace0 \ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"UnsuppoortedOperationException"),"\uac00 \ubc1c\uc0dd\ud574 \uac8c\uc784\uc774 \ucda9\ub3cc\ud558\uac8c \ub429\ub2c8\ub2e4!")),(0,r.kt)("h2",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,r.kt)("p",null,"\uba87\uba87 \uc774\ubca4\ud2b8\ub4e4\uc740 \ucde8\uc18c \uc5ec\ubd80 \ud655\uc778\ub9cc\uc73c\ub860 \ucda9\ubd84\ud55c \ud750\ub984 \uc81c\uc5b4\ub97c \ud560 \uc218 \uc5c6\uc5b4 ",(0,r.kt)("inlineCode",{parentName:"p"},"DENY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ALLOW")," \uc774 \uc138\uac00\uc9c0 \uacb0\uacfc\ub97c \ud45c\ud604\ud560 \uc218 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event$Result"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"@HasResult"),"\ub85c \ud45c\uc2dc\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"DENY"),"\ub294 \ucc98\ub9ac \uc911\ub2e8, ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT"),"\ub294 \uae30\ubcf8 \ubc14\ub2d0\ub77c \ub85c\uc9c1 \uc2e4\ud589, ",(0,r.kt)("inlineCode",{parentName:"p"},"ALLOW"),"\ub294 \uac15\uc81c \ub3d9\uc791 \uc2e4\ud589\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uacb0\uacfc\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Event#setResult"),"\ub97c \uc0ac\uc6a9\ud574 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\uac01 \uc774\ubca4\ud2b8\ub4e4\uc774 \uacb0\uacfc\ub97c \uc751\uc6a9\ud558\ub294 \ubc29\uc2dd\uc740 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0 \uc774\ubca4\ud2b8\uc758 Javadoc\uc744 \ucda9\ubd84\ud788 \uc219\uc9c0\ud558\ub3c4\ub85d \ud558\uc138\uc694!")),(0,r.kt)("h2",{id:"\uc6b0\uc120\uc21c\uc704"},"\uc6b0\uc120\uc21c\uc704"),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc758 \uc2e4\ud589 \uc21c\uc11c\uc5d0\ub294 \uc6b0\uc120\uc21c\uc704\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"@SubscribeEvent"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"IEventBus#addListener"),"\ub294 \uc6b0\uc120\uc21c\uc704\ub97c \uc9c0\uc815\ud558\uae30 \uc704\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"priority"),"\ub97c \uc120\ud0dd \uc778\uc790\ub85c \ubc1b\uc2b5\ub2c8\ub2e4. \uc6b0\uc120\uc21c\uc704\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"EventPriority")," \uc5f4\uac70\ud615\uc73c\ub85c \uc815\uc758\ub418\ub294\ub370, (",(0,r.kt)("inlineCode",{parentName:"p"},"HIGHEST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HIGH"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NORMAL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LOW"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LOWEST"),")\uac00 \uc788\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"HIGHEST"),"\uc758 \uc6b0\uc120\uc21c\uc704\uac00 \uac00\uc7a5 \ub192\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"LOWEST"),"\uac00 \uac00\uc7a5 \ub0ae\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc774\ubca4\ud2b8-\uc0c1\uc18d"},"\uc774\ubca4\ud2b8 \uc0c1\uc18d"),(0,r.kt)("p",null,"\uc77c\ubd80 \uc774\ubca4\ud2b8\ub4e4\uc740 \uc5ed\ud560\uc744 \uc138\ubd80\uc801\uc73c\ub85c \ub098\ub204\uac70\ub098 \ud558\ub098\uc758 \ubc94\uc8fc\ub85c \ubb36\uae30 \uc704\ud574 \uc0c1\uc18d\uc744 \uc0ac\uc6a9\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \ubc18\uc751\ud560 \uc774\ubca4\ud2b8\uc758 \ubaa8\ub4e0 \uc790\uc2dd\ud074\ub798\uc2a4\uc5d0\ub3c4 \ubc18\uc751\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubaa8\ub4dc-\uc774\ubca4\ud2b8-\ubc84\uc2a4"},"\ubaa8\ub4dc \uc774\ubca4\ud2b8 \ubc84\uc2a4"),(0,r.kt)("p",null,"\ubaa8\ub4dc \uc774\ubca4\ud2b8 \ubc84\uc2a4\ub294 \uac01 \ubaa8\ub4dc \uc804\uc6a9\uc73c\ub85c \uc0dd\uc131\ub429\ub2c8\ub2e4. \ubb34\uc2a8 \ubaa8\ub4dc\uac00 \uc5b8\uc81c \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud560 \uc9c0 \uc870\uc808\ud558\uac70\ub098 \ubcd1\ub82c\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\ub294 \uc774\ubca4\ud2b8\ub97c \ubc29\uc1a1\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ubaa8\ub4dc \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub418\ub294 \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"IModBusEvent")," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \uadf8\uc911 \ubcd1\ub82c\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\ub294 \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"ParallelDispatchEvent"),"\ub97c \uc0c1\uc18d\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ubaa8\ub4dc \uc774\ubca4\ud2b8 \ubc84\uc2a4\uc5d0\ub294 \ub300\ud45c\uc801\uc73c\ub85c \uc544\ub798 ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/lifecycle"},"\uc0dd\uba85\uc8fc\uae30")," \uc774\ubca4\ud2b8\ub4e4\uc774 \ubc29\uc1a1\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FMLCommonSetupEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FMLClientSetupEvent"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"FMLDedicatedServerSetupEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InterModEnqueueEvent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InterModProcessEvent"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"FMLClientSetupEvent")," \uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"FMLDedicatedServerSetupEvent")," \ub294 \uc62c\ubc14\ub978 \ubc30\ud3ec\ud310\uc5d0\uc11c\ub9cc \ubc29\uc1a1\ub429\ub2c8\ub2e4!")),(0,r.kt)("p",null,"\uc704 \uc0dd\uba85\uc8fc\uae30 \uc774\ubca4\ud2b8\ub4e4\uc740 \ubaa8\ub450 \ubcd1\ub82c\uc801\uc73c\ub85c \ucc98\ub9ac\ub429\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\ubca4\ud2b8\ub4e4\uc740 \uc5ec\ub7ec \uc2a4\ub808\ub4dc\uc5d0\uc11c \ucc98\ub9ac\ub418\uc5b4 \uacbd\uc7c1 \uc0c1\ud0dc\ub97c \uc720\ubc1c\ud560 \uc218 \uc788\ub294\ub370, \uc774\ub7f4\ub550 \uba54\uc778 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"#enqueueWork"),"\ub97c \uc0ac\uc6a9\ud558\uc138\uc694."))}s.isMDXComponent=!0}}]);