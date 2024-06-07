"use strict";(self.webpackChunkneoforged_docs=self.webpackChunkneoforged_docs||[]).push([[2895],{4282:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>l});var i=s(5893),d=s(1151);const c={sidebar_position:3},r="\uc774\ubca4\ud2b8",t={id:"concepts/events",title:"\uc774\ubca4\ud2b8",description:"\uc774\ubca4\ud2b8\ub294 \uac8c\uc784\uc5d0\uc11c \ud2b9\uc815 \uc0ac\uac74\uc774 \ubc1c\uc0dd\ud588\ub2e4\uace0 \uc54c\ub9ac\ub294 \uc2dc\uc2a4\ud15c\uc73c\ub85c, \ub124\uc624 \ud3ec\uc9c0\uc758 \uc8fc\uc694 \uae30\ub2a5\uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud50c\ub808\uc774\uc5b4\uac00 \uc6b0\ud074\ub9ad \ud560 \ub54c, \uc5d4\ud2f0\ud2f0\uac00 \uc810\ud504\ud560 \ub54c, \ube14\ub85d\uc744 \uadf8\ub9b4 \ub54c, \uac8c\uc784\uc744 \ubd88\ub7ec\uc62c \ub54c \ub4f1\uc5d0 \uc774\ubca4\ud2b8\uac00 \ubc29\uc1a1\ub418\uba70, \ubaa8\ub4dc\ub294 \uc774\ubca4\ud2b8\uc5d0 \uad6c\ub3c5\ud558\uc5ec \uc0ac\uac74 \ubc1c\uc0dd\uc2dc \ud2b9\uc815 \ub3d9\uc791\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/concepts/events.md",sourceDirName:"concepts",slug:"/concepts/events",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/events",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"\uc0ac\uc774\ub4dc",permalink:"/Neoforge-Korean-Documentation/en/docs/concepts/sides"},next:{title:"Access Transformer",permalink:"/Neoforge-Korean-Documentation/en/docs/advanced/accesstransformers"}},o={},l=[{value:"\uc774\ubca4\ud2b8\uc5d0 \ud578\ub4e4\ub7ec \ub4f1\ub85d\ud558\uae30",id:"\uc774\ubca4\ud2b8\uc5d0-\ud578\ub4e4\ub7ec-\ub4f1\ub85d\ud558\uae30",level:2},{value:"<code>IEventBus#addListener</code>",id:"ieventbusaddlistener",level:3},{value:"<code>@SubscribeEvent</code>",id:"subscribeevent",level:3},{value:"<code>@EventBusSubscriber</code>",id:"eventbussubscriber",level:3},{value:"\uc774\ubca4\ud2b8\uc758 \ud2b9\uc131\ub4e4",id:"\uc774\ubca4\ud2b8\uc758-\ud2b9\uc131\ub4e4",level:2},{value:"\ud544\ub4dc\uc640 \uba54\uc11c\ub4dc",id:"\ud544\ub4dc\uc640-\uba54\uc11c\ub4dc",level:3},{value:"\ud074\ub798\uc2a4 \uc0c1\uad00 \uad00\uacc4",id:"\ud074\ub798\uc2a4-\uc0c1\uad00-\uad00\uacc4",level:3},{value:"\ucde8\uc18c \uac00\ub2a5\ud55c \uc774\ubca4\ud2b8",id:"\ucde8\uc18c-\uac00\ub2a5\ud55c-\uc774\ubca4\ud2b8",level:3},{value:"\uc774\ubca4\ud2b8\uc758 \uacb0\uacfc",id:"\uc774\ubca4\ud2b8\uc758-\uacb0\uacfc",level:3},{value:"\uc6b0\uc120\uc21c\uc704",id:"\uc6b0\uc120\uc21c\uc704",level:3},{value:"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc804\uc6a9 \uc774\ubca4\ud2b8",id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\uc804\uc6a9-\uc774\ubca4\ud2b8",level:3},{value:"\uc774\ubca4\ud2b8 \ubc84\uc2a4\ub4e4",id:"\uc774\ubca4\ud2b8-\ubc84\uc2a4\ub4e4",level:2},{value:"\ubaa8\ub4dc \uc0dd\uba85\uc8fc\uae30",id:"\ubaa8\ub4dc-\uc0dd\uba85\uc8fc\uae30",level:3},{value:"<code>InterModComms</code>",id:"intermodcomms",level:4},{value:"\uae30\ud0c0 \ubaa8\ub4dc \ubc84\uc2a4 \uc774\ubca4\ud2b8",id:"\uae30\ud0c0-\ubaa8\ub4dc-\ubc84\uc2a4-\uc774\ubca4\ud2b8",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\uc774\ubca4\ud2b8",children:"\uc774\ubca4\ud2b8"}),"\n",(0,i.jsx)(n.p,{children:"\uc774\ubca4\ud2b8\ub294 \uac8c\uc784\uc5d0\uc11c \ud2b9\uc815 \uc0ac\uac74\uc774 \ubc1c\uc0dd\ud588\ub2e4\uace0 \uc54c\ub9ac\ub294 \uc2dc\uc2a4\ud15c\uc73c\ub85c, \ub124\uc624 \ud3ec\uc9c0\uc758 \uc8fc\uc694 \uae30\ub2a5\uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud50c\ub808\uc774\uc5b4\uac00 \uc6b0\ud074\ub9ad \ud560 \ub54c, \uc5d4\ud2f0\ud2f0\uac00 \uc810\ud504\ud560 \ub54c, \ube14\ub85d\uc744 \uadf8\ub9b4 \ub54c, \uac8c\uc784\uc744 \ubd88\ub7ec\uc62c \ub54c \ub4f1\uc5d0 \uc774\ubca4\ud2b8\uac00 \ubc29\uc1a1\ub418\uba70, \ubaa8\ub4dc\ub294 \uc774\ubca4\ud2b8\uc5d0 \uad6c\ub3c5\ud558\uc5ec \uc0ac\uac74 \ubc1c\uc0dd\uc2dc \ud2b9\uc815 \ub3d9\uc791\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.p,{children:["\uc774\ubca4\ud2b8\ub294 \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub418\uba70, \ubc84\uc2a4\ub97c \ud1b5\ud574 \uc774\ubca4\ud2b8\uc5d0 \uad6c\ub3c5\ud569\ub2c8\ub2e4. \uc774\ub54c \uc774\ubca4\ud2b8\ub294 \uc54c\ub9de\uc740 \ubc84\uc2a4\uc5d0\ub9cc \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uac8c\uc784 \ud50c\ub808\uc774\uc911\uc5d0 \uc77c\uc5b4\ub098\ub294 \uc0ac\uac74\ub4e4\uc740 \uba54\uc778 \ubc84\uc2a4(",(0,i.jsx)(n.code,{children:"NeoForge.EVENT_BUS"}),")\uc5d0 \ubc29\uc1a1\ub418\uace0, \uadf8 \uc678 \ubaa8\ub4dc \ucd08\uae30\ud654\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc774\ubca4\ud2b8\ub4e4\uc740 \uac01 \ubaa8\ub4dc\ubcc4\ub85c \uc0dd\uc131\ub418\ub294 \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \ubc29\uc1a1\ub418\ub294 \uc774\ubca4\ud2b8\ub4e4\uc740 \ub300\ubd80\ubd84 \ub354 \ube60\ub978 \ucd08\uae30\ud654\ub97c \uc704\ud574 \uc5ec\ub7ec \ubaa8\ub4dc\uc5d0 \ubcd1\ub82c\uc801\uc73c\ub85c \ubc29\uc1a1\ub429\ub2c8\ub2e4(\uba54\uc778 \ubc84\uc2a4\ub294 \uba54\uc778 \uc2a4\ub808\ub4dc\ub9cc \uc0ac\uc6a9\ud558\uc5ec \uc774\ubca4\ud2b8\ub97c \ubcd1\ub82c\uc801\uc73c\ub85c \ubc29\uc1a1\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4). \uc790\uc138\ud55c \uc0ac\ud56d\uc740 ",(0,i.jsx)(n.a,{href:"#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EC%8A%A4%EB%93%A4",children:"\uc544\ub798"}),"\ub97c \ucc38\uace0\ud558\uc138\uc694."]}),"\n",(0,i.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8\uc5d0-\ud578\ub4e4\ub7ec-\ub4f1\ub85d\ud558\uae30",children:"\uc774\ubca4\ud2b8\uc5d0 \ud578\ub4e4\ub7ec \ub4f1\ub85d\ud558\uae30"}),"\n",(0,i.jsxs)(n.p,{children:["\ud578\ub4e4\ub7ec\ub294 \uc774\ubca4\ud2b8 \ubc29\uc1a1\uc2dc \uc2e4\ud589\ub418\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \uad6c\ub3c5\ud55c \uc774\ubca4\ud2b8\ub97c \uc778\uc790\ub85c \ubc1b\uace0 ",(0,i.jsx)(n.code,{children:"void"}),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ud578\ub4e4\ub7ec\ub97c \uc774\ubca4\ud2b8\uc5d0 \uad6c\ub3c5\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc740 \uc5ec\ub7ec\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h3,{id:"ieventbusaddlistener",children:(0,i.jsx)(n.code,{children:"IEventBus#addListener"})}),"\n",(0,i.jsx)(n.p,{children:"\uac00\uc7a5 \ub2e8\uc21c\ud558\uac8c \ud578\ub4e4\ub7ec\ub97c \uad6c\ub3c5\ud558\ub294 \ubc29\ubc95\uc73c\ub85c, \uc544\ub798\ucc98\ub7fc \uba54\uc11c\ub4dc \ucc38\uc870\ub97c \ub4f1\ub85d\ud558\ub294 \uac83\uc785\ub2c8\ub2e4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Mod("yourmodid")\npublic class YourMod {\n    public YourMod(IEventBus modBus) { // \ubaa8\ub4dc\ubcc4 \ubc84\uc2a4\ub294 \uc0dd\uc131\uc790 \uc778\uc790\ub85c \uc804\ub2ec\ubc1b\uc74c\n        NeoForge.EVENT_BUS.addListener(YourMod::onLivingJump);\n    }\n\n    // \uc5d4\ud2f0\ud2f0\uac00 \uc810\ud504\ub97c \ud560 \ub54c \ub9c8\ub2e4 \ubc18\uce78\uc529 \ud68c\ubcf5\uc2dc\ud0b4.\n    private static void onLivingJump(LivingJumpEvent event) {\n        Entity entity = event.getEntity();\n        // \uc624\uc9c1 \uc11c\ubc84\uc5d0\uc11c\ub9cc \ud68c\ubcf5\uc2dc\ud0b4\n        if (!entity.level().isClientSide()) {\n            entity.heal(1);\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"subscribeevent",children:(0,i.jsx)(n.code,{children:"@SubscribeEvent"})}),"\n",(0,i.jsxs)(n.p,{children:["\uc704\ucc98\ub7fc \uc9c1\uc811 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc815\ud574 \ub4f1\ub85d\ud558\ub294 \uac83 \ub9d0\uace0\ub3c4, \uc5b4\ub178\ud14c\uc774\uc158\uc73c\ub85c \ud2b9\uc815 \ud568\uc218\uac00 \ud578\ub4e4\ub7ec\ub77c\uace0 \ud45c\uae30\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud578\ub4e4\ub7ec\ub4e4\uc744 \uc815\uc758\ud55c \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc84\uc2a4\uc5d0 \ub4f1\ub85d\ud558\uba74 \uc790\ub3d9\uc73c\ub85c ",(0,i.jsx)(n.code,{children:"@SubscriveEvent"}),"\ub85c \ud45c\uae30\ub41c \ubaa8\ub4e0 \ud568\uc218\ub4e4\uc774 \ud578\ub4e4\ub7ec\ub85c \ub4f1\ub85d\ub429\ub2c8\ub2e4:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class EventHandler {\n    @SubscribeEvent\n    public void onLivingJump(LivingJumpEvent event) {\n        Entity entity = event.getEntity();\n        if (!entity.level().isClientSide()) {\n            entity.heal(1);\n        }\n    }\n}\n\n@Mod("yourmodid")\npublic class YourMod {\n    public YourMod(IEventBus modBus) {\n        NeoForge.EVENT_BUS.register(new EventHandler());\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\ub9cc\uc57d \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub4e4\uc774 \uc804\ubd80 \uc815\uc801 \uba54\uc11c\ub4dc\ub77c\uba74 \uc704\ucc98\ub7fc \uc778\uc2a4\ud134\uc2a4 \ub300\uc2e0 \ud074\ub798\uc2a4 \uc790\uccb4\ub97c \ub118\uaca8\ub3c4 \ub429\ub2c8\ub2e4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class EventHandler {\n\t@SubscribeEvent\n    public static void onLivingJump(LivingJumpEvent event) {\n        Entity entity = event.getEntity();\n        if (!entity.level().isClientSide()) {\n            entity.heal(1);\n        }\n    }\n}\n\n@Mod("yourmodid")\npublic class YourMod {\n    public YourMod(IEventBus modBus) {\n        NeoForge.EVENT_BUS.register(EventHandler.class);\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"eventbussubscriber",children:(0,i.jsx)(n.code,{children:"@EventBusSubscriber"})}),"\n",(0,i.jsxs)(n.p,{children:["\uc704\uc5d0\uc11c \ud55c \ub2e8\uacc4 \ub354 \ub098\uc544\uac00, \ud578\ub4e4\ub7ec\ub97c \uc815\uc758\ud55c \ud074\ub798\uc2a4 \uc790\uccb4\ub97c ",(0,i.jsx)(n.code,{children:"@EventBusSubscriber"}),"\ub85c \ud45c\uae30\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub124\uc624 \ud3ec\uc9c0\ub294 \uc774 \uc5b4\ub178\ud14c\uc774\uc158\uc73c\ub85c \ud45c\uae30\ub41c \ud074\ub798\uc2a4\ub4e4\uc744 \ucc3e\uc544 \uc790\ub3d9\uc73c\ub85c \uc774\ubca4\ud2b8 \ubc84\uc2a4\uc5d0 \ub4f1\ub85d\ud569\ub2c8\ub2e4. \uc774\ub294 ",(0,i.jsx)(n.code,{children:"NeoForge.EVENT_BUS.register(EventHandler.class)"}),"\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uacfc \ub3d9\uc77c\ud558\uae30\uc5d0 \ubaa8\ub4e0 \ud578\ub4e4\ub7ec\ub294 \uc815\uc801 \ud568\uc218\uc5ec\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud544\uc218\ub294 \uc544\ub2c8\uc9c0\ub9cc \uc704 \uc5b4\ub178\ud14c\uc774\uc158\uc758 ",(0,i.jsx)(n.code,{children:"modid"})," \uac12\uc744 \uc9c0\uc815\ud558\ub294 \uac83\uc744 \uac15\ub825\ud788 \uad8c\uc7a5\ub4dc\ub9bd\ub2c8\ub2e4, \uc5b4\ub5a4 \ubaa8\ub4dc\uc758 \ud578\ub4e4\ub7ec\uc778\uc9c0 \uad6c\ubd84\ud558\uae30 \uc26c\uc6cc \uc624\ub958 \ud574\uacb0\uc774 \ub354 \uc218\uc6d4\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4 (\ud2b9\ud788 \ubaa8\ub4dc\ub07c\ub9ac \ucda9\ub3cc\ub0a0 \ub54c)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@EventBusSubscriber(modid = "yourmodid")\npublic class EventHandler {\n    @SubscribeEvent\n    public static void onLivingJump(LivingJumpEvent event) {\n        Entity entity = event.getEntity();\n        if (!entity.level().isClientSide()) {\n            entity.heal(1);\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8\uc758-\ud2b9\uc131\ub4e4",children:"\uc774\ubca4\ud2b8\uc758 \ud2b9\uc131\ub4e4"}),"\n",(0,i.jsx)(n.h3,{id:"\ud544\ub4dc\uc640-\uba54\uc11c\ub4dc",children:"\ud544\ub4dc\uc640 \uba54\uc11c\ub4dc"}),"\n",(0,i.jsx)(n.p,{children:"\uc774\ubca4\ud2b8\uc758 \ud544\ub4dc\uc640 \uba54\uc11c\ub4dc\ub4e4\uc740 \ubc1c\uc0dd\ud55c \uc0ac\uac74\uc758 \uc138\ubd80 \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\uace0, \uc0ac\uac74\uc758 \ucd94\ud6c4 \ud750\ub984\uc744 \uc870\uc791\ud558\ub294\ub370 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc0c8\ub85c\uc6b4 \uc5d4\ud2f0\ud2f0\uac00 \uc18c\ud658\ub418\uc5c8\ub2e4\uba74, \uc774\ub54c \ubc29\uc1a1\ub418\ub294 \uc774\ubca4\ud2b8\ub294 \ucd94\uac00\ub418\ub294 \uc5d4\ud2f0\ud2f0\uc640 \ub808\ubca8\uc744 \ub2f4\uace0 \uc788\uc744 \uac83\uc774\uba70, \uc774\ub4e4\uc744 \uc870\uc791\ud558\uc5ec \uc5d4\ud2f0\ud2f0 \uc18c\ud658 \uacfc\uc815\uc5d0 \uac04\uc12d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"\ud074\ub798\uc2a4-\uc0c1\uad00-\uad00\uacc4",children:"\ud074\ub798\uc2a4 \uc0c1\uad00 \uad00\uacc4"}),"\n",(0,i.jsxs)(n.p,{children:["\uc77c\ubd80 \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,i.jsx)(n.code,{children:"Event"}),"\ub97c \ubc14\ub85c \uc0c1\uc18d\ud558\uc9c0 \uc54a\uace0, \ub300\uc2e0 ",(0,i.jsx)(n.code,{children:"Event"}),"\uc758 \ud558\uc704 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ube14\ub85d \uad00\ub828 \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,i.jsx)(n.code,{children:"BlockEvent"}),"\ub97c \ub300\uc2e0 \uc0c1\uc18d\ud558\uace0, \uc5d4\ud2f0\ud2f0 \uad00\ub828 \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,i.jsx)(n.code,{children:"EntityEvent"}),"\ub97c \uc0c1\uc18d\ud569\ub2c8\ub2e4. \uc774 \ub458\uc740 \ucd94\uc0c1 \ud074\ub798\uc2a4\ub77c\uc11c \uad6c\ub3c5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"\ucd94\uc0c1 \ud074\ub798\uc2a4\uc778 \uc774\ubca4\ud2b8\ub97c \uad6c\ub3c5\ud558\uba74 \ub9cc\ub4e4\uba74 \uac8c\uc784\uc774 \ucda9\ub3cc\ud569\ub2c8\ub2e4."})}),"\n",(0,i.jsx)(n.h3,{id:"\ucde8\uc18c-\uac00\ub2a5\ud55c-\uc774\ubca4\ud2b8",children:"\ucde8\uc18c \uac00\ub2a5\ud55c \uc774\ubca4\ud2b8"}),"\n",(0,i.jsxs)(n.p,{children:["\uc77c\ubd80 \uc774\ubca4\ud2b8\ub4e4\uc740 \uc0ac\uac74 \uc790\uccb4\ub97c \uc911\ub2e8\ud558\ub294\ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub4e4\uc740 ",(0,i.jsx)(n.code,{children:"ICancellableEvent"})," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4. \uc774\ubca4\ud2b8\ub294 ",(0,i.jsx)(n.code,{children:"#setCanceled(boolean canceled)"}),"\ub85c \ucde8\uc18c\ud560 \uc218 \uc788\uc73c\uba70, \ucde8\uc18c \uc5ec\ubd80\ub294 ",(0,i.jsx)(n.code,{children:"#isCanceled()"}),"\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubca4\ud2b8\uac00 \ucde8\uc18c\ub418\uba74 \ub2e4\ub978 \ud578\ub4e4\ub7ec\ub4e4\uc740 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc73c\uba70, \uc774\ubca4\ud2b8\ub97c \ubc1c\uc0dd\uc2dc\ud0a8 \uc0ac\uac74\uc774 \uc911\ub2e8\ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc5d4\ud2f0\ud2f0\uac00 \ub3c4\uc57d\ud560 \ub54c \ubc29\uc1a1\ub418\ub294 ",(0,i.jsx)(n.code,{children:"LivingJumpEvent"}),"\ub97c \ucde8\uc18c\ud558\uba74 \ub3c4\uc57d\uc774 \uc911\ub2e8\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uc774\ubca4\ud2b8 \ucde8\uc18c \uc5ec\ubd80\uc640 \uad00\uacc4 \uc5c6\uc774 \uc5b8\uc81c\ub098 \ud578\ub4e4\ub7ec\ub97c \uc2e4\ud589\ud558\ub824\uba74 ",(0,i.jsx)(n.code,{children:"IEventBus#addListener"}),"(\ub610\ub294 ",(0,i.jsx)(n.code,{children:"@SubscribeEvent"}),")\uc758 ",(0,i.jsx)(n.code,{children:"receiveCanceled"}),"\ub97c ",(0,i.jsx)(n.code,{children:"true"}),"\ub85c \uc9c0\uc815\ud558\uc138\uc694."]}),"\n",(0,i.jsx)(n.h3,{id:"\uc774\ubca4\ud2b8\uc758-\uacb0\uacfc",children:"\uc774\ubca4\ud2b8\uc758 \uacb0\uacfc"}),"\n",(0,i.jsxs)(n.p,{children:["\uc77c\ubd80 \uc774\ubca4\ud2b8\ub294 \ucde8\uc18c\ub9cc \ud558\ub294 \uac83 \ubcf4\ub2e4 \ub354 \uc720\uc5f0\ud558\uac8c \uc0ac\uac74\uc758 \ud750\ub984\uc744 \uc870\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \uc774\ubca4\ud2b8\ub4e4\uc740 \uacb0\uacfc\ub97c \uac00\uc9c0\uba70, \uc774 \uacb0\uacfc\uc5d0 \ub530\ub77c \uc0ac\uac74\uc758 \ud750\ub984\uc774 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ud50c\ub808\uc774\uc5b4\uc758 \uc774\ub984\ud45c\ub97c \uadf8\ub9b4 \ub54c \ubc29\uc1a1\ub418\ub294 ",(0,i.jsx)(n.code,{children:"RenderNameTagEvent"}),"\ub294 ",(0,i.jsx)(n.code,{children:"TriState"}),"\ub97c \uacb0\uacfc\ub85c \uac00\uc9d1\ub2c8\ub2e4. ",(0,i.jsx)(n.code,{children:"TriState"}),"\ub294 ",(0,i.jsx)(n.code,{children:"#TRUE"}),"(\uac15\ud589), ",(0,i.jsx)(n.code,{children:"#DEFAULT"}),"(\uae30\ubcf8), ",(0,i.jsx)(n.code,{children:"#FALSE"}),"(\ucc28\ub2e8) \uc774 \uc138\uac00\uc9c0 \uac12\uc744 \uac00\uc9c0\ub294 \uc5f4\uac70\ud615\uc73c\ub85c, \uacb0\uacfc\uac00 ",(0,i.jsx)(n.code,{children:"#TRUE"}),"\uc77c \ub550 \uc6c5\ud06c\ub9ac\uae30 \uc5ec\ubd80\uc640 \uad00\uacc4 \uc5c6\uc774 \uc774\ub984\ud45c\ub97c \uac15\uc81c\ub85c \ud45c\uc2dc\ud558\uace0, ",(0,i.jsx)(n.code,{children:"#DEFAULT"}),"\ub294 \ubc14\ub2d0\ub77c\ub791 \ub611\uac19\uc774 \uc6c5\ud06c\ub9ac\uae30\ub97c \ud558\uba74 \uc774\ub984\ud45c\ub97c \uc228\uae41\ub2c8\ub2e4. ",(0,i.jsx)(n.code,{children:"#FALSE"}),"\ub294 \uc774\ub984\ud45c\ub97c \uc5b8\uc81c\ub098 \uc228\uae41\ub2c8\ub2e4. \uc774\ub7f0 \uc774\ubca4\ud2b8\ub4e4\uc740 \ub300\uac1c \uacb0\uacfc\ub85c ",(0,i.jsx)(n.code,{children:"TriState"}),"\ub97c \uc0ac\uc6a9\ud558\uc9c0\ub9cc, \uba87\uba87\uc740 ",(0,i.jsx)(n.code,{children:"MobDespawnEvent"}),"\uc640 \uac19\uc774 \uc774\ubca4\ud2b8 \ud074\ub798\uc2a4 \uc790\uccb4\uc801\uc73c\ub85c ",(0,i.jsx)(n.code,{children:"Result"})," \uc5f4\uac70\ud615\uc744 \uc815\uc758\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uc774\ub7f0 \uc774\ubca4\ud2b8\ub4e4\uc758 \uacb0\uacfc\ub294 ",(0,i.jsx)(n.code,{children:"set"}),"\uc73c\ub85c \uc2dc\uc791\ud558\ub294 \uba54\uc11c\ub4dc\ub85c \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// \uc544\ub798 \ub450 \ud578\ub4e4\ub7ec\uac00 \uba54\uc778 \ubc84\uc2a4\uc5d0 \uc62c\ubc14\ub974\uac8c \ub4f1\ub85d\ub418\uc5b4 \uc788\ub2e4\uace0 \uac00\uc815\ud568\n\n@SubscribeEvent\npublic void renderNameTag(RenderNameTagEvent event) {\n    // \uc774 \uc774\ubca4\ud2b8\ub294 \uacb0\uacfc\ub85c TriState\ub97c \uc0ac\uc6a9\ud568\n    event.setCanRender(TriState.FALSE);\n}\n\n@SubscribeEvent\npublic void mobDespawn(MobDespawnEvent event) {\n    // \uc774 \uc774\ubca4\ud2b8\ub294 \uacb0\uacfc\ub85c MobDespawnEvent.Result\ub97c \uc0ac\uc6a9\ud568\n    event.setResult(MobDespawnEvent.Result.DENY);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\uc6b0\uc120\uc21c\uc704",children:"\uc6b0\uc120\uc21c\uc704"}),"\n",(0,i.jsxs)(n.p,{children:["\ud578\ub4e4\ub7ec\ub294 \uc2e4\ud589\ub420 \uc6b0\uc120\uc21c\uc704\ub3c4 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\uc120\uc21c\uc704\ub294 ",(0,i.jsx)(n.code,{children:"EventPriority"}),"\uc5d0 \uc815\uc758\ub418\uc5b4 \uc788\uc73c\uba70, \ub192\uc740 \uc21c\uc704\uc5d0\uc11c \ub0ae\uc740 \uc21c\uc704 \uc21c\uc11c\ub300\ub85c \ub2e4\uc12f\uac00\uc9c0 \uac12\uc774 \uc788\ub294\ub370: ",(0,i.jsx)(n.code,{children:"HIGHEST"}),", ",(0,i.jsx)(n.code,{children:"HIGH"}),", ",(0,i.jsx)(n.code,{children:"NORMAL"})," (\uae30\ubcf8\uac12), ",(0,i.jsx)(n.code,{children:"LOW"}),", ",(0,i.jsx)(n.code,{children:"LOWEST"})," \uc785\ub2c8\ub2e4. \uac19\uc740 \uc6b0\uc120\uc21c\uc704\ub97c \uac00\uc9c0\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \ubc84\uc2a4\uc5d0 \ub4f1\ub85d\ub41c \uc21c\uc11c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4, \uc774\ub294 \uba54\uc778 \ubc84\uc2a4\uc5d0\uc120 \ub300\uccb4\ub85c \ubaa8\ub4dc\ub97c \ubd88\ub7ec\uc628 \uc21c\uc11c\uc640 \uc720\uc0ac\ud558\uace0 \ubaa8\ub4dc\ubcc4 \uc774\ubca4\ud2b8 \ubc84\uc2a4\uc5d0\uc120 \uc815\ud655\ud788 \uc77c\uce58\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uc6b0\uc120\uc21c\uc704\ub294 ",(0,i.jsx)(n.code,{children:"IEventBus#addListener"}),"(\ub610\ub294 ",(0,i.jsx)(n.code,{children:"@SubscribeEvent"}),")\uc758 ",(0,i.jsx)(n.code,{children:"priority"}),"\ub85c \uc124\uc815\ud569\ub2c8\ub2e4. \uc774\ub54c \ubcd1\ub82c\uc801\uc73c\ub85c \ubc29\uc1a1\ub418\ub294 \uc774\ubca4\ud2b8\ub294 \uc6b0\uc120\uc21c\uc704\ub97c \ubb34\uc2dc\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h3,{id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\uc804\uc6a9-\uc774\ubca4\ud2b8",children:"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc804\uc6a9 \uc774\ubca4\ud2b8"}),"\n",(0,i.jsxs)(n.p,{children:["\uc77c\ubd80 \uc774\ubca4\ud2b8\ub4e4\uc740 ",(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/sides",children:"\ud074\ub77c\uc774\uc5b8\ud2b8"}),"\uc5d0\uc11c\ub9cc \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uc774 \uc774\ubca4\ud2b8\ub4e4\uc5d0 \uad6c\ub3c5\ud55c \ud578\ub4e4\ub7ec\ub4e4\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc804\uc6a9 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub2c8 \ubc84\uc2a4\uc5d0 \ub4f1\ub85d\ud560 \ub54c \uc8fc\uc758\ud558\uc138\uc694."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"IEventBus#addListener()"}),"\ub97c \uc0ac\uc6a9\ud574 \uc774 \uc774\ubca4\ud2b8\ub4e4\uc5d0 \uad6c\ub3c5\ud55c\ub2e4\uba74, \uba3c\uc800 \ud578\ub4e4\ub7ec\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc804\uc6a9 \ud074\ub798\uc2a4\uc5d0 \uc791\uc131\ud55c \ub2e4\uc74c, ",(0,i.jsx)(n.code,{children:"FMLEnvironment.dist"}),", \ub610\ub294 \ubaa8\ub4dc \uc9c4\uc785 \uc9c0\uc810\uc758 ",(0,i.jsx)(n.code,{children:"Dist"})," \uc778\uc790 \ub4f1\uc744 \ud1b5\ud574 \ubb3c\ub9ac \uc0ac\uc774\ub4dc\uac00 \ud074\ub77c\uc774\uc5b8\ud2b8\uc784\uc744 \ud655\uc778\ud558\uace0, \uadf8 \ub2e4\uc74c\uc5d0 \ud578\ub4e4\ub7ec\ub97c \ub4f1\ub85d\ud558\uc138\uc694."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@EventBusSubscriber"}),"\ub97c \uc0ac\uc6a9\ud574 \uc774 \uc774\ubca4\ud2b8\ub4e4\uc5d0 \uad6c\ub3c5\ud55c\ub2e4\uba74, \uc5b4\ub178\ud14c\uc774\uc158\uc758 ",(0,i.jsx)(n.code,{children:"value"}),"\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \ubb3c\ub9ac \uc0ac\uc774\ub4dc\ub97c \ud074\ub77c\uc774\uc5b8\ud2b8\ub77c\uace0 \uc9c0\uc815\ud558\uc138\uc694: ",(0,i.jsx)(n.code,{children:'@EventBusSubscriber(value = Dist.CLIENT, modid = "yourmodid")'}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"\uc774\ubca4\ud2b8-\ubc84\uc2a4\ub4e4",children:"\uc774\ubca4\ud2b8 \ubc84\uc2a4\ub4e4"}),"\n",(0,i.jsxs)(n.p,{children:["\ub300\ubd80\ubd84\uc758 \uc774\ubca4\ud2b8\ub4e4\uc740 \uba54\uc778 \ubc84\uc2a4, ",(0,i.jsx)(n.code,{children:"NeoForge.EVENT_BUS"}),"\uc5d0 \ubc29\uc1a1\ub418\uc9c0\ub9cc, \uadf8 \uc678\ub294 \ubaa8\ub4dc\ubcc4 \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub429\ub2c8\ub2e4. \ubaa8\ub4dc\ubcc4 \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub418\ub294 \uc774\ubca4\ud2b8\ub4e4\uc740 \uad6c\ubd84\uc744 \uc704\ud574 ",(0,i.jsx)(n.code,{children:"IModBusEvent"}),"\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\ubaa8\ub4dc\ubcc4 \ubc84\uc2a4\ub294 \ubaa8\ub4dc \uc9c4\uc785\uc810\uc758 \uc0dd\uc131\uc790\uc758 \uc778\uc790\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \ud578\ub4e4\ub7ec\ub4e4\uc744 \ub4f1\ub85d\ud558\uc138\uc694. \ub9cc\uc57d \ud578\ub4e4\ub7ec\ub97c ",(0,i.jsx)(n.code,{children:"@EventBusSubscriber"}),"\ub85c \uc790\ub3d9\uc73c\ub85c \uad6c\ub3c5\ud558\uc2e0\ub2e4\uba74 \uc5b4\ub178\ud14c\uc774\uc158\uc758 \uc778\uc790\ub85c \ubc84\uc2a4\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4: ",(0,i.jsx)(n.code,{children:'@EventBusSubscriber(bus = Bus.MOD, modid = "yourmodid")'}),". \ubc84\uc2a4\ub294 \uae30\ubcf8\uac12\uc73c\ub85c ",(0,i.jsx)(n.code,{children:"Bus.GAME"}),", \uc989 \uba54\uc778 \ubc84\uc2a4\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h3,{id:"\ubaa8\ub4dc-\uc0dd\uba85\uc8fc\uae30",children:"\ubaa8\ub4dc \uc0dd\uba85\uc8fc\uae30"}),"\n",(0,i.jsxs)(n.p,{children:["\ubaa8\ub4dc \ubc84\uc2a4\uc5d0 \ubc29\uc1a1\ub418\ub294 \uc774\ubca4\ud2b8\ub4e4\uc740 \ubaa8\ub4dc\uc758 \uc0dd\uba85\uc8fc\uae30\ub97c \uc54c\ub9ac\ub294\ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc0dd\uba85\uc8fc\uae30\ub294 \uac8c\uc784\uc774 \uc9c0\uae08 \ubb34\uc5c7\uc744 \ubd88\ub7ec\uc624\uace0 \uc788\ub294\uc9c0, \ubaa8\ub4dc\uac00 \ubb34\uc5c7\uc744 \ucd08\uae30\ud654 \ud574\uc57c \ud558\ub294\uc9c0 \uc54c\ub9b4 \ub54c \uc0ac\uc6a9\ub418\uba70 \uac8c\uc784\uc744 \ucc98\uc74c \uc2dc\uc791\ud558\uace0 \ubd88\ub7ec\uc62c \ub54c \ubc29\uc1a1\ub429\ub2c8\ub2e4. \uc774 \uc774\ubca4\ud2b8\ub4e4\uc740 \ub300\uac1c ",(0,i.jsx)(n.code,{children:"ParallelDispatchEvent"}),"\uc758 \uc790\uc2dd \ud074\ub798\uc2a4\uc774\uba70, \ubcd1\ub82c\uc801\uc73c\ub85c \ubc29\uc1a1\ub429\ub2c8\ub2e4. \ub9cc\uc57d \uba54\uc778 \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud574\uc57c \ud558\ub294 \ucf54\ub4dc\uac00 \uc788\ub2e4\uba74, ",(0,i.jsx)(n.code,{children:"#enqueueWork(Runnable runnable)"}),"\uc744 \ud638\ucd9c\ud558\uc138\uc694."]}),"\n",(0,i.jsx)(n.p,{children:"\ubaa8\ub4dc\uc758 \uc0dd\uba85\uc8fc\uae30\ub294 \ud06c\uac8c \ub2e4\uc74c\uacfc \uac19\uc740 \uc21c\uc11c\ub97c \ub530\ub985\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ubaa8\ub4dc \uc9c4\uc785 \uc9c0\uc810\uc774 \ud638\ucd9c\ub428. \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ub4f1\ub85d\ud560 \uac83."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@EventBusSubscriber"}),"\ub85c \ud45c\uae30\ub41c \ud074\ub798\uc2a4\ub4e4\uc744 \ucc3e\uace0 \ub4f1\ub85d\ud568."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FMLConstructModEvent"}),"\uac00 \ubc29\uc1a1\ub428."]}),"\n",(0,i.jsxs)(n.li,{children:["\ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc774\ubca4\ud2b8\uac00 \ubc29\uc1a1\ub428: ",(0,i.jsxs)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/registries#custom-registries",children:["\ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc0dd\uc131\uc744 \uc54c\ub9ac\ub294 ",(0,i.jsx)(n.code,{children:"NewRegistryEvent"})]}),", ",(0,i.jsxs)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/registries#custom-datapack-registries",children:["\ub370\uc774\ud130\ud329 \ub808\uc9c0\uc2a4\ud2b8\ub9ac \uc0dd\uc131\uc744 \uc54c\ub9ac\ub294 ",(0,i.jsx)(n.code,{children:"DataPackRegistryEvent.NewRegistry"})]}),", ",(0,i.jsxs)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/registries#registerevent",children:["\uac01 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\ub9c8\ub2e4 \ubc29\uc1a1\ub418\ub294 ",(0,i.jsx)(n.code,{children:"RegisterEvent"})]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FMLCommonSetupEvent"}),"\uac00 \ubc29\uc1a1\ub428. \uae30\ud0c0 \ubaa8\ub4dc \ucd08\uae30\ud654\uac00 \uc5ec\uae30\uc11c \uc774\ub904\uc9d0."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/Neoforge-Korean-Documentation/en/docs/concepts/sides",children:"\uc0ac\uc774\ub4dc \ucd08\uae30\ud654"})," \uc774\ubca4\ud2b8\uac00 \ubc29\uc1a1\ub428: \ubb3c\ub9ac \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc120 ",(0,i.jsx)(n.code,{children:"FMLClientSetupEvent"}),", \ubb3c\ub9ac \uc11c\ubc84\uc5d0\uc120 ",(0,i.jsx)(n.code,{children:"FMLDedicatedServerSetupEvent"}),"\uac00 \ubc29\uc1a1\ub428."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"InterModComms"}),"\ub97c \ucc98\ub9ac\ud568(\uc544\ub798 \ucc38\uace0)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FMLLoadCompleteEvent"}),"\uac00 \ubc29\uc1a1\ub428."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"intermodcomms",children:(0,i.jsx)(n.code,{children:"InterModComms"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"InterModComms"}),"\uc740 \ubaa8\ub4dc\ub4e4\ub07c\ub9ac \uba54\uc138\uc9c0\ub85c \ud1b5\uc2e0\ud560 \ub54c \uc0ac\uc6a9\ud558\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4, \ubaa8\ub4dc\uac04 \ud638\ud658\uc131\uc5d0 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uc774 \ud074\ub798\uc2a4\ub294 \ubaa8\ub4dc\ub4e4\uc774 \ubcf4\ub0b8 \ubaa8\ub4e0 \uba54\uc138\uc9c0\ub4e4\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4. ",(0,i.jsx)(n.code,{children:"InterModComms"}),"\uc758 \uba54\uc11c\ub4dc\ub4e4\uc740 \uc5b4\ub5a4 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ud638\ucd9c\ud574\ub3c4 \uc548\uc804\ud569\ub2c8\ub2e4(thread-safe). \uc774 \uc2dc\uc2a4\ud15c\uc740 \ub450 \uac1c\uc758 \uc774\ubca4\ud2b8\ub97c \ubc29\uc1a1\ud558\ub294\ub370: ",(0,i.jsx)(n.code,{children:"InterModEnqueueEvent"}),"\uc640 ",(0,i.jsx)(n.code,{children:"InterModProcessEvent"})," \uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"InterModEnqueueEvent"}),"\ub294 \uba54\uc138\uc9c0\ub97c \uc804\uc1a1\ud560 \ub54c\ub97c \uc54c\ub9ac\ub294 \uc774\ubca4\ud2b8 \uc785\ub2c8\ub2e4, \ud578\ub4e4\ub7ec\uc5d0\uc11c ",(0,i.jsx)(n.code,{children:"InterModComms#sendTo"}),"\ub97c \ud638\ucd9c\ud574 \ub2e4\ub978 \ubaa8\ub4dc\uc5d0 \uba54\uc138\uc9c0\ub97c \uc804\uc1a1\ud558\uc138\uc694. \uc774\ub54c \uba54\uc138\uc9c0\ub97c \ubc1b\uc744 \ubaa8\ub4dc\uc758 \uc544\uc774\ub514, \uac01 \uba54\uc138\uc9c0\ub97c \uad6c\ubd84\ud558\uae30 \uc704\ud55c \ud0a4, \uba54\uc138\uc9c0\uc758 \ub0b4\uc6a9\uc744 \uc0dd\uc131\ud558\ub294 ",(0,i.jsx)(n.code,{children:"Supplier"}),"\ub97c \ub2f4\uc544\uc11c \ubcf4\ub0c5\ub2c8\ub2e4. \ub610\ud55c \uc120\ud0dd\uc801\uc73c\ub85c \uba54\uc138\uc9c0\ub97c \ubcf4\ub0b8 \ubaa8\ub4dc\uc758 \uc544\uc774\ub514\ub3c4 \ub2f4\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uc774\ud6c4, \uba54\uc138\uc9c0\ub97c \ucc98\ub9ac\ud560 \ub54c\ub97c \uc54c\ub9ac\ub294 ",(0,i.jsx)(n.code,{children:"InterModProcessEvent"}),"\uac00 \ubc29\uc1a1\ub418\uba74, \ud578\ub4e4\ub7ec\uc5d0\uc11c ",(0,i.jsx)(n.code,{children:"InterModComms#getMessages"}),"\ub85c \uc218\uc2e0\ud55c \ubaa8\ub4e0 \uba54\uc138\uc9c0(",(0,i.jsx)(n.code,{children:"IMCMessage"}),")\ub4e4\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.jsx)(n.code,{children:"IMCMessage"}),"\ub294 \uc704\uc5d0\uc11c \uba54\uc138\uc9c0\ub97c \ubcf4\ub0bc \ub54c\uc640 \uac19\uc774 \uc218\uc2e0\uc790, \uc1a1\uc2e0\uc790, \ud0a4, \uba54\uc138\uc9c0 \ub0b4\uc6a9\uc744 \uc0dd\uc131\ud558\ub294 ",(0,i.jsx)(n.code,{children:"Supplier"}),"\ub97c \ub2f4\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h3,{id:"\uae30\ud0c0-\ubaa8\ub4dc-\ubc84\uc2a4-\uc774\ubca4\ud2b8",children:"\uae30\ud0c0 \ubaa8\ub4dc \ubc84\uc2a4 \uc774\ubca4\ud2b8"}),"\n",(0,i.jsx)(n.p,{children:"\uc0dd\uba85\uc8fc\uae30 \uc774\ubca4\ud2b8 \uc774\uc678\uc5d0\ub3c4 \uae30\ud0c0 \ucd08\uae30\ud654 \uc774\ubca4\ud2b8\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc774\ubca4\ud2b8\ub4e4\uc740 \ubcd1\ub82c\uc801\uc73c\ub85c \ubc29\uc1a1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"RegisterColorHandlersEvent"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ModelEvent.BakingCompleted"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"TextureAtlasStitchedEvent"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\uc704 \uc774\ubca4\ud2b8\ub4e4\uc740 \ubc84\uc804 \ud638\ud658\uc131\uc744 \uc704\ud574 \ubaa8\ub4dc \ubc84\uc2a4\uc5d0\uc11c \ubc29\uc1a1\ub41c \uac83\uc774\uba70, \uc5b8\uc820\uac00 \uba54\uc778 \ubc84\uc2a4\ub85c \uc62e\uaca8\uc9c8 \uc608\uc815\uc785\ub2c8\ub2e4."})})]})}function a(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>r});var i=s(7294);const d={},c=i.createContext(d);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);