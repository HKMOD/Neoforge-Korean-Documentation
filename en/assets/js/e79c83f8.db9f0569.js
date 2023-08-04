"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[6298],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),g=p(a),c=r,k=g["".concat(l,".").concat(c)]||g[c]||m[c]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[g]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5012:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},o="Tag Generation",d={unversionedId:"datagen/server/tags",id:"datagen/server/tags",title:"Tag Generation",description:"Tags] can be generated for a mod by subclassing TagsProvider and implementing #addTags. After implementation, the provider must be [added to the DataGenerator.",source:"@site/docs/datagen/server/tags.md",sourceDirName:"datagen/server",slug:"/datagen/server/tags",permalink:"/Neoforge-Korean-Documentation/en/docs/datagen/server/tags",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Recipe Generation",permalink:"/Neoforge-Korean-Documentation/en/docs/datagen/server/recipes"},next:{title:"\uce90\ud328\ube4c\ub9ac\ud2f0",permalink:"/Neoforge-Korean-Documentation/en/docs/datastorage/capabilities"}},l={},p=[{value:"<code>TagsProvider</code>",id:"tagsprovider",level:2},{value:"Existing Providers",id:"existing-providers",level:3},{value:"<code>ItemTagsProvider#copy</code>",id:"itemtagsprovidercopy",level:4},{value:"Custom Tag Providers",id:"custom-tag-providers",level:2},{value:"Intrinsic Holder Tags Providers",id:"intrinsic-holder-tags-providers",level:3}],s={toc:p},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tag-generation"},"Tag Generation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/resources/server/tags"},"Tags")," can be generated for a mod by subclassing ",(0,r.kt)("inlineCode",{parentName:"p"},"TagsProvider")," and implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"#addTags"),". After implementation, the provider must be ",(0,r.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/en/docs/datagen/#data-providers"},"added")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataGenerator"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// On the MOD event bus\n@SubscribeEvent\npublic void gatherData(GatherDataEvent event) {\n    event.getGenerator().addProvider(\n        // Tell generator to run only when server data are generating\n        event.includeServer(),\n        // Extends net.minecraftforge.common.data.BlockTagsProvider\n        output -> new MyBlockTagsProvider(\n          output,\n          event.getLookupProvider(),\n          MOD_ID,\n          event.getExistingFileHelper()\n        )\n    );\n}\n")),(0,r.kt)("h2",{id:"tagsprovider"},(0,r.kt)("inlineCode",{parentName:"h2"},"TagsProvider")),(0,r.kt)("p",null,"The tags provider has two methods used for generating tags: creating a tag with objects and other tags via ",(0,r.kt)("inlineCode",{parentName:"p"},"#tag"),", or using tags from other object types to generate the tag data via ",(0,r.kt)("inlineCode",{parentName:"p"},"#getOrCreateRawBuilder"),"."),(0,r.kt)("p",null,"!!! note\nTypically, a provider will not call ",(0,r.kt)("inlineCode",{parentName:"p"},"#getOrCreateRawBuilder")," directly unless a registry contains a representation of objects from a different registry (blocks have item representations to obtain the blocks in the inventory)."),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"#tag")," is called, a ",(0,r.kt)("inlineCode",{parentName:"p"},"TagAppender")," is created which acts as a chainable consumer of elements to add to the tag:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Method"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"add")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds an object to a tag through its resource key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"addOptional")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds an object to a tag through its name. If the object is not present, then the object will be skipped when loading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"addTag")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds a tag to a tag through its tag key. All elements within the inner tag are now a part of the outer tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"addOptionalTag")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds a tag to a tag through its name. If the tag is not present, then the tag will be skipped when loading.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"replace")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", all previously loaded entries added to this tag from other datapacks will be discarded. If a datapack is loaded after this one, then it will still append the entries to the tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"remove")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Removes an object or tag from a tag through its name or key.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// In some TagProvider#addTags\nthis.tag(EXAMPLE_TAG)\n  .add(EXAMPLE_OBJECT) // Adds an object to the tag\n  .addOptional(new ResourceLocation("othermod", "other_object")) // Adds an object from another mod to the tag\n\nthis.tag(EXAMPLE_TAG_2)\n  .addTag(EXAMPLE_TAG) // Adds a tag to the tag\n  .remove(EXAMPLE_OBJECT) // Removes an object from this tag\n')),(0,r.kt)("p",null,"!!! important\nIf the mod's tags softly depends on another mod's tags (the other mod may or may not be present at runtime), the other mods' tags should be referenced using the optional methods."),(0,r.kt)("h3",{id:"existing-providers"},"Existing Providers"),(0,r.kt)("p",null,"Minecraft contains a few tag providers for certain registries that can be subclassed instead. Additionally, some providers contain additional helper methods to more easily create tags."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Registry Object Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tag Provider"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Block")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BlockTagsProvider"),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Item")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ItemTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"EntityType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"EntityTypeTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Fluid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"FluidTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"GameEvent")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"GameEventTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Biome")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BiomeTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"FlatLevelGeneratorPreset")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"FlatLevelGeneratorPresetTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"WorldPreset")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"WorldPresetTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Structure")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"StructureTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"PoiType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PoiTypeTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"BannerPattern")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BannerPatternTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"CatVariant")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CatVariantTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"PaintingVariant")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PaintingVariantTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Instrument")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"InstrumentTagsProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"DamageType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DamageTypeTagsProvider"))))),(0,r.kt)("p",null,"*"," ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockTagsProvider")," is a Forge added ",(0,r.kt)("inlineCode",{parentName:"p"},"TagsProvider"),"."),(0,r.kt)("h4",{id:"itemtagsprovidercopy"},(0,r.kt)("inlineCode",{parentName:"h4"},"ItemTagsProvider#copy")),(0,r.kt)("p",null,"Blocks have item representations to obtain them in the inventory. As such, many of the block tags can also be an item tag. To easily generate item tags to have the same entries as block tags, the ",(0,r.kt)("inlineCode",{parentName:"p"},"#copy")," method can be used which takes in the block tag to copy from and the item tag to copy to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"//In ItemTagsProvider#addTags\nthis.copy(EXAMPLE_BLOCK_TAG, EXAMPLE_ITEM_TAG);\n")),(0,r.kt)("h2",{id:"custom-tag-providers"},"Custom Tag Providers"),(0,r.kt)("p",null,"A custom tag provider can be created via a ",(0,r.kt)("inlineCode",{parentName:"p"},"TagsProvider")," subclass which takes in the registry key to generate tags for."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public RecipeTypeTagsProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries, ExistingFileHelper fileHelper) {\n  super(output, Registries.RECIPE_TYPE, registries, MOD_ID, fileHelper);\n}\n")),(0,r.kt)("h3",{id:"intrinsic-holder-tags-providers"},"Intrinsic Holder Tags Providers"),(0,r.kt)("p",null,"One special type of ",(0,r.kt)("inlineCode",{parentName:"p"},"TagProvider"),"s are ",(0,r.kt)("inlineCode",{parentName:"p"},"IntrinsicHolderTagsProvider"),"s. When creating a tag using this provider via ",(0,r.kt)("inlineCode",{parentName:"p"},"#tag"),", the object itself can be used to add itself to the tag via ",(0,r.kt)("inlineCode",{parentName:"p"},"#add"),". To do so, a function is provided within the constructor to turn an object into its ",(0,r.kt)("inlineCode",{parentName:"p"},"ResourceKey"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Subtype of `IntrinsicHolderTagsProvider`\npublic AttributeTagsProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries, ExistingFileHelper fileHelper) {\n  super(\n    output,\n    ForgeRegistries.Keys.ATTRIBUTES,\n    registries,\n    attribute -> ForgeRegistries.ATTRIBUTES.getResourceKey(attribute).get(),\n    MOD_ID,\n    fileHelper\n  );\n}\n")))}m.isMDXComponent=!0}}]);