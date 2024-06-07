"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[8515],{1535:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=a(5893),o=a(1151);const r={},i="\uc0c8\ub85c\uc6b4 \ud328\ud0b7 \ub4f1\ub85d\ud558\uae30",s={id:"networking/payload",title:"\uc0c8\ub85c\uc6b4 \ud328\ud0b7 \ub4f1\ub85d\ud558\uae30",description:"\ud328\ud0b7\uc740 \uc784\uc758\uc758 \ub370\uc774\ud130\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84\uac00 \uc11c\ub85c \uc8fc\uace0\ubc1b\uc744 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uac01 \ud328\ud0b7\uc740 \ud55c \ub124\uc784 \uc2a4\ud398\uc774\uc2a4 \uc544\ub798 PayloadRegistrar(\ud328\ud0b7 \uc9d1\ud569)\uc5d0 \ub4f1\ub85d\ud558\uba70, \uc774\ub294 RegisterPayloadHandlerEvent\ub97c \ud1b5\ud574 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/networking/payload.md",sourceDirName:"networking",slug:"/networking/payload",permalink:"/Neoforge-Korean-Documentation/en/docs/networking/payload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"\uc5d4\ud2f0\ud2f0 \ud1b5\uc2e0",permalink:"/Neoforge-Korean-Documentation/en/docs/networking/entities"},next:{title:"Stream Codecs",permalink:"/Neoforge-Korean-Documentation/en/docs/networking/streamcodecs"}},d={},l=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\uc0c8\ub85c\uc6b4-\ud328\ud0b7-\ub4f1\ub85d\ud558\uae30",children:"\uc0c8\ub85c\uc6b4 \ud328\ud0b7 \ub4f1\ub85d\ud558\uae30"}),"\n",(0,t.jsxs)(n.p,{children:["\ud328\ud0b7\uc740 \uc784\uc758\uc758 \ub370\uc774\ud130\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc11c\ubc84\uac00 \uc11c\ub85c \uc8fc\uace0\ubc1b\uc744 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uac01 \ud328\ud0b7\uc740 \ud55c \ub124\uc784 \uc2a4\ud398\uc774\uc2a4 \uc544\ub798 ",(0,t.jsx)(n.code,{children:"PayloadRegistrar"}),"(\ud328\ud0b7 \uc9d1\ud569)\uc5d0 \ub4f1\ub85d\ud558\uba70, \uc774\ub294 ",(0,t.jsx)(n.code,{children:"RegisterPayloadHandlerEvent"}),"\ub97c \ud1b5\ud574 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@SubscribeEvent\npublic static void register(final RegisterPayloadHandlerEvent event) {\n    // Sets the current network version\n    final PayloadRegistrar registrar = event.registrar("1");\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \uc544\ub798 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud55c\ub2e4\uace0 \ud560 \ub54c:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public record MyData(String name, int age) {}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"CustomPacketPayload"}),"\uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\ub85c \uc804\uc1a1\ub420 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4dc\uc138\uc694."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public record MyData(String name, int age) implements CustomPacketPayload {\n    \n    public static final CustomPacketPayload.Type<MyData> TYPE = new CustomPacketPayload.Type<>(new ResourceLocation(\"mymod\", \"my_data\"));\n\n    // Each pair of elements defines the stream codec of the element to encode/decode and the getter for the element to encode\n    // 'name' will be encoded and decoded as a string\n    // 'age' will be encoded and decoded as an integer\n    // The final parameter takes in the previous parameters in the order they are provided to construct the payload object\n    public static final StreamCodec<ByteBuf, MyData> STREAM_CODEC = StreamCodec.composite(\n        ByteBufCodecs.STRING_UTF8,\n        MyData::name,\n        ByteBufCodecs.VAR_INT,\n        MyData::age,\n        MyData::new\n    )\n    \n    @Override\n    public CustomPacketPayload.Type<? extends CustomPacketPayload> type() {\n        return TYPE;\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see from the example above the ",(0,t.jsx)(n.code,{children:"CustomPacketPayload"})," interface requires us to implement the ",(0,t.jsx)(n.code,{children:"type"})," method. The ",(0,t.jsx)(n.code,{children:"type"})," method is responsible for returning a unique identifier for this payload. We then also need a reader to register this later on with the ",(0,t.jsx)(n.code,{children:"StreamCodec"})," to read and write the payload data."]}),"\n",(0,t.jsx)(n.p,{children:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c, \uc704 \ud328\ud0b7 \uc9d1\ud569\uc5d0 \ub4f1\ub85d\ud558\uc138\uc694:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@SubscribeEvent\npublic static void register(final RegisterPayloadHandlerEvent event) {\n    final PayloadRegistrar registrar = event.registrar("1");\n    registrar.playBidirectional(\n        MyData.Type,\n        MyData.STREAM_CODEC,\n        new DirectionalPayloadHandler<>(\n            ClientPayloadHandler::handleData,\n            ServerPayloadHandler::handleData\n        )\n    );\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Dissecting the code above we can notice a couple of things:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The registrar has ",(0,t.jsx)(n.code,{children:"play*"})," methods, that can be used for registering payloads which are sent during the play phase of the game.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Not visible in this code are the methods ",(0,t.jsx)(n.code,{children:"configuration*"})," and ",(0,t.jsx)(n.code,{children:"common*"}),"; however, they can also be used to register payloads for the configuration phase. The ",(0,t.jsx)(n.code,{children:"common"})," method can be used to register payloads for both the configuration and play phase simultaneously."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The registrar uses a ",(0,t.jsx)(n.code,{children:"*Bidirectional"})," method, that can be used for registering payloads which are sent to both the logical server and logical client.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Not visible in this code are the methods ",(0,t.jsx)(n.code,{children:"*ToClient"})," and ",(0,t.jsx)(n.code,{children:"*ToServer"}),"; however, they can also be used to register payloads to only the logical client or only the logical server, respectively."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The type of the payload is used as a unique identifier for the payload."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/networking/streamcodecs",children:"stream codec"})," is used to read and write the payload to and from the buffer sent across the network"]}),"\n",(0,t.jsxs)(n.li,{children:["The payload handler is a callback for when the payload arrives on one of the logical sides.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If a ",(0,t.jsx)(n.code,{children:"*Bidirectional"})," method is used, a ",(0,t.jsx)(n.code,{children:"DirectionalPayloadHandler"})," can be used to provide two separate payload handlers for each of the logical sides."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc774\uc81c \uc0c8\ub85c\uc6b4 \ud328\ud0b7\uc744 \ub4f1\ub85d\ud588\uc73c\ub2c8 \uc218\uc2e0 \uc2dc \uc218\ud589\ud560 \ub3d9\uc791\uc744 \uad6c\ud604\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uac04\uacb0\ud568\uc744 \uc704\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc218\uc2e0\uc2dc \ub3d9\uc791\ub9cc \ub2e4\ub8e8\uaca0\uc9c0\ub9cc, \uc11c\ubc84\ub3c4 \uc774\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class ClientPayloadHandler {\n    \n    public static void handleData(final MyData data, final IPayloadContext context) {\n        // \ub124\ud2b8\uc6cc\ud06c \uc2a4\ub808\ub4dc\uc5d0\uc11c \ud328\ud0b7 \ub370\uc774\ud130 \uc0ac\uc6a9\n        blah(data.name());\n        \n        // \uba54\uc778 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ub370\uc774\ud130 \uc0ac\uc6a9\n        context.enqueueWork(() -> {\n            blah(data.age());\n        })\n        .exceptionally(e -> {\n            // \uc608\uc678 \ucc98\ub9ac\n            context.disconnect(Component.translatable("my_mod.networking.failed", e.getMessage()));\n            return null;\n        });\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\uc704 \uc608\uc2dc\uc5d0\uc11c \uc8fc\ubaa9\ud558\uc2e4 \uc810\uc740:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\ud328\ud0b7 \ucc98\ub9ac \ud568\uc218\ub294 \ud328\ud0b7\ub9cc \ubc1b\ub294 \uac8c \uc544\ub2c8\ub77c, \ud328\ud0b7\uc744 \ub204\uac00 \uc218\uc2e0\ud588\ub294\uc9c0, \ubcf4\ub0b8 \uc0ac\ub78c\uc740 \ub204\uad70\uc9c0 \ub4f1\uc744 \ub0b4\ud3ec\ud558\ub294 \ub9e5\ub77d(context)\ub3c4 \uc804\ub2ec\ubc1b\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"#play"}),"\ub85c \ub4f1\ub85d\ud55c \ud328\ud0b7\uacfc ",(0,t.jsx)(n.code,{children:"#configuration"}),"\uc73c\ub85c \ub4f1\ub85d\ud55c \ud328\ud0b7\uc740 \uc804\ub2ec\ubc1b\ub294 \ub9e5\ub77d\uc758 \ud0c0\uc785\uc774 \ub2e4\ub974\uae30 \ub54c\ubb38\uc5d0(",(0,t.jsx)(n.code,{children:"PlayPayloadContext"})," vs ",(0,t.jsx)(n.code,{children:"ConfigurationPayloadContext"}),"), \ud328\ud0b7 \uc9d1\ud569\uc5d0 ",(0,t.jsx)(n.code,{children:"#common"}),"\uc744 \ud1b5\ud574 \ub4f1\ub85d\ud558\uc168\ub2e4\uba74 ",(0,t.jsx)(n.code,{children:"IPayloadContext"}),"\ub97c \ub300\uc2e0 \uc778\uc790\ub85c \ubc1b\uc73c\uc154\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.li,{children:"\ud328\ud0b7 \ucc98\ub9ac \ud568\uc218\ub294 \ub124\ud2b8\uc6cc\ud06c \uc2a4\ub808\ub4dc\uc5d0\uc11c \ud638\ucd9c\ub429\ub2c8\ub2e4. \ubcf8 \uac8c\uc784\uacfc \ubcd1\ub82c\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uae30 \ub54c\ubb38\uc5d0 \ubd80\ud558\uac00 \ud070 \uc791\uc5c5\uc740 \uc5ec\uae30\uc11c \uc218\ud589\ud558\uc138\uc694."}),"\n",(0,t.jsxs)(n.li,{children:["\ub9cc\uc57d \uba54\uc778 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud574\uc57c \ud55c\ub2e4\uba74 ",(0,t.jsx)(n.code,{children:"enqueueWork"}),"\ub97c \ud1b5\ud574 \uba54\uc778 \uc2a4\ub808\ub4dc\uc5d0 \uc791\uc5c5\uc744 \uc804\uc1a1\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\uc704 \uba54\uc11c\ub4dc\ub294 \uba54\uc778 \uc2a4\ub808\ub4dc\uc5d0 \uc791\uc5c5\uc744 \uc804\uc1a1\ud560 ",(0,t.jsx)(n.code,{children:"ISynchronizedWorkHandler"}),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"submitAsync"}),"\ub294 ",(0,t.jsx)(n.code,{children:"CompletableFuture"}),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ud55c\ubc88\uc5d0 \ub2e4\ub978 ",(0,t.jsx)(n.code,{children:"Future"}),"\uc640 \uc5ee\uace0 \uc608\uc678\ucc98\ub9ac\ub97c \ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CompletableFuture"}),"\uc758 \uc608\uc678\ub97c \ucc98\ub9ac\ud558\uc9c0 \uc54a\uc73c\uc2dc\uba74 \ubb34\uc2dc\ub418\uc5b4 ",(0,t.jsx)(n.strong,{children:"\uc624\ub958\uac00 \ub0ac\ub294\uc9c0\ub3c4 \ubaa8\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Now that you know how you can facilitate the communication between the client and the server for your mod, you can start implementing your own payloads.\nWith your own payloads you can then use those to configure the client and server using [Configuration Tasks][]"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>i});var t=a(7294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);