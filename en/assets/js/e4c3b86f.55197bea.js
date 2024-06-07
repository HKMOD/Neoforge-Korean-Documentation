"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1131],{2124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=t(5893),r=t(1151);const s={},d="Ingredients",c={id:"resources/server/recipes/ingredients",title:"Ingredients",description:"Ingredients are predicate handlers for item-based inputs which check whether a certain ItemStack meets the condition to be a valid input in a recipe. All vanilla recipes that take inputs use an Ingredient or a list of Ingredients, which is then merged into a single Ingredient.",source:"@site/versioned_docs/version-1.20.4/resources/server/recipes/ingredients.md",sourceDirName:"resources/server/recipes",slug:"/resources/server/recipes/ingredients",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/server/recipes/ingredients",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Non-Datapack Recipes",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/server/recipes/incode"},next:{title:"Tags",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/server/tags"}},l={},o=[{value:"Custom Ingredients",id:"custom-ingredients",level:2},{value:"NeoForge Types",id:"neoforge-types",level:3},{value:"CompoundIngredient",id:"compoundingredient",level:4},{value:"StrictNBTIngredient",id:"strictnbtingredient",level:4},{value:"PartialNBTIngredient",id:"partialnbtingredient",level:3},{value:"IntersectionIngredient",id:"intersectioningredient",level:3},{value:"DifferenceIngredient",id:"differenceingredient",level:3},{value:"Creating Custom Ingredients",id:"creating-custom-ingredients",level:2},{value:"Ingredient Subclass",id:"ingredient-subclass",level:3},{value:"IIngredientSerializer",id:"iingredientserializer",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ingredients",children:"Ingredients"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Ingredient"}),"s are predicate handlers for item-based inputs which check whether a certain ",(0,i.jsx)(n.code,{children:"ItemStack"})," meets the condition to be a valid input in a recipe. All ",(0,i.jsx)(n.a,{href:"https://minecraft.wiki/w/Recipe#List_of_recipe_types",children:"vanilla recipes"})," that take inputs use an ",(0,i.jsx)(n.code,{children:"Ingredient"})," or a list of ",(0,i.jsx)(n.code,{children:"Ingredient"}),"s, which is then merged into a single ",(0,i.jsx)(n.code,{children:"Ingredient"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"custom-ingredients",children:"Custom Ingredients"}),"\n",(0,i.jsxs)(n.p,{children:["Custom ingredients can be specified by setting ",(0,i.jsx)(n.code,{children:"type"})," to the name of the ",(0,i.jsx)(n.a,{href:"#iingredientserializer",children:"ingredient's serializer"}),", with the exception of ",(0,i.jsx)(n.a,{href:"#compoundingredient",children:"compound ingredients"}),". When no type is specified, ",(0,i.jsx)(n.code,{children:"type"})," defaults to the vanilla ingredient ",(0,i.jsx)(n.code,{children:"minecraft:item"}),". Custom ingredients can also easily be used in ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/datagen/recipes",children:"data generation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"neoforge-types",children:"NeoForge Types"}),"\n",(0,i.jsxs)(n.p,{children:["NeoForge provides a few additional ",(0,i.jsx)(n.code,{children:"Ingredient"})," types for programmers to implement."]}),"\n",(0,i.jsx)(n.h4,{id:"compoundingredient",children:"CompoundIngredient"}),"\n",(0,i.jsxs)(n.p,{children:["Though they are functionally identical, Compound ingredients replaces the way one would implement a list of ingredients would in a recipe. They work as a set OR where the passed in stack must be within at least one of the supplied ingredients. This change was made to allow custom ingredients to work correctly within lists. As such, ",(0,i.jsx)(n.strong,{children:"no type"})," needs to be specified."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some input\n[\n  // At least one of these ingredients must match to succeed\n  {\n    // Ingredient\n  },\n  {\n    // Custom ingredient\n    "type": "examplemod:example_ingredient"\n  }\n]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"strictnbtingredient",children:"StrictNBTIngredient"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"StrictNBTIngredient"}),"s compare the item, damage, and the share tags (as defined by ",(0,i.jsx)(n.code,{children:"IForgeItem#getShareTag"}),") on an ",(0,i.jsx)(n.code,{children:"ItemStack"})," for exact equivalency. This can be used by specifying the ",(0,i.jsx)(n.code,{children:"type"})," as ",(0,i.jsx)(n.code,{children:"forge:nbt"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some input\n{\n  "type": "forge:nbt",\n  "item": "examplemod:example_item",\n  "nbt": {\n    // Add nbt data (must match exactly what is on the stack)\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"partialnbtingredient",children:"PartialNBTIngredient"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PartialNBTIngredient"}),"s are a looser version of ",(0,i.jsx)(n.a,{href:"#strictnbtingredient",children:(0,i.jsx)(n.code,{children:"StrictNBTIngredient"})})," as they compare against a single or set of items and only keys specified within the share tag (as defined by ",(0,i.jsx)(n.code,{children:"IForgeItem#getShareTag"}),"). This can be used by specifying the ",(0,i.jsx)(n.code,{children:"type"})," as ",(0,i.jsx)(n.code,{children:"forge:partial_nbt"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some input\n{\n  "type": "forge:partial_nbt",\n\n  // Either \'item\' or \'items\' must be specified\n  // If both are specified, only \'item\' will be read\n  "item": "examplemod:example_item",\n  "items": [\n    "examplemod:example_item",\n    "examplemod:example_item2"\n    // ...\n  ],\n\n  "nbt": {\n    // Checks only for equivalency on \'key1\' and \'key2\'\n    // All other keys in the stack will not be checked\n    "key1": "data1",\n    "key2": {\n      // Data 2\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"intersectioningredient",children:"IntersectionIngredient"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"IntersectionIngredient"}),"s work as a set AND where the passed in stack must match all supplied ingredients. There must be at least two ingredients supplied to this. This can be used by specifying the ",(0,i.jsx)(n.code,{children:"type"})," as ",(0,i.jsx)(n.code,{children:"forge:intersection"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some input\n{\n  "type": "forge:intersection",\n\n  // All of these ingredients must return true to succeed\n  "children": [\n    {\n      // Ingredient 1\n    },\n    {\n      // Ingredient 2\n    }\n    // ...\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"differenceingredient",children:"DifferenceIngredient"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DifferenceIngredient"}),"s work as a set subtraction (SUB) where the passed in stack must match the first ingredient but must not match the second ingredient. This can be used by specifying the ",(0,i.jsx)(n.code,{children:"type"})," as ",(0,i.jsx)(n.code,{children:"forge:difference"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// For some input\n{\n  "type": "forge:difference",\n  "base": {\n    // Ingredient the stack is in\n  },\n  "subtracted": {\n    // Ingredient the stack is NOT in\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"creating-custom-ingredients",children:"Creating Custom Ingredients"}),"\n",(0,i.jsxs)(n.p,{children:["Custom ingredients can be created by implementing ",(0,i.jsx)(n.code,{children:"IIngredientSerializer"})," for the created ",(0,i.jsx)(n.code,{children:"Ingredient"})," subclass."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Custom ingredients should subclass ",(0,i.jsx)(n.code,{children:"AbstractIngredient"})," as it provides some useful abstractions for ease of implementation."]})}),"\n",(0,i.jsx)(n.h3,{id:"ingredient-subclass",children:"Ingredient Subclass"}),"\n",(0,i.jsx)(n.p,{children:"There are three important methods to implement for each ingredient subclass:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"getSerializer"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Returns the ",(0,i.jsx)(n.a,{href:"#iingredientserializer",children:"serializer"})," used to read and write the ingredient."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"test"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Returns true if the input is valid for this ingredient."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"isSimple"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Returns false if the ingredient matches on the stack's tag. ",(0,i.jsx)(n.code,{children:"AbstractIngredient"})," subclasses will need to define this behavior, while ",(0,i.jsx)(n.code,{children:"Ingredient"})," subclasses return ",(0,i.jsx)(n.code,{children:"true"})," by default."]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"All other defined methods are left as an exercise to the reader to use as required for the ingredient subclass."}),"\n",(0,i.jsx)(n.h3,{id:"iingredientserializer",children:"IIngredientSerializer"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"IIngredientSerializer"})," subtypes must implement three methods:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"parse (JSON)"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Converts a ",(0,i.jsx)(n.code,{children:"JsonObject"})," to an ",(0,i.jsx)(n.code,{children:"Ingredient"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"parse (Network)"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Reads the network buffer to decode an ",(0,i.jsx)(n.code,{children:"Ingredient"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"write"}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Writes an ",(0,i.jsx)(n.code,{children:"Ingredient"})," to the network buffer."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, ",(0,i.jsx)(n.code,{children:"Ingredient"})," subclasses should implement ",(0,i.jsx)(n.code,{children:"Ingredient#toJson"})," for use with ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/datagen/recipes",children:"data generation"}),". ",(0,i.jsx)(n.code,{children:"AbstractIngredient"})," subclasses make ",(0,i.jsx)(n.code,{children:"#toJson"})," an abstract method requiring the method to be implemented."]}),"\n",(0,i.jsxs)(n.p,{children:["Afterwards, a static instance should be declared to hold the initialized serializer and then registered using ",(0,i.jsx)(n.code,{children:"CraftingHelper#register"})," either during the ",(0,i.jsx)(n.code,{children:"RegisterEvent"})," for ",(0,i.jsx)(n.code,{children:"RecipeSerializer"}),"s or during ",(0,i.jsx)(n.code,{children:"FMLCommonSetupEvent"}),". The ",(0,i.jsx)(n.code,{children:"Ingredient"})," subclass return the static instance of the serializer in ",(0,i.jsx)(n.code,{children:"Ingredient#getSerializer"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// In some serializer class\npublic static final ExampleIngredientSerializer INSTANCE = new ExampleIngredientSerializer();\n\n// In some handler class\npublic void registerSerializers(RegisterEvent event) {\n  event.register(ForgeRegistries.Keys.RECIPE_SERIALIZERS,\n    helper -> CraftingHelper.register(registryName, INSTANCE)\n  );\n}\n\n// In some ingredient subclass\n@Override\npublic IIngredientSerializer<? extends Ingredient> getSerializer() {\n  return INSTANCE;\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If using ",(0,i.jsx)(n.code,{children:"FMLCommonSetupEvent"})," to register an ingredient serializer, it must be enqueued to the synchronous work queue via ",(0,i.jsx)(n.code,{children:"FMLCommonSetupEvent#enqueueWork"})," as ",(0,i.jsx)(n.code,{children:"CraftingHelper#register"})," is not thread-safe."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>d});var i=t(7294);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);