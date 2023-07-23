"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(o),u=n,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return o?r.createElement(f,s(s({ref:t},d),{},{components:o})):r.createElement(f,s({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4010:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={},s="Models",i={unversionedId:"resources/client/models/index",id:"resources/client/models/index",title:"Models",description:"The model system is Minecraft's way of giving blocks and items their shapes. Through the model system, blocks and items are mapped to their models, which define how they look. One of the main goals of the model system is to allow not only textures but the entire shape of a block/item to be changed by resource packs. Indeed, any mod that adds items or blocks also contains a mini-resource pack for their blocks and items.",source:"@site/docs/resources/client/models/index.md",sourceDirName:"resources/client/models",slug:"/resources/client/models/",permalink:"/Neoforge-Korean-Documentation/docs/resources/client/models/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Resource Packs",permalink:"/Neoforge-Korean-Documentation/docs/resources/client/"},next:{title:"Item Properties",permalink:"/Neoforge-Korean-Documentation/docs/resources/client/models/itemproperties"}},l={},c=[{value:"Model Files",id:"model-files",level:2},{value:"Textures",id:"textures",level:3}],d={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"models"},"Models"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Tutorials/Models#File_path"},"model system")," is Minecraft's way of giving blocks and items their shapes. Through the model system, blocks and items are mapped to their models, which define how they look. One of the main goals of the model system is to allow not only textures but the entire shape of a block/item to be changed by resource packs. Indeed, any mod that adds items or blocks also contains a mini-resource pack for their blocks and items."),(0,n.kt)("h2",{id:"model-files"},"Model Files"),(0,n.kt)("p",null,"Models and textures are linked through ",(0,n.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/resources#resourcelocation"},(0,n.kt)("inlineCode",{parentName:"a"},"ResourceLocation")),"s but are stored in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ModelManager")," using ",(0,n.kt)("inlineCode",{parentName:"p"},"ModelResourceLocation"),"s. Models are referenced in different locations through the block or item's registry name depending on whether they are referencing ",(0,n.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Tutorials/Models#Block_states"},"block states")," or ",(0,n.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Tutorials/Models#Item_models"},"item models"),". Blocks will have their ",(0,n.kt)("inlineCode",{parentName:"p"},"ModelResourceLocation")," represent their registry name along with a stringified version of its current ",(0,n.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/blocks/states"},(0,n.kt)("inlineCode",{parentName:"a"},"BlockState"))," while items will use their registry name followed by ",(0,n.kt)("inlineCode",{parentName:"p"},"inventory"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"JSON models only support cuboid elements; there is no way to express a triangular wedge or anything like it. To have more complicated models, another format must be used.")),(0,n.kt)("h3",{id:"textures"},"Textures"),(0,n.kt)("p",null,"Textures, like models, are contained within resource packs and are referred to with ",(0,n.kt)("inlineCode",{parentName:"p"},"ResourceLocation"),"s. In Minecraft, the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/UV_mapping"},"UV coordinates")," (0,0) are taken to mean the ",(0,n.kt)("strong",{parentName:"p"},"top-left")," corner. UVs are ",(0,n.kt)("em",{parentName:"p"},"always")," from 0 to 16. If a texture is larger or smaller, the coordinates are scaled to fit. A texture should also be square, and the side length of a texture should be a power of two, as doing otherwise breaks mipmapping (e.g. 1x1, 2x2, 8x8, 16x16, and 128x128 are good. 5x5 and 30x30 are not recommended because they are not powers of 2. 5x10 and 4x8 are completely broken as they are not square.). Textures should only ever be not a square if it is ",(0,n.kt)("a",{parentName:"p",href:"https://minecraft.fandom.com/wiki/Resource_Pack?so=search#Animation"},"animated"),"."))}p.isMDXComponent=!0}}]);