"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[9906],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=d(o),f=r,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return o?n.createElement(u,l(l({ref:t},p),{},{components:o})):n.createElement(u,l({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<i;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},8099:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const i={},l="Part Visibility",a={unversionedId:"rendering/modelextensions/visibility",id:"rendering/modelextensions/visibility",title:"Part Visibility",description:'Adding the visibility entry at the top level of a model JSON allows control over the visibility of different parts of the model to decide whether they should be baked into the final BakedModel. The definition of a "part" is dependent on the model loader loading this model and custom model loaders are free to ignore this entry completely. Out of the model loaders provided by Forge only the composite model loader and the OBJ model loader make use of this functionality. The visibility entries are specified as "part name": boolean entries.',source:"@site/docs/rendering/modelextensions/visibility.md",sourceDirName:"rendering/modelextensions",slug:"/rendering/modelextensions/visibility",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelextensions/visibility",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Root Transforms",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelextensions/transforms"},next:{title:"Custom Model Loaders",permalink:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/"}},s={},d=[],p={toc:d},m="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"part-visibility"},"Part Visibility"),(0,r.kt)("p",null,"Adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"visibility")," entry at the top level of a model JSON allows control over the visibility of different parts of the model to decide whether they should be baked into the final ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders/bakedmodel"},(0,r.kt)("inlineCode",{parentName:"a"},"BakedModel")),'. The definition of a "part" is dependent on the model loader loading this model and custom model loaders are free to ignore this entry completely. Out of the model loaders provided by Forge only the ',(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders//#composite-models"},"composite model loader")," and the ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/rendering/modelloaders//#wavefront-obj-models"},"OBJ model loader")," make use of this functionality. The visibility entries are specified as ",(0,r.kt)("inlineCode",{parentName:"p"},'"part name": boolean')," entries."),(0,r.kt)("p",null,"Example of a composite model with two parts, the second of which will not be baked into the final model, and two child models overriding this visibility to have only the first part and both parts visible respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// mycompositemodel.json\n{\n  "loader": "forge:composite",\n  "children": {\n    "part_one": {\n      "parent": "mymod:mypartmodel_one"\n    },\n    "part_two": {\n      "parent": "mymod:mypartmodel_two"\n    }\n  },\n  "visibility": {\n    "part_two": false\n  }\n}\n\n// mycompositechild_one.json\n{\n  "parent": "mymod:mycompositemodel",\n  "visibility": {\n    "part_one": false,\n    "part_two": true\n  }\n}\n\n// mycompositechild_two.json\n{\n  "parent": "mymod:mycompositemodel",\n  "visibility": {\n    "part_two": true\n  }\n}\n')),(0,r.kt)("p",null,"The visibility of a given part is determined by checking whether the model specifies a visibility for this part and, if not present, recursively checking the model's parent until either an entry is found or there is no further parent to check, in which case it defaults to true."),(0,r.kt)("p",null,"This allows setups like the following where multiple models use different parts of a single composite model:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A composite model specifies multiple components"),(0,r.kt)("li",{parentName:"ol"},"Multiple models specify this composite model as their parent"),(0,r.kt)("li",{parentName:"ol"},"These child models individually specify different visibilities for the parts")))}c.isMDXComponent=!0}}]);