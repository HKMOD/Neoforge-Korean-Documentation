"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:r,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={},a="Conditionally-Loaded Data",d={unversionedId:"resources/server/conditional",id:"resources/server/conditional",title:"Conditionally-Loaded Data",description:"There are times when modders may want to include data-driven objects using information from another mod without having to explicitly make that mod a dependency. Other cases may be to swap out certain objects with other modded entries when they are present. This can be done through the conditional subsystem.",source:"@site/docs/resources/server/conditional.md",sourceDirName:"resources/server",slug:"/resources/server/conditional",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/server/conditional",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Advancements",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/server/advancements"},next:{title:"Global Loot Modifiers",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/server/glm"}},s={},l=[{value:"Implementations",id:"implementations",level:2},{value:"Conditions",id:"conditions",level:2},{value:"True and False",id:"true-and-false",level:3},{value:"Not, And, and Or",id:"not-and-and-or",level:3},{value:"Mod Loaded",id:"mod-loaded",level:3},{value:"Item Exists",id:"item-exists",level:3},{value:"Tag Empty",id:"tag-empty",level:3},{value:"Creating Custom Conditions",id:"creating-custom-conditions",level:2},{value:"ICondition",id:"icondition",level:3},{value:"IConditionSerializer",id:"iconditionserializer",level:3}],p={toc:l},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"conditionally-loaded-data"},"Conditionally-Loaded Data"),(0,r.kt)("p",null,"There are times when modders may want to include data-driven objects using information from another mod without having to explicitly make that mod a dependency. Other cases may be to swap out certain objects with other modded entries when they are present. This can be done through the conditional subsystem."),(0,r.kt)("h2",{id:"implementations"},"Implementations"),(0,r.kt)("p",null,"Currently, conditional loading is implemented for recipes and advancements. For any conditional recipe or advancement, a list of conditions to datum pair is loaded. If the conditions specified for a datum in the list is true, then that datum is returned. Otherwise, the datum is discarded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  // The type needs to be specified for recipes as they can have custom serializers\n  // Advancements do not need this type\n  "type": "forge:conditional",\n  \n  "recipes": [ // Or \'advancements\' for Advancements\n    {\n      // The conditions to check\n      "conditions": [\n        // Conditions in the list are ANDed together\n        {\n          // Condition 1\n        },\n        {\n          // Condition 2\n        }\n      ],\n      "recipe": { // Or \'advancement\' for Advancements\n        // The recipe to use if all conditions succeed\n      }\n    },\n    {\n      // Next condition to check if the previous fails\n    },\n  ]\n}\n')),(0,r.kt)("p",null,"Conditionally-loaded data additionally have wrappers for ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/datagen/server/recipes"},"data generation")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"ConditionalRecipe$Builder")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ConditionalAdvancement$Builder"),"."),(0,r.kt)("h2",{id:"conditions"},"Conditions"),(0,r.kt)("p",null,"Conditions are specified by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," to the name of the condition as specified by ",(0,r.kt)("a",{parentName:"p",href:"#iconditionserializer"},(0,r.kt)("inlineCode",{parentName:"a"},"IConditionSerializer#getID")),"."),(0,r.kt)("h3",{id:"true-and-false"},"True and False"),(0,r.kt)("p",null,"Boolean conditions consist of no data and return the expected value of the condition. They are represented by ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// For some condition\n{\n  // Will always return true (or false for \'forge:false\')\n  "type": "forge:true"\n}\n')),(0,r.kt)("h3",{id:"not-and-and-or"},"Not, And, and Or"),(0,r.kt)("p",null,"Boolean operator conditions consist of the condition(s) being operated upon and apply the following logic. They are represented by ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:not"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:and"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:or"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// For some condition\n{\n  // Inverts the result of the stored condition\n  "type": "forge:not",\n  "value": {\n    // A condition\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// For some condition\n{\n  // ANDs the stored conditions together (or ORs for \'forge:or\')\n  "type": "forge:and",\n  "values": [\n    {\n      // First condition\n    },\n    {\n      // Second condition to be ANDed (or ORed for \'forge:or\')\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"mod-loaded"},"Mod Loaded"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ModLoadedCondition")," returns true whenever the specified mod with the given id is loaded in the current application. This is represented by ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:mod_loaded"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// For some condition\n{\n  "type": "forge:mod_loaded",\n   // Returns true if \'examplemod\' is loaded\n  "modid": "examplemod"\n}\n')),(0,r.kt)("h3",{id:"item-exists"},"Item Exists"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ItemExistsCondition")," returns true whenever the given item has been registered in the current application. This is represented by ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:item_exists"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// For some condition\n{\n  "type": "forge:item_exists",\n   // Returns true if \'examplemod:example_item\' has been registered\n  "item": "examplemod:example_item"\n}\n')),(0,r.kt)("h3",{id:"tag-empty"},"Tag Empty"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TagEmptyCondition")," returns true whenever the given item tag has no items within it. This is represented by ",(0,r.kt)("inlineCode",{parentName:"p"},"forge:tag_empty"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// For some condition\n{\n  "type": "forge:tag_empty",\n   // Returns true if \'examplemod:example_tag\' is an item tag with no entries\n  "tag": "examplemod:example_tag"\n}\n')),(0,r.kt)("h2",{id:"creating-custom-conditions"},"Creating Custom Conditions"),(0,r.kt)("p",null,"Custom conditions can be created by implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"ICondition")," and its associated ",(0,r.kt)("inlineCode",{parentName:"p"},"IConditionSerializer"),"."),(0,r.kt)("h3",{id:"icondition"},"ICondition"),(0,r.kt)("p",null,"Any condition only need to implement two methods:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"getID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The registry name of the condition. Must be equivalent to ",(0,r.kt)("a",{parentName:"td",href:"#iconditionserializer"},(0,r.kt)("inlineCode",{parentName:"a"},"IConditionSerializer#getID")),". Used only for ",(0,r.kt)("a",{parentName:"td",href:"/Neoforge-Korean-Documentation/en/docs/datagen/server/recipes"},"data generation"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"test"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns true if the condition has been satisfied.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"#test")," has access to some ",(0,r.kt)("inlineCode",{parentName:"p"},"IContext")," representing the state of the game. Currently, only tags can be obtained from a registry.")),(0,r.kt)("h3",{id:"iconditionserializer"},"IConditionSerializer"),(0,r.kt)("p",null,"Serializers need to implement three methods:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"getID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The registry name of the condition. Must be equivalent to ",(0,r.kt)("a",{parentName:"td",href:"#icondition"},(0,r.kt)("inlineCode",{parentName:"a"},"ICondition#getID")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"read"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reads the condition data from JSON.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"write"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Writes the given condition data to JSON.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Condition serializers are not responsible for writing or reading the type of the serializer, similar to other serializer implementations in Minecraft.")),(0,r.kt)("p",null,"Afterwards, a static instance should be declared to hold the initialized serializer and then registered using ",(0,r.kt)("inlineCode",{parentName:"p"},"CraftingHelper#register")," either during the ",(0,r.kt)("inlineCode",{parentName:"p"},"RegisterEvent")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"RecipeSerializer"),"s or during ",(0,r.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// In some serializer class\npublic static final ExampleConditionSerializer INSTANCE = new ExampleConditionSerializer();\n\n// In some handler class\npublic void registerSerializers(RegisterEvent event) {\n  event.register(ForgeRegistries.Keys.RECIPE_SERIALIZERS,\n    helper -> CraftingHelper.register(INSTANCE)\n  );\n}\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If using ",(0,r.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent")," to register a condition serializer, it must be enqueued to the synchronous work queue via ",(0,r.kt)("inlineCode",{parentName:"p"},"FMLCommonSetupEvent#enqueueWork")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"CraftingHelper#register")," is not thread-safe.")))}c.isMDXComponent=!0}}]);