"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1085],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,f=m["".concat(s,".").concat(c)]||m[c]||h[c]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={},i="Transform",l={unversionedId:"rendering/modelloaders/transform",id:"rendering/modelloaders/transform",title:"Transform",description:'When an BakedModel is being rendered as an item, it can apply special handling depending on which transform it is being rendered in. "Transform" means in what context the model is being rendered. The possible transforms are represented in code by the ItemDisplayContext enum. There are two systems for handling transform: the deprecated vanilla system, constituted by BakedModel#getTransforms, ItemTransforms, and ItemTransform, and the Forge system, embodied by the method IForgeBakedModel#applyTransform. The vanilla code is patched to favor using applyTransform over the vanilla system whenever possible.',source:"@site/docs/rendering/modelloaders/transform.md",sourceDirName:"rendering/modelloaders",slug:"/rendering/modelloaders/transform",permalink:"/Neoforge-Korean-Documentation/docs/rendering/modelloaders/transform",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"ItemOverrides",permalink:"/Neoforge-Korean-Documentation/docs/rendering/modelloaders/itemoverrides"},next:{title:"Resource Packs",permalink:"/Neoforge-Korean-Documentation/docs/resources/client/"}},s={},d=[{value:"<code>ItemDisplayContext</code>",id:"itemdisplaycontext",level:2},{value:"The Vanilla Way",id:"the-vanilla-way",level:2},{value:"The Forge Way",id:"the-forge-way",level:2},{value:"<code>BakedModel#applyTransform</code>",id:"bakedmodelapplytransform",level:4}],p={toc:d},m="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transform"},"Transform"),(0,a.kt)("p",null,"When an ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/rendering/modelloaders/bakedmodel"},(0,a.kt)("inlineCode",{parentName:"a"},"BakedModel")),' is being rendered as an item, it can apply special handling depending on which transform it is being rendered in. "Transform" means in what context the model is being rendered. The possible transforms are represented in code by the ',(0,a.kt)("inlineCode",{parentName:"p"},"ItemDisplayContext")," enum. There are two systems for handling transform: the deprecated vanilla system, constituted by ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel#getTransforms"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemTransforms"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemTransform"),", and the Forge system, embodied by the method ",(0,a.kt)("inlineCode",{parentName:"p"},"IForgeBakedModel#applyTransform"),". The vanilla code is patched to favor using ",(0,a.kt)("inlineCode",{parentName:"p"},"applyTransform")," over the vanilla system whenever possible."),(0,a.kt)("h2",{id:"itemdisplaycontext"},(0,a.kt)("inlineCode",{parentName:"h2"},"ItemDisplayContext")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NONE")," - Used for the display entity by default when no context is set and by Forge when a ",(0,a.kt)("inlineCode",{parentName:"p"},"Block"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderShape")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"#ENTITYBLOCK_ANIMATED"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"THIRD_PERSON_LEFT_HAND"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"THIRD_PERSON_RIGHT_HAND"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"FIRST_PERSON_LEFT_HAND"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"FIRST_PERSON_RIGHT_HAND")," - The first person values represent when the player is holding the item in their own hand. The third person values represent when another player is holding the item and the client is looking at them in the 3rd person. Hands are self-explanatory."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HEAD")," - Represents when any player is wearing the item in the helmet slot (e.g. pumpkins)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GUI")," - Represents when the item is being rendered in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Screen"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GROUND")," - Represents when the item is being rendered in the level as an ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemEntity"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FIXED")," - Used for item frames."),(0,a.kt)("h2",{id:"the-vanilla-way"},"The Vanilla Way"),(0,a.kt)("p",null,"The vanilla way of handling transform is through ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel#getTransforms"),". This method returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemTransforms"),", which is a simple object that contains various ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemTransform"),"s as ",(0,a.kt)("inlineCode",{parentName:"p"},"public final")," fields. An ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemTransform")," represents a rotation, a translation, and a scale to be applied to the model. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemTransforms")," is a container for these, holding one for each of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemDisplayContext"),"s except ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE"),". In the vanilla implementation, calling ",(0,a.kt)("inlineCode",{parentName:"p"},"#getTransform")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE")," results in the default transform, ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemTransform#NO_TRANSFORM"),"."),(0,a.kt)("p",null,"The entire vanilla system for handling transforms is deprecated by Forge, and most implementations of ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel")," should simply ",(0,a.kt)("inlineCode",{parentName:"p"},"return ItemTransforms#NO_TRANSFORMS")," (which is the default implementation) from ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel#getTransforms"),". Instead, they should implement ",(0,a.kt)("inlineCode",{parentName:"p"},"#applyTransform"),"."),(0,a.kt)("h2",{id:"the-forge-way"},"The Forge Way"),(0,a.kt)("p",null,"The Forge way of handling transforms is ",(0,a.kt)("inlineCode",{parentName:"p"},"#applyTransform"),", a method patched into ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel"),". It supersedes the ",(0,a.kt)("inlineCode",{parentName:"p"},"#getTransforms")," method."),(0,a.kt)("h4",{id:"bakedmodelapplytransform"},(0,a.kt)("inlineCode",{parentName:"h4"},"BakedModel#applyTransform")),(0,a.kt)("p",null,"Given a ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemDisplayContext"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PoseStack"),", and a boolean to determine whether to apply the transform for the left hand, this method produces an ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel")," to be rendered. Because the returned ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel")," can be a totally new model, this method is more flexible than the vanilla method (e.g. a piece of paper that looks flat in hand but crumpled on the ground)."))}h.isMDXComponent=!0}}]);