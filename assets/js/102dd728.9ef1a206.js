"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[4429],{8663:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=n(5893),a=n(1151);const l={},s="Capabilities",r={id:"datastorage/capabilities",title:"Capabilities",description:"Capabilities allow exposing features in a dynamic and flexible way without having to resort to directly implementing many interfaces.",source:"@site/versioned_docs/version-1.20.4/datastorage/capabilities.md",sourceDirName:"datastorage",slug:"/datastorage/capabilities",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/datastorage/capabilities",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Data Attachments",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/datastorage/attachments"},next:{title:"Codecs",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/datastorage/codecs"}},o={},c=[{value:"Why use capabilities",id:"why-use-capabilities",level:2},{value:"NeoForge-provided capabilities",id:"neoforge-provided-capabilities",level:2},{value:"Creating a capability",id:"creating-a-capability",level:2},{value:"Querying capabilities",id:"querying-capabilities",level:2},{value:"Block capability caching",id:"block-capability-caching",level:2},{value:"Block capability invalidation",id:"block-capability-invalidation",level:2},{value:"Registering capabilities",id:"registering-capabilities",level:2},{value:"Registering capabilities for all objects",id:"registering-capabilities-for-all-objects",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsx)(i.p,{children:"Capabilities allow exposing features in a dynamic and flexible way without having to resort to directly implementing many interfaces."}),"\n",(0,t.jsx)(i.p,{children:"In general terms, each capability provides a feature in the form of an interface."}),"\n",(0,t.jsx)(i.p,{children:"NeoForge adds capability support to blocks, entities, and item stacks.\nThis will be explained in more detail in the following sections."}),"\n",(0,t.jsx)(i.h2,{id:"why-use-capabilities",children:"Why use capabilities"}),"\n",(0,t.jsxs)(i.p,{children:["Capabilities are designed to separate ",(0,t.jsx)(i.strong,{children:"what"})," a block, entity or item stack can do from ",(0,t.jsx)(i.strong,{children:"how"})," it does it.\nIf you are wondering whether capabilities are the right tool for a job, ask yourself the following questions:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Do I only care about ",(0,t.jsx)(i.strong,{children:"what"})," a block, entity or item stack can do, but not about ",(0,t.jsx)(i.strong,{children:"how"})," it does it?"]}),"\n",(0,t.jsxs)(i.li,{children:["Is the ",(0,t.jsx)(i.strong,{children:"what"}),", the behavior, only available for some blocks, entities, or item stacks, but not all of them?"]}),"\n",(0,t.jsxs)(i.li,{children:["Is the ",(0,t.jsx)(i.strong,{children:"how"}),", the implementation of that behavior, dependent on the specific block, entity or item stack?"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Here are a few examples of good capability usage:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:'"I want my fluid container to be compatible with fluid containers from other mods, but I don\'t know the specifics of each fluid container."'})," - Yes, use the ",(0,t.jsx)(i.code,{children:"IFluidHandler"})," capability."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:'"I want to count how many items are in some entity, but I do not know how the entity might store them."'})," - Yes, use the ",(0,t.jsx)(i.code,{children:"IItemHandler"})," capability."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:'"I want to fill some item stack with power, but I do not know how the item stack might store it."'})," - Yes, use the ",(0,t.jsx)(i.code,{children:"IEnergyStorage"})," capability."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:'"I want to apply some color to whatever block a player is currently targeting, but I do not know how the block will be transformed."'})," - Yes. NeoForge does not provide a capability to color blocks, but you can implement one yourself."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Here is an example of discouraged capability usage:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:'"I want to check if an entity is within the range of my machine."'})," - No, use a helper method instead."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"neoforge-provided-capabilities",children:"NeoForge-provided capabilities"}),"\n",(0,t.jsxs)(i.p,{children:["NeoForge provides capabilities for the following three interfaces: ",(0,t.jsx)(i.code,{children:"IItemHandler"}),", ",(0,t.jsx)(i.code,{children:"IFluidHandler"})," and ",(0,t.jsx)(i.code,{children:"IEnergyStorage"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"IItemHandler"})," exposes an interface for handling inventory slots. The capabilities of type ",(0,t.jsx)(i.code,{children:"IItemHandler"})," are:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.ItemHandler.BLOCK"}),": automation-accessible inventory of a block (for chests, machines, etc)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.ItemHandler.ENTITY"}),": inventory contents of an entity (extra player slots, mob/creature inventories/bags)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.ItemHandler.ENTITY_AUTOMATION"}),": automation-accessible inventory of an entity (boats, minecarts, etc)."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.ItemHandler.ITEM"}),": contents of an item stack (portable backpacks and such)."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"IFluidHandler"})," exposes an interface for handling fluid inventories. The capabilities of type ",(0,t.jsx)(i.code,{children:"IFluidHandler"})," are:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.FluidHandler.BLOCK"}),": automation-accessible fluid inventory of a block."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.FluidHandler.ENTITY"}),": fluid inventory of an entity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.FluidHandler.ITEM"}),": fluid inventory of an item stack.\nThis capability is of the special ",(0,t.jsx)(i.code,{children:"IFluidHandlerItem"})," type due to the way buckets hold fluids."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"IEnergyStorage"})," exposes an interface for handling energy containers. It is based on the RedstoneFlux API by TeamCoFH. The capabilities of type ",(0,t.jsx)(i.code,{children:"IEnergyStorage"})," are:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.EnergyStorage.BLOCK"}),": energy contained inside a block."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.EnergyStorage.ENTITY"}),": energy containing inside an entity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"Capabilities.EnergyStorage.ITEM"}),": energy contained inside an item stack."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"creating-a-capability",children:"Creating a capability"}),"\n",(0,t.jsx)(i.p,{children:"NeoForge supports capabilities for blocks, entities, and item stacks."}),"\n",(0,t.jsx)(i.p,{children:"Capabilities allow looking up implementations of some APIs with some dispatching logic. The following kinds of capabilities are implemented in NeoForge:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"BlockCapability"}),": capabilities for blocks and block entities; behavior depends on the specific ",(0,t.jsx)(i.code,{children:"Block"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"EntityCapability"}),": capabilities for entities: behavior dependends on the specific ",(0,t.jsx)(i.code,{children:"EntityType"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"ItemCapability"}),": capabilities for item stacks: behavior depends on the specific ",(0,t.jsx)(i.code,{children:"Item"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["For compatibility with other mods,\nwe recommend using the capabilities provided by NeoForge in the ",(0,t.jsx)(i.code,{children:"Capabilities"})," class if possible.\nOtherwise, you can create your own as described in this section."]})}),"\n",(0,t.jsxs)(i.p,{children:["Creating a capability is a single function call, and the resulting object should be stored in a ",(0,t.jsx)(i.code,{children:"static final"})," field.\nThe following parameters must be provided:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The name of the capability.\nCreating a capability with the same name multiple times will always return the same object.\nCapabilities with different names are ",(0,t.jsx)(i.strong,{children:"completely independent"}),", and can be used for different purposes."]}),"\n",(0,t.jsxs)(i.li,{children:["The behavior type that is being queried. This is the ",(0,t.jsx)(i.code,{children:"T"})," type parameter."]}),"\n",(0,t.jsxs)(i.li,{children:["The type for additional context in the query. This is the ",(0,t.jsx)(i.code,{children:"C"})," type parameter."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["For example, here is how a capability for side-aware block ",(0,t.jsx)(i.code,{children:"IItemHandler"}),"s might be declared:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'public static final BlockCapability<IItemHandler, @Nullable Direction> ITEM_HANDLER_BLOCK =\n    BlockCapability.create(\n        // Provide a name to uniquely identify the capability.\n        new ResourceLocation("mymod", "item_handler"),\n        // Provide the queried type. Here, we want to look up `IItemHandler` instances.\n        IItemHandler.class,\n        // Provide the context type. We will allow the query to receive an extra `Direction side` parameter.\n        Direction.class);\n'})}),"\n",(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.code,{children:"@Nullable Direction"})," is so common for blocks that there is a dedicated helper:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'public static final BlockCapability<IItemHandler, @Nullable Direction> ITEM_HANDLER_BLOCK =\n    BlockCapability.createSided(\n        // Provide a name to uniquely identify the capability.\n        new ResourceLocation("mymod", "item_handler"),\n        // Provide the queried type. Here, we want to look up `IItemHandler` instances.\n        IItemHandler.class);\n'})}),"\n",(0,t.jsxs)(i.p,{children:["If no context is required, ",(0,t.jsx)(i.code,{children:"Void"})," should be used.\nThere is also a dedicated helper for context-less capabilities:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'public static final BlockCapability<IItemHandler, Void> ITEM_HANDLER_NO_CONTEXT =\n    BlockCapability.createVoid(\n        // Provide a name to uniquely identify the capability.\n        new ResourceLocation("mymod", "item_handler_no_context"),\n        // Provide the queried type. Here, we want to look up `IItemHandler` instances.\n        IItemHandler.class);\n'})}),"\n",(0,t.jsxs)(i.p,{children:["For entities and item stacks, similar methods exist in ",(0,t.jsx)(i.code,{children:"EntityCapability"})," and ",(0,t.jsx)(i.code,{children:"ItemCapability"})," respectively."]}),"\n",(0,t.jsx)(i.h2,{id:"querying-capabilities",children:"Querying capabilities"}),"\n",(0,t.jsxs)(i.p,{children:["Once we have our ",(0,t.jsx)(i.code,{children:"BlockCapability"}),", ",(0,t.jsx)(i.code,{children:"EntityCapability"}),", or ",(0,t.jsx)(i.code,{children:"ItemCapability"})," object in a static field, we can query a capability."]}),"\n",(0,t.jsxs)(i.p,{children:["For entities and item stacks, we can try to find implementations of a capability with ",(0,t.jsx)(i.code,{children:"getCapability"}),".\nIf the result is ",(0,t.jsx)(i.code,{children:"null"}),", there no implementation is available."]}),"\n",(0,t.jsx)(i.p,{children:"For example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"var object = entity.getCapability(CAP, context);\nif (object != null) {\n    // Use object\n}\n"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"var object = stack.getCapability(CAP, context);\nif (object != null) {\n    // Use object\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Block capabilities are used a bit differently because blocks without a block entity can have capabilities as well.\nThe query is now performed on a ",(0,t.jsx)(i.code,{children:"level"}),", with the ",(0,t.jsx)(i.code,{children:"pos"}),"ition that we are looking for as an additional parameter:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"var object = level.getCapability(CAP, pos, context);\nif (object != null) {\n    // Use object\n}\n"})}),"\n",(0,t.jsx)(i.p,{children:"If the block entity and/or the block state is known, they can be passed to save on query time:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"var object = level.getCapability(CAP, pos, blockState, blockEntity, context);\nif (object != null) {\n    // Use object\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["To give a more concrete example, here is how one might query an ",(0,t.jsx)(i.code,{children:"IItemHandler"})," capability for a block, from the ",(0,t.jsx)(i.code,{children:"Direction.NORTH"})," side:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"IItemHandler handler = level.getCapability(Capabilities.ItemHandler.BLOCK, pos, Direction.NORTH);\nif (handler != null) {\n    // Use the handler for some item-related operation.\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"block-capability-caching",children:"Block capability caching"}),"\n",(0,t.jsx)(i.p,{children:"When a capability is looked up, the system will perform the following steps under the hood:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Fetch block entity and block state if they were not supplied."}),"\n",(0,t.jsx)(i.li,{children:"Fetch registered capability providers. (More on this below)."}),"\n",(0,t.jsx)(i.li,{children:"Iterate the providers and ask them if they can provide the capability."}),"\n",(0,t.jsx)(i.li,{children:"One of the providers will return a capability instance, potentially allocating a new object."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The implementation is rather efficient, but for queries that are performed frequently,\nfor example every game tick, these steps can take a significant amount of server time.\nThe ",(0,t.jsx)(i.code,{children:"BlockCapabilityCache"})," system provides a dramatic speedup for capabilities that are frequently queried at a given position."]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["Generally, a ",(0,t.jsx)(i.code,{children:"BlockCapabilityCache"})," will be created once and then stored in a field of the object performing frequent capability queries.\nWhen and where exactly you store the cache is up to you."]})}),"\n",(0,t.jsxs)(i.p,{children:["To create a cache, call ",(0,t.jsx)(i.code,{children:"BlockCapabilityCache.create"})," with the capability to query, the level, the position, and the query context."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"// Declare the field:\nprivate BlockCapabilityCache<IItemHandler, @Nullable Direction> capCache;\n\n// Later, for example in `onLoad` for a block entity:\nthis.capCache = BlockCapabilityCache.create(\n        Capabilities.ItemHandler.BLOCK, // capability to cache\n        level, // level\n        pos, // target position\n        Direction.NORTH // context\n);\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Querying the cache is then done with ",(0,t.jsx)(i.code,{children:"getCapability()"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"IItemHandler handler = this.capCache.getCapability();\nif (handler != null) {\n    // Use the handler for some item-related operation.\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["-",(0,t.jsx)(i.em,{children:"The cache is automatically cleared by the garbage collector, there is no need to unregister it."}),"*"]}),"\n",(0,t.jsxs)(i.p,{children:["It is also possible to receive notifications when the capability object changes!\nThis includes capabilities changing (",(0,t.jsx)(i.code,{children:"oldHandler != newHandler"}),"), becoming unavailable (",(0,t.jsx)(i.code,{children:"null"}),") or becoming available again (not ",(0,t.jsx)(i.code,{children:"null"})," anymore)."]}),"\n",(0,t.jsx)(i.p,{children:"The cache then needs to be created with two additional parameters:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["A validity check, that is used to determine if the cache is still valid.\nIn the simplest usage as a block entity field, ",(0,t.jsx)(i.code,{children:"() -> !this.isRemoved()"})," will do."]}),"\n",(0,t.jsx)(i.li,{children:"An invalidation listener, that is called when the capability changes.\nThis is where you can react to capability changes, removals, or appearances."}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"// With optional invalidation listener:\nthis.capCache = BlockCapabilityCache.create(\n        Capabilities.ItemHandler.BLOCK, // capability to cache\n        level, // level\n        pos, // target position\n        Direction.NORTH, // context\n        () -> !this.isRemoved(), // validity check (because the cache might outlive the object it belongs to)\n        () -> onCapInvalidate() // invalidation listener\n);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"block-capability-invalidation",children:"Block capability invalidation"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"Invalidation is exclusive to block capabilities. Entity and item stack capabilities cannot be cached and do not need to be invalidated."})}),"\n",(0,t.jsxs)(i.p,{children:["To make sure that caches can correctly update their stored capability, ",(0,t.jsxs)(i.strong,{children:["modders must call ",(0,t.jsx)(i.code,{children:"level.invalidateCapabilities(pos)"})," whenever a capability changes, appears, or disappears"]}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"// whenever a capability changes, appears, or disappears:\nlevel.invalidateCapabilities(pos);\n"})}),"\n",(0,t.jsx)(i.p,{children:"NeoForge already handles common cases such as chunk load/unloads and block entity creation/removal,\nbut other cases need to be handled explicitly by modders.\nFor example, modders must invalidate capabilities in the following cases:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"If a previously returned capability is no longer valid."}),"\n",(0,t.jsxs)(i.li,{children:["If a capability-providing block (without a block entity) is placed or changes state, by overriding ",(0,t.jsx)(i.code,{children:"onPlace"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["If a capability-providing block (without a block entity) is removed, by overriding ",(0,t.jsx)(i.code,{children:"onRemove"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["For a plain block example, refer to the ",(0,t.jsx)(i.code,{children:"ComposterBlock.java"})," file."]}),"\n",(0,t.jsxs)(i.p,{children:["For more information, refer to the javadoc of ",(0,t.jsx)(i.a,{href:"https://github.com/neoforged/NeoForge/blob/1.20.x/src/main/java/net/neoforged/neoforge/capabilities/IBlockCapabilityProvider.java",children:(0,t.jsx)(i.code,{children:"IBlockCapabilityProvider"})}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"registering-capabilities",children:"Registering capabilities"}),"\n",(0,t.jsxs)(i.p,{children:["A capability ",(0,t.jsx)(i.em,{children:"provider"})," is what ultimately supplies a capability.\nA capability provider is function that can either return a capability instance, or ",(0,t.jsx)(i.code,{children:"null"})," if it cannot provide the capability.\nProviders are specific to:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"the given capability that they are providing for, and"}),"\n",(0,t.jsx)(i.li,{children:"the block instance, block entity type, entity type, or item instance that they are providing for."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["They need to be registered in the ",(0,t.jsx)(i.code,{children:"RegisterCapabilitiesEvent"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Block providers are registered with ",(0,t.jsx)(i.code,{children:"registerBlock"}),". For example:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"private static void registerCapabilities(RegisterCapabilitiesEvent event) {\n    event.registerBlock(\n        Capabilities.ItemHandler.BLOCK, // capability to register for\n        (level, pos, state, be, side) -> <return the IItemHandler>,\n        // blocks to register for\n        MY_ITEM_HANDLER_BLOCK,\n        MY_OTHER_ITEM_HANDLER_BLOCK);\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["In general, registration will be specific to some block entity types, so the ",(0,t.jsx)(i.code,{children:"registerBlockEntity"})," helper method is provided as well:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"    event.registerBlockEntity(\n        Capabilities.ItemHandler.BLOCK, // capability to register for\n        MY_BLOCK_ENTITY_TYPE, // block entity type to register for\n        (myBlockEntity, side) -> <return the IItemHandler for myBlockEntity and side>);\n"})}),"\n",(0,t.jsx)(i.admonition,{type:"danger",children:(0,t.jsxs)(i.p,{children:["If the capability previously returned by a block or block entity provider is no longer valid,\n-",(0,t.jsx)(i.em,{children:"you must invalidate the caches"}),"* by calling ",(0,t.jsx)(i.code,{children:"level.invalidateCapabilities(pos)"}),".\nRefer to the ",(0,t.jsx)(i.a,{href:"#block-capability-invalidation",children:"invalidation section"})," above for more information."]})}),"\n",(0,t.jsxs)(i.p,{children:["Entity registration is similar, using ",(0,t.jsx)(i.code,{children:"registerEntity"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"event.registerEntity(\n    Capabilities.ItemHandler.ENTITY, // capability to register for\n    MY_ENTITY_TYPE, // entity type to register for\n    (myEntity, context) -> <return the IItemHandler for myEntity>);\n"})}),"\n",(0,t.jsx)(i.p,{children:"Item registration is similar too. Note that the provider receives the stack:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"event.registerItem(\n    Capabilities.ItemHandler.ITEM, // capability to register for\n    (itemStack, context) -> <return the IItemHandler for the itemStack>,\n    // items to register for\n    MY_ITEM,\n    MY_OTHER_ITEM);\n"})}),"\n",(0,t.jsx)(i.h2,{id:"registering-capabilities-for-all-objects",children:"Registering capabilities for all objects"}),"\n",(0,t.jsx)(i.p,{children:"If for some reason you need to register a provider for all blocks, entities, or items,\nyou will need to iterate the corresponding registry and register the provider for each object."}),"\n",(0,t.jsxs)(i.p,{children:["For example, NeoForge uses this system to register a fluid handler capability for all ",(0,t.jsx)(i.code,{children:"BucketItem"}),"s (excluding subclasses):"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"// For reference, you can find this code in the `CapabilityHooks` class.\nfor (Item item : BuiltInRegistries.ITEM) {\n    if (item.getClass() == BucketItem.class) {\n        event.registerItem(Capabilities.FluidHandler.ITEM, (stack, ctx) -> new FluidBucketWrapper(stack), item);\n    }\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Providers are asked for a capability in the order that they are registered.\nShould you want to run before a provider that NeoForge already registers for one of your objects,\nregister your ",(0,t.jsx)(i.code,{children:"RegisterCapabilitiesEvent"})," handler with a higher priority.\nFor example:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"modBus.addListener(RegisterCapabilitiesEvent.class, event -> {\n    event.registerItem(\n        Capabilities.FluidHandler.ITEM,\n        (stack, ctx) -> new MyCustomFluidBucketWrapper(stack),\n        // blocks to register for\n        MY_CUSTOM_BUCKET);\n}, EventPriority.HIGH); // use HIGH priority to register before NeoForge!\n"})}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.a,{href:"https://github.com/neoforged/NeoForge/blob/1.20.x/src/main/java/net/neoforged/neoforge/capabilities/CapabilityHooks.java",children:(0,t.jsx)(i.code,{children:"CapabilityHooks"})})," for a list of the providers registered by NeoForge itself."]})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>s});var t=n(7294);const a={},l=t.createContext(a);function s(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);