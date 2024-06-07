"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[4567],{1452:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=n(5893),i=n(1151);const t={},o="Tags",a={id:"resources/server/tags",title:"Tags",description:"Tags are generalized sets of objects in the game used for grouping related things together and providing fast membership checks.",source:"@site/versioned_docs/version-1.20.4/resources/server/tags.md",sourceDirName:"resources/server",slug:"/resources/server/tags",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/resources/server/tags",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Ingredients",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/resources/server/recipes/ingredients"}},c={},d=[{value:"Declaring Your Own Groupings",id:"declaring-your-own-groupings",level:2},{value:"Using Tags In Code",id:"using-tags-in-code",level:2},{value:"ITagManager",id:"itagmanager",level:3},{value:"Custom Registries",id:"custom-registries",level:4},{value:"Referencing Tags",id:"referencing-tags",level:3},{value:"Conventions",id:"conventions",level:2},{value:"Migration from OreDictionary",id:"migration-from-oredictionary",level:2},{value:"Using Tags in Recipes and Advancements",id:"using-tags-in-recipes-and-advancements",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"tags",children:"Tags"}),"\n",(0,s.jsx)(r.p,{children:"Tags are generalized sets of objects in the game used for grouping related things together and providing fast membership checks."}),"\n",(0,s.jsx)(r.h2,{id:"declaring-your-own-groupings",children:"Declaring Your Own Groupings"}),"\n",(0,s.jsxs)(r.p,{children:["Tags are declared in your mod's ",(0,s.jsx)(r.a,{href:"/Neoforge-Korean-Documentation/docs/1.20.4/resources/server/",children:"datapack"}),". For example, a ",(0,s.jsx)(r.code,{children:"TagKey<Block>"})," with a given identifier of  ",(0,s.jsx)(r.code,{children:"modid:foo/tagname"})," will reference a tag at ",(0,s.jsx)(r.code,{children:"/data/<modid>/tags/blocks/foo/tagname.json"}),". Tags for ",(0,s.jsx)(r.code,{children:"Block"}),"s, ",(0,s.jsx)(r.code,{children:"Item"}),"s, ",(0,s.jsx)(r.code,{children:"EntityType"}),"s, ",(0,s.jsx)(r.code,{children:"Fluid"}),"s, and ",(0,s.jsx)(r.code,{children:"GameEvent"}),"s use the plural forms for their folder location while all other registries use the singular version (",(0,s.jsx)(r.code,{children:"EntityType"})," uses the folder ",(0,s.jsx)(r.code,{children:"entity_types"})," while ",(0,s.jsx)(r.code,{children:"Potion"})," would use the folder ",(0,s.jsx)(r.code,{children:"potion"}),").\nSimilarly, you may append to or override tags declared in other domains, such as Vanilla, by declaring your own JSONs.\nFor example, to add your own mod's saplings to the Vanilla sapling tag, you would specify it in ",(0,s.jsx)(r.code,{children:"/data/minecraft/tags/blocks/saplings.json"}),", and Vanilla will merge everything into one tag at reload, if the ",(0,s.jsx)(r.code,{children:"replace"})," option is false.\nIf ",(0,s.jsx)(r.code,{children:"replace"})," is true, then all entries before the json specifying ",(0,s.jsx)(r.code,{children:"replace"})," will be removed.\nValues listed that are not present will cause the tag to error unless the value is listed using an ",(0,s.jsx)(r.code,{children:"id"})," string and ",(0,s.jsx)(r.code,{children:"required"})," boolean set to false, as in the following example:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'{\n  "replace": false,\n  "values": [\n    "minecraft:gold_ingot",\n    "mymod:my_ingot",\n    {\n      "id": "othermod:ingot_other",\n      "required": false\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(r.p,{children:["See the ",(0,s.jsx)(r.a,{href:"https://minecraft.wiki/w/Tag#JSON_format",children:"Vanilla wiki"})," for a description of the base syntax."]}),"\n",(0,s.jsxs)(r.p,{children:["There is also a NeoForge extension on the Vanilla syntax.\nYou may declare a ",(0,s.jsx)(r.code,{children:"remove"})," array of the same format as the ",(0,s.jsx)(r.code,{children:"values"})," array. Any values listed here will be removed from the tag. This acts as a finer grained version of the Vanilla ",(0,s.jsx)(r.code,{children:"replace"})," option."]}),"\n",(0,s.jsx)(r.h2,{id:"using-tags-in-code",children:"Using Tags In Code"}),"\n",(0,s.jsxs)(r.p,{children:["Tags for all registries are automatically sent from the server to any remote clients on login and reload. ",(0,s.jsx)(r.code,{children:"Block"}),"s, ",(0,s.jsx)(r.code,{children:"Item"}),"s, ",(0,s.jsx)(r.code,{children:"EntityType"}),"s, ",(0,s.jsx)(r.code,{children:"Fluid"}),"s, and ",(0,s.jsx)(r.code,{children:"GameEvent"}),"s are special cased as they have ",(0,s.jsx)(r.code,{children:"Holder"}),"s allowing for available tags to be accessible through the object itself."]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Intrusive ",(0,s.jsx)(r.code,{children:"Holder"}),"s may be removed in a future version of Minecraft. If they are, the below methods can be used instead to query the associated ",(0,s.jsx)(r.code,{children:"Holder"}),"s."]})}),"\n",(0,s.jsx)(r.h3,{id:"itagmanager",children:"ITagManager"}),"\n",(0,s.jsxs)(r.p,{children:["NeoForge wrapped registries provide an additional helper for creating and managing tags through ",(0,s.jsx)(r.code,{children:"ITagManager"})," which can be obtained via ",(0,s.jsx)(r.code,{children:"IForgeRegistry#tags"}),". Tags can be created using using ",(0,s.jsx)(r.code,{children:"#createTagKey"})," or ",(0,s.jsx)(r.code,{children:"#createOptionalTagKey"}),". Tags or registry objects can also be checked for either or using ",(0,s.jsx)(r.code,{children:"#getTag"})," or ",(0,s.jsx)(r.code,{children:"#getReverseTag"})," respectively."]}),"\n",(0,s.jsx)(r.h4,{id:"custom-registries",children:"Custom Registries"}),"\n",(0,s.jsxs)(r.p,{children:["Custom registries can create tags when constructing their ",(0,s.jsx)(r.code,{children:"DeferredRegister"})," via ",(0,s.jsx)(r.code,{children:"#createTagKey"})," or ",(0,s.jsx)(r.code,{children:"#createOptionalTagKey"})," respectively. Their tags or registry objects can then checked for either using the ",(0,s.jsx)(r.code,{children:"IForgeRegistry"})," obtained by calling ",(0,s.jsx)(r.code,{children:"DeferredRegister#makeRegistry"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"referencing-tags",children:"Referencing Tags"}),"\n",(0,s.jsx)(r.p,{children:"There are four methods of creating a tag wrapper:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Method"}),(0,s.jsx)(r.th,{style:{textAlign:"left"},children:"For"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"*Tags#create"})}),(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:[(0,s.jsx)(r.code,{children:"BannerPattern"}),", ",(0,s.jsx)(r.code,{children:"Biome"}),", ",(0,s.jsx)(r.code,{children:"Block"}),", ",(0,s.jsx)(r.code,{children:"CatVariant"}),", ",(0,s.jsx)(r.code,{children:"DamageType"}),", ",(0,s.jsx)(r.code,{children:"EntityType"}),", ",(0,s.jsx)(r.code,{children:"FlatLevelGeneratorPreset"}),", ",(0,s.jsx)(r.code,{children:"Fluid"}),", ",(0,s.jsx)(r.code,{children:"GameEvent"}),", ",(0,s.jsx)(r.code,{children:"Instrument"}),", ",(0,s.jsx)(r.code,{children:"Item"}),", ",(0,s.jsx)(r.code,{children:"PaintingVariant"}),", ",(0,s.jsx)(r.code,{children:"PoiType"}),", ",(0,s.jsx)(r.code,{children:"Structure"}),", and ",(0,s.jsx)(r.code,{children:"WorldPreset"})," where ",(0,s.jsx)(r.code,{children:"*"})," represents one of these types."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"ITagManager#createTagKey"})}),(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:["NeoForge wrapped vanilla registries, registries can be obtained from ",(0,s.jsx)(r.code,{children:"ForgeRegistries"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"DeferredRegister#createTagKey"})}),(0,s.jsx)(r.td,{style:{textAlign:"left"},children:"Custom NeoForge registries."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{style:{textAlign:"center"},children:(0,s.jsx)(r.code,{children:"TagKey#create"})}),(0,s.jsxs)(r.td,{style:{textAlign:"left"},children:["Vanilla registries without NeoForge wrappers, registries can be obtained from ",(0,s.jsx)(r.code,{children:"Registry"}),"."]})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["Registry objects can check their tags or registry objects either through their ",(0,s.jsx)(r.code,{children:"Holder"})," or through ",(0,s.jsx)(r.code,{children:"ITag"}),"/",(0,s.jsx)(r.code,{children:"IReverseTag"})," for vanilla or NeoForge registry objects respectively."]}),"\n",(0,s.jsxs)(r.p,{children:["Vanilla registry objects can grab their associated holder using either ",(0,s.jsx)(r.code,{children:"Registry#getHolder"})," or ",(0,s.jsx)(r.code,{children:"Registry#getHolderOrThrow"})," and then compare if the registry object has a tag using ",(0,s.jsx)(r.code,{children:"Holder#is"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["NeoForge registry objects can grab their tag definition using either ",(0,s.jsx)(r.code,{children:"ITagManager#getTag"})," or ",(0,s.jsx)(r.code,{children:"ITagManager#getReverseTag"})," and then compare if a registry object has a tag using ",(0,s.jsx)(r.code,{children:"ITag#contains"})," or ",(0,s.jsx)(r.code,{children:"IReverseTag#containsTag"})," respectively."]}),"\n",(0,s.jsxs)(r.p,{children:["Tag-holding registry objects contain a method called ",(0,s.jsx)(r.code,{children:"#is"})," in either their registry object or state-aware class to check whether the object belongs to a certain tag."]}),"\n",(0,s.jsx)(r.p,{children:"As an example:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-java",children:'public static final TagKey<Item> myItemTag = ItemTags.create(new ResourceLocation("mymod", "myitemgroup"));\n\npublic static final TagKey<Potion> myPotionTag = ForgeRegistries.POTIONS.tags().createTagKey(new ResourceLocation("mymod", "mypotiongroup"));\n\npublic static final TagKey<VillagerType> myVillagerTypeTag = TagKey.create(Registries.VILLAGER_TYPE, new ResourceLocation("mymod", "myvillagertypegroup"));\n\n// In some method:\n\nItemStack stack = /*...*/;\nboolean isInItemGroup = stack.is(myItemTag);\n\nPotion potion = /*...*/;\nboolean isInPotionGroup  = ForgeRegistries.POTIONS.tags().getTag(myPotionTag).contains(potion);\n\nResourceKey<VillagerType> villagerTypeKey = /*...*/;\nboolean isInVillagerTypeGroup = BuiltInRegistries.VILLAGER_TYPE.getHolder(villagerTypeKey).map(holder -> holder.is(myVillagerTypeTag)).orElse(false);\n'})}),"\n",(0,s.jsx)(r.h2,{id:"conventions",children:"Conventions"}),"\n",(0,s.jsx)(r.p,{children:"There are several conventions that will help facilitate compatibility in the ecosystem:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["If there is a Vanilla tag that fits your block or item, add it to that tag. See the ",(0,s.jsx)(r.a,{href:"https://minecraft.wiki/w/Tag#List_of_tags",children:"list of Vanilla tags"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["If there is a NeoForge tag that fits your block or item, add it to that tag. The list of tags declared by NeoForge can be seen on ",(0,s.jsx)(r.a,{href:"https://github.com/neoforged/NeoForge/tree/1.20.x/src/generated/resources/data/forge/tags",children:"GitHub"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["If there is a group of something you feel should be shared by the community, use the ",(0,s.jsx)(r.code,{children:"forge"})," namespace instead of your mod id."]}),"\n",(0,s.jsxs)(r.li,{children:["Tag naming conventions should follow Vanilla conventions. In particular, item and block groupings are plural instead of singular (e.g. ",(0,s.jsx)(r.code,{children:"minecraft:logs"}),", ",(0,s.jsx)(r.code,{children:"minecraft:saplings"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:["Item tags should be sorted into subdirectories according to their type (e.g. ",(0,s.jsx)(r.code,{children:"forge:ingots/iron"}),", ",(0,s.jsx)(r.code,{children:"forge:nuggets/brass"}),", etc.)."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"migration-from-oredictionary",children:"Migration from OreDictionary"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"For recipes, tags can be used directly in the vanilla recipe format (see below)."}),"\n",(0,s.jsx)(r.li,{children:"For matching items in code, see the section above."}),"\n",(0,s.jsxs)(r.li,{children:["If you are declaring a new type of item grouping, follow a couple naming conventions:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Use ",(0,s.jsx)(r.code,{children:"domain:type/material"}),". When the name is a common one that all modders should adopt, use the ",(0,s.jsx)(r.code,{children:"forge"})," domain."]}),"\n",(0,s.jsxs)(r.li,{children:["For example, brass ingots should be registered under the ",(0,s.jsx)(r.code,{children:"forge:ingots/brass"})," tag and cobalt nuggets under the ",(0,s.jsx)(r.code,{children:"forge:nuggets/cobalt"})," tag."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"using-tags-in-recipes-and-advancements",children:"Using Tags in Recipes and Advancements"}),"\n",(0,s.jsxs)(r.p,{children:["Tags are directly supported by Vanilla. See the respective Vanilla wiki pages for ",(0,s.jsx)(r.a,{href:"https://minecraft.wiki/w/Recipe#JSON_format",children:"recipes"})," and ",(0,s.jsx)(r.a,{href:"https://minecraft.wiki/w/Advancement",children:"advancements"})," for usage details."]})]})}function g(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>o});var s=n(7294);const i={},t=s.createContext(i);function o(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);