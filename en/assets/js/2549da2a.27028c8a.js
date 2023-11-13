"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5951],{5940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(5893),o=t(1151);const r={},d="Conditionally-Loaded Data",s={id:"resources/server/conditional",title:"Conditionally-Loaded Data",description:"There are times when modders may want to include data-driven objects using information from another mod without having to explicitly make that mod a dependency. Other cases may be to swap out certain objects with other modded entries when they are present. This can be done through the conditional subsystem.",source:"@site/docs/resources/server/conditional.md",sourceDirName:"resources/server",slug:"/resources/server/conditional",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/server/conditional",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Advancements",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/server/advancements"},next:{title:"Global Loot Modifiers",permalink:"/Neoforge-Korean-Documentation/en/docs/resources/server/glm"}},a={},l=[{value:"Implementations",id:"implementations",level:2},{value:"Conditions",id:"conditions",level:2},{value:"True and False",id:"true-and-false",level:3},{value:"Not, And, and Or",id:"not-and-and-or",level:3},{value:"Mod Loaded",id:"mod-loaded",level:3},{value:"Item Exists",id:"item-exists",level:3},{value:"Tag Empty",id:"tag-empty",level:3},{value:"Creating Custom Conditions",id:"creating-custom-conditions",level:2},{value:"ICondition",id:"icondition",level:3},{value:"IConditionSerializer",id:"iconditionserializer",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"conditionally-loaded-data",children:"Conditionally-Loaded Data"}),"\n",(0,i.jsx)(n.p,{children:"There are times when modders may want to include data-driven objects using information from another mod without having to explicitly make that mod a dependency. Other cases may be to swap out certain objects with other modded entries when they are present. This can be done through the conditional subsystem."}),"\n",(0,i.jsx)(n.h2,{id:"implementations",children:"Implementations"}),"\n",(0,i.jsx)(n.p,{children:"Currently, conditional loading is implemented for recipes and advancements. For any conditional recipe or advancement, a list of conditions to datum pair is loaded. If the conditions specified for a datum in the list is true, then that datum is returned. Otherwise, the datum is discarded."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  // The type needs to be specified for recipes as they can have custom serializers\n  // Advancements do not need this type\n  "type": "forge:conditional",\n  \n  "recipes": [ // Or \'advancements\' for Advancements\n    {\n      // The conditions to check\n      "conditions": [\n        // Conditions in the list are ANDed together\n        {\n          // Condition 1\n        },\n        {\n          // Condition 2\n        }\n      ],\n      "recipe": { // Or \'advancement\' for Advancements\n        // The recipe to use if all conditions succeed\n      }\n    },\n    {\n      // Next condition to check if the previous fails\n    },\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Conditionally-loaded data additionally have wrappers for ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/datagen/server/recipes",children:"data generation"})," through ",(0,i.jsx)(n.code,{children:"ConditionalRecipe$Builder"})," and ",(0,i.jsx)(n.code,{children:"ConditionalAdvancement$Builder"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"conditions",children:"Conditions"}),"\n",(0,i.jsxs)(n.p,{children:["Conditions are specified by setting ",(0,i.jsx)(n.code,{children:"type"})," to the name of the condition as specified by ",(0,i.jsx)(n.a,{href:"#iconditionserializer",children:(0,i.jsx)(n.code,{children:"IConditionSerializer#getID"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"true-and-false",children:"True and False"}),"\n",(0,i.jsxs)(n.p,{children:["Boolean conditions consist of no data and return the expected value of the condition. They are represented by ",(0,i.jsx)(n.code,{children:"forge:true"})," and ",(0,i.jsx)(n.code,{children:"forge:false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some condition\n{\n  // Will always return true (or false for \'forge:false\')\n  "type": "forge:true"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"not-and-and-or",children:"Not, And, and Or"}),"\n",(0,i.jsxs)(n.p,{children:["Boolean operator conditions consist of the condition(s) being operated upon and apply the following logic. They are represented by ",(0,i.jsx)(n.code,{children:"forge:not"}),", ",(0,i.jsx)(n.code,{children:"forge:and"}),", and ",(0,i.jsx)(n.code,{children:"forge:or"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some condition\n{\n  // Inverts the result of the stored condition\n  "type": "forge:not",\n  "value": {\n    // A condition\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some condition\n{\n  // ANDs the stored conditions together (or ORs for \'forge:or\')\n  "type": "forge:and",\n  "values": [\n    {\n      // First condition\n    },\n    {\n      // Second condition to be ANDed (or ORed for \'forge:or\')\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"mod-loaded",children:"Mod Loaded"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ModLoadedCondition"})," returns true whenever the specified mod with the given id is loaded in the current application. This is represented by ",(0,i.jsx)(n.code,{children:"forge:mod_loaded"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some condition\n{\n  "type": "forge:mod_loaded",\n   // Returns true if \'examplemod\' is loaded\n  "modid": "examplemod"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"item-exists",children:"Item Exists"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ItemExistsCondition"})," returns true whenever the given item has been registered in the current application. This is represented by ",(0,i.jsx)(n.code,{children:"forge:item_exists"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some condition\n{\n  "type": "forge:item_exists",\n   // Returns true if \'examplemod:example_item\' has been registered\n  "item": "examplemod:example_item"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"tag-empty",children:"Tag Empty"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TagEmptyCondition"})," returns true whenever the given item tag has no items within it. This is represented by ",(0,i.jsx)(n.code,{children:"forge:tag_empty"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some condition\n{\n  "type": "forge:tag_empty",\n   // Returns true if \'examplemod:example_tag\' is an item tag with no entries\n  "tag": "examplemod:example_tag"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"creating-custom-conditions",children:"Creating Custom Conditions"}),"\n",(0,i.jsxs)(n.p,{children:["Custom conditions can be created by implementing ",(0,i.jsx)(n.code,{children:"ICondition"})," and its associated ",(0,i.jsx)(n.code,{children:"IConditionSerializer"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"icondition",children:"ICondition"}),"\n",(0,i.jsx)(n.p,{children:"Any condition only need to implement two methods:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"getID"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The registry name of the condition. Must be equivalent to ",(0,i.jsx)(n.a,{href:"#iconditionserializer",children:(0,i.jsx)(n.code,{children:"IConditionSerializer#getID"})}),". Used only for ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/datagen/server/recipes",children:"data generation"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"test"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Returns true if the condition has been satisfied."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Every ",(0,i.jsx)(n.code,{children:"#test"})," has access to some ",(0,i.jsx)(n.code,{children:"IContext"})," representing the state of the game. Currently, only tags can be obtained from a registry."]})}),"\n",(0,i.jsx)(n.h3,{id:"iconditionserializer",children:"IConditionSerializer"}),"\n",(0,i.jsx)(n.p,{children:"Serializers need to implement three methods:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"getID"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The registry name of the condition. Must be equivalent to ",(0,i.jsx)(n.a,{href:"#icondition",children:(0,i.jsx)(n.code,{children:"ICondition#getID"})}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"read"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Reads the condition data from JSON."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"write"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Writes the given condition data to JSON."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Condition serializers are not responsible for writing or reading the type of the serializer, similar to other serializer implementations in Minecraft."})}),"\n",(0,i.jsxs)(n.p,{children:["Afterwards, a static instance should be declared to hold the initialized serializer and then registered using ",(0,i.jsx)(n.code,{children:"CraftingHelper#register"})," either during the ",(0,i.jsx)(n.code,{children:"RegisterEvent"})," for ",(0,i.jsx)(n.code,{children:"RecipeSerializer"}),"s or during ",(0,i.jsx)(n.code,{children:"FMLCommonSetupEvent"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// In some serializer class\npublic static final ExampleConditionSerializer INSTANCE = new ExampleConditionSerializer();\n\n// In some handler class\npublic void registerSerializers(RegisterEvent event) {\n  event.register(ForgeRegistries.Keys.RECIPE_SERIALIZERS,\n    helper -> CraftingHelper.register(INSTANCE)\n  );\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["If using ",(0,i.jsx)(n.code,{children:"FMLCommonSetupEvent"})," to register a condition serializer, it must be enqueued to the synchronous work queue via ",(0,i.jsx)(n.code,{children:"FMLCommonSetupEvent#enqueueWork"})," as ",(0,i.jsx)(n.code,{children:"CraftingHelper#register"})," is not thread-safe."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var i=t(7294);const o={},r=i.createContext(o);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);