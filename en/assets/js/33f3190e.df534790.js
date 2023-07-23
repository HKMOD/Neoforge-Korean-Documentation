"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[8102],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="BlockEntityWithoutLevelRenderer",l={unversionedId:"items/bewlr",id:"items/bewlr",title:"BlockEntityWithoutLevelRenderer",description:"BlockEntityWithoutLevelRenderer is a method to handle dynamic rendering on items. This system is much simpler than the old ItemStack system, which required a BlockEntity, and did not allow access to the ItemStack.",source:"@site/docs/items/bewlr.md",sourceDirName:"items",slug:"/items/bewlr",permalink:"/Neoforge-Korean-Documentation/en/docs/items/bewlr",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Items",permalink:"/Neoforge-Korean-Documentation/en/docs/items/"},next:{title:"Porting to Minecraft 1.20",permalink:"/Neoforge-Korean-Documentation/en/docs/legacy/porting"}},s={},c=[{value:"Using BlockEntityWithoutLevelRenderer",id:"using-blockentitywithoutlevelrenderer",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blockentitywithoutlevelrenderer"},"BlockEntityWithoutLevelRenderer"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BlockEntityWithoutLevelRenderer")," is a method to handle dynamic rendering on items. This system is much simpler than the old ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemStack")," system, which required a ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockEntity"),", and did not allow access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemStack"),"."),(0,o.kt)("h2",{id:"using-blockentitywithoutlevelrenderer"},"Using BlockEntityWithoutLevelRenderer"),(0,o.kt)("p",null,"BlockEntityWithoutLevelRenderer allows you to render your item using ",(0,o.kt)("inlineCode",{parentName:"p"},"public void renderByItem(ItemStack itemStack, ItemDisplayContext ctx, PoseStack poseStack, MultiBufferSource bufferSource, int combinedLight, int combinedOverlay)"),"."),(0,o.kt)("p",null,"In order to use an BEWLR, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," must first satisfy the condition that its model returns true for ",(0,o.kt)("inlineCode",{parentName:"p"},"BakedModel#isCustomRenderer"),". If it does not have one, it will use the default ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemRenderer#getBlockEntityRenderer"),". Once that returns true, the Item's BEWLR will be accessed for rendering. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Block"),"s also render using a BEWLR if ",(0,o.kt)("inlineCode",{parentName:"p"},"Block#getRenderShape")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"RenderShape#ENTITYBLOCK_ANIMATED"),".")),(0,o.kt)("p",null,"To set the BEWLR for an Item, an anonymous instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"IClientItemExtensions")," must be consumed within ",(0,o.kt)("inlineCode",{parentName:"p"},"Item#initializeClient"),". Within the anonymous instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"IClientItemExtensions#getCustomRenderer")," should be overridden to return the instance of your BEWLR:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// In your item class\n@Override\npublic void initializeClient(Consumer<IClientItemExtensions> consumer) {\n  consumer.accept(new IClientItemExtensions() {\n\n    @Override\n    public BlockEntityWithoutLevelRenderer getCustomRenderer() {\n      return myBEWLRInstance;\n    }\n  });\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Each mod should only have one instance of a custom BEWLR.")),(0,o.kt)("p",null,"That is it, no additional setup is necessary to use a BEWLR."))}m.isMDXComponent=!0}}]);