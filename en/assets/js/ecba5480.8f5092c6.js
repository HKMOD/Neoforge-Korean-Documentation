"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1370],{1854:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var n=t(5893),r=t(1151);const s={},c="Custom Recipes",o={id:"resources/server/recipes/custom",title:"Custom Recipes",description:"Every recipe definition is made up of three components: the Recipe implementation which holds the data and handles the execution logic with the provided inputs, the RecipeType which represents the category or context the recipe will be used in, and the RecipeSerializer which handles decoding and network communication of the recipe data. How one chooses to use the recipe is up to the implementor.",source:"@site/versioned_docs/version-1.20.4/resources/server/recipes/custom.md",sourceDirName:"resources/server/recipes",slug:"/resources/server/recipes/custom",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/server/recipes/custom",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Recipes",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/server/recipes/"},next:{title:"Non-Datapack Recipes",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/server/recipes/incode"}},d={},a=[{value:"Recipe",id:"recipe",level:2},{value:"RecipeType",id:"recipetype",level:2},{value:"RecipeSerializer",id:"recipeserializer",level:2},{value:"Building the JSON",id:"building-the-json",level:2},{value:"Non-Item Logic",id:"non-item-logic",level:2},{value:"Data Generation",id:"data-generation",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"custom-recipes",children:"Custom Recipes"}),"\n",(0,n.jsxs)(i.p,{children:["Every recipe definition is made up of three components: the ",(0,n.jsx)(i.code,{children:"Recipe"})," implementation which holds the data and handles the execution logic with the provided inputs, the ",(0,n.jsx)(i.code,{children:"RecipeType"})," which represents the category or context the recipe will be used in, and the ",(0,n.jsx)(i.code,{children:"RecipeSerializer"})," which handles decoding and network communication of the recipe data. How one chooses to use the recipe is up to the implementor."]}),"\n",(0,n.jsx)(i.h2,{id:"recipe",children:"Recipe"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Recipe"})," interface describes the recipe data and the execution logic. This includes matching the inputs and providing the associated result. As the recipe subsystem performs item transformations by default, the inputs are supplied through a ",(0,n.jsx)(i.code,{children:"Container"})," subtype."]}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Container"}),"s passed into the recipe should be treated as if its contents were immutable. Any mutable operations should be performed on a copy of the input through ",(0,n.jsx)(i.code,{children:"ItemStack#copy"}),"."]})}),"\n",(0,n.jsxs)(i.p,{children:["To be able to obtain a recipe instance from the manager, ",(0,n.jsx)(i.code,{children:"#matches"})," must return true. This method checks against the provided container to see whether the associated inputs are valid. ",(0,n.jsx)(i.code,{children:"Ingredient"}),"s can be used for validation by calling ",(0,n.jsx)(i.code,{children:"Ingredient#test"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["If the recipe has been chosen, it is then built using ",(0,n.jsx)(i.code,{children:"#assemble"})," which may use data from the inputs to create the result."]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"#assemble"})," should always produce a unique ",(0,n.jsx)(i.code,{children:"ItemStack"}),". If unsure whether ",(0,n.jsx)(i.code,{children:"#assemble"})," does so, call ",(0,n.jsx)(i.code,{children:"ItemStack#copy"})," on the result before returning."]})}),"\n",(0,n.jsx)(i.p,{children:"Most of the other methods are purely for integration with the recipe book."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"public record ExampleRecipe(Ingredient input, int data, ItemStack output) implements Recipe<Container> {\n  // Implement methods here\n}\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"While a record is used in the above example, it is not required to do so in your own implementation."})}),"\n",(0,n.jsx)(i.h2,{id:"recipetype",children:"RecipeType"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"RecipeType"})," is responsible for defining the category or context the recipe will be used within. For example, if a recipe was going to be smelted in a furnace, it would have a type of ",(0,n.jsx)(i.code,{children:"RecipeType#SMELTING"}),". Being blasted in a blast furnace would have a type of ",(0,n.jsx)(i.code,{children:"RecipeType#BLASTING"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["If none of the existing types match what context the recipe will be used within, then a new ",(0,n.jsx)(i.code,{children:"RecipeType"})," must be ",(0,n.jsx)(i.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/registries#methods-for-registering",children:"registered"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"RecipeType"})," instance must then be returned by ",(0,n.jsx)(i.code,{children:"Recipe#getType"})," in the new recipe subtype."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"// For some RegistryObject<RecipeType> EXAMPLE_TYPE\n// In ExampleRecipe\n@Override\npublic RecipeType<?> getType() {\n  return EXAMPLE_TYPE.get();\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"recipeserializer",children:"RecipeSerializer"}),"\n",(0,n.jsxs)(i.p,{children:["A ",(0,n.jsx)(i.code,{children:"RecipeSerializer"})," is responsible for decoding JSONs and communicating across the network for an associated ",(0,n.jsx)(i.code,{children:"Recipe"})," subtype. Each recipe decoded by the serializer is saved as a unique instance within the ",(0,n.jsx)(i.code,{children:"RecipeManager"}),". A ",(0,n.jsx)(i.code,{children:"RecipeSerializer"})," must be ",(0,n.jsx)(i.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/registries#methods-for-registering",children:"registered"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Only three methods need to be implemented for a ",(0,n.jsx)(i.code,{children:"RecipeSerializer"}),":"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"center"},children:"Method"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"fromJson"}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:["Decodes a JSON into the ",(0,n.jsx)(i.code,{children:"Recipe"})," subtype."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"toNetwork"}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:["Encodes a ",(0,n.jsx)(i.code,{children:"Recipe"})," to the buffer to send to the client. The recipe identifier does not need to be encoded."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"center"},children:"fromNetwork"}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:["Decodes a ",(0,n.jsx)(i.code,{children:"Recipe"})," from the buffer sent from the server. The recipe identifier does not need to be decoded."]})]})]})]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"RecipeSerializer"})," instance must then be returned by ",(0,n.jsx)(i.code,{children:"Recipe#getSerializer"})," in the new recipe subtype."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"// For some RegistryObject<RecipeSerializer> EXAMPLE_SERIALIZER\n// In ExampleRecipe\n@Override\npublic RecipeSerializer<?> getSerializer() {\n  return EXAMPLE_SERIALIZER.get();\n}\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["There are some useful methods to make reading and writing data for recipes easier. ",(0,n.jsx)(i.code,{children:"Ingredient"}),"s can use ",(0,n.jsx)(i.code,{children:"#fromJson"}),", ",(0,n.jsx)(i.code,{children:"#toNetwork"}),", and ",(0,n.jsx)(i.code,{children:"#fromNetwork"})," while ",(0,n.jsx)(i.code,{children:"ItemStack"}),"s can use ",(0,n.jsx)(i.code,{children:"CraftingHelper#getItemStack"}),", ",(0,n.jsx)(i.code,{children:"FriendlyByteBuf#writeItem"}),", and ",(0,n.jsx)(i.code,{children:"FriendlyByteBuf#readItem"}),"."]})}),"\n",(0,n.jsx)(i.h2,{id:"building-the-json",children:"Building the JSON"}),"\n",(0,n.jsxs)(i.p,{children:["Custom Recipe JSONs are stored in the same place as other ",(0,n.jsx)(i.a,{href:"https://minecraft.wiki/w/Recipe#JSON_format",children:"recipes"}),". The specified ",(0,n.jsx)(i.code,{children:"type"})," should represent the registry name of the ",(0,n.jsx)(i.strong,{children:"recipe serializer"}),". Any additional data is specified by the serializer during decoding."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:'{\n  // The custom serializer registry name\n  "type": "examplemod:example_serializer",\n  "input": {\n    // Some ingredient input\n  },\n  "data": 0, // Some data wanted for the recipe\n  "output": {\n    // Some stack output\n  }\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"non-item-logic",children:"Non-Item Logic"}),"\n",(0,n.jsxs)(i.p,{children:["If items are not used as part of the input or result of a recipe, then the normal methods provided in ",(0,n.jsx)(i.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/server/recipes/#recipe-manager",children:(0,n.jsx)(i.code,{children:"RecipeManager"})})," will not be useful. Instead, an additional method for testing a recipe's validity and/or supplying the result should be added to the custom ",(0,n.jsx)(i.code,{children:"Recipe"})," instance. From there, all the recipes for that specific ",(0,n.jsx)(i.code,{children:"RecipeType"})," can be obtained via ",(0,n.jsx)(i.code,{children:"RecipeManager#getAllRecipesFor"})," and then checked and/or supplied the result using the newly implemented methods."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"// In some Recipe subimplementation ExampleRecipe\n\n// Checks the block at the position to see if it matches the stored data\nboolean matches(Level level, BlockPos pos);\n\n// Creates the block state to set the block at the specified position to\nBlockState assemble(RegistryAccess access);\n\n// In some manager class\npublic Optional<ExampleRecipe> getRecipeFor(Level level, BlockPos pos) {\n  return level.getRecipeManager()\n    .getAllRecipesFor(exampleRecipeType) // Gets all recipes\n    .stream() // Looks through all recipes for types\n    .filter(recipe -> recipe.matches(level, pos)) // Checks if the recipe inputs are valid\n    .findFirst(); // Finds the first recipe whose inputs match\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"data-generation",children:"Data Generation"}),"\n",(0,n.jsxs)(i.p,{children:["All custom recipes, regardless of input or output data, can be created into a ",(0,n.jsx)(i.code,{children:"FinishedRecipe"})," for ",(0,n.jsx)(i.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/datagen/recipes#custom-recipe-serializers",children:"data generation"})," using the ",(0,n.jsx)(i.code,{children:"RecipeProvider"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>c});var n=t(7294);const r={},s=n.createContext(r);function c(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);