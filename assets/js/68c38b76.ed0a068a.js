"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[3629],{59:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(5893),n=i(1151);const r={},s="Global Loot Modifiers",d={id:"resources/server/glm",title:"Global Loot Modifiers",description:"Global Loot Modifiers are a data-driven method of handling modification of harvested drops without the need to overwrite dozens to hundreds of vanilla loot tables or to handle effects that would require interactions with another mod's loot tables without knowing what mods may be loaded. Global Loot Modifiers are also stacking, rather than last-load-wins, similar to tags.",source:"@site/docs/resources/server/glm.md",sourceDirName:"resources/server",slug:"/resources/server/glm",permalink:"/Neoforge-Korean-Documentation/docs/resources/server/glm",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Conditionally-Loaded Data",permalink:"/Neoforge-Korean-Documentation/docs/resources/server/conditional"},next:{title:"Loot Tables",permalink:"/Neoforge-Korean-Documentation/docs/resources/server/loottables"}},a={},l=[{value:"Registering a Global Loot Modifier",id:"registering-a-global-loot-modifier",level:2},{value:"The <code>global_loot_modifiers.json</code>",id:"the-global_loot_modifiersjson",level:2},{value:"The Serialized JSON",id:"the-serialized-json",level:2},{value:"<code>IGlobalLootModifier</code>",id:"igloballootmodifier",level:2},{value:"The <code>LootModifier</code> Subclass",id:"the-lootmodifier-subclass",level:3},{value:"The Loot Modifier Map Codec",id:"the-loot-modifier-map-codec",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"global-loot-modifiers",children:"Global Loot Modifiers"}),"\n",(0,t.jsx)(o.p,{children:"Global Loot Modifiers are a data-driven method of handling modification of harvested drops without the need to overwrite dozens to hundreds of vanilla loot tables or to handle effects that would require interactions with another mod's loot tables without knowing what mods may be loaded. Global Loot Modifiers are also stacking, rather than last-load-wins, similar to tags."}),"\n",(0,t.jsx)(o.h2,{id:"registering-a-global-loot-modifier",children:"Registering a Global Loot Modifier"}),"\n",(0,t.jsx)(o.p,{children:"You will need 4 things:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Create a ",(0,t.jsx)(o.code,{children:"global_loot_modifiers.json"}),".","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["This will tell NeoForge about your modifiers and works similar to ",(0,t.jsx)(o.a,{href:"/Neoforge-Korean-Documentation/docs/resources/server/tags",children:"tags"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["A serialized json representing your modifier.","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"This will contain all of the data about your modification and allows data packs to tweak your effect."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["A class that extends ",(0,t.jsx)(o.code,{children:"IGlobalLootModifier"}),".","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["The operational code that makes your modifier work. Most modders can extend ",(0,t.jsx)(o.code,{children:"LootModifier"})," as it supplies base functionality."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["Finally, a map codec to encode and decode your operational class.","\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["This is ",(0,t.jsx)(o.a,{href:"/Neoforge-Korean-Documentation/docs/concepts/registries#methods-for-registering",children:"registered"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o.h2,{id:"the-global_loot_modifiersjson",children:["The ",(0,t.jsx)(o.code,{children:"global_loot_modifiers.json"})]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"global_loot_modifiers.json"})," represents all loot modifiers to be loaded into the game. This file ",(0,t.jsx)(o.strong,{children:"MUST"})," be placed within ",(0,t.jsx)(o.code,{children:"data/neoforge/loot_modifiers/global_loot_modifiers.json"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"danger",children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"global_loot_modifiers.json"})," will only be read in the ",(0,t.jsx)(o.code,{children:"neoforge"})," namespace. The file will be neglected if it is under the mod's namespace."]})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"entries"})," is an ",(0,t.jsx)(o.em,{children:"ordered list"})," of the modifiers that will be loaded. The ",(0,t.jsx)(o.a,{href:"/Neoforge-Korean-Documentation/docs/misc/resourcelocation",children:"ResourceLocation"}),"s specified points to their associated entry within ",(0,t.jsx)(o.code,{children:"data/<namespace>/loot_modifiers/<path>.json"}),". This is primarily relevant to datapack makers for resolving conflicts between modifiers from separate mods."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"replace"}),", when ",(0,t.jsx)(o.code,{children:"true"}),", changes the behavior from appending loot modifiers to the global list to replacing the global list entries entirely. Modders will want to use ",(0,t.jsx)(o.code,{children:"false"})," for compatibility with other mod implementations. Datapack makers may want to specify their overrides with ",(0,t.jsx)(o.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json5",children:'{\n    "replace": false, // Must be present\n    "entries": [\n        // Represents a loot modifier in \'data/examplemod/loot_modifiers/example_glm.json\'\n        "examplemod:example_glm",\n        "examplemod:example_glm2"\n        // ...\n    ]\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"the-serialized-json",children:"The Serialized JSON"}),"\n",(0,t.jsx)(o.p,{children:"This file contains all of the potential variables related to your modifier, including the conditions that must be met prior to modifying any loot. Avoid hard-coded values wherever possible so that data pack makers can adjust balance if they wish to."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"type"})," represents the registry name of the ",(0,t.jsx)(o.a,{href:"#the-loot-modifier-map-codec",children:"codec"})," used to read the associated JSON file. This must always be present."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"conditions"})," should represent the loot table conditions for this modifier to activate. Conditions should avoid being hardcoded to allow datapack creators as much flexibility to adjust the criteria. This must also be always present."]}),"\n",(0,t.jsx)(o.admonition,{type:"caution",children:(0,t.jsxs)(o.p,{children:["Although ",(0,t.jsx)(o.code,{children:"conditions"})," should represent what is needed for the modifier to activate, this is only the case if using the bundled NeoForge classes. If using ",(0,t.jsx)(o.code,{children:"LootModifier"})," as a subclass, all conditions will be ",(0,t.jsx)(o.strong,{children:"ANDed"})," together and checked to see if the modifier should be applied."]})}),"\n",(0,t.jsx)(o.p,{children:"Any additional properties read by the serializer and defined by the modifier can also be specified."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json5",children:'// Within data/examplemod/loot_modifiers/example_glm.json\n{\n    "type": "examplemod:example_loot_modifier",\n    "conditions": [\n        // Normal loot table conditions\n        // ...\n    ],\n    "prop1": "val1",\n    "prop2": 10,\n    "prop3": "minecraft:dirt"\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"igloballootmodifier",children:(0,t.jsx)(o.code,{children:"IGlobalLootModifier"})}),"\n",(0,t.jsxs)(o.p,{children:["To supply the functionality a global loot modifier specifies, a ",(0,t.jsx)(o.code,{children:"IGlobalLootModifier"})," implementation must be specified. These are instances generated each time a serializer decodes the information from JSON and supplies it into this object."]}),"\n",(0,t.jsxs)(o.p,{children:["There are two methods that needs to be defined in order to create a new modifier: ",(0,t.jsx)(o.code,{children:"#apply"})," and ",(0,t.jsx)(o.code,{children:"#codec"}),". ",(0,t.jsx)(o.code,{children:"#apply"})," takes in the current loot that will be generated along with the context information such as the currently level or additional defined parameters. It returns the list of drops to generate."]}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"The returned list of drops from any one modifier is fed into other modifiers in the order they are registered. As such, modified loot can be modified by another loot modifier."})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"#codec"})," returns the registered ",(0,t.jsx)(o.a,{href:"#the-loot-modifier-map-codec",children:"map codec"})," used to encode and decode the modifier to/from JSON."]}),"\n",(0,t.jsxs)(o.h3,{id:"the-lootmodifier-subclass",children:["The ",(0,t.jsx)(o.code,{children:"LootModifier"})," Subclass"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"LootModifier"})," is an abstract implementation of ",(0,t.jsx)(o.code,{children:"IGlobalLootModifier"})," to provide the base functionality which most modders can easily extend and implement. This expands upon the existing interface by defining the ",(0,t.jsx)(o.code,{children:"#apply"})," method to check the conditions to determine whether or not to modify the generated loot."]}),"\n",(0,t.jsxs)(o.p,{children:["There are two things of note within the subclass implementation: the constructor which must take in an array of ",(0,t.jsx)(o.code,{children:"LootItemCondition"}),"s and the ",(0,t.jsx)(o.code,{children:"#doApply"})," method."]}),"\n",(0,t.jsxs)(o.p,{children:["The array of ",(0,t.jsx)(o.code,{children:"LootItemCondition"}),"s define the list of conditions that must be true before the loot can be modified. The supplied conditions are ",(0,t.jsx)(o.strong,{children:"ANDed"})," together, meaning that all conditions must be true."]}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"#doApply"})," method works the same as the ",(0,t.jsx)(o.code,{children:"#apply"})," method except that it only executes once all conditions return true."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:"public class ExampleModifier extends LootModifier {\n\n    public ExampleModifier(LootItemCondition[] conditionsIn, String prop1, int prop2, Item prop3) {\n        super(conditionsIn);\n        // Store the rest of the parameters\n    }\n\n    @NotNull\n    @Override\n    protected ObjectArrayList<ItemStack> doApply(ObjectArrayList<ItemStack> generatedLoot, LootContext context) {\n        // Modify the loot and return the new drops\n    }\n\n    @Override\n    public MapCodec<? extends IGlobalLootModifier> codec() {\n        // Return the codec used to encode and decode this modifier\n        return EXAMPLE_MODIFIER_MAP_CODEC.get();\n    }\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"the-loot-modifier-map-codec",children:"The Loot Modifier Map Codec"}),"\n",(0,t.jsxs)(o.p,{children:["The connector between the JSON and the ",(0,t.jsx)(o.code,{children:"IGlobalLootModifier"})," instance is a ",(0,t.jsx)(o.a,{href:"/Neoforge-Korean-Documentation/docs/datastorage/codecs",children:(0,t.jsx)(o.code,{children:"MapCodec<T>"})}),", where ",(0,t.jsx)(o.code,{children:"T"})," represents the type of the ",(0,t.jsx)(o.code,{children:"IGlobalLootModifier"})," to use."]}),"\n",(0,t.jsxs)(o.p,{children:["For ease of convenience, a loot conditions codec has been provided for an easy addition to a record-like codec via ",(0,t.jsx)(o.code,{children:"LootModifier#codecStart"}),". This is utilized for ",(0,t.jsx)(o.a,{href:"/Neoforge-Korean-Documentation/docs/datagen/glm",children:"data generation"})," of the associated loot modifier."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'// For some DeferredRegister<MapCodec<? extends IGlobalLootModifier>> REGISTRAR\npublic static final RegistryObject<MapCodec<ExampleModifier>> EXAMPLE_MODIFIER_MAP_CODEC = REGISTRAR.register("example_codec", () ->\n    RecordCodecBuilder.mapCodec(\n        inst -> LootModifier.codecStart(inst).and(\n            inst.group(\n                Codec.STRING.fieldOf("prop1").forGetter(m -> m.prop1),\n                Codec.INT.fieldOf("prop2").forGetter(m -> m.prop2),\n                BuiltInRegistries.ITEM.byNameCodec().fieldOf("prop3").forGetter(m -> m.prop3)\n            )\n        ).apply(inst, ExampleModifier::new)\n    )\n);\n'})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://github.com/neoforged/NeoForge/blob/1.20.x/tests/src/main/java/net/neoforged/neoforge/debug/loot/GlobalLootModifiersTest.java",children:"Examples"})," can be found on the NeoForge Git repository, including silk touch and smelting effects."]})]})}function h(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,o,i)=>{i.d(o,{Z:()=>d,a:()=>s});var t=i(7294);const n={},r=t.createContext(n);function s(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);