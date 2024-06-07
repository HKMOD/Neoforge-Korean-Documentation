"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[8031],{9760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=t(5893),o=t(1151);const c={},s="Block Entities",a={id:"blockentities/index",title:"Block Entities",description:"BlockEntities are like simplified Entities that are bound to a Block.",source:"@site/versioned_docs/version-1.20.4/blockentities/index.md",sourceDirName:"blockentities",slug:"/blockentities/",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/blockentities/",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Access Transformer",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/advanced/accesstransformers"},next:{title:"BlockEntityRenderer",permalink:"/Neoforge-Korean-Documentation/docs/1.20.4/blockentities/ber"}},r={},l=[{value:"Registering",id:"registering",level:2},{value:"Creating a <code>BlockEntity</code>",id:"creating-a-blockentity",level:2},{value:"Storing Data within your <code>BlockEntity</code>",id:"storing-data-within-your-blockentity",level:2},{value:"Ticking <code>BlockEntities</code>",id:"ticking-blockentities",level:2},{value:"Synchronizing the Data to the Client",id:"synchronizing-the-data-to-the-client",level:2},{value:"Synchronizing on LevelChunk Load",id:"synchronizing-on-levelchunk-load",level:3},{value:"Synchronizing on Block Update",id:"synchronizing-on-block-update",level:3},{value:"Synchronizing Using a Custom Network Message",id:"synchronizing-using-a-custom-network-message",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"block-entities",children:"Block Entities"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BlockEntities"})," are like simplified ",(0,i.jsx)(n.code,{children:"Entities"})," that are bound to a Block.\nThey are used to store dynamic data, execute tick based tasks, and dynamic rendering.\nSome examples from vanilla Minecraft would be handling of inventories on chests, smelting logic on furnaces, or area effects on beacons.\nMore advanced examples exist in mods, such as quarries, sorting machines, pipes, and displays."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BlockEntities"})," aren't a solution for everything and they can cause lag when used wrongly.\nWhen possible, try to avoid them."]})}),"\n",(0,i.jsx)(n.h2,{id:"registering",children:"Registering"}),"\n",(0,i.jsx)(n.p,{children:"Block Entities are created and removed dynamically and as such are not registry objects on their own."}),"\n",(0,i.jsxs)(n.p,{children:["In order to create a ",(0,i.jsx)(n.code,{children:"BlockEntity"}),", you need to extend the ",(0,i.jsx)(n.code,{children:"BlockEntity"})," class. As such, another object is registered instead to easily create and refer to the ",(0,i.jsx)(n.em,{children:"type"})," of the dynamic object. For a ",(0,i.jsx)(n.code,{children:"BlockEntity"}),", these are known as ",(0,i.jsx)(n.code,{children:"BlockEntityType"}),"s."]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"BlockEntityType"})," can be ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/1.20.4/concepts/registries#methods-for-registering",children:"registered"})," like any other registry object. To construct a ",(0,i.jsx)(n.code,{children:"BlockEntityType"}),", its builder form can be used via ",(0,i.jsx)(n.code,{children:"BlockEntityType$Builder#of"}),". This takes in two arguments: a BlockEntityType.BlockEntitySupplier which takes in a ",(0,i.jsx)(n.code,{children:"BlockPos"})," and ",(0,i.jsx)(n.code,{children:"BlockState"})," to create a new instance of the associated ",(0,i.jsx)(n.code,{children:"BlockEntity"}),", and a varargs of ",(0,i.jsx)(n.code,{children:"Block"}),"s which this ",(0,i.jsx)(n.code,{children:"BlockEntity"})," can be attached to. Building the ",(0,i.jsx)(n.code,{children:"BlockEntityType"})," is done by calling ",(0,i.jsx)(n.code,{children:"BlockEntityType$Builder#build"}),". This takes in a ",(0,i.jsx)(n.code,{children:"Type"})," which represents the type-safe reference used to refer to this registry object in a ",(0,i.jsx)(n.code,{children:"DataFixer"}),". Since ",(0,i.jsx)(n.code,{children:"DataFixer"}),"s are an optional system to use for mods, this can be passed as ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// For some DeferredRegister<BlockEntityType<?>> REGISTER\npublic static final RegistryObject<BlockEntityType<MyBE>> MY_BE = REGISTER.register("mybe", () -> BlockEntityType.Builder.of(MyBE::new, validBlocks).build(null));\n\n// In MyBE, a BlockEntity subclass\npublic MyBE(BlockPos pos, BlockState state) {\n  super(MY_BE.get(), pos, state);\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"creating-a-blockentity",children:["Creating a ",(0,i.jsx)(n.code,{children:"BlockEntity"})]}),"\n",(0,i.jsxs)(n.p,{children:["To create a ",(0,i.jsx)(n.code,{children:"BlockEntity"})," and attach it to a ",(0,i.jsx)(n.code,{children:"Block"}),", the ",(0,i.jsx)(n.code,{children:"EntityBlock"})," interface must be implemented on your ",(0,i.jsx)(n.code,{children:"Block"})," subclass. The method ",(0,i.jsx)(n.code,{children:"EntityBlock#newBlockEntity(BlockPos, BlockState)"})," must be implemented and return a new instance of your ",(0,i.jsx)(n.code,{children:"BlockEntity"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"storing-data-within-your-blockentity",children:["Storing Data within your ",(0,i.jsx)(n.code,{children:"BlockEntity"})]}),"\n",(0,i.jsx)(n.p,{children:"In order to save data, override the following two methods:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"BlockEntity#saveAdditional(CompoundTag tag)\n\nBlockEntity#load(CompoundTag tag)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["These methods are called whenever the ",(0,i.jsx)(n.code,{children:"LevelChunk"})," containing the ",(0,i.jsx)(n.code,{children:"BlockEntity"})," gets loaded from/saved to a tag.\nUse them to read and write to the fields in your block entity class."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Whenever your data changes, you need to call ",(0,i.jsx)(n.code,{children:"BlockEntity#setChanged"}),"; otherwise, the ",(0,i.jsx)(n.code,{children:"LevelChunk"})," containing your ",(0,i.jsx)(n.code,{children:"BlockEntity"})," might be skipped while the level is saved."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsxs)(n.p,{children:["It is important that you call the ",(0,i.jsx)(n.code,{children:"super"})," methods!"]}),(0,i.jsxs)(n.p,{children:["The tag names ",(0,i.jsx)(n.code,{children:"id"}),", ",(0,i.jsx)(n.code,{children:"x"}),", ",(0,i.jsx)(n.code,{children:"y"}),", ",(0,i.jsx)(n.code,{children:"z"}),", ",(0,i.jsx)(n.code,{children:"ForgeData"})," and ",(0,i.jsx)(n.code,{children:"ForgeCaps"})," are reserved by the ",(0,i.jsx)(n.code,{children:"super"})," methods."]})]}),"\n",(0,i.jsxs)(n.h2,{id:"ticking-blockentities",children:["Ticking ",(0,i.jsx)(n.code,{children:"BlockEntities"})]}),"\n",(0,i.jsxs)(n.p,{children:["If you need a ticking ",(0,i.jsx)(n.code,{children:"BlockEntity"}),", for example to keep track of the progress during a smelting process, another method must be implemented and overridden within ",(0,i.jsx)(n.code,{children:"EntityBlock"}),": ",(0,i.jsx)(n.code,{children:"EntityBlock#getTicker(Level, BlockState, BlockEntityType)"}),". This can implement different tickers depending on which logical side the user is on, or just implement one general ticker. In either case, a ",(0,i.jsx)(n.code,{children:"BlockEntityTicker"})," must be returned. Since this is a functional interface, it can just take in a method representing the ticker instead:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// Inside some Block subclass\n@Nullable\n@Override\npublic <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) {\n  return type == MyBlockEntityTypes.MYBE.get() ? MyBlockEntity::tick : null;\n}\n\n// Inside MyBlockEntity\npublic static void tick(Level level, BlockPos pos, BlockState state, MyBlockEntity blockEntity) {\n  // Do stuff\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This method is called each tick; therefore, you should avoid having complicated calculations in here. If possible, you should make more complex calculations every X ticks. (The amount of ticks in a second may be lower then 20 (twenty) but won't be higher)"})}),"\n",(0,i.jsx)(n.h2,{id:"synchronizing-the-data-to-the-client",children:"Synchronizing the Data to the Client"}),"\n",(0,i.jsx)(n.p,{children:"There are three ways of syncing data to the client: synchronizing on chunk load, on block updates, and with a custom network message."}),"\n",(0,i.jsx)(n.h3,{id:"synchronizing-on-levelchunk-load",children:"Synchronizing on LevelChunk Load"}),"\n",(0,i.jsx)(n.p,{children:"For this you need to override"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"BlockEntity#getUpdateTag()\n\nIForgeBlockEntity#handleUpdateTag(CompoundTag tag)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Again, this is pretty simple, the first method collects the data that should be sent to the client,\nwhile the second one processes that data. If your ",(0,i.jsx)(n.code,{children:"BlockEntity"})," doesn't contain much data, you might be able to use the methods out of the ",(0,i.jsxs)(n.a,{href:"#storing-data-within-your-blockentity",children:["Storing Data within your ",(0,i.jsx)(n.code,{children:"BlockEntity"})]})," section."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Synchronizing excessive/useless data for block entities can lead to network congestion. You should optimize your network usage by sending only the information the client needs when the client needs it. For instance, it is more often than not unnecessary to send the inventory of a block entity in the update tag, as this can be synchronized via its ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/1.20.4/gui/menus",children:(0,i.jsx)(n.code,{children:"AbstractContainerMenu"})}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"synchronizing-on-block-update",children:"Synchronizing on Block Update"}),"\n",(0,i.jsx)(n.p,{children:"This method is a bit more complicated, but again you just need to override two or three methods.\nHere is a tiny example implementation of it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Override\npublic CompoundTag getUpdateTag() {\n  CompoundTag tag = new CompoundTag();\n  //Write your data into the tag\n  return tag;\n}\n\n@Override\npublic Packet<ClientGamePacketListener> getUpdatePacket() {\n  // Will get tag from #getUpdateTag\n  return ClientboundBlockEntityDataPacket.create(this);\n}\n\n// Can override IForgeBlockEntity#onDataPacket. By default, this will defer to the #load.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The static constructors ",(0,i.jsx)(n.code,{children:"ClientboundBlockEntityDataPacket#create"})," takes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"BlockEntity"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["An optional function to get the ",(0,i.jsx)(n.code,{children:"CompoundTag"})," from the ",(0,i.jsx)(n.code,{children:"BlockEntity"}),". By default, this uses ",(0,i.jsx)(n.code,{children:"BlockEntity#getUpdateTag"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now, to send the packet, an update notification must be given on the server."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"Level#sendBlockUpdated(BlockPos pos, BlockState oldState, BlockState newState, int flags)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"pos"})," should be your ",(0,i.jsx)(n.code,{children:"BlockEntity"}),"'s position.\nFor ",(0,i.jsx)(n.code,{children:"oldState"})," and ",(0,i.jsx)(n.code,{children:"newState"}),", you can pass the current ",(0,i.jsx)(n.code,{children:"BlockState"})," at that position.\n",(0,i.jsx)(n.code,{children:"flags"})," is a bitmask that should contain ",(0,i.jsx)(n.code,{children:"2"}),", which will sync the changes to the client. See ",(0,i.jsx)(n.code,{children:"Block"})," for more info as well as the rest of the flags. The flag ",(0,i.jsx)(n.code,{children:"2"})," is equivalent to ",(0,i.jsx)(n.code,{children:"Block#UPDATE_CLIENTS"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"synchronizing-using-a-custom-network-message",children:"Synchronizing Using a Custom Network Message"}),"\n",(0,i.jsxs)(n.p,{children:["This way of synchronizing is probably the most complicated but is usually the most optimized,\nas you can make sure that only the data you need to be synchronized is actually synchronized.\nYou should first check out the ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/1.20.4/networking/",children:(0,i.jsx)(n.code,{children:"Networking"})})," section and especially ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/docs/1.20.4/networking/payload",children:(0,i.jsx)(n.code,{children:"PayloadRegistrar"})})," before attempting this.\nOnce you've created your custom network message, you can send it to all users that have the ",(0,i.jsx)(n.code,{children:"BlockEntity"})," loaded with ",(0,i.jsx)(n.code,{children:"SimpleChannel#send(PacketDistributor$PacketTarget, MSG)"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["It is important that you do safety checks, the ",(0,i.jsx)(n.code,{children:"BlockEntity"})," might already be destroyed/replaced when the message arrives at the player! You should also check if the chunk is loaded (",(0,i.jsx)(n.code,{children:"Level#hasChunkAt(BlockPos)"}),")."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(7294);const o={},c=i.createContext(o);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);