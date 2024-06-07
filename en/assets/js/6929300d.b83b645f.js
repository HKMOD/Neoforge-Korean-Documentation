"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[1999],{5059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(5893),i=a(1151);const s={},r="Data Attachments",c={id:"datastorage/attachments",title:"Data Attachments",description:"The data attachment system allows mods to attach and store additional data on block entities, chunks, entities, and item stacks.",source:"@site/versioned_docs/version-1.20.4/datastorage/attachments.md",sourceDirName:"datastorage",slug:"/datastorage/attachments",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/datastorage/attachments",draft:!1,unlisted:!1,tags:[],version:"1.20.4",frontMatter:{},sidebar:"mainSidebar",previous:{title:"JSON Structure",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/datamaps/structure"},next:{title:"Capabilities",permalink:"/Neoforge-Korean-Documentation/en/docs/1.20.4/datastorage/capabilities"}},o={},d=[{value:"Creating an attachment type",id:"creating-an-attachment-type",level:2},{value:"Using the attachment type",id:"using-the-attachment-type",level:2},{value:"Sharing data with the client",id:"sharing-data-with-the-client",level:2},{value:"Copying data on player death",id:"copying-data-on-player-death",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"data-attachments",children:"Data Attachments"}),"\n",(0,n.jsx)(t.p,{children:"The data attachment system allows mods to attach and store additional data on block entities, chunks, entities, and item stacks."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["To store additional level data, you can use ",(0,n.jsx)(t.a,{href:"saveddata",children:"SavedData"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"creating-an-attachment-type",children:"Creating an attachment type"}),"\n",(0,n.jsxs)(t.p,{children:["To use the system, you need to register an ",(0,n.jsx)(t.code,{children:"AttachmentType"}),".\nThe attachment type contains the following configuration:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A default value supplier to create the instance when the data is first accessed. Also used to compare stacks that have the data with stacks that don't have it."}),"\n",(0,n.jsx)(t.li,{children:"An optional serializer if the attachment should be persisted."}),"\n",(0,n.jsxs)(t.li,{children:["(If a serializer was configured) The ",(0,n.jsx)(t.code,{children:"copyOnDeath"})," flag to automatically copy entity data on death (see below)."]}),"\n",(0,n.jsxs)(t.li,{children:["(Advanced) (If a serializer was configured) A custom ",(0,n.jsx)(t.code,{children:"comparator"})," to use when checking if the data is the same for two item stacks."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"If you don't want your attachment to persist, do not provide a serializer."})}),"\n",(0,n.jsxs)(t.p,{children:["There are a few ways to provide an attachment serializer: directly implementing ",(0,n.jsx)(t.code,{children:"IAttachmentSerializer"}),", implementing ",(0,n.jsx)(t.code,{children:"INBTSerializable"})," and using the static ",(0,n.jsx)(t.code,{children:"AttachmentSerializer.serializable()"})," method to create the builder, or providing a codec to the builder."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Avoid serialization with codecs for item stack attachments, as it is comparatively slow."})}),"\n",(0,n.jsxs)(t.p,{children:["In any case, the attachment ",(0,n.jsx)(t.strong,{children:"must be registered"})," to the ",(0,n.jsx)(t.code,{children:"NeoForgeRegistries.ATTACHMENT_TYPES"})," registry. Here is an example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// Create the DeferredRegister for attachment types\nprivate static final DeferredRegister<AttachmentType<?>> ATTACHMENT_TYPES = DeferredRegister.create(NeoForgeRegistries.ATTACHMENT_TYPES, MOD_ID);\n\n// Serialization via INBTSerializable\nprivate static final Supplier<AttachmentType<ItemStackHandler>> HANDLER = ATTACHMENT_TYPES.register(\n        "handler", () -> AttachmentType.serializable(() -> new ItemStackHandler(1)).build());\n// Serialization via codec\nprivate static final Supplier<AttachmentType<Integer>> MANA = ATTACHMENT_TYPES.register(\n        "mana", () -> AttachmentType.builder(() -> 0).serialize(Codec.INT).build());\n// No serialization\nprivate static final Supplier<AttachmentType<SomeCache>> SOME_CACHE = ATTACHMENT_TYPES.register(\n        "some_cache", () -> AttachmentType.builder(() -> new SomeCache()).build()\n);\n\n// In your mod constructor, don\'t forget to register the DeferredRegister to your mod bus:\nATTACHMENT_TYPES.register(modBus);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"using-the-attachment-type",children:"Using the attachment type"}),"\n",(0,n.jsxs)(t.p,{children:["Once the attachment type is registered, it can be used on any holder object.\nCalling ",(0,n.jsx)(t.code,{children:"getData"})," if no data is present will attach a new default instance."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"// Get the ItemStackHandler if it already exists, else attach a new one:\nItemStackHandler stackHandler = stack.getData(HANDLER);\n// Get the current player mana if it is available, else attach 0:\nint playerMana = player.getData(MANA);\n// And so on...\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If attaching a default instance is not desired, a ",(0,n.jsx)(t.code,{children:"hasData"})," check can be added:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"// Check if the stack has the HANDLER attachment before doing anything.\nif (stack.hasData(HANDLER)) {\n    ItemStackHandler stackHandler = stack.getData(HANDLER);\n    // Do something with stack.getData(HANDLER).\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The data can also be updated with ",(0,n.jsx)(t.code,{children:"setData"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"// Increment mana by 10.\nplayer.setData(MANA, player.getData(MANA) + 10);\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"important",children:[(0,n.jsxs)(t.p,{children:["Usually, block entities and chunks need to be marked as dirty when they are modified (with ",(0,n.jsx)(t.code,{children:"setChanged"})," and ",(0,n.jsx)(t.code,{children:"setUnsaved(true)"}),"). This is done automatically for calls to ",(0,n.jsx)(t.code,{children:"setData"}),":"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"chunk.setData(MANA, chunk.getData(MANA) + 10); // will call setUnsaved automatically\n"})}),(0,n.jsxs)(t.p,{children:["but if you modify some data that you obtained from ",(0,n.jsx)(t.code,{children:"getData"})," (including a newly created default instance) then you must mark block entities and chunks as dirty explicitly:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"var mana = chunk.getData(MUTABLE_MANA);\nmana.set(10);\nchunk.setUnsaved(true); // must be done manually because we did not use setData\n"})})]}),"\n",(0,n.jsx)(t.h2,{id:"sharing-data-with-the-client",children:"Sharing data with the client"}),"\n",(0,n.jsx)(t.p,{children:"Currently, only serializable item stack attachments are synced between the client and the server.\nThis is done automatically."}),"\n",(0,n.jsxs)(t.p,{children:["To sync block entity, chunk, or entity attachments to a client, you need to ",(0,n.jsx)(t.a,{href:"/Neoforge-Korean-Documentation/en/docs/1.20.4/networking/",children:"send a packet to the client"})," yourself.\nFor chunks, you can use ",(0,n.jsx)(t.code,{children:"ChunkWatchEvent.Sent"})," to know when to send chunk data to a player."]}),"\n",(0,n.jsx)(t.h2,{id:"copying-data-on-player-death",children:"Copying data on player death"}),"\n",(0,n.jsxs)(t.p,{children:["By default, entity data attachments are not copied on player death.\nTo automatically copy an attachment on player death, set ",(0,n.jsx)(t.code,{children:".copyOnDeath()"})," in the attachment builder."]}),"\n",(0,n.jsxs)(t.p,{children:["More complex handling can be implemented via ",(0,n.jsx)(t.code,{children:"PlayerEvent.Clone"})," by reading the data from the original entity and assigning it to the new entity. In this event, the ",(0,n.jsx)(t.code,{children:"#isWasDeath"})," method can be used to distinguish between respawning after death and returning from the End. This is important because the data will already exist when returning from the End, so care has to be taken to not duplicate values in this case."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"NeoForge.EVENT_BUS.register(PlayerEvent.Clone.class, event -> {\n    if (event.isWasDeath() && event.getOriginal().hasData(MY_DATA)) {\n        event.getEntity().getData(MY_DATA).fieldToCopy = event.getOriginal().getData(MY_DATA).fieldToCopy;\n    }\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var n=a(7294);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);