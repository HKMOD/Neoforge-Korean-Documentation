"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2911],{2775:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=n(5893),t=n(1151);const c={},d="Recipe Generation",a={id:"datagen/recipes",title:"Recipe Generation",description:"Recipes can be generated for a mod by subclassing RecipeProvider and implementing #buildRecipes. A recipe is supplied for data generation once a Recipe object is provided to the RecipeOutput. Recipes can either be created and supplied manually or, for convenience, created using a RecipeBuilder.",source:"@site/docs/datagen/recipes.md",sourceDirName:"datagen",slug:"/datagen/recipes",permalink:"/Neoforge-Korean-Documentation/docs/datagen/recipes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Loot Table Generation",permalink:"/Neoforge-Korean-Documentation/docs/datagen/loottables"},next:{title:"Tag Generation",permalink:"/Neoforge-Korean-Documentation/docs/datagen/tags"}},o={},s=[{value:"<code>RecipeBuilder</code>",id:"recipebuilder",level:2},{value:"ShapedRecipeBuilder",id:"shapedrecipebuilder",level:3},{value:"Additional Validation Checks",id:"additional-validation-checks",level:4},{value:"ShapelessRecipeBuilder",id:"shapelessrecipebuilder",level:3},{value:"SimpleCookingRecipeBuilder",id:"simplecookingrecipebuilder",level:3},{value:"SingleItemRecipeBuilder",id:"singleitemrecipebuilder",level:3},{value:"Non-<code>RecipeBuilder</code> Builders",id:"non-recipebuilder-builders",level:2},{value:"SmithingTransformRecipeBuilder",id:"smithingtransformrecipebuilder",level:3},{value:"SmithingTrimRecipeBuilder",id:"smithingtrimrecipebuilder",level:3},{value:"SpecialRecipeBuilder",id:"specialrecipebuilder",level:3},{value:"Conditional Recipes",id:"conditional-recipes",level:2},{value:"IConditionBuilder",id:"iconditionbuilder",level:3},{value:"Custom Recipe Serializers",id:"custom-recipe-serializers",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"recipe-generation",children:"Recipe Generation"}),"\n",(0,r.jsxs)(i.p,{children:["Recipes can be generated for a mod by subclassing ",(0,r.jsx)(i.code,{children:"RecipeProvider"})," and implementing ",(0,r.jsx)(i.code,{children:"#buildRecipes"}),". A recipe is supplied for data generation once a ",(0,r.jsx)(i.code,{children:"Recipe"})," object is provided to the ",(0,r.jsx)(i.code,{children:"RecipeOutput"}),". ",(0,r.jsx)(i.code,{children:"Recipe"}),"s can either be created and supplied manually or, for convenience, created using a ",(0,r.jsx)(i.code,{children:"RecipeBuilder"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["After implementation, the provider must be ",(0,r.jsx)(i.a,{href:"/Neoforge-Korean-Documentation/docs/resources/#data-generation",children:"added"})," to the ",(0,r.jsx)(i.code,{children:"DataGenerator"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"// On the MOD event bus\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // Tell generator to run only when server data are generating\n        event.includeServer(),\n        output -> new MyRecipeProvider(output, event.getLookupProvider())\n    );\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"recipebuilder",children:(0,r.jsx)(i.code,{children:"RecipeBuilder"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"RecipeBuilder"})," is an interface meant to be implemented to create ",(0,r.jsx)(i.code,{children:"Recipe"}),"s for generation. It provides basic definitions for unlocking, grouping, saving, and getting the result of a recipe. This is done through ",(0,r.jsx)(i.code,{children:"#unlockedBy"}),", ",(0,r.jsx)(i.code,{children:"#group"}),", ",(0,r.jsx)(i.code,{children:"#save"}),", and ",(0,r.jsx)(i.code,{children:"#getResult"})," respectively."]}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsxs)(i.p,{children:["Although ",(0,r.jsxs)(i.a,{href:"/Neoforge-Korean-Documentation/docs/resources/server/recipes/#recipe-itemstack-result",children:[(0,r.jsx)(i.code,{children:"ItemStack"})," outputs"]})," in recipes are not supported within vanilla recipe builders, the ",(0,r.jsx)(i.code,{children:"#save"})," methods can be implemented to do so. The only purpose of ",(0,r.jsx)(i.code,{children:"#getResult"})," is to determine the name of the recipe when none is provided."]})}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsxs)(i.p,{children:["For vanilla ",(0,r.jsx)(i.code,{children:"RecipeBuilder"}),"s, the item results being generated must have a valid ",(0,r.jsx)(i.code,{children:"RecipeCategory"})," specified; otherwise, a ",(0,r.jsx)(i.code,{children:"NullPointerException"})," will be thrown depending on its usage."]})}),"\n",(0,r.jsxs)(i.p,{children:["All recipe builders except for [",(0,r.jsx)(i.code,{children:"SpecialRecipeBuilder"}),"] require an advancement criteria to be specified. All recipes generate a criteria unlocking the recipe if the player has used the recipe previously. However, an additional criteria must be specified that allows the player to obtain the recipe without any prior knowledge. If any of the criteria specified is true, then the played will obtain the recipe for the recipe book."]}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsxs)(i.p,{children:["Recipe criteria commonly use ",(0,r.jsx)(i.code,{children:"InventoryChangeTrigger"})," to unlock their recipe when certain items are present in the user's inventory."]})}),"\n",(0,r.jsx)(i.h3,{id:"shapedrecipebuilder",children:"ShapedRecipeBuilder"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"ShapedRecipeBuilder"})," is used to generate shaped recipes. The builder can be initialized via ",(0,r.jsx)(i.code,{children:"#shaped"}),". The recipe group, input symbol pattern, symbol definition of ingredients, and the recipe unlock criteria can be specified before saving."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'// In RecipeProvider#buildRecipes(output)\nShapedRecipeBuilder.shaped(RecipeCategory.MISC, result)\n    .pattern("a a") // Create recipe pattern\n    .define(\'a\', item) // Define what the symbol represents\n    .unlockedBy("criteria", criteria) // How the recipe is unlocked\n    .save(output); // Add data to builder\n'})}),"\n",(0,r.jsx)(i.h4,{id:"additional-validation-checks",children:"Additional Validation Checks"}),"\n",(0,r.jsx)(i.p,{children:"Shaped recipes have some additional validation checks performed before building:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"A pattern must be defined and take in more than one item."}),"\n",(0,r.jsx)(i.li,{children:"All pattern rows must be the same width."}),"\n",(0,r.jsx)(i.li,{children:"A symbol cannot be defined more than once."}),"\n",(0,r.jsxs)(i.li,{children:["The space character (",(0,r.jsx)(i.code,{children:"' '"}),") is reserved for representing no item in a slot and, as such, cannot be defined."]}),"\n",(0,r.jsx)(i.li,{children:"A pattern must use all symbols defined by the user."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"shapelessrecipebuilder",children:"ShapelessRecipeBuilder"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"ShapelessRecipeBuilder"})," is used to generate shapeless recipes. The builder can be initialized via ",(0,r.jsx)(i.code,{children:"#shapeless"}),". The recipe group, input ingredients, and the recipe unlock criteria can be specified before saving."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'// In RecipeProvider#buildRecipes(output)\nShapelessRecipeBuilder.shapeless(RecipeCategory.MISC, result)\n    .requires(item) // Add item to the recipe\n    .unlockedBy("criteria", criteria) // How the recipe is unlocked\n    .save(output); // Add data to builder\n'})}),"\n",(0,r.jsx)(i.h3,{id:"simplecookingrecipebuilder",children:"SimpleCookingRecipeBuilder"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"SimpleCookingRecipeBuilder"})," is used to generate smelting, blasting, smoking, and campfire cooking recipes. Additionally, custom cooking recipes using the ",(0,r.jsx)(i.code,{children:"SimpleCookingSerializer"})," can also be data generated using this builder. The builder can be initialized via ",(0,r.jsx)(i.code,{children:"#smelting"}),", ",(0,r.jsx)(i.code,{children:"#blasting"}),", ",(0,r.jsx)(i.code,{children:"#smoking"}),", ",(0,r.jsx)(i.code,{children:"#campfireCooking"}),", or ",(0,r.jsx)(i.code,{children:"#generic"})," respectively. The recipe group and the recipe unlock criteria can be specified before saving."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'// In RecipeProvider#buildRecipes(output)\nSimpleCookingRecipeBuilder.smelting(input, RecipeCategory.MISC, result, experience, cookingTime)\n    .unlockedBy("criteria", criteria) // How the recipe is unlocked \n    .save(output); // Add data to builder\n'})}),"\n",(0,r.jsx)(i.h3,{id:"singleitemrecipebuilder",children:"SingleItemRecipeBuilder"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"SingleItemRecipeBuilder"})," is used to generate stonecutting recipes. Additionally, custom single item recipes using a serializer like SingleItemRecipe.Serializer can also be data generated using this builder. The builder can be initialized via ",(0,r.jsx)(i.code,{children:"#stonecutting"})," or through the constructor respectively. The recipe group and the recipe unlock criteria can be specified before saving."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'// In RecipeProvider#buildRecipes(output)\nSingleItemRecipeBuilder.stonecutting(input, RecipeCategory.MISC, result)\n    .unlockedBy("criteria", criteria) // How the recipe is unlocked\n    .save(output); // Add data to builder\n'})}),"\n",(0,r.jsxs)(i.h2,{id:"non-recipebuilder-builders",children:["Non-",(0,r.jsx)(i.code,{children:"RecipeBuilder"})," Builders"]}),"\n",(0,r.jsxs)(i.p,{children:["Some recipe builders do not implement ",(0,r.jsx)(i.code,{children:"RecipeBuilder"})," due to lacking features used by all previously mentioned recipes."]}),"\n",(0,r.jsx)(i.h3,{id:"smithingtransformrecipebuilder",children:"SmithingTransformRecipeBuilder"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"SmithingTransformRecipeBuilder"})," is used to generate smithing recipes which transform an item. Additionally, custom recipes using a serializer like SmithingTransformRecipe.Serializer can also be data generated using this builder. The builder can be initialized via ",(0,r.jsx)(i.code,{children:"#smithing"})," or through the constructor respectively. The recipe unlock criteria can be specified before saving."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'// In RecipeProvider#buildRecipes(output)\nSmithingTransformRecipeBuilder.smithing(template, base, addition, RecipeCategory.MISC, result)\n    .unlocks("criteria", criteria) // How the recipe is unlocked\n    .save(output, name); // Add data to builder\n'})}),"\n",(0,r.jsx)(i.h3,{id:"smithingtrimrecipebuilder",children:"SmithingTrimRecipeBuilder"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"SmithingTrimRecipeBuilder"})," is used to generate smithing recipes for armor trims. Additionally, custom upgrade recipes using a serializer like SmithingTrimRecipe.Serializer can also be data generated using this builder. The builder can be initialized via ",(0,r.jsx)(i.code,{children:"#smithingTrim"})," or through the constructor respectively. The recipe unlock criteria can be specified before saving."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'// In RecipeProvider#buildRecipes(output)\nSmithingTrimRecipe.smithingTrim(template, base, addition, RecipeCategory.MISC)\n    .unlocks("criteria", criteria) // How the recipe is unlocked\n    .save(output, name); // Add data to builder\n'})}),"\n",(0,r.jsx)(i.h3,{id:"specialrecipebuilder",children:"SpecialRecipeBuilder"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"SpecialRecipeBuilder"})," is used to generate empty JSONs for dynamic recipes that cannot easily be constrained to the recipe JSON format (dying armor, firework, etc.). The builder can be initialized via ",(0,r.jsx)(i.code,{children:"#special"}),"."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"// In RecipeProvider#buildRecipes(output)\nSpecialRecipeBuilder.special(category -> new MyDynamicRecipe(category))\n    .save(output, name); // Add data to builder\n"})}),"\n",(0,r.jsx)(i.h2,{id:"conditional-recipes",children:"Conditional Recipes"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/Neoforge-Korean-Documentation/docs/resources/server/conditional",children:"Conditional recipes"})," can also be data generated by either using the ",(0,r.jsx)(i.code,{children:"#accept"})," overload that takes in ",(0,r.jsx)(i.code,{children:"ICondition"}),"s or by passing in the ",(0,r.jsx)(i.code,{children:"RecipeOutput"})," after calling ",(0,r.jsx)(i.code,{children:"#withConditions"})," to specify the ",(0,r.jsx)(i.code,{children:"ICondition"}),"s."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'// In RecipeProvider#buildRecipes(output)\nShapedRecipeBuilder.shaped(RecipeCategory.MISC, result)\n    .pattern("a a") // Create recipe pattern\n    .define(\'a\', item) // Define what the symbol represents\n    .unlockedBy("criteria", criteria) // How the recipe is unlocked\n    .save(output.withConditions(\n        // The conditions that loads this recipe\n        new ItemExistsCondition("other_mod", "other_mod_item")\n    )\n); // Add data to builder\n\noutput.accept(\n    name, // The name of the receipe\n    recipeObj, // The recipe instance\n    advancementHolder, // A holder containing the name of the advancement and the advancement instance\n    // The conditions that loads this recipe\n    new ItemExistsCondition("other_mod", "other_mod_item")\n);\n'})}),"\n",(0,r.jsx)(i.h3,{id:"iconditionbuilder",children:"IConditionBuilder"}),"\n",(0,r.jsxs)(i.p,{children:["To simplify adding conditions to conditional recipes without having to construct the instances of each condition instance manually, the extended ",(0,r.jsx)(i.code,{children:"RecipeProvider"})," can implement ",(0,r.jsx)(i.code,{children:"IConditionBuilder"}),". The interface adds methods to easily construct condition instances."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:'// In RecipeProvider#buildRecipes(output)\nShapedRecipeBuilder.shaped(RecipeCategory.MISC, result)\n    .pattern("a a") // Create recipe pattern\n    .define(\'a\', item) // Define what the symbol represents\n    .unlockedBy("criteria", criteria) // How the recipe is unlocked\n    .save(output.withConditions(\n        // The conditions that loads this recipe\n        itemExists("other_mod", "other_mod_item")\n    )\n); // Add data to builder\n\noutput.accept(\n    name, // The name of the receipe\n    recipeObj, // The recipe instance\n    advancementHolder, // A holder containing the name of the advancement and the advancement instance\n    // The conditions that loads this recipe\n    itemExists("other_mod", "other_mod_item")\n);\n'})}),"\n",(0,r.jsx)(i.h2,{id:"custom-recipe-serializers",children:"Custom Recipe Serializers"}),"\n",(0,r.jsxs)(i.p,{children:["Custom recipe serializers can be data generated by creating a builder that can construct a ",(0,r.jsx)(i.code,{children:"Recipe"}),". The builder encodes the recipe and its unlocking advancement, when present, to JSON. Additionally, the name and serializer of the recipe is also specified to know where to write to and what can decode the object when loading. Once a ",(0,r.jsx)(i.code,{children:"Recipe"})," is constructed, it simply needs to be passed to the ",(0,r.jsx)(i.code,{children:"RecipeOutput"})," supplied by ",(0,r.jsx)(i.code,{children:"RecipeProvider#buildRecipes"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>d});var r=n(7294);const t={},c=r.createContext(t);function d(e){const i=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(c.Provider,{value:i},e.children)}}}]);