"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[3629],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=i.createContext({}),s=function(e){var t=i.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(o),f=n,h=c["".concat(d,".").concat(f)]||c[f]||m[f]||a;return o?i.createElement(h,r(r({ref:t},p),{},{components:o})):i.createElement(h,r({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var s=2;s<a;s++)r[s]=o[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}f.displayName="MDXCreateElement"},4352:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=o(7462),n=(o(7294),o(3905));const a={},r="Global Loot Modifiers",l={unversionedId:"resources/server/glm",id:"resources/server/glm",title:"Global Loot Modifiers",description:"Global Loot Modifiers are a data-driven method of handling modification of harvested drops without the need to overwrite dozens to hundreds of vanilla loot tables or to handle effects that would require interactions with another mod's loot tables without knowing what mods may be loaded. Global Loot Modifiers are also stacking, rather than last-load-wins, similar to tags.",source:"@site/docs/resources/server/glm.md",sourceDirName:"resources/server",slug:"/resources/server/glm",permalink:"/Neoforge-Korean-Documentation/docs/resources/server/glm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Conditionally-Loaded Data",permalink:"/Neoforge-Korean-Documentation/docs/resources/server/conditional"},next:{title:"Loot Tables",permalink:"/Neoforge-Korean-Documentation/docs/resources/server/loottables"}},d={},s=[{value:"Registering a Global Loot Modifier",id:"registering-a-global-loot-modifier",level:2},{value:"The <code>global_loot_modifiers.json</code>",id:"the-global_loot_modifiersjson",level:2},{value:"The Serialized JSON",id:"the-serialized-json",level:2},{value:"<code>IGlobalLootModifier</code>",id:"igloballootmodifier",level:2},{value:"The <code>LootModifier</code> Subclass",id:"the-lootmodifier-subclass",level:3},{value:"The Loot Modifier Codec",id:"the-loot-modifier-codec",level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"global-loot-modifiers"},"Global Loot Modifiers"),(0,n.kt)("p",null,"Global Loot Modifiers are a data-driven method of handling modification of harvested drops without the need to overwrite dozens to hundreds of vanilla loot tables or to handle effects that would require interactions with another mod's loot tables without knowing what mods may be loaded. Global Loot Modifiers are also stacking, rather than last-load-wins, similar to tags."),(0,n.kt)("h2",{id:"registering-a-global-loot-modifier"},"Registering a Global Loot Modifier"),(0,n.kt)("p",null,"You will need 4 things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("inlineCode",{parentName:"li"},"global_loot_modifiers.json"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This will tell Forge about your modifiers and works similar to ",(0,n.kt)("a",{parentName:"li",href:"/Neoforge-Korean-Documentation/docs/resources/server/tags"},"tags"),"."))),(0,n.kt)("li",{parentName:"ol"},"A serialized json representing your modifier.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This will contain all of the data about your modification and allows data packs to tweak your effect."))),(0,n.kt)("li",{parentName:"ol"},"A class that extends ",(0,n.kt)("inlineCode",{parentName:"li"},"IGlobalLootModifier"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The operational code that makes your modifier work. Most modders can extend ",(0,n.kt)("inlineCode",{parentName:"li"},"LootModifier")," as it supplies base functionality."))),(0,n.kt)("li",{parentName:"ol"},"Finally, a codec to encode and decode your operational class.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is ",(0,n.kt)("a",{parentName:"li",href:"/Neoforge-Korean-Documentation/docs/concepts/registries#methods-for-registering"},"registered")," as any other ",(0,n.kt)("inlineCode",{parentName:"li"},"IForgeRegistryEntry"),".")))),(0,n.kt)("h2",{id:"the-global_loot_modifiersjson"},"The ",(0,n.kt)("inlineCode",{parentName:"h2"},"global_loot_modifiers.json")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"global_loot_modifiers.json")," represents all loot modifiers to be loaded into the game. This file ",(0,n.kt)("strong",{parentName:"p"},"MUST")," be placed within ",(0,n.kt)("inlineCode",{parentName:"p"},"data/forge/loot_modifiers/global_loot_modifiers.json"),"."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"global_loot_modifiers.json")," will only be read in the ",(0,n.kt)("inlineCode",{parentName:"p"},"forge")," namespace. The file will be neglected if it is under the mod's namespace.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"entries")," is an ",(0,n.kt)("em",{parentName:"p"},"ordered list")," of the modifiers that will be loaded. The ",(0,n.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/resources#ResourceLocation"},"ResourceLocation"),"s specified points to their associated entry within ",(0,n.kt)("inlineCode",{parentName:"p"},"data/<namespace>/loot_modifiers/<path>.json"),". This is primarily relevant to data pack makers for resolving conflicts between modifiers from separate mods."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"replace"),", when ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", changes the behavior from appending loot modifiers to the global list to replacing the global list entries entirely. Modders will want to use ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," for compatibility with other mod implementations. Datapack makers may want to specify their overrides with ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "replace": false, // Must be present\n  "entries": [\n    // Represents a loot modifier in \'data/examplemod/loot_modifiers/example_glm.json\'\n    "examplemod:example_glm",\n    "examplemod:example_glm2"\n    // ...\n  ]\n}\n')),(0,n.kt)("h2",{id:"the-serialized-json"},"The Serialized JSON"),(0,n.kt)("p",null,"This file contains all of the potential variables related to your modifier, including the conditions that must be met prior to modifying any loot. Avoid hard-coded values wherever possible so that data pack makers can adjust balance if they wish to."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"type")," represents the registry name of the ",(0,n.kt)("a",{parentName:"p",href:"#the-loot-modifier-codec"},"codec")," used to read the associated JSON file. This must always be present."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"conditions")," should represent the loot table conditions for this modifier to activate. Conditions should avoid being hardcoded to allow datapack creators as much flexibility to adjust the criteria. This must also be always present."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Although ",(0,n.kt)("inlineCode",{parentName:"p"},"conditions")," should represent what is needed for the modifier to activate, this is only the case if using the bundled Forge classes. If using ",(0,n.kt)("inlineCode",{parentName:"p"},"LootModifier")," as a subclass, all conditions will be ",(0,n.kt)("strong",{parentName:"p"},"ANDed")," together and checked to see if the modifier should be applied.")),(0,n.kt)("p",null,"Any additional properties read by the serializer and defined by the modifier can also be specified."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// Within data/examplemod/loot_modifiers/example_glm.json\n{\n  "type": "examplemod:example_loot_modifier",\n  "conditions": [\n    // Normal loot table conditions\n    // ...\n  ],\n  "prop1": "val1",\n  "prop2": 10,\n  "prop3": "minecraft:dirt"\n}\n')),(0,n.kt)("h2",{id:"igloballootmodifier"},(0,n.kt)("inlineCode",{parentName:"h2"},"IGlobalLootModifier")),(0,n.kt)("p",null,"To supply the functionality a global loot modifier specifies, a ",(0,n.kt)("inlineCode",{parentName:"p"},"IGlobalLootModifier")," implementation must be specified. These are instances generated each time a serializer decodes the information from JSON and supplies it into this object."),(0,n.kt)("p",null,"There are two methods that needs to be defined in order to create a new modifier: ",(0,n.kt)("inlineCode",{parentName:"p"},"#apply")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"#codec"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"#apply")," takes in the current loot that will be generated along with the context information such as the currently level or additional defined parameters. It returns the list of drops to generate."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The returned list of drops from any one modifier is fed into other modifiers in the order they are registered. As such, modified loot can be modified by another loot modifier.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"#codec")," returns the registered ",(0,n.kt)("a",{parentName:"p",href:"#the-loot-modifier-codec"},"codec")," used to encode and decode the modifier to/from JSON."),(0,n.kt)("h3",{id:"the-lootmodifier-subclass"},"The ",(0,n.kt)("inlineCode",{parentName:"h3"},"LootModifier")," Subclass"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"LootModifier")," is an abstract implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"IGlobalLootModifier")," to provide the base functionality which most modders can easily extend and implement. This expands upon the existing interface by defining the ",(0,n.kt)("inlineCode",{parentName:"p"},"#apply")," method to check the conditions to determine whether or not to modify the generated loot."),(0,n.kt)("p",null,"There are two things of note within the subclass implementation: the constructor which must take in an array of ",(0,n.kt)("inlineCode",{parentName:"p"},"LootItemCondition"),"s and the ",(0,n.kt)("inlineCode",{parentName:"p"},"#doApply")," method."),(0,n.kt)("p",null,"The array of ",(0,n.kt)("inlineCode",{parentName:"p"},"LootItemCondition"),"s define the list of conditions that must be true before the loot can be modified. The supplied conditions are ",(0,n.kt)("strong",{parentName:"p"},"ANDed")," together, meaning that all conditions must be true."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"#doApply")," method works the same as the ",(0,n.kt)("inlineCode",{parentName:"p"},"#apply")," method except that it only executes once all conditions return true."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleModifier extends LootModifier {\n\n  public ExampleModifier(LootItemCondition[] conditionsIn, String prop1, int prop2, Item prop3) {\n    super(conditionsIn);\n    // Store the rest of the parameters\n  }\n\n  @NotNull\n  @Override\n  protected ObjectArrayList<ItemStack> doApply(ObjectArrayList<ItemStack> generatedLoot, LootContext context) {\n    // Modify the loot and return the new drops\n  }\n\n  @Override\n  public Codec<? extends IGlobalLootModifier> codec() {\n    // Return the codec used to encode and decode this modifier\n  }\n}\n")),(0,n.kt)("h2",{id:"the-loot-modifier-codec"},"The Loot Modifier Codec"),(0,n.kt)("p",null,"The connector between the JSON and the ",(0,n.kt)("inlineCode",{parentName:"p"},"IGlobalLootModifier")," instance is a ",(0,n.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datastorage/codecs"},(0,n.kt)("inlineCode",{parentName:"a"},"Codec<T>")),", where ",(0,n.kt)("inlineCode",{parentName:"p"},"T")," represents the type of the ",(0,n.kt)("inlineCode",{parentName:"p"},"IGlobalLootModifier")," to use."),(0,n.kt)("p",null,"For ease of convenience, a loot conditions codec has been provided for an easy addition to a record-like codec via ",(0,n.kt)("inlineCode",{parentName:"p"},"LootModifier#codecStart"),". This is utilized for ",(0,n.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/datagen/server/glm"},"data generation")," of the associated loot modifier."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// For some DeferredRegister<Codec<? extends IGlobalLootModifier>> REGISTRAR\npublic static final RegistryObject<Codec<ExampleModifier>> = REGISTRAR.register("example_codec", () ->\n  RecordCodecBuilder.create(\n    inst -> LootModifier.codecStart(inst).and(\n      inst.group(\n        Codec.STRING.fieldOf("prop1").forGetter(m -> m.prop1),\n        Codec.INT.fieldOf("prop2").forGetter(m -> m.prop2),\n        ForgeRegistries.ITEMS.getCodec().fieldOf("prop3").forGetter(m -> m.prop3)\n      )\n    ).apply(inst, ExampleModifier::new)\n  )\n);\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/MinecraftForge/MinecraftForge/blob/1.19.x/src/test/java/net/minecraftforge/debug/gameplay/loot/GlobalLootModifiersTest.java"},"Examples")," can be found on the Forge Git repository, including silk touch and smelting effects."))}m.isMDXComponent=!0}}]);