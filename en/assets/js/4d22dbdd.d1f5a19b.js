"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2894],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,v=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return t?n.createElement(v,o(o({ref:r},m),{},{components:t})):n.createElement(v,o({ref:r},m))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d[p]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6638:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const i={},o="ItemOverrides",d={unversionedId:"rendering/modelloaders/itemoverrides",id:"rendering/modelloaders/itemoverrides",title:"ItemOverrides",description:"ItemOverrides provides a way for an BakedModel to process the state of an ItemStack and return a new BakedModel; thereafter, the returned model replaces the old one. ItemOverrides represents an arbitrary function (BakedModel, ItemStack, ClientLevel, LivingEntity, int) \u2192 BakedModel, making it useful for dynamic models. In vanilla, it is used to implement item property overrides.",source:"@site/docs/rendering/modelloaders/itemoverrides.md",sourceDirName:"rendering/modelloaders",slug:"/rendering/modelloaders/itemoverrides",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/itemoverrides",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"BakedModel",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/bakedmodel"},next:{title:"Transform",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/transform"}},l={},s=[{value:"<code>ItemOverrides()</code>",id:"itemoverrides-1",level:3},{value:"<code>resolve</code>",id:"resolve",level:3},{value:"<code>getOverrides</code>",id:"getoverrides",level:3},{value:"<code>BakedOverride</code>",id:"bakedoverride",level:2}],m={toc:s},p="wrapper";function c(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"itemoverrides"},(0,a.kt)("inlineCode",{parentName:"h1"},"ItemOverrides")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ItemOverrides")," provides a way for an ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/bakedmodel"},(0,a.kt)("inlineCode",{parentName:"a"},"BakedModel"))," to process the state of an ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemStack")," and return a new ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel"),"; thereafter, the returned model replaces the old one. ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemOverrides")," represents an arbitrary function ",(0,a.kt)("inlineCode",{parentName:"p"},"(BakedModel, ItemStack, ClientLevel, LivingEntity, int)")," \u2192 ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel"),", making it useful for dynamic models. In vanilla, it is used to implement item property overrides."),(0,a.kt)("h3",{id:"itemoverrides-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"ItemOverrides()")),(0,a.kt)("p",null,"Given a list of ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemOverride"),"s, the constructor copies and bakes the list. The baked overrides may be accessed with ",(0,a.kt)("inlineCode",{parentName:"p"},"#getOverrides"),"."),(0,a.kt)("h3",{id:"resolve"},(0,a.kt)("inlineCode",{parentName:"h3"},"resolve")),(0,a.kt)("p",null,"This takes an ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel"),", an ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemStack"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientLevel"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"LivingEntity"),", and an ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," to produce another ",(0,a.kt)("inlineCode",{parentName:"p"},"BakedModel")," to use for rendering. This is where models can handle the state of their items."),(0,a.kt)("p",null,"This should not mutate the level."),(0,a.kt)("h3",{id:"getoverrides"},(0,a.kt)("inlineCode",{parentName:"h3"},"getOverrides")),(0,a.kt)("p",null,"Returns an immutable list containing all the ",(0,a.kt)("a",{parentName:"p",href:"#bakedoverride"},(0,a.kt)("inlineCode",{parentName:"a"},"BakedOverride")),"s used by this ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemOverrides"),". If none are applicable, this returns the empty list."),(0,a.kt)("h2",{id:"bakedoverride"},(0,a.kt)("inlineCode",{parentName:"h2"},"BakedOverride")),(0,a.kt)("p",null,"This class represents a vanilla item override, which holds several ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemOverrides$PropertyMatcher")," for the properties on an item and a model to use in case those matchers are satisfied. They are the objects in the ",(0,a.kt)("inlineCode",{parentName:"p"},"overrides")," array of a vanilla item JSON model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // Inside a vanilla JSON item model\n  "overrides": [\n    {\n      // This is an ItemOverride\n      "predicate": {\n        // This is the Map<ResourceLocation, Float>, containing the names of properties and their minimum values\n        "example1:prop": 0.5\n      },\n      // This is the \'location\', or target model, of the override, which is used if the predicate above matches\n      "model": "example1:item/model"\n    },\n    {\n      // This is another ItemOverride\n      "predicate": {\n        "example2:prop": 1\n      },\n      "model": "example2:item/model"\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);