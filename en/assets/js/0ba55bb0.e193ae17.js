"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1278],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},C=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(t),C=a,k=d["".concat(l,".").concat(C)]||d[C]||s[C]||i;return t?o.createElement(k,r(r({ref:n},c),{},{components:t})):o.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=C;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:a,r[1]=p;for(var m=2;m<i;m++)r[m]=t[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}C.displayName="MDXCreateElement"},9045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var o=t(7462),a=(t(7294),t(3905));const i={},r="\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0",p={unversionedId:"concepts/internationalization",id:"concepts/internationalization",title:"\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0",description:"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub294 \ub2e4\uad6d\uc5b4\ub97c \uad6d\uc81c\ud654(Internationalization, i18n\ub77c\uace0 \ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4.)\uc640 \ud604\uc9c0\ud654\ub97c \ud1b5\ud574 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uad6d\uc81c\ud654\ub294 \ub2e4\uc591\ud55c \uc5b8\uc5b4\ub97c \uc9c0\uc6d0\ud560\ub54c \ucf54\ub4dc\uc758 \ubcc0\uacbd\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub294 \uc124\uacc4 \ubc29\ubc95\uc785\ub2c8\ub2e4, \uadf8\ub9ac\uace0 \ud604\uc9c0\ud654\ub294 \ud45c\uc2dc\ub418\ub294 \uae00\uc790\ub4e4\uc744 \uc720\uc800\uc758 \uc5b8\uc5b4\uc5d0 \ub9de\uac8c \ubc14\uafb8\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4.",source:"@site/docs/concepts/internationalization.md",sourceDirName:"concepts",slug:"/concepts/internationalization",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/internationalization",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\uc774\ubca4\ud2b8",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/events"},next:{title:"Mod Lifecycle",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/lifecycle"}},l={},m=[{value:"\uc5b8\uc5b4 \ud30c\uc77c",id:"\uc5b8\uc5b4-\ud30c\uc77c",level:2},{value:"\ube14\ub85d\uacfc \uc544\uc774\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30",id:"\ube14\ub85d\uacfc-\uc544\uc774\ud15c\uc5d0\uc11c-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"<code>Component</code> and <code>ComponentContents</code>",id:"component-and-componentcontents",level:2},{value:"\ud604\uc9c0\ud654 \ud558\ub294\ubc95",id:"\ud604\uc9c0\ud654-\ud558\ub294\ubc95",level:2},{value:"<code>net.minecraft.client.resources.language.I18n</code> (\ud074\ub77c\uc774\uc5b8\ud2b8 \uc804\uc6a9)",id:"netminecraftclientresourceslanguagei18n-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc804\uc6a9",level:3},{value:"<code>TranslatableContents</code>",id:"translatablecontents",level:3},{value:"<code>TextComponentHelper</code>",id:"textcomponenthelper",level:3}],c={toc:m},d="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ub2e4\uad6d\uc5b4-\uc9c0\uc6d0"},"\ub2e4\uad6d\uc5b4 \uc9c0\uc6d0"),(0,a.kt)("p",null,"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\ub294 \ub2e4\uad6d\uc5b4\ub97c \uad6d\uc81c\ud654(Internationalization, i18n\ub77c\uace0 \ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4.)\uc640 \ud604\uc9c0\ud654\ub97c \ud1b5\ud574 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uad6d\uc81c\ud654\ub294 \ub2e4\uc591\ud55c \uc5b8\uc5b4\ub97c \uc9c0\uc6d0\ud560\ub54c \ucf54\ub4dc\uc758 \ubcc0\uacbd\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub294 \uc124\uacc4 \ubc29\ubc95\uc785\ub2c8\ub2e4, \uadf8\ub9ac\uace0 \ud604\uc9c0\ud654\ub294 \ud45c\uc2dc\ub418\ub294 \uae00\uc790\ub4e4\uc744 \uc720\uc800\uc758 \uc5b8\uc5b4\uc5d0 \ub9de\uac8c \ubc14\uafb8\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uad6d\uc81c\ud654\uc640 \ud604\uc9c0\ud654\ub294 \ubb38\uc790\uc5f4 \uce58\ud658\uc744 \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \uad6d\uc81c\ud654\ub294 ",(0,a.kt)("em",{parentName:"p"},"\ubc88\uc5ed \ud0a4\uac12"),'\uc744 \uc0ac\uc6a9\ud558\ub294\ub370, \ubc88\uc5ed \ud0a4\uac12\uc740 \ud45c\uc2dc \uac00\ub2a5\ud55c \ud14d\uc2a4\ud2b8\ub85c \uce58\ud658 \uac00\ub2a5\ud55c \ubb38\uc790\uc5f4\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud759 \ube14\ub85d\uc758 \uc774\ub984 "Dirt" \ub294 ',(0,a.kt)("inlineCode",{parentName:"p"},"block.minecraft.dirt")," \ub77c\ub294 \ubc88\uc5ed \ud0a4\uac12\uc744 \ud45c\uc2dc \uac00\ub2a5\ud55c \ud14d\uc2a4\ud2b8\ub85c \uce58\ud658\ud558\uc5ec \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ud45c\uc2dc \uac00\ub2a5\ud55c \ud14d\uc2a4\ud2b8\ub4e4\uc744 \uc0ac\uc6a9\uc790\uc758 \uc5b8\uc5b4\uc5d0 \uad00\uacc4\uc5c6\uc774 \ucc38\uc870\ud560 \uc218 \uc788\uc73c\uba70, \uc0c8\ub85c\uc6b4 \uc5b8\uc5b4\ub97c \uc9c0\uc6d0\ud558\uae30 \uc704\ud574 \uac8c\uc784\uc758 \ucf54\ub4dc\ub97c \uc218\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud604\uc9c0\ud654\ub294 \uac8c\uc784\uc758 \uc5b8\uc5b4 \uc124\uc815\uc744 \ub530\ub77c \uc9c4\ud589\ub429\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c\ub294 \uc5b8\uc5b4 \uc124\uc815\uc5d0\uc11c \ub2e4\ub978 \uad6d\uac00\uc758 \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc804\uc6a9 \uc11c\ubc84\uc5d0\uc11c\ub294 \uc624\uc9c1 ",(0,a.kt)("inlineCode",{parentName:"p"},"en_us")," (\uc601\uc5b4)\ub9cc\uc774 \uc9c0\uc6d0\ub429\ub2c8\ub2e4. \uc9c0\uc6d0\ub418\ub294 \uc5b8\uc5b4\ub4e4\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/ko/wiki/%EC%96%B8%EC%96%B4"},"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8 \uc704\ud0a4"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc5b8\uc5b4-\ud30c\uc77c"},"\uc5b8\uc5b4 \ud30c\uc77c"),(0,a.kt)("p",null,"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8\uac00 \uc9c0\uc6d0\ud558\ub294 \uc5b8\uc5b4\ub4e4\uc740 \uadf8 \uc5b8\uc5b4\uc6a9 \uc5b8\uc5b4 \ud30c\uc77c\uc774 \uac01\uac01 \uc874\uc7ac\ud558\uace0, \uc774 \uc5b8\uc5b4 \ud30c\uc77c\ub4e4\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"asset/[\ub124\uc784 \uc2a4\ud398\uc774\uc2a4]/lang/[\uc5b8\uc5b4 \ucf54\ub4dc].json")," \uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4. (\uc608: ",(0,a.kt)("inlineCode",{parentName:"p"},"examplemod"),"\ub97c \ubaa8\ub4dc \uc544\uc774\ub514\ub85c \uac00\uc9c0\ub294 \ubaa8\ub4dc\uc758 \ud55c\uad6d\uc5b4 \uc5b8\uc5b4 \ud30c\uc77c\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/examplemod/lang/ko_kr.json")," \uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4.) \uc774 \ud30c\uc77c\uc740 \ubc88\uc5ed \ud0a4\uac12\uc744 \uc2e4\uc81c \ud14d\uc2a4\ud2b8\ub85c \ubcc0\ud658\ud574\uc8fc\ub294 \uac04\ub2e8\ud55c json \ud30c\uc77c \uc785\ub2c8\ub2e4. \uc5b8\uc5b4 \ud30c\uc77c\ub4e4\uc758 \uc778\ucf54\ub529\uc740 \ubb34\uc870\uac74 UTF-8\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uad6c\ubc84\uc804 .lang \ud30c\uc77c\ub4e4\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://tterrag.com/lang2json/"},"\ubcc0\ud658\uae30"),"\ub97c \ud1b5\ud574 .json\uc73c\ub85c \ubcc0\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},".lang")," \ud30c\uc77c\uc758 \uac01 \uc904\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"<\ubc88\uc5ed \ud0a4\uac12>"),":",(0,a.kt)("inlineCode",{parentName:"p"},"<\ud14d\uc2a4\ud2b8>")," \ud615\uc2dd\uc73c\ub85c \uc791\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "item.examplemod.example_item": "\uc608\uc2dc \uc544\uc774\ud15c \uc774\ub984",\n  "block.examplemod.example_block": "\uc608\uc2dc \ube14\ub85d \uc774\ub984",\n  "commands.examplemod.examplecommand.error": "\uc608\uc2dc \ucee4\ub9e8\ub4dc \uc624\ub958!"\n}\n')),(0,a.kt)("h2",{id:"\ube14\ub85d\uacfc-\uc544\uc774\ud15c\uc5d0\uc11c-\uc0ac\uc6a9\ud558\uae30"},"\ube14\ub85d\uacfc \uc544\uc774\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("p",null,"\ube14\ub85d, \uc544\uc774\ud15c, \ub3c4\uc804\uacfc\uc81c\uc640 \uac19\uc740 \uac8c\uc784\uc758 \uc5ec\ub7ec \uc694\uc18c\ub4e4\uc740 \ubc88\uc5ed \ud0a4\uac12\uc758 \ud615\ud0dc\uac00 \uc815\ud574\uc838\uc788\ub294\ub370, \uc544\uc774\ud15c\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"item.<\ub124\uc784 \uc2a4\ud398\uc774\uc2a4>.<\uacbd\ub85c>"),", \ube14\ub85d\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"block.<\ub124\uc784 \uc2a4\ud398\uc774\uc2a4>.<\uacbd\ub85c>")," \uc640 \uac19\uc740 \ud615\ud0dc\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud615\ud0dc\ub294 \uac01 \ud074\ub798\uc2a4\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"#getDescriptionId")," \uba54\uc11c\ub4dc\uc5d0\uc11c \uc815\ud569\ub2c8\ub2e4. \ub610, \uc544\uc774\ud15c\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"#getDescriptionId(ItemStack)")," \uba54\uc11c\ub4dc\ub3c4 \uc788\ub294\ub370, \uc774 \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758\ud558\uc5ec \uc544\uc774\ud15c\uc758 NBT\uc5d0 \ub530\ub77c \ub2e4\ub978 \ubc88\uc5ed \ud0a4\uac12\uc744 \uc0ac\uc6a9\ud558\uc2e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"#getDescriptionId"),' \ub294 \ub300\uac1c \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984\uc758 \uacb9\uc810(:)\uc744 \uc810\uc73c\ub85c \ub300\uccb4\ud55c \uac83(\uc608: "examplemod:example_item" -> "examplemod.example_item") \uc55e\uc5d0 ',(0,a.kt)("inlineCode",{parentName:"p"},"block.")," \uc774\ub098 ",(0,a.kt)("inlineCode",{parentName:"p"},"item."),' \uc774 \ubd99\uc740 \ubb38\uc790\uc5f4\uc744 \ubc88\uc5ed \ud0a4\uac12\uc73c\ub85c \ubc18\ud658\ud569\ub2c8\ub2e4(\uc608: "item.examplemod.example_item"). ',(0,a.kt)("inlineCode",{parentName:"p"},"BlockItem")," \uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Item#getDescriptionId"),"\ub97c \uc7ac\uc815\uc758\ud558\uc5ec \uc790\uc2e0\uc774 \uc0c1\uc9d5\ud558\ub294 \ube14\ub85d\uc758 \ubc88\uc5ed \ud0a4\uac12\uc744 \ub300\uc2e0 \uc0ac\uc6a9\ud558\ub3c4\ub85d \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc544\uc774\ud15c ",(0,a.kt)("inlineCode",{parentName:"p"},"examplemod:example_item")," \uc758 \uc774\ub984\uc740 \ub2e4\uc74c\ucc98\ub7fc \uc9c0\uc815\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "item.examplemod.example_item": "\uc608\uc2dc \uc544\uc774\ud15c \uc774\ub984"\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\ubc88\uc5ed \ud0a4\uac12\uc740 \ud14d\uc2a4\ud2b8 \uc2dd\ubcc4\uc744 \uc704\ud55c \uac83\uc77c \ubfd0\uc785\ub2c8\ub2e4, \uc774\ub97c \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uac1d\uccb4\ub97c \uad6c\ubd84\ud558\ub294\ub370 \uc0ac\uc6a9\ud558\uc9c0 \ub9c8\uc138\uc694, \uaf2d \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ub984\uc744 \ub300\uc2e0 \uc0ac\uc6a9\ud558\uc138\uc694!")),(0,a.kt)("h2",{id:"component-and-componentcontents"},(0,a.kt)("inlineCode",{parentName:"h2"},"Component")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"ComponentContents")),(0,a.kt)("p",null,"\ud604\uc9c0\ud654 \uac00\ub2a5\ud55c \ud14d\uc2a4\ud2b8\ub294 \uc77c\uc885\uc758 \ud2b8\ub9ac \uad6c\uc870\ub85c \ub098\ud0c0\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4, \uac01 \ub178\ub4dc\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\ub85c, \ub178\ub4dc\ub4e4\uc758 \ud14d\uc2a4\ud2b8\ub85c \ubcc0\ud658 \uac00\ub2a5\ud55c \ub370\uc774\ud130\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentContents"),"\ub85c \ud45c\ud604\ud569\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\uc758 \uc790\uc2dd \ub178\ub4dc\ub4e4\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component#getSiblings"),"\ub85c \ubc1b\uc544\uc62c \uc218 \uc788\uc73c\uba70(\uba54\uc11c\ub4dc \uc774\ub984 \ub2e8\uc5b4\uac00 \uc798\ubabb\ub41c\uac70 \uc555\ub2c8\ub2e4), \ub098\uc911\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\ub97c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ud45c\uc2dc\ud560 \ub54c\ub294 \ud574\ub2f9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," \uc790\uccb4\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentContents"),", \uadf8\ub9ac\uace0 \uc790\uc2dd\ub4e4\uac83\uc744 \uc21c\uc11c\ub300\ub85c \ub367\ubd99\uc5ec \ud558\ub098\uc758 \ubb38\uc790\uc5f4\ub85c \ub9cc\ub4ed\ub2c8\ub2e4. \uac01 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\uc5d0\ub294 \uae00\uaf34, \uad75\uae30, \uae30\uc6b8\uc784 \ub4f1\uc744 \uc9c0\uc815\ud558\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Style"),"\uc774 \uc788\ub294\ub370, \uc790\uc2dd ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\ub294 \ubd80\ubaa8\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"Style"),"\uc744 \uc0c1\uc18d\ud569\ub2c8\ub2e4. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\uc758 \uc720\uc77c\ud55c \uad6c\ud604\uccb4\uc778 ",(0,a.kt)("inlineCode",{parentName:"p"},"MutableComponent"),"\ub97c \uc0dd\uc131\ud558\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentContents"),"\ub97c \ub2f4\ub294 \uc5ec\ub7ec \uc815\uc801 \uba54\uc11c\ub4dc\ub4e4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"MutableComponent#create(ComponentContents)"),"\uc5d0 \uc9c1\uc811 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentContents"),"\ub97c \uc804\ub2ec\ud558\uc5ec \uc0dd\uc131\ud558\uc2e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ComponentContents"),"\ub294 \uc784\uc758\uc758 \ub370\uc774\ud130\ub97c \ud14d\uc2a4\ud2b8\uc5d0 \ub2f4\uae30 \uc704\ud574 \uc5b4\ub5bb\uac8c \uae00\uc790\ub85c \ubcc0\ud658\ud574\uc57c \ud558\ub294\uc9c0\ub97c \uc815\uc758\ud558\ub294\ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud0a4\ubc14\uc778\ub4dc \ub370\uc774\ud130\ub97c \ub2f4\uc744 \uc218 \uc788\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentContents"),"\ub97c \ub9cc\ub4e4\uace0, \uc774\ub97c \uae00\uc790\ub85c \ubcc0\ud658\ud560 \ub550 \ud574\ub2f9 \ud0a4\ubc14\uc778\ub4dc\uc758 \uc774\ub984\uc73c\ub85c \ubcc0\ud658\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4(",(0,a.kt)("inlineCode",{parentName:"p"},"KeybindContents"),"\uac00 \uc774\ub7f0 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4). \uc544\ub2c8\uba74, \ubc88\uc5ed \ud0a4 \uac12\uc744 \ub370\uc774\ud130\ub85c \uac00\uc9c0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentContents"),"\ub97c \ub9cc\ub4e4\uace0 \ub098\uc911\uc5d0 \uc774\ub97c \ud14d\uc2a4\ud2b8\ub85c \ubcc0\ud658\ud560 \ub54c\ub294 \ubc88\uc5ed\ub41c \ud14d\uc2a4\ud2b8\ub85c \uce58\ud658\ud558\ub3c4\ub85d \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4, \uad81\uadf9\uc801\uc73c\ub85c \ud604\uc9c0\ud654\ub97c \uc774\ub8e8\ub294 \uac83\uc774\uc8e0(",(0,a.kt)("inlineCode",{parentName:"p"},"TranslatableContents"),"\uac00 \uc774\ub7f0 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4)."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\ub9ce\uc740 \ubaa8\ub4dc\ub4e4\uc5d0\uc11c \uc11c\ubc84\uc5d0\uc11c \uc9c1\uc811 \ubc88\uc5ed \ud0a4\uac12\uc744 \ubbf8\ub9ac \ud14d\uc2a4\ud2b8\ub85c \uce58\ud658\ud55c \ub2e4\uc74c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc804\uc1a1\ud558\ub294 \uc2e4\uc218\ub97c \uc800\uc9c0\ub985\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"admonition"},"\uc11c\ubc84\uc758 \uc5b8\uc5b4 \uc124\uc815\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \ub2e4\ub97c \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc11c\ubc84\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"TranslatableContents")," \uc640 \ubc88\uc5ed \ud0a4\uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc9c1\uc811 \ubc88\uc5ed\uc744 \uc218\ud589\ud558\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,a.kt)("h2",{id:"\ud604\uc9c0\ud654-\ud558\ub294\ubc95"},"\ud604\uc9c0\ud654 \ud558\ub294\ubc95"),(0,a.kt)("h3",{id:"netminecraftclientresourceslanguagei18n-\ud074\ub77c\uc774\uc5b8\ud2b8-\uc804\uc6a9"},(0,a.kt)("inlineCode",{parentName:"h3"},"net.minecraft.client.resources.language.I18n")," (\ud074\ub77c\uc774\uc5b8\ud2b8 \uc804\uc6a9)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\uc774 \ud074\ub798\uc2a4\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\ub9cc \uc874\uc7ac\ud569\ub2c8\ub2e4!")," \uc774\ub97c \uc11c\ubc84\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub824\uace0 \ud558\uba74 \uc608\uc678\uac00 \ubc1c\uc0dd\ud558\uace0 \uac8c\uc784\uc774 \ucda9\ub3cc\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"get(String, Object...)")," \ub294 \ubc88\uc5ed \ud0a4\uac12\uc744 \ud14d\uc2a4\ud2b8\ub85c \uce58\ud658\ud558\uace0 \uc5ec\uae30\uc5d0 \ud3ec\ub9e4\ud305\uae4c\uc9c0 \uc801\uc6a9\ud558\ub294 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\ubc95\uc740 ",(0,a.kt)("inlineCode",{parentName:"li"},"String.format(String, Object...)"),"\uacfc \ube44\uc2b7\ud55c\ub370, \uccab\ubc88\uc9f8 \uc778\uc790\ub294 \ubc88\uc5ed \ud0a4\uac12, \uadf8 \uc774\ud6c4 \uac00\ubcc0 \uc778\uc790\ub294 \ud14d\uc2a4\ud2b8 \uc911\uac04\uc5d0 \uc0bd\uc785\ud560 \uac1d\uccb4\ub4e4 \uc785\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"li"},"%s"),"\uc640 \uac19\uc740 \uc11c\uc2dd \uc9c0\uc815\uc790\ub294 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("h3",{id:"translatablecontents"},(0,a.kt)("inlineCode",{parentName:"h3"},"TranslatableContents")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TranslatableContents")," \ub294 \ubb38\uc790\uc5f4 \uce58\ud658\uacfc \ud3ec\ub9e4\ud305\uc774 \ub098\uc911\uc5d0 \uc774\ub8e8\uc5b4\uc9c0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentContents")," \uc785\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uc9c1\uc811 \uc5b8\uc5b4 \uc124\uc815\uc5d0 \ub9de\ub294 \ubb38\uc790\uc5f4\ub85c \ubc88\uc5ed \ud0a4\uac12\uc744 \uc218\ud589\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc5b4 \ud50c\ub808\uc774\uc5b4\uc5d0\uac8c \uba54\uc138\uc9c0\ub97c \ubcf4\ub0bc \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TranslatableContents(String, Object...)"),"\uc758 \uc0ac\uc6a9\ubc95\ub3c4 ",(0,a.kt)("inlineCode",{parentName:"p"},"String.format(String, Object...)"),"\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4; \uccab\ubc88\uc9f8 \uc778\uc790\ub294 \ubc88\uc5ed \ud0a4\uac12, \uadf8 \uc774\ud6c4 \uac00\ubcc0\uc778\uc790\ub294 \ud3ec\ub9e4\ud305\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774\ub54c ",(0,a.kt)("inlineCode",{parentName:"p"},"%1$s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"%2$s"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"%3$s"),", \uadf8\ub9ac\uace0 ",(0,a.kt)("inlineCode",{parentName:"p"},"%s"),"\uc640 \uac19\uc740 \uc11c\uc2dd \uc9c0\uc815\uc790\ub4e4\uc744 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\ub97c \uac00\ubcc0 \uc778\uc790\uc911 \ud558\ub098\ub85c \uc804\ub2ec\ud558\uc2e0\ub2e4\uba74 \ud574\ub2f9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"\uc758 \uc2a4\ud0c0\uc77c\uacfc \uac19\uc740 \uc131\uc9c8\ub4e4\uc740 \uadf8\ub300\ub85c \uc720\uc9c0\ub418\uc5b4 \ud45c\uc2dc\ub429\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"textcomponenthelper"},(0,a.kt)("inlineCode",{parentName:"h3"},"TextComponentHelper")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createComponentTranslation(CommandSource, String, Object...)"),"\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"CommandSource"),"\uc5d0 \ubcf4\ub0bc \ubaa9\uc801\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"li"},"MutableComponent"),"\ub97c \uc0dd\uc131\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc218\uc2e0\uc790\uac00 \ubc14\ub2d0\ub77c \ud074\ub77c\uc774\uc5b8\ud2b8\ub77c\uba74, \uc9c1\uc811 \ubb38\uc790\uc5f4 \uce58\ud658\uacfc \ud3ec\ub9e4\ud305\uc744 \uc9c4\ud589\ud558\uae30 \uc704\ud55c \uc5b8\uc5b4 \ub370\uc774\ud130\uac00 \uc5c6\uc744 \uac83\uc774\ub2c8 \uc601\uc5b4\ub85c \ub41c \ud14d\uc2a4\ud2b8\ub97c \uadf8\ub300\ub85c \ub2f4\uace0 \uc788\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"MutableComponent"),"\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uadf8\uc678\uc5d0\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"TranslatableComponent"),"\ub97c \ub2f4\uace0 \uc788\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"MutableComponent"),"\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")))}s.isMDXComponent=!0}}]);