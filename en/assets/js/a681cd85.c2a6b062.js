"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,h=p["".concat(d,".").concat(u)]||p[u]||c[u]||a;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="BakedModel",l={unversionedId:"rendering/modelloaders/bakedmodel",id:"rendering/modelloaders/bakedmodel",title:"BakedModel",description:"BakedModel is the result of calling UnbakedModel#bake for the vanilla model loader or IUnbakedGeometry#bake for custom model loaders. Unlike UnbakedModel or IUnbakedGeometry, which purely represents a shape without any concept of items or blocks, BakedModel is not as abstract. It represents geometry that has been optimized and reduced to a form where it is (almost) ready to go to the GPU. It can also process the state of an item or block to change the model.",source:"@site/docs/rendering/modelloaders/bakedmodel.md",sourceDirName:"rendering/modelloaders",slug:"/rendering/modelloaders/bakedmodel",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/bakedmodel",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Custom Model Loaders",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/"},next:{title:"ItemOverrides",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/itemoverrides"}},d={},s=[{value:"<code>getOverrides</code>",id:"getoverrides",level:3},{value:"<code>useAmbientOcclusion</code>",id:"useambientocclusion",level:3},{value:"<code>isGui3d</code>",id:"isgui3d",level:3},{value:"<code>isCustomRenderer</code>",id:"iscustomrenderer",level:3},{value:"<code>getParticleIcon</code>",id:"getparticleicon",level:3},{value:"<s><code>getTransforms</code></s>",id:"gettransforms",level:3},{value:"<code>applyTransform</code>",id:"applytransform",level:3},{value:"<code>getQuads</code>",id:"getquads",level:3}],m={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bakedmodel"},(0,r.kt)("inlineCode",{parentName:"h1"},"BakedModel")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BakedModel")," is the result of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"UnbakedModel#bake")," for the vanilla model loader or ",(0,r.kt)("inlineCode",{parentName:"p"},"IUnbakedGeometry#bake")," for custom model loaders. Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"UnbakedModel")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IUnbakedGeometry"),", which purely represents a shape without any concept of items or blocks, ",(0,r.kt)("inlineCode",{parentName:"p"},"BakedModel")," is not as abstract. It represents geometry that has been optimized and reduced to a form where it is (almost) ready to go to the GPU. It can also process the state of an item or block to change the model."),(0,r.kt)("p",null,"In a majority of cases, it is not really necessary to implement this interface manually. One can instead use one of the existing implementations."),(0,r.kt)("h3",{id:"getoverrides"},(0,r.kt)("inlineCode",{parentName:"h3"},"getOverrides")),(0,r.kt)("p",null,"Returns the ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/itemoverrides"},(0,r.kt)("inlineCode",{parentName:"a"},"ItemOverrides"))," to use for this model. This is only used if this model is being rendered as an item."),(0,r.kt)("h3",{id:"useambientocclusion"},(0,r.kt)("inlineCode",{parentName:"h3"},"useAmbientOcclusion")),(0,r.kt)("p",null,"If the model is rendered as a block in the level, the block in question does not emit any light, and ambient occlusion is enabled. This causes the model to be rendered with ",(0,r.kt)("a",{parentName:"p",href:"ambocc"},"ambient occlusion"),"."),(0,r.kt)("h3",{id:"isgui3d"},(0,r.kt)("inlineCode",{parentName:"h3"},"isGui3d")),(0,r.kt)("p",null,'If the model is rendered as an item in an inventory, on the ground as an entity, on an item frame, etc., this makes the model look "flat." In GUIs, this also disables the lighting.'),(0,r.kt)("h3",{id:"iscustomrenderer"},(0,r.kt)("inlineCode",{parentName:"h3"},"isCustomRenderer")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Unless you know what you're doing, just ",(0,r.kt)("inlineCode",{parentName:"p"},"return false")," from this and continue on.")),(0,r.kt)("p",null,"When rendering this as an item, returning ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," causes the model to not be rendered, instead falling back to ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockEntityWithoutLevelRenderer#renderByItem"),". For certain vanilla items such as chests and banners, this method is hardcoded to copy data from the item into a ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockEntity"),", before using a ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockEntityRenderer")," to render that BE in place of the item. For all other items, it will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockEntityWithoutLevelRenderer")," instance provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"IClientItemExtensions#getCustomRenderer"),". Refer to ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/items/bewlr"},"BlockEntityWithoutLevelRenderer")," page for more information."),(0,r.kt)("h3",{id:"getparticleicon"},(0,r.kt)("inlineCode",{parentName:"h3"},"getParticleIcon")),(0,r.kt)("p",null,"Whatever texture should be used for the particles. For blocks, this shows when an entity falls on it, when it breaks, etc. For items, this shows when it breaks or when it's eaten."),(0,r.kt)("p",null,"!!! important\nThe vanilla method with no parameters has been deprecated in favor of ",(0,r.kt)("inlineCode",{parentName:"p"},"#getParticleIcon(ModelData)")," since model data can have an effect on how a particular model might be rendered."),(0,r.kt)("h3",{id:"gettransforms"},(0,r.kt)("s",null,(0,r.kt)("inlineCode",{parentName:"h3"},"getTransforms"))),(0,r.kt)("p",null,"Deprecated in favor of implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"#applyTransform"),". The default implementation is fine if ",(0,r.kt)("inlineCode",{parentName:"p"},"#applyTransform")," is implemented. See ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/transform"},"Transform"),"."),(0,r.kt)("h3",{id:"applytransform"},(0,r.kt)("inlineCode",{parentName:"h3"},"applyTransform")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/transform"},"Transform"),"."),(0,r.kt)("h3",{id:"getquads"},(0,r.kt)("inlineCode",{parentName:"h3"},"getQuads")),(0,r.kt)("p",null,"This is the main method of ",(0,r.kt)("inlineCode",{parentName:"p"},"BakedModel"),". It returns a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"BakedQuad"),"s: objects which contain the low-level vertex data that will be used to render the model. If the model is being rendered as a block, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockState")," passed in is non-null. If the model is being rendered as an item, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemOverrides")," returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"#getOverrides")," is responsible for handling the state of the item, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockState")," parameter will be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Direction")," passed in is used for face culling. If the block against the given side of another block being rendered is opaque, then the faces associated with that side are not rendered. If that parameter is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", all faces not associated with a side are returned (that will never be culled)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rand")," parameter is an instance of Random."),(0,r.kt)("p",null,"It also takes in a non null ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelData")," instance. This can be used to define extra data when rendering the specific model via ",(0,r.kt)("inlineCode",{parentName:"p"},"ModelProperty"),"s. For example, one such property is ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeModel$Data"),", which is used to store any additional submodel data for a model using the ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:composite")," model loader."),(0,r.kt)("p",null,"Note that this method is called very often: once for every combination of non-culled face and supported block render layer (anywhere between 0 to 28 times) ",(0,r.kt)("em",{parentName:"p"},"per block in a level"),". This method should be as fast as possible, and should probably cache heavily."))}c.isMDXComponent=!0}}]);