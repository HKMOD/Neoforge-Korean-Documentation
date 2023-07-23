"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(c,".").concat(m)]||d[m]||k[m]||o;return n?i.createElement(u,r(r({ref:t},p),{},{components:n})):i.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={},r="Block Entities",l={unversionedId:"blockentities/index",id:"blockentities/index",title:"Block Entities",description:"BlockEntities are like simplified Entities that are bound to a Block.",source:"@site/docs/blockentities/index.md",sourceDirName:"blockentities",slug:"/blockentities/",permalink:"/Neoforge-Korean-Documentation/docs/blockentities/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\uc811\uadfc \ubcc0\ud658\uc790",permalink:"/Neoforge-Korean-Documentation/docs/advanced/accesstransformers"},next:{title:"BlockEntityRenderer",permalink:"/Neoforge-Korean-Documentation/docs/blockentities/ber"}},c={},s=[{value:"Registering",id:"registering",level:2},{value:"Creating a <code>BlockEntity</code>",id:"creating-a-blockentity",level:2},{value:"Storing Data within your <code>BlockEntity</code>",id:"storing-data-within-your-blockentity",level:2},{value:"Ticking <code>BlockEntities</code>",id:"ticking-blockentities",level:2},{value:"Synchronizing the Data to the Client",id:"synchronizing-the-data-to-the-client",level:2},{value:"Synchronizing on LevelChunk Load",id:"synchronizing-on-levelchunk-load",level:3},{value:"Synchronizing on Block Update",id:"synchronizing-on-block-update",level:3},{value:"Synchronizing Using a Custom Network Message",id:"synchronizing-using-a-custom-network-message",level:3}],p={toc:s},d="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"block-entities"},"Block Entities"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntities")," are like simplified ",(0,a.kt)("inlineCode",{parentName:"p"},"Entities")," that are bound to a Block.\nThey are used to store dynamic data, execute tick based tasks, and dynamic rendering.\nSome examples from vanilla Minecraft would be handling of inventories on chests, smelting logic on furnaces, or area effects on beacons.\nMore advanced examples exist in mods, such as quarries, sorting machines, pipes, and displays."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntities")," aren't a solution for everything and they can cause lag when used wrongly.\nWhen possible, try to avoid them.")),(0,a.kt)("h2",{id:"registering"},"Registering"),(0,a.kt)("p",null,"Block Entities are created and removed dynamically and as such are not registry objects on their own."),(0,a.kt)("p",null,"In order to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity"),", you need to extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity")," class. As such, another object is registered instead to easily create and refer to the ",(0,a.kt)("em",{parentName:"p"},"type")," of the dynamic object. For a ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity"),", these are known as ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityType"),"s."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityType")," can be ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/concepts/registries#methods-for-registering"},"registered")," like any other registry object. To construct a ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityType"),", its builder form can be used via ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityType$Builder#of"),". This takes in two arguments: a ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityType$BlockEntitySupplier")," which takes in a ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockPos")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockState")," to create a new instance of the associated ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity"),", and a varargs of ",(0,a.kt)("inlineCode",{parentName:"p"},"Block"),"s which this ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity")," can be attached to. Building the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityType")," is done by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityType$Builder#build"),". This takes in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Type")," which represents the type-safe reference used to refer to this registry object in a ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFixer"),". Since ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFixer"),"s are an optional system to use for mods, this can be passed as ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// For some DeferredRegister<BlockEntityType<?>> REGISTER\npublic static final RegistryObject<BlockEntityType<MyBE>> MY_BE = REGISTER.register("mybe", () -> BlockEntityType.Builder.of(MyBE::new, validBlocks).build(null));\n\n// In MyBE, a BlockEntity subclass\npublic MyBE(BlockPos pos, BlockState state) {\n  super(MY_BE.get(), pos, state);\n}\n')),(0,a.kt)("h2",{id:"creating-a-blockentity"},"Creating a ",(0,a.kt)("inlineCode",{parentName:"h2"},"BlockEntity")),(0,a.kt)("p",null,"To create a ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity")," and attach it to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Block"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityBlock")," interface must be implemented on your ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," subclass. The method ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityBlock#newBlockEntity(BlockPos, BlockState)")," must be implemented and return a new instance of your ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity"),"."),(0,a.kt)("h2",{id:"storing-data-within-your-blockentity"},"Storing Data within your ",(0,a.kt)("inlineCode",{parentName:"h2"},"BlockEntity")),(0,a.kt)("p",null,"In order to save data, override the following two methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"BlockEntity#saveAdditional(CompoundTag tag)\n\nBlockEntity#load(CompoundTag tag)\n")),(0,a.kt)("p",null,"These methods are called whenever the ",(0,a.kt)("inlineCode",{parentName:"p"},"LevelChunk")," containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity")," gets loaded from/saved to a tag.\nUse them to read and write to the fields in your block entity class."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Whenever your data changes, you need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity#setChanged"),"; otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"LevelChunk")," containing your ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity")," might be skipped while the level is saved.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"It is important that you call the ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," methods!"),(0,a.kt)("p",{parentName:"admonition"},"The tag names ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"z"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ForgeData")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ForgeCaps")," are reserved by the ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," methods.")),(0,a.kt)("h2",{id:"ticking-blockentities"},"Ticking ",(0,a.kt)("inlineCode",{parentName:"h2"},"BlockEntities")),(0,a.kt)("p",null,"If you need a ticking ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity"),", for example to keep track of the progress during a smelting process, another method must be implemented and overridden within ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityBlock#getTicker(Level, BlockState, BlockEntityType)"),". This can implement different tickers depending on which logical side the user is on, or just implement one general ticker. In either case, a ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntityTicker")," must be returned. Since this is a functional interface, it can just take in a method representing the ticker instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Inside some Block subclass\n@Nullable\n@Override\npublic <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) {\n  return type == MyBlockEntityTypes.MYBE.get() ? MyBlockEntity::tick : null;\n}\n\n// Inside MyBlockEntity\npublic static void tick(Level level, BlockPos pos, BlockState state, MyBlockEntity blockEntity) {\n  // Do stuff\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This method is called each tick; therefore, you should avoid having complicated calculations in here. If possible, you should make more complex calculations every X ticks. (The amount of ticks in a second may be lower then 20 (twenty) but won't be higher)")),(0,a.kt)("h2",{id:"synchronizing-the-data-to-the-client"},"Synchronizing the Data to the Client"),(0,a.kt)("p",null,"There are three ways of syncing data to the client: synchronizing on chunk load, on block updates, and with a custom network message."),(0,a.kt)("h3",{id:"synchronizing-on-levelchunk-load"},"Synchronizing on LevelChunk Load"),(0,a.kt)("p",null,"For this you need to override"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"BlockEntity#getUpdateTag()\n\nIForgeBlockEntity#handleUpdateTag(CompoundTag tag)\n")),(0,a.kt)("p",null,"Again, this is pretty simple, the first method collects the data that should be sent to the client,\nwhile the second one processes that data. If your ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity")," doesn't contain much data, you might be able to use the methods out of the ",(0,a.kt)("a",{parentName:"p",href:"#storing-data-within-your-blockentity"},"Storing Data within your ",(0,a.kt)("inlineCode",{parentName:"a"},"BlockEntity"))," section."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Synchronizing excessive/useless data for block entities can lead to network congestion. You should optimize your network usage by sending only the information the client needs when the client needs it. For instance, it is more often than not unnecessary to send the inventory of a block entity in the update tag, as this can be synchronized via its ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/gui/menus"},(0,a.kt)("inlineCode",{parentName:"a"},"AbstractContainerMenu")),".")),(0,a.kt)("h3",{id:"synchronizing-on-block-update"},"Synchronizing on Block Update"),(0,a.kt)("p",null,"This method is a bit more complicated, but again you just need to override two or three methods.\nHere is a tiny example implementation of it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic CompoundTag getUpdateTag() {\n  CompoundTag tag = new CompoundTag();\n  //Write your data into the tag\n  return tag;\n}\n\n@Override\npublic Packet<ClientGamePacketListener> getUpdatePacket() {\n  // Will get tag from #getUpdateTag\n  return ClientboundBlockEntityDataPacket.create(this);\n}\n\n// Can override IForgeBlockEntity#onDataPacket. By default, this will defer to the #load.\n")),(0,a.kt)("p",null,"The static constructors ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientboundBlockEntityDataPacket#create")," takes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockEntity"),"."),(0,a.kt)("li",{parentName:"ul"},"An optional function to get the ",(0,a.kt)("inlineCode",{parentName:"li"},"CompoundTag")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockEntity"),". By default, this uses ",(0,a.kt)("inlineCode",{parentName:"li"},"BlockEntity#getUpdateTag"),".")),(0,a.kt)("p",null,"Now, to send the packet, an update notification must be given on the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Level#sendBlockUpdated(BlockPos pos, BlockState oldState, BlockState newState, int flags)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pos")," should be your ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity"),"'s position.\nFor ",(0,a.kt)("inlineCode",{parentName:"p"},"oldState")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"newState"),", you can pass the current ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockState")," at that position.\n",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," is a bitmask that should contain ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),", which will sync the changes to the client. See ",(0,a.kt)("inlineCode",{parentName:"p"},"Block")," for more info as well as the rest of the flags. The flag ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," is equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"Block#UPDATE_CLIENTS"),"."),(0,a.kt)("h3",{id:"synchronizing-using-a-custom-network-message"},"Synchronizing Using a Custom Network Message"),(0,a.kt)("p",null,"This way of synchronizing is probably the most complicated but is usually the most optimized,\nas you can make sure that only the data you need to be synchronized is actually synchronized.\nYou should first check out the ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/networking/"},(0,a.kt)("inlineCode",{parentName:"a"},"Networking"))," section and especially ",(0,a.kt)("a",{parentName:"p",href:"/Neoforge-Korean-Documentation/docs/networking/simpleimpl"},(0,a.kt)("inlineCode",{parentName:"a"},"SimpleImpl"))," before attempting this.\nOnce you've created your custom network message, you can send it to all users that have the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity")," loaded with ",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleChannel#send(PacketDistributor$PacketTarget, MSG)"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It is important that you do safety checks, the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockEntity")," might already be destroyed/replaced when the message arrives at the player! You should also check if the chunk is loaded (",(0,a.kt)("inlineCode",{parentName:"p"},"Level#hasChunkAt(BlockPos)"),").")))}k.isMDXComponent=!0}}]);