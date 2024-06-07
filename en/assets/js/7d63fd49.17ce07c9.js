"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[5271],{9521:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=i(5893),t=i(1151);const o={},l="Blocks",r={id:"blocks/index",title:"Blocks",description:"Blocks are essential to the Minecraft world. They make up all the terrain, structures, and machines. Chances are if you are interested in making a mod, then you will want to add some blocks. This page will guide you through the creation of blocks, and some of the things you can do with them.",source:"@site/versioned_docs/version-1.20.4/blocks/index.md",sourceDirName:"blocks",slug:"/blocks/",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/blocks/",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"BlockEntityRenderer",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/blockentities/ber"},next:{title:"Blockstates",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/blocks/states"}},c={},a=[{value:"One Block to Rule Them All",id:"one-block-to-rule-them-all",level:2},{value:"Creating Blocks",id:"creating-blocks",level:2},{value:"Basic Blocks",id:"basic-blocks",level:3},{value:"More Functionality",id:"more-functionality",level:3},{value:"<code>DeferredRegister.Blocks</code> helpers",id:"deferredregisterblocks-helpers",level:3},{value:"Resources",id:"resources",level:3},{value:"Using Blocks",id:"using-blocks",level:2},{value:"Placing a Block",id:"placing-a-block",level:3},{value:"Breaking a Block",id:"breaking-a-block",level:3},{value:"The &quot;Initiating&quot; Stage",id:"the-initiating-stage",level:4},{value:"The &quot;Mining&quot; Stage",id:"the-mining-stage",level:4},{value:"The &quot;Actually Breaking&quot; Stage",id:"the-actually-breaking-stage",level:4},{value:"Ticking",id:"ticking",level:3},{value:"Server Ticking and Tick Scheduling",id:"server-ticking-and-tick-scheduling",level:4},{value:"Client Ticking",id:"client-ticking",level:4},{value:"Weather Ticking",id:"weather-ticking",level:4},{value:"Random Ticking",id:"random-ticking",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"blocks",children:"Blocks"}),"\n",(0,s.jsx)(n.p,{children:"Blocks are essential to the Minecraft world. They make up all the terrain, structures, and machines. Chances are if you are interested in making a mod, then you will want to add some blocks. This page will guide you through the creation of blocks, and some of the things you can do with them."}),"\n",(0,s.jsx)(n.h2,{id:"one-block-to-rule-them-all",children:"One Block to Rule Them All"}),"\n",(0,s.jsx)(n.p,{children:"Before we get started, it is important to understand that there is only ever one of each block in the game. A world consists of thousands of references to that one block in different locations. In other words, the same block is just displayed a lot of times."}),"\n",(0,s.jsxs)(n.p,{children:["Due to this, a block should only ever be instantiated once, and that is during ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/concepts/registries#methods-for-registering",children:"registration"}),". Once the block is registered, you can then use the registered reference as needed."]}),"\n",(0,s.jsxs)(n.p,{children:["Unlike most other registries, blocks can use a specialized version of ",(0,s.jsx)(n.code,{children:"DeferredRegister"}),", called ",(0,s.jsx)(n.code,{children:"DeferredRegister.Blocks"}),". ",(0,s.jsx)(n.code,{children:"DeferredRegister.Blocks"})," acts basically like a ",(0,s.jsx)(n.code,{children:"DeferredRegister<Block>"}),", but with some minor differences:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["They are created via ",(0,s.jsx)(n.code,{children:'DeferredRegister.createBlocks("yourmodid")'})," instead of the regular ",(0,s.jsx)(n.code,{children:"DeferredRegister.create(...)"})," method."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#register"})," returns a ",(0,s.jsx)(n.code,{children:"DeferredBlock<T extends Block>"}),", which extends ",(0,s.jsx)(n.code,{children:"DeferredHolder<Block, T>"}),". ",(0,s.jsx)(n.code,{children:"T"})," is the type of the class of the block we are registering."]}),"\n",(0,s.jsxs)(n.li,{children:["There are a few helper methods for registering block. See ",(0,s.jsx)(n.a,{href:"#deferredregisterblocks-helpers",children:"below"})," for more details."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So now, let's register our blocks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'//BLOCKS is a DeferredRegister.Blocks\npublic static final DeferredBlock<Block> MY_BLOCK = BLOCKS.register("my_block", () -> new Block(...));\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After registering the block, all references to the new ",(0,s.jsx)(n.code,{children:"my_block"})," should use this constant. For example, if you want to check if the block at a given position is ",(0,s.jsx)(n.code,{children:"my_block"}),", the code for that would look something like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"level.getBlockState(position) // returns the blockstate placed in the given level (world) at the given position\n        //highlight-next-line\n        .is(MyBlockRegistrationClass.MY_BLOCK.get());\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This approach also has the convenient effect that ",(0,s.jsx)(n.code,{children:"block1 == block2"})," works and can be used instead of Java's ",(0,s.jsx)(n.code,{children:"equals"})," method (using ",(0,s.jsx)(n.code,{children:"equals"})," still works, of course, but is pointless since it compares by reference anyway)."]}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsxs)(n.p,{children:["Do not call ",(0,s.jsx)(n.code,{children:"new Block()"})," outside registration! As soon as you do that, things can and will break:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Blocks must be created while registries are unfrozen. NeoForge unfreezes registries for you and freezes them later, so registration is your time window to create blocks."}),"\n",(0,s.jsxs)(n.li,{children:["If you try to create and/or register a block when registries are frozen again, the game will crash and report a ",(0,s.jsx)(n.code,{children:"null"})," block, which can be very confusing."]}),"\n",(0,s.jsx)(n.li,{children:"If you still manage to have a dangling block instance, the game will not recognize it while syncing and saving, and replace it with air."}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"creating-blocks",children:"Creating Blocks"}),"\n",(0,s.jsxs)(n.p,{children:["As discussed before, we start by creating our ",(0,s.jsx)(n.code,{children:"DeferredRegister.Blocks"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks("yourmodid");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"basic-blocks",children:"Basic Blocks"}),"\n",(0,s.jsxs)(n.p,{children:["For simple blocks which need no special functionality (think cobblestone, wooden planks, etc.), the ",(0,s.jsx)(n.code,{children:"Block"})," class can be used directly. To do so, during registration, instantiate ",(0,s.jsx)(n.code,{children:"Block"})," with a ",(0,s.jsx)(n.code,{children:"BlockBehaviour.Properties"})," parameter. This ",(0,s.jsx)(n.code,{children:"BlockBehaviour.Properties"})," parameter can be created using ",(0,s.jsx)(n.code,{children:"BlockBehaviour.Properties#of"}),", and it can be customized by calling its methods. The most important methods for this are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"destroyTime"})," - Determines the time the block needs to be destroyed.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stone has a destroy time of 1.5, dirt has 0.5, obsidian has 50, and bedrock has -1 (unbreakable)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"explosionResistance"})," - Determines the explosion resistance of the block.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stone has an explosion resistance of 6.0, dirt has 0.5, obsidian has 1,200, and bedrock has 3,600,000."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sound"})," - Sets the sound the block makes when it is punched, broken, or placed.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The default value is ",(0,s.jsx)(n.code,{children:"SoundType.STONE"}),". See the ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/client/sounds",children:"Sounds page"})," for more details."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lightLevel"})," - Sets the light emission of the block. Accepts a function with a ",(0,s.jsx)(n.code,{children:"BlockState"})," parameter that returns a value between 0 and 15.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example, glowstone uses ",(0,s.jsx)(n.code,{children:"state -> 15"}),", and torches use ",(0,s.jsx)(n.code,{children:"state -> 14"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"friction"})," - Sets the friction (slipperiness) of the block.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Default value is 0.6. Ice uses 0.98."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So for example, a simple implementation would look something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'//BLOCKS is a DeferredRegister.Blocks\npublic static final DeferredBlock<Block> MY_BETTER_BLOCK = BLOCKS.register(\n        "my_better_block", \n        () -> new Block(BlockBehaviour.Properties.of()\n                //highlight-start\n                .destroyTime(2.0f)\n                .explosionResistance(10.0f)\n                .sound(SoundType.GRAVEL)\n                .lightLevel(state -> 7)\n                //highlight-end\n        ));\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For further documentation, see the source code of ",(0,s.jsx)(n.code,{children:"BlockBehaviour.Properties"}),". For more examples, or to look at the values used by Minecraft, have a look at the ",(0,s.jsx)(n.code,{children:"Blocks"})," class."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["It is important to understand that a block in the world is not the same thing as in an inventory. What looks like a block in an inventory is actually a ",(0,s.jsx)(n.code,{children:"BlockItem"}),", a special type of ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/items/",children:"item"})," that places a block when used. This also means that things like the creative tab or the max stack size are handled by the corresponding ",(0,s.jsx)(n.code,{children:"BlockItem"}),"."]}),(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"BlockItem"})," must be registered separately from the block. This is because a block does not necessarily need an item, for example if it is not meant to be collected (as is the case with fire, for example)."]})]}),"\n",(0,s.jsx)(n.h3,{id:"more-functionality",children:"More Functionality"}),"\n",(0,s.jsxs)(n.p,{children:["Directly using ",(0,s.jsx)(n.code,{children:"Block"})," only allows for very basic blocks. If you want to add functionality, like player interaction or a different hitbox, a custom class that extends ",(0,s.jsx)(n.code,{children:"Block"})," is required. The ",(0,s.jsx)(n.code,{children:"Block"})," class has many methods that can be overridden to do different things; see the classes ",(0,s.jsx)(n.code,{children:"Block"}),", ",(0,s.jsx)(n.code,{children:"BlockBehaviour"})," and ",(0,s.jsx)(n.code,{children:"IBlockExtension"})," for more information. See also the ",(0,s.jsx)(n.a,{href:"#using-blocks",children:"Using blocks"})," section below for some of the most common use cases for blocks."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to make a block that has different variants (think a slab that has a bottom, top, and double variant), you should use ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/blocks/states",children:"blockstates"}),". And finally, if you want a block that stores additional data (think a chest that stores its inventory), a ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/blockentities/",children:"block entity"})," should be used. The rule of thumb here is that if you have a finite and reasonably small amount of states (= a few hundred states at most), use blockstates, and if you have an infinite or near-infinite amount of states, use a block entity."]}),"\n",(0,s.jsxs)(n.h3,{id:"deferredregisterblocks-helpers",children:[(0,s.jsx)(n.code,{children:"DeferredRegister.Blocks"})," helpers"]}),"\n",(0,s.jsxs)(n.p,{children:["We already discussed how to create a ",(0,s.jsx)(n.code,{children:"DeferredRegister.Blocks"})," ",(0,s.jsx)(n.a,{href:"#one-block-to-rule-them-all",children:"above"}),", as well as that it returns ",(0,s.jsx)(n.code,{children:"DeferredBlock"}),"s. Now, let's have a look at what other utilities the specialized ",(0,s.jsx)(n.code,{children:"DeferredRegister"})," has to offer. Let's start with ",(0,s.jsx)(n.code,{children:"#registerBlock"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks("yourmodid");\n\npublic static final DeferredBlock<Block> EXAMPLE_BLOCK = BLOCKS.registerBlock(\n        "example_block",\n        Block::new, // The factory that the properties will be passed into.\n        BlockBehaviour.Properties.of() // The properties to use.\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Internally, this will simply call ",(0,s.jsx)(n.code,{children:'BLOCKS.register("example_block", () -> new Block(BlockBehaviour.Properties.of()))'})," by applying the properties parameter to the provided block factory (which is commonly the constructor)."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use ",(0,s.jsx)(n.code,{children:"Block::new"}),", you can leave out the factory entirely:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'public static final DeferredBlock<Block> EXAMPLE_BLOCK = BLOCKS.registerSimpleBlock(\n        "example_block",\n        BlockBehaviour.Properties.of() // The properties to use.\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This does the exact same as the previous example, but is slightly shorter. Of course, if you want to use a subclass of ",(0,s.jsx)(n.code,{children:"Block"})," and not ",(0,s.jsx)(n.code,{children:"Block"})," itself, you will have to use the previous method instead."]}),"\n",(0,s.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.p,{children:["If you register your block and place it in the world, you will find it to be missing things like a texture. This is because ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/client/textures",children:"textures"}),", among others, are handled by Minecraft's resource system. To apply the texture to the block, you must provide a ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/client/models/",children:"model"})," and a ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/resources/client/models/#blockstate-files",children:"blockstate file"})," that associates the block with the texture and a shape. Give the linked articles a read for more information."]}),"\n",(0,s.jsx)(n.h2,{id:"using-blocks",children:"Using Blocks"}),"\n",(0,s.jsxs)(n.p,{children:["Blocks are very rarely directly used to do things. In fact, probably two of the most common operations in all of Minecraft - getting the block at a position, and setting a block at a position - use blockstates, not blocks. The general design approach is to have the block define behavior, but have the behavior actually run through blockstates. Due to this, ",(0,s.jsx)(n.code,{children:"BlockState"}),"s are often passed to methods of ",(0,s.jsx)(n.code,{children:"Block"})," as a parameter. For more information on how blockstates are used, and on how to get one from a block, see ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/blocks/states#using-blockstates",children:"Using Blockstates"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In several situations, multiple methods of ",(0,s.jsx)(n.code,{children:"Block"})," are used at different times. The following subsections list the most common block-related pipelines. Unless specified otherwise, all methods are called on both logical sides and should return the same result on both sides."]}),"\n",(0,s.jsx)(n.h3,{id:"placing-a-block",children:"Placing a Block"}),"\n",(0,s.jsxs)(n.p,{children:["Block placement logic is called from ",(0,s.jsx)(n.code,{children:"BlockItem#useOn"})," (or some subclass's implementation thereof, such as in ",(0,s.jsx)(n.code,{children:"PlaceOnWaterBlockItem"}),", which is used for lily pads). For more information on how the game gets there, see the ",(0,s.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/items/interactionpipeline",children:"Interaction Pipeline"}),". In practice, this means that as soon as a ",(0,s.jsx)(n.code,{children:"BlockItem"})," is right-clicked (for example a cobblestone item), this behavior is called."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Several prerequisites are checked, for example that you are not in spectator mode, that all required feature flags for the block are enabled or that the target position is not outside the world border. If at least one of these checks fails, the pipeline ends."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#canBeReplaced"})," is called for the block currently at the position where the block is attempted to be placed. If it returns ",(0,s.jsx)(n.code,{children:"false"}),", the pipeline ends. Prominent cases that return ",(0,s.jsx)(n.code,{children:"true"})," here are tall grass or snow layers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#getStateForPlacement"})," is called. This is where, depending on the context (which includes information like the position, the rotation and the side the block is placed on), different block states can be returned. This is useful for example for blocks that can be placed in different directions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#canSurvive"})," is called with the blockstate obtained in the previous step. If it returns ",(0,s.jsx)(n.code,{children:"false"}),", the pipeline ends."]}),"\n",(0,s.jsxs)(n.li,{children:["The blockstate is set into the level via a ",(0,s.jsx)(n.code,{children:"Level#setBlock"})," call.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In that ",(0,s.jsx)(n.code,{children:"Level#setBlock"})," call, ",(0,s.jsx)(n.code,{children:"Block#onPlace"})," is called."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#setPlacedBy"})," is called."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"breaking-a-block",children:"Breaking a Block"}),"\n",(0,s.jsx)(n.p,{children:'Breaking a block is a bit more complex, as it requires time. The process can be roughly divided into three stages: "initiating", "mining" and "actually breaking".'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'When the left mouse button is clicked, the "initiating" stage is entered.'}),"\n",(0,s.jsxs)(n.li,{children:['Now, the left mouse button needs to be held down, entering the "mining" stage. ',(0,s.jsx)(n.strong,{children:"This stage's methods are called every tick."})]}),"\n",(0,s.jsx)(n.li,{children:'If the "continuing" stage is not interrupted (by releasing the left mouse button) and the block is broken, the "actually breaking" stage is entered.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Or for those who prefer pseudocode:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"leftClick();\ninitiatingStage();\nwhile (leftClickIsBeingHeld()) {\n    miningStage();\n    if (blockIsBroken()) {\n        actuallyBreakingStage();\n        break;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following subsections further break down these stages into actual method calls."}),"\n",(0,s.jsx)(n.h4,{id:"the-initiating-stage",children:'The "Initiating" Stage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Client-only: ",(0,s.jsx)(n.code,{children:"InputEvent.InteractionKeyMappingTriggered"})," is fired with the left mouse button and the main hand. If the event is canceled, the pipeline ends."]}),"\n",(0,s.jsxs)(n.li,{children:["Several prerequisites are checked, for example that you are not in spectator mode, that all required feature flags for the ",(0,s.jsx)(n.code,{children:"ItemStack"})," in your main hand are enabled or that the block in question is not outside the world border. If at least one of these checks fails, the pipeline ends."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PlayerInteractEvent.LeftClickBlock"})," is fired. If the event is canceled, the pipeline ends.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Note that when the event is canceled on the client, no packets are sent to the server and thus no logic runs on the server."}),"\n",(0,s.jsx)(n.li,{children:"However, canceling this event on the server will still cause client code to run, which can lead to desyncs!"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#attack"})," is called."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-mining-stage",children:'The "Mining" Stage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PlayerInteractEvent.LeftClickBlock"}),' is fired. If the event is canceled, the pipeline moves to the "finishing" stage.',"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Note that when the event is canceled on the client, no packets are sent to the server and thus no logic runs on the server."}),"\n",(0,s.jsx)(n.li,{children:"However, canceling this event on the server will still cause client code to run, which can lead to desyncs!"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#getDestroyProgress"})," is called and added to the internal destroy progress counter.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#getDestroyProgress"})," returns a float value between 0 and 1, representing how much the destroy progress counter should be increased every tick."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"The progress overlay (cracking texture) is updated accordingly."}),"\n",(0,s.jsx)(n.li,{children:'If the destroy progress is greater than 1.0 (i.e. completed, i.e. the block should be broken), the "mining" stage is exited and the "actually breaking" stage is entered.'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"the-actually-breaking-stage",children:'The "Actually Breaking" Stage'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Item#onBlockStartBreak"})," is called. If it returns ",(0,s.jsx)(n.code,{children:"true"}),' (determining that the block should not be broken), the pipeline moves to the "finishing" stage.']}),"\n",(0,s.jsxs)(n.li,{children:["Server-only: ",(0,s.jsx)(n.code,{children:"IBlockExtension#canHarvestBlock"})," is called. This determines whether the block can be harvested, i.e. broken with drops."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#onDestroyedByPlayer"})," is called. If it returns ",(0,s.jsx)(n.code,{children:"false"}),', the pipeline moves to the "finishing" stage. In that ',(0,s.jsx)(n.code,{children:"Block#onDestroyedByPlayer"})," call:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#playerWillDestroy"})," is called."]}),"\n",(0,s.jsxs)(n.li,{children:["The blockstate is removed from the level via a ",(0,s.jsx)(n.code,{children:"Level#setBlock"})," call with ",(0,s.jsx)(n.code,{children:"Blocks.AIR.defaultBlockState()"})," as the blockstate parameter.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In that ",(0,s.jsx)(n.code,{children:"Level#setBlock"})," call, ",(0,s.jsx)(n.code,{children:"Block#onRemove"})," is called."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Block#destroy"})," is called."]}),"\n",(0,s.jsxs)(n.li,{children:["Server-only: If the previous call to ",(0,s.jsx)(n.code,{children:"IBlockExtension#canHarvestBlock"})," returned ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"Block#playerDestroy"})," is called."]}),"\n",(0,s.jsxs)(n.li,{children:["Server-only: ",(0,s.jsx)(n.code,{children:"IBlockExtension#getExpDrop"})," is called."]}),"\n",(0,s.jsxs)(n.li,{children:["Server-only: ",(0,s.jsx)(n.code,{children:"Block#popExperience"})," is called with the result of the previous ",(0,s.jsx)(n.code,{children:"IBlockExtension#getExpDrop"})," call, if that call returned a value greater than 0."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"ticking",children:"Ticking"}),"\n",(0,s.jsx)(n.p,{children:'Ticking is a mechanism that updates (ticks) parts of the game every 1 / 20 seconds, or 50 milliseconds ("one tick"). Blocks provide different ticking methods that are called in different ways.'}),"\n",(0,s.jsx)(n.h4,{id:"server-ticking-and-tick-scheduling",children:"Server Ticking and Tick Scheduling"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Block#tick"})," is called in two occasions: either through default ",(0,s.jsx)(n.a,{href:"#random-ticking",children:"random ticking"})," (see below), or through scheduled ticks. Scheduled ticks can be created through ",(0,s.jsx)(n.code,{children:"Level#scheduleTick(BlockPos, Block, int)"}),", where the ",(0,s.jsx)(n.code,{children:"int"})," denotes a delay. This is used in various places by vanilla, for example, the tilting mechanism of big dripleaves heavily relies on this system. Other prominent users are various redstone components."]}),"\n",(0,s.jsx)(n.h4,{id:"client-ticking",children:"Client Ticking"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Block#animateTick"})," is called exclusively on the client, every frame. This is where client-only behavior, for example the torch particle spawning, happens."]}),"\n",(0,s.jsx)(n.h4,{id:"weather-ticking",children:"Weather Ticking"}),"\n",(0,s.jsxs)(n.p,{children:["Weather ticking is handled by ",(0,s.jsx)(n.code,{children:"Block#handlePrecipitation"})," and runs independent of regular ticking. It is called only on the server, only when it is raining in some form, with a 1 in 16 chance. This is used for example by cauldrons that fill during rain or snowfall."]}),"\n",(0,s.jsx)(n.h4,{id:"random-ticking",children:"Random Ticking"}),"\n",(0,s.jsxs)(n.p,{children:["The random tick system runs independent of regular ticking. Random ticks must be enabled through the ",(0,s.jsx)(n.code,{children:"BlockBehaviour.Properties"})," of the block by calling the ",(0,s.jsx)(n.code,{children:"BlockBehaviour.Properties#randomTicks()"})," method. This enables the block to be part of the random ticking mechanic."]}),"\n",(0,s.jsxs)(n.p,{children:["Random ticks occur every tick for a set amount of blocks in a chunk. That set amount is defined through the ",(0,s.jsx)(n.code,{children:"randomTickSpeed"})," gamerule. With its default value of 3, every tick, 3 random blocks from the chunk are chosen. If these blocks have random ticking enabled, then their respective ",(0,s.jsx)(n.code,{children:"Block#randomTick"})," methods are called."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Block#randomTick"})," by default calls ",(0,s.jsx)(n.code,{children:"Block#tick"}),", which is what should normally be overridden. ",(0,s.jsx)(n.code,{children:"Block#randomTick"})," should only be overridden if you specifically want different behavior for random ticking and regular (scheduled) ticking."]}),"\n",(0,s.jsx)(n.p,{children:"Random ticking is used by a wide range of mechanics in Minecraft, such as plant growth, ice and snow melting, or copper oxidizing."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var s=i(7294);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);