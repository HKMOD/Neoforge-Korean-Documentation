"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7140],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5025:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={},s="Resource Packs",c={unversionedId:"resources/client/index",id:"resources/client/index",title:"Resource Packs",description:"Resource Packs allow for the customization of client resources through the assets directory. This includes textures, models, sounds, localizations, and others. Your mod (as well as Forge itself) can also have resource packs. Any user can therefore modify all the textures, models, and other assets defined within this directory.",source:"@site/docs/resources/client/index.md",sourceDirName:"resources/client",slug:"/resources/client/",permalink:"/Neoforge-Korean-Documentation/docs/resources/client/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Transform",permalink:"/Neoforge-Korean-Documentation/docs/rendering/modelloaders/transform"},next:{title:"Models",permalink:"/Neoforge-Korean-Documentation/docs/resources/client/models/"}},i={},l=[{value:"Creating a Resource Pack",id:"creating-a-resource-pack",level:3}],u={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-packs"},"Resource Packs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Resource_Pack"},"Resource Packs")," allow for the customization of client resources through the ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," directory. This includes textures, models, sounds, localizations, and others. Your mod (as well as Forge itself) can also have resource packs. Any user can therefore modify all the textures, models, and other assets defined within this directory."),(0,o.kt)("h3",{id:"creating-a-resource-pack"},"Creating a Resource Pack"),(0,o.kt)("p",null,"Resource Packs are stored within your project's resources. The ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," directory contains the contents of the pack, while the pack itself is defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"pack.mcmeta")," alongside the ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," folder.\nYour mod can have multiple asset domains, since you can add or modify already existing resource packs, like vanilla's, Forge's, or another mod's.\nYou can then follow the steps found ",(0,o.kt)("a",{parentName:"p",href:"https://minecraft.wiki/w/Tutorials/Creating_a_resource_pack"},"at the Minecraft Wiki")," to create any resource pack."),(0,o.kt)("p",null,"Additional reading: ",(0,o.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/resources#ResourceLocation"},"Resource Locations")))}p.isMDXComponent=!0}}]);