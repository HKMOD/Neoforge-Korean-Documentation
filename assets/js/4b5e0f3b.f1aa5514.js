"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[4057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="\uc5d4\ud2f0\ud2f0 \ud1b5\uc2e0",l={unversionedId:"networking/entities",id:"networking/entities",title:"\uc5d4\ud2f0\ud2f0 \ud1b5\uc2e0",description:"\ub124\ud2b8\uc6cc\ud06c \uba54\uc138\uc9c0\ub85c \ud1b5\uc2e0\ud558\ub294 \uac83 \ub9d0\uace0\ub3c4 \uc5d4\ud2f0\ud2f0\uc758 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654\uc2dc\ucf1c\uc8fc\ub294 \uc2dc\uc2a4\ud15c\uc740 \ub2e4\uc591\ud569\ub2c8\ub2e4.",source:"@site/docs/networking/entities.md",sourceDirName:"networking",slug:"/networking/entities",permalink:"/Neoforge-Korean-Documentation/docs/networking/entities",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0",permalink:"/Neoforge-Korean-Documentation/docs/networking/"},next:{title:"SimpleImpl",permalink:"/Neoforge-Korean-Documentation/docs/networking/simpleimpl"}},p={},c=[{value:"\uc2a4\ud3f0 \ub370\uc774\ud130",id:"\uc2a4\ud3f0-\ub370\uc774\ud130",level:2},{value:"IEntityAdditionalSpawnData",id:"ientityadditionalspawndata",level:3},{value:"\ub3d9\uc801\uc778 \ub370\uc774\ud130",id:"\ub3d9\uc801\uc778-\ub370\uc774\ud130",level:2},{value:"\ub370\uc774\ud130 \ud30c\ub77c\ubbf8\ud130",id:"\ub370\uc774\ud130-\ud30c\ub77c\ubbf8\ud130",level:3}],d={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc5d4\ud2f0\ud2f0-\ud1b5\uc2e0"},"\uc5d4\ud2f0\ud2f0 \ud1b5\uc2e0"),(0,a.kt)("p",null,"\ub124\ud2b8\uc6cc\ud06c \uba54\uc138\uc9c0\ub85c \ud1b5\uc2e0\ud558\ub294 \uac83 \ub9d0\uace0\ub3c4 \uc5d4\ud2f0\ud2f0\uc758 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654\uc2dc\ucf1c\uc8fc\ub294 \uc2dc\uc2a4\ud15c\uc740 \ub2e4\uc591\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc2a4\ud3f0-\ub370\uc774\ud130"},"\uc2a4\ud3f0 \ub370\uc774\ud130"),(0,a.kt)("p",null,"\ubaa8\ub4dc\uc5d0\uc11c \ucd94\uac00\ud558\ub294 \uc5d4\ud2f0\ud2f0\uc758 \uc2a4\ud3f0 \ud328\ud0b7\uc5d0 \ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\uac70\ub098, \uc0c1\uc18d\ud558\ub294 \ubc14\ub2d0\ub77c \uc5d4\ud2f0\ud2f0\uc758 \uc790\uccb4\uc801\uc778 \uc2a4\ud3f0 \ud328\ud0b7\uc744 \ubcc0\uacbd\ud558\ub294 \ub4f1 \uc2a4\ud3f0 \ud328\ud0b7\uc744 \uc218\uc815\ud558\ub824\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity#getAddEntityPacket"),"\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc7ac\uc815\uc758\ud574 \uc2a4\ud3f0 \ud328\ud0b7\uc744 \ud3ec\uc9c0\uc5d0\uc11c \uad00\ub9ac\ud558\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \uc77c\ubc18\uc801\uc785\ub2c8\ub2e4. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Packet<ClientGamePacketListener> getAddEntityPacket()\n{\n    return NetworkHooks.getEntitySpawningPacket(this/* \uc5d4\ud2f0\ud2f0\uc758 \uc778\uc2a4\ud134\uc2a4*/);\n}\n")),(0,a.kt)("p",null,"\uc774\ud6c4 \ub2e4\uc74c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud3f0 \ud328\ud0b7\uc5d0 \ucd94\uac00 \ub370\uc774\ud130\ub97c \uc2e4\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"ientityadditionalspawndata"},"IEntityAdditionalSpawnData"),(0,a.kt)("p",null,"\ub9cc\uc57d \uc5d4\ud2f0\ud2f0\uac00 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0 \uc2dc\uac04\uc5d0 \ub530\ub77c \ubcc0\ud558\uc9c4 \uc54a\ub294 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud574\uc57c \ud55c\ub2e4\uba74 \uc774 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2a4\ud3f0 \ud328\ud0b7\uc5d0 \ub2f4\uc544 \ubcf4\ub0b4\ub294 \uac83\uc774 \uad8c\uc7a5\ub429\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"#writeSpawnData"),"\uc640 ",(0,a.kt)("inlineCode",{parentName:"p"},"#readSpawnData"),"\ub97c \uc7ac\uc815\uc758\ud558\uc5ec \uc2a4\ud3f0 \ud328\ud0b7\uc758 \ubc84\ud37c\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc77d\uace0 \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub3d9\uc801\uc778-\ub370\uc774\ud130"},"\ub3d9\uc801\uc778 \ub370\uc774\ud130"),(0,a.kt)("h3",{id:"\ub370\uc774\ud130-\ud30c\ub77c\ubbf8\ud130"},"\ub370\uc774\ud130 \ud30c\ub77c\ubbf8\ud130"),(0,a.kt)("p",null,"\ub370\uc774\ud130 \ud30c\ub77c\ubbf8\ud130\ub294 \ub9c8\uc778\ud06c\ub798\ud504\ud2b8\uac00 \uc790\ub3d9\uc73c\ub85c \uc5d4\ud2f0\ud2f0\uc758 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654 \uc2dc\ud0ac\ub54c \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4. \ubc14\ub2d0\ub77c \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ubc95\uc744 \ucc38\uace0\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uba3c\uc800, \ub3d9\uae30\ud654\ud560 \ub370\uc774\ud130\ub97c \ub2f4\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityDataAccessor<T>"),"\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774 \uac1d\uccb4\ub294 \uc5d4\ud2f0\ud2f0\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"static final")," \ud544\ub4dc\uc5d0 \ud560\ub2f9\ud558\uc138\uc694. ",(0,a.kt)("inlineCode",{parentName:"p"},"SynchedEntityData#defineId"),"\uc5d0 \uc5d4\ud2f0\ud2f0\uc758 \ud074\ub798\uc2a4\uc640 \ub370\uc774\ud130\ub97c \uc9c1\ub82c\ud654\ud560 ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityDataSerializer"),"\ub97c \uc804\ub2ec\ud558\uc5ec \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityDataSerializers"),"\uc5d0\uc11c \uc0ac\uc804 \uc815\uc758\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityDataSerializer"),"\ub4e4\uc744 \ucc3e\uc544\ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\ub370\uc774\ud130 \ud30c\ub77c\ubbf8\ud130\ub294 ",(0,a.kt)("strong",{parentName:"p"},"\ubb34\uc870\uac74")," \uc9c1\uc811 \ub9cc\ub4dc\uc2dc\ub294 \uc5d4\ud2f0\ud2f0\uc5d0\ub9cc, ",(0,a.kt)("strong",{parentName:"p"},"\uadf8 \uc5d4\ud2f0\ud2f0 \ud074\ub798\uc2a4 \uc548\uc5d0\uc11c\ub9cc")," \uc0ac\uc6a9\ud558\uc154\uc57c \ud569\ub2c8\ub2e4. \ub2e4\ub978 \uc5d4\ud2f0\ud2f0\uc5d0 \ud30c\ub77c\ubbf8\ud130\ub97c \ucd94\uac00\ud558\uc2dc\uba74 \uadf8 \ub370\uc774\ud130\ub97c \ubcf4\ub0bc\ub54c \uc0ac\uc6a9\ud558\ub294 ID\uc758 \ub3d9\uae30\ud654\ub97c \uae68\ubc84\ub9b4 \uc218 \uc788\uc73c\uba70 \uace0\uce58\uae30 \uc5b4\ub824\uc6b4 \ubb38\uc81c\ub97c \uc720\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("p",null,"\uadf8 \ub2e4\uc74c ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity#defineSynchedData"),"\ub97c \uc7ac\uc815\uc758\ud574 ",(0,a.kt)("inlineCode",{parentName:"p"},"this.entityData.define(...)"),"\uc744 \uac01\uac01\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityDataAccessor"),"\uc640 \uae30\ubcf8\uac12\uc744 \uc804\ub2ec\ud558\uc5ec \ud638\ucd9c\ud558\uc138\uc694. \ub298 ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," \uba54\uc11c\ub4dc\ub97c \uba3c\uc800 \ud638\ucd9c\ud558\uc2dc\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9c8\uc138\uc694!"),(0,a.kt)("p",null,"\uadf8\ub2e4\uc74c\uc5d0\ub294 \uc5d4\ud2f0\ud2f0\uc758 ",(0,a.kt)("inlineCode",{parentName:"p"},"entityData")," \uc778\uc2a4\ud134\uc2a4\ub97c \ud1b5\ud574 \ub370\uc774\ud130 \ud30c\ub77c\ubbf8\ud130\uc758 \uac12\uc744 \ubcc0\uacbd\ud558\uace0 \uc77d\uc73c\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\ub294 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc790\ub3d9\uc73c\ub85c \ubcf4\ub0b4\uc9d1\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);