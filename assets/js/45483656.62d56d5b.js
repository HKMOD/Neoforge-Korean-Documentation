"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[593],{5572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(5893),s=r(1151);const i={},d="Tag Generation",o={id:"datagen/tags",title:"Tag Generation",description:"Tags] can be generated for a mod by subclassing TagsProvider and implementing #addTags. After implementation, the provider must be [added to the DataGenerator.",source:"@site/versioned_docs/version-1.20.4/datagen/tags.md",sourceDirName:"datagen",slug:"/datagen/tags",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/datagen/tags",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Recipe Generation",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/datagen/recipes"},next:{title:"Data Maps",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/datamaps/"}},a={},l=[{value:"<code>TagsProvider</code>",id:"tagsprovider",level:2},{value:"Existing Providers",id:"existing-providers",level:3},{value:"<code>ItemTagsProvider#copy</code>",id:"itemtagsprovidercopy",level:4},{value:"Custom Tag Providers",id:"custom-tag-providers",level:2},{value:"Intrinsic Holder Tags Providers",id:"intrinsic-holder-tags-providers",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tag-generation",children:"Tag Generation"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/docs/1.20.4/resources/server/tags",children:"Tags"})," can be generated for a mod by subclassing ",(0,n.jsx)(t.code,{children:"TagsProvider"})," and implementing ",(0,n.jsx)(t.code,{children:"#addTags"}),". After implementation, the provider must be ",(0,n.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/docs/1.20.4/resources/#data-generation",children:"added"})," to the ",(0,n.jsx)(t.code,{children:"DataGenerator"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"// On the MOD event bus\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // Tell generator to run only when server data are generating\n        event.includeServer(),\n        // Extends net.neoforged.neoforge.common.data.BlockTagsProvider\n        output -> new MyBlockTagsProvider(\n          output,\n          event.getLookupProvider(),\n          MOD_ID,\n          event.getExistingFileHelper()\n        )\n    );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"tagsprovider",children:(0,n.jsx)(t.code,{children:"TagsProvider"})}),"\n",(0,n.jsxs)(t.p,{children:["The tags provider has two methods used for generating tags: creating a tag with objects and other tags via ",(0,n.jsx)(t.code,{children:"#tag"}),", or using tags from other object types to generate the tag data via ",(0,n.jsx)(t.code,{children:"#getOrCreateRawBuilder"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Typically, a provider will not call ",(0,n.jsx)(t.code,{children:"#getOrCreateRawBuilder"})," directly unless a registry contains a representation of objects from a different registry (blocks have item representations to obtain the blocks in the inventory)."]})}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"#tag"})," is called, a ",(0,n.jsx)(t.code,{children:"TagAppender"})," is created which acts as a chainable consumer of elements to add to the tag:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Method"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"add"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Adds an object to a tag through its resource key."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"addOptional"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Adds an object to a tag through its name. If the object is not present, then the object will be skipped when loading."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"addTag"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Adds a tag to a tag through its tag key. All elements within the inner tag are now a part of the outer tag."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"addOptionalTag"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Adds a tag to a tag through its name. If the tag is not present, then the tag will be skipped when loading."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"replace"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["When ",(0,n.jsx)(t.code,{children:"true"}),", all previously loaded entries added to this tag from other datapacks will be discarded. If a datapack is loaded after this one, then it will still append the entries to the tag."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"remove"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Removes an object or tag from a tag through its name or key."})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// In some TagProvider#addTags\nthis.tag(EXAMPLE_TAG)\n  .add(EXAMPLE_OBJECT) // Adds an object to the tag\n  .addOptional(new ResourceLocation("othermod", "other_object")) // Adds an object from another mod to the tag\n\nthis.tag(EXAMPLE_TAG_2)\n  .addTag(EXAMPLE_TAG) // Adds a tag to the tag\n  .remove(EXAMPLE_OBJECT) // Removes an object from this tag\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsx)(t.p,{children:"If the mod's tags softly depends on another mod's tags (the other mod may or may not be present at runtime), the other mods' tags should be referenced using the optional methods."})}),"\n",(0,n.jsx)(t.h3,{id:"existing-providers",children:"Existing Providers"}),"\n",(0,n.jsx)(t.p,{children:"Minecraft contains a few tag providers for certain registries that can be subclassed instead. Additionally, some providers contain additional helper methods to more easily create tags."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Registry Object Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Tag Provider"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Block"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"BlockTagsProvider"}),"*"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Item"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ItemTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"EntityType"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"EntityTypeTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Fluid"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"FluidTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"GameEvent"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"GameEventTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Biome"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"BiomeTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"FlatLevelGeneratorPreset"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"FlatLevelGeneratorPresetTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"WorldPreset"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"WorldPresetTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Structure"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"StructureTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"PoiType"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"PoiTypeTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"BannerPattern"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"BannerPatternTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"CatVariant"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"CatVariantTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"PaintingVariant"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"PaintingVariantTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"Instrument"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"InstrumentTagsProvider"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"DamageType"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"DamageTypeTagsProvider"})})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["* ",(0,n.jsx)(t.code,{children:"BlockTagsProvider"})," is a NeoForge added ",(0,n.jsx)(t.code,{children:"TagsProvider"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"itemtagsprovidercopy",children:(0,n.jsx)(t.code,{children:"ItemTagsProvider#copy"})}),"\n",(0,n.jsxs)(t.p,{children:["Blocks have item representations to obtain them in the inventory. As such, many of the block tags can also be an item tag. To easily generate item tags to have the same entries as block tags, the ",(0,n.jsx)(t.code,{children:"#copy"})," method can be used which takes in the block tag to copy from and the item tag to copy to."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"//In ItemTagsProvider#addTags\nthis.copy(EXAMPLE_BLOCK_TAG, EXAMPLE_ITEM_TAG);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"custom-tag-providers",children:"Custom Tag Providers"}),"\n",(0,n.jsxs)(t.p,{children:["A custom tag provider can be created via a ",(0,n.jsx)(t.code,{children:"TagsProvider"})," subclass which takes in the registry key to generate tags for."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"public RecipeTypeTagsProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries, ExistingFileHelper fileHelper) {\n  super(output, Registries.RECIPE_TYPE, registries, MOD_ID, fileHelper);\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"intrinsic-holder-tags-providers",children:"Intrinsic Holder Tags Providers"}),"\n",(0,n.jsxs)(t.p,{children:["One special type of ",(0,n.jsx)(t.code,{children:"TagProvider"}),"s are ",(0,n.jsx)(t.code,{children:"IntrinsicHolderTagsProvider"}),"s. When creating a tag using this provider via ",(0,n.jsx)(t.code,{children:"#tag"}),", the object itself can be used to add itself to the tag via ",(0,n.jsx)(t.code,{children:"#add"}),". To do so, a function is provided within the constructor to turn an object into its ",(0,n.jsx)(t.code,{children:"ResourceKey"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"// Subtype of `IntrinsicHolderTagsProvider`\npublic AttributeTagsProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries, ExistingFileHelper fileHelper) {\n  super(\n    output,\n    ForgeRegistries.Keys.ATTRIBUTES,\n    registries,\n    attribute -> ForgeRegistries.ATTRIBUTES.getResourceKey(attribute).get(),\n    MOD_ID,\n    fileHelper\n  );\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>d});var n=r(7294);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);