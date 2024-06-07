"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[7068],{5905:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=s(5893),i=s(1151);const n={},t="Resource Locations",c={id:"misc/resourcelocation",title:"Resource Locations",description:"ResourceLocations are one of the most important things in Minecraft. They are used as keys in registries, as identifiers for data or resource files, as references to models in code, and in a lot of other places. A ResourceLocation consists of two parts.",source:"@site/versioned_docs/version-1.20.4/misc/resourcelocation.md",sourceDirName:"misc",slug:"/misc/resourcelocation",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/misc/resourcelocation",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Key Mappings",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/misc/keymappings"},next:{title:"NeoForge Update Checker",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/misc/updatechecker"}},a={},d=[{value:"Resolving <code>ResourceLocation</code>s",id:"resolving-resourcelocations",level:2},{value:"<code>ModelResourceLocation</code>s",id:"modelresourcelocations",level:2},{value:"<code>ResourceKey</code>s",id:"resourcekeys",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"resource-locations",children:"Resource Locations"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"ResourceLocation"}),"s are one of the most important things in Minecraft. They are used as keys in ",(0,r.jsx)(o.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/registries",children:"registries"}),", as identifiers for data or resource files, as references to models in code, and in a lot of other places. A ",(0,r.jsx)(o.code,{children:"ResourceLocation"})," consists of two parts: a namespace and a path, separated by a ",(0,r.jsx)(o.code,{children:":"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["The namespace denotes what mod, resource pack or datapack the location refers to. For example, a mod with the mod id ",(0,r.jsx)(o.code,{children:"examplemod"})," will use the ",(0,r.jsx)(o.code,{children:"examplemod"})," namespace. Minecraft uses the ",(0,r.jsx)(o.code,{children:"minecraft"})," namespace. Extra namespaces can be defined at will simply by creating a corresponding data folder, this is usually done by datapacks to keep their logic separate from the point where they integrate with vanilla."]}),"\n",(0,r.jsxs)(o.p,{children:["The path is a reference to whatever object you want, inside your namespace. For example, ",(0,r.jsx)(o.code,{children:"minecraft:cow"})," is a reference to something named ",(0,r.jsx)(o.code,{children:"cow"})," in the ",(0,r.jsx)(o.code,{children:"minecraft"})," namespace - usually this location would be used to get the cow entity from the entity registry. Another example would be ",(0,r.jsx)(o.code,{children:"examplemod:example_item"}),", which would probably be used to get your mod's ",(0,r.jsx)(o.code,{children:"example_item"})," from the item registry."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"ResourceLocation"}),"s may only contain lowercase letters, digits, underscores, dots and hyphens. Paths may additionally contain forward slashes. Note that due to Java module restrictions, mod ids may not contain hyphens, which by extension means that mod namespaces may not contain hyphens either (they are still permitted in paths)."]}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.p,{children:["A ",(0,r.jsx)(o.code,{children:"ResourceLocation"})," on its own says nothing about what kind of objects we are using it for. Objects named ",(0,r.jsx)(o.code,{children:"minecraft:dirt"})," exist in multiple places, for example. It is up to whatever receives the ",(0,r.jsx)(o.code,{children:"ResourceLocation"})," to associate an object with it."]})}),"\n",(0,r.jsxs)(o.p,{children:["A new ",(0,r.jsx)(o.code,{children:"ResourceLocation"})," can be created by calling ",(0,r.jsx)(o.code,{children:'new ResourceLocation("examplemod", "example_item")'})," or ",(0,r.jsx)(o.code,{children:'new ResourceLocation("examplemod:example_item")'}),". If the latter is used with a string that does not contain a ",(0,r.jsx)(o.code,{children:":"}),", the entire string will be used as the path, and ",(0,r.jsx)(o.code,{children:"minecraft"})," will be used as the namespace. So for example, ",(0,r.jsx)(o.code,{children:'new ResourceLocation("example_item")'})," will result in ",(0,r.jsx)(o.code,{children:"minecraft:example_item"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["The namespace and path of a ",(0,r.jsx)(o.code,{children:"ResourceLocation"})," can be retrieved using ",(0,r.jsx)(o.code,{children:"ResourceLocation#getNamespace()"})," and ",(0,r.jsx)(o.code,{children:"#getPath()"}),", respectively, and the combined form can be retrieved through ",(0,r.jsx)(o.code,{children:"ResourceLocation#toString"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"ResourceLocation"}),"s are immutable. All utility methods on ",(0,r.jsx)(o.code,{children:"ResourceLocation"}),", such as ",(0,r.jsx)(o.code,{children:"withPrefix"})," or ",(0,r.jsx)(o.code,{children:"withSuffix"}),", return a new ",(0,r.jsx)(o.code,{children:"ResourceLocation"}),"."]}),"\n",(0,r.jsxs)(o.h2,{id:"resolving-resourcelocations",children:["Resolving ",(0,r.jsx)(o.code,{children:"ResourceLocation"}),"s"]}),"\n",(0,r.jsxs)(o.p,{children:["Some places, for example registries, use ",(0,r.jsx)(o.code,{children:"ResourceLocation"}),"s directly. Some other places, however, will resolve the ",(0,r.jsx)(o.code,{children:"ResourceLocation"})," as needed. For example:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"ResourceLocation"}),"s are used as identifiers for GUI background. For example, the furnace GUI uses the resource location ",(0,r.jsx)(o.code,{children:"minecraft:textures/gui/container/furnace.png"}),". This maps to the file ",(0,r.jsx)(o.code,{children:"assets/minecraft/textures/gui/container/furnace.png"})," on disk. Note that the ",(0,r.jsx)(o.code,{children:".png"})," suffix is required in this resource location."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"ResourceLocation"}),"s are used as identifiers for block models. For example, the block model of dirt uses the resource location ",(0,r.jsx)(o.code,{children:"minecraft:block/dirt"}),". This maps to the file ",(0,r.jsx)(o.code,{children:"assets/minecraft/models/block/dirt.json"})," on disk. Note that the ",(0,r.jsx)(o.code,{children:".json"})," suffix is not required here. Note as well that this resource location automatically maps into the ",(0,r.jsx)(o.code,{children:"models"})," subfolder."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"ResourceLocation"}),"s are used as identifiers for recipes. For example, the iron block crafting recipe uses the resource location ",(0,r.jsx)(o.code,{children:"minecraft:iron_block"}),". This maps to the file ",(0,r.jsx)(o.code,{children:"data/minecraft/recipes/iron_block.json"})," on disk. Note that the ",(0,r.jsx)(o.code,{children:".json"})," suffix is not required here. Note as well that this resource location automatically maps into the ",(0,r.jsx)(o.code,{children:"recipes"})," subfolder."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Whether the ",(0,r.jsx)(o.code,{children:"ResourceLocation"})," expects a file suffix, or what exactly the resource location resolves to, depends on the use case."]}),"\n",(0,r.jsxs)(o.h2,{id:"modelresourcelocations",children:[(0,r.jsx)(o.code,{children:"ModelResourceLocation"}),"s"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"ModelResourceLocation"}),"s are a special kind of resource location that includes a third part, called the variant. Minecraft uses these mainly to differentiate between different variants of models, where the different variants are used in different display contexts (for example with tridents, which have different models in first person, third person and inventories). The variant is always ",(0,r.jsx)(o.code,{children:"inventory"})," for items, and the comma-delimited string of property-value pairs for blockstates (for example ",(0,r.jsx)(o.code,{children:"facing=north,waterlogged=false"}),", empty for blocks with no blockstate properties)."]}),"\n",(0,r.jsxs)(o.p,{children:["The variant is appended to the regular resource location, along with a ",(0,r.jsx)(o.code,{children:"#"}),". For example, the full name of the diamond sword's item model is ",(0,r.jsx)(o.code,{children:"minecraft:diamond_sword#inventory"}),". However, in most contexts, the ",(0,r.jsx)(o.code,{children:"inventory"})," variant can be omitted."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"ModelResourceLocation"})," is a ",(0,r.jsx)(o.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/sides",children:"client only"})," class. This means that servers referencing this class will crash with a ",(0,r.jsx)(o.code,{children:"NoClassDefFoundError"}),"."]}),"\n",(0,r.jsxs)(o.h2,{id:"resourcekeys",children:[(0,r.jsx)(o.code,{children:"ResourceKey"}),"s"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"ResourceKey"}),"s combine a registry id with a registry name. An example would be a registry key with the registry id ",(0,r.jsx)(o.code,{children:"minecraft:item"})," and the registry name ",(0,r.jsx)(o.code,{children:"minecraft:diamond_sword"}),". Unlike a ",(0,r.jsx)(o.code,{children:"ResourceLocation"}),", ",(0,r.jsx)(o.code,{children:"ResourceKey"}),"s actually refer to a unique element, thus being able to clearly identify an element. They are most commonly used in contexts where many different registries come in contact with one another. A common use case are datapacks, especially worldgen."]}),"\n",(0,r.jsxs)(o.p,{children:["A new ",(0,r.jsx)(o.code,{children:"ResourceKey"})," can be created through the static method ",(0,r.jsx)(o.code,{children:"ResourceKey#create(ResourceKey<? extends Registry<T>>, ResourceLocation)"}),". The second parameter here is the registry name, while the first parameter is what is known as a registry key. Registry keys are a special kind of ",(0,r.jsx)(o.code,{children:"ResourceKey"})," whose registry is the root registry (i.e. the registry of all other registries). A registry key can be created via ",(0,r.jsx)(o.code,{children:"ResourceKey#createRegistryKey(ResourceLocation)"})," with the desired registry's id."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"ResourceKey"}),"s are interned at creation. This means that comparing by reference equality (",(0,r.jsx)(o.code,{children:"=="}),") is possible and encouraged, but their creation is comparatively expensive."]})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,o,s)=>{s.d(o,{Z:()=>c,a:()=>t});var r=s(7294);const i={},n=r.createContext(i);function t(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);